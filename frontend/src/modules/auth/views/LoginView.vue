<script setup>
import useUsersStore from '@/stores/UserStore.js'
const userStore = useUsersStore()
</script>

<template>
  <main>
    <h1>Login</h1>
    <input type="mail" label="Email" />
    <input type="password" label="Senha" />
    <button @click="userStore.authenticate('larissa', '123')">Login</button>
  </main>
</template>

<style scoped></style>
