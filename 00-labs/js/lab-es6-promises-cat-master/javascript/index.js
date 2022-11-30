// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            getInstruction("mashedPotatoes", 5, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
          
            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  

// Iteration 1 - using callbacks
obtainInstruction("steak", 0).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 1);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 2);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 3);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 4);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 5);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 6);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 7);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
  return obtainInstruction("steak", 8);
})
// Iteration 2 - using promises
// ...
const makeBroccoli = async () => {
  let result = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`
  let result2 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${result2}</li>`
  let result3 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${result3}</li>`
  let result4 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${result4}</li>`
  let result5 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${result5}</li>`
  let result6 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${result6}</li>`
  let result7 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${result7}</li>`
  //añadir texto manualmente
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  // imagen
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli()


// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// metodo .all() encapsula todas las promesas dentro de un solo sitio. no se suele usar porque no se quieren procesos tan generales sino que se quieren funciones cortas y controladas.
// como funciona: 

const paso0 = obtainInstruction("brusselsSprouts", 0);
const paso1 = obtainInstruction("brusselsSprouts", 1);
const paso2 = obtainInstruction("brusselsSprouts", 2);
const paso3 = obtainInstruction("brusselsSprouts", 3);
const paso4 = obtainInstruction("brusselsSprouts", 4);
const paso5 = obtainInstruction("brusselsSprouts", 5);
const paso6 = obtainInstruction("brusselsSprouts", 6);
const paso7 = obtainInstruction("brusselsSprouts", 7);

//falta acabar

 Promise.all ([paso0,paso1,paso2,paso3,paso4,paso5,paso6,paso7])
 .then
 ((valor) => {
   valor.forEach((instruccion)=> {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruccion}</li>`

     });
     document.querySelector("#brusselsSprouts").innerHTML += `<li>The brussels Sprouts are ready!</li>`;
     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
   })
 .catch((error) => console.log(error));

//con async await (NO ESTÀ BIEN PORQUE NO ME MUESTRA TODO)

//  async function makeBrusSpours() {
//    try {
//      const valores = await Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7]);

//      valores.forEach((instruction) => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
//      //en catch basicamente registramos por si hubiera algun error
//      }) 
//    catch (error) => console.log(error)
//    };