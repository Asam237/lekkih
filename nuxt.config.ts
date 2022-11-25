export default defineNuxtConfig({
    nitro: {
        preset: 'vercel-edge',
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'lekkih-website',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'preload prefetch',
                type: 'font/ttf',
                href: '/fonts/Sofia/SofiaLight.ttf',
                as: 'font',
                crossOrigin: 'anonymous',
            },
            {
                rel: 'preload prefetch',
                type: 'font/ttf',
                href: '/fonts/Sofia/SofiaMedium.ttf',
                as: 'font',
                crossOrigin: 'anonymous',
            },
            {
                rel: 'preload prefetch',
                type: 'font/otf',
                href: '/fonts/Sofia/PlantinSemibold.otf',
                as: 'font',
                crossOrigin: 'anonymous',
            },
            {
                rel: 'preload prefetch',
                type: 'font/otf',
                href: '/fonts/Sofia/PlantinLight.otf',
                as: 'font',
                crossOrigin: 'anonymous',
            },
        ],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/postcss8',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    css: ['@/assets/css/main.css'],

})


