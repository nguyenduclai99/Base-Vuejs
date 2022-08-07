import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import Login from './pages/Login.vue'
import Declare from './pages/Declare.vue'
import ViewVehicleFlow from './pages/ViewVehicleFlow.vue'
import ListVehicleFlow from './pages/ListVehicleFlow.vue'
import DownloadPdf from './pages/DownloadPdf'
import Driver from './pages/Driver'

import LayoutDefault from './layouts/LayoutDefault.vue'
import LayoutUser from './layouts/LayoutUser.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
            meta: { 
                layout: LayoutDefault  
            }
        },
        {
            path: '/khai-bao',
            name: 'Declare',
            component: Declare,
            meta: { 
                layout: LayoutUser  
            }
        },
        {
            path: '/tai-xe',
            name: 'Driver',
            component: Driver,
            meta: { 
                layout: LayoutUser  
            }
        },
        {
            path: '/to-khai/:id',
            name: 'ViewVehicleFlow',
            component: ViewVehicleFlow,
            meta: { 
                layout: LayoutDefault  
            }
        },
        {
            path: '/tai-ve-to-khai/:id',
            name: 'DownloadPdf',
            component: DownloadPdf,
            meta: { 
                layout: LayoutDefault  
            }
        },
        {
            path: '/danh-sach-to-khai',
            name: 'ListVehicleFlow',
            component: ListVehicleFlow,
            meta: { 
                layout: LayoutUser  
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.name == 'ViewVehicleFlow' || to.name == 'DownloadPdf' || to.name == 'DownloadPdf2') {
        next()
        return
    } else if(to.name == 'Login') {
        if (store.getters.isAuthenticated) {
            next({name: 'Declare'})
            return 
        } else {
            next()
            return
        }
    } else {
        if (store.getters.isAuthenticated) {
            next()
            return 
        } else {
            next({name: 'Login'})
            return
        }
    }
    // console.log(to.name, from, next)
    // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    // else next()
})

export default router;