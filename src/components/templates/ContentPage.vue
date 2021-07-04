<template lang='pug'>
Header
SideBar
goTop
section
	router-view
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
section {
	padding-top: pos(header_hight);
}
</style>