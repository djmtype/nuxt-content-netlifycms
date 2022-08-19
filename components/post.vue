<script setup>
const props = defineProps({
  amount: Number
})


 const { data: blogs } = useAsyncData('blogs', () => {
  return queryContent('/blogs').only(['_path', 'title', 'description']).limit(props.amount).find()
})


</script>

<template>
 <div
          v-for="blog in blogs"
          :key="blog._path"
          class="card article"
        >
        <NuxtLink :to="blog._path">
            <section class="blog-post-card card article">
              <div class="media">
                <div class="media-content has-text-centered">
                  <h3 class="title article-title has-text-weight-bold">
                    {{ blog.title }}
                  </h3>
                  
                </div>
              </div>
              <div class="card-content">
                <div class="content article-body is-size-5">
                  {{ blog.description }}
                </div>
              </div>
            </section>
          </NuxtLink>
        </div>
</template>