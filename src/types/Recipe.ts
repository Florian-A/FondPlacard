import { RecipeInterface } from "./RecipeInterface";
export class Recipe implements RecipeInterface {
    id: number;
    name: string;
    category: string;
    picture: string;
    score: number;
    ingredientsId: Array<number>;

    constructor(name,category,id?,picture?,score?,ingredientsId?) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.picture = picture;
        this.score = score;
        this.ingredientsId = ingredientsId ? ingredientsId : [];
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name:string): void {
        this.name = name;
    }
    public getCategory(): string {
        return this.category;
    }
    public setCategory(category:string): void {
        this.category = category;
    }
    public getPicture(): string {
        return this.picture;
    }
    public setPicture(picture:string): void {
        this.picture = picture;
    }
    public getScore(): number {
        return this.score;
    }
    public setScore(score:number): void {
        this.score = score;
    }
    public getIngredientsId(): Array<number> {
        return this.ingredientsId;
    }
    public addIngredientId(ingredientId:number): void {
        this.ingredientsId.push(ingredientId);
    }
}