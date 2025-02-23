import './assets/scss/main.scss';
import './assets/scss/_util.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'normalize.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

let inactivityTimer;

const resetTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    // 1분 동안 아무 동작도 없으면 메인 화면으로 이동
    router.push('/');
  }, 60000); // 1분(60000ms)
};

const activityEvents = ['mousemove', 'keydown', 'scroll'];

activityEvents.forEach(event => {
  window.addEventListener(event, resetTimer);
});

resetTimer();