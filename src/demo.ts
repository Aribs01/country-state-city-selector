import { CountryStateCitySelector } from "./index";

const selector = new CountryStateCitySelector();

// console.log("States in selected country:", selector.getStates());

// Select a state
selector.selectState("Adamawa");
console.log("Cities in selected state:", selector.getCities());
