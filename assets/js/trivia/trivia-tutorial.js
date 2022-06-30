var step = 1;

function resetTutorial(){
    step = 1;
}

function nextStep(){
    await defocusAll();
    step++;
    if(step == 1){
        tutorialStep1();
    }
    if(step == 2){
        // tutorialStep2();
    }
    if(step == 3){
        // tutorialStep3();
    }
    if(step == 4){
        // tutorialStep4();
    }
    if(step <= 0 || step >= 5){
        // error
    }
}

async function defocusAll(){
    for(let i = 1; i <= 4; i++){
        let button = document.getElementById("button-option-" + i);
        button.classList.remove("swivel");
        button.disabled = true;
    }
}

async function tutorialStep1(){
    await setRound();
    await setOptions();
    await focusAnswerButton();
}
    
async function focusAnswerButton(){
    answerButton.disabled = false;
    await answerButton.classList.add("swivel");
}