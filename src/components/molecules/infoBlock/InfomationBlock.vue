<template lang='pug'>
#infomation 
	h2 INFORMATION
	.info
		.row
			h4 #[span Name] {{ infomation.name }}
			h4 #[span Age] {{ infomation.age }}
		h4 #[span Education] {{ infomation.education }}
	p {{ infomation.introduction }}
	p {{ infomation.target }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { infomation } = inject("datas");
</script>

<style lang='scss' scoped>
h2 {
	font-size: 34px;
	font-weight: 600;
	color: color(gold_60);

	margin-bottom: 0.6em;
}
h4 {
	font-size: 18px;
	font-weight: 400;
	color: color(neutral_50);
	margin-bottom: 0.4em;
	margin-right: 2em;
}

p {
	font-size: 18px;
	font-weight: 400;
	color: color(neutral_50);
	line-height: 1.5;
	margin-bottom: 1em;
	white-space: pre-wrap;
}

span {
	font-weight: 500;
	color: color(gold_60);

	margin-right: 0.6em;
}
.info {
	margin-bottom: 2em;
}
</style>