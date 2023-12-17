export enum Unit {
  Gram,
  Ounce,
  Quantity,
  Kilogram,
  Pound,
  Celsius,
  Fahrenheit,
  Teaspoon,
  Tablespoon,
  Mililiter,
  Cup,
}

type Ingredient = {
  amount: number;
  unit: Unit;
  name: string;
};

export const newIngredient = (
  amount: number,
  unit: Unit,
  name: string,
): Ingredient => {
  return {
    amount,
    unit,
    name,
  };
};

export type Recipe = {
  id: string;
  name: string;
  tags: string[];
  servings: number;
  ingredients: Ingredient[];
  oven?: Ingredient;
  steps: string[];
  links: string[];
  notes: string[];
};
