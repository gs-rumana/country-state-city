import { ICity, IStateCity } from "./typings";

const cities = require("./data/cities.json");
const statesCities = require("./data/states+cities.json");

/**
 * City module.
 */
const City = {
  /**
   * Get all cities
   * @returns {ICity[]} Returns all cities
   */
  getAll: (): ICity[] => cities as ICity[],
  /**
   * Get city by State Code and Country Code
   * @param {string} stateCode - State Code
   * @param {string} countryCode - Country Code
   * @returns {ICity[]} Returns city
   */
  getByState: (stateCode: string, countryCode: string): ICity[] => {
    const state = (statesCities as IStateCity[]).find(
      (state: IStateCity) =>
        state.state_code === stateCode && state.country_code === countryCode
    );
    return state ? state.cities : [];
  },
  /**
   * Get city by State ID
   * @param {number} stateId - State ID
   * @returns {ICity[]} Returns city
   */
  getByStateId: (stateId: number): ICity[] => {
    const state = (statesCities as IStateCity[]).find(
      (state: IStateCity) => state.id === stateId
    );
    return state ? state.cities : [];
  },
};

export default City;
