<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',

  data() {
    return {

      base_url: 'http://127.0.0.1:8000/api',
    }
  },

  methods: {


    getData() {

      axios.get(this.base_url)
        .then(response => {
          console.log(response);
        })
    }
  },

  created() {
    this.getData();
  }

}
</script>

<template>
  <h1>ciao bi</h1>
</template>

<style lang="scss" scoped></style>
