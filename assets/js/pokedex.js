let rowCount = 1;
let bottomFirstPokemonNum = 1;
let bottomLastPokemonNum = 4;

async function populateRow(){
    
    for(let i = bottomFirstPokemonNum; i <= bottomLastPokemonNum; i++){
        
        let pokemon = await getPokemonFromApi(i);
        let sprite = await getPokemonSprite(pokemon);
        let index = i;
        let name = pokemon.name
        // // let type;
        setPokemonCard(sprite, index, name);
    }
    rowCount += 1;
    bottomFirstPokemonNum += 4;
    bottomLastPokemonNum += 4;
}

function setPokemonCard(sprite, index, name){
    let card = document.getElementById('poke-'+index);
    card.firstElementChild.src = sprite;
    
}

async function createNewRow(){
    let container = document.getElementById("poke-cards");
    
    for(let x = 0; x < 2; x++){
    
    let row = document.createElement("div");
    row.className = "row";
    row.id = "poke-" + bottomFirstPokemonNum + "-" + bottomLastPokemonNum;
    
    let column = document.createElement("div");
    column.className = "col";
    
    let cardGroup = document.createElement("div");
    cardGroup.className = "card-group";
    
    for(let i = bottomFirstPokemonNum; i <= bottomLastPokemonNum; i++){
    
    let pokemon = await getPokemonFromApi(i);
    // let pic = 
    let index = i;
    let name = await pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        
    let thumbnail = document.createElement("div");
    thumbnail.className = "card";
    thumbnail.style = "border-radius: 51px;padding: 30px;";
    
    let sprite = document.createElement("img");
    sprite.className = "card-img-top w-100 d-block";
    sprite.src = await getPokemonSprite(pokemon);
    sprite.style = "max-width: 345px;";
    
    thumbnail.appendChild(sprite);
    
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    let cardBodyRowIndex = document.createElement("div");
    cardBodyRowIndex.className = "row";
    
    let cardBodyColumnIndex = document.createElement("div");
    cardBodyColumnIndex.className = "col";
    
    let cardBodyLabelIndex = document.createElement("p");
    cardBodyLabelIndex.style = "color: rgb(98,98,98)";
    cardBodyLabelIndex.innerHTML = "#"+i;
    
    cardBodyColumnIndex.appendChild(cardBodyLabelIndex);
    cardBodyRowIndex.appendChild(cardBodyColumnIndex);
    cardBody.appendChild(cardBodyRowIndex);
    
    let cardBodyNameRow = document.createElement("div");
    cardBodyNameRow.className = "row";
    
    let cardBodyNameColumn = document.createElement("div");
    cardBodyNameColumn.className = document.className = "col";
    
    let cardBodyNameValue = document.createElement("h4");
    cardBodyNameValue.innerHTML = name;
    
    cardBodyNameColumn.appendChild(cardBodyNameValue);
    cardBodyNameRow.appendChild(cardBodyNameColumn);
    cardBody.appendChild(cardBodyNameRow);
    
    let cardBodyTypeRow = document.createElement("div");
    cardBodyTypeRow.className = "row";
    
    let cardBodyTypeColumn = document.createElement("div");
    cardBodyTypeColumn.className = document.className = "col d-flex";
    
    let cardBodyTypeButton = document.createElement("div");
    cardBodyTypeButton.className = "d-xl-flex";
    cardBodyTypeButton.style = "padding: 10px;background: #9ddf97;border-radius: 59px;box-shadow: 0px 4px 8px;font-size: 13px;margin-top: 16px;";
    cardBodyTypeButton.innerHTML = "Grass";
    
    cardBodyTypeColumn.appendChild(cardBodyTypeButton);
    cardBodyTypeRow.appendChild(cardBodyTypeColumn);
    cardBody.appendChild(cardBodyTypeRow);
    
    thumbnail.appendChild(cardBody);
    
    cardGroup.appendChild(thumbnail);
    column.appendChild(cardGroup);
    column.appendChild(cardGroup);
    column.appendChild(cardGroup);
    column.appendChild(cardGroup);
    row.appendChild(cardGroup);
    container.append(row);
    
    }
    rowCount++;
    bottomFirstPokemonNum += 4;
    bottomLastPokemonNum += 4;
    }
}

