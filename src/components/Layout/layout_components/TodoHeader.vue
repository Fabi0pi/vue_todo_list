<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const props = defineProps<{
  routes: Record<string, any>[]
  onclickRoute: (routeName: string) => void
}>()

const handleClickRoute = (routeName: string) => {
  props.onclickRoute(routeName);
}

</script>

<template>
  <div class="todo-header">
    <nav v-for="({ name, path }, idx) in props.routes" :key="idx" @click="handleClickRoute(name)" >
      <RouterLink :to="path">{{ name }}</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.todo-header {
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: flex-end;
  min-height: 80px;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
}

nav {
  width: 100px;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: var(--color-text);
}

nav a:first-of-type {
  border: 0;
}
</style>
