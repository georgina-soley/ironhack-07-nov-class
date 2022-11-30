<template>
  <h1>Iteration 1</h1>
  <h2> Display the result of a Javascript operation in a component's HTML</h2>

  <h3>{{num1}} + {{num2}} = {{num1 + num2}}</h3>
</template>

<script setup>
import { ref } from "vue";
const num1 = ref(4)
const num2 = ref(5)
</script>

<style>

</style>