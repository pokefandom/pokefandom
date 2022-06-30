var step = 0;

function resetTutorial(){
    step = 1;
}

async function nextStep(){
    step++;
    if(step == 1){
        defocusAll();
        tutorialStep1();
    }
    if(step == 2){
        defocusAll();
        sleep(1000).then(
        () => { 
            
            tutorialStep2();
        }
    );
    }
    if(step == 3){
        defocusAll();
        tutorialStep3();
          sleep(4000).then(
        () => { 
            tutorialStep4();
        }
    );
    }
    if(step <= 0 || step >= 5){
        // error
    }
}

async function defocusAll(){
    for(let i = 1; i <= 4; i++){
        let button = document.getElementById("button-option-" + i);
        button.style.background = "#ffffff";
        button.classList.remove("swivel");
        button.disabled = true;
        button.removeAttribute("onclick");
    }
    
    let pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.classList.remove("swivel");
    console.log("Removed swivel");
    pokemonContainer.removeAttribute("data-toggle");
    pokemonContainer.removeAttribute("data-trigger");
    pokemonContainer.removeAttribute("title");
    pokemonContainer.removeAttribute("data-content", "And here's some amazing content. It's very engaging. Right?");
    pokemonContainer.removeAttribute("onclick");
    
    let pokemonImage = document.getElementById("pokemon-img");
    
    pokemonImage.removeAttribute('onmouseover');
    pokemonImage.removeAttribute('onmouseout');
}

async function tutorialStep1(){
    await setRound();
    await setOptions();
    focusPokemon();
}

async function tutorialStep2(){
    await focusAnswerButton();
}

async function tutorialStep3(){
    answerButton.style.background = "rgb(255,205,0)";
}

async function tutorialStep4(){
    loadGamePage();
}
    
async function focusAnswerButton(){
    answerButton.disabled = false;
    await answerButton.classList.add("swivel");
    answerButton.setAttribute('onclick', "nextStep()");
}

async function focusPokemon(){
    let pokemonContainer = document.getElementById("pokemon-container");
     pokemonContainer.classList.add("swivel");
    pokemonContainer.setAttribute("data-toggle", "popover");
    pokemonContainer.setAttribute("data-trigger", "focus");
    pokemonContainer.setAttribute("title", "Tooltip title");
    pokemonContainer.setAttribute("data-content", "And here's some amazing content. It's very engaging. Right?");
    pokemonContainer.setAttribute("onclick", "nextStep()");
    
    let pokemonImage = document.getElementById("pokemon-img");
    
    pokemonImage.setAttribute('onmouseover', "showCurrentPokemon()");
    pokemonImage.setAttribute('onmouseout', "hideCurrentPokemon()");

}
