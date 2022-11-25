<template>
    <footer class="py-4 md:py-8">
        <div class="container">
            <div class="flex md:items-end flex-col md:flex-row justify-between">
                <div>
                    <p style="font-family: 'Plantin Bold';"
                        class="text-center md:text-start text-[15px] leading-[24px] md:text-[16px] text-[#1f1f1f] my-6">
                        Nous bâtissons un partenariat pour la
                        bonne santé des <br />
                        patients, la bonne santé des pharmaciens et la <br />
                        bonne santé de notre industrie.
                    </p>
                    <p class="mt-4 text-center md:text-start font-bold text-base md:text-xl"><span>— </span>Faites-en
                        partie.</p>
                </div>
                <div class="flex flex-col md:flex-row md:items-center">
                    <ul class="hidden md:flex flex-col md:flex-row md:items-center mt-4 md:mt-0">
                        <li class="font-normal md:ml-4 text-sm" v-for="(item, index) in links" :key="index">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                    <div class="md:ml-12 my-4 md:my-0 md:mt-0">
                        <p class="text-xl font-semibold text-primary text-center">zPharma</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'Notre Vision',
                    link: '#'
                },
                {
                    name: 'Les patients',
                    link: '#'
                },
                {
                    name: 'Pharmacies',
                    link: '#'
                },
                {
                    name: 'Carrières',
                    link: '#'
                },
                {
                    name: 'Blog',
                    link: '#'
                },
            ]
        }
    }
}
</script>