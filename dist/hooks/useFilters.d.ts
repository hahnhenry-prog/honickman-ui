export type FilterValue = string | number | boolean | null;
export type FilterOp = "eq" | "neq" | "contains" | "starts_with" | "gt" | "gte" | "lt" | "lte" | "in" | "not_in";
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
export declare function useFilters<T extends object>(): UseFiltersReturn<T>;
