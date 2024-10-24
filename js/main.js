const apikey = "a41f305d0402b8faa73dab310ee06012";
const ts = "2024";
const hash = "c86b43c393cf34372423f5f4bac297f3";
const mainURL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}&ts=${ts}&hash=${hash}`; //URL PARA TRAER TODOS LOS PERSONAJES

//FUNCION PARA HACER EL FETCH A LA API DE MARVEL
let getMarvelData = (URL) => {
  let data = [];
  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then((response) => {
      data = response.data.results;
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

// FUNCION PARA CREAR LAS CARDS DE LOS PERSONAJES
let createCharacterCards = (characters) => {
  let HTMLtoappend = ``;

  characters.forEach((character) => {
    let {name, description, thumbnail: {extension,path}} = character
    comics = [];
    comics = character.comics.items;
    console.log(comics);
    
    HTMLtoappend += `
      <div class="card col-4 m-3 bg-dark-subtle" style="width: 18rem;">
        <img src="${path+`.`+extension}" class="card-img-top overflow-hidden" style="height: 10rem;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text overflow-auto" style="height: 5rem;">${description || `this character has no description`}</p>
        </div>
      </div>
      `;
    
  });
  document.getElementById('container').innerHTML = HTMLtoappend;
};

// FUNCION PARA HACER EL FETCH DE LA INFO DE LOS PERSONAJES

document.addEventListener('DOMContentLoaded', ()=>{
  getMarvelData(mainURL)
  .then(characters =>{
    createCharacterCards(characters);
  });
})

