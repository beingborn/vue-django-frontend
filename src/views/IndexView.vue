<script setup>
    import { AkCirclePlus, AkSearch } from '@kalimahapps/vue-icons';
    import { Button, IconField, InputIcon, InputText, Listbox } from 'primevue';
    import { ref } from 'vue';

    const selectedTags = ref(null);
    const tags = ref([
        { name: '태그1', code: 'tag1' },
        { name: '태그2', code: 'tag2' },
        { name: '태그3', code: 'tag3' },
        { name: '태그4', code: 'tag4' },
        { name: '태그5', code: 'tag5' },
    ]);
</script>

<template>
    <div class="flex flex-col">
        <aside class="absolute top-8 -right-64">
            <div class="w-60 flex flex-col gap-4 p-4 border border-gray-300 rounded-sm">
                <IconField>
                    <InputText placeholder="검색어를 입력하세요." fluid />
                    <InputIcon>
                        <AkSearch class="text-1xl text-text-thr" />
                    </InputIcon>
                </IconField>
                <div class="flex flex-col gap-2">
                    <Listbox
                        checkmark
                        :highlightOnSelect="false"
                        v-model="selectedTags"
                        :options="tags"
                        multiple
                        optionLabel="name"
                        class="w-full"
                    />
                </div>
                <Button class="w-full flex items-center gap-2">
                    <span>검색</span>
                </Button>
            </div>
        </aside>
        <div class="flex flex-col gap-2">
            <!-- 포스트 작성 -->
            <button
                type="button"
                class="bg-muted text-text-sec cursor-pointer rounded-xl px-6 py-4 bg-bg-pri"
            >
                <div class="flex justify-between bg-color-bg-pri">
                    <span> 포스트를 작성해주세요! </span>
                    <AkCirclePlus class="w-5 h-5 text-text-sec" />
                </div>
            </button>
        </div>
    </div>
</template>
