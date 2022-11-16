// JS Condicionales:
// if
// else...if
// else


// 1-- IF STATMENT

/* Syntax: 
    if (that condition is TRUE) {
        body del condicional// acción si lo que hay entre parentesi es true la acción que hay aquí dentro se ejecuta
    }
*/

// Ejemplo si un numero es mayor que 0 o positivo (solo estamos ejecutando una condicion):
    // const number = prompt("Enter a number ")
    // if (number > 0) {
    //     console.log("Este numero es positivo");
    // }

// ----------------------------------------------

// // IF ELSE stetment (si no es uno... salta al otro)

/*Syntax:
    if (this condition is true) {
        va a ejecutarse esto... pero si es falsa pasa a ELSE
    } else {
        esta no necesita condición puesto que saltara siempre que no se cumpla la condición anterior.
    }
*/

// Ejemplo si un num es positivo (mayor que 0) o en su defecto es negativo ( dando a falso en la condicion de if)

    // if (number > 0){
    //     console.log ("Este numero es positivo")
    // }else {
    //     console.log("Este numero es negativo")
    // }

// ELSE IF contitions
// si if tiene una condición con distintas opciones usamos else if para dar las distintas opciones al IF falso... 

/* Syntax:
    if (conditional){
    body condiional if ( si este no se cumple pasa al siguiente opcion)
    } else if ( condition){
    igual que en el primero si se cumple se acciona, si no se pasa al siguiente
    }else if (condition){
    se pueden crear tantas opciones como sea necesarias y se cierra con un else sin condición, puede considerarse como un "back of code" 
    } else{ ES OPCIONAL
    esta es la ultima opción cuando ninguna de las otras ha sido cierta
    }
 */
//     if (number >= 0) {
//         console.log(" este num es positivo")
//     } else if (number === 2) {
//         console.log("este num es igual a 2");
//     } else if (number === 4) {
//         console.log("Este num es igual a 4")
//     }


// # EJEMPLO ELSE IF
// parseInt( da posivilidad de que un string sea un numero... esto asegura que lo pase de string a num y si no es un num da error)

const drinkingAge = parseInt(prompt("Want to buy beer? - let me see your ID"))

if (drinkingAge < 18) {
    console.log("I am sorry, you are too young to be buyingg alcohol, drink more water it would be better ;)");
} else if (drinkingAge === 18) {
    console.log("You just turned 18, what type of beer would you like to enjoy?");
} else if (drinkingAge >= 18 && drinkingAge < 40) {
    console.log("Enjoy your night, but be careful")
} else if (drinkingAge >=40){
console.log("Enjoy your night,remember that the hangover is real")
}

//EXERCISE - CINEMA

const visitorAge = parseInt(prompt("Want to come to the cinema? - let me know your age"))

if (visitorAge <= 5) {
    console.log("Lucky you, you come for free!")
} else if (visitorAge <= 15) {
    console.log("You have 20% of discount!")
} else if (visitorAge > 15 || visitorAge <= 60) {
    console.log("Pay XX$, but don't worry every day you are closer to have a discount ")
} else if (visitorAge > 60) {
    console.log("You have 40% of discount, enjoy!")
}
//----------------------------------
// NESTED CONDITIONALS || CONDICIONALES ANIDADAS ( podemos meter condicionales dentro de condicionales)

const number = prompt("Enter a number:   ");

//si el numero que entra es mayor o igual a cero entramos en la condicion anidada
if (number >= 0) {
    // si el num es igual a 0 pasa el if
    if (number === 0) {
      console.log("This input is = to 0");
      //si el nimero es igual o superior a uno Y es menor o igual a 3 pasa else if  
  } else if (number >= 1 && number <= 3) {
      console.log("Your number is between 1 & 3");
      //si no es ninguna de las condiciones anteriores dentro del primer if es decir que superior a 3 pasa else  
   } else {
     console.log("Your number is a positive number bigger than 0");
    }
    // si el numero es negativo ( no es superior a 0) da else
 } else {
   console.log("You entered a negative number");
 }

//----------------------
// Reduciendo un poco de codigo
// Si tus condicionales son 50/50 (if else) puedes optar por una syntaxis mas limpias sin tener que agregar las {}

 /*ESTO:
    if (number > 0) {
        // ejecucion de este bloque de codigo
    } else {
        // ejecucion de este bloque de codigo
    }
 PASA A ESTO
    if (number > 0) // ejecucion de este bloque de codigo
    else  // ejecucion de este bloque de codigo
*/

