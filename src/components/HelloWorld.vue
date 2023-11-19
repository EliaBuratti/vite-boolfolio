<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import NavBar from './partials/NavBar.vue';
import FooterInfo from './partials/FooterInfo.vue';
export default {
  name: 'HelloWorld',

  components: {
    ProjectCard,
    NavBar,
    FooterInfo,
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
  <NavBar />
  <div class="container">
    <div class="row row-cols-3">
      <ProjectCard v-for="project in projects" :ProjectCard="project" />
    </div>
  </div>
  <FooterInfo />
</template>

<style lang="scss" scoped></style>
