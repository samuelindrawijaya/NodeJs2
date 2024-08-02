import {fetchData} from './fetchDataFunction.js';
import {urlParam, apiMethod} from '../constant/constant.js';
import {setRecipe} from './setRecipe.js';
export function loadData()
{

   fetchData(urlParam,apiMethod.GET)
   .then(async function(result)
   {    
      try{
         setRecipe(result);
      }
      catch(err){
         //catching true error without throw ? throw up wkwkkw
         alert(err.message);
      }   
   })
   .catch(function(){
    console.log('connection timeout, retry maybe ?')
   })
}
