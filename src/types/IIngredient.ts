interface IIngredient {
    id: number;
    name: string;

    getId(): number;
    getName(): string;
    setName(name:string): void;
}