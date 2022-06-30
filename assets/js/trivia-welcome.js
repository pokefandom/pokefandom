let gameType = "";

async function loadGamePage(){
    
        let container = document.getElementById("init-container");
    container.style.display = "block";
    
    //     let progress = document.getElementById("progress");
    // progress.style.display = "none";
    
    let gameDiv = document.getElementById("game-div");
    gameDiv.style.display = "none";
}

async function setupGame(id){
    console.log("clicked");
    gameType = id.split("-")[0];
    
    let container = document.getElementById("init-container");
    container.style.display = "none";
    
    // let progress = document.getElementById("progress");
    // progress.style.display = "block";
    
    let gameDiv = document.getElementById("game-div");
    gameDiv.style.display = "block";
    
    
    if(gameType == "learn"){
        await tutorialStep1();
    } else {
        await setRound();    
    }
    
}