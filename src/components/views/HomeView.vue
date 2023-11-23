<script>
import Api from '../../dataJs/Api';
import ProjectCard from '../ProjectCard.vue';
import NavBar from '../partials/NavBar.vue';
import FooterInfo from '../partials/FooterInfo.vue';
import state from '../../dataJs/state';
export default {
    name: 'HomeView',

    components: {
        ProjectCard,
        NavBar,
        FooterInfo,
    },
    data() {
        return {
            Api,
            state,
        }
    },

    created() {
        this.Api.getData();
    }

}
</script>


<template>
    <NavBar />

    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid p-5 d-flex flex-wrap justify-content-center align-items-center">

            <div class="col-12 col-md-7 text-center text-md-start">
                <div class="col-12 col-md-8 mx-auto">
                    <h1 class="display-6 fw-bold lh-lg">Hi, I'm <span class="eb_active px-2">Elia</span> and I'm a <span
                            class="eb_active px-2">junior web
                            developer</span>
                    </h1>
                    <router-link to="/about" class="btn btn-lg btn-dark mt-4 rounded-0 mb-4" aria-current="page">About
                        Me</router-link>
                </div>
            </div>
            <div class="col-12 col-md d-flex align-items-center justify-content-center">
                <img width="400" class="img-fluid rounded-circle" :src="state.getImagePath('profile.jpeg')"
                    alt="profile picture">
            </div>
        </div>
    </div>
    <!-- title -->
    <div class="col-12 text-center my-5">
        <h2 class=" text-base display-6 fw-bold"> <span class=" eb_active p-1 lh-lg">Look my latest project below</span>
        </h2>
    </div>
    <div class="w-75 mx-auto mt-5 shadow-lg p-4 mb-5">
        <!-- loading messsage -->
        <div v-if="!Api.projects" class="w-100 vh-100">
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
        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 ">
            <ProjectCard v-for="project in Api.projects" :ProjectCard="project" />
        </div>
    </div>
    <FooterInfo />
</template>

<style lang="scss" scoped></style>