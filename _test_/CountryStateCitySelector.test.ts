import { CountryStateCitySelector } from "../src";
import countryData from "../src/data/country.json";
import stateData from "../src/data/state.json";
import cityData from "../src/data/city.json";

describe("CountryStateCitySelector", () => {
  let selector;

  beforeEach(() => {
    selector = new CountryStateCitySelector();
  });

  test("should load all countries", () => {
    const countries = selector.getCountries();
    expect(countries).toEqual(countryData); // Ensure countries match the data
  });

  test("should select a country and get its states", () => {
    selector.selectCountry(1);
    const states = selector.getStates();
    const expectedStates = stateData.data.filter(
      (state) => state.country_id === 1
    );
    expect(states).toEqual(expectedStates); // Ensure correct states are returned
  });

  test("should throw an error if no country is selected before fetching states", () => {
    expect(() => selector.getStates()).toThrow("No country selected");
  });

  test("should select a state and get its cities", () => {
    selector.selectCountry(1);
    selector.selectState(1);
    const cities = selector.getCities();
    const expectedCities = cityData.data.filter((city) => city.state_id === 1);
    expect(cities).toEqual(expectedCities); // Ensure correct cities are returned
  });

  test("should throw an error if no state is selected before fetching cities", () => {
    selector.selectCountry(1);
    expect(() => selector.getCities()).toThrow("No state selected");
  });

  test("should throw an error for invalid country ID", () => {
    expect(() => selector.selectCountry(999)).toThrow("Country not found");
  });

  test("should throw an error for invalid state ID", () => {
    selector.selectCountry(1);
    expect(() => selector.selectState(999)).toThrow(
      "State not found or does not belong to the selected country"
    );
  });
});
