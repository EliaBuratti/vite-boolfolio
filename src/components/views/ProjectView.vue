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
            project: {},
            base_url: 'http://localhost/api/project',
            img_path: 'http://127.0.0.1/storage/',
        }
    },

    mounted() {

        axios.get(`${this.base_url}/${this.$route.params.slug}`)
            .then(response => {
                const dataObj = response.data.response;
                this.project = dataObj;
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
    <div class="container my-5">
        <div class="row">
            <div class="col">
                <img class="img-fluid rounded-3" :src="img_path + project.cover_image" :alt="project.title">
            </div>
            <div class="col">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <hr>
                <p>Technology: <!-- {{ !project.technology == [] }} -->

                    <span v-if="!project.technology == []">
                        <span v-for="tech in project.technology">
                            {{ `${tech.name} ` }}
                        </span>
                    </span>
                    <span v-else>
                        Nothing technology selected.

                    </span>

                </p>
                <hr>
                <p>type:
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