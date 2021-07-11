<template lang='pug'>
Header
SideBar
goTop
.content
	router-view
</template>

<script setup>
</script>

<style lang='scss' scoped>
.content {
	padding-top: pos(header_hight);
}
</style>