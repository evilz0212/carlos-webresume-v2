// import { createRouter, createWebHistory } from "vue-router"
// import { useStore } from "@/store"

// import home from "@/pages/home.vue"
// import login from "@/pages/login.vue"
// import register from "@/pages/register.vue"

// export const router = createRouter({
//     history: createWebHistory(import.meta.env.VITE_PROJECT_NAME),
//     routes: [
//         {
//             path: "/",
//             component: () => import('@/pages/home.vue'),
//             meta: {
//                 onLogin: true,
//             },
//         },
//         // {
//         //     path: "/home",
//         //     component: home,
//         //     meta: {
//         //         onLogin: true,
//         //         roles: ["admin"],
//         //     },
//         //     children: [
//         //         {
//         //             path: "support",
//         //             component: import('@/pages/support.vue'),
//         //         },
//         //     ],
//         // },
//         {
//             path: "/login",
//             name: "login",
//             component: () => import('@/pages/login.vue'),
//         },
//         {
//             path: "/register",
//             component: () => import('@/pages/register.vue'),
//         },
// 				// 個人資訊
// 				{
// 					path: "/member",
// 					name: "member",
// 					meta: {
// 						onLogin: true,
// 						roles: ["經紀人主管", "經紀人", "網紅"],
// 					},
// 					component: platform,
// 					children: [
// 						{
// 							path: "",
// 							name: "member",
// 							component: () => import("@/pages/member.vue"),
// 						},
// 						{
// 							// 訂購方案
// 							path: "/payment",
// 							name: "payment",
// 							component: () => import("@/pages/payment.vue"),
// 						},
// 					],
// 				},
//         {
//             // 錯誤路徑
//             path: "/:pathMatch(.*)*",
//             name: "not-found",
//             redirect: "/",
//         },
//     ],
// })

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