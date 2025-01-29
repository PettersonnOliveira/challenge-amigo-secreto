//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let nomes = document.getElementById('amigo');
  let nomesValue = nomes.value;
  if (nomesValue === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(nomesValue);
  nomes.value = "";
  atualizarListaAmigos(); 
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];

    let novoElemento = document.createElement('li');
    novoElemento.textContent = amigo;
    listaAmigos.appendChild(novoElemento);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há amigos para sortear. Adicione amigos à lista.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];

  let resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = amigoSorteado;
}