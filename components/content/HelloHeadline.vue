<template>
	<component :is="headline"
		>Foobar</component
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
		headlineLevel: Number
})
const headline = computed(() => {
  return "h" + props.headlineLevel
})
</script>