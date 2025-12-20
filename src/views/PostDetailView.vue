<script setup>
    import DefaultAvatar from '@/assets/images/default_avatar.jpg';
    import { Button, Textarea } from 'primevue';
    import { ref } from 'vue';

    const comment = ref('');
</script>
<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between">
            <div class="flex items-center gap-3 text-text-sec">
                <img class="h-8 w-8 rounded-full" :src="DefaultAvatar" alt="OO 프로필 이미지" />
                <div class="flex flex-col">
                    <p class="font-bold">유저명</p>
                    <p>3일 전</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <Button severity="secondary" variant="text" class="hover:bg-bd-thr">수정</Button>
                <Button severity="secondary" variant="text" class="hover:bg-bd-thr">삭제</Button>
            </div>
        </div>
        <div class="min-h-20">콘텐츠를 잘짜시길 발라요</div>
    </div>
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">댓글</h2>
        <Textarea v-model="comment" fluid />
        <div class="flex justify-end">
            <Button>작성</Button>
        </div>
        <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-8 pb-5 border-b border-b-bd-sec">
                <div class="flex items-start gap-4">
                    <a href="#"
                        ><div
                            class="flex aspect-square h-full flex-col overflow-hidden rounded-full"
                        >
                            <img
                                class="h-10 w-10 object-cover"
                                src="https://hqrtbhxjhvtcgvkgkpxm.supabase.co/storage/v1/object/public/uploads/6cc2de6d-401c-4db3-96f5-642288ddfe69/avatar/1765709228152-bf69809c-95bd-4d48-84d1-ef5deb983b95.png"
                            /></div
                    ></a>
                    <div class="flex w-full flex-col gap-2">
                        <div class="font-bold">마시마로</div>
                        <div>네</div>
                        <div class="text-txt-sec flex justify-between text-sm">
                            <div class="flex items-center gap-2">
                                <button class="cursor-pointer hover:underline">댓글</button>
                                <div class="bg-border h-[13px] w-[2px]"></div>
                                <div>6일 전</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-8 pb-5 ml-6">
                    <div class="flex items-start gap-4">
                        <a href="/post/20" data-discover="true"
                            ><div
                                class="flex aspect-square h-full flex-col overflow-hidden rounded-full"
                            >
                                <img
                                    class="h-10 w-10 object-cover"
                                    src="https://hqrtbhxjhvtcgvkgkpxm.supabase.co/storage/v1/object/public/uploads/b568b27c-317f-451f-b670-f1493ef66869/avatar/1765709464626-83d786ea-0e5a-445e-9fe5-d1692a9a56c4.jfif"
                                /></div
                        ></a>
                        <div class="flex w-full flex-col gap-2">
                            <div class="font-bold">햄</div>
                            <div>dddddd</div>
                            <div class="text-txt-sec flex justify-between text-sm">
                                <div class="flex items-center gap-2">
                                    <button class="cursor-pointer hover:underline">댓글</button>
                                    <div class="h-[13px] w-[2px]"></div>
                                    <div>방금 전</div>
                                </div>
                                <div class="flex items-center gap-2 text-txt-thr">
                                    <button class="cursor-pointer hover:underline">수정</button>
                                    <div class="h-[13px] w-[2px]"></div>
                                    <button class="cursor-pointer hover:underline">삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
