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
	// 取得玻璃霧化區塊
	let emptyCardDom = document.querySelector(".emptyCard");
	let emptyCardPosition = {
		x: emptyCardDom.offsetLeft,
		y: emptyCardDom.offsetTop,
		w: emptyCardDom.offsetWidth,
		h: emptyCardDom.offsetHeight,
	};

	p5Canvas("main", emptyCardPosition);
});
</script>

<style lang="scss" scoped>
.emptyCard {
	position: fixed;
	top: pos(sidebar_margin_top);
	left: 100vw * 0.618 * 0.5 * 0.5;
	@include size(521px, pos(emptyCard_hight));

	@include flex(c, c, col);
	@include blur();
}
</style>
