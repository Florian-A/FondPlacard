import { Request, Response } from "express";
import { IngredientService } from "../services/IngredientService";

export class IngredientController {

  private ingredientService;

  constructor() {
    this.ingredientService = new IngredientService;
  }

  public showAll = async (httpReq: Request, httpRes: Response) => {

    try {
      const ingredients = await this.ingredientService.getAll()
      if (ingredients) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(ingredients);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Ingredients not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public show = async (httpReq: Request, httpRes: Response) => {

    try {
      const ingredient = await this.ingredientService.get(httpReq.params.id)
      if (ingredient) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(200).send(ingredient);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Ingredient not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public new = async (httpReq: Request, httpRes: Response) => {

    try {
      const ingredient = await this.ingredientService.create(httpReq.body.name)
      if (ingredient) {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(201).send(ingredient);
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Ingredient not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public edit = async (httpReq: Request, httpRes: Response) => {

    try {
      const ingredient = await this.ingredientService.get(httpReq.params.id)
      if (ingredient) {
        const ingredientEdited = await this.ingredientService.edit(httpReq.params.id, httpReq.body.name)
        if (ingredientEdited) {
          httpRes.setHeader('Content-Type', 'application/json');
          httpRes.status(201).send(ingredientEdited);
        }
        else {
          httpRes.setHeader('Content-Type', 'application/json');
          httpRes.status(500).send({ 'Error': "Ingredient edition failed" });
        }
      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Ingredient not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }

  public delete = async(httpReq: Request, httpRes: Response) => {

    try {
      const ingredient = await this.ingredientService.get(httpReq.params.id)
      if (ingredient) {
        await this.ingredientService.del(httpReq.params.id)
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(204).send();

      }
      else {
        httpRes.setHeader('Content-Type', 'application/json');
        httpRes.status(500).send({ 'Error': "Ingredient not found" });
      }
    }
    catch (err: any) {
      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(500).send({ 'Error': err });
    }
  }
}