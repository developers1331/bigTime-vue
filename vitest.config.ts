import {defineConfig} from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
    plugins: [Vue(), tsconfigPaths()],
    resolve: {
        alias: {
            'components': path.resolve(__dirname, './src/components/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
