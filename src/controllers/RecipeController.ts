import { Request, Response } from "express";
import { RecipeService } from "../services/RecipeService";

export class RecipeController {

  private recipeService;

  constructor() {
    this.recipeService = new RecipeService;
  }

  public showAll = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipes = await this.recipeService.getAll()
      if (recipes) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(recipes);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public show = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipe = await this.recipeService.get(httpReq.params.id)
      if (recipe) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(recipe);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public new = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipe = await this.recipeService.create(httpReq.body.name, httpReq.body.category, httpReq.body.picture, httpReq.body.ingredientsId)
      if (recipe) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(201).send(recipe);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public edit = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipe = await this.recipeService.get(httpReq.params.id)
      if (recipe) {
        const recipeEdited = await this.recipeService.edit(httpReq.params.id, httpReq.body.name, httpReq.body.category, httpReq.body.picture, httpReq.body.ingredientsId)
        if (recipeEdited) {
          httpRes.setHeader('Content-Type', 'application/json');
          httpRes.status(200).send(recipeEdited);
        }
        else {
          httpRes.setHeader('Content-Type', 'application/json');
          httpRes.status(500).send({ 'Error': "Recipe edition failed" });
        }
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public delete = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipe = await this.recipeService.get(httpReq.params.id)
      if (recipe) {
        await this.recipeService.del(httpReq.params.id)
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(204).send();

      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public voteUp = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipe = await this.recipeService.get(httpReq.params.id)
      if (recipe) {
        const recipeVoted = await this.recipeService.vote(httpReq.params.id, +1)
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(recipeVoted);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public voteDown = async (httpReq: Request, httpRes: Response) => {

    try {
      const recipe = await this.recipeService.get(httpReq.params.id)
      if (recipe) {
        const recipeVoted = await this.recipeService.vote(httpReq.params.id, -1)
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(recipeVoted);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipe not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public search = async (httpReq: Request, httpRes: Response) => {
    
    try {
      let recipes = null;

      if(httpReq.body.name)
      {
        recipes = await this.recipeService.searchByName(httpReq.body.name)
      }
      else if (httpReq.body.ingredientId)
      {
        recipes = await this.recipeService.searchByIngredientId(httpReq.body.ingredientId)
      }
      else if (httpReq.body.ingredientName)
      {
        recipes = await this.recipeService.searchByIngredientName(httpReq.body.ingredientName)
      }

      if (recipes) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(recipes);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Recipes not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

}