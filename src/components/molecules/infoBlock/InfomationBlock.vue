<template lang='pug'>
#infomation Infomation
	p {{ infomation.name }}
	p {{ infomation.age }}
	p {{ infomation.education }}
	p {{ infomation.introduction }}
	p {{ infomation.target }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { infomation } = inject("datas");
</script>

<style lang='scss' scoped>
</style>