<script setup lang="ts">
const props = defineProps<{
    tagName: string
}>()
</script>


<template>
    <div class="tag" @click="()=> console.log(props.tagName)">
        <text>{{`#${props.tagName}`}}</text>
    </div>
</template>

<style>
.tag{
    height: 30px;
    padding-inline: 10px;
    width: fit-content;
    border: 1px solid;
    border-radius: 8px;
}
</style>