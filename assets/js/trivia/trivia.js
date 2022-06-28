var currentPokemon = "";
var correctOption = "";

function newGame(){
    startTimer();
}

function hideButtons(){
    document.getElementById('demo-button').style.display = 'none';
    document.getElementById('play-button').style.display = 'none';
}

function showButtons(){
    document.getElementById('demo-button').style.display = 'block';
    document.getElementById('play-button').style.display = 'block';
}

function showPokemonSilhouette(){
    getRandomPokemonFromApi();
}

function generateRandomPokemonNumber(){
    const maxPokemonIndex = 500;
    return Math.floor((Math.random() * maxPokemonIndex) + 1);
}

async function getRandomPokemonFromApi(){
    const host = 'https://pokeapi.co/api/v2/';
    const endpoint = 'pokemon/' + generateRandomPokemonNumber();
    
    const response = await fetch(host + endpoint);
    console.log(response);
    return await response.json();
}

async function setRound(){
    const newPokemon = await getRandomPokemonFromApi(); 
    setCurrentPokemon(newPokemon);
    
}

function setCurrentPokemon(pokemonJson){
    currentPokemon = pokemonJson;
    document.getElementById("pokemon-img").src = getCurrentPokemonSprite();
    hideCurrentPokemon();
    setOptions();
}

function hideCurrentPokemon(){
    document.getElementById("pokemon-img").style.filter = "grayscale(100%) brightness(0%)";
}

function showCurrentPokemon(){
    document.getElementById("pokemon-img").style.filter = "grayscale(0%) brightness(100%)";
}

function getCurrentPokemonSprite(){
    return currentPokemon.sprites.other.dream_world.front_default;
}

async function setOptions(){
    correctOption = Math.floor((Math.random() * 4) + 1);
    const currentPokemonName = currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1);
    
    let i = 1;
    while(i <=4){
    let pokemon = await getRandomPokemonFromApi();
    let nameToSet = "";
    
    if(i === correctOption){
        nameToSet = currentPokemonName;
    } else {
        nameToSet = pokemon.name;
    }
    
    document.getElementById("button-option-" + i).textContent = nameToSet.charAt(0).toUpperCase() + nameToSet.slice(1);
        
        document.getElementById("button-option-" + i).style.background = "#ffffff";
    i++;
    }
}

function makeSelection(i){
    showCurrentPokemon();
    document.getElementById("button-option-" + correctOption).style.background = "rgb(255,205,0)";
    if(i === correctOption){
        // add point
    }
    
    sleep(2000).then(
        () => { 
            setRound(); 
        }
    );
 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}