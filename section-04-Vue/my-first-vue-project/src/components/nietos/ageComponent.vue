<template>
    <h3>{{ age }}</h3>
  </template>
  
  <script setup>
  defineProps({
    age: {
      type: Number,
      default: 0,
    },
  });
  </script>