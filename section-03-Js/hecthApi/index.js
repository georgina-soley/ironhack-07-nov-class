
// llamando a un recurso interno( sample.txt) 
//1º creamos función
const getText = () => {
    // llamamos al metodo fetch y le pasamos la url/localización del recurso que queremos usar
    fetch("sample.txt")
        // por defecto fetch da respuesta, es buena practica que la primera promesa se llame response porque básicamente reponde

        // 3-recibimos info de la llamada por parte del fetch y lo que hacemos en la 1º promesa es llamar a unaa expresion methodo para poder manipular/limpiar la info que recibimos del fetch, como esta info que recibimos esta dentro de una promesa tenemos que convertir este texto a string para poder usarlo correctamente.
        .then((response) => response.text())
        // 4-en el paso anterior se recibe la info y se "limpia" en esta nueva pormesa la inyectamos dentro de nuestro front manipulando el DOM
        .then((cleanText) => {
            // document.querySelector("#output").innerHTML += cleanText
            // con inher html no se respeta la estructura del doc, en cambio innerText la mantiene el formato que se le puso
            document.querySelector("#output").innerText = cleanText
        })
        // 5- dejamos también parametrizado los dos casos de uso ( el correcto y la opción error) en el -catch(dejamos la posibilidad de error)
        .catch((error) => console.log(error));
};
//6-Apuntamos al DOM mediante la ID y usamos addEventListener()para pasarle el click event al boton 
document.querySelector("#getText").addEventListener("click",getText);





// function apuntando al archivo interno JSON
const getJason = () => {
    //llamamos al recurso
    fetch("users.json")
// recibimos info del recurso que hemos nombrado y la manipulamos/limpiamos/transformamos(Segun el tipo de recurso) con el .jason(coje la respuesta stream y la lee completamente. Devuelve una promesa que resuelve con el resultado paresado de body text como JSON= devuelve un "objeto" JS)
        .then((response) => response.json())
        .then((users) => {
            let userData = "";
            users.forEach((user) => {
                userData += `
                <ul>
                    <li>${user.name}</li>
                    <li>${user.email}</li>
                    <li>${user.id}</li>
                </ul>
                `;
            });
        document.querySelector("#output").innerHTML += userData
        })
        .catch((error) => console.log(error));
}
document.querySelector("#getJson").addEventListener("click", getJason)

const getExternalApiInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
        .then((res) => {
            let externalApiInfo = "";
            res.forEach((post) => {
                externalApiInfo += `
                <div class="card" style="width: 15rem">
                  <img
                      class="card-img-top"
                      src="https://miro.medium.com/max/1400/0*ljnWAuUhEYej-FQ2.jpeg"
                      alt="JavaScript image"
                  />
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">
                          ${post.body}
                      </p>
                  </div>
                </div>
                `;
            });document.querySelector("#output").innerHTML += externalApiInfo;
    }) .catch((error) => console.log(error))
}
document.querySelector("#getHere").addEventListener("click", getExternalApiInfo)

// 
const addPost = (preventForm) => {
    preventForm.preventFormDefault();

    let title = document.querySelector("#title").ariaValueMax;
    let body = document.querySelector("#body").ariaValueMax;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        // aqui se imprime información adicional
        headers: {
            "Content-type": "application/json",
            Accept: "text/plain, aplication/json"
        },
        body: JSON.stringify({ title: title, body: body })
    })

        .then((response) => response.json())
        .then((formData) => console.log(formData))
        .catch((error) => console.log(error));

};
document.querySelector("#addPost").addEventListener("submit", addPost)