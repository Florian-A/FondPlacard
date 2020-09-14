interface IRecipe {
    id: number;
    name: string;
    category: string;
    picture: string;
    score: number;

    getId(): number;
    getName(): string;
    setName(name:string): void;
    getCategory(): string;
    setCategory(category:string): void;
    getPicture(): string;
    setPicture(picture:string): void;
    getScore(): number;
    setScore(score:number): void;
}