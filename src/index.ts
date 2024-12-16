import {
  CountryDataInterface,
  StateDataInterface,
  CityDataInterface,
} from "./interface/index";

import * as countryData from "./data/country.json"
import * as stateData from "./data/state.json"
import * as cityData from "./data/city.json"


export class CountryStateCitySelector {
  private countryList: CountryDataInterface[];
  private stateList: StateDataInterface[];
  private cityList: CityDataInterface[];

  private currentCountry: CountryDataInterface | null = null;
  private currentState: StateDataInterface | null = null;

  constructor() {
    this.countryList = countryData.data;
    this.stateList = stateData.data;
    this.cityList = cityData.data;
  }

  getCountries(): CountryDataInterface[] {
    return this.countryList;
  }

  selectCountry(countryId: number) {
    const selectedCountry = this.countryList.filter((c) => c.id === countryId);
    if (!selectedCountry) {
      throw new Error("Country not found");
    }
    this.currentCountry = selectedCountry[0];
    // Reset state when country changes
    this.currentState = null;
  }

  getStates(): StateDataInterface[] {
    if (!this.currentCountry) {
      throw new Error("No country selected");
    }
    return this.stateList.filter(
      (state) => state.country_id === this.currentCountry?.id
    );
  }

  // Select a state by its ID
  selectState(stateId: number) {
    const state = this.stateList.filter((s) => s.id === stateId)[0];
    if (!state || state.country_id !== this.currentCountry?.id) {
      throw new Error(
        "State not found or does not belong to the selected country"
      );
    }
    this.currentState = state;
  }

  getCities(): CityDataInterface[] {
    if (!this.currentState) {
      throw new Error("No state selected");
    }
    return this.cityList.filter(
      (city) => city.state_id === this.currentState?.id
    );
  }
}
