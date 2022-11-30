import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './assets/tailwind.css';
import i18n from "./locales/i18n";
import VueSplide from '@splidejs/vue-splide';


createApp(App).use(router).use(i18n).use(VueSplide).mount('#app')
