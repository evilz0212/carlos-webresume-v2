<template lang='pug'>
#vue-canvas
.canvas-container
	#vue-canvas-glass
section.demoCard
	.project Project
		.card(v-for="project in projects", @click="popCard(project)")
			p {{ project.picture }}
			p {{ project.name }}
			hr
	.Exercise Exercise
		.card(v-for="exercise in exercises", @click="popCard(exercise)")
			p {{ exercise.picture }}
			p {{ exercise.name }}
			hr
</template>

<script setup>
import { onMounted, inject } from "vue";
const { projects, exercises } = inject("datas");
const popup = inject("popup");
const p5Canvas = inject("p5Canvas");

const popCard = (data) => {
	popup("popCard", {
		data: data,
	});
};

onMounted(() => {
	// 取得玻璃霧化區塊
	let emptyCardDom = document.querySelector(".demoCard");
	let emptyCardPosition = {
		x: emptyCardDom.offsetLeft,
		y: emptyCardDom.offsetTop,
		w: emptyCardDom.offsetWidth,
		h: emptyCardDom.offsetHeight,
	};

	p5Canvas("background", emptyCardPosition);
});
</script>

<style lang="scss" scoped>
.demoCard {
	@include blur();
}
</style>