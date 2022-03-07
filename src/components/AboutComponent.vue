<template>
    <section class="about">
        <div class="about-quotation">
            <img src="/quotationMarks.png" alt="quotation mark / кавычки" class="about-quotation__quotation">
            <p class="about-quotation-text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего
                интеллекта,
                но и выработать список рекомендаций для повышения этого показателя. </p>
            <img src="/quotationMarks.png" alt="quotation mark / кавычки"
                class="about-quotation__quotation about-quotation__quotation_down">
        </div>
        <div class="about-advice">
            <div class="about-advice__text">
                Также по результатам теста
                <strong class="about-advice__strong">вы получите</strong> подробные <strong
                    class="about-advice__strong">советы</strong> по определению наиболее перспективной <strong
                    class="about-advice__strong">для вашего типа <span
                        class="about-advice__strong_low">интеллекта</span> сферы
                    деятельности</strong>,
                которая принесет вам скорейший финансовый результат.
            </div>
            <div class="about-advice__img">
                <img src="/325-01.jpg" alt="полушария головного мозга как логическое и творческое.">
                <div class="about-advice__btn">
                    <ThisBtn text="пройти тест" @click="goTest" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ThisBtn from './UI/ThisBtn.vue';
import { useRouter } from 'vue-router';

const route = useRouter();
const goTest = () => route.push('/test')
</script>

<style scoped>
.about-quotation {
    background-image: url(/imageAbout.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;
}

.about-quotation__quotation {
    width: 23px;
    height: 22px;
    position: absolute;
    left: 24px;
    top: 10%;
}

.about-quotation__quotation_down {
    transform: rotate(-180deg);
    left: 85%;
    top: 85%;
}

.about-quotation-text {
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: white;
    padding: 80px 36px;
    width: 100vw;
    background: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%);
}

.about-advice__text {
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    padding: 38px 11px;
}

.about-advice__strong {
    text-transform: uppercase;
}

.about-advice__strong_low {
    text-transform: lowercase;
}

.about-advice__img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>