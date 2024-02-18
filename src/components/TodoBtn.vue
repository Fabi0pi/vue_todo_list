<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    onClick: () => void
    btnName: string
    disabled: boolean 
}>()

const {btnName, onClick} = props

const getClassBtn = computed(()=> {
    return props.disabled ? 'btnDisabled' : 'btn'
})

</script>


<template>
    <button :class="getClassBtn" @click="onClick" :disabled="props.disabled">{{ btnName }}</button>
</template>

<style scoped>
.btn {
    width: 90px;
    height: 30px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    transition: 0.2s;
    color: #1c2722;
    border: 1px solid var(--color-vue);
    background-color: #0cbd7e;
}
.btn:hover{
    background-color: #1c2722;
    color: var(--color-vue);
}

.btnDisabled {
    width: 90px;
    height: 30px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    transition: 0.2s;
    color: #111b16;
    border: 1px solid #0cbd7f40;
    background-color: #0cbd7f2a;
}

button{
    border: unset;
}
</style>