const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
     return fetch(url)
        .then((response) => response.json()) //Recebendo resposta e convertendo para Json
        .then((jsonBody) => jsonBody.results) //convertendo o json em uma variavel
        .catch((error) => console.error(error)) //Exibe mensagem caso não obtenha response
}
