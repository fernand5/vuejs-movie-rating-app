import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/', name: 'home', component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/:id', name: 'movie.detail', component: () => import('@/pages/MovieDetailPage.vue'),
        props: route => ({ id: parseInt(route.params.id) })
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;