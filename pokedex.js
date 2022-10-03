/*const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
//const value = 1;

for (let i = 0; i <= 151; i++) {   

    fetch(baseUrl + i)
    .then(res => res.json())
    .then(pokemon => {
        //idPokedex(pokemon);
        console.log(pokemon);
    })
}*/

const resultsPokemons = document.querySelector('js_pokemon');


const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
//const value = 1;

function getAllPokemons() {
    for (let i = 0; i <= 151; i++) {   

        fetch(baseUrl + i)
        .then(res => res.json())
        .then(pokemon => {
            //idPokedex(pokemon);
            console.log(pokemon);
            printAllPokemons();
        })
    }
}

function printAllPokemons(){
    pokemon.innerHTML
}




