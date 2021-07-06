<template lang='pug'>
#experience Experience
	.stage(v-for="stage in experience")
		p {{ stage.period }}
		p {{ stage.company }}
		p {{ stage.profession }}
		.resp(v-for="resp in stage.projects")
			p {{ resp.project }}
			p {{ resp.description }}
		hr
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { experience } = inject("datas");
</script>

<style lang='scss' scoped>
</style>