import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
    const router = useRouter();

    function getAuthToken() {
        return JSON.parse(localStorage.getItem('auth_token'));
    }

    function logout() {
        localStorage.removeItem('auth_token');

        const isAccessTokenRemoved = !!!localStorage.getItem('auth_token');

        if (!isAccessTokenRemoved) return;

        alert('로그아웃되었습니다.');
        router.push('signin');
    }

    return { logout, getAuthToken };
});
