import { createRouter, createWebHistory } from "vue-router"

import ContentPage from "@/components/templates/ContentPage.vue"

export const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_PROJECT_NAME),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("@/pages/home.vue"),
		},
		{
			path: "/profile",
			component: ContentPage,
			children: [
				{
					path: "",
					name: "profile",
					component: () => import("@/pages/profile.vue"),
				},
			],
		},
		{
			path: "/projects",
			component: ContentPage,
			children: [
				{
					path: "",
					name: "projects",
					component: () => import("@/pages/projects.vue"),
				},
			],
		},
		{
			// 錯誤路徑
			path: "/:pathMatch(.*)*",
			name: "not-found",
			redirect: "/",
		},
	],
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
