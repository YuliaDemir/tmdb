import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Film } from "../types";

const initialState: Film[] = [];

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Film>) => {
      const exists = state.some((i) => i.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<Film["id"]>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    clearList: () => {
      return initialState;
    },
  },
});

export const { addItem, removeItem, clearList } = watchListSlice.actions;
export default watchListSlice.reducer;
