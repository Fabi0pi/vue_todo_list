<script setup lang="ts">
import type { Nullable, TodoList } from '@/store/model';
import { computed, ref } from 'vue';

const checkedItems = ref([] as number[])

const props = defineProps<{
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

const classes = computed(()=> {
  return (id?:number) => {
    if (!id) return
    const isChecked = checkedItems.value.includes(id)
    return isChecked && "-active"}
  })

</script>

<template>
  <div class="rows" v-for="(el) in list" :key="el?.id">
    <div :class="['check',`check${classes(el?.id)}`]">
        <input 
          :class="['checkbx',`checkbx${classes(el?.id)}`]" 
          type="checkbox" 
          :id="`${el?.id}`" 
          :value="el?.id" 
          :v-model="list" 
          @click="handleClickChecked(el?.id)" 
          />
        <label :class="['text',`text${classes(el?.id)}`]" :for="'checkbox-' + el?.id">{{ el?.value }}</label>
      </div>
    <div class="delete-btn">
      <button :class="[`btn${classes(el?.id)}`]" @click="handleDeletItem(el?.id)" :disabled="!isThisChecked(el?.id)">X</button>
    </div>
  </div>
</template>

<style scoped>
.rows {
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.check{
    flex:2;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.delete-btn{
    flex:1;
    display: flex;
    justify-content: flex-end;
}

.text{
  color: var(--color-text);
  font-size: 1.1rem;
}
.text-active{
  color: var(--color-vue);
  font-size: 1.1rem;
}

.checkbx{
  background: transparent;
  border: 1px solid;
  height: 20px;
  width: 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 4px;
}
.checkbx-active{
  background: var(--color-vue);
  border: 1px solid var(--color-vue);
  height: 20px;
  width: 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 4px;
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
button{
    border: unset;
    background-color: transparent;
}
/* .btn {
    cursor: pointer;
    border-radius: 2px;
    border-bottom: 1px solid var(--color-text);
    color: var(--color-text);
} */
.btn-active{
    /* border-bottom: 1px solid var(--color-vue); */
    color: var(--color-vue);
    cursor: pointer;
}
</style>
