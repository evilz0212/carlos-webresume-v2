// import { h, render } from "vue"
// import popList from "@/popups/popList.vue"

// let components = {
// 	popList,
// }

// // 傳入實例
// let Vue = null

// export function createPopup(componentName, options = {}) {
// 	let div = document.createElement("div")
// 	let vm = h(eval(componentName), options)

// 	// 同步上下文
// 	vm.appContext = Vue._context
// 	render(vm, div)

// 	// 預設方法
// 	vm.component.ctx.remove = () => {
// 		render(null, div)
// 		vm = null
// 	}
// 	vm.component.ctx.showLogText = () => {
// 		return "showLogText()"
// 	}

// 	return vm.component.proxy
// }

// export default {
// 	install(app) {
// 		Vue = app
// 		Object.keys(components).forEach((key) => {
// 			Vue.component(key, components[key])
// 		})
// 		Vue.provide("popup", createPopup)
// 	},
// }