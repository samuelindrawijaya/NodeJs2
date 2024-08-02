import {recipeBtn,recipeImg,recipeInstruction,recipeId } from '../constant/constant.js';
import {ingredientsList} from '../src/createBahan.js';

export const setRecipe = async(result) => {
    
    recipeImg.src = result['meals'][0]['strMealThumb'];
    recipeImg.style.width = "200px";
    recipeId.innerHTML = result['meals'][0]['strMeal'];
    
    // recipeInstruction.innerHTML = result['meals'][0]['strInstructions'];
    // recipeInstruction.style.maxWidth = "1200px";
    recipeBtn.style.visibility = "hidden"; 


    let recipeContainer = document.getElementById("recipeContainer");
    //<p class="recipe-instruction" id="recipeInstruction"></p>
    let getH3 = document.createElement("h3");
    getH3.appendChild(document.createTextNode('ingredients'));

    recipeContainer.appendChild(getH3);

    ingredientsList(result);

    let getP = document.createElement("p");
    getP.setAttribute("class", "recipe-instruction");
    getP.appendChild(document.createTextNode(result['meals'][0]['strInstructions']));
    getP.style.maxWidth = "1200px";
    recipeContainer.appendChild(getP);
    
    

    
}  