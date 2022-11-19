// Cómo manipular elementos en el DOM:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
    // // El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
        // const createElement = document.createElement("div");
        // console.log("createElemente tiene esta estructura: ");
        // console.log(createElement);

// // Establecer algun texto mediante unos keys de innerHTML o innerTEXT
    // // createElement.innerHTML = "JS es demasiado cool!";
    // createElement.innerText = "JS es demasiado cool";
    // console.log(createElement);

// Como anexar elemento creado en js al doc de HTML
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!

// // Version - un solo selector
    // // let parentElement = document
    // //   .querySelector("#parent")
    // //   .appendChild(createElement);
// // Version - anidada
    // let parentElement2 = document
    //   .querySelector("#parent #firstchild")
    //   .appendChild(createElement);


ADDING ELEMENTS TO THE PAGE 
    First thing select the element we want to add 

    .append method that we use to add an element || there is append and appendChild( in appendChild you only can append elements like dispatchEvent, spans... while in append you can add those and also strings and will apear)
    
    .createElement("the type of element we want to create")

we have just created the elements but we 
    we need to add the element to our page

    to write into the element:
    
    element.innerText = "text we want to write"
    
element.textContent = "text2"
    
the difference between this two 
   · text content is going to print the exact txt content, all the spacing all(as well is visible or not)
    · innerText only prints the text that is visible on our page( if something is not visible on the screen it wont appear)
    


// // añadir clase mediante JS  - EJEMPLO 001
// createElement.className = "ejemplo1";
// console.log(createElement);

// //* EJERCICIOS

// // 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>

// // 2º - Crea un <div id="nested"></div> desde código

// // 3º - Crea un <p></p> dentro de un <div id="nested"></div> creado desde código

// const createElement = document.createElement("p")
// createElement.innerText = "loren ipsum del p creador";
// let parentElement2 = document
//   .querySelector("#parent #firstchild")
//     .appendChild(createElement);
  
// let pElement = document.createElement("p")
// pElement.innerText = "Texto del p"
// console.log(pElement)


//addEventListener("click",) //escucha reacción este tenemos que mirarlo bien (primero tipo de evento, segundo que queremos que haga... "el nombre de mi funcion")

const buttonElement = document.querySelector("#button");
const addFunction = () => buttonElement.classList.add("button");
buttonElement.addEventListener("click", addFunction);

const cuadroColor = document.querySelector("#cuadro");
const toggleFunction = () => document.querySelector(".elemento-color").classList.toggle(".elemento-color-rojo");
cuadroColor.addEventListener("click", toggleFunction);