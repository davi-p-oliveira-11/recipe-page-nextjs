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
          width={620}
          height={240}
        />

        <h1 className="text-[2.5rem] font-bold mt-4 font-young-serif text-stone900">
          {recipe.title}
        </h1>
      </div>
    </main>
  );
};

export default RecipeCard;
