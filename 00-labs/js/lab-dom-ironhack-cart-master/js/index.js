// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //con esto conectamos al doc & obtenemos los valores
  //traemos los elementos del dom [price & quantity], creamos variables para trabajar, apuntamos directamente a product y al usar querySelector (que es el general y dentro del parentesi ponemos la class y el dag) con el .innerText // .value extraemos el contenido que estamos apuntando
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;

  //para estraer el valor del input tambien podemos, con estos nos aseguramos que los valores que entren nos sirvan:
      //const priceValue =parseFloat(price.innerText);
      //const quantityValue = quantity.valueAsNumber;
  
  //parte logica/matematica que queremos hacer = precio de la unidad por la cantidad que pondrá el user:
    const subtotal = parseInt(price) * quantity
    
  // para inyectar el resultado de subtotal tenemos que apuntar al lugar donde se reflejarà en el html
    const subtotalTd = product.querySelector(".subtotal span");
  // reagsignamos el valor de subtotal dentro del valor/texto subtotal TD
    subtotalTd.innerText = subtotal; 
  // en este return no se muestra pero se guarda el subtotal y luego lo podemos reusar este resultado
    return subtotal;
}
  //... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product");
  console.log(allProducts);
// un loop ... coger todos los productos dentro de la tabla hacemos un queryselector de todos los productos con clase product y los guardo dentro de la variable allProducts y luego creamos este loop para aplicar el update subtotal a todos con clase .product
  // este item de dentro del loop es una variable interna que podem posar el que volguem... dintre del parentesis del loop pone declaramos item y a cada item queremos pasarle updateSubtotal(item este item es cmo el product de antes)
  let total = 0
    // siempre que llamamos a una función a parte de hacer la acción esta es substituida por su return value
  allProducts.forEach(item => total += updateSubtotal(item));

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span")
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // si concadenamos dos parent estamos apuntando a dos arriba = abuelo
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  console.log(parent)

  parent.removeChild(row)

 
// dejamos esto para que al borrar el total se renueve con el precio sin los elementos borrados.
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);
  
  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
          <td class="name">
            <span>${newProdNameValue}</span>
      </td>
      <td class="price">$<span>${newProdPriceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`;
  
  const parent = document.querySelector('#cart tbody');

  parent.appendChild(newTableRow);

  const removeButtons = newTableRow.querySelector('.btn-remove');
  removeButtons.addEventListener('click', removeProduct);

  newProdNameInput.value = '';
  newProdPriceInput.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //esto es para hacer el remove
//seleccionados los botones TODOS los de misma class con querySelector All
  const removeButtons = document.querySelectorAll(".btn-remove")

//  for (let removeButtons of removeButtons) {
//   removeButtons.addEventListener("click", removeProduct);
//  }

   removeButtons.forEach(button => button.addEventListener("click", removeProduct));
  
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
  
});

