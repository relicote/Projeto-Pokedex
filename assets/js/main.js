const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Fetch retorna uma Promise - Uma promessa de um resultado
// Assincrono (um processo executado que a resposta não é imediata)

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>` )
}

function convertPokemonToHtml(pokemon) {

    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
                
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>               
        </li>
        `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToHtml).join('')
    pokemonList.innerHTML += newHtml
})


//     const listItems = []

//     // pokemons.map()

//     for (let i = 0; i < pokemons.length; i++) {
//         const pokemon = pokemons[i];

//         //Convertendo a lista de pokemons (concatenados a API) em uma lista de HTML
//         listItems.push(convertPokemonToHtml(pokemon)) 
//     }

//     console.log(listItems)
             




    
        
        

