import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({ insertTypesEntry: true })],
    build: {
        lib: {
            entry: './src/index.ts',
            formats: ['es', 'umd'],
            name: 'VQrcode',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
