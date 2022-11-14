// reserved keywords para constantes

// var x;
// let y;
//  en este caso hemos declarado las variables x & y pero estan vacías porque no se les ha asignado ninguna info así que estan vacías

// y = "The Prodigy"
// console.log(`the new value of y:${y}`);

// y= "Bruno Mars"
// console.log(`the new value of this variable y:${y}`);

//  Condiciones de nomenclatura que podemos referenciar para aclarar dudas: los namings pueden ser["letras", "barrabaja _", "underscore", "symbol $"] 
 
// correcto:
 
// let a = "hello"
// let _a = "hello"
// let $a = "hello"
 
// // incorrecto poner nombres variables con numeros, JS no los procesa correctamente

// // · JS is case -sensitive(diferencia mayuscula y minuscula)

// // · KEYWORDS NO ACEPTADAS
// // hay palabras que no se pueden usar para inicar variables puesto que son palabras reservadas...ex: - new (dará error)

// // ·siempre usar camelCase para la nomenclatura... esta tiene que ser clara y a poder ser explicativa

// // var - convention 
// // 1. esta manera de declarar variables está obsoleta, ya no se usa ya que tenemos let y const. Var se puede reasignar

// var firstName = "Georgina";
// console.log(firstName);

// // // Let- convention
// // 1 - se puede reasignar igual que el var

//     let favoriteFood = "Pizza";
// favoriteFood = "Croquetas"
    
// console.log(favoriteFood);

// CONST convention
// 1 una vez se inicializa no se puede reasignar como en los AuthenticatorAssertionResponse
// 2 - es la más moderna de URLSearchParams
// 3 - no se puede inicializar sin valor 

// ejemplos de guardar dayos en variables

// const myMessage = "Be water my friend";
// console.log(myMessage);

// const isTrue = false;
// console.log(isTrue);

// const movies = [
//     {
//         movie: "Seven",
//         genre: ["neo-"],
//         director: [],
//         location: "",
//         actors: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey", "Gwyneth Paltrow"],
//         year: ,
//     },
//     {
//         movie: "Les Miserables",
//         genre: ["Musical", "Drama",],
//         director: [],
//         location: "",
//         actors: ["L. Dicaprio", "Tom Hardy", "Marion Cotillard", "Cillian Murphy"]
//         year: 
//     },
    
//     {
//         movie: "Inception",
//         genre: ["Action", "Drama", "Sci-fi"],
//         director: ["Christopher Nolan"],
//         location: ["Los Angeles", "London", "Japan", "Morocco"],
//         actors: ["L. Dicaprio", "Tom Hardy", "Marion Cotillard", "Cillian Murphy"],
//         year:2010,
//     },
// ]

// console.log(
//     "my favorite actor of Seven movie is " + movies[0].actors[1]);



const bio = {
    firstName: "Georgina",
    lastName: "Soley",
    occuppation: "Graphic Designer",
    age: 30,
}
let hobbies = "la música"
console.log(`Hola mi nombre es ${bio.firstName} ${bio.lastName}, tengo ${bio.age} años y me gusta mucho ${hobbies}.`);

hobbies = " estar con mis amigos"
console.log(`Hola mi nombre es ${bio.firstName} ${bio.lastName}, tengo ${bio.age} años y me gusta mucho ${hobbies}.`);

hobbies = "viajar"
console.log(`Hola mi nombre es ${bio.firstName} ${bio.lastName}, tengo ${bio.age} años y me gusta mucho ${hobbies}.`);

hobbies = "ir a Fitboxing"
console.log(`Hola mi nombre es ${bio.firstName} ${bio.lastName}, tengo ${bio.age} años y me gusta mucho ${hobbies}.`);

hobbies = "dormir"
console.log(`Hola mi nombre es ${bio.firstName} ${bio.lastName}, tengo ${bio.age} años y me gusta mucho ${hobbies}.`);