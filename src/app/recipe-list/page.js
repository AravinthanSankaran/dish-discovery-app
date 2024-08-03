import React from "react";
import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();

    return data?.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}

export default Recipes;
