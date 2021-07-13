<template lang='pug'>
teleport(to="#model")
	.popAlert(@click.self="closeAlert()")
		.card 
			a.picture(:href="data.link", target="_blank")
				img(:alt="data.name", :src="`${projectName}${data.picture}`")
			.content
				.title
					.name {{ data.name }}
					.author {{ data.author }}
				.overview {{ data.overview }}
				h4 Target
				ol
					.target(v-for="target in data.target_List")
						li {{ target.mission }}
						ul
							li(v-for="description in target.description") {{ description }}
				h4 Detail
				ul
					.detail(v-for="detail in data.detail_List")
						li {{ detail.task }}
						ul
							li(v-for="description in detail.description") {{ description }}
</template>

<script setup>
import { defineProps, onMounted, getCurrentInstance } from "vue";
const projectName = import.meta.env.VITE_PROJECT_NAME;
const { ctx } = getCurrentInstance();
const props = defineProps({
	data: Object,
});

const closeAlert = () => {
	ctx.remove();
};

onMounted(() => {});
</script>

<style lang='scss' scoped>
.card {
	position: relative;
	width: 80vw;
	min-height: 80vh;

	@include flex(fs, fs, col);

	background-color: color(neutral_00);
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
	border-radius: 15px;

	overflow: hidden;
}
.picture {
	position: relative;
	width: 100%;
	padding-top: 50%;
}
img {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
}

.content {
	padding: 60px;
}
.title {
	@include flex(fs, bl);
	.name {
		font-size: 36px;
		font-weight: 600;
		color: color(gold_60);

		margin-right: 20px;
	}
	.author {
		font-size: 24px;
		font-weight: 300;
		color: color(gold_60);
	}
}
.overview {
	margin: 25px 0px;
	padding: 10px 15px;

	font-size: 18px;
	font-weight: 300;
	color: color(gold_60);

	border-left: 3px solid color(gold_50);
}
h4 {
	margin-top: 40px;
	margin-bottom: 10px;

	font-size: 18px;
	font-weight: 400;
	color: color(gold_60);
}

.target,
.detail {
	margin-left: -15px;
	margin-bottom: 8px;

	color: color(neutral_50);
	li {
		line-height: 2;
	}
}
</style>