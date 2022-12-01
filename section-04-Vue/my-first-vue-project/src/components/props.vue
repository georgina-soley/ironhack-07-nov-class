<template>
    <h1>My info (practica props)</h1>
    <h2>{{ name }}</h2>
    <h4>{{ age }}</h4>
    <h4>{{ birthPlace }}</h4>
    <h4>{{ currentLocation }}</h4>

    <h1>Con sus hijos y nietos</h1>
    <div>
        <NameComponent :name="name" />
        <ageComponent :age="age" />
        <BirthPlace :birthPlace="birthPlace" />
    </div>
  </template>
  
  <script setup>
import { ref, reactive } from "vue";
import BirthPlace from './nietos/BirthPlace.vue'
import NameComponent from './nietos/NameComponent.vue'
  import ageComponent from './nietos/ageComponent.vue'
  // Syntax inicial :)
  //defineProps({})
  defineProps({
    name: {
      type: String,
      required: false,
      default: "Some Random Name",
    },
    age: {
      type: Number,
      default: 0,
    },
    birthPlace: {
      type: String,
    },
    currentLocation: {
      type: String,
      required: true,
      default: "Barcelona, España",
    },
  });
  </script>
  
  <style scope>
  h1, h2, h4{
    color: beige;
  }
</style>