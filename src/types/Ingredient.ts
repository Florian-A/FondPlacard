import { IngredientInterface } from "./IngredientInterface";
class Ingredient implements IngredientInterface {
    id: number;
    name: string;

    constructor(name,id?) {
        this.id = id;
        this.name = name;
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
}