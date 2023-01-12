import { App } from 'vue';
import VQrCodeVue from './components/VQrCode.vue';
import { RenderOptions } from './draw';
import { ErrorCorrectLevel } from './qrcode/ErrorCorrectLevel';
import { VQrcodeOptions } from './types';

export default {
    install: (
        app: App,
        options: Partial<VQrcodeOptions> = {
            size: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: ErrorCorrectLevel.M,
            render: RenderOptions.CANVAS,
        }
    ) => {
        app.component('VQrcode', VQrCodeVue);
        app.provide('VQrcodeOptions', options);
    },
};

export { VQrCodeVue as VQrcode };
export { RenderOptions };
export { ErrorCorrectLevel };
