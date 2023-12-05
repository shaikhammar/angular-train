import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Tasty Recipe', 
    'Something really tasty', 
    'https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg',
    [new Ingredient ('Meat', 3),
     new Ingredient('Bread', 2)]),
    new Recipe('Another Tasty Recipe', 
    'Something really really really tasty', 
    'https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg',
    [new Ingredient ('Chicken', 5),
     new Ingredient('Cheese', 1)]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
