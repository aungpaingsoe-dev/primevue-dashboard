import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/dashboard/styles.scss';
import '@/assets/styles.scss';
import { primevueComponents } from './services/__wrapper/primevue_components'
import { chartComponents } from './services/__wrapper/chart_components'
import { HTTP } from './services/http';
import { createPinia } from 'pinia';

window.Http = HTTP;
const app = createApp(App);
app.use(router);
app.use(createPinia());
primevueComponents(app);
chartComponents(app);

app.mount('#app');
