<template lang='pug'>
.header
	router-link(:to="{ name: 'home' }", custom, v-slot="{ navigate }")
		button.icon(role="link", @click="navigate") 
			img(alt="Logo", src="@/assets/icons/Logo.svg")
			.name Carlos

	.btns
		router-link(:to="{ name: 'profile' }", custom, v-slot="{ navigate }")
			button.page(role="link", @click="navigate") Profile

		router-link(:to="{ name: 'projects' }", custom, v-slot="{ navigate }")
			button.page(role="link", @click="navigate") Projects
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.header {
	position: fixed;
	top: 0;
	height: pos(header_hight);

	@include flex(sb, c);
	width: 100%;
	padding: 0px 30px;

	background-color: color(basic_white, 0.95);
}
.icon {
	@include flex(fs, c);
	background-color: transparent;
	img {
		@include size(60px);
		margin-right: 30px;
	}
	.name {
		font-size: 24px;
		font-weight: 500;
		background: linear-gradient(
			-80deg,
			color(linear_01_01),
			color(linear_01_02)
		);
		color: transparent;
		background-clip: text;
	}
}
.page {
	font-size: 24px;
	font-weight: 300;
	color: color(gold_60);
	background-color: transparent;

	padding: 0px 20px;
}
</style>