//Ejemplo de reduccion
    // const number2 = prompt("Enter a number between 1-2");

    // if (number2 == 1) console.log("You chose 1");
    // else console.log("You chose 2");

//-------------------------------------------------------

//  JS  Switch statment: 
// evalúa una expresión, compara el valor de la expressión con las clausulas de casos y ejecuta las instrucciónes asociadas a cada caso

/* Syntax:
//1-// switch (variable / expression) {
//2-// case value1:
        // ejecucion de este bloque de codigo 1
        break;

//3-// case value2:
        // ejecucion de este bloque de codigo 2
        break;

      case valueN:
        // ejecucion de este bloque de codigo N
        break;

//4-// default:
        // ejecucion de este bloque de codigo default
      }
*/
/* 1-EVALUA la Variable/ expressión entre parentesis 
   2- si el resultado de la expresion es igual al case XX (value1), se ejecuta este (sino lo salta i va a comprobar si hace match con el siguiente)
   3-si el resultado de la expresion es igual al case XX (value2), se ejecuta este (sino lo salta i va a comprobar si hace match con el siguiente)
   4- SI NINGUN CASO COINCIDE se ejecuta el default ( por defecto, es opcional de poner)
   // IMPORTANTE:
        // - El statement "break" es opcional.Si se encuentra el statement break, El switch statement switch termina.
        // - Si no se utiliza el statement break, también se ejecutan los casos posteriores al caso coincidente.
 */

// EJEMPLO SENCILLO -sin type checking.

let switchExample1 = 2

switch (switchExample1) {
    case 1:
        switchExample1 ="one"
        break;
    case 2:
        switchExample1 = "dos"
        break;
    default:
        switchExample1 ="not found"
        break;
}
console.log(`the value is ${switchExample1}`);

//------------------------------------------
// ejemplo Sencillo - con type checking
// el "switch" statment comprueba los casos estrictamente ( deben ser del mismo type (number-number/string-string)con el rsultado de la expresión)

let switchExample2 = 1;
switch (switchExample2) {
    case "1":
        switchExample2 = 1;
        break;
    // mostrará este porque lo que introducimos es un numero no un string
    case 1:
        switchExample2 = "one"
        break;
    case 2:
        switchExample2 = "two"
        break;
    default:
        switchExample2 = "not found"
        break;
}
console.log(`the value is ${switchExample2}`)

//-----------------------------------------
// Ejemplo complejo - SWiTCH - CALCULADORA

// inicializamos una variable para poder asignarle un valor luego (operacion matematica)
let result;
 // Input del operando que va a usar el usuario (x, +, -, /)
const operator = prompt("Enter operator (either +, -, * or /):")

// // Variables para recibir los numeros(inputs) del usuario
const calcNum1 = parseFloat(prompt("Enter num 1"))
const calcNum2 = parseFloat(prompt("Enter num 2"))

switch (operator) {
    case "+":
        result = calcNum1 + calcNum2
        console.log(`${calcNum1} + ${calcNum2} = ${result}`)
        break;
    case "-":
        result = calcNum1 - calcNum2
        console.log(`${calcNum1} - ${calcNum2} = ${result}`)
        break;
    case "*":
        result = calcNum1 * calcNum2
        console.log(`${calcNum1} * ${calcNum2} = ${result}`)
        break;
    case "/":
        result = calcNum1 / calcNum2
        console.log(`${calcNum1} / ${calcNum2} = ${result}`)
        break;
    default:
        console.log("sorry, this operator is not valid, try again!")
}

console.log("--------------")
console.log("SWITCH - Multiple Cases");

// Ejemplo complejo - SWITCH - COUNTRY CONTINET FINDER - CASOS MULTIPLES

const countryOfOrigin = prompt("What country where you born?").toLowerCase();
switch (countryOfOrigin/*podria haber puesto el .toLowerCase() aquí dentro */) {
  case "venezuela":
  case "colombia":
  case "ecuador":
  case "brazil":
    alert(`Cool, ${countryOfOrigin} is located in South America`);
    console.log(`Cool, ${countryOfOrigin} is located in South America`);
    break;
  case "spain":
  case "france":
  case "portugal":
  case "andorra":
    alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
    console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
    break;
  default:
    alert("you are not from this planet! go Invade somewhere else...");
    console.log("you are not from this planet! go Invade somewhere else...");
}