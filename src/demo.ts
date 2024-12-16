import { CountryStateCitySelector } from "./index";

const selector = new CountryStateCitySelector();

console.log("Countries:", selector.getCountries());

// Select a country
selector.selectCountry(1);
// console.log("States in selected country:", selector.getStates());

// Select a state
selector.selectState(2);
console.log("Cities in selected state:", selector.getCities());
