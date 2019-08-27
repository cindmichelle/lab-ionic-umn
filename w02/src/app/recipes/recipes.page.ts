import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Array<Recipe>;
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(recipeId: string) {
    this.recipesService.getRecipe(recipeId);
  }

  deleteRecipe(recipeId: string) {
    this.recipesService.deleteRecipe(recipeId);
    this.ngOnInit();
  }
}
