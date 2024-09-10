const fs = require("fs");
const target = ["countries", "states", "cities", "countries+states", "states+cities"];
const data = require(`../data/${target}.json`);

target.forEach(t => {
    const newData = data.map((entry) => {
        if (t === "countries") {
          return {
            id: entry.id,
            name: entry.name,
            iso: entry.iso2,
            phone_code: entry.phone_code,
            flag: entry.emoji,
          };
        }
        if (t === 'states') {
          return {
              id: entry.id,
              name: entry.name,
              state_code: entry.state_code,
              country_code: entry.country_code,
          }
        }
        if (t === 'cities') {
          return {
              id: entry.id,
              name: entry.name,
              state_code: entry.state_code,
              country_code: entry.country_code,
          }
        }
        if (t === 'countries+states') {
          return {
              id: entry.id,
              name: entry.name,
              iso: entry.iso2,
              phone_code: entry.phone_code,
              flag: entry.emoji,
              states: entry.states.map(state => {
                  return {
                      id: state.id,
                      name: state.name,
                      state_code: state.state_code,
                      country_code: state.country_code,
                  }
              })
          }
        }
        if (t === 'states+cities') {
          return {
              id: entry.id,
              name: entry.name,
              state_code: entry.state_code,
              country_code: entry.country_code,
              cities: entry.cities.map(city => {
                  return {
                      id: city.id,
                      name: city.name,
                      state_code: city.state_code,
                      country_code: city.country_code,
                  }
              })
          }
        }
      });
      
      fs.writeFileSync(
        `./src/data/${t}.json`,
        JSON.stringify(newData, null, 2)
      );
      console.log(`Data for ${t} written to file!`);      
});