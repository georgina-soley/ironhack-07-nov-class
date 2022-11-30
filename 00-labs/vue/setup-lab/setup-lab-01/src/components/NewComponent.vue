<template>
   <H1>Hi! I'm Georgy Soley</H1>

   <img v-bind:src="photo.imagen" v-bind:alt="photo.altPhoto"> 

   <p>I'm {{userInfo.status}} {{userInfo.bootcamp[1]}}at {{place}}, we started on {{userInfo.start}} and we're going to learn diferent things as are {{userInfo.languages[1]}}, {{userInfo.languages[2]}}, {{userInfo.languages[3]}}, {{userInfo.languages[4]}} and more...</p> 
   <br>

   <button @click="sayHello">Say Hello</button>

</template>

<script setup>
import { ref, reactive } from "vue";

const userInfo = reactive({
    status: "studying",
    start: "7/11/2022",
    bootcamp: ["ui/ux", "front-end-dev", "back-end"],
    languages: ["HTML", "CSS", "JavaScript", "Vue"],
})

const photo = rreactive({
    imagen:"https://media-exp1.licdn.com/dms/image/C4E03AQG5PG4gBxSRaw/profile-displayphoto-shrink_800_800/0/1661807011967?e=2147483647&v=beta&t=CxjDf1MFT9bKoPhaYJFsZjamxgOOGjoLdHiaapfkzpU",
    altPhoto: "Thats me!"
})
const place = ref("Ironhack"); 

console.log(userInfo)

const sayHello = () => {

    console.log("Hello!")
};

</script>

<style></style>
