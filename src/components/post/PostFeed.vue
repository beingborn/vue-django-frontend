<script setup>
    import DefaultAvatar from '@/assets/images/default_avatar.jpg';
    import { AkHeart, AnFilledHeart, AnOutlinedComment } from '@kalimahapps/vue-icons';
    import axios from 'axios';
    import { defineProps, onMounted, ref } from 'vue';

    const props = defineProps({
        access_token: {
            type: Number,
        },
    });

    const posts = ref([]);

    const get_posts = async () => {
        try {
            const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/post/views', {
                access_token: props.access_token,
            });

            posts.value = response.data;
        } catch (error) {
            console.log(error);
        }
    };

    onMounted(() => {
        if (props.access_token) {
            get_posts();
        }
    });
</script>

<template>
    <article v-for="post in posts" class="flex flex-col gap-4 py-4 border-b border-b-bd-sec">
        <div class="flex flex-row justify-between">
            <div class="flex items-center gap-3 text-text-sec">
                <img class="h-8 w-8 rounded-full" :src="DefaultAvatar" alt="OO 프로필 이미지" />
                <div class="flex flex-col">
                    <p class="font-bold">{{ post.nickname }}</p>
                    <p>3일 전</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <Button severity="secondary" variant="text" class="hover:bg-bd-thr">수정</Button>
                <Button severity="secondary" variant="text" class="hover:bg-bd-thr">삭제</Button>
            </div>
        </div>
        <div class="min-h-15">
            <h2 class="font-bold">{{ post.title }}</h2>
            {{ post.body }}
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
</template>
