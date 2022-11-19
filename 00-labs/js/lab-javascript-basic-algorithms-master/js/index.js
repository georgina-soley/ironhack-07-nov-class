// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
console.log("Iteration 1:Names and Input");
let hacker1 = "Marcus"
// 1.2 Print "The driver's name is XXXX"
console.log(`The driver's name is: ${hacker1}`)
// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Dave"
// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is: ${hacker2}`)

console.log("--------------------------")
//

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
console.log("Iteration 2 | Condicional tradicional");
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else /*(hacker1.length == hacker2.length)*/ {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

console.log("--------------------------------"); 

console.log("Iteration 2 | Usando ternarios ( un 50%-50% )");

/*Explicación: los ternarios se usan como un condicional if -else si no pasa uno pasa el otro no hay más opción, así pues hay un primer bloque donde se condiciona el código (si el length de hacker1 es mayor que el el de hacker2 pasa [?] sino pasa [:])
*/

hacker1.length > hacker2.length
     ? console.log(
         `The driver has the longest name, it has ${hacker1.length} characters.`)
     : console.log(
         `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

/* La petición pedía 3 salidas la opción nombre 1 mas largo, nombre 2 más largo, los dos nombres iguales, se puede hacer un ternario de un ternario 

// Ternario Iteracion Correcta (3 condiciones)
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    )
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );

En este caso en el primer ternario pone si el length 1 es más largo ponemos? y en el : se ha puesto una condicional que si se cumple sale un nuevo ? sino el else final :
*/

console.log("---------------")
console.log("Iteration 3: Loops")


// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//creamos variable nombre vacía
let driversName = "";
// creamos loop donde la variable i va pasando por todo el largo de hacker1
for (let i = 0; i < hacker1.length; i++){
    //sumamos las [I]del hacker1.Lopasamos a mayusculas + le sumamos un espacio
    driversName += hacker1[i].toUpperCase() + " ";
} console.log(driversName)
// aqui haciendo pasos para cambiar poco a poco
console.log("---------------")
// este tiene demasiados pasos
const splittedName = hacker1.split('');
const stringWithSpaces = splittedName.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);
// lo mismo en menos Pasos MEJOR
//creamos variable que dentro va hacker1.pasadoaMayusculas.split(pasa el string a array de strings sin modificar el original).join(devuelve un array como string y no modifica el original, dentro de su parentesis se puede poner el espacio deseado en este caso o lo que queramos meter entre array/string y array/string)
let upperCaseName = hacker1.toUpperCase().split("").join(" ")
console.log(upperCaseName)

console.log("----------")
console.log("3.2 Print all the characters of the navigator's name, in reverse order")


let reverseName = ""
//este no lo se leer porque x.length -1?
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
} console.log(reverseName);

// esta forma sin loop usando methods
const reverseNameSimply = hacker2.split("").reverse().join("")
console.log(reverseNameSimply);

console.log("----------")
console.log("3.3 Depending on the lexicographic order of the strings, print:")

// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// condicional senicillo
if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// usando function
function ordenLexicoGrafico(string1, string2) {
    if (string1 > string2) {
        console.log("The driver's name goes first.")
    } else if (string1 < string2) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
}

ordenLexicoGrafico(hacker1, hacker2)
console.log("---------------------");
// BONUS 2
let text = "Amor,Roma";
let backWardsText = "";
// loop mira el largo del texto i lo va colocando al reves dentro de la variable backWardsText
for (let i = text.length - 1; i > 0; i--){
    backWardsText += text[i]
    //si el texto introducido.en cajabaja() es igual al backwardText.encajabaja consol.log dice que és un palindrome sino, nos dice que no lo es.
} if (text.toLowerCase() === backWardsText.toLowerCase()) {
    console.log(`${text} is a Palindrome.`);
} else {
    console.log("The string is not a palindrome");
}


// SANTI Way 
let phraseToCheck = "amor roma"
// aquí mediante method se hace el proceso del loop, este nuevo variable se crea con la frase original.pasada a array.invertida en orden.pasada/unida a string otra vez y luego hace la misma condicional.

let phraseToCheckPalindrome= phraseToCheck.split("").reverse().join("")

if (phraseToCheck.toLowerCase()==phraseToCheckPalindrome.toLocaleLowerCase()) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}
console.log(phraseToCheckPalindrome)
console.log(phraseToCheck)