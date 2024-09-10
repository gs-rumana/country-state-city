export interface ICountry {
    id: number;
    name: string;
    iso: string;
    phone_code: string;
    flag: string;
}

export interface IState {
    id: number;
    name: string;
    state_code: string;
    country_code: string;
}

export interface ICity {
    id: number;
    name: string;
    state_code: string;
    country_code: string;
}

export interface ICountryState extends ICountry {
    states: IState[];
}

export interface IStateCity extends IState {
    cities: ICity[];
}

export interface ICountryStateCity extends ICountryState {
    states: IStateCity[];
}
