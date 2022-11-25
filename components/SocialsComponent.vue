<template>
    <div class="py-24 bg-[#fdc300]">
        <div class="container">
            <div>
                <h1 class="font-[400] text-[34px] md:text-[68px] text-[#1f1f1f] text-center"
                    style="font-family: 'Plantin Bold';">mPharma dans les médias</h1>
                <div class="grid gap-12 grid-cols-1 md:grid-cols-2 mt-14 md:mt-28">
                    <div v-for="(item, index) in cards" :key="index"
                        class="bg-white shadow-sm p-10 md:p-20 flex flex-col items-center rounded-md">
                        <h4 class="font-[400] text-[20px] leading-[24px] text-[#1f1f1f] md:text-[24px] text-center">{{
                                item.title
                        }}</h4>
                        <p class="text-center text-[17px] leading-[26px] md:text-[21px] text-[#1f1f1f] my-6 md:my-12"
                            style="font-family: 'Plantin Light';">{{
                                    item.content
                            }}</p>
                        <p class="font-bold text-lg text-center">{{ item.footer }}</p>
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
                    content: "La startup Lekkih de Gregory Rockson vise à réparer l'approvisionnement en médicaments en Afrique",
                    footer: "Temps financiers"
                },
                {
                    title: "FaSTC@MPANY",
                    content: "Les entreprises les plus innovantes au monde lauréates 2018 par secteur",
                    footer: "Entreprise rapide"
                },
                {
                    title: "Skoll",
                    content: "Rencontrez les lauréats Skoll 2019 pour l'entrepreneuriat social",
                    footer: "Récompenses Skoll"
                },
                {
                    title: "QUARTZ",
                    content: "Une startup perturbant le commerce des médicaments sur ordonnance en Afrique reçoit un soutien majeur de la Silicon Valley",
                    footer: "Quartz"
                },
            ]
        }
    }
}
</script>