const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

// Fetch retorna uma Promise - Uma promessa de um resultado
// Assincrono (um processo executado que a resposta não é imediata)

function convertPokemonToHtml(pokemon) {

    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>               
        </li>
        `
}


function loadPokemonItens(offset, limit) { 
   
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>               
                </li>
                `).join('')
        pokemonList.innerHTML += newHtml
    })   
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNexPage = offset + limit

    if(qtdRecordNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    } else {

        loadPokemonItens(offset, limit);
    }

})


    
        
        

