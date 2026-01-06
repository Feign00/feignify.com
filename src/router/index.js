import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Logs from '../pages/Logs.vue'
import Profile from '../pages/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/map',
        name: 'map',
        component: () => import('../pages/Map.vue')
    },
    {
        path: '/region/:id',
        name: 'region',
        component: () => import('../pages/Region.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import('../pages/Gallery.vue')
    },
    {
        path: '/logs',
        name: 'logs',
        component: Logs
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
