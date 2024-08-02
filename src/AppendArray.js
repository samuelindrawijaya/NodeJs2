export function functionAppendArray(ArrayIngredients, ArrayStrMeasure) {
  try {
    const datagabung = ArrayIngredients.reduce((obj, key, index) => {
      obj[key] = ArrayStrMeasure[index];
      return obj;
    }, {});
    for (const [key, value] of Object.entries(datagabung)) {
      // <p class="recipe-ingredients" id="">test</p>
      console.log("test");
      let recipeContainer = document.getElementById("recipeContainer");
      let getP = document.createElement("p");
      getP.setAttribute("class", "recipe-ingredients");
      getP.appendChild(document.createTextNode(key + " : " + value));
      recipeContainer.appendChild(getP);
    }
  } catch (e) {
    return e.message;
  }
}
