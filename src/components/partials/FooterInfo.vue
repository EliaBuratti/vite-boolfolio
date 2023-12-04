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
        <div class="col-md-9 col-xl-10 mx-auto">
            <div class="row justify-content-between">

                <div class="col-12 col-md text-md-start mb-5 mb-md-0">
                    <h2><span class=" display-5">Get in touch!</span></h2>
                    <p class="mt-3 fs-5 pe-md-5 pb-4">If you found my projects interesting or would like more information,
                        do not
                        hesitate to contact me.
                        I will be happy to respond and discuss how my projects could be beneficial for you!</p>
                    <router-link to="/contact" class="eb_btn-slide mb-3" aria-current="page">Contact</router-link>

                </div><!-- class="btn btn-lg btn-dark rounded-0 mb-3 " -->
                <div class="col-12 col-md text-md-end mb-5 mb-md-0">


                    <div class="eb_socials">
                        <h2><span class="display-5">Find more!</span></h2>

                        <p class="mt-3 fs-5 ps-md-5 pb-4">
                            If you wish, I invite you to visit my LinkedIn profile to learn more about my educational
                            journey
                            and training. You will find detailed information about my studies and the skills I have
                            acquired.
                        </p>

                        <a href="https://www.linkedin.com/in/elia-buratti-242054221" class="eb_btn-slide"
                            target="_blank">LinkedIn</a>


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