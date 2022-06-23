
// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'Gatos',
  'Papas',
  'Fuego',
  'Huevo',
  'Color',
  'Casas',
  'Arbol',
  'Nueve',
  'Zorro',
  'Remar',
  'Locro',
  'Jamon',
  'Feliz',
  'Cinco',
  'Tonto',
  'Cuero',
  'Volar',
  'Vuelo',
  'Avion',
  'Genio',
  'Pibes',
  'Ratas',
  'Sapos',
  'Patos',
  'Temas',
  'Cazar',
  'Matar',
  'Robar',
  'Siete',
  'Trece',
  'Casar',
  'Almas',
  'Alaba',
  'Carta',
  'Sopas',
  'Raton',
  'Ratas',
  'Pozos',
  'Zebra',
  'Dados',
  'Darlo',
  'Marte',
  'Pizza',
  'Copas'
];
// ocultar perdiste y Ganaste
document.getElementById('win').style.display = 'none';
document.getElementById('perdiste').style.display = 'none';
//boton de recargar
let boton_recargar = document.getElementById('Boton_Recargar')
boton_recargar.hidden = true
// intentos
let indice = Math.trunc(Math.random() * 43);
let bien = dict[indice];
console.log(bien);
let res = document.getElementById('res').value;
let intentos = 0;
function handleChange(e) {
  let res = document.getElementById('res').value;
  if (res.length != 5) {
    alert("Tienen que ser 5 letras");
    return;
  }
  if (!dict.includes(res)) {
    alert("La palabra no está en el diccionario");
    return;
  }
  let wordle = document.getElementById('game');
  for (let i = 0; i < 1; i++) {
    let row = document.createElement("div");
    row.className = "tabla";
    for(let j = 0; j < 5; j++) {
      let caja = document.createElement("div");
      caja.textContent = res[j];
      if(bien.includes(res[j])) {
        caja.style.backgroundColor = 'yellow';
      } else {
        caja.style.backgroundColor = 'gray';
      }
      if(res[j] == bien[j]) {
        caja.style.backgroundColor = 'green';
      }
      caja.className = "cajas";
      row.appendChild(caja);
    }
    wordle.appendChild(row);
    if(bien == res) {
      document.getElementById('win').style.display = 'block';
      boton_recargar.hidden = false;
    }
    intentos++;
    if (intentos == 6) {
      document.getElementById('perdiste').style.display = 'block';
      boton_recargar.hidden = false;
    }
  }
}
function recargar() {
  location.reload()
}
