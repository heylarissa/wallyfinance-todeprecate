<script setup>
import Logo from '@/components/system/Logo.vue'
import { RouterLink } from 'vue-router'

import useUsersStore from '@/stores/UserStore.js'

const userStore = useUsersStore()
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

    {{ userStore.userData }}

    <RouterLink :v-show="!userStore.isAuthenticated" to="/login">Login</RouterLink>
  </header>
</template>

<style scoped>

</style>
