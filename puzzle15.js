const fichas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arregloGanador = ["",1,2,3,4,"",5,6,7,8,"",9,10,11,12,"",13,14,15,"hueco",""];
const contenedor = document.getElementById("app");
const crearTablero = (arreglo) => {
  for (let i = arreglo.length - 1; i >= 0; i--) {
    let azar = Math.floor(Math.random() * i);
    let temporal = arreglo[i];
    arreglo[i] = arreglo[azar];
    arreglo[azar] = temporal;
  }
  arreglo.push("hueco");
  let raiz = Math.round(Math.sqrt(fichas.length));
  for (let i = 0; i <= arreglo.length; i += raiz + 1) {
    arreglo.splice(i, 0, "");
  }
};
const mostrarTablero = (arreglo) => {
  const tablero = document.createElement("div");
  tablero.id = "tablero";
  tablero.addEventListener("click", buscarGanador);
  contenedor.appendChild(tablero);
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] != "") {
      let div = document.createElement("div");
      if (arreglo[i] != "hueco") {
        div.setAttribute("value", i);
        div.className = "ficha";
        div.textContent = arreglo[i];
        div.addEventListener("click", moverFicha);
        tablero.appendChild(div);
      } else {
        div.setAttribute("value", i);
        div.className = "hueco";
        div.textContent = arreglo[i];
        tablero.appendChild(div);
      }
    } else {
      let div = document.createElement("div");
      div.setAttribute("value", i);
      div.className = "bloque";
      tablero.appendChild(div);
    }
  }
};
const moverFicha = (e) => {
  let i = parseInt(e.target.attributes.value.value);
  let j = Math.round(Math.sqrt(fichas.length));
  if (fichas[i + 1] != "" && fichas[i + 1] == "hueco") {
    let temporal = fichas[i];
    fichas[i] = fichas[i + 1];
    fichas[i + 1] = temporal;
  } else if (fichas[i - 1] != "" && fichas[i - 1] == "hueco") {
    let temporal = fichas[i];
    fichas[i] = fichas[i - 1];
    fichas[i - 1] = temporal;
  }
  if (fichas[i + j] != "" && fichas[i + j] == "hueco") {
    let temporal = fichas[i];
    fichas[i] = fichas[i + j];
    fichas[i + j] = temporal;
  } else if (fichas[i - j] != "" && fichas[i - j] == "hueco") {
    let temporal = fichas[i];
    fichas[i] = fichas[i - j];
    fichas[i - j] = temporal;
  }
  tablero.remove(tablero);
  mostrarTablero(fichas);
};
const buscarGanador = () => {
  if (fichas.toString() == arregloGanador.toString()) {
    alert("ganaste el juego");
  }
};
crearTablero(fichas);
mostrarTablero(fichas);
