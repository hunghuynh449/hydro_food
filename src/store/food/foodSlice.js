import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { foodAPI } from "../api/foodAPI";

const initialState = {
  foodList: [],
};

export const fetchFoods = createAsyncThunk(
  "food/getItem",
  async (_, thunkAPI) => {
    const response = await foodAPI.getData();
    const data = await response.json();
    return data;
  }
);

export const addFoods = createAsyncThunk(
  "food/addItem",
  async (payload) => {
    const response = await foodAPI.addFood(payload);
    console.log(response);
    return response;
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: initialState,

  reducers: {

    deleteItem(state, action) {
      const id = action.payload;
      state.foodList = state.foodList.filter((item) => item.id !== id);
    },
  },
  extraReducers: {
    [fetchFoods.fulfilled.type]: (state, action) => {
      state.foodList = action.payload;
    },
    [addFoods.fulfilled.type]: (state, action) => {
      console.log(action);
    },
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice;
