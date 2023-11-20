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
                <h1 class="display-5 fw-bold">About page</h1>
                <p class="col fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
                    previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to
                    your liking.
                </p>
                <router-link to="/contact" class="btn btn-primary btn-lg" aria-current="page">Contact Me</router-link>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row row-cols-2">
                <div class="col">
                    <img class=" img-fluid" src="https://picsum.photos/600" alt="Lorem picsum">
                </div>
                <div class="col">
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