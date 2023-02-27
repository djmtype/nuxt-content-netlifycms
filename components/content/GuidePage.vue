<template>
	<article v-for="post in posts" :key="post._id">
		<h1>{{ post.title }}</h1>
		<ContentRenderer :value="post" />

		<!-- <h2>{{post.title}}</h2>

       <pre>{{ post }}</pre> -->
	</article>
</template>

<script setup>
	const { data: posts } = await useAsyncData("guide", () =>
		queryContent("/blog/")
			// .where({ title: { $ne: "Blog" } })
			.find()
	)

	// const { data:posts } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>
