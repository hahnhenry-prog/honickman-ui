import { jsx as X } from "react/jsx-runtime";
import { createContext as Z, useLayoutEffect as $, useContext as ee, useState as p, useMemo as v, useCallback as M } from "react";
const re = {
  primary: "#de8500",
  primaryDark: "#b86e00",
  primaryLight: "#f0a030",
  primaryMuted: "rgba(222, 133, 0, 0.08)",
  primaryForeground: "#ffffff",
  secondary: "#283a4d",
  secondaryForeground: "#ffffff",
  accent: "#de8500",
  background: "#f4f6f8",
  foreground: "#1a2533",
  card: "#ffffff",
  cardForeground: "#1a2533",
  muted: "#eaecf0",
  mutedForeground: "#6b7a90",
  border: "#d4d9e2",
  ring: "rgba(222, 133, 0, 0.25)",
  radius: "2px",
  fontSans: "'Nunito', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Barlow Condensed', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, ne = {
  primary: "#174a92",
  primaryDark: "#0e3585",
  primaryLight: "#1f65c7",
  primaryMuted: "rgba(23, 74, 146, 0.08)",
  primaryForeground: "#ffffff",
  secondary: "#0e2d6b",
  secondaryForeground: "#ffffff",
  accent: "#e4003a",
  // Pepsi red
  background: "#f4f6f9",
  foreground: "#242424",
  card: "#ffffff",
  cardForeground: "#242424",
  muted: "#eef2f7",
  mutedForeground: "#666666",
  border: "#e2e2e2",
  ring: "rgba(23, 74, 146, 0.25)",
  radius: "2px",
  fontSans: "'Open Sans', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Barlow Condensed', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, oe = {
  primary: "#0e4636",
  primaryDark: "#082d24",
  primaryLight: "#1a6b3c",
  primaryMuted: "rgba(14, 70, 54, 0.08)",
  primaryForeground: "#ffffff",
  secondary: "#082d24",
  secondaryForeground: "#ffffff",
  accent: "#d0aa29",
  // Canada Dry gold
  background: "#f4f6f9",
  foreground: "#242424",
  card: "#ffffff",
  cardForeground: "#242424",
  muted: "#eef2f7",
  mutedForeground: "#666666",
  border: "#e2e2e2",
  ring: "rgba(14, 70, 54, 0.25)",
  radius: "2px",
  fontSans: "'Open Sans', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Barlow Condensed', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, te = {
  honickman: {
    id: "honickman",
    name: "The Honickman Companies",
    shortName: "Honickman",
    theme: "honickman"
  },
  pcny: {
    id: "pcny",
    name: "Pepsi-Cola Bottling Company of New York",
    shortName: "PCNY",
    theme: "pepsi"
  },
  pnb: {
    id: "pnb",
    name: "Pepsi-Cola and National Brand Beverages",
    shortName: "PNB",
    theme: "pepsi"
  },
  cddv: {
    id: "cddv",
    name: "Canada Dry Delaware Valley",
    shortName: "CDDV",
    theme: "canada-dry"
  },
  cdp: {
    id: "cdp",
    name: "Canada Dry Potomac",
    shortName: "CDP",
    theme: "canada-dry"
  }
}, ae = {
  honickman: re,
  pepsi: ne,
  "canada-dry": oe
};
function se(a) {
  return ae[te[a].theme];
}
const O = Z(null), z = {
  primary: "--color-primary",
  primaryDark: "--color-primary-dark",
  primaryLight: "--color-primary-light",
  primaryMuted: "--color-primary-muted",
  primaryForeground: "--color-primary-foreground",
  secondary: "--color-secondary",
  secondaryForeground: "--color-secondary-foreground",
  accent: "--color-accent",
  background: "--color-background",
  foreground: "--color-foreground",
  card: "--color-card",
  cardForeground: "--color-card-foreground",
  muted: "--color-muted",
  mutedForeground: "--color-muted-foreground",
  border: "--color-border",
  ring: "--color-ring",
  radius: "--radius",
  fontSans: "--font-sans",
  fontDisplay: "--font-display",
  fontMono: "--font-mono"
};
function de({ brand: a, children: c, scope: o = ":root" }) {
  const r = se(a);
  return $(() => {
    const u = o === ":root" ? document.documentElement : document.querySelector(o);
    if (u) {
      for (const [l, i] of Object.entries(z))
        u.style.setProperty(i, r[l]);
      return () => {
        for (const l of Object.values(z))
          u.style.removeProperty(l);
      };
    }
  }, [r, o]), /* @__PURE__ */ X(O.Provider, { value: { brandId: a, tokens: r }, children: c });
}
function le() {
  const a = ee(O);
  if (!a) throw new Error("useTheme must be used inside <ThemeProvider>");
  return a;
}
function ce(a, c) {
  return c.length === 0 ? a : [...a].sort((o, r) => {
    for (const { key: u, dir: l } of c) {
      const i = o[u], f = r[u], s = i === f ? 0 : i == null ? 1 : f == null || i < f ? -1 : 1;
      if (s !== 0) return l === "asc" ? s : -s;
    }
    return 0;
  });
}
function me({
  data: a,
  defaultSort: c = { key: null, direction: "asc" },
  defaultSortLevels: o,
  defaultPageSize: r = 25,
  filterFn: u,
  defaultColFilters: l = {},
  defaultColExcludes: i = {},
  defaultColWidths: f = {}
}) {
  const [s, S] = p(c), [y, b] = p(o ?? []), [g, m] = p({
    page: 0,
    pageSize: r
  }), [k, V] = p(""), [h, x] = p(l), [w, D] = p(i), [W, P] = p(f), B = v(() => !u || !k.trim() ? a : a.filter((e) => u(e, k.trim())), [a, k, u]), C = v(() => {
    const e = Object.keys(h).filter((n) => {
      var t;
      return (((t = h[n]) == null ? void 0 : t.length) ?? 0) > 0;
    });
    return e.length === 0 ? B : B.filter(
      (n) => e.every((t) => {
        const d = String(n[t] ?? ""), E = h[t].includes(d);
        return w[t] ? !E : E;
      })
    );
  }, [B, h, w]), L = v(() => y.length > 0 ? ce(C, y) : s.key ? [...C].sort((e, n) => {
    const t = e[s.key], d = n[s.key], T = t === d ? 0 : t == null ? 1 : d == null || t < d ? -1 : 1;
    return s.direction === "asc" ? T : -T;
  }) : C, [C, s, y]), A = L.length, N = Math.max(1, Math.ceil(A / g.pageSize)), F = Math.min(g.page, N - 1), j = v(
    () => L.slice(F * g.pageSize, F * g.pageSize + g.pageSize),
    [L, F, g.pageSize]
  );
  function q(e) {
    S((n) => ({
      key: e,
      direction: n.key === e && n.direction === "asc" ? "desc" : "asc"
    })), b([]), m((n) => ({ ...n, page: 0 }));
  }
  function _(e) {
    b(e), S({ key: null, direction: "asc" }), m((n) => ({ ...n, page: 0 }));
  }
  function H(e) {
    m((n) => ({ ...n, page: Math.max(0, Math.min(e, N - 1)) }));
  }
  function J(e) {
    m({ page: 0, pageSize: e });
  }
  function R(e) {
    V(e), m((n) => ({ ...n, page: 0 }));
  }
  function K(e, n, t = !1) {
    x((d) => ({ ...d, [e]: n })), D((d) => ({ ...d, [e]: t })), m((d) => ({ ...d, page: 0 }));
  }
  function Q(e) {
    x((n) => {
      const t = { ...n };
      return delete t[e], t;
    }), D((n) => {
      const t = { ...n };
      return delete t[e], t;
    }), m((n) => ({ ...n, page: 0 }));
  }
  function Y() {
    x({}), D({}), m((e) => ({ ...e, page: 0 }));
  }
  function I(e, n) {
    P((t) => ({ ...t, [e]: n }));
  }
  function G(e) {
    P((n) => {
      const t = { ...n };
      return delete t[e], t;
    });
  }
  function U() {
    P({});
  }
  return {
    rows: j,
    totalRows: A,
    totalPages: N,
    sort: s,
    setSort: q,
    sortLevels: y,
    setSortLevels: _,
    query: k,
    setQuery: R,
    colFilters: h,
    colExcludes: w,
    setColFilter: K,
    clearColFilter: Q,
    clearAllColFilters: Y,
    colWidths: W,
    setColWidth: I,
    resetColWidth: G,
    resetAllColWidths: U,
    pagination: { ...g, page: F },
    setPage: H,
    setPageSize: J
  };
}
function ie(a, c) {
  const o = a[c.key], r = c.value;
  switch (c.op) {
    case "eq":
      return o === r;
    case "neq":
      return o !== r;
    case "contains":
      return typeof o == "string" && typeof r == "string" ? o.toLowerCase().includes(r.toLowerCase()) : !1;
    case "starts_with":
      return typeof o == "string" && typeof r == "string" ? o.toLowerCase().startsWith(r.toLowerCase()) : !1;
    case "gt":
      return o != null && r != null && o > r;
    case "gte":
      return o != null && r != null && o >= r;
    case "lt":
      return o != null && r != null && o < r;
    case "lte":
      return o != null && r != null && o <= r;
    case "in":
      return Array.isArray(r) && r.includes(o);
    case "not_in":
      return Array.isArray(r) && !r.includes(o);
    default:
      return !0;
  }
}
function pe() {
  const [a, c] = p([]), o = M(
    (i, f, s) => {
      c((S) => [...S.filter((b) => b.key !== i), { key: i, op: f, value: s }]);
    },
    []
  ), r = M((i) => {
    c((f) => f.filter((s) => s.key !== i));
  }, []), u = M(() => c([]), []), l = M(
    (i) => i.filter((f) => a.every((s) => ie(f, s))),
    [a]
  );
  return { filters: a, setFilter: o, clearFilter: r, clearAll: u, apply: l };
}
export {
  te as BRANDS,
  ae as THEME_TOKENS,
  de as ThemeProvider,
  oe as canadaDryTokens,
  re as honickmanTokens,
  ne as pepsiTokens,
  se as tokensForBrand,
  pe as useFilters,
  me as useTable,
  le as useTheme
};
