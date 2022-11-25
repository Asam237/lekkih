import VueAOS from "vue-aos"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueAOS)
})