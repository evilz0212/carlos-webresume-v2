<template lang='pug'>
section
	.profile
		//- // TODO: 資源更新 - 個人照片
		img(alt="Logo", src="@/assets/icons/Logo.svg")
		//-  {{ profile.picture }}
		.content
			.profession {{ profile.profession }}
			.name {{ profile.name }}
			.description
				span &lt#[span.t code]>
				.text {{ profile.description }}
				span &lt/#[span.t code]>
			.btns
				button Download CV
				//- {{ profile.link_CV }}
				button to GitHub
				//- {{ profile.link_GitHub }}
	.detail
		.btns
			a.infomation.onScroll(href="#infomation") - Infomation
			a.experience(href="#experience") - Experience
			a.skills(href="#skills") - Skills
		.infoSection.infoCard
			InfomationBlock
			ExperienceBlock
			SkillsBlock
</template>

<script setup>
import { inject, onMounted, watch, ref } from "vue";
import * as p5 from "@/services/canvas";
const { profile } = inject("datas");

const scrollBlock = ref("infomation");
const scrollChange = () => {
	btnDom = {
		infomation: document.querySelector(".infomation"),
		experience: document.querySelector(".experience"),
		skills: document.querySelector(".skills"),
	};

	let scroll_infomation = document.getElementById("infomation").offsetTop;
	let scroll_experience =
		document.getElementById("experience").offsetTop - scroll_infomation;
	let scroll_skills =
		document.getElementById("skills").offsetTop - scroll_infomation;

	scrollDom = document.querySelector(".infoSection");
	scrollDom.addEventListener("scroll", () => {
		if (scrollDom.scrollTop > scroll_skills) {
			scrollBlock.value = "skills";
		} else if (scrollDom.scrollTop > scroll_experience) {
			scrollBlock.value = "experience";
		} else {
			scrollBlock.value = "infomation";
		}
	});
};

let btnDom;
watch(
	() => scrollBlock.value,
	() => {
		btnDom.infomation.classList.remove("onScroll");
		btnDom.experience.classList.remove("onScroll");
		btnDom.skills.classList.remove("onScroll");
		btnDom[scrollBlock.value].classList.add("onScroll");
	}
);

let scrollDom;
onMounted(() => {
	// 捲動切換按鈕樣式
	scrollChange();

	// 取得玻璃霧化區塊
	let emptyCardDom = document.querySelector(".infoCard");
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

<style lang='scss' scoped>
#vue-canvas-glass {
	filter: blur(15px);
}
section {
	@include flex(fs, st, col);
	max-height: 100vh - pos(header_hight);
}
.profile {
	@include flex(fs, c);
	min-height: 400px;
	background-color: color(gold_10, 0.95);
	padding: 40px;

	img {
		margin-left: 200px;
		margin-right: 40px;
		@include size(300px);
		border-radius: 100%;
		object-fit: fill;
		box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.05);
	}
	.content {
		@include flex(fs, fs, col);
		padding: 10px 10px;

		font-size: 18px;
		color: color(gold_60);
	}
	.profession {
		font-weight: 500;
	}
	.name {
		font-size: 36px;
		font-weight: 600;
		line-height: 1.8;
	}
	.description {
		@include flex(c, bl);
		margin-top: 15px;
		margin-bottom: 60px;

		font-weight: 400;
		.text {
			padding: 0px 8px;
		}
		span {
			letter-spacing: 1px;
			font-size: 14px;
			color: color(neutral_40);
			&.t {
				font-weight: 600;
				color: color(gold_40);
			}
		}
	}
	.btns {
		@include flex(fs, fe);
		flex: 1;

		button {
			padding: 10px 40px;
			margin-right: 20px;
			border-radius: 50px;
			background-color: color(gold_40, 0.2);
			color: color(gold_60);

			&:hover {
				background-color: color(gold_40, 0.6);
			}
		}
	}
}
.detail {
	@include flex(fs, st);
	overflow: auto;
	padding: 30px 15vw;

	.btns {
		position: absolute;
		transform: translate(-15vw, 0px);
		@include flex(fs, fs, col);
		width: 100px;
		padding: 30px 30px;

		.infomation,
		.experience,
		.skills {
			font-size: 18px;
			font-weight: 400;
			color: color(gold_30);
			line-height: 1.5;

			transition: all 0.2s ease-in-out;

			&.onScroll {
				font-size: 24px;
				font-weight: 500;
				color: color(gold_60);
			}
		}
	}
	.infoSection {
		@include flex(fs, st, col);
		overflow: hidden scroll;
		flex: 1;

		padding: 30px 40px;

		// 隱藏 Scrollbar
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
		&::-webkit-scrollbar {
			width: 0px; /* For Chrome, Safari, and Opera */
		}
	}
	.infoCard {
		@include blur("profile");
	}
	#infomation,
	#experience,
	#skills {
		margin: 10px;

		// background-color: color(neutral_00, 0.2);
	}
}
</style>