<script>
import NavBar from '../partials/NavBar.vue';
import FooterInfo from '../partials/FooterInfo.vue';
export default {
    name: 'ContactView',

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
    <div class="container my-5">
        <h2 class=" text-muted mb-4">Contact Me </h2>
        <form action="" method="get">
            <div class="mb-3">
                <label for="name" class="form-label">Name and Surname</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                    placeholder="Mario Rossi">
                <small id="helpId" class="form-text text-muted">Your name and surname</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com">
                <small id="emailHelpId" class="form-text text-muted">Your email</small>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea class="form-control" name="message" id="message" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Contact</button>
        </form>
    </div>

    <FooterInfo />
</template>

<style lang="scss" scoped></style>