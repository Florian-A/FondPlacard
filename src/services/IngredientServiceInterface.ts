export interface IngredientServiceInterface {

    getAll(): any;
    get(id:number): any;
    create(name:string): any;
    edit(id:number,name:string): any;
    del(id:number): any;
}