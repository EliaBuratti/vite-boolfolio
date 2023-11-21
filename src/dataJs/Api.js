import axios from 'axios';

export default {
    base_url: 'http://localhost/api/project',
    page_url: '',
    projects: '',
    active_page: 1,
    next_link: '',
    prev_link: '',
    total_page: '',

    getData(url) {

        axios.get(url, {
            params: {
                page: this.active_page,
            }

        })
            .then(response => {
                const dataObj = response.data.response;
                this.projects = dataObj.data;
                this.next_link = dataObj.next_page_url;
                this.prev_link = dataObj.prev_page_url;
                this.active_page = dataObj.current_page;
                this.total_page = dataObj.last_page;
                //console.log(this.prev_link, 'prev', this.next_link, 'next');
                //console.log(dataObj);
            })
    },

    next() {
        this.active_page++;
        this.getData(this.next_link);
    },

    prev() {
        this.active_page--;
        this.getData(this.prev_link);
    },

    goToPage(pageNum) {
        this.active_page = pageNum;
        //console.log('cliccato', pageNum);
        this.getData(this.base_url);

    }


}