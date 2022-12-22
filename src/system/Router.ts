
import {
    createRouter,
    createWebHashHistory,
    Router,
    type RouteRecordRaw,
} from 'vue-router';
import HomePage from 'components/pages/HomePage.vue';
import ProfilePage from 'components/pages/ProfilePage.vue';
import StatisticsUserPage from 'components/pages/StatisticsUserPage.vue';

const routes: RouteRecordRaw[] = [
    {path: '/home', component: HomePage, alias: '/'},
    {path: '/profile', component: ProfilePage},
    {path: '/statistics-users', component: StatisticsUserPage},
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
