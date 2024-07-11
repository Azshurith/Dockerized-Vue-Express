import { createSSRApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

export const createApp = () => {
    // const router = createRouter({
    //     history: createWebHistory(),
    //     routes: [
    //         { path: '/', component: Home },
    //     ],
    // })

    const app = createSSRApp(Home);

    // app.use(router);

    return {
        app
    };
};
