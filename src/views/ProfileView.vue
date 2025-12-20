<script setup>
    import DefaultAvatar from '@/assets/images/default_avatar.jpg';
    import { AkHeart, AnFilledHeart, AnOutlinedComment } from '@kalimahapps/vue-icons';
    import { Button } from 'primevue';
</script>
<template>
    <!-- 프로필 영역 -->
    <section class="border-b border-b-bd-sec pb-8">
        <h2 class="hidden">프로필</h2>
        <div class="flex flex-col gap-4 items-center">
            <img
                :src="DefaultAvatar"
                class="w-10 h-10 rounded-full object-cover"
                alt="유저 이미지"
            />
            <strong>유저명</strong>
            <Button severity="secondary">프로필 수정</Button>
        </div>
    </section>

    <!-- 유저 FEED 영역 -->
    <section class="flex flex-col mt-8">
        <article class="flex flex-col gap-4 py-4 border-b border-b-bd-sec">
            <div class="flex flex-row justify-between">
                <div class="flex items-center gap-3 text-text-sec">
                    <img class="h-8 w-8 rounded-full" :src="DefaultAvatar" alt="OO 프로필 이미지" />
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
        <article class="flex flex-col gap-4 py-4 border-b border-b-bd-sec">
            <div class="flex flex-row justify-between">
                <div class="flex items-center gap-3 text-text-sec">
                    <img class="h-8 w-8 rounded-full" :src="DefaultAvatar" alt="OO 프로필 이미지" />
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
</template>
