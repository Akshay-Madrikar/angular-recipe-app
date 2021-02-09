import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-cress-club-sandwich_0-43a103c.jpg?webp=true&quality=90&resize=500%2C454',
      [new Ingredient('Bread', 2), new Ingredient('Tomato', 2)]
    ),
    new Recipe(
      'Burger',
      'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
      [new Ingredient('Bun', 1), new Ingredient('Cheese', 2)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
