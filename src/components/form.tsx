"use client";

import { Input, Loading } from "@components";
import { badgeClass, buttonBaseClass, formClass, zincText } from "@tconst";
import { useState } from "react";

import { tryFilms } from "../constants";
import { cn } from "../lib/utils";

export const Form = ({
  onSearch,
  loading,
}: {
  onSearch: (q: string) => void;
  loading: boolean;
}) => {
  const [q, setQ] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(q);
      }}
      className={formClass}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input value={q} onChange={setQ} />

        <button disabled={loading || !q.trim()} className={buttonBaseClass}>
          {loading ? (
            <Loading text="Searching..." />
          ) : (
            <>
              <span className="inline-flex items-center gap-2">
                Search
                <span className="opacity-70 group-hover:opacity-100">→</span>
              </span>
            </>
          )}
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className={cn(zincText, "text-xs")}>
          Tip: try{" "}
          {tryFilms.map((film, i) => (
            <span key={i} className={zincText}>
              “{film}”{i < tryFilms.length - 1 ? ", " : ""}
            </span>
          ))}
          .
        </p>
      </div>
    </form>
  );
};
