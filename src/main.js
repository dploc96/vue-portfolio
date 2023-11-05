import App from '@/App.vue';
import router from '@/router';
import Toast from 'vue-toastification';

import '@/assets/scss/index.scss';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

app.use(router);
app.use(Toast, {
  timeout: 2000,
});
Object.values(import.meta.glob('./plugins/*.js', { eager: true })).forEach(
  (i) => i.install?.(app),
);

router.isReady().then(() => {
  app.mount('#app');
});
