<script setup>
import { useCounterStore } from '../stores';

const counter = useCounterStore()
</script>

<template>
  <main>
    <h1>Login</h1>
    {{ counter.count }}
    <form method="POST" action="/">
      <input type="mail" label="Email" />
      <input type="password" label="Senha" />
      <button>Login</button>
    </form>
  </main>
</template>


<style scoped></style>
