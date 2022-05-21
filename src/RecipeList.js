import React from "react";
import RecipeRow from "./RecipeRow";
import RecipeCreate from "./RecipeCreate";

function RecipeList({ recipes, setRecipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Cuisine</th>
            <th style={{ width: "10%" }}>Photo</th>
            <th style={{ width: "30%" }}>Ingredients</th>
            <th style={{ width: "30%" }}>Preparation</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
            />
          ))}
        </tbody>
      </table>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default RecipeList;
