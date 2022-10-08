let allPokemons = [];
let upperName = [];
let upperAttack = [];
let upperTypeAttack = [];
let statsHP = [];
let statsAttack = [];
let statsDefense = [];
let statsSpecialAttack = [];
let statsSpecialDefense = [];
let statsSpeed = [];


const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


const getAllPokemons = async () => {
    for (let i = 1; i <= 151; i++) {   

        const res = await fetch(baseUrl + i)
        const pokemon = await res.json()
        allPokemons.push(pokemon);
        console.log(pokemon);
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
        let elementName = pokemon.name;
        upperName = elementName[0].toUpperCase() + elementName.substring(1);
        let elementAttack = pokemon.abilities[0].ability.name;
        upperAttack = elementAttack[0].toUpperCase() + elementAttack.substring(1);
        let elementTypeAttack = pokemon.types[0].type.name;
        upperTypeAttack = elementTypeAttack[0].toUpperCase() + elementTypeAttack.substring(1);
        let elementStatsHP = pokemon.stats[0].base_stat;
        let elementDamage = pokemon.stats[1].base_stat;
        let elementDefense = pokemon.stats[2].base_stat;
        let elementSpecialAttack = pokemon.stats[3].base_stat;
        let elementSpecialDefense = pokemon.stats[4].base_stat;
        let elementSpeed = pokemon.stats[5].base_stat;
        //console.log(pokemon.types[0].type.name);
        let div$$ = document.createElement('div'); 
        div$$.className = "container"; 
        div$$.innerHTML = `<h3 class="name">${upperName}</h3><img class="imagen" src='${pokemon.sprites.versions['generation-v']['black-white'].animated.back_default}'></img><p class="pAttack">Nombre ataque: ${upperAttack}</p><p class="pTypeAttack">Tipo de ataque: ${upperTypeAttack}</p><p class="hp">HP: ${elementStatsHP}</p><p class="damage">Daño: ${elementDamage}</p><p class="defense">Defensa: ${elementDefense}</p><p class="specialAttack">Ataque especial: ${elementSpecialAttack}</p><p class="specialDefense">Defensa especial: ${elementSpecialDefense}</p><p class="speed">Velocidad: ${elementSpeed}</p>`
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


/*    for (const pokemon of pokemons) {
        let elementName = pokemon.name;
        upperName = elementName[0].toUpperCase() + elementName.substring(1);
        let elementAttack = pokemon.abilities[0].ability.name;
        upperAttack = elementAttack[0].toUpperCase() + elementAttack.substring(1);
        let elementTypeAttack = pokemon.types[0].type.name;
        upperTypeAttack = elementTypeAttack[0].toUpperCase() + elementTypeAttack.substring(1);
        let elementStatsHP = pokemon.stats[0].base_stat;
        let elementDamage = pokemon.stats[1].base_stat;
        let elementDefense = pokemon.stats[2].base_stat;
        let elementSpecialAttack = pokemon.stats[3].base_stat;
        let elementSpecialDefense = pokemon.stats[4].base_stat;
        let elementSpeed = pokemon.stats[5].base_stat;
        //console.log(pokemon.types[0].type.name);
        let div$$ = document.createElement('div'); 
        div$$.className = "container"; 
        div$$.innerHTML = `<h3 class="name">${upperName}</h3><img class="imagen" src='${pokemon.sprites.versions['generation-v']['black-white'].animated.back_default}'></img>`
        gallery$$.appendChild(div$$);
        
        let div2$$ = document.createElement('div2');
        div$$.className = "headCard"; 
        div$$.innerHTML = `<p class="pAttack">Attack: ${upperAttack}</p><p class="pTypeAttack">TypeAttack: ${upperTypeAttack}</p><p class="hp">HP: ${elementStatsHP}</p><p class="damage">Daño: ${elementDamage}</p><p class="defense">Defensa: ${elementDefense}</p><p class="specialAttack">Ataque especial: ${elementSpecialAttack}</p><p class="specialDefense">Defensa especial: ${elementSpecialDefense}</p><p class="speed">Velocidad: ${elementSpeed}</p>`;

        
        
        gallery$$.appendChild(div2$$);
    }
}*/
