// User drinks alcohol: 

// My favorite book is: ""

// const bio = {
//     firstName: "Georgina",
//     lastName: "Soley",
//     citiesILivedIn: ["Barberá del Vallés", "Ibiza", "Barcelona"],
//     age: 30,
//     dob: "4/11/1992",
//     drinkAlcohol: true,
// }

// console.log(
//    " User drinks alcohol:" ,bio.drinkAlcohol
// );

const book = [
    {
        bookName: "The Alchemist",
        genre: ["Grama", "Aventura", "Misión"],
        autor: "Paulo Coelho",
        year: 1988 ,
        isbn: "9788408052944",
    },
    {
        bookName: "El caballero de la armadura oxidada",
        genre: ["Crecimiento", "Fiction","Fantasy"],
        autor: "Robert Fisher",
        year: 1987 ,
        isbn: "9788475843070",
    },
    {
        bookName: "The little Prince",
        genre: ["Fable", "Fantasy"],
        autor: "Antoine de Saint-Exupéry",
        year: 1943 ,
        isbn: "978-1-85326-158-9",
    }
]

console.log(`My favorite book is: ${book[0].bookName}`)