
// import { movies } from "../src/data.js";
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const getAllDirectors = (moviesArray) =>
function getAllDirectors(moviesArray) { 
// Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
const rawList = moviesArray.map((movie) => movie.director);
// usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
const cleanList = rawList.filter(
  (director, numeroDePocisionDirectorEnElArray) =>
    rawList.indexOf(director) === numeroDePocisionDirectorEnElArray
);
// returnamos la variable que queremos usar :)
return cleanList;
}
// console.log(getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // let result = 0;
    // moviesArray.forEach(movie => {
    //     // console.log(movie.genre.includes("Drama"))
    //     if (movie.genre.includes("Drama")) {
    //         if (movie.director === "Steven Spielberg") result++
    //     }
    // });
   
    // if (moviesArray.length === 0) result = 0;
    // return result;
const dramaMovies = moviesArray.filter((movie)=>movie.director ==="Steven Spielberg" && movie.genre.includes('Drama'))


    return dramaMovies;

} console.table(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;  
    let result = 0;
    moviesArray.forEach(movie => {
      if(movie.score) result += movie.score
    })

    return parseFloat((result/moviesArray.length).toFixed(2));
}
console.log(typeof scoresAverage(movies))

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

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //     const year = moviesArray.filter((movie) => movie.year);
    //     let orderByYear = year.sort((a,b)=>(a>b?1:-1))


    //     return year
    // } console.log(orderByYear(movies))
    
    const copyOfMovies = moviesArray.map((movie) => movie);

    copyOfMovies.sort((a, n) => {
        if (a.year > b.year) return a.year - b.year;
        if (a.year < b.year) return a.year - b.year;
        else return a.title.localCompare(b.tite);
    })
    return copyOfMovies
} console.table(orderByYear(movies))
    
    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabetOrder = moviesArray.filter((movie) => movie.title);
    moviesArray.forEach(movie => {
        if (movie.title !== "") {
            
        }
    })
    return alphabetOrder
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

