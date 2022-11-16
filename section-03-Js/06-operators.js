/* Que es un operador

en JS es un special symbol que nos ayuda a ejecutar operaciones

JS tipo de operadores:
-Assignament operator
arithmetic operator
comparison operators
logical operators
bitwise operators
string operator
other operator

-- Assignment Operators
*/
console.log("Assignment Operators");
console.table([
  {
    operator: "=",
    name: "Assignment operator",
    example: "a = 7; // 7",
  },
  {
    operator: "+=",
    name: "Addition operator",
    example: "a += 5; // a = a + 5",
  },
  {
    operator: "-=",
    name: "Subtraction Assignment",
    example: "a -= 2; // a = a - 2",
  },
  {
    operator: "*=",
    name: "Multiplication Assignment",
    example: "a *= 3; // a = a * 3",
  },
  {
    operator: "/=",
    name: "Division Assignment",
    example: "a /= 2; // a = a / 2",
  },
  {
    operator: "%=",
    name: "Remainder Assignment",
    example: "a %= 2; // a = a % 2",
  },
  {
    operator: "**=",
    name: "Exponentiation Assignment",
    example: "a **= 2; // a = a**2",
  },
]);



// 3 variables

// 1. que operador logico me permite que si num y str son equivalentes sean true.!
// 2. que operador nos permite saber si num y str no son iguales.
// 3. que num es una edad, el usuario ha metido un num equivalente a una eda como podemos saber si la edad es mayor que 18, menor que 18 o mayorQue o igual 18

let num
let str
// let obj  

num = 8;
str = "8";

console.log(num == str);
console.log(num === str);
console.log(num < 18);
console.log(num > 18);
console.log(num >= 18);

