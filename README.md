# Platz (Places)

Access countries, states and cities in your JavaScript projects.

- Data from: [dr5hn/countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database)

## Installation

```bash
npm install platz
```

## Usage

```javascript
const {Country, State, City} = require('country-state-city');

// Get all countries
const countries = Country.getAll();

// Get all states
const states = State.getAll();

// Get all cities
const cities = City.getAll();
```

## API

### Country

#### `Country.getAll()`

Returns an array of all countries.

#### `Country.getByISO(code)`
- `code` - The country code.

Returns the country with the given code.

### State

#### `State.getAll()`

Returns an array of all states.

#### `State.getByCountry(countryCode)`
- `countryCode` - The country code.

Returns an array of states in the given country.

#### `State.getOne(code)`

- `code` - The state code.

Returns the state with the given code.

### City

#### `City.getAll()`

Returns an array of all cities.

#### `City.getByState(stateCode, countryCode)`
- `stateCode` - The state code.
- `countryCode` - The country code.

Returns an array of cities in the given state.

#### `City.getByStateId(stateId)`
- `stateId` - The state id.

Returns an array of cities in the given state.

## License

MIT