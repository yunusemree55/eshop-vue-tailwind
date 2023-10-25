<template>
    <div
        class="flex flex-col px-5  items-center xl:items-center lg:flex-row shadow-lg sticky top-0 z-50 sm:flex-row justify-between bg-red-600   ">
        <div class="">
            <img src="src/assets/shopify-logo.png" class="w-60 lg:w-48  sm:w-44 ">
        </div>
        <div class="hidden sm:block">
            <RouterLink :to="{ name: 'LoginPage' }">
                <button
                    class="py-2 px-5 mx-1 bg-green-500 text-white font-bold rounded-lg hover:outline hover:outline-1 hover:outline-red-600 hover:bg-white hover:text-red-600 transition-colors duration-300">Giriş
                    Yap</button>
            </RouterLink>
            <RouterLink :to="{name:'RegisterPage'}">
                <button
                    class="py-2 px-5 mx-1 bg-transparent text-white outline outline-1 hover:text-red-600 hover:bg-white font-bold transition-colors duration-300 rounded-lg">Kayıt
                    Ol</button>
            </RouterLink>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },

}
</script>