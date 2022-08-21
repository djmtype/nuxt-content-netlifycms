<script setup>
import site from "../../data/site.json"
</script>



<template>
    <section>
      <slot></slot>
      <PostList :amount="site.postAmount || 5" />

    </section>
</template>