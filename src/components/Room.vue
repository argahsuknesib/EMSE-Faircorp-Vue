<template>
  <div class="room">
    <h1>Faircorp - Room Table</h1>
    <table class="room">
      <thead>
        <tr>
          <th v-for="key in columns" v-bind:key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="values in this.rooms" v-bind:key="values.id">
          <td>{{ values.id }}</td>
          <td>{{ values.floor }}</td>
          <td>{{ values.name }}</td>
          <td>{{ values.currentTemperature }}</td>
          <td>{{ values.targetTemperature }}</td>
          <td>{{ values.noOfOpenWindow }}</td>
          <td>{{ values.noOfOnHeater }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { API_KUSHAGRA } from "../config";

export default {
  name: "room",
  data() {
    return {
      rooms: [],
      columns: [
        "ID",
        "Floor",
        "Name",
        "Current Temperature",
        "Target Temperature",
        "Open Windows",
        "On Heaters",
      ],
    };
  },
  created: async function () {
    let response = await axios.get(`${API_KUSHAGRA}/api/room`);
    let rooms = response.data;
    this.rooms = rooms;
  },
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
