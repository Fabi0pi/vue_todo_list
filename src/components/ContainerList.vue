<script setup lang="ts">
import type { Nullable, TodoList } from '@/store/model';
import { computed, ref } from 'vue';

const checkedItems = ref([] as number[])

const props = defineProps<{
  title: string
  list: Nullable<TodoList>[]
  onclickDeleteBtn: (id: number) => void
}>()

const handleClickChecked = (id?:number) => {

  if (!id) return

  if (checkedItems.value.includes(id)) {
    return checkedItems.value = checkedItems.value.filter(itemId => itemId !== id);
  } 
  checkedItems.value.push(id);
}

const isThisChecked = computed(()=> {
  return (id?:number) => id && checkedItems.value.includes(id)
})

const handleDeletItem = (id?: number) => {
  id && props.onclickDeleteBtn(id)
}


</script>

<template>
  <div class="box">
    <!-- <text class="title">{{ title }}</text> -->
    <div class="container-list">
      <div class="list" v-for="(el) in list" :key="el?.id">
        <input 
          class="checkbx" 
          type="checkbox" 
          :id="`${el?.id}`" 
          :value="el?.id" 
          :v-model="list" 
          @click="handleClickChecked(el?.id)" 
          />
        <label class="text" :for="'checkbox-' + el?.id">{{ el?.value }}</label>
        <button @click="handleDeletItem(el?.id)" :disabled="!isThisChecked(el?.id)">X</button>
      </div>
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
  overflow: hidden;
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
