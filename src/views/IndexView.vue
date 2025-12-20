<script setup>
    import DefaultAvatar from '@/assets/images/default_avatar.jpg';
    import {
        AkCirclePlus,
        AkHeart,
        AnFilledHeart,
        AnOutlinedComment,
    } from '@kalimahapps/vue-icons';
    import { Button, InputGroup, InputGroupAddon, InputText, Listbox } from 'primevue';
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
        <div class="flex flex-col gap-2 mb-8">
            <div class="text-2xl">
                <p>안녕하세요</p>
                <strong>OO님!</strong>
            </div>
            <!-- 포스트 작성 -->
            <button
                type="button"
                class="bg-muted text-text-sec cursor-pointer rounded-xl px-6 py-4 bg-bg-pri"
            >
                <div class="flex justify-between bg-color-bg-pri items-center">
                    <span> 포스트를 작성해주세요!</span>
                    <AkCirclePlus class="w-5 h-5 text-text-sec" />
                </div>
            </button>
        </div>

        <div class="flex flex-col gap-4">
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
        </div>

        <!-- Feed -->
        <section class="flex flex-col mt-8">
            <article class="flex flex-col gap-4 py-4 border-b border-b-bd-sec">
                <div class="flex flex-row justify-between">
                    <div class="flex items-center gap-3 text-text-sec">
                        <img
                            class="h-8 w-8 rounded-full"
                            :src="DefaultAvatar"
                            alt="OO 프로필 이미지"
                        />
                        <div class="flex flex-col">
                            <p class="font-bold">유저명</p>
                            <p>3일 전</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <Button severity="secondary" variant="text" class="hover:bg-bd-thr"
                            >수정</Button
                        >
                        <Button severity="secondary" variant="text" class="hover:bg-bd-thr"
                            >삭제</Button
                        >
                    </div>
                </div>
                <div class="min-h-15">
                    <p>텍스트를 출력해주세요.</p>
                    <p>텍스트를 출력해주세요.</p>
                    <p>텍스트를 출력해주세요.</p>
                </div>
                <div class="flex gap-2 items-center">
                    <button type="button" class="h-10 rounded-md px-3 border border-bd-sec">
                        <AkHeart />
                        <AnFilledHeart class="hidden" />
                    </button>
                    <button
                        type="button"
                        class="flex gap-2 items-center rounded-md h-10 px-3 border border-bd-sec text-sm"
                    >
                        <span> 댓글 달기 </span>
                        <AnOutlinedComment />
                    </button>
                </div>
            </article>
            <article class="flex flex-col gap-4 py-4 border-b border-b-bd-thr">
                <div class="flex flex-row justify-between">
                    <div class="flex items-center gap-3 text-text-sec">
                        <img
                            class="h-8 w-8 rounded-full"
                            :src="DefaultAvatar"
                            alt="OO 프로필 이미지"
                        />
                        <div class="flex flex-col">
                            <p class="font-bold">유저명</p>
                            <p>3일 전</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <Button severity="secondary" variant="text" class="hover:bg-bd-thr"
                            >수정</Button
                        >
                        <Button severity="secondary" variant="text" class="hover:bg-bd-thr"
                            >삭제</Button
                        >
                    </div>
                </div>
                <div class="min-h-15">
                    <p>텍스트를 출력해주세요.</p>
                    <p>텍스트를 출력해주세요.</p>
                    <p>텍스트를 출력해주세요.</p>
                </div>
                <div class="flex gap-2 items-center">
                    <button type="button" class="h-10 rounded-md px-3 border border-bd-sec">
                        <AkHeart />
                        <AnFilledHeart class="hidden" />
                    </button>
                    <button
                        type="button"
                        class="flex gap-2 items-center rounded-md h-10 px-3 border border-bd-sec text-sm"
                    >
                        <span> 댓글 달기 </span>
                        <AnOutlinedComment />
                    </button>
                </div>
            </article>
        </section>
    </div>
</template>
