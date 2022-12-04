<!-- //// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas. -->
<template>
    <!-- <h1>Hello</h1> -->
    <div>
    <h3> Lista de peliculas que quisiera ver:</h3>
    <div v-for="(film, index) in myWatchlist" :key="index">
        <h1>{{film.title}}</h1>
        <h2>{{film.year}}</h2>
    <ul>
        <li v-for="(streaming, index) in myWatchList.whereToWatch" :key="index">{{streaming}}</li>
    </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive,computed } from "vue"
const myWatchlist = ref([
    {
        title:"muerte en el nilo",
        year: 2022,
        whereToWatch:["DisneyPlus", "HBO"],
    },
    {
        title:"Slumberland",
        year: 2022,
        whereToWatch:["Netflix", "HBO"],
    },
    {
        title:"Birdman",
        year: 2014,
        whereToWatch:["HBO","DisneyPlus", "Netflix", "HBO"],
    },
    {
        title:"The good nurse",
        year: 2022,
        whereToWatch:["Netflix", "HBO"],
    },
])

</script>

<style>

</style>