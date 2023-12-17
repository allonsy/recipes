import { Recipe, newIngredient, Unit } from "@/models/recipe";

const recipe: Recipe = {
  id: "R-XQijUo-ujP98U80t50A",
  name: "Israeli Salad",
  tags: ["Salad", "Appetizer", "Middle Eastern"],
  servings: 4,
  ingredients: [
    newIngredient(2, Unit.Quantity, "Cucumbers"),
    newIngredient(2, Unit.Quantity, "Tomatoes"),
    newIngredient(1, Unit.Quantity, "Bell Peppers"),
    newIngredient(1, Unit.Quantity, "Red Onion"),
    newIngredient(1, Unit.Tablespoon, "Olive Oil"),
    newIngredient(1, Unit.Tablespoon, "Good Balsalmic Vinegar"),
    newIngredient(1, Unit.Tablespoon, "Sumac"),
    newIngredient(1.5, Unit.Teaspoon, "Table Salt"),
    newIngredient(1, Unit.Teaspoon, "Aleppo Pepper"),
  ],
  steps: [
    "Chop the cucumbers, bell peppers, and tomato. Mix them with a generous helping of salt and let sit for 30 minutes in a strainer",
    "While the vegetables are brining, chop the onion into small pieces",
    "After the time has elapsed, drain and press water out of the vegetables. Then rinse with cold water to remove excess salt. Let the vegetables drain for 5 more minutes",
    "Mix the vegetables with the oil, salt, vinegar, and spices",
  ],
  links: [],
  notes: [],
};

export default recipe;
