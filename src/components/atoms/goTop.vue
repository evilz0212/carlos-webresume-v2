<template lang='pug'>
.top(@click="goTop") 
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
	dom: String,
});

const goTop = () => {
	document.documentElement.scrollTop = 0;
	document.querySelector(props.dom).scrollTop = 0;
};
</script>

<style lang='scss' scoped>
.top {
	position: fixed;
	right: 30px;
	bottom: 30px;
	@include size(44px);

	background: url("@/assets/icons/Top.svg");
	cursor: pointer;
}
</style>