<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
</script>

<template>
  <header>
    <header-component />
    <menu-component />
  </header>
  <router-view />
  <footer>
    <footer-component />
  </footer>
</template>

<style>

</style>
