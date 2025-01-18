import React from "react";
import Image from "next/image";
import imageUrl from "../constants/data";
import { recipes } from "../constants/data";

const RecipeCard = () => {
  const recipe = recipes[0];

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
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
