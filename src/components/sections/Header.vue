<template lang='pug'>
.header
	p Header
	router-link(:to="{ name: 'home' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Home

	router-link(:to="{ name: 'profile' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Profile Page

	router-link(:to="{ name: 'projects' }", custom, v-slot="{ navigate }")
		button(role="link", @click="navigate") Projects Page
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
.header {
	position: fixed;
	top: 0;
}
</style>