import { createRouter, createWebHistory } from "vue-router"

import home from "@/pages/home.vue"

export const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_PROJECT_NAME),
    routes: [
        {
            path: "/",
            component: () => import('@/pages/home.vue'),
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     const store = useStore()
//     const auth = store.state.auth
//     // 登入判斷
//     if (to.meta.onLogin) {
//         if (auth && auth.isLogin) {
//             // 權限判斷
//             if (to.meta.roles && to.meta.roles.indexOf(auth.role) === -1) {
//                 // alert('403)
//             } else {
//                 next()
//             }
//         } else {
//             next({ path: "/login" })
//         }
//     } else {
//         next()
//     }
// })