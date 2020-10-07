import { IngredientModel } from "../models/IngredientModel";
import { IngredientServiceInterface } from "./IngredientServiceInterface";

export class IngredientService implements IngredientServiceInterface {

    public ingredientModel;

    private static instance: IngredientService;

    constructor() {
        this.ingredientModel = new IngredientModel;
    }

    static getInstance(): IngredientService {
        if (!IngredientService.instance) {
            IngredientService.instance = new IngredientService();
        }
        return IngredientService.instance;
    }

    public getAll: any = async () => {
        return this.ingredientModel.getAll();
    }
    public get: any = async (id: number) => {
        return this.ingredientModel.get(id);
    }
    public create: any = async (name: string) => {
        console.log(name);
        return this.ingredientModel.create(name);
    }
    public edit: any = async (id: number, name: string) => {
        return this.ingredientModel.edit(id, name);
    }
    public del: any = async (id: number) => {
        return this.ingredientModel.del(id);
    }
}