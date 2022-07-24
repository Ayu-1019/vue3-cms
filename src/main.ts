import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { globalRegister } from './global';
import './assets/css/index.less';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(globalRegister);
app.use(router);
app.use(createPinia());

app.mount('#app');
