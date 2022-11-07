import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        /*{
            path: '/',
            name: 'Home',
            component: UnderConstruction
        },*/
        {
            path: '/',
            name: 'under-construction',
            component: () => import('../views/default/UnderConstruction.vue') 
        }
    ]
})

export default router