import { RecipeRow } from "../components/RecipeRow";
import { allRecipes } from "../data/recipes/recipes";

export default function Page() {
  return (
    <div>
      Welcome to the Recipe Site!
      {allRecipes.map((recipe) => {
        return <RecipeRow key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
}
