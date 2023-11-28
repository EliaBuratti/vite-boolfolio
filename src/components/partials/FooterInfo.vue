<script>
import state from '../../dataJs/state';
export default {

    name: 'footerInfo',

    data() {
        return {
            state,
        }
    }

}
</script>
<template>
    <div class="container-fluid shadow-lg py-4 bg-body-tertiary">
        <div class="w-75 mx-auto">
            <div class="row justify-content-between">

                <div class="col-12 col-md text-center text-md-start mb-5 mb-md-0 pe-5">
                    <h2><span class="eb_active display-5">Get in touch!</span></h2>
                    <p class="mt-3 fs-5">If you found my projects interesting or would like more information, do not
                        hesitate to contact me.
                        I will be happy to respond and discuss how my projects could be beneficial for you!</p>
                    <router-link to="/contact" class="btn btn-lg btn-dark rounded-0 mb-3"
                        :class="this.$route.fullPath == '/contact' ? 'eb_active' : ''"
                        aria-current="page">Contact</router-link>

                </div>
                <div class="col-12 col-md text-center text-md-end mb-5 mb-md-0 ps-5">


                    <div class="eb_socials">
                        <h2><span class="eb_active display-5">Find more!</span></h2>

                        <p class="mt-3 fs-5">
                            If you wish, I invite you to visit my LinkedIn profile to learn more about my educational
                            journey
                            and training. You will find detailed information about my studies and the skills I have
                            acquired.
                        </p>

                        <a href="https://www.linkedin.com/in/elia-buratti-242054221"
                            class="btn btn-lg btn-dark rounded-0 mb-3" target="_blank">LinkedIn</a>


                    </div>
                </div>


            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                <p>© 2023 Company, Inc. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;
</style>