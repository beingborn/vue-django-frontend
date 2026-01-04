<script setup>
    import ModalProvider from '@/provider/ModalProvider.vue';
    import { useUserStore } from '@/store/user';
    import { BxDevTo, FlWeatherSunny, OcPerson } from '@kalimahapps/vue-icons';
    import { storeToRefs } from 'pinia';
    import { Popover } from 'primevue';
    import { ref } from 'vue';
    import { RouterView } from 'vue-router';

    const profile = ref();
    const userStore = useUserStore();
    const { logout } = userStore;
    const { authToken } = storeToRefs(userStore);

    function toggleDarkMode() {
        document.documentElement.classList.toggle('my-app-dark');
    }

    function toggleProfilePopover(event) {
        profile.value.toggle(event);
    }

    function handleLogout(event) {
        if (!authToken) return;

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
                        <button type="button" @click="toggleProfilePopover">
                            <OcPerson class="text-4xl" />
                        </button>
                        <Popover ref="profile" :key="authToken">
                            <div class="flex flex-col gap-4 w-30">
                                <a
                                    :href="`/profile/${authToken}`"
                                    class="leading-8 px-1 rounded-md cursor-pointer text-left hover:bg-gray-100 transition duration-300 ease-in-ou"
                                    @click="handleClickProfile"
                                    v-if="authToken"
                                >
                                    프로필
                                </a>
                                <button
                                    class="leading-8 px-1 rounded-md cursor-pointer text-left hover:bg-gray-100 transition duration-300 ease-in-ou"
                                    @click="handleLogout"
                                    v-if="authToken"
                                >
                                    로그아웃
                                </button>
                                <a
                                    href="/signin"
                                    class="leading-8 px-1 rounded-md cursor-pointer text-left hover:bg-gray-100 transition duration-300 ease-in-ou"
                                    @click="handleClickProfile"
                                    v-if="!authToken"
                                >
                                    로그인
                                </a>
                            </div>
                        </Popover>
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
