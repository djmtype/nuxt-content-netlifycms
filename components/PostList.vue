<script setup>
	const props = defineProps({
		amount: Number,
	})

	const { data: posts } = useAsyncData("blog", () => {
		return queryContent("/blog")
			.only(["_path", "title", "description"])
			.limit(props.amount)
			.find()
	})
</script>

<template>
	<ol>
		<li v-for="post in posts" :key="post._path">
			<h3>
				<NuxtLink :to="post._path">
					{{ post.title }}
				</NuxtLink>
			</h3>
			<p v-html="post.description" />
		</li>
	</ol>
</template>
