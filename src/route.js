import { createWebHashHistory, createRouter } from "vue-router";

//import route components
import HomeView from './components/views/HomeView.vue';
import ContactView from './components/views/ContactView.vue';
import AboutView from './components/views/AboutView.vue';

// define route
const routes = [
    { path: '/', component: HomeView },
    { path: '/contact', component: ContactView },
    { path: '/about', component: AboutView },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export { router };