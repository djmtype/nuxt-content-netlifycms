<template>
	<header role="banner">
			Nuxt Content Boilerplate
			<div><em>{{ route.meta.layout }}</em> layout</div>
	</header>
</template>

<script setup>
const route = useRoute()
</script>

<style scoped>
header {
	padding: 1em 0;
	display: flex;
	gap: 1em;
	justify-content: space-between;
}



</style>