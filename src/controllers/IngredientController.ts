import { Request, Response } from "express";
import  IngredientModel from "../models/IngredientModel";

export class IngredientController {
  
  public showAll(httpReq: Request, httpRes: Response) {

    const ingredientModel = new IngredientModel;
    ingredientModel.getAll().then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(200).send(modelRes);

    })
  }

  public show(httpReq: Request, httpRes: Response) {

    const ingredientModel = new IngredientModel;
    ingredientModel.get(httpReq.params.id).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(200).send(modelRes);

    })
  }

  public new(httpReq: Request, httpRes: Response) {

    const ingredientModel = new IngredientModel;
    ingredientModel.new(httpReq.body.name).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(201).send(modelRes);

    })
  }

  public edit(httpReq: Request, httpRes: Response) {

    const ingredientModel = new IngredientModel;
    ingredientModel.edit(httpReq.params.id,httpReq.body.name).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(201).send(modelRes);

    })
  }

  public delete(httpReq: Request, httpRes: Response) {

    const ingredientModel = new IngredientModel;
    ingredientModel.del(httpReq.params.id).then(modelRes => {

      httpRes.setHeader('Content-Type', 'application/json');
      httpRes.status(204).send(null);

    })
  }
}