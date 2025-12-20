<template>
    <!-- 포스트 작성 -->
    <button
        @click="openCreatePostModal"
        type="button"
        class="bg-muted text-txt-pri cursor-pointer rounded-xl px-6 py-4 bg-bg-pri dark:text-txt-sec"
    >
        <div class="flex justify-between bg-color-bg-pri items-center">
            <span>안녕하세요 <strong>OO님</strong> 포스트를 작성해주세요!</span>
            <AkCirclePlus class="w-5 h-5 text-text-sec" />
        </div>
    </button>
</template>
<script setup>
    import { AkCirclePlus } from '@kalimahapps/vue-icons';

    import { usePostEditorModalStore } from '@/store/PostEditorModal';

    const postEditorModal = usePostEditorModalStore();
    const openCreatePostModal = postEditorModal.openCreate;
</script>
