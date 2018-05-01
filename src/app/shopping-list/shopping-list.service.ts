//Service for managing shopping list features and data. Will be used by Recipe to add ingredients

import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Kale', 1),
    new Ingredient('Spinach', 1),
    new Ingredient('Onion', 1)
  ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  removeIngredient(id){
  }

  adjustIngredient(ingredient){
  }

    

}