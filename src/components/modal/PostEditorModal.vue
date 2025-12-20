<script setup>
    import { usePostEditorModalStore } from '@/store/PostEditorModal';
    import { CdChromeClose } from '@kalimahapps/vue-icons';
    import { Button, Carousel, Dialog, InputText, Select, Textarea } from 'primevue';
    import { ref, useTemplateRef } from 'vue';

    const postEditorModal = usePostEditorModalStore();

    const title = ref('');
    const content = ref('');
    const selectedtag = ref('');
    const images = ref([]);
    const fileInput = useTemplateRef('file-input');
    const tags = ref(['태그 선택', '태그1', '태그2', '태그3', '태그4', '태그5']);

    const handleSelectImages = (e) => {
        // 파일 유무 확인
        if (e.target.files) {
            const files = Array.from(e.target.files);

            files.forEach((file) => {
                images.value.push({
                    file,
                    previewUrl: URL.createObjectURL(file),
                });
            });
        }

        e.target.value = '';
    };

    const handleDeleteImage = (image) => {
        images.value = images.value.filter(
            (prevImage) => prevImage.previewUrl !== image.previewUrl
        );

        URL.revokeObjectURL(image.previewUrl);
    };

    const handleFileInputClick = () => {
        if (fileInput.value) {
            fileInput.value.click();
        } else {
            console.log('입력창을 찾을 수 없습니다.');
        }
    };
</script>
<template>
    <Dialog
        v-model:visible="postEditorModal.state.isOpen"
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
            <Select v-model="selectedtag" :options="tags" placeholder="태그 선택" class="w-40" />
            <Carousel
                v-if="images.length > 0"
                :value="images"
                :numVisible="3"
                :numScroll="1"
                :responsiveOptions="responsiveOptions"
            >
                <template #item="slotProps">
                    <div
                        class="h-40 border border-bd-sec p-2 relative"
                        :class="{
                            'w-1/3': slotProps.data.length === 1,
                            'w-1/2': slotProps.data.length === 2,
                        }"
                    >
                        <img
                            :src="slotProps.data.previewUrl"
                            :alt="slotProps.data.file.name"
                            class="w-full h-full object-contain rounded-md"
                        />
                        <button
                            @click="() => handleDeleteImage(slotProps.data)"
                            type="button"
                            class="absolute right-2 top-2 cursor-pointer"
                        >
                            <CdChromeClose class="text-xl" />
                        </button>
                    </div>
                </template>
            </Carousel>

            <div class="flex justify-end gap-2">
                <input
                    @change="handleSelectImages"
                    ref="file-input"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                />
                <Button
                    type="button"
                    label="이미지 추가"
                    severity="secondary"
                    @click="handleFileInputClick"
                ></Button>
                <Button type="button" label="저장" @click="postEditorModal.close"></Button>
            </div>
        </div>
    </Dialog>
</template>
