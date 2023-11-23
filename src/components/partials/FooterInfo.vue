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

                <div class="col p-0">
                    <h2><span class="eb_active display-5">Get in touch!</span></h2>
                    <router-link to="/contact" class="btn btn-lg btn-dark rounded-0"
                        :class="this.$route.fullPath == '/contact' ? 'eb_active' : ''"
                        aria-current="page">Contact</router-link>
                </div>
                <!--                 <div v-for="n in 3" class="col-4 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div> -->


                <div class="col text-center text-md-end p-0">

                    <h2 class=" display-5"> <span class="eb_active p-1">Visit my socials</span></h2>

                    <div class="eb_socials mt-5">
                        <!-- icon -->
                        <a v-for="social in state.social_logo" href="##">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.25em"
                                :viewBox="social.icon.viewbox"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path :d="social.icon.path" />
                                <title>{{ social.name }}</title>
                            </svg>
                        </a>

                    </div>
                </div>

            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                <p>© 2022 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#twitter"></use>
                            </svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#instagram"></use>
                            </svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#facebook"></use>
                            </svg></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.eb_socials {

    a {
        padding: 1rem;

        svg {
            fill: $style-color;
            width: 3rem;
            height: 3rem;
            transition: 0.3s;
            padding: 0.3rem;

        }

        &:hover svg {
            box-shadow: 0px 0px 8px 9px $style-color;
            fill: $ligth;
            background: $style-color;
            border-radius: 25%;
        }

    }
}
</style>