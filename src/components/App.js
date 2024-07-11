import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
// import uuidv4 from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './Recipe';

export const RecipeContext = React.createContext()



function App() {
  const [recipe, setRecipe] = useState(sampleRecipes)
   const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete 
   }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'new',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Tnstr.',
      ingredients: [
        {
          id: uuidv4(), name: 'Name', amount: '1 Tbs'
        }
      ]
    }
    setRecipe([...recipe, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipe(recipe.filter(recipe =>  recipe.id !== id))
  }
  
  return (
    <RecipeContext.Provider value ={recipeContextValue}>
    <RecipeList recipes={recipe}/>
    </RecipeContext.Provider>
  )


}

const sampleRecipes = [
  {
    id: 1,
    name: "plain chicken",
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt of chicken\n 2. Put chicken in oven\n 3. Eatht chicken ",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      }, {
        id: 2,
        name: 'Salt',
        amount: '1 tBS'
      }
    ]
  }, {
    id: 2,
    name: "paneer",
    servings: 5,
    cookTime: '1:10',
    instructions: "1. Paneer bana\n 2. Aur kah ja",
    ingredients: [
      {
        id: 1,
        name: 'Paneer',
        amount: '3 pounds'
      }, {
        id: 2,
        name: 'Spices',
        amount: '3 tBS'
      }
    ]
  }
]

export default App;
