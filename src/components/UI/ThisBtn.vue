<template>
    <button :class="{button: true, button_deactivate: props.deactivate}">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    deactivate: Boolean,
    black: Boolean
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

    .button_deactivate {
        background: #DADADA;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
</style>