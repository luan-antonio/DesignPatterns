import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { ComposedMeal } from "./composed-meal";
import { Rice, Beans, Meat, Beverage, Dessert } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol{
    private _meal: ComposedMeal = new ComposedMeal();


    reset(): this {
        this._meal = new ComposedMeal();
        return this;
    }

    makeBeverege(): this {
        const beverage = new Beverage('Bebida', 7);
        this._meal.add(beverage);
        return this;
    }

    makeDessert(): this {
        const dessert = new Dessert('Sobremesa', 14);
        this._meal.add(dessert);
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 8);
        const meat = new Meat('Carne', 12);
        this._meal.add(rice, beans, meat);
        return this;
    }

    getMeal(): ComposedMeal {
        return this._meal;
    }
}