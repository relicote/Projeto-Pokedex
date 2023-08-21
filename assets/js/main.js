const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Fetch retorna uma Promise - Uma promessa de um resultado
// Assincrono (um processo executado que a resposta não é imediata)
 
fetch(url).then(function(response){
    response.json().then(function(responseBody){
        console.log(responseBody)
    })
})


.catch(function(error){
    console.log(error)
})

.finally(function(){
    console.log('Requisicão conluída!')
})
