<template>
    <HomeComponent />
    {{ showAbout }}
    {{ count }}
    <section v-if="store.state.showAboutPage" class="about">
            <AboutComponent />
    </section>
</template>

<script setup>
import HomeComponent from '@/components/HomeComponent.vue';
import { useStore } from 'vuex'
import AboutComponent from '../components/AboutComponent.vue';

const store = useStore();
</script>
