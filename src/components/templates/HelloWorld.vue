<template lang="pug">
h1 {{ msg }}

p #[a(href="https://vitejs.dev/guide/features.html", target="_blank") Vite Documentation] | #[a(href="https://v3.vuejs.org/", target="_blank") Vue 3 Documentation]

button(type="button", @click="state.count++") count is: {{ state.count }}
p Edit #[code components/HelloWorld.vue] to test hot module replacement.

button(type="button", @click="popAlert()") popAlert
</template>

<script setup>
import { defineProps, reactive, inject } from "vue";
const popup = inject("popup");

defineProps({
	msg: String,
});

const state = reactive({ count: 0 });

const popAlert = () => {
	popup("popMsg", {
		msg: "popup",
	});
};
</script>

<style lang="scss" scoped>
a {
	color: #42b983;
}
</style>
