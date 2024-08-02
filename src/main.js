import {fetchData} from './fetchDataFunction.js';

const urlParam = 'https://www.themealdb.com/api/json/v1/1/random.php';


fetchData(urlParam)
 .then(function(result){    
    document.getElementById("recipeImg").src = data['meals'][0]['strMealThumb'];
    document.getElementById("recipeId").innerHTML = data['meals'][0]['strMeal'];
    document.getElementById("recipeInstruction").innerHTML = data['meals'][0]['strInstructions'];
 })
 .catch(function(){
  console.log('connection timeout, retry maybe ?')
 })