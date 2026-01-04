import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
    const authToken = ref(JSON.parse(localStorage.getItem('auth_token')));

    const router = useRouter();

    function setTestUserLogin() {
        localStorage.setItem('auth_token', 45);

        router.push('/');
    }

    function getAuthToken() {
        return JSON.parse(localStorage.getItem('auth_token'));
    }

    function login(auth_token) {
        localStorage.setItem('auth_token', auth_token);
        authToken.value = JSON.parse(localStorage.getItem('auth_token'));
    }

    function logout() {
        localStorage.removeItem('auth_token');

        const isAccessTokenRemoved = !!!localStorage.getItem('auth_token');

        if (!isAccessTokenRemoved) return;

        authToken.value = null;
        alert('로그아웃되었습니다.');
        router.push('signin');
    }

    return { authToken, login, logout, getAuthToken, setTestUserLogin };
});
