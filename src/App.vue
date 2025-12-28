<script setup>
    import ModalProvider from '@/provider/ModalProvider.vue';
    import { useUserStore } from '@/store/user';
    import { BxDevTo, FlWeatherSunny, OcPerson } from '@kalimahapps/vue-icons';
    import { RouterView } from 'vue-router';

    const userStore = useUserStore();
    const { logout, getAccessToken } = userStore;

    function toggleDarkMode() {
        document.documentElement.classList.toggle('my-app-dark');
    }

    function handleClickProfile() {
        const accessToken = getAccessToken();

        if (!accessToken) return;

        logout();
    }
</script>

<template>
    <ModalProvider>
        <div class="flex flex-col items-stretch min-h-screen">
            <header class="border-b border-b-bd-sec">
                <div
                    class="w-full max-w-[800px] mx-auto flex items-center justify-between h-15 px-4"
                >
                    <h1>
                        <a href="/" class="flex gap-2 items-center font-bold text-xl">
                            <BxDevTo class="text-3xl" />
                            Dev Log
                        </a>
                    </h1>
                    <div class="flex items-center gap-2">
                        <button @click="toggleDarkMode" type="button" class="cursor-pointer">
                            <FlWeatherSunny class="text-4xl" />
                        </button>
                        <button type="button" class="cursor-pointer" @click="handleClickProfile">
                            <OcPerson class="text-4xl" />
                        </button>
                    </div>
                </div>
            </header>

            <main
                class="relative grow max-w-[800px] mx-auto p-8 border-l border-l-bd-sec border-r border-bd-sec w-full"
            >
                <RouterView />
            </main>

            <footer class="border-t border-t-bd-sec">
                <div class="flex items-center py-8 justify-center">
                    <p>@2025 mhlee reserved</p>
                </div>
            </footer>
        </div>
    </ModalProvider>
</template>
