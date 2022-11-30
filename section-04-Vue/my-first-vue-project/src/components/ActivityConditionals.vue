<!-- // hay una forma rápida al escibir vue.. pero també es pot fer a má -->
<!-- Aquí el html -->

<!-- // CLASS EXCERCISE EXPLANATION
// Ejercicios Conditional Rendering
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro.
// Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!".
// Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript rodeo".
</script> -->
<template>
   <div id="activity-conditional1"> 
    <h1 v-if="reactiveBoolean.isTrue ===true">I'm showing up beacuse our reactive data is true!</h1>
    <h1 v-else>I'm the option anytime our reactive data cannot be read as true</h1>
   </div>

   <div id="activity-cpnditional-2">
    <p v-if="language === "HTML">Today we are learing {{language}}</p>
    <p v-if="language === "CSS">Today we are learing {{language}}</p>
    <p v-if="language === "JS">Today we are learing {{language}}</p>
    <p v-else>Today there's no class!</p>
   </div>

   <div id="activity-conditional-3">
    <h1>{{myInfo.name}}</h1>

   </div>


</template>
<!-- aquí javascript -->
<script setup>
import { ref, reactive } from "vue";



const reactiveBoolean = reactive({
    isTrue: true,
    isFalse: false,
});

const language = ref()

const myInfo = reactive({
    name: Georgina,
    age: 30,
    hasCodeBefore: false,
})

const show =ref(true)

</script>
<!-- aqui css -->
<style></style>