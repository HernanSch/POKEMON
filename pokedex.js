let allPokemons = [];

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getAllPokemons = async () => {
    for (let i = 1; i <= 151; i++) {   

        const res = await fetch(baseUrl + i)
        const pokemon = await res.json()
        allPokemons.push(pokemon);
        console.log(pokemon);        
    }
    runAllPokemons(allPokemons);    
}


const runAllPokemons = (pokemons) => {
    //console.log(pokemons);
    let gallery$$ = document.querySelector(".pokemon-gallery");
    gallery$$.innerHTML = '';

    for (const pokemon of pokemons) {
        // MAYUSCULAS NAME
        let elementName = pokemon.name;
        upperName = elementName[0].toUpperCase() + elementName.substring(1);
        let elementAttack = pokemon.abilities[0].ability.name;
        upperAttack = elementAttack[0].toUpperCase() + elementAttack.substring(1);
        let elementTypeAttack = pokemon.types[0].type.name;
        upperTypeAttack = elementTypeAttack[0].toUpperCase() + elementTypeAttack.substring(1);
        //FICHA TECNICA
        let elementStatsHP = pokemon.stats[0].base_stat;
        let elementDamage = pokemon.stats[1].base_stat;
        let elementDefense = pokemon.stats[2].base_stat;
        let elementSpecialAttack = pokemon.stats[3].base_stat;
        let elementSpecialDefense = pokemon.stats[4].base_stat;
        let elementSpeed = pokemon.stats[5].base_stat;
        let tipo = pokemon.types[0].type.name;
        upperTipo = tipo[0].toUpperCase() + tipo.substring(1);

        //DIV CONTAINER, INTRODUCIREMOS LOS DATOS POKEMON
        let div$$ = document.createElement('div'); 
        div$$.className = "container"; 
        div$$.innerHTML = `<h3 class="name">${upperName}</h3>
        <img class="imagen" src='${pokemon.sprites.other.dream_world.front_default}'></img>
        <ul class="perfil">
        <li><p class="pAttack">Nombre de ataque: ${upperAttack}</p></li>
        <li><p class="pTypeAttack">Tipo de ataque: ${upperTypeAttack}</p></li>
        <li><p class="hp">HP: ${elementStatsHP}</p></li>
        <li><p class="damage">Daño: ${elementDamage}</p></li>
        <li><p class="defense">Defensa: ${elementDefense}</p></li>
        <li><p class="specialAttack">Ataque especial: ${elementSpecialAttack}</p></li>
        <li><p class="specialDefense">Defensa especial: ${elementSpecialDefense}</p></li>
        <li><p class="speed">Velocidad: ${elementSpeed}</p></li>
        <li><p class="clasePoke">Clase: ${upperTipo}</p></li>
        </ul>`
        
        gallery$$.appendChild(div$$);        
    }
}

const searchPokemons = (name, pokemons) => {
    //console.log('Hola, entrando en search');
    //console.log('types[0].type.name.toLowerCase()')
    
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    runAllPokemons(filteredPokemons);
    
}

const drawButton = (pokemons) => {
    //console.log('Hola, entrando en drawButton');
    let button$$ = document.querySelector('button');
    let input$$ = document.querySelector('input');
    button$$.addEventListener('click', () => searchPokemons(input$$.value, pokemons));
    
}

const searchSelectPokemons = (name, pokemons) => {
    console.log("Estoy en el select");
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.types[0].type.name.toLowerCase.toLowerCase().includes(name.toLowerCase()));

    if(name === "fire"){
        runAllPokemons(filteredPokemons)
    }else if (name === "ice"){
        runAllPokemons(filteredPokemons)
    }else if (name === "water"){
        runAllPokemons(filteredPokemons)
    }else if (name === "poison"){
        runAllPokemons(filteredPokemons)      
    }
}


const drawSelectButton = (pokemons) => {
    console.log('Hola, entrando en drawSelectButton');

    document.getElementById("clases").value;
    searchPokemons(input$$.value, pokemons);

    /*let btn$$ = document.querySelector('button2');    
    let inputSelect$$ = document.querySelector('clases');
 

    btn$$.addEventListener('click', () => {
        let options = inputSelect$$.types[0].type.name.toLowerCase();        
        searchPokemons(options, pokemons);
    }*/
              
    
    /*||  pokemon.name.toLowerCase().includes(pokemon.types[0].type.name.toLowerCase()) == name.toLowerCase())*/    
}

const home = () => {
    init();
}

const init = async () => {
    const pokemons = await getAllPokemons();
    
    drawButton(allPokemons)
    drawSelectButton(allPokemons)
    
}



init();



