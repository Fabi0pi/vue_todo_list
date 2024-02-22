<script setup lang="ts">
import { ref, watch } from 'vue';
import { store } from  '../store/store'
import TodoBtn from './TodoBtn.vue';

const textInput = ref<string>('');
const disabledBtn = ref<boolean>(true)

const updateBtn = (val: boolean) => {
    return disabledBtn.value = val
}

watch(textInput, (newValue) => {
    const existInput = newValue ? updateBtn(false) : updateBtn(true)
    return existInput
});

const getValue = () => {
    if (!textInput.value) return 
    store.getItem(textInput.value)
    textInput.value = ''
}
</script>

<template>
    <div class="input-container">
        <input 
        v-model="textInput"
        placeholder="Add something to do"
        class="custom-input"
        ref="inputElement"
        @keyup.enter="getValue"
        />
        <div class="btn-container">
            <TodoBtn :onClick="getValue" btnName="Submit" :disabled="disabledBtn" ></TodoBtn>
        </div>
    </div>
</template>

<style scoped>
input:focus-visible {
    outline: unset ;
} 
.custom-input {
    width: 70%;
    height: 50px;
    padding: 4px;
    border: none;
    font-size: 1.3rem;
    color: var(--color-vue);
    background-color: transparent;
    border-bottom: 1px solid var(--color-border);
}

.input-container{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.btn-container {
    width: 70%;
    display: flex;
    padding: 15px 0;
    flex-direction: row;
    justify-content: flex-end;
}
</style>