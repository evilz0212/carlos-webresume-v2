<template lang='pug'>
section
	.project Project
		.card(v-for="project in projects", @click="popCard(project)")
			p {{ project.picture }}
			p {{ project.name }}
			hr
	.Exercise Exercise
		.card(v-for="exercise in exercises", @click="popCard(exercise)")
			p {{ exercise.picture }}
			p {{ exercise.name }}
			hr
</template>

<script setup>
import { inject } from "vue";
const { projects, exercises } = inject("datas");
const popup = inject("popup");

const popCard = (data) => {
	popup("popCard", {
		data: data,
	});
};
</script>

<style lang="scss" scoped>
</style>