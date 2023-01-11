<script setup lang="ts">
import { ref } from 'vue';
const hello = ref('hi ishin');
</script>

<template>
    <div>
        <input type="text" v-model="hello" style="width: 192px; margin-top: 20px" />
        <v-qrcode :text="hello" style="margin-top: 20px" />
    </div>
</template>
