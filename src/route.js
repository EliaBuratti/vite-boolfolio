import { createWebHashHistory, createRouter } from "vue-router";

//import route components
import HomeView from './components/views/HomeView.vue';
import ContactView from './components/views/ContactView.vue';
import AboutView from './components/views/AboutView.vue';
import ProjectView from './components/views/ProjectView.vue'
// define route
const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/project/:slug', name: 'project', component: ProjectView },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export { router };