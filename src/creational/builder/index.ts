import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder();

console.log(mainDishBuilder.makeBeverege().makeDessert().makeMeal().getMeal())