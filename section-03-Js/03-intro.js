// syntax 

// Hacer comentarios as much as we can 

console.log("No great thing is created suddenly.");

// El documento 
// Aqui lo que muestra es el DOM 
console.log(document);

// concadenación puntos de accesos con puntos
// esto si lo pongo en console de inspección de google 
// si quiero apuntar y ver cual es el dominio:
console.log(document.domain);
// AQUI NOS DICE LA URL DIRECTA
console.log(document.URL);
// si queremos ver el titulo
console.log(document.title)
// si queremos apuntar al type
console.log(document.doctype);
console.log(document.head);
console.log(document.body)
// este muestra un esquema del dom i del documento, tags i todo
console.log(document.all);
// punto de entrada a lo que es braquet Notation, muestra un array de posiciones del documento... console.log(document.all[8]) i aquí vamos a la linia 8 del listado que aparece en el all
// console.log([]);

// cuando entramos a ver la compo en base al DOM tenemos acceso a manipular elementos... MANIPULACIÓN DEL DOM

// continuando con tocar directamente en console.log(document.all[8]) es un texto i queremos modificar...AbortController. 
console.log(document.all[8].textContent = "New Text")

// SABER CANTIDAD DE LINKS
console.log(document.links);

// Ejemplo de otro metodo de instancia, ya vienen por defecto algun aplicativo ( el primero era .log) ahora viene tabla = syntax = console.table( ) muestra datos como una tabla. Toma un argumento obligatorio data que es un arrey o un objeto

console.table(["Cádiz", "Lisbon","Ibiza","Mexico"]);