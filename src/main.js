import { createApp } from "vue"
import App from "./App.vue"
import components from "@/components"
import datas from "@/assets/datas"
import "@/styles/index.scss"
import { router } from "@/router"
import popup from "@/popups"
import p5Canvas from "@/services/canvas"

const Vue = createApp(App)

Vue.provide("datas", datas)
Vue.provide("p5Canvas", p5Canvas)

Object.keys(components).forEach((key) => {
	Vue.component(key, components[key])
})

Vue.use(router)
Vue.use(popup)
Vue.mount("#app")
