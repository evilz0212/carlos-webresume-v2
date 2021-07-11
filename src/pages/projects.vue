<template lang='pug'>
#vue-canvas
.canvas-container
	#vue-canvas-glass
section
	.demoCard
		.project 
			h2 Project
			//- .card(v-for="project in projects", @click="popCard(project)")
			//- 	p {{ project.picture }}
			//- 	p {{ project.name }}
			//- 	hr
		.Exercise 
			h2 Exercise
			//- .card(v-for="exercise in exercises", @click="popCard(exercise)")
			//- 	p {{ exercise.picture }}
			//- 	p {{ exercise.name }}
			//- 	hr
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
#vue-canvas-glass {
	filter: blur(20px);
}
section {
	padding-top: 40px;
}
.demoCard {
	@include blur("projects");
	height: 90vh - pos(header_hight);

	margin: 0px 10vw;
	padding: 40px;
	overflow: hidden scroll;
}

h2 {
	color: color(gold_60, 0.9);
	position: relative;
	line-height: 2;
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 100%;
		background: linear-gradient(
			70deg,
			color(linear_01_01),
			color(linear_01_02)
		);
	}
}
</style>