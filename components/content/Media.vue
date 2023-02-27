<script setup lang="ts">
	import { Image } from "@unpic/vue"

	export interface Props {
		src: string
		alt: string
		layout: "fixed" | "fullWidth" | "constrained"
		width: string | number
		height: string | number
		caption?: string
		decoding?: "async" | "sync"
		loading?: "lazy" | "eager" | "auto"
		fetchpriority?: "low" | "high"
		imgClass?: string
	}

	const props = withDefaults(defineProps<Props>(), {
		layout: "fixed",
		decoding: "async",
		loading: "lazy",
	})
</script>

<template>
	<figure>
		<Image
			:src="props.src"
			:alt="props.alt"
			:layout="props.layout"
			:width="props.width"
			:height="props.height"
			:loading="props.loading"
			:decoding="props.decoding"
			:fetchpriority="props.fetchpriority"
			:class="props.imgClass"
		/>
		<figcaption v-if="props.caption" v-html="props.caption" />
	</figure>
</template>

<style>
	figure > * {
		margin-inline: auto;
	}
	figure img {
		display: block;
	}
	figcaption {
		margin-top: 0.5em;
	}
</style>
