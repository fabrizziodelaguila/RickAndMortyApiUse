const listaPersonajes = document.querySelector("#listaDemons");
let URL = "https://rickandmortyapi.com/api/character/";

for (let i = 1; i <= 60; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((character) => mostrarDemons(character));
}

function mostrarDemons(data) {
  const div = document.createElement("div");
  div.classList.add("personajes");
  div.innerHTML = `
  <div class="personaje-imagen">
              <img
                src="${data.image}"
                alt="img"
              />
            </div>
            <div class="personaje-info">
              <div class="nombre-contenedor">
                <p class="personaje-id">ID: ${data.id}</p>
                <h2 class="personaje-nombre">Name: ${data.name}</h2>
              </div>
              <div class="personaje-genero">Gender: ${data.gender}</div>
            </div>`;
  listaPersonajes.append(div);
}
