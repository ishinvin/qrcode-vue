import { type QRCode } from '../qrcode/QRCode';
import { type VQrcodeDrawingOptions } from '../types';

export class DrawImage {
    private el: HTMLElement;
    private options: VQrcodeDrawingOptions;

    constructor(el: HTMLElement, options: VQrcodeDrawingOptions) {
        this.el = el;
        this.options = options;
    }

    public draw(qrcode: QRCode): void {
        this.clear();
        const img = document.createElement('img');
        img.setAttribute('src', qrcode.toDataURL(2, 0));
        // img.setAttribute('width', `${this.options.size}px`);
        // img.setAttribute('height', `${this.options.size}px`);
        this.el.appendChild(img);
    }

    public clear() {
        while (this.el.hasChildNodes()) {
            if (this.el.lastChild) {
                this.el.removeChild(this.el.lastChild);
            }
        }
    }
}
