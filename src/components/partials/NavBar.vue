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
    <nav class="navbar navbar-expand-lg border-0 eb_nav-bg w-100"
        :class="this.$route.fullPath == '/' ? 'position-absolute top-0' : ''">
        <div class="container-fluid col-md-9 col-xl-10">
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
                            aria-current="page"><span>Home</span></router-link>
                    </li>
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/projects" class="nav-link"
                            :class="this.$route.fullPath == '/projects' ? 'eb_active' : ''"
                            aria-current="page"><span>Projects</span></router-link>
                    </li>
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/contact" class="nav-link"
                            :class="this.$route.fullPath == '/contact' ? 'eb_active' : ''"
                            aria-current="page"><span>Contact</span></router-link>
                    </li>
                    <li class="p-0 rounded-0 ms-auto">
                        <router-link to="/about" class="nav-link"
                            :class="this.$route.fullPath == '/about' ? 'eb_active' : ''"
                            aria-current="page"><span>About</span></router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.eb_nav-bg {
    //background: linear-gradient(180deg, $pg-text 0, transparent 90%);
}

.eb_nav-list {

    li {
        font-size: 1.5rem;
        margin: 0 1rem;
        padding: 0 0.5rem;

        :hover {
            color: $pg-text;
            background-color: black;
            text-decoration: underline;
        }
    }

}
</style>