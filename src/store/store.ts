import { configureStore } from "@reduxjs/toolkit";

import { watchListPersistMiddleware } from "./watch-list-persist-middleware";
import { watchListSlice } from "./watch-list-slice";

export const store = configureStore({
  reducer: { watchList: watchListSlice.reducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefault) => getDefault().concat(watchListPersistMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
