import { ErrorCorrectLevel } from '../qrcode/ErrorCorrectLevel';

export enum VQrcodeRenderOptions {
    SVG = 1,
    IMAGE = 2,
    CANVAS = 3,
    HTML = 4,
}

export type VQrcodeOptions = {
    size: number;
    colorDark: string;
    colorLight: string;
    correctLevel: ErrorCorrectLevel;
    render: VQrcodeRenderOptions;
};
