<script>
import axios, { Axios } from 'axios';
import Api from '../../dataJs/Api';
export default {
    name: 'ContactView',

    data() {
        return {
            Api,
            name: '',
            object: '',
            email: '',
            message: '',
            errors: [],
            success: null,
            load: false,
            responseMessage: '',
        }
    },

    methods: {
        sendLead() {
            this.load = true;
            this.success = null;
            this.errors = [];

            const leadData = {
                name: this.name,
                object: this.object,
                email: this.email,
                message: this.message,
            };
            //console.log(leadData);

            axios.get(this.Api.CORS_url).then(response => {
                //console.log(response);

                axios.post(this.Api.base_url + this.Api.contact_url, leadData).then(response => {
                    this.responseMessage = '';
                    let responseQuery = response.data.success;
                    //console.log(response.data.response);

                    if (!responseQuery) {
                        this.errors = response.data.errors;
                    } else {
                        this.name = '';
                        this.object = '';
                        this.email = '';
                        this.message = '';
                        this.success = response.data.success;
                        this.responseMessage = response.data.response;
                    }

                    this.load = false;
                })
                    .catch(error => {
                        console.error(error.message);
                    })

            }).catch(error => {
                console.error(error.message);
            })


        }
    }
}
</script>

<template>
    <div class="container my-5">
        <h1 class="display-5 fw-bold mb-4">
            <span class="eb_active">Contact</span>
        </h1>
        <form action="" v-on:submit.prevent="sendLead()">
            <div class="mb-3">
                <label for="name" class="form-label">Name and Surname</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                    placeholder="Mario Rossi" v-model="name" :class="{ 'is-invalid': errors.name }" :disabled="load"
                    required>
                <small id="helpId" class="form-text text-muted">Your name and surname</small>
                <div class="alert alert-danger" role="alert" v-if="errors.name">
                    <strong>Error! </strong>
                    <span v-for="message in errors.name">{{ message }}</span>

                </div>
            </div>
            <div class="mb-3">
                <label for="object" class="form-label">Subject</label>
                <input type="text" class="form-control" name="object" id="object" aria-describedby="helpId"
                    placeholder="Contact about project or else" v-model="object" :class="{ 'is-invalid': errors.object }"
                    :disabled="load" required>
                <small id="helpId" class="form-text text-muted">Write an subject for Contact</small>
                <div class="alert alert-danger" role="alert" v-if="errors.object">
                    <strong>Errors!</strong>
                    <span v-for="message in errors.object">{{ message }}</span>
                </div>

            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com" v-model="email" :class="{ 'is-invalid': errors.email }" :disabled="load"
                    required>
                <small id="emailHelpId" class="form-text text-muted">Your email</small>
                <div class="alert alert-danger" role="alert" v-if="errors.email">
                    <strong>Errors!</strong>
                    <span v-for="message in errors.email">{{ message }}</span>
                </div>

            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea @keydown="message.length >= 5000 ? message = message.slice(0, 4999) : message"
                    class="form-control" name="message" id="message" v-model="message"
                    :class="{ 'is-invalid': errors.message || message.length > 5000 }" rows="10" cols="50" :disabled="load"
                    required></textarea>
                <div class="alert alert-danger mt-4" role="alert" v-if="errors.message">
                    <strong>Errors!</strong>
                    <span v-for=" message  in  errors.message ">{{ message }}</span>
                </div>
                <div id="counter">
                    {{ message.length }} / 5000
                </div>

            </div>

            <div class="w-100 d-flex">

                <button type="submit" class="eb_btn-slide d-block" :disabled="load">
                    <span v-if="!load">Send</span>
                    <span v-else>Sending...</span>
                </button>

                <div v-if="responseMessage" class="alert alert-success alert-dismissible fade show m-0 ms-3" role="alert">
                    <span class="eb_message" v-text="responseMessage"></span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>

        </form>

    </div>
</template>

<style lang="scss" scoped></style>