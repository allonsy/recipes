import { Ingredient } from "./ingredient";

export type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  notes?: string[];
  links?: string[];
};
