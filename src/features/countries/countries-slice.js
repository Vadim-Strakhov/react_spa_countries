import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      });
  },
});

export const countryReducer = countrySlice.reducer;

//_ selectors

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
