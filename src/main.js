import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './assets/tailwind.css';
import i18n from "./locales/i18n";
import VueSplide from '@splidejs/vue-splide';
import VueCookies from 'vue-cookies'


createApp(App).use(router).use(i18n).use(VueSplide).use(VueCookies).mount('#app')


// url-base
export const BASE_URL = 'http://localhost:8000';
