<template>
    <div class="header">
        <div class="header-menu" @click="$emit('change')">
            <div class="header-menu__line"></div>
            <div class="header-menu__line"></div>
            <div class="header-menu__line"></div>
        </div>
        <div class="heder-title" v-if="props.text">
            <div class="header-logo">
                <img src="/rain_bk3.jpg" alt="iq test">
            </div>
            <div class="header-text">
                <h2 class="header-text__h2">{{$props.text}}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String
})

const emit = defineEmits('change')
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        background-color: var(--header-color);
    }
    
    .header-menu {
        padding: 17px 0 13px 15px;
    }
    .header-menu:hover > .header-menu__line {
        background-color: var(--attention-color);
    }
    .header-menu__line {
        width: 24px;
        height: 2.67px;
        background-color: #696969;
        margin-bottom: 4px;
        transition: 1s;
    }

    .header-text__h2 {
        color: var(--attention-color);
        text-transform: uppercase;
    }
</style>