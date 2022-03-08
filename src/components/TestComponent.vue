<template>
    <section class="question">
        <div class="question-progressive">
            <progress class="question-progressive__bar" id="q-progress" max="100" :value="dune"></progress>
        </div>
        <div class="question-text">{{ props.title }}</div>
        <div class="question-task">
            <RadioBtnGroup :options="props.answer" v-model:clientAnswer="clientAnswer" v-if="props.answer"/>
            <div class="img" v-else-if="props.img">img</div>
            <div class="color" v-else-if="props.color">color</div>
        </div>
        <div class="question-btn">
            <ThisBtn text="далее" :deactivate="blockNextBtn" />
        </div>
    </section>
</template>

<script setup>
import ThisBtn from './UI/ThisBtn.vue';
import { ref, watch } from 'vue';
import RadioBtnGroup from './RadioBtnGroup.vue';

const props = defineProps({
    id: Number,
    title: String,
    img: Boolean,
    answer: Array,
    colorAnswer: Boolean,
    numberAnswer: Boolean,
})

const clientAnswer = ref('')
const blockNextBtn = ref(true)
const dune = ref(7.7)

watch(clientAnswer, (newClientAnswer) => newClientAnswer === '' ? blockNextBtn.value = true : blockNextBtn.value = false )
</script>

<style scoped>
    .question {
        background-image: url('/rain_bk2.jpg');
        height: calc(100vh - 50px);
        position: relative;
    }
    .question-progressive {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 2.1rem 0 2.1rem;
        margin-bottom: 6.4rem;
    }

    .question-progressive__bar {
        width: 100%;
        background: rgba(242,243,243, 0.3);
        mix-blend-mode: normal;
        border-radius: 10.5px;
        transition: 1s;
    }

    .question-progressive__bar::-webkit-progress-bar {
        width: 100%;
        background: rgba(242,243,243, 0.3);
        mix-blend-mode: normal;
        border-radius: 10.5px;
    }

    .question-progressive__bar::-webkit-progress-value {
        background: #3BDE7C;
        border-radius: 10.5px;
        opacity: 1;
        transition: 1s;
    }

    .question-progressive__bar::-moz-progress-bar {
        width: 100%;
        background: rgba(242,243,243, 0.3);
        mix-blend-mode: normal;
        border-radius: 10.5px;
    }

    .question-text {
        font-family: PT Serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin-bottom: 51px;
    }

    .question-text:first-child {
        text-transform: capitalize;
    }

    .question-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: 5%;
    }
</style>