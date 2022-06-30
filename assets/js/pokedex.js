let typeFilter = [];
let weaknessFilter = [];

const allTypes = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];


async function toggleButton(id){
    const button = document.getElementById(id);
    const pokeType = id.split("-")[0];
    const buttonType = id.split("-")[1];
    
    const state = button.className.split(" ").slice(-1).pop();
    if(state !== "active"){
        button.classList.add('active');
        
        if(buttonType === "type"){
            typeFilter.push(pokeType)
        } else{
            
            
//             if(pokeType === "normal"){
                
//             }
            
//             if(pokeType ==="fire"){
                
//             }
            
//                if(pokeType ==="water"){
                
//             }
            
//                if(pokeType ==="electric"){
                
//             }
            
//                if(pokeType ==="grass"){
                
//             }
            
//                if(pokeType ==="ice"){
                
//             }
            
//                if(pokeType ==="fighting"){
                
//             }
            
//                if(pokeType ==="ground"){
                
//             }
            
//                if(pokeType ==="flying"){
                
//             }
            
//                if(pokeType ==="psychic"){
                
//             }
            
//                if(pokeType ==="bug"){
//                 weaknessFilter.push("fire");
//                 weaknessFilter.push("flying");
//                 weaknessFilter.push("rock");
//             }
            
//                if(pokeType ==="rock"){
                
//             }
            
//                if(pokeType ==="ghost"){
                
//             }
            
//                if(pokeType ==="dragon"){
                
//             }
            
//                if(pokeType ==="dark"){
                
//             }
            
//                if(pokeType ==="steel"){
                
//             }
            
//                if(pokeType ==="fire"){
                
//             }
            
//                if(pokeType ==="fire"){
                
//             }
            
        }
        
    } else {
        button.classList.remove('active');
        
        if(buttonType === "type"){
            
            typeFilter = typeFilter.filter(function(type){
                return type != pokeType;
            });
            
        } else{
            
            // weaknessFilter = weaknessFilter.filter(function(weakness){
            //     return weakness != pokeType;
            // });
            
        }
    }
    
    await updateRows();
     
}


function resetFilters(){
    typeFilter = [];
    weaknessFilter = [];

    for(let i = 0; i < allTypes.length; i++){
        let typeId = allTypes[i] + "-type-control";
        let weaknessId = allTypes[i] + "-weakness-control";
        
        let typeButton = document.getElementById(typeId);
        let weaknessButton = document.getElementById(weaknessId);
        
        let typeState = typeButton.className.split(" ").slice(-1).pop();
        let weaknessState = weaknessButton.className.split(" ").slice(-1).pop();
        
        if(typeState === "active"){
            typeButton.classList.remove("active");
        }
        
        if(weaknessState === "active"){
        weaknessButton.classList.remove('active');
        }
    }
    
}


