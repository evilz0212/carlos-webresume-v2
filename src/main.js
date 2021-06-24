import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components"
import datas from "@/datas"
import "@/styles/index.scss"
import { router } from "@/router"
import popup from "@/popups"

const Vue = createApp(App);

Vue.provide("datas", datas)

Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
});

Vue.use(router)
Vue.use(popup)
Vue.mount('#app')