<template>
    <!-- TODO под одним h1, но с br || еще + 1 тег || white space  -->
    <main class="main">
        <div class="main-title">
            <h3 class="main-title__h3">Пройдите точный и быстрый</h3>
            <h2 class="main-title__h2">тест на</h2>
            <h1 class="main-title__h1">определение IQ</h1>
        </div>
        <div class="main-btn">
            <ThisBtn text="пройти тест" @click="goTest" />
        </div>
        <div class="main-text">
            <p><span class="attention"> получите рекомендации по развитию своего интеллекта</span></p>
            <p class="main-text__p">и улучшению финансового благосостояния и личной жизни</p>
        </div>
        <div class="main-toAbout" @click="showAbout">
            <div class="main-next">
                <svg class="main-next__arrow" viewBox="0 0 100 85">
                    <polygon
                        points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056">
                    </polygon>
                </svg>
            </div>
            <p class="main-next__text">подробнее</p>
        </div>
    </main>
</template>

<script setup>
import { useStore } from 'vuex'
import ThisBtn from './UI/ThisBtn.vue';
import { useRouter } from 'vue-router';

const route = useRouter();
const store = useStore();
const showAbout = () => {
    store.commit('setAnswer', ['showAboutPage', true]);
    setTimeout(() => {
        const about = document.getElementById('about');
        about.scrollIntoView()
    }, 200)
    };

const goTest = () => route.push('/test')
</script>

<style scoped>
.main {
    background-image: url(/rain_bk.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: 45%;
    height: calc(100vh - 50px);
}

.main-title {
    text-align: center;
    padding-top: 27px;
}


.main-title__h2, .main-title__h1 {
    color: var(--attention-color);
    font-family: Yeseva One;
    font-style: normal;
    font-weight: bold;
    font-size: 2.1rem;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
}

.main-title__h3 {
    font-family: PT Serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    color: white;
    margin-bottom: 17px;
}

.main-title__h1 {
    margin-bottom: calc(25vh + 3rem);
}

.main-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 27px;
}

.main-text {
    text-align: center;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    padding: 0 30px;
    margin-bottom: 55px;
}

.main-text__p {
    color: white;
}

.main-toAbout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
}

.main-next {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-next__arrow {
    width: 7.27px;
    height: 7.27px;
    transform: rotate(-90deg);
}

.main-next__text {
    color: white;
}
</style>