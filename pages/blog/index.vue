<script setup>
  const { data } = await useAsyncData('home', () => queryContent('/blog/').only(['_path', 'title', 'description']).find())

definePageMeta({
  layout: 'blog'
})

</script>

<template>
    <NuxtLayout>
      <Title>The Blog</Title>
    <h1>The Blog</h1>
    <section>
      <pre>{{ data }}</pre>
    </section>
    <section v-if="data">
      <TheBlog />
    </section>
</NuxtLayout>
</template>


