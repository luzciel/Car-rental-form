import { configureStore } from "@reduxjs/toolkit";
import dataList from "./slices/list";

export default configureStore({
  reducer: {
    dataList: dataList.reducer,
  },
});
