import { createSlice } from "@reduxjs/toolkit";

const file = createSlice({
  name: "file",
  initialState: {
    fileName: "",
  },
  reducers: {
    SETFILENAME(state, action) {
      state.fileName = action.payload;
    },
  },
});

const { actions, reducer } = file;

export const { SETFILENAME } = actions;

export default reducer
