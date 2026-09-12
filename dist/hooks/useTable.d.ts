export type SortDirection = "asc" | "desc";
export interface SortState<T> {
    key: keyof T | null;
    direction: SortDirection;
}
/** A single level in a multi-key sort stack. */
export interface SortLevel<T = string> {
    key: T;
    dir: SortDirection;
}
export interface PaginationState {
    page: number;
    pageSize: number;
}
export interface UseTableOptions<T> {
    data: T[];
    defaultSort?: SortState<T>;
    defaultSortLevels?: SortLevel<keyof T>[];
    defaultPageSize?: number;
    /** Client-side filter predicate. Pass null/undefined to disable. */
    filterFn?: ((row: T, query: string) => boolean) | null;
    /** Initial per-column value filters: key → array of allowed values. */
    defaultColFilters?: Record<string, string[]>;
    /** Initial per-column exclude flags (true = hide matching rows). */
    defaultColExcludes?: Record<string, boolean>;
    /** Initial column widths in pixels. Omitted keys fall back to undefined (auto). */
    defaultColWidths?: Record<string, number>;
}
export interface UseTableReturn<T> {
    rows: T[];
    totalRows: number;
    totalPages: number;
    sort: SortState<T>;
    setSort: (key: keyof T) => void;
    sortLevels: SortLevel<keyof T>[];
    setSortLevels: (levels: SortLevel<keyof T>[]) => void;
    query: string;
    setQuery: (q: string) => void;
    colFilters: Record<string, string[]>;
    colExcludes: Record<string, boolean>;
    setColFilter: (key: string, values: string[], exclude?: boolean) => void;
    clearColFilter: (key: string) => void;
    clearAllColFilters: () => void;
    colWidths: Record<string, number>;
    setColWidth: (key: string, width: number) => void;
    resetColWidth: (key: string) => void;
    resetAllColWidths: () => void;
    pagination: PaginationState;
    setPage: (page: number) => void;
    setPageSize: (size: number) => void;
}
export declare function useTable<T extends object>({ data, defaultSort, defaultSortLevels, defaultPageSize, filterFn, defaultColFilters, defaultColExcludes, defaultColWidths, }: UseTableOptions<T>): UseTableReturn<T>;
