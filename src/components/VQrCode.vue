<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ErrorCorrectLevel } from '../qrcode/ErrorCorrectLevel';
import { QR8BitByte } from '../qrcode/QR8BitByte';
import { QRCode } from '../qrcode/QRCode';

const qrcode = ref<HTMLDivElement | null>(null);

onMounted(() => {
    // console.log(qrcode);
    const qr = new QRCode();
    qr.setTypeNumber(5);
    qr.setErrorCorrectLevel(ErrorCorrectLevel.L);
    qr.addData(new QR8BitByte('hi ishin'));
    qr.make();

    const img = document.createElement('img');
    img.setAttribute('src', qr.toDataURL());
    qrcode.value?.appendChild(img);
});
</script>

<template>
    <div class="v-qrcode" ref="qrcode"></div>
</template>
