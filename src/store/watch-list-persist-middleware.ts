import type { Middleware } from "@reduxjs/toolkit";

import { addItem, removeItem, clearList } from "./watch-list-slice";

const STORAGE_KEY = "watchList";

export const watchListPersistMiddleware: Middleware =
  (storeApi) => (next) => (action) => {
    const result = next(action);

    if (
      addItem.match(action) ||
      removeItem.match(action) ||
      clearList.match(action)
    ) {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(storeApi.getState().watchList),
        );
      }
    }

    return result;
  };
