<script setup>
import { Form } from '@primevue/forms';
import { Button, InputText, Message } from 'primevue';
import { ref } from 'vue';

const initialValues = {
    email: "",
    password: "",
}

const onSubmit = (values) => {
    console.log("폼 제출", values)
};

const emailValue = ref('');
const passwordValue = ref('');

</script>

<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">회원가입</h2>
        <Form v-slot="$form" :initialValues="initialValues" @submit="onSubmit" class="flex flex-col items-stretch gap-2" >
            <div class="flex flex-col gap-1">            
                <InputText 
                    name="email"
                    type="email"                     
                    v-model="emailValue"
                    placeholder="Email"
                    fluid                 
                />
                <Message 
                    v-if="$form.email?.invalid" 
                    severity="error" 
                    size="small" 
                    variant="simple">
                    오류 발생
                </Message>
            </div>
            <div class="flex flex-col gap-1">            
                <InputText 
                    name="password"
                    type="password" 
                    v-model="passwordValue"
                    placeholder="Passwrod"
                    fluid                 
                />              
            </div>
            <Button type="submit" severity="primary" label="회원가입" />
        </Form>
        <a href="/sign-in" class="text-muted-foreground hover:underline">이미 계정이 있다면? 로그인</a>        
    </div>
</template>
