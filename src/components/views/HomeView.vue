<script>
import Api from '../../dataJs/Api';
import ProjectCard from '../ProjectCard.vue';
import LoadingProjectCard from '../partials/LoadingProjectCard.vue';
import state from '../../dataJs/state';
export default {
    name: 'HomeView',

    components: {
        ProjectCard,
        LoadingProjectCard,
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
    <div class="p-2 p-md-5 mb-4 eb_jumbo">
        <div class="container-fluid pt-md-5 d-flex flex-wrap justify-content-center align-items-center">

            <div class="col-12 col-md-7 text-center text-md-start mt-5">
                <div class="col-12 col-md-8 mx-auto">
                    <h1 class="display-6 fw-medium lh-lg tracking-in-expand">Hi, I'm <span
                            class="eb_active px-2">Elia</span> and I'm a <span class="eb_active px-2">junior web
                            developer</span>
                    </h1>
                    <p class="fw-medium fs-4 text-focus-in pb-4">
                        You will find a selection of my best projects, which showcase my skills from simple
                        programming languages to frameworks. Each project is accompanied by a detailed description of my
                        role and the skills I have used.
                    </p>
                    <router-link to="/about" class="eb_btn-slide text-focus-in " aria-current="page">AboutMe
                    </router-link>
                </div>
            </div>
            <div class="col-12 col-md d-flex align-items-center justify-content-center">
                <img width="400" class="img-fluid rounded-circle" :src="state.getImagePath('profile.jpg')"
                    alt="profile picture">
            </div>
        </div>
    </div>
    <!-- title -->
    <div class="col-12 text-center my-5">
        <h2 class=" text-base display-6 fw-medium"> <span class=" eb_active p-1 lh-lg">Look my latest project below</span>
        </h2>
    </div>
    <div class="col-12 col-md-9 col-xl-10 mx-auto mt-5 px-4 p-md-4 mb-5">
        <!-- loading page -->
        <div v-if="!Api.projects" class="row row-cols-1 row-cols-sm-2 row-cols-xl-3 ">

            <LoadingProjectCard v-for="n in 6" />
        </div>

        <!-- project -->
        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">

            <ProjectCard v-for="project in Api.projects" :ProjectCard="project" />

            <!-- see all project -->
            <div
                class="fw-normal display-4 my-md-4 eb_fill d-flex justify-content-center align-items-center w-100 text-center">
                <router-link to="/projects" class="text-decoration-none text-black"
                    :class="this.$route.fullPath == '/projects' ? 'eb_active' : ''" aria-current="page"
                    href="javascript:scroll(0,0)">
                    <span class="eb_route-text">See all projects</span>
                </router-link>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

img {
    aspect-ratio: 1/1;
    object-fit: cover;
}
</style>