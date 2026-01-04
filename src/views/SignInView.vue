<script setup>
    import { useUserStore } from '@/store/user';
    import { Form, FormField } from '@primevue/forms';
    import axios from 'axios';
    import { Button, InputText, Message, Password } from 'primevue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const userStore = useUserStore();
    const { login } = userStore;

    const signin = async (event) => {
        try {
            const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/login', {
                email: event.values.email,
                password: event.values.password,
            });

            const user = await axios.get(import.meta.env.VITE_API_BASE_URL + '/token/view', {
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`,
                },
            });

            const auth_token = {
                access_token: response.data.access_token,
                member_id: user.data.member_id,
                name: user.data.name,
                nickname: user.data.nickname,
            };

            login(JSON.stringify(auth_token));

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold">로그인</h2>
        </div>

        <Form @submit="signin" ref="form" class="flex flex-col items-stretch gap-4">
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
                    title="password"
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
