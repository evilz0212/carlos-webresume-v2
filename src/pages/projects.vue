<template lang='pug'>
section
	.project Projects Page

button(type="button", @click="popAlert()") pop Card
</template>

<script setup>
import { defineProps, reactive, inject } from "vue";
const popup = inject("popup");

defineProps({
	msg: String,
});

const state = reactive({ count: 0 });

const popAlert = () => {
	popup("popMsg", {
		msg: "popup",
	});
};
</script>

<style lang="scss" scoped>
a {
	color: #42b983;
}
</style>