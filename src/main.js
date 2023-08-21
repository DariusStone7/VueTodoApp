import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp,  } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Sign_in from './views/Sign_in.vue'
import Sign_up from './views/Sign_up.vue'


const routes = [
    { path: '/', component: Home },
    {path: '/about', component: About},
    {path: '/sign-in', component: Sign_in},
    {path: '/sign-up', component: Sign_up}
] 

const router = createRouter({

    history: createWebHistory(),
    routes, 
  })

const app = createApp(App)

app.use(router)

app.mount('#app')
