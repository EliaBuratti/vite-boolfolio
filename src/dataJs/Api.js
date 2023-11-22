import axios from 'axios';
import { reactive } from 'vue';

export default {
    project_url: 'http://localhost/api/project', //homepage
    projects_url: 'http://localhost/api/project', //projects page
    type_url: 'http://localhost/api/type', //type
    technology_url: 'http://localhost/api/technology', //technology
    contact_url: 'http://localhost/api/contacts', //contacts
    projectsPage: null,
    projects: null,
    technologies: null,
    types: null,

    //pagination
    active_page: 1,
    next_link: '',
    prev_link: '',
    total_page: '',
    getData() {

        Promise.all([this.getProjects(), this.getProjectsPage(), this.getTechnologies(), this.getType()])
            .then(([projectsDt, projectPageDt, techonogiesDt, typeDt]) => {

                this.projects = projectsDt.data.response.data;
                this.projectsPage = projectPageDt.data.response.data;
                this.technologies = techonogiesDt.data.response.data;
                this.types = typeDt.data.response.data;

                //pagination 
                this.next_link = projectPageDt.data.response.next_page_url;
                this.prev_link = projectPageDt.data.response.prev_page_url;
                this.active_page = projectPageDt.data.response.current_page;
                this.total_page = projectPageDt.data.response.last_page;

                console.log(projectPageDt);

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
            })
    },

    getProjects() {
        return axios.get(this.project_url);
    },

    getProjectsPage() {
        return axios.get(this.projects_url);
    },

    getTechnologies() {
        return axios.get(this.technology_url);
    },

    getType() {
        return axios.get(this.type_url);
    },


    next() {
        this.active_page++;
        this.getPage(this.next_link);
    },

    prev() {
        this.active_page--;
        this.getPage(this.prev_link);
    },

    goToPage(pageNum) {
        this.active_page = pageNum;
        //console.log('cliccato', pageNum);
        this.getPage(this.projects_url);

    }


}