// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
console.log("Iteration 1");
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
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`);
}

// console.log("--------------------------------"); ESTO NO ME SALE BIEN error linia 34

// console.log("Iteration 2 | Usando ternarios ( un 50%-50% )");

// hacker1.length > hacker2.length
//     ? console.log(
//         `The driver has the longest name, it has ${hacker1.length} characters.`);
//     : console.log(
//         `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// Aqui con un loop... pero MAL


for (let i = 0; i < hacker1.length; i++){
    console.log(`${hacker1.toUpperCase().split("")}`)
}

console.log("---------------")
let driversName = "";
for (let i = 0; i < hacker1.length; i++){
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
let upperCaseName = hacker1.toUpperCase().split("").join(" ")
console.log(upperCaseName)

console.log("----------")

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
} console.log(reverseName);

// esta forma sin loop usando methods
const reverseNameSimply = hacker2.split("").reverse().join("")
console.log(reverseNameSimply);

// 3.3 Depending on the lexicographic order of the strings, print:
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

for (let i = text.length - 1; i > 0; i--){
    backWardsText +=text[i]
} if (text.toLowerCase() === backWardsText.toLowerCase()) {
    console.log(`${text} is a Palindrome.`)
}


// SANTI Way 
let phraseToCheck = "amor roma"
let phraseToCheckPalindrome= phraseToCheck.split("").reverse().join("")

if (phraseToCheck.toLowerCase()==phraseToCheckPalindrome.toLocaleLowerCase()) {
    console.log("THE STRING IS A PALINDROME");
} else {
    console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome)