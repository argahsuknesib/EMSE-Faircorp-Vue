<template>
  <div class="heater">
    <h1>Faircorp - Heater Table</h1>
    <table class="heater">
      <thead>
        <tr>
          <th v-for="key in columns" v-bind:key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="values in this.heaters" v-bind:key="values.id">
          <td>{{ values.id }}</td>
          <td>{{ values.name }}</td>
          <td>{{ values.power }}</td>
          <td>{{ values.heaterStatus }}</td>
          <td>{{ values.roomName }}</td>
          <td>{{ values.roomId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { API_KUSHAGRA } from "../config";

export default {
  name: "heater",
  data() {
    return {
      heaters: [],
      columns: ["ID", "Name", "Power", "Heater Status", "Room Name", "Room ID"],
    };
  },
  created: async function () {
    let response = await axios.get(`${API_KUSHAGRA}/api/heater`);
    let heaters = response.data;
    this.heaters = heaters;
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
