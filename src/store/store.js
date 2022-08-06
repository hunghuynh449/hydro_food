import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import foodSlice from "./food/foodSlice";
import currencySlice from "./currencySlice";

// const persistConfig = {
//   key: "hydro-food",
//   storage,
//   blacklist: ["cartUi"],
// };

const persistConfig = {
  key: "hydro-food",
  storage,
  blacklist: ["foodList"],
};

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  cartUi: cartUiSlice.reducer,
  user: userSlice.reducer,
  food: foodSlice.reducer,
  currency: currencySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
