<template>
  <h1>Iteration 4- Bonus</h1>
  <h2>Change the background color of an element when pressing a button</h2>


  <div class="box" :class="colorBase ? 'is-ok' : 'is-false'">
    <h3>Cambio de color</h3>
    <button @click="changeColor()"> Switch the color </button>
  </div>
  
</template>

<script setup>
import { ref } from "vue";


const colorBase = ref(false);
const changeColor = () => {
  colorBase.value = !colorBase.value
};

</script>

<style scoped>

.box {
  width: 200px;
  height: 80px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.box button {
  border: 0;
}

.is-ok{
  background-color: greenyellow;
}

.is-false{
  background-color: red;
}

</style>