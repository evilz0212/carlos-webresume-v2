<template lang='pug'>
section
	.profile
		//- // TODO: 資源更新 - 個人照片
		p {{ profile.picture }}
		p {{ profile.profession }}
		p {{ profile.name }}
		p {{ profile.description }}
		p btn {{ profile.link_CV }}
		p btn {{ profile.link_GitHub }}
	.detail
		.btns
			a(href="#infomation") -Infomation
			a(href="#experience") -Experience
			a(href="#skills") -Skills
		.infoSection
			InfomationBlock
			ExperienceBlock
			SkillsBlock
</template>

<script setup>
import { inject } from "vue";
const { profile } = inject("datas");
</script>

<style lang='scss' scoped>
section {
	@include flex(fs, st, col);
	max-height: 100vh - pos(header_hight);
}
.profile {
	height: 300px;
}
.detail {
	@include flex(fs, st);
	overflow: auto;
}
.btns {
	@include flex(fs, fs, col);
	width: 100px;
}
.infoSection {
	@include flex(fs, st, col);
	overflow: hidden scroll;
	flex: 1;
}
#infomation,
#experience,
#skills {
	margin: 10px;
	background-color: rgba(107, 85, 85, 0.199);
}
</style>