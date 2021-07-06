<template lang='pug'>
teleport(to="#model")
	.popAlert(@click.self="closeAlert()")
		.card 
			//- // TODO: 資源更新 - project 照片
			p {{ data.picture }}
			//- // TODO: 資源更新 - project link
			p {{ data.link }}
			p {{ data.name }}
			p {{ data.author }}
			p {{ data.overview }}
			p Target
			ol
				.target(v-for="target in data.target_List")
					li {{ target.mission }}
					ul
						li(v-for="description in target.description") {{ description }}
			p Detail
			ul
				.detail(v-for="detail in data.detail_List")
					li {{ detail.task }}
					ul
						li(v-for="description in detail.description") {{ description }}
</template>

<script setup>
import { defineProps, onMounted, getCurrentInstance } from "vue";
const { ctx } = getCurrentInstance();
const props = defineProps({
	data: Object,
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