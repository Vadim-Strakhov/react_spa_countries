import { useSelector } from "react-redux";
import { setSearch } from "./controls-slice";
import { selectSearch } from "./controls-selectors";
import { useAppDispatch } from "@src/store";
import { ChangeEvent, ChangeEventHandler } from "react";

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
