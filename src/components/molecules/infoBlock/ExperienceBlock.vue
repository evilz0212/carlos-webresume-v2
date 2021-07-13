<template lang='pug'>
#experience 
	h2 EXPERIENCE
	.stage(v-for="stage in experience")
		h4 {{ stage.period }}
			span {{ stage.company }}
			span {{ stage.profession }}
		.block
			.resp(v-for="resp in stage.projects")
				h5 {{ resp.project }}
				p {{ resp.description }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { experience } = inject("datas");
</script>

<style lang='scss' scoped>
h2 {
	font-size: 34px;
	font-weight: 600;
	color: color(gold_60);

	margin-bottom: 0.6em;
}
h4 {
	font-size: 22px;
	font-weight: 600;
	color: color(gold_60);

	span {
		font-weight: 400;
		color: color(gold_60);

		margin-left: 1em;
	}
}
h5 {
	font-size: 20px;
	font-weight: 600;
	color: color(gold_60);
}

.block {
	border-left: 2px solid color(gold_40);
	padding: 5px 30px;
	margin: 30px 20px;
}
.resp {
	margin-bottom: 25px;
}
p {
	font-size: 18px;
	font-weight: 400;
	line-height: 1.5;
	color: color(neutral_50);
}
</style>