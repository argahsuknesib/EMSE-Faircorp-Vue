<template>
  <div class="window">
    <h1>Faircorp - Window Table</h1>
    <table class="heater">
      <thead>
        <tr>
          <th v-for="key in columns" v-bind:key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="values in this.windows" v-bind:key="values.id">
          <td>{{ values.id }}</td>
          <td>{{ values.name }}</td>
          <td>{{ values.windowStatus }}</td>
          <td>{{ values.roomName }}</td>
          <td>{{ values.roomId }}</td>
          <td>
            <button
              type="button"
              class="btn p-2 btn-secondary me-2"
              v-on:click="switchWindow"
            >
              {{ isWindowOpen ? "Close" : "Open" }} window
            </button>
          </td>

          <td>
            <button
              type="button"
              class="btn p-2 btn-danger me-2"
              v-on:click="deleteWindow"
            >
              Delete window
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { API_KUSHAGRA } from "../config";

export default {
  name: "window",
  data() {
    return {
      windows: [],
      columns: [
        "ID",
        "Name",
        "Window Status",
        "Room Name",
        "Room ID",
        "Open Window",
        "Delete Window",
      ],
    };
  },
  created: async function () {
    let response = await axios.get(`${API_KUSHAGRA}/api/window`);
    let windows = response.data;
    this.windows = windows;
  },
  methods: {
    async switchWindow() {
      let response = await axios.put(
        `${API_KUSHAGRA}/api/windows/${this.window.id}/switch`
      );
      let updatedWindow = response.data;
      this.$emit("window-updated", updatedWindow);
    },
    async deleteWindow() {
      await axios.delete(`${API_KUSHAGRA}/api/windows/${this.window.id}`);
      location.reload();
    },
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
