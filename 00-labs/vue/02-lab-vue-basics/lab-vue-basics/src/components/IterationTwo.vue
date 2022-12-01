<template>
    <h1>Iteration 2</h1>
    <h2>Show an element only if a particular property is set to true</h2>
    <p v-if="seeElement">I'm true so you can see me!</p>
    <p v-else>..</p>


  </template>
  
  <script setup>
  import { ref} from "vue";
    const seeElement = ref(true);
  </script>
  
  <style>
  
  </style>