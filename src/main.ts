import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/variables.css';
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'


const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(MotionPlugin)
app.mount('#app');
