<script>
import state from '../../dataJs/state';

export default {
    name: 'NavBar',

    data() {
        return {
            state,
        }
    },

    methods: {


    },

    mounted() {
        //console.log(this.$route.fullPath)
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg border position-static w-100">
        <div class="container-fluid">
            <router-link to="/" class="nav-link active" aria-current="page">
                <img width="120" class="img-fluid" :src="state.getImagePath('logo-no-background.png')" alt="logo">
            </router-link>


            <button class="navbar-toggler mb-4" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="eb_nav-list navbar-nav ms-auto mb-lg-0">
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/" class="nav-link" :class="this.$route.fullPath == '/' ? 'eb_active' : ''"
                            aria-current="page">Home</router-link>
                    </li>
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/projects" class="nav-link"
                            :class="this.$route.fullPath == '/projects' ? 'eb_active' : ''"
                            aria-current="page">Projects</router-link>
                    </li>
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/contact" class="nav-link"
                            :class="this.$route.fullPath == '/contact' ? 'eb_active' : ''"
                            aria-current="page">Contact</router-link>
                    </li>
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/about" class="nav-link"
                            :class="this.$route.fullPath == '/about' ? 'eb_active' : ''"
                            aria-current="page">About</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
.eb_nav-list {

    li {
        font-size: 1.5rem;
        margin: 0 1rem;
        padding: 0 0.5rem;

        :hover {
            background-color: black;
            text-decoration: underline;
            color: white;
        }
    }

}
</style>