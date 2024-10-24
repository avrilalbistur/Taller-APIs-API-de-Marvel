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
