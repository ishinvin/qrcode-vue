import { createApp } from 'vue';
import VQrcode from '..';
import TestView from './TestView.vue';

const app = createApp(TestView);
app.use(VQrcode);
app.mount('#test');
