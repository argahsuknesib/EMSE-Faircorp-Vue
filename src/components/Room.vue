<template>
    <div class="room">
        <table class = "room">
            <thead>
                <tr>
                    <th v-for="key in columns" v-bind:key="key">
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="values in this.rooms" v-bind:key="values.id">
                    <td>{{values.id}}</td>
                    <td>{{values.floor}}</td>
                    <td>{{values.name}}</td>
                    <td>{{values.currentTemperatures}}</td>
                    <td>{{values.targetTemperatures}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from "axios";
import {API_KUSHAGRA} from "../config";

export default {
    name : "room",
    data(){
        return {
            rooms : [],
            columns : [
                "ID",
                "Floor",
                "Name",
                "Current Temperature",
                "Target Temperature",
                "Heaters"
            ],
        }
    },
    created : async function(){
        let response = await axios.get(`${API_KUSHAGRA}/api/room`);
        let rooms = response.data;
        this.rooms = rooms;
    }
};
</script>

<style>
@import "../assets/css/table.css";
.clickable {
  cursor: pointer;
}
td {
  padding: 10px;
}
</style>
