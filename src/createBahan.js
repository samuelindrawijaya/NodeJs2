import {strIngredients,strMeasure} from '../constant/constant.js';
import {functionAppendArray} from '../src/AppendArray.js';
export function ingredientsList (result)
{
    let ArrayIngredients = [];
    let ArrayStrMeasure = []; 
    let bahan = '';
    for(let i = 1; i <= 20; i++)
    {
        bahan = result['meals'][0][strIngredients + i];
        if(bahan != '' || bahan != null)
        {
            ArrayIngredients.push(bahan);
        }
        bahan = result['meals'][0][strMeasure + i];
        if(bahan != '' || bahan != null)
        {
            ArrayStrMeasure.push(bahan);
        }
    }
    
    console.log(ArrayStrMeasure);
    functionAppendArray(ArrayIngredients,ArrayStrMeasure);

}