<template>
    <button class="button">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text: String
})
</script>

<style scoped>
    .button {
        height: 44px;
        width: 200px;
        border-radius: 50px;
        background-color: var(--attention-color);
        color: black;
        text-transform: uppercase;
        border: none;
    }
</style>