<script setup>
    import { Button, Dialog, InputText, Select, Textarea } from 'primevue';
    import { ref } from 'vue';

    const title = ref('');
    const content = ref('');
    const selectedtag = ref('');
    const visible = ref(true);

    const tags = ref(['태그 선택', '태그1', '태그2', '태그3', '태그4', '태그5']);
</script>
<template>
    <Dialog
        v-model:visible="visible"
        modal
        header="포스트 작성"
        :style="{ width: 'calc(100vw - 40px)', maxWidth: '600px' }"
    >
        <div class="flex flex-col gap-5">
            <InputText v-model="title" placeholder="제목을 입력해주세요." title="제목" />
            <Textarea
                title="콘텐츠"
                v-model="content"
                rows="5"
                cols="30"
                style="resize: none"
                placeholder="무슨 일이 있었나요?"
                fluid
            />
            <Select v-model="tag" :options="tags" placeholder="태그 선택" class="w-40" />

            <div class="flex justify-end gap-2">
                <Button
                    type="button"
                    label="이미지 추가"
                    severity="secondary"
                    @click="visible = false"
                ></Button>
                <Button type="button" label="저장" @click="visible = false"></Button>
            </div>
        </div>
    </Dialog>
</template>
