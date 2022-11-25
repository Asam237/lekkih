<template>
    <footer class="py-4 md:py-8">
        <div class="container">
            <div class="flex items-end flex-col md:flex-row justify-between">
                <div>
                    <p class="leading-8">Nous bâtissons un partenariat pour la bonne santé des <br />
                        patients, la bonne santé des pharmaciens et la <br />
                        bonne santé de notre industrie.
                    </p>
                    <h4 class="mt-4"><span>— </span>Faites-en partie.</h4>
                </div>
                <div class="flex flex-col md:flex-row md:items-center">
                    <ul class="hidden md:flex flex-col md:flex-row md:items-center mt-4 md:mt-0">
                        <li class="font-semibold md:ml-4 text-sm" v-for="(item, index) in links" :key="index">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                    <div class="md:ml-12">
                        <p class="text-xl font-semibold text-primary">mPharma</p>
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