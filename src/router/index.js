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
    ],
});

export default router;
