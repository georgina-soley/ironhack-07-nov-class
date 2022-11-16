// funciones:

// una función es un bloque de código que realiza una tarea/acción específica.

// dividir un problema complejo en trozos más pequeños hace el programa más fácil de entender y reutilizable para otras resoluciones.

// JavaScript tinene ya funciones incorporadas (methods) como Math.sqrt() función para calcular la raíz cuadrada de un número.

//VENTAJAS DE USAR UNA FUNCIÓN:
    /*-Hace que el código sea reutilizable. Se puede declarar una vez y utilizar varias veces.
    - Hace que el programa sea más fácil ya que cada pequeña tarease divide en una función.
    -La función augmenta la legibilidad
    -El valor que se pasa al declarar una función (valor) se llama parámetro, Y cuando se invoca la unción el valor pasado se llama argumento*/

// DECLARANDO FUNCIONES
// SYNTAX:
    /*function nameOfFunction(parametro) {
    //function body
    }
    // para utilizar esa función hay que llamarla/invocarla
    invocation >> nameOfFunction(argumento)*/

//EJEMPLO 1 SIMPLE FUNCTION 
console.log("----------")
function greet() {
    console.log("Hola")
}
greet()

// EJEMPLO CON PARAMETROS
// Unpaámetro es un valor que se pasa al declarar una función.
console.log("Simple Function with Params:");
function greetWithParams(name) {
    console.log(`Hello ${name}`);
}
let userName = prompt("plase,enter your name: ")
greetWithParams(userName)

// -El valor que se pasa al declarar una función (valor) se llama parámetro, Y cuando se invoca la unción el valor pasado se llama argumento*/
//- ùeden haber tantos parametros como se indiquen

// Ejemplo  2
console.log("-------------------");
console.log("Simple Function With Two Params:");
function add(a, b) {
   console.log(`El total de esta suma es: ${a + b}`);
 }
add(20, 10);
//-------------------------------------------------------
// DECLARAR FUNCIONES CON RETURN
// - El return statement puede utilizarse para devolver el valor a una llamada a una función.
// - El return statement indica que la función ha terminado. Cualquier código después del return no se ejecuta.
// - Si no se devuelve nada, la función devuelve un valor indefinido.
// - Funciones tipo flecha que contengan las {} por defecto esperan el keyword return
// Ejemplo  3
console.log("Function With Two Params & Return Statement:");
// en esta función entran dos parametros a,b, el cuerpo de la función dice que devuelve a + b.
function addWithReturn(a, b) {
   return a + b;
}
// con estas variables se pidde al user que entre los dos numeros que són los parametros de la función
 let number1 = parseFloat(prompt("1er Numero: "));
 let number2 = parseFloat(prompt("2er Numero: "));
let result = addWithReturn(number1, number2);
 // ESTE ALERT ES COMO EL CONSOLE.LOG? or what?
 alert(`La suma de estos 2 nums es: ${result}`);

// JAVASCTIPT FUNCTIONS EXPRESSIONS ( QUIERE DECIR QUE ESTAMOS GUARDANDO FUNCIONES DENTRO DE VARIABLES )
// Ejemplo: programa para encontrar el cuadrado de un número
        let x = function (num) {
            return num * num;
        };
    console.log(x(4)) // !!no entiendo lo del doble parentesi!!
// se puede utilizar como valor de la variable para otras variables
let y = x(3);
console.log(y);

// - La variable x se utiliza para almacenar la función. Aquí la función es tratada como una expresión. Y la función se llama usando el nombre de la variable. Así pues si la función x accióna/retorna (num*num) el consol.log(y) devolverá 9 porque x(3)= 3x3

// - Tambien se llama una función anónima ya que no tiene nombre.

//----------------------------------------------------
//ARROW ACTIONS 
//Es una forma más nueva y limpia de crear una función
// Esta función modo antiguo/tradicional
    let exampleFunc = function (x, y) {
        return x * y;
    };
// puede escribirse de esta manera utilizando funciones de flecha (2 formas distitas)
    let exampleArrowFunc1 = (x, y) => x * y;
    let exampleArrowFunc2 = (x, y) => {
    return x * y;
    };  
console.log(exampleArrowFunc2(2, 2));
    
//SYNTAX:
let myFunction /*nombre de la función*/= (arg1, arg2, arg3 /*parametros de la función*/) => {
    Statment // cuerpo de la función si el cuerpo tiene una sola declaración o expressión, se puede escribir la función de flecha como 
         // let exampleArrowFuncSingleDeclaration = (argument) => expression
    }
// ejemplo 4:
console.log("Arrow Function - Sin Argumentos o parametros :");
let noArguments = () => console.log("Hello");
noArguments();

// ejemplo 5:
console.log("Arrow Function - 1 Parametro :");
// Si una función sólo tiene un parametro, puede omitir los paréntesis. Por ejemplo,
// let oneArguments = x => console.log(`Hello ${x}`);
let oneArguments = (x) => console.log(`Hello ${x}`);
oneArguments("You");

// ejemplo 6

console.log("Arrow Function - function expression:");
// También podemos crear dinámicamente una función y utilizarla como una expresión. Por ejemplo,

// ESTE A ANALIZAR!!//  
// ** Que tiene que ver aquí el let age=21 esta variable que pinta? o... donde entra el argumento? en age o en welcome?
// welcome es el que coje la función, si edad es menor a 18 sería ? ()=> console... si no :()=>{console...} este segundo si que va entre corchetes? 
// el argumento de welcome donde va a parar?
let age = 21;
let welcome =
  age < 18
    ? () => console.log("Wu Tang Clan, for the children")
    : () => {
        console.log("C.R.E.A.M");
      };
welcome();

// Ejemplo 7
console.log(
    "Arrow Function - multiple params - multiple lines dentro del body"
  );
  let sum = (a, b) => {
    let result = a + b;
    return result;
  };
  let resultOfSum = sum(5, 89);
  console.log(resultOfSum);


// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera. Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad". Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.


let typeOfcity = {
    livesInCity: true,
    livesInTown: false,
}

let userInfo = (name, age, livesIn) => {
    if (livesIn.livesInCity) { return `${name} tiene ${age} años y vive en una ciudad.` }
    else {return `${name} tiene ${age} años y vive en un pueblo.`}
} 
console.log(userInfo("Georgina", 30, typeOfcity))
