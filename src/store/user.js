import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
    const router = useRouter();

    function getAccessToken() {
        return localStorage.getItem('access_token');
    }

    function logout() {
        localStorage.removeItem('access_token');

        const isAccessTokenRemoved = !!!localStorage.getItem('access_token');

        if (!isAccessTokenRemoved) return;

        alert('로그아웃되었습니다.');
        router.push('signin');
    }

    return { logout, getAccessToken };
});
