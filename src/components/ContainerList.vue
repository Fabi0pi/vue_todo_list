<script setup lang="ts">
import type { Nullable, TodoList } from '@/store/model';
import TodoCheckboxListVue from './TodoCheckboxList.vue';

const props = defineProps<{
  title: string
  list: Nullable<TodoList>[]
  onclickDeleteBtn: (id: number) => void
}>()

const handleDeletItem = (id?: number) => {
  id && props.onclickDeleteBtn(id)
}


</script>

<template>
  <div class="box">
    <!-- <text class="title">{{ title }}</text> -->
    <div class="container-list">
      <TodoCheckboxListVue :list="list" :onclickDeleteBtn="handleDeletItem"></TodoCheckboxListVue>
    </div>
  </div>
</template>

<style scoped>
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-weight: 500;
  font-size: 2.3rem;
  color: hsla(160, 100%, 37%, 1);
}
.container-list {
  min-height: 100px;
  max-height: 500px;
  padding: 15px;
  width: 70%;
  border: 1px solid var(--color-border);
  border-radius: 16px;  
  overflow: scroll;
}
.container-list::-webkit-scrollbar {
    display: none;
}
.text {
  color: var(--color-text);
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.list {
  padding: 4px;
  height: 25px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
}

.checkbx{
  background: transparent;
  border: 1px solid;
  height: 20px;
  width: 20px;
  border-radius: 8px;
  cursor: pointer;
}

input{
  text-rendering: unset;
    color: unset;
    letter-spacing: unset;
    word-spacing: unset;
    line-height: unset;
    text-transform: unset;
    text-indent: unset;
    text-shadow: unset;
    display: unset;
    text-align: unset;
    appearance: unset;
    -webkit-rtl-ordering: unset;
    cursor: unset;
    background-color: unset;
    margin: unset;
    padding: unset;
    border-width: unset;
    border-style: unset;
    border-color: unset;
    border-image: initial;
    padding-block: unset;
    padding-inline: unset;
}
</style>
