import { RenderOptions } from '../draw';
import { ErrorCorrectLevel } from '../qrcode/ErrorCorrectLevel';

export type VQrcodeOptions = {
    size: number;
    colorDark: string;
    colorLight: string;
    correctLevel: ErrorCorrectLevel;
    render: RenderOptions;
};

export type VQrcodeDrawingOptions = Omit<VQrcodeOptions, 'render' | 'correctLevel'>;
