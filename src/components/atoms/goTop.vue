<template lang='pug'>
.top(@click="goTop") top
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
const goTop = () => {
	document.documentElement.scrollTop = 0;
};
onMounted(() => {});
</script>

<style lang='scss' scoped>
.top {
	position: fixed;
	right: 30px;
	bottom: 30px;
}
</style>