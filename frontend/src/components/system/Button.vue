<script setup>
import { defineProps } from 'vue'

const props = defineProps({ text: String, url: String })
</script>

<template>
  <a :href="url">
    <button>{{ text }}</button>
  </a>
</template>

<style scoped></style>
