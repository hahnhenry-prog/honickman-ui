import { jsx as b, jsxs as E } from "react/jsx-runtime";
import { createContext as Z, useLayoutEffect as ee, useContext as re, useState as p, useMemo as M, useCallback as x } from "react";
const ne = {
  primary: "#de8500",
  primaryDark: "#b86e00",
  primaryLight: "#f0a030",
  primaryMuted: "rgba(222, 133, 0, 0.08)",
  primaryForeground: "#ffffff",
  secondary: "#283a4d",
  secondaryForeground: "#ffffff",
  accent: "#de8500",
  background: "#f0eeeb",
  foreground: "#1a2533",
  card: "#ffffff",
  cardForeground: "#1a2533",
  muted: "#f8f7f5",
  mutedForeground: "#6b7a90",
  border: "#e2e0dc",
  ring: "rgba(222, 133, 0, 0.25)",
  surfaceInverse: "#2e2e2e",
  surfaceInverseForeground: "#ffffff",
  radius: "2px",
  fontSans: "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, te = {
  primary: "#174a92",
  primaryDark: "#0e3585",
  primaryLight: "#1f65c7",
  primaryMuted: "rgba(23, 74, 146, 0.08)",
  primaryForeground: "#ffffff",
  secondary: "#0e2d6b",
  secondaryForeground: "#ffffff",
  accent: "#e4003a",
  // Pepsi red
  background: "#f0eeeb",
  foreground: "#242424",
  card: "#ffffff",
  cardForeground: "#242424",
  muted: "#f8f7f5",
  mutedForeground: "#666666",
  border: "#e2e0dc",
  ring: "rgba(23, 74, 146, 0.25)",
  surfaceInverse: "#2e2e2e",
  surfaceInverseForeground: "#ffffff",
  radius: "2px",
  fontSans: "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
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
  background: "#f0eeeb",
  foreground: "#242424",
  card: "#ffffff",
  cardForeground: "#242424",
  muted: "#f8f7f5",
  mutedForeground: "#666666",
  border: "#e2e0dc",
  ring: "rgba(20, 73, 55, 0.25)",
  surfaceInverse: "#2e2e2e",
  surfaceInverseForeground: "#ffffff",
  radius: "2px",
  fontSans: "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, se = {
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
  honickman: ne,
  pepsi: te,
  "canada-dry": oe
};
function ie(o) {
  return ae[se[o].theme];
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
  surfaceInverse: "--color-surface-inverse",
  surfaceInverseForeground: "--color-surface-inverse-foreground",
  radius: "--radius",
  fontSans: "--font-sans",
  fontDisplay: "--font-display",
  fontMono: "--font-mono"
};
function de({ brand: o, children: a, scope: e = ":root" }) {
  const r = ie(o);
  return ee(() => {
    const u = e === ":root" ? document.documentElement : document.querySelector(e);
    if (u) {
      for (const [f, i] of Object.entries(z))
        u.style.setProperty(i, r[f]);
      return () => {
        for (const f of Object.values(z))
          u.style.removeProperty(f);
      };
    }
  }, [r, e]), /* @__PURE__ */ b(O.Provider, { value: { brandId: o, tokens: r }, children: a });
}
function me() {
  const o = re(O);
  if (!o) throw new Error("useTheme must be used inside <ThemeProvider>");
  return o;
}
function ce(o, a) {
  return a.length === 0 ? o : [...o].sort((e, r) => {
    for (const { key: u, dir: f } of a) {
      const i = e[u], l = r[u], c = i === l ? 0 : i == null ? 1 : l == null || i < l ? -1 : 1;
      if (c !== 0) return f === "asc" ? c : -c;
    }
    return 0;
  });
}
function pe({
  data: o,
  defaultSort: a = { key: null, direction: "asc" },
  defaultSortLevels: e,
  defaultPageSize: r = 25,
  filterFn: u,
  defaultColFilters: f = {},
  defaultColExcludes: i = {},
  defaultColWidths: l = {}
}) {
  const [c, v] = p(a), [y, F] = p(e ?? []), [g, m] = p({
    page: 0,
    pageSize: r
  }), [k, V] = p(""), [h, D] = p(f), [P, N] = p(i), [W, w] = p(l), I = M(() => !u || !k.trim() ? o : o.filter((n) => u(n, k.trim())), [o, k, u]), S = M(() => {
    const n = Object.keys(h).filter((t) => {
      var s;
      return (((s = h[t]) == null ? void 0 : s.length) ?? 0) > 0;
    });
    return n.length === 0 ? I : I.filter(
      (t) => n.every((s) => {
        const d = String(t[s] ?? ""), B = h[s].includes(d);
        return P[s] ? !B : B;
      })
    );
  }, [I, h, P]), L = M(() => y.length > 0 ? ce(S, y) : c.key ? [...S].sort((n, t) => {
    const s = n[c.key], d = t[c.key], _ = s === d ? 0 : s == null ? 1 : d == null || s < d ? -1 : 1;
    return c.direction === "asc" ? _ : -_;
  }) : S, [S, c, y]), A = L.length, T = Math.max(1, Math.ceil(A / g.pageSize)), C = Math.min(g.page, T - 1), j = M(
    () => L.slice(C * g.pageSize, C * g.pageSize + g.pageSize),
    [L, C, g.pageSize]
  );
  function q(n) {
    v((t) => ({
      key: n,
      direction: t.key === n && t.direction === "asc" ? "desc" : "asc"
    })), F([]), m((t) => ({ ...t, page: 0 }));
  }
  function H(n) {
    F(n), v({ key: null, direction: "asc" }), m((t) => ({ ...t, page: 0 }));
  }
  function J(n) {
    m((t) => ({ ...t, page: Math.max(0, Math.min(n, T - 1)) }));
  }
  function R(n) {
    m({ page: 0, pageSize: n });
  }
  function K(n) {
    V(n), m((t) => ({ ...t, page: 0 }));
  }
  function Q(n, t, s = !1) {
    D((d) => ({ ...d, [n]: t })), N((d) => ({ ...d, [n]: s })), m((d) => ({ ...d, page: 0 }));
  }
  function Y(n) {
    D((t) => {
      const s = { ...t };
      return delete s[n], s;
    }), N((t) => {
      const s = { ...t };
      return delete s[n], s;
    }), m((t) => ({ ...t, page: 0 }));
  }
  function $() {
    D({}), N({}), m((n) => ({ ...n, page: 0 }));
  }
  function G(n, t) {
    w((s) => ({ ...s, [n]: t }));
  }
  function U(n) {
    w((t) => {
      const s = { ...t };
      return delete s[n], s;
    });
  }
  function X() {
    w({});
  }
  return {
    rows: j,
    totalRows: A,
    totalPages: T,
    sort: c,
    setSort: q,
    sortLevels: y,
    setSortLevels: H,
    query: k,
    setQuery: K,
    colFilters: h,
    colExcludes: P,
    setColFilter: Q,
    clearColFilter: Y,
    clearAllColFilters: $,
    colWidths: W,
    setColWidth: G,
    resetColWidth: U,
    resetAllColWidths: X,
    pagination: { ...g, page: C },
    setPage: J,
    setPageSize: R
  };
}
function ue(o, a) {
  const e = o[a.key], r = a.value;
  switch (a.op) {
    case "eq":
      return e === r;
    case "neq":
      return e !== r;
    case "contains":
      return typeof e == "string" && typeof r == "string" ? e.toLowerCase().includes(r.toLowerCase()) : !1;
    case "starts_with":
      return typeof e == "string" && typeof r == "string" ? e.toLowerCase().startsWith(r.toLowerCase()) : !1;
    case "gt":
      return e != null && r != null && e > r;
    case "gte":
      return e != null && r != null && e >= r;
    case "lt":
      return e != null && r != null && e < r;
    case "lte":
      return e != null && r != null && e <= r;
    case "in":
      return Array.isArray(r) && r.includes(e);
    case "not_in":
      return Array.isArray(r) && !r.includes(e);
    default:
      return !0;
  }
}
function ge() {
  const [o, a] = p([]), e = x(
    (i, l, c) => {
      a((v) => [...v.filter((F) => F.key !== i), { key: i, op: l, value: c }]);
    },
    []
  ), r = x((i) => {
    a((l) => l.filter((c) => c.key !== i));
  }, []), u = x(() => a([]), []), f = x(
    (i) => i.filter((l) => o.every((c) => ue(l, c))),
    [o]
  );
  return { filters: o, setFilter: e, clearFilter: r, clearAll: u, apply: f };
}
function ye({
  label: o,
  required: a,
  hint: e,
  error: r,
  htmlFor: u,
  className: f,
  children: i
}) {
  return /* @__PURE__ */ E("div", { className: f ? `hui-field ${f}` : "hui-field", children: [
    /* @__PURE__ */ E("label", { className: "hui-field__label", htmlFor: u, children: [
      o,
      a && /* @__PURE__ */ b("span", { className: "hui-field__required", "aria-hidden": "true", children: "*" })
    ] }),
    i,
    r ? /* @__PURE__ */ b("p", { className: "hui-field__error", role: "alert", children: r }) : e ? /* @__PURE__ */ b("p", { className: "hui-field__hint", children: e }) : null
  ] });
}
function he({ invalid: o, className: a, ...e }) {
  return /* @__PURE__ */ b(
    "input",
    {
      ...e,
      "aria-invalid": o || void 0,
      className: a ? `hui-input ${a}` : "hui-input"
    }
  );
}
export {
  se as BRANDS,
  ye as Field,
  he as Input,
  ae as THEME_TOKENS,
  de as ThemeProvider,
  oe as canadaDryTokens,
  ne as honickmanTokens,
  te as pepsiTokens,
  ie as tokensForBrand,
  ge as useFilters,
  pe as useTable,
  me as useTheme
};
