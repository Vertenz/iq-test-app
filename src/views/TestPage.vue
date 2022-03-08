<template>
    <TestComponent :title="actualQuestion.title" :img="actualQuestion.img" :answer="actualQuestion.answer"
        :color="actualQuestion.colorAnswer" :numberAnswer="actualQuestion.numberAnswer" />
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import TestComponent from '../components/TestComponent.vue'

const store = useStore();
const questions = store.getters.getQuestions;
const indexQuestion = ref(0)
const actualQuestion = questions[indexQuestion.value]
</script>