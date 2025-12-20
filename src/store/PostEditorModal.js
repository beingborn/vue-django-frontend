import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostEditorModalStore = defineStore('PostEditorModal', () => {
    const initialState = { isOpen: false };
    const state = ref({ ...initialState });

    function openCreate() {
        state.value = {
            isOpen: true,
            type: 'CREATE',
        };
    }

    function close() {
        state.value = { ...initialState };
    }

    return { state, openCreate, close };
});
