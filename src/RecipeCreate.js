import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialRecipeState = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
  };

  const [recipeForm, setRecipeForm] = useState(initialRecipeState);

  const handleChange = ({ target }) => {
    setRecipeForm({ ...recipeForm, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, recipeForm]);
    setRecipeForm({ ...initialRecipeState });
    console.log("Submitted:", recipeForm);
  };

  return (
    <form name="create" className="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "10%" }}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={recipeForm.name}
              />
            </td>
            <td style={{ width: "10%" }}>
              <input
                type="text"
                value={recipeForm.cuisine}
                name="cuisine"
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "10%" }}>
              <input
                type="url"
                value={recipeForm.photo}
                name="photo"
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "30%" }}>
              <textarea
                type="text"
                value={recipeForm.ingredients}
                name="ingredients"
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "30%" }}>
              <textarea
                type="text"
                value={recipeForm.preparation}
                name="preparation"
                onChange={handleChange}
              />
            </td>
            <td style={{ width: "10%" }}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
