<script setup>
	const props = defineProps({
		amount: Number,
		// headingLevel: Number
	})

	const { data: posts } = useAsyncData("blog", () => {
		return queryContent("/blog")
			.only(["_path", "title", "description"])
			.limit(props.amount)
			.find()
	})


</script>


<template>
	<div>
		<HelloHeadline :headlineLevel="3" />
		<ol>
			<li v-for="post in posts" :key="post._path">
					<NuxtLink :to="post._path">
					{{ post.title }}
					</NuxtLink>
				<p v-html="post.description" />
			</li>
		</ol>
	</div>
</template>
