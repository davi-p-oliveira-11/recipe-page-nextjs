// struture of teh data

import { Recipe } from "@/constants/types";

export const recipes: Recipe[] = [
  {
    imageUrl: "/public/images/image-omelette.jpeg",
    title: "Simple Omelette Recipe",
    subText:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables or meat.",
    preparationTime: {
      total: "Approximately 10 minutes",
      preparation: " 5 minutes",
      cookingTime: "5 minutes",
    },
    ingredients: [
      "2-3 large eggs",
      "Salt to Taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional filings: cheese, diced vegetables, cooked meats, herbs.",
    ],
    instructions: [
      {
        title: "Beat the eggs:",
        description:
          "In a bowl beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
      },
      {
        title: "Beat the eggs:",
        description:
          "In a bowl beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
      },
      {
        title: "Beat the eggs:",
        description:
          "In a bowl beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
      },
      {
        title: "Beat the eggs:",
        description:
          "In a bowl beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
      },
      {
        title: "Beat the eggs:",
        description:
          "In a bowl beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
      },
      {
        title: "Beat the eggs:",
        description:
          "In a bowl beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffer texture.",
      },
    ],
    nutrition: {
      subtext: "lorem ipsum",
      table: {
        title: "lorem ipsum",
        quantity: "999kcal",
      },
    },
  },
];
