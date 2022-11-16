let numbers = [2, 3, 4, 5]
// console.log("array inicial " + numbers)
// numbers.unshift(1)
// console.log("con el .unshift(1) "+ numbers)
// numbers.push("hasta el infinito y más allá")
// console.log("con el .push() " + numbers)

// console.log("activity")

// const newNumbers = (count1, count2) => {
//     console.log(`Array inicial es ${numbers}`)
//     numbers.unshift(1)
//     console.log("con el .unshift(1) " + numbers)
//     numbers.push("hasta el infinito y más allá")
//     console.log("con el .push() " + numbers)
// }

let random = ["Platano", 8, true, "Verde", "101", 1992]

const addFirstLast = (inicio, final) => {
    console.log(`Este es mi array inicial: ${random}`)
    random.unshift(inicio)
    console.log(`Este es el array con elemento añadido al inicio:${random}`)
    random.push(final)
    console.log(`Este es el array con elemento añadido al final:${random}`)
}

addFirstLast(0, "Caracol")


/ 11. find()
// Este método devuelve el valor del primer elemento de un array que supera la prueba en una función de comprobación.

// 12. findInIndex()
// Este método devuelve el índice del primer elemento de un array que supera la prueba en una función de comprobación.

// 13. indexOff()
// Este método devuelve el índice de la primera aparición del elemento especificado en la matriz, o -1 si no se encuentra.

// 14. fill()
// Este método rellena los elementos de un array con un valor estático y devuelve el array modificado.
// hay palabras reservadas en JS que podemos usar para construir... ejemplo new Array(4) con esto decimos quiero crear un nuevo array que tenga 4 posiciones

// 15. slice()
// Este método devuelve un nuevo array con los elementos especificados de inicio a fin.

// 16. reverse()
// Este método invierte un array en su lugar. El elemento en el último índice será el primero y el elemento en el índice 0 será el último.

// 17. push()
// Este método añade uno o más elementos al final del array y devuelve la nueva longitud del mismo.

// 18. pop()
// Este método elimina el último elemento del final del array y devuelve ese elemento.

// 19. shift()
// Este método elimina el primer elemento al principio de una matriz y devuelve la nueva longitud de la misma.

// 20. unshift()
// Este método añade uno o más elementos al principio de una matriz y devuelve la nueva longitud de la misma.