import React from "react";
import Image from "next/image";
import { recipes } from "../constants/data";

const RecipeCard = () => {
  const recipe = recipes[0];

  return (
    <main className="body-background">
      <div className="recipe-card">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={480}
          height={200}
        />

        <h1>{recipe.title}</h1>
      </div>
    </main>
  );
};

export default RecipeCard;
