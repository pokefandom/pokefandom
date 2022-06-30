let rowCount = 1;
let bottomFirstPokemonNum = 1;
let bottomLastPokemonNum = 4;
let lastPokemonNum = 1;

async function updateRows() {
    document.getElementById("poke-cards").innerHTML = '';
    rowCount = 1;
    bottomFirstPokemonNum = 1;
    bottomLastPokemonNum = 4;
    lastPokemonNum = 1;
    
    for(let i = rowCount; i >= 0; i--){
    await createNewRow();
    }
}

async function canPost(i) {
    // console.log("EMPTY TYPE FILTER: " + typeFilter.length);
    // console.log("EMPTY WEAKNESS FILTER: " + weaknessFilter.length);

    let pokemonNum = i;
    let pokemon = await getPokemonFromApi(i);
    let types = pokemon.types;

    var canPost = false;
    if (typeFilter.length === 0 && weaknessFilter.length === 0) {
        canPost = true;
        console.log("EMPTY FILTERS");
        return canPost;
    }

            for(let z = 0; z < types.length; z++){
                let typeToMatch =   types[z].type.name;

                if(typeFilter.lengh != 0){
                    for(let j = 0; j < typeFilter.length; j++){
                        // console.log("TypeToMatch " + typeToMatch.toString() + " == TypeFilter " + typeFilter[j]);
                        if(typeFilter[j] === await typeToMatch){
                            canPost = true;
                            console.log("FOUND TYPE MATCH");
                            return canPost;
                        }
                    }
                }

                // if(weaknessFilter.length !== 0){
                //     for(let k = 0; k < weaknessFilter.length; k++){
                //         // console.log("weaknessToMatch" + typeToMatch + " == weaknessFilter " + weaknessFilter[j]);
                //         if(weaknessFilter[j] ===  typeToMatch){
                //             canPost = true;
                //             console.log("FOUND WEAKNESS MATCH");
                //             return canPost;
                //         }
                //     }
                // }
                console.log("CAN POST" + canPost);

        }
    // canPost = true;
    return canPost;
}

function setPokemonCard(sprite, index, name) {
    let card = document.getElementById('poke-' + index);
    card.firstElementChild.src = sprite;

}

async function createNewRow() {

    // console.log("EMPTY TYPE FILTER: " + typeFilter.length);
    //     console.log("EMPTY WEAKNESS FILTER: " + weaknessFilter.length);

    let container = document.getElementById("poke-cards");



    let numRowsToCreate = 2;
    for (let x = 0; x < numRowsToCreate; x++) {


    let row = document.createElement("div");
    row.className = "row";
    row.id = "poke-" + bottomFirstPokemonNum + "-" + bottomLastPokemonNum;

    let column = document.createElement("div");
    column.className = "col";

    let cardGroup = document.createElement("div");
    cardGroup.className = "card-group";

        console.log("BOTTOM LAST POKEMON" + x);
        let i = lastPokemonNum;
        let open = i;
        let close = i + 4;
        while (i <= close) {
            let allowed = await canPost(i);
            console.log("ALLOWED VALUE: " + allowed + "== false" + " : " + (await allowed !== false));
            while (await allowed == false) {
                i++;
                open++;
                close++;
                allowed = await canPost(i);
                console.log("CANNOT POST POKEMON " + i + " " + await allowed);
                // if (i == 2) {
                //     return;
                // }
            }
            console.log("DONE SEARCHING: " + i + " " + bottomFirstPokemonNum + " " + bottomLastPokemonNum);
            // i = bottomFirstPokemonNum;
            let pokemon = await getPokemonFromApi(i);
            // let pic = 
            // let index = pokemonNum;
            let name = await pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            let thumbnail = document.createElement("div");
            thumbnail.className = "card";
            thumbnail.style = "border-radius: 51px;padding: 30px;";
            thumbnail.setAttribute("data-bs-target", "#modal-1");
            thumbnail.setAttribute("data-bs-toggle", "modal");

            let sprite = document.createElement("img");
            sprite.className = "card-img-top w-100 d-block pokemon-sprite";
            sprite.src = await getPokemonSprite(pokemon);
            // sprite.style = "max-width: 345px;";

            thumbnail.appendChild(sprite);

            let cardBody = document.createElement("div");
            cardBody.className = "card-body pokemon-card-body";

            let cardBodyRowIndex = document.createElement("div");
            cardBodyRowIndex.className = "row";

            let cardBodyColumnIndex = document.createElement("div");
            cardBodyColumnIndex.className = "col";

            let cardBodyLabelIndex = document.createElement("p");
            cardBodyLabelIndex.style = "color: rgb(98,98,98)";
            cardBodyLabelIndex.innerHTML = "#" + i;

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


            //         make pokemon type labels
            for (let t = 0; t < await pokemon.types.length; t++) {
                console.log("MAKING LABELS");
                let type = pokemon.types[t].type.name;

                let cardBodyTypeColumn = document.createElement("div");
                
                cardBodyTypeColumn.className = "col";

                // let cardBodyTypeDiv = document.createElement("div");
                // cardBodyTypeLabel.className = ""



                cardBodyTypeColumn.className = document.className = "col d-flex label-type bg-" + type;
                cardBodyTypeColumn.innerHTML = "<span style='font-weight:bold color:#ffffff'>" + (type.charAt(0).toUpperCase() + type.slice(1)) + "</style>";
                cardBodyTypeColumn.style.fontWeight = 'bold';

                // let cardBodyTypeButton = document.createElement("div");
                // cardBodyTypeButton.className = "d-flex align-items-end";
                // cardBodyTypeButton.style = "padding: 10px;background: #9ddf97;border-radius: 59px;box-shadow: 0px 4px 8px;font-size: 13px;margin-top: 16px;";
                // cardBodyTypeButton.innerHTML = "Grass";

                cardBodyTypeRow.appendChild(cardBodyTypeColumn);
            }



            // cardBodyTypeColumn.appendChild(cardBodyTypeButton);
            // cardBodyTypeRow.appendChild(cardBodyTypeColumn);
            cardBody.appendChild(cardBodyTypeRow);

            thumbnail.appendChild(cardBody);

            cardGroup.appendChild(thumbnail);
            column.appendChild(cardGroup);
            column.appendChild(cardGroup);
            column.appendChild(cardGroup);
            column.appendChild(cardGroup);
            row.appendChild(cardGroup);
            container.append(row);
            
            i++;
            console.log("DONE MAKING A POKEMON CARD WITH ID: " + i + " " + bottomFirstPokemonNum + " " + bottomLastPokemonNum);
        }
        console.log("DONE CREATING ROW: " + rowCount + " " + bottomFirstPokemonNum + " " + bottomLastPokemonNum);
        lastPokemonNum = i;
        rowCount++;
        bottomFirstPokemonNum += i;
        bottomLastPokemonNum += bottomFirstPokemonNum;
        
    }
    
}

