import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { foodAPI } from "../api/foodAPI";

const initialState = {
  foodList: [],
  foodDetail: undefined
};

export const fetchFoods = createAsyncThunk(
  "food/getItem",
  async (_, thunkAPI) => {
    const response = await foodAPI.getData();
    const data = await response.json();
    return data;
  }
);

export const fetchFoodDetail = createAsyncThunk(
  "food/getItemDetail",
  async (id) => {
    const response = await foodAPI.getFoodDetail(id);
    const data = await response.json();
    return data;
  }
);

export const addFoods = createAsyncThunk(
  "food/addItem",
  async (payload) => {
    const response = await foodAPI.addFood(payload);
    return response;
  }
);

export const updateFood = createAsyncThunk(
  "food/updateFood",
  async (payload) => {
    const response = await foodAPI.updateFood(payload);
    const data = await response.json();
    return data;
  }
);

export const deleteFood = createAsyncThunk(
  "food/deleteFood",
  async (id) => {
    console.log(id);
    const response = await foodAPI.deleteFood(id);
    console.log(response);
    const data = await response.json();
    return data;
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
    [fetchFoodDetail.fulfilled.type]: (state, action) => {
      state.foodDetail = action.payload;
    },
    [addFoods.fulfilled.type]: (_, action) => {
    },
    [updateFood.fulfilled.type]: (_, action) => {
    },
    [deleteFood.fulfilled.type]: (_, action) => {
    },
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice;
