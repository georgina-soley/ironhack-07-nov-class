<template>
    <h3>{{ birthPlace }}</h3>
  </template>
  
  <script setup>
  defineProps({
   birthPlace: {
      type: String,
    },
  });
  </script>