<script setup lang="ts">
import { onMounted } from 'vue';
import { ErrorCorrectLevel } from './qrcode/ErrorCorrectLevel';
import { QR8BitByte } from './qrcode/QR8BitByte';
import { QRCode } from './qrcode/QRCode';

onMounted(() => {
    const qr = new QRCode();
    qr.setTypeNumber(5);
    qr.setErrorCorrectLevel(ErrorCorrectLevel.L);
    qr.addData(new QR8BitByte('hi ishin'));
    qr.make();

    const img = document.createElement('img');
    img.setAttribute('src', qr.toDataURL());
    document.body.appendChild(img);
});
</script>

<template>
    <div></div>
</template>
