<template lang='pug'>
Header
SideBar
goTop
.content
	router-view
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.content {
	padding-top: pos(header_hight);
}
</style>