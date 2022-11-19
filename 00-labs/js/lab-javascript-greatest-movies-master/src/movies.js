
// import { movies } from "../src/data.js";
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

console.log("Iteration 1: All directors? - Get the array of all directors.");
console.log("-------------------");

function getAllDirectors(moviesArray) { 
// Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
const rawList = moviesArray.map((movie) => movie.director);
// usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
const cleanList = rawList.filter(
  (director, numeroDePocisionDirectorEnElArray) =>
    rawList.indexOf(director) === numeroDePocisionDirectorEnElArray
);
// return la variable que queremos usar :)
return cleanList;
}

console.log("Iteration 2:How many drama movies did STEVEN SPIELBERG direct?");
console.log("-------------------");


function howManyMovies(moviesArray) {
     let result = 0;
     moviesArray.forEach(movie => {
         //en cada pelicula del array que ponemos en parametro.genero si incluye "Drama" y el parametro.director es steven spielber se suma
         if (movie.genre.includes("Drama")) {
             if (movie.director === "Steven Spielberg") result++
         }
     });
   
      if (moviesArray.length === 0) result = 0;
    return result;

// const dramaMovies = moviesArray.filter((movie)=>movie.director ==="Steven Spielberg" && movie.genre.includes('Drama'))


    //return dramaMovies;

} console.table(howManyMovies(movies))


console.log("Iteration 3: All scores average with 2 decimals");
console.log("-------------------");

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;  
    let result = 0;
    moviesArray.forEach(movie => {
        // si hay score sumarlo al result
      if(movie.score) result += movie.score
    })
 // parseFloat lee un string y devuelve un numero ( lo usamos para asegurarnos). Calculamos el result dividido entre la cantidad de pelis del array (para tener la media) y usamos .toFixed(2) convierte el numero en string y redondea a especifico numero de decimales, (los que se pongan dentro de los parentesis)
    return parseFloat((result/moviesArray.length).toFixed(2));
}
console.log(typeof scoresAverage(movies))

console.log("Iteration 4: Drama movies - Get the average of Drama Movies");
console.log("-------------------");

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) return 0;               
    let result = 0;
    let dramaMovies = 0;
    moviesArray.forEach(movie => {
        if (movie.score && movie.genre.includes("Drama")) {
            result += movie.score
            dramaMovies++ 
        }
    })
    
    if (result === 0 && dramaMovies === 0) return 0;
    else return parseFloat((result/dramaMovies).toFixed(2));

    /* const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    const dramaMovies2 = moviesArray.filter(movie => {
        if (movie.genre.includes('Drama')) return movie;
    });

    return scoresAverage(dramaMovies); */

}

console.log(dramaMoviesScore(movies));

console.log("Iteration 5: Order by year, ascending");
console.log("-------------------");

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   
    //const copyOfMovies = moviesArray.map((movie) => movie);
    const copyofMoviesSpread = [...moviesArray];
// Sortear y comparar con STRINGS .methode que se llama localeCompare()
copyofMoviesSpread.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title);
  });
  return copyofMoviesSpread;
} console.table(orderByYear(movies))

 
// function orderByYearSanti(moviesArray) {
    //crea nuevo array
//     let newArray = [];
// nuevoo array es  el parametro que se introduce. con el methode .sort( que ordena los elementos y dentro del parentesi se pone como en este caso ejemplo a, b función a.year - b.year)
//     newArray = moviesArray.sort((a, b) => a.year - b.year);
//     return newArray;
//   }
    
console.log("Iteration 6: Order by title and print the first 20 titles");
console.log("-------------------");
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // creamos un nuevo array sacado del array original donde de las peliculas se saque el título (con el methode.map(se crea nuevo array + se ejecuta una función que se pone función en los parentesis)), con el methode.sort(ordenamos) y con el methode.slice devuelve una copia de la porción seleccionada del array, en este cas empezando por el 0 y llegando al 20
    const alphabetOrder = (moviesArray.map((movie) => movie.title).sort().slice(0, 20));
  
    return alphabetOrder
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

