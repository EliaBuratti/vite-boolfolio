import axios from 'axios';
import { reactive } from 'vue';

export default {
    base_url: 'http://127.0.0.1:8000/api',
    project_url: '/project', //homepage
    type_url: '/type', //type
    technology_url: '/technology', //technology
    contact_url: '/contacts', //contacts  http://127.0.0.1:8000/
    projectsPage: null,
    projects: null,
    technologies: null,
    types: null,
    projectLoading: false,
    filterSet: false,

    //pagination
    active_page: 1,
    next_link: '',
    prev_link: '',
    total_page: '',

    getData() {
        this.filterSet = false,

            Promise.all([this.getProjects(), this.getTechnologies(), this.getType()])
                .then(([projectsDt, techonogiesDt, typeDt]) => {

                    this.projects = projectsDt.data.response.data;
                    this.projectsPage = projectsDt.data.response.data;
                    this.technologies = techonogiesDt.data.response;
                    this.types = typeDt.data.response;

                    //pagination 
                    this.next_link = projectsDt.data.response.next_page_url;
                    this.prev_link = projectsDt.data.response.prev_page_url;
                    this.active_page = projectsDt.data.response.current_page;
                    this.total_page = projectsDt.data.response.last_page;
                })
                .catch(err => {
                    console.log(err.message);
                });
    },

    getPage(url) {
        axios.get(url, {
            params: {
                page: this.active_page,
            }

        })
            .then(response => {
                const dataObj = response.data.response;
                this.projectsPage = dataObj.data;
                this.next_link = dataObj.next_page_url;
                this.prev_link = dataObj.prev_page_url;
                this.active_page = dataObj.current_page;
                this.total_page = dataObj.last_page;
                this.projectLoading = false;
            })
            .catch(err => {
                console.log(err.message);
            })
    },

    getFilter($id) {
        this.filterSet = true,
            this.projectLoading = true,
            axios.get((this.base_url + this.project_url + this.type_url + `/${$id}`), {
                params: {
                    page: this.active_page,
                }

            })
                .then(response => {

                    if (response.data.status) {
                        const dataObj = response.data.response;
                        console.log(dataObj);
                        this.projectsPage = dataObj.data;
                        this.next_link = dataObj.next_page_url;
                        this.prev_link = dataObj.prev_page_url;
                        this.active_page = dataObj.current_page;
                        this.total_page = dataObj.last_page;
                        this.projectLoading = false;
                    } else {
                        this.$router.push({ name: 'NotFound' });
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })

    },

    getProjects() {
        return axios.get(this.base_url + this.project_url);
    },

    getTechnologies() {
        return axios.get(this.base_url + this.technology_url);
    },

    getType() {
        return axios.get(this.base_url + this.type_url);
    },


    next() {
        this.projectLoading = true;
        this.active_page++;
        this.getPage(this.next_link);
    },

    prev() {
        this.projectLoading = true;
        this.active_page--;
        this.getPage(this.prev_link);
    },

    goToPage(pageNum) {
        this.active_page = pageNum;


        if (this.active_page !== pageNum) {
            this.projectLoading = true;

            if (this.filterSet) {
                console.log(this.base_url + this.project_url + this.type_url);
                this.getPage(this.base_url + this.project_url + this.type_url);
            } else {
                this.getPage(this.base_url + this.project_url);
            }
        }




    }


}