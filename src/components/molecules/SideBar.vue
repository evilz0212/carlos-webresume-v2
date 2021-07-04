<template lang='pug'>
.sideBar
	p SideBar
</template>

<script setup lang='ts'>
import { ref, reactive, computed, defineProps, inject, onMounted } from "vue";
// import { useStore } from 'vuex';
// import { useRouter, useRoute } from 'vue-router';
// import { dateFormat } from '@/plugins';
// const services: Services = inject('services');
// const api: any = inject('api');
// const store = useStore();
// const router = useRouter();
// const props = defineProps({});

onMounted(() => {});
</script>

<style lang='scss' scoped>
.sideBar {
	position: fixed;
	right: 0;
	top: pos(sidebar_margin_top);
	background-color: rgba(163, 105, 105, 0.13);
}
</style>