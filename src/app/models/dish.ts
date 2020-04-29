export interface DishModel {
    id : number;
    name : string; 
    description: string; 
    allergens: Array<string>;
    price: number; 
    urlImg?: string;
    isSelected?: boolean;
}
