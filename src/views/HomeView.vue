<script setup lang="ts">
import ContainerList from '@/components/ContainerList.vue';
import TodoInput from '@/components/TodoInput.vue'
import { store } from  '../store/store'
import TodoTag from '@/components/TodoTag.vue';

</script>

<template>
  <div class="home-container">
    <div class="left-container">
      <TodoTag tagName="Franco"></TodoTag>
      <TodoInput ></TodoInput>
    </div>
    <div class="right-container">
      <ContainerList 
        title="TODO LIST" 
        :list="store.todolist" >
      </ContainerList>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.left-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.right-container {
  flex:1;
  padding: 10px;
}
</style>