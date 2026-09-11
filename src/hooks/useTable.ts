import { useState, useMemo } from "react";

export type SortDirection = "asc" | "desc";

export interface SortState<T> {
  key: keyof T | null;
  direction: SortDirection;
}

export interface PaginationState {
  page: number;
  pageSize: number;
}

export interface UseTableOptions<T> {
  data: T[];
  defaultSort?: SortState<T>;
  defaultPageSize?: number;
  /** Client-side filter predicate. Pass null/undefined to disable. */
  filterFn?: ((row: T, query: string) => boolean) | null;
}

export interface UseTableReturn<T> {
  rows: T[];
  sort: SortState<T>;
  setSort: (key: keyof T) => void;
  pagination: PaginationState;
  totalPages: number;
  totalRows: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  query: string;
  setQuery: (q: string) => void;
}

export function useTable<T extends object>({
  data,
  defaultSort = { key: null, direction: "asc" },
  defaultPageSize = 25,
  filterFn,
}: UseTableOptions<T>): UseTableReturn<T> {
  const [sort, setSortState] = useState<SortState<T>>(defaultSort);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 0,
    pageSize: defaultPageSize,
  });
  const [query, setQueryState] = useState("");

  const filtered = useMemo(() => {
    if (!filterFn || !query.trim()) return data;
    return data.filter((row) => filterFn(row, query.trim()));
  }, [data, query, filterFn]);

  const sorted = useMemo(() => {
    if (!sort.key) return filtered;
    return [...filtered].sort((a, b) => {
      const av = a[sort.key!];
      const bv = b[sort.key!];
      const cmp =
        av === bv ? 0 : av == null ? 1 : bv == null ? -1 : av < bv ? -1 : 1;
      return sort.direction === "asc" ? cmp : -cmp;
    });
  }, [filtered, sort]);

  const totalRows = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / pagination.pageSize));
  const safePage = Math.min(pagination.page, totalPages - 1);

  const rows = useMemo(
    () =>
      sorted.slice(
        safePage * pagination.pageSize,
        safePage * pagination.pageSize + pagination.pageSize
      ),
    [sorted, safePage, pagination.pageSize]
  );

  function setSort(key: keyof T) {
    setSortState((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
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

  return { rows, sort, setSort, pagination: { ...pagination, page: safePage }, totalPages, totalRows, setPage, setPageSize, query, setQuery };
}
