<script>
import axios from 'axios';
export default {
    name: 'ContactView',



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
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}
</script>

<template>
    <div class="eb_bg">

        <div v-if="!load_complete" class="container">
            <!-- my project on loading -->
            <div class="eb_project-view container my-5">
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
            <div class="row flex-wrap p-3">
                <div class="col col-sm py-2">
                    <img width="600" class="img-fluid" :src="img_path + project.cover_image" :alt="project.title">
                </div>
                <div class="col text-center text-sm-start">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                </div>
                <div class="col-12 mt-4">
                    <p>
                        <strong class="py-2">Technology: </strong>
                        <span v-if="(project.technology).length == 0">
                            Nothing Technology selected
                        </span>
                        <span v-else class=" badge bg-success me-1" v-for="tech in project.technology">{{ tech.name
                        }}</span>
                    </p>
                    <hr>
                    <p class="py-2">
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
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.eb_project-view {
    height: 50vh;
}
</style>