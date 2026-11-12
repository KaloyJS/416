import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                // Leave /storage/... image URLs alone instead of
                // treating them as module imports.
                transformAssetUrls: { base: null, includeAbsolute: false },
            },
        }),
    ],
});
