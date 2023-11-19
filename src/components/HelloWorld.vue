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
      page_url: '',
      projects: '',
      active_page: 1,
      next_link: '',
      prev_link: '',
      total_page: '',
    }
  },

  methods: {


    getData(url) {

      axios.get(url, {
        params: {
          page: this.active_page,
        }

      })
        .then(response => {
          const dataObj = response.data.response;
          this.projects = dataObj.data;
          this.next_link = dataObj.next_page_url;
          this.prev_link = dataObj.prev_page_url;
          this.active_page = dataObj.current_page;
          this.total_page = dataObj.last_page;
          //console.log(this.prev_link, 'prev', this.next_link, 'next');
          console.log(dataObj);
        })
    },

    next() {
      this.active_page++;
      this.getData(this.next_link);
    },

    prev() {
      this.active_page--;
      this.getData(this.prev_link);
    },

    goToPage(pageNum) {
      this.active_page = pageNum;
      console.log('cliccato', pageNum);
      this.getData(this.base_url);

    }
  },

  created() {
    this.getData(this.base_url);
  }

}
</script>


<template>
  <NavBar />
  <div class="container mt-5">
    <div class="eb_navigation d-flex justify-content-between align-items-center">
      <nav aria-label="Page navigation">
        <ul class="pagination m-0">
          <li class="page-item"><a class="page-link" :class="active_page == 1 ? 'disabled' : ''" @click="prev()"
              href="##">Previous</a></li>
          <li v-for="page in total_page" class="page-item" :class="active_page === page ? 'active' : ''"
            @click="goToPage(page)"><a class="page-link" href="#">{{ page }}</a></li>


          <li class="page-item"><a class="page-link" :class="active_page === total_page ? 'disabled' : ''" @click="next()"
              href="##">Next</a>
          </li>
        </ul>
      </nav>
      <div class="text-muted">Page: {{ active_page }} of {{ total_page }}</div>

    </div>
    <div class="row row-cols-3">
      <ProjectCard v-for="project in projects" :ProjectCard="project" />
    </div>
  </div>
  <FooterInfo />
</template>

<style lang="scss" scoped></style>
