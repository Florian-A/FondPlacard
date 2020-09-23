import { RecipeServiceInterface } from "./RecipeServiceInterface";

export class RecipeService implements RecipeServiceInterface {

    getAll(): void {
        console.log("WIP");
    }
    get(id:number): void {
        console.log("WIP");
    }
    create(name:string,category:string,picture:string,ingredientsId:Array<number>): void {
        console.log("WIP");
    }
    edit(id:number,name:string,category:string,picture:string,ingredientsId:Array<number>): void {
        console.log("WIP");
    }
    del(id:number): void {
        console.log("WIP");
    }
    voteFor(vote:number): void {
        console.log("WIP");
    }
    searchByIngredientID(ingredientID:number): void {
        console.log("WIP");
    }
    searchByIngredientName(ingredientName:string): void {
        console.log("WIP");
    }
    searchByName(recipeName:string): void {
        console.log("WIP");
    }
}