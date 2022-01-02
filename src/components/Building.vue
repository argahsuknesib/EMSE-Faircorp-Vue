<template>
  <div class="building">
    <table class="building">
        <thead>
            <tr>
                <th v-for="key in columns" v-bind:key="key">
                    {{ key }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="values in this.building" v-bind:key="values.id">
                
            </tr>
        </tbody>
    </table>
  </div>
</template>


<script>

import axios from "axios";
import { API_KUSHAGRA } from "../config";

export default {
    name : "building",
    data() {
        return {
            building : [],
            columns : [
                "ID",
                "Name",
                "Temperature",
                "Rooms",
                "Windows"
            ],
        }
    },

    created: async function(){
        let response = await axios.get(`${API_KUSHAGRA}/api/building`);
        let building = response.data;
        this.building = building;
    }
}
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