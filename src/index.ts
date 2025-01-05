import {
  CountryDataInterface,
  StateDataInterface,
  CityDataInterface,
} from "./interface/index";

import * as countryData from "./data/country.json";
import * as stateData from "./data/state.json";
import * as cityData from "./data/city.json";

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

  getStates(): StateDataInterface[] {
    return this.stateList;
  }

  // Select a state by its Name
  selectState(stateName: string) {
    const state = this.stateList.filter((s) => s.name === stateName)[0];

    this.currentState = state;
  }

  getCities(): CityDataInterface[] {
    if (!this.currentState) {
      return [];
    }
    return this.cityList.filter(
      (city) => city.state_id === this.currentState?.id
    );
  }
}
