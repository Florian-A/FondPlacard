import { Request, Response } from "express";
import  RecipeModel from "../models/RecipeModel";

export class RecipeController {
  
  public showAll(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.getAll().then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(200).send(modelRes);

    })
  }

  public show(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.get(httpReq.params.id).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(200).send(modelRes);

    })
  }

  public new(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.new(httpReq.body.name,httpReq.body.category,httpReq.body.picture,httpReq.body.ingredientsId).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(201).send(modelRes);

    })
  }

  public edit(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.edit(httpReq.params.id,httpReq.body.name,httpReq.body.category,httpReq.body.picture,httpReq.body.ingredientsId).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(201).send(modelRes);

    })
  }

  public delete(httpReq: Request, httpRes: Response) {

    const recipeModel = new RecipeModel;
    recipeModel.del(httpReq.params.id).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(204).send(null);

    })
  }
}