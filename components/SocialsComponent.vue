<template>
    <div class="py-24 bg-[#fdc300]">
        <div class="container">
            <div>
                <h1 class="font-[400] text-[34px] md:text-[68px] text-[#1f1f1f] text-center leading-10 md:leading-[70px]"
                    style="font-family: 'Plantin Bold';">zPharma dans les médias</h1>
                <div class="md:w-3/4 container mx-auto">
                    <div class="grid gap-12 grid-cols-1 md:grid-cols-2 mt-14 md:mt-28 content-center">
                        <div v-for="(item, index) in cards" :key="index"
                            class="bg-white shadow-sm p-10 md:p-20 flex flex-col items-center rounded-md">
                            <h4 class="font-[400] text-[26px] leading-[24px] text-[#1f1f1f] md:text-[34px] text-center">
                                {{
                                        item.title
                                }}</h4>
                            <p class="text-center text-[15px] leading-[24px] md:leading-[34px] md:text-[20px] text-[#1f1f1f] my-6 md:my-12"
                                style="font-family: 'Plantin Light';">{{
                                        item.content
                                }}</p>
                            <p class="font-bold text-lg text-center">{{ item.footer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
        return {
            cards: [
                {
                    title: "FINANCIAL TIMES",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, veritatis tenetur.",
                    footer: "Temps financiers"
                },
                {
                    title: "FaSTC@MPANY",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, veritatis tenetur.",
                    footer: "Entreprise rapide"
                },
                {
                    title: "Skoll",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, veritatis tenetur.",
                    footer: "Récompenses Skoll"
                },
                {
                    title: "QUARTZ",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, veritatis tenetur.",
                    footer: "Quartz"
                },
            ]
        }
    }
}
</script>