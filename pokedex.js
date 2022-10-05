let allPokemons = [];

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


const getAllPokemons = async () => {
    for (let i = 1; i <= 151; i++) {   

        /*const res = await fetch(baseUrl + i)
        const pokemon = await res.json()
        allPokemons.push(pokemon);*/
        await fetch(baseUrl + i)
        .then(res => res.json())
        .then(pokemon =>
            allPokemons.push(pokemon)
                        
        )  
    }
    runAllPokemons(allPokemons);    
}


const runAllPokemons = (pokemons) => {
    //console.log(pokemons);
    for (const pokemon of pokemons) {
        console.log(pokemon);
        const div$$ = document.createElement('div');        
        div$$.innerHTML = `<h3>${pokemon.name}</h3><img class="imagen" src='${pokemon.sprites.back_default}'></img>`
        document.body.appendChild(div$$);
    }
}


getAllPokemons();
