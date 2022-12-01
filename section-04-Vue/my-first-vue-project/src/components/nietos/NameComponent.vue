<template>
    <h2>{{ name }}</h2>
  </template>
  
  <script setup>
  defineProps({
    name: {
      type: String,
      required: false,
      default: "Some Random Name dentro del nieto...",
    },
  });
  </script>