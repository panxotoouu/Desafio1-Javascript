
precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
const cantidadElemento = document.querySelector(".cantidad");
const valorTotalElemento = document.querySelector(".valor-total");
const btnAumentar = document.querySelectorAll("button")[0]; // Botón +
const btnDisminuir = document.querySelectorAll("button")[1]; // Botón -

let cantidad = 0;
let total = 0;

function actualizarTotal() {
  total = cantidad * precio;
  valorTotalElemento.textContent = total;
}

btnAumentar.onclick = () => {
  cantidad++;
  cantidadElemento.textContent = cantidad;
  actualizarTotal();
};

btnDisminuir.onclick = () => {
  if (cantidad > 0) {
    cantidad--;
    cantidadElemento.textContent = cantidad;
    actualizarTotal();
  }
};
cantidadElemento.textContent = cantidad;
valorTotalElemento.textContent = total;
