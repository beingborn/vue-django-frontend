<script setup>
    import { BxDevTo, FlWeatherSunny, OcPerson } from '@kalimahapps/vue-icons';
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="flex flex-col items-stretch min-h-screen">
        <header class="border-b border-b-gray-300">
            <div class="w-full max-w-[1300px] mx-auto flex items-center justify-between h-15 px-4">
                <h1>
                    <a href="/" class="flex gap-2 items-center font-bold text-xl">
                        <BxDevTo class="text-3xl" />
                        Dev Log
                    </a>
                </h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="cursor-pointer">
                        <FlWeatherSunny class="text-4xl" />
                    </button>
                    <button type="button" class="cursor-pointer">
                        <OcPerson class="text-4xl" />
                    </button>
                </div>
            </div>
        </header>

        <main
            class="grow max-w-[1300px] mx-auto p-8 border-l border-l-gray-300 border-r border-gray-300 w-full"
        >
            <RouterView />
        </main>

        <footer class="border-t border-t-gray-300">
            <div class="flex items-center py-8 justify-center">
                <p>@2025 mhlee reserved</p>
            </div>
        </footer>
    </div>
</template>
