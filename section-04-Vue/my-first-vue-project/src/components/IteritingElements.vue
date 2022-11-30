
<!-- // Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.
// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").
// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list. -->

<template>
    <h1> Iterating Elements Activities </h1> 
    <br>
    <div id="activity-1">
        <h2>My favorite movies</h2>
        <ol>
            <li v-for="(film, index) in favMovies" v-bind:key="index">
                {{index}} - {{film}}
            </li>
        </ol>
    </div>

    <div id="activity-2">
        <h2>My favorites...</h2>
        <ul>
            <li v-for="(value, respuesta) in myFavs" :key="respuesta">
                {{value}} - {{respuesta}}
            </li>
        </ul>
    </div>
  
    <div id="activity-3">
        <h2>My compis</h2>
        <ul>
            <li v-for="(student, index) in compis" :key="index">
                <div v-if="student.age >= 18">
                    <p>I can go for a few drinks with {{student.name}} after class</p>
                </div>
                <div v-else>
                    <p>{{student.name}} is still too young, they'll have to go home tonight</p>
                </div>
                <ul>
                    <li v-for="languaje in student.favoriteLanguages">
                        {{languaje}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</template>

<script setup>
import { ref, reactive } from "vue";

const favMovies = reactive([
    "Seven",
    "Oceans Eleven",
    "Dead Proof",
    "La vida es bella",
    "Inception",
])

const myFavs = reactive({
    favoriteFood: "Pizza",
    favoriteDrink: "White wine",
    favoriteSport: "Basketball",
    favoriteCountry: "Mexico",
    favoriteArrayMethod: "slice",
})

const compis = reactive([{
    name: "Berta",
    age: 33,
    favoriteLanguages: ["Catalá","HTML", "CSS"],
},
    {
    name: "Raphaela",
    age: 34,
    favoriteLanguages: ["Alemàn", "English","HTML", "CSS","JS"],
    
},   {
    name: "Jesús",
    age: 30,
    favoriteLanguages: ["Castellano", "Catalá","HTML", "CSS","JS"],
}
])


</script>

<style>

</style>

