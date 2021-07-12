<template lang='pug'>
.sideBar
	//- // TODO: 資源新增 - 連結 & CV檔案
	.icon Mail
	//- {{ profile.link_Email }}
	.icon IG
	//- {{ profile.link_IG }}
	.icon GitHub
	//- {{ profile.link_GitHub }}
	.icon CV
	//- {{ profile.link_CV }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { profile } = inject("datas");
</script>

<style lang='scss' scoped>
.sideBar {
	position: fixed;
	right: 0;
	top: pos(sidebar_margin_top);

	opacity: 0.95;
	background: linear-gradient(
		-70deg,
		color(linear_01_01),
		color(linear_01_02)
	);
	padding: 0px 10px;
	border-radius: 15px 0px 0px 15px;

	:hover {
		cursor: pointer;
	}
}
.icon {
	@include flex(c, c);
	padding: 20px 0px;
	border-bottom: 1px solid color(basic_black, 0.1);
	&:last-child {
		border: 0px;
	}
}
</style>