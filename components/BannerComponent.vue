<template>
    <div
        class=" bg-no-repeat object-cover h-[70vh] md:h-[90vh] w-full bg-center bg-cover bg-[url('/assets/imgs/doctor.jpg')]">
        <div
            class="fade flex md:justify-end  justify-center text-center md:text-start h-[80vh] flex-col pt-[4rem] container">
            <h1 class="text-[34px] md:text-[68px] font-[400] text-white leading-[35px] md:leading-[72px] md:w-1/2">
                De nombreux pays ne sont pas préparés.
            </h1>
            <h4 class="fade text-[15px] md:text-[20px] leading-[24px] md:leading-[34px] md:w-3/5 mt-8 text-white font-normal">
                Après des décennies de priorité accordée au paludisme et au VIH, ce sont les nouveaux tueurs - comme le
                cancer, le diabète et l'hypertension - qui font peser le plus lourd fardeau sur les systèmes de santé
                africains.
            </h4>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    mounted() {
        gsap.from('.fade', {
            opacity: 0,
            duration: 2,
        });
    },

    methods: {

    }
}
</script>