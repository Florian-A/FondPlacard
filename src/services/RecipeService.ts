import { Recipe } from "types/Recipe";
import { RecipeModel } from "../models/RecipeModel";
import { RecipeServiceInterface } from "./RecipeServiceInterface";

export class RecipeService implements RecipeServiceInterface {

    public recipeModel;

    private static instance: RecipeService;

    constructor() {
        this.recipeModel = new RecipeModel;
    }

    static getInstance(): RecipeService {
        if (!RecipeService.instance) {
            RecipeService.instance = new RecipeService();
        }
        return RecipeService.instance;
    }

    public getAll = async ()  =>  {
        return this.recipeModel.getAll();
    }
    public get = async (id: number) => {
        return this.recipeModel.get(id);
    }
    public create : any = async (name: string, category: string, picture: string, ingredientsId: Array<number>) =>  {
        return this.recipeModel.create(name, category, picture, ingredientsId);
    }
    public edit : any = async (id: number, name: string, category: string, picture: string, ingredientsId: Array<number>) => {
        return this.recipeModel.edit(id, name, category, picture, ingredientsId);
    }
    public del : any = async (id: number) => {
        return this.recipeModel.del(id);
    }
    vote(vote: number): any {
        console.log("WIP");
    }
    searchByIngredientID(ingredientID: number): any {
        console.log("WIP");
    }
    searchByIngredientName(ingredientName: string): any {
        console.log("WIP");
    }
    searchByName(recipeName: string): any {
        console.log("WIP");
    }
}