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
            project: {},
            base_url: 'http://127.0.0.1:8000/api/project',
            img_path: 'http://127.0.0.1:8000/storage/',
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
                    this.$router.push({ name: 'NotFound' });
                }
                //console.log(dataObj);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}
</script>

<template>
    <NavBar />

    <div class="eb_bg">

        <div v-if="!load_complete" class="container">

            <!-- loading section -->
            <div class="h2 d-flex align-items-center justify-content-center text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                    class="eb_spin"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
                <span class="ms-2"><em>Loading project...</em></span>
            </div>

            <!-- my project on loading -->
            <div class="eb_project-view container shadow-lg my-5">
                <div class="row flex-wrap p-3 h-100 placeholder-glow">
                    <div class="col-12 col-sm">
                        <div class="placeholder col-12 h-100"></div>
                    </div>
                    <div class="col text-start">
                        <h2 class="placeholder col-12"></h2>
                        <p class="placeholder col-12 h-25"></p>
                        <hr>
                        <p><strong>Technology:</strong>
                            <span class="placeholder col-3"></span>
                        </p>
                        <hr>
                        <p><strong>Type:</strong>
                            <span class="placeholder col-4"></span>
                        </p>
                        <hr>
                        <p>
                            <span class="list-group-item"><strong>Project links: </strong>
                                <span class="placeholder col-4"></span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container py-5">

            <!-- my project loaded -->
            <div class="row flex-wrap p-3 shadow">
                <div class="col-12 col-sm py-2">
                    <img width="600" class=" img-fluid" :src="img_path + project.cover_image" :alt="project.title">
                </div>
                <div class="col text-center text-sm-start">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                    <hr>
                    <p>
                        <strong>Technology: </strong>
                        <span v-if="(project.technology).length == 0">
                            Nothing Technology selected
                        </span>
                        <span v-else class=" badge bg-success me-1" v-for="tech in project.technology">{{ tech.name
                        }}</span>
                    </p>
                    <hr>
                    <p>
                        <strong>Type: </strong>
                        <span v-if="project.type">{{ project.type.name }}</span>
                        <span v-else> Nothing Type selected</span>
                    </p>
                    <hr>
                    <p> <span class="list-group-item"><strong>Project links: </strong>
                            <a :href="project.project_link" class="text-white ms-2" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="#000000" version="1.1" id="Layer_1" width="35px" height="35px" viewBox="0 0 92 92"
                                    enable-background="new 0 0 92 92" xml:space="preserve">
                                    <title>Show preview</title>
                                    <path id="XMLID_1719_"
                                        d="M92,13c0-2.2-1.8-4-4-4H4c-2.2,0-4,1.8-4,4v52c0,2.2,1.8,4,4,4h84c2.2,0,4-1.8,4-4V13z M84,61H8V17h76V61z   M69.5,79c0,2.2-1.8,4-4,4H26.5c-2.2,0-4-1.8-4-4s1.8-4,4-4h38.9C67.7,75,69.5,76.8,69.5,79z" />
                                </svg>
                            </a>
                            <a :href="project.github_link" class="text-white ms-2" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30px" height="30px" viewBox="0 0 20 20" version="1.1">

                                    <title>Show Repo on github</title>

                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                                            fill="#000000">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path
                                                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <FooterInfo />
</template>

<style lang="scss" scoped>
.eb_project-view {
    height: 50vh;
}
</style>