<script>
export default {
    name: 'ProjectCard',

    props: {
        ProjectCard: Object,
    },

    data() {
        return {
            img_path: 'http://127.0.0.1/storage/',
        }
    }

}
</script>
<template>
    <div class="mb-4">
        <div class="p-4 mx-auto h-100">
            <div class="position-relative eb_image">
                <img class="img-fluid" :src="this.img_path + ProjectCard.cover_image" :alt="ProjectCard.title">

                <div class="eb_overlay">
                    <router-link :to="{ name: 'project', params: { slug: ProjectCard.slug } }"
                        class="btn btn-outline-light eb_button" aria-current="page">View
                        Project</router-link>
                </div>
            </div>
            <div class="my-3">
                <h5 class="card-title"> {{ ProjectCard.title }}</h5>
            </div>
            <div class="my-3">
                <strong>Type: </strong> {{ ProjectCard.type ? ProjectCard.type.name : 'Nothing type selected' }}
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 600px;
    aspect-ratio: 1.5 / 1;
    object-fit: cover;
}

.eb_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    transform: scale(0);
    border-radius: 100%;
    transition: 0.3s;
}

.eb_image:hover .eb_overlay {
    transform: scale(1);
    border-radius: 0%;
}

.eb_button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>