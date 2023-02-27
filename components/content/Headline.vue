<template>
	<component :is="headline"
		><slot /></component
	>
</template>
<!-- <script>
	export default {
		props: ["headlineLevel"],
		computed: {
			headline() {
				return "h" + this.headlineLevel
			},
		},
	}
</script> -->


<script setup>
import { computed } from 'vue'

const props = defineProps({
		level: Number
})
const headline = computed(() => {
  return "h" + props.level
})
</script>