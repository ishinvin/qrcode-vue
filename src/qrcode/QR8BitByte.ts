import { BitBuffer } from './BitBuffer';
import { Mode } from './Mode';
import { QRCode } from './QRCode';
import { QRData } from './QRData';

/**
 * QR8BitByte
 * @author Kazuhiko Arase
 */
export class QR8BitByte extends QRData {
    constructor(data: string) {
        super(Mode.MODE_8BIT_BYTE, data);
    }

    public write(buffer: BitBuffer): void {
        const data = QRCode.stringToBytes(this.getData());
        for (let i = 0; i < data.length; i += 1) {
            buffer.put(data[i], 8);
        }
    }

    public getLength(): number {
        return QRCode.stringToBytes(this.getData()).length;
    }
}
