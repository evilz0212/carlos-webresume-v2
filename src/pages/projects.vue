<template lang='pug'>
goTop(dom=".demoCard")
section
	.demoCard
		.project 
			h2 Project
			.block
				.card(v-for="project in projects", @click="popCard(project)")
					img(:alt="project.name", :src="`${projectName}${project.picture}`")
					p {{ project.name }}
		.Exercise 
			h2 Exercise
			.block
				.card(v-for="exercise in exercises", @click="popCard(exercise)")
					img(:alt="exercise.name", :src="`${projectName}${exercise.picture}`")
					p {{ exercise.name }}
</template>

<script setup>
import { onMounted, inject } from "vue";
import * as p5 from "@/services/canvas";
const { projects, exercises } = inject("datas");
const popup = inject("popup");
const projectName = import.meta.env.VITE_PROJECT_NAME;

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

	p5.loadSettings("background", emptyCardPosition);
	p5.draw();
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

	// 隱藏 Scrollbar
	scrollbar-width: none; /* For Firefox */
	-ms-overflow-style: none; /* For Internet Explorer and Edge */
	&::-webkit-scrollbar {
		width: 0px; /* For Chrome, Safari, and Opera */
	}
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
.block {
	@include flex(sb, fs);
	flex-flow: wrap;
	padding: 60px;
}
.card {
	position: relative;
	margin-bottom: 60px;
	width: 45%;
	padding-top: 22.5%;

	border-radius: 20px;
	background-color: color(neutral_00);
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
	overflow: hidden;

	cursor: pointer;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;

		border-radius: 20px;
		mix-blend-mode: darken;
		background: linear-gradient(
			0deg,
			color(neutral_50, 0.6),
			color(neutral_00, 0) 60%
		);

		transition: all 0.4s ease-in-out;
		opacity: 0;
	}
	&:hover::after {
		opacity: 1;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	p {
		position: absolute;
		bottom: 8%;
		left: 6%;

		font-size: 24px;
		font-weight: 700;
		color: color(neutral_00);
		text-shadow: 0px 0px 8px color(neutral_50, 0.6);

		z-index: 1;
	}
}
</style>