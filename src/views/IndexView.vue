<script setup>
    import CreatePostButton from '@/components/post/CreatePostButton.vue';
    import PostFeed from '@/components/post/PostFeed.vue';
    import { useUserStore } from '@/store/user';
    import { storeToRefs } from 'pinia';
    import { Button, InputGroup, InputGroupAddon, InputText, Listbox } from 'primevue';
    import { computed, ref } from 'vue';

    const userStore = useUserStore();
    const { getAuthToken } = userStore;
    const { authToken } = storeToRefs(userStore);

    const user = getAuthToken();
    const selectedTags = ref(null);
    const tags = ref([
        { name: '태그1', code: 'tag1' },
        { name: '태그2', code: 'tag2' },
        { name: '태그3', code: 'tag3' },
        { name: '태그4', code: 'tag4' },
        { name: '태그5', code: 'tag5' },
    ]);

    const isAuthenticated = computed(() => !!authToken.value?.access_token);
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col gap-4">
            <CreatePostButton :user="user" />
            <span class="hidden">
                <InputGroup>
                    <InputText placeholder="키워드를 입력하세요." fluid />
                    <InputGroupAddon>
                        <Button class="cursor-pointer" severity="primary">
                            <span class="text-white">검색 </span>
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
                <Listbox
                    checkmark
                    :highlightOnSelect="false"
                    v-model="selectedTags"
                    :options="tags"
                    multiple
                    optionLabel="name"
                    class="w-full"
                    listStyle="max-height: 100px"
                />
            </span>
        </div>

        <!-- Feed -->
        <section class="flex flex-col mt-8">
            <PostFeed v-if="isAuthenticated" :access_token="authToken.access_token" />
        </section>
    </div>
</template>
