<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <ul class="navigation" role="list">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <TheNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
    </li>
  </ul>
</template>

<style scoped>
.sub-navigation {
	display: none;
}
</style>


