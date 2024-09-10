import { ICity } from "./typings";
/**
 * City module.
 */
declare const City: {
    /**
     * Get all cities
     * @returns {ICity[]} Returns all cities
     */
    getAll: () => ICity[];
    /**
     * Get city by State Code and Country Code
     * @param {string} stateCode - State Code
     * @param {string} countryCode - Country Code
     * @returns {ICity[]} Returns city
     */
    getByState: (stateCode: string, countryCode: string) => ICity[];
    /**
     * Get city by State ID
     * @param {number} stateId - State ID
     * @returns {ICity[]} Returns city
     */
    getByStateId: (stateId: number) => ICity[];
};
export default City;
//# sourceMappingURL=City.d.ts.map