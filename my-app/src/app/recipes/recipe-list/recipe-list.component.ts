import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Tasty Recipe', 'Something really tasty', 'https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg'),
    new Recipe('A Tasty Recipe', 'Something really tasty', 'https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg'),
  ];

}