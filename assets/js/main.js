const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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

        const pokemonList = document.getElementById('pokemonList')


fetch(url)

    .then((response) => response.json()) //Recebendo resposta e convertendo para Json
    .then((jsonBody) => jsonBody.results) //convertendo o json em uma variavel
    .then((pokemons) => {
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToHtml(pokemon)


            // document.getElementsByClassName('pokemons')
            
        }

    })
    .catch((error) => console.log(error)) 