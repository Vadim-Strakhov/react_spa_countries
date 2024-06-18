import { createSelector } from "reselect";

export const selectCountriesInfo = createSelector(
  (state) => state.countries,
  (countries) => ({
    status: countries.status,
    error: countries.error,
    qty: countries.list.length,
  })
);

export const selectAllCountries = (state) => state.countries.list;

// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };

export const selectVisibleCountries = createSelector(
  (state) => state.countries.list,
  (_, { search = "" }) => search.toLowerCase(), // Добавляем search в зависимости
  (_, { region = "" }) => region.toLowerCase(), // Добавляем region в зависимости
  (countries, search, region) => {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search) &&
        country.region.toLowerCase().includes(region)
    );
  }
);
