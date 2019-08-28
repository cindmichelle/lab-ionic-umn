import {Injectable} from '@angular/core';
import {Recipe} from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Array<Recipe> = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl:
        'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge'],
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl:
        'https://cdn.idntimes.com/content-images/post/20190502/c22eb92d2d3738702fb0434e339cfbca-1-b9b0ec35aa17b97860c72fe047cd216d_600x400.jpg',
      ingredients: ['Lontong', 'Daun Pisang'],
    },
    {
      id: 'r3',
      title: 'Pizza Margarita',
      imageUrl:
        'https://img.taste.com.au/Wf8mL7LT/w720-h480-cfill-q80/taste/2016/11/jessica-39581-2.jpeg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge'],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    const selectedRecipe = this.recipes.find(
      (recipe) => recipeId === recipe.id,
    );
    return selectedRecipe;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipeId !== recipe.id);
  }
}
