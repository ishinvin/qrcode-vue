import { App } from 'vue';
import VQrCodeVue from './components/VQrCode.vue';
import { ErrorCorrectLevel } from './qrcode/ErrorCorrectLevel';

export type VQrcodeOptions = {
    width?: number;
    height?: number;
    colorDark?: string;
    colorLight?: string;
    correctLevel?: ErrorCorrectLevel;
};

export default {
    install: (
        app: App,
        options: VQrcodeOptions = {
            width: 256,
            height: 256,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: ErrorCorrectLevel.Q,
        }
    ) => {
        app.component('VQrcode', VQrCodeVue);
        app.provide('VQrcodeOptions', options);
    },
};

export { VQrCodeVue as VQrcode };
