<template lang='pug'>
teleport(to="#model")
	.alert
		button.check(@click="closeAlert()") {{ temp.date }}
</template>

<script setup>
import { defineProps, onMounted, getCurrentInstance, inject } from "vue";

const { temp } = inject("datas");
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
.alert {
	position: fixed;
	top: 50%;
	left: 50%;
	translate: -50% -50%;

	button {
		width: 300px;
		height: 80px;
		border-radius: 20px;
		border: 0px solid #000;
		background-color: hsl(135, 31%, 75%);
	}
}
</style>