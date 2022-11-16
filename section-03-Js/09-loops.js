
console.log("........LOOPS | BUCLES........");
// es una secuencia de instrucciónes que se repiten( un num predetermminado de veces) hasta que nos encontramos con una condicion especifica( y no tener que estar escribiendo la misma acción X num de veces). Significa pues... repite este codigo hasta que esta condición sea true.

// // siguientes tipos:
// // JS-- FOR LOOP 

//Syntax:
    //  for (expresionInicial, condicion, 3-actualizaciónDeExpresion) {
    //     body del bucle
    // }

// Breakdown --- PASO A PASO:
// 1. La expresiónInicial inicializa/declara variables y se ejecuta sólo una vez.
// 2. Se evalúa la condición.
// 2.a Si la condición es falsa, el bucle for se termina.
// 2.b Si la condición es verdadera, se ejecuta el bloque de código dentro del bucle for.
// 3. La expresión de actualización actualiza el valor de la expresión inicial cuando la condición es verdadera.
// 4. La condición se evalúa de nuevo. Este proceso continúa hasta que la condición es falsa.


// // for loop ejemplo simple
// PROGRAMA PARA IMPRIMIR 5 VECES UN STRING EN CONSOLA
// variable que usaremos como numero para iterar
const forLoopExample = 10;
// bucleamos con for loop - desde 1 = 1 hasta 10 [i === index - ""]
// Expresion inicial = let i = 1
// condicion = i <= forLoopExample
// actualizacion de expresion = i++
 for (let i = 1; i <= forLoopExample; i++){
     console.log("Js is legit -for loop")
 }

 // for loop- array example- Fav Cities
 const cities = ["Girona", "Tarifa", "Brujas", "Lisbon"];
 for (let i = 0; i < cities.length; i++){
     console.log(`${cities[i]}`)
 }

 // FOR LOOP - MIXED ARRAY [polimorfismo, es decir, tratar la entrada de una función independientemente de los tipos que se le pasen.]

const remixArray = ["Platano", 8, true, "Verde", "101", 1992];
function sum(arrayProperty) {
    let mixedSum = 0;
    for (let i = 0; i < remixArray.length; i++){
     if (typeof arrayProperty[i]==="string"){
         str = arrayProperty[i].split("");
         for (let i = 0; i > str.length; i++){
             mixedSum += str[i].length;
         }
        } else if (arrayProperty[i] === true) {
            mixedSum += 1;
          } else {
            mixedSum += arrayProperty[i];
          }
        }
        return mixedSum;
      }
      console.log("Sum of a mixed array:");
console.log(sum(mixedArray));
      
//FOR LOOP - ARRAY DE OBJETOS - CASO MAS REAL
const data = [
    { name: "Diego", age: 30, group: "A" },
    { name: "Jarko", age: 25, group: "B" },
    { name: "Aleix", age: 20, group: "A" },
    { name: "Marcos", age: 15, group: "C" },
    { name: "Octavio", age: 25, group: "B" },
  ];
  for (let i = 0; i < data.length; i++) {
    console.log(`. ${data[i].age}`);
  }

// JS- while loop

//Syntax:
    // while (condition){
    // body bucle while
    // } 
//Breakdown:
// 1. Un bucle while evalúa la condición dentro del paréntesis().
// 2. Si la condición es verdadera, se ejecuta el código dentro del body del bucle while.
// 3. La condición se evalúa de nuevo.
// 4. Este proceso continúa hasta que la condición es falsa.
// 5. Cuando la condición es falsa, el bucle se detiene.



// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
const act1 = ["Platano", 8, true, "Verde", "101", 1992]
for (let i = 0; i < act1.length; i++){
    console.log(typeof (act1[i]));
}

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").
console.log(".......................")

const famous = ["Raphael", "Michelangelo", "Donatello", "Leonardo"];
for (let i = 0; i < famous.length; i++){
    console.log(`${famous[i]} is so famous, and he loves pizza.`)
}
