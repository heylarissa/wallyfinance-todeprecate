<script setup>
import useUsersStore from '@/stores/UserStore.js'
const userStore = useUsersStore()
</script>

<template>
  <main>
    <h1>Login</h1>
    <form method="POST" action="/">
      <input type="mail" label="Email" />
      <input type="password" label="Senha" />
      <button @click="userStore.authenticate()">Login</button>
    </form>
  </main>
</template>

<style scoped></style>
