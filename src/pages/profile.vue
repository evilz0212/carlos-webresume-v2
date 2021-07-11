<template lang='pug'>
#vue-canvas
.canvas-container
	#vue-canvas-glass
section
	.profile
		//- // TODO: 資源更新 - 個人照片
		p {{ profile.picture }}
		p {{ profile.profession }}
		p {{ profile.name }}
		p {{ profile.description }}
		p btn {{ profile.link_CV }}
		p btn {{ profile.link_GitHub }}
	.detail.infoCard
		.btns
			a(href="#infomation") -Infomation
			a(href="#experience") -Experience
			a(href="#skills") -Skills
		.infoSection
			InfomationBlock
			ExperienceBlock
			SkillsBlock
</template>

<script setup>
import { inject, onMounted } from "vue";
const { profile } = inject("datas");
const p5Canvas = inject("p5Canvas");

onMounted(() => {
	// 取得玻璃霧化區塊
	let emptyCardDom = document.querySelector(".infoCard");
	let emptyCardPosition = {
		x: emptyCardDom.offsetLeft,
		y: emptyCardDom.offsetTop,
		w: emptyCardDom.offsetWidth,
		h: emptyCardDom.offsetHeight,
	};

	p5Canvas("background", emptyCardPosition);
});
</script>

<style lang='scss' scoped>
section {
	@include flex(fs, st, col);
	max-height: 100vh - pos(header_hight);
}
.profile {
	height: 300px;
}
.detail {
	@include flex(fs, st);
	overflow: auto;
}
.btns {
	@include flex(fs, fs, col);
	width: 100px;
}
.infoSection {
	@include flex(fs, st, col);
	overflow: hidden scroll;
	flex: 1;
}
#infomation,
#experience,
#skills {
	margin: 10px;
	background-color: rgba(107, 85, 85, 0.199);
}
</style>