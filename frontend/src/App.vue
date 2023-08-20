<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <Header></Header>
  <NavBar></NavBar>
  <RouterView />
</template>

<style scoped></style>
