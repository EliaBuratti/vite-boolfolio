import { createApp } from 'vue'
import { router } from './route.js'  //importo il router
import './assets/scss/app.scss'
import App from './App.vue'
import * as bootstrap from '../node_modules/bootstrap' //importo il js di bootstrap

createApp(App).use(router).mount('#app')  //inserisco il router nell'app
