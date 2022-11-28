import { createRouter, createWebHistory } from "vue-router";
import Default from "../views/Default/UnderConstructionIndexView.vue"
import HomeView from "../views/Home/HomeIndexView.vue";
import FullService from "../views/FullService/FullServiceIndexView.vue";
import Sale from "../views/Sale/SaleIndexView.vue";
import Rental from "../views/Rental/RentalIndexView.vue";
import SmartHome from "../views/SmartHome/SmartHomeIndexView.vue";
import Streaming from "../views/Streaming/StreamingIndexView.vue";
import Contact from "../views/Contact/ContactIndexView.vue";
import Imprint from "../views/Imprint/ImprintIndexView.vue";
import CookiePolicy from "../views/CookiePolicy/CookiePolicyIndexView.vue";
import Error from "../views/Error/ErrorIndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'under-construction',
            component: Default
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/fullService',
            name: 'fullService',
            component: FullService
        },
        {
            path: '/sale',
            name: 'sale',
            component: Sale
        },
        {
            path: '/rental',
            name: 'rental',
            component: Rental
        },
        {
            path: '/smartHome',
            name: 'smartHome',
            component: SmartHome
        },
        {
            path: '/streaming',
            name: 'streaming',
            component: Streaming
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/imprint',
            name: 'imprint',
            component: Imprint
        },
        {
            path: '/cookiePolicy',
            name: 'cookiePolicy',
            component: CookiePolicy
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: Error
        }

    ],
    //Scroll to the top
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router