import { createApp } from 'vue';
import 'virtual:uno.css';
import './style.scss';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { i18n } from './locales';

const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount('#app');
