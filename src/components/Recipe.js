import React, {useContext} from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

export default function Recipe(recipe) {
    const { handleRecipeDelete } = useContext(RecipeContext)
  return (
    <div className='recipe'>
        <div className='recipe__header'>
            <h3 className='recipe__title'>{recipe.name}</h3>
            <div>
            <button className='btn btn--primary mr-1'>Edit</button>
            <button className='btn btn--danger' onClick={() =>recipe.handleRecipeDelete(recipe.id)}>Delete</button>
            </div>
        </div>
        <div>
            <span>Cook Time</span>
            <span>{recipe.cookTime}</span>
        </div>
        <div>
            <span>Serving</span>
            <span>{recipe.servings}</span>
        </div>
        <div>
            <span>Instruction</span>
            <div>
                {recipe.instructions}
            </div>
        </div>
        <div>
            <span>Ingredients</span>
            <div>
                <IngredientList ingredients= {recipe.ingredients} />
            </div>
        </div>
    </div>
  )
}

//or 


// export default function Recipe({name, cookTime, servings, instructions}) {
//     
// const {name, cookTime, servings, instructions} = props // destructuring later then pass props only in the parameter
//return (
//       <div>
//           <div>
//               <h3>{name}</h3>
//               <div>
//               <button>Edit</button>
//               <button>Delete</button>
//               </div>
//           </div>
//           <div>
//               <span>Cook Time</span>
//               <span>{cookTime}</span>
//           </div>
//           <div>
//               <span>Serving</span>
//               <span>{servings}</span>
//           </div>
//           <div>
//               <span>Instruction</span>
//               <div>
//                   {instructions}
//               </div>
//           </div>
//       </div>
//     )
//   }