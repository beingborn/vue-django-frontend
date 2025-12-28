import NotFoundView from '@/views/NotFoundView.vue';
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
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignInView,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: ProfileView,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/post/:id',
            name: 'post-detail',
            component: PostDetailView,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found-fage',
            component: NotFoundView,
            meta: {
                requiresAuth: false,
            },
        },
    ],
});

router.beforeEach((to, from) => {
    const isAuthenticated = !!localStorage.getItem('auth_token');

    if (to.meta.requiresAuth && !isAuthenticated) {
        alert('로그인을 해주세요!');

        return {
            path: '/signin',
            query: { redirect: to.fullPath },
        };
    }
});

export default router;
