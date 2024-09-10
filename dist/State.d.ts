import { IState } from './typings';
/**
 * State module.
 */
declare const State: {
    /**
     * Get all states
     * @returns {IState[]} Returns all states
     * @example State.getAll();
     */
    getAll: () => IState[];
    /**
     * Get state by State Code
     * @param {string} code - State Code
     * @returns {IState} Returns state
     * @example State.getOne('CA');
     */
    getOne: (code: string) => IState | undefined;
    /**
     * Get state by Country Code
     * @param {string} countryCode - Country Code
     * @returns {IState[]} Returns state
     * @example State.getByCountry('US');
     */
    getByCountry: (countryCode: string) => IState[];
};
export default State;
//# sourceMappingURL=State.d.ts.map