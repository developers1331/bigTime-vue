
import {
    createRouter,
    createWebHashHistory,
    Router,
    type RouteRecordRaw,
} from 'vue-router';
import HomePage from 'components/pages/HomePage.vue';
import ProfilePage from 'components/pages/ProfilePage.vue';

const routes: RouteRecordRaw[] = [
    {path: '/home', component: HomePage, alias: '/'},
    {path: '/profile', component: ProfilePage},
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
