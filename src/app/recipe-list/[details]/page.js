"use client";

import RecipeDetailsItem from "@/components/recipe-details";
import React from "react";

async function fetchRecipeDetails(currentRecipeid) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeid}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return (
    <div>
      <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
    </div>
  );
}

export default RecipeDetails;
