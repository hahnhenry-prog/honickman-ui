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
}, oe = {
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
}, te = {
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
  primary: "#27405c",
  primaryDark: "#16202e",
  primaryLight: "#38587c",
  primaryMuted: "rgba(39, 64, 92, 0.09)",
  primaryForeground: "#ffffff",
  secondary: "#16202e",
  secondaryForeground: "#ffffff",
  accent: "#38587c",
  background: "#f0eeeb",
  foreground: "#16202e",
  card: "#ffffff",
  cardForeground: "#16202e",
  muted: "#f6f5f3",
  mutedForeground: "#6a7482",
  border: "#e2e0dc",
  ring: "rgba(39, 64, 92, 0.25)",
  surfaceInverse: "#16202e",
  surfaceInverseForeground: "#ffffff",
  radius: "2px",
  fontSans: "'Inter', ui-sans-serif, system-ui, sans-serif",
  fontDisplay: "'Outfit', ui-sans-serif, system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace"
}, ae = {
  bevapps: {
    id: "bevapps",
    name: "BevApps",
    shortName: "BevApps",
    theme: "bevapps"
  },
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
}, ie = {
  bevapps: se,
  honickman: ne,
  pepsi: oe,
  "canada-dry": te
};
function ce(t) {
  return ie[ae[t].theme];
}
const z = Z(null), O = {
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
function me({ brand: t, children: a, scope: e = ":root" }) {
  const r = ce(t);
  return ee(() => {
    const f = e === ":root" ? document.documentElement : document.querySelector(e);
    if (f) {
      for (const [u, i] of Object.entries(O))
        f.style.setProperty(i, r[u]);
      return () => {
        for (const u of Object.values(O))
          f.style.removeProperty(u);
      };
    }
  }, [r, e]), /* @__PURE__ */ b(z.Provider, { value: { brandId: t, tokens: r }, children: a });
}
function pe() {
  const t = re(z);
  if (!t) throw new Error("useTheme must be used inside <ThemeProvider>");
  return t;
}
function fe(t, a) {
  return a.length === 0 ? t : [...t].sort((e, r) => {
    for (const { key: f, dir: u } of a) {
      const i = e[f], d = r[f], c = i === d ? 0 : i == null ? 1 : d == null || i < d ? -1 : 1;
      if (c !== 0) return u === "asc" ? c : -c;
    }
    return 0;
  });
}
function ge({
  data: t,
  defaultSort: a = { key: null, direction: "asc" },
  defaultSortLevels: e,
  defaultPageSize: r = 25,
  filterFn: f,
  defaultColFilters: u = {},
  defaultColExcludes: i = {},
  defaultColWidths: d = {}
}) {
  const [c, v] = p(a), [y, F] = p(e ?? []), [g, m] = p({
    page: 0,
    pageSize: r
  }), [k, V] = p(""), [h, D] = p(u), [I, N] = p(i), [W, P] = p(d), w = M(() => !f || !k.trim() ? t : t.filter((n) => f(n, k.trim())), [t, k, f]), S = M(() => {
    const n = Object.keys(h).filter((o) => {
      var s;
      return (((s = h[o]) == null ? void 0 : s.length) ?? 0) > 0;
    });
    return n.length === 0 ? w : w.filter(
      (o) => n.every((s) => {
        const l = String(o[s] ?? ""), A = h[s].includes(l);
        return I[s] ? !A : A;
      })
    );
  }, [w, h, I]), L = M(() => y.length > 0 ? fe(S, y) : c.key ? [...S].sort((n, o) => {
    const s = n[c.key], l = o[c.key], B = s === l ? 0 : s == null ? 1 : l == null || s < l ? -1 : 1;
    return c.direction === "asc" ? B : -B;
  }) : S, [S, c, y]), _ = L.length, T = Math.max(1, Math.ceil(_ / g.pageSize)), C = Math.min(g.page, T - 1), j = M(
    () => L.slice(C * g.pageSize, C * g.pageSize + g.pageSize),
    [L, C, g.pageSize]
  );
  function q(n) {
    v((o) => ({
      key: n,
      direction: o.key === n && o.direction === "asc" ? "desc" : "asc"
    })), F([]), m((o) => ({ ...o, page: 0 }));
  }
  function J(n) {
    F(n), v({ key: null, direction: "asc" }), m((o) => ({ ...o, page: 0 }));
  }
  function H(n) {
    m((o) => ({ ...o, page: Math.max(0, Math.min(n, T - 1)) }));
  }
  function R(n) {
    m({ page: 0, pageSize: n });
  }
  function K(n) {
    V(n), m((o) => ({ ...o, page: 0 }));
  }
  function Q(n, o, s = !1) {
    D((l) => ({ ...l, [n]: o })), N((l) => ({ ...l, [n]: s })), m((l) => ({ ...l, page: 0 }));
  }
  function Y(n) {
    D((o) => {
      const s = { ...o };
      return delete s[n], s;
    }), N((o) => {
      const s = { ...o };
      return delete s[n], s;
    }), m((o) => ({ ...o, page: 0 }));
  }
  function $() {
    D({}), N({}), m((n) => ({ ...n, page: 0 }));
  }
  function G(n, o) {
    P((s) => ({ ...s, [n]: o }));
  }
  function U(n) {
    P((o) => {
      const s = { ...o };
      return delete s[n], s;
    });
  }
  function X() {
    P({});
  }
  return {
    rows: j,
    totalRows: _,
    totalPages: T,
    sort: c,
    setSort: q,
    sortLevels: y,
    setSortLevels: J,
    query: k,
    setQuery: K,
    colFilters: h,
    colExcludes: I,
    setColFilter: Q,
    clearColFilter: Y,
    clearAllColFilters: $,
    colWidths: W,
    setColWidth: G,
    resetColWidth: U,
    resetAllColWidths: X,
    pagination: { ...g, page: C },
    setPage: H,
    setPageSize: R
  };
}
function ue(t, a) {
  const e = t[a.key], r = a.value;
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
function ye() {
  const [t, a] = p([]), e = x(
    (i, d, c) => {
      a((v) => [...v.filter((F) => F.key !== i), { key: i, op: d, value: c }]);
    },
    []
  ), r = x((i) => {
    a((d) => d.filter((c) => c.key !== i));
  }, []), f = x(() => a([]), []), u = x(
    (i) => i.filter((d) => t.every((c) => ue(d, c))),
    [t]
  );
  return { filters: t, setFilter: e, clearFilter: r, clearAll: f, apply: u };
}
function he({
  label: t,
  required: a,
  hint: e,
  error: r,
  htmlFor: f,
  className: u,
  children: i
}) {
  return /* @__PURE__ */ E("div", { className: u ? `hui-field ${u}` : "hui-field", children: [
    /* @__PURE__ */ E("label", { className: "hui-field__label", htmlFor: f, children: [
      t,
      a && /* @__PURE__ */ b("span", { className: "hui-field__required", "aria-hidden": "true", children: "*" })
    ] }),
    i,
    r ? /* @__PURE__ */ b("p", { className: "hui-field__error", role: "alert", children: r }) : e ? /* @__PURE__ */ b("p", { className: "hui-field__hint", children: e }) : null
  ] });
}
function be({ invalid: t, className: a, ...e }) {
  return /* @__PURE__ */ b(
    "input",
    {
      ...e,
      "aria-invalid": t || void 0,
      className: a ? `hui-input ${a}` : "hui-input"
    }
  );
}
export {
  ae as BRANDS,
  he as Field,
  be as Input,
  ie as THEME_TOKENS,
  me as ThemeProvider,
  te as canadaDryTokens,
  ne as honickmanTokens,
  oe as pepsiTokens,
  ce as tokensForBrand,
  ye as useFilters,
  ge as useTable,
  pe as useTheme
};
