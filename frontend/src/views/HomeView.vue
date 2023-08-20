<script setup>

import { useCounterStore } from '@/stores/index.js';

const store = useCounterStore()

store.count = 0


</script>

<template>
  <main>
    <h1>Home</h1>
    {{ store.count }}

    <button @click="store.increment">Incrementar</button>
  </main>
</template>
