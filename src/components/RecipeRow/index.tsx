import { FC } from "react";
import { Recipe } from "../../models/recipe";

type Props = {
  recipe: Recipe;
};

export const RecipeRow: FC<Props> = ({ recipe }: Props) => {
  return <div>{recipe.name}</div>;
};
