import { QRCode } from '../qrcode/QRCode';
import { VQrcodeOptions } from '../types/index';

export class DrawCanvas {
    private el: HTMLElement;
    private options: VQrcodeOptions;

    constructor(el: HTMLElement, options: VQrcodeOptions) {
        this.el = el;
        this.options = options;
    }

    public draw(qrcode: QRCode): void {
        this.clear();

        const canvas = document.createElement('canvas');
        const size = this.options.size;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d')!;

        const nCount = qrcode.getModuleCount();
        const nWidth = size / nCount;
        const nHeight = size / nCount;
        const nRoundedWidth = Math.round(nWidth);
        const nRoundedHeight = Math.round(nHeight);

        for (let row = 0; row < nCount; row++) {
            for (let col = 0; col < nCount; col++) {
                const bIsDark = qrcode.isDark(row, col);
                const nLeft = col * nWidth;
                const nTop = row * nHeight;
                ctx.strokeStyle = bIsDark ? this.options.colorDark : this.options.colorLight;
                ctx.lineWidth = 1;
                ctx.fillStyle = bIsDark ? this.options.colorDark : this.options.colorLight;
                ctx.fillRect(nLeft, nTop, nWidth, nHeight);

                ctx.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);
                ctx.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
            }
        }
        this.el.appendChild(canvas);
    }

    public clear() {
        while (this.el.hasChildNodes()) {
            if (this.el.lastChild) {
                this.el.removeChild(this.el.lastChild);
            }
        }
    }
}
