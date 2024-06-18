import { createStore, applyMiddleware } from "redux";
import { withExtraArgument } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./root-reducer";
import axios from "axios";
import * as api from "../config";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);
