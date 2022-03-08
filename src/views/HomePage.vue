<template>
  <div class="home-page">
    <HomeComponent />
    <Transition name="fade" mode="out-in">
        <AboutComponent v-if="store.state.showAboutPage"/>
    </Transition>
  </div>
</template>

<script setup>
import HomeComponent from '@/components/HomeComponent.vue';
import { useStore } from 'vuex'
import AboutComponent from '../components/AboutComponent.vue';

const store = useStore();
</script>

<style scoped>
.home-page {
  background-image: url('/rain_bk2.jpg');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>