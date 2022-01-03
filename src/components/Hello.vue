<template>
  <div class="hello">
    <h2>Hello, {{ hello }}.</h2>
  </div>
</template>

<script>
import axios from "axios";
import { API_KUSHAGRA } from "../config";

export default {
  name: "hello",
  data() {
    return {
      hello: "Kushagra",
    };
  },

  created: async function () {
    let response = await axios.get(`${API_KUSHAGRA}/api/hello/{value}`);
    let hello = response.data;
    this.hello = hello;
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
