export interface RecipeServiceInterface {

    getAll(): void;
    get(id:number): void;
    create(name:string,category:string,picture:string,ingredientsId:Array<number>): void;
    edit(id:number,name:string,category:string,picture:string,ingredientsId:Array<number>): void;
    del(id:number): void;
    voteFor(vote:number): void;
    searchByIngredientID(ingredientID:number): void;
    searchByIngredientName(ingredientName:string): void;
    searchByName(recipeName:string): void;
}