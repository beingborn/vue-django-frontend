<template>
    <div class="relative">
        <input
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :class="[
                'w-full block appearance-none h-8 rounded-md border py-4 px-3 placeholder-bd-pri',
                'focus:outline-blue transition duration-150 ease-in-out',
            ]"
            v-bind="$attrs"
        />
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        modelValue: [String, Number],

        type: {
            type: String,
            default: 'text',
        },

        placeholder: String,

        disabled: {
            type: Boolean,
            default: false,
        },
    });
</script>
