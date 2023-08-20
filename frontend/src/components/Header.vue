<script setup>
import Logo from '@/components/system/Logo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <Logo></Logo>
    <!-- se logado
        // user photo
        // logout

    // se nao
        // Login
        // register-->
    <RouterLink to="/login">Login</RouterLink>
  </header>
</template>

<style scoped></style>
