
<template>
    <p>Me llamo Georgina y estoy aprendiendo a programar</p>

    <p>{{georgy}}</p>
  

    <p>Me llamo {{userInfo.name}}, nací el {{userInfo.dob}} y tengo {{userInfo.age}}. Entre mis mejores planes siempre està {{userInfo.myHobbies[1]}}, {{userInfo.myHobbies[2]}} </p>
</template>

<script setup>


import { ref, reactive } from "vue";


const userInfo = reactive({
    name: "Georgina",
    age: 30,
    dob: "4/11/1992",
    myHobbies: ["escuhar música", "leer", "entrenar fitboxing", "viajar", "aprender"],
})

const film = ref ("seven")
const food = ref("pizza")
const numOfTimes =ref ("infinite")



</script>
<!-- aqui css -->
<style></style>

