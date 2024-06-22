import { useSelector } from "react-redux";
import { clearDetails, loadCountryByName } from "./details-slice";
import { useEffect } from "react";
import { selectDetails } from "./details-selectors";
import { useAppDispatch } from "@src/store";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);
  // console.log(details);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
