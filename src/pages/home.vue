<template lang="pug">
SideBar

.emptyCard
	img(alt="Logo", src="@/assets/icons/Logo.svg")
	p.slogan {{ profile.slogan }}
	p.name {{ profile.name }}

	.btns
		router-link(:to="{ name: 'profile' }", custom, v-slot="{ navigate }")
			button(role="link", @click="navigate") About Me

		router-link(:to="{ name: 'projects' }", custom, v-slot="{ navigate }")
			button(role="link", @click="navigate") Projects
</template>

<script setup>
import { inject, onMounted } from "vue";
import * as p5 from "@/services/canvas";
const { profile } = inject("datas");

onMounted(() => {
	// 取得玻璃霧化區塊
	let emptyCardDom = document.querySelector(".emptyCard");
	let emptyCardPosition = {
		x: emptyCardDom.offsetLeft,
		y: emptyCardDom.offsetTop,
		w: emptyCardDom.offsetWidth,
		h: emptyCardDom.offsetHeight,
	};

	p5.loadSettings("main", emptyCardPosition);
	p5.draw();
});
</script>

<style lang="scss" scoped>
.emptyCard {
	position: fixed;
	top: pos(sidebar_margin_top);
	left: 100vw * 0.618 * 0.5 * 0.5;
	@include size(521px, pos(emptyCard_hight));

	@include flex(fs, c, col);
	padding: 60px 30px;
	@include blur();
}

img {
	@include size(200px);
	margin: 20px;
}
.slogan {
	font-size: 36px;
	font-weight: 400;
	background-color: color(linear_01_01);
	color: transparent;
	text-shadow: 2px 2px 3px color(neutral_00, 0.6);
	background-clip: text;

	margin-top: 1em;
}
.name {
	font-size: 64px;
	font-weight: 600;
	background-color: color(neutral_30);
	color: transparent;
	text-shadow: 2px 2px 3px color(neutral_00, 0.8);
	background-clip: text;

	// margin-top: 1em;
}
.btns {
	@include flex(sa, fe);
	width: 100%;
	flex: 1;
	button {
		padding: 16px 30px;
		width: 40%;

		background: linear-gradient(
			65deg,
			color(linear_03_01),
			color(linear_03_02)
		);
		border: 0px;
		border-radius: 4px;
		filter: brightness(1.06);
		color: color(neutral_50);

		&:hover {
			filter: brightness(1.1);
		}
	}
}
</style>
