<script setup lang="ts">
import { inject, onMounted, ref, watch } from 'vue';
import { DrawCanvas, DrawHTML, DrawImage, DrawSVG, RenderOptions } from '../draw';
import { ErrorCorrectLevel } from '../qrcode/ErrorCorrectLevel';
import { QRCode } from '../qrcode/QRCode';
import { VQrcodeOptions } from '../types';

const props = defineProps<{
    size?: number;
    colorDark?: string;
    colorLight?: string;
    correctLevel?: ErrorCorrectLevel;
    render?: RenderOptions;
    text: string;
}>();

const getInjectOptions = (): VQrcodeOptions => {
    const opt = inject('VQrcodeOptions', undefined);
    if (opt) {
        return opt as VQrcodeOptions;
    }
    return {
        size: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: ErrorCorrectLevel.M,
        render: RenderOptions.CANVAS,
    };
};
const injectOptions = getInjectOptions();
const getOptions = (): VQrcodeOptions => {
    return {
        size: props.size ?? injectOptions.size,
        colorDark: props.colorDark ?? injectOptions.colorDark,
        colorLight: props.colorLight ?? injectOptions.colorLight,
        correctLevel: props.correctLevel ?? injectOptions.correctLevel,
        render: props.render ?? injectOptions.render,
    };
};

const qrTag = ref<HTMLElement | null>(null);
let drawing: DrawSVG | DrawCanvas | DrawHTML | DrawImage;

const makeQR = (text: string) => {
    if (text === undefined || text === '' || text === null) return;
    const options = getOptions();

    const qr = new QRCode();
    qr.setTypeNumber(0);
    qr.setErrorCorrectLevel(options.correctLevel);
    qr.addData(text);
    qr.make();
    switch (options.render) {
        case RenderOptions.SVG: {
            drawing = new DrawSVG(qrTag.value!, options);
            drawing.draw(qr);
            break;
        }
        case RenderOptions.CANVAS: {
            // check support canvas
            if (typeof CanvasRenderingContext2D !== 'undefined') {
                drawing = new DrawCanvas(qrTag.value!, options);
            } else {
                drawing = new DrawSVG(qrTag.value!, options);
            }
            drawing.draw(qr);
            break;
        }
        case RenderOptions.IMAGE: {
            drawing = new DrawImage(qrTag.value!, options);
            drawing.draw(qr);
            break;
        }
        case RenderOptions.HTML: {
            drawing = new DrawHTML(qrTag.value!, options);
            drawing.draw(qr);
            break;
        }
        default: {
            break;
        }
    }
};

const clear = () => {
    if (drawing) {
        drawing.clear();
    }
};

onMounted(() => {
    makeQR(props.text);
});

watch(
    () => props,
    (newProps) => {
        clear();
        makeQR(newProps.text);
    },
    {
        deep: true,
    }
);
</script>

<template>
    <div ref="qrTag"></div>
</template>
