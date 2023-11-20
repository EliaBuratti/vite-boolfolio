<script>
import axios from 'axios';
import NavBar from '../partials/NavBar.vue';
import FooterInfo from '../partials/FooterInfo.vue';
export default {
    name: 'ContactView',

    components: {
        NavBar,
        FooterInfo,
    },

    data() {
        return {
            load_complete: false,
            not_found: false,
            project: {},
            base_url: 'http://localhost/api/project',
            img_path: 'http://127.0.0.1/storage/',
        }
    },

    mounted() {

        axios.get(`${this.base_url}/${this.$route.params.slug}`)
            .then(response => {
                const dataObj = response.data;
                this.project = dataObj.response;

                if (dataObj.status) {

                    this.load_complete = dataObj.status;
                } else {
                    this.not_found = true;
                }
                console.log(dataObj);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}
</script>

<template>
    <NavBar />
    <!--     <h1>Project title {{ `${this.base_url}/${this.$route.params.slug}` }}</h1> -->

    <!-- loading messsage -->
    <div v-if="!load_complete && !not_found" class="w-100">
        <div class="h2 d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                class="eb_spin"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
            <span class="ms-2"><em>Loading project...</em></span>
        </div>
    </div>

    <div v-else-if="not_found">
        <div class="container my-5 eb_not-found">
            <div class="row justify-content-center align-items-center">
                <div class="col text-center h1">
                    <strong>Project Not Found 🤷🏼</strong>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="container shadow-lg rounded-3 my-5">
        <div class="row flex-wrap p-3">
            <div class="col-12 col-sm">
                <img width="600" class=" img-fluid rounded-3" :src="img_path + project.cover_image" :alt="project.title">
            </div>
            <div class="col text-center text-sm-left">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <hr>
                <p>Technology:
                    <span v-if="(project.technology).length == 0">
                        Nothing Technology selected
                    </span>
                    <span v-else>
                        <span v-for="tech in project.technology">

                            {{ `${tech.name} ` }}
                        </span>
                    </span>
                </p>
                <hr>
                <p>Type:
                    <span v-if="project.type">
                        {{ project.type.name }}
                    </span>

                    <span v-else>
                        Nothing Type selected
                    </span>
                </p>

            </div>
        </div>
    </div>
    <FooterInfo />
</template>

<style lang="scss" scoped></style>