<template lang='pug'>
#vue-canvas
.canvas-container
	#vue-canvas-glass
router-view
</template>

<script setup>
import { onMounted } from "vue";
import * as p5 from "@/services/canvas";

onMounted(() => {
	p5.setup();
});
</script>
