import { clearControls } from "./controls-slice";
import { useAppDispatch } from "@src/store";

export const useCleanup = () => {
  const dispatch = useAppDispatch();

  const cleanUP = () => dispatch(clearControls());

  return () => cleanUP();
};
