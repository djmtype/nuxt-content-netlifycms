<!-- <script setup>
definePageMeta({
  layout: 'default'
})
</script> -->

<script setup>
import site from "../data/site.json"

	useHead({
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
	})

</script>



<template>
  <NuxtLayout>
    <Title>Welcome Home</Title>
    <section>
      <h1>Nuxt / Netlify CMS <br /><small><em>Boilerplate</em></small></h1>

    </section>

    <section>
      <h2>Latest Posts</h2>
      <p>Control the posts amount via <code>data/site.json "postAmount"</code></p>
      <PostList :amount="site.postAmount || 5" />

    </section>
  </NuxtLayout>
</template>