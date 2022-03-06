<template>
<!-- TODO под одним h1, но с br || еще + 1 тег || white space  -->
    <main class="main">
        <div class="main-title">
            <h3 class="main-title__h3">Пройдите точный и быстрый</h3>
            <h2 class="main-title__h2">тест на</h2>
            <h1 class="main-title__h1">определение IQ</h1>
        </div>
        <div class="main-btn">
            <ThisBtn text="пройти тест" />
        </div>
        <div class="main-text">
            <p><span class="attention">и получите рекомендации по развитию своего интеллекта</span></p>
            <p>и улучшению финансового благосостояния и личной жизни</p>
        </div>
        <div class="main-next">
            <div class="main-next" @click.once="showAbout">
                <svg class="main-next__arrow" viewBox="0 0 100 85">
                    <polygon
                        points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056">
                    </polygon>
                </svg>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useStore } from 'vuex'
import ThisBtn from './UI/ThisBtn.vue';

const store = useStore();

const showAbout = () => store.commit('setAnswer', ['showAboutPage', true])
</script>

<style scoped>

.main-title {
    text-align: center;
    margin-top: 27px;
}


.main-title__h2, .main-title__h1 {
    color: var(--attention-color);
    font-family: Yeseva One;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
}

.main-title__h3 {
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
}

.main-btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-text {
    text-align: center;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
}
.main-next__arrow {
    width: 7.27px;
    height: 7.27px;
    transform: rotate(-90deg);
}
</style>