// import './assets/main.css'
import './assets/_util.scss';
import './assets/main.scss';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'normalize.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
