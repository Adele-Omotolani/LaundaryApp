import { configureStore } from "@reduxjs/toolkit";
import features from "./features";

const store = configureStore({
  reducer: {
    userDatas: features,
  },
});

export default store;
