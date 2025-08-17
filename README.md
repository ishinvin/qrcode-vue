# QRCode Generator for Vue

<!-- QR code implementation based on https://github.com/kazuhikoarase/qrcode-generator
<br> -->

[Online Demo](https://ishinvin.github.io/qrcode-vue/)


## Installation

```sh
npm i qrcode-vuejs
```

## Usage

#### Import
```js
import VQrcode, { ErrorCorrectLevel, RenderOptions } from 'qrcode-vuejs';
```
#### Basic
```js
// register component
import { createApp } from 'vue';
import VQrcode from 'qrcode-vue';
import TestView from './TestView.vue';

const app = createApp(TestView);
app.use(VQrcode);
app.mount('#test');
```

#### Plugin
```js
// register component
import { createApp } from 'vue';
import VQrcode, { ErrorCorrectLevel, RenderOptions } from 'qrcode-vuejs';
import TestView from './TestView.vue';

const app = createApp(TestView);
app.use(VQrcode, {
    size: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: ErrorCorrectLevel.M,
    render: RenderOptions.CANVAS,
});
app.mount('#test');


```

```js
<script setup lang="ts"></script>
<template>
    <v-qrcode text="https://ishinvin.github.io" />
</template>
```

#### Import Component
```js
// Single-File Components
<script setup lang="ts">
import { VQrcode, RenderOptions, ErrorCorrectLevel } from 'qrcode-vuejs';
</script>

<template>
    <v-qrcode
        text="https://ishinvin.github.io"
        :size="200"
        :render="RenderOptions.CANVAS"
        :correct-level="ErrorCorrectLevel.M"
        color-dark="#000000"
        color-light="#ffffff"
    />
</template>
```

## Props
| Name          | Type              | Default  | Description                            |
| ------------- | ----------------- | -------- | -------------------------------------- |
| text          | string            |          | QR string value to generate            |
| size          | number            | 200      | Size of the QR code canvas             |
| render        | RenderOptions     | CANVAS   | Render type (CANVAS, SVG, IMAGE, HTML) |
| color-dark    | string            | #000000  | Foreground color of the QR             |
| color-light   | string            | #ffffff  | Background color of the QR             |
| correct-level | ErrorCorrectLevel | M        | QR Code has error correction capability to restore data if the code is dirty or damaged. (L = Approx 7%, M = Approx 15%, Q = Approx 25%, H = Approx 30%) |

