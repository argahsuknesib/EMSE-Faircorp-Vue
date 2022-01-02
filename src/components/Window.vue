<template>
    <div class="window">
        <table class = "heater">
            <thead>
                <tr>
                    <th v-for="key in columns" v-bind:key="key">
                        {{ key }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="values in this.heaters" v-bind:key = "values.id">
                    <td>{{values.id}}</td>
                    <td>{{values.name}}</td>
                    <td>{{values.windowStatus}}</td>
                    <td>{{values.room}}</td>
                    <td>{{values.roomName}}</td>
                    <td>{{values.roomId}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from "axios";
import {API_KUSHAGRA} from "../config";

export default {
    name : "window",
    data() {
        return {
            windows : [],
            columns : [
                "ID",
                "Name",
                "Window Status",
                "Room",
                "Room Name",
                "Room ID"
            ],
        }
    },
    created : async function(){
        let response = await axios.get(`${API_KUSHAGRA}/api/window`);
        let windows = response.data;
        this.windows = windows;
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
