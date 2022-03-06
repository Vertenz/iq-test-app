<template>
    <header-component @change="setShowMenu"/>
    <Transition name="fade" mode="out-in">
          <menu-component @change="setShowMenu" v-if="showMenu"/>
    </Transition>
  <router-view />
  <footer>
    <footer-component />
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import { ref } from 'vue';

let showMenu = ref(false)

function setShowMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<style>
@import url(./assets/main.css);

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
