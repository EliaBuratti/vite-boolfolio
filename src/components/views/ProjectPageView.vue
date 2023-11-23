<script>
import axios from 'axios';
import NavBar from '../partials/NavBar.vue';
import FooterInfo from '../partials/FooterInfo.vue';
import ProjectCard from '../ProjectCard.vue';
import Api from '../../dataJs/Api';
export default {
    name: 'ProjectPageView',

    components: {
        NavBar,
        FooterInfo,
        ProjectCard,
    },

    data() {
        return {

            Api,
            load_complete: false,
            img_path: 'http://127.0.0.1/storage/',

        }
    },

    mounted() {
        this.Api.getData()
    }

}
</script>

<template>
    <NavBar />
    <div class="w-75 mx-auto mt-5 shadow-lg p-4 mb-5 eb_project-view">
        <!-- loading messsage -->
        <div v-if="!Api.projectsPage" class="w-100">
            <div class="h2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                    class="eb_spin"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
                <span class="ms-2"><em>Loading page...</em></span>
            </div>
        </div>
        <!-- project -->
        <div class="col-12 text-center mb-5">
            <h2 class=" text-base display-6 fw-medium">
                <span class="eb_active p-2 pb-3 lh-lg text-white">
                    My projects
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M0 448c0 35.3 28.7 64 64 64H224V384c0-17.7 14.3-32 32-32H384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384H256V512L384 384z" />
                    </svg>
                </span>
            </h2>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
            <ProjectCard v-for="project in Api.projectsPage" :ProjectCard="project" />
        </div>

        <div class="eb_navigation d-flex justify-content-between align-items-center mb-5 flex-wrap p-2">
            <nav aria-label="Page navigation">
                <ul class="pagination m-0">
                    <li class="page-item"><a class="page-link rounded-0"
                            :class="Api.active_page == 1 ? 'disabled bg-secondary text-white' : ''" @click="Api.prev()"
                            href="javascript:;">Previous</a></li>

                    <!-- da sistemare se ci sono troppe pagine le stampa tutte quante -->
                    <li v-for="page in Api.total_page" class="page-item" :class="Api.active_page === page ? 'active' : ''"
                        @click="Api.goToPage(page)"><a class="page-link" href="javascript:;">{{ page }}</a></li>
                    <li class="page-item"><a class="page-link rounded-0"
                            :class="Api.active_page === Api.total_page ? 'disabled bg-secondary text-white' : ''"
                            @click="Api.next()" href="javascript:;">Next</a>
                    </li>
                </ul>
            </nav>
            <div class="text-muted mt-3 mt-md-0">Page: {{ Api.active_page }} of {{ Api.total_page }}</div>

        </div>
    </div>
    <FooterInfo />
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.eb_active svg {
    fill: $pg-text;
}

//pagination controller colors
.pagination>li>a {
    background-color: $pg-text ;
    color: $pg-color;
}


.pagination>li>span:focus,
.pagination>li>span:hover {
    color: $pg-text;
    background-color: #eee;
    border-color: #ddd;
}

.pagination>li>a:hover,
.pagination>li>a:focus {
    color: $pg-text;
    background-color: $pg-color;
    border-color: #ddd;
}

.pagination>.active>a {
    color: $pg-text;
    background-color: $pg-color !Important;
    border: solid 1px $pg-color !Important;
    transform: scale(1.2);
}

.pagination>.active>a:hover {
    background-color: $pg-color !Important;
    border: solid 1px $pg-color;
}
</style>