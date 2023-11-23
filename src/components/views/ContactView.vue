<!-- 
todo:
loading page
show error
empty field
-->



<script>
import NavBar from '../partials/NavBar.vue';
import FooterInfo from '../partials/FooterInfo.vue';
import axios, { Axios } from 'axios';
import Api from '../../dataJs/Api';
export default {
    name: 'ContactView',

    components: {
        NavBar,
        FooterInfo,
    },

    data() {
        return {
            Api,
            name: '',
            object: '',
            email: '',
            message: '',
            errors: [],
            complete: null,
            load: false,
        }
    },

    methods: {
        sendLead() {
            this.load = true;
            this.complete = null;
            this.errors = [];

            const leadData = {
                name: this.name,
                object: this.object,
                email: this.email,
                message: this.message,
            };

            //console.log(leadData);

            axios.post(this.Api.contact_url, leadData).then(response => {

                console.log(response);
            })
                .catch(error => {
                    console.error(error.message);
                })

        }
    }
}
</script>

<template>
    <NavBar />
    <div class="container my-5">
        <h1 class="display-5 fw-bold mb-4"><span class="eb_active">Contact</span></h1>
        <form action="" v-on:submit.prevent="sendLead()">
            <div class="mb-3">
                <label for="name" class="form-label">Name and Surname</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                    placeholder="Mario Rossi" v-model="name">
                <small id="helpId" class="form-text text-muted">Your name and surname</small>
            </div>
            <div class="mb-3">
                <label for="object" class="form-label">Object</label>
                <input type="text" class="form-control" name="object" id="object" aria-describedby="helpId"
                    placeholder="Mario Rossi" v-model="object">
                <small id="helpId" class="form-text text-muted">Write an object for Contact</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com" v-model="email">
                <small id="emailHelpId" class="form-text text-muted">Your email</small>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea class="form-control" name="message" id="message" rows="3" v-model="message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Contact</button>
        </form>
    </div>

    <FooterInfo />
</template>

<style lang="scss" scoped></style>