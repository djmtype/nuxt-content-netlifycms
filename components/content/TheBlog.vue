<template>
    <h2>components/posts/blogs.vue</h2>

      <!-- <pre>{{ blogs }}</pre> -->

      <ol>
        <li v-for="post in posts" :key="post._path"><a :href="post._path">{{post.title}}</a></li>
      </ol>

</template>


<script setup>
  const { data: posts } = await useAsyncData('home', () => queryContent('/blog/').only(['_path', 'title', 'description']).find())
</script>