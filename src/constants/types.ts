export interface Recipe {
  imageUrl: string;
  title: string;
  subText: string;
  preparationTime: {
    total: string;
    preparation: string;
    cookingTime: string;
  };
  ingredients: string[];
  instructions: {
    title: string;
    description: string;
  }[];
  nutrition: {
    subtext: string;
    table: {
      title: string;
      quantity: string;
    };
  };
}
