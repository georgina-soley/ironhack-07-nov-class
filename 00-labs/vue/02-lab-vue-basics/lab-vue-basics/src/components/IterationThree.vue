<template>
  <H1>Iteration 3</H1>
  <h2>Display a list of elements that are stored inside a component</h2>

  <ul>
    <li v-for="(component, index) in componentData" :key="index">
   {{index}} . {{component.title}} : {{component.content}} => {{component.description}}
    </li>
  </ul>

</template>

<script setup>
import{ref, reactive} from "vue"

const componentData = reactive([
    {
        title: "IterationOne" , 
        description: "Display the result of a Javascript operation",
        content: "Show in console",
    },
    {
        title: "IterationTwo" , 
        description: "Show an element only if a property is true",
        content: "Practicing conditionals",
    },
    {
        title: "IterationThree" , 
        description: "Display a list of elements",
        content: "v-for iteration",
    }
])

</script>

<style>

</style>