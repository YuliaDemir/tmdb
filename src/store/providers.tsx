"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";

import { STORAGE_KEY } from "../constants";
import { store } from "../store/store";
import { Film } from "../types";
import { setWatchList } from "./watch-list-slice";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        store.dispatch(setWatchList(parsed as Film[]));
      }
    } catch {}
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
