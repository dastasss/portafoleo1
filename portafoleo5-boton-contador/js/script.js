let contador = 0;

function aumentarContador() {
  contador++;
  actualizarContador();
}

function actualizarContador() {
  // Actualizar solo el contador debajo del botón
  const contadorDisplay = document.getElementById('contadorDisplay');
  contadorDisplay.innerHTML = '<span id="contadorValor">' + contador + '</span>';
}
