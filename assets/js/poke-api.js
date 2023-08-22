const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    //função está recebendo a requisição e convertendo para jSon
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

     return fetch(url)
        .then((response) => response.json()) //Recebendo resposta e convertendo para Json
        .then((jsonBody) => jsonBody.results) //convertendo o json em uma variavel
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //Lista de promess de details
        .then((detailRequests) => Promise.all(detailRequests)) //Aguardando as requisições
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error)) //Exibe mensagem caso não obtenha response
}

