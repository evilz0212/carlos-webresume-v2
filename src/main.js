import { createApp } from 'vue'
import App from './App.vue'
// import components from "@/components"
import "@/styles/index.scss"
// import { router } from "@/router"
// import popup from "@/popups"

const Vue = createApp(App);

// Object.keys(components).forEach((key) => {
//     Vue.component(key, components[key])
// });

// Vue.use(popup)
// Vue.use(router)
Vue.mount('#app')