import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
    const router = useRouter();

    function logout() {
        localStorage.removeItem('access_token');

        const isRemoved = !!!localStorage.getItem('access_token');

        if (!isRemoved) return;

        alert('로그아웃되었습니다.');
        router.push('signin');
    }

    return { logout };
});
