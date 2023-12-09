import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe []>();

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

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
