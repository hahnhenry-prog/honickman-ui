import { useState, useCallback } from "react";

export type FilterValue = string | number | boolean | null;

export type FilterOp =
  | "eq"
  | "neq"
  | "contains"
  | "starts_with"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "in"
  | "not_in";

export interface Filter<T> {
  key: keyof T;
  op: FilterOp;
  value: FilterValue | FilterValue[];
}

export interface UseFiltersReturn<T> {
  filters: Filter<T>[];
  setFilter: (key: keyof T, op: FilterOp, value: FilterValue | FilterValue[]) => void;
  clearFilter: (key: keyof T) => void;
  clearAll: () => void;
  apply: (data: T[]) => T[];
}

function matches<T>(row: T, filter: Filter<T>): boolean {
  const v = row[filter.key] as FilterValue;
  const fv = filter.value;
  switch (filter.op) {
    case "eq":
      return v === fv;
    case "neq":
      return v !== fv;
    case "contains":
      return typeof v === "string" && typeof fv === "string"
        ? v.toLowerCase().includes(fv.toLowerCase())
        : false;
    case "starts_with":
      return typeof v === "string" && typeof fv === "string"
        ? v.toLowerCase().startsWith(fv.toLowerCase())
        : false;
    case "gt":
      return v != null && fv != null && v > fv;
    case "gte":
      return v != null && fv != null && v >= fv;
    case "lt":
      return v != null && fv != null && v < fv;
    case "lte":
      return v != null && fv != null && v <= fv;
    case "in":
      return Array.isArray(fv) && fv.includes(v);
    case "not_in":
      return Array.isArray(fv) && !fv.includes(v);
    default:
      return true;
  }
}

export function useFilters<T extends object>(): UseFiltersReturn<T> {
  const [filters, setFilters] = useState<Filter<T>[]>([]);

  const setFilter = useCallback(
    (key: keyof T, op: FilterOp, value: FilterValue | FilterValue[]) => {
      setFilters((prev) => {
        const rest = prev.filter((f) => f.key !== key);
        return [...rest, { key, op, value }];
      });
    },
    []
  );

  const clearFilter = useCallback((key: keyof T) => {
    setFilters((prev) => prev.filter((f) => f.key !== key));
  }, []);

  const clearAll = useCallback(() => setFilters([]), []);

  const apply = useCallback(
    (data: T[]) => data.filter((row) => filters.every((f) => matches(row, f))),
    [filters]
  );

  return { filters, setFilter, clearFilter, clearAll, apply };
}
