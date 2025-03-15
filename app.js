const nombres = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre !== '') {
    nombres.push(nombre); 
    actualizarLista(); 
    input.value = ''; 
    input.focus(); 
  } else {
    alert('Por favor, ingresa un nombre válido.');
  }
}


function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpiar lista anterior


  nombres.forEach((nombre, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(li);
  });
}


function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  if (nombres.length === 0) {
    resultado.innerText = 'No hay nombres en la lista.';
    return;
  }
  const indiceGanador = Math.floor(Math.random() * nombres.length);
  const ganador = nombres[indiceGanador];
  resultado.innerText = `El ganador es: ${ganador} 🎉`;
}
