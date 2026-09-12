import { jsx as X } from "react/jsx-runtime";
import { createContext as Z, useLayoutEffect as $, useContext as ee, useState as p, useMemo as F, useCallback as M } from "react";
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
  surfaceInverse: "#2e2e2e",
  surfaceInverseForeground: "#ffffff",
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
  surfaceInverse: "#2e2e2e",
  surfaceInverseForeground: "#ffffff",
  radius: "2px",
  fontSans: "'Open Sans', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Barlow Condensed', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, oe = {
  primary: "#144937",
  primaryDark: "#082d24",
  primaryLight: "#1a6b3c",
  primaryMuted: "rgba(20, 73, 55, 0.08)",
  primaryForeground: "#ffffff",
  secondary: "#082d24",
  secondaryForeground: "#ffffff",
  accent: "#d0a82a",
  // Canada Dry gold
  background: "#f4f6f9",
  foreground: "#242424",
  card: "#ffffff",
  cardForeground: "#242424",
  muted: "#eef2f7",
  mutedForeground: "#666666",
  border: "#e2e2e2",
  ring: "rgba(20, 73, 55, 0.25)",
  surfaceInverse: "#2e2e2e",
  surfaceInverseForeground: "#ffffff",
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
}, se = {
  honickman: re,
  pepsi: ne,
  "canada-dry": oe
};
function ae(s) {
  return se[te[s].theme];
}
const z = Z(null), E = {
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
  surfaceInverse: "--color-surface-inverse",
  surfaceInverseForeground: "--color-surface-inverse-foreground",
  radius: "--radius",
  fontSans: "--font-sans",
  fontDisplay: "--font-display",
  fontMono: "--font-mono"
};
function de({ brand: s, children: c, scope: o = ":root" }) {
  const r = ae(s);
  return $(() => {
    const f = o === ":root" ? document.documentElement : document.querySelector(o);
    if (f) {
      for (const [l, i] of Object.entries(E))
        f.style.setProperty(i, r[l]);
      return () => {
        for (const l of Object.values(E))
          f.style.removeProperty(l);
      };
    }
  }, [r, o]), /* @__PURE__ */ X(z.Provider, { value: { brandId: s, tokens: r }, children: c });
}
function le() {
  const s = ee(z);
  if (!s) throw new Error("useTheme must be used inside <ThemeProvider>");
  return s;
}
function ce(s, c) {
  return c.length === 0 ? s : [...s].sort((o, r) => {
    for (const { key: f, dir: l } of c) {
      const i = o[f], u = r[f], a = i === u ? 0 : i == null ? 1 : u == null || i < u ? -1 : 1;
      if (a !== 0) return l === "asc" ? a : -a;
    }
    return 0;
  });
}
function me({
  data: s,
  defaultSort: c = { key: null, direction: "asc" },
  defaultSortLevels: o,
  defaultPageSize: r = 25,
  filterFn: f,
  defaultColFilters: l = {},
  defaultColExcludes: i = {},
  defaultColWidths: u = {}
}) {
  const [a, S] = p(c), [y, b] = p(o ?? []), [g, m] = p({
    page: 0,
    pageSize: r
  }), [k, O] = p(""), [h, x] = p(l), [w, D] = p(i), [V, P] = p(u), B = F(() => !f || !k.trim() ? s : s.filter((e) => f(e, k.trim())), [s, k, f]), v = F(() => {
    const e = Object.keys(h).filter((n) => {
      var t;
      return (((t = h[n]) == null ? void 0 : t.length) ?? 0) > 0;
    });
    return e.length === 0 ? B : B.filter(
      (n) => e.every((t) => {
        const d = String(n[t] ?? ""), I = h[t].includes(d);
        return w[t] ? !I : I;
      })
    );
  }, [B, h, w]), L = F(() => y.length > 0 ? ce(v, y) : a.key ? [...v].sort((e, n) => {
    const t = e[a.key], d = n[a.key], T = t === d ? 0 : t == null ? 1 : d == null || t < d ? -1 : 1;
    return a.direction === "asc" ? T : -T;
  }) : v, [v, a, y]), A = L.length, N = Math.max(1, Math.ceil(A / g.pageSize)), C = Math.min(g.page, N - 1), W = F(
    () => L.slice(C * g.pageSize, C * g.pageSize + g.pageSize),
    [L, C, g.pageSize]
  );
  function j(e) {
    S((n) => ({
      key: e,
      direction: n.key === e && n.direction === "asc" ? "desc" : "asc"
    })), b([]), m((n) => ({ ...n, page: 0 }));
  }
  function q(e) {
    b(e), S({ key: null, direction: "asc" }), m((n) => ({ ...n, page: 0 }));
  }
  function _(e) {
    m((n) => ({ ...n, page: Math.max(0, Math.min(e, N - 1)) }));
  }
  function H(e) {
    m({ page: 0, pageSize: e });
  }
  function J(e) {
    O(e), m((n) => ({ ...n, page: 0 }));
  }
  function R(e, n, t = !1) {
    x((d) => ({ ...d, [e]: n })), D((d) => ({ ...d, [e]: t })), m((d) => ({ ...d, page: 0 }));
  }
  function K(e) {
    x((n) => {
      const t = { ...n };
      return delete t[e], t;
    }), D((n) => {
      const t = { ...n };
      return delete t[e], t;
    }), m((n) => ({ ...n, page: 0 }));
  }
  function Q() {
    x({}), D({}), m((e) => ({ ...e, page: 0 }));
  }
  function Y(e, n) {
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
    rows: W,
    totalRows: A,
    totalPages: N,
    sort: a,
    setSort: j,
    sortLevels: y,
    setSortLevels: q,
    query: k,
    setQuery: J,
    colFilters: h,
    colExcludes: w,
    setColFilter: R,
    clearColFilter: K,
    clearAllColFilters: Q,
    colWidths: V,
    setColWidth: Y,
    resetColWidth: G,
    resetAllColWidths: U,
    pagination: { ...g, page: C },
    setPage: _,
    setPageSize: H
  };
}
function ie(s, c) {
  const o = s[c.key], r = c.value;
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
  const [s, c] = p([]), o = M(
    (i, u, a) => {
      c((S) => [...S.filter((b) => b.key !== i), { key: i, op: u, value: a }]);
    },
    []
  ), r = M((i) => {
    c((u) => u.filter((a) => a.key !== i));
  }, []), f = M(() => c([]), []), l = M(
    (i) => i.filter((u) => s.every((a) => ie(u, a))),
    [s]
  );
  return { filters: s, setFilter: o, clearFilter: r, clearAll: f, apply: l };
}
export {
  te as BRANDS,
  se as THEME_TOKENS,
  de as ThemeProvider,
  oe as canadaDryTokens,
  re as honickmanTokens,
  ne as pepsiTokens,
  ae as tokensForBrand,
  pe as useFilters,
  me as useTable,
  le as useTheme
};
