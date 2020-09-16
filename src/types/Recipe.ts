import { RecipeInterface } from "./RecipeInterface";
export class Recipe implements RecipeInterface {
    id: number;
    name: string;
    category: string;
    picture: string;
    score: number;

    constructor(name,category,id?,picture?,score?) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.picture = picture;
        this.score = score;
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
}