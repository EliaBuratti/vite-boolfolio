<script>
import axios from 'axios';
import ProjectCard from '../ProjectCard.vue';
import LoadingProjectCard from '../partials/LoadingProjectCard.vue';
import Api from '../../dataJs/Api';
export default {
    name: 'ProjectPageView',

    components: {
        ProjectCard,
        LoadingProjectCard,
    },

    data() {
        return {

            Api,
            load_complete: false,
            img_path: 'http://127.0.0.1/storage/',
            type: false,

        }
    },

    mounted() {
        this.Api.getData()
    }

}
</script>

<template>
    <div class="w-75 mx-auto mt-5 shadow-lg p-4 mb-5 eb_project-view">
        <!-- loading messsage -->
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
        <div class="col-5 mb-5">
            <label for="typeId">Choose one of type filter</label>
            <select id="typeId" name="typeId" v-model="type" class="form-select mt-2" aria-label="Default select example"
                @change="type ? Api.getFilter(type) : Api.getData()">
                <option :value="false" :selected="!type">All</option>
                <option v-for="$type in Api.types" :value="$type.id">
                    {{ $type.name }}
                </option>
            </select>

        </div>
        <div v-if="Api.projectLoading" class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
            <LoadingProjectCard v-for="n in 6" />
        </div>
        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
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