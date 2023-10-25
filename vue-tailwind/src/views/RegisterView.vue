<template>
    <div v-if="isCustomer">
        <div
            class="absolute w-72 h-96 sm:h-1/2 sm:w-1/2 md:min-w-max  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 shadow-lg shadow-gray-400 hover:shadow-none duration-300 rounded-lg">

            <div class="flex flex-col items-center sm:h-full sm:flex-row sm:justify-evenly px-8 ">

                <div>
                    <img class="w-40 sm:w-96 " src="src/assets/shopify-logo.png" alt="shopify-logo">
                </div>
                <div class="space-y-5 ">
                    <h2 class="text-center text-xl text-white font-semibold">Customer</h2>
                    <div class="flex flex-col items-center">
                        <input placeholder="Your email..." type="text"
                            class=" px-3 py-2 rounded-lg outline-none border-none">
                        <!-- HATA MESAJI -->
                    </div>
                    <div class="flex flex-col items-center "> 
                        <input placeholder="Password..." type="password"
                            class="px-3 py-2 rounded-lg outline-none border-none">
                        <!-- HATA MESAJI -->
                    </div>

                    <div class="flex justify-center">
                        <button class="outline outline-1 rounded-md px-2 py-1 text-white hover:text-red-600 hover:bg-white transition-colors duration-300 font-semibold">Login</button>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-1 sm:bottom-5 left-1/2 sm:flex sm:justify-center">
                <button @click="goToCompanyRegisterPage"
                    class="p-1 sm:p-2 bg-white -translate-x-1/2 text-red-600 rounded-md mb-2 font-bold hover:outline hover:outline-1 hover:outline-white hover:bg-transparent hover:text-white transition-colors duration-300">I'm
                    a company</button>
            </div>

        </div>
    </div> 
    <div v-else>
        <div
            class="absolute w-72 h-96 sm:h-1/2 sm:w-1/2 md:min-w-max  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 shadow-lg shadow-gray-400 hover:shadow-none duration-300 rounded-lg">

            <div class="flex flex-col items-center sm:h-full sm:flex-row sm:justify-evenly px-8 ">

                <div>
                    <img class="w-40 sm:w-96 " src="src/assets/shopify-logo.png" alt="shopify-logo">
                </div>
                <div class="space-y-5 ">
                    <h2 class="text-center text-xl text-white font-semibold">Company</h2>
                    <div class="flex flex-col items-center">
                        <input placeholder="Your email..." type="text"
                            class=" px-3 py-2 rounded-lg outline-none border-none">
                        <!-- HATA MESAJI -->
                    </div>
                    <div class="flex flex-col items-center "> 
                        <input placeholder="Password..." type="password"
                            class="px-3 py-2 rounded-lg outline-none border-none">
                        <!-- HATA MESAJI -->
                    </div>

                    <div class="flex justify-center">
                        <button class="outline outline-1 rounded-md px-2 py-1 text-white hover:text-red-600 hover:bg-white transition-colors duration-300 font-semibold">Login</button>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-1 sm:bottom-5 left-1/2 sm:flex sm:justify-center">
                <button @click="goToCustomerRegisterPage"
                    class="p-1 sm:p-2 bg-white -translate-x-1/2 text-red-600 rounded-md mb-2 font-bold hover:outline hover:outline-1 hover:outline-white hover:bg-transparent hover:text-white transition-colors duration-300">I'm
                    a customer</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCustomer: true
        }
    },

    methods: {
        goToCompanyRegisterPage() {
            this.isCustomer = !this.isCustomer
        },
        goToCustomerRegisterPage() {
            this.isCustomer = !this.isCustomer
        }
    }
}
</script>