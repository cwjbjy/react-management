import file from "./file";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    file,
  },
  middleware: [logger],
});

export default store;
