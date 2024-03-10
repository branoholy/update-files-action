var KI = Object.defineProperty;
var ed = (t, e, A) => e in t ? KI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : t[e] = A;
var L = (t, e, A) => (ed(t, typeof e != "symbol" ? e + "" : e, A), A), Oa = (t, e, A) => {
  if (!e.has(t))
    throw TypeError("Cannot " + A);
};
var l = (t, e, A) => (Oa(t, e, "read from private field"), A ? A.call(t) : e.get(t)), T = (t, e, A) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, A);
}, y = (t, e, A, r) => (Oa(t, e, "write to private field"), r ? r.call(t, A) : e.set(t, A), A);
var Xi = (t, e, A, r) => ({
  set _(s) {
    y(t, e, s, A);
  },
  get _() {
    return l(t, e, r);
  }
}), J = (t, e, A) => (Oa(t, e, "access private method"), A);
import xi from "os";
import * as Ad from "fs";
import oQ, { realpathSync as td, lstatSync as rd, readdir as sd, readdirSync as nd, readlinkSync as id, readFileSync as od } from "fs";
import aQ, { win32 as Lg, posix as ad } from "path";
import Qn from "http";
import cQ from "https";
import El from "net";
import gQ from "tls";
import Ji, { EventEmitter as ul } from "events";
import Ze from "assert";
import Ot from "util";
import _t from "stream";
import ps from "buffer";
import cd from "querystring";
import Yr from "stream/web";
import Ea from "node:stream";
import Cn from "node:util";
import lQ from "node:events";
import hQ from "worker_threads";
import gd from "perf_hooks";
import EQ from "util/types";
import Oi from "async_hooks";
import ld from "console";
import hd, { fileURLToPath as uQ } from "url";
import Ed from "zlib";
import ud, { StringDecoder as Qd } from "string_decoder";
import QQ from "diagnostics_channel";
import { execSync as CQ } from "child_process";
import { lstat as Cd, readdir as Bd, readlink as Id, realpath as dd } from "fs/promises";
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ql(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function BQ(t) {
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
var Cl = {}, vg = function(t, e) {
  return vg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, r) {
    A.__proto__ = r;
  } || function(A, r) {
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (A[s] = r[s]);
  }, vg(t, e);
};
function IQ(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vg(t, e);
  function A() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (A.prototype = e.prototype, new A());
}
var qo = function() {
  return qo = Object.assign || function(e) {
    for (var A, r = 1, s = arguments.length; r < s; r++) {
      A = arguments[r];
      for (var n in A)
        Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
    }
    return e;
  }, qo.apply(this, arguments);
};
function dQ(t, e) {
  var A = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (A[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (A[r[s]] = t[r[s]]);
  return A;
}
function fQ(t, e, A, r) {
  var s = arguments.length, n = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, A) : r, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, A, r);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (i = t[o]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, A, n) : i(e, A)) || n);
  return s > 3 && n && Object.defineProperty(e, A, n), n;
}
function pQ(t, e) {
  return function(A, r) {
    e(A, r, t);
  };
}
function fd(t, e, A, r, s, n) {
  function i(f) {
    if (f !== void 0 && typeof f != "function")
      throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, a = o === "getter" ? "get" : o === "setter" ? "set" : "value", g = !e && t ? r.static ? t : t.prototype : null, c = e || (g ? Object.getOwnPropertyDescriptor(g, r.name) : {}), E, h = !1, u = A.length - 1; u >= 0; u--) {
    var B = {};
    for (var Q in r)
      B[Q] = Q === "access" ? {} : r[Q];
    for (var Q in r.access)
      B.access[Q] = r.access[Q];
    B.addInitializer = function(f) {
      if (h)
        throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(i(f || null));
    };
    var I = (0, A[u])(o === "accessor" ? { get: c.get, set: c.set } : c[a], B);
    if (o === "accessor") {
      if (I === void 0)
        continue;
      if (I === null || typeof I != "object")
        throw new TypeError("Object expected");
      (E = i(I.get)) && (c.get = E), (E = i(I.set)) && (c.set = E), (E = i(I.init)) && s.unshift(E);
    } else
      (E = i(I)) && (o === "field" ? s.unshift(E) : c[a] = E);
  }
  g && Object.defineProperty(g, r.name, c), h = !0;
}
function pd(t, e, A) {
  for (var r = arguments.length > 2, s = 0; s < e.length; s++)
    A = r ? e[s].call(t, A) : e[s].call(t);
  return r ? A : void 0;
}
function md(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function wd(t, e, A) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: A ? "".concat(A, " ", e) : e });
}
function mQ(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function wQ(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function o(c) {
      try {
        g(r.next(c));
      } catch (E) {
        i(E);
      }
    }
    function a(c) {
      try {
        g(r.throw(c));
      } catch (E) {
        i(E);
      }
    }
    function g(c) {
      c.done ? n(c.value) : s(c.value).then(o, a);
    }
    g((r = r.apply(t, e || [])).next());
  });
}
function yQ(t, e) {
  var A = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, s, n, i;
  return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function o(g) {
    return function(c) {
      return a([g, c]);
    };
  }
  function a(g) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, g[0] && (A = 0)), A; )
      try {
        if (r = 1, s && (n = g[0] & 2 ? s.return : g[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, g[1])).done)
          return n;
        switch (s = 0, n && (g = [g[0] & 2, n.value]), g[0]) {
          case 0:
          case 1:
            n = g;
            break;
          case 4:
            return A.label++, { value: g[1], done: !1 };
          case 5:
            A.label++, s = g[1], g = [0];
            continue;
          case 7:
            g = A.ops.pop(), A.trys.pop();
            continue;
          default:
            if (n = A.trys, !(n = n.length > 0 && n[n.length - 1]) && (g[0] === 6 || g[0] === 2)) {
              A = 0;
              continue;
            }
            if (g[0] === 3 && (!n || g[1] > n[0] && g[1] < n[3])) {
              A.label = g[1];
              break;
            }
            if (g[0] === 6 && A.label < n[1]) {
              A.label = n[1], n = g;
              break;
            }
            if (n && A.label < n[2]) {
              A.label = n[2], A.ops.push(g);
              break;
            }
            n[2] && A.ops.pop(), A.trys.pop();
            continue;
        }
        g = e.call(t, A);
      } catch (c) {
        g = [6, c], s = 0;
      } finally {
        r = n = 0;
      }
    if (g[0] & 5)
      throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}
var ua = Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
};
function RQ(t, e) {
  for (var A in t)
    A !== "default" && !Object.prototype.hasOwnProperty.call(e, A) && ua(e, t, A);
}
function jo(t) {
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
function Bl(t, e) {
  var A = typeof Symbol == "function" && t[Symbol.iterator];
  if (!A)
    return t;
  var r = A.call(t), s, n = [], i;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = r.next()).done; )
      n.push(s.value);
  } catch (o) {
    i = { error: o };
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
function DQ() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Bl(arguments[e]));
  return t;
}
function bQ() {
  for (var t = 0, e = 0, A = arguments.length; e < A; e++)
    t += arguments[e].length;
  for (var r = Array(t), s = 0, e = 0; e < A; e++)
    for (var n = arguments[e], i = 0, o = n.length; i < o; i++, s++)
      r[s] = n[i];
  return r;
}
function kQ(t, e, A) {
  if (A || arguments.length === 2)
    for (var r = 0, s = e.length, n; r < s; r++)
      (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return t.concat(n || Array.prototype.slice.call(e));
}
function nn(t) {
  return this instanceof nn ? (this.v = t, this) : new nn(t);
}
function SQ(t, e, A) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = A.apply(t, e || []), s, n = [];
  return s = {}, i("next"), i("throw"), i("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function i(h) {
    r[h] && (s[h] = function(u) {
      return new Promise(function(B, Q) {
        n.push([h, u, B, Q]) > 1 || o(h, u);
      });
    });
  }
  function o(h, u) {
    try {
      a(r[h](u));
    } catch (B) {
      E(n[0][3], B);
    }
  }
  function a(h) {
    h.value instanceof nn ? Promise.resolve(h.value.v).then(g, c) : E(n[0][2], h);
  }
  function g(h) {
    o("next", h);
  }
  function c(h) {
    o("throw", h);
  }
  function E(h, u) {
    h(u), n.shift(), n.length && o(n[0][0], n[0][1]);
  }
}
function FQ(t) {
  var e, A;
  return e = {}, r("next"), r("throw", function(s) {
    throw s;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(s, n) {
    e[s] = t[s] ? function(i) {
      return (A = !A) ? { value: nn(t[s](i)), done: !1 } : n ? n(i) : i;
    } : n;
  }
}
function NQ(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], A;
  return e ? e.call(t) : (t = typeof jo == "function" ? jo(t) : t[Symbol.iterator](), A = {}, r("next"), r("throw"), r("return"), A[Symbol.asyncIterator] = function() {
    return this;
  }, A);
  function r(n) {
    A[n] = t[n] && function(i) {
      return new Promise(function(o, a) {
        i = t[n](i), s(o, a, i.done, i.value);
      });
    };
  }
  function s(n, i, o, a) {
    Promise.resolve(a).then(function(g) {
      n({ value: g, done: o });
    }, i);
  }
}
function UQ(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var yd = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function TQ(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && ua(e, t, A);
  return yd(e, t), e;
}
function LQ(t) {
  return t && t.__esModule ? t : { default: t };
}
function vQ(t, e, A, r) {
  if (A === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !r : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return A === "m" ? r : A === "a" ? r.call(t) : r ? r.value : e.get(t);
}
function MQ(t, e, A, r, s) {
  if (r === "m")
    throw new TypeError("Private method is not writable");
  if (r === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? s.call(t, A) : s ? s.value = A : e.set(t, A), A;
}
function GQ(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function YQ(t, e, A) {
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
var Rd = typeof SuppressedError == "function" ? SuppressedError : function(t, e, A) {
  var r = new Error(A);
  return r.name = "SuppressedError", r.error = t, r.suppressed = e, r;
};
function xQ(t) {
  function e(r) {
    t.error = t.hasError ? new Rd(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
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
const Dd = {
  __extends: IQ,
  __assign: qo,
  __rest: dQ,
  __decorate: fQ,
  __param: pQ,
  __metadata: mQ,
  __awaiter: wQ,
  __generator: yQ,
  __createBinding: ua,
  __exportStar: RQ,
  __values: jo,
  __read: Bl,
  __spread: DQ,
  __spreadArrays: bQ,
  __spreadArray: kQ,
  __await: nn,
  __asyncGenerator: SQ,
  __asyncDelegator: FQ,
  __asyncValues: NQ,
  __makeTemplateObject: UQ,
  __importStar: TQ,
  __importDefault: LQ,
  __classPrivateFieldGet: vQ,
  __classPrivateFieldSet: MQ,
  __classPrivateFieldIn: GQ,
  __addDisposableResource: YQ,
  __disposeResources: xQ
}, bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: YQ,
  get __assign() {
    return qo;
  },
  __asyncDelegator: FQ,
  __asyncGenerator: SQ,
  __asyncValues: NQ,
  __await: nn,
  __awaiter: wQ,
  __classPrivateFieldGet: vQ,
  __classPrivateFieldIn: GQ,
  __classPrivateFieldSet: MQ,
  __createBinding: ua,
  __decorate: fQ,
  __disposeResources: xQ,
  __esDecorate: fd,
  __exportStar: RQ,
  __extends: IQ,
  __generator: yQ,
  __importDefault: LQ,
  __importStar: TQ,
  __makeTemplateObject: UQ,
  __metadata: mQ,
  __param: pQ,
  __propKey: md,
  __read: Bl,
  __rest: dQ,
  __runInitializers: pd,
  __setFunctionName: wd,
  __spread: DQ,
  __spreadArray: kQ,
  __spreadArrays: bQ,
  __values: jo,
  default: Dd
}, Symbol.toStringTag, { value: "Module" })), Il = /* @__PURE__ */ BQ(bd);
var Vt = {}, _a = {}, Pr = {}, Kl;
function Qa() {
  if (Kl)
    return Pr;
  Kl = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.EnvMissingError = Pr.EnvError = void 0;
  var t = Il, e = (
    /** @class */
    function(r) {
      t.__extends(s, r);
      function s(n) {
        var i = this.constructor, o = r.call(this, n) || this;
        return Object.setPrototypeOf(o, i.prototype), Error.captureStackTrace(o, s), o.name = o.constructor.name, o;
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
        var i = this.constructor, o = r.call(this, n) || this;
        return Object.setPrototypeOf(o, i.prototype), Error.captureStackTrace(o, s), o.name = o.constructor.name, o;
      }
      return s;
    }(ReferenceError)
  );
  return Pr.EnvMissingError = A, Pr;
}
var Ha = {}, eh;
function JQ() {
  return eh || (eh = 1, function(t) {
    var e;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultReporter = t.envalidErrorFormatter = void 0;
    var A = Qa(), r = console.error.bind(console), s = !!(typeof process == "object" && (!((e = process == null ? void 0 : process.versions) === null || e === void 0) && e.node)), n = function(c) {
      return function(E) {
        return s ? "\x1B[".concat(c, "m").concat(E, "\x1B[0m") : E;
      };
    }, i = {
      blue: n("34"),
      white: n("37"),
      yellow: n("33")
    }, o = i.white("================================"), a = function(c, E) {
      E === void 0 && (E = r);
      for (var h = [], u = [], B = 0, Q = Object.entries(c); B < Q.length; B++) {
        var I = Q[B], f = I[0], C = I[1];
        C instanceof A.EnvMissingError ? h.push("    ".concat(i.blue(f), ": ").concat(C.message || "(required)")) : u.push("    ".concat(i.blue(f), ": ").concat((C == null ? void 0 : C.message) || "(invalid format)"));
      }
      u.length && u.unshift(" ".concat(i.yellow("Invalid"), " environment variables:")), h.length && h.unshift(" ".concat(i.yellow("Missing"), " environment variables:"));
      var d = [
        o,
        u.sort().join(`
`),
        h.sort().join(`
`),
        o
      ].filter(function(w) {
        return !!w;
      }).join(`
`);
      E(d);
    };
    t.envalidErrorFormatter = a;
    var g = function(c, E) {
      var h = c.errors, u = h === void 0 ? {} : h, B = E === void 0 ? { logger: r } : E, Q = B.onError, I = B.logger;
      if (Object.keys(u).length)
        if ((0, t.envalidErrorFormatter)(u, I), Q)
          Q(u);
        else if (s)
          I(i.yellow(`
 Exiting with error code 1`)), process.exit(1);
        else
          throw new TypeError("Environment validation failed");
    };
    t.defaultReporter = g;
  }(Ha)), Ha;
}
var Ah;
function kd() {
  return Ah || (Ah = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getSanitizedEnv = t.testOnlySymbol = void 0;
    var e = Qa(), A = JQ();
    t.testOnlySymbol = Symbol("envalid - test only");
    function r(a) {
      var g = a.spec, c = a.name, E = a.rawValue;
      if (typeof g._parse != "function")
        throw new e.EnvError('Invalid spec for "'.concat(c, '"'));
      var h = g._parse(E);
      if (g.choices)
        if (Array.isArray(g.choices)) {
          if (!g.choices.includes(h))
            throw new e.EnvError('Value "'.concat(h, '" not in choices [').concat(g.choices, "]"));
        } else
          throw new TypeError('"choices" must be an array (in spec for "'.concat(c, '")'));
      if (h == null)
        throw new e.EnvError('Invalid value for env var "'.concat(c, '"'));
      return h;
    }
    function s(a) {
      var g = a.example ? ' (eg. "'.concat(a.example, '")') : "", c = a.docs ? ". See ".concat(a.docs) : "";
      return "".concat(a.desc).concat(g).concat(c);
    }
    var n = function(a, g) {
      return a[g];
    }, i = function(a) {
      return a === t.testOnlySymbol;
    };
    function o(a, g, c) {
      c === void 0 && (c = {});
      for (var E = {}, h = g, u = {}, B = Object.keys(h), Q = n(a, "NODE_ENV"), I = 0, f = B; I < f.length; I++) {
        var C = f[I], d = h[C], w = n(a, C);
        if (w === void 0) {
          var p = Q && Q !== "production" && d.hasOwnProperty("devDefault");
          if (p) {
            if (E[C] = d.devDefault, i(d.devDefault) && Q != "test")
              throw new e.EnvMissingError(s(d));
            continue;
          }
          if ("default" in d) {
            E[C] = d.default;
            continue;
          }
        }
        try {
          if (w === void 0)
            throw E[C] = void 0, new e.EnvMissingError(s(d));
          E[C] = r({ name: C, spec: d, rawValue: w });
        } catch (R) {
          if ((c == null ? void 0 : c.reporter) === null)
            throw R;
          R instanceof Error && (u[C] = R);
        }
      }
      var m = (c == null ? void 0 : c.reporter) || A.defaultReporter;
      return m({ errors: u, env: E }), E;
    }
    t.getSanitizedEnv = o;
  }(_a)), _a;
}
var Pa = {}, th;
function OQ() {
  return th || (th = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.applyDefaultMiddleware = t.accessorMiddleware = t.strictProxyMiddleware = void 0;
    var e = function(s, n, i) {
      i === void 0 && (i = {});
      var o = i.extraInspectables, a = o === void 0 ? [] : o, g = [
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
      ], c = ["Symbol(util.inspect.custom)", "Symbol(nodejs.util.inspect.custom)"];
      return new Proxy(s, {
        get: function(E, h) {
          var u;
          if (g.includes(h) || c.includes(h.toString()) || a.includes(h))
            return E[h];
          var B = E.hasOwnProperty(h);
          if (!B)
            throw typeof n == "object" && (!((u = n == null ? void 0 : n.hasOwnProperty) === null || u === void 0) && u.call(n, h)) ? new ReferenceError("[envalid] Env var ".concat(h, " was accessed but not validated. This var is set in the environment; please add an envalid validator for it.")) : new ReferenceError("[envalid] Env var not found: ".concat(h));
          return E[h];
        },
        set: function(E, h) {
          throw new TypeError("[envalid] Attempt to mutate environment value: ".concat(h));
        }
      });
    };
    t.strictProxyMiddleware = e;
    var A = function(s, n) {
      var i = s.NODE_ENV || n.NODE_ENV, o = !i || i === "production";
      return Object.defineProperties(s, {
        isDevelopment: { value: i === "development" },
        isDev: { value: i === "development" },
        isProduction: { value: o },
        isProd: { value: o },
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
var rh;
function Sd() {
  if (rh)
    return Vt;
  rh = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.testOnly = Vt.customCleanEnv = Vt.cleanEnv = void 0;
  var t = kd(), e = OQ();
  function A(n, i, o) {
    o === void 0 && (o = {});
    var a = (0, t.getSanitizedEnv)(n, i, o);
    return Object.freeze((0, e.applyDefaultMiddleware)(a, n));
  }
  Vt.cleanEnv = A;
  function r(n, i, o, a) {
    a === void 0 && (a = {});
    var g = (0, t.getSanitizedEnv)(n, i, a);
    return Object.freeze(o(g, n));
  }
  Vt.customCleanEnv = r;
  var s = function(n) {
    return process.env.NODE_ENV === "test" ? n : t.testOnlySymbol;
  };
  return Vt.testOnly = s, Vt;
}
var Va = {}, sh;
function Fd() {
  return sh || (sh = 1, Object.defineProperty(Va, "__esModule", { value: !0 })), Va;
}
var rA = {}, Wt = {}, nh;
function _Q() {
  if (nh)
    return Wt;
  nh = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.makeStructuredValidator = Wt.makeExactValidator = Wt.makeValidator = void 0;
  var t = Il, e = function(n) {
    return function(i) {
      return t.__assign(t.__assign({}, i), { _parse: n });
    };
  }, A = function(n) {
    return e(n);
  };
  Wt.makeValidator = A;
  var r = function(n) {
    return e(n);
  };
  Wt.makeExactValidator = r;
  var s = function(n) {
    return e(n);
  };
  return Wt.makeStructuredValidator = s, Wt;
}
var ih;
function Nd() {
  if (ih)
    return rA;
  ih = 1, Object.defineProperty(rA, "__esModule", { value: !0 }), rA.json = rA.url = rA.port = rA.host = rA.email = rA.str = rA.num = rA.bool = void 0;
  var t = Qa(), e = _Q(), A = function(o) {
    if (!o.length)
      return !1;
    for (var a = o.split("."), g = void 0, c = 0; c < a.length; c++)
      if (g = a[c], !/^[a-z\u00a1-\uffff0-9-]+$/i.test(g) || /[\uff01-\uff5e]/.test(g) || g[0] === "-" || g[g.length - 1] === "-")
        return !1;
    return !0;
  }, r = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/, s = /([a-f0-9]+:+)+[a-f0-9]+/, n = function(o) {
    return o.length ? r.test(o) || s.test(o) : !1;
  }, i = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return rA.bool = (0, e.makeExactValidator)(function(o) {
    switch (o) {
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
        throw new t.EnvError('Invalid bool input: "'.concat(o, '"'));
    }
  }), rA.num = (0, e.makeValidator)(function(o) {
    var a = parseFloat(o);
    if (Number.isNaN(a))
      throw new t.EnvError('Invalid number input: "'.concat(o, '"'));
    return a;
  }), rA.str = (0, e.makeValidator)(function(o) {
    if (typeof o == "string")
      return o;
    throw new t.EnvError('Not a string: "'.concat(o, '"'));
  }), rA.email = (0, e.makeValidator)(function(o) {
    if (i.test(o))
      return o;
    throw new t.EnvError('Invalid email address: "'.concat(o, '"'));
  }), rA.host = (0, e.makeValidator)(function(o) {
    if (!A(o) && !n(o))
      throw new t.EnvError('Invalid host (domain or ip): "'.concat(o, '"'));
    return o;
  }), rA.port = (0, e.makeValidator)(function(o) {
    var a = +o;
    if (Number.isNaN(a) || "".concat(a) !== "".concat(o) || a % 1 !== 0 || a < 1 || a > 65535)
      throw new t.EnvError('Invalid port input: "'.concat(o, '"'));
    return a;
  }), rA.url = (0, e.makeValidator)(function(o) {
    try {
      return new URL(o), o;
    } catch {
      throw new t.EnvError('Invalid url: "'.concat(o, '"'));
    }
  }), rA.json = (0, e.makeStructuredValidator)(function(o) {
    try {
      return JSON.parse(o);
    } catch {
      throw new t.EnvError('Invalid json: "'.concat(o, '"'));
    }
  }), rA;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.makeValidator = t.makeExactValidator = void 0;
  var e = Il;
  e.__exportStar(Sd(), t), e.__exportStar(Qa(), t), e.__exportStar(OQ(), t), e.__exportStar(Fd(), t), e.__exportStar(Nd(), t), e.__exportStar(JQ(), t);
  var A = _Q();
  Object.defineProperty(t, "makeExactValidator", { enumerable: !0, get: function() {
    return A.makeExactValidator;
  } }), Object.defineProperty(t, "makeValidator", { enumerable: !0, get: function() {
    return A.makeValidator;
  } });
})(Cl);
var Wa = {}, on = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.toCommandProperties = xr.toCommandValue = void 0;
function Ud(t) {
  return t == null ? "" : typeof t == "string" || t instanceof String ? t : JSON.stringify(t);
}
xr.toCommandValue = Ud;
function Td(t) {
  return Object.keys(t).length ? {
    title: t.title,
    file: t.file,
    line: t.startLine,
    endLine: t.endLine,
    col: t.startColumn,
    endColumn: t.endColumn
  } : {};
}
xr.toCommandProperties = Td;
var Ld = le && le.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), vd = le && le.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), Md = le && le.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && Ld(e, t, A);
  return vd(e, t), e;
};
Object.defineProperty(on, "__esModule", { value: !0 });
on.issue = on.issueCommand = void 0;
const Gd = Md(xi), HQ = xr;
function PQ(t, e, A) {
  const r = new xd(t, e, A);
  process.stdout.write(r.toString() + Gd.EOL);
}
on.issueCommand = PQ;
function Yd(t, e = "") {
  PQ(t, {}, e);
}
on.issue = Yd;
const oh = "::";
class xd {
  constructor(e, A, r) {
    e || (e = "missing.command"), this.command = e, this.properties = A, this.message = r;
  }
  toString() {
    let e = oh + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      e += " ";
      let A = !0;
      for (const r in this.properties)
        if (this.properties.hasOwnProperty(r)) {
          const s = this.properties[r];
          s && (A ? A = !1 : e += ",", e += `${r}=${Od(s)}`);
        }
    }
    return e += `${oh}${Jd(this.message)}`, e;
  }
}
function Jd(t) {
  return HQ.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function Od(t) {
  return HQ.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var an = {}, Ki, _d = new Uint8Array(16);
function VQ() {
  if (!Ki && (Ki = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Ki))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ki(_d);
}
const Hd = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Ca(t) {
  return typeof t == "string" && Hd.test(t);
}
var IA = [];
for (var qa = 0; qa < 256; ++qa)
  IA.push((qa + 256).toString(16).substr(1));
function Ba(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, A = (IA[t[e + 0]] + IA[t[e + 1]] + IA[t[e + 2]] + IA[t[e + 3]] + "-" + IA[t[e + 4]] + IA[t[e + 5]] + "-" + IA[t[e + 6]] + IA[t[e + 7]] + "-" + IA[t[e + 8]] + IA[t[e + 9]] + "-" + IA[t[e + 10]] + IA[t[e + 11]] + IA[t[e + 12]] + IA[t[e + 13]] + IA[t[e + 14]] + IA[t[e + 15]]).toLowerCase();
  if (!Ca(A))
    throw TypeError("Stringified UUID is invalid");
  return A;
}
var ah, ja, za = 0, Za = 0;
function Pd(t, e, A) {
  var r = e && A || 0, s = e || new Array(16);
  t = t || {};
  var n = t.node || ah, i = t.clockseq !== void 0 ? t.clockseq : ja;
  if (n == null || i == null) {
    var o = t.random || (t.rng || VQ)();
    n == null && (n = ah = [o[0] | 1, o[1], o[2], o[3], o[4], o[5]]), i == null && (i = ja = (o[6] << 8 | o[7]) & 16383);
  }
  var a = t.msecs !== void 0 ? t.msecs : Date.now(), g = t.nsecs !== void 0 ? t.nsecs : Za + 1, c = a - za + (g - Za) / 1e4;
  if (c < 0 && t.clockseq === void 0 && (i = i + 1 & 16383), (c < 0 || a > za) && t.nsecs === void 0 && (g = 0), g >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  za = a, Za = g, ja = i, a += 122192928e5;
  var E = ((a & 268435455) * 1e4 + g) % 4294967296;
  s[r++] = E >>> 24 & 255, s[r++] = E >>> 16 & 255, s[r++] = E >>> 8 & 255, s[r++] = E & 255;
  var h = a / 4294967296 * 1e4 & 268435455;
  s[r++] = h >>> 8 & 255, s[r++] = h & 255, s[r++] = h >>> 24 & 15 | 16, s[r++] = h >>> 16 & 255, s[r++] = i >>> 8 | 128, s[r++] = i & 255;
  for (var u = 0; u < 6; ++u)
    s[r + u] = n[u];
  return e || Ba(s);
}
function WQ(t) {
  if (!Ca(t))
    throw TypeError("Invalid UUID");
  var e, A = new Uint8Array(16);
  return A[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, A[1] = e >>> 16 & 255, A[2] = e >>> 8 & 255, A[3] = e & 255, A[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, A[5] = e & 255, A[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, A[7] = e & 255, A[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, A[9] = e & 255, A[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, A[11] = e / 4294967296 & 255, A[12] = e >>> 24 & 255, A[13] = e >>> 16 & 255, A[14] = e >>> 8 & 255, A[15] = e & 255, A;
}
function Vd(t) {
  t = unescape(encodeURIComponent(t));
  for (var e = [], A = 0; A < t.length; ++A)
    e.push(t.charCodeAt(A));
  return e;
}
var Wd = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", qd = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function qQ(t, e, A) {
  function r(s, n, i, o) {
    if (typeof s == "string" && (s = Vd(s)), typeof n == "string" && (n = WQ(n)), n.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var a = new Uint8Array(16 + s.length);
    if (a.set(n), a.set(s, n.length), a = A(a), a[6] = a[6] & 15 | e, a[8] = a[8] & 63 | 128, i) {
      o = o || 0;
      for (var g = 0; g < 16; ++g)
        i[o + g] = a[g];
      return i;
    }
    return Ba(a);
  }
  try {
    r.name = t;
  } catch {
  }
  return r.DNS = Wd, r.URL = qd, r;
}
function jd(t) {
  if (typeof t == "string") {
    var e = unescape(encodeURIComponent(t));
    t = new Uint8Array(e.length);
    for (var A = 0; A < e.length; ++A)
      t[A] = e.charCodeAt(A);
  }
  return zd(Zd($d(t), t.length * 8));
}
function zd(t) {
  for (var e = [], A = t.length * 32, r = "0123456789abcdef", s = 0; s < A; s += 8) {
    var n = t[s >> 5] >>> s % 32 & 255, i = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(n & 15), 16);
    e.push(i);
  }
  return e;
}
function jQ(t) {
  return (t + 64 >>> 9 << 4) + 14 + 1;
}
function Zd(t, e) {
  t[e >> 5] |= 128 << e % 32, t[jQ(e) - 1] = e;
  for (var A = 1732584193, r = -271733879, s = -1732584194, n = 271733878, i = 0; i < t.length; i += 16) {
    var o = A, a = r, g = s, c = n;
    A = wA(A, r, s, n, t[i], 7, -680876936), n = wA(n, A, r, s, t[i + 1], 12, -389564586), s = wA(s, n, A, r, t[i + 2], 17, 606105819), r = wA(r, s, n, A, t[i + 3], 22, -1044525330), A = wA(A, r, s, n, t[i + 4], 7, -176418897), n = wA(n, A, r, s, t[i + 5], 12, 1200080426), s = wA(s, n, A, r, t[i + 6], 17, -1473231341), r = wA(r, s, n, A, t[i + 7], 22, -45705983), A = wA(A, r, s, n, t[i + 8], 7, 1770035416), n = wA(n, A, r, s, t[i + 9], 12, -1958414417), s = wA(s, n, A, r, t[i + 10], 17, -42063), r = wA(r, s, n, A, t[i + 11], 22, -1990404162), A = wA(A, r, s, n, t[i + 12], 7, 1804603682), n = wA(n, A, r, s, t[i + 13], 12, -40341101), s = wA(s, n, A, r, t[i + 14], 17, -1502002290), r = wA(r, s, n, A, t[i + 15], 22, 1236535329), A = yA(A, r, s, n, t[i + 1], 5, -165796510), n = yA(n, A, r, s, t[i + 6], 9, -1069501632), s = yA(s, n, A, r, t[i + 11], 14, 643717713), r = yA(r, s, n, A, t[i], 20, -373897302), A = yA(A, r, s, n, t[i + 5], 5, -701558691), n = yA(n, A, r, s, t[i + 10], 9, 38016083), s = yA(s, n, A, r, t[i + 15], 14, -660478335), r = yA(r, s, n, A, t[i + 4], 20, -405537848), A = yA(A, r, s, n, t[i + 9], 5, 568446438), n = yA(n, A, r, s, t[i + 14], 9, -1019803690), s = yA(s, n, A, r, t[i + 3], 14, -187363961), r = yA(r, s, n, A, t[i + 8], 20, 1163531501), A = yA(A, r, s, n, t[i + 13], 5, -1444681467), n = yA(n, A, r, s, t[i + 2], 9, -51403784), s = yA(s, n, A, r, t[i + 7], 14, 1735328473), r = yA(r, s, n, A, t[i + 12], 20, -1926607734), A = RA(A, r, s, n, t[i + 5], 4, -378558), n = RA(n, A, r, s, t[i + 8], 11, -2022574463), s = RA(s, n, A, r, t[i + 11], 16, 1839030562), r = RA(r, s, n, A, t[i + 14], 23, -35309556), A = RA(A, r, s, n, t[i + 1], 4, -1530992060), n = RA(n, A, r, s, t[i + 4], 11, 1272893353), s = RA(s, n, A, r, t[i + 7], 16, -155497632), r = RA(r, s, n, A, t[i + 10], 23, -1094730640), A = RA(A, r, s, n, t[i + 13], 4, 681279174), n = RA(n, A, r, s, t[i], 11, -358537222), s = RA(s, n, A, r, t[i + 3], 16, -722521979), r = RA(r, s, n, A, t[i + 6], 23, 76029189), A = RA(A, r, s, n, t[i + 9], 4, -640364487), n = RA(n, A, r, s, t[i + 12], 11, -421815835), s = RA(s, n, A, r, t[i + 15], 16, 530742520), r = RA(r, s, n, A, t[i + 2], 23, -995338651), A = DA(A, r, s, n, t[i], 6, -198630844), n = DA(n, A, r, s, t[i + 7], 10, 1126891415), s = DA(s, n, A, r, t[i + 14], 15, -1416354905), r = DA(r, s, n, A, t[i + 5], 21, -57434055), A = DA(A, r, s, n, t[i + 12], 6, 1700485571), n = DA(n, A, r, s, t[i + 3], 10, -1894986606), s = DA(s, n, A, r, t[i + 10], 15, -1051523), r = DA(r, s, n, A, t[i + 1], 21, -2054922799), A = DA(A, r, s, n, t[i + 8], 6, 1873313359), n = DA(n, A, r, s, t[i + 15], 10, -30611744), s = DA(s, n, A, r, t[i + 6], 15, -1560198380), r = DA(r, s, n, A, t[i + 13], 21, 1309151649), A = DA(A, r, s, n, t[i + 4], 6, -145523070), n = DA(n, A, r, s, t[i + 11], 10, -1120210379), s = DA(s, n, A, r, t[i + 2], 15, 718787259), r = DA(r, s, n, A, t[i + 9], 21, -343485551), A = Lr(A, o), r = Lr(r, a), s = Lr(s, g), n = Lr(n, c);
  }
  return [A, r, s, n];
}
function $d(t) {
  if (t.length === 0)
    return [];
  for (var e = t.length * 8, A = new Uint32Array(jQ(e)), r = 0; r < e; r += 8)
    A[r >> 5] |= (t[r / 8] & 255) << r % 32;
  return A;
}
function Lr(t, e) {
  var A = (t & 65535) + (e & 65535), r = (t >> 16) + (e >> 16) + (A >> 16);
  return r << 16 | A & 65535;
}
function Xd(t, e) {
  return t << e | t >>> 32 - e;
}
function Ia(t, e, A, r, s, n) {
  return Lr(Xd(Lr(Lr(e, t), Lr(r, n)), s), A);
}
function wA(t, e, A, r, s, n, i) {
  return Ia(e & A | ~e & r, t, e, s, n, i);
}
function yA(t, e, A, r, s, n, i) {
  return Ia(e & r | A & ~r, t, e, s, n, i);
}
function RA(t, e, A, r, s, n, i) {
  return Ia(e ^ A ^ r, t, e, s, n, i);
}
function DA(t, e, A, r, s, n, i) {
  return Ia(A ^ (e | ~r), t, e, s, n, i);
}
var Kd = qQ("v3", 48, jd);
const ef = Kd;
function Af(t, e, A) {
  t = t || {};
  var r = t.random || (t.rng || VQ)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    A = A || 0;
    for (var s = 0; s < 16; ++s)
      e[A + s] = r[s];
    return e;
  }
  return Ba(r);
}
function tf(t, e, A, r) {
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
function $a(t, e) {
  return t << e | t >>> 32 - e;
}
function rf(t) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782], A = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof t == "string") {
    var r = unescape(encodeURIComponent(t));
    t = [];
    for (var s = 0; s < r.length; ++s)
      t.push(r.charCodeAt(s));
  } else
    Array.isArray(t) || (t = Array.prototype.slice.call(t));
  t.push(128);
  for (var n = t.length / 4 + 2, i = Math.ceil(n / 16), o = new Array(i), a = 0; a < i; ++a) {
    for (var g = new Uint32Array(16), c = 0; c < 16; ++c)
      g[c] = t[a * 64 + c * 4] << 24 | t[a * 64 + c * 4 + 1] << 16 | t[a * 64 + c * 4 + 2] << 8 | t[a * 64 + c * 4 + 3];
    o[a] = g;
  }
  o[i - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32), o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = (t.length - 1) * 8 & 4294967295;
  for (var E = 0; E < i; ++E) {
    for (var h = new Uint32Array(80), u = 0; u < 16; ++u)
      h[u] = o[E][u];
    for (var B = 16; B < 80; ++B)
      h[B] = $a(h[B - 3] ^ h[B - 8] ^ h[B - 14] ^ h[B - 16], 1);
    for (var Q = A[0], I = A[1], f = A[2], C = A[3], d = A[4], w = 0; w < 80; ++w) {
      var p = Math.floor(w / 20), m = $a(Q, 5) + tf(p, I, f, C) + d + e[p] + h[w] >>> 0;
      d = C, C = f, f = $a(I, 30) >>> 0, I = Q, Q = m;
    }
    A[0] = A[0] + Q >>> 0, A[1] = A[1] + I >>> 0, A[2] = A[2] + f >>> 0, A[3] = A[3] + C >>> 0, A[4] = A[4] + d >>> 0;
  }
  return [A[0] >> 24 & 255, A[0] >> 16 & 255, A[0] >> 8 & 255, A[0] & 255, A[1] >> 24 & 255, A[1] >> 16 & 255, A[1] >> 8 & 255, A[1] & 255, A[2] >> 24 & 255, A[2] >> 16 & 255, A[2] >> 8 & 255, A[2] & 255, A[3] >> 24 & 255, A[3] >> 16 & 255, A[3] >> 8 & 255, A[3] & 255, A[4] >> 24 & 255, A[4] >> 16 & 255, A[4] >> 8 & 255, A[4] & 255];
}
var sf = qQ("v5", 80, rf);
const nf = sf, of = "00000000-0000-0000-0000-000000000000";
function af(t) {
  if (!Ca(t))
    throw TypeError("Invalid UUID");
  return parseInt(t.substr(14, 1), 16);
}
const cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: of,
  parse: WQ,
  stringify: Ba,
  v1: Pd,
  v3: ef,
  v4: Af,
  v5: nf,
  validate: Ca,
  version: af
}, Symbol.toStringTag, { value: "Module" })), gf = /* @__PURE__ */ BQ(cf);
var lf = le && le.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), hf = le && le.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), zQ = le && le.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && lf(e, t, A);
  return hf(e, t), e;
};
Object.defineProperty(an, "__esModule", { value: !0 });
an.prepareKeyValueMessage = an.issueFileCommand = void 0;
const ch = zQ(oQ), Mg = zQ(xi), Ef = gf, ZQ = xr;
function uf(t, e) {
  const A = process.env[`GITHUB_${t}`];
  if (!A)
    throw new Error(`Unable to find environment variable for file command ${t}`);
  if (!ch.existsSync(A))
    throw new Error(`Missing file at path: ${A}`);
  ch.appendFileSync(A, `${ZQ.toCommandValue(e)}${Mg.EOL}`, {
    encoding: "utf8"
  });
}
an.issueFileCommand = uf;
function Qf(t, e) {
  const A = `ghadelimiter_${Ef.v4()}`, r = ZQ.toCommandValue(e);
  if (t.includes(A))
    throw new Error(`Unexpected input: name should not contain the delimiter "${A}"`);
  if (r.includes(A))
    throw new Error(`Unexpected input: value should not contain the delimiter "${A}"`);
  return `${t}<<${A}${Mg.EOL}${r}${Mg.EOL}${A}`;
}
an.prepareKeyValueMessage = Qf;
var yn = {}, CA = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.checkBypass = cn.getProxyUrl = void 0;
function Cf(t) {
  const e = t.protocol === "https:";
  if ($Q(t))
    return;
  const A = e ? process.env.https_proxy || process.env.HTTPS_PROXY : process.env.http_proxy || process.env.HTTP_PROXY;
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
cn.getProxyUrl = Cf;
function $Q(t) {
  if (!t.hostname)
    return !1;
  const e = t.hostname;
  if (Bf(e))
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
cn.checkBypass = $Q;
function Bf(t) {
  const e = t.toLowerCase();
  return e === "localhost" || e.startsWith("127.") || e.startsWith("[::1]") || e.startsWith("[0:0:0:0:0:0:0:1]");
}
var Bn = {}, If = gQ, dl = Qn, XQ = cQ, df = Ji, ff = Ot;
Bn.httpOverHttp = pf;
Bn.httpsOverHttp = mf;
Bn.httpOverHttps = wf;
Bn.httpsOverHttps = yf;
function pf(t) {
  var e = new gr(t);
  return e.request = dl.request, e;
}
function mf(t) {
  var e = new gr(t);
  return e.request = dl.request, e.createSocket = KQ, e.defaultPort = 443, e;
}
function wf(t) {
  var e = new gr(t);
  return e.request = XQ.request, e;
}
function yf(t) {
  var e = new gr(t);
  return e.request = XQ.request, e.createSocket = KQ, e.defaultPort = 443, e;
}
function gr(t) {
  var e = this;
  e.options = t || {}, e.proxyOptions = e.options.proxy || {}, e.maxSockets = e.options.maxSockets || dl.Agent.defaultMaxSockets, e.requests = [], e.sockets = [], e.on("free", function(r, s, n, i) {
    for (var o = eC(s, n, i), a = 0, g = e.requests.length; a < g; ++a) {
      var c = e.requests[a];
      if (c.host === o.host && c.port === o.port) {
        e.requests.splice(a, 1), c.request.onSocket(r);
        return;
      }
    }
    r.destroy(), e.removeSocket(r);
  });
}
ff.inherits(gr, df.EventEmitter);
gr.prototype.addRequest = function(e, A, r, s) {
  var n = this, i = fl({ request: e }, n.options, eC(A, r, s));
  if (n.sockets.length >= this.maxSockets) {
    n.requests.push(i);
    return;
  }
  n.createSocket(i, function(o) {
    o.on("free", a), o.on("close", g), o.on("agentRemove", g), e.onSocket(o);
    function a() {
      n.emit("free", o, i);
    }
    function g(c) {
      n.removeSocket(o), o.removeListener("free", a), o.removeListener("close", g), o.removeListener("agentRemove", g);
    }
  });
};
gr.prototype.createSocket = function(e, A) {
  var r = this, s = {};
  r.sockets.push(s);
  var n = fl({}, r.proxyOptions, {
    method: "CONNECT",
    path: e.host + ":" + e.port,
    agent: !1,
    headers: {
      host: e.host + ":" + e.port
    }
  });
  e.localAddress && (n.localAddress = e.localAddress), n.proxyAuth && (n.headers = n.headers || {}, n.headers["Proxy-Authorization"] = "Basic " + new Buffer(n.proxyAuth).toString("base64")), wr("making CONNECT request");
  var i = r.request(n);
  i.useChunkedEncodingByDefault = !1, i.once("response", o), i.once("upgrade", a), i.once("connect", g), i.once("error", c), i.end();
  function o(E) {
    E.upgrade = !0;
  }
  function a(E, h, u) {
    process.nextTick(function() {
      g(E, h, u);
    });
  }
  function g(E, h, u) {
    if (i.removeAllListeners(), h.removeAllListeners(), E.statusCode !== 200) {
      wr(
        "tunneling socket could not be established, statusCode=%d",
        E.statusCode
      ), h.destroy();
      var B = new Error("tunneling socket could not be established, statusCode=" + E.statusCode);
      B.code = "ECONNRESET", e.request.emit("error", B), r.removeSocket(s);
      return;
    }
    if (u.length > 0) {
      wr("got illegal response body from proxy"), h.destroy();
      var B = new Error("got illegal response body from proxy");
      B.code = "ECONNRESET", e.request.emit("error", B), r.removeSocket(s);
      return;
    }
    return wr("tunneling connection has established"), r.sockets[r.sockets.indexOf(s)] = h, A(h);
  }
  function c(E) {
    i.removeAllListeners(), wr(
      `tunneling socket could not be established, cause=%s
`,
      E.message,
      E.stack
    );
    var h = new Error("tunneling socket could not be established, cause=" + E.message);
    h.code = "ECONNRESET", e.request.emit("error", h), r.removeSocket(s);
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
function KQ(t, e) {
  var A = this;
  gr.prototype.createSocket.call(A, t, function(r) {
    var s = t.request.getHeader("host"), n = fl({}, A.options, {
      socket: r,
      servername: s ? s.replace(/:.*$/, "") : t.host
    }), i = If.connect(0, n);
    A.sockets[A.sockets.indexOf(r)] = i, e(i);
  });
}
function eC(t, e, A) {
  return typeof t == "string" ? {
    host: t,
    port: e,
    localAddress: A
  } : t;
}
function fl(t) {
  for (var e = 1, A = arguments.length; e < A; ++e) {
    var r = arguments[e];
    if (typeof r == "object")
      for (var s = Object.keys(r), n = 0, i = s.length; n < i; ++n) {
        var o = s[n];
        r[o] !== void 0 && (t[o] = r[o]);
      }
  }
  return t;
}
var wr;
process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? wr = function() {
  var t = Array.prototype.slice.call(arguments);
  typeof t[0] == "string" ? t[0] = "TUNNEL: " + t[0] : t.unshift("TUNNEL:"), console.error.apply(console, t);
} : wr = function() {
};
Bn.debug = wr;
var Rf = Bn, ue = {}, ve = {
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
  kHTTPConnVersion: Symbol("http connection version"),
  kRetryHandlerDefaultRetry: Symbol("retry agent default retry"),
  kConstruct: Symbol("constructable")
};
let aA = class extends Error {
  constructor(e) {
    super(e), this.name = "UndiciError", this.code = "UND_ERR";
  }
}, Df = class AC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, AC), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
  }
}, bf = class tC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, tC), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
  }
}, kf = class rC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, rC), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
  }
}, Sf = class sC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, sC), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
  }
}, Ff = class nC extends aA {
  constructor(e, A, r, s) {
    super(e), Error.captureStackTrace(this, nC), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = s, this.status = A, this.statusCode = A, this.headers = r;
  }
}, Nf = class iC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, iC), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
  }
}, Uf = class oC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, oC), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
  }
}, Tf = class aC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, aC), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
  }
}, Lf = class cC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, cC), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
  }
}, vf = class gC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, gC), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
  }
}, Mf = class lC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, lC), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
  }
}, Gf = class hC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, hC), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
  }
}, Yf = class EC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, EC), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
  }
}, xf = class uC extends aA {
  constructor(e, A) {
    super(e), Error.captureStackTrace(this, uC), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = A;
  }
}, QC = class CC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, CC), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
  }
}, Jf = class extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, QC), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
  }
}, Of = class BC extends Error {
  constructor(e, A, r) {
    super(e), Error.captureStackTrace(this, BC), this.name = "HTTPParserError", this.code = A ? `HPE_${A}` : void 0, this.data = r ? r.toString() : void 0;
  }
}, _f = class IC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, IC), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
  }
}, Hf = class dC extends aA {
  constructor(e, A, { headers: r, data: s }) {
    super(e), Error.captureStackTrace(this, dC), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = A, this.data = s, this.headers = r;
  }
};
var be = {
  HTTPParserError: Of,
  UndiciError: aA,
  HeadersTimeoutError: bf,
  HeadersOverflowError: kf,
  BodyTimeoutError: Sf,
  RequestContentLengthMismatchError: vf,
  ConnectTimeoutError: Df,
  ResponseStatusCodeError: Ff,
  InvalidArgumentError: Nf,
  InvalidReturnValueError: Uf,
  RequestAbortedError: Tf,
  ClientDestroyedError: Gf,
  ClientClosedError: Yf,
  InformationalError: Lf,
  SocketError: xf,
  NotSupportedError: QC,
  ResponseContentLengthMismatchError: Mf,
  BalancedPoolMissingUpstreamError: Jf,
  ResponseExceededMaxSizeError: _f,
  RequestRetryError: Hf
};
const fC = Ze, { kDestroyed: pC, kBodyUsed: gh } = ve, { IncomingMessage: Pf } = Qn, gn = _t, Vf = El, { InvalidArgumentError: dA } = be, { Blob: lh } = ps, zo = Ot, { stringify: Wf } = cd, [Xa, hh] = process.versions.node.split(".").map((t) => Number(t));
function qf() {
}
function pl(t) {
  return t && typeof t == "object" && typeof t.pipe == "function" && typeof t.on == "function";
}
function mC(t) {
  return lh && t instanceof lh || t && typeof t == "object" && (typeof t.stream == "function" || typeof t.arrayBuffer == "function") && /^(Blob|File)$/.test(t[Symbol.toStringTag]);
}
function jf(t, e) {
  if (t.includes("?") || t.includes("#"))
    throw new Error('Query params cannot be passed when url already contains "?" or "#".');
  const A = Wf(e);
  return A && (t += "?" + A), t;
}
function wC(t) {
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
function zf(t) {
  if (t = wC(t), t.pathname !== "/" || t.search || t.hash)
    throw new dA("invalid url");
  return t;
}
function Zf(t) {
  if (t[0] === "[") {
    const A = t.indexOf("]");
    return fC(A !== -1), t.substring(1, A);
  }
  const e = t.indexOf(":");
  return e === -1 ? t : t.substring(0, e);
}
function $f(t) {
  if (!t)
    return null;
  fC.strictEqual(typeof t, "string");
  const e = Zf(t);
  return Vf.isIP(e) ? "" : e;
}
function Xf(t) {
  return JSON.parse(JSON.stringify(t));
}
function Kf(t) {
  return t != null && typeof t[Symbol.asyncIterator] == "function";
}
function ep(t) {
  return t != null && (typeof t[Symbol.iterator] == "function" || typeof t[Symbol.asyncIterator] == "function");
}
function Ap(t) {
  if (t == null)
    return 0;
  if (pl(t)) {
    const e = t._readableState;
    return e && e.objectMode === !1 && e.ended === !0 && Number.isFinite(e.length) ? e.length : null;
  } else {
    if (mC(t))
      return t.size != null ? t.size : null;
    if (RC(t))
      return t.byteLength;
  }
  return null;
}
function ml(t) {
  return !t || !!(t.destroyed || t[pC]);
}
function yC(t) {
  const e = t && t._readableState;
  return ml(t) && e && !e.endEmitted;
}
function tp(t, e) {
  t == null || !pl(t) || ml(t) || (typeof t.destroy == "function" ? (Object.getPrototypeOf(t).constructor === Pf && (t.socket = null), t.destroy(e)) : e && process.nextTick((A, r) => {
    A.emit("error", r);
  }, t, e), t.destroyed !== !0 && (t[pC] = !0));
}
const rp = /timeout=(\d+)/;
function sp(t) {
  const e = t.toString().match(rp);
  return e ? parseInt(e[1], 10) * 1e3 : null;
}
function np(t, e = {}) {
  if (!Array.isArray(t))
    return t;
  for (let A = 0; A < t.length; A += 2) {
    const r = t[A].toString().toLowerCase();
    let s = e[r];
    s ? (Array.isArray(s) || (s = [s], e[r] = s), s.push(t[A + 1].toString("utf8"))) : Array.isArray(t[A + 1]) ? e[r] = t[A + 1].map((n) => n.toString("utf8")) : e[r] = t[A + 1].toString("utf8");
  }
  return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
}
function ip(t) {
  const e = [];
  let A = !1, r = -1;
  for (let s = 0; s < t.length; s += 2) {
    const n = t[s + 0].toString(), i = t[s + 1].toString("utf8");
    n.length === 14 && (n === "content-length" || n.toLowerCase() === "content-length") ? (e.push(n, i), A = !0) : n.length === 19 && (n === "content-disposition" || n.toLowerCase() === "content-disposition") ? r = e.push(n, i) - 1 : e.push(n, i);
  }
  return A && r !== -1 && (e[r] = Buffer.from(e[r]).toString("latin1")), e;
}
function RC(t) {
  return t instanceof Uint8Array || Buffer.isBuffer(t);
}
function op(t, e, A) {
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
function ap(t) {
  return !!(t && (gn.isDisturbed ? gn.isDisturbed(t) || t[gh] : t[gh] || t.readableDidRead || t._readableState && t._readableState.dataEmitted || yC(t)));
}
function cp(t) {
  return !!(t && (gn.isErrored ? gn.isErrored(t) : /state: 'errored'/.test(
    zo.inspect(t)
  )));
}
function gp(t) {
  return !!(t && (gn.isReadable ? gn.isReadable(t) : /state: 'readable'/.test(
    zo.inspect(t)
  )));
}
function lp(t) {
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
async function* hp(t) {
  for await (const e of t)
    yield Buffer.isBuffer(e) ? e : Buffer.from(e);
}
let Rn;
function Ep(t) {
  if (Rn || (Rn = Yr.ReadableStream), Rn.from)
    return Rn.from(hp(t));
  let e;
  return new Rn(
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
function up(t) {
  return t && typeof t == "object" && typeof t.append == "function" && typeof t.delete == "function" && typeof t.get == "function" && typeof t.getAll == "function" && typeof t.has == "function" && typeof t.set == "function" && t[Symbol.toStringTag] === "FormData";
}
function Qp(t) {
  if (t) {
    if (typeof t.throwIfAborted == "function")
      t.throwIfAborted();
    else if (t.aborted) {
      const e = new Error("The operation was aborted");
      throw e.name = "AbortError", e;
    }
  }
}
function Cp(t, e) {
  return "addEventListener" in t ? (t.addEventListener("abort", e, { once: !0 }), () => t.removeEventListener("abort", e)) : (t.addListener("abort", e), () => t.removeListener("abort", e));
}
const Bp = !!String.prototype.toWellFormed;
function Ip(t) {
  return Bp ? `${t}`.toWellFormed() : zo.toUSVString ? zo.toUSVString(t) : `${t}`;
}
function dp(t) {
  if (t == null || t === "")
    return { start: 0, end: null, size: null };
  const e = t ? t.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
  return e ? {
    start: parseInt(e[1]),
    end: e[2] ? parseInt(e[2]) : null,
    size: e[3] ? parseInt(e[3]) : null
  } : null;
}
const DC = /* @__PURE__ */ Object.create(null);
DC.enumerable = !0;
var fe = {
  kEnumerableProperty: DC,
  nop: qf,
  isDisturbed: ap,
  isErrored: cp,
  isReadable: gp,
  toUSVString: Ip,
  isReadableAborted: yC,
  isBlobLike: mC,
  parseOrigin: zf,
  parseURL: wC,
  getServerName: $f,
  isStream: pl,
  isIterable: ep,
  isAsyncIterable: Kf,
  isDestroyed: ml,
  parseRawHeaders: ip,
  parseHeaders: np,
  parseKeepAliveTimeout: sp,
  destroy: tp,
  bodyLength: Ap,
  deepClone: Xf,
  ReadableStreamFrom: Ep,
  isBuffer: RC,
  validateHandler: op,
  getSocketInfo: lp,
  isFormDataLike: up,
  buildURL: jf,
  throwIfAborted: Qp,
  addAbortListener: Cp,
  parseRangeHeader: dp,
  nodeMajor: Xa,
  nodeMinor: hh,
  nodeHasAutoSelectFamily: Xa > 18 || Xa === 18 && hh >= 13,
  safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"]
};
let Ka = Date.now(), Br;
const pr = [];
function fp() {
  Ka = Date.now();
  let t = pr.length, e = 0;
  for (; e < t; ) {
    const A = pr[e];
    A.state === 0 ? A.state = Ka + A.delay : A.state > 0 && Ka >= A.state && (A.state = -1, A.callback(A.opaque)), A.state === -1 ? (A.state = -2, e !== t - 1 ? pr[e] = pr.pop() : pr.pop(), t -= 1) : e += 1;
  }
  pr.length > 0 && bC();
}
function bC() {
  Br && Br.refresh ? Br.refresh() : (clearTimeout(Br), Br = setTimeout(fp, 1e3), Br.unref && Br.unref());
}
class Eh {
  constructor(e, A, r) {
    this.callback = e, this.delay = A, this.opaque = r, this.state = -2, this.refresh();
  }
  refresh() {
    this.state === -2 && (pr.push(this), (!Br || pr.length === 1) && bC()), this.state = 0;
  }
  clear() {
    this.state = -1;
  }
}
var pp = {
  setTimeout(t, e, A) {
    return e < 1e3 ? setTimeout(t, e, A) : new Eh(t, e, A);
  },
  clearTimeout(t) {
    t instanceof Eh ? t.clear() : clearTimeout(t);
  }
}, Ds = { exports: {} }, ec, uh;
function kC() {
  if (uh)
    return ec;
  uh = 1;
  const t = lQ.EventEmitter, e = Cn.inherits;
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
    const s = r.length, n = this._needle, i = n.length, o = n[i - 1];
    let a = -this._lookbehind_size, g;
    if (a < 0) {
      for (; a < 0 && a <= s - i; ) {
        if (g = this._sbmh_lookup_char(r, a + i - 1), g === o && this._sbmh_memcmp(r, a, i - 1))
          return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = a + i;
        a += this._occ[g];
      }
      if (a < 0)
        for (; a < 0 && !this._sbmh_memcmp(r, a, s - a); )
          ++a;
      if (a >= 0)
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      else {
        const c = this._lookbehind_size + a;
        return c > 0 && this.emit("info", !1, this._lookbehind, 0, c), this._lookbehind.copy(
          this._lookbehind,
          0,
          c,
          this._lookbehind_size - c
        ), this._lookbehind_size -= c, r.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += s, this._bufpos = s, s;
      }
    }
    if (a += (a >= 0) * this._bufpos, r.indexOf(n, a) !== -1)
      return a = r.indexOf(n, a), ++this.matches, a > 0 ? this.emit("info", !0, r, this._bufpos, a) : this.emit("info", !0), this._bufpos = a + i;
    for (a = s - i; a < s && (r[a] !== n[0] || Buffer.compare(
      r.subarray(a, a + s - a),
      n.subarray(0, s - a)
    ) !== 0); )
      ++a;
    return a < s && (r.copy(this._lookbehind, 0, a, a + (s - a)), this._lookbehind_size = s - a), a > 0 && this.emit("info", !1, r, this._bufpos, a < s ? a : s), this._bufpos = s, s;
  }, A.prototype._sbmh_lookup_char = function(r, s) {
    return s < 0 ? this._lookbehind[this._lookbehind_size + s] : r[s];
  }, A.prototype._sbmh_memcmp = function(r, s, n) {
    for (var i = 0; i < n; ++i)
      if (this._sbmh_lookup_char(r, s + i) !== this._needle[i])
        return !1;
    return !0;
  }, ec = A, ec;
}
var Ac, Qh;
function mp() {
  if (Qh)
    return Ac;
  Qh = 1;
  const t = Cn.inherits, e = Ea.Readable;
  function A(r) {
    e.call(this, r);
  }
  return t(A, e), A.prototype._read = function(r) {
  }, Ac = A, Ac;
}
var tc, Ch;
function wl() {
  return Ch || (Ch = 1, tc = function(e, A, r) {
    if (!e || e[A] === void 0 || e[A] === null)
      return r;
    if (typeof e[A] != "number" || isNaN(e[A]))
      throw new TypeError("Limit " + A + " is not a valid number");
    return e[A];
  }), tc;
}
var rc, Bh;
function wp() {
  if (Bh)
    return rc;
  Bh = 1;
  const t = lQ.EventEmitter, e = Cn.inherits, A = wl(), r = kC(), s = Buffer.from(`\r
\r
`), n = /\r\n/g, i = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
  function o(a) {
    t.call(this), a = a || {};
    const g = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = A(a, "maxHeaderPairs", 2e3), this.maxHeaderSize = A(a, "maxHeaderSize", 80 * 1024), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new r(s), this.ss.on("info", function(c, E, h, u) {
      E && !g.maxed && (g.nread + u - h >= g.maxHeaderSize ? (u = g.maxHeaderSize - g.nread + h, g.nread = g.maxHeaderSize, g.maxed = !0) : g.nread += u - h, g.buffer += E.toString("binary", h, u)), c && g._finish();
    });
  }
  return e(o, t), o.prototype.push = function(a) {
    const g = this.ss.push(a);
    if (this.finished)
      return g;
  }, o.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
  }, o.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const a = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", a);
  }, o.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs)
      return;
    const a = this.buffer.split(n), g = a.length;
    let c, E;
    for (var h = 0; h < g; ++h) {
      if (a[h].length === 0)
        continue;
      if ((a[h][0] === "	" || a[h][0] === " ") && E) {
        this.header[E][this.header[E].length - 1] += a[h];
        continue;
      }
      const u = a[h].indexOf(":");
      if (u === -1 || u === 0)
        return;
      if (c = i.exec(a[h]), E = c[1].toLowerCase(), this.header[E] = this.header[E] || [], this.header[E].push(c[2] || ""), ++this.npairs === this.maxHeaderPairs)
        break;
    }
  }, rc = o, rc;
}
var sc, Ih;
function SC() {
  if (Ih)
    return sc;
  Ih = 1;
  const t = Ea.Writable, e = Cn.inherits, A = kC(), r = mp(), s = wp(), n = 45, i = Buffer.from("-"), o = Buffer.from(`\r
`), a = function() {
  };
  function g(c) {
    if (!(this instanceof g))
      return new g(c);
    if (t.call(this, c), !c || !c.headerFirst && typeof c.boundary != "string")
      throw new TypeError("Boundary required");
    typeof c.boundary == "string" ? this.setBoundary(c.boundary) : this._bparser = void 0, this._headerFirst = c.headerFirst, this._dashes = 0, this._parts = 0, this._finished = !1, this._realFinish = !1, this._isPreamble = !0, this._justMatched = !1, this._firstWrite = !0, this._inHeader = !0, this._part = void 0, this._cb = void 0, this._ignoreData = !1, this._partOpts = { highWaterMark: c.partHwm }, this._pause = !1;
    const E = this;
    this._hparser = new s(c), this._hparser.on("header", function(h) {
      E._inHeader = !1, E._part.emit("header", h);
    });
  }
  return e(g, t), g.prototype.emit = function(c) {
    if (c === "finish" && !this._realFinish) {
      if (!this._finished) {
        const E = this;
        process.nextTick(function() {
          if (E.emit("error", new Error("Unexpected end of multipart data")), E._part && !E._ignoreData) {
            const h = E._isPreamble ? "Preamble" : "Part";
            E._part.emit("error", new Error(h + " terminated early due to unexpected end of multipart data")), E._part.push(null), process.nextTick(function() {
              E._realFinish = !0, E.emit("finish"), E._realFinish = !1;
            });
            return;
          }
          E._realFinish = !0, E.emit("finish"), E._realFinish = !1;
        });
      }
    } else
      t.prototype.emit.apply(this, arguments);
  }, g.prototype._write = function(c, E, h) {
    if (!this._hparser && !this._bparser)
      return h();
    if (this._headerFirst && this._isPreamble) {
      this._part || (this._part = new r(this._partOpts), this.listenerCount("preamble") !== 0 ? this.emit("preamble", this._part) : this._ignore());
      const u = this._hparser.push(c);
      if (!this._inHeader && u !== void 0 && u < c.length)
        c = c.slice(u);
      else
        return h();
    }
    this._firstWrite && (this._bparser.push(o), this._firstWrite = !1), this._bparser.push(c), this._pause ? this._cb = h : h();
  }, g.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
  }, g.prototype.setBoundary = function(c) {
    const E = this;
    this._bparser = new A(`\r
--` + c), this._bparser.on("info", function(h, u, B, Q) {
      E._oninfo(h, u, B, Q);
    });
  }, g.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", a), this._part.resume());
  }, g.prototype._oninfo = function(c, E, h, u) {
    let B;
    const Q = this;
    let I = 0, f, C = !0;
    if (!this._part && this._justMatched && E) {
      for (; this._dashes < 2 && h + I < u; )
        if (E[h + I] === n)
          ++I, ++this._dashes;
        else {
          this._dashes && (B = i), this._dashes = 0;
          break;
        }
      if (this._dashes === 2 && (h + I < u && this.listenerCount("trailer") !== 0 && this.emit("trailer", E.slice(h + I, u)), this.reset(), this._finished = !0, Q._parts === 0 && (Q._realFinish = !0, Q.emit("finish"), Q._realFinish = !1)), this._dashes)
        return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new r(this._partOpts), this._part._read = function(d) {
      Q._unpause();
    }, this._isPreamble && this.listenerCount("preamble") !== 0 ? this.emit("preamble", this._part) : this._isPreamble !== !0 && this.listenerCount("part") !== 0 ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), E && h < u && !this._ignoreData && (this._isPreamble || !this._inHeader ? (B && (C = this._part.push(B)), C = this._part.push(E.slice(h, u)), C || (this._pause = !0)) : !this._isPreamble && this._inHeader && (B && this._hparser.push(B), f = this._hparser.push(E.slice(h, u)), !this._inHeader && f !== void 0 && f < u && this._oninfo(!1, E, h + f, u))), c && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : h !== u && (++this._parts, this._part.on("end", function() {
      --Q._parts === 0 && (Q._finished ? (Q._realFinish = !0, Q.emit("finish"), Q._realFinish = !1) : Q._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
  }, g.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
      const c = this._cb;
      this._cb = void 0, c();
    }
  }, sc = g, sc;
}
var nc, dh;
function yl() {
  if (dh)
    return nc;
  dh = 1;
  const t = new TextDecoder("utf-8"), e = /* @__PURE__ */ new Map([
    ["utf-8", t],
    ["utf8", t]
  ]);
  function A(n) {
    let i;
    for (; ; )
      switch (n) {
        case "utf-8":
        case "utf8":
          return r.utf8;
        case "latin1":
        case "ascii":
        case "us-ascii":
        case "iso-8859-1":
        case "iso8859-1":
        case "iso88591":
        case "iso_8859-1":
        case "windows-1252":
        case "iso_8859-1:1987":
        case "cp1252":
        case "x-cp1252":
          return r.latin1;
        case "utf16le":
        case "utf-16le":
        case "ucs2":
        case "ucs-2":
          return r.utf16le;
        case "base64":
          return r.base64;
        default:
          if (i === void 0) {
            i = !0, n = n.toLowerCase();
            continue;
          }
          return r.other.bind(n);
      }
  }
  const r = {
    utf8: (n, i) => n.length === 0 ? "" : (typeof n == "string" && (n = Buffer.from(n, i)), n.utf8Slice(0, n.length)),
    latin1: (n, i) => n.length === 0 ? "" : typeof n == "string" ? n : n.latin1Slice(0, n.length),
    utf16le: (n, i) => n.length === 0 ? "" : (typeof n == "string" && (n = Buffer.from(n, i)), n.ucs2Slice(0, n.length)),
    base64: (n, i) => n.length === 0 ? "" : (typeof n == "string" && (n = Buffer.from(n, i)), n.base64Slice(0, n.length)),
    other: (n, i) => {
      if (n.length === 0)
        return "";
      if (typeof n == "string" && (n = Buffer.from(n, i)), e.has(this.toString()))
        try {
          return e.get(this).decode(n);
        } catch {
        }
      return typeof n == "string" ? n : n.toString();
    }
  };
  function s(n, i, o) {
    return n && A(o)(n, i);
  }
  return nc = s, nc;
}
var ic, fh;
function FC() {
  if (fh)
    return ic;
  fh = 1;
  const t = yl(), e = /%[a-fA-F0-9][a-fA-F0-9]/g, A = {
    "%00": "\0",
    "%01": "",
    "%02": "",
    "%03": "",
    "%04": "",
    "%05": "",
    "%06": "",
    "%07": "\x07",
    "%08": "\b",
    "%09": "	",
    "%0a": `
`,
    "%0A": `
`,
    "%0b": "\v",
    "%0B": "\v",
    "%0c": "\f",
    "%0C": "\f",
    "%0d": "\r",
    "%0D": "\r",
    "%0e": "",
    "%0E": "",
    "%0f": "",
    "%0F": "",
    "%10": "",
    "%11": "",
    "%12": "",
    "%13": "",
    "%14": "",
    "%15": "",
    "%16": "",
    "%17": "",
    "%18": "",
    "%19": "",
    "%1a": "",
    "%1A": "",
    "%1b": "\x1B",
    "%1B": "\x1B",
    "%1c": "",
    "%1C": "",
    "%1d": "",
    "%1D": "",
    "%1e": "",
    "%1E": "",
    "%1f": "",
    "%1F": "",
    "%20": " ",
    "%21": "!",
    "%22": '"',
    "%23": "#",
    "%24": "$",
    "%25": "%",
    "%26": "&",
    "%27": "'",
    "%28": "(",
    "%29": ")",
    "%2a": "*",
    "%2A": "*",
    "%2b": "+",
    "%2B": "+",
    "%2c": ",",
    "%2C": ",",
    "%2d": "-",
    "%2D": "-",
    "%2e": ".",
    "%2E": ".",
    "%2f": "/",
    "%2F": "/",
    "%30": "0",
    "%31": "1",
    "%32": "2",
    "%33": "3",
    "%34": "4",
    "%35": "5",
    "%36": "6",
    "%37": "7",
    "%38": "8",
    "%39": "9",
    "%3a": ":",
    "%3A": ":",
    "%3b": ";",
    "%3B": ";",
    "%3c": "<",
    "%3C": "<",
    "%3d": "=",
    "%3D": "=",
    "%3e": ">",
    "%3E": ">",
    "%3f": "?",
    "%3F": "?",
    "%40": "@",
    "%41": "A",
    "%42": "B",
    "%43": "C",
    "%44": "D",
    "%45": "E",
    "%46": "F",
    "%47": "G",
    "%48": "H",
    "%49": "I",
    "%4a": "J",
    "%4A": "J",
    "%4b": "K",
    "%4B": "K",
    "%4c": "L",
    "%4C": "L",
    "%4d": "M",
    "%4D": "M",
    "%4e": "N",
    "%4E": "N",
    "%4f": "O",
    "%4F": "O",
    "%50": "P",
    "%51": "Q",
    "%52": "R",
    "%53": "S",
    "%54": "T",
    "%55": "U",
    "%56": "V",
    "%57": "W",
    "%58": "X",
    "%59": "Y",
    "%5a": "Z",
    "%5A": "Z",
    "%5b": "[",
    "%5B": "[",
    "%5c": "\\",
    "%5C": "\\",
    "%5d": "]",
    "%5D": "]",
    "%5e": "^",
    "%5E": "^",
    "%5f": "_",
    "%5F": "_",
    "%60": "`",
    "%61": "a",
    "%62": "b",
    "%63": "c",
    "%64": "d",
    "%65": "e",
    "%66": "f",
    "%67": "g",
    "%68": "h",
    "%69": "i",
    "%6a": "j",
    "%6A": "j",
    "%6b": "k",
    "%6B": "k",
    "%6c": "l",
    "%6C": "l",
    "%6d": "m",
    "%6D": "m",
    "%6e": "n",
    "%6E": "n",
    "%6f": "o",
    "%6F": "o",
    "%70": "p",
    "%71": "q",
    "%72": "r",
    "%73": "s",
    "%74": "t",
    "%75": "u",
    "%76": "v",
    "%77": "w",
    "%78": "x",
    "%79": "y",
    "%7a": "z",
    "%7A": "z",
    "%7b": "{",
    "%7B": "{",
    "%7c": "|",
    "%7C": "|",
    "%7d": "}",
    "%7D": "}",
    "%7e": "~",
    "%7E": "~",
    "%7f": "",
    "%7F": "",
    "%80": "",
    "%81": "",
    "%82": "",
    "%83": "",
    "%84": "",
    "%85": "",
    "%86": "",
    "%87": "",
    "%88": "",
    "%89": "",
    "%8a": "",
    "%8A": "",
    "%8b": "",
    "%8B": "",
    "%8c": "",
    "%8C": "",
    "%8d": "",
    "%8D": "",
    "%8e": "",
    "%8E": "",
    "%8f": "",
    "%8F": "",
    "%90": "",
    "%91": "",
    "%92": "",
    "%93": "",
    "%94": "",
    "%95": "",
    "%96": "",
    "%97": "",
    "%98": "",
    "%99": "",
    "%9a": "",
    "%9A": "",
    "%9b": "",
    "%9B": "",
    "%9c": "",
    "%9C": "",
    "%9d": "",
    "%9D": "",
    "%9e": "",
    "%9E": "",
    "%9f": "",
    "%9F": "",
    "%a0": " ",
    "%A0": " ",
    "%a1": "¡",
    "%A1": "¡",
    "%a2": "¢",
    "%A2": "¢",
    "%a3": "£",
    "%A3": "£",
    "%a4": "¤",
    "%A4": "¤",
    "%a5": "¥",
    "%A5": "¥",
    "%a6": "¦",
    "%A6": "¦",
    "%a7": "§",
    "%A7": "§",
    "%a8": "¨",
    "%A8": "¨",
    "%a9": "©",
    "%A9": "©",
    "%aa": "ª",
    "%Aa": "ª",
    "%aA": "ª",
    "%AA": "ª",
    "%ab": "«",
    "%Ab": "«",
    "%aB": "«",
    "%AB": "«",
    "%ac": "¬",
    "%Ac": "¬",
    "%aC": "¬",
    "%AC": "¬",
    "%ad": "­",
    "%Ad": "­",
    "%aD": "­",
    "%AD": "­",
    "%ae": "®",
    "%Ae": "®",
    "%aE": "®",
    "%AE": "®",
    "%af": "¯",
    "%Af": "¯",
    "%aF": "¯",
    "%AF": "¯",
    "%b0": "°",
    "%B0": "°",
    "%b1": "±",
    "%B1": "±",
    "%b2": "²",
    "%B2": "²",
    "%b3": "³",
    "%B3": "³",
    "%b4": "´",
    "%B4": "´",
    "%b5": "µ",
    "%B5": "µ",
    "%b6": "¶",
    "%B6": "¶",
    "%b7": "·",
    "%B7": "·",
    "%b8": "¸",
    "%B8": "¸",
    "%b9": "¹",
    "%B9": "¹",
    "%ba": "º",
    "%Ba": "º",
    "%bA": "º",
    "%BA": "º",
    "%bb": "»",
    "%Bb": "»",
    "%bB": "»",
    "%BB": "»",
    "%bc": "¼",
    "%Bc": "¼",
    "%bC": "¼",
    "%BC": "¼",
    "%bd": "½",
    "%Bd": "½",
    "%bD": "½",
    "%BD": "½",
    "%be": "¾",
    "%Be": "¾",
    "%bE": "¾",
    "%BE": "¾",
    "%bf": "¿",
    "%Bf": "¿",
    "%bF": "¿",
    "%BF": "¿",
    "%c0": "À",
    "%C0": "À",
    "%c1": "Á",
    "%C1": "Á",
    "%c2": "Â",
    "%C2": "Â",
    "%c3": "Ã",
    "%C3": "Ã",
    "%c4": "Ä",
    "%C4": "Ä",
    "%c5": "Å",
    "%C5": "Å",
    "%c6": "Æ",
    "%C6": "Æ",
    "%c7": "Ç",
    "%C7": "Ç",
    "%c8": "È",
    "%C8": "È",
    "%c9": "É",
    "%C9": "É",
    "%ca": "Ê",
    "%Ca": "Ê",
    "%cA": "Ê",
    "%CA": "Ê",
    "%cb": "Ë",
    "%Cb": "Ë",
    "%cB": "Ë",
    "%CB": "Ë",
    "%cc": "Ì",
    "%Cc": "Ì",
    "%cC": "Ì",
    "%CC": "Ì",
    "%cd": "Í",
    "%Cd": "Í",
    "%cD": "Í",
    "%CD": "Í",
    "%ce": "Î",
    "%Ce": "Î",
    "%cE": "Î",
    "%CE": "Î",
    "%cf": "Ï",
    "%Cf": "Ï",
    "%cF": "Ï",
    "%CF": "Ï",
    "%d0": "Ð",
    "%D0": "Ð",
    "%d1": "Ñ",
    "%D1": "Ñ",
    "%d2": "Ò",
    "%D2": "Ò",
    "%d3": "Ó",
    "%D3": "Ó",
    "%d4": "Ô",
    "%D4": "Ô",
    "%d5": "Õ",
    "%D5": "Õ",
    "%d6": "Ö",
    "%D6": "Ö",
    "%d7": "×",
    "%D7": "×",
    "%d8": "Ø",
    "%D8": "Ø",
    "%d9": "Ù",
    "%D9": "Ù",
    "%da": "Ú",
    "%Da": "Ú",
    "%dA": "Ú",
    "%DA": "Ú",
    "%db": "Û",
    "%Db": "Û",
    "%dB": "Û",
    "%DB": "Û",
    "%dc": "Ü",
    "%Dc": "Ü",
    "%dC": "Ü",
    "%DC": "Ü",
    "%dd": "Ý",
    "%Dd": "Ý",
    "%dD": "Ý",
    "%DD": "Ý",
    "%de": "Þ",
    "%De": "Þ",
    "%dE": "Þ",
    "%DE": "Þ",
    "%df": "ß",
    "%Df": "ß",
    "%dF": "ß",
    "%DF": "ß",
    "%e0": "à",
    "%E0": "à",
    "%e1": "á",
    "%E1": "á",
    "%e2": "â",
    "%E2": "â",
    "%e3": "ã",
    "%E3": "ã",
    "%e4": "ä",
    "%E4": "ä",
    "%e5": "å",
    "%E5": "å",
    "%e6": "æ",
    "%E6": "æ",
    "%e7": "ç",
    "%E7": "ç",
    "%e8": "è",
    "%E8": "è",
    "%e9": "é",
    "%E9": "é",
    "%ea": "ê",
    "%Ea": "ê",
    "%eA": "ê",
    "%EA": "ê",
    "%eb": "ë",
    "%Eb": "ë",
    "%eB": "ë",
    "%EB": "ë",
    "%ec": "ì",
    "%Ec": "ì",
    "%eC": "ì",
    "%EC": "ì",
    "%ed": "í",
    "%Ed": "í",
    "%eD": "í",
    "%ED": "í",
    "%ee": "î",
    "%Ee": "î",
    "%eE": "î",
    "%EE": "î",
    "%ef": "ï",
    "%Ef": "ï",
    "%eF": "ï",
    "%EF": "ï",
    "%f0": "ð",
    "%F0": "ð",
    "%f1": "ñ",
    "%F1": "ñ",
    "%f2": "ò",
    "%F2": "ò",
    "%f3": "ó",
    "%F3": "ó",
    "%f4": "ô",
    "%F4": "ô",
    "%f5": "õ",
    "%F5": "õ",
    "%f6": "ö",
    "%F6": "ö",
    "%f7": "÷",
    "%F7": "÷",
    "%f8": "ø",
    "%F8": "ø",
    "%f9": "ù",
    "%F9": "ù",
    "%fa": "ú",
    "%Fa": "ú",
    "%fA": "ú",
    "%FA": "ú",
    "%fb": "û",
    "%Fb": "û",
    "%fB": "û",
    "%FB": "û",
    "%fc": "ü",
    "%Fc": "ü",
    "%fC": "ü",
    "%FC": "ü",
    "%fd": "ý",
    "%Fd": "ý",
    "%fD": "ý",
    "%FD": "ý",
    "%fe": "þ",
    "%Fe": "þ",
    "%fE": "þ",
    "%FE": "þ",
    "%ff": "ÿ",
    "%Ff": "ÿ",
    "%fF": "ÿ",
    "%FF": "ÿ"
  };
  function r(g) {
    return A[g];
  }
  const s = 0, n = 1, i = 2, o = 3;
  function a(g) {
    const c = [];
    let E = s, h = "", u = !1, B = !1, Q = 0, I = "";
    const f = g.length;
    for (var C = 0; C < f; ++C) {
      const d = g[C];
      if (d === "\\" && u)
        if (B)
          B = !1;
        else {
          B = !0;
          continue;
        }
      else if (d === '"')
        if (B)
          B = !1;
        else {
          u ? (u = !1, E = s) : u = !0;
          continue;
        }
      else if (B && u && (I += "\\"), B = !1, (E === i || E === o) && d === "'") {
        E === i ? (E = o, h = I.substring(1)) : E = n, I = "";
        continue;
      } else if (E === s && (d === "*" || d === "=") && c.length) {
        E = d === "*" ? i : n, c[Q] = [I, void 0], I = "";
        continue;
      } else if (!u && d === ";") {
        E = s, h ? (I.length && (I = t(
          I.replace(e, r),
          "binary",
          h
        )), h = "") : I.length && (I = t(I, "binary", "utf8")), c[Q] === void 0 ? c[Q] = I : c[Q][1] = I, I = "", ++Q;
        continue;
      } else if (!u && (d === " " || d === "	"))
        continue;
      I += d;
    }
    return h && I.length ? I = t(
      I.replace(e, r),
      "binary",
      h
    ) : I && (I = t(I, "binary", "utf8")), c[Q] === void 0 ? I && (c[Q] = I) : c[Q][1] = I, c;
  }
  return ic = a, ic;
}
var oc, ph;
function yp() {
  return ph || (ph = 1, oc = function(e) {
    if (typeof e != "string")
      return "";
    for (var A = e.length - 1; A >= 0; --A)
      switch (e.charCodeAt(A)) {
        case 47:
        case 92:
          return e = e.slice(A + 1), e === ".." || e === "." ? "" : e;
      }
    return e === ".." || e === "." ? "" : e;
  }), oc;
}
var ac, mh;
function Rp() {
  if (mh)
    return ac;
  mh = 1;
  const { Readable: t } = Ea, { inherits: e } = Cn, A = SC(), r = FC(), s = yl(), n = yp(), i = wl(), o = /^boundary$/i, a = /^form-data$/i, g = /^charset$/i, c = /^filename$/i, E = /^name$/i;
  h.detect = /^multipart\/form-data/i;
  function h(Q, I) {
    let f, C;
    const d = this;
    let w;
    const p = I.limits, m = I.isPartAFile || ((M, P, j) => P === "application/octet-stream" || j !== void 0), R = I.parsedConType || [], D = I.defCharset || "utf8", G = I.preservePath, H = { highWaterMark: I.fileHwm };
    for (f = 0, C = R.length; f < C; ++f)
      if (Array.isArray(R[f]) && o.test(R[f][0])) {
        w = R[f][1];
        break;
      }
    function x() {
      V === 0 && k && !Q._done && (k = !1, d.end());
    }
    if (typeof w != "string")
      throw new Error("Multipart: Boundary not found");
    const te = i(p, "fieldSize", 1 * 1024 * 1024), ee = i(p, "fileSize", 1 / 0), Ee = i(p, "files", 1 / 0), q = i(p, "fields", 1 / 0), $ = i(p, "parts", 1 / 0), se = i(p, "headerPairs", 2e3), ie = i(p, "headerSize", 80 * 1024);
    let K = 0, b = 0, V = 0, N, S, k = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = Q;
    const v = {
      boundary: w,
      maxHeaderPairs: se,
      maxHeaderSize: ie,
      partHwm: H.highWaterMark,
      highWaterMark: I.highWaterMark
    };
    this.parser = new A(v), this.parser.on("drain", function() {
      if (d._needDrain = !1, d._cb && !d._pause) {
        const M = d._cb;
        d._cb = void 0, M();
      }
    }).on("part", function M(P) {
      if (++d._nparts > $)
        return d.parser.removeListener("part", M), d.parser.on("part", u), Q.hitPartsLimit = !0, Q.emit("partsLimit"), u(P);
      if (S) {
        const j = S;
        j.emit("end"), j.removeAllListeners("end");
      }
      P.on("header", function(j) {
        let Z, O, oe, we, Qe, Pe, ke = 0;
        if (j["content-type"] && (oe = r(j["content-type"][0]), oe[0])) {
          for (Z = oe[0].toLowerCase(), f = 0, C = oe.length; f < C; ++f)
            if (g.test(oe[f][0])) {
              we = oe[f][1].toLowerCase();
              break;
            }
        }
        if (Z === void 0 && (Z = "text/plain"), we === void 0 && (we = D), j["content-disposition"]) {
          if (oe = r(j["content-disposition"][0]), !a.test(oe[0]))
            return u(P);
          for (f = 0, C = oe.length; f < C; ++f)
            E.test(oe[f][0]) ? O = oe[f][1] : c.test(oe[f][0]) && (Pe = oe[f][1], G || (Pe = n(Pe)));
        } else
          return u(P);
        j["content-transfer-encoding"] ? Qe = j["content-transfer-encoding"][0].toLowerCase() : Qe = "7bit";
        let Ye, AA;
        if (m(O, Z, Pe)) {
          if (K === Ee)
            return Q.hitFilesLimit || (Q.hitFilesLimit = !0, Q.emit("filesLimit")), u(P);
          if (++K, Q.listenerCount("file") === 0) {
            d.parser._ignore();
            return;
          }
          ++V;
          const de = new B(H);
          N = de, de.on("end", function() {
            if (--V, d._pause = !1, x(), d._cb && !d._needDrain) {
              const Ce = d._cb;
              d._cb = void 0, Ce();
            }
          }), de._read = function(Ce) {
            if (d._pause && (d._pause = !1, d._cb && !d._needDrain)) {
              const me = d._cb;
              d._cb = void 0, me();
            }
          }, Q.emit("file", O, de, Pe, Qe, Z), Ye = function(Ce) {
            if ((ke += Ce.length) > ee) {
              const me = ee - ke + Ce.length;
              me > 0 && de.push(Ce.slice(0, me)), de.truncated = !0, de.bytesRead = ee, P.removeAllListeners("data"), de.emit("limit");
              return;
            } else
              de.push(Ce) || (d._pause = !0);
            de.bytesRead = ke;
          }, AA = function() {
            N = void 0, de.push(null);
          };
        } else {
          if (b === q)
            return Q.hitFieldsLimit || (Q.hitFieldsLimit = !0, Q.emit("fieldsLimit")), u(P);
          ++b, ++V;
          let de = "", Ce = !1;
          S = P, Ye = function(me) {
            if ((ke += me.length) > te) {
              const BA = te - (ke - me.length);
              de += me.toString("binary", 0, BA), Ce = !0, P.removeAllListeners("data");
            } else
              de += me.toString("binary");
          }, AA = function() {
            S = void 0, de.length && (de = s(de, "binary", we)), Q.emit("field", O, de, !1, Ce, Qe, Z), --V, x();
          };
        }
        P._readableState.sync = !1, P.on("data", Ye), P.on("end", AA);
      }).on("error", function(j) {
        N && N.emit("error", j);
      });
    }).on("error", function(M) {
      Q.emit("error", M);
    }).on("finish", function() {
      k = !0, x();
    });
  }
  h.prototype.write = function(Q, I) {
    const f = this.parser.write(Q);
    f && !this._pause ? I() : (this._needDrain = !f, this._cb = I);
  }, h.prototype.end = function() {
    const Q = this;
    Q.parser.writable ? Q.parser.end() : Q._boy._done || process.nextTick(function() {
      Q._boy._done = !0, Q._boy.emit("finish");
    });
  };
  function u(Q) {
    Q.resume();
  }
  function B(Q) {
    t.call(this, Q), this.bytesRead = 0, this.truncated = !1;
  }
  return e(B, t), B.prototype._read = function(Q) {
  }, ac = h, ac;
}
var cc, wh;
function Dp() {
  if (wh)
    return cc;
  wh = 1;
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
    const o = r.length;
    for (; n < o; ++n)
      this.buffer !== void 0 ? e[r.charCodeAt(n)] ? (this.buffer += r[n], ++i, this.buffer.length === 2 && (s += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (s += "%" + this.buffer, this.buffer = void 0, --n) : r[n] === "%" && (n > i && (s += r.substring(i, n), i = n), this.buffer = "", ++i);
    return i < o && this.buffer === void 0 && (s += r.substring(i)), s;
  }, A.prototype.reset = function() {
    this.buffer = void 0;
  }, cc = A, cc;
}
var gc, yh;
function bp() {
  if (yh)
    return gc;
  yh = 1;
  const t = Dp(), e = yl(), A = wl(), r = /^charset$/i;
  s.detect = /^application\/x-www-form-urlencoded/i;
  function s(n, i) {
    const o = i.limits, a = i.parsedConType;
    this.boy = n, this.fieldSizeLimit = A(o, "fieldSize", 1 * 1024 * 1024), this.fieldNameSizeLimit = A(o, "fieldNameSize", 100), this.fieldsLimit = A(o, "fields", 1 / 0);
    let g;
    for (var c = 0, E = a.length; c < E; ++c)
      if (Array.isArray(a[c]) && r.test(a[c][0])) {
        g = a[c][1].toLowerCase();
        break;
      }
    g === void 0 && (g = i.defCharset || "utf8"), this.decoder = new t(), this.charset = g, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
  }
  return s.prototype.write = function(n, i) {
    if (this._fields === this.fieldsLimit)
      return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), i();
    let o, a, g, c = 0;
    const E = n.length;
    for (; c < E; )
      if (this._state === "key") {
        for (o = a = void 0, g = c; g < E; ++g) {
          if (this._checkingBytes || ++c, n[g] === 61) {
            o = g;
            break;
          } else if (n[g] === 38) {
            a = g;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = !0;
            break;
          } else
            this._checkingBytes && ++this._bytesKey;
        }
        if (o !== void 0)
          o > c && (this._key += this.decoder.write(n.toString("binary", c, o))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), c = o + 1;
        else if (a !== void 0) {
          ++this._fields;
          let h;
          const u = this._keyTrunc;
          if (a > c ? h = this._key += this.decoder.write(n.toString("binary", c, a)) : h = this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), h.length && this.boy.emit(
            "field",
            e(h, "binary", this.charset),
            "",
            u,
            !1
          ), c = a + 1, this._fields === this.fieldsLimit)
            return i();
        } else
          this._hitLimit ? (g > c && (this._key += this.decoder.write(n.toString("binary", c, g))), c = g, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (c < E && (this._key += this.decoder.write(n.toString("binary", c))), c = E);
      } else {
        for (a = void 0, g = c; g < E; ++g) {
          if (this._checkingBytes || ++c, n[g] === 38) {
            a = g;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = !0;
            break;
          } else
            this._checkingBytes && ++this._bytesVal;
        }
        if (a !== void 0) {
          if (++this._fields, a > c && (this._val += this.decoder.write(n.toString("binary", c, a))), this.boy.emit(
            "field",
            e(this._key, "binary", this.charset),
            e(this._val, "binary", this.charset),
            this._keyTrunc,
            this._valTrunc
          ), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), c = a + 1, this._fields === this.fieldsLimit)
            return i();
        } else
          this._hitLimit ? (g > c && (this._val += this.decoder.write(n.toString("binary", c, g))), c = g, (this._val === "" && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) && (this._checkingBytes = !1, this._valTrunc = !0)) : (c < E && (this._val += this.decoder.write(n.toString("binary", c))), c = E);
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
  }, gc = s, gc;
}
var Rh;
function kp() {
  if (Rh)
    return Ds.exports;
  Rh = 1;
  const t = Ea.Writable, { inherits: e } = Cn, A = SC(), r = Rp(), s = bp(), n = FC();
  function i(o) {
    if (!(this instanceof i))
      return new i(o);
    if (typeof o != "object")
      throw new TypeError("Busboy expected an options-Object.");
    if (typeof o.headers != "object")
      throw new TypeError("Busboy expected an options-Object with headers-attribute.");
    if (typeof o.headers["content-type"] != "string")
      throw new TypeError("Missing Content-Type-header.");
    const {
      headers: a,
      ...g
    } = o;
    this.opts = {
      autoDestroy: !1,
      ...g
    }, t.call(this, this.opts), this._done = !1, this._parser = this.getParserByHeaders(a), this._finished = !1;
  }
  return e(i, t), i.prototype.emit = function(o) {
    var a;
    if (o === "finish") {
      if (this._done) {
        if (this._finished)
          return;
      } else {
        (a = this._parser) == null || a.end();
        return;
      }
      this._finished = !0;
    }
    t.prototype.emit.apply(this, arguments);
  }, i.prototype.getParserByHeaders = function(o) {
    const a = n(o["content-type"]), g = {
      defCharset: this.opts.defCharset,
      fileHwm: this.opts.fileHwm,
      headers: o,
      highWaterMark: this.opts.highWaterMark,
      isPartAFile: this.opts.isPartAFile,
      limits: this.opts.limits,
      parsedConType: a,
      preservePath: this.opts.preservePath
    };
    if (r.detect.test(a[0]))
      return new r(this, g);
    if (s.detect.test(a[0]))
      return new s(this, g);
    throw new Error("Unsupported Content-Type.");
  }, i.prototype._write = function(o, a, g) {
    this._parser.write(o, g);
  }, Ds.exports = i, Ds.exports.default = i, Ds.exports.Busboy = i, Ds.exports.Dicer = A, Ds.exports;
}
var lc, Dh;
function ms() {
  if (Dh)
    return lc;
  Dh = 1;
  const { MessageChannel: t, receiveMessageOnPort: e } = hQ, A = ["GET", "HEAD", "POST"], r = new Set(A), s = [101, 204, 205, 304], n = [301, 302, 303, 307, 308], i = new Set(n), o = [
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
  ], a = new Set(o), g = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
  ], c = new Set(g), E = ["follow", "manual", "error"], h = ["GET", "HEAD", "OPTIONS", "TRACE"], u = new Set(h), B = ["navigate", "same-origin", "no-cors", "cors"], Q = ["omit", "same-origin", "include"], I = [
    "default",
    "no-store",
    "reload",
    "no-cache",
    "force-cache",
    "only-if-cached"
  ], f = [
    "content-encoding",
    "content-language",
    "content-location",
    "content-type",
    // See https://github.com/nodejs/undici/issues/2021
    // 'Content-Length' is a forbidden header name, which is typically
    // removed in the Headers implementation. However, undici doesn't
    // filter out headers, so we add it here.
    "content-length"
  ], C = [
    "half"
  ], d = ["CONNECT", "TRACE", "TRACK"], w = new Set(d), p = [
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
  ], m = new Set(p), R = globalThis.DOMException ?? (() => {
    try {
      atob("~");
    } catch (H) {
      return Object.getPrototypeOf(H).constructor;
    }
  })();
  let D;
  const G = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
  // structuredClone was added in v17.0.0, but fetch supports v16.8
  function(x, te = void 0) {
    if (arguments.length === 0)
      throw new TypeError("missing argument");
    return D || (D = new t()), D.port1.unref(), D.port2.unref(), D.port1.postMessage(x, te == null ? void 0 : te.transfer), e(D.port2).message;
  };
  return lc = {
    DOMException: R,
    structuredClone: G,
    subresource: p,
    forbiddenMethods: d,
    requestBodyHeader: f,
    referrerPolicy: g,
    requestRedirect: E,
    requestMode: B,
    requestCredentials: Q,
    requestCache: I,
    redirectStatus: n,
    corsSafeListedMethods: A,
    nullBodyStatus: s,
    safeMethods: h,
    badPorts: o,
    requestDuplex: C,
    subresourceSet: m,
    badPortsSet: a,
    redirectStatusSet: i,
    corsSafeListedMethodsSet: r,
    safeMethodsSet: u,
    forbiddenMethodsSet: w,
    referrerPolicySet: c
  }, lc;
}
var hc, bh;
function _i() {
  if (bh)
    return hc;
  bh = 1;
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
  return hc = {
    getGlobalOrigin: e,
    setGlobalOrigin: A
  }, hc;
}
var Ec, kh;
function Rt() {
  if (kh)
    return Ec;
  kh = 1;
  const { redirectStatusSet: t, referrerPolicySet: e, badPortsSet: A } = ms(), { getGlobalOrigin: r } = _i(), { performance: s } = gd, { isBlobLike: n, toUSVString: i, ReadableStreamFrom: o } = fe, a = Ze, { isUint8Array: g } = EQ;
  let c;
  try {
    c = require("crypto");
  } catch {
  }
  function E(F) {
    const Y = F.urlList, X = Y.length;
    return X === 0 ? null : Y[X - 1].toString();
  }
  function h(F, Y) {
    if (!t.has(F.status))
      return null;
    let X = F.headersList.get("location");
    return X !== null && w(X) && (X = new URL(X, E(F))), X && !X.hash && (X.hash = Y), X;
  }
  function u(F) {
    return F.urlList[F.urlList.length - 1];
  }
  function B(F) {
    const Y = u(F);
    return _r(Y) && A.has(Y.port) ? "blocked" : "allowed";
  }
  function Q(F) {
    var Y, X;
    return F instanceof Error || ((Y = F == null ? void 0 : F.constructor) == null ? void 0 : Y.name) === "Error" || ((X = F == null ? void 0 : F.constructor) == null ? void 0 : X.name) === "DOMException";
  }
  function I(F) {
    for (let Y = 0; Y < F.length; ++Y) {
      const X = F.charCodeAt(Y);
      if (!(X === 9 || // HTAB
      X >= 32 && X <= 126 || // SP / VCHAR
      X >= 128 && X <= 255))
        return !1;
    }
    return !0;
  }
  function f(F) {
    switch (F) {
      case 34:
      case 40:
      case 41:
      case 44:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 123:
      case 125:
        return !1;
      default:
        return F >= 33 && F <= 126;
    }
  }
  function C(F) {
    if (F.length === 0)
      return !1;
    for (let Y = 0; Y < F.length; ++Y)
      if (!f(F.charCodeAt(Y)))
        return !1;
    return !0;
  }
  function d(F) {
    return C(F);
  }
  function w(F) {
    return !(F.startsWith("	") || F.startsWith(" ") || F.endsWith("	") || F.endsWith(" ") || F.includes("\0") || F.includes("\r") || F.includes(`
`));
  }
  function p(F, Y) {
    const { headersList: X } = Y, he = (X.get("referrer-policy") ?? "").split(",");
    let pe = "";
    if (he.length > 0)
      for (let Me = he.length; Me !== 0; Me--) {
        const Se = he[Me - 1].trim();
        if (e.has(Se)) {
          pe = Se;
          break;
        }
      }
    pe !== "" && (F.referrerPolicy = pe);
  }
  function m() {
    return "allowed";
  }
  function R() {
    return "success";
  }
  function D() {
    return "success";
  }
  function G(F) {
    let Y = null;
    Y = F.mode, F.headersList.set("sec-fetch-mode", Y);
  }
  function H(F) {
    let Y = F.origin;
    if (F.responseTainting === "cors" || F.mode === "websocket")
      Y && F.headersList.append("origin", Y);
    else if (F.method !== "GET" && F.method !== "HEAD") {
      switch (F.referrerPolicy) {
        case "no-referrer":
          Y = null;
          break;
        case "no-referrer-when-downgrade":
        case "strict-origin":
        case "strict-origin-when-cross-origin":
          F.origin && BA(F.origin) && !BA(u(F)) && (Y = null);
          break;
        case "same-origin":
          N(F, u(F)) || (Y = null);
          break;
      }
      Y && F.headersList.append("origin", Y);
    }
  }
  function x(F) {
    return s.now();
  }
  function te(F) {
    return {
      startTime: F.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: F.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    };
  }
  function ee() {
    return {
      referrerPolicy: "strict-origin-when-cross-origin"
    };
  }
  function Ee(F) {
    return {
      referrerPolicy: F.referrerPolicy
    };
  }
  function q(F) {
    const Y = F.referrerPolicy;
    a(Y);
    let X = null;
    if (F.referrer === "client") {
      const mA = r();
      if (!mA || mA.origin === "null")
        return "no-referrer";
      X = new URL(mA);
    } else
      F.referrer instanceof URL && (X = F.referrer);
    let he = $(X);
    const pe = $(X, !0);
    he.toString().length > 4096 && (he = pe);
    const Me = N(F, he), Se = se(he) && !se(F.url);
    switch (Y) {
      case "origin":
        return pe ?? $(X, !0);
      case "unsafe-url":
        return he;
      case "same-origin":
        return Me ? pe : "no-referrer";
      case "origin-when-cross-origin":
        return Me ? he : pe;
      case "strict-origin-when-cross-origin": {
        const mA = u(F);
        return N(he, mA) ? he : se(he) && !se(mA) ? "no-referrer" : pe;
      }
      case "strict-origin":
      case "no-referrer-when-downgrade":
      default:
        return Se ? "no-referrer" : pe;
    }
  }
  function $(F, Y) {
    return a(F instanceof URL), F.protocol === "file:" || F.protocol === "about:" || F.protocol === "blank:" ? "no-referrer" : (F.username = "", F.password = "", F.hash = "", Y && (F.pathname = "", F.search = ""), F);
  }
  function se(F) {
    if (!(F instanceof URL))
      return !1;
    if (F.href === "about:blank" || F.href === "about:srcdoc" || F.protocol === "data:" || F.protocol === "file:")
      return !0;
    return Y(F.origin);
    function Y(X) {
      if (X == null || X === "null")
        return !1;
      const he = new URL(X);
      return !!(he.protocol === "https:" || he.protocol === "wss:" || /^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(he.hostname) || he.hostname === "localhost" || he.hostname.includes("localhost.") || he.hostname.endsWith(".localhost"));
    }
  }
  function ie(F, Y) {
    if (c === void 0)
      return !0;
    const X = b(Y);
    if (X === "no metadata" || X.length === 0)
      return !0;
    const he = X.sort((Se, mA) => mA.algo.localeCompare(Se.algo)), pe = he[0].algo, Me = he.filter((Se) => Se.algo === pe);
    for (const Se of Me) {
      const mA = Se.algo;
      let Dt = Se.hash;
      Dt.endsWith("==") && (Dt = Dt.slice(0, -2));
      let Pt = c.createHash(mA).update(F).digest("base64");
      if (Pt.endsWith("==") && (Pt = Pt.slice(0, -2)), Pt === Dt)
        return !0;
      let lr = c.createHash(mA).update(F).digest("base64url");
      if (lr.endsWith("==") && (lr = lr.slice(0, -2)), lr === Dt)
        return !0;
    }
    return !1;
  }
  const K = /((?<algo>sha256|sha384|sha512)-(?<hash>[A-z0-9+/]{1}.*={0,2}))( +[\x21-\x7e]?)?/i;
  function b(F) {
    const Y = [];
    let X = !0;
    const he = c.getHashes();
    for (const pe of F.split(" ")) {
      X = !1;
      const Me = K.exec(pe);
      if (Me === null || Me.groups === void 0)
        continue;
      const Se = Me.groups.algo;
      he.includes(Se.toLowerCase()) && Y.push(Me.groups);
    }
    return X === !0 ? "no metadata" : Y;
  }
  function V(F) {
  }
  function N(F, Y) {
    return F.origin === Y.origin && F.origin === "null" || F.protocol === Y.protocol && F.hostname === Y.hostname && F.port === Y.port;
  }
  function S() {
    let F, Y;
    return { promise: new Promise((he, pe) => {
      F = he, Y = pe;
    }), resolve: F, reject: Y };
  }
  function k(F) {
    return F.controller.state === "aborted";
  }
  function v(F) {
    return F.controller.state === "aborted" || F.controller.state === "terminated";
  }
  const M = {
    delete: "DELETE",
    DELETE: "DELETE",
    get: "GET",
    GET: "GET",
    head: "HEAD",
    HEAD: "HEAD",
    options: "OPTIONS",
    OPTIONS: "OPTIONS",
    post: "POST",
    POST: "POST",
    put: "PUT",
    PUT: "PUT"
  };
  Object.setPrototypeOf(M, null);
  function P(F) {
    return M[F.toLowerCase()] ?? F;
  }
  function j(F) {
    const Y = JSON.stringify(F);
    if (Y === void 0)
      throw new TypeError("Value is not JSON serializable");
    return a(typeof Y == "string"), Y;
  }
  const Z = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function O(F, Y, X) {
    const he = {
      index: 0,
      kind: X,
      target: F
    }, pe = {
      next() {
        if (Object.getPrototypeOf(this) !== pe)
          throw new TypeError(
            `'next' called on an object that does not implement interface ${Y} Iterator.`
          );
        const { index: Me, kind: Se, target: mA } = he, Dt = mA(), Pt = Dt.length;
        if (Me >= Pt)
          return { value: void 0, done: !0 };
        const lr = Dt[Me];
        return he.index = Me + 1, oe(lr, Se);
      },
      // The class string of an iterator prototype object for a given interface is the
      // result of concatenating the identifier of the interface and the string " Iterator".
      [Symbol.toStringTag]: `${Y} Iterator`
    };
    return Object.setPrototypeOf(pe, Z), Object.setPrototypeOf({}, pe);
  }
  function oe(F, Y) {
    let X;
    switch (Y) {
      case "key": {
        X = F[0];
        break;
      }
      case "value": {
        X = F[1];
        break;
      }
      case "key+value": {
        X = F;
        break;
      }
    }
    return { value: X, done: !1 };
  }
  async function we(F, Y, X) {
    const he = Y, pe = X;
    let Me;
    try {
      Me = F.stream.getReader();
    } catch (Se) {
      pe(Se);
      return;
    }
    try {
      const Se = await Ce(Me);
      he(Se);
    } catch (Se) {
      pe(Se);
    }
  }
  let Qe = globalThis.ReadableStream;
  function Pe(F) {
    return Qe || (Qe = Yr.ReadableStream), F instanceof Qe || F[Symbol.toStringTag] === "ReadableStream" && typeof F.tee == "function";
  }
  const ke = 65535;
  function Ye(F) {
    return F.length < ke ? String.fromCharCode(...F) : F.reduce((Y, X) => Y + String.fromCharCode(X), "");
  }
  function AA(F) {
    try {
      F.close();
    } catch (Y) {
      if (!Y.message.includes("Controller is already closed"))
        throw Y;
    }
  }
  function de(F) {
    for (let Y = 0; Y < F.length; Y++)
      a(F.charCodeAt(Y) <= 255);
    return F;
  }
  async function Ce(F) {
    const Y = [];
    let X = 0;
    for (; ; ) {
      const { done: he, value: pe } = await F.read();
      if (he)
        return Buffer.concat(Y, X);
      if (!g(pe))
        throw new TypeError("Received non-Uint8Array chunk");
      Y.push(pe), X += pe.length;
    }
  }
  function me(F) {
    a("protocol" in F);
    const Y = F.protocol;
    return Y === "about:" || Y === "blob:" || Y === "data:";
  }
  function BA(F) {
    return typeof F == "string" ? F.startsWith("https:") : F.protocol === "https:";
  }
  function _r(F) {
    a("protocol" in F);
    const Y = F.protocol;
    return Y === "http:" || Y === "https:";
  }
  const ys = Object.hasOwn || ((F, Y) => Object.prototype.hasOwnProperty.call(F, Y));
  return Ec = {
    isAborted: k,
    isCancelled: v,
    createDeferredPromise: S,
    ReadableStreamFrom: o,
    toUSVString: i,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: V,
    coarsenedSharedCurrentTime: x,
    determineRequestsReferrer: q,
    makePolicyContainer: ee,
    clonePolicyContainer: Ee,
    appendFetchMetadata: G,
    appendRequestOriginHeader: H,
    TAOCheck: D,
    corsCheck: R,
    crossOriginResourcePolicyCheck: m,
    createOpaqueTimingInfo: te,
    setRequestReferrerPolicyOnRedirect: p,
    isValidHTTPToken: C,
    requestBadPort: B,
    requestCurrentURL: u,
    responseURL: E,
    responseLocationURL: h,
    isBlobLike: n,
    isURLPotentiallyTrustworthy: se,
    isValidReasonPhrase: I,
    sameOrigin: N,
    normalizeMethod: P,
    serializeJavascriptValueToJSONString: j,
    makeIterator: O,
    isValidHeaderName: d,
    isValidHeaderValue: w,
    hasOwn: ys,
    isErrorLike: Q,
    fullyReadBody: we,
    bytesMatch: ie,
    isReadableStreamLike: Pe,
    readableStreamClose: AA,
    isomorphicEncode: de,
    isomorphicDecode: Ye,
    urlIsLocal: me,
    urlHasHttpsScheme: BA,
    urlIsHttpHttpsScheme: _r,
    readAllBytes: Ce,
    normalizeMethodRecord: M
  }, Ec;
}
var uc, Sh;
function Or() {
  return Sh || (Sh = 1, uc = {
    kUrl: Symbol("url"),
    kHeaders: Symbol("headers"),
    kSignal: Symbol("signal"),
    kState: Symbol("state"),
    kGuard: Symbol("guard"),
    kRealm: Symbol("realm")
  }), uc;
}
var Qc, Fh;
function VA() {
  if (Fh)
    return Qc;
  Fh = 1;
  const { types: t } = Ot, { hasOwn: e, toUSVString: A } = Rt(), r = {};
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
  }, r.util.ConvertToInt = function(s, n, i, o = {}) {
    let a, g;
    n === 64 ? (a = Math.pow(2, 53) - 1, i === "unsigned" ? g = 0 : g = Math.pow(-2, 53) + 1) : i === "unsigned" ? (g = 0, a = Math.pow(2, n) - 1) : (g = Math.pow(-2, n) - 1, a = Math.pow(2, n - 1) - 1);
    let c = Number(s);
    if (c === 0 && (c = 0), o.enforceRange === !0) {
      if (Number.isNaN(c) || c === Number.POSITIVE_INFINITY || c === Number.NEGATIVE_INFINITY)
        throw r.errors.exception({
          header: "Integer conversion",
          message: `Could not convert ${s} to an integer.`
        });
      if (c = r.util.IntegerPart(c), c < g || c > a)
        throw r.errors.exception({
          header: "Integer conversion",
          message: `Value must be between ${g}-${a}, got ${c}.`
        });
      return c;
    }
    return !Number.isNaN(c) && o.clamp === !0 ? (c = Math.min(Math.max(c, g), a), Math.floor(c) % 2 === 0 ? c = Math.floor(c) : c = Math.ceil(c), c) : Number.isNaN(c) || c === 0 && Object.is(0, c) || c === Number.POSITIVE_INFINITY || c === Number.NEGATIVE_INFINITY ? 0 : (c = r.util.IntegerPart(c), c = c % Math.pow(2, n), i === "signed" && c >= Math.pow(2, n) - 1 ? c - Math.pow(2, n) : c);
  }, r.util.IntegerPart = function(s) {
    const n = Math.floor(Math.abs(s));
    return s < 0 ? -1 * n : n;
  }, r.sequenceConverter = function(s) {
    return (n) => {
      var a;
      if (r.util.Type(n) !== "Object")
        throw r.errors.exception({
          header: "Sequence",
          message: `Value of type ${r.util.Type(n)} is not an Object.`
        });
      const i = (a = n == null ? void 0 : n[Symbol.iterator]) == null ? void 0 : a.call(n), o = [];
      if (i === void 0 || typeof i.next != "function")
        throw r.errors.exception({
          header: "Sequence",
          message: "Object is not an iterator."
        });
      for (; ; ) {
        const { done: g, value: c } = i.next();
        if (g)
          break;
        o.push(s(c));
      }
      return o;
    };
  }, r.recordConverter = function(s, n) {
    return (i) => {
      if (r.util.Type(i) !== "Object")
        throw r.errors.exception({
          header: "Record",
          message: `Value of type ${r.util.Type(i)} is not an Object.`
        });
      const o = {};
      if (!t.isProxy(i)) {
        const g = Object.keys(i);
        for (const c of g) {
          const E = s(c), h = n(i[c]);
          o[E] = h;
        }
        return o;
      }
      const a = Reflect.ownKeys(i);
      for (const g of a) {
        const c = Reflect.getOwnPropertyDescriptor(i, g);
        if (c != null && c.enumerable) {
          const E = s(g), h = n(i[g]);
          o[E] = h;
        }
      }
      return o;
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
      const i = r.util.Type(n), o = {};
      if (i === "Null" || i === "Undefined")
        return o;
      if (i !== "Object")
        throw r.errors.exception({
          header: "Dictionary",
          message: `Expected ${n} to be one of: Null, Undefined, Object.`
        });
      for (const a of s) {
        const { key: g, defaultValue: c, required: E, converter: h } = a;
        if (E === !0 && !e(n, g))
          throw r.errors.exception({
            header: "Dictionary",
            message: `Missing required key "${g}".`
          });
        let u = n[g];
        const B = e(a, "defaultValue");
        if (B && u !== null && (u = u ?? c), E || B || u !== void 0) {
          if (u = h(u), a.allowedValues && !a.allowedValues.includes(u))
            throw r.errors.exception({
              header: "Dictionary",
              message: `${u} is not an accepted type. Expected one of ${a.allowedValues.join(", ")}.`
            });
          o[g] = u;
        }
      }
      return o;
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
    for (let i = 0; i < n.length; i++)
      if (n.charCodeAt(i) > 255)
        throw new TypeError(
          `Cannot convert argument to a ByteString because the character at index ${i} has a value of ${n.charCodeAt(i)} which is greater than 255.`
        );
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
  ), Qc = {
    webidl: r
  }, Qc;
}
var Cc, Nh;
function Ht() {
  if (Nh)
    return Cc;
  Nh = 1;
  const t = Ze, { atob: e } = ps, { isomorphicDecode: A } = Rt(), r = new TextEncoder(), s = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, n = /(\u000A|\u000D|\u0009|\u0020)/, i = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
  function o(p) {
    t(p.protocol === "data:");
    let m = a(p, !0);
    m = m.slice(5);
    const R = { position: 0 };
    let D = c(
      ",",
      m,
      R
    );
    const G = D.length;
    if (D = w(D, !0, !0), R.position >= m.length)
      return "failure";
    R.position++;
    const H = m.slice(G + 1);
    let x = E(H);
    if (/;(\u0020){0,}base64$/i.test(D)) {
      const ee = A(x);
      if (x = B(ee), x === "failure")
        return "failure";
      D = D.slice(0, -6), D = D.replace(/(\u0020)+$/, ""), D = D.slice(0, -1);
    }
    D.startsWith(";") && (D = "text/plain" + D);
    let te = u(D);
    return te === "failure" && (te = u("text/plain;charset=US-ASCII")), { mimeType: te, body: x };
  }
  function a(p, m = !1) {
    if (!m)
      return p.href;
    const R = p.href, D = p.hash.length;
    return D === 0 ? R : R.substring(0, R.length - D);
  }
  function g(p, m, R) {
    let D = "";
    for (; R.position < m.length && p(m[R.position]); )
      D += m[R.position], R.position++;
    return D;
  }
  function c(p, m, R) {
    const D = m.indexOf(p, R.position), G = R.position;
    return D === -1 ? (R.position = m.length, m.slice(G)) : (R.position = D, m.slice(G, R.position));
  }
  function E(p) {
    const m = r.encode(p);
    return h(m);
  }
  function h(p) {
    const m = [];
    for (let R = 0; R < p.length; R++) {
      const D = p[R];
      if (D !== 37)
        m.push(D);
      else if (D === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(p[R + 1], p[R + 2])))
        m.push(37);
      else {
        const G = String.fromCharCode(p[R + 1], p[R + 2]), H = Number.parseInt(G, 16);
        m.push(H), R += 2;
      }
    }
    return Uint8Array.from(m);
  }
  function u(p) {
    p = C(p, !0, !0);
    const m = { position: 0 }, R = c(
      "/",
      p,
      m
    );
    if (R.length === 0 || !s.test(R) || m.position > p.length)
      return "failure";
    m.position++;
    let D = c(
      ";",
      p,
      m
    );
    if (D = C(D, !1, !0), D.length === 0 || !s.test(D))
      return "failure";
    const G = R.toLowerCase(), H = D.toLowerCase(), x = {
      type: G,
      subtype: H,
      /** @type {Map<string, string>} */
      parameters: /* @__PURE__ */ new Map(),
      // https://mimesniff.spec.whatwg.org/#mime-type-essence
      essence: `${G}/${H}`
    };
    for (; m.position < p.length; ) {
      m.position++, g(
        // https://fetch.spec.whatwg.org/#http-whitespace
        (Ee) => n.test(Ee),
        p,
        m
      );
      let te = g(
        (Ee) => Ee !== ";" && Ee !== "=",
        p,
        m
      );
      if (te = te.toLowerCase(), m.position < p.length) {
        if (p[m.position] === ";")
          continue;
        m.position++;
      }
      if (m.position > p.length)
        break;
      let ee = null;
      if (p[m.position] === '"')
        ee = Q(p, m, !0), c(
          ";",
          p,
          m
        );
      else if (ee = c(
        ";",
        p,
        m
      ), ee = C(ee, !1, !0), ee.length === 0)
        continue;
      te.length !== 0 && s.test(te) && (ee.length === 0 || i.test(ee)) && !x.parameters.has(te) && x.parameters.set(te, ee);
    }
    return x;
  }
  function B(p) {
    if (p = p.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, ""), p.length % 4 === 0 && (p = p.replace(/=?=$/, "")), p.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(p))
      return "failure";
    const m = e(p), R = new Uint8Array(m.length);
    for (let D = 0; D < m.length; D++)
      R[D] = m.charCodeAt(D);
    return R;
  }
  function Q(p, m, R) {
    const D = m.position;
    let G = "";
    for (t(p[m.position] === '"'), m.position++; G += g(
      (x) => x !== '"' && x !== "\\",
      p,
      m
    ), !(m.position >= p.length); ) {
      const H = p[m.position];
      if (m.position++, H === "\\") {
        if (m.position >= p.length) {
          G += "\\";
          break;
        }
        G += p[m.position], m.position++;
      } else {
        t(H === '"');
        break;
      }
    }
    return R ? G : p.slice(D, m.position);
  }
  function I(p) {
    t(p !== "failure");
    const { parameters: m, essence: R } = p;
    let D = R;
    for (let [G, H] of m.entries())
      D += ";", D += G, D += "=", s.test(H) || (H = H.replace(/(\\|")/g, "\\$1"), H = '"' + H, H += '"'), D += H;
    return D;
  }
  function f(p) {
    return p === "\r" || p === `
` || p === "	" || p === " ";
  }
  function C(p, m = !0, R = !0) {
    let D = 0, G = p.length - 1;
    if (m)
      for (; D < p.length && f(p[D]); D++)
        ;
    if (R)
      for (; G > 0 && f(p[G]); G--)
        ;
    return p.slice(D, G + 1);
  }
  function d(p) {
    return p === "\r" || p === `
` || p === "	" || p === "\f" || p === " ";
  }
  function w(p, m = !0, R = !0) {
    let D = 0, G = p.length - 1;
    if (m)
      for (; D < p.length && d(p[D]); D++)
        ;
    if (R)
      for (; G > 0 && d(p[G]); G--)
        ;
    return p.slice(D, G + 1);
  }
  return Cc = {
    dataURLProcessor: o,
    URLSerializer: a,
    collectASequenceOfCodePoints: g,
    collectASequenceOfCodePointsFast: c,
    stringPercentDecode: E,
    parseMIMEType: u,
    collectAnHTTPQuotedString: Q,
    serializeAMimeType: I
  }, Cc;
}
var Bc, Uh;
function Rl() {
  if (Uh)
    return Bc;
  Uh = 1;
  const { Blob: t, File: e } = ps, { types: A } = Ot, { kState: r } = Or(), { isBlobLike: s } = Rt(), { webidl: n } = VA(), { parseMIMEType: i, serializeAMimeType: o } = Ht(), { kEnumerableProperty: a } = fe, g = new TextEncoder();
  class c extends t {
    constructor(I, f, C = {}) {
      n.argumentLengthCheck(arguments, 2, { header: "File constructor" }), I = n.converters["sequence<BlobPart>"](I), f = n.converters.USVString(f), C = n.converters.FilePropertyBag(C);
      const d = f;
      let w = C.type, p;
      e: {
        if (w) {
          if (w = i(w), w === "failure") {
            w = "";
            break e;
          }
          w = o(w).toLowerCase();
        }
        p = C.lastModified;
      }
      super(h(I, C), { type: w }), this[r] = {
        name: d,
        lastModified: p,
        type: w
      };
    }
    get name() {
      return n.brandCheck(this, c), this[r].name;
    }
    get lastModified() {
      return n.brandCheck(this, c), this[r].lastModified;
    }
    get type() {
      return n.brandCheck(this, c), this[r].type;
    }
  }
  class E {
    constructor(I, f, C = {}) {
      const d = f, w = C.type, p = C.lastModified ?? Date.now();
      this[r] = {
        blobLike: I,
        name: d,
        type: w,
        lastModified: p
      };
    }
    stream(...I) {
      return n.brandCheck(this, E), this[r].blobLike.stream(...I);
    }
    arrayBuffer(...I) {
      return n.brandCheck(this, E), this[r].blobLike.arrayBuffer(...I);
    }
    slice(...I) {
      return n.brandCheck(this, E), this[r].blobLike.slice(...I);
    }
    text(...I) {
      return n.brandCheck(this, E), this[r].blobLike.text(...I);
    }
    get size() {
      return n.brandCheck(this, E), this[r].blobLike.size;
    }
    get type() {
      return n.brandCheck(this, E), this[r].blobLike.type;
    }
    get name() {
      return n.brandCheck(this, E), this[r].name;
    }
    get lastModified() {
      return n.brandCheck(this, E), this[r].lastModified;
    }
    get [Symbol.toStringTag]() {
      return "File";
    }
  }
  Object.defineProperties(c.prototype, {
    [Symbol.toStringTag]: {
      value: "File",
      configurable: !0
    },
    name: a,
    lastModified: a
  }), n.converters.Blob = n.interfaceConverter(t), n.converters.BlobPart = function(Q, I) {
    if (n.util.Type(Q) === "Object") {
      if (s(Q))
        return n.converters.Blob(Q, { strict: !1 });
      if (ArrayBuffer.isView(Q) || A.isAnyArrayBuffer(Q))
        return n.converters.BufferSource(Q, I);
    }
    return n.converters.USVString(Q, I);
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
      converter: (Q) => (Q = n.converters.DOMString(Q), Q = Q.toLowerCase(), Q !== "native" && (Q = "transparent"), Q),
      defaultValue: "transparent"
    }
  ]);
  function h(Q, I) {
    const f = [];
    for (const C of Q)
      if (typeof C == "string") {
        let d = C;
        I.endings === "native" && (d = u(d)), f.push(g.encode(d));
      } else
        A.isAnyArrayBuffer(C) || A.isTypedArray(C) ? C.buffer ? f.push(
          new Uint8Array(C.buffer, C.byteOffset, C.byteLength)
        ) : f.push(new Uint8Array(C)) : s(C) && f.push(C);
    return f;
  }
  function u(Q) {
    let I = `
`;
    return process.platform === "win32" && (I = `\r
`), Q.replace(/\r?\n/g, I);
  }
  function B(Q) {
    return e && Q instanceof e || Q instanceof c || Q && (typeof Q.stream == "function" || typeof Q.arrayBuffer == "function") && Q[Symbol.toStringTag] === "File";
  }
  return Bc = { File: c, FileLike: E, isFileLike: B }, Bc;
}
var Ic, Th;
function Dl() {
  if (Th)
    return Ic;
  Th = 1;
  const { isBlobLike: t, toUSVString: e, makeIterator: A } = Rt(), { kState: r } = Or(), { File: s, FileLike: n, isFileLike: i } = Rl(), { webidl: o } = VA(), { Blob: a, File: g } = ps, c = g ?? s;
  class E {
    constructor(B) {
      if (B !== void 0)
        throw o.errors.conversionFailed({
          prefix: "FormData constructor",
          argument: "Argument 1",
          types: ["undefined"]
        });
      this[r] = [];
    }
    append(B, Q, I = void 0) {
      if (o.brandCheck(this, E), o.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), arguments.length === 3 && !t(Q))
        throw new TypeError(
          "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      B = o.converters.USVString(B), Q = t(Q) ? o.converters.Blob(Q, { strict: !1 }) : o.converters.USVString(Q), I = arguments.length === 3 ? o.converters.USVString(I) : void 0;
      const f = h(B, Q, I);
      this[r].push(f);
    }
    delete(B) {
      o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), B = o.converters.USVString(B), this[r] = this[r].filter((Q) => Q.name !== B);
    }
    get(B) {
      o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), B = o.converters.USVString(B);
      const Q = this[r].findIndex((I) => I.name === B);
      return Q === -1 ? null : this[r][Q].value;
    }
    getAll(B) {
      return o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), B = o.converters.USVString(B), this[r].filter((Q) => Q.name === B).map((Q) => Q.value);
    }
    has(B) {
      return o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), B = o.converters.USVString(B), this[r].findIndex((Q) => Q.name === B) !== -1;
    }
    set(B, Q, I = void 0) {
      if (o.brandCheck(this, E), o.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), arguments.length === 3 && !t(Q))
        throw new TypeError(
          "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      B = o.converters.USVString(B), Q = t(Q) ? o.converters.Blob(Q, { strict: !1 }) : o.converters.USVString(Q), I = arguments.length === 3 ? e(I) : void 0;
      const f = h(B, Q, I), C = this[r].findIndex((d) => d.name === B);
      C !== -1 ? this[r] = [
        ...this[r].slice(0, C),
        f,
        ...this[r].slice(C + 1).filter((d) => d.name !== B)
      ] : this[r].push(f);
    }
    entries() {
      return o.brandCheck(this, E), A(
        () => this[r].map((B) => [B.name, B.value]),
        "FormData",
        "key+value"
      );
    }
    keys() {
      return o.brandCheck(this, E), A(
        () => this[r].map((B) => [B.name, B.value]),
        "FormData",
        "key"
      );
    }
    values() {
      return o.brandCheck(this, E), A(
        () => this[r].map((B) => [B.name, B.value]),
        "FormData",
        "value"
      );
    }
    /**
     * @param {(value: string, key: string, self: FormData) => void} callbackFn
     * @param {unknown} thisArg
     */
    forEach(B, Q = globalThis) {
      if (o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), typeof B != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
        );
      for (const [I, f] of this)
        B.apply(Q, [f, I, this]);
    }
  }
  E.prototype[Symbol.iterator] = E.prototype.entries, Object.defineProperties(E.prototype, {
    [Symbol.toStringTag]: {
      value: "FormData",
      configurable: !0
    }
  });
  function h(u, B, Q) {
    if (u = Buffer.from(u).toString("utf8"), typeof B == "string")
      B = Buffer.from(B).toString("utf8");
    else if (i(B) || (B = B instanceof a ? new c([B], "blob", { type: B.type }) : new n(B, "blob", { type: B.type })), Q !== void 0) {
      const I = {
        type: B.type,
        lastModified: B.lastModified
      };
      B = g && B instanceof g || B instanceof s ? new c([B], Q, I) : new n(B, Q, I);
    }
    return { name: u, value: B };
  }
  return Ic = { FormData: E }, Ic;
}
var dc, Lh;
function da() {
  if (Lh)
    return dc;
  Lh = 1;
  const t = kp(), e = fe, {
    ReadableStreamFrom: A,
    isBlobLike: r,
    isReadableStreamLike: s,
    readableStreamClose: n,
    createDeferredPromise: i,
    fullyReadBody: o
  } = Rt(), { FormData: a } = Dl(), { kState: g } = Or(), { webidl: c } = VA(), { DOMException: E, structuredClone: h } = ms(), { Blob: u, File: B } = ps, { kBodyUsed: Q } = ve, I = Ze, { isErrored: f } = fe, { isUint8Array: C, isArrayBuffer: d } = EQ, { File: w } = Rl(), { parseMIMEType: p, serializeAMimeType: m } = Ht();
  let R = globalThis.ReadableStream;
  const D = B ?? w, G = new TextEncoder(), H = new TextDecoder();
  function x(S, k = !1) {
    R || (R = Yr.ReadableStream);
    let v = null;
    S instanceof R ? v = S : r(S) ? v = S.stream() : v = new R({
      async pull(oe) {
        oe.enqueue(
          typeof P == "string" ? G.encode(P) : P
        ), queueMicrotask(() => n(oe));
      },
      start() {
      },
      type: void 0
    }), I(s(v));
    let M = null, P = null, j = null, Z = null;
    if (typeof S == "string")
      P = S, Z = "text/plain;charset=UTF-8";
    else if (S instanceof URLSearchParams)
      P = S.toString(), Z = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (d(S))
      P = new Uint8Array(S.slice());
    else if (ArrayBuffer.isView(S))
      P = new Uint8Array(S.buffer.slice(S.byteOffset, S.byteOffset + S.byteLength));
    else if (e.isFormDataLike(S)) {
      const oe = `----formdata-undici-0${`${Math.floor(Math.random() * 1e11)}`.padStart(11, "0")}`, we = `--${oe}\r
Content-Disposition: form-data`;
      /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
      const Qe = (Ce) => Ce.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), Pe = (Ce) => Ce.replace(/\r?\n|\r/g, `\r
`), ke = [], Ye = new Uint8Array([13, 10]);
      j = 0;
      let AA = !1;
      for (const [Ce, me] of S)
        if (typeof me == "string") {
          const BA = G.encode(we + `; name="${Qe(Pe(Ce))}"\r
\r
${Pe(me)}\r
`);
          ke.push(BA), j += BA.byteLength;
        } else {
          const BA = G.encode(`${we}; name="${Qe(Pe(Ce))}"` + (me.name ? `; filename="${Qe(me.name)}"` : "") + `\r
Content-Type: ${me.type || "application/octet-stream"}\r
\r
`);
          ke.push(BA, me, Ye), typeof me.size == "number" ? j += BA.byteLength + me.size + Ye.byteLength : AA = !0;
        }
      const de = G.encode(`--${oe}--`);
      ke.push(de), j += de.byteLength, AA && (j = null), P = S, M = async function* () {
        for (const Ce of ke)
          Ce.stream ? yield* Ce.stream() : yield Ce;
      }, Z = "multipart/form-data; boundary=" + oe;
    } else if (r(S))
      P = S, j = S.size, S.type && (Z = S.type);
    else if (typeof S[Symbol.asyncIterator] == "function") {
      if (k)
        throw new TypeError("keepalive");
      if (e.isDisturbed(S) || S.locked)
        throw new TypeError(
          "Response body object should not be disturbed or locked"
        );
      v = S instanceof R ? S : A(S);
    }
    if ((typeof P == "string" || e.isBuffer(P)) && (j = Buffer.byteLength(P)), M != null) {
      let oe;
      v = new R({
        async start() {
          oe = M(S)[Symbol.asyncIterator]();
        },
        async pull(we) {
          const { value: Qe, done: Pe } = await oe.next();
          return Pe ? queueMicrotask(() => {
            we.close();
          }) : f(v) || we.enqueue(new Uint8Array(Qe)), we.desiredSize > 0;
        },
        async cancel(we) {
          await oe.return();
        },
        type: void 0
      });
    }
    return [{ stream: v, source: P, length: j }, Z];
  }
  function te(S, k = !1) {
    return R || (R = Yr.ReadableStream), S instanceof R && (I(!e.isDisturbed(S), "The body has already been consumed."), I(!S.locked, "The stream is locked.")), x(S, k);
  }
  function ee(S) {
    const [k, v] = S.stream.tee(), M = h(v, { transfer: [v] }), [, P] = M.tee();
    return S.stream = k, {
      stream: P,
      length: S.length,
      source: S.source
    };
  }
  async function* Ee(S) {
    if (S)
      if (C(S))
        yield S;
      else {
        const k = S.stream;
        if (e.isDisturbed(k))
          throw new TypeError("The body has already been consumed.");
        if (k.locked)
          throw new TypeError("The stream is locked.");
        k[Q] = !0, yield* k;
      }
  }
  function q(S) {
    if (S.aborted)
      throw new E("The operation was aborted.", "AbortError");
  }
  function $(S) {
    return {
      blob() {
        return ie(this, (v) => {
          let M = N(this);
          return M === "failure" ? M = "" : M && (M = m(M)), new u([v], { type: M });
        }, S);
      },
      arrayBuffer() {
        return ie(this, (v) => new Uint8Array(v).buffer, S);
      },
      text() {
        return ie(this, b, S);
      },
      json() {
        return ie(this, V, S);
      },
      async formData() {
        c.brandCheck(this, S), q(this[g]);
        const v = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(v)) {
          const M = {};
          for (const [O, oe] of this.headers)
            M[O.toLowerCase()] = oe;
          const P = new a();
          let j;
          try {
            j = new t({
              headers: M,
              preservePath: !0
            });
          } catch (O) {
            throw new E(`${O}`, "AbortError");
          }
          j.on("field", (O, oe) => {
            P.append(O, oe);
          }), j.on("file", (O, oe, we, Qe, Pe) => {
            const ke = [];
            if (Qe === "base64" || Qe.toLowerCase() === "base64") {
              let Ye = "";
              oe.on("data", (AA) => {
                Ye += AA.toString().replace(/[\r\n]/gm, "");
                const de = Ye.length - Ye.length % 4;
                ke.push(Buffer.from(Ye.slice(0, de), "base64")), Ye = Ye.slice(de);
              }), oe.on("end", () => {
                ke.push(Buffer.from(Ye, "base64")), P.append(O, new D(ke, we, { type: Pe }));
              });
            } else
              oe.on("data", (Ye) => {
                ke.push(Ye);
              }), oe.on("end", () => {
                P.append(O, new D(ke, we, { type: Pe }));
              });
          });
          const Z = new Promise((O, oe) => {
            j.on("finish", O), j.on("error", (we) => oe(new TypeError(we)));
          });
          if (this.body !== null)
            for await (const O of Ee(this[g].body))
              j.write(O);
          return j.end(), await Z, P;
        } else if (/application\/x-www-form-urlencoded/.test(v)) {
          let M;
          try {
            let j = "";
            const Z = new TextDecoder("utf-8", { ignoreBOM: !0 });
            for await (const O of Ee(this[g].body)) {
              if (!C(O))
                throw new TypeError("Expected Uint8Array chunk");
              j += Z.decode(O, { stream: !0 });
            }
            j += Z.decode(), M = new URLSearchParams(j);
          } catch (j) {
            throw Object.assign(new TypeError(), { cause: j });
          }
          const P = new a();
          for (const [j, Z] of M)
            P.append(j, Z);
          return P;
        } else
          throw await Promise.resolve(), q(this[g]), c.errors.exception({
            header: `${S.name}.formData`,
            message: "Could not parse content as FormData."
          });
      }
    };
  }
  function se(S) {
    Object.assign(S.prototype, $(S));
  }
  async function ie(S, k, v) {
    if (c.brandCheck(S, v), q(S[g]), K(S[g].body))
      throw new TypeError("Body is unusable");
    const M = i(), P = (Z) => M.reject(Z), j = (Z) => {
      try {
        M.resolve(k(Z));
      } catch (O) {
        P(O);
      }
    };
    return S[g].body == null ? (j(new Uint8Array()), M.promise) : (await o(S[g].body, j, P), M.promise);
  }
  function K(S) {
    return S != null && (S.stream.locked || e.isDisturbed(S.stream));
  }
  function b(S) {
    return S.length === 0 ? "" : (S[0] === 239 && S[1] === 187 && S[2] === 191 && (S = S.subarray(3)), H.decode(S));
  }
  function V(S) {
    return JSON.parse(b(S));
  }
  function N(S) {
    const { headersList: k } = S[g], v = k.get("content-type");
    return v === null ? "failure" : p(v);
  }
  return dc = {
    extractBody: x,
    safelyExtractBody: te,
    cloneBody: ee,
    mixinBody: se
  }, dc;
}
const {
  InvalidArgumentError: De,
  NotSupportedError: Sp
} = be, qt = Ze, { kHTTP2BuildRequest: Fp, kHTTP2CopyHeaders: Np, kHTTP1BuildRequest: Up } = ve, _A = fe, NC = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, UC = /[^\t\x20-\x7e\x80-\xff]/, Tp = /[^\u0021-\u00ff]/, lt = Symbol("handler"), eA = {};
let fc;
try {
  const t = require("diagnostics_channel");
  eA.create = t.channel("undici:request:create"), eA.bodySent = t.channel("undici:request:bodySent"), eA.headers = t.channel("undici:request:headers"), eA.trailers = t.channel("undici:request:trailers"), eA.error = t.channel("undici:request:error");
} catch {
  eA.create = { hasSubscribers: !1 }, eA.bodySent = { hasSubscribers: !1 }, eA.headers = { hasSubscribers: !1 }, eA.trailers = { hasSubscribers: !1 }, eA.error = { hasSubscribers: !1 };
}
let Lp = class Gg {
  constructor(e, {
    path: A,
    method: r,
    body: s,
    headers: n,
    query: i,
    idempotent: o,
    blocking: a,
    upgrade: g,
    headersTimeout: c,
    bodyTimeout: E,
    reset: h,
    throwOnError: u,
    expectContinue: B
  }, Q) {
    if (typeof A != "string")
      throw new De("path must be a string");
    if (A[0] !== "/" && !(A.startsWith("http://") || A.startsWith("https://")) && r !== "CONNECT")
      throw new De("path must be an absolute URL or start with a slash");
    if (Tp.exec(A) !== null)
      throw new De("invalid request path");
    if (typeof r != "string")
      throw new De("method must be a string");
    if (NC.exec(r) === null)
      throw new De("invalid request method");
    if (g && typeof g != "string")
      throw new De("upgrade must be a string");
    if (c != null && (!Number.isFinite(c) || c < 0))
      throw new De("invalid headersTimeout");
    if (E != null && (!Number.isFinite(E) || E < 0))
      throw new De("invalid bodyTimeout");
    if (h != null && typeof h != "boolean")
      throw new De("invalid reset");
    if (B != null && typeof B != "boolean")
      throw new De("invalid expectContinue");
    if (this.headersTimeout = c, this.bodyTimeout = E, this.throwOnError = u === !0, this.method = r, this.abort = null, s == null)
      this.body = null;
    else if (_A.isStream(s)) {
      this.body = s;
      const I = this.body._readableState;
      (!I || !I.autoDestroy) && (this.endHandler = function() {
        _A.destroy(this);
      }, this.body.on("end", this.endHandler)), this.errorHandler = (f) => {
        this.abort ? this.abort(f) : this.error = f;
      }, this.body.on("error", this.errorHandler);
    } else if (_A.isBuffer(s))
      this.body = s.byteLength ? s : null;
    else if (ArrayBuffer.isView(s))
      this.body = s.buffer.byteLength ? Buffer.from(s.buffer, s.byteOffset, s.byteLength) : null;
    else if (s instanceof ArrayBuffer)
      this.body = s.byteLength ? Buffer.from(s) : null;
    else if (typeof s == "string")
      this.body = s.length ? Buffer.from(s) : null;
    else if (_A.isFormDataLike(s) || _A.isIterable(s) || _A.isBlobLike(s))
      this.body = s;
    else
      throw new De("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
    if (this.completed = !1, this.aborted = !1, this.upgrade = g || null, this.path = i ? _A.buildURL(A, i) : A, this.origin = e, this.idempotent = o ?? (r === "HEAD" || r === "GET"), this.blocking = a ?? !1, this.reset = h ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = B ?? !1, Array.isArray(n)) {
      if (n.length % 2 !== 0)
        throw new De("headers array must be even");
      for (let I = 0; I < n.length; I += 2)
        Dn(this, n[I], n[I + 1]);
    } else if (n && typeof n == "object") {
      const I = Object.keys(n);
      for (let f = 0; f < I.length; f++) {
        const C = I[f];
        Dn(this, C, n[C]);
      }
    } else if (n != null)
      throw new De("headers must be an object or an array");
    if (_A.isFormDataLike(this.body)) {
      if (_A.nodeMajor < 16 || _A.nodeMajor === 16 && _A.nodeMinor < 8)
        throw new De("Form-Data bodies are only supported in node v16.8 and newer.");
      fc || (fc = da().extractBody);
      const [I, f] = fc(s);
      this.contentType == null && (this.contentType = f, this.headers += `content-type: ${f}\r
`), this.body = I.stream, this.contentLength = I.length;
    } else
      _A.isBlobLike(s) && this.contentType == null && s.type && (this.contentType = s.type, this.headers += `content-type: ${s.type}\r
`);
    _A.validateHandler(Q, r, g), this.servername = _A.getServerName(this.host), this[lt] = Q, eA.create.hasSubscribers && eA.create.publish({ request: this });
  }
  onBodySent(e) {
    if (this[lt].onBodySent)
      try {
        return this[lt].onBodySent(e);
      } catch (A) {
        this.abort(A);
      }
  }
  onRequestSent() {
    if (eA.bodySent.hasSubscribers && eA.bodySent.publish({ request: this }), this[lt].onRequestSent)
      try {
        return this[lt].onRequestSent();
      } catch (e) {
        this.abort(e);
      }
  }
  onConnect(e) {
    if (qt(!this.aborted), qt(!this.completed), this.error)
      e(this.error);
    else
      return this.abort = e, this[lt].onConnect(e);
  }
  onHeaders(e, A, r, s) {
    qt(!this.aborted), qt(!this.completed), eA.headers.hasSubscribers && eA.headers.publish({ request: this, response: { statusCode: e, headers: A, statusText: s } });
    try {
      return this[lt].onHeaders(e, A, r, s);
    } catch (n) {
      this.abort(n);
    }
  }
  onData(e) {
    qt(!this.aborted), qt(!this.completed);
    try {
      return this[lt].onData(e);
    } catch (A) {
      return this.abort(A), !1;
    }
  }
  onUpgrade(e, A, r) {
    return qt(!this.aborted), qt(!this.completed), this[lt].onUpgrade(e, A, r);
  }
  onComplete(e) {
    this.onFinally(), qt(!this.aborted), this.completed = !0, eA.trailers.hasSubscribers && eA.trailers.publish({ request: this, trailers: e });
    try {
      return this[lt].onComplete(e);
    } catch (A) {
      this.onError(A);
    }
  }
  onError(e) {
    if (this.onFinally(), eA.error.hasSubscribers && eA.error.publish({ request: this, error: e }), !this.aborted)
      return this.aborted = !0, this[lt].onError(e);
  }
  onFinally() {
    this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
  }
  // TODO: adjust to support H2
  addHeader(e, A) {
    return Dn(this, e, A), this;
  }
  static [Up](e, A, r) {
    return new Gg(e, A, r);
  }
  static [Fp](e, A, r) {
    const s = A.headers;
    A = { ...A, headers: null };
    const n = new Gg(e, A, r);
    if (n.headers = {}, Array.isArray(s)) {
      if (s.length % 2 !== 0)
        throw new De("headers array must be even");
      for (let i = 0; i < s.length; i += 2)
        Dn(n, s[i], s[i + 1], !0);
    } else if (s && typeof s == "object") {
      const i = Object.keys(s);
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        Dn(n, a, s[a], !0);
      }
    } else if (s != null)
      throw new De("headers must be an object or an array");
    return n;
  }
  static [Np](e) {
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
    throw new De(`invalid ${t} header`);
  if (e = e != null ? `${e}` : "", UC.exec(e) !== null)
    throw new De(`invalid ${t} header`);
  return A ? e : `${t}: ${e}\r
`;
}
function Dn(t, e, A, r = !1) {
  if (A && typeof A == "object" && !Array.isArray(A))
    throw new De(`invalid ${e} header`);
  if (A === void 0)
    return;
  if (t.host === null && e.length === 4 && e.toLowerCase() === "host") {
    if (UC.exec(A) !== null)
      throw new De(`invalid ${e} header`);
    t.host = A;
  } else if (t.contentLength === null && e.length === 14 && e.toLowerCase() === "content-length") {
    if (t.contentLength = parseInt(A, 10), !Number.isFinite(t.contentLength))
      throw new De("invalid content-length header");
  } else if (t.contentType === null && e.length === 12 && e.toLowerCase() === "content-type")
    t.contentType = A, r ? t.headers[e] = Vr(e, A, r) : t.headers += Vr(e, A);
  else {
    if (e.length === 17 && e.toLowerCase() === "transfer-encoding")
      throw new De("invalid transfer-encoding header");
    if (e.length === 10 && e.toLowerCase() === "connection") {
      const s = typeof A == "string" ? A.toLowerCase() : null;
      if (s !== "close" && s !== "keep-alive")
        throw new De("invalid connection header");
      s === "close" && (t.reset = !0);
    } else {
      if (e.length === 10 && e.toLowerCase() === "keep-alive")
        throw new De("invalid keep-alive header");
      if (e.length === 7 && e.toLowerCase() === "upgrade")
        throw new De("invalid upgrade header");
      if (e.length === 6 && e.toLowerCase() === "expect")
        throw new Sp("expect header not supported");
      if (NC.exec(e) === null)
        throw new De("invalid header key");
      if (Array.isArray(A))
        for (let s = 0; s < A.length; s++)
          r ? t.headers[e] ? t.headers[e] += `,${Vr(e, A[s], r)}` : t.headers[e] = Vr(e, A[s], r) : t.headers += Vr(e, A[s]);
      else
        r ? t.headers[e] = Vr(e, A, r) : t.headers += Vr(e, A);
    }
  }
}
var vp = Lp;
const Mp = Ji;
let Gp = class extends Mp {
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
var bl = Gp;
const Yp = bl, {
  ClientDestroyedError: pc,
  ClientClosedError: xp,
  InvalidArgumentError: bs
} = be, { kDestroy: Jp, kClose: Op, kDispatch: mc, kInterceptors: Wr } = ve, ks = Symbol("destroyed"), bn = Symbol("closed"), jt = Symbol("onDestroyed"), Ss = Symbol("onClosed"), eo = Symbol("Intercepted Dispatch");
let _p = class extends Yp {
  constructor() {
    super(), this[ks] = !1, this[jt] = null, this[bn] = !1, this[Ss] = [];
  }
  get destroyed() {
    return this[ks];
  }
  get closed() {
    return this[bn];
  }
  get interceptors() {
    return this[Wr];
  }
  set interceptors(e) {
    if (e) {
      for (let A = e.length - 1; A >= 0; A--)
        if (typeof this[Wr][A] != "function")
          throw new bs("interceptor must be an function");
    }
    this[Wr] = e;
  }
  close(e) {
    if (e === void 0)
      return new Promise((r, s) => {
        this.close((n, i) => n ? s(n) : r(i));
      });
    if (typeof e != "function")
      throw new bs("invalid callback");
    if (this[ks]) {
      queueMicrotask(() => e(new pc(), null));
      return;
    }
    if (this[bn]) {
      this[Ss] ? this[Ss].push(e) : queueMicrotask(() => e(null, null));
      return;
    }
    this[bn] = !0, this[Ss].push(e);
    const A = () => {
      const r = this[Ss];
      this[Ss] = null;
      for (let s = 0; s < r.length; s++)
        r[s](null, null);
    };
    this[Op]().then(() => this.destroy()).then(() => {
      queueMicrotask(A);
    });
  }
  destroy(e, A) {
    if (typeof e == "function" && (A = e, e = null), A === void 0)
      return new Promise((s, n) => {
        this.destroy(e, (i, o) => i ? (
          /* istanbul ignore next: should never error */
          n(i)
        ) : s(o));
      });
    if (typeof A != "function")
      throw new bs("invalid callback");
    if (this[ks]) {
      this[jt] ? this[jt].push(A) : queueMicrotask(() => A(null, null));
      return;
    }
    e || (e = new pc()), this[ks] = !0, this[jt] = this[jt] || [], this[jt].push(A);
    const r = () => {
      const s = this[jt];
      this[jt] = null;
      for (let n = 0; n < s.length; n++)
        s[n](null, null);
    };
    this[Jp](e).then(() => {
      queueMicrotask(r);
    });
  }
  [eo](e, A) {
    if (!this[Wr] || this[Wr].length === 0)
      return this[eo] = this[mc], this[mc](e, A);
    let r = this[mc].bind(this);
    for (let s = this[Wr].length - 1; s >= 0; s--)
      r = this[Wr][s](r);
    return this[eo] = r, r(e, A);
  }
  dispatch(e, A) {
    if (!A || typeof A != "object")
      throw new bs("handler must be an object");
    try {
      if (!e || typeof e != "object")
        throw new bs("opts must be an object.");
      if (this[ks] || this[jt])
        throw new pc();
      if (this[bn])
        throw new xp();
      return this[eo](e, A);
    } catch (r) {
      if (typeof A.onError != "function")
        throw new bs("invalid onError method");
      return A.onError(r), !1;
    }
  }
};
var fa = _p;
const Hp = El, vh = Ze, TC = fe, { InvalidArgumentError: Pp, ConnectTimeoutError: Vp } = be;
let wc, Yg;
le.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? Yg = class {
  constructor(e) {
    this._maxCachedSessions = e, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new le.FinalizationRegistry((A) => {
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
} : Yg = class {
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
function Wp({ allowH2: t, maxCachedSessions: e, socketPath: A, timeout: r, ...s }) {
  if (e != null && (!Number.isInteger(e) || e < 0))
    throw new Pp("maxCachedSessions must be a positive integer or zero");
  const n = { path: A, ...s }, i = new Yg(e ?? 100);
  return r = r ?? 1e4, t = t ?? !1, function({ hostname: a, host: g, protocol: c, port: E, servername: h, localAddress: u, httpSocket: B }, Q) {
    let I;
    if (c === "https:") {
      wc || (wc = gQ), h = h || n.servername || TC.getServerName(g) || null;
      const C = h || a, d = i.get(C) || null;
      vh(C), I = wc.connect({
        highWaterMark: 16384,
        // TLS in node can't have bigger HWM anyway...
        ...n,
        servername: h,
        session: d,
        localAddress: u,
        // TODO(HTTP/2): Add support for h2c
        ALPNProtocols: t ? ["http/1.1", "h2"] : ["http/1.1"],
        socket: B,
        // upgrade socket connection
        port: E || 443,
        host: a
      }), I.on("session", function(w) {
        i.set(C, w);
      });
    } else
      vh(!B, "httpSocket can only be sent on TLS update"), I = Hp.connect({
        highWaterMark: 64 * 1024,
        // Same as nodejs fs streams.
        ...n,
        localAddress: u,
        port: E || 80,
        host: a
      });
    if (n.keepAlive == null || n.keepAlive) {
      const C = n.keepAliveInitialDelay === void 0 ? 6e4 : n.keepAliveInitialDelay;
      I.setKeepAlive(!0, C);
    }
    const f = qp(() => jp(I), r);
    return I.setNoDelay(!0).once(c === "https:" ? "secureConnect" : "connect", function() {
      if (f(), Q) {
        const C = Q;
        Q = null, C(null, this);
      }
    }).on("error", function(C) {
      if (f(), Q) {
        const d = Q;
        Q = null, d(C);
      }
    }), I;
  };
}
function qp(t, e) {
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
function jp(t) {
  TC.destroy(t, new Vp());
}
var pa = Wp, yc = {}, kn = {}, Mh;
function zp() {
  if (Mh)
    return kn;
  Mh = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.enumToMap = void 0;
  function t(e) {
    const A = {};
    return Object.keys(e).forEach((r) => {
      const s = e[r];
      typeof s == "number" && (A[r] = s);
    }), A;
  }
  return kn.enumToMap = t, kn;
}
var Gh;
function Zp() {
  return Gh || (Gh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SPECIAL_HEADERS = t.HEADER_STATE = t.MINOR = t.MAJOR = t.CONNECTION_TOKEN_CHARS = t.HEADER_CHARS = t.TOKEN = t.STRICT_TOKEN = t.HEX = t.URL_CHAR = t.STRICT_URL_CHAR = t.USERINFO_CHARS = t.MARK = t.ALPHANUM = t.NUM = t.HEX_MAP = t.NUM_MAP = t.ALPHA = t.FINISH = t.H_METHOD_MAP = t.METHOD_MAP = t.METHODS_RTSP = t.METHODS_ICE = t.METHODS_HTTP = t.METHODS = t.LENIENT_FLAGS = t.FLAGS = t.TYPE = t.ERROR = void 0;
    const e = zp();
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
    for (let s = 65; s <= 90; s++)
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
  }(yc)), yc;
}
const Fs = fe, { kBodyUsed: Kn } = ve, kl = Ze, { InvalidArgumentError: $p } = be, Xp = Ji, Kp = [300, 301, 302, 303, 307, 308], Yh = Symbol("body");
class xh {
  constructor(e) {
    this[Yh] = e, this[Kn] = !1;
  }
  async *[Symbol.asyncIterator]() {
    kl(!this[Kn], "disturbed"), this[Kn] = !0, yield* this[Yh];
  }
}
let em = class {
  constructor(e, A, r, s) {
    if (A != null && (!Number.isInteger(A) || A < 0))
      throw new $p("maxRedirections must be a positive number");
    Fs.validateHandler(s, r.method, r.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = { ...r, maxRedirections: 0 }, this.maxRedirections = A, this.handler = s, this.history = [], Fs.isStream(this.opts.body) ? (Fs.bodyLength(this.opts.body) === 0 && this.opts.body.on("data", function() {
      kl(!1);
    }), typeof this.opts.body.readableDidRead != "boolean" && (this.opts.body[Kn] = !1, Xp.prototype.on.call(this.opts.body, "data", function() {
      this[Kn] = !0;
    }))) : this.opts.body && typeof this.opts.body.pipeTo == "function" ? this.opts.body = new xh(this.opts.body) : this.opts.body && typeof this.opts.body != "string" && !ArrayBuffer.isView(this.opts.body) && Fs.isIterable(this.opts.body) && (this.opts.body = new xh(this.opts.body));
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
    if (this.location = this.history.length >= this.maxRedirections || Fs.isDisturbed(this.opts.body) ? null : Am(e, A), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location)
      return this.handler.onHeaders(e, A, r, s);
    const { origin: n, pathname: i, search: o } = Fs.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), a = o ? `${i}${o}` : i;
    this.opts.headers = tm(this.opts.headers, e === 303, this.opts.origin !== n), this.opts.path = a, this.opts.origin = n, this.opts.maxRedirections = 0, this.opts.query = null, e === 303 && this.opts.method !== "HEAD" && (this.opts.method = "GET", this.opts.body = null);
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
function Am(t, e) {
  if (Kp.indexOf(t) === -1)
    return null;
  for (let A = 0; A < e.length; A += 2)
    if (e[A].toString().toLowerCase() === "location")
      return e[A + 1];
}
function Jh(t, e, A) {
  return t.length === 4 && t.toString().toLowerCase() === "host" || e && t.toString().toLowerCase().indexOf("content-") === 0 || A && t.length === 13 && t.toString().toLowerCase() === "authorization" || A && t.length === 6 && t.toString().toLowerCase() === "cookie";
}
function tm(t, e, A) {
  const r = [];
  if (Array.isArray(t))
    for (let s = 0; s < t.length; s += 2)
      Jh(t[s], e, A) || r.push(t[s], t[s + 1]);
  else if (t && typeof t == "object")
    for (const s of Object.keys(t))
      Jh(s, e, A) || r.push(s, t[s]);
  else
    kl(t == null, "headers must be an object or an array");
  return r;
}
var LC = em;
const rm = LC;
function sm({ maxRedirections: t }) {
  return (e) => function(r, s) {
    const { maxRedirections: n = t } = r;
    if (!n)
      return e(r, s);
    const i = new rm(e, n, r, s);
    return r = { ...r, maxRedirections: 0 }, e(r, i);
  };
}
var Sl = sm, Rc, Oh;
function _h() {
  return Oh || (Oh = 1, Rc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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ADcDACAAQShqQgA3AwAgAEEgakIANwMAIABBEGpCADcDACAAQQhqQgA3AwAgAEHdATYCHEEAC3sBAX8CQCAAKAIMIgMNAAJAIAAoAgRFDQAgACABNgIECwJAIAAgASACEMSAgIAAIgMNACAAKAIMDwsgACADNgIcQQAhAyAAKAIEIgFFDQAgACABIAIgACgCCBGBgICAAAAiAUUNACAAIAI2AhQgACABNgIMIAEhAwsgAwvk8wEDDn8DfgR/I4CAgIAAQRBrIgMkgICAgAAgASEEIAEhBSABIQYgASEHIAEhCCABIQkgASEKIAEhCyABIQwgASENIAEhDiABIQ8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCHCIQQX9qDt0B2gEB2QECAwQFBgcICQoLDA0O2AEPENcBERLWARMUFRYXGBkaG+AB3wEcHR7VAR8gISIjJCXUASYnKCkqKyzTAdIBLS7RAdABLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVG2wFHSElKzwHOAUvNAUzMAU1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4ABgQGCAYMBhAGFAYYBhwGIAYkB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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FCAAIBA2AgxBACEQDLIBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxNCyAAQdMANgIcIAAgATYCFCAAIBA2AgxBACEQDLEBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxRCyAAQeUANgIcIAAgATYCFCAAIBA2AgxBACEQDLABCyAAQQA2AhwgACABNgIUIABBxoqAgAA2AhAgAEEHNgIMQQAhEAyvAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHSADYCHCAAIAE2AhQgACAQNgIMQQAhEAyuAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHTADYCHCAAIAE2AhQgACAQNgIMQQAhEAytAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMTQsgAEHlADYCHCAAIAE2AhQgACAQNgIMQQAhEAysAQsgAEEANgIcIAAgATYCFCAAQdyIgIAANgIQIABBBzYCDEEAIRAMqwELIBBBP0cNASABQQFqIQELQQUhEAyQAQtBACEQIABBADYCHCAAIAE2AhQgAEH9koCAADYCECAAQQc2AgwMqAELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0gA2AhwgACABNgIUIAAgEDYCDEEAIRAMpwELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0wA2AhwgACABNgIUIAAgEDYCDEEAIRAMpgELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEYLIABB5QA2AhwgACABNgIUIAAgEDYCDEEAIRAMpQELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0gA2AhwgACAUNgIUIAAgATYCDEEAIRAMpAELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0wA2AhwgACAUNgIUIAAgATYCDEEAIRAMowELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDEMLIABB5QA2AhwgACAU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YWdlX2JlZ2luYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlYCBjYWxsYmFjayBlcnJvcgBgb25fc3RhdHVzX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdmVyc2lvbl9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3VybF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21ldGhvZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lYCBjYWxsYmFjayBlcnJvcgBVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNlcnZlcgBJbnZhbGlkIGhlYWRlciB2YWx1ZSBjaGFyAEludmFsaWQgaGVhZGVyIGZpZWxkIGNoYXIAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl92ZXJzaW9uAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBIVFRQIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgdmFsdWUATWlzc2luZyBleHBlY3RlZCBMRiBhZnRlciBoZWFkZXIgdmFsdWUASW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHF1b3RlIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGVkIHZhbHVlAFBhdXNlZCBieSBvbl9oZWFkZXJzX2NvbXBsZXRlAEludmFsaWQgRU9GIHN0YXRlAG9uX3Jlc2V0IHBhdXNlAG9uX2NodW5rX2hlYWRlciBwYXVzZQBvbl9tZXNzYWdlX2JlZ2luIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZSBwYXVzZQBvbl9zdGF0dXNfY29tcGxldGUgcGF1c2UAb25fdmVyc2lvbl9jb21wbGV0ZSBwYXVzZQBvbl91cmxfY29tcGxldGUgcGF1c2UAb25fY2h1bmtfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlIHBhdXNlAG9uX21lc3NhZ2VfY29tcGxldGUgcGF1c2UAb25fbWV0aG9kX2NvbXBsZXRlIHBhdXNlAG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19leHRlbnNpb25fbmFtZSBwYXVzZQBVbmV4cGVjdGVkIHNwYWNlIGFmdGVyIHN0YXJ0IGxpbmUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fbmFtZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIG5hbWUAUGF1c2Ugb24gQ09OTkVDVC9VcGdyYWRlAFBhdXNlIG9uIFBSSS9VcGdyYWRlAEV4cGVjdGVkIEhUVFAvMiBDb25uZWN0aW9uIFByZWZhY2UAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9tZXRob2QARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgbWV0aG9kAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX2ZpZWxkAFBhdXNlZABJbnZhbGlkIHdvcmQgZW5jb3VudGVyZWQASW52YWxpZCBtZXRob2QgZW5jb3VudGVyZWQAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzY2hlbWEAUmVxdWVzdCBoYXMgaW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgAFNXSVRDSF9QUk9YWQBVU0VfUFJPWFkATUtBQ1RJVklUWQBVTlBST0NFU1NBQkxFX0VOVElUWQBDT1BZAE1PVkVEX1BFUk1BTkVOVExZAFRPT19FQVJMWQBOT1RJRlkARkFJTEVEX0RFUEVOREVOQ1kAQkFEX0dBVEVXQVkAUExBWQBQVVQAQ0hFQ0tPVVQAR0FURVdBWV9USU1FT1VUAFJFUVVFU1RfVElNRU9VVABORVRXT1JLX0NPTk5FQ1RfVElNRU9VVABDT05ORUNUSU9OX1RJTUVPVVQATE9HSU5fVElNRU9VVABORVRXT1JLX1JFQURfVElNRU9VVABQT1NUAE1JU0RJUkVDVEVEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9SRVFVRVNUAENMSUVOVF9DTE9TRURfTE9BRF9CQUxBTkNFRF9SRVFVRVNUAEJBRF9SRVFVRVNUAEhUVFBfUkVRVUVTVF9TRU5UX1RPX0hUVFBTX1BPUlQAUkVQT1JUAElNX0FfVEVBUE9UAFJFU0VUX0NPTlRFTlQATk9fQ09OVEVOVABQQVJUSUFMX0NPTlRFTlQASFBFX0lOVkFMSURfQ09OU1RBTlQASFBFX0NCX1JFU0VUAEdFVABIUEVfU1RSSUNUAENPTkZMSUNUAFRFTVBPUkFSWV9SRURJUkVDVABQRVJNQU5FTlRfUkVESVJFQ1QAQ09OTkVDVABNVUxUSV9TVEFUVVMASFBFX0lOVkFMSURfU1RBVFVTAFRPT19NQU5ZX1JFUVVFU1RTAEVBUkxZX0hJTlRTAFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TAE9QVElPTlMAU1dJVENISU5HX1BST1RPQ09MUwBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUwBNVUxUSVBMRV9DSE9JQ0VTAElOVEVSTkFMX1NFUlZFUl9FUlJPUgBXRUJfU0VSVkVSX1VOS05PV05fRVJST1IAUkFJTEdVTl9FUlJPUgBJREVOVElUWV9QUk9WSURFUl9BVVRIRU5USUNBVElPTl9FUlJPUgBTU0xfQ0VSVElGSUNBVEVfRVJST1IASU5WQUxJRF9YX0ZPUldBUkRFRF9GT1IAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAFNFRV9PVEhFUgBIUEVfQ0JfQ0hVTktfSEVBREVSAE1LQ0FMRU5EQVIAU0VUVVAAV0VCX1NFUlZFUl9JU19ET1dOAFRFQVJET1dOAEhQRV9DTE9TRURfQ09OTkVDVElPTgBIRVVSSVNUSUNfRVhQSVJBVElPTgBESVNDT05ORUNURURfT1BFUkFUSU9OAE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OAEhQRV9JTlZBTElEX1ZFUlNJT04ASFBFX0NCX01FU1NBR0VfQkVHSU4AU0lURV9JU19GUk9aRU4ASFBFX0lOVkFMSURfSEVBREVSX1RPS0VOAElOVkFMSURfVE9LRU4ARk9SQklEREVOAEVOSEFOQ0VfWU9VUl9DQUxNAEhQRV9JTlZBTElEX1VSTABCTE9DS0VEX0JZX1BBUkVOVEFMX0NPTlRST0wATUtDT0wAQUNMAEhQRV9JTlRFUk5BTABSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFX1VOT0ZGSUNJQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAFJFVFJZX1dJVEgASFBFX0lOVkFMSURfQ09OVEVOVF9MRU5HVEgASFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgARkxVU0gAUFJPUFBBVENIAE0tU0VBUkNIAFVSSV9UT09fTE9ORwBQUk9DRVNTSU5HAE1JU0NFTExBTkVPVVNfUEVSU0lTVEVOVF9XQVJOSU5HAE1JU0NFTExBTkVPVVNfV0FSTklORwBIUEVfSU5WQUxJRF9UUkFOU0ZFUl9FTkNPRElORwBFeHBlY3RlZCBDUkxGAEhQRV9JTlZBTElEX0NIVU5LX1NJWkUATU9WRQBDT05USU5VRQBIUEVfQ0JfU1RBVFVTX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJTX0NPTVBMRVRFAEhQRV9DQl9WRVJTSU9OX0NPTVBMRVRFAEhQRV9DQl9VUkxfQ09NUExFVEUASFBFX0NCX0NIVU5LX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfVkFMVUVfQ09NUExFVEUASFBFX0NCX0NIVU5LX0VYVEVOU0lPTl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX05BTUVfQ09NUExFVEUASFBFX0NCX01FU1NBR0VfQ09NUExFVEUASFBFX0NCX01FVEhPRF9DT01QTEVURQBIUEVfQ0JfSEVBREVSX0ZJRUxEX0NPTVBMRVRFAERFTEVURQBIUEVfSU5WQUxJRF9FT0ZfU1RBVEUASU5WQUxJRF9TU0xfQ0VSVElGSUNBVEUAUEFVU0UATk9fUkVTUE9OU0UAVU5TVVBQT1JURURfTUVESUFfVFlQRQBHT05FAE5PVF9BQ0NFUFRBQkxFAFNFUlZJQ0VfVU5BVkFJTEFCTEUAUkFOR0VfTk9UX1NBVElTRklBQkxFAE9SSUdJTl9JU19VTlJFQUNIQUJMRQBSRVNQT05TRV9JU19TVEFMRQBQVVJHRQBNRVJHRQBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFAFJFUVVFU1RfSEVBREVSX1RPT19MQVJHRQBQQVlMT0FEX1RPT19MQVJHRQBJTlNVRkZJQ0lFTlRfU1RPUkFHRQBIUEVfUEFVU0VEX1VQR1JBREUASFBFX1BBVVNFRF9IMl9VUEdSQURFAFNPVVJDRQBBTk5PVU5DRQBUUkFDRQBIUEVfVU5FWFBFQ1RFRF9TUEFDRQBERVNDUklCRQBVTlNVQlNDUklCRQBSRUNPUkQASFBFX0lOVkFMSURfTUVUSE9EAE5PVF9GT1VORABQUk9QRklORABVTkJJTkQAUkVCSU5EAFVOQVVUSE9SSVpFRABNRVRIT0RfTk9UX0FMTE9XRUQASFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQAQUxSRUFEWV9SRVBPUlRFRABBQ0NFUFRFRABOT1RfSU1QTEVNRU5URUQATE9PUF9ERVRFQ1RFRABIUEVfQ1JfRVhQRUNURUQASFBFX0xGX0VYUEVDVEVEAENSRUFURUQASU1fVVNFRABIUEVfUEFVU0VEAFRJTUVPVVRfT0NDVVJFRABQQVlNRU5UX1JFUVVJUkVEAFBSRUNPTkRJVElPTl9SRVFVSVJFRABQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRABORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAExFTkdUSF9SRVFVSVJFRABTU0xfQ0VSVElGSUNBVEVfUkVRVUlSRUQAVVBHUkFERV9SRVFVSVJFRABQQUdFX0VYUElSRUQAUFJFQ09ORElUSU9OX0ZBSUxFRABFWFBFQ1RBVElPTl9GQUlMRUQAUkVWQUxJREFUSU9OX0ZBSUxFRABTU0xfSEFORFNIQUtFX0ZBSUxFRABMT0NLRUQAVFJBTlNGT1JNQVRJT05fQVBQTElFRABOT1RfTU9ESUZJRUQATk9UX0VYVEVOREVEAEJBTkRXSURUSF9MSU1JVF9FWENFRURFRABTSVRFX0lTX09WRVJMT0FERUQASEVBRABFeHBlY3RlZCBIVFRQLwAAXhMAACYTAAAwEAAA8BcAAJ0TAAAVEgAAORcAAPASAAAKEAAAdRIAAK0SAACCEwAATxQAAH8QAACgFQAAIxQAAIkSAACLFAAATRUAANQRAADPFAAAEBgAAMkWAADcFgAAwREAAOAXAAC7FAAAdBQAAHwVAADlFAAACBcAAB8QAABlFQAAoxQAACgVAAACFQAAmRUAACwQAACLGQAATw8AANQOAABqEAAAzhAAAAIXAACJDgAAbhMAABwTAABmFAAAVhcAAMETAADNEwAAbBMAAGgXAABmFwAAXxcAACITAADODwAAaQ4AANgOAABjFgAAyxMAAKoOAAAoFwAAJhcAAMUTAABdFgAA6BEAAGcTAABlEwAA8hYAAHMTAAAdFwAA+RYAAPMRAADPDgAAzhUAAAwSAACzEQAApREAAGEQAAAyFwAAuxMAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIDAgICAgIAAAICAAICAAICAgICAgICAgIABAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAICAgICAAACAgACAgACAgICAgICAgICAAMABAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbG9zZWVlcC1hbGl2ZQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBY2h1bmtlZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEAAAEBAAEBAAEBAQEBAQEBAQEAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlY3Rpb25lbnQtbGVuZ3Rob25yb3h5LWNvbm5lY3Rpb24AAAAAAAAAAAAAAAAAAAByYW5zZmVyLWVuY29kaW5ncGdyYWRlDQoNCg0KU00NCg0KVFRQL0NFL1RTUC8AAAAAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEFAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAMEAAAEBAQEBAQEBAQEBAUEBAQEBAQEBAQEBAQABAAGBwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOT1VOQ0VFQ0tPVVRORUNURVRFQ1JJQkVMVVNIRVRFQURTRUFSQ0hSR0VDVElWSVRZTEVOREFSVkVPVElGWVBUSU9OU0NIU0VBWVNUQVRDSEdFT1JESVJFQ1RPUlRSQ0hQQVJBTUVURVJVUkNFQlNDUklCRUFSRE9XTkFDRUlORE5LQ0tVQlNDUklCRUhUVFAvQURUUC8="), Rc;
}
var Dc, Hh;
function nm() {
  return Hh || (Hh = 1, Dc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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IAH9CwMAIABBMGogAf0LAwAgAEEgaiAB/QsDACAAQd0BNgIcQQALewEBfwJAIAAoAgwiAw0AAkAgACgCBEUNACAAIAE2AgQLAkAgACABIAIQxICAgAAiAw0AIAAoAgwPCyAAIAM2AhxBACEDIAAoAgQiAUUNACAAIAEgAiAAKAIIEYGAgIAAACIBRQ0AIAAgAjYCFCAAIAE2AgwgASEDCyADC+TzAQMOfwN+BH8jgICAgABBEGsiAySAgICAACABIQQgASEFIAEhBiABIQcgASEIIAEhCSABIQogASELIAEhDCABIQ0gASEOIAEhDwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIcIhBBf2oO3QHaAQHZAQIDBAUGBwgJCgsMDQ7YAQ8Q1wEREtYBExQVFhcYGRob4AHfARwdHtUBHyAhIiMkJdQBJicoKSorLNMB0gEtLtEB0AEvMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUbbAUdISUrPAc4BS80BTMwBTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBAOxwEAAQID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YWNrIGVycm9yAGBvbl9jaHVua19leHRlbnNpb25fdmFsdWVgIGNhbGxiYWNrIGVycm9yAGBvbl9zdGF0dXNfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl92ZXJzaW9uX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdXJsX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWV0aG9kX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX25hbWVgIGNhbGxiYWNrIGVycm9yAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2VydmVyAEludmFsaWQgaGVhZGVyIHZhbHVlIGNoYXIASW52YWxpZCBoZWFkZXIgZmllbGQgY2hhcgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3ZlcnNpb24ASW52YWxpZCBtaW5vciB2ZXJzaW9uAEludmFsaWQgbWFqb3IgdmVyc2lvbgBFeHBlY3RlZCBzcGFjZSBhZnRlciB2ZXJzaW9uAEV4cGVjdGVkIENSTEYgYWZ0ZXIgdmVyc2lvbgBJbnZhbGlkIEhUVFAgdmVyc2lvbgBJbnZhbGlkIGhlYWRlciB0b2tlbgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3VybABJbnZhbGlkIGNoYXJhY3RlcnMgaW4gdXJsAFVuZXhwZWN0ZWQgc3RhcnQgY2hhciBpbiB1cmwARG91YmxlIEAgaW4gdXJsAEVtcHR5IENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhcmFjdGVyIGluIENvbnRlbnQtTGVuZ3RoAER1cGxpY2F0ZSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXIgaW4gdXJsIHBhdGgAQ29udGVudC1MZW5ndGggY2FuJ3QgYmUgcHJlc2VudCB3aXRoIFRyYW5zZmVyLUVuY29kaW5nAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHNpemUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfdmFsdWUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyB2YWx1ZQBNaXNzaW5nIGV4cGVjdGVkIExGIGFmdGVyIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AgaGVhZGVyIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGUgdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyBxdW90ZWQgdmFsdWUAUGF1c2VkIGJ5IG9uX2hlYWRlcnNfY29tcGxldGUASW52YWxpZCBFT0Ygc3RhdGUAb25fcmVzZXQgcGF1c2UAb25fY2h1bmtfaGVhZGVyIHBhdXNlAG9uX21lc3NhZ2VfYmVnaW4gcGF1c2UAb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlIHBhdXNlAG9uX3N0YXR1c19jb21wbGV0ZSBwYXVzZQBvbl92ZXJzaW9uX2NvbXBsZXRlIHBhdXNlAG9uX3VybF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19jb21wbGV0ZSBwYXVzZQBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGUgcGF1c2UAb25fbWVzc2FnZV9jb21wbGV0ZSBwYXVzZQBvbl9tZXRob2RfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lIHBhdXNlAFVuZXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgc3RhcnQgbGluZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgbmFtZQBQYXVzZSBvbiBDT05ORUNUL1VwZ3JhZGUAUGF1c2Ugb24gUFJJL1VwZ3JhZGUARXhwZWN0ZWQgSFRUUC8yIENvbm5lY3Rpb24gUHJlZmFjZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX21ldGhvZABFeHBlY3RlZCBzcGFjZSBhZnRlciBtZXRob2QAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfZmllbGQAUGF1c2VkAEludmFsaWQgd29yZCBlbmNvdW50ZXJlZABJbnZhbGlkIG1ldGhvZCBlbmNvdW50ZXJlZABVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNjaGVtYQBSZXF1ZXN0IGhhcyBpbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AAU1dJVENIX1BST1hZAFVTRV9QUk9YWQBNS0FDVElWSVRZAFVOUFJPQ0VTU0FCTEVfRU5USVRZAENPUFkATU9WRURfUEVSTUFORU5UTFkAVE9PX0VBUkxZAE5PVElGWQBGQUlMRURfREVQRU5ERU5DWQBCQURfR0FURVdBWQBQTEFZAFBVVABDSEVDS09VVABHQVRFV0FZX1RJTUVPVVQAUkVRVUVTVF9USU1FT1VUAE5FVFdPUktfQ09OTkVDVF9USU1FT1VUAENPTk5FQ1RJT05fVElNRU9VVABMT0dJTl9USU1FT1VUAE5FVFdPUktfUkVBRF9USU1FT1VUAFBPU1QATUlTRElSRUNURURfUkVRVUVTVABDTElFTlRfQ0xPU0VEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9MT0FEX0JBTEFOQ0VEX1JFUVVFU1QAQkFEX1JFUVVFU1QASFRUUF9SRVFVRVNUX1NFTlRfVE9fSFRUUFNfUE9SVABSRVBPUlQASU1fQV9URUFQT1QAUkVTRVRfQ09OVEVOVABOT19DT05URU5UAFBBUlRJQUxfQ09OVEVOVABIUEVfSU5WQUxJRF9DT05TVEFOVABIUEVfQ0JfUkVTRVQAR0VUAEhQRV9TVFJJQ1QAQ09ORkxJQ1QAVEVNUE9SQVJZX1JFRElSRUNUAFBFUk1BTkVOVF9SRURJUkVDVABDT05ORUNUAE1VTFRJX1NUQVRVUwBIUEVfSU5WQUxJRF9TVEFUVVMAVE9PX01BTllfUkVRVUVTVFMARUFSTFlfSElOVFMAVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlMAT1BUSU9OUwBTV0lUQ0hJTkdfUFJPVE9DT0xTAFZBUklBTlRfQUxTT19ORUdPVElBVEVTAE1VTFRJUExFX0NIT0lDRVMASU5URVJOQUxfU0VSVkVSX0VSUk9SAFdFQl9TRVJWRVJfVU5LTk9XTl9FUlJPUgBSQUlMR1VOX0VSUk9SAElERU5USVRZX1BST1ZJREVSX0FVVEhFTlRJQ0FUSU9OX0VSUk9SAFNTTF9DRVJUSUZJQ0FURV9FUlJPUgBJTlZBTElEX1hfRk9SV0FSREVEX0ZPUgBTRVRfUEFSQU1FVEVSAEdFVF9QQVJBTUVURVIASFBFX1VTRVIAU0VFX09USEVSAEhQRV9DQl9DSFVOS19IRUFERVIATUtDQUxFTkRBUgBTRVRVUABXRUJfU0VSVkVSX0lTX0RPV04AVEVBUkRPV04ASFBFX0NMT1NFRF9DT05ORUNUSU9OAEhFVVJJU1RJQ19FWFBJUkFUSU9OAERJU0NPTk5FQ1RFRF9PUEVSQVRJT04ATk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04ASFBFX0lOVkFMSURfVkVSU0lPTgBIUEVfQ0JfTUVTU0FHRV9CRUdJTgBTSVRFX0lTX0ZST1pFTgBIUEVfSU5WQUxJRF9IRUFERVJfVE9LRU4ASU5WQUxJRF9UT0tFTgBGT1JCSURERU4ARU5IQU5DRV9ZT1VSX0NBTE0ASFBFX0lOVkFMSURfVVJMAEJMT0NLRURfQllfUEFSRU5UQUxfQ09OVFJPTABNS0NPTABBQ0wASFBFX0lOVEVSTkFMAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0VfVU5PRkZJQ0lBTABIUEVfT0sAVU5MSU5LAFVOTE9DSwBQUkkAUkVUUllfV0lUSABIUEVfSU5WQUxJRF9DT05URU5UX0xFTkdUSABIUEVfVU5FWFBFQ1RFRF9DT05URU5UX0xFTkdUSABGTFVTSABQUk9QUEFUQ0gATS1TRUFSQ0gAVVJJX1RPT19MT05HAFBST0NFU1NJTkcATUlTQ0VMTEFORU9VU19QRVJTSVNURU5UX1dBUk5JTkcATUlTQ0VMTEFORU9VU19XQVJOSU5HAEhQRV9JTlZBTElEX1RSQU5TRkVSX0VOQ09ESU5HAEV4cGVjdGVkIENSTEYASFBFX0lOVkFMSURfQ0hVTktfU0laRQBNT1ZFAENPTlRJTlVFAEhQRV9DQl9TVEFUVVNfQ09NUExFVEUASFBFX0NCX0hFQURFUlNfQ09NUExFVEUASFBFX0NCX1ZFUlNJT05fQ09NUExFVEUASFBFX0NCX1VSTF9DT01QTEVURQBIUEVfQ0JfQ0hVTktfQ09NUExFVEUASFBFX0NCX0hFQURFUl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX1ZBTFVFX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19FWFRFTlNJT05fTkFNRV9DT01QTEVURQBIUEVfQ0JfTUVTU0FHRV9DT01QTEVURQBIUEVfQ0JfTUVUSE9EX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfRklFTERfQ09NUExFVEUAREVMRVRFAEhQRV9JTlZBTElEX0VPRl9TVEFURQBJTlZBTElEX1NTTF9DRVJUSUZJQ0FURQBQQVVTRQBOT19SRVNQT05TRQBVTlNVUFBPUlRFRF9NRURJQV9UWVBFAEdPTkUATk9UX0FDQ0VQVEFCTEUAU0VSVklDRV9VTkFWQUlMQUJMRQBSQU5HRV9OT1RfU0FUSVNGSUFCTEUAT1JJR0lOX0lTX1VOUkVBQ0hBQkxFAFJFU1BPTlNFX0lTX1NUQUxFAFBVUkdFAE1FUkdFAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UAUkVRVUVTVF9IRUFERVJfVE9PX0xBUkdFAFBBWUxPQURfVE9PX0xBUkdFAElOU1VGRklDSUVOVF9TVE9SQUdFAEhQRV9QQVVTRURfVVBHUkFERQBIUEVfUEFVU0VEX0gyX1VQR1JBREUAU09VUkNFAEFOTk9VTkNFAFRSQUNFAEhQRV9VTkVYUEVDVEVEX1NQQUNFAERFU0NSSUJFAFVOU1VCU0NSSUJFAFJFQ09SRABIUEVfSU5WQUxJRF9NRVRIT0QATk9UX0ZPVU5EAFBST1BGSU5EAFVOQklORABSRUJJTkQAVU5BVVRIT1JJWkVEAE1FVEhPRF9OT1RfQUxMT1dFRABIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRABBTFJFQURZX1JFUE9SVEVEAEFDQ0VQVEVEAE5PVF9JTVBMRU1FTlRFRABMT09QX0RFVEVDVEVEAEhQRV9DUl9FWFBFQ1RFRABIUEVfTEZfRVhQRUNURUQAQ1JFQVRFRABJTV9VU0VEAEhQRV9QQVVTRUQAVElNRU9VVF9PQ0NVUkVEAFBBWU1FTlRfUkVRVUlSRUQAUFJFQ09ORElUSU9OX1JFUVVJUkVEAFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQATEVOR1RIX1JFUVVJUkVEAFNTTF9DRVJUSUZJQ0FURV9SRVFVSVJFRABVUEdSQURFX1JFUVVJUkVEAFBBR0VfRVhQSVJFRABQUkVDT05ESVRJT05fRkFJTEVEAEVYUEVDVEFUSU9OX0ZBSUxFRABSRVZBTElEQVRJT05fRkFJTEVEAFNTTF9IQU5EU0hBS0VfRkFJTEVEAExPQ0tFRABUUkFOU0ZPUk1BVElPTl9BUFBMSUVEAE5PVF9NT0RJRklFRABOT1RfRVhURU5ERUQAQkFORFdJRFRIX0xJTUlUX0VYQ0VFREVEAFNJVEVfSVNfT1ZFUkxPQURFRABIRUFEAEV4cGVjdGVkIEhUVFAvAABeEwAAJhMAADAQAADwFwAAnRMAABUSAAA5FwAA8BIAAAoQAAB1EgAArRIAAIITAABPFAAAfxAAAKAVAAAjFAAAiRIAAIsUAABNFQAA1BEAAM8UAAAQGAAAyRYAANwWAADBEQAA4BcAALsUAAB0FAAAfBUAAOUUAAAIFwAAHxAAAGUVAACjFAAAKBUAAAIVAACZFQAALBAAAIsZAABPDwAA1A4AAGoQAADOEAAAAhcAAIkOAABuEwAAHBMAAGYUAABWFwAAwRMAAM0TAABsEwAAaBcAAGYXAABfFwAAIhMAAM4PAABpDgAA2A4AAGMWAADLEwAAqg4AACgXAAAmFwAAxRMAAF0WAADoEQAAZxMAAGUTAADyFgAAcxMAAB0XAAD5FgAA8xEAAM8OAADOFQAADBIAALMRAAClEQAAYRAAADIXAAC7EwAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgMCAgICAgAAAgIAAgIAAgICAgICAgICAgAEAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgICAgIAAAICAAICAAICAgICAgICAgIAAwAEAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsb3NlZWVwLWFsaXZlAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQFjaHVua2VkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQAAAQEAAQEAAQEBAQEBAQEBAQAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGVjdGlvbmVudC1sZW5ndGhvbnJveHktY29ubmVjdGlvbgAAAAAAAAAAAAAAAAAAAHJhbnNmZXItZW5jb2RpbmdwZ3JhZGUNCg0KDQpTTQ0KDQpUVFAvQ0UvVFNQLwAAAAAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAwQAAAQEBAQEBAQEBAQEBQQEBAQEBAQEBAQEBAAEAAYHBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAgAAAAACAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5PVU5DRUVDS09VVE5FQ1RFVEVDUklCRUxVU0hFVEVBRFNFQVJDSFJHRUNUSVZJVFlMRU5EQVJWRU9USUZZUFRJT05TQ0hTRUFZU1RBVENIR0VPUkRJUkVDVE9SVFJDSFBBUkFNRVRFUlVSQ0VCU0NSSUJFQVJET1dOQUNFSU5ETktDS1VCU0NSSUJFSFRUUC9BRFRQLw=="), Dc;
}
const re = Ze, vC = El, im = Qn, { pipeline: om } = _t, ae = fe, bc = pp, xg = vp, am = fa, {
  RequestContentLengthMismatchError: or,
  ResponseContentLengthMismatchError: cm,
  InvalidArgumentError: We,
  RequestAbortedError: Fl,
  HeadersTimeoutError: gm,
  HeadersOverflowError: lm,
  SocketError: ln,
  InformationalError: Yt,
  BodyTimeoutError: hm,
  HTTPParserError: Em,
  ResponseExceededMaxSizeError: um,
  ClientDestroyedError: Qm
} = be, Cm = pa, {
  kUrl: fA,
  kReset: xA,
  kServerName: yr,
  kClient: xt,
  kBusy: Jg,
  kParser: _e,
  kConnect: Bm,
  kBlocking: hn,
  kResuming: rs,
  kRunning: Je,
  kPending: fs,
  kSize: Bs,
  kWriting: ar,
  kQueue: Te,
  kConnected: Im,
  kConnecting: Ys,
  kNeedDrain: vr,
  kNoRef: Hn,
  kKeepAliveDefaultTimeout: Og,
  kHostHeader: MC,
  kPendingIdx: At,
  kRunningIdx: Le,
  kError: pA,
  kPipelining: Mr,
  kSocket: He,
  kKeepAliveTimeoutValue: Ai,
  kMaxHeadersSize: Uo,
  kKeepAliveMaxTimeout: GC,
  kKeepAliveTimeoutThreshold: YC,
  kHeadersTimeout: xC,
  kBodyTimeout: JC,
  kStrictContentLength: ti,
  kConnector: Pn,
  kMaxRedirections: dm,
  kMaxRequests: ri,
  kCounter: OC,
  kClose: fm,
  kDestroy: pm,
  kDispatch: mm,
  kInterceptors: wm,
  kLocalAddress: Vn,
  kMaxResponseSize: _C,
  kHTTPConnVersion: Jt,
  // HTTP2
  kHost: HC,
  kHTTP2Session: tt,
  kHTTP2SessionState: Zo,
  kHTTP2BuildRequest: ym,
  kHTTP2CopyHeaders: Rm,
  kHTTP1BuildRequest: Dm
} = ve;
let $o;
try {
  $o = require("http2");
} catch {
  $o = { constants: {} };
}
const {
  constants: {
    HTTP2_HEADER_AUTHORITY: bm,
    HTTP2_HEADER_METHOD: km,
    HTTP2_HEADER_PATH: Sm,
    HTTP2_HEADER_SCHEME: Fm,
    HTTP2_HEADER_CONTENT_LENGTH: Nm,
    HTTP2_HEADER_EXPECT: Um,
    HTTP2_HEADER_STATUS: Tm
  }
} = $o;
let Ph = !1;
const Ao = Buffer[Symbol.species], Rr = Symbol("kClosedResolve"), NA = {};
try {
  const t = require("diagnostics_channel");
  NA.sendHeaders = t.channel("undici:client:sendHeaders"), NA.beforeConnect = t.channel("undici:client:beforeConnect"), NA.connectError = t.channel("undici:client:connectError"), NA.connected = t.channel("undici:client:connected");
} catch {
  NA.sendHeaders = { hasSubscribers: !1 }, NA.beforeConnect = { hasSubscribers: !1 }, NA.connectError = { hasSubscribers: !1 }, NA.connected = { hasSubscribers: !1 };
}
let Lm = class extends am {
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
    connectTimeout: o,
    bodyTimeout: a,
    idleTimeout: g,
    keepAlive: c,
    keepAliveTimeout: E,
    maxKeepAliveTimeout: h,
    keepAliveMaxTimeout: u,
    keepAliveTimeoutThreshold: B,
    socketPath: Q,
    pipelining: I,
    tls: f,
    strictContentLength: C,
    maxCachedSessions: d,
    maxRedirections: w,
    connect: p,
    maxRequestsPerClient: m,
    localAddress: R,
    maxResponseSize: D,
    autoSelectFamily: G,
    autoSelectFamilyAttemptTimeout: H,
    // h2
    allowH2: x,
    maxConcurrentStreams: te
  } = {}) {
    if (super(), c !== void 0)
      throw new We("unsupported keepAlive, use pipelining=0 instead");
    if (n !== void 0)
      throw new We("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
    if (i !== void 0)
      throw new We("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
    if (g !== void 0)
      throw new We("unsupported idleTimeout, use keepAliveTimeout instead");
    if (h !== void 0)
      throw new We("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
    if (r != null && !Number.isFinite(r))
      throw new We("invalid maxHeaderSize");
    if (Q != null && typeof Q != "string")
      throw new We("invalid socketPath");
    if (o != null && (!Number.isFinite(o) || o < 0))
      throw new We("invalid connectTimeout");
    if (E != null && (!Number.isFinite(E) || E <= 0))
      throw new We("invalid keepAliveTimeout");
    if (u != null && (!Number.isFinite(u) || u <= 0))
      throw new We("invalid keepAliveMaxTimeout");
    if (B != null && !Number.isFinite(B))
      throw new We("invalid keepAliveTimeoutThreshold");
    if (s != null && (!Number.isInteger(s) || s < 0))
      throw new We("headersTimeout must be a positive integer or zero");
    if (a != null && (!Number.isInteger(a) || a < 0))
      throw new We("bodyTimeout must be a positive integer or zero");
    if (p != null && typeof p != "function" && typeof p != "object")
      throw new We("connect must be a function or an object");
    if (w != null && (!Number.isInteger(w) || w < 0))
      throw new We("maxRedirections must be a positive number");
    if (m != null && (!Number.isInteger(m) || m < 0))
      throw new We("maxRequestsPerClient must be a positive number");
    if (R != null && (typeof R != "string" || vC.isIP(R) === 0))
      throw new We("localAddress must be valid string IP address");
    if (D != null && (!Number.isInteger(D) || D < -1))
      throw new We("maxResponseSize must be a positive number");
    if (H != null && (!Number.isInteger(H) || H < -1))
      throw new We("autoSelectFamilyAttemptTimeout must be a positive number");
    if (x != null && typeof x != "boolean")
      throw new We("allowH2 must be a valid boolean value");
    if (te != null && (typeof te != "number" || te < 1))
      throw new We("maxConcurrentStreams must be a possitive integer, greater than 0");
    typeof p != "function" && (p = Cm({
      ...f,
      maxCachedSessions: d,
      allowH2: x,
      socketPath: Q,
      timeout: o,
      ...ae.nodeHasAutoSelectFamily && G ? { autoSelectFamily: G, autoSelectFamilyAttemptTimeout: H } : void 0,
      ...p
    })), this[wm] = A && A.Client && Array.isArray(A.Client) ? A.Client : [xm({ maxRedirections: w })], this[fA] = ae.parseOrigin(e), this[Pn] = p, this[He] = null, this[Mr] = I ?? 1, this[Uo] = r || im.maxHeaderSize, this[Og] = E ?? 4e3, this[GC] = u ?? 6e5, this[YC] = B ?? 1e3, this[Ai] = this[Og], this[yr] = null, this[Vn] = R ?? null, this[rs] = 0, this[vr] = 0, this[MC] = `host: ${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}\r
`, this[JC] = a ?? 3e5, this[xC] = s ?? 3e5, this[ti] = C ?? !0, this[dm] = w, this[ri] = m, this[Rr] = null, this[_C] = D > -1 ? D : -1, this[Jt] = "h1", this[tt] = null, this[Zo] = x ? {
      // streams: null, // Fixed queue of streams - For future support of `push`
      openStreams: 0,
      // Keep track of them to decide wether or not unref the session
      maxConcurrentStreams: te ?? 100
      // Max peerConcurrentStreams for a Node h2 server
    } : null, this[HC] = `${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}`, this[Te] = [], this[Le] = 0, this[At] = 0;
  }
  get pipelining() {
    return this[Mr];
  }
  set pipelining(e) {
    this[Mr] = e, rt(this, !0);
  }
  get [fs]() {
    return this[Te].length - this[At];
  }
  get [Je]() {
    return this[At] - this[Le];
  }
  get [Bs]() {
    return this[Te].length - this[Le];
  }
  get [Im]() {
    return !!this[He] && !this[Ys] && !this[He].destroyed;
  }
  get [Jg]() {
    const e = this[He];
    return e && (e[xA] || e[ar] || e[hn]) || this[Bs] >= (this[Mr] || 1) || this[fs] > 0;
  }
  /* istanbul ignore: only used for test */
  [Bm](e) {
    qC(this), this.once("connect", e);
  }
  [mm](e, A) {
    const r = e.origin || this[fA].origin, s = this[Jt] === "h2" ? xg[ym](r, e, A) : xg[Dm](r, e, A);
    return this[Te].push(s), this[rs] || (ae.bodyLength(s.body) == null && ae.isIterable(s.body) ? (this[rs] = 1, process.nextTick(rt, this)) : rt(this, !0)), this[rs] && this[vr] !== 2 && this[Jg] && (this[vr] = 2), this[vr] < 2;
  }
  async [fm]() {
    return new Promise((e) => {
      this[Bs] ? this[Rr] = e : e(null);
    });
  }
  async [pm](e) {
    return new Promise((A) => {
      const r = this[Te].splice(this[At]);
      for (let n = 0; n < r.length; n++) {
        const i = r[n];
        JA(this, i, e);
      }
      const s = () => {
        this[Rr] && (this[Rr](), this[Rr] = null), A();
      };
      this[tt] != null && (ae.destroy(this[tt], e), this[tt] = null, this[Zo] = null), this[He] ? ae.destroy(this[He].on("close", s), e) : queueMicrotask(s), rt(this);
    });
  }
};
function vm(t) {
  re(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[He][pA] = t, ma(this[xt], t);
}
function Mm(t, e, A) {
  const r = new Yt(`HTTP/2: "frameError" received - type ${t}, code ${e}`);
  A === 0 && (this[He][pA] = r, ma(this[xt], r));
}
function Gm() {
  ae.destroy(this, new ln("other side closed")), ae.destroy(this[He], new ln("other side closed"));
}
function Ym(t) {
  const e = this[xt], A = new Yt(`HTTP/2: "GOAWAY" frame received with code ${t}`);
  if (e[He] = null, e[tt] = null, e.destroyed) {
    re(this[fs] === 0);
    const r = e[Te].splice(e[Le]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      JA(this, n, A);
    }
  } else if (e[Je] > 0) {
    const r = e[Te][e[Le]];
    e[Te][e[Le]++] = null, JA(e, r, A);
  }
  e[At] = e[Le], re(e[Je] === 0), e.emit(
    "disconnect",
    e[fA],
    [e],
    A
  ), rt(e);
}
const kt = Zp(), xm = Sl, Jm = Buffer.alloc(0);
async function Om() {
  const t = process.env.JEST_WORKER_ID ? _h() : void 0;
  let e;
  try {
    e = await WebAssembly.compile(Buffer.from(nm(), "base64"));
  } catch {
    e = await WebAssembly.compile(Buffer.from(t || _h(), "base64"));
  }
  return await WebAssembly.instantiate(e, {
    env: {
      /* eslint-disable camelcase */
      wasm_on_url: (A, r, s) => 0,
      wasm_on_status: (A, r, s) => {
        re.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onStatus(new Ao(Nt.buffer, n, s)) || 0;
      },
      wasm_on_message_begin: (A) => (re.strictEqual(oA.ptr, A), oA.onMessageBegin() || 0),
      wasm_on_header_field: (A, r, s) => {
        re.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onHeaderField(new Ao(Nt.buffer, n, s)) || 0;
      },
      wasm_on_header_value: (A, r, s) => {
        re.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onHeaderValue(new Ao(Nt.buffer, n, s)) || 0;
      },
      wasm_on_headers_complete: (A, r, s, n) => (re.strictEqual(oA.ptr, A), oA.onHeadersComplete(r, !!s, !!n) || 0),
      wasm_on_body: (A, r, s) => {
        re.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onBody(new Ao(Nt.buffer, n, s)) || 0;
      },
      wasm_on_message_complete: (A) => (re.strictEqual(oA.ptr, A), oA.onMessageComplete() || 0)
      /* eslint-enable camelcase */
    }
  });
}
let kc = null, _g = Om();
_g.catch();
let oA = null, Nt = null, to = 0, Gt = null;
const En = 1, To = 2, Hg = 3;
class _m {
  constructor(e, A, { exports: r }) {
    re(Number.isFinite(e[Uo]) && e[Uo] > 0), this.llhttp = r, this.ptr = this.llhttp.llhttp_alloc(kt.TYPE.RESPONSE), this.client = e, this.socket = A, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[Uo], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[_C];
  }
  setTimeout(e, A) {
    this.timeoutType = A, e !== this.timeoutValue ? (bc.clearTimeout(this.timeout), e ? (this.timeout = bc.setTimeout(Hm, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
  }
  resume() {
    this.socket.destroyed || !this.paused || (re(this.ptr != null), re(oA == null), this.llhttp.llhttp_resume(this.ptr), re(this.timeoutType === To), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Jm), this.readMore());
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
    re(this.ptr != null), re(oA == null), re(!this.paused);
    const { socket: A, llhttp: r } = this;
    e.length > to && (Gt && r.free(Gt), to = Math.ceil(e.length / 4096) * 4096, Gt = r.malloc(to)), new Uint8Array(r.memory.buffer, Gt, to).set(e);
    try {
      let s;
      try {
        Nt = e, oA = this, s = r.llhttp_execute(this.ptr, Gt, e.length);
      } catch (i) {
        throw i;
      } finally {
        oA = null, Nt = null;
      }
      const n = r.llhttp_get_error_pos(this.ptr) - Gt;
      if (s === kt.ERROR.PAUSED_UPGRADE)
        this.onUpgrade(e.slice(n));
      else if (s === kt.ERROR.PAUSED)
        this.paused = !0, A.unshift(e.slice(n));
      else if (s !== kt.ERROR.OK) {
        const i = r.llhttp_get_error_reason(this.ptr);
        let o = "";
        if (i) {
          const a = new Uint8Array(r.memory.buffer, i).indexOf(0);
          o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r.memory.buffer, i, a).toString() + ")";
        }
        throw new Em(o, kt.ERROR[s], e.slice(n));
      }
    } catch (s) {
      ae.destroy(A, s);
    }
  }
  destroy() {
    re(this.ptr != null), re(oA == null), this.llhttp.llhttp_free(this.ptr), this.ptr = null, bc.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
  }
  onStatus(e) {
    this.statusText = e.toString();
  }
  onMessageBegin() {
    const { socket: e, client: A } = this;
    if (e.destroyed || !A[Te][A[Le]])
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
    this.headersSize += e, this.headersSize >= this.headersMaxSize && ae.destroy(this.socket, new lm());
  }
  onUpgrade(e) {
    const { upgrade: A, client: r, socket: s, headers: n, statusCode: i } = this;
    re(A);
    const o = r[Te][r[Le]];
    re(o), re(!s.destroyed), re(s === r[He]), re(!this.paused), re(o.upgrade || o.method === "CONNECT"), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, re(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[_e].destroy(), s[_e] = null, s[xt] = null, s[pA] = null, s.removeListener("error", VC).removeListener("readable", PC).removeListener("end", WC).removeListener("close", Pg), r[He] = null, r[Te][r[Le]++] = null, r.emit("disconnect", r[fA], [r], new Yt("upgrade"));
    try {
      o.onUpgrade(i, n, s);
    } catch (a) {
      ae.destroy(s, a);
    }
    rt(r);
  }
  onHeadersComplete(e, A, r) {
    const { client: s, socket: n, headers: i, statusText: o } = this;
    if (n.destroyed)
      return -1;
    const a = s[Te][s[Le]];
    if (!a)
      return -1;
    if (re(!this.upgrade), re(this.statusCode < 200), e === 100)
      return ae.destroy(n, new ln("bad response", ae.getSocketInfo(n))), -1;
    if (A && !a.upgrade)
      return ae.destroy(n, new ln("bad upgrade", ae.getSocketInfo(n))), -1;
    if (re.strictEqual(this.timeoutType, En), this.statusCode = e, this.shouldKeepAlive = r || // Override llhttp value which does not allow keepAlive for HEAD.
    a.method === "HEAD" && !n[xA] && this.connection.toLowerCase() === "keep-alive", this.statusCode >= 200) {
      const c = a.bodyTimeout != null ? a.bodyTimeout : s[JC];
      this.setTimeout(c, To);
    } else
      this.timeout && this.timeout.refresh && this.timeout.refresh();
    if (a.method === "CONNECT")
      return re(s[Je] === 1), this.upgrade = !0, 2;
    if (A)
      return re(s[Je] === 1), this.upgrade = !0, 2;
    if (re(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[Mr]) {
      const c = this.keepAlive ? ae.parseKeepAliveTimeout(this.keepAlive) : null;
      if (c != null) {
        const E = Math.min(
          c - s[YC],
          s[GC]
        );
        E <= 0 ? n[xA] = !0 : s[Ai] = E;
      } else
        s[Ai] = s[Og];
    } else
      n[xA] = !0;
    const g = a.onHeaders(e, i, this.resume, o) === !1;
    return a.aborted ? -1 : a.method === "HEAD" || e < 200 ? 1 : (n[hn] && (n[hn] = !1, rt(s)), g ? kt.ERROR.PAUSED : 0);
  }
  onBody(e) {
    const { client: A, socket: r, statusCode: s, maxResponseSize: n } = this;
    if (r.destroyed)
      return -1;
    const i = A[Te][A[Le]];
    if (re(i), re.strictEqual(this.timeoutType, To), this.timeout && this.timeout.refresh && this.timeout.refresh(), re(s >= 200), n > -1 && this.bytesRead + e.length > n)
      return ae.destroy(r, new um()), -1;
    if (this.bytesRead += e.length, i.onData(e) === !1)
      return kt.ERROR.PAUSED;
  }
  onMessageComplete() {
    const { client: e, socket: A, statusCode: r, upgrade: s, headers: n, contentLength: i, bytesRead: o, shouldKeepAlive: a } = this;
    if (A.destroyed && (!r || a))
      return -1;
    if (s)
      return;
    const g = e[Te][e[Le]];
    if (re(g), re(r >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", re(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, !(r < 200)) {
      if (g.method !== "HEAD" && i && o !== parseInt(i, 10))
        return ae.destroy(A, new cm()), -1;
      if (g.onComplete(n), e[Te][e[Le]++] = null, A[ar])
        return re.strictEqual(e[Je], 0), ae.destroy(A, new Yt("reset")), kt.ERROR.PAUSED;
      if (a) {
        if (A[xA] && e[Je] === 0)
          return ae.destroy(A, new Yt("reset")), kt.ERROR.PAUSED;
        e[Mr] === 1 ? setImmediate(rt, e) : rt(e);
      } else
        return ae.destroy(A, new Yt("reset")), kt.ERROR.PAUSED;
    }
  }
}
function Hm(t) {
  const { socket: e, timeoutType: A, client: r } = t;
  A === En ? (!e[ar] || e.writableNeedDrain || r[Je] > 1) && (re(!t.paused, "cannot be paused while waiting for headers"), ae.destroy(e, new gm())) : A === To ? t.paused || ae.destroy(e, new hm()) : A === Hg && (re(r[Je] === 0 && r[Ai]), ae.destroy(e, new Yt("socket idle timeout")));
}
function PC() {
  const { [_e]: t } = this;
  t && t.readMore();
}
function VC(t) {
  const { [xt]: e, [_e]: A } = this;
  if (re(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), e[Jt] !== "h2" && t.code === "ECONNRESET" && A.statusCode && !A.shouldKeepAlive) {
    A.onMessageComplete();
    return;
  }
  this[pA] = t, ma(this[xt], t);
}
function ma(t, e) {
  if (t[Je] === 0 && e.code !== "UND_ERR_INFO" && e.code !== "UND_ERR_SOCKET") {
    re(t[At] === t[Le]);
    const A = t[Te].splice(t[Le]);
    for (let r = 0; r < A.length; r++) {
      const s = A[r];
      JA(t, s, e);
    }
    re(t[Bs] === 0);
  }
}
function WC() {
  const { [_e]: t, [xt]: e } = this;
  if (e[Jt] !== "h2" && t.statusCode && !t.shouldKeepAlive) {
    t.onMessageComplete();
    return;
  }
  ae.destroy(this, new ln("other side closed", ae.getSocketInfo(this)));
}
function Pg() {
  const { [xt]: t, [_e]: e } = this;
  t[Jt] === "h1" && e && (!this[pA] && e.statusCode && !e.shouldKeepAlive && e.onMessageComplete(), this[_e].destroy(), this[_e] = null);
  const A = this[pA] || new ln("closed", ae.getSocketInfo(this));
  if (t[He] = null, t.destroyed) {
    re(t[fs] === 0);
    const r = t[Te].splice(t[Le]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      JA(t, n, A);
    }
  } else if (t[Je] > 0 && A.code !== "UND_ERR_INFO") {
    const r = t[Te][t[Le]];
    t[Te][t[Le]++] = null, JA(t, r, A);
  }
  t[At] = t[Le], re(t[Je] === 0), t.emit("disconnect", t[fA], [t], A), rt(t);
}
async function qC(t) {
  re(!t[Ys]), re(!t[He]);
  let { host: e, hostname: A, protocol: r, port: s } = t[fA];
  if (A[0] === "[") {
    const n = A.indexOf("]");
    re(n !== -1);
    const i = A.substring(1, n);
    re(vC.isIP(i)), A = i;
  }
  t[Ys] = !0, NA.beforeConnect.hasSubscribers && NA.beforeConnect.publish({
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
    const n = await new Promise((o, a) => {
      t[Pn]({
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Vn]
      }, (g, c) => {
        g ? a(g) : o(c);
      });
    });
    if (t.destroyed) {
      ae.destroy(n.on("error", () => {
      }), new Qm());
      return;
    }
    if (t[Ys] = !1, re(n), n.alpnProtocol === "h2") {
      Ph || (Ph = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
        code: "UNDICI-H2"
      }));
      const o = $o.connect(t[fA], {
        createConnection: () => n,
        peerMaxConcurrentStreams: t[Zo].maxConcurrentStreams
      });
      t[Jt] = "h2", o[xt] = t, o[He] = n, o.on("error", vm), o.on("frameError", Mm), o.on("end", Gm), o.on("goaway", Ym), o.on("close", Pg), o.unref(), t[tt] = o, n[tt] = o;
    } else
      kc || (kc = await _g, _g = null), n[Hn] = !1, n[ar] = !1, n[xA] = !1, n[hn] = !1, n[_e] = new _m(t, n, kc);
    n[OC] = 0, n[ri] = t[ri], n[xt] = t, n[pA] = null, n.on("error", VC).on("readable", PC).on("end", WC).on("close", Pg), t[He] = n, NA.connected.hasSubscribers && NA.connected.publish({
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
    if (t[Ys] = !1, NA.connectError.hasSubscribers && NA.connectError.publish({
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
      for (re(t[Je] === 0); t[fs] > 0 && t[Te][t[At]].servername === t[yr]; ) {
        const i = t[Te][t[At]++];
        JA(t, i, n);
      }
    else
      ma(t, n);
    t.emit("connectionError", t[fA], [t], n);
  }
  rt(t);
}
function Vh(t) {
  t[vr] = 0, t.emit("drain", t[fA], [t]);
}
function rt(t, e) {
  t[rs] !== 2 && (t[rs] = 2, Pm(t, e), t[rs] = 0, t[Le] > 256 && (t[Te].splice(0, t[Le]), t[At] -= t[Le], t[Le] = 0));
}
function Pm(t, e) {
  for (; ; ) {
    if (t.destroyed) {
      re(t[fs] === 0);
      return;
    }
    if (t[Rr] && !t[Bs]) {
      t[Rr](), t[Rr] = null;
      return;
    }
    const A = t[He];
    if (A && !A.destroyed && A.alpnProtocol !== "h2") {
      if (t[Bs] === 0 ? !A[Hn] && A.unref && (A.unref(), A[Hn] = !0) : A[Hn] && A.ref && (A.ref(), A[Hn] = !1), t[Bs] === 0)
        A[_e].timeoutType !== Hg && A[_e].setTimeout(t[Ai], Hg);
      else if (t[Je] > 0 && A[_e].statusCode < 200 && A[_e].timeoutType !== En) {
        const s = t[Te][t[Le]], n = s.headersTimeout != null ? s.headersTimeout : t[xC];
        A[_e].setTimeout(n, En);
      }
    }
    if (t[Jg])
      t[vr] = 2;
    else if (t[vr] === 2) {
      e ? (t[vr] = 1, process.nextTick(Vh, t)) : Vh(t);
      continue;
    }
    if (t[fs] === 0 || t[Je] >= (t[Mr] || 1))
      return;
    const r = t[Te][t[At]];
    if (t[fA].protocol === "https:" && t[yr] !== r.servername) {
      if (t[Je] > 0)
        return;
      if (t[yr] = r.servername, A && A.servername !== r.servername) {
        ae.destroy(A, new Yt("servername changed"));
        return;
      }
    }
    if (t[Ys])
      return;
    if (!A && !t[tt]) {
      qC(t);
      return;
    }
    if (A.destroyed || A[ar] || A[xA] || A[hn] || t[Je] > 0 && !r.idempotent || t[Je] > 0 && (r.upgrade || r.method === "CONNECT") || t[Je] > 0 && ae.bodyLength(r.body) !== 0 && (ae.isStream(r.body) || ae.isAsyncIterable(r.body)))
      return;
    !r.aborted && Vm(t, r) ? t[At]++ : t[Te].splice(t[At], 1);
  }
}
function jC(t) {
  return t !== "GET" && t !== "HEAD" && t !== "OPTIONS" && t !== "TRACE" && t !== "CONNECT";
}
function Vm(t, e) {
  if (t[Jt] === "h2") {
    Wm(t, t[tt], e);
    return;
  }
  const { body: A, method: r, path: s, host: n, upgrade: i, headers: o, blocking: a, reset: g } = e, c = r === "PUT" || r === "POST" || r === "PATCH";
  A && typeof A.read == "function" && A.read(0);
  const E = ae.bodyLength(A);
  let h = E;
  if (h === null && (h = e.contentLength), h === 0 && !c && (h = null), jC(r) && h > 0 && e.contentLength !== null && e.contentLength !== h) {
    if (t[ti])
      return JA(t, e, new or()), !1;
    process.emitWarning(new or());
  }
  const u = t[He];
  try {
    e.onConnect((Q) => {
      e.aborted || e.completed || (JA(t, e, Q || new Fl()), ae.destroy(u, new Yt("aborted")));
    });
  } catch (Q) {
    JA(t, e, Q);
  }
  if (e.aborted)
    return !1;
  r === "HEAD" && (u[xA] = !0), (i || r === "CONNECT") && (u[xA] = !0), g != null && (u[xA] = g), t[ri] && u[OC]++ >= t[ri] && (u[xA] = !0), a && (u[hn] = !0);
  let B = `${r} ${s} HTTP/1.1\r
`;
  return typeof n == "string" ? B += `host: ${n}\r
` : B += t[MC], i ? B += `connection: upgrade\r
upgrade: ${i}\r
` : t[Mr] && !u[xA] ? B += `connection: keep-alive\r
` : B += `connection: close\r
`, o && (B += o), NA.sendHeaders.hasSubscribers && NA.sendHeaders.publish({ request: e, headers: B, socket: u }), !A || E === 0 ? (h === 0 ? u.write(`${B}content-length: 0\r
\r
`, "latin1") : (re(h === null, "no body must not have content length"), u.write(`${B}\r
`, "latin1")), e.onRequestSent()) : ae.isBuffer(A) ? (re(h === A.byteLength, "buffer body must have content length"), u.cork(), u.write(`${B}content-length: ${h}\r
\r
`, "latin1"), u.write(A), u.uncork(), e.onBodySent(A), e.onRequestSent(), c || (u[xA] = !0)) : ae.isBlobLike(A) ? typeof A.stream == "function" ? Xo({ body: A.stream(), client: t, request: e, socket: u, contentLength: h, header: B, expectsPayload: c }) : ZC({ body: A, client: t, request: e, socket: u, contentLength: h, header: B, expectsPayload: c }) : ae.isStream(A) ? zC({ body: A, client: t, request: e, socket: u, contentLength: h, header: B, expectsPayload: c }) : ae.isIterable(A) ? Xo({ body: A, client: t, request: e, socket: u, contentLength: h, header: B, expectsPayload: c }) : re(!1), !0;
}
function Wm(t, e, A) {
  const { body: r, method: s, path: n, host: i, upgrade: o, expectContinue: a, signal: g, headers: c } = A;
  let E;
  if (typeof c == "string" ? E = xg[Rm](c.trim()) : E = c, o)
    return JA(t, A, new Error("Upgrade not supported for H2")), !1;
  try {
    A.onConnect((C) => {
      A.aborted || A.completed || JA(t, A, C || new Fl());
    });
  } catch (C) {
    JA(t, A, C);
  }
  if (A.aborted)
    return !1;
  let h;
  const u = t[Zo];
  if (E[bm] = i || t[HC], E[km] = s, s === "CONNECT")
    return e.ref(), h = e.request(E, { endStream: !1, signal: g }), h.id && !h.pending ? (A.onUpgrade(null, null, h), ++u.openStreams) : h.once("ready", () => {
      A.onUpgrade(null, null, h), ++u.openStreams;
    }), h.once("close", () => {
      u.openStreams -= 1, u.openStreams === 0 && e.unref();
    }), !0;
  E[Sm] = n, E[Fm] = "https";
  const B = s === "PUT" || s === "POST" || s === "PATCH";
  r && typeof r.read == "function" && r.read(0);
  let Q = ae.bodyLength(r);
  if (Q == null && (Q = A.contentLength), (Q === 0 || !B) && (Q = null), jC(s) && Q > 0 && A.contentLength != null && A.contentLength !== Q) {
    if (t[ti])
      return JA(t, A, new or()), !1;
    process.emitWarning(new or());
  }
  Q != null && (re(r, "no body must not have content length"), E[Nm] = `${Q}`), e.ref();
  const I = s === "GET" || s === "HEAD";
  return a ? (E[Um] = "100-continue", h = e.request(E, { endStream: I, signal: g }), h.once("continue", f)) : (h = e.request(E, {
    endStream: I,
    signal: g
  }), f()), ++u.openStreams, h.once("response", (C) => {
    const { [Tm]: d, ...w } = C;
    A.onHeaders(Number(d), w, h.resume.bind(h), "") === !1 && h.pause();
  }), h.once("end", () => {
    A.onComplete([]);
  }), h.on("data", (C) => {
    A.onData(C) === !1 && h.pause();
  }), h.once("close", () => {
    u.openStreams -= 1, u.openStreams === 0 && e.unref();
  }), h.once("error", function(C) {
    t[tt] && !t[tt].destroyed && !this.closed && !this.destroyed && (u.streams -= 1, ae.destroy(h, C));
  }), h.once("frameError", (C, d) => {
    const w = new Yt(`HTTP/2: "frameError" received - type ${C}, code ${d}`);
    JA(t, A, w), t[tt] && !t[tt].destroyed && !this.closed && !this.destroyed && (u.streams -= 1, ae.destroy(h, w));
  }), !0;
  function f() {
    r ? ae.isBuffer(r) ? (re(Q === r.byteLength, "buffer body must have content length"), h.cork(), h.write(r), h.uncork(), h.end(), A.onBodySent(r), A.onRequestSent()) : ae.isBlobLike(r) ? typeof r.stream == "function" ? Xo({
      client: t,
      request: A,
      contentLength: Q,
      h2stream: h,
      expectsPayload: B,
      body: r.stream(),
      socket: t[He],
      header: ""
    }) : ZC({
      body: r,
      client: t,
      request: A,
      contentLength: Q,
      expectsPayload: B,
      h2stream: h,
      header: "",
      socket: t[He]
    }) : ae.isStream(r) ? zC({
      body: r,
      client: t,
      request: A,
      contentLength: Q,
      expectsPayload: B,
      socket: t[He],
      h2stream: h,
      header: ""
    }) : ae.isIterable(r) ? Xo({
      body: r,
      client: t,
      request: A,
      contentLength: Q,
      expectsPayload: B,
      header: "",
      h2stream: h,
      socket: t[He]
    }) : re(!1) : A.onRequestSent();
  }
}
function zC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: o }) {
  if (re(n !== 0 || A[Je] === 0, "stream body cannot be pipelined"), A[Jt] === "h2") {
    let Q = function(I) {
      r.onBodySent(I);
    };
    const B = om(
      e,
      t,
      (I) => {
        I ? (ae.destroy(e, I), ae.destroy(t, I)) : r.onRequestSent();
      }
    );
    B.on("data", Q), B.once("end", () => {
      B.removeListener("data", Q), ae.destroy(B);
    });
    return;
  }
  let a = !1;
  const g = new $C({ socket: s, request: r, contentLength: n, client: A, expectsPayload: o, header: i }), c = function(B) {
    if (!a)
      try {
        !g.write(B) && this.pause && this.pause();
      } catch (Q) {
        ae.destroy(this, Q);
      }
  }, E = function() {
    a || e.resume && e.resume();
  }, h = function() {
    if (a)
      return;
    const B = new Fl();
    queueMicrotask(() => u(B));
  }, u = function(B) {
    if (!a) {
      if (a = !0, re(s.destroyed || s[ar] && A[Je] <= 1), s.off("drain", E).off("error", u), e.removeListener("data", c).removeListener("end", u).removeListener("error", u).removeListener("close", h), !B)
        try {
          g.end();
        } catch (Q) {
          B = Q;
        }
      g.destroy(B), B && (B.code !== "UND_ERR_INFO" || B.message !== "reset") ? ae.destroy(e, B) : ae.destroy(e);
    }
  };
  e.on("data", c).on("end", u).on("error", u).on("close", h), e.resume && e.resume(), s.on("drain", E).on("error", u);
}
async function ZC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: o }) {
  re(n === e.size, "blob body must have content length");
  const a = A[Jt] === "h2";
  try {
    if (n != null && n !== e.size)
      throw new or();
    const g = Buffer.from(await e.arrayBuffer());
    a ? (t.cork(), t.write(g), t.uncork()) : (s.cork(), s.write(`${i}content-length: ${n}\r
\r
`, "latin1"), s.write(g), s.uncork()), r.onBodySent(g), r.onRequestSent(), o || (s[xA] = !0), rt(A);
  } catch (g) {
    ae.destroy(a ? t : s, g);
  }
}
async function Xo({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: o }) {
  re(n !== 0 || A[Je] === 0, "iterator body cannot be pipelined");
  let a = null;
  function g() {
    if (a) {
      const h = a;
      a = null, h();
    }
  }
  const c = () => new Promise((h, u) => {
    re(a === null), s[pA] ? u(s[pA]) : a = h;
  });
  if (A[Jt] === "h2") {
    t.on("close", g).on("drain", g);
    try {
      for await (const h of e) {
        if (s[pA])
          throw s[pA];
        const u = t.write(h);
        r.onBodySent(h), u || await c();
      }
    } catch (h) {
      t.destroy(h);
    } finally {
      r.onRequestSent(), t.end(), t.off("close", g).off("drain", g);
    }
    return;
  }
  s.on("close", g).on("drain", g);
  const E = new $C({ socket: s, request: r, contentLength: n, client: A, expectsPayload: o, header: i });
  try {
    for await (const h of e) {
      if (s[pA])
        throw s[pA];
      E.write(h) || await c();
    }
    E.end();
  } catch (h) {
    E.destroy(h);
  } finally {
    s.off("close", g).off("drain", g);
  }
}
class $C {
  constructor({ socket: e, request: A, contentLength: r, client: s, expectsPayload: n, header: i }) {
    this.socket = e, this.request = A, this.contentLength = r, this.client = s, this.bytesWritten = 0, this.expectsPayload = n, this.header = i, e[ar] = !0;
  }
  write(e) {
    const { socket: A, request: r, contentLength: s, client: n, bytesWritten: i, expectsPayload: o, header: a } = this;
    if (A[pA])
      throw A[pA];
    if (A.destroyed)
      return !1;
    const g = Buffer.byteLength(e);
    if (!g)
      return !0;
    if (s !== null && i + g > s) {
      if (n[ti])
        throw new or();
      process.emitWarning(new or());
    }
    A.cork(), i === 0 && (o || (A[xA] = !0), s === null ? A.write(`${a}transfer-encoding: chunked\r
`, "latin1") : A.write(`${a}content-length: ${s}\r
\r
`, "latin1")), s === null && A.write(`\r
${g.toString(16)}\r
`, "latin1"), this.bytesWritten += g;
    const c = A.write(e);
    return A.uncork(), r.onBodySent(e), c || A[_e].timeout && A[_e].timeoutType === En && A[_e].timeout.refresh && A[_e].timeout.refresh(), c;
  }
  end() {
    const { socket: e, contentLength: A, client: r, bytesWritten: s, expectsPayload: n, header: i, request: o } = this;
    if (o.onRequestSent(), e[ar] = !1, e[pA])
      throw e[pA];
    if (!e.destroyed) {
      if (s === 0 ? n ? e.write(`${i}content-length: 0\r
\r
`, "latin1") : e.write(`${i}\r
`, "latin1") : A === null && e.write(`\r
0\r
\r
`, "latin1"), A !== null && s !== A) {
        if (r[ti])
          throw new or();
        process.emitWarning(new or());
      }
      e[_e].timeout && e[_e].timeoutType === En && e[_e].timeout.refresh && e[_e].timeout.refresh(), rt(r);
    }
  }
  destroy(e) {
    const { socket: A, client: r } = this;
    A[ar] = !1, e && (re(r[Je] <= 1, "pipeline should only contain this request"), ae.destroy(A, e));
  }
}
function JA(t, e, A) {
  try {
    e.onError(A), re(e.aborted);
  } catch (r) {
    t.emit("error", r);
  }
}
var wa = Lm;
const XC = 2048, Sc = XC - 1;
class Wh {
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(XC), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & Sc) === this.bottom;
  }
  push(e) {
    this.list[this.top] = e, this.top = this.top + 1 & Sc;
  }
  shift() {
    const e = this.list[this.bottom];
    return e === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & Sc, e);
  }
}
var qm = class {
  constructor() {
    this.head = this.tail = new Wh();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e) {
    this.head.isFull() && (this.head = this.head.next = new Wh()), this.head.push(e);
  }
  shift() {
    const e = this.tail, A = e.shift();
    return e.isEmpty() && e.next !== null && (this.tail = e.next), A;
  }
};
const { kFree: jm, kConnected: zm, kPending: Zm, kQueued: $m, kRunning: Xm, kSize: Km } = ve, qr = Symbol("pool");
let ew = class {
  constructor(e) {
    this[qr] = e;
  }
  get connected() {
    return this[qr][zm];
  }
  get free() {
    return this[qr][jm];
  }
  get pending() {
    return this[qr][Zm];
  }
  get queued() {
    return this[qr][$m];
  }
  get running() {
    return this[qr][Xm];
  }
  get size() {
    return this[qr][Km];
  }
};
var Aw = ew;
const tw = fa, rw = qm, { kConnected: Fc, kSize: qh, kRunning: jh, kPending: zh, kQueued: Sn, kBusy: sw, kFree: nw, kUrl: iw, kClose: ow, kDestroy: aw, kDispatch: cw } = ve, gw = Aw, HA = Symbol("clients"), LA = Symbol("needDrain"), Fn = Symbol("queue"), Nc = Symbol("closed resolve"), Uc = Symbol("onDrain"), Zh = Symbol("onConnect"), $h = Symbol("onDisconnect"), Xh = Symbol("onConnectionError"), Vg = Symbol("get dispatcher"), KC = Symbol("add client"), eB = Symbol("remove client"), Kh = Symbol("stats");
let lw = class extends tw {
  constructor() {
    super(), this[Fn] = new rw(), this[HA] = [], this[Sn] = 0;
    const e = this;
    this[Uc] = function(r, s) {
      const n = e[Fn];
      let i = !1;
      for (; !i; ) {
        const o = n.shift();
        if (!o)
          break;
        e[Sn]--, i = !this.dispatch(o.opts, o.handler);
      }
      this[LA] = i, !this[LA] && e[LA] && (e[LA] = !1, e.emit("drain", r, [e, ...s])), e[Nc] && n.isEmpty() && Promise.all(e[HA].map((o) => o.close())).then(e[Nc]);
    }, this[Zh] = (A, r) => {
      e.emit("connect", A, [e, ...r]);
    }, this[$h] = (A, r, s) => {
      e.emit("disconnect", A, [e, ...r], s);
    }, this[Xh] = (A, r, s) => {
      e.emit("connectionError", A, [e, ...r], s);
    }, this[Kh] = new gw(this);
  }
  get [sw]() {
    return this[LA];
  }
  get [Fc]() {
    return this[HA].filter((e) => e[Fc]).length;
  }
  get [nw]() {
    return this[HA].filter((e) => e[Fc] && !e[LA]).length;
  }
  get [zh]() {
    let e = this[Sn];
    for (const { [zh]: A } of this[HA])
      e += A;
    return e;
  }
  get [jh]() {
    let e = 0;
    for (const { [jh]: A } of this[HA])
      e += A;
    return e;
  }
  get [qh]() {
    let e = this[Sn];
    for (const { [qh]: A } of this[HA])
      e += A;
    return e;
  }
  get stats() {
    return this[Kh];
  }
  async [ow]() {
    return this[Fn].isEmpty() ? Promise.all(this[HA].map((e) => e.close())) : new Promise((e) => {
      this[Nc] = e;
    });
  }
  async [aw](e) {
    for (; ; ) {
      const A = this[Fn].shift();
      if (!A)
        break;
      A.handler.onError(e);
    }
    return Promise.all(this[HA].map((A) => A.destroy(e)));
  }
  [cw](e, A) {
    const r = this[Vg]();
    return r ? r.dispatch(e, A) || (r[LA] = !0, this[LA] = !this[Vg]()) : (this[LA] = !0, this[Fn].push({ opts: e, handler: A }), this[Sn]++), !this[LA];
  }
  [KC](e) {
    return e.on("drain", this[Uc]).on("connect", this[Zh]).on("disconnect", this[$h]).on("connectionError", this[Xh]), this[HA].push(e), this[LA] && process.nextTick(() => {
      this[LA] && this[Uc](e[iw], [this, e]);
    }), this;
  }
  [eB](e) {
    e.close(() => {
      const A = this[HA].indexOf(e);
      A !== -1 && this[HA].splice(A, 1);
    }), this[LA] = this[HA].some((A) => !A[LA] && A.closed !== !0 && A.destroyed !== !0);
  }
};
var AB = {
  PoolBase: lw,
  kClients: HA,
  kNeedDrain: LA,
  kAddClient: KC,
  kRemoveClient: eB,
  kGetDispatcher: Vg
};
const {
  PoolBase: hw,
  kClients: eE,
  kNeedDrain: Ew,
  kAddClient: uw,
  kGetDispatcher: Qw
} = AB, Cw = wa, {
  InvalidArgumentError: Tc
} = be, Lc = fe, { kUrl: AE, kInterceptors: Bw } = ve, Iw = pa, vc = Symbol("options"), Mc = Symbol("connections"), tE = Symbol("factory");
function dw(t, e) {
  return new Cw(t, e);
}
let fw = class extends hw {
  constructor(e, {
    connections: A,
    factory: r = dw,
    connect: s,
    connectTimeout: n,
    tls: i,
    maxCachedSessions: o,
    socketPath: a,
    autoSelectFamily: g,
    autoSelectFamilyAttemptTimeout: c,
    allowH2: E,
    ...h
  } = {}) {
    if (super(), A != null && (!Number.isFinite(A) || A < 0))
      throw new Tc("invalid connections");
    if (typeof r != "function")
      throw new Tc("factory must be a function.");
    if (s != null && typeof s != "function" && typeof s != "object")
      throw new Tc("connect must be a function or an object");
    typeof s != "function" && (s = Iw({
      ...i,
      maxCachedSessions: o,
      allowH2: E,
      socketPath: a,
      timeout: n,
      ...Lc.nodeHasAutoSelectFamily && g ? { autoSelectFamily: g, autoSelectFamilyAttemptTimeout: c } : void 0,
      ...s
    })), this[Bw] = h.interceptors && h.interceptors.Pool && Array.isArray(h.interceptors.Pool) ? h.interceptors.Pool : [], this[Mc] = A || null, this[AE] = Lc.parseOrigin(e), this[vc] = { ...Lc.deepClone(h), connect: s, allowH2: E }, this[vc].interceptors = h.interceptors ? { ...h.interceptors } : void 0, this[tE] = r;
  }
  [Qw]() {
    let e = this[eE].find((A) => !A[Ew]);
    return e || ((!this[Mc] || this[eE].length < this[Mc]) && (e = this[tE](this[AE], this[vc]), this[uw](e)), e);
  }
};
var Hi = fw;
const {
  BalancedPoolMissingUpstreamError: pw,
  InvalidArgumentError: mw
} = be, {
  PoolBase: ww,
  kClients: UA,
  kNeedDrain: Nn,
  kAddClient: yw,
  kRemoveClient: Rw,
  kGetDispatcher: Dw
} = AB, bw = Hi, { kUrl: Gc, kInterceptors: kw } = ve, { parseOrigin: rE } = fe, sE = Symbol("factory"), ro = Symbol("options"), nE = Symbol("kGreatestCommonDivisor"), jr = Symbol("kCurrentWeight"), zr = Symbol("kIndex"), st = Symbol("kWeight"), so = Symbol("kMaxWeightPerServer"), no = Symbol("kErrorPenalty");
function tB(t, e) {
  return e === 0 ? t : tB(e, t % e);
}
function Sw(t, e) {
  return new bw(t, e);
}
let Fw = class extends ww {
  constructor(e = [], { factory: A = Sw, ...r } = {}) {
    if (super(), this[ro] = r, this[zr] = -1, this[jr] = 0, this[so] = this[ro].maxWeightPerServer || 100, this[no] = this[ro].errorPenalty || 15, Array.isArray(e) || (e = [e]), typeof A != "function")
      throw new mw("factory must be a function.");
    this[kw] = r.interceptors && r.interceptors.BalancedPool && Array.isArray(r.interceptors.BalancedPool) ? r.interceptors.BalancedPool : [], this[sE] = A;
    for (const s of e)
      this.addUpstream(s);
    this._updateBalancedPoolStats();
  }
  addUpstream(e) {
    const A = rE(e).origin;
    if (this[UA].find((s) => s[Gc].origin === A && s.closed !== !0 && s.destroyed !== !0))
      return this;
    const r = this[sE](A, Object.assign({}, this[ro]));
    this[yw](r), r.on("connect", () => {
      r[st] = Math.min(this[so], r[st] + this[no]);
    }), r.on("connectionError", () => {
      r[st] = Math.max(1, r[st] - this[no]), this._updateBalancedPoolStats();
    }), r.on("disconnect", (...s) => {
      const n = s[2];
      n && n.code === "UND_ERR_SOCKET" && (r[st] = Math.max(1, r[st] - this[no]), this._updateBalancedPoolStats());
    });
    for (const s of this[UA])
      s[st] = this[so];
    return this._updateBalancedPoolStats(), this;
  }
  _updateBalancedPoolStats() {
    this[nE] = this[UA].map((e) => e[st]).reduce(tB, 0);
  }
  removeUpstream(e) {
    const A = rE(e).origin, r = this[UA].find((s) => s[Gc].origin === A && s.closed !== !0 && s.destroyed !== !0);
    return r && this[Rw](r), this;
  }
  get upstreams() {
    return this[UA].filter((e) => e.closed !== !0 && e.destroyed !== !0).map((e) => e[Gc].origin);
  }
  [Dw]() {
    if (this[UA].length === 0)
      throw new pw();
    if (!this[UA].find((n) => !n[Nn] && n.closed !== !0 && n.destroyed !== !0) || this[UA].map((n) => n[Nn]).reduce((n, i) => n && i, !0))
      return;
    let r = 0, s = this[UA].findIndex((n) => !n[Nn]);
    for (; r++ < this[UA].length; ) {
      this[zr] = (this[zr] + 1) % this[UA].length;
      const n = this[UA][this[zr]];
      if (n[st] > this[UA][s][st] && !n[Nn] && (s = this[zr]), this[zr] === 0 && (this[jr] = this[jr] - this[nE], this[jr] <= 0 && (this[jr] = this[so])), n[st] >= this[jr] && !n[Nn])
        return n;
    }
    return this[jr] = this[UA][s][st], this[zr] = s, this[UA][s];
  }
};
var Nw = Fw;
const { kConnected: rB, kSize: sB } = ve;
class iE {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value[rB] === 0 && this.value[sB] === 0 ? void 0 : this.value;
  }
}
class oE {
  constructor(e) {
    this.finalizer = e;
  }
  register(e, A) {
    e.on && e.on("disconnect", () => {
      e[rB] === 0 && e[sB] === 0 && this.finalizer(A);
    });
  }
}
var nB = function() {
  return process.env.NODE_V8_COVERAGE ? {
    WeakRef: iE,
    FinalizationRegistry: oE
  } : {
    WeakRef: le.WeakRef || iE,
    FinalizationRegistry: le.FinalizationRegistry || oE
  };
};
const { InvalidArgumentError: io } = be, { kClients: Qr, kRunning: aE, kClose: Uw, kDestroy: Tw, kDispatch: Lw, kInterceptors: vw } = ve, Mw = fa, Gw = Hi, Yw = wa, xw = fe, Jw = Sl, { WeakRef: Ow, FinalizationRegistry: _w } = nB(), cE = Symbol("onConnect"), gE = Symbol("onDisconnect"), lE = Symbol("onConnectionError"), Hw = Symbol("maxRedirections"), hE = Symbol("onDrain"), EE = Symbol("factory"), uE = Symbol("finalizer"), Yc = Symbol("options");
function Pw(t, e) {
  return e && e.connections === 1 ? new Yw(t, e) : new Gw(t, e);
}
let Vw = class extends Mw {
  constructor({ factory: e = Pw, maxRedirections: A = 0, connect: r, ...s } = {}) {
    if (super(), typeof e != "function")
      throw new io("factory must be a function.");
    if (r != null && typeof r != "function" && typeof r != "object")
      throw new io("connect must be a function or an object");
    if (!Number.isInteger(A) || A < 0)
      throw new io("maxRedirections must be a positive number");
    r && typeof r != "function" && (r = { ...r }), this[vw] = s.interceptors && s.interceptors.Agent && Array.isArray(s.interceptors.Agent) ? s.interceptors.Agent : [Jw({ maxRedirections: A })], this[Yc] = { ...xw.deepClone(s), connect: r }, this[Yc].interceptors = s.interceptors ? { ...s.interceptors } : void 0, this[Hw] = A, this[EE] = e, this[Qr] = /* @__PURE__ */ new Map(), this[uE] = new _w(
      /* istanbul ignore next: gc is undeterministic */
      (i) => {
        const o = this[Qr].get(i);
        o !== void 0 && o.deref() === void 0 && this[Qr].delete(i);
      }
    );
    const n = this;
    this[hE] = (i, o) => {
      n.emit("drain", i, [n, ...o]);
    }, this[cE] = (i, o) => {
      n.emit("connect", i, [n, ...o]);
    }, this[gE] = (i, o, a) => {
      n.emit("disconnect", i, [n, ...o], a);
    }, this[lE] = (i, o, a) => {
      n.emit("connectionError", i, [n, ...o], a);
    };
  }
  get [aE]() {
    let e = 0;
    for (const A of this[Qr].values()) {
      const r = A.deref();
      r && (e += r[aE]);
    }
    return e;
  }
  [Lw](e, A) {
    let r;
    if (e.origin && (typeof e.origin == "string" || e.origin instanceof URL))
      r = String(e.origin);
    else
      throw new io("opts.origin must be a non-empty string or URL.");
    const s = this[Qr].get(r);
    let n = s ? s.deref() : null;
    return n || (n = this[EE](e.origin, this[Yc]).on("drain", this[hE]).on("connect", this[cE]).on("disconnect", this[gE]).on("connectionError", this[lE]), this[Qr].set(r, new Ow(n)), this[uE].register(n, r)), n.dispatch(e, A);
  }
  async [Uw]() {
    const e = [];
    for (const A of this[Qr].values()) {
      const r = A.deref();
      r && e.push(r.close());
    }
    await Promise.all(e);
  }
  async [Tw](e) {
    const A = [];
    for (const r of this[Qr].values()) {
      const s = r.deref();
      s && A.push(s.destroy(e));
    }
    await Promise.all(A);
  }
};
var ya = Vw, In = {}, Nl = { exports: {} };
const iB = Ze, { Readable: Ww } = _t, { RequestAbortedError: oB, NotSupportedError: qw, InvalidArgumentError: jw } = be, Lo = fe, { ReadableStreamFrom: zw, toUSVString: Zw } = fe;
let xc;
const et = Symbol("kConsume"), oo = Symbol("kReading"), mr = Symbol("kBody"), QE = Symbol("abort"), aB = Symbol("kContentType"), CE = () => {
};
var $w = class extends Ww {
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
    }), this._readableState.dataEmitted = !1, this[QE] = A, this[et] = null, this[mr] = null, this[aB] = r, this[oo] = !1;
  }
  destroy(e) {
    return this.destroyed ? this : (!e && !this._readableState.endEmitted && (e = new oB()), e && this[QE](), super.destroy(e));
  }
  emit(e, ...A) {
    return e === "data" ? this._readableState.dataEmitted = !0 : e === "error" && (this._readableState.errorEmitted = !0), super.emit(e, ...A);
  }
  on(e, ...A) {
    return (e === "data" || e === "readable") && (this[oo] = !0), super.on(e, ...A);
  }
  addListener(e, ...A) {
    return this.on(e, ...A);
  }
  off(e, ...A) {
    const r = super.off(e, ...A);
    return (e === "data" || e === "readable") && (this[oo] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r;
  }
  removeListener(e, ...A) {
    return this.off(e, ...A);
  }
  push(e) {
    return this[et] && e !== null && this.readableLength === 0 ? (cB(this[et], e), this[oo] ? super.push(e) : !0) : super.push(e);
  }
  // https://fetch.spec.whatwg.org/#dom-body-text
  async text() {
    return ao(this, "text");
  }
  // https://fetch.spec.whatwg.org/#dom-body-json
  async json() {
    return ao(this, "json");
  }
  // https://fetch.spec.whatwg.org/#dom-body-blob
  async blob() {
    return ao(this, "blob");
  }
  // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
  async arrayBuffer() {
    return ao(this, "arrayBuffer");
  }
  // https://fetch.spec.whatwg.org/#dom-body-formdata
  async formData() {
    throw new qw();
  }
  // https://fetch.spec.whatwg.org/#dom-body-bodyused
  get bodyUsed() {
    return Lo.isDisturbed(this);
  }
  // https://fetch.spec.whatwg.org/#dom-body-body
  get body() {
    return this[mr] || (this[mr] = zw(this), this[et] && (this[mr].getReader(), iB(this[mr].locked))), this[mr];
  }
  dump(e) {
    let A = e && Number.isFinite(e.limit) ? e.limit : 262144;
    const r = e && e.signal;
    if (r)
      try {
        if (typeof r != "object" || !("aborted" in r))
          throw new jw("signal must be an AbortSignal");
        Lo.throwIfAborted(r);
      } catch (s) {
        return Promise.reject(s);
      }
    return this.closed ? Promise.resolve(null) : new Promise((s, n) => {
      const i = r ? Lo.addAbortListener(r, () => {
        this.destroy();
      }) : CE;
      this.on("close", function() {
        i(), r && r.aborted ? n(r.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : s(null);
      }).on("error", CE).on("data", function(o) {
        A -= o.length, A <= 0 && this.destroy();
      }).resume();
    });
  }
};
function Xw(t) {
  return t[mr] && t[mr].locked === !0 || t[et];
}
function Kw(t) {
  return Lo.isDisturbed(t) || Xw(t);
}
async function ao(t, e) {
  if (Kw(t))
    throw new TypeError("unusable");
  return iB(!t[et]), new Promise((A, r) => {
    t[et] = {
      type: e,
      stream: t,
      resolve: A,
      reject: r,
      length: 0,
      body: []
    }, t.on("error", function(s) {
      Wg(this[et], s);
    }).on("close", function() {
      this[et].body !== null && Wg(this[et], new oB());
    }), process.nextTick(ey, t[et]);
  });
}
function ey(t) {
  if (t.body === null)
    return;
  const { _readableState: e } = t.stream;
  for (const A of e.buffer)
    cB(t, A);
  for (e.endEmitted ? BE(this[et]) : t.stream.on("end", function() {
    BE(this[et]);
  }), t.stream.resume(); t.stream.read() != null; )
    ;
}
function BE(t) {
  const { type: e, body: A, resolve: r, stream: s, length: n } = t;
  try {
    if (e === "text")
      r(Zw(Buffer.concat(A)));
    else if (e === "json")
      r(JSON.parse(Buffer.concat(A)));
    else if (e === "arrayBuffer") {
      const i = new Uint8Array(n);
      let o = 0;
      for (const a of A)
        i.set(a, o), o += a.byteLength;
      r(i.buffer);
    } else
      e === "blob" && (xc || (xc = require("buffer").Blob), r(new xc(A, { type: s[aB] })));
    Wg(t);
  } catch (i) {
    s.destroy(i);
  }
}
function cB(t, e) {
  t.length += e.length, t.body.push(e);
}
function Wg(t, e) {
  t.body !== null && (e ? t.reject(e) : t.resolve(), t.type = null, t.stream = null, t.resolve = null, t.reject = null, t.length = 0, t.body = null);
}
const Ay = Ze, {
  ResponseStatusCodeError: co
} = be, { toUSVString: IE } = fe;
async function ty({ callback: t, body: e, contentType: A, statusCode: r, statusMessage: s, headers: n }) {
  Ay(e);
  let i = [], o = 0;
  for await (const a of e)
    if (i.push(a), o += a.length, o > 128 * 1024) {
      i = null;
      break;
    }
  if (r === 204 || !A || !i) {
    process.nextTick(t, new co(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
    return;
  }
  try {
    if (A.startsWith("application/json")) {
      const a = JSON.parse(IE(Buffer.concat(i)));
      process.nextTick(t, new co(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, a));
      return;
    }
    if (A.startsWith("text/")) {
      const a = IE(Buffer.concat(i));
      process.nextTick(t, new co(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, a));
      return;
    }
  } catch {
  }
  process.nextTick(t, new co(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
}
var gB = { getResolveErrorBodyCallback: ty };
const { addAbortListener: ry } = fe, { RequestAbortedError: sy } = be, Os = Symbol("kListener"), Dr = Symbol("kSignal");
function dE(t) {
  t.abort ? t.abort() : t.onError(new sy());
}
function ny(t, e) {
  if (t[Dr] = null, t[Os] = null, !!e) {
    if (e.aborted) {
      dE(t);
      return;
    }
    t[Dr] = e, t[Os] = () => {
      dE(t);
    }, ry(t[Dr], t[Os]);
  }
}
function iy(t) {
  t[Dr] && ("removeEventListener" in t[Dr] ? t[Dr].removeEventListener("abort", t[Os]) : t[Dr].removeListener("abort", t[Os]), t[Dr] = null, t[Os] = null);
}
var Pi = {
  addSignal: ny,
  removeSignal: iy
};
const oy = $w, {
  InvalidArgumentError: Ns,
  RequestAbortedError: ay
} = be, St = fe, { getResolveErrorBodyCallback: cy } = gB, { AsyncResource: gy } = Oi, { addSignal: ly, removeSignal: fE } = Pi;
class lB extends gy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Ns("invalid opts");
    const { signal: r, method: s, opaque: n, body: i, onInfo: o, responseHeaders: a, throwOnError: g, highWaterMark: c } = e;
    try {
      if (typeof A != "function")
        throw new Ns("invalid callback");
      if (c && (typeof c != "number" || c < 0))
        throw new Ns("invalid highWaterMark");
      if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
        throw new Ns("signal must be an EventEmitter or EventTarget");
      if (s === "CONNECT")
        throw new Ns("invalid method");
      if (o && typeof o != "function")
        throw new Ns("invalid onInfo callback");
      super("UNDICI_REQUEST");
    } catch (E) {
      throw St.isStream(i) && St.destroy(i.on("error", St.nop), E), E;
    }
    this.responseHeaders = a || null, this.opaque = n || null, this.callback = A, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = o || null, this.throwOnError = g, this.highWaterMark = c, St.isStream(i) && i.on("error", (E) => {
      this.onError(E);
    }), ly(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new ay();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { callback: n, opaque: i, abort: o, context: a, responseHeaders: g, highWaterMark: c } = this, E = g === "raw" ? St.parseRawHeaders(A) : St.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: E });
      return;
    }
    const u = (g === "raw" ? St.parseHeaders(A) : E)["content-type"], B = new oy({ resume: r, abort: o, contentType: u, highWaterMark: c });
    this.callback = null, this.res = B, n !== null && (this.throwOnError && e >= 400 ? this.runInAsyncScope(
      cy,
      null,
      { callback: n, body: B, contentType: u, statusCode: e, statusMessage: s, headers: E }
    ) : this.runInAsyncScope(n, null, null, {
      statusCode: e,
      headers: E,
      trailers: this.trailers,
      opaque: i,
      body: B,
      context: a
    }));
  }
  onData(e) {
    const { res: A } = this;
    return A.push(e);
  }
  onComplete(e) {
    const { res: A } = this;
    fE(this), St.parseHeaders(e, this.trailers), A.push(null);
  }
  onError(e) {
    const { res: A, callback: r, body: s, opaque: n } = this;
    fE(this), r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: n });
    })), A && (this.res = null, queueMicrotask(() => {
      St.destroy(A, e);
    })), s && (this.body = null, St.destroy(s, e));
  }
}
function hB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      hB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    this.dispatch(t, new lB(t, e));
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
Nl.exports = hB;
Nl.exports.RequestHandler = lB;
var hy = Nl.exports;
const { finished: Ey, PassThrough: uy } = _t, {
  InvalidArgumentError: Us,
  InvalidReturnValueError: Qy,
  RequestAbortedError: Cy
} = be, ht = fe, { getResolveErrorBodyCallback: By } = gB, { AsyncResource: Iy } = Oi, { addSignal: dy, removeSignal: pE } = Pi;
class fy extends Iy {
  constructor(e, A, r) {
    if (!e || typeof e != "object")
      throw new Us("invalid opts");
    const { signal: s, method: n, opaque: i, body: o, onInfo: a, responseHeaders: g, throwOnError: c } = e;
    try {
      if (typeof r != "function")
        throw new Us("invalid callback");
      if (typeof A != "function")
        throw new Us("invalid factory");
      if (s && typeof s.on != "function" && typeof s.addEventListener != "function")
        throw new Us("signal must be an EventEmitter or EventTarget");
      if (n === "CONNECT")
        throw new Us("invalid method");
      if (a && typeof a != "function")
        throw new Us("invalid onInfo callback");
      super("UNDICI_STREAM");
    } catch (E) {
      throw ht.isStream(o) && ht.destroy(o.on("error", ht.nop), E), E;
    }
    this.responseHeaders = g || null, this.opaque = i || null, this.factory = A, this.callback = r, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = o, this.onInfo = a || null, this.throwOnError = c || !1, ht.isStream(o) && o.on("error", (E) => {
      this.onError(E);
    }), dy(this, s);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Cy();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { factory: n, opaque: i, context: o, callback: a, responseHeaders: g } = this, c = g === "raw" ? ht.parseRawHeaders(A) : ht.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: c });
      return;
    }
    this.factory = null;
    let E;
    if (this.throwOnError && e >= 400) {
      const B = (g === "raw" ? ht.parseHeaders(A) : c)["content-type"];
      E = new uy(), this.callback = null, this.runInAsyncScope(
        By,
        null,
        { callback: a, body: E, contentType: B, statusCode: e, statusMessage: s, headers: c }
      );
    } else {
      if (n === null)
        return;
      if (E = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: c,
        opaque: i,
        context: o
      }), !E || typeof E.write != "function" || typeof E.end != "function" || typeof E.on != "function")
        throw new Qy("expected Writable");
      Ey(E, { readable: !1 }, (u) => {
        const { callback: B, res: Q, opaque: I, trailers: f, abort: C } = this;
        this.res = null, (u || !Q.readable) && ht.destroy(Q, u), this.callback = null, this.runInAsyncScope(B, null, u || null, { opaque: I, trailers: f }), u && C();
      });
    }
    return E.on("drain", r), this.res = E, (E.writableNeedDrain !== void 0 ? E.writableNeedDrain : E._writableState && E._writableState.needDrain) !== !0;
  }
  onData(e) {
    const { res: A } = this;
    return A ? A.write(e) : !0;
  }
  onComplete(e) {
    const { res: A } = this;
    pE(this), A && (this.trailers = ht.parseHeaders(e), A.end());
  }
  onError(e) {
    const { res: A, callback: r, opaque: s, body: n } = this;
    pE(this), this.factory = null, A ? (this.res = null, ht.destroy(A, e)) : r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: s });
    })), n && (this.body = null, ht.destroy(n, e));
  }
}
function EB(t, e, A) {
  if (A === void 0)
    return new Promise((r, s) => {
      EB.call(this, t, e, (n, i) => n ? s(n) : r(i));
    });
  try {
    this.dispatch(t, new fy(t, e, A));
  } catch (r) {
    if (typeof A != "function")
      throw r;
    const s = t && t.opaque;
    queueMicrotask(() => A(r, { opaque: s }));
  }
}
var py = EB;
const {
  Readable: uB,
  Duplex: my,
  PassThrough: wy
} = _t, {
  InvalidArgumentError: Un,
  InvalidReturnValueError: yy,
  RequestAbortedError: vo
} = be, nt = fe, { AsyncResource: Ry } = Oi, { addSignal: Dy, removeSignal: by } = Pi, ky = Ze, _s = Symbol("resume");
class Sy extends uB {
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
class Fy extends uB {
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
class Ny extends Ry {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Un("invalid opts");
    if (typeof A != "function")
      throw new Un("invalid handler");
    const { signal: r, method: s, opaque: n, onInfo: i, responseHeaders: o } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Un("signal must be an EventEmitter or EventTarget");
    if (s === "CONNECT")
      throw new Un("invalid method");
    if (i && typeof i != "function")
      throw new Un("invalid onInfo callback");
    super("UNDICI_PIPELINE"), this.opaque = n || null, this.responseHeaders = o || null, this.handler = A, this.abort = null, this.context = null, this.onInfo = i || null, this.req = new Sy().on("error", nt.nop), this.ret = new my({
      readableObjectMode: e.objectMode,
      autoDestroy: !0,
      read: () => {
        const { body: a } = this;
        a && a.resume && a.resume();
      },
      write: (a, g, c) => {
        const { req: E } = this;
        E.push(a, g) || E._readableState.destroyed ? c() : E[_s] = c;
      },
      destroy: (a, g) => {
        const { body: c, req: E, res: h, ret: u, abort: B } = this;
        !a && !u._readableState.endEmitted && (a = new vo()), B && a && B(), nt.destroy(c, a), nt.destroy(E, a), nt.destroy(h, a), by(this), g(a);
      }
    }).on("prefinish", () => {
      const { req: a } = this;
      a.push(null);
    }), this.res = null, Dy(this, r);
  }
  onConnect(e, A) {
    const { ret: r, res: s } = this;
    if (ky(!s, "pipeline cannot be retried"), r.destroyed)
      throw new vo();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r) {
    const { opaque: s, handler: n, context: i } = this;
    if (e < 200) {
      if (this.onInfo) {
        const a = this.responseHeaders === "raw" ? nt.parseRawHeaders(A) : nt.parseHeaders(A);
        this.onInfo({ statusCode: e, headers: a });
      }
      return;
    }
    this.res = new Fy(r);
    let o;
    try {
      this.handler = null;
      const a = this.responseHeaders === "raw" ? nt.parseRawHeaders(A) : nt.parseHeaders(A);
      o = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: a,
        opaque: s,
        body: this.res,
        context: i
      });
    } catch (a) {
      throw this.res.on("error", nt.nop), a;
    }
    if (!o || typeof o.on != "function")
      throw new yy("expected Readable");
    o.on("data", (a) => {
      const { ret: g, body: c } = this;
      !g.push(a) && c.pause && c.pause();
    }).on("error", (a) => {
      const { ret: g } = this;
      nt.destroy(g, a);
    }).on("end", () => {
      const { ret: a } = this;
      a.push(null);
    }).on("close", () => {
      const { ret: a } = this;
      a._readableState.ended || nt.destroy(a, new vo());
    }), this.body = o;
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
    this.handler = null, nt.destroy(A, e);
  }
}
function Uy(t, e) {
  try {
    const A = new Ny(t, e);
    return this.dispatch({ ...t, body: A.req }, A), A.ret;
  } catch (A) {
    return new wy().destroy(A);
  }
}
var Ty = Uy;
const { InvalidArgumentError: Jc, RequestAbortedError: Ly, SocketError: vy } = be, { AsyncResource: My } = Oi, mE = fe, { addSignal: Gy, removeSignal: wE } = Pi, Yy = Ze;
class xy extends My {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Jc("invalid opts");
    if (typeof A != "function")
      throw new Jc("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Jc("signal must be an EventEmitter or EventTarget");
    super("UNDICI_UPGRADE"), this.responseHeaders = n || null, this.opaque = s || null, this.callback = A, this.abort = null, this.context = null, Gy(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Ly();
    this.abort = e, this.context = null;
  }
  onHeaders() {
    throw new vy("bad upgrade", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    Yy.strictEqual(e, 101), wE(this), this.callback = null;
    const o = this.responseHeaders === "raw" ? mE.parseRawHeaders(A) : mE.parseHeaders(A);
    this.runInAsyncScope(s, null, null, {
      headers: o,
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
function QB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      QB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    const A = new xy(t, e);
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
var Jy = QB;
const { AsyncResource: Oy } = Oi, { InvalidArgumentError: Oc, RequestAbortedError: _y, SocketError: Hy } = be, yE = fe, { addSignal: Py, removeSignal: RE } = Pi;
class Vy extends Oy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Oc("invalid opts");
    if (typeof A != "function")
      throw new Oc("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Oc("signal must be an EventEmitter or EventTarget");
    super("UNDICI_CONNECT"), this.opaque = s || null, this.responseHeaders = n || null, this.callback = A, this.abort = null, Py(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new _y();
    this.abort = e, this.context = A;
  }
  onHeaders() {
    throw new Hy("bad connect", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    RE(this), this.callback = null;
    let o = A;
    o != null && (o = this.responseHeaders === "raw" ? yE.parseRawHeaders(A) : yE.parseHeaders(A)), this.runInAsyncScope(s, null, null, {
      statusCode: e,
      headers: o,
      socket: r,
      opaque: n,
      context: i
    });
  }
  onError(e) {
    const { callback: A, opaque: r } = this;
    RE(this), A && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(A, null, e, { opaque: r });
    }));
  }
}
function CB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      CB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    const A = new Vy(t, e);
    this.dispatch({ ...t, method: "CONNECT" }, A);
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
var Wy = CB;
In.request = hy;
In.stream = py;
In.pipeline = Ty;
In.upgrade = Jy;
In.connect = Wy;
const { UndiciError: qy } = be;
let jy = class BB extends qy {
  constructor(e) {
    super(e), Error.captureStackTrace(this, BB), this.name = "MockNotMatchedError", this.message = e || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
  }
};
var IB = {
  MockNotMatchedError: jy
}, Vi = {
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
const { MockNotMatchedError: ss } = IB, {
  kDispatches: go,
  kMockAgent: zy,
  kOriginalDispatch: Zy,
  kOrigin: $y,
  kGetNetConnect: Xy
} = Vi, { buildURL: Ky, nop: e0 } = fe, { STATUS_CODES: A0 } = Qn, {
  types: {
    isPromise: t0
  }
} = Ot;
function cr(t, e) {
  return typeof t == "string" ? t === e : t instanceof RegExp ? t.test(e) : typeof t == "function" ? t(e) === !0 : !1;
}
function dB(t) {
  return Object.fromEntries(
    Object.entries(t).map(([e, A]) => [e.toLocaleLowerCase(), A])
  );
}
function fB(t, e) {
  if (Array.isArray(t)) {
    for (let A = 0; A < t.length; A += 2)
      if (t[A].toLocaleLowerCase() === e.toLocaleLowerCase())
        return t[A + 1];
    return;
  } else
    return typeof t.get == "function" ? t.get(e) : dB(t)[e.toLocaleLowerCase()];
}
function pB(t) {
  const e = t.slice(), A = [];
  for (let r = 0; r < e.length; r += 2)
    A.push([e[r], e[r + 1]]);
  return Object.fromEntries(A);
}
function mB(t, e) {
  if (typeof t.headers == "function")
    return Array.isArray(e) && (e = pB(e)), t.headers(e ? dB(e) : {});
  if (typeof t.headers > "u")
    return !0;
  if (typeof e != "object" || typeof t.headers != "object")
    return !1;
  for (const [A, r] of Object.entries(t.headers)) {
    const s = fB(e, A);
    if (!cr(r, s))
      return !1;
  }
  return !0;
}
function DE(t) {
  if (typeof t != "string")
    return t;
  const e = t.split("?");
  if (e.length !== 2)
    return t;
  const A = new URLSearchParams(e.pop());
  return A.sort(), [...e, A.toString()].join("?");
}
function r0(t, { path: e, method: A, body: r, headers: s }) {
  const n = cr(t.path, e), i = cr(t.method, A), o = typeof t.body < "u" ? cr(t.body, r) : !0, a = mB(t, s);
  return n && i && o && a;
}
function wB(t) {
  return Buffer.isBuffer(t) ? t : typeof t == "object" ? JSON.stringify(t) : t.toString();
}
function yB(t, e) {
  const A = e.query ? Ky(e.path, e.query) : e.path, r = typeof A == "string" ? DE(A) : A;
  let s = t.filter(({ consumed: n }) => !n).filter(({ path: n }) => cr(DE(n), r));
  if (s.length === 0)
    throw new ss(`Mock dispatch not matched for path '${r}'`);
  if (s = s.filter(({ method: n }) => cr(n, e.method)), s.length === 0)
    throw new ss(`Mock dispatch not matched for method '${e.method}'`);
  if (s = s.filter(({ body: n }) => typeof n < "u" ? cr(n, e.body) : !0), s.length === 0)
    throw new ss(`Mock dispatch not matched for body '${e.body}'`);
  if (s = s.filter((n) => mB(n, e.headers)), s.length === 0)
    throw new ss(`Mock dispatch not matched for headers '${typeof e.headers == "object" ? JSON.stringify(e.headers) : e.headers}'`);
  return s[0];
}
function s0(t, e, A) {
  const r = { timesInvoked: 0, times: 1, persist: !1, consumed: !1 }, s = typeof A == "function" ? { callback: A } : { ...A }, n = { ...r, ...e, pending: !0, data: { error: null, ...s } };
  return t.push(n), n;
}
function qg(t, e) {
  const A = t.findIndex((r) => r.consumed ? r0(r, e) : !1);
  A !== -1 && t.splice(A, 1);
}
function RB(t) {
  const { path: e, method: A, body: r, headers: s, query: n } = t;
  return {
    path: e,
    method: A,
    body: r,
    headers: s,
    query: n
  };
}
function jg(t) {
  return Object.entries(t).reduce((e, [A, r]) => [
    ...e,
    Buffer.from(`${A}`),
    Array.isArray(r) ? r.map((s) => Buffer.from(`${s}`)) : Buffer.from(`${r}`)
  ], []);
}
function DB(t) {
  return A0[t] || "unknown";
}
async function n0(t) {
  const e = [];
  for await (const A of t)
    e.push(A);
  return Buffer.concat(e).toString("utf8");
}
function bB(t, e) {
  const A = RB(t), r = yB(this[go], A);
  r.timesInvoked++, r.data.callback && (r.data = { ...r.data, ...r.data.callback(t) });
  const { data: { statusCode: s, data: n, headers: i, trailers: o, error: a }, delay: g, persist: c } = r, { timesInvoked: E, times: h } = r;
  if (r.consumed = !c && E >= h, r.pending = E < h, a !== null)
    return qg(this[go], A), e.onError(a), !0;
  typeof g == "number" && g > 0 ? setTimeout(() => {
    u(this[go]);
  }, g) : u(this[go]);
  function u(Q, I = n) {
    const f = Array.isArray(t.headers) ? pB(t.headers) : t.headers, C = typeof I == "function" ? I({ ...t, headers: f }) : I;
    if (t0(C)) {
      C.then((m) => u(Q, m));
      return;
    }
    const d = wB(C), w = jg(i), p = jg(o);
    e.abort = e0, e.onHeaders(s, w, B, DB(s)), e.onData(Buffer.from(d)), e.onComplete(p), qg(Q, A);
  }
  function B() {
  }
  return !0;
}
function i0() {
  const t = this[zy], e = this[$y], A = this[Zy];
  return function(s, n) {
    if (t.isMockActive)
      try {
        bB.call(this, s, n);
      } catch (i) {
        if (i instanceof ss) {
          const o = t[Xy]();
          if (o === !1)
            throw new ss(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
          if (kB(o, e))
            A.call(this, s, n);
          else
            throw new ss(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`);
        } else
          throw i;
      }
    else
      A.call(this, s, n);
  };
}
function kB(t, e) {
  const A = new URL(e);
  return t === !0 ? !0 : !!(Array.isArray(t) && t.some((r) => cr(r, A.host)));
}
function o0(t) {
  if (t) {
    const { agent: e, ...A } = t;
    return A;
  }
}
var Ra = {
  getResponseData: wB,
  getMockDispatch: yB,
  addMockDispatch: s0,
  deleteMockDispatch: qg,
  buildKey: RB,
  generateKeyValues: jg,
  matchValue: cr,
  getResponse: n0,
  getStatusText: DB,
  mockDispatch: bB,
  buildMockDispatch: i0,
  checkNetConnect: kB,
  buildMockOptions: o0,
  getHeaderByName: fB
}, Da = {};
const { getResponseData: a0, buildKey: c0, addMockDispatch: _c } = Ra, {
  kDispatches: lo,
  kDispatchKey: ho,
  kDefaultHeaders: Hc,
  kDefaultTrailers: Pc,
  kContentLength: Vc,
  kMockDispatch: Eo
} = Vi, { InvalidArgumentError: Qt } = be, { buildURL: g0 } = fe;
class Mo {
  constructor(e) {
    this[Eo] = e;
  }
  /**
   * Delay a reply by a set amount in ms.
   */
  delay(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Qt("waitInMs must be a valid integer > 0");
    return this[Eo].delay = e, this;
  }
  /**
   * For a defined reply, never mark as consumed.
   */
  persist() {
    return this[Eo].persist = !0, this;
  }
  /**
   * Allow one to define a reply for a set amount of matching requests.
   */
  times(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Qt("repeatTimes must be a valid integer > 0");
    return this[Eo].times = e, this;
  }
}
let l0 = class {
  constructor(e, A) {
    if (typeof e != "object")
      throw new Qt("opts must be an object");
    if (typeof e.path > "u")
      throw new Qt("opts.path must be defined");
    if (typeof e.method > "u" && (e.method = "GET"), typeof e.path == "string")
      if (e.query)
        e.path = g0(e.path, e.query);
      else {
        const r = new URL(e.path, "data://");
        e.path = r.pathname + r.search;
      }
    typeof e.method == "string" && (e.method = e.method.toUpperCase()), this[ho] = c0(e), this[lo] = A, this[Hc] = {}, this[Pc] = {}, this[Vc] = !1;
  }
  createMockScopeDispatchData(e, A, r = {}) {
    const s = a0(A), n = this[Vc] ? { "content-length": s.length } : {}, i = { ...this[Hc], ...n, ...r.headers }, o = { ...this[Pc], ...r.trailers };
    return { statusCode: e, data: A, headers: i, trailers: o };
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
      const o = (g) => {
        const c = e(g);
        if (typeof c != "object")
          throw new Qt("reply options callback must return an object");
        const { statusCode: E, data: h = "", responseOptions: u = {} } = c;
        return this.validateReplyParameters(E, h, u), {
          ...this.createMockScopeDispatchData(E, h, u)
        };
      }, a = _c(this[lo], this[ho], o);
      return new Mo(a);
    }
    const [A, r = "", s = {}] = [...arguments];
    this.validateReplyParameters(A, r, s);
    const n = this.createMockScopeDispatchData(A, r, s), i = _c(this[lo], this[ho], n);
    return new Mo(i);
  }
  /**
   * Mock an undici request with a defined error.
   */
  replyWithError(e) {
    if (typeof e > "u")
      throw new Qt("error must be defined");
    const A = _c(this[lo], this[ho], { error: e });
    return new Mo(A);
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
Da.MockInterceptor = l0;
Da.MockScope = Mo;
const { promisify: h0 } = Ot, E0 = wa, { buildMockDispatch: u0 } = Ra, {
  kDispatches: bE,
  kMockAgent: kE,
  kClose: SE,
  kOriginalClose: FE,
  kOrigin: NE,
  kOriginalDispatch: Q0,
  kConnected: Wc
} = Vi, { MockInterceptor: C0 } = Da, UE = ve, { InvalidArgumentError: B0 } = be;
let I0 = class extends E0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new B0("Argument opts.agent must implement Agent");
    this[kE] = A.agent, this[NE] = e, this[bE] = [], this[Wc] = 1, this[Q0] = this.dispatch, this[FE] = this.close.bind(this), this.dispatch = u0.call(this), this.close = this[SE];
  }
  get [UE.kConnected]() {
    return this[Wc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new C0(e, this[bE]);
  }
  async [SE]() {
    await h0(this[FE])(), this[Wc] = 0, this[kE][UE.kClients].delete(this[NE]);
  }
};
var SB = I0;
const { promisify: d0 } = Ot, f0 = Hi, { buildMockDispatch: p0 } = Ra, {
  kDispatches: TE,
  kMockAgent: LE,
  kClose: vE,
  kOriginalClose: ME,
  kOrigin: GE,
  kOriginalDispatch: m0,
  kConnected: qc
} = Vi, { MockInterceptor: w0 } = Da, YE = ve, { InvalidArgumentError: y0 } = be;
let R0 = class extends f0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new y0("Argument opts.agent must implement Agent");
    this[LE] = A.agent, this[GE] = e, this[TE] = [], this[qc] = 1, this[m0] = this.dispatch, this[ME] = this.close.bind(this), this.dispatch = p0.call(this), this.close = this[vE];
  }
  get [YE.kConnected]() {
    return this[qc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new w0(e, this[TE]);
  }
  async [vE]() {
    await d0(this[ME])(), this[qc] = 0, this[LE][YE.kClients].delete(this[GE]);
  }
};
var FB = R0;
const D0 = {
  pronoun: "it",
  is: "is",
  was: "was",
  this: "this"
}, b0 = {
  pronoun: "they",
  is: "are",
  was: "were",
  this: "these"
};
var k0 = class {
  constructor(e, A) {
    this.singular = e, this.plural = A;
  }
  pluralize(e) {
    const A = e === 1, r = A ? D0 : b0, s = A ? this.singular : this.plural;
    return { ...r, count: e, noun: s };
  }
};
const { Transform: S0 } = _t, { Console: F0 } = ld;
var N0 = class {
  constructor({ disableColors: e } = {}) {
    this.transform = new S0({
      transform(A, r, s) {
        s(null, A);
      }
    }), this.logger = new F0({
      stdout: this.transform,
      inspectOptions: {
        colors: !e && !process.env.CI
      }
    });
  }
  format(e) {
    const A = e.map(
      ({ method: r, path: s, data: { statusCode: n }, persist: i, times: o, timesInvoked: a, origin: g }) => ({
        Method: r,
        Origin: g,
        Path: s,
        "Status code": n,
        Persistent: i ? "✅" : "❌",
        Invocations: a,
        Remaining: i ? 1 / 0 : o - a
      })
    );
    return this.logger.table(A), this.transform.read().toString();
  }
};
const { kClients: Zr } = ve, U0 = ya, {
  kAgent: jc,
  kMockAgentSet: uo,
  kMockAgentGet: xE,
  kDispatches: zc,
  kIsMockActive: Qo,
  kNetConnect: $r,
  kGetNetConnect: T0,
  kOptions: Co,
  kFactory: Bo
} = Vi, L0 = SB, v0 = FB, { matchValue: M0, buildMockOptions: G0 } = Ra, { InvalidArgumentError: JE, UndiciError: Y0 } = be, x0 = bl, J0 = k0, O0 = N0;
class _0 {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}
let H0 = class extends x0 {
  constructor(e) {
    if (super(e), this[$r] = !0, this[Qo] = !0, e && e.agent && typeof e.agent.dispatch != "function")
      throw new JE("Argument opts.agent must implement Agent");
    const A = e && e.agent ? e.agent : new U0(e);
    this[jc] = A, this[Zr] = A[Zr], this[Co] = G0(e);
  }
  get(e) {
    let A = this[xE](e);
    return A || (A = this[Bo](e), this[uo](e, A)), A;
  }
  dispatch(e, A) {
    return this.get(e.origin), this[jc].dispatch(e, A);
  }
  async close() {
    await this[jc].close(), this[Zr].clear();
  }
  deactivate() {
    this[Qo] = !1;
  }
  activate() {
    this[Qo] = !0;
  }
  enableNetConnect(e) {
    if (typeof e == "string" || typeof e == "function" || e instanceof RegExp)
      Array.isArray(this[$r]) ? this[$r].push(e) : this[$r] = [e];
    else if (typeof e > "u")
      this[$r] = !0;
    else
      throw new JE("Unsupported matcher. Must be one of String|Function|RegExp.");
  }
  disableNetConnect() {
    this[$r] = !1;
  }
  // This is required to bypass issues caused by using global symbols - see:
  // https://github.com/nodejs/undici/issues/1447
  get isMockActive() {
    return this[Qo];
  }
  [uo](e, A) {
    this[Zr].set(e, new _0(A));
  }
  [Bo](e) {
    const A = Object.assign({ agent: this }, this[Co]);
    return this[Co] && this[Co].connections === 1 ? new L0(e, A) : new v0(e, A);
  }
  [xE](e) {
    const A = this[Zr].get(e);
    if (A)
      return A.deref();
    if (typeof e != "string") {
      const r = this[Bo]("http://localhost:9999");
      return this[uo](e, r), r;
    }
    for (const [r, s] of Array.from(this[Zr])) {
      const n = s.deref();
      if (n && typeof r != "string" && M0(r, e)) {
        const i = this[Bo](e);
        return this[uo](e, i), i[zc] = n[zc], i;
      }
    }
  }
  [T0]() {
    return this[$r];
  }
  pendingInterceptors() {
    const e = this[Zr];
    return Array.from(e.entries()).flatMap(([A, r]) => r.deref()[zc].map((s) => ({ ...s, origin: A }))).filter(({ pending: A }) => A);
  }
  assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new O0() } = {}) {
    const A = this.pendingInterceptors();
    if (A.length === 0)
      return;
    const r = new J0("interceptor", "interceptors").pluralize(A.length);
    throw new Y0(`
${r.count} ${r.noun} ${r.is} pending:

${e.format(A)}
`.trim());
  }
};
var P0 = H0;
const { kProxy: V0, kClose: W0, kDestroy: q0, kInterceptors: j0 } = ve, { URL: OE } = hd, _E = ya, z0 = Hi, Z0 = fa, { InvalidArgumentError: ei, RequestAbortedError: $0 } = be, HE = pa, Tn = Symbol("proxy agent"), Io = Symbol("proxy client"), Ln = Symbol("proxy headers"), Zc = Symbol("request tls settings"), X0 = Symbol("proxy tls settings"), PE = Symbol("connect endpoint function");
function K0(t) {
  return t === "https:" ? 443 : 80;
}
function eR(t) {
  if (typeof t == "string" && (t = { uri: t }), !t || !t.uri)
    throw new ei("Proxy opts.uri is mandatory");
  return {
    uri: t.uri,
    protocol: t.protocol || "https"
  };
}
function AR(t, e) {
  return new z0(t, e);
}
let tR = class extends Z0 {
  constructor(e) {
    if (super(e), this[V0] = eR(e), this[Tn] = new _E(e), this[j0] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], typeof e == "string" && (e = { uri: e }), !e || !e.uri)
      throw new ei("Proxy opts.uri is mandatory");
    const { clientFactory: A = AR } = e;
    if (typeof A != "function")
      throw new ei("Proxy opts.clientFactory must be a function.");
    this[Zc] = e.requestTls, this[X0] = e.proxyTls, this[Ln] = e.headers || {};
    const r = new OE(e.uri), { origin: s, port: n, host: i, username: o, password: a } = r;
    if (e.auth && e.token)
      throw new ei("opts.auth cannot be used in combination with opts.token");
    e.auth ? this[Ln]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[Ln]["proxy-authorization"] = e.token : o && a && (this[Ln]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(o)}:${decodeURIComponent(a)}`).toString("base64")}`);
    const g = HE({ ...e.proxyTls });
    this[PE] = HE({ ...e.requestTls }), this[Io] = A(r, { connect: g }), this[Tn] = new _E({
      ...e,
      connect: async (c, E) => {
        let h = c.host;
        c.port || (h += `:${K0(c.protocol)}`);
        try {
          const { socket: u, statusCode: B } = await this[Io].connect({
            origin: s,
            port: n,
            path: h,
            signal: c.signal,
            headers: {
              ...this[Ln],
              host: i
            }
          });
          if (B !== 200 && (u.on("error", () => {
          }).destroy(), E(new $0(`Proxy response (${B}) !== 200 when HTTP Tunneling`))), c.protocol !== "https:") {
            E(null, u);
            return;
          }
          let Q;
          this[Zc] ? Q = this[Zc].servername : Q = c.servername, this[PE]({ ...c, servername: Q, httpSocket: u }, E);
        } catch (u) {
          E(u);
        }
      }
    });
  }
  dispatch(e, A) {
    const { host: r } = new OE(e.origin), s = rR(e.headers);
    return sR(s), this[Tn].dispatch(
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
  async [W0]() {
    await this[Tn].close(), await this[Io].close();
  }
  async [q0]() {
    await this[Tn].destroy(), await this[Io].destroy();
  }
};
function rR(t) {
  if (Array.isArray(t)) {
    const e = {};
    for (let A = 0; A < t.length; A += 2)
      e[t[A]] = t[A + 1];
    return e;
  }
  return t;
}
function sR(t) {
  if (t && Object.keys(t).find((A) => A.toLowerCase() === "proxy-authorization"))
    throw new ei("Proxy-Authorization should be sent in ProxyAgent constructor");
}
var nR = tR;
const Xr = Ze, { kRetryHandlerDefaultRetry: VE } = ve, { RequestRetryError: fo } = be, { isDisturbed: WE, parseHeaders: iR, parseRangeHeader: qE } = fe;
function oR(t) {
  const e = Date.now();
  return new Date(t).getTime() - e;
}
let aR = class NB {
  constructor(e, A) {
    const { retryOptions: r, ...s } = e, {
      // Retry scoped
      retry: n,
      maxRetries: i,
      maxTimeout: o,
      minTimeout: a,
      timeoutFactor: g,
      // Response scoped
      methods: c,
      errorCodes: E,
      retryAfter: h,
      statusCodes: u
    } = r ?? {};
    this.dispatch = A.dispatch, this.handler = A.handler, this.opts = s, this.abort = null, this.aborted = !1, this.retryOpts = {
      retry: n ?? NB[VE],
      retryAfter: h ?? !0,
      maxTimeout: o ?? 30 * 1e3,
      // 30s,
      timeout: a ?? 500,
      // .5s
      timeoutFactor: g ?? 2,
      maxRetries: i ?? 5,
      // What errors we should retry
      methods: c ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"],
      // Indicates which errors to retry
      statusCodes: u ?? [500, 502, 503, 504, 429],
      // List of errors to retry
      errorCodes: E ?? [
        "ECONNRESET",
        "ECONNREFUSED",
        "ENOTFOUND",
        "ENETDOWN",
        "ENETUNREACH",
        "EHOSTDOWN",
        "EHOSTUNREACH",
        "EPIPE"
      ]
    }, this.retryCount = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((B) => {
      this.aborted = !0, this.abort ? this.abort(B) : this.reason = B;
    });
  }
  onRequestSent() {
    this.handler.onRequestSent && this.handler.onRequestSent();
  }
  onUpgrade(e, A, r) {
    this.handler.onUpgrade && this.handler.onUpgrade(e, A, r);
  }
  onConnect(e) {
    this.aborted ? e(this.reason) : this.abort = e;
  }
  onBodySent(e) {
    if (this.handler.onBodySent)
      return this.handler.onBodySent(e);
  }
  static [VE](e, { state: A, opts: r }, s) {
    const { statusCode: n, code: i, headers: o } = e, { method: a, retryOptions: g } = r, {
      maxRetries: c,
      timeout: E,
      maxTimeout: h,
      timeoutFactor: u,
      statusCodes: B,
      errorCodes: Q,
      methods: I
    } = g;
    let { counter: f, currentTimeout: C } = A;
    if (C = C != null && C > 0 ? C : E, i && i !== "UND_ERR_REQ_RETRY" && i !== "UND_ERR_SOCKET" && !Q.includes(i)) {
      s(e);
      return;
    }
    if (Array.isArray(I) && !I.includes(a)) {
      s(e);
      return;
    }
    if (n != null && Array.isArray(B) && !B.includes(n)) {
      s(e);
      return;
    }
    if (f > c) {
      s(e);
      return;
    }
    let d = o != null && o["retry-after"];
    d && (d = Number(d), d = isNaN(d) ? oR(d) : d * 1e3);
    const w = d > 0 ? Math.min(d, h) : Math.min(C * u ** f, h);
    A.currentTimeout = w, setTimeout(() => s(null), w);
  }
  onHeaders(e, A, r, s) {
    const n = iR(A);
    if (this.retryCount += 1, e >= 300)
      return this.abort(
        new fo("Request failed", e, {
          headers: n,
          count: this.retryCount
        })
      ), !1;
    if (this.resume != null) {
      if (this.resume = null, e !== 206)
        return !0;
      const o = qE(n["content-range"]);
      if (!o)
        return this.abort(
          new fo("Content-Range mismatch", e, {
            headers: n,
            count: this.retryCount
          })
        ), !1;
      if (this.etag != null && this.etag !== n.etag)
        return this.abort(
          new fo("ETag mismatch", e, {
            headers: n,
            count: this.retryCount
          })
        ), !1;
      const { start: a, size: g, end: c = g } = o;
      return Xr(this.start === a, "content-range mismatch"), Xr(this.end == null || this.end === c, "content-range mismatch"), this.resume = r, !0;
    }
    if (this.end == null) {
      if (e === 206) {
        const o = qE(n["content-range"]);
        if (o == null)
          return this.handler.onHeaders(
            e,
            A,
            r,
            s
          );
        const { start: a, size: g, end: c = g } = o;
        Xr(
          a != null && Number.isFinite(a) && this.start !== a,
          "content-range mismatch"
        ), Xr(Number.isFinite(a)), Xr(
          c != null && Number.isFinite(c) && this.end !== c,
          "invalid content-length"
        ), this.start = a, this.end = c;
      }
      if (this.end == null) {
        const o = n["content-length"];
        this.end = o != null ? Number(o) : null;
      }
      return Xr(Number.isFinite(this.start)), Xr(
        this.end == null || Number.isFinite(this.end),
        "invalid content-length"
      ), this.resume = r, this.etag = n.etag != null ? n.etag : null, this.handler.onHeaders(
        e,
        A,
        r,
        s
      );
    }
    const i = new fo("Request failed", e, {
      headers: n,
      count: this.retryCount
    });
    return this.abort(i), !1;
  }
  onData(e) {
    return this.start += e.length, this.handler.onData(e);
  }
  onComplete(e) {
    return this.retryCount = 0, this.handler.onComplete(e);
  }
  onError(e) {
    if (this.aborted || WE(this.opts.body))
      return this.handler.onError(e);
    this.retryOpts.retry(
      e,
      {
        state: { counter: this.retryCount++, currentTimeout: this.retryAfter },
        opts: { retryOptions: this.retryOpts, ...this.opts }
      },
      A.bind(this)
    );
    function A(r) {
      if (r != null || this.aborted || WE(this.opts.body))
        return this.handler.onError(r);
      this.start !== 0 && (this.opts = {
        ...this.opts,
        headers: {
          ...this.opts.headers,
          range: `bytes=${this.start}-${this.end ?? ""}`
        }
      });
      try {
        this.dispatch(this.opts, this);
      } catch (s) {
        this.handler.onError(s);
      }
    }
  }
};
var cR = aR;
const UB = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: gR } = be, lR = ya;
LB() === void 0 && TB(new lR());
function TB(t) {
  if (!t || typeof t.dispatch != "function")
    throw new gR("Argument agent must implement Agent");
  Object.defineProperty(globalThis, UB, {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !1
  });
}
function LB() {
  return globalThis[UB];
}
var Wi = {
  setGlobalDispatcher: TB,
  getGlobalDispatcher: LB
}, hR = class {
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
}, $c, jE;
function dn() {
  if (jE)
    return $c;
  jE = 1;
  const { kHeadersList: t, kConstruct: e } = ve, { kGuard: A } = Or(), { kEnumerableProperty: r } = fe, {
    makeIterator: s,
    isValidHeaderName: n,
    isValidHeaderValue: i
  } = Rt(), { webidl: o } = VA(), a = Ze, g = Symbol("headers map"), c = Symbol("headers map sorted");
  function E(f) {
    return f === 10 || f === 13 || f === 9 || f === 32;
  }
  function h(f) {
    let C = 0, d = f.length;
    for (; d > C && E(f.charCodeAt(d - 1)); )
      --d;
    for (; d > C && E(f.charCodeAt(C)); )
      ++C;
    return C === 0 && d === f.length ? f : f.substring(C, d);
  }
  function u(f, C) {
    if (Array.isArray(C))
      for (let d = 0; d < C.length; ++d) {
        const w = C[d];
        if (w.length !== 2)
          throw o.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${w.length}.`
          });
        B(f, w[0], w[1]);
      }
    else if (typeof C == "object" && C !== null) {
      const d = Object.keys(C);
      for (let w = 0; w < d.length; ++w)
        B(f, d[w], C[d[w]]);
    } else
      throw o.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
      });
  }
  function B(f, C, d) {
    if (d = h(d), n(C)) {
      if (!i(d))
        throw o.errors.invalidArgument({
          prefix: "Headers.append",
          value: d,
          type: "header value"
        });
    } else
      throw o.errors.invalidArgument({
        prefix: "Headers.append",
        value: C,
        type: "header name"
      });
    if (f[A] === "immutable")
      throw new TypeError("immutable");
    return f[A], f[t].append(C, d);
  }
  class Q {
    constructor(C) {
      /** @type {[string, string][]|null} */
      L(this, "cookies", null);
      C instanceof Q ? (this[g] = new Map(C[g]), this[c] = C[c], this.cookies = C.cookies === null ? null : [...C.cookies]) : (this[g] = new Map(C), this[c] = null);
    }
    // https://fetch.spec.whatwg.org/#header-list-contains
    contains(C) {
      return C = C.toLowerCase(), this[g].has(C);
    }
    clear() {
      this[g].clear(), this[c] = null, this.cookies = null;
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-append
    append(C, d) {
      this[c] = null;
      const w = C.toLowerCase(), p = this[g].get(w);
      if (p) {
        const m = w === "cookie" ? "; " : ", ";
        this[g].set(w, {
          name: p.name,
          value: `${p.value}${m}${d}`
        });
      } else
        this[g].set(w, { name: C, value: d });
      w === "set-cookie" && (this.cookies ?? (this.cookies = []), this.cookies.push(d));
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-set
    set(C, d) {
      this[c] = null;
      const w = C.toLowerCase();
      w === "set-cookie" && (this.cookies = [d]), this[g].set(w, { name: C, value: d });
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-delete
    delete(C) {
      this[c] = null, C = C.toLowerCase(), C === "set-cookie" && (this.cookies = null), this[g].delete(C);
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-get
    get(C) {
      const d = this[g].get(C.toLowerCase());
      return d === void 0 ? null : d.value;
    }
    *[Symbol.iterator]() {
      for (const [C, { value: d }] of this[g])
        yield [C, d];
    }
    get entries() {
      const C = {};
      if (this[g].size)
        for (const { name: d, value: w } of this[g].values())
          C[d] = w;
      return C;
    }
  }
  class I {
    constructor(C = void 0) {
      C !== e && (this[t] = new Q(), this[A] = "none", C !== void 0 && (C = o.converters.HeadersInit(C), u(this, C)));
    }
    // https://fetch.spec.whatwg.org/#dom-headers-append
    append(C, d) {
      return o.brandCheck(this, I), o.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), C = o.converters.ByteString(C), d = o.converters.ByteString(d), B(this, C, d);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-delete
    delete(C) {
      if (o.brandCheck(this, I), o.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), C = o.converters.ByteString(C), !n(C))
        throw o.errors.invalidArgument({
          prefix: "Headers.delete",
          value: C,
          type: "header name"
        });
      if (this[A] === "immutable")
        throw new TypeError("immutable");
      this[A], this[t].contains(C) && this[t].delete(C);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-get
    get(C) {
      if (o.brandCheck(this, I), o.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), C = o.converters.ByteString(C), !n(C))
        throw o.errors.invalidArgument({
          prefix: "Headers.get",
          value: C,
          type: "header name"
        });
      return this[t].get(C);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-has
    has(C) {
      if (o.brandCheck(this, I), o.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), C = o.converters.ByteString(C), !n(C))
        throw o.errors.invalidArgument({
          prefix: "Headers.has",
          value: C,
          type: "header name"
        });
      return this[t].contains(C);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-set
    set(C, d) {
      if (o.brandCheck(this, I), o.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), C = o.converters.ByteString(C), d = o.converters.ByteString(d), d = h(d), n(C)) {
        if (!i(d))
          throw o.errors.invalidArgument({
            prefix: "Headers.set",
            value: d,
            type: "header value"
          });
      } else
        throw o.errors.invalidArgument({
          prefix: "Headers.set",
          value: C,
          type: "header name"
        });
      if (this[A] === "immutable")
        throw new TypeError("immutable");
      this[A], this[t].set(C, d);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-getsetcookie
    getSetCookie() {
      o.brandCheck(this, I);
      const C = this[t].cookies;
      return C ? [...C] : [];
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
    get [c]() {
      if (this[t][c])
        return this[t][c];
      const C = [], d = [...this[t]].sort((p, m) => p[0] < m[0] ? -1 : 1), w = this[t].cookies;
      for (let p = 0; p < d.length; ++p) {
        const [m, R] = d[p];
        if (m === "set-cookie")
          for (let D = 0; D < w.length; ++D)
            C.push([m, w[D]]);
        else
          a(R !== null), C.push([m, R]);
      }
      return this[t][c] = C, C;
    }
    keys() {
      if (o.brandCheck(this, I), this[A] === "immutable") {
        const C = this[c];
        return s(
          () => C,
          "Headers",
          "key"
        );
      }
      return s(
        () => [...this[c].values()],
        "Headers",
        "key"
      );
    }
    values() {
      if (o.brandCheck(this, I), this[A] === "immutable") {
        const C = this[c];
        return s(
          () => C,
          "Headers",
          "value"
        );
      }
      return s(
        () => [...this[c].values()],
        "Headers",
        "value"
      );
    }
    entries() {
      if (o.brandCheck(this, I), this[A] === "immutable") {
        const C = this[c];
        return s(
          () => C,
          "Headers",
          "key+value"
        );
      }
      return s(
        () => [...this[c].values()],
        "Headers",
        "key+value"
      );
    }
    /**
     * @param {(value: string, key: string, self: Headers) => void} callbackFn
     * @param {unknown} thisArg
     */
    forEach(C, d = globalThis) {
      if (o.brandCheck(this, I), o.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), typeof C != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'."
        );
      for (const [w, p] of this)
        C.apply(d, [p, w, this]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return o.brandCheck(this, I), this[t];
    }
  }
  return I.prototype[Symbol.iterator] = I.prototype.entries, Object.defineProperties(I.prototype, {
    append: r,
    delete: r,
    get: r,
    has: r,
    set: r,
    getSetCookie: r,
    keys: r,
    values: r,
    entries: r,
    forEach: r,
    [Symbol.iterator]: { enumerable: !1 },
    [Symbol.toStringTag]: {
      value: "Headers",
      configurable: !0
    }
  }), o.converters.HeadersInit = function(f) {
    if (o.util.Type(f) === "Object")
      return f[Symbol.iterator] ? o.converters["sequence<sequence<ByteString>>"](f) : o.converters["record<ByteString, ByteString>"](f);
    throw o.errors.conversionFailed({
      prefix: "Headers constructor",
      argument: "Argument 1",
      types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
    });
  }, $c = {
    fill: u,
    Headers: I,
    HeadersList: Q
  }, $c;
}
var Xc, zE;
function Ul() {
  if (zE)
    return Xc;
  zE = 1;
  const { Headers: t, HeadersList: e, fill: A } = dn(), { extractBody: r, cloneBody: s, mixinBody: n } = da(), i = fe, { kEnumerableProperty: o } = i, {
    isValidReasonPhrase: a,
    isCancelled: g,
    isAborted: c,
    isBlobLike: E,
    serializeJavascriptValueToJSONString: h,
    isErrorLike: u,
    isomorphicEncode: B
  } = Rt(), {
    redirectStatusSet: Q,
    nullBodyStatus: I,
    DOMException: f
  } = ms(), { kState: C, kHeaders: d, kGuard: w, kRealm: p } = Or(), { webidl: m } = VA(), { FormData: R } = Dl(), { getGlobalOrigin: D } = _i(), { URLSerializer: G } = Ht(), { kHeadersList: H, kConstruct: x } = ve, te = Ze, { types: ee } = Ot, Ee = globalThis.ReadableStream || Yr.ReadableStream, q = new TextEncoder("utf-8");
  class $ {
    // Creates network error Response.
    static error() {
      const v = { settingsObject: {} }, M = new $();
      return M[C] = K(), M[p] = v, M[d][H] = M[C].headersList, M[d][w] = "immutable", M[d][p] = v, M;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(v, M = {}) {
      m.argumentLengthCheck(arguments, 1, { header: "Response.json" }), M !== null && (M = m.converters.ResponseInit(M));
      const P = q.encode(
        h(v)
      ), j = r(P), Z = { settingsObject: {} }, O = new $();
      return O[p] = Z, O[d][w] = "response", O[d][p] = Z, S(O, M, { body: j[0], type: "application/json" }), O;
    }
    // Creates a redirect Response that redirects to url with status status.
    static redirect(v, M = 302) {
      const P = { settingsObject: {} };
      m.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), v = m.converters.USVString(v), M = m.converters["unsigned short"](M);
      let j;
      try {
        j = new URL(v, D());
      } catch (oe) {
        throw Object.assign(new TypeError("Failed to parse URL from " + v), {
          cause: oe
        });
      }
      if (!Q.has(M))
        throw new RangeError("Invalid status code " + M);
      const Z = new $();
      Z[p] = P, Z[d][w] = "immutable", Z[d][p] = P, Z[C].status = M;
      const O = B(G(j));
      return Z[C].headersList.append("location", O), Z;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(v = null, M = {}) {
      v !== null && (v = m.converters.BodyInit(v)), M = m.converters.ResponseInit(M), this[p] = { settingsObject: {} }, this[C] = ie({}), this[d] = new t(x), this[d][w] = "response", this[d][H] = this[C].headersList, this[d][p] = this[p];
      let P = null;
      if (v != null) {
        const [j, Z] = r(v);
        P = { body: j, type: Z };
      }
      S(this, M, P);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
      return m.brandCheck(this, $), this[C].type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
      m.brandCheck(this, $);
      const v = this[C].urlList, M = v[v.length - 1] ?? null;
      return M === null ? "" : G(M, !0);
    }
    // Returns whether response was obtained through a redirect.
    get redirected() {
      return m.brandCheck(this, $), this[C].urlList.length > 1;
    }
    // Returns response’s status.
    get status() {
      return m.brandCheck(this, $), this[C].status;
    }
    // Returns whether response’s status is an ok status.
    get ok() {
      return m.brandCheck(this, $), this[C].status >= 200 && this[C].status <= 299;
    }
    // Returns response’s status message.
    get statusText() {
      return m.brandCheck(this, $), this[C].statusText;
    }
    // Returns response’s headers as Headers.
    get headers() {
      return m.brandCheck(this, $), this[d];
    }
    get body() {
      return m.brandCheck(this, $), this[C].body ? this[C].body.stream : null;
    }
    get bodyUsed() {
      return m.brandCheck(this, $), !!this[C].body && i.isDisturbed(this[C].body.stream);
    }
    // Returns a clone of response.
    clone() {
      if (m.brandCheck(this, $), this.bodyUsed || this.body && this.body.locked)
        throw m.errors.exception({
          header: "Response.clone",
          message: "Body has already been consumed."
        });
      const v = se(this[C]), M = new $();
      return M[C] = v, M[p] = this[p], M[d][H] = v.headersList, M[d][w] = this[d][w], M[d][p] = this[d][p], M;
    }
  }
  n($), Object.defineProperties($.prototype, {
    type: o,
    url: o,
    status: o,
    ok: o,
    redirected: o,
    statusText: o,
    headers: o,
    clone: o,
    body: o,
    bodyUsed: o,
    [Symbol.toStringTag]: {
      value: "Response",
      configurable: !0
    }
  }), Object.defineProperties($, {
    json: o,
    redirect: o,
    error: o
  });
  function se(k) {
    if (k.internalResponse)
      return V(
        se(k.internalResponse),
        k.type
      );
    const v = ie({ ...k, body: null });
    return k.body != null && (v.body = s(k.body)), v;
  }
  function ie(k) {
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
      ...k,
      headersList: k.headersList ? new e(k.headersList) : new e(),
      urlList: k.urlList ? [...k.urlList] : []
    };
  }
  function K(k) {
    const v = u(k);
    return ie({
      type: "error",
      status: 0,
      error: v ? k : new Error(k && String(k)),
      aborted: k && k.name === "AbortError"
    });
  }
  function b(k, v) {
    return v = {
      internalResponse: k,
      ...v
    }, new Proxy(k, {
      get(M, P) {
        return P in v ? v[P] : M[P];
      },
      set(M, P, j) {
        return te(!(P in v)), M[P] = j, !0;
      }
    });
  }
  function V(k, v) {
    if (v === "basic")
      return b(k, {
        type: "basic",
        headersList: k.headersList
      });
    if (v === "cors")
      return b(k, {
        type: "cors",
        headersList: k.headersList
      });
    if (v === "opaque")
      return b(k, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
      });
    if (v === "opaqueredirect")
      return b(k, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
      });
    te(!1);
  }
  function N(k, v = null) {
    return te(g(k)), c(k) ? K(Object.assign(new f("The operation was aborted.", "AbortError"), { cause: v })) : K(Object.assign(new f("Request was cancelled."), { cause: v }));
  }
  function S(k, v, M) {
    if (v.status !== null && (v.status < 200 || v.status > 599))
      throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in v && v.statusText != null && !a(String(v.statusText)))
      throw new TypeError("Invalid statusText");
    if ("status" in v && v.status != null && (k[C].status = v.status), "statusText" in v && v.statusText != null && (k[C].statusText = v.statusText), "headers" in v && v.headers != null && A(k[d], v.headers), M) {
      if (I.includes(k.status))
        throw m.errors.exception({
          header: "Response constructor",
          message: "Invalid response status code " + k.status
        });
      k[C].body = M.body, M.type != null && !k[C].headersList.contains("Content-Type") && k[C].headersList.append("content-type", M.type);
    }
  }
  return m.converters.ReadableStream = m.interfaceConverter(
    Ee
  ), m.converters.FormData = m.interfaceConverter(
    R
  ), m.converters.URLSearchParams = m.interfaceConverter(
    URLSearchParams
  ), m.converters.XMLHttpRequestBodyInit = function(k) {
    return typeof k == "string" ? m.converters.USVString(k) : E(k) ? m.converters.Blob(k, { strict: !1 }) : ee.isArrayBuffer(k) || ee.isTypedArray(k) || ee.isDataView(k) ? m.converters.BufferSource(k) : i.isFormDataLike(k) ? m.converters.FormData(k, { strict: !1 }) : k instanceof URLSearchParams ? m.converters.URLSearchParams(k) : m.converters.DOMString(k);
  }, m.converters.BodyInit = function(k) {
    return k instanceof Ee ? m.converters.ReadableStream(k) : k != null && k[Symbol.asyncIterator] ? k : m.converters.XMLHttpRequestBodyInit(k);
  }, m.converters.ResponseInit = m.dictionaryConverter([
    {
      key: "status",
      converter: m.converters["unsigned short"],
      defaultValue: 200
    },
    {
      key: "statusText",
      converter: m.converters.ByteString,
      defaultValue: ""
    },
    {
      key: "headers",
      converter: m.converters.HeadersInit
    }
  ]), Xc = {
    makeNetworkError: K,
    makeResponse: ie,
    makeAppropriateNetworkError: N,
    filterResponse: V,
    Response: $,
    cloneResponse: se
  }, Xc;
}
var Kc, ZE;
function ba() {
  if (ZE)
    return Kc;
  ZE = 1;
  const { extractBody: t, mixinBody: e, cloneBody: A } = da(), { Headers: r, fill: s, HeadersList: n } = dn(), { FinalizationRegistry: i } = nB(), o = fe, {
    isValidHTTPToken: a,
    sameOrigin: g,
    normalizeMethod: c,
    makePolicyContainer: E,
    normalizeMethodRecord: h
  } = Rt(), {
    forbiddenMethodsSet: u,
    corsSafeListedMethodsSet: B,
    referrerPolicy: Q,
    requestRedirect: I,
    requestMode: f,
    requestCredentials: C,
    requestCache: d,
    requestDuplex: w
  } = ms(), { kEnumerableProperty: p } = o, { kHeaders: m, kSignal: R, kState: D, kGuard: G, kRealm: H } = Or(), { webidl: x } = VA(), { getGlobalOrigin: te } = _i(), { URLSerializer: ee } = Ht(), { kHeadersList: Ee, kConstruct: q } = ve, $ = Ze, { getMaxListeners: se, setMaxListeners: ie, getEventListeners: K, defaultMaxListeners: b } = Ji;
  let V = globalThis.TransformStream;
  const N = Symbol("abortController"), S = new i(({ signal: P, abort: j }) => {
    P.removeEventListener("abort", j);
  });
  class k {
    // https://fetch.spec.whatwg.org/#dom-request
    constructor(j, Z = {}) {
      var ys, F;
      if (j === q)
        return;
      x.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), j = x.converters.RequestInfo(j), Z = x.converters.RequestInit(Z), this[H] = {
        settingsObject: {
          baseUrl: te(),
          get origin() {
            var Y;
            return (Y = this.baseUrl) == null ? void 0 : Y.origin;
          },
          policyContainer: E()
        }
      };
      let O = null, oe = null;
      const we = this[H].settingsObject.baseUrl;
      let Qe = null;
      if (typeof j == "string") {
        let Y;
        try {
          Y = new URL(j, we);
        } catch (X) {
          throw new TypeError("Failed to parse URL from " + j, { cause: X });
        }
        if (Y.username || Y.password)
          throw new TypeError(
            "Request cannot be constructed from a URL that includes credentials: " + j
          );
        O = v({ urlList: [Y] }), oe = "cors";
      } else
        $(j instanceof k), O = j[D], Qe = j[R];
      const Pe = this[H].settingsObject.origin;
      let ke = "client";
      if (((F = (ys = O.window) == null ? void 0 : ys.constructor) == null ? void 0 : F.name) === "EnvironmentSettingsObject" && g(O.window, Pe) && (ke = O.window), Z.window != null)
        throw new TypeError(`'window' option '${ke}' must be null`);
      "window" in Z && (ke = "no-window"), O = v({
        // URL request’s URL.
        // undici implementation note: this is set as the first item in request's urlList in makeRequest
        // method request’s method.
        method: O.method,
        // header list A copy of request’s header list.
        // undici implementation note: headersList is cloned in makeRequest
        headersList: O.headersList,
        // unsafe-request flag Set.
        unsafeRequest: O.unsafeRequest,
        // client This’s relevant settings object.
        client: this[H].settingsObject,
        // window window.
        window: ke,
        // priority request’s priority.
        priority: O.priority,
        // origin request’s origin. The propagation of the origin is only significant for navigation requests
        // being handled by a service worker. In this scenario a request can have an origin that is different
        // from the current client.
        origin: O.origin,
        // referrer request’s referrer.
        referrer: O.referrer,
        // referrer policy request’s referrer policy.
        referrerPolicy: O.referrerPolicy,
        // mode request’s mode.
        mode: O.mode,
        // credentials mode request’s credentials mode.
        credentials: O.credentials,
        // cache mode request’s cache mode.
        cache: O.cache,
        // redirect mode request’s redirect mode.
        redirect: O.redirect,
        // integrity metadata request’s integrity metadata.
        integrity: O.integrity,
        // keepalive request’s keepalive.
        keepalive: O.keepalive,
        // reload-navigation flag request’s reload-navigation flag.
        reloadNavigation: O.reloadNavigation,
        // history-navigation flag request’s history-navigation flag.
        historyNavigation: O.historyNavigation,
        // URL list A clone of request’s URL list.
        urlList: [...O.urlList]
      });
      const Ye = Object.keys(Z).length !== 0;
      if (Ye && (O.mode === "navigate" && (O.mode = "same-origin"), O.reloadNavigation = !1, O.historyNavigation = !1, O.origin = "client", O.referrer = "client", O.referrerPolicy = "", O.url = O.urlList[O.urlList.length - 1], O.urlList = [O.url]), Z.referrer !== void 0) {
        const Y = Z.referrer;
        if (Y === "")
          O.referrer = "no-referrer";
        else {
          let X;
          try {
            X = new URL(Y, we);
          } catch (he) {
            throw new TypeError(`Referrer "${Y}" is not a valid URL.`, { cause: he });
          }
          X.protocol === "about:" && X.hostname === "client" || Pe && !g(X, this[H].settingsObject.baseUrl) ? O.referrer = "client" : O.referrer = X;
        }
      }
      Z.referrerPolicy !== void 0 && (O.referrerPolicy = Z.referrerPolicy);
      let AA;
      if (Z.mode !== void 0 ? AA = Z.mode : AA = oe, AA === "navigate")
        throw x.errors.exception({
          header: "Request constructor",
          message: "invalid request mode navigate."
        });
      if (AA != null && (O.mode = AA), Z.credentials !== void 0 && (O.credentials = Z.credentials), Z.cache !== void 0 && (O.cache = Z.cache), O.cache === "only-if-cached" && O.mode !== "same-origin")
        throw new TypeError(
          "'only-if-cached' can be set only with 'same-origin' mode"
        );
      if (Z.redirect !== void 0 && (O.redirect = Z.redirect), Z.integrity != null && (O.integrity = String(Z.integrity)), Z.keepalive !== void 0 && (O.keepalive = !!Z.keepalive), Z.method !== void 0) {
        let Y = Z.method;
        if (!a(Y))
          throw new TypeError(`'${Y}' is not a valid HTTP method.`);
        if (u.has(Y.toUpperCase()))
          throw new TypeError(`'${Y}' HTTP method is unsupported.`);
        Y = h[Y] ?? c(Y), O.method = Y;
      }
      Z.signal !== void 0 && (Qe = Z.signal), this[D] = O;
      const de = new AbortController();
      if (this[R] = de.signal, this[R][H] = this[H], Qe != null) {
        if (!Qe || typeof Qe.aborted != "boolean" || typeof Qe.addEventListener != "function")
          throw new TypeError(
            "Failed to construct 'Request': member signal is not of type AbortSignal."
          );
        if (Qe.aborted)
          de.abort(Qe.reason);
        else {
          this[N] = de;
          const Y = new WeakRef(de), X = function() {
            const he = Y.deref();
            he !== void 0 && he.abort(this.reason);
          };
          try {
            (typeof se == "function" && se(Qe) === b || K(Qe, "abort").length >= b) && ie(100, Qe);
          } catch {
          }
          o.addAbortListener(Qe, X), S.register(de, { signal: Qe, abort: X });
        }
      }
      if (this[m] = new r(q), this[m][Ee] = O.headersList, this[m][G] = "request", this[m][H] = this[H], AA === "no-cors") {
        if (!B.has(O.method))
          throw new TypeError(
            `'${O.method} is unsupported in no-cors mode.`
          );
        this[m][G] = "request-no-cors";
      }
      if (Ye) {
        const Y = this[m][Ee], X = Z.headers !== void 0 ? Z.headers : new n(Y);
        if (Y.clear(), X instanceof n) {
          for (const [he, pe] of X)
            Y.append(he, pe);
          Y.cookies = X.cookies;
        } else
          s(this[m], X);
      }
      const Ce = j instanceof k ? j[D].body : null;
      if ((Z.body != null || Ce != null) && (O.method === "GET" || O.method === "HEAD"))
        throw new TypeError("Request with GET/HEAD method cannot have body.");
      let me = null;
      if (Z.body != null) {
        const [Y, X] = t(
          Z.body,
          O.keepalive
        );
        me = Y, X && !this[m][Ee].contains("content-type") && this[m].append("content-type", X);
      }
      const BA = me ?? Ce;
      if (BA != null && BA.source == null) {
        if (me != null && Z.duplex == null)
          throw new TypeError("RequestInit: duplex option is required when sending a body.");
        if (O.mode !== "same-origin" && O.mode !== "cors")
          throw new TypeError(
            'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
          );
        O.useCORSPreflightFlag = !0;
      }
      let _r = BA;
      if (me == null && Ce != null) {
        if (o.isDisturbed(Ce.stream) || Ce.stream.locked)
          throw new TypeError(
            "Cannot construct a Request with a Request object that has already been used."
          );
        V || (V = Yr.TransformStream);
        const Y = new V();
        Ce.stream.pipeThrough(Y), _r = {
          source: Ce.source,
          length: Ce.length,
          stream: Y.readable
        };
      }
      this[D].body = _r;
    }
    // Returns request’s HTTP method, which is "GET" by default.
    get method() {
      return x.brandCheck(this, k), this[D].method;
    }
    // Returns the URL of request as a string.
    get url() {
      return x.brandCheck(this, k), ee(this[D].url);
    }
    // Returns a Headers object consisting of the headers associated with request.
    // Note that headers added in the network layer by the user agent will not
    // be accounted for in this object, e.g., the "Host" header.
    get headers() {
      return x.brandCheck(this, k), this[m];
    }
    // Returns the kind of resource requested by request, e.g., "document"
    // or "script".
    get destination() {
      return x.brandCheck(this, k), this[D].destination;
    }
    // Returns the referrer of request. Its value can be a same-origin URL if
    // explicitly set in init, the empty string to indicate no referrer, and
    // "about:client" when defaulting to the global’s default. This is used
    // during fetching to determine the value of the `Referer` header of the
    // request being made.
    get referrer() {
      return x.brandCheck(this, k), this[D].referrer === "no-referrer" ? "" : this[D].referrer === "client" ? "about:client" : this[D].referrer.toString();
    }
    // Returns the referrer policy associated with request.
    // This is used during fetching to compute the value of the request’s
    // referrer.
    get referrerPolicy() {
      return x.brandCheck(this, k), this[D].referrerPolicy;
    }
    // Returns the mode associated with request, which is a string indicating
    // whether the request will use CORS, or will be restricted to same-origin
    // URLs.
    get mode() {
      return x.brandCheck(this, k), this[D].mode;
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
      return x.brandCheck(this, k), this[D].cache;
    }
    // Returns the redirect mode associated with request,
    // which is a string indicating how redirects for the
    // request will be handled during fetching. A request
    // will follow redirects by default.
    get redirect() {
      return x.brandCheck(this, k), this[D].redirect;
    }
    // Returns request’s subresource integrity metadata, which is a
    // cryptographic hash of the resource being fetched. Its value
    // consists of multiple hashes separated by whitespace. [SRI]
    get integrity() {
      return x.brandCheck(this, k), this[D].integrity;
    }
    // Returns a boolean indicating whether or not request can outlive the
    // global in which it was created.
    get keepalive() {
      return x.brandCheck(this, k), this[D].keepalive;
    }
    // Returns a boolean indicating whether or not request is for a reload
    // navigation.
    get isReloadNavigation() {
      return x.brandCheck(this, k), this[D].reloadNavigation;
    }
    // Returns a boolean indicating whether or not request is for a history
    // navigation (a.k.a. back-foward navigation).
    get isHistoryNavigation() {
      return x.brandCheck(this, k), this[D].historyNavigation;
    }
    // Returns the signal associated with request, which is an AbortSignal
    // object indicating whether or not request has been aborted, and its
    // abort event handler.
    get signal() {
      return x.brandCheck(this, k), this[R];
    }
    get body() {
      return x.brandCheck(this, k), this[D].body ? this[D].body.stream : null;
    }
    get bodyUsed() {
      return x.brandCheck(this, k), !!this[D].body && o.isDisturbed(this[D].body.stream);
    }
    get duplex() {
      return x.brandCheck(this, k), "half";
    }
    // Returns a clone of request.
    clone() {
      var oe;
      if (x.brandCheck(this, k), this.bodyUsed || (oe = this.body) != null && oe.locked)
        throw new TypeError("unusable");
      const j = M(this[D]), Z = new k(q);
      Z[D] = j, Z[H] = this[H], Z[m] = new r(q), Z[m][Ee] = j.headersList, Z[m][G] = this[m][G], Z[m][H] = this[m][H];
      const O = new AbortController();
      return this.signal.aborted ? O.abort(this.signal.reason) : o.addAbortListener(
        this.signal,
        () => {
          O.abort(this.signal.reason);
        }
      ), Z[R] = O.signal, Z;
    }
  }
  e(k);
  function v(P) {
    const j = {
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
      ...P,
      headersList: P.headersList ? new n(P.headersList) : new n()
    };
    return j.url = j.urlList[0], j;
  }
  function M(P) {
    const j = v({ ...P, body: null });
    return P.body != null && (j.body = A(P.body)), j;
  }
  return Object.defineProperties(k.prototype, {
    method: p,
    url: p,
    headers: p,
    redirect: p,
    clone: p,
    signal: p,
    duplex: p,
    destination: p,
    body: p,
    bodyUsed: p,
    isHistoryNavigation: p,
    isReloadNavigation: p,
    keepalive: p,
    integrity: p,
    cache: p,
    credentials: p,
    attribute: p,
    referrerPolicy: p,
    referrer: p,
    mode: p,
    [Symbol.toStringTag]: {
      value: "Request",
      configurable: !0
    }
  }), x.converters.Request = x.interfaceConverter(
    k
  ), x.converters.RequestInfo = function(P) {
    return typeof P == "string" ? x.converters.USVString(P) : P instanceof k ? x.converters.Request(P) : x.converters.USVString(P);
  }, x.converters.AbortSignal = x.interfaceConverter(
    AbortSignal
  ), x.converters.RequestInit = x.dictionaryConverter([
    {
      key: "method",
      converter: x.converters.ByteString
    },
    {
      key: "headers",
      converter: x.converters.HeadersInit
    },
    {
      key: "body",
      converter: x.nullableConverter(
        x.converters.BodyInit
      )
    },
    {
      key: "referrer",
      converter: x.converters.USVString
    },
    {
      key: "referrerPolicy",
      converter: x.converters.DOMString,
      // https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
      allowedValues: Q
    },
    {
      key: "mode",
      converter: x.converters.DOMString,
      // https://fetch.spec.whatwg.org/#concept-request-mode
      allowedValues: f
    },
    {
      key: "credentials",
      converter: x.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcredentials
      allowedValues: C
    },
    {
      key: "cache",
      converter: x.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcache
      allowedValues: d
    },
    {
      key: "redirect",
      converter: x.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestredirect
      allowedValues: I
    },
    {
      key: "integrity",
      converter: x.converters.DOMString
    },
    {
      key: "keepalive",
      converter: x.converters.boolean
    },
    {
      key: "signal",
      converter: x.nullableConverter(
        (P) => x.converters.AbortSignal(
          P,
          { strict: !1 }
        )
      )
    },
    {
      key: "window",
      converter: x.converters.any
    },
    {
      key: "duplex",
      converter: x.converters.DOMString,
      allowedValues: w
    }
  ]), Kc = { Request: k, makeRequest: v }, Kc;
}
var eg, $E;
function Tl() {
  if ($E)
    return eg;
  $E = 1;
  const {
    Response: t,
    makeNetworkError: e,
    makeAppropriateNetworkError: A,
    filterResponse: r,
    makeResponse: s
  } = Ul(), { Headers: n } = dn(), { Request: i, makeRequest: o } = ba(), a = Ed, {
    bytesMatch: g,
    makePolicyContainer: c,
    clonePolicyContainer: E,
    requestBadPort: h,
    TAOCheck: u,
    appendRequestOriginHeader: B,
    responseLocationURL: Q,
    requestCurrentURL: I,
    setRequestReferrerPolicyOnRedirect: f,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: C,
    createOpaqueTimingInfo: d,
    appendFetchMetadata: w,
    corsCheck: p,
    crossOriginResourcePolicyCheck: m,
    determineRequestsReferrer: R,
    coarsenedSharedCurrentTime: D,
    createDeferredPromise: G,
    isBlobLike: H,
    sameOrigin: x,
    isCancelled: te,
    isAborted: ee,
    isErrorLike: Ee,
    fullyReadBody: q,
    readableStreamClose: $,
    isomorphicEncode: se,
    urlIsLocal: ie,
    urlIsHttpHttpsScheme: K,
    urlHasHttpsScheme: b
  } = Rt(), { kState: V, kHeaders: N, kGuard: S, kRealm: k } = Or(), v = Ze, { safelyExtractBody: M } = da(), {
    redirectStatusSet: P,
    nullBodyStatus: j,
    safeMethodsSet: Z,
    requestBodyHeader: O,
    subresourceSet: oe,
    DOMException: we
  } = ms(), { kHeadersList: Qe } = ve, Pe = Ji, { Readable: ke, pipeline: Ye } = _t, { addAbortListener: AA, isErrored: de, isReadable: Ce, nodeMajor: me, nodeMinor: BA } = fe, { dataURLProcessor: _r, serializeAMimeType: ys } = Ht(), { TransformStream: F } = Yr, { getGlobalDispatcher: Y } = Wi, { webidl: X } = VA(), { STATUS_CODES: he } = Qn, pe = ["GET", "HEAD"];
  let Me, Se = globalThis.ReadableStream;
  class mA extends Pe {
    constructor(Ae) {
      super(), this.dispatcher = Ae, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(Ae) {
      var _;
      this.state === "ongoing" && (this.state = "terminated", (_ = this.connection) == null || _.destroy(Ae), this.emit("terminated", Ae));
    }
    // https://fetch.spec.whatwg.org/#fetch-controller-abort
    abort(Ae) {
      var _;
      this.state === "ongoing" && (this.state = "aborted", Ae || (Ae = new we("The operation was aborted.", "AbortError")), this.serializedAbortReason = Ae, (_ = this.connection) == null || _.destroy(Ae), this.emit("terminated", Ae));
    }
  }
  function Dt(U, Ae = {}) {
    var Ie;
    X.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
    const _ = G();
    let W;
    try {
      W = new i(U, Ae);
    } catch (ye) {
      return _.reject(ye), _.promise;
    }
    const ne = W[V];
    if (W.signal.aborted)
      return Ga(_, ne, null, W.signal.reason), _.promise;
    const z = ne.client.globalObject;
    ((Ie = z == null ? void 0 : z.constructor) == null ? void 0 : Ie.name) === "ServiceWorkerGlobalScope" && (ne.serviceWorkers = "none");
    let Be = null;
    const Oe = null;
    let WA = !1, Ve = null;
    return AA(
      W.signal,
      () => {
        WA = !0, v(Ve != null), Ve.abort(W.signal.reason), Ga(_, ne, Be, W.signal.reason);
      }
    ), Ve = jl({
      request: ne,
      processResponseEndOfBody: (ye) => Pt(ye, "fetch"),
      processResponse: (ye) => {
        if (WA)
          return Promise.resolve();
        if (ye.aborted)
          return Ga(_, ne, Be, Ve.serializedAbortReason), Promise.resolve();
        if (ye.type === "error")
          return _.reject(
            Object.assign(new TypeError("fetch failed"), { cause: ye.error })
          ), Promise.resolve();
        Be = new t(), Be[V] = ye, Be[k] = Oe, Be[N][Qe] = ye.headersList, Be[N][S] = "immutable", Be[N][k] = Oe, _.resolve(Be);
      },
      dispatcher: Ae.dispatcher ?? Y()
      // undici
    }), _.promise;
  }
  function Pt(U, Ae = "other") {
    var z;
    if (U.type === "error" && U.aborted || !((z = U.urlList) != null && z.length))
      return;
    const _ = U.urlList[0];
    let W = U.timingInfo, ne = U.cacheState;
    K(_) && W !== null && (U.timingAllowPassed || (W = d({
      startTime: W.startTime
    }), ne = ""), W.endTime = D(), U.timingInfo = W, lr(
      W,
      _,
      Ae,
      globalThis,
      ne
    ));
  }
  function lr(U, Ae, _, W, ne) {
    (me > 18 || me === 18 && BA >= 2) && performance.markResourceTiming(U, Ae.href, _, W, ne);
  }
  function Ga(U, Ae, _, W) {
    var z, Be;
    if (W || (W = new we("The operation was aborted.", "AbortError")), U.reject(W), Ae.body != null && Ce((z = Ae.body) == null ? void 0 : z.stream) && Ae.body.stream.cancel(W).catch((Oe) => {
      if (Oe.code !== "ERR_INVALID_STATE")
        throw Oe;
    }), _ == null)
      return;
    const ne = _[V];
    ne.body != null && Ce((Be = ne.body) == null ? void 0 : Be.stream) && ne.body.stream.cancel(W).catch((Oe) => {
      if (Oe.code !== "ERR_INVALID_STATE")
        throw Oe;
    });
  }
  function jl({
    request: U,
    processRequestBodyChunkLength: Ae,
    processRequestEndOfBody: _,
    processResponse: W,
    processResponseEndOfBody: ne,
    processResponseConsumeBody: z,
    useParallelQueue: Be = !1,
    dispatcher: Oe
    // undici
  }) {
    var ye, qA, $e, bt;
    let WA = null, Ve = !1;
    U.client != null && (WA = U.client.globalObject, Ve = U.client.crossOriginIsolatedCapability);
    const hr = D(Ve), Zi = d({
      startTime: hr
    }), Ie = {
      controller: new mA(Oe),
      request: U,
      timingInfo: Zi,
      processRequestBodyChunkLength: Ae,
      processRequestEndOfBody: _,
      processResponse: W,
      processResponseConsumeBody: z,
      processResponseEndOfBody: ne,
      taskDestination: WA,
      crossOriginIsolatedCapability: Ve
    };
    return v(!U.body || U.body.stream), U.window === "client" && (U.window = (($e = (qA = (ye = U.client) == null ? void 0 : ye.globalObject) == null ? void 0 : qA.constructor) == null ? void 0 : $e.name) === "Window" ? U.client : "no-window"), U.origin === "client" && (U.origin = (bt = U.client) == null ? void 0 : bt.origin), U.policyContainer === "client" && (U.client != null ? U.policyContainer = E(
      U.client.policyContainer
    ) : U.policyContainer = c()), U.headersList.contains("accept") || U.headersList.append("accept", "*/*"), U.headersList.contains("accept-language") || U.headersList.append("accept-language", "*"), U.priority, oe.has(U.destination), zl(Ie).catch((xe) => {
      Ie.controller.terminate(xe);
    }), Ie.controller;
  }
  async function zl(U, Ae = !1) {
    const _ = U.request;
    let W = null;
    if (_.localURLsOnly && !ie(I(_)) && (W = e("local URLs only")), C(_), h(_) === "blocked" && (W = e("bad port")), _.referrerPolicy === "" && (_.referrerPolicy = _.policyContainer.referrerPolicy), _.referrer !== "no-referrer" && (_.referrer = R(_)), W === null && (W = await (async () => {
      const z = I(_);
      return (
        // - request’s current URL’s origin is same origin with request’s origin,
        //   and request’s response tainting is "basic"
        x(z, _.url) && _.responseTainting === "basic" || // request’s current URL’s scheme is "data"
        z.protocol === "data:" || // - request’s mode is "navigate" or "websocket"
        _.mode === "navigate" || _.mode === "websocket" ? (_.responseTainting = "basic", await Zl(U)) : _.mode === "same-origin" ? e('request mode cannot be "same-origin"') : _.mode === "no-cors" ? _.redirect !== "follow" ? e(
          'redirect mode cannot be "follow" for "no-cors" request'
        ) : (_.responseTainting = "opaque", await Zl(U)) : K(I(_)) ? (_.responseTainting = "cors", await $l(U)) : e("URL scheme must be a HTTP(S) scheme")
      );
    })()), Ae)
      return W;
    W.status !== 0 && !W.internalResponse && (_.responseTainting, _.responseTainting === "basic" ? W = r(W, "basic") : _.responseTainting === "cors" ? W = r(W, "cors") : _.responseTainting === "opaque" ? W = r(W, "opaque") : v(!1));
    let ne = W.status === 0 ? W : W.internalResponse;
    if (ne.urlList.length === 0 && ne.urlList.push(..._.urlList), _.timingAllowFailed || (W.timingAllowPassed = !0), W.type === "opaque" && ne.status === 206 && ne.rangeRequested && !_.headers.contains("range") && (W = ne = e()), W.status !== 0 && (_.method === "HEAD" || _.method === "CONNECT" || j.includes(ne.status)) && (ne.body = null, U.controller.dump = !0), _.integrity) {
      const z = (Oe) => Ya(U, e(Oe));
      if (_.responseTainting === "opaque" || W.body == null) {
        z(W.error);
        return;
      }
      const Be = (Oe) => {
        if (!g(Oe, _.integrity)) {
          z("integrity mismatch");
          return;
        }
        W.body = M(Oe)[0], Ya(U, W);
      };
      await q(W.body, Be, z);
    } else
      Ya(U, W);
  }
  function Zl(U) {
    if (te(U) && U.request.redirectCount === 0)
      return Promise.resolve(A(U));
    const { request: Ae } = U, { protocol: _ } = I(Ae);
    switch (_) {
      case "about:":
        return Promise.resolve(e("about scheme is not supported"));
      case "blob:": {
        Me || (Me = ps.resolveObjectURL);
        const W = I(Ae);
        if (W.search.length !== 0)
          return Promise.resolve(e("NetworkError when attempting to fetch resource."));
        const ne = Me(W.toString());
        if (Ae.method !== "GET" || !H(ne))
          return Promise.resolve(e("invalid method"));
        const z = M(ne), Be = z[0], Oe = se(`${Be.length}`), WA = z[1] ?? "", Ve = s({
          statusText: "OK",
          headersList: [
            ["content-length", { name: "Content-Length", value: Oe }],
            ["content-type", { name: "Content-Type", value: WA }]
          ]
        });
        return Ve.body = Be, Promise.resolve(Ve);
      }
      case "data:": {
        const W = I(Ae), ne = _r(W);
        if (ne === "failure")
          return Promise.resolve(e("failed to fetch the data URL"));
        const z = ys(ne.mimeType);
        return Promise.resolve(s({
          statusText: "OK",
          headersList: [
            ["content-type", { name: "Content-Type", value: z }]
          ],
          body: M(ne.body)[0]
        }));
      }
      case "file:":
        return Promise.resolve(e("not implemented... yet..."));
      case "http:":
      case "https:":
        return $l(U).catch((W) => e(W));
      default:
        return Promise.resolve(e("unknown scheme"));
    }
  }
  function zI(U, Ae) {
    U.request.done = !0, U.processResponseDone != null && queueMicrotask(() => U.processResponseDone(Ae));
  }
  function Ya(U, Ae) {
    Ae.type === "error" && (Ae.urlList = [U.request.urlList[0]], Ae.timingInfo = d({
      startTime: U.timingInfo.startTime
    }));
    const _ = () => {
      U.request.done = !0, U.processResponseEndOfBody != null && queueMicrotask(() => U.processResponseEndOfBody(Ae));
    };
    if (U.processResponse != null && queueMicrotask(() => U.processResponse(Ae)), Ae.body == null)
      _();
    else {
      const W = (z, Be) => {
        Be.enqueue(z);
      }, ne = new F({
        start() {
        },
        transform: W,
        flush: _
      }, {
        size() {
          return 1;
        }
      }, {
        size() {
          return 1;
        }
      });
      Ae.body = { stream: Ae.body.stream.pipeThrough(ne) };
    }
    if (U.processResponseConsumeBody != null) {
      const W = (z) => U.processResponseConsumeBody(Ae, z), ne = (z) => U.processResponseConsumeBody(Ae, z);
      if (Ae.body == null)
        queueMicrotask(() => W(null));
      else
        return q(Ae.body, W, ne);
      return Promise.resolve();
    }
  }
  async function $l(U) {
    const Ae = U.request;
    let _ = null, W = null;
    const ne = U.timingInfo;
    if (Ae.serviceWorkers, _ === null) {
      if (Ae.redirect === "follow" && (Ae.serviceWorkers = "none"), W = _ = await Xl(U), Ae.responseTainting === "cors" && p(Ae, _) === "failure")
        return e("cors failure");
      u(Ae, _) === "failure" && (Ae.timingAllowFailed = !0);
    }
    return (Ae.responseTainting === "opaque" || _.type === "opaque") && m(
      Ae.origin,
      Ae.client,
      Ae.destination,
      W
    ) === "blocked" ? e("blocked") : (P.has(W.status) && (Ae.redirect !== "manual" && U.controller.connection.destroy(), Ae.redirect === "error" ? _ = e("unexpected redirect") : Ae.redirect === "manual" ? _ = W : Ae.redirect === "follow" ? _ = await ZI(U, _) : v(!1)), _.timingInfo = ne, _);
  }
  function ZI(U, Ae) {
    const _ = U.request, W = Ae.internalResponse ? Ae.internalResponse : Ae;
    let ne;
    try {
      if (ne = Q(
        W,
        I(_).hash
      ), ne == null)
        return Ae;
    } catch (Be) {
      return Promise.resolve(e(Be));
    }
    if (!K(ne))
      return Promise.resolve(e("URL scheme must be a HTTP(S) scheme"));
    if (_.redirectCount === 20)
      return Promise.resolve(e("redirect count exceeded"));
    if (_.redirectCount += 1, _.mode === "cors" && (ne.username || ne.password) && !x(_, ne))
      return Promise.resolve(e('cross origin not allowed for request mode "cors"'));
    if (_.responseTainting === "cors" && (ne.username || ne.password))
      return Promise.resolve(e(
        'URL cannot contain credentials for request mode "cors"'
      ));
    if (W.status !== 303 && _.body != null && _.body.source == null)
      return Promise.resolve(e());
    if ([301, 302].includes(W.status) && _.method === "POST" || W.status === 303 && !pe.includes(_.method)) {
      _.method = "GET", _.body = null;
      for (const Be of O)
        _.headersList.delete(Be);
    }
    x(I(_), ne) || (_.headersList.delete("authorization"), _.headersList.delete("proxy-authorization", !0), _.headersList.delete("cookie"), _.headersList.delete("host")), _.body != null && (v(_.body.source != null), _.body = M(_.body.source)[0]);
    const z = U.timingInfo;
    return z.redirectEndTime = z.postRedirectStartTime = D(U.crossOriginIsolatedCapability), z.redirectStartTime === 0 && (z.redirectStartTime = z.startTime), _.urlList.push(ne), f(_, W), zl(U, !0);
  }
  async function Xl(U, Ae = !1, _ = !1) {
    const W = U.request;
    let ne = null, z = null, Be = null;
    W.window === "no-window" && W.redirect === "error" ? (ne = U, z = W) : (z = o(W), ne = { ...U }, ne.request = z);
    const Oe = W.credentials === "include" || W.credentials === "same-origin" && W.responseTainting === "basic", WA = z.body ? z.body.length : null;
    let Ve = null;
    if (z.body == null && ["POST", "PUT"].includes(z.method) && (Ve = "0"), WA != null && (Ve = se(`${WA}`)), Ve != null && z.headersList.append("content-length", Ve), WA != null && z.keepalive, z.referrer instanceof URL && z.headersList.append("referer", se(z.referrer.href)), B(z), w(z), z.headersList.contains("user-agent") || z.headersList.append("user-agent", typeof esbuildDetection > "u" ? "undici" : "node"), z.cache === "default" && (z.headersList.contains("if-modified-since") || z.headersList.contains("if-none-match") || z.headersList.contains("if-unmodified-since") || z.headersList.contains("if-match") || z.headersList.contains("if-range")) && (z.cache = "no-store"), z.cache === "no-cache" && !z.preventNoCacheCacheControlHeaderModification && !z.headersList.contains("cache-control") && z.headersList.append("cache-control", "max-age=0"), (z.cache === "no-store" || z.cache === "reload") && (z.headersList.contains("pragma") || z.headersList.append("pragma", "no-cache"), z.headersList.contains("cache-control") || z.headersList.append("cache-control", "no-cache")), z.headersList.contains("range") && z.headersList.append("accept-encoding", "identity"), z.headersList.contains("accept-encoding") || (b(I(z)) ? z.headersList.append("accept-encoding", "br, gzip, deflate") : z.headersList.append("accept-encoding", "gzip, deflate")), z.headersList.delete("host"), z.cache = "no-store", z.mode !== "no-store" && z.mode, Be == null) {
      if (z.mode === "only-if-cached")
        return e("only if cached");
      const hr = await $I(
        ne,
        Oe,
        _
      );
      !Z.has(z.method) && hr.status >= 200 && hr.status <= 399, Be == null && (Be = hr);
    }
    if (Be.urlList = [...z.urlList], z.headersList.contains("range") && (Be.rangeRequested = !0), Be.requestIncludesCredentials = Oe, Be.status === 407)
      return W.window === "no-window" ? e() : te(U) ? A(U) : e("proxy authentication required");
    if (
      // response’s status is 421
      Be.status === 421 && // isNewConnectionFetch is false
      !_ && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
      (W.body == null || W.body.source != null)
    ) {
      if (te(U))
        return A(U);
      U.controller.connection.destroy(), Be = await Xl(
        U,
        Ae,
        !0
      );
    }
    return Be;
  }
  async function $I(U, Ae = !1, _ = !1) {
    v(!U.controller.connection || U.controller.connection.destroyed), U.controller.connection = {
      abort: null,
      destroyed: !1,
      destroy(Ie) {
        var ye;
        this.destroyed || (this.destroyed = !0, (ye = this.abort) == null || ye.call(this, Ie ?? new we("The operation was aborted.", "AbortError")));
      }
    };
    const W = U.request;
    let ne = null;
    const z = U.timingInfo;
    W.cache = "no-store", W.mode;
    let Be = null;
    if (W.body == null && U.processRequestEndOfBody)
      queueMicrotask(() => U.processRequestEndOfBody());
    else if (W.body != null) {
      const Ie = async function* ($e) {
        var bt;
        te(U) || (yield $e, (bt = U.processRequestBodyChunkLength) == null || bt.call(U, $e.byteLength));
      }, ye = () => {
        te(U) || U.processRequestEndOfBody && U.processRequestEndOfBody();
      }, qA = ($e) => {
        te(U) || ($e.name === "AbortError" ? U.controller.abort() : U.controller.terminate($e));
      };
      Be = async function* () {
        try {
          for await (const $e of W.body.stream)
            yield* Ie($e);
          ye();
        } catch ($e) {
          qA($e);
        }
      }();
    }
    try {
      const { body: Ie, status: ye, statusText: qA, headersList: $e, socket: bt } = await Zi({ body: Be });
      if (bt)
        ne = s({ status: ye, statusText: qA, headersList: $e, socket: bt });
      else {
        const xe = Ie[Symbol.asyncIterator]();
        U.controller.next = () => xe.next(), ne = s({ status: ye, statusText: qA, headersList: $e });
      }
    } catch (Ie) {
      return Ie.name === "AbortError" ? (U.controller.connection.destroy(), A(U, Ie)) : e(Ie);
    }
    const Oe = () => {
      U.controller.resume();
    }, WA = (Ie) => {
      U.controller.abort(Ie);
    };
    Se || (Se = Yr.ReadableStream);
    const Ve = new Se(
      {
        async start(Ie) {
          U.controller.controller = Ie;
        },
        async pull(Ie) {
          await Oe();
        },
        async cancel(Ie) {
          await WA(Ie);
        }
      },
      {
        highWaterMark: 0,
        size() {
          return 1;
        }
      }
    );
    ne.body = { stream: Ve }, U.controller.on("terminated", hr), U.controller.resume = async () => {
      for (; ; ) {
        let Ie, ye;
        try {
          const { done: qA, value: $e } = await U.controller.next();
          if (ee(U))
            break;
          Ie = qA ? void 0 : $e;
        } catch (qA) {
          U.controller.ended && !z.encodedBodySize ? Ie = void 0 : (Ie = qA, ye = !0);
        }
        if (Ie === void 0) {
          $(U.controller.controller), zI(U, ne);
          return;
        }
        if (z.decodedBodySize += (Ie == null ? void 0 : Ie.byteLength) ?? 0, ye) {
          U.controller.terminate(Ie);
          return;
        }
        if (U.controller.controller.enqueue(new Uint8Array(Ie)), de(Ve)) {
          U.controller.terminate();
          return;
        }
        if (!U.controller.controller.desiredSize)
          return;
      }
    };
    function hr(Ie) {
      ee(U) ? (ne.aborted = !0, Ce(Ve) && U.controller.controller.error(
        U.controller.serializedAbortReason
      )) : Ce(Ve) && U.controller.controller.error(new TypeError("terminated", {
        cause: Ee(Ie) ? Ie : void 0
      })), U.controller.connection.destroy();
    }
    return ne;
    async function Zi({ body: Ie }) {
      const ye = I(W), qA = U.controller.dispatcher;
      return new Promise(($e, bt) => qA.dispatch(
        {
          path: ye.pathname + ye.search,
          origin: ye.origin,
          method: W.method,
          body: U.controller.dispatcher.isMockActive ? W.body && (W.body.source || W.body.stream) : Ie,
          headers: W.headersList.entries,
          maxRedirections: 0,
          upgrade: W.mode === "websocket" ? "websocket" : void 0
        },
        {
          body: null,
          abort: null,
          onConnect(xe) {
            const { connection: tA } = U.controller;
            tA.destroyed ? xe(new we("The operation was aborted.", "AbortError")) : (U.controller.on("terminated", xe), this.abort = tA.abort = xe);
          },
          onHeaders(xe, tA, xa, $i) {
            if (xe < 200)
              return;
            let Er = [], mn = "";
            const wn = new n();
            if (Array.isArray(tA))
              for (let gt = 0; gt < tA.length; gt += 2) {
                const ur = tA[gt + 0].toString("latin1"), Hr = tA[gt + 1].toString("latin1");
                ur.toLowerCase() === "content-encoding" ? Er = Hr.toLowerCase().split(",").map((Ja) => Ja.trim()) : ur.toLowerCase() === "location" && (mn = Hr), wn[Qe].append(ur, Hr);
              }
            else {
              const gt = Object.keys(tA);
              for (const ur of gt) {
                const Hr = tA[ur];
                ur.toLowerCase() === "content-encoding" ? Er = Hr.toLowerCase().split(",").map((Ja) => Ja.trim()).reverse() : ur.toLowerCase() === "location" && (mn = Hr), wn[Qe].append(ur, Hr);
              }
            }
            this.body = new ke({ read: xa });
            const Rs = [], XI = W.redirect === "follow" && mn && P.has(xe);
            if (W.method !== "HEAD" && W.method !== "CONNECT" && !j.includes(xe) && !XI)
              for (const gt of Er)
                if (gt === "x-gzip" || gt === "gzip")
                  Rs.push(a.createGunzip({
                    // Be less strict when decoding compressed responses, since sometimes
                    // servers send slightly invalid responses that are still accepted
                    // by common browsers.
                    // Always using Z_SYNC_FLUSH is what cURL does.
                    flush: a.constants.Z_SYNC_FLUSH,
                    finishFlush: a.constants.Z_SYNC_FLUSH
                  }));
                else if (gt === "deflate")
                  Rs.push(a.createInflate());
                else if (gt === "br")
                  Rs.push(a.createBrotliDecompress());
                else {
                  Rs.length = 0;
                  break;
                }
            return $e({
              status: xe,
              statusText: $i,
              headersList: wn[Qe],
              body: Rs.length ? Ye(this.body, ...Rs, () => {
              }) : this.body.on("error", () => {
              })
            }), !0;
          },
          onData(xe) {
            if (U.controller.dump)
              return;
            const tA = xe;
            return z.encodedBodySize += tA.byteLength, this.body.push(tA);
          },
          onComplete() {
            this.abort && U.controller.off("terminated", this.abort), U.controller.ended = !0, this.body.push(null);
          },
          onError(xe) {
            var tA;
            this.abort && U.controller.off("terminated", this.abort), (tA = this.body) == null || tA.destroy(xe), U.controller.terminate(xe), bt(xe);
          },
          onUpgrade(xe, tA, xa) {
            if (xe !== 101)
              return;
            const $i = new n();
            for (let Er = 0; Er < tA.length; Er += 2) {
              const mn = tA[Er + 0].toString("latin1"), wn = tA[Er + 1].toString("latin1");
              $i[Qe].append(mn, wn);
            }
            return $e({
              status: xe,
              statusText: he[xe],
              headersList: $i[Qe],
              socket: xa
            }), !0;
          }
        }
      ));
    }
  }
  return eg = {
    fetch: Dt,
    Fetch: mA,
    fetching: jl,
    finalizeAndReportTiming: Pt
  }, eg;
}
var Ag, XE;
function vB() {
  return XE || (XE = 1, Ag = {
    kState: Symbol("FileReader state"),
    kResult: Symbol("FileReader result"),
    kError: Symbol("FileReader error"),
    kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
    kEvents: Symbol("FileReader events"),
    kAborted: Symbol("FileReader aborted")
  }), Ag;
}
var tg, KE;
function ER() {
  if (KE)
    return tg;
  KE = 1;
  const { webidl: t } = VA(), e = Symbol("ProgressEvent state");
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
  ]), tg = {
    ProgressEvent: A
  }, tg;
}
var rg, eu;
function uR() {
  if (eu)
    return rg;
  eu = 1;
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
  return rg = {
    getEncoding: t
  }, rg;
}
var sg, Au;
function QR() {
  if (Au)
    return sg;
  Au = 1;
  const {
    kState: t,
    kError: e,
    kResult: A,
    kAborted: r,
    kLastProgressEventFired: s
  } = vB(), { ProgressEvent: n } = ER(), { getEncoding: i } = uR(), { DOMException: o } = ms(), { serializeAMimeType: a, parseMIMEType: g } = Ht(), { types: c } = Ot, { StringDecoder: E } = ud, { btoa: h } = ps, u = {
    enumerable: !0,
    writable: !1,
    configurable: !1
  };
  function B(w, p, m, R) {
    if (w[t] === "loading")
      throw new o("Invalid state", "InvalidStateError");
    w[t] = "loading", w[A] = null, w[e] = null;
    const G = p.stream().getReader(), H = [];
    let x = G.read(), te = !0;
    (async () => {
      for (; !w[r]; )
        try {
          const { done: ee, value: Ee } = await x;
          if (te && !w[r] && queueMicrotask(() => {
            Q("loadstart", w);
          }), te = !1, !ee && c.isUint8Array(Ee))
            H.push(Ee), (w[s] === void 0 || Date.now() - w[s] >= 50) && !w[r] && (w[s] = Date.now(), queueMicrotask(() => {
              Q("progress", w);
            })), x = G.read();
          else if (ee) {
            queueMicrotask(() => {
              w[t] = "done";
              try {
                const q = I(H, m, p.type, R);
                if (w[r])
                  return;
                w[A] = q, Q("load", w);
              } catch (q) {
                w[e] = q, Q("error", w);
              }
              w[t] !== "loading" && Q("loadend", w);
            });
            break;
          }
        } catch (ee) {
          if (w[r])
            return;
          queueMicrotask(() => {
            w[t] = "done", w[e] = ee, Q("error", w), w[t] !== "loading" && Q("loadend", w);
          });
          break;
        }
    })();
  }
  function Q(w, p) {
    const m = new n(w, {
      bubbles: !1,
      cancelable: !1
    });
    p.dispatchEvent(m);
  }
  function I(w, p, m, R) {
    switch (p) {
      case "DataURL": {
        let D = "data:";
        const G = g(m || "application/octet-stream");
        G !== "failure" && (D += a(G)), D += ";base64,";
        const H = new E("latin1");
        for (const x of w)
          D += h(H.write(x));
        return D += h(H.end()), D;
      }
      case "Text": {
        let D = "failure";
        if (R && (D = i(R)), D === "failure" && m) {
          const G = g(m);
          G !== "failure" && (D = i(G.parameters.get("charset")));
        }
        return D === "failure" && (D = "UTF-8"), f(w, D);
      }
      case "ArrayBuffer":
        return d(w).buffer;
      case "BinaryString": {
        let D = "";
        const G = new E("latin1");
        for (const H of w)
          D += G.write(H);
        return D += G.end(), D;
      }
    }
  }
  function f(w, p) {
    const m = d(w), R = C(m);
    let D = 0;
    R !== null && (p = R, D = R === "UTF-8" ? 3 : 2);
    const G = m.slice(D);
    return new TextDecoder(p).decode(G);
  }
  function C(w) {
    const [p, m, R] = w;
    return p === 239 && m === 187 && R === 191 ? "UTF-8" : p === 254 && m === 255 ? "UTF-16BE" : p === 255 && m === 254 ? "UTF-16LE" : null;
  }
  function d(w) {
    const p = w.reduce((R, D) => R + D.byteLength, 0);
    let m = 0;
    return w.reduce((R, D) => (R.set(D, m), m += D.byteLength, R), new Uint8Array(p));
  }
  return sg = {
    staticPropertyDescriptors: u,
    readOperation: B,
    fireAProgressEvent: Q
  }, sg;
}
var ng, tu;
function CR() {
  if (tu)
    return ng;
  tu = 1;
  const {
    staticPropertyDescriptors: t,
    readOperation: e,
    fireAProgressEvent: A
  } = QR(), {
    kState: r,
    kError: s,
    kResult: n,
    kEvents: i,
    kAborted: o
  } = vB(), { webidl: a } = VA(), { kEnumerableProperty: g } = fe;
  class c extends EventTarget {
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
    readAsArrayBuffer(h) {
      a.brandCheck(this, c), a.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), h = a.converters.Blob(h, { strict: !1 }), e(this, h, "ArrayBuffer");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#readAsBinaryString
     * @param {import('buffer').Blob} blob
     */
    readAsBinaryString(h) {
      a.brandCheck(this, c), a.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), h = a.converters.Blob(h, { strict: !1 }), e(this, h, "BinaryString");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#readAsDataText
     * @param {import('buffer').Blob} blob
     * @param {string?} encoding
     */
    readAsText(h, u = void 0) {
      a.brandCheck(this, c), a.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), h = a.converters.Blob(h, { strict: !1 }), u !== void 0 && (u = a.converters.DOMString(u)), e(this, h, "Text", u);
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dfn-readAsDataURL
     * @param {import('buffer').Blob} blob
     */
    readAsDataURL(h) {
      a.brandCheck(this, c), a.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), h = a.converters.Blob(h, { strict: !1 }), e(this, h, "DataURL");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dfn-abort
     */
    abort() {
      if (this[r] === "empty" || this[r] === "done") {
        this[n] = null;
        return;
      }
      this[r] === "loading" && (this[r] = "done", this[n] = null), this[o] = !0, A("abort", this), this[r] !== "loading" && A("loadend", this);
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dom-filereader-readystate
     */
    get readyState() {
      switch (a.brandCheck(this, c), this[r]) {
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
      return a.brandCheck(this, c), this[n];
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dom-filereader-error
     */
    get error() {
      return a.brandCheck(this, c), this[s];
    }
    get onloadend() {
      return a.brandCheck(this, c), this[i].loadend;
    }
    set onloadend(h) {
      a.brandCheck(this, c), this[i].loadend && this.removeEventListener("loadend", this[i].loadend), typeof h == "function" ? (this[i].loadend = h, this.addEventListener("loadend", h)) : this[i].loadend = null;
    }
    get onerror() {
      return a.brandCheck(this, c), this[i].error;
    }
    set onerror(h) {
      a.brandCheck(this, c), this[i].error && this.removeEventListener("error", this[i].error), typeof h == "function" ? (this[i].error = h, this.addEventListener("error", h)) : this[i].error = null;
    }
    get onloadstart() {
      return a.brandCheck(this, c), this[i].loadstart;
    }
    set onloadstart(h) {
      a.brandCheck(this, c), this[i].loadstart && this.removeEventListener("loadstart", this[i].loadstart), typeof h == "function" ? (this[i].loadstart = h, this.addEventListener("loadstart", h)) : this[i].loadstart = null;
    }
    get onprogress() {
      return a.brandCheck(this, c), this[i].progress;
    }
    set onprogress(h) {
      a.brandCheck(this, c), this[i].progress && this.removeEventListener("progress", this[i].progress), typeof h == "function" ? (this[i].progress = h, this.addEventListener("progress", h)) : this[i].progress = null;
    }
    get onload() {
      return a.brandCheck(this, c), this[i].load;
    }
    set onload(h) {
      a.brandCheck(this, c), this[i].load && this.removeEventListener("load", this[i].load), typeof h == "function" ? (this[i].load = h, this.addEventListener("load", h)) : this[i].load = null;
    }
    get onabort() {
      return a.brandCheck(this, c), this[i].abort;
    }
    set onabort(h) {
      a.brandCheck(this, c), this[i].abort && this.removeEventListener("abort", this[i].abort), typeof h == "function" ? (this[i].abort = h, this.addEventListener("abort", h)) : this[i].abort = null;
    }
  }
  return c.EMPTY = c.prototype.EMPTY = 0, c.LOADING = c.prototype.LOADING = 1, c.DONE = c.prototype.DONE = 2, Object.defineProperties(c.prototype, {
    EMPTY: t,
    LOADING: t,
    DONE: t,
    readAsArrayBuffer: g,
    readAsBinaryString: g,
    readAsText: g,
    readAsDataURL: g,
    abort: g,
    readyState: g,
    result: g,
    error: g,
    onloadstart: g,
    onprogress: g,
    onload: g,
    onabort: g,
    onerror: g,
    onloadend: g,
    [Symbol.toStringTag]: {
      value: "FileReader",
      writable: !1,
      enumerable: !1,
      configurable: !0
    }
  }), Object.defineProperties(c, {
    EMPTY: t,
    LOADING: t,
    DONE: t
  }), ng = {
    FileReader: c
  }, ng;
}
var ig, ru;
function Ll() {
  return ru || (ru = 1, ig = {
    kConstruct: ve.kConstruct
  }), ig;
}
var og, su;
function BR() {
  if (su)
    return og;
  su = 1;
  const t = Ze, { URLSerializer: e } = Ht(), { isValidHeaderName: A } = Rt();
  function r(n, i, o = !1) {
    const a = e(n, o), g = e(i, o);
    return a === g;
  }
  function s(n) {
    t(n !== null);
    const i = [];
    for (let o of n.split(",")) {
      if (o = o.trim(), o.length) {
        if (!A(o))
          continue;
      } else
        continue;
      i.push(o);
    }
    return i;
  }
  return og = {
    urlEquals: r,
    fieldValues: s
  }, og;
}
var ag, nu;
function IR() {
  var m, R, Go, G, Ms, x, MB;
  if (nu)
    return ag;
  nu = 1;
  const { kConstruct: t } = Ll(), { urlEquals: e, fieldValues: A } = BR(), { kEnumerableProperty: r, isDisturbed: s } = fe, { kHeadersList: n } = ve, { webidl: i } = VA(), { Response: o, cloneResponse: a } = Ul(), { Request: g } = ba(), { kState: c, kHeaders: E, kGuard: h, kRealm: u } = Or(), { fetching: B } = Tl(), { urlIsHttpHttpsScheme: Q, createDeferredPromise: I, readAllBytes: f } = Rt(), C = Ze, { getGlobalDispatcher: d } = Wi, ee = class ee {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#batch-cache-operations-algorithm
       * @param {CacheBatchOperation[]} operations
       * @returns {requestResponseList}
       */
      T(this, R);
      /**
       * @see https://w3c.github.io/ServiceWorker/#query-cache
       * @param {any} requestQuery
       * @param {import('../../types/cache').CacheQueryOptions} options
       * @param {requestResponseList} targetStorage
       * @returns {requestResponseList}
       */
      T(this, G);
      /**
       * @see https://w3c.github.io/ServiceWorker/#request-matches-cached-item-algorithm
       * @param {any} requestQuery
       * @param {any} request
       * @param {any | null} response
       * @param {import('../../types/cache').CacheQueryOptions | undefined} options
       * @returns {boolean}
       */
      T(this, x);
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-request-response-list
       * @type {requestResponseList}
       */
      T(this, m, void 0);
      arguments[0] !== t && i.illegalConstructor(), y(this, m, arguments[1]);
    }
    async match(q, $ = {}) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), q = i.converters.RequestInfo(q), $ = i.converters.CacheQueryOptions($);
      const se = await this.matchAll(q, $);
      if (se.length !== 0)
        return se[0];
    }
    async matchAll(q = void 0, $ = {}) {
      var b;
      i.brandCheck(this, ee), q !== void 0 && (q = i.converters.RequestInfo(q)), $ = i.converters.CacheQueryOptions($);
      let se = null;
      if (q !== void 0)
        if (q instanceof g) {
          if (se = q[c], se.method !== "GET" && !$.ignoreMethod)
            return [];
        } else
          typeof q == "string" && (se = new g(q)[c]);
      const ie = [];
      if (q === void 0)
        for (const V of l(this, m))
          ie.push(V[1]);
      else {
        const V = J(this, G, Ms).call(this, se, $);
        for (const N of V)
          ie.push(N[1]);
      }
      const K = [];
      for (const V of ie) {
        const N = new o(((b = V.body) == null ? void 0 : b.source) ?? null), S = N[c].body;
        N[c] = V, N[c].body = S, N[E][n] = V.headersList, N[E][h] = "immutable", K.push(N);
      }
      return Object.freeze(K);
    }
    async add(q) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 1, { header: "Cache.add" }), q = i.converters.RequestInfo(q);
      const $ = [q];
      return await this.addAll($);
    }
    async addAll(q) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), q = i.converters["sequence<RequestInfo>"](q);
      const $ = [], se = [];
      for (const v of q) {
        if (typeof v == "string")
          continue;
        const M = v[c];
        if (!Q(M.url) || M.method !== "GET")
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme when method is not GET."
          });
      }
      const ie = [];
      for (const v of q) {
        const M = new g(v)[c];
        if (!Q(M.url))
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme."
          });
        M.initiator = "fetch", M.destination = "subresource", se.push(M);
        const P = I();
        ie.push(B({
          request: M,
          dispatcher: d(),
          processResponse(j) {
            if (j.type === "error" || j.status === 206 || j.status < 200 || j.status > 299)
              P.reject(i.errors.exception({
                header: "Cache.addAll",
                message: "Received an invalid status code or the request failed."
              }));
            else if (j.headersList.contains("vary")) {
              const Z = A(j.headersList.get("vary"));
              for (const O of Z)
                if (O === "*") {
                  P.reject(i.errors.exception({
                    header: "Cache.addAll",
                    message: "invalid vary field value"
                  }));
                  for (const oe of ie)
                    oe.abort();
                  return;
                }
            }
          },
          processResponseEndOfBody(j) {
            if (j.aborted) {
              P.reject(new DOMException("aborted", "AbortError"));
              return;
            }
            P.resolve(j);
          }
        })), $.push(P.promise);
      }
      const b = await Promise.all($), V = [];
      let N = 0;
      for (const v of b) {
        const M = {
          type: "put",
          // 7.3.2
          request: se[N],
          // 7.3.3
          response: v
          // 7.3.4
        };
        V.push(M), N++;
      }
      const S = I();
      let k = null;
      try {
        J(this, R, Go).call(this, V);
      } catch (v) {
        k = v;
      }
      return queueMicrotask(() => {
        k === null ? S.resolve(void 0) : S.reject(k);
      }), S.promise;
    }
    async put(q, $) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), q = i.converters.RequestInfo(q), $ = i.converters.Response($);
      let se = null;
      if (q instanceof g ? se = q[c] : se = new g(q)[c], !Q(se.url) || se.method !== "GET")
        throw i.errors.exception({
          header: "Cache.put",
          message: "Expected an http/s scheme when method is not GET"
        });
      const ie = $[c];
      if (ie.status === 206)
        throw i.errors.exception({
          header: "Cache.put",
          message: "Got 206 status"
        });
      if (ie.headersList.contains("vary")) {
        const M = A(ie.headersList.get("vary"));
        for (const P of M)
          if (P === "*")
            throw i.errors.exception({
              header: "Cache.put",
              message: "Got * vary field value"
            });
      }
      if (ie.body && (s(ie.body.stream) || ie.body.stream.locked))
        throw i.errors.exception({
          header: "Cache.put",
          message: "Response body is locked or disturbed"
        });
      const K = a(ie), b = I();
      if (ie.body != null) {
        const P = ie.body.stream.getReader();
        f(P).then(b.resolve, b.reject);
      } else
        b.resolve(void 0);
      const V = [], N = {
        type: "put",
        // 14.
        request: se,
        // 15.
        response: K
        // 16.
      };
      V.push(N);
      const S = await b.promise;
      K.body != null && (K.body.source = S);
      const k = I();
      let v = null;
      try {
        J(this, R, Go).call(this, V);
      } catch (M) {
        v = M;
      }
      return queueMicrotask(() => {
        v === null ? k.resolve() : k.reject(v);
      }), k.promise;
    }
    async delete(q, $ = {}) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), q = i.converters.RequestInfo(q), $ = i.converters.CacheQueryOptions($);
      let se = null;
      if (q instanceof g) {
        if (se = q[c], se.method !== "GET" && !$.ignoreMethod)
          return !1;
      } else
        C(typeof q == "string"), se = new g(q)[c];
      const ie = [], K = {
        type: "delete",
        request: se,
        options: $
      };
      ie.push(K);
      const b = I();
      let V = null, N;
      try {
        N = J(this, R, Go).call(this, ie);
      } catch (S) {
        V = S;
      }
      return queueMicrotask(() => {
        V === null ? b.resolve(!!(N != null && N.length)) : b.reject(V);
      }), b.promise;
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#dom-cache-keys
     * @param {any} request
     * @param {import('../../types/cache').CacheQueryOptions} options
     * @returns {readonly Request[]}
     */
    async keys(q = void 0, $ = {}) {
      i.brandCheck(this, ee), q !== void 0 && (q = i.converters.RequestInfo(q)), $ = i.converters.CacheQueryOptions($);
      let se = null;
      if (q !== void 0)
        if (q instanceof g) {
          if (se = q[c], se.method !== "GET" && !$.ignoreMethod)
            return [];
        } else
          typeof q == "string" && (se = new g(q)[c]);
      const ie = I(), K = [];
      if (q === void 0)
        for (const b of l(this, m))
          K.push(b[0]);
      else {
        const b = J(this, G, Ms).call(this, se, $);
        for (const V of b)
          K.push(V[0]);
      }
      return queueMicrotask(() => {
        const b = [];
        for (const V of K) {
          const N = new g("https://a");
          N[c] = V, N[E][n] = V.headersList, N[E][h] = "immutable", N[u] = V.client, b.push(N);
        }
        ie.resolve(Object.freeze(b));
      }), ie.promise;
    }
  };
  m = new WeakMap(), R = new WeakSet(), Go = function(q) {
    const $ = l(this, m), se = [...$], ie = [], K = [];
    try {
      for (const b of q) {
        if (b.type !== "delete" && b.type !== "put")
          throw i.errors.exception({
            header: "Cache.#batchCacheOperations",
            message: 'operation type does not match "delete" or "put"'
          });
        if (b.type === "delete" && b.response != null)
          throw i.errors.exception({
            header: "Cache.#batchCacheOperations",
            message: "delete operation should not have an associated response"
          });
        if (J(this, G, Ms).call(this, b.request, b.options, ie).length)
          throw new DOMException("???", "InvalidStateError");
        let V;
        if (b.type === "delete") {
          if (V = J(this, G, Ms).call(this, b.request, b.options), V.length === 0)
            return [];
          for (const N of V) {
            const S = $.indexOf(N);
            C(S !== -1), $.splice(S, 1);
          }
        } else if (b.type === "put") {
          if (b.response == null)
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "put operation should have an associated response"
            });
          const N = b.request;
          if (!Q(N.url))
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "expected http or https scheme"
            });
          if (N.method !== "GET")
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "not get method"
            });
          if (b.options != null)
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "options must not be defined"
            });
          V = J(this, G, Ms).call(this, b.request);
          for (const S of V) {
            const k = $.indexOf(S);
            C(k !== -1), $.splice(k, 1);
          }
          $.push([b.request, b.response]), ie.push([b.request, b.response]);
        }
        K.push([b.request, b.response]);
      }
      return K;
    } catch (b) {
      throw l(this, m).length = 0, y(this, m, se), b;
    }
  }, G = new WeakSet(), Ms = function(q, $, se) {
    const ie = [], K = se ?? l(this, m);
    for (const b of K) {
      const [V, N] = b;
      J(this, x, MB).call(this, q, V, N, $) && ie.push(b);
    }
    return ie;
  }, x = new WeakSet(), MB = function(q, $, se = null, ie) {
    const K = new URL(q.url), b = new URL($.url);
    if (ie != null && ie.ignoreSearch && (b.search = "", K.search = ""), !e(K, b, !0))
      return !1;
    if (se == null || ie != null && ie.ignoreVary || !se.headersList.contains("vary"))
      return !0;
    const V = A(se.headersList.get("vary"));
    for (const N of V) {
      if (N === "*")
        return !1;
      const S = $.headersList.get(N), k = q.headersList.get(N);
      if (S !== k)
        return !1;
    }
    return !0;
  };
  let w = ee;
  Object.defineProperties(w.prototype, {
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
  ]), i.converters.Response = i.interfaceConverter(o), i.converters["sequence<RequestInfo>"] = i.sequenceConverter(
    i.converters.RequestInfo
  ), ag = {
    Cache: w
  }, ag;
}
var cg, iu;
function dR() {
  var n;
  if (iu)
    return cg;
  iu = 1;
  const { kConstruct: t } = Ll(), { Cache: e } = IR(), { webidl: A } = VA(), { kEnumerableProperty: r } = fe, i = class i {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-name-to-cache-map
       * @type {Map<string, import('./cache').requestResponseList}
       */
      T(this, n, /* @__PURE__ */ new Map());
      arguments[0] !== t && A.illegalConstructor();
    }
    async match(a, g = {}) {
      if (A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), a = A.converters.RequestInfo(a), g = A.converters.MultiCacheQueryOptions(g), g.cacheName != null) {
        if (l(this, n).has(g.cacheName)) {
          const c = l(this, n).get(g.cacheName);
          return await new e(t, c).match(a, g);
        }
      } else
        for (const c of l(this, n).values()) {
          const h = await new e(t, c).match(a, g);
          if (h !== void 0)
            return h;
        }
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#cache-storage-has
     * @param {string} cacheName
     * @returns {Promise<boolean>}
     */
    async has(a) {
      return A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), a = A.converters.DOMString(a), l(this, n).has(a);
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#dom-cachestorage-open
     * @param {string} cacheName
     * @returns {Promise<Cache>}
     */
    async open(a) {
      if (A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), a = A.converters.DOMString(a), l(this, n).has(a)) {
        const c = l(this, n).get(a);
        return new e(t, c);
      }
      const g = [];
      return l(this, n).set(a, g), new e(t, g);
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#cache-storage-delete
     * @param {string} cacheName
     * @returns {Promise<boolean>}
     */
    async delete(a) {
      return A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), a = A.converters.DOMString(a), l(this, n).delete(a);
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
  }), cg = {
    CacheStorage: s
  }, cg;
}
var gg, ou;
function fR() {
  return ou || (ou = 1, gg = {
    maxAttributeValueSize: 1024,
    maxNameValuePairSize: 4096
  }), gg;
}
var lg, au;
function GB() {
  if (au)
    return lg;
  au = 1;
  const t = Ze, { kHeadersList: e } = ve;
  function A(h) {
    if (h.length === 0)
      return !1;
    for (const u of h) {
      const B = u.charCodeAt(0);
      if (B >= 0 || B <= 8 || B >= 10 || B <= 31 || B === 127)
        return !1;
    }
  }
  function r(h) {
    for (const u of h) {
      const B = u.charCodeAt(0);
      if (B <= 32 || B > 127 || u === "(" || u === ")" || u === ">" || u === "<" || u === "@" || u === "," || u === ";" || u === ":" || u === "\\" || u === '"' || u === "/" || u === "[" || u === "]" || u === "?" || u === "=" || u === "{" || u === "}")
        throw new Error("Invalid cookie name");
    }
  }
  function s(h) {
    for (const u of h) {
      const B = u.charCodeAt(0);
      if (B < 33 || // exclude CTLs (0-31)
      B === 34 || B === 44 || B === 59 || B === 92 || B > 126)
        throw new Error("Invalid header value");
    }
  }
  function n(h) {
    for (const u of h)
      if (u.charCodeAt(0) < 33 || u === ";")
        throw new Error("Invalid cookie path");
  }
  function i(h) {
    if (h.startsWith("-") || h.endsWith(".") || h.endsWith("-"))
      throw new Error("Invalid cookie domain");
  }
  function o(h) {
    typeof h == "number" && (h = new Date(h));
    const u = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ], B = [
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
    ], Q = u[h.getUTCDay()], I = h.getUTCDate().toString().padStart(2, "0"), f = B[h.getUTCMonth()], C = h.getUTCFullYear(), d = h.getUTCHours().toString().padStart(2, "0"), w = h.getUTCMinutes().toString().padStart(2, "0"), p = h.getUTCSeconds().toString().padStart(2, "0");
    return `${Q}, ${I} ${f} ${C} ${d}:${w}:${p} GMT`;
  }
  function a(h) {
    if (h < 0)
      throw new Error("Invalid cookie max-age");
  }
  function g(h) {
    if (h.name.length === 0)
      return null;
    r(h.name), s(h.value);
    const u = [`${h.name}=${h.value}`];
    h.name.startsWith("__Secure-") && (h.secure = !0), h.name.startsWith("__Host-") && (h.secure = !0, h.domain = null, h.path = "/"), h.secure && u.push("Secure"), h.httpOnly && u.push("HttpOnly"), typeof h.maxAge == "number" && (a(h.maxAge), u.push(`Max-Age=${h.maxAge}`)), h.domain && (i(h.domain), u.push(`Domain=${h.domain}`)), h.path && (n(h.path), u.push(`Path=${h.path}`)), h.expires && h.expires.toString() !== "Invalid Date" && u.push(`Expires=${o(h.expires)}`), h.sameSite && u.push(`SameSite=${h.sameSite}`);
    for (const B of h.unparsed) {
      if (!B.includes("="))
        throw new Error("Invalid unparsed");
      const [Q, ...I] = B.split("=");
      u.push(`${Q.trim()}=${I.join("=")}`);
    }
    return u.join("; ");
  }
  let c;
  function E(h) {
    if (h[e])
      return h[e];
    c || (c = Object.getOwnPropertySymbols(h).find(
      (B) => B.description === "headers list"
    ), t(c, "Headers cannot be parsed"));
    const u = h[c];
    return t(u), u;
  }
  return lg = {
    isCTLExcludingHtab: A,
    stringify: g,
    getHeadersList: E
  }, lg;
}
var hg, cu;
function pR() {
  if (cu)
    return hg;
  cu = 1;
  const { maxNameValuePairSize: t, maxAttributeValueSize: e } = fR(), { isCTLExcludingHtab: A } = GB(), { collectASequenceOfCodePointsFast: r } = Ht(), s = Ze;
  function n(o) {
    if (A(o))
      return null;
    let a = "", g = "", c = "", E = "";
    if (o.includes(";")) {
      const h = { position: 0 };
      a = r(";", o, h), g = o.slice(h.position);
    } else
      a = o;
    if (!a.includes("="))
      E = a;
    else {
      const h = { position: 0 };
      c = r(
        "=",
        a,
        h
      ), E = a.slice(h.position + 1);
    }
    return c = c.trim(), E = E.trim(), c.length + E.length > t ? null : {
      name: c,
      value: E,
      ...i(g)
    };
  }
  function i(o, a = {}) {
    if (o.length === 0)
      return a;
    s(o[0] === ";"), o = o.slice(1);
    let g = "";
    o.includes(";") ? (g = r(
      ";",
      o,
      { position: 0 }
    ), o = o.slice(g.length)) : (g = o, o = "");
    let c = "", E = "";
    if (g.includes("=")) {
      const u = { position: 0 };
      c = r(
        "=",
        g,
        u
      ), E = g.slice(u.position + 1);
    } else
      c = g;
    if (c = c.trim(), E = E.trim(), E.length > e)
      return i(o, a);
    const h = c.toLowerCase();
    if (h === "expires") {
      const u = new Date(E);
      a.expires = u;
    } else if (h === "max-age") {
      const u = E.charCodeAt(0);
      if ((u < 48 || u > 57) && E[0] !== "-" || !/^\d+$/.test(E))
        return i(o, a);
      const B = Number(E);
      a.maxAge = B;
    } else if (h === "domain") {
      let u = E;
      u[0] === "." && (u = u.slice(1)), u = u.toLowerCase(), a.domain = u;
    } else if (h === "path") {
      let u = "";
      E.length === 0 || E[0] !== "/" ? u = "/" : u = E, a.path = u;
    } else if (h === "secure")
      a.secure = !0;
    else if (h === "httponly")
      a.httpOnly = !0;
    else if (h === "samesite") {
      let u = "Default";
      const B = E.toLowerCase();
      B.includes("none") && (u = "None"), B.includes("strict") && (u = "Strict"), B.includes("lax") && (u = "Lax"), a.sameSite = u;
    } else
      a.unparsed ?? (a.unparsed = []), a.unparsed.push(`${c}=${E}`);
    return i(o, a);
  }
  return hg = {
    parseSetCookie: n,
    parseUnparsedAttributes: i
  }, hg;
}
var Eg, gu;
function mR() {
  if (gu)
    return Eg;
  gu = 1;
  const { parseSetCookie: t } = pR(), { stringify: e, getHeadersList: A } = GB(), { webidl: r } = VA(), { Headers: s } = dn();
  function n(g) {
    r.argumentLengthCheck(arguments, 1, { header: "getCookies" }), r.brandCheck(g, s, { strict: !1 });
    const c = g.get("cookie"), E = {};
    if (!c)
      return E;
    for (const h of c.split(";")) {
      const [u, ...B] = h.split("=");
      E[u.trim()] = B.join("=");
    }
    return E;
  }
  function i(g, c, E) {
    r.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), r.brandCheck(g, s, { strict: !1 }), c = r.converters.DOMString(c), E = r.converters.DeleteCookieAttributes(E), a(g, {
      name: c,
      value: "",
      expires: /* @__PURE__ */ new Date(0),
      ...E
    });
  }
  function o(g) {
    r.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), r.brandCheck(g, s, { strict: !1 });
    const c = A(g).cookies;
    return c ? c.map((E) => t(Array.isArray(E) ? E[1] : E)) : [];
  }
  function a(g, c) {
    r.argumentLengthCheck(arguments, 2, { header: "setCookie" }), r.brandCheck(g, s, { strict: !1 }), c = r.converters.Cookie(c), e(c) && g.append("Set-Cookie", e(c));
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
      converter: r.nullableConverter((g) => typeof g == "number" ? r.converters["unsigned long long"](g) : new Date(g)),
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
  ]), Eg = {
    getCookies: n,
    deleteCookie: i,
    getSetCookies: o,
    setCookie: a
  }, Eg;
}
var ug, lu;
function qi() {
  if (lu)
    return ug;
  lu = 1;
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
  return ug = {
    uid: t,
    staticPropertyDescriptors: e,
    states: A,
    opcodes: r,
    maxUnsigned16Bit: s,
    parserStates: n,
    emptyBuffer: i
  }, ug;
}
var Qg, hu;
function ka() {
  return hu || (hu = 1, Qg = {
    kWebSocketURL: Symbol("url"),
    kReadyState: Symbol("ready state"),
    kController: Symbol("controller"),
    kResponse: Symbol("response"),
    kBinaryType: Symbol("binary type"),
    kSentClose: Symbol("sent close"),
    kReceivedClose: Symbol("received close"),
    kByteParser: Symbol("byte parser")
  }), Qg;
}
var Cg, Eu;
function YB() {
  var o, g, E;
  if (Eu)
    return Cg;
  Eu = 1;
  const { webidl: t } = VA(), { kEnumerableProperty: e } = fe, { MessagePort: A } = hQ, a = class a extends Event {
    constructor(Q, I = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), Q = t.converters.DOMString(Q), I = t.converters.MessageEventInit(I);
      super(Q, I);
      T(this, o, void 0);
      y(this, o, I);
    }
    get data() {
      return t.brandCheck(this, a), l(this, o).data;
    }
    get origin() {
      return t.brandCheck(this, a), l(this, o).origin;
    }
    get lastEventId() {
      return t.brandCheck(this, a), l(this, o).lastEventId;
    }
    get source() {
      return t.brandCheck(this, a), l(this, o).source;
    }
    get ports() {
      return t.brandCheck(this, a), Object.isFrozen(l(this, o).ports) || Object.freeze(l(this, o).ports), l(this, o).ports;
    }
    initMessageEvent(Q, I = !1, f = !1, C = null, d = "", w = "", p = null, m = []) {
      return t.brandCheck(this, a), t.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new a(Q, {
        bubbles: I,
        cancelable: f,
        data: C,
        origin: d,
        lastEventId: w,
        source: p,
        ports: m
      });
    }
  };
  o = new WeakMap();
  let r = a;
  const c = class c extends Event {
    constructor(Q, I = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), Q = t.converters.DOMString(Q), I = t.converters.CloseEventInit(I);
      super(Q, I);
      T(this, g, void 0);
      y(this, g, I);
    }
    get wasClean() {
      return t.brandCheck(this, c), l(this, g).wasClean;
    }
    get code() {
      return t.brandCheck(this, c), l(this, g).code;
    }
    get reason() {
      return t.brandCheck(this, c), l(this, g).reason;
    }
  };
  g = new WeakMap();
  let s = c;
  const h = class h extends Event {
    constructor(Q, I) {
      t.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" });
      super(Q, I);
      T(this, E, void 0);
      Q = t.converters.DOMString(Q), I = t.converters.ErrorEventInit(I ?? {}), y(this, E, I);
    }
    get message() {
      return t.brandCheck(this, h), l(this, E).message;
    }
    get filename() {
      return t.brandCheck(this, h), l(this, E).filename;
    }
    get lineno() {
      return t.brandCheck(this, h), l(this, E).lineno;
    }
    get colno() {
      return t.brandCheck(this, h), l(this, E).colno;
    }
    get error() {
      return t.brandCheck(this, h), l(this, E).error;
    }
  };
  E = new WeakMap();
  let n = h;
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
  ]), Cg = {
    MessageEvent: r,
    CloseEvent: s,
    ErrorEvent: n
  }, Cg;
}
var Bg, uu;
function vl() {
  if (uu)
    return Bg;
  uu = 1;
  const { kReadyState: t, kController: e, kResponse: A, kBinaryType: r, kWebSocketURL: s } = ka(), { states: n, opcodes: i } = qi(), { MessageEvent: o, ErrorEvent: a } = YB();
  function g(f) {
    return f[t] === n.OPEN;
  }
  function c(f) {
    return f[t] === n.CLOSING;
  }
  function E(f) {
    return f[t] === n.CLOSED;
  }
  function h(f, C, d = Event, w) {
    const p = new d(f, w);
    C.dispatchEvent(p);
  }
  function u(f, C, d) {
    if (f[t] !== n.OPEN)
      return;
    let w;
    if (C === i.TEXT)
      try {
        w = new TextDecoder("utf-8", { fatal: !0 }).decode(d);
      } catch {
        I(f, "Received invalid UTF-8 in text frame.");
        return;
      }
    else
      C === i.BINARY && (f[r] === "blob" ? w = new Blob([d]) : w = new Uint8Array(d).buffer);
    h("message", f, o, {
      origin: f[s].origin,
      data: w
    });
  }
  function B(f) {
    if (f.length === 0)
      return !1;
    for (const C of f) {
      const d = C.charCodeAt(0);
      if (d < 33 || d > 126 || C === "(" || C === ")" || C === "<" || C === ">" || C === "@" || C === "," || C === ";" || C === ":" || C === "\\" || C === '"' || C === "/" || C === "[" || C === "]" || C === "?" || C === "=" || C === "{" || C === "}" || d === 32 || // SP
      d === 9)
        return !1;
    }
    return !0;
  }
  function Q(f) {
    return f >= 1e3 && f < 1015 ? f !== 1004 && // reserved
    f !== 1005 && // "MUST NOT be set as a status code"
    f !== 1006 : f >= 3e3 && f <= 4999;
  }
  function I(f, C) {
    const { [e]: d, [A]: w } = f;
    d.abort(), w != null && w.socket && !w.socket.destroyed && w.socket.destroy(), C && h("error", f, a, {
      error: new Error(C)
    });
  }
  return Bg = {
    isEstablished: g,
    isClosing: c,
    isClosed: E,
    fireEvent: h,
    isValidSubprotocol: B,
    isValidStatusCode: Q,
    failWebsocketConnection: I,
    websocketMessageReceived: u
  }, Bg;
}
var Ig, Qu;
function wR() {
  if (Qu)
    return Ig;
  Qu = 1;
  const t = QQ, { uid: e, states: A } = qi(), {
    kReadyState: r,
    kSentClose: s,
    kByteParser: n,
    kReceivedClose: i
  } = ka(), { fireEvent: o, failWebsocketConnection: a } = vl(), { CloseEvent: g } = YB(), { makeRequest: c } = ba(), { fetching: E } = Tl(), { Headers: h } = dn(), { getGlobalDispatcher: u } = Wi, { kHeadersList: B } = ve, Q = {};
  Q.open = t.channel("undici:websocket:open"), Q.close = t.channel("undici:websocket:close"), Q.socketError = t.channel("undici:websocket:socket_error");
  let I;
  try {
    I = require("crypto");
  } catch {
  }
  function f(p, m, R, D, G) {
    const H = p;
    H.protocol = p.protocol === "ws:" ? "http:" : "https:";
    const x = c({
      urlList: [H],
      serviceWorkers: "none",
      referrer: "no-referrer",
      mode: "websocket",
      credentials: "include",
      cache: "no-store",
      redirect: "error"
    });
    if (G.headers) {
      const q = new h(G.headers)[B];
      x.headersList = q;
    }
    const te = I.randomBytes(16).toString("base64");
    x.headersList.append("sec-websocket-key", te), x.headersList.append("sec-websocket-version", "13");
    for (const q of m)
      x.headersList.append("sec-websocket-protocol", q);
    const ee = "";
    return E({
      request: x,
      useParallelQueue: !0,
      dispatcher: G.dispatcher ?? u(),
      processResponse(q) {
        var b, V;
        if (q.type === "error" || q.status !== 101) {
          a(R, "Received network error or non-101 status code.");
          return;
        }
        if (m.length !== 0 && !q.headersList.get("Sec-WebSocket-Protocol")) {
          a(R, "Server did not respond with sent protocols.");
          return;
        }
        if (((b = q.headersList.get("Upgrade")) == null ? void 0 : b.toLowerCase()) !== "websocket") {
          a(R, 'Server did not set Upgrade header to "websocket".');
          return;
        }
        if (((V = q.headersList.get("Connection")) == null ? void 0 : V.toLowerCase()) !== "upgrade") {
          a(R, 'Server did not set Connection header to "upgrade".');
          return;
        }
        const $ = q.headersList.get("Sec-WebSocket-Accept"), se = I.createHash("sha1").update(te + e).digest("base64");
        if ($ !== se) {
          a(R, "Incorrect hash received in Sec-WebSocket-Accept header.");
          return;
        }
        const ie = q.headersList.get("Sec-WebSocket-Extensions");
        if (ie !== null && ie !== ee) {
          a(R, "Received different permessage-deflate than the one set.");
          return;
        }
        const K = q.headersList.get("Sec-WebSocket-Protocol");
        if (K !== null && K !== x.headersList.get("Sec-WebSocket-Protocol")) {
          a(R, "Protocol was not set in the opening handshake.");
          return;
        }
        q.socket.on("data", C), q.socket.on("close", d), q.socket.on("error", w), Q.open.hasSubscribers && Q.open.publish({
          address: q.socket.address(),
          protocol: K,
          extensions: ie
        }), D(q);
      }
    });
  }
  function C(p) {
    this.ws[n].write(p) || this.pause();
  }
  function d() {
    const { ws: p } = this, m = p[s] && p[i];
    let R = 1005, D = "";
    const G = p[n].closingInfo;
    G ? (R = G.code ?? 1005, D = G.reason) : p[s] || (R = 1006), p[r] = A.CLOSED, o("close", p, g, {
      wasClean: m,
      code: R,
      reason: D
    }), Q.close.hasSubscribers && Q.close.publish({
      websocket: p,
      code: R,
      reason: D
    });
  }
  function w(p) {
    const { ws: m } = this;
    m[r] = A.CLOSING, Q.socketError.hasSubscribers && Q.socketError.publish(p), this.destroy();
  }
  return Ig = {
    establishWebSocketConnection: f
  }, Ig;
}
var dg, Cu;
function xB() {
  if (Cu)
    return dg;
  Cu = 1;
  const { maxUnsigned16Bit: t } = qi();
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
      var g;
      const n = ((g = this.frameData) == null ? void 0 : g.byteLength) ?? 0;
      let i = n, o = 6;
      n > t ? (o += 8, i = 127) : n > 125 && (o += 2, i = 126);
      const a = Buffer.allocUnsafe(n + o);
      a[0] = a[1] = 0, a[0] |= 128, a[0] = (a[0] & 240) + s;
      /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */
      a[o - 4] = this.maskKey[0], a[o - 3] = this.maskKey[1], a[o - 2] = this.maskKey[2], a[o - 1] = this.maskKey[3], a[1] = i, i === 126 ? a.writeUInt16BE(n, 2) : i === 127 && (a[2] = a[3] = 0, a.writeUIntBE(n, 4, 6)), a[1] |= 128;
      for (let c = 0; c < n; c++)
        a[o + c] = this.frameData[c] ^ this.maskKey[c % 4];
      return a;
    }
  }
  return dg = {
    WebsocketFrameSend: A
  }, dg;
}
var fg, Bu;
function yR() {
  var I, f, C, d, w;
  if (Bu)
    return fg;
  Bu = 1;
  const { Writable: t } = _t, e = QQ, { parserStates: A, opcodes: r, states: s, emptyBuffer: n } = qi(), { kReadyState: i, kSentClose: o, kResponse: a, kReceivedClose: g } = ka(), { isValidStatusCode: c, failWebsocketConnection: E, websocketMessageReceived: h } = vl(), { WebsocketFrameSend: u } = xB(), B = {};
  B.ping = e.channel("undici:websocket:ping"), B.pong = e.channel("undici:websocket:pong");
  class Q extends t {
    constructor(R) {
      super();
      T(this, I, []);
      T(this, f, 0);
      T(this, C, A.INFO);
      T(this, d, {});
      T(this, w, []);
      this.ws = R;
    }
    /**
     * @param {Buffer} chunk
     * @param {() => void} callback
     */
    _write(R, D, G) {
      l(this, I).push(R), y(this, f, l(this, f) + R.length), this.run(G);
    }
    /**
     * Runs whenever a new chunk is received.
     * Callback is called whenever there are no more chunks buffering,
     * or not enough bytes are buffered to parse.
     */
    run(R) {
      var D;
      for (; ; ) {
        if (l(this, C) === A.INFO) {
          if (l(this, f) < 2)
            return R();
          const G = this.consume(2);
          if (l(this, d).fin = (G[0] & 128) !== 0, l(this, d).opcode = G[0] & 15, (D = l(this, d)).originalOpcode ?? (D.originalOpcode = l(this, d).opcode), l(this, d).fragmented = !l(this, d).fin && l(this, d).opcode !== r.CONTINUATION, l(this, d).fragmented && l(this, d).opcode !== r.BINARY && l(this, d).opcode !== r.TEXT) {
            E(this.ws, "Invalid frame type was fragmented.");
            return;
          }
          const H = G[1] & 127;
          if (H <= 125 ? (l(this, d).payloadLength = H, y(this, C, A.READ_DATA)) : H === 126 ? y(this, C, A.PAYLOADLENGTH_16) : H === 127 && y(this, C, A.PAYLOADLENGTH_64), l(this, d).fragmented && H > 125) {
            E(this.ws, "Fragmented frame exceeded 125 bytes.");
            return;
          } else if ((l(this, d).opcode === r.PING || l(this, d).opcode === r.PONG || l(this, d).opcode === r.CLOSE) && H > 125) {
            E(this.ws, "Payload length for control frame exceeded 125 bytes.");
            return;
          } else if (l(this, d).opcode === r.CLOSE) {
            if (H === 1) {
              E(this.ws, "Received close frame with a 1-byte body.");
              return;
            }
            const x = this.consume(H);
            if (l(this, d).closeInfo = this.parseCloseBody(!1, x), !this.ws[o]) {
              const te = Buffer.allocUnsafe(2);
              te.writeUInt16BE(l(this, d).closeInfo.code, 0);
              const ee = new u(te);
              this.ws[a].socket.write(
                ee.createFrame(r.CLOSE),
                (Ee) => {
                  Ee || (this.ws[o] = !0);
                }
              );
            }
            this.ws[i] = s.CLOSING, this.ws[g] = !0, this.end();
            return;
          } else if (l(this, d).opcode === r.PING) {
            const x = this.consume(H);
            if (!this.ws[g]) {
              const te = new u(x);
              this.ws[a].socket.write(te.createFrame(r.PONG)), B.ping.hasSubscribers && B.ping.publish({
                payload: x
              });
            }
            if (y(this, C, A.INFO), l(this, f) > 0)
              continue;
            R();
            return;
          } else if (l(this, d).opcode === r.PONG) {
            const x = this.consume(H);
            if (B.pong.hasSubscribers && B.pong.publish({
              payload: x
            }), l(this, f) > 0)
              continue;
            R();
            return;
          }
        } else if (l(this, C) === A.PAYLOADLENGTH_16) {
          if (l(this, f) < 2)
            return R();
          const G = this.consume(2);
          l(this, d).payloadLength = G.readUInt16BE(0), y(this, C, A.READ_DATA);
        } else if (l(this, C) === A.PAYLOADLENGTH_64) {
          if (l(this, f) < 8)
            return R();
          const G = this.consume(8), H = G.readUInt32BE(0);
          if (H > 2 ** 31 - 1) {
            E(this.ws, "Received payload length > 2^31 bytes.");
            return;
          }
          const x = G.readUInt32BE(4);
          l(this, d).payloadLength = (H << 8) + x, y(this, C, A.READ_DATA);
        } else if (l(this, C) === A.READ_DATA) {
          if (l(this, f) < l(this, d).payloadLength)
            return R();
          if (l(this, f) >= l(this, d).payloadLength) {
            const G = this.consume(l(this, d).payloadLength);
            if (l(this, w).push(G), !l(this, d).fragmented || l(this, d).fin && l(this, d).opcode === r.CONTINUATION) {
              const H = Buffer.concat(l(this, w));
              h(this.ws, l(this, d).originalOpcode, H), y(this, d, {}), l(this, w).length = 0;
            }
            y(this, C, A.INFO);
          }
        }
        if (!(l(this, f) > 0)) {
          R();
          break;
        }
      }
    }
    /**
     * Take n bytes from the buffered Buffers
     * @param {number} n
     * @returns {Buffer|null}
     */
    consume(R) {
      if (R > l(this, f))
        return null;
      if (R === 0)
        return n;
      if (l(this, I)[0].length === R)
        return y(this, f, l(this, f) - l(this, I)[0].length), l(this, I).shift();
      const D = Buffer.allocUnsafe(R);
      let G = 0;
      for (; G !== R; ) {
        const H = l(this, I)[0], { length: x } = H;
        if (x + G === R) {
          D.set(l(this, I).shift(), G);
          break;
        } else if (x + G > R) {
          D.set(H.subarray(0, R - G), G), l(this, I)[0] = H.subarray(R - G);
          break;
        } else
          D.set(l(this, I).shift(), G), G += H.length;
      }
      return y(this, f, l(this, f) - R), D;
    }
    parseCloseBody(R, D) {
      let G;
      if (D.length >= 2 && (G = D.readUInt16BE(0)), R)
        return c(G) ? { code: G } : null;
      let H = D.subarray(2);
      if (H[0] === 239 && H[1] === 187 && H[2] === 191 && (H = H.subarray(3)), G !== void 0 && !c(G))
        return null;
      try {
        H = new TextDecoder("utf-8", { fatal: !0 }).decode(H);
      } catch {
        return null;
      }
      return { code: G, reason: H };
    }
    get closingInfo() {
      return l(this, d).closeInfo;
    }
  }
  return I = new WeakMap(), f = new WeakMap(), C = new WeakMap(), d = new WeakMap(), w = new WeakMap(), fg = {
    ByteParser: Q
  }, fg;
}
var pg, Iu;
function RR() {
  var ee, Ee, q, $, se, JB;
  if (Iu)
    return pg;
  Iu = 1;
  const { webidl: t } = VA(), { DOMException: e } = ms(), { URLSerializer: A } = Ht(), { getGlobalOrigin: r } = _i(), { staticPropertyDescriptors: s, states: n, opcodes: i, emptyBuffer: o } = qi(), {
    kWebSocketURL: a,
    kReadyState: g,
    kController: c,
    kBinaryType: E,
    kResponse: h,
    kSentClose: u,
    kByteParser: B
  } = ka(), { isEstablished: Q, isClosing: I, isValidSubprotocol: f, failWebsocketConnection: C, fireEvent: d } = vl(), { establishWebSocketConnection: w } = wR(), { WebsocketFrameSend: p } = xB(), { ByteParser: m } = yR(), { kEnumerableProperty: R, isBlobLike: D } = fe, { getGlobalDispatcher: G } = Wi, { types: H } = Ot;
  let x = !1;
  const K = class K extends EventTarget {
    /**
     * @param {string} url
     * @param {string|string[]} protocols
     */
    constructor(N, S = []) {
      super();
      /**
       * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
       */
      T(this, se);
      T(this, ee, {
        open: null,
        error: null,
        close: null,
        message: null
      });
      T(this, Ee, 0);
      T(this, q, "");
      T(this, $, "");
      t.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), x || (x = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
        code: "UNDICI-WS"
      }));
      const k = t.converters["DOMString or sequence<DOMString> or WebSocketInit"](S);
      N = t.converters.USVString(N), S = k.protocols;
      const v = r();
      let M;
      try {
        M = new URL(N, v);
      } catch (P) {
        throw new e(P, "SyntaxError");
      }
      if (M.protocol === "http:" ? M.protocol = "ws:" : M.protocol === "https:" && (M.protocol = "wss:"), M.protocol !== "ws:" && M.protocol !== "wss:")
        throw new e(
          `Expected a ws: or wss: protocol, got ${M.protocol}`,
          "SyntaxError"
        );
      if (M.hash || M.href.endsWith("#"))
        throw new e("Got fragment", "SyntaxError");
      if (typeof S == "string" && (S = [S]), S.length !== new Set(S.map((P) => P.toLowerCase())).size)
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      if (S.length > 0 && !S.every((P) => f(P)))
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      this[a] = new URL(M.href), this[c] = w(
        M,
        S,
        this,
        (P) => J(this, se, JB).call(this, P),
        k
      ), this[g] = K.CONNECTING, this[E] = "blob";
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-close
     * @param {number|undefined} code
     * @param {string|undefined} reason
     */
    close(N = void 0, S = void 0) {
      if (t.brandCheck(this, K), N !== void 0 && (N = t.converters["unsigned short"](N, { clamp: !0 })), S !== void 0 && (S = t.converters.USVString(S)), N !== void 0 && N !== 1e3 && (N < 3e3 || N > 4999))
        throw new e("invalid code", "InvalidAccessError");
      let k = 0;
      if (S !== void 0 && (k = Buffer.byteLength(S), k > 123))
        throw new e(
          `Reason must be less than 123 bytes; received ${k}`,
          "SyntaxError"
        );
      if (!(this[g] === K.CLOSING || this[g] === K.CLOSED))
        if (!Q(this))
          C(this, "Connection was closed before it was established."), this[g] = K.CLOSING;
        else if (I(this))
          this[g] = K.CLOSING;
        else {
          const v = new p();
          N !== void 0 && S === void 0 ? (v.frameData = Buffer.allocUnsafe(2), v.frameData.writeUInt16BE(N, 0)) : N !== void 0 && S !== void 0 ? (v.frameData = Buffer.allocUnsafe(2 + k), v.frameData.writeUInt16BE(N, 0), v.frameData.write(S, 2, "utf-8")) : v.frameData = o, this[h].socket.write(v.createFrame(i.CLOSE), (P) => {
            P || (this[u] = !0);
          }), this[g] = n.CLOSING;
        }
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-send
     * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
     */
    send(N) {
      if (t.brandCheck(this, K), t.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), N = t.converters.WebSocketSendData(N), this[g] === K.CONNECTING)
        throw new e("Sent before connected.", "InvalidStateError");
      if (!Q(this) || I(this))
        return;
      const S = this[h].socket;
      if (typeof N == "string") {
        const k = Buffer.from(N), M = new p(k).createFrame(i.TEXT);
        y(this, Ee, l(this, Ee) + k.byteLength), S.write(M, () => {
          y(this, Ee, l(this, Ee) - k.byteLength);
        });
      } else if (H.isArrayBuffer(N)) {
        const k = Buffer.from(N), M = new p(k).createFrame(i.BINARY);
        y(this, Ee, l(this, Ee) + k.byteLength), S.write(M, () => {
          y(this, Ee, l(this, Ee) - k.byteLength);
        });
      } else if (ArrayBuffer.isView(N)) {
        const k = Buffer.from(N, N.byteOffset, N.byteLength), M = new p(k).createFrame(i.BINARY);
        y(this, Ee, l(this, Ee) + k.byteLength), S.write(M, () => {
          y(this, Ee, l(this, Ee) - k.byteLength);
        });
      } else if (D(N)) {
        const k = new p();
        N.arrayBuffer().then((v) => {
          const M = Buffer.from(v);
          k.frameData = M;
          const P = k.createFrame(i.BINARY);
          y(this, Ee, l(this, Ee) + M.byteLength), S.write(P, () => {
            y(this, Ee, l(this, Ee) - M.byteLength);
          });
        });
      }
    }
    get readyState() {
      return t.brandCheck(this, K), this[g];
    }
    get bufferedAmount() {
      return t.brandCheck(this, K), l(this, Ee);
    }
    get url() {
      return t.brandCheck(this, K), A(this[a]);
    }
    get extensions() {
      return t.brandCheck(this, K), l(this, $);
    }
    get protocol() {
      return t.brandCheck(this, K), l(this, q);
    }
    get onopen() {
      return t.brandCheck(this, K), l(this, ee).open;
    }
    set onopen(N) {
      t.brandCheck(this, K), l(this, ee).open && this.removeEventListener("open", l(this, ee).open), typeof N == "function" ? (l(this, ee).open = N, this.addEventListener("open", N)) : l(this, ee).open = null;
    }
    get onerror() {
      return t.brandCheck(this, K), l(this, ee).error;
    }
    set onerror(N) {
      t.brandCheck(this, K), l(this, ee).error && this.removeEventListener("error", l(this, ee).error), typeof N == "function" ? (l(this, ee).error = N, this.addEventListener("error", N)) : l(this, ee).error = null;
    }
    get onclose() {
      return t.brandCheck(this, K), l(this, ee).close;
    }
    set onclose(N) {
      t.brandCheck(this, K), l(this, ee).close && this.removeEventListener("close", l(this, ee).close), typeof N == "function" ? (l(this, ee).close = N, this.addEventListener("close", N)) : l(this, ee).close = null;
    }
    get onmessage() {
      return t.brandCheck(this, K), l(this, ee).message;
    }
    set onmessage(N) {
      t.brandCheck(this, K), l(this, ee).message && this.removeEventListener("message", l(this, ee).message), typeof N == "function" ? (l(this, ee).message = N, this.addEventListener("message", N)) : l(this, ee).message = null;
    }
    get binaryType() {
      return t.brandCheck(this, K), this[E];
    }
    set binaryType(N) {
      t.brandCheck(this, K), N !== "blob" && N !== "arraybuffer" ? this[E] = "blob" : this[E] = N;
    }
  };
  ee = new WeakMap(), Ee = new WeakMap(), q = new WeakMap(), $ = new WeakMap(), se = new WeakSet(), JB = function(N) {
    this[h] = N;
    const S = new m(this);
    S.on("drain", function() {
      this.ws[h].socket.resume();
    }), N.socket.ws = this, this[B] = S, this[g] = n.OPEN;
    const k = N.headersList.get("sec-websocket-extensions");
    k !== null && y(this, $, k);
    const v = N.headersList.get("sec-websocket-protocol");
    v !== null && y(this, q, v), d("open", this);
  };
  let te = K;
  return te.CONNECTING = te.prototype.CONNECTING = n.CONNECTING, te.OPEN = te.prototype.OPEN = n.OPEN, te.CLOSING = te.prototype.CLOSING = n.CLOSING, te.CLOSED = te.prototype.CLOSED = n.CLOSED, Object.defineProperties(te.prototype, {
    CONNECTING: s,
    OPEN: s,
    CLOSING: s,
    CLOSED: s,
    url: R,
    readyState: R,
    bufferedAmount: R,
    onopen: R,
    onerror: R,
    onclose: R,
    close: R,
    onmessage: R,
    binaryType: R,
    send: R,
    extensions: R,
    protocol: R,
    [Symbol.toStringTag]: {
      value: "WebSocket",
      writable: !1,
      enumerable: !1,
      configurable: !0
    }
  }), Object.defineProperties(te, {
    CONNECTING: s,
    OPEN: s,
    CLOSING: s,
    CLOSED: s
  }), t.converters["sequence<DOMString>"] = t.sequenceConverter(
    t.converters.DOMString
  ), t.converters["DOMString or sequence<DOMString>"] = function(b) {
    return t.util.Type(b) === "Object" && Symbol.iterator in b ? t.converters["sequence<DOMString>"](b) : t.converters.DOMString(b);
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
      converter: (b) => b,
      get defaultValue() {
        return G();
      }
    },
    {
      key: "headers",
      converter: t.nullableConverter(t.converters.HeadersInit)
    }
  ]), t.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(b) {
    return t.util.Type(b) === "Object" && !(Symbol.iterator in b) ? t.converters.WebSocketInit(b) : { protocols: t.converters["DOMString or sequence<DOMString>"](b) };
  }, t.converters.WebSocketSendData = function(b) {
    if (t.util.Type(b) === "Object") {
      if (D(b))
        return t.converters.Blob(b, { strict: !1 });
      if (ArrayBuffer.isView(b) || H.isAnyArrayBuffer(b))
        return t.converters.BufferSource(b);
    }
    return t.converters.USVString(b);
  }, pg = {
    WebSocket: te
  }, pg;
}
const DR = wa, OB = bl, _B = be, bR = Hi, kR = Nw, SR = ya, Is = fe, { InvalidArgumentError: po } = _B, fn = In, FR = pa, NR = SB, UR = P0, TR = FB, LR = IB, vR = nR, MR = cR, { getGlobalDispatcher: HB, setGlobalDispatcher: GR } = Wi, YR = hR, xR = LC, JR = Sl;
let zg;
try {
  require("crypto"), zg = !0;
} catch {
  zg = !1;
}
Object.assign(OB.prototype, fn);
ue.Dispatcher = OB;
ue.Client = DR;
ue.Pool = bR;
ue.BalancedPool = kR;
ue.Agent = SR;
ue.ProxyAgent = vR;
ue.RetryHandler = MR;
ue.DecoratorHandler = YR;
ue.RedirectHandler = xR;
ue.createRedirectInterceptor = JR;
ue.buildConnector = FR;
ue.errors = _B;
function ji(t) {
  return (e, A, r) => {
    if (typeof A == "function" && (r = A, A = null), !e || typeof e != "string" && typeof e != "object" && !(e instanceof URL))
      throw new po("invalid url");
    if (A != null && typeof A != "object")
      throw new po("invalid opts");
    if (A && A.path != null) {
      if (typeof A.path != "string")
        throw new po("invalid opts.path");
      let i = A.path;
      A.path.startsWith("/") || (i = `/${i}`), e = new URL(Is.parseOrigin(e).origin + i);
    } else
      A || (A = typeof e == "object" ? e : {}), e = Is.parseURL(e);
    const { agent: s, dispatcher: n = HB() } = A;
    if (s)
      throw new po("unsupported opts.agent. Did you mean opts.client?");
    return t.call(n, {
      ...A,
      origin: e.origin,
      path: e.search ? `${e.pathname}${e.search}` : e.pathname,
      method: A.method || (A.body ? "PUT" : "GET")
    }, r);
  };
}
ue.setGlobalDispatcher = GR;
ue.getGlobalDispatcher = HB;
if (Is.nodeMajor > 16 || Is.nodeMajor === 16 && Is.nodeMinor >= 8) {
  let t = null;
  ue.fetch = async function(i) {
    t || (t = Tl().fetch);
    try {
      return await t(...arguments);
    } catch (o) {
      throw typeof o == "object" && Error.captureStackTrace(o, this), o;
    }
  }, ue.Headers = dn().Headers, ue.Response = Ul().Response, ue.Request = ba().Request, ue.FormData = Dl().FormData, ue.File = Rl().File, ue.FileReader = CR().FileReader;
  const { setGlobalOrigin: e, getGlobalOrigin: A } = _i();
  ue.setGlobalOrigin = e, ue.getGlobalOrigin = A;
  const { CacheStorage: r } = dR(), { kConstruct: s } = Ll();
  ue.caches = new r(s);
}
if (Is.nodeMajor >= 16) {
  const { deleteCookie: t, getCookies: e, getSetCookies: A, setCookie: r } = mR();
  ue.deleteCookie = t, ue.getCookies = e, ue.getSetCookies = A, ue.setCookie = r;
  const { parseMIMEType: s, serializeAMimeType: n } = Ht();
  ue.parseMIMEType = s, ue.serializeAMimeType = n;
}
if (Is.nodeMajor >= 18 && zg) {
  const { WebSocket: t } = RR();
  ue.WebSocket = t;
}
ue.request = ji(fn.request);
ue.stream = ji(fn.stream);
ue.pipeline = ji(fn.pipeline);
ue.connect = ji(fn.connect);
ue.upgrade = ji(fn.upgrade);
ue.MockClient = NR;
ue.MockPool = TR;
ue.MockAgent = UR;
ue.mockErrors = LR;
var OR = le && le.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), _R = le && le.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), Sa = le && le.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && OR(e, t, A);
  return _R(e, t), e;
}, je = le && le.__awaiter || function(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function o(c) {
      try {
        g(r.next(c));
      } catch (E) {
        i(E);
      }
    }
    function a(c) {
      try {
        g(r.throw(c));
      } catch (E) {
        i(E);
      }
    }
    function g(c) {
      c.done ? n(c.value) : s(c.value).then(o, a);
    }
    g((r = r.apply(t, e || [])).next());
  });
};
Object.defineProperty(CA, "__esModule", { value: !0 });
CA.HttpClient = CA.isHttps = CA.HttpClientResponse = CA.HttpClientError = CA.getProxyUrl = CA.MediaTypes = CA.Headers = CA.HttpCodes = void 0;
const mg = Sa(Qn), du = Sa(cQ), Zg = Sa(cn), mo = Sa(Rf), HR = ue;
var ct;
(function(t) {
  t[t.OK = 200] = "OK", t[t.MultipleChoices = 300] = "MultipleChoices", t[t.MovedPermanently = 301] = "MovedPermanently", t[t.ResourceMoved = 302] = "ResourceMoved", t[t.SeeOther = 303] = "SeeOther", t[t.NotModified = 304] = "NotModified", t[t.UseProxy = 305] = "UseProxy", t[t.SwitchProxy = 306] = "SwitchProxy", t[t.TemporaryRedirect = 307] = "TemporaryRedirect", t[t.PermanentRedirect = 308] = "PermanentRedirect", t[t.BadRequest = 400] = "BadRequest", t[t.Unauthorized = 401] = "Unauthorized", t[t.PaymentRequired = 402] = "PaymentRequired", t[t.Forbidden = 403] = "Forbidden", t[t.NotFound = 404] = "NotFound", t[t.MethodNotAllowed = 405] = "MethodNotAllowed", t[t.NotAcceptable = 406] = "NotAcceptable", t[t.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", t[t.RequestTimeout = 408] = "RequestTimeout", t[t.Conflict = 409] = "Conflict", t[t.Gone = 410] = "Gone", t[t.TooManyRequests = 429] = "TooManyRequests", t[t.InternalServerError = 500] = "InternalServerError", t[t.NotImplemented = 501] = "NotImplemented", t[t.BadGateway = 502] = "BadGateway", t[t.ServiceUnavailable = 503] = "ServiceUnavailable", t[t.GatewayTimeout = 504] = "GatewayTimeout";
})(ct || (CA.HttpCodes = ct = {}));
var kA;
(function(t) {
  t.Accept = "accept", t.ContentType = "content-type";
})(kA || (CA.Headers = kA = {}));
var Xt;
(function(t) {
  t.ApplicationJson = "application/json";
})(Xt || (CA.MediaTypes = Xt = {}));
function PR(t) {
  const e = Zg.getProxyUrl(new URL(t));
  return e ? e.href : "";
}
CA.getProxyUrl = PR;
const VR = [
  ct.MovedPermanently,
  ct.ResourceMoved,
  ct.SeeOther,
  ct.TemporaryRedirect,
  ct.PermanentRedirect
], WR = [
  ct.BadGateway,
  ct.ServiceUnavailable,
  ct.GatewayTimeout
], qR = ["OPTIONS", "GET", "DELETE", "HEAD"], jR = 10, zR = 5;
class Fa extends Error {
  constructor(e, A) {
    super(e), this.name = "HttpClientError", this.statusCode = A, Object.setPrototypeOf(this, Fa.prototype);
  }
}
CA.HttpClientError = Fa;
class PB {
  constructor(e) {
    this.message = e;
  }
  readBody() {
    return je(this, void 0, void 0, function* () {
      return new Promise((e) => je(this, void 0, void 0, function* () {
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
    return je(this, void 0, void 0, function* () {
      return new Promise((e) => je(this, void 0, void 0, function* () {
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
CA.HttpClientResponse = PB;
function ZR(t) {
  return new URL(t).protocol === "https:";
}
CA.isHttps = ZR;
class $R {
  constructor(e, A, r) {
    this._ignoreSslError = !1, this._allowRedirects = !0, this._allowRedirectDowngrade = !1, this._maxRedirects = 50, this._allowRetries = !1, this._maxRetries = 1, this._keepAlive = !1, this._disposed = !1, this.userAgent = e, this.handlers = A || [], this.requestOptions = r, r && (r.ignoreSslError != null && (this._ignoreSslError = r.ignoreSslError), this._socketTimeout = r.socketTimeout, r.allowRedirects != null && (this._allowRedirects = r.allowRedirects), r.allowRedirectDowngrade != null && (this._allowRedirectDowngrade = r.allowRedirectDowngrade), r.maxRedirects != null && (this._maxRedirects = Math.max(r.maxRedirects, 0)), r.keepAlive != null && (this._keepAlive = r.keepAlive), r.allowRetries != null && (this._allowRetries = r.allowRetries), r.maxRetries != null && (this._maxRetries = r.maxRetries));
  }
  options(e, A) {
    return je(this, void 0, void 0, function* () {
      return this.request("OPTIONS", e, null, A || {});
    });
  }
  get(e, A) {
    return je(this, void 0, void 0, function* () {
      return this.request("GET", e, null, A || {});
    });
  }
  del(e, A) {
    return je(this, void 0, void 0, function* () {
      return this.request("DELETE", e, null, A || {});
    });
  }
  post(e, A, r) {
    return je(this, void 0, void 0, function* () {
      return this.request("POST", e, A, r || {});
    });
  }
  patch(e, A, r) {
    return je(this, void 0, void 0, function* () {
      return this.request("PATCH", e, A, r || {});
    });
  }
  put(e, A, r) {
    return je(this, void 0, void 0, function* () {
      return this.request("PUT", e, A, r || {});
    });
  }
  head(e, A) {
    return je(this, void 0, void 0, function* () {
      return this.request("HEAD", e, null, A || {});
    });
  }
  sendStream(e, A, r, s) {
    return je(this, void 0, void 0, function* () {
      return this.request(e, A, r, s);
    });
  }
  /**
   * Gets a typed object from an endpoint
   * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
   */
  getJson(e, A = {}) {
    return je(this, void 0, void 0, function* () {
      A[kA.Accept] = this._getExistingOrDefaultHeader(A, kA.Accept, Xt.ApplicationJson);
      const r = yield this.get(e, A);
      return this._processResponse(r, this.requestOptions);
    });
  }
  postJson(e, A, r = {}) {
    return je(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[kA.Accept] = this._getExistingOrDefaultHeader(r, kA.Accept, Xt.ApplicationJson), r[kA.ContentType] = this._getExistingOrDefaultHeader(r, kA.ContentType, Xt.ApplicationJson);
      const n = yield this.post(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  putJson(e, A, r = {}) {
    return je(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[kA.Accept] = this._getExistingOrDefaultHeader(r, kA.Accept, Xt.ApplicationJson), r[kA.ContentType] = this._getExistingOrDefaultHeader(r, kA.ContentType, Xt.ApplicationJson);
      const n = yield this.put(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  patchJson(e, A, r = {}) {
    return je(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[kA.Accept] = this._getExistingOrDefaultHeader(r, kA.Accept, Xt.ApplicationJson), r[kA.ContentType] = this._getExistingOrDefaultHeader(r, kA.ContentType, Xt.ApplicationJson);
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
    return je(this, void 0, void 0, function* () {
      if (this._disposed)
        throw new Error("Client has already been disposed.");
      const n = new URL(A);
      let i = this._prepareRequest(e, n, s);
      const o = this._allowRetries && qR.includes(e) ? this._maxRetries + 1 : 1;
      let a = 0, g;
      do {
        if (g = yield this.requestRaw(i, r), g && g.message && g.message.statusCode === ct.Unauthorized) {
          let E;
          for (const h of this.handlers)
            if (h.canHandleAuthentication(g)) {
              E = h;
              break;
            }
          return E ? E.handleAuthentication(this, i, r) : g;
        }
        let c = this._maxRedirects;
        for (; g.message.statusCode && VR.includes(g.message.statusCode) && this._allowRedirects && c > 0; ) {
          const E = g.message.headers.location;
          if (!E)
            break;
          const h = new URL(E);
          if (n.protocol === "https:" && n.protocol !== h.protocol && !this._allowRedirectDowngrade)
            throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
          if (yield g.readBody(), h.hostname !== n.hostname)
            for (const u in s)
              u.toLowerCase() === "authorization" && delete s[u];
          i = this._prepareRequest(e, h, s), g = yield this.requestRaw(i, r), c--;
        }
        if (!g.message.statusCode || !WR.includes(g.message.statusCode))
          return g;
        a += 1, a < o && (yield g.readBody(), yield this._performExponentialBackoff(a));
      } while (a < o);
      return g;
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
    return je(this, void 0, void 0, function* () {
      return new Promise((r, s) => {
        function n(i, o) {
          i ? s(i) : o ? r(o) : s(new Error("Unknown error"));
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
    function n(a, g) {
      s || (s = !0, r(a, g));
    }
    const i = e.httpModule.request(e.options, (a) => {
      const g = new PB(a);
      n(void 0, g);
    });
    let o;
    i.on("socket", (a) => {
      o = a;
    }), i.setTimeout(this._socketTimeout || 3 * 6e4, () => {
      o && o.end(), n(new Error(`Request timeout: ${e.options.path}`));
    }), i.on("error", function(a) {
      n(a);
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
    s.httpModule = n ? du : mg;
    const i = n ? 443 : 80;
    if (s.options = {}, s.options.host = s.parsedUrl.hostname, s.options.port = s.parsedUrl.port ? parseInt(s.parsedUrl.port) : i, s.options.path = (s.parsedUrl.pathname || "") + (s.parsedUrl.search || ""), s.options.method = e, s.options.headers = this._mergeHeaders(r), this.userAgent != null && (s.options.headers["user-agent"] = this.userAgent), s.options.agent = this._getAgent(s.parsedUrl), this.handlers)
      for (const o of this.handlers)
        o.prepareRequest(s.options);
    return s;
  }
  _mergeHeaders(e) {
    return this.requestOptions && this.requestOptions.headers ? Object.assign({}, wo(this.requestOptions.headers), wo(e || {})) : wo(e || {});
  }
  _getExistingOrDefaultHeader(e, A, r) {
    let s;
    return this.requestOptions && this.requestOptions.headers && (s = wo(this.requestOptions.headers)[A]), e[A] || s || r;
  }
  _getAgent(e) {
    let A;
    const r = Zg.getProxyUrl(e), s = r && r.hostname;
    if (this._keepAlive && s && (A = this._proxyAgent), s || (A = this._agent), A)
      return A;
    const n = e.protocol === "https:";
    let i = 100;
    if (this.requestOptions && (i = this.requestOptions.maxSockets || mg.globalAgent.maxSockets), r && r.hostname) {
      const o = {
        maxSockets: i,
        keepAlive: this._keepAlive,
        proxy: Object.assign(Object.assign({}, (r.username || r.password) && {
          proxyAuth: `${r.username}:${r.password}`
        }), { host: r.hostname, port: r.port })
      };
      let a;
      const g = r.protocol === "https:";
      n ? a = g ? mo.httpsOverHttps : mo.httpsOverHttp : a = g ? mo.httpOverHttps : mo.httpOverHttp, A = a(o), this._proxyAgent = A;
    }
    if (!A) {
      const o = { keepAlive: this._keepAlive, maxSockets: i };
      A = n ? new du.Agent(o) : new mg.Agent(o), this._agent = A;
    }
    return n && this._ignoreSslError && (A.options = Object.assign(A.options || {}, {
      rejectUnauthorized: !1
    })), A;
  }
  _getProxyAgentDispatcher(e, A) {
    let r;
    if (this._keepAlive && (r = this._proxyAgentDispatcher), r)
      return r;
    const s = e.protocol === "https:";
    return r = new HR.ProxyAgent(Object.assign({ uri: A.href, pipelining: this._keepAlive ? 1 : 0 }, (A.username || A.password) && {
      token: `${A.username}:${A.password}`
    })), this._proxyAgentDispatcher = r, s && this._ignoreSslError && (r.options = Object.assign(r.options.requestTls || {}, {
      rejectUnauthorized: !1
    })), r;
  }
  _performExponentialBackoff(e) {
    return je(this, void 0, void 0, function* () {
      e = Math.min(jR, e);
      const A = zR * Math.pow(2, e);
      return new Promise((r) => setTimeout(() => r(), A));
    });
  }
  _processResponse(e, A) {
    return je(this, void 0, void 0, function* () {
      return new Promise((r, s) => je(this, void 0, void 0, function* () {
        const n = e.message.statusCode || 0, i = {
          statusCode: n,
          result: null,
          headers: {}
        };
        n === ct.NotFound && r(i);
        function o(c, E) {
          if (typeof E == "string") {
            const h = new Date(E);
            if (!isNaN(h.valueOf()))
              return h;
          }
          return E;
        }
        let a, g;
        try {
          g = yield e.readBody(), g && g.length > 0 && (A && A.deserializeDates ? a = JSON.parse(g, o) : a = JSON.parse(g), i.result = a), i.headers = e.message.headers;
        } catch {
        }
        if (n > 299) {
          let c;
          a && a.message ? c = a.message : g && g.length > 0 ? c = g : c = `Failed request: (${n})`;
          const E = new Fa(c, n);
          E.result = i.result, s(E);
        } else
          r(i);
      }));
    });
  }
}
CA.HttpClient = $R;
const wo = (t) => Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {});
var Gr = {}, Ml = le && le.__awaiter || function(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function o(c) {
      try {
        g(r.next(c));
      } catch (E) {
        i(E);
      }
    }
    function a(c) {
      try {
        g(r.throw(c));
      } catch (E) {
        i(E);
      }
    }
    function g(c) {
      c.done ? n(c.value) : s(c.value).then(o, a);
    }
    g((r = r.apply(t, e || [])).next());
  });
};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.PersonalAccessTokenCredentialHandler = Gr.BearerCredentialHandler = Gr.BasicCredentialHandler = void 0;
class XR {
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
    return Ml(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.BasicCredentialHandler = XR;
class KR {
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
    return Ml(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.BearerCredentialHandler = KR;
class eD {
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
    return Ml(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.PersonalAccessTokenCredentialHandler = eD;
var fu;
function AD() {
  if (fu)
    return yn;
  fu = 1;
  var t = le && le.__awaiter || function(n, i, o, a) {
    function g(c) {
      return c instanceof o ? c : new o(function(E) {
        E(c);
      });
    }
    return new (o || (o = Promise))(function(c, E) {
      function h(Q) {
        try {
          B(a.next(Q));
        } catch (I) {
          E(I);
        }
      }
      function u(Q) {
        try {
          B(a.throw(Q));
        } catch (I) {
          E(I);
        }
      }
      function B(Q) {
        Q.done ? c(Q.value) : g(Q.value).then(h, u);
      }
      B((a = a.apply(n, i || [])).next());
    });
  };
  Object.defineProperty(yn, "__esModule", { value: !0 }), yn.OidcClient = void 0;
  const e = CA, A = Gr, r = VB();
  class s {
    static createHttpClient(i = !0, o = 10) {
      const a = {
        allowRetries: i,
        maxRetries: o
      };
      return new e.HttpClient("actions/oidc-client", [new A.BearerCredentialHandler(s.getRequestToken())], a);
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
      var o;
      return t(this, void 0, void 0, function* () {
        const c = (o = (yield s.createHttpClient().getJson(i).catch((E) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${E.statusCode}
 
        Error Message: ${E.message}`);
        })).result) === null || o === void 0 ? void 0 : o.value;
        if (!c)
          throw new Error("Response json body do not have ID Token field");
        return c;
      });
    }
    static getIDToken(i) {
      return t(this, void 0, void 0, function* () {
        try {
          let o = s.getIDTokenUrl();
          if (i) {
            const g = encodeURIComponent(i);
            o = `${o}&audience=${g}`;
          }
          r.debug(`ID token url is ${o}`);
          const a = yield s.getCall(o);
          return r.setSecret(a), a;
        } catch (o) {
          throw new Error(`Error message: ${o.message}`);
        }
      });
    }
  }
  return yn.OidcClient = s, yn;
}
var wg = {}, pu;
function mu() {
  return pu || (pu = 1, function(t) {
    var e = le && le.__awaiter || function(g, c, E, h) {
      function u(B) {
        return B instanceof E ? B : new E(function(Q) {
          Q(B);
        });
      }
      return new (E || (E = Promise))(function(B, Q) {
        function I(d) {
          try {
            C(h.next(d));
          } catch (w) {
            Q(w);
          }
        }
        function f(d) {
          try {
            C(h.throw(d));
          } catch (w) {
            Q(w);
          }
        }
        function C(d) {
          d.done ? B(d.value) : u(d.value).then(I, f);
        }
        C((h = h.apply(g, c || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.summary = t.markdownSummary = t.SUMMARY_DOCS_URL = t.SUMMARY_ENV_VAR = void 0;
    const A = xi, r = oQ, { access: s, appendFile: n, writeFile: i } = r.promises;
    t.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY", t.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
    class o {
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
          const c = process.env[t.SUMMARY_ENV_VAR];
          if (!c)
            throw new Error(`Unable to find environment variable for $${t.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
          try {
            yield s(c, r.constants.R_OK | r.constants.W_OK);
          } catch {
            throw new Error(`Unable to access summary file: '${c}'. Check if the file has correct read/write permissions.`);
          }
          return this._filePath = c, this._filePath;
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
      wrap(c, E, h = {}) {
        const u = Object.entries(h).map(([B, Q]) => ` ${B}="${Q}"`).join("");
        return E ? `<${c}${u}>${E}</${c}>` : `<${c}${u}>`;
      }
      /**
       * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
       *
       * @param {SummaryWriteOptions} [options] (optional) options for write operation
       *
       * @returns {Promise<Summary>} summary instance
       */
      write(c) {
        return e(this, void 0, void 0, function* () {
          const E = !!(c != null && c.overwrite), h = yield this.filePath();
          return yield (E ? i : n)(h, this._buffer, { encoding: "utf8" }), this.emptyBuffer();
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
      addRaw(c, E = !1) {
        return this._buffer += c, E ? this.addEOL() : this;
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
      addCodeBlock(c, E) {
        const h = Object.assign({}, E && { lang: E }), u = this.wrap("pre", this.wrap("code", c), h);
        return this.addRaw(u).addEOL();
      }
      /**
       * Adds an HTML list to the summary buffer
       *
       * @param {string[]} items list of items to render
       * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
       *
       * @returns {Summary} summary instance
       */
      addList(c, E = !1) {
        const h = E ? "ol" : "ul", u = c.map((Q) => this.wrap("li", Q)).join(""), B = this.wrap(h, u);
        return this.addRaw(B).addEOL();
      }
      /**
       * Adds an HTML table to the summary buffer
       *
       * @param {SummaryTableCell[]} rows table rows
       *
       * @returns {Summary} summary instance
       */
      addTable(c) {
        const E = c.map((u) => {
          const B = u.map((Q) => {
            if (typeof Q == "string")
              return this.wrap("td", Q);
            const { header: I, data: f, colspan: C, rowspan: d } = Q, w = I ? "th" : "td", p = Object.assign(Object.assign({}, C && { colspan: C }), d && { rowspan: d });
            return this.wrap(w, f, p);
          }).join("");
          return this.wrap("tr", B);
        }).join(""), h = this.wrap("table", E);
        return this.addRaw(h).addEOL();
      }
      /**
       * Adds a collapsable HTML details element to the summary buffer
       *
       * @param {string} label text for the closed state
       * @param {string} content collapsable content
       *
       * @returns {Summary} summary instance
       */
      addDetails(c, E) {
        const h = this.wrap("details", this.wrap("summary", c) + E);
        return this.addRaw(h).addEOL();
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
      addImage(c, E, h) {
        const { width: u, height: B } = h || {}, Q = Object.assign(Object.assign({}, u && { width: u }), B && { height: B }), I = this.wrap("img", null, Object.assign({ src: c, alt: E }, Q));
        return this.addRaw(I).addEOL();
      }
      /**
       * Adds an HTML section heading element
       *
       * @param {string} text heading text
       * @param {number | string} [level=1] (optional) the heading level, default: 1
       *
       * @returns {Summary} summary instance
       */
      addHeading(c, E) {
        const h = `h${E}`, u = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(h) ? h : "h1", B = this.wrap(u, c);
        return this.addRaw(B).addEOL();
      }
      /**
       * Adds an HTML thematic break (<hr>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addSeparator() {
        const c = this.wrap("hr", null);
        return this.addRaw(c).addEOL();
      }
      /**
       * Adds an HTML line break (<br>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addBreak() {
        const c = this.wrap("br", null);
        return this.addRaw(c).addEOL();
      }
      /**
       * Adds an HTML blockquote to the summary buffer
       *
       * @param {string} text quote text
       * @param {string} cite (optional) citation url
       *
       * @returns {Summary} summary instance
       */
      addQuote(c, E) {
        const h = Object.assign({}, E && { cite: E }), u = this.wrap("blockquote", c, h);
        return this.addRaw(u).addEOL();
      }
      /**
       * Adds an HTML anchor tag to the summary buffer
       *
       * @param {string} text link text/content
       * @param {string} href hyperlink
       *
       * @returns {Summary} summary instance
       */
      addLink(c, E) {
        const h = this.wrap("a", c, { href: E });
        return this.addRaw(h).addEOL();
      }
    }
    const a = new o();
    t.markdownSummary = a, t.summary = a;
  }(wg)), wg;
}
var zt = {}, wu;
function tD() {
  if (wu)
    return zt;
  wu = 1;
  var t = le && le.__createBinding || (Object.create ? function(o, a, g, c) {
    c === void 0 && (c = g), Object.defineProperty(o, c, { enumerable: !0, get: function() {
      return a[g];
    } });
  } : function(o, a, g, c) {
    c === void 0 && (c = g), o[c] = a[g];
  }), e = le && le.__setModuleDefault || (Object.create ? function(o, a) {
    Object.defineProperty(o, "default", { enumerable: !0, value: a });
  } : function(o, a) {
    o.default = a;
  }), A = le && le.__importStar || function(o) {
    if (o && o.__esModule)
      return o;
    var a = {};
    if (o != null)
      for (var g in o)
        g !== "default" && Object.hasOwnProperty.call(o, g) && t(a, o, g);
    return e(a, o), a;
  };
  Object.defineProperty(zt, "__esModule", { value: !0 }), zt.toPlatformPath = zt.toWin32Path = zt.toPosixPath = void 0;
  const r = A(aQ);
  function s(o) {
    return o.replace(/[\\]/g, "/");
  }
  zt.toPosixPath = s;
  function n(o) {
    return o.replace(/[/]/g, "\\");
  }
  zt.toWin32Path = n;
  function i(o) {
    return o.replace(/[/\\]/g, r.sep);
  }
  return zt.toPlatformPath = i, zt;
}
var yu;
function VB() {
  return yu || (yu = 1, function(t) {
    var e = le && le.__createBinding || (Object.create ? function(b, V, N, S) {
      S === void 0 && (S = N), Object.defineProperty(b, S, { enumerable: !0, get: function() {
        return V[N];
      } });
    } : function(b, V, N, S) {
      S === void 0 && (S = N), b[S] = V[N];
    }), A = le && le.__setModuleDefault || (Object.create ? function(b, V) {
      Object.defineProperty(b, "default", { enumerable: !0, value: V });
    } : function(b, V) {
      b.default = V;
    }), r = le && le.__importStar || function(b) {
      if (b && b.__esModule)
        return b;
      var V = {};
      if (b != null)
        for (var N in b)
          N !== "default" && Object.hasOwnProperty.call(b, N) && e(V, b, N);
      return A(V, b), V;
    }, s = le && le.__awaiter || function(b, V, N, S) {
      function k(v) {
        return v instanceof N ? v : new N(function(M) {
          M(v);
        });
      }
      return new (N || (N = Promise))(function(v, M) {
        function P(O) {
          try {
            Z(S.next(O));
          } catch (oe) {
            M(oe);
          }
        }
        function j(O) {
          try {
            Z(S.throw(O));
          } catch (oe) {
            M(oe);
          }
        }
        function Z(O) {
          O.done ? v(O.value) : k(O.value).then(P, j);
        }
        Z((S = S.apply(b, V || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getIDToken = t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.notice = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
    const n = on, i = an, o = xr, a = r(xi), g = r(aQ), c = AD();
    var E;
    (function(b) {
      b[b.Success = 0] = "Success", b[b.Failure = 1] = "Failure";
    })(E = t.ExitCode || (t.ExitCode = {}));
    function h(b, V) {
      const N = o.toCommandValue(V);
      if (process.env[b] = N, process.env.GITHUB_ENV || "")
        return i.issueFileCommand("ENV", i.prepareKeyValueMessage(b, V));
      n.issueCommand("set-env", { name: b }, N);
    }
    t.exportVariable = h;
    function u(b) {
      n.issueCommand("add-mask", {}, b);
    }
    t.setSecret = u;
    function B(b) {
      process.env.GITHUB_PATH || "" ? i.issueFileCommand("PATH", b) : n.issueCommand("add-path", {}, b), process.env.PATH = `${b}${g.delimiter}${process.env.PATH}`;
    }
    t.addPath = B;
    function Q(b, V) {
      const N = process.env[`INPUT_${b.replace(/ /g, "_").toUpperCase()}`] || "";
      if (V && V.required && !N)
        throw new Error(`Input required and not supplied: ${b}`);
      return V && V.trimWhitespace === !1 ? N : N.trim();
    }
    t.getInput = Q;
    function I(b, V) {
      const N = Q(b, V).split(`
`).filter((S) => S !== "");
      return V && V.trimWhitespace === !1 ? N : N.map((S) => S.trim());
    }
    t.getMultilineInput = I;
    function f(b, V) {
      const N = ["true", "True", "TRUE"], S = ["false", "False", "FALSE"], k = Q(b, V);
      if (N.includes(k))
        return !0;
      if (S.includes(k))
        return !1;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${b}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    t.getBooleanInput = f;
    function C(b, V) {
      if (process.env.GITHUB_OUTPUT || "")
        return i.issueFileCommand("OUTPUT", i.prepareKeyValueMessage(b, V));
      process.stdout.write(a.EOL), n.issueCommand("set-output", { name: b }, o.toCommandValue(V));
    }
    t.setOutput = C;
    function d(b) {
      n.issue("echo", b ? "on" : "off");
    }
    t.setCommandEcho = d;
    function w(b) {
      process.exitCode = E.Failure, R(b);
    }
    t.setFailed = w;
    function p() {
      return process.env.RUNNER_DEBUG === "1";
    }
    t.isDebug = p;
    function m(b) {
      n.issueCommand("debug", {}, b);
    }
    t.debug = m;
    function R(b, V = {}) {
      n.issueCommand("error", o.toCommandProperties(V), b instanceof Error ? b.toString() : b);
    }
    t.error = R;
    function D(b, V = {}) {
      n.issueCommand("warning", o.toCommandProperties(V), b instanceof Error ? b.toString() : b);
    }
    t.warning = D;
    function G(b, V = {}) {
      n.issueCommand("notice", o.toCommandProperties(V), b instanceof Error ? b.toString() : b);
    }
    t.notice = G;
    function H(b) {
      process.stdout.write(b + a.EOL);
    }
    t.info = H;
    function x(b) {
      n.issue("group", b);
    }
    t.startGroup = x;
    function te() {
      n.issue("endgroup");
    }
    t.endGroup = te;
    function ee(b, V) {
      return s(this, void 0, void 0, function* () {
        x(b);
        let N;
        try {
          N = yield V();
        } finally {
          te();
        }
        return N;
      });
    }
    t.group = ee;
    function Ee(b, V) {
      if (process.env.GITHUB_STATE || "")
        return i.issueFileCommand("STATE", i.prepareKeyValueMessage(b, V));
      n.issueCommand("save-state", { name: b }, o.toCommandValue(V));
    }
    t.saveState = Ee;
    function q(b) {
      return process.env[`STATE_${b}`] || "";
    }
    t.getState = q;
    function $(b) {
      return s(this, void 0, void 0, function* () {
        return yield c.OidcClient.getIDToken(b);
      });
    }
    t.getIDToken = $;
    var se = mu();
    Object.defineProperty(t, "summary", { enumerable: !0, get: function() {
      return se.summary;
    } });
    var ie = mu();
    Object.defineProperty(t, "markdownSummary", { enumerable: !0, get: function() {
      return ie.markdownSummary;
    } });
    var K = tD();
    Object.defineProperty(t, "toPosixPath", { enumerable: !0, get: function() {
      return K.toPosixPath;
    } }), Object.defineProperty(t, "toWin32Path", { enumerable: !0, get: function() {
      return K.toWin32Path;
    } }), Object.defineProperty(t, "toPlatformPath", { enumerable: !0, get: function() {
      return K.toPlatformPath;
    } });
  }(Wa)), Wa;
}
var WB = VB();
function rD(t) {
  return t === null ? null : t.split(xi.EOL).map((e) => e.trim()).filter(Boolean);
}
const sD = {
  parseList: rD
}, zi = (t, e) => {
  const A = WB.getInput(t, e);
  return !(e != null && e.required) && A === "" ? null : A;
};
function nD(t, e) {
  const A = zi(t, e);
  return A === "true" ? !0 : A === "false" ? !1 : null;
}
function iD(t, e) {
  const A = zi(t, e);
  return typeof A == "string" ? parseInt(A, 10) : null;
}
function oD(t, e) {
  return zi(t, e);
}
function aD(t, e) {
  return sD.parseList(zi(t, e));
}
const cD = (t) => zi(t) !== null, ze = {
  getInputAsBoolean: nD,
  getInputAsInteger: iD,
  getInputAsString: oD,
  getInputAsStrings: aD,
  hasInput: cD
}, gD = (t) => Cl.cleanEnv(process.env, t, {
  reporter: ({ errors: e }) => {
    const A = Object.keys(e);
    if (A.length > 0)
      throw new Error(`Missing env(s): ${A.join(", ")}`);
  }
}), lD = {
  requireEnv: gD
}, hD = (t) => CQ(`git ls-files --exclude-standard --others ${t} | wc -l`).toString().trim() === "1", ED = (t) => CQ(`git diff --shortstat ${t} | wc -l`).toString().trim() === "1", Ru = {
  isFileUntracked: hD,
  isFileChanged: ED
}, uD = (t, e) => Object.values(t)[0] === e ? {} : t, Ue = uD;
var QD = qB;
function qB(t, e, A) {
  t instanceof RegExp && (t = Du(t, A)), e instanceof RegExp && (e = Du(e, A));
  var r = jB(t, e, A);
  return r && {
    start: r[0],
    end: r[1],
    pre: A.slice(0, r[0]),
    body: A.slice(r[0] + t.length, r[1]),
    post: A.slice(r[1] + e.length)
  };
}
function Du(t, e) {
  var A = e.match(t);
  return A ? A[0] : null;
}
qB.range = jB;
function jB(t, e, A) {
  var r, s, n, i, o, a = A.indexOf(t), g = A.indexOf(e, a + 1), c = a;
  if (a >= 0 && g > 0) {
    if (t === e)
      return [a, g];
    for (r = [], n = A.length; c >= 0 && !o; )
      c == a ? (r.push(c), a = A.indexOf(t, c + 1)) : r.length == 1 ? o = [r.pop(), g] : (s = r.pop(), s < n && (n = s, i = g), g = A.indexOf(e, c + 1)), c = a < g && a >= 0 ? a : g;
    r.length && (o = [n, i]);
  }
  return o;
}
var zB = QD, CD = dD, ZB = "\0SLASH" + Math.random() + "\0", $B = "\0OPEN" + Math.random() + "\0", Gl = "\0CLOSE" + Math.random() + "\0", XB = "\0COMMA" + Math.random() + "\0", KB = "\0PERIOD" + Math.random() + "\0";
function yg(t) {
  return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
}
function BD(t) {
  return t.split("\\\\").join(ZB).split("\\{").join($B).split("\\}").join(Gl).split("\\,").join(XB).split("\\.").join(KB);
}
function ID(t) {
  return t.split(ZB).join("\\").split($B).join("{").split(Gl).join("}").split(XB).join(",").split(KB).join(".");
}
function eI(t) {
  if (!t)
    return [""];
  var e = [], A = zB("{", "}", t);
  if (!A)
    return t.split(",");
  var r = A.pre, s = A.body, n = A.post, i = r.split(",");
  i[i.length - 1] += "{" + s + "}";
  var o = eI(n);
  return n.length && (i[i.length - 1] += o.shift(), i.push.apply(i, o)), e.push.apply(e, i), e;
}
function dD(t) {
  return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), Wn(BD(t), !0).map(ID)) : [];
}
function fD(t) {
  return "{" + t + "}";
}
function pD(t) {
  return /^-?0\d/.test(t);
}
function mD(t, e) {
  return t <= e;
}
function wD(t, e) {
  return t >= e;
}
function Wn(t, e) {
  var A = [], r = zB("{", "}", t);
  if (!r)
    return [t];
  var s = r.pre, n = r.post.length ? Wn(r.post, !1) : [""];
  if (/\$$/.test(r.pre))
    for (var i = 0; i < n.length; i++) {
      var o = s + "{" + r.body + "}" + n[i];
      A.push(o);
    }
  else {
    var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body), g = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body), c = a || g, E = r.body.indexOf(",") >= 0;
    if (!c && !E)
      return r.post.match(/,.*\}/) ? (t = r.pre + "{" + r.body + Gl + r.post, Wn(t)) : [t];
    var h;
    if (c)
      h = r.body.split(/\.\./);
    else if (h = eI(r.body), h.length === 1 && (h = Wn(h[0], !1).map(fD), h.length === 1))
      return n.map(function(H) {
        return r.pre + h[0] + H;
      });
    var u;
    if (c) {
      var B = yg(h[0]), Q = yg(h[1]), I = Math.max(h[0].length, h[1].length), f = h.length == 3 ? Math.abs(yg(h[2])) : 1, C = mD, d = Q < B;
      d && (f *= -1, C = wD);
      var w = h.some(pD);
      u = [];
      for (var p = B; C(p, Q); p += f) {
        var m;
        if (g)
          m = String.fromCharCode(p), m === "\\" && (m = "");
        else if (m = String(p), w) {
          var R = I - m.length;
          if (R > 0) {
            var D = new Array(R + 1).join("0");
            p < 0 ? m = "-" + D + m.slice(1) : m = D + m;
          }
        }
        u.push(m);
      }
    } else {
      u = [];
      for (var G = 0; G < h.length; G++)
        u.push.apply(u, Wn(h[G], !1));
    }
    for (var G = 0; G < u.length; G++)
      for (var i = 0; i < n.length; i++) {
        var o = s + u[G] + n[i];
        (!e || c || o) && A.push(o);
      }
  }
  return A;
}
const yD = /* @__PURE__ */ Ql(CD), RD = 1024 * 64, Ko = (t) => {
  if (typeof t != "string")
    throw new TypeError("invalid pattern");
  if (t.length > RD)
    throw new TypeError("pattern is too long");
}, DD = {
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
}, vn = (t) => t.replace(/[[\]\\-]/g, "\\$&"), bD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), bu = (t) => t.join(""), kD = (t, e) => {
  const A = e;
  if (t.charAt(A) !== "[")
    throw new Error("not in a brace expression");
  const r = [], s = [];
  let n = A + 1, i = !1, o = !1, a = !1, g = !1, c = A, E = "";
  e:
    for (; n < t.length; ) {
      const Q = t.charAt(n);
      if ((Q === "!" || Q === "^") && n === A + 1) {
        g = !0, n++;
        continue;
      }
      if (Q === "]" && i && !a) {
        c = n + 1;
        break;
      }
      if (i = !0, Q === "\\" && !a) {
        a = !0, n++;
        continue;
      }
      if (Q === "[" && !a) {
        for (const [I, [f, C, d]] of Object.entries(DD))
          if (t.startsWith(I, n)) {
            if (E)
              return ["$.", !1, t.length - A, !0];
            n += I.length, d ? s.push(f) : r.push(f), o = o || C;
            continue e;
          }
      }
      if (a = !1, E) {
        Q > E ? r.push(vn(E) + "-" + vn(Q)) : Q === E && r.push(vn(Q)), E = "", n++;
        continue;
      }
      if (t.startsWith("-]", n + 1)) {
        r.push(vn(Q + "-")), n += 2;
        continue;
      }
      if (t.startsWith("-", n + 1)) {
        E = Q, n += 2;
        continue;
      }
      r.push(vn(Q)), n++;
    }
  if (c < n)
    return ["", !1, 0, !1];
  if (!r.length && !s.length)
    return ["$.", !1, t.length - A, !0];
  if (s.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !g) {
    const Q = r[0].length === 2 ? r[0].slice(-1) : r[0];
    return [bD(Q), !1, c - A, !1];
  }
  const h = "[" + (g ? "^" : "") + bu(r) + "]", u = "[" + (g ? "" : "^") + bu(s) + "]";
  return [r.length && s.length ? "(" + h + "|" + u + ")" : r.length ? h : u, o, c - A, !0];
}, xs = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/\[([^\/\\])\]/g, "$1") : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), SD = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), ku = (t) => SD.has(t), FD = "(?!(?:^|/)\\.\\.?(?:$|/))", yo = "(?!\\.)", ND = /* @__PURE__ */ new Set(["[", "."]), UD = /* @__PURE__ */ new Set(["..", "."]), TD = new Set("().*{}+?[]^$\\!"), LD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Yl = "[^/]", Su = Yl + "*?", Fu = Yl + "+?";
var sA, hA, Kt, Ge, Xe, br, ns, kr, er, is, si, ia, AI, Hs, Yo, ni, $g, oa, tI;
const SA = class SA {
  constructor(e, A, r = {}) {
    T(this, ia);
    T(this, ni);
    L(this, "type");
    T(this, sA, void 0);
    T(this, hA, void 0);
    T(this, Kt, !1);
    T(this, Ge, []);
    T(this, Xe, void 0);
    T(this, br, void 0);
    T(this, ns, void 0);
    T(this, kr, !1);
    T(this, er, void 0);
    T(this, is, void 0);
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    T(this, si, !1);
    this.type = e, e && y(this, hA, !0), y(this, Xe, A), y(this, sA, l(this, Xe) ? l(l(this, Xe), sA) : this), y(this, er, l(this, sA) === this ? r : l(l(this, sA), er)), y(this, ns, l(this, sA) === this ? [] : l(l(this, sA), ns)), e === "!" && !l(l(this, sA), kr) && l(this, ns).push(this), y(this, br, l(this, Xe) ? l(l(this, Xe), Ge).length : 0);
  }
  get hasMagic() {
    if (l(this, hA) !== void 0)
      return l(this, hA);
    for (const e of l(this, Ge))
      if (typeof e != "string" && (e.type || e.hasMagic))
        return y(this, hA, !0);
    return l(this, hA);
  }
  // reconstructs the pattern
  toString() {
    return l(this, is) !== void 0 ? l(this, is) : this.type ? y(this, is, this.type + "(" + l(this, Ge).map((e) => String(e)).join("|") + ")") : y(this, is, l(this, Ge).map((e) => String(e)).join(""));
  }
  push(...e) {
    for (const A of e)
      if (A !== "") {
        if (typeof A != "string" && !(A instanceof SA && l(A, Xe) === this))
          throw new Error("invalid part: " + A);
        l(this, Ge).push(A);
      }
  }
  toJSON() {
    var A;
    const e = this.type === null ? l(this, Ge).slice().map((r) => typeof r == "string" ? r : r.toJSON()) : [this.type, ...l(this, Ge).map((r) => r.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === l(this, sA) || l(l(this, sA), kr) && ((A = l(this, Xe)) == null ? void 0 : A.type) === "!") && e.push({}), e;
  }
  isStart() {
    var A;
    if (l(this, sA) === this)
      return !0;
    if (!((A = l(this, Xe)) != null && A.isStart()))
      return !1;
    if (l(this, br) === 0)
      return !0;
    const e = l(this, Xe);
    for (let r = 0; r < l(this, br); r++) {
      const s = l(e, Ge)[r];
      if (!(s instanceof SA && s.type === "!"))
        return !1;
    }
    return !0;
  }
  isEnd() {
    var A, r, s;
    if (l(this, sA) === this || ((A = l(this, Xe)) == null ? void 0 : A.type) === "!")
      return !0;
    if (!((r = l(this, Xe)) != null && r.isEnd()))
      return !1;
    if (!this.type)
      return (s = l(this, Xe)) == null ? void 0 : s.isEnd();
    const e = l(this, Xe) ? l(l(this, Xe), Ge).length : 0;
    return l(this, br) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const A = new SA(this.type, e);
    for (const r of l(this, Ge))
      A.copyIn(r);
    return A;
  }
  static fromGlob(e, A = {}) {
    var s;
    const r = new SA(null, void 0, A);
    return J(s = SA, Hs, Yo).call(s, e, r, 0, A), r;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== l(this, sA))
      return l(this, sA).toMMPattern();
    const e = this.toString(), [A, r, s, n] = this.toRegExpSource();
    if (!(s || l(this, hA) || l(this, er).nocase && !l(this, er).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase()))
      return r;
    const o = (l(this, er).nocase ? "i" : "") + (n ? "u" : "");
    return Object.assign(new RegExp(`^${A}$`, o), {
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
    var a;
    const A = e ?? !!l(this, er).dot;
    if (l(this, sA) === this && J(this, ia, AI).call(this), !this.type) {
      const g = this.isStart() && this.isEnd(), c = l(this, Ge).map((B) => {
        var d;
        const [Q, I, f, C] = typeof B == "string" ? J(d = SA, oa, tI).call(d, B, l(this, hA), g) : B.toRegExpSource(e);
        return y(this, hA, l(this, hA) || f), y(this, Kt, l(this, Kt) || C), Q;
      }).join("");
      let E = "";
      if (this.isStart() && typeof l(this, Ge)[0] == "string" && !(l(this, Ge).length === 1 && UD.has(l(this, Ge)[0]))) {
        const Q = ND, I = (
          // dots are allowed, and the pattern starts with [ or .
          A && Q.has(c.charAt(0)) || // the pattern starts with \., and then [ or .
          c.startsWith("\\.") && Q.has(c.charAt(2)) || // the pattern starts with \.\., and then [ or .
          c.startsWith("\\.\\.") && Q.has(c.charAt(4))
        ), f = !A && !e && Q.has(c.charAt(0));
        E = I ? FD : f ? yo : "";
      }
      let h = "";
      return this.isEnd() && l(l(this, sA), kr) && ((a = l(this, Xe)) == null ? void 0 : a.type) === "!" && (h = "(?:$|\\/)"), [
        E + c + h,
        xs(c),
        y(this, hA, !!l(this, hA)),
        l(this, Kt)
      ];
    }
    const r = this.type === "*" || this.type === "+", s = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let n = J(this, ni, $g).call(this, A);
    if (this.isStart() && this.isEnd() && !n && this.type !== "!") {
      const g = this.toString();
      return y(this, Ge, [g]), this.type = null, y(this, hA, void 0), [g, xs(this.toString()), !1, !1];
    }
    let i = !r || e || A || !yo ? "" : J(this, ni, $g).call(this, !0);
    i === n && (i = ""), i && (n = `(?:${n})(?:${i})*?`);
    let o = "";
    if (this.type === "!" && l(this, si))
      o = (this.isStart() && !A ? yo : "") + Fu;
    else {
      const g = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !A && !e ? yo : "") + Su + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && i ? ")" : this.type === "*" && i ? ")?" : `)${this.type}`;
      o = s + n + g;
    }
    return [
      o,
      xs(n),
      y(this, hA, !!l(this, hA)),
      l(this, Kt)
    ];
  }
};
sA = new WeakMap(), hA = new WeakMap(), Kt = new WeakMap(), Ge = new WeakMap(), Xe = new WeakMap(), br = new WeakMap(), ns = new WeakMap(), kr = new WeakMap(), er = new WeakMap(), is = new WeakMap(), si = new WeakMap(), ia = new WeakSet(), AI = function() {
  if (this !== l(this, sA))
    throw new Error("should only call on root");
  if (l(this, kr))
    return this;
  this.toString(), y(this, kr, !0);
  let e;
  for (; e = l(this, ns).pop(); ) {
    if (e.type !== "!")
      continue;
    let A = e, r = l(A, Xe);
    for (; r; ) {
      for (let s = l(A, br) + 1; !r.type && s < l(r, Ge).length; s++)
        for (const n of l(e, Ge)) {
          if (typeof n == "string")
            throw new Error("string part in extglob AST??");
          n.copyIn(l(r, Ge)[s]);
        }
      A = r, r = l(A, Xe);
    }
  }
  return this;
}, Hs = new WeakSet(), Yo = function(e, A, r, s) {
  var u, B;
  let n = !1, i = !1, o = -1, a = !1;
  if (A.type === null) {
    let Q = r, I = "";
    for (; Q < e.length; ) {
      const f = e.charAt(Q++);
      if (n || f === "\\") {
        n = !n, I += f;
        continue;
      }
      if (i) {
        Q === o + 1 ? (f === "^" || f === "!") && (a = !0) : f === "]" && !(Q === o + 2 && a) && (i = !1), I += f;
        continue;
      } else if (f === "[") {
        i = !0, o = Q, a = !1, I += f;
        continue;
      }
      if (!s.noext && ku(f) && e.charAt(Q) === "(") {
        A.push(I), I = "";
        const C = new SA(f, A);
        Q = J(u = SA, Hs, Yo).call(u, e, C, Q, s), A.push(C);
        continue;
      }
      I += f;
    }
    return A.push(I), Q;
  }
  let g = r + 1, c = new SA(null, A);
  const E = [];
  let h = "";
  for (; g < e.length; ) {
    const Q = e.charAt(g++);
    if (n || Q === "\\") {
      n = !n, h += Q;
      continue;
    }
    if (i) {
      g === o + 1 ? (Q === "^" || Q === "!") && (a = !0) : Q === "]" && !(g === o + 2 && a) && (i = !1), h += Q;
      continue;
    } else if (Q === "[") {
      i = !0, o = g, a = !1, h += Q;
      continue;
    }
    if (ku(Q) && e.charAt(g) === "(") {
      c.push(h), h = "";
      const I = new SA(Q, c);
      c.push(I), g = J(B = SA, Hs, Yo).call(B, e, I, g, s);
      continue;
    }
    if (Q === "|") {
      c.push(h), h = "", E.push(c), c = new SA(null, A);
      continue;
    }
    if (Q === ")")
      return h === "" && l(A, Ge).length === 0 && y(A, si, !0), c.push(h), h = "", A.push(...E, c), g;
    h += Q;
  }
  return A.type = null, y(A, hA, void 0), y(A, Ge, [e.substring(r - 1)]), g;
}, ni = new WeakSet(), $g = function(e) {
  return l(this, Ge).map((A) => {
    if (typeof A == "string")
      throw new Error("string type in extglob ast??");
    const [r, s, n, i] = A.toRegExpSource(e);
    return y(this, Kt, l(this, Kt) || i), r;
  }).filter((A) => !(this.isStart() && this.isEnd()) || !!A).join("|");
}, oa = new WeakSet(), tI = function(e, A, r = !1) {
  let s = !1, n = "", i = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e.charAt(o);
    if (s) {
      s = !1, n += (TD.has(a) ? "\\" : "") + a;
      continue;
    }
    if (a === "\\") {
      o === e.length - 1 ? n += "\\\\" : s = !0;
      continue;
    }
    if (a === "[") {
      const [g, c, E, h] = kD(e, o);
      if (E) {
        n += g, i = i || c, o += E - 1, A = A || h;
        continue;
      }
    }
    if (a === "*") {
      r && e === "*" ? n += Fu : n += Su, A = !0;
      continue;
    }
    if (a === "?") {
      n += Yl, A = !0;
      continue;
    }
    n += LD(a);
  }
  return [n, xs(e), !!A, i];
}, T(SA, Hs), T(SA, oa);
let ea = SA;
const rI = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&"), OA = (t, e, A = {}) => (Ko(e), !A.nocomment && e.charAt(0) === "#" ? !1 : new Jr(e, A).match(t)), vD = /^\*+([^+@!?\*\[\(]*)$/, MD = (t) => (e) => !e.startsWith(".") && e.endsWith(t), GD = (t) => (e) => e.endsWith(t), YD = (t) => (t = t.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(t)), xD = (t) => (t = t.toLowerCase(), (e) => e.toLowerCase().endsWith(t)), JD = /^\*+\.\*+$/, OD = (t) => !t.startsWith(".") && t.includes("."), _D = (t) => t !== "." && t !== ".." && t.includes("."), HD = /^\.\*+$/, PD = (t) => t !== "." && t !== ".." && t.startsWith("."), VD = /^\*+$/, WD = (t) => t.length !== 0 && !t.startsWith("."), qD = (t) => t.length !== 0 && t !== "." && t !== "..", jD = /^\?+([^+@!?\*\[\(]*)?$/, zD = ([t, e = ""]) => {
  const A = sI([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, ZD = ([t, e = ""]) => {
  const A = nI([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, $D = ([t, e = ""]) => {
  const A = nI([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, XD = ([t, e = ""]) => {
  const A = sI([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, sI = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && !A.startsWith(".");
}, nI = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && A !== "." && A !== "..";
}, iI = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Nu = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, KD = iI === "win32" ? Nu.win32.sep : Nu.posix.sep;
OA.sep = KD;
const YA = Symbol("globstar **");
OA.GLOBSTAR = YA;
const eb = "[^/]", Ab = eb + "*?", tb = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", rb = "(?:(?!(?:\\/|^)\\.).)*?", sb = (t, e = {}) => (A) => OA(A, t, e);
OA.filter = sb;
const it = (t, e = {}) => Object.assign({}, t, e), nb = (t) => {
  if (!t || typeof t != "object" || !Object.keys(t).length)
    return OA;
  const e = OA;
  return Object.assign((r, s, n = {}) => e(r, s, it(t, n)), {
    Minimatch: class extends e.Minimatch {
      constructor(s, n = {}) {
        super(s, it(t, n));
      }
      static defaults(s) {
        return e.defaults(it(t, s)).Minimatch;
      }
    },
    AST: class extends e.AST {
      /* c8 ignore start */
      constructor(s, n, i = {}) {
        super(s, n, it(t, i));
      }
      /* c8 ignore stop */
      static fromGlob(s, n = {}) {
        return e.AST.fromGlob(s, it(t, n));
      }
    },
    unescape: (r, s = {}) => e.unescape(r, it(t, s)),
    escape: (r, s = {}) => e.escape(r, it(t, s)),
    filter: (r, s = {}) => e.filter(r, it(t, s)),
    defaults: (r) => e.defaults(it(t, r)),
    makeRe: (r, s = {}) => e.makeRe(r, it(t, s)),
    braceExpand: (r, s = {}) => e.braceExpand(r, it(t, s)),
    match: (r, s, n = {}) => e.match(r, s, it(t, n)),
    sep: e.sep,
    GLOBSTAR: YA
  });
};
OA.defaults = nb;
const oI = (t, e = {}) => (Ko(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : yD(t));
OA.braceExpand = oI;
const ib = (t, e = {}) => new Jr(t, e).makeRe();
OA.makeRe = ib;
const ob = (t, e, A = {}) => {
  const r = new Jr(e, A);
  return t = t.filter((s) => r.match(s)), r.options.nonull && !t.length && t.push(e), t;
};
OA.match = ob;
const Uu = /[?*]|[+@!]\(.*?\)|\[|\]/, ab = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class Jr {
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
    Ko(e), A = A || {}, this.options = A, this.pattern = e, this.platform = A.platform || iI, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!A.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!A.nonegate, this.comment = !1, this.empty = !1, this.partial = !!A.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = A.windowsNoMagicRoot !== void 0 ? A.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
    let s = this.globParts.map((n, i, o) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const a = n[0] === "" && n[1] === "" && (n[2] === "?" || !Uu.test(n[2])) && !Uu.test(n[3]), g = /^[a-z]:/i.test(n[0]);
        if (a)
          return [...n.slice(0, 4), ...n.slice(4).map((c) => this.parse(c))];
        if (g)
          return [n[0], ...n.slice(1).map((c) => this.parse(c))];
      }
      return n.map((a) => this.parse(a));
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
          let o = r[s + 1];
          const a = r[s + 2], g = r[s + 3];
          if (o !== ".." || !a || a === "." || a === ".." || !g || g === "." || g === "..")
            continue;
          A = !0, r.splice(s, 1);
          const c = r.slice(0);
          c[s] = "**", e.push(c), s--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < r.length - 1; i++) {
            const o = r[i];
            i === 1 && o === "" && r[0] === "" || (o === "." || o === "") && (A = !0, r.splice(i, 1), i--);
          }
          r[0] === "." && r.length === 2 && (r[1] === "." || r[1] === "") && (A = !0, r.pop());
        }
        let n = 0;
        for (; (n = r.indexOf("..", n + 1)) !== -1; ) {
          const i = r[n - 1];
          if (i && i !== "." && i !== ".." && i !== "**") {
            A = !0;
            const a = n === 1 && r[n + 1] === "**" ? ["."] : [];
            r.splice(n - 1, 2, ...a), r.length === 0 && r.push(""), n -= 2;
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
    let s = 0, n = 0, i = [], o = "";
    for (; s < e.length && n < A.length; )
      if (e[s] === A[n])
        i.push(o === "b" ? A[n] : e[s]), s++, n++;
      else if (r && e[s] === "**" && A[n] === e[s + 1])
        i.push(e[s]), s++;
      else if (r && A[n] === "**" && e[s] === A[n + 1])
        i.push(A[n]), n++;
      else if (e[s] === "*" && A[n] && (this.options.dot || !A[n].startsWith(".")) && A[n] !== "**") {
        if (o === "b")
          return !1;
        o = "a", i.push(e[s]), s++, n++;
      } else if (A[n] === "*" && e[s] && (this.options.dot || !e[s].startsWith(".")) && e[s] !== "**") {
        if (o === "a")
          return !1;
        o = "b", i.push(A[n]), s++, n++;
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
      const Q = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), I = !Q && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), f = typeof A[0] == "string" && /^[a-z]:$/i.test(A[0]), C = !f && A[0] === "" && A[1] === "" && A[2] === "?" && typeof A[3] == "string" && /^[a-z]:$/i.test(A[3]), d = I ? 3 : Q ? 0 : void 0, w = C ? 3 : f ? 0 : void 0;
      if (typeof d == "number" && typeof w == "number") {
        const [p, m] = [e[d], A[w]];
        p.toLowerCase() === m.toLowerCase() && (A[w] = p, w > d ? A = A.slice(w) : d > w && (e = e.slice(d)));
      }
    }
    const { optimizationLevel: n = 1 } = this.options;
    n >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: A }), this.debug("matchOne", e.length, A.length);
    for (var i = 0, o = 0, a = e.length, g = A.length; i < a && o < g; i++, o++) {
      this.debug("matchOne loop");
      var c = A[o], E = e[i];
      if (this.debug(A, c, E), c === !1)
        return !1;
      if (c === YA) {
        this.debug("GLOBSTAR", [A, c, E]);
        var h = i, u = o + 1;
        if (u === g) {
          for (this.debug("** at the end"); i < a; i++)
            if (e[i] === "." || e[i] === ".." || !s.dot && e[i].charAt(0) === ".")
              return !1;
          return !0;
        }
        for (; h < a; ) {
          var B = e[h];
          if (this.debug(`
globstar while`, e, h, A, u, B), this.matchOne(e.slice(h), A.slice(u), r))
            return this.debug("globstar found match!", h, a, B), !0;
          if (B === "." || B === ".." || !s.dot && B.charAt(0) === ".") {
            this.debug("dot detected!", e, h, A, u);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), h++;
        }
        return !!(r && (this.debug(`
>>> no match, partial?`, e, h, A, u), h === a));
      }
      let Q;
      if (typeof c == "string" ? (Q = E === c, this.debug("string match", c, E, Q)) : (Q = c.test(E), this.debug("pattern match", c, E, Q)), !Q)
        return !1;
    }
    if (i === a && o === g)
      return !0;
    if (i === a)
      return r;
    if (o === g)
      return i === a - 1 && e[i] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return oI(this.pattern, this.options);
  }
  parse(e) {
    Ko(e);
    const A = this.options;
    if (e === "**")
      return YA;
    if (e === "")
      return "";
    let r, s = null;
    (r = e.match(VD)) ? s = A.dot ? qD : WD : (r = e.match(vD)) ? s = (A.nocase ? A.dot ? xD : YD : A.dot ? GD : MD)(r[1]) : (r = e.match(jD)) ? s = (A.nocase ? A.dot ? ZD : zD : A.dot ? $D : XD)(r) : (r = e.match(JD)) ? s = A.dot ? _D : OD : (r = e.match(HD)) && (s = PD);
    const n = ea.fromGlob(e, this.options).toMMPattern();
    return s ? Object.assign(n, { test: s }) : n;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1)
      return this.regexp;
    const e = this.set;
    if (!e.length)
      return this.regexp = !1, this.regexp;
    const A = this.options, r = A.noglobstar ? Ab : A.dot ? tb : rb, s = new Set(A.nocase ? ["i"] : []);
    let n = e.map((a) => {
      const g = a.map((c) => {
        if (c instanceof RegExp)
          for (const E of c.flags.split(""))
            s.add(E);
        return typeof c == "string" ? ab(c) : c === YA ? YA : c._src;
      });
      return g.forEach((c, E) => {
        const h = g[E + 1], u = g[E - 1];
        c !== YA || u === YA || (u === void 0 ? h !== void 0 && h !== YA ? g[E + 1] = "(?:\\/|" + r + "\\/)?" + h : g[E] = r : h === void 0 ? g[E - 1] = u + "(?:\\/|" + r + ")?" : h !== YA && (g[E - 1] = u + "(?:\\/|\\/" + r + "\\/)" + h, g[E + 1] = YA));
      }), g.filter((c) => c !== YA).join("/");
    }).join("|");
    const [i, o] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    n = "^" + i + n + o + "$", this.negate && (n = "^(?!" + n + ").+$");
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
      for (let o = s.length - 2; !i && o >= 0; o--)
        i = s[o];
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let g = s;
      if (r.matchBase && a.length === 1 && (g = [i]), this.matchOne(g, a, A))
        return r.flipNegate ? !0 : !this.negate;
    }
    return r.flipNegate ? !1 : this.negate;
  }
  static defaults(e) {
    return OA.defaults(e).Minimatch;
  }
}
OA.AST = ea;
OA.Minimatch = Jr;
OA.escape = rI;
OA.unescape = xs;
const Ts = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, aI = /* @__PURE__ */ new Set(), Xg = typeof process == "object" && process ? process : {}, cI = (t, e, A, r) => {
  typeof Xg.emitWarning == "function" ? Xg.emitWarning(t, e, A, r) : console.error(`[${A}] ${e}: ${t}`);
};
let Aa = globalThis.AbortController, Tu = globalThis.AbortSignal;
var iQ;
if (typeof Aa > "u") {
  Tu = class {
    constructor() {
      L(this, "onabort");
      L(this, "_onabort", []);
      L(this, "reason");
      L(this, "aborted", !1);
    }
    addEventListener(r, s) {
      this._onabort.push(s);
    }
  }, Aa = class {
    constructor() {
      L(this, "signal", new Tu());
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
  let t = ((iQ = Xg.env) == null ? void 0 : iQ.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const e = () => {
    t && (t = !1, cI("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
  };
}
const cb = (t) => !aI.has(t), Ir = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t), gI = (t) => Ir(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? xo : null : null;
class xo extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
var Ps;
const ts = class ts {
  constructor(e, A) {
    L(this, "heap");
    L(this, "length");
    if (!l(ts, Ps))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new A(e), this.length = 0;
  }
  static create(e) {
    const A = gI(e);
    if (!A)
      return [];
    y(ts, Ps, !0);
    const r = new ts(e, A);
    return y(ts, Ps, !1), r;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
Ps = new WeakMap(), // private constructor
T(ts, Ps, !1);
let Kg = ts;
var Ct, zA, Bt, It, Vs, nA, dt, Ke, Ne, ge, vA, ZA, FA, EA, ft, uA, pt, mt, $A, wt, Sr, MA, ii, el, os, Ar, oi, XA, aa, lI, as, Ws, ai, Tt, dr, Lt, fr, ci, Al, nS, qs, Jo, js, Oo, Re, Fe, gi, tl, cs, qn;
const Wl = class Wl {
  constructor(e) {
    T(this, ii);
    T(this, aa);
    T(this, Tt);
    T(this, Lt);
    T(this, ci);
    T(this, qs);
    T(this, js);
    T(this, Re);
    T(this, gi);
    T(this, cs);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    T(this, Ct, void 0);
    T(this, zA, void 0);
    T(this, Bt, void 0);
    T(this, It, void 0);
    T(this, Vs, void 0);
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
    T(this, nA, void 0);
    T(this, dt, void 0);
    T(this, Ke, void 0);
    T(this, Ne, void 0);
    T(this, ge, void 0);
    T(this, vA, void 0);
    T(this, ZA, void 0);
    T(this, FA, void 0);
    T(this, EA, void 0);
    T(this, ft, void 0);
    T(this, uA, void 0);
    T(this, pt, void 0);
    T(this, mt, void 0);
    T(this, $A, void 0);
    T(this, wt, void 0);
    T(this, Sr, void 0);
    T(this, MA, void 0);
    // conditionally set private methods related to TTL
    T(this, os, () => {
    });
    T(this, Ar, () => {
    });
    T(this, oi, () => {
    });
    /* c8 ignore stop */
    T(this, XA, () => !1);
    T(this, as, (e) => {
    });
    T(this, Ws, (e, A, r) => {
    });
    T(this, ai, (e, A, r, s) => {
      if (r || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built-in method Object.prototype.toString.
     */
    L(this, nS, "LRUCache");
    const { max: A = 0, ttl: r, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: i, updateAgeOnHas: o, allowStale: a, dispose: g, disposeAfter: c, noDisposeOnSet: E, noUpdateTTL: h, maxSize: u = 0, maxEntrySize: B = 0, sizeCalculation: Q, fetchMethod: I, noDeleteOnFetchRejection: f, noDeleteOnStaleGet: C, allowStaleOnFetchRejection: d, allowStaleOnFetchAbort: w, ignoreFetchAbort: p } = e;
    if (A !== 0 && !Ir(A))
      throw new TypeError("max option must be a nonnegative integer");
    const m = A ? gI(A) : Array;
    if (!m)
      throw new Error("invalid max value: " + A);
    if (y(this, Ct, A), y(this, zA, u), this.maxEntrySize = B || l(this, zA), this.sizeCalculation = Q, this.sizeCalculation) {
      if (!l(this, zA) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (I !== void 0 && typeof I != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (y(this, Vs, I), y(this, Sr, !!I), y(this, Ke, /* @__PURE__ */ new Map()), y(this, Ne, new Array(A).fill(void 0)), y(this, ge, new Array(A).fill(void 0)), y(this, vA, new m(A)), y(this, ZA, new m(A)), y(this, FA, 0), y(this, EA, 0), y(this, ft, Kg.create(A)), y(this, nA, 0), y(this, dt, 0), typeof g == "function" && y(this, Bt, g), typeof c == "function" ? (y(this, It, c), y(this, uA, [])) : (y(this, It, void 0), y(this, uA, void 0)), y(this, wt, !!l(this, Bt)), y(this, MA, !!l(this, It)), this.noDisposeOnSet = !!E, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!f, this.allowStaleOnFetchRejection = !!d, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!p, this.maxEntrySize !== 0) {
      if (l(this, zA) !== 0 && !Ir(l(this, zA)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!Ir(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      J(this, aa, lI).call(this);
    }
    if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!C, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!o, this.ttlResolution = Ir(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = r || 0, this.ttl) {
      if (!Ir(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      J(this, ii, el).call(this);
    }
    if (l(this, Ct) === 0 && this.ttl === 0 && l(this, zA) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !l(this, Ct) && !l(this, zA)) {
      const R = "LRU_CACHE_UNBOUNDED";
      cb(R) && (aI.add(R), cI("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", R, Wl));
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
      starts: l(e, mt),
      ttls: l(e, $A),
      sizes: l(e, pt),
      keyMap: l(e, Ke),
      keyList: l(e, Ne),
      valList: l(e, ge),
      next: l(e, vA),
      prev: l(e, ZA),
      get head() {
        return l(e, FA);
      },
      get tail() {
        return l(e, EA);
      },
      free: l(e, ft),
      // methods
      isBackgroundFetch: (A) => {
        var r;
        return J(r = e, Re, Fe).call(r, A);
      },
      backgroundFetch: (A, r, s, n) => {
        var i;
        return J(i = e, js, Oo).call(i, A, r, s, n);
      },
      moveToTail: (A) => {
        var r;
        return J(r = e, cs, qn).call(r, A);
      },
      indexes: (A) => {
        var r;
        return J(r = e, Tt, dr).call(r, A);
      },
      rindexes: (A) => {
        var r;
        return J(r = e, Lt, fr).call(r, A);
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
    return l(this, zA);
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
    return l(this, nA);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return l(this, Vs);
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
    return l(this, Ke).has(e) ? 1 / 0 : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const e of J(this, Tt, dr).call(this))
      l(this, ge)[e] !== void 0 && l(this, Ne)[e] !== void 0 && !J(this, Re, Fe).call(this, l(this, ge)[e]) && (yield [l(this, Ne)[e], l(this, ge)[e]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const e of J(this, Lt, fr).call(this))
      l(this, ge)[e] !== void 0 && l(this, Ne)[e] !== void 0 && !J(this, Re, Fe).call(this, l(this, ge)[e]) && (yield [l(this, Ne)[e], l(this, ge)[e]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const e of J(this, Tt, dr).call(this)) {
      const A = l(this, Ne)[e];
      A !== void 0 && !J(this, Re, Fe).call(this, l(this, ge)[e]) && (yield A);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const e of J(this, Lt, fr).call(this)) {
      const A = l(this, Ne)[e];
      A !== void 0 && !J(this, Re, Fe).call(this, l(this, ge)[e]) && (yield A);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const e of J(this, Tt, dr).call(this))
      l(this, ge)[e] !== void 0 && !J(this, Re, Fe).call(this, l(this, ge)[e]) && (yield l(this, ge)[e]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const e of J(this, Lt, fr).call(this))
      l(this, ge)[e] !== void 0 && !J(this, Re, Fe).call(this, l(this, ge)[e]) && (yield l(this, ge)[e]);
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
    for (const r of J(this, Tt, dr).call(this)) {
      const s = l(this, ge)[r], n = J(this, Re, Fe).call(this, s) ? s.__staleWhileFetching : s;
      if (n !== void 0 && e(n, l(this, Ne)[r], this))
        return this.get(l(this, Ne)[r], A);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(e, A = this) {
    for (const r of J(this, Tt, dr).call(this)) {
      const s = l(this, ge)[r], n = J(this, Re, Fe).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Ne)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(e, A = this) {
    for (const r of J(this, Lt, fr).call(this)) {
      const s = l(this, ge)[r], n = J(this, Re, Fe).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Ne)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let e = !1;
    for (const A of J(this, Lt, fr).call(this, { allowStale: !0 }))
      l(this, XA).call(this, A) && (this.delete(l(this, Ne)[A]), e = !0);
    return e;
  }
  /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Like {@link LRUCache#dump}, but just for a
   * single key. Always returns stale values, if their info is found in the
   * cache, so be sure to check for expired TTLs if relevant.
   */
  info(e) {
    const A = l(this, Ke).get(e);
    if (A === void 0)
      return;
    const r = l(this, ge)[A], s = J(this, Re, Fe).call(this, r) ? r.__staleWhileFetching : r;
    if (s === void 0)
      return;
    const n = { value: s };
    if (l(this, $A) && l(this, mt)) {
      const i = l(this, $A)[A], o = l(this, mt)[A];
      if (i && o) {
        const a = i - (Ts.now() - o);
        n.ttl = a, n.start = Date.now();
      }
    }
    return l(this, pt) && (n.size = l(this, pt)[A]), n;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const e = [];
    for (const A of J(this, Tt, dr).call(this, { allowStale: !0 })) {
      const r = l(this, Ne)[A], s = l(this, ge)[A], n = J(this, Re, Fe).call(this, s) ? s.__staleWhileFetching : s;
      if (n === void 0 || r === void 0)
        continue;
      const i = { value: n };
      if (l(this, $A) && l(this, mt)) {
        i.ttl = l(this, $A)[A];
        const o = Ts.now() - l(this, mt)[A];
        i.start = Math.floor(Date.now() - o);
      }
      l(this, pt) && (i.size = l(this, pt)[A]), e.unshift([r, i]);
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
        r.start = Ts.now() - s;
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
    var h, u, B, Q, I;
    if (A === void 0)
      return this.delete(e), this;
    const { ttl: s = this.ttl, start: n, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: o = this.sizeCalculation, status: a } = r;
    let { noUpdateTTL: g = this.noUpdateTTL } = r;
    const c = l(this, ai).call(this, e, A, r.size || 0, o);
    if (this.maxEntrySize && c > this.maxEntrySize)
      return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(e), this;
    let E = l(this, nA) === 0 ? void 0 : l(this, Ke).get(e);
    if (E === void 0)
      E = l(this, nA) === 0 ? l(this, EA) : l(this, ft).length !== 0 ? l(this, ft).pop() : l(this, nA) === l(this, Ct) ? J(this, qs, Jo).call(this, !1) : l(this, nA), l(this, Ne)[E] = e, l(this, ge)[E] = A, l(this, Ke).set(e, E), l(this, vA)[l(this, EA)] = E, l(this, ZA)[E] = l(this, EA), y(this, EA, E), Xi(this, nA)._++, l(this, Ws).call(this, E, c, a), a && (a.set = "add"), g = !1;
    else {
      J(this, cs, qn).call(this, E);
      const f = l(this, ge)[E];
      if (A !== f) {
        if (l(this, Sr) && J(this, Re, Fe).call(this, f)) {
          f.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: C } = f;
          C !== void 0 && !i && (l(this, wt) && ((h = l(this, Bt)) == null || h.call(this, C, e, "set")), l(this, MA) && ((u = l(this, uA)) == null || u.push([C, e, "set"])));
        } else
          i || (l(this, wt) && ((B = l(this, Bt)) == null || B.call(this, f, e, "set")), l(this, MA) && ((Q = l(this, uA)) == null || Q.push([f, e, "set"])));
        if (l(this, as).call(this, E), l(this, Ws).call(this, E, c, a), l(this, ge)[E] = A, a) {
          a.set = "replace";
          const C = f && J(this, Re, Fe).call(this, f) ? f.__staleWhileFetching : f;
          C !== void 0 && (a.oldValue = C);
        }
      } else
        a && (a.set = "update");
    }
    if (s !== 0 && !l(this, $A) && J(this, ii, el).call(this), l(this, $A) && (g || l(this, oi).call(this, E, s, n), a && l(this, Ar).call(this, a, E)), !i && l(this, MA) && l(this, uA)) {
      const f = l(this, uA);
      let C;
      for (; C = f == null ? void 0 : f.shift(); )
        (I = l(this, It)) == null || I.call(this, ...C);
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
      for (; l(this, nA); ) {
        const A = l(this, ge)[l(this, FA)];
        if (J(this, qs, Jo).call(this, !0), J(this, Re, Fe).call(this, A)) {
          if (A.__staleWhileFetching)
            return A.__staleWhileFetching;
        } else if (A !== void 0)
          return A;
      }
    } finally {
      if (l(this, MA) && l(this, uA)) {
        const A = l(this, uA);
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
    const { updateAgeOnHas: r = this.updateAgeOnHas, status: s } = A, n = l(this, Ke).get(e);
    if (n !== void 0) {
      const i = l(this, ge)[n];
      if (J(this, Re, Fe).call(this, i) && i.__staleWhileFetching === void 0)
        return !1;
      if (l(this, XA).call(this, n))
        s && (s.has = "stale", l(this, Ar).call(this, s, n));
      else
        return r && l(this, os).call(this, n), s && (s.has = "hit", l(this, Ar).call(this, s, n)), !0;
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
    const { allowStale: r = this.allowStale } = A, s = l(this, Ke).get(e);
    if (s === void 0 || !r && l(this, XA).call(this, s))
      return;
    const n = l(this, ge)[s];
    return J(this, Re, Fe).call(this, n) ? n.__staleWhileFetching : n;
  }
  async fetch(e, A = {}) {
    const {
      // get options
      allowStale: r = this.allowStale,
      updateAgeOnGet: s = this.updateAgeOnGet,
      noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
      // set options
      ttl: i = this.ttl,
      noDisposeOnSet: o = this.noDisposeOnSet,
      size: a = 0,
      sizeCalculation: g = this.sizeCalculation,
      noUpdateTTL: c = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection: E = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: h = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: u = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: B = this.allowStaleOnFetchAbort,
      context: Q,
      forceRefresh: I = !1,
      status: f,
      signal: C
    } = A;
    if (!l(this, Sr))
      return f && (f.fetch = "get"), this.get(e, {
        allowStale: r,
        updateAgeOnGet: s,
        noDeleteOnStaleGet: n,
        status: f
      });
    const d = {
      allowStale: r,
      updateAgeOnGet: s,
      noDeleteOnStaleGet: n,
      ttl: i,
      noDisposeOnSet: o,
      size: a,
      sizeCalculation: g,
      noUpdateTTL: c,
      noDeleteOnFetchRejection: E,
      allowStaleOnFetchRejection: h,
      allowStaleOnFetchAbort: B,
      ignoreFetchAbort: u,
      status: f,
      signal: C
    };
    let w = l(this, Ke).get(e);
    if (w === void 0) {
      f && (f.fetch = "miss");
      const p = J(this, js, Oo).call(this, e, w, d, Q);
      return p.__returned = p;
    } else {
      const p = l(this, ge)[w];
      if (J(this, Re, Fe).call(this, p)) {
        const H = r && p.__staleWhileFetching !== void 0;
        return f && (f.fetch = "inflight", H && (f.returnedStale = !0)), H ? p.__staleWhileFetching : p.__returned = p;
      }
      const m = l(this, XA).call(this, w);
      if (!I && !m)
        return f && (f.fetch = "hit"), J(this, cs, qn).call(this, w), s && l(this, os).call(this, w), f && l(this, Ar).call(this, f, w), p;
      const R = J(this, js, Oo).call(this, e, w, d, Q), G = R.__staleWhileFetching !== void 0 && r;
      return f && (f.fetch = m ? "stale" : "refresh", G && m && (f.returnedStale = !0)), G ? R.__staleWhileFetching : R.__returned = R;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(e, A = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: i } = A, o = l(this, Ke).get(e);
    if (o !== void 0) {
      const a = l(this, ge)[o], g = J(this, Re, Fe).call(this, a);
      return i && l(this, Ar).call(this, i, o), l(this, XA).call(this, o) ? (i && (i.get = "stale"), g ? (i && r && a.__staleWhileFetching !== void 0 && (i.returnedStale = !0), r ? a.__staleWhileFetching : void 0) : (n || this.delete(e), i && r && (i.returnedStale = !0), r ? a : void 0)) : (i && (i.get = "hit"), g ? a.__staleWhileFetching : (J(this, cs, qn).call(this, o), s && l(this, os).call(this, o), a));
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
    if (l(this, nA) !== 0) {
      const o = l(this, Ke).get(e);
      if (o !== void 0)
        if (A = !0, l(this, nA) === 1)
          this.clear();
        else {
          l(this, as).call(this, o);
          const a = l(this, ge)[o];
          if (J(this, Re, Fe).call(this, a) ? a.__abortController.abort(new Error("deleted")) : (l(this, wt) || l(this, MA)) && (l(this, wt) && ((r = l(this, Bt)) == null || r.call(this, a, e, "delete")), l(this, MA) && ((s = l(this, uA)) == null || s.push([a, e, "delete"]))), l(this, Ke).delete(e), l(this, Ne)[o] = void 0, l(this, ge)[o] = void 0, o === l(this, EA))
            y(this, EA, l(this, ZA)[o]);
          else if (o === l(this, FA))
            y(this, FA, l(this, vA)[o]);
          else {
            const g = l(this, ZA)[o];
            l(this, vA)[g] = l(this, vA)[o];
            const c = l(this, vA)[o];
            l(this, ZA)[c] = l(this, ZA)[o];
          }
          Xi(this, nA)._--, l(this, ft).push(o);
        }
    }
    if (l(this, MA) && ((n = l(this, uA)) != null && n.length)) {
      const o = l(this, uA);
      let a;
      for (; a = o == null ? void 0 : o.shift(); )
        (i = l(this, It)) == null || i.call(this, ...a);
    }
    return A;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var e, A, r;
    for (const s of J(this, Lt, fr).call(this, { allowStale: !0 })) {
      const n = l(this, ge)[s];
      if (J(this, Re, Fe).call(this, n))
        n.__abortController.abort(new Error("deleted"));
      else {
        const i = l(this, Ne)[s];
        l(this, wt) && ((e = l(this, Bt)) == null || e.call(this, n, i, "delete")), l(this, MA) && ((A = l(this, uA)) == null || A.push([n, i, "delete"]));
      }
    }
    if (l(this, Ke).clear(), l(this, ge).fill(void 0), l(this, Ne).fill(void 0), l(this, $A) && l(this, mt) && (l(this, $A).fill(0), l(this, mt).fill(0)), l(this, pt) && l(this, pt).fill(0), y(this, FA, 0), y(this, EA, 0), l(this, ft).length = 0, y(this, dt, 0), y(this, nA, 0), l(this, MA) && l(this, uA)) {
      const s = l(this, uA);
      let n;
      for (; n = s == null ? void 0 : s.shift(); )
        (r = l(this, It)) == null || r.call(this, ...n);
    }
  }
};
nS = Symbol.toStringTag, Ct = new WeakMap(), zA = new WeakMap(), Bt = new WeakMap(), It = new WeakMap(), Vs = new WeakMap(), nA = new WeakMap(), dt = new WeakMap(), Ke = new WeakMap(), Ne = new WeakMap(), ge = new WeakMap(), vA = new WeakMap(), ZA = new WeakMap(), FA = new WeakMap(), EA = new WeakMap(), ft = new WeakMap(), uA = new WeakMap(), pt = new WeakMap(), mt = new WeakMap(), $A = new WeakMap(), wt = new WeakMap(), Sr = new WeakMap(), MA = new WeakMap(), ii = new WeakSet(), el = function() {
  const e = new xo(l(this, Ct)), A = new xo(l(this, Ct));
  y(this, $A, e), y(this, mt, A), y(this, oi, (n, i, o = Ts.now()) => {
    if (A[n] = i !== 0 ? o : 0, e[n] = i, i !== 0 && this.ttlAutopurge) {
      const a = setTimeout(() => {
        l(this, XA).call(this, n) && this.delete(l(this, Ne)[n]);
      }, i + 1);
      a.unref && a.unref();
    }
  }), y(this, os, (n) => {
    A[n] = e[n] !== 0 ? Ts.now() : 0;
  }), y(this, Ar, (n, i) => {
    if (e[i]) {
      const o = e[i], a = A[i];
      if (!o || !a)
        return;
      n.ttl = o, n.start = a, n.now = r || s();
      const g = n.now - a;
      n.remainingTTL = o - g;
    }
  });
  let r = 0;
  const s = () => {
    const n = Ts.now();
    if (this.ttlResolution > 0) {
      r = n;
      const i = setTimeout(() => r = 0, this.ttlResolution);
      i.unref && i.unref();
    }
    return n;
  };
  this.getRemainingTTL = (n) => {
    const i = l(this, Ke).get(n);
    if (i === void 0)
      return 0;
    const o = e[i], a = A[i];
    if (!o || !a)
      return 1 / 0;
    const g = (r || s()) - a;
    return o - g;
  }, y(this, XA, (n) => {
    const i = A[n], o = e[n];
    return !!o && !!i && (r || s()) - i > o;
  });
}, os = new WeakMap(), Ar = new WeakMap(), oi = new WeakMap(), XA = new WeakMap(), aa = new WeakSet(), lI = function() {
  const e = new xo(l(this, Ct));
  y(this, dt, 0), y(this, pt, e), y(this, as, (A) => {
    y(this, dt, l(this, dt) - e[A]), e[A] = 0;
  }), y(this, ai, (A, r, s, n) => {
    if (J(this, Re, Fe).call(this, r))
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
  }), y(this, Ws, (A, r, s) => {
    if (e[A] = r, l(this, zA)) {
      const n = l(this, zA) - e[A];
      for (; l(this, dt) > n; )
        J(this, qs, Jo).call(this, !0);
    }
    y(this, dt, l(this, dt) + e[A]), s && (s.entrySize = r, s.totalCalculatedSize = l(this, dt));
  });
}, as = new WeakMap(), Ws = new WeakMap(), ai = new WeakMap(), Tt = new WeakSet(), dr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, nA))
    for (let A = l(this, EA); !(!J(this, ci, Al).call(this, A) || ((e || !l(this, XA).call(this, A)) && (yield A), A === l(this, FA))); )
      A = l(this, ZA)[A];
}, Lt = new WeakSet(), fr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, nA))
    for (let A = l(this, FA); !(!J(this, ci, Al).call(this, A) || ((e || !l(this, XA).call(this, A)) && (yield A), A === l(this, EA))); )
      A = l(this, vA)[A];
}, ci = new WeakSet(), Al = function(e) {
  return e !== void 0 && l(this, Ke).get(l(this, Ne)[e]) === e;
}, qs = new WeakSet(), Jo = function(e) {
  var n, i;
  const A = l(this, FA), r = l(this, Ne)[A], s = l(this, ge)[A];
  return l(this, Sr) && J(this, Re, Fe).call(this, s) ? s.__abortController.abort(new Error("evicted")) : (l(this, wt) || l(this, MA)) && (l(this, wt) && ((n = l(this, Bt)) == null || n.call(this, s, r, "evict")), l(this, MA) && ((i = l(this, uA)) == null || i.push([s, r, "evict"]))), l(this, as).call(this, A), e && (l(this, Ne)[A] = void 0, l(this, ge)[A] = void 0, l(this, ft).push(A)), l(this, nA) === 1 ? (y(this, FA, y(this, EA, 0)), l(this, ft).length = 0) : y(this, FA, l(this, vA)[A]), l(this, Ke).delete(r), Xi(this, nA)._--, A;
}, js = new WeakSet(), Oo = function(e, A, r, s) {
  const n = A === void 0 ? void 0 : l(this, ge)[A];
  if (J(this, Re, Fe).call(this, n))
    return n;
  const i = new Aa(), { signal: o } = r;
  o == null || o.addEventListener("abort", () => i.abort(o.reason), {
    signal: i.signal
  });
  const a = {
    signal: i.signal,
    options: r,
    context: s
  }, g = (Q, I = !1) => {
    const { aborted: f } = i.signal, C = r.ignoreFetchAbort && Q !== void 0;
    if (r.status && (f && !I ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, C && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), f && !C && !I)
      return E(i.signal.reason);
    const d = u;
    return l(this, ge)[A] === u && (Q === void 0 ? d.__staleWhileFetching ? l(this, ge)[A] = d.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, Q, a.options))), Q;
  }, c = (Q) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = Q), E(Q)), E = (Q) => {
    const { aborted: I } = i.signal, f = I && r.allowStaleOnFetchAbort, C = f || r.allowStaleOnFetchRejection, d = C || r.noDeleteOnFetchRejection, w = u;
    if (l(this, ge)[A] === u && (!d || w.__staleWhileFetching === void 0 ? this.delete(e) : f || (l(this, ge)[A] = w.__staleWhileFetching)), C)
      return r.status && w.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), w.__staleWhileFetching;
    if (w.__returned === w)
      throw Q;
  }, h = (Q, I) => {
    var C;
    const f = (C = l(this, Vs)) == null ? void 0 : C.call(this, e, n, a);
    f && f instanceof Promise && f.then((d) => Q(d === void 0 ? void 0 : d), I), i.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (Q(void 0), r.allowStaleOnFetchAbort && (Q = (d) => g(d, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const u = new Promise(h).then(g, c), B = Object.assign(u, {
    __abortController: i,
    __staleWhileFetching: n,
    __returned: void 0
  });
  return A === void 0 ? (this.set(e, B, { ...a.options, status: void 0 }), A = l(this, Ke).get(e)) : l(this, ge)[A] = B, B;
}, Re = new WeakSet(), Fe = function(e) {
  if (!l(this, Sr))
    return !1;
  const A = e;
  return !!A && A instanceof Promise && A.hasOwnProperty("__staleWhileFetching") && A.__abortController instanceof Aa;
}, gi = new WeakSet(), tl = function(e, A) {
  l(this, ZA)[A] = e, l(this, vA)[e] = A;
}, cs = new WeakSet(), qn = function(e) {
  e !== l(this, EA) && (e === l(this, FA) ? y(this, FA, l(this, vA)[e]) : J(this, gi, tl).call(this, l(this, ZA)[e], l(this, vA)[e]), J(this, gi, tl).call(this, l(this, EA), e), y(this, EA, e));
};
let ta = Wl;
const Lu = typeof process == "object" && process ? process : {
  stdout: null,
  stderr: null
}, gb = (t) => !!t && typeof t == "object" && (t instanceof ra || t instanceof _t || lb(t) || hb(t)), lb = (t) => !!t && typeof t == "object" && t instanceof ul && typeof t.pipe == "function" && // node core Writable streams have a pipe() method, but it throws
t.pipe !== _t.Writable.prototype.pipe, hb = (t) => !!t && typeof t == "object" && t instanceof ul && typeof t.write == "function" && typeof t.end == "function", Zt = Symbol("EOF"), $t = Symbol("maybeEmitEnd"), Cr = Symbol("emittedEnd"), Ro = Symbol("emittingEnd"), Mn = Symbol("emittedError"), Do = Symbol("closed"), vu = Symbol("read"), bo = Symbol("flush"), Mu = Symbol("flushChunk"), Et = Symbol("encoding"), Ls = Symbol("decoder"), cA = Symbol("flowing"), Gn = Symbol("paused"), Gs = Symbol("resume"), gA = Symbol("buffer"), TA = Symbol("pipes"), lA = Symbol("bufferLength"), Rg = Symbol("bufferPush"), ko = Symbol("bufferShift"), bA = Symbol("objectMode"), qe = Symbol("destroyed"), Dg = Symbol("error"), bg = Symbol("emitData"), Gu = Symbol("emitEnd"), kg = Symbol("emitEnd2"), Ft = Symbol("async"), Sg = Symbol("abort"), So = Symbol("aborted"), Yn = Symbol("signal"), Kr = Symbol("dataListeners"), jA = Symbol("discarded"), xn = (t) => Promise.resolve().then(t), Eb = (t) => t(), ub = (t) => t === "end" || t === "finish" || t === "prefinish", Qb = (t) => t instanceof ArrayBuffer || !!t && typeof t == "object" && t.constructor && t.constructor.name === "ArrayBuffer" && t.byteLength >= 0, Cb = (t) => !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
class hI {
  constructor(e, A, r) {
    L(this, "src");
    L(this, "dest");
    L(this, "opts");
    L(this, "ondrain");
    this.src = e, this.dest = A, this.opts = r, this.ondrain = () => e[Gs](), this.dest.on("drain", this.ondrain);
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
class Bb extends hI {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors), super.unpipe();
  }
  constructor(e, A, r) {
    super(e, A, r), this.proxyErrors = (s) => A.emit("error", s), e.on("error", this.proxyErrors);
  }
}
const Ib = (t) => !!t.objectMode, db = (t) => !t.objectMode && !!t.encoding && t.encoding !== "buffer";
var iS, oS, aS, cS, gS, lS, hS, ES, uS, QS, CS, BS, IS, dS, fS, pS, mS, wS, yS;
class ra extends ul {
  /**
   * If `RType` is Buffer, then options do not need to be provided.
   * Otherwise, an options object must be provided to specify either
   * {@link Minipass.SharedOptions.objectMode} or
   * {@link Minipass.SharedOptions.encoding}, as appropriate.
   */
  constructor(...A) {
    const r = A[0] || {};
    super();
    L(this, iS, !1);
    L(this, oS, !1);
    L(this, aS, []);
    L(this, cS, []);
    L(this, gS);
    L(this, lS);
    L(this, hS);
    L(this, ES);
    L(this, uS, !1);
    L(this, QS, !1);
    L(this, CS, !1);
    L(this, BS, !1);
    L(this, IS, null);
    L(this, dS, 0);
    L(this, fS, !1);
    L(this, pS);
    L(this, mS, !1);
    L(this, wS, 0);
    L(this, yS, !1);
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
    Ib(r) ? (this[bA] = !0, this[Et] = null) : db(r) ? (this[Et] = r.encoding, this[bA] = !1) : (this[bA] = !1, this[Et] = null), this[Ft] = !!r.async, this[Ls] = this[Et] ? new Qd(this[Et]) : null, r && r.debugExposeBuffer === !0 && Object.defineProperty(this, "buffer", { get: () => this[gA] }), r && r.debugExposePipes === !0 && Object.defineProperty(this, "pipes", { get: () => this[TA] });
    const { signal: s } = r;
    s && (this[Yn] = s, s.aborted ? this[Sg]() : s.addEventListener("abort", () => this[Sg]()));
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
    return this[lA];
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
    return this[bA];
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
    return this[Ft];
  }
  /**
   * Set to true to make this stream async.
   *
   * Once set, it cannot be unset, as this would potentially cause incorrect
   * behavior.  Ie, a sync stream can be made async, but an async stream
   * cannot be safely made sync.
   */
  set async(A) {
    this[Ft] = this[Ft] || !!A;
  }
  // drop everything and get out of the flow completely
  [(iS = cA, oS = Gn, aS = TA, cS = gA, gS = bA, lS = Et, hS = Ft, ES = Ls, uS = Zt, QS = Cr, CS = Ro, BS = Do, IS = Mn, dS = lA, fS = qe, pS = Yn, mS = So, wS = Kr, yS = jA, Sg)]() {
    var A, r;
    this[So] = !0, this.emit("abort", (A = this[Yn]) == null ? void 0 : A.reason), this.destroy((r = this[Yn]) == null ? void 0 : r.reason);
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
    if (this[Zt])
      throw new Error("write after end");
    if (this[qe])
      return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), !0;
    typeof r == "function" && (s = r, r = "utf8"), r || (r = "utf8");
    const n = this[Ft] ? xn : Eb;
    if (!this[bA] && !Buffer.isBuffer(A)) {
      if (Cb(A))
        A = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
      else if (Qb(A))
        A = Buffer.from(A);
      else if (typeof A != "string")
        throw new Error("Non-contiguous data written to non-objectMode stream");
    }
    return this[bA] ? (this[cA] && this[lA] !== 0 && this[bo](!0), this[cA] ? this.emit("data", A) : this[Rg](A), this[lA] !== 0 && this.emit("readable"), s && n(s), this[cA]) : A.length ? (typeof A == "string" && // unless it is a string already ready for us to use
    !(r === this[Et] && !((i = this[Ls]) != null && i.lastNeed)) && (A = Buffer.from(A, r)), Buffer.isBuffer(A) && this[Et] && (A = this[Ls].write(A)), this[cA] && this[lA] !== 0 && this[bo](!0), this[cA] ? this.emit("data", A) : this[Rg](A), this[lA] !== 0 && this.emit("readable"), s && n(s), this[cA]) : (this[lA] !== 0 && this.emit("readable"), s && n(s), this[cA]);
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
    if (this[qe])
      return null;
    if (this[jA] = !1, this[lA] === 0 || A === 0 || A && A > this[lA])
      return this[$t](), null;
    this[bA] && (A = null), this[gA].length > 1 && !this[bA] && (this[gA] = [
      this[Et] ? this[gA].join("") : Buffer.concat(this[gA], this[lA])
    ]);
    const r = this[vu](A || null, this[gA][0]);
    return this[$t](), r;
  }
  [vu](A, r) {
    if (this[bA])
      this[ko]();
    else {
      const s = r;
      A === s.length || A === null ? this[ko]() : typeof s == "string" ? (this[gA][0] = s.slice(A), r = s.slice(0, A), this[lA] -= A) : (this[gA][0] = s.subarray(A), r = s.subarray(0, A), this[lA] -= A);
    }
    return this.emit("data", r), !this[gA].length && !this[Zt] && this.emit("drain"), r;
  }
  end(A, r, s) {
    return typeof A == "function" && (s = A, A = void 0), typeof r == "function" && (s = r, r = "utf8"), A !== void 0 && this.write(A, r), s && this.once("end", s), this[Zt] = !0, this.writable = !1, (this[cA] || !this[Gn]) && this[$t](), this;
  }
  // don't let the internal resume be overwritten
  [Gs]() {
    this[qe] || (!this[Kr] && !this[TA].length && (this[jA] = !0), this[Gn] = !1, this[cA] = !0, this.emit("resume"), this[gA].length ? this[bo]() : this[Zt] ? this[$t]() : this.emit("drain"));
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
    return this[Gs]();
  }
  /**
   * Pause the stream
   */
  pause() {
    this[cA] = !1, this[Gn] = !0, this[jA] = !1;
  }
  /**
   * true if the stream has been forcibly destroyed
   */
  get destroyed() {
    return this[qe];
  }
  /**
   * true if the stream is currently in a flowing state, meaning that
   * any writes will be immediately emitted.
   */
  get flowing() {
    return this[cA];
  }
  /**
   * true if the stream is currently in a paused state
   */
  get paused() {
    return this[Gn];
  }
  [Rg](A) {
    this[bA] ? this[lA] += 1 : this[lA] += A.length, this[gA].push(A);
  }
  [ko]() {
    return this[bA] ? this[lA] -= 1 : this[lA] -= this[gA][0].length, this[gA].shift();
  }
  [bo](A = !1) {
    do
      ;
    while (this[Mu](this[ko]()) && this[gA].length);
    !A && !this[gA].length && !this[Zt] && this.emit("drain");
  }
  [Mu](A) {
    return this.emit("data", A), this[cA];
  }
  /**
   * Pipe all data emitted by this stream into the destination provided.
   *
   * Triggers the flow of data.
   */
  pipe(A, r) {
    if (this[qe])
      return A;
    this[jA] = !1;
    const s = this[Cr];
    return r = r || {}, A === Lu.stdout || A === Lu.stderr ? r.end = !1 : r.end = r.end !== !1, r.proxyErrors = !!r.proxyErrors, s ? r.end && A.end() : (this[TA].push(r.proxyErrors ? new Bb(this, A, r) : new hI(this, A, r)), this[Ft] ? xn(() => this[Gs]()) : this[Gs]()), A;
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
    const r = this[TA].find((s) => s.dest === A);
    r && (this[TA].length === 1 ? (this[cA] && this[Kr] === 0 && (this[cA] = !1), this[TA] = []) : this[TA].splice(this[TA].indexOf(r), 1), r.unpipe());
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
      this[jA] = !1, this[Kr]++, !this[TA].length && !this[cA] && this[Gs]();
    else if (A === "readable" && this[lA] !== 0)
      super.emit("readable");
    else if (ub(A) && this[Cr])
      super.emit(A), this.removeAllListeners(A);
    else if (A === "error" && this[Mn]) {
      const n = r;
      this[Ft] ? xn(() => n.call(this, this[Mn])) : n.call(this, this[Mn]);
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
    return A === "data" && (this[Kr] = this.listeners("data").length, this[Kr] === 0 && !this[jA] && !this[TA].length && (this[cA] = !1)), s;
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
    return (A === "data" || A === void 0) && (this[Kr] = 0, !this[jA] && !this[TA].length && (this[cA] = !1)), r;
  }
  /**
   * true if the 'end' event has been emitted
   */
  get emittedEnd() {
    return this[Cr];
  }
  [$t]() {
    !this[Ro] && !this[Cr] && !this[qe] && this[gA].length === 0 && this[Zt] && (this[Ro] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[Do] && this.emit("close"), this[Ro] = !1);
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
    if (A !== "error" && A !== "close" && A !== qe && this[qe])
      return !1;
    if (A === "data")
      return !this[bA] && !s ? !1 : this[Ft] ? (xn(() => this[bg](s)), !0) : this[bg](s);
    if (A === "end")
      return this[Gu]();
    if (A === "close") {
      if (this[Do] = !0, !this[Cr] && !this[qe])
        return !1;
      const i = super.emit("close");
      return this.removeAllListeners("close"), i;
    } else if (A === "error") {
      this[Mn] = s, super.emit(Dg, s);
      const i = !this[Yn] || this.listeners("error").length ? super.emit("error", s) : !1;
      return this[$t](), i;
    } else if (A === "resume") {
      const i = super.emit("resume");
      return this[$t](), i;
    } else if (A === "finish" || A === "prefinish") {
      const i = super.emit(A);
      return this.removeAllListeners(A), i;
    }
    const n = super.emit(A, ...r);
    return this[$t](), n;
  }
  [bg](A) {
    for (const s of this[TA])
      s.dest.write(A) === !1 && this.pause();
    const r = this[jA] ? !1 : super.emit("data", A);
    return this[$t](), r;
  }
  [Gu]() {
    return this[Cr] ? !1 : (this[Cr] = !0, this.readable = !1, this[Ft] ? (xn(() => this[kg]()), !0) : this[kg]());
  }
  [kg]() {
    if (this[Ls]) {
      const r = this[Ls].end();
      if (r) {
        for (const s of this[TA])
          s.dest.write(r);
        this[jA] || super.emit("data", r);
      }
    }
    for (const r of this[TA])
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
    this[bA] || (A.dataLength = 0);
    const r = this.promise();
    return this.on("data", (s) => {
      A.push(s), this[bA] || (A.dataLength += s.length);
    }), await r, A;
  }
  /**
   * Return a Promise that resolves to the concatenation of all emitted data
   * once the stream ends.
   *
   * Not allowed on objectMode streams.
   */
  async concat() {
    if (this[bA])
      throw new Error("cannot concat in objectMode");
    const A = await this.collect();
    return this[Et] ? A.join("") : Buffer.concat(A, A.dataLength);
  }
  /**
   * Return a void Promise that resolves once the stream ends.
   */
  async promise() {
    return new Promise((A, r) => {
      this.on(qe, () => r(new Error("stream destroyed"))), this.on("error", (s) => r(s)), this.on("end", () => A());
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
        if (this[Zt])
          return r();
        let i, o;
        const a = (h) => {
          this.off("data", g), this.off("end", c), this.off(qe, E), r(), o(h);
        }, g = (h) => {
          this.off("error", a), this.off("end", c), this.off(qe, E), this.pause(), i({ value: h, done: !!this[Zt] });
        }, c = () => {
          this.off("error", a), this.off("data", g), this.off(qe, E), r(), i({ done: !0, value: void 0 });
        }, E = () => a(new Error("stream destroyed"));
        return new Promise((h, u) => {
          o = u, i = h, this.once(qe, E), this.once("error", a), this.once("end", c), this.once("data", g);
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
    const r = () => (this.pause(), this.off(Dg, r), this.off(qe, r), this.off("end", r), A = !0, { done: !0, value: void 0 }), s = () => {
      if (A)
        return r();
      const n = this.read();
      return n === null ? r() : { done: !1, value: n };
    };
    return this.once("end", r), this.once(Dg, r), this.once(qe, r), {
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
    if (this[qe])
      return A ? this.emit("error", A) : this.emit(qe), this;
    this[qe] = !0, this[jA] = !0, this[gA].length = 0, this[lA] = 0;
    const r = this;
    return typeof r.close == "function" && !this[Do] && r.close(), A ? this.emit("error", A) : this.emit(qe), this;
  }
  /**
   * Alias for {@link isStream}
   *
   * Former export location, maintained for backwards compatibility.
   *
   * @deprecated
   */
  static get isStream() {
    return gb;
  }
}
const fb = td.native, jn = {
  lstatSync: rd,
  readdir: sd,
  readdirSync: nd,
  readlinkSync: id,
  realpathSync: fb,
  promises: {
    lstat: Cd,
    readdir: Bd,
    readlink: Id,
    realpath: dd
  }
}, EI = (t) => !t || t === jn || t === Ad ? jn : {
  ...jn,
  ...t,
  promises: {
    ...jn.promises,
    ...t.promises || {}
  }
}, uI = /^\\\\\?\\([a-z]:)\\?$/i, pb = (t) => t.replace(/\//g, "\\").replace(uI, "$1\\"), mb = /[\\\/]/, at = 0, QI = 1, CI = 2, Ut = 4, BI = 6, II = 8, es = 10, dI = 12, ot = 15, Jn = ~ot, Fg = 16, Yu = 32, zn = 64, ut = 128, Fo = 256, _o = 512, xu = zn | ut | _o, wb = 1023, Ng = (t) => t.isFile() ? II : t.isDirectory() ? Ut : t.isSymbolicLink() ? es : t.isCharacterDevice() ? CI : t.isBlockDevice() ? BI : t.isSocket() ? dI : t.isFIFO() ? QI : at, Ju = /* @__PURE__ */ new Map(), Zn = (t) => {
  const e = Ju.get(t);
  if (e)
    return e;
  const A = t.normalize("NFKD");
  return Ju.set(t, A), A;
}, Ou = /* @__PURE__ */ new Map(), No = (t) => {
  const e = Ou.get(t);
  if (e)
    return e;
  const A = Zn(t.toLowerCase());
  return Ou.set(t, A), A;
};
class _u extends ta {
  constructor() {
    super({ max: 256 });
  }
}
class yb extends ta {
  constructor(e = 16 * 1024) {
    super({
      maxSize: e,
      // parent + children
      sizeCalculation: (A) => A.length + 1
    });
  }
}
const fI = Symbol("PathScurry setAsCwd");
var GA, li, hi, Ei, ui, Qi, Ci, Bi, Ii, di, fi, pi, mi, wi, yi, Ri, Di, bi, ki, Fr, gs, vt, tr, rr, sr, ce, ls, nr, Mt, Si, rl, zs, Ho, hs, $n, Fi, sl, Ni, nl, Es, Xn, Zs, Po, Ui, il, Ti, ol, $s, Vo, ca, pI, ga, mI, la, wI, Li, al, Xs, Ks, ha, yI, us;
class PA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(e, A = at, r, s, n, i, o) {
    T(this, Si);
    T(this, zs);
    T(this, hs);
    T(this, Fi);
    T(this, Ni);
    // save the information when we know the entry is not a dir
    T(this, Es);
    T(this, Zs);
    T(this, Ui);
    T(this, Ti);
    T(this, $s);
    T(this, ca);
    T(this, ga);
    T(this, la);
    T(this, Li);
    T(this, ha);
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
    T(this, GA, void 0);
    // Stats fields
    T(this, li, void 0);
    T(this, hi, void 0);
    T(this, Ei, void 0);
    T(this, ui, void 0);
    T(this, Qi, void 0);
    T(this, Ci, void 0);
    T(this, Bi, void 0);
    T(this, Ii, void 0);
    T(this, di, void 0);
    T(this, fi, void 0);
    T(this, pi, void 0);
    T(this, mi, void 0);
    T(this, wi, void 0);
    T(this, yi, void 0);
    T(this, Ri, void 0);
    T(this, Di, void 0);
    T(this, bi, void 0);
    T(this, ki, void 0);
    T(this, Fr, void 0);
    T(this, gs, void 0);
    T(this, vt, void 0);
    T(this, tr, void 0);
    T(this, rr, void 0);
    T(this, sr, void 0);
    T(this, ce, void 0);
    T(this, ls, void 0);
    T(this, nr, void 0);
    T(this, Mt, void 0);
    T(this, Xs, []);
    T(this, Ks, !1);
    T(this, us, void 0);
    this.name = e, y(this, Fr, n ? No(e) : Zn(e)), y(this, ce, A & wb), this.nocase = n, this.roots = s, this.root = r || this, y(this, ls, i), y(this, vt, o.fullpath), y(this, rr, o.relative), y(this, sr, o.relativePosix), this.parent = o.parent, this.parent ? y(this, GA, l(this.parent, GA)) : y(this, GA, EI(o.fs));
  }
  get dev() {
    return l(this, li);
  }
  get mode() {
    return l(this, hi);
  }
  get nlink() {
    return l(this, Ei);
  }
  get uid() {
    return l(this, ui);
  }
  get gid() {
    return l(this, Qi);
  }
  get rdev() {
    return l(this, Ci);
  }
  get blksize() {
    return l(this, Bi);
  }
  get ino() {
    return l(this, Ii);
  }
  get size() {
    return l(this, di);
  }
  get blocks() {
    return l(this, fi);
  }
  get atimeMs() {
    return l(this, pi);
  }
  get mtimeMs() {
    return l(this, mi);
  }
  get ctimeMs() {
    return l(this, wi);
  }
  get birthtimeMs() {
    return l(this, yi);
  }
  get atime() {
    return l(this, Ri);
  }
  get mtime() {
    return l(this, Di);
  }
  get ctime() {
    return l(this, bi);
  }
  get birthtime() {
    return l(this, ki);
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
    return l(this, gs) !== void 0 ? l(this, gs) : this.parent ? y(this, gs, this.parent.depth() + 1) : y(this, gs, 0);
  }
  /**
   * @internal
   */
  childrenCache() {
    return l(this, ls);
  }
  /**
   * Get the Path object referenced by the string path, resolved from this Path
   */
  resolve(e) {
    var i;
    if (!e)
      return this;
    const A = this.getRootString(e), s = e.substring(A.length).split(this.splitSep);
    return A ? J(i = this.getRoot(A), Si, rl).call(i, s) : J(this, Si, rl).call(this, s);
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
    const e = l(this, ls).get(this);
    if (e)
      return e;
    const A = Object.assign([], { provisional: 0 });
    return l(this, ls).set(this, A), y(this, ce, l(this, ce) & ~Fg), A;
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
    for (const a of r)
      if (l(a, Fr) === s)
        return a;
    const n = this.parent ? this.sep : "", i = l(this, vt) ? l(this, vt) + n + e : void 0, o = this.newChild(e, at, {
      ...A,
      parent: this,
      fullpath: i
    });
    return this.canReaddir() || y(o, ce, l(o, ce) | ut), r.push(o), o;
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
      return y(this, rr, this.name);
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
      return y(this, sr, this.fullpathPosix());
    const r = A.relativePosix();
    return r + (!r || !A.parent ? "" : "/") + e;
  }
  /**
   * The fully resolved path string for this Path entry
   */
  fullpath() {
    if (l(this, vt) !== void 0)
      return l(this, vt);
    const e = this.name, A = this.parent;
    if (!A)
      return y(this, vt, this.name);
    const s = A.fullpath() + (A.parent ? this.sep : "") + e;
    return y(this, vt, s);
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
      return y(this, tr, this.fullpath());
    if (!this.parent) {
      const s = this.fullpath().replace(/\\/g, "/");
      return /^[a-z]:\//i.test(s) ? y(this, tr, `//?/${s}`) : y(this, tr, s);
    }
    const e = this.parent, A = e.fullpathPosix(), r = A + (!A || !e.parent ? "" : "/") + this.name;
    return y(this, tr, r);
  }
  /**
   * Is the Path of an unknown type?
   *
   * Note that we might know *something* about it if there has been a previous
   * filesystem operation, for example that it does not exist, or is not a
   * link, or whether it has child entries.
   */
  isUnknown() {
    return (l(this, ce) & ot) === at;
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
    return (l(this, ce) & ot) === II;
  }
  /**
   * Is the Path a directory?
   */
  isDirectory() {
    return (l(this, ce) & ot) === Ut;
  }
  /**
   * Is the path a character device?
   */
  isCharacterDevice() {
    return (l(this, ce) & ot) === CI;
  }
  /**
   * Is the path a block device?
   */
  isBlockDevice() {
    return (l(this, ce) & ot) === BI;
  }
  /**
   * Is the path a FIFO pipe?
   */
  isFIFO() {
    return (l(this, ce) & ot) === QI;
  }
  /**
   * Is the path a socket?
   */
  isSocket() {
    return (l(this, ce) & ot) === dI;
  }
  /**
   * Is the path a symbolic link?
   */
  isSymbolicLink() {
    return (l(this, ce) & es) === es;
  }
  /**
   * Return the entry if it has been subject of a successful lstat, or
   * undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* simply
   * mean that we haven't called lstat on it.
   */
  lstatCached() {
    return l(this, ce) & Yu ? this : void 0;
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
    return l(this, Mt);
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
    const e = l(this, ce) & ot;
    return !(e !== at && e !== es || l(this, ce) & Fo || l(this, ce) & ut);
  }
  /**
   * Return true if readdir has previously been successfully called on this
   * path, indicating that cachedReaddir() is likely valid.
   */
  calledReaddir() {
    return !!(l(this, ce) & Fg);
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
        const A = await l(this, GA).promises.readlink(this.fullpath()), r = this.parent.resolve(A);
        if (r)
          return y(this, nr, r);
      } catch (A) {
        J(this, Ti, ol).call(this, A.code);
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
        const A = l(this, GA).readlinkSync(this.fullpath()), r = this.parent.resolve(A);
        if (r)
          return y(this, nr, r);
      } catch (A) {
        J(this, Ti, ol).call(this, A.code);
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
        return J(this, Li, al).call(this, await l(this, GA).promises.lstat(this.fullpath())), this;
      } catch (e) {
        J(this, Ui, il).call(this, e.code);
      }
  }
  /**
   * synchronous {@link PathBase.lstat}
   */
  lstatSync() {
    if (!(l(this, ce) & ut))
      try {
        return J(this, Li, al).call(this, l(this, GA).lstatSync(this.fullpath())), this;
      } catch (e) {
        J(this, Ui, il).call(this, e.code);
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
    if (l(this, Xs).push(e), l(this, Ks))
      return;
    y(this, Ks, !0);
    const s = this.fullpath();
    l(this, GA).readdir(s, { withFileTypes: !0 }, (n, i) => {
      if (n)
        J(this, Zs, Po).call(this, n.code), r.provisional = 0;
      else {
        for (const o of i)
          J(this, $s, Vo).call(this, o, r);
        J(this, zs, Ho).call(this, r);
      }
      J(this, ha, yI).call(this, r.slice(0, r.provisional));
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
    if (l(this, us))
      await l(this, us);
    else {
      let r = () => {
      };
      y(this, us, new Promise((s) => r = s));
      try {
        for (const s of await l(this, GA).promises.readdir(A, {
          withFileTypes: !0
        }))
          J(this, $s, Vo).call(this, s, e);
        J(this, zs, Ho).call(this, e);
      } catch (s) {
        J(this, Zs, Po).call(this, s.code), e.provisional = 0;
      }
      y(this, us, void 0), r();
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
      for (const r of l(this, GA).readdirSync(A, {
        withFileTypes: !0
      }))
        J(this, $s, Vo).call(this, r, e);
      J(this, zs, Ho).call(this, e);
    } catch (r) {
      J(this, Zs, Po).call(this, r.code), e.provisional = 0;
    }
    return e.slice(0, e.provisional);
  }
  canReaddir() {
    if (l(this, ce) & xu)
      return !1;
    const e = ot & l(this, ce);
    return e === at || e === Ut || e === es;
  }
  shouldWalk(e, A) {
    return (l(this, ce) & Ut) === Ut && !(l(this, ce) & xu) && !e.has(this) && (!A || A(this));
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
    if (l(this, Mt))
      return l(this, Mt);
    if (!((_o | Fo | ut) & l(this, ce)))
      try {
        const e = await l(this, GA).promises.realpath(this.fullpath());
        return y(this, Mt, this.resolve(e));
      } catch {
        J(this, Ni, nl).call(this);
      }
  }
  /**
   * Synchronous {@link realpath}
   */
  realpathSync() {
    if (l(this, Mt))
      return l(this, Mt);
    if (!((_o | Fo | ut) & l(this, ce)))
      try {
        const e = l(this, GA).realpathSync(this.fullpath());
        return y(this, Mt, this.resolve(e));
      } catch {
        J(this, Ni, nl).call(this);
      }
  }
  /**
   * Internal method to mark this Path object as the scurry cwd,
   * called by {@link PathScurry#chdir}
   *
   * @internal
   */
  [fI](e) {
    if (e === this)
      return;
    const A = /* @__PURE__ */ new Set([]);
    let r = [], s = this;
    for (; s && s.parent; )
      A.add(s), y(s, rr, r.join(this.sep)), y(s, sr, r.join("/")), s = s.parent, r.push("..");
    for (s = e; s && s.parent && !A.has(s); )
      y(s, rr, void 0), y(s, sr, void 0), s = s.parent;
  }
}
GA = new WeakMap(), li = new WeakMap(), hi = new WeakMap(), Ei = new WeakMap(), ui = new WeakMap(), Qi = new WeakMap(), Ci = new WeakMap(), Bi = new WeakMap(), Ii = new WeakMap(), di = new WeakMap(), fi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), Ri = new WeakMap(), Di = new WeakMap(), bi = new WeakMap(), ki = new WeakMap(), Fr = new WeakMap(), gs = new WeakMap(), vt = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), sr = new WeakMap(), ce = new WeakMap(), ls = new WeakMap(), nr = new WeakMap(), Mt = new WeakMap(), Si = new WeakSet(), rl = function(e) {
  let A = this;
  for (const r of e)
    A = A.child(r);
  return A;
}, zs = new WeakSet(), Ho = function(e) {
  var A;
  y(this, ce, l(this, ce) | Fg);
  for (let r = e.provisional; r < e.length; r++)
    J(A = e[r], hs, $n).call(A);
}, hs = new WeakSet(), $n = function() {
  l(this, ce) & ut || (y(this, ce, (l(this, ce) | ut) & Jn), J(this, Fi, sl).call(this));
}, Fi = new WeakSet(), sl = function() {
  var A;
  const e = this.children();
  e.provisional = 0;
  for (const r of e)
    J(A = r, hs, $n).call(A);
}, Ni = new WeakSet(), nl = function() {
  y(this, ce, l(this, ce) | _o), J(this, Es, Xn).call(this);
}, Es = new WeakSet(), Xn = function() {
  if (l(this, ce) & zn)
    return;
  let e = l(this, ce);
  (e & ot) === Ut && (e &= Jn), y(this, ce, e | zn), J(this, Fi, sl).call(this);
}, Zs = new WeakSet(), Po = function(e = "") {
  e === "ENOTDIR" || e === "EPERM" ? J(this, Es, Xn).call(this) : e === "ENOENT" ? J(this, hs, $n).call(this) : this.children().provisional = 0;
}, Ui = new WeakSet(), il = function(e = "") {
  var A;
  if (e === "ENOTDIR") {
    const r = this.parent;
    J(A = r, Es, Xn).call(A);
  } else
    e === "ENOENT" && J(this, hs, $n).call(this);
}, Ti = new WeakSet(), ol = function(e = "") {
  var r;
  let A = l(this, ce);
  A |= Fo, e === "ENOENT" && (A |= ut), (e === "EINVAL" || e === "UNKNOWN") && (A &= Jn), y(this, ce, A), e === "ENOTDIR" && this.parent && J(r = this.parent, Es, Xn).call(r);
}, $s = new WeakSet(), Vo = function(e, A) {
  return J(this, ga, mI).call(this, e, A) || J(this, ca, pI).call(this, e, A);
}, ca = new WeakSet(), pI = function(e, A) {
  const r = Ng(e), s = this.newChild(e.name, r, { parent: this }), n = l(s, ce) & ot;
  return n !== Ut && n !== es && n !== at && y(s, ce, l(s, ce) | zn), A.unshift(s), A.provisional++, s;
}, ga = new WeakSet(), mI = function(e, A) {
  for (let r = A.provisional; r < A.length; r++) {
    const s = A[r];
    if ((this.nocase ? No(e.name) : Zn(e.name)) === l(s, Fr))
      return J(this, la, wI).call(this, e, s, r, A);
  }
}, la = new WeakSet(), wI = function(e, A, r, s) {
  const n = A.name;
  return y(A, ce, l(A, ce) & Jn | Ng(e)), n !== e.name && (A.name = e.name), r !== s.provisional && (r === s.length - 1 ? s.pop() : s.splice(r, 1), s.unshift(A)), s.provisional++, A;
}, Li = new WeakSet(), al = function(e) {
  const { atime: A, atimeMs: r, birthtime: s, birthtimeMs: n, blksize: i, blocks: o, ctime: a, ctimeMs: g, dev: c, gid: E, ino: h, mode: u, mtime: B, mtimeMs: Q, nlink: I, rdev: f, size: C, uid: d } = e;
  y(this, Ri, A), y(this, pi, r), y(this, ki, s), y(this, yi, n), y(this, Bi, i), y(this, fi, o), y(this, bi, a), y(this, wi, g), y(this, li, c), y(this, Qi, E), y(this, Ii, h), y(this, hi, u), y(this, Di, B), y(this, mi, Q), y(this, Ei, I), y(this, Ci, f), y(this, di, C), y(this, ui, d);
  const w = Ng(e);
  y(this, ce, l(this, ce) & Jn | w | Yu), w !== at && w !== Ut && w !== es && y(this, ce, l(this, ce) | zn);
}, Xs = new WeakMap(), Ks = new WeakMap(), ha = new WeakSet(), yI = function(e) {
  y(this, Ks, !1);
  const A = l(this, Xs).slice();
  l(this, Xs).length = 0, A.forEach((r) => r(null, e));
}, us = new WeakMap();
class Na extends PA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = at, s, n, i, o, a) {
    super(A, r, s, n, i, o, a);
    /**
     * Separator for generating path strings.
     */
    L(this, "sep", "\\");
    /**
     * Separator for parsing path strings.
     */
    L(this, "splitSep", mb);
  }
  /**
   * @internal
   */
  newChild(A, r = at, s = {}) {
    return new Na(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
  /**
   * @internal
   */
  getRootString(A) {
    return Lg.parse(A).root;
  }
  /**
   * @internal
   */
  getRoot(A) {
    if (A = pb(A.toUpperCase()), A === this.root.name)
      return this.root;
    for (const [r, s] of Object.entries(this.roots))
      if (this.sameRoot(A, r))
        return this.roots[A] = s;
    return this.roots[A] = new xl(A, this).root;
  }
  /**
   * @internal
   */
  sameRoot(A, r = this.root.name) {
    return A = A.toUpperCase().replace(/\//g, "\\").replace(uI, "$1\\"), A === r;
  }
}
class Ua extends PA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = at, s, n, i, o, a) {
    super(A, r, s, n, i, o, a);
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
  newChild(A, r = at, s = {}) {
    return new Ua(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
}
var en, An, vi, Mi;
class RI {
  /**
   * This class should not be instantiated directly.
   *
   * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
   *
   * @internal
   */
  constructor(e = process.cwd(), A, r, { nocase: s, childrenCacheSize: n = 16 * 1024, fs: i = jn } = {}) {
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
    T(this, en, void 0);
    T(this, An, void 0);
    T(this, vi, void 0);
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    L(this, "nocase");
    T(this, Mi, void 0);
    y(this, Mi, EI(i)), (e instanceof URL || e.startsWith("file://")) && (e = uQ(e));
    const o = A.resolve(e);
    this.roots = /* @__PURE__ */ Object.create(null), this.rootPath = this.parseRootPath(o), y(this, en, new _u()), y(this, An, new _u()), y(this, vi, new yb(n));
    const a = o.substring(this.rootPath.length).split(r);
    if (a.length === 1 && !a[0] && a.pop(), s === void 0)
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    this.nocase = s, this.root = this.newRoot(l(this, Mi)), this.roots[this.rootPath] = this.root;
    let g = this.root, c = a.length - 1;
    const E = A.sep;
    let h = this.rootPath, u = !1;
    for (const B of a) {
      const Q = c--;
      g = g.child(B, {
        relative: new Array(Q).fill("..").join(E),
        relativePosix: new Array(Q).fill("..").join("/"),
        fullpath: h += (u ? "" : E) + B
      }), u = !0;
    }
    this.cwd = g;
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
    const r = l(this, en).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpath();
    return l(this, en).set(A, s), s;
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
    const r = l(this, An).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpathPosix();
    return l(this, An).set(A, s), s;
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e.withFileTypes, e = this.cwd);
    const r = await e.readlink();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  readlinkSync(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e.withFileTypes, e = this.cwd);
    const r = e.readlinkSync();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  async realpath(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e.withFileTypes, e = this.cwd);
    const r = await e.realpath();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  realpathSync(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e.withFileTypes, e = this.cwd);
    const r = e.realpathSync();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  async walk(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = [];
    (!n || n(e)) && o.push(r ? e : e.fullpath());
    const a = /* @__PURE__ */ new Set(), g = (E, h) => {
      a.add(E), E.readdirCB((u, B) => {
        if (u)
          return h(u);
        let Q = B.length;
        if (!Q)
          return h();
        const I = () => {
          --Q === 0 && h();
        };
        for (const f of B)
          (!n || n(f)) && o.push(r ? f : f.fullpath()), s && f.isSymbolicLink() ? f.realpath().then((C) => C != null && C.isUnknown() ? C.lstat() : C).then((C) => C != null && C.shouldWalk(a, i) ? g(C, I) : I()) : f.shouldWalk(a, i) ? g(f, I) : I();
      }, !0);
    }, c = e;
    return new Promise((E, h) => {
      g(c, (u) => {
        if (u)
          return h(u);
        E(o);
      });
    });
  }
  walkSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = [];
    (!n || n(e)) && o.push(r ? e : e.fullpath());
    const a = /* @__PURE__ */ new Set([e]);
    for (const g of a) {
      const c = g.readdirSync();
      for (const E of c) {
        (!n || n(E)) && o.push(r ? E : E.fullpath());
        let h = E;
        if (E.isSymbolicLink()) {
          if (!(s && (h = E.realpathSync())))
            continue;
          h.isUnknown() && h.lstatSync();
        }
        h.shouldWalk(a, i) && a.add(h);
      }
    }
    return o;
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
    return typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd), this.stream(e, A)[Symbol.asyncIterator]();
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A;
    (!n || n(e)) && (yield r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set([e]);
    for (const a of o) {
      const g = a.readdirSync();
      for (const c of g) {
        (!n || n(c)) && (yield r ? c : c.fullpath());
        let E = c;
        if (c.isSymbolicLink()) {
          if (!(s && (E = c.realpathSync())))
            continue;
          E.isUnknown() && E.lstatSync();
        }
        E.shouldWalk(o, i) && o.add(E);
      }
    }
  }
  stream(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = new ra({ objectMode: !0 });
    (!n || n(e)) && o.write(r ? e : e.fullpath());
    const a = /* @__PURE__ */ new Set(), g = [e];
    let c = 0;
    const E = () => {
      let h = !1;
      for (; !h; ) {
        const u = g.shift();
        if (!u) {
          c === 0 && o.end();
          return;
        }
        c++, a.add(u);
        const B = (I, f, C = !1) => {
          if (I)
            return o.emit("error", I);
          if (s && !C) {
            const d = [];
            for (const w of f)
              w.isSymbolicLink() && d.push(w.realpath().then((p) => p != null && p.isUnknown() ? p.lstat() : p));
            if (d.length) {
              Promise.all(d).then(() => B(null, f, !0));
              return;
            }
          }
          for (const d of f)
            d && (!n || n(d)) && (o.write(r ? d : d.fullpath()) || (h = !0));
          c--;
          for (const d of f) {
            const w = d.realpathCached() || d;
            w.shouldWalk(a, i) && g.push(w);
          }
          h && !o.flowing ? o.once("drain", E) : Q || E();
        };
        let Q = !0;
        u.readdirCB(B, !0), Q = !1;
      }
    };
    return E(), o;
  }
  streamSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = new ra({ objectMode: !0 }), a = /* @__PURE__ */ new Set();
    (!n || n(e)) && o.write(r ? e : e.fullpath());
    const g = [e];
    let c = 0;
    const E = () => {
      let h = !1;
      for (; !h; ) {
        const u = g.shift();
        if (!u) {
          c === 0 && o.end();
          return;
        }
        c++, a.add(u);
        const B = u.readdirSync();
        for (const Q of B)
          (!n || n(Q)) && (o.write(r ? Q : Q.fullpath()) || (h = !0));
        c--;
        for (const Q of B) {
          let I = Q;
          if (Q.isSymbolicLink()) {
            if (!(s && (I = Q.realpathSync())))
              continue;
            I.isUnknown() && I.lstatSync();
          }
          I.shouldWalk(a, i) && g.push(I);
        }
      }
      h && !o.flowing && o.once("drain", E);
    };
    return E(), o;
  }
  chdir(e = this.cwd) {
    const A = this.cwd;
    this.cwd = typeof e == "string" ? this.cwd.resolve(e) : e, this.cwd[fI](A);
  }
}
en = new WeakMap(), An = new WeakMap(), vi = new WeakMap(), Mi = new WeakMap();
class xl extends RI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !0 } = r;
    super(A, Lg, "\\", { ...r, nocase: s });
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
    return Lg.parse(A).root.toUpperCase();
  }
  /**
   * @internal
   */
  newRoot(A) {
    return new Na(this.rootPath, Ut, void 0, this.roots, this.nocase, this.childrenCache(), { fs: A });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(A) {
    return A.startsWith("/") || A.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(A);
  }
}
class Jl extends RI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !1 } = r;
    super(A, ad, "/", { ...r, nocase: s });
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
    return new Ua(this.rootPath, Ut, void 0, this.roots, this.nocase, this.childrenCache(), { fs: A });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(A) {
    return A.startsWith("/");
  }
}
class DI extends Jl {
  constructor(e = process.cwd(), A = {}) {
    const { nocase: r = !0 } = A;
    super(e, { ...A, nocase: r });
  }
}
process.platform;
const Rb = process.platform === "win32" ? xl : process.platform === "darwin" ? DI : Jl, Db = (t) => t.length >= 1, bb = (t) => t.length >= 1;
var iA, KA, QA, Qs, yt, Gi, Nr, Ur, Tr, tn;
const ql = class ql {
  constructor(e, A, r, s) {
    T(this, iA, void 0);
    T(this, KA, void 0);
    T(this, QA, void 0);
    L(this, "length");
    T(this, Qs, void 0);
    T(this, yt, void 0);
    T(this, Gi, void 0);
    T(this, Nr, void 0);
    T(this, Ur, void 0);
    T(this, Tr, void 0);
    T(this, tn, !0);
    if (!Db(e))
      throw new TypeError("empty pattern list");
    if (!bb(A))
      throw new TypeError("empty glob list");
    if (A.length !== e.length)
      throw new TypeError("mismatched pattern list and glob list lengths");
    if (this.length = e.length, r < 0 || r >= this.length)
      throw new TypeError("index out of range");
    if (y(this, iA, e), y(this, KA, A), y(this, QA, r), y(this, Qs, s), l(this, QA) === 0) {
      if (this.isUNC()) {
        const [n, i, o, a, ...g] = l(this, iA), [c, E, h, u, ...B] = l(this, KA);
        g[0] === "" && (g.shift(), B.shift());
        const Q = [n, i, o, a, ""].join("/"), I = [c, E, h, u, ""].join("/");
        y(this, iA, [Q, ...g]), y(this, KA, [I, ...B]), this.length = l(this, iA).length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [n, ...i] = l(this, iA), [o, ...a] = l(this, KA);
        i[0] === "" && (i.shift(), a.shift());
        const g = n + "/", c = o + "/";
        y(this, iA, [g, ...i]), y(this, KA, [c, ...a]), this.length = l(this, iA).length;
      }
    }
  }
  /**
   * The first entry in the parsed list of patterns
   */
  pattern() {
    return l(this, iA)[l(this, QA)];
  }
  /**
   * true of if pattern() returns a string
   */
  isString() {
    return typeof l(this, iA)[l(this, QA)] == "string";
  }
  /**
   * true of if pattern() returns GLOBSTAR
   */
  isGlobstar() {
    return l(this, iA)[l(this, QA)] === YA;
  }
  /**
   * true if pattern() returns a regexp
   */
  isRegExp() {
    return l(this, iA)[l(this, QA)] instanceof RegExp;
  }
  /**
   * The /-joined set of glob parts that make up this pattern
   */
  globString() {
    return y(this, Gi, l(this, Gi) || (l(this, QA) === 0 ? this.isAbsolute() ? l(this, KA)[0] + l(this, KA).slice(1).join("/") : l(this, KA).join("/") : l(this, KA).slice(l(this, QA)).join("/")));
  }
  /**
   * true if there are more pattern parts after this one
   */
  hasMore() {
    return this.length > l(this, QA) + 1;
  }
  /**
   * The rest of the pattern after this part, or null if this is the end
   */
  rest() {
    return l(this, yt) !== void 0 ? l(this, yt) : this.hasMore() ? (y(this, yt, new ql(l(this, iA), l(this, KA), l(this, QA) + 1, l(this, Qs))), y(l(this, yt), Tr, l(this, Tr)), y(l(this, yt), Ur, l(this, Ur)), y(l(this, yt), Nr, l(this, Nr)), l(this, yt)) : y(this, yt, null);
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    const e = l(this, iA);
    return l(this, Ur) !== void 0 ? l(this, Ur) : y(this, Ur, l(this, Qs) === "win32" && l(this, QA) === 0 && e[0] === "" && e[1] === "" && typeof e[2] == "string" && !!e[2] && typeof e[3] == "string" && !!e[3]);
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
    return l(this, Nr) !== void 0 ? l(this, Nr) : y(this, Nr, l(this, Qs) === "win32" && l(this, QA) === 0 && this.length > 1 && typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]));
  }
  // pattern = '/' or '/...' or '/x/...'
  // split = ['', ''] or ['', ...] or ['', 'x', ...]
  // Drive and UNC both considered absolute on windows
  /**
   * True if the pattern is rooted on an absolute path
   */
  isAbsolute() {
    const e = l(this, iA);
    return l(this, Tr) !== void 0 ? l(this, Tr) : y(this, Tr, e[0] === "" && e.length > 1 || this.isDrive() || this.isUNC());
  }
  /**
   * consume the root of the pattern, and return it
   */
  root() {
    const e = l(this, iA)[0];
    return typeof e == "string" && this.isAbsolute() && l(this, QA) === 0 ? e : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(l(this, QA) === 0 || !this.isGlobstar() || !l(this, tn));
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    return l(this, QA) === 0 || !this.isGlobstar() || !l(this, tn) ? !1 : (y(this, tn, !1), !0);
  }
};
iA = new WeakMap(), KA = new WeakMap(), QA = new WeakMap(), Qs = new WeakMap(), yt = new WeakMap(), Gi = new WeakMap(), Nr = new WeakMap(), Ur = new WeakMap(), Tr = new WeakMap(), tn = new WeakMap();
let sa = ql;
const kb = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class Hu {
  constructor(e, { nobrace: A, nocase: r, noext: s, noglobstar: n, platform: i = kb }) {
    L(this, "relative");
    L(this, "relativeChildren");
    L(this, "absolute");
    L(this, "absoluteChildren");
    this.relative = [], this.absolute = [], this.relativeChildren = [], this.absoluteChildren = [];
    const o = {
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
    for (const a of e) {
      const g = new Jr(a, o);
      for (let c = 0; c < g.set.length; c++) {
        const E = g.set[c], h = g.globParts[c];
        if (!E || !h)
          throw new Error("invalid pattern object");
        const u = new sa(E, h, 0, i), B = new Jr(u.globString(), o), Q = h[h.length - 1] === "**", I = u.isAbsolute();
        I ? this.absolute.push(B) : this.relative.push(B), Q && (I ? this.absoluteChildren.push(B) : this.relativeChildren.push(B));
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
class Ol {
  constructor(e = /* @__PURE__ */ new Map()) {
    L(this, "store");
    this.store = e;
  }
  copy() {
    return new Ol(new Map(this.store));
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
class Sb {
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
class Fb {
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
class na {
  constructor(e, A) {
    L(this, "hasWalkedCache");
    L(this, "matches", new Sb());
    L(this, "subwalks", new Fb());
    L(this, "patterns");
    L(this, "follow");
    L(this, "dot");
    L(this, "opts");
    this.opts = e, this.follow = !!e.follow, this.dot = !!e.dot, this.hasWalkedCache = A ? A.copy() : new Ol();
  }
  processPatterns(e, A) {
    this.patterns = A;
    const r = A.map((s) => [e, s]);
    for (let [s, n] of r) {
      this.hasWalkedCache.storeWalked(s, n);
      const i = n.root(), o = n.isAbsolute() && this.opts.absolute !== !1;
      if (i) {
        s = s.resolve(i === "/" && this.opts.root !== void 0 ? this.opts.root : i);
        const E = n.rest();
        if (E)
          n = E;
        else {
          this.matches.add(s, !0, !1);
          continue;
        }
      }
      if (s.isENOENT())
        continue;
      let a, g, c = !1;
      for (; typeof (a = n.pattern()) == "string" && (g = n.rest()); )
        s = s.resolve(a), n = g, c = !0;
      if (a = n.pattern(), g = n.rest(), c) {
        if (this.hasWalkedCache.hasWalked(s, n))
          continue;
        this.hasWalkedCache.storeWalked(s, n);
      }
      if (typeof a == "string") {
        const E = a === ".." || a === "" || a === ".";
        this.matches.add(s.resolve(a), o, E);
        continue;
      } else if (a === YA) {
        (!s.isSymbolicLink() || this.follow || n.checkFollowGlobstar()) && this.subwalks.add(s, n);
        const E = g == null ? void 0 : g.pattern(), h = g == null ? void 0 : g.rest();
        if (!g || (E === "" || E === ".") && !h)
          this.matches.add(s, o, E === "" || E === ".");
        else if (E === "..") {
          const u = s.parent || s;
          h ? this.hasWalkedCache.hasWalked(u, h) || this.subwalks.add(u, h) : this.matches.add(u, o, !0);
        }
      } else
        a instanceof RegExp && this.subwalks.add(s, n);
    }
    return this;
  }
  subwalkTargets() {
    return this.subwalks.keys();
  }
  child() {
    return new na(this.opts, this.hasWalkedCache);
  }
  // return a new Processor containing the subwalks for each
  // child entry, and a set of matches, and
  // a hasWalkedCache that's a copy of this one
  // then we're going to call
  filterEntries(e, A) {
    const r = this.subwalks.get(e), s = this.child();
    for (const n of A)
      for (const i of r) {
        const o = i.isAbsolute(), a = i.pattern(), g = i.rest();
        a === YA ? s.testGlobstar(n, i, g, o) : a instanceof RegExp ? s.testRegExp(n, a, g, o) : s.testString(n, a, g, o);
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
const Nb = (t, e) => typeof t == "string" ? new Hu([t], e) : Array.isArray(t) ? new Hu(t, e) : t;
var rn, sn, Cs, ir, As, Yi, cl;
class bI {
  constructor(e, A, r) {
    T(this, ir);
    T(this, Yi);
    L(this, "path");
    L(this, "patterns");
    L(this, "opts");
    L(this, "seen", /* @__PURE__ */ new Set());
    L(this, "paused", !1);
    L(this, "aborted", !1);
    T(this, rn, []);
    T(this, sn, void 0);
    T(this, Cs, void 0);
    L(this, "signal");
    L(this, "maxDepth");
    this.patterns = e, this.path = A, this.opts = r, y(this, Cs, !r.posix && r.platform === "win32" ? "\\" : "/"), r.ignore && y(this, sn, Nb(r.ignore, r)), this.maxDepth = r.maxDepth || 1 / 0, r.signal && (this.signal = r.signal, this.signal.addEventListener("abort", () => {
      l(this, rn).length = 0;
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
    for (; !this.paused && (e = l(this, rn).shift()); )
      e();
  }
  onResume(e) {
    var A;
    (A = this.signal) != null && A.aborted || (this.paused ? l(this, rn).push(e) : e());
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
    return e && (this.maxDepth === 1 / 0 || e.depth() <= this.maxDepth) && (!A || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !J(this, ir, As).call(this, e) ? e : void 0;
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
    if (J(this, ir, As).call(this, e))
      return;
    const r = this.opts.absolute === void 0 ? A : this.opts.absolute;
    this.seen.add(e);
    const s = this.opts.mark && e.isDirectory() ? l(this, Cs) : "";
    if (this.opts.withFileTypes)
      this.matchEmit(e);
    else if (r) {
      const n = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(n + s);
    } else {
      const n = this.opts.posix ? e.relativePosix() : e.relative(), i = this.opts.dotRelative && !n.startsWith(".." + l(this, Cs)) ? "." + l(this, Cs) : "";
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
    (s = this.signal) != null && s.aborted && r(), this.walkCB2(e, A, new na(this.opts), r);
  }
  walkCB2(e, A, r, s) {
    var o;
    if (J(this, Yi, cl).call(this, e))
      return s();
    if ((o = this.signal) != null && o.aborted && s(), this.paused) {
      this.onResume(() => this.walkCB2(e, A, r, s));
      return;
    }
    r.processPatterns(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [a, g, c] of r.matches.entries())
      J(this, ir, As).call(this, a) || (n++, this.match(a, g, c).then(() => i()));
    for (const a of r.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && a.depth() >= this.maxDepth)
        continue;
      n++;
      const g = a.readdirCached();
      a.calledReaddir() ? this.walkCB3(a, g, r, i) : a.readdirCB((c, E) => this.walkCB3(a, E, r, i), !0);
    }
    i();
  }
  walkCB3(e, A, r, s) {
    r = r.filterEntries(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [o, a, g] of r.matches.entries())
      J(this, ir, As).call(this, o) || (n++, this.match(o, a, g).then(() => i()));
    for (const [o, a] of r.subwalks.entries())
      n++, this.walkCB2(o, a, r.child(), i);
    i();
  }
  walkCBSync(e, A, r) {
    var s;
    (s = this.signal) != null && s.aborted && r(), this.walkCB2Sync(e, A, new na(this.opts), r);
  }
  walkCB2Sync(e, A, r, s) {
    var o;
    if (J(this, Yi, cl).call(this, e))
      return s();
    if ((o = this.signal) != null && o.aborted && s(), this.paused) {
      this.onResume(() => this.walkCB2Sync(e, A, r, s));
      return;
    }
    r.processPatterns(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [a, g, c] of r.matches.entries())
      J(this, ir, As).call(this, a) || this.matchSync(a, g, c);
    for (const a of r.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && a.depth() >= this.maxDepth)
        continue;
      n++;
      const g = a.readdirSync();
      this.walkCB3Sync(a, g, r, i);
    }
    i();
  }
  walkCB3Sync(e, A, r, s) {
    r = r.filterEntries(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [o, a, g] of r.matches.entries())
      J(this, ir, As).call(this, o) || this.matchSync(o, a, g);
    for (const [o, a] of r.subwalks.entries())
      n++, this.walkCB2Sync(o, a, r.child(), i);
    i();
  }
}
rn = new WeakMap(), sn = new WeakMap(), Cs = new WeakMap(), ir = new WeakSet(), As = function(e) {
  var A, r;
  return this.seen.has(e) || !!((r = (A = l(this, sn)) == null ? void 0 : A.ignored) != null && r.call(A, e));
}, Yi = new WeakSet(), cl = function(e) {
  var A, r;
  return !!((r = (A = l(this, sn)) == null ? void 0 : A.childrenIgnored) != null && r.call(A, e));
};
class Pu extends bI {
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
class Vu extends bI {
  constructor(A, r, s) {
    super(A, r, s);
    L(this, "results");
    this.results = new ra({
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
const Ub = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class ws {
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
    if (this.withFileTypes = !!A.withFileTypes, this.signal = A.signal, this.follow = !!A.follow, this.dot = !!A.dot, this.dotRelative = !!A.dotRelative, this.nodir = !!A.nodir, this.mark = !!A.mark, A.cwd ? (A.cwd instanceof URL || A.cwd.startsWith("file://")) && (A.cwd = uQ(A.cwd)) : this.cwd = "", this.cwd = A.cwd || "", this.root = A.root, this.magicalBraces = !!A.magicalBraces, this.nobrace = !!A.nobrace, this.noext = !!A.noext, this.realpath = !!A.realpath, this.absolute = A.absolute, this.noglobstar = !!A.noglobstar, this.matchBase = !!A.matchBase, this.maxDepth = typeof A.maxDepth == "number" ? A.maxDepth : 1 / 0, this.stat = !!A.stat, this.ignore = A.ignore, this.withFileTypes && this.absolute !== void 0)
      throw new Error("cannot set absolute and withFileTypes:true");
    if (typeof e == "string" && (e = [e]), this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (e = e.map((a) => a.replace(/\\/g, "/"))), this.matchBase) {
      if (A.noglobstar)
        throw new TypeError("base matching requires globstar");
      e = e.map((a) => a.includes("/") ? a : `./**/${a}`);
    }
    if (this.pattern = e, this.platform = A.platform || Ub, this.opts = { ...A, platform: this.platform }, A.scurry) {
      if (this.scurry = A.scurry, A.nocase !== void 0 && A.nocase !== A.scurry.nocase)
        throw new Error("nocase option contradicts provided scurry option");
    } else {
      const a = A.platform === "win32" ? xl : A.platform === "darwin" ? DI : A.platform ? Jl : Rb;
      this.scurry = new a(this.cwd, {
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
    }, n = this.pattern.map((a) => new Jr(a, s)), [i, o] = n.reduce((a, g) => (a[0].push(...g.set), a[1].push(...g.globParts), a), [[], []]);
    this.patterns = i.map((a, g) => {
      const c = o[g];
      if (!c)
        throw new Error("invalid pattern object");
      return new sa(a, c, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new Pu(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new Pu(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new Vu(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new Vu(this.patterns, this.scurry.cwd, {
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
const Tb = (t, e = {}) => {
  Array.isArray(t) || (t = [t]);
  for (const A of t)
    if (new Jr(A, e).hasMagic())
      return !0;
  return !1;
};
function Ta(t, e = {}) {
  return new ws(t, e).streamSync();
}
function kI(t, e = {}) {
  return new ws(t, e).stream();
}
function _l(t, e = {}) {
  return new ws(t, e).walkSync();
}
async function Wu(t, e = {}) {
  return new ws(t, e).walk();
}
function La(t, e = {}) {
  return new ws(t, e).iterateSync();
}
function SI(t, e = {}) {
  return new ws(t, e).iterate();
}
const Lb = Ta, vb = Object.assign(kI, { sync: Ta }), Mb = La, Gb = Object.assign(SI, {
  sync: La
}), Yb = Object.assign(_l, {
  stream: Ta,
  iterate: La
}), qu = Object.assign(Wu, {
  glob: Wu,
  globSync: _l,
  sync: Yb,
  globStream: kI,
  stream: vb,
  globStreamSync: Ta,
  streamSync: Lb,
  globIterate: SI,
  iterate: Gb,
  globIterateSync: La,
  iterateSync: Mb,
  Glob: ws,
  hasMagic: Tb,
  escape: rI,
  unescape: xs
});
qu.glob = qu;
function va() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var Ma = { exports: {} }, xb = FI;
function FI(t, e, A, r) {
  if (typeof A != "function")
    throw new Error("method for before hook must be a function");
  return r || (r = {}), Array.isArray(e) ? e.reverse().reduce(function(s, n) {
    return FI.bind(null, t, n, s, r);
  }, A)() : Promise.resolve().then(function() {
    return t.registry[e] ? t.registry[e].reduce(function(s, n) {
      return n.hook.bind(null, s, r);
    }, A)() : A(r);
  });
}
var Jb = Ob;
function Ob(t, e, A, r) {
  var s = r;
  t.registry[A] || (t.registry[A] = []), e === "before" && (r = function(n, i) {
    return Promise.resolve().then(s.bind(null, i)).then(n.bind(null, i));
  }), e === "after" && (r = function(n, i) {
    var o;
    return Promise.resolve().then(n.bind(null, i)).then(function(a) {
      return o = a, s(o, i);
    }).then(function() {
      return o;
    });
  }), e === "error" && (r = function(n, i) {
    return Promise.resolve().then(n.bind(null, i)).catch(function(o) {
      return s(o, i);
    });
  }), t.registry[A].push({
    hook: r,
    orig: s
  });
}
var _b = Hb;
function Hb(t, e, A) {
  if (t.registry[e]) {
    var r = t.registry[e].map(function(s) {
      return s.orig;
    }).indexOf(A);
    r !== -1 && t.registry[e].splice(r, 1);
  }
}
var NI = xb, Pb = Jb, Vb = _b, ju = Function.bind, zu = ju.bind(ju);
function UI(t, e, A) {
  var r = zu(Vb, null).apply(
    null,
    A ? [e, A] : [e]
  );
  t.api = { remove: r }, t.remove = r, ["before", "error", "after", "wrap"].forEach(function(s) {
    var n = A ? [e, s, A] : [e, s];
    t[s] = t.api[s] = zu(Pb, null).apply(null, n);
  });
}
function Wb() {
  var t = "h", e = {
    registry: {}
  }, A = NI.bind(null, e, t);
  return UI(A, e, t), A;
}
function TI() {
  var t = {
    registry: {}
  }, e = NI.bind(null, t);
  return UI(e, t), e;
}
var Zu = !1;
function pn() {
  return Zu || (console.warn(
    '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
  ), Zu = !0), TI();
}
pn.Singular = Wb.bind();
pn.Collection = TI.bind();
Ma.exports = pn;
Ma.exports.Hook = pn;
Ma.exports.Singular = pn.Singular;
var qb = Ma.exports.Collection = pn.Collection, jb = "9.0.4", zb = `octokit-endpoint.js/${jb} ${va()}`, Zb = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": zb
  },
  mediaType: {
    format: ""
  }
};
function $b(t) {
  return t ? Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {}) : {};
}
function Xb(t) {
  if (typeof t != "object" || t === null || Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  if (e === null)
    return !0;
  const A = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof A == "function" && A instanceof A && Function.prototype.call(A) === Function.prototype.call(t);
}
function LI(t, e) {
  const A = Object.assign({}, t);
  return Object.keys(e).forEach((r) => {
    Xb(e[r]) ? r in t ? A[r] = LI(t[r], e[r]) : Object.assign(A, { [r]: e[r] }) : Object.assign(A, { [r]: e[r] });
  }), A;
}
function $u(t) {
  for (const e in t)
    t[e] === void 0 && delete t[e];
  return t;
}
function gl(t, e, A) {
  var s;
  if (typeof e == "string") {
    let [n, i] = e.split(" ");
    A = Object.assign(i ? { method: n, url: i } : { url: n }, A);
  } else
    A = Object.assign({}, e);
  A.headers = $b(A.headers), $u(A), $u(A.headers);
  const r = LI(t || {}, A);
  return A.url === "/graphql" && (t && ((s = t.mediaType.previews) != null && s.length) && (r.mediaType.previews = t.mediaType.previews.filter(
    (n) => !r.mediaType.previews.includes(n)
  ).concat(r.mediaType.previews)), r.mediaType.previews = (r.mediaType.previews || []).map((n) => n.replace(/-preview/, ""))), r;
}
function Kb(t, e) {
  const A = /\?/.test(t) ? "&" : "?", r = Object.keys(e);
  return r.length === 0 ? t : t + A + r.map((s) => s === "q" ? "q=" + e.q.split("+").map(encodeURIComponent).join("+") : `${s}=${encodeURIComponent(e[s])}`).join("&");
}
var ek = /\{[^}]+\}/g;
function Ak(t) {
  return t.replace(/^\W+|\W+$/g, "").split(/,/);
}
function tk(t) {
  const e = t.match(ek);
  return e ? e.map(Ak).reduce((A, r) => A.concat(r), []) : [];
}
function Xu(t, e) {
  const A = { __proto__: null };
  for (const r of Object.keys(t))
    e.indexOf(r) === -1 && (A[r] = t[r]);
  return A;
}
function vI(t) {
  return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e;
  }).join("");
}
function Js(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function On(t, e, A) {
  return e = t === "+" || t === "#" ? vI(e) : Js(e), A ? Js(A) + "=" + e : e;
}
function vs(t) {
  return t != null;
}
function Ug(t) {
  return t === ";" || t === "&" || t === "?";
}
function rk(t, e, A, r) {
  var s = t[A], n = [];
  if (vs(s) && s !== "")
    if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
      s = s.toString(), r && r !== "*" && (s = s.substring(0, parseInt(r, 10))), n.push(
        On(e, s, Ug(e) ? A : "")
      );
    else if (r === "*")
      Array.isArray(s) ? s.filter(vs).forEach(function(i) {
        n.push(
          On(e, i, Ug(e) ? A : "")
        );
      }) : Object.keys(s).forEach(function(i) {
        vs(s[i]) && n.push(On(e, s[i], i));
      });
    else {
      const i = [];
      Array.isArray(s) ? s.filter(vs).forEach(function(o) {
        i.push(On(e, o));
      }) : Object.keys(s).forEach(function(o) {
        vs(s[o]) && (i.push(Js(o)), i.push(On(e, s[o].toString())));
      }), Ug(e) ? n.push(Js(A) + "=" + i.join(",")) : i.length !== 0 && n.push(i.join(","));
    }
  else
    e === ";" ? vs(s) && n.push(Js(A)) : s === "" && (e === "&" || e === "?") ? n.push(Js(A) + "=") : s === "" && n.push("");
  return n;
}
function sk(t) {
  return {
    expand: nk.bind(null, t)
  };
}
function nk(t, e) {
  var A = ["+", "#", ".", "/", ";", "?", "&"];
  return t = t.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(r, s, n) {
      if (s) {
        let o = "";
        const a = [];
        if (A.indexOf(s.charAt(0)) !== -1 && (o = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(g) {
          var c = /([^:\*]*)(?::(\d+)|(\*))?/.exec(g);
          a.push(rk(e, o, c[1], c[2] || c[3]));
        }), o && o !== "+") {
          var i = ",";
          return o === "?" ? i = "&" : o !== "#" && (i = o), (a.length !== 0 ? o : "") + a.join(i);
        } else
          return a.join(",");
      } else
        return vI(n);
    }
  ), t === "/" ? t : t.replace(/\/$/, "");
}
function MI(t) {
  var c;
  let e = t.method.toUpperCase(), A = (t.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), r = Object.assign({}, t.headers), s, n = Xu(t, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const i = tk(A);
  A = sk(A).expand(n), /^http/.test(A) || (A = t.baseUrl + A);
  const o = Object.keys(t).filter((E) => i.includes(E)).concat("baseUrl"), a = Xu(n, o);
  if (!/application\/octet-stream/i.test(r.accept) && (t.mediaType.format && (r.accept = r.accept.split(/,/).map(
    (E) => E.replace(
      /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
      `application/vnd$1$2.${t.mediaType.format}`
    )
  ).join(",")), A.endsWith("/graphql") && (c = t.mediaType.previews) != null && c.length)) {
    const E = r.accept.match(/[\w-]+(?=-preview)/g) || [];
    r.accept = E.concat(t.mediaType.previews).map((h) => {
      const u = t.mediaType.format ? `.${t.mediaType.format}` : "+json";
      return `application/vnd.github.${h}-preview${u}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(e) ? A = Kb(A, a) : "data" in a ? s = a.data : Object.keys(a).length && (s = a), !r["content-type"] && typeof s < "u" && (r["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(e) && typeof s > "u" && (s = ""), Object.assign(
    { method: e, url: A, headers: r },
    typeof s < "u" ? { body: s } : null,
    t.request ? { request: t.request } : null
  );
}
function ik(t, e, A) {
  return MI(gl(t, e, A));
}
function GI(t, e) {
  const A = gl(t, e), r = ik.bind(null, A);
  return Object.assign(r, {
    DEFAULTS: A,
    defaults: GI.bind(null, A),
    merge: gl.bind(null, A),
    parse: MI
  });
}
var ok = GI(null, Zb);
class Ku extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
  }
}
var Hl = { exports: {} }, ak = YI;
function YI(t, e) {
  if (t && e)
    return YI(t)(e);
  if (typeof t != "function")
    throw new TypeError("need wrapper function");
  return Object.keys(t).forEach(function(r) {
    A[r] = t[r];
  }), A;
  function A() {
    for (var r = new Array(arguments.length), s = 0; s < r.length; s++)
      r[s] = arguments[s];
    var n = t.apply(this, r), i = r[r.length - 1];
    return typeof n == "function" && n !== i && Object.keys(i).forEach(function(o) {
      n[o] = i[o];
    }), n;
  }
}
var xI = ak;
Hl.exports = xI(Wo);
Hl.exports.strict = xI(JI);
Wo.proto = Wo(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return Wo(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return JI(this);
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
function JI(t) {
  var e = function() {
    if (e.called)
      throw new Error(e.onceError);
    return e.called = !0, e.value = t.apply(this, arguments);
  }, A = t.name || "Function wrapped with `once`";
  return e.onceError = A + " shouldn't be called more than once", e.called = !1, e;
}
var ck = Hl.exports;
const OI = /* @__PURE__ */ Ql(ck);
var gk = OI((t) => console.warn(t)), lk = OI((t) => console.warn(t)), _n = class extends Error {
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
        return gk(
          new Ku(
            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
          )
        ), e;
      }
    }), Object.defineProperty(this, "headers", {
      get() {
        return lk(
          new Ku(
            "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
          )
        ), r || {};
      }
    });
  }
}, hk = "8.2.0";
function Ek(t) {
  if (typeof t != "object" || t === null || Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  if (e === null)
    return !0;
  const A = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof A == "function" && A instanceof A && Function.prototype.call(A) === Function.prototype.call(t);
}
function uk(t) {
  return t.arrayBuffer();
}
function eQ(t) {
  var o, a, g;
  const e = t.request && t.request.log ? t.request.log : console, A = ((o = t.request) == null ? void 0 : o.parseSuccessResponseBody) !== !1;
  (Ek(t.body) || Array.isArray(t.body)) && (t.body = JSON.stringify(t.body));
  let r = {}, s, n, { fetch: i } = globalThis;
  if ((a = t.request) != null && a.fetch && (i = t.request.fetch), !i)
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  return i(t.url, {
    method: t.method,
    body: t.body,
    headers: t.headers,
    signal: (g = t.request) == null ? void 0 : g.signal,
    // duplex must be set if request.body is ReadableStream or Async Iterables.
    // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
    ...t.body && { duplex: "half" }
  }).then(async (c) => {
    n = c.url, s = c.status;
    for (const E of c.headers)
      r[E[0]] = E[1];
    if ("deprecation" in r) {
      const E = r.link && r.link.match(/<([^>]+)>; rel="deprecation"/), h = E && E.pop();
      e.warn(
        `[@octokit/request] "${t.method} ${t.url}" is deprecated. It is scheduled to be removed on ${r.sunset}${h ? `. See ${h}` : ""}`
      );
    }
    if (!(s === 204 || s === 205)) {
      if (t.method === "HEAD") {
        if (s < 400)
          return;
        throw new _n(c.statusText, s, {
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
        throw new _n("Not modified", s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: await Tg(c)
          },
          request: t
        });
      if (s >= 400) {
        const E = await Tg(c);
        throw new _n(Qk(E), s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: E
          },
          request: t
        });
      }
      return A ? await Tg(c) : c.body;
    }
  }).then((c) => ({
    status: s,
    url: n,
    headers: r,
    data: c
  })).catch((c) => {
    if (c instanceof _n)
      throw c;
    if (c.name === "AbortError")
      throw c;
    let E = c.message;
    throw c.name === "TypeError" && "cause" in c && (c.cause instanceof Error ? E = c.cause.message : typeof c.cause == "string" && (E = c.cause)), new _n(E, 500, {
      request: t
    });
  });
}
async function Tg(t) {
  const e = t.headers.get("content-type");
  return /application\/json/.test(e) ? t.json().catch(() => t.text()).catch(() => "") : !e || /^text\/|charset=utf-8$/.test(e) ? t.text() : uk(t);
}
function Qk(t) {
  if (typeof t == "string")
    return t;
  let e;
  return "documentation_url" in t ? e = ` - ${t.documentation_url}` : e = "", "message" in t ? Array.isArray(t.errors) ? `${t.message}: ${t.errors.map(JSON.stringify).join(", ")}${e}` : `${t.message}${e}` : `Unknown error: ${JSON.stringify(t)}`;
}
function ll(t, e) {
  const A = t.defaults(e);
  return Object.assign(function(s, n) {
    const i = A.merge(s, n);
    if (!i.request || !i.request.hook)
      return eQ(A.parse(i));
    const o = (a, g) => eQ(
      A.parse(A.merge(a, g))
    );
    return Object.assign(o, {
      endpoint: A,
      defaults: ll.bind(null, A)
    }), i.request.hook(o, i);
  }, {
    endpoint: A,
    defaults: ll.bind(null, A)
  });
}
var hl = ll(ok, {
  headers: {
    "user-agent": `octokit-request.js/${hk} ${va()}`
  }
}), Ck = "7.0.2";
function Bk(t) {
  return `Request failed due to following response errors:
` + t.errors.map((e) => ` - ${e.message}`).join(`
`);
}
var Ik = class extends Error {
  constructor(t, e, A) {
    super(Bk(A)), this.request = t, this.headers = e, this.response = A, this.name = "GraphqlResponseError", this.errors = A.errors, this.data = A.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, dk = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
], fk = ["query", "method", "url"], AQ = /\/api\/v3\/?$/;
function pk(t, e, A) {
  if (A) {
    if (typeof e == "string" && "query" in A)
      return Promise.reject(
        new Error('[@octokit/graphql] "query" cannot be used as variable name')
      );
    for (const i in A)
      if (fk.includes(i))
        return Promise.reject(
          new Error(
            `[@octokit/graphql] "${i}" cannot be used as variable name`
          )
        );
  }
  const r = typeof e == "string" ? Object.assign({ query: e }, A) : e, s = Object.keys(
    r
  ).reduce((i, o) => dk.includes(o) ? (i[o] = r[o], i) : (i.variables || (i.variables = {}), i.variables[o] = r[o], i), {}), n = r.baseUrl || t.endpoint.DEFAULTS.baseUrl;
  return AQ.test(n) && (s.url = n.replace(AQ, "/api/graphql")), t(s).then((i) => {
    if (i.data.errors) {
      const o = {};
      for (const a of Object.keys(i.headers))
        o[a] = i.headers[a];
      throw new Ik(
        s,
        o,
        i.data
      );
    }
    return i.data.data;
  });
}
function Pl(t, e) {
  const A = t.defaults(e);
  return Object.assign((s, n) => pk(A, s, n), {
    defaults: Pl.bind(null, A),
    endpoint: A.endpoint
  });
}
Pl(hl, {
  headers: {
    "user-agent": `octokit-graphql.js/${Ck} ${va()}`
  },
  method: "POST",
  url: "/graphql"
});
function mk(t) {
  return Pl(t, {
    method: "POST",
    url: "/graphql"
  });
}
var wk = /^v1\./, yk = /^ghs_/, Rk = /^ghu_/;
async function Dk(t) {
  const e = t.split(/\./).length === 3, A = wk.test(t) || yk.test(t), r = Rk.test(t);
  return {
    type: "token",
    token: t,
    tokenType: e ? "app" : A ? "installation" : r ? "user-to-server" : "oauth"
  };
}
function bk(t) {
  return t.split(/\./).length === 3 ? `bearer ${t}` : `token ${t}`;
}
async function kk(t, e, A, r) {
  const s = e.endpoint.merge(
    A,
    r
  );
  return s.headers.authorization = bk(t), e(s);
}
var Sk = function(e) {
  if (!e)
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof e != "string")
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  return e = e.replace(/^(token|bearer) +/i, ""), Object.assign(Dk.bind(null, e), {
    hook: kk.bind(null, e)
  });
}, _I = "5.1.0", tQ = () => {
}, Fk = console.warn.bind(console), Nk = console.error.bind(console), rQ = `octokit-core.js/${_I} ${va()}`, un, Uk = (un = class {
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
    const A = new qb(), r = {
      baseUrl: hl.endpoint.DEFAULTS.baseUrl,
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
    if (r.headers["user-agent"] = e.userAgent ? `${e.userAgent} ${rQ}` : rQ, e.baseUrl && (r.baseUrl = e.baseUrl), e.previews && (r.mediaType.previews = e.previews), e.timeZone && (r.headers["time-zone"] = e.timeZone), this.request = hl.defaults(r), this.graphql = mk(this.request).defaults(r), this.log = Object.assign(
      {
        debug: tQ,
        info: tQ,
        warn: Fk,
        error: Nk
      },
      e.log
    ), this.hook = A, e.authStrategy) {
      const { authStrategy: n, ...i } = e, o = n(
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
      A.wrap("request", o.hook), this.auth = o;
    } else if (!e.auth)
      this.auth = async () => ({
        type: "unauthenticated"
      });
    else {
      const n = Sk(e.auth);
      A.wrap("request", n.hook), this.auth = n;
    }
    const s = this.constructor;
    for (let n = 0; n < s.plugins.length; ++n)
      Object.assign(this, s.plugins[n](this, e));
  }
}, un.VERSION = _I, un.plugins = [], un), Tk = "4.0.1";
function HI(t) {
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
HI.VERSION = Tk;
var Lk = "9.2.1";
function vk(t) {
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
function Vl(t, e, A) {
  const r = typeof e == "function" ? e.endpoint(A) : t.request.endpoint(e, A), s = typeof e == "function" ? e : t.request, n = r.method, i = r.headers;
  let o = r.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!o)
          return { done: !0 };
        try {
          const a = await s({ method: n, url: o, headers: i }), g = vk(a);
          return o = ((g.headers.link || "").match(
            /<([^>]+)>;\s*rel="next"/
          ) || [])[1], { value: g };
        } catch (a) {
          if (a.status !== 409)
            throw a;
          return o = "", {
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
function PI(t, e, A, r) {
  return typeof A == "function" && (r = A, A = void 0), VI(
    t,
    [],
    Vl(t, e, A)[Symbol.asyncIterator](),
    r
  );
}
function VI(t, e, A, r) {
  return A.next().then((s) => {
    if (s.done)
      return e;
    let n = !1;
    function i() {
      n = !0;
    }
    return e = e.concat(
      r ? r(s.value, i) : s.value.data
    ), n ? e : VI(t, e, A, r);
  });
}
Object.assign(PI, {
  iterator: Vl
});
function WI(t) {
  return {
    paginate: Object.assign(PI.bind(null, t), {
      iterator: Vl.bind(null, t)
    })
  };
}
WI.VERSION = Lk;
var Mk = "10.4.1", Gk = {
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
    getCustomOidcSubClaimForRepo: [
      "GET /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
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
    setCustomOidcSubClaimForRepo: [
      "PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"
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
    markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"],
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
    addCopilotSeatsForTeams: [
      "POST /orgs/{org}/copilot/billing/selected_teams"
    ],
    addCopilotSeatsForUsers: [
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
  oidc: {
    getOidcCustomSubTemplateForOrg: [
      "GET /orgs/{org}/actions/oidc/customization/sub"
    ],
    updateOidcCustomSubTemplateForOrg: [
      "PUT /orgs/{org}/actions/oidc/customization/sub"
    ]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    assignTeamToOrgRole: [
      "PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    assignUserToOrgRole: [
      "PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createCustomOrganizationRole: ["POST /orgs/{org}/organization-roles"],
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
    deleteCustomOrganizationRole: [
      "DELETE /orgs/{org}/organization-roles/{role_id}"
    ],
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
    getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"],
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
    listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"],
    listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"],
    listOrgRoles: ["GET /orgs/{org}/organization-roles"],
    listOrganizationFineGrainedPermissions: [
      "GET /orgs/{org}/organization-fine-grained-permissions"
    ],
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
    patchCustomOrganizationRole: [
      "PATCH /orgs/{org}/organization-roles/{role_id}"
    ],
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
    revokeAllOrgRolesTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}"
    ],
    revokeAllOrgRolesUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}"
    ],
    revokeOrgRoleTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    revokeOrgRoleUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"
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
    cancelPagesDeployment: [
      "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"
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
    createOrUpdateCustomPropertiesValues: [
      "PATCH /repos/{owner}/{repo}/properties/values"
    ],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"],
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
    getPagesDeployment: [
      "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"
    ],
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
    createFork: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"
    ],
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
}, Yk = Gk, ds = /* @__PURE__ */ new Map();
for (const [t, e] of Object.entries(Yk))
  for (const [A, r] of Object.entries(e)) {
    const [s, n, i] = r, [o, a] = s.split(/ /), g = Object.assign(
      {
        method: o,
        url: a
      },
      n
    );
    ds.has(t) || ds.set(t, /* @__PURE__ */ new Map()), ds.get(t).set(A, {
      scope: t,
      methodName: A,
      endpointDefaults: g,
      decorations: i
    });
  }
var xk = {
  has({ scope: t }, e) {
    return ds.get(t).has(e);
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
    return [...ds.get(t).keys()];
  },
  set(t, e, A) {
    return t.cache[e] = A;
  },
  get({ octokit: t, scope: e, cache: A }, r) {
    if (A[r])
      return A[r];
    const s = ds.get(e).get(r);
    if (!s)
      return;
    const { endpointDefaults: n, decorations: i } = s;
    return i ? A[r] = Ok(
      t,
      e,
      r,
      n,
      i
    ) : A[r] = t.request.defaults(n), A[r];
  }
};
function Jk(t) {
  const e = {};
  for (const A of ds.keys())
    e[A] = new Proxy({ octokit: t, scope: A, cache: {} }, xk);
  return e;
}
function Ok(t, e, A, r, s) {
  const n = t.request.defaults(r);
  function i(...o) {
    let a = n.endpoint.merge(...o);
    if (s.mapToData)
      return a = Object.assign({}, a, {
        data: a[s.mapToData],
        [s.mapToData]: void 0
      }), n(a);
    if (s.renamed) {
      const [g, c] = s.renamed;
      t.log.warn(
        `octokit.${e}.${A}() has been renamed to octokit.${g}.${c}()`
      );
    }
    if (s.deprecated && t.log.warn(s.deprecated), s.renamedParameters) {
      const g = n.endpoint.merge(...o);
      for (const [c, E] of Object.entries(
        s.renamedParameters
      ))
        c in g && (t.log.warn(
          `"${c}" parameter is deprecated for "octokit.${e}.${A}()". Use "${E}" instead`
        ), E in g || (g[E] = g[c]), delete g[c]);
      return n(g);
    }
    return n(...o);
  }
  return Object.assign(i, n);
}
function qI(t) {
  const e = Jk(t);
  return {
    ...e,
    rest: e
  };
}
qI.VERSION = Mk;
var _k = "20.0.2", sQ = Uk.plugin(
  HI,
  qI,
  WI
).defaults({
  userAgent: `octokit-rest.js/${_k}`
}), jI = { exports: {} };
(function() {
  function t(e) {
    var A;
    return e instanceof Buffer ? A = e : A = Buffer.from(e.toString(), "binary"), A.toString("base64");
  }
  jI.exports = t;
})();
var Hk = jI.exports;
const Pk = /* @__PURE__ */ Ql(Hk);
class Vk {
  constructor(e, A, r) {
    L(this, "octokit");
    this.owner = e, this.repositoryName = A, this.octokit = new sQ({ auth: r });
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
        data: { sha: o }
      } = await this.octokit.rest.git.createBlob({
        ...this.getRepositoryInfo(),
        content: Pk(od(i)),
        encoding: A
      });
      n.push({ type: r, mode: s, path: i, sha: o });
    }
    return n;
  }
  async createCommit({ branchSha: e, treeSha: A, message: r, token: s, amend: n }) {
    const i = s ? new sQ({ auth: s }) : this.octokit;
    if (n) {
      const { data: o } = await this.octokit.rest.git.getCommit({
        ...this.getRepositoryInfo(),
        commit_sha: e
      }), { data: a } = await i.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: o.parents.map(({ sha: g }) => g),
        tree: A,
        message: r || o.message
      });
      return a;
    } else {
      if (!r)
        throw new Error("Commit message is empty");
      const { data: o } = await i.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: [e],
        tree: A,
        message: r
      });
      return o;
    }
  }
  async commitFiles({ paths: e, branchName: A, amend: r = !1, ...s }) {
    const n = await this.createBlobs(e), {
      object: { sha: i }
    } = await this.getBranch(A), {
      data: { sha: o }
    } = await this.octokit.rest.git.createTree({
      ...this.getRepositoryInfo(),
      tree: n,
      base_tree: i
    }), a = await this.createCommit({ branchSha: i, treeSha: o, amend: r, ...s });
    return await this.octokit.rest.git.updateRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${A}`,
      sha: a.sha,
      force: r
    }), a;
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
    reviewers: o,
    teamReviewers: a,
    milestone: g,
    draft: c
  }) {
    const { data: E } = await this.octokit.rest.pulls.create({
      ...this.getRepositoryInfo(),
      base: A || await this.getDefaultBranchName(),
      head: e,
      title: r || await this.getBranchCommitMessage(e),
      ...Ue({ body: s }),
      ...Ue({ draft: c })
    });
    return (o || a) && await this.octokit.rest.pulls.requestReviewers({
      ...this.getRepositoryInfo(),
      pull_number: E.number,
      ...Ue({ reviewers: o }),
      ...Ue({ team_reviewers: a })
    }), (n || i || g) && await this.octokit.rest.issues.update({
      ...this.getRepositoryInfo(),
      issue_number: E.number,
      ...Ue({ labels: n }),
      ...Ue({ assignees: i }),
      ...Ue({ milestone: g })
    }), E;
  }
}
const nQ = "refs/heads/", Wk = (t) => {
  const A = t.reduce((r, s) => (r.push(..._l(s, { nodir: !0 })), r), []).reduce((r, s) => Ru.isFileUntracked(s) ? (console.info(`File "${s}" is created`), r.push(s), r) : (Ru.isFileChanged(s) && (console.info(`File "${s}" is changed`), r.push(s)), r), []);
  return A.length === 0 && console.info("No file has been changed"), A;
}, qk = async (t, { name: e, base: A, recreate: r = !1 }) => {
  if (await t.hasBranch(e))
    if (console.info(`Branch "${e}" already exists`), r)
      console.info(`Deleting branch "${e}"...`), await t.deleteBranch(e), console.info(`Branch "${e}" has been deleted`);
    else
      return;
  const {
    object: { sha: s }
  } = await t.getBranch(A ?? await t.getDefaultBranchName());
  await t.createBranch(e, s), console.info(`Branch "${e}" has been created`);
}, jk = async (t, e, A, r) => {
  const s = await t.commitFiles({
    ...r,
    paths: e,
    branchName: A
  });
  WB.setOutput("commit.sha", s.sha), console.info(`Changed files have been committed to ${s.sha}`);
}, zk = async (t, e, A) => {
  const r = await t.createPullRequest({
    ...A,
    ...Ue({ baseBranchName: A.base }),
    branchName: e
  });
  console.info(`Pull request has been created at ${r.html_url}`);
}, Zk = async ({
  repository: t,
  token: e,
  branch: { name: A, ...r },
  commit: s,
  pullRequest: n
}) => {
  try {
    const [i, o] = t.split("/");
    if (!i || !o)
      throw new Error(`Repository "${t}" does not have the valid format (owner/repositoryName)`);
    if (s && !s.message && !s.amend)
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    A.startsWith(nQ) && (A = A.slice(nQ.length));
    const a = s ? Wk(s.paths) : null;
    if ((a == null ? void 0 : a.length) === 0)
      return 0;
    const g = new Vk(i, o, e);
    await qk(g, { name: A, ...r }), s && a && await jk(g, a, A, s), n && await zk(g, A, {
      ...Ue({ title: s == null ? void 0 : s.message }),
      ...n
    });
  } catch (i) {
    return console.error(i), 1;
  }
  return 0;
}, $k = ["paths", "message", "token", "amend"], Xk = [
  "title",
  "body",
  "base",
  "labels",
  "assignees",
  "reviewers",
  "team-reviewers",
  "milestone",
  "draft"
], Kk = () => $k.some((t) => ze.hasInput(`commit.${t}`)), eS = () => Xk.some((t) => ze.hasInput(`pull-request.${t}`)), AS = () => {
  const t = ze.getInputAsString("branch.name", { required: !0 }), e = ze.getInputAsString("branch.base"), A = ze.getInputAsBoolean("branch.recreate");
  return {
    name: t,
    ...Ue({ base: e }, null),
    ...Ue({ recreate: A }, null)
  };
}, tS = () => {
  if (!(ze.getInputAsBoolean("commit") ?? Kk()))
    return null;
  const e = ze.getInputAsStrings("commit.paths", { required: !0 }), A = ze.getInputAsString("commit.message"), r = ze.getInputAsString("commit.token"), s = ze.getInputAsBoolean("commit.amend");
  return {
    paths: e,
    ...Ue({ message: A }, null),
    ...Ue({ token: r }, null),
    ...Ue({ amend: s }, null)
  };
}, rS = () => {
  if (!(ze.getInputAsBoolean("pull-request") ?? eS()))
    return null;
  const e = ze.getInputAsString("pull-request.title"), A = ze.getInputAsString("pull-request.body"), r = ze.getInputAsString("pull-request.base"), s = ze.getInputAsStrings("pull-request.labels"), n = ze.getInputAsStrings("pull-request.assignees"), i = ze.getInputAsStrings("pull-request.reviewers"), o = ze.getInputAsStrings("pull-request.team-reviewers"), a = ze.getInputAsInteger("pull-request.milestone"), g = ze.getInputAsBoolean("pull-request.draft");
  return {
    ...Ue({ title: e }, null),
    ...Ue({ body: A }, null),
    ...Ue({ base: r }, null),
    ...Ue({ labels: s }, null),
    ...Ue({ assignees: n }, null),
    ...Ue({ reviewers: i }, null),
    ...Ue({ teamReviewers: o }, null),
    ...Ue({ milestone: a }, null),
    ...Ue({ draft: g }, null)
  };
}, sS = async () => {
  try {
    const t = lD.requireEnv({
      GITHUB_REPOSITORY: Cl.str()
    }), e = ze.getInputAsString("token", { required: !0 }), A = AS(), r = tS(), s = rS(), n = await Zk({
      repository: t.GITHUB_REPOSITORY,
      token: e,
      branch: A,
      ...Ue({ commit: r }, null),
      ...Ue({ pullRequest: s }, null)
    });
    process.exit(n);
  } catch (t) {
    t instanceof Error ? console.error(t.message) : console.error(t), process.exit(1);
  }
};
sS();
