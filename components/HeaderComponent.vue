<template>
    <header class="py-4 md:py-8">
        <div class="container">
            <div class="flex items-center flex-row justify-between">
                <div class="logo">
                    <h4 class="text-xl md:text-3xl text-primary">Lekkih</h4>
                </div>
                <div class="flex flex-col md:flex-row md:items-center">
                    <ul class="hidden md:flex flex-col md:flex-row md:items-center mt-4 md:mt-0">
                        <li class="font-bold md:ml-4 text-lg md:text-xl" v-for="(item, index) in links" :key="index">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                    <div class="md:ml-12">
                        <button>Entrer en contact</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
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