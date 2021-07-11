<template lang="pug">
#vue-canvas
.canvas-container
	#vue-canvas-glass
SideBar

.emptyCard
	//- // TODO: 資源更新 - Logo
	img(alt="Vue logo", src="@/assets/icons/logo.png")
	p {{ profile.name }}
	p {{ profile.slogan }}

	router-link(:to="{ name: 'profile' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Profile Page

	router-link(:to="{ name: 'projects' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Projects Page
</template>

<script setup>
import { inject, onMounted } from "vue";
const { profile } = inject("datas");

const p5Canvas = inject("p5Canvas");

onMounted(() => {
	p5Canvas("main");
});
</script>

<style lang="scss">
#vue-canvas,
#vue-canvas-glass {
	position: fixed;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0;
	overflow: hidden;
	z-index: -1;
}
.canvas-container {
	position: fixed;
	top: pos(sidebar_margin_top);
	left: 100vw * 0.618 * 0.5 * 0.5;
	@include size(521px, pos(emptyCard_hight));

	overflow: hidden;
}
#vue-canvas-glass {
	position: relative;
	filter: blur(6px);
}
.emptyCard {
	position: fixed;
	top: pos(sidebar_margin_top);
	left: 100vw * 0.618 * 0.5 * 0.5;
	@include size(521px, pos(emptyCard_hight));

	@include flex(c, c, col);
	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 10px;
}
</style>
