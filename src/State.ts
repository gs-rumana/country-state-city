import { IState } from './typings';

const states = require('./data/states.json');

/**
 * State module.
 */
const State = {
    /**
     * Get all states
     * @returns {IState[]} Returns all states
     * @example State.getAll();
     */
    getAll: (): IState[] => states,
    /**
     * Get state by State Code
     * @param {string} code - State Code
     * @returns {IState} Returns state
     * @example State.getOne('CA');
     */
    getOne: (code: string): IState | undefined => (states as IState[]).find(state => state.state_code === code),
    /**
     * Get state by Country Code
     * @param {string} countryCode - Country Code
     * @returns {IState[]} Returns state
     * @example State.getByCountry('US');
     */
    getByCountry: (countryCode: string): IState[] => (states as IState[]).filter(state => state.country_code === countryCode)
}

export default State;
