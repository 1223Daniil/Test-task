import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ColorScheme from './components/ColorScheme.vue'
import FileSelect from "./components/FileSelect.vue";
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
const router = createRouter({
  routes: [{
    path: '/',
    component: FileSelect
  },
  {
    path: '/colorscheme',
    component: ColorScheme
  },
],
  history: createWebHistory()
})

const app = createApp(App)
app.use(PrimeVue);
app.use(router)
app.mount('#app')
