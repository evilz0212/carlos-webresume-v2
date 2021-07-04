<template lang='pug'>
teleport(to="#model")
	.popAlert(@click.self="closeAlert()")
		.card {{ profile.date }}
</template>

<script setup>
import { defineProps, onMounted, getCurrentInstance, inject } from "vue";

const { profile } = inject("datas");
const { ctx } = getCurrentInstance();
const props = defineProps({
	msg: String,
});

const closeAlert = () => {
	ctx.remove();
};

onMounted(() => {});
</script>

<style lang='scss' scoped>
.card {
	width: 80vw;
	min-height: 80vh;

	background-color: #fff;
}
</style>