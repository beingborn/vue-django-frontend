<script setup>
    import { usePostEditorModalStore } from '@/store/PostEditorModal';
    import { useUserStore } from '@/store/user';
    import { CdChromeClose } from '@kalimahapps/vue-icons';
    import axios from 'axios';
    import { storeToRefs } from 'pinia';
    import { Button, Carousel, Dialog, InputText, Select, Textarea } from 'primevue';
    import { onMounted, ref, useTemplateRef } from 'vue';

    const postEditorModal = usePostEditorModalStore();

    const title = ref('');
    const content = ref('');
    const selectedtag = ref();
    const images = ref([]);
    const fileInput = useTemplateRef('file-input');
    const tags = ref([]);

    const userStore = useUserStore();
    const { getAuthToken } = userStore;
    const { authToken } = storeToRefs(userStore);
    const user = getAuthToken();

    import { watch } from 'vue';

    watch(selectedtag, (val) => {
        console.log('선택된 태그:', val);
    });

    console.log(selectedtag.value);

    const getTags = async () => {
        try {
            const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/tag/views', {
                access_token: authToken.value.access_token,
            });

            tags.value = response.data;
        } catch (error) {
            console.log(error);
        }
    };

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

    const handleRegisterPost = async () => {
        const newPost = {
            title: title.value,
            body: content.value,
            tag_id: 2,
            access_token: user.access_token,
        };

        try {
            const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/post', newPost);

            console.log(response);
            alert('포스트 생성이 완료되었어요');
            postEditorModal.close();
        } catch (error) {
            console.log(error);
        }
    };

    onMounted(() => {
        getTags();
    });
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
            <div class="flex items-center gap-4">
                <Select
                    optionLabel="name"
                    v-model="selectedtag"
                    :options="tags"
                    placeholder="태그 선택"
                    class="w-40"
                />
                <div
                    :class="`w-8 h-8 rounded-md border border-gray-700`"
                    :style="{ backgroundColor: selectedtag?.color }"
                ></div>
            </div>
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
                <Button type="button" label="저장" @click="handleRegisterPost"></Button>
            </div>
        </div>
    </Dialog>
</template>
