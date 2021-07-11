import { h, render } from "vue"
import popCard from "@/popups/popCard.vue"

let components = {
	popCard,
}

// 傳入實例
let Vue = null

export function createPopup(componentName, options = {}) {
	let div = document.createElement("div")
	let vm = h(components[componentName], options)

	// 同步上下文
	vm.appContext = Vue._context
	render(vm, div)

	// 背景模糊
	document.getElementById("app").style.filter = "blur(10px)"

	// 預設方法
	vm.component.ctx.remove = () => {
		render(null, div)
		vm = null

		// 移除背景模糊
		document.getElementById("app").style.filter = ""
	}
	vm.component.ctx.showLogText = () => {
		return "showLogText()"
	}

	return vm.component.proxy
}

export default {
	install(app) {
		Vue = app
		Object.keys(components).forEach((key) => {
			Vue.component(key, components[key])
		})
		Vue.provide("popup", createPopup)
	},
}
