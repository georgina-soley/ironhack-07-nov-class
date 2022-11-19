// DOM manipulation ( Document Object Model)
//DOM secuencia de nodos creado por el navegador, cada uno de estos nodos tiene sus propiedades y métodos que se pueden manipular con JS
// La capacidad de manipular el DOM es una de las habilidades más únicas y útiles de JavaScript.



// Document
// sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).
// El árbol DOM incluye todos los elementos que forman la web. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

console.log(window); // 
console.log(document);// muestra el documento (comspoición)
console.log(document.title); // muestra el título del documento
console.log(document.URL); //muestra la url
console.log(document.doctype);// muestra el tipo de documento 
console.log(document.head);// nos da la información que se encuentra en el head
console.log(document.body);// nos muestra el esquema & información del body

// SELECCIONAR ELEMENTOS EN EL DOM

// Para poder manipular un elemento en el DOM, tienes que seleccionar ese elemento concreto. 
//Una vez que hayas seleccionado un elemento, puede añadir estilos al elemento, manipular sus atributos y recorrer los elementos padre e hijo.

//-4 formas principales de seleccionar elementos.

// 1. getElementById Method ////
    // // La forma más común de acceder a un elemento HTML es utilizar el id del elemento.
    //El id  ES CASE SENSITIVE (distingue entre mayúsculas y minúsculas). 
    //Remember that the id must be a string, and it will return the first occurrence only.

    console.log(document.getElementById("wutang"));


// 2. getElementsByClassName() Method
    // Este método devuelve una colección de todos los elementos del documento con el nombre de clase especificado.
    // Por ejemplo, nuestra página HTML de abajo contiene 5 elementos con class="wuTang".
    console.log(document.getElementsByClassName("wuTang"));
    console.log(document.getElementsByClassName("wuTang")[1]); // Para ir a uno concreto []usamos su posición en array puesto que lo que nos devuelve es un array

// 3. getElementsByTagName() Method
    // Este método acepta un nombre de etiqueta y devuelve todos los elementos del nombre de etiqueta especificado en el orden en que aparecen en el documento.
    console.log(document.getElementsByTagName("h5"));
    console.log(document.getElementsByTagName("h5")[0]);

// 4. querySelector() Method
    // Devuelve el primer valor que coincida con el selector que se le da. Este método puede aceptar todos los selectores de estilo CSS, lo que le permite seleccionar por etiqueta, clase o ID.
    console.log(document.querySelector("#query-selector")); //ID
    console.log(document.querySelector(".hipHop")); // CLASS
    console.log(document.querySelector("h5")); //Tag
    console.log(document.querySelector("body"));//tag
    console.log(document.querySelector("#query-selector .hipHop .myLove")); // id

// 5.querySelectorAll() Method
    // Funciona de forma similar a la anterior, que devuelve una colección de listas de nodos con todos los elementos coincidentes.
    console.log(document.querySelectorAll(".wuTang"));

// --------------------------------------------

// Cómo recorrer el documento

// Todo en un documento HTML es un nodo.
// También el texto dentro de los elementos HTML son nodos de texto.

// Con el DOM de HTML, puedes navegar por el árbol de nodos y acceder a los nodos en el árbol usando las relaciones de nodos de las que hablamos antes (padre, hijo(s), hermano(s), etc.).

// Se pueden crear nuevos nodos, y todos los nodos pueden ser modificados o eliminados.

// Un pequeño repaso
// Cada nodo tiene exactamente un padre, excepto el nodo superior (que no tiene padre).
// Un nodo puede tener más de un hijo. Los hermanos son nodos con el mismo padre.
// En esta sección, vamos a ver cómo obtener el elemento padre, los hermanos de un elemento y los hijos de un elemento. Utilizaré las siguientes propiedades de nodo para lograr estas cosas:

// - parentNode
// - childrenNodes
// - firstElementChild
// - lastElementChild
// - nextElementSibling
// - previousElementSibling

// Last Element Child
console.log(document.querySelector("#traverse-document").lastElementChild);

// First Element Child
console.log(document.querySelector("#traverse-document").firstElementChild);

// Children
console.log(document.querySelector("#traverse-document").children);
console.log(document.querySelector("#traverse-document").children[2]);

// parentNode
console.log(document.querySelector("#second-child").parentNode);
console.log(document.querySelector("#second-child").parentElement);