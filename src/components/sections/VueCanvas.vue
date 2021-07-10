<template lang='pug'>
#vue-canvas
</template>

<script setup>
import { onMounted, watch } from "vue";
import initCanvas from "@/services/canvas";

onMounted(() => {
	initCanvas();
});
</script>

<style lang='scss' scoped>
#vue-canvas {
	position: fixed;
	display: block;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0;
	overflow: hidden;
	z-index: -1;
}
</style>