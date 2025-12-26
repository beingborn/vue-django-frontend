<script setup>
    import { filterDateByYyyyMmDd } from '@/lib/time';
    import { Form, FormField } from '@primevue/forms';
    import axios from 'axios';
    import { Button, InputText, Message, Password, RadioButton, RadioButtonGroup } from 'primevue';
    import DatePicker from 'primevue/datepicker';

    const signup = async (event) => {
        const date = filterDateByYyyyMmDd(event.values.birth);

        try {
            const response = await axios.post(import.meta.env.VITE_API_BASE_URL + '/signup', {
                name: event.values.username,
                nickname: event.values.nickname,
                gender: event.values.gender,
                address: event.values.address + event.values.addressDetail,
                email: event.values.email,
                password: event.values.password,
                birth: date,
            });

            console.log('response:', response.data);
        } catch (err) {
            console.log('error:', err);
        }
    };

    const signup2 = (event) => {
        const date = filterDateByYyyyMmDd(event.values.birth);
        console.log(date);

        axios
            .post(import.meta.env.VITE_API_BASE_URL + '/signup', {
                name: event.values.username,
                nickname: event.values.nickname,
                gender: event.values.gender,
                address: event.values.address + event.values.addressDetail,
                email: event.values.email,
                password: event.values.password,
                birth: date,
            })
            .then((response) => {
                console.log(response);
            });
    };
</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold">회원가입</h2>
            <p><span class="text-red-500">*</span>는 필수 입력 항목입니다.</p>
        </div>

        <Form @submit="signup" ref="form" class="flex flex-col items-stretch gap-4">
            <!-- UserName -->
            <FormField
                initialValue="이민혁"
                name="username"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="user-name-input" class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    유저명
                </label>
                <InputText id="user-name-input" type="text" placeholder="홍길동" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>

            <!-- NickName -->
            <FormField
                initialValue="불타버린"
                name="nickname"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="nickname-input" class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    닉네임
                </label>
                <InputText id="nickname-input" type="text" placeholder="불타버린 소보루빵" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>

            <!-- Gender -->
            <FormField
                initialValue="MALE"
                name="gender"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <p class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    성별
                </p>
                <RadioButtonGroup class="flex gap-4">
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="male" value="MALE" />
                        <label for="male">남성</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="female" value="FEMAIL" />
                        <label for="female">여성</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioButton inputId="null" value="null" />
                        <label for="null">선택안함</label>
                    </div>
                </RadioButtonGroup>
            </FormField>

            <!-- Address -->
            <FormField
                initialValue="서울특별시 은평구"
                name="address"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="address-input" class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    주소
                </label>
                <InputText id="address-input" type="text" placeholder="서울특별시 강남구" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>

            <!-- Address Detail -->
            <FormField
                initialValue="통일로 767"
                name="addressDetail"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="address-detail-input" class="text-md font-medium">상세 주소</label>
                <InputText id="address-detail-input" type="text" placeholder="상세 주소" />
            </FormField>

            <!-- Email -->
            <FormField
                initialValue="aa@naver.com"
                name="email"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="email-input" class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    이메일
                </label>
                <InputText id="email-input" type="email" placeholder="devlog@email.com" />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>

            <!-- Password -->
            <FormField
                initialValue="minhuk0303"
                name="password"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="password-input" class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    비밀번호
                </label>
                <Password
                    inputId="password-input"
                    type="text"
                    placeholder="영문, 숫자를 포함해 8~12자리"
                    :feedback="false"
                    toggleMask
                    fluid
                />
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>

            <!-- Birth -->
            <FormField
                initialValue="
"
                name="birth"
                v-slot="$field"
                class="flex flex-col gap-2"
            >
                <label for="birth-input" class="text-md font-medium">
                    <span class="text-red-500">*</span>
                    생년월일
                </label>
                <div class="w-50">
                    <DatePicker
                        placeholder="Date"
                        inputId="birth-input"
                        showIcon
                        iconDisplay="input"
                        fluid
                    />
                </div>
                <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                    {{ $field.error?.message }}
                </Message>
            </FormField>
            <Button type="submit" severity="primary" label="회원가입" />
        </Form>

        <a href="/signin" class="text-muted-foreground hover:underline mt-4"
            >이미 계정이 있다면? 로그인</a
        >
    </div>
</template>
