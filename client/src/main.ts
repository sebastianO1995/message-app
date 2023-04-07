import './style.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import router from '@/router';
import vue3GoogleLogin from 'vue3-google-login';

const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.use(vue3GoogleLogin, {
  clientId: ''
});

app.mount('#app');
