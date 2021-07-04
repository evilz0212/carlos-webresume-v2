<template lang='pug'>
section
	.profile Profile Page
	.block
		.btns
			a(href="#infomation") -Infomation
			a(href="#experience") -Experience
			a(href="#skills") -Skills
		.infoSection
			#infomation Infomation
			#experience Experience
			#skills Skills
</template>

<script setup>
</script>

<style lang='scss' scoped>
.profile {
	height: 300px;
}
.block {
	@include flex(fs, fs);
}
.btns {
	@include flex(fs, fs, col);
	width: 100px;
}
.infoSection {
	height: 500px;
	width: 100%;
	overflow: hidden scroll;
}
#infomation,
#experience,
#skills {
	height: 400px;
	margin: 10px;
	background-color: rgba(107, 85, 85, 0.199);
}
</style>