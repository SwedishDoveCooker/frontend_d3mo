function su(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }(function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const n of document.querySelectorAll('link[rel="modulepreload"]')) t(n);
        new MutationObserver(n => {
            for (const r of n)
                if (r.type === "childList")
                    for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && t(a)
        }).observe(document, { childList: !0, subtree: !0 })
    }

    function t(n) {
        if (n.ep) return;
        n.ep = !0;
        const r = function(a) { const o = {}; return a.integrity && (o.integrity = a.integrity), a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? o.credentials = "include" : a.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }(n);
        fetch(n.href, r)
    }
})();
var uu = { exports: {} },
    Ur = {},
    cu = { exports: {} },
    O = {},
    mr = Symbol.for("react.element"),
    m0 = Symbol.for("react.portal"),
    g0 = Symbol.for("react.fragment"),
    y0 = Symbol.for("react.strict_mode"),
    v0 = Symbol.for("react.profiler"),
    b0 = Symbol.for("react.provider"),
    w0 = Symbol.for("react.context"),
    k0 = Symbol.for("react.forward_ref"),
    x0 = Symbol.for("react.suspense"),
    S0 = Symbol.for("react.memo"),
    C0 = Symbol.for("react.lazy"),
    Li = Symbol.iterator,
    du = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    fu = Object.assign,
    pu = {};

function hn(e, t, n) { this.props = e, this.context = t, this.refs = pu, this.updater = n || du }

function hu() {}

function ql(e, t, n) { this.props = e, this.context = t, this.refs = pu, this.updater = n || du }
hn.prototype.isReactComponent = {}, hn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}, hn.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") }, hu.prototype = hn.prototype;
var ro = ql.prototype = new hu;
ro.constructor = ql, fu(ro, hn.prototype), ro.isPureReactComponent = !0;
var Ri = Array.isArray,
    mu = Object.prototype.hasOwnProperty,
    Hl = { current: null },
    gu = { key: !0, ref: !0, __self: !0, __source: !0 };

function zi(e, t, n) {
    var r, a = {},
        o = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) mu.call(t, r) && !gu.hasOwnProperty(r) && (a[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1) a.children = n;
    else if (1 < i) {
        for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2];
        a.children = s
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps) a[r] === void 0 && (a[r] = i[r]);
    return { $$typeof: mr, type: e, key: o, ref: l, props: a, _owner: Hl.current }
}

function Qo(e) { return typeof e == "object" && e !== null && e.$$typeof === mr }
var Ai = /\/+/g;

function ao(e, t) { return typeof e == "object" && e !== null && e.key != null ? function(n) { var r = { "=": "=0", ":": "=2" }; return "$" + n.replace(/[=:]/g, function(a) { return r[a] }) }("" + e.key) : t.toString(36) }

function oa(e, t, n, r, a) {
    var o = typeof e;
    o !== "undefined" && o !== "boolean" || (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case mr:
                case m0:
                    l = !0
            }
    }
    if (l) return a = a(l = e), e = r === "" ? "." + ao(l, 0) : r, Ri(a) ? (n = "", e != null && (n = e.replace(Ai, "$&/") + "/"), oa(a, t, n, "", function(u) { return u })) : a != null && (Qo(a) && (a = function(u, c) { return { $$typeof: mr, type: u.type, key: c, ref: u.ref, props: u.props, _owner: u._owner } }(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Ai, "$&/") + "/") + e)), t.push(a)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Ri(e))
        for (var i = 0; i < e.length; i++) {
            var s = r + ao(o = e[i], i);
            l += oa(o, t, n, s, a)
        } else if (s = function(u) { return u === null || typeof u != "object" ? null : typeof(u = Li && u[Li] || u["@@iterator"]) == "function" ? u : null }(e), typeof s == "function")
            for (e = s.call(e), i = 0; !(o = e.next()).done;) l += oa(o = o.value, t, n, s = r + ao(o, i++), a);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function _r(e, t, n) {
    if (e == null) return e;
    var r = [],
        a = 0;
    return oa(e, r, "", "", function(o) { return t.call(n, o, a++) }), r
}

function E0(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()).then(function(n) { e._status !== 0 && e._status !== -1 || (e._status = 1, e._result = n) }, function(n) { e._status !== 0 && e._status !== -1 || (e._status = 2, e._result = n) }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ve = { current: null },
    la = { transition: null },
    P0 = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: la, ReactCurrentOwner: Hl };
O.Children = { map: _r, forEach: function(e, t, n) { _r(e, function() { t.apply(this, arguments) }, n) }, count: function(e) { var t = 0; return _r(e, function() { t++ }), t }, toArray: function(e) { return _r(e, function(t) { return t }) || [] }, only: function(e) { if (!Qo(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } }, O.Component = hn, O.Fragment = g0, O.Profiler = v0, O.PureComponent = ql, O.StrictMode = y0, O.Suspense = x0, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P0, O.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = fu({}, e.props),
        a = e.key,
        o = e.ref,
        l = e._owner;
    if (t != null) { if (t.ref !== void 0 && (o = t.ref, l = Hl.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps; for (s in t) mu.call(t, s) && !gu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]) }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        i = Array(s);
        for (var u = 0; u < s; u++) i[u] = arguments[u + 2];
        r.children = i
    }
    return { $$typeof: mr, type: e.type, key: a, ref: o, props: r, _owner: l }
}, O.createContext = function(e) { return (e = { $$typeof: w0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: b0, _context: e }, e.Consumer = e }, O.createElement = zi, O.createFactory = function(e) { var t = zi.bind(null, e); return t.type = e, t }, O.createRef = function() { return { current: null } }, O.forwardRef = function(e) { return { $$typeof: k0, render: e } }, O.isValidElement = Qo, O.lazy = function(e) { return { $$typeof: C0, _payload: { _status: -1, _result: e }, _init: E0 } }, O.memo = function(e, t) { return { $$typeof: S0, type: e, compare: t === void 0 ? null : t } }, O.startTransition = function(e) {
    var t = la.transition;
    la.transition = {};
    try { e() } finally { la.transition = t }
}, O.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") }, O.useCallback = function(e, t) { return ve.current.useCallback(e, t) }, O.useContext = function(e) { return ve.current.useContext(e) }, O.useDebugValue = function() {}, O.useDeferredValue = function(e) { return ve.current.useDeferredValue(e) }, O.useEffect = function(e, t) { return ve.current.useEffect(e, t) }, O.useId = function() { return ve.current.useId() }, O.useImperativeHandle = function(e, t, n) { return ve.current.useImperativeHandle(e, t, n) }, O.useInsertionEffect = function(e, t) { return ve.current.useInsertionEffect(e, t) }, O.useLayoutEffect = function(e, t) { return ve.current.useLayoutEffect(e, t) }, O.useMemo = function(e, t) { return ve.current.useMemo(e, t) }, O.useReducer = function(e, t, n) { return ve.current.useReducer(e, t, n) }, O.useRef = function(e) { return ve.current.useRef(e) }, O.useState = function(e) { return ve.current.useState(e) }, O.useSyncExternalStore = function(e, t, n) { return ve.current.useSyncExternalStore(e, t, n) }, O.useTransition = function() { return ve.current.useTransition() }, O.version = "18.2.0", cu.exports = O;
var F = cu.exports;
const Rt = su(F);
var M0 = F,
    I0 = Symbol.for("react.element"),
    T0 = Symbol.for("react.fragment"),
    N0 = Object.prototype.hasOwnProperty,
    L0 = M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    R0 = { key: !0, ref: !0, __self: !0, __source: !0 };

function Di(e, t, n) {
    var r, a = {},
        o = null,
        l = null;
    for (r in n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref), t) N0.call(t, r) && !R0.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps) a[r] === void 0 && (a[r] = t[r]);
    return { $$typeof: I0, type: e, key: o, ref: l, props: a, _owner: L0.current }
}
Ur.Fragment = T0, Ur.jsx = Di, Ur.jsxs = Di, uu.exports = Ur;
var w = uu.exports,
    Go = {},
    yu = { exports: {} },
    Le = {},
    vu = { exports: {} },
    Oi = {};
(function(e) {
    function t(N, A) {
        var D = N.length;
        N.push(A);
        e: for (; 0 < D;) {
            var V = D - 1 >>> 1,
                ee = N[V];
            if (!(0 < a(ee, A))) break e;
            N[V] = A, N[D] = ee, D = V
        }
    }

    function n(N) { return N.length === 0 ? null : N[0] }

    function r(N) {
        if (N.length === 0) return null;
        var A = N[0],
            D = N.pop();
        if (D !== A) {
            N[0] = D;
            e: for (var V = 0, ee = N.length, un = ee >>> 1; V < un;) {
                var $e = 2 * (V + 1) - 1,
                    Bn = N[$e],
                    st = $e + 1,
                    jr = N[st];
                if (0 > a(Bn, D)) st < ee && 0 > a(jr, Bn) ? (N[V] = jr, N[st] = D, V = st) : (N[V] = Bn, N[$e] = D, V = $e);
                else {
                    if (!(st < ee && 0 > a(jr, D))) break e;
                    N[V] = jr, N[st] = D, V = st
                }
            }
        }
        return A
    }

    function a(N, A) { var D = N.sortIndex - A.sortIndex; return D !== 0 ? D : N.id - A.id }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() { return o.now() }
    } else {
        var l = Date,
            i = l.now();
        e.unstable_now = function() { return l.now() - i }
    }
    var s = [],
        u = [],
        c = 1,
        d = null,
        p = 3,
        m = !1,
        y = !1,
        b = !1,
        g = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;

    function v(N) {
        for (var A = n(u); A !== null;) {
            if (A.callback === null) r(u);
            else {
                if (!(A.startTime <= N)) break;
                r(u), A.sortIndex = A.expirationTime, t(s, A)
            }
            A = n(u)
        }
    }

    function k(N) {
        if (b = !1, v(N), !y)
            if (n(s) !== null) y = !0, Se(M);
            else {
                var A = n(u);
                A !== null && Xe(k, A.startTime - N)
            }
    }

    function M(N, A) {
        y = !1, b && (b = !1, f(I), I = -1), m = !0;
        var D = p;
        try {
            for (v(A), d = n(s); d !== null && (!(d.expirationTime > A) || N && !ie());) {
                var V = d.callback;
                if (typeof V == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var ee = V(d.expirationTime <= A);
                    A = e.unstable_now(), typeof ee == "function" ? d.callback = ee : d === n(s) && r(s), v(A)
                } else r(s);
                d = n(s)
            }
            if (d !== null) var un = !0;
            else {
                var $e = n(u);
                $e !== null && Xe(k, $e.startTime - A), un = !1
            }
            return un
        } finally { d = null, p = D, m = !1 }
    }
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S, x = !1,
        E = null,
        I = -1,
        z = 5,
        W = -1;

    function ie() { return !(e.unstable_now() - W < z) }

    function me() {
        if (E !== null) {
            var N = e.unstable_now();
            W = N;
            var A = !0;
            try { A = E(!0, N) } finally { A ? S() : (x = !1, E = null) }
        } else x = !1
    }
    if (typeof h == "function") S = function() { h(me) };
    else if (typeof MessageChannel < "u") {
        var de = new MessageChannel,
            ge = de.port2;
        de.port1.onmessage = me, S = function() { ge.postMessage(null) }
    } else S = function() { g(me, 0) };

    function Se(N) { E = N, x || (x = !0, S()) }

    function Xe(N, A) { I = g(function() { N(e.unstable_now()) }, A) }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) { N.callback = null }, e.unstable_continueExecution = function() { y || m || (y = !0, Se(M)) }, e.unstable_forceFrameRate = function(N) { 0 > N || 125 < N || (z = 0 < N ? Math.floor(1e3 / N) : 5) }, e.unstable_getCurrentPriorityLevel = function() { return p }, e.unstable_getFirstCallbackNode = function() { return n(s) }, e.unstable_next = function(N) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = p
        }
        var D = p;
        p = A;
        try { return N() } finally { p = D }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, A) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var D = p;
        p = N;
        try { return A() } finally { p = D }
    }, e.unstable_scheduleCallback = function(N, A, D) {
        var V = e.unstable_now();
        switch (typeof D == "object" && D !== null ? D = typeof(D = D.delay) == "number" && 0 < D ? V + D : V : D = V, N) {
            case 1:
                var ee = -1;
                break;
            case 2:
                ee = 250;
                break;
            case 5:
                ee = 1073741823;
                break;
            case 4:
                ee = 1e4;
                break;
            default:
                ee = 5e3
        }
        return N = { id: c++, callback: A, priorityLevel: N, startTime: D, expirationTime: ee = D + ee, sortIndex: -1 }, D > V ? (N.sortIndex = D, t(u, N), n(s) === null && N === n(u) && (b ? (f(I), I = -1) : b = !0, Xe(k, D - V))) : (N.sortIndex = ee, t(s, N), y || m || (y = !0, Se(M))), N
    }, e.unstable_shouldYield = ie, e.unstable_wrapCallback = function(N) {
        var A = p;
        return function() {
            var D = p;
            p = A;
            try { return N.apply(this, arguments) } finally { p = D }
        }
    }
})(Oi), vu.exports = Oi;
var z0 = vu.exports,
    bu = F,
    Fe = z0;

function P(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var wu = new Set,
    gr = {};

function Qt(e, t) { mn(e, t), mn(e + "Capture", t) }

function mn(e, t) { for (gr[e] = t, e = 0; e < t.length; e++) wu.add(t[e]) }
var wt = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0),
    Yo = Object.prototype.hasOwnProperty,
    A0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Fi = {},
    ji = {};

function we(e, t, n, r, a, o, l) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l }
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { ue[e] = new we(e, 0, !1, e, null, !1, !1) }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ue[t] = new we(t, 1, !1, e[1], null, !1, !1)
}), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { ue[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1) }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { ue[e] = new we(e, 2, !1, e, null, !1, !1) }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { ue[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1) }), ["checked", "multiple", "muted", "selected"].forEach(function(e) { ue[e] = new we(e, 3, !0, e, null, !1, !1) }), ["capture", "download"].forEach(function(e) { ue[e] = new we(e, 4, !1, e, null, !1, !1) }), ["cols", "rows", "size", "span"].forEach(function(e) { ue[e] = new we(e, 6, !1, e, null, !1, !1) }), ["rowSpan", "start"].forEach(function(e) { ue[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var oo = /[\-:]([a-z])/g;

function lo(e) { return e[1].toUpperCase() }

function Wl(e, t, n, r) {
    var a = ue.hasOwnProperty(t) ? ue[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (function(o, l, i, s) {
        if (l == null || function(u, c, d, p) {
                if (d !== null && d.type === 0) return !1;
                switch (typeof c) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return !p && (d !== null ? !d.acceptsBooleans : (u = u.toLowerCase().slice(0, 5)) !== "data-" && u !== "aria-");
                    default:
                        return !1
                }
            }(o, l, i, s)) return !0;
        if (s) return !1;
        if (i !== null) switch (i.type) {
            case 3:
                return !l;
            case 4:
                return l === !1;
            case 5:
                return isNaN(l);
            case 6:
                return isNaN(l) || 1 > l
        }
        return !1
    }(t, n, a, r) && (n = null), r || a === null ? function(o) { return !!Yo.call(ji, o) || !Yo.call(Fi, o) && (A0.test(o) ? ji[o] = !0 : (Fi[o] = !0, !1)) }(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type !== 3 && "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (n = (a = a.type) === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(oo, lo);
    ue[t] = new we(t, 1, !1, e, null, !1, !1)
}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(oo, lo);
    ue[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
}), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(oo, lo);
    ue[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
}), ["tabIndex", "crossOrigin"].forEach(function(e) { ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1) }), ue.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) { ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0) });
var kt = bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Br = Symbol.for("react.element"),
    gn = Symbol.for("react.portal"),
    yn = Symbol.for("react.fragment"),
    Ql = Symbol.for("react.strict_mode"),
    Jo = Symbol.for("react.profiler"),
    ku = Symbol.for("react.provider"),
    xu = Symbol.for("react.context"),
    Gl = Symbol.for("react.forward_ref"),
    Ko = Symbol.for("react.suspense"),
    Zo = Symbol.for("react.suspense_list"),
    Yl = Symbol.for("react.memo"),
    Et = Symbol.for("react.lazy"),
    Su = Symbol.for("react.offscreen"),
    Ui = Symbol.iterator;

function Vn(e) { return e === null || typeof e != "object" ? null : typeof(e = Ui && e[Ui] || e["@@iterator"]) == "function" ? e : null }
var io, G = Object.assign;

function er(e) {
    if (io === void 0) try { throw Error() } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        io = t && t[1] || ""
    }
    return `
` + io + e
}
var so = !1;

function uo(e, t) {
    if (!e || so) return "";
    so = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                try { Reflect.construct(t, []) } catch (u) { var r = u }
                Reflect.construct(e, [], t)
            } else {
                try { t.call() } catch (u) { r = u }
                e.call(t.prototype)
            }
        else {
            try { throw Error() } catch (u) { r = u }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var a = u.stack.split(`
`), o = r.stack.split(`
`), l = a.length - 1, i = o.length - 1; 1 <= l && 0 <= i && a[l] !== o[i];) i--;
            for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                    if (l !== 1 || i !== 1)
                        do
                            if (l--, 0 > --i || a[l] !== o[i]) { var s = `
` + a[l].replace(" at new ", " at "); return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s }
                    while (1 <= l && 0 <= i);
                    break
                }
        }
    } finally { so = !1, Error.prepareStackTrace = n }
    return (e = e ? e.displayName || e.name : "") ? er(e) : ""
}

function D0(e) {
    switch (e.tag) {
        case 5:
            return er(e.type);
        case 16:
            return er("Lazy");
        case 13:
            return er("Suspense");
        case 19:
            return er("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = uo(e.type, !1);
        case 11:
            return e = uo(e.type.render, !1);
        case 1:
            return e = uo(e.type, !0);
        default:
            return ""
    }
}

function Xo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case yn:
            return "Fragment";
        case gn:
            return "Portal";
        case Jo:
            return "Profiler";
        case Ql:
            return "StrictMode";
        case Ko:
            return "Suspense";
        case Zo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case xu:
            return (e.displayName || "Context") + ".Consumer";
        case ku:
            return (e._context.displayName || "Context") + ".Provider";
        case Gl:
            var t = e.render;
            return (e = e.displayName) || (e = (e = t.displayName || t.name || "") !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Yl:
            return (t = e.displayName || null) !== null ? t : Xo(e.type) || "Memo";
        case Et:
            t = e._payload, e = e._init;
            try { return Xo(e(t)) } catch {}
    }
    return null
}

function O0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Xo(t);
        case 8:
            return t === Ql ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Vt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
            return e;
        default:
            return ""
    }
}

function Cu(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function Vr(e) {
    e._valueTracker || (e._valueTracker = function(t) {
        var n = Cu(t) ? "checked" : "value",
            r = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
            a = "" + t[n];
        if (!t.hasOwnProperty(n) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
            var o = r.get,
                l = r.set;
            return Object.defineProperty(t, n, { configurable: !0, get: function() { return o.call(this) }, set: function(i) { a = "" + i, l.call(this, i) } }), Object.defineProperty(t, n, { enumerable: r.enumerable }), { getValue: function() { return a }, setValue: function(i) { a = "" + i }, stopTracking: function() { t._valueTracker = null, delete t[n] } }
        }
    }(e))
}

function Eu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Cu(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
}

function xa(e) { if ((e = e || (typeof document < "u" ? document : void 0)) === void 0) return null; try { return e.activeElement || e.body } catch { return e.body } }

function $o(e, t) { var n = t.checked; return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }) }

function _i(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }
}

function Pu(e, t) {
    (t = t.checked) != null && Wl(e, "checked", t, !1)
}

function el(e, t) {
    Pu(e, t);
    var n = Vt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? tl(e, t.type, n) : t.hasOwnProperty("defaultValue") && tl(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Bi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }(n = e.name) !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function tl(e, t, n) { t === "number" && xa(e.ownerDocument) === e || (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) }
var tr = Array.isArray;

function Mn(e, t, n, r) {
    if (e = e.options, t) { t = {}; for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0; for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0) } else {
        for (n = "" + Vt(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
            t !== null || e[a].disabled || (t = e[a])
        }
        t !== null && (t.selected = !0)
    }
}

function nl(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(P(91)); return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function Vi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(P(92));
            if (tr(n)) {
                if (1 < n.length) throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = { initialValue: Vt(n) }
}

function Mu(e, t) {
    var n = Vt(t.value),
        r = Vt(t.defaultValue);
    n != null && ((n = "" + n) !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function qi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Iu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function rl(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var co, fo, Tu = (fo = function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else { for ((co = co || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = co.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) }
}, typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) { MSApp.execUnsafeLocalFunction(function() { return fo(e, t) }) } : fo);

function yr(e, t) {
    if (t) { var n = e.firstChild; if (n && n === e.lastChild && n.nodeType === 3) return void(n.nodeValue = t) }
    e.textContent = t
}
var or = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    F0 = ["Webkit", "ms", "Moz", "O"];

function Nu(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || or.hasOwnProperty(e) && or[e] ? ("" + t).trim() : t + "px" }

function Lu(e, t) {
    for (var n in e = e.style, t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                a = Nu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
        }
}
Object.keys(or).forEach(function(e) { F0.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), or[t] = or[e] }) });
var j0 = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function al(e, t) { if (t) { if (j0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(P(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61)) } if (t.style != null && typeof t.style != "object") throw Error(P(62)) } }

function ol(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ll = null;

function Jl(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var il = null,
    In = null,
    Tn = null;

function Hi(e) {
    if (e = Or(e)) {
        if (typeof il != "function") throw Error(P(280));
        var t = e.stateNode;
        t && (t = Ya(t), il(e.stateNode, e.type, t))
    }
}

function Ru(e) { In ? Tn ? Tn.push(e) : Tn = [e] : In = e }

function zu() {
    if (In) {
        var e = In,
            t = Tn;
        if (Tn = In = null, Hi(e), t)
            for (e = 0; e < t.length; e++) Hi(t[e])
    }
}

function Au(e, t) { return e(t) }

function Du() {}
var po = !1;

function Ou(e, t, n) {
    if (po) return e(t, n);
    po = !0;
    try { return Au(e, t, n) } finally { po = !1, (In !== null || Tn !== null) && (Du(), zu()) }
}

function vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ya(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = !((e = e.type) === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(P(231, t, typeof n));
    return n
}
var sl = !1;
if (wt) try {
    var qn = {};
    Object.defineProperty(qn, "passive", { get: function() { sl = !0 } }), window.addEventListener("test", qn, qn), window.removeEventListener("test", qn, qn)
} catch { sl = !1 }

function U0(e, t, n, r, a, o, l, i, s) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (c) { this.onError(c) } }
var lr = !1,
    Sa = null,
    Ca = !1,
    ul = null,
    _0 = { onError: function(e) { lr = !0, Sa = e } };

function B0(e, t, n, r, a, o, l, i, s) { lr = !1, Sa = null, U0.apply(_0, arguments) }

function sn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do 4098 & (t = e).flags && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Fu(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate) !== null && (t = e.memoizedState), t !== null) return t.dehydrated } return null }

function Wi(e) { if (sn(e) !== e) throw Error(P(188)) }

function ju(e) {
    return e = function(t) {
        var n = t.alternate;
        if (!n) { if ((n = sn(t)) === null) throw Error(P(188)); return n !== t ? null : t }
        for (var r = t, a = n;;) {
            var o = r.return;
            if (o === null) break;
            var l = o.alternate;
            if (l === null) { if ((a = o.return) !== null) { r = a; continue } break }
            if (o.child === l.child) {
                for (l = o.child; l;) {
                    if (l === r) return Wi(o), t;
                    if (l === a) return Wi(o), n;
                    l = l.sibling
                }
                throw Error(P(188))
            }
            if (r.return !== a.return) r = o, a = l;
            else {
                for (var i = !1, s = o.child; s;) {
                    if (s === r) { i = !0, r = o, a = l; break }
                    if (s === a) { i = !0, a = o, r = l; break }
                    s = s.sibling
                }
                if (!i) {
                    for (s = l.child; s;) {
                        if (s === r) { i = !0, r = l, a = o; break }
                        if (s === a) { i = !0, a = l, r = o; break }
                        s = s.sibling
                    }
                    if (!i) throw Error(P(189))
                }
            }
            if (r.alternate !== a) throw Error(P(190))
        }
        if (r.tag !== 3) throw Error(P(188));
        return r.stateNode.current === r ? t : n
    }(e), e !== null ? Uu(e) : null
}

function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Uu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var _u = Fe.unstable_scheduleCallback,
    Qi = Fe.unstable_cancelCallback,
    V0 = Fe.unstable_shouldYield,
    q0 = Fe.unstable_requestPaint,
    Z = Fe.unstable_now,
    H0 = Fe.unstable_getCurrentPriorityLevel,
    Kl = Fe.unstable_ImmediatePriority,
    Bu = Fe.unstable_UserBlockingPriority,
    Zl = Fe.unstable_NormalPriority,
    W0 = Fe.unstable_LowPriority,
    Vu = Fe.unstable_IdlePriority,
    Ha = null,
    ot = null,
    Je = Math.clz32 ? Math.clz32 : function(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Q0(e) / G0 | 0) | 0 },
    Q0 = Math.log,
    G0 = Math.LN2,
    ho = 64,
    mo = 4194304;

function nr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ea(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = 268435455 & n;
    if (l !== 0) {
        var i = l & ~a;
        i !== 0 ? r = nr(i) : (o &= l) !== 0 && (r = nr(o))
    } else(l = n & ~a) !== 0 ? r = nr(l) : o !== 0 && (r = nr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & a) && ((a = r & -r) >= (o = t & -t) || a === 16 && 4194240 & o)) return t;
    if (4 & r && (r |= 16 & n), (t = e.entangledLanes) !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - Je(t)), r |= e[n], t &= ~a;
    return r
}

function Y0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        default:
            return -1
    }
}

function cl(e) { return (e = -1073741825 & e.pendingLanes) !== 0 ? e : 1073741824 & e ? 1073741824 : 0 }

function qu() { var e = ho; return !(4194240 & (ho <<= 1)) && (ho = 64), e }

function go(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

function Ar(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - Je(t)] = n }

function Xl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Je(n),
            a = 1 << r;
        a & t | e[r] & t && (e[r] |= t), n &= ~a
    }
}
var U = 0;

function Hu(e) { return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1 }
var Wu, $l, Qu, Gi, Gu, dl = !1,
    qr = [],
    zt = null,
    At = null,
    Dt = null,
    br = new Map,
    wr = new Map,
    It = [],
    J0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Yi(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            zt = null;
            break;
        case "dragenter":
        case "dragleave":
            At = null;
            break;
        case "mouseover":
        case "mouseout":
            Dt = null;
            break;
        case "pointerover":
        case "pointerout":
            br.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            wr.delete(t.pointerId)
    }
}

function Hn(e, t, n, r, a, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Or(t)) !== null && $l(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e) }

function Yu(e) {
    var t = Kt(e.target);
    if (t !== null) { var n = sn(t); if (n !== null) { if ((t = n.tag) === 13) { if ((t = Fu(n)) !== null) return e.blockedOn = t, void Gu(e.priority, function() { Qu(n) }) } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null) } }
    e.blockedOn = null
}

function ia(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) return (t = Or(n)) !== null && $l(t), e.blockedOn = n, !1;
        var r = new(n = e.nativeEvent).constructor(n.type, n);
        ll = r, n.target.dispatchEvent(r), ll = null, t.shift()
    }
    return !0
}

function Ji(e, t, n) { ia(e) && n.delete(t) }

function K0() { dl = !1, zt !== null && ia(zt) && (zt = null), At !== null && ia(At) && (At = null), Dt !== null && ia(Dt) && (Dt = null), br.forEach(Ji), wr.forEach(Ji) }

function Wn(e, t) { e.blockedOn === t && (e.blockedOn = null, dl || (dl = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, K0))) }

function kr(e) {
    function t(a) { return Wn(a, e) }
    if (0 < qr.length) {
        Wn(qr[0], e);
        for (var n = 1; n < qr.length; n++) {
            var r = qr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (zt !== null && Wn(zt, e), At !== null && Wn(At, e), Dt !== null && Wn(Dt, e), br.forEach(t), wr.forEach(t), n = 0; n < It.length; n++)(r = It[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0]).blockedOn === null;) Yu(n), n.blockedOn === null && It.shift()
}
var Nn = kt.ReactCurrentBatchConfig,
    sa = !0;

function Z0(e, t, n, r) {
    var a = U,
        o = Nn.transition;
    Nn.transition = null;
    try { U = 1, ei(e, t, n, r) } finally { U = a, Nn.transition = o }
}

function X0(e, t, n, r) {
    var a = U,
        o = Nn.transition;
    Nn.transition = null;
    try { U = 4, ei(e, t, n, r) } finally { U = a, Nn.transition = o }
}

function ei(e, t, n, r) {
    if (sa) {
        var a = fl(e, t, n, r);
        if (a === null) Po(e, t, r, Pa, n), Yi(e, r);
        else if (function(l, i, s, u, c) {
                switch (i) {
                    case "focusin":
                        return zt = Hn(zt, l, i, s, u, c), !0;
                    case "dragenter":
                        return At = Hn(At, l, i, s, u, c), !0;
                    case "mouseover":
                        return Dt = Hn(Dt, l, i, s, u, c), !0;
                    case "pointerover":
                        var d = c.pointerId;
                        return br.set(d, Hn(br.get(d) || null, l, i, s, u, c)), !0;
                    case "gotpointercapture":
                        return d = c.pointerId, wr.set(d, Hn(wr.get(d) || null, l, i, s, u, c)), !0
                }
                return !1
            }(a, e, t, n, r)) r.stopPropagation();
        else if (Yi(e, r), 4 & t && -1 < J0.indexOf(e)) {
            for (; a !== null;) {
                var o = Or(a);
                if (o !== null && Wu(o), (o = fl(e, t, n, r)) === null && Po(e, t, r, Pa, n), o === a) break;
                a = o
            }
            a !== null && r.stopPropagation()
        } else Po(e, t, r, null, n)
    }
}
var Pa = null;

function fl(e, t, n, r) {
    if (Pa = null, (e = Kt(e = Jl(r))) !== null)
        if ((t = sn(e)) === null) e = null;
        else if ((n = t.tag) === 13) {
        if ((e = Fu(t)) !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Pa = e, null
}

function Ju(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (H0()) {
                case Kl:
                    return 1;
                case Bu:
                    return 4;
                case Zl:
                case W0:
                    return 16;
                case Vu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Jt = null,
    pl = null,
    ua = null;

function Ki() {
    if (ua) return ua;
    var e, t, n = pl,
        r = n.length,
        a = "value" in Jt ? Jt.value : Jt.textContent,
        o = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var l = r - e;
    for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
    return ua = a.slice(e, 1 < t ? 1 - t : void 0)
}

function ca(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode) === 0 && t === 13 && (e = 13) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function Hr() { return !0 }

function Zi() { return !1 }

function je(e) {
    function t(n, r, a, o, l) { for (var i in this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Hr : Zi, this.isPropagationStopped = Zi, this }
    return G(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hr)
        },
        persist: function() {},
        isPersistent: Hr
    }), t
}
var yo, vo, Qn, Un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    ti = je(Un),
    Dr = G({}, Un, { view: 0, detail: 0 }),
    $0 = je(Dr),
    Wa = G({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ni, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (yo = e.screenX - Qn.screenX, vo = e.screenY - Qn.screenY) : vo = yo = 0, Qn = e), yo) }, movementY: function(e) { return "movementY" in e ? e.movementY : vo } }),
    Xi = je(Wa),
    e1 = je(G({}, Wa, { dataTransfer: 0 })),
    bo = je(G({}, Dr, { relatedTarget: 0 })),
    t1 = je(G({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    n1 = G({}, Un, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    r1 = je(n1),
    $i = je(G({}, Un, { data: 0 })),
    a1 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    o1 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    l1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function i1(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = l1[e]) && !!t[e] }

function ni() { return i1 }
var s1 = G({}, Dr, { key: function(e) { if (e.key) { var t = a1[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = ca(e)) === 13 ? "Enter" : String.fromCharCode(e) : e.type === "keydown" || e.type === "keyup" ? o1[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ni, charCode: function(e) { return e.type === "keypress" ? ca(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? ca(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    u1 = je(s1),
    es = je(G({}, Wa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
    c1 = je(G({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ni })),
    d1 = je(G({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    f1 = G({}, Wa, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    p1 = je(f1),
    h1 = [9, 13, 27, 32],
    hl = wt && "CompositionEvent" in window,
    ir = null;
wt && "documentMode" in document && (ir = document.documentMode);
var m1 = wt && "TextEvent" in window && !ir,
    ts = wt && (!hl || ir && 8 < ir && 11 >= ir),
    ns = String.fromCharCode(32),
    rs = !1;

function as(e, t) {
    switch (e) {
        case "keyup":
            return h1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function os(e) { return typeof(e = e.detail) == "object" && "data" in e ? e.data : null }
var cn = !1,
    g1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function ls(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!g1[e.type] : t === "textarea" }

function Ku(e, t, n, r) { Ru(r), 0 < (t = Ma(t, "onChange")).length && (n = new ti("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) }
var da = null,
    xr = null;

function y1(e) { ic(e, 0) }

function Qa(e) { if (Eu(wn(e))) return e }

function v1(e, t) { if (e === "change") return t }
var Zu = !1;
if (wt) {
    var wo;
    if (wt) {
        var ko = "oninput" in document;
        if (!ko) {
            var is = document.createElement("div");
            is.setAttribute("oninput", "return;"), ko = typeof is.oninput == "function"
        }
        wo = ko
    } else wo = !1;
    Zu = wo && (!document.documentMode || 9 < document.documentMode)
}

function ss() { da && (da.detachEvent("onpropertychange", Xu), xr = da = null) }

function Xu(e) {
    if (e.propertyName === "value" && Qa(xr)) {
        var t = [];
        Ku(t, xr, e, Jl(e)), Ou(y1, t)
    }
}

function b1(e, t, n) { e === "focusin" ? (ss(), xr = n, (da = t).attachEvent("onpropertychange", Xu)) : e === "focusout" && ss() }

function w1(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qa(xr) }

function k1(e, t) { if (e === "click") return Qa(t) }

function x1(e, t) { if (e === "input" || e === "change") return Qa(t) }
var Ze = typeof Object.is == "function" ? Object.is : function(e, t) { return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t };

function Sr(e, t) {
    if (Ze(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) { var a = n[r]; if (!Yo.call(t, a) || !Ze(e[a], t[a])) return !1 }
    return !0
}

function us(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function cs(e, t) {
    var n, r = us(e);
    for (e = 0; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) { r = r.nextSibling; break e }
                r = r.parentNode
            }
            r = void 0
        }
        r = us(r)
    }
}

function $u(e, t) { return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? $u(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))) }

function ec() {
    for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement;) {
        try { var n = typeof t.contentWindow.location.href == "string" } catch { n = !1 }
        if (!n) break;
        t = xa((e = t.contentWindow).document)
    }
    return t
}

function ri(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }

function S1(e) {
    var t = ec(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $u(n.ownerDocument.documentElement, n)) {
        if (r !== null && ri(n)) {
            if (t = r.start, (e = r.end) === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                e = e.getSelection();
                var a = n.textContent.length,
                    o = Math.min(r.start, a);
                r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cs(n, o);
                var l = cs(n, r);
                a && l && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var C1 = wt && "documentMode" in document && 11 >= document.documentMode,
    vn = null,
    ml = null,
    sr = null,
    gl = !1;

function ds(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gl || vn == null || vn !== xa(r) || ("selectionStart" in (r = vn) && ri(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, sr && Sr(sr, r) || (sr = r, 0 < (r = Ma(ml, "onSelect")).length && (t = new ti("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vn)))
}

function Wr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n }
var bn = { animationend: Wr("Animation", "AnimationEnd"), animationiteration: Wr("Animation", "AnimationIteration"), animationstart: Wr("Animation", "AnimationStart"), transitionend: Wr("Transition", "TransitionEnd") },
    xo = {},
    tc = {};

function Ga(e) {
    if (xo[e]) return xo[e];
    if (!bn[e]) return e;
    var t, n = bn[e];
    for (t in n)
        if (n.hasOwnProperty(t) && t in tc) return xo[e] = n[t];
    return e
}
wt && (tc = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
var nc = Ga("animationend"),
    rc = Ga("animationiteration"),
    ac = Ga("animationstart"),
    oc = Ga("transitionend"),
    lc = new Map,
    fs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ct(e, t) { lc.set(e, t), Qt(t, [e]) }
for (var So = 0; So < fs.length; So++) {
    var Co = fs[So];
    Ct(Co.toLowerCase(), "on" + (Co[0].toUpperCase() + Co.slice(1)))
}
Ct(nc, "onAnimationEnd"), Ct(rc, "onAnimationIteration"), Ct(ac, "onAnimationStart"), Ct("dblclick", "onDoubleClick"), Ct("focusin", "onFocus"), Ct("focusout", "onBlur"), Ct(oc, "onTransitionEnd"), mn("onMouseEnter", ["mouseout", "mouseover"]), mn("onMouseLeave", ["mouseout", "mouseover"]), mn("onPointerEnter", ["pointerout", "pointerover"]), mn("onPointerLeave", ["pointerout", "pointerover"]), Qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    E1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));

function ps(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        function(a, o, l, i, s, u, c, d, p) {
            if (B0.apply(this, arguments), lr) {
                if (!lr) throw Error(P(198));
                var m = Sa;
                lr = !1, Sa = null, Ca || (Ca = !0, ul = m)
            }
        }(r, t, void 0, e), e.currentTarget = null
}

function ic(e, t) {
    t = (4 & t) != 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            a = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var i = r[l],
                        s = i.instance,
                        u = i.currentTarget;
                    if (i = i.listener, s !== o && a.isPropagationStopped()) break e;
                    ps(a, i, u), o = s
                } else
                    for (l = 0; l < r.length; l++) {
                        if (s = (i = r[l]).instance, u = i.currentTarget, i = i.listener, s !== o && a.isPropagationStopped()) break e;
                        ps(a, i, u), o = s
                    }
        }
    }
    if (Ca) throw e = ul, Ca = !1, ul = null, e
}

function B(e, t) {
    var n = t[bl];
    n === void 0 && (n = t[bl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (sc(t, e, 2, !1), n.add(r))
}

function Eo(e, t, n) {
    var r = 0;
    t && (r |= 4), sc(n, e, r, t)
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);

function Cr(e) {
    if (!e[Qr]) {
        e[Qr] = !0, wu.forEach(function(n) { n !== "selectionchange" && (E1.has(n) || Eo(n, !1, e), Eo(n, !0, e)) });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Qr] || (t[Qr] = !0, Eo("selectionchange", !1, t))
    }
}

function sc(e, t, n, r) {
    switch (Ju(t)) {
        case 1:
            var a = Z0;
            break;
        case 4:
            a = X0;
            break;
        default:
            a = ei
    }
    n = a.bind(null, t, n, e), a = void 0, !sl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1)
}

function Po(e, t, n, r, a) {
    var o = r;
    if (!(1 & t) && !(2 & t) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var i = r.stateNode.containerInfo;
            if (i === a || i.nodeType === 8 && i.parentNode === a) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var s = l.tag;
                    if ((s === 3 || s === 4) && ((s = l.stateNode.containerInfo) === a || s.nodeType === 8 && s.parentNode === a)) return;
                    l = l.return
                }
            for (; i !== null;) {
                if ((l = Kt(i)) === null) return;
                if ((s = l.tag) === 5 || s === 6) { r = o = l; continue e }
                i = i.parentNode
            }
        }
        r = r.return
    }
    Ou(function() {
        var u = o,
            c = Jl(n),
            d = [];
        e: {
            var p = lc.get(e);
            if (p !== void 0) {
                var m = ti,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (ca(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = u1;
                        break;
                    case "focusin":
                        y = "focus", m = bo;
                        break;
                    case "focusout":
                        y = "blur", m = bo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = bo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = Xi;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = e1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = c1;
                        break;
                    case nc:
                    case rc:
                    case ac:
                        m = t1;
                        break;
                    case oc:
                        m = d1;
                        break;
                    case "scroll":
                        m = $0;
                        break;
                    case "wheel":
                        m = p1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = r1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = es
                }
                var b = (4 & t) != 0,
                    g = !b && e === "scroll",
                    f = b ? p !== null ? p + "Capture" : null : p;
                b = [];
                for (var h, v = u; v !== null;) {
                    var k = (h = v).stateNode;
                    if (h.tag === 5 && k !== null && (h = k, f !== null && (k = vr(v, f)) != null && b.push(Er(v, k, h))), g) break;
                    v = v.return
                }
                0 < b.length && (p = new m(p, y, null, n, c), d.push({ event: p, listeners: b }))
            }
        }
        if (!(7 & t)) {
            if (m = e === "mouseout" || e === "pointerout", (!(p = e === "mouseover" || e === "pointerover") || n === ll || !(y = n.relatedTarget || n.fromElement) || !Kt(y) && !y[gt]) && (m || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, m ? (m = u, (y = (y = n.relatedTarget || n.toElement) ? Kt(y) : null) !== null && (y !== (g = sn(y)) || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = u), m !== y)) {
                if (b = Xi, k = "onMouseLeave", f = "onMouseEnter", v = "mouse", e !== "pointerout" && e !== "pointerover" || (b = es, k = "onPointerLeave", f = "onPointerEnter", v = "pointer"), g = m == null ? p : wn(m), h = y == null ? p : wn(y), (p = new b(k, v + "leave", m, n, c)).target = g, p.relatedTarget = h, k = null, Kt(c) === u && ((b = new b(f, v + "enter", y, n, c)).target = h, b.relatedTarget = g, k = b), g = k, m && y) e: {
                    for (f = y, v = 0, h = b = m; h; h = dn(h)) v++;
                    for (h = 0, k = f; k; k = dn(k)) h++;
                    for (; 0 < v - h;) b = dn(b),
                    v--;
                    for (; 0 < h - v;) f = dn(f),
                    h--;
                    for (; v--;) {
                        if (b === f || f !== null && b === f.alternate) break e;
                        b = dn(b), f = dn(f)
                    }
                    b = null
                }
                else b = null;
                m !== null && hs(d, p, m, b, !1), y !== null && g !== null && hs(d, g, y, b, !0)
            }
            if ((m = (p = u ? wn(u) : window).nodeName && p.nodeName.toLowerCase()) === "select" || m === "input" && p.type === "file") var M = v1;
            else if (ls(p))
                if (Zu) M = x1;
                else { M = w1; var S = b1 }
            else(m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (M = k1);
            switch (M && (M = M(e, u)) ? Ku(d, M, n, c) : (S && S(e, p, u), e === "focusout" && (S = p._wrapperState) && S.controlled && p.type === "number" && tl(p, "number", p.value)), S = u ? wn(u) : window, e) {
                case "focusin":
                    (ls(S) || S.contentEditable === "true") && (vn = S, ml = u, sr = null);
                    break;
                case "focusout":
                    sr = ml = vn = null;
                    break;
                case "mousedown":
                    gl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    gl = !1, ds(d, n, c);
                    break;
                case "selectionchange":
                    if (C1) break;
                case "keydown":
                case "keyup":
                    ds(d, n, c)
            }
            var x;
            if (hl) e: {
                switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                }
                E = void 0
            }
            else cn ? as(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (ts && n.locale !== "ko" && (cn || E !== "onCompositionStart" ? E === "onCompositionEnd" && cn && (x = Ki()) : (pl = "value" in (Jt = c) ? Jt.value : Jt.textContent, cn = !0)), 0 < (S = Ma(u, E)).length && (E = new $i(E, e, null, n, c), d.push({ event: E, listeners: S }), (x || (x = os(n)) !== null) && (E.data = x))), (x = m1 ? function(I, z) {
                switch (I) {
                    case "compositionend":
                        return os(z);
                    case "keypress":
                        return z.which !== 32 ? null : (rs = !0, ns);
                    case "textInput":
                        return (I = z.data) === ns && rs ? null : I;
                    default:
                        return null
                }
            }(e, n) : function(I, z) {
                if (cn) return I === "compositionend" || !hl && as(I, z) ? (I = Ki(), ua = pl = Jt = null, cn = !1, I) : null;
                switch (I) {
                    case "paste":
                    default:
                        return null;
                    case "keypress":
                        if (!(z.ctrlKey || z.altKey || z.metaKey) || z.ctrlKey && z.altKey) { if (z.char && 1 < z.char.length) return z.char; if (z.which) return String.fromCharCode(z.which) }
                        return null;
                    case "compositionend":
                        return ts && z.locale !== "ko" ? null : z.data
                }
            }(e, n)) && 0 < (u = Ma(u, "onBeforeInput")).length && (c = new $i("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = x)
        }
        ic(d, t)
    })
}

function Er(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

function Ma(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var a = e,
            o = a.stateNode;
        a.tag === 5 && o !== null && (a = o, (o = vr(e, n)) != null && r.unshift(Er(e, o, a)), (o = vr(e, t)) != null && r.push(Er(e, o, a))), e = e.return
    }
    return r
}

function dn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function hs(e, t, n, r, a) {
    for (var o = t._reactName, l = []; n !== null && n !== r;) {
        var i = n,
            s = i.alternate,
            u = i.stateNode;
        if (s !== null && s === r) break;
        i.tag === 5 && u !== null && (i = u, a ? (s = vr(n, o)) != null && l.unshift(Er(n, s, i)) : a || (s = vr(n, o)) != null && l.push(Er(n, s, i))), n = n.return
    }
    l.length !== 0 && e.push({ event: t, listeners: l })
}
var P1 = /\r\n?/g,
    M1 = /\u0000|\uFFFD/g;

function ms(e) { return (typeof e == "string" ? e : "" + e).replace(P1, `
`).replace(M1, "") }

function Gr(e, t, n) { if (t = ms(t), ms(e) !== t && n) throw Error(P(425)) }

function Ia() {}
var Mo = null,
    Io = null;

function yl(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var vl = typeof setTimeout == "function" ? setTimeout : void 0,
    I1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    gs = typeof Promise == "function" ? Promise : void 0,
    T1 = typeof queueMicrotask == "function" ? queueMicrotask : gs !== void 0 ? function(e) { return gs.resolve(null).then(e).catch(N1) } : vl;

function N1(e) { setTimeout(function() { throw e }) }

function To(e, t) {
    var n = t,
        r = 0;
    do {
        var a = n.nextSibling;
        if (e.removeChild(n), a && a.nodeType === 8)
            if ((n = a.data) === "/$") {
                if (r === 0) return e.removeChild(a), void kr(t);
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = a
    } while (n);
    kr(t)
}

function Ot(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if ((t = e.data) === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e }

function ys(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var _n = Math.random().toString(36).slice(2),
    rt = "__reactFiber$" + _n,
    Pr = "__reactProps$" + _n,
    gt = "__reactContainer$" + _n,
    bl = "__reactEvents$" + _n,
    L1 = "__reactListeners$" + _n,
    R1 = "__reactHandles$" + _n;

function Kt(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[gt] || n[rt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ys(e); e !== null;) {
                    if (n = e[rt]) return n;
                    e = ys(e)
                }
            return t
        }
        n = (e = n).parentNode
    }
    return null
}

function Or(e) { return !(e = e[rt] || e[gt]) || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function wn(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(P(33)) }

function Ya(e) { return e[Pr] || null }
var wl = [],
    kn = -1;

function Ht(e) { return { current: e } }

function H(e) { 0 > kn || (e.current = wl[kn], wl[kn] = null, kn--) }

function _(e, t) { kn++, wl[kn] = e.current, e.current = t }
var qt = {},
    he = Ht(qt),
    Te = Ht(!1),
    rn = qt;

function zn(e, t) { var n = e.type.contextTypes; if (!n) return qt; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext; var a, o = {}; for (a in n) o[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o }

function De(e) { return (e = e.childContextTypes) != null }

function ai() { H(Te), H(he) }

function vs(e, t, n) {
    if (he.current !== qt) throw Error(P(168));
    _(he, t), _(Te, n)
}

function uc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    for (var a in r = r.getChildContext())
        if (!(a in t)) throw Error(P(108, O0(e) || "Unknown", a));
    return G({}, n, r)
}

function fa(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qt, rn = he.current, _(he, e), _(Te, Te.current), !0 }

function bs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(P(169));
    n ? (e = uc(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, H(Te), H(he), _(he, e)) : H(Te), _(Te, n)
}
var ft = null,
    Ja = !1,
    No = !1;

function ws(e) { ft === null ? ft = [e] : ft.push(e) }

function Wt() {
    if (!No && ft !== null) {
        No = !0;
        var e = 0,
            t = U;
        try {
            var n = ft;
            for (U = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ft = null, Ja = !1
        } catch (a) { throw ft !== null && (ft = ft.slice(e + 1)), _u(Kl, Wt), a } finally { U = t, No = !1 }
    }
    return null
}
var xn = [],
    Sn = 0,
    Ta = null,
    Na = 0,
    Ue = [],
    _e = 0,
    an = null,
    at = 1,
    ht = "";

function Gt(e, t) { xn[Sn++] = Na, xn[Sn++] = Ta, Ta = e, Na = t }

function cc(e, t, n) {
    Ue[_e++] = at, Ue[_e++] = ht, Ue[_e++] = an, an = e;
    var r = at;
    e = ht;
    var a = 32 - Je(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - Je(t) + a;
    if (30 < o) {
        var l = a - a % 5;
        o = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, at = 1 << 32 - Je(t) + a | n << a | r, ht = o + e
    } else at = 1 << o | n << a | r, ht = e
}

function oi(e) { e.return !== null && (Gt(e, 1), cc(e, 1, 0)) }

function li(e) { for (; e === Ta;) Ta = xn[--Sn], xn[Sn] = null, Na = xn[--Sn], xn[Sn] = null; for (; e === an;) an = Ue[--_e], Ue[_e] = null, ht = Ue[--_e], Ue[_e] = null, at = Ue[--_e], Ue[_e] = null }
var Oe = null,
    Ae = null,
    q = !1,
    Qe = null;

function dc(e, t) {
    var n = Ve(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, (t = e.deletions) === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ks(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) !== null && (e.stateNode = t, Oe = e, Ae = Ot(t.firstChild), !0);
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t) !== null && (e.stateNode = t, Oe = e, Ae = null, !0);
        case 13:
            return (t = t.nodeType !== 8 ? null : t) !== null && (n = an !== null ? { id: at, overflow: ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Ve(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, Oe = e, Ae = null, !0);
        default:
            return !1
    }
}

function kl(e) { return (1 & e.mode) != 0 && (128 & e.flags) == 0 }

function xl(e) {
    if (q) {
        var t = Ae;
        if (t) {
            var n = t;
            if (!ks(e, t)) {
                if (kl(e)) throw Error(P(418));
                t = Ot(n.nextSibling);
                var r = Oe;
                t && ks(e, t) ? dc(r, n) : (e.flags = -4097 & e.flags | 2, q = !1, Oe = e)
            }
        } else {
            if (kl(e)) throw Error(P(418));
            e.flags = -4097 & e.flags | 2, q = !1, Oe = e
        }
    }
}

function xs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Oe = e
}

function Yr(e) {
    if (e !== Oe) return !1;
    if (!q) return xs(e), q = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = (t = e.type) !== "head" && t !== "body" && !yl(e.type, e.memoizedProps)), t && (t = Ae)) { if (kl(e)) throw fc(), Error(P(418)); for (; t;) dc(e, t), t = Ot(t.nextSibling) }
    if (xs(e), e.tag === 13) {
        if (!(e = (e = e.memoizedState) !== null ? e.dehydrated : null)) throw Error(P(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) { Ae = Ot(e.nextSibling); break e }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ae = null
        }
    } else Ae = Oe ? Ot(e.stateNode.nextSibling) : null;
    return !0
}

function fc() { for (var e = Ae; e;) e = Ot(e.nextSibling) }

function An() { Ae = Oe = null, q = !1 }

function ii(e) { Qe === null ? Qe = [e] : Qe.push(e) }
var z1 = kt.ReactCurrentBatchConfig;

function We(e, t) { if (e && e.defaultProps) { for (var n in t = G({}, t), e = e.defaultProps) t[n] === void 0 && (t[n] = e[n]); return t } return t }
var La = Ht(null),
    Ra = null,
    Cn = null,
    si = null;

function ui() { si = Cn = Ra = null }

function ci(e) {
    var t = La.current;
    H(La), e._currentValue = t
}

function Sl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ln(e, t) { Ra = e, si = Cn = null, (e = e.dependencies) !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null) }

function qe(e) {
    var t = e._currentValue;
    if (si !== e)
        if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
            if (Ra === null) throw Error(P(308));
            Cn = e, Ra.dependencies = { lanes: 0, firstContext: e }
        } else Cn = Cn.next = e;
    return t
}
var Zt = null;

function di(e) { Zt === null ? Zt = [e] : Zt.push(e) }

function pc(e, t, n, r) { var a = t.interleaved; return a === null ? (n.next = n, di(t)) : (n.next = a.next, a.next = n), t.interleaved = n, yt(e, r) }

function yt(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, (n = e.alternate) !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null }
var Pt = !1;

function fi(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function hc(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function vt(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function Ft(e, t, n) { var r = e.updateQueue; if (r === null) return null; if (r = r.shared, (2 & j) != 0) { var a = r.pending; return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, yt(e, n) } return (a = r.interleaved) === null ? (t.next = t, di(r)) : (t.next = a.next, a.next = t), r.interleaved = t, yt(e, n) }

function pa(e, t, n) {
    if ((t = t.updateQueue) !== null && (t = t.shared, (4194240 & n) != 0)) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, Xl(e, n)
    }
}

function Ss(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && n === (r = r.updateQueue)) {
        var a = null,
            o = null;
        if ((n = n.firstBaseUpdate) !== null) {
            do {
                var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                o === null ? a = o = l : o = o.next = l, n = n.next
            } while (n !== null);
            o === null ? a = o = t : o = o.next = t
        } else a = o = t;
        return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, void(e.updateQueue = n)
    }(e = n.lastBaseUpdate) === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function za(e, t, n, r) {
    var a = e.updateQueue;
    Pt = !1;
    var o = a.firstBaseUpdate,
        l = a.lastBaseUpdate,
        i = a.shared.pending;
    if (i !== null) {
        a.shared.pending = null;
        var s = i,
            u = s.next;
        s.next = null, l === null ? o = u : l.next = u, l = s;
        var c = e.alternate;
        c !== null && (i = (c = c.updateQueue).lastBaseUpdate) !== l && (i === null ? c.firstBaseUpdate = u : i.next = u, c.lastBaseUpdate = s)
    }
    if (o !== null) {
        var d = a.baseState;
        for (l = 0, c = u = s = null, i = o;;) {
            var p = i.lane,
                m = i.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = { eventTime: m, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                e: {
                    var y = e,
                        b = i;
                    switch (p = t, m = n, b.tag) {
                        case 1:
                            if (typeof(y = b.payload) == "function") { d = y.call(m, d, p); break e }
                            d = y;
                            break e;
                        case 3:
                            y.flags = -65537 & y.flags | 128;
                        case 0:
                            if ((p = typeof(y = b.payload) == "function" ? y.call(m, d, p) : y) == null) break e;
                            d = G({}, d, p);
                            break e;
                        case 2:
                            Pt = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64, (p = a.effects) === null ? a.effects = [i] : p.push(i))
            } else m = { eventTime: m, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, c === null ? (u = c = m, s = d) : c = c.next = m, l |= p;
            if ((i = i.next) === null) {
                if ((i = a.shared.pending) === null) break;
                i = (p = i).next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null
            }
        }
        if (c === null && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, (t = a.shared.interleaved) !== null) {
            a = t;
            do l |= a.lane, a = a.next; while (a !== t)
        } else o === null && (a.shared.lanes = 0);
        ln |= l, e.lanes = l, e.memoizedState = d
    }
}

function Cs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                a = r.callback;
            if (a !== null) {
                if (r.callback = null, r = n, typeof a != "function") throw Error(P(191, a));
                a.call(r)
            }
        }
}
var mc = new bu.Component().refs;

function Cl(e, t, n, r) { n = (n = n(r, t = e.memoizedState)) == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n) }
var Ka = {
    isMounted: function(e) { return !!(e = e._reactInternals) && sn(e) === e },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe(),
            a = Ut(e),
            o = vt(r, a);
        o.payload = t, n != null && (o.callback = n), (t = Ft(e, o, a)) !== null && (Ke(t, e, a, r), pa(t, e, a))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe(),
            a = Ut(e),
            o = vt(r, a);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), (t = Ft(e, o, a)) !== null && (Ke(t, e, a, r), pa(t, e, a))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe(),
            r = Ut(e),
            a = vt(n, r);
        a.tag = 2, t != null && (a.callback = t), (t = Ft(e, a, r)) !== null && (Ke(t, e, r, n), pa(t, e, r))
    }
};

function Es(e, t, n, r, a, o, l) { return typeof(e = e.stateNode).shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : !t.prototype || !t.prototype.isPureReactComponent || !Sr(n, r) || !Sr(a, o) }

function gc(e, t, n) {
    var r = !1,
        a = qt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = qe(o) : (a = De(t) ? rn : he.current, o = (r = (r = t.contextTypes) != null) ? zn(e, a) : qt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ka, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Ps(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ka.enqueueReplaceState(t, t.state, null) }

function El(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = mc, fi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = qe(o) : (o = De(t) ? rn : he.current, a.context = zn(e, o)), a.state = e.memoizedState, typeof(o = t.getDerivedStateFromProps) == "function" && (Cl(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Ka.enqueueReplaceState(a, a.state, null), za(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308)
}

function Gn(e, t, n) {
    if ((e = n.ref) !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner) { if (n.tag !== 1) throw Error(P(309)); var r = n.stateNode }
            if (!r) throw Error(P(147, e));
            var a = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var i = a.refs;
                i === mc && (i = a.refs = {}), l === null ? delete i[o] : i[o] = l
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(P(284));
        if (!n._owner) throw Error(P(290, e))
    }
    return e
}

function Jr(e, t) { throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

function Ms(e) { return (0, e._init)(e._payload) }

function yc(e) {
    function t(g, f) {
        if (e) {
            var h = g.deletions;
            h === null ? (g.deletions = [f], g.flags |= 16) : h.push(f)
        }
    }

    function n(g, f) { if (!e) return null; for (; f !== null;) t(g, f), f = f.sibling; return null }

    function r(g, f) { for (g = new Map; f !== null;) f.key !== null ? g.set(f.key, f) : g.set(f.index, f), f = f.sibling; return g }

    function a(g, f) { return (g = _t(g, f)).index = 0, g.sibling = null, g }

    function o(g, f, h) { return g.index = h, e ? (h = g.alternate) !== null ? (h = h.index) < f ? (g.flags |= 2, f) : h : (g.flags |= 2, f) : (g.flags |= 1048576, f) }

    function l(g) { return e && g.alternate === null && (g.flags |= 2), g }

    function i(g, f, h, v) { return f === null || f.tag !== 6 ? ((f = Uo(h, g.mode, v)).return = g, f) : ((f = a(f, h)).return = g, f) }

    function s(g, f, h, v) { var k = h.type; return k === yn ? c(g, f, h.props.children, v, h.key) : f !== null && (f.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Et && Ms(k) === f.type) ? ((v = a(f, h.props)).ref = Gn(g, f, h), v.return = g, v) : ((v = ba(h.type, h.key, h.props, null, g.mode, v)).ref = Gn(g, f, h), v.return = g, v) }

    function u(g, f, h, v) { return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? ((f = _o(h, g.mode, v)).return = g, f) : ((f = a(f, h.children || [])).return = g, f) }

    function c(g, f, h, v, k) { return f === null || f.tag !== 7 ? ((f = tn(h, g.mode, v, k)).return = g, f) : ((f = a(f, h)).return = g, f) }

    function d(g, f, h) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return (f = Uo("" + f, g.mode, h)).return = g, f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Br:
                    return (h = ba(f.type, f.key, f.props, null, g.mode, h)).ref = Gn(g, null, f), h.return = g, h;
                case gn:
                    return (f = _o(f, g.mode, h)).return = g, f;
                case Et:
                    return d(g, (0, f._init)(f._payload), h)
            }
            if (tr(f) || Vn(f)) return (f = tn(f, g.mode, h, null)).return = g, f;
            Jr(g, f)
        }
        return null
    }

    function p(g, f, h, v) {
        var k = f !== null ? f.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number") return k !== null ? null : i(g, f, "" + h, v);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Br:
                    return h.key === k ? s(g, f, h, v) : null;
                case gn:
                    return h.key === k ? u(g, f, h, v) : null;
                case Et:
                    return p(g, f, (k = h._init)(h._payload), v)
            }
            if (tr(h) || Vn(h)) return k !== null ? null : c(g, f, h, v, null);
            Jr(g, h)
        }
        return null
    }

    function m(g, f, h, v, k) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return i(f, g = g.get(h) || null, "" + v, k);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Br:
                    return s(f, g = g.get(v.key === null ? h : v.key) || null, v, k);
                case gn:
                    return u(f, g = g.get(v.key === null ? h : v.key) || null, v, k);
                case Et:
                    return m(g, f, h, (0, v._init)(v._payload), k)
            }
            if (tr(v) || Vn(v)) return c(f, g = g.get(h) || null, v, k, null);
            Jr(f, v)
        }
        return null
    }

    function y(g, f, h, v) {
        for (var k = null, M = null, S = f, x = f = 0, E = null; S !== null && x < h.length; x++) {
            S.index > x ? (E = S, S = null) : E = S.sibling;
            var I = p(g, S, h[x], v);
            if (I === null) { S === null && (S = E); break }
            e && S && I.alternate === null && t(g, S), f = o(I, f, x), M === null ? k = I : M.sibling = I, M = I, S = E
        }
        if (x === h.length) return n(g, S), q && Gt(g, x), k;
        if (S === null) { for (; x < h.length; x++)(S = d(g, h[x], v)) !== null && (f = o(S, f, x), M === null ? k = S : M.sibling = S, M = S); return q && Gt(g, x), k }
        for (S = r(g, S); x < h.length; x++)(E = m(S, g, x, h[x], v)) !== null && (e && E.alternate !== null && S.delete(E.key === null ? x : E.key), f = o(E, f, x), M === null ? k = E : M.sibling = E, M = E);
        return e && S.forEach(function(z) { return t(g, z) }), q && Gt(g, x), k
    }

    function b(g, f, h, v) {
        var k = Vn(h);
        if (typeof k != "function") throw Error(P(150));
        if ((h = k.call(h)) == null) throw Error(P(151));
        for (var M = k = null, S = f, x = f = 0, E = null, I = h.next(); S !== null && !I.done; x++, I = h.next()) {
            S.index > x ? (E = S, S = null) : E = S.sibling;
            var z = p(g, S, I.value, v);
            if (z === null) { S === null && (S = E); break }
            e && S && z.alternate === null && t(g, S), f = o(z, f, x), M === null ? k = z : M.sibling = z, M = z, S = E
        }
        if (I.done) return n(g, S), q && Gt(g, x), k;
        if (S === null) { for (; !I.done; x++, I = h.next())(I = d(g, I.value, v)) !== null && (f = o(I, f, x), M === null ? k = I : M.sibling = I, M = I); return q && Gt(g, x), k }
        for (S = r(g, S); !I.done; x++, I = h.next())(I = m(S, g, x, I.value, v)) !== null && (e && I.alternate !== null && S.delete(I.key === null ? x : I.key), f = o(I, f, x), M === null ? k = I : M.sibling = I, M = I);
        return e && S.forEach(function(W) { return t(g, W) }), q && Gt(g, x), k
    }
    return function g(f, h, v, k) {
        if (typeof v == "object" && v !== null && v.type === yn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Br:
                    e: {
                        for (var M = v.key, S = h; S !== null;) {
                            if (S.key === M) {
                                if ((M = v.type) === yn) { if (S.tag === 7) { n(f, S.sibling), (h = a(S, v.props.children)).return = f, f = h; break e } } else if (S.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Et && Ms(M) === S.type) { n(f, S.sibling), (h = a(S, v.props)).ref = Gn(f, S, v), h.return = f, f = h; break e }
                                n(f, S);
                                break
                            }
                            t(f, S), S = S.sibling
                        }
                        v.type === yn ? ((h = tn(v.props.children, f.mode, k, v.key)).return = f, f = h) : ((k = ba(v.type, v.key, v.props, null, f.mode, k)).ref = Gn(f, h, v), k.return = f, f = k)
                    }
                    return l(f);
                case gn:
                    e: {
                        for (S = v.key; h !== null;) {
                            if (h.key === S) {
                                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) { n(f, h.sibling), (h = a(h, v.children || [])).return = f, f = h; break e }
                                n(f, h);
                                break
                            }
                            t(f, h), h = h.sibling
                        }(h = _o(v, f.mode, k)).return = f,
                        f = h
                    }
                    return l(f);
                case Et:
                    return g(f, h, (S = v._init)(v._payload), k)
            }
            if (tr(v)) return y(f, h, v, k);
            if (Vn(v)) return b(f, h, v, k);
            Jr(f, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(f, h.sibling), (h = a(h, v)).return = f, f = h) : (n(f, h), (h = Uo(v, f.mode, k)).return = f, f = h), l(f)) : n(f, h)
    }
}
var Dn = yc(!0),
    vc = yc(!1),
    Fr = {},
    lt = Ht(Fr),
    Mr = Ht(Fr),
    Ir = Ht(Fr);

function Xt(e) { if (e === Fr) throw Error(P(174)); return e }

function Pl(e, t) {
    switch (_(Ir, t), _(Mr, e), _(lt, Fr), e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : rl(null, "");
            break;
        default:
            t = rl(t = (e = e === 8 ? t.parentNode : t).namespaceURI || null, e = e.tagName)
    }
    H(lt), _(lt, t)
}

function On() { H(lt), H(Mr), H(Ir) }

function Is(e) {
    Xt(Ir.current);
    var t = Xt(lt.current),
        n = rl(t, e.type);
    t !== n && (_(Mr, e), _(lt, n))
}

function pi(e) { Mr.current === e && (H(lt), H(Mr)) }
var J = Ht(0);

function Aa(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) { var n = t.memoizedState; if (n !== null && ((n = n.dehydrated) === null || n.data === "$?" || n.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if (128 & t.flags) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Lo = [];

function hi() {
    for (var e = 0; e < Lo.length; e++) Lo[e]._workInProgressVersionPrimary = null;
    Lo.length = 0
}
var ha = kt.ReactCurrentDispatcher,
    Ro = kt.ReactCurrentBatchConfig,
    on = 0,
    Q = null,
    oe = null,
    ae = null,
    Da = !1,
    ur = !1,
    Tr = 0,
    A1 = 0;

function fe() { throw Error(P(321)) }

function mi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n])) return !1;
    return !0
}

function gi(e, t, n, r, a, o) {
    if (on = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ha.current = e === null || e.memoizedState === null ? j1 : U1, e = n(r, a), ur) {
        o = 0;
        do {
            if (ur = !1, Tr = 0, 25 <= o) throw Error(P(301));
            o += 1, ae = oe = null, t.updateQueue = null, ha.current = _1, e = n(r, a)
        } while (ur)
    }
    if (ha.current = Oa, t = oe !== null && oe.next !== null, on = 0, ae = oe = Q = null, Da = !1, t) throw Error(P(300));
    return e
}

function yi() { var e = Tr !== 0; return Tr = 0, e }

function tt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return ae === null ? Q.memoizedState = ae = e : ae = ae.next = e, ae }

function He() {
    if (oe === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = oe.next;
    var t = ae === null ? Q.memoizedState : ae.next;
    if (t !== null) ae = t, oe = e;
    else {
        if (e === null) throw Error(P(310));
        e = { memoizedState: (oe = e).memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ae === null ? Q.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}

function Nr(e, t) { return typeof t == "function" ? t(e) : t }

function zo(e) {
    var t = He(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = oe,
        a = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (a !== null) {
            var l = a.next;
            a.next = o.next, o.next = l
        }
        r.baseQueue = a = o, n.pending = null
    }
    if (a !== null) {
        o = a.next, r = r.baseState;
        var i = l = null,
            s = null,
            u = o;
        do {
            var c = u.lane;
            if ((on & c) === c) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                s === null ? (i = s = d, l = r) : s = s.next = d, Q.lanes |= c, ln |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        s === null ? l = r : s.next = i, Ze(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
    }
    if ((e = n.interleaved) !== null) {
        a = e;
        do o = a.lane, Q.lanes |= o, ln |= o, a = a.next; while (a !== e)
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Ao(e) {
    var t = He(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
    if (a !== null) {
        n.pending = null;
        var l = a = a.next;
        do o = e(o, l.action), l = l.next; while (l !== a);
        Ze(o, t.memoizedState) || (Ie = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function bc() {}

function wc(e, t) {
    var n = Q,
        r = He(),
        a = t(),
        o = !Ze(r.memoizedState, a);
    if (o && (r.memoizedState = a, Ie = !0), r = r.queue, vi(Sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ae !== null && 1 & ae.memoizedState.tag) {
        if (n.flags |= 2048, Lr(9, xc.bind(null, n, r, a, t), void 0, null), le === null) throw Error(P(349));
        30 & on || kc(n, t, a)
    }
    return a
}

function kc(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, (t = Q.updateQueue) === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores) === null ? t.stores = [e] : n.push(e) }

function xc(e, t, n, r) { t.value = n, t.getSnapshot = r, Cc(t) && Ec(e) }

function Sc(e, t, n) { return n(function() { Cc(t) && Ec(e) }) }

function Cc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try { var n = t(); return !Ze(e, n) } catch { return !0 }
}

function Ec(e) {
    var t = yt(e, 1);
    t !== null && Ke(t, e, 1, -1)
}

function Ts(e) { var t = tt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = F1.bind(null, Q, e), [t.memoizedState, e] }

function Lr(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, (t = Q.updateQueue) === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect) === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e }

function Pc() { return He().memoizedState }

function ma(e, t, n, r) {
    var a = tt();
    Q.flags |= e, a.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Za(e, t, n, r) {
    var a = He();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (oe !== null) { var l = oe.memoizedState; if (o = l.destroy, r !== null && mi(r, l.deps)) return void(a.memoizedState = Lr(t, n, o, r)) }
    Q.flags |= e, a.memoizedState = Lr(1 | t, n, o, r)
}

function Ns(e, t) { return ma(8390656, 8, e, t) }

function vi(e, t) { return Za(2048, 8, e, t) }

function Mc(e, t) { return Za(4, 2, e, t) }

function Ic(e, t) { return Za(4, 4, e, t) }

function Tc(e, t) { return typeof t == "function" ? (e = e(), t(e), function() { t(null) }) : t != null ? (e = e(), t.current = e, function() { t.current = null }) : void 0 }

function Nc(e, t, n) { return n = n != null ? n.concat([e]) : null, Za(4, 4, Tc.bind(null, t, e), n) }

function bi() {}

function Lc(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Rc(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function zc(e, t, n) { return 21 & on ? (Ze(n, t) || (n = qu(), Q.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n) }

function D1(e, t) {
    var n = U;
    U = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ro.transition;
    Ro.transition = {};
    try { e(!1), t() } finally { U = n, Ro.transition = r }
}

function Ac() { return He().memoizedState }

function O1(e, t, n) {
    var r = Ut(e);
    n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Dc(e) ? Oc(t, n) : (n = pc(e, t, n, r)) !== null && (Ke(n, e, r, xe()), Fc(n, t, r))
}

function F1(e, t, n) {
    var r = Ut(e),
        a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Dc(e)) Oc(t, a);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer) !== null) try {
            var l = t.lastRenderedState,
                i = o(l, n);
            if (a.hasEagerState = !0, a.eagerState = i, Ze(i, l)) { var s = t.interleaved; return s === null ? (a.next = a, di(t)) : (a.next = s.next, s.next = a), void(t.interleaved = a) }
        } catch {}(n = pc(e, t, a, r)) !== null && (Ke(n, e, r, a = xe()), Fc(n, t, r))
    }
}

function Dc(e) { var t = e.alternate; return e === Q || t !== null && t === Q }

function Oc(e, t) {
    ur = Da = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Fc(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, Xl(e, n)
    }
}
var Oa = { readContext: qe, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 },
    j1 = {
        readContext: qe,
        useCallback: function(e, t) { return tt().memoizedState = [e, t === void 0 ? null : t], e },
        useContext: qe,
        useEffect: Ns,
        useImperativeHandle: function(e, t, n) { return n = n != null ? n.concat([e]) : null, ma(4194308, 4, Tc.bind(null, t, e), n) },
        useLayoutEffect: function(e, t) { return ma(4194308, 4, e, t) },
        useInsertionEffect: function(e, t) { return ma(4, 2, e, t) },
        useMemo: function(e, t) { var n = tt(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e },
        useReducer: function(e, t, n) { var r = tt(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = O1.bind(null, Q, e), [r.memoizedState, e] },
        useRef: function(e) { return e = { current: e }, tt().memoizedState = e },
        useState: Ts,
        useDebugValue: bi,
        useDeferredValue: function(e) { return tt().memoizedState = e },
        useTransition: function() {
            var e = Ts(!1),
                t = e[0];
            return e = D1.bind(null, e[1]), tt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Q,
                a = tt();
            if (q) {
                if (n === void 0) throw Error(P(407));
                n = n()
            } else {
                if (n = t(), le === null) throw Error(P(349));
                30 & on || kc(r, t, n)
            }
            a.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return a.queue = o, Ns(Sc.bind(null, r, o, e), [e]), r.flags |= 2048, Lr(9, xc.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = tt(),
                t = le.identifierPrefix;
            if (q) {
                var n = ht;
                t = ":" + t + "R" + (n = (at & ~(1 << 32 - Je(at) - 1)).toString(32) + n), 0 < (n = Tr++) && (t += "H" + n.toString(32)), t += ":"
            } else t = ":" + t + "r" + (n = A1++).toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    U1 = { readContext: qe, useCallback: Lc, useContext: qe, useEffect: vi, useImperativeHandle: Nc, useInsertionEffect: Mc, useLayoutEffect: Ic, useMemo: Rc, useReducer: zo, useRef: Pc, useState: function() { return zo(Nr) }, useDebugValue: bi, useDeferredValue: function(e) { return zc(He(), oe.memoizedState, e) }, useTransition: function() { return [zo(Nr)[0], He().memoizedState] }, useMutableSource: bc, useSyncExternalStore: wc, useId: Ac, unstable_isNewReconciler: !1 },
    _1 = { readContext: qe, useCallback: Lc, useContext: qe, useEffect: vi, useImperativeHandle: Nc, useInsertionEffect: Mc, useLayoutEffect: Ic, useMemo: Rc, useReducer: Ao, useRef: Pc, useState: function() { return Ao(Nr) }, useDebugValue: bi, useDeferredValue: function(e) { var t = He(); return oe === null ? t.memoizedState = e : zc(t, oe.memoizedState, e) }, useTransition: function() { return [Ao(Nr)[0], He().memoizedState] }, useMutableSource: bc, useSyncExternalStore: wc, useId: Ac, unstable_isNewReconciler: !1 };

function Fn(e, t) {
    try {
        var n = "",
            r = t;
        do n += D0(r), r = r.return; while (r);
        var a = n
    } catch (o) { a = `
Error generating stack: ` + o.message + `
` + o.stack }
    return { value: e, source: t, stack: a, digest: null }
}

function Do(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null } }
var B1 = typeof WeakMap == "function" ? WeakMap : Map;

function jc(e, t, n) {
    (n = vt(-1, n)).tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() { ja || (ja = !0, Al = r) }, n
}

function Uc(e, t, n) {
    (n = vt(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var a = t.value;
        n.payload = function() { return r(a) }, n.callback = function() {}
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        typeof r != "function" && (jt === null ? jt = new Set([this]) : jt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" })
    }), n
}

function Ls(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new B1;
        var a = new Set;
        r.set(t, a)
    } else(a = r.get(t)) === void 0 && (a = new Set, r.set(t, a));
    a.has(n) || (a.add(n), e = K1.bind(null, e, t, n), t.then(e, e))
}

function Rs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = (t = e.memoizedState) === null || t.dehydrated !== null), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function zs(e, t, n, r, a) { return 1 & e.mode ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : ((t = vt(-1, 1)).tag = 2, Ft(n, t, 1))), n.lanes |= 1), e) }
var V1 = kt.ReactCurrentOwner,
    Ie = !1;

function Me(e, t, n, r) { t.child = e === null ? vc(t, null, n, r) : Dn(t, e.child, n, r) }

function As(e, t, n, r, a) { n = n.render; var o = t.ref; return Ln(t, a), r = gi(e, t, n, r, o, a), n = yi(), e === null || Ie ? (q && n && oi(t), t.flags |= 1, Me(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, mt(e, t, a)) }

function Ds(e, t, n, r, a) { if (e === null) { var o = n.type; return typeof o != "function" || Pi(o) || o.defaultProps !== void 0 || n.compare !== null || n.defaultProps !== void 0 ? ((e = ba(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, _c(e, t, o, r, a)) } if (o = e.child, (e.lanes & a) == 0) { var l = o.memoizedProps; if ((n = (n = n.compare) !== null ? n : Sr)(l, r) && e.ref === t.ref) return mt(e, t, a) } return t.flags |= 1, (e = _t(o, r)).ref = t.ref, e.return = t, t.child = e }

function _c(e, t, n, r, a) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Sr(o, r) && e.ref === t.ref) {
            if (Ie = !1, t.pendingProps = r = o, (e.lanes & a) == 0) return t.lanes = e.lanes, mt(e, t, a);
            131072 & e.flags && (Ie = !0)
        }
    }
    return Ml(e, t, n, r, a)
}

function Os(e, t, n) {
    var r = t.pendingProps,
        a = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(1 & t.mode)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _(Pn, Re), Re |= n;
        else {
            if (!(1073741824 & n)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _(Pn, Re), Re |= e, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, _(Pn, Re), Re |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, _(Pn, Re), Re |= r;
    return Me(e, t, a, n), t.child
}

function Bc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ml(e, t, n, r, a) { var o = De(n) ? rn : he.current; return o = zn(t, o), Ln(t, a), n = gi(e, t, n, r, o, a), r = yi(), e === null || Ie ? (q && r && oi(t), t.flags |= 1, Me(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, mt(e, t, a)) }

function Fs(e, t, n, r, a) {
    if (De(n)) {
        var o = !0;
        fa(t)
    } else o = !1;
    if (Ln(t, a), t.stateNode === null) ga(e, t), gc(t, n, r), El(t, n, r, a), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            i = t.memoizedProps;
        l.props = i;
        var s = l.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = qe(u) : u = zn(t, u = De(n) ? rn : he.current);
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (i !== r || s !== u) && Ps(t, l, r, u), Pt = !1;
        var p = t.memoizedState;
        l.state = p, za(t, r, l, a), s = t.memoizedState, i !== r || p !== s || Te.current || Pt ? (typeof c == "function" && (Cl(t, n, c, r), s = t.memoizedState), (i = Pt || Es(t, n, i, r, p, s, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = i) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, hc(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : We(t.type, i), l.props = u, d = t.pendingProps, p = l.context, typeof(s = n.contextType) == "object" && s !== null ? s = qe(s) : s = zn(t, s = De(n) ? rn : he.current);
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (i !== d || p !== s) && Ps(t, l, r, s), Pt = !1, p = t.memoizedState, l.state = p, za(t, r, l, a);
        var y = t.memoizedState;
        i !== d || p !== y || Te.current || Pt ? (typeof m == "function" && (Cl(t, n, m, r), y = t.memoizedState), (u = Pt || Es(t, n, u, r, p, y, s) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Il(e, t, n, r, o, a)
}

function Il(e, t, n, r, a, o) {
    Bc(e, t);
    var l = (128 & t.flags) != 0;
    if (!r && !l) return a && bs(t, n, !1), mt(e, t, o);
    r = t.stateNode, V1.current = t;
    var i = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = Dn(t, e.child, null, o), t.child = Dn(t, null, i, o)) : Me(e, t, i, o), t.memoizedState = r.state, a && bs(t, n, !0), t.child
}

function js(e) {
    var t = e.stateNode;
    t.pendingContext ? vs(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vs(0, t.context, !1), Pl(e, t.containerInfo)
}

function Us(e, t, n, r, a) { return An(), ii(a), t.flags |= 256, Me(e, t, n, r), t.child }
var Vc, Tl, qc, Hc, Oo = { dehydrated: null, treeContext: null, retryLane: 0 };

function Fo(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function _s(e, t, n) {
    var r, a = t.pendingProps,
        o = J.current,
        l = !1,
        i = (128 & t.flags) != 0;
    if ((r = i) || (r = (e === null || e.memoizedState !== null) && (2 & o) != 0), r ? (l = !0, t.flags &= -129) : e !== null && e.memoizedState === null || (o |= 1), _(J, 1 & o), e === null) return xl(t), (e = t.memoizedState) !== null && (e = e.dehydrated) !== null ? (1 & t.mode ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(1 & a) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Ba(i, a, 0, null), e = tn(e, a, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Fo(n), t.memoizedState = Oo, e) : Nl(t, i));
    if ((o = e.memoizedState) !== null && (r = o.dehydrated) !== null) return function(u, c, d, p, m, y, b) {
        if (d) return 256 & c.flags ? (c.flags &= -257, Kr(u, c, b, p = Do(Error(P(422))))) : c.memoizedState !== null ? (c.child = u.child, c.flags |= 128, null) : (y = p.fallback, m = c.mode, p = Ba({ mode: "visible", children: p.children }, m, 0, null), (y = tn(y, m, b, null)).flags |= 2, p.return = c, y.return = c, p.sibling = y, c.child = p, 1 & c.mode && Dn(c, u.child, null, b), c.child.memoizedState = Fo(b), c.memoizedState = Oo, y);
        if (!(1 & c.mode)) return Kr(u, c, b, null);
        if (m.data === "$!") { if (p = m.nextSibling && m.nextSibling.dataset) var g = p.dgst; return p = g, Kr(u, c, b, p = Do(y = Error(P(419)), p, void 0)) }
        if (g = (b & u.childLanes) != 0, Ie || g) {
            if ((p = le) !== null) {
                switch (b & -b) {
                    case 4:
                        m = 2;
                        break;
                    case 16:
                        m = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        m = 32;
                        break;
                    case 536870912:
                        m = 268435456;
                        break;
                    default:
                        m = 0
                }(m = m & (p.suspendedLanes | b) ? 0 : m) !== 0 && m !== y.retryLane && (y.retryLane = m, yt(u, m), Ke(p, u, m, -1))
            }
            return Ei(), Kr(u, c, b, p = Do(Error(P(421))))
        }
        return m.data === "$?" ? (c.flags |= 128, c.child = u.child, c = Z1.bind(null, u), m._reactRetry = c, null) : (u = y.treeContext, Ae = Ot(m.nextSibling), Oe = c, q = !0, Qe = null, u !== null && (Ue[_e++] = at, Ue[_e++] = ht, Ue[_e++] = an, at = u.id, ht = u.overflow, an = c), c = Nl(c, p.children), c.flags |= 4096, c)
    }(e, t, i, a, r, o, n);
    if (l) { l = a.fallback, i = t.mode, r = (o = e.child).sibling; var s = { mode: "hidden", children: a.children }; return !(1 & i) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = _t(o, s)).subtreeFlags = 14680064 & o.subtreeFlags, r !== null ? l = _t(r, l) : (l = tn(l, i, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, i = (i = e.child.memoizedState) === null ? Fo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Oo, a }
    return e = (l = e.child).sibling, a = _t(l, { mode: "visible", children: a.children }), !(1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, e !== null && ((n = t.deletions) === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
}

function Nl(e, t) { return (t = Ba({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t }

function Kr(e, t, n, r) { return r !== null && ii(r), Dn(t, e.child, null, n), (e = Nl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e }

function Bs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Sl(e.return, t, n)
}

function jo(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
}

function Vs(e, t, n) {
    var r = t.pendingProps,
        a = r.revealOrder,
        o = r.tail;
    if (Me(e, t, r.children, n), (2 & (r = J.current)) != 0) r = 1 & r | 2, t.flags |= 128;
    else {
        if (e !== null && 128 & e.flags) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Bs(e, n, t);
            else if (e.tag === 19) Bs(e, n, t);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (_(J, r), (1 & t.mode) == 0) t.memoizedState = null;
    else switch (a) {
        case "forwards":
            for (n = t.child, a = null; n !== null;)(e = n.alternate) !== null && Aa(e) === null && (a = n), n = n.sibling;
            (n = a) === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), jo(t, !1, a, n, o);
            break;
        case "backwards":
            for (n = null, a = t.child, t.child = null; a !== null;) {
                if ((e = a.alternate) !== null && Aa(e) === null) { t.child = a; break }
                e = a.sibling, a.sibling = n, n = a, a = e
            }
            jo(t, !0, n, null, o);
            break;
        case "together":
            jo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ga(e, t) {!(1 & t.mode) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2) }

function mt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, (n & t.childLanes) == 0) return null;
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
        for (n = _t(e = t.child, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, (n = n.sibling = _t(e, e.pendingProps)).return = t;
        n.sibling = null
    }
    return t.child
}

function Yn(e, t) {
    if (!q) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var a = e.child; a !== null;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
    else
        for (a = e.child; a !== null;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function q1(e, t, n) {
    var r = t.pendingProps;
    switch (li(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ye(t), null;
        case 1:
        case 17:
            return De(t.type) && ai(), ye(t), null;
        case 3:
            return r = t.stateNode, On(), H(Te), H(he), hi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), e !== null && e.child !== null || (Yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, Qe !== null && (Fl(Qe), Qe = null))), Tl(e, t), ye(t), null;
        case 5:
            pi(t);
            var a = Xt(Ir.current);
            if (n = t.type, e !== null && t.stateNode != null) qc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) { if (t.stateNode === null) throw Error(P(166)); return ye(t), null }
                if (e = Xt(lt.current), Yr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[rt] = t, r[Pr] = o, e = (1 & t.mode) != 0, n) {
                        case "dialog":
                            B("cancel", r), B("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            B("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < rr.length; a++) B(rr[a], r);
                            break;
                        case "source":
                            B("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            B("error", r), B("load", r);
                            break;
                        case "details":
                            B("toggle", r);
                            break;
                        case "input":
                            _i(r, o), B("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
                            break;
                        case "textarea":
                            Vi(r, o), B("invalid", r)
                    }
                    for (var l in al(n, o), a = null, o)
                        if (o.hasOwnProperty(l)) {
                            var i = o[l];
                            l === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && Gr(r.textContent, i, e), a = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && Gr(r.textContent, i, e), a = ["children", "" + i]) : gr.hasOwnProperty(l) && i != null && l === "onScroll" && B("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Vr(r), Bi(r, o, !0);
                            break;
                        case "textarea":
                            Vr(r), qi(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Ia)
                    }
                    r = a, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[rt] = t, e[Pr] = r, Vc(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = ol(n, r), n) {
                            case "dialog":
                                B("cancel", e), B("close", e), a = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                B("load", e), a = r;
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < rr.length; a++) B(rr[a], e);
                                a = r;
                                break;
                            case "source":
                                B("error", e), a = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                B("error", e), B("load", e), a = r;
                                break;
                            case "details":
                                B("toggle", e), a = r;
                                break;
                            case "input":
                                _i(e, r), a = $o(e, r), B("invalid", e);
                                break;
                            case "option":
                            default:
                                a = r;
                                break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, a = G({}, r, { value: void 0 }), B("invalid", e);
                                break;
                            case "textarea":
                                Vi(e, r), a = nl(e, r), B("invalid", e)
                        }
                        for (o in al(n, a), i = a)
                            if (i.hasOwnProperty(o)) {
                                var s = i[o];
                                o === "style" ? Lu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0) != null && Tu(e, s) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && yr(e, s) : typeof s == "number" && yr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (gr.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && Wl(e, o, s, l))
                            }
                        switch (n) {
                            case "input":
                                Vr(e), Bi(e, r, !1);
                                break;
                            case "textarea":
                                Vr(e), qi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, (o = r.value) != null ? Mn(e, !!r.multiple, o, !1) : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof a.onClick == "function" && (e.onclick = Ia)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ye(t), null;
        case 6:
            if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
                if (n = Xt(Ir.current), Xt(lt.current), Yr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Oe) !== null) switch (e.tag) {
                        case 3:
                            Gr(r.nodeValue, n, (1 & e.mode) != 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Gr(r.nodeValue, n, (1 & e.mode) != 0)
                    }
                    o && (t.flags |= 4)
                } else(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r))[rt] = t, t.stateNode = r
            }
            return ye(t), null;
        case 13:
            if (H(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (q && Ae !== null && 1 & t.mode && !(128 & t.flags)) fc(), An(), t.flags |= 98560, o = !1;
                else if (o = Yr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(P(318));
                        if (!(o = (o = t.memoizedState) !== null ? o.dehydrated : null)) throw Error(P(317));
                        o[rt] = t
                    } else An(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    ye(t), o = !1
                } else Qe !== null && (Fl(Qe), Qe = null), o = !0;
                if (!o) return 65536 & t.flags ? t : null
            }
            return 128 & t.flags ? (t.lanes = n, t) : ((r = r !== null) != (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, 1 & t.mode && (e === null || 1 & J.current ? re === 0 && (re = 3) : Ei())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
        case 4:
            return On(), Tl(e, t), e === null && Cr(t.stateNode.containerInfo), ye(t), null;
        case 10:
            return ci(t.type._context), ye(t), null;
        case 19:
            if (H(J), (o = t.memoizedState) === null) return ye(t), null;
            if (r = (128 & t.flags) != 0, (l = o.rendering) === null)
                if (r) Yn(o, !1);
                else {
                    if (re !== 0 || e !== null && 128 & e.flags)
                        for (e = t.child; e !== null;) {
                            if ((l = Aa(e)) !== null) { for (t.flags |= 128, Yn(o, !1), (r = l.updateQueue) !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) e = r, (o = n).flags &= 14680066, (l = o.alternate) === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return _(J, 1 & J.current | 2), t.child }
                            e = e.sibling
                        }
                    o.tail !== null && Z() > jn && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if ((e = Aa(l)) !== null) { if (t.flags |= 128, r = !0, (n = e.updateQueue) !== null && (t.updateQueue = n, t.flags |= 4), Yn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !q) return ye(t), null } else 2 * Z() - o.renderingStartTime > jn && n !== 1073741824 && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
                o.isBackwards ? (l.sibling = t.child, t.child = l) : ((n = o.last) !== null ? n.sibling = l : t.child = l, o.last = l)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = J.current, _(J, r ? 1 & n | 2 : 1 & n), t) : (ye(t), null);
        case 22:
        case 23:
            return Ci(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && 1 & t.mode ? 1073741824 & Re && (ye(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ye(t), null;
        case 24:
        case 25:
            return null
    }
    throw Error(P(156, t.tag))
}

function H1(e, t) {
    switch (li(t), t.tag) {
        case 1:
            return De(t.type) && ai(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return On(), H(Te), H(he), hi(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return pi(t), null;
        case 13:
            if (H(J), (e = t.memoizedState) !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(P(340));
                An()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return H(J), null;
        case 4:
            return On(), null;
        case 10:
            return ci(t.type._context), null;
        case 22:
        case 23:
            return Ci(), null;
        default:
            return null
    }
}
Vc = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child; continue }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
}, Tl = function() {}, qc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
        e = t.stateNode, Xt(lt.current);
        var o, l = null;
        switch (n) {
            case "input":
                a = $o(e, a), r = $o(e, r), l = [];
                break;
            case "select":
                a = G({}, a, { value: void 0 }), r = G({}, r, { value: void 0 }), l = [];
                break;
            case "textarea":
                a = nl(e, a), r = nl(e, r), l = [];
                break;
            default:
                typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ia)
        }
        for (u in al(n, r), n = null, a)
            if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null)
                if (u === "style") { var i = a[u]; for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (gr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (i = a != null ? a[u] : void 0, r.hasOwnProperty(u) && s !== i && (s != null || i != null))
                if (u === "style")
                    if (i) { for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = ""); for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]) } else n || (l || (l = []), l.push(u, n)), n = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (l = l || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (gr.hasOwnProperty(u) ? (s != null && u === "onScroll" && B("scroll", e), l || i === s || (l = [])) : (l = l || []).push(u, s))
        }
        n && (l = l || []).push("style", n);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}, Hc = function(e, t, n, r) { n !== r && (t.flags |= 4) };
var Zr = !1,
    pe = !1,
    W1 = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;

function En(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try { n(null) } catch (r) { Y(e, t, r) } else n.current = null
}

function Wc(e, t, n) { try { n() } catch (r) { Y(e, t, r) } }
var qs = !1;

function cr(e, t, n) {
    var r = t.updateQueue;
    if ((r = r !== null ? r.lastEffect : null) !== null) {
        var a = r = r.next;
        do {
            if ((a.tag & e) === e) {
                var o = a.destroy;
                a.destroy = void 0, o !== void 0 && Wc(t, n, o)
            }
            a = a.next
        } while (a !== r)
    }
}

function Xa(e, t) {
    if ((t = (t = t.updateQueue) !== null ? t.lastEffect : null) !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ll(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        e.tag, e = n, typeof t == "function" ? t(e) : t.current = e
    }
}

function Qc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode) !== null && (delete t[rt], delete t[Pr], delete t[bl], delete t[L1], delete t[R1]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Gc(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Hs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Gc(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (2 & e.flags || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function Rl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), (n = n._reactRootContainer) != null || t.onclick !== null || (t.onclick = Ia));
    else if (r !== 4 && (e = e.child) !== null)
        for (Rl(e, t, n), e = e.sibling; e !== null;) Rl(e, t, n), e = e.sibling
}

function zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child) !== null)
        for (zl(e, t, n), e = e.sibling; e !== null;) zl(e, t, n), e = e.sibling
}
var be = null,
    nt = !1;

function xt(e, t, n) { for (n = n.child; n !== null;) Yc(e, t, n), n = n.sibling }

function Yc(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function") try { ot.onCommitFiberUnmount(Ha, n) } catch {}
    switch (n.tag) {
        case 5:
            pe || En(n, t);
        case 6:
            var r = be,
                a = nt;
            be = null, xt(e, t, n), nt = a, (be = r) !== null && (nt ? (e = be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
            break;
        case 18:
            be !== null && (nt ? (e = be, n = n.stateNode, e.nodeType === 8 ? To(e.parentNode, n) : e.nodeType === 1 && To(e, n), kr(e)) : To(be, n.stateNode));
            break;
        case 4:
            r = be, a = nt, be = n.stateNode.containerInfo, nt = !0, xt(e, t, n), be = r, nt = a;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!pe && (r = n.updateQueue) !== null && (r = r.lastEffect) !== null) {
                a = r = r.next;
                do {
                    var o = a,
                        l = o.destroy;
                    o = o.tag, l !== void 0 && (2 & o || 4 & o) && Wc(n, t, l), a = a.next
                } while (a !== r)
            }
            xt(e, t, n);
            break;
        case 1:
            if (!pe && (En(n, t), typeof(r = n.stateNode).componentWillUnmount == "function")) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (i) { Y(n, t, i) }
            xt(e, t, n);
            break;
        case 21:
            xt(e, t, n);
            break;
        case 22:
            1 & n.mode ? (pe = (r = pe) || n.memoizedState !== null, xt(e, t, n), pe = r) : xt(e, t, n);
            break;
        default:
            xt(e, t, n)
    }
}

function Ws(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new W1), t.forEach(function(r) {
            var a = X1.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(a, a))
        })
    }
}

function et(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var o = e,
                    l = t,
                    i = l;
                e: for (; i !== null;) {
                    switch (i.tag) {
                        case 5:
                            be = i.stateNode, nt = !1;
                            break e;
                        case 3:
                        case 4:
                            be = i.stateNode.containerInfo, nt = !0;
                            break e
                    }
                    i = i.return
                }
                if (be === null) throw Error(P(160));
                Yc(o, l, a), be = null, nt = !1;
                var s = a.alternate;
                s !== null && (s.return = null), a.return = null
            } catch (u) { Y(a, t, u) }
        }
    if (12854 & t.subtreeFlags)
        for (t = t.child; t !== null;) Jc(t, e), t = t.sibling
}

function Jc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (et(t, e), ut(e), 4 & r) { try { cr(3, e, e.return), Xa(3, e) } catch (b) { Y(e, e.return, b) } try { cr(5, e, e.return) } catch (b) { Y(e, e.return, b) } }
            break;
        case 1:
            et(t, e), ut(e), 512 & r && n !== null && En(n, n.return);
            break;
        case 5:
            if (et(t, e), ut(e), 512 & r && n !== null && En(n, n.return), 32 & e.flags) { var a = e.stateNode; try { yr(a, "") } catch (b) { Y(e, e.return, b) } }
            if (4 & r && (a = e.stateNode) != null) {
                var o = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    i = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    i === "input" && o.type === "radio" && o.name != null && Pu(a, o), ol(i, l);
                    var u = ol(i, o);
                    for (l = 0; l < s.length; l += 2) {
                        var c = s[l],
                            d = s[l + 1];
                        c === "style" ? Lu(a, d) : c === "dangerouslySetInnerHTML" ? Tu(a, d) : c === "children" ? yr(a, d) : Wl(a, c, d, u)
                    }
                    switch (i) {
                        case "input":
                            el(a, o);
                            break;
                        case "textarea":
                            Mu(a, o);
                            break;
                        case "select":
                            var p = a._wrapperState.wasMultiple;
                            a._wrapperState.wasMultiple = !!o.multiple;
                            var m = o.value;
                            m != null ? Mn(a, !!o.multiple, m, !1) : p !== !!o.multiple && (o.defaultValue != null ? Mn(a, !!o.multiple, o.defaultValue, !0) : Mn(a, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    a[Pr] = o
                } catch (b) { Y(e, e.return, b) }
            }
            break;
        case 6:
            if (et(t, e), ut(e), 4 & r) {
                if (e.stateNode === null) throw Error(P(162));
                a = e.stateNode, o = e.memoizedProps;
                try { a.nodeValue = o } catch (b) { Y(e, e.return, b) }
            }
            break;
        case 3:
            if (et(t, e), ut(e), 4 & r && n !== null && n.memoizedState.isDehydrated) try { kr(t.containerInfo) } catch (b) { Y(e, e.return, b) }
            break;
        case 4:
        default:
            et(t, e), ut(e);
            break;
        case 13:
            et(t, e), ut(e), 8192 & (a = e.child).flags && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (xi = Z())), 4 & r && Ws(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, 1 & e.mode ? (pe = (u = pe) || c, et(t, e), pe = u) : et(t, e), ut(e), 8192 & r) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (1 & e.mode) != 0)
                    for (L = e, c = e.child; c !== null;) {
                        for (d = L = c; L !== null;) {
                            switch (m = (p = L).child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    cr(4, p, p.return);
                                    break;
                                case 1:
                                    En(p, p.return);
                                    var y = p.stateNode;
                                    if (typeof y.componentWillUnmount == "function") { r = p, n = p.return; try { t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount() } catch (b) { Y(r, n, b) } }
                                    break;
                                case 5:
                                    En(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) { Gs(d); continue }
                            }
                            m !== null ? (m.return = p, L = m) : Gs(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) { if (c === null) { c = d; try { a = d.stateNode, u ? typeof(o = a.style).setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none" : (i = d.stateNode, l = (s = d.memoizedProps.style) != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Nu("display", l)) } catch (b) { Y(e, e.return, b) } } } else if (d.tag === 6) { if (c === null) try { d.stateNode.nodeValue = u ? "" : d.memoizedProps } catch (b) { Y(e, e.return, b) } } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) { d.child.return = d, d = d.child; continue }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            et(t, e), ut(e), 4 & r && Ws(e);
        case 21:
    }
}

function ut(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Gc(n)) { var r = n; break e }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
                case 5:
                    var a = r.stateNode;
                    32 & r.flags && (yr(a, ""), r.flags &= -33), zl(e, Hs(e), a);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo;
                    Rl(e, Hs(e), o);
                    break;
                default:
                    throw Error(P(161))
            }
        }
        catch (l) { Y(e, e.return, l) }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function Q1(e, t, n) { L = e, Kc(e) }

function Kc(e, t, n) {
    for (var r = (1 & e.mode) != 0; L !== null;) {
        var a = L,
            o = a.child;
        if (a.tag === 22 && r) {
            var l = a.memoizedState !== null || Zr;
            if (!l) {
                var i = a.alternate,
                    s = i !== null && i.memoizedState !== null || pe;
                i = Zr;
                var u = pe;
                if (Zr = l, (pe = s) && !u)
                    for (L = a; L !== null;) s = (l = L).child, l.tag === 22 && l.memoizedState !== null ? Ys(a) : s !== null ? (s.return = l, L = s) : Ys(a);
                for (; o !== null;) L = o, Kc(o), o = o.sibling;
                L = a, Zr = i, pe = u
            }
            Qs(e)
        } else 8772 & a.subtreeFlags && o !== null ? (o.return = a, L = o) : Qs(e)
    }
}

function Qs(e) {
    for (; L !== null;) {
        var t = L;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Xa(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !pe)
                            if (n === null) r.componentDidMount();
                            else {
                                var a = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Cs(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                case 1:
                                    n = t.child.stateNode
                            }
                            Cs(t, l, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && 4 & t.flags) {
                            n = i;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && kr(d)
                                }
                            }
                        }
                        break;
                    default:
                        throw Error(P(163))
                }
                pe || 512 & t.flags && Ll(t)
            } catch (p) { Y(t, t.return, p) }
        }
        if (t === e) { L = null; break }
        if ((n = t.sibling) !== null) { n.return = t.return, L = n; break }
        L = t.return
    }
}

function Gs(e) {
    for (; L !== null;) {
        var t = L;
        if (t === e) { L = null; break }
        var n = t.sibling;
        if (n !== null) { n.return = t.return, L = n; break }
        L = t.return
    }
}

function Ys(e) {
    for (; L !== null;) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try { Xa(4, t) } catch (s) { Y(t, n, s) }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") { var a = t.return; try { r.componentDidMount() } catch (s) { Y(t, a, s) } }
                    var o = t.return;
                    try { Ll(t) } catch (s) { Y(t, o, s) }
                    break;
                case 5:
                    var l = t.return;
                    try { Ll(t) } catch (s) { Y(t, l, s) }
            }
        } catch (s) { Y(t, t.return, s) }
        if (t === e) { L = null; break }
        var i = t.sibling;
        if (i !== null) { i.return = t.return, L = i; break }
        L = t.return
    }
}
var Zc, G1 = Math.ceil,
    Fa = kt.ReactCurrentDispatcher,
    wi = kt.ReactCurrentOwner,
    Be = kt.ReactCurrentBatchConfig,
    j = 0,
    le = null,
    $ = null,
    ce = 0,
    Re = 0,
    Pn = Ht(0),
    re = 0,
    Rr = null,
    ln = 0,
    $a = 0,
    ki = 0,
    dr = null,
    ze = null,
    xi = 0,
    jn = 1 / 0,
    Mt = null,
    ja = !1,
    Al = null,
    jt = null,
    Xr = !1,
    Nt = null,
    Ua = 0,
    fr = 0,
    Dl = null,
    ya = -1,
    va = 0;

function xe() { return 6 & j ? Z() : ya !== -1 ? ya : ya = Z() }

function Ut(e) { return 1 & e.mode ? 2 & j && ce !== 0 ? ce & -ce : z1.transition !== null ? (va === 0 && (va = qu()), va) : (e = U) !== 0 ? e : e = (e = window.event) === void 0 ? 16 : Ju(e.type) : 1 }

function Ke(e, t, n, r) {
    if (50 < fr) throw fr = 0, Dl = null, Error(P(185));
    Ar(e, n, r), 2 & j && e === le || (e === le && (!(2 & j) && ($a |= n), re === 4 && Tt(e, ce)), Ne(e, r), n === 1 && j === 0 && !(1 & t.mode) && (jn = Z() + 500, Ja && Wt()))
}

function Ne(e, t) {
    var n = e.callbackNode;
    (function(a, o) {
        for (var l = a.suspendedLanes, i = a.pingedLanes, s = a.expirationTimes, u = a.pendingLanes; 0 < u;) {
            var c = 31 - Je(u),
                d = 1 << c,
                p = s[c];
            p === -1 ? d & l && !(d & i) || (s[c] = Y0(d, o)) : p <= o && (a.expiredLanes |= d), u &= ~d
        }
    })(e, t);
    var r = Ea(e, e === le ? ce : 0);
    if (r === 0) n !== null && Qi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Qi(n), t === 1) e.tag === 0 ? function(a) { Ja = !0, ws(a) }(Js.bind(null, e)) : ws(Js.bind(null, e)), T1(function() {!(6 & j) && Wt() }), n = null;
        else {
            switch (Hu(r)) {
                case 1:
                    n = Kl;
                    break;
                case 4:
                    n = Bu;
                    break;
                case 16:
                default:
                    n = Zl;
                    break;
                case 536870912:
                    n = Vu
            }
            n = a0(n, Xc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Xc(e, t) {
    if (ya = -1, va = 0, (6 & j) != 0) throw Error(P(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Ea(e, e === le ? ce : 0);
    if (r === 0) return null;
    if (30 & r || r & e.expiredLanes || t) t = _a(e, r);
    else {
        t = r;
        var a = j;
        j |= 2;
        var o = e0();
        for (le === e && ce === t || (Mt = null, jn = Z() + 500, en(e, t));;) try { J1(); break } catch (i) { $c(e, i) }
        ui(), Fa.current = o, j = a, $ !== null ? t = 0 : (le = null, ce = 0, t = re)
    }
    if (t !== 0) {
        if (t === 2 && (a = cl(e)) !== 0 && (r = a, t = Ol(e, a)), t === 1) throw n = Rr, en(e, 0), Tt(e, r), Ne(e, Z()), n;
        if (t === 6) Tt(e, r);
        else {
            if (a = e.current.alternate, (30 & r) == 0 && ! function(i) {
                    for (var s = i;;) {
                        if (16384 & s.flags) {
                            var u = s.updateQueue;
                            if (u !== null && (u = u.stores) !== null)
                                for (var c = 0; c < u.length; c++) {
                                    var d = u[c],
                                        p = d.getSnapshot;
                                    d = d.value;
                                    try { if (!Ze(p(), d)) return !1 } catch { return !1 }
                                }
                        }
                        if (u = s.child, 16384 & s.subtreeFlags && u !== null) u.return = s, s = u;
                        else {
                            if (s === i) break;
                            for (; s.sibling === null;) {
                                if (s.return === null || s.return === i) return !0;
                                s = s.return
                            }
                            s.sibling.return = s.return, s = s.sibling
                        }
                    }
                    return !0
                }(a) && ((t = _a(e, r)) === 2 && (o = cl(e)) !== 0 && (r = o, t = Ol(e, o)), t === 1)) throw n = Rr, en(e, 0), Tt(e, r), Ne(e, Z()), n;
            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                case 5:
                    pn(e, ze, Mt);
                    break;
                case 3:
                    if (Tt(e, r), (130023424 & r) === r && 10 < (t = xi + 500 - Z())) {
                        if (Ea(e, 0) !== 0) break;
                        if (((a = e.suspendedLanes) & r) !== r) { xe(), e.pingedLanes |= e.suspendedLanes & a; break }
                        e.timeoutHandle = vl(pn.bind(null, e, ze, Mt), t);
                        break
                    }
                    pn(e, ze, Mt);
                    break;
                case 4:
                    if (Tt(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, a = -1; 0 < r;) {
                        var l = 31 - Je(r);
                        o = 1 << l, (l = t[l]) > a && (a = l), r &= ~o
                    }
                    if (r = a, 10 < (r = (120 > (r = Z() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * G1(r / 1960)) - r)) { e.timeoutHandle = vl(pn.bind(null, e, ze, Mt), r); break }
                    pn(e, ze, Mt);
                    break;
                default:
                    throw Error(P(329))
            }
        }
    }
    return Ne(e, Z()), e.callbackNode === n ? Xc.bind(null, e) : null
}

function Ol(e, t) { var n = dr; return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), (e = _a(e, t)) !== 2 && (t = ze, ze = n, t !== null && Fl(t)), e }

function Fl(e) { ze === null ? ze = e : ze.push.apply(ze, e) }

function Tt(e, t) {
    for (t &= ~ki, t &= ~$a, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Je(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Js(e) {
    if (6 & j) throw Error(P(327));
    Rn();
    var t = Ea(e, 0);
    if (!(1 & t)) return Ne(e, Z()), null;
    var n = _a(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = cl(e);
        r !== 0 && (t = r, n = Ol(e, r))
    }
    if (n === 1) throw n = Rr, en(e, 0), Tt(e, t), Ne(e, Z()), n;
    if (n === 6) throw Error(P(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, ze, Mt), Ne(e, Z()), null
}

function Si(e, t) {
    var n = j;
    j |= 1;
    try { return e(t) } finally {
        (j = n) === 0 && (jn = Z() + 500, Ja && Wt())
    }
}

function $t(e) {
    Nt !== null && Nt.tag === 0 && !(6 & j) && Rn();
    var t = j;
    j |= 1;
    var n = Be.transition,
        r = U;
    try { if (Be.transition = null, U = 1, e) return e() } finally { U = r, Be.transition = n, !(6 & (j = t)) && Wt() }
}

function Ci() { Re = Pn.current, H(Pn) }

function en(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, I1(n)), $ !== null)
        for (n = $.return; n !== null;) {
            var r = n;
            switch (li(r), r.tag) {
                case 1:
                    (r = r.type.childContextTypes) != null && ai();
                    break;
                case 3:
                    On(), H(Te), H(he), hi();
                    break;
                case 5:
                    pi(r);
                    break;
                case 4:
                    On();
                    break;
                case 13:
                case 19:
                    H(J);
                    break;
                case 10:
                    ci(r.type._context);
                    break;
                case 22:
                case 23:
                    Ci()
            }
            n = n.return
        }
    if (le = e, $ = e = _t(e.current, null), ce = Re = t, re = 0, Rr = null, ki = $a = ln = 0, ze = dr = null, Zt !== null) {
        for (t = 0; t < Zt.length; t++)
            if ((r = (n = Zt[t]).interleaved) !== null) {
                n.interleaved = null;
                var a = r.next,
                    o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = a, r.next = l
                }
                n.pending = r
            }
        Zt = null
    }
    return e
}

function $c(e, t) {
    for (;;) {
        var n = $;
        try {
            if (ui(), ha.current = Oa, Da) {
                for (var r = Q.memoizedState; r !== null;) {
                    var a = r.queue;
                    a !== null && (a.pending = null), r = r.next
                }
                Da = !1
            }
            if (on = 0, ae = oe = Q = null, ur = !1, Tr = 0, wi.current = null, n === null || n.return === null) { re = 1, Rr = t, $ = null; break }
            e: {
                var o = e,
                    l = n.return,
                    i = n,
                    s = t;
                if (t = ce, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        c = i,
                        d = c.tag;
                    if (!(1 & c.mode) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var m = Rs(l);
                    if (m !== null) {
                        m.flags &= -257, zs(m, l, i, 0, t), 1 & m.mode && Ls(o, u, t), s = u;
                        var y = (t = m).updateQueue;
                        if (y === null) {
                            var b = new Set;
                            b.add(s), t.updateQueue = b
                        } else y.add(s);
                        break e
                    }
                    if (!(1 & t)) { Ls(o, u, t), Ei(); break e }
                    s = Error(P(426))
                } else if (q && 1 & i.mode) { var g = Rs(l); if (g !== null) {!(65536 & g.flags) && (g.flags |= 256), zs(g, l, i, 0, t), ii(Fn(s, i)); break e } }
                o = s = Fn(s, i),
                re !== 4 && (re = 2),
                dr === null ? dr = [o] : dr.push(o),
                o = l;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t, Ss(o, jc(0, s, t));
                            break e;
                        case 1:
                            i = s;
                            var f = o.type,
                                h = o.stateNode;
                            if (!(128 & o.flags) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (jt === null || !jt.has(h)))) { o.flags |= 65536, t &= -t, o.lanes |= t, Ss(o, Uc(o, i, t)); break e }
                    }
                    o = o.return
                } while (o !== null)
            }
            n0(n)
        } catch (v) { t = v, $ === n && n !== null && ($ = n = n.return); continue }
        break
    }
}

function e0() { var e = Fa.current; return Fa.current = Oa, e === null ? Oa : e }

function Ei() { re !== 0 && re !== 3 && re !== 2 || (re = 4), le === null || !(268435455 & ln) && !(268435455 & $a) || Tt(le, ce) }

function _a(e, t) {
    var n = j;
    j |= 2;
    var r = e0();
    for (le === e && ce === t || (Mt = null, en(e, t));;) try { Y1(); break } catch (a) { $c(e, a) }
    if (ui(), j = n, Fa.current = r, $ !== null) throw Error(P(261));
    return le = null, ce = 0, re
}

function Y1() { for (; $ !== null;) t0($) }

function J1() { for (; $ !== null && !V0();) t0($) }

function t0(e) {
    var t = Zc(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps, t === null ? n0(e) : $ = t, wi.current = null
}

function n0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, (32768 & t.flags) == 0) { if ((n = q1(n, t, Re)) !== null) return void($ = n) } else {
            if ((n = H1(n, t)) !== null) return n.flags &= 32767, void($ = n);
            if (e === null) return re = 6, void($ = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
        }
        if ((t = t.sibling) !== null) return void($ = t);
        $ = t = e
    } while (t !== null);
    re === 0 && (re = 5)
}

function pn(e, t, n) {
    var r = U,
        a = Be.transition;
    try {
        Be.transition = null, U = 1,
            function(o, l, i, s) {
                do Rn(); while (Nt !== null);
                if (6 & j) throw Error(P(327));
                i = o.finishedWork;
                var u = o.finishedLanes;
                if (i === null) return null;
                if (o.finishedWork = null, o.finishedLanes = 0, i === o.current) throw Error(P(177));
                o.callbackNode = null, o.callbackPriority = 0;
                var c = i.lanes | i.childLanes;
                if (function(m, y) {
                        var b = m.pendingLanes & ~y;
                        m.pendingLanes = y, m.suspendedLanes = 0, m.pingedLanes = 0, m.expiredLanes &= y, m.mutableReadLanes &= y, m.entangledLanes &= y, y = m.entanglements;
                        var g = m.eventTimes;
                        for (m = m.expirationTimes; 0 < b;) {
                            var f = 31 - Je(b),
                                h = 1 << f;
                            y[f] = 0, g[f] = -1, m[f] = -1, b &= ~h
                        }
                    }(o, c), o === le && ($ = le = null, ce = 0), !(2064 & i.subtreeFlags) && !(2064 & i.flags) || Xr || (Xr = !0, a0(Zl, function() { return Rn(), null })), c = (15990 & i.flags) != 0, (15990 & i.subtreeFlags) != 0 || c) {
                    c = Be.transition, Be.transition = null;
                    var d = U;
                    U = 1;
                    var p = j;
                    j |= 4, wi.current = null,
                        function(m, y) {
                            if (Mo = sa, ri(m = ec())) {
                                if ("selectionStart" in m) var b = { start: m.selectionStart, end: m.selectionEnd };
                                else e: {
                                    var g = (b = (b = m.ownerDocument) && b.defaultView || window).getSelection && b.getSelection();
                                    if (g && g.rangeCount !== 0) {
                                        b = g.anchorNode;
                                        var f = g.anchorOffset,
                                            h = g.focusNode;
                                        g = g.focusOffset;
                                        try { b.nodeType, h.nodeType } catch { b = null; break e }
                                        var v = 0,
                                            k = -1,
                                            M = -1,
                                            S = 0,
                                            x = 0,
                                            E = m,
                                            I = null;
                                        t: for (;;) {
                                            for (var z; E !== b || f !== 0 && E.nodeType !== 3 || (k = v + f), E !== h || g !== 0 && E.nodeType !== 3 || (M = v + g), E.nodeType === 3 && (v += E.nodeValue.length), (z = E.firstChild) !== null;) I = E, E = z;
                                            for (;;) {
                                                if (E === m) break t;
                                                if (I === b && ++S === f && (k = v), I === h && ++x === g && (M = v), (z = E.nextSibling) !== null) break;
                                                I = (E = I).parentNode
                                            }
                                            E = z
                                        }
                                        b = k === -1 || M === -1 ? null : { start: k, end: M }
                                    } else b = null
                                }
                                b = b || { start: 0, end: 0 }
                            } else b = null;
                            for (Io = { focusedElem: m, selectionRange: b }, sa = !1, L = y; L !== null;)
                                if (m = (y = L).child, (1028 & y.subtreeFlags) != 0 && m !== null) m.return = y, L = m;
                                else
                                    for (; L !== null;) {
                                        y = L;
                                        try {
                                            var W = y.alternate;
                                            if (1024 & y.flags) switch (y.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                case 5:
                                                case 6:
                                                case 4:
                                                case 17:
                                                    break;
                                                case 1:
                                                    if (W !== null) {
                                                        var ie = W.memoizedProps,
                                                            me = W.memoizedState,
                                                            de = y.stateNode,
                                                            ge = de.getSnapshotBeforeUpdate(y.elementType === y.type ? ie : We(y.type, ie), me);
                                                        de.__reactInternalSnapshotBeforeUpdate = ge
                                                    }
                                                    break;
                                                case 3:
                                                    var Se = y.stateNode.containerInfo;
                                                    Se.nodeType === 1 ? Se.textContent = "" : Se.nodeType === 9 && Se.documentElement && Se.removeChild(Se.documentElement);
                                                    break;
                                                default:
                                                    throw Error(P(163))
                                            }
                                        } catch (Xe) { Y(y, y.return, Xe) }
                                        if ((m = y.sibling) !== null) { m.return = y.return, L = m; break }
                                        L = y.return
                                    }
                            W = qs, qs = !1
                        }(o, i), Jc(i, o), S1(Io), sa = !!Mo, Io = Mo = null, o.current = i, Q1(i), q0(), j = p, U = d, Be.transition = c
                } else o.current = i;
                if (Xr && (Xr = !1, Nt = o, Ua = u), c = o.pendingLanes, c === 0 && (jt = null), function(m) { if (ot && typeof ot.onCommitFiberRoot == "function") try { ot.onCommitFiberRoot(Ha, m, void 0, (128 & m.current.flags) == 128) } catch {} }(i.stateNode), Ne(o, Z()), l !== null)
                    for (s = o.onRecoverableError, i = 0; i < l.length; i++) u = l[i], s(u.value, { componentStack: u.stack, digest: u.digest });
                if (ja) throw ja = !1, o = Al, Al = null, o;
                1 & Ua && o.tag !== 0 && Rn(), c = o.pendingLanes, 1 & c ? o === Dl ? fr++ : (fr = 0, Dl = o) : fr = 0, Wt()
            }(e, t, n, r)
    } finally { Be.transition = a, U = r }
    return null
}

function Rn() {
    if (Nt !== null) {
        var e = Hu(Ua),
            t = Be.transition,
            n = U;
        try {
            if (Be.transition = null, U = 16 > e ? 16 : e, Nt === null) var r = !1;
            else {
                if (e = Nt, Nt = null, Ua = 0, (6 & j) != 0) throw Error(P(331));
                var a = j;
                for (j |= 4, L = e.current; L !== null;) {
                    var o = L,
                        l = o.child;
                    if (16 & L.flags) {
                        var i = o.deletions;
                        if (i !== null) {
                            for (var s = 0; s < i.length; s++) {
                                var u = i[s];
                                for (L = u; L !== null;) {
                                    var c = L;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            cr(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, L = d;
                                    else
                                        for (; L !== null;) {
                                            var p = (c = L).sibling,
                                                m = c.return;
                                            if (Qc(c), c === u) { L = null; break }
                                            if (p !== null) { p.return = m, L = p; break }
                                            L = m
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var b = y.child;
                                if (b !== null) {
                                    y.child = null;
                                    do {
                                        var g = b.sibling;
                                        b.sibling = null, b = g
                                    } while (b !== null)
                                }
                            }
                            L = o
                        }
                    }
                    if (2064 & o.subtreeFlags && l !== null) l.return = o, L = l;
                    else e: for (; L !== null;) {
                        if (2048 & (o = L).flags) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                cr(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) { f.return = o.return, L = f; break e }
                        L = o.return
                    }
                }
                var h = e.current;
                for (L = h; L !== null;) {
                    var v = (l = L).child;
                    if (2064 & l.subtreeFlags && v !== null) v.return = l, L = v;
                    else e: for (l = h; L !== null;) {
                        if (2048 & (i = L).flags) try {
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xa(9, i)
                            }
                        } catch (M) { Y(i, i.return, M) }
                        if (i === l) { L = null; break e }
                        var k = i.sibling;
                        if (k !== null) { k.return = i.return, L = k; break e }
                        L = i.return
                    }
                }
                if (j = a, Wt(), ot && typeof ot.onPostCommitFiberRoot == "function") try { ot.onPostCommitFiberRoot(Ha, e) } catch {}
                r = !0
            }
            return r
        } finally { U = n, Be.transition = t }
    }
    return !1
}

function Ks(e, t, n) { e = Ft(e, t = jc(0, t = Fn(n, t), 1), 1), t = xe(), e !== null && (Ar(e, 1, t), Ne(e, t)) }

function Y(e, t, n) {
    if (e.tag === 3) Ks(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) { Ks(t, e, n); break }
            if (t.tag === 1) { var r = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) { t = Ft(t, e = Uc(t, e = Fn(n, e), 1), 1), e = xe(), t !== null && (Ar(t, 1, e), Ne(t, e)); break } }
            t = t.return
        }
}

function K1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ce & n) === n && (re === 4 || re === 3 && (130023424 & ce) === ce && 500 > Z() - xi ? en(e, 0) : ki |= n), Ne(e, t)
}

function r0(e, t) {
    t === 0 && (1 & e.mode ? (t = mo, !(130023424 & (mo <<= 1)) && (mo = 4194304)) : t = 1);
    var n = xe();
    (e = yt(e, t)) !== null && (Ar(e, t, n), Ne(e, n))
}

function Z1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), r0(e, n)
}

function X1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(P(314))
    }
    r !== null && r.delete(t), r0(e, n)
}

function a0(e, t) { return _u(e, t) }

function $1(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function Ve(e, t, n, r) { return new $1(e, t, n, r) }

function Pi(e) { return !(!(e = e.prototype) || !e.isReactComponent) }

function _t(e, t) { var n = e.alternate; return n === null ? ((n = Ve(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

function ba(e, t, n, r, a, o) {
    var l = 2;
    if (r = e, typeof e == "function") Pi(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case yn:
            return tn(n.children, a, o, t);
        case Ql:
            l = 8, a |= 8;
            break;
        case Jo:
            return (e = Ve(12, n, t, 2 | a)).elementType = Jo, e.lanes = o, e;
        case Ko:
            return (e = Ve(13, n, t, a)).elementType = Ko, e.lanes = o, e;
        case Zo:
            return (e = Ve(19, n, t, a)).elementType = Zo, e.lanes = o, e;
        case Su:
            return Ba(n, a, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case ku:
                    l = 10;
                    break e;
                case xu:
                    l = 9;
                    break e;
                case Gl:
                    l = 11;
                    break e;
                case Yl:
                    l = 14;
                    break e;
                case Et:
                    l = 16, r = null;
                    break e
            }
            throw Error(P(130, e == null ? e : typeof e, ""))
    }
    return (t = Ve(l, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
}

function tn(e, t, n, r) { return (e = Ve(7, e, r, t)).lanes = n, e }

function Ba(e, t, n, r) { return (e = Ve(22, e, r, t)).elementType = Su, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

function Uo(e, t, n) { return (e = Ve(6, e, null, t)).lanes = n, e }

function _o(e, t, n) { return (t = Ve(4, e.children !== null ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function ed(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = go(0), this.expirationTimes = go(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = go(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null }

function Mi(e, t, n, r, a, o, l, i, s) { return e = new ed(e, t, n, i, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ve(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fi(o), e }

function o0(e) {
    if (!e) return qt;
    e: {
        if (sn(e = e._reactInternals) !== e || e.tag !== 1) throw Error(P(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (De(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) { var n = e.type; if (De(n)) return uc(e, n, t) }
    return t
}

function l0(e, t, n, r, a, o, l, i, s) { return (e = Mi(n, r, !0, e, 0, o, 0, i, s)).context = o0(null), n = e.current, (o = vt(r = xe(), a = Ut(n))).callback = t ?? null, Ft(n, o, a), e.current.lanes = a, Ar(e, a, r), Ne(e, r), e }

function Va(e, t, n, r) {
    var a = t.current,
        o = xe(),
        l = Ut(a);
    return n = o0(n), t.context === null ? t.context = n : t.pendingContext = n, (t = vt(o, l)).payload = { element: e }, (r = r === void 0 ? null : r) !== null && (t.callback = r), (e = Ft(a, t, l)) !== null && (Ke(e, a, l, o), pa(e, a, l)), l
}

function $r(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null }

function Zs(e, t) {
    if ((e = e.memoizedState) !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Bo(e, t) { Zs(e, t), (e = e.alternate) && Zs(e, t) }
Zc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Te.current) Ie = !0;
        else {
            if (!(e.lanes & n) && !(128 & t.flags)) return Ie = !1,
                function(d, p, m) {
                    switch (p.tag) {
                        case 3:
                            js(p), An();
                            break;
                        case 5:
                            Is(p);
                            break;
                        case 1:
                            De(p.type) && fa(p);
                            break;
                        case 4:
                            Pl(p, p.stateNode.containerInfo);
                            break;
                        case 10:
                            var y = p.type._context,
                                b = p.memoizedProps.value;
                            _(La, y._currentValue), y._currentValue = b;
                            break;
                        case 13:
                            if ((y = p.memoizedState) !== null) return y.dehydrated !== null ? (_(J, 1 & J.current), p.flags |= 128, null) : m & p.child.childLanes ? _s(d, p, m) : (_(J, 1 & J.current), (d = mt(d, p, m)) !== null ? d.sibling : null);
                            _(J, 1 & J.current);
                            break;
                        case 19:
                            if (y = (m & p.childLanes) != 0, (128 & d.flags) != 0) {
                                if (y) return Vs(d, p, m);
                                p.flags |= 128
                            }
                            if ((b = p.memoizedState) !== null && (b.rendering = null, b.tail = null, b.lastEffect = null), _(J, J.current), y) break;
                            return null;
                        case 22:
                        case 23:
                            return p.lanes = 0, Os(d, p, m)
                    }
                    return mt(d, p, m)
                }(e, t, n);
            Ie = (131072 & e.flags) != 0
        }
    else Ie = !1, q && 1048576 & t.flags && cc(t, Na, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ga(e, t), e = t.pendingProps;
            var a = zn(t, he.current);
            Ln(t, n), a = gi(null, t, r, e, a, n);
            var o = yi();
            return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (o = !0, fa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, fi(t), a.updater = Ka, t.stateNode = a, a._reactInternals = t, El(t, r, e, n), t = Il(null, t, r, !0, o, n)) : (t.tag = 0, q && o && oi(t), Me(null, t, a, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ga(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(d) { if (typeof d == "function") return Pi(d) ? 1 : 0; if (d != null) { if ((d = d.$$typeof) === Gl) return 11; if (d === Yl) return 14 } return 2 }(r), e = We(r, e), a) {
                    case 0:
                        t = Ml(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Fs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = As(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ds(null, t, r, We(r.type, e), n);
                        break e
                }
                throw Error(P(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, a = t.pendingProps, Ml(e, t, r, a = t.elementType === r ? a : We(r, a), n);
        case 1:
            return r = t.type, a = t.pendingProps, Fs(e, t, r, a = t.elementType === r ? a : We(r, a), n);
        case 3:
            e: {
                if (js(t), e === null) throw Error(P(387));r = t.pendingProps,
                a = (o = t.memoizedState).element,
                hc(e, t),
                za(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, o.isDehydrated) { if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) { t = Us(e, t, r, n, a = Fn(Error(P(423)), t)); break e } if (r !== a) { t = Us(e, t, r, n, a = Fn(Error(P(424)), t)); break e } for (Ae = Ot(t.stateNode.containerInfo.firstChild), Oe = t, q = !0, Qe = null, n = vc(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling } else {
                    if (An(), r === a) { t = mt(e, t, n); break e }
                    Me(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Is(t), e === null && xl(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = a.children, yl(r, a) ? l = null : o !== null && yl(r, o) && (t.flags |= 32), Bc(e, t), Me(e, t, l, n), t.child;
        case 6:
            return e === null && xl(t), null;
        case 13:
            return _s(e, t, n);
        case 4:
            return Pl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Dn(t, null, r, n) : Me(e, t, r, n), t.child;
        case 11:
            return r = t.type, a = t.pendingProps, As(e, t, r, a = t.elementType === r ? a : We(r, a), n);
        case 7:
            return Me(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return Me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, l = a.value, _(La, r._currentValue), r._currentValue = l, o !== null)
                    if (Ze(o.value, l)) { if (o.children === a.children && !Te.current) { t = mt(e, t, n); break e } } else
                        for ((o = t.child) !== null && (o.return = t); o !== null;) {
                            var i = o.dependencies;
                            if (i !== null) {
                                l = o.child;
                                for (var s = i.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            (s = vt(-1, n & -n)).tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                var c = (u = u.shared).pending;
                                                c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s
                                            }
                                        }
                                        o.lanes |= n, (s = o.alternate) !== null && (s.lanes |= n), Sl(o.return, n, t), i.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if ((l = o.return) === null) throw Error(P(341));
                                l.lanes |= n, (i = l.alternate) !== null && (i.lanes |= n), Sl(l, n, t), l = o.sibling
                            } else l = o.child;
                            if (l !== null) l.return = o;
                            else
                                for (l = o; l !== null;) {
                                    if (l === t) { l = null; break }
                                    if ((o = l.sibling) !== null) { o.return = l.return, l = o; break }
                                    l = l.return
                                }
                            o = l
                        }
                Me(e, t, a.children, n),
                t = t.child
            }
            return t;
        case 9:
            return a = t.type, r = t.pendingProps.children, Ln(t, n), r = r(a = qe(a)), t.flags |= 1, Me(e, t, r, n), t.child;
        case 14:
            return a = We(r = t.type, t.pendingProps), Ds(e, t, r, a = We(r.type, a), n);
        case 15:
            return _c(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : We(r, a), ga(e, t), t.tag = 1, De(r) ? (e = !0, fa(t)) : e = !1, Ln(t, n), gc(t, r, a), El(t, r, a, n), Il(null, t, r, !0, e, n);
        case 19:
            return Vs(e, t, n);
        case 22:
            return Os(e, t, n)
    }
    throw Error(P(156, t.tag))
};
var Xs = typeof reportError == "function" ? reportError : function(e) {};

function jl(e) { this._internalRoot = e }

function wa(e) { this._internalRoot = e }

function Vo(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function ea(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function $s() {}

function ta(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof a == "function") {
            var i = a;
            a = function() {
                var s = $r(l);
                i.call(s)
            }
        }
        Va(t, l, e, a)
    } else l = function(s, u, c, d, p) {
        if (p) {
            if (typeof d == "function") {
                var m = d;
                d = function() {
                    var f = $r(y);
                    m.call(f)
                }
            }
            var y = l0(u, d, s, 0, null, !1, 0, "", $s);
            return s._reactRootContainer = y, s[gt] = y.current, Cr(s.nodeType === 8 ? s.parentNode : s), $t(), y
        }
        for (; p = s.lastChild;) s.removeChild(p);
        if (typeof d == "function") {
            var b = d;
            d = function() {
                var f = $r(g);
                b.call(f)
            }
        }
        var g = Mi(s, 0, !1, null, 0, !1, 0, "", $s);
        return s._reactRootContainer = g, s[gt] = g.current, Cr(s.nodeType === 8 ? s.parentNode : s), $t(function() { Va(u, g, c, d) }), g
    }(n, t, e, a, r);
    return $r(l)
}
wa.prototype.render = jl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(P(409));
    Va(e, t, null, null)
}, wa.prototype.unmount = jl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $t(function() { Va(null, e, null, null) }), t[gt] = null
    }
}, wa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Gi();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
        It.splice(n, 0, e), n === 0 && Yu(e)
    }
}, Wu = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = nr(t.pendingLanes);
                n !== 0 && (Xl(t, 1 | n), Ne(t, Z()), !(6 & j) && (jn = Z() + 500, Wt()))
            }
            break;
        case 13:
            $t(function() {
                var r = yt(e, 1);
                if (r !== null) {
                    var a = xe();
                    Ke(r, e, 1, a)
                }
            }), Bo(e, 1)
    }
}, $l = function(e) {
    if (e.tag === 13) {
        var t = yt(e, 134217728);
        t !== null && Ke(t, e, 134217728, xe()), Bo(e, 134217728)
    }
}, Qu = function(e) {
    if (e.tag === 13) {
        var t = Ut(e),
            n = yt(e, t);
        n !== null && Ke(n, e, t, xe()), Bo(e, t)
    }
}, Gi = function() { return U }, Gu = function(e, t) { var n = U; try { return U = e, t() } finally { U = n } }, il = function(e, t, n) {
    switch (t) {
        case "input":
            if (el(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var a = Ya(r);
                        if (!a) throw Error(P(90));
                        Eu(r), el(r, a)
                    }
                }
            }
            break;
        case "textarea":
            Mu(e, n);
            break;
        case "select":
            (t = n.value) != null && Mn(e, !!n.multiple, t, !1)
    }
}, Au = Si, Du = $t;
var td = { usingClientEntryPoint: !1, Events: [Or, wn, Ya, Ru, zu, Si] },
    Jn = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    nd = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return (e = ju(e)) === null ? null : e.stateNode }, findFiberByHostInstance: Jn.findFiberByHostInstance || function() { return null }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var na = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!na.isDisabled && na.supportsFiber) try { Ha = na.inject(nd), ot = na } catch {} }
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = td, Le.createPortal = function(e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Vo(t)) throw Error(P(200)); return function(r, a, o) { var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: gn, key: l == null ? null : "" + l, children: r, containerInfo: a, implementation: o } }(e, t, null, n) }, Le.createRoot = function(e, t) {
        if (!Vo(e)) throw Error(P(299));
        var n = !1,
            r = "",
            a = Xs;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Mi(e, 1, !1, null, 0, n, 0, r, a), e[gt] = t.current, Cr(e.nodeType === 8 ? e.parentNode : e), new jl(t)
    }, Le.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e))); return e = (e = ju(t)) === null ? null : e.stateNode }, Le.flushSync = function(e) { return $t(e) }, Le.hydrate = function(e, t, n) { if (!ea(t)) throw Error(P(200)); return ta(null, e, t, !0, n) }, Le.hydrateRoot = function(e, t, n) {
        if (!Vo(e)) throw Error(P(405));
        var r = n != null && n.hydratedSources || null,
            a = !1,
            o = "",
            l = Xs;
        if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = l0(t, null, e, 1, n ?? null, a, 0, o, l), e[gt] = t.current, Cr(e), r)
            for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
        return new wa(t)
    }, Le.render = function(e, t, n) { if (!ea(t)) throw Error(P(200)); return ta(null, e, t, !1, n) }, Le.unmountComponentAtNode = function(e) { if (!ea(e)) throw Error(P(40)); return !!e._reactRootContainer && ($t(function() { ta(null, null, e, !1, function() { e._reactRootContainer = null, e[gt] = null }) }), !0) }, Le.unstable_batchedUpdates = Si, Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!ea(n)) throw Error(P(200)); if (e == null || e._reactInternals === void 0) throw Error(P(38)); return ta(e, t, n, !1, r) }, Le.version = "18.2.0-next-9e3b772b8-20220608",
    function e() { if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch {} }(), yu.exports = Le;
var eu = yu.exports;
Go.createRoot = eu.createRoot, Go.hydrateRoot = eu.hydrateRoot;
const rd = "" + new URL("horse-face.png",
    import.meta.url).href;
var i0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    tu = Rt.createContext && Rt.createContext(i0),
    Bt = globalThis && globalThis.__assign || function() {
        return Bt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }, Bt.apply(this, arguments)
    },
    ad = globalThis && globalThis.__rest || function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function") { var a = 0; for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]) } return n };

function s0(e) { return e && e.map(function(t, n) { return Rt.createElement(t.tag, Bt({ key: n }, t.attr), s0(t.child)) }) }

function it(e) { return function(t) { return Rt.createElement(od, Bt({ attr: Bt({}, e.attr) }, t), s0(e.child)) } }

function od(e) {
    var t = function(n) {
        var r, a = e.attr,
            o = e.size,
            l = e.title,
            i = ad(e, ["attr", "size", "title"]),
            s = o || n.size || "1em";
        return n.className && (r = n.className), e.className && (r = (r ? r + " " : "") + e.className), Rt.createElement("svg", Bt({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, a, i, { className: r, style: Bt(Bt({ color: e.color || n.color }, n.style), e.style), height: s, width: s, xmlns: "http://www.w3.org/2000/svg" }), l && Rt.createElement("title", null, l), e.children)
    };
    return tu !== void 0 ? Rt.createElement(tu.Consumer, null, function(n) { return t(n) }) : t(i0)
}

function ld(e) { return it({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 184l144 144 144-144" } }] })(e) }

function id() { return w.jsx("div", { className: "avatar", children: w.jsx("img", { src: rd, alt: "avatar" }) }) }
const sd = "data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 120">
    <defs>
        <style>
            @keyframes dash {
                0% {
                    stroke-dashoffset: calc(var(--len) + 1px);
                }
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes stroke-width {
                0% {
                    stroke-width: 3px;
                }
                100% {
                    stroke-width: 12px;
                }
            }
            @keyframes fade {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            @keyframes dot {
                0% {
                    r: 0px;
                }
                100% {
                    r: var(--r);
                }
            }

            .stroke {
                fill: none;
                stroke: #fe66aa;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 3px;
                
                stroke-dasharray: calc(var(--len) + 1px);
                stroke-dashoffset: calc(var(--len) + 1px);
                animation: dash 1s cubic-bezier(0.8, 0, 0.2, 1) var(--delay) forwards,
                    stroke-width 1s cubic-bezier(0.8, 0, 0.2, 1) calc(var(--delay) + 0.5s) forwards,
                    fade 0.2s linear calc(var(--delay) + 0s) forwards;
            }
            .dot {
                fill: #fe66aa;
                r: 0;
                animation: dot 1s cubic-bezier(0.8, 0, 0.2, 1) var(--delay) forwards;
            }
        </style>
    </defs>
    <g id="text">
        <path class="stroke" style="--len: 181.056px; --delay: 0.25s;" d="M58.782,47.818a27.048,27.048,0,0,0-14.695-7.829A36.179,36.179,0,0,0,33.543,39.7a22.946,22.946,0,0,0-9.875,3.163,13.874,13.874,0,0,0-6.732,9.318,15.037,15.037,0,0,0,.226,7.519,18.437,18.437,0,0,0,4.152,6.4c1.428,1.415,3.131,2.609,8.192,4.714,6.286,2.614,8.463,2.771,15.6,5.5,3.963,1.515,5.98,2.3,7.743,3.479,2.309,1.548,6.652,4.46,8.375,10.108a16.627,16.627,0,0,1-2.785,15.011,20.007,20.007,0,0,1-9.063,6.316c-6.005,2.388-11.251,1.991-15.045,1.7a34.727,34.727,0,0,1-10.089-2.191,32.094,32.094,0,0,1-4.643-2.29A32.755,32.755,0,0,1,12,101.9"/>
        <path class="stroke" style="--len: 227.214px; --delay: 0.4s;" d="M161.609,75.369 A36.156,36.156 0.0 0,0 125.452,39.212 A36.157,36.157 0.0 1,0 161.609,75.369"/>
        <circle class="dot" style="--r: 8px; --delay: 0.8s;"  cx="125.452" cy="75.369" r="8"/>
        <path class="stroke" style="--len: 102.908px; --delay: 0.55s;" d="M192.747,7.759V110.667"/>
        <path class="stroke" style="--len: 181.061px; --delay: 0.7s;" d="M271.8,47.818a27.049,27.049,0,0,0-14.694-7.829,36.186,36.186,0,0,0-10.545-.289,22.946,22.946,0,0,0-9.875,3.163,13.877,13.877,0,0,0-6.732,9.318,15.048,15.048,0,0,0,.226,7.519,18.467,18.467,0,0,0,4.152,6.4c1.428,1.415,3.131,2.609,8.192,4.714,6.286,2.614,8.463,2.771,15.6,5.5,3.963,1.515,5.98,2.3,7.743,3.479,2.309,1.548,6.652,4.46,8.376,10.108a16.621,16.621,0,0,1-2.786,15.011,20.007,20.007,0,0,1-9.063,6.316c-6,2.388-11.251,1.991-15.045,1.7a34.707,34.707,0,0,1-10.088-2.191,32.118,32.118,0,0,1-4.644-2.29,32.755,32.755,0,0,1-7.6-6.553"/>
        <path class="stroke" style="--len: 114.188px; --delay: 0.9s;" d="M313.943,15.9c-.27,26.759-.1,43.686-.069,70.445A29.445,29.445,0,0,0,316.9,100.4a17.717,17.717,0,0,0,8.208,7.762,26.169,26.169,0,0,0,8.627,2.215c2.928.336,5.845.079,8.764.2"/>
        <path class="stroke" style="--len: 10.966px; --delay: 0.85s;" d="M332.089,40.9h10.966"/>
        <circle class="dot" style="--r: 7.5px; --delay: 1.55s;"  cx="373.158" cy="9.293" r="7.5"/>
        <path class="stroke" style="--len: 69.586px; --delay: 1.05s;" d="M373.158,40.9v69.586"/>
        <path class="stroke" style="--len: 173.931px; --delay: 1.2s;" d="M467.548,51.548a34.529,34.529,0,0,0-18-10.141,39.886,39.886,0,0,0-11.987-.595,34.761,34.761,0,0,0-8.57,1.806A33.442,33.442,0,0,0,410.7,57.767,35.414,35.414,0,0,0,406.03,72.52c-1.027,11.365,1.856,21.546,9.9,29.877a32.8,32.8,0,0,0,14.914,8.86,40.441,40.441,0,0,0,12.1,1.494,33.656,33.656,0,0,0,23.415-9.782c.927-.9,1.8-1.867,2.687-2.813"/>
        <path class="stroke" style="--len: 230.573px; --delay: 1.35s;" d="M526.414,75.724c9.953.032,19.906.012,29.86.006a5.218,5.218,0,0,0,4.864-3.161l.02-.052a7.737,7.737,0,0,0,.538-3.169,31.236,31.236,0,0,0-.239-5.1,28.322,28.322,0,0,0-1.1-5c-2.716-8.541-8.315-14.39-16.466-17.937A38.208,38.208,0,0,0,517.673,40.3,31.991,31.991,0,0,0,504.6,48.9a35.454,35.454,0,0,0-8.813,17.274,44.959,44.959,0,0,0-.781,13.84,37.893,37.893,0,0,0,2.685,11.355,35.146,35.146,0,0,0,8.407,12.252,33.685,33.685,0,0,0,5.818,4.265,36.388,36.388,0,0,0,12.565,4.366,42.629,42.629,0,0,0,20.152-1.226,39.114,39.114,0,0,0,10.63-5.554"/>
        <path class="stroke" style="--len: 269.195px; --delay: 1.5s;" d="M594.9,64.359a29.469,29.469,0,0,1-6.265-14.908,28.994,28.994,0,0,1,2.137-15.345,30.111,30.111,0,0,1,15.894-15.927,34.755,34.755,0,0,1,15.47-2.835,31.824,31.824,0,0,1,14.226,3.524,27.572,27.572,0,0,1,13.579,15.675,34.086,34.086,0,0,1,1.695,11.772,27.341,27.341,0,0,1-5.175,16.03,76.508,76.508,0,0,1-13.456,13.893Q623.883,83.933,614.74,91.6c-4.9,4.135-18.612,14.64-23.513,18.78h59.724"/>
        <path class="stroke" style="--len: 234.670px; --delay: 1.65s;" d="M682.699,29.256 A47.239,47.239 0.0 0,1 687.865,22.897 A27.937,27.937 0.0 0,1 709.125,15.266 C 716.588,15.661 723.206,18.056 728.343,23.836 C 733.833,30.014 735.334,37.228 732.573,45.053 L 732.5,45.253 A24.206,24.206 0.0 0,1 709.650,61.097 L 705.222,61.0970 L 717.204,62.297 A23.047,23.047 0.0 0,1 729.488,67.157 A22.129,22.129 0.0 0,1 735.322,74.399 A23.914,23.914 0.0 0,1 737.622,83.741 A28.135,28.135 0.0 0,1 735.882,96.207 A23.85,23.85 0.0 0,1 725.668,107.991 A32.12,32.12 0.0 0,1 711.4,112.35 A40.153,40.153 0.0 0,1 688.258,107.168 A31.349,31.349 0.0 0,1 678.9,99.322"/>
    </g>
</svg><!--${+new Date}-->`);

function ud() { const e = F.useRef(null); return F.useEffect(() => { e.current.style.setProperty("-webkit-mask-image", `url(${sd})`) }, []), w.jsxs("div", { className: "name", children: [w.jsx("svg", { ref: e, className: "name-svg", style: { WebkitMaskImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" }, viewBox: "0 0 750 120", xmlns: "http://www.w3.org/2000/svg" }), w.jsx("h1", { className: "name-text-overlay", children: "solstice23" })] }) }

function cd() { return w.jsx("div", { className: "bio", children: '"我宣布今天是世界jb日"' }) }

function dd() { return w.jsxs("div", { className: "banner", children: [w.jsx(id, {}), w.jsxs("div", { className: "title", children: [w.jsx(ud, {}), w.jsx(cd, {})] })] }) }

function fd() {
    const e = F.useRef(null),
        t = () => {
            if (e.current) return;
            const n = window.scrollY,
                r = .25 * window.innerHeight - 10,
                a = performance.now(),
                o = l => {
                    const i = l - a,
                        s = Math.min(i / 800, 1),
                        u = n + (r - n) * (c => c === 1 ? 1 : 1 - Math.pow(2, -10 * c))(s);
                    window.scrollTo(0, u), e.current = s < 1 ? requestAnimationFrame(o) : null
                };
            e.current = requestAnimationFrame(o)
        };
    return F.useEffect(() => { const n = r => { e.current && (cancelAnimationFrame(e.current), e.current = null) }; return window.addEventListener("wheel", n), () => window.removeEventListener("wheel", n) }, []), w.jsx("div", { className: "down-arrow", children: w.jsx("div", { className: "down-arrow-inner", onClick: () => t(), children: w.jsx(ld, {}) }) })
}

function pd() { const [e, t] = F.useState(window.sessionStorage.getItem("neon-mode") === "true"), [n, r] = F.useState(!1); return F.useLayoutEffect(() => { n && document.startViewTransition ? document.startViewTransition(() => { document.documentElement.classList.toggle("neon-mode", e) }) : document.documentElement.classList.toggle("neon-mode", e) }, [e, n]), w.jsx("div", { className: "switch-theme", onClick: () => (t(!e), r(!0), void window.sessionStorage.setItem("neon-mode", !e)), children: e ? w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: w.jsx("path", { d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" }) }) : w.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: w.jsx("path", { d: "M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q25-3 39 18t-1 44q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q21-14 43-1.5t19 39.5q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" }) }) }) }
var qo, u0 = { exports: {} };
qo = u0,
    function() {
        var e = {}.hasOwnProperty;

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var a = arguments[r];
                if (a) {
                    var o = typeof a;
                    if (o === "string" || o === "number") n.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var l = t.apply(null, a);
                            l && n.push(l)
                        }
                    } else if (o === "object") { if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) { n.push(a.toString()); continue } for (var i in a) e.call(a, i) && a[i] && n.push(i) }
                }
            }
            return n.join(" ")
        }
        qo.exports ? (t.default = t, qo.exports = t) : window.classNames = t
    }();
const hd = su(u0.exports);

function nu(e, t = 3) {
    if (e < 1e3) return e;
    const n = Math.floor(Math.log10(e) / 3),
        r = ["K", "M", "B", "T"][n - 1],
        a = e / Math.pow(10, 3 * n),
        o = t - Math.floor(a).toString().length;
    return a.toFixed(o) + r
}

function Ul(e) { if (e < 0) return `-${Ul(-e)}`; const t = e % 1 * 60; return e = Math.floor(e), t ? `${e}h ${t}m` : `${e}h` }

function md(e) { const t = e % 1 * 60; return `${e=Math.floor(e)}:${t.toString().padStart(2,"0")}` }

function nnd(e, u) {
    const url = `http://q1.qlogo.cn/g?b=qq&nk=${u}&s=100`;
    return it({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
            {
                tag: "image",
                attr: { href: url, width: "100%", height: "100%" },
            },
        ],
    })(e);
}

function gd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" } }] })(e) }

function yd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 496 512" }, child: [{ tag: "path", attr: { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" } }] })(e) }

function vd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" } }] })(e) }

function bd(e) { return it({ tag: "svg", attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M7.698 10.362c-.1855-.2184-.4189-.3905-.7002-.5162-.2813-.1257-.6104-.1885-.9874-.1885s-.7046.0628-.9829.1885-.5088.2978-.6912.5162c-.1827.2185-.3203.4773-.413.7765-.0928.2993-.1391.6194-.1391.9605 0 .3412.0463.6584.1391.9516.0927.2933.2303.5491.413.7675.1824.2185.4129.3891.6912.5116.2783.1226.6059.1841.9829.1841s.7061-.0615.9875-.1841c.2813-.1226.5146-.2931.7002-.5116.1855-.2184.3231-.4742.413-.7675.0897-.2931.1346-.6104.1346-.9516 0-.3411-.0449-.6612-.1346-.9605-.0899-.2992-.2276-.558-.4131-.7765zm-.965 2.8096c-.1467.2484-.3875.3725-.7227.3725-.3291 0-.567-.1241-.7136-.3725-.1467-.2483-.2199-.6059-.2199-1.0727s.0732-.8243.2199-1.0727c.1466-.2482.3844-.3725.7136-.3725.3352 0 .5759.1243.7227.3725.1466.2484.2199.6059.2199 1.0727.0001.4668-.0733.8245-.2199 1.0727zm11.8894-.8303-.0898-4.3896a4.5409 4.5409 0 0 1 .6912-.0539c.2334 0 .4668.0179.7002.0539l-.0898 4.3896c-.2096.0359-.41.0538-.6015.0538a3.4957 3.4957 0 0 1-.6103-.0538zm1.3196 1.4003c0 .2215-.0179.443-.0538.6643a4.2055 4.2055 0 0 1-.6553.0538 4.1414 4.1414 0 0 1-.6642-.0538 4.0882 4.0882 0 0 1-.0539-.6553c0-.2154.018-.4367.0539-.6643a4.0876 4.0876 0 0 1 .6552-.0538c.2155 0 .4368.018.6643.0538.0359.2276.0538.446.0538.6553zm-3.2226-4.0305c.2095 0 .422.018.6373.0539v4.4614c-.1916.0659-.4443.1302-.7585.193-.3141.0629-.6418.0943-.9829.0943-.3052 0-.5985-.024-.8798-.0718-.2813-.0479-.5282-.1495-.7405-.3052-.2125-.1555-.3815-.3829-.5072-.6823-.1257-.2991-.1885-.697-.1885-1.1938V9.765a3.8725 3.8725 0 0 1 .6373-.0539c.2094 0 .4219.018.6373.0539v2.4596c0 .2455.0194.4474.0584.6059.0388.1586.0988.2843.1795.377a.6606.6606 0 0 0 .3007.1974c.1197.0391.2603.0584.4219.0584.2214 0 .407-.0209.5566-.0628V9.765a3.8218 3.8218 0 0 1 .6284-.0539zm-4.3625 2.6841c.0538.1497.0808.3321.0808.5476 0 .2215-.0464.428-.1392.6194-.0928.1916-.2274.3577-.4039.4982-.1766.1407-.3905.2514-.6418.3322-.2514.0808-.5356.1212-.8528.1212a5.2984 5.2984 0 0 1-.395-.0135 3.1226 3.1226 0 0 1-.3456-.0448 4.0482 4.0482 0 0 1-.3277-.0763 3.9336 3.9336 0 0 1-.35-.1166 2.5768 2.5768 0 0 1 .0852-.4893 3.0737 3.0737 0 0 1 .1751-.4802c.1975.0779.3844.1362.561.1751.1765.039.3605.0584.5521.0584.0838 0 .175-.0075.2738-.0225a.9945.9945 0 0 0 .2737-.0808.6467.6467 0 0 0 .2109-.1526c.0569-.0628.0853-.145.0853-.2469 0-.1436-.0434-.2469-.1302-.3097-.0868-.0628-.208-.1181-.3636-.1661l-.5565-.1616c-.3352-.0956-.5969-.2379-.7855-.4263-.1885-.1886-.2827-.4713-.2827-.8484 0-.4547.163-.8108.4892-1.0682.3261-.2573.7705-.386 1.333-.386.2334 0 .4638.0211.6913.0629.2273.0419.4578.1048.6912.1885-.012.1557-.0419.3173-.0897.4847-.048.1676-.1048.3142-.1706.4398a3.58 3.58 0 0 0-.4757-.1571 2.18 2.18 0 0 0-.5477-.0673c-.2034 0-.3621.0314-.4758.0943-.1137.0629-.1705.1631-.1705.3007 0 .1317.0403.2244.1211.2783.0809.0538.1959.1048.3456.1526l.5117.1526c.1675.048.3187.1063.4533.1751.1347.0688.2498.1541.3456.2558.0958.1016.1707.2272.2246.3768zM12 0C5.3726 0 0 5.3726 0 12.0001 0 18.6273 5.3726 24 12 24c6.6275 0 12-5.3727 12-11.9999C24 5.3726 18.6275 0 12 0zm0 22.8c-5.9647 0-10.8-4.8354-10.8-10.7999C1.2 6.0353 6.0353 1.2 12 1.2s10.8 4.8353 10.8 10.8001C22.8 17.9646 17.9647 22.8 12 22.8z" } }] })(e) }

function wd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M4 3h-1v18h1" } }, { tag: "path", attr: { d: "M20 21h1v-18h-1" } }, { tag: "path", attr: { d: "M7 9v6" } }, { tag: "path", attr: { d: "M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" } }, { tag: "path", attr: { d: "M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" } }] })(e) }

function kd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z", strokeWidth: "0", fill: "currentColor" } }] })(e) }

function xd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" } }] })(e) }

function Sd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" } }] })(e) }

function Cd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21z" } }] }] })(e) }
const Ed = "" + new URL("avatar-bc8b0e9a.jpg",
        import.meta.url).href,
    Pd = "" + new URL("blog-preview-20deea8b.jpg",
        import.meta.url).href,
    Md = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZiS0dEAP8A/wD/oL2nkwAAGxFJREFUeF7tXWlwW9d1/rDvIBaSILiCi3ZqlyzvsS1HtmM5thPHHmsaJ5OkTqbuTKfTzsSdpGmn7bTpn7aZTjxNZtI2kzRJGye24622vGizIlGrKVGkSJEiwQUESGLf155zQUgQTcliI4CQg096eg9vue/d892z3XvfkyTlG8uhioqBdH5dRYWgSkiFoUpIhaFKSIWhSkiFoUpIhaFKSIWhSkiFoUpIhaFKSIWhSkiFoUpIhaFKSIWhSkiFoUpIhaFKSIWhLITkcrkrliqujpKOGHLB8WQCBosVkMnobhIgkwZicWQzGSKHTqBdYoPWEvEP78iTWIDYFufkj91ILGwgkhLcYykoHSFUUblei3//8UvYrJNgYGISCpkcWZUKq7Zshq7eCpPBiEwuC4VcLlQ1HAojG41BIpVCpVQgS2u5WgWL2QxpNoN0PHFjSJknV0blS7Qa0E2ooVDZ6QytEqKxLBcxJSOEW57CoMf3X/gR9txzL4b6z2Lc5UEnaYE+EacK5+CLJxFLJqFUyqGWK6En4eiVSoy6PbCbaiAjopLpNObicXi3bsauXTuR8nmvENaSWzg3FCo7RuROjVzEyXf3wT8yjK6VXejavhVarQ7Wjg6k6J7LQUppTRaTYjbhg8M96DLbYfNdhMcXwZGxadRY69Fz8CDW2ethUshh1GpRo1VjlrREIpVBo1HDG0tARhq00VYLl8uNo9Ryn/qzP0YmEEQumxUCk6mpddOSEyRLkCVBZ+lY4f6XhErbUjKbUmMNXvz+DyA/fgy1ZEVbmh2QqRQIUJkHInHs+dvvIDk+hrquLkGKlMssLqfEKCkhDEEKma6e472ob+6CI+EHThxClIQdIHI8yRyc7mmY6utRZ7MhkkxDJyGBZkmAREzS48aZOT82O5qhIy1yEUFtX3gMNlsTYmEf+t4/iJFzA7h//TpMxqIwdnejbWUnErOzkCuUVEyeOHlNDfw+P37z53+BbWYjFDVmerosmUxakayVEilMZCZfGh7Fl/71nxAgrbG0tCBFzy8jgpnkcpBSckIEqFJylRIzc7N4/+g53LFlC5o8I0AkgJBzCoFZL6KhCFKpJAlRgUyKHD+RIaGwwKzT4UhWBp3JDMnUOFY0NWNoYgrTRh1UZNruWrUSOr0OXhK2nOQ1NDgIWXMLVu15AvUtDrq5hMxeHK/88EfQHDqMro5WSFU68hMp6FodiJM2BEgrR0n75khL7iG/NrBmNR568rNQWurxj88+h2++8D2kw0FRVqlRHkLmwdWRGfUYOX8BcSihILnrsgnUkuOmtgxQpdnkTI+NIpbOIkUO/nAihwe3b8eZN19FUq2Hw6BGl60OwVAUc5EorFQeO+F0KgEJBQ1+fwBaEmqWzM2Pp1zoUkqR6uvHXWtXk6YaROOQySTwen24MOND0657se3xx6Bk0wcV3nr9ZYz95Gf4zHf/DkPv7ccHtP3t915HmsgqB8pKCIPkQdGNBFI5GXD6MTXnhS8QQjAcRw1FU2wWjDYrpg8dQPRYDxSrNsJzphcK8jnysWGcS2Wxw9GCNNFr0enRaDFRcJTByPAw2tvbMTHrQ8rrgdFshZOEaKWozqyQIuz3I0Ka56cgwtLShqy9CY67b4G9lcoKkrD5wQhyJob810//5QXYyASu3/MkGmprkaLrPjkm6wrw7cgYkQC4gryw45SQlkCpw+iHJ+F9/TeoT0vQ55pGSKmFSi7FgNuLh778NBQkGPvMHNn2LMK0PTA8gjUd7bCYTNh78APaJjPlncGJiWnIHA7sePZr6D1+BrX1jdDrtDAoZFBZtGgw6yAjv5EJRxZ12nINhcPkU3JkzpjwcpDBWAZCFoCEIdfrceb4KaR7DqMuFEI4SoKOJpBscqBrWzfZNS1WUqiq72hD7OgJhAcvkJCEqkFHSWdvzxEkJDKsam1FaNJJEVgORrUSEzkZWin0jlHoHA76hDkLqzSwOtqgX9EBHTWCBoqm1EYj0gs0oBBOl4uIApaVEBGB1Rhx+KVX0D1+AcOzIRjUOsQaW1C/56tIT/ejqcFOSVtGtOJAMATF4ADS/hCS3oAwLzlq5RQNwOMcxbGxSVgNWnim3Vjd0oiMQoNecvLP7n4AYciQ4bCX/IyUgodYNIIh8lPmTevI1DmgpkaxnAlhActHCGsGCXRkbAyKl34JhdFMxkwF7YqVSN92H870vIt77rwVaXLs/ICcQ2Qo9Ez0noVi1gPnuAcuShLNZgtqyElnI0GRRJ4mU9Vq0MFJpug8mbb17R040TeAh9d1wt5O4TAFArlUHPo6G/R0/9ELI1Dv3oXVa9cgRVn6chMi+87zf/rX89s3FNz6ZSTEq8XvcnK2kx4PMq+/iubV6xCinKS2ez3+Y3wGNnUK27duuJIMnw/yZAKzOhvUyRBkBjMs2RS0dGycypFvuxuu0yco+grCE4xg5e6Hsec7f0/eKkqJZg6TiSRODQ0hzokjkYKAFwbyExoyeQMHDmPFgzspubyya6bg5wrrcqAkGsIV4HxifHIKLU2NFJKmrqiQXC7HKOUeyb3/i5Vbt2P8gyOwPfhZ9CZSaKHI1EZJYnG/FZfHpkamkGBwZAod9jYM7H8brrP9iEiTUJB/WbG6CSl9HUzuKZx487eIUaKY6z+Hu8ipN63fwKXwnWlJ4+LICJy9ffAdOIh2Cpt1Wj2a//BLkEvJ/NG9GOKe9DudzUApVyBN2lcOUkpGiEKpxFmK/7vXkSmYd5hiPzlSp2cWgddewfo77kIkSmaoay1cs9NY02Ki5JnMD2lVgYwC2IdIqb3LNSq89vYheP0RPLp7DV776a9w54Z1MBhUyHFSSUJMUGSkaL8N2WgIPvIna+l4mpNNApfKnZcyCm2h1OOXP/4Janp6sONvvgU9kZ4TxM3XgRrOmYFBNNsbYKTggPeVGqUhhBYJPbxcISd/m29ZooJkpvovOuE9chR3PPgQhqVGjA+eQXe7DbW1Vop0UvkCFoAF2D8whO61q0Q2r+CQVKHG2d++grVtjYgMjyGuIELIMVMgC5VKiTf29+Kpr3+THiZESkFk0HMUl194Hmgb8PzDu/Dd11+kYME/fzQPPkdO+RJHbdwgyoGSOXVRKFWioObiX0oI93zlT/Cdv/wWtFoZDJRF19rtyJCv+LgOPBmFuOl0PgrKC1ONfW/8GnazApP+GLasboHb40Uiq0CjVQujTomX9/dDbWknDQXsDUZs37Q6ryEUmcmItMNHjsH5zntIk4n8g+eeRYqiuMWege/H989kSt+fVbYoiyvFNllWYwXZFGTJyRZa3nVVUqhdfpMhSKFMfc4zA2tzK978rx+is3srDCYr5L6TePmAGxldFzJsLum+Qcpvnnvmdhhq6zA5cpEahBbmuloqMz9omqLjVyODfd7AhWGsWdFFGnqlP7zRKBshDK5cATekUlwelSPI4X4qUoU5ytLfODyGsdFZpBNB1Fot8AcCcFGm//xzD+PU6bNI5mow7XLh2S8/DCll/HmyF3+eQkOKE7Fq8oul7vUtKyElhSA7iyF3DOemkji9/31s2rgRsXgMSqUKo2OjiAeH8MCuJ5GhPEROPsjpHMQTX/g0aUdECLnQYBYKnPcXjpeSDEZeX292kKC4+yWayiGYVuHwu2/B3tiMZDIuDicScbS2tMBgXQePZ4pqLRXBQTiSJuvJeUq+P02h11GsoLxETAEFEkpNBuMTQYiM8oT33tmL77/wz3jp9fewY/NWnDvdA6VKc6lVs+1va3Ng74FjInxmO1VXV4dzgxchNxrg9nrxqxdfx/v7Toih54WklAsVT8jHtUmeqHDRNYtwIISHbuuEZ2RYjDSqKV9Jxqn1ExksXJVah74TH1CixyO+FCLTPoNOi2MnzuLYwR6c65/Cts3bEaPk9OzpfspBZPN3KC8qmhAmIxKPi3D3auBELp6VYsvWGnRs2YRavRR9fWdx293341TPEegNRujI4Q+cP4/bjaPYec/tiEbj5FcU6Bvoh0pjpRyoCY32OjJhEazo6KQAYI7yHEoSl0FLKpsQav1efxCnzvSJJLNYQLzNSdu582NYu9qE5vomHPjZa3QkiwbKbQYHh1Db1IYD7+7Fvvf34gurg/jU5x9HMjBBFEpw8sMz6OpaA4vFihB3OM4XLSHFCAajbAfzO8qMiiaEQ8xWuw23bdtCEe0i8T8RJlFS1g4Ppgcn0dDZAUvjWgQDPh4qQXuHA7fffR/aHO3IWJsp4kqitSaBvqGL6OxYQU4/IWavZDJM0TwoN6Kd+fUyoOJ9CCeO6cziHXvZVBqtbQ2IOKdhrNHi12/2or7OjJZmytrdHhKyBNFYBI5GC0bmjBRtxdC9wg6VNDM/CkiF0D/crX+JEfrN4yLcq7AcqHhCrgUWaCqVEVm/y+2m6KgNk5OjMBhqEKewlkn0+7yop+SQTsOh05PQaDTQ51ykXIpLZqrYFHL4qzPqWT3n95QXNzchlPCd7RuEUm3Ef754Huu374DJWIO977yNNavXkKClGDh7BIlkGnKpHEFJi9CYW7rtmJmdFRk4c8FrUR6tff4AmbKYmFa6mFaWGsuaqXPLzFeaH2HplefW7JzywGRrwIleDyYnJoWjLwyMuUlrtq0147e902is1aFZF8TaThvUKinePB6A0dJGwk/C0WImwigxlMtxuOc4nvrcLihklzP3cmLZNIQryy1TzjM7cgVSlgb2L46OFvz8f15FWHQOsqUh/5DMYGYuAJOlBlqNEt94tAuPbTdgw6pGKClaUynIt1CIK9qAhKI10cGY70RUKSmH4blev28mizWDSfnZf78EhUZN2/MHlgDRgmnZ3L0Sfn+ICJYRMTEyZVk88/gmPH2HHs1qP7KxIFLppAih9x07jx+94YTVvoqcd1pMBeKRSO6SHxwewR23bkYumu/bWg4sm8kqaIhMpUIqRkJcqgDoerlSCWiV+Pkv3kUGRrhcLjzw6W1YYw3DOzUKiUIDNaUTbx0+j7iijZy1FVoxQzGDTDo/WMX3XeGwEjnAmNOJW29ZI2bhZ3/fwl4WBJuFpZLBRLKfkOvUOHz0OAbOOZFIazAzM40/+tpuNGfOwUfbqUgQ6dlhfHh0Py5EOuALJWCl0JgspDBbBr0eCoVSDDpFYikKfTOUKHbijbc+gJRHJJcJN0/3OxHBtMnMNTh1pId8RAKb79yJ8xOzOLXvIL7yzEOIDb0Nsn/IRAPwOAfRe9GHoVgnujdsxtTEBFTyrIiuOJqamXGjyWZDZ1cXZesWyvR1SFJe45qegb2xBqs7W0lryu9HSk5INpuGUqcXU3pIFeb3Lg2sFexn/MEQXnt1L3bs3I2JUBruCReoeWPCOYxHtulg0MjhC0RghRv/tj8KY/MtaKxRitntGo1K9ArzRGuOH1g7kqkEpiYn4HFNYte9O9C9pguTU27EMmHcsWktRb6fQELiZKu/970f4Ft/9fxVh0mvDZ5pokTP0ZMIxsneb70bx072IRkMIBUOk0OWwx8IwahLwoYxrHLYcWHgPPZP1GHVmo3IUYPI5xsffeGUn4UXtVqDi6OjmBjpRVODGQ31Vnzxy09R+eV37iUnRJiZmhqk/P6lVU74CjlCsShGx2fRsX4HjvQNY/qiE2lq8VKZVJgeBpfLvR3jrmlSySRqLDZYjTqk0zwTMU9G4d7F2/k1k5Lvxldr9fBMXsCTj9+JmtoacHqfjScvkcmCWlId/h8oiw8pFsL1gM9XKBSU9E3i1JkxdN++EycHRpD0zCCTTIhJcwvL5N+cKLJ0hfByWVouZ+EFFJLGZCKFMAUULGXuy4rT73QmRdqihdmghVqRhlWXxcrVDjSRxqisFiIoS/4pIspdap2uF8vg1PO340oVcEXFaD//jCViOHdxFpr6LlwYn0aYbH3+Ij73sjAKCdzVhMOCY/Bx3nbP+kmb0mIiH89UZDJS6YwIN00mPfTkq9IU8nLHZIYS1lg0iumpcejUGTTa9PjMA/fCbNRSuK0Vk77Fw95AlJEQbrX8/FLRkqUKGUmT7AwJhB+ABctCkfBIHc/llRjQc2EWs8EwwuOTlDekF608X7eUlsqmicvJE8VadVmD+H3Eef6uIFI8MyWd/AZEMBCAzzuNWiPw9a89iXQsIc67USgZIWxxuZUVVFvG7wwqZYgGgxQJhSnyiaHW1oicVI5kMoWp6VloDToScA4+yqhlBnLRFPH4pj3CZxgMetENwnlDMQrl8x3zuDY5BUEXUEzmtYgtXCeVUpCh1JC5S2N9uwK3bFx5zRHNpaIkhAgyuH+K/vKL/0lS+8GxCeQkatTZW5BTGjHuniOfmaEIKUx5c07E/IXsmE2JTC5FiqKnAPmNIIXMvnnzsKKtka4jbZl/6stC5DXv5OXqgl2IYk24FlirJUo13DMexNwTaCMfc9+e3WiwmsnEkZbOn/e7ojSEUCXZRqcp5D1w/AyMdW1oX7UGp85Pwut2UxYdgVanQYpnuLMAiQwJha+is5GcOU/zjMx5EQ8EybQpSBhMkgxeykMCoQha7fXzA0x5MfD9eBYkR16LgY9/XOtf6PwLEHXRaCk/mYI1NIn12jQ6G+3IGgyw7Lz3hofGN5wQrgB3bYy63Bh1x9AuJ0d6qkckXEqTFWOxHGS2dqj0JqikOfGqgozOz5KPYCPH0RFXT8Jh7bx9LzhujpDYl/AxHmUtyIGF6RwbgcPRRQ768lBvQdBcDjvyxQTH5zAWIyRPhh59h/fiK912GPUGxCibj1PDaN79IORkYm/0UG9JCFFQC3cNT0J25iRiPDikVgthkBihImFy1/fx6QDGdM0w1TVAmqFYn2ggOqiEeaHRJps+sUll8vWX10zG5XN5P+csxe9wFPY5qSGoKSu32yxILBiX53OupRlyShhHj7+Hb2zpQoRzEtqXJH/W+MBOiv7qPvJe4o3A4k/zu0KpwpED71NLVnAfhTAvLKwEOb8gxfsZhQq3ttvxtCUG5cRZRHIceXECx5VjJljieaHwUqj05fVlMhi8v5iMYoiRwkiUksZZMfWHy7seiNFD7xyeXlGPEJGRisUpysqh6TO7oLKVhgzGDSeEHzJDGrDxvk/lh0npt3jw+TUv3PKTVMkYZNjVakbjxEm4Kfri9zWEvObreen8jwjxo4IQ91gEUhlPEyWtJH81RaTwV4auhxR+vyUrVWAqHKfkP4na27aj9bMPQWk2IZcoDRmMkmgIV7i9swOzpA1MyEIBsHHKUivnvSEyabd1teDuyCAu9vcSKTo6nyub14xCxa+3ZReDr1FyXkNl8ahgOB7HJEV3rCkfB76bUa/DBdcMHI8+DJ2jTQQOOe6jKREZjJIRIiETYt+xBTlygos0aEEK72aBR+JJ2Bub8NVOHcYHjkNJtrtY/gVilkKKOJ+CARWF3Wz7xVAtmaFINI6xSbeYKloguxjcTPJNhUDPXrd1A0DE8He0yoGSEMIVTZNat23ZhDGK21kQ1xImny/6k8iEfanDiP7TR6GiUJOvWQoJC8FXqiicFiWw36GFAjUxdWjYOS38ROEehSU/EZsWeqZQOAyz3QaQuVuMvFKgNE6dwK1MSbmDbu1q0WPKdbwe0SYlMnyxTY3esx+K8JkFUbwslSDhw+a38yCfQrXmICBMzj4fFheVP/+UzF/A50V7c8OlsLscKBkhXLl0LIZN99+HWSaHBM2O8uPEmSE7XWOyYL08ioyMJz9cvqKwvRRS+N0PId0CstxVnxVk1+jYXxWVLxZuOWTeKLEN+adga2sX2lsulIyQS+BP5W3agJmAX3TscWu9ljiZyCjlC3e1WeGdnhAtuHB+cWu+blIoQOA/HCjwkspmxEdo2lsaxPceC+DS2P2zjvBDxhIZfHp9K9k30u4youSEsGnYtH4tLtbWIeD1C3/ycZrCwuaXbfTufsg1lA0XCb9AyHWjcCoVwZOqHc31sNdZLvWbFcCncZ8akyaXK+EfH8J9998hhp6XdL/fEaXXEKoMv2786BOPod9ihtM5Dr1GIwRwtVbOAoiRltzb3oDe3tPgj2EuhmtpCR/jhX0ImyfGCodd9ImlqJF8FFQW/VVQEODyB7AxNw1Y67ig+ePlQekJIbCA+Wuin3/6CWTvvB2/2HcIUhI45wgFYgpLARyq8rsbGucJZOX5N56KweZLmLMF+xm8r3Cc7X9rYz0cLTbhn/jshS0+f2+JGMLtHx1Fy/Ah3PnIbpEQLlJ8SVGy8ZBFQbUTk9vIhh966x0kzwzARnmC2Vwj3pRNkn2/1HpZaHS+zaDDt1/ehx2PPYN46KPj8leLgJiMa0FUmsrn8vjjNjmFGv09+/GAOYNVjnbUPfKQeMe93CgvIUXIzzrU4ezJU5B6fTh34kO0qBWwm81k6zOiOz5LWsRfDTJqlPiHd06ge+fjkMQjdHU+PF1ITjEW05xisBHjzsM48ekcHkBrZByPbViJYE6KxgfuhxjHLLd6EJaNkEJlxbd0uSuDhMOfIc/y93dJSBKFAsk5L8bfeAsyhRIWgwavnhmGv3ULbVPmLMzJtUkpoPg8MUFCpkAwEsLQ6WO4zSLFPSua6YZyhKkBtD32CJlLHlpeHrEsHyFFKG7NBcHxHs6kWUM8R48hOHABZpMek74A3nKnoGlaAavJhHSSCBTXs+m6HA6LcmjhP0x6knxEmEiIuEbRKk+iTZlFt6MZUcra+RO1Ur0ObZ97JD+hr+h5yo2KIORqEKTQwl+vziZimD54BCmXGyajHn3jE7iQkCFtsiOuNkFBPoi/AiQ8BxERjycRCvuRCAegTYax1iCFVZpGa10tES1HnHxVkkcsSTutmzfA2NUhPkv78fpWWlQ0IQzxcGxyWFuImLjPh8hFJ8JDF6CZ99tTpDXnXR5yzCqoDSbk0gloc0nUarWw15qhJrISlJ2nqRwOAjIJcta0NlHCaqElQ8krj1guNxmMiiekGMKRswmigIDXMZcLoREn4q4pyEjYPCOEp+tQ4iFCXJ7Ww2SKSIzX5HdkBiNMa1fB0NHOSbzoxRVEzJvK5cZNRUgBl5w0aQ1PiMilUshEoojP+ZAKBBAaHhXnSfkYkaGurwW/WatvaYa+3UHEJEgj+P8vub6goJy4KQkpRrFQJeS8eaIdO3ERJeWbviCF9Yu/KS+2+VBl8XAJNz0hC1EcsS1EpWnDYihL10k5wUK/2nIz4BNHyM2OKiEVhiohFYYqIRWGKiEVhiohFYYqIRWGKiEVhiohFYYqIRWGKiEVhiohFYYqIRWGKiEVBeD/AIDmKcqsnZhAAAAAAElFTkSuQmCC",
    Id = "" + new URL("mimi-radio-preview-f424f662.jpg",
        import.meta.url).href,
    Td = "" + new URL("celeste-shot-9de8044a.png",
        import.meta.url).href;

function Nd() { return w.jsxs("div", { className: "content", children: [w.jsx(Ld, {})/*, w.jsx(Ad, {})*/] }) }

function Ld() {
    const e = F.useRef(null),
        t = () => {
            const n = getComputedStyle(e.current).gridTemplateColumns.split(" ").length,
                r = parseInt(parseInt(getComputedStyle(e.current).columnGap)),
                a = (e.current.offsetWidth - r * (n - 1)) / n;
            e.current.style.setProperty("--square-size", `${a}px`), e.current.style.setProperty("--gap", `${r}px`)
        };
    return F.useLayoutEffect(() => {
        const n = new ResizeObserver(t);
        return n.observe(e.current), t(), () => n.disconnect()
    }, []), w.jsxs("div", {
        className: "bento",
        ref: e,
        children: [
            /*w.jsx(Ce, {
                columns: 4,
                children: w.jsx(ct, {
                    name: "Blog",
                    href: "https://archive-blog.s23.moe",
                    desc: "博客",
                    icon: w.jsx("img", {
                        src: Ed,
                        draggable: !1
                    }),
                    iconBg: "#fbe6e7",
                    img: Pd,
                    imgSize: "180%",
                    imgPos: "left top"
                })
            }),
            w.jsx(Ce, {
                children: w.jsx(ct, {
                    name: "GitHub",
                    href: "https://github.com/solstice23",
                    desc: "solstice23",
                    icon: w.jsx(yd, {}),
                    iconBg: "#000",
                    button: "Follow"
                })
            }),
            w.jsx(Ce, {
                children: w.jsx(ct, {
                    name: "Telegram",
                    href: "https://t.me/solstice_23",
                    desc: "@solstice_23",
                    icon: w.jsx(vd, {}),
                    iconBg: "#0084c6"
                })
            }),
            w.jsx(Ce, {
                children: w.jsx(ct, {
                    name: "Discord",
                    href: "https://discord.com/users/674568741660655626",
                    desc: "solstice23",
                    icon: w.jsx(gd, {}),
                    iconBg: "#5662f6",
                    iconSize: "70%"
                })
            }),
            w.jsx(Ce, {
                children: w.jsx(ct, {
                    name: "Matrix",
                    href: "https://matrix.to/#/@solstice23:matrix.org",
                    desc: "@solstice23",
                    icon: w.jsx(wd, {}),
                    iconBg: "#0dbd8b",
                    iconSize: "55%"
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                mobileAspectRatio: "450 / 195",
                children: w.jsx(ra, {
                    disabled: !0,
                    img: "https://github-readme-stats-solstice23.vercel.app/api?username=solstice23&show_icons=true&theme=radical&hide_border=true&include_all_commits=true&count_private=true&card_width=450px",
                    imgPos: "0% center",
                    padding: "0px",
                    bgColor: "#141321"
                })
            }),
            w.jsx(Ce, {
                columns: 5,
                rows: 3,
                mobileAspectRatio: "550 / 320",
                children: w.jsx(ra, {
                    disabled: !0,
                    href: "#",
                    img: "https://osu-sig.vercel.app/card?user=solstice23&mode=std&lang=en&skills=true",
                    bgColor: "#2e292e"
                })
            }),
            w.jsx(Ce, {
                columns: 3,
                mColumns: 2,
                mRows: 2,
                children: w.jsx(ct, {
                    name: "osu!",
                    href: "https://osu.ppy.sh/users/21226378",
                    desc: "solstice23",
                    icon: w.jsx(bd, {}),
                    iconBg: "#ff66aa",
                    iconSize: "70%"
                })
            }),
            w.jsx(Ce, {
                columns: 3,
                rows: 1,
                mColumns: 2,
                mRows: 2,
                children: w.jsx(ct, {
                    name: "osu! Stats Signature",
                    href: "https://osu-sig.vercel.app/",
                    desc: "Signature generator",
                    icon: w.jsx(Sd, {}),
                    iconBg: "#ff66aa",
                    iconSize: "50%"
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                children: w.jsx(ct, {
                    name: "MIMI Radio",
                    href: "https://mimi.s23.moe",
                    desc: "MIMI Songs Player",
                    icon: w.jsx("img", {
                        src: Md,
                        draggable: !1
                    }),
                    iconBg: "#fceee1",
                    img: Id
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ra, {
                    disabled: !0,
                    img: "https://profile-counter.glitch.me/solstice23/count.svg",
                    imgSize: "contain",
                    imgPos: "center center",
                    padding: "10px",
                    bgColor: "#000"
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 4,
                mColumns: 4,
                mRows: 2,
                children: w.jsx(ra, {
                    disabled: !0,
                    href: "#",
                    img: Td,
                    imgPixelated: !0,
                    imgSize: "220%",
                    imgPos: "40% 90%",
                    imgMSize: "150%",
                    imgMPos: "0% 75%",
                    bgColor: "#180039"
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                children: w.jsx(Rd, {
                    timezone: "America/Toronto",
                    timezoneAbbr: "EST"
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "E-mail",
                    href: "mailto:solstice233@gmail.com",
                    desc: "solstice233@gmail.com",
                    icon: w.jsx(xd, {}),
                    iconSize: "50%"
                })
            }),*/
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "按这个群的色批程度你发图打码还不给数字跟雌小鬼骂人没什么区别",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "648是厂家信徒的赎罪劵",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "万物灵长的手不用来打胶拿去点你那破技能图标",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "看来是我没摸透群里的男人",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "被群友无脑乱射哩 /打call",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "我真是去他妈的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "你们多和女人玩玩就懂了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "提示：全部连上后和监狱铁窗差不多（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "玩方舟足控不是很正常吗",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "她都不让我舔了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "批也是有一股味的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "你这描述把脚换成jb都行（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                mColumns: 4,
                mRows: 2.5,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "对我来说，舔脚享受的不是脚本身的味道，而是舔的过程中的自我贬低，以及对对方的臣服感，依赖感，也许还混杂了一些幸福感，反正就是，很爽（精神层面）",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "闻不出来",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "@今天杀个马 @今天杀个马 其实我觉得不臭",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "趁她睡觉的时候",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "终于舔上了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "你们爆典的速度快赶上玩原神的了（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "@今天继续阿卡霖 @今天继续阿卡霖 脚是臭的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "好不容易见到npy，她突然不给我舔脚脚了 /大哭",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "昆虫日福瑞都有人，昆虫目福瑞怎么就不行了 /菜汪",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "不是每个人都有jb，但每个人都有xp",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我们群刊怎么还不出",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我要让世界jb日成为考古学界难题",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "快，设精",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "就算是男的也能用p图软件赛博宫刑",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "反正草不到我说是女的就是女的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Epiphyllum",
                    desc: "瞎编就可以了，反正会有傻逼信",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2194259440&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "凡是炼铜的豆沙了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "炼铜必死",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "修特罗海姆闪击波澜",
                    desc: "莫加多尔的恋癖圣裁.mp4",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2312066041&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "高中同学想来上海睡我",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "在这里插一个旗：老子要减肥瘦到能穿丝袜。",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "周航确实戳",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "建议群友每天坚持she精）",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "这话说得梁哥像赛博魅魔",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "我不想起床",
                    desc: "身寸米青｜.",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2767257378&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "射精！",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我是阳枪队",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "那我冲一发没事是不是就是阴性（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "到时候孩子还要孟德尔定律判断是2维还是3维",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "活一辈子只能约纸片人",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "感觉当代人的人生就是在没钱和缺爱两种状态之间流浪",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "码 后 炮",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "大家好啊，我不是李易峰，但是我今天要嫖娼",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "或者你可以来我家透我一次",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Ψ",
                    desc: "满地都是大便土，全是我的（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1284238531&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "满地都是六便士，没有一个是我的（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "亲测可以",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "亲测不行",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "学习好，自然有女孩子会看上你的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "录取通知书又不是jb",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "她是BL说明她喜欢男人",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "游戏你可以从小一直玩到去世，女生只能玩到去",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Epiphyllum",
                    desc: "梁哥这个首先就很困难",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2194259440&s=100", alt: "Icon" })
                })
            }), 
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "首先得长的不那么有攻击性",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "喜欢数值不如去玩计算器",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "数值已经不重要了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "抽中是拉稀",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "没抽中是便秘",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "抽卡就是拉屎",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "感觉烧起来了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "好吧jb好热",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "这群能有内鬼我直接真人快打",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                children: w.jsx(ct, {
                    name: "Ψ",
                    desc: "你看到工人在高温天气下工作给他点赞就是正能量，你问他为什么高温天气还要工作就是负能量",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1284238531&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "啊，我可喜欢小孩子了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人类文明跳过空调娘直接创造空调前辈（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "就是给以后可能会从业的hxd们一个参考",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                mColumns: 4,
                mRows: 2.5,
                children: w.jsx(ct, {
                    name: "Epiphyllum",
                    desc: "没事，从现在开始培养良好生活习惯，就可以比xhj活得久，到时候我们组团去xhj坟头蹦迪，要是有人猝死得早，就由活着的人多蹦一些帮他补上",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2194259440&s=100", alt: "Icon" })
                })
            }), 
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "美的意义就是让人对漠不关心的事物产生犯罪冲动",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "算的话赵括谈的还没我多",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "和纸片人谈恋爱算不算纸上谈兵？",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "爱情是物质洪流上的浮桥",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "统一后，台湾买房怎么选.pptx",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "快进到导弹miss都比你少",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "jb是人类文明的方舟（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "就我当十几年孩子的经验，孩子没什么用",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "儿子也不是不行",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "没马怎么杀",
                    desc: "享受孩子也不是不行（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1244534099&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "热恋中的情人是最出色的欺诈师",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "恋爱的本质就是互相欺骗对方的感情（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "恋爱的目的是白嫖",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 3,
                mColumns: 4,
                mRows: 3.5,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "明天就是8月了，感恩大家7月对我的忽视，我很喜欢这个群，大家都各聊各的，没人鸟我 我也不想鸟你们，很温馨的一个圈子，我很欣慰。我删了很多群，唯独你们舍不得删，因为大家都展现出真实的自己，色情 装逼 矫情 贪婪 伪善 两面三刀 笑里藏刀 道貌岸然 自私 虚荣 狡诈 虚伪 冷漠 龌龊 卑鄙 见利忘义 嫌贫爱富 厚颜无耻 阴阳怪气。希望大家继续加油 我会一直和你们耗下去 你们这群叼毛",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人生就是从死肥宅到死宅再到死的过程（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "政治的本质就是比谁会卡bug",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "在恋爱关系里谈钱不如和钱恋爱（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Ψ",
                    desc: "哪有什么岁月静好，只是该内容涉嫌违规",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1284238531&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "我是现充了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Ψ",
                    desc: "原来是我设的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1284238531&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "生活处处是本子",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我的生活圈子属实自然保护区（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "千冲万撸始出来（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "这样又不能设精了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "但他们就是体制",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "你只是在体制内反抗",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "主旋律漫画根本进不去你的信息茧房（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "而不是这些吊图",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "我真希望我一眼懂的是题目",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "黄鼠狼给鸡拜年，嫌弃鸡不肯起床（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "写红楼梦，楼买不起，梦不让做，只剩红了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 3,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282307999.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "想象一下",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "每个未成年人每周只能打3小时手冲",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人类最大的苦难来源于他们对苦难的习以为常甚至顶礼膜拜",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "有些事就像围城，外面想钻进去，里面想涌出来",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                mColumns: 4,
                mRows: 2.2,
                children: w.jsx(ct, {
                    name: "hy so seriously?",
                    desc: "【数据删除】的语录建立了一个自己的世界，一个浓缩的宇宙，其中喧嚣纷乱却又生动可信的现实，映射了一个时代及其人民的富足与贫穷。",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2463043674&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "读者越是欣喜若狂",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "情节越是不堪入目",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我感觉自己就像一部低俗小说",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "想放假又不是讨饭",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "但大多数小丑到死都已经知道自己是小丑",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "大多数英雄到死都不知道自己是英雄",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我为所有人表演一场喜剧，留给我的人生一场悲剧",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "只有游戏里的猫娘一如既往",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "明天所有人看我的目光都会不一样",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "还是猫娘好",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我今天疯狂星期四",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "纯真的少年时代，连射出的精液都纯白无暇（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 6,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282316871.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我要为所有人都买得起飞机杯的时代而奋斗",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "只下流的人总是比既下流又上流的人活得更快乐",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "感觉我们群快被辟谣；",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人类只有在突破自己的底线这点上永无极限",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "统治者解读的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "历史是胜利者书写的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人们学历史书",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "溯源已经变成政治武器了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "生活就是最地狱的笑话",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "时代没有变好，人们的脑子变坏了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "英雄最多的地方是坟墓",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "无用之用方为大用",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "学校之间不过是苍蝇和蚊子的区别",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "平凡的人重复一千遍真理也还是谎言",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "手握名利的人重复一遍就能让谎言变成真理",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "垃圾总是比花瓣更难降解",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "遗臭万年和流芳百世一样难得",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "天下马一共十斗，他们每人倒欠十八斗",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "中国这jb教育体制只能创造出衡水中学和类衡水中学",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "没马怎么杀",
                    desc: "脑子被脚气污染了属于是",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1244534099&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "上课吃老坛酸菜能拿xhl文学奖",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 2,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "刚才在家里逛了一圈，一眼就看到了这个群的书，非常高兴，果然这种东西就应该在垃圾桶里（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "只要不失去你的崇高，整个世界都会向你敞开，但防沉迷不会",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "ntr是双倍的纯爱",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "ntr只是身体和精神分别和人纯爱了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "你把整个垃圾站的垃圾回收拿到的钱肯定超过一克拉钻石",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "这作业一本一本铺下去估计够我行万里路了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "爱与性有染，性与爱无关",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "从爱情的奴隶沦为x的奴隶了是吧（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "破事新编",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "一个人，要走多远的距离，才能在时光的尽头，找回最初的自己（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "他在生活的苦难中找回了开始的自己（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "这个反派应该供起来",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 3,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282325811.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "这拿铁，多是一件美式啊（",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "给我做成冰美式了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "麦当劳点了个冰拿铁",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "你有很多的牛子你就可以拥抱资本",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "你有很多的资本你就可以拥抱牛子",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "在座的各位拥有的资本都和牛子成正比",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "半夜起来摸手机",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "这么搞估计等你死了还有肌肉记忆",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "死后必定长眠",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "生前何必久睡",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "女朋友后面可以加个们",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "女朋友在里头",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我在外头",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "爱情是一块小小的屏幕",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "现在啊",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天继续阿卡霖",
                    desc: "诶，为什么我设不了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=5000293&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "杭州第一深情",
                    desc: "啊哈我设了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2873677724&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "杭州第一深情",
                    desc: "@希望人出事 @希望人出事 大家都是成年人了，还老是出选择题干嘛",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2873677724&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "杭州第一深情",
                    desc: "请群主把我这条信息设成精华信息谢谢",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2873677724&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "吃进去的是新闻，挤出来的是xhl新闻",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "我的爱情中充满笑话",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "你的爱情中充满神话",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 3,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282334514.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "矩阵和数字比起碳和蛋白质也差不了多少",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "要是现实中遇到个女的你估计都不敢说话",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "你这种人也就只能在网上意淫了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "社会的癌细胞活性化了属于是",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "这精华消息就像shi里几颗没有被消化的瓜子",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我的嘴和我的jb一样谈吐不凡",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "精华消息里面是不是有一半是我的 /辣眼睛",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人就两只手，你全用来手冲了，拿什么去拥抱爱情",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "修特罗海姆闪击波澜",
                    desc: "吓得我刚在厕所里一个滑铲",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2312066041&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "有钱人花钱就像射精",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "我就不找",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "当找女朋友的代价大于打一炮的代价",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "千人一面的原因是没有足够吓到你的脸",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "这个群tmd真的是腹泻式聊天",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "整个时代的情侣都从爱情的坟墓里爬出来，嘲笑我只能在墓地里游荡",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "没马怎么杀",
                    desc: "你们都是我的翅膀都不知道",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1244534099&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "整个时代的情侣都从爱情的坟墓里爬出来，嘲笑我只能在墓地外罚站",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "性功能和功能性总是缺一不可的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "jb也行",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "你用脑子想想",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "散是漫天雪",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "聚是一坨屎",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Lucky",
                    desc: "我的初中同学真是太厉害了（称赞",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=944948172&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 9,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282341967.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "你们搁着等出书是吧",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "龙王这种东西和老二的大小一样是天生的",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "世界上只有两件事物永远值得花费时间，文学和纸片人",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "一个真正的男人不仅高尚得买飞机杯，情怀也永远是最上流",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 6,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282344267.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "人类不能没有幼女，就像西方不能失去耶路撒冷",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "学如逆水行舟，不退则翻",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "就不会觉得只有自己和shi一样了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "你考试时就把所有人看成黄金马桶",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Epiphyllum",
                    desc: "只有太监才会举报",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2194259440&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 6,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282346495.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "丑陋的外表各不相同",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "有趣的灵魂千篇一律",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 4,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282347333.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "大家都是女人就没有什么jb性别歧视了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "没马怎么杀",
                    desc: "20个一岁算了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1244534099&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "谁能拒绝一只会说话的大虫子呢",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "没马怎么杀",
                    desc: "我觉得纯爱的番就是垃圾",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1244534099&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "Antarcticite",
                    desc: "我去泰拉嫖娼都够好几次了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2218320330&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 4,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: w.jsx("img", { src: "https://cdn.jsdelivr.net/gh/SwedishDoveCooker/ImgBed@main/202407282350724.png", alt: "Img", style: { width: "100%",height: "auto"}}),
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "我宣布今天是世界jb日",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "直接气的jb都扭曲了",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "没事，你这么好色，你爸也差不多吧",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "今天杀个马",
                    desc: "我真的和吃了屎一样",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=2920914381&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "翅膀越多，飞得越高",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
            w.jsx(Ce, {
                columns: 4,
                rows: 1,
                children: w.jsx(ct, {
                    name: "希望吃两碗",
                    desc: "男人要学会喜新厌旧",
                    icon: w.jsx("img", { src: "http://q1.qlogo.cn/g?b=qq&nk=1274015773&s=100", alt: "Icon" })
                })
            }),
        ]
    })
}

function c0(e) {
    const t = r => {
            var u, c;
            const a = e.current.offsetWidth,
                o = e.current.offsetHeight,
                l = ((r == null ? void 0 : r.pageX) ?? ((u = r == null ? void 0 : r.touches[0]) == null ? void 0 : u.pageX)) - e.current.getBoundingClientRect().left - window.scrollX,
                i = 10 * (.5 - (((r == null ? void 0 : r.pageY) ?? ((c = r == null ? void 0 : r.touches[0]) == null ? void 0 : c.pageY)) - e.current.getBoundingClientRect().top - window.scrollY) / o),
                s = 10 * -(.5 - l / a);
            e.current.style.setProperty("--dx", `${i}deg`), e.current.style.setProperty("--dy", `${s}deg`)
        },
        n = r => { e.current.style.setProperty("--dx", "0deg"), e.current.style.setProperty("--dy", "0deg") };
    F.useEffect(() => (e.current.addEventListener("mousedown", t), e.current.addEventListener("mousemove", t), e.current.addEventListener("mouseleave", n), e.current.addEventListener("touchstart", t), e.current.addEventListener("touchmove", t), e.current.addEventListener("touchend", n), () => { e.current.removeEventListener("mousedown", t), e.current.removeEventListener("mousemove", t), e.current.removeEventListener("mouseleave", n), e.current.removeEventListener("touchstart", t), e.current.removeEventListener("touchmove", t), e.current.removeEventListener("touchend", n) }), [])
}

function Ce(e) { const t = F.useRef(null); return c0(t), w.jsx("div", { className: hd("widget", { "mobile-aspect-ratio": e.mobileAspectRatio, "mobile-specific-size": e.mColumns || e.mRows, "one-line": (e == null ? void 0 : e.rows) === 1 || (e == null ? void 0 : e.mRows) === 1, "one-line-mobile-only": (e == null ? void 0 : e.mRows) === 1 && ((e == null ? void 0 : e.rows) ?? (e == null ? void 0 : e.mRows)) !== 1, "one-line-pc-only": (e == null ? void 0 : e.rows) === 1 && ((e == null ? void 0 : e.mRows) ?? (e == null ? void 0 : e.rows)) !== 1 }), style: { "--columns": (e == null ? void 0 : e.columns) ?? 2, "--rows": (e == null ? void 0 : e.rows) ?? 2, ...e.mobileAspectRatio && { "--mobile-aspect-ratio": e.mobileAspectRatio }, ...e.mColumns && { "--m-columns": e.mColumns }, ...e.mRows && { "--m-rows": e.mRows } }, ref: t, children: e.children }) }

function ct(e) { return w.jsxs("a", { className: "weblink-widget", href: e.href, target: "_blank", draggable: "false", disabled: e.disabled, children: [w.jsxs("div", { className: "widget-content", children: [w.jsx("div", { className: "widget-icon", style: { "--bg": (e == null ? void 0 : e.iconBg) ?? "var(--md-sys-color-primary)", "--fg": (e == null ? void 0 : e.iconFg) ?? "#fff", ...e.iconSize && { "--size": e.iconSize } }, children: e.icon }), w.jsxs("div", { className: "widget-meta", children: [w.jsx("div", { className: "widget-name", children: e.name }), e.desc && w.jsx("div", { className: "widget-description", children: e.desc })] }), e.button && w.jsx("div", { className: "widget-button", children: e.button })] }), e.img && w.jsx("div", { className: "widget-image", children: w.jsx("div", { className: "widget-image-bg", style: { backgroundImage: `url(${e.img})`, ...e.imgSize && { backgroundSize: e.imgSize }, ...e.imgPos && { backgroundPosition: e.imgPos } } }) })] }) }

function ra(e) { return w.jsx("a", { className: "image-widget", href: e.href, target: "_blank", draggable: "false", disabled: e.disabled, style: { "--padding": e.padding, "--bg-color": e.bgColor }, children: w.jsx("div", { className: "widget-pure-img", style: { backgroundImage: `url(${e.img})`, ...e.imgSize && { "--bg-size": e.imgSize }, ...e.imgPos && { "--bg-pos": e.imgPos }, ...e.imgPixelated && { imageRendering: "pixelated" }, ...e.imgMSize && { "--bg-m-size": e.imgMSize }, ...e.imgMPos && { "--bg-m-pos": e.imgMPos } } }) }) }

function Rd(e) { const [t, n] = F.useState(new Date), r = e.timezone, { year: a, month: o, day: l, hour: i, minute: s, second: u } = function(f, h) { const v = {}; return new Intl.DateTimeFormat([], { timeZone: f, hour: "numeric", minute: "numeric", second: "numeric", hour12: !1, day: "numeric", month: "numeric", year: "numeric" }).formatToParts(h).forEach(({ type: k, value: M }) => { k !== "literal" && (v[k] = Number(M)) }), v.hour === 24 && (v.hour = 0), v }(r, t), c = F.useRef(new Date(new Date().setSeconds(0, 0))), d = -t.getTimezoneOffset() / 60, p = new Date(t.getTime() - t.getTime() % 1e3 - 60 * d * 60 * 1e3), m = (new Date(a, o - 1, l, i, s, u) - p) / 1e3 / 60 / 60, y = m === -4 ? "EDT" : "EST", b = m - d, g = () => { n(new Date) }; return F.useEffect(() => { const f = setInterval(g, 500); return () => clearInterval(f) }, []), w.jsxs("div", { className: "clock-widget", children: [w.jsxs("div", { className: "widget-clock-face", children: [w.jsx("svg", { className: "widget-clock-bg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 500 500", children: w.jsx("path", { d: "M469.881,324.15a90.631,90.631,0,0,1,7.616-28.425l15.88-32.267c3.642-7.4,3.642-19.514,0-26.916L477.5,204.275a90.631,90.631,0,0,1-7.616-28.425L467.5,139.967c-.547-8.232-6.6-18.722-13.459-23.311l-29.885-20a90.643,90.643,0,0,1-20.809-20.809l-20-29.885C378.755,39.1,368.265,33.047,360.033,32.5L324.15,30.119A90.631,90.631,0,0,1,295.725,22.5L263.458,6.623c-7.4-3.642-19.514-3.642-26.916,0L204.275,22.5a90.631,90.631,0,0,1-28.425,7.616L139.967,32.5c-8.232.547-18.722,6.6-23.311,13.459l-20,29.885A90.643,90.643,0,0,1,75.844,96.653l-29.885,20C39.1,121.245,33.047,131.735,32.5,139.967L30.119,175.85A90.631,90.631,0,0,1,22.5,204.275L6.623,236.542c-3.642,7.4-3.642,19.514,0,26.916L22.5,295.725a90.631,90.631,0,0,1,7.616,28.425L32.5,360.033c.546,8.232,6.6,18.722,13.458,23.311l29.885,20a90.643,90.643,0,0,1,20.809,20.809l20,29.885c4.589,6.856,15.079,12.912,23.311,13.459l35.883,2.381a90.631,90.631,0,0,1,28.425,7.616l32.267,15.88c7.4,3.642,19.514,3.642,26.916,0l32.267-15.88a90.631,90.631,0,0,1,28.425-7.616l35.883-2.381c8.232-.547,18.722-6.6,23.311-13.459l20-29.885a90.643,90.643,0,0,1,20.809-20.809l29.885-20c6.856-4.589,12.912-15.079,13.458-23.311Z" }) }), w.jsx("div", { className: "widget-clock-hand widget-clock-hour-hand", style: { transform: `rotate(${i%12/12*360+s/60*30+u/60/60*30}deg)` } }), w.jsx("div", { className: "widget-clock-hand widget-clock-minute-hand", style: { transform: `rotate(${s/60*360+u/60*6}deg)` } }), w.jsx("div", { className: "widget-clock-hand widget-clock-second-hand", style: { transform: `rotate(${360*Math.floor((t-c.current)/1e3/60)+u/60*360}deg)` } })] }), w.jsxs("div", { className: "widget-clock-text", children: [w.jsxs("div", { className: "widget-clock-date", children: [w.jsx("span", { className: "widget-clock-date-text", children: new Date(t.getTime() + 60 * b * 60 * 1e3).toLocaleDateString() }), " ", w.jsx("span", { className: "widget-clock-timezone-abbr", children: y })] }), w.jsxs("div", { className: "widget-clock-time", children: [w.jsx("span", { className: "widget-clock-hour", children: i.toString().padStart(2, "0") }), w.jsx("span", { className: "literal", children: ":" }), w.jsx("span", { className: "widget-clock-minute", children: s.toString().padStart(2, "0") }), w.jsx("span", { className: "literal", children: ":" }), w.jsx("span", { className: "widget-clock-second", children: u.toString().padStart(2, "0") })] }), w.jsxs("div", { className: "widget-clock-timezone", children: [w.jsx("span", { className: "widget-clock-timezone-diff", children: b === 0 ? "same time" : b > 0 ? `${Ul(b)} ahead` : `${Ul(-b)} behind` }), w.jsxs("span", { className: "widget-clock-timezone-utc-offset", children: [" ", "/ UTC ", m >= 0 ? "+" : "", md(m)] })] })] })] }) }
const zd = [{ name: "argon-theme", repo: "solstice23/argon-theme", desc: "Wordpress 主题" }, { name: "osu-stats-signature", repo: "solstice23/osu-stats-signature", desc: "生成实时更新的 osu! 个人资料卡片", descOverride: !0 }, { name: "BetterNCM", repo: "MicroCBer/BetterNCM" }, { name: "refined-now-playing-netease", repo: "solstice23/refined-now-playing-netease" }, { name: "material-you-theme-netease", repo: "solstice23/material-you-theme-netease", desc: "🎨 Material You - BetterNCM 主题", descOverride: !0 }, { name: "hexo-theme-argon", repo: "solstice23/hexo-theme-argon" }, { name: "osu-bar-overlay", repo: "solstice23/osu-bar-overlay" }, { name: "mimi-radio", repo: "solstice23/mimi-radio" }];

function Ad(e) {
    const [t, n] = F.useState(zd), r = F.useRef(!0);
    return F.useLayoutEffect(() => {
        var s;
        if (!r.current) return;
        r.current = !1;
        const a = (u, c) => u.map(d => { const p = c[d.repo]; return p && (d.meta = p), d }),
            o = JSON.parse(function(u, c) { const d = localStorage.getItem(u); return d === null ? c : d }("projects-data", "{}"));
        for (const u in o) + new Date - (((s = o[u]) == null ? void 0 : s.time) ?? 0) > 36e5 && delete o[u];
        localStorage.setItem("projects-data", JSON.stringify(o));
        let l = a(t, o);
        n(l);
        const i = l.filter(u => !u.meta);
        i.length !== 0 && async function() {
            const u = await fetch("https://github-repo-info-fetcher.s23.moe/getrepos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ repos: i.map(d => d.repo) }) }),
                c = await u.json();
            for (const d in c) o[d] = { time: +new Date, ...c[d] };
            localStorage.setItem("projects-data", JSON.stringify(o)), l = a(l, o), n(l)
        }()
    }, []), w.jsx("div", { className: "projects", children: t.map((a, o) => w.jsx(Dd, {...a }, o)) })
}

function Dd(e) {
    var l, i, s, u, c;
    const t = F.useRef(null);
    c0(t);
    const n = e != null && e.descOverride ? e == null ? void 0 : e.desc : (l = e.meta) == null ? void 0 : l.description,
        r = (i = e.meta) == null ? void 0 : i.stargazerCount,
        a = (s = e.meta) == null ? void 0 : s.forkCount,
        o = (c = (u = e.meta) == null ? void 0 : u.languages) == null ? void 0 : c.nodes[0];
    return w.jsx("div", { className: "project", ref: t, children: w.jsxs("a", { href: `https://github.com/${e.repo}`, target: "_blank", draggable: !1, children: [w.jsx("div", { className: "project-title", href: `https://github.com/${e.repo}`, target: "_blank", children: e.name }), w.jsx("div", { className: "project-description", children: n }), w.jsxs("div", { className: "project-metas", children: [w.jsxs("div", { className: "project-meta project-stars", children: [w.jsx(kd, {}), r === void 0 ? "-" : nu(r)] }), w.jsxs("div", { className: "project-meta project-forks", children: [w.jsx(Cd, {}), a === void 0 ? "-" : nu(a)] }), o && w.jsxs("div", { className: "project-meta project-language", children: [w.jsx("div", { className: "project-language-color", style: { backgroundColor: o.color } }), o.name] })] })] }) })
}
const Od = "" + new URL("100213166_p3-205d9b04.webp",
        import.meta.url).href,
    Fd = "" + new URL("100517229_p0-74b63bf7.webp",
        import.meta.url).href,
    jd = "" + new URL("100926353_p0-7c5f58a3.webp",
        import.meta.url).href,
    Ud = "" + new URL("103306309_p0-2eac4cb2.webp",
        import.meta.url).href,
    _d = "" + new URL("55325876_p0-3c69526b.webp",
        import.meta.url).href,
    Bd = "" + new URL("64050733_p0-fb7d6205.webp",
        import.meta.url).href,
    Vd = "" + new URL("66028042_p0-977c66d4.webp",
        import.meta.url).href,
    qd = "" + new URL("66986409_p0-1426eb82.webp",
        import.meta.url).href,
    Hd = "" + new URL("67047116_p0-6addf9e9.webp",
        import.meta.url).href,
    Wd = "" + new URL("69246838_p0-ac226694.webp",
        import.meta.url).href,
    Qd = "" + new URL("69618131_p0-921b5129.webp",
        import.meta.url).href,
    Gd = "" + new URL("69618131_p1-0eab8e6f.webp",
        import.meta.url).href,
    Yd = "" + new URL("70059505_p0-51f4f9d6.webp",
        import.meta.url).href,
    Jd = "" + new URL("71367795_p0-ed2a1424.webp",
        import.meta.url).href,
    Kd = "" + new URL("76388370_p0-39511b3d.webp",
        import.meta.url).href,
    Zd = "" + new URL("85389067_p1-a32b4457.webp",
        import.meta.url).href,
    Xd = "" + new URL("86845900_p0-d51d6ca2.webp",
        import.meta.url).href,
    $d = "" + new URL("89206202_p0-b02b46ad.webp",
        import.meta.url).href,
    ef = "" + new URL("90848911_p0-5dd94cd4.webp",
        import.meta.url).href,
    tf = "" + new URL("91814999_p0-f22a7c24.webp",
        import.meta.url).href,
    nf = "" + new URL("92580718_p0-cde4bd9e.webp",
        import.meta.url).href,
    rf = "" + new URL("93719055_p0-f84621e4.webp",
        import.meta.url).href,
    af = "" + new URL("98260510_p0-9728fd3c.webp",
        import.meta.url).href;

function Ee(e) { return e < 0 ? -1 : e === 0 ? 0 : 1 }

function ru(e, t, n) { return (1 - n) * e + n * t }

function pr(e, t, n) { return n < e ? e : n > t ? t : n }

function _l(e) { return (e %= 360) < 0 && (e += 360), e }

function d0(e, t) { return 180 - Math.abs(Math.abs(e - t) - 180) }

function Bl(e, t) { return [e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2], e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2], e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]] }
const f0 = [
        [.41233895, .35762064, .18051042],
        [.2126, .7152, .0722],
        [.01932141, .11916382, .95034478]
    ],
    of = [
        [3.2413774792388685, -1.5376652402851851, -.49885366846268053],
        [-.9691452513005321, 1.8758853451067872, .04156585616912061],
        [.05562093689691305, -.20395524564742123, 1.0571799111220335]
    ],
    ar = [95.047, 100, 108.883];

function Ii(e, t, n) { return (255 << 24 | (255 & e) << 16 | (255 & t) << 8 | 255 & n) >>> 0 }

function au(e) { return Ii(nn(e[0]), nn(e[1]), nn(e[2])) }

function eo(e) { return e >> 16 & 255 }

function to(e) { return e >> 8 & 255 }

function no(e) { return 255 & e }

function p0(e, t, n) {
    const r = of,
        a = r[0][0] * e + r[0][1] * t + r[0][2] * n,
        o = r[1][0] * e + r[1][1] * t + r[1][2] * n,
        l = r[2][0] * e + r[2][1] * t + r[2][2] * n;
    return Ii(nn(a), nn(o), nn(l))
}

function qa(e) { const t = function(n) { return Bl([bt(eo(n)), bt(to(n)), bt(no(n))], f0) }(e)[1]; return 116 * hr(t / 100) - 16 }

function Lt(e) { return 100 * ka((e + 16) / 116) }

function Vl(e) { return 116 * hr(e / 100) - 16 }

function bt(e) { const t = e / 255; return t <= .040449936 ? t / 12.92 * 100 : 100 * Math.pow((t + .055) / 1.055, 2.4) }

function nn(e) { const t = e / 100; let n = 0; return n = t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055, r = 0, a = 255, (o = Math.round(255 * n)) < r ? r : o > a ? a : o; var r, a, o }

function hr(e) { return e > 216 / 24389 ? Math.pow(e, 1 / 3) : (903.2962962962963 * e + 16) / 116 }

function ka(e) { const t = e * e * e; return t > 216 / 24389 ? t : (116 * e - 16) / 903.2962962962963 }
class Ye {
    static make(t = function() { return ar }(), n = 200 / Math.PI * Lt(50) / 100, r = 50, a = 2, o = !1) {
        const l = t,
            i = .401288 * l[0] + .650173 * l[1] + -.051461 * l[2],
            s = -.250268 * l[0] + 1.204414 * l[1] + .045854 * l[2],
            u = -.002079 * l[0] + .048952 * l[1] + .953127 * l[2],
            c = .8 + a / 10,
            d = c >= .9 ? ru(.59, .69, 10 * (c - .9)) : ru(.525, .59, 10 * (c - .8));
        let p = o ? 1 : c * (1 - 1 / 3.6 * Math.exp((-n - 42) / 92));
        p = p > 1 ? 1 : p < 0 ? 0 : p;
        const m = c,
            y = [p * (100 / i) + 1 - p, p * (100 / s) + 1 - p, p * (100 / u) + 1 - p],
            b = 1 / (5 * n + 1),
            g = b * b * b * b,
            f = 1 - g,
            h = g * n + .1 * f * f * Math.cbrt(5 * n),
            v = Lt(r) / t[1],
            k = 1.48 + Math.sqrt(v),
            M = .725 / Math.pow(v, .2),
            S = M,
            x = [Math.pow(h * y[0] * i / 100, .42), Math.pow(h * y[1] * s / 100, .42), Math.pow(h * y[2] * u / 100, .42)],
            E = [400 * x[0] / (x[0] + 27.13), 400 * x[1] / (x[1] + 27.13), 400 * x[2] / (x[2] + 27.13)];
        return new Ye(v, (2 * E[0] + E[1] + .05 * E[2]) * M, M, S, d, m, y, h, Math.pow(h, .25), k)
    }
    constructor(t, n, r, a, o, l, i, s, u, c) { this.n = t, this.aw = n, this.nbb = r, this.ncb = a, this.c = o, this.nc = l, this.rgbD = i, this.fl = s, this.fLRoot = u, this.z = c }
}
Ye.DEFAULT = Ye.make();
class ne {
    constructor(t, n, r, a, o, l, i, s, u) { this.hue = t, this.chroma = n, this.j = r, this.q = a, this.m = o, this.s = l, this.jstar = i, this.astar = s, this.bstar = u }
    distance(t) {
        const n = this.jstar - t.jstar,
            r = this.astar - t.astar,
            a = this.bstar - t.bstar,
            o = Math.sqrt(n * n + r * r + a * a);
        return 1.41 * Math.pow(o, .63)
    }
    static fromInt(t) { return ne.fromIntInViewingConditions(t, Ye.DEFAULT) }
    static fromIntInViewingConditions(t, n) {
        const r = (65280 & t) >> 8,
            a = 255 & t,
            o = bt((16711680 & t) >> 16),
            l = bt(r),
            i = bt(a),
            s = .41233895 * o + .35762064 * l + .18051042 * i,
            u = .2126 * o + .7152 * l + .0722 * i,
            c = .01932141 * o + .11916382 * l + .95034478 * i,
            d = .401288 * s + .650173 * u - .051461 * c,
            p = -.250268 * s + 1.204414 * u + .045854 * c,
            m = -.002079 * s + .048952 * u + .953127 * c,
            y = n.rgbD[0] * d,
            b = n.rgbD[1] * p,
            g = n.rgbD[2] * m,
            f = Math.pow(n.fl * Math.abs(y) / 100, .42),
            h = Math.pow(n.fl * Math.abs(b) / 100, .42),
            v = Math.pow(n.fl * Math.abs(g) / 100, .42),
            k = 400 * Ee(y) * f / (f + 27.13),
            M = 400 * Ee(b) * h / (h + 27.13),
            S = 400 * Ee(g) * v / (v + 27.13),
            x = (11 * k + -12 * M + S) / 11,
            E = (k + M - 2 * S) / 9,
            I = (20 * k + 20 * M + 21 * S) / 20,
            z = (40 * k + 20 * M + S) / 20,
            W = 180 * Math.atan2(E, x) / Math.PI,
            ie = W < 0 ? W + 360 : W >= 360 ? W - 360 : W,
            me = ie * Math.PI / 180,
            de = z * n.nbb,
            ge = 100 * Math.pow(de / n.aw, n.c * n.z),
            Se = 4 / n.c * Math.sqrt(ge / 100) * (n.aw + 4) * n.fLRoot,
            Xe = ie < 20.14 ? ie + 360 : ie,
            N = 5e4 / 13 * (.25 * (Math.cos(Xe * Math.PI / 180 + 2) + 3.8)) * n.nc * n.ncb * Math.sqrt(x * x + E * E) / (I + .305),
            A = Math.pow(N, .9) * Math.pow(1.64 - Math.pow(.29, n.n), .73),
            D = A * Math.sqrt(ge / 100),
            V = D * n.fLRoot,
            ee = 50 * Math.sqrt(A * n.c / (n.aw + 4)),
            un = (1 + 100 * .007) * ge / (1 + .007 * ge),
            $e = 1 / .0228 * Math.log(1 + .0228 * V),
            Bn = $e * Math.cos(me),
            st = $e * Math.sin(me);
        return new ne(ie, D, ge, Se, V, ee, un, Bn, st)
    }
    static fromJch(t, n, r) { return ne.fromJchInViewingConditions(t, n, r, Ye.DEFAULT) }
    static fromJchInViewingConditions(t, n, r, a) {
        const o = 4 / a.c * Math.sqrt(t / 100) * (a.aw + 4) * a.fLRoot,
            l = n * a.fLRoot,
            i = n / Math.sqrt(t / 100),
            s = 50 * Math.sqrt(i * a.c / (a.aw + 4)),
            u = r * Math.PI / 180,
            c = (1 + 100 * .007) * t / (1 + .007 * t),
            d = 1 / .0228 * Math.log(1 + .0228 * l),
            p = d * Math.cos(u),
            m = d * Math.sin(u);
        return new ne(r, n, t, o, l, s, c, p, m)
    }
    static fromUcs(t, n, r) { return ne.fromUcsInViewingConditions(t, n, r, Ye.DEFAULT) }
    static fromUcsInViewingConditions(t, n, r, a) {
        const o = n,
            l = r,
            i = Math.sqrt(o * o + l * l),
            s = (Math.exp(.0228 * i) - 1) / .0228 / a.fLRoot;
        let u = Math.atan2(l, o) * (180 / Math.PI);
        u < 0 && (u += 360);
        const c = t / (1 - .007 * (t - 100));
        return ne.fromJchInViewingConditions(c, s, u, a)
    }
    toInt() { return this.viewed(Ye.DEFAULT) }
    viewed(t) {
        const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
            r = Math.pow(n / Math.pow(1.64 - Math.pow(.29, t.n), .73), 1 / .9),
            a = this.hue * Math.PI / 180,
            o = .25 * (Math.cos(a + 2) + 3.8),
            l = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z),
            i = o * (5e4 / 13) * t.nc * t.ncb,
            s = l / t.nbb,
            u = Math.sin(a),
            c = Math.cos(a),
            d = 23 * (s + .305) * r / (23 * i + 11 * r * c + 108 * r * u),
            p = d * c,
            m = d * u,
            y = (460 * s + 451 * p + 288 * m) / 1403,
            b = (460 * s - 891 * p - 261 * m) / 1403,
            g = (460 * s - 220 * p - 6300 * m) / 1403,
            f = Math.max(0, 27.13 * Math.abs(y) / (400 - Math.abs(y))),
            h = Ee(y) * (100 / t.fl) * Math.pow(f, 1 / .42),
            v = Math.max(0, 27.13 * Math.abs(b) / (400 - Math.abs(b))),
            k = Ee(b) * (100 / t.fl) * Math.pow(v, 1 / .42),
            M = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))),
            S = Ee(g) * (100 / t.fl) * Math.pow(M, 1 / .42),
            x = h / t.rgbD[0],
            E = k / t.rgbD[1],
            I = S / t.rgbD[2];
        return p0(1.86206786 * x - 1.01125463 * E + .14918677 * I, .38752654 * x + .62144744 * E - .00897398 * I, -.0158415 * x - .03412294 * E + 1.04996444 * I)
    }
    static fromXyzInViewingConditions(t, n, r, a) {
        const o = .401288 * t + .650173 * n - .051461 * r,
            l = -.250268 * t + 1.204414 * n + .045854 * r,
            i = -.002079 * t + .048952 * n + .953127 * r,
            s = a.rgbD[0] * o,
            u = a.rgbD[1] * l,
            c = a.rgbD[2] * i,
            d = Math.pow(a.fl * Math.abs(s) / 100, .42),
            p = Math.pow(a.fl * Math.abs(u) / 100, .42),
            m = Math.pow(a.fl * Math.abs(c) / 100, .42),
            y = 400 * Ee(s) * d / (d + 27.13),
            b = 400 * Ee(u) * p / (p + 27.13),
            g = 400 * Ee(c) * m / (m + 27.13),
            f = (11 * y + -12 * b + g) / 11,
            h = (y + b - 2 * g) / 9,
            v = (20 * y + 20 * b + 21 * g) / 20,
            k = (40 * y + 20 * b + g) / 20,
            M = 180 * Math.atan2(h, f) / Math.PI,
            S = M < 0 ? M + 360 : M >= 360 ? M - 360 : M,
            x = S * Math.PI / 180,
            E = k * a.nbb,
            I = 100 * Math.pow(E / a.aw, a.c * a.z),
            z = 4 / a.c * Math.sqrt(I / 100) * (a.aw + 4) * a.fLRoot,
            W = S < 20.14 ? S + 360 : S,
            ie = 5e4 / 13 * (1 / 4 * (Math.cos(W * Math.PI / 180 + 2) + 3.8)) * a.nc * a.ncb * Math.sqrt(f * f + h * h) / (v + .305),
            me = Math.pow(ie, .9) * Math.pow(1.64 - Math.pow(.29, a.n), .73),
            de = me * Math.sqrt(I / 100),
            ge = de * a.fLRoot,
            Se = 50 * Math.sqrt(me * a.c / (a.aw + 4)),
            Xe = (1 + 100 * .007) * I / (1 + .007 * I),
            N = Math.log(1 + .0228 * ge) / .0228,
            A = N * Math.cos(x),
            D = N * Math.sin(x);
        return new ne(S, de, I, z, ge, Se, Xe, A, D)
    }
    xyzInViewingConditions(t) {
        const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
            r = Math.pow(n / Math.pow(1.64 - Math.pow(.29, t.n), .73), 1 / .9),
            a = this.hue * Math.PI / 180,
            o = .25 * (Math.cos(a + 2) + 3.8),
            l = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z),
            i = o * (5e4 / 13) * t.nc * t.ncb,
            s = l / t.nbb,
            u = Math.sin(a),
            c = Math.cos(a),
            d = 23 * (s + .305) * r / (23 * i + 11 * r * c + 108 * r * u),
            p = d * c,
            m = d * u,
            y = (460 * s + 451 * p + 288 * m) / 1403,
            b = (460 * s - 891 * p - 261 * m) / 1403,
            g = (460 * s - 220 * p - 6300 * m) / 1403,
            f = Math.max(0, 27.13 * Math.abs(y) / (400 - Math.abs(y))),
            h = Ee(y) * (100 / t.fl) * Math.pow(f, 1 / .42),
            v = Math.max(0, 27.13 * Math.abs(b) / (400 - Math.abs(b))),
            k = Ee(b) * (100 / t.fl) * Math.pow(v, 1 / .42),
            M = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))),
            S = Ee(g) * (100 / t.fl) * Math.pow(M, 1 / .42),
            x = h / t.rgbD[0],
            E = k / t.rgbD[1],
            I = S / t.rgbD[2];
        return [1.86206786 * x - 1.01125463 * E + .14918677 * I, .38752654 * x + .62144744 * E - .00897398 * I, -.0158415 * x - .03412294 * E + 1.04996444 * I]
    }
}
class R {
    static sanitizeRadians(t) { return (t + 8 * Math.PI) % (2 * Math.PI) }
    static trueDelinearized(t) { const n = t / 100; let r = 0; return r = n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055, 255 * r }
    static chromaticAdaptation(t) { const n = Math.pow(Math.abs(t), .42); return 400 * Ee(t) * n / (n + 27.13) }
    static hueOf(t) {
        const n = Bl(t, R.SCALED_DISCOUNT_FROM_LINRGB),
            r = R.chromaticAdaptation(n[0]),
            a = R.chromaticAdaptation(n[1]),
            o = R.chromaticAdaptation(n[2]),
            l = (11 * r + -12 * a + o) / 11,
            i = (r + a - 2 * o) / 9;
        return Math.atan2(i, l)
    }
    static areInCyclicOrder(t, n, r) { return R.sanitizeRadians(n - t) < R.sanitizeRadians(r - t) }
    static intercept(t, n, r) { return (n - t) / (r - t) }
    static lerpPoint(t, n, r) { return [t[0] + (r[0] - t[0]) * n, t[1] + (r[1] - t[1]) * n, t[2] + (r[2] - t[2]) * n] }
    static setCoordinate(t, n, r, a) { const o = R.intercept(t[a], n, r[a]); return R.lerpPoint(t, o, r) }
    static isBounded(t) { return 0 <= t && t <= 100 }
    static nthVertex(t, n) {
        const r = R.Y_FROM_LINRGB[0],
            a = R.Y_FROM_LINRGB[1],
            o = R.Y_FROM_LINRGB[2],
            l = n % 4 <= 1 ? 0 : 100,
            i = n % 2 == 0 ? 0 : 100;
        if (n < 4) {
            const s = l,
                u = i,
                c = (t - s * a - u * o) / r;
            return R.isBounded(c) ? [c, s, u] : [-1, -1, -1]
        }
        if (n < 8) {
            const s = l,
                u = i,
                c = (t - u * r - s * o) / a;
            return R.isBounded(c) ? [u, c, s] : [-1, -1, -1]
        } {
            const s = l,
                u = i,
                c = (t - s * r - u * a) / o;
            return R.isBounded(c) ? [s, u, c] : [-1, -1, -1]
        }
    }
    static bisectToSegment(t, n) {
        let r = [-1, -1, -1],
            a = r,
            o = 0,
            l = 0,
            i = !1,
            s = !0;
        for (let u = 0; u < 12; u++) {
            const c = R.nthVertex(t, u);
            if (c[0] < 0) continue;
            const d = R.hueOf(c);
            i ? (s || R.areInCyclicOrder(o, d, l)) && (s = !1, R.areInCyclicOrder(o, n, d) ? (a = c, l = d) : (r = c, o = d)) : (r = c, a = c, o = d, l = d, i = !0)
        }
        return [r, a]
    }
    static midpoint(t, n) { return [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2, (t[2] + n[2]) / 2] }
    static criticalPlaneBelow(t) { return Math.floor(t - .5) }
    static criticalPlaneAbove(t) { return Math.ceil(t - .5) }
    static bisectToLimit(t, n) {
        const r = R.bisectToSegment(t, n);
        let a = r[0],
            o = R.hueOf(a),
            l = r[1];
        for (let i = 0; i < 3; i++)
            if (a[i] !== l[i]) {
                let s = -1,
                    u = 255;
                a[i] < l[i] ? (s = R.criticalPlaneBelow(R.trueDelinearized(a[i])), u = R.criticalPlaneAbove(R.trueDelinearized(l[i]))) : (s = R.criticalPlaneAbove(R.trueDelinearized(a[i])), u = R.criticalPlaneBelow(R.trueDelinearized(l[i])));
                for (let c = 0; c < 8 && !(Math.abs(u - s) <= 1); c++) {
                    const d = Math.floor((s + u) / 2),
                        p = R.CRITICAL_PLANES[d],
                        m = R.setCoordinate(a, p, l, i),
                        y = R.hueOf(m);
                    R.areInCyclicOrder(o, n, y) ? (l = m, u = d) : (a = m, o = y, s = d)
                }
            }
        return R.midpoint(a, l)
    }
    static inverseChromaticAdaptation(t) {
        const n = Math.abs(t),
            r = Math.max(0, 27.13 * n / (400 - n));
        return Ee(t) * Math.pow(r, 1 / .42)
    }
    static findResultByJ(t, n, r) {
        let a = 11 * Math.sqrt(r);
        const o = Ye.DEFAULT,
            l = 1 / Math.pow(1.64 - Math.pow(.29, o.n), .73),
            i = .25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * o.nc * o.ncb,
            s = Math.sin(t),
            u = Math.cos(t);
        for (let c = 0; c < 5; c++) {
            const d = a / 100,
                p = n === 0 || a === 0 ? 0 : n / Math.sqrt(d),
                m = Math.pow(p * l, 1 / .9),
                y = o.aw * Math.pow(d, 1 / o.c / o.z) / o.nbb,
                b = 23 * (y + .305) * m / (23 * i + 11 * m * u + 108 * m * s),
                g = b * u,
                f = b * s,
                h = (460 * y + 451 * g + 288 * f) / 1403,
                v = (460 * y - 891 * g - 261 * f) / 1403,
                k = (460 * y - 220 * g - 6300 * f) / 1403,
                M = Bl([R.inverseChromaticAdaptation(h), R.inverseChromaticAdaptation(v), R.inverseChromaticAdaptation(k)], R.LINRGB_FROM_SCALED_DISCOUNT);
            if (M[0] < 0 || M[1] < 0 || M[2] < 0) return 0;
            const S = R.Y_FROM_LINRGB[0],
                x = R.Y_FROM_LINRGB[1],
                E = R.Y_FROM_LINRGB[2],
                I = S * M[0] + x * M[1] + E * M[2];
            if (I <= 0) return 0;
            if (c === 4 || Math.abs(I - r) < .002) return M[0] > 100.01 || M[1] > 100.01 || M[2] > 100.01 ? 0 : au(M);
            a -= (I - r) * a / (2 * I)
        }
        return 0
    }
    static solveToInt(t, n, r) {
        if (n < 1e-4 || r < 1e-4 || r > 99.9999) return function(i) { const s = nn(Lt(i)); return Ii(s, s, s) }(r);
        const a = (t = _l(t)) / 180 * Math.PI,
            o = Lt(r),
            l = R.findResultByJ(a, n, o);
        return l !== 0 ? l : au(R.bisectToLimit(o, a))
    }
    static solveToCam(t, n, r) { return ne.fromInt(R.solveToInt(t, n, r)) }
}
R.SCALED_DISCOUNT_FROM_LINRGB = [
    [.001200833568784504, .002389694492170889, .0002795742885861124],
    [.0005891086651375999, .0029785502573438758, .0003270666104008398],
    [.00010146692491640572, .0005364214359186694, .0032979401770712076]
], R.LINRGB_FROM_SCALED_DISCOUNT = [
    [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
    [-271.815969077903, 559.6580465940733, -32.46047482791194],
    [1.9622899599665666, -57.173814538844006, 308.7233197812385]
], R.Y_FROM_LINRGB = [.2126, .7152, .0722], R.CRITICAL_PLANES = [.015176349177441876, .045529047532325624, .07588174588720938, .10623444424209313, .13658714259697685, .16693984095186062, .19729253930674434, .2276452376616281, .2579979360165119, .28835063437139563, .3188300904430532, .350925934958123, .3848314933096426, .42057480301049466, .458183274052838, .4976837250274023, .5391024159806381, .5824650784040898, .6277969426914107, .6751227633498623, .7244668422128921, .775853049866786, .829304845476233, .8848452951698498, .942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class X {
    static from(t, n, r) { return new X(R.solveToInt(t, n, r)) }
    static fromInt(t) { return new X(t) }
    toInt() { return this.argb }
    get hue() { return this.internalHue }
    set hue(t) { this.setInternalState(R.solveToInt(t, this.internalChroma, this.internalTone)) }
    get chroma() { return this.internalChroma }
    set chroma(t) { this.setInternalState(R.solveToInt(this.internalHue, t, this.internalTone)) }
    get tone() { return this.internalTone }
    set tone(t) { this.setInternalState(R.solveToInt(this.internalHue, this.internalChroma, t)) }
    constructor(t) {
        this.argb = t;
        const n = ne.fromInt(t);
        this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = qa(t), this.argb = t
    }
    setInternalState(t) {
        const n = ne.fromInt(t);
        this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = qa(t), this.argb = t
    }
    inViewingConditions(t) {
        const n = ne.fromInt(this.toInt()).xyzInViewingConditions(t),
            r = ne.fromXyzInViewingConditions(n[0], n[1], n[2], Ye.make());
        return X.from(r.hue, r.chroma, Vl(n[1]))
    }
}
class Ti {
    static harmonize(t, n) {
        const r = X.fromInt(t),
            a = X.fromInt(n),
            o = d0(r.hue, a.hue),
            l = Math.min(.5 * o, 15),
            i = _l(r.hue + l * (s = r.hue, _l(a.hue - s) <= 180 ? 1 : -1));
        var s;
        return X.from(i, r.chroma, r.tone).toInt()
    }
    static hctHue(t, n, r) {
        const a = Ti.cam16Ucs(t, n, r),
            o = ne.fromInt(a),
            l = ne.fromInt(t);
        return X.from(o.hue, l.chroma, qa(t)).toInt()
    }
    static cam16Ucs(t, n, r) {
        const a = ne.fromInt(t),
            o = ne.fromInt(n),
            l = a.jstar,
            i = a.astar,
            s = a.bstar,
            u = l + (o.jstar - l) * r,
            c = i + (o.astar - i) * r,
            d = s + (o.bstar - s) * r;
        return ne.fromUcs(u, c, d).toInt()
    }
}
class ke {
    static ratioOfTones(t, n) { return t = pr(0, 100, t), n = pr(0, 100, n), ke.ratioOfYs(Lt(t), Lt(n)) }
    static ratioOfYs(t, n) { const r = t > n ? t : n; return (r + 5) / ((r === n ? t : n) + 5) }
    static lighter(t, n) {
        if (t < 0 || t > 100) return -1;
        const r = Lt(t),
            a = n * (r + 5) - 5,
            o = ke.ratioOfYs(a, r),
            l = Math.abs(o - n);
        if (o < n && l > .04) return -1;
        const i = Vl(a) + .4;
        return i < 0 || i > 100 ? -1 : i
    }
    static darker(t, n) {
        if (t < 0 || t > 100) return -1;
        const r = Lt(t),
            a = (r + 5) / n - 5,
            o = ke.ratioOfYs(r, a),
            l = Math.abs(o - n);
        if (o < n && l > .04) return -1;
        const i = Vl(a) - .4;
        return i < 0 || i > 100 ? -1 : i
    }
    static lighterUnsafe(t, n) { const r = ke.lighter(t, n); return r < 0 ? 100 : r }
    static darkerUnsafe(t, n) { const r = ke.darker(t, n); return r < 0 ? 0 : r }
}
class Ni {
    static isDisliked(t) {
        const n = Math.round(t.hue) >= 90 && Math.round(t.hue) <= 111,
            r = Math.round(t.chroma) > 16,
            a = Math.round(t.tone) < 65;
        return n && r && a
    }
    static fixIfDisliked(t) { return Ni.isDisliked(t) ? X.from(t.hue, t.chroma, 70) : t }
}
class T {
    static fromPalette(t) { return new T(n => t.palette(n).hue, n => t.palette(n).chroma, t.tone, n => T.toneMinContrastDefault({ tone: t.tone, scheme: n, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }), n => T.toneMaxContrastDefault({ tone: t.tone, scheme: n, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }), t.background, t.toneDeltaConstraint) }
    static fromHueAndChroma(t) { return new T(t.hue, t.chroma, t.tone, n => T.toneMinContrastDefault({ tone: t.tone, scheme: n, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }), n => T.toneMaxContrastDefault({ tone: t.tone, scheme: n, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }), t.background, t.toneDeltaConstraint) }
    static fromArgb(t) { return new T(n => X.fromInt(t.argb(n)).hue, n => X.fromInt(t.argb(n)).chroma, n => { var r; return ((r = t.tone) == null ? void 0 : r.call(t, n)) ?? X.fromInt(t.argb(n)).tone }, n => T.toneMinContrastDefault({ tone: r => { var a; return ((a = t.tone) == null ? void 0 : a.call(t, r)) ?? X.fromInt(t.argb(r)).tone }, scheme: n, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }), n => T.toneMaxContrastDefault({ tone: r => { var a; return ((a = t.tone) == null ? void 0 : a.call(t, r)) ?? X.fromInt(t.argb(r)).tone }, scheme: n, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }), t.background, t.toneDeltaConstraint) }
    constructor(t, n, r, a, o, l, i) { this.hue = t, this.chroma = n, this.tone = r, this.toneMinContrast = a, this.toneMaxContrast = o, this.background = l, this.toneDeltaConstraint = i, this.hctCache = new Map }
    getArgb(t) { return this.getHct(t).toInt() }
    getHct(t) { const n = this.hctCache.get(t); if (n != null) return n; const r = X.from(this.hue(t), this.chroma(t), this.getTone(t)); return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(t, r), r }
    getTone(t) {
        var s, u;
        let n = this.tone(t);
        const r = t.contrastLevel < 0;
        if (t.contrastLevel !== 0) {
            const c = this.tone(t);
            n = ((r ? this.toneMinContrast(t) : this.toneMaxContrast(t)) - c) * Math.abs(t.contrastLevel) + c
        }
        const a = (s = this.background) == null ? void 0 : s.call(this, t);
        let o, l, i;
        if (a != null) {
            const c = ((u = a == null ? void 0 : a.background) == null ? void 0 : u.call(a, t)) != null;
            if (o = ke.ratioOfTones(this.tone(t), a.tone(t)), r) {
                const d = ke.ratioOfTones(this.toneMinContrast(t), a.toneMinContrast(t));
                l = c ? d : null, i = o
            } else {
                const d = ke.ratioOfTones(this.toneMaxContrast(t), a.toneMaxContrast(t));
                l = c ? Math.min(d, o) : null, i = c ? Math.max(d, o) : null
            }
        }
        return n = T.calculateDynamicTone({ scheme: t, toneStandard: this.tone, toneToJudge: c => c.getTone(t), desiredTone: (c, d) => n, background: a != null ? c => a : void 0, toneDeltaConstraint: this.toneDeltaConstraint, minRatio: c => l ?? 1, maxRatio: c => i ?? 21 }), n
    }
    static ensureToneDelta(t, n, r, a, o) {
        const l = a ? a(r) : null;
        if (l == null || o == null) return t;
        const i = l.delta,
            s = o(l.keepAway),
            u = Math.abs(t - s);
        if (u > i) return t;
        switch (l.keepAwayPolarity) {
            case "darker":
                return pr(0, 100, s + i);
            case "lighter":
                return pr(0, 100, s - i);
            case "no-preference":
                const c = n > l.keepAway.tone(r),
                    d = Math.abs(u - i);
                return (c ? t + d <= 100 : t < d) ? t + d : t - d;
            default:
                return t
        }
    }
    static foregroundTone(t, n) {
        const r = ke.lighterUnsafe(t, n),
            a = ke.darkerUnsafe(t, n),
            o = ke.ratioOfTones(r, t),
            l = ke.ratioOfTones(a, t);
        if (T.tonePrefersLightForeground(t)) { const i = Math.abs(o - l) < .1 && o < n && l < n; return o >= n || o >= l || i ? r : a }
        return l >= n || l >= o ? a : r
    }
    static calculateDynamicTone(t) {
        var v;
        const n = t.background,
            r = t.scheme,
            a = t.toneStandard,
            o = t.toneToJudge,
            l = t.desiredTone,
            i = t.minRatio,
            s = t.maxRatio,
            u = t.toneDeltaConstraint,
            c = a(r);
        let d = c;
        const p = n == null ? void 0 : n(r);
        if (p == null) return d;
        const m = p.tone(r),
            y = ke.ratioOfTones(c, m),
            b = o(p),
            g = l(y, b),
            f = ke.ratioOfTones(b, g),
            h = pr((i == null ? void 0 : i(y)) ?? 1, (s == null ? void 0 : s(y)) ?? 21, f);
        return d = h === f ? g : T.foregroundTone(b, h), ((v = p.background) == null ? void 0 : v.call(p, r)) == null && (d = T.enableLightForeground(d)), d = T.ensureToneDelta(d, c, r, u, k => o(k)), d
    }
    static toneMaxContrastDefault(t) { return T.calculateDynamicTone({ scheme: t.scheme, toneStandard: t.tone, toneToJudge: n => n.toneMaxContrast(t.scheme), desiredTone: (n, r) => { var a, o, l; return ((l = (o = (a = t.background) == null ? void 0 : a.call(t, t.scheme)) == null ? void 0 : o.background) == null ? void 0 : l.call(o, t.scheme)) != null ? T.foregroundTone(r, 7) : T.foregroundTone(r, Math.max(7, n)) }, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint }) }
    static toneMinContrastDefault(t) { return T.calculateDynamicTone({ scheme: t.scheme, toneStandard: t.tone, toneToJudge: n => n.toneMinContrast(t.scheme), desiredTone: (n, r) => { var o, l, i; let a = t.tone(t.scheme); return n >= 7 ? a = T.foregroundTone(r, 4.5) : n >= 3 ? a = T.foregroundTone(r, 3) : ((i = (l = (o = t.background) == null ? void 0 : o.call(t, t.scheme)) == null ? void 0 : l.background) == null ? void 0 : i.call(l, t.scheme)) != null && (a = T.foregroundTone(r, n)), a }, background: t.background, toneDeltaConstraint: t.toneDeltaConstraint, minRatio: n => 1, maxRatio: n => n }) }
    static tonePrefersLightForeground(t) { return Math.round(t) < 60 }
    static toneAllowsLightForeground(t) { return Math.round(t) <= 49 }
    static enableLightForeground(t) { return T.tonePrefersLightForeground(t) && !T.toneAllowsLightForeground(t) ? 49 : t }
}
var zr;
(function(e) { e[e.MONOCHROME = 0] = "MONOCHROME", e[e.NEUTRAL = 1] = "NEUTRAL", e[e.TONAL_SPOT = 2] = "TONAL_SPOT", e[e.VIBRANT = 3] = "VIBRANT", e[e.EXPRESSIVE = 4] = "EXPRESSIVE", e[e.FIDELITY = 5] = "FIDELITY", e[e.CONTENT = 6] = "CONTENT" })(zr || (zr = {}));
class aa { constructor(t, n, r) { this.delta = t, this.keepAway = n, this.keepAwayPolarity = r } }

function fn(e) { return e.variant === zr.FIDELITY || e.variant === zr.CONTENT }

function K(e) { return e.variant === zr.MONOCHROME }

function Ho(e, t) { const n = e.inViewingConditions(function(r) { return Ye.make(void 0, void 0, r.isDark ? 30 : 80, void 0, void 0) }(t)); return T.tonePrefersLightForeground(e.tone) && !T.toneAllowsLightForeground(n.tone) ? T.enableLightForeground(e.tone) : T.enableLightForeground(n.tone) }
class C { static highestSurface(t) { return t.isDark ? C.surfaceBright : C.surfaceDim } }
C.contentAccentToneDelta = 15, C.background = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 6 : 98 }), C.onBackground = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 90 : 10, background: e => C.background }), C.surface = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 6 : 98 }), C.surfaceDim = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 6 : 87 }), C.surfaceBright = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 24 : 98 }), C.surfaceContainerLowest = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 4 : 100 }), C.surfaceContainerLow = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 10 : 96 }), C.surfaceContainer = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 12 : 94 }), C.surfaceContainerHigh = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 17 : 92 }), C.surfaceContainerHighest = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 22 : 90 }), C.onSurface = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 90 : 10, background: e => C.highestSurface(e) }), C.surfaceVariant = T.fromPalette({ palette: e => e.neutralVariantPalette, tone: e => e.isDark ? 30 : 90 }), C.onSurfaceVariant = T.fromPalette({ palette: e => e.neutralVariantPalette, tone: e => e.isDark ? 80 : 30, background: e => C.surfaceVariant }), C.inverseSurface = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 90 : 20 }), C.inverseOnSurface = T.fromPalette({ palette: e => e.neutralPalette, tone: e => e.isDark ? 20 : 95, background: e => C.inverseSurface }), C.outline = T.fromPalette({ palette: e => e.neutralVariantPalette, tone: e => 50, background: e => C.highestSurface(e) }), C.outlineVariant = T.fromPalette({ palette: e => e.neutralVariantPalette, tone: e => e.isDark ? 30 : 80, background: e => C.highestSurface(e) }), C.shadow = T.fromPalette({ palette: e => e.neutralPalette, tone: e => 0 }), C.scrim = T.fromPalette({ palette: e => e.neutralPalette, tone: e => 0 }), C.surfaceTintColor = T.fromPalette({ palette: e => e.primaryPalette, tone: e => e.isDark ? 80 : 40 }), C.primary = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 100 : 0 : e.isDark ? 80 : 40, background: e => C.highestSurface(e), toneDeltaConstraint: e => new aa(C.contentAccentToneDelta, C.primaryContainer, e.isDark ? "darker" : "lighter") }), C.onPrimary = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100, background: e => C.primary }), C.primaryContainer = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 85 : 25 : fn(e) ? Ho(e.sourceColorHct, e) : e.isDark ? 30 : 90, background: e => C.highestSurface(e) }), C.onPrimaryContainer = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 0 : 100 : fn(e) ? T.foregroundTone(C.primaryContainer.tone(e), 4.5) : e.isDark ? 90 : 10, background: e => C.primaryContainer }), C.inversePrimary = T.fromPalette({ palette: e => e.primaryPalette, tone: e => e.isDark ? 40 : 80, background: e => C.inverseSurface }), C.inverseOnPrimary = T.fromPalette({ palette: e => e.primaryPalette, tone: e => e.isDark ? 100 : 20, background: e => C.inversePrimary }), C.secondary = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => e.isDark ? 80 : 40, background: e => C.highestSurface(e), toneDeltaConstraint: e => new aa(C.contentAccentToneDelta, C.secondaryContainer, e.isDark ? "darker" : "lighter") }), C.onSecondary = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => K(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100, background: e => C.secondary }), C.secondaryContainer = T.fromPalette({
    palette: e => e.secondaryPalette,
    tone: e => {
        const t = e.isDark ? 30 : 90;
        if (K(e)) return e.isDark ? 30 : 85;
        if (!fn(e)) return t;
        let n = function(r, a, o, l) {
            let i = o,
                s = X.from(r, a, o);
            if (s.chroma < a) {
                let u = s.chroma;
                for (; s.chroma < a;) {
                    i += l ? -1 : 1;
                    const c = X.from(r, a, i);
                    if (u > c.chroma || Math.abs(c.chroma - a) < .4) break;
                    Math.abs(c.chroma - a) < Math.abs(s.chroma - a) && (s = c), u = Math.max(u, c.chroma)
                }
            }
            return i
        }(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark);
        return n = Ho(e.secondaryPalette.getHct(n), e), n
    },
    background: e => C.highestSurface(e)
}), C.onSecondaryContainer = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => fn(e) ? T.foregroundTone(C.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 10, background: e => C.secondaryContainer }), C.tertiary = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40, background: e => C.highestSurface(e), toneDeltaConstraint: e => new aa(C.contentAccentToneDelta, C.tertiaryContainer, e.isDark ? "darker" : "lighter") }), C.onTertiary = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100, background: e => C.tertiary }), C.tertiaryContainer = T.fromPalette({
    palette: e => e.tertiaryPalette,
    tone: e => {
        if (K(e)) return e.isDark ? 60 : 49;
        if (!fn(e)) return e.isDark ? 30 : 90;
        const t = Ho(e.tertiaryPalette.getHct(e.sourceColorHct.tone), e),
            n = e.tertiaryPalette.getHct(t);
        return Ni.fixIfDisliked(n).tone
    },
    background: e => C.highestSurface(e)
}), C.onTertiaryContainer = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? e.isDark ? 0 : 100 : fn(e) ? T.foregroundTone(C.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 10, background: e => C.tertiaryContainer }), C.error = T.fromPalette({ palette: e => e.errorPalette, tone: e => e.isDark ? 80 : 40, background: e => C.highestSurface(e), toneDeltaConstraint: e => new aa(C.contentAccentToneDelta, C.errorContainer, e.isDark ? "darker" : "lighter") }), C.onError = T.fromPalette({ palette: e => e.errorPalette, tone: e => e.isDark ? 20 : 100, background: e => C.error }), C.errorContainer = T.fromPalette({ palette: e => e.errorPalette, tone: e => e.isDark ? 30 : 90, background: e => C.highestSurface(e) }), C.onErrorContainer = T.fromPalette({ palette: e => e.errorPalette, tone: e => e.isDark ? 90 : 10, background: e => C.errorContainer }), C.primaryFixed = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 100 : 10 : 90, background: e => C.highestSurface(e) }), C.primaryFixedDim = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 90 : 20 : 80, background: e => C.highestSurface(e) }), C.onPrimaryFixed = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 10 : 90 : 10, background: e => C.primaryFixedDim }), C.onPrimaryFixedVariant = T.fromPalette({ palette: e => e.primaryPalette, tone: e => K(e) ? e.isDark ? 30 : 70 : 30, background: e => C.primaryFixedDim }), C.secondaryFixed = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => K(e) ? 80 : 90, background: e => C.highestSurface(e) }), C.secondaryFixedDim = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => K(e) ? 70 : 80, background: e => C.highestSurface(e) }), C.onSecondaryFixed = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => 10, background: e => C.secondaryFixedDim }), C.onSecondaryFixedVariant = T.fromPalette({ palette: e => e.secondaryPalette, tone: e => K(e) ? 25 : 30, background: e => C.secondaryFixedDim }), C.tertiaryFixed = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? 40 : 90, background: e => C.highestSurface(e) }), C.tertiaryFixedDim = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? 30 : 80, background: e => C.highestSurface(e) }), C.onTertiaryFixed = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? 90 : 10, background: e => C.tertiaryFixedDim }), C.onTertiaryFixedVariant = T.fromPalette({ palette: e => e.tertiaryPalette, tone: e => K(e) ? 70 : 30, background: e => C.tertiaryFixedDim });
class Pe {
    static fromInt(t) { const n = X.fromInt(t); return Pe.fromHueAndChroma(n.hue, n.chroma) }
    static fromHueAndChroma(t, n) { return new Pe(t, n) }
    constructor(t, n) { this.hue = t, this.chroma = n, this.cache = new Map }
    tone(t) { let n = this.cache.get(t); return n === void 0 && (n = X.from(this.hue, this.chroma, t).toInt(), this.cache.set(t, n)), n }
    getHct(t) { return X.fromInt(this.tone(t)) }
}
class se {
    static of(t) { return new se(t, !1) }
    static contentOf(t) { return new se(t, !0) }
    static fromColors(t) { return se.createPaletteFromColors(!1, t) }
    static contentFromColors(t) { return se.createPaletteFromColors(!0, t) }
    static createPaletteFromColors(t, n) {
        const r = new se(n.primary, t);
        if (n.secondary) {
            const a = new se(n.secondary, t);
            r.a2 = a.a1
        }
        if (n.tertiary) {
            const a = new se(n.tertiary, t);
            r.a3 = a.a1
        }
        if (n.error) {
            const a = new se(n.error, t);
            r.error = a.a1
        }
        if (n.neutral) {
            const a = new se(n.neutral, t);
            r.n1 = a.n1
        }
        if (n.neutralVariant) {
            const a = new se(n.neutralVariant, t);
            r.n2 = a.n2
        }
        return r
    }
    constructor(t, n) {
        const r = X.fromInt(t),
            a = r.hue,
            o = r.chroma;
        n ? (this.a1 = Pe.fromHueAndChroma(a, o), this.a2 = Pe.fromHueAndChroma(a, o / 3), this.a3 = Pe.fromHueAndChroma(a + 60, o / 2), this.n1 = Pe.fromHueAndChroma(a, Math.min(o / 12, 4)), this.n2 = Pe.fromHueAndChroma(a, Math.min(o / 6, 8))) : (this.a1 = Pe.fromHueAndChroma(a, Math.max(48, o)), this.a2 = Pe.fromHueAndChroma(a, 16), this.a3 = Pe.fromHueAndChroma(a + 60, 24), this.n1 = Pe.fromHueAndChroma(a, 4), this.n2 = Pe.fromHueAndChroma(a, 8)), this.error = Pe.fromHueAndChroma(25, 84)
    }
}
class lf {
    fromInt(t) {
        return function(n) {
            const r = bt(eo(n)),
                a = bt(to(n)),
                o = bt(no(n)),
                l = f0,
                i = l[0][0] * r + l[0][1] * a + l[0][2] * o,
                s = l[1][0] * r + l[1][1] * a + l[1][2] * o,
                u = l[2][0] * r + l[2][1] * a + l[2][2] * o,
                c = s / ar[1],
                d = u / ar[2],
                p = hr(i / ar[0]),
                m = hr(c);
            return [116 * m - 16, 500 * (p - m), 200 * (m - hr(d))]
        }(t)
    }
    toInt(t) {
        return function(n, r, a) {
            const o = ar,
                l = (n + 16) / 116,
                i = l - a / 200,
                s = ka(r / 500 + l),
                u = ka(l),
                c = ka(i);
            return p0(s * o[0], u * o[1], c * o[2])
        }(t[0], t[1], t[2])
    }
    distance(t, n) {
        const r = t[0] - n[0],
            a = t[1] - n[1],
            o = t[2] - n[2];
        return r * r + a * a + o * o
    }
}
class sf {
    static quantize(t, n, r) {
        const a = new Map,
            o = new Array,
            l = new Array,
            i = new lf;
        let s = 0;
        for (let h = 0; h < t.length; h++) {
            const v = t[h],
                k = a.get(v);
            k === void 0 ? (s++, o.push(i.fromInt(v)), l.push(v), a.set(v, 1)) : a.set(v, k + 1)
        }
        const u = new Array;
        for (let h = 0; h < s; h++) {
            const v = l[h],
                k = a.get(v);
            k !== void 0 && (u[h] = k)
        }
        let c = Math.min(r, s);
        n.length > 0 && (c = Math.min(c, n.length));
        const d = new Array;
        for (let h = 0; h < n.length; h++) d.push(i.fromInt(n[h]));
        const p = c - d.length;
        if (n.length === 0 && p > 0)
            for (let h = 0; h < p; h++) {
                const v = 100 * Math.random(),
                    k = 201 * Math.random() - 100,
                    M = 201 * Math.random() - 100;
                d.push(new Array(v, k, M))
            }
        const m = new Array;
        for (let h = 0; h < s; h++) m.push(Math.floor(Math.random() * c));
        const y = new Array;
        for (let h = 0; h < c; h++) { y.push(new Array); for (let v = 0; v < c; v++) y[h].push(0) }
        const b = new Array;
        for (let h = 0; h < c; h++) { b.push(new Array); for (let v = 0; v < c; v++) b[h].push(new uf) }
        const g = new Array;
        for (let h = 0; h < c; h++) g.push(0);
        for (let h = 0; h < 10; h++) {
            for (let x = 0; x < c; x++) {
                for (let E = x + 1; E < c; E++) {
                    const I = i.distance(d[x], d[E]);
                    b[E][x].distance = I, b[E][x].index = x, b[x][E].distance = I, b[x][E].index = E
                }
                b[x].sort();
                for (let E = 0; E < c; E++) y[x][E] = b[x][E].index
            }
            let v = 0;
            for (let x = 0; x < s; x++) {
                const E = o[x],
                    I = m[x],
                    z = d[I],
                    W = i.distance(E, z);
                let ie = W,
                    me = -1;
                for (let de = 0; de < c; de++) {
                    if (b[I][de].distance >= 4 * W) continue;
                    const ge = i.distance(E, d[de]);
                    ge < ie && (ie = ge, me = de)
                }
                me !== -1 && Math.abs(Math.sqrt(ie) - Math.sqrt(W)) > 3 && (v++, m[x] = me)
            }
            if (v === 0 && h !== 0) break;
            const k = new Array(c).fill(0),
                M = new Array(c).fill(0),
                S = new Array(c).fill(0);
            for (let x = 0; x < c; x++) g[x] = 0;
            for (let x = 0; x < s; x++) {
                const E = m[x],
                    I = o[x],
                    z = u[x];
                g[E] += z, k[E] += I[0] * z, M[E] += I[1] * z, S[E] += I[2] * z
            }
            for (let x = 0; x < c; x++) {
                const E = g[x];
                if (E === 0) { d[x] = [0, 0, 0]; continue }
                const I = k[x] / E,
                    z = M[x] / E,
                    W = S[x] / E;
                d[x] = [I, z, W]
            }
        }
        const f = new Map;
        for (let h = 0; h < c; h++) {
            const v = g[h];
            if (v === 0) continue;
            const k = i.toInt(d[h]);
            f.has(k) || f.set(k, v)
        }
        return f
    }
}
class uf { constructor() { this.distance = -1, this.index = -1 } }
class cf {
    static quantize(t) {
        const n = new Map;
        for (let r = 0; r < t.length; r++) {
            const a = t[r];
            (a >> 24 & 255) < 255 || n.set(a, (n.get(a) ?? 0) + 1)
        }
        return n
    }
}
const St = 33,
    Kn = 35937,
    Zn = "red",
    Xn = "green",
    $n = "blue";
class df {
    constructor(t = [], n = [], r = [], a = [], o = [], l = []) { this.weights = t, this.momentsR = n, this.momentsG = r, this.momentsB = a, this.moments = o, this.cubes = l }
    quantize(t, n) { this.constructHistogram(t), this.computeMoments(); const r = this.createBoxes(n); return this.createResult(r.resultCount) }
    constructHistogram(t) {
        this.weights = Array.from({ length: Kn }).fill(0), this.momentsR = Array.from({ length: Kn }).fill(0), this.momentsG = Array.from({ length: Kn }).fill(0), this.momentsB = Array.from({ length: Kn }).fill(0), this.moments = Array.from({ length: Kn }).fill(0);
        const n = cf.quantize(t);
        for (const [r, a] of n.entries()) {
            const o = eo(r),
                l = to(r),
                i = no(r),
                s = 3,
                u = 1 + (o >> s),
                c = 1 + (l >> s),
                d = 1 + (i >> s),
                p = this.getIndex(u, c, d);
            this.weights[p] = (this.weights[p] ?? 0) + a, this.momentsR[p] += a * o, this.momentsG[p] += a * l, this.momentsB[p] += a * i, this.moments[p] += a * (o * o + l * l + i * i)
        }
    }
    computeMoments() {
        for (let t = 1; t < St; t++) {
            const n = Array.from({ length: St }).fill(0),
                r = Array.from({ length: St }).fill(0),
                a = Array.from({ length: St }).fill(0),
                o = Array.from({ length: St }).fill(0),
                l = Array.from({ length: St }).fill(0);
            for (let i = 1; i < St; i++) {
                let s = 0,
                    u = 0,
                    c = 0,
                    d = 0,
                    p = 0;
                for (let m = 1; m < St; m++) {
                    const y = this.getIndex(t, i, m);
                    s += this.weights[y], u += this.momentsR[y], c += this.momentsG[y], d += this.momentsB[y], p += this.moments[y], n[m] += s, r[m] += u, a[m] += c, o[m] += d, l[m] += p;
                    const b = this.getIndex(t - 1, i, m);
                    this.weights[y] = this.weights[b] + n[m], this.momentsR[y] = this.momentsR[b] + r[m], this.momentsG[y] = this.momentsG[b] + a[m], this.momentsB[y] = this.momentsB[b] + o[m], this.moments[y] = this.moments[b] + l[m]
                }
            }
        }
    }
    createBoxes(t) {
        this.cubes = Array.from({ length: t }).fill(0).map(() => new ff);
        const n = Array.from({ length: t }).fill(0);
        this.cubes[0].r0 = 0, this.cubes[0].g0 = 0, this.cubes[0].b0 = 0, this.cubes[0].r1 = 32, this.cubes[0].g1 = 32, this.cubes[0].b1 = 32;
        let r = t,
            a = 0;
        for (let o = 1; o < t; o++) { this.cut(this.cubes[a], this.cubes[o]) ? (n[a] = this.cubes[a].vol > 1 ? this.variance(this.cubes[a]) : 0, n[o] = this.cubes[o].vol > 1 ? this.variance(this.cubes[o]) : 0) : (n[a] = 0, o--), a = 0; let l = n[0]; for (let i = 1; i <= o; i++) n[i] > l && (l = n[i], a = i); if (l <= 0) { r = o + 1; break } }
        return new pf(t, r)
    }
    createResult(t) {
        const n = [];
        for (let r = 0; r < t; ++r) {
            const a = this.cubes[r],
                o = this.volume(a, this.weights);
            if (o > 0) {
                const l = -16777216 | (255 & Math.round(this.volume(a, this.momentsR) / o)) << 16 | (255 & Math.round(this.volume(a, this.momentsG) / o)) << 8 | 255 & Math.round(this.volume(a, this.momentsB) / o);
                n.push(l)
            }
        }
        return n
    }
    variance(t) {
        const n = this.volume(t, this.momentsR),
            r = this.volume(t, this.momentsG),
            a = this.volume(t, this.momentsB);
        return this.moments[this.getIndex(t.r1, t.g1, t.b1)] - this.moments[this.getIndex(t.r1, t.g1, t.b0)] - this.moments[this.getIndex(t.r1, t.g0, t.b1)] + this.moments[this.getIndex(t.r1, t.g0, t.b0)] - this.moments[this.getIndex(t.r0, t.g1, t.b1)] + this.moments[this.getIndex(t.r0, t.g1, t.b0)] + this.moments[this.getIndex(t.r0, t.g0, t.b1)] - this.moments[this.getIndex(t.r0, t.g0, t.b0)] - (n * n + r * r + a * a) / this.volume(t, this.weights)
    }
    cut(t, n) {
        const r = this.volume(t, this.momentsR),
            a = this.volume(t, this.momentsG),
            o = this.volume(t, this.momentsB),
            l = this.volume(t, this.weights),
            i = this.maximize(t, Zn, t.r0 + 1, t.r1, r, a, o, l),
            s = this.maximize(t, Xn, t.g0 + 1, t.g1, r, a, o, l),
            u = this.maximize(t, $n, t.b0 + 1, t.b1, r, a, o, l);
        let c;
        const d = i.maximum,
            p = s.maximum,
            m = u.maximum;
        if (d >= p && d >= m) {
            if (i.cutLocation < 0) return !1;
            c = Zn
        } else c = p >= d && p >= m ? Xn : $n;
        switch (n.r1 = t.r1, n.g1 = t.g1, n.b1 = t.b1, c) {
            case Zn:
                t.r1 = i.cutLocation, n.r0 = t.r1, n.g0 = t.g0, n.b0 = t.b0;
                break;
            case Xn:
                t.g1 = s.cutLocation, n.r0 = t.r0, n.g0 = t.g1, n.b0 = t.b0;
                break;
            case $n:
                t.b1 = u.cutLocation, n.r0 = t.r0, n.g0 = t.g0, n.b0 = t.b1;
                break;
            default:
                throw new Error("unexpected direction " + c)
        }
        return t.vol = (t.r1 - t.r0) * (t.g1 - t.g0) * (t.b1 - t.b0), n.vol = (n.r1 - n.r0) * (n.g1 - n.g0) * (n.b1 - n.b0), !0
    }
    maximize(t, n, r, a, o, l, i, s) {
        const u = this.bottom(t, n, this.momentsR),
            c = this.bottom(t, n, this.momentsG),
            d = this.bottom(t, n, this.momentsB),
            p = this.bottom(t, n, this.weights);
        let m = 0,
            y = -1,
            b = 0,
            g = 0,
            f = 0,
            h = 0;
        for (let v = r; v < a; v++) {
            if (b = u + this.top(t, n, v, this.momentsR), g = c + this.top(t, n, v, this.momentsG), f = d + this.top(t, n, v, this.momentsB), h = p + this.top(t, n, v, this.weights), h === 0) continue;
            let k = 1 * (b * b + g * g + f * f),
                M = 1 * h,
                S = k / M;
            b = o - b, g = l - g, f = i - f, h = s - h, h !== 0 && (k = 1 * (b * b + g * g + f * f), M = 1 * h, S += k / M, S > m && (m = S, y = v))
        }
        return new hf(y, m)
    }
    volume(t, n) { return n[this.getIndex(t.r1, t.g1, t.b1)] - n[this.getIndex(t.r1, t.g1, t.b0)] - n[this.getIndex(t.r1, t.g0, t.b1)] + n[this.getIndex(t.r1, t.g0, t.b0)] - n[this.getIndex(t.r0, t.g1, t.b1)] + n[this.getIndex(t.r0, t.g1, t.b0)] + n[this.getIndex(t.r0, t.g0, t.b1)] - n[this.getIndex(t.r0, t.g0, t.b0)] }
    bottom(t, n, r) {
        switch (n) {
            case Zn:
                return -r[this.getIndex(t.r0, t.g1, t.b1)] + r[this.getIndex(t.r0, t.g1, t.b0)] + r[this.getIndex(t.r0, t.g0, t.b1)] - r[this.getIndex(t.r0, t.g0, t.b0)];
            case Xn:
                return -r[this.getIndex(t.r1, t.g0, t.b1)] + r[this.getIndex(t.r1, t.g0, t.b0)] + r[this.getIndex(t.r0, t.g0, t.b1)] - r[this.getIndex(t.r0, t.g0, t.b0)];
            case $n:
                return -r[this.getIndex(t.r1, t.g1, t.b0)] + r[this.getIndex(t.r1, t.g0, t.b0)] + r[this.getIndex(t.r0, t.g1, t.b0)] - r[this.getIndex(t.r0, t.g0, t.b0)];
            default:
                throw new Error("unexpected direction $direction")
        }
    }
    top(t, n, r, a) {
        switch (n) {
            case Zn:
                return a[this.getIndex(r, t.g1, t.b1)] - a[this.getIndex(r, t.g1, t.b0)] - a[this.getIndex(r, t.g0, t.b1)] + a[this.getIndex(r, t.g0, t.b0)];
            case Xn:
                return a[this.getIndex(t.r1, r, t.b1)] - a[this.getIndex(t.r1, r, t.b0)] - a[this.getIndex(t.r0, r, t.b1)] + a[this.getIndex(t.r0, r, t.b0)];
            case $n:
                return a[this.getIndex(t.r1, t.g1, r)] - a[this.getIndex(t.r1, t.g0, r)] - a[this.getIndex(t.r0, t.g1, r)] + a[this.getIndex(t.r0, t.g0, r)];
            default:
                throw new Error("unexpected direction $direction")
        }
    }
    getIndex(t, n, r) { return (t << 10) + (t << 6) + t + (n << 5) + n + r }
}
class ff { constructor(t = 0, n = 0, r = 0, a = 0, o = 0, l = 0, i = 0) { this.r0 = t, this.r1 = n, this.g0 = r, this.g1 = a, this.b0 = o, this.b1 = l, this.vol = i } }
class pf { constructor(t, n) { this.requestedCount = t, this.resultCount = n } }
class hf { constructor(t, n) { this.cutLocation = t, this.maximum = n } }
class mf { static quantize(t, n) { const r = new df().quantize(t, n); return sf.quantize(t, r, n) } }
class pt {
    get primary() { return this.props.primary }
    get onPrimary() { return this.props.onPrimary }
    get primaryContainer() { return this.props.primaryContainer }
    get onPrimaryContainer() { return this.props.onPrimaryContainer }
    get secondary() { return this.props.secondary }
    get onSecondary() { return this.props.onSecondary }
    get secondaryContainer() { return this.props.secondaryContainer }
    get onSecondaryContainer() { return this.props.onSecondaryContainer }
    get tertiary() { return this.props.tertiary }
    get onTertiary() { return this.props.onTertiary }
    get tertiaryContainer() { return this.props.tertiaryContainer }
    get onTertiaryContainer() { return this.props.onTertiaryContainer }
    get error() { return this.props.error }
    get onError() { return this.props.onError }
    get errorContainer() { return this.props.errorContainer }
    get onErrorContainer() { return this.props.onErrorContainer }
    get background() { return this.props.background }
    get onBackground() { return this.props.onBackground }
    get surface() { return this.props.surface }
    get onSurface() { return this.props.onSurface }
    get surfaceVariant() { return this.props.surfaceVariant }
    get onSurfaceVariant() { return this.props.onSurfaceVariant }
    get outline() { return this.props.outline }
    get outlineVariant() { return this.props.outlineVariant }
    get shadow() { return this.props.shadow }
    get scrim() { return this.props.scrim }
    get inverseSurface() { return this.props.inverseSurface }
    get inverseOnSurface() { return this.props.inverseOnSurface }
    get inversePrimary() { return this.props.inversePrimary }
    static light(t) { return pt.lightFromCorePalette(se.of(t)) }
    static dark(t) { return pt.darkFromCorePalette(se.of(t)) }
    static lightContent(t) { return pt.lightFromCorePalette(se.contentOf(t)) }
    static darkContent(t) { return pt.darkFromCorePalette(se.contentOf(t)) }
    static lightFromCorePalette(t) { return new pt({ primary: t.a1.tone(40), onPrimary: t.a1.tone(100), primaryContainer: t.a1.tone(90), onPrimaryContainer: t.a1.tone(10), secondary: t.a2.tone(40), onSecondary: t.a2.tone(100), secondaryContainer: t.a2.tone(90), onSecondaryContainer: t.a2.tone(10), tertiary: t.a3.tone(40), onTertiary: t.a3.tone(100), tertiaryContainer: t.a3.tone(90), onTertiaryContainer: t.a3.tone(10), error: t.error.tone(40), onError: t.error.tone(100), errorContainer: t.error.tone(90), onErrorContainer: t.error.tone(10), background: t.n1.tone(99), onBackground: t.n1.tone(10), surface: t.n1.tone(99), onSurface: t.n1.tone(10), surfaceVariant: t.n2.tone(90), onSurfaceVariant: t.n2.tone(30), outline: t.n2.tone(50), outlineVariant: t.n2.tone(80), shadow: t.n1.tone(0), scrim: t.n1.tone(0), inverseSurface: t.n1.tone(20), inverseOnSurface: t.n1.tone(95), inversePrimary: t.a1.tone(80) }) }
    static darkFromCorePalette(t) { return new pt({ primary: t.a1.tone(80), onPrimary: t.a1.tone(20), primaryContainer: t.a1.tone(30), onPrimaryContainer: t.a1.tone(90), secondary: t.a2.tone(80), onSecondary: t.a2.tone(20), secondaryContainer: t.a2.tone(30), onSecondaryContainer: t.a2.tone(90), tertiary: t.a3.tone(80), onTertiary: t.a3.tone(20), tertiaryContainer: t.a3.tone(30), onTertiaryContainer: t.a3.tone(90), error: t.error.tone(80), onError: t.error.tone(20), errorContainer: t.error.tone(30), onErrorContainer: t.error.tone(80), background: t.n1.tone(10), onBackground: t.n1.tone(90), surface: t.n1.tone(10), onSurface: t.n1.tone(90), surfaceVariant: t.n2.tone(30), onSurfaceVariant: t.n2.tone(80), outline: t.n2.tone(60), outlineVariant: t.n2.tone(30), shadow: t.n1.tone(0), scrim: t.n1.tone(0), inverseSurface: t.n1.tone(90), inverseOnSurface: t.n1.tone(20), inversePrimary: t.a1.tone(40) }) }
    constructor(t) { this.props = t }
    toJSON() { return {...this.props } }
}
class te {
    constructor() {}
    static score(t, n = !1) {
        let r = 0;
        for (const y of t.values()) r += y;
        const a = new Map,
            o = new Map,
            l = new Array(360).fill(0);
        for (const [y, b] of t.entries()) {
            const g = b / r;
            a.set(y, g);
            const f = ne.fromInt(y);
            o.set(y, f), l[Math.round(f.hue)] += g
        }
        const i = new Map;
        for (const [y, b] of o.entries()) {
            const g = Math.round(b.hue);
            let f = 0;
            for (let h = g - 15; h < g + 15; h++) f += l[s = h, (s %= 360) < 0 && (s += 360), s];
            i.set(y, f)
        }
        var s;
        const u = new Map;
        for (const [y, b] of o.entries()) {
            const g = 100 * i.get(y) * te.WEIGHT_PROPORTION,
                f = b.chroma < te.TARGET_CHROMA ? te.WEIGHT_CHROMA_BELOW : te.WEIGHT_CHROMA_ABOVE,
                h = g + (b.chroma - te.TARGET_CHROMA) * f;
            u.set(y, h)
        }
        const c = n ? te.filterContent(o) : te.filter(i, o),
            d = new Map;
        for (const y of c) {
            let b = !1;
            const g = o.get(y).hue;
            for (const [f] of d)
                if (d0(g, o.get(f).hue) < 15) { b = !0; break }
            b || d.set(y, u.get(y))
        }
        const p = Array.from(d.entries());
        p.sort((y, b) => b[1] - y[1]);
        const m = p.map(y => y[0]);
        return m.length === 0 && m.push(4282549748), m
    }
    static filter(t, n) {
        const r = new Array;
        for (const [a, o] of n.entries()) {
            const l = t.get(a);
            o.chroma >= te.CUTOFF_CHROMA && qa(a) >= te.CUTOFF_TONE && l >= te.CUTOFF_EXCITED_PROPORTION && r.push(a)
        }
        return r
    }
    static filterContent(t) { return Array.from(t.keys()) }
}

function h0(e) {
    const t = eo(e),
        n = to(e),
        r = no(e),
        a = [t.toString(16), n.toString(16), r.toString(16)];
    for (const [o, l] of a.entries()) l.length === 1 && (a[o] = "0" + l);
    return "#" + a.join("")
}

function dt(e) { return parseInt(e, 16) }

function gf(e, t = []) {
    const n = se.of(e);
    return {
        source: e,
        schemes: { light: pt.light(e), dark: pt.dark(e) },
        palettes: { primary: n.a1, secondary: n.a2, tertiary: n.a3, neutral: n.n1, neutralVariant: n.n2, error: n.error },
        customColors: t.map(r => function(a, o) {
            let l = o.value;
            const i = l,
                s = a;
            o.blend && (l = Ti.harmonize(i, s));
            const u = se.of(l),
                c = u.a1;
            return { color: o, value: l, light: { color: c.tone(40), onColor: c.tone(100), colorContainer: c.tone(90), onColorContainer: c.tone(10) }, dark: { color: c.tone(80), onColor: c.tone(20), colorContainer: c.tone(30), onColorContainer: c.tone(90) } }
        }(e, r))
    }
}

function Wo(e, t, n = "") {
    for (const [r, a] of Object.entries(t.toJSON())) {
        const o = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            l = h0(a);
        e.style.setProperty(`--md-sys-color-${o}${n}`, l)
    }
}
te.TARGET_CHROMA = 48, te.WEIGHT_PROPORTION = .7, te.WEIGHT_CHROMA_ABOVE = .3, te.WEIGHT_CHROMA_BELOW = .1, te.CUTOFF_CHROMA = 15, te.CUTOFF_TONE = 10, te.CUTOFF_EXCITED_PROPORTION = .01;
const Ge = [{ name: "55325876_p0.webp", displayName: "また、同じ夢を見ていた", dominantColor: "#005ca5", link: "https://www.pixiv.net/artworks/55325876" }, { name: "64050733_p0.webp", displayName: "sunset", dominantColor: "#78a9cd", link: "https://www.pixiv.net/artworks/64050733" }, { name: "66028042_p0.webp", displayName: "踏切の向こうは", dominantColor: "#53754b", link: "https://www.pixiv.net/artworks/66028042" }, { name: "66986409_p0.webp", displayName: "▽○△", dominantColor: "#dcb141", link: "https://www.pixiv.net/artworks/66986409" }, { name: "67047116_p0.webp", displayName: "○○▽", dominantColor: "#2a3f5b", link: "https://www.pixiv.net/artworks/67047116" }, { name: "69246838_p0.webp", displayName: "海辺の町", dominantColor: "#c37f8c", link: "https://www.pixiv.net/artworks/69246838" }, { name: "69618131_p0.webp", displayName: "summer has come!", light: !0, dominantColor: "#195e95", link: "https://www.pixiv.net/artworks/69618131" }, { name: "69618131_p1.webp", displayName: "summer has come!", dominantColor: "#88789e", link: "https://www.pixiv.net/artworks/69618131" }, { name: "70059505_p0.webp", displayName: "受験生の夏", dominantColor: "#563c23", link: "https://www.pixiv.net/artworks/70059505" }, { name: "71367795_p0.webp", displayName: "晴天の昼下がり", dominantColor: "#cca175", link: "https://www.pixiv.net/artworks/71367795" }, { name: "76388370_p0.webp", displayName: "通り雨と相合傘", dominantColor: "#c579cb", link: "https://www.pixiv.net/artworks/76388370" }, { name: "85389067_p1.webp", displayName: "赤を叫んだ", dominantColor: "#d4a28c", link: "https://www.pixiv.net/artworks/85389067" }, { name: "86845900_p0.webp", displayName: "neon dreams.", dominantColor: "#e1abe2", link: "https://www.pixiv.net/artworks/86845900" }, { name: "89206202_p0.webp", displayName: "大炎刻街", dominantColor: "#07273a", link: "https://www.pixiv.net/artworks/89206202" }, { name: "90848911_p0.webp", displayName: "雨音", dominantColor: "#698467", link: "https://www.pixiv.net/artworks/90848911" }, { name: "91814999_p0.webp", displayName: "18時50分 夏", dominantColor: "#eabee3", link: "https://www.pixiv.net/artworks/91814999" }, { name: "92580718_p0.webp", displayName: "屋上にある店", dominantColor: "#6d9a9f", link: "https://www.pixiv.net/artworks/92580718" }, { name: "93719055_p0.webp", displayName: "「胸灼け」", dominantColor: "#2a6784", link: "https://www.pixiv.net/artworks/93719055" }, { name: "98260510_p0.webp", displayName: "夕焼け飛行", dominantColor: "#ac6d4d", link: "https://www.pixiv.net/artworks/98260510" }, { name: "100213166_p3.webp", displayName: "Summer in COLORZ", dominantColor: "#263e7f", link: "https://www.pixiv.net/artworks/100213166" }, { name: "100517229_p0.webp", displayName: "残照", dominantColor: "#c1662a", link: "https://www.pixiv.net/artworks/100517229" }, { name: "100926353_p0.webp", dominantColor: "#68bba1", displayName: "おやつ", link: "https://www.pixiv.net/artworks/100926353" }, { name: "103306309_p0.webp", displayName: "花火の夜", dominantColor: "#d9af97", link: "https://www.pixiv.net/artworks/103306309" }].map(e => { var t; return e.url = (t = e.name, new URL(Object.assign({ "./backgrounds/100213166_p3.webp": Od, "./backgrounds/100517229_p0.webp": Fd, "./backgrounds/100926353_p0.webp": jd, "./backgrounds/103306309_p0.webp": Ud, "./backgrounds/55325876_p0.webp": _d, "./backgrounds/64050733_p0.webp": Bd, "./backgrounds/66028042_p0.webp": Vd, "./backgrounds/66986409_p0.webp": qd, "./backgrounds/67047116_p0.webp": Hd, "./backgrounds/69246838_p0.webp": Wd, "./backgrounds/69618131_p0.webp": Qd, "./backgrounds/69618131_p1.webp": Gd, "./backgrounds/70059505_p0.webp": Yd, "./backgrounds/71367795_p0.webp": Jd, "./backgrounds/76388370_p0.webp": Kd, "./backgrounds/85389067_p1.webp": Zd, "./backgrounds/86845900_p0.webp": Xd, "./backgrounds/89206202_p0.webp": $d, "./backgrounds/90848911_p0.webp": ef, "./backgrounds/91814999_p0.webp": tf, "./backgrounds/92580718_p0.webp": nf, "./backgrounds/93719055_p0.webp": rf, "./backgrounds/98260510_p0.webp": af })[`./backgrounds/${t}`], self.location).href), e }),
    Yt = []; {
    let e = Ge.filter(t => t == null ? void 0 : t.default);
    e.length || (e = Ge.filter(t => t == null ? void 0 : t.dominantColor)), e.length || (e = Ge), Yt.push(e[Math.floor(Math.random() * e.length)])
}
const yf = () => {
        for (let e = Ge.length - 1; e > 0; e--) {
            const t = Math.floor(Math.random() * (e + 1));
            [Ge[e], Ge[t]] = [Ge[t], Ge[e]]
        }
    },
    ou = () => {
        if (Yt.length <= 1) {
            do yf(); while (Yt.length && Ge.length > 1 && Yt[Yt.length - 1] === Ge[0]);
            Yt.push(...Ge)
        }
        return Yt.shift()
    },
    lu = e => {
        const t = document.createElement("canvas");
        t.width = 48, t.height = 48;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, 48, 48);
        const r = (a = n.getImageData(0, 0, 48, 48).data, o = 4, a.reduce((i, s, u) => u % o == 0 ? [...i, [s]] : [...i.slice(0, -1), [...i.slice(-1)[0], s]], [])).map(i => (i[3] << 24 >>> 0 | i[0] << 16 >>> 0 | i[1] << 8 >>> 0 | i[2]) >>> 0);
        var a, o;
        const l = mf.quantize(r, 128);
        return te.score(l)[0]
    },
    iu = e => {
        const t = e >> 16 & 255,
            n = e >> 8 & 255,
            r = 255 & e;
        return `#${(e>>24&255).toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
    };
class vf {
    constructor(t) { this.container = t }
    removePreviousImages() { this.container.querySelectorAll(".background-image:not(.dismissing)").forEach(t => { t.classList.add("dismissing"), setTimeout(() => { t.remove() }, 1100) }) }
    applyIsLight(t = !1) { t ? document.body.classList.add("light-bg") : document.body.classList.remove("light-bg") }
    applyThemeByColor(t) {
        const n = gf(function(r) {
            const a = (r = r.replace("#", "")).length === 3,
                o = r.length === 6,
                l = r.length === 8;
            if (!a && !o && !l) throw new Error("unexpected hex " + r);
            let i = 0,
                s = 0,
                u = 0;
            return a ? (i = dt(r.slice(0, 1).repeat(2)), s = dt(r.slice(1, 2).repeat(2)), u = dt(r.slice(2, 3).repeat(2))) : o ? (i = dt(r.slice(0, 2)), s = dt(r.slice(2, 4)), u = dt(r.slice(4, 6))) : l && (i = dt(r.slice(2, 4)), s = dt(r.slice(4, 6)), u = dt(r.slice(6, 8))), (-16777216 | (255 & i) << 16 | (255 & s) << 8 | 255 & u) >>> 0
        }(t));
        window.matchMedia("(prefers-color-scheme: dark)").matches,
            function(r, a) {
                const o = (a == null ? void 0 : a.target) || document.body;
                if (Wo(o, a != null && a.dark ? r.schemes.dark : r.schemes.light), a != null && a.brightnessSuffix && (Wo(o, r.schemes.dark, "-dark"), Wo(o, r.schemes.light, "-light")), a == null ? void 0 : a.paletteTones) {
                    const l = (a == null ? void 0 : a.paletteTones) ?? [];
                    for (const [i, s] of Object.entries(r.palettes)) {
                        const u = i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                        for (const c of l) {
                            const d = `--md-ref-palette-${u}-${u}${c}`,
                                p = h0(s.tone(c));
                            o.style.setProperty(d, p)
                        }
                    }
                }
            }(n, { dark: !1 })
    }
    addImageToContainer(t) {
        const n = document.createElement("div");
        n.classList.add("background-image"), n.style.backgroundImage = `url(${t})`, this.removePreviousImages(), this.container.appendChild(n)
    }
    updateFooter(t) { window.bg = t, window.dispatchEvent(new CustomEvent("bgChange")) }
    loadBg(t, n = !1) {
        return n ? (this.removePreviousImages(), this.addImageToContainer(t.url), this.applyIsLight(t == null ? void 0 : t.light), this.updateFooter(t), t.dominantColor && this.applyThemeByColor(t.dominantColor), new Promise((r, a) => {
            const o = new Image;
            o.onload = () => { t.dominantColor || (t.dominantColor = iu(lu(o)), this.applyThemeByColor(t.dominantColor)), r() }, o.onerror = a, o.src = t.url
        })) : new Promise((r, a) => {
            const o = new Image;
            o.onload = () => { t.dominantColor || (t.dominantColor = iu(lu(o))), this.applyThemeByColor(t.dominantColor), this.addImageToContainer(t.url), this.applyIsLight(t == null ? void 0 : t.light), this.updateFooter(t), r() }, o.onerror = a, o.src = t.url
        })
    }
    async init() { await this.loadBg(ou(), !0), setTimeout(() => { this.loadNextBg() }, 15e3) }
    async loadNextBg() { await this.loadBg(ou()), setTimeout(() => { this.loadNextBg() }, 15e3) }
}

function bf() {
    const e = F.useRef(),
        t = F.useRef();
    return F.useLayoutEffect(() => { t.current || (t.current = new vf(e.current), t.current.init()) }, []), F.useEffect(() => {
        const n = a => {
                const o = a.clientX,
                    l = a.clientY,
                    i = window.innerWidth,
                    s = window.innerHeight,
                    u = (o - i / 2) / i,
                    c = (l - s / 2) / s;
                e.current.parentElement.style.setProperty("--tx", 20 * u + "px"), e.current.parentElement.style.setProperty("--ty", 20 * c + "px")
            },
            r = a => { e.current.parentElement.style.setProperty("--tx", "0px"), e.current.parentElement.style.setProperty("--ty", "0px") };
        return document.addEventListener("mousemove", n), document.addEventListener("mouseleave", r), () => { document.removeEventListener("mousemove", n), document.removeEventListener("mouseleave", r) }
    }, []), w.jsxs(w.Fragment, { children: [w.jsx("div", { id: "background", className: "background", ref: e }), w.jsx("div", { id: "background-neon-mode", className: "background-neon-mode" })] })
}

function wf() {
    var a, o;
    const [e, t] = F.useState((a = window == null ? void 0 : window.bg) == null ? void 0 : a.displayName), [n, r] = F.useState((o = window == null ? void 0 : window.bg) == null ? void 0 : o.link);
    return F.useLayoutEffect(() => {
        const l = i => {
            var s, u;
            t((s = window == null ? void 0 : window.bg) == null ? void 0 : s.displayName), r((u = window == null ? void 0 : window.bg) == null ? void 0 : u.link)
        };
        return window.addEventListener("bgChange", l), l(), () => window.removeEventListener("bgChange", l)
    }, []), w.jsx("div", { className: "footer", children: w.jsxs("div", { className: "footer-inner", children: [!1, e && w.jsxs("div", { className: "bg-info", children: ["Background ", n ? w.jsx("a", { href: n, target: "_blank", rel: "noreferrer", className: "bg-name bg-link", children: e }) : w.jsx("span", { className: "bg-name", children: e })] })] }) })
}

function kf() {
    const e = () => { document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`), document.documentElement.style.setProperty("--scroll-y-percent", window.scrollY / window.innerHeight), document.documentElement.classList.toggle("scrolled", window.scrollY > 0) };
    return F.useEffect(() => (window.addEventListener("scroll", e), window.addEventListener("resize", e), () => { window.removeEventListener("scroll", e), window.removeEventListener("resize", e) }), []), F.useLayoutEffect(() => { e() }, []), F.useEffect(() => {
        const t = () => { document.body.classList.add("touch-device"), window.removeEventListener("touchstart", t) };
        window.addEventListener("touchstart", t)
    }, []), w.jsxs(w.Fragment, { children: [w.jsx(bf, {}), w.jsx(dd, {}), w.jsx(fd, {}), w.jsx(pd, {}), w.jsx(Nd, {}), w.jsx(wf, {})] })
}
const xf = e => { e = e.replace("#", "").trim(); const t = parseInt(e, 16); return [t >> 16 & 255, t >> 8 & 255, 255 & t] };
(function() {
    if (CSS.supports("color: color-mix(in srgb, red, red)")) return;
    const e = document.getElementById("root"),
        t = ["--md-sys-color-primary-container", "--md-sys-color-shadow"],
        n = {},
        r = () => {
            const a = document.body.style;
            for (let o = 0; o < a.length; o++)
                if (a[o].startsWith("--md-sys-color-") && t.includes(a[o])) {
                    const l = a.getPropertyValue(a[o]);
                    if (n[a[o]] !== l) {
                        n[a[o]] = l;
                        const [i, s, u] = xf(l);
                        e.style.setProperty(`${a[o]}-r`, i), e.style.setProperty(`${a[o]}-g`, s), e.style.setProperty(`${a[o]}-b`, u), e.style.setProperty(`${a[o]}-rgb`, `${i}, ${s}, ${u}`)
                    }
                }
        };
    new MutationObserver(r).observe(document.body, { attributes: !0, attributeFilter: ["style"] }), r()
})(), navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1 && document.body.classList.add("safari"), Go.createRoot(document.getElementById("root")).render(w.jsx(Rt.StrictMode, { children: w.jsx(kf, {}) }));