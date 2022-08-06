import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: { VND: false },

  reducers: {
    toggle(state) {
      state.VND = !state.VND;
    },
  },
});

export const currencyActions = currencySlice.actions;
export default currencySlice;
