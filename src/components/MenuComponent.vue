<template>
    <menu class="menu">
        <div class="menu-cross" @click="$emit('onChange')">
            <div class="menu-cross__line menu-cross__line_left"></div>
            <div class="menu-cross__line menu-cross__line_right"></div>
        </div>
        <nav class="menu-navigation">
            <ul class="list" @click="$emit('onChange')">
                <li class="list__link"><router-link to="/">ГЛАВНАЯ</router-link></li>
                <li class="list__link"><a href="/" @click.prevent="toAbout">ИНФОРМАЦИЯ О ТЕСТЕ</a></li>
                <li class="list__link"><router-link to="/test">ПРОЙТИ ТЕСТ</router-link></li>
            </ul>
        </nav>
    </menu>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

    const router = useRouter();
    const store = useStore();
    const toAbout = () => {
        router.push('/')
        store.commit('setShowAboutPage')
    }
</script>

<style scoped>
    .menu {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        overflow: hidden;
        background-color: var(--header-color);
    }

    .list {
        padding: 110px 23px;
    }

    .list__link, .list__link > a {
        text-transform: uppercase;
        margin-bottom: 27px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        color: #fff;
        cursor: pointer;
    }

    .list__link:hover > a {
        color: #F4CE0C;
    }

    .menu-cross {
        padding: 18px 13px 0 0;
        position: relative;
        right: 13px;
    }

    .menu-cross__line {
        background-color: var(--attention-color);
        height: 39px;
        width: 3px;
        position: absolute;
        right: 13px;
    }

    .menu-cross__line_left {
        transform: rotate(45deg);
    }
    .menu-cross__line_right {
        transform: rotate(140deg);
    }
</style>