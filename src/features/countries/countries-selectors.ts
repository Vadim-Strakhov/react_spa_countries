import { RootState } from "@src/store";
import { Country } from "@src/types";
import { createSelector } from "reselect";

export const selectCountriesInfo = createSelector(
  (state) => state.countries,
  (countries) => ({
    status: countries.status,
    error: countries.error,
    qty: countries.list.length,
  })
);

export const selectAllCountries = (state: RootState) => state.countries.list;

// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };

export const selectVisibleCountries = createSelector(
  (state: RootState) => state.countries.list,
  (_, { search = "" }) => search.toLowerCase(),
  (_, { region = "" }) => region.toLowerCase(),
  (countries, search, region) => {
    return countries.filter(
      (country: Country) =>
        country.name.toLowerCase().includes(search) &&
        country.region.toLowerCase().includes(region)
    );
  }
);
