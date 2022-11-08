import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'under-construction',
            component: () => import('../views/default/UnderConstruction.vue') 
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue') 
        },
        {
            path: '/fullService',
            name: 'fullService',
            component: () => import('../views/FullService.vue') 
        },
        {
            path: '/verkauf',
            name: 'verkauf',
            component: () => import('../views/Verkauf.vue') 
        },
        {
            path: '/vermietung',
            name: 'vermietung',
            component: () => import('../views/Vermietung.vue') 
        },
        {
            path: '/smartHome',
            name: 'smartHome',
            component: () => import('../views/SmartHome.vue') 
        },
        {
            path: '/streaming',
            name: 'streaming',
            component: () => import('../views/Streaming.vue') 
        },
        {
            path: '/kontakt',
            name: 'kontakt',
            component: () => import('../views/Kontakt.vue') 
        },
        {
            path: '/impressum',
            name: 'impressum',
            component: () => import('../views/Impressum.vue') 
        },
        {
            path: '/cookieRichtline',
            name: 'cookieRichtline',
            component: () => import('../views/CookieRichtline.vue') 
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('../views/404.vue') 
        }
        
    ]
})

export default router