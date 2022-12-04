<!-- // Ejercicio de watchers
// Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida -->

<!-- //MONTAMOS WATCHER, MONITEROAMOS LA VARIABLE DE QUESTION y como trabajamos con un api, vamos a declarar una expresion que depende de las keywords async y await y dentro de esta expresion vamos a pasar un condiciional if ANIDADO que dentro del if, ejecutemos un tryCtach para conectarnos a la API y sacar una respuesta a la pregunta :)
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Pensando........ ya te respondo....";
    try {
      const response = await fetch("https://yesno.wtf/api");
      answer.value = (await response.json()).answer;
    } catch (error) {
      answer.value = `Hey, no me pude comunicar con la API, este error equivale a ${error}`;
    }
  }
});
watch(answer, (newVal, oldVal) => {
  console.log(
    `El valor antiguo de la respuesta fue ${oldVal} y el nuevo valor es ${newVal}`
  );
}); -->

<!-- crear JSOn + importarlo dentro el archivo que queremos -->
<!-- creamos las variables de la info que se modifica -->
<!-- hacemos un watcher en base al input  que hemos creado para la respuesta -->
<!-- hacemos las 3 posivilidades con condicional if(si) elsif(no) else(otracosa) -->
<template>
    <div>
    <h1>{{question}}</h1>
    <input type="text" maxlength="3" v-model="answer" />
    <button @click="submit"> Send answer</button>
    <p v-if="jsonResponse">{{jsonResponse}}</p>
    <img v-bind:src="jsonImage" alt="a gif"/>
    </div>
  
</template>

<script setup>
import { ref, watch, reactive, computed } from "vue";
import jsonAnswers from "./WatcherObject.JSON"

const question = ref("Do you like pizza?");
const answer = ref("");
const jsonResponse = ref("")
const jsonImage = ref("")
watch(answer, async (newAnswer) => {
  if (answer.value.toLocaleLowerCase()=== "yes") {
      jsonResponse.value = jsonAnswers[0].response
      jsonImage.value = jsonAnswers[0].image
    
  } else if (answer.value.toLocaleLowerCase() === "no") { 
    jsonResponse.value = jsonAnswers[1].response
    jsonImage.value = jsonAnswers[1].image
  }
  else {
    jsonResponse.value = jsonAnswers[2].response
    jsonImage.value = jsonAnswers[2].image
  }
});

</script>

<style>

</style>