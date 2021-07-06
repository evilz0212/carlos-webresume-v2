<template lang='pug'>
.top(@click="goTop") top
</template>

<script setup lang='ts'>
const goTop = () => {
	document.documentElement.scrollTop = 0;
};
</script>

<style lang='scss' scoped>
.top {
	position: fixed;
	right: 30px;
	bottom: 30px;
}
</style>