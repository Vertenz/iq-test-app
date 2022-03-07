<template>
    <HomeComponent />
    {{ showAbout }}
    {{ count }}
    <Transition name="fade" mode="out-in"></Transition>
        <section v-if="store.state.showAboutPage" class="about">
            <AboutComponent />
        </section>
    <Transition />
</template>

<script setup>
import HomeComponent from '@/components/HomeComponent.vue';
import { useStore } from 'vuex'
import AboutComponent from '../components/AboutComponent.vue';

const store = useStore();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>