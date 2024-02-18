<script setup lang="ts">
import TodoLayout from './components/Layout/TodoLayout.vue'
import router from './router'

const routes = router.getRoutes()
</script>

<template >
  <TodoLayout :routes="routes" />
</template>

<style scoped>
</style>
