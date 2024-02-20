<script setup lang="ts">
const props = defineProps<{
    tagName: string
    color?: "red" | "yellow" |"green" 
}>()
/**
 * TODO: 
 * active tag, list of random color, possibiliti to generate new tag associating random color
 * * when tag is active, list colors (texts and borders) will take the tag color associated
 */
</script>



<template>
    <div class="tag" @click="()=> console.log(props.tagName)">
        <text>{{`#${props.tagName}`}}</text>
    </div>
</template>

<style>
.tag{
    cursor: pointer;
    height: 30px;
    padding-inline: 10px;
    width: fit-content;
    border: 1px solid v-bind(color);
    border-radius: 8px;
    color: v-bind(color);
    opacity: 0.6;
}
.tag:hover{
    opacity: 0.9;
}
</style>