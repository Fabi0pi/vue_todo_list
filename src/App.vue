<script setup lang="ts">
import TodoLayout from './components/Layout/TodoLayout.vue'
import router from './router'
import { useStore } from './store/store';


const store = useStore()

const routes = router.getRoutes()

</script>

<template >
  <TodoLayout :routes="routes" :store="store" />
</template>

<style scoped>
</style>
./store/stores