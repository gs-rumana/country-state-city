import { ICountry } from './typings';
/**
 * Country module.
 */
declare const Country: {
    /**
     * Get all countries
     * @returns {ICountry[]} Returns all countries
     * @example Country.getAll();
    */
    getAll: () => ICountry[];
    /**
     * Get country by ISO code
     * @param {string} code - ISO code
     * @returns {ICountry} Returns country
     * @example Country.getByISO('US');
    */
    getByISO: (code: string) => ICountry | undefined;
};
export default Country;
//# sourceMappingURL=Country.d.ts.map