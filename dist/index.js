var VI = Object.defineProperty;
var WI = (t, e, A) => e in t ? VI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : t[e] = A;
var L = (t, e, A) => (WI(t, typeof e != "symbol" ? e + "" : e, A), A), _a = (t, e, A) => {
  if (!e.has(t))
    throw TypeError("Cannot " + A);
};
var l = (t, e, A) => (_a(t, e, "read from private field"), A ? A.call(t) : e.get(t)), N = (t, e, A) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, A);
}, b = (t, e, A, r) => (_a(t, e, "write to private field"), r ? r.call(t, A) : e.set(t, A), A);
var zi = (t, e, A, r) => ({
  set _(s) {
    b(t, e, s, A);
  },
  get _() {
    return l(t, e, r);
  }
}), O = (t, e, A) => (_a(t, e, "access private method"), A);
import Yi from "os";
import * as xI from "fs";
import eQ, { realpathSync as qI, lstatSync as jI, readdir as ZI, readdirSync as zI, readlinkSync as XI, readFileSync as $I } from "fs";
import AQ, { win32 as Tg, posix as KI } from "path";
import En from "http";
import tQ from "https";
import hl from "net";
import rQ from "tls";
import un, { EventEmitter as El } from "events";
import eA from "assert";
import Jt from "util";
import _t from "stream";
import ds from "buffer";
import ed from "querystring";
import Yr from "stream/web";
import ha from "node:stream";
import Qn from "node:util";
import sQ from "node:events";
import nQ from "worker_threads";
import Ad from "perf_hooks";
import iQ from "util/types";
import Ji from "async_hooks";
import td from "console";
import rd, { fileURLToPath as oQ } from "url";
import sd from "zlib";
import nd, { StringDecoder as id } from "string_decoder";
import aQ from "diagnostics_channel";
import { execSync as cQ } from "child_process";
import { lstat as od, readdir as ad, readlink as cd, realpath as gd } from "fs/promises";
var ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ul(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function gQ(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var A = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    A.prototype = e.prototype;
  } else
    A = {};
  return Object.defineProperty(A, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(A, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), A;
}
var Ql = {}, vg = function(t, e) {
  return vg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, r) {
    A.__proto__ = r;
  } || function(A, r) {
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (A[s] = r[s]);
  }, vg(t, e);
};
function lQ(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vg(t, e);
  function A() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (A.prototype = e.prototype, new A());
}
var xo = function() {
  return xo = Object.assign || function(e) {
    for (var A, r = 1, s = arguments.length; r < s; r++) {
      A = arguments[r];
      for (var n in A)
        Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
    }
    return e;
  }, xo.apply(this, arguments);
};
function hQ(t, e) {
  var A = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (A[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (A[r[s]] = t[r[s]]);
  return A;
}
function EQ(t, e, A, r) {
  var s = arguments.length, n = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, A) : r, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, A, r);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (i = t[a]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, A, n) : i(e, A)) || n);
  return s > 3 && n && Object.defineProperty(e, A, n), n;
}
function uQ(t, e) {
  return function(A, r) {
    e(A, r, t);
  };
}
function ld(t, e, A, r, s, n) {
  function i(I) {
    if (I !== void 0 && typeof I != "function")
      throw new TypeError("Function expected");
    return I;
  }
  for (var a = r.kind, o = a === "getter" ? "get" : a === "setter" ? "set" : "value", c = !e && t ? r.static ? t : t.prototype : null, g = e || (c ? Object.getOwnPropertyDescriptor(c, r.name) : {}), h, E = !1, Q = A.length - 1; Q >= 0; Q--) {
    var C = {};
    for (var u in r)
      C[u] = u === "access" ? {} : r[u];
    for (var u in r.access)
      C.access[u] = r.access[u];
    C.addInitializer = function(I) {
      if (E)
        throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(i(I || null));
    };
    var B = (0, A[Q])(a === "accessor" ? { get: g.get, set: g.set } : g[o], C);
    if (a === "accessor") {
      if (B === void 0)
        continue;
      if (B === null || typeof B != "object")
        throw new TypeError("Object expected");
      (h = i(B.get)) && (g.get = h), (h = i(B.set)) && (g.set = h), (h = i(B.init)) && s.unshift(h);
    } else
      (h = i(B)) && (a === "field" ? s.unshift(h) : g[o] = h);
  }
  c && Object.defineProperty(c, r.name, g), E = !0;
}
function hd(t, e, A) {
  for (var r = arguments.length > 2, s = 0; s < e.length; s++)
    A = r ? e[s].call(t, A) : e[s].call(t);
  return r ? A : void 0;
}
function Ed(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function ud(t, e, A) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: A ? "".concat(A, " ", e) : e });
}
function QQ(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function CQ(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function a(g) {
      try {
        c(r.next(g));
      } catch (h) {
        i(h);
      }
    }
    function o(g) {
      try {
        c(r.throw(g));
      } catch (h) {
        i(h);
      }
    }
    function c(g) {
      g.done ? n(g.value) : s(g.value).then(a, o);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function BQ(t, e) {
  var A = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, s, n, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(c) {
    return function(g) {
      return o([c, g]);
    };
  }
  function o(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, c[0] && (A = 0)), A; )
      try {
        if (r = 1, s && (n = c[0] & 2 ? s.return : c[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, c[1])).done)
          return n;
        switch (s = 0, n && (c = [c[0] & 2, n.value]), c[0]) {
          case 0:
          case 1:
            n = c;
            break;
          case 4:
            return A.label++, { value: c[1], done: !1 };
          case 5:
            A.label++, s = c[1], c = [0];
            continue;
          case 7:
            c = A.ops.pop(), A.trys.pop();
            continue;
          default:
            if (n = A.trys, !(n = n.length > 0 && n[n.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              A = 0;
              continue;
            }
            if (c[0] === 3 && (!n || c[1] > n[0] && c[1] < n[3])) {
              A.label = c[1];
              break;
            }
            if (c[0] === 6 && A.label < n[1]) {
              A.label = n[1], n = c;
              break;
            }
            if (n && A.label < n[2]) {
              A.label = n[2], A.ops.push(c);
              break;
            }
            n[2] && A.ops.pop(), A.trys.pop();
            continue;
        }
        c = e.call(t, A);
      } catch (g) {
        c = [6, g], s = 0;
      } finally {
        r = n = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var Ea = Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
};
function IQ(t, e) {
  for (var A in t)
    A !== "default" && !Object.prototype.hasOwnProperty.call(e, A) && Ea(e, t, A);
}
function qo(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, A = e && t[e], r = 0;
  if (A)
    return A.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Cl(t, e) {
  var A = typeof Symbol == "function" && t[Symbol.iterator];
  if (!A)
    return t;
  var r = A.call(t), s, n = [], i;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = r.next()).done; )
      n.push(s.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      s && !s.done && (A = r.return) && A.call(r);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return n;
}
function dQ() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Cl(arguments[e]));
  return t;
}
function fQ() {
  for (var t = 0, e = 0, A = arguments.length; e < A; e++)
    t += arguments[e].length;
  for (var r = Array(t), s = 0, e = 0; e < A; e++)
    for (var n = arguments[e], i = 0, a = n.length; i < a; i++, s++)
      r[s] = n[i];
  return r;
}
function pQ(t, e, A) {
  if (A || arguments.length === 2)
    for (var r = 0, s = e.length, n; r < s; r++)
      (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return t.concat(n || Array.prototype.slice.call(e));
}
function rn(t) {
  return this instanceof rn ? (this.v = t, this) : new rn(t);
}
function wQ(t, e, A) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = A.apply(t, e || []), s, n = [];
  return s = {}, i("next"), i("throw"), i("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function i(E) {
    r[E] && (s[E] = function(Q) {
      return new Promise(function(C, u) {
        n.push([E, Q, C, u]) > 1 || a(E, Q);
      });
    });
  }
  function a(E, Q) {
    try {
      o(r[E](Q));
    } catch (C) {
      h(n[0][3], C);
    }
  }
  function o(E) {
    E.value instanceof rn ? Promise.resolve(E.value.v).then(c, g) : h(n[0][2], E);
  }
  function c(E) {
    a("next", E);
  }
  function g(E) {
    a("throw", E);
  }
  function h(E, Q) {
    E(Q), n.shift(), n.length && a(n[0][0], n[0][1]);
  }
}
function mQ(t) {
  var e, A;
  return e = {}, r("next"), r("throw", function(s) {
    throw s;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(s, n) {
    e[s] = t[s] ? function(i) {
      return (A = !A) ? { value: rn(t[s](i)), done: !1 } : n ? n(i) : i;
    } : n;
  }
}
function yQ(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], A;
  return e ? e.call(t) : (t = typeof qo == "function" ? qo(t) : t[Symbol.iterator](), A = {}, r("next"), r("throw"), r("return"), A[Symbol.asyncIterator] = function() {
    return this;
  }, A);
  function r(n) {
    A[n] = t[n] && function(i) {
      return new Promise(function(a, o) {
        i = t[n](i), s(a, o, i.done, i.value);
      });
    };
  }
  function s(n, i, a, o) {
    Promise.resolve(o).then(function(c) {
      n({ value: c, done: a });
    }, i);
  }
}
function RQ(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var Qd = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function DQ(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && Ea(e, t, A);
  return Qd(e, t), e;
}
function bQ(t) {
  return t && t.__esModule ? t : { default: t };
}
function kQ(t, e, A, r) {
  if (A === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !r : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return A === "m" ? r : A === "a" ? r.call(t) : r ? r.value : e.get(t);
}
function SQ(t, e, A, r, s) {
  if (r === "m")
    throw new TypeError("Private method is not writable");
  if (r === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? s.call(t, A) : s ? s.value = A : e.set(t, A), A;
}
function FQ(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function NQ(t, e, A) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function")
      throw new TypeError("Object expected.");
    var r;
    if (A) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = e[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = e[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    t.stack.push({ value: e, dispose: r, async: A });
  } else
    A && t.stack.push({ async: !0 });
  return e;
}
var Cd = typeof SuppressedError == "function" ? SuppressedError : function(t, e, A) {
  var r = new Error(A);
  return r.name = "SuppressedError", r.error = t, r.suppressed = e, r;
};
function UQ(t) {
  function e(r) {
    t.error = t.hasError ? new Cd(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
  }
  function A() {
    for (; t.stack.length; ) {
      var r = t.stack.pop();
      try {
        var s = r.dispose && r.dispose.call(r.value);
        if (r.async)
          return Promise.resolve(s).then(A, function(n) {
            return e(n), A();
          });
      } catch (n) {
        e(n);
      }
    }
    if (t.hasError)
      throw t.error;
  }
  return A();
}
const Bd = {
  __extends: lQ,
  __assign: xo,
  __rest: hQ,
  __decorate: EQ,
  __param: uQ,
  __metadata: QQ,
  __awaiter: CQ,
  __generator: BQ,
  __createBinding: Ea,
  __exportStar: IQ,
  __values: qo,
  __read: Cl,
  __spread: dQ,
  __spreadArrays: fQ,
  __spreadArray: pQ,
  __await: rn,
  __asyncGenerator: wQ,
  __asyncDelegator: mQ,
  __asyncValues: yQ,
  __makeTemplateObject: RQ,
  __importStar: DQ,
  __importDefault: bQ,
  __classPrivateFieldGet: kQ,
  __classPrivateFieldSet: SQ,
  __classPrivateFieldIn: FQ,
  __addDisposableResource: NQ,
  __disposeResources: UQ
}, Id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: NQ,
  get __assign() {
    return xo;
  },
  __asyncDelegator: mQ,
  __asyncGenerator: wQ,
  __asyncValues: yQ,
  __await: rn,
  __awaiter: CQ,
  __classPrivateFieldGet: kQ,
  __classPrivateFieldIn: FQ,
  __classPrivateFieldSet: SQ,
  __createBinding: Ea,
  __decorate: EQ,
  __disposeResources: UQ,
  __esDecorate: ld,
  __exportStar: IQ,
  __extends: lQ,
  __generator: BQ,
  __importDefault: bQ,
  __importStar: DQ,
  __makeTemplateObject: RQ,
  __metadata: QQ,
  __param: uQ,
  __propKey: Ed,
  __read: Cl,
  __rest: hQ,
  __runInitializers: hd,
  __setFunctionName: ud,
  __spread: dQ,
  __spreadArray: pQ,
  __spreadArrays: fQ,
  __values: qo,
  default: Bd
}, Symbol.toStringTag, { value: "Module" })), Bl = /* @__PURE__ */ gQ(Id);
var Pt = {}, Oa = {}, Pr = {}, Xl;
function ua() {
  if (Xl)
    return Pr;
  Xl = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.EnvMissingError = Pr.EnvError = void 0;
  var t = Bl, e = (
    /** @class */
    function(r) {
      t.__extends(s, r);
      function s(n) {
        var i = this.constructor, a = r.call(this, n) || this;
        return Object.setPrototypeOf(a, i.prototype), Error.captureStackTrace(a, s), a.name = a.constructor.name, a;
      }
      return s;
    }(TypeError)
  );
  Pr.EnvError = e;
  var A = (
    /** @class */
    function(r) {
      t.__extends(s, r);
      function s(n) {
        var i = this.constructor, a = r.call(this, n) || this;
        return Object.setPrototypeOf(a, i.prototype), Error.captureStackTrace(a, s), a.name = a.constructor.name, a;
      }
      return s;
    }(ReferenceError)
  );
  return Pr.EnvMissingError = A, Pr;
}
var Ha = {}, $l;
function TQ() {
  return $l || ($l = 1, function(t) {
    var e;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultReporter = t.envalidErrorFormatter = void 0;
    var A = ua(), r = console.error.bind(console), s = !!(typeof process == "object" && (!((e = process == null ? void 0 : process.versions) === null || e === void 0) && e.node)), n = function(g) {
      return function(h) {
        return s ? "\x1B[".concat(g, "m").concat(h, "\x1B[0m") : h;
      };
    }, i = {
      blue: n("34"),
      white: n("37"),
      yellow: n("33")
    }, a = i.white("================================"), o = function(g, h) {
      h === void 0 && (h = r);
      for (var E = [], Q = [], C = 0, u = Object.entries(g); C < u.length; C++) {
        var B = u[C], I = B[0], d = B[1];
        d instanceof A.EnvMissingError ? E.push("    ".concat(i.blue(I), ": ").concat(d.message || "(required)")) : Q.push("    ".concat(i.blue(I), ": ").concat((d == null ? void 0 : d.message) || "(invalid format)"));
      }
      Q.length && Q.unshift(" ".concat(i.yellow("Invalid"), " environment variables:")), E.length && E.unshift(" ".concat(i.yellow("Missing"), " environment variables:"));
      var w = [
        a,
        Q.sort().join(`
`),
        E.sort().join(`
`),
        a
      ].filter(function(m) {
        return !!m;
      }).join(`
`);
      h(w);
    };
    t.envalidErrorFormatter = o;
    var c = function(g, h) {
      var E = g.errors, Q = E === void 0 ? {} : E, C = h === void 0 ? { logger: r } : h, u = C.onError, B = C.logger;
      if (Object.keys(Q).length)
        if ((0, t.envalidErrorFormatter)(Q, B), u)
          u(Q);
        else if (s)
          B(i.yellow(`
 Exiting with error code 1`)), process.exit(1);
        else
          throw new TypeError("Environment validation failed");
    };
    t.defaultReporter = c;
  }(Ha)), Ha;
}
var Kl;
function dd() {
  return Kl || (Kl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getSanitizedEnv = t.testOnlySymbol = void 0;
    var e = ua(), A = TQ();
    t.testOnlySymbol = Symbol("envalid - test only");
    function r(o) {
      var c = o.spec, g = o.name, h = o.rawValue;
      if (typeof c._parse != "function")
        throw new e.EnvError('Invalid spec for "'.concat(g, '"'));
      var E = c._parse(h);
      if (c.choices)
        if (Array.isArray(c.choices)) {
          if (!c.choices.includes(E))
            throw new e.EnvError('Value "'.concat(E, '" not in choices [').concat(c.choices, "]"));
        } else
          throw new TypeError('"choices" must be an array (in spec for "'.concat(g, '")'));
      if (E == null)
        throw new e.EnvError('Invalid value for env var "'.concat(g, '"'));
      return E;
    }
    function s(o) {
      var c = o.example ? ' (eg. "'.concat(o.example, '")') : "", g = o.docs ? ". See ".concat(o.docs) : "";
      return "".concat(o.desc).concat(c).concat(g);
    }
    var n = function(o, c) {
      return o[c];
    }, i = function(o) {
      return o === t.testOnlySymbol;
    };
    function a(o, c, g) {
      g === void 0 && (g = {});
      for (var h = {}, E = c, Q = {}, C = Object.keys(E), u = n(o, "NODE_ENV"), B = 0, I = C; B < I.length; B++) {
        var d = I[B], w = E[d], m = n(o, d);
        if (m === void 0) {
          var p = u && u !== "production" && w.hasOwnProperty("devDefault");
          if (p) {
            if (h[d] = w.devDefault, i(w.devDefault) && u != "test")
              throw new e.EnvMissingError(s(w));
            continue;
          }
          if ("default" in w) {
            h[d] = w.default;
            continue;
          }
        }
        try {
          if (m === void 0)
            throw h[d] = void 0, new e.EnvMissingError(s(w));
          h[d] = r({ name: d, spec: w, rawValue: m });
        } catch (D) {
          if ((g == null ? void 0 : g.reporter) === null)
            throw D;
          D instanceof Error && (Q[d] = D);
        }
      }
      var R = (g == null ? void 0 : g.reporter) || A.defaultReporter;
      return R({ errors: Q, env: h }), h;
    }
    t.getSanitizedEnv = a;
  }(Oa)), Oa;
}
var Pa = {}, eh;
function vQ() {
  return eh || (eh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.applyDefaultMiddleware = t.accessorMiddleware = t.strictProxyMiddleware = void 0;
    var e = function(s, n, i) {
      i === void 0 && (i = {});
      var a = i.extraInspectables, o = a === void 0 ? [] : a, c = [
        "length",
        "inspect",
        "hasOwnProperty",
        "toJSON",
        Symbol.toStringTag,
        Symbol.iterator,
        // For jest
        "asymmetricMatch",
        "nodeType",
        // For react-refresh, see #150
        "$$typeof",
        // For libs that use `then` checks to see if objects are Promises (see #74):
        "then",
        // For usage with TypeScript esModuleInterop flag
        "__esModule"
      ], g = ["Symbol(util.inspect.custom)", "Symbol(nodejs.util.inspect.custom)"];
      return new Proxy(s, {
        get: function(h, E) {
          var Q;
          if (c.includes(E) || g.includes(E.toString()) || o.includes(E))
            return h[E];
          var C = h.hasOwnProperty(E);
          if (!C)
            throw typeof n == "object" && (!((Q = n == null ? void 0 : n.hasOwnProperty) === null || Q === void 0) && Q.call(n, E)) ? new ReferenceError("[envalid] Env var ".concat(E, " was accessed but not validated. This var is set in the environment; please add an envalid validator for it.")) : new ReferenceError("[envalid] Env var not found: ".concat(E));
          return h[E];
        },
        set: function(h, E) {
          throw new TypeError("[envalid] Attempt to mutate environment value: ".concat(E));
        }
      });
    };
    t.strictProxyMiddleware = e;
    var A = function(s, n) {
      var i = s.NODE_ENV || n.NODE_ENV, a = !i || i === "production";
      return Object.defineProperties(s, {
        isDevelopment: { value: i === "development" },
        isDev: { value: i === "development" },
        isProduction: { value: a },
        isProd: { value: a },
        isTest: { value: i === "test" }
      }), s;
    };
    t.accessorMiddleware = A;
    var r = function(s, n) {
      return (0, t.strictProxyMiddleware)((0, t.accessorMiddleware)(s, n), n);
    };
    t.applyDefaultMiddleware = r;
  }(Pa)), Pa;
}
var Ah;
function fd() {
  if (Ah)
    return Pt;
  Ah = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.testOnly = Pt.customCleanEnv = Pt.cleanEnv = void 0;
  var t = dd(), e = vQ();
  function A(n, i, a) {
    a === void 0 && (a = {});
    var o = (0, t.getSanitizedEnv)(n, i, a);
    return Object.freeze((0, e.applyDefaultMiddleware)(o, n));
  }
  Pt.cleanEnv = A;
  function r(n, i, a, o) {
    o === void 0 && (o = {});
    var c = (0, t.getSanitizedEnv)(n, i, o);
    return Object.freeze(a(c, n));
  }
  Pt.customCleanEnv = r;
  var s = function(n) {
    return process.env.NODE_ENV === "test" ? n : t.testOnlySymbol;
  };
  return Pt.testOnly = s, Pt;
}
var Va = {}, th;
function pd() {
  return th || (th = 1, Object.defineProperty(Va, "__esModule", { value: !0 })), Va;
}
var tA = {}, Vt = {}, rh;
function LQ() {
  if (rh)
    return Vt;
  rh = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.makeStructuredValidator = Vt.makeExactValidator = Vt.makeValidator = void 0;
  var t = Bl, e = function(n) {
    return function(i) {
      return t.__assign(t.__assign({}, i), { _parse: n });
    };
  }, A = function(n) {
    return e(n);
  };
  Vt.makeValidator = A;
  var r = function(n) {
    return e(n);
  };
  Vt.makeExactValidator = r;
  var s = function(n) {
    return e(n);
  };
  return Vt.makeStructuredValidator = s, Vt;
}
var sh;
function wd() {
  if (sh)
    return tA;
  sh = 1, Object.defineProperty(tA, "__esModule", { value: !0 }), tA.json = tA.url = tA.port = tA.host = tA.email = tA.str = tA.num = tA.bool = void 0;
  var t = ua(), e = LQ(), A = function(a) {
    if (!a.length)
      return !1;
    for (var o = a.split("."), c = void 0, g = 0; g < o.length; g++)
      if (c = o[g], !/^[a-z\u00a1-\uffff0-9-]+$/i.test(c) || /[\uff01-\uff5e]/.test(c) || c[0] === "-" || c[c.length - 1] === "-")
        return !1;
    return !0;
  }, r = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/, s = /([a-f0-9]+:+)+[a-f0-9]+/, n = function(a) {
    return a.length ? r.test(a) || s.test(a) : !1;
  }, i = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return tA.bool = (0, e.makeExactValidator)(function(a) {
    switch (a) {
      case !0:
      case "true":
      case "t":
      case "1":
        return !0;
      case !1:
      case "false":
      case "f":
      case "0":
        return !1;
      default:
        throw new t.EnvError('Invalid bool input: "'.concat(a, '"'));
    }
  }), tA.num = (0, e.makeValidator)(function(a) {
    var o = parseFloat(a);
    if (Number.isNaN(o))
      throw new t.EnvError('Invalid number input: "'.concat(a, '"'));
    return o;
  }), tA.str = (0, e.makeValidator)(function(a) {
    if (typeof a == "string")
      return a;
    throw new t.EnvError('Not a string: "'.concat(a, '"'));
  }), tA.email = (0, e.makeValidator)(function(a) {
    if (i.test(a))
      return a;
    throw new t.EnvError('Invalid email address: "'.concat(a, '"'));
  }), tA.host = (0, e.makeValidator)(function(a) {
    if (!A(a) && !n(a))
      throw new t.EnvError('Invalid host (domain or ip): "'.concat(a, '"'));
    return a;
  }), tA.port = (0, e.makeValidator)(function(a) {
    var o = +a;
    if (Number.isNaN(o) || "".concat(o) !== "".concat(a) || o % 1 !== 0 || o < 1 || o > 65535)
      throw new t.EnvError('Invalid port input: "'.concat(a, '"'));
    return o;
  }), tA.url = (0, e.makeValidator)(function(a) {
    try {
      return new URL(a), a;
    } catch {
      throw new t.EnvError('Invalid url: "'.concat(a, '"'));
    }
  }), tA.json = (0, e.makeStructuredValidator)(function(a) {
    try {
      return JSON.parse(a);
    } catch {
      throw new t.EnvError('Invalid json: "'.concat(a, '"'));
    }
  }), tA;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.makeValidator = t.makeExactValidator = void 0;
  var e = Bl;
  e.__exportStar(fd(), t), e.__exportStar(ua(), t), e.__exportStar(vQ(), t), e.__exportStar(pd(), t), e.__exportStar(wd(), t), e.__exportStar(TQ(), t);
  var A = LQ();
  Object.defineProperty(t, "makeExactValidator", { enumerable: !0, get: function() {
    return A.makeExactValidator;
  } }), Object.defineProperty(t, "makeValidator", { enumerable: !0, get: function() {
    return A.makeValidator;
  } });
})(Ql);
var Wa = {}, sn = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.toCommandProperties = Jr.toCommandValue = void 0;
function md(t) {
  return t == null ? "" : typeof t == "string" || t instanceof String ? t : JSON.stringify(t);
}
Jr.toCommandValue = md;
function yd(t) {
  return Object.keys(t).length ? {
    title: t.title,
    file: t.file,
    line: t.startLine,
    endLine: t.endLine,
    col: t.startColumn,
    endColumn: t.endColumn
  } : {};
}
Jr.toCommandProperties = yd;
var Rd = ge && ge.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), Dd = ge && ge.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), bd = ge && ge.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && Rd(e, t, A);
  return Dd(e, t), e;
};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.issue = sn.issueCommand = void 0;
const kd = bd(Yi), MQ = Jr;
function GQ(t, e, A) {
  const r = new Fd(t, e, A);
  process.stdout.write(r.toString() + kd.EOL);
}
sn.issueCommand = GQ;
function Sd(t, e = "") {
  GQ(t, {}, e);
}
sn.issue = Sd;
const nh = "::";
class Fd {
  constructor(e, A, r) {
    e || (e = "missing.command"), this.command = e, this.properties = A, this.message = r;
  }
  toString() {
    let e = nh + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      e += " ";
      let A = !0;
      for (const r in this.properties)
        if (this.properties.hasOwnProperty(r)) {
          const s = this.properties[r];
          s && (A ? A = !1 : e += ",", e += `${r}=${Ud(s)}`);
        }
    }
    return e += `${nh}${Nd(this.message)}`, e;
  }
}
function Nd(t) {
  return MQ.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function Ud(t) {
  return MQ.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var nn = {}, Xi, Td = new Uint8Array(16);
function YQ() {
  if (!Xi && (Xi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Xi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Xi(Td);
}
const vd = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Qa(t) {
  return typeof t == "string" && vd.test(t);
}
var IA = [];
for (var xa = 0; xa < 256; ++xa)
  IA.push((xa + 256).toString(16).substr(1));
function Ca(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, A = (IA[t[e + 0]] + IA[t[e + 1]] + IA[t[e + 2]] + IA[t[e + 3]] + "-" + IA[t[e + 4]] + IA[t[e + 5]] + "-" + IA[t[e + 6]] + IA[t[e + 7]] + "-" + IA[t[e + 8]] + IA[t[e + 9]] + "-" + IA[t[e + 10]] + IA[t[e + 11]] + IA[t[e + 12]] + IA[t[e + 13]] + IA[t[e + 14]] + IA[t[e + 15]]).toLowerCase();
  if (!Qa(A))
    throw TypeError("Stringified UUID is invalid");
  return A;
}
var ih, qa, ja = 0, Za = 0;
function Ld(t, e, A) {
  var r = e && A || 0, s = e || new Array(16);
  t = t || {};
  var n = t.node || ih, i = t.clockseq !== void 0 ? t.clockseq : qa;
  if (n == null || i == null) {
    var a = t.random || (t.rng || YQ)();
    n == null && (n = ih = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]), i == null && (i = qa = (a[6] << 8 | a[7]) & 16383);
  }
  var o = t.msecs !== void 0 ? t.msecs : Date.now(), c = t.nsecs !== void 0 ? t.nsecs : Za + 1, g = o - ja + (c - Za) / 1e4;
  if (g < 0 && t.clockseq === void 0 && (i = i + 1 & 16383), (g < 0 || o > ja) && t.nsecs === void 0 && (c = 0), c >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ja = o, Za = c, qa = i, o += 122192928e5;
  var h = ((o & 268435455) * 1e4 + c) % 4294967296;
  s[r++] = h >>> 24 & 255, s[r++] = h >>> 16 & 255, s[r++] = h >>> 8 & 255, s[r++] = h & 255;
  var E = o / 4294967296 * 1e4 & 268435455;
  s[r++] = E >>> 8 & 255, s[r++] = E & 255, s[r++] = E >>> 24 & 15 | 16, s[r++] = E >>> 16 & 255, s[r++] = i >>> 8 | 128, s[r++] = i & 255;
  for (var Q = 0; Q < 6; ++Q)
    s[r + Q] = n[Q];
  return e || Ca(s);
}
function JQ(t) {
  if (!Qa(t))
    throw TypeError("Invalid UUID");
  var e, A = new Uint8Array(16);
  return A[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, A[1] = e >>> 16 & 255, A[2] = e >>> 8 & 255, A[3] = e & 255, A[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, A[5] = e & 255, A[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, A[7] = e & 255, A[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, A[9] = e & 255, A[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, A[11] = e / 4294967296 & 255, A[12] = e >>> 24 & 255, A[13] = e >>> 16 & 255, A[14] = e >>> 8 & 255, A[15] = e & 255, A;
}
function Md(t) {
  t = unescape(encodeURIComponent(t));
  for (var e = [], A = 0; A < t.length; ++A)
    e.push(t.charCodeAt(A));
  return e;
}
var Gd = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Yd = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function _Q(t, e, A) {
  function r(s, n, i, a) {
    if (typeof s == "string" && (s = Md(s)), typeof n == "string" && (n = JQ(n)), n.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var o = new Uint8Array(16 + s.length);
    if (o.set(n), o.set(s, n.length), o = A(o), o[6] = o[6] & 15 | e, o[8] = o[8] & 63 | 128, i) {
      a = a || 0;
      for (var c = 0; c < 16; ++c)
        i[a + c] = o[c];
      return i;
    }
    return Ca(o);
  }
  try {
    r.name = t;
  } catch {
  }
  return r.DNS = Gd, r.URL = Yd, r;
}
function Jd(t) {
  if (typeof t == "string") {
    var e = unescape(encodeURIComponent(t));
    t = new Uint8Array(e.length);
    for (var A = 0; A < e.length; ++A)
      t[A] = e.charCodeAt(A);
  }
  return _d(Od(Hd(t), t.length * 8));
}
function _d(t) {
  for (var e = [], A = t.length * 32, r = "0123456789abcdef", s = 0; s < A; s += 8) {
    var n = t[s >> 5] >>> s % 32 & 255, i = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(n & 15), 16);
    e.push(i);
  }
  return e;
}
function OQ(t) {
  return (t + 64 >>> 9 << 4) + 14 + 1;
}
function Od(t, e) {
  t[e >> 5] |= 128 << e % 32, t[OQ(e) - 1] = e;
  for (var A = 1732584193, r = -271733879, s = -1732584194, n = 271733878, i = 0; i < t.length; i += 16) {
    var a = A, o = r, c = s, g = n;
    A = wA(A, r, s, n, t[i], 7, -680876936), n = wA(n, A, r, s, t[i + 1], 12, -389564586), s = wA(s, n, A, r, t[i + 2], 17, 606105819), r = wA(r, s, n, A, t[i + 3], 22, -1044525330), A = wA(A, r, s, n, t[i + 4], 7, -176418897), n = wA(n, A, r, s, t[i + 5], 12, 1200080426), s = wA(s, n, A, r, t[i + 6], 17, -1473231341), r = wA(r, s, n, A, t[i + 7], 22, -45705983), A = wA(A, r, s, n, t[i + 8], 7, 1770035416), n = wA(n, A, r, s, t[i + 9], 12, -1958414417), s = wA(s, n, A, r, t[i + 10], 17, -42063), r = wA(r, s, n, A, t[i + 11], 22, -1990404162), A = wA(A, r, s, n, t[i + 12], 7, 1804603682), n = wA(n, A, r, s, t[i + 13], 12, -40341101), s = wA(s, n, A, r, t[i + 14], 17, -1502002290), r = wA(r, s, n, A, t[i + 15], 22, 1236535329), A = mA(A, r, s, n, t[i + 1], 5, -165796510), n = mA(n, A, r, s, t[i + 6], 9, -1069501632), s = mA(s, n, A, r, t[i + 11], 14, 643717713), r = mA(r, s, n, A, t[i], 20, -373897302), A = mA(A, r, s, n, t[i + 5], 5, -701558691), n = mA(n, A, r, s, t[i + 10], 9, 38016083), s = mA(s, n, A, r, t[i + 15], 14, -660478335), r = mA(r, s, n, A, t[i + 4], 20, -405537848), A = mA(A, r, s, n, t[i + 9], 5, 568446438), n = mA(n, A, r, s, t[i + 14], 9, -1019803690), s = mA(s, n, A, r, t[i + 3], 14, -187363961), r = mA(r, s, n, A, t[i + 8], 20, 1163531501), A = mA(A, r, s, n, t[i + 13], 5, -1444681467), n = mA(n, A, r, s, t[i + 2], 9, -51403784), s = mA(s, n, A, r, t[i + 7], 14, 1735328473), r = mA(r, s, n, A, t[i + 12], 20, -1926607734), A = yA(A, r, s, n, t[i + 5], 4, -378558), n = yA(n, A, r, s, t[i + 8], 11, -2022574463), s = yA(s, n, A, r, t[i + 11], 16, 1839030562), r = yA(r, s, n, A, t[i + 14], 23, -35309556), A = yA(A, r, s, n, t[i + 1], 4, -1530992060), n = yA(n, A, r, s, t[i + 4], 11, 1272893353), s = yA(s, n, A, r, t[i + 7], 16, -155497632), r = yA(r, s, n, A, t[i + 10], 23, -1094730640), A = yA(A, r, s, n, t[i + 13], 4, 681279174), n = yA(n, A, r, s, t[i], 11, -358537222), s = yA(s, n, A, r, t[i + 3], 16, -722521979), r = yA(r, s, n, A, t[i + 6], 23, 76029189), A = yA(A, r, s, n, t[i + 9], 4, -640364487), n = yA(n, A, r, s, t[i + 12], 11, -421815835), s = yA(s, n, A, r, t[i + 15], 16, 530742520), r = yA(r, s, n, A, t[i + 2], 23, -995338651), A = RA(A, r, s, n, t[i], 6, -198630844), n = RA(n, A, r, s, t[i + 7], 10, 1126891415), s = RA(s, n, A, r, t[i + 14], 15, -1416354905), r = RA(r, s, n, A, t[i + 5], 21, -57434055), A = RA(A, r, s, n, t[i + 12], 6, 1700485571), n = RA(n, A, r, s, t[i + 3], 10, -1894986606), s = RA(s, n, A, r, t[i + 10], 15, -1051523), r = RA(r, s, n, A, t[i + 1], 21, -2054922799), A = RA(A, r, s, n, t[i + 8], 6, 1873313359), n = RA(n, A, r, s, t[i + 15], 10, -30611744), s = RA(s, n, A, r, t[i + 6], 15, -1560198380), r = RA(r, s, n, A, t[i + 13], 21, 1309151649), A = RA(A, r, s, n, t[i + 4], 6, -145523070), n = RA(n, A, r, s, t[i + 11], 10, -1120210379), s = RA(s, n, A, r, t[i + 2], 15, 718787259), r = RA(r, s, n, A, t[i + 9], 21, -343485551), A = vr(A, a), r = vr(r, o), s = vr(s, c), n = vr(n, g);
  }
  return [A, r, s, n];
}
function Hd(t) {
  if (t.length === 0)
    return [];
  for (var e = t.length * 8, A = new Uint32Array(OQ(e)), r = 0; r < e; r += 8)
    A[r >> 5] |= (t[r / 8] & 255) << r % 32;
  return A;
}
function vr(t, e) {
  var A = (t & 65535) + (e & 65535), r = (t >> 16) + (e >> 16) + (A >> 16);
  return r << 16 | A & 65535;
}
function Pd(t, e) {
  return t << e | t >>> 32 - e;
}
function Ba(t, e, A, r, s, n) {
  return vr(Pd(vr(vr(e, t), vr(r, n)), s), A);
}
function wA(t, e, A, r, s, n, i) {
  return Ba(e & A | ~e & r, t, e, s, n, i);
}
function mA(t, e, A, r, s, n, i) {
  return Ba(e & r | A & ~r, t, e, s, n, i);
}
function yA(t, e, A, r, s, n, i) {
  return Ba(e ^ A ^ r, t, e, s, n, i);
}
function RA(t, e, A, r, s, n, i) {
  return Ba(A ^ (e | ~r), t, e, s, n, i);
}
var Vd = _Q("v3", 48, Jd);
const Wd = Vd;
function xd(t, e, A) {
  t = t || {};
  var r = t.random || (t.rng || YQ)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    A = A || 0;
    for (var s = 0; s < 16; ++s)
      e[A + s] = r[s];
    return e;
  }
  return Ca(r);
}
function qd(t, e, A, r) {
  switch (t) {
    case 0:
      return e & A ^ ~e & r;
    case 1:
      return e ^ A ^ r;
    case 2:
      return e & A ^ e & r ^ A & r;
    case 3:
      return e ^ A ^ r;
  }
}
function za(t, e) {
  return t << e | t >>> 32 - e;
}
function jd(t) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782], A = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof t == "string") {
    var r = unescape(encodeURIComponent(t));
    t = [];
    for (var s = 0; s < r.length; ++s)
      t.push(r.charCodeAt(s));
  } else
    Array.isArray(t) || (t = Array.prototype.slice.call(t));
  t.push(128);
  for (var n = t.length / 4 + 2, i = Math.ceil(n / 16), a = new Array(i), o = 0; o < i; ++o) {
    for (var c = new Uint32Array(16), g = 0; g < 16; ++g)
      c[g] = t[o * 64 + g * 4] << 24 | t[o * 64 + g * 4 + 1] << 16 | t[o * 64 + g * 4 + 2] << 8 | t[o * 64 + g * 4 + 3];
    a[o] = c;
  }
  a[i - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32), a[i - 1][14] = Math.floor(a[i - 1][14]), a[i - 1][15] = (t.length - 1) * 8 & 4294967295;
  for (var h = 0; h < i; ++h) {
    for (var E = new Uint32Array(80), Q = 0; Q < 16; ++Q)
      E[Q] = a[h][Q];
    for (var C = 16; C < 80; ++C)
      E[C] = za(E[C - 3] ^ E[C - 8] ^ E[C - 14] ^ E[C - 16], 1);
    for (var u = A[0], B = A[1], I = A[2], d = A[3], w = A[4], m = 0; m < 80; ++m) {
      var p = Math.floor(m / 20), R = za(u, 5) + qd(p, B, I, d) + w + e[p] + E[m] >>> 0;
      w = d, d = I, I = za(B, 30) >>> 0, B = u, u = R;
    }
    A[0] = A[0] + u >>> 0, A[1] = A[1] + B >>> 0, A[2] = A[2] + I >>> 0, A[3] = A[3] + d >>> 0, A[4] = A[4] + w >>> 0;
  }
  return [A[0] >> 24 & 255, A[0] >> 16 & 255, A[0] >> 8 & 255, A[0] & 255, A[1] >> 24 & 255, A[1] >> 16 & 255, A[1] >> 8 & 255, A[1] & 255, A[2] >> 24 & 255, A[2] >> 16 & 255, A[2] >> 8 & 255, A[2] & 255, A[3] >> 24 & 255, A[3] >> 16 & 255, A[3] >> 8 & 255, A[3] & 255, A[4] >> 24 & 255, A[4] >> 16 & 255, A[4] >> 8 & 255, A[4] & 255];
}
var Zd = _Q("v5", 80, jd);
const zd = Zd, Xd = "00000000-0000-0000-0000-000000000000";
function $d(t) {
  if (!Qa(t))
    throw TypeError("Invalid UUID");
  return parseInt(t.substr(14, 1), 16);
}
const Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: Xd,
  parse: JQ,
  stringify: Ca,
  v1: Ld,
  v3: Wd,
  v4: xd,
  v5: zd,
  validate: Qa,
  version: $d
}, Symbol.toStringTag, { value: "Module" })), ef = /* @__PURE__ */ gQ(Kd);
var Af = ge && ge.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), tf = ge && ge.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), HQ = ge && ge.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && Af(e, t, A);
  return tf(e, t), e;
};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.prepareKeyValueMessage = nn.issueFileCommand = void 0;
const oh = HQ(eQ), Lg = HQ(Yi), rf = ef, PQ = Jr;
function sf(t, e) {
  const A = process.env[`GITHUB_${t}`];
  if (!A)
    throw new Error(`Unable to find environment variable for file command ${t}`);
  if (!oh.existsSync(A))
    throw new Error(`Missing file at path: ${A}`);
  oh.appendFileSync(A, `${PQ.toCommandValue(e)}${Lg.EOL}`, {
    encoding: "utf8"
  });
}
nn.issueFileCommand = sf;
function nf(t, e) {
  const A = `ghadelimiter_${rf.v4()}`, r = PQ.toCommandValue(e);
  if (t.includes(A))
    throw new Error(`Unexpected input: name should not contain the delimiter "${A}"`);
  if (r.includes(A))
    throw new Error(`Unexpected input: value should not contain the delimiter "${A}"`);
  return `${t}<<${A}${Lg.EOL}${r}${Lg.EOL}${A}`;
}
nn.prepareKeyValueMessage = nf;
var mn = {}, QA = {}, on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.checkBypass = on.getProxyUrl = void 0;
function of(t) {
  const e = t.protocol === "https:";
  if (VQ(t))
    return;
  const A = (() => e ? process.env.https_proxy || process.env.HTTPS_PROXY : process.env.http_proxy || process.env.HTTP_PROXY)();
  if (A)
    try {
      return new URL(A);
    } catch {
      if (!A.startsWith("http://") && !A.startsWith("https://"))
        return new URL(`http://${A}`);
    }
  else
    return;
}
on.getProxyUrl = of;
function VQ(t) {
  if (!t.hostname)
    return !1;
  const e = t.hostname;
  if (af(e))
    return !0;
  const A = process.env.no_proxy || process.env.NO_PROXY || "";
  if (!A)
    return !1;
  let r;
  t.port ? r = Number(t.port) : t.protocol === "http:" ? r = 80 : t.protocol === "https:" && (r = 443);
  const s = [t.hostname.toUpperCase()];
  typeof r == "number" && s.push(`${s[0]}:${r}`);
  for (const n of A.split(",").map((i) => i.trim().toUpperCase()).filter((i) => i))
    if (n === "*" || s.some((i) => i === n || i.endsWith(`.${n}`) || n.startsWith(".") && i.endsWith(`${n}`)))
      return !0;
  return !1;
}
on.checkBypass = VQ;
function af(t) {
  const e = t.toLowerCase();
  return e === "localhost" || e.startsWith("127.") || e.startsWith("[::1]") || e.startsWith("[0:0:0:0:0:0:0:1]");
}
var Cn = {}, cf = rQ, Il = En, WQ = tQ, gf = un, lf = Jt;
Cn.httpOverHttp = hf;
Cn.httpsOverHttp = Ef;
Cn.httpOverHttps = uf;
Cn.httpsOverHttps = Qf;
function hf(t) {
  var e = new gr(t);
  return e.request = Il.request, e;
}
function Ef(t) {
  var e = new gr(t);
  return e.request = Il.request, e.createSocket = xQ, e.defaultPort = 443, e;
}
function uf(t) {
  var e = new gr(t);
  return e.request = WQ.request, e;
}
function Qf(t) {
  var e = new gr(t);
  return e.request = WQ.request, e.createSocket = xQ, e.defaultPort = 443, e;
}
function gr(t) {
  var e = this;
  e.options = t || {}, e.proxyOptions = e.options.proxy || {}, e.maxSockets = e.options.maxSockets || Il.Agent.defaultMaxSockets, e.requests = [], e.sockets = [], e.on("free", function(r, s, n, i) {
    for (var a = qQ(s, n, i), o = 0, c = e.requests.length; o < c; ++o) {
      var g = e.requests[o];
      if (g.host === a.host && g.port === a.port) {
        e.requests.splice(o, 1), g.request.onSocket(r);
        return;
      }
    }
    r.destroy(), e.removeSocket(r);
  });
}
lf.inherits(gr, gf.EventEmitter);
gr.prototype.addRequest = function(e, A, r, s) {
  var n = this, i = dl({ request: e }, n.options, qQ(A, r, s));
  if (n.sockets.length >= this.maxSockets) {
    n.requests.push(i);
    return;
  }
  n.createSocket(i, function(a) {
    a.on("free", o), a.on("close", c), a.on("agentRemove", c), e.onSocket(a);
    function o() {
      n.emit("free", a, i);
    }
    function c(g) {
      n.removeSocket(a), a.removeListener("free", o), a.removeListener("close", c), a.removeListener("agentRemove", c);
    }
  });
};
gr.prototype.createSocket = function(e, A) {
  var r = this, s = {};
  r.sockets.push(s);
  var n = dl({}, r.proxyOptions, {
    method: "CONNECT",
    path: e.host + ":" + e.port,
    agent: !1,
    headers: {
      host: e.host + ":" + e.port
    }
  });
  e.localAddress && (n.localAddress = e.localAddress), n.proxyAuth && (n.headers = n.headers || {}, n.headers["Proxy-Authorization"] = "Basic " + new Buffer(n.proxyAuth).toString("base64")), mr("making CONNECT request");
  var i = r.request(n);
  i.useChunkedEncodingByDefault = !1, i.once("response", a), i.once("upgrade", o), i.once("connect", c), i.once("error", g), i.end();
  function a(h) {
    h.upgrade = !0;
  }
  function o(h, E, Q) {
    process.nextTick(function() {
      c(h, E, Q);
    });
  }
  function c(h, E, Q) {
    if (i.removeAllListeners(), E.removeAllListeners(), h.statusCode !== 200) {
      mr(
        "tunneling socket could not be established, statusCode=%d",
        h.statusCode
      ), E.destroy();
      var C = new Error("tunneling socket could not be established, statusCode=" + h.statusCode);
      C.code = "ECONNRESET", e.request.emit("error", C), r.removeSocket(s);
      return;
    }
    if (Q.length > 0) {
      mr("got illegal response body from proxy"), E.destroy();
      var C = new Error("got illegal response body from proxy");
      C.code = "ECONNRESET", e.request.emit("error", C), r.removeSocket(s);
      return;
    }
    return mr("tunneling connection has established"), r.sockets[r.sockets.indexOf(s)] = E, A(E);
  }
  function g(h) {
    i.removeAllListeners(), mr(
      `tunneling socket could not be established, cause=%s
`,
      h.message,
      h.stack
    );
    var E = new Error("tunneling socket could not be established, cause=" + h.message);
    E.code = "ECONNRESET", e.request.emit("error", E), r.removeSocket(s);
  }
};
gr.prototype.removeSocket = function(e) {
  var A = this.sockets.indexOf(e);
  if (A !== -1) {
    this.sockets.splice(A, 1);
    var r = this.requests.shift();
    r && this.createSocket(r, function(s) {
      r.request.onSocket(s);
    });
  }
};
function xQ(t, e) {
  var A = this;
  gr.prototype.createSocket.call(A, t, function(r) {
    var s = t.request.getHeader("host"), n = dl({}, A.options, {
      socket: r,
      servername: s ? s.replace(/:.*$/, "") : t.host
    }), i = cf.connect(0, n);
    A.sockets[A.sockets.indexOf(r)] = i, e(i);
  });
}
function qQ(t, e, A) {
  return typeof t == "string" ? {
    host: t,
    port: e,
    localAddress: A
  } : t;
}
function dl(t) {
  for (var e = 1, A = arguments.length; e < A; ++e) {
    var r = arguments[e];
    if (typeof r == "object")
      for (var s = Object.keys(r), n = 0, i = s.length; n < i; ++n) {
        var a = s[n];
        r[a] !== void 0 && (t[a] = r[a]);
      }
  }
  return t;
}
var mr;
process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? mr = function() {
  var t = Array.prototype.slice.call(arguments);
  typeof t[0] == "string" ? t[0] = "TUNNEL: " + t[0] : t.unshift("TUNNEL:"), console.error.apply(console, t);
} : mr = function() {
};
Cn.debug = mr;
var Cf = Cn, Ee = {}, Je = {
  kClose: Symbol("close"),
  kDestroy: Symbol("destroy"),
  kDispatch: Symbol("dispatch"),
  kUrl: Symbol("url"),
  kWriting: Symbol("writing"),
  kResuming: Symbol("resuming"),
  kQueue: Symbol("queue"),
  kConnect: Symbol("connect"),
  kConnecting: Symbol("connecting"),
  kHeadersList: Symbol("headers list"),
  kKeepAliveDefaultTimeout: Symbol("default keep alive timeout"),
  kKeepAliveMaxTimeout: Symbol("max keep alive timeout"),
  kKeepAliveTimeoutThreshold: Symbol("keep alive timeout threshold"),
  kKeepAliveTimeoutValue: Symbol("keep alive timeout"),
  kKeepAlive: Symbol("keep alive"),
  kHeadersTimeout: Symbol("headers timeout"),
  kBodyTimeout: Symbol("body timeout"),
  kServerName: Symbol("server name"),
  kLocalAddress: Symbol("local address"),
  kHost: Symbol("host"),
  kNoRef: Symbol("no ref"),
  kBodyUsed: Symbol("used"),
  kRunning: Symbol("running"),
  kBlocking: Symbol("blocking"),
  kPending: Symbol("pending"),
  kSize: Symbol("size"),
  kBusy: Symbol("busy"),
  kQueued: Symbol("queued"),
  kFree: Symbol("free"),
  kConnected: Symbol("connected"),
  kClosed: Symbol("closed"),
  kNeedDrain: Symbol("need drain"),
  kReset: Symbol("reset"),
  kDestroyed: Symbol.for("nodejs.stream.destroyed"),
  kMaxHeadersSize: Symbol("max headers size"),
  kRunningIdx: Symbol("running index"),
  kPendingIdx: Symbol("pending index"),
  kError: Symbol("error"),
  kClients: Symbol("clients"),
  kClient: Symbol("client"),
  kParser: Symbol("parser"),
  kOnDestroyed: Symbol("destroy callbacks"),
  kPipelining: Symbol("pipelining"),
  kSocket: Symbol("socket"),
  kHostHeader: Symbol("host header"),
  kConnector: Symbol("connector"),
  kStrictContentLength: Symbol("strict content length"),
  kMaxRedirections: Symbol("maxRedirections"),
  kMaxRequests: Symbol("maxRequestsPerClient"),
  kProxy: Symbol("proxy agent options"),
  kCounter: Symbol("socket request counter"),
  kInterceptors: Symbol("dispatch interceptors"),
  kMaxResponseSize: Symbol("max response size"),
  kHTTP2Session: Symbol("http2Session"),
  kHTTP2SessionState: Symbol("http2Session state"),
  kHTTP2BuildRequest: Symbol("http2 build request"),
  kHTTP1BuildRequest: Symbol("http1 build request"),
  kHTTP2CopyHeaders: Symbol("http2 copy headers"),
  kHTTPConnVersion: Symbol("http connection version")
};
let CA = class extends Error {
  constructor(e) {
    super(e), this.name = "UndiciError", this.code = "UND_ERR";
  }
}, Bf = class jQ extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, jQ), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
  }
}, If = class ZQ extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, ZQ), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
  }
}, df = class zQ extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, zQ), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
  }
}, ff = class XQ extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, XQ), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
  }
}, pf = class $Q extends CA {
  constructor(e, A, r, s) {
    super(e), Error.captureStackTrace(this, $Q), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = s, this.status = A, this.statusCode = A, this.headers = r;
  }
}, wf = class KQ extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, KQ), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
  }
}, mf = class eC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, eC), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
  }
}, yf = class AC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, AC), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
  }
}, Rf = class tC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, tC), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
  }
}, Df = class rC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, rC), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
  }
}, bf = class sC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, sC), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
  }
}, kf = class nC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, nC), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
  }
}, Sf = class iC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, iC), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
  }
}, Ff = class oC extends CA {
  constructor(e, A) {
    super(e), Error.captureStackTrace(this, oC), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = A;
  }
}, aC = class cC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, cC), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
  }
}, Nf = class extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, aC), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
  }
}, Uf = class gC extends Error {
  constructor(e, A, r) {
    super(e), Error.captureStackTrace(this, gC), this.name = "HTTPParserError", this.code = A ? `HPE_${A}` : void 0, this.data = r ? r.toString() : void 0;
  }
}, Tf = class lC extends CA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, lC), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
  }
};
var Te = {
  HTTPParserError: Uf,
  UndiciError: CA,
  HeadersTimeoutError: If,
  HeadersOverflowError: df,
  BodyTimeoutError: ff,
  RequestContentLengthMismatchError: Df,
  ConnectTimeoutError: Bf,
  ResponseStatusCodeError: pf,
  InvalidArgumentError: wf,
  InvalidReturnValueError: mf,
  RequestAbortedError: yf,
  ClientDestroyedError: kf,
  ClientClosedError: Sf,
  InformationalError: Rf,
  SocketError: Ff,
  NotSupportedError: aC,
  ResponseContentLengthMismatchError: bf,
  BalancedPoolMissingUpstreamError: Nf,
  ResponseExceededMaxSizeError: Tf
};
const hC = eA, { kDestroyed: EC, kBodyUsed: ah } = Je, { IncomingMessage: vf } = En, an = _t, Lf = hl, { InvalidArgumentError: dA } = Te, { Blob: ch } = ds, jo = Jt, { stringify: Mf } = ed, [Xa, gh] = process.versions.node.split(".").map((t) => Number(t));
function Gf() {
}
function fl(t) {
  return t && typeof t == "object" && typeof t.pipe == "function" && typeof t.on == "function";
}
function uC(t) {
  return ch && t instanceof ch || t && typeof t == "object" && (typeof t.stream == "function" || typeof t.arrayBuffer == "function") && /^(Blob|File)$/.test(t[Symbol.toStringTag]);
}
function Yf(t, e) {
  if (t.includes("?") || t.includes("#"))
    throw new Error('Query params cannot be passed when url already contains "?" or "#".');
  const A = Mf(e);
  return A && (t += "?" + A), t;
}
function QC(t) {
  if (typeof t == "string") {
    if (t = new URL(t), !/^https?:/.test(t.origin || t.protocol))
      throw new dA("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    return t;
  }
  if (!t || typeof t != "object")
    throw new dA("Invalid URL: The URL argument must be a non-null object.");
  if (!/^https?:/.test(t.origin || t.protocol))
    throw new dA("Invalid URL protocol: the URL must start with `http:` or `https:`.");
  if (!(t instanceof URL)) {
    if (t.port != null && t.port !== "" && !Number.isFinite(parseInt(t.port)))
      throw new dA("Invalid URL: port must be a valid integer or a string representation of an integer.");
    if (t.path != null && typeof t.path != "string")
      throw new dA("Invalid URL path: the path must be a string or null/undefined.");
    if (t.pathname != null && typeof t.pathname != "string")
      throw new dA("Invalid URL pathname: the pathname must be a string or null/undefined.");
    if (t.hostname != null && typeof t.hostname != "string")
      throw new dA("Invalid URL hostname: the hostname must be a string or null/undefined.");
    if (t.origin != null && typeof t.origin != "string")
      throw new dA("Invalid URL origin: the origin must be a string or null/undefined.");
    const e = t.port != null ? t.port : t.protocol === "https:" ? 443 : 80;
    let A = t.origin != null ? t.origin : `${t.protocol}//${t.hostname}:${e}`, r = t.path != null ? t.path : `${t.pathname || ""}${t.search || ""}`;
    A.endsWith("/") && (A = A.substring(0, A.length - 1)), r && !r.startsWith("/") && (r = `/${r}`), t = new URL(A + r);
  }
  return t;
}
function Jf(t) {
  if (t = QC(t), t.pathname !== "/" || t.search || t.hash)
    throw new dA("invalid url");
  return t;
}
function _f(t) {
  if (t[0] === "[") {
    const A = t.indexOf("]");
    return hC(A !== -1), t.substr(1, A - 1);
  }
  const e = t.indexOf(":");
  return e === -1 ? t : t.substr(0, e);
}
function Of(t) {
  if (!t)
    return null;
  hC.strictEqual(typeof t, "string");
  const e = _f(t);
  return Lf.isIP(e) ? "" : e;
}
function Hf(t) {
  return JSON.parse(JSON.stringify(t));
}
function Pf(t) {
  return t != null && typeof t[Symbol.asyncIterator] == "function";
}
function Vf(t) {
  return t != null && (typeof t[Symbol.iterator] == "function" || typeof t[Symbol.asyncIterator] == "function");
}
function Wf(t) {
  if (t == null)
    return 0;
  if (fl(t)) {
    const e = t._readableState;
    return e && e.objectMode === !1 && e.ended === !0 && Number.isFinite(e.length) ? e.length : null;
  } else {
    if (uC(t))
      return t.size != null ? t.size : null;
    if (BC(t))
      return t.byteLength;
  }
  return null;
}
function pl(t) {
  return !t || !!(t.destroyed || t[EC]);
}
function CC(t) {
  const e = t && t._readableState;
  return pl(t) && e && !e.endEmitted;
}
function xf(t, e) {
  t == null || !fl(t) || pl(t) || (typeof t.destroy == "function" ? (Object.getPrototypeOf(t).constructor === vf && (t.socket = null), t.destroy(e)) : e && process.nextTick((A, r) => {
    A.emit("error", r);
  }, t, e), t.destroyed !== !0 && (t[EC] = !0));
}
const qf = /timeout=(\d+)/;
function jf(t) {
  const e = t.toString().match(qf);
  return e ? parseInt(e[1], 10) * 1e3 : null;
}
function Zf(t, e = {}) {
  if (!Array.isArray(t))
    return t;
  for (let A = 0; A < t.length; A += 2) {
    const r = t[A].toString().toLowerCase();
    let s = e[r];
    s ? (Array.isArray(s) || (s = [s], e[r] = s), s.push(t[A + 1].toString("utf8"))) : Array.isArray(t[A + 1]) ? e[r] = t[A + 1] : e[r] = t[A + 1].toString("utf8");
  }
  return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
}
function zf(t) {
  const e = [];
  let A = !1, r = -1;
  for (let s = 0; s < t.length; s += 2) {
    const n = t[s + 0].toString(), i = t[s + 1].toString("utf8");
    n.length === 14 && (n === "content-length" || n.toLowerCase() === "content-length") ? (e.push(n, i), A = !0) : n.length === 19 && (n === "content-disposition" || n.toLowerCase() === "content-disposition") ? r = e.push(n, i) - 1 : e.push(n, i);
  }
  return A && r !== -1 && (e[r] = Buffer.from(e[r]).toString("latin1")), e;
}
function BC(t) {
  return t instanceof Uint8Array || Buffer.isBuffer(t);
}
function Xf(t, e, A) {
  if (!t || typeof t != "object")
    throw new dA("handler must be an object");
  if (typeof t.onConnect != "function")
    throw new dA("invalid onConnect method");
  if (typeof t.onError != "function")
    throw new dA("invalid onError method");
  if (typeof t.onBodySent != "function" && t.onBodySent !== void 0)
    throw new dA("invalid onBodySent method");
  if (A || e === "CONNECT") {
    if (typeof t.onUpgrade != "function")
      throw new dA("invalid onUpgrade method");
  } else {
    if (typeof t.onHeaders != "function")
      throw new dA("invalid onHeaders method");
    if (typeof t.onData != "function")
      throw new dA("invalid onData method");
    if (typeof t.onComplete != "function")
      throw new dA("invalid onComplete method");
  }
}
function $f(t) {
  return !!(t && (an.isDisturbed ? an.isDisturbed(t) || t[ah] : t[ah] || t.readableDidRead || t._readableState && t._readableState.dataEmitted || CC(t)));
}
function Kf(t) {
  return !!(t && (an.isErrored ? an.isErrored(t) : /state: 'errored'/.test(
    jo.inspect(t)
  )));
}
function ep(t) {
  return !!(t && (an.isReadable ? an.isReadable(t) : /state: 'readable'/.test(
    jo.inspect(t)
  )));
}
function Ap(t) {
  return {
    localAddress: t.localAddress,
    localPort: t.localPort,
    remoteAddress: t.remoteAddress,
    remotePort: t.remotePort,
    remoteFamily: t.remoteFamily,
    timeout: t.timeout,
    bytesWritten: t.bytesWritten,
    bytesRead: t.bytesRead
  };
}
async function* tp(t) {
  for await (const e of t)
    yield Buffer.isBuffer(e) ? e : Buffer.from(e);
}
let yn;
function rp(t) {
  if (yn || (yn = Yr.ReadableStream), yn.from)
    return yn.from(tp(t));
  let e;
  return new yn(
    {
      async start() {
        e = t[Symbol.asyncIterator]();
      },
      async pull(A) {
        const { done: r, value: s } = await e.next();
        if (r)
          queueMicrotask(() => {
            A.close();
          });
        else {
          const n = Buffer.isBuffer(s) ? s : Buffer.from(s);
          A.enqueue(new Uint8Array(n));
        }
        return A.desiredSize > 0;
      },
      async cancel(A) {
        await e.return();
      }
    },
    0
  );
}
function sp(t) {
  return t && typeof t == "object" && typeof t.append == "function" && typeof t.delete == "function" && typeof t.get == "function" && typeof t.getAll == "function" && typeof t.has == "function" && typeof t.set == "function" && t[Symbol.toStringTag] === "FormData";
}
function np(t) {
  if (t) {
    if (typeof t.throwIfAborted == "function")
      t.throwIfAborted();
    else if (t.aborted) {
      const e = new Error("The operation was aborted");
      throw e.name = "AbortError", e;
    }
  }
}
let $i;
function ip(t, e) {
  return typeof Symbol.dispose == "symbol" && ($i || ($i = un), typeof $i.addAbortListener == "function" && "aborted" in t) ? $i.addAbortListener(t, e) : "addEventListener" in t ? (t.addEventListener("abort", e, { once: !0 }), () => t.removeEventListener("abort", e)) : (t.addListener("abort", e), () => t.removeListener("abort", e));
}
const op = !!String.prototype.toWellFormed;
function ap(t) {
  return op ? `${t}`.toWellFormed() : jo.toUSVString ? jo.toUSVString(t) : `${t}`;
}
const IC = /* @__PURE__ */ Object.create(null);
IC.enumerable = !0;
var fe = {
  kEnumerableProperty: IC,
  nop: Gf,
  isDisturbed: $f,
  isErrored: Kf,
  isReadable: ep,
  toUSVString: ap,
  isReadableAborted: CC,
  isBlobLike: uC,
  parseOrigin: Jf,
  parseURL: QC,
  getServerName: Of,
  isStream: fl,
  isIterable: Vf,
  isAsyncIterable: Pf,
  isDestroyed: pl,
  parseRawHeaders: zf,
  parseHeaders: Zf,
  parseKeepAliveTimeout: jf,
  destroy: xf,
  bodyLength: Wf,
  deepClone: Hf,
  ReadableStreamFrom: rp,
  isBuffer: BC,
  validateHandler: Xf,
  getSocketInfo: Ap,
  isFormDataLike: sp,
  buildURL: Yf,
  throwIfAborted: np,
  addAbortListener: ip,
  nodeMajor: Xa,
  nodeMinor: gh,
  nodeHasAutoSelectFamily: Xa > 18 || Xa === 18 && gh >= 13
};
let $a = Date.now(), Br;
const pr = [];
function cp() {
  $a = Date.now();
  let t = pr.length, e = 0;
  for (; e < t; ) {
    const A = pr[e];
    A.state === 0 ? A.state = $a + A.delay : A.state > 0 && $a >= A.state && (A.state = -1, A.callback(A.opaque)), A.state === -1 ? (A.state = -2, e !== t - 1 ? pr[e] = pr.pop() : pr.pop(), t -= 1) : e += 1;
  }
  pr.length > 0 && dC();
}
function dC() {
  Br && Br.refresh ? Br.refresh() : (clearTimeout(Br), Br = setTimeout(cp, 1e3), Br.unref && Br.unref());
}
class lh {
  constructor(e, A, r) {
    this.callback = e, this.delay = A, this.opaque = r, this.state = -2, this.refresh();
  }
  refresh() {
    this.state === -2 && (pr.push(this), (!Br || pr.length === 1) && dC()), this.state = 0;
  }
  clear() {
    this.state = -1;
  }
}
var gp = {
  setTimeout(t, e, A) {
    return e < 1e3 ? setTimeout(t, e, A) : new lh(t, e, A);
  },
  clearTimeout(t) {
    t instanceof lh ? t.clear() : clearTimeout(t);
  }
}, ys = { exports: {} }, Ka, hh;
function fC() {
  if (hh)
    return Ka;
  hh = 1;
  const t = sQ.EventEmitter, e = Qn.inherits;
  function A(r) {
    if (typeof r == "string" && (r = Buffer.from(r)), !Buffer.isBuffer(r))
      throw new TypeError("The needle has to be a String or a Buffer.");
    const s = r.length;
    if (s === 0)
      throw new Error("The needle cannot be an empty String/Buffer.");
    if (s > 256)
      throw new Error("The needle cannot have a length bigger than 256.");
    this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(s), this._lookbehind_size = 0, this._needle = r, this._bufpos = 0, this._lookbehind = Buffer.alloc(s);
    for (var n = 0; n < s - 1; ++n)
      this._occ[r[n]] = s - 1 - n;
  }
  return e(A, t), A.prototype.reset = function() {
    this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
  }, A.prototype.push = function(r, s) {
    Buffer.isBuffer(r) || (r = Buffer.from(r, "binary"));
    const n = r.length;
    this._bufpos = s || 0;
    let i;
    for (; i !== n && this.matches < this.maxMatches; )
      i = this._sbmh_feed(r);
    return i;
  }, A.prototype._sbmh_feed = function(r) {
    const s = r.length, n = this._needle, i = n.length, a = n[i - 1];
    let o = -this._lookbehind_size, c;
    if (o < 0) {
      for (; o < 0 && o <= s - i; ) {
        if (c = this._sbmh_lookup_char(r, o + i - 1), c === a && this._sbmh_memcmp(r, o, i - 1))
          return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = o + i;
        o += this._occ[c];
      }
      if (o < 0)
        for (; o < 0 && !this._sbmh_memcmp(r, o, s - o); )
          ++o;
      if (o >= 0)
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      else {
        const g = this._lookbehind_size + o;
        return g > 0 && this.emit("info", !1, this._lookbehind, 0, g), this._lookbehind.copy(
          this._lookbehind,
          0,
          g,
          this._lookbehind_size - g
        ), this._lookbehind_size -= g, r.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += s, this._bufpos = s, s;
      }
    }
    if (o += (o >= 0) * this._bufpos, r.indexOf(n, o) !== -1)
      return o = r.indexOf(n, o), ++this.matches, o > 0 ? this.emit("info", !0, r, this._bufpos, o) : this.emit("info", !0), this._bufpos = o + i;
    for (o = s - i; o < s && (r[o] !== n[0] || Buffer.compare(
      r.subarray(o, o + s - o),
      n.subarray(0, s - o)
    ) !== 0); )
      ++o;
    return o < s && (r.copy(this._lookbehind, 0, o, o + (s - o)), this._lookbehind_size = s - o), o > 0 && this.emit("info", !1, r, this._bufpos, o < s ? o : s), this._bufpos = s, s;
  }, A.prototype._sbmh_lookup_char = function(r, s) {
    return s < 0 ? this._lookbehind[this._lookbehind_size + s] : r[s];
  }, A.prototype._sbmh_memcmp = function(r, s, n) {
    for (var i = 0; i < n; ++i)
      if (this._sbmh_lookup_char(r, s + i) !== this._needle[i])
        return !1;
    return !0;
  }, Ka = A, Ka;
}
var ec, Eh;
function lp() {
  if (Eh)
    return ec;
  Eh = 1;
  const t = Qn.inherits, e = ha.Readable;
  function A(r) {
    e.call(this, r);
  }
  return t(A, e), A.prototype._read = function(r) {
  }, ec = A, ec;
}
var Ac, uh;
function wl() {
  return uh || (uh = 1, Ac = function(e, A, r) {
    if (!e || e[A] === void 0 || e[A] === null)
      return r;
    if (typeof e[A] != "number" || isNaN(e[A]))
      throw new TypeError("Limit " + A + " is not a valid number");
    return e[A];
  }), Ac;
}
var tc, Qh;
function hp() {
  if (Qh)
    return tc;
  Qh = 1;
  const t = sQ.EventEmitter, e = Qn.inherits, A = wl(), r = fC(), s = Buffer.from(`\r
\r
`), n = /\r\n/g, i = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
  function a(o) {
    t.call(this), o = o || {};
    const c = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = A(o, "maxHeaderPairs", 2e3), this.maxHeaderSize = A(o, "maxHeaderSize", 80 * 1024), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new r(s), this.ss.on("info", function(g, h, E, Q) {
      h && !c.maxed && (c.nread + Q - E >= c.maxHeaderSize ? (Q = c.maxHeaderSize - c.nread + E, c.nread = c.maxHeaderSize, c.maxed = !0) : c.nread += Q - E, c.buffer += h.toString("binary", E, Q)), g && c._finish();
    });
  }
  return e(a, t), a.prototype.push = function(o) {
    const c = this.ss.push(o);
    if (this.finished)
      return c;
  }, a.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
  }, a.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const o = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", o);
  }, a.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs)
      return;
    const o = this.buffer.split(n), c = o.length;
    let g, h;
    for (var E = 0; E < c; ++E) {
      if (o[E].length === 0)
        continue;
      if ((o[E][0] === "	" || o[E][0] === " ") && h) {
        this.header[h][this.header[h].length - 1] += o[E];
        continue;
      }
      const Q = o[E].indexOf(":");
      if (Q === -1 || Q === 0)
        return;
      if (g = i.exec(o[E]), h = g[1].toLowerCase(), this.header[h] = this.header[h] || [], this.header[h].push(g[2] || ""), ++this.npairs === this.maxHeaderPairs)
        break;
    }
  }, tc = a, tc;
}
var rc, Ch;
function pC() {
  if (Ch)
    return rc;
  Ch = 1;
  const t = ha.Writable, e = Qn.inherits, A = fC(), r = lp(), s = hp(), n = 45, i = Buffer.from("-"), a = Buffer.from(`\r
`), o = function() {
  };
  function c(g) {
    if (!(this instanceof c))
      return new c(g);
    if (t.call(this, g), !g || !g.headerFirst && typeof g.boundary != "string")
      throw new TypeError("Boundary required");
    typeof g.boundary == "string" ? this.setBoundary(g.boundary) : this._bparser = void 0, this._headerFirst = g.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = { highWaterMark: g.partHwm }, this._pause = !1;
    const h = this;
    this._hparser = new s(g), this._hparser.on("header", function(E) {
      h._inHeader = !1, h._part.emit("header", E);
    });
  }
  return e(c, t), c.prototype.emit = function(g) {
    if (g === "finish" && !this._realFinish) {
      if (!this._finished) {
        const h = this;
        process.nextTick(function() {
          if (h.emit("error", new Error("Unexpected end of multipart data")), h._part && !h._ignoreData) {
            const E = h._isPreamble ? "Preamble" : "Part";
            h._part.emit("error", new Error(E + " terminated early due to unexpected end of multipart data")), h._part.push(null), process.nextTick(function() {
              h._realFinish = !0, h.emit("finish"), h._realFinish = !1;
            });
            return;
          }
          h._realFinish = !0, h.emit("finish"), h._realFinish = !1;
        });
      }
    } else
      t.prototype.emit.apply(this, arguments);
  }, c.prototype._write = function(g, h, E) {
    if (!this._hparser && !this._bparser)
      return E();
    if (this._headerFirst && this._isPreamble) {
      this._part || (this._part = new r(this._partOpts), this._events.preamble ? this.emit("preamble", this._part) : this._ignore());
      const Q = this._hparser.push(g);
      if (!this._inHeader && Q !== void 0 && Q < g.length)
        g = g.slice(Q);
      else
        return E();
    }
    this._firstWrite && (this._bparser.push(a), this._firstWrite = !1), this._bparser.push(g), this._pause ? this._cb = E : E();
  }, c.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
  }, c.prototype.setBoundary = function(g) {
    const h = this;
    this._bparser = new A(`\r
--` + g), this._bparser.on("info", function(E, Q, C, u) {
      h._oninfo(E, Q, C, u);
    });
  }, c.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", o), this._part.resume());
  }, c.prototype._oninfo = function(g, h, E, Q) {
    let C;
    const u = this;
    let B = 0, I, d = !0;
    if (!this._part && this._justMatched && h) {
      for (; this._dashes < 2 && E + B < Q; )
        if (h[E + B] === n)
          ++B, ++this._dashes;
        else {
          this._dashes && (C = i), this._dashes = 0;
          break;
        }
      if (this._dashes === 2 && (E + B < Q && this._events.trailer && this.emit("trailer", h.slice(E + B, Q)), this.reset(), this._finished = !0, u._parts === 0 && (u._realFinish = !0, u.emit("finish"), u._realFinish = !1)), this._dashes)
        return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new r(this._partOpts), this._part._read = function(w) {
      u._unpause();
    }, this._isPreamble && this._events.preamble ? this.emit("preamble", this._part) : this._isPreamble !== !0 && this._events.part ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), h && E < Q && !this._ignoreData && (this._isPreamble || !this._inHeader ? (C && (d = this._part.push(C)), d = this._part.push(h.slice(E, Q)), d || (this._pause = !0)) : !this._isPreamble && this._inHeader && (C && this._hparser.push(C), I = this._hparser.push(h.slice(E, Q)), !this._inHeader && I !== void 0 && I < Q && this._oninfo(!1, h, E + I, Q))), g && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : E !== Q && (++this._parts, this._part.on("end", function() {
      --u._parts === 0 && (u._finished ? (u._realFinish = !0, u.emit("finish"), u._realFinish = !1) : u._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
  }, c.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
      const g = this._cb;
      this._cb = void 0, g();
    }
  }, rc = c, rc;
}
var sc, Bh;
function ml() {
  if (Bh)
    return sc;
  Bh = 1;
  const t = new TextDecoder("utf-8"), e = /* @__PURE__ */ new Map([
    ["utf-8", t],
    ["utf8", t]
  ]);
  function A(r, s, n) {
    if (r)
      if (e.has(n))
        try {
          return e.get(n).decode(Buffer.from(r, s));
        } catch {
        }
      else
        try {
          return e.set(n, new TextDecoder(n)), e.get(n).decode(Buffer.from(r, s));
        } catch {
        }
    return r;
  }
  return sc = A, sc;
}
var nc, Ih;
function wC() {
  if (Ih)
    return nc;
  Ih = 1;
  const t = ml(), e = /%([a-fA-F0-9]{2})/g;
  function A(s, n) {
    return String.fromCharCode(parseInt(n, 16));
  }
  function r(s) {
    const n = [];
    let i = "key", a = "", o = !1, c = !1, g = 0, h = "";
    for (var E = 0, Q = s.length; E < Q; ++E) {
      const C = s[E];
      if (C === "\\" && o)
        if (c)
          c = !1;
        else {
          c = !0;
          continue;
        }
      else if (C === '"')
        if (c)
          c = !1;
        else {
          o ? (o = !1, i = "key") : o = !0;
          continue;
        }
      else if (c && o && (h += "\\"), c = !1, (i === "charset" || i === "lang") && C === "'") {
        i === "charset" ? (i = "lang", a = h.substring(1)) : i = "value", h = "";
        continue;
      } else if (i === "key" && (C === "*" || C === "=") && n.length) {
        C === "*" ? i = "charset" : i = "value", n[g] = [h, void 0], h = "";
        continue;
      } else if (!o && C === ";") {
        i = "key", a ? (h.length && (h = t(
          h.replace(e, A),
          "binary",
          a
        )), a = "") : h.length && (h = t(h, "binary", "utf8")), n[g] === void 0 ? n[g] = h : n[g][1] = h, h = "", ++g;
        continue;
      } else if (!o && (C === " " || C === "	"))
        continue;
      h += C;
    }
    return a && h.length ? h = t(
      h.replace(e, A),
      "binary",
      a
    ) : h && (h = t(h, "binary", "utf8")), n[g] === void 0 ? h && (n[g] = h) : n[g][1] = h, n;
  }
  return nc = r, nc;
}
var ic, dh;
function Ep() {
  return dh || (dh = 1, ic = function(e) {
    if (typeof e != "string")
      return "";
    for (var A = e.length - 1; A >= 0; --A)
      switch (e.charCodeAt(A)) {
        case 47:
        case 92:
          return e = e.slice(A + 1), e === ".." || e === "." ? "" : e;
      }
    return e === ".." || e === "." ? "" : e;
  }), ic;
}
var oc, fh;
function up() {
  if (fh)
    return oc;
  fh = 1;
  const { Readable: t } = ha, { inherits: e } = Qn, A = pC(), r = wC(), s = ml(), n = Ep(), i = wl(), a = /^boundary$/i, o = /^form-data$/i, c = /^charset$/i, g = /^filename$/i, h = /^name$/i;
  E.detect = /^multipart\/form-data/i;
  function E(u, B) {
    let I, d;
    const w = this;
    let m;
    const p = B.limits, R = B.isPartAFile || ((J, P, G) => P === "application/octet-stream" || G !== void 0), D = B.parsedConType || [], S = B.defCharset || "utf8", v = B.preservePath, T = { highWaterMark: B.fileHwm };
    for (I = 0, d = D.length; I < d; ++I)
      if (Array.isArray(D[I]) && a.test(D[I][0])) {
        m = D[I][1];
        break;
      }
    function X() {
      q === 0 && M && !u._done && (M = !1, w.end());
    }
    if (typeof m != "string")
      throw new Error("Multipart: Boundary not found");
    const K = i(p, "fieldSize", 1 * 1024 * 1024), z = i(p, "fileSize", 1 / 0), ue = i(p, "files", 1 / 0), Y = i(p, "fields", 1 / 0), ee = i(p, "parts", 1 / 0), re = i(p, "headerPairs", 2e3), ne = i(p, "headerSize", 80 * 1024);
    let Z = 0, k = 0, q = 0, F, f, M = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = u;
    const _ = {
      boundary: m,
      maxHeaderPairs: re,
      maxHeaderSize: ne,
      partHwm: T.highWaterMark,
      highWaterMark: B.highWaterMark
    };
    this.parser = new A(_), this.parser.on("drain", function() {
      if (w._needDrain = !1, w._cb && !w._pause) {
        const J = w._cb;
        w._cb = void 0, J();
      }
    }).on("part", function J(P) {
      if (++w._nparts > ee)
        return w.parser.removeListener("part", J), w.parser.on("part", Q), u.hitPartsLimit = !0, u.emit("partsLimit"), Q(P);
      if (f) {
        const G = f;
        G.emit("end"), G.removeAllListeners("end");
      }
      P.on("header", function(G) {
        let V, ae, oe, he, _e, Ge, me = 0;
        if (G["content-type"] && (oe = r(G["content-type"][0]), oe[0])) {
          for (V = oe[0].toLowerCase(), I = 0, d = oe.length; I < d; ++I)
            if (c.test(oe[I][0])) {
              he = oe[I][1].toLowerCase();
              break;
            }
        }
        if (V === void 0 && (V = "text/plain"), he === void 0 && (he = S), G["content-disposition"]) {
          if (oe = r(G["content-disposition"][0]), !o.test(oe[0]))
            return Q(P);
          for (I = 0, d = oe.length; I < d; ++I)
            h.test(oe[I][0]) ? ae = oe[I][1] : g.test(oe[I][0]) && (Ge = oe[I][1], v || (Ge = n(Ge)));
        } else
          return Q(P);
        G["content-transfer-encoding"] ? _e = G["content-transfer-encoding"][0].toLowerCase() : _e = "7bit";
        let Re, We;
        if (R(ae, V, Ge)) {
          if (Z === ue)
            return u.hitFilesLimit || (u.hitFilesLimit = !0, u.emit("filesLimit")), Q(P);
          if (++Z, !u._events.file) {
            w.parser._ignore();
            return;
          }
          ++q;
          const Ie = new C(T);
          F = Ie, Ie.on("end", function() {
            if (--q, w._pause = !1, X(), w._cb && !w._needDrain) {
              const de = w._cb;
              w._cb = void 0, de();
            }
          }), Ie._read = function(de) {
            if (w._pause && (w._pause = !1, w._cb && !w._needDrain)) {
              const we = w._cb;
              w._cb = void 0, we();
            }
          }, u.emit("file", ae, Ie, Ge, _e, V), Re = function(de) {
            if ((me += de.length) > z) {
              const we = z - me + de.length;
              we > 0 && Ie.push(de.slice(0, we)), Ie.truncated = !0, Ie.bytesRead = z, P.removeAllListeners("data"), Ie.emit("limit");
              return;
            } else
              Ie.push(de) || (w._pause = !0);
            Ie.bytesRead = me;
          }, We = function() {
            F = void 0, Ie.push(null);
          };
        } else {
          if (k === Y)
            return u.hitFieldsLimit || (u.hitFieldsLimit = !0, u.emit("fieldsLimit")), Q(P);
          ++k, ++q;
          let Ie = "", de = !1;
          f = P, Re = function(we) {
            if ((me += we.length) > K) {
              const UA = K - (me - we.length);
              Ie += we.toString("binary", 0, UA), de = !0, P.removeAllListeners("data");
            } else
              Ie += we.toString("binary");
          }, We = function() {
            f = void 0, Ie.length && (Ie = s(Ie, "binary", he)), u.emit("field", ae, Ie, !1, de, _e, V), --q, X();
          };
        }
        P._readableState.sync = !1, P.on("data", Re), P.on("end", We);
      }).on("error", function(G) {
        F && F.emit("error", G);
      });
    }).on("error", function(J) {
      u.emit("error", J);
    }).on("finish", function() {
      M = !0, X();
    });
  }
  E.prototype.write = function(u, B) {
    const I = this.parser.write(u);
    I && !this._pause ? B() : (this._needDrain = !I, this._cb = B);
  }, E.prototype.end = function() {
    const u = this;
    u.parser.writable ? u.parser.end() : u._boy._done || process.nextTick(function() {
      u._boy._done = !0, u._boy.emit("finish");
    });
  };
  function Q(u) {
    u.resume();
  }
  function C(u) {
    t.call(this, u), this.bytesRead = 0, this.truncated = !1;
  }
  return e(C, t), C.prototype._read = function(u) {
  }, oc = E, oc;
}
var ac, ph;
function Qp() {
  if (ph)
    return ac;
  ph = 1;
  const t = /\+/g, e = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  function A() {
    this.buffer = void 0;
  }
  return A.prototype.write = function(r) {
    r = r.replace(t, " ");
    let s = "", n = 0, i = 0;
    const a = r.length;
    for (; n < a; ++n)
      this.buffer !== void 0 ? e[r.charCodeAt(n)] ? (this.buffer += r[n], ++i, this.buffer.length === 2 && (s += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (s += "%" + this.buffer, this.buffer = void 0, --n) : r[n] === "%" && (n > i && (s += r.substring(i, n), i = n), this.buffer = "", ++i);
    return i < a && this.buffer === void 0 && (s += r.substring(i)), s;
  }, A.prototype.reset = function() {
    this.buffer = void 0;
  }, ac = A, ac;
}
var cc, wh;
function Cp() {
  if (wh)
    return cc;
  wh = 1;
  const t = Qp(), e = ml(), A = wl(), r = /^charset$/i;
  s.detect = /^application\/x-www-form-urlencoded/i;
  function s(n, i) {
    const a = i.limits, o = i.parsedConType;
    this.boy = n, this.fieldSizeLimit = A(a, "fieldSize", 1 * 1024 * 1024), this.fieldNameSizeLimit = A(a, "fieldNameSize", 100), this.fieldsLimit = A(a, "fields", 1 / 0);
    let c;
    for (var g = 0, h = o.length; g < h; ++g)
      if (Array.isArray(o[g]) && r.test(o[g][0])) {
        c = o[g][1].toLowerCase();
        break;
      }
    c === void 0 && (c = i.defCharset || "utf8"), this.decoder = new t(), this.charset = c, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
  }
  return s.prototype.write = function(n, i) {
    if (this._fields === this.fieldsLimit)
      return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), i();
    let a, o, c, g = 0;
    const h = n.length;
    for (; g < h; )
      if (this._state === "key") {
        for (a = o = void 0, c = g; c < h; ++c) {
          if (this._checkingBytes || ++g, n[c] === 61) {
            a = c;
            break;
          } else if (n[c] === 38) {
            o = c;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = !0;
            break;
          } else
            this._checkingBytes && ++this._bytesKey;
        }
        if (a !== void 0)
          a > g && (this._key += this.decoder.write(n.toString("binary", g, a))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), g = a + 1;
        else if (o !== void 0) {
          ++this._fields;
          let E;
          const Q = this._keyTrunc;
          if (o > g ? E = this._key += this.decoder.write(n.toString("binary", g, o)) : E = this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), E.length && this.boy.emit(
            "field",
            e(E, "binary", this.charset),
            "",
            Q,
            !1
          ), g = o + 1, this._fields === this.fieldsLimit)
            return i();
        } else
          this._hitLimit ? (c > g && (this._key += this.decoder.write(n.toString("binary", g, c))), g = c, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (g < h && (this._key += this.decoder.write(n.toString("binary", g))), g = h);
      } else {
        for (o = void 0, c = g; c < h; ++c) {
          if (this._checkingBytes || ++g, n[c] === 38) {
            o = c;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = !0;
            break;
          } else
            this._checkingBytes && ++this._bytesVal;
        }
        if (o !== void 0) {
          if (++this._fields, o > g && (this._val += this.decoder.write(n.toString("binary", g, o))), this.boy.emit(
            "field",
            e(this._key, "binary", this.charset),
            e(this._val, "binary", this.charset),
            this._keyTrunc,
            this._valTrunc
          ), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), g = o + 1, this._fields === this.fieldsLimit)
            return i();
        } else
          this._hitLimit ? (c > g && (this._val += this.decoder.write(n.toString("binary", g, c))), g = c, (this._val === "" && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (g < h && (this._val += this.decoder.write(n.toString("binary", g))), g = h);
      }
    i();
  }, s.prototype.end = function() {
    this.boy._done || (this._state === "key" && this._key.length > 0 ? this.boy.emit(
      "field",
      e(this._key, "binary", this.charset),
      "",
      this._keyTrunc,
      !1
    ) : this._state === "val" && this.boy.emit(
      "field",
      e(this._key, "binary", this.charset),
      e(this._val, "binary", this.charset),
      this._keyTrunc,
      this._valTrunc
    ), this.boy._done = !0, this.boy.emit("finish"));
  }, cc = s, cc;
}
var mh;
function Bp() {
  if (mh)
    return ys.exports;
  mh = 1;
  const t = ha.Writable, { inherits: e } = Qn, A = pC(), r = up(), s = Cp(), n = wC();
  function i(a) {
    if (!(this instanceof i))
      return new i(a);
    if (typeof a != "object")
      throw new TypeError("Busboy expected an options-Object.");
    if (typeof a.headers != "object")
      throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if (typeof a.headers["content-type"] != "string")
      throw new TypeError("Missing Content-Type-header.");
    const {
      headers: o,
      ...c
    } = a;
    this.opts = {
      autoDestroy: !1,
      ...c
    }, t.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(o), this._finished = !1;
  }
  return e(i, t), i.prototype.emit = function(a) {
    var o;
    if (a === "finish") {
      if (this._done) {
        if (this._finished)
          return;
      } else {
        (o = this._parser) == null || o.end();
        return;
      }
      this._finished = !0;
    }
    t.prototype.emit.apply(this, arguments);
  }, i.prototype.getParserByHeaders = function(a) {
    const o = n(a["content-type"]), c = {
      defCharset: this.opts.defCharset,
      fileHwm: this.opts.fileHwm,
      headers: a,
      highWaterMark: this.opts.highWaterMark,
      isPartAFile: this.opts.isPartAFile,
      limits: this.opts.limits,
      parsedConType: o,
      preservePath: this.opts.preservePath
    };
    if (r.detect.test(o[0]))
      return new r(this, c);
    if (s.detect.test(o[0]))
      return new s(this, c);
    throw new Error("Unsupported Content-Type.");
  }, i.prototype._write = function(a, o, c) {
    this._parser.write(a, c);
  }, ys.exports = i, ys.exports.default = i, ys.exports.Busboy = i, ys.exports.Dicer = A, ys.exports;
}
var gc, yh;
function fs() {
  if (yh)
    return gc;
  yh = 1;
  const { MessageChannel: t, receiveMessageOnPort: e } = nQ, A = ["GET", "HEAD", "POST"], r = new Set(A), s = [101, 204, 205, 304], n = [301, 302, 303, 307, 308], i = new Set(n), a = [
    "1",
    "7",
    "9",
    "11",
    "13",
    "15",
    "17",
    "19",
    "20",
    "21",
    "22",
    "23",
    "25",
    "37",
    "42",
    "43",
    "53",
    "69",
    "77",
    "79",
    "87",
    "95",
    "101",
    "102",
    "103",
    "104",
    "109",
    "110",
    "111",
    "113",
    "115",
    "117",
    "119",
    "123",
    "135",
    "137",
    "139",
    "143",
    "161",
    "179",
    "389",
    "427",
    "465",
    "512",
    "513",
    "514",
    "515",
    "526",
    "530",
    "531",
    "532",
    "540",
    "548",
    "554",
    "556",
    "563",
    "587",
    "601",
    "636",
    "989",
    "990",
    "993",
    "995",
    "1719",
    "1720",
    "1723",
    "2049",
    "3659",
    "4045",
    "5060",
    "5061",
    "6000",
    "6566",
    "6665",
    "6666",
    "6667",
    "6668",
    "6669",
    "6697",
    "10080"
  ], o = new Set(a), c = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
  ], g = new Set(c), h = ["follow", "manual", "error"], E = ["GET", "HEAD", "OPTIONS", "TRACE"], Q = new Set(E), C = ["navigate", "same-origin", "no-cors", "cors"], u = ["omit", "same-origin", "include"], B = [
    "default",
    "no-store",
    "reload",
    "no-cache",
    "force-cache",
    "only-if-cached"
  ], I = [
    "content-encoding",
    "content-language",
    "content-location",
    "content-type",
    // See https://github.com/nodejs/undici/issues/2021
    // 'Content-Length' is a forbidden header name, which is typically
    // removed in the Headers implementation. However, undici doesn't
    // filter out headers, so we add it here.
    "content-length"
  ], d = [
    "half"
  ], w = ["CONNECT", "TRACE", "TRACK"], m = new Set(w), p = [
    "audio",
    "audioworklet",
    "font",
    "image",
    "manifest",
    "paintworklet",
    "script",
    "style",
    "track",
    "video",
    "xslt",
    ""
  ], R = new Set(p), D = globalThis.DOMException ?? (() => {
    try {
      atob("~");
    } catch (T) {
      return Object.getPrototypeOf(T).constructor;
    }
  })();
  let S;
  const v = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
  // structuredClone was added in v17.0.0, but fetch supports v16.8
  function(X, K = void 0) {
    if (arguments.length === 0)
      throw new TypeError("missing argument");
    return S || (S = new t()), S.port1.unref(), S.port2.unref(), S.port1.postMessage(X, K == null ? void 0 : K.transfer), e(S.port2).message;
  };
  return gc = {
    DOMException: D,
    structuredClone: v,
    subresource: p,
    forbiddenMethods: w,
    requestBodyHeader: I,
    referrerPolicy: c,
    requestRedirect: h,
    requestMode: C,
    requestCredentials: u,
    requestCache: B,
    redirectStatus: n,
    corsSafeListedMethods: A,
    nullBodyStatus: s,
    safeMethods: E,
    badPorts: a,
    requestDuplex: d,
    subresourceSet: R,
    badPortsSet: o,
    redirectStatusSet: i,
    corsSafeListedMethodsSet: r,
    safeMethodsSet: Q,
    forbiddenMethodsSet: m,
    referrerPolicySet: g
  }, gc;
}
var lc, Rh;
function _i() {
  if (Rh)
    return lc;
  Rh = 1;
  const t = Symbol.for("undici.globalOrigin.1");
  function e() {
    return globalThis[t];
  }
  function A(r) {
    if (r === void 0) {
      Object.defineProperty(globalThis, t, {
        value: void 0,
        writable: !0,
        enumerable: !1,
        configurable: !1
      });
      return;
    }
    const s = new URL(r);
    if (s.protocol !== "http:" && s.protocol !== "https:")
      throw new TypeError(`Only http & https urls are allowed, received ${s.protocol}`);
    Object.defineProperty(globalThis, t, {
      value: s,
      writable: !0,
      enumerable: !1,
      configurable: !1
    });
  }
  return lc = {
    getGlobalOrigin: e,
    setGlobalOrigin: A
  }, lc;
}
var hc, Dh;
function yt() {
  if (Dh)
    return hc;
  Dh = 1;
  const { redirectStatusSet: t, referrerPolicySet: e, badPortsSet: A } = fs(), { getGlobalOrigin: r } = _i(), { performance: s } = Ad, { isBlobLike: n, toUSVString: i, ReadableStreamFrom: a } = fe, o = eA, { isUint8Array: c } = iQ;
  let g;
  try {
    g = require("crypto");
  } catch {
  }
  function h(y) {
    const W = y.urlList, Ae = W.length;
    return Ae === 0 ? null : W[Ae - 1].toString();
  }
  function E(y, W) {
    if (!t.has(y.status))
      return null;
    let Ae = y.headersList.get("location");
    return Ae !== null && m(Ae) && (Ae = new URL(Ae, h(y))), Ae && !Ae.hash && (Ae.hash = W), Ae;
  }
  function Q(y) {
    return y.urlList[y.urlList.length - 1];
  }
  function C(y) {
    const W = Q(y);
    return UA(W) && A.has(W.port) ? "blocked" : "allowed";
  }
  function u(y) {
    var W, Ae;
    return y instanceof Error || ((W = y == null ? void 0 : y.constructor) == null ? void 0 : W.name) === "Error" || ((Ae = y == null ? void 0 : y.constructor) == null ? void 0 : Ae.name) === "DOMException";
  }
  function B(y) {
    for (let W = 0; W < y.length; ++W) {
      const Ae = y.charCodeAt(W);
      if (!(Ae === 9 || // HTAB
      Ae >= 32 && Ae <= 126 || // SP / VCHAR
      Ae >= 128 && Ae <= 255))
        return !1;
    }
    return !0;
  }
  function I(y) {
    return !(y >= 127 || y <= 32 || y === "(" || y === ")" || y === "<" || y === ">" || y === "@" || y === "," || y === ";" || y === ":" || y === "\\" || y === '"' || y === "/" || y === "[" || y === "]" || y === "?" || y === "=" || y === "{" || y === "}");
  }
  function d(y) {
    if (!y || typeof y != "string")
      return !1;
    for (let W = 0; W < y.length; ++W) {
      const Ae = y.charCodeAt(W);
      if (Ae > 127 || !I(Ae))
        return !1;
    }
    return !0;
  }
  function w(y) {
    return y.length === 0 ? !1 : d(y);
  }
  function m(y) {
    return !(y.startsWith("	") || y.startsWith(" ") || y.endsWith("	") || y.endsWith(" ") || y.includes("\0") || y.includes("\r") || y.includes(`
`));
  }
  function p(y, W) {
    const { headersList: Ae } = W, Be = (Ae.get("referrer-policy") ?? "").split(",");
    let pe = "";
    if (Be.length > 0)
      for (let Oe = Be.length; Oe !== 0; Oe--) {
        const ke = Be[Oe - 1].trim();
        if (e.has(ke)) {
          pe = ke;
          break;
        }
      }
    pe !== "" && (y.referrerPolicy = pe);
  }
  function R() {
    return "allowed";
  }
  function D() {
    return "success";
  }
  function S() {
    return "success";
  }
  function v(y) {
    let W = null;
    W = y.mode, y.headersList.set("sec-fetch-mode", W);
  }
  function T(y) {
    let W = y.origin;
    if (y.responseTainting === "cors" || y.mode === "websocket")
      W && y.headersList.append("origin", W);
    else if (y.method !== "GET" && y.method !== "HEAD") {
      switch (y.referrerPolicy) {
        case "no-referrer":
          W = null;
          break;
        case "no-referrer-when-downgrade":
        case "strict-origin":
        case "strict-origin-when-cross-origin":
          y.origin && we(y.origin) && !we(Q(y)) && (W = null);
          break;
        case "same-origin":
          F(y, Q(y)) || (W = null);
          break;
      }
      W && y.headersList.append("origin", W);
    }
  }
  function X(y) {
    return s.now();
  }
  function K(y) {
    return {
      startTime: y.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: y.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    };
  }
  function z() {
    return {
      referrerPolicy: "strict-origin-when-cross-origin"
    };
  }
  function ue(y) {
    return {
      referrerPolicy: y.referrerPolicy
    };
  }
  function Y(y) {
    const W = y.referrerPolicy;
    o(W);
    let Ae = null;
    if (y.referrer === "client") {
      const BA = r();
      if (!BA || BA.origin === "null")
        return "no-referrer";
      Ae = new URL(BA);
    } else
      y.referrer instanceof URL && (Ae = y.referrer);
    let Be = ee(Ae);
    const pe = ee(Ae, !0);
    Be.toString().length > 4096 && (Be = pe);
    const Oe = F(y, Be), ke = re(Be) && !re(y.url);
    switch (W) {
      case "origin":
        return pe ?? ee(Ae, !0);
      case "unsafe-url":
        return Be;
      case "same-origin":
        return Oe ? pe : "no-referrer";
      case "origin-when-cross-origin":
        return Oe ? Be : pe;
      case "strict-origin-when-cross-origin": {
        const BA = Q(y);
        return F(Be, BA) ? Be : re(Be) && !re(BA) ? "no-referrer" : pe;
      }
      case "strict-origin":
      case "no-referrer-when-downgrade":
      default:
        return ke ? "no-referrer" : pe;
    }
  }
  function ee(y, W) {
    return o(y instanceof URL), y.protocol === "file:" || y.protocol === "about:" || y.protocol === "blank:" ? "no-referrer" : (y.username = "", y.password = "", y.hash = "", W && (y.pathname = "", y.search = ""), y);
  }
  function re(y) {
    if (!(y instanceof URL))
      return !1;
    if (y.href === "about:blank" || y.href === "about:srcdoc" || y.protocol === "data:" || y.protocol === "file:")
      return !0;
    return W(y.origin);
    function W(Ae) {
      if (Ae == null || Ae === "null")
        return !1;
      const Be = new URL(Ae);
      return !!(Be.protocol === "https:" || Be.protocol === "wss:" || /^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(Be.hostname) || Be.hostname === "localhost" || Be.hostname.includes("localhost.") || Be.hostname.endsWith(".localhost"));
    }
  }
  function ne(y, W) {
    if (g === void 0)
      return !0;
    const Ae = k(W);
    if (Ae === "no metadata" || Ae.length === 0)
      return !0;
    const Be = Ae.sort((ke, BA) => BA.algo.localeCompare(ke.algo)), pe = Be[0].algo, Oe = Be.filter((ke) => ke.algo === pe);
    for (const ke of Oe) {
      const BA = ke.algo;
      let ct = ke.hash;
      ct.endsWith("==") && (ct = ct.slice(0, -2));
      let lr = g.createHash(BA).update(y).digest("base64");
      if (lr.endsWith("==") && (lr = lr.slice(0, -2)), lr === ct)
        return !0;
      let Ht = g.createHash(BA).update(y).digest("base64url");
      if (Ht.endsWith("==") && (Ht = Ht.slice(0, -2)), Ht === ct)
        return !0;
    }
    return !1;
  }
  const Z = /((?<algo>sha256|sha384|sha512)-(?<hash>[A-z0-9+/]{1}.*={0,2}))( +[\x21-\x7e]?)?/i;
  function k(y) {
    const W = [];
    let Ae = !0;
    const Be = g.getHashes();
    for (const pe of y.split(" ")) {
      Ae = !1;
      const Oe = Z.exec(pe);
      if (Oe === null || Oe.groups === void 0)
        continue;
      const ke = Oe.groups.algo;
      Be.includes(ke.toLowerCase()) && W.push(Oe.groups);
    }
    return Ae === !0 ? "no metadata" : W;
  }
  function q(y) {
  }
  function F(y, W) {
    return y.origin === W.origin && y.origin === "null" || y.protocol === W.protocol && y.hostname === W.hostname && y.port === W.port;
  }
  function f() {
    let y, W;
    return { promise: new Promise((Be, pe) => {
      y = Be, W = pe;
    }), resolve: y, reject: W };
  }
  function M(y) {
    return y.controller.state === "aborted";
  }
  function _(y) {
    return y.controller.state === "aborted" || y.controller.state === "terminated";
  }
  function J(y) {
    return /^(DELETE|GET|HEAD|OPTIONS|POST|PUT)$/i.test(y) ? y.toUpperCase() : y;
  }
  function P(y) {
    const W = JSON.stringify(y);
    if (W === void 0)
      throw new TypeError("Value is not JSON serializable");
    return o(typeof W == "string"), W;
  }
  const G = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function V(y, W, Ae) {
    const Be = {
      index: 0,
      kind: Ae,
      target: y
    }, pe = {
      next() {
        if (Object.getPrototypeOf(this) !== pe)
          throw new TypeError(
            `'next' called on an object that does not implement interface ${W} Iterator.`
          );
        const { index: Oe, kind: ke, target: BA } = Be, ct = BA(), lr = ct.length;
        if (Oe >= lr)
          return { value: void 0, done: !0 };
        const Ht = ct[Oe];
        return Be.index = Oe + 1, ae(Ht, ke);
      },
      // The class string of an iterator prototype object for a given interface is the
      // result of concatenating the identifier of the interface and the string " Iterator".
      [Symbol.toStringTag]: `${W} Iterator`
    };
    return Object.setPrototypeOf(pe, G), Object.setPrototypeOf({}, pe);
  }
  function ae(y, W) {
    let Ae;
    switch (W) {
      case "key": {
        Ae = y[0];
        break;
      }
      case "value": {
        Ae = y[1];
        break;
      }
      case "key+value": {
        Ae = y;
        break;
      }
    }
    return { value: Ae, done: !1 };
  }
  async function oe(y, W, Ae) {
    const Be = W, pe = Ae;
    let Oe;
    try {
      Oe = y.stream.getReader();
    } catch (ke) {
      pe(ke);
      return;
    }
    try {
      const ke = await Ie(Oe);
      Be(ke);
    } catch (ke) {
      pe(ke);
    }
  }
  let he = globalThis.ReadableStream;
  function _e(y) {
    return he || (he = Yr.ReadableStream), y instanceof he || y[Symbol.toStringTag] === "ReadableStream" && typeof y.tee == "function";
  }
  const Ge = 65535;
  function me(y) {
    return y.length < Ge ? String.fromCharCode(...y) : y.reduce((W, Ae) => W + String.fromCharCode(Ae), "");
  }
  function Re(y) {
    try {
      y.close();
    } catch (W) {
      if (!W.message.includes("Controller is already closed"))
        throw W;
    }
  }
  function We(y) {
    for (let W = 0; W < y.length; W++)
      o(y.charCodeAt(W) <= 255);
    return y;
  }
  async function Ie(y) {
    const W = [];
    let Ae = 0;
    for (; ; ) {
      const { done: Be, value: pe } = await y.read();
      if (Be)
        return Buffer.concat(W, Ae);
      if (!c(pe))
        throw new TypeError("Received non-Uint8Array chunk");
      W.push(pe), Ae += pe.length;
    }
  }
  function de(y) {
    o("protocol" in y);
    const W = y.protocol;
    return W === "about:" || W === "blob:" || W === "data:";
  }
  function we(y) {
    return typeof y == "string" ? y.startsWith("https:") : y.protocol === "https:";
  }
  function UA(y) {
    o("protocol" in y);
    const W = y.protocol;
    return W === "http:" || W === "https:";
  }
  const ws = Object.hasOwn || ((y, W) => Object.prototype.hasOwnProperty.call(y, W));
  return hc = {
    isAborted: M,
    isCancelled: _,
    createDeferredPromise: f,
    ReadableStreamFrom: a,
    toUSVString: i,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: q,
    coarsenedSharedCurrentTime: X,
    determineRequestsReferrer: Y,
    makePolicyContainer: z,
    clonePolicyContainer: ue,
    appendFetchMetadata: v,
    appendRequestOriginHeader: T,
    TAOCheck: S,
    corsCheck: D,
    crossOriginResourcePolicyCheck: R,
    createOpaqueTimingInfo: K,
    setRequestReferrerPolicyOnRedirect: p,
    isValidHTTPToken: d,
    requestBadPort: C,
    requestCurrentURL: Q,
    responseURL: h,
    responseLocationURL: E,
    isBlobLike: n,
    isURLPotentiallyTrustworthy: re,
    isValidReasonPhrase: B,
    sameOrigin: F,
    normalizeMethod: J,
    serializeJavascriptValueToJSONString: P,
    makeIterator: V,
    isValidHeaderName: w,
    isValidHeaderValue: m,
    hasOwn: ws,
    isErrorLike: u,
    fullyReadBody: oe,
    bytesMatch: ne,
    isReadableStreamLike: _e,
    readableStreamClose: Re,
    isomorphicEncode: We,
    isomorphicDecode: me,
    urlIsLocal: de,
    urlHasHttpsScheme: we,
    urlIsHttpHttpsScheme: UA,
    readAllBytes: Ie
  }, hc;
}
var Ec, bh;
function Or() {
  return bh || (bh = 1, Ec = {
    kUrl: Symbol("url"),
    kHeaders: Symbol("headers"),
    kSignal: Symbol("signal"),
    kState: Symbol("state"),
    kGuard: Symbol("guard"),
    kRealm: Symbol("realm")
  }), Ec;
}
var uc, kh;
function WA() {
  if (kh)
    return uc;
  kh = 1;
  const { types: t } = Jt, { hasOwn: e, toUSVString: A } = yt(), r = {};
  return r.converters = {}, r.util = {}, r.errors = {}, r.errors.exception = function(s) {
    return new TypeError(`${s.header}: ${s.message}`);
  }, r.errors.conversionFailed = function(s) {
    const n = s.types.length === 1 ? "" : " one of", i = `${s.argument} could not be converted to${n}: ${s.types.join(", ")}.`;
    return r.errors.exception({
      header: s.prefix,
      message: i
    });
  }, r.errors.invalidArgument = function(s) {
    return r.errors.exception({
      header: s.prefix,
      message: `"${s.value}" is an invalid ${s.type}.`
    });
  }, r.brandCheck = function(s, n, i = void 0) {
    if ((i == null ? void 0 : i.strict) !== !1 && !(s instanceof n))
      throw new TypeError("Illegal invocation");
    return (s == null ? void 0 : s[Symbol.toStringTag]) === n.prototype[Symbol.toStringTag];
  }, r.argumentLengthCheck = function({ length: s }, n, i) {
    if (s < n)
      throw r.errors.exception({
        message: `${n} argument${n !== 1 ? "s" : ""} required, but${s ? " only" : ""} ${s} found.`,
        ...i
      });
  }, r.illegalConstructor = function() {
    throw r.errors.exception({
      header: "TypeError",
      message: "Illegal constructor"
    });
  }, r.util.Type = function(s) {
    switch (typeof s) {
      case "undefined":
        return "Undefined";
      case "boolean":
        return "Boolean";
      case "string":
        return "String";
      case "symbol":
        return "Symbol";
      case "number":
        return "Number";
      case "bigint":
        return "BigInt";
      case "function":
      case "object":
        return s === null ? "Null" : "Object";
    }
  }, r.util.ConvertToInt = function(s, n, i, a = {}) {
    let o, c;
    n === 64 ? (o = Math.pow(2, 53) - 1, i === "unsigned" ? c = 0 : c = Math.pow(-2, 53) + 1) : i === "unsigned" ? (c = 0, o = Math.pow(2, n) - 1) : (c = Math.pow(-2, n) - 1, o = Math.pow(2, n - 1) - 1);
    let g = Number(s);
    if (g === 0 && (g = 0), a.enforceRange === !0) {
      if (Number.isNaN(g) || g === Number.POSITIVE_INFINITY || g === Number.NEGATIVE_INFINITY)
        throw r.errors.exception({
          header: "Integer conversion",
          message: `Could not convert ${s} to an integer.`
        });
      if (g = r.util.IntegerPart(g), g < c || g > o)
        throw r.errors.exception({
          header: "Integer conversion",
          message: `Value must be between ${c}-${o}, got ${g}.`
        });
      return g;
    }
    return !Number.isNaN(g) && a.clamp === !0 ? (g = Math.min(Math.max(g, c), o), Math.floor(g) % 2 === 0 ? g = Math.floor(g) : g = Math.ceil(g), g) : Number.isNaN(g) || g === 0 && Object.is(0, g) || g === Number.POSITIVE_INFINITY || g === Number.NEGATIVE_INFINITY ? 0 : (g = r.util.IntegerPart(g), g = g % Math.pow(2, n), i === "signed" && g >= Math.pow(2, n) - 1 ? g - Math.pow(2, n) : g);
  }, r.util.IntegerPart = function(s) {
    const n = Math.floor(Math.abs(s));
    return s < 0 ? -1 * n : n;
  }, r.sequenceConverter = function(s) {
    return (n) => {
      var o;
      if (r.util.Type(n) !== "Object")
        throw r.errors.exception({
          header: "Sequence",
          message: `Value of type ${r.util.Type(n)} is not an Object.`
        });
      const i = (o = n == null ? void 0 : n[Symbol.iterator]) == null ? void 0 : o.call(n), a = [];
      if (i === void 0 || typeof i.next != "function")
        throw r.errors.exception({
          header: "Sequence",
          message: "Object is not an iterator."
        });
      for (; ; ) {
        const { done: c, value: g } = i.next();
        if (c)
          break;
        a.push(s(g));
      }
      return a;
    };
  }, r.recordConverter = function(s, n) {
    return (i) => {
      if (r.util.Type(i) !== "Object")
        throw r.errors.exception({
          header: "Record",
          message: `Value of type ${r.util.Type(i)} is not an Object.`
        });
      const a = {};
      if (!t.isProxy(i)) {
        const c = Object.keys(i);
        for (const g of c) {
          const h = s(g), E = n(i[g]);
          a[h] = E;
        }
        return a;
      }
      const o = Reflect.ownKeys(i);
      for (const c of o) {
        const g = Reflect.getOwnPropertyDescriptor(i, c);
        if (g != null && g.enumerable) {
          const h = s(c), E = n(i[c]);
          a[h] = E;
        }
      }
      return a;
    };
  }, r.interfaceConverter = function(s) {
    return (n, i = {}) => {
      if (i.strict !== !1 && !(n instanceof s))
        throw r.errors.exception({
          header: s.name,
          message: `Expected ${n} to be an instance of ${s.name}.`
        });
      return n;
    };
  }, r.dictionaryConverter = function(s) {
    return (n) => {
      const i = r.util.Type(n), a = {};
      if (i === "Null" || i === "Undefined")
        return a;
      if (i !== "Object")
        throw r.errors.exception({
          header: "Dictionary",
          message: `Expected ${n} to be one of: Null, Undefined, Object.`
        });
      for (const o of s) {
        const { key: c, defaultValue: g, required: h, converter: E } = o;
        if (h === !0 && !e(n, c))
          throw r.errors.exception({
            header: "Dictionary",
            message: `Missing required key "${c}".`
          });
        let Q = n[c];
        const C = e(o, "defaultValue");
        if (C && Q !== null && (Q = Q ?? g), h || C || Q !== void 0) {
          if (Q = E(Q), o.allowedValues && !o.allowedValues.includes(Q))
            throw r.errors.exception({
              header: "Dictionary",
              message: `${Q} is not an accepted type. Expected one of ${o.allowedValues.join(", ")}.`
            });
          a[c] = Q;
        }
      }
      return a;
    };
  }, r.nullableConverter = function(s) {
    return (n) => n === null ? n : s(n);
  }, r.converters.DOMString = function(s, n = {}) {
    if (s === null && n.legacyNullToEmptyString)
      return "";
    if (typeof s == "symbol")
      throw new TypeError("Could not convert argument of type symbol to string.");
    return String(s);
  }, r.converters.ByteString = function(s) {
    const n = r.converters.DOMString(s);
    for (let i = 0; i < n.length; i++) {
      const a = n.charCodeAt(i);
      if (a > 255)
        throw new TypeError(
          `Cannot convert argument to a ByteString because the character at index ${i} has a value of ${a} which is greater than 255.`
        );
    }
    return n;
  }, r.converters.USVString = A, r.converters.boolean = function(s) {
    return !!s;
  }, r.converters.any = function(s) {
    return s;
  }, r.converters["long long"] = function(s) {
    return r.util.ConvertToInt(s, 64, "signed");
  }, r.converters["unsigned long long"] = function(s) {
    return r.util.ConvertToInt(s, 64, "unsigned");
  }, r.converters["unsigned long"] = function(s) {
    return r.util.ConvertToInt(s, 32, "unsigned");
  }, r.converters["unsigned short"] = function(s, n) {
    return r.util.ConvertToInt(s, 16, "unsigned", n);
  }, r.converters.ArrayBuffer = function(s, n = {}) {
    if (r.util.Type(s) !== "Object" || !t.isAnyArrayBuffer(s))
      throw r.errors.conversionFailed({
        prefix: `${s}`,
        argument: `${s}`,
        types: ["ArrayBuffer"]
      });
    if (n.allowShared === !1 && t.isSharedArrayBuffer(s))
      throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
      });
    return s;
  }, r.converters.TypedArray = function(s, n, i = {}) {
    if (r.util.Type(s) !== "Object" || !t.isTypedArray(s) || s.constructor.name !== n.name)
      throw r.errors.conversionFailed({
        prefix: `${n.name}`,
        argument: `${s}`,
        types: [n.name]
      });
    if (i.allowShared === !1 && t.isSharedArrayBuffer(s.buffer))
      throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
      });
    return s;
  }, r.converters.DataView = function(s, n = {}) {
    if (r.util.Type(s) !== "Object" || !t.isDataView(s))
      throw r.errors.exception({
        header: "DataView",
        message: "Object is not a DataView."
      });
    if (n.allowShared === !1 && t.isSharedArrayBuffer(s.buffer))
      throw r.errors.exception({
        header: "ArrayBuffer",
        message: "SharedArrayBuffer is not allowed."
      });
    return s;
  }, r.converters.BufferSource = function(s, n = {}) {
    if (t.isAnyArrayBuffer(s))
      return r.converters.ArrayBuffer(s, n);
    if (t.isTypedArray(s))
      return r.converters.TypedArray(s, s.constructor);
    if (t.isDataView(s))
      return r.converters.DataView(s, n);
    throw new TypeError(`Could not convert ${s} to a BufferSource.`);
  }, r.converters["sequence<ByteString>"] = r.sequenceConverter(
    r.converters.ByteString
  ), r.converters["sequence<sequence<ByteString>>"] = r.sequenceConverter(
    r.converters["sequence<ByteString>"]
  ), r.converters["record<ByteString, ByteString>"] = r.recordConverter(
    r.converters.ByteString,
    r.converters.ByteString
  ), uc = {
    webidl: r
  }, uc;
}
var Qc, Sh;
function Ot() {
  if (Sh)
    return Qc;
  Sh = 1;
  const t = eA, { atob: e } = ds, { isomorphicDecode: A } = yt(), r = new TextEncoder(), s = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, n = /(\u000A|\u000D|\u0009|\u0020)/, i = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
  function a(p) {
    t(p.protocol === "data:");
    let R = o(p, !0);
    R = R.slice(5);
    const D = { position: 0 };
    let S = g(
      ",",
      R,
      D
    );
    const v = S.length;
    if (S = m(S, !0, !0), D.position >= R.length)
      return "failure";
    D.position++;
    const T = R.slice(v + 1);
    let X = h(T);
    if (/;(\u0020){0,}base64$/i.test(S)) {
      const z = A(X);
      if (X = C(z), X === "failure")
        return "failure";
      S = S.slice(0, -6), S = S.replace(/(\u0020)+$/, ""), S = S.slice(0, -1);
    }
    S.startsWith(";") && (S = "text/plain" + S);
    let K = Q(S);
    return K === "failure" && (K = Q("text/plain;charset=US-ASCII")), { mimeType: K, body: X };
  }
  function o(p, R = !1) {
    const D = p.href;
    if (!R)
      return D;
    const S = D.lastIndexOf("#");
    return S === -1 ? D : D.slice(0, S);
  }
  function c(p, R, D) {
    let S = "";
    for (; D.position < R.length && p(R[D.position]); )
      S += R[D.position], D.position++;
    return S;
  }
  function g(p, R, D) {
    const S = R.indexOf(p, D.position), v = D.position;
    return S === -1 ? (D.position = R.length, R.slice(v)) : (D.position = S, R.slice(v, D.position));
  }
  function h(p) {
    const R = r.encode(p);
    return E(R);
  }
  function E(p) {
    const R = [];
    for (let D = 0; D < p.length; D++) {
      const S = p[D];
      if (S !== 37)
        R.push(S);
      else if (S === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(p[D + 1], p[D + 2])))
        R.push(37);
      else {
        const v = String.fromCharCode(p[D + 1], p[D + 2]), T = Number.parseInt(v, 16);
        R.push(T), D += 2;
      }
    }
    return Uint8Array.from(R);
  }
  function Q(p) {
    p = d(p, !0, !0);
    const R = { position: 0 }, D = g(
      "/",
      p,
      R
    );
    if (D.length === 0 || !s.test(D) || R.position > p.length)
      return "failure";
    R.position++;
    let S = g(
      ";",
      p,
      R
    );
    if (S = d(S, !1, !0), S.length === 0 || !s.test(S))
      return "failure";
    const v = D.toLowerCase(), T = S.toLowerCase(), X = {
      type: v,
      subtype: T,
      /** @type {Map<string, string>} */
      parameters: /* @__PURE__ */ new Map(),
      // https://mimesniff.spec.whatwg.org/#mime-type-essence
      essence: `${v}/${T}`
    };
    for (; R.position < p.length; ) {
      R.position++, c(
        // https://fetch.spec.whatwg.org/#http-whitespace
        (ue) => n.test(ue),
        p,
        R
      );
      let K = c(
        (ue) => ue !== ";" && ue !== "=",
        p,
        R
      );
      if (K = K.toLowerCase(), R.position < p.length) {
        if (p[R.position] === ";")
          continue;
        R.position++;
      }
      if (R.position > p.length)
        break;
      let z = null;
      if (p[R.position] === '"')
        z = u(p, R, !0), g(
          ";",
          p,
          R
        );
      else if (z = g(
        ";",
        p,
        R
      ), z = d(z, !1, !0), z.length === 0)
        continue;
      K.length !== 0 && s.test(K) && (z.length === 0 || i.test(z)) && !X.parameters.has(K) && X.parameters.set(K, z);
    }
    return X;
  }
  function C(p) {
    if (p = p.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, ""), p.length % 4 === 0 && (p = p.replace(/=?=$/, "")), p.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(p))
      return "failure";
    const R = e(p), D = new Uint8Array(R.length);
    for (let S = 0; S < R.length; S++)
      D[S] = R.charCodeAt(S);
    return D;
  }
  function u(p, R, D) {
    const S = R.position;
    let v = "";
    for (t(p[R.position] === '"'), R.position++; v += c(
      (X) => X !== '"' && X !== "\\",
      p,
      R
    ), !(R.position >= p.length); ) {
      const T = p[R.position];
      if (R.position++, T === "\\") {
        if (R.position >= p.length) {
          v += "\\";
          break;
        }
        v += p[R.position], R.position++;
      } else {
        t(T === '"');
        break;
      }
    }
    return D ? v : p.slice(S, R.position);
  }
  function B(p) {
    t(p !== "failure");
    const { parameters: R, essence: D } = p;
    let S = D;
    for (let [v, T] of R.entries())
      S += ";", S += v, S += "=", s.test(T) || (T = T.replace(/(\\|")/g, "\\$1"), T = '"' + T, T += '"'), S += T;
    return S;
  }
  function I(p) {
    return p === "\r" || p === `
` || p === "	" || p === " ";
  }
  function d(p, R = !0, D = !0) {
    let S = 0, v = p.length - 1;
    if (R)
      for (; S < p.length && I(p[S]); S++)
        ;
    if (D)
      for (; v > 0 && I(p[v]); v--)
        ;
    return p.slice(S, v + 1);
  }
  function w(p) {
    return p === "\r" || p === `
` || p === "	" || p === "\f" || p === " ";
  }
  function m(p, R = !0, D = !0) {
    let S = 0, v = p.length - 1;
    if (R)
      for (; S < p.length && w(p[S]); S++)
        ;
    if (D)
      for (; v > 0 && w(p[v]); v--)
        ;
    return p.slice(S, v + 1);
  }
  return Qc = {
    dataURLProcessor: a,
    URLSerializer: o,
    collectASequenceOfCodePoints: c,
    collectASequenceOfCodePointsFast: g,
    stringPercentDecode: h,
    parseMIMEType: Q,
    collectAnHTTPQuotedString: u,
    serializeAMimeType: B
  }, Qc;
}
var Cc, Fh;
function yl() {
  if (Fh)
    return Cc;
  Fh = 1;
  const { Blob: t, File: e } = ds, { types: A } = Jt, { kState: r } = Or(), { isBlobLike: s } = yt(), { webidl: n } = WA(), { parseMIMEType: i, serializeAMimeType: a } = Ot(), { kEnumerableProperty: o } = fe, c = new TextEncoder();
  class g extends t {
    constructor(B, I, d = {}) {
      n.argumentLengthCheck(arguments, 2, { header: "File constructor" }), B = n.converters["sequence<BlobPart>"](B), I = n.converters.USVString(I), d = n.converters.FilePropertyBag(d);
      const w = I;
      let m = d.type, p;
      e: {
        if (m) {
          if (m = i(m), m === "failure") {
            m = "";
            break e;
          }
          m = a(m).toLowerCase();
        }
        p = d.lastModified;
      }
      super(E(B, d), { type: m }), this[r] = {
        name: w,
        lastModified: p,
        type: m
      };
    }
    get name() {
      return n.brandCheck(this, g), this[r].name;
    }
    get lastModified() {
      return n.brandCheck(this, g), this[r].lastModified;
    }
    get type() {
      return n.brandCheck(this, g), this[r].type;
    }
  }
  class h {
    constructor(B, I, d = {}) {
      const w = I, m = d.type, p = d.lastModified ?? Date.now();
      this[r] = {
        blobLike: B,
        name: w,
        type: m,
        lastModified: p
      };
    }
    stream(...B) {
      return n.brandCheck(this, h), this[r].blobLike.stream(...B);
    }
    arrayBuffer(...B) {
      return n.brandCheck(this, h), this[r].blobLike.arrayBuffer(...B);
    }
    slice(...B) {
      return n.brandCheck(this, h), this[r].blobLike.slice(...B);
    }
    text(...B) {
      return n.brandCheck(this, h), this[r].blobLike.text(...B);
    }
    get size() {
      return n.brandCheck(this, h), this[r].blobLike.size;
    }
    get type() {
      return n.brandCheck(this, h), this[r].blobLike.type;
    }
    get name() {
      return n.brandCheck(this, h), this[r].name;
    }
    get lastModified() {
      return n.brandCheck(this, h), this[r].lastModified;
    }
    get [Symbol.toStringTag]() {
      return "File";
    }
  }
  Object.defineProperties(g.prototype, {
    [Symbol.toStringTag]: {
      value: "File",
      configurable: !0
    },
    name: o,
    lastModified: o
  }), n.converters.Blob = n.interfaceConverter(t), n.converters.BlobPart = function(u, B) {
    if (n.util.Type(u) === "Object") {
      if (s(u))
        return n.converters.Blob(u, { strict: !1 });
      if (ArrayBuffer.isView(u) || A.isAnyArrayBuffer(u))
        return n.converters.BufferSource(u, B);
    }
    return n.converters.USVString(u, B);
  }, n.converters["sequence<BlobPart>"] = n.sequenceConverter(
    n.converters.BlobPart
  ), n.converters.FilePropertyBag = n.dictionaryConverter([
    {
      key: "lastModified",
      converter: n.converters["long long"],
      get defaultValue() {
        return Date.now();
      }
    },
    {
      key: "type",
      converter: n.converters.DOMString,
      defaultValue: ""
    },
    {
      key: "endings",
      converter: (u) => (u = n.converters.DOMString(u), u = u.toLowerCase(), u !== "native" && (u = "transparent"), u),
      defaultValue: "transparent"
    }
  ]);
  function E(u, B) {
    const I = [];
    for (const d of u)
      if (typeof d == "string") {
        let w = d;
        B.endings === "native" && (w = Q(w)), I.push(c.encode(w));
      } else
        A.isAnyArrayBuffer(d) || A.isTypedArray(d) ? d.buffer ? I.push(
          new Uint8Array(d.buffer, d.byteOffset, d.byteLength)
        ) : I.push(new Uint8Array(d)) : s(d) && I.push(d);
    return I;
  }
  function Q(u) {
    let B = `
`;
    return process.platform === "win32" && (B = `\r
`), u.replace(/\r?\n/g, B);
  }
  function C(u) {
    return e && u instanceof e || u instanceof g || u && (typeof u.stream == "function" || typeof u.arrayBuffer == "function") && u[Symbol.toStringTag] === "File";
  }
  return Cc = { File: g, FileLike: h, isFileLike: C }, Cc;
}
var Bc, Nh;
function Rl() {
  if (Nh)
    return Bc;
  Nh = 1;
  const { isBlobLike: t, toUSVString: e, makeIterator: A } = yt(), { kState: r } = Or(), { File: s, FileLike: n, isFileLike: i } = yl(), { webidl: a } = WA(), { Blob: o, File: c } = ds, g = c ?? s;
  class h {
    constructor(C) {
      if (C !== void 0)
        throw a.errors.conversionFailed({
          prefix: "FormData constructor",
          argument: "Argument 1",
          types: ["undefined"]
        });
      this[r] = [];
    }
    append(C, u, B = void 0) {
      if (a.brandCheck(this, h), a.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), arguments.length === 3 && !t(u))
        throw new TypeError(
          "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      C = a.converters.USVString(C), u = t(u) ? a.converters.Blob(u, { strict: !1 }) : a.converters.USVString(u), B = arguments.length === 3 ? a.converters.USVString(B) : void 0;
      const I = E(C, u, B);
      this[r].push(I);
    }
    delete(C) {
      a.brandCheck(this, h), a.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), C = a.converters.USVString(C), this[r] = this[r].filter((u) => u.name !== C);
    }
    get(C) {
      a.brandCheck(this, h), a.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), C = a.converters.USVString(C);
      const u = this[r].findIndex((B) => B.name === C);
      return u === -1 ? null : this[r][u].value;
    }
    getAll(C) {
      return a.brandCheck(this, h), a.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), C = a.converters.USVString(C), this[r].filter((u) => u.name === C).map((u) => u.value);
    }
    has(C) {
      return a.brandCheck(this, h), a.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), C = a.converters.USVString(C), this[r].findIndex((u) => u.name === C) !== -1;
    }
    set(C, u, B = void 0) {
      if (a.brandCheck(this, h), a.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), arguments.length === 3 && !t(u))
        throw new TypeError(
          "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      C = a.converters.USVString(C), u = t(u) ? a.converters.Blob(u, { strict: !1 }) : a.converters.USVString(u), B = arguments.length === 3 ? e(B) : void 0;
      const I = E(C, u, B), d = this[r].findIndex((w) => w.name === C);
      d !== -1 ? this[r] = [
        ...this[r].slice(0, d),
        I,
        ...this[r].slice(d + 1).filter((w) => w.name !== C)
      ] : this[r].push(I);
    }
    entries() {
      return a.brandCheck(this, h), A(
        () => this[r].map((C) => [C.name, C.value]),
        "FormData",
        "key+value"
      );
    }
    keys() {
      return a.brandCheck(this, h), A(
        () => this[r].map((C) => [C.name, C.value]),
        "FormData",
        "key"
      );
    }
    values() {
      return a.brandCheck(this, h), A(
        () => this[r].map((C) => [C.name, C.value]),
        "FormData",
        "value"
      );
    }
    /**
     * @param {(value: string, key: string, self: FormData) => void} callbackFn
     * @param {unknown} thisArg
     */
    forEach(C, u = globalThis) {
      if (a.brandCheck(this, h), a.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), typeof C != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
        );
      for (const [B, I] of this)
        C.apply(u, [I, B, this]);
    }
  }
  h.prototype[Symbol.iterator] = h.prototype.entries, Object.defineProperties(h.prototype, {
    [Symbol.toStringTag]: {
      value: "FormData",
      configurable: !0
    }
  });
  function E(Q, C, u) {
    if (Q = Buffer.from(Q).toString("utf8"), typeof C == "string")
      C = Buffer.from(C).toString("utf8");
    else if (i(C) || (C = C instanceof o ? new g([C], "blob", { type: C.type }) : new n(C, "blob", { type: C.type })), u !== void 0) {
      const B = {
        type: C.type,
        lastModified: C.lastModified
      };
      C = c && C instanceof c || C instanceof s ? new g([C], u, B) : new n(C, u, B);
    }
    return { name: Q, value: C };
  }
  return Bc = { FormData: h }, Bc;
}
var Ic, Uh;
function Ia() {
  if (Uh)
    return Ic;
  Uh = 1;
  const t = Bp(), e = fe, {
    ReadableStreamFrom: A,
    isBlobLike: r,
    isReadableStreamLike: s,
    readableStreamClose: n,
    createDeferredPromise: i,
    fullyReadBody: a
  } = yt(), { FormData: o } = Rl(), { kState: c } = Or(), { webidl: g } = WA(), { DOMException: h, structuredClone: E } = fs(), { Blob: Q, File: C } = ds, { kBodyUsed: u } = Je, B = eA, { isErrored: I } = fe, { isUint8Array: d, isArrayBuffer: w } = iQ, { File: m } = yl(), { parseMIMEType: p, serializeAMimeType: R } = Ot();
  let D = globalThis.ReadableStream;
  const S = C ?? m, v = new TextEncoder(), T = new TextDecoder();
  function X(f, M = !1) {
    D || (D = Yr.ReadableStream);
    let _ = null;
    f instanceof D ? _ = f : r(f) ? _ = f.stream() : _ = new D({
      async pull(oe) {
        oe.enqueue(
          typeof P == "string" ? v.encode(P) : P
        ), queueMicrotask(() => n(oe));
      },
      start() {
      },
      type: void 0
    }), B(s(_));
    let J = null, P = null, G = null, V = null;
    if (typeof f == "string")
      P = f, V = "text/plain;charset=UTF-8";
    else if (f instanceof URLSearchParams)
      P = f.toString(), V = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (w(f))
      P = new Uint8Array(f.slice());
    else if (ArrayBuffer.isView(f))
      P = new Uint8Array(f.buffer.slice(f.byteOffset, f.byteOffset + f.byteLength));
    else if (e.isFormDataLike(f)) {
      const oe = `----formdata-undici-0${`${Math.floor(Math.random() * 1e11)}`.padStart(11, "0")}`, he = `--${oe}\r
Content-Disposition: form-data`;
      /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
      const _e = (de) => de.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), Ge = (de) => de.replace(/\r?\n|\r/g, `\r
`), me = [], Re = new Uint8Array([13, 10]);
      G = 0;
      let We = !1;
      for (const [de, we] of f)
        if (typeof we == "string") {
          const UA = v.encode(he + `; name="${_e(Ge(de))}"\r
\r
${Ge(we)}\r
`);
          me.push(UA), G += UA.byteLength;
        } else {
          const UA = v.encode(`${he}; name="${_e(Ge(de))}"` + (we.name ? `; filename="${_e(we.name)}"` : "") + `\r
Content-Type: ${we.type || "application/octet-stream"}\r
\r
`);
          me.push(UA, we, Re), typeof we.size == "number" ? G += UA.byteLength + we.size + Re.byteLength : We = !0;
        }
      const Ie = v.encode(`--${oe}--`);
      me.push(Ie), G += Ie.byteLength, We && (G = null), P = f, J = async function* () {
        for (const de of me)
          de.stream ? yield* de.stream() : yield de;
      }, V = "multipart/form-data; boundary=" + oe;
    } else if (r(f))
      P = f, G = f.size, f.type && (V = f.type);
    else if (typeof f[Symbol.asyncIterator] == "function") {
      if (M)
        throw new TypeError("keepalive");
      if (e.isDisturbed(f) || f.locked)
        throw new TypeError(
          "Response body object should not be disturbed or locked"
        );
      _ = f instanceof D ? f : A(f);
    }
    if ((typeof P == "string" || e.isBuffer(P)) && (G = Buffer.byteLength(P)), J != null) {
      let oe;
      _ = new D({
        async start() {
          oe = J(f)[Symbol.asyncIterator]();
        },
        async pull(he) {
          const { value: _e, done: Ge } = await oe.next();
          return Ge ? queueMicrotask(() => {
            he.close();
          }) : I(_) || he.enqueue(new Uint8Array(_e)), he.desiredSize > 0;
        },
        async cancel(he) {
          await oe.return();
        },
        type: void 0
      });
    }
    return [{ stream: _, source: P, length: G }, V];
  }
  function K(f, M = !1) {
    return D || (D = Yr.ReadableStream), f instanceof D && (B(!e.isDisturbed(f), "The body has already been consumed."), B(!f.locked, "The stream is locked.")), X(f, M);
  }
  function z(f) {
    const [M, _] = f.stream.tee(), J = E(_, { transfer: [_] }), [, P] = J.tee();
    return f.stream = M, {
      stream: P,
      length: f.length,
      source: f.source
    };
  }
  async function* ue(f) {
    if (f)
      if (d(f))
        yield f;
      else {
        const M = f.stream;
        if (e.isDisturbed(M))
          throw new TypeError("The body has already been consumed.");
        if (M.locked)
          throw new TypeError("The stream is locked.");
        M[u] = !0, yield* M;
      }
  }
  function Y(f) {
    if (f.aborted)
      throw new h("The operation was aborted.", "AbortError");
  }
  function ee(f) {
    return {
      blob() {
        return ne(this, (_) => {
          let J = F(this);
          return J === "failure" ? J = "" : J && (J = R(J)), new Q([_], { type: J });
        }, f);
      },
      arrayBuffer() {
        return ne(this, (_) => new Uint8Array(_).buffer, f);
      },
      text() {
        return ne(this, k, f);
      },
      json() {
        return ne(this, q, f);
      },
      async formData() {
        g.brandCheck(this, f), Y(this[c]);
        const _ = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(_)) {
          const J = {};
          for (const [ae, oe] of this.headers)
            J[ae.toLowerCase()] = oe;
          const P = new o();
          let G;
          try {
            G = new t({
              headers: J,
              preservePath: !0
            });
          } catch (ae) {
            throw new h(`${ae}`, "AbortError");
          }
          G.on("field", (ae, oe) => {
            P.append(ae, oe);
          }), G.on("file", (ae, oe, he, _e, Ge) => {
            const me = [];
            if (_e === "base64" || _e.toLowerCase() === "base64") {
              let Re = "";
              oe.on("data", (We) => {
                Re += We.toString().replace(/[\r\n]/gm, "");
                const Ie = Re.length - Re.length % 4;
                me.push(Buffer.from(Re.slice(0, Ie), "base64")), Re = Re.slice(Ie);
              }), oe.on("end", () => {
                me.push(Buffer.from(Re, "base64")), P.append(ae, new S(me, he, { type: Ge }));
              });
            } else
              oe.on("data", (Re) => {
                me.push(Re);
              }), oe.on("end", () => {
                P.append(ae, new S(me, he, { type: Ge }));
              });
          });
          const V = new Promise((ae, oe) => {
            G.on("finish", ae), G.on("error", (he) => oe(new TypeError(he)));
          });
          if (this.body !== null)
            for await (const ae of ue(this[c].body))
              G.write(ae);
          return G.end(), await V, P;
        } else if (/application\/x-www-form-urlencoded/.test(_)) {
          let J;
          try {
            let G = "";
            const V = new TextDecoder("utf-8", { ignoreBOM: !0 });
            for await (const ae of ue(this[c].body)) {
              if (!d(ae))
                throw new TypeError("Expected Uint8Array chunk");
              G += V.decode(ae, { stream: !0 });
            }
            G += V.decode(), J = new URLSearchParams(G);
          } catch (G) {
            throw Object.assign(new TypeError(), { cause: G });
          }
          const P = new o();
          for (const [G, V] of J)
            P.append(G, V);
          return P;
        } else
          throw await Promise.resolve(), Y(this[c]), g.errors.exception({
            header: `${f.name}.formData`,
            message: "Could not parse content as FormData."
          });
      }
    };
  }
  function re(f) {
    Object.assign(f.prototype, ee(f));
  }
  async function ne(f, M, _) {
    if (g.brandCheck(f, _), Y(f[c]), Z(f[c].body))
      throw new TypeError("Body is unusable");
    const J = i(), P = (V) => J.reject(V), G = (V) => {
      try {
        J.resolve(M(V));
      } catch (ae) {
        P(ae);
      }
    };
    return f[c].body == null ? (G(new Uint8Array()), J.promise) : (await a(f[c].body, G, P), J.promise);
  }
  function Z(f) {
    return f != null && (f.stream.locked || e.isDisturbed(f.stream));
  }
  function k(f) {
    return f.length === 0 ? "" : (f[0] === 239 && f[1] === 187 && f[2] === 191 && (f = f.subarray(3)), T.decode(f));
  }
  function q(f) {
    return JSON.parse(k(f));
  }
  function F(f) {
    const { headersList: M } = f[c], _ = M.get("content-type");
    return _ === null ? "failure" : p(_);
  }
  return Ic = {
    extractBody: X,
    safelyExtractBody: K,
    cloneBody: z,
    mixinBody: re
  }, Ic;
}
const {
  InvalidArgumentError: be,
  NotSupportedError: Ip
} = Te, Wt = eA, { kHTTP2BuildRequest: dp, kHTTP2CopyHeaders: fp, kHTTP1BuildRequest: pp } = Je, HA = fe, mC = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, yC = /[^\t\x20-\x7e\x80-\xff]/, wp = /[^\u0021-\u00ff]/, lt = Symbol("handler"), Ke = {};
let dc;
try {
  const t = require("diagnostics_channel");
  Ke.create = t.channel("undici:request:create"), Ke.bodySent = t.channel("undici:request:bodySent"), Ke.headers = t.channel("undici:request:headers"), Ke.trailers = t.channel("undici:request:trailers"), Ke.error = t.channel("undici:request:error");
} catch {
  Ke.create = { hasSubscribers: !1 }, Ke.bodySent = { hasSubscribers: !1 }, Ke.headers = { hasSubscribers: !1 }, Ke.trailers = { hasSubscribers: !1 }, Ke.error = { hasSubscribers: !1 };
}
let mp = class Mg {
  constructor(e, {
    path: A,
    method: r,
    body: s,
    headers: n,
    query: i,
    idempotent: a,
    blocking: o,
    upgrade: c,
    headersTimeout: g,
    bodyTimeout: h,
    reset: E,
    throwOnError: Q,
    expectContinue: C
  }, u) {
    if (typeof A != "string")
      throw new be("path must be a string");
    if (A[0] !== "/" && !(A.startsWith("http://") || A.startsWith("https://")) && r !== "CONNECT")
      throw new be("path must be an absolute URL or start with a slash");
    if (wp.exec(A) !== null)
      throw new be("invalid request path");
    if (typeof r != "string")
      throw new be("method must be a string");
    if (mC.exec(r) === null)
      throw new be("invalid request method");
    if (c && typeof c != "string")
      throw new be("upgrade must be a string");
    if (g != null && (!Number.isFinite(g) || g < 0))
      throw new be("invalid headersTimeout");
    if (h != null && (!Number.isFinite(h) || h < 0))
      throw new be("invalid bodyTimeout");
    if (E != null && typeof E != "boolean")
      throw new be("invalid reset");
    if (C != null && typeof C != "boolean")
      throw new be("invalid expectContinue");
    if (this.headersTimeout = g, this.bodyTimeout = h, this.throwOnError = Q === !0, this.method = r, this.abort = null, s == null)
      this.body = null;
    else if (HA.isStream(s)) {
      this.body = s;
      const B = this.body._readableState;
      (!B || !B.autoDestroy) && (this.endHandler = function() {
        HA.destroy(this);
      }, this.body.on("end", this.endHandler)), this.errorHandler = (I) => {
        this.abort ? this.abort(I) : this.error = I;
      }, this.body.on("error", this.errorHandler);
    } else if (HA.isBuffer(s))
      this.body = s.byteLength ? s : null;
    else if (ArrayBuffer.isView(s))
      this.body = s.buffer.byteLength ? Buffer.from(s.buffer, s.byteOffset, s.byteLength) : null;
    else if (s instanceof ArrayBuffer)
      this.body = s.byteLength ? Buffer.from(s) : null;
    else if (typeof s == "string")
      this.body = s.length ? Buffer.from(s) : null;
    else if (HA.isFormDataLike(s) || HA.isIterable(s) || HA.isBlobLike(s))
      this.body = s;
    else
      throw new be("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
    if (this.completed = !1, this.aborted = !1, this.upgrade = c || null, this.path = i ? HA.buildURL(A, i) : A, this.origin = e, this.idempotent = a ?? (r === "HEAD" || r === "GET"), this.blocking = o ?? !1, this.reset = E ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = C ?? !1, Array.isArray(n)) {
      if (n.length % 2 !== 0)
        throw new be("headers array must be even");
      for (let B = 0; B < n.length; B += 2)
        Rn(this, n[B], n[B + 1]);
    } else if (n && typeof n == "object") {
      const B = Object.keys(n);
      for (let I = 0; I < B.length; I++) {
        const d = B[I];
        Rn(this, d, n[d]);
      }
    } else if (n != null)
      throw new be("headers must be an object or an array");
    if (HA.isFormDataLike(this.body)) {
      if (HA.nodeMajor < 16 || HA.nodeMajor === 16 && HA.nodeMinor < 8)
        throw new be("Form-Data bodies are only supported in node v16.8 and newer.");
      dc || (dc = Ia().extractBody);
      const [B, I] = dc(s);
      this.contentType == null && (this.contentType = I, this.headers += `content-type: ${I}\r
`), this.body = B.stream, this.contentLength = B.length;
    } else
      HA.isBlobLike(s) && this.contentType == null && s.type && (this.contentType = s.type, this.headers += `content-type: ${s.type}\r
`);
    HA.validateHandler(u, r, c), this.servername = HA.getServerName(this.host), this[lt] = u, Ke.create.hasSubscribers && Ke.create.publish({ request: this });
  }
  onBodySent(e) {
    if (this[lt].onBodySent)
      try {
        this[lt].onBodySent(e);
      } catch (A) {
        this.onError(A);
      }
  }
  onRequestSent() {
    if (Ke.bodySent.hasSubscribers && Ke.bodySent.publish({ request: this }), this[lt].onRequestSent)
      try {
        this[lt].onRequestSent();
      } catch (e) {
        this.onError(e);
      }
  }
  onConnect(e) {
    if (Wt(!this.aborted), Wt(!this.completed), this.error)
      e(this.error);
    else
      return this.abort = e, this[lt].onConnect(e);
  }
  onHeaders(e, A, r, s) {
    return Wt(!this.aborted), Wt(!this.completed), Ke.headers.hasSubscribers && Ke.headers.publish({ request: this, response: { statusCode: e, headers: A, statusText: s } }), this[lt].onHeaders(e, A, r, s);
  }
  onData(e) {
    return Wt(!this.aborted), Wt(!this.completed), this[lt].onData(e);
  }
  onUpgrade(e, A, r) {
    return Wt(!this.aborted), Wt(!this.completed), this[lt].onUpgrade(e, A, r);
  }
  onComplete(e) {
    return this.onFinally(), Wt(!this.aborted), this.completed = !0, Ke.trailers.hasSubscribers && Ke.trailers.publish({ request: this, trailers: e }), this[lt].onComplete(e);
  }
  onError(e) {
    if (this.onFinally(), Ke.error.hasSubscribers && Ke.error.publish({ request: this, error: e }), !this.aborted)
      return this.aborted = !0, this[lt].onError(e);
  }
  onFinally() {
    this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
  }
  // TODO: adjust to support H2
  addHeader(e, A) {
    return Rn(this, e, A), this;
  }
  static [pp](e, A, r) {
    return new Mg(e, A, r);
  }
  static [dp](e, A, r) {
    const s = A.headers;
    A = { ...A, headers: null };
    const n = new Mg(e, A, r);
    if (n.headers = {}, Array.isArray(s)) {
      if (s.length % 2 !== 0)
        throw new be("headers array must be even");
      for (let i = 0; i < s.length; i += 2)
        Rn(n, s[i], s[i + 1], !0);
    } else if (s && typeof s == "object") {
      const i = Object.keys(s);
      for (let a = 0; a < i.length; a++) {
        const o = i[a];
        Rn(n, o, s[o], !0);
      }
    } else if (s != null)
      throw new be("headers must be an object or an array");
    return n;
  }
  static [fp](e) {
    const A = e.split(`\r
`), r = {};
    for (const s of A) {
      const [n, i] = s.split(": ");
      i == null || i.length === 0 || (r[n] ? r[n] += `,${i}` : r[n] = i);
    }
    return r;
  }
};
function Vr(t, e, A) {
  if (e && typeof e == "object")
    throw new be(`invalid ${t} header`);
  if (e = e != null ? `${e}` : "", yC.exec(e) !== null)
    throw new be(`invalid ${t} header`);
  return A ? e : `${t}: ${e}\r
`;
}
function Rn(t, e, A, r = !1) {
  if (A && typeof A == "object" && !Array.isArray(A))
    throw new be(`invalid ${e} header`);
  if (A === void 0)
    return;
  if (t.host === null && e.length === 4 && e.toLowerCase() === "host") {
    if (yC.exec(A) !== null)
      throw new be(`invalid ${e} header`);
    t.host = A;
  } else if (t.contentLength === null && e.length === 14 && e.toLowerCase() === "content-length") {
    if (t.contentLength = parseInt(A, 10), !Number.isFinite(t.contentLength))
      throw new be("invalid content-length header");
  } else if (t.contentType === null && e.length === 12 && e.toLowerCase() === "content-type")
    t.contentType = A, r ? t.headers[e] = Vr(e, A, r) : t.headers += Vr(e, A);
  else {
    if (e.length === 17 && e.toLowerCase() === "transfer-encoding")
      throw new be("invalid transfer-encoding header");
    if (e.length === 10 && e.toLowerCase() === "connection") {
      const s = typeof A == "string" ? A.toLowerCase() : null;
      if (s !== "close" && s !== "keep-alive")
        throw new be("invalid connection header");
      s === "close" && (t.reset = !0);
    } else {
      if (e.length === 10 && e.toLowerCase() === "keep-alive")
        throw new be("invalid keep-alive header");
      if (e.length === 7 && e.toLowerCase() === "upgrade")
        throw new be("invalid upgrade header");
      if (e.length === 6 && e.toLowerCase() === "expect")
        throw new Ip("expect header not supported");
      if (mC.exec(e) === null)
        throw new be("invalid header key");
      if (Array.isArray(A))
        for (let s = 0; s < A.length; s++)
          r ? t.headers[e] ? t.headers[e] += `,${Vr(e, A[s], r)}` : t.headers[e] = Vr(e, A[s], r) : t.headers += Vr(e, A[s]);
      else
        r ? t.headers[e] = Vr(e, A, r) : t.headers += Vr(e, A);
    }
  }
}
var yp = mp;
const Rp = un;
let Dp = class extends Rp {
  dispatch() {
    throw new Error("not implemented");
  }
  close() {
    throw new Error("not implemented");
  }
  destroy() {
    throw new Error("not implemented");
  }
};
var Dl = Dp;
const bp = Dl, {
  ClientDestroyedError: fc,
  ClientClosedError: kp,
  InvalidArgumentError: Rs
} = Te, { kDestroy: Sp, kClose: Fp, kDispatch: pc, kInterceptors: Wr } = Je, Ds = Symbol("destroyed"), Dn = Symbol("closed"), xt = Symbol("onDestroyed"), bs = Symbol("onClosed"), Ki = Symbol("Intercepted Dispatch");
let Np = class extends bp {
  constructor() {
    super(), this[Ds] = !1, this[xt] = null, this[Dn] = !1, this[bs] = [];
  }
  get destroyed() {
    return this[Ds];
  }
  get closed() {
    return this[Dn];
  }
  get interceptors() {
    return this[Wr];
  }
  set interceptors(e) {
    if (e) {
      for (let A = e.length - 1; A >= 0; A--)
        if (typeof this[Wr][A] != "function")
          throw new Rs("interceptor must be an function");
    }
    this[Wr] = e;
  }
  close(e) {
    if (e === void 0)
      return new Promise((r, s) => {
        this.close((n, i) => n ? s(n) : r(i));
      });
    if (typeof e != "function")
      throw new Rs("invalid callback");
    if (this[Ds]) {
      queueMicrotask(() => e(new fc(), null));
      return;
    }
    if (this[Dn]) {
      this[bs] ? this[bs].push(e) : queueMicrotask(() => e(null, null));
      return;
    }
    this[Dn] = !0, this[bs].push(e);
    const A = () => {
      const r = this[bs];
      this[bs] = null;
      for (let s = 0; s < r.length; s++)
        r[s](null, null);
    };
    this[Fp]().then(() => this.destroy()).then(() => {
      queueMicrotask(A);
    });
  }
  destroy(e, A) {
    if (typeof e == "function" && (A = e, e = null), A === void 0)
      return new Promise((s, n) => {
        this.destroy(e, (i, a) => i ? (
          /* istanbul ignore next: should never error */
          n(i)
        ) : s(a));
      });
    if (typeof A != "function")
      throw new Rs("invalid callback");
    if (this[Ds]) {
      this[xt] ? this[xt].push(A) : queueMicrotask(() => A(null, null));
      return;
    }
    e || (e = new fc()), this[Ds] = !0, this[xt] = this[xt] || [], this[xt].push(A);
    const r = () => {
      const s = this[xt];
      this[xt] = null;
      for (let n = 0; n < s.length; n++)
        s[n](null, null);
    };
    this[Sp](e).then(() => {
      queueMicrotask(r);
    });
  }
  [Ki](e, A) {
    if (!this[Wr] || this[Wr].length === 0)
      return this[Ki] = this[pc], this[pc](e, A);
    let r = this[pc].bind(this);
    for (let s = this[Wr].length - 1; s >= 0; s--)
      r = this[Wr][s](r);
    return this[Ki] = r, r(e, A);
  }
  dispatch(e, A) {
    if (!A || typeof A != "object")
      throw new Rs("handler must be an object");
    try {
      if (!e || typeof e != "object")
        throw new Rs("opts must be an object.");
      if (this[Ds] || this[xt])
        throw new fc();
      if (this[Dn])
        throw new kp();
      return this[Ki](e, A);
    } catch (r) {
      if (typeof A.onError != "function")
        throw new Rs("invalid onError method");
      return A.onError(r), !1;
    }
  }
};
var da = Np;
const Up = hl, Th = eA, RC = fe, { InvalidArgumentError: Tp, ConnectTimeoutError: vp } = Te;
let wc, Gg;
ge.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? Gg = class {
  constructor(e) {
    this._maxCachedSessions = e, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new ge.FinalizationRegistry((A) => {
      if (this._sessionCache.size < this._maxCachedSessions)
        return;
      const r = this._sessionCache.get(A);
      r !== void 0 && r.deref() === void 0 && this._sessionCache.delete(A);
    });
  }
  get(e) {
    const A = this._sessionCache.get(e);
    return A ? A.deref() : null;
  }
  set(e, A) {
    this._maxCachedSessions !== 0 && (this._sessionCache.set(e, new WeakRef(A)), this._sessionRegistry.register(A, e));
  }
} : Gg = class {
  constructor(e) {
    this._maxCachedSessions = e, this._sessionCache = /* @__PURE__ */ new Map();
  }
  get(e) {
    return this._sessionCache.get(e);
  }
  set(e, A) {
    if (this._maxCachedSessions !== 0) {
      if (this._sessionCache.size >= this._maxCachedSessions) {
        const { value: r } = this._sessionCache.keys().next();
        this._sessionCache.delete(r);
      }
      this._sessionCache.set(e, A);
    }
  }
};
function Lp({ allowH2: t, maxCachedSessions: e, socketPath: A, timeout: r, ...s }) {
  if (e != null && (!Number.isInteger(e) || e < 0))
    throw new Tp("maxCachedSessions must be a positive integer or zero");
  const n = { path: A, ...s }, i = new Gg(e ?? 100);
  return r = r ?? 1e4, t = t ?? !1, function({ hostname: o, host: c, protocol: g, port: h, servername: E, localAddress: Q, httpSocket: C }, u) {
    let B;
    if (g === "https:") {
      wc || (wc = rQ), E = E || n.servername || RC.getServerName(c) || null;
      const d = E || o, w = i.get(d) || null;
      Th(d), B = wc.connect({
        highWaterMark: 16384,
        // TLS in node can't have bigger HWM anyway...
        ...n,
        servername: E,
        session: w,
        localAddress: Q,
        // TODO(HTTP/2): Add support for h2c
        ALPNProtocols: t ? ["http/1.1", "h2"] : ["http/1.1"],
        socket: C,
        // upgrade socket connection
        port: h || 443,
        host: o
      }), B.on("session", function(m) {
        i.set(d, m);
      });
    } else
      Th(!C, "httpSocket can only be sent on TLS update"), B = Up.connect({
        highWaterMark: 64 * 1024,
        // Same as nodejs fs streams.
        ...n,
        localAddress: Q,
        port: h || 80,
        host: o
      });
    if (n.keepAlive == null || n.keepAlive) {
      const d = n.keepAliveInitialDelay === void 0 ? 6e4 : n.keepAliveInitialDelay;
      B.setKeepAlive(!0, d);
    }
    const I = Mp(() => Gp(B), r);
    return B.setNoDelay(!0).once(g === "https:" ? "secureConnect" : "connect", function() {
      if (I(), u) {
        const d = u;
        u = null, d(null, this);
      }
    }).on("error", function(d) {
      if (I(), u) {
        const w = u;
        u = null, w(d);
      }
    }), B;
  };
}
function Mp(t, e) {
  if (!e)
    return () => {
    };
  let A = null, r = null;
  const s = setTimeout(() => {
    A = setImmediate(() => {
      process.platform === "win32" ? r = setImmediate(() => t()) : t();
    });
  }, e);
  return () => {
    clearTimeout(s), clearImmediate(A), clearImmediate(r);
  };
}
function Gp(t) {
  RC.destroy(t, new vp());
}
var fa = Lp, mc = {}, bn = {}, vh;
function Yp() {
  if (vh)
    return bn;
  vh = 1, Object.defineProperty(bn, "__esModule", { value: !0 }), bn.enumToMap = void 0;
  function t(e) {
    const A = {};
    return Object.keys(e).forEach((r) => {
      const s = e[r];
      typeof s == "number" && (A[r] = s);
    }), A;
  }
  return bn.enumToMap = t, bn;
}
var Lh;
function Jp() {
  return Lh || (Lh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SPECIAL_HEADERS = t.HEADER_STATE = t.MINOR = t.MAJOR = t.CONNECTION_TOKEN_CHARS = t.HEADER_CHARS = t.TOKEN = t.STRICT_TOKEN = t.HEX = t.URL_CHAR = t.STRICT_URL_CHAR = t.USERINFO_CHARS = t.MARK = t.ALPHANUM = t.NUM = t.HEX_MAP = t.NUM_MAP = t.ALPHA = t.FINISH = t.H_METHOD_MAP = t.METHOD_MAP = t.METHODS_RTSP = t.METHODS_ICE = t.METHODS_HTTP = t.METHODS = t.LENIENT_FLAGS = t.FLAGS = t.TYPE = t.ERROR = void 0;
    const e = Yp();
    (function(s) {
      s[s.OK = 0] = "OK", s[s.INTERNAL = 1] = "INTERNAL", s[s.STRICT = 2] = "STRICT", s[s.LF_EXPECTED = 3] = "LF_EXPECTED", s[s.UNEXPECTED_CONTENT_LENGTH = 4] = "UNEXPECTED_CONTENT_LENGTH", s[s.CLOSED_CONNECTION = 5] = "CLOSED_CONNECTION", s[s.INVALID_METHOD = 6] = "INVALID_METHOD", s[s.INVALID_URL = 7] = "INVALID_URL", s[s.INVALID_CONSTANT = 8] = "INVALID_CONSTANT", s[s.INVALID_VERSION = 9] = "INVALID_VERSION", s[s.INVALID_HEADER_TOKEN = 10] = "INVALID_HEADER_TOKEN", s[s.INVALID_CONTENT_LENGTH = 11] = "INVALID_CONTENT_LENGTH", s[s.INVALID_CHUNK_SIZE = 12] = "INVALID_CHUNK_SIZE", s[s.INVALID_STATUS = 13] = "INVALID_STATUS", s[s.INVALID_EOF_STATE = 14] = "INVALID_EOF_STATE", s[s.INVALID_TRANSFER_ENCODING = 15] = "INVALID_TRANSFER_ENCODING", s[s.CB_MESSAGE_BEGIN = 16] = "CB_MESSAGE_BEGIN", s[s.CB_HEADERS_COMPLETE = 17] = "CB_HEADERS_COMPLETE", s[s.CB_MESSAGE_COMPLETE = 18] = "CB_MESSAGE_COMPLETE", s[s.CB_CHUNK_HEADER = 19] = "CB_CHUNK_HEADER", s[s.CB_CHUNK_COMPLETE = 20] = "CB_CHUNK_COMPLETE", s[s.PAUSED = 21] = "PAUSED", s[s.PAUSED_UPGRADE = 22] = "PAUSED_UPGRADE", s[s.PAUSED_H2_UPGRADE = 23] = "PAUSED_H2_UPGRADE", s[s.USER = 24] = "USER";
    })(t.ERROR || (t.ERROR = {})), function(s) {
      s[s.BOTH = 0] = "BOTH", s[s.REQUEST = 1] = "REQUEST", s[s.RESPONSE = 2] = "RESPONSE";
    }(t.TYPE || (t.TYPE = {})), function(s) {
      s[s.CONNECTION_KEEP_ALIVE = 1] = "CONNECTION_KEEP_ALIVE", s[s.CONNECTION_CLOSE = 2] = "CONNECTION_CLOSE", s[s.CONNECTION_UPGRADE = 4] = "CONNECTION_UPGRADE", s[s.CHUNKED = 8] = "CHUNKED", s[s.UPGRADE = 16] = "UPGRADE", s[s.CONTENT_LENGTH = 32] = "CONTENT_LENGTH", s[s.SKIPBODY = 64] = "SKIPBODY", s[s.TRAILING = 128] = "TRAILING", s[s.TRANSFER_ENCODING = 512] = "TRANSFER_ENCODING";
    }(t.FLAGS || (t.FLAGS = {})), function(s) {
      s[s.HEADERS = 1] = "HEADERS", s[s.CHUNKED_LENGTH = 2] = "CHUNKED_LENGTH", s[s.KEEP_ALIVE = 4] = "KEEP_ALIVE";
    }(t.LENIENT_FLAGS || (t.LENIENT_FLAGS = {}));
    var A;
    (function(s) {
      s[s.DELETE = 0] = "DELETE", s[s.GET = 1] = "GET", s[s.HEAD = 2] = "HEAD", s[s.POST = 3] = "POST", s[s.PUT = 4] = "PUT", s[s.CONNECT = 5] = "CONNECT", s[s.OPTIONS = 6] = "OPTIONS", s[s.TRACE = 7] = "TRACE", s[s.COPY = 8] = "COPY", s[s.LOCK = 9] = "LOCK", s[s.MKCOL = 10] = "MKCOL", s[s.MOVE = 11] = "MOVE", s[s.PROPFIND = 12] = "PROPFIND", s[s.PROPPATCH = 13] = "PROPPATCH", s[s.SEARCH = 14] = "SEARCH", s[s.UNLOCK = 15] = "UNLOCK", s[s.BIND = 16] = "BIND", s[s.REBIND = 17] = "REBIND", s[s.UNBIND = 18] = "UNBIND", s[s.ACL = 19] = "ACL", s[s.REPORT = 20] = "REPORT", s[s.MKACTIVITY = 21] = "MKACTIVITY", s[s.CHECKOUT = 22] = "CHECKOUT", s[s.MERGE = 23] = "MERGE", s[s["M-SEARCH"] = 24] = "M-SEARCH", s[s.NOTIFY = 25] = "NOTIFY", s[s.SUBSCRIBE = 26] = "SUBSCRIBE", s[s.UNSUBSCRIBE = 27] = "UNSUBSCRIBE", s[s.PATCH = 28] = "PATCH", s[s.PURGE = 29] = "PURGE", s[s.MKCALENDAR = 30] = "MKCALENDAR", s[s.LINK = 31] = "LINK", s[s.UNLINK = 32] = "UNLINK", s[s.SOURCE = 33] = "SOURCE", s[s.PRI = 34] = "PRI", s[s.DESCRIBE = 35] = "DESCRIBE", s[s.ANNOUNCE = 36] = "ANNOUNCE", s[s.SETUP = 37] = "SETUP", s[s.PLAY = 38] = "PLAY", s[s.PAUSE = 39] = "PAUSE", s[s.TEARDOWN = 40] = "TEARDOWN", s[s.GET_PARAMETER = 41] = "GET_PARAMETER", s[s.SET_PARAMETER = 42] = "SET_PARAMETER", s[s.REDIRECT = 43] = "REDIRECT", s[s.RECORD = 44] = "RECORD", s[s.FLUSH = 45] = "FLUSH";
    })(A = t.METHODS || (t.METHODS = {})), t.METHODS_HTTP = [
      A.DELETE,
      A.GET,
      A.HEAD,
      A.POST,
      A.PUT,
      A.CONNECT,
      A.OPTIONS,
      A.TRACE,
      A.COPY,
      A.LOCK,
      A.MKCOL,
      A.MOVE,
      A.PROPFIND,
      A.PROPPATCH,
      A.SEARCH,
      A.UNLOCK,
      A.BIND,
      A.REBIND,
      A.UNBIND,
      A.ACL,
      A.REPORT,
      A.MKACTIVITY,
      A.CHECKOUT,
      A.MERGE,
      A["M-SEARCH"],
      A.NOTIFY,
      A.SUBSCRIBE,
      A.UNSUBSCRIBE,
      A.PATCH,
      A.PURGE,
      A.MKCALENDAR,
      A.LINK,
      A.UNLINK,
      A.PRI,
      // TODO(indutny): should we allow it with HTTP?
      A.SOURCE
    ], t.METHODS_ICE = [
      A.SOURCE
    ], t.METHODS_RTSP = [
      A.OPTIONS,
      A.DESCRIBE,
      A.ANNOUNCE,
      A.SETUP,
      A.PLAY,
      A.PAUSE,
      A.TEARDOWN,
      A.GET_PARAMETER,
      A.SET_PARAMETER,
      A.REDIRECT,
      A.RECORD,
      A.FLUSH,
      // For AirPlay
      A.GET,
      A.POST
    ], t.METHOD_MAP = e.enumToMap(A), t.H_METHOD_MAP = {}, Object.keys(t.METHOD_MAP).forEach((s) => {
      /^H/.test(s) && (t.H_METHOD_MAP[s] = t.METHOD_MAP[s]);
    }), function(s) {
      s[s.SAFE = 0] = "SAFE", s[s.SAFE_WITH_CB = 1] = "SAFE_WITH_CB", s[s.UNSAFE = 2] = "UNSAFE";
    }(t.FINISH || (t.FINISH = {})), t.ALPHA = [];
    for (let s = "A".charCodeAt(0); s <= "Z".charCodeAt(0); s++)
      t.ALPHA.push(String.fromCharCode(s)), t.ALPHA.push(String.fromCharCode(s + 32));
    t.NUM_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    }, t.HEX_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    }, t.NUM = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ], t.ALPHANUM = t.ALPHA.concat(t.NUM), t.MARK = ["-", "_", ".", "!", "~", "*", "'", "(", ")"], t.USERINFO_CHARS = t.ALPHANUM.concat(t.MARK).concat(["%", ";", ":", "&", "=", "+", "$", ","]), t.STRICT_URL_CHAR = [
      "!",
      '"',
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~"
    ].concat(t.ALPHANUM), t.URL_CHAR = t.STRICT_URL_CHAR.concat(["	", "\f"]);
    for (let s = 128; s <= 255; s++)
      t.URL_CHAR.push(s);
    t.HEX = t.NUM.concat(["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]), t.STRICT_TOKEN = [
      "!",
      "#",
      "$",
      "%",
      "&",
      "'",
      "*",
      "+",
      "-",
      ".",
      "^",
      "_",
      "`",
      "|",
      "~"
    ].concat(t.ALPHANUM), t.TOKEN = t.STRICT_TOKEN.concat([" "]), t.HEADER_CHARS = ["	"];
    for (let s = 32; s <= 255; s++)
      s !== 127 && t.HEADER_CHARS.push(s);
    t.CONNECTION_TOKEN_CHARS = t.HEADER_CHARS.filter((s) => s !== 44), t.MAJOR = t.NUM_MAP, t.MINOR = t.MAJOR;
    var r;
    (function(s) {
      s[s.GENERAL = 0] = "GENERAL", s[s.CONNECTION = 1] = "CONNECTION", s[s.CONTENT_LENGTH = 2] = "CONTENT_LENGTH", s[s.TRANSFER_ENCODING = 3] = "TRANSFER_ENCODING", s[s.UPGRADE = 4] = "UPGRADE", s[s.CONNECTION_KEEP_ALIVE = 5] = "CONNECTION_KEEP_ALIVE", s[s.CONNECTION_CLOSE = 6] = "CONNECTION_CLOSE", s[s.CONNECTION_UPGRADE = 7] = "CONNECTION_UPGRADE", s[s.TRANSFER_ENCODING_CHUNKED = 8] = "TRANSFER_ENCODING_CHUNKED";
    })(r = t.HEADER_STATE || (t.HEADER_STATE = {})), t.SPECIAL_HEADERS = {
      connection: r.CONNECTION,
      "content-length": r.CONTENT_LENGTH,
      "proxy-connection": r.CONNECTION,
      "transfer-encoding": r.TRANSFER_ENCODING,
      upgrade: r.UPGRADE
    };
  }(mc)), mc;
}
const ks = fe, { kBodyUsed: $n } = Je, bl = eA, { InvalidArgumentError: _p } = Te, Op = un, Hp = [300, 301, 302, 303, 307, 308], Mh = Symbol("body");
class Gh {
  constructor(e) {
    this[Mh] = e, this[$n] = !1;
  }
  async *[Symbol.asyncIterator]() {
    bl(!this[$n], "disturbed"), this[$n] = !0, yield* this[Mh];
  }
}
let Pp = class {
  constructor(e, A, r, s) {
    if (A != null && (!Number.isInteger(A) || A < 0))
      throw new _p("maxRedirections must be a positive number");
    ks.validateHandler(s, r.method, r.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = { ...r, maxRedirections: 0 }, this.maxRedirections = A, this.handler = s, this.history = [], ks.isStream(this.opts.body) ? (ks.bodyLength(this.opts.body) === 0 && this.opts.body.on("data", function() {
      bl(!1);
    }), typeof this.opts.body.readableDidRead != "boolean" && (this.opts.body[$n] = !1, Op.prototype.on.call(this.opts.body, "data", function() {
      this[$n] = !0;
    }))) : this.opts.body && typeof this.opts.body.pipeTo == "function" ? this.opts.body = new Gh(this.opts.body) : this.opts.body && typeof this.opts.body != "string" && !ArrayBuffer.isView(this.opts.body) && ks.isIterable(this.opts.body) && (this.opts.body = new Gh(this.opts.body));
  }
  onConnect(e) {
    this.abort = e, this.handler.onConnect(e, { history: this.history });
  }
  onUpgrade(e, A, r) {
    this.handler.onUpgrade(e, A, r);
  }
  onError(e) {
    this.handler.onError(e);
  }
  onHeaders(e, A, r, s) {
    if (this.location = this.history.length >= this.maxRedirections || ks.isDisturbed(this.opts.body) ? null : Vp(e, A), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location)
      return this.handler.onHeaders(e, A, r, s);
    const { origin: n, pathname: i, search: a } = ks.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), o = a ? `${i}${a}` : i;
    this.opts.headers = Wp(this.opts.headers, e === 303, this.opts.origin !== n), this.opts.path = o, this.opts.origin = n, this.opts.maxRedirections = 0, this.opts.query = null, e === 303 && this.opts.method !== "HEAD" && (this.opts.method = "GET", this.opts.body = null);
  }
  onData(e) {
    if (!this.location)
      return this.handler.onData(e);
  }
  onComplete(e) {
    this.location ? (this.location = null, this.abort = null, this.dispatch(this.opts, this)) : this.handler.onComplete(e);
  }
  onBodySent(e) {
    this.handler.onBodySent && this.handler.onBodySent(e);
  }
};
function Vp(t, e) {
  if (Hp.indexOf(t) === -1)
    return null;
  for (let A = 0; A < e.length; A += 2)
    if (e[A].toString().toLowerCase() === "location")
      return e[A + 1];
}
function Yh(t, e, A) {
  return t.length === 4 && t.toString().toLowerCase() === "host" || e && t.toString().toLowerCase().indexOf("content-") === 0 || A && t.length === 13 && t.toString().toLowerCase() === "authorization" || A && t.length === 6 && t.toString().toLowerCase() === "cookie";
}
function Wp(t, e, A) {
  const r = [];
  if (Array.isArray(t))
    for (let s = 0; s < t.length; s += 2)
      Yh(t[s], e, A) || r.push(t[s], t[s + 1]);
  else if (t && typeof t == "object")
    for (const s of Object.keys(t))
      Yh(s, e, A) || r.push(s, t[s]);
  else
    bl(t == null, "headers must be an object or an array");
  return r;
}
var DC = Pp;
const xp = DC;
function qp({ maxRedirections: t }) {
  return (e) => function(r, s) {
    const { maxRedirections: n = t } = r;
    if (!n)
      return e(r, s);
    const i = new xp(e, n, r, s);
    return r = { ...r, maxRedirections: 0 }, e(r, i);
  };
}
var kl = qp, yc, Jh;
function _h() {
  return Jh || (Jh = 1, yc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJsbGh0dHBfc3RhdHVzX25hbWUAIRpsbGh0dHBfc2V0X2xlbmllbnRfaGVhZGVycwAiIWxsaHR0cF9zZXRfbGVuaWVudF9jaHVua2VkX2xlbmd0aAAjHWxsaHR0cF9zZXRfbGVuaWVudF9rZWVwX2FsaXZlACQkbGxodHRwX3NldF9sZW5pZW50X3RyYW5zZmVyX2VuY29kaW5nACUYbGxodHRwX21lc3NhZ2VfbmVlZHNfZW9mAD8JFwEAQQELEQECAwQFCwYHNTk3MS8tJyspCsLgAkUCAAsIABCIgICAAAsZACAAEMKAgIAAGiAAIAI2AjggACABOgAoCxwAIAAgAC8BMiAALQAuIAAQwYCAgAAQgICAgAALKgEBf0HAABDGgICAACIBEMKAgIAAGiABQYCIgIAANgI4IAEgADoAKCABCwoAIAAQyICAgAALBwAgAC0AKAsHACAALQAqCwcAIAAtACsLBwAgAC0AKQsHACAALwEyCwcAIAAtAC4LRQEEfyAAKAIYIQEgAC0ALSECIAAtACghAyAAKAI4IQQgABDCgICAABogACAENgI4IAAgAzoAKCAAIAI6AC0gACABNgIYCxEAIAAgASABIAJqEMOAgIAACxAAIABBAEHcABDMgICAABoLZwEBf0EAIQECQCAAKAIMDQACQAJAAkACQCAALQAvDgMBAAMCCyAAKAI4IgFFDQAgASgCLCIBRQ0AIAAgARGAgICAAAAiAQ0DC0EADwsQyoCAgAAACyAAQcOWgIAANgIQQQ4hAQsgAQseAAJAIAAoAgwNACAAQdGbgIAANgIQIABBFTYCDAsLFgACQCAAKAIMQRVHDQAgAEEANgIMCwsWAAJAIAAoAgxBFkcNACAAQQA2AgwLCwcAIAAoAgwLBwAgACgCEAsJACAAIAE2AhALBwAgACgCFAsiAAJAIABBJEkNABDKgICAAAALIABBAnRBoLOAgABqKAIACyIAAkAgAEEuSQ0AEMqAgIAAAAsgAEECdEGwtICAAGooAgAL7gsBAX9B66iAgAAhAQJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABBnH9qDvQDY2IAAWFhYWFhYQIDBAVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhBgcICQoLDA0OD2FhYWFhEGFhYWFhYWFhYWFhEWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYRITFBUWFxgZGhthYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2YTc4OTphYWFhYWFhYTthYWE8YWFhYT0+P2FhYWFhYWFhQGFhQWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYUJDREVGR0hJSktMTU5PUFFSU2FhYWFhYWFhVFVWV1hZWlthXF1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFeYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhX2BhC0Hhp4CAAA8LQaShgIAADwtBy6yAgAAPC0H+sYCAAA8LQcCkgIAADwtBq6SAgAAPC0GNqICAAA8LQeKmgIAADwtBgLCAgAAPC0G5r4CAAA8LQdekgIAADwtB75+AgAAPC0Hhn4CAAA8LQfqfgIAADwtB8qCAgAAPC0Gor4CAAA8LQa6ygIAADwtBiLCAgAAPC0Hsp4CAAA8LQYKigIAADwtBjp2AgAAPC0HQroCAAA8LQcqjgIAADwtBxbKAgAAPC0HfnICAAA8LQdKcgIAADwtBxKCAgAAPC0HXoICAAA8LQaKfgIAADwtB7a6AgAAPC0GrsICAAA8LQdSlgIAADwtBzK6AgAAPC0H6roCAAA8LQfyrgIAADwtB0rCAgAAPC0HxnYCAAA8LQbuggIAADwtB96uAgAAPC0GQsYCAAA8LQdexgIAADwtBoq2AgAAPC0HUp4CAAA8LQeCrgIAADwtBn6yAgAAPC0HrsYCAAA8LQdWfgIAADwtByrGAgAAPC0HepYCAAA8LQdSegIAADwtB9JyAgAAPC0GnsoCAAA8LQbGdgIAADwtBoJ2AgAAPC0G5sYCAAA8LQbywgIAADwtBkqGAgAAPC0GzpoCAAA8LQemsgIAADwtBrJ6AgAAPC0HUq4CAAA8LQfemgIAADwtBgKaAgAAPC0GwoYCAAA8LQf6egIAADwtBjaOAgAAPC0GJrYCAAA8LQfeigIAADwtBoLGAgAAPC0Gun4CAAA8LQcalgIAADwtB6J6AgAAPC0GTooCAAA8LQcKvgIAADwtBw52AgAAPC0GLrICAAA8LQeGdgIAADwtBja+AgAAPC0HqoYCAAA8LQbStgIAADwtB0q+AgAAPC0HfsoCAAA8LQdKygIAADwtB8LCAgAAPC0GpooCAAA8LQfmjgIAADwtBmZ6AgAAPC0G1rICAAA8LQZuwgIAADwtBkrKAgAAPC0G2q4CAAA8LQcKigIAADwtB+LKAgAAPC0GepYCAAA8LQdCigIAADwtBup6AgAAPC0GBnoCAAA8LEMqAgIAAAAtB1qGAgAAhAQsgAQsWACAAIAAtAC1B/gFxIAFBAEdyOgAtCxkAIAAgAC0ALUH9AXEgAUEAR0EBdHI6AC0LGQAgACAALQAtQfsBcSABQQBHQQJ0cjoALQsZACAAIAAtAC1B9wFxIAFBAEdBA3RyOgAtCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAgAiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCBCIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQcaRgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIwIgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAggiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEH2ioCAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCNCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIMIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABB7ZqAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAjgiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCECIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQZWQgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAI8IgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAhQiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEGqm4CAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCQCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIYIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABB7ZOAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAkQiBEUNACAAIAQRgICAgAAAIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCJCIERQ0AIAAgBBGAgICAAAAhAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIsIgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAigiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEH2iICAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCUCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIcIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABBwpmAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAkgiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCICIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQZSUgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAJMIgRFDQAgACAEEYCAgIAAACEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAlQiBEUNACAAIAQRgICAgAAAIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCWCIERQ0AIAAgBBGAgICAAAAhAwsgAwtFAQF/AkACQCAALwEwQRRxQRRHDQBBASEDIAAtAChBAUYNASAALwEyQeUARiEDDAELIAAtAClBBUYhAwsgACADOgAuQQAL/gEBA39BASEDAkAgAC8BMCIEQQhxDQAgACkDIEIAUiEDCwJAAkAgAC0ALkUNAEEBIQUgAC0AKUEFRg0BQQEhBSAEQcAAcUUgA3FBAUcNAQtBACEFIARBwABxDQBBAiEFIARB//8DcSIDQQhxDQACQCADQYAEcUUNAAJAIAAtAChBAUcNACAALQAtQQpxDQBBBQ8LQQQPCwJAIANBIHENAAJAIAAtAChBAUYNACAALwEyQf//A3EiAEGcf2pB5ABJDQAgAEHMAUYNACAAQbACRg0AQQQhBSAEQShxRQ0CIANBiARxQYAERg0CC0EADwtBAEEDIAApAyBQGyEFCyAFC2IBAn9BACEBAkAgAC0AKEEBRg0AIAAvATJB//8DcSICQZx/akHkAEkNACACQcwBRg0AIAJBsAJGDQAgAC8BMCIAQcAAcQ0AQQEhASAAQYgEcUGABEYNACAAQShxRSEBCyABC6cBAQN/AkACQAJAIAAtACpFDQAgAC0AK0UNAEEAIQMgAC8BMCIEQQJxRQ0BDAILQQAhAyAALwEwIgRBAXFFDQELQQEhAyAALQAoQQFGDQAgAC8BMkH//wNxIgVBnH9qQeQASQ0AIAVBzAFGDQAgBUGwAkYNACAEQcAAcQ0AQQAhAyAEQYgEcUGABEYNACAEQShxQQBHIQMLIABBADsBMCAAQQA6AC8gAwuZAQECfwJAAkACQCAALQAqRQ0AIAAtACtFDQBBACEBIAAvATAiAkECcUUNAQwCC0EAIQEgAC8BMCICQQFxRQ0BC0EBIQEgAC0AKEEBRg0AIAAvATJB//8DcSIAQZx/akHkAEkNACAAQcwBRg0AIABBsAJGDQAgAkHAAHENAEEAIQEgAkGIBHFBgARGDQAgAkEocUEARyEBCyABC1kAIABBGGpCADcDACAAQgA3AwAgAEE4akIANwMAIABBMGpCADcDACAAQShqQgA3AwAgAEEgakIANwMAIABBEGpCADcDACAAQQhqQgA3AwAgAEHdATYCHEEAC3sBAX8CQCAAKAIMIgMNAAJAIAAoAgRFDQAgACABNgIECwJAIAAgASACEMSAgIAAIgMNACAAKAIMDwsgACADNgIcQQAhAyAAKAIEIgFFDQAgACABIAIgACgCCBGBgICAAAAiAUUNACAAIAI2AhQgACABNgIMIAEhAwsgAwvk8wEDDn8DfgR/I4CAgIAAQRBrIgMkgICAgAAgASEEIAEhBSABIQYgASEHIAEhCCABIQkgASEKIAEhCyABIQwgASENIAEhDiABIQ8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCHCIQQX9qDt0B2gEB2QECAwQFBgcICQoLDA0O2AEPENcBERLWARMUFRYXGBkaG+AB3wEcHR7VAR8gISIjJCXUASYnKCkqKyzTAdIBLS7RAdABLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVG2wFHSElKzwHOAUvNAUzMAU1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4ABgQGCAYMBhAGFAYYBhwGIAYkB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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FCAAIBA2AgxBACEQDLIBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxNCyAAQdMANgIcIAAgATYCFCAAIBA2AgxBACEQDLEBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxRCyAAQeUANgIcIAAgATYCFCAAIBA2AgxBACEQDLABCyAAQQA2AhwgACABNgIUIABBxoqAgAA2AhAgAEEHNgIMQQAhEAyvAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHSADYCHCAAIAE2AhQgACAQNgIMQQAhEAyuAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHTADYCHCAAIAE2AhQgACAQNgIMQQAhEAytAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMTQsgAEHlADYCHCAAIAE2AhQgACAQNgIMQQAhEAysAQsgAEEANgIcIAAgATYCFCAAQdyIgIAANgIQIABBBzYCDEEAIRAMqwELIBBBP0cNASABQQFqIQELQQUhEAyQAQtBACEQIABBADYCHCAAIAE2AhQgAEH9koCAADYCECAAQQc2AgwMqAELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0gA2AhwgACABNgIUIAAgEDYCDEEAIRAMpwELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0wA2AhwgACABNgIUIAAgEDYCDEEAIRAMpgELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEYLIABB5QA2AhwgACABNgIUIAAgEDYCDEEAIRAMpQELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0gA2AhwgACAUNgIUIAAgATYCDEEAIRAMpAELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0wA2AhwgACAUNgIUIAAgATYCDEEAIRAMowELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDEMLIABB5QA2AhwgACAU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YWdlX2JlZ2luYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlYCBjYWxsYmFjayBlcnJvcgBgb25fc3RhdHVzX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdmVyc2lvbl9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3VybF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21ldGhvZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lYCBjYWxsYmFjayBlcnJvcgBVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNlcnZlcgBJbnZhbGlkIGhlYWRlciB2YWx1ZSBjaGFyAEludmFsaWQgaGVhZGVyIGZpZWxkIGNoYXIAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl92ZXJzaW9uAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBIVFRQIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgdmFsdWUATWlzc2luZyBleHBlY3RlZCBMRiBhZnRlciBoZWFkZXIgdmFsdWUASW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHF1b3RlIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGVkIHZhbHVlAFBhdXNlZCBieSBvbl9oZWFkZXJzX2NvbXBsZXRlAEludmFsaWQgRU9GIHN0YXRlAG9uX3Jlc2V0IHBhdXNlAG9uX2NodW5rX2hlYWRlciBwYXVzZQBvbl9tZXNzYWdlX2JlZ2luIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZSBwYXVzZQBvbl9zdGF0dXNfY29tcGxldGUgcGF1c2UAb25fdmVyc2lvbl9jb21wbGV0ZSBwYXVzZQBvbl91cmxfY29tcGxldGUgcGF1c2UAb25fY2h1bmtfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlIHBhdXNlAG9uX21lc3NhZ2VfY29tcGxldGUgcGF1c2UAb25fbWV0aG9kX2NvbXBsZXRlIHBhdXNlAG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19leHRlbnNpb25fbmFtZSBwYXVzZQBVbmV4cGVjdGVkIHNwYWNlIGFmdGVyIHN0YXJ0IGxpbmUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fbmFtZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIG5hbWUAUGF1c2Ugb24gQ09OTkVDVC9VcGdyYWRlAFBhdXNlIG9uIFBSSS9VcGdyYWRlAEV4cGVjdGVkIEhUVFAvMiBDb25uZWN0aW9uIFByZWZhY2UAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9tZXRob2QARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgbWV0aG9kAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX2ZpZWxkAFBhdXNlZABJbnZhbGlkIHdvcmQgZW5jb3VudGVyZWQASW52YWxpZCBtZXRob2QgZW5jb3VudGVyZWQAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzY2hlbWEAUmVxdWVzdCBoYXMgaW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgAFNXSVRDSF9QUk9YWQBVU0VfUFJPWFkATUtBQ1RJVklUWQBVTlBST0NFU1NBQkxFX0VOVElUWQBDT1BZAE1PVkVEX1BFUk1BTkVOVExZAFRPT19FQVJMWQBOT1RJRlkARkFJTEVEX0RFUEVOREVOQ1kAQkFEX0dBVEVXQVkAUExBWQBQVVQAQ0hFQ0tPVVQAR0FURVdBWV9USU1FT1VUAFJFUVVFU1RfVElNRU9VVABORVRXT1JLX0NPTk5FQ1RfVElNRU9VVABDT05ORUNUSU9OX1RJTUVPVVQATE9HSU5fVElNRU9VVABORVRXT1JLX1JFQURfVElNRU9VVABQT1NUAE1JU0RJUkVDVEVEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9SRVFVRVNUAENMSUVOVF9DTE9TRURfTE9BRF9CQUxBTkNFRF9SRVFVRVNUAEJBRF9SRVFVRVNUAEhUVFBfUkVRVUVTVF9TRU5UX1RPX0hUVFBTX1BPUlQAUkVQT1JUAElNX0FfVEVBUE9UAFJFU0VUX0NPTlRFTlQATk9fQ09OVEVOVABQQVJUSUFMX0NPTlRFTlQASFBFX0lOVkFMSURfQ09OU1RBTlQASFBFX0NCX1JFU0VUAEdFVABIUEVfU1RSSUNUAENPTkZMSUNUAFRFTVBPUkFSWV9SRURJUkVDVABQRVJNQU5FTlRfUkVESVJFQ1QAQ09OTkVDVABNVUxUSV9TVEFUVVMASFBFX0lOVkFMSURfU1RBVFVTAFRPT19NQU5ZX1JFUVVFU1RTAEVBUkxZX0hJTlRTAFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TAE9QVElPTlMAU1dJVENISU5HX1BST1RPQ09MUwBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUwBNVUxUSVBMRV9DSE9JQ0VTAElOVEVSTkFMX1NFUlZFUl9FUlJPUgBXRUJfU0VSVkVSX1VOS05PV05fRVJST1IAUkFJTEdVTl9FUlJPUgBJREVOVElUWV9QUk9WSURFUl9BVVRIRU5USUNBVElPTl9FUlJPUgBTU0xfQ0VSVElGSUNBVEVfRVJST1IASU5WQUxJRF9YX0ZPUldBUkRFRF9GT1IAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAFNFRV9PVEhFUgBIUEVfQ0JfQ0hVTktfSEVBREVSAE1LQ0FMRU5EQVIAU0VUVVAAV0VCX1NFUlZFUl9JU19ET1dOAFRFQVJET1dOAEhQRV9DTE9TRURfQ09OTkVDVElPTgBIRVVSSVNUSUNfRVhQSVJBVElPTgBESVNDT05ORUNURURfT1BFUkFUSU9OAE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OAEhQRV9JTlZBTElEX1ZFUlNJT04ASFBFX0NCX01FU1NBR0VfQkVHSU4AU0lURV9JU19GUk9aRU4ASFBFX0lOVkFMSURfSEVBREVSX1RPS0VOAElOVkFMSURfVE9LRU4ARk9SQklEREVOAEVOSEFOQ0VfWU9VUl9DQUxNAEhQRV9JTlZBTElEX1VSTABCTE9DS0VEX0JZX1BBUkVOVEFMX0NPTlRST0wATUtDT0wAQUNMAEhQRV9JTlRFUk5BTABSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFX1VOT0ZGSUNJQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAFJFVFJZX1dJVEgASFBFX0lOVkFMSURfQ09OVEVOVF9MRU5HVEgASFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgARkxVU0gAUFJPUFBBVENIAE0tU0VBUkNIAFVSSV9UT09fTE9ORwBQUk9DRVNTSU5HAE1JU0NFTExBTkVPVVNfUEVSU0lTVEVOVF9XQVJOSU5HAE1JU0NFTExBTkVPVVNfV0FSTklORwBIUEVfSU5WQUxJRF9UUkFOU0ZFUl9FTkNPRElORwBFeHBlY3RlZCBDUkxGAEhQRV9JTlZBTElEX0NIVU5LX1NJWkUATU9WRQBDT05USU5VRQBIUEVfQ0JfU1RBVFVTX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJTX0NPTVBMRVRFAEhQRV9DQl9WRVJTSU9OX0NPTVBMRVRFAEhQRV9DQl9VUkxfQ09NUExFVEUASFBFX0NCX0NIVU5LX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfVkFMVUVfQ09NUExFVEUASFBFX0NCX0NIVU5LX0VYVEVOU0lPTl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX05BTUVfQ09NUExFVEUASFBFX0NCX01FU1NBR0VfQ09NUExFVEUASFBFX0NCX01FVEhPRF9DT01QTEVURQBIUEVfQ0JfSEVBREVSX0ZJRUxEX0NPTVBMRVRFAERFTEVURQBIUEVfSU5WQUxJRF9FT0ZfU1RBVEUASU5WQUxJRF9TU0xfQ0VSVElGSUNBVEUAUEFVU0UATk9fUkVTUE9OU0UAVU5TVVBQT1JURURfTUVESUFfVFlQRQBHT05FAE5PVF9BQ0NFUFRBQkxFAFNFUlZJQ0VfVU5BVkFJTEFCTEUAUkFOR0VfTk9UX1NBVElTRklBQkxFAE9SSUdJTl9JU19VTlJFQUNIQUJMRQBSRVNQT05TRV9JU19TVEFMRQBQVVJHRQBNRVJHRQBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFAFJFUVVFU1RfSEVBREVSX1RPT19MQVJHRQBQQVlMT0FEX1RPT19MQVJHRQBJTlNVRkZJQ0lFTlRfU1RPUkFHRQBIUEVfUEFVU0VEX1VQR1JBREUASFBFX1BBVVNFRF9IMl9VUEdSQURFAFNPVVJDRQBBTk5PVU5DRQBUUkFDRQBIUEVfVU5FWFBFQ1RFRF9TUEFDRQBERVNDUklCRQBVTlNVQlNDUklCRQBSRUNPUkQASFBFX0lOVkFMSURfTUVUSE9EAE5PVF9GT1VORABQUk9QRklORABVTkJJTkQAUkVCSU5EAFVOQVVUSE9SSVpFRABNRVRIT0RfTk9UX0FMTE9XRUQASFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQAQUxSRUFEWV9SRVBPUlRFRABBQ0NFUFRFRABOT1RfSU1QTEVNRU5URUQATE9PUF9ERVRFQ1RFRABIUEVfQ1JfRVhQRUNURUQASFBFX0xGX0VYUEVDVEVEAENSRUFURUQASU1fVVNFRABIUEVfUEFVU0VEAFRJTUVPVVRfT0NDVVJFRABQQVlNRU5UX1JFUVVJUkVEAFBSRUNPTkRJVElPTl9SRVFVSVJFRABQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRABORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAExFTkdUSF9SRVFVSVJFRABTU0xfQ0VSVElGSUNBVEVfUkVRVUlSRUQAVVBHUkFERV9SRVFVSVJFRABQQUdFX0VYUElSRUQAUFJFQ09ORElUSU9OX0ZBSUxFRABFWFBFQ1RBVElPTl9GQUlMRUQAUkVWQUxJREFUSU9OX0ZBSUxFRABTU0xfSEFORFNIQUtFX0ZBSUxFRABMT0NLRUQAVFJBTlNGT1JNQVRJT05fQVBQTElFRABOT1RfTU9ESUZJRUQATk9UX0VYVEVOREVEAEJBTkRXSURUSF9MSU1JVF9FWENFRURFRABTSVRFX0lTX09WRVJMT0FERUQASEVBRABFeHBlY3RlZCBIVFRQLwAAXhMAACYTAAAwEAAA8BcAAJ0TAAAVEgAAORcAAPASAAAKEAAAdRIAAK0SAACCEwAATxQAAH8QAACgFQAAIxQAAIkSAACLFAAATRUAANQRAADPFAAAEBgAAMkWAADcFgAAwREAAOAXAAC7FAAAdBQAAHwVAADlFAAACBcAAB8QAABlFQAAoxQAACgVAAACFQAAmRUAACwQAACLGQAATw8AANQOAABqEAAAzhAAAAIXAACJDgAAbhMAABwTAABmFAAAVhcAAMETAADNEwAAbBMAAGgXAABmFwAAXxcAACITAADODwAAaQ4AANgOAABjFgAAyxMAAKoOAAAoFwAAJhcAAMUTAABdFgAA6BEAAGcTAABlEwAA8hYAAHMTAAAdFwAA+RYAAPMRAADPDgAAzhUAAAwSAACzEQAApREAAGEQAAAyFwAAuxMAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIDAgICAgIAAAICAAICAAICAgICAgICAgIABAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAICAgICAAACAgACAgACAgICAgICAgICAAMABAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbG9zZWVlcC1hbGl2ZQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBY2h1bmtlZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEAAAEBAAEBAAEBAQEBAQEBAQEAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlY3Rpb25lbnQtbGVuZ3Rob25yb3h5LWNvbm5lY3Rpb24AAAAAAAAAAAAAAAAAAAByYW5zZmVyLWVuY29kaW5ncGdyYWRlDQoNCg0KU00NCg0KVFRQL0NFL1RTUC8AAAAAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEFAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAMEAAAEBAQEBAQEBAQEBAUEBAQEBAQEBAQEBAQABAAGBwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOT1VOQ0VFQ0tPVVRORUNURVRFQ1JJQkVMVVNIRVRFQURTRUFSQ0hSR0VDVElWSVRZTEVOREFSVkVPVElGWVBUSU9OU0NIU0VBWVNUQVRDSEdFT1JESVJFQ1RPUlRSQ0hQQVJBTUVURVJVUkNFQlNDUklCRUFSRE9XTkFDRUlORE5LQ0tVQlNDUklCRUhUVFAvQURUUC8="), yc;
}
var Rc, Oh;
function jp() {
  return Oh || (Oh = 1, Rc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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IAH9CwMAIABBMGogAf0LAwAgAEEgaiAB/QsDACAAQd0BNgIcQQALewEBfwJAIAAoAgwiAw0AAkAgACgCBEUNACAAIAE2AgQLAkAgACABIAIQxICAgAAiAw0AIAAoAgwPCyAAIAM2AhxBACEDIAAoAgQiAUUNACAAIAEgAiAAKAIIEYGAgIAAACIBRQ0AIAAgAjYCFCAAIAE2AgwgASEDCyADC+TzAQMOfwN+BH8jgICAgABBEGsiAySAgICAACABIQQgASEFIAEhBiABIQcgASEIIAEhCSABIQogASELIAEhDCABIQ0gASEOIAEhDwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIcIhBBf2oO3QHaAQHZAQIDBAUGBwgJCgsMDQ7YAQ8Q1wEREtYBExQVFhcYGRob4AHfARwdHtUBHyAhIiMkJdQBJicoKSorLNMB0gEtLtEB0AEvMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUbbAUdISUrPAc4BS80BTMwBTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBAOxwEAAQID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YWNrIGVycm9yAGBvbl9jaHVua19leHRlbnNpb25fdmFsdWVgIGNhbGxiYWNrIGVycm9yAGBvbl9zdGF0dXNfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl92ZXJzaW9uX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdXJsX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWV0aG9kX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX25hbWVgIGNhbGxiYWNrIGVycm9yAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2VydmVyAEludmFsaWQgaGVhZGVyIHZhbHVlIGNoYXIASW52YWxpZCBoZWFkZXIgZmllbGQgY2hhcgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3ZlcnNpb24ASW52YWxpZCBtaW5vciB2ZXJzaW9uAEludmFsaWQgbWFqb3IgdmVyc2lvbgBFeHBlY3RlZCBzcGFjZSBhZnRlciB2ZXJzaW9uAEV4cGVjdGVkIENSTEYgYWZ0ZXIgdmVyc2lvbgBJbnZhbGlkIEhUVFAgdmVyc2lvbgBJbnZhbGlkIGhlYWRlciB0b2tlbgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3VybABJbnZhbGlkIGNoYXJhY3RlcnMgaW4gdXJsAFVuZXhwZWN0ZWQgc3RhcnQgY2hhciBpbiB1cmwARG91YmxlIEAgaW4gdXJsAEVtcHR5IENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhcmFjdGVyIGluIENvbnRlbnQtTGVuZ3RoAER1cGxpY2F0ZSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXIgaW4gdXJsIHBhdGgAQ29udGVudC1MZW5ndGggY2FuJ3QgYmUgcHJlc2VudCB3aXRoIFRyYW5zZmVyLUVuY29kaW5nAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHNpemUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfdmFsdWUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyB2YWx1ZQBNaXNzaW5nIGV4cGVjdGVkIExGIGFmdGVyIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AgaGVhZGVyIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGUgdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyBxdW90ZWQgdmFsdWUAUGF1c2VkIGJ5IG9uX2hlYWRlcnNfY29tcGxldGUASW52YWxpZCBFT0Ygc3RhdGUAb25fcmVzZXQgcGF1c2UAb25fY2h1bmtfaGVhZGVyIHBhdXNlAG9uX21lc3NhZ2VfYmVnaW4gcGF1c2UAb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlIHBhdXNlAG9uX3N0YXR1c19jb21wbGV0ZSBwYXVzZQBvbl92ZXJzaW9uX2NvbXBsZXRlIHBhdXNlAG9uX3VybF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19jb21wbGV0ZSBwYXVzZQBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGUgcGF1c2UAb25fbWVzc2FnZV9jb21wbGV0ZSBwYXVzZQBvbl9tZXRob2RfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lIHBhdXNlAFVuZXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgc3RhcnQgbGluZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgbmFtZQBQYXVzZSBvbiBDT05ORUNUL1VwZ3JhZGUAUGF1c2Ugb24gUFJJL1VwZ3JhZGUARXhwZWN0ZWQgSFRUUC8yIENvbm5lY3Rpb24gUHJlZmFjZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX21ldGhvZABFeHBlY3RlZCBzcGFjZSBhZnRlciBtZXRob2QAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfZmllbGQAUGF1c2VkAEludmFsaWQgd29yZCBlbmNvdW50ZXJlZABJbnZhbGlkIG1ldGhvZCBlbmNvdW50ZXJlZABVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNjaGVtYQBSZXF1ZXN0IGhhcyBpbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AAU1dJVENIX1BST1hZAFVTRV9QUk9YWQBNS0FDVElWSVRZAFVOUFJPQ0VTU0FCTEVfRU5USVRZAENPUFkATU9WRURfUEVSTUFORU5UTFkAVE9PX0VBUkxZAE5PVElGWQBGQUlMRURfREVQRU5ERU5DWQBCQURfR0FURVdBWQBQTEFZAFBVVABDSEVDS09VVABHQVRFV0FZX1RJTUVPVVQAUkVRVUVTVF9USU1FT1VUAE5FVFdPUktfQ09OTkVDVF9USU1FT1VUAENPTk5FQ1RJT05fVElNRU9VVABMT0dJTl9USU1FT1VUAE5FVFdPUktfUkVBRF9USU1FT1VUAFBPU1QATUlTRElSRUNURURfUkVRVUVTVABDTElFTlRfQ0xPU0VEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9MT0FEX0JBTEFOQ0VEX1JFUVVFU1QAQkFEX1JFUVVFU1QASFRUUF9SRVFVRVNUX1NFTlRfVE9fSFRUUFNfUE9SVABSRVBPUlQASU1fQV9URUFQT1QAUkVTRVRfQ09OVEVOVABOT19DT05URU5UAFBBUlRJQUxfQ09OVEVOVABIUEVfSU5WQUxJRF9DT05TVEFOVABIUEVfQ0JfUkVTRVQAR0VUAEhQRV9TVFJJQ1QAQ09ORkxJQ1QAVEVNUE9SQVJZX1JFRElSRUNUAFBFUk1BTkVOVF9SRURJUkVDVABDT05ORUNUAE1VTFRJX1NUQVRVUwBIUEVfSU5WQUxJRF9TVEFUVVMAVE9PX01BTllfUkVRVUVTVFMARUFSTFlfSElOVFMAVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlMAT1BUSU9OUwBTV0lUQ0hJTkdfUFJPVE9DT0xTAFZBUklBTlRfQUxTT19ORUdPVElBVEVTAE1VTFRJUExFX0NIT0lDRVMASU5URVJOQUxfU0VSVkVSX0VSUk9SAFdFQl9TRVJWRVJfVU5LTk9XTl9FUlJPUgBSQUlMR1VOX0VSUk9SAElERU5USVRZX1BST1ZJREVSX0FVVEhFTlRJQ0FUSU9OX0VSUk9SAFNTTF9DRVJUSUZJQ0FURV9FUlJPUgBJTlZBTElEX1hfRk9SV0FSREVEX0ZPUgBTRVRfUEFSQU1FVEVSAEdFVF9QQVJBTUVURVIASFBFX1VTRVIAU0VFX09USEVSAEhQRV9DQl9DSFVOS19IRUFERVIATUtDQUxFTkRBUgBTRVRVUABXRUJfU0VSVkVSX0lTX0RPV04AVEVBUkRPV04ASFBFX0NMT1NFRF9DT05ORUNUSU9OAEhFVVJJU1RJQ19FWFBJUkFUSU9OAERJU0NPTk5FQ1RFRF9PUEVSQVRJT04ATk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04ASFBFX0lOVkFMSURfVkVSU0lPTgBIUEVfQ0JfTUVTU0FHRV9CRUdJTgBTSVRFX0lTX0ZST1pFTgBIUEVfSU5WQUxJRF9IRUFERVJfVE9LRU4ASU5WQUxJRF9UT0tFTgBGT1JCSURERU4ARU5IQU5DRV9ZT1VSX0NBTE0ASFBFX0lOVkFMSURfVVJMAEJMT0NLRURfQllfUEFSRU5UQUxfQ09OVFJPTABNS0NPTABBQ0wASFBFX0lOVEVSTkFMAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0VfVU5PRkZJQ0lBTABIUEVfT0sAVU5MSU5LAFVOTE9DSwBQUkkAUkVUUllfV0lUSABIUEVfSU5WQUxJRF9DT05URU5UX0xFTkdUSABIUEVfVU5FWFBFQ1RFRF9DT05URU5UX0xFTkdUSABGTFVTSABQUk9QUEFUQ0gATS1TRUFSQ0gAVVJJX1RPT19MT05HAFBST0NFU1NJTkcATUlTQ0VMTEFORU9VU19QRVJTSVNURU5UX1dBUk5JTkcATUlTQ0VMTEFORU9VU19XQVJOSU5HAEhQRV9JTlZBTElEX1RSQU5TRkVSX0VOQ09ESU5HAEV4cGVjdGVkIENSTEYASFBFX0lOVkFMSURfQ0hVTktfU0laRQBNT1ZFAENPTlRJTlVFAEhQRV9DQl9TVEFUVVNfQ09NUExFVEUASFBFX0NCX0hFQURFUlNfQ09NUExFVEUASFBFX0NCX1ZFUlNJT05fQ09NUExFVEUASFBFX0NCX1VSTF9DT01QTEVURQBIUEVfQ0JfQ0hVTktfQ09NUExFVEUASFBFX0NCX0hFQURFUl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX1ZBTFVFX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19FWFRFTlNJT05fTkFNRV9DT01QTEVURQBIUEVfQ0JfTUVTU0FHRV9DT01QTEVURQBIUEVfQ0JfTUVUSE9EX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfRklFTERfQ09NUExFVEUAREVMRVRFAEhQRV9JTlZBTElEX0VPRl9TVEFURQBJTlZBTElEX1NTTF9DRVJUSUZJQ0FURQBQQVVTRQBOT19SRVNQT05TRQBVTlNVUFBPUlRFRF9NRURJQV9UWVBFAEdPTkUATk9UX0FDQ0VQVEFCTEUAU0VSVklDRV9VTkFWQUlMQUJMRQBSQU5HRV9OT1RfU0FUSVNGSUFCTEUAT1JJR0lOX0lTX1VOUkVBQ0hBQkxFAFJFU1BPTlNFX0lTX1NUQUxFAFBVUkdFAE1FUkdFAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UAUkVRVUVTVF9IRUFERVJfVE9PX0xBUkdFAFBBWUxPQURfVE9PX0xBUkdFAElOU1VGRklDSUVOVF9TVE9SQUdFAEhQRV9QQVVTRURfVVBHUkFERQBIUEVfUEFVU0VEX0gyX1VQR1JBREUAU09VUkNFAEFOTk9VTkNFAFRSQUNFAEhQRV9VTkVYUEVDVEVEX1NQQUNFAERFU0NSSUJFAFVOU1VCU0NSSUJFAFJFQ09SRABIUEVfSU5WQUxJRF9NRVRIT0QATk9UX0ZPVU5EAFBST1BGSU5EAFVOQklORABSRUJJTkQAVU5BVVRIT1JJWkVEAE1FVEhPRF9OT1RfQUxMT1dFRABIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRABBTFJFQURZX1JFUE9SVEVEAEFDQ0VQVEVEAE5PVF9JTVBMRU1FTlRFRABMT09QX0RFVEVDVEVEAEhQRV9DUl9FWFBFQ1RFRABIUEVfTEZfRVhQRUNURUQAQ1JFQVRFRABJTV9VU0VEAEhQRV9QQVVTRUQAVElNRU9VVF9PQ0NVUkVEAFBBWU1FTlRfUkVRVUlSRUQAUFJFQ09ORElUSU9OX1JFUVVJUkVEAFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQATEVOR1RIX1JFUVVJUkVEAFNTTF9DRVJUSUZJQ0FURV9SRVFVSVJFRABVUEdSQURFX1JFUVVJUkVEAFBBR0VfRVhQSVJFRABQUkVDT05ESVRJT05fRkFJTEVEAEVYUEVDVEFUSU9OX0ZBSUxFRABSRVZBTElEQVRJT05fRkFJTEVEAFNTTF9IQU5EU0hBS0VfRkFJTEVEAExPQ0tFRABUUkFOU0ZPUk1BVElPTl9BUFBMSUVEAE5PVF9NT0RJRklFRABOT1RfRVhURU5ERUQAQkFORFdJRFRIX0xJTUlUX0VYQ0VFREVEAFNJVEVfSVNfT1ZFUkxPQURFRABIRUFEAEV4cGVjdGVkIEhUVFAvAABeEwAAJhMAADAQAADwFwAAnRMAABUSAAA5FwAA8BIAAAoQAAB1EgAArRIAAIITAABPFAAAfxAAAKAVAAAjFAAAiRIAAIsUAABNFQAA1BEAAM8UAAAQGAAAyRYAANwWAADBEQAA4BcAALsUAAB0FAAAfBUAAOUUAAAIFwAAHxAAAGUVAACjFAAAKBUAAAIVAACZFQAALBAAAIsZAABPDwAA1A4AAGoQAADOEAAAAhcAAIkOAABuEwAAHBMAAGYUAABWFwAAwRMAAM0TAABsEwAAaBcAAGYXAABfFwAAIhMAAM4PAABpDgAA2A4AAGMWAADLEwAAqg4AACgXAAAmFwAAxRMAAF0WAADoEQAAZxMAAGUTAADyFgAAcxMAAB0XAAD5FgAA8xEAAM8OAADOFQAADBIAALMRAAClEQAAYRAAADIXAAC7EwAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgMCAgICAgAAAgIAAgIAAgICAgICAgICAgAEAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgICAgIAAAICAAICAAICAgICAgICAgIAAwAEAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsb3NlZWVwLWFsaXZlAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQFjaHVua2VkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQAAAQEAAQEAAQEBAQEBAQEBAQAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGVjdGlvbmVudC1sZW5ndGhvbnJveHktY29ubmVjdGlvbgAAAAAAAAAAAAAAAAAAAHJhbnNmZXItZW5jb2RpbmdwZ3JhZGUNCg0KDQpTTQ0KDQpUVFAvQ0UvVFNQLwAAAAAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAwQAAAQEBAQEBAQEBAQEBQQEBAQEBAQEBAQEBAAEAAYHBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAgAAAAACAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5PVU5DRUVDS09VVE5FQ1RFVEVDUklCRUxVU0hFVEVBRFNFQVJDSFJHRUNUSVZJVFlMRU5EQVJWRU9USUZZUFRJT05TQ0hTRUFZU1RBVENIR0VPUkRJUkVDVE9SVFJDSFBBUkFNRVRFUlVSQ0VCU0NSSUJFQVJET1dOQUNFSU5ETktDS1VCU0NSSUJFSFRUUC9BRFRQLw=="), Rc;
}
const te = eA, bC = hl, Zp = En, { pipeline: zp } = _t, ie = fe, Dc = gp, Yg = yp, Xp = da, {
  RequestContentLengthMismatchError: or,
  ResponseContentLengthMismatchError: $p,
  InvalidArgumentError: qe,
  RequestAbortedError: Sl,
  HeadersTimeoutError: Kp,
  HeadersOverflowError: ew,
  SocketError: cn,
  InformationalError: Mt,
  BodyTimeoutError: Aw,
  HTTPParserError: tw,
  ResponseExceededMaxSizeError: rw,
  ClientDestroyedError: sw
} = Te, nw = fa, {
  kUrl: fA,
  kReset: _A,
  kServerName: yr,
  kClient: Gt,
  kBusy: Jg,
  kParser: Pe,
  kConnect: iw,
  kBlocking: gn,
  kResuming: As,
  kRunning: Ye,
  kPending: Is,
  kSize: Qs,
  kWriting: ar,
  kQueue: Ne,
  kConnected: ow,
  kConnecting: Ms,
  kNeedDrain: Lr,
  kNoRef: Hn,
  kKeepAliveDefaultTimeout: _g,
  kHostHeader: kC,
  kPendingIdx: et,
  kRunningIdx: Ue,
  kError: pA,
  kPipelining: Mr,
  kSocket: Ve,
  kKeepAliveTimeoutValue: ei,
  kMaxHeadersSize: Uo,
  kKeepAliveMaxTimeout: SC,
  kKeepAliveTimeoutThreshold: FC,
  kHeadersTimeout: NC,
  kBodyTimeout: UC,
  kStrictContentLength: Ai,
  kConnector: Pn,
  kMaxRedirections: aw,
  kMaxRequests: ti,
  kCounter: TC,
  kClose: cw,
  kDestroy: gw,
  kDispatch: lw,
  kInterceptors: hw,
  kLocalAddress: Vn,
  kMaxResponseSize: vC,
  kHTTPConnVersion: Yt,
  // HTTP2
  kHost: LC,
  kHTTP2Session: At,
  kHTTP2SessionState: Zo,
  kHTTP2BuildRequest: Ew,
  kHTTP2CopyHeaders: uw,
  kHTTP1BuildRequest: Qw
} = Je;
let zo;
try {
  zo = require("http2");
} catch {
  zo = { constants: {} };
}
const {
  constants: {
    HTTP2_HEADER_AUTHORITY: Cw,
    HTTP2_HEADER_METHOD: Bw,
    HTTP2_HEADER_PATH: Iw,
    HTTP2_HEADER_SCHEME: dw,
    HTTP2_HEADER_CONTENT_LENGTH: fw,
    HTTP2_HEADER_EXPECT: pw,
    HTTP2_HEADER_STATUS: ww
  }
} = zo;
let Hh = !1;
const eo = Buffer[Symbol.species], Rr = Symbol("kClosedResolve"), FA = {};
try {
  const t = require("diagnostics_channel");
  FA.sendHeaders = t.channel("undici:client:sendHeaders"), FA.beforeConnect = t.channel("undici:client:beforeConnect"), FA.connectError = t.channel("undici:client:connectError"), FA.connected = t.channel("undici:client:connected");
} catch {
  FA.sendHeaders = { hasSubscribers: !1 }, FA.beforeConnect = { hasSubscribers: !1 }, FA.connectError = { hasSubscribers: !1 }, FA.connected = { hasSubscribers: !1 };
}
let mw = class extends Xp {
  /**
   *
   * @param {string|URL} url
   * @param {import('../types/client').Client.Options} options
   */
  constructor(e, {
    interceptors: A,
    maxHeaderSize: r,
    headersTimeout: s,
    socketTimeout: n,
    requestTimeout: i,
    connectTimeout: a,
    bodyTimeout: o,
    idleTimeout: c,
    keepAlive: g,
    keepAliveTimeout: h,
    maxKeepAliveTimeout: E,
    keepAliveMaxTimeout: Q,
    keepAliveTimeoutThreshold: C,
    socketPath: u,
    pipelining: B,
    tls: I,
    strictContentLength: d,
    maxCachedSessions: w,
    maxRedirections: m,
    connect: p,
    maxRequestsPerClient: R,
    localAddress: D,
    maxResponseSize: S,
    autoSelectFamily: v,
    autoSelectFamilyAttemptTimeout: T,
    // h2
    allowH2: X,
    maxConcurrentStreams: K
  } = {}) {
    if (super(), g !== void 0)
      throw new qe("unsupported keepAlive, use pipelining=0 instead");
    if (n !== void 0)
      throw new qe("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
    if (i !== void 0)
      throw new qe("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
    if (c !== void 0)
      throw new qe("unsupported idleTimeout, use keepAliveTimeout instead");
    if (E !== void 0)
      throw new qe("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
    if (r != null && !Number.isFinite(r))
      throw new qe("invalid maxHeaderSize");
    if (u != null && typeof u != "string")
      throw new qe("invalid socketPath");
    if (a != null && (!Number.isFinite(a) || a < 0))
      throw new qe("invalid connectTimeout");
    if (h != null && (!Number.isFinite(h) || h <= 0))
      throw new qe("invalid keepAliveTimeout");
    if (Q != null && (!Number.isFinite(Q) || Q <= 0))
      throw new qe("invalid keepAliveMaxTimeout");
    if (C != null && !Number.isFinite(C))
      throw new qe("invalid keepAliveTimeoutThreshold");
    if (s != null && (!Number.isInteger(s) || s < 0))
      throw new qe("headersTimeout must be a positive integer or zero");
    if (o != null && (!Number.isInteger(o) || o < 0))
      throw new qe("bodyTimeout must be a positive integer or zero");
    if (p != null && typeof p != "function" && typeof p != "object")
      throw new qe("connect must be a function or an object");
    if (m != null && (!Number.isInteger(m) || m < 0))
      throw new qe("maxRedirections must be a positive number");
    if (R != null && (!Number.isInteger(R) || R < 0))
      throw new qe("maxRequestsPerClient must be a positive number");
    if (D != null && (typeof D != "string" || bC.isIP(D) === 0))
      throw new qe("localAddress must be valid string IP address");
    if (S != null && (!Number.isInteger(S) || S < -1))
      throw new qe("maxResponseSize must be a positive number");
    if (T != null && (!Number.isInteger(T) || T < -1))
      throw new qe("autoSelectFamilyAttemptTimeout must be a positive number");
    if (X != null && typeof X != "boolean")
      throw new qe("allowH2 must be a valid boolean value");
    if (K != null && (typeof K != "number" || K < 1))
      throw new qe("maxConcurrentStreams must be a possitive integer, greater than 0");
    typeof p != "function" && (p = nw({
      ...I,
      maxCachedSessions: w,
      allowH2: X,
      socketPath: u,
      timeout: a,
      ...ie.nodeHasAutoSelectFamily && v ? { autoSelectFamily: v, autoSelectFamilyAttemptTimeout: T } : void 0,
      ...p
    })), this[hw] = A && A.Client && Array.isArray(A.Client) ? A.Client : [kw({ maxRedirections: m })], this[fA] = ie.parseOrigin(e), this[Pn] = p, this[Ve] = null, this[Mr] = B ?? 1, this[Uo] = r || Zp.maxHeaderSize, this[_g] = h ?? 4e3, this[SC] = Q ?? 6e5, this[FC] = C ?? 1e3, this[ei] = this[_g], this[yr] = null, this[Vn] = D ?? null, this[As] = 0, this[Lr] = 0, this[kC] = `host: ${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}\r
`, this[UC] = o ?? 3e5, this[NC] = s ?? 3e5, this[Ai] = d ?? !0, this[aw] = m, this[ti] = R, this[Rr] = null, this[vC] = S > -1 ? S : -1, this[Yt] = "h1", this[At] = null, this[Zo] = X ? {
      // streams: null, // Fixed queue of streams - For future support of `push`
      openStreams: 0,
      // Keep track of them to decide wether or not unref the session
      maxConcurrentStreams: K ?? 100
      // Max peerConcurrentStreams for a Node h2 server
    } : null, this[LC] = `${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}`, this[Ne] = [], this[Ue] = 0, this[et] = 0;
  }
  get pipelining() {
    return this[Mr];
  }
  set pipelining(e) {
    this[Mr] = e, tt(this, !0);
  }
  get [Is]() {
    return this[Ne].length - this[et];
  }
  get [Ye]() {
    return this[et] - this[Ue];
  }
  get [Qs]() {
    return this[Ne].length - this[Ue];
  }
  get [ow]() {
    return !!this[Ve] && !this[Ms] && !this[Ve].destroyed;
  }
  get [Jg]() {
    const e = this[Ve];
    return e && (e[_A] || e[ar] || e[gn]) || this[Qs] >= (this[Mr] || 1) || this[Is] > 0;
  }
  /* istanbul ignore: only used for test */
  [iw](e) {
    JC(this), this.once("connect", e);
  }
  [lw](e, A) {
    const r = e.origin || this[fA].origin, s = this[Yt] === "h2" ? Yg[Ew](r, e, A) : Yg[Qw](r, e, A);
    return this[Ne].push(s), this[As] || (ie.bodyLength(s.body) == null && ie.isIterable(s.body) ? (this[As] = 1, process.nextTick(tt, this)) : tt(this, !0)), this[As] && this[Lr] !== 2 && this[Jg] && (this[Lr] = 2), this[Lr] < 2;
  }
  async [cw]() {
    return new Promise((e) => {
      this[Qs] ? this[Rr] = e : e(null);
    });
  }
  async [gw](e) {
    return new Promise((A) => {
      const r = this[Ne].splice(this[et]);
      for (let n = 0; n < r.length; n++) {
        const i = r[n];
        NA(this, i, e);
      }
      const s = () => {
        this[Rr] && (this[Rr](), this[Rr] = null), A();
      };
      this[At] != null && (ie.destroy(this[At], e), this[At] = null, this[Zo] = null), this[Ve] ? ie.destroy(this[Ve].on("close", s), e) : queueMicrotask(s), tt(this);
    });
  }
};
function yw(t) {
  te(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[Ve][pA] = t, pa(this[Gt], t);
}
function Rw(t, e, A) {
  const r = new Mt(`HTTP/2: "frameError" received - type ${t}, code ${e}`);
  A === 0 && (this[Ve][pA] = r, pa(this[Gt], r));
}
function Dw() {
  ie.destroy(this, new cn("other side closed")), ie.destroy(this[Ve], new cn("other side closed"));
}
function bw(t) {
  const e = this[Gt], A = new Mt(`HTTP/2: "GOAWAY" frame received with code ${t}`);
  if (e[Ve] = null, e[At] = null, e.destroyed) {
    te(this[Is] === 0);
    const r = e[Ne].splice(e[Ue]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      NA(this, n, A);
    }
  } else if (e[Ye] > 0) {
    const r = e[Ne][e[Ue]];
    e[Ne][e[Ue]++] = null, NA(e, r, A);
  }
  e[et] = e[Ue], te(e[Ye] === 0), e.emit(
    "disconnect",
    e[fA],
    [e],
    A
  ), tt(e);
}
const Dt = Jp(), kw = kl, Sw = Buffer.alloc(0);
async function Fw() {
  const t = process.env.JEST_WORKER_ID ? _h() : void 0;
  let e;
  try {
    e = await WebAssembly.compile(Buffer.from(jp(), "base64"));
  } catch {
    e = await WebAssembly.compile(Buffer.from(t || _h(), "base64"));
  }
  return await WebAssembly.instantiate(e, {
    env: {
      /* eslint-disable camelcase */
      wasm_on_url: (A, r, s) => 0,
      wasm_on_status: (A, r, s) => {
        te.strictEqual(oA.ptr, A);
        const n = r - Lt + St.byteOffset;
        return oA.onStatus(new eo(St.buffer, n, s)) || 0;
      },
      wasm_on_message_begin: (A) => (te.strictEqual(oA.ptr, A), oA.onMessageBegin() || 0),
      wasm_on_header_field: (A, r, s) => {
        te.strictEqual(oA.ptr, A);
        const n = r - Lt + St.byteOffset;
        return oA.onHeaderField(new eo(St.buffer, n, s)) || 0;
      },
      wasm_on_header_value: (A, r, s) => {
        te.strictEqual(oA.ptr, A);
        const n = r - Lt + St.byteOffset;
        return oA.onHeaderValue(new eo(St.buffer, n, s)) || 0;
      },
      wasm_on_headers_complete: (A, r, s, n) => (te.strictEqual(oA.ptr, A), oA.onHeadersComplete(r, !!s, !!n) || 0),
      wasm_on_body: (A, r, s) => {
        te.strictEqual(oA.ptr, A);
        const n = r - Lt + St.byteOffset;
        return oA.onBody(new eo(St.buffer, n, s)) || 0;
      },
      wasm_on_message_complete: (A) => (te.strictEqual(oA.ptr, A), oA.onMessageComplete() || 0)
      /* eslint-enable camelcase */
    }
  });
}
let bc = null, Og = Fw();
Og.catch();
let oA = null, St = null, Ao = 0, Lt = null;
const ln = 1, To = 2, Hg = 3;
class Nw {
  constructor(e, A, { exports: r }) {
    te(Number.isFinite(e[Uo]) && e[Uo] > 0), this.llhttp = r, this.ptr = this.llhttp.llhttp_alloc(Dt.TYPE.RESPONSE), this.client = e, this.socket = A, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[Uo], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[vC];
  }
  setTimeout(e, A) {
    this.timeoutType = A, e !== this.timeoutValue ? (Dc.clearTimeout(this.timeout), e ? (this.timeout = Dc.setTimeout(Uw, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
  }
  resume() {
    this.socket.destroyed || !this.paused || (te(this.ptr != null), te(oA == null), this.llhttp.llhttp_resume(this.ptr), te(this.timeoutType === To), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Sw), this.readMore());
  }
  readMore() {
    for (; !this.paused && this.ptr; ) {
      const e = this.socket.read();
      if (e === null)
        break;
      this.execute(e);
    }
  }
  execute(e) {
    te(this.ptr != null), te(oA == null), te(!this.paused);
    const { socket: A, llhttp: r } = this;
    e.length > Ao && (Lt && r.free(Lt), Ao = Math.ceil(e.length / 4096) * 4096, Lt = r.malloc(Ao)), new Uint8Array(r.memory.buffer, Lt, Ao).set(e);
    try {
      let s;
      try {
        St = e, oA = this, s = r.llhttp_execute(this.ptr, Lt, e.length);
      } catch (i) {
        throw i;
      } finally {
        oA = null, St = null;
      }
      const n = r.llhttp_get_error_pos(this.ptr) - Lt;
      if (s === Dt.ERROR.PAUSED_UPGRADE)
        this.onUpgrade(e.slice(n));
      else if (s === Dt.ERROR.PAUSED)
        this.paused = !0, A.unshift(e.slice(n));
      else if (s !== Dt.ERROR.OK) {
        const i = r.llhttp_get_error_reason(this.ptr);
        let a = "";
        if (i) {
          const o = new Uint8Array(r.memory.buffer, i).indexOf(0);
          a = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r.memory.buffer, i, o).toString() + ")";
        }
        throw new tw(a, Dt.ERROR[s], e.slice(n));
      }
    } catch (s) {
      ie.destroy(A, s);
    }
  }
  destroy() {
    te(this.ptr != null), te(oA == null), this.llhttp.llhttp_free(this.ptr), this.ptr = null, Dc.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
  }
  onStatus(e) {
    this.statusText = e.toString();
  }
  onMessageBegin() {
    const { socket: e, client: A } = this;
    if (e.destroyed || !A[Ne][A[Ue]])
      return -1;
  }
  onHeaderField(e) {
    const A = this.headers.length;
    A & 1 ? this.headers[A - 1] = Buffer.concat([this.headers[A - 1], e]) : this.headers.push(e), this.trackHeader(e.length);
  }
  onHeaderValue(e) {
    let A = this.headers.length;
    (A & 1) === 1 ? (this.headers.push(e), A += 1) : this.headers[A - 1] = Buffer.concat([this.headers[A - 1], e]);
    const r = this.headers[A - 2];
    r.length === 10 && r.toString().toLowerCase() === "keep-alive" ? this.keepAlive += e.toString() : r.length === 10 && r.toString().toLowerCase() === "connection" ? this.connection += e.toString() : r.length === 14 && r.toString().toLowerCase() === "content-length" && (this.contentLength += e.toString()), this.trackHeader(e.length);
  }
  trackHeader(e) {
    this.headersSize += e, this.headersSize >= this.headersMaxSize && ie.destroy(this.socket, new ew());
  }
  onUpgrade(e) {
    const { upgrade: A, client: r, socket: s, headers: n, statusCode: i } = this;
    te(A);
    const a = r[Ne][r[Ue]];
    te(a), te(!s.destroyed), te(s === r[Ve]), te(!this.paused), te(a.upgrade || a.method === "CONNECT"), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, te(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[Pe].destroy(), s[Pe] = null, s[Gt] = null, s[pA] = null, s.removeListener("error", GC).removeListener("readable", MC).removeListener("end", YC).removeListener("close", Pg), r[Ve] = null, r[Ne][r[Ue]++] = null, r.emit("disconnect", r[fA], [r], new Mt("upgrade"));
    try {
      a.onUpgrade(i, n, s);
    } catch (o) {
      ie.destroy(s, o);
    }
    tt(r);
  }
  onHeadersComplete(e, A, r) {
    const { client: s, socket: n, headers: i, statusText: a } = this;
    if (n.destroyed)
      return -1;
    const o = s[Ne][s[Ue]];
    if (!o)
      return -1;
    if (te(!this.upgrade), te(this.statusCode < 200), e === 100)
      return ie.destroy(n, new cn("bad response", ie.getSocketInfo(n))), -1;
    if (A && !o.upgrade)
      return ie.destroy(n, new cn("bad upgrade", ie.getSocketInfo(n))), -1;
    if (te.strictEqual(this.timeoutType, ln), this.statusCode = e, this.shouldKeepAlive = r || // Override llhttp value which does not allow keepAlive for HEAD.
    o.method === "HEAD" && !n[_A] && this.connection.toLowerCase() === "keep-alive", this.statusCode >= 200) {
      const g = o.bodyTimeout != null ? o.bodyTimeout : s[UC];
      this.setTimeout(g, To);
    } else
      this.timeout && this.timeout.refresh && this.timeout.refresh();
    if (o.method === "CONNECT")
      return te(s[Ye] === 1), this.upgrade = !0, 2;
    if (A)
      return te(s[Ye] === 1), this.upgrade = !0, 2;
    if (te(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[Mr]) {
      const g = this.keepAlive ? ie.parseKeepAliveTimeout(this.keepAlive) : null;
      if (g != null) {
        const h = Math.min(
          g - s[FC],
          s[SC]
        );
        h <= 0 ? n[_A] = !0 : s[ei] = h;
      } else
        s[ei] = s[_g];
    } else
      n[_A] = !0;
    let c;
    try {
      c = o.onHeaders(e, i, this.resume, a) === !1;
    } catch (g) {
      return ie.destroy(n, g), -1;
    }
    return o.method === "HEAD" || e < 200 ? 1 : (n[gn] && (n[gn] = !1, tt(s)), c ? Dt.ERROR.PAUSED : 0);
  }
  onBody(e) {
    const { client: A, socket: r, statusCode: s, maxResponseSize: n } = this;
    if (r.destroyed)
      return -1;
    const i = A[Ne][A[Ue]];
    if (te(i), te.strictEqual(this.timeoutType, To), this.timeout && this.timeout.refresh && this.timeout.refresh(), te(s >= 200), n > -1 && this.bytesRead + e.length > n)
      return ie.destroy(r, new rw()), -1;
    this.bytesRead += e.length;
    try {
      if (i.onData(e) === !1)
        return Dt.ERROR.PAUSED;
    } catch (a) {
      return ie.destroy(r, a), -1;
    }
  }
  onMessageComplete() {
    const { client: e, socket: A, statusCode: r, upgrade: s, headers: n, contentLength: i, bytesRead: a, shouldKeepAlive: o } = this;
    if (A.destroyed && (!r || o))
      return -1;
    if (s)
      return;
    const c = e[Ne][e[Ue]];
    if (te(c), te(r >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", te(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, !(r < 200)) {
      if (c.method !== "HEAD" && i && a !== parseInt(i, 10))
        return ie.destroy(A, new $p()), -1;
      try {
        c.onComplete(n);
      } catch (g) {
        NA(e, c, g);
      }
      if (e[Ne][e[Ue]++] = null, A[ar])
        return te.strictEqual(e[Ye], 0), ie.destroy(A, new Mt("reset")), Dt.ERROR.PAUSED;
      if (o) {
        if (A[_A] && e[Ye] === 0)
          return ie.destroy(A, new Mt("reset")), Dt.ERROR.PAUSED;
        e[Mr] === 1 ? setImmediate(tt, e) : tt(e);
      } else
        return ie.destroy(A, new Mt("reset")), Dt.ERROR.PAUSED;
    }
  }
}
function Uw(t) {
  const { socket: e, timeoutType: A, client: r } = t;
  A === ln ? (!e[ar] || e.writableNeedDrain || r[Ye] > 1) && (te(!t.paused, "cannot be paused while waiting for headers"), ie.destroy(e, new Kp())) : A === To ? t.paused || ie.destroy(e, new Aw()) : A === Hg && (te(r[Ye] === 0 && r[ei]), ie.destroy(e, new Mt("socket idle timeout")));
}
function MC() {
  const { [Pe]: t } = this;
  t && t.readMore();
}
function GC(t) {
  const { [Gt]: e, [Pe]: A } = this;
  if (te(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), e[Yt] !== "h2" && t.code === "ECONNRESET" && A.statusCode && !A.shouldKeepAlive) {
    A.onMessageComplete();
    return;
  }
  this[pA] = t, pa(this[Gt], t);
}
function pa(t, e) {
  if (t[Ye] === 0 && e.code !== "UND_ERR_INFO" && e.code !== "UND_ERR_SOCKET") {
    te(t[et] === t[Ue]);
    const A = t[Ne].splice(t[Ue]);
    for (let r = 0; r < A.length; r++) {
      const s = A[r];
      NA(t, s, e);
    }
    te(t[Qs] === 0);
  }
}
function YC() {
  const { [Pe]: t, [Gt]: e } = this;
  if (e[Yt] !== "h2" && t.statusCode && !t.shouldKeepAlive) {
    t.onMessageComplete();
    return;
  }
  ie.destroy(this, new cn("other side closed", ie.getSocketInfo(this)));
}
function Pg() {
  const { [Gt]: t, [Pe]: e } = this;
  t[Yt] === "h1" && e && (!this[pA] && e.statusCode && !e.shouldKeepAlive && e.onMessageComplete(), this[Pe].destroy(), this[Pe] = null);
  const A = this[pA] || new cn("closed", ie.getSocketInfo(this));
  if (t[Ve] = null, t.destroyed) {
    te(t[Is] === 0);
    const r = t[Ne].splice(t[Ue]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      NA(t, n, A);
    }
  } else if (t[Ye] > 0 && A.code !== "UND_ERR_INFO") {
    const r = t[Ne][t[Ue]];
    t[Ne][t[Ue]++] = null, NA(t, r, A);
  }
  t[et] = t[Ue], te(t[Ye] === 0), t.emit("disconnect", t[fA], [t], A), tt(t);
}
async function JC(t) {
  te(!t[Ms]), te(!t[Ve]);
  let { host: e, hostname: A, protocol: r, port: s } = t[fA];
  if (A[0] === "[") {
    const n = A.indexOf("]");
    te(n !== -1);
    const i = A.substr(1, n - 1);
    te(bC.isIP(i)), A = i;
  }
  t[Ms] = !0, FA.beforeConnect.hasSubscribers && FA.beforeConnect.publish({
    connectParams: {
      host: e,
      hostname: A,
      protocol: r,
      port: s,
      servername: t[yr],
      localAddress: t[Vn]
    },
    connector: t[Pn]
  });
  try {
    const n = await new Promise((a, o) => {
      t[Pn]({
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Vn]
      }, (c, g) => {
        c ? o(c) : a(g);
      });
    });
    if (t.destroyed) {
      ie.destroy(n.on("error", () => {
      }), new sw());
      return;
    }
    if (t[Ms] = !1, te(n), n.alpnProtocol === "h2") {
      Hh || (Hh = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
        code: "UNDICI-H2"
      }));
      const a = zo.connect(t[fA], {
        createConnection: () => n,
        peerMaxConcurrentStreams: t[Zo].maxConcurrentStreams
      });
      t[Yt] = "h2", a[Gt] = t, a[Ve] = n, a.on("error", yw), a.on("frameError", Rw), a.on("end", Dw), a.on("goaway", bw), a.on("close", Pg), a.unref(), t[At] = a, n[At] = a;
    } else
      bc || (bc = await Og, Og = null), n[Hn] = !1, n[ar] = !1, n[_A] = !1, n[gn] = !1, n[Pe] = new Nw(t, n, bc);
    n[TC] = 0, n[ti] = t[ti], n[Gt] = t, n[pA] = null, n.on("error", GC).on("readable", MC).on("end", YC).on("close", Pg), t[Ve] = n, FA.connected.hasSubscribers && FA.connected.publish({
      connectParams: {
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Vn]
      },
      connector: t[Pn],
      socket: n
    }), t.emit("connect", t[fA], [t]);
  } catch (n) {
    if (t.destroyed)
      return;
    if (t[Ms] = !1, FA.connectError.hasSubscribers && FA.connectError.publish({
      connectParams: {
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Vn]
      },
      connector: t[Pn],
      error: n
    }), n.code === "ERR_TLS_CERT_ALTNAME_INVALID")
      for (te(t[Ye] === 0); t[Is] > 0 && t[Ne][t[et]].servername === t[yr]; ) {
        const i = t[Ne][t[et]++];
        NA(t, i, n);
      }
    else
      pa(t, n);
    t.emit("connectionError", t[fA], [t], n);
  }
  tt(t);
}
function Ph(t) {
  t[Lr] = 0, t.emit("drain", t[fA], [t]);
}
function tt(t, e) {
  t[As] !== 2 && (t[As] = 2, Tw(t, e), t[As] = 0, t[Ue] > 256 && (t[Ne].splice(0, t[Ue]), t[et] -= t[Ue], t[Ue] = 0));
}
function Tw(t, e) {
  for (; ; ) {
    if (t.destroyed) {
      te(t[Is] === 0);
      return;
    }
    if (t[Rr] && !t[Qs]) {
      t[Rr](), t[Rr] = null;
      return;
    }
    const A = t[Ve];
    if (A && !A.destroyed && A.alpnProtocol !== "h2") {
      if (t[Qs] === 0 ? !A[Hn] && A.unref && (A.unref(), A[Hn] = !0) : A[Hn] && A.ref && (A.ref(), A[Hn] = !1), t[Qs] === 0)
        A[Pe].timeoutType !== Hg && A[Pe].setTimeout(t[ei], Hg);
      else if (t[Ye] > 0 && A[Pe].statusCode < 200 && A[Pe].timeoutType !== ln) {
        const s = t[Ne][t[Ue]], n = s.headersTimeout != null ? s.headersTimeout : t[NC];
        A[Pe].setTimeout(n, ln);
      }
    }
    if (t[Jg])
      t[Lr] = 2;
    else if (t[Lr] === 2) {
      e ? (t[Lr] = 1, process.nextTick(Ph, t)) : Ph(t);
      continue;
    }
    if (t[Is] === 0 || t[Ye] >= (t[Mr] || 1))
      return;
    const r = t[Ne][t[et]];
    if (t[fA].protocol === "https:" && t[yr] !== r.servername) {
      if (t[Ye] > 0)
        return;
      if (t[yr] = r.servername, A && A.servername !== r.servername) {
        ie.destroy(A, new Mt("servername changed"));
        return;
      }
    }
    if (t[Ms])
      return;
    if (!A && !t[At]) {
      JC(t);
      return;
    }
    if (A.destroyed || A[ar] || A[_A] || A[gn] || t[Ye] > 0 && !r.idempotent || t[Ye] > 0 && (r.upgrade || r.method === "CONNECT") || t[Ye] > 0 && ie.bodyLength(r.body) !== 0 && (ie.isStream(r.body) || ie.isAsyncIterable(r.body)))
      return;
    !r.aborted && vw(t, r) ? t[et]++ : t[Ne].splice(t[et], 1);
  }
}
function _C(t) {
  return t !== "GET" && t !== "HEAD" && t !== "OPTIONS" && t !== "TRACE" && t !== "CONNECT";
}
function vw(t, e) {
  if (t[Yt] === "h2") {
    Lw(t, t[At], e);
    return;
  }
  const { body: A, method: r, path: s, host: n, upgrade: i, headers: a, blocking: o, reset: c } = e, g = r === "PUT" || r === "POST" || r === "PATCH";
  A && typeof A.read == "function" && A.read(0);
  const h = ie.bodyLength(A);
  let E = h;
  if (E === null && (E = e.contentLength), E === 0 && !g && (E = null), _C(r) && E > 0 && e.contentLength !== null && e.contentLength !== E) {
    if (t[Ai])
      return NA(t, e, new or()), !1;
    process.emitWarning(new or());
  }
  const Q = t[Ve];
  try {
    e.onConnect((u) => {
      e.aborted || e.completed || (NA(t, e, u || new Sl()), ie.destroy(Q, new Mt("aborted")));
    });
  } catch (u) {
    NA(t, e, u);
  }
  if (e.aborted)
    return !1;
  r === "HEAD" && (Q[_A] = !0), (i || r === "CONNECT") && (Q[_A] = !0), c != null && (Q[_A] = c), t[ti] && Q[TC]++ >= t[ti] && (Q[_A] = !0), o && (Q[gn] = !0);
  let C = `${r} ${s} HTTP/1.1\r
`;
  return typeof n == "string" ? C += `host: ${n}\r
` : C += t[kC], i ? C += `connection: upgrade\r
upgrade: ${i}\r
` : t[Mr] && !Q[_A] ? C += `connection: keep-alive\r
` : C += `connection: close\r
`, a && (C += a), FA.sendHeaders.hasSubscribers && FA.sendHeaders.publish({ request: e, headers: C, socket: Q }), !A || h === 0 ? (E === 0 ? Q.write(`${C}content-length: 0\r
\r
`, "latin1") : (te(E === null, "no body must not have content length"), Q.write(`${C}\r
`, "latin1")), e.onRequestSent()) : ie.isBuffer(A) ? (te(E === A.byteLength, "buffer body must have content length"), Q.cork(), Q.write(`${C}content-length: ${E}\r
\r
`, "latin1"), Q.write(A), Q.uncork(), e.onBodySent(A), e.onRequestSent(), g || (Q[_A] = !0)) : ie.isBlobLike(A) ? typeof A.stream == "function" ? Xo({ body: A.stream(), client: t, request: e, socket: Q, contentLength: E, header: C, expectsPayload: g }) : HC({ body: A, client: t, request: e, socket: Q, contentLength: E, header: C, expectsPayload: g }) : ie.isStream(A) ? OC({ body: A, client: t, request: e, socket: Q, contentLength: E, header: C, expectsPayload: g }) : ie.isIterable(A) ? Xo({ body: A, client: t, request: e, socket: Q, contentLength: E, header: C, expectsPayload: g }) : te(!1), !0;
}
function Lw(t, e, A) {
  const { body: r, method: s, path: n, host: i, upgrade: a, expectContinue: o, signal: c, headers: g } = A;
  let h;
  if (typeof g == "string" ? h = Yg[uw](g.trim()) : h = g, a)
    return NA(t, A, new Error("Upgrade not supported for H2")), !1;
  try {
    A.onConnect((d) => {
      A.aborted || A.completed || NA(t, A, d || new Sl());
    });
  } catch (d) {
    NA(t, A, d);
  }
  if (A.aborted)
    return !1;
  let E;
  const Q = t[Zo];
  if (h[Cw] = i || t[LC], h[Bw] = s, s === "CONNECT")
    return e.ref(), E = e.request(h, { endStream: !1, signal: c }), E.id && !E.pending ? (A.onUpgrade(null, null, E), ++Q.openStreams) : E.once("ready", () => {
      A.onUpgrade(null, null, E), ++Q.openStreams;
    }), E.once("close", () => {
      Q.openStreams -= 1, Q.openStreams === 0 && e.unref();
    }), !0;
  h[Iw] = n, h[dw] = "https";
  const C = s === "PUT" || s === "POST" || s === "PATCH";
  r && typeof r.read == "function" && r.read(0);
  let u = ie.bodyLength(r);
  if (u == null && (u = A.contentLength), (u === 0 || !C) && (u = null), _C(s) && u > 0 && A.contentLength != null && A.contentLength !== u) {
    if (t[Ai])
      return NA(t, A, new or()), !1;
    process.emitWarning(new or());
  }
  u != null && (te(r, "no body must not have content length"), h[fw] = `${u}`), e.ref();
  const B = s === "GET" || s === "HEAD";
  return o ? (h[pw] = "100-continue", E = e.request(h, { endStream: B, signal: c }), E.once("continue", I)) : (E = e.request(h, {
    endStream: B,
    signal: c
  }), I()), ++Q.openStreams, E.once("response", (d) => {
    A.onHeaders(Number(d[ww]), d, E.resume.bind(E), "") === !1 && E.pause();
  }), E.once("end", () => {
    A.onComplete([]);
  }), E.on("data", (d) => {
    A.onData(d) === !1 && E.pause();
  }), E.once("close", () => {
    Q.openStreams -= 1, Q.openStreams === 0 && e.unref();
  }), E.once("error", function(d) {
    t[At] && !t[At].destroyed && !this.closed && !this.destroyed && (Q.streams -= 1, ie.destroy(E, d));
  }), E.once("frameError", (d, w) => {
    const m = new Mt(`HTTP/2: "frameError" received - type ${d}, code ${w}`);
    NA(t, A, m), t[At] && !t[At].destroyed && !this.closed && !this.destroyed && (Q.streams -= 1, ie.destroy(E, m));
  }), !0;
  function I() {
    r ? ie.isBuffer(r) ? (te(u === r.byteLength, "buffer body must have content length"), E.cork(), E.write(r), E.uncork(), E.end(), A.onBodySent(r), A.onRequestSent()) : ie.isBlobLike(r) ? typeof r.stream == "function" ? Xo({
      client: t,
      request: A,
      contentLength: u,
      h2stream: E,
      expectsPayload: C,
      body: r.stream(),
      socket: t[Ve],
      header: ""
    }) : HC({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: C,
      h2stream: E,
      header: "",
      socket: t[Ve]
    }) : ie.isStream(r) ? OC({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: C,
      socket: t[Ve],
      h2stream: E,
      header: ""
    }) : ie.isIterable(r) ? Xo({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: C,
      header: "",
      h2stream: E,
      socket: t[Ve]
    }) : te(!1) : A.onRequestSent();
  }
}
function OC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: a }) {
  if (te(n !== 0 || A[Ye] === 0, "stream body cannot be pipelined"), A[Yt] === "h2") {
    let u = function(B) {
      r.onBodySent(B);
    };
    const C = zp(
      e,
      t,
      (B) => {
        B ? (ie.destroy(e, B), ie.destroy(t, B)) : r.onRequestSent();
      }
    );
    C.on("data", u), C.once("end", () => {
      C.removeListener("data", u), ie.destroy(C);
    });
    return;
  }
  let o = !1;
  const c = new PC({ socket: s, request: r, contentLength: n, client: A, expectsPayload: a, header: i }), g = function(C) {
    if (!o)
      try {
        !c.write(C) && this.pause && this.pause();
      } catch (u) {
        ie.destroy(this, u);
      }
  }, h = function() {
    o || e.resume && e.resume();
  }, E = function() {
    Q(new Sl());
  }, Q = function(C) {
    if (!o) {
      if (o = !0, te(s.destroyed || s[ar] && A[Ye] <= 1), s.off("drain", h).off("error", Q), e.removeListener("data", g).removeListener("end", Q).removeListener("error", Q).removeListener("close", E), !C)
        try {
          c.end();
        } catch (u) {
          C = u;
        }
      c.destroy(C), C && (C.code !== "UND_ERR_INFO" || C.message !== "reset") ? ie.destroy(e, C) : ie.destroy(e);
    }
  };
  e.on("data", g).on("end", Q).on("error", Q).on("close", E), e.resume && e.resume(), s.on("drain", h).on("error", Q);
}
async function HC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: a }) {
  te(n === e.size, "blob body must have content length");
  const o = A[Yt] === "h2";
  try {
    if (n != null && n !== e.size)
      throw new or();
    const c = Buffer.from(await e.arrayBuffer());
    o ? (t.cork(), t.write(c), t.uncork()) : (s.cork(), s.write(`${i}content-length: ${n}\r
\r
`, "latin1"), s.write(c), s.uncork()), r.onBodySent(c), r.onRequestSent(), a || (s[_A] = !0), tt(A);
  } catch (c) {
    ie.destroy(o ? t : s, c);
  }
}
async function Xo({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: a }) {
  te(n !== 0 || A[Ye] === 0, "iterator body cannot be pipelined");
  let o = null;
  function c() {
    if (o) {
      const E = o;
      o = null, E();
    }
  }
  const g = () => new Promise((E, Q) => {
    te(o === null), s[pA] ? Q(s[pA]) : o = E;
  });
  if (A[Yt] === "h2") {
    t.on("close", c).on("drain", c);
    try {
      for await (const E of e) {
        if (s[pA])
          throw s[pA];
        const Q = t.write(E);
        r.onBodySent(E), Q || await g();
      }
    } catch (E) {
      t.destroy(E);
    } finally {
      r.onRequestSent(), t.end(), t.off("close", c).off("drain", c);
    }
    return;
  }
  s.on("close", c).on("drain", c);
  const h = new PC({ socket: s, request: r, contentLength: n, client: A, expectsPayload: a, header: i });
  try {
    for await (const E of e) {
      if (s[pA])
        throw s[pA];
      h.write(E) || await g();
    }
    h.end();
  } catch (E) {
    h.destroy(E);
  } finally {
    s.off("close", c).off("drain", c);
  }
}
class PC {
  constructor({ socket: e, request: A, contentLength: r, client: s, expectsPayload: n, header: i }) {
    this.socket = e, this.request = A, this.contentLength = r, this.client = s, this.bytesWritten = 0, this.expectsPayload = n, this.header = i, e[ar] = !0;
  }
  write(e) {
    const { socket: A, request: r, contentLength: s, client: n, bytesWritten: i, expectsPayload: a, header: o } = this;
    if (A[pA])
      throw A[pA];
    if (A.destroyed)
      return !1;
    const c = Buffer.byteLength(e);
    if (!c)
      return !0;
    if (s !== null && i + c > s) {
      if (n[Ai])
        throw new or();
      process.emitWarning(new or());
    }
    A.cork(), i === 0 && (a || (A[_A] = !0), s === null ? A.write(`${o}transfer-encoding: chunked\r
`, "latin1") : A.write(`${o}content-length: ${s}\r
\r
`, "latin1")), s === null && A.write(`\r
${c.toString(16)}\r
`, "latin1"), this.bytesWritten += c;
    const g = A.write(e);
    return A.uncork(), r.onBodySent(e), g || A[Pe].timeout && A[Pe].timeoutType === ln && A[Pe].timeout.refresh && A[Pe].timeout.refresh(), g;
  }
  end() {
    const { socket: e, contentLength: A, client: r, bytesWritten: s, expectsPayload: n, header: i, request: a } = this;
    if (a.onRequestSent(), e[ar] = !1, e[pA])
      throw e[pA];
    if (!e.destroyed) {
      if (s === 0 ? n ? e.write(`${i}content-length: 0\r
\r
`, "latin1") : e.write(`${i}\r
`, "latin1") : A === null && e.write(`\r
0\r
\r
`, "latin1"), A !== null && s !== A) {
        if (r[Ai])
          throw new or();
        process.emitWarning(new or());
      }
      e[Pe].timeout && e[Pe].timeoutType === ln && e[Pe].timeout.refresh && e[Pe].timeout.refresh(), tt(r);
    }
  }
  destroy(e) {
    const { socket: A, client: r } = this;
    A[ar] = !1, e && (te(r[Ye] <= 1, "pipeline should only contain this request"), ie.destroy(A, e));
  }
}
function NA(t, e, A) {
  try {
    e.onError(A), te(e.aborted);
  } catch (r) {
    t.emit("error", r);
  }
}
var wa = mw;
const VC = 2048, kc = VC - 1;
class Vh {
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(VC), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & kc) === this.bottom;
  }
  push(e) {
    this.list[this.top] = e, this.top = this.top + 1 & kc;
  }
  shift() {
    const e = this.list[this.bottom];
    return e === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & kc, e);
  }
}
var Mw = class {
  constructor() {
    this.head = this.tail = new Vh();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e) {
    this.head.isFull() && (this.head = this.head.next = new Vh()), this.head.push(e);
  }
  shift() {
    const e = this.tail, A = e.shift();
    return e.isEmpty() && e.next !== null && (this.tail = e.next), A;
  }
};
const { kFree: Gw, kConnected: Yw, kPending: Jw, kQueued: _w, kRunning: Ow, kSize: Hw } = Je, xr = Symbol("pool");
let Pw = class {
  constructor(e) {
    this[xr] = e;
  }
  get connected() {
    return this[xr][Yw];
  }
  get free() {
    return this[xr][Gw];
  }
  get pending() {
    return this[xr][Jw];
  }
  get queued() {
    return this[xr][_w];
  }
  get running() {
    return this[xr][Ow];
  }
  get size() {
    return this[xr][Hw];
  }
};
var Vw = Pw;
const Ww = da, xw = Mw, { kConnected: Sc, kSize: Wh, kRunning: xh, kPending: qh, kQueued: kn, kBusy: qw, kFree: jw, kUrl: Zw, kClose: zw, kDestroy: Xw, kDispatch: $w } = Je, Kw = Vw, PA = Symbol("clients"), LA = Symbol("needDrain"), Sn = Symbol("queue"), Fc = Symbol("closed resolve"), Nc = Symbol("onDrain"), jh = Symbol("onConnect"), Zh = Symbol("onDisconnect"), zh = Symbol("onConnectionError"), Vg = Symbol("get dispatcher"), WC = Symbol("add client"), xC = Symbol("remove client"), Xh = Symbol("stats");
let em = class extends Ww {
  constructor() {
    super(), this[Sn] = new xw(), this[PA] = [], this[kn] = 0;
    const e = this;
    this[Nc] = function(r, s) {
      const n = e[Sn];
      let i = !1;
      for (; !i; ) {
        const a = n.shift();
        if (!a)
          break;
        e[kn]--, i = !this.dispatch(a.opts, a.handler);
      }
      this[LA] = i, !this[LA] && e[LA] && (e[LA] = !1, e.emit("drain", r, [e, ...s])), e[Fc] && n.isEmpty() && Promise.all(e[PA].map((a) => a.close())).then(e[Fc]);
    }, this[jh] = (A, r) => {
      e.emit("connect", A, [e, ...r]);
    }, this[Zh] = (A, r, s) => {
      e.emit("disconnect", A, [e, ...r], s);
    }, this[zh] = (A, r, s) => {
      e.emit("connectionError", A, [e, ...r], s);
    }, this[Xh] = new Kw(this);
  }
  get [qw]() {
    return this[LA];
  }
  get [Sc]() {
    return this[PA].filter((e) => e[Sc]).length;
  }
  get [jw]() {
    return this[PA].filter((e) => e[Sc] && !e[LA]).length;
  }
  get [qh]() {
    let e = this[kn];
    for (const { [qh]: A } of this[PA])
      e += A;
    return e;
  }
  get [xh]() {
    let e = 0;
    for (const { [xh]: A } of this[PA])
      e += A;
    return e;
  }
  get [Wh]() {
    let e = this[kn];
    for (const { [Wh]: A } of this[PA])
      e += A;
    return e;
  }
  get stats() {
    return this[Xh];
  }
  async [zw]() {
    return this[Sn].isEmpty() ? Promise.all(this[PA].map((e) => e.close())) : new Promise((e) => {
      this[Fc] = e;
    });
  }
  async [Xw](e) {
    for (; ; ) {
      const A = this[Sn].shift();
      if (!A)
        break;
      A.handler.onError(e);
    }
    return Promise.all(this[PA].map((A) => A.destroy(e)));
  }
  [$w](e, A) {
    const r = this[Vg]();
    return r ? r.dispatch(e, A) || (r[LA] = !0, this[LA] = !this[Vg]()) : (this[LA] = !0, this[Sn].push({ opts: e, handler: A }), this[kn]++), !this[LA];
  }
  [WC](e) {
    return e.on("drain", this[Nc]).on("connect", this[jh]).on("disconnect", this[Zh]).on("connectionError", this[zh]), this[PA].push(e), this[LA] && process.nextTick(() => {
      this[LA] && this[Nc](e[Zw], [this, e]);
    }), this;
  }
  [xC](e) {
    e.close(() => {
      const A = this[PA].indexOf(e);
      A !== -1 && this[PA].splice(A, 1);
    }), this[LA] = this[PA].some((A) => !A[LA] && A.closed !== !0 && A.destroyed !== !0);
  }
};
var qC = {
  PoolBase: em,
  kClients: PA,
  kNeedDrain: LA,
  kAddClient: WC,
  kRemoveClient: xC,
  kGetDispatcher: Vg
};
const {
  PoolBase: Am,
  kClients: $h,
  kNeedDrain: tm,
  kAddClient: rm,
  kGetDispatcher: sm
} = qC, nm = wa, {
  InvalidArgumentError: Uc
} = Te, Tc = fe, { kUrl: Kh, kInterceptors: im } = Je, om = fa, vc = Symbol("options"), Lc = Symbol("connections"), eE = Symbol("factory");
function am(t, e) {
  return new nm(t, e);
}
let cm = class extends Am {
  constructor(e, {
    connections: A,
    factory: r = am,
    connect: s,
    connectTimeout: n,
    tls: i,
    maxCachedSessions: a,
    socketPath: o,
    autoSelectFamily: c,
    autoSelectFamilyAttemptTimeout: g,
    allowH2: h,
    ...E
  } = {}) {
    if (super(), A != null && (!Number.isFinite(A) || A < 0))
      throw new Uc("invalid connections");
    if (typeof r != "function")
      throw new Uc("factory must be a function.");
    if (s != null && typeof s != "function" && typeof s != "object")
      throw new Uc("connect must be a function or an object");
    typeof s != "function" && (s = om({
      ...i,
      maxCachedSessions: a,
      allowH2: h,
      socketPath: o,
      timeout: n,
      ...Tc.nodeHasAutoSelectFamily && c ? { autoSelectFamily: c, autoSelectFamilyAttemptTimeout: g } : void 0,
      ...s
    })), this[im] = E.interceptors && E.interceptors.Pool && Array.isArray(E.interceptors.Pool) ? E.interceptors.Pool : [], this[Lc] = A || null, this[Kh] = Tc.parseOrigin(e), this[vc] = { ...Tc.deepClone(E), connect: s, allowH2: h }, this[vc].interceptors = E.interceptors ? { ...E.interceptors } : void 0, this[eE] = r;
  }
  [sm]() {
    let e = this[$h].find((A) => !A[tm]);
    return e || ((!this[Lc] || this[$h].length < this[Lc]) && (e = this[eE](this[Kh], this[vc]), this[rm](e)), e);
  }
};
var Oi = cm;
const {
  BalancedPoolMissingUpstreamError: gm,
  InvalidArgumentError: lm
} = Te, {
  PoolBase: hm,
  kClients: TA,
  kNeedDrain: Fn,
  kAddClient: Em,
  kRemoveClient: um,
  kGetDispatcher: Qm
} = qC, Cm = Oi, { kUrl: Mc, kInterceptors: Bm } = Je, { parseOrigin: AE } = fe, tE = Symbol("factory"), to = Symbol("options"), rE = Symbol("kGreatestCommonDivisor"), qr = Symbol("kCurrentWeight"), jr = Symbol("kIndex"), rt = Symbol("kWeight"), ro = Symbol("kMaxWeightPerServer"), so = Symbol("kErrorPenalty");
function jC(t, e) {
  return e === 0 ? t : jC(e, t % e);
}
function Im(t, e) {
  return new Cm(t, e);
}
let dm = class extends hm {
  constructor(e = [], { factory: A = Im, ...r } = {}) {
    if (super(), this[to] = r, this[jr] = -1, this[qr] = 0, this[ro] = this[to].maxWeightPerServer || 100, this[so] = this[to].errorPenalty || 15, Array.isArray(e) || (e = [e]), typeof A != "function")
      throw new lm("factory must be a function.");
    this[Bm] = r.interceptors && r.interceptors.BalancedPool && Array.isArray(r.interceptors.BalancedPool) ? r.interceptors.BalancedPool : [], this[tE] = A;
    for (const s of e)
      this.addUpstream(s);
    this._updateBalancedPoolStats();
  }
  addUpstream(e) {
    const A = AE(e).origin;
    if (this[TA].find((s) => s[Mc].origin === A && s.closed !== !0 && s.destroyed !== !0))
      return this;
    const r = this[tE](A, Object.assign({}, this[to]));
    this[Em](r), r.on("connect", () => {
      r[rt] = Math.min(this[ro], r[rt] + this[so]);
    }), r.on("connectionError", () => {
      r[rt] = Math.max(1, r[rt] - this[so]), this._updateBalancedPoolStats();
    }), r.on("disconnect", (...s) => {
      const n = s[2];
      n && n.code === "UND_ERR_SOCKET" && (r[rt] = Math.max(1, r[rt] - this[so]), this._updateBalancedPoolStats());
    });
    for (const s of this[TA])
      s[rt] = this[ro];
    return this._updateBalancedPoolStats(), this;
  }
  _updateBalancedPoolStats() {
    this[rE] = this[TA].map((e) => e[rt]).reduce(jC, 0);
  }
  removeUpstream(e) {
    const A = AE(e).origin, r = this[TA].find((s) => s[Mc].origin === A && s.closed !== !0 && s.destroyed !== !0);
    return r && this[um](r), this;
  }
  get upstreams() {
    return this[TA].filter((e) => e.closed !== !0 && e.destroyed !== !0).map((e) => e[Mc].origin);
  }
  [Qm]() {
    if (this[TA].length === 0)
      throw new gm();
    if (!this[TA].find((n) => !n[Fn] && n.closed !== !0 && n.destroyed !== !0) || this[TA].map((n) => n[Fn]).reduce((n, i) => n && i, !0))
      return;
    let r = 0, s = this[TA].findIndex((n) => !n[Fn]);
    for (; r++ < this[TA].length; ) {
      this[jr] = (this[jr] + 1) % this[TA].length;
      const n = this[TA][this[jr]];
      if (n[rt] > this[TA][s][rt] && !n[Fn] && (s = this[jr]), this[jr] === 0 && (this[qr] = this[qr] - this[rE], this[qr] <= 0 && (this[qr] = this[ro])), n[rt] >= this[qr] && !n[Fn])
        return n;
    }
    return this[qr] = this[TA][s][rt], this[jr] = s, this[TA][s];
  }
};
var fm = dm;
const { kConnected: ZC, kSize: zC } = Je;
class sE {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value[ZC] === 0 && this.value[zC] === 0 ? void 0 : this.value;
  }
}
class nE {
  constructor(e) {
    this.finalizer = e;
  }
  register(e, A) {
    e.on && e.on("disconnect", () => {
      e[ZC] === 0 && e[zC] === 0 && this.finalizer(A);
    });
  }
}
var XC = function() {
  return process.env.NODE_V8_COVERAGE ? {
    WeakRef: sE,
    FinalizationRegistry: nE
  } : {
    WeakRef: ge.WeakRef || sE,
    FinalizationRegistry: ge.FinalizationRegistry || nE
  };
};
const { InvalidArgumentError: no } = Te, { kClients: Qr, kRunning: iE, kClose: pm, kDestroy: wm, kDispatch: mm, kInterceptors: ym } = Je, Rm = da, Dm = Oi, bm = wa, km = fe, Sm = kl, { WeakRef: Fm, FinalizationRegistry: Nm } = XC(), oE = Symbol("onConnect"), aE = Symbol("onDisconnect"), cE = Symbol("onConnectionError"), Um = Symbol("maxRedirections"), gE = Symbol("onDrain"), lE = Symbol("factory"), hE = Symbol("finalizer"), Gc = Symbol("options");
function Tm(t, e) {
  return e && e.connections === 1 ? new bm(t, e) : new Dm(t, e);
}
let vm = class extends Rm {
  constructor({ factory: e = Tm, maxRedirections: A = 0, connect: r, ...s } = {}) {
    if (super(), typeof e != "function")
      throw new no("factory must be a function.");
    if (r != null && typeof r != "function" && typeof r != "object")
      throw new no("connect must be a function or an object");
    if (!Number.isInteger(A) || A < 0)
      throw new no("maxRedirections must be a positive number");
    r && typeof r != "function" && (r = { ...r }), this[ym] = s.interceptors && s.interceptors.Agent && Array.isArray(s.interceptors.Agent) ? s.interceptors.Agent : [Sm({ maxRedirections: A })], this[Gc] = { ...km.deepClone(s), connect: r }, this[Gc].interceptors = s.interceptors ? { ...s.interceptors } : void 0, this[Um] = A, this[lE] = e, this[Qr] = /* @__PURE__ */ new Map(), this[hE] = new Nm(
      /* istanbul ignore next: gc is undeterministic */
      (i) => {
        const a = this[Qr].get(i);
        a !== void 0 && a.deref() === void 0 && this[Qr].delete(i);
      }
    );
    const n = this;
    this[gE] = (i, a) => {
      n.emit("drain", i, [n, ...a]);
    }, this[oE] = (i, a) => {
      n.emit("connect", i, [n, ...a]);
    }, this[aE] = (i, a, o) => {
      n.emit("disconnect", i, [n, ...a], o);
    }, this[cE] = (i, a, o) => {
      n.emit("connectionError", i, [n, ...a], o);
    };
  }
  get [iE]() {
    let e = 0;
    for (const A of this[Qr].values()) {
      const r = A.deref();
      r && (e += r[iE]);
    }
    return e;
  }
  [mm](e, A) {
    let r;
    if (e.origin && (typeof e.origin == "string" || e.origin instanceof URL))
      r = String(e.origin);
    else
      throw new no("opts.origin must be a non-empty string or URL.");
    const s = this[Qr].get(r);
    let n = s ? s.deref() : null;
    return n || (n = this[lE](e.origin, this[Gc]).on("drain", this[gE]).on("connect", this[oE]).on("disconnect", this[aE]).on("connectionError", this[cE]), this[Qr].set(r, new Fm(n)), this[hE].register(n, r)), n.dispatch(e, A);
  }
  async [pm]() {
    const e = [];
    for (const A of this[Qr].values()) {
      const r = A.deref();
      r && e.push(r.close());
    }
    await Promise.all(e);
  }
  async [wm](e) {
    const A = [];
    for (const r of this[Qr].values()) {
      const s = r.deref();
      s && A.push(s.destroy(e));
    }
    await Promise.all(A);
  }
};
var ma = vm, Bn = {};
const $C = eA, { Readable: Lm } = _t, { RequestAbortedError: KC, NotSupportedError: Mm, InvalidArgumentError: Gm } = Te, Ts = fe, { ReadableStreamFrom: Ym, toUSVString: Jm } = fe;
let Yc;
const KA = Symbol("kConsume"), io = Symbol("kReading"), wr = Symbol("kBody"), EE = Symbol("abort"), eB = Symbol("kContentType");
var _m = class extends Lm {
  constructor({
    resume: e,
    abort: A,
    contentType: r = "",
    highWaterMark: s = 64 * 1024
    // Same as nodejs fs streams.
  }) {
    super({
      autoDestroy: !0,
      read: e,
      highWaterMark: s
    }), this._readableState.dataEmitted = !1, this[EE] = A, this[KA] = null, this[wr] = null, this[eB] = r, this[io] = !1;
  }
  destroy(e) {
    return this.destroyed ? this : (!e && !this._readableState.endEmitted && (e = new KC()), e && this[EE](), super.destroy(e));
  }
  emit(e, ...A) {
    return e === "data" ? this._readableState.dataEmitted = !0 : e === "error" && (this._readableState.errorEmitted = !0), super.emit(e, ...A);
  }
  on(e, ...A) {
    return (e === "data" || e === "readable") && (this[io] = !0), super.on(e, ...A);
  }
  addListener(e, ...A) {
    return this.on(e, ...A);
  }
  off(e, ...A) {
    const r = super.off(e, ...A);
    return (e === "data" || e === "readable") && (this[io] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r;
  }
  removeListener(e, ...A) {
    return this.off(e, ...A);
  }
  push(e) {
    return this[KA] && e !== null && this.readableLength === 0 ? (AB(this[KA], e), this[io] ? super.push(e) : !0) : super.push(e);
  }
  // https://fetch.spec.whatwg.org/#dom-body-text
  async text() {
    return oo(this, "text");
  }
  // https://fetch.spec.whatwg.org/#dom-body-json
  async json() {
    return oo(this, "json");
  }
  // https://fetch.spec.whatwg.org/#dom-body-blob
  async blob() {
    return oo(this, "blob");
  }
  // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
  async arrayBuffer() {
    return oo(this, "arrayBuffer");
  }
  // https://fetch.spec.whatwg.org/#dom-body-formdata
  async formData() {
    throw new Mm();
  }
  // https://fetch.spec.whatwg.org/#dom-body-bodyused
  get bodyUsed() {
    return Ts.isDisturbed(this);
  }
  // https://fetch.spec.whatwg.org/#dom-body-body
  get body() {
    return this[wr] || (this[wr] = Ym(this), this[KA] && (this[wr].getReader(), $C(this[wr].locked))), this[wr];
  }
  async dump(e) {
    let A = e && Number.isFinite(e.limit) ? e.limit : 262144;
    const r = e && e.signal, s = () => {
      this.destroy();
    };
    let n;
    if (r) {
      if (typeof r != "object" || !("aborted" in r))
        throw new Gm("signal must be an AbortSignal");
      Ts.throwIfAborted(r), n = Ts.addAbortListener(r, s);
    }
    try {
      for await (const i of this)
        if (Ts.throwIfAborted(r), A -= Buffer.byteLength(i), A < 0)
          return;
    } catch {
      Ts.throwIfAborted(r);
    } finally {
      typeof n == "function" ? n() : n && n[Symbol.dispose]();
    }
  }
};
function Om(t) {
  return t[wr] && t[wr].locked === !0 || t[KA];
}
function Hm(t) {
  return Ts.isDisturbed(t) || Om(t);
}
async function oo(t, e) {
  if (Hm(t))
    throw new TypeError("unusable");
  return $C(!t[KA]), new Promise((A, r) => {
    t[KA] = {
      type: e,
      stream: t,
      resolve: A,
      reject: r,
      length: 0,
      body: []
    }, t.on("error", function(s) {
      Wg(this[KA], s);
    }).on("close", function() {
      this[KA].body !== null && Wg(this[KA], new KC());
    }), process.nextTick(Pm, t[KA]);
  });
}
function Pm(t) {
  if (t.body === null)
    return;
  const { _readableState: e } = t.stream;
  for (const A of e.buffer)
    AB(t, A);
  for (e.endEmitted ? uE(this[KA]) : t.stream.on("end", function() {
    uE(this[KA]);
  }), t.stream.resume(); t.stream.read() != null; )
    ;
}
function uE(t) {
  const { type: e, body: A, resolve: r, stream: s, length: n } = t;
  try {
    if (e === "text")
      r(Jm(Buffer.concat(A)));
    else if (e === "json")
      r(JSON.parse(Buffer.concat(A)));
    else if (e === "arrayBuffer") {
      const i = new Uint8Array(n);
      let a = 0;
      for (const o of A)
        i.set(o, a), a += o.byteLength;
      r(i.buffer);
    } else
      e === "blob" && (Yc || (Yc = require("buffer").Blob), r(new Yc(A, { type: s[eB] })));
    Wg(t);
  } catch (i) {
    s.destroy(i);
  }
}
function AB(t, e) {
  t.length += e.length, t.body.push(e);
}
function Wg(t, e) {
  t.body !== null && (e ? t.reject(e) : t.resolve(), t.type = null, t.stream = null, t.resolve = null, t.reject = null, t.length = 0, t.body = null);
}
const Vm = eA, {
  ResponseStatusCodeError: ao
} = Te, { toUSVString: QE } = fe;
async function Wm({ callback: t, body: e, contentType: A, statusCode: r, statusMessage: s, headers: n }) {
  Vm(e);
  let i = [], a = 0;
  for await (const o of e)
    if (i.push(o), a += o.length, a > 128 * 1024) {
      i = null;
      break;
    }
  if (r === 204 || !A || !i) {
    process.nextTick(t, new ao(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
    return;
  }
  try {
    if (A.startsWith("application/json")) {
      const o = JSON.parse(QE(Buffer.concat(i)));
      process.nextTick(t, new ao(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, o));
      return;
    }
    if (A.startsWith("text/")) {
      const o = QE(Buffer.concat(i));
      process.nextTick(t, new ao(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, o));
      return;
    }
  } catch {
  }
  process.nextTick(t, new ao(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
}
var tB = { getResolveErrorBodyCallback: Wm };
const { addAbortListener: xm } = fe, { RequestAbortedError: qm } = Te, Js = Symbol("kListener"), Dr = Symbol("kSignal");
function CE(t) {
  t.abort ? t.abort() : t.onError(new qm());
}
function jm(t, e) {
  if (t[Dr] = null, t[Js] = null, !!e) {
    if (e.aborted) {
      CE(t);
      return;
    }
    t[Dr] = e, t[Js] = () => {
      CE(t);
    }, xm(t[Dr], t[Js]);
  }
}
function Zm(t) {
  t[Dr] && ("removeEventListener" in t[Dr] ? t[Dr].removeEventListener("abort", t[Js]) : t[Dr].removeListener("abort", t[Js]), t[Dr] = null, t[Js] = null);
}
var Hi = {
  addSignal: jm,
  removeSignal: Zm
};
const zm = _m, {
  InvalidArgumentError: Ss,
  RequestAbortedError: Xm
} = Te, bt = fe, { getResolveErrorBodyCallback: $m } = tB, { AsyncResource: Km } = Ji, { addSignal: ey, removeSignal: BE } = Hi;
class Ay extends Km {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Ss("invalid opts");
    const { signal: r, method: s, opaque: n, body: i, onInfo: a, responseHeaders: o, throwOnError: c, highWaterMark: g } = e;
    try {
      if (typeof A != "function")
        throw new Ss("invalid callback");
      if (g && (typeof g != "number" || g < 0))
        throw new Ss("invalid highWaterMark");
      if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
        throw new Ss("signal must be an EventEmitter or EventTarget");
      if (s === "CONNECT")
        throw new Ss("invalid method");
      if (a && typeof a != "function")
        throw new Ss("invalid onInfo callback");
      super("UNDICI_REQUEST");
    } catch (h) {
      throw bt.isStream(i) && bt.destroy(i.on("error", bt.nop), h), h;
    }
    this.responseHeaders = o || null, this.opaque = n || null, this.callback = A, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = a || null, this.throwOnError = c, this.highWaterMark = g, bt.isStream(i) && i.on("error", (h) => {
      this.onError(h);
    }), ey(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Xm();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { callback: n, opaque: i, abort: a, context: o, responseHeaders: c, highWaterMark: g } = this, h = c === "raw" ? bt.parseRawHeaders(A) : bt.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: h });
      return;
    }
    const Q = (c === "raw" ? bt.parseHeaders(A) : h)["content-type"], C = new zm({ resume: r, abort: a, contentType: Q, highWaterMark: g });
    this.callback = null, this.res = C, n !== null && (this.throwOnError && e >= 400 ? this.runInAsyncScope(
      $m,
      null,
      { callback: n, body: C, contentType: Q, statusCode: e, statusMessage: s, headers: h }
    ) : this.runInAsyncScope(n, null, null, {
      statusCode: e,
      headers: h,
      trailers: this.trailers,
      opaque: i,
      body: C,
      context: o
    }));
  }
  onData(e) {
    const { res: A } = this;
    return A.push(e);
  }
  onComplete(e) {
    const { res: A } = this;
    BE(this), bt.parseHeaders(e, this.trailers), A.push(null);
  }
  onError(e) {
    const { res: A, callback: r, body: s, opaque: n } = this;
    BE(this), r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: n });
    })), A && (this.res = null, queueMicrotask(() => {
      bt.destroy(A, e);
    })), s && (this.body = null, bt.destroy(s, e));
  }
}
function rB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      rB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    this.dispatch(t, new Ay(t, e));
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
var ty = rB;
const { finished: ry, PassThrough: sy } = _t, {
  InvalidArgumentError: Fs,
  InvalidReturnValueError: ny,
  RequestAbortedError: iy
} = Te, ht = fe, { getResolveErrorBodyCallback: oy } = tB, { AsyncResource: ay } = Ji, { addSignal: cy, removeSignal: IE } = Hi;
class gy extends ay {
  constructor(e, A, r) {
    if (!e || typeof e != "object")
      throw new Fs("invalid opts");
    const { signal: s, method: n, opaque: i, body: a, onInfo: o, responseHeaders: c, throwOnError: g } = e;
    try {
      if (typeof r != "function")
        throw new Fs("invalid callback");
      if (typeof A != "function")
        throw new Fs("invalid factory");
      if (s && typeof s.on != "function" && typeof s.addEventListener != "function")
        throw new Fs("signal must be an EventEmitter or EventTarget");
      if (n === "CONNECT")
        throw new Fs("invalid method");
      if (o && typeof o != "function")
        throw new Fs("invalid onInfo callback");
      super("UNDICI_STREAM");
    } catch (h) {
      throw ht.isStream(a) && ht.destroy(a.on("error", ht.nop), h), h;
    }
    this.responseHeaders = c || null, this.opaque = i || null, this.factory = A, this.callback = r, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a, this.onInfo = o || null, this.throwOnError = g || !1, ht.isStream(a) && a.on("error", (h) => {
      this.onError(h);
    }), cy(this, s);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new iy();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { factory: n, opaque: i, context: a, callback: o, responseHeaders: c } = this, g = c === "raw" ? ht.parseRawHeaders(A) : ht.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: g });
      return;
    }
    this.factory = null;
    let h;
    if (this.throwOnError && e >= 400) {
      const C = (c === "raw" ? ht.parseHeaders(A) : g)["content-type"];
      h = new sy(), this.callback = null, this.runInAsyncScope(
        oy,
        null,
        { callback: o, body: h, contentType: C, statusCode: e, statusMessage: s, headers: g }
      );
    } else {
      if (n === null)
        return;
      if (h = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: g,
        opaque: i,
        context: a
      }), !h || typeof h.write != "function" || typeof h.end != "function" || typeof h.on != "function")
        throw new ny("expected Writable");
      ry(h, { readable: !1 }, (Q) => {
        const { callback: C, res: u, opaque: B, trailers: I, abort: d } = this;
        this.res = null, (Q || !u.readable) && ht.destroy(u, Q), this.callback = null, this.runInAsyncScope(C, null, Q || null, { opaque: B, trailers: I }), Q && d();
      });
    }
    return h.on("drain", r), this.res = h, (h.writableNeedDrain !== void 0 ? h.writableNeedDrain : h._writableState && h._writableState.needDrain) !== !0;
  }
  onData(e) {
    const { res: A } = this;
    return A ? A.write(e) : !0;
  }
  onComplete(e) {
    const { res: A } = this;
    IE(this), A && (this.trailers = ht.parseHeaders(e), A.end());
  }
  onError(e) {
    const { res: A, callback: r, opaque: s, body: n } = this;
    IE(this), this.factory = null, A ? (this.res = null, ht.destroy(A, e)) : r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: s });
    })), n && (this.body = null, ht.destroy(n, e));
  }
}
function sB(t, e, A) {
  if (A === void 0)
    return new Promise((r, s) => {
      sB.call(this, t, e, (n, i) => n ? s(n) : r(i));
    });
  try {
    this.dispatch(t, new gy(t, e, A));
  } catch (r) {
    if (typeof A != "function")
      throw r;
    const s = t && t.opaque;
    queueMicrotask(() => A(r, { opaque: s }));
  }
}
var ly = sB;
const {
  Readable: nB,
  Duplex: hy,
  PassThrough: Ey
} = _t, {
  InvalidArgumentError: Nn,
  InvalidReturnValueError: uy,
  RequestAbortedError: vo
} = Te, st = fe, { AsyncResource: Qy } = Ji, { addSignal: Cy, removeSignal: By } = Hi, Iy = eA, _s = Symbol("resume");
class dy extends nB {
  constructor() {
    super({ autoDestroy: !0 }), this[_s] = null;
  }
  _read() {
    const { [_s]: e } = this;
    e && (this[_s] = null, e());
  }
  _destroy(e, A) {
    this._read(), A(e);
  }
}
class fy extends nB {
  constructor(e) {
    super({ autoDestroy: !0 }), this[_s] = e;
  }
  _read() {
    this[_s]();
  }
  _destroy(e, A) {
    !e && !this._readableState.endEmitted && (e = new vo()), A(e);
  }
}
class py extends Qy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Nn("invalid opts");
    if (typeof A != "function")
      throw new Nn("invalid handler");
    const { signal: r, method: s, opaque: n, onInfo: i, responseHeaders: a } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Nn("signal must be an EventEmitter or EventTarget");
    if (s === "CONNECT")
      throw new Nn("invalid method");
    if (i && typeof i != "function")
      throw new Nn("invalid onInfo callback");
    super("UNDICI_PIPELINE"), this.opaque = n || null, this.responseHeaders = a || null, this.handler = A, this.abort = null, this.context = null, this.onInfo = i || null, this.req = new dy().on("error", st.nop), this.ret = new hy({
      readableObjectMode: e.objectMode,
      autoDestroy: !0,
      read: () => {
        const { body: o } = this;
        o && o.resume && o.resume();
      },
      write: (o, c, g) => {
        const { req: h } = this;
        h.push(o, c) || h._readableState.destroyed ? g() : h[_s] = g;
      },
      destroy: (o, c) => {
        const { body: g, req: h, res: E, ret: Q, abort: C } = this;
        !o && !Q._readableState.endEmitted && (o = new vo()), C && o && C(), st.destroy(g, o), st.destroy(h, o), st.destroy(E, o), By(this), c(o);
      }
    }).on("prefinish", () => {
      const { req: o } = this;
      o.push(null);
    }), this.res = null, Cy(this, r);
  }
  onConnect(e, A) {
    const { ret: r, res: s } = this;
    if (Iy(!s, "pipeline cannot be retried"), r.destroyed)
      throw new vo();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r) {
    const { opaque: s, handler: n, context: i } = this;
    if (e < 200) {
      if (this.onInfo) {
        const o = this.responseHeaders === "raw" ? st.parseRawHeaders(A) : st.parseHeaders(A);
        this.onInfo({ statusCode: e, headers: o });
      }
      return;
    }
    this.res = new fy(r);
    let a;
    try {
      this.handler = null;
      const o = this.responseHeaders === "raw" ? st.parseRawHeaders(A) : st.parseHeaders(A);
      a = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: o,
        opaque: s,
        body: this.res,
        context: i
      });
    } catch (o) {
      throw this.res.on("error", st.nop), o;
    }
    if (!a || typeof a.on != "function")
      throw new uy("expected Readable");
    a.on("data", (o) => {
      const { ret: c, body: g } = this;
      !c.push(o) && g.pause && g.pause();
    }).on("error", (o) => {
      const { ret: c } = this;
      st.destroy(c, o);
    }).on("end", () => {
      const { ret: o } = this;
      o.push(null);
    }).on("close", () => {
      const { ret: o } = this;
      o._readableState.ended || st.destroy(o, new vo());
    }), this.body = a;
  }
  onData(e) {
    const { res: A } = this;
    return A.push(e);
  }
  onComplete(e) {
    const { res: A } = this;
    A.push(null);
  }
  onError(e) {
    const { ret: A } = this;
    this.handler = null, st.destroy(A, e);
  }
}
function wy(t, e) {
  try {
    const A = new py(t, e);
    return this.dispatch({ ...t, body: A.req }, A), A.ret;
  } catch (A) {
    return new Ey().destroy(A);
  }
}
var my = wy;
const { InvalidArgumentError: Jc, RequestAbortedError: yy, SocketError: Ry } = Te, { AsyncResource: Dy } = Ji, dE = fe, { addSignal: by, removeSignal: fE } = Hi, ky = eA;
class Sy extends Dy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Jc("invalid opts");
    if (typeof A != "function")
      throw new Jc("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Jc("signal must be an EventEmitter or EventTarget");
    super("UNDICI_UPGRADE"), this.responseHeaders = n || null, this.opaque = s || null, this.callback = A, this.abort = null, this.context = null, by(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new yy();
    this.abort = e, this.context = null;
  }
  onHeaders() {
    throw new Ry("bad upgrade", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    ky.strictEqual(e, 101), fE(this), this.callback = null;
    const a = this.responseHeaders === "raw" ? dE.parseRawHeaders(A) : dE.parseHeaders(A);
    this.runInAsyncScope(s, null, null, {
      headers: a,
      socket: r,
      opaque: n,
      context: i
    });
  }
  onError(e) {
    const { callback: A, opaque: r } = this;
    fE(this), A && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(A, null, e, { opaque: r });
    }));
  }
}
function iB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      iB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    const A = new Sy(t, e);
    this.dispatch({
      ...t,
      method: t.method || "GET",
      upgrade: t.protocol || "Websocket"
    }, A);
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
var Fy = iB;
const { AsyncResource: Ny } = Ji, { InvalidArgumentError: _c, RequestAbortedError: Uy, SocketError: Ty } = Te, pE = fe, { addSignal: vy, removeSignal: wE } = Hi;
class Ly extends Ny {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new _c("invalid opts");
    if (typeof A != "function")
      throw new _c("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new _c("signal must be an EventEmitter or EventTarget");
    super("UNDICI_CONNECT"), this.opaque = s || null, this.responseHeaders = n || null, this.callback = A, this.abort = null, vy(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Uy();
    this.abort = e, this.context = A;
  }
  onHeaders() {
    throw new Ty("bad connect", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    wE(this), this.callback = null;
    let a = A;
    a != null && (a = this.responseHeaders === "raw" ? pE.parseRawHeaders(A) : pE.parseHeaders(A)), this.runInAsyncScope(s, null, null, {
      statusCode: e,
      headers: a,
      socket: r,
      opaque: n,
      context: i
    });
  }
  onError(e) {
    const { callback: A, opaque: r } = this;
    wE(this), A && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(A, null, e, { opaque: r });
    }));
  }
}
function oB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      oB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    const A = new Ly(t, e);
    this.dispatch({ ...t, method: "CONNECT" }, A);
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
var My = oB;
Bn.request = ty;
Bn.stream = ly;
Bn.pipeline = my;
Bn.upgrade = Fy;
Bn.connect = My;
const { UndiciError: Gy } = Te;
let Yy = class aB extends Gy {
  constructor(e) {
    super(e), Error.captureStackTrace(this, aB), this.name = "MockNotMatchedError", this.message = e || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
  }
};
var cB = {
  MockNotMatchedError: Yy
}, Pi = {
  kAgent: Symbol("agent"),
  kOptions: Symbol("options"),
  kFactory: Symbol("factory"),
  kDispatches: Symbol("dispatches"),
  kDispatchKey: Symbol("dispatch key"),
  kDefaultHeaders: Symbol("default headers"),
  kDefaultTrailers: Symbol("default trailers"),
  kContentLength: Symbol("content length"),
  kMockAgent: Symbol("mock agent"),
  kMockAgentSet: Symbol("mock agent set"),
  kMockAgentGet: Symbol("mock agent get"),
  kMockDispatch: Symbol("mock dispatch"),
  kClose: Symbol("close"),
  kOriginalClose: Symbol("original agent close"),
  kOrigin: Symbol("origin"),
  kIsMockActive: Symbol("is mock active"),
  kNetConnect: Symbol("net connect"),
  kGetNetConnect: Symbol("get net connect"),
  kConnected: Symbol("connected")
};
const { MockNotMatchedError: ts } = cB, {
  kDispatches: co,
  kMockAgent: Jy,
  kOriginalDispatch: _y,
  kOrigin: Oy,
  kGetNetConnect: Hy
} = Pi, { buildURL: Py, nop: Vy } = fe, { STATUS_CODES: Wy } = En, {
  types: {
    isPromise: xy
  }
} = Jt;
function cr(t, e) {
  return typeof t == "string" ? t === e : t instanceof RegExp ? t.test(e) : typeof t == "function" ? t(e) === !0 : !1;
}
function gB(t) {
  return Object.fromEntries(
    Object.entries(t).map(([e, A]) => [e.toLocaleLowerCase(), A])
  );
}
function lB(t, e) {
  if (Array.isArray(t)) {
    for (let A = 0; A < t.length; A += 2)
      if (t[A].toLocaleLowerCase() === e.toLocaleLowerCase())
        return t[A + 1];
    return;
  } else
    return typeof t.get == "function" ? t.get(e) : gB(t)[e.toLocaleLowerCase()];
}
function hB(t) {
  const e = t.slice(), A = [];
  for (let r = 0; r < e.length; r += 2)
    A.push([e[r], e[r + 1]]);
  return Object.fromEntries(A);
}
function EB(t, e) {
  if (typeof t.headers == "function")
    return Array.isArray(e) && (e = hB(e)), t.headers(e ? gB(e) : {});
  if (typeof t.headers > "u")
    return !0;
  if (typeof e != "object" || typeof t.headers != "object")
    return !1;
  for (const [A, r] of Object.entries(t.headers)) {
    const s = lB(e, A);
    if (!cr(r, s))
      return !1;
  }
  return !0;
}
function mE(t) {
  if (typeof t != "string")
    return t;
  const e = t.split("?");
  if (e.length !== 2)
    return t;
  const A = new URLSearchParams(e.pop());
  return A.sort(), [...e, A.toString()].join("?");
}
function qy(t, { path: e, method: A, body: r, headers: s }) {
  const n = cr(t.path, e), i = cr(t.method, A), a = typeof t.body < "u" ? cr(t.body, r) : !0, o = EB(t, s);
  return n && i && a && o;
}
function uB(t) {
  return Buffer.isBuffer(t) ? t : typeof t == "object" ? JSON.stringify(t) : t.toString();
}
function QB(t, e) {
  const A = e.query ? Py(e.path, e.query) : e.path, r = typeof A == "string" ? mE(A) : A;
  let s = t.filter(({ consumed: n }) => !n).filter(({ path: n }) => cr(mE(n), r));
  if (s.length === 0)
    throw new ts(`Mock dispatch not matched for path '${r}'`);
  if (s = s.filter(({ method: n }) => cr(n, e.method)), s.length === 0)
    throw new ts(`Mock dispatch not matched for method '${e.method}'`);
  if (s = s.filter(({ body: n }) => typeof n < "u" ? cr(n, e.body) : !0), s.length === 0)
    throw new ts(`Mock dispatch not matched for body '${e.body}'`);
  if (s = s.filter((n) => EB(n, e.headers)), s.length === 0)
    throw new ts(`Mock dispatch not matched for headers '${typeof e.headers == "object" ? JSON.stringify(e.headers) : e.headers}'`);
  return s[0];
}
function jy(t, e, A) {
  const r = { timesInvoked: 0, times: 1, persist: !1, consumed: !1 }, s = typeof A == "function" ? { callback: A } : { ...A }, n = { ...r, ...e, pending: !0, data: { error: null, ...s } };
  return t.push(n), n;
}
function xg(t, e) {
  const A = t.findIndex((r) => r.consumed ? qy(r, e) : !1);
  A !== -1 && t.splice(A, 1);
}
function CB(t) {
  const { path: e, method: A, body: r, headers: s, query: n } = t;
  return {
    path: e,
    method: A,
    body: r,
    headers: s,
    query: n
  };
}
function qg(t) {
  return Object.entries(t).reduce((e, [A, r]) => [
    ...e,
    Buffer.from(`${A}`),
    Array.isArray(r) ? r.map((s) => Buffer.from(`${s}`)) : Buffer.from(`${r}`)
  ], []);
}
function BB(t) {
  return Wy[t] || "unknown";
}
async function Zy(t) {
  const e = [];
  for await (const A of t)
    e.push(A);
  return Buffer.concat(e).toString("utf8");
}
function IB(t, e) {
  const A = CB(t), r = QB(this[co], A);
  r.timesInvoked++, r.data.callback && (r.data = { ...r.data, ...r.data.callback(t) });
  const { data: { statusCode: s, data: n, headers: i, trailers: a, error: o }, delay: c, persist: g } = r, { timesInvoked: h, times: E } = r;
  if (r.consumed = !g && h >= E, r.pending = h < E, o !== null)
    return xg(this[co], A), e.onError(o), !0;
  typeof c == "number" && c > 0 ? setTimeout(() => {
    Q(this[co]);
  }, c) : Q(this[co]);
  function Q(u, B = n) {
    const I = Array.isArray(t.headers) ? hB(t.headers) : t.headers, d = typeof B == "function" ? B({ ...t, headers: I }) : B;
    if (xy(d)) {
      d.then((R) => Q(u, R));
      return;
    }
    const w = uB(d), m = qg(i), p = qg(a);
    e.abort = Vy, e.onHeaders(s, m, C, BB(s)), e.onData(Buffer.from(w)), e.onComplete(p), xg(u, A);
  }
  function C() {
  }
  return !0;
}
function zy() {
  const t = this[Jy], e = this[Oy], A = this[_y];
  return function(s, n) {
    if (t.isMockActive)
      try {
        IB.call(this, s, n);
      } catch (i) {
        if (i instanceof ts) {
          const a = t[Hy]();
          if (a === !1)
            throw new ts(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
          if (dB(a, e))
            A.call(this, s, n);
          else
            throw new ts(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`);
        } else
          throw i;
      }
    else
      A.call(this, s, n);
  };
}
function dB(t, e) {
  const A = new URL(e);
  return t === !0 ? !0 : !!(Array.isArray(t) && t.some((r) => cr(r, A.host)));
}
function Xy(t) {
  if (t) {
    const { agent: e, ...A } = t;
    return A;
  }
}
var ya = {
  getResponseData: uB,
  getMockDispatch: QB,
  addMockDispatch: jy,
  deleteMockDispatch: xg,
  buildKey: CB,
  generateKeyValues: qg,
  matchValue: cr,
  getResponse: Zy,
  getStatusText: BB,
  mockDispatch: IB,
  buildMockDispatch: zy,
  checkNetConnect: dB,
  buildMockOptions: Xy,
  getHeaderByName: lB
}, Ra = {};
const { getResponseData: $y, buildKey: Ky, addMockDispatch: Oc } = ya, {
  kDispatches: go,
  kDispatchKey: lo,
  kDefaultHeaders: Hc,
  kDefaultTrailers: Pc,
  kContentLength: Vc,
  kMockDispatch: ho
} = Pi, { InvalidArgumentError: Qt } = Te, { buildURL: e0 } = fe;
class Lo {
  constructor(e) {
    this[ho] = e;
  }
  /**
   * Delay a reply by a set amount in ms.
   */
  delay(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Qt("waitInMs must be a valid integer > 0");
    return this[ho].delay = e, this;
  }
  /**
   * For a defined reply, never mark as consumed.
   */
  persist() {
    return this[ho].persist = !0, this;
  }
  /**
   * Allow one to define a reply for a set amount of matching requests.
   */
  times(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Qt("repeatTimes must be a valid integer > 0");
    return this[ho].times = e, this;
  }
}
let A0 = class {
  constructor(e, A) {
    if (typeof e != "object")
      throw new Qt("opts must be an object");
    if (typeof e.path > "u")
      throw new Qt("opts.path must be defined");
    if (typeof e.method > "u" && (e.method = "GET"), typeof e.path == "string")
      if (e.query)
        e.path = e0(e.path, e.query);
      else {
        const r = new URL(e.path, "data://");
        e.path = r.pathname + r.search;
      }
    typeof e.method == "string" && (e.method = e.method.toUpperCase()), this[lo] = Ky(e), this[go] = A, this[Hc] = {}, this[Pc] = {}, this[Vc] = !1;
  }
  createMockScopeDispatchData(e, A, r = {}) {
    const s = $y(A), n = this[Vc] ? { "content-length": s.length } : {}, i = { ...this[Hc], ...n, ...r.headers }, a = { ...this[Pc], ...r.trailers };
    return { statusCode: e, data: A, headers: i, trailers: a };
  }
  validateReplyParameters(e, A, r) {
    if (typeof e > "u")
      throw new Qt("statusCode must be defined");
    if (typeof A > "u")
      throw new Qt("data must be defined");
    if (typeof r != "object")
      throw new Qt("responseOptions must be an object");
  }
  /**
   * Mock an undici request with a defined reply.
   */
  reply(e) {
    if (typeof e == "function") {
      const a = (c) => {
        const g = e(c);
        if (typeof g != "object")
          throw new Qt("reply options callback must return an object");
        const { statusCode: h, data: E = "", responseOptions: Q = {} } = g;
        return this.validateReplyParameters(h, E, Q), {
          ...this.createMockScopeDispatchData(h, E, Q)
        };
      }, o = Oc(this[go], this[lo], a);
      return new Lo(o);
    }
    const [A, r = "", s = {}] = [...arguments];
    this.validateReplyParameters(A, r, s);
    const n = this.createMockScopeDispatchData(A, r, s), i = Oc(this[go], this[lo], n);
    return new Lo(i);
  }
  /**
   * Mock an undici request with a defined error.
   */
  replyWithError(e) {
    if (typeof e > "u")
      throw new Qt("error must be defined");
    const A = Oc(this[go], this[lo], { error: e });
    return new Lo(A);
  }
  /**
   * Set default reply headers on the interceptor for subsequent replies
   */
  defaultReplyHeaders(e) {
    if (typeof e > "u")
      throw new Qt("headers must be defined");
    return this[Hc] = e, this;
  }
  /**
   * Set default reply trailers on the interceptor for subsequent replies
   */
  defaultReplyTrailers(e) {
    if (typeof e > "u")
      throw new Qt("trailers must be defined");
    return this[Pc] = e, this;
  }
  /**
   * Set reply content length header for replies on the interceptor
   */
  replyContentLength() {
    return this[Vc] = !0, this;
  }
};
Ra.MockInterceptor = A0;
Ra.MockScope = Lo;
const { promisify: t0 } = Jt, r0 = wa, { buildMockDispatch: s0 } = ya, {
  kDispatches: yE,
  kMockAgent: RE,
  kClose: DE,
  kOriginalClose: bE,
  kOrigin: kE,
  kOriginalDispatch: n0,
  kConnected: Wc
} = Pi, { MockInterceptor: i0 } = Ra, SE = Je, { InvalidArgumentError: o0 } = Te;
let a0 = class extends r0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new o0("Argument opts.agent must implement Agent");
    this[RE] = A.agent, this[kE] = e, this[yE] = [], this[Wc] = 1, this[n0] = this.dispatch, this[bE] = this.close.bind(this), this.dispatch = s0.call(this), this.close = this[DE];
  }
  get [SE.kConnected]() {
    return this[Wc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new i0(e, this[yE]);
  }
  async [DE]() {
    await t0(this[bE])(), this[Wc] = 0, this[RE][SE.kClients].delete(this[kE]);
  }
};
var fB = a0;
const { promisify: c0 } = Jt, g0 = Oi, { buildMockDispatch: l0 } = ya, {
  kDispatches: FE,
  kMockAgent: NE,
  kClose: UE,
  kOriginalClose: TE,
  kOrigin: vE,
  kOriginalDispatch: h0,
  kConnected: xc
} = Pi, { MockInterceptor: E0 } = Ra, LE = Je, { InvalidArgumentError: u0 } = Te;
let Q0 = class extends g0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new u0("Argument opts.agent must implement Agent");
    this[NE] = A.agent, this[vE] = e, this[FE] = [], this[xc] = 1, this[h0] = this.dispatch, this[TE] = this.close.bind(this), this.dispatch = l0.call(this), this.close = this[UE];
  }
  get [LE.kConnected]() {
    return this[xc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new E0(e, this[FE]);
  }
  async [UE]() {
    await c0(this[TE])(), this[xc] = 0, this[NE][LE.kClients].delete(this[vE]);
  }
};
var pB = Q0;
const C0 = {
  pronoun: "it",
  is: "is",
  was: "was",
  this: "this"
}, B0 = {
  pronoun: "they",
  is: "are",
  was: "were",
  this: "these"
};
var I0 = class {
  constructor(e, A) {
    this.singular = e, this.plural = A;
  }
  pluralize(e) {
    const A = e === 1, r = A ? C0 : B0, s = A ? this.singular : this.plural;
    return { ...r, count: e, noun: s };
  }
};
const { Transform: d0 } = _t, { Console: f0 } = td;
var p0 = class {
  constructor({ disableColors: e } = {}) {
    this.transform = new d0({
      transform(A, r, s) {
        s(null, A);
      }
    }), this.logger = new f0({
      stdout: this.transform,
      inspectOptions: {
        colors: !e && !process.env.CI
      }
    });
  }
  format(e) {
    const A = e.map(
      ({ method: r, path: s, data: { statusCode: n }, persist: i, times: a, timesInvoked: o, origin: c }) => ({
        Method: r,
        Origin: c,
        Path: s,
        "Status code": n,
        Persistent: i ? "✅" : "❌",
        Invocations: o,
        Remaining: i ? 1 / 0 : a - o
      })
    );
    return this.logger.table(A), this.transform.read().toString();
  }
};
const { kClients: Zr } = Je, w0 = ma, {
  kAgent: qc,
  kMockAgentSet: Eo,
  kMockAgentGet: ME,
  kDispatches: jc,
  kIsMockActive: uo,
  kNetConnect: zr,
  kGetNetConnect: m0,
  kOptions: Qo,
  kFactory: Co
} = Pi, y0 = fB, R0 = pB, { matchValue: D0, buildMockOptions: b0 } = ya, { InvalidArgumentError: GE, UndiciError: k0 } = Te, S0 = Dl, F0 = I0, N0 = p0;
class U0 {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}
let T0 = class extends S0 {
  constructor(e) {
    if (super(e), this[zr] = !0, this[uo] = !0, e && e.agent && typeof e.agent.dispatch != "function")
      throw new GE("Argument opts.agent must implement Agent");
    const A = e && e.agent ? e.agent : new w0(e);
    this[qc] = A, this[Zr] = A[Zr], this[Qo] = b0(e);
  }
  get(e) {
    let A = this[ME](e);
    return A || (A = this[Co](e), this[Eo](e, A)), A;
  }
  dispatch(e, A) {
    return this.get(e.origin), this[qc].dispatch(e, A);
  }
  async close() {
    await this[qc].close(), this[Zr].clear();
  }
  deactivate() {
    this[uo] = !1;
  }
  activate() {
    this[uo] = !0;
  }
  enableNetConnect(e) {
    if (typeof e == "string" || typeof e == "function" || e instanceof RegExp)
      Array.isArray(this[zr]) ? this[zr].push(e) : this[zr] = [e];
    else if (typeof e > "u")
      this[zr] = !0;
    else
      throw new GE("Unsupported matcher. Must be one of String|Function|RegExp.");
  }
  disableNetConnect() {
    this[zr] = !1;
  }
  // This is required to bypass issues caused by using global symbols - see:
  // https://github.com/nodejs/undici/issues/1447
  get isMockActive() {
    return this[uo];
  }
  [Eo](e, A) {
    this[Zr].set(e, new U0(A));
  }
  [Co](e) {
    const A = Object.assign({ agent: this }, this[Qo]);
    return this[Qo] && this[Qo].connections === 1 ? new y0(e, A) : new R0(e, A);
  }
  [ME](e) {
    const A = this[Zr].get(e);
    if (A)
      return A.deref();
    if (typeof e != "string") {
      const r = this[Co]("http://localhost:9999");
      return this[Eo](e, r), r;
    }
    for (const [r, s] of Array.from(this[Zr])) {
      const n = s.deref();
      if (n && typeof r != "string" && D0(r, e)) {
        const i = this[Co](e);
        return this[Eo](e, i), i[jc] = n[jc], i;
      }
    }
  }
  [m0]() {
    return this[zr];
  }
  pendingInterceptors() {
    const e = this[Zr];
    return Array.from(e.entries()).flatMap(([A, r]) => r.deref()[jc].map((s) => ({ ...s, origin: A }))).filter(({ pending: A }) => A);
  }
  assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new N0() } = {}) {
    const A = this.pendingInterceptors();
    if (A.length === 0)
      return;
    const r = new F0("interceptor", "interceptors").pluralize(A.length);
    throw new k0(`
${r.count} ${r.noun} ${r.is} pending:

${e.format(A)}
`.trim());
  }
};
var v0 = T0;
const { kProxy: L0, kClose: M0, kDestroy: G0, kInterceptors: Y0 } = Je, { URL: YE } = rd, JE = ma, J0 = Oi, _0 = da, { InvalidArgumentError: Kn, RequestAbortedError: O0 } = Te, _E = fa, Un = Symbol("proxy agent"), Bo = Symbol("proxy client"), Io = Symbol("proxy headers"), Zc = Symbol("request tls settings"), H0 = Symbol("proxy tls settings"), OE = Symbol("connect endpoint function");
function P0(t) {
  return t === "https:" ? 443 : 80;
}
function V0(t) {
  if (typeof t == "string" && (t = { uri: t }), !t || !t.uri)
    throw new Kn("Proxy opts.uri is mandatory");
  return {
    uri: t.uri,
    protocol: t.protocol || "https"
  };
}
function W0(t, e) {
  return new J0(t, e);
}
let x0 = class extends _0 {
  constructor(e) {
    if (super(e), this[L0] = V0(e), this[Un] = new JE(e), this[Y0] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], typeof e == "string" && (e = { uri: e }), !e || !e.uri)
      throw new Kn("Proxy opts.uri is mandatory");
    const { clientFactory: A = W0 } = e;
    if (typeof A != "function")
      throw new Kn("Proxy opts.clientFactory must be a function.");
    if (this[Zc] = e.requestTls, this[H0] = e.proxyTls, this[Io] = e.headers || {}, e.auth && e.token)
      throw new Kn("opts.auth cannot be used in combination with opts.token");
    e.auth ? this[Io]["proxy-authorization"] = `Basic ${e.auth}` : e.token && (this[Io]["proxy-authorization"] = e.token);
    const r = new YE(e.uri), { origin: s, port: n, host: i } = r, a = _E({ ...e.proxyTls });
    this[OE] = _E({ ...e.requestTls }), this[Bo] = A(r, { connect: a }), this[Un] = new JE({
      ...e,
      connect: async (o, c) => {
        let g = o.host;
        o.port || (g += `:${P0(o.protocol)}`);
        try {
          const { socket: h, statusCode: E } = await this[Bo].connect({
            origin: s,
            port: n,
            path: g,
            signal: o.signal,
            headers: {
              ...this[Io],
              host: i
            }
          });
          if (E !== 200 && (h.on("error", () => {
          }).destroy(), c(new O0("Proxy response !== 200 when HTTP Tunneling"))), o.protocol !== "https:") {
            c(null, h);
            return;
          }
          let Q;
          this[Zc] ? Q = this[Zc].servername : Q = o.servername, this[OE]({ ...o, servername: Q, httpSocket: h }, c);
        } catch (h) {
          c(h);
        }
      }
    });
  }
  dispatch(e, A) {
    const { host: r } = new YE(e.origin), s = q0(e.headers);
    return j0(s), this[Un].dispatch(
      {
        ...e,
        headers: {
          ...s,
          host: r
        }
      },
      A
    );
  }
  async [M0]() {
    await this[Un].close(), await this[Bo].close();
  }
  async [G0]() {
    await this[Un].destroy(), await this[Bo].destroy();
  }
};
function q0(t) {
  if (Array.isArray(t)) {
    const e = {};
    for (let A = 0; A < t.length; A += 2)
      e[t[A]] = t[A + 1];
    return e;
  }
  return t;
}
function j0(t) {
  if (t && Object.keys(t).find((A) => A.toLowerCase() === "proxy-authorization"))
    throw new Kn("Proxy-Authorization should be sent in ProxyAgent constructor");
}
var Z0 = x0;
const wB = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: z0 } = Te, X0 = ma;
yB() === void 0 && mB(new X0());
function mB(t) {
  if (!t || typeof t.dispatch != "function")
    throw new z0("Argument agent must implement Agent");
  Object.defineProperty(globalThis, wB, {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !1
  });
}
function yB() {
  return globalThis[wB];
}
var Vi = {
  setGlobalDispatcher: mB,
  getGlobalDispatcher: yB
}, $0 = class {
  constructor(e) {
    this.handler = e;
  }
  onConnect(...e) {
    return this.handler.onConnect(...e);
  }
  onError(...e) {
    return this.handler.onError(...e);
  }
  onUpgrade(...e) {
    return this.handler.onUpgrade(...e);
  }
  onHeaders(...e) {
    return this.handler.onHeaders(...e);
  }
  onData(...e) {
    return this.handler.onData(...e);
  }
  onComplete(...e) {
    return this.handler.onComplete(...e);
  }
  onBodySent(...e) {
    return this.handler.onBodySent(...e);
  }
}, zc, HE;
function In() {
  if (HE)
    return zc;
  HE = 1;
  const { kHeadersList: t } = Je, { kGuard: e } = Or(), { kEnumerableProperty: A } = fe, {
    makeIterator: r,
    isValidHeaderName: s,
    isValidHeaderValue: n
  } = yt(), { webidl: i } = WA(), a = eA, o = Symbol("headers map"), c = Symbol("headers map sorted");
  function g(C) {
    let u = C.length;
    for (; /[\r\n\t ]/.test(C.charAt(--u)); )
      ;
    return C.slice(0, u + 1).replace(/^[\r\n\t ]+/, "");
  }
  function h(C, u) {
    if (Array.isArray(u))
      for (const B of u) {
        if (B.length !== 2)
          throw i.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${B.length}.`
          });
        C.append(B[0], B[1]);
      }
    else if (typeof u == "object" && u !== null)
      for (const [B, I] of Object.entries(u))
        C.append(B, I);
    else
      throw i.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
      });
  }
  class E {
    constructor(u) {
      /** @type {[string, string][]|null} */
      L(this, "cookies", null);
      u instanceof E ? (this[o] = new Map(u[o]), this[c] = u[c], this.cookies = u.cookies) : (this[o] = new Map(u), this[c] = null);
    }
    // https://fetch.spec.whatwg.org/#header-list-contains
    contains(u) {
      return u = u.toLowerCase(), this[o].has(u);
    }
    clear() {
      this[o].clear(), this[c] = null, this.cookies = null;
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-append
    append(u, B) {
      this[c] = null;
      const I = u.toLowerCase(), d = this[o].get(I);
      if (d) {
        const w = I === "cookie" ? "; " : ", ";
        this[o].set(I, {
          name: d.name,
          value: `${d.value}${w}${B}`
        });
      } else
        this[o].set(I, { name: u, value: B });
      I === "set-cookie" && (this.cookies ?? (this.cookies = []), this.cookies.push(B));
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-set
    set(u, B) {
      this[c] = null;
      const I = u.toLowerCase();
      return I === "set-cookie" && (this.cookies = [B]), this[o].set(I, { name: u, value: B });
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-delete
    delete(u) {
      return this[c] = null, u = u.toLowerCase(), u === "set-cookie" && (this.cookies = null), this[o].delete(u);
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-get
    get(u) {
      var B;
      return this.contains(u) ? ((B = this[o].get(u.toLowerCase())) == null ? void 0 : B.value) ?? null : null;
    }
    *[Symbol.iterator]() {
      for (const [u, { value: B }] of this[o])
        yield [u, B];
    }
    get entries() {
      const u = {};
      if (this[o].size)
        for (const { name: B, value: I } of this[o].values())
          u[B] = I;
      return u;
    }
  }
  class Q {
    constructor(u = void 0) {
      this[t] = new E(), this[e] = "none", u !== void 0 && (u = i.converters.HeadersInit(u), h(this, u));
    }
    // https://fetch.spec.whatwg.org/#dom-headers-append
    append(u, B) {
      if (i.brandCheck(this, Q), i.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), u = i.converters.ByteString(u), B = i.converters.ByteString(B), B = g(B), s(u)) {
        if (!n(B))
          throw i.errors.invalidArgument({
            prefix: "Headers.append",
            value: B,
            type: "header value"
          });
      } else
        throw i.errors.invalidArgument({
          prefix: "Headers.append",
          value: u,
          type: "header name"
        });
      if (this[e] === "immutable")
        throw new TypeError("immutable");
      return this[e], this[t].append(u, B);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-delete
    delete(u) {
      if (i.brandCheck(this, Q), i.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), u = i.converters.ByteString(u), !s(u))
        throw i.errors.invalidArgument({
          prefix: "Headers.delete",
          value: u,
          type: "header name"
        });
      if (this[e] === "immutable")
        throw new TypeError("immutable");
      if (this[e], !!this[t].contains(u))
        return this[t].delete(u);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-get
    get(u) {
      if (i.brandCheck(this, Q), i.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), u = i.converters.ByteString(u), !s(u))
        throw i.errors.invalidArgument({
          prefix: "Headers.get",
          value: u,
          type: "header name"
        });
      return this[t].get(u);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-has
    has(u) {
      if (i.brandCheck(this, Q), i.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), u = i.converters.ByteString(u), !s(u))
        throw i.errors.invalidArgument({
          prefix: "Headers.has",
          value: u,
          type: "header name"
        });
      return this[t].contains(u);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-set
    set(u, B) {
      if (i.brandCheck(this, Q), i.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), u = i.converters.ByteString(u), B = i.converters.ByteString(B), B = g(B), s(u)) {
        if (!n(B))
          throw i.errors.invalidArgument({
            prefix: "Headers.set",
            value: B,
            type: "header value"
          });
      } else
        throw i.errors.invalidArgument({
          prefix: "Headers.set",
          value: u,
          type: "header name"
        });
      if (this[e] === "immutable")
        throw new TypeError("immutable");
      return this[e], this[t].set(u, B);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-getsetcookie
    getSetCookie() {
      i.brandCheck(this, Q);
      const u = this[t].cookies;
      return u ? [...u] : [];
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
    get [c]() {
      if (this[t][c])
        return this[t][c];
      const u = [], B = [...this[t]].sort((d, w) => d[0] < w[0] ? -1 : 1), I = this[t].cookies;
      for (const [d, w] of B)
        if (d === "set-cookie")
          for (const m of I)
            u.push([d, m]);
        else
          a(w !== null), u.push([d, w]);
      return this[t][c] = u, u;
    }
    keys() {
      return i.brandCheck(this, Q), r(
        () => [...this[c].values()],
        "Headers",
        "key"
      );
    }
    values() {
      return i.brandCheck(this, Q), r(
        () => [...this[c].values()],
        "Headers",
        "value"
      );
    }
    entries() {
      return i.brandCheck(this, Q), r(
        () => [...this[c].values()],
        "Headers",
        "key+value"
      );
    }
    /**
     * @param {(value: string, key: string, self: Headers) => void} callbackFn
     * @param {unknown} thisArg
     */
    forEach(u, B = globalThis) {
      if (i.brandCheck(this, Q), i.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), typeof u != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'."
        );
      for (const [I, d] of this)
        u.apply(B, [d, I, this]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return i.brandCheck(this, Q), this[t];
    }
  }
  return Q.prototype[Symbol.iterator] = Q.prototype.entries, Object.defineProperties(Q.prototype, {
    append: A,
    delete: A,
    get: A,
    has: A,
    set: A,
    getSetCookie: A,
    keys: A,
    values: A,
    entries: A,
    forEach: A,
    [Symbol.iterator]: { enumerable: !1 },
    [Symbol.toStringTag]: {
      value: "Headers",
      configurable: !0
    }
  }), i.converters.HeadersInit = function(C) {
    if (i.util.Type(C) === "Object")
      return C[Symbol.iterator] ? i.converters["sequence<sequence<ByteString>>"](C) : i.converters["record<ByteString, ByteString>"](C);
    throw i.errors.conversionFailed({
      prefix: "Headers constructor",
      argument: "Argument 1",
      types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
    });
  }, zc = {
    fill: h,
    Headers: Q,
    HeadersList: E
  }, zc;
}
var Xc, PE;
function Fl() {
  if (PE)
    return Xc;
  PE = 1;
  const { Headers: t, HeadersList: e, fill: A } = In(), { extractBody: r, cloneBody: s, mixinBody: n } = Ia(), i = fe, { kEnumerableProperty: a } = i, {
    isValidReasonPhrase: o,
    isCancelled: c,
    isAborted: g,
    isBlobLike: h,
    serializeJavascriptValueToJSONString: E,
    isErrorLike: Q,
    isomorphicEncode: C
  } = yt(), {
    redirectStatusSet: u,
    nullBodyStatus: B,
    DOMException: I
  } = fs(), { kState: d, kHeaders: w, kGuard: m, kRealm: p } = Or(), { webidl: R } = WA(), { FormData: D } = Rl(), { getGlobalOrigin: S } = _i(), { URLSerializer: v } = Ot(), { kHeadersList: T } = Je, X = eA, { types: K } = Jt, z = globalThis.ReadableStream || Yr.ReadableStream, ue = new TextEncoder("utf-8");
  class Y {
    // Creates network error Response.
    static error() {
      const M = { settingsObject: {} }, _ = new Y();
      return _[d] = ne(), _[p] = M, _[w][T] = _[d].headersList, _[w][m] = "immutable", _[w][p] = M, _;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(M, _ = {}) {
      R.argumentLengthCheck(arguments, 1, { header: "Response.json" }), _ !== null && (_ = R.converters.ResponseInit(_));
      const J = ue.encode(
        E(M)
      ), P = r(J), G = { settingsObject: {} }, V = new Y();
      return V[p] = G, V[w][m] = "response", V[w][p] = G, F(V, _, { body: P[0], type: "application/json" }), V;
    }
    // Creates a redirect Response that redirects to url with status status.
    static redirect(M, _ = 302) {
      const J = { settingsObject: {} };
      R.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), M = R.converters.USVString(M), _ = R.converters["unsigned short"](_);
      let P;
      try {
        P = new URL(M, S());
      } catch (ae) {
        throw Object.assign(new TypeError("Failed to parse URL from " + M), {
          cause: ae
        });
      }
      if (!u.has(_))
        throw new RangeError("Invalid status code " + _);
      const G = new Y();
      G[p] = J, G[w][m] = "immutable", G[w][p] = J, G[d].status = _;
      const V = C(v(P));
      return G[d].headersList.append("location", V), G;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(M = null, _ = {}) {
      M !== null && (M = R.converters.BodyInit(M)), _ = R.converters.ResponseInit(_), this[p] = { settingsObject: {} }, this[d] = re({}), this[w] = new t(), this[w][m] = "response", this[w][T] = this[d].headersList, this[w][p] = this[p];
      let J = null;
      if (M != null) {
        const [P, G] = r(M);
        J = { body: P, type: G };
      }
      F(this, _, J);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
      return R.brandCheck(this, Y), this[d].type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
      R.brandCheck(this, Y);
      const M = this[d].urlList, _ = M[M.length - 1] ?? null;
      return _ === null ? "" : v(_, !0);
    }
    // Returns whether response was obtained through a redirect.
    get redirected() {
      return R.brandCheck(this, Y), this[d].urlList.length > 1;
    }
    // Returns response’s status.
    get status() {
      return R.brandCheck(this, Y), this[d].status;
    }
    // Returns whether response’s status is an ok status.
    get ok() {
      return R.brandCheck(this, Y), this[d].status >= 200 && this[d].status <= 299;
    }
    // Returns response’s status message.
    get statusText() {
      return R.brandCheck(this, Y), this[d].statusText;
    }
    // Returns response’s headers as Headers.
    get headers() {
      return R.brandCheck(this, Y), this[w];
    }
    get body() {
      return R.brandCheck(this, Y), this[d].body ? this[d].body.stream : null;
    }
    get bodyUsed() {
      return R.brandCheck(this, Y), !!this[d].body && i.isDisturbed(this[d].body.stream);
    }
    // Returns a clone of response.
    clone() {
      if (R.brandCheck(this, Y), this.bodyUsed || this.body && this.body.locked)
        throw R.errors.exception({
          header: "Response.clone",
          message: "Body has already been consumed."
        });
      const M = ee(this[d]), _ = new Y();
      return _[d] = M, _[p] = this[p], _[w][T] = M.headersList, _[w][m] = this[w][m], _[w][p] = this[w][p], _;
    }
  }
  n(Y), Object.defineProperties(Y.prototype, {
    type: a,
    url: a,
    status: a,
    ok: a,
    redirected: a,
    statusText: a,
    headers: a,
    clone: a,
    body: a,
    bodyUsed: a,
    [Symbol.toStringTag]: {
      value: "Response",
      configurable: !0
    }
  }), Object.defineProperties(Y, {
    json: a,
    redirect: a,
    error: a
  });
  function ee(f) {
    if (f.internalResponse)
      return k(
        ee(f.internalResponse),
        f.type
      );
    const M = re({ ...f, body: null });
    return f.body != null && (M.body = s(f.body)), M;
  }
  function re(f) {
    return {
      aborted: !1,
      rangeRequested: !1,
      timingAllowPassed: !1,
      requestIncludesCredentials: !1,
      type: "default",
      status: 200,
      timingInfo: null,
      cacheState: "",
      statusText: "",
      ...f,
      headersList: f.headersList ? new e(f.headersList) : new e(),
      urlList: f.urlList ? [...f.urlList] : []
    };
  }
  function ne(f) {
    const M = Q(f);
    return re({
      type: "error",
      status: 0,
      error: M ? f : new Error(f && String(f)),
      aborted: f && f.name === "AbortError"
    });
  }
  function Z(f, M) {
    return M = {
      internalResponse: f,
      ...M
    }, new Proxy(f, {
      get(_, J) {
        return J in M ? M[J] : _[J];
      },
      set(_, J, P) {
        return X(!(J in M)), _[J] = P, !0;
      }
    });
  }
  function k(f, M) {
    if (M === "basic")
      return Z(f, {
        type: "basic",
        headersList: f.headersList
      });
    if (M === "cors")
      return Z(f, {
        type: "cors",
        headersList: f.headersList
      });
    if (M === "opaque")
      return Z(f, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
      });
    if (M === "opaqueredirect")
      return Z(f, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
      });
    X(!1);
  }
  function q(f, M = null) {
    return X(c(f)), g(f) ? ne(Object.assign(new I("The operation was aborted.", "AbortError"), { cause: M })) : ne(Object.assign(new I("Request was cancelled."), { cause: M }));
  }
  function F(f, M, _) {
    if (M.status !== null && (M.status < 200 || M.status > 599))
      throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in M && M.statusText != null && !o(String(M.statusText)))
      throw new TypeError("Invalid statusText");
    if ("status" in M && M.status != null && (f[d].status = M.status), "statusText" in M && M.statusText != null && (f[d].statusText = M.statusText), "headers" in M && M.headers != null && A(f[w], M.headers), _) {
      if (B.includes(f.status))
        throw R.errors.exception({
          header: "Response constructor",
          message: "Invalid response status code " + f.status
        });
      f[d].body = _.body, _.type != null && !f[d].headersList.contains("Content-Type") && f[d].headersList.append("content-type", _.type);
    }
  }
  return R.converters.ReadableStream = R.interfaceConverter(
    z
  ), R.converters.FormData = R.interfaceConverter(
    D
  ), R.converters.URLSearchParams = R.interfaceConverter(
    URLSearchParams
  ), R.converters.XMLHttpRequestBodyInit = function(f) {
    return typeof f == "string" ? R.converters.USVString(f) : h(f) ? R.converters.Blob(f, { strict: !1 }) : K.isAnyArrayBuffer(f) || K.isTypedArray(f) || K.isDataView(f) ? R.converters.BufferSource(f) : i.isFormDataLike(f) ? R.converters.FormData(f, { strict: !1 }) : f instanceof URLSearchParams ? R.converters.URLSearchParams(f) : R.converters.DOMString(f);
  }, R.converters.BodyInit = function(f) {
    return f instanceof z ? R.converters.ReadableStream(f) : f != null && f[Symbol.asyncIterator] ? f : R.converters.XMLHttpRequestBodyInit(f);
  }, R.converters.ResponseInit = R.dictionaryConverter([
    {
      key: "status",
      converter: R.converters["unsigned short"],
      defaultValue: 200
    },
    {
      key: "statusText",
      converter: R.converters.ByteString,
      defaultValue: ""
    },
    {
      key: "headers",
      converter: R.converters.HeadersInit
    }
  ]), Xc = {
    makeNetworkError: ne,
    makeResponse: re,
    makeAppropriateNetworkError: q,
    filterResponse: k,
    Response: Y,
    cloneResponse: ee
  }, Xc;
}
var $c, VE;
function Da() {
  if (VE)
    return $c;
  VE = 1;
  const { extractBody: t, mixinBody: e, cloneBody: A } = Ia(), { Headers: r, fill: s, HeadersList: n } = In(), { FinalizationRegistry: i } = XC(), a = fe, {
    isValidHTTPToken: o,
    sameOrigin: c,
    normalizeMethod: g,
    makePolicyContainer: h
  } = yt(), {
    forbiddenMethodsSet: E,
    corsSafeListedMethodsSet: Q,
    referrerPolicy: C,
    requestRedirect: u,
    requestMode: B,
    requestCredentials: I,
    requestCache: d,
    requestDuplex: w
  } = fs(), { kEnumerableProperty: m } = a, { kHeaders: p, kSignal: R, kState: D, kGuard: S, kRealm: v } = Or(), { webidl: T } = WA(), { getGlobalOrigin: X } = _i(), { URLSerializer: K } = Ot(), { kHeadersList: z } = Je, ue = eA, { getMaxListeners: Y, setMaxListeners: ee, getEventListeners: re, defaultMaxListeners: ne } = un;
  let Z = globalThis.TransformStream;
  const k = Symbol("init"), q = Symbol("abortController"), F = new i(({ signal: J, abort: P }) => {
    J.removeEventListener("abort", P);
  });
  class f {
    // https://fetch.spec.whatwg.org/#dom-request
    constructor(P, G = {}) {
      var UA, ws;
      if (P === k)
        return;
      T.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), P = T.converters.RequestInfo(P), G = T.converters.RequestInit(G), this[v] = {
        settingsObject: {
          baseUrl: X(),
          get origin() {
            var y;
            return (y = this.baseUrl) == null ? void 0 : y.origin;
          },
          policyContainer: h()
        }
      };
      let V = null, ae = null;
      const oe = this[v].settingsObject.baseUrl;
      let he = null;
      if (typeof P == "string") {
        let y;
        try {
          y = new URL(P, oe);
        } catch (W) {
          throw new TypeError("Failed to parse URL from " + P, { cause: W });
        }
        if (y.username || y.password)
          throw new TypeError(
            "Request cannot be constructed from a URL that includes credentials: " + P
          );
        V = M({ urlList: [y] }), ae = "cors";
      } else
        ue(P instanceof f), V = P[D], he = P[R];
      const _e = this[v].settingsObject.origin;
      let Ge = "client";
      if (((ws = (UA = V.window) == null ? void 0 : UA.constructor) == null ? void 0 : ws.name) === "EnvironmentSettingsObject" && c(V.window, _e) && (Ge = V.window), G.window != null)
        throw new TypeError(`'window' option '${Ge}' must be null`);
      if ("window" in G && (Ge = "no-window"), V = M({
        // URL request’s URL.
        // undici implementation note: this is set as the first item in request's urlList in makeRequest
        // method request’s method.
        method: V.method,
        // header list A copy of request’s header list.
        // undici implementation note: headersList is cloned in makeRequest
        headersList: V.headersList,
        // unsafe-request flag Set.
        unsafeRequest: V.unsafeRequest,
        // client This’s relevant settings object.
        client: this[v].settingsObject,
        // window window.
        window: Ge,
        // priority request’s priority.
        priority: V.priority,
        // origin request’s origin. The propagation of the origin is only significant for navigation requests
        // being handled by a service worker. In this scenario a request can have an origin that is different
        // from the current client.
        origin: V.origin,
        // referrer request’s referrer.
        referrer: V.referrer,
        // referrer policy request’s referrer policy.
        referrerPolicy: V.referrerPolicy,
        // mode request’s mode.
        mode: V.mode,
        // credentials mode request’s credentials mode.
        credentials: V.credentials,
        // cache mode request’s cache mode.
        cache: V.cache,
        // redirect mode request’s redirect mode.
        redirect: V.redirect,
        // integrity metadata request’s integrity metadata.
        integrity: V.integrity,
        // keepalive request’s keepalive.
        keepalive: V.keepalive,
        // reload-navigation flag request’s reload-navigation flag.
        reloadNavigation: V.reloadNavigation,
        // history-navigation flag request’s history-navigation flag.
        historyNavigation: V.historyNavigation,
        // URL list A clone of request’s URL list.
        urlList: [...V.urlList]
      }), Object.keys(G).length > 0 && (V.mode === "navigate" && (V.mode = "same-origin"), V.reloadNavigation = !1, V.historyNavigation = !1, V.origin = "client", V.referrer = "client", V.referrerPolicy = "", V.url = V.urlList[V.urlList.length - 1], V.urlList = [V.url]), G.referrer !== void 0) {
        const y = G.referrer;
        if (y === "")
          V.referrer = "no-referrer";
        else {
          let W;
          try {
            W = new URL(y, oe);
          } catch (Ae) {
            throw new TypeError(`Referrer "${y}" is not a valid URL.`, { cause: Ae });
          }
          W.protocol === "about:" && W.hostname === "client" || _e && !c(W, this[v].settingsObject.baseUrl) ? V.referrer = "client" : V.referrer = W;
        }
      }
      G.referrerPolicy !== void 0 && (V.referrerPolicy = G.referrerPolicy);
      let me;
      if (G.mode !== void 0 ? me = G.mode : me = ae, me === "navigate")
        throw T.errors.exception({
          header: "Request constructor",
          message: "invalid request mode navigate."
        });
      if (me != null && (V.mode = me), G.credentials !== void 0 && (V.credentials = G.credentials), G.cache !== void 0 && (V.cache = G.cache), V.cache === "only-if-cached" && V.mode !== "same-origin")
        throw new TypeError(
          "'only-if-cached' can be set only with 'same-origin' mode"
        );
      if (G.redirect !== void 0 && (V.redirect = G.redirect), G.integrity !== void 0 && G.integrity != null && (V.integrity = String(G.integrity)), G.keepalive !== void 0 && (V.keepalive = !!G.keepalive), G.method !== void 0) {
        let y = G.method;
        if (!o(G.method))
          throw TypeError(`'${G.method}' is not a valid HTTP method.`);
        if (E.has(y.toUpperCase()))
          throw TypeError(`'${G.method}' HTTP method is unsupported.`);
        y = g(G.method), V.method = y;
      }
      G.signal !== void 0 && (he = G.signal), this[D] = V;
      const Re = new AbortController();
      if (this[R] = Re.signal, this[R][v] = this[v], he != null) {
        if (!he || typeof he.aborted != "boolean" || typeof he.addEventListener != "function")
          throw new TypeError(
            "Failed to construct 'Request': member signal is not of type AbortSignal."
          );
        if (he.aborted)
          Re.abort(he.reason);
        else {
          this[q] = Re;
          const y = new WeakRef(Re), W = function() {
            const Ae = y.deref();
            Ae !== void 0 && Ae.abort(this.reason);
          };
          try {
            (typeof Y == "function" && Y(he) === ne || re(he, "abort").length >= ne) && ee(100, he);
          } catch {
          }
          a.addAbortListener(he, W), F.register(Re, { signal: he, abort: W });
        }
      }
      if (this[p] = new r(), this[p][z] = V.headersList, this[p][S] = "request", this[p][v] = this[v], me === "no-cors") {
        if (!Q.has(V.method))
          throw new TypeError(
            `'${V.method} is unsupported in no-cors mode.`
          );
        this[p][S] = "request-no-cors";
      }
      if (Object.keys(G).length !== 0) {
        let y = new r(this[p]);
        if (G.headers !== void 0 && (y = G.headers), this[p][z].clear(), y.constructor.name === "Headers")
          for (const [W, Ae] of y)
            this[p].append(W, Ae);
        else
          s(this[p], y);
      }
      const We = P instanceof f ? P[D].body : null;
      if ((G.body != null || We != null) && (V.method === "GET" || V.method === "HEAD"))
        throw new TypeError("Request with GET/HEAD method cannot have body.");
      let Ie = null;
      if (G.body != null) {
        const [y, W] = t(
          G.body,
          V.keepalive
        );
        Ie = y, W && !this[p][z].contains("content-type") && this[p].append("content-type", W);
      }
      const de = Ie ?? We;
      if (de != null && de.source == null) {
        if (Ie != null && G.duplex == null)
          throw new TypeError("RequestInit: duplex option is required when sending a body.");
        if (V.mode !== "same-origin" && V.mode !== "cors")
          throw new TypeError(
            'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
          );
        V.useCORSPreflightFlag = !0;
      }
      let we = de;
      if (Ie == null && We != null) {
        if (a.isDisturbed(We.stream) || We.stream.locked)
          throw new TypeError(
            "Cannot construct a Request with a Request object that has already been used."
          );
        Z || (Z = Yr.TransformStream);
        const y = new Z();
        We.stream.pipeThrough(y), we = {
          source: We.source,
          length: We.length,
          stream: y.readable
        };
      }
      this[D].body = we;
    }
    // Returns request’s HTTP method, which is "GET" by default.
    get method() {
      return T.brandCheck(this, f), this[D].method;
    }
    // Returns the URL of request as a string.
    get url() {
      return T.brandCheck(this, f), K(this[D].url);
    }
    // Returns a Headers object consisting of the headers associated with request.
    // Note that headers added in the network layer by the user agent will not
    // be accounted for in this object, e.g., the "Host" header.
    get headers() {
      return T.brandCheck(this, f), this[p];
    }
    // Returns the kind of resource requested by request, e.g., "document"
    // or "script".
    get destination() {
      return T.brandCheck(this, f), this[D].destination;
    }
    // Returns the referrer of request. Its value can be a same-origin URL if
    // explicitly set in init, the empty string to indicate no referrer, and
    // "about:client" when defaulting to the global’s default. This is used
    // during fetching to determine the value of the `Referer` header of the
    // request being made.
    get referrer() {
      return T.brandCheck(this, f), this[D].referrer === "no-referrer" ? "" : this[D].referrer === "client" ? "about:client" : this[D].referrer.toString();
    }
    // Returns the referrer policy associated with request.
    // This is used during fetching to compute the value of the request’s
    // referrer.
    get referrerPolicy() {
      return T.brandCheck(this, f), this[D].referrerPolicy;
    }
    // Returns the mode associated with request, which is a string indicating
    // whether the request will use CORS, or will be restricted to same-origin
    // URLs.
    get mode() {
      return T.brandCheck(this, f), this[D].mode;
    }
    // Returns the credentials mode associated with request,
    // which is a string indicating whether credentials will be sent with the
    // request always, never, or only when sent to a same-origin URL.
    get credentials() {
      return this[D].credentials;
    }
    // Returns the cache mode associated with request,
    // which is a string indicating how the request will
    // interact with the browser’s cache when fetching.
    get cache() {
      return T.brandCheck(this, f), this[D].cache;
    }
    // Returns the redirect mode associated with request,
    // which is a string indicating how redirects for the
    // request will be handled during fetching. A request
    // will follow redirects by default.
    get redirect() {
      return T.brandCheck(this, f), this[D].redirect;
    }
    // Returns request’s subresource integrity metadata, which is a
    // cryptographic hash of the resource being fetched. Its value
    // consists of multiple hashes separated by whitespace. [SRI]
    get integrity() {
      return T.brandCheck(this, f), this[D].integrity;
    }
    // Returns a boolean indicating whether or not request can outlive the
    // global in which it was created.
    get keepalive() {
      return T.brandCheck(this, f), this[D].keepalive;
    }
    // Returns a boolean indicating whether or not request is for a reload
    // navigation.
    get isReloadNavigation() {
      return T.brandCheck(this, f), this[D].reloadNavigation;
    }
    // Returns a boolean indicating whether or not request is for a history
    // navigation (a.k.a. back-foward navigation).
    get isHistoryNavigation() {
      return T.brandCheck(this, f), this[D].historyNavigation;
    }
    // Returns the signal associated with request, which is an AbortSignal
    // object indicating whether or not request has been aborted, and its
    // abort event handler.
    get signal() {
      return T.brandCheck(this, f), this[R];
    }
    get body() {
      return T.brandCheck(this, f), this[D].body ? this[D].body.stream : null;
    }
    get bodyUsed() {
      return T.brandCheck(this, f), !!this[D].body && a.isDisturbed(this[D].body.stream);
    }
    get duplex() {
      return T.brandCheck(this, f), "half";
    }
    // Returns a clone of request.
    clone() {
      var ae;
      if (T.brandCheck(this, f), this.bodyUsed || (ae = this.body) != null && ae.locked)
        throw new TypeError("unusable");
      const P = _(this[D]), G = new f(k);
      G[D] = P, G[v] = this[v], G[p] = new r(), G[p][z] = P.headersList, G[p][S] = this[p][S], G[p][v] = this[p][v];
      const V = new AbortController();
      return this.signal.aborted ? V.abort(this.signal.reason) : a.addAbortListener(
        this.signal,
        () => {
          V.abort(this.signal.reason);
        }
      ), G[R] = V.signal, G;
    }
  }
  e(f);
  function M(J) {
    const P = {
      method: "GET",
      localURLsOnly: !1,
      unsafeRequest: !1,
      body: null,
      client: null,
      reservedClient: null,
      replacesClientId: "",
      window: "client",
      keepalive: !1,
      serviceWorkers: "all",
      initiator: "",
      destination: "",
      priority: null,
      origin: "client",
      policyContainer: "client",
      referrer: "client",
      referrerPolicy: "",
      mode: "no-cors",
      useCORSPreflightFlag: !1,
      credentials: "same-origin",
      useCredentials: !1,
      cache: "default",
      redirect: "follow",
      integrity: "",
      cryptoGraphicsNonceMetadata: "",
      parserMetadata: "",
      reloadNavigation: !1,
      historyNavigation: !1,
      userActivation: !1,
      taintedOrigin: !1,
      redirectCount: 0,
      responseTainting: "basic",
      preventNoCacheCacheControlHeaderModification: !1,
      done: !1,
      timingAllowFailed: !1,
      ...J,
      headersList: J.headersList ? new n(J.headersList) : new n()
    };
    return P.url = P.urlList[0], P;
  }
  function _(J) {
    const P = M({ ...J, body: null });
    return J.body != null && (P.body = A(J.body)), P;
  }
  return Object.defineProperties(f.prototype, {
    method: m,
    url: m,
    headers: m,
    redirect: m,
    clone: m,
    signal: m,
    duplex: m,
    destination: m,
    body: m,
    bodyUsed: m,
    isHistoryNavigation: m,
    isReloadNavigation: m,
    keepalive: m,
    integrity: m,
    cache: m,
    credentials: m,
    attribute: m,
    referrerPolicy: m,
    referrer: m,
    mode: m,
    [Symbol.toStringTag]: {
      value: "Request",
      configurable: !0
    }
  }), T.converters.Request = T.interfaceConverter(
    f
  ), T.converters.RequestInfo = function(J) {
    return typeof J == "string" ? T.converters.USVString(J) : J instanceof f ? T.converters.Request(J) : T.converters.USVString(J);
  }, T.converters.AbortSignal = T.interfaceConverter(
    AbortSignal
  ), T.converters.RequestInit = T.dictionaryConverter([
    {
      key: "method",
      converter: T.converters.ByteString
    },
    {
      key: "headers",
      converter: T.converters.HeadersInit
    },
    {
      key: "body",
      converter: T.nullableConverter(
        T.converters.BodyInit
      )
    },
    {
      key: "referrer",
      converter: T.converters.USVString
    },
    {
      key: "referrerPolicy",
      converter: T.converters.DOMString,
      // https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
      allowedValues: C
    },
    {
      key: "mode",
      converter: T.converters.DOMString,
      // https://fetch.spec.whatwg.org/#concept-request-mode
      allowedValues: B
    },
    {
      key: "credentials",
      converter: T.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcredentials
      allowedValues: I
    },
    {
      key: "cache",
      converter: T.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcache
      allowedValues: d
    },
    {
      key: "redirect",
      converter: T.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestredirect
      allowedValues: u
    },
    {
      key: "integrity",
      converter: T.converters.DOMString
    },
    {
      key: "keepalive",
      converter: T.converters.boolean
    },
    {
      key: "signal",
      converter: T.nullableConverter(
        (J) => T.converters.AbortSignal(
          J,
          { strict: !1 }
        )
      )
    },
    {
      key: "window",
      converter: T.converters.any
    },
    {
      key: "duplex",
      converter: T.converters.DOMString,
      allowedValues: w
    }
  ]), $c = { Request: f, makeRequest: M }, $c;
}
var Kc, WE;
function Nl() {
  if (WE)
    return Kc;
  WE = 1;
  const {
    Response: t,
    makeNetworkError: e,
    makeAppropriateNetworkError: A,
    filterResponse: r,
    makeResponse: s
  } = Fl(), { Headers: n } = In(), { Request: i, makeRequest: a } = Da(), o = sd, {
    bytesMatch: c,
    makePolicyContainer: g,
    clonePolicyContainer: h,
    requestBadPort: E,
    TAOCheck: Q,
    appendRequestOriginHeader: C,
    responseLocationURL: u,
    requestCurrentURL: B,
    setRequestReferrerPolicyOnRedirect: I,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: d,
    createOpaqueTimingInfo: w,
    appendFetchMetadata: m,
    corsCheck: p,
    crossOriginResourcePolicyCheck: R,
    determineRequestsReferrer: D,
    coarsenedSharedCurrentTime: S,
    createDeferredPromise: v,
    isBlobLike: T,
    sameOrigin: X,
    isCancelled: K,
    isAborted: z,
    isErrorLike: ue,
    fullyReadBody: Y,
    readableStreamClose: ee,
    isomorphicEncode: re,
    urlIsLocal: ne,
    urlIsHttpHttpsScheme: Z,
    urlHasHttpsScheme: k
  } = yt(), { kState: q, kHeaders: F, kGuard: f, kRealm: M } = Or(), _ = eA, { safelyExtractBody: J } = Ia(), {
    redirectStatusSet: P,
    nullBodyStatus: G,
    safeMethodsSet: V,
    requestBodyHeader: ae,
    subresourceSet: oe,
    DOMException: he
  } = fs(), { kHeadersList: _e } = Je, Ge = un, { Readable: me, pipeline: Re } = _t, { addAbortListener: We, isErrored: Ie, isReadable: de, nodeMajor: we, nodeMinor: UA } = fe, { dataURLProcessor: ws, serializeAMimeType: y } = Ot(), { TransformStream: W } = Yr, { getGlobalDispatcher: Ae } = Vi, { webidl: Be } = WA(), { STATUS_CODES: pe } = En, Oe = ["GET", "HEAD"];
  let ke, BA = globalThis.ReadableStream;
  class ct extends Ge {
    constructor($) {
      super(), this.dispatcher = $, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate($) {
      var H;
      this.state === "ongoing" && (this.state = "terminated", (H = this.connection) == null || H.destroy($), this.emit("terminated", $));
    }
    // https://fetch.spec.whatwg.org/#fetch-controller-abort
    abort($) {
      var H;
      this.state === "ongoing" && (this.state = "aborted", $ || ($ = new he("The operation was aborted.", "AbortError")), this.serializedAbortReason = $, (H = this.connection) == null || H.destroy($), this.emit("terminated", $));
    }
  }
  function lr(U, $ = {}) {
    var Ce;
    Be.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
    const H = v();
    let x;
    try {
      x = new i(U, $);
    } catch (ye) {
      return H.reject(ye), H.promise;
    }
    const se = x[q];
    if (x.signal.aborted)
      return Ma(H, se, null, x.signal.reason), H.promise;
    const j = se.client.globalObject;
    ((Ce = j == null ? void 0 : j.constructor) == null ? void 0 : Ce.name) === "ServiceWorkerGlobalScope" && (se.serviceWorkers = "none");
    let Qe = null;
    const He = null;
    let xA = !1, xe = null;
    return We(
      x.signal,
      () => {
        xA = !0, _(xe != null), xe.abort(x.signal.reason), Ma(H, se, Qe, x.signal.reason);
      }
    ), xe = xl({
      request: se,
      processResponseEndOfBody: (ye) => Ht(ye, "fetch"),
      processResponse: (ye) => {
        if (xA)
          return Promise.resolve();
        if (ye.aborted)
          return Ma(H, se, Qe, xe.serializedAbortReason), Promise.resolve();
        if (ye.type === "error")
          return H.reject(
            Object.assign(new TypeError("fetch failed"), { cause: ye.error })
          ), Promise.resolve();
        Qe = new t(), Qe[q] = ye, Qe[M] = He, Qe[F][_e] = ye.headersList, Qe[F][f] = "immutable", Qe[F][M] = He, H.resolve(Qe);
      },
      dispatcher: $.dispatcher ?? Ae()
      // undici
    }), H.promise;
  }
  function Ht(U, $ = "other") {
    var j;
    if (U.type === "error" && U.aborted || !((j = U.urlList) != null && j.length))
      return;
    const H = U.urlList[0];
    let x = U.timingInfo, se = U.cacheState;
    Z(H) && x !== null && (x.timingAllowPassed || (x = w({
      startTime: x.startTime
    }), se = ""), x.endTime = S(), U.timingInfo = x, JI(
      x,
      H,
      $,
      globalThis,
      se
    ));
  }
  function JI(U, $, H, x, se) {
    (we > 18 || we === 18 && UA >= 2) && performance.markResourceTiming(U, $.href, H, x, se);
  }
  function Ma(U, $, H, x) {
    var j, Qe;
    if (x || (x = new he("The operation was aborted.", "AbortError")), U.reject(x), $.body != null && de((j = $.body) == null ? void 0 : j.stream) && $.body.stream.cancel(x).catch((He) => {
      if (He.code !== "ERR_INVALID_STATE")
        throw He;
    }), H == null)
      return;
    const se = H[q];
    se.body != null && de((Qe = se.body) == null ? void 0 : Qe.stream) && se.body.stream.cancel(x).catch((He) => {
      if (He.code !== "ERR_INVALID_STATE")
        throw He;
    });
  }
  function xl({
    request: U,
    processRequestBodyChunkLength: $,
    processRequestEndOfBody: H,
    processResponse: x,
    processResponseEndOfBody: se,
    processResponseConsumeBody: j,
    useParallelQueue: Qe = !1,
    dispatcher: He
    // undici
  }) {
    var ye, qA, Xe, Rt;
    let xA = null, xe = !1;
    U.client != null && (xA = U.client.globalObject, xe = U.client.crossOriginIsolatedCapability);
    const hr = S(xe), ji = w({
      startTime: hr
    }), Ce = {
      controller: new ct(He),
      request: U,
      timingInfo: ji,
      processRequestBodyChunkLength: $,
      processRequestEndOfBody: H,
      processResponse: x,
      processResponseConsumeBody: j,
      processResponseEndOfBody: se,
      taskDestination: xA,
      crossOriginIsolatedCapability: xe
    };
    if (_(!U.body || U.body.stream), U.window === "client" && (U.window = ((Xe = (qA = (ye = U.client) == null ? void 0 : ye.globalObject) == null ? void 0 : qA.constructor) == null ? void 0 : Xe.name) === "Window" ? U.client : "no-window"), U.origin === "client" && (U.origin = (Rt = U.client) == null ? void 0 : Rt.origin), U.policyContainer === "client" && (U.client != null ? U.policyContainer = h(
      U.client.policyContainer
    ) : U.policyContainer = g()), !U.headersList.contains("accept")) {
      const ve = "*/*";
      U.headersList.append("accept", ve);
    }
    return U.headersList.contains("accept-language") || U.headersList.append("accept-language", "*"), U.priority, oe.has(U.destination), ql(Ce).catch((ve) => {
      Ce.controller.terminate(ve);
    }), Ce.controller;
  }
  async function ql(U, $ = !1) {
    const H = U.request;
    let x = null;
    if (H.localURLsOnly && !ne(B(H)) && (x = e("local URLs only")), d(H), E(H) === "blocked" && (x = e("bad port")), H.referrerPolicy === "" && (H.referrerPolicy = H.policyContainer.referrerPolicy), H.referrer !== "no-referrer" && (H.referrer = D(H)), x === null && (x = await (async () => {
      const j = B(H);
      return (
        // - request’s current URL’s origin is same origin with request’s origin,
        //   and request’s response tainting is "basic"
        X(j, H.url) && H.responseTainting === "basic" || // request’s current URL’s scheme is "data"
        j.protocol === "data:" || // - request’s mode is "navigate" or "websocket"
        H.mode === "navigate" || H.mode === "websocket" ? (H.responseTainting = "basic", await jl(U)) : H.mode === "same-origin" ? e('request mode cannot be "same-origin"') : H.mode === "no-cors" ? H.redirect !== "follow" ? e(
          'redirect mode cannot be "follow" for "no-cors" request'
        ) : (H.responseTainting = "opaque", await jl(U)) : Z(B(H)) ? (H.responseTainting = "cors", await Zl(U)) : e("URL scheme must be a HTTP(S) scheme")
      );
    })()), $)
      return x;
    x.status !== 0 && !x.internalResponse && (H.responseTainting, H.responseTainting === "basic" ? x = r(x, "basic") : H.responseTainting === "cors" ? x = r(x, "cors") : H.responseTainting === "opaque" ? x = r(x, "opaque") : _(!1));
    let se = x.status === 0 ? x : x.internalResponse;
    if (se.urlList.length === 0 && se.urlList.push(...H.urlList), H.timingAllowFailed || (x.timingAllowPassed = !0), x.type === "opaque" && se.status === 206 && se.rangeRequested && !H.headers.contains("range") && (x = se = e()), x.status !== 0 && (H.method === "HEAD" || H.method === "CONNECT" || G.includes(se.status)) && (se.body = null, U.controller.dump = !0), H.integrity) {
      const j = (He) => Ga(U, e(He));
      if (H.responseTainting === "opaque" || x.body == null) {
        j(x.error);
        return;
      }
      const Qe = (He) => {
        if (!c(He, H.integrity)) {
          j("integrity mismatch");
          return;
        }
        x.body = J(He)[0], Ga(U, x);
      };
      await Y(x.body, Qe, j);
    } else
      Ga(U, x);
  }
  function jl(U) {
    if (K(U) && U.request.redirectCount === 0)
      return Promise.resolve(A(U));
    const { request: $ } = U, { protocol: H } = B($);
    switch (H) {
      case "about:":
        return Promise.resolve(e("about scheme is not supported"));
      case "blob:": {
        ke || (ke = ds.resolveObjectURL);
        const x = B($);
        if (x.search.length !== 0)
          return Promise.resolve(e("NetworkError when attempting to fetch resource."));
        const se = ke(x.toString());
        if ($.method !== "GET" || !T(se))
          return Promise.resolve(e("invalid method"));
        const j = J(se), Qe = j[0], He = re(`${Qe.length}`), xA = j[1] ?? "", xe = s({
          statusText: "OK",
          headersList: [
            ["content-length", { name: "Content-Length", value: He }],
            ["content-type", { name: "Content-Type", value: xA }]
          ]
        });
        return xe.body = Qe, Promise.resolve(xe);
      }
      case "data:": {
        const x = B($), se = ws(x);
        if (se === "failure")
          return Promise.resolve(e("failed to fetch the data URL"));
        const j = y(se.mimeType);
        return Promise.resolve(s({
          statusText: "OK",
          headersList: [
            ["content-type", { name: "Content-Type", value: j }]
          ],
          body: J(se.body)[0]
        }));
      }
      case "file:":
        return Promise.resolve(e("not implemented... yet..."));
      case "http:":
      case "https:":
        return Zl(U).catch((x) => e(x));
      default:
        return Promise.resolve(e("unknown scheme"));
    }
  }
  function _I(U, $) {
    U.request.done = !0, U.processResponseDone != null && queueMicrotask(() => U.processResponseDone($));
  }
  function Ga(U, $) {
    $.type === "error" && ($.urlList = [U.request.urlList[0]], $.timingInfo = w({
      startTime: U.timingInfo.startTime
    }));
    const H = () => {
      U.request.done = !0, U.processResponseEndOfBody != null && queueMicrotask(() => U.processResponseEndOfBody($));
    };
    if (U.processResponse != null && queueMicrotask(() => U.processResponse($)), $.body == null)
      H();
    else {
      const x = (j, Qe) => {
        Qe.enqueue(j);
      }, se = new W({
        start() {
        },
        transform: x,
        flush: H
      }, {
        size() {
          return 1;
        }
      }, {
        size() {
          return 1;
        }
      });
      $.body = { stream: $.body.stream.pipeThrough(se) };
    }
    if (U.processResponseConsumeBody != null) {
      const x = (j) => U.processResponseConsumeBody($, j), se = (j) => U.processResponseConsumeBody($, j);
      if ($.body == null)
        queueMicrotask(() => x(null));
      else
        return Y($.body, x, se);
      return Promise.resolve();
    }
  }
  async function Zl(U) {
    const $ = U.request;
    let H = null, x = null;
    const se = U.timingInfo;
    if ($.serviceWorkers, H === null) {
      if ($.redirect === "follow" && ($.serviceWorkers = "none"), x = H = await zl(U), $.responseTainting === "cors" && p($, H) === "failure")
        return e("cors failure");
      Q($, H) === "failure" && ($.timingAllowFailed = !0);
    }
    return ($.responseTainting === "opaque" || H.type === "opaque") && R(
      $.origin,
      $.client,
      $.destination,
      x
    ) === "blocked" ? e("blocked") : (P.has(x.status) && ($.redirect !== "manual" && U.controller.connection.destroy(), $.redirect === "error" ? H = e("unexpected redirect") : $.redirect === "manual" ? H = x : $.redirect === "follow" ? H = await OI(U, H) : _(!1)), H.timingInfo = se, H);
  }
  function OI(U, $) {
    const H = U.request, x = $.internalResponse ? $.internalResponse : $;
    let se;
    try {
      if (se = u(
        x,
        B(H).hash
      ), se == null)
        return $;
    } catch (Qe) {
      return Promise.resolve(e(Qe));
    }
    if (!Z(se))
      return Promise.resolve(e("URL scheme must be a HTTP(S) scheme"));
    if (H.redirectCount === 20)
      return Promise.resolve(e("redirect count exceeded"));
    if (H.redirectCount += 1, H.mode === "cors" && (se.username || se.password) && !X(H, se))
      return Promise.resolve(e('cross origin not allowed for request mode "cors"'));
    if (H.responseTainting === "cors" && (se.username || se.password))
      return Promise.resolve(e(
        'URL cannot contain credentials for request mode "cors"'
      ));
    if (x.status !== 303 && H.body != null && H.body.source == null)
      return Promise.resolve(e());
    if ([301, 302].includes(x.status) && H.method === "POST" || x.status === 303 && !Oe.includes(H.method)) {
      H.method = "GET", H.body = null;
      for (const Qe of ae)
        H.headersList.delete(Qe);
    }
    X(B(H), se) || (H.headersList.delete("authorization"), H.headersList.delete("cookie"), H.headersList.delete("host")), H.body != null && (_(H.body.source != null), H.body = J(H.body.source)[0]);
    const j = U.timingInfo;
    return j.redirectEndTime = j.postRedirectStartTime = S(U.crossOriginIsolatedCapability), j.redirectStartTime === 0 && (j.redirectStartTime = j.startTime), H.urlList.push(se), I(H, x), ql(U, !0);
  }
  async function zl(U, $ = !1, H = !1) {
    const x = U.request;
    let se = null, j = null, Qe = null;
    x.window === "no-window" && x.redirect === "error" ? (se = U, j = x) : (j = a(x), se = { ...U }, se.request = j);
    const He = x.credentials === "include" || x.credentials === "same-origin" && x.responseTainting === "basic", xA = j.body ? j.body.length : null;
    let xe = null;
    if (j.body == null && ["POST", "PUT"].includes(j.method) && (xe = "0"), xA != null && (xe = re(`${xA}`)), xe != null && j.headersList.append("content-length", xe), xA != null && j.keepalive, j.referrer instanceof URL && j.headersList.append("referer", re(j.referrer.href)), C(j), m(j), j.headersList.contains("user-agent") || j.headersList.append("user-agent", typeof esbuildDetection > "u" ? "undici" : "node"), j.cache === "default" && (j.headersList.contains("if-modified-since") || j.headersList.contains("if-none-match") || j.headersList.contains("if-unmodified-since") || j.headersList.contains("if-match") || j.headersList.contains("if-range")) && (j.cache = "no-store"), j.cache === "no-cache" && !j.preventNoCacheCacheControlHeaderModification && !j.headersList.contains("cache-control") && j.headersList.append("cache-control", "max-age=0"), (j.cache === "no-store" || j.cache === "reload") && (j.headersList.contains("pragma") || j.headersList.append("pragma", "no-cache"), j.headersList.contains("cache-control") || j.headersList.append("cache-control", "no-cache")), j.headersList.contains("range") && j.headersList.append("accept-encoding", "identity"), j.headersList.contains("accept-encoding") || (k(B(j)) ? j.headersList.append("accept-encoding", "br, gzip, deflate") : j.headersList.append("accept-encoding", "gzip, deflate")), j.headersList.delete("host"), j.cache = "no-store", j.mode !== "no-store" && j.mode, Qe == null) {
      if (j.mode === "only-if-cached")
        return e("only if cached");
      const hr = await HI(
        se,
        He,
        H
      );
      !V.has(j.method) && hr.status >= 200 && hr.status <= 399, Qe == null && (Qe = hr);
    }
    if (Qe.urlList = [...j.urlList], j.headersList.contains("range") && (Qe.rangeRequested = !0), Qe.requestIncludesCredentials = He, Qe.status === 407)
      return x.window === "no-window" ? e() : K(U) ? A(U) : e("proxy authentication required");
    if (
      // response’s status is 421
      Qe.status === 421 && // isNewConnectionFetch is false
      !H && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
      (x.body == null || x.body.source != null)
    ) {
      if (K(U))
        return A(U);
      U.controller.connection.destroy(), Qe = await zl(
        U,
        $,
        !0
      );
    }
    return Qe;
  }
  async function HI(U, $ = !1, H = !1) {
    _(!U.controller.connection || U.controller.connection.destroyed), U.controller.connection = {
      abort: null,
      destroyed: !1,
      destroy(Ce) {
        var ye;
        this.destroyed || (this.destroyed = !0, (ye = this.abort) == null || ye.call(this, Ce ?? new he("The operation was aborted.", "AbortError")));
      }
    };
    const x = U.request;
    let se = null;
    const j = U.timingInfo;
    x.cache = "no-store", x.mode;
    let Qe = null;
    if (x.body == null && U.processRequestEndOfBody)
      queueMicrotask(() => U.processRequestEndOfBody());
    else if (x.body != null) {
      const Ce = async function* (Xe) {
        var Rt;
        K(U) || (yield Xe, (Rt = U.processRequestBodyChunkLength) == null || Rt.call(U, Xe.byteLength));
      }, ye = () => {
        K(U) || U.processRequestEndOfBody && U.processRequestEndOfBody();
      }, qA = (Xe) => {
        K(U) || (Xe.name === "AbortError" ? U.controller.abort() : U.controller.terminate(Xe));
      };
      Qe = async function* () {
        try {
          for await (const Xe of x.body.stream)
            yield* Ce(Xe);
          ye();
        } catch (Xe) {
          qA(Xe);
        }
      }();
    }
    try {
      const { body: Ce, status: ye, statusText: qA, headersList: Xe, socket: Rt } = await ji({ body: Qe });
      if (Rt)
        se = s({ status: ye, statusText: qA, headersList: Xe, socket: Rt });
      else {
        const ve = Ce[Symbol.asyncIterator]();
        U.controller.next = () => ve.next(), se = s({ status: ye, statusText: qA, headersList: Xe });
      }
    } catch (Ce) {
      return Ce.name === "AbortError" ? (U.controller.connection.destroy(), A(U, Ce)) : e(Ce);
    }
    const He = () => {
      U.controller.resume();
    }, xA = (Ce) => {
      U.controller.abort(Ce);
    };
    BA || (BA = Yr.ReadableStream);
    const xe = new BA(
      {
        async start(Ce) {
          U.controller.controller = Ce;
        },
        async pull(Ce) {
          await He();
        },
        async cancel(Ce) {
          await xA(Ce);
        }
      },
      {
        highWaterMark: 0,
        size() {
          return 1;
        }
      }
    );
    se.body = { stream: xe }, U.controller.on("terminated", hr), U.controller.resume = async () => {
      for (; ; ) {
        let Ce, ye;
        try {
          const { done: qA, value: Xe } = await U.controller.next();
          if (z(U))
            break;
          Ce = qA ? void 0 : Xe;
        } catch (qA) {
          U.controller.ended && !j.encodedBodySize ? Ce = void 0 : (Ce = qA, ye = !0);
        }
        if (Ce === void 0) {
          ee(U.controller.controller), _I(U, se);
          return;
        }
        if (j.decodedBodySize += (Ce == null ? void 0 : Ce.byteLength) ?? 0, ye) {
          U.controller.terminate(Ce);
          return;
        }
        if (U.controller.controller.enqueue(new Uint8Array(Ce)), Ie(xe)) {
          U.controller.terminate();
          return;
        }
        if (!U.controller.controller.desiredSize)
          return;
      }
    };
    function hr(Ce) {
      z(U) ? (se.aborted = !0, de(xe) && U.controller.controller.error(
        U.controller.serializedAbortReason
      )) : de(xe) && U.controller.controller.error(new TypeError("terminated", {
        cause: ue(Ce) ? Ce : void 0
      })), U.controller.connection.destroy();
    }
    return se;
    async function ji({ body: Ce }) {
      const ye = B(x), qA = U.controller.dispatcher;
      return new Promise((Xe, Rt) => qA.dispatch(
        {
          path: ye.pathname + ye.search,
          origin: ye.origin,
          method: x.method,
          body: U.controller.dispatcher.isMockActive ? x.body && x.body.source : Ce,
          headers: x.headersList.entries,
          maxRedirections: 0,
          upgrade: x.mode === "websocket" ? "websocket" : void 0
        },
        {
          body: null,
          abort: null,
          onConnect(ve) {
            const { connection: AA } = U.controller;
            AA.destroyed ? ve(new he("The operation was aborted.", "AbortError")) : (U.controller.on("terminated", ve), this.abort = AA.abort = ve);
          },
          onHeaders(ve, AA, Ya, Zi) {
            if (ve < 200)
              return;
            let Er = [], pn = "";
            const wn = new n();
            if (Array.isArray(AA))
              for (let gt = 0; gt < AA.length; gt += 2) {
                const ur = AA[gt + 0].toString("latin1"), Hr = AA[gt + 1].toString("latin1");
                ur.toLowerCase() === "content-encoding" ? Er = Hr.toLowerCase().split(",").map((Ja) => Ja.trim()) : ur.toLowerCase() === "location" && (pn = Hr), wn.append(ur, Hr);
              }
            else {
              const gt = Object.keys(AA);
              for (const ur of gt) {
                const Hr = AA[ur];
                ur.toLowerCase() === "content-encoding" ? Er = Hr.toLowerCase().split(",").map((Ja) => Ja.trim()).reverse() : ur.toLowerCase() === "location" && (pn = Hr), wn.append(ur, Hr);
              }
            }
            this.body = new me({ read: Ya });
            const ms = [], PI = x.redirect === "follow" && pn && P.has(ve);
            if (x.method !== "HEAD" && x.method !== "CONNECT" && !G.includes(ve) && !PI)
              for (const gt of Er)
                if (gt === "x-gzip" || gt === "gzip")
                  ms.push(o.createGunzip({
                    // Be less strict when decoding compressed responses, since sometimes
                    // servers send slightly invalid responses that are still accepted
                    // by common browsers.
                    // Always using Z_SYNC_FLUSH is what cURL does.
                    flush: o.constants.Z_SYNC_FLUSH,
                    finishFlush: o.constants.Z_SYNC_FLUSH
                  }));
                else if (gt === "deflate")
                  ms.push(o.createInflate());
                else if (gt === "br")
                  ms.push(o.createBrotliDecompress());
                else {
                  ms.length = 0;
                  break;
                }
            return Xe({
              status: ve,
              statusText: Zi,
              headersList: wn[_e],
              body: ms.length ? Re(this.body, ...ms, () => {
              }) : this.body.on("error", () => {
              })
            }), !0;
          },
          onData(ve) {
            if (U.controller.dump)
              return;
            const AA = ve;
            return j.encodedBodySize += AA.byteLength, this.body.push(AA);
          },
          onComplete() {
            this.abort && U.controller.off("terminated", this.abort), U.controller.ended = !0, this.body.push(null);
          },
          onError(ve) {
            var AA;
            this.abort && U.controller.off("terminated", this.abort), (AA = this.body) == null || AA.destroy(ve), U.controller.terminate(ve), Rt(ve);
          },
          onUpgrade(ve, AA, Ya) {
            if (ve !== 101)
              return;
            const Zi = new n();
            for (let Er = 0; Er < AA.length; Er += 2) {
              const pn = AA[Er + 0].toString("latin1"), wn = AA[Er + 1].toString("latin1");
              Zi.append(pn, wn);
            }
            return Xe({
              status: ve,
              statusText: pe[ve],
              headersList: Zi[_e],
              socket: Ya
            }), !0;
          }
        }
      ));
    }
  }
  return Kc = {
    fetch: lr,
    Fetch: ct,
    fetching: xl,
    finalizeAndReportTiming: Ht
  }, Kc;
}
var eg, xE;
function RB() {
  return xE || (xE = 1, eg = {
    kState: Symbol("FileReader state"),
    kResult: Symbol("FileReader result"),
    kError: Symbol("FileReader error"),
    kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
    kEvents: Symbol("FileReader events"),
    kAborted: Symbol("FileReader aborted")
  }), eg;
}
var Ag, qE;
function K0() {
  if (qE)
    return Ag;
  qE = 1;
  const { webidl: t } = WA(), e = Symbol("ProgressEvent state");
  class A extends Event {
    constructor(s, n = {}) {
      s = t.converters.DOMString(s), n = t.converters.ProgressEventInit(n ?? {}), super(s, n), this[e] = {
        lengthComputable: n.lengthComputable,
        loaded: n.loaded,
        total: n.total
      };
    }
    get lengthComputable() {
      return t.brandCheck(this, A), this[e].lengthComputable;
    }
    get loaded() {
      return t.brandCheck(this, A), this[e].loaded;
    }
    get total() {
      return t.brandCheck(this, A), this[e].total;
    }
  }
  return t.converters.ProgressEventInit = t.dictionaryConverter([
    {
      key: "lengthComputable",
      converter: t.converters.boolean,
      defaultValue: !1
    },
    {
      key: "loaded",
      converter: t.converters["unsigned long long"],
      defaultValue: 0
    },
    {
      key: "total",
      converter: t.converters["unsigned long long"],
      defaultValue: 0
    },
    {
      key: "bubbles",
      converter: t.converters.boolean,
      defaultValue: !1
    },
    {
      key: "cancelable",
      converter: t.converters.boolean,
      defaultValue: !1
    },
    {
      key: "composed",
      converter: t.converters.boolean,
      defaultValue: !1
    }
  ]), Ag = {
    ProgressEvent: A
  }, Ag;
}
var tg, jE;
function eR() {
  if (jE)
    return tg;
  jE = 1;
  function t(e) {
    if (!e)
      return "failure";
    switch (e.trim().toLowerCase()) {
      case "unicode-1-1-utf-8":
      case "unicode11utf8":
      case "unicode20utf8":
      case "utf-8":
      case "utf8":
      case "x-unicode20utf8":
        return "UTF-8";
      case "866":
      case "cp866":
      case "csibm866":
      case "ibm866":
        return "IBM866";
      case "csisolatin2":
      case "iso-8859-2":
      case "iso-ir-101":
      case "iso8859-2":
      case "iso88592":
      case "iso_8859-2":
      case "iso_8859-2:1987":
      case "l2":
      case "latin2":
        return "ISO-8859-2";
      case "csisolatin3":
      case "iso-8859-3":
      case "iso-ir-109":
      case "iso8859-3":
      case "iso88593":
      case "iso_8859-3":
      case "iso_8859-3:1988":
      case "l3":
      case "latin3":
        return "ISO-8859-3";
      case "csisolatin4":
      case "iso-8859-4":
      case "iso-ir-110":
      case "iso8859-4":
      case "iso88594":
      case "iso_8859-4":
      case "iso_8859-4:1988":
      case "l4":
      case "latin4":
        return "ISO-8859-4";
      case "csisolatincyrillic":
      case "cyrillic":
      case "iso-8859-5":
      case "iso-ir-144":
      case "iso8859-5":
      case "iso88595":
      case "iso_8859-5":
      case "iso_8859-5:1988":
        return "ISO-8859-5";
      case "arabic":
      case "asmo-708":
      case "csiso88596e":
      case "csiso88596i":
      case "csisolatinarabic":
      case "ecma-114":
      case "iso-8859-6":
      case "iso-8859-6-e":
      case "iso-8859-6-i":
      case "iso-ir-127":
      case "iso8859-6":
      case "iso88596":
      case "iso_8859-6":
      case "iso_8859-6:1987":
        return "ISO-8859-6";
      case "csisolatingreek":
      case "ecma-118":
      case "elot_928":
      case "greek":
      case "greek8":
      case "iso-8859-7":
      case "iso-ir-126":
      case "iso8859-7":
      case "iso88597":
      case "iso_8859-7":
      case "iso_8859-7:1987":
      case "sun_eu_greek":
        return "ISO-8859-7";
      case "csiso88598e":
      case "csisolatinhebrew":
      case "hebrew":
      case "iso-8859-8":
      case "iso-8859-8-e":
      case "iso-ir-138":
      case "iso8859-8":
      case "iso88598":
      case "iso_8859-8":
      case "iso_8859-8:1988":
      case "visual":
        return "ISO-8859-8";
      case "csiso88598i":
      case "iso-8859-8-i":
      case "logical":
        return "ISO-8859-8-I";
      case "csisolatin6":
      case "iso-8859-10":
      case "iso-ir-157":
      case "iso8859-10":
      case "iso885910":
      case "l6":
      case "latin6":
        return "ISO-8859-10";
      case "iso-8859-13":
      case "iso8859-13":
      case "iso885913":
        return "ISO-8859-13";
      case "iso-8859-14":
      case "iso8859-14":
      case "iso885914":
        return "ISO-8859-14";
      case "csisolatin9":
      case "iso-8859-15":
      case "iso8859-15":
      case "iso885915":
      case "iso_8859-15":
      case "l9":
        return "ISO-8859-15";
      case "iso-8859-16":
        return "ISO-8859-16";
      case "cskoi8r":
      case "koi":
      case "koi8":
      case "koi8-r":
      case "koi8_r":
        return "KOI8-R";
      case "koi8-ru":
      case "koi8-u":
        return "KOI8-U";
      case "csmacintosh":
      case "mac":
      case "macintosh":
      case "x-mac-roman":
        return "macintosh";
      case "iso-8859-11":
      case "iso8859-11":
      case "iso885911":
      case "tis-620":
      case "windows-874":
        return "windows-874";
      case "cp1250":
      case "windows-1250":
      case "x-cp1250":
        return "windows-1250";
      case "cp1251":
      case "windows-1251":
      case "x-cp1251":
        return "windows-1251";
      case "ansi_x3.4-1968":
      case "ascii":
      case "cp1252":
      case "cp819":
      case "csisolatin1":
      case "ibm819":
      case "iso-8859-1":
      case "iso-ir-100":
      case "iso8859-1":
      case "iso88591":
      case "iso_8859-1":
      case "iso_8859-1:1987":
      case "l1":
      case "latin1":
      case "us-ascii":
      case "windows-1252":
      case "x-cp1252":
        return "windows-1252";
      case "cp1253":
      case "windows-1253":
      case "x-cp1253":
        return "windows-1253";
      case "cp1254":
      case "csisolatin5":
      case "iso-8859-9":
      case "iso-ir-148":
      case "iso8859-9":
      case "iso88599":
      case "iso_8859-9":
      case "iso_8859-9:1989":
      case "l5":
      case "latin5":
      case "windows-1254":
      case "x-cp1254":
        return "windows-1254";
      case "cp1255":
      case "windows-1255":
      case "x-cp1255":
        return "windows-1255";
      case "cp1256":
      case "windows-1256":
      case "x-cp1256":
        return "windows-1256";
      case "cp1257":
      case "windows-1257":
      case "x-cp1257":
        return "windows-1257";
      case "cp1258":
      case "windows-1258":
      case "x-cp1258":
        return "windows-1258";
      case "x-mac-cyrillic":
      case "x-mac-ukrainian":
        return "x-mac-cyrillic";
      case "chinese":
      case "csgb2312":
      case "csiso58gb231280":
      case "gb2312":
      case "gb_2312":
      case "gb_2312-80":
      case "gbk":
      case "iso-ir-58":
      case "x-gbk":
        return "GBK";
      case "gb18030":
        return "gb18030";
      case "big5":
      case "big5-hkscs":
      case "cn-big5":
      case "csbig5":
      case "x-x-big5":
        return "Big5";
      case "cseucpkdfmtjapanese":
      case "euc-jp":
      case "x-euc-jp":
        return "EUC-JP";
      case "csiso2022jp":
      case "iso-2022-jp":
        return "ISO-2022-JP";
      case "csshiftjis":
      case "ms932":
      case "ms_kanji":
      case "shift-jis":
      case "shift_jis":
      case "sjis":
      case "windows-31j":
      case "x-sjis":
        return "Shift_JIS";
      case "cseuckr":
      case "csksc56011987":
      case "euc-kr":
      case "iso-ir-149":
      case "korean":
      case "ks_c_5601-1987":
      case "ks_c_5601-1989":
      case "ksc5601":
      case "ksc_5601":
      case "windows-949":
        return "EUC-KR";
      case "csiso2022kr":
      case "hz-gb-2312":
      case "iso-2022-cn":
      case "iso-2022-cn-ext":
      case "iso-2022-kr":
      case "replacement":
        return "replacement";
      case "unicodefffe":
      case "utf-16be":
        return "UTF-16BE";
      case "csunicode":
      case "iso-10646-ucs-2":
      case "ucs-2":
      case "unicode":
      case "unicodefeff":
      case "utf-16":
      case "utf-16le":
        return "UTF-16LE";
      case "x-user-defined":
        return "x-user-defined";
      default:
        return "failure";
    }
  }
  return tg = {
    getEncoding: t
  }, tg;
}
var rg, ZE;
function AR() {
  if (ZE)
    return rg;
  ZE = 1;
  const {
    kState: t,
    kError: e,
    kResult: A,
    kAborted: r,
    kLastProgressEventFired: s
  } = RB(), { ProgressEvent: n } = K0(), { getEncoding: i } = eR(), { DOMException: a } = fs(), { serializeAMimeType: o, parseMIMEType: c } = Ot(), { types: g } = Jt, { StringDecoder: h } = nd, { btoa: E } = ds, Q = {
    enumerable: !0,
    writable: !1,
    configurable: !1
  };
  function C(m, p, R, D) {
    if (m[t] === "loading")
      throw new a("Invalid state", "InvalidStateError");
    m[t] = "loading", m[A] = null, m[e] = null;
    const v = p.stream().getReader(), T = [];
    let X = v.read(), K = !0;
    (async () => {
      for (; !m[r]; )
        try {
          const { done: z, value: ue } = await X;
          if (K && !m[r] && queueMicrotask(() => {
            u("loadstart", m);
          }), K = !1, !z && g.isUint8Array(ue))
            T.push(ue), (m[s] === void 0 || Date.now() - m[s] >= 50) && !m[r] && (m[s] = Date.now(), queueMicrotask(() => {
              u("progress", m);
            })), X = v.read();
          else if (z) {
            queueMicrotask(() => {
              m[t] = "done";
              try {
                const Y = B(T, R, p.type, D);
                if (m[r])
                  return;
                m[A] = Y, u("load", m);
              } catch (Y) {
                m[e] = Y, u("error", m);
              }
              m[t] !== "loading" && u("loadend", m);
            });
            break;
          }
        } catch (z) {
          if (m[r])
            return;
          queueMicrotask(() => {
            m[t] = "done", m[e] = z, u("error", m), m[t] !== "loading" && u("loadend", m);
          });
          break;
        }
    })();
  }
  function u(m, p) {
    const R = new n(m, {
      bubbles: !1,
      cancelable: !1
    });
    p.dispatchEvent(R);
  }
  function B(m, p, R, D) {
    switch (p) {
      case "DataURL": {
        let S = "data:";
        const v = c(R || "application/octet-stream");
        v !== "failure" && (S += o(v)), S += ";base64,";
        const T = new h("latin1");
        for (const X of m)
          S += E(T.write(X));
        return S += E(T.end()), S;
      }
      case "Text": {
        let S = "failure";
        if (D && (S = i(D)), S === "failure" && R) {
          const v = c(R);
          v !== "failure" && (S = i(v.parameters.get("charset")));
        }
        return S === "failure" && (S = "UTF-8"), I(m, S);
      }
      case "ArrayBuffer":
        return w(m).buffer;
      case "BinaryString": {
        let S = "";
        const v = new h("latin1");
        for (const T of m)
          S += v.write(T);
        return S += v.end(), S;
      }
    }
  }
  function I(m, p) {
    const R = w(m), D = d(R);
    let S = 0;
    D !== null && (p = D, S = D === "UTF-8" ? 3 : 2);
    const v = R.slice(S);
    return new TextDecoder(p).decode(v);
  }
  function d(m) {
    const [p, R, D] = m;
    return p === 239 && R === 187 && D === 191 ? "UTF-8" : p === 254 && R === 255 ? "UTF-16BE" : p === 255 && R === 254 ? "UTF-16LE" : null;
  }
  function w(m) {
    const p = m.reduce((D, S) => D + S.byteLength, 0);
    let R = 0;
    return m.reduce((D, S) => (D.set(S, R), R += S.byteLength, D), new Uint8Array(p));
  }
  return rg = {
    staticPropertyDescriptors: Q,
    readOperation: C,
    fireAProgressEvent: u
  }, rg;
}
var sg, zE;
function tR() {
  if (zE)
    return sg;
  zE = 1;
  const {
    staticPropertyDescriptors: t,
    readOperation: e,
    fireAProgressEvent: A
  } = AR(), {
    kState: r,
    kError: s,
    kResult: n,
    kEvents: i,
    kAborted: a
  } = RB(), { webidl: o } = WA(), { kEnumerableProperty: c } = fe;
  class g extends EventTarget {
    constructor() {
      super(), this[r] = "empty", this[n] = null, this[s] = null, this[i] = {
        loadend: null,
        error: null,
        abort: null,
        load: null,
        progress: null,
        loadstart: null
      };
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dfn-readAsArrayBuffer
     * @param {import('buffer').Blob} blob
     */
    readAsArrayBuffer(E) {
      o.brandCheck(this, g), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), E = o.converters.Blob(E, { strict: !1 }), e(this, E, "ArrayBuffer");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#readAsBinaryString
     * @param {import('buffer').Blob} blob
     */
    readAsBinaryString(E) {
      o.brandCheck(this, g), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), E = o.converters.Blob(E, { strict: !1 }), e(this, E, "BinaryString");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#readAsDataText
     * @param {import('buffer').Blob} blob
     * @param {string?} encoding
     */
    readAsText(E, Q = void 0) {
      o.brandCheck(this, g), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), E = o.converters.Blob(E, { strict: !1 }), Q !== void 0 && (Q = o.converters.DOMString(Q)), e(this, E, "Text", Q);
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dfn-readAsDataURL
     * @param {import('buffer').Blob} blob
     */
    readAsDataURL(E) {
      o.brandCheck(this, g), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), E = o.converters.Blob(E, { strict: !1 }), e(this, E, "DataURL");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dfn-abort
     */
    abort() {
      if (this[r] === "empty" || this[r] === "done") {
        this[n] = null;
        return;
      }
      this[r] === "loading" && (this[r] = "done", this[n] = null), this[a] = !0, A("abort", this), this[r] !== "loading" && A("loadend", this);
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dom-filereader-readystate
     */
    get readyState() {
      switch (o.brandCheck(this, g), this[r]) {
        case "empty":
          return this.EMPTY;
        case "loading":
          return this.LOADING;
        case "done":
          return this.DONE;
      }
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dom-filereader-result
     */
    get result() {
      return o.brandCheck(this, g), this[n];
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dom-filereader-error
     */
    get error() {
      return o.brandCheck(this, g), this[s];
    }
    get onloadend() {
      return o.brandCheck(this, g), this[i].loadend;
    }
    set onloadend(E) {
      o.brandCheck(this, g), this[i].loadend && this.removeEventListener("loadend", this[i].loadend), typeof E == "function" ? (this[i].loadend = E, this.addEventListener("loadend", E)) : this[i].loadend = null;
    }
    get onerror() {
      return o.brandCheck(this, g), this[i].error;
    }
    set onerror(E) {
      o.brandCheck(this, g), this[i].error && this.removeEventListener("error", this[i].error), typeof E == "function" ? (this[i].error = E, this.addEventListener("error", E)) : this[i].error = null;
    }
    get onloadstart() {
      return o.brandCheck(this, g), this[i].loadstart;
    }
    set onloadstart(E) {
      o.brandCheck(this, g), this[i].loadstart && this.removeEventListener("loadstart", this[i].loadstart), typeof E == "function" ? (this[i].loadstart = E, this.addEventListener("loadstart", E)) : this[i].loadstart = null;
    }
    get onprogress() {
      return o.brandCheck(this, g), this[i].progress;
    }
    set onprogress(E) {
      o.brandCheck(this, g), this[i].progress && this.removeEventListener("progress", this[i].progress), typeof E == "function" ? (this[i].progress = E, this.addEventListener("progress", E)) : this[i].progress = null;
    }
    get onload() {
      return o.brandCheck(this, g), this[i].load;
    }
    set onload(E) {
      o.brandCheck(this, g), this[i].load && this.removeEventListener("load", this[i].load), typeof E == "function" ? (this[i].load = E, this.addEventListener("load", E)) : this[i].load = null;
    }
    get onabort() {
      return o.brandCheck(this, g), this[i].abort;
    }
    set onabort(E) {
      o.brandCheck(this, g), this[i].abort && this.removeEventListener("abort", this[i].abort), typeof E == "function" ? (this[i].abort = E, this.addEventListener("abort", E)) : this[i].abort = null;
    }
  }
  return g.EMPTY = g.prototype.EMPTY = 0, g.LOADING = g.prototype.LOADING = 1, g.DONE = g.prototype.DONE = 2, Object.defineProperties(g.prototype, {
    EMPTY: t,
    LOADING: t,
    DONE: t,
    readAsArrayBuffer: c,
    readAsBinaryString: c,
    readAsText: c,
    readAsDataURL: c,
    abort: c,
    readyState: c,
    result: c,
    error: c,
    onloadstart: c,
    onprogress: c,
    onload: c,
    onabort: c,
    onerror: c,
    onloadend: c,
    [Symbol.toStringTag]: {
      value: "FileReader",
      writable: !1,
      enumerable: !1,
      configurable: !0
    }
  }), Object.defineProperties(g, {
    EMPTY: t,
    LOADING: t,
    DONE: t
  }), sg = {
    FileReader: g
  }, sg;
}
var ng, XE;
function Ul() {
  return XE || (XE = 1, ng = {
    kConstruct: Symbol("constructable")
  }), ng;
}
var ig, $E;
function rR() {
  if ($E)
    return ig;
  $E = 1;
  const t = eA, { URLSerializer: e } = Ot(), { isValidHeaderName: A } = yt();
  function r(n, i, a = !1) {
    const o = e(n, a), c = e(i, a);
    return o === c;
  }
  function s(n) {
    t(n !== null);
    const i = [];
    for (let a of n.split(",")) {
      if (a = a.trim(), a.length) {
        if (!A(a))
          continue;
      } else
        continue;
      i.push(a);
    }
    return i;
  }
  return ig = {
    urlEquals: r,
    fieldValues: s
  }, ig;
}
var og, KE;
function sR() {
  var R, D, Mo, v, vs, X, DB;
  if (KE)
    return og;
  KE = 1;
  const { kConstruct: t } = Ul(), { urlEquals: e, fieldValues: A } = rR(), { kEnumerableProperty: r, isDisturbed: s } = fe, { kHeadersList: n } = Je, { webidl: i } = WA(), { Response: a, cloneResponse: o } = Fl(), { Request: c } = Da(), { kState: g, kHeaders: h, kGuard: E, kRealm: Q } = Or(), { fetching: C } = Nl(), { urlIsHttpHttpsScheme: u, createDeferredPromise: B, readAllBytes: I } = yt(), d = eA, { getGlobalDispatcher: w } = Vi, z = class z {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#batch-cache-operations-algorithm
       * @param {CacheBatchOperation[]} operations
       * @returns {requestResponseList}
       */
      N(this, D);
      /**
       * @see https://w3c.github.io/ServiceWorker/#query-cache
       * @param {any} requestQuery
       * @param {import('../../types/cache').CacheQueryOptions} options
       * @param {requestResponseList} targetStorage
       * @returns {requestResponseList}
       */
      N(this, v);
      /**
       * @see https://w3c.github.io/ServiceWorker/#request-matches-cached-item-algorithm
       * @param {any} requestQuery
       * @param {any} request
       * @param {any | null} response
       * @param {import('../../types/cache').CacheQueryOptions | undefined} options
       * @returns {boolean}
       */
      N(this, X);
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-request-response-list
       * @type {requestResponseList}
       */
      N(this, R, void 0);
      arguments[0] !== t && i.illegalConstructor(), b(this, R, arguments[1]);
    }
    async match(Y, ee = {}) {
      i.brandCheck(this, z), i.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), Y = i.converters.RequestInfo(Y), ee = i.converters.CacheQueryOptions(ee);
      const re = await this.matchAll(Y, ee);
      if (re.length !== 0)
        return re[0];
    }
    async matchAll(Y = void 0, ee = {}) {
      var k;
      i.brandCheck(this, z), Y !== void 0 && (Y = i.converters.RequestInfo(Y)), ee = i.converters.CacheQueryOptions(ee);
      let re = null;
      if (Y !== void 0)
        if (Y instanceof c) {
          if (re = Y[g], re.method !== "GET" && !ee.ignoreMethod)
            return [];
        } else
          typeof Y == "string" && (re = new c(Y)[g]);
      const ne = [];
      if (Y === void 0)
        for (const q of l(this, R))
          ne.push(q[1]);
      else {
        const q = O(this, v, vs).call(this, re, ee);
        for (const F of q)
          ne.push(F[1]);
      }
      const Z = [];
      for (const q of ne) {
        const F = new a(((k = q.body) == null ? void 0 : k.source) ?? null), f = F[g].body;
        F[g] = q, F[g].body = f, F[h][n] = q.headersList, F[h][E] = "immutable", Z.push(F);
      }
      return Object.freeze(Z);
    }
    async add(Y) {
      i.brandCheck(this, z), i.argumentLengthCheck(arguments, 1, { header: "Cache.add" }), Y = i.converters.RequestInfo(Y);
      const ee = [Y];
      return await this.addAll(ee);
    }
    async addAll(Y) {
      i.brandCheck(this, z), i.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), Y = i.converters["sequence<RequestInfo>"](Y);
      const ee = [], re = [];
      for (const _ of Y) {
        if (typeof _ == "string")
          continue;
        const J = _[g];
        if (!u(J.url) || J.method !== "GET")
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme when method is not GET."
          });
      }
      const ne = [];
      for (const _ of Y) {
        const J = new c(_)[g];
        if (!u(J.url))
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme."
          });
        J.initiator = "fetch", J.destination = "subresource", re.push(J);
        const P = B();
        ne.push(C({
          request: J,
          dispatcher: w(),
          processResponse(G) {
            if (G.type === "error" || G.status === 206 || G.status < 200 || G.status > 299)
              P.reject(i.errors.exception({
                header: "Cache.addAll",
                message: "Received an invalid status code or the request failed."
              }));
            else if (G.headersList.contains("vary")) {
              const V = A(G.headersList.get("vary"));
              for (const ae of V)
                if (ae === "*") {
                  P.reject(i.errors.exception({
                    header: "Cache.addAll",
                    message: "invalid vary field value"
                  }));
                  for (const oe of ne)
                    oe.abort();
                  return;
                }
            }
          },
          processResponseEndOfBody(G) {
            if (G.aborted) {
              P.reject(new DOMException("aborted", "AbortError"));
              return;
            }
            P.resolve(G);
          }
        })), ee.push(P.promise);
      }
      const k = await Promise.all(ee), q = [];
      let F = 0;
      for (const _ of k) {
        const J = {
          type: "put",
          // 7.3.2
          request: re[F],
          // 7.3.3
          response: _
          // 7.3.4
        };
        q.push(J), F++;
      }
      const f = B();
      let M = null;
      try {
        O(this, D, Mo).call(this, q);
      } catch (_) {
        M = _;
      }
      return queueMicrotask(() => {
        M === null ? f.resolve(void 0) : f.reject(M);
      }), f.promise;
    }
    async put(Y, ee) {
      i.brandCheck(this, z), i.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), Y = i.converters.RequestInfo(Y), ee = i.converters.Response(ee);
      let re = null;
      if (Y instanceof c ? re = Y[g] : re = new c(Y)[g], !u(re.url) || re.method !== "GET")
        throw i.errors.exception({
          header: "Cache.put",
          message: "Expected an http/s scheme when method is not GET"
        });
      const ne = ee[g];
      if (ne.status === 206)
        throw i.errors.exception({
          header: "Cache.put",
          message: "Got 206 status"
        });
      if (ne.headersList.contains("vary")) {
        const J = A(ne.headersList.get("vary"));
        for (const P of J)
          if (P === "*")
            throw i.errors.exception({
              header: "Cache.put",
              message: "Got * vary field value"
            });
      }
      if (ne.body && (s(ne.body.stream) || ne.body.stream.locked))
        throw i.errors.exception({
          header: "Cache.put",
          message: "Response body is locked or disturbed"
        });
      const Z = o(ne), k = B();
      if (ne.body != null) {
        const P = ne.body.stream.getReader();
        I(P).then(k.resolve, k.reject);
      } else
        k.resolve(void 0);
      const q = [], F = {
        type: "put",
        // 14.
        request: re,
        // 15.
        response: Z
        // 16.
      };
      q.push(F);
      const f = await k.promise;
      Z.body != null && (Z.body.source = f);
      const M = B();
      let _ = null;
      try {
        O(this, D, Mo).call(this, q);
      } catch (J) {
        _ = J;
      }
      return queueMicrotask(() => {
        _ === null ? M.resolve() : M.reject(_);
      }), M.promise;
    }
    async delete(Y, ee = {}) {
      i.brandCheck(this, z), i.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), Y = i.converters.RequestInfo(Y), ee = i.converters.CacheQueryOptions(ee);
      let re = null;
      if (Y instanceof c) {
        if (re = Y[g], re.method !== "GET" && !ee.ignoreMethod)
          return !1;
      } else
        d(typeof Y == "string"), re = new c(Y)[g];
      const ne = [], Z = {
        type: "delete",
        request: re,
        options: ee
      };
      ne.push(Z);
      const k = B();
      let q = null, F;
      try {
        F = O(this, D, Mo).call(this, ne);
      } catch (f) {
        q = f;
      }
      return queueMicrotask(() => {
        q === null ? k.resolve(!!(F != null && F.length)) : k.reject(q);
      }), k.promise;
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#dom-cache-keys
     * @param {any} request
     * @param {import('../../types/cache').CacheQueryOptions} options
     * @returns {readonly Request[]}
     */
    async keys(Y = void 0, ee = {}) {
      i.brandCheck(this, z), Y !== void 0 && (Y = i.converters.RequestInfo(Y)), ee = i.converters.CacheQueryOptions(ee);
      let re = null;
      if (Y !== void 0)
        if (Y instanceof c) {
          if (re = Y[g], re.method !== "GET" && !ee.ignoreMethod)
            return [];
        } else
          typeof Y == "string" && (re = new c(Y)[g]);
      const ne = B(), Z = [];
      if (Y === void 0)
        for (const k of l(this, R))
          Z.push(k[0]);
      else {
        const k = O(this, v, vs).call(this, re, ee);
        for (const q of k)
          Z.push(q[0]);
      }
      return queueMicrotask(() => {
        const k = [];
        for (const q of Z) {
          const F = new c("https://a");
          F[g] = q, F[h][n] = q.headersList, F[h][E] = "immutable", F[Q] = q.client, k.push(F);
        }
        ne.resolve(Object.freeze(k));
      }), ne.promise;
    }
  };
  R = new WeakMap(), D = new WeakSet(), Mo = function(Y) {
    const ee = l(this, R), re = [...ee], ne = [], Z = [];
    try {
      for (const k of Y) {
        if (k.type !== "delete" && k.type !== "put")
          throw i.errors.exception({
            header: "Cache.#batchCacheOperations",
            message: 'operation type does not match "delete" or "put"'
          });
        if (k.type === "delete" && k.response != null)
          throw i.errors.exception({
            header: "Cache.#batchCacheOperations",
            message: "delete operation should not have an associated response"
          });
        if (O(this, v, vs).call(this, k.request, k.options, ne).length)
          throw new DOMException("???", "InvalidStateError");
        let q;
        if (k.type === "delete") {
          if (q = O(this, v, vs).call(this, k.request, k.options), q.length === 0)
            return [];
          for (const F of q) {
            const f = ee.indexOf(F);
            d(f !== -1), ee.splice(f, 1);
          }
        } else if (k.type === "put") {
          if (k.response == null)
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "put operation should have an associated response"
            });
          const F = k.request;
          if (!u(F.url))
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "expected http or https scheme"
            });
          if (F.method !== "GET")
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "not get method"
            });
          if (k.options != null)
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "options must not be defined"
            });
          q = O(this, v, vs).call(this, k.request);
          for (const f of q) {
            const M = ee.indexOf(f);
            d(M !== -1), ee.splice(M, 1);
          }
          ee.push([k.request, k.response]), ne.push([k.request, k.response]);
        }
        Z.push([k.request, k.response]);
      }
      return Z;
    } catch (k) {
      throw l(this, R).length = 0, b(this, R, re), k;
    }
  }, v = new WeakSet(), vs = function(Y, ee, re) {
    const ne = [], Z = re ?? l(this, R);
    for (const k of Z) {
      const [q, F] = k;
      O(this, X, DB).call(this, Y, q, F, ee) && ne.push(k);
    }
    return ne;
  }, X = new WeakSet(), DB = function(Y, ee, re = null, ne) {
    const Z = new URL(Y.url), k = new URL(ee.url);
    if (ne != null && ne.ignoreSearch && (k.search = "", Z.search = ""), !e(Z, k, !0))
      return !1;
    if (re == null || ne != null && ne.ignoreVary || !re.headersList.contains("vary"))
      return !0;
    const q = A(re.headersList.get("vary"));
    for (const F of q) {
      if (F === "*")
        return !1;
      const f = ee.headersList.get(F), M = Y.headersList.get(F);
      if (f !== M)
        return !1;
    }
    return !0;
  };
  let m = z;
  Object.defineProperties(m.prototype, {
    [Symbol.toStringTag]: {
      value: "Cache",
      configurable: !0
    },
    match: r,
    matchAll: r,
    add: r,
    addAll: r,
    put: r,
    delete: r,
    keys: r
  });
  const p = [
    {
      key: "ignoreSearch",
      converter: i.converters.boolean,
      defaultValue: !1
    },
    {
      key: "ignoreMethod",
      converter: i.converters.boolean,
      defaultValue: !1
    },
    {
      key: "ignoreVary",
      converter: i.converters.boolean,
      defaultValue: !1
    }
  ];
  return i.converters.CacheQueryOptions = i.dictionaryConverter(p), i.converters.MultiCacheQueryOptions = i.dictionaryConverter([
    ...p,
    {
      key: "cacheName",
      converter: i.converters.DOMString
    }
  ]), i.converters.Response = i.interfaceConverter(a), i.converters["sequence<RequestInfo>"] = i.sequenceConverter(
    i.converters.RequestInfo
  ), og = {
    Cache: m
  }, og;
}
var ag, eu;
function nR() {
  var n;
  if (eu)
    return ag;
  eu = 1;
  const { kConstruct: t } = Ul(), { Cache: e } = sR(), { webidl: A } = WA(), { kEnumerableProperty: r } = fe, i = class i {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-name-to-cache-map
       * @type {Map<string, import('./cache').requestResponseList}
       */
      N(this, n, /* @__PURE__ */ new Map());
      arguments[0] !== t && A.illegalConstructor();
    }
    async match(o, c = {}) {
      if (A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), o = A.converters.RequestInfo(o), c = A.converters.MultiCacheQueryOptions(c), c.cacheName != null) {
        if (l(this, n).has(c.cacheName)) {
          const g = l(this, n).get(c.cacheName);
          return await new e(t, g).match(o, c);
        }
      } else
        for (const g of l(this, n).values()) {
          const E = await new e(t, g).match(o, c);
          if (E !== void 0)
            return E;
        }
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#cache-storage-has
     * @param {string} cacheName
     * @returns {Promise<boolean>}
     */
    async has(o) {
      return A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), o = A.converters.DOMString(o), l(this, n).has(o);
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#dom-cachestorage-open
     * @param {string} cacheName
     * @returns {Promise<Cache>}
     */
    async open(o) {
      if (A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), o = A.converters.DOMString(o), l(this, n).has(o)) {
        const g = l(this, n).get(o);
        return new e(t, g);
      }
      const c = [];
      return l(this, n).set(o, c), new e(t, c);
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#cache-storage-delete
     * @param {string} cacheName
     * @returns {Promise<boolean>}
     */
    async delete(o) {
      return A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), o = A.converters.DOMString(o), l(this, n).delete(o);
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#cache-storage-keys
     * @returns {string[]}
     */
    async keys() {
      return A.brandCheck(this, i), [...l(this, n).keys()];
    }
  };
  n = new WeakMap();
  let s = i;
  return Object.defineProperties(s.prototype, {
    [Symbol.toStringTag]: {
      value: "CacheStorage",
      configurable: !0
    },
    match: r,
    has: r,
    open: r,
    delete: r,
    keys: r
  }), ag = {
    CacheStorage: s
  }, ag;
}
var cg, Au;
function iR() {
  return Au || (Au = 1, cg = {
    maxAttributeValueSize: 1024,
    maxNameValuePairSize: 4096
  }), cg;
}
var gg, tu;
function bB() {
  if (tu)
    return gg;
  tu = 1;
  const t = eA, { kHeadersList: e } = Je;
  function A(E) {
    if (E.length === 0)
      return !1;
    for (const Q of E) {
      const C = Q.charCodeAt(0);
      if (C >= 0 || C <= 8 || C >= 10 || C <= 31 || C === 127)
        return !1;
    }
  }
  function r(E) {
    for (const Q of E) {
      const C = Q.charCodeAt(0);
      if (C <= 32 || C > 127 || Q === "(" || Q === ")" || Q === ">" || Q === "<" || Q === "@" || Q === "," || Q === ";" || Q === ":" || Q === "\\" || Q === '"' || Q === "/" || Q === "[" || Q === "]" || Q === "?" || Q === "=" || Q === "{" || Q === "}")
        throw new Error("Invalid cookie name");
    }
  }
  function s(E) {
    for (const Q of E) {
      const C = Q.charCodeAt(0);
      if (C < 33 || // exclude CTLs (0-31)
      C === 34 || C === 44 || C === 59 || C === 92 || C > 126)
        throw new Error("Invalid header value");
    }
  }
  function n(E) {
    for (const Q of E)
      if (Q.charCodeAt(0) < 33 || Q === ";")
        throw new Error("Invalid cookie path");
  }
  function i(E) {
    if (E.startsWith("-") || E.endsWith(".") || E.endsWith("-"))
      throw new Error("Invalid cookie domain");
  }
  function a(E) {
    typeof E == "number" && (E = new Date(E));
    const Q = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ], C = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], u = Q[E.getUTCDay()], B = E.getUTCDate().toString().padStart(2, "0"), I = C[E.getUTCMonth()], d = E.getUTCFullYear(), w = E.getUTCHours().toString().padStart(2, "0"), m = E.getUTCMinutes().toString().padStart(2, "0"), p = E.getUTCSeconds().toString().padStart(2, "0");
    return `${u}, ${B} ${I} ${d} ${w}:${m}:${p} GMT`;
  }
  function o(E) {
    if (E < 0)
      throw new Error("Invalid cookie max-age");
  }
  function c(E) {
    if (E.name.length === 0)
      return null;
    r(E.name), s(E.value);
    const Q = [`${E.name}=${E.value}`];
    E.name.startsWith("__Secure-") && (E.secure = !0), E.name.startsWith("__Host-") && (E.secure = !0, E.domain = null, E.path = "/"), E.secure && Q.push("Secure"), E.httpOnly && Q.push("HttpOnly"), typeof E.maxAge == "number" && (o(E.maxAge), Q.push(`Max-Age=${E.maxAge}`)), E.domain && (i(E.domain), Q.push(`Domain=${E.domain}`)), E.path && (n(E.path), Q.push(`Path=${E.path}`)), E.expires && E.expires.toString() !== "Invalid Date" && Q.push(`Expires=${a(E.expires)}`), E.sameSite && Q.push(`SameSite=${E.sameSite}`);
    for (const C of E.unparsed) {
      if (!C.includes("="))
        throw new Error("Invalid unparsed");
      const [u, ...B] = C.split("=");
      Q.push(`${u.trim()}=${B.join("=")}`);
    }
    return Q.join("; ");
  }
  let g;
  function h(E) {
    if (E[e])
      return E[e];
    g || (g = Object.getOwnPropertySymbols(E).find(
      (C) => C.description === "headers list"
    ), t(g, "Headers cannot be parsed"));
    const Q = E[g];
    return t(Q), Q;
  }
  return gg = {
    isCTLExcludingHtab: A,
    stringify: c,
    getHeadersList: h
  }, gg;
}
var lg, ru;
function oR() {
  if (ru)
    return lg;
  ru = 1;
  const { maxNameValuePairSize: t, maxAttributeValueSize: e } = iR(), { isCTLExcludingHtab: A } = bB(), { collectASequenceOfCodePointsFast: r } = Ot(), s = eA;
  function n(a) {
    if (A(a))
      return null;
    let o = "", c = "", g = "", h = "";
    if (a.includes(";")) {
      const E = { position: 0 };
      o = r(";", a, E), c = a.slice(E.position);
    } else
      o = a;
    if (!o.includes("="))
      h = o;
    else {
      const E = { position: 0 };
      g = r(
        "=",
        o,
        E
      ), h = o.slice(E.position + 1);
    }
    return g = g.trim(), h = h.trim(), g.length + h.length > t ? null : {
      name: g,
      value: h,
      ...i(c)
    };
  }
  function i(a, o = {}) {
    if (a.length === 0)
      return o;
    s(a[0] === ";"), a = a.slice(1);
    let c = "";
    a.includes(";") ? (c = r(
      ";",
      a,
      { position: 0 }
    ), a = a.slice(c.length)) : (c = a, a = "");
    let g = "", h = "";
    if (c.includes("=")) {
      const Q = { position: 0 };
      g = r(
        "=",
        c,
        Q
      ), h = c.slice(Q.position + 1);
    } else
      g = c;
    if (g = g.trim(), h = h.trim(), h.length > e)
      return i(a, o);
    const E = g.toLowerCase();
    if (E === "expires") {
      const Q = new Date(h);
      o.expires = Q;
    } else if (E === "max-age") {
      const Q = h.charCodeAt(0);
      if ((Q < 48 || Q > 57) && h[0] !== "-" || !/^\d+$/.test(h))
        return i(a, o);
      const C = Number(h);
      o.maxAge = C;
    } else if (E === "domain") {
      let Q = h;
      Q[0] === "." && (Q = Q.slice(1)), Q = Q.toLowerCase(), o.domain = Q;
    } else if (E === "path") {
      let Q = "";
      h.length === 0 || h[0] !== "/" ? Q = "/" : Q = h, o.path = Q;
    } else if (E === "secure")
      o.secure = !0;
    else if (E === "httponly")
      o.httpOnly = !0;
    else if (E === "samesite") {
      let Q = "Default";
      const C = h.toLowerCase();
      C.includes("none") && (Q = "None"), C.includes("strict") && (Q = "Strict"), C.includes("lax") && (Q = "Lax"), o.sameSite = Q;
    } else
      o.unparsed ?? (o.unparsed = []), o.unparsed.push(`${g}=${h}`);
    return i(a, o);
  }
  return lg = {
    parseSetCookie: n,
    parseUnparsedAttributes: i
  }, lg;
}
var hg, su;
function aR() {
  if (su)
    return hg;
  su = 1;
  const { parseSetCookie: t } = oR(), { stringify: e, getHeadersList: A } = bB(), { webidl: r } = WA(), { Headers: s } = In();
  function n(c) {
    r.argumentLengthCheck(arguments, 1, { header: "getCookies" }), r.brandCheck(c, s, { strict: !1 });
    const g = c.get("cookie"), h = {};
    if (!g)
      return h;
    for (const E of g.split(";")) {
      const [Q, ...C] = E.split("=");
      h[Q.trim()] = C.join("=");
    }
    return h;
  }
  function i(c, g, h) {
    r.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), r.brandCheck(c, s, { strict: !1 }), g = r.converters.DOMString(g), h = r.converters.DeleteCookieAttributes(h), o(c, {
      name: g,
      value: "",
      expires: /* @__PURE__ */ new Date(0),
      ...h
    });
  }
  function a(c) {
    r.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), r.brandCheck(c, s, { strict: !1 });
    const g = A(c).cookies;
    return g ? g.map((h) => t(Array.isArray(h) ? h[1] : h)) : [];
  }
  function o(c, g) {
    r.argumentLengthCheck(arguments, 2, { header: "setCookie" }), r.brandCheck(c, s, { strict: !1 }), g = r.converters.Cookie(g), e(g) && c.append("Set-Cookie", e(g));
  }
  return r.converters.DeleteCookieAttributes = r.dictionaryConverter([
    {
      converter: r.nullableConverter(r.converters.DOMString),
      key: "path",
      defaultValue: null
    },
    {
      converter: r.nullableConverter(r.converters.DOMString),
      key: "domain",
      defaultValue: null
    }
  ]), r.converters.Cookie = r.dictionaryConverter([
    {
      converter: r.converters.DOMString,
      key: "name"
    },
    {
      converter: r.converters.DOMString,
      key: "value"
    },
    {
      converter: r.nullableConverter((c) => typeof c == "number" ? r.converters["unsigned long long"](c) : new Date(c)),
      key: "expires",
      defaultValue: null
    },
    {
      converter: r.nullableConverter(r.converters["long long"]),
      key: "maxAge",
      defaultValue: null
    },
    {
      converter: r.nullableConverter(r.converters.DOMString),
      key: "domain",
      defaultValue: null
    },
    {
      converter: r.nullableConverter(r.converters.DOMString),
      key: "path",
      defaultValue: null
    },
    {
      converter: r.nullableConverter(r.converters.boolean),
      key: "secure",
      defaultValue: null
    },
    {
      converter: r.nullableConverter(r.converters.boolean),
      key: "httpOnly",
      defaultValue: null
    },
    {
      converter: r.converters.USVString,
      key: "sameSite",
      allowedValues: ["Strict", "Lax", "None"]
    },
    {
      converter: r.sequenceConverter(r.converters.DOMString),
      key: "unparsed",
      defaultValue: []
    }
  ]), hg = {
    getCookies: n,
    deleteCookie: i,
    getSetCookies: a,
    setCookie: o
  }, hg;
}
var Eg, nu;
function Wi() {
  if (nu)
    return Eg;
  nu = 1;
  const t = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", e = {
    enumerable: !0,
    writable: !1,
    configurable: !1
  }, A = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
  }, r = {
    CONTINUATION: 0,
    TEXT: 1,
    BINARY: 2,
    CLOSE: 8,
    PING: 9,
    PONG: 10
  }, s = 2 ** 16 - 1, n = {
    INFO: 0,
    PAYLOADLENGTH_16: 2,
    PAYLOADLENGTH_64: 3,
    READ_DATA: 4
  }, i = Buffer.allocUnsafe(0);
  return Eg = {
    uid: t,
    staticPropertyDescriptors: e,
    states: A,
    opcodes: r,
    maxUnsigned16Bit: s,
    parserStates: n,
    emptyBuffer: i
  }, Eg;
}
var ug, iu;
function ba() {
  return iu || (iu = 1, ug = {
    kWebSocketURL: Symbol("url"),
    kReadyState: Symbol("ready state"),
    kController: Symbol("controller"),
    kResponse: Symbol("response"),
    kBinaryType: Symbol("binary type"),
    kSentClose: Symbol("sent close"),
    kReceivedClose: Symbol("received close"),
    kByteParser: Symbol("byte parser")
  }), ug;
}
var Qg, ou;
function kB() {
  var a, c, h;
  if (ou)
    return Qg;
  ou = 1;
  const { webidl: t } = WA(), { kEnumerableProperty: e } = fe, { MessagePort: A } = nQ, o = class o extends Event {
    constructor(u, B = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), u = t.converters.DOMString(u), B = t.converters.MessageEventInit(B);
      super(u, B);
      N(this, a, void 0);
      b(this, a, B);
    }
    get data() {
      return t.brandCheck(this, o), l(this, a).data;
    }
    get origin() {
      return t.brandCheck(this, o), l(this, a).origin;
    }
    get lastEventId() {
      return t.brandCheck(this, o), l(this, a).lastEventId;
    }
    get source() {
      return t.brandCheck(this, o), l(this, a).source;
    }
    get ports() {
      return t.brandCheck(this, o), Object.isFrozen(l(this, a).ports) || Object.freeze(l(this, a).ports), l(this, a).ports;
    }
    initMessageEvent(u, B = !1, I = !1, d = null, w = "", m = "", p = null, R = []) {
      return t.brandCheck(this, o), t.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new o(u, {
        bubbles: B,
        cancelable: I,
        data: d,
        origin: w,
        lastEventId: m,
        source: p,
        ports: R
      });
    }
  };
  a = new WeakMap();
  let r = o;
  const g = class g extends Event {
    constructor(u, B = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), u = t.converters.DOMString(u), B = t.converters.CloseEventInit(B);
      super(u, B);
      N(this, c, void 0);
      b(this, c, B);
    }
    get wasClean() {
      return t.brandCheck(this, g), l(this, c).wasClean;
    }
    get code() {
      return t.brandCheck(this, g), l(this, c).code;
    }
    get reason() {
      return t.brandCheck(this, g), l(this, c).reason;
    }
  };
  c = new WeakMap();
  let s = g;
  const E = class E extends Event {
    constructor(u, B) {
      t.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" });
      super(u, B);
      N(this, h, void 0);
      u = t.converters.DOMString(u), B = t.converters.ErrorEventInit(B ?? {}), b(this, h, B);
    }
    get message() {
      return t.brandCheck(this, E), l(this, h).message;
    }
    get filename() {
      return t.brandCheck(this, E), l(this, h).filename;
    }
    get lineno() {
      return t.brandCheck(this, E), l(this, h).lineno;
    }
    get colno() {
      return t.brandCheck(this, E), l(this, h).colno;
    }
    get error() {
      return t.brandCheck(this, E), l(this, h).error;
    }
  };
  h = new WeakMap();
  let n = E;
  Object.defineProperties(r.prototype, {
    [Symbol.toStringTag]: {
      value: "MessageEvent",
      configurable: !0
    },
    data: e,
    origin: e,
    lastEventId: e,
    source: e,
    ports: e,
    initMessageEvent: e
  }), Object.defineProperties(s.prototype, {
    [Symbol.toStringTag]: {
      value: "CloseEvent",
      configurable: !0
    },
    reason: e,
    code: e,
    wasClean: e
  }), Object.defineProperties(n.prototype, {
    [Symbol.toStringTag]: {
      value: "ErrorEvent",
      configurable: !0
    },
    message: e,
    filename: e,
    lineno: e,
    colno: e,
    error: e
  }), t.converters.MessagePort = t.interfaceConverter(A), t.converters["sequence<MessagePort>"] = t.sequenceConverter(
    t.converters.MessagePort
  );
  const i = [
    {
      key: "bubbles",
      converter: t.converters.boolean,
      defaultValue: !1
    },
    {
      key: "cancelable",
      converter: t.converters.boolean,
      defaultValue: !1
    },
    {
      key: "composed",
      converter: t.converters.boolean,
      defaultValue: !1
    }
  ];
  return t.converters.MessageEventInit = t.dictionaryConverter([
    ...i,
    {
      key: "data",
      converter: t.converters.any,
      defaultValue: null
    },
    {
      key: "origin",
      converter: t.converters.USVString,
      defaultValue: ""
    },
    {
      key: "lastEventId",
      converter: t.converters.DOMString,
      defaultValue: ""
    },
    {
      key: "source",
      // Node doesn't implement WindowProxy or ServiceWorker, so the only
      // valid value for source is a MessagePort.
      converter: t.nullableConverter(t.converters.MessagePort),
      defaultValue: null
    },
    {
      key: "ports",
      converter: t.converters["sequence<MessagePort>"],
      get defaultValue() {
        return [];
      }
    }
  ]), t.converters.CloseEventInit = t.dictionaryConverter([
    ...i,
    {
      key: "wasClean",
      converter: t.converters.boolean,
      defaultValue: !1
    },
    {
      key: "code",
      converter: t.converters["unsigned short"],
      defaultValue: 0
    },
    {
      key: "reason",
      converter: t.converters.USVString,
      defaultValue: ""
    }
  ]), t.converters.ErrorEventInit = t.dictionaryConverter([
    ...i,
    {
      key: "message",
      converter: t.converters.DOMString,
      defaultValue: ""
    },
    {
      key: "filename",
      converter: t.converters.USVString,
      defaultValue: ""
    },
    {
      key: "lineno",
      converter: t.converters["unsigned long"],
      defaultValue: 0
    },
    {
      key: "colno",
      converter: t.converters["unsigned long"],
      defaultValue: 0
    },
    {
      key: "error",
      converter: t.converters.any
    }
  ]), Qg = {
    MessageEvent: r,
    CloseEvent: s,
    ErrorEvent: n
  }, Qg;
}
var Cg, au;
function Tl() {
  if (au)
    return Cg;
  au = 1;
  const { kReadyState: t, kController: e, kResponse: A, kBinaryType: r, kWebSocketURL: s } = ba(), { states: n, opcodes: i } = Wi(), { MessageEvent: a, ErrorEvent: o } = kB();
  function c(I) {
    return I[t] === n.OPEN;
  }
  function g(I) {
    return I[t] === n.CLOSING;
  }
  function h(I) {
    return I[t] === n.CLOSED;
  }
  function E(I, d, w = Event, m) {
    const p = new w(I, m);
    d.dispatchEvent(p);
  }
  function Q(I, d, w) {
    if (I[t] !== n.OPEN)
      return;
    let m;
    if (d === i.TEXT)
      try {
        m = new TextDecoder("utf-8", { fatal: !0 }).decode(w);
      } catch {
        B(I, "Received invalid UTF-8 in text frame.");
        return;
      }
    else
      d === i.BINARY && (I[r] === "blob" ? m = new Blob([w]) : m = new Uint8Array(w).buffer);
    E("message", I, a, {
      origin: I[s].origin,
      data: m
    });
  }
  function C(I) {
    if (I.length === 0)
      return !1;
    for (const d of I) {
      const w = d.charCodeAt(0);
      if (w < 33 || w > 126 || d === "(" || d === ")" || d === "<" || d === ">" || d === "@" || d === "," || d === ";" || d === ":" || d === "\\" || d === '"' || d === "/" || d === "[" || d === "]" || d === "?" || d === "=" || d === "{" || d === "}" || w === 32 || // SP
      w === 9)
        return !1;
    }
    return !0;
  }
  function u(I) {
    return I >= 1e3 && I < 1015 ? I !== 1004 && // reserved
    I !== 1005 && // "MUST NOT be set as a status code"
    I !== 1006 : I >= 3e3 && I <= 4999;
  }
  function B(I, d) {
    const { [e]: w, [A]: m } = I;
    w.abort(), m != null && m.socket && !m.socket.destroyed && m.socket.destroy(), d && E("error", I, o, {
      error: new Error(d)
    });
  }
  return Cg = {
    isEstablished: c,
    isClosing: g,
    isClosed: h,
    fireEvent: E,
    isValidSubprotocol: C,
    isValidStatusCode: u,
    failWebsocketConnection: B,
    websocketMessageReceived: Q
  }, Cg;
}
var Bg, cu;
function cR() {
  if (cu)
    return Bg;
  cu = 1;
  const t = aQ, { uid: e, states: A } = Wi(), {
    kReadyState: r,
    kSentClose: s,
    kByteParser: n,
    kReceivedClose: i
  } = ba(), { fireEvent: a, failWebsocketConnection: o } = Tl(), { CloseEvent: c } = kB(), { makeRequest: g } = Da(), { fetching: h } = Nl(), { Headers: E } = In(), { getGlobalDispatcher: Q } = Vi, { kHeadersList: C } = Je, u = {};
  u.open = t.channel("undici:websocket:open"), u.close = t.channel("undici:websocket:close"), u.socketError = t.channel("undici:websocket:socket_error");
  let B;
  try {
    B = require("crypto");
  } catch {
  }
  function I(p, R, D, S, v) {
    const T = p;
    T.protocol = p.protocol === "ws:" ? "http:" : "https:";
    const X = g({
      urlList: [T],
      serviceWorkers: "none",
      referrer: "no-referrer",
      mode: "websocket",
      credentials: "include",
      cache: "no-store",
      redirect: "error"
    });
    if (v.headers) {
      const Y = new E(v.headers)[C];
      X.headersList = Y;
    }
    const K = B.randomBytes(16).toString("base64");
    X.headersList.append("sec-websocket-key", K), X.headersList.append("sec-websocket-version", "13");
    for (const Y of R)
      X.headersList.append("sec-websocket-protocol", Y);
    const z = "";
    return h({
      request: X,
      useParallelQueue: !0,
      dispatcher: v.dispatcher ?? Q(),
      processResponse(Y) {
        var k, q;
        if (Y.type === "error" || Y.status !== 101) {
          o(D, "Received network error or non-101 status code.");
          return;
        }
        if (R.length !== 0 && !Y.headersList.get("Sec-WebSocket-Protocol")) {
          o(D, "Server did not respond with sent protocols.");
          return;
        }
        if (((k = Y.headersList.get("Upgrade")) == null ? void 0 : k.toLowerCase()) !== "websocket") {
          o(D, 'Server did not set Upgrade header to "websocket".');
          return;
        }
        if (((q = Y.headersList.get("Connection")) == null ? void 0 : q.toLowerCase()) !== "upgrade") {
          o(D, 'Server did not set Connection header to "upgrade".');
          return;
        }
        const ee = Y.headersList.get("Sec-WebSocket-Accept"), re = B.createHash("sha1").update(K + e).digest("base64");
        if (ee !== re) {
          o(D, "Incorrect hash received in Sec-WebSocket-Accept header.");
          return;
        }
        const ne = Y.headersList.get("Sec-WebSocket-Extensions");
        if (ne !== null && ne !== z) {
          o(D, "Received different permessage-deflate than the one set.");
          return;
        }
        const Z = Y.headersList.get("Sec-WebSocket-Protocol");
        if (Z !== null && Z !== X.headersList.get("Sec-WebSocket-Protocol")) {
          o(D, "Protocol was not set in the opening handshake.");
          return;
        }
        Y.socket.on("data", d), Y.socket.on("close", w), Y.socket.on("error", m), u.open.hasSubscribers && u.open.publish({
          address: Y.socket.address(),
          protocol: Z,
          extensions: ne
        }), S(Y);
      }
    });
  }
  function d(p) {
    this.ws[n].write(p) || this.pause();
  }
  function w() {
    const { ws: p } = this, R = p[s] && p[i];
    let D = 1005, S = "";
    const v = p[n].closingInfo;
    v ? (D = v.code ?? 1005, S = v.reason) : p[s] || (D = 1006), p[r] = A.CLOSED, a("close", p, c, {
      wasClean: R,
      code: D,
      reason: S
    }), u.close.hasSubscribers && u.close.publish({
      websocket: p,
      code: D,
      reason: S
    });
  }
  function m(p) {
    const { ws: R } = this;
    R[r] = A.CLOSING, u.socketError.hasSubscribers && u.socketError.publish(p), this.destroy();
  }
  return Bg = {
    establishWebSocketConnection: I
  }, Bg;
}
var Ig, gu;
function SB() {
  if (gu)
    return Ig;
  gu = 1;
  const { maxUnsigned16Bit: t } = Wi();
  let e;
  try {
    e = require("crypto");
  } catch {
  }
  class A {
    /**
     * @param {Buffer|undefined} data
     */
    constructor(s) {
      this.frameData = s, this.maskKey = e.randomBytes(4);
    }
    createFrame(s) {
      var c;
      const n = ((c = this.frameData) == null ? void 0 : c.byteLength) ?? 0;
      let i = n, a = 6;
      n > t ? (a += 8, i = 127) : n > 125 && (a += 2, i = 126);
      const o = Buffer.allocUnsafe(n + a);
      o[0] = o[1] = 0, o[0] |= 128, o[0] = (o[0] & 240) + s;
      /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */
      o[a - 4] = this.maskKey[0], o[a - 3] = this.maskKey[1], o[a - 2] = this.maskKey[2], o[a - 1] = this.maskKey[3], o[1] = i, i === 126 ? o.writeUInt16BE(n, 2) : i === 127 && (o[2] = o[3] = 0, o.writeUIntBE(n, 4, 6)), o[1] |= 128;
      for (let g = 0; g < n; g++)
        o[a + g] = this.frameData[g] ^ this.maskKey[g % 4];
      return o;
    }
  }
  return Ig = {
    WebsocketFrameSend: A
  }, Ig;
}
var dg, lu;
function gR() {
  var B, I, d, w, m;
  if (lu)
    return dg;
  lu = 1;
  const { Writable: t } = _t, e = aQ, { parserStates: A, opcodes: r, states: s, emptyBuffer: n } = Wi(), { kReadyState: i, kSentClose: a, kResponse: o, kReceivedClose: c } = ba(), { isValidStatusCode: g, failWebsocketConnection: h, websocketMessageReceived: E } = Tl(), { WebsocketFrameSend: Q } = SB(), C = {};
  C.ping = e.channel("undici:websocket:ping"), C.pong = e.channel("undici:websocket:pong");
  class u extends t {
    constructor(D) {
      super();
      N(this, B, []);
      N(this, I, 0);
      N(this, d, A.INFO);
      N(this, w, {});
      N(this, m, []);
      this.ws = D;
    }
    /**
     * @param {Buffer} chunk
     * @param {() => void} callback
     */
    _write(D, S, v) {
      l(this, B).push(D), b(this, I, l(this, I) + D.length), this.run(v);
    }
    /**
     * Runs whenever a new chunk is received.
     * Callback is called whenever there are no more chunks buffering,
     * or not enough bytes are buffered to parse.
     */
    run(D) {
      var S;
      for (; ; ) {
        if (l(this, d) === A.INFO) {
          if (l(this, I) < 2)
            return D();
          const v = this.consume(2);
          if (l(this, w).fin = (v[0] & 128) !== 0, l(this, w).opcode = v[0] & 15, (S = l(this, w)).originalOpcode ?? (S.originalOpcode = l(this, w).opcode), l(this, w).fragmented = !l(this, w).fin && l(this, w).opcode !== r.CONTINUATION, l(this, w).fragmented && l(this, w).opcode !== r.BINARY && l(this, w).opcode !== r.TEXT) {
            h(this.ws, "Invalid frame type was fragmented.");
            return;
          }
          const T = v[1] & 127;
          if (T <= 125 ? (l(this, w).payloadLength = T, b(this, d, A.READ_DATA)) : T === 126 ? b(this, d, A.PAYLOADLENGTH_16) : T === 127 && b(this, d, A.PAYLOADLENGTH_64), l(this, w).fragmented && T > 125) {
            h(this.ws, "Fragmented frame exceeded 125 bytes.");
            return;
          } else if ((l(this, w).opcode === r.PING || l(this, w).opcode === r.PONG || l(this, w).opcode === r.CLOSE) && T > 125) {
            h(this.ws, "Payload length for control frame exceeded 125 bytes.");
            return;
          } else if (l(this, w).opcode === r.CLOSE) {
            if (T === 1) {
              h(this.ws, "Received close frame with a 1-byte body.");
              return;
            }
            const X = this.consume(T);
            if (l(this, w).closeInfo = this.parseCloseBody(!1, X), !this.ws[a]) {
              const K = Buffer.allocUnsafe(2);
              K.writeUInt16BE(l(this, w).closeInfo.code, 0);
              const z = new Q(K);
              this.ws[o].socket.write(
                z.createFrame(r.CLOSE),
                (ue) => {
                  ue || (this.ws[a] = !0);
                }
              );
            }
            this.ws[i] = s.CLOSING, this.ws[c] = !0, this.end();
            return;
          } else if (l(this, w).opcode === r.PING) {
            const X = this.consume(T);
            if (!this.ws[c]) {
              const K = new Q(X);
              this.ws[o].socket.write(K.createFrame(r.PONG)), C.ping.hasSubscribers && C.ping.publish({
                payload: X
              });
            }
            if (b(this, d, A.INFO), l(this, I) > 0)
              continue;
            D();
            return;
          } else if (l(this, w).opcode === r.PONG) {
            const X = this.consume(T);
            if (C.pong.hasSubscribers && C.pong.publish({
              payload: X
            }), l(this, I) > 0)
              continue;
            D();
            return;
          }
        } else if (l(this, d) === A.PAYLOADLENGTH_16) {
          if (l(this, I) < 2)
            return D();
          const v = this.consume(2);
          l(this, w).payloadLength = v.readUInt16BE(0), b(this, d, A.READ_DATA);
        } else if (l(this, d) === A.PAYLOADLENGTH_64) {
          if (l(this, I) < 8)
            return D();
          const v = this.consume(8), T = v.readUInt32BE(0);
          if (T > 2 ** 31 - 1) {
            h(this.ws, "Received payload length > 2^31 bytes.");
            return;
          }
          const X = v.readUInt32BE(4);
          l(this, w).payloadLength = (T << 8) + X, b(this, d, A.READ_DATA);
        } else if (l(this, d) === A.READ_DATA) {
          if (l(this, I) < l(this, w).payloadLength)
            return D();
          if (l(this, I) >= l(this, w).payloadLength) {
            const v = this.consume(l(this, w).payloadLength);
            if (l(this, m).push(v), !l(this, w).fragmented || l(this, w).fin && l(this, w).opcode === r.CONTINUATION) {
              const T = Buffer.concat(l(this, m));
              E(this.ws, l(this, w).originalOpcode, T), b(this, w, {}), l(this, m).length = 0;
            }
            b(this, d, A.INFO);
          }
        }
        if (!(l(this, I) > 0)) {
          D();
          break;
        }
      }
    }
    /**
     * Take n bytes from the buffered Buffers
     * @param {number} n
     * @returns {Buffer|null}
     */
    consume(D) {
      if (D > l(this, I))
        return null;
      if (D === 0)
        return n;
      if (l(this, B)[0].length === D)
        return b(this, I, l(this, I) - l(this, B)[0].length), l(this, B).shift();
      const S = Buffer.allocUnsafe(D);
      let v = 0;
      for (; v !== D; ) {
        const T = l(this, B)[0], { length: X } = T;
        if (X + v === D) {
          S.set(l(this, B).shift(), v);
          break;
        } else if (X + v > D) {
          S.set(T.subarray(0, D - v), v), l(this, B)[0] = T.subarray(D - v);
          break;
        } else
          S.set(l(this, B).shift(), v), v += T.length;
      }
      return b(this, I, l(this, I) - D), S;
    }
    parseCloseBody(D, S) {
      let v;
      if (S.length >= 2 && (v = S.readUInt16BE(0)), D)
        return g(v) ? { code: v } : null;
      let T = S.subarray(2);
      if (T[0] === 239 && T[1] === 187 && T[2] === 191 && (T = T.subarray(3)), v !== void 0 && !g(v))
        return null;
      try {
        T = new TextDecoder("utf-8", { fatal: !0 }).decode(T);
      } catch {
        return null;
      }
      return { code: v, reason: T };
    }
    get closingInfo() {
      return l(this, w).closeInfo;
    }
  }
  return B = new WeakMap(), I = new WeakMap(), d = new WeakMap(), w = new WeakMap(), m = new WeakMap(), dg = {
    ByteParser: u
  }, dg;
}
var fg, hu;
function lR() {
  var z, ue, Y, ee, re, FB;
  if (hu)
    return fg;
  hu = 1;
  const { webidl: t } = WA(), { DOMException: e } = fs(), { URLSerializer: A } = Ot(), { getGlobalOrigin: r } = _i(), { staticPropertyDescriptors: s, states: n, opcodes: i, emptyBuffer: a } = Wi(), {
    kWebSocketURL: o,
    kReadyState: c,
    kController: g,
    kBinaryType: h,
    kResponse: E,
    kSentClose: Q,
    kByteParser: C
  } = ba(), { isEstablished: u, isClosing: B, isValidSubprotocol: I, failWebsocketConnection: d, fireEvent: w } = Tl(), { establishWebSocketConnection: m } = cR(), { WebsocketFrameSend: p } = SB(), { ByteParser: R } = gR(), { kEnumerableProperty: D, isBlobLike: S } = fe, { getGlobalDispatcher: v } = Vi, { types: T } = Jt;
  let X = !1;
  const Z = class Z extends EventTarget {
    /**
     * @param {string} url
     * @param {string|string[]} protocols
     */
    constructor(F, f = []) {
      super();
      /**
       * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
       */
      N(this, re);
      N(this, z, {
        open: null,
        error: null,
        close: null,
        message: null
      });
      N(this, ue, 0);
      N(this, Y, "");
      N(this, ee, "");
      t.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), X || (X = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
        code: "UNDICI-WS"
      }));
      const M = t.converters["DOMString or sequence<DOMString> or WebSocketInit"](f);
      F = t.converters.USVString(F), f = M.protocols;
      const _ = r();
      let J;
      try {
        J = new URL(F, _);
      } catch (P) {
        throw new e(P, "SyntaxError");
      }
      if (J.protocol === "http:" ? J.protocol = "ws:" : J.protocol === "https:" && (J.protocol = "wss:"), J.protocol !== "ws:" && J.protocol !== "wss:")
        throw new e(
          `Expected a ws: or wss: protocol, got ${J.protocol}`,
          "SyntaxError"
        );
      if (J.hash || J.href.endsWith("#"))
        throw new e("Got fragment", "SyntaxError");
      if (typeof f == "string" && (f = [f]), f.length !== new Set(f.map((P) => P.toLowerCase())).size)
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      if (f.length > 0 && !f.every((P) => I(P)))
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      this[o] = new URL(J.href), this[g] = m(
        J,
        f,
        this,
        (P) => O(this, re, FB).call(this, P),
        M
      ), this[c] = Z.CONNECTING, this[h] = "blob";
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-close
     * @param {number|undefined} code
     * @param {string|undefined} reason
     */
    close(F = void 0, f = void 0) {
      if (t.brandCheck(this, Z), F !== void 0 && (F = t.converters["unsigned short"](F, { clamp: !0 })), f !== void 0 && (f = t.converters.USVString(f)), F !== void 0 && F !== 1e3 && (F < 3e3 || F > 4999))
        throw new e("invalid code", "InvalidAccessError");
      let M = 0;
      if (f !== void 0 && (M = Buffer.byteLength(f), M > 123))
        throw new e(
          `Reason must be less than 123 bytes; received ${M}`,
          "SyntaxError"
        );
      if (!(this[c] === Z.CLOSING || this[c] === Z.CLOSED))
        if (!u(this))
          d(this, "Connection was closed before it was established."), this[c] = Z.CLOSING;
        else if (B(this))
          this[c] = Z.CLOSING;
        else {
          const _ = new p();
          F !== void 0 && f === void 0 ? (_.frameData = Buffer.allocUnsafe(2), _.frameData.writeUInt16BE(F, 0)) : F !== void 0 && f !== void 0 ? (_.frameData = Buffer.allocUnsafe(2 + M), _.frameData.writeUInt16BE(F, 0), _.frameData.write(f, 2, "utf-8")) : _.frameData = a, this[E].socket.write(_.createFrame(i.CLOSE), (P) => {
            P || (this[Q] = !0);
          }), this[c] = n.CLOSING;
        }
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-send
     * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
     */
    send(F) {
      if (t.brandCheck(this, Z), t.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), F = t.converters.WebSocketSendData(F), this[c] === Z.CONNECTING)
        throw new e("Sent before connected.", "InvalidStateError");
      if (!u(this) || B(this))
        return;
      const f = this[E].socket;
      if (typeof F == "string") {
        const M = Buffer.from(F), J = new p(M).createFrame(i.TEXT);
        b(this, ue, l(this, ue) + M.byteLength), f.write(J, () => {
          b(this, ue, l(this, ue) - M.byteLength);
        });
      } else if (T.isArrayBuffer(F)) {
        const M = Buffer.from(F), J = new p(M).createFrame(i.BINARY);
        b(this, ue, l(this, ue) + M.byteLength), f.write(J, () => {
          b(this, ue, l(this, ue) - M.byteLength);
        });
      } else if (ArrayBuffer.isView(F)) {
        const M = Buffer.from(F, F.byteOffset, F.byteLength), J = new p(M).createFrame(i.BINARY);
        b(this, ue, l(this, ue) + M.byteLength), f.write(J, () => {
          b(this, ue, l(this, ue) - M.byteLength);
        });
      } else if (S(F)) {
        const M = new p();
        F.arrayBuffer().then((_) => {
          const J = Buffer.from(_);
          M.frameData = J;
          const P = M.createFrame(i.BINARY);
          b(this, ue, l(this, ue) + J.byteLength), f.write(P, () => {
            b(this, ue, l(this, ue) - J.byteLength);
          });
        });
      }
    }
    get readyState() {
      return t.brandCheck(this, Z), this[c];
    }
    get bufferedAmount() {
      return t.brandCheck(this, Z), l(this, ue);
    }
    get url() {
      return t.brandCheck(this, Z), A(this[o]);
    }
    get extensions() {
      return t.brandCheck(this, Z), l(this, ee);
    }
    get protocol() {
      return t.brandCheck(this, Z), l(this, Y);
    }
    get onopen() {
      return t.brandCheck(this, Z), l(this, z).open;
    }
    set onopen(F) {
      t.brandCheck(this, Z), l(this, z).open && this.removeEventListener("open", l(this, z).open), typeof F == "function" ? (l(this, z).open = F, this.addEventListener("open", F)) : l(this, z).open = null;
    }
    get onerror() {
      return t.brandCheck(this, Z), l(this, z).error;
    }
    set onerror(F) {
      t.brandCheck(this, Z), l(this, z).error && this.removeEventListener("error", l(this, z).error), typeof F == "function" ? (l(this, z).error = F, this.addEventListener("error", F)) : l(this, z).error = null;
    }
    get onclose() {
      return t.brandCheck(this, Z), l(this, z).close;
    }
    set onclose(F) {
      t.brandCheck(this, Z), l(this, z).close && this.removeEventListener("close", l(this, z).close), typeof F == "function" ? (l(this, z).close = F, this.addEventListener("close", F)) : l(this, z).close = null;
    }
    get onmessage() {
      return t.brandCheck(this, Z), l(this, z).message;
    }
    set onmessage(F) {
      t.brandCheck(this, Z), l(this, z).message && this.removeEventListener("message", l(this, z).message), typeof F == "function" ? (l(this, z).message = F, this.addEventListener("message", F)) : l(this, z).message = null;
    }
    get binaryType() {
      return t.brandCheck(this, Z), this[h];
    }
    set binaryType(F) {
      t.brandCheck(this, Z), F !== "blob" && F !== "arraybuffer" ? this[h] = "blob" : this[h] = F;
    }
  };
  z = new WeakMap(), ue = new WeakMap(), Y = new WeakMap(), ee = new WeakMap(), re = new WeakSet(), FB = function(F) {
    this[E] = F;
    const f = new R(this);
    f.on("drain", function() {
      this.ws[E].socket.resume();
    }), F.socket.ws = this, this[C] = f, this[c] = n.OPEN;
    const M = F.headersList.get("sec-websocket-extensions");
    M !== null && b(this, ee, M);
    const _ = F.headersList.get("sec-websocket-protocol");
    _ !== null && b(this, Y, _), w("open", this);
  };
  let K = Z;
  return K.CONNECTING = K.prototype.CONNECTING = n.CONNECTING, K.OPEN = K.prototype.OPEN = n.OPEN, K.CLOSING = K.prototype.CLOSING = n.CLOSING, K.CLOSED = K.prototype.CLOSED = n.CLOSED, Object.defineProperties(K.prototype, {
    CONNECTING: s,
    OPEN: s,
    CLOSING: s,
    CLOSED: s,
    url: D,
    readyState: D,
    bufferedAmount: D,
    onopen: D,
    onerror: D,
    onclose: D,
    close: D,
    onmessage: D,
    binaryType: D,
    send: D,
    extensions: D,
    protocol: D,
    [Symbol.toStringTag]: {
      value: "WebSocket",
      writable: !1,
      enumerable: !1,
      configurable: !0
    }
  }), Object.defineProperties(K, {
    CONNECTING: s,
    OPEN: s,
    CLOSING: s,
    CLOSED: s
  }), t.converters["sequence<DOMString>"] = t.sequenceConverter(
    t.converters.DOMString
  ), t.converters["DOMString or sequence<DOMString>"] = function(k) {
    return t.util.Type(k) === "Object" && Symbol.iterator in k ? t.converters["sequence<DOMString>"](k) : t.converters.DOMString(k);
  }, t.converters.WebSocketInit = t.dictionaryConverter([
    {
      key: "protocols",
      converter: t.converters["DOMString or sequence<DOMString>"],
      get defaultValue() {
        return [];
      }
    },
    {
      key: "dispatcher",
      converter: (k) => k,
      get defaultValue() {
        return v();
      }
    },
    {
      key: "headers",
      converter: t.nullableConverter(t.converters.HeadersInit)
    }
  ]), t.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(k) {
    return t.util.Type(k) === "Object" && !(Symbol.iterator in k) ? t.converters.WebSocketInit(k) : { protocols: t.converters["DOMString or sequence<DOMString>"](k) };
  }, t.converters.WebSocketSendData = function(k) {
    if (t.util.Type(k) === "Object") {
      if (S(k))
        return t.converters.Blob(k, { strict: !1 });
      if (ArrayBuffer.isView(k) || T.isAnyArrayBuffer(k))
        return t.converters.BufferSource(k);
    }
    return t.converters.USVString(k);
  }, fg = {
    WebSocket: K
  }, fg;
}
const hR = wa, NB = Dl, UB = Te, ER = Oi, uR = fm, QR = ma, Cs = fe, { InvalidArgumentError: fo } = UB, dn = Bn, CR = fa, BR = fB, IR = v0, dR = pB, fR = cB, pR = Z0, { getGlobalDispatcher: TB, setGlobalDispatcher: wR } = Vi, mR = $0, yR = DC, RR = kl;
let jg;
try {
  require("crypto"), jg = !0;
} catch {
  jg = !1;
}
Object.assign(NB.prototype, dn);
Ee.Dispatcher = NB;
Ee.Client = hR;
Ee.Pool = ER;
Ee.BalancedPool = uR;
Ee.Agent = QR;
Ee.ProxyAgent = pR;
Ee.DecoratorHandler = mR;
Ee.RedirectHandler = yR;
Ee.createRedirectInterceptor = RR;
Ee.buildConnector = CR;
Ee.errors = UB;
function xi(t) {
  return (e, A, r) => {
    if (typeof A == "function" && (r = A, A = null), !e || typeof e != "string" && typeof e != "object" && !(e instanceof URL))
      throw new fo("invalid url");
    if (A != null && typeof A != "object")
      throw new fo("invalid opts");
    if (A && A.path != null) {
      if (typeof A.path != "string")
        throw new fo("invalid opts.path");
      let i = A.path;
      A.path.startsWith("/") || (i = `/${i}`), e = new URL(Cs.parseOrigin(e).origin + i);
    } else
      A || (A = typeof e == "object" ? e : {}), e = Cs.parseURL(e);
    const { agent: s, dispatcher: n = TB() } = A;
    if (s)
      throw new fo("unsupported opts.agent. Did you mean opts.client?");
    return t.call(n, {
      ...A,
      origin: e.origin,
      path: e.search ? `${e.pathname}${e.search}` : e.pathname,
      method: A.method || (A.body ? "PUT" : "GET")
    }, r);
  };
}
Ee.setGlobalDispatcher = wR;
Ee.getGlobalDispatcher = TB;
if (Cs.nodeMajor > 16 || Cs.nodeMajor === 16 && Cs.nodeMinor >= 8) {
  let t = null;
  Ee.fetch = async function(i) {
    t || (t = Nl().fetch);
    try {
      return await t(...arguments);
    } catch (a) {
      throw typeof a == "object" && Error.captureStackTrace(a, this), a;
    }
  }, Ee.Headers = In().Headers, Ee.Response = Fl().Response, Ee.Request = Da().Request, Ee.FormData = Rl().FormData, Ee.File = yl().File, Ee.FileReader = tR().FileReader;
  const { setGlobalOrigin: e, getGlobalOrigin: A } = _i();
  Ee.setGlobalOrigin = e, Ee.getGlobalOrigin = A;
  const { CacheStorage: r } = nR(), { kConstruct: s } = Ul();
  Ee.caches = new r(s);
}
if (Cs.nodeMajor >= 16) {
  const { deleteCookie: t, getCookies: e, getSetCookies: A, setCookie: r } = aR();
  Ee.deleteCookie = t, Ee.getCookies = e, Ee.getSetCookies = A, Ee.setCookie = r;
  const { parseMIMEType: s, serializeAMimeType: n } = Ot();
  Ee.parseMIMEType = s, Ee.serializeAMimeType = n;
}
if (Cs.nodeMajor >= 18 && jg) {
  const { WebSocket: t } = lR();
  Ee.WebSocket = t;
}
Ee.request = xi(dn.request);
Ee.stream = xi(dn.stream);
Ee.pipeline = xi(dn.pipeline);
Ee.connect = xi(dn.connect);
Ee.upgrade = xi(dn.upgrade);
Ee.MockClient = BR;
Ee.MockPool = dR;
Ee.MockAgent = IR;
Ee.mockErrors = fR;
var DR = ge && ge.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), bR = ge && ge.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), ka = ge && ge.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && DR(e, t, A);
  return bR(e, t), e;
}, Ze = ge && ge.__awaiter || function(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function a(g) {
      try {
        c(r.next(g));
      } catch (h) {
        i(h);
      }
    }
    function o(g) {
      try {
        c(r.throw(g));
      } catch (h) {
        i(h);
      }
    }
    function c(g) {
      g.done ? n(g.value) : s(g.value).then(a, o);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
Object.defineProperty(QA, "__esModule", { value: !0 });
QA.HttpClient = QA.isHttps = QA.HttpClientResponse = QA.HttpClientError = QA.getProxyUrl = QA.MediaTypes = QA.Headers = QA.HttpCodes = void 0;
const po = ka(En), pg = ka(tQ), Zg = ka(on), wo = ka(Cf), kR = Ee;
var at;
(function(t) {
  t[t.OK = 200] = "OK", t[t.MultipleChoices = 300] = "MultipleChoices", t[t.MovedPermanently = 301] = "MovedPermanently", t[t.ResourceMoved = 302] = "ResourceMoved", t[t.SeeOther = 303] = "SeeOther", t[t.NotModified = 304] = "NotModified", t[t.UseProxy = 305] = "UseProxy", t[t.SwitchProxy = 306] = "SwitchProxy", t[t.TemporaryRedirect = 307] = "TemporaryRedirect", t[t.PermanentRedirect = 308] = "PermanentRedirect", t[t.BadRequest = 400] = "BadRequest", t[t.Unauthorized = 401] = "Unauthorized", t[t.PaymentRequired = 402] = "PaymentRequired", t[t.Forbidden = 403] = "Forbidden", t[t.NotFound = 404] = "NotFound", t[t.MethodNotAllowed = 405] = "MethodNotAllowed", t[t.NotAcceptable = 406] = "NotAcceptable", t[t.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", t[t.RequestTimeout = 408] = "RequestTimeout", t[t.Conflict = 409] = "Conflict", t[t.Gone = 410] = "Gone", t[t.TooManyRequests = 429] = "TooManyRequests", t[t.InternalServerError = 500] = "InternalServerError", t[t.NotImplemented = 501] = "NotImplemented", t[t.BadGateway = 502] = "BadGateway", t[t.ServiceUnavailable = 503] = "ServiceUnavailable", t[t.GatewayTimeout = 504] = "GatewayTimeout";
})(at || (QA.HttpCodes = at = {}));
var bA;
(function(t) {
  t.Accept = "accept", t.ContentType = "content-type";
})(bA || (QA.Headers = bA = {}));
var zt;
(function(t) {
  t.ApplicationJson = "application/json";
})(zt || (QA.MediaTypes = zt = {}));
function SR(t) {
  const e = Zg.getProxyUrl(new URL(t));
  return e ? e.href : "";
}
QA.getProxyUrl = SR;
const FR = [
  at.MovedPermanently,
  at.ResourceMoved,
  at.SeeOther,
  at.TemporaryRedirect,
  at.PermanentRedirect
], NR = [
  at.BadGateway,
  at.ServiceUnavailable,
  at.GatewayTimeout
], UR = ["OPTIONS", "GET", "DELETE", "HEAD"], TR = 10, vR = 5;
class Sa extends Error {
  constructor(e, A) {
    super(e), this.name = "HttpClientError", this.statusCode = A, Object.setPrototypeOf(this, Sa.prototype);
  }
}
QA.HttpClientError = Sa;
class vB {
  constructor(e) {
    this.message = e;
  }
  readBody() {
    return Ze(this, void 0, void 0, function* () {
      return new Promise((e) => Ze(this, void 0, void 0, function* () {
        let A = Buffer.alloc(0);
        this.message.on("data", (r) => {
          A = Buffer.concat([A, r]);
        }), this.message.on("end", () => {
          e(A.toString());
        });
      }));
    });
  }
  readBodyBuffer() {
    return Ze(this, void 0, void 0, function* () {
      return new Promise((e) => Ze(this, void 0, void 0, function* () {
        const A = [];
        this.message.on("data", (r) => {
          A.push(r);
        }), this.message.on("end", () => {
          e(Buffer.concat(A));
        });
      }));
    });
  }
}
QA.HttpClientResponse = vB;
function LR(t) {
  return new URL(t).protocol === "https:";
}
QA.isHttps = LR;
class MR {
  constructor(e, A, r) {
    this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = e, this.handlers = A || [], this.requestOptions = r, r && (r.ignoreSslError != null && (this._ignoreSslError = r.ignoreSslError), this._socketTimeout = r.socketTimeout, r.allowRedirects != null && (this._allowRedirects = r.allowRedirects), r.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = r.allowRedirectDowngrade), r.maxRedirects != null && (this._maxRedirects = Math.max(r.maxRedirects, 0)), r.keepAlive != null && (this._keepAlive = r.keepAlive), r.allowRetries != null && (this._allowRetries = r.allowRetries), r.maxRetries != null && (this._maxRetries = r.maxRetries));
  }
  options(e, A) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("OPTIONS", e, null, A || {});
    });
  }
  get(e, A) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("GET", e, null, A || {});
    });
  }
  del(e, A) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("DELETE", e, null, A || {});
    });
  }
  post(e, A, r) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("POST", e, A, r || {});
    });
  }
  patch(e, A, r) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("PATCH", e, A, r || {});
    });
  }
  put(e, A, r) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("PUT", e, A, r || {});
    });
  }
  head(e, A) {
    return Ze(this, void 0, void 0, function* () {
      return this.request("HEAD", e, null, A || {});
    });
  }
  sendStream(e, A, r, s) {
    return Ze(this, void 0, void 0, function* () {
      return this.request(e, A, r, s);
    });
  }
  /**
   * Gets a typed object from an endpoint
   * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
   */
  getJson(e, A = {}) {
    return Ze(this, void 0, void 0, function* () {
      A[bA.Accept] = this._getExistingOrDefaultHeader(A, bA.Accept, zt.ApplicationJson);
      const r = yield this.get(e, A);
      return this._processResponse(r, this.requestOptions);
    });
  }
  postJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[bA.Accept] = this._getExistingOrDefaultHeader(r, bA.Accept, zt.ApplicationJson), r[bA.ContentType] = this._getExistingOrDefaultHeader(r, bA.ContentType, zt.ApplicationJson);
      const n = yield this.post(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  putJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[bA.Accept] = this._getExistingOrDefaultHeader(r, bA.Accept, zt.ApplicationJson), r[bA.ContentType] = this._getExistingOrDefaultHeader(r, bA.ContentType, zt.ApplicationJson);
      const n = yield this.put(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  patchJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[bA.Accept] = this._getExistingOrDefaultHeader(r, bA.Accept, zt.ApplicationJson), r[bA.ContentType] = this._getExistingOrDefaultHeader(r, bA.ContentType, zt.ApplicationJson);
      const n = yield this.patch(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  /**
   * Makes a raw http request.
   * All other methods such as get, post, patch, and request ultimately call this.
   * Prefer get, del, post and patch
   */
  request(e, A, r, s) {
    return Ze(this, void 0, void 0, function* () {
      if (this._disposed)
        throw new Error("Client has already been disposed.");
      const n = new URL(A);
      let i = this._prepareRequest(e, n, s);
      const a = this._allowRetries && UR.includes(e) ? this._maxRetries + 1 : 1;
      let o = 0, c;
      do {
        if (c = yield this.requestRaw(i, r), c && c.message && c.message.statusCode === at.Unauthorized) {
          let h;
          for (const E of this.handlers)
            if (E.canHandleAuthentication(c)) {
              h = E;
              break;
            }
          return h ? h.handleAuthentication(this, i, r) : c;
        }
        let g = this._maxRedirects;
        for (; c.message.statusCode && FR.includes(c.message.statusCode) && this._allowRedirects && g > 0; ) {
          const h = c.message.headers.location;
          if (!h)
            break;
          const E = new URL(h);
          if (n.protocol === "https:" && n.protocol !== E.protocol && !this._allowRedirectDowngrade)
            throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
          if (yield c.readBody(), E.hostname !== n.hostname)
            for (const Q in s)
              Q.toLowerCase() === "authorization" && delete s[Q];
          i = this._prepareRequest(e, E, s), c = yield this.requestRaw(i, r), g--;
        }
        if (!c.message.statusCode || !NR.includes(c.message.statusCode))
          return c;
        o += 1, o < a && (yield c.readBody(), yield this._performExponentialBackoff(o));
      } while (o < a);
      return c;
    });
  }
  /**
   * Needs to be called if keepAlive is set to true in request options.
   */
  dispose() {
    this._agent && this._agent.destroy(), this._disposed = !0;
  }
  /**
   * Raw request.
   * @param info
   * @param data
   */
  requestRaw(e, A) {
    return Ze(this, void 0, void 0, function* () {
      return new Promise((r, s) => {
        function n(i, a) {
          i ? s(i) : a ? r(a) : s(new Error("Unknown error"));
        }
        this.requestRawWithCallback(e, A, n);
      });
    });
  }
  /**
   * Raw request with callback.
   * @param info
   * @param data
   * @param onResult
   */
  requestRawWithCallback(e, A, r) {
    typeof A == "string" && (e.options.headers || (e.options.headers = {}), e.options.headers["Content-Length"] = Buffer.byteLength(A, "utf8"));
    let s = !1;
    function n(o, c) {
      s || (s = !0, r(o, c));
    }
    const i = e.httpModule.request(e.options, (o) => {
      const c = new vB(o);
      n(void 0, c);
    });
    let a;
    i.on("socket", (o) => {
      a = o;
    }), i.setTimeout(this._socketTimeout || 3 * 6e4, () => {
      a && a.end(), n(new Error(`Request timeout: ${e.options.path}`));
    }), i.on("error", function(o) {
      n(o);
    }), A && typeof A == "string" && i.write(A, "utf8"), A && typeof A != "string" ? (A.on("close", function() {
      i.end();
    }), A.pipe(i)) : i.end();
  }
  /**
   * Gets an http agent. This function is useful when you need an http agent that handles
   * routing through a proxy server - depending upon the url and proxy environment variables.
   * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
   */
  getAgent(e) {
    const A = new URL(e);
    return this._getAgent(A);
  }
  getAgentDispatcher(e) {
    const A = new URL(e), r = Zg.getProxyUrl(A);
    if (r && r.hostname)
      return this._getProxyAgentDispatcher(A, r);
  }
  _prepareRequest(e, A, r) {
    const s = {};
    s.parsedUrl = A;
    const n = s.parsedUrl.protocol === "https:";
    s.httpModule = n ? pg : po;
    const i = n ? 443 : 80;
    if (s.options = {}, s.options.host = s.parsedUrl.hostname, s.options.port = s.parsedUrl.port ? parseInt(s.parsedUrl.port) : i, s.options.path = (s.parsedUrl.pathname || "") + (s.parsedUrl.search || ""), s.options.method = e, s.options.headers = this._mergeHeaders(r), this.userAgent != null && (s.options.headers["user-agent"] = this.userAgent), s.options.agent = this._getAgent(s.parsedUrl), this.handlers)
      for (const a of this.handlers)
        a.prepareRequest(s.options);
    return s;
  }
  _mergeHeaders(e) {
    return this.requestOptions && this.requestOptions.headers ? Object.assign({}, mo(this.requestOptions.headers), mo(e || {})) : mo(e || {});
  }
  _getExistingOrDefaultHeader(e, A, r) {
    let s;
    return this.requestOptions && this.requestOptions.headers && (s = mo(this.requestOptions.headers)[A]), e[A] || s || r;
  }
  _getAgent(e) {
    let A;
    const r = Zg.getProxyUrl(e), s = r && r.hostname;
    if (this._keepAlive && s && (A = this._proxyAgent), this._keepAlive && !s && (A = this._agent), A)
      return A;
    const n = e.protocol === "https:";
    let i = 100;
    if (this.requestOptions && (i = this.requestOptions.maxSockets || po.globalAgent.maxSockets), r && r.hostname) {
      const a = {
        maxSockets: i,
        keepAlive: this._keepAlive,
        proxy: Object.assign(Object.assign({}, (r.username || r.password) && {
          proxyAuth: `${r.username}:${r.password}`
        }), { host: r.hostname, port: r.port })
      };
      let o;
      const c = r.protocol === "https:";
      n ? o = c ? wo.httpsOverHttps : wo.httpsOverHttp : o = c ? wo.httpOverHttps : wo.httpOverHttp, A = o(a), this._proxyAgent = A;
    }
    if (this._keepAlive && !A) {
      const a = { keepAlive: this._keepAlive, maxSockets: i };
      A = n ? new pg.Agent(a) : new po.Agent(a), this._agent = A;
    }
    return A || (A = n ? pg.globalAgent : po.globalAgent), n && this._ignoreSslError && (A.options = Object.assign(A.options || {}, {
      rejectUnauthorized: !1
    })), A;
  }
  _getProxyAgentDispatcher(e, A) {
    let r;
    if (this._keepAlive && (r = this._proxyAgentDispatcher), r)
      return r;
    const s = e.protocol === "https:";
    return r = new kR.ProxyAgent(Object.assign({ uri: A.href, pipelining: this._keepAlive ? 1 : 0 }, (A.username || A.password) && {
      token: `${A.username}:${A.password}`
    })), this._proxyAgentDispatcher = r, s && this._ignoreSslError && (r.options = Object.assign(r.options.requestTls || {}, {
      rejectUnauthorized: !1
    })), r;
  }
  _performExponentialBackoff(e) {
    return Ze(this, void 0, void 0, function* () {
      e = Math.min(TR, e);
      const A = vR * Math.pow(2, e);
      return new Promise((r) => setTimeout(() => r(), A));
    });
  }
  _processResponse(e, A) {
    return Ze(this, void 0, void 0, function* () {
      return new Promise((r, s) => Ze(this, void 0, void 0, function* () {
        const n = e.message.statusCode || 0, i = {
          statusCode: n,
          result: null,
          headers: {}
        };
        n === at.NotFound && r(i);
        function a(g, h) {
          if (typeof h == "string") {
            const E = new Date(h);
            if (!isNaN(E.valueOf()))
              return E;
          }
          return h;
        }
        let o, c;
        try {
          c = yield e.readBody(), c && c.length > 0 && (A && A.deserializeDates ? o = JSON.parse(c, a) : o = JSON.parse(c), i.result = o), i.headers = e.message.headers;
        } catch {
        }
        if (n > 299) {
          let g;
          o && o.message ? g = o.message : c && c.length > 0 ? g = c : g = `Failed request: (${n})`;
          const h = new Sa(g, n);
          h.result = i.result, s(h);
        } else
          r(i);
      }));
    });
  }
}
QA.HttpClient = MR;
const mo = (t) => Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {});
var Gr = {}, vl = ge && ge.__awaiter || function(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function a(g) {
      try {
        c(r.next(g));
      } catch (h) {
        i(h);
      }
    }
    function o(g) {
      try {
        c(r.throw(g));
      } catch (h) {
        i(h);
      }
    }
    function c(g) {
      g.done ? n(g.value) : s(g.value).then(a, o);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.PersonalAccessTokenCredentialHandler = Gr.BearerCredentialHandler = Gr.BasicCredentialHandler = void 0;
class GR {
  constructor(e, A) {
    this.username = e, this.password = A;
  }
  prepareRequest(e) {
    if (!e.headers)
      throw Error("The request has no headers");
    e.headers.Authorization = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return !1;
  }
  handleAuthentication() {
    return vl(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.BasicCredentialHandler = GR;
class YR {
  constructor(e) {
    this.token = e;
  }
  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(e) {
    if (!e.headers)
      throw Error("The request has no headers");
    e.headers.Authorization = `Bearer ${this.token}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return !1;
  }
  handleAuthentication() {
    return vl(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.BearerCredentialHandler = YR;
class JR {
  constructor(e) {
    this.token = e;
  }
  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(e) {
    if (!e.headers)
      throw Error("The request has no headers");
    e.headers.Authorization = `Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return !1;
  }
  handleAuthentication() {
    return vl(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.PersonalAccessTokenCredentialHandler = JR;
var Eu;
function _R() {
  if (Eu)
    return mn;
  Eu = 1;
  var t = ge && ge.__awaiter || function(n, i, a, o) {
    function c(g) {
      return g instanceof a ? g : new a(function(h) {
        h(g);
      });
    }
    return new (a || (a = Promise))(function(g, h) {
      function E(u) {
        try {
          C(o.next(u));
        } catch (B) {
          h(B);
        }
      }
      function Q(u) {
        try {
          C(o.throw(u));
        } catch (B) {
          h(B);
        }
      }
      function C(u) {
        u.done ? g(u.value) : c(u.value).then(E, Q);
      }
      C((o = o.apply(n, i || [])).next());
    });
  };
  Object.defineProperty(mn, "__esModule", { value: !0 }), mn.OidcClient = void 0;
  const e = QA, A = Gr, r = LB();
  class s {
    static createHttpClient(i = !0, a = 10) {
      const o = {
        allowRetries: i,
        maxRetries: a
      };
      return new e.HttpClient("actions/oidc-client", [new A.BearerCredentialHandler(s.getRequestToken())], o);
    }
    static getRequestToken() {
      const i = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
      if (!i)
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
      return i;
    }
    static getIDTokenUrl() {
      const i = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
      if (!i)
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
      return i;
    }
    static getCall(i) {
      var a;
      return t(this, void 0, void 0, function* () {
        const g = (a = (yield s.createHttpClient().getJson(i).catch((h) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${h.statusCode}
 
        Error Message: ${h.message}`);
        })).result) === null || a === void 0 ? void 0 : a.value;
        if (!g)
          throw new Error("Response json body do not have ID Token field");
        return g;
      });
    }
    static getIDToken(i) {
      return t(this, void 0, void 0, function* () {
        try {
          let a = s.getIDTokenUrl();
          if (i) {
            const c = encodeURIComponent(i);
            a = `${a}&audience=${c}`;
          }
          r.debug(`ID token url is ${a}`);
          const o = yield s.getCall(a);
          return r.setSecret(o), o;
        } catch (a) {
          throw new Error(`Error message: ${a.message}`);
        }
      });
    }
  }
  return mn.OidcClient = s, mn;
}
var wg = {}, uu;
function Qu() {
  return uu || (uu = 1, function(t) {
    var e = ge && ge.__awaiter || function(c, g, h, E) {
      function Q(C) {
        return C instanceof h ? C : new h(function(u) {
          u(C);
        });
      }
      return new (h || (h = Promise))(function(C, u) {
        function B(w) {
          try {
            d(E.next(w));
          } catch (m) {
            u(m);
          }
        }
        function I(w) {
          try {
            d(E.throw(w));
          } catch (m) {
            u(m);
          }
        }
        function d(w) {
          w.done ? C(w.value) : Q(w.value).then(B, I);
        }
        d((E = E.apply(c, g || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.summary = t.markdownSummary = t.SUMMARY_DOCS_URL = t.SUMMARY_ENV_VAR = void 0;
    const A = Yi, r = eQ, { access: s, appendFile: n, writeFile: i } = r.promises;
    t.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY", t.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
    class a {
      constructor() {
        this._buffer = "";
      }
      /**
       * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
       * Also checks r/w permissions.
       *
       * @returns step summary file path
       */
      filePath() {
        return e(this, void 0, void 0, function* () {
          if (this._filePath)
            return this._filePath;
          const g = process.env[t.SUMMARY_ENV_VAR];
          if (!g)
            throw new Error(`Unable to find environment variable for $${t.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
          try {
            yield s(g, r.constants.R_OK | r.constants.W_OK);
          } catch {
            throw new Error(`Unable to access summary file: '${g}'. Check if the file has correct read/write permissions.`);
          }
          return this._filePath = g, this._filePath;
        });
      }
      /**
       * Wraps content in an HTML tag, adding any HTML attributes
       *
       * @param {string} tag HTML tag to wrap
       * @param {string | null} content content within the tag
       * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
       *
       * @returns {string} content wrapped in HTML element
       */
      wrap(g, h, E = {}) {
        const Q = Object.entries(E).map(([C, u]) => ` ${C}="${u}"`).join("");
        return h ? `<${g}${Q}>${h}</${g}>` : `<${g}${Q}>`;
      }
      /**
       * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
       *
       * @param {SummaryWriteOptions} [options] (optional) options for write operation
       *
       * @returns {Promise<Summary>} summary instance
       */
      write(g) {
        return e(this, void 0, void 0, function* () {
          const h = !!(g != null && g.overwrite), E = yield this.filePath();
          return yield (h ? i : n)(E, this._buffer, { encoding: "utf8" }), this.emptyBuffer();
        });
      }
      /**
       * Clears the summary buffer and wipes the summary file
       *
       * @returns {Summary} summary instance
       */
      clear() {
        return e(this, void 0, void 0, function* () {
          return this.emptyBuffer().write({ overwrite: !0 });
        });
      }
      /**
       * Returns the current summary buffer as a string
       *
       * @returns {string} string of summary buffer
       */
      stringify() {
        return this._buffer;
      }
      /**
       * If the summary buffer is empty
       *
       * @returns {boolen} true if the buffer is empty
       */
      isEmptyBuffer() {
        return this._buffer.length === 0;
      }
      /**
       * Resets the summary buffer without writing to summary file
       *
       * @returns {Summary} summary instance
       */
      emptyBuffer() {
        return this._buffer = "", this;
      }
      /**
       * Adds raw text to the summary buffer
       *
       * @param {string} text content to add
       * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
       *
       * @returns {Summary} summary instance
       */
      addRaw(g, h = !1) {
        return this._buffer += g, h ? this.addEOL() : this;
      }
      /**
       * Adds the operating system-specific end-of-line marker to the buffer
       *
       * @returns {Summary} summary instance
       */
      addEOL() {
        return this.addRaw(A.EOL);
      }
      /**
       * Adds an HTML codeblock to the summary buffer
       *
       * @param {string} code content to render within fenced code block
       * @param {string} lang (optional) language to syntax highlight code
       *
       * @returns {Summary} summary instance
       */
      addCodeBlock(g, h) {
        const E = Object.assign({}, h && { lang: h }), Q = this.wrap("pre", this.wrap("code", g), E);
        return this.addRaw(Q).addEOL();
      }
      /**
       * Adds an HTML list to the summary buffer
       *
       * @param {string[]} items list of items to render
       * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
       *
       * @returns {Summary} summary instance
       */
      addList(g, h = !1) {
        const E = h ? "ol" : "ul", Q = g.map((u) => this.wrap("li", u)).join(""), C = this.wrap(E, Q);
        return this.addRaw(C).addEOL();
      }
      /**
       * Adds an HTML table to the summary buffer
       *
       * @param {SummaryTableCell[]} rows table rows
       *
       * @returns {Summary} summary instance
       */
      addTable(g) {
        const h = g.map((Q) => {
          const C = Q.map((u) => {
            if (typeof u == "string")
              return this.wrap("td", u);
            const { header: B, data: I, colspan: d, rowspan: w } = u, m = B ? "th" : "td", p = Object.assign(Object.assign({}, d && { colspan: d }), w && { rowspan: w });
            return this.wrap(m, I, p);
          }).join("");
          return this.wrap("tr", C);
        }).join(""), E = this.wrap("table", h);
        return this.addRaw(E).addEOL();
      }
      /**
       * Adds a collapsable HTML details element to the summary buffer
       *
       * @param {string} label text for the closed state
       * @param {string} content collapsable content
       *
       * @returns {Summary} summary instance
       */
      addDetails(g, h) {
        const E = this.wrap("details", this.wrap("summary", g) + h);
        return this.addRaw(E).addEOL();
      }
      /**
       * Adds an HTML image tag to the summary buffer
       *
       * @param {string} src path to the image you to embed
       * @param {string} alt text description of the image
       * @param {SummaryImageOptions} options (optional) addition image attributes
       *
       * @returns {Summary} summary instance
       */
      addImage(g, h, E) {
        const { width: Q, height: C } = E || {}, u = Object.assign(Object.assign({}, Q && { width: Q }), C && { height: C }), B = this.wrap("img", null, Object.assign({ src: g, alt: h }, u));
        return this.addRaw(B).addEOL();
      }
      /**
       * Adds an HTML section heading element
       *
       * @param {string} text heading text
       * @param {number | string} [level=1] (optional) the heading level, default: 1
       *
       * @returns {Summary} summary instance
       */
      addHeading(g, h) {
        const E = `h${h}`, Q = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(E) ? E : "h1", C = this.wrap(Q, g);
        return this.addRaw(C).addEOL();
      }
      /**
       * Adds an HTML thematic break (<hr>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addSeparator() {
        const g = this.wrap("hr", null);
        return this.addRaw(g).addEOL();
      }
      /**
       * Adds an HTML line break (<br>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addBreak() {
        const g = this.wrap("br", null);
        return this.addRaw(g).addEOL();
      }
      /**
       * Adds an HTML blockquote to the summary buffer
       *
       * @param {string} text quote text
       * @param {string} cite (optional) citation url
       *
       * @returns {Summary} summary instance
       */
      addQuote(g, h) {
        const E = Object.assign({}, h && { cite: h }), Q = this.wrap("blockquote", g, E);
        return this.addRaw(Q).addEOL();
      }
      /**
       * Adds an HTML anchor tag to the summary buffer
       *
       * @param {string} text link text/content
       * @param {string} href hyperlink
       *
       * @returns {Summary} summary instance
       */
      addLink(g, h) {
        const E = this.wrap("a", g, { href: h });
        return this.addRaw(E).addEOL();
      }
    }
    const o = new a();
    t.markdownSummary = o, t.summary = o;
  }(wg)), wg;
}
var qt = {}, Cu;
function OR() {
  if (Cu)
    return qt;
  Cu = 1;
  var t = ge && ge.__createBinding || (Object.create ? function(a, o, c, g) {
    g === void 0 && (g = c), Object.defineProperty(a, g, { enumerable: !0, get: function() {
      return o[c];
    } });
  } : function(a, o, c, g) {
    g === void 0 && (g = c), a[g] = o[c];
  }), e = ge && ge.__setModuleDefault || (Object.create ? function(a, o) {
    Object.defineProperty(a, "default", { enumerable: !0, value: o });
  } : function(a, o) {
    a.default = o;
  }), A = ge && ge.__importStar || function(a) {
    if (a && a.__esModule)
      return a;
    var o = {};
    if (a != null)
      for (var c in a)
        c !== "default" && Object.hasOwnProperty.call(a, c) && t(o, a, c);
    return e(o, a), o;
  };
  Object.defineProperty(qt, "__esModule", { value: !0 }), qt.toPlatformPath = qt.toWin32Path = qt.toPosixPath = void 0;
  const r = A(AQ);
  function s(a) {
    return a.replace(/[\\]/g, "/");
  }
  qt.toPosixPath = s;
  function n(a) {
    return a.replace(/[/]/g, "\\");
  }
  qt.toWin32Path = n;
  function i(a) {
    return a.replace(/[/\\]/g, r.sep);
  }
  return qt.toPlatformPath = i, qt;
}
var Bu;
function LB() {
  return Bu || (Bu = 1, function(t) {
    var e = ge && ge.__createBinding || (Object.create ? function(k, q, F, f) {
      f === void 0 && (f = F), Object.defineProperty(k, f, { enumerable: !0, get: function() {
        return q[F];
      } });
    } : function(k, q, F, f) {
      f === void 0 && (f = F), k[f] = q[F];
    }), A = ge && ge.__setModuleDefault || (Object.create ? function(k, q) {
      Object.defineProperty(k, "default", { enumerable: !0, value: q });
    } : function(k, q) {
      k.default = q;
    }), r = ge && ge.__importStar || function(k) {
      if (k && k.__esModule)
        return k;
      var q = {};
      if (k != null)
        for (var F in k)
          F !== "default" && Object.hasOwnProperty.call(k, F) && e(q, k, F);
      return A(q, k), q;
    }, s = ge && ge.__awaiter || function(k, q, F, f) {
      function M(_) {
        return _ instanceof F ? _ : new F(function(J) {
          J(_);
        });
      }
      return new (F || (F = Promise))(function(_, J) {
        function P(ae) {
          try {
            V(f.next(ae));
          } catch (oe) {
            J(oe);
          }
        }
        function G(ae) {
          try {
            V(f.throw(ae));
          } catch (oe) {
            J(oe);
          }
        }
        function V(ae) {
          ae.done ? _(ae.value) : M(ae.value).then(P, G);
        }
        V((f = f.apply(k, q || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getIDToken = t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.notice = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
    const n = sn, i = nn, a = Jr, o = r(Yi), c = r(AQ), g = _R();
    var h;
    (function(k) {
      k[k.Success = 0] = "Success", k[k.Failure = 1] = "Failure";
    })(h = t.ExitCode || (t.ExitCode = {}));
    function E(k, q) {
      const F = a.toCommandValue(q);
      if (process.env[k] = F, process.env.GITHUB_ENV || "")
        return i.issueFileCommand("ENV", i.prepareKeyValueMessage(k, q));
      n.issueCommand("set-env", { name: k }, F);
    }
    t.exportVariable = E;
    function Q(k) {
      n.issueCommand("add-mask", {}, k);
    }
    t.setSecret = Q;
    function C(k) {
      process.env.GITHUB_PATH || "" ? i.issueFileCommand("PATH", k) : n.issueCommand("add-path", {}, k), process.env.PATH = `${k}${c.delimiter}${process.env.PATH}`;
    }
    t.addPath = C;
    function u(k, q) {
      const F = process.env[`INPUT_${k.replace(/ /g, "_").toUpperCase()}`] || "";
      if (q && q.required && !F)
        throw new Error(`Input required and not supplied: ${k}`);
      return q && q.trimWhitespace === !1 ? F : F.trim();
    }
    t.getInput = u;
    function B(k, q) {
      const F = u(k, q).split(`
`).filter((f) => f !== "");
      return q && q.trimWhitespace === !1 ? F : F.map((f) => f.trim());
    }
    t.getMultilineInput = B;
    function I(k, q) {
      const F = ["true", "True", "TRUE"], f = ["false", "False", "FALSE"], M = u(k, q);
      if (F.includes(M))
        return !0;
      if (f.includes(M))
        return !1;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${k}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    t.getBooleanInput = I;
    function d(k, q) {
      if (process.env.GITHUB_OUTPUT || "")
        return i.issueFileCommand("OUTPUT", i.prepareKeyValueMessage(k, q));
      process.stdout.write(o.EOL), n.issueCommand("set-output", { name: k }, a.toCommandValue(q));
    }
    t.setOutput = d;
    function w(k) {
      n.issue("echo", k ? "on" : "off");
    }
    t.setCommandEcho = w;
    function m(k) {
      process.exitCode = h.Failure, D(k);
    }
    t.setFailed = m;
    function p() {
      return process.env.RUNNER_DEBUG === "1";
    }
    t.isDebug = p;
    function R(k) {
      n.issueCommand("debug", {}, k);
    }
    t.debug = R;
    function D(k, q = {}) {
      n.issueCommand("error", a.toCommandProperties(q), k instanceof Error ? k.toString() : k);
    }
    t.error = D;
    function S(k, q = {}) {
      n.issueCommand("warning", a.toCommandProperties(q), k instanceof Error ? k.toString() : k);
    }
    t.warning = S;
    function v(k, q = {}) {
      n.issueCommand("notice", a.toCommandProperties(q), k instanceof Error ? k.toString() : k);
    }
    t.notice = v;
    function T(k) {
      process.stdout.write(k + o.EOL);
    }
    t.info = T;
    function X(k) {
      n.issue("group", k);
    }
    t.startGroup = X;
    function K() {
      n.issue("endgroup");
    }
    t.endGroup = K;
    function z(k, q) {
      return s(this, void 0, void 0, function* () {
        X(k);
        let F;
        try {
          F = yield q();
        } finally {
          K();
        }
        return F;
      });
    }
    t.group = z;
    function ue(k, q) {
      if (process.env.GITHUB_STATE || "")
        return i.issueFileCommand("STATE", i.prepareKeyValueMessage(k, q));
      n.issueCommand("save-state", { name: k }, a.toCommandValue(q));
    }
    t.saveState = ue;
    function Y(k) {
      return process.env[`STATE_${k}`] || "";
    }
    t.getState = Y;
    function ee(k) {
      return s(this, void 0, void 0, function* () {
        return yield g.OidcClient.getIDToken(k);
      });
    }
    t.getIDToken = ee;
    var re = Qu();
    Object.defineProperty(t, "summary", { enumerable: !0, get: function() {
      return re.summary;
    } });
    var ne = Qu();
    Object.defineProperty(t, "markdownSummary", { enumerable: !0, get: function() {
      return ne.markdownSummary;
    } });
    var Z = OR();
    Object.defineProperty(t, "toPosixPath", { enumerable: !0, get: function() {
      return Z.toPosixPath;
    } }), Object.defineProperty(t, "toWin32Path", { enumerable: !0, get: function() {
      return Z.toWin32Path;
    } }), Object.defineProperty(t, "toPlatformPath", { enumerable: !0, get: function() {
      return Z.toPlatformPath;
    } });
  }(Wa)), Wa;
}
var MB = LB();
function HR(t) {
  return t === null ? null : t.split(Yi.EOL).map((e) => e.trim()).filter(Boolean);
}
const PR = {
  parseList: HR
}, qi = (t, e) => {
  const A = MB.getInput(t, e);
  return !(e != null && e.required) && A === "" ? null : A;
};
function VR(t, e) {
  const A = qi(t, e);
  return A === "true" ? !0 : A === "false" ? !1 : null;
}
function WR(t, e) {
  const A = qi(t, e);
  return typeof A == "string" ? parseInt(A, 10) : null;
}
function xR(t, e) {
  return qi(t, e);
}
function qR(t, e) {
  return PR.parseList(qi(t, e));
}
const jR = (t) => qi(t) !== null, ze = {
  getInputAsBoolean: VR,
  getInputAsInteger: WR,
  getInputAsString: xR,
  getInputAsStrings: qR,
  hasInput: jR
}, ZR = (t) => Ql.cleanEnv(process.env, t, {
  reporter: ({ errors: e }) => {
    const A = Object.keys(e);
    if (A.length > 0)
      throw new Error(`Missing env(s): ${A.join(", ")}`);
  }
}), zR = {
  requireEnv: ZR
}, XR = (t) => cQ(`git ls-files --exclude-standard --others ${t} | wc -l`).toString().trim() === "1", $R = (t) => cQ(`git diff --shortstat ${t} | wc -l`).toString().trim() === "1", Iu = {
  isFileUntracked: XR,
  isFileChanged: $R
}, KR = (t, e) => Object.values(t)[0] === e ? {} : t, Fe = KR;
var eD = GB;
function GB(t, e, A) {
  t instanceof RegExp && (t = du(t, A)), e instanceof RegExp && (e = du(e, A));
  var r = YB(t, e, A);
  return r && {
    start: r[0],
    end: r[1],
    pre: A.slice(0, r[0]),
    body: A.slice(r[0] + t.length, r[1]),
    post: A.slice(r[1] + e.length)
  };
}
function du(t, e) {
  var A = e.match(t);
  return A ? A[0] : null;
}
GB.range = YB;
function YB(t, e, A) {
  var r, s, n, i, a, o = A.indexOf(t), c = A.indexOf(e, o + 1), g = o;
  if (o >= 0 && c > 0) {
    if (t === e)
      return [o, c];
    for (r = [], n = A.length; g >= 0 && !a; )
      g == o ? (r.push(g), o = A.indexOf(t, g + 1)) : r.length == 1 ? a = [r.pop(), c] : (s = r.pop(), s < n && (n = s, i = c), c = A.indexOf(e, g + 1)), g = o < c && o >= 0 ? o : c;
    r.length && (a = [n, i]);
  }
  return a;
}
var JB = eD, AD = sD, _B = "\0SLASH" + Math.random() + "\0", OB = "\0OPEN" + Math.random() + "\0", Ll = "\0CLOSE" + Math.random() + "\0", HB = "\0COMMA" + Math.random() + "\0", PB = "\0PERIOD" + Math.random() + "\0";
function mg(t) {
  return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
}
function tD(t) {
  return t.split("\\\\").join(_B).split("\\{").join(OB).split("\\}").join(Ll).split("\\,").join(HB).split("\\.").join(PB);
}
function rD(t) {
  return t.split(_B).join("\\").split(OB).join("{").split(Ll).join("}").split(HB).join(",").split(PB).join(".");
}
function VB(t) {
  if (!t)
    return [""];
  var e = [], A = JB("{", "}", t);
  if (!A)
    return t.split(",");
  var r = A.pre, s = A.body, n = A.post, i = r.split(",");
  i[i.length - 1] += "{" + s + "}";
  var a = VB(n);
  return n.length && (i[i.length - 1] += a.shift(), i.push.apply(i, a)), e.push.apply(e, i), e;
}
function sD(t) {
  return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), Wn(tD(t), !0).map(rD)) : [];
}
function nD(t) {
  return "{" + t + "}";
}
function iD(t) {
  return /^-?0\d/.test(t);
}
function oD(t, e) {
  return t <= e;
}
function aD(t, e) {
  return t >= e;
}
function Wn(t, e) {
  var A = [], r = JB("{", "}", t);
  if (!r)
    return [t];
  var s = r.pre, n = r.post.length ? Wn(r.post, !1) : [""];
  if (/\$$/.test(r.pre))
    for (var i = 0; i < n.length; i++) {
      var a = s + "{" + r.body + "}" + n[i];
      A.push(a);
    }
  else {
    var o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body), g = o || c, h = r.body.indexOf(",") >= 0;
    if (!g && !h)
      return r.post.match(/,.*\}/) ? (t = r.pre + "{" + r.body + Ll + r.post, Wn(t)) : [t];
    var E;
    if (g)
      E = r.body.split(/\.\./);
    else if (E = VB(r.body), E.length === 1 && (E = Wn(E[0], !1).map(nD), E.length === 1))
      return n.map(function(T) {
        return r.pre + E[0] + T;
      });
    var Q;
    if (g) {
      var C = mg(E[0]), u = mg(E[1]), B = Math.max(E[0].length, E[1].length), I = E.length == 3 ? Math.abs(mg(E[2])) : 1, d = oD, w = u < C;
      w && (I *= -1, d = aD);
      var m = E.some(iD);
      Q = [];
      for (var p = C; d(p, u); p += I) {
        var R;
        if (c)
          R = String.fromCharCode(p), R === "\\" && (R = "");
        else if (R = String(p), m) {
          var D = B - R.length;
          if (D > 0) {
            var S = new Array(D + 1).join("0");
            p < 0 ? R = "-" + S + R.slice(1) : R = S + R;
          }
        }
        Q.push(R);
      }
    } else {
      Q = [];
      for (var v = 0; v < E.length; v++)
        Q.push.apply(Q, Wn(E[v], !1));
    }
    for (var v = 0; v < Q.length; v++)
      for (var i = 0; i < n.length; i++) {
        var a = s + Q[v] + n[i];
        (!e || g || a) && A.push(a);
      }
  }
  return A;
}
const cD = /* @__PURE__ */ ul(AD), gD = 1024 * 64, $o = (t) => {
  if (typeof t != "string")
    throw new TypeError("invalid pattern");
  if (t.length > gD)
    throw new TypeError("pattern is too long");
}, lD = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
  "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
  "[:ascii:]": ["\\x00-\\x7f", !1],
  "[:blank:]": ["\\p{Zs}\\t", !0],
  "[:cntrl:]": ["\\p{Cc}", !0],
  "[:digit:]": ["\\p{Nd}", !0],
  "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
  "[:lower:]": ["\\p{Ll}", !0],
  "[:print:]": ["\\p{C}", !0],
  "[:punct:]": ["\\p{P}", !0],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
  "[:upper:]": ["\\p{Lu}", !0],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
  "[:xdigit:]": ["A-Fa-f0-9", !1]
}, Tn = (t) => t.replace(/[[\]\\-]/g, "\\$&"), hD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), fu = (t) => t.join(""), ED = (t, e) => {
  const A = e;
  if (t.charAt(A) !== "[")
    throw new Error("not in a brace expression");
  const r = [], s = [];
  let n = A + 1, i = !1, a = !1, o = !1, c = !1, g = A, h = "";
  e:
    for (; n < t.length; ) {
      const u = t.charAt(n);
      if ((u === "!" || u === "^") && n === A + 1) {
        c = !0, n++;
        continue;
      }
      if (u === "]" && i && !o) {
        g = n + 1;
        break;
      }
      if (i = !0, u === "\\" && !o) {
        o = !0, n++;
        continue;
      }
      if (u === "[" && !o) {
        for (const [B, [I, d, w]] of Object.entries(lD))
          if (t.startsWith(B, n)) {
            if (h)
              return ["$.", !1, t.length - A, !0];
            n += B.length, w ? s.push(I) : r.push(I), a = a || d;
            continue e;
          }
      }
      if (o = !1, h) {
        u > h ? r.push(Tn(h) + "-" + Tn(u)) : u === h && r.push(Tn(u)), h = "", n++;
        continue;
      }
      if (t.startsWith("-]", n + 1)) {
        r.push(Tn(u + "-")), n += 2;
        continue;
      }
      if (t.startsWith("-", n + 1)) {
        h = u, n += 2;
        continue;
      }
      r.push(Tn(u)), n++;
    }
  if (g < n)
    return ["", !1, 0, !1];
  if (!r.length && !s.length)
    return ["$.", !1, t.length - A, !0];
  if (s.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !c) {
    const u = r[0].length === 2 ? r[0].slice(-1) : r[0];
    return [hD(u), !1, g - A, !1];
  }
  const E = "[" + (c ? "^" : "") + fu(r) + "]", Q = "[" + (c ? "" : "^") + fu(s) + "]";
  return [r.length && s.length ? "(" + E + "|" + Q + ")" : r.length ? E : Q, a, g - A, !0];
}, Gs = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/\[([^\/\\])\]/g, "$1") : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), uD = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), pu = (t) => uD.has(t), QD = "(?!(?:^|/)\\.\\.?(?:$|/))", yo = "(?!\\.)", CD = /* @__PURE__ */ new Set(["[", "."]), BD = /* @__PURE__ */ new Set(["..", "."]), ID = new Set("().*{}+?[]^$\\!"), dD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Ml = "[^/]", wu = Ml + "*?", mu = Ml + "+?";
var rA, lA, Xt, Me, $e, br, rs, kr, $t, ss, ri, na, WB, Os, Go, si, zg, ia, xB;
const kA = class kA {
  constructor(e, A, r = {}) {
    N(this, na);
    N(this, si);
    L(this, "type");
    N(this, rA, void 0);
    N(this, lA, void 0);
    N(this, Xt, !1);
    N(this, Me, []);
    N(this, $e, void 0);
    N(this, br, void 0);
    N(this, rs, void 0);
    N(this, kr, !1);
    N(this, $t, void 0);
    N(this, ss, void 0);
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    N(this, ri, !1);
    this.type = e, e && b(this, lA, !0), b(this, $e, A), b(this, rA, l(this, $e) ? l(l(this, $e), rA) : this), b(this, $t, l(this, rA) === this ? r : l(l(this, rA), $t)), b(this, rs, l(this, rA) === this ? [] : l(l(this, rA), rs)), e === "!" && !l(l(this, rA), kr) && l(this, rs).push(this), b(this, br, l(this, $e) ? l(l(this, $e), Me).length : 0);
  }
  get hasMagic() {
    if (l(this, lA) !== void 0)
      return l(this, lA);
    for (const e of l(this, Me))
      if (typeof e != "string" && (e.type || e.hasMagic))
        return b(this, lA, !0);
    return l(this, lA);
  }
  // reconstructs the pattern
  toString() {
    return l(this, ss) !== void 0 ? l(this, ss) : this.type ? b(this, ss, this.type + "(" + l(this, Me).map((e) => String(e)).join("|") + ")") : b(this, ss, l(this, Me).map((e) => String(e)).join(""));
  }
  push(...e) {
    for (const A of e)
      if (A !== "") {
        if (typeof A != "string" && !(A instanceof kA && l(A, $e) === this))
          throw new Error("invalid part: " + A);
        l(this, Me).push(A);
      }
  }
  toJSON() {
    var A;
    const e = this.type === null ? l(this, Me).slice().map((r) => typeof r == "string" ? r : r.toJSON()) : [this.type, ...l(this, Me).map((r) => r.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === l(this, rA) || l(l(this, rA), kr) && ((A = l(this, $e)) == null ? void 0 : A.type) === "!") && e.push({}), e;
  }
  isStart() {
    var A;
    if (l(this, rA) === this)
      return !0;
    if (!((A = l(this, $e)) != null && A.isStart()))
      return !1;
    if (l(this, br) === 0)
      return !0;
    const e = l(this, $e);
    for (let r = 0; r < l(this, br); r++) {
      const s = l(e, Me)[r];
      if (!(s instanceof kA && s.type === "!"))
        return !1;
    }
    return !0;
  }
  isEnd() {
    var A, r, s;
    if (l(this, rA) === this || ((A = l(this, $e)) == null ? void 0 : A.type) === "!")
      return !0;
    if (!((r = l(this, $e)) != null && r.isEnd()))
      return !1;
    if (!this.type)
      return (s = l(this, $e)) == null ? void 0 : s.isEnd();
    const e = l(this, $e) ? l(l(this, $e), Me).length : 0;
    return l(this, br) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const A = new kA(this.type, e);
    for (const r of l(this, Me))
      A.copyIn(r);
    return A;
  }
  static fromGlob(e, A = {}) {
    var s;
    const r = new kA(null, void 0, A);
    return O(s = kA, Os, Go).call(s, e, r, 0, A), r;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== l(this, rA))
      return l(this, rA).toMMPattern();
    const e = this.toString(), [A, r, s, n] = this.toRegExpSource();
    if (!(s || l(this, lA) || l(this, $t).nocase && !l(this, $t).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase()))
      return r;
    const a = (l(this, $t).nocase ? "i" : "") + (n ? "u" : "");
    return Object.assign(new RegExp(`^${A}$`, a), {
      _src: A,
      _glob: e
    });
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(e) {
    var o;
    const A = e ?? !!l(this, $t).dot;
    if (l(this, rA) === this && O(this, na, WB).call(this), !this.type) {
      const c = this.isStart() && this.isEnd(), g = l(this, Me).map((C) => {
        var w;
        const [u, B, I, d] = typeof C == "string" ? O(w = kA, ia, xB).call(w, C, l(this, lA), c) : C.toRegExpSource(e);
        return b(this, lA, l(this, lA) || I), b(this, Xt, l(this, Xt) || d), u;
      }).join("");
      let h = "";
      if (this.isStart() && typeof l(this, Me)[0] == "string" && !(l(this, Me).length === 1 && BD.has(l(this, Me)[0]))) {
        const u = CD, B = (
          // dots are allowed, and the pattern starts with [ or .
          A && u.has(g.charAt(0)) || // the pattern starts with \., and then [ or .
          g.startsWith("\\.") && u.has(g.charAt(2)) || // the pattern starts with \.\., and then [ or .
          g.startsWith("\\.\\.") && u.has(g.charAt(4))
        ), I = !A && !e && u.has(g.charAt(0));
        h = B ? QD : I ? yo : "";
      }
      let E = "";
      return this.isEnd() && l(l(this, rA), kr) && ((o = l(this, $e)) == null ? void 0 : o.type) === "!" && (E = "(?:$|\\/)"), [
        h + g + E,
        Gs(g),
        b(this, lA, !!l(this, lA)),
        l(this, Xt)
      ];
    }
    const r = this.type === "*" || this.type === "+", s = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let n = O(this, si, zg).call(this, A);
    if (this.isStart() && this.isEnd() && !n && this.type !== "!") {
      const c = this.toString();
      return b(this, Me, [c]), this.type = null, b(this, lA, void 0), [c, Gs(this.toString()), !1, !1];
    }
    let i = !r || e || A || !yo ? "" : O(this, si, zg).call(this, !0);
    i === n && (i = ""), i && (n = `(?:${n})(?:${i})*?`);
    let a = "";
    if (this.type === "!" && l(this, ri))
      a = (this.isStart() && !A ? yo : "") + mu;
    else {
      const c = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !A && !e ? yo : "") + wu + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && i ? ")" : this.type === "*" && i ? ")?" : `)${this.type}`;
      a = s + n + c;
    }
    return [
      a,
      Gs(n),
      b(this, lA, !!l(this, lA)),
      l(this, Xt)
    ];
  }
};
rA = new WeakMap(), lA = new WeakMap(), Xt = new WeakMap(), Me = new WeakMap(), $e = new WeakMap(), br = new WeakMap(), rs = new WeakMap(), kr = new WeakMap(), $t = new WeakMap(), ss = new WeakMap(), ri = new WeakMap(), na = new WeakSet(), WB = function() {
  if (this !== l(this, rA))
    throw new Error("should only call on root");
  if (l(this, kr))
    return this;
  this.toString(), b(this, kr, !0);
  let e;
  for (; e = l(this, rs).pop(); ) {
    if (e.type !== "!")
      continue;
    let A = e, r = l(A, $e);
    for (; r; ) {
      for (let s = l(A, br) + 1; !r.type && s < l(r, Me).length; s++)
        for (const n of l(e, Me)) {
          if (typeof n == "string")
            throw new Error("string part in extglob AST??");
          n.copyIn(l(r, Me)[s]);
        }
      A = r, r = l(A, $e);
    }
  }
  return this;
}, Os = new WeakSet(), Go = function(e, A, r, s) {
  var Q, C;
  let n = !1, i = !1, a = -1, o = !1;
  if (A.type === null) {
    let u = r, B = "";
    for (; u < e.length; ) {
      const I = e.charAt(u++);
      if (n || I === "\\") {
        n = !n, B += I;
        continue;
      }
      if (i) {
        u === a + 1 ? (I === "^" || I === "!") && (o = !0) : I === "]" && !(u === a + 2 && o) && (i = !1), B += I;
        continue;
      } else if (I === "[") {
        i = !0, a = u, o = !1, B += I;
        continue;
      }
      if (!s.noext && pu(I) && e.charAt(u) === "(") {
        A.push(B), B = "";
        const d = new kA(I, A);
        u = O(Q = kA, Os, Go).call(Q, e, d, u, s), A.push(d);
        continue;
      }
      B += I;
    }
    return A.push(B), u;
  }
  let c = r + 1, g = new kA(null, A);
  const h = [];
  let E = "";
  for (; c < e.length; ) {
    const u = e.charAt(c++);
    if (n || u === "\\") {
      n = !n, E += u;
      continue;
    }
    if (i) {
      c === a + 1 ? (u === "^" || u === "!") && (o = !0) : u === "]" && !(c === a + 2 && o) && (i = !1), E += u;
      continue;
    } else if (u === "[") {
      i = !0, a = c, o = !1, E += u;
      continue;
    }
    if (pu(u) && e.charAt(c) === "(") {
      g.push(E), E = "";
      const B = new kA(u, g);
      g.push(B), c = O(C = kA, Os, Go).call(C, e, B, c, s);
      continue;
    }
    if (u === "|") {
      g.push(E), E = "", h.push(g), g = new kA(null, A);
      continue;
    }
    if (u === ")")
      return E === "" && l(A, Me).length === 0 && b(A, ri, !0), g.push(E), E = "", A.push(...h, g), c;
    E += u;
  }
  return A.type = null, b(A, lA, void 0), b(A, Me, [e.substring(r - 1)]), c;
}, si = new WeakSet(), zg = function(e) {
  return l(this, Me).map((A) => {
    if (typeof A == "string")
      throw new Error("string type in extglob ast??");
    const [r, s, n, i] = A.toRegExpSource(e);
    return b(this, Xt, l(this, Xt) || i), r;
  }).filter((A) => !(this.isStart() && this.isEnd()) || !!A).join("|");
}, ia = new WeakSet(), xB = function(e, A, r = !1) {
  let s = !1, n = "", i = !1;
  for (let a = 0; a < e.length; a++) {
    const o = e.charAt(a);
    if (s) {
      s = !1, n += (ID.has(o) ? "\\" : "") + o;
      continue;
    }
    if (o === "\\") {
      a === e.length - 1 ? n += "\\\\" : s = !0;
      continue;
    }
    if (o === "[") {
      const [c, g, h, E] = ED(e, a);
      if (h) {
        n += c, i = i || g, a += h - 1, A = A || E;
        continue;
      }
    }
    if (o === "*") {
      r && e === "*" ? n += mu : n += wu, A = !0;
      continue;
    }
    if (o === "?") {
      n += Ml, A = !0;
      continue;
    }
    n += dD(o);
  }
  return [n, Gs(e), !!A, i];
}, N(kA, Os), N(kA, ia);
let Ko = kA;
const qB = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&"), OA = (t, e, A = {}) => ($o(e), !A.nocomment && e.charAt(0) === "#" ? !1 : new _r(e, A).match(t)), fD = /^\*+([^+@!?\*\[\(]*)$/, pD = (t) => (e) => !e.startsWith(".") && e.endsWith(t), wD = (t) => (e) => e.endsWith(t), mD = (t) => (t = t.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(t)), yD = (t) => (t = t.toLowerCase(), (e) => e.toLowerCase().endsWith(t)), RD = /^\*+\.\*+$/, DD = (t) => !t.startsWith(".") && t.includes("."), bD = (t) => t !== "." && t !== ".." && t.includes("."), kD = /^\.\*+$/, SD = (t) => t !== "." && t !== ".." && t.startsWith("."), FD = /^\*+$/, ND = (t) => t.length !== 0 && !t.startsWith("."), UD = (t) => t.length !== 0 && t !== "." && t !== "..", TD = /^\?+([^+@!?\*\[\(]*)?$/, vD = ([t, e = ""]) => {
  const A = jB([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, LD = ([t, e = ""]) => {
  const A = ZB([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, MD = ([t, e = ""]) => {
  const A = ZB([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, GD = ([t, e = ""]) => {
  const A = jB([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, jB = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && !A.startsWith(".");
}, ZB = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && A !== "." && A !== "..";
}, zB = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", yu = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, YD = zB === "win32" ? yu.win32.sep : yu.posix.sep;
OA.sep = YD;
const JA = Symbol("globstar **");
OA.GLOBSTAR = JA;
const JD = "[^/]", _D = JD + "*?", OD = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", HD = "(?:(?!(?:\\/|^)\\.).)*?", PD = (t, e = {}) => (A) => OA(A, t, e);
OA.filter = PD;
const nt = (t, e = {}) => Object.assign({}, t, e), VD = (t) => {
  if (!t || typeof t != "object" || !Object.keys(t).length)
    return OA;
  const e = OA;
  return Object.assign((r, s, n = {}) => e(r, s, nt(t, n)), {
    Minimatch: class extends e.Minimatch {
      constructor(s, n = {}) {
        super(s, nt(t, n));
      }
      static defaults(s) {
        return e.defaults(nt(t, s)).Minimatch;
      }
    },
    AST: class extends e.AST {
      /* c8 ignore start */
      constructor(s, n, i = {}) {
        super(s, n, nt(t, i));
      }
      /* c8 ignore stop */
      static fromGlob(s, n = {}) {
        return e.AST.fromGlob(s, nt(t, n));
      }
    },
    unescape: (r, s = {}) => e.unescape(r, nt(t, s)),
    escape: (r, s = {}) => e.escape(r, nt(t, s)),
    filter: (r, s = {}) => e.filter(r, nt(t, s)),
    defaults: (r) => e.defaults(nt(t, r)),
    makeRe: (r, s = {}) => e.makeRe(r, nt(t, s)),
    braceExpand: (r, s = {}) => e.braceExpand(r, nt(t, s)),
    match: (r, s, n = {}) => e.match(r, s, nt(t, n)),
    sep: e.sep,
    GLOBSTAR: JA
  });
};
OA.defaults = VD;
const XB = (t, e = {}) => ($o(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : cD(t));
OA.braceExpand = XB;
const WD = (t, e = {}) => new _r(t, e).makeRe();
OA.makeRe = WD;
const xD = (t, e, A = {}) => {
  const r = new _r(e, A);
  return t = t.filter((s) => r.match(s)), r.options.nonull && !t.length && t.push(e), t;
};
OA.match = xD;
const Ru = /[?*]|[+@!]\(.*?\)|\[|\]/, qD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class _r {
  constructor(e, A = {}) {
    L(this, "options");
    L(this, "set");
    L(this, "pattern");
    L(this, "windowsPathsNoEscape");
    L(this, "nonegate");
    L(this, "negate");
    L(this, "comment");
    L(this, "empty");
    L(this, "preserveMultipleSlashes");
    L(this, "partial");
    L(this, "globSet");
    L(this, "globParts");
    L(this, "nocase");
    L(this, "isWindows");
    L(this, "platform");
    L(this, "windowsNoMagicRoot");
    L(this, "regexp");
    $o(e), A = A || {}, this.options = A, this.pattern = e, this.platform = A.platform || zB, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!A.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!A.nonegate, this.comment = !1, this.empty = !1, this.partial = !!A.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = A.windowsNoMagicRoot !== void 0 ? A.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return !0;
    for (const e of this.set)
      for (const A of e)
        if (typeof A != "string")
          return !0;
    return !1;
  }
  debug(...e) {
  }
  make() {
    const e = this.pattern, A = this.options;
    if (!A.nocomment && e.charAt(0) === "#") {
      this.comment = !0;
      return;
    }
    if (!e) {
      this.empty = !0;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], A.debug && (this.debug = (...n) => console.error(...n)), this.debug(this.pattern, this.globSet);
    const r = this.globSet.map((n) => this.slashSplit(n));
    this.globParts = this.preprocess(r), this.debug(this.pattern, this.globParts);
    let s = this.globParts.map((n, i, a) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const o = n[0] === "" && n[1] === "" && (n[2] === "?" || !Ru.test(n[2])) && !Ru.test(n[3]), c = /^[a-z]:/i.test(n[0]);
        if (o)
          return [...n.slice(0, 4), ...n.slice(4).map((g) => this.parse(g))];
        if (c)
          return [n[0], ...n.slice(1).map((g) => this.parse(g))];
      }
      return n.map((o) => this.parse(o));
    });
    if (this.debug(this.pattern, s), this.set = s.filter((n) => n.indexOf(!1) === -1), this.isWindows)
      for (let n = 0; n < this.set.length; n++) {
        const i = this.set[n];
        i[0] === "" && i[1] === "" && this.globParts[n][2] === "?" && typeof i[3] == "string" && /^[a-z]:$/i.test(i[3]) && (i[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(e) {
    if (this.options.noglobstar)
      for (let r = 0; r < e.length; r++)
        for (let s = 0; s < e[r].length; s++)
          e[r][s] === "**" && (e[r][s] = "*");
    const { optimizationLevel: A = 1 } = this.options;
    return A >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : A >= 1 ? e = this.levelOneOptimize(e) : e = this.adjascentGlobstarOptimize(e), e;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(e) {
    return e.map((A) => {
      let r = -1;
      for (; (r = A.indexOf("**", r + 1)) !== -1; ) {
        let s = r;
        for (; A[s + 1] === "**"; )
          s++;
        s !== r && A.splice(r, s - r);
      }
      return A;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(e) {
    return e.map((A) => (A = A.reduce((r, s) => {
      const n = r[r.length - 1];
      return s === "**" && n === "**" ? r : s === ".." && n && n !== ".." && n !== "." && n !== "**" ? (r.pop(), r) : (r.push(s), r);
    }, []), A.length === 0 ? [""] : A));
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let A = !1;
    do {
      if (A = !1, !this.preserveMultipleSlashes) {
        for (let s = 1; s < e.length - 1; s++) {
          const n = e[s];
          s === 1 && n === "" && e[0] === "" || (n === "." || n === "") && (A = !0, e.splice(s, 1), s--);
        }
        e[0] === "." && e.length === 2 && (e[1] === "." || e[1] === "") && (A = !0, e.pop());
      }
      let r = 0;
      for (; (r = e.indexOf("..", r + 1)) !== -1; ) {
        const s = e[r - 1];
        s && s !== "." && s !== ".." && s !== "**" && (A = !0, e.splice(r - 1, 2), r -= 2);
      }
    } while (A);
    return e.length === 0 ? [""] : e;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(e) {
    let A = !1;
    do {
      A = !1;
      for (let r of e) {
        let s = -1;
        for (; (s = r.indexOf("**", s + 1)) !== -1; ) {
          let i = s;
          for (; r[i + 1] === "**"; )
            i++;
          i > s && r.splice(s + 1, i - s);
          let a = r[s + 1];
          const o = r[s + 2], c = r[s + 3];
          if (a !== ".." || !o || o === "." || o === ".." || !c || c === "." || c === "..")
            continue;
          A = !0, r.splice(s, 1);
          const g = r.slice(0);
          g[s] = "**", e.push(g), s--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < r.length - 1; i++) {
            const a = r[i];
            i === 1 && a === "" && r[0] === "" || (a === "." || a === "") && (A = !0, r.splice(i, 1), i--);
          }
          r[0] === "." && r.length === 2 && (r[1] === "." || r[1] === "") && (A = !0, r.pop());
        }
        let n = 0;
        for (; (n = r.indexOf("..", n + 1)) !== -1; ) {
          const i = r[n - 1];
          if (i && i !== "." && i !== ".." && i !== "**") {
            A = !0;
            const o = n === 1 && r[n + 1] === "**" ? ["."] : [];
            r.splice(n - 1, 2, ...o), r.length === 0 && r.push(""), n -= 2;
          }
        }
      }
    } while (A);
    return e;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(e) {
    for (let A = 0; A < e.length - 1; A++)
      for (let r = A + 1; r < e.length; r++) {
        const s = this.partsMatch(e[A], e[r], !this.preserveMultipleSlashes);
        s && (e[A] = s, e[r] = []);
      }
    return e.filter((A) => A.length);
  }
  partsMatch(e, A, r = !1) {
    let s = 0, n = 0, i = [], a = "";
    for (; s < e.length && n < A.length; )
      if (e[s] === A[n])
        i.push(a === "b" ? A[n] : e[s]), s++, n++;
      else if (r && e[s] === "**" && A[n] === e[s + 1])
        i.push(e[s]), s++;
      else if (r && A[n] === "**" && e[s] === A[n + 1])
        i.push(A[n]), n++;
      else if (e[s] === "*" && A[n] && (this.options.dot || !A[n].startsWith(".")) && A[n] !== "**") {
        if (a === "b")
          return !1;
        a = "a", i.push(e[s]), s++, n++;
      } else if (A[n] === "*" && e[s] && (this.options.dot || !e[s].startsWith(".")) && e[s] !== "**") {
        if (a === "a")
          return !1;
        a = "b", i.push(A[n]), s++, n++;
      } else
        return !1;
    return e.length === A.length && i;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const e = this.pattern;
    let A = !1, r = 0;
    for (let s = 0; s < e.length && e.charAt(s) === "!"; s++)
      A = !A, r++;
    r && (this.pattern = e.slice(r)), this.negate = A;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(e, A, r = !1) {
    const s = this.options;
    if (this.isWindows) {
      const u = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), B = !u && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), I = typeof A[0] == "string" && /^[a-z]:$/i.test(A[0]), d = !I && A[0] === "" && A[1] === "" && A[2] === "?" && typeof A[3] == "string" && /^[a-z]:$/i.test(A[3]), w = B ? 3 : u ? 0 : void 0, m = d ? 3 : I ? 0 : void 0;
      if (typeof w == "number" && typeof m == "number") {
        const [p, R] = [e[w], A[m]];
        p.toLowerCase() === R.toLowerCase() && (A[m] = p, m > w ? A = A.slice(m) : w > m && (e = e.slice(w)));
      }
    }
    const { optimizationLevel: n = 1 } = this.options;
    n >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: A }), this.debug("matchOne", e.length, A.length);
    for (var i = 0, a = 0, o = e.length, c = A.length; i < o && a < c; i++, a++) {
      this.debug("matchOne loop");
      var g = A[a], h = e[i];
      if (this.debug(A, g, h), g === !1)
        return !1;
      if (g === JA) {
        this.debug("GLOBSTAR", [A, g, h]);
        var E = i, Q = a + 1;
        if (Q === c) {
          for (this.debug("** at the end"); i < o; i++)
            if (e[i] === "." || e[i] === ".." || !s.dot && e[i].charAt(0) === ".")
              return !1;
          return !0;
        }
        for (; E < o; ) {
          var C = e[E];
          if (this.debug(`
globstar while`, e, E, A, Q, C), this.matchOne(e.slice(E), A.slice(Q), r))
            return this.debug("globstar found match!", E, o, C), !0;
          if (C === "." || C === ".." || !s.dot && C.charAt(0) === ".") {
            this.debug("dot detected!", e, E, A, Q);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), E++;
        }
        return !!(r && (this.debug(`
>>> no match, partial?`, e, E, A, Q), E === o));
      }
      let u;
      if (typeof g == "string" ? (u = h === g, this.debug("string match", g, h, u)) : (u = g.test(h), this.debug("pattern match", g, h, u)), !u)
        return !1;
    }
    if (i === o && a === c)
      return !0;
    if (i === o)
      return r;
    if (a === c)
      return i === o - 1 && e[i] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return XB(this.pattern, this.options);
  }
  parse(e) {
    $o(e);
    const A = this.options;
    if (e === "**")
      return JA;
    if (e === "")
      return "";
    let r, s = null;
    (r = e.match(FD)) ? s = A.dot ? UD : ND : (r = e.match(fD)) ? s = (A.nocase ? A.dot ? yD : mD : A.dot ? wD : pD)(r[1]) : (r = e.match(TD)) ? s = (A.nocase ? A.dot ? LD : vD : A.dot ? MD : GD)(r) : (r = e.match(RD)) ? s = A.dot ? bD : DD : (r = e.match(kD)) && (s = SD);
    const n = Ko.fromGlob(e, this.options).toMMPattern();
    return s ? Object.assign(n, { test: s }) : n;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1)
      return this.regexp;
    const e = this.set;
    if (!e.length)
      return this.regexp = !1, this.regexp;
    const A = this.options, r = A.noglobstar ? _D : A.dot ? OD : HD, s = new Set(A.nocase ? ["i"] : []);
    let n = e.map((o) => {
      const c = o.map((g) => {
        if (g instanceof RegExp)
          for (const h of g.flags.split(""))
            s.add(h);
        return typeof g == "string" ? qD(g) : g === JA ? JA : g._src;
      });
      return c.forEach((g, h) => {
        const E = c[h + 1], Q = c[h - 1];
        g !== JA || Q === JA || (Q === void 0 ? E !== void 0 && E !== JA ? c[h + 1] = "(?:\\/|" + r + "\\/)?" + E : c[h] = r : E === void 0 ? c[h - 1] = Q + "(?:\\/|" + r + ")?" : E !== JA && (c[h - 1] = Q + "(?:\\/|\\/" + r + "\\/)" + E, c[h + 1] = JA));
      }), c.filter((g) => g !== JA).join("/");
    }).join("|");
    const [i, a] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    n = "^" + i + n + a + "$", this.negate && (n = "^(?!" + n + ").+$");
    try {
      this.regexp = new RegExp(n, [...s].join(""));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(e) {
    return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^\/]+/.test(e) ? ["", ...e.split(/\/+/)] : e.split(/\/+/);
  }
  match(e, A = this.partial) {
    if (this.debug("match", e, this.pattern), this.comment)
      return !1;
    if (this.empty)
      return e === "";
    if (e === "/" && A)
      return !0;
    const r = this.options;
    this.isWindows && (e = e.split("\\").join("/"));
    const s = this.slashSplit(e);
    this.debug(this.pattern, "split", s);
    const n = this.set;
    this.debug(this.pattern, "set", n);
    let i = s[s.length - 1];
    if (!i)
      for (let a = s.length - 2; !i && a >= 0; a--)
        i = s[a];
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      let c = s;
      if (r.matchBase && o.length === 1 && (c = [i]), this.matchOne(c, o, A))
        return r.flipNegate ? !0 : !this.negate;
    }
    return r.flipNegate ? !1 : this.negate;
  }
  static defaults(e) {
    return OA.defaults(e).Minimatch;
  }
}
OA.AST = Ko;
OA.Minimatch = _r;
OA.escape = qB;
OA.unescape = Gs;
const vn = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, $B = /* @__PURE__ */ new Set(), Xg = typeof process == "object" && process ? process : {}, KB = (t, e, A, r) => {
  typeof Xg.emitWarning == "function" ? Xg.emitWarning(t, e, A, r) : console.error(`[${A}] ${e}: ${t}`);
};
let ea = globalThis.AbortController, Du = globalThis.AbortSignal;
var Ku;
if (typeof ea > "u") {
  Du = class {
    constructor() {
      L(this, "onabort");
      L(this, "_onabort", []);
      L(this, "reason");
      L(this, "aborted", !1);
    }
    addEventListener(r, s) {
      this._onabort.push(s);
    }
  }, ea = class {
    constructor() {
      L(this, "signal", new Du());
      e();
    }
    abort(r) {
      var s, n;
      if (!this.signal.aborted) {
        this.signal.reason = r, this.signal.aborted = !0;
        for (const i of this.signal._onabort)
          i(r);
        (n = (s = this.signal).onabort) == null || n.call(s, r);
      }
    }
  };
  let t = ((Ku = Xg.env) == null ? void 0 : Ku.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const e = () => {
    t && (t = !1, KB("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
  };
}
const jD = (t) => !$B.has(t), Ir = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t), eI = (t) => Ir(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? Yo : null : null;
class Yo extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
var Hs;
const es = class es {
  constructor(e, A) {
    L(this, "heap");
    L(this, "length");
    if (!l(es, Hs))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new A(e), this.length = 0;
  }
  static create(e) {
    const A = eI(e);
    if (!A)
      return [];
    b(es, Hs, !0);
    const r = new es(e, A);
    return b(es, Hs, !1), r;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
Hs = new WeakMap(), // private constructor
N(es, Hs, !1);
let $g = es;
var Ct, ZA, Bt, It, Ps, sA, dt, nA, Se, le, MA, zA, SA, hA, ft, EA, Kt, er, pt, wt, Sr, GA, ni, Kg, ns, Ar, ii, XA, oa, AI, is, Vs, oi, Nt, dr, Ut, fr, ai, el, Ws, Jo, xs, _o, De, Le, ci, Al, os, xn;
const Vl = class Vl {
  constructor(e) {
    N(this, ni);
    N(this, oa);
    N(this, Nt);
    N(this, Ut);
    N(this, ai);
    N(this, Ws);
    N(this, xs);
    N(this, De);
    N(this, ci);
    N(this, os);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    N(this, Ct, void 0);
    N(this, ZA, void 0);
    N(this, Bt, void 0);
    N(this, It, void 0);
    N(this, Ps, void 0);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    L(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    L(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    L(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    L(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    L(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    L(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    L(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    L(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    L(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    L(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    L(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    L(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    L(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    L(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    L(this, "ignoreFetchAbort");
    // computed properties
    N(this, sA, void 0);
    N(this, dt, void 0);
    N(this, nA, void 0);
    N(this, Se, void 0);
    N(this, le, void 0);
    N(this, MA, void 0);
    N(this, zA, void 0);
    N(this, SA, void 0);
    N(this, hA, void 0);
    N(this, ft, void 0);
    N(this, EA, void 0);
    N(this, Kt, void 0);
    N(this, er, void 0);
    N(this, pt, void 0);
    N(this, wt, void 0);
    N(this, Sr, void 0);
    N(this, GA, void 0);
    // conditionally set private methods related to TTL
    N(this, ns, () => {
    });
    N(this, Ar, () => {
    });
    N(this, ii, () => {
    });
    /* c8 ignore stop */
    N(this, XA, () => !1);
    N(this, is, (e) => {
    });
    N(this, Vs, (e, A, r) => {
    });
    N(this, oi, (e, A, r, s) => {
      if (r || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    const { max: A = 0, ttl: r, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: i, updateAgeOnHas: a, allowStale: o, dispose: c, disposeAfter: g, noDisposeOnSet: h, noUpdateTTL: E, maxSize: Q = 0, maxEntrySize: C = 0, sizeCalculation: u, fetchMethod: B, noDeleteOnFetchRejection: I, noDeleteOnStaleGet: d, allowStaleOnFetchRejection: w, allowStaleOnFetchAbort: m, ignoreFetchAbort: p } = e;
    if (A !== 0 && !Ir(A))
      throw new TypeError("max option must be a nonnegative integer");
    const R = A ? eI(A) : Array;
    if (!R)
      throw new Error("invalid max value: " + A);
    if (b(this, Ct, A), b(this, ZA, Q), this.maxEntrySize = C || l(this, ZA), this.sizeCalculation = u, this.sizeCalculation) {
      if (!l(this, ZA) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (B !== void 0 && typeof B != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (b(this, Ps, B), b(this, Sr, !!B), b(this, nA, /* @__PURE__ */ new Map()), b(this, Se, new Array(A).fill(void 0)), b(this, le, new Array(A).fill(void 0)), b(this, MA, new R(A)), b(this, zA, new R(A)), b(this, SA, 0), b(this, hA, 0), b(this, ft, $g.create(A)), b(this, sA, 0), b(this, dt, 0), typeof c == "function" && b(this, Bt, c), typeof g == "function" ? (b(this, It, g), b(this, EA, [])) : (b(this, It, void 0), b(this, EA, void 0)), b(this, wt, !!l(this, Bt)), b(this, GA, !!l(this, It)), this.noDisposeOnSet = !!h, this.noUpdateTTL = !!E, this.noDeleteOnFetchRejection = !!I, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!m, this.ignoreFetchAbort = !!p, this.maxEntrySize !== 0) {
      if (l(this, ZA) !== 0 && !Ir(l(this, ZA)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!Ir(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      O(this, oa, AI).call(this);
    }
    if (this.allowStale = !!o, this.noDeleteOnStaleGet = !!d, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!a, this.ttlResolution = Ir(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = r || 0, this.ttl) {
      if (!Ir(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      O(this, ni, Kg).call(this);
    }
    if (l(this, Ct) === 0 && this.ttl === 0 && l(this, ZA) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !l(this, Ct) && !l(this, ZA)) {
      const D = "LRU_CACHE_UNBOUNDED";
      jD(D) && ($B.add(D), KB("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", D, Vl));
    }
  }
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(e) {
    return {
      // properties
      starts: l(e, er),
      ttls: l(e, pt),
      sizes: l(e, Kt),
      keyMap: l(e, nA),
      keyList: l(e, Se),
      valList: l(e, le),
      next: l(e, MA),
      prev: l(e, zA),
      get head() {
        return l(e, SA);
      },
      get tail() {
        return l(e, hA);
      },
      free: l(e, ft),
      // methods
      isBackgroundFetch: (A) => {
        var r;
        return O(r = e, De, Le).call(r, A);
      },
      backgroundFetch: (A, r, s, n) => {
        var i;
        return O(i = e, xs, _o).call(i, A, r, s, n);
      },
      moveToTail: (A) => {
        var r;
        return O(r = e, os, xn).call(r, A);
      },
      indexes: (A) => {
        var r;
        return O(r = e, Nt, dr).call(r, A);
      },
      rindexes: (A) => {
        var r;
        return O(r = e, Ut, fr).call(r, A);
      },
      isStale: (A) => {
        var r;
        return l(r = e, XA).call(r, A);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return l(this, Ct);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return l(this, ZA);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return l(this, dt);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return l(this, sA);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return l(this, Ps);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return l(this, Bt);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return l(this, It);
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(e) {
    return l(this, nA).has(e) ? 1 / 0 : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const e of O(this, Nt, dr).call(this))
      l(this, le)[e] !== void 0 && l(this, Se)[e] !== void 0 && !O(this, De, Le).call(this, l(this, le)[e]) && (yield [l(this, Se)[e], l(this, le)[e]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const e of O(this, Ut, fr).call(this))
      l(this, le)[e] !== void 0 && l(this, Se)[e] !== void 0 && !O(this, De, Le).call(this, l(this, le)[e]) && (yield [l(this, Se)[e], l(this, le)[e]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const e of O(this, Nt, dr).call(this)) {
      const A = l(this, Se)[e];
      A !== void 0 && !O(this, De, Le).call(this, l(this, le)[e]) && (yield A);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const e of O(this, Ut, fr).call(this)) {
      const A = l(this, Se)[e];
      A !== void 0 && !O(this, De, Le).call(this, l(this, le)[e]) && (yield A);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const e of O(this, Nt, dr).call(this))
      l(this, le)[e] !== void 0 && !O(this, De, Le).call(this, l(this, le)[e]) && (yield l(this, le)[e]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const e of O(this, Ut, fr).call(this))
      l(this, le)[e] !== void 0 && !O(this, De, Le).call(this, l(this, le)[e]) && (yield l(this, le)[e]);
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */
  find(e, A = {}) {
    for (const r of O(this, Nt, dr).call(this)) {
      const s = l(this, le)[r], n = O(this, De, Le).call(this, s) ? s.__staleWhileFetching : s;
      if (n !== void 0 && e(n, l(this, Se)[r], this))
        return this.get(l(this, Se)[r], A);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(e, A = this) {
    for (const r of O(this, Nt, dr).call(this)) {
      const s = l(this, le)[r], n = O(this, De, Le).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Se)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(e, A = this) {
    for (const r of O(this, Ut, fr).call(this)) {
      const s = l(this, le)[r], n = O(this, De, Le).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Se)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let e = !1;
    for (const A of O(this, Ut, fr).call(this, { allowStale: !0 }))
      l(this, XA).call(this, A) && (this.delete(l(this, Se)[A]), e = !0);
    return e;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const e = [];
    for (const A of O(this, Nt, dr).call(this, { allowStale: !0 })) {
      const r = l(this, Se)[A], s = l(this, le)[A], n = O(this, De, Le).call(this, s) ? s.__staleWhileFetching : s;
      if (n === void 0 || r === void 0)
        continue;
      const i = { value: n };
      if (l(this, pt) && l(this, er)) {
        i.ttl = l(this, pt)[A];
        const a = vn.now() - l(this, er)[A];
        i.start = Math.floor(Date.now() - a);
      }
      l(this, Kt) && (i.size = l(this, Kt)[A]), e.unshift([r, i]);
    }
    return e;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */
  load(e) {
    this.clear();
    for (const [A, r] of e) {
      if (r.start) {
        const s = Date.now() - r.start;
        r.start = vn.now() - s;
      }
      this.set(A, r.value, r);
    }
  }
  /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   */
  set(e, A, r = {}) {
    var E, Q, C, u, B;
    if (A === void 0)
      return this.delete(e), this;
    const { ttl: s = this.ttl, start: n, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: o } = r;
    let { noUpdateTTL: c = this.noUpdateTTL } = r;
    const g = l(this, oi).call(this, e, A, r.size || 0, a);
    if (this.maxEntrySize && g > this.maxEntrySize)
      return o && (o.set = "miss", o.maxEntrySizeExceeded = !0), this.delete(e), this;
    let h = l(this, sA) === 0 ? void 0 : l(this, nA).get(e);
    if (h === void 0)
      h = l(this, sA) === 0 ? l(this, hA) : l(this, ft).length !== 0 ? l(this, ft).pop() : l(this, sA) === l(this, Ct) ? O(this, Ws, Jo).call(this, !1) : l(this, sA), l(this, Se)[h] = e, l(this, le)[h] = A, l(this, nA).set(e, h), l(this, MA)[l(this, hA)] = h, l(this, zA)[h] = l(this, hA), b(this, hA, h), zi(this, sA)._++, l(this, Vs).call(this, h, g, o), o && (o.set = "add"), c = !1;
    else {
      O(this, os, xn).call(this, h);
      const I = l(this, le)[h];
      if (A !== I) {
        if (l(this, Sr) && O(this, De, Le).call(this, I)) {
          I.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: d } = I;
          d !== void 0 && !i && (l(this, wt) && ((E = l(this, Bt)) == null || E.call(this, d, e, "set")), l(this, GA) && ((Q = l(this, EA)) == null || Q.push([d, e, "set"])));
        } else
          i || (l(this, wt) && ((C = l(this, Bt)) == null || C.call(this, I, e, "set")), l(this, GA) && ((u = l(this, EA)) == null || u.push([I, e, "set"])));
        if (l(this, is).call(this, h), l(this, Vs).call(this, h, g, o), l(this, le)[h] = A, o) {
          o.set = "replace";
          const d = I && O(this, De, Le).call(this, I) ? I.__staleWhileFetching : I;
          d !== void 0 && (o.oldValue = d);
        }
      } else
        o && (o.set = "update");
    }
    if (s !== 0 && !l(this, pt) && O(this, ni, Kg).call(this), l(this, pt) && (c || l(this, ii).call(this, h, s, n), o && l(this, Ar).call(this, o, h)), !i && l(this, GA) && l(this, EA)) {
      const I = l(this, EA);
      let d;
      for (; d = I == null ? void 0 : I.shift(); )
        (B = l(this, It)) == null || B.call(this, ...d);
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    var e;
    try {
      for (; l(this, sA); ) {
        const A = l(this, le)[l(this, SA)];
        if (O(this, Ws, Jo).call(this, !0), O(this, De, Le).call(this, A)) {
          if (A.__staleWhileFetching)
            return A.__staleWhileFetching;
        } else if (A !== void 0)
          return A;
      }
    } finally {
      if (l(this, GA) && l(this, EA)) {
        const A = l(this, EA);
        let r;
        for (; r = A == null ? void 0 : A.shift(); )
          (e = l(this, It)) == null || e.call(this, ...r);
      }
    }
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(e, A = {}) {
    const { updateAgeOnHas: r = this.updateAgeOnHas, status: s } = A, n = l(this, nA).get(e);
    if (n !== void 0) {
      const i = l(this, le)[n];
      if (O(this, De, Le).call(this, i) && i.__staleWhileFetching === void 0)
        return !1;
      if (l(this, XA).call(this, n))
        s && (s.has = "stale", l(this, Ar).call(this, s, n));
      else
        return r && l(this, ns).call(this, n), s && (s.has = "hit", l(this, Ar).call(this, s, n)), !0;
    } else
      s && (s.has = "miss");
    return !1;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(e, A = {}) {
    const { allowStale: r = this.allowStale } = A, s = l(this, nA).get(e);
    if (s !== void 0 && (r || !l(this, XA).call(this, s))) {
      const n = l(this, le)[s];
      return O(this, De, Le).call(this, n) ? n.__staleWhileFetching : n;
    }
  }
  async fetch(e, A = {}) {
    const {
      // get options
      allowStale: r = this.allowStale,
      updateAgeOnGet: s = this.updateAgeOnGet,
      noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
      // set options
      ttl: i = this.ttl,
      noDisposeOnSet: a = this.noDisposeOnSet,
      size: o = 0,
      sizeCalculation: c = this.sizeCalculation,
      noUpdateTTL: g = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection: h = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: E = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: Q = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: C = this.allowStaleOnFetchAbort,
      context: u,
      forceRefresh: B = !1,
      status: I,
      signal: d
    } = A;
    if (!l(this, Sr))
      return I && (I.fetch = "get"), this.get(e, {
        allowStale: r,
        updateAgeOnGet: s,
        noDeleteOnStaleGet: n,
        status: I
      });
    const w = {
      allowStale: r,
      updateAgeOnGet: s,
      noDeleteOnStaleGet: n,
      ttl: i,
      noDisposeOnSet: a,
      size: o,
      sizeCalculation: c,
      noUpdateTTL: g,
      noDeleteOnFetchRejection: h,
      allowStaleOnFetchRejection: E,
      allowStaleOnFetchAbort: C,
      ignoreFetchAbort: Q,
      status: I,
      signal: d
    };
    let m = l(this, nA).get(e);
    if (m === void 0) {
      I && (I.fetch = "miss");
      const p = O(this, xs, _o).call(this, e, m, w, u);
      return p.__returned = p;
    } else {
      const p = l(this, le)[m];
      if (O(this, De, Le).call(this, p)) {
        const T = r && p.__staleWhileFetching !== void 0;
        return I && (I.fetch = "inflight", T && (I.returnedStale = !0)), T ? p.__staleWhileFetching : p.__returned = p;
      }
      const R = l(this, XA).call(this, m);
      if (!B && !R)
        return I && (I.fetch = "hit"), O(this, os, xn).call(this, m), s && l(this, ns).call(this, m), I && l(this, Ar).call(this, I, m), p;
      const D = O(this, xs, _o).call(this, e, m, w, u), v = D.__staleWhileFetching !== void 0 && r;
      return I && (I.fetch = R ? "stale" : "refresh", v && R && (I.returnedStale = !0)), v ? D.__staleWhileFetching : D.__returned = D;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(e, A = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: i } = A, a = l(this, nA).get(e);
    if (a !== void 0) {
      const o = l(this, le)[a], c = O(this, De, Le).call(this, o);
      return i && l(this, Ar).call(this, i, a), l(this, XA).call(this, a) ? (i && (i.get = "stale"), c ? (i && r && o.__staleWhileFetching !== void 0 && (i.returnedStale = !0), r ? o.__staleWhileFetching : void 0) : (n || this.delete(e), i && r && (i.returnedStale = !0), r ? o : void 0)) : (i && (i.get = "hit"), c ? o.__staleWhileFetching : (O(this, os, xn).call(this, a), s && l(this, ns).call(this, a), o));
    } else
      i && (i.get = "miss");
  }
  /**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */
  delete(e) {
    var r, s, n, i;
    let A = !1;
    if (l(this, sA) !== 0) {
      const a = l(this, nA).get(e);
      if (a !== void 0)
        if (A = !0, l(this, sA) === 1)
          this.clear();
        else {
          l(this, is).call(this, a);
          const o = l(this, le)[a];
          O(this, De, Le).call(this, o) ? o.__abortController.abort(new Error("deleted")) : (l(this, wt) || l(this, GA)) && (l(this, wt) && ((r = l(this, Bt)) == null || r.call(this, o, e, "delete")), l(this, GA) && ((s = l(this, EA)) == null || s.push([o, e, "delete"]))), l(this, nA).delete(e), l(this, Se)[a] = void 0, l(this, le)[a] = void 0, a === l(this, hA) ? b(this, hA, l(this, zA)[a]) : a === l(this, SA) ? b(this, SA, l(this, MA)[a]) : (l(this, MA)[l(this, zA)[a]] = l(this, MA)[a], l(this, zA)[l(this, MA)[a]] = l(this, zA)[a]), zi(this, sA)._--, l(this, ft).push(a);
        }
    }
    if (l(this, GA) && ((n = l(this, EA)) != null && n.length)) {
      const a = l(this, EA);
      let o;
      for (; o = a == null ? void 0 : a.shift(); )
        (i = l(this, It)) == null || i.call(this, ...o);
    }
    return A;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var e, A, r;
    for (const s of O(this, Ut, fr).call(this, { allowStale: !0 })) {
      const n = l(this, le)[s];
      if (O(this, De, Le).call(this, n))
        n.__abortController.abort(new Error("deleted"));
      else {
        const i = l(this, Se)[s];
        l(this, wt) && ((e = l(this, Bt)) == null || e.call(this, n, i, "delete")), l(this, GA) && ((A = l(this, EA)) == null || A.push([n, i, "delete"]));
      }
    }
    if (l(this, nA).clear(), l(this, le).fill(void 0), l(this, Se).fill(void 0), l(this, pt) && l(this, er) && (l(this, pt).fill(0), l(this, er).fill(0)), l(this, Kt) && l(this, Kt).fill(0), b(this, SA, 0), b(this, hA, 0), l(this, ft).length = 0, b(this, dt, 0), b(this, sA, 0), l(this, GA) && l(this, EA)) {
      const s = l(this, EA);
      let n;
      for (; n = s == null ? void 0 : s.shift(); )
        (r = l(this, It)) == null || r.call(this, ...n);
    }
  }
};
Ct = new WeakMap(), ZA = new WeakMap(), Bt = new WeakMap(), It = new WeakMap(), Ps = new WeakMap(), sA = new WeakMap(), dt = new WeakMap(), nA = new WeakMap(), Se = new WeakMap(), le = new WeakMap(), MA = new WeakMap(), zA = new WeakMap(), SA = new WeakMap(), hA = new WeakMap(), ft = new WeakMap(), EA = new WeakMap(), Kt = new WeakMap(), er = new WeakMap(), pt = new WeakMap(), wt = new WeakMap(), Sr = new WeakMap(), GA = new WeakMap(), ni = new WeakSet(), Kg = function() {
  const e = new Yo(l(this, Ct)), A = new Yo(l(this, Ct));
  b(this, pt, e), b(this, er, A), b(this, ii, (n, i, a = vn.now()) => {
    if (A[n] = i !== 0 ? a : 0, e[n] = i, i !== 0 && this.ttlAutopurge) {
      const o = setTimeout(() => {
        l(this, XA).call(this, n) && this.delete(l(this, Se)[n]);
      }, i + 1);
      o.unref && o.unref();
    }
  }), b(this, ns, (n) => {
    A[n] = e[n] !== 0 ? vn.now() : 0;
  }), b(this, Ar, (n, i) => {
    if (e[i]) {
      const a = e[i], o = A[i];
      n.ttl = a, n.start = o, n.now = r || s();
      const c = n.now - o;
      n.remainingTTL = a - c;
    }
  });
  let r = 0;
  const s = () => {
    const n = vn.now();
    if (this.ttlResolution > 0) {
      r = n;
      const i = setTimeout(() => r = 0, this.ttlResolution);
      i.unref && i.unref();
    }
    return n;
  };
  this.getRemainingTTL = (n) => {
    const i = l(this, nA).get(n);
    if (i === void 0)
      return 0;
    const a = e[i], o = A[i];
    if (a === 0 || o === 0)
      return 1 / 0;
    const c = (r || s()) - o;
    return a - c;
  }, b(this, XA, (n) => e[n] !== 0 && A[n] !== 0 && (r || s()) - A[n] > e[n]);
}, ns = new WeakMap(), Ar = new WeakMap(), ii = new WeakMap(), XA = new WeakMap(), oa = new WeakSet(), AI = function() {
  const e = new Yo(l(this, Ct));
  b(this, dt, 0), b(this, Kt, e), b(this, is, (A) => {
    b(this, dt, l(this, dt) - e[A]), e[A] = 0;
  }), b(this, oi, (A, r, s, n) => {
    if (O(this, De, Le).call(this, r))
      return 0;
    if (!Ir(s))
      if (n) {
        if (typeof n != "function")
          throw new TypeError("sizeCalculation must be a function");
        if (s = n(r, A), !Ir(s))
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      } else
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
    return s;
  }), b(this, Vs, (A, r, s) => {
    if (e[A] = r, l(this, ZA)) {
      const n = l(this, ZA) - e[A];
      for (; l(this, dt) > n; )
        O(this, Ws, Jo).call(this, !0);
    }
    b(this, dt, l(this, dt) + e[A]), s && (s.entrySize = r, s.totalCalculatedSize = l(this, dt));
  });
}, is = new WeakMap(), Vs = new WeakMap(), oi = new WeakMap(), Nt = new WeakSet(), dr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, sA))
    for (let A = l(this, hA); !(!O(this, ai, el).call(this, A) || ((e || !l(this, XA).call(this, A)) && (yield A), A === l(this, SA))); )
      A = l(this, zA)[A];
}, Ut = new WeakSet(), fr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, sA))
    for (let A = l(this, SA); !(!O(this, ai, el).call(this, A) || ((e || !l(this, XA).call(this, A)) && (yield A), A === l(this, hA))); )
      A = l(this, MA)[A];
}, ai = new WeakSet(), el = function(e) {
  return e !== void 0 && l(this, nA).get(l(this, Se)[e]) === e;
}, Ws = new WeakSet(), Jo = function(e) {
  var n, i;
  const A = l(this, SA), r = l(this, Se)[A], s = l(this, le)[A];
  return l(this, Sr) && O(this, De, Le).call(this, s) ? s.__abortController.abort(new Error("evicted")) : (l(this, wt) || l(this, GA)) && (l(this, wt) && ((n = l(this, Bt)) == null || n.call(this, s, r, "evict")), l(this, GA) && ((i = l(this, EA)) == null || i.push([s, r, "evict"]))), l(this, is).call(this, A), e && (l(this, Se)[A] = void 0, l(this, le)[A] = void 0, l(this, ft).push(A)), l(this, sA) === 1 ? (b(this, SA, b(this, hA, 0)), l(this, ft).length = 0) : b(this, SA, l(this, MA)[A]), l(this, nA).delete(r), zi(this, sA)._--, A;
}, xs = new WeakSet(), _o = function(e, A, r, s) {
  const n = A === void 0 ? void 0 : l(this, le)[A];
  if (O(this, De, Le).call(this, n))
    return n;
  const i = new ea(), { signal: a } = r;
  a == null || a.addEventListener("abort", () => i.abort(a.reason), {
    signal: i.signal
  });
  const o = {
    signal: i.signal,
    options: r,
    context: s
  }, c = (u, B = !1) => {
    const { aborted: I } = i.signal, d = r.ignoreFetchAbort && u !== void 0;
    if (r.status && (I && !B ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, d && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), I && !d && !B)
      return h(i.signal.reason);
    const w = Q;
    return l(this, le)[A] === Q && (u === void 0 ? w.__staleWhileFetching ? l(this, le)[A] = w.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, u, o.options))), u;
  }, g = (u) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = u), h(u)), h = (u) => {
    const { aborted: B } = i.signal, I = B && r.allowStaleOnFetchAbort, d = I || r.allowStaleOnFetchRejection, w = d || r.noDeleteOnFetchRejection, m = Q;
    if (l(this, le)[A] === Q && (!w || m.__staleWhileFetching === void 0 ? this.delete(e) : I || (l(this, le)[A] = m.__staleWhileFetching)), d)
      return r.status && m.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), m.__staleWhileFetching;
    if (m.__returned === m)
      throw u;
  }, E = (u, B) => {
    var d;
    const I = (d = l(this, Ps)) == null ? void 0 : d.call(this, e, n, o);
    I && I instanceof Promise && I.then((w) => u(w === void 0 ? void 0 : w), B), i.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (u(void 0), r.allowStaleOnFetchAbort && (u = (w) => c(w, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const Q = new Promise(E).then(c, g), C = Object.assign(Q, {
    __abortController: i,
    __staleWhileFetching: n,
    __returned: void 0
  });
  return A === void 0 ? (this.set(e, C, { ...o.options, status: void 0 }), A = l(this, nA).get(e)) : l(this, le)[A] = C, C;
}, De = new WeakSet(), Le = function(e) {
  if (!l(this, Sr))
    return !1;
  const A = e;
  return !!A && A instanceof Promise && A.hasOwnProperty("__staleWhileFetching") && A.__abortController instanceof ea;
}, ci = new WeakSet(), Al = function(e, A) {
  l(this, zA)[A] = e, l(this, MA)[e] = A;
}, os = new WeakSet(), xn = function(e) {
  e !== l(this, hA) && (e === l(this, SA) ? b(this, SA, l(this, MA)[e]) : O(this, ci, Al).call(this, l(this, zA)[e], l(this, MA)[e]), O(this, ci, Al).call(this, l(this, hA), e), b(this, hA, e));
};
let Aa = Vl;
const bu = typeof process == "object" && process ? process : {
  stdout: null,
  stderr: null
}, ZD = (t) => !!t && typeof t == "object" && (t instanceof ta || t instanceof _t || zD(t) || XD(t)), zD = (t) => !!t && typeof t == "object" && t instanceof El && typeof t.pipe == "function" && // node core Writable streams have a pipe() method, but it throws
t.pipe !== _t.Writable.prototype.pipe, XD = (t) => !!t && typeof t == "object" && t instanceof El && typeof t.write == "function" && typeof t.end == "function", jt = Symbol("EOF"), Zt = Symbol("maybeEmitEnd"), Cr = Symbol("emittedEnd"), Ro = Symbol("emittingEnd"), Ln = Symbol("emittedError"), Do = Symbol("closed"), ku = Symbol("read"), bo = Symbol("flush"), Su = Symbol("flushChunk"), Et = Symbol("encoding"), Ns = Symbol("decoder"), aA = Symbol("flowing"), Mn = Symbol("paused"), Ls = Symbol("resume"), cA = Symbol("buffer"), vA = Symbol("pipes"), gA = Symbol("bufferLength"), yg = Symbol("bufferPush"), ko = Symbol("bufferShift"), DA = Symbol("objectMode"), je = Symbol("destroyed"), Rg = Symbol("error"), Dg = Symbol("emitData"), Fu = Symbol("emitEnd"), bg = Symbol("emitEnd2"), kt = Symbol("async"), kg = Symbol("abort"), So = Symbol("aborted"), Gn = Symbol("signal"), Xr = Symbol("dataListeners"), jA = Symbol("discarded"), Yn = (t) => Promise.resolve().then(t), $D = (t) => t(), KD = (t) => t === "end" || t === "finish" || t === "prefinish", eb = (t) => t instanceof ArrayBuffer || !!t && typeof t == "object" && t.constructor && t.constructor.name === "ArrayBuffer" && t.byteLength >= 0, Ab = (t) => !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
class tI {
  constructor(e, A, r) {
    L(this, "src");
    L(this, "dest");
    L(this, "opts");
    L(this, "ondrain");
    this.src = e, this.dest = A, this.opts = r, this.ondrain = () => e[Ls](), this.dest.on("drain", this.ondrain);
  }
  unpipe() {
    this.dest.removeListener("drain", this.ondrain);
  }
  // only here for the prototype
  /* c8 ignore start */
  proxyErrors(e) {
  }
  /* c8 ignore stop */
  end() {
    this.unpipe(), this.opts.end && this.dest.end();
  }
}
class tb extends tI {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors), super.unpipe();
  }
  constructor(e, A, r) {
    super(e, A, r), this.proxyErrors = (s) => A.emit("error", s), e.on("error", this.proxyErrors);
  }
}
const rb = (t) => !!t.objectMode, sb = (t) => !t.objectMode && !!t.encoding && t.encoding !== "buffer";
var _k, Ok, Hk, Pk, Vk, Wk, xk, qk, jk, Zk, zk, Xk, $k, Kk, eS, AS, tS, rS, sS;
class ta extends El {
  /**
   * If `RType` is Buffer, then options do not need to be provided.
   * Otherwise, an options object must be provided to specify either
   * {@link Minipass.SharedOptions.objectMode} or
   * {@link Minipass.SharedOptions.encoding}, as appropriate.
   */
  constructor(...A) {
    const r = A[0] || {};
    super();
    L(this, _k, !1);
    L(this, Ok, !1);
    L(this, Hk, []);
    L(this, Pk, []);
    L(this, Vk);
    L(this, Wk);
    L(this, xk);
    L(this, qk);
    L(this, jk, !1);
    L(this, Zk, !1);
    L(this, zk, !1);
    L(this, Xk, !1);
    L(this, $k, null);
    L(this, Kk, 0);
    L(this, eS, !1);
    L(this, AS);
    L(this, tS, !1);
    L(this, rS, 0);
    L(this, sS, !1);
    /**
     * true if the stream can be written
     */
    L(this, "writable", !0);
    /**
     * true if the stream can be read
     */
    L(this, "readable", !0);
    if (r.objectMode && typeof r.encoding == "string")
      throw new TypeError("Encoding and objectMode may not be used together");
    rb(r) ? (this[DA] = !0, this[Et] = null) : sb(r) ? (this[Et] = r.encoding, this[DA] = !1) : (this[DA] = !1, this[Et] = null), this[kt] = !!r.async, this[Ns] = this[Et] ? new id(this[Et]) : null, r && r.debugExposeBuffer === !0 && Object.defineProperty(this, "buffer", { get: () => this[cA] }), r && r.debugExposePipes === !0 && Object.defineProperty(this, "pipes", { get: () => this[vA] });
    const { signal: s } = r;
    s && (this[Gn] = s, s.aborted ? this[kg]() : s.addEventListener("abort", () => this[kg]()));
  }
  /**
   * The amount of data stored in the buffer waiting to be read.
   *
   * For Buffer strings, this will be the total byte length.
   * For string encoding streams, this will be the string character length,
   * according to JavaScript's `string.length` logic.
   * For objectMode streams, this is a count of the items waiting to be
   * emitted.
   */
  get bufferLength() {
    return this[gA];
  }
  /**
   * The `BufferEncoding` currently in use, or `null`
   */
  get encoding() {
    return this[Et];
  }
  /**
   * @deprecated - This is a read only property
   */
  set encoding(A) {
    throw new Error("Encoding must be set at instantiation time");
  }
  /**
   * @deprecated - Encoding may only be set at instantiation time
   */
  setEncoding(A) {
    throw new Error("Encoding must be set at instantiation time");
  }
  /**
   * True if this is an objectMode stream
   */
  get objectMode() {
    return this[DA];
  }
  /**
   * @deprecated - This is a read-only property
   */
  set objectMode(A) {
    throw new Error("objectMode must be set at instantiation time");
  }
  /**
   * true if this is an async stream
   */
  get async() {
    return this[kt];
  }
  /**
   * Set to true to make this stream async.
   *
   * Once set, it cannot be unset, as this would potentially cause incorrect
   * behavior.  Ie, a sync stream can be made async, but an async stream
   * cannot be safely made sync.
   */
  set async(A) {
    this[kt] = this[kt] || !!A;
  }
  // drop everything and get out of the flow completely
  [(_k = aA, Ok = Mn, Hk = vA, Pk = cA, Vk = DA, Wk = Et, xk = kt, qk = Ns, jk = jt, Zk = Cr, zk = Ro, Xk = Do, $k = Ln, Kk = gA, eS = je, AS = Gn, tS = So, rS = Xr, sS = jA, kg)]() {
    var A, r;
    this[So] = !0, this.emit("abort", (A = this[Gn]) == null ? void 0 : A.reason), this.destroy((r = this[Gn]) == null ? void 0 : r.reason);
  }
  /**
   * True if the stream has been aborted.
   */
  get aborted() {
    return this[So];
  }
  /**
   * No-op setter. Stream aborted status is set via the AbortSignal provided
   * in the constructor options.
   */
  set aborted(A) {
  }
  write(A, r, s) {
    var i;
    if (this[So])
      return !1;
    if (this[jt])
      throw new Error("write after end");
    if (this[je])
      return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), !0;
    typeof r == "function" && (s = r, r = "utf8"), r || (r = "utf8");
    const n = this[kt] ? Yn : $D;
    if (!this[DA] && !Buffer.isBuffer(A)) {
      if (Ab(A))
        A = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
      else if (eb(A))
        A = Buffer.from(A);
      else if (typeof A != "string")
        throw new Error("Non-contiguous data written to non-objectMode stream");
    }
    return this[DA] ? (this[aA] && this[gA] !== 0 && this[bo](!0), this[aA] ? this.emit("data", A) : this[yg](A), this[gA] !== 0 && this.emit("readable"), s && n(s), this[aA]) : A.length ? (typeof A == "string" && // unless it is a string already ready for us to use
    !(r === this[Et] && !((i = this[Ns]) != null && i.lastNeed)) && (A = Buffer.from(A, r)), Buffer.isBuffer(A) && this[Et] && (A = this[Ns].write(A)), this[aA] && this[gA] !== 0 && this[bo](!0), this[aA] ? this.emit("data", A) : this[yg](A), this[gA] !== 0 && this.emit("readable"), s && n(s), this[aA]) : (this[gA] !== 0 && this.emit("readable"), s && n(s), this[aA]);
  }
  /**
   * Low-level explicit read method.
   *
   * In objectMode, the argument is ignored, and one item is returned if
   * available.
   *
   * `n` is the number of bytes (or in the case of encoding streams,
   * characters) to consume. If `n` is not provided, then the entire buffer
   * is returned, or `null` is returned if no data is available.
   *
   * If `n` is greater that the amount of data in the internal buffer,
   * then `null` is returned.
   */
  read(A) {
    if (this[je])
      return null;
    if (this[jA] = !1, this[gA] === 0 || A === 0 || A && A > this[gA])
      return this[Zt](), null;
    this[DA] && (A = null), this[cA].length > 1 && !this[DA] && (this[cA] = [
      this[Et] ? this[cA].join("") : Buffer.concat(this[cA], this[gA])
    ]);
    const r = this[ku](A || null, this[cA][0]);
    return this[Zt](), r;
  }
  [ku](A, r) {
    if (this[DA])
      this[ko]();
    else {
      const s = r;
      A === s.length || A === null ? this[ko]() : typeof s == "string" ? (this[cA][0] = s.slice(A), r = s.slice(0, A), this[gA] -= A) : (this[cA][0] = s.subarray(A), r = s.subarray(0, A), this[gA] -= A);
    }
    return this.emit("data", r), !this[cA].length && !this[jt] && this.emit("drain"), r;
  }
  end(A, r, s) {
    return typeof A == "function" && (s = A, A = void 0), typeof r == "function" && (s = r, r = "utf8"), A !== void 0 && this.write(A, r), s && this.once("end", s), this[jt] = !0, this.writable = !1, (this[aA] || !this[Mn]) && this[Zt](), this;
  }
  // don't let the internal resume be overwritten
  [Ls]() {
    this[je] || (!this[Xr] && !this[vA].length && (this[jA] = !0), this[Mn] = !1, this[aA] = !0, this.emit("resume"), this[cA].length ? this[bo]() : this[jt] ? this[Zt]() : this.emit("drain"));
  }
  /**
   * Resume the stream if it is currently in a paused state
   *
   * If called when there are no pipe destinations or `data` event listeners,
   * this will place the stream in a "discarded" state, where all data will
   * be thrown away. The discarded state is removed if a pipe destination or
   * data handler is added, if pause() is called, or if any synchronous or
   * asynchronous iteration is started.
   */
  resume() {
    return this[Ls]();
  }
  /**
   * Pause the stream
   */
  pause() {
    this[aA] = !1, this[Mn] = !0, this[jA] = !1;
  }
  /**
   * true if the stream has been forcibly destroyed
   */
  get destroyed() {
    return this[je];
  }
  /**
   * true if the stream is currently in a flowing state, meaning that
   * any writes will be immediately emitted.
   */
  get flowing() {
    return this[aA];
  }
  /**
   * true if the stream is currently in a paused state
   */
  get paused() {
    return this[Mn];
  }
  [yg](A) {
    this[DA] ? this[gA] += 1 : this[gA] += A.length, this[cA].push(A);
  }
  [ko]() {
    return this[DA] ? this[gA] -= 1 : this[gA] -= this[cA][0].length, this[cA].shift();
  }
  [bo](A = !1) {
    do
      ;
    while (this[Su](this[ko]()) && this[cA].length);
    !A && !this[cA].length && !this[jt] && this.emit("drain");
  }
  [Su](A) {
    return this.emit("data", A), this[aA];
  }
  /**
   * Pipe all data emitted by this stream into the destination provided.
   *
   * Triggers the flow of data.
   */
  pipe(A, r) {
    if (this[je])
      return A;
    this[jA] = !1;
    const s = this[Cr];
    return r = r || {}, A === bu.stdout || A === bu.stderr ? r.end = !1 : r.end = r.end !== !1, r.proxyErrors = !!r.proxyErrors, s ? r.end && A.end() : (this[vA].push(r.proxyErrors ? new tb(this, A, r) : new tI(this, A, r)), this[kt] ? Yn(() => this[Ls]()) : this[Ls]()), A;
  }
  /**
   * Fully unhook a piped destination stream.
   *
   * If the destination stream was the only consumer of this stream (ie,
   * there are no other piped destinations or `'data'` event listeners)
   * then the flow of data will stop until there is another consumer or
   * {@link Minipass#resume} is explicitly called.
   */
  unpipe(A) {
    const r = this[vA].find((s) => s.dest === A);
    r && (this[vA].length === 1 ? (this[aA] && this[Xr] === 0 && (this[aA] = !1), this[vA] = []) : this[vA].splice(this[vA].indexOf(r), 1), r.unpipe());
  }
  /**
   * Alias for {@link Minipass#on}
   */
  addListener(A, r) {
    return this.on(A, r);
  }
  /**
   * Mostly identical to `EventEmitter.on`, with the following
   * behavior differences to prevent data loss and unnecessary hangs:
   *
   * - Adding a 'data' event handler will trigger the flow of data
   *
   * - Adding a 'readable' event handler when there is data waiting to be read
   *   will cause 'readable' to be emitted immediately.
   *
   * - Adding an 'endish' event handler ('end', 'finish', etc.) which has
   *   already passed will cause the event to be emitted immediately and all
   *   handlers removed.
   *
   * - Adding an 'error' event handler after an error has been emitted will
   *   cause the event to be re-emitted immediately with the error previously
   *   raised.
   */
  on(A, r) {
    const s = super.on(A, r);
    if (A === "data")
      this[jA] = !1, this[Xr]++, !this[vA].length && !this[aA] && this[Ls]();
    else if (A === "readable" && this[gA] !== 0)
      super.emit("readable");
    else if (KD(A) && this[Cr])
      super.emit(A), this.removeAllListeners(A);
    else if (A === "error" && this[Ln]) {
      const n = r;
      this[kt] ? Yn(() => n.call(this, this[Ln])) : n.call(this, this[Ln]);
    }
    return s;
  }
  /**
   * Alias for {@link Minipass#off}
   */
  removeListener(A, r) {
    return this.off(A, r);
  }
  /**
   * Mostly identical to `EventEmitter.off`
   *
   * If a 'data' event handler is removed, and it was the last consumer
   * (ie, there are no pipe destinations or other 'data' event listeners),
   * then the flow of data will stop until there is another consumer or
   * {@link Minipass#resume} is explicitly called.
   */
  off(A, r) {
    const s = super.off(A, r);
    return A === "data" && (this[Xr] = this.listeners("data").length, this[Xr] === 0 && !this[jA] && !this[vA].length && (this[aA] = !1)), s;
  }
  /**
   * Mostly identical to `EventEmitter.removeAllListeners`
   *
   * If all 'data' event handlers are removed, and they were the last consumer
   * (ie, there are no pipe destinations), then the flow of data will stop
   * until there is another consumer or {@link Minipass#resume} is explicitly
   * called.
   */
  removeAllListeners(A) {
    const r = super.removeAllListeners(A);
    return (A === "data" || A === void 0) && (this[Xr] = 0, !this[jA] && !this[vA].length && (this[aA] = !1)), r;
  }
  /**
   * true if the 'end' event has been emitted
   */
  get emittedEnd() {
    return this[Cr];
  }
  [Zt]() {
    !this[Ro] && !this[Cr] && !this[je] && this[cA].length === 0 && this[jt] && (this[Ro] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[Do] && this.emit("close"), this[Ro] = !1);
  }
  /**
   * Mostly identical to `EventEmitter.emit`, with the following
   * behavior differences to prevent data loss and unnecessary hangs:
   *
   * If the stream has been destroyed, and the event is something other
   * than 'close' or 'error', then `false` is returned and no handlers
   * are called.
   *
   * If the event is 'end', and has already been emitted, then the event
   * is ignored. If the stream is in a paused or non-flowing state, then
   * the event will be deferred until data flow resumes. If the stream is
   * async, then handlers will be called on the next tick rather than
   * immediately.
   *
   * If the event is 'close', and 'end' has not yet been emitted, then
   * the event will be deferred until after 'end' is emitted.
   *
   * If the event is 'error', and an AbortSignal was provided for the stream,
   * and there are no listeners, then the event is ignored, matching the
   * behavior of node core streams in the presense of an AbortSignal.
   *
   * If the event is 'finish' or 'prefinish', then all listeners will be
   * removed after emitting the event, to prevent double-firing.
   */
  emit(A, ...r) {
    const s = r[0];
    if (A !== "error" && A !== "close" && A !== je && this[je])
      return !1;
    if (A === "data")
      return !this[DA] && !s ? !1 : this[kt] ? (Yn(() => this[Dg](s)), !0) : this[Dg](s);
    if (A === "end")
      return this[Fu]();
    if (A === "close") {
      if (this[Do] = !0, !this[Cr] && !this[je])
        return !1;
      const i = super.emit("close");
      return this.removeAllListeners("close"), i;
    } else if (A === "error") {
      this[Ln] = s, super.emit(Rg, s);
      const i = !this[Gn] || this.listeners("error").length ? super.emit("error", s) : !1;
      return this[Zt](), i;
    } else if (A === "resume") {
      const i = super.emit("resume");
      return this[Zt](), i;
    } else if (A === "finish" || A === "prefinish") {
      const i = super.emit(A);
      return this.removeAllListeners(A), i;
    }
    const n = super.emit(A, ...r);
    return this[Zt](), n;
  }
  [Dg](A) {
    for (const s of this[vA])
      s.dest.write(A) === !1 && this.pause();
    const r = this[jA] ? !1 : super.emit("data", A);
    return this[Zt](), r;
  }
  [Fu]() {
    return this[Cr] ? !1 : (this[Cr] = !0, this.readable = !1, this[kt] ? (Yn(() => this[bg]()), !0) : this[bg]());
  }
  [bg]() {
    if (this[Ns]) {
      const r = this[Ns].end();
      if (r) {
        for (const s of this[vA])
          s.dest.write(r);
        this[jA] || super.emit("data", r);
      }
    }
    for (const r of this[vA])
      r.end();
    const A = super.emit("end");
    return this.removeAllListeners("end"), A;
  }
  /**
   * Return a Promise that resolves to an array of all emitted data once
   * the stream ends.
   */
  async collect() {
    const A = Object.assign([], {
      dataLength: 0
    });
    this[DA] || (A.dataLength = 0);
    const r = this.promise();
    return this.on("data", (s) => {
      A.push(s), this[DA] || (A.dataLength += s.length);
    }), await r, A;
  }
  /**
   * Return a Promise that resolves to the concatenation of all emitted data
   * once the stream ends.
   *
   * Not allowed on objectMode streams.
   */
  async concat() {
    if (this[DA])
      throw new Error("cannot concat in objectMode");
    const A = await this.collect();
    return this[Et] ? A.join("") : Buffer.concat(A, A.dataLength);
  }
  /**
   * Return a void Promise that resolves once the stream ends.
   */
  async promise() {
    return new Promise((A, r) => {
      this.on(je, () => r(new Error("stream destroyed"))), this.on("error", (s) => r(s)), this.on("end", () => A());
    });
  }
  /**
   * Asynchronous `for await of` iteration.
   *
   * This will continue emitting all chunks until the stream terminates.
   */
  [Symbol.asyncIterator]() {
    this[jA] = !1;
    let A = !1;
    const r = async () => (this.pause(), A = !0, { value: void 0, done: !0 });
    return {
      next: () => {
        if (A)
          return r();
        const n = this.read();
        if (n !== null)
          return Promise.resolve({ done: !1, value: n });
        if (this[jt])
          return r();
        let i, a;
        const o = (E) => {
          this.off("data", c), this.off("end", g), this.off(je, h), r(), a(E);
        }, c = (E) => {
          this.off("error", o), this.off("end", g), this.off(je, h), this.pause(), i({ value: E, done: !!this[jt] });
        }, g = () => {
          this.off("error", o), this.off("data", c), this.off(je, h), r(), i({ done: !0, value: void 0 });
        }, h = () => o(new Error("stream destroyed"));
        return new Promise((E, Q) => {
          a = Q, i = E, this.once(je, h), this.once("error", o), this.once("end", g), this.once("data", c);
        });
      },
      throw: r,
      return: r,
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
  /**
   * Synchronous `for of` iteration.
   *
   * The iteration will terminate when the internal buffer runs out, even
   * if the stream has not yet terminated.
   */
  [Symbol.iterator]() {
    this[jA] = !1;
    let A = !1;
    const r = () => (this.pause(), this.off(Rg, r), this.off(je, r), this.off("end", r), A = !0, { done: !0, value: void 0 }), s = () => {
      if (A)
        return r();
      const n = this.read();
      return n === null ? r() : { done: !1, value: n };
    };
    return this.once("end", r), this.once(Rg, r), this.once(je, r), {
      next: s,
      throw: r,
      return: r,
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  /**
   * Destroy a stream, preventing it from being used for any further purpose.
   *
   * If the stream has a `close()` method, then it will be called on
   * destruction.
   *
   * After destruction, any attempt to write data, read data, or emit most
   * events will be ignored.
   *
   * If an error argument is provided, then it will be emitted in an
   * 'error' event.
   */
  destroy(A) {
    if (this[je])
      return A ? this.emit("error", A) : this.emit(je), this;
    this[je] = !0, this[jA] = !0, this[cA].length = 0, this[gA] = 0;
    const r = this;
    return typeof r.close == "function" && !this[Do] && r.close(), A ? this.emit("error", A) : this.emit(je), this;
  }
  /**
   * Alias for {@link isStream}
   *
   * Former export location, maintained for backwards compatibility.
   *
   * @deprecated
   */
  static get isStream() {
    return ZD;
  }
}
const nb = qI.native, qn = {
  lstatSync: jI,
  readdir: ZI,
  readdirSync: zI,
  readlinkSync: XI,
  realpathSync: nb,
  promises: {
    lstat: od,
    readdir: ad,
    readlink: cd,
    realpath: gd
  }
}, rI = (t) => !t || t === qn || t === xI ? qn : {
  ...qn,
  ...t,
  promises: {
    ...qn.promises,
    ...t.promises || {}
  }
}, sI = /^\\\\\?\\([a-z]:)\\?$/i, ib = (t) => t.replace(/\//g, "\\").replace(sI, "$1\\"), ob = /[\\\/]/, ot = 0, nI = 1, iI = 2, Ft = 4, oI = 6, aI = 8, $r = 10, cI = 12, it = 15, Jn = ~it, Sg = 16, Nu = 32, jn = 64, ut = 128, Fo = 256, Oo = 512, Uu = jn | ut | Oo, ab = 1023, Fg = (t) => t.isFile() ? aI : t.isDirectory() ? Ft : t.isSymbolicLink() ? $r : t.isCharacterDevice() ? iI : t.isBlockDevice() ? oI : t.isSocket() ? cI : t.isFIFO() ? nI : ot, Tu = /* @__PURE__ */ new Map(), Zn = (t) => {
  const e = Tu.get(t);
  if (e)
    return e;
  const A = t.normalize("NFKD");
  return Tu.set(t, A), A;
}, vu = /* @__PURE__ */ new Map(), No = (t) => {
  const e = vu.get(t);
  if (e)
    return e;
  const A = Zn(t.toLowerCase());
  return vu.set(t, A), A;
};
class Lu extends Aa {
  constructor() {
    super({ max: 256 });
  }
}
class cb extends Aa {
  constructor(e = 16 * 1024) {
    super({
      maxSize: e,
      // parent + children
      sizeCalculation: (A) => A.length + 1
    });
  }
}
const gI = Symbol("PathScurry setAsCwd");
var YA, gi, li, hi, Ei, ui, Qi, Ci, Bi, Ii, di, fi, pi, wi, mi, yi, Ri, Di, bi, Fr, as, Tt, tr, rr, sr, ce, cs, nr, vt, ki, tl, qs, Ho, gs, zn, Si, rl, Fi, sl, ls, Xn, js, Po, Ni, nl, Ui, il, Zs, Vo, aa, lI, ca, hI, ga, EI, Ti, ol, zs, Xs, la, uI, hs;
class VA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(e, A = ot, r, s, n, i, a) {
    N(this, ki);
    N(this, qs);
    N(this, gs);
    N(this, Si);
    N(this, Fi);
    // save the information when we know the entry is not a dir
    N(this, ls);
    N(this, js);
    N(this, Ni);
    N(this, Ui);
    N(this, Zs);
    N(this, aa);
    N(this, ca);
    N(this, ga);
    N(this, Ti);
    N(this, la);
    /**
     * the basename of this path
     *
     * **Important**: *always* test the path name against any test string
     * usingthe {@link isNamed} method, and not by directly comparing this
     * string. Otherwise, unicode path strings that the system sees as identical
     * will not be properly treated as the same path, leading to incorrect
     * behavior and possible security issues.
     */
    L(this, "name");
    /**
     * the Path entry corresponding to the path root.
     *
     * @internal
     */
    L(this, "root");
    /**
     * All roots found within the current PathScurry family
     *
     * @internal
     */
    L(this, "roots");
    /**
     * a reference to the parent path, or undefined in the case of root entries
     *
     * @internal
     */
    L(this, "parent");
    /**
     * boolean indicating whether paths are compared case-insensitively
     * @internal
     */
    L(this, "nocase");
    // potential default fs override
    N(this, YA, void 0);
    // Stats fields
    N(this, gi, void 0);
    N(this, li, void 0);
    N(this, hi, void 0);
    N(this, Ei, void 0);
    N(this, ui, void 0);
    N(this, Qi, void 0);
    N(this, Ci, void 0);
    N(this, Bi, void 0);
    N(this, Ii, void 0);
    N(this, di, void 0);
    N(this, fi, void 0);
    N(this, pi, void 0);
    N(this, wi, void 0);
    N(this, mi, void 0);
    N(this, yi, void 0);
    N(this, Ri, void 0);
    N(this, Di, void 0);
    N(this, bi, void 0);
    N(this, Fr, void 0);
    N(this, as, void 0);
    N(this, Tt, void 0);
    N(this, tr, void 0);
    N(this, rr, void 0);
    N(this, sr, void 0);
    N(this, ce, void 0);
    N(this, cs, void 0);
    N(this, nr, void 0);
    N(this, vt, void 0);
    N(this, zs, []);
    N(this, Xs, !1);
    N(this, hs, void 0);
    this.name = e, b(this, Fr, n ? No(e) : Zn(e)), b(this, ce, A & ab), this.nocase = n, this.roots = s, this.root = r || this, b(this, cs, i), b(this, Tt, a.fullpath), b(this, rr, a.relative), b(this, sr, a.relativePosix), this.parent = a.parent, this.parent ? b(this, YA, l(this.parent, YA)) : b(this, YA, rI(a.fs));
  }
  get dev() {
    return l(this, gi);
  }
  get mode() {
    return l(this, li);
  }
  get nlink() {
    return l(this, hi);
  }
  get uid() {
    return l(this, Ei);
  }
  get gid() {
    return l(this, ui);
  }
  get rdev() {
    return l(this, Qi);
  }
  get blksize() {
    return l(this, Ci);
  }
  get ino() {
    return l(this, Bi);
  }
  get size() {
    return l(this, Ii);
  }
  get blocks() {
    return l(this, di);
  }
  get atimeMs() {
    return l(this, fi);
  }
  get mtimeMs() {
    return l(this, pi);
  }
  get ctimeMs() {
    return l(this, wi);
  }
  get birthtimeMs() {
    return l(this, mi);
  }
  get atime() {
    return l(this, yi);
  }
  get mtime() {
    return l(this, Ri);
  }
  get ctime() {
    return l(this, Di);
  }
  get birthtime() {
    return l(this, bi);
  }
  /**
   * This property is for compatibility with the Dirent class as of
   * Node v20, where Dirent['path'] refers to the path of the directory
   * that was passed to readdir.  So, somewhat counterintuitively, this
   * property refers to the *parent* path, not the path object itself.
   * For root entries, it's the path to the entry itself.
   */
  get path() {
    return (this.parent || this).fullpath();
  }
  /**
   * Returns the depth of the Path object from its root.
   *
   * For example, a path at `/foo/bar` would have a depth of 2.
   */
  depth() {
    return l(this, as) !== void 0 ? l(this, as) : this.parent ? b(this, as, this.parent.depth() + 1) : b(this, as, 0);
  }
  /**
   * @internal
   */
  childrenCache() {
    return l(this, cs);
  }
  /**
   * Get the Path object referenced by the string path, resolved from this Path
   */
  resolve(e) {
    var i;
    if (!e)
      return this;
    const A = this.getRootString(e), s = e.substring(A.length).split(this.splitSep);
    return A ? O(i = this.getRoot(A), ki, tl).call(i, s) : O(this, ki, tl).call(this, s);
  }
  /**
   * Returns the cached children Path objects, if still available.  If they
   * have fallen out of the cache, then returns an empty array, and resets the
   * READDIR_CALLED bit, so that future calls to readdir() will require an fs
   * lookup.
   *
   * @internal
   */
  children() {
    const e = l(this, cs).get(this);
    if (e)
      return e;
    const A = Object.assign([], { provisional: 0 });
    return l(this, cs).set(this, A), b(this, ce, l(this, ce) & ~Sg), A;
  }
  /**
   * Resolves a path portion and returns or creates the child Path.
   *
   * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
   * `'..'`.
   *
   * This should not be called directly.  If `pathPart` contains any path
   * separators, it will lead to unsafe undefined behavior.
   *
   * Use `Path.resolve()` instead.
   *
   * @internal
   */
  child(e, A) {
    if (e === "" || e === ".")
      return this;
    if (e === "..")
      return this.parent || this;
    const r = this.children(), s = this.nocase ? No(e) : Zn(e);
    for (const o of r)
      if (l(o, Fr) === s)
        return o;
    const n = this.parent ? this.sep : "", i = l(this, Tt) ? l(this, Tt) + n + e : void 0, a = this.newChild(e, ot, {
      ...A,
      parent: this,
      fullpath: i
    });
    return this.canReaddir() || b(a, ce, l(a, ce) | ut), r.push(a), a;
  }
  /**
   * The relative path from the cwd. If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpath()
   */
  relative() {
    if (l(this, rr) !== void 0)
      return l(this, rr);
    const e = this.name, A = this.parent;
    if (!A)
      return b(this, rr, this.name);
    const r = A.relative();
    return r + (!r || !A.parent ? "" : this.sep) + e;
  }
  /**
   * The relative path from the cwd, using / as the path separator.
   * If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpathPosix()
   * On posix systems, this is identical to relative().
   */
  relativePosix() {
    if (this.sep === "/")
      return this.relative();
    if (l(this, sr) !== void 0)
      return l(this, sr);
    const e = this.name, A = this.parent;
    if (!A)
      return b(this, sr, this.fullpathPosix());
    const r = A.relativePosix();
    return r + (!r || !A.parent ? "" : "/") + e;
  }
  /**
   * The fully resolved path string for this Path entry
   */
  fullpath() {
    if (l(this, Tt) !== void 0)
      return l(this, Tt);
    const e = this.name, A = this.parent;
    if (!A)
      return b(this, Tt, this.name);
    const s = A.fullpath() + (A.parent ? this.sep : "") + e;
    return b(this, Tt, s);
  }
  /**
   * On platforms other than windows, this is identical to fullpath.
   *
   * On windows, this is overridden to return the forward-slash form of the
   * full UNC path.
   */
  fullpathPosix() {
    if (l(this, tr) !== void 0)
      return l(this, tr);
    if (this.sep === "/")
      return b(this, tr, this.fullpath());
    if (!this.parent) {
      const s = this.fullpath().replace(/\\/g, "/");
      return /^[a-z]:\//i.test(s) ? b(this, tr, `//?/${s}`) : b(this, tr, s);
    }
    const e = this.parent, A = e.fullpathPosix(), r = A + (!A || !e.parent ? "" : "/") + this.name;
    return b(this, tr, r);
  }
  /**
   * Is the Path of an unknown type?
   *
   * Note that we might know *something* about it if there has been a previous
   * filesystem operation, for example that it does not exist, or is not a
   * link, or whether it has child entries.
   */
  isUnknown() {
    return (l(this, ce) & it) === ot;
  }
  isType(e) {
    return this[`is${e}`]();
  }
  getType() {
    return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : (
      /* c8 ignore start */
      this.isSocket() ? "Socket" : "Unknown"
    );
  }
  /**
   * Is the Path a regular file?
   */
  isFile() {
    return (l(this, ce) & it) === aI;
  }
  /**
   * Is the Path a directory?
   */
  isDirectory() {
    return (l(this, ce) & it) === Ft;
  }
  /**
   * Is the path a character device?
   */
  isCharacterDevice() {
    return (l(this, ce) & it) === iI;
  }
  /**
   * Is the path a block device?
   */
  isBlockDevice() {
    return (l(this, ce) & it) === oI;
  }
  /**
   * Is the path a FIFO pipe?
   */
  isFIFO() {
    return (l(this, ce) & it) === nI;
  }
  /**
   * Is the path a socket?
   */
  isSocket() {
    return (l(this, ce) & it) === cI;
  }
  /**
   * Is the path a symbolic link?
   */
  isSymbolicLink() {
    return (l(this, ce) & $r) === $r;
  }
  /**
   * Return the entry if it has been subject of a successful lstat, or
   * undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* simply
   * mean that we haven't called lstat on it.
   */
  lstatCached() {
    return l(this, ce) & Nu ? this : void 0;
  }
  /**
   * Return the cached link target if the entry has been the subject of a
   * successful readlink, or undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * readlink() has been called at some point.
   */
  readlinkCached() {
    return l(this, nr);
  }
  /**
   * Returns the cached realpath target if the entry has been the subject
   * of a successful realpath, or undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * realpath() has been called at some point.
   */
  realpathCached() {
    return l(this, vt);
  }
  /**
   * Returns the cached child Path entries array if the entry has been the
   * subject of a successful readdir(), or [] otherwise.
   *
   * Does not read the filesystem, so an empty array *could* just mean we
   * don't have any cached data. Only use it if you are very sure that a
   * readdir() has been called recently enough to still be valid.
   */
  readdirCached() {
    const e = this.children();
    return e.slice(0, e.provisional);
  }
  /**
   * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
   * any indication that readlink will definitely fail.
   *
   * Returns false if the path is known to not be a symlink, if a previous
   * readlink failed, or if the entry does not exist.
   */
  canReadlink() {
    if (l(this, nr))
      return !0;
    if (!this.parent)
      return !1;
    const e = l(this, ce) & it;
    return !(e !== ot && e !== $r || l(this, ce) & Fo || l(this, ce) & ut);
  }
  /**
   * Return true if readdir has previously been successfully called on this
   * path, indicating that cachedReaddir() is likely valid.
   */
  calledReaddir() {
    return !!(l(this, ce) & Sg);
  }
  /**
   * Returns true if the path is known to not exist. That is, a previous lstat
   * or readdir failed to verify its existence when that would have been
   * expected, or a parent entry was marked either enoent or enotdir.
   */
  isENOENT() {
    return !!(l(this, ce) & ut);
  }
  /**
   * Return true if the path is a match for the given path name.  This handles
   * case sensitivity and unicode normalization.
   *
   * Note: even on case-sensitive systems, it is **not** safe to test the
   * equality of the `.name` property to determine whether a given pathname
   * matches, due to unicode normalization mismatches.
   *
   * Always use this method instead of testing the `path.name` property
   * directly.
   */
  isNamed(e) {
    return this.nocase ? l(this, Fr) === No(e) : l(this, Fr) === Zn(e);
  }
  /**
   * Return the Path object corresponding to the target of a symbolic link.
   *
   * If the Path is not a symbolic link, or if the readlink call fails for any
   * reason, `undefined` is returned.
   *
   * Result is cached, and thus may be outdated if the filesystem is mutated.
   */
  async readlink() {
    const e = l(this, nr);
    if (e)
      return e;
    if (this.canReadlink() && this.parent)
      try {
        const A = await l(this, YA).promises.readlink(this.fullpath()), r = this.parent.resolve(A);
        if (r)
          return b(this, nr, r);
      } catch (A) {
        O(this, Ui, il).call(this, A.code);
        return;
      }
  }
  /**
   * Synchronous {@link PathBase.readlink}
   */
  readlinkSync() {
    const e = l(this, nr);
    if (e)
      return e;
    if (this.canReadlink() && this.parent)
      try {
        const A = l(this, YA).readlinkSync(this.fullpath()), r = this.parent.resolve(A);
        if (r)
          return b(this, nr, r);
      } catch (A) {
        O(this, Ui, il).call(this, A.code);
        return;
      }
  }
  /**
   * Call lstat() on this Path, and update all known information that can be
   * determined.
   *
   * Note that unlike `fs.lstat()`, the returned value does not contain some
   * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
   * information is required, you will need to call `fs.lstat` yourself.
   *
   * If the Path refers to a nonexistent file, or if the lstat call fails for
   * any reason, `undefined` is returned.  Otherwise the updated Path object is
   * returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async lstat() {
    if (!(l(this, ce) & ut))
      try {
        return O(this, Ti, ol).call(this, await l(this, YA).promises.lstat(this.fullpath())), this;
      } catch (e) {
        O(this, Ni, nl).call(this, e.code);
      }
  }
  /**
   * synchronous {@link PathBase.lstat}
   */
  lstatSync() {
    if (!(l(this, ce) & ut))
      try {
        return O(this, Ti, ol).call(this, l(this, YA).lstatSync(this.fullpath())), this;
      } catch (e) {
        O(this, Ni, nl).call(this, e.code);
      }
  }
  /**
   * Standard node-style callback interface to get list of directory entries.
   *
   * If the Path cannot or does not contain any children, then an empty array
   * is returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   *
   * @param cb The callback called with (er, entries).  Note that the `er`
   * param is somewhat extraneous, as all readdir() errors are handled and
   * simply result in an empty set of entries being returned.
   * @param allowZalgo Boolean indicating that immediately known results should
   * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
   * zalgo at your peril, the dark pony lord is devious and unforgiving.
   */
  readdirCB(e, A = !1) {
    if (!this.canReaddir()) {
      A ? e(null, []) : queueMicrotask(() => e(null, []));
      return;
    }
    const r = this.children();
    if (this.calledReaddir()) {
      const n = r.slice(0, r.provisional);
      A ? e(null, n) : queueMicrotask(() => e(null, n));
      return;
    }
    if (l(this, zs).push(e), l(this, Xs))
      return;
    b(this, Xs, !0);
    const s = this.fullpath();
    l(this, YA).readdir(s, { withFileTypes: !0 }, (n, i) => {
      if (n)
        O(this, js, Po).call(this, n.code), r.provisional = 0;
      else {
        for (const a of i)
          O(this, Zs, Vo).call(this, a, r);
        O(this, qs, Ho).call(this, r);
      }
      O(this, la, uI).call(this, r.slice(0, r.provisional));
    });
  }
  /**
   * Return an array of known child entries.
   *
   * If the Path cannot or does not contain any children, then an empty array
   * is returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async readdir() {
    if (!this.canReaddir())
      return [];
    const e = this.children();
    if (this.calledReaddir())
      return e.slice(0, e.provisional);
    const A = this.fullpath();
    if (l(this, hs))
      await l(this, hs);
    else {
      let r = () => {
      };
      b(this, hs, new Promise((s) => r = s));
      try {
        for (const s of await l(this, YA).promises.readdir(A, {
          withFileTypes: !0
        }))
          O(this, Zs, Vo).call(this, s, e);
        O(this, qs, Ho).call(this, e);
      } catch (s) {
        O(this, js, Po).call(this, s.code), e.provisional = 0;
      }
      b(this, hs, void 0), r();
    }
    return e.slice(0, e.provisional);
  }
  /**
   * synchronous {@link PathBase.readdir}
   */
  readdirSync() {
    if (!this.canReaddir())
      return [];
    const e = this.children();
    if (this.calledReaddir())
      return e.slice(0, e.provisional);
    const A = this.fullpath();
    try {
      for (const r of l(this, YA).readdirSync(A, {
        withFileTypes: !0
      }))
        O(this, Zs, Vo).call(this, r, e);
      O(this, qs, Ho).call(this, e);
    } catch (r) {
      O(this, js, Po).call(this, r.code), e.provisional = 0;
    }
    return e.slice(0, e.provisional);
  }
  canReaddir() {
    if (l(this, ce) & Uu)
      return !1;
    const e = it & l(this, ce);
    return e === ot || e === Ft || e === $r;
  }
  shouldWalk(e, A) {
    return (l(this, ce) & Ft) === Ft && !(l(this, ce) & Uu) && !e.has(this) && (!A || A(this));
  }
  /**
   * Return the Path object corresponding to path as resolved
   * by realpath(3).
   *
   * If the realpath call fails for any reason, `undefined` is returned.
   *
   * Result is cached, and thus may be outdated if the filesystem is mutated.
   * On success, returns a Path object.
   */
  async realpath() {
    if (l(this, vt))
      return l(this, vt);
    if (!((Oo | Fo | ut) & l(this, ce)))
      try {
        const e = await l(this, YA).promises.realpath(this.fullpath());
        return b(this, vt, this.resolve(e));
      } catch {
        O(this, Fi, sl).call(this);
      }
  }
  /**
   * Synchronous {@link realpath}
   */
  realpathSync() {
    if (l(this, vt))
      return l(this, vt);
    if (!((Oo | Fo | ut) & l(this, ce)))
      try {
        const e = l(this, YA).realpathSync(this.fullpath());
        return b(this, vt, this.resolve(e));
      } catch {
        O(this, Fi, sl).call(this);
      }
  }
  /**
   * Internal method to mark this Path object as the scurry cwd,
   * called by {@link PathScurry#chdir}
   *
   * @internal
   */
  [gI](e) {
    if (e === this)
      return;
    const A = /* @__PURE__ */ new Set([]);
    let r = [], s = this;
    for (; s && s.parent; )
      A.add(s), b(s, rr, r.join(this.sep)), b(s, sr, r.join("/")), s = s.parent, r.push("..");
    for (s = e; s && s.parent && !A.has(s); )
      b(s, rr, void 0), b(s, sr, void 0), s = s.parent;
  }
}
YA = new WeakMap(), gi = new WeakMap(), li = new WeakMap(), hi = new WeakMap(), Ei = new WeakMap(), ui = new WeakMap(), Qi = new WeakMap(), Ci = new WeakMap(), Bi = new WeakMap(), Ii = new WeakMap(), di = new WeakMap(), fi = new WeakMap(), pi = new WeakMap(), wi = new WeakMap(), mi = new WeakMap(), yi = new WeakMap(), Ri = new WeakMap(), Di = new WeakMap(), bi = new WeakMap(), Fr = new WeakMap(), as = new WeakMap(), Tt = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), sr = new WeakMap(), ce = new WeakMap(), cs = new WeakMap(), nr = new WeakMap(), vt = new WeakMap(), ki = new WeakSet(), tl = function(e) {
  let A = this;
  for (const r of e)
    A = A.child(r);
  return A;
}, qs = new WeakSet(), Ho = function(e) {
  var A;
  b(this, ce, l(this, ce) | Sg);
  for (let r = e.provisional; r < e.length; r++)
    O(A = e[r], gs, zn).call(A);
}, gs = new WeakSet(), zn = function() {
  l(this, ce) & ut || (b(this, ce, (l(this, ce) | ut) & Jn), O(this, Si, rl).call(this));
}, Si = new WeakSet(), rl = function() {
  var A;
  const e = this.children();
  e.provisional = 0;
  for (const r of e)
    O(A = r, gs, zn).call(A);
}, Fi = new WeakSet(), sl = function() {
  b(this, ce, l(this, ce) | Oo), O(this, ls, Xn).call(this);
}, ls = new WeakSet(), Xn = function() {
  if (l(this, ce) & jn)
    return;
  let e = l(this, ce);
  (e & it) === Ft && (e &= Jn), b(this, ce, e | jn), O(this, Si, rl).call(this);
}, js = new WeakSet(), Po = function(e = "") {
  e === "ENOTDIR" || e === "EPERM" ? O(this, ls, Xn).call(this) : e === "ENOENT" ? O(this, gs, zn).call(this) : this.children().provisional = 0;
}, Ni = new WeakSet(), nl = function(e = "") {
  var A;
  if (e === "ENOTDIR") {
    const r = this.parent;
    O(A = r, ls, Xn).call(A);
  } else
    e === "ENOENT" && O(this, gs, zn).call(this);
}, Ui = new WeakSet(), il = function(e = "") {
  var r;
  let A = l(this, ce);
  A |= Fo, e === "ENOENT" && (A |= ut), (e === "EINVAL" || e === "UNKNOWN") && (A &= Jn), b(this, ce, A), e === "ENOTDIR" && this.parent && O(r = this.parent, ls, Xn).call(r);
}, Zs = new WeakSet(), Vo = function(e, A) {
  return O(this, ca, hI).call(this, e, A) || O(this, aa, lI).call(this, e, A);
}, aa = new WeakSet(), lI = function(e, A) {
  const r = Fg(e), s = this.newChild(e.name, r, { parent: this }), n = l(s, ce) & it;
  return n !== Ft && n !== $r && n !== ot && b(s, ce, l(s, ce) | jn), A.unshift(s), A.provisional++, s;
}, ca = new WeakSet(), hI = function(e, A) {
  for (let r = A.provisional; r < A.length; r++) {
    const s = A[r];
    if ((this.nocase ? No(e.name) : Zn(e.name)) === l(s, Fr))
      return O(this, ga, EI).call(this, e, s, r, A);
  }
}, ga = new WeakSet(), EI = function(e, A, r, s) {
  const n = A.name;
  return b(A, ce, l(A, ce) & Jn | Fg(e)), n !== e.name && (A.name = e.name), r !== s.provisional && (r === s.length - 1 ? s.pop() : s.splice(r, 1), s.unshift(A)), s.provisional++, A;
}, Ti = new WeakSet(), ol = function(e) {
  const { atime: A, atimeMs: r, birthtime: s, birthtimeMs: n, blksize: i, blocks: a, ctime: o, ctimeMs: c, dev: g, gid: h, ino: E, mode: Q, mtime: C, mtimeMs: u, nlink: B, rdev: I, size: d, uid: w } = e;
  b(this, yi, A), b(this, fi, r), b(this, bi, s), b(this, mi, n), b(this, Ci, i), b(this, di, a), b(this, Di, o), b(this, wi, c), b(this, gi, g), b(this, ui, h), b(this, Bi, E), b(this, li, Q), b(this, Ri, C), b(this, pi, u), b(this, hi, B), b(this, Qi, I), b(this, Ii, d), b(this, Ei, w);
  const m = Fg(e);
  b(this, ce, l(this, ce) & Jn | m | Nu), m !== ot && m !== Ft && m !== $r && b(this, ce, l(this, ce) | jn);
}, zs = new WeakMap(), Xs = new WeakMap(), la = new WeakSet(), uI = function(e) {
  b(this, Xs, !1);
  const A = l(this, zs).slice();
  l(this, zs).length = 0, A.forEach((r) => r(null, e));
}, hs = new WeakMap();
class Fa extends VA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = ot, s, n, i, a, o) {
    super(A, r, s, n, i, a, o);
    /**
     * Separator for generating path strings.
     */
    L(this, "sep", "\\");
    /**
     * Separator for parsing path strings.
     */
    L(this, "splitSep", ob);
  }
  /**
   * @internal
   */
  newChild(A, r = ot, s = {}) {
    return new Fa(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
  /**
   * @internal
   */
  getRootString(A) {
    return Tg.parse(A).root;
  }
  /**
   * @internal
   */
  getRoot(A) {
    if (A = ib(A.toUpperCase()), A === this.root.name)
      return this.root;
    for (const [r, s] of Object.entries(this.roots))
      if (this.sameRoot(A, r))
        return this.roots[A] = s;
    return this.roots[A] = new Gl(A, this).root;
  }
  /**
   * @internal
   */
  sameRoot(A, r = this.root.name) {
    return A = A.toUpperCase().replace(/\//g, "\\").replace(sI, "$1\\"), A === r;
  }
}
class Na extends VA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = ot, s, n, i, a, o) {
    super(A, r, s, n, i, a, o);
    /**
     * separator for parsing path strings
     */
    L(this, "splitSep", "/");
    /**
     * separator for generating path strings
     */
    L(this, "sep", "/");
  }
  /**
   * @internal
   */
  getRootString(A) {
    return A.startsWith("/") ? "/" : "";
  }
  /**
   * @internal
   */
  getRoot(A) {
    return this.root;
  }
  /**
   * @internal
   */
  newChild(A, r = ot, s = {}) {
    return new Na(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
}
var $s, Ks, vi, Li;
class QI {
  /**
   * This class should not be instantiated directly.
   *
   * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
   *
   * @internal
   */
  constructor(e = process.cwd(), A, r, { nocase: s, childrenCacheSize: n = 16 * 1024, fs: i = qn } = {}) {
    /**
     * The root Path entry for the current working directory of this Scurry
     */
    L(this, "root");
    /**
     * The string path for the root of this Scurry's current working directory
     */
    L(this, "rootPath");
    /**
     * A collection of all roots encountered, referenced by rootPath
     */
    L(this, "roots");
    /**
     * The Path entry corresponding to this PathScurry's current working directory.
     */
    L(this, "cwd");
    N(this, $s, void 0);
    N(this, Ks, void 0);
    N(this, vi, void 0);
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    L(this, "nocase");
    N(this, Li, void 0);
    b(this, Li, rI(i)), (e instanceof URL || e.startsWith("file://")) && (e = oQ(e));
    const a = A.resolve(e);
    this.roots = /* @__PURE__ */ Object.create(null), this.rootPath = this.parseRootPath(a), b(this, $s, new Lu()), b(this, Ks, new Lu()), b(this, vi, new cb(n));
    const o = a.substring(this.rootPath.length).split(r);
    if (o.length === 1 && !o[0] && o.pop(), s === void 0)
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    this.nocase = s, this.root = this.newRoot(l(this, Li)), this.roots[this.rootPath] = this.root;
    let c = this.root, g = o.length - 1;
    const h = A.sep;
    let E = this.rootPath, Q = !1;
    for (const C of o) {
      const u = g--;
      c = c.child(C, {
        relative: new Array(u).fill("..").join(h),
        relativePosix: new Array(u).fill("..").join("/"),
        fullpath: E += (Q ? "" : h) + C
      }), Q = !0;
    }
    this.cwd = c;
  }
  /**
   * Get the depth of a provided path, string, or the cwd
   */
  depth(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), e.depth();
  }
  /**
   * Return the cache of child entries.  Exposed so subclasses can create
   * child Path objects in a platform-specific way.
   *
   * @internal
   */
  childrenCache() {
    return l(this, vi);
  }
  /**
   * Resolve one or more path strings to a resolved string
   *
   * Same interface as require('path').resolve.
   *
   * Much faster than path.resolve() when called multiple times for the same
   * path, because the resolved Path objects are cached.  Much slower
   * otherwise.
   */
  resolve(...e) {
    let A = "";
    for (let n = e.length - 1; n >= 0; n--) {
      const i = e[n];
      if (!(!i || i === ".") && (A = A ? `${i}/${A}` : i, this.isAbsolute(i)))
        break;
    }
    const r = l(this, $s).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpath();
    return l(this, $s).set(A, s), s;
  }
  /**
   * Resolve one or more path strings to a resolved string, returning
   * the posix path.  Identical to .resolve() on posix systems, but on
   * windows will return a forward-slash separated UNC path.
   *
   * Same interface as require('path').resolve.
   *
   * Much faster than path.resolve() when called multiple times for the same
   * path, because the resolved Path objects are cached.  Much slower
   * otherwise.
   */
  resolvePosix(...e) {
    let A = "";
    for (let n = e.length - 1; n >= 0; n--) {
      const i = e[n];
      if (!(!i || i === ".") && (A = A ? `${i}/${A}` : i, this.isAbsolute(i)))
        break;
    }
    const r = l(this, Ks).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpathPosix();
    return l(this, Ks).set(A, s), s;
  }
  /**
   * find the relative path from the cwd to the supplied path string or entry
   */
  relative(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), e.relative();
  }
  /**
   * find the relative path from the cwd to the supplied path string or
   * entry, using / as the path delimiter, even on Windows.
   */
  relativePosix(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), e.relativePosix();
  }
  /**
   * Return the basename for the provided string or Path object
   */
  basename(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), e.name;
  }
  /**
   * Return the dirname for the provided string or Path object
   */
  dirname(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), (e.parent || e).fullpath();
  }
  async readdir(e = this.cwd, A = {
    withFileTypes: !0
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r } = A;
    if (e.canReaddir()) {
      const s = await e.readdir();
      return r ? s : s.map((n) => n.name);
    } else
      return [];
  }
  readdirSync(e = this.cwd, A = {
    withFileTypes: !0
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0 } = A;
    return e.canReaddir() ? r ? e.readdirSync() : e.readdirSync().map((s) => s.name) : [];
  }
  /**
   * Call lstat() on the string or Path object, and update all known
   * information that can be determined.
   *
   * Note that unlike `fs.lstat()`, the returned value does not contain some
   * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
   * information is required, you will need to call `fs.lstat` yourself.
   *
   * If the Path refers to a nonexistent file, or if the lstat call fails for
   * any reason, `undefined` is returned.  Otherwise the updated Path object is
   * returned.
   *
   * Results are cached, and thus may be out of date if the filesystem is
   * mutated.
   */
  async lstat(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), e.lstat();
  }
  /**
   * synchronous {@link PathScurryBase.lstat}
   */
  lstatSync(e = this.cwd) {
    return typeof e == "string" && (e = this.cwd.resolve(e)), e.lstatSync();
  }
  async readlink(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e.withFileTypes, e = this.cwd);
    const r = await e.readlink();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  readlinkSync(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e.withFileTypes, e = this.cwd);
    const r = e.readlinkSync();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  async realpath(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e.withFileTypes, e = this.cwd);
    const r = await e.realpath();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  realpathSync(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e.withFileTypes, e = this.cwd);
    const r = e.realpathSync();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  async walk(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = [];
    (!n || n(e)) && a.push(r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set(), c = (h, E) => {
      o.add(h), h.readdirCB((Q, C) => {
        if (Q)
          return E(Q);
        let u = C.length;
        if (!u)
          return E();
        const B = () => {
          --u === 0 && E();
        };
        for (const I of C)
          (!n || n(I)) && a.push(r ? I : I.fullpath()), s && I.isSymbolicLink() ? I.realpath().then((d) => d != null && d.isUnknown() ? d.lstat() : d).then((d) => d != null && d.shouldWalk(o, i) ? c(d, B) : B()) : I.shouldWalk(o, i) ? c(I, B) : B();
      }, !0);
    }, g = e;
    return new Promise((h, E) => {
      c(g, (Q) => {
        if (Q)
          return E(Q);
        h(a);
      });
    });
  }
  walkSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = [];
    (!n || n(e)) && a.push(r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set([e]);
    for (const c of o) {
      const g = c.readdirSync();
      for (const h of g) {
        (!n || n(h)) && a.push(r ? h : h.fullpath());
        let E = h;
        if (h.isSymbolicLink()) {
          if (!(s && (E = h.realpathSync())))
            continue;
          E.isUnknown() && E.lstatSync();
        }
        E.shouldWalk(o, i) && o.add(E);
      }
    }
    return a;
  }
  /**
   * Support for `for await`
   *
   * Alias for {@link PathScurryBase.iterate}
   *
   * Note: As of Node 19, this is very slow, compared to other methods of
   * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
   * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
   */
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
  iterate(e = this.cwd, A = {}) {
    return typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd), this.stream(e, A)[Symbol.asyncIterator]();
  }
  /**
   * Iterating over a PathScurry performs a synchronous walk.
   *
   * Alias for {@link PathScurryBase.iterateSync}
   */
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  *iterateSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A;
    (!n || n(e)) && (yield r ? e : e.fullpath());
    const a = /* @__PURE__ */ new Set([e]);
    for (const o of a) {
      const c = o.readdirSync();
      for (const g of c) {
        (!n || n(g)) && (yield r ? g : g.fullpath());
        let h = g;
        if (g.isSymbolicLink()) {
          if (!(s && (h = g.realpathSync())))
            continue;
          h.isUnknown() && h.lstatSync();
        }
        h.shouldWalk(a, i) && a.add(h);
      }
    }
  }
  stream(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = new ta({ objectMode: !0 });
    (!n || n(e)) && a.write(r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set(), c = [e];
    let g = 0;
    const h = () => {
      let E = !1;
      for (; !E; ) {
        const Q = c.shift();
        if (!Q) {
          g === 0 && a.end();
          return;
        }
        g++, o.add(Q);
        const C = (B, I, d = !1) => {
          if (B)
            return a.emit("error", B);
          if (s && !d) {
            const w = [];
            for (const m of I)
              m.isSymbolicLink() && w.push(m.realpath().then((p) => p != null && p.isUnknown() ? p.lstat() : p));
            if (w.length) {
              Promise.all(w).then(() => C(null, I, !0));
              return;
            }
          }
          for (const w of I)
            w && (!n || n(w)) && (a.write(r ? w : w.fullpath()) || (E = !0));
          g--;
          for (const w of I) {
            const m = w.realpathCached() || w;
            m.shouldWalk(o, i) && c.push(m);
          }
          E && !a.flowing ? a.once("drain", h) : u || h();
        };
        let u = !0;
        Q.readdirCB(C, !0), u = !1;
      }
    };
    return h(), a;
  }
  streamSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof VA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = new ta({ objectMode: !0 }), o = /* @__PURE__ */ new Set();
    (!n || n(e)) && a.write(r ? e : e.fullpath());
    const c = [e];
    let g = 0;
    const h = () => {
      let E = !1;
      for (; !E; ) {
        const Q = c.shift();
        if (!Q) {
          g === 0 && a.end();
          return;
        }
        g++, o.add(Q);
        const C = Q.readdirSync();
        for (const u of C)
          (!n || n(u)) && (a.write(r ? u : u.fullpath()) || (E = !0));
        g--;
        for (const u of C) {
          let B = u;
          if (u.isSymbolicLink()) {
            if (!(s && (B = u.realpathSync())))
              continue;
            B.isUnknown() && B.lstatSync();
          }
          B.shouldWalk(o, i) && c.push(B);
        }
      }
      E && !a.flowing && a.once("drain", h);
    };
    return h(), a;
  }
  chdir(e = this.cwd) {
    const A = this.cwd;
    this.cwd = typeof e == "string" ? this.cwd.resolve(e) : e, this.cwd[gI](A);
  }
}
$s = new WeakMap(), Ks = new WeakMap(), vi = new WeakMap(), Li = new WeakMap();
class Gl extends QI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !0 } = r;
    super(A, Tg, "\\", { ...r, nocase: s });
    /**
     * separator for generating path strings
     */
    L(this, "sep", "\\");
    this.nocase = s;
    for (let n = this.cwd; n; n = n.parent)
      n.nocase = this.nocase;
  }
  /**
   * @internal
   */
  parseRootPath(A) {
    return Tg.parse(A).root.toUpperCase();
  }
  /**
   * @internal
   */
  newRoot(A) {
    return new Fa(this.rootPath, Ft, void 0, this.roots, this.nocase, this.childrenCache(), { fs: A });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(A) {
    return A.startsWith("/") || A.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(A);
  }
}
class Yl extends QI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !1 } = r;
    super(A, KI, "/", { ...r, nocase: s });
    /**
     * separator for generating path strings
     */
    L(this, "sep", "/");
    this.nocase = s;
  }
  /**
   * @internal
   */
  parseRootPath(A) {
    return "/";
  }
  /**
   * @internal
   */
  newRoot(A) {
    return new Na(this.rootPath, Ft, void 0, this.roots, this.nocase, this.childrenCache(), { fs: A });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(A) {
    return A.startsWith("/");
  }
}
class CI extends Yl {
  constructor(e = process.cwd(), A = {}) {
    const { nocase: r = !0 } = A;
    super(e, { ...A, nocase: r });
  }
}
process.platform;
const gb = process.platform === "win32" ? Gl : process.platform === "darwin" ? CI : Yl, lb = (t) => t.length >= 1, hb = (t) => t.length >= 1;
var iA, $A, uA, Es, mt, Mi, Nr, Ur, Tr, en;
const Wl = class Wl {
  constructor(e, A, r, s) {
    N(this, iA, void 0);
    N(this, $A, void 0);
    N(this, uA, void 0);
    L(this, "length");
    N(this, Es, void 0);
    N(this, mt, void 0);
    N(this, Mi, void 0);
    N(this, Nr, void 0);
    N(this, Ur, void 0);
    N(this, Tr, void 0);
    N(this, en, !0);
    if (!lb(e))
      throw new TypeError("empty pattern list");
    if (!hb(A))
      throw new TypeError("empty glob list");
    if (A.length !== e.length)
      throw new TypeError("mismatched pattern list and glob list lengths");
    if (this.length = e.length, r < 0 || r >= this.length)
      throw new TypeError("index out of range");
    if (b(this, iA, e), b(this, $A, A), b(this, uA, r), b(this, Es, s), l(this, uA) === 0) {
      if (this.isUNC()) {
        const [n, i, a, o, ...c] = l(this, iA), [g, h, E, Q, ...C] = l(this, $A);
        c[0] === "" && (c.shift(), C.shift());
        const u = [n, i, a, o, ""].join("/"), B = [g, h, E, Q, ""].join("/");
        b(this, iA, [u, ...c]), b(this, $A, [B, ...C]), this.length = l(this, iA).length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [n, ...i] = l(this, iA), [a, ...o] = l(this, $A);
        i[0] === "" && (i.shift(), o.shift());
        const c = n + "/", g = a + "/";
        b(this, iA, [c, ...i]), b(this, $A, [g, ...o]), this.length = l(this, iA).length;
      }
    }
  }
  /**
   * The first entry in the parsed list of patterns
   */
  pattern() {
    return l(this, iA)[l(this, uA)];
  }
  /**
   * true of if pattern() returns a string
   */
  isString() {
    return typeof l(this, iA)[l(this, uA)] == "string";
  }
  /**
   * true of if pattern() returns GLOBSTAR
   */
  isGlobstar() {
    return l(this, iA)[l(this, uA)] === JA;
  }
  /**
   * true if pattern() returns a regexp
   */
  isRegExp() {
    return l(this, iA)[l(this, uA)] instanceof RegExp;
  }
  /**
   * The /-joined set of glob parts that make up this pattern
   */
  globString() {
    return b(this, Mi, l(this, Mi) || (l(this, uA) === 0 ? this.isAbsolute() ? l(this, $A)[0] + l(this, $A).slice(1).join("/") : l(this, $A).join("/") : l(this, $A).slice(l(this, uA)).join("/")));
  }
  /**
   * true if there are more pattern parts after this one
   */
  hasMore() {
    return this.length > l(this, uA) + 1;
  }
  /**
   * The rest of the pattern after this part, or null if this is the end
   */
  rest() {
    return l(this, mt) !== void 0 ? l(this, mt) : this.hasMore() ? (b(this, mt, new Wl(l(this, iA), l(this, $A), l(this, uA) + 1, l(this, Es))), b(l(this, mt), Tr, l(this, Tr)), b(l(this, mt), Ur, l(this, Ur)), b(l(this, mt), Nr, l(this, Nr)), l(this, mt)) : b(this, mt, null);
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    const e = l(this, iA);
    return l(this, Ur) !== void 0 ? l(this, Ur) : b(this, Ur, l(this, Es) === "win32" && l(this, uA) === 0 && e[0] === "" && e[1] === "" && typeof e[2] == "string" && !!e[2] && typeof e[3] == "string" && !!e[3]);
  }
  // pattern like C:/...
  // split = ['C:', ...]
  // XXX: would be nice to handle patterns like `c:*` to test the cwd
  // in c: for *, but I don't know of a way to even figure out what that
  // cwd is without actually chdir'ing into it?
  /**
   * True if the pattern starts with a drive letter on Windows
   */
  isDrive() {
    const e = l(this, iA);
    return l(this, Nr) !== void 0 ? l(this, Nr) : b(this, Nr, l(this, Es) === "win32" && l(this, uA) === 0 && this.length > 1 && typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]));
  }
  // pattern = '/' or '/...' or '/x/...'
  // split = ['', ''] or ['', ...] or ['', 'x', ...]
  // Drive and UNC both considered absolute on windows
  /**
   * True if the pattern is rooted on an absolute path
   */
  isAbsolute() {
    const e = l(this, iA);
    return l(this, Tr) !== void 0 ? l(this, Tr) : b(this, Tr, e[0] === "" && e.length > 1 || this.isDrive() || this.isUNC());
  }
  /**
   * consume the root of the pattern, and return it
   */
  root() {
    const e = l(this, iA)[0];
    return typeof e == "string" && this.isAbsolute() && l(this, uA) === 0 ? e : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(l(this, uA) === 0 || !this.isGlobstar() || !l(this, en));
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    return l(this, uA) === 0 || !this.isGlobstar() || !l(this, en) ? !1 : (b(this, en, !1), !0);
  }
};
iA = new WeakMap(), $A = new WeakMap(), uA = new WeakMap(), Es = new WeakMap(), mt = new WeakMap(), Mi = new WeakMap(), Nr = new WeakMap(), Ur = new WeakMap(), Tr = new WeakMap(), en = new WeakMap();
let ra = Wl;
const Eb = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class Mu {
  constructor(e, { nobrace: A, nocase: r, noext: s, noglobstar: n, platform: i = Eb }) {
    L(this, "relative");
    L(this, "relativeChildren");
    L(this, "absolute");
    L(this, "absoluteChildren");
    this.relative = [], this.absolute = [], this.relativeChildren = [], this.absoluteChildren = [];
    const a = {
      dot: !0,
      nobrace: A,
      nocase: r,
      noext: s,
      noglobstar: n,
      optimizationLevel: 2,
      platform: i,
      nocomment: !0,
      nonegate: !0
    };
    for (const o of e) {
      const c = new _r(o, a);
      for (let g = 0; g < c.set.length; g++) {
        const h = c.set[g], E = c.globParts[g];
        if (!h || !E)
          throw new Error("invalid pattern object");
        const Q = new ra(h, E, 0, i), C = new _r(Q.globString(), a), u = E[E.length - 1] === "**", B = Q.isAbsolute();
        B ? this.absolute.push(C) : this.relative.push(C), u && (B ? this.absoluteChildren.push(C) : this.relativeChildren.push(C));
      }
    }
  }
  ignored(e) {
    const A = e.fullpath(), r = `${A}/`, s = e.relative() || ".", n = `${s}/`;
    for (const i of this.relative)
      if (i.match(s) || i.match(n))
        return !0;
    for (const i of this.absolute)
      if (i.match(A) || i.match(r))
        return !0;
    return !1;
  }
  childrenIgnored(e) {
    const A = e.fullpath() + "/", r = (e.relative() || ".") + "/";
    for (const s of this.relativeChildren)
      if (s.match(r))
        return !0;
    for (const s of this.absoluteChildren)
      if (s.match(A))
        return !0;
    return !1;
  }
}
class Jl {
  constructor(e = /* @__PURE__ */ new Map()) {
    L(this, "store");
    this.store = e;
  }
  copy() {
    return new Jl(new Map(this.store));
  }
  hasWalked(e, A) {
    var r;
    return (r = this.store.get(e.fullpath())) == null ? void 0 : r.has(A.globString());
  }
  storeWalked(e, A) {
    const r = e.fullpath(), s = this.store.get(r);
    s ? s.add(A.globString()) : this.store.set(r, /* @__PURE__ */ new Set([A.globString()]));
  }
}
class ub {
  constructor() {
    L(this, "store", /* @__PURE__ */ new Map());
  }
  add(e, A, r) {
    const s = (A ? 2 : 0) | (r ? 1 : 0), n = this.store.get(e);
    this.store.set(e, n === void 0 ? s : s & n);
  }
  // match, absolute, ifdir
  entries() {
    return [...this.store.entries()].map(([e, A]) => [
      e,
      !!(A & 2),
      !!(A & 1)
    ]);
  }
}
class Qb {
  constructor() {
    L(this, "store", /* @__PURE__ */ new Map());
  }
  add(e, A) {
    if (!e.canReaddir())
      return;
    const r = this.store.get(e);
    r ? r.find((s) => s.globString() === A.globString()) || r.push(A) : this.store.set(e, [A]);
  }
  get(e) {
    const A = this.store.get(e);
    if (!A)
      throw new Error("attempting to walk unknown path");
    return A;
  }
  entries() {
    return this.keys().map((e) => [e, this.store.get(e)]);
  }
  keys() {
    return [...this.store.keys()].filter((e) => e.canReaddir());
  }
}
class sa {
  constructor(e, A) {
    L(this, "hasWalkedCache");
    L(this, "matches", new ub());
    L(this, "subwalks", new Qb());
    L(this, "patterns");
    L(this, "follow");
    L(this, "dot");
    L(this, "opts");
    this.opts = e, this.follow = !!e.follow, this.dot = !!e.dot, this.hasWalkedCache = A ? A.copy() : new Jl();
  }
  processPatterns(e, A) {
    this.patterns = A;
    const r = A.map((s) => [e, s]);
    for (let [s, n] of r) {
      this.hasWalkedCache.storeWalked(s, n);
      const i = n.root(), a = n.isAbsolute() && this.opts.absolute !== !1;
      if (i) {
        s = s.resolve(i === "/" && this.opts.root !== void 0 ? this.opts.root : i);
        const h = n.rest();
        if (h)
          n = h;
        else {
          this.matches.add(s, !0, !1);
          continue;
        }
      }
      if (s.isENOENT())
        continue;
      let o, c, g = !1;
      for (; typeof (o = n.pattern()) == "string" && (c = n.rest()); )
        s = s.resolve(o), n = c, g = !0;
      if (o = n.pattern(), c = n.rest(), g) {
        if (this.hasWalkedCache.hasWalked(s, n))
          continue;
        this.hasWalkedCache.storeWalked(s, n);
      }
      if (typeof o == "string") {
        const h = o === ".." || o === "" || o === ".";
        this.matches.add(s.resolve(o), a, h);
        continue;
      } else if (o === JA) {
        (!s.isSymbolicLink() || this.follow || n.checkFollowGlobstar()) && this.subwalks.add(s, n);
        const h = c == null ? void 0 : c.pattern(), E = c == null ? void 0 : c.rest();
        if (!c || (h === "" || h === ".") && !E)
          this.matches.add(s, a, h === "" || h === ".");
        else if (h === "..") {
          const Q = s.parent || s;
          E ? this.hasWalkedCache.hasWalked(Q, E) || this.subwalks.add(Q, E) : this.matches.add(Q, a, !0);
        }
      } else
        o instanceof RegExp && this.subwalks.add(s, n);
    }
    return this;
  }
  subwalkTargets() {
    return this.subwalks.keys();
  }
  child() {
    return new sa(this.opts, this.hasWalkedCache);
  }
  // return a new Processor containing the subwalks for each
  // child entry, and a set of matches, and
  // a hasWalkedCache that's a copy of this one
  // then we're going to call
  filterEntries(e, A) {
    const r = this.subwalks.get(e), s = this.child();
    for (const n of A)
      for (const i of r) {
        const a = i.isAbsolute(), o = i.pattern(), c = i.rest();
        o === JA ? s.testGlobstar(n, i, c, a) : o instanceof RegExp ? s.testRegExp(n, o, c, a) : s.testString(n, o, c, a);
      }
    return s;
  }
  testGlobstar(e, A, r, s) {
    if ((this.dot || !e.name.startsWith(".")) && (A.hasMore() || this.matches.add(e, s, !1), e.canReaddir() && (this.follow || !e.isSymbolicLink() ? this.subwalks.add(e, A) : e.isSymbolicLink() && (r && A.checkFollowGlobstar() ? this.subwalks.add(e, r) : A.markFollowGlobstar() && this.subwalks.add(e, A)))), r) {
      const n = r.pattern();
      if (typeof n == "string" && // dots and empty were handled already
      n !== ".." && n !== "" && n !== ".")
        this.testString(e, n, r.rest(), s);
      else if (n === "..") {
        const i = e.parent || e;
        this.subwalks.add(i, r);
      } else
        n instanceof RegExp && this.testRegExp(e, n, r.rest(), s);
    }
  }
  testRegExp(e, A, r, s) {
    A.test(e.name) && (r ? this.subwalks.add(e, r) : this.matches.add(e, s, !1));
  }
  testString(e, A, r, s) {
    e.isNamed(A) && (r ? this.subwalks.add(e, r) : this.matches.add(e, s, !1));
  }
}
const Cb = (t, e) => typeof t == "string" ? new Mu([t], e) : Array.isArray(t) ? new Mu(t, e) : t;
var An, tn, us, ir, Kr, Gi, al;
class BI {
  constructor(e, A, r) {
    N(this, ir);
    N(this, Gi);
    L(this, "path");
    L(this, "patterns");
    L(this, "opts");
    L(this, "seen", /* @__PURE__ */ new Set());
    L(this, "paused", !1);
    L(this, "aborted", !1);
    N(this, An, []);
    N(this, tn, void 0);
    N(this, us, void 0);
    L(this, "signal");
    L(this, "maxDepth");
    this.patterns = e, this.path = A, this.opts = r, b(this, us, !r.posix && r.platform === "win32" ? "\\" : "/"), r.ignore && b(this, tn, Cb(r.ignore, r)), this.maxDepth = r.maxDepth || 1 / 0, r.signal && (this.signal = r.signal, this.signal.addEventListener("abort", () => {
      l(this, An).length = 0;
    }));
  }
  // backpressure mechanism
  pause() {
    this.paused = !0;
  }
  resume() {
    var A;
    if ((A = this.signal) != null && A.aborted)
      return;
    this.paused = !1;
    let e;
    for (; !this.paused && (e = l(this, An).shift()); )
      e();
  }
  onResume(e) {
    var A;
    (A = this.signal) != null && A.aborted || (this.paused ? l(this, An).push(e) : e());
  }
  // do the requisite realpath/stat checking, and return the path
  // to add or undefined to filter it out.
  async matchCheck(e, A) {
    if (A && this.opts.nodir)
      return;
    let r;
    if (this.opts.realpath) {
      if (r = e.realpathCached() || await e.realpath(), !r)
        return;
      e = r;
    }
    const s = e.isUnknown() || this.opts.stat;
    return this.matchCheckTest(s ? await e.lstat() : e, A);
  }
  matchCheckTest(e, A) {
    return e && (this.maxDepth === 1 / 0 || e.depth() <= this.maxDepth) && (!A || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !O(this, ir, Kr).call(this, e) ? e : void 0;
  }
  matchCheckSync(e, A) {
    if (A && this.opts.nodir)
      return;
    let r;
    if (this.opts.realpath) {
      if (r = e.realpathCached() || e.realpathSync(), !r)
        return;
      e = r;
    }
    const s = e.isUnknown() || this.opts.stat;
    return this.matchCheckTest(s ? e.lstatSync() : e, A);
  }
  matchFinish(e, A) {
    if (O(this, ir, Kr).call(this, e))
      return;
    const r = this.opts.absolute === void 0 ? A : this.opts.absolute;
    this.seen.add(e);
    const s = this.opts.mark && e.isDirectory() ? l(this, us) : "";
    if (this.opts.withFileTypes)
      this.matchEmit(e);
    else if (r) {
      const n = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(n + s);
    } else {
      const n = this.opts.posix ? e.relativePosix() : e.relative(), i = this.opts.dotRelative && !n.startsWith(".." + l(this, us)) ? "." + l(this, us) : "";
      this.matchEmit(n ? i + n + s : "." + s);
    }
  }
  async match(e, A, r) {
    const s = await this.matchCheck(e, r);
    s && this.matchFinish(s, A);
  }
  matchSync(e, A, r) {
    const s = this.matchCheckSync(e, r);
    s && this.matchFinish(s, A);
  }
  walkCB(e, A, r) {
    var s;
    (s = this.signal) != null && s.aborted && r(), this.walkCB2(e, A, new sa(this.opts), r);
  }
  walkCB2(e, A, r, s) {
    var a;
    if (O(this, Gi, al).call(this, e))
      return s();
    if ((a = this.signal) != null && a.aborted && s(), this.paused) {
      this.onResume(() => this.walkCB2(e, A, r, s));
      return;
    }
    r.processPatterns(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [o, c, g] of r.matches.entries())
      O(this, ir, Kr).call(this, o) || (n++, this.match(o, c, g).then(() => i()));
    for (const o of r.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && o.depth() >= this.maxDepth)
        continue;
      n++;
      const c = o.readdirCached();
      o.calledReaddir() ? this.walkCB3(o, c, r, i) : o.readdirCB((g, h) => this.walkCB3(o, h, r, i), !0);
    }
    i();
  }
  walkCB3(e, A, r, s) {
    r = r.filterEntries(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [a, o, c] of r.matches.entries())
      O(this, ir, Kr).call(this, a) || (n++, this.match(a, o, c).then(() => i()));
    for (const [a, o] of r.subwalks.entries())
      n++, this.walkCB2(a, o, r.child(), i);
    i();
  }
  walkCBSync(e, A, r) {
    var s;
    (s = this.signal) != null && s.aborted && r(), this.walkCB2Sync(e, A, new sa(this.opts), r);
  }
  walkCB2Sync(e, A, r, s) {
    var a;
    if (O(this, Gi, al).call(this, e))
      return s();
    if ((a = this.signal) != null && a.aborted && s(), this.paused) {
      this.onResume(() => this.walkCB2Sync(e, A, r, s));
      return;
    }
    r.processPatterns(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [o, c, g] of r.matches.entries())
      O(this, ir, Kr).call(this, o) || this.matchSync(o, c, g);
    for (const o of r.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && o.depth() >= this.maxDepth)
        continue;
      n++;
      const c = o.readdirSync();
      this.walkCB3Sync(o, c, r, i);
    }
    i();
  }
  walkCB3Sync(e, A, r, s) {
    r = r.filterEntries(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [a, o, c] of r.matches.entries())
      O(this, ir, Kr).call(this, a) || this.matchSync(a, o, c);
    for (const [a, o] of r.subwalks.entries())
      n++, this.walkCB2Sync(a, o, r.child(), i);
    i();
  }
}
An = new WeakMap(), tn = new WeakMap(), us = new WeakMap(), ir = new WeakSet(), Kr = function(e) {
  var A, r;
  return this.seen.has(e) || !!((r = (A = l(this, tn)) == null ? void 0 : A.ignored) != null && r.call(A, e));
}, Gi = new WeakSet(), al = function(e) {
  var A, r;
  return !!((r = (A = l(this, tn)) == null ? void 0 : A.childrenIgnored) != null && r.call(A, e));
};
class Gu extends BI {
  constructor(A, r, s) {
    super(A, r, s);
    L(this, "matches");
    this.matches = /* @__PURE__ */ new Set();
  }
  matchEmit(A) {
    this.matches.add(A);
  }
  async walk() {
    var A;
    if ((A = this.signal) != null && A.aborted)
      throw this.signal.reason;
    return this.path.isUnknown() && await this.path.lstat(), await new Promise((r, s) => {
      this.walkCB(this.path, this.patterns, () => {
        var n;
        (n = this.signal) != null && n.aborted ? s(this.signal.reason) : r(this.matches);
      });
    }), this.matches;
  }
  walkSync() {
    var A;
    if ((A = this.signal) != null && A.aborted)
      throw this.signal.reason;
    return this.path.isUnknown() && this.path.lstatSync(), this.walkCBSync(this.path, this.patterns, () => {
      var r;
      if ((r = this.signal) != null && r.aborted)
        throw this.signal.reason;
    }), this.matches;
  }
}
class Yu extends BI {
  constructor(A, r, s) {
    super(A, r, s);
    L(this, "results");
    this.results = new ta({
      signal: this.signal,
      objectMode: !0
    }), this.results.on("drain", () => this.resume()), this.results.on("resume", () => this.resume());
  }
  matchEmit(A) {
    this.results.write(A), this.results.flowing || this.pause();
  }
  stream() {
    const A = this.path;
    return A.isUnknown() ? A.lstat().then(() => {
      this.walkCB(A, this.patterns, () => this.results.end());
    }) : this.walkCB(A, this.patterns, () => this.results.end()), this.results;
  }
  streamSync() {
    return this.path.isUnknown() && this.path.lstatSync(), this.walkCBSync(this.path, this.patterns, () => this.results.end()), this.results;
  }
}
const Bb = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class ps {
  /**
   * All options are stored as properties on the `Glob` object.
   *
   * See {@link GlobOptions} for full options descriptions.
   *
   * Note that a previous `Glob` object can be passed as the
   * `GlobOptions` to another `Glob` instantiation to re-use settings
   * and caches with a new pattern.
   *
   * Traversal functions can be called multiple times to run the walk
   * again.
   */
  constructor(e, A) {
    L(this, "absolute");
    L(this, "cwd");
    L(this, "root");
    L(this, "dot");
    L(this, "dotRelative");
    L(this, "follow");
    L(this, "ignore");
    L(this, "magicalBraces");
    L(this, "mark");
    L(this, "matchBase");
    L(this, "maxDepth");
    L(this, "nobrace");
    L(this, "nocase");
    L(this, "nodir");
    L(this, "noext");
    L(this, "noglobstar");
    L(this, "pattern");
    L(this, "platform");
    L(this, "realpath");
    L(this, "scurry");
    L(this, "stat");
    L(this, "signal");
    L(this, "windowsPathsNoEscape");
    L(this, "withFileTypes");
    /**
     * The options provided to the constructor.
     */
    L(this, "opts");
    /**
     * An array of parsed immutable {@link Pattern} objects.
     */
    L(this, "patterns");
    if (!A)
      throw new TypeError("glob options required");
    if (this.withFileTypes = !!A.withFileTypes, this.signal = A.signal, this.follow = !!A.follow, this.dot = !!A.dot, this.dotRelative = !!A.dotRelative, this.nodir = !!A.nodir, this.mark = !!A.mark, A.cwd ? (A.cwd instanceof URL || A.cwd.startsWith("file://")) && (A.cwd = oQ(A.cwd)) : this.cwd = "", this.cwd = A.cwd || "", this.root = A.root, this.magicalBraces = !!A.magicalBraces, this.nobrace = !!A.nobrace, this.noext = !!A.noext, this.realpath = !!A.realpath, this.absolute = A.absolute, this.noglobstar = !!A.noglobstar, this.matchBase = !!A.matchBase, this.maxDepth = typeof A.maxDepth == "number" ? A.maxDepth : 1 / 0, this.stat = !!A.stat, this.ignore = A.ignore, this.withFileTypes && this.absolute !== void 0)
      throw new Error("cannot set absolute and withFileTypes:true");
    if (typeof e == "string" && (e = [e]), this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (e = e.map((o) => o.replace(/\\/g, "/"))), this.matchBase) {
      if (A.noglobstar)
        throw new TypeError("base matching requires globstar");
      e = e.map((o) => o.includes("/") ? o : `./**/${o}`);
    }
    if (this.pattern = e, this.platform = A.platform || Bb, this.opts = { ...A, platform: this.platform }, A.scurry) {
      if (this.scurry = A.scurry, A.nocase !== void 0 && A.nocase !== A.scurry.nocase)
        throw new Error("nocase option contradicts provided scurry option");
    } else {
      const o = A.platform === "win32" ? Gl : A.platform === "darwin" ? CI : A.platform ? Yl : gb;
      this.scurry = new o(this.cwd, {
        nocase: A.nocase,
        fs: A.fs
      });
    }
    this.nocase = this.scurry.nocase;
    const r = this.platform === "darwin" || this.platform === "win32", s = {
      // default nocase based on platform
      ...A,
      dot: this.dot,
      matchBase: this.matchBase,
      nobrace: this.nobrace,
      nocase: this.nocase,
      nocaseMagicOnly: r,
      nocomment: !0,
      noext: this.noext,
      nonegate: !0,
      optimizationLevel: 2,
      platform: this.platform,
      windowsPathsNoEscape: this.windowsPathsNoEscape,
      debug: !!this.opts.debug
    }, n = this.pattern.map((o) => new _r(o, s)), [i, a] = n.reduce((o, c) => (o[0].push(...c.set), o[1].push(...c.globParts), o), [[], []]);
    this.patterns = i.map((o, c) => {
      const g = a[c];
      if (!g)
        throw new Error("invalid pattern object");
      return new ra(o, g, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new Gu(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new Gu(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new Yu(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new Yu(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).streamSync();
  }
  /**
   * Default sync iteration function. Returns a Generator that
   * iterates over the results.
   */
  iterateSync() {
    return this.streamSync()[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.iterateSync();
  }
  /**
   * Default async iteration function. Returns an AsyncGenerator that
   * iterates over the results.
   */
  iterate() {
    return this.stream()[Symbol.asyncIterator]();
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
}
const Ib = (t, e = {}) => {
  Array.isArray(t) || (t = [t]);
  for (const A of t)
    if (new _r(A, e).hasMagic())
      return !0;
  return !1;
};
function Ua(t, e = {}) {
  return new ps(t, e).streamSync();
}
function II(t, e = {}) {
  return new ps(t, e).stream();
}
function _l(t, e = {}) {
  return new ps(t, e).walkSync();
}
async function Ju(t, e = {}) {
  return new ps(t, e).walk();
}
function Ta(t, e = {}) {
  return new ps(t, e).iterateSync();
}
function dI(t, e = {}) {
  return new ps(t, e).iterate();
}
const db = Ua, fb = Object.assign(II, { sync: Ua }), pb = Ta, wb = Object.assign(dI, {
  sync: Ta
}), mb = Object.assign(_l, {
  stream: Ua,
  iterate: Ta
}), _u = Object.assign(Ju, {
  glob: Ju,
  globSync: _l,
  sync: mb,
  globStream: II,
  stream: fb,
  globStreamSync: Ua,
  streamSync: db,
  globIterate: dI,
  iterate: wb,
  globIterateSync: Ta,
  iterateSync: pb,
  Glob: ps,
  hasMagic: Ib,
  escape: qB,
  unescape: Gs
});
_u.glob = _u;
function va() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var La = { exports: {} }, yb = fI;
function fI(t, e, A, r) {
  if (typeof A != "function")
    throw new Error("method for before hook must be a function");
  return r || (r = {}), Array.isArray(e) ? e.reverse().reduce(function(s, n) {
    return fI.bind(null, t, n, s, r);
  }, A)() : Promise.resolve().then(function() {
    return t.registry[e] ? t.registry[e].reduce(function(s, n) {
      return n.hook.bind(null, s, r);
    }, A)() : A(r);
  });
}
var Rb = Db;
function Db(t, e, A, r) {
  var s = r;
  t.registry[A] || (t.registry[A] = []), e === "before" && (r = function(n, i) {
    return Promise.resolve().then(s.bind(null, i)).then(n.bind(null, i));
  }), e === "after" && (r = function(n, i) {
    var a;
    return Promise.resolve().then(n.bind(null, i)).then(function(o) {
      return a = o, s(a, i);
    }).then(function() {
      return a;
    });
  }), e === "error" && (r = function(n, i) {
    return Promise.resolve().then(n.bind(null, i)).catch(function(a) {
      return s(a, i);
    });
  }), t.registry[A].push({
    hook: r,
    orig: s
  });
}
var bb = kb;
function kb(t, e, A) {
  if (t.registry[e]) {
    var r = t.registry[e].map(function(s) {
      return s.orig;
    }).indexOf(A);
    r !== -1 && t.registry[e].splice(r, 1);
  }
}
var pI = yb, Sb = Rb, Fb = bb, Ou = Function.bind, Hu = Ou.bind(Ou);
function wI(t, e, A) {
  var r = Hu(Fb, null).apply(
    null,
    A ? [e, A] : [e]
  );
  t.api = { remove: r }, t.remove = r, ["before", "error", "after", "wrap"].forEach(function(s) {
    var n = A ? [e, s, A] : [e, s];
    t[s] = t.api[s] = Hu(Sb, null).apply(null, n);
  });
}
function Nb() {
  var t = "h", e = {
    registry: {}
  }, A = pI.bind(null, e, t);
  return wI(A, e, t), A;
}
function mI() {
  var t = {
    registry: {}
  }, e = pI.bind(null, t);
  return wI(e, t), e;
}
var Pu = !1;
function fn() {
  return Pu || (console.warn(
    '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
  ), Pu = !0), mI();
}
fn.Singular = Nb.bind();
fn.Collection = mI.bind();
La.exports = fn;
La.exports.Hook = fn;
La.exports.Singular = fn.Singular;
var Ub = La.exports.Collection = fn.Collection;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Vu(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function yI(t) {
  var e, A;
  return Vu(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (A = e.prototype, !(Vu(A) === !1 || A.hasOwnProperty("isPrototypeOf") === !1)));
}
var Tb = "9.0.2", vb = `octokit-endpoint.js/${Tb} ${va()}`, Lb = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": vb
  },
  mediaType: {
    format: ""
  }
};
function Mb(t) {
  return t ? Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {}) : {};
}
function RI(t, e) {
  const A = Object.assign({}, t);
  return Object.keys(e).forEach((r) => {
    yI(e[r]) ? r in t ? A[r] = RI(t[r], e[r]) : Object.assign(A, { [r]: e[r] }) : Object.assign(A, { [r]: e[r] });
  }), A;
}
function Wu(t) {
  for (const e in t)
    t[e] === void 0 && delete t[e];
  return t;
}
function cl(t, e, A) {
  var s;
  if (typeof e == "string") {
    let [n, i] = e.split(" ");
    A = Object.assign(i ? { method: n, url: i } : { url: n }, A);
  } else
    A = Object.assign({}, e);
  A.headers = Mb(A.headers), Wu(A), Wu(A.headers);
  const r = RI(t || {}, A);
  return A.url === "/graphql" && (t && ((s = t.mediaType.previews) != null && s.length) && (r.mediaType.previews = t.mediaType.previews.filter(
    (n) => !r.mediaType.previews.includes(n)
  ).concat(r.mediaType.previews)), r.mediaType.previews = (r.mediaType.previews || []).map((n) => n.replace(/-preview/, ""))), r;
}
function Gb(t, e) {
  const A = /\?/.test(t) ? "&" : "?", r = Object.keys(e);
  return r.length === 0 ? t : t + A + r.map((s) => s === "q" ? "q=" + e.q.split("+").map(encodeURIComponent).join("+") : `${s}=${encodeURIComponent(e[s])}`).join("&");
}
var Yb = /\{[^}]+\}/g;
function Jb(t) {
  return t.replace(/^\W+|\W+$/g, "").split(/,/);
}
function _b(t) {
  const e = t.match(Yb);
  return e ? e.map(Jb).reduce((A, r) => A.concat(r), []) : [];
}
function xu(t, e) {
  return Object.keys(t).filter((A) => !e.includes(A)).reduce((A, r) => (A[r] = t[r], A), {});
}
function DI(t) {
  return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e;
  }).join("");
}
function Ys(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function _n(t, e, A) {
  return e = t === "+" || t === "#" ? DI(e) : Ys(e), A ? Ys(A) + "=" + e : e;
}
function Us(t) {
  return t != null;
}
function Ng(t) {
  return t === ";" || t === "&" || t === "?";
}
function Ob(t, e, A, r) {
  var s = t[A], n = [];
  if (Us(s) && s !== "")
    if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
      s = s.toString(), r && r !== "*" && (s = s.substring(0, parseInt(r, 10))), n.push(
        _n(e, s, Ng(e) ? A : "")
      );
    else if (r === "*")
      Array.isArray(s) ? s.filter(Us).forEach(function(i) {
        n.push(
          _n(e, i, Ng(e) ? A : "")
        );
      }) : Object.keys(s).forEach(function(i) {
        Us(s[i]) && n.push(_n(e, s[i], i));
      });
    else {
      const i = [];
      Array.isArray(s) ? s.filter(Us).forEach(function(a) {
        i.push(_n(e, a));
      }) : Object.keys(s).forEach(function(a) {
        Us(s[a]) && (i.push(Ys(a)), i.push(_n(e, s[a].toString())));
      }), Ng(e) ? n.push(Ys(A) + "=" + i.join(",")) : i.length !== 0 && n.push(i.join(","));
    }
  else
    e === ";" ? Us(s) && n.push(Ys(A)) : s === "" && (e === "&" || e === "?") ? n.push(Ys(A) + "=") : s === "" && n.push("");
  return n;
}
function Hb(t) {
  return {
    expand: Pb.bind(null, t)
  };
}
function Pb(t, e) {
  var A = ["+", "#", ".", "/", ";", "?", "&"];
  return t = t.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(r, s, n) {
      if (s) {
        let a = "";
        const o = [];
        if (A.indexOf(s.charAt(0)) !== -1 && (a = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(c) {
          var g = /([^:\*]*)(?::(\d+)|(\*))?/.exec(c);
          o.push(Ob(e, a, g[1], g[2] || g[3]));
        }), a && a !== "+") {
          var i = ",";
          return a === "?" ? i = "&" : a !== "#" && (i = a), (o.length !== 0 ? a : "") + o.join(i);
        } else
          return o.join(",");
      } else
        return DI(n);
    }
  ), t === "/" ? t : t.replace(/\/$/, "");
}
function bI(t) {
  var g;
  let e = t.method.toUpperCase(), A = (t.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), r = Object.assign({}, t.headers), s, n = xu(t, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const i = _b(A);
  A = Hb(A).expand(n), /^http/.test(A) || (A = t.baseUrl + A);
  const a = Object.keys(t).filter((h) => i.includes(h)).concat("baseUrl"), o = xu(n, a);
  if (!/application\/octet-stream/i.test(r.accept) && (t.mediaType.format && (r.accept = r.accept.split(/,/).map(
    (h) => h.replace(
      /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
      `application/vnd$1$2.${t.mediaType.format}`
    )
  ).join(",")), A.endsWith("/graphql") && (g = t.mediaType.previews) != null && g.length)) {
    const h = r.accept.match(/[\w-]+(?=-preview)/g) || [];
    r.accept = h.concat(t.mediaType.previews).map((E) => {
      const Q = t.mediaType.format ? `.${t.mediaType.format}` : "+json";
      return `application/vnd.github.${E}-preview${Q}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(e) ? A = Gb(A, o) : "data" in o ? s = o.data : Object.keys(o).length && (s = o), !r["content-type"] && typeof s < "u" && (r["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(e) && typeof s > "u" && (s = ""), Object.assign(
    { method: e, url: A, headers: r },
    typeof s < "u" ? { body: s } : null,
    t.request ? { request: t.request } : null
  );
}
function Vb(t, e, A) {
  return bI(cl(t, e, A));
}
function kI(t, e) {
  const A = cl(t, e), r = Vb.bind(null, A);
  return Object.assign(r, {
    DEFAULTS: A,
    defaults: kI.bind(null, A),
    merge: cl.bind(null, A),
    parse: bI
  });
}
var Wb = kI(null, Lb);
class qu extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
  }
}
var Ol = { exports: {} }, xb = SI;
function SI(t, e) {
  if (t && e)
    return SI(t)(e);
  if (typeof t != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(t).forEach(function(r) {
    A[r] = t[r];
  }), A;
  function A() {
    for (var r = new Array(arguments.length), s = 0; s < r.length; s++)
      r[s] = arguments[s];
    var n = t.apply(this, r), i = r[r.length - 1];
    return typeof n == "function" && n !== i && Object.keys(i).forEach(function(a) {
      n[a] = i[a];
    }), n;
  }
}
var FI = xb;
Ol.exports = FI(Wo);
Ol.exports.strict = FI(NI);
Wo.proto = Wo(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return Wo(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return NI(this);
    },
    configurable: !0
  });
});
function Wo(t) {
  var e = function() {
    return e.called ? e.value : (e.called = !0, e.value = t.apply(this, arguments));
  };
  return e.called = !1, e;
}
function NI(t) {
  var e = function() {
    if (e.called)
      throw new Error(e.onceError);
    return e.called = !0, e.value = t.apply(this, arguments);
  }, A = t.name || "Function wrapped with `once`";
  return e.onceError = A + " shouldn't be called more than once", e.called = !1, e;
}
var qb = Ol.exports;
const UI = /* @__PURE__ */ ul(qb);
var jb = UI((t) => console.warn(t)), Zb = UI((t) => console.warn(t)), On = class extends Error {
  constructor(t, e, A) {
    super(t), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.status = e;
    let r;
    "headers" in A && typeof A.headers < "u" && (r = A.headers), "response" in A && (this.response = A.response, r = A.response.headers);
    const s = Object.assign({}, A.request);
    A.request.headers.authorization && (s.headers = Object.assign({}, A.request.headers, {
      authorization: A.request.headers.authorization.replace(
        / .*$/,
        " [REDACTED]"
      )
    })), s.url = s.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = s, Object.defineProperty(this, "code", {
      get() {
        return jb(
          new qu(
            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
          )
        ), e;
      }
    }), Object.defineProperty(this, "headers", {
      get() {
        return Zb(
          new qu(
            "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
          )
        ), r || {};
      }
    });
  }
}, zb = "8.1.4";
function Xb(t) {
  return t.arrayBuffer();
}
function ju(t) {
  var a, o, c;
  const e = t.request && t.request.log ? t.request.log : console, A = ((a = t.request) == null ? void 0 : a.parseSuccessResponseBody) !== !1;
  (yI(t.body) || Array.isArray(t.body)) && (t.body = JSON.stringify(t.body));
  let r = {}, s, n, { fetch: i } = globalThis;
  if ((o = t.request) != null && o.fetch && (i = t.request.fetch), !i)
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  return i(t.url, {
    method: t.method,
    body: t.body,
    headers: t.headers,
    signal: (c = t.request) == null ? void 0 : c.signal,
    // duplex must be set if request.body is ReadableStream or Async Iterables.
    // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
    ...t.body && { duplex: "half" }
  }).then(async (g) => {
    n = g.url, s = g.status;
    for (const h of g.headers)
      r[h[0]] = h[1];
    if ("deprecation" in r) {
      const h = r.link && r.link.match(/<([^>]+)>; rel="deprecation"/), E = h && h.pop();
      e.warn(
        `[@octokit/request] "${t.method} ${t.url}" is deprecated. It is scheduled to be removed on ${r.sunset}${E ? `. See ${E}` : ""}`
      );
    }
    if (!(s === 204 || s === 205)) {
      if (t.method === "HEAD") {
        if (s < 400)
          return;
        throw new On(g.statusText, s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: void 0
          },
          request: t
        });
      }
      if (s === 304)
        throw new On("Not modified", s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: await Ug(g)
          },
          request: t
        });
      if (s >= 400) {
        const h = await Ug(g);
        throw new On($b(h), s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: h
          },
          request: t
        });
      }
      return A ? await Ug(g) : g.body;
    }
  }).then((g) => ({
    status: s,
    url: n,
    headers: r,
    data: g
  })).catch((g) => {
    if (g instanceof On)
      throw g;
    if (g.name === "AbortError")
      throw g;
    let h = g.message;
    throw g.name === "TypeError" && "cause" in g && (g.cause instanceof Error ? h = g.cause.message : typeof g.cause == "string" && (h = g.cause)), new On(h, 500, {
      request: t
    });
  });
}
async function Ug(t) {
  const e = t.headers.get("content-type");
  return /application\/json/.test(e) ? t.json() : !e || /^text\/|charset=utf-8$/.test(e) ? t.text() : Xb(t);
}
function $b(t) {
  return typeof t == "string" ? t : "message" in t ? Array.isArray(t.errors) ? `${t.message}: ${t.errors.map(JSON.stringify).join(", ")}` : t.message : `Unknown error: ${JSON.stringify(t)}`;
}
function gl(t, e) {
  const A = t.defaults(e);
  return Object.assign(function(s, n) {
    const i = A.merge(s, n);
    if (!i.request || !i.request.hook)
      return ju(A.parse(i));
    const a = (o, c) => ju(
      A.parse(A.merge(o, c))
    );
    return Object.assign(a, {
      endpoint: A,
      defaults: gl.bind(null, A)
    }), i.request.hook(a, i);
  }, {
    endpoint: A,
    defaults: gl.bind(null, A)
  });
}
var ll = gl(Wb, {
  headers: {
    "user-agent": `octokit-request.js/${zb} ${va()}`
  }
}), Kb = "7.0.2";
function ek(t) {
  return `Request failed due to following response errors:
` + t.errors.map((e) => ` - ${e.message}`).join(`
`);
}
var Ak = class extends Error {
  constructor(t, e, A) {
    super(ek(A)), this.request = t, this.headers = e, this.response = A, this.name = "GraphqlResponseError", this.errors = A.errors, this.data = A.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, tk = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
], rk = ["query", "method", "url"], Zu = /\/api\/v3\/?$/;
function sk(t, e, A) {
  if (A) {
    if (typeof e == "string" && "query" in A)
      return Promise.reject(
        new Error('[@octokit/graphql] "query" cannot be used as variable name')
      );
    for (const i in A)
      if (rk.includes(i))
        return Promise.reject(
          new Error(
            `[@octokit/graphql] "${i}" cannot be used as variable name`
          )
        );
  }
  const r = typeof e == "string" ? Object.assign({ query: e }, A) : e, s = Object.keys(
    r
  ).reduce((i, a) => tk.includes(a) ? (i[a] = r[a], i) : (i.variables || (i.variables = {}), i.variables[a] = r[a], i), {}), n = r.baseUrl || t.endpoint.DEFAULTS.baseUrl;
  return Zu.test(n) && (s.url = n.replace(Zu, "/api/graphql")), t(s).then((i) => {
    if (i.data.errors) {
      const a = {};
      for (const o of Object.keys(i.headers))
        a[o] = i.headers[o];
      throw new Ak(
        s,
        a,
        i.data
      );
    }
    return i.data.data;
  });
}
function Hl(t, e) {
  const A = t.defaults(e);
  return Object.assign((s, n) => sk(A, s, n), {
    defaults: Hl.bind(null, A),
    endpoint: A.endpoint
  });
}
Hl(ll, {
  headers: {
    "user-agent": `octokit-graphql.js/${Kb} ${va()}`
  },
  method: "POST",
  url: "/graphql"
});
function nk(t) {
  return Hl(t, {
    method: "POST",
    url: "/graphql"
  });
}
var ik = /^v1\./, ok = /^ghs_/, ak = /^ghu_/;
async function ck(t) {
  const e = t.split(/\./).length === 3, A = ik.test(t) || ok.test(t), r = ak.test(t);
  return {
    type: "token",
    token: t,
    tokenType: e ? "app" : A ? "installation" : r ? "user-to-server" : "oauth"
  };
}
function gk(t) {
  return t.split(/\./).length === 3 ? `bearer ${t}` : `token ${t}`;
}
async function lk(t, e, A, r) {
  const s = e.endpoint.merge(
    A,
    r
  );
  return s.headers.authorization = gk(t), e(s);
}
var hk = function(e) {
  if (!e)
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof e != "string")
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  return e = e.replace(/^(token|bearer) +/i, ""), Object.assign(ck.bind(null, e), {
    hook: lk.bind(null, e)
  });
}, zu = "5.0.1", hn, Ek = (hn = class {
  static defaults(e) {
    return class extends this {
      constructor(...r) {
        const s = r[0] || {};
        if (typeof e == "function") {
          super(e(s));
          return;
        }
        super(
          Object.assign(
            {},
            e,
            s,
            s.userAgent && e.userAgent ? {
              userAgent: `${s.userAgent} ${e.userAgent}`
            } : null
          )
        );
      }
    };
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */
  static plugin(...e) {
    var s;
    const A = this.plugins;
    return s = class extends this {
    }, s.plugins = A.concat(
      e.filter((i) => !A.includes(i))
    ), s;
  }
  constructor(e = {}) {
    const A = new Ub(), r = {
      baseUrl: ll.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, e.request, {
        // @ts-ignore internal usage only, no need to type
        hook: A.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    if (r.headers["user-agent"] = [
      e.userAgent,
      `octokit-core.js/${zu} ${va()}`
    ].filter(Boolean).join(" "), e.baseUrl && (r.baseUrl = e.baseUrl), e.previews && (r.mediaType.previews = e.previews), e.timeZone && (r.headers["time-zone"] = e.timeZone), this.request = ll.defaults(r), this.graphql = nk(this.request).defaults(r), this.log = Object.assign(
      {
        debug: () => {
        },
        info: () => {
        },
        warn: console.warn.bind(console),
        error: console.error.bind(console)
      },
      e.log
    ), this.hook = A, e.authStrategy) {
      const { authStrategy: n, ...i } = e, a = n(
        Object.assign(
          {
            request: this.request,
            log: this.log,
            // we pass the current octokit instance as well as its constructor options
            // to allow for authentication strategies that return a new octokit instance
            // that shares the same internal state as the current one. The original
            // requirement for this was the "event-octokit" authentication strategy
            // of https://github.com/probot/octokit-auth-probot.
            octokit: this,
            octokitOptions: i
          },
          e.auth
        )
      );
      A.wrap("request", a.hook), this.auth = a;
    } else if (!e.auth)
      this.auth = async () => ({
        type: "unauthenticated"
      });
    else {
      const n = hk(e.auth);
      A.wrap("request", n.hook), this.auth = n;
    }
    this.constructor.plugins.forEach((n) => {
      Object.assign(this, n(this, e));
    });
  }
}, hn.VERSION = zu, hn.plugins = [], hn), uk = "4.0.0";
function TI(t) {
  t.hook.wrap("request", (e, A) => {
    t.log.debug("request", A);
    const r = Date.now(), s = t.request.endpoint.parse(A), n = s.url.replace(A.baseUrl, "");
    return e(A).then((i) => (t.log.info(
      `${s.method} ${n} - ${i.status} in ${Date.now() - r}ms`
    ), i)).catch((i) => {
      throw t.log.info(
        `${s.method} ${n} - ${i.status} in ${Date.now() - r}ms`
      ), i;
    });
  });
}
TI.VERSION = uk;
var Qk = "9.1.2";
function Ck(t) {
  if (!t.data)
    return {
      ...t,
      data: []
    };
  if (!("total_count" in t.data && !("url" in t.data)))
    return t;
  const A = t.data.incomplete_results, r = t.data.repository_selection, s = t.data.total_count;
  delete t.data.incomplete_results, delete t.data.repository_selection, delete t.data.total_count;
  const n = Object.keys(t.data)[0], i = t.data[n];
  return t.data = i, typeof A < "u" && (t.data.incomplete_results = A), typeof r < "u" && (t.data.repository_selection = r), t.data.total_count = s, t;
}
function Pl(t, e, A) {
  const r = typeof e == "function" ? e.endpoint(A) : t.request.endpoint(e, A), s = typeof e == "function" ? e : t.request, n = r.method, i = r.headers;
  let a = r.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!a)
          return { done: !0 };
        try {
          const o = await s({ method: n, url: a, headers: i }), c = Ck(o);
          return a = ((c.headers.link || "").match(
            /<([^>]+)>;\s*rel="next"/
          ) || [])[1], { value: c };
        } catch (o) {
          if (o.status !== 409)
            throw o;
          return a = "", {
            value: {
              status: 200,
              headers: {},
              data: []
            }
          };
        }
      }
    })
  };
}
function vI(t, e, A, r) {
  return typeof A == "function" && (r = A, A = void 0), LI(
    t,
    [],
    Pl(t, e, A)[Symbol.asyncIterator](),
    r
  );
}
function LI(t, e, A, r) {
  return A.next().then((s) => {
    if (s.done)
      return e;
    let n = !1;
    function i() {
      n = !0;
    }
    return e = e.concat(
      r ? r(s.value, i) : s.value.data
    ), n ? e : LI(t, e, A, r);
  });
}
Object.assign(vI, {
  iterator: Pl
});
function MI(t) {
  return {
    paginate: Object.assign(vI.bind(null, t), {
      iterator: Pl.bind(null, t)
    })
  };
}
MI.VERSION = Qk;
var Bk = "10.1.2", Ik = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createEnvironmentVariable: [
      "POST /repositories/{repository_id}/environments/{environment_name}/variables"
    ],
    createOrUpdateEnvironmentSecret: [
      "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createOrgVariable: ["POST /orgs/{org}/actions/variables"],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteActionsCacheById: [
      "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"
    ],
    deleteActionsCacheByKey: [
      "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteEnvironmentSecret: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    deleteEnvironmentVariable: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteRepoVariable: [
      "DELETE /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    forceCancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"
    ],
    generateRunnerJitconfigForOrg: [
      "POST /orgs/{org}/actions/runners/generate-jitconfig"
    ],
    generateRunnerJitconfigForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"
    ],
    getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository"
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"
    ],
    getEnvironmentSecret: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    getEnvironmentVariable: [
      "GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow"
    ],
    getGithubActionsDefaultWorkflowPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access"
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets"
    ],
    listEnvironmentVariables: [
      "GET /repositories/{repository_id}/environments/{environment_name}/variables"
    ],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listOrgVariables: ["GET /orgs/{org}/actions/variables"],
    listRepoOrganizationSecrets: [
      "GET /repos/{owner}/{repo}/actions/organization-secrets"
    ],
    listRepoOrganizationVariables: [
      "GET /repos/{owner}/{repo}/actions/organization-variables"
    ],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedReposForOrgVariable: [
      "GET /orgs/{org}/actions/variables/{name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgVariable: [
      "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    reviewCustomGatesForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow"
    ],
    setGithubActionsDefaultWorkflowPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access"
    ],
    updateEnvironmentVariable: [
      "PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
    updateRepoVariable: [
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallationRequestsForAuthenticatedApp: [
      "GET /app/installation-requests"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"
    ],
    getCodeqlDatabase: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] }
    ],
    listCodeqlDatabases: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases"
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    updateDefaultSetup: [
      "PATCH /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"]
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    checkPermissionsForDevcontainer: [
      "GET /repos/{owner}/{repo}/codespaces/permissions_check"
    ],
    codespaceMachinesForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/machines"
    ],
    createForAuthenticatedUser: ["POST /user/codespaces"],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}"
    ],
    createWithPrForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"
    ],
    createWithRepoForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/codespaces"
    ],
    deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
    deleteFromOrganization: [
      "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    deleteSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}"
    ],
    exportForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/exports"
    ],
    getCodespacesForUserInOrg: [
      "GET /orgs/{org}/members/{username}/codespaces"
    ],
    getExportDetailsForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/exports/{export_id}"
    ],
    getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
    getPublicKeyForAuthenticatedUser: [
      "GET /user/codespaces/secrets/public-key"
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    getSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}"
    ],
    listDevcontainersInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/devcontainers"
    ],
    listForAuthenticatedUser: ["GET /user/codespaces"],
    listInOrganization: [
      "GET /orgs/{org}/codespaces",
      {},
      { renamedParameters: { org_id: "org" } }
    ],
    listInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces"
    ],
    listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
    listRepositoriesForSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}/repositories"
    ],
    listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    preFlightWithRepoForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/new"
    ],
    publishForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/publish"
    ],
    removeRepositoryForSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repoMachinesForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/machines"
    ],
    setRepositoriesForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"],
    stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
    stopInOrganization: [
      "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"
    ],
    updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"]
  },
  copilot: {
    addCopilotForBusinessSeatsForTeams: [
      "POST /orgs/{org}/copilot/billing/selected_teams"
    ],
    addCopilotForBusinessSeatsForUsers: [
      "POST /orgs/{org}/copilot/billing/selected_users"
    ],
    cancelCopilotSeatAssignmentForTeams: [
      "DELETE /orgs/{org}/copilot/billing/selected_teams"
    ],
    cancelCopilotSeatAssignmentForUsers: [
      "DELETE /orgs/{org}/copilot/billing/selected_users"
    ],
    getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
    getCopilotSeatDetailsForUser: [
      "GET /orgs/{org}/members/{username}/copilot"
    ],
    listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"]
  },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/dependabot/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"
    ]
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/{owner}/{repo}/dependency-graph/snapshots"
    ],
    diffRange: [
      "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"
    ],
    exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"]
  },
  emojis: { get: ["GET /emojis"] },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }
    ],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    checkUserCanBeAssignedToIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"
    ],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getAllVersions: ["GET /versions"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: [
      "DELETE /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.cancelImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#cancel-an-import"
      }
    ],
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive"
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive"
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive"
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive"
    ],
    getCommitAuthors: [
      "GET /repos/{owner}/{repo}/import/authors",
      {},
      {
        deprecated: "octokit.rest.migrations.getCommitAuthors() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-commit-authors"
      }
    ],
    getImportStatus: [
      "GET /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.getImportStatus() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-an-import-status"
      }
    ],
    getLargeFiles: [
      "GET /repos/{owner}/{repo}/import/large_files",
      {},
      {
        deprecated: "octokit.rest.migrations.getLargeFiles() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-large-files"
      }
    ],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories"
    ],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] }
    ],
    mapCommitAuthor: [
      "PATCH /repos/{owner}/{repo}/import/authors/{author_id}",
      {},
      {
        deprecated: "octokit.rest.migrations.mapCommitAuthor() is deprecated, see https://docs.github.com/rest/migrations/source-imports#map-a-commit-author"
      }
    ],
    setLfsPreference: [
      "PATCH /repos/{owner}/{repo}/import/lfs",
      {},
      {
        deprecated: "octokit.rest.migrations.setLfsPreference() is deprecated, see https://docs.github.com/rest/migrations/source-imports#update-git-lfs-preference"
      }
    ],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: [
      "PUT /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.startImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#start-an-import"
      }
    ],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    updateImport: [
      "PATCH /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.updateImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#update-an-import"
      }
    ]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"],
    createOrUpdateCustomPropertiesValuesForRepos: [
      "PATCH /orgs/{org}/properties/values"
    ],
    createOrUpdateCustomProperty: [
      "PUT /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    createWebhook: ["POST /orgs/{org}/hooks"],
    delete: ["DELETE /orgs/{org}"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    enableOrDisableSecurityProductOnAllOrgRepos: [
      "POST /orgs/{org}/{security_product}/{enablement}"
    ],
    get: ["GET /orgs/{org}"],
    getAllCustomProperties: ["GET /orgs/{org}/properties/schema"],
    getCustomProperty: [
      "GET /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPatGrantRepositories: [
      "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"
    ],
    listPatGrantRequestRepositories: [
      "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"
    ],
    listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"],
    listPatGrants: ["GET /orgs/{org}/personal-access-tokens"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listSecurityManagerTeams: ["GET /orgs/{org}/security-managers"],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeCustomProperty: [
      "DELETE /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    removeSecurityManagerTeam: [
      "DELETE /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    reviewPatGrantRequest: [
      "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"
    ],
    reviewPatGrantRequestsInBulk: [
      "POST /orgs/{org}/personal-access-token-requests"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
    updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}"
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}"
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
        ]
      }
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions"
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}"
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}"
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    listDockerMigrationConflictingPackagesForAuthenticatedUser: [
      "GET /user/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForOrganization: [
      "GET /orgs/{org}/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForUser: [
      "GET /users/{username}/docker/conflicts"
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ]
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"],
    createCard: ["POST /projects/columns/{column_id}/cards"],
    createColumn: ["POST /projects/{project_id}/columns"],
    createForAuthenticatedUser: ["POST /user/projects"],
    createForOrg: ["POST /orgs/{org}/projects"],
    createForRepo: ["POST /repos/{owner}/{repo}/projects"],
    delete: ["DELETE /projects/{project_id}"],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
    deleteColumn: ["DELETE /projects/columns/{column_id}"],
    get: ["GET /projects/{project_id}"],
    getCard: ["GET /projects/columns/cards/{card_id}"],
    getColumn: ["GET /projects/columns/{column_id}"],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission"
    ],
    listCards: ["GET /projects/columns/{column_id}/cards"],
    listCollaborators: ["GET /projects/{project_id}/collaborators"],
    listColumns: ["GET /projects/{project_id}/columns"],
    listForOrg: ["GET /orgs/{org}/projects"],
    listForRepo: ["GET /repos/{owner}/{repo}/projects"],
    listForUser: ["GET /users/{username}/projects"],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
    moveColumn: ["POST /projects/columns/{column_id}/moves"],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}"
    ],
    update: ["PATCH /projects/{project_id}"],
    updateCard: ["PATCH /projects/columns/cards/{card_id}"],
    updateColumn: ["PATCH /projects/columns/{column_id}"]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ]
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}"
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    checkAutomatedSecurityFixes: [
      "GET /repos/{owner}/{repo}/automated-security-fixes"
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}"
    ],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    createDeploymentProtectionRule: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployment"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
    createTagProtection: ["POST /repos/{owner}/{repo}/tags/protection"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate"
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}"
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    deleteTagProtection: [
      "DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes"
    ],
    disableDeploymentProtectionRule: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    disablePrivateVulnerabilityReporting: [
      "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes"
    ],
    enablePrivateVulnerabilityReporting: [
      "PUT /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes"
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllDeploymentProtectionRules: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getCustomDeploymentProtectionRule: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    getCustomPropertiesValues: ["GET /repos/{owner}/{repo}/properties/values"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],
    getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"],
    getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
    getOrgRulesets: ["GET /orgs/{org}/rulesets"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getRepoRuleSuite: [
      "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"
    ],
    getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
    getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    listActivities: ["GET /repos/{owner}/{repo}/activity"],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listCustomDeploymentRuleIntegrations: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"
    ],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTagProtection: ["GET /repos/{owner}/{repo}/tags/protection"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/secret-scanning/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ]
  },
  securityAdvisories: {
    createPrivateVulnerabilityReport: [
      "POST /repos/{owner}/{repo}/security-advisories/reports"
    ],
    createRepositoryAdvisory: [
      "POST /repos/{owner}/{repo}/security-advisories"
    ],
    createRepositoryAdvisoryCveRequest: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"
    ],
    getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
    getRepositoryAdvisory: [
      "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ],
    listGlobalAdvisories: ["GET /advisories"],
    listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
    listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"],
    updateRepositoryAdvisory: [
      "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] }
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] }
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
    deleteSshSigningKeyForAuthenticatedUser: [
      "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    getSshSigningKeyForAuthenticatedUser: [
      "GET /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    list: ["GET /users"],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] }
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] }
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] }
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
    listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
    listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
    listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility"
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
}, dk = Ik, Bs = /* @__PURE__ */ new Map();
for (const [t, e] of Object.entries(dk))
  for (const [A, r] of Object.entries(e)) {
    const [s, n, i] = r, [a, o] = s.split(/ /), c = Object.assign(
      {
        method: a,
        url: o
      },
      n
    );
    Bs.has(t) || Bs.set(t, /* @__PURE__ */ new Map()), Bs.get(t).set(A, {
      scope: t,
      methodName: A,
      endpointDefaults: c,
      decorations: i
    });
  }
var fk = {
  has({ scope: t }, e) {
    return Bs.get(t).has(e);
  },
  getOwnPropertyDescriptor(t, e) {
    return {
      value: this.get(t, e),
      // ensures method is in the cache
      configurable: !0,
      writable: !0,
      enumerable: !0
    };
  },
  defineProperty(t, e, A) {
    return Object.defineProperty(t.cache, e, A), !0;
  },
  deleteProperty(t, e) {
    return delete t.cache[e], !0;
  },
  ownKeys({ scope: t }) {
    return [...Bs.get(t).keys()];
  },
  set(t, e, A) {
    return t.cache[e] = A;
  },
  get({ octokit: t, scope: e, cache: A }, r) {
    if (A[r])
      return A[r];
    const s = Bs.get(e).get(r);
    if (!s)
      return;
    const { endpointDefaults: n, decorations: i } = s;
    return i ? A[r] = wk(
      t,
      e,
      r,
      n,
      i
    ) : A[r] = t.request.defaults(n), A[r];
  }
};
function pk(t) {
  const e = {};
  for (const A of Bs.keys())
    e[A] = new Proxy({ octokit: t, scope: A, cache: {} }, fk);
  return e;
}
function wk(t, e, A, r, s) {
  const n = t.request.defaults(r);
  function i(...a) {
    let o = n.endpoint.merge(...a);
    if (s.mapToData)
      return o = Object.assign({}, o, {
        data: o[s.mapToData],
        [s.mapToData]: void 0
      }), n(o);
    if (s.renamed) {
      const [c, g] = s.renamed;
      t.log.warn(
        `octokit.${e}.${A}() has been renamed to octokit.${c}.${g}()`
      );
    }
    if (s.deprecated && t.log.warn(s.deprecated), s.renamedParameters) {
      const c = n.endpoint.merge(...a);
      for (const [g, h] of Object.entries(
        s.renamedParameters
      ))
        g in c && (t.log.warn(
          `"${g}" parameter is deprecated for "octokit.${e}.${A}()". Use "${h}" instead`
        ), h in c || (c[h] = c[g]), delete c[g]);
      return n(c);
    }
    return n(...a);
  }
  return Object.assign(i, n);
}
function GI(t) {
  const e = pk(t);
  return {
    ...e,
    rest: e
  };
}
GI.VERSION = Bk;
var mk = "20.0.2", Xu = Ek.plugin(
  TI,
  GI,
  MI
).defaults({
  userAgent: `octokit-rest.js/${mk}`
}), YI = { exports: {} };
(function() {
  function t(e) {
    var A;
    return e instanceof Buffer ? A = e : A = Buffer.from(e.toString(), "binary"), A.toString("base64");
  }
  YI.exports = t;
})();
var yk = YI.exports;
const Rk = /* @__PURE__ */ ul(yk);
class Dk {
  constructor(e, A, r) {
    L(this, "octokit");
    this.owner = e, this.repositoryName = A, this.octokit = new Xu({ auth: r });
  }
  getRepositoryInfo() {
    return {
      owner: this.owner,
      repo: this.repositoryName
    };
  }
  async hasBranch(e) {
    try {
      return await this.getBranch(e), !0;
    } catch {
      return !1;
    }
  }
  async getBranch(e) {
    const { data: A } = await this.octokit.rest.git.getRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${e}`
    });
    return {
      ...A,
      name: e
    };
  }
  async createBranch(e, A) {
    const { data: r } = await this.octokit.rest.git.createRef({
      ...this.getRepositoryInfo(),
      ref: `refs/heads/${e}`,
      sha: A
    });
    return r;
  }
  deleteBranch(e) {
    return this.octokit.rest.git.deleteRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${e}`
    });
  }
  async getDefaultBranchName() {
    const e = await this.octokit.rest.repos.get(this.getRepositoryInfo());
    if (e.status !== 200)
      throw new Error(`Fetch for the default branch failed with the status code ${e.status}`);
    return e.data.default_branch;
  }
  async createBlobs(e) {
    const A = "base64", r = "blob", s = "100644", n = [];
    for (const i of e) {
      const {
        data: { sha: a }
      } = await this.octokit.rest.git.createBlob({
        ...this.getRepositoryInfo(),
        content: Rk($I(i)),
        encoding: A
      });
      n.push({ type: r, mode: s, path: i, sha: a });
    }
    return n;
  }
  async createCommit({ branchSha: e, treeSha: A, message: r, token: s, amend: n }) {
    const i = s ? new Xu({ auth: s }) : this.octokit;
    if (n) {
      const { data: a } = await this.octokit.rest.git.getCommit({
        ...this.getRepositoryInfo(),
        commit_sha: e
      }), { data: o } = await i.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: a.parents.map(({ sha: c }) => c),
        tree: A,
        message: r || a.message
      });
      return o;
    } else {
      if (!r)
        throw new Error("Commit message is empty");
      const { data: a } = await i.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: [e],
        tree: A,
        message: r
      });
      return a;
    }
  }
  async commitFiles({ paths: e, branchName: A, amend: r = !1, ...s }) {
    const n = await this.createBlobs(e), {
      object: { sha: i }
    } = await this.getBranch(A), {
      data: { sha: a }
    } = await this.octokit.rest.git.createTree({
      ...this.getRepositoryInfo(),
      tree: n,
      base_tree: i
    }), o = await this.createCommit({ branchSha: i, treeSha: a, amend: r, ...s });
    return await this.octokit.rest.git.updateRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${A}`,
      sha: o.sha,
      force: r
    }), o;
  }
  async getBranchCommitMessage(e) {
    const {
      data: { commit: A }
    } = await this.octokit.rest.repos.getBranch({
      ...this.getRepositoryInfo(),
      branch: e
    });
    return A.commit.message;
  }
  async createPullRequest({
    branchName: e,
    baseBranchName: A,
    title: r,
    body: s,
    labels: n,
    assignees: i,
    reviewers: a,
    teamReviewers: o,
    milestone: c,
    draft: g
  }) {
    const { data: h } = await this.octokit.rest.pulls.create({
      ...this.getRepositoryInfo(),
      base: A || await this.getDefaultBranchName(),
      head: e,
      title: r || await this.getBranchCommitMessage(e),
      ...Fe({ body: s }),
      ...Fe({ draft: g })
    });
    return (a || o) && await this.octokit.rest.pulls.requestReviewers({
      ...this.getRepositoryInfo(),
      pull_number: h.number,
      ...Fe({ reviewers: a }),
      ...Fe({ team_reviewers: o })
    }), (n || i || c) && await this.octokit.rest.issues.update({
      ...this.getRepositoryInfo(),
      issue_number: h.number,
      ...Fe({ labels: n }),
      ...Fe({ assignees: i }),
      ...Fe({ milestone: c })
    }), h;
  }
}
const $u = "refs/heads/", bk = (t) => {
  const A = t.reduce((r, s) => (r.push(..._l(s, { nodir: !0 })), r), []).reduce((r, s) => Iu.isFileUntracked(s) ? (console.info(`File "${s}" is created`), r.push(s), r) : (Iu.isFileChanged(s) && (console.info(`File "${s}" is changed`), r.push(s)), r), []);
  return A.length === 0 && console.info("No file has been changed"), A;
}, kk = async (t, { name: e, base: A, recreate: r = !1 }) => {
  if (await t.hasBranch(e))
    if (console.info(`Branch "${e}" already exists`), r)
      console.info(`Deleting branch "${e}"...`), await t.deleteBranch(e), console.info(`Branch "${e}" has been deleted`);
    else
      return;
  const {
    object: { sha: s }
  } = await t.getBranch(A ?? await t.getDefaultBranchName());
  await t.createBranch(e, s), console.info(`Branch "${e}" has been created`);
}, Sk = async (t, e, A, r) => {
  const s = await t.commitFiles({
    ...r,
    paths: e,
    branchName: A
  });
  MB.setOutput("commit.sha", s.sha), console.info(`Changed files have been committed to ${s.sha}`);
}, Fk = async (t, e, A) => {
  const r = await t.createPullRequest({
    ...A,
    ...Fe({ baseBranchName: A.base }),
    branchName: e
  });
  console.info(`Pull request has been created at ${r.html_url}`);
}, Nk = async ({
  repository: t,
  token: e,
  branch: { name: A, ...r },
  commit: s,
  pullRequest: n
}) => {
  try {
    const [i, a] = t.split("/");
    if (!i || !a)
      throw new Error(`Repository "${t}" does not have the valid format (owner/repositoryName)`);
    if (s && !s.message && !s.amend)
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    A.startsWith($u) && (A = A.slice($u.length));
    const o = s ? bk(s.paths) : null;
    if ((o == null ? void 0 : o.length) === 0)
      return 0;
    const c = new Dk(i, a, e);
    await kk(c, { name: A, ...r }), s && o && await Sk(c, o, A, s), n && await Fk(c, A, {
      ...Fe({ title: s == null ? void 0 : s.message }),
      ...n
    });
  } catch (i) {
    return console.error(i), 1;
  }
  return 0;
}, Uk = ["paths", "message", "token", "amend"], Tk = [
  "title",
  "body",
  "base",
  "labels",
  "assignees",
  "reviewers",
  "team-reviewers",
  "milestone",
  "draft"
], vk = () => Uk.some((t) => ze.hasInput(`commit.${t}`)), Lk = () => Tk.some((t) => ze.hasInput(`pull-request.${t}`)), Mk = () => {
  const t = ze.getInputAsString("branch.name", { required: !0 }), e = ze.getInputAsString("branch.base"), A = ze.getInputAsBoolean("branch.recreate");
  return {
    name: t,
    ...Fe({ base: e }, null),
    ...Fe({ recreate: A }, null)
  };
}, Gk = () => {
  if (!(ze.getInputAsBoolean("commit") ?? vk()))
    return null;
  const e = ze.getInputAsStrings("commit.paths", { required: !0 }), A = ze.getInputAsString("commit.message"), r = ze.getInputAsString("commit.token"), s = ze.getInputAsBoolean("commit.amend");
  return {
    paths: e,
    ...Fe({ message: A }, null),
    ...Fe({ token: r }, null),
    ...Fe({ amend: s }, null)
  };
}, Yk = () => {
  if (!(ze.getInputAsBoolean("pull-request") ?? Lk()))
    return null;
  const e = ze.getInputAsString("pull-request.title"), A = ze.getInputAsString("pull-request.body"), r = ze.getInputAsString("pull-request.base"), s = ze.getInputAsStrings("pull-request.labels"), n = ze.getInputAsStrings("pull-request.assignees"), i = ze.getInputAsStrings("pull-request.reviewers"), a = ze.getInputAsStrings("pull-request.team-reviewers"), o = ze.getInputAsInteger("pull-request.milestone"), c = ze.getInputAsBoolean("pull-request.draft");
  return {
    ...Fe({ title: e }, null),
    ...Fe({ body: A }, null),
    ...Fe({ base: r }, null),
    ...Fe({ labels: s }, null),
    ...Fe({ assignees: n }, null),
    ...Fe({ reviewers: i }, null),
    ...Fe({ teamReviewers: a }, null),
    ...Fe({ milestone: o }, null),
    ...Fe({ draft: c }, null)
  };
}, Jk = async () => {
  try {
    const t = zR.requireEnv({
      GITHUB_REPOSITORY: Ql.str()
    }), e = ze.getInputAsString("token", { required: !0 }), A = Mk(), r = Gk(), s = Yk(), n = await Nk({
      repository: t.GITHUB_REPOSITORY,
      token: e,
      branch: A,
      ...Fe({ commit: r }, null),
      ...Fe({ pullRequest: s }, null)
    });
    process.exit(n);
  } catch (t) {
    t instanceof Error ? console.error(t.message) : console.error(t), process.exit(1);
  }
};
Jk();
