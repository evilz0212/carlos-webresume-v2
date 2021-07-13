<template lang='pug'>
.sideBar
	a.icon(:href="profile.link_Email", target="_blank")
		img(alt="Email", src="@/assets/icons/mail.svg")
	a.icon(:href="profile.link_IG", target="_blank")
		img(alt="IG", src="@/assets/icons/instagram.svg")
	a.icon(:href="profile.link_GitHub", target="_blank")
		img(alt="GitHub", src="@/assets/icons/github.svg")
	a.icon(:href="profile.link_CV", target="_blank")
		img(alt="CV", src="@/assets/icons/cv.svg")
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
	padding: 0px 15px;
	border-radius: 15px 0px 0px 15px;

	:hover {
		cursor: pointer;
	}
}
.icon {
	@include flex(c, c);
	@include size(30px);
	padding: 30px 0px;
	border-bottom: 1px solid color(basic_white, 0.2);
	&:last-child {
		border: 0px;
	}
}
</style>