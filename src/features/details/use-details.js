import { useDispatch, useSelector } from "react-redux";
import {
  clearDetails,
  loadCountryByName,
  selectDetails,
} from "../details/details-slice";
import { useEffect } from "react";

export const useDetails = (name) => {
  const dispatch = useDispatch();
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
