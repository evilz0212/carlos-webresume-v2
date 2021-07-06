<template lang='pug'>
.header
	router-link(:to="{ name: 'home' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Home

	router-link(:to="{ name: 'profile' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Profile Page

	router-link(:to="{ name: 'projects' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Projects Page
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.header {
	position: fixed;
	top: 0;
	height: pos(header_hight);
}
</style>