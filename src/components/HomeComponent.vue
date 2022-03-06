<template>
    <div>
        <h1>test</h1>
        <button @click.once="showAbout">show about</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore();

const showAbout = () => store.commit('setAnswer', ['showAboutPage', true])
</script>

<style scoped>

</style>