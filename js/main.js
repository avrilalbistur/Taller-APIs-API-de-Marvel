
// FUNCION PARA CREAR LAS CARDS DE LOS PERSONAJES
let createCharacterCards = (characters) => {
  let HTMLtoappend = ``;

  characters.forEach((character) => {
    let {id,name, description, thumbnail: {extension,path}} = character
    comics = [];
    comics = character.comics.items;
    console.log(comics);
    
    HTMLtoappend += `
      <div class="card col-4 m-3 bg-dark-subtle" style="width: 18rem;">
        <img src="${path+`.`+extension}" class="card-img-top overflow-hidden" style="height: 10rem;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text overflow-auto" style="height: 5rem;">${description || `this character has no description`}</p>
          <button type="button" class="btn btn-outline-danger" onclick="setModalInfo('${name}', '${description || `this character has no description`}', ${JSON.stringify(comics)})" id="${id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Mas Info.
          </button>
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

let setModalInfo = (name, description, comics) => {
  let comicsLiToAppend = ``;
  comics.forEach((comic) => {
    comicsLiToAppend += `
    <li>${comic.name}</li>
    `;
  });
  document.getElementById('comicsList').innerHTML = comicsLiToAppend;
  document.getElementById('staticBackdropLabel').innerText = name;
  document.getElementById('characterDescription').innerText = description;
}