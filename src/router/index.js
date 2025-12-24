import PostDetailView from '@/views/PostDetailView.vue';
import ProfileView from '@/views/ProfileView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexView,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView,
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignInView,
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: ProfileView,
        },
        {
            path: '/post/:id',
            name: 'post-detail',
            component: PostDetailView,
        },
    ],
});

router.beforeEach(async (to, from) => {
    const isAuthenticated = localStorage.getItem('access_token') || '';

    if (!isAuthenticated && to.name !== 'signin') {
        console.log('로그인 페이지도 아니고 로그인도 안되어있음');
        return { name: 'signin' };
    }
});

export default router;
