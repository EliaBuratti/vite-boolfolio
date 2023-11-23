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
            <div class="container py-5">
                <h1 class="display-5 fw-bold"><span class="eb_active">About me</span></h1>
                <p class="col-md fs-4">I am a curious, organized person who is attentive to everything around me and
                    passionate about technology. I have excellent practical skills with a tendency towards stimulating
                    and
                    non-monotonous work, a propensity for problem-solving, and a strong desire to learn and meet new
                    people.
                    My
                    ideal job would be project or objective management and coordination.</p>
                <router-link to="/contact" class="btn btn-dark rounded-0 btn-lg" aria-current="page">Contact
                    Me</router-link>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45804.887473302755!2d12.221264152314461!3d44.14925553373514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca4d41ed493c1%3A0xbee0ab1075577a47!2sCesena%20FC!5e0!3m2!1sit!2sit!4v1700737064010!5m2!1sit!2sit"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <!-- <img class=" img-fluid" src="https://picsum.photos/600" alt="Lorem picsum">  -->
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