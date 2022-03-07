<template>
    <button :class="{button: true, button_deactivate: props.deactivate, button_transparent: props.transparent}">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text: String,
    deactivate: Boolean,
    transparent: Boolean
})
</script>

<style scoped>
    .button {
        height: 44px;
        width: 200px;
        border-radius: 50px;
        background-color: var(--attention-color);
        color: black;
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border: none;
        transition: 1s;
    }
    .button:hover {
        color: var(--attention-color);
        background-color: black;
    }

    .button_deactivate {
        background: #DADADA;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .button_transparent {
        background-color: transparent;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 50px;
        color: white;
    }

    .button_transparent:hover {
        background-color: white;
        color: black;
    }
</style>