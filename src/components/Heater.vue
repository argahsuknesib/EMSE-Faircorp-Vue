<template>
  <div class="heater">
    <table class="table">
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
              <td>{{ values.power}}</td>
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
  props: ["room"],
  data() {
    return {
      heaters: [],
      columns: [
        "ID",
        "Name",
        "Power",
        "Heater Status",
        "Room Name",
        "Room ID",
        "Room",
      ],
      key: "",
    };
  },

  async function() {
    let response = await axios.get(`${API_KUSHAGRA}/api/heater`);
    this.heaters = response.data;
    heaters = this.heaters;
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
