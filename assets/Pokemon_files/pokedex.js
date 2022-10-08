let allPokemons = [];

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


const getAllPokemons = async () => {
    for (let i = 1; i <= 151; i++) {   

        const res = await fetch(baseUrl + i)
        const pokemon = await res.json()
        allPokemons.push(pokemon);
        //console.log(pokemon);
        /*await fetch(baseUrl + i)
        .then(res => res.json())
        .then(pokemon =>
            allPokemons.push(pokemon)
                        
        )  */
        
    }
    runAllPokemons(allPokemons);    
}


const runAllPokemons = (pokemons) => {
    //console.log(pokemons);
    let gallery$$ = document.querySelector(".pokemon-gallery");
    gallery$$.innerHTML = '';

    for (const pokemon of pokemons) {
        //console.log(pokemon.types[0].type.name);
        let div$$ = document.createElement('div'); 
        div$$.className = "container";    
        div$$.innerHTML = `<h3>${pokemon.name}</h3><img class="imagen" src='${pokemon.sprites.versions['generation-v']['black-white'].animated.back_default}'></img><p>Attack: ${pokemon.abilities[0].ability.name}</p><p>Type Attack: ${pokemon.types[0].type.name}</p>`
        gallery$$.appendChild(div$$);
    }
}

const searchPokemons = (name, pokemons) => {
    //console.log('Hola, entrando en search');
    //document.body.innerHTML = " ";
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    runAllPokemons(filteredPokemons);
    
}

const drawButton = (pokemons) => {
    //console.log('Hola, entrando en drawButton');
    let button$$ = document.querySelector('button');
    let input$$ = document.querySelector('input');
    button$$.addEventListener('click', () => searchPokemons(input$$.value, pokemons));
    
}
const home = () => {
    init();
}

const init = async () => {
    const pokemons = await getAllPokemons();
    
    drawButton(allPokemons)
    
}



init();


