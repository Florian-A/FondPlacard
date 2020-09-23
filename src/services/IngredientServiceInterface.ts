export interface IngredientServiceInterface {

    getAll(): void;
    get(id:number): void;
    create(name:string): void;
    edit(id:number,name:string): void;
    del(id:number): void;
}