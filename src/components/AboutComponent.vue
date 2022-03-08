<template>
    <section class="about" id="about">
        <div class="about-quotation">
            <img src="/quotationMarks.png" alt="quotation mark / кавычки" class="about-quotation__quotation">
            <p class="about-quotation__text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего
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
            </div>
            <div class="about-advice__btn">
                <ThisBtn text="пройти тест" @click="goTest" />
            </div>
        </div>
        <div class="about-ad">
            <div class="about-ad__text">Прохождение теста займет у вас не <b class="attention">более 12 минут</b>, а его
                <b>результаты</b> вы сможете
                <b class="attention">использовать всю жизнь.</b>
            </div>
            <div class="about-ad__advertisement">
                Профессиональная интерпретация и детально <strong>проработанные рекомендации</strong> позволят вам качественно <strong>изменить
                все аспекты своей жизни:</strong> от финансового до любовного.
            </div>
            <div class="about-ad__btn">
                <ThisBtn text="пройти тест" transparent />
            </div>
            <div class="about-ad__footer">
            	&copy; 2019
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

.about-quotation__text {
    font-family: Yeseva One;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: white;
    padding: 80px 36px;
    background: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%);
}

.about-advice {
    background-color: white;
}

.about-advice__text {
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
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

.about-advice__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 40px;
}

.about-ad {
    background-image: url('/rain_bk2.jpg');
    padding: 0 12px;
}

.about-ad__text {
    color: white;
    padding: 56px 51px 0 14px;
    font-family: Merriweather;
    font-style: normal;
    font-weight: normal;
    font-size: 1.07rem;
    line-height: 20px;
    letter-spacing: 0.05em;
    margin-bottom: 15px;
}

.about-ad__advertisement {
    background: rgba(243, 243, 242, 0.8);
    border-radius: 20px;
    font-family: Merriweather;
    font-style: normal;
    font-weight: normal;
    font-size: 1,1rem;
    line-height: 23px;
    letter-spacing: 0.05em;
    padding: 29px 15px 31px 14px;
    margin-bottom: 33px;
}

.about-ad__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 52px;
}

.about-ad__footer {
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 0,7rem;
}
</style>