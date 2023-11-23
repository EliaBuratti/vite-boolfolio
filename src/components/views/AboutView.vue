<script>
import NavBar from '../partials/NavBar.vue';
import FooterInfo from '../partials/FooterInfo.vue';
export default {
    name: 'AboutView',

    components: {
        NavBar,
        FooterInfo,
    },

    data() {
        return {

        }
    }
}
</script>

<template>
    <NavBar />
    <div class="container-fluid p-0">
        <div class="p-5 mb-4 bg-light">
            <div class="w-75 mx-auto py-5">
                <h1 class="display-5 fw-bold">About me</h1>
                <p class="col-md-8 fs-4">I am a curious, organized person who is attentive to everything around me and
                    passionate about technology. I have excellent practical skills with a tendency towards stimulating
                    and
                    non-monotonous work, a propensity for problem-solving, and a strong desire to learn and meet new
                    people.
                    My
                    ideal job would be project or objective management and coordination.</p>
                <router-link to="/contact" class="btn btn-primary btn-lg" aria-current="page">Contact Me</router-link>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <img class=" img-fluid" src="https://picsum.photos/600" alt="Lorem picsum">
                </div>
                <div class="col mt-4 mt-md-0">
                    <h3>My story</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cumque eligendi rerum in ab eveniet
                        recusandae aperiam delectus, perferendis ducimus fuga neque illo vitae incidunt aut placeat
                        molestias quam. Voluptas!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <FooterInfo />
</template>

<style lang="scss" scoped></style>