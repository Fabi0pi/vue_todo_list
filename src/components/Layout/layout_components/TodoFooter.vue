<script setup lang="ts">
defineProps<{
  copy: string
}>()
</script>

<template>
  <div class="todo-footer">
    <text>{{ copy }}</text>
  </div>
</template>

<style scoped>
.todo-footer {
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  min-height: 120px;
  width: 100%;
  border-top: 1px solid var(--color-border);
}
</style>
