import { ICountry } from './typings';

const countries = require('./data/countries.json');

/**
 * Country module.
 */
const Country = {
    /**
     * Get all countries
     * @returns {ICountry[]} Returns all countries
     * @example Country.getAll();
    */
    getAll: (): ICountry[] => countries,
    /**
     * Get country by ISO code
     * @param {string} code - ISO code
     * @returns {ICountry} Returns country
     * @example Country.getByISO('US');
    */
    getByISO: (code: string): ICountry | undefined => (countries as ICountry[]).find(country => country.iso === code)
};

export default Country;