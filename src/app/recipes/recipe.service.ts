/*Service that can be used by recipe feature for various functions. Will manage data,
etc. */ 
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Family Chow',
     'The Best Stuff',
     'https://vignette.wikia.nocookie.net/en.futurama/images/5/5e/Bachlorchow.png/revision/latest?cb=20130716181656',
      [
        new Ingredient('greens', 3),
        new Ingredient('Onion', 1)
      ]),
      new Recipe('Veggie Burger',
        'Grillable, delicious burger',
        'https://minimalistbaker.com/wp-content/uploads/2015/07/GRILLABLE-VEGGIE-BURGERS-SQUARE.jpg',
        [
          new Ingredient('black beans', 2),
          new Ingredient('brown rice', 1),
          new Ingredient('spices', 10)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    //using .slice to send a copy of the recipe array instead of a reference to the original one
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }
    
}