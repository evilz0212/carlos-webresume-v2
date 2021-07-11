<template lang="pug">
VueCanvas
SideBar

.EmptyCard
	//- // TODO: 資源更新 - Logo
	img(alt="Vue logo", src="@/assets/icons/logo.png")
	p {{ profile.name }}
	p {{ profile.slogan }}

	router-link(:to="{ name: 'profile' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Profile Page

	router-link(:to="{ name: 'projects' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Projects Page
</template>

<script setup>
import { inject } from "vue";
const { profile } = inject("datas");
</script>

<style lang="scss">
.EmptyCard {
	position: fixed;
	left: 0;
	transform: translate((100vw * 0.618 * 0.5 * 0.5), pos(sidebar_margin_top));
	@include size(521px, pos(emptyCard_hight));

	@include flex(c, c, col);
	background-color: rgba(212, 140, 140, 0.171);
}
</style>
