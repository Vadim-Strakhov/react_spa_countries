import { useSelector } from "react-redux";
import { loadCountries } from "./countries-slice";
import { useEffect } from "react";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-selectors";
import { RootState, useAppDispatch } from "@src/store";
import { Country } from "@src/types";
import { selectControls } from "../controls/controls-selectors";

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();

  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  // console.log(countries);
  // console.log(search);
  // console.log(status);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
