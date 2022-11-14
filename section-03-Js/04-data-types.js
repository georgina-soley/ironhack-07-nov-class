// data types

// Datos primitivos y noPrimitivos

// primitivos = valor tiene relación 1 a 1 6 tipos
//     - numeros
//     - strins 
//     - booleans
//     - null 
//     - undefined
//     - symbols(garantizados como unico)

// #numeros
// console.log(9)
// console.log(8.5)
// NaN === not a Number
// let f = "hi";
// console.log(8 / f); // NaN
console.log(12)

// #Strings
// El texto va entre comas, puede ir dobles o single quote ,podemos poner dentro un numero pero se parsea como string ya que esta entre comas
// console.log("Hello")
console.log ("Hello")

// #booleans TRUE || FALSE answer
// noPrimitivos= composición de datos primitivos serían los objetos o array
// Podemos parametizar en base al valor del boleano is trUE OR false, hecho o no hecho
console.log(true)
console.log(false)

// #null va asociado a doc vacio o ESTE POR ACABAR DE ENTENDER

// #undefined No definido... una variable tiene que estar lleno sino da error, definimos variables con esto porque nos interesa y ya luego se le da el valor.
let tr = undefined;

// #symbol asociado a palabra reservada dentro de JS Dato unico
let barcelona = Symbol("gracia");
console.log(typeof barcelona);
console.log(Symbol("borne") === Symbol("borne"))

// Datos noPrimitivos:
// - Array
// - Object

    //#array se inicilializa con []
console.log("This is my music")
console.table([
    "A-Trak",
    "Mark Ronson",
    "The Brothers Macklovitch",
    "Prodigy",
    "Jamie xx",
    "Fatboy Slim"
])

// mezcla de typeof
// console.log([
//     "Daft Punk",
//     "Marc Rebillet",
//     8,
//     "Anderson Paak",
//     "Silk Sonic",
//     "A-Trak"
//     false,
//     "Mark Ronson"

// ])

// #Objetos parametizado por sintax particular
// se inicializa con {
//     key:"value"
// }

console.log("My Bio")
console.table({
    firstName: "Georgina",
    lastName: "Soley",
    occuppation: "Graphic Designer",
    age: 30,
    hobbies: ["Music", "Photography", "Culture", "Fitboxing", "Sleep"]
    
})

// Ejemplo Array de objetos

const movies = ([
    {
        movie: "Seven",
        genre: ["neo-"],
        director: [],
        location: "",
        actors: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey", "Gwyneth Paltrow"],
        year: ,
    },
    {
        movie: "Les Miserables",
        genre: ["Musical", "Drama",],
        director: [],
        location: "",
        actors: ["L. Dicaprio", "Tom Hardy", "Marion Cotillard", "Cillian Murphy"]
        year: 
    },
    
    {
        movie: "Inception",
        genre: ["Action", "Drama", "Sci-fi"],
        director: ["Christopher Nolan"],
        location: ["Los Angeles", "London", "Japan", "Morocco"],
        actors: ["L. Dicaprio", "Tom Hardy", "Marion Cotillard", "Cillian Murphy"],
        year:2010,
    },
])
console.log(
    "my favorite actor of Seven movie is " + movies[0].actors[1]);

console.log(`My fav actor of Seven is ${movies[0].actors[1]});