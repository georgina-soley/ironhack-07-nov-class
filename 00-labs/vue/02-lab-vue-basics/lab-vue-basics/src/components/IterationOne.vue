<template>
  <h1>Iteration 1</h1> 
  <h2> Display the result of a Javascript operation in a component's HTML</h2> 
  <br>
<!-- // Operación matematica dentro del template -->
  <h4> Operación directa en el template</h4>
  <h3>{{ 2 + 2}}</h3> 
  <h3>{{num1}} + {{num2}} = {{num1 + num2}}</h3>
  <br>
  <h4> Operación directa en el template</h4>
  <h3> {{operationFunction()}}</h3>
  
</template>

<script setup>
import { ref } from "vue";
const num1 = ref(4)
const num2 = ref(5)

const operationFunction = () => {
  return " Hey you! This is a operation 2+2=4"
}
</script>

<style>

</style>