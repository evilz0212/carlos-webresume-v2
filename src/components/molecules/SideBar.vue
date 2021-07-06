<template lang='pug'>
.sideBar
	//- // TODO: 資源更新 - 連結 & CV檔案
	p Mail {{ profile.link_Email }}
	p IG {{ profile.link_IG }}
	p GitHub {{ profile.link_GitHub }}
	p CV {{ profile.link_CV }}
</template>

<script setup lang='ts'>
import { inject } from "vue";
const { profile } = inject("datas");
</script>

<style lang='scss' scoped>
.sideBar {
	position: fixed;
	right: 0;
	top: pos(sidebar_margin_top);
	background-color: rgba(163, 105, 105, 0.13);
}
</style>