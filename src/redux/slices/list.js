import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "dataList",
    initialState: {
      list: [],
    },
    reducers: {
      setList: (state, action) => {
        const newList = [...state.list, action.payload];
        state.list = newList;
      },
      deleteItem: (state, action) => {
        const filterData = state.list.filter((item) => {
          return item.id !== action.payload;
        });
        state.list = filterData;
      }
    },
  });
  
  export const { setList, deleteItem } =
    listSlice.actions;
  export default listSlice;