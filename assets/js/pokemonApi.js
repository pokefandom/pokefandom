

async function getRandomPokemonFromApi(){
    return await getPokemonFromApi(generateRandomPokemonNumber());
}

async function getPokemonFromApi(i){
    const host = 'https://pokeapi.co/api/v2/';
    const endpoint = 'pokemon/' + i;
    
    const response = await fetch(host + endpoint);
    console.log(response);
    return await response.json();
}

function getPokemonSprite(pokemon){
    return pokemon.sprites.other.dream_world.front_default;
}