import { SVGAttributes } from 'vue';
import { QRCode } from '../qrcode/QRCode';
import { type VQrcodeOptions } from '../types';

export class DrawSVG {
    private el: HTMLElement;
    private options: VQrcodeOptions;

    constructor(el: HTMLElement, options: VQrcodeOptions) {
        this.el = el;
        this.options = options;
    }

    public draw(qrcode: QRCode): void {
        this.clear();

        const nCount = qrcode.getModuleCount();
        const svg = this._makeSVG('svg', {
            viewBox: `0 0 ${nCount} ${nCount}`,
            width: '100%',
            height: '100%',
            fill: this.options.colorLight,
        });
        svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
        this.el.appendChild(svg);

        svg.appendChild(this._makeSVG('rect', { fill: this.options.colorLight, width: '100%', height: '100%' }));
        svg.appendChild(
            this._makeSVG('rect', { fill: this.options.colorDark, width: '1', height: '1', id: 'template' })
        );

        for (let row = 0; row < nCount; row++) {
            for (let col = 0; col < nCount; col++) {
                if (qrcode.isDark(row, col)) {
                    const child = this._makeSVG('use', { x: String(col), y: String(row) });
                    child.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#template');
                    svg.appendChild(child);
                }
            }
        }
    }

    public clear() {
        while (this.el.hasChildNodes()) {
            if (this.el.lastChild) {
                this.el.removeChild(this.el.lastChild);
            }
        }
    }

    private _makeSVG(tag: string, attrs: SVGAttributes) {
        const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const [key, value] of Object.entries(attrs)) {
            el.setAttribute(key, value);
        }
        return el;
    }
}
