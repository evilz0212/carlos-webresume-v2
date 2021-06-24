<template lang="pug">
img(alt="Vue logo", src="@/assets/icons/logo.png")
HelloWorld(msg="Hello Vue 3 + Vite")
p {{ temp.name }}
</template>

<script setup>
import { defineProps, reactive, inject } from "vue";
const { temp } = inject("datas");
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	position: relative;
}
</style>
