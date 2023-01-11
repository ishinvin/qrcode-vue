import { type QRCode } from '../qrcode/QRCode';
import { type VQrcodeDrawingOptions } from '../types';

export class DrawHTML {
    private el: HTMLElement;
    private options: VQrcodeDrawingOptions;

    constructor(el: HTMLElement, options: VQrcodeDrawingOptions) {
        this.el = el;
        this.options = options;
    }

    public draw(qrcode: QRCode): void {
        this.clear();

        const size = this.options.size;
        const nCount = qrcode.getModuleCount();
        const nWidth = Math.floor(size / nCount);
        const nHeight = Math.floor(size / nCount);
        const aHTML = ['<table style="border:0;border-collapse:collapse;">'];

        for (let row = 0; row < nCount; row++) {
            aHTML.push('<tr>');

            for (let col = 0; col < nCount; col++) {
                aHTML.push(
                    '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                        nWidth +
                        'px;height:' +
                        nHeight +
                        'px;background-color:' +
                        (qrcode.isDark(row, col) ? this.options.colorDark : this.options.colorLight) +
                        ';"></td>'
                );
            }

            aHTML.push('</tr>');
        }

        aHTML.push('</table>');
        this.el.innerHTML = aHTML.join('');

        // Fix the margin values as real size.
        const elTable = this.el.childNodes[0] as HTMLTableElement;
        const nLeftMarginTable = (size - elTable.offsetWidth) / 2;
        const nTopMarginTable = (size - elTable.offsetHeight) / 2;

        if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
            elTable.style.margin = nTopMarginTable + 'px ' + nLeftMarginTable + 'px';
        }
    }

    public clear() {
        this.el.innerHTML = '';
    }
}
