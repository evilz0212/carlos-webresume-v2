<template lang='pug'>
#skills Skills
	.skill(v-for="skill in skills")
		p {{ skill.title }}
		p {{ skill.description }}
		.tags(v-for="tag in skill.tags")
			.tag {{ tag }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { skills } = inject("datas");
</script>

<style lang='scss' scoped>
.tags {
	@include flex(fs, fs);
	display: inline-flex;

	.tag {
		margin: 5px;
		padding: 2px;
		background-color: rgba(114, 114, 114, 0.205);
	}
}
</style>