<template>
    <!-- 포스트 작성 -->
    <button
        @click="openCreatePostModal"
        type="button"
        class="bg-muted text-txt-pri cursor-pointer rounded-xl px-6 py-4 bg-bg-pri dark:text-txt-sec"
    >
        <div class="flex justify-between bg-color-bg-pri items-center">
            <span
                >안녕하세요
                <strong>{{ userName }}</strong>
                포스트를 작성해주세요!</span
            >
            <AkCirclePlus class="w-5 h-5 text-text-sec" />
        </div>
    </button>
</template>
<script setup>
    import { usePostEditorModalStore } from '@/store/PostEditorModal';
    import { AkCirclePlus } from '@kalimahapps/vue-icons';
    import { computed } from 'vue';

    const props = defineProps({
        user: {
            type: Object,
            default: null,
        },
    });

    // computed => 값 캐싱
    const userName = computed(() => (props.user ? `${props.user.nickname}님` : '익명님'));

    const postEditorModal = usePostEditorModalStore();
    const openCreatePostModal = postEditorModal.openCreate;
</script>
