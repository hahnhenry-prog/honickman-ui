import { useState, useMemo } from "react";

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
}

export interface UseTableReturn<T> {
  // ── result rows ──
  rows: T[];
  totalRows: number;
  totalPages: number;

  // ── single-key sort (original API) ──
  sort: SortState<T>;
  setSort: (key: keyof T) => void;

  // ── multi-level sort ──
  sortLevels: SortLevel<keyof T>[];
  setSortLevels: (levels: SortLevel<keyof T>[]) => void;

  // ── text search ──
  query: string;
  setQuery: (q: string) => void;

  // ── per-column value filters ──
  colFilters: Record<string, string[]>;
  colExcludes: Record<string, boolean>;
  setColFilter: (key: string, values: string[], exclude?: boolean) => void;
  clearColFilter: (key: string) => void;
  clearAllColFilters: () => void;

  // ── pagination ──
  pagination: PaginationState;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

function applyMultiSort<T>(rows: T[], levels: SortLevel<keyof T>[]): T[] {
  if (levels.length === 0) return rows;
  return [...rows].sort((a, b) => {
    for (const { key, dir } of levels) {
      const av = a[key];
      const bv = b[key];
      const cmp = av === bv ? 0 : av == null ? 1 : bv == null ? -1 : av < bv ? -1 : 1;
      if (cmp !== 0) return dir === "asc" ? cmp : -cmp;
    }
    return 0;
  });
}

export function useTable<T extends object>({
  data,
  defaultSort = { key: null, direction: "asc" },
  defaultSortLevels,
  defaultPageSize = 25,
  filterFn,
  defaultColFilters = {},
  defaultColExcludes = {},
}: UseTableOptions<T>): UseTableReturn<T> {
  const [sort, setSortState] = useState<SortState<T>>(defaultSort);
  const [sortLevels, setSortLevelsState] = useState<SortLevel<keyof T>[]>(defaultSortLevels ?? []);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 0,
    pageSize: defaultPageSize,
  });
  const [query, setQueryState] = useState("");
  const [colFilters, setColFiltersState] = useState<Record<string, string[]>>(defaultColFilters);
  const [colExcludes, setColExcludesState] = useState<Record<string, boolean>>(defaultColExcludes);

  // 1. text filter
  const textFiltered = useMemo(() => {
    if (!filterFn || !query.trim()) return data;
    return data.filter((row) => filterFn(row, query.trim()));
  }, [data, query, filterFn]);

  // 2. column value filters
  const colFiltered = useMemo(() => {
    const activeKeys = Object.keys(colFilters).filter((k) => (colFilters[k]?.length ?? 0) > 0);
    if (activeKeys.length === 0) return textFiltered;
    return textFiltered.filter((row) =>
      activeKeys.every((key) => {
        const cellVal = String((row as Record<string, unknown>)[key] ?? "");
        const allowed = colFilters[key];
        const matches = allowed.includes(cellVal);
        return colExcludes[key] ? !matches : matches;
      })
    );
  }, [textFiltered, colFilters, colExcludes]);

  // 3. sort — multi-level wins if set, otherwise single-key
  const sorted = useMemo(() => {
    if (sortLevels.length > 0) return applyMultiSort(colFiltered, sortLevels);
    if (!sort.key) return colFiltered;
    return [...colFiltered].sort((a, b) => {
      const av = a[sort.key!];
      const bv = b[sort.key!];
      const cmp = av === bv ? 0 : av == null ? 1 : bv == null ? -1 : av < bv ? -1 : 1;
      return sort.direction === "asc" ? cmp : -cmp;
    });
  }, [colFiltered, sort, sortLevels]);

  const totalRows = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pagination.pageSize));
  const safePage = Math.min(pagination.page, totalPages - 1);

  const rows = useMemo(
    () => sorted.slice(safePage * pagination.pageSize, safePage * pagination.pageSize + pagination.pageSize),
    [sorted, safePage, pagination.pageSize]
  );

  function setSort(key: keyof T) {
    setSortState((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setSortLevelsState([]);
    setPagination((p) => ({ ...p, page: 0 }));
  }

  function setSortLevels(levels: SortLevel<keyof T>[]) {
    setSortLevelsState(levels);
    setSortState({ key: null, direction: "asc" });
    setPagination((p) => ({ ...p, page: 0 }));
  }

  function setPage(page: number) {
    setPagination((p) => ({ ...p, page: Math.max(0, Math.min(page, totalPages - 1)) }));
  }

  function setPageSize(pageSize: number) {
    setPagination({ page: 0, pageSize });
  }

  function setQuery(q: string) {
    setQueryState(q);
    setPagination((p) => ({ ...p, page: 0 }));
  }

  function setColFilter(key: string, values: string[], exclude = false) {
    setColFiltersState((prev) => ({ ...prev, [key]: values }));
    setColExcludesState((prev) => ({ ...prev, [key]: exclude }));
    setPagination((p) => ({ ...p, page: 0 }));
  }

  function clearColFilter(key: string) {
    setColFiltersState((prev) => { const next = { ...prev }; delete next[key]; return next; });
    setColExcludesState((prev) => { const next = { ...prev }; delete next[key]; return next; });
    setPagination((p) => ({ ...p, page: 0 }));
  }

  function clearAllColFilters() {
    setColFiltersState({});
    setColExcludesState({});
    setPagination((p) => ({ ...p, page: 0 }));
  }

  return {
    rows,
    totalRows,
    totalPages,
    sort,
    setSort,
    sortLevels,
    setSortLevels,
    query,
    setQuery,
    colFilters,
    colExcludes,
    setColFilter,
    clearColFilter,
    clearAllColFilters,
    pagination: { ...pagination, page: safePage },
    setPage,
    setPageSize,
  };
}
