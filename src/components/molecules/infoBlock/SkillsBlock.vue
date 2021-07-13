<template lang='pug'>
#skills 
	h2 SKILLS
	.skill(v-for="skill in skills")
		h4 {{ skill.title }}
		p {{ skill.description }}
		.tags
			.tag(v-for="tag in skill.tags") {{ tag }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { skills } = inject("datas");
</script>

<style lang='scss' scoped>
h2 {
	font-size: 34px;
	font-weight: 600;
	color: color(gold_60);

	margin-bottom: 0.6em;
}
.skill {
	margin-bottom: 30px;
}
h4 {
	font-size: 24px;
	font-weight: 600;
	color: color(gold_60);
}
p {
	font-size: 18px;
	font-weight: 400;
	color: color(neutral_50);
	white-space: pre-wrap;
	line-height: 1.5;

	margin: 1em 0px;
}
.tags {
	@include flex(fs, fs);
	flex-wrap: wrap;

	.tag {
		font-size: 14px;
		font-weight: 500;
		border-radius: 1px;
		margin-right: 10px;
		margin-bottom: 12px;
		padding: 5px 15px;
		color: color(gold_60);
		background: linear-gradient(
			150deg,
			color(linear_03_01, 0.4),
			color(linear_03_02, 0.4)
		);
	}
}
</style>