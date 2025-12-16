<script setup>
    import { Form, FormField } from '@primevue/forms';
    import { Button, InputText, Message, Password } from 'primevue';
    import { ref } from 'vue';

    const form = ref('form');

    const onSubmit = (values) => {
        // 성공시
        if (values) {
            form.value.setFieldValue('email', '');
            form.value.setFieldValue('password', '');
        }
    };
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold">로그인</h2>
            <p><span class="text-red-500">*</span>는 필수 입력 항목입니다.</p>
        </div>

        <Form @submit="onSubmit" ref="form" class="flex flex-col items-stretch gap-4">
            <!-- Email -->
            <FormField
                title="email"
                initialValue=""
                name="email"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <InputText id="email-input" type="email" placeholder="devlog@email.com" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>

            <!-- Password -->
            <FormField initialValue="" name="password" v-slot="$field" class="flex flex-col gap-2">
                <Password
                    title="email"
                    inputId="password-input"
                    type="text"
                    placeholder="Password"
                    :feedback="false"
                    toggleMask
                    fluid
                />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>
            <Button type="submit" severity="primary" label="로그인" />
        </Form>

        <a href="/signup" class="text-muted-foreground hover:underline mt-4"
            >계정이 없으신가요? 회원가입</a
        >
    </div>
</template>
