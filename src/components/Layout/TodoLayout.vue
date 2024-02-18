<script setup lang="ts">
import TodoFooter from './layout_components/TodoFooter.vue';
import TodoHeader from './layout_components/TodoHeader.vue';
import { store } from  '../../store/store'

const props = defineProps<{
  routes: Record<string, any>[]
}>()

const { routes } = props
const { setActiveRoute } = store

</script>

<template>
  <div class="layout">
    <TodoHeader :routes="routes" :testonclick="(route) => setActiveRoute(route)" />
    <TodoFooter copy="All rights reserved, © 2024 Todo Inc." />
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>