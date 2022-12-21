import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineConfig({
    base: './',
    server: {
        host: true,
        port: 8080,
        cors: true,
    },
    resolve: {
        alias: {
            'components': path.resolve(__dirname, './src/components/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
        },
    },
    plugins: [vue(), svgLoader()],
});
