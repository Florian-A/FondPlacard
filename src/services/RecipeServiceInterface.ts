export interface RecipeServiceInterface {

    getAll(): any;
    get(id: number): any;
    create(name: string, category: string, picture: string, ingredientsId: Array<number>): any;
    edit(id: number, name: string, category: string, picture: string, ingredientsId: Array<number>): any;
    del(id: number): any;
    vote(id: number, value: number): any;
    searchByName(recipeName: string): any;
    searchByIngredientId(ingredientID: number): any;
    searchByIngredientName(ingredientName: string): any;
}