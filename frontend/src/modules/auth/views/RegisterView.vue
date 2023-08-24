<script setup>
import { ref } from "vue";

import { vMaska } from "maska"
const options = {
  mask: 'HHHHHH', reversed: false, eager: true,
  tokens: { H: { pattern: /[0-9a-fA-F]/, uppercase: true } }
};
const myValue = ref('');
</script>

<template>
  <v-text-field v-maska:[options] v-model="myValue" label="R$" />
</template>
