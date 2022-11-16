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