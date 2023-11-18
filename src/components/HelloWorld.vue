<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'HelloWorld',

  components: {
    ProjectCard,
  },
  data() {
    return {

      base_url: 'http://localhost/api/project',
      projects: '',
    }
  },

  methods: {


    getData() {

      axios.get(this.base_url)
        .then(response => {

          this.projects = response.data.response.data;
          console.log(this.projects);
        })
    }
  },

  created() {
    this.getData();
  }

}
</script>


<template>
  <div class="container">
    <ProjectCard v-for="project in projects" :ProjectCard="project" />
  </div>
</template>

<style lang="scss" scoped></style>
