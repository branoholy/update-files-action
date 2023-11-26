var zI = Object.defineProperty;
var XI = (t, e, A) => e in t ? zI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : t[e] = A;
var L = (t, e, A) => (XI(t, typeof e != "symbol" ? e + "" : e, A), A), _a = (t, e, A) => {
  if (!e.has(t))
    throw TypeError("Cannot " + A);
};
var l = (t, e, A) => (_a(t, e, "read from private field"), A ? A.call(t) : e.get(t)), N = (t, e, A) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, A);
}, b = (t, e, A, r) => (_a(t, e, "write to private field"), r ? r.call(t, A) : e.set(t, A), A);
var $i = (t, e, A, r) => ({
  set _(s) {
    b(t, e, s, A);
  },
  get _() {
    return l(t, e, r);
  }
}), _ = (t, e, A) => (_a(t, e, "access private method"), A);
import Gi from "os";
import * as KI from "fs";
import nQ, { realpathSync as ed, lstatSync as Ad, readdir as td, readdirSync as rd, readlinkSync as sd, readFileSync as nd } from "fs";
import iQ, { win32 as vg, posix as id } from "path";
import un from "http";
import oQ from "https";
import El from "net";
import aQ from "tls";
import Yi, { EventEmitter as ul } from "events";
import AA from "assert";
import _t from "util";
import Ot from "stream";
import fs from "buffer";
import od from "querystring";
import Yr from "stream/web";
import Ea from "node:stream";
import Qn from "node:util";
import cQ from "node:events";
import gQ from "worker_threads";
import ad from "perf_hooks";
import lQ from "util/types";
import xi from "async_hooks";
import cd from "console";
import gd, { fileURLToPath as hQ } from "url";
import ld from "node:assert";
import hd from "zlib";
import Ed, { StringDecoder as ud } from "string_decoder";
import EQ from "diagnostics_channel";
import { execSync as uQ } from "child_process";
import { lstat as Qd, readdir as Cd, readlink as Bd, realpath as Id } from "fs/promises";
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ql(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function QQ(t) {
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
var Cl = {}, Lg = function(t, e) {
  return Lg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, r) {
    A.__proto__ = r;
  } || function(A, r) {
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (A[s] = r[s]);
  }, Lg(t, e);
};
function CQ(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Lg(t, e);
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
function BQ(t, e) {
  var A = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (A[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (A[r[s]] = t[r[s]]);
  return A;
}
function IQ(t, e, A, r) {
  var s = arguments.length, n = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, A) : r, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, A, r);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (i = t[a]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, A, n) : i(e, A)) || n);
  return s > 3 && n && Object.defineProperty(e, A, n), n;
}
function dQ(t, e) {
  return function(A, r) {
    e(A, r, t);
  };
}
function dd(t, e, A, r, s, n) {
  function i(C) {
    if (C !== void 0 && typeof C != "function")
      throw new TypeError("Function expected");
    return C;
  }
  for (var a = r.kind, o = a === "getter" ? "get" : a === "setter" ? "set" : "value", g = !e && t ? r.static ? t : t.prototype : null, c = e || (g ? Object.getOwnPropertyDescriptor(g, r.name) : {}), E, h = !1, Q = A.length - 1; Q >= 0; Q--) {
    var B = {};
    for (var u in r)
      B[u] = u === "access" ? {} : r[u];
    for (var u in r.access)
      B.access[u] = r.access[u];
    B.addInitializer = function(C) {
      if (h)
        throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(i(C || null));
    };
    var I = (0, A[Q])(a === "accessor" ? { get: c.get, set: c.set } : c[o], B);
    if (a === "accessor") {
      if (I === void 0)
        continue;
      if (I === null || typeof I != "object")
        throw new TypeError("Object expected");
      (E = i(I.get)) && (c.get = E), (E = i(I.set)) && (c.set = E), (E = i(I.init)) && s.unshift(E);
    } else
      (E = i(I)) && (a === "field" ? s.unshift(E) : c[o] = E);
  }
  g && Object.defineProperty(g, r.name, c), h = !0;
}
function fd(t, e, A) {
  for (var r = arguments.length > 2, s = 0; s < e.length; s++)
    A = r ? e[s].call(t, A) : e[s].call(t);
  return r ? A : void 0;
}
function pd(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function md(t, e, A) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: A ? "".concat(A, " ", e) : e });
}
function fQ(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function pQ(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function a(c) {
      try {
        g(r.next(c));
      } catch (E) {
        i(E);
      }
    }
    function o(c) {
      try {
        g(r.throw(c));
      } catch (E) {
        i(E);
      }
    }
    function g(c) {
      c.done ? n(c.value) : s(c.value).then(a, o);
    }
    g((r = r.apply(t, e || [])).next());
  });
}
function mQ(t, e) {
  var A = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, s, n, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(g) {
    return function(c) {
      return o([g, c]);
    };
  }
  function o(g) {
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
function wQ(t, e) {
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
function yQ() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Bl(arguments[e]));
  return t;
}
function RQ() {
  for (var t = 0, e = 0, A = arguments.length; e < A; e++)
    t += arguments[e].length;
  for (var r = Array(t), s = 0, e = 0; e < A; e++)
    for (var n = arguments[e], i = 0, a = n.length; i < a; i++, s++)
      r[s] = n[i];
  return r;
}
function DQ(t, e, A) {
  if (A || arguments.length === 2)
    for (var r = 0, s = e.length, n; r < s; r++)
      (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return t.concat(n || Array.prototype.slice.call(e));
}
function sn(t) {
  return this instanceof sn ? (this.v = t, this) : new sn(t);
}
function bQ(t, e, A) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = A.apply(t, e || []), s, n = [];
  return s = {}, i("next"), i("throw"), i("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function i(h) {
    r[h] && (s[h] = function(Q) {
      return new Promise(function(B, u) {
        n.push([h, Q, B, u]) > 1 || a(h, Q);
      });
    });
  }
  function a(h, Q) {
    try {
      o(r[h](Q));
    } catch (B) {
      E(n[0][3], B);
    }
  }
  function o(h) {
    h.value instanceof sn ? Promise.resolve(h.value.v).then(g, c) : E(n[0][2], h);
  }
  function g(h) {
    a("next", h);
  }
  function c(h) {
    a("throw", h);
  }
  function E(h, Q) {
    h(Q), n.shift(), n.length && a(n[0][0], n[0][1]);
  }
}
function kQ(t) {
  var e, A;
  return e = {}, r("next"), r("throw", function(s) {
    throw s;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(s, n) {
    e[s] = t[s] ? function(i) {
      return (A = !A) ? { value: sn(t[s](i)), done: !1 } : n ? n(i) : i;
    } : n;
  }
}
function SQ(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], A;
  return e ? e.call(t) : (t = typeof jo == "function" ? jo(t) : t[Symbol.iterator](), A = {}, r("next"), r("throw"), r("return"), A[Symbol.asyncIterator] = function() {
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
    Promise.resolve(o).then(function(g) {
      n({ value: g, done: a });
    }, i);
  }
}
function FQ(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var wd = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function NQ(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && ua(e, t, A);
  return wd(e, t), e;
}
function UQ(t) {
  return t && t.__esModule ? t : { default: t };
}
function TQ(t, e, A, r) {
  if (A === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !r : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return A === "m" ? r : A === "a" ? r.call(t) : r ? r.value : e.get(t);
}
function vQ(t, e, A, r, s) {
  if (r === "m")
    throw new TypeError("Private method is not writable");
  if (r === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? s.call(t, A) : s ? s.value = A : e.set(t, A), A;
}
function LQ(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function MQ(t, e, A) {
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
var yd = typeof SuppressedError == "function" ? SuppressedError : function(t, e, A) {
  var r = new Error(A);
  return r.name = "SuppressedError", r.error = t, r.suppressed = e, r;
};
function GQ(t) {
  function e(r) {
    t.error = t.hasError ? new yd(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
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
const Rd = {
  __extends: CQ,
  __assign: qo,
  __rest: BQ,
  __decorate: IQ,
  __param: dQ,
  __metadata: fQ,
  __awaiter: pQ,
  __generator: mQ,
  __createBinding: ua,
  __exportStar: wQ,
  __values: jo,
  __read: Bl,
  __spread: yQ,
  __spreadArrays: RQ,
  __spreadArray: DQ,
  __await: sn,
  __asyncGenerator: bQ,
  __asyncDelegator: kQ,
  __asyncValues: SQ,
  __makeTemplateObject: FQ,
  __importStar: NQ,
  __importDefault: UQ,
  __classPrivateFieldGet: TQ,
  __classPrivateFieldSet: vQ,
  __classPrivateFieldIn: LQ,
  __addDisposableResource: MQ,
  __disposeResources: GQ
}, Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: MQ,
  get __assign() {
    return qo;
  },
  __asyncDelegator: kQ,
  __asyncGenerator: bQ,
  __asyncValues: SQ,
  __await: sn,
  __awaiter: pQ,
  __classPrivateFieldGet: TQ,
  __classPrivateFieldIn: LQ,
  __classPrivateFieldSet: vQ,
  __createBinding: ua,
  __decorate: IQ,
  __disposeResources: GQ,
  __esDecorate: dd,
  __exportStar: wQ,
  __extends: CQ,
  __generator: mQ,
  __importDefault: UQ,
  __importStar: NQ,
  __makeTemplateObject: FQ,
  __metadata: fQ,
  __param: dQ,
  __propKey: pd,
  __read: Bl,
  __rest: BQ,
  __runInitializers: fd,
  __setFunctionName: md,
  __spread: yQ,
  __spreadArray: DQ,
  __spreadArrays: RQ,
  __values: jo,
  default: Rd
}, Symbol.toStringTag, { value: "Module" })), Il = /* @__PURE__ */ QQ(Dd);
var Vt = {}, Oa = {}, Hr = {}, Xl;
function Qa() {
  if (Xl)
    return Hr;
  Xl = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.EnvMissingError = Hr.EnvError = void 0;
  var t = Il, e = (
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
  Hr.EnvError = e;
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
  return Hr.EnvMissingError = A, Hr;
}
var Ha = {}, Kl;
function YQ() {
  return Kl || (Kl = 1, function(t) {
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
    }, a = i.white("================================"), o = function(c, E) {
      E === void 0 && (E = r);
      for (var h = [], Q = [], B = 0, u = Object.entries(c); B < u.length; B++) {
        var I = u[B], C = I[0], d = I[1];
        d instanceof A.EnvMissingError ? h.push("    ".concat(i.blue(C), ": ").concat(d.message || "(required)")) : Q.push("    ".concat(i.blue(C), ": ").concat((d == null ? void 0 : d.message) || "(invalid format)"));
      }
      Q.length && Q.unshift(" ".concat(i.yellow("Invalid"), " environment variables:")), h.length && h.unshift(" ".concat(i.yellow("Missing"), " environment variables:"));
      var f = [
        a,
        Q.sort().join(`
`),
        h.sort().join(`
`),
        a
      ].filter(function(w) {
        return !!w;
      }).join(`
`);
      E(f);
    };
    t.envalidErrorFormatter = o;
    var g = function(c, E) {
      var h = c.errors, Q = h === void 0 ? {} : h, B = E === void 0 ? { logger: r } : E, u = B.onError, I = B.logger;
      if (Object.keys(Q).length)
        if ((0, t.envalidErrorFormatter)(Q, I), u)
          u(Q);
        else if (s)
          I(i.yellow(`
 Exiting with error code 1`)), process.exit(1);
        else
          throw new TypeError("Environment validation failed");
    };
    t.defaultReporter = g;
  }(Ha)), Ha;
}
var eh;
function bd() {
  return eh || (eh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getSanitizedEnv = t.testOnlySymbol = void 0;
    var e = Qa(), A = YQ();
    t.testOnlySymbol = Symbol("envalid - test only");
    function r(o) {
      var g = o.spec, c = o.name, E = o.rawValue;
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
    function s(o) {
      var g = o.example ? ' (eg. "'.concat(o.example, '")') : "", c = o.docs ? ". See ".concat(o.docs) : "";
      return "".concat(o.desc).concat(g).concat(c);
    }
    var n = function(o, g) {
      return o[g];
    }, i = function(o) {
      return o === t.testOnlySymbol;
    };
    function a(o, g, c) {
      c === void 0 && (c = {});
      for (var E = {}, h = g, Q = {}, B = Object.keys(h), u = n(o, "NODE_ENV"), I = 0, C = B; I < C.length; I++) {
        var d = C[I], f = h[d], w = n(o, d);
        if (w === void 0) {
          var m = u && u !== "production" && f.hasOwnProperty("devDefault");
          if (m) {
            if (E[d] = f.devDefault, i(f.devDefault) && u != "test")
              throw new e.EnvMissingError(s(f));
            continue;
          }
          if ("default" in f) {
            E[d] = f.default;
            continue;
          }
        }
        try {
          if (w === void 0)
            throw E[d] = void 0, new e.EnvMissingError(s(f));
          E[d] = r({ name: d, spec: f, rawValue: w });
        } catch (R) {
          if ((c == null ? void 0 : c.reporter) === null)
            throw R;
          R instanceof Error && (Q[d] = R);
        }
      }
      var y = (c == null ? void 0 : c.reporter) || A.defaultReporter;
      return y({ errors: Q, env: E }), E;
    }
    t.getSanitizedEnv = a;
  }(Oa)), Oa;
}
var Pa = {}, Ah;
function xQ() {
  return Ah || (Ah = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.applyDefaultMiddleware = t.accessorMiddleware = t.strictProxyMiddleware = void 0;
    var e = function(s, n, i) {
      i === void 0 && (i = {});
      var a = i.extraInspectables, o = a === void 0 ? [] : a, g = [
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
          var Q;
          if (g.includes(h) || c.includes(h.toString()) || o.includes(h))
            return E[h];
          var B = E.hasOwnProperty(h);
          if (!B)
            throw typeof n == "object" && (!((Q = n == null ? void 0 : n.hasOwnProperty) === null || Q === void 0) && Q.call(n, h)) ? new ReferenceError("[envalid] Env var ".concat(h, " was accessed but not validated. This var is set in the environment; please add an envalid validator for it.")) : new ReferenceError("[envalid] Env var not found: ".concat(h));
          return E[h];
        },
        set: function(E, h) {
          throw new TypeError("[envalid] Attempt to mutate environment value: ".concat(h));
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
var th;
function kd() {
  if (th)
    return Vt;
  th = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.testOnly = Vt.customCleanEnv = Vt.cleanEnv = void 0;
  var t = bd(), e = xQ();
  function A(n, i, a) {
    a === void 0 && (a = {});
    var o = (0, t.getSanitizedEnv)(n, i, a);
    return Object.freeze((0, e.applyDefaultMiddleware)(o, n));
  }
  Vt.cleanEnv = A;
  function r(n, i, a, o) {
    o === void 0 && (o = {});
    var g = (0, t.getSanitizedEnv)(n, i, o);
    return Object.freeze(a(g, n));
  }
  Vt.customCleanEnv = r;
  var s = function(n) {
    return process.env.NODE_ENV === "test" ? n : t.testOnlySymbol;
  };
  return Vt.testOnly = s, Vt;
}
var Va = {}, rh;
function Sd() {
  return rh || (rh = 1, Object.defineProperty(Va, "__esModule", { value: !0 })), Va;
}
var rA = {}, Wt = {}, sh;
function JQ() {
  if (sh)
    return Wt;
  sh = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.makeStructuredValidator = Wt.makeExactValidator = Wt.makeValidator = void 0;
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
var nh;
function Fd() {
  if (nh)
    return rA;
  nh = 1, Object.defineProperty(rA, "__esModule", { value: !0 }), rA.json = rA.url = rA.port = rA.host = rA.email = rA.str = rA.num = rA.bool = void 0;
  var t = Qa(), e = JQ(), A = function(a) {
    if (!a.length)
      return !1;
    for (var o = a.split("."), g = void 0, c = 0; c < o.length; c++)
      if (g = o[c], !/^[a-z\u00a1-\uffff0-9-]+$/i.test(g) || /[\uff01-\uff5e]/.test(g) || g[0] === "-" || g[g.length - 1] === "-")
        return !1;
    return !0;
  }, r = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/, s = /([a-f0-9]+:+)+[a-f0-9]+/, n = function(a) {
    return a.length ? r.test(a) || s.test(a) : !1;
  }, i = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return rA.bool = (0, e.makeExactValidator)(function(a) {
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
  }), rA.num = (0, e.makeValidator)(function(a) {
    var o = parseFloat(a);
    if (Number.isNaN(o))
      throw new t.EnvError('Invalid number input: "'.concat(a, '"'));
    return o;
  }), rA.str = (0, e.makeValidator)(function(a) {
    if (typeof a == "string")
      return a;
    throw new t.EnvError('Not a string: "'.concat(a, '"'));
  }), rA.email = (0, e.makeValidator)(function(a) {
    if (i.test(a))
      return a;
    throw new t.EnvError('Invalid email address: "'.concat(a, '"'));
  }), rA.host = (0, e.makeValidator)(function(a) {
    if (!A(a) && !n(a))
      throw new t.EnvError('Invalid host (domain or ip): "'.concat(a, '"'));
    return a;
  }), rA.port = (0, e.makeValidator)(function(a) {
    var o = +a;
    if (Number.isNaN(o) || "".concat(o) !== "".concat(a) || o % 1 !== 0 || o < 1 || o > 65535)
      throw new t.EnvError('Invalid port input: "'.concat(a, '"'));
    return o;
  }), rA.url = (0, e.makeValidator)(function(a) {
    try {
      return new URL(a), a;
    } catch {
      throw new t.EnvError('Invalid url: "'.concat(a, '"'));
    }
  }), rA.json = (0, e.makeStructuredValidator)(function(a) {
    try {
      return JSON.parse(a);
    } catch {
      throw new t.EnvError('Invalid json: "'.concat(a, '"'));
    }
  }), rA;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.makeValidator = t.makeExactValidator = void 0;
  var e = Il;
  e.__exportStar(kd(), t), e.__exportStar(Qa(), t), e.__exportStar(xQ(), t), e.__exportStar(Sd(), t), e.__exportStar(Fd(), t), e.__exportStar(YQ(), t);
  var A = JQ();
  Object.defineProperty(t, "makeExactValidator", { enumerable: !0, get: function() {
    return A.makeExactValidator;
  } }), Object.defineProperty(t, "makeValidator", { enumerable: !0, get: function() {
    return A.makeValidator;
  } });
})(Cl);
var Wa = {}, nn = {}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.toCommandProperties = xr.toCommandValue = void 0;
function Nd(t) {
  return t == null ? "" : typeof t == "string" || t instanceof String ? t : JSON.stringify(t);
}
xr.toCommandValue = Nd;
function Ud(t) {
  return Object.keys(t).length ? {
    title: t.title,
    file: t.file,
    line: t.startLine,
    endLine: t.endLine,
    col: t.startColumn,
    endColumn: t.endColumn
  } : {};
}
xr.toCommandProperties = Ud;
var Td = le && le.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), vd = le && le.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), Ld = le && le.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && Td(e, t, A);
  return vd(e, t), e;
};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.issue = nn.issueCommand = void 0;
const Md = Ld(Gi), _Q = xr;
function OQ(t, e, A) {
  const r = new Yd(t, e, A);
  process.stdout.write(r.toString() + Md.EOL);
}
nn.issueCommand = OQ;
function Gd(t, e = "") {
  OQ(t, {}, e);
}
nn.issue = Gd;
const ih = "::";
class Yd {
  constructor(e, A, r) {
    e || (e = "missing.command"), this.command = e, this.properties = A, this.message = r;
  }
  toString() {
    let e = ih + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      e += " ";
      let A = !0;
      for (const r in this.properties)
        if (this.properties.hasOwnProperty(r)) {
          const s = this.properties[r];
          s && (A ? A = !1 : e += ",", e += `${r}=${Jd(s)}`);
        }
    }
    return e += `${ih}${xd(this.message)}`, e;
  }
}
function xd(t) {
  return _Q.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function Jd(t) {
  return _Q.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var on = {}, zi, _d = new Uint8Array(16);
function HQ() {
  if (!zi && (zi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !zi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return zi(_d);
}
const Od = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Ca(t) {
  return typeof t == "string" && Od.test(t);
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
var oh, ja, Za = 0, $a = 0;
function Hd(t, e, A) {
  var r = e && A || 0, s = e || new Array(16);
  t = t || {};
  var n = t.node || oh, i = t.clockseq !== void 0 ? t.clockseq : ja;
  if (n == null || i == null) {
    var a = t.random || (t.rng || HQ)();
    n == null && (n = oh = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]), i == null && (i = ja = (a[6] << 8 | a[7]) & 16383);
  }
  var o = t.msecs !== void 0 ? t.msecs : Date.now(), g = t.nsecs !== void 0 ? t.nsecs : $a + 1, c = o - Za + (g - $a) / 1e4;
  if (c < 0 && t.clockseq === void 0 && (i = i + 1 & 16383), (c < 0 || o > Za) && t.nsecs === void 0 && (g = 0), g >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Za = o, $a = g, ja = i, o += 122192928e5;
  var E = ((o & 268435455) * 1e4 + g) % 4294967296;
  s[r++] = E >>> 24 & 255, s[r++] = E >>> 16 & 255, s[r++] = E >>> 8 & 255, s[r++] = E & 255;
  var h = o / 4294967296 * 1e4 & 268435455;
  s[r++] = h >>> 8 & 255, s[r++] = h & 255, s[r++] = h >>> 24 & 15 | 16, s[r++] = h >>> 16 & 255, s[r++] = i >>> 8 | 128, s[r++] = i & 255;
  for (var Q = 0; Q < 6; ++Q)
    s[r + Q] = n[Q];
  return e || Ba(s);
}
function PQ(t) {
  if (!Ca(t))
    throw TypeError("Invalid UUID");
  var e, A = new Uint8Array(16);
  return A[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, A[1] = e >>> 16 & 255, A[2] = e >>> 8 & 255, A[3] = e & 255, A[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, A[5] = e & 255, A[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, A[7] = e & 255, A[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, A[9] = e & 255, A[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, A[11] = e / 4294967296 & 255, A[12] = e >>> 24 & 255, A[13] = e >>> 16 & 255, A[14] = e >>> 8 & 255, A[15] = e & 255, A;
}
function Pd(t) {
  t = unescape(encodeURIComponent(t));
  for (var e = [], A = 0; A < t.length; ++A)
    e.push(t.charCodeAt(A));
  return e;
}
var Vd = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Wd = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function VQ(t, e, A) {
  function r(s, n, i, a) {
    if (typeof s == "string" && (s = Pd(s)), typeof n == "string" && (n = PQ(n)), n.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var o = new Uint8Array(16 + s.length);
    if (o.set(n), o.set(s, n.length), o = A(o), o[6] = o[6] & 15 | e, o[8] = o[8] & 63 | 128, i) {
      a = a || 0;
      for (var g = 0; g < 16; ++g)
        i[a + g] = o[g];
      return i;
    }
    return Ba(o);
  }
  try {
    r.name = t;
  } catch {
  }
  return r.DNS = Vd, r.URL = Wd, r;
}
function qd(t) {
  if (typeof t == "string") {
    var e = unescape(encodeURIComponent(t));
    t = new Uint8Array(e.length);
    for (var A = 0; A < e.length; ++A)
      t[A] = e.charCodeAt(A);
  }
  return jd(Zd($d(t), t.length * 8));
}
function jd(t) {
  for (var e = [], A = t.length * 32, r = "0123456789abcdef", s = 0; s < A; s += 8) {
    var n = t[s >> 5] >>> s % 32 & 255, i = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(n & 15), 16);
    e.push(i);
  }
  return e;
}
function WQ(t) {
  return (t + 64 >>> 9 << 4) + 14 + 1;
}
function Zd(t, e) {
  t[e >> 5] |= 128 << e % 32, t[WQ(e) - 1] = e;
  for (var A = 1732584193, r = -271733879, s = -1732584194, n = 271733878, i = 0; i < t.length; i += 16) {
    var a = A, o = r, g = s, c = n;
    A = mA(A, r, s, n, t[i], 7, -680876936), n = mA(n, A, r, s, t[i + 1], 12, -389564586), s = mA(s, n, A, r, t[i + 2], 17, 606105819), r = mA(r, s, n, A, t[i + 3], 22, -1044525330), A = mA(A, r, s, n, t[i + 4], 7, -176418897), n = mA(n, A, r, s, t[i + 5], 12, 1200080426), s = mA(s, n, A, r, t[i + 6], 17, -1473231341), r = mA(r, s, n, A, t[i + 7], 22, -45705983), A = mA(A, r, s, n, t[i + 8], 7, 1770035416), n = mA(n, A, r, s, t[i + 9], 12, -1958414417), s = mA(s, n, A, r, t[i + 10], 17, -42063), r = mA(r, s, n, A, t[i + 11], 22, -1990404162), A = mA(A, r, s, n, t[i + 12], 7, 1804603682), n = mA(n, A, r, s, t[i + 13], 12, -40341101), s = mA(s, n, A, r, t[i + 14], 17, -1502002290), r = mA(r, s, n, A, t[i + 15], 22, 1236535329), A = wA(A, r, s, n, t[i + 1], 5, -165796510), n = wA(n, A, r, s, t[i + 6], 9, -1069501632), s = wA(s, n, A, r, t[i + 11], 14, 643717713), r = wA(r, s, n, A, t[i], 20, -373897302), A = wA(A, r, s, n, t[i + 5], 5, -701558691), n = wA(n, A, r, s, t[i + 10], 9, 38016083), s = wA(s, n, A, r, t[i + 15], 14, -660478335), r = wA(r, s, n, A, t[i + 4], 20, -405537848), A = wA(A, r, s, n, t[i + 9], 5, 568446438), n = wA(n, A, r, s, t[i + 14], 9, -1019803690), s = wA(s, n, A, r, t[i + 3], 14, -187363961), r = wA(r, s, n, A, t[i + 8], 20, 1163531501), A = wA(A, r, s, n, t[i + 13], 5, -1444681467), n = wA(n, A, r, s, t[i + 2], 9, -51403784), s = wA(s, n, A, r, t[i + 7], 14, 1735328473), r = wA(r, s, n, A, t[i + 12], 20, -1926607734), A = yA(A, r, s, n, t[i + 5], 4, -378558), n = yA(n, A, r, s, t[i + 8], 11, -2022574463), s = yA(s, n, A, r, t[i + 11], 16, 1839030562), r = yA(r, s, n, A, t[i + 14], 23, -35309556), A = yA(A, r, s, n, t[i + 1], 4, -1530992060), n = yA(n, A, r, s, t[i + 4], 11, 1272893353), s = yA(s, n, A, r, t[i + 7], 16, -155497632), r = yA(r, s, n, A, t[i + 10], 23, -1094730640), A = yA(A, r, s, n, t[i + 13], 4, 681279174), n = yA(n, A, r, s, t[i], 11, -358537222), s = yA(s, n, A, r, t[i + 3], 16, -722521979), r = yA(r, s, n, A, t[i + 6], 23, 76029189), A = yA(A, r, s, n, t[i + 9], 4, -640364487), n = yA(n, A, r, s, t[i + 12], 11, -421815835), s = yA(s, n, A, r, t[i + 15], 16, 530742520), r = yA(r, s, n, A, t[i + 2], 23, -995338651), A = RA(A, r, s, n, t[i], 6, -198630844), n = RA(n, A, r, s, t[i + 7], 10, 1126891415), s = RA(s, n, A, r, t[i + 14], 15, -1416354905), r = RA(r, s, n, A, t[i + 5], 21, -57434055), A = RA(A, r, s, n, t[i + 12], 6, 1700485571), n = RA(n, A, r, s, t[i + 3], 10, -1894986606), s = RA(s, n, A, r, t[i + 10], 15, -1051523), r = RA(r, s, n, A, t[i + 1], 21, -2054922799), A = RA(A, r, s, n, t[i + 8], 6, 1873313359), n = RA(n, A, r, s, t[i + 15], 10, -30611744), s = RA(s, n, A, r, t[i + 6], 15, -1560198380), r = RA(r, s, n, A, t[i + 13], 21, 1309151649), A = RA(A, r, s, n, t[i + 4], 6, -145523070), n = RA(n, A, r, s, t[i + 11], 10, -1120210379), s = RA(s, n, A, r, t[i + 2], 15, 718787259), r = RA(r, s, n, A, t[i + 9], 21, -343485551), A = vr(A, a), r = vr(r, o), s = vr(s, g), n = vr(n, c);
  }
  return [A, r, s, n];
}
function $d(t) {
  if (t.length === 0)
    return [];
  for (var e = t.length * 8, A = new Uint32Array(WQ(e)), r = 0; r < e; r += 8)
    A[r >> 5] |= (t[r / 8] & 255) << r % 32;
  return A;
}
function vr(t, e) {
  var A = (t & 65535) + (e & 65535), r = (t >> 16) + (e >> 16) + (A >> 16);
  return r << 16 | A & 65535;
}
function zd(t, e) {
  return t << e | t >>> 32 - e;
}
function Ia(t, e, A, r, s, n) {
  return vr(zd(vr(vr(e, t), vr(r, n)), s), A);
}
function mA(t, e, A, r, s, n, i) {
  return Ia(e & A | ~e & r, t, e, s, n, i);
}
function wA(t, e, A, r, s, n, i) {
  return Ia(e & r | A & ~r, t, e, s, n, i);
}
function yA(t, e, A, r, s, n, i) {
  return Ia(e ^ A ^ r, t, e, s, n, i);
}
function RA(t, e, A, r, s, n, i) {
  return Ia(A ^ (e | ~r), t, e, s, n, i);
}
var Xd = VQ("v3", 48, qd);
const Kd = Xd;
function ef(t, e, A) {
  t = t || {};
  var r = t.random || (t.rng || HQ)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    A = A || 0;
    for (var s = 0; s < 16; ++s)
      e[A + s] = r[s];
    return e;
  }
  return Ba(r);
}
function Af(t, e, A, r) {
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
function tf(t) {
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
    for (var g = new Uint32Array(16), c = 0; c < 16; ++c)
      g[c] = t[o * 64 + c * 4] << 24 | t[o * 64 + c * 4 + 1] << 16 | t[o * 64 + c * 4 + 2] << 8 | t[o * 64 + c * 4 + 3];
    a[o] = g;
  }
  a[i - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32), a[i - 1][14] = Math.floor(a[i - 1][14]), a[i - 1][15] = (t.length - 1) * 8 & 4294967295;
  for (var E = 0; E < i; ++E) {
    for (var h = new Uint32Array(80), Q = 0; Q < 16; ++Q)
      h[Q] = a[E][Q];
    for (var B = 16; B < 80; ++B)
      h[B] = za(h[B - 3] ^ h[B - 8] ^ h[B - 14] ^ h[B - 16], 1);
    for (var u = A[0], I = A[1], C = A[2], d = A[3], f = A[4], w = 0; w < 80; ++w) {
      var m = Math.floor(w / 20), y = za(u, 5) + Af(m, I, C, d) + f + e[m] + h[w] >>> 0;
      f = d, d = C, C = za(I, 30) >>> 0, I = u, u = y;
    }
    A[0] = A[0] + u >>> 0, A[1] = A[1] + I >>> 0, A[2] = A[2] + C >>> 0, A[3] = A[3] + d >>> 0, A[4] = A[4] + f >>> 0;
  }
  return [A[0] >> 24 & 255, A[0] >> 16 & 255, A[0] >> 8 & 255, A[0] & 255, A[1] >> 24 & 255, A[1] >> 16 & 255, A[1] >> 8 & 255, A[1] & 255, A[2] >> 24 & 255, A[2] >> 16 & 255, A[2] >> 8 & 255, A[2] & 255, A[3] >> 24 & 255, A[3] >> 16 & 255, A[3] >> 8 & 255, A[3] & 255, A[4] >> 24 & 255, A[4] >> 16 & 255, A[4] >> 8 & 255, A[4] & 255];
}
var rf = VQ("v5", 80, tf);
const sf = rf, nf = "00000000-0000-0000-0000-000000000000";
function of(t) {
  if (!Ca(t))
    throw TypeError("Invalid UUID");
  return parseInt(t.substr(14, 1), 16);
}
const af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: nf,
  parse: PQ,
  stringify: Ba,
  v1: Hd,
  v3: Kd,
  v4: ef,
  v5: sf,
  validate: Ca,
  version: of
}, Symbol.toStringTag, { value: "Module" })), cf = /* @__PURE__ */ QQ(af);
var gf = le && le.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), lf = le && le.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), qQ = le && le.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && gf(e, t, A);
  return lf(e, t), e;
};
Object.defineProperty(on, "__esModule", { value: !0 });
on.prepareKeyValueMessage = on.issueFileCommand = void 0;
const ah = qQ(nQ), Mg = qQ(Gi), hf = cf, jQ = xr;
function Ef(t, e) {
  const A = process.env[`GITHUB_${t}`];
  if (!A)
    throw new Error(`Unable to find environment variable for file command ${t}`);
  if (!ah.existsSync(A))
    throw new Error(`Missing file at path: ${A}`);
  ah.appendFileSync(A, `${jQ.toCommandValue(e)}${Mg.EOL}`, {
    encoding: "utf8"
  });
}
on.issueFileCommand = Ef;
function uf(t, e) {
  const A = `ghadelimiter_${hf.v4()}`, r = jQ.toCommandValue(e);
  if (t.includes(A))
    throw new Error(`Unexpected input: name should not contain the delimiter "${A}"`);
  if (r.includes(A))
    throw new Error(`Unexpected input: value should not contain the delimiter "${A}"`);
  return `${t}<<${A}${Mg.EOL}${r}${Mg.EOL}${A}`;
}
on.prepareKeyValueMessage = uf;
var wn = {}, CA = {}, an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.checkBypass = an.getProxyUrl = void 0;
function Qf(t) {
  const e = t.protocol === "https:";
  if (ZQ(t))
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
an.getProxyUrl = Qf;
function ZQ(t) {
  if (!t.hostname)
    return !1;
  const e = t.hostname;
  if (Cf(e))
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
an.checkBypass = ZQ;
function Cf(t) {
  const e = t.toLowerCase();
  return e === "localhost" || e.startsWith("127.") || e.startsWith("[::1]") || e.startsWith("[0:0:0:0:0:0:0:1]");
}
var Cn = {}, Bf = aQ, dl = un, $Q = oQ, If = Yi, df = _t;
Cn.httpOverHttp = ff;
Cn.httpsOverHttp = pf;
Cn.httpOverHttps = mf;
Cn.httpsOverHttps = wf;
function ff(t) {
  var e = new gr(t);
  return e.request = dl.request, e;
}
function pf(t) {
  var e = new gr(t);
  return e.request = dl.request, e.createSocket = zQ, e.defaultPort = 443, e;
}
function mf(t) {
  var e = new gr(t);
  return e.request = $Q.request, e;
}
function wf(t) {
  var e = new gr(t);
  return e.request = $Q.request, e.createSocket = zQ, e.defaultPort = 443, e;
}
function gr(t) {
  var e = this;
  e.options = t || {}, e.proxyOptions = e.options.proxy || {}, e.maxSockets = e.options.maxSockets || dl.Agent.defaultMaxSockets, e.requests = [], e.sockets = [], e.on("free", function(r, s, n, i) {
    for (var a = XQ(s, n, i), o = 0, g = e.requests.length; o < g; ++o) {
      var c = e.requests[o];
      if (c.host === a.host && c.port === a.port) {
        e.requests.splice(o, 1), c.request.onSocket(r);
        return;
      }
    }
    r.destroy(), e.removeSocket(r);
  });
}
df.inherits(gr, If.EventEmitter);
gr.prototype.addRequest = function(e, A, r, s) {
  var n = this, i = fl({ request: e }, n.options, XQ(A, r, s));
  if (n.sockets.length >= this.maxSockets) {
    n.requests.push(i);
    return;
  }
  n.createSocket(i, function(a) {
    a.on("free", o), a.on("close", g), a.on("agentRemove", g), e.onSocket(a);
    function o() {
      n.emit("free", a, i);
    }
    function g(c) {
      n.removeSocket(a), a.removeListener("free", o), a.removeListener("close", g), a.removeListener("agentRemove", g);
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
  i.useChunkedEncodingByDefault = !1, i.once("response", a), i.once("upgrade", o), i.once("connect", g), i.once("error", c), i.end();
  function a(E) {
    E.upgrade = !0;
  }
  function o(E, h, Q) {
    process.nextTick(function() {
      g(E, h, Q);
    });
  }
  function g(E, h, Q) {
    if (i.removeAllListeners(), h.removeAllListeners(), E.statusCode !== 200) {
      wr(
        "tunneling socket could not be established, statusCode=%d",
        E.statusCode
      ), h.destroy();
      var B = new Error("tunneling socket could not be established, statusCode=" + E.statusCode);
      B.code = "ECONNRESET", e.request.emit("error", B), r.removeSocket(s);
      return;
    }
    if (Q.length > 0) {
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
function zQ(t, e) {
  var A = this;
  gr.prototype.createSocket.call(A, t, function(r) {
    var s = t.request.getHeader("host"), n = fl({}, A.options, {
      socket: r,
      servername: s ? s.replace(/:.*$/, "") : t.host
    }), i = Bf.connect(0, n);
    A.sockets[A.sockets.indexOf(r)] = i, e(i);
  });
}
function XQ(t, e, A) {
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
        var a = s[n];
        r[a] !== void 0 && (t[a] = r[a]);
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
Cn.debug = wr;
var yf = Cn, Ee = {}, Ye = {
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
  kRetryHandlerDefaultRetry: Symbol("retry agent default retry")
};
let aA = class extends Error {
  constructor(e) {
    super(e), this.name = "UndiciError", this.code = "UND_ERR";
  }
}, Rf = class KQ extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, KQ), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
  }
}, Df = class eC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, eC), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
  }
}, bf = class AC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, AC), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
  }
}, kf = class tC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, tC), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
  }
}, Sf = class rC extends aA {
  constructor(e, A, r, s) {
    super(e), Error.captureStackTrace(this, rC), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = s, this.status = A, this.statusCode = A, this.headers = r;
  }
}, Ff = class sC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, sC), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
  }
}, Nf = class nC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, nC), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
  }
}, Uf = class iC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, iC), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
  }
}, Tf = class oC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, oC), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
  }
}, vf = class aC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, aC), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
  }
}, Lf = class cC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, cC), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
  }
}, Mf = class gC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, gC), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
  }
}, Gf = class lC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, lC), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
  }
}, Yf = class hC extends aA {
  constructor(e, A) {
    super(e), Error.captureStackTrace(this, hC), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = A;
  }
}, EC = class uC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, uC), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
  }
}, xf = class extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, EC), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
  }
}, Jf = class QC extends Error {
  constructor(e, A, r) {
    super(e), Error.captureStackTrace(this, QC), this.name = "HTTPParserError", this.code = A ? `HPE_${A}` : void 0, this.data = r ? r.toString() : void 0;
  }
}, _f = class CC extends aA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, CC), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
  }
}, Of = class BC extends aA {
  constructor(e, A, { headers: r, data: s }) {
    super(e), Error.captureStackTrace(this, BC), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = A, this.data = s, this.headers = r;
  }
};
var ke = {
  HTTPParserError: Jf,
  UndiciError: aA,
  HeadersTimeoutError: Df,
  HeadersOverflowError: bf,
  BodyTimeoutError: kf,
  RequestContentLengthMismatchError: vf,
  ConnectTimeoutError: Rf,
  ResponseStatusCodeError: Sf,
  InvalidArgumentError: Ff,
  InvalidReturnValueError: Nf,
  RequestAbortedError: Uf,
  ClientDestroyedError: Mf,
  ClientClosedError: Gf,
  InformationalError: Tf,
  SocketError: Yf,
  NotSupportedError: EC,
  ResponseContentLengthMismatchError: Lf,
  BalancedPoolMissingUpstreamError: xf,
  ResponseExceededMaxSizeError: _f,
  RequestRetryError: Of
};
const IC = AA, { kDestroyed: dC, kBodyUsed: ch } = Ye, { IncomingMessage: Hf } = un, cn = Ot, Pf = El, { InvalidArgumentError: dA } = ke, { Blob: gh } = fs, Zo = _t, { stringify: Vf } = od, [Xa, lh] = process.versions.node.split(".").map((t) => Number(t));
function Wf() {
}
function pl(t) {
  return t && typeof t == "object" && typeof t.pipe == "function" && typeof t.on == "function";
}
function fC(t) {
  return gh && t instanceof gh || t && typeof t == "object" && (typeof t.stream == "function" || typeof t.arrayBuffer == "function") && /^(Blob|File)$/.test(t[Symbol.toStringTag]);
}
function qf(t, e) {
  if (t.includes("?") || t.includes("#"))
    throw new Error('Query params cannot be passed when url already contains "?" or "#".');
  const A = Vf(e);
  return A && (t += "?" + A), t;
}
function pC(t) {
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
function jf(t) {
  if (t = pC(t), t.pathname !== "/" || t.search || t.hash)
    throw new dA("invalid url");
  return t;
}
function Zf(t) {
  if (t[0] === "[") {
    const A = t.indexOf("]");
    return IC(A !== -1), t.substring(1, A);
  }
  const e = t.indexOf(":");
  return e === -1 ? t : t.substring(0, e);
}
function $f(t) {
  if (!t)
    return null;
  IC.strictEqual(typeof t, "string");
  const e = Zf(t);
  return Pf.isIP(e) ? "" : e;
}
function zf(t) {
  return JSON.parse(JSON.stringify(t));
}
function Xf(t) {
  return t != null && typeof t[Symbol.asyncIterator] == "function";
}
function Kf(t) {
  return t != null && (typeof t[Symbol.iterator] == "function" || typeof t[Symbol.asyncIterator] == "function");
}
function ep(t) {
  if (t == null)
    return 0;
  if (pl(t)) {
    const e = t._readableState;
    return e && e.objectMode === !1 && e.ended === !0 && Number.isFinite(e.length) ? e.length : null;
  } else {
    if (fC(t))
      return t.size != null ? t.size : null;
    if (wC(t))
      return t.byteLength;
  }
  return null;
}
function ml(t) {
  return !t || !!(t.destroyed || t[dC]);
}
function mC(t) {
  const e = t && t._readableState;
  return ml(t) && e && !e.endEmitted;
}
function Ap(t, e) {
  t == null || !pl(t) || ml(t) || (typeof t.destroy == "function" ? (Object.getPrototypeOf(t).constructor === Hf && (t.socket = null), t.destroy(e)) : e && process.nextTick((A, r) => {
    A.emit("error", r);
  }, t, e), t.destroyed !== !0 && (t[dC] = !0));
}
const tp = /timeout=(\d+)/;
function rp(t) {
  const e = t.toString().match(tp);
  return e ? parseInt(e[1], 10) * 1e3 : null;
}
function sp(t, e = {}) {
  if (!Array.isArray(t))
    return t;
  for (let A = 0; A < t.length; A += 2) {
    const r = t[A].toString().toLowerCase();
    let s = e[r];
    s ? (Array.isArray(s) || (s = [s], e[r] = s), s.push(t[A + 1].toString("utf8"))) : Array.isArray(t[A + 1]) ? e[r] = t[A + 1].map((n) => n.toString("utf8")) : e[r] = t[A + 1].toString("utf8");
  }
  return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
}
function np(t) {
  const e = [];
  let A = !1, r = -1;
  for (let s = 0; s < t.length; s += 2) {
    const n = t[s + 0].toString(), i = t[s + 1].toString("utf8");
    n.length === 14 && (n === "content-length" || n.toLowerCase() === "content-length") ? (e.push(n, i), A = !0) : n.length === 19 && (n === "content-disposition" || n.toLowerCase() === "content-disposition") ? r = e.push(n, i) - 1 : e.push(n, i);
  }
  return A && r !== -1 && (e[r] = Buffer.from(e[r]).toString("latin1")), e;
}
function wC(t) {
  return t instanceof Uint8Array || Buffer.isBuffer(t);
}
function ip(t, e, A) {
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
function op(t) {
  return !!(t && (cn.isDisturbed ? cn.isDisturbed(t) || t[ch] : t[ch] || t.readableDidRead || t._readableState && t._readableState.dataEmitted || mC(t)));
}
function ap(t) {
  return !!(t && (cn.isErrored ? cn.isErrored(t) : /state: 'errored'/.test(
    Zo.inspect(t)
  )));
}
function cp(t) {
  return !!(t && (cn.isReadable ? cn.isReadable(t) : /state: 'readable'/.test(
    Zo.inspect(t)
  )));
}
function gp(t) {
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
async function* lp(t) {
  for await (const e of t)
    yield Buffer.isBuffer(e) ? e : Buffer.from(e);
}
let yn;
function hp(t) {
  if (yn || (yn = Yr.ReadableStream), yn.from)
    return yn.from(lp(t));
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
function Ep(t) {
  return t && typeof t == "object" && typeof t.append == "function" && typeof t.delete == "function" && typeof t.get == "function" && typeof t.getAll == "function" && typeof t.has == "function" && typeof t.set == "function" && t[Symbol.toStringTag] === "FormData";
}
function up(t) {
  if (t) {
    if (typeof t.throwIfAborted == "function")
      t.throwIfAborted();
    else if (t.aborted) {
      const e = new Error("The operation was aborted");
      throw e.name = "AbortError", e;
    }
  }
}
function Qp(t, e) {
  return "addEventListener" in t ? (t.addEventListener("abort", e, { once: !0 }), () => t.removeEventListener("abort", e)) : (t.addListener("abort", e), () => t.removeListener("abort", e));
}
const Cp = !!String.prototype.toWellFormed;
function Bp(t) {
  return Cp ? `${t}`.toWellFormed() : Zo.toUSVString ? Zo.toUSVString(t) : `${t}`;
}
function Ip(t) {
  if (t == null || t === "")
    return { start: 0, end: null, size: null };
  const e = t ? t.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
  return e ? {
    start: parseInt(e[1]),
    end: e[2] ? parseInt(e[2]) : null,
    size: e[3] ? parseInt(e[3]) : null
  } : null;
}
const yC = /* @__PURE__ */ Object.create(null);
yC.enumerable = !0;
var de = {
  kEnumerableProperty: yC,
  nop: Wf,
  isDisturbed: op,
  isErrored: ap,
  isReadable: cp,
  toUSVString: Bp,
  isReadableAborted: mC,
  isBlobLike: fC,
  parseOrigin: jf,
  parseURL: pC,
  getServerName: $f,
  isStream: pl,
  isIterable: Kf,
  isAsyncIterable: Xf,
  isDestroyed: ml,
  parseRawHeaders: np,
  parseHeaders: sp,
  parseKeepAliveTimeout: rp,
  destroy: Ap,
  bodyLength: ep,
  deepClone: zf,
  ReadableStreamFrom: hp,
  isBuffer: wC,
  validateHandler: ip,
  getSocketInfo: gp,
  isFormDataLike: Ep,
  buildURL: qf,
  throwIfAborted: up,
  addAbortListener: Qp,
  parseRangeHeader: Ip,
  nodeMajor: Xa,
  nodeMinor: lh,
  nodeHasAutoSelectFamily: Xa > 18 || Xa === 18 && lh >= 13,
  safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"]
};
let Ka = Date.now(), Br;
const pr = [];
function dp() {
  Ka = Date.now();
  let t = pr.length, e = 0;
  for (; e < t; ) {
    const A = pr[e];
    A.state === 0 ? A.state = Ka + A.delay : A.state > 0 && Ka >= A.state && (A.state = -1, A.callback(A.opaque)), A.state === -1 ? (A.state = -2, e !== t - 1 ? pr[e] = pr.pop() : pr.pop(), t -= 1) : e += 1;
  }
  pr.length > 0 && RC();
}
function RC() {
  Br && Br.refresh ? Br.refresh() : (clearTimeout(Br), Br = setTimeout(dp, 1e3), Br.unref && Br.unref());
}
class hh {
  constructor(e, A, r) {
    this.callback = e, this.delay = A, this.opaque = r, this.state = -2, this.refresh();
  }
  refresh() {
    this.state === -2 && (pr.push(this), (!Br || pr.length === 1) && RC()), this.state = 0;
  }
  clear() {
    this.state = -1;
  }
}
var fp = {
  setTimeout(t, e, A) {
    return e < 1e3 ? setTimeout(t, e, A) : new hh(t, e, A);
  },
  clearTimeout(t) {
    t instanceof hh ? t.clear() : clearTimeout(t);
  }
}, Rs = { exports: {} }, ec, Eh;
function DC() {
  if (Eh)
    return ec;
  Eh = 1;
  const t = cQ.EventEmitter, e = Qn.inherits;
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
    let o = -this._lookbehind_size, g;
    if (o < 0) {
      for (; o < 0 && o <= s - i; ) {
        if (g = this._sbmh_lookup_char(r, o + i - 1), g === a && this._sbmh_memcmp(r, o, i - 1))
          return this._lookbehind_size = 0, ++this.matches, this.emit("info", !0), this._bufpos = o + i;
        o += this._occ[g];
      }
      if (o < 0)
        for (; o < 0 && !this._sbmh_memcmp(r, o, s - o); )
          ++o;
      if (o >= 0)
        this.emit("info", !1, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      else {
        const c = this._lookbehind_size + o;
        return c > 0 && this.emit("info", !1, this._lookbehind, 0, c), this._lookbehind.copy(
          this._lookbehind,
          0,
          c,
          this._lookbehind_size - c
        ), this._lookbehind_size -= c, r.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += s, this._bufpos = s, s;
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
  }, ec = A, ec;
}
var Ac, uh;
function pp() {
  if (uh)
    return Ac;
  uh = 1;
  const t = Qn.inherits, e = Ea.Readable;
  function A(r) {
    e.call(this, r);
  }
  return t(A, e), A.prototype._read = function(r) {
  }, Ac = A, Ac;
}
var tc, Qh;
function wl() {
  return Qh || (Qh = 1, tc = function(e, A, r) {
    if (!e || e[A] === void 0 || e[A] === null)
      return r;
    if (typeof e[A] != "number" || isNaN(e[A]))
      throw new TypeError("Limit " + A + " is not a valid number");
    return e[A];
  }), tc;
}
var rc, Ch;
function mp() {
  if (Ch)
    return rc;
  Ch = 1;
  const t = cQ.EventEmitter, e = Qn.inherits, A = wl(), r = DC(), s = Buffer.from(`\r
\r
`), n = /\r\n/g, i = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
  function a(o) {
    t.call(this), o = o || {};
    const g = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = A(o, "maxHeaderPairs", 2e3), this.maxHeaderSize = A(o, "maxHeaderSize", 80 * 1024), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new r(s), this.ss.on("info", function(c, E, h, Q) {
      E && !g.maxed && (g.nread + Q - h >= g.maxHeaderSize ? (Q = g.maxHeaderSize - g.nread + h, g.nread = g.maxHeaderSize, g.maxed = !0) : g.nread += Q - h, g.buffer += E.toString("binary", h, Q)), c && g._finish();
    });
  }
  return e(a, t), a.prototype.push = function(o) {
    const g = this.ss.push(o);
    if (this.finished)
      return g;
  }, a.prototype.reset = function() {
    this.finished = !1, this.buffer = "", this.header = {}, this.ss.reset();
  }, a.prototype._finish = function() {
    this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
    const o = this.header;
    this.header = {}, this.buffer = "", this.finished = !0, this.nread = this.npairs = 0, this.maxed = !1, this.emit("header", o);
  }, a.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs)
      return;
    const o = this.buffer.split(n), g = o.length;
    let c, E;
    for (var h = 0; h < g; ++h) {
      if (o[h].length === 0)
        continue;
      if ((o[h][0] === "	" || o[h][0] === " ") && E) {
        this.header[E][this.header[E].length - 1] += o[h];
        continue;
      }
      const Q = o[h].indexOf(":");
      if (Q === -1 || Q === 0)
        return;
      if (c = i.exec(o[h]), E = c[1].toLowerCase(), this.header[E] = this.header[E] || [], this.header[E].push(c[2] || ""), ++this.npairs === this.maxHeaderPairs)
        break;
    }
  }, rc = a, rc;
}
var sc, Bh;
function bC() {
  if (Bh)
    return sc;
  Bh = 1;
  const t = Ea.Writable, e = Qn.inherits, A = DC(), r = pp(), s = mp(), n = 45, i = Buffer.from("-"), a = Buffer.from(`\r
`), o = function() {
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
      this._part || (this._part = new r(this._partOpts), this._events.preamble ? this.emit("preamble", this._part) : this._ignore());
      const Q = this._hparser.push(c);
      if (!this._inHeader && Q !== void 0 && Q < c.length)
        c = c.slice(Q);
      else
        return h();
    }
    this._firstWrite && (this._bparser.push(a), this._firstWrite = !1), this._bparser.push(c), this._pause ? this._cb = h : h();
  }, g.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
  }, g.prototype.setBoundary = function(c) {
    const E = this;
    this._bparser = new A(`\r
--` + c), this._bparser.on("info", function(h, Q, B, u) {
      E._oninfo(h, Q, B, u);
    });
  }, g.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", o), this._part.resume());
  }, g.prototype._oninfo = function(c, E, h, Q) {
    let B;
    const u = this;
    let I = 0, C, d = !0;
    if (!this._part && this._justMatched && E) {
      for (; this._dashes < 2 && h + I < Q; )
        if (E[h + I] === n)
          ++I, ++this._dashes;
        else {
          this._dashes && (B = i), this._dashes = 0;
          break;
        }
      if (this._dashes === 2 && (h + I < Q && this._events.trailer && this.emit("trailer", E.slice(h + I, Q)), this.reset(), this._finished = !0, u._parts === 0 && (u._realFinish = !0, u.emit("finish"), u._realFinish = !1)), this._dashes)
        return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new r(this._partOpts), this._part._read = function(f) {
      u._unpause();
    }, this._isPreamble && this._events.preamble ? this.emit("preamble", this._part) : this._isPreamble !== !0 && this._events.part ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), E && h < Q && !this._ignoreData && (this._isPreamble || !this._inHeader ? (B && (d = this._part.push(B)), d = this._part.push(E.slice(h, Q)), d || (this._pause = !0)) : !this._isPreamble && this._inHeader && (B && this._hparser.push(B), C = this._hparser.push(E.slice(h, Q)), !this._inHeader && C !== void 0 && C < Q && this._oninfo(!1, E, h + C, Q))), c && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : h !== Q && (++this._parts, this._part.on("end", function() {
      --u._parts === 0 && (u._finished ? (u._realFinish = !0, u.emit("finish"), u._realFinish = !1) : u._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
  }, g.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
      const c = this._cb;
      this._cb = void 0, c();
    }
  }, sc = g, sc;
}
var nc, Ih;
function yl() {
  if (Ih)
    return nc;
  Ih = 1;
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
  function s(n, i, a) {
    return n && A(a)(n, i);
  }
  return nc = s, nc;
}
var ic, dh;
function kC() {
  if (dh)
    return ic;
  dh = 1;
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
  const s = 0, n = 1, i = 2, a = 3;
  function o(g) {
    const c = [];
    let E = s, h = "", Q = !1, B = !1, u = 0, I = "";
    const C = g.length;
    for (var d = 0; d < C; ++d) {
      const f = g[d];
      if (f === "\\" && Q)
        if (B)
          B = !1;
        else {
          B = !0;
          continue;
        }
      else if (f === '"')
        if (B)
          B = !1;
        else {
          Q ? (Q = !1, E = s) : Q = !0;
          continue;
        }
      else if (B && Q && (I += "\\"), B = !1, (E === i || E === a) && f === "'") {
        E === i ? (E = a, h = I.substring(1)) : E = n, I = "";
        continue;
      } else if (E === s && (f === "*" || f === "=") && c.length) {
        E = f === "*" ? i : n, c[u] = [I, void 0], I = "";
        continue;
      } else if (!Q && f === ";") {
        E = s, h ? (I.length && (I = t(
          I.replace(e, r),
          "binary",
          h
        )), h = "") : I.length && (I = t(I, "binary", "utf8")), c[u] === void 0 ? c[u] = I : c[u][1] = I, I = "", ++u;
        continue;
      } else if (!Q && (f === " " || f === "	"))
        continue;
      I += f;
    }
    return h && I.length ? I = t(
      I.replace(e, r),
      "binary",
      h
    ) : I && (I = t(I, "binary", "utf8")), c[u] === void 0 ? I && (c[u] = I) : c[u][1] = I, c;
  }
  return ic = o, ic;
}
var oc, fh;
function wp() {
  return fh || (fh = 1, oc = function(e) {
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
var ac, ph;
function yp() {
  if (ph)
    return ac;
  ph = 1;
  const { Readable: t } = Ea, { inherits: e } = Qn, A = bC(), r = kC(), s = yl(), n = wp(), i = wl(), a = /^boundary$/i, o = /^form-data$/i, g = /^charset$/i, c = /^filename$/i, E = /^name$/i;
  h.detect = /^multipart\/form-data/i;
  function h(u, I) {
    let C, d;
    const f = this;
    let w;
    const m = I.limits, y = I.isPartAFile || ((x, H, G) => H === "application/octet-stream" || G !== void 0), R = I.parsedConType || [], S = I.defCharset || "utf8", v = I.preservePath, T = { highWaterMark: I.fileHwm };
    for (C = 0, d = R.length; C < d; ++C)
      if (Array.isArray(R[C]) && a.test(R[C][0])) {
        w = R[C][1];
        break;
      }
    function z() {
      q === 0 && M && !u._done && (M = !1, f.end());
    }
    if (typeof w != "string")
      throw new Error("Multipart: Boundary not found");
    const K = i(m, "fieldSize", 1 * 1024 * 1024), $ = i(m, "fileSize", 1 / 0), ue = i(m, "files", 1 / 0), Y = i(m, "fields", 1 / 0), ee = i(m, "parts", 1 / 0), te = i(m, "headerPairs", 2e3), ne = i(m, "headerSize", 80 * 1024);
    let Z = 0, k = 0, q = 0, F, p, M = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = u;
    const J = {
      boundary: w,
      maxHeaderPairs: te,
      maxHeaderSize: ne,
      partHwm: T.highWaterMark,
      highWaterMark: I.highWaterMark
    };
    this.parser = new A(J), this.parser.on("drain", function() {
      if (f._needDrain = !1, f._cb && !f._pause) {
        const x = f._cb;
        f._cb = void 0, x();
      }
    }).on("part", function x(H) {
      if (++f._nparts > ee)
        return f.parser.removeListener("part", x), f.parser.on("part", Q), u.hitPartsLimit = !0, u.emit("partsLimit"), Q(H);
      if (p) {
        const G = p;
        G.emit("end"), G.removeAllListeners("end");
      }
      H.on("header", function(G) {
        let P, ae, oe, he, Se, xe, we = 0;
        if (G["content-type"] && (oe = r(G["content-type"][0]), oe[0])) {
          for (P = oe[0].toLowerCase(), C = 0, d = oe.length; C < d; ++C)
            if (g.test(oe[C][0])) {
              he = oe[C][1].toLowerCase();
              break;
            }
        }
        if (P === void 0 && (P = "text/plain"), he === void 0 && (he = S), G["content-disposition"]) {
          if (oe = r(G["content-disposition"][0]), !o.test(oe[0]))
            return Q(H);
          for (C = 0, d = oe.length; C < d; ++C)
            E.test(oe[C][0]) ? ae = oe[C][1] : c.test(oe[C][0]) && (xe = oe[C][1], v || (xe = n(xe)));
        } else
          return Q(H);
        G["content-transfer-encoding"] ? Se = G["content-transfer-encoding"][0].toLowerCase() : Se = "7bit";
        let De, Ve;
        if (y(ae, P, xe)) {
          if (Z === ue)
            return u.hitFilesLimit || (u.hitFilesLimit = !0, u.emit("filesLimit")), Q(H);
          if (++Z, !u._events.file) {
            f.parser._ignore();
            return;
          }
          ++q;
          const Ie = new B(T);
          F = Ie, Ie.on("end", function() {
            if (--q, f._pause = !1, z(), f._cb && !f._needDrain) {
              const fe = f._cb;
              f._cb = void 0, fe();
            }
          }), Ie._read = function(fe) {
            if (f._pause && (f._pause = !1, f._cb && !f._needDrain)) {
              const me = f._cb;
              f._cb = void 0, me();
            }
          }, u.emit("file", ae, Ie, xe, Se, P), De = function(fe) {
            if ((we += fe.length) > $) {
              const me = $ - we + fe.length;
              me > 0 && Ie.push(fe.slice(0, me)), Ie.truncated = !0, Ie.bytesRead = $, H.removeAllListeners("data"), Ie.emit("limit");
              return;
            } else
              Ie.push(fe) || (f._pause = !0);
            Ie.bytesRead = we;
          }, Ve = function() {
            F = void 0, Ie.push(null);
          };
        } else {
          if (k === Y)
            return u.hitFieldsLimit || (u.hitFieldsLimit = !0, u.emit("fieldsLimit")), Q(H);
          ++k, ++q;
          let Ie = "", fe = !1;
          p = H, De = function(me) {
            if ((we += me.length) > K) {
              const UA = K - (we - me.length);
              Ie += me.toString("binary", 0, UA), fe = !0, H.removeAllListeners("data");
            } else
              Ie += me.toString("binary");
          }, Ve = function() {
            p = void 0, Ie.length && (Ie = s(Ie, "binary", he)), u.emit("field", ae, Ie, !1, fe, Se, P), --q, z();
          };
        }
        H._readableState.sync = !1, H.on("data", De), H.on("end", Ve);
      }).on("error", function(G) {
        F && F.emit("error", G);
      });
    }).on("error", function(x) {
      u.emit("error", x);
    }).on("finish", function() {
      M = !0, z();
    });
  }
  h.prototype.write = function(u, I) {
    const C = this.parser.write(u);
    C && !this._pause ? I() : (this._needDrain = !C, this._cb = I);
  }, h.prototype.end = function() {
    const u = this;
    u.parser.writable ? u.parser.end() : u._boy._done || process.nextTick(function() {
      u._boy._done = !0, u._boy.emit("finish");
    });
  };
  function Q(u) {
    u.resume();
  }
  function B(u) {
    t.call(this, u), this.bytesRead = 0, this.truncated = !1;
  }
  return e(B, t), B.prototype._read = function(u) {
  }, ac = h, ac;
}
var cc, mh;
function Rp() {
  if (mh)
    return cc;
  mh = 1;
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
  }, cc = A, cc;
}
var gc, wh;
function Dp() {
  if (wh)
    return gc;
  wh = 1;
  const t = Rp(), e = yl(), A = wl(), r = /^charset$/i;
  s.detect = /^application\/x-www-form-urlencoded/i;
  function s(n, i) {
    const a = i.limits, o = i.parsedConType;
    this.boy = n, this.fieldSizeLimit = A(a, "fieldSize", 1 * 1024 * 1024), this.fieldNameSizeLimit = A(a, "fieldNameSize", 100), this.fieldsLimit = A(a, "fields", 1 / 0);
    let g;
    for (var c = 0, E = o.length; c < E; ++c)
      if (Array.isArray(o[c]) && r.test(o[c][0])) {
        g = o[c][1].toLowerCase();
        break;
      }
    g === void 0 && (g = i.defCharset || "utf8"), this.decoder = new t(), this.charset = g, this._fields = 0, this._state = "key", this._checkingBytes = !0, this._bytesKey = 0, this._bytesVal = 0, this._key = "", this._val = "", this._keyTrunc = !1, this._valTrunc = !1, this._hitLimit = !1;
  }
  return s.prototype.write = function(n, i) {
    if (this._fields === this.fieldsLimit)
      return this.boy.hitFieldsLimit || (this.boy.hitFieldsLimit = !0, this.boy.emit("fieldsLimit")), i();
    let a, o, g, c = 0;
    const E = n.length;
    for (; c < E; )
      if (this._state === "key") {
        for (a = o = void 0, g = c; g < E; ++g) {
          if (this._checkingBytes || ++c, n[g] === 61) {
            a = g;
            break;
          } else if (n[g] === 38) {
            o = g;
            break;
          }
          if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
            this._hitLimit = !0;
            break;
          } else
            this._checkingBytes && ++this._bytesKey;
        }
        if (a !== void 0)
          a > c && (this._key += this.decoder.write(n.toString("binary", c, a))), this._state = "val", this._hitLimit = !1, this._checkingBytes = !0, this._val = "", this._bytesVal = 0, this._valTrunc = !1, this.decoder.reset(), c = a + 1;
        else if (o !== void 0) {
          ++this._fields;
          let h;
          const Q = this._keyTrunc;
          if (o > c ? h = this._key += this.decoder.write(n.toString("binary", c, o)) : h = this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), h.length && this.boy.emit(
            "field",
            e(h, "binary", this.charset),
            "",
            Q,
            !1
          ), c = o + 1, this._fields === this.fieldsLimit)
            return i();
        } else
          this._hitLimit ? (g > c && (this._key += this.decoder.write(n.toString("binary", c, g))), c = g, (this._bytesKey = this._key.length) === this.fieldNameSizeLimit && (this._checkingBytes = !1, this._keyTrunc = !0)) : (c < E && (this._key += this.decoder.write(n.toString("binary", c))), c = E);
      } else {
        for (o = void 0, g = c; g < E; ++g) {
          if (this._checkingBytes || ++c, n[g] === 38) {
            o = g;
            break;
          }
          if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
            this._hitLimit = !0;
            break;
          } else
            this._checkingBytes && ++this._bytesVal;
        }
        if (o !== void 0) {
          if (++this._fields, o > c && (this._val += this.decoder.write(n.toString("binary", c, o))), this.boy.emit(
            "field",
            e(this._key, "binary", this.charset),
            e(this._val, "binary", this.charset),
            this._keyTrunc,
            this._valTrunc
          ), this._state = "key", this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), c = o + 1, this._fields === this.fieldsLimit)
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
var yh;
function bp() {
  if (yh)
    return Rs.exports;
  yh = 1;
  const t = Ea.Writable, { inherits: e } = Qn, A = bC(), r = yp(), s = Dp(), n = kC();
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
      ...g
    } = a;
    this.opts = {
      autoDestroy: !1,
      ...g
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
    const o = n(a["content-type"]), g = {
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
      return new r(this, g);
    if (s.detect.test(o[0]))
      return new s(this, g);
    throw new Error("Unsupported Content-Type.");
  }, i.prototype._write = function(a, o, g) {
    this._parser.write(a, g);
  }, Rs.exports = i, Rs.exports.default = i, Rs.exports.Busboy = i, Rs.exports.Dicer = A, Rs.exports;
}
var lc, Rh;
function ps() {
  if (Rh)
    return lc;
  Rh = 1;
  const { MessageChannel: t, receiveMessageOnPort: e } = gQ, A = ["GET", "HEAD", "POST"], r = new Set(A), s = [101, 204, 205, 304], n = [301, 302, 303, 307, 308], i = new Set(n), a = [
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
  ], o = new Set(a), g = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
  ], c = new Set(g), E = ["follow", "manual", "error"], h = ["GET", "HEAD", "OPTIONS", "TRACE"], Q = new Set(h), B = ["navigate", "same-origin", "no-cors", "cors"], u = ["omit", "same-origin", "include"], I = [
    "default",
    "no-store",
    "reload",
    "no-cache",
    "force-cache",
    "only-if-cached"
  ], C = [
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
  ], f = ["CONNECT", "TRACE", "TRACK"], w = new Set(f), m = [
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
  ], y = new Set(m), R = globalThis.DOMException ?? (() => {
    try {
      atob("~");
    } catch (T) {
      return Object.getPrototypeOf(T).constructor;
    }
  })();
  let S;
  const v = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
  // structuredClone was added in v17.0.0, but fetch supports v16.8
  function(z, K = void 0) {
    if (arguments.length === 0)
      throw new TypeError("missing argument");
    return S || (S = new t()), S.port1.unref(), S.port2.unref(), S.port1.postMessage(z, K == null ? void 0 : K.transfer), e(S.port2).message;
  };
  return lc = {
    DOMException: R,
    structuredClone: v,
    subresource: m,
    forbiddenMethods: f,
    requestBodyHeader: C,
    referrerPolicy: g,
    requestRedirect: E,
    requestMode: B,
    requestCredentials: u,
    requestCache: I,
    redirectStatus: n,
    corsSafeListedMethods: A,
    nullBodyStatus: s,
    safeMethods: h,
    badPorts: a,
    requestDuplex: d,
    subresourceSet: y,
    badPortsSet: o,
    redirectStatusSet: i,
    corsSafeListedMethodsSet: r,
    safeMethodsSet: Q,
    forbiddenMethodsSet: w,
    referrerPolicySet: c
  }, lc;
}
var hc, Dh;
function Ji() {
  if (Dh)
    return hc;
  Dh = 1;
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
var Ec, bh;
function Dt() {
  if (bh)
    return Ec;
  bh = 1;
  const { redirectStatusSet: t, referrerPolicySet: e, badPortsSet: A } = ps(), { getGlobalOrigin: r } = Ji(), { performance: s } = ad, { isBlobLike: n, toUSVString: i, ReadableStreamFrom: a } = de, o = AA, { isUint8Array: g } = lQ;
  let c;
  try {
    c = require("crypto");
  } catch {
  }
  function E(D) {
    const W = D.urlList, re = W.length;
    return re === 0 ? null : W[re - 1].toString();
  }
  function h(D, W) {
    if (!t.has(D.status))
      return null;
    let re = D.headersList.get("location");
    return re !== null && w(re) && (re = new URL(re, E(D))), re && !re.hash && (re.hash = W), re;
  }
  function Q(D) {
    return D.urlList[D.urlList.length - 1];
  }
  function B(D) {
    const W = Q(D);
    return UA(W) && A.has(W.port) ? "blocked" : "allowed";
  }
  function u(D) {
    var W, re;
    return D instanceof Error || ((W = D == null ? void 0 : D.constructor) == null ? void 0 : W.name) === "Error" || ((re = D == null ? void 0 : D.constructor) == null ? void 0 : re.name) === "DOMException";
  }
  function I(D) {
    for (let W = 0; W < D.length; ++W) {
      const re = D.charCodeAt(W);
      if (!(re === 9 || // HTAB
      re >= 32 && re <= 126 || // SP / VCHAR
      re >= 128 && re <= 255))
        return !1;
    }
    return !0;
  }
  function C(D) {
    switch (D) {
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
        return D >= 33 && D <= 126;
    }
  }
  function d(D) {
    if (D.length === 0)
      return !1;
    for (let W = 0; W < D.length; ++W)
      if (!C(D.charCodeAt(W)))
        return !1;
    return !0;
  }
  function f(D) {
    return d(D);
  }
  function w(D) {
    return !(D.startsWith("	") || D.startsWith(" ") || D.endsWith("	") || D.endsWith(" ") || D.includes("\0") || D.includes("\r") || D.includes(`
`));
  }
  function m(D, W) {
    const { headersList: re } = W, Be = (re.get("referrer-policy") ?? "").split(",");
    let pe = "";
    if (Be.length > 0)
      for (let _e = Be.length; _e !== 0; _e--) {
        const Fe = Be[_e - 1].trim();
        if (e.has(Fe)) {
          pe = Fe;
          break;
        }
      }
    pe !== "" && (D.referrerPolicy = pe);
  }
  function y() {
    return "allowed";
  }
  function R() {
    return "success";
  }
  function S() {
    return "success";
  }
  function v(D) {
    let W = null;
    W = D.mode, D.headersList.set("sec-fetch-mode", W);
  }
  function T(D) {
    let W = D.origin;
    if (D.responseTainting === "cors" || D.mode === "websocket")
      W && D.headersList.append("origin", W);
    else if (D.method !== "GET" && D.method !== "HEAD") {
      switch (D.referrerPolicy) {
        case "no-referrer":
          W = null;
          break;
        case "no-referrer-when-downgrade":
        case "strict-origin":
        case "strict-origin-when-cross-origin":
          D.origin && me(D.origin) && !me(Q(D)) && (W = null);
          break;
        case "same-origin":
          F(D, Q(D)) || (W = null);
          break;
      }
      W && D.headersList.append("origin", W);
    }
  }
  function z(D) {
    return s.now();
  }
  function K(D) {
    return {
      startTime: D.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: D.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    };
  }
  function $() {
    return {
      referrerPolicy: "strict-origin-when-cross-origin"
    };
  }
  function ue(D) {
    return {
      referrerPolicy: D.referrerPolicy
    };
  }
  function Y(D) {
    const W = D.referrerPolicy;
    o(W);
    let re = null;
    if (D.referrer === "client") {
      const BA = r();
      if (!BA || BA.origin === "null")
        return "no-referrer";
      re = new URL(BA);
    } else
      D.referrer instanceof URL && (re = D.referrer);
    let Be = ee(re);
    const pe = ee(re, !0);
    Be.toString().length > 4096 && (Be = pe);
    const _e = F(D, Be), Fe = te(Be) && !te(D.url);
    switch (W) {
      case "origin":
        return pe ?? ee(re, !0);
      case "unsafe-url":
        return Be;
      case "same-origin":
        return _e ? pe : "no-referrer";
      case "origin-when-cross-origin":
        return _e ? Be : pe;
      case "strict-origin-when-cross-origin": {
        const BA = Q(D);
        return F(Be, BA) ? Be : te(Be) && !te(BA) ? "no-referrer" : pe;
      }
      case "strict-origin":
      case "no-referrer-when-downgrade":
      default:
        return Fe ? "no-referrer" : pe;
    }
  }
  function ee(D, W) {
    return o(D instanceof URL), D.protocol === "file:" || D.protocol === "about:" || D.protocol === "blank:" ? "no-referrer" : (D.username = "", D.password = "", D.hash = "", W && (D.pathname = "", D.search = ""), D);
  }
  function te(D) {
    if (!(D instanceof URL))
      return !1;
    if (D.href === "about:blank" || D.href === "about:srcdoc" || D.protocol === "data:" || D.protocol === "file:")
      return !0;
    return W(D.origin);
    function W(re) {
      if (re == null || re === "null")
        return !1;
      const Be = new URL(re);
      return !!(Be.protocol === "https:" || Be.protocol === "wss:" || /^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(Be.hostname) || Be.hostname === "localhost" || Be.hostname.includes("localhost.") || Be.hostname.endsWith(".localhost"));
    }
  }
  function ne(D, W) {
    if (c === void 0)
      return !0;
    const re = k(W);
    if (re === "no metadata" || re.length === 0)
      return !0;
    const Be = re.sort((Fe, BA) => BA.algo.localeCompare(Fe.algo)), pe = Be[0].algo, _e = Be.filter((Fe) => Fe.algo === pe);
    for (const Fe of _e) {
      const BA = Fe.algo;
      let gt = Fe.hash;
      gt.endsWith("==") && (gt = gt.slice(0, -2));
      let lr = c.createHash(BA).update(D).digest("base64");
      if (lr.endsWith("==") && (lr = lr.slice(0, -2)), lr === gt)
        return !0;
      let Pt = c.createHash(BA).update(D).digest("base64url");
      if (Pt.endsWith("==") && (Pt = Pt.slice(0, -2)), Pt === gt)
        return !0;
    }
    return !1;
  }
  const Z = /((?<algo>sha256|sha384|sha512)-(?<hash>[A-z0-9+/]{1}.*={0,2}))( +[\x21-\x7e]?)?/i;
  function k(D) {
    const W = [];
    let re = !0;
    const Be = c.getHashes();
    for (const pe of D.split(" ")) {
      re = !1;
      const _e = Z.exec(pe);
      if (_e === null || _e.groups === void 0)
        continue;
      const Fe = _e.groups.algo;
      Be.includes(Fe.toLowerCase()) && W.push(_e.groups);
    }
    return re === !0 ? "no metadata" : W;
  }
  function q(D) {
  }
  function F(D, W) {
    return D.origin === W.origin && D.origin === "null" || D.protocol === W.protocol && D.hostname === W.hostname && D.port === W.port;
  }
  function p() {
    let D, W;
    return { promise: new Promise((Be, pe) => {
      D = Be, W = pe;
    }), resolve: D, reject: W };
  }
  function M(D) {
    return D.controller.state === "aborted";
  }
  function J(D) {
    return D.controller.state === "aborted" || D.controller.state === "terminated";
  }
  function x(D) {
    return /^(DELETE|GET|HEAD|OPTIONS|POST|PUT)$/i.test(D) ? D.toUpperCase() : D;
  }
  function H(D) {
    const W = JSON.stringify(D);
    if (W === void 0)
      throw new TypeError("Value is not JSON serializable");
    return o(typeof W == "string"), W;
  }
  const G = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function P(D, W, re) {
    const Be = {
      index: 0,
      kind: re,
      target: D
    }, pe = {
      next() {
        if (Object.getPrototypeOf(this) !== pe)
          throw new TypeError(
            `'next' called on an object that does not implement interface ${W} Iterator.`
          );
        const { index: _e, kind: Fe, target: BA } = Be, gt = BA(), lr = gt.length;
        if (_e >= lr)
          return { value: void 0, done: !0 };
        const Pt = gt[_e];
        return Be.index = _e + 1, ae(Pt, Fe);
      },
      // The class string of an iterator prototype object for a given interface is the
      // result of concatenating the identifier of the interface and the string " Iterator".
      [Symbol.toStringTag]: `${W} Iterator`
    };
    return Object.setPrototypeOf(pe, G), Object.setPrototypeOf({}, pe);
  }
  function ae(D, W) {
    let re;
    switch (W) {
      case "key": {
        re = D[0];
        break;
      }
      case "value": {
        re = D[1];
        break;
      }
      case "key+value": {
        re = D;
        break;
      }
    }
    return { value: re, done: !1 };
  }
  async function oe(D, W, re) {
    const Be = W, pe = re;
    let _e;
    try {
      _e = D.stream.getReader();
    } catch (Fe) {
      pe(Fe);
      return;
    }
    try {
      const Fe = await Ie(_e);
      Be(Fe);
    } catch (Fe) {
      pe(Fe);
    }
  }
  let he = globalThis.ReadableStream;
  function Se(D) {
    return he || (he = Yr.ReadableStream), D instanceof he || D[Symbol.toStringTag] === "ReadableStream" && typeof D.tee == "function";
  }
  const xe = 65535;
  function we(D) {
    return D.length < xe ? String.fromCharCode(...D) : D.reduce((W, re) => W + String.fromCharCode(re), "");
  }
  function De(D) {
    try {
      D.close();
    } catch (W) {
      if (!W.message.includes("Controller is already closed"))
        throw W;
    }
  }
  function Ve(D) {
    for (let W = 0; W < D.length; W++)
      o(D.charCodeAt(W) <= 255);
    return D;
  }
  async function Ie(D) {
    const W = [];
    let re = 0;
    for (; ; ) {
      const { done: Be, value: pe } = await D.read();
      if (Be)
        return Buffer.concat(W, re);
      if (!g(pe))
        throw new TypeError("Received non-Uint8Array chunk");
      W.push(pe), re += pe.length;
    }
  }
  function fe(D) {
    o("protocol" in D);
    const W = D.protocol;
    return W === "about:" || W === "blob:" || W === "data:";
  }
  function me(D) {
    return typeof D == "string" ? D.startsWith("https:") : D.protocol === "https:";
  }
  function UA(D) {
    o("protocol" in D);
    const W = D.protocol;
    return W === "http:" || W === "https:";
  }
  const ws = Object.hasOwn || ((D, W) => Object.prototype.hasOwnProperty.call(D, W));
  return Ec = {
    isAborted: M,
    isCancelled: J,
    createDeferredPromise: p,
    ReadableStreamFrom: a,
    toUSVString: i,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: q,
    coarsenedSharedCurrentTime: z,
    determineRequestsReferrer: Y,
    makePolicyContainer: $,
    clonePolicyContainer: ue,
    appendFetchMetadata: v,
    appendRequestOriginHeader: T,
    TAOCheck: S,
    corsCheck: R,
    crossOriginResourcePolicyCheck: y,
    createOpaqueTimingInfo: K,
    setRequestReferrerPolicyOnRedirect: m,
    isValidHTTPToken: d,
    requestBadPort: B,
    requestCurrentURL: Q,
    responseURL: E,
    responseLocationURL: h,
    isBlobLike: n,
    isURLPotentiallyTrustworthy: te,
    isValidReasonPhrase: I,
    sameOrigin: F,
    normalizeMethod: x,
    serializeJavascriptValueToJSONString: H,
    makeIterator: P,
    isValidHeaderName: f,
    isValidHeaderValue: w,
    hasOwn: ws,
    isErrorLike: u,
    fullyReadBody: oe,
    bytesMatch: ne,
    isReadableStreamLike: Se,
    readableStreamClose: De,
    isomorphicEncode: Ve,
    isomorphicDecode: we,
    urlIsLocal: fe,
    urlHasHttpsScheme: me,
    urlIsHttpHttpsScheme: UA,
    readAllBytes: Ie
  }, Ec;
}
var uc, kh;
function _r() {
  return kh || (kh = 1, uc = {
    kUrl: Symbol("url"),
    kHeaders: Symbol("headers"),
    kSignal: Symbol("signal"),
    kState: Symbol("state"),
    kGuard: Symbol("guard"),
    kRealm: Symbol("realm")
  }), uc;
}
var Qc, Sh;
function VA() {
  if (Sh)
    return Qc;
  Sh = 1;
  const { types: t } = _t, { hasOwn: e, toUSVString: A } = Dt(), r = {};
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
    let o, g;
    n === 64 ? (o = Math.pow(2, 53) - 1, i === "unsigned" ? g = 0 : g = Math.pow(-2, 53) + 1) : i === "unsigned" ? (g = 0, o = Math.pow(2, n) - 1) : (g = Math.pow(-2, n) - 1, o = Math.pow(2, n - 1) - 1);
    let c = Number(s);
    if (c === 0 && (c = 0), a.enforceRange === !0) {
      if (Number.isNaN(c) || c === Number.POSITIVE_INFINITY || c === Number.NEGATIVE_INFINITY)
        throw r.errors.exception({
          header: "Integer conversion",
          message: `Could not convert ${s} to an integer.`
        });
      if (c = r.util.IntegerPart(c), c < g || c > o)
        throw r.errors.exception({
          header: "Integer conversion",
          message: `Value must be between ${g}-${o}, got ${c}.`
        });
      return c;
    }
    return !Number.isNaN(c) && a.clamp === !0 ? (c = Math.min(Math.max(c, g), o), Math.floor(c) % 2 === 0 ? c = Math.floor(c) : c = Math.ceil(c), c) : Number.isNaN(c) || c === 0 && Object.is(0, c) || c === Number.POSITIVE_INFINITY || c === Number.NEGATIVE_INFINITY ? 0 : (c = r.util.IntegerPart(c), c = c % Math.pow(2, n), i === "signed" && c >= Math.pow(2, n) - 1 ? c - Math.pow(2, n) : c);
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
        const { done: g, value: c } = i.next();
        if (g)
          break;
        a.push(s(c));
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
        const g = Object.keys(i);
        for (const c of g) {
          const E = s(c), h = n(i[c]);
          a[E] = h;
        }
        return a;
      }
      const o = Reflect.ownKeys(i);
      for (const g of o) {
        const c = Reflect.getOwnPropertyDescriptor(i, g);
        if (c != null && c.enumerable) {
          const E = s(g), h = n(i[g]);
          a[E] = h;
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
        const { key: g, defaultValue: c, required: E, converter: h } = o;
        if (E === !0 && !e(n, g))
          throw r.errors.exception({
            header: "Dictionary",
            message: `Missing required key "${g}".`
          });
        let Q = n[g];
        const B = e(o, "defaultValue");
        if (B && Q !== null && (Q = Q ?? c), E || B || Q !== void 0) {
          if (Q = h(Q), o.allowedValues && !o.allowedValues.includes(Q))
            throw r.errors.exception({
              header: "Dictionary",
              message: `${Q} is not an accepted type. Expected one of ${o.allowedValues.join(", ")}.`
            });
          a[g] = Q;
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
var Cc, Fh;
function Ht() {
  if (Fh)
    return Cc;
  Fh = 1;
  const t = AA, { atob: e } = fs, { isomorphicDecode: A } = Dt(), r = new TextEncoder(), s = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, n = /(\u000A|\u000D|\u0009|\u0020)/, i = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
  function a(m) {
    t(m.protocol === "data:");
    let y = o(m, !0);
    y = y.slice(5);
    const R = { position: 0 };
    let S = c(
      ",",
      y,
      R
    );
    const v = S.length;
    if (S = w(S, !0, !0), R.position >= y.length)
      return "failure";
    R.position++;
    const T = y.slice(v + 1);
    let z = E(T);
    if (/;(\u0020){0,}base64$/i.test(S)) {
      const $ = A(z);
      if (z = B($), z === "failure")
        return "failure";
      S = S.slice(0, -6), S = S.replace(/(\u0020)+$/, ""), S = S.slice(0, -1);
    }
    S.startsWith(";") && (S = "text/plain" + S);
    let K = Q(S);
    return K === "failure" && (K = Q("text/plain;charset=US-ASCII")), { mimeType: K, body: z };
  }
  function o(m, y = !1) {
    const R = m.href;
    if (!y)
      return R;
    const S = R.lastIndexOf("#");
    return S === -1 ? R : R.slice(0, S);
  }
  function g(m, y, R) {
    let S = "";
    for (; R.position < y.length && m(y[R.position]); )
      S += y[R.position], R.position++;
    return S;
  }
  function c(m, y, R) {
    const S = y.indexOf(m, R.position), v = R.position;
    return S === -1 ? (R.position = y.length, y.slice(v)) : (R.position = S, y.slice(v, R.position));
  }
  function E(m) {
    const y = r.encode(m);
    return h(y);
  }
  function h(m) {
    const y = [];
    for (let R = 0; R < m.length; R++) {
      const S = m[R];
      if (S !== 37)
        y.push(S);
      else if (S === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(m[R + 1], m[R + 2])))
        y.push(37);
      else {
        const v = String.fromCharCode(m[R + 1], m[R + 2]), T = Number.parseInt(v, 16);
        y.push(T), R += 2;
      }
    }
    return Uint8Array.from(y);
  }
  function Q(m) {
    m = d(m, !0, !0);
    const y = { position: 0 }, R = c(
      "/",
      m,
      y
    );
    if (R.length === 0 || !s.test(R) || y.position > m.length)
      return "failure";
    y.position++;
    let S = c(
      ";",
      m,
      y
    );
    if (S = d(S, !1, !0), S.length === 0 || !s.test(S))
      return "failure";
    const v = R.toLowerCase(), T = S.toLowerCase(), z = {
      type: v,
      subtype: T,
      /** @type {Map<string, string>} */
      parameters: /* @__PURE__ */ new Map(),
      // https://mimesniff.spec.whatwg.org/#mime-type-essence
      essence: `${v}/${T}`
    };
    for (; y.position < m.length; ) {
      y.position++, g(
        // https://fetch.spec.whatwg.org/#http-whitespace
        (ue) => n.test(ue),
        m,
        y
      );
      let K = g(
        (ue) => ue !== ";" && ue !== "=",
        m,
        y
      );
      if (K = K.toLowerCase(), y.position < m.length) {
        if (m[y.position] === ";")
          continue;
        y.position++;
      }
      if (y.position > m.length)
        break;
      let $ = null;
      if (m[y.position] === '"')
        $ = u(m, y, !0), c(
          ";",
          m,
          y
        );
      else if ($ = c(
        ";",
        m,
        y
      ), $ = d($, !1, !0), $.length === 0)
        continue;
      K.length !== 0 && s.test(K) && ($.length === 0 || i.test($)) && !z.parameters.has(K) && z.parameters.set(K, $);
    }
    return z;
  }
  function B(m) {
    if (m = m.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, ""), m.length % 4 === 0 && (m = m.replace(/=?=$/, "")), m.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(m))
      return "failure";
    const y = e(m), R = new Uint8Array(y.length);
    for (let S = 0; S < y.length; S++)
      R[S] = y.charCodeAt(S);
    return R;
  }
  function u(m, y, R) {
    const S = y.position;
    let v = "";
    for (t(m[y.position] === '"'), y.position++; v += g(
      (z) => z !== '"' && z !== "\\",
      m,
      y
    ), !(y.position >= m.length); ) {
      const T = m[y.position];
      if (y.position++, T === "\\") {
        if (y.position >= m.length) {
          v += "\\";
          break;
        }
        v += m[y.position], y.position++;
      } else {
        t(T === '"');
        break;
      }
    }
    return R ? v : m.slice(S, y.position);
  }
  function I(m) {
    t(m !== "failure");
    const { parameters: y, essence: R } = m;
    let S = R;
    for (let [v, T] of y.entries())
      S += ";", S += v, S += "=", s.test(T) || (T = T.replace(/(\\|")/g, "\\$1"), T = '"' + T, T += '"'), S += T;
    return S;
  }
  function C(m) {
    return m === "\r" || m === `
` || m === "	" || m === " ";
  }
  function d(m, y = !0, R = !0) {
    let S = 0, v = m.length - 1;
    if (y)
      for (; S < m.length && C(m[S]); S++)
        ;
    if (R)
      for (; v > 0 && C(m[v]); v--)
        ;
    return m.slice(S, v + 1);
  }
  function f(m) {
    return m === "\r" || m === `
` || m === "	" || m === "\f" || m === " ";
  }
  function w(m, y = !0, R = !0) {
    let S = 0, v = m.length - 1;
    if (y)
      for (; S < m.length && f(m[S]); S++)
        ;
    if (R)
      for (; v > 0 && f(m[v]); v--)
        ;
    return m.slice(S, v + 1);
  }
  return Cc = {
    dataURLProcessor: a,
    URLSerializer: o,
    collectASequenceOfCodePoints: g,
    collectASequenceOfCodePointsFast: c,
    stringPercentDecode: E,
    parseMIMEType: Q,
    collectAnHTTPQuotedString: u,
    serializeAMimeType: I
  }, Cc;
}
var Bc, Nh;
function Rl() {
  if (Nh)
    return Bc;
  Nh = 1;
  const { Blob: t, File: e } = fs, { types: A } = _t, { kState: r } = _r(), { isBlobLike: s } = Dt(), { webidl: n } = VA(), { parseMIMEType: i, serializeAMimeType: a } = Ht(), { kEnumerableProperty: o } = de, g = new TextEncoder();
  class c extends t {
    constructor(I, C, d = {}) {
      n.argumentLengthCheck(arguments, 2, { header: "File constructor" }), I = n.converters["sequence<BlobPart>"](I), C = n.converters.USVString(C), d = n.converters.FilePropertyBag(d);
      const f = C;
      let w = d.type, m;
      e: {
        if (w) {
          if (w = i(w), w === "failure") {
            w = "";
            break e;
          }
          w = a(w).toLowerCase();
        }
        m = d.lastModified;
      }
      super(h(I, d), { type: w }), this[r] = {
        name: f,
        lastModified: m,
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
    constructor(I, C, d = {}) {
      const f = C, w = d.type, m = d.lastModified ?? Date.now();
      this[r] = {
        blobLike: I,
        name: f,
        type: w,
        lastModified: m
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
    name: o,
    lastModified: o
  }), n.converters.Blob = n.interfaceConverter(t), n.converters.BlobPart = function(u, I) {
    if (n.util.Type(u) === "Object") {
      if (s(u))
        return n.converters.Blob(u, { strict: !1 });
      if (ArrayBuffer.isView(u) || A.isAnyArrayBuffer(u))
        return n.converters.BufferSource(u, I);
    }
    return n.converters.USVString(u, I);
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
  function h(u, I) {
    const C = [];
    for (const d of u)
      if (typeof d == "string") {
        let f = d;
        I.endings === "native" && (f = Q(f)), C.push(g.encode(f));
      } else
        A.isAnyArrayBuffer(d) || A.isTypedArray(d) ? d.buffer ? C.push(
          new Uint8Array(d.buffer, d.byteOffset, d.byteLength)
        ) : C.push(new Uint8Array(d)) : s(d) && C.push(d);
    return C;
  }
  function Q(u) {
    let I = `
`;
    return process.platform === "win32" && (I = `\r
`), u.replace(/\r?\n/g, I);
  }
  function B(u) {
    return e && u instanceof e || u instanceof c || u && (typeof u.stream == "function" || typeof u.arrayBuffer == "function") && u[Symbol.toStringTag] === "File";
  }
  return Bc = { File: c, FileLike: E, isFileLike: B }, Bc;
}
var Ic, Uh;
function Dl() {
  if (Uh)
    return Ic;
  Uh = 1;
  const { isBlobLike: t, toUSVString: e, makeIterator: A } = Dt(), { kState: r } = _r(), { File: s, FileLike: n, isFileLike: i } = Rl(), { webidl: a } = VA(), { Blob: o, File: g } = fs, c = g ?? s;
  class E {
    constructor(B) {
      if (B !== void 0)
        throw a.errors.conversionFailed({
          prefix: "FormData constructor",
          argument: "Argument 1",
          types: ["undefined"]
        });
      this[r] = [];
    }
    append(B, u, I = void 0) {
      if (a.brandCheck(this, E), a.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), arguments.length === 3 && !t(u))
        throw new TypeError(
          "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      B = a.converters.USVString(B), u = t(u) ? a.converters.Blob(u, { strict: !1 }) : a.converters.USVString(u), I = arguments.length === 3 ? a.converters.USVString(I) : void 0;
      const C = h(B, u, I);
      this[r].push(C);
    }
    delete(B) {
      a.brandCheck(this, E), a.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), B = a.converters.USVString(B), this[r] = this[r].filter((u) => u.name !== B);
    }
    get(B) {
      a.brandCheck(this, E), a.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), B = a.converters.USVString(B);
      const u = this[r].findIndex((I) => I.name === B);
      return u === -1 ? null : this[r][u].value;
    }
    getAll(B) {
      return a.brandCheck(this, E), a.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), B = a.converters.USVString(B), this[r].filter((u) => u.name === B).map((u) => u.value);
    }
    has(B) {
      return a.brandCheck(this, E), a.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), B = a.converters.USVString(B), this[r].findIndex((u) => u.name === B) !== -1;
    }
    set(B, u, I = void 0) {
      if (a.brandCheck(this, E), a.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), arguments.length === 3 && !t(u))
        throw new TypeError(
          "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      B = a.converters.USVString(B), u = t(u) ? a.converters.Blob(u, { strict: !1 }) : a.converters.USVString(u), I = arguments.length === 3 ? e(I) : void 0;
      const C = h(B, u, I), d = this[r].findIndex((f) => f.name === B);
      d !== -1 ? this[r] = [
        ...this[r].slice(0, d),
        C,
        ...this[r].slice(d + 1).filter((f) => f.name !== B)
      ] : this[r].push(C);
    }
    entries() {
      return a.brandCheck(this, E), A(
        () => this[r].map((B) => [B.name, B.value]),
        "FormData",
        "key+value"
      );
    }
    keys() {
      return a.brandCheck(this, E), A(
        () => this[r].map((B) => [B.name, B.value]),
        "FormData",
        "key"
      );
    }
    values() {
      return a.brandCheck(this, E), A(
        () => this[r].map((B) => [B.name, B.value]),
        "FormData",
        "value"
      );
    }
    /**
     * @param {(value: string, key: string, self: FormData) => void} callbackFn
     * @param {unknown} thisArg
     */
    forEach(B, u = globalThis) {
      if (a.brandCheck(this, E), a.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), typeof B != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
        );
      for (const [I, C] of this)
        B.apply(u, [C, I, this]);
    }
  }
  E.prototype[Symbol.iterator] = E.prototype.entries, Object.defineProperties(E.prototype, {
    [Symbol.toStringTag]: {
      value: "FormData",
      configurable: !0
    }
  });
  function h(Q, B, u) {
    if (Q = Buffer.from(Q).toString("utf8"), typeof B == "string")
      B = Buffer.from(B).toString("utf8");
    else if (i(B) || (B = B instanceof o ? new c([B], "blob", { type: B.type }) : new n(B, "blob", { type: B.type })), u !== void 0) {
      const I = {
        type: B.type,
        lastModified: B.lastModified
      };
      B = g && B instanceof g || B instanceof s ? new c([B], u, I) : new n(B, u, I);
    }
    return { name: Q, value: B };
  }
  return Ic = { FormData: E }, Ic;
}
var dc, Th;
function da() {
  if (Th)
    return dc;
  Th = 1;
  const t = bp(), e = de, {
    ReadableStreamFrom: A,
    isBlobLike: r,
    isReadableStreamLike: s,
    readableStreamClose: n,
    createDeferredPromise: i,
    fullyReadBody: a
  } = Dt(), { FormData: o } = Dl(), { kState: g } = _r(), { webidl: c } = VA(), { DOMException: E, structuredClone: h } = ps(), { Blob: Q, File: B } = fs, { kBodyUsed: u } = Ye, I = AA, { isErrored: C } = de, { isUint8Array: d, isArrayBuffer: f } = lQ, { File: w } = Rl(), { parseMIMEType: m, serializeAMimeType: y } = Ht();
  let R = globalThis.ReadableStream;
  const S = B ?? w, v = new TextEncoder(), T = new TextDecoder();
  function z(p, M = !1) {
    R || (R = Yr.ReadableStream);
    let J = null;
    p instanceof R ? J = p : r(p) ? J = p.stream() : J = new R({
      async pull(oe) {
        oe.enqueue(
          typeof H == "string" ? v.encode(H) : H
        ), queueMicrotask(() => n(oe));
      },
      start() {
      },
      type: void 0
    }), I(s(J));
    let x = null, H = null, G = null, P = null;
    if (typeof p == "string")
      H = p, P = "text/plain;charset=UTF-8";
    else if (p instanceof URLSearchParams)
      H = p.toString(), P = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (f(p))
      H = new Uint8Array(p.slice());
    else if (ArrayBuffer.isView(p))
      H = new Uint8Array(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength));
    else if (e.isFormDataLike(p)) {
      const oe = `----formdata-undici-0${`${Math.floor(Math.random() * 1e11)}`.padStart(11, "0")}`, he = `--${oe}\r
Content-Disposition: form-data`;
      /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
      const Se = (fe) => fe.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), xe = (fe) => fe.replace(/\r?\n|\r/g, `\r
`), we = [], De = new Uint8Array([13, 10]);
      G = 0;
      let Ve = !1;
      for (const [fe, me] of p)
        if (typeof me == "string") {
          const UA = v.encode(he + `; name="${Se(xe(fe))}"\r
\r
${xe(me)}\r
`);
          we.push(UA), G += UA.byteLength;
        } else {
          const UA = v.encode(`${he}; name="${Se(xe(fe))}"` + (me.name ? `; filename="${Se(me.name)}"` : "") + `\r
Content-Type: ${me.type || "application/octet-stream"}\r
\r
`);
          we.push(UA, me, De), typeof me.size == "number" ? G += UA.byteLength + me.size + De.byteLength : Ve = !0;
        }
      const Ie = v.encode(`--${oe}--`);
      we.push(Ie), G += Ie.byteLength, Ve && (G = null), H = p, x = async function* () {
        for (const fe of we)
          fe.stream ? yield* fe.stream() : yield fe;
      }, P = "multipart/form-data; boundary=" + oe;
    } else if (r(p))
      H = p, G = p.size, p.type && (P = p.type);
    else if (typeof p[Symbol.asyncIterator] == "function") {
      if (M)
        throw new TypeError("keepalive");
      if (e.isDisturbed(p) || p.locked)
        throw new TypeError(
          "Response body object should not be disturbed or locked"
        );
      J = p instanceof R ? p : A(p);
    }
    if ((typeof H == "string" || e.isBuffer(H)) && (G = Buffer.byteLength(H)), x != null) {
      let oe;
      J = new R({
        async start() {
          oe = x(p)[Symbol.asyncIterator]();
        },
        async pull(he) {
          const { value: Se, done: xe } = await oe.next();
          return xe ? queueMicrotask(() => {
            he.close();
          }) : C(J) || he.enqueue(new Uint8Array(Se)), he.desiredSize > 0;
        },
        async cancel(he) {
          await oe.return();
        },
        type: void 0
      });
    }
    return [{ stream: J, source: H, length: G }, P];
  }
  function K(p, M = !1) {
    return R || (R = Yr.ReadableStream), p instanceof R && (I(!e.isDisturbed(p), "The body has already been consumed."), I(!p.locked, "The stream is locked.")), z(p, M);
  }
  function $(p) {
    const [M, J] = p.stream.tee(), x = h(J, { transfer: [J] }), [, H] = x.tee();
    return p.stream = M, {
      stream: H,
      length: p.length,
      source: p.source
    };
  }
  async function* ue(p) {
    if (p)
      if (d(p))
        yield p;
      else {
        const M = p.stream;
        if (e.isDisturbed(M))
          throw new TypeError("The body has already been consumed.");
        if (M.locked)
          throw new TypeError("The stream is locked.");
        M[u] = !0, yield* M;
      }
  }
  function Y(p) {
    if (p.aborted)
      throw new E("The operation was aborted.", "AbortError");
  }
  function ee(p) {
    return {
      blob() {
        return ne(this, (J) => {
          let x = F(this);
          return x === "failure" ? x = "" : x && (x = y(x)), new Q([J], { type: x });
        }, p);
      },
      arrayBuffer() {
        return ne(this, (J) => new Uint8Array(J).buffer, p);
      },
      text() {
        return ne(this, k, p);
      },
      json() {
        return ne(this, q, p);
      },
      async formData() {
        c.brandCheck(this, p), Y(this[g]);
        const J = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(J)) {
          const x = {};
          for (const [ae, oe] of this.headers)
            x[ae.toLowerCase()] = oe;
          const H = new o();
          let G;
          try {
            G = new t({
              headers: x,
              preservePath: !0
            });
          } catch (ae) {
            throw new E(`${ae}`, "AbortError");
          }
          G.on("field", (ae, oe) => {
            H.append(ae, oe);
          }), G.on("file", (ae, oe, he, Se, xe) => {
            const we = [];
            if (Se === "base64" || Se.toLowerCase() === "base64") {
              let De = "";
              oe.on("data", (Ve) => {
                De += Ve.toString().replace(/[\r\n]/gm, "");
                const Ie = De.length - De.length % 4;
                we.push(Buffer.from(De.slice(0, Ie), "base64")), De = De.slice(Ie);
              }), oe.on("end", () => {
                we.push(Buffer.from(De, "base64")), H.append(ae, new S(we, he, { type: xe }));
              });
            } else
              oe.on("data", (De) => {
                we.push(De);
              }), oe.on("end", () => {
                H.append(ae, new S(we, he, { type: xe }));
              });
          });
          const P = new Promise((ae, oe) => {
            G.on("finish", ae), G.on("error", (he) => oe(new TypeError(he)));
          });
          if (this.body !== null)
            for await (const ae of ue(this[g].body))
              G.write(ae);
          return G.end(), await P, H;
        } else if (/application\/x-www-form-urlencoded/.test(J)) {
          let x;
          try {
            let G = "";
            const P = new TextDecoder("utf-8", { ignoreBOM: !0 });
            for await (const ae of ue(this[g].body)) {
              if (!d(ae))
                throw new TypeError("Expected Uint8Array chunk");
              G += P.decode(ae, { stream: !0 });
            }
            G += P.decode(), x = new URLSearchParams(G);
          } catch (G) {
            throw Object.assign(new TypeError(), { cause: G });
          }
          const H = new o();
          for (const [G, P] of x)
            H.append(G, P);
          return H;
        } else
          throw await Promise.resolve(), Y(this[g]), c.errors.exception({
            header: `${p.name}.formData`,
            message: "Could not parse content as FormData."
          });
      }
    };
  }
  function te(p) {
    Object.assign(p.prototype, ee(p));
  }
  async function ne(p, M, J) {
    if (c.brandCheck(p, J), Y(p[g]), Z(p[g].body))
      throw new TypeError("Body is unusable");
    const x = i(), H = (P) => x.reject(P), G = (P) => {
      try {
        x.resolve(M(P));
      } catch (ae) {
        H(ae);
      }
    };
    return p[g].body == null ? (G(new Uint8Array()), x.promise) : (await a(p[g].body, G, H), x.promise);
  }
  function Z(p) {
    return p != null && (p.stream.locked || e.isDisturbed(p.stream));
  }
  function k(p) {
    return p.length === 0 ? "" : (p[0] === 239 && p[1] === 187 && p[2] === 191 && (p = p.subarray(3)), T.decode(p));
  }
  function q(p) {
    return JSON.parse(k(p));
  }
  function F(p) {
    const { headersList: M } = p[g], J = M.get("content-type");
    return J === null ? "failure" : m(J);
  }
  return dc = {
    extractBody: z,
    safelyExtractBody: K,
    cloneBody: $,
    mixinBody: te
  }, dc;
}
const {
  InvalidArgumentError: be,
  NotSupportedError: kp
} = ke, qt = AA, { kHTTP2BuildRequest: Sp, kHTTP2CopyHeaders: Fp, kHTTP1BuildRequest: Np } = Ye, OA = de, SC = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, FC = /[^\t\x20-\x7e\x80-\xff]/, Up = /[^\u0021-\u00ff]/, ht = Symbol("handler"), eA = {};
let fc;
try {
  const t = require("diagnostics_channel");
  eA.create = t.channel("undici:request:create"), eA.bodySent = t.channel("undici:request:bodySent"), eA.headers = t.channel("undici:request:headers"), eA.trailers = t.channel("undici:request:trailers"), eA.error = t.channel("undici:request:error");
} catch {
  eA.create = { hasSubscribers: !1 }, eA.bodySent = { hasSubscribers: !1 }, eA.headers = { hasSubscribers: !1 }, eA.trailers = { hasSubscribers: !1 }, eA.error = { hasSubscribers: !1 };
}
let Tp = class Gg {
  constructor(e, {
    path: A,
    method: r,
    body: s,
    headers: n,
    query: i,
    idempotent: a,
    blocking: o,
    upgrade: g,
    headersTimeout: c,
    bodyTimeout: E,
    reset: h,
    throwOnError: Q,
    expectContinue: B
  }, u) {
    if (typeof A != "string")
      throw new be("path must be a string");
    if (A[0] !== "/" && !(A.startsWith("http://") || A.startsWith("https://")) && r !== "CONNECT")
      throw new be("path must be an absolute URL or start with a slash");
    if (Up.exec(A) !== null)
      throw new be("invalid request path");
    if (typeof r != "string")
      throw new be("method must be a string");
    if (SC.exec(r) === null)
      throw new be("invalid request method");
    if (g && typeof g != "string")
      throw new be("upgrade must be a string");
    if (c != null && (!Number.isFinite(c) || c < 0))
      throw new be("invalid headersTimeout");
    if (E != null && (!Number.isFinite(E) || E < 0))
      throw new be("invalid bodyTimeout");
    if (h != null && typeof h != "boolean")
      throw new be("invalid reset");
    if (B != null && typeof B != "boolean")
      throw new be("invalid expectContinue");
    if (this.headersTimeout = c, this.bodyTimeout = E, this.throwOnError = Q === !0, this.method = r, this.abort = null, s == null)
      this.body = null;
    else if (OA.isStream(s)) {
      this.body = s;
      const I = this.body._readableState;
      (!I || !I.autoDestroy) && (this.endHandler = function() {
        OA.destroy(this);
      }, this.body.on("end", this.endHandler)), this.errorHandler = (C) => {
        this.abort ? this.abort(C) : this.error = C;
      }, this.body.on("error", this.errorHandler);
    } else if (OA.isBuffer(s))
      this.body = s.byteLength ? s : null;
    else if (ArrayBuffer.isView(s))
      this.body = s.buffer.byteLength ? Buffer.from(s.buffer, s.byteOffset, s.byteLength) : null;
    else if (s instanceof ArrayBuffer)
      this.body = s.byteLength ? Buffer.from(s) : null;
    else if (typeof s == "string")
      this.body = s.length ? Buffer.from(s) : null;
    else if (OA.isFormDataLike(s) || OA.isIterable(s) || OA.isBlobLike(s))
      this.body = s;
    else
      throw new be("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
    if (this.completed = !1, this.aborted = !1, this.upgrade = g || null, this.path = i ? OA.buildURL(A, i) : A, this.origin = e, this.idempotent = a ?? (r === "HEAD" || r === "GET"), this.blocking = o ?? !1, this.reset = h ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = B ?? !1, Array.isArray(n)) {
      if (n.length % 2 !== 0)
        throw new be("headers array must be even");
      for (let I = 0; I < n.length; I += 2)
        Rn(this, n[I], n[I + 1]);
    } else if (n && typeof n == "object") {
      const I = Object.keys(n);
      for (let C = 0; C < I.length; C++) {
        const d = I[C];
        Rn(this, d, n[d]);
      }
    } else if (n != null)
      throw new be("headers must be an object or an array");
    if (OA.isFormDataLike(this.body)) {
      if (OA.nodeMajor < 16 || OA.nodeMajor === 16 && OA.nodeMinor < 8)
        throw new be("Form-Data bodies are only supported in node v16.8 and newer.");
      fc || (fc = da().extractBody);
      const [I, C] = fc(s);
      this.contentType == null && (this.contentType = C, this.headers += `content-type: ${C}\r
`), this.body = I.stream, this.contentLength = I.length;
    } else
      OA.isBlobLike(s) && this.contentType == null && s.type && (this.contentType = s.type, this.headers += `content-type: ${s.type}\r
`);
    OA.validateHandler(u, r, g), this.servername = OA.getServerName(this.host), this[ht] = u, eA.create.hasSubscribers && eA.create.publish({ request: this });
  }
  onBodySent(e) {
    if (this[ht].onBodySent)
      return this[ht].onBodySent(e);
  }
  onRequestSent() {
    if (eA.bodySent.hasSubscribers && eA.bodySent.publish({ request: this }), this[ht].onRequestSent)
      return this[ht].onRequestSent();
  }
  onConnect(e) {
    if (qt(!this.aborted), qt(!this.completed), this.error)
      e(this.error);
    else
      return this.abort = e, this[ht].onConnect(e);
  }
  onHeaders(e, A, r, s) {
    return qt(!this.aborted), qt(!this.completed), eA.headers.hasSubscribers && eA.headers.publish({ request: this, response: { statusCode: e, headers: A, statusText: s } }), this[ht].onHeaders(e, A, r, s);
  }
  onData(e) {
    return qt(!this.aborted), qt(!this.completed), this[ht].onData(e);
  }
  onUpgrade(e, A, r) {
    return qt(!this.aborted), qt(!this.completed), this[ht].onUpgrade(e, A, r);
  }
  onComplete(e) {
    return this.onFinally(), qt(!this.aborted), this.completed = !0, eA.trailers.hasSubscribers && eA.trailers.publish({ request: this, trailers: e }), this[ht].onComplete(e);
  }
  onError(e) {
    if (this.onFinally(), eA.error.hasSubscribers && eA.error.publish({ request: this, error: e }), !this.aborted)
      return this.aborted = !0, this[ht].onError(e);
  }
  onFinally() {
    this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
  }
  // TODO: adjust to support H2
  addHeader(e, A) {
    return Rn(this, e, A), this;
  }
  static [Np](e, A, r) {
    return new Gg(e, A, r);
  }
  static [Sp](e, A, r) {
    const s = A.headers;
    A = { ...A, headers: null };
    const n = new Gg(e, A, r);
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
  static [Fp](e) {
    const A = e.split(`\r
`), r = {};
    for (const s of A) {
      const [n, i] = s.split(": ");
      i == null || i.length === 0 || (r[n] ? r[n] += `,${i}` : r[n] = i);
    }
    return r;
  }
};
function Pr(t, e, A) {
  if (e && typeof e == "object")
    throw new be(`invalid ${t} header`);
  if (e = e != null ? `${e}` : "", FC.exec(e) !== null)
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
    if (FC.exec(A) !== null)
      throw new be(`invalid ${e} header`);
    t.host = A;
  } else if (t.contentLength === null && e.length === 14 && e.toLowerCase() === "content-length") {
    if (t.contentLength = parseInt(A, 10), !Number.isFinite(t.contentLength))
      throw new be("invalid content-length header");
  } else if (t.contentType === null && e.length === 12 && e.toLowerCase() === "content-type")
    t.contentType = A, r ? t.headers[e] = Pr(e, A, r) : t.headers += Pr(e, A);
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
        throw new kp("expect header not supported");
      if (SC.exec(e) === null)
        throw new be("invalid header key");
      if (Array.isArray(A))
        for (let s = 0; s < A.length; s++)
          r ? t.headers[e] ? t.headers[e] += `,${Pr(e, A[s], r)}` : t.headers[e] = Pr(e, A[s], r) : t.headers += Pr(e, A[s]);
      else
        r ? t.headers[e] = Pr(e, A, r) : t.headers += Pr(e, A);
    }
  }
}
var vp = Tp;
const Lp = Yi;
let Mp = class extends Lp {
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
var bl = Mp;
const Gp = bl, {
  ClientDestroyedError: pc,
  ClientClosedError: Yp,
  InvalidArgumentError: Ds
} = ke, { kDestroy: xp, kClose: Jp, kDispatch: mc, kInterceptors: Vr } = Ye, bs = Symbol("destroyed"), Dn = Symbol("closed"), jt = Symbol("onDestroyed"), ks = Symbol("onClosed"), Xi = Symbol("Intercepted Dispatch");
let _p = class extends Gp {
  constructor() {
    super(), this[bs] = !1, this[jt] = null, this[Dn] = !1, this[ks] = [];
  }
  get destroyed() {
    return this[bs];
  }
  get closed() {
    return this[Dn];
  }
  get interceptors() {
    return this[Vr];
  }
  set interceptors(e) {
    if (e) {
      for (let A = e.length - 1; A >= 0; A--)
        if (typeof this[Vr][A] != "function")
          throw new Ds("interceptor must be an function");
    }
    this[Vr] = e;
  }
  close(e) {
    if (e === void 0)
      return new Promise((r, s) => {
        this.close((n, i) => n ? s(n) : r(i));
      });
    if (typeof e != "function")
      throw new Ds("invalid callback");
    if (this[bs]) {
      queueMicrotask(() => e(new pc(), null));
      return;
    }
    if (this[Dn]) {
      this[ks] ? this[ks].push(e) : queueMicrotask(() => e(null, null));
      return;
    }
    this[Dn] = !0, this[ks].push(e);
    const A = () => {
      const r = this[ks];
      this[ks] = null;
      for (let s = 0; s < r.length; s++)
        r[s](null, null);
    };
    this[Jp]().then(() => this.destroy()).then(() => {
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
      throw new Ds("invalid callback");
    if (this[bs]) {
      this[jt] ? this[jt].push(A) : queueMicrotask(() => A(null, null));
      return;
    }
    e || (e = new pc()), this[bs] = !0, this[jt] = this[jt] || [], this[jt].push(A);
    const r = () => {
      const s = this[jt];
      this[jt] = null;
      for (let n = 0; n < s.length; n++)
        s[n](null, null);
    };
    this[xp](e).then(() => {
      queueMicrotask(r);
    });
  }
  [Xi](e, A) {
    if (!this[Vr] || this[Vr].length === 0)
      return this[Xi] = this[mc], this[mc](e, A);
    let r = this[mc].bind(this);
    for (let s = this[Vr].length - 1; s >= 0; s--)
      r = this[Vr][s](r);
    return this[Xi] = r, r(e, A);
  }
  dispatch(e, A) {
    if (!A || typeof A != "object")
      throw new Ds("handler must be an object");
    try {
      if (!e || typeof e != "object")
        throw new Ds("opts must be an object.");
      if (this[bs] || this[jt])
        throw new pc();
      if (this[Dn])
        throw new Yp();
      return this[Xi](e, A);
    } catch (r) {
      if (typeof A.onError != "function")
        throw new Ds("invalid onError method");
      return A.onError(r), !1;
    }
  }
};
var fa = _p;
const Op = El, vh = AA, NC = de, { InvalidArgumentError: Hp, ConnectTimeoutError: Pp } = ke;
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
function Vp({ allowH2: t, maxCachedSessions: e, socketPath: A, timeout: r, ...s }) {
  if (e != null && (!Number.isInteger(e) || e < 0))
    throw new Hp("maxCachedSessions must be a positive integer or zero");
  const n = { path: A, ...s }, i = new Yg(e ?? 100);
  return r = r ?? 1e4, t = t ?? !1, function({ hostname: o, host: g, protocol: c, port: E, servername: h, localAddress: Q, httpSocket: B }, u) {
    let I;
    if (c === "https:") {
      wc || (wc = aQ), h = h || n.servername || NC.getServerName(g) || null;
      const d = h || o, f = i.get(d) || null;
      vh(d), I = wc.connect({
        highWaterMark: 16384,
        // TLS in node can't have bigger HWM anyway...
        ...n,
        servername: h,
        session: f,
        localAddress: Q,
        // TODO(HTTP/2): Add support for h2c
        ALPNProtocols: t ? ["http/1.1", "h2"] : ["http/1.1"],
        socket: B,
        // upgrade socket connection
        port: E || 443,
        host: o
      }), I.on("session", function(w) {
        i.set(d, w);
      });
    } else
      vh(!B, "httpSocket can only be sent on TLS update"), I = Op.connect({
        highWaterMark: 64 * 1024,
        // Same as nodejs fs streams.
        ...n,
        localAddress: Q,
        port: E || 80,
        host: o
      });
    if (n.keepAlive == null || n.keepAlive) {
      const d = n.keepAliveInitialDelay === void 0 ? 6e4 : n.keepAliveInitialDelay;
      I.setKeepAlive(!0, d);
    }
    const C = Wp(() => qp(I), r);
    return I.setNoDelay(!0).once(c === "https:" ? "secureConnect" : "connect", function() {
      if (C(), u) {
        const d = u;
        u = null, d(null, this);
      }
    }).on("error", function(d) {
      if (C(), u) {
        const f = u;
        u = null, f(d);
      }
    }), I;
  };
}
function Wp(t, e) {
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
function qp(t) {
  NC.destroy(t, new Pp());
}
var pa = Vp, yc = {}, bn = {}, Lh;
function jp() {
  if (Lh)
    return bn;
  Lh = 1, Object.defineProperty(bn, "__esModule", { value: !0 }), bn.enumToMap = void 0;
  function t(e) {
    const A = {};
    return Object.keys(e).forEach((r) => {
      const s = e[r];
      typeof s == "number" && (A[r] = s);
    }), A;
  }
  return bn.enumToMap = t, bn;
}
var Mh;
function Zp() {
  return Mh || (Mh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SPECIAL_HEADERS = t.HEADER_STATE = t.MINOR = t.MAJOR = t.CONNECTION_TOKEN_CHARS = t.HEADER_CHARS = t.TOKEN = t.STRICT_TOKEN = t.HEX = t.URL_CHAR = t.STRICT_URL_CHAR = t.USERINFO_CHARS = t.MARK = t.ALPHANUM = t.NUM = t.HEX_MAP = t.NUM_MAP = t.ALPHA = t.FINISH = t.H_METHOD_MAP = t.METHOD_MAP = t.METHODS_RTSP = t.METHODS_ICE = t.METHODS_HTTP = t.METHODS = t.LENIENT_FLAGS = t.FLAGS = t.TYPE = t.ERROR = void 0;
    const e = jp();
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
const Ss = de, { kBodyUsed: zn } = Ye, kl = AA, { InvalidArgumentError: $p } = ke, zp = Yi, Xp = [300, 301, 302, 303, 307, 308], Gh = Symbol("body");
class Yh {
  constructor(e) {
    this[Gh] = e, this[zn] = !1;
  }
  async *[Symbol.asyncIterator]() {
    kl(!this[zn], "disturbed"), this[zn] = !0, yield* this[Gh];
  }
}
let Kp = class {
  constructor(e, A, r, s) {
    if (A != null && (!Number.isInteger(A) || A < 0))
      throw new $p("maxRedirections must be a positive number");
    Ss.validateHandler(s, r.method, r.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = { ...r, maxRedirections: 0 }, this.maxRedirections = A, this.handler = s, this.history = [], Ss.isStream(this.opts.body) ? (Ss.bodyLength(this.opts.body) === 0 && this.opts.body.on("data", function() {
      kl(!1);
    }), typeof this.opts.body.readableDidRead != "boolean" && (this.opts.body[zn] = !1, zp.prototype.on.call(this.opts.body, "data", function() {
      this[zn] = !0;
    }))) : this.opts.body && typeof this.opts.body.pipeTo == "function" ? this.opts.body = new Yh(this.opts.body) : this.opts.body && typeof this.opts.body != "string" && !ArrayBuffer.isView(this.opts.body) && Ss.isIterable(this.opts.body) && (this.opts.body = new Yh(this.opts.body));
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
    if (this.location = this.history.length >= this.maxRedirections || Ss.isDisturbed(this.opts.body) ? null : em(e, A), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location)
      return this.handler.onHeaders(e, A, r, s);
    const { origin: n, pathname: i, search: a } = Ss.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), o = a ? `${i}${a}` : i;
    this.opts.headers = Am(this.opts.headers, e === 303, this.opts.origin !== n), this.opts.path = o, this.opts.origin = n, this.opts.maxRedirections = 0, this.opts.query = null, e === 303 && this.opts.method !== "HEAD" && (this.opts.method = "GET", this.opts.body = null);
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
function em(t, e) {
  if (Xp.indexOf(t) === -1)
    return null;
  for (let A = 0; A < e.length; A += 2)
    if (e[A].toString().toLowerCase() === "location")
      return e[A + 1];
}
function xh(t, e, A) {
  return t.length === 4 && t.toString().toLowerCase() === "host" || e && t.toString().toLowerCase().indexOf("content-") === 0 || A && t.length === 13 && t.toString().toLowerCase() === "authorization" || A && t.length === 6 && t.toString().toLowerCase() === "cookie";
}
function Am(t, e, A) {
  const r = [];
  if (Array.isArray(t))
    for (let s = 0; s < t.length; s += 2)
      xh(t[s], e, A) || r.push(t[s], t[s + 1]);
  else if (t && typeof t == "object")
    for (const s of Object.keys(t))
      xh(s, e, A) || r.push(s, t[s]);
  else
    kl(t == null, "headers must be an object or an array");
  return r;
}
var UC = Kp;
const tm = UC;
function rm({ maxRedirections: t }) {
  return (e) => function(r, s) {
    const { maxRedirections: n = t } = r;
    if (!n)
      return e(r, s);
    const i = new tm(e, n, r, s);
    return r = { ...r, maxRedirections: 0 }, e(r, i);
  };
}
var Sl = rm, Rc, Jh;
function _h() {
  return Jh || (Jh = 1, Rc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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ADcDACAAQShqQgA3AwAgAEEgakIANwMAIABBEGpCADcDACAAQQhqQgA3AwAgAEHdATYCHEEAC3sBAX8CQCAAKAIMIgMNAAJAIAAoAgRFDQAgACABNgIECwJAIAAgASACEMSAgIAAIgMNACAAKAIMDwsgACADNgIcQQAhAyAAKAIEIgFFDQAgACABIAIgACgCCBGBgICAAAAiAUUNACAAIAI2AhQgACABNgIMIAEhAwsgAwvk8wEDDn8DfgR/I4CAgIAAQRBrIgMkgICAgAAgASEEIAEhBSABIQYgASEHIAEhCCABIQkgASEKIAEhCyABIQwgASENIAEhDiABIQ8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCHCIQQX9qDt0B2gEB2QECAwQFBgcICQoLDA0O2AEPENcBERLWARMUFRYXGBkaG+AB3wEcHR7VAR8gISIjJCXUASYnKCkqKyzTAdIBLS7RAdABLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVG2wFHSElKzwHOAUvNAUzMAU1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4ABgQGCAYMBhAGFAYYBhwGIAYkB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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FCAAIBA2AgxBACEQDLIBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxNCyAAQdMANgIcIAAgATYCFCAAIBA2AgxBACEQDLEBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxRCyAAQeUANgIcIAAgATYCFCAAIBA2AgxBACEQDLABCyAAQQA2AhwgACABNgIUIABBxoqAgAA2AhAgAEEHNgIMQQAhEAyvAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHSADYCHCAAIAE2AhQgACAQNgIMQQAhEAyuAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHTADYCHCAAIAE2AhQgACAQNgIMQQAhEAytAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMTQsgAEHlADYCHCAAIAE2AhQgACAQNgIMQQAhEAysAQsgAEEANgIcIAAgATYCFCAAQdyIgIAANgIQIABBBzYCDEEAIRAMqwELIBBBP0cNASABQQFqIQELQQUhEAyQAQtBACEQIABBADYCHCAAIAE2AhQgAEH9koCAADYCECAAQQc2AgwMqAELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0gA2AhwgACABNgIUIAAgEDYCDEEAIRAMpwELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0wA2AhwgACABNgIUIAAgEDYCDEEAIRAMpgELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEYLIABB5QA2AhwgACABNgIUIAAgEDYCDEEAIRAMpQELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0gA2AhwgACAUNgIUIAAgATYCDEEAIRAMpAELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0wA2AhwgACAUNgIUIAAgATYCDEEAIRAMowELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDEMLIABB5QA2AhwgACAU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YWdlX2JlZ2luYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlYCBjYWxsYmFjayBlcnJvcgBgb25fc3RhdHVzX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdmVyc2lvbl9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3VybF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21ldGhvZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lYCBjYWxsYmFjayBlcnJvcgBVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNlcnZlcgBJbnZhbGlkIGhlYWRlciB2YWx1ZSBjaGFyAEludmFsaWQgaGVhZGVyIGZpZWxkIGNoYXIAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl92ZXJzaW9uAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBIVFRQIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgdmFsdWUATWlzc2luZyBleHBlY3RlZCBMRiBhZnRlciBoZWFkZXIgdmFsdWUASW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHF1b3RlIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGVkIHZhbHVlAFBhdXNlZCBieSBvbl9oZWFkZXJzX2NvbXBsZXRlAEludmFsaWQgRU9GIHN0YXRlAG9uX3Jlc2V0IHBhdXNlAG9uX2NodW5rX2hlYWRlciBwYXVzZQBvbl9tZXNzYWdlX2JlZ2luIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZSBwYXVzZQBvbl9zdGF0dXNfY29tcGxldGUgcGF1c2UAb25fdmVyc2lvbl9jb21wbGV0ZSBwYXVzZQBvbl91cmxfY29tcGxldGUgcGF1c2UAb25fY2h1bmtfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlIHBhdXNlAG9uX21lc3NhZ2VfY29tcGxldGUgcGF1c2UAb25fbWV0aG9kX2NvbXBsZXRlIHBhdXNlAG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19leHRlbnNpb25fbmFtZSBwYXVzZQBVbmV4cGVjdGVkIHNwYWNlIGFmdGVyIHN0YXJ0IGxpbmUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fbmFtZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIG5hbWUAUGF1c2Ugb24gQ09OTkVDVC9VcGdyYWRlAFBhdXNlIG9uIFBSSS9VcGdyYWRlAEV4cGVjdGVkIEhUVFAvMiBDb25uZWN0aW9uIFByZWZhY2UAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9tZXRob2QARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgbWV0aG9kAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX2ZpZWxkAFBhdXNlZABJbnZhbGlkIHdvcmQgZW5jb3VudGVyZWQASW52YWxpZCBtZXRob2QgZW5jb3VudGVyZWQAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzY2hlbWEAUmVxdWVzdCBoYXMgaW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgAFNXSVRDSF9QUk9YWQBVU0VfUFJPWFkATUtBQ1RJVklUWQBVTlBST0NFU1NBQkxFX0VOVElUWQBDT1BZAE1PVkVEX1BFUk1BTkVOVExZAFRPT19FQVJMWQBOT1RJRlkARkFJTEVEX0RFUEVOREVOQ1kAQkFEX0dBVEVXQVkAUExBWQBQVVQAQ0hFQ0tPVVQAR0FURVdBWV9USU1FT1VUAFJFUVVFU1RfVElNRU9VVABORVRXT1JLX0NPTk5FQ1RfVElNRU9VVABDT05ORUNUSU9OX1RJTUVPVVQATE9HSU5fVElNRU9VVABORVRXT1JLX1JFQURfVElNRU9VVABQT1NUAE1JU0RJUkVDVEVEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9SRVFVRVNUAENMSUVOVF9DTE9TRURfTE9BRF9CQUxBTkNFRF9SRVFVRVNUAEJBRF9SRVFVRVNUAEhUVFBfUkVRVUVTVF9TRU5UX1RPX0hUVFBTX1BPUlQAUkVQT1JUAElNX0FfVEVBUE9UAFJFU0VUX0NPTlRFTlQATk9fQ09OVEVOVABQQVJUSUFMX0NPTlRFTlQASFBFX0lOVkFMSURfQ09OU1RBTlQASFBFX0NCX1JFU0VUAEdFVABIUEVfU1RSSUNUAENPTkZMSUNUAFRFTVBPUkFSWV9SRURJUkVDVABQRVJNQU5FTlRfUkVESVJFQ1QAQ09OTkVDVABNVUxUSV9TVEFUVVMASFBFX0lOVkFMSURfU1RBVFVTAFRPT19NQU5ZX1JFUVVFU1RTAEVBUkxZX0hJTlRTAFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TAE9QVElPTlMAU1dJVENISU5HX1BST1RPQ09MUwBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUwBNVUxUSVBMRV9DSE9JQ0VTAElOVEVSTkFMX1NFUlZFUl9FUlJPUgBXRUJfU0VSVkVSX1VOS05PV05fRVJST1IAUkFJTEdVTl9FUlJPUgBJREVOVElUWV9QUk9WSURFUl9BVVRIRU5USUNBVElPTl9FUlJPUgBTU0xfQ0VSVElGSUNBVEVfRVJST1IASU5WQUxJRF9YX0ZPUldBUkRFRF9GT1IAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAFNFRV9PVEhFUgBIUEVfQ0JfQ0hVTktfSEVBREVSAE1LQ0FMRU5EQVIAU0VUVVAAV0VCX1NFUlZFUl9JU19ET1dOAFRFQVJET1dOAEhQRV9DTE9TRURfQ09OTkVDVElPTgBIRVVSSVNUSUNfRVhQSVJBVElPTgBESVNDT05ORUNURURfT1BFUkFUSU9OAE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OAEhQRV9JTlZBTElEX1ZFUlNJT04ASFBFX0NCX01FU1NBR0VfQkVHSU4AU0lURV9JU19GUk9aRU4ASFBFX0lOVkFMSURfSEVBREVSX1RPS0VOAElOVkFMSURfVE9LRU4ARk9SQklEREVOAEVOSEFOQ0VfWU9VUl9DQUxNAEhQRV9JTlZBTElEX1VSTABCTE9DS0VEX0JZX1BBUkVOVEFMX0NPTlRST0wATUtDT0wAQUNMAEhQRV9JTlRFUk5BTABSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFX1VOT0ZGSUNJQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAFJFVFJZX1dJVEgASFBFX0lOVkFMSURfQ09OVEVOVF9MRU5HVEgASFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgARkxVU0gAUFJPUFBBVENIAE0tU0VBUkNIAFVSSV9UT09fTE9ORwBQUk9DRVNTSU5HAE1JU0NFTExBTkVPVVNfUEVSU0lTVEVOVF9XQVJOSU5HAE1JU0NFTExBTkVPVVNfV0FSTklORwBIUEVfSU5WQUxJRF9UUkFOU0ZFUl9FTkNPRElORwBFeHBlY3RlZCBDUkxGAEhQRV9JTlZBTElEX0NIVU5LX1NJWkUATU9WRQBDT05USU5VRQBIUEVfQ0JfU1RBVFVTX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJTX0NPTVBMRVRFAEhQRV9DQl9WRVJTSU9OX0NPTVBMRVRFAEhQRV9DQl9VUkxfQ09NUExFVEUASFBFX0NCX0NIVU5LX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfVkFMVUVfQ09NUExFVEUASFBFX0NCX0NIVU5LX0VYVEVOU0lPTl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX05BTUVfQ09NUExFVEUASFBFX0NCX01FU1NBR0VfQ09NUExFVEUASFBFX0NCX01FVEhPRF9DT01QTEVURQBIUEVfQ0JfSEVBREVSX0ZJRUxEX0NPTVBMRVRFAERFTEVURQBIUEVfSU5WQUxJRF9FT0ZfU1RBVEUASU5WQUxJRF9TU0xfQ0VSVElGSUNBVEUAUEFVU0UATk9fUkVTUE9OU0UAVU5TVVBQT1JURURfTUVESUFfVFlQRQBHT05FAE5PVF9BQ0NFUFRBQkxFAFNFUlZJQ0VfVU5BVkFJTEFCTEUAUkFOR0VfTk9UX1NBVElTRklBQkxFAE9SSUdJTl9JU19VTlJFQUNIQUJMRQBSRVNQT05TRV9JU19TVEFMRQBQVVJHRQBNRVJHRQBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFAFJFUVVFU1RfSEVBREVSX1RPT19MQVJHRQBQQVlMT0FEX1RPT19MQVJHRQBJTlNVRkZJQ0lFTlRfU1RPUkFHRQBIUEVfUEFVU0VEX1VQR1JBREUASFBFX1BBVVNFRF9IMl9VUEdSQURFAFNPVVJDRQBBTk5PVU5DRQBUUkFDRQBIUEVfVU5FWFBFQ1RFRF9TUEFDRQBERVNDUklCRQBVTlNVQlNDUklCRQBSRUNPUkQASFBFX0lOVkFMSURfTUVUSE9EAE5PVF9GT1VORABQUk9QRklORABVTkJJTkQAUkVCSU5EAFVOQVVUSE9SSVpFRABNRVRIT0RfTk9UX0FMTE9XRUQASFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQAQUxSRUFEWV9SRVBPUlRFRABBQ0NFUFRFRABOT1RfSU1QTEVNRU5URUQATE9PUF9ERVRFQ1RFRABIUEVfQ1JfRVhQRUNURUQASFBFX0xGX0VYUEVDVEVEAENSRUFURUQASU1fVVNFRABIUEVfUEFVU0VEAFRJTUVPVVRfT0NDVVJFRABQQVlNRU5UX1JFUVVJUkVEAFBSRUNPTkRJVElPTl9SRVFVSVJFRABQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRABORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAExFTkdUSF9SRVFVSVJFRABTU0xfQ0VSVElGSUNBVEVfUkVRVUlSRUQAVVBHUkFERV9SRVFVSVJFRABQQUdFX0VYUElSRUQAUFJFQ09ORElUSU9OX0ZBSUxFRABFWFBFQ1RBVElPTl9GQUlMRUQAUkVWQUxJREFUSU9OX0ZBSUxFRABTU0xfSEFORFNIQUtFX0ZBSUxFRABMT0NLRUQAVFJBTlNGT1JNQVRJT05fQVBQTElFRABOT1RfTU9ESUZJRUQATk9UX0VYVEVOREVEAEJBTkRXSURUSF9MSU1JVF9FWENFRURFRABTSVRFX0lTX09WRVJMT0FERUQASEVBRABFeHBlY3RlZCBIVFRQLwAAXhMAACYTAAAwEAAA8BcAAJ0TAAAVEgAAORcAAPASAAAKEAAAdRIAAK0SAACCEwAATxQAAH8QAACgFQAAIxQAAIkSAACLFAAATRUAANQRAADPFAAAEBgAAMkWAADcFgAAwREAAOAXAAC7FAAAdBQAAHwVAADlFAAACBcAAB8QAABlFQAAoxQAACgVAAACFQAAmRUAACwQAACLGQAATw8AANQOAABqEAAAzhAAAAIXAACJDgAAbhMAABwTAABmFAAAVhcAAMETAADNEwAAbBMAAGgXAABmFwAAXxcAACITAADODwAAaQ4AANgOAABjFgAAyxMAAKoOAAAoFwAAJhcAAMUTAABdFgAA6BEAAGcTAABlEwAA8hYAAHMTAAAdFwAA+RYAAPMRAADPDgAAzhUAAAwSAACzEQAApREAAGEQAAAyFwAAuxMAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIDAgICAgIAAAICAAICAAICAgICAgICAgIABAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAICAgICAAACAgACAgACAgICAgICAgICAAMABAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbG9zZWVlcC1hbGl2ZQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBY2h1bmtlZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEAAAEBAAEBAAEBAQEBAQEBAQEAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlY3Rpb25lbnQtbGVuZ3Rob25yb3h5LWNvbm5lY3Rpb24AAAAAAAAAAAAAAAAAAAByYW5zZmVyLWVuY29kaW5ncGdyYWRlDQoNCg0KU00NCg0KVFRQL0NFL1RTUC8AAAAAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEFAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAMEAAAEBAQEBAQEBAQEBAUEBAQEBAQEBAQEBAQABAAGBwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOT1VOQ0VFQ0tPVVRORUNURVRFQ1JJQkVMVVNIRVRFQURTRUFSQ0hSR0VDVElWSVRZTEVOREFSVkVPVElGWVBUSU9OU0NIU0VBWVNUQVRDSEdFT1JESVJFQ1RPUlRSQ0hQQVJBTUVURVJVUkNFQlNDUklCRUFSRE9XTkFDRUlORE5LQ0tVQlNDUklCRUhUVFAvQURUUC8="), Rc;
}
var Dc, Oh;
function sm() {
  return Oh || (Oh = 1, Dc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJsbGh0dHBfc3RhdHVzX25hbWUAIRpsbGh0dHBfc2V0X2xlbmllbnRfaGVhZGVycwAiIWxsaHR0cF9zZXRfbGVuaWVudF9jaHVua2VkX2xlbmd0aAAjHWxsaHR0cF9zZXRfbGVuaWVudF9rZWVwX2FsaXZlACQkbGxodHRwX3NldF9sZW5pZW50X3RyYW5zZmVyX2VuY29kaW5nACUYbGxodHRwX21lc3NhZ2VfbmVlZHNfZW9mAD8JFwEAQQELEQECAwQFCwYHNTk3MS8tJyspCrLgAkUCAAsIABCIgICAAAsZACAAEMKAgIAAGiAAIAI2AjggACABOgAoCxwAIAAgAC8BMiAALQAuIAAQwYCAgAAQgICAgAALKgEBf0HAABDGgICAACIBEMKAgIAAGiABQYCIgIAANgI4IAEgADoAKCABCwoAIAAQyICAgAALBwAgAC0AKAsHACAALQAqCwcAIAAtACsLBwAgAC0AKQsHACAALwEyCwcAIAAtAC4LRQEEfyAAKAIYIQEgAC0ALSECIAAtACghAyAAKAI4IQQgABDCgICAABogACAENgI4IAAgAzoAKCAAIAI6AC0gACABNgIYCxEAIAAgASABIAJqEMOAgIAACxAAIABBAEHcABDMgICAABoLZwEBf0EAIQECQCAAKAIMDQACQAJAAkACQCAALQAvDgMBAAMCCyAAKAI4IgFFDQAgASgCLCIBRQ0AIAAgARGAgICAAAAiAQ0DC0EADwsQyoCAgAAACyAAQcOWgIAANgIQQQ4hAQsgAQseAAJAIAAoAgwNACAAQdGbgIAANgIQIABBFTYCDAsLFgACQCAAKAIMQRVHDQAgAEEANgIMCwsWAAJAIAAoAgxBFkcNACAAQQA2AgwLCwcAIAAoAgwLBwAgACgCEAsJACAAIAE2AhALBwAgACgCFAsiAAJAIABBJEkNABDKgICAAAALIABBAnRBoLOAgABqKAIACyIAAkAgAEEuSQ0AEMqAgIAAAAsgAEECdEGwtICAAGooAgAL7gsBAX9B66iAgAAhAQJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABBnH9qDvQDY2IAAWFhYWFhYQIDBAVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhBgcICQoLDA0OD2FhYWFhEGFhYWFhYWFhYWFhEWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYRITFBUWFxgZGhthYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2YTc4OTphYWFhYWFhYTthYWE8YWFhYT0+P2FhYWFhYWFhQGFhQWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYUJDREVGR0hJSktMTU5PUFFSU2FhYWFhYWFhVFVWV1hZWlthXF1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFeYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhX2BhC0Hhp4CAAA8LQaShgIAADwtBy6yAgAAPC0H+sYCAAA8LQcCkgIAADwtBq6SAgAAPC0GNqICAAA8LQeKmgIAADwtBgLCAgAAPC0G5r4CAAA8LQdekgIAADwtB75+AgAAPC0Hhn4CAAA8LQfqfgIAADwtB8qCAgAAPC0Gor4CAAA8LQa6ygIAADwtBiLCAgAAPC0Hsp4CAAA8LQYKigIAADwtBjp2AgAAPC0HQroCAAA8LQcqjgIAADwtBxbKAgAAPC0HfnICAAA8LQdKcgIAADwtBxKCAgAAPC0HXoICAAA8LQaKfgIAADwtB7a6AgAAPC0GrsICAAA8LQdSlgIAADwtBzK6AgAAPC0H6roCAAA8LQfyrgIAADwtB0rCAgAAPC0HxnYCAAA8LQbuggIAADwtB96uAgAAPC0GQsYCAAA8LQdexgIAADwtBoq2AgAAPC0HUp4CAAA8LQeCrgIAADwtBn6yAgAAPC0HrsYCAAA8LQdWfgIAADwtByrGAgAAPC0HepYCAAA8LQdSegIAADwtB9JyAgAAPC0GnsoCAAA8LQbGdgIAADwtBoJ2AgAAPC0G5sYCAAA8LQbywgIAADwtBkqGAgAAPC0GzpoCAAA8LQemsgIAADwtBrJ6AgAAPC0HUq4CAAA8LQfemgIAADwtBgKaAgAAPC0GwoYCAAA8LQf6egIAADwtBjaOAgAAPC0GJrYCAAA8LQfeigIAADwtBoLGAgAAPC0Gun4CAAA8LQcalgIAADwtB6J6AgAAPC0GTooCAAA8LQcKvgIAADwtBw52AgAAPC0GLrICAAA8LQeGdgIAADwtBja+AgAAPC0HqoYCAAA8LQbStgIAADwtB0q+AgAAPC0HfsoCAAA8LQdKygIAADwtB8LCAgAAPC0GpooCAAA8LQfmjgIAADwtBmZ6AgAAPC0G1rICAAA8LQZuwgIAADwtBkrKAgAAPC0G2q4CAAA8LQcKigIAADwtB+LKAgAAPC0GepYCAAA8LQdCigIAADwtBup6AgAAPC0GBnoCAAA8LEMqAgIAAAAtB1qGAgAAhAQsgAQsWACAAIAAtAC1B/gFxIAFBAEdyOgAtCxkAIAAgAC0ALUH9AXEgAUEAR0EBdHI6AC0LGQAgACAALQAtQfsBcSABQQBHQQJ0cjoALQsZACAAIAAtAC1B9wFxIAFBAEdBA3RyOgAtCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAgAiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCBCIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQcaRgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIwIgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAggiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEH2ioCAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCNCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIMIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABB7ZqAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAjgiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCECIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQZWQgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAI8IgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAhQiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEGqm4CAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCQCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIYIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABB7ZOAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAkQiBEUNACAAIAQRgICAgAAAIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCJCIERQ0AIAAgBBGAgICAAAAhAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIsIgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAigiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEH2iICAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCUCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIcIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABBwpmAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAkgiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCICIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQZSUgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAJMIgRFDQAgACAEEYCAgIAAACEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAlQiBEUNACAAIAQRgICAgAAAIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCWCIERQ0AIAAgBBGAgICAAAAhAwsgAwtFAQF/AkACQCAALwEwQRRxQRRHDQBBASEDIAAtAChBAUYNASAALwEyQeUARiEDDAELIAAtAClBBUYhAwsgACADOgAuQQAL/gEBA39BASEDAkAgAC8BMCIEQQhxDQAgACkDIEIAUiEDCwJAAkAgAC0ALkUNAEEBIQUgAC0AKUEFRg0BQQEhBSAEQcAAcUUgA3FBAUcNAQtBACEFIARBwABxDQBBAiEFIARB//8DcSIDQQhxDQACQCADQYAEcUUNAAJAIAAtAChBAUcNACAALQAtQQpxDQBBBQ8LQQQPCwJAIANBIHENAAJAIAAtAChBAUYNACAALwEyQf//A3EiAEGcf2pB5ABJDQAgAEHMAUYNACAAQbACRg0AQQQhBSAEQShxRQ0CIANBiARxQYAERg0CC0EADwtBAEEDIAApAyBQGyEFCyAFC2IBAn9BACEBAkAgAC0AKEEBRg0AIAAvATJB//8DcSICQZx/akHkAEkNACACQcwBRg0AIAJBsAJGDQAgAC8BMCIAQcAAcQ0AQQEhASAAQYgEcUGABEYNACAAQShxRSEBCyABC6cBAQN/AkACQAJAIAAtACpFDQAgAC0AK0UNAEEAIQMgAC8BMCIEQQJxRQ0BDAILQQAhAyAALwEwIgRBAXFFDQELQQEhAyAALQAoQQFGDQAgAC8BMkH//wNxIgVBnH9qQeQASQ0AIAVBzAFGDQAgBUGwAkYNACAEQcAAcQ0AQQAhAyAEQYgEcUGABEYNACAEQShxQQBHIQMLIABBADsBMCAAQQA6AC8gAwuZAQECfwJAAkACQCAALQAqRQ0AIAAtACtFDQBBACEBIAAvATAiAkECcUUNAQwCC0EAIQEgAC8BMCICQQFxRQ0BC0EBIQEgAC0AKEEBRg0AIAAvATJB//8DcSIAQZx/akHkAEkNACAAQcwBRg0AIABBsAJGDQAgAkHAAHENAEEAIQEgAkGIBHFBgARGDQAgAkEocUEARyEBCyABC0kBAXsgAEEQav0MAAAAAAAAAAAAAAAAAAAAACIB/QsDACAAIAH9CwMAIABBMGogAf0LAwAgAEEgaiAB/QsDACAAQd0BNgIcQQALewEBfwJAIAAoAgwiAw0AAkAgACgCBEUNACAAIAE2AgQLAkAgACABIAIQxICAgAAiAw0AIAAoAgwPCyAAIAM2AhxBACEDIAAoAgQiAUUNACAAIAEgAiAAKAIIEYGAgIAAACIBRQ0AIAAgAjYCFCAAIAE2AgwgASEDCyADC+TzAQMOfwN+BH8jgICAgABBEGsiAySAgICAACABIQQgASEFIAEhBiABIQcgASEIIAEhCSABIQogASELIAEhDCABIQ0gASEOIAEhDwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIcIhBBf2oO3QHaAQHZAQIDBAUGBwgJCgsMDQ7YAQ8Q1wEREtYBExQVFhcYGRob4AHfARwdHtUBHyAhIiMkJdQBJicoKSorLNMB0gEtLtEB0AEvMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUbbAUdISUrPAc4BS80BTMwBTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBAOxwEAAQID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YWNrIGVycm9yAGBvbl9jaHVua19leHRlbnNpb25fdmFsdWVgIGNhbGxiYWNrIGVycm9yAGBvbl9zdGF0dXNfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl92ZXJzaW9uX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdXJsX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWV0aG9kX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX25hbWVgIGNhbGxiYWNrIGVycm9yAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2VydmVyAEludmFsaWQgaGVhZGVyIHZhbHVlIGNoYXIASW52YWxpZCBoZWFkZXIgZmllbGQgY2hhcgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3ZlcnNpb24ASW52YWxpZCBtaW5vciB2ZXJzaW9uAEludmFsaWQgbWFqb3IgdmVyc2lvbgBFeHBlY3RlZCBzcGFjZSBhZnRlciB2ZXJzaW9uAEV4cGVjdGVkIENSTEYgYWZ0ZXIgdmVyc2lvbgBJbnZhbGlkIEhUVFAgdmVyc2lvbgBJbnZhbGlkIGhlYWRlciB0b2tlbgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3VybABJbnZhbGlkIGNoYXJhY3RlcnMgaW4gdXJsAFVuZXhwZWN0ZWQgc3RhcnQgY2hhciBpbiB1cmwARG91YmxlIEAgaW4gdXJsAEVtcHR5IENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhcmFjdGVyIGluIENvbnRlbnQtTGVuZ3RoAER1cGxpY2F0ZSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXIgaW4gdXJsIHBhdGgAQ29udGVudC1MZW5ndGggY2FuJ3QgYmUgcHJlc2VudCB3aXRoIFRyYW5zZmVyLUVuY29kaW5nAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHNpemUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfdmFsdWUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyB2YWx1ZQBNaXNzaW5nIGV4cGVjdGVkIExGIGFmdGVyIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AgaGVhZGVyIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGUgdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyBxdW90ZWQgdmFsdWUAUGF1c2VkIGJ5IG9uX2hlYWRlcnNfY29tcGxldGUASW52YWxpZCBFT0Ygc3RhdGUAb25fcmVzZXQgcGF1c2UAb25fY2h1bmtfaGVhZGVyIHBhdXNlAG9uX21lc3NhZ2VfYmVnaW4gcGF1c2UAb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlIHBhdXNlAG9uX3N0YXR1c19jb21wbGV0ZSBwYXVzZQBvbl92ZXJzaW9uX2NvbXBsZXRlIHBhdXNlAG9uX3VybF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19jb21wbGV0ZSBwYXVzZQBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGUgcGF1c2UAb25fbWVzc2FnZV9jb21wbGV0ZSBwYXVzZQBvbl9tZXRob2RfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lIHBhdXNlAFVuZXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgc3RhcnQgbGluZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgbmFtZQBQYXVzZSBvbiBDT05ORUNUL1VwZ3JhZGUAUGF1c2Ugb24gUFJJL1VwZ3JhZGUARXhwZWN0ZWQgSFRUUC8yIENvbm5lY3Rpb24gUHJlZmFjZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX21ldGhvZABFeHBlY3RlZCBzcGFjZSBhZnRlciBtZXRob2QAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfZmllbGQAUGF1c2VkAEludmFsaWQgd29yZCBlbmNvdW50ZXJlZABJbnZhbGlkIG1ldGhvZCBlbmNvdW50ZXJlZABVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNjaGVtYQBSZXF1ZXN0IGhhcyBpbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AAU1dJVENIX1BST1hZAFVTRV9QUk9YWQBNS0FDVElWSVRZAFVOUFJPQ0VTU0FCTEVfRU5USVRZAENPUFkATU9WRURfUEVSTUFORU5UTFkAVE9PX0VBUkxZAE5PVElGWQBGQUlMRURfREVQRU5ERU5DWQBCQURfR0FURVdBWQBQTEFZAFBVVABDSEVDS09VVABHQVRFV0FZX1RJTUVPVVQAUkVRVUVTVF9USU1FT1VUAE5FVFdPUktfQ09OTkVDVF9USU1FT1VUAENPTk5FQ1RJT05fVElNRU9VVABMT0dJTl9USU1FT1VUAE5FVFdPUktfUkVBRF9USU1FT1VUAFBPU1QATUlTRElSRUNURURfUkVRVUVTVABDTElFTlRfQ0xPU0VEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9MT0FEX0JBTEFOQ0VEX1JFUVVFU1QAQkFEX1JFUVVFU1QASFRUUF9SRVFVRVNUX1NFTlRfVE9fSFRUUFNfUE9SVABSRVBPUlQASU1fQV9URUFQT1QAUkVTRVRfQ09OVEVOVABOT19DT05URU5UAFBBUlRJQUxfQ09OVEVOVABIUEVfSU5WQUxJRF9DT05TVEFOVABIUEVfQ0JfUkVTRVQAR0VUAEhQRV9TVFJJQ1QAQ09ORkxJQ1QAVEVNUE9SQVJZX1JFRElSRUNUAFBFUk1BTkVOVF9SRURJUkVDVABDT05ORUNUAE1VTFRJX1NUQVRVUwBIUEVfSU5WQUxJRF9TVEFUVVMAVE9PX01BTllfUkVRVUVTVFMARUFSTFlfSElOVFMAVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlMAT1BUSU9OUwBTV0lUQ0hJTkdfUFJPVE9DT0xTAFZBUklBTlRfQUxTT19ORUdPVElBVEVTAE1VTFRJUExFX0NIT0lDRVMASU5URVJOQUxfU0VSVkVSX0VSUk9SAFdFQl9TRVJWRVJfVU5LTk9XTl9FUlJPUgBSQUlMR1VOX0VSUk9SAElERU5USVRZX1BST1ZJREVSX0FVVEhFTlRJQ0FUSU9OX0VSUk9SAFNTTF9DRVJUSUZJQ0FURV9FUlJPUgBJTlZBTElEX1hfRk9SV0FSREVEX0ZPUgBTRVRfUEFSQU1FVEVSAEdFVF9QQVJBTUVURVIASFBFX1VTRVIAU0VFX09USEVSAEhQRV9DQl9DSFVOS19IRUFERVIATUtDQUxFTkRBUgBTRVRVUABXRUJfU0VSVkVSX0lTX0RPV04AVEVBUkRPV04ASFBFX0NMT1NFRF9DT05ORUNUSU9OAEhFVVJJU1RJQ19FWFBJUkFUSU9OAERJU0NPTk5FQ1RFRF9PUEVSQVRJT04ATk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04ASFBFX0lOVkFMSURfVkVSU0lPTgBIUEVfQ0JfTUVTU0FHRV9CRUdJTgBTSVRFX0lTX0ZST1pFTgBIUEVfSU5WQUxJRF9IRUFERVJfVE9LRU4ASU5WQUxJRF9UT0tFTgBGT1JCSURERU4ARU5IQU5DRV9ZT1VSX0NBTE0ASFBFX0lOVkFMSURfVVJMAEJMT0NLRURfQllfUEFSRU5UQUxfQ09OVFJPTABNS0NPTABBQ0wASFBFX0lOVEVSTkFMAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0VfVU5PRkZJQ0lBTABIUEVfT0sAVU5MSU5LAFVOTE9DSwBQUkkAUkVUUllfV0lUSABIUEVfSU5WQUxJRF9DT05URU5UX0xFTkdUSABIUEVfVU5FWFBFQ1RFRF9DT05URU5UX0xFTkdUSABGTFVTSABQUk9QUEFUQ0gATS1TRUFSQ0gAVVJJX1RPT19MT05HAFBST0NFU1NJTkcATUlTQ0VMTEFORU9VU19QRVJTSVNURU5UX1dBUk5JTkcATUlTQ0VMTEFORU9VU19XQVJOSU5HAEhQRV9JTlZBTElEX1RSQU5TRkVSX0VOQ09ESU5HAEV4cGVjdGVkIENSTEYASFBFX0lOVkFMSURfQ0hVTktfU0laRQBNT1ZFAENPTlRJTlVFAEhQRV9DQl9TVEFUVVNfQ09NUExFVEUASFBFX0NCX0hFQURFUlNfQ09NUExFVEUASFBFX0NCX1ZFUlNJT05fQ09NUExFVEUASFBFX0NCX1VSTF9DT01QTEVURQBIUEVfQ0JfQ0hVTktfQ09NUExFVEUASFBFX0NCX0hFQURFUl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX1ZBTFVFX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19FWFRFTlNJT05fTkFNRV9DT01QTEVURQBIUEVfQ0JfTUVTU0FHRV9DT01QTEVURQBIUEVfQ0JfTUVUSE9EX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfRklFTERfQ09NUExFVEUAREVMRVRFAEhQRV9JTlZBTElEX0VPRl9TVEFURQBJTlZBTElEX1NTTF9DRVJUSUZJQ0FURQBQQVVTRQBOT19SRVNQT05TRQBVTlNVUFBPUlRFRF9NRURJQV9UWVBFAEdPTkUATk9UX0FDQ0VQVEFCTEUAU0VSVklDRV9VTkFWQUlMQUJMRQBSQU5HRV9OT1RfU0FUSVNGSUFCTEUAT1JJR0lOX0lTX1VOUkVBQ0hBQkxFAFJFU1BPTlNFX0lTX1NUQUxFAFBVUkdFAE1FUkdFAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UAUkVRVUVTVF9IRUFERVJfVE9PX0xBUkdFAFBBWUxPQURfVE9PX0xBUkdFAElOU1VGRklDSUVOVF9TVE9SQUdFAEhQRV9QQVVTRURfVVBHUkFERQBIUEVfUEFVU0VEX0gyX1VQR1JBREUAU09VUkNFAEFOTk9VTkNFAFRSQUNFAEhQRV9VTkVYUEVDVEVEX1NQQUNFAERFU0NSSUJFAFVOU1VCU0NSSUJFAFJFQ09SRABIUEVfSU5WQUxJRF9NRVRIT0QATk9UX0ZPVU5EAFBST1BGSU5EAFVOQklORABSRUJJTkQAVU5BVVRIT1JJWkVEAE1FVEhPRF9OT1RfQUxMT1dFRABIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRABBTFJFQURZX1JFUE9SVEVEAEFDQ0VQVEVEAE5PVF9JTVBMRU1FTlRFRABMT09QX0RFVEVDVEVEAEhQRV9DUl9FWFBFQ1RFRABIUEVfTEZfRVhQRUNURUQAQ1JFQVRFRABJTV9VU0VEAEhQRV9QQVVTRUQAVElNRU9VVF9PQ0NVUkVEAFBBWU1FTlRfUkVRVUlSRUQAUFJFQ09ORElUSU9OX1JFUVVJUkVEAFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQATEVOR1RIX1JFUVVJUkVEAFNTTF9DRVJUSUZJQ0FURV9SRVFVSVJFRABVUEdSQURFX1JFUVVJUkVEAFBBR0VfRVhQSVJFRABQUkVDT05ESVRJT05fRkFJTEVEAEVYUEVDVEFUSU9OX0ZBSUxFRABSRVZBTElEQVRJT05fRkFJTEVEAFNTTF9IQU5EU0hBS0VfRkFJTEVEAExPQ0tFRABUUkFOU0ZPUk1BVElPTl9BUFBMSUVEAE5PVF9NT0RJRklFRABOT1RfRVhURU5ERUQAQkFORFdJRFRIX0xJTUlUX0VYQ0VFREVEAFNJVEVfSVNfT1ZFUkxPQURFRABIRUFEAEV4cGVjdGVkIEhUVFAvAABeEwAAJhMAADAQAADwFwAAnRMAABUSAAA5FwAA8BIAAAoQAAB1EgAArRIAAIITAABPFAAAfxAAAKAVAAAjFAAAiRIAAIsUAABNFQAA1BEAAM8UAAAQGAAAyRYAANwWAADBEQAA4BcAALsUAAB0FAAAfBUAAOUUAAAIFwAAHxAAAGUVAACjFAAAKBUAAAIVAACZFQAALBAAAIsZAABPDwAA1A4AAGoQAADOEAAAAhcAAIkOAABuEwAAHBMAAGYUAABWFwAAwRMAAM0TAABsEwAAaBcAAGYXAABfFwAAIhMAAM4PAABpDgAA2A4AAGMWAADLEwAAqg4AACgXAAAmFwAAxRMAAF0WAADoEQAAZxMAAGUTAADyFgAAcxMAAB0XAAD5FgAA8xEAAM8OAADOFQAADBIAALMRAAClEQAAYRAAADIXAAC7EwAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgMCAgICAgAAAgIAAgIAAgICAgICAgICAgAEAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgICAgIAAAICAAICAAICAgICAgICAgIAAwAEAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsb3NlZWVwLWFsaXZlAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQFjaHVua2VkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQAAAQEAAQEAAQEBAQEBAQEBAQAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGVjdGlvbmVudC1sZW5ndGhvbnJveHktY29ubmVjdGlvbgAAAAAAAAAAAAAAAAAAAHJhbnNmZXItZW5jb2RpbmdwZ3JhZGUNCg0KDQpTTQ0KDQpUVFAvQ0UvVFNQLwAAAAAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAwQAAAQEBAQEBAQEBAQEBQQEBAQEBAQEBAQEBAAEAAYHBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAgAAAAACAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5PVU5DRUVDS09VVE5FQ1RFVEVDUklCRUxVU0hFVEVBRFNFQVJDSFJHRUNUSVZJVFlMRU5EQVJWRU9USUZZUFRJT05TQ0hTRUFZU1RBVENIR0VPUkRJUkVDVE9SVFJDSFBBUkFNRVRFUlVSQ0VCU0NSSUJFQVJET1dOQUNFSU5ETktDS1VCU0NSSUJFSFRUUC9BRFRQLw=="), Dc;
}
const Ae = AA, TC = El, nm = un, { pipeline: im } = Ot, ie = de, bc = fp, xg = vp, om = fa, {
  RequestContentLengthMismatchError: or,
  ResponseContentLengthMismatchError: am,
  InvalidArgumentError: qe,
  RequestAbortedError: Fl,
  HeadersTimeoutError: cm,
  HeadersOverflowError: gm,
  SocketError: gn,
  InformationalError: Yt,
  BodyTimeoutError: lm,
  HTTPParserError: hm,
  ResponseExceededMaxSizeError: Em,
  ClientDestroyedError: um
} = ke, Qm = pa, {
  kUrl: fA,
  kReset: JA,
  kServerName: yr,
  kClient: xt,
  kBusy: Jg,
  kParser: He,
  kConnect: Cm,
  kBlocking: ln,
  kResuming: ts,
  kRunning: Je,
  kPending: ds,
  kSize: Cs,
  kWriting: ar,
  kQueue: ve,
  kConnected: Bm,
  kConnecting: Gs,
  kNeedDrain: Lr,
  kNoRef: _n,
  kKeepAliveDefaultTimeout: _g,
  kHostHeader: vC,
  kPendingIdx: At,
  kRunningIdx: Le,
  kError: pA,
  kPipelining: Mr,
  kSocket: Pe,
  kKeepAliveTimeoutValue: Kn,
  kMaxHeadersSize: Uo,
  kKeepAliveMaxTimeout: LC,
  kKeepAliveTimeoutThreshold: MC,
  kHeadersTimeout: GC,
  kBodyTimeout: YC,
  kStrictContentLength: ei,
  kConnector: On,
  kMaxRedirections: Im,
  kMaxRequests: Ai,
  kCounter: xC,
  kClose: dm,
  kDestroy: fm,
  kDispatch: pm,
  kInterceptors: mm,
  kLocalAddress: Hn,
  kMaxResponseSize: JC,
  kHTTPConnVersion: Jt,
  // HTTP2
  kHost: _C,
  kHTTP2Session: tt,
  kHTTP2SessionState: $o,
  kHTTP2BuildRequest: wm,
  kHTTP2CopyHeaders: ym,
  kHTTP1BuildRequest: Rm
} = Ye;
let zo;
try {
  zo = require("http2");
} catch {
  zo = { constants: {} };
}
const {
  constants: {
    HTTP2_HEADER_AUTHORITY: Dm,
    HTTP2_HEADER_METHOD: bm,
    HTTP2_HEADER_PATH: km,
    HTTP2_HEADER_SCHEME: Sm,
    HTTP2_HEADER_CONTENT_LENGTH: Fm,
    HTTP2_HEADER_EXPECT: Nm,
    HTTP2_HEADER_STATUS: Um
  }
} = zo;
let Hh = !1;
const Ki = Buffer[Symbol.species], Rr = Symbol("kClosedResolve"), FA = {};
try {
  const t = require("diagnostics_channel");
  FA.sendHeaders = t.channel("undici:client:sendHeaders"), FA.beforeConnect = t.channel("undici:client:beforeConnect"), FA.connectError = t.channel("undici:client:connectError"), FA.connected = t.channel("undici:client:connected");
} catch {
  FA.sendHeaders = { hasSubscribers: !1 }, FA.beforeConnect = { hasSubscribers: !1 }, FA.connectError = { hasSubscribers: !1 }, FA.connected = { hasSubscribers: !1 };
}
let Tm = class extends om {
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
    idleTimeout: g,
    keepAlive: c,
    keepAliveTimeout: E,
    maxKeepAliveTimeout: h,
    keepAliveMaxTimeout: Q,
    keepAliveTimeoutThreshold: B,
    socketPath: u,
    pipelining: I,
    tls: C,
    strictContentLength: d,
    maxCachedSessions: f,
    maxRedirections: w,
    connect: m,
    maxRequestsPerClient: y,
    localAddress: R,
    maxResponseSize: S,
    autoSelectFamily: v,
    autoSelectFamilyAttemptTimeout: T,
    // h2
    allowH2: z,
    maxConcurrentStreams: K
  } = {}) {
    if (super(), c !== void 0)
      throw new qe("unsupported keepAlive, use pipelining=0 instead");
    if (n !== void 0)
      throw new qe("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
    if (i !== void 0)
      throw new qe("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
    if (g !== void 0)
      throw new qe("unsupported idleTimeout, use keepAliveTimeout instead");
    if (h !== void 0)
      throw new qe("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
    if (r != null && !Number.isFinite(r))
      throw new qe("invalid maxHeaderSize");
    if (u != null && typeof u != "string")
      throw new qe("invalid socketPath");
    if (a != null && (!Number.isFinite(a) || a < 0))
      throw new qe("invalid connectTimeout");
    if (E != null && (!Number.isFinite(E) || E <= 0))
      throw new qe("invalid keepAliveTimeout");
    if (Q != null && (!Number.isFinite(Q) || Q <= 0))
      throw new qe("invalid keepAliveMaxTimeout");
    if (B != null && !Number.isFinite(B))
      throw new qe("invalid keepAliveTimeoutThreshold");
    if (s != null && (!Number.isInteger(s) || s < 0))
      throw new qe("headersTimeout must be a positive integer or zero");
    if (o != null && (!Number.isInteger(o) || o < 0))
      throw new qe("bodyTimeout must be a positive integer or zero");
    if (m != null && typeof m != "function" && typeof m != "object")
      throw new qe("connect must be a function or an object");
    if (w != null && (!Number.isInteger(w) || w < 0))
      throw new qe("maxRedirections must be a positive number");
    if (y != null && (!Number.isInteger(y) || y < 0))
      throw new qe("maxRequestsPerClient must be a positive number");
    if (R != null && (typeof R != "string" || TC.isIP(R) === 0))
      throw new qe("localAddress must be valid string IP address");
    if (S != null && (!Number.isInteger(S) || S < -1))
      throw new qe("maxResponseSize must be a positive number");
    if (T != null && (!Number.isInteger(T) || T < -1))
      throw new qe("autoSelectFamilyAttemptTimeout must be a positive number");
    if (z != null && typeof z != "boolean")
      throw new qe("allowH2 must be a valid boolean value");
    if (K != null && (typeof K != "number" || K < 1))
      throw new qe("maxConcurrentStreams must be a possitive integer, greater than 0");
    typeof m != "function" && (m = Qm({
      ...C,
      maxCachedSessions: f,
      allowH2: z,
      socketPath: u,
      timeout: a,
      ...ie.nodeHasAutoSelectFamily && v ? { autoSelectFamily: v, autoSelectFamilyAttemptTimeout: T } : void 0,
      ...m
    })), this[mm] = A && A.Client && Array.isArray(A.Client) ? A.Client : [Ym({ maxRedirections: w })], this[fA] = ie.parseOrigin(e), this[On] = m, this[Pe] = null, this[Mr] = I ?? 1, this[Uo] = r || nm.maxHeaderSize, this[_g] = E ?? 4e3, this[LC] = Q ?? 6e5, this[MC] = B ?? 1e3, this[Kn] = this[_g], this[yr] = null, this[Hn] = R ?? null, this[ts] = 0, this[Lr] = 0, this[vC] = `host: ${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}\r
`, this[YC] = o ?? 3e5, this[GC] = s ?? 3e5, this[ei] = d ?? !0, this[Im] = w, this[Ai] = y, this[Rr] = null, this[JC] = S > -1 ? S : -1, this[Jt] = "h1", this[tt] = null, this[$o] = z ? {
      // streams: null, // Fixed queue of streams - For future support of `push`
      openStreams: 0,
      // Keep track of them to decide wether or not unref the session
      maxConcurrentStreams: K ?? 100
      // Max peerConcurrentStreams for a Node h2 server
    } : null, this[_C] = `${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}`, this[ve] = [], this[Le] = 0, this[At] = 0;
  }
  get pipelining() {
    return this[Mr];
  }
  set pipelining(e) {
    this[Mr] = e, rt(this, !0);
  }
  get [ds]() {
    return this[ve].length - this[At];
  }
  get [Je]() {
    return this[At] - this[Le];
  }
  get [Cs]() {
    return this[ve].length - this[Le];
  }
  get [Bm]() {
    return !!this[Pe] && !this[Gs] && !this[Pe].destroyed;
  }
  get [Jg]() {
    const e = this[Pe];
    return e && (e[JA] || e[ar] || e[ln]) || this[Cs] >= (this[Mr] || 1) || this[ds] > 0;
  }
  /* istanbul ignore: only used for test */
  [Cm](e) {
    VC(this), this.once("connect", e);
  }
  [pm](e, A) {
    const r = e.origin || this[fA].origin, s = this[Jt] === "h2" ? xg[wm](r, e, A) : xg[Rm](r, e, A);
    return this[ve].push(s), this[ts] || (ie.bodyLength(s.body) == null && ie.isIterable(s.body) ? (this[ts] = 1, process.nextTick(rt, this)) : rt(this, !0)), this[ts] && this[Lr] !== 2 && this[Jg] && (this[Lr] = 2), this[Lr] < 2;
  }
  async [dm]() {
    return new Promise((e) => {
      this[Cs] ? this[Rr] = e : e(null);
    });
  }
  async [fm](e) {
    return new Promise((A) => {
      const r = this[ve].splice(this[At]);
      for (let n = 0; n < r.length; n++) {
        const i = r[n];
        NA(this, i, e);
      }
      const s = () => {
        this[Rr] && (this[Rr](), this[Rr] = null), A();
      };
      this[tt] != null && (ie.destroy(this[tt], e), this[tt] = null, this[$o] = null), this[Pe] ? ie.destroy(this[Pe].on("close", s), e) : queueMicrotask(s), rt(this);
    });
  }
};
function vm(t) {
  Ae(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[Pe][pA] = t, ma(this[xt], t);
}
function Lm(t, e, A) {
  const r = new Yt(`HTTP/2: "frameError" received - type ${t}, code ${e}`);
  A === 0 && (this[Pe][pA] = r, ma(this[xt], r));
}
function Mm() {
  ie.destroy(this, new gn("other side closed")), ie.destroy(this[Pe], new gn("other side closed"));
}
function Gm(t) {
  const e = this[xt], A = new Yt(`HTTP/2: "GOAWAY" frame received with code ${t}`);
  if (e[Pe] = null, e[tt] = null, e.destroyed) {
    Ae(this[ds] === 0);
    const r = e[ve].splice(e[Le]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      NA(this, n, A);
    }
  } else if (e[Je] > 0) {
    const r = e[ve][e[Le]];
    e[ve][e[Le]++] = null, NA(e, r, A);
  }
  e[At] = e[Le], Ae(e[Je] === 0), e.emit(
    "disconnect",
    e[fA],
    [e],
    A
  ), rt(e);
}
const kt = Zp(), Ym = Sl, xm = Buffer.alloc(0);
async function Jm() {
  const t = process.env.JEST_WORKER_ID ? _h() : void 0;
  let e;
  try {
    e = await WebAssembly.compile(Buffer.from(sm(), "base64"));
  } catch {
    e = await WebAssembly.compile(Buffer.from(t || _h(), "base64"));
  }
  return await WebAssembly.instantiate(e, {
    env: {
      /* eslint-disable camelcase */
      wasm_on_url: (A, r, s) => 0,
      wasm_on_status: (A, r, s) => {
        Ae.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onStatus(new Ki(Nt.buffer, n, s)) || 0;
      },
      wasm_on_message_begin: (A) => (Ae.strictEqual(oA.ptr, A), oA.onMessageBegin() || 0),
      wasm_on_header_field: (A, r, s) => {
        Ae.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onHeaderField(new Ki(Nt.buffer, n, s)) || 0;
      },
      wasm_on_header_value: (A, r, s) => {
        Ae.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onHeaderValue(new Ki(Nt.buffer, n, s)) || 0;
      },
      wasm_on_headers_complete: (A, r, s, n) => (Ae.strictEqual(oA.ptr, A), oA.onHeadersComplete(r, !!s, !!n) || 0),
      wasm_on_body: (A, r, s) => {
        Ae.strictEqual(oA.ptr, A);
        const n = r - Gt + Nt.byteOffset;
        return oA.onBody(new Ki(Nt.buffer, n, s)) || 0;
      },
      wasm_on_message_complete: (A) => (Ae.strictEqual(oA.ptr, A), oA.onMessageComplete() || 0)
      /* eslint-enable camelcase */
    }
  });
}
let kc = null, Og = Jm();
Og.catch();
let oA = null, Nt = null, eo = 0, Gt = null;
const hn = 1, To = 2, Hg = 3;
class _m {
  constructor(e, A, { exports: r }) {
    Ae(Number.isFinite(e[Uo]) && e[Uo] > 0), this.llhttp = r, this.ptr = this.llhttp.llhttp_alloc(kt.TYPE.RESPONSE), this.client = e, this.socket = A, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[Uo], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[JC];
  }
  setTimeout(e, A) {
    this.timeoutType = A, e !== this.timeoutValue ? (bc.clearTimeout(this.timeout), e ? (this.timeout = bc.setTimeout(Om, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
  }
  resume() {
    this.socket.destroyed || !this.paused || (Ae(this.ptr != null), Ae(oA == null), this.llhttp.llhttp_resume(this.ptr), Ae(this.timeoutType === To), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || xm), this.readMore());
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
    Ae(this.ptr != null), Ae(oA == null), Ae(!this.paused);
    const { socket: A, llhttp: r } = this;
    e.length > eo && (Gt && r.free(Gt), eo = Math.ceil(e.length / 4096) * 4096, Gt = r.malloc(eo)), new Uint8Array(r.memory.buffer, Gt, eo).set(e);
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
        let a = "";
        if (i) {
          const o = new Uint8Array(r.memory.buffer, i).indexOf(0);
          a = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r.memory.buffer, i, o).toString() + ")";
        }
        throw new hm(a, kt.ERROR[s], e.slice(n));
      }
    } catch (s) {
      ie.destroy(A, s);
    }
  }
  destroy() {
    Ae(this.ptr != null), Ae(oA == null), this.llhttp.llhttp_free(this.ptr), this.ptr = null, bc.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
  }
  onStatus(e) {
    this.statusText = e.toString();
  }
  onMessageBegin() {
    const { socket: e, client: A } = this;
    if (e.destroyed || !A[ve][A[Le]])
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
    this.headersSize += e, this.headersSize >= this.headersMaxSize && ie.destroy(this.socket, new gm());
  }
  onUpgrade(e) {
    const { upgrade: A, client: r, socket: s, headers: n, statusCode: i } = this;
    Ae(A);
    const a = r[ve][r[Le]];
    Ae(a), Ae(!s.destroyed), Ae(s === r[Pe]), Ae(!this.paused), Ae(a.upgrade || a.method === "CONNECT"), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, Ae(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[He].destroy(), s[He] = null, s[xt] = null, s[pA] = null, s.removeListener("error", HC).removeListener("readable", OC).removeListener("end", PC).removeListener("close", Pg), r[Pe] = null, r[ve][r[Le]++] = null, r.emit("disconnect", r[fA], [r], new Yt("upgrade"));
    try {
      a.onUpgrade(i, n, s);
    } catch (o) {
      ie.destroy(s, o);
    }
    rt(r);
  }
  onHeadersComplete(e, A, r) {
    const { client: s, socket: n, headers: i, statusText: a } = this;
    if (n.destroyed)
      return -1;
    const o = s[ve][s[Le]];
    if (!o)
      return -1;
    if (Ae(!this.upgrade), Ae(this.statusCode < 200), e === 100)
      return ie.destroy(n, new gn("bad response", ie.getSocketInfo(n))), -1;
    if (A && !o.upgrade)
      return ie.destroy(n, new gn("bad upgrade", ie.getSocketInfo(n))), -1;
    if (Ae.strictEqual(this.timeoutType, hn), this.statusCode = e, this.shouldKeepAlive = r || // Override llhttp value which does not allow keepAlive for HEAD.
    o.method === "HEAD" && !n[JA] && this.connection.toLowerCase() === "keep-alive", this.statusCode >= 200) {
      const c = o.bodyTimeout != null ? o.bodyTimeout : s[YC];
      this.setTimeout(c, To);
    } else
      this.timeout && this.timeout.refresh && this.timeout.refresh();
    if (o.method === "CONNECT")
      return Ae(s[Je] === 1), this.upgrade = !0, 2;
    if (A)
      return Ae(s[Je] === 1), this.upgrade = !0, 2;
    if (Ae(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[Mr]) {
      const c = this.keepAlive ? ie.parseKeepAliveTimeout(this.keepAlive) : null;
      if (c != null) {
        const E = Math.min(
          c - s[MC],
          s[LC]
        );
        E <= 0 ? n[JA] = !0 : s[Kn] = E;
      } else
        s[Kn] = s[_g];
    } else
      n[JA] = !0;
    let g;
    try {
      g = o.onHeaders(e, i, this.resume, a) === !1;
    } catch (c) {
      return ie.destroy(n, c), -1;
    }
    return o.method === "HEAD" || e < 200 ? 1 : (n[ln] && (n[ln] = !1, rt(s)), g ? kt.ERROR.PAUSED : 0);
  }
  onBody(e) {
    const { client: A, socket: r, statusCode: s, maxResponseSize: n } = this;
    if (r.destroyed)
      return -1;
    const i = A[ve][A[Le]];
    if (Ae(i), Ae.strictEqual(this.timeoutType, To), this.timeout && this.timeout.refresh && this.timeout.refresh(), Ae(s >= 200), n > -1 && this.bytesRead + e.length > n)
      return ie.destroy(r, new Em()), -1;
    this.bytesRead += e.length;
    try {
      if (i.onData(e) === !1)
        return kt.ERROR.PAUSED;
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
    const g = e[ve][e[Le]];
    if (Ae(g), Ae(r >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", Ae(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, !(r < 200)) {
      if (g.method !== "HEAD" && i && a !== parseInt(i, 10))
        return ie.destroy(A, new am()), -1;
      try {
        g.onComplete(n);
      } catch (c) {
        NA(e, g, c);
      }
      if (e[ve][e[Le]++] = null, A[ar])
        return Ae.strictEqual(e[Je], 0), ie.destroy(A, new Yt("reset")), kt.ERROR.PAUSED;
      if (o) {
        if (A[JA] && e[Je] === 0)
          return ie.destroy(A, new Yt("reset")), kt.ERROR.PAUSED;
        e[Mr] === 1 ? setImmediate(rt, e) : rt(e);
      } else
        return ie.destroy(A, new Yt("reset")), kt.ERROR.PAUSED;
    }
  }
}
function Om(t) {
  const { socket: e, timeoutType: A, client: r } = t;
  A === hn ? (!e[ar] || e.writableNeedDrain || r[Je] > 1) && (Ae(!t.paused, "cannot be paused while waiting for headers"), ie.destroy(e, new cm())) : A === To ? t.paused || ie.destroy(e, new lm()) : A === Hg && (Ae(r[Je] === 0 && r[Kn]), ie.destroy(e, new Yt("socket idle timeout")));
}
function OC() {
  const { [He]: t } = this;
  t && t.readMore();
}
function HC(t) {
  const { [xt]: e, [He]: A } = this;
  if (Ae(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), e[Jt] !== "h2" && t.code === "ECONNRESET" && A.statusCode && !A.shouldKeepAlive) {
    A.onMessageComplete();
    return;
  }
  this[pA] = t, ma(this[xt], t);
}
function ma(t, e) {
  if (t[Je] === 0 && e.code !== "UND_ERR_INFO" && e.code !== "UND_ERR_SOCKET") {
    Ae(t[At] === t[Le]);
    const A = t[ve].splice(t[Le]);
    for (let r = 0; r < A.length; r++) {
      const s = A[r];
      NA(t, s, e);
    }
    Ae(t[Cs] === 0);
  }
}
function PC() {
  const { [He]: t, [xt]: e } = this;
  if (e[Jt] !== "h2" && t.statusCode && !t.shouldKeepAlive) {
    t.onMessageComplete();
    return;
  }
  ie.destroy(this, new gn("other side closed", ie.getSocketInfo(this)));
}
function Pg() {
  const { [xt]: t, [He]: e } = this;
  t[Jt] === "h1" && e && (!this[pA] && e.statusCode && !e.shouldKeepAlive && e.onMessageComplete(), this[He].destroy(), this[He] = null);
  const A = this[pA] || new gn("closed", ie.getSocketInfo(this));
  if (t[Pe] = null, t.destroyed) {
    Ae(t[ds] === 0);
    const r = t[ve].splice(t[Le]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      NA(t, n, A);
    }
  } else if (t[Je] > 0 && A.code !== "UND_ERR_INFO") {
    const r = t[ve][t[Le]];
    t[ve][t[Le]++] = null, NA(t, r, A);
  }
  t[At] = t[Le], Ae(t[Je] === 0), t.emit("disconnect", t[fA], [t], A), rt(t);
}
async function VC(t) {
  Ae(!t[Gs]), Ae(!t[Pe]);
  let { host: e, hostname: A, protocol: r, port: s } = t[fA];
  if (A[0] === "[") {
    const n = A.indexOf("]");
    Ae(n !== -1);
    const i = A.substring(1, n);
    Ae(TC.isIP(i)), A = i;
  }
  t[Gs] = !0, FA.beforeConnect.hasSubscribers && FA.beforeConnect.publish({
    connectParams: {
      host: e,
      hostname: A,
      protocol: r,
      port: s,
      servername: t[yr],
      localAddress: t[Hn]
    },
    connector: t[On]
  });
  try {
    const n = await new Promise((a, o) => {
      t[On]({
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Hn]
      }, (g, c) => {
        g ? o(g) : a(c);
      });
    });
    if (t.destroyed) {
      ie.destroy(n.on("error", () => {
      }), new um());
      return;
    }
    if (t[Gs] = !1, Ae(n), n.alpnProtocol === "h2") {
      Hh || (Hh = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
        code: "UNDICI-H2"
      }));
      const a = zo.connect(t[fA], {
        createConnection: () => n,
        peerMaxConcurrentStreams: t[$o].maxConcurrentStreams
      });
      t[Jt] = "h2", a[xt] = t, a[Pe] = n, a.on("error", vm), a.on("frameError", Lm), a.on("end", Mm), a.on("goaway", Gm), a.on("close", Pg), a.unref(), t[tt] = a, n[tt] = a;
    } else
      kc || (kc = await Og, Og = null), n[_n] = !1, n[ar] = !1, n[JA] = !1, n[ln] = !1, n[He] = new _m(t, n, kc);
    n[xC] = 0, n[Ai] = t[Ai], n[xt] = t, n[pA] = null, n.on("error", HC).on("readable", OC).on("end", PC).on("close", Pg), t[Pe] = n, FA.connected.hasSubscribers && FA.connected.publish({
      connectParams: {
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Hn]
      },
      connector: t[On],
      socket: n
    }), t.emit("connect", t[fA], [t]);
  } catch (n) {
    if (t.destroyed)
      return;
    if (t[Gs] = !1, FA.connectError.hasSubscribers && FA.connectError.publish({
      connectParams: {
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[yr],
        localAddress: t[Hn]
      },
      connector: t[On],
      error: n
    }), n.code === "ERR_TLS_CERT_ALTNAME_INVALID")
      for (Ae(t[Je] === 0); t[ds] > 0 && t[ve][t[At]].servername === t[yr]; ) {
        const i = t[ve][t[At]++];
        NA(t, i, n);
      }
    else
      ma(t, n);
    t.emit("connectionError", t[fA], [t], n);
  }
  rt(t);
}
function Ph(t) {
  t[Lr] = 0, t.emit("drain", t[fA], [t]);
}
function rt(t, e) {
  t[ts] !== 2 && (t[ts] = 2, Hm(t, e), t[ts] = 0, t[Le] > 256 && (t[ve].splice(0, t[Le]), t[At] -= t[Le], t[Le] = 0));
}
function Hm(t, e) {
  for (; ; ) {
    if (t.destroyed) {
      Ae(t[ds] === 0);
      return;
    }
    if (t[Rr] && !t[Cs]) {
      t[Rr](), t[Rr] = null;
      return;
    }
    const A = t[Pe];
    if (A && !A.destroyed && A.alpnProtocol !== "h2") {
      if (t[Cs] === 0 ? !A[_n] && A.unref && (A.unref(), A[_n] = !0) : A[_n] && A.ref && (A.ref(), A[_n] = !1), t[Cs] === 0)
        A[He].timeoutType !== Hg && A[He].setTimeout(t[Kn], Hg);
      else if (t[Je] > 0 && A[He].statusCode < 200 && A[He].timeoutType !== hn) {
        const s = t[ve][t[Le]], n = s.headersTimeout != null ? s.headersTimeout : t[GC];
        A[He].setTimeout(n, hn);
      }
    }
    if (t[Jg])
      t[Lr] = 2;
    else if (t[Lr] === 2) {
      e ? (t[Lr] = 1, process.nextTick(Ph, t)) : Ph(t);
      continue;
    }
    if (t[ds] === 0 || t[Je] >= (t[Mr] || 1))
      return;
    const r = t[ve][t[At]];
    if (t[fA].protocol === "https:" && t[yr] !== r.servername) {
      if (t[Je] > 0)
        return;
      if (t[yr] = r.servername, A && A.servername !== r.servername) {
        ie.destroy(A, new Yt("servername changed"));
        return;
      }
    }
    if (t[Gs])
      return;
    if (!A && !t[tt]) {
      VC(t);
      return;
    }
    if (A.destroyed || A[ar] || A[JA] || A[ln] || t[Je] > 0 && !r.idempotent || t[Je] > 0 && (r.upgrade || r.method === "CONNECT") || t[Je] > 0 && ie.bodyLength(r.body) !== 0 && (ie.isStream(r.body) || ie.isAsyncIterable(r.body)))
      return;
    !r.aborted && Pm(t, r) ? t[At]++ : t[ve].splice(t[At], 1);
  }
}
function WC(t) {
  return t !== "GET" && t !== "HEAD" && t !== "OPTIONS" && t !== "TRACE" && t !== "CONNECT";
}
function Pm(t, e) {
  if (t[Jt] === "h2") {
    Vm(t, t[tt], e);
    return;
  }
  const { body: A, method: r, path: s, host: n, upgrade: i, headers: a, blocking: o, reset: g } = e, c = r === "PUT" || r === "POST" || r === "PATCH";
  A && typeof A.read == "function" && A.read(0);
  const E = ie.bodyLength(A);
  let h = E;
  if (h === null && (h = e.contentLength), h === 0 && !c && (h = null), WC(r) && h > 0 && e.contentLength !== null && e.contentLength !== h) {
    if (t[ei])
      return NA(t, e, new or()), !1;
    process.emitWarning(new or());
  }
  const Q = t[Pe];
  try {
    e.onConnect((u) => {
      e.aborted || e.completed || (NA(t, e, u || new Fl()), ie.destroy(Q, new Yt("aborted")));
    });
  } catch (u) {
    NA(t, e, u);
  }
  if (e.aborted)
    return !1;
  r === "HEAD" && (Q[JA] = !0), (i || r === "CONNECT") && (Q[JA] = !0), g != null && (Q[JA] = g), t[Ai] && Q[xC]++ >= t[Ai] && (Q[JA] = !0), o && (Q[ln] = !0);
  let B = `${r} ${s} HTTP/1.1\r
`;
  return typeof n == "string" ? B += `host: ${n}\r
` : B += t[vC], i ? B += `connection: upgrade\r
upgrade: ${i}\r
` : t[Mr] && !Q[JA] ? B += `connection: keep-alive\r
` : B += `connection: close\r
`, a && (B += a), FA.sendHeaders.hasSubscribers && FA.sendHeaders.publish({ request: e, headers: B, socket: Q }), !A || E === 0 ? (h === 0 ? Q.write(`${B}content-length: 0\r
\r
`, "latin1") : (Ae(h === null, "no body must not have content length"), Q.write(`${B}\r
`, "latin1")), e.onRequestSent()) : ie.isBuffer(A) ? (Ae(h === A.byteLength, "buffer body must have content length"), Q.cork(), Q.write(`${B}content-length: ${h}\r
\r
`, "latin1"), Q.write(A), Q.uncork(), e.onBodySent(A), e.onRequestSent(), c || (Q[JA] = !0)) : ie.isBlobLike(A) ? typeof A.stream == "function" ? Xo({ body: A.stream(), client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : jC({ body: A, client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : ie.isStream(A) ? qC({ body: A, client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : ie.isIterable(A) ? Xo({ body: A, client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : Ae(!1), !0;
}
function Vm(t, e, A) {
  const { body: r, method: s, path: n, host: i, upgrade: a, expectContinue: o, signal: g, headers: c } = A;
  let E;
  if (typeof c == "string" ? E = xg[ym](c.trim()) : E = c, a)
    return NA(t, A, new Error("Upgrade not supported for H2")), !1;
  try {
    A.onConnect((d) => {
      A.aborted || A.completed || NA(t, A, d || new Fl());
    });
  } catch (d) {
    NA(t, A, d);
  }
  if (A.aborted)
    return !1;
  let h;
  const Q = t[$o];
  if (E[Dm] = i || t[_C], E[bm] = s, s === "CONNECT")
    return e.ref(), h = e.request(E, { endStream: !1, signal: g }), h.id && !h.pending ? (A.onUpgrade(null, null, h), ++Q.openStreams) : h.once("ready", () => {
      A.onUpgrade(null, null, h), ++Q.openStreams;
    }), h.once("close", () => {
      Q.openStreams -= 1, Q.openStreams === 0 && e.unref();
    }), !0;
  E[km] = n, E[Sm] = "https";
  const B = s === "PUT" || s === "POST" || s === "PATCH";
  r && typeof r.read == "function" && r.read(0);
  let u = ie.bodyLength(r);
  if (u == null && (u = A.contentLength), (u === 0 || !B) && (u = null), WC(s) && u > 0 && A.contentLength != null && A.contentLength !== u) {
    if (t[ei])
      return NA(t, A, new or()), !1;
    process.emitWarning(new or());
  }
  u != null && (Ae(r, "no body must not have content length"), E[Fm] = `${u}`), e.ref();
  const I = s === "GET" || s === "HEAD";
  return o ? (E[Nm] = "100-continue", h = e.request(E, { endStream: I, signal: g }), h.once("continue", C)) : (h = e.request(E, {
    endStream: I,
    signal: g
  }), C()), ++Q.openStreams, h.once("response", (d) => {
    const { [Um]: f, ...w } = d;
    A.onHeaders(Number(f), w, h.resume.bind(h), "") === !1 && h.pause();
  }), h.once("end", () => {
    A.onComplete([]);
  }), h.on("data", (d) => {
    A.onData(d) === !1 && h.pause();
  }), h.once("close", () => {
    Q.openStreams -= 1, Q.openStreams === 0 && e.unref();
  }), h.once("error", function(d) {
    t[tt] && !t[tt].destroyed && !this.closed && !this.destroyed && (Q.streams -= 1, ie.destroy(h, d));
  }), h.once("frameError", (d, f) => {
    const w = new Yt(`HTTP/2: "frameError" received - type ${d}, code ${f}`);
    NA(t, A, w), t[tt] && !t[tt].destroyed && !this.closed && !this.destroyed && (Q.streams -= 1, ie.destroy(h, w));
  }), !0;
  function C() {
    r ? ie.isBuffer(r) ? (Ae(u === r.byteLength, "buffer body must have content length"), h.cork(), h.write(r), h.uncork(), h.end(), A.onBodySent(r), A.onRequestSent()) : ie.isBlobLike(r) ? typeof r.stream == "function" ? Xo({
      client: t,
      request: A,
      contentLength: u,
      h2stream: h,
      expectsPayload: B,
      body: r.stream(),
      socket: t[Pe],
      header: ""
    }) : jC({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: B,
      h2stream: h,
      header: "",
      socket: t[Pe]
    }) : ie.isStream(r) ? qC({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: B,
      socket: t[Pe],
      h2stream: h,
      header: ""
    }) : ie.isIterable(r) ? Xo({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: B,
      header: "",
      h2stream: h,
      socket: t[Pe]
    }) : Ae(!1) : A.onRequestSent();
  }
}
function qC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: a }) {
  if (Ae(n !== 0 || A[Je] === 0, "stream body cannot be pipelined"), A[Jt] === "h2") {
    let u = function(I) {
      r.onBodySent(I);
    };
    const B = im(
      e,
      t,
      (I) => {
        I ? (ie.destroy(e, I), ie.destroy(t, I)) : r.onRequestSent();
      }
    );
    B.on("data", u), B.once("end", () => {
      B.removeListener("data", u), ie.destroy(B);
    });
    return;
  }
  let o = !1;
  const g = new ZC({ socket: s, request: r, contentLength: n, client: A, expectsPayload: a, header: i }), c = function(B) {
    if (!o)
      try {
        !g.write(B) && this.pause && this.pause();
      } catch (u) {
        ie.destroy(this, u);
      }
  }, E = function() {
    o || e.resume && e.resume();
  }, h = function() {
    if (o)
      return;
    const B = new Fl();
    queueMicrotask(() => Q(B));
  }, Q = function(B) {
    if (!o) {
      if (o = !0, Ae(s.destroyed || s[ar] && A[Je] <= 1), s.off("drain", E).off("error", Q), e.removeListener("data", c).removeListener("end", Q).removeListener("error", Q).removeListener("close", h), !B)
        try {
          g.end();
        } catch (u) {
          B = u;
        }
      g.destroy(B), B && (B.code !== "UND_ERR_INFO" || B.message !== "reset") ? ie.destroy(e, B) : ie.destroy(e);
    }
  };
  e.on("data", c).on("end", Q).on("error", Q).on("close", h), e.resume && e.resume(), s.on("drain", E).on("error", Q);
}
async function jC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: a }) {
  Ae(n === e.size, "blob body must have content length");
  const o = A[Jt] === "h2";
  try {
    if (n != null && n !== e.size)
      throw new or();
    const g = Buffer.from(await e.arrayBuffer());
    o ? (t.cork(), t.write(g), t.uncork()) : (s.cork(), s.write(`${i}content-length: ${n}\r
\r
`, "latin1"), s.write(g), s.uncork()), r.onBodySent(g), r.onRequestSent(), a || (s[JA] = !0), rt(A);
  } catch (g) {
    ie.destroy(o ? t : s, g);
  }
}
async function Xo({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: a }) {
  Ae(n !== 0 || A[Je] === 0, "iterator body cannot be pipelined");
  let o = null;
  function g() {
    if (o) {
      const h = o;
      o = null, h();
    }
  }
  const c = () => new Promise((h, Q) => {
    Ae(o === null), s[pA] ? Q(s[pA]) : o = h;
  });
  if (A[Jt] === "h2") {
    t.on("close", g).on("drain", g);
    try {
      for await (const h of e) {
        if (s[pA])
          throw s[pA];
        const Q = t.write(h);
        r.onBodySent(h), Q || await c();
      }
    } catch (h) {
      t.destroy(h);
    } finally {
      r.onRequestSent(), t.end(), t.off("close", g).off("drain", g);
    }
    return;
  }
  s.on("close", g).on("drain", g);
  const E = new ZC({ socket: s, request: r, contentLength: n, client: A, expectsPayload: a, header: i });
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
class ZC {
  constructor({ socket: e, request: A, contentLength: r, client: s, expectsPayload: n, header: i }) {
    this.socket = e, this.request = A, this.contentLength = r, this.client = s, this.bytesWritten = 0, this.expectsPayload = n, this.header = i, e[ar] = !0;
  }
  write(e) {
    const { socket: A, request: r, contentLength: s, client: n, bytesWritten: i, expectsPayload: a, header: o } = this;
    if (A[pA])
      throw A[pA];
    if (A.destroyed)
      return !1;
    const g = Buffer.byteLength(e);
    if (!g)
      return !0;
    if (s !== null && i + g > s) {
      if (n[ei])
        throw new or();
      process.emitWarning(new or());
    }
    A.cork(), i === 0 && (a || (A[JA] = !0), s === null ? A.write(`${o}transfer-encoding: chunked\r
`, "latin1") : A.write(`${o}content-length: ${s}\r
\r
`, "latin1")), s === null && A.write(`\r
${g.toString(16)}\r
`, "latin1"), this.bytesWritten += g;
    const c = A.write(e);
    return A.uncork(), r.onBodySent(e), c || A[He].timeout && A[He].timeoutType === hn && A[He].timeout.refresh && A[He].timeout.refresh(), c;
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
        if (r[ei])
          throw new or();
        process.emitWarning(new or());
      }
      e[He].timeout && e[He].timeoutType === hn && e[He].timeout.refresh && e[He].timeout.refresh(), rt(r);
    }
  }
  destroy(e) {
    const { socket: A, client: r } = this;
    A[ar] = !1, e && (Ae(r[Je] <= 1, "pipeline should only contain this request"), ie.destroy(A, e));
  }
}
function NA(t, e, A) {
  try {
    e.onError(A), Ae(e.aborted);
  } catch (r) {
    t.emit("error", r);
  }
}
var wa = Tm;
const $C = 2048, Sc = $C - 1;
class Vh {
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array($C), this.next = null;
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
var Wm = class {
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
const { kFree: qm, kConnected: jm, kPending: Zm, kQueued: $m, kRunning: zm, kSize: Xm } = Ye, Wr = Symbol("pool");
let Km = class {
  constructor(e) {
    this[Wr] = e;
  }
  get connected() {
    return this[Wr][jm];
  }
  get free() {
    return this[Wr][qm];
  }
  get pending() {
    return this[Wr][Zm];
  }
  get queued() {
    return this[Wr][$m];
  }
  get running() {
    return this[Wr][zm];
  }
  get size() {
    return this[Wr][Xm];
  }
};
var ew = Km;
const Aw = fa, tw = Wm, { kConnected: Fc, kSize: Wh, kRunning: qh, kPending: jh, kQueued: kn, kBusy: rw, kFree: sw, kUrl: nw, kClose: iw, kDestroy: ow, kDispatch: aw } = Ye, cw = ew, HA = Symbol("clients"), LA = Symbol("needDrain"), Sn = Symbol("queue"), Nc = Symbol("closed resolve"), Uc = Symbol("onDrain"), Zh = Symbol("onConnect"), $h = Symbol("onDisconnect"), zh = Symbol("onConnectionError"), Vg = Symbol("get dispatcher"), zC = Symbol("add client"), XC = Symbol("remove client"), Xh = Symbol("stats");
let gw = class extends Aw {
  constructor() {
    super(), this[Sn] = new tw(), this[HA] = [], this[kn] = 0;
    const e = this;
    this[Uc] = function(r, s) {
      const n = e[Sn];
      let i = !1;
      for (; !i; ) {
        const a = n.shift();
        if (!a)
          break;
        e[kn]--, i = !this.dispatch(a.opts, a.handler);
      }
      this[LA] = i, !this[LA] && e[LA] && (e[LA] = !1, e.emit("drain", r, [e, ...s])), e[Nc] && n.isEmpty() && Promise.all(e[HA].map((a) => a.close())).then(e[Nc]);
    }, this[Zh] = (A, r) => {
      e.emit("connect", A, [e, ...r]);
    }, this[$h] = (A, r, s) => {
      e.emit("disconnect", A, [e, ...r], s);
    }, this[zh] = (A, r, s) => {
      e.emit("connectionError", A, [e, ...r], s);
    }, this[Xh] = new cw(this);
  }
  get [rw]() {
    return this[LA];
  }
  get [Fc]() {
    return this[HA].filter((e) => e[Fc]).length;
  }
  get [sw]() {
    return this[HA].filter((e) => e[Fc] && !e[LA]).length;
  }
  get [jh]() {
    let e = this[kn];
    for (const { [jh]: A } of this[HA])
      e += A;
    return e;
  }
  get [qh]() {
    let e = 0;
    for (const { [qh]: A } of this[HA])
      e += A;
    return e;
  }
  get [Wh]() {
    let e = this[kn];
    for (const { [Wh]: A } of this[HA])
      e += A;
    return e;
  }
  get stats() {
    return this[Xh];
  }
  async [iw]() {
    return this[Sn].isEmpty() ? Promise.all(this[HA].map((e) => e.close())) : new Promise((e) => {
      this[Nc] = e;
    });
  }
  async [ow](e) {
    for (; ; ) {
      const A = this[Sn].shift();
      if (!A)
        break;
      A.handler.onError(e);
    }
    return Promise.all(this[HA].map((A) => A.destroy(e)));
  }
  [aw](e, A) {
    const r = this[Vg]();
    return r ? r.dispatch(e, A) || (r[LA] = !0, this[LA] = !this[Vg]()) : (this[LA] = !0, this[Sn].push({ opts: e, handler: A }), this[kn]++), !this[LA];
  }
  [zC](e) {
    return e.on("drain", this[Uc]).on("connect", this[Zh]).on("disconnect", this[$h]).on("connectionError", this[zh]), this[HA].push(e), this[LA] && process.nextTick(() => {
      this[LA] && this[Uc](e[nw], [this, e]);
    }), this;
  }
  [XC](e) {
    e.close(() => {
      const A = this[HA].indexOf(e);
      A !== -1 && this[HA].splice(A, 1);
    }), this[LA] = this[HA].some((A) => !A[LA] && A.closed !== !0 && A.destroyed !== !0);
  }
};
var KC = {
  PoolBase: gw,
  kClients: HA,
  kNeedDrain: LA,
  kAddClient: zC,
  kRemoveClient: XC,
  kGetDispatcher: Vg
};
const {
  PoolBase: lw,
  kClients: Kh,
  kNeedDrain: hw,
  kAddClient: Ew,
  kGetDispatcher: uw
} = KC, Qw = wa, {
  InvalidArgumentError: Tc
} = ke, vc = de, { kUrl: eE, kInterceptors: Cw } = Ye, Bw = pa, Lc = Symbol("options"), Mc = Symbol("connections"), AE = Symbol("factory");
function Iw(t, e) {
  return new Qw(t, e);
}
let dw = class extends lw {
  constructor(e, {
    connections: A,
    factory: r = Iw,
    connect: s,
    connectTimeout: n,
    tls: i,
    maxCachedSessions: a,
    socketPath: o,
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
    typeof s != "function" && (s = Bw({
      ...i,
      maxCachedSessions: a,
      allowH2: E,
      socketPath: o,
      timeout: n,
      ...vc.nodeHasAutoSelectFamily && g ? { autoSelectFamily: g, autoSelectFamilyAttemptTimeout: c } : void 0,
      ...s
    })), this[Cw] = h.interceptors && h.interceptors.Pool && Array.isArray(h.interceptors.Pool) ? h.interceptors.Pool : [], this[Mc] = A || null, this[eE] = vc.parseOrigin(e), this[Lc] = { ...vc.deepClone(h), connect: s, allowH2: E }, this[Lc].interceptors = h.interceptors ? { ...h.interceptors } : void 0, this[AE] = r;
  }
  [uw]() {
    let e = this[Kh].find((A) => !A[hw]);
    return e || ((!this[Mc] || this[Kh].length < this[Mc]) && (e = this[AE](this[eE], this[Lc]), this[Ew](e)), e);
  }
};
var _i = dw;
const {
  BalancedPoolMissingUpstreamError: fw,
  InvalidArgumentError: pw
} = ke, {
  PoolBase: mw,
  kClients: TA,
  kNeedDrain: Fn,
  kAddClient: ww,
  kRemoveClient: yw,
  kGetDispatcher: Rw
} = KC, Dw = _i, { kUrl: Gc, kInterceptors: bw } = Ye, { parseOrigin: tE } = de, rE = Symbol("factory"), Ao = Symbol("options"), sE = Symbol("kGreatestCommonDivisor"), qr = Symbol("kCurrentWeight"), jr = Symbol("kIndex"), st = Symbol("kWeight"), to = Symbol("kMaxWeightPerServer"), ro = Symbol("kErrorPenalty");
function eB(t, e) {
  return e === 0 ? t : eB(e, t % e);
}
function kw(t, e) {
  return new Dw(t, e);
}
let Sw = class extends mw {
  constructor(e = [], { factory: A = kw, ...r } = {}) {
    if (super(), this[Ao] = r, this[jr] = -1, this[qr] = 0, this[to] = this[Ao].maxWeightPerServer || 100, this[ro] = this[Ao].errorPenalty || 15, Array.isArray(e) || (e = [e]), typeof A != "function")
      throw new pw("factory must be a function.");
    this[bw] = r.interceptors && r.interceptors.BalancedPool && Array.isArray(r.interceptors.BalancedPool) ? r.interceptors.BalancedPool : [], this[rE] = A;
    for (const s of e)
      this.addUpstream(s);
    this._updateBalancedPoolStats();
  }
  addUpstream(e) {
    const A = tE(e).origin;
    if (this[TA].find((s) => s[Gc].origin === A && s.closed !== !0 && s.destroyed !== !0))
      return this;
    const r = this[rE](A, Object.assign({}, this[Ao]));
    this[ww](r), r.on("connect", () => {
      r[st] = Math.min(this[to], r[st] + this[ro]);
    }), r.on("connectionError", () => {
      r[st] = Math.max(1, r[st] - this[ro]), this._updateBalancedPoolStats();
    }), r.on("disconnect", (...s) => {
      const n = s[2];
      n && n.code === "UND_ERR_SOCKET" && (r[st] = Math.max(1, r[st] - this[ro]), this._updateBalancedPoolStats());
    });
    for (const s of this[TA])
      s[st] = this[to];
    return this._updateBalancedPoolStats(), this;
  }
  _updateBalancedPoolStats() {
    this[sE] = this[TA].map((e) => e[st]).reduce(eB, 0);
  }
  removeUpstream(e) {
    const A = tE(e).origin, r = this[TA].find((s) => s[Gc].origin === A && s.closed !== !0 && s.destroyed !== !0);
    return r && this[yw](r), this;
  }
  get upstreams() {
    return this[TA].filter((e) => e.closed !== !0 && e.destroyed !== !0).map((e) => e[Gc].origin);
  }
  [Rw]() {
    if (this[TA].length === 0)
      throw new fw();
    if (!this[TA].find((n) => !n[Fn] && n.closed !== !0 && n.destroyed !== !0) || this[TA].map((n) => n[Fn]).reduce((n, i) => n && i, !0))
      return;
    let r = 0, s = this[TA].findIndex((n) => !n[Fn]);
    for (; r++ < this[TA].length; ) {
      this[jr] = (this[jr] + 1) % this[TA].length;
      const n = this[TA][this[jr]];
      if (n[st] > this[TA][s][st] && !n[Fn] && (s = this[jr]), this[jr] === 0 && (this[qr] = this[qr] - this[sE], this[qr] <= 0 && (this[qr] = this[to])), n[st] >= this[qr] && !n[Fn])
        return n;
    }
    return this[qr] = this[TA][s][st], this[jr] = s, this[TA][s];
  }
};
var Fw = Sw;
const { kConnected: AB, kSize: tB } = Ye;
class nE {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value[AB] === 0 && this.value[tB] === 0 ? void 0 : this.value;
  }
}
class iE {
  constructor(e) {
    this.finalizer = e;
  }
  register(e, A) {
    e.on && e.on("disconnect", () => {
      e[AB] === 0 && e[tB] === 0 && this.finalizer(A);
    });
  }
}
var rB = function() {
  return process.env.NODE_V8_COVERAGE ? {
    WeakRef: nE,
    FinalizationRegistry: iE
  } : {
    WeakRef: le.WeakRef || nE,
    FinalizationRegistry: le.FinalizationRegistry || iE
  };
};
const { InvalidArgumentError: so } = ke, { kClients: Qr, kRunning: oE, kClose: Nw, kDestroy: Uw, kDispatch: Tw, kInterceptors: vw } = Ye, Lw = fa, Mw = _i, Gw = wa, Yw = de, xw = Sl, { WeakRef: Jw, FinalizationRegistry: _w } = rB(), aE = Symbol("onConnect"), cE = Symbol("onDisconnect"), gE = Symbol("onConnectionError"), Ow = Symbol("maxRedirections"), lE = Symbol("onDrain"), hE = Symbol("factory"), EE = Symbol("finalizer"), Yc = Symbol("options");
function Hw(t, e) {
  return e && e.connections === 1 ? new Gw(t, e) : new Mw(t, e);
}
let Pw = class extends Lw {
  constructor({ factory: e = Hw, maxRedirections: A = 0, connect: r, ...s } = {}) {
    if (super(), typeof e != "function")
      throw new so("factory must be a function.");
    if (r != null && typeof r != "function" && typeof r != "object")
      throw new so("connect must be a function or an object");
    if (!Number.isInteger(A) || A < 0)
      throw new so("maxRedirections must be a positive number");
    r && typeof r != "function" && (r = { ...r }), this[vw] = s.interceptors && s.interceptors.Agent && Array.isArray(s.interceptors.Agent) ? s.interceptors.Agent : [xw({ maxRedirections: A })], this[Yc] = { ...Yw.deepClone(s), connect: r }, this[Yc].interceptors = s.interceptors ? { ...s.interceptors } : void 0, this[Ow] = A, this[hE] = e, this[Qr] = /* @__PURE__ */ new Map(), this[EE] = new _w(
      /* istanbul ignore next: gc is undeterministic */
      (i) => {
        const a = this[Qr].get(i);
        a !== void 0 && a.deref() === void 0 && this[Qr].delete(i);
      }
    );
    const n = this;
    this[lE] = (i, a) => {
      n.emit("drain", i, [n, ...a]);
    }, this[aE] = (i, a) => {
      n.emit("connect", i, [n, ...a]);
    }, this[cE] = (i, a, o) => {
      n.emit("disconnect", i, [n, ...a], o);
    }, this[gE] = (i, a, o) => {
      n.emit("connectionError", i, [n, ...a], o);
    };
  }
  get [oE]() {
    let e = 0;
    for (const A of this[Qr].values()) {
      const r = A.deref();
      r && (e += r[oE]);
    }
    return e;
  }
  [Tw](e, A) {
    let r;
    if (e.origin && (typeof e.origin == "string" || e.origin instanceof URL))
      r = String(e.origin);
    else
      throw new so("opts.origin must be a non-empty string or URL.");
    const s = this[Qr].get(r);
    let n = s ? s.deref() : null;
    return n || (n = this[hE](e.origin, this[Yc]).on("drain", this[lE]).on("connect", this[aE]).on("disconnect", this[cE]).on("connectionError", this[gE]), this[Qr].set(r, new Jw(n)), this[EE].register(n, r)), n.dispatch(e, A);
  }
  async [Nw]() {
    const e = [];
    for (const A of this[Qr].values()) {
      const r = A.deref();
      r && e.push(r.close());
    }
    await Promise.all(e);
  }
  async [Uw](e) {
    const A = [];
    for (const r of this[Qr].values()) {
      const s = r.deref();
      s && A.push(s.destroy(e));
    }
    await Promise.all(A);
  }
};
var ya = Pw, Bn = {};
const sB = AA, { Readable: Vw } = Ot, { RequestAbortedError: nB, NotSupportedError: Ww, InvalidArgumentError: qw } = ke, vo = de, { ReadableStreamFrom: jw, toUSVString: Zw } = de;
let xc;
const et = Symbol("kConsume"), no = Symbol("kReading"), mr = Symbol("kBody"), uE = Symbol("abort"), iB = Symbol("kContentType"), QE = () => {
};
var $w = class extends Vw {
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
    }), this._readableState.dataEmitted = !1, this[uE] = A, this[et] = null, this[mr] = null, this[iB] = r, this[no] = !1;
  }
  destroy(e) {
    return this.destroyed ? this : (!e && !this._readableState.endEmitted && (e = new nB()), e && this[uE](), super.destroy(e));
  }
  emit(e, ...A) {
    return e === "data" ? this._readableState.dataEmitted = !0 : e === "error" && (this._readableState.errorEmitted = !0), super.emit(e, ...A);
  }
  on(e, ...A) {
    return (e === "data" || e === "readable") && (this[no] = !0), super.on(e, ...A);
  }
  addListener(e, ...A) {
    return this.on(e, ...A);
  }
  off(e, ...A) {
    const r = super.off(e, ...A);
    return (e === "data" || e === "readable") && (this[no] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r;
  }
  removeListener(e, ...A) {
    return this.off(e, ...A);
  }
  push(e) {
    return this[et] && e !== null && this.readableLength === 0 ? (oB(this[et], e), this[no] ? super.push(e) : !0) : super.push(e);
  }
  // https://fetch.spec.whatwg.org/#dom-body-text
  async text() {
    return io(this, "text");
  }
  // https://fetch.spec.whatwg.org/#dom-body-json
  async json() {
    return io(this, "json");
  }
  // https://fetch.spec.whatwg.org/#dom-body-blob
  async blob() {
    return io(this, "blob");
  }
  // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
  async arrayBuffer() {
    return io(this, "arrayBuffer");
  }
  // https://fetch.spec.whatwg.org/#dom-body-formdata
  async formData() {
    throw new Ww();
  }
  // https://fetch.spec.whatwg.org/#dom-body-bodyused
  get bodyUsed() {
    return vo.isDisturbed(this);
  }
  // https://fetch.spec.whatwg.org/#dom-body-body
  get body() {
    return this[mr] || (this[mr] = jw(this), this[et] && (this[mr].getReader(), sB(this[mr].locked))), this[mr];
  }
  dump(e) {
    let A = e && Number.isFinite(e.limit) ? e.limit : 262144;
    const r = e && e.signal;
    if (r)
      try {
        if (typeof r != "object" || !("aborted" in r))
          throw new qw("signal must be an AbortSignal");
        vo.throwIfAborted(r);
      } catch (s) {
        return Promise.reject(s);
      }
    return this.closed ? Promise.resolve(null) : new Promise((s, n) => {
      const i = r ? vo.addAbortListener(r, () => {
        this.destroy();
      }) : QE;
      this.on("close", function() {
        i(), r != null && r.aborted ? n(r.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : s(null);
      }).on("error", QE).on("data", function(a) {
        A -= a.length, A <= 0 && this.destroy();
      }).resume();
    });
  }
};
function zw(t) {
  return t[mr] && t[mr].locked === !0 || t[et];
}
function Xw(t) {
  return vo.isDisturbed(t) || zw(t);
}
async function io(t, e) {
  if (Xw(t))
    throw new TypeError("unusable");
  return sB(!t[et]), new Promise((A, r) => {
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
      this[et].body !== null && Wg(this[et], new nB());
    }), process.nextTick(Kw, t[et]);
  });
}
function Kw(t) {
  if (t.body === null)
    return;
  const { _readableState: e } = t.stream;
  for (const A of e.buffer)
    oB(t, A);
  for (e.endEmitted ? CE(this[et]) : t.stream.on("end", function() {
    CE(this[et]);
  }), t.stream.resume(); t.stream.read() != null; )
    ;
}
function CE(t) {
  const { type: e, body: A, resolve: r, stream: s, length: n } = t;
  try {
    if (e === "text")
      r(Zw(Buffer.concat(A)));
    else if (e === "json")
      r(JSON.parse(Buffer.concat(A)));
    else if (e === "arrayBuffer") {
      const i = new Uint8Array(n);
      let a = 0;
      for (const o of A)
        i.set(o, a), a += o.byteLength;
      r(i.buffer);
    } else
      e === "blob" && (xc || (xc = require("buffer").Blob), r(new xc(A, { type: s[iB] })));
    Wg(t);
  } catch (i) {
    s.destroy(i);
  }
}
function oB(t, e) {
  t.length += e.length, t.body.push(e);
}
function Wg(t, e) {
  t.body !== null && (e ? t.reject(e) : t.resolve(), t.type = null, t.stream = null, t.resolve = null, t.reject = null, t.length = 0, t.body = null);
}
const ey = AA, {
  ResponseStatusCodeError: oo
} = ke, { toUSVString: BE } = de;
async function Ay({ callback: t, body: e, contentType: A, statusCode: r, statusMessage: s, headers: n }) {
  ey(e);
  let i = [], a = 0;
  for await (const o of e)
    if (i.push(o), a += o.length, a > 128 * 1024) {
      i = null;
      break;
    }
  if (r === 204 || !A || !i) {
    process.nextTick(t, new oo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
    return;
  }
  try {
    if (A.startsWith("application/json")) {
      const o = JSON.parse(BE(Buffer.concat(i)));
      process.nextTick(t, new oo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, o));
      return;
    }
    if (A.startsWith("text/")) {
      const o = BE(Buffer.concat(i));
      process.nextTick(t, new oo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, o));
      return;
    }
  } catch {
  }
  process.nextTick(t, new oo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
}
var aB = { getResolveErrorBodyCallback: Ay };
const { addAbortListener: ty } = de, { RequestAbortedError: ry } = ke, Js = Symbol("kListener"), Dr = Symbol("kSignal");
function IE(t) {
  t.abort ? t.abort() : t.onError(new ry());
}
function sy(t, e) {
  if (t[Dr] = null, t[Js] = null, !!e) {
    if (e.aborted) {
      IE(t);
      return;
    }
    t[Dr] = e, t[Js] = () => {
      IE(t);
    }, ty(t[Dr], t[Js]);
  }
}
function ny(t) {
  t[Dr] && ("removeEventListener" in t[Dr] ? t[Dr].removeEventListener("abort", t[Js]) : t[Dr].removeListener("abort", t[Js]), t[Dr] = null, t[Js] = null);
}
var Oi = {
  addSignal: sy,
  removeSignal: ny
};
const iy = $w, {
  InvalidArgumentError: Fs,
  RequestAbortedError: oy
} = ke, St = de, { getResolveErrorBodyCallback: ay } = aB, { AsyncResource: cy } = xi, { addSignal: gy, removeSignal: dE } = Oi;
class ly extends cy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Fs("invalid opts");
    const { signal: r, method: s, opaque: n, body: i, onInfo: a, responseHeaders: o, throwOnError: g, highWaterMark: c } = e;
    try {
      if (typeof A != "function")
        throw new Fs("invalid callback");
      if (c && (typeof c != "number" || c < 0))
        throw new Fs("invalid highWaterMark");
      if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
        throw new Fs("signal must be an EventEmitter or EventTarget");
      if (s === "CONNECT")
        throw new Fs("invalid method");
      if (a && typeof a != "function")
        throw new Fs("invalid onInfo callback");
      super("UNDICI_REQUEST");
    } catch (E) {
      throw St.isStream(i) && St.destroy(i.on("error", St.nop), E), E;
    }
    this.responseHeaders = o || null, this.opaque = n || null, this.callback = A, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = a || null, this.throwOnError = g, this.highWaterMark = c, St.isStream(i) && i.on("error", (E) => {
      this.onError(E);
    }), gy(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new oy();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { callback: n, opaque: i, abort: a, context: o, responseHeaders: g, highWaterMark: c } = this, E = g === "raw" ? St.parseRawHeaders(A) : St.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: E });
      return;
    }
    const Q = (g === "raw" ? St.parseHeaders(A) : E)["content-type"], B = new iy({ resume: r, abort: a, contentType: Q, highWaterMark: c });
    this.callback = null, this.res = B, n !== null && (this.throwOnError && e >= 400 ? this.runInAsyncScope(
      ay,
      null,
      { callback: n, body: B, contentType: Q, statusCode: e, statusMessage: s, headers: E }
    ) : this.runInAsyncScope(n, null, null, {
      statusCode: e,
      headers: E,
      trailers: this.trailers,
      opaque: i,
      body: B,
      context: o
    }));
  }
  onData(e) {
    const { res: A } = this;
    return A.push(e);
  }
  onComplete(e) {
    const { res: A } = this;
    dE(this), St.parseHeaders(e, this.trailers), A.push(null);
  }
  onError(e) {
    const { res: A, callback: r, body: s, opaque: n } = this;
    dE(this), r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: n });
    })), A && (this.res = null, queueMicrotask(() => {
      St.destroy(A, e);
    })), s && (this.body = null, St.destroy(s, e));
  }
}
function cB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      cB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    this.dispatch(t, new ly(t, e));
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
var hy = cB;
const { finished: Ey, PassThrough: uy } = Ot, {
  InvalidArgumentError: Ns,
  InvalidReturnValueError: Qy,
  RequestAbortedError: Cy
} = ke, Et = de, { getResolveErrorBodyCallback: By } = aB, { AsyncResource: Iy } = xi, { addSignal: dy, removeSignal: fE } = Oi;
class fy extends Iy {
  constructor(e, A, r) {
    if (!e || typeof e != "object")
      throw new Ns("invalid opts");
    const { signal: s, method: n, opaque: i, body: a, onInfo: o, responseHeaders: g, throwOnError: c } = e;
    try {
      if (typeof r != "function")
        throw new Ns("invalid callback");
      if (typeof A != "function")
        throw new Ns("invalid factory");
      if (s && typeof s.on != "function" && typeof s.addEventListener != "function")
        throw new Ns("signal must be an EventEmitter or EventTarget");
      if (n === "CONNECT")
        throw new Ns("invalid method");
      if (o && typeof o != "function")
        throw new Ns("invalid onInfo callback");
      super("UNDICI_STREAM");
    } catch (E) {
      throw Et.isStream(a) && Et.destroy(a.on("error", Et.nop), E), E;
    }
    this.responseHeaders = g || null, this.opaque = i || null, this.factory = A, this.callback = r, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a, this.onInfo = o || null, this.throwOnError = c || !1, Et.isStream(a) && a.on("error", (E) => {
      this.onError(E);
    }), dy(this, s);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Cy();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { factory: n, opaque: i, context: a, callback: o, responseHeaders: g } = this, c = g === "raw" ? Et.parseRawHeaders(A) : Et.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: c });
      return;
    }
    this.factory = null;
    let E;
    if (this.throwOnError && e >= 400) {
      const B = (g === "raw" ? Et.parseHeaders(A) : c)["content-type"];
      E = new uy(), this.callback = null, this.runInAsyncScope(
        By,
        null,
        { callback: o, body: E, contentType: B, statusCode: e, statusMessage: s, headers: c }
      );
    } else {
      if (n === null)
        return;
      if (E = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: c,
        opaque: i,
        context: a
      }), !E || typeof E.write != "function" || typeof E.end != "function" || typeof E.on != "function")
        throw new Qy("expected Writable");
      Ey(E, { readable: !1 }, (Q) => {
        const { callback: B, res: u, opaque: I, trailers: C, abort: d } = this;
        this.res = null, (Q || !u.readable) && Et.destroy(u, Q), this.callback = null, this.runInAsyncScope(B, null, Q || null, { opaque: I, trailers: C }), Q && d();
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
    fE(this), A && (this.trailers = Et.parseHeaders(e), A.end());
  }
  onError(e) {
    const { res: A, callback: r, opaque: s, body: n } = this;
    fE(this), this.factory = null, A ? (this.res = null, Et.destroy(A, e)) : r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: s });
    })), n && (this.body = null, Et.destroy(n, e));
  }
}
function gB(t, e, A) {
  if (A === void 0)
    return new Promise((r, s) => {
      gB.call(this, t, e, (n, i) => n ? s(n) : r(i));
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
var py = gB;
const {
  Readable: lB,
  Duplex: my,
  PassThrough: wy
} = Ot, {
  InvalidArgumentError: Nn,
  InvalidReturnValueError: yy,
  RequestAbortedError: Lo
} = ke, nt = de, { AsyncResource: Ry } = xi, { addSignal: Dy, removeSignal: by } = Oi, ky = AA, _s = Symbol("resume");
class Sy extends lB {
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
class Fy extends lB {
  constructor(e) {
    super({ autoDestroy: !0 }), this[_s] = e;
  }
  _read() {
    this[_s]();
  }
  _destroy(e, A) {
    !e && !this._readableState.endEmitted && (e = new Lo()), A(e);
  }
}
class Ny extends Ry {
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
    super("UNDICI_PIPELINE"), this.opaque = n || null, this.responseHeaders = a || null, this.handler = A, this.abort = null, this.context = null, this.onInfo = i || null, this.req = new Sy().on("error", nt.nop), this.ret = new my({
      readableObjectMode: e.objectMode,
      autoDestroy: !0,
      read: () => {
        const { body: o } = this;
        o && o.resume && o.resume();
      },
      write: (o, g, c) => {
        const { req: E } = this;
        E.push(o, g) || E._readableState.destroyed ? c() : E[_s] = c;
      },
      destroy: (o, g) => {
        const { body: c, req: E, res: h, ret: Q, abort: B } = this;
        !o && !Q._readableState.endEmitted && (o = new Lo()), B && o && B(), nt.destroy(c, o), nt.destroy(E, o), nt.destroy(h, o), by(this), g(o);
      }
    }).on("prefinish", () => {
      const { req: o } = this;
      o.push(null);
    }), this.res = null, Dy(this, r);
  }
  onConnect(e, A) {
    const { ret: r, res: s } = this;
    if (ky(!s, "pipeline cannot be retried"), r.destroyed)
      throw new Lo();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r) {
    const { opaque: s, handler: n, context: i } = this;
    if (e < 200) {
      if (this.onInfo) {
        const o = this.responseHeaders === "raw" ? nt.parseRawHeaders(A) : nt.parseHeaders(A);
        this.onInfo({ statusCode: e, headers: o });
      }
      return;
    }
    this.res = new Fy(r);
    let a;
    try {
      this.handler = null;
      const o = this.responseHeaders === "raw" ? nt.parseRawHeaders(A) : nt.parseHeaders(A);
      a = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: o,
        opaque: s,
        body: this.res,
        context: i
      });
    } catch (o) {
      throw this.res.on("error", nt.nop), o;
    }
    if (!a || typeof a.on != "function")
      throw new yy("expected Readable");
    a.on("data", (o) => {
      const { ret: g, body: c } = this;
      !g.push(o) && c.pause && c.pause();
    }).on("error", (o) => {
      const { ret: g } = this;
      nt.destroy(g, o);
    }).on("end", () => {
      const { ret: o } = this;
      o.push(null);
    }).on("close", () => {
      const { ret: o } = this;
      o._readableState.ended || nt.destroy(o, new Lo());
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
const { InvalidArgumentError: Jc, RequestAbortedError: vy, SocketError: Ly } = ke, { AsyncResource: My } = xi, pE = de, { addSignal: Gy, removeSignal: mE } = Oi, Yy = AA;
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
      throw new vy();
    this.abort = e, this.context = null;
  }
  onHeaders() {
    throw new Ly("bad upgrade", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    Yy.strictEqual(e, 101), mE(this), this.callback = null;
    const a = this.responseHeaders === "raw" ? pE.parseRawHeaders(A) : pE.parseHeaders(A);
    this.runInAsyncScope(s, null, null, {
      headers: a,
      socket: r,
      opaque: n,
      context: i
    });
  }
  onError(e) {
    const { callback: A, opaque: r } = this;
    mE(this), A && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(A, null, e, { opaque: r });
    }));
  }
}
function hB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      hB.call(this, t, (s, n) => s ? r(s) : A(n));
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
var Jy = hB;
const { AsyncResource: _y } = xi, { InvalidArgumentError: _c, RequestAbortedError: Oy, SocketError: Hy } = ke, wE = de, { addSignal: Py, removeSignal: yE } = Oi;
class Vy extends _y {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new _c("invalid opts");
    if (typeof A != "function")
      throw new _c("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new _c("signal must be an EventEmitter or EventTarget");
    super("UNDICI_CONNECT"), this.opaque = s || null, this.responseHeaders = n || null, this.callback = A, this.abort = null, Py(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Oy();
    this.abort = e, this.context = A;
  }
  onHeaders() {
    throw new Hy("bad connect", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    yE(this), this.callback = null;
    let a = A;
    a != null && (a = this.responseHeaders === "raw" ? wE.parseRawHeaders(A) : wE.parseHeaders(A)), this.runInAsyncScope(s, null, null, {
      statusCode: e,
      headers: a,
      socket: r,
      opaque: n,
      context: i
    });
  }
  onError(e) {
    const { callback: A, opaque: r } = this;
    yE(this), A && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(A, null, e, { opaque: r });
    }));
  }
}
function EB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      EB.call(this, t, (s, n) => s ? r(s) : A(n));
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
var Wy = EB;
Bn.request = hy;
Bn.stream = py;
Bn.pipeline = Ty;
Bn.upgrade = Jy;
Bn.connect = Wy;
const { UndiciError: qy } = ke;
let jy = class uB extends qy {
  constructor(e) {
    super(e), Error.captureStackTrace(this, uB), this.name = "MockNotMatchedError", this.message = e || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
  }
};
var QB = {
  MockNotMatchedError: jy
}, Hi = {
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
const { MockNotMatchedError: rs } = QB, {
  kDispatches: ao,
  kMockAgent: Zy,
  kOriginalDispatch: $y,
  kOrigin: zy,
  kGetNetConnect: Xy
} = Hi, { buildURL: Ky, nop: e0 } = de, { STATUS_CODES: A0 } = un, {
  types: {
    isPromise: t0
  }
} = _t;
function cr(t, e) {
  return typeof t == "string" ? t === e : t instanceof RegExp ? t.test(e) : typeof t == "function" ? t(e) === !0 : !1;
}
function CB(t) {
  return Object.fromEntries(
    Object.entries(t).map(([e, A]) => [e.toLocaleLowerCase(), A])
  );
}
function BB(t, e) {
  if (Array.isArray(t)) {
    for (let A = 0; A < t.length; A += 2)
      if (t[A].toLocaleLowerCase() === e.toLocaleLowerCase())
        return t[A + 1];
    return;
  } else
    return typeof t.get == "function" ? t.get(e) : CB(t)[e.toLocaleLowerCase()];
}
function IB(t) {
  const e = t.slice(), A = [];
  for (let r = 0; r < e.length; r += 2)
    A.push([e[r], e[r + 1]]);
  return Object.fromEntries(A);
}
function dB(t, e) {
  if (typeof t.headers == "function")
    return Array.isArray(e) && (e = IB(e)), t.headers(e ? CB(e) : {});
  if (typeof t.headers > "u")
    return !0;
  if (typeof e != "object" || typeof t.headers != "object")
    return !1;
  for (const [A, r] of Object.entries(t.headers)) {
    const s = BB(e, A);
    if (!cr(r, s))
      return !1;
  }
  return !0;
}
function RE(t) {
  if (typeof t != "string")
    return t;
  const e = t.split("?");
  if (e.length !== 2)
    return t;
  const A = new URLSearchParams(e.pop());
  return A.sort(), [...e, A.toString()].join("?");
}
function r0(t, { path: e, method: A, body: r, headers: s }) {
  const n = cr(t.path, e), i = cr(t.method, A), a = typeof t.body < "u" ? cr(t.body, r) : !0, o = dB(t, s);
  return n && i && a && o;
}
function fB(t) {
  return Buffer.isBuffer(t) ? t : typeof t == "object" ? JSON.stringify(t) : t.toString();
}
function pB(t, e) {
  const A = e.query ? Ky(e.path, e.query) : e.path, r = typeof A == "string" ? RE(A) : A;
  let s = t.filter(({ consumed: n }) => !n).filter(({ path: n }) => cr(RE(n), r));
  if (s.length === 0)
    throw new rs(`Mock dispatch not matched for path '${r}'`);
  if (s = s.filter(({ method: n }) => cr(n, e.method)), s.length === 0)
    throw new rs(`Mock dispatch not matched for method '${e.method}'`);
  if (s = s.filter(({ body: n }) => typeof n < "u" ? cr(n, e.body) : !0), s.length === 0)
    throw new rs(`Mock dispatch not matched for body '${e.body}'`);
  if (s = s.filter((n) => dB(n, e.headers)), s.length === 0)
    throw new rs(`Mock dispatch not matched for headers '${typeof e.headers == "object" ? JSON.stringify(e.headers) : e.headers}'`);
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
function mB(t) {
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
function wB(t) {
  return A0[t] || "unknown";
}
async function n0(t) {
  const e = [];
  for await (const A of t)
    e.push(A);
  return Buffer.concat(e).toString("utf8");
}
function yB(t, e) {
  const A = mB(t), r = pB(this[ao], A);
  r.timesInvoked++, r.data.callback && (r.data = { ...r.data, ...r.data.callback(t) });
  const { data: { statusCode: s, data: n, headers: i, trailers: a, error: o }, delay: g, persist: c } = r, { timesInvoked: E, times: h } = r;
  if (r.consumed = !c && E >= h, r.pending = E < h, o !== null)
    return qg(this[ao], A), e.onError(o), !0;
  typeof g == "number" && g > 0 ? setTimeout(() => {
    Q(this[ao]);
  }, g) : Q(this[ao]);
  function Q(u, I = n) {
    const C = Array.isArray(t.headers) ? IB(t.headers) : t.headers, d = typeof I == "function" ? I({ ...t, headers: C }) : I;
    if (t0(d)) {
      d.then((y) => Q(u, y));
      return;
    }
    const f = fB(d), w = jg(i), m = jg(a);
    e.abort = e0, e.onHeaders(s, w, B, wB(s)), e.onData(Buffer.from(f)), e.onComplete(m), qg(u, A);
  }
  function B() {
  }
  return !0;
}
function i0() {
  const t = this[Zy], e = this[zy], A = this[$y];
  return function(s, n) {
    if (t.isMockActive)
      try {
        yB.call(this, s, n);
      } catch (i) {
        if (i instanceof rs) {
          const a = t[Xy]();
          if (a === !1)
            throw new rs(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
          if (RB(a, e))
            A.call(this, s, n);
          else
            throw new rs(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`);
        } else
          throw i;
      }
    else
      A.call(this, s, n);
  };
}
function RB(t, e) {
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
  getResponseData: fB,
  getMockDispatch: pB,
  addMockDispatch: s0,
  deleteMockDispatch: qg,
  buildKey: mB,
  generateKeyValues: jg,
  matchValue: cr,
  getResponse: n0,
  getStatusText: wB,
  mockDispatch: yB,
  buildMockDispatch: i0,
  checkNetConnect: RB,
  buildMockOptions: o0,
  getHeaderByName: BB
}, Da = {};
const { getResponseData: a0, buildKey: c0, addMockDispatch: Oc } = Ra, {
  kDispatches: co,
  kDispatchKey: go,
  kDefaultHeaders: Hc,
  kDefaultTrailers: Pc,
  kContentLength: Vc,
  kMockDispatch: lo
} = Hi, { InvalidArgumentError: Ct } = ke, { buildURL: g0 } = de;
class Mo {
  constructor(e) {
    this[lo] = e;
  }
  /**
   * Delay a reply by a set amount in ms.
   */
  delay(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Ct("waitInMs must be a valid integer > 0");
    return this[lo].delay = e, this;
  }
  /**
   * For a defined reply, never mark as consumed.
   */
  persist() {
    return this[lo].persist = !0, this;
  }
  /**
   * Allow one to define a reply for a set amount of matching requests.
   */
  times(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Ct("repeatTimes must be a valid integer > 0");
    return this[lo].times = e, this;
  }
}
let l0 = class {
  constructor(e, A) {
    if (typeof e != "object")
      throw new Ct("opts must be an object");
    if (typeof e.path > "u")
      throw new Ct("opts.path must be defined");
    if (typeof e.method > "u" && (e.method = "GET"), typeof e.path == "string")
      if (e.query)
        e.path = g0(e.path, e.query);
      else {
        const r = new URL(e.path, "data://");
        e.path = r.pathname + r.search;
      }
    typeof e.method == "string" && (e.method = e.method.toUpperCase()), this[go] = c0(e), this[co] = A, this[Hc] = {}, this[Pc] = {}, this[Vc] = !1;
  }
  createMockScopeDispatchData(e, A, r = {}) {
    const s = a0(A), n = this[Vc] ? { "content-length": s.length } : {}, i = { ...this[Hc], ...n, ...r.headers }, a = { ...this[Pc], ...r.trailers };
    return { statusCode: e, data: A, headers: i, trailers: a };
  }
  validateReplyParameters(e, A, r) {
    if (typeof e > "u")
      throw new Ct("statusCode must be defined");
    if (typeof A > "u")
      throw new Ct("data must be defined");
    if (typeof r != "object")
      throw new Ct("responseOptions must be an object");
  }
  /**
   * Mock an undici request with a defined reply.
   */
  reply(e) {
    if (typeof e == "function") {
      const a = (g) => {
        const c = e(g);
        if (typeof c != "object")
          throw new Ct("reply options callback must return an object");
        const { statusCode: E, data: h = "", responseOptions: Q = {} } = c;
        return this.validateReplyParameters(E, h, Q), {
          ...this.createMockScopeDispatchData(E, h, Q)
        };
      }, o = Oc(this[co], this[go], a);
      return new Mo(o);
    }
    const [A, r = "", s = {}] = [...arguments];
    this.validateReplyParameters(A, r, s);
    const n = this.createMockScopeDispatchData(A, r, s), i = Oc(this[co], this[go], n);
    return new Mo(i);
  }
  /**
   * Mock an undici request with a defined error.
   */
  replyWithError(e) {
    if (typeof e > "u")
      throw new Ct("error must be defined");
    const A = Oc(this[co], this[go], { error: e });
    return new Mo(A);
  }
  /**
   * Set default reply headers on the interceptor for subsequent replies
   */
  defaultReplyHeaders(e) {
    if (typeof e > "u")
      throw new Ct("headers must be defined");
    return this[Hc] = e, this;
  }
  /**
   * Set default reply trailers on the interceptor for subsequent replies
   */
  defaultReplyTrailers(e) {
    if (typeof e > "u")
      throw new Ct("trailers must be defined");
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
const { promisify: h0 } = _t, E0 = wa, { buildMockDispatch: u0 } = Ra, {
  kDispatches: DE,
  kMockAgent: bE,
  kClose: kE,
  kOriginalClose: SE,
  kOrigin: FE,
  kOriginalDispatch: Q0,
  kConnected: Wc
} = Hi, { MockInterceptor: C0 } = Da, NE = Ye, { InvalidArgumentError: B0 } = ke;
let I0 = class extends E0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new B0("Argument opts.agent must implement Agent");
    this[bE] = A.agent, this[FE] = e, this[DE] = [], this[Wc] = 1, this[Q0] = this.dispatch, this[SE] = this.close.bind(this), this.dispatch = u0.call(this), this.close = this[kE];
  }
  get [NE.kConnected]() {
    return this[Wc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new C0(e, this[DE]);
  }
  async [kE]() {
    await h0(this[SE])(), this[Wc] = 0, this[bE][NE.kClients].delete(this[FE]);
  }
};
var DB = I0;
const { promisify: d0 } = _t, f0 = _i, { buildMockDispatch: p0 } = Ra, {
  kDispatches: UE,
  kMockAgent: TE,
  kClose: vE,
  kOriginalClose: LE,
  kOrigin: ME,
  kOriginalDispatch: m0,
  kConnected: qc
} = Hi, { MockInterceptor: w0 } = Da, GE = Ye, { InvalidArgumentError: y0 } = ke;
let R0 = class extends f0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new y0("Argument opts.agent must implement Agent");
    this[TE] = A.agent, this[ME] = e, this[UE] = [], this[qc] = 1, this[m0] = this.dispatch, this[LE] = this.close.bind(this), this.dispatch = p0.call(this), this.close = this[vE];
  }
  get [GE.kConnected]() {
    return this[qc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new w0(e, this[UE]);
  }
  async [vE]() {
    await d0(this[LE])(), this[qc] = 0, this[TE][GE.kClients].delete(this[ME]);
  }
};
var bB = R0;
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
const { Transform: S0 } = Ot, { Console: F0 } = cd;
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
      ({ method: r, path: s, data: { statusCode: n }, persist: i, times: a, timesInvoked: o, origin: g }) => ({
        Method: r,
        Origin: g,
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
const { kClients: Zr } = Ye, U0 = ya, {
  kAgent: jc,
  kMockAgentSet: ho,
  kMockAgentGet: YE,
  kDispatches: Zc,
  kIsMockActive: Eo,
  kNetConnect: $r,
  kGetNetConnect: T0,
  kOptions: uo,
  kFactory: Qo
} = Hi, v0 = DB, L0 = bB, { matchValue: M0, buildMockOptions: G0 } = Ra, { InvalidArgumentError: xE, UndiciError: Y0 } = ke, x0 = bl, J0 = k0, _0 = N0;
class O0 {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}
let H0 = class extends x0 {
  constructor(e) {
    if (super(e), this[$r] = !0, this[Eo] = !0, e && e.agent && typeof e.agent.dispatch != "function")
      throw new xE("Argument opts.agent must implement Agent");
    const A = e && e.agent ? e.agent : new U0(e);
    this[jc] = A, this[Zr] = A[Zr], this[uo] = G0(e);
  }
  get(e) {
    let A = this[YE](e);
    return A || (A = this[Qo](e), this[ho](e, A)), A;
  }
  dispatch(e, A) {
    return this.get(e.origin), this[jc].dispatch(e, A);
  }
  async close() {
    await this[jc].close(), this[Zr].clear();
  }
  deactivate() {
    this[Eo] = !1;
  }
  activate() {
    this[Eo] = !0;
  }
  enableNetConnect(e) {
    if (typeof e == "string" || typeof e == "function" || e instanceof RegExp)
      Array.isArray(this[$r]) ? this[$r].push(e) : this[$r] = [e];
    else if (typeof e > "u")
      this[$r] = !0;
    else
      throw new xE("Unsupported matcher. Must be one of String|Function|RegExp.");
  }
  disableNetConnect() {
    this[$r] = !1;
  }
  // This is required to bypass issues caused by using global symbols - see:
  // https://github.com/nodejs/undici/issues/1447
  get isMockActive() {
    return this[Eo];
  }
  [ho](e, A) {
    this[Zr].set(e, new O0(A));
  }
  [Qo](e) {
    const A = Object.assign({ agent: this }, this[uo]);
    return this[uo] && this[uo].connections === 1 ? new v0(e, A) : new L0(e, A);
  }
  [YE](e) {
    const A = this[Zr].get(e);
    if (A)
      return A.deref();
    if (typeof e != "string") {
      const r = this[Qo]("http://localhost:9999");
      return this[ho](e, r), r;
    }
    for (const [r, s] of Array.from(this[Zr])) {
      const n = s.deref();
      if (n && typeof r != "string" && M0(r, e)) {
        const i = this[Qo](e);
        return this[ho](e, i), i[Zc] = n[Zc], i;
      }
    }
  }
  [T0]() {
    return this[$r];
  }
  pendingInterceptors() {
    const e = this[Zr];
    return Array.from(e.entries()).flatMap(([A, r]) => r.deref()[Zc].map((s) => ({ ...s, origin: A }))).filter(({ pending: A }) => A);
  }
  assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new _0() } = {}) {
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
const { kProxy: V0, kClose: W0, kDestroy: q0, kInterceptors: j0 } = Ye, { URL: JE } = gd, _E = ya, Z0 = _i, $0 = fa, { InvalidArgumentError: Xn, RequestAbortedError: z0 } = ke, OE = pa, Un = Symbol("proxy agent"), Co = Symbol("proxy client"), Bo = Symbol("proxy headers"), $c = Symbol("request tls settings"), X0 = Symbol("proxy tls settings"), HE = Symbol("connect endpoint function");
function K0(t) {
  return t === "https:" ? 443 : 80;
}
function eR(t) {
  if (typeof t == "string" && (t = { uri: t }), !t || !t.uri)
    throw new Xn("Proxy opts.uri is mandatory");
  return {
    uri: t.uri,
    protocol: t.protocol || "https"
  };
}
function AR(t, e) {
  return new Z0(t, e);
}
let tR = class extends $0 {
  constructor(e) {
    if (super(e), this[V0] = eR(e), this[Un] = new _E(e), this[j0] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], typeof e == "string" && (e = { uri: e }), !e || !e.uri)
      throw new Xn("Proxy opts.uri is mandatory");
    const { clientFactory: A = AR } = e;
    if (typeof A != "function")
      throw new Xn("Proxy opts.clientFactory must be a function.");
    if (this[$c] = e.requestTls, this[X0] = e.proxyTls, this[Bo] = e.headers || {}, e.auth && e.token)
      throw new Xn("opts.auth cannot be used in combination with opts.token");
    e.auth ? this[Bo]["proxy-authorization"] = `Basic ${e.auth}` : e.token && (this[Bo]["proxy-authorization"] = e.token);
    const r = new JE(e.uri), { origin: s, port: n, host: i } = r, a = OE({ ...e.proxyTls });
    this[HE] = OE({ ...e.requestTls }), this[Co] = A(r, { connect: a }), this[Un] = new _E({
      ...e,
      connect: async (o, g) => {
        let c = o.host;
        o.port || (c += `:${K0(o.protocol)}`);
        try {
          const { socket: E, statusCode: h } = await this[Co].connect({
            origin: s,
            port: n,
            path: c,
            signal: o.signal,
            headers: {
              ...this[Bo],
              host: i
            }
          });
          if (h !== 200 && (E.on("error", () => {
          }).destroy(), g(new z0("Proxy response !== 200 when HTTP Tunneling"))), o.protocol !== "https:") {
            g(null, E);
            return;
          }
          let Q;
          this[$c] ? Q = this[$c].servername : Q = o.servername, this[HE]({ ...o, servername: Q, httpSocket: E }, g);
        } catch (E) {
          g(E);
        }
      }
    });
  }
  dispatch(e, A) {
    const { host: r } = new JE(e.origin), s = rR(e.headers);
    return sR(s), this[Un].dispatch(
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
    await this[Un].close(), await this[Co].close();
  }
  async [q0]() {
    await this[Un].destroy(), await this[Co].destroy();
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
    throw new Xn("Proxy-Authorization should be sent in ProxyAgent constructor");
}
var nR = tR;
const zr = ld, { kRetryHandlerDefaultRetry: PE } = Ye, { RequestRetryError: Io } = ke, { isDisturbed: VE, parseHeaders: iR, parseRangeHeader: WE } = de;
function oR(t) {
  const e = Date.now();
  return new Date(t).getTime() - e;
}
let aR = class kB {
  constructor(e, A) {
    const { retryOptions: r, ...s } = e, {
      // Retry scoped
      retry: n,
      maxRetries: i,
      maxTimeout: a,
      minTimeout: o,
      timeoutFactor: g,
      // Response scoped
      methods: c,
      errorCodes: E,
      retryAfter: h,
      statusCodes: Q
    } = r ?? {};
    this.dispatch = A.dispatch, this.handler = A.handler, this.opts = s, this.abort = null, this.aborted = !1, this.retryOpts = {
      retry: n ?? kB[PE],
      retryAfter: h ?? !0,
      maxTimeout: a ?? 30 * 1e3,
      // 30s,
      timeout: o ?? 500,
      // .5s
      timeoutFactor: g ?? 2,
      maxRetries: i ?? 5,
      // What errors we should retry
      methods: c ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"],
      // Indicates which errors to retry
      statusCodes: Q ?? [500, 502, 503, 504, 429],
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
    return this.handler.onBodySent(e);
  }
  static [PE](e, { state: A, opts: r }, s) {
    const { statusCode: n, code: i, headers: a } = e, { method: o, retryOptions: g } = r, {
      maxRetries: c,
      timeout: E,
      maxTimeout: h,
      timeoutFactor: Q,
      statusCodes: B,
      errorCodes: u,
      methods: I
    } = g;
    let { counter: C, currentTimeout: d } = A;
    if (d = d != null && d > 0 ? d : E, i && i !== "UND_ERR_REQ_RETRY" && i !== "UND_ERR_SOCKET" && !u.includes(i)) {
      s(e);
      return;
    }
    if (Array.isArray(I) && !I.includes(o)) {
      s(e);
      return;
    }
    if (n != null && Array.isArray(B) && !B.includes(n)) {
      s(e);
      return;
    }
    if (C > c) {
      s(e);
      return;
    }
    let f = a != null && a["retry-after"];
    f && (f = Number(f), f = isNaN(f) ? oR(f) : f * 1e3);
    const w = f > 0 ? Math.min(f, h) : Math.min(d * Q ** C, h);
    A.currentTimeout = w, setTimeout(() => s(null), w);
  }
  onHeaders(e, A, r, s) {
    const n = iR(A);
    if (this.retryCount += 1, e >= 300)
      return this.abort(
        new Io("Request failed", e, {
          headers: n,
          count: this.retryCount
        })
      ), !1;
    if (this.resume != null) {
      if (this.resume = null, e !== 206)
        return !0;
      const a = WE(n["content-range"]);
      if (!a)
        return this.abort(
          new Io("Content-Range mismatch", e, {
            headers: n,
            count: this.retryCount
          })
        ), !1;
      if (this.etag != null && this.etag !== n.etag)
        return this.abort(
          new Io("ETag mismatch", e, {
            headers: n,
            count: this.retryCount
          })
        ), !1;
      const { start: o, size: g, end: c = g } = a;
      return zr(this.start === o, "content-range mismatch"), zr(this.end == null || this.end === c, "content-range mismatch"), this.resume = r, !0;
    }
    if (this.end == null) {
      if (e === 206) {
        const a = WE(n["content-range"]);
        if (a == null)
          return this.handler.onHeaders(
            e,
            A,
            r,
            s
          );
        const { start: o, size: g, end: c = g } = a;
        zr(
          o != null && Number.isFinite(o) && this.start !== o,
          "content-range mismatch"
        ), zr(Number.isFinite(o)), zr(
          c != null && Number.isFinite(c) && this.end !== c,
          "invalid content-length"
        ), this.start = o, this.end = c;
      }
      if (this.end == null) {
        const a = n["content-length"];
        this.end = a != null ? Number(a) : null;
      }
      return zr(Number.isFinite(this.start)), zr(
        this.end == null || Number.isFinite(this.end),
        "invalid content-length"
      ), this.resume = r, this.etag = n.etag != null ? n.etag : null, this.handler.onHeaders(
        e,
        A,
        r,
        s
      );
    }
    const i = new Io("Request failed", e, {
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
    if (this.aborted || VE(this.opts.body))
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
      if (r != null || this.aborted || VE(this.opts.body))
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
const SB = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: gR } = ke, lR = ya;
NB() === void 0 && FB(new lR());
function FB(t) {
  if (!t || typeof t.dispatch != "function")
    throw new gR("Argument agent must implement Agent");
  Object.defineProperty(globalThis, SB, {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !1
  });
}
function NB() {
  return globalThis[SB];
}
var Pi = {
  setGlobalDispatcher: FB,
  getGlobalDispatcher: NB
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
}, zc, qE;
function In() {
  if (qE)
    return zc;
  qE = 1;
  const { kHeadersList: t } = Ye, { kGuard: e } = _r(), { kEnumerableProperty: A } = de, {
    makeIterator: r,
    isValidHeaderName: s,
    isValidHeaderValue: n
  } = Dt(), { webidl: i } = VA(), a = AA, o = Symbol("headers map"), g = Symbol("headers map sorted");
  function c(I) {
    return I === 10 || I === 13 || I === 9 || I === 32;
  }
  function E(I) {
    let C = 0, d = I.length;
    for (; d > C && c(I.charCodeAt(d - 1)); )
      --d;
    for (; d > C && c(I.charCodeAt(C)); )
      ++C;
    return C === 0 && d === I.length ? I : I.substring(C, d);
  }
  function h(I, C) {
    if (Array.isArray(C))
      for (let d = 0; d < C.length; ++d) {
        const f = C[d];
        if (f.length !== 2)
          throw i.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${f.length}.`
          });
        Q(I, f[0], f[1]);
      }
    else if (typeof C == "object" && C !== null) {
      const d = Object.keys(C);
      for (let f = 0; f < d.length; ++f)
        Q(I, d[f], C[d[f]]);
    } else
      throw i.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
      });
  }
  function Q(I, C, d) {
    if (d = E(d), s(C)) {
      if (!n(d))
        throw i.errors.invalidArgument({
          prefix: "Headers.append",
          value: d,
          type: "header value"
        });
    } else
      throw i.errors.invalidArgument({
        prefix: "Headers.append",
        value: C,
        type: "header name"
      });
    if (I[e] === "immutable")
      throw new TypeError("immutable");
    return I[e], I[t].append(C, d);
  }
  class B {
    constructor(C) {
      /** @type {[string, string][]|null} */
      L(this, "cookies", null);
      C instanceof B ? (this[o] = new Map(C[o]), this[g] = C[g], this.cookies = C.cookies === null ? null : [...C.cookies]) : (this[o] = new Map(C), this[g] = null);
    }
    // https://fetch.spec.whatwg.org/#header-list-contains
    contains(C) {
      return C = C.toLowerCase(), this[o].has(C);
    }
    clear() {
      this[o].clear(), this[g] = null, this.cookies = null;
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-append
    append(C, d) {
      this[g] = null;
      const f = C.toLowerCase(), w = this[o].get(f);
      if (w) {
        const m = f === "cookie" ? "; " : ", ";
        this[o].set(f, {
          name: w.name,
          value: `${w.value}${m}${d}`
        });
      } else
        this[o].set(f, { name: C, value: d });
      f === "set-cookie" && (this.cookies ?? (this.cookies = []), this.cookies.push(d));
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-set
    set(C, d) {
      this[g] = null;
      const f = C.toLowerCase();
      f === "set-cookie" && (this.cookies = [d]), this[o].set(f, { name: C, value: d });
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-delete
    delete(C) {
      this[g] = null, C = C.toLowerCase(), C === "set-cookie" && (this.cookies = null), this[o].delete(C);
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-get
    get(C) {
      const d = this[o].get(C.toLowerCase());
      return d === void 0 ? null : d.value;
    }
    *[Symbol.iterator]() {
      for (const [C, { value: d }] of this[o])
        yield [C, d];
    }
    get entries() {
      const C = {};
      if (this[o].size)
        for (const { name: d, value: f } of this[o].values())
          C[d] = f;
      return C;
    }
  }
  class u {
    constructor(C = void 0) {
      this[t] = new B(), this[e] = "none", C !== void 0 && (C = i.converters.HeadersInit(C), h(this, C));
    }
    // https://fetch.spec.whatwg.org/#dom-headers-append
    append(C, d) {
      return i.brandCheck(this, u), i.argumentLengthCheck(arguments, 2, { header: "Headers.append" }), C = i.converters.ByteString(C), d = i.converters.ByteString(d), Q(this, C, d);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-delete
    delete(C) {
      if (i.brandCheck(this, u), i.argumentLengthCheck(arguments, 1, { header: "Headers.delete" }), C = i.converters.ByteString(C), !s(C))
        throw i.errors.invalidArgument({
          prefix: "Headers.delete",
          value: C,
          type: "header name"
        });
      if (this[e] === "immutable")
        throw new TypeError("immutable");
      this[e], this[t].contains(C) && this[t].delete(C);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-get
    get(C) {
      if (i.brandCheck(this, u), i.argumentLengthCheck(arguments, 1, { header: "Headers.get" }), C = i.converters.ByteString(C), !s(C))
        throw i.errors.invalidArgument({
          prefix: "Headers.get",
          value: C,
          type: "header name"
        });
      return this[t].get(C);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-has
    has(C) {
      if (i.brandCheck(this, u), i.argumentLengthCheck(arguments, 1, { header: "Headers.has" }), C = i.converters.ByteString(C), !s(C))
        throw i.errors.invalidArgument({
          prefix: "Headers.has",
          value: C,
          type: "header name"
        });
      return this[t].contains(C);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-set
    set(C, d) {
      if (i.brandCheck(this, u), i.argumentLengthCheck(arguments, 2, { header: "Headers.set" }), C = i.converters.ByteString(C), d = i.converters.ByteString(d), d = E(d), s(C)) {
        if (!n(d))
          throw i.errors.invalidArgument({
            prefix: "Headers.set",
            value: d,
            type: "header value"
          });
      } else
        throw i.errors.invalidArgument({
          prefix: "Headers.set",
          value: C,
          type: "header name"
        });
      if (this[e] === "immutable")
        throw new TypeError("immutable");
      this[e], this[t].set(C, d);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-getsetcookie
    getSetCookie() {
      i.brandCheck(this, u);
      const C = this[t].cookies;
      return C ? [...C] : [];
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
    get [g]() {
      if (this[t][g])
        return this[t][g];
      const C = [], d = [...this[t]].sort((w, m) => w[0] < m[0] ? -1 : 1), f = this[t].cookies;
      for (let w = 0; w < d.length; ++w) {
        const [m, y] = d[w];
        if (m === "set-cookie")
          for (let R = 0; R < f.length; ++R)
            C.push([m, f[R]]);
        else
          a(y !== null), C.push([m, y]);
      }
      return this[t][g] = C, C;
    }
    keys() {
      if (i.brandCheck(this, u), this[e] === "immutable") {
        const C = this[g];
        return r(
          () => C,
          "Headers",
          "key"
        );
      }
      return r(
        () => [...this[g].values()],
        "Headers",
        "key"
      );
    }
    values() {
      if (i.brandCheck(this, u), this[e] === "immutable") {
        const C = this[g];
        return r(
          () => C,
          "Headers",
          "value"
        );
      }
      return r(
        () => [...this[g].values()],
        "Headers",
        "value"
      );
    }
    entries() {
      if (i.brandCheck(this, u), this[e] === "immutable") {
        const C = this[g];
        return r(
          () => C,
          "Headers",
          "key+value"
        );
      }
      return r(
        () => [...this[g].values()],
        "Headers",
        "key+value"
      );
    }
    /**
     * @param {(value: string, key: string, self: Headers) => void} callbackFn
     * @param {unknown} thisArg
     */
    forEach(C, d = globalThis) {
      if (i.brandCheck(this, u), i.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" }), typeof C != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'."
        );
      for (const [f, w] of this)
        C.apply(d, [w, f, this]);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return i.brandCheck(this, u), this[t];
    }
  }
  return u.prototype[Symbol.iterator] = u.prototype.entries, Object.defineProperties(u.prototype, {
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
  }), i.converters.HeadersInit = function(I) {
    if (i.util.Type(I) === "Object")
      return I[Symbol.iterator] ? i.converters["sequence<sequence<ByteString>>"](I) : i.converters["record<ByteString, ByteString>"](I);
    throw i.errors.conversionFailed({
      prefix: "Headers constructor",
      argument: "Argument 1",
      types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
    });
  }, zc = {
    fill: h,
    Headers: u,
    HeadersList: B
  }, zc;
}
var Xc, jE;
function Nl() {
  if (jE)
    return Xc;
  jE = 1;
  const { Headers: t, HeadersList: e, fill: A } = In(), { extractBody: r, cloneBody: s, mixinBody: n } = da(), i = de, { kEnumerableProperty: a } = i, {
    isValidReasonPhrase: o,
    isCancelled: g,
    isAborted: c,
    isBlobLike: E,
    serializeJavascriptValueToJSONString: h,
    isErrorLike: Q,
    isomorphicEncode: B
  } = Dt(), {
    redirectStatusSet: u,
    nullBodyStatus: I,
    DOMException: C
  } = ps(), { kState: d, kHeaders: f, kGuard: w, kRealm: m } = _r(), { webidl: y } = VA(), { FormData: R } = Dl(), { getGlobalOrigin: S } = Ji(), { URLSerializer: v } = Ht(), { kHeadersList: T } = Ye, z = AA, { types: K } = _t, $ = globalThis.ReadableStream || Yr.ReadableStream, ue = new TextEncoder("utf-8");
  class Y {
    // Creates network error Response.
    static error() {
      const M = { settingsObject: {} }, J = new Y();
      return J[d] = ne(), J[m] = M, J[f][T] = J[d].headersList, J[f][w] = "immutable", J[f][m] = M, J;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(M, J = {}) {
      y.argumentLengthCheck(arguments, 1, { header: "Response.json" }), J !== null && (J = y.converters.ResponseInit(J));
      const x = ue.encode(
        h(M)
      ), H = r(x), G = { settingsObject: {} }, P = new Y();
      return P[m] = G, P[f][w] = "response", P[f][m] = G, F(P, J, { body: H[0], type: "application/json" }), P;
    }
    // Creates a redirect Response that redirects to url with status status.
    static redirect(M, J = 302) {
      const x = { settingsObject: {} };
      y.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), M = y.converters.USVString(M), J = y.converters["unsigned short"](J);
      let H;
      try {
        H = new URL(M, S());
      } catch (ae) {
        throw Object.assign(new TypeError("Failed to parse URL from " + M), {
          cause: ae
        });
      }
      if (!u.has(J))
        throw new RangeError("Invalid status code " + J);
      const G = new Y();
      G[m] = x, G[f][w] = "immutable", G[f][m] = x, G[d].status = J;
      const P = B(v(H));
      return G[d].headersList.append("location", P), G;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(M = null, J = {}) {
      M !== null && (M = y.converters.BodyInit(M)), J = y.converters.ResponseInit(J), this[m] = { settingsObject: {} }, this[d] = te({}), this[f] = new t(), this[f][w] = "response", this[f][T] = this[d].headersList, this[f][m] = this[m];
      let x = null;
      if (M != null) {
        const [H, G] = r(M);
        x = { body: H, type: G };
      }
      F(this, J, x);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
      return y.brandCheck(this, Y), this[d].type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
      y.brandCheck(this, Y);
      const M = this[d].urlList, J = M[M.length - 1] ?? null;
      return J === null ? "" : v(J, !0);
    }
    // Returns whether response was obtained through a redirect.
    get redirected() {
      return y.brandCheck(this, Y), this[d].urlList.length > 1;
    }
    // Returns response’s status.
    get status() {
      return y.brandCheck(this, Y), this[d].status;
    }
    // Returns whether response’s status is an ok status.
    get ok() {
      return y.brandCheck(this, Y), this[d].status >= 200 && this[d].status <= 299;
    }
    // Returns response’s status message.
    get statusText() {
      return y.brandCheck(this, Y), this[d].statusText;
    }
    // Returns response’s headers as Headers.
    get headers() {
      return y.brandCheck(this, Y), this[f];
    }
    get body() {
      return y.brandCheck(this, Y), this[d].body ? this[d].body.stream : null;
    }
    get bodyUsed() {
      return y.brandCheck(this, Y), !!this[d].body && i.isDisturbed(this[d].body.stream);
    }
    // Returns a clone of response.
    clone() {
      if (y.brandCheck(this, Y), this.bodyUsed || this.body && this.body.locked)
        throw y.errors.exception({
          header: "Response.clone",
          message: "Body has already been consumed."
        });
      const M = ee(this[d]), J = new Y();
      return J[d] = M, J[m] = this[m], J[f][T] = M.headersList, J[f][w] = this[f][w], J[f][m] = this[f][m], J;
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
  function ee(p) {
    if (p.internalResponse)
      return k(
        ee(p.internalResponse),
        p.type
      );
    const M = te({ ...p, body: null });
    return p.body != null && (M.body = s(p.body)), M;
  }
  function te(p) {
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
      ...p,
      headersList: p.headersList ? new e(p.headersList) : new e(),
      urlList: p.urlList ? [...p.urlList] : []
    };
  }
  function ne(p) {
    const M = Q(p);
    return te({
      type: "error",
      status: 0,
      error: M ? p : new Error(p && String(p)),
      aborted: p && p.name === "AbortError"
    });
  }
  function Z(p, M) {
    return M = {
      internalResponse: p,
      ...M
    }, new Proxy(p, {
      get(J, x) {
        return x in M ? M[x] : J[x];
      },
      set(J, x, H) {
        return z(!(x in M)), J[x] = H, !0;
      }
    });
  }
  function k(p, M) {
    if (M === "basic")
      return Z(p, {
        type: "basic",
        headersList: p.headersList
      });
    if (M === "cors")
      return Z(p, {
        type: "cors",
        headersList: p.headersList
      });
    if (M === "opaque")
      return Z(p, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
      });
    if (M === "opaqueredirect")
      return Z(p, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
      });
    z(!1);
  }
  function q(p, M = null) {
    return z(g(p)), c(p) ? ne(Object.assign(new C("The operation was aborted.", "AbortError"), { cause: M })) : ne(Object.assign(new C("Request was cancelled."), { cause: M }));
  }
  function F(p, M, J) {
    if (M.status !== null && (M.status < 200 || M.status > 599))
      throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in M && M.statusText != null && !o(String(M.statusText)))
      throw new TypeError("Invalid statusText");
    if ("status" in M && M.status != null && (p[d].status = M.status), "statusText" in M && M.statusText != null && (p[d].statusText = M.statusText), "headers" in M && M.headers != null && A(p[f], M.headers), J) {
      if (I.includes(p.status))
        throw y.errors.exception({
          header: "Response constructor",
          message: "Invalid response status code " + p.status
        });
      p[d].body = J.body, J.type != null && !p[d].headersList.contains("Content-Type") && p[d].headersList.append("content-type", J.type);
    }
  }
  return y.converters.ReadableStream = y.interfaceConverter(
    $
  ), y.converters.FormData = y.interfaceConverter(
    R
  ), y.converters.URLSearchParams = y.interfaceConverter(
    URLSearchParams
  ), y.converters.XMLHttpRequestBodyInit = function(p) {
    return typeof p == "string" ? y.converters.USVString(p) : E(p) ? y.converters.Blob(p, { strict: !1 }) : K.isAnyArrayBuffer(p) || K.isTypedArray(p) || K.isDataView(p) ? y.converters.BufferSource(p) : i.isFormDataLike(p) ? y.converters.FormData(p, { strict: !1 }) : p instanceof URLSearchParams ? y.converters.URLSearchParams(p) : y.converters.DOMString(p);
  }, y.converters.BodyInit = function(p) {
    return p instanceof $ ? y.converters.ReadableStream(p) : p != null && p[Symbol.asyncIterator] ? p : y.converters.XMLHttpRequestBodyInit(p);
  }, y.converters.ResponseInit = y.dictionaryConverter([
    {
      key: "status",
      converter: y.converters["unsigned short"],
      defaultValue: 200
    },
    {
      key: "statusText",
      converter: y.converters.ByteString,
      defaultValue: ""
    },
    {
      key: "headers",
      converter: y.converters.HeadersInit
    }
  ]), Xc = {
    makeNetworkError: ne,
    makeResponse: te,
    makeAppropriateNetworkError: q,
    filterResponse: k,
    Response: Y,
    cloneResponse: ee
  }, Xc;
}
var Kc, ZE;
function ba() {
  if (ZE)
    return Kc;
  ZE = 1;
  const { extractBody: t, mixinBody: e, cloneBody: A } = da(), { Headers: r, fill: s, HeadersList: n } = In(), { FinalizationRegistry: i } = rB(), a = de, {
    isValidHTTPToken: o,
    sameOrigin: g,
    normalizeMethod: c,
    makePolicyContainer: E
  } = Dt(), {
    forbiddenMethodsSet: h,
    corsSafeListedMethodsSet: Q,
    referrerPolicy: B,
    requestRedirect: u,
    requestMode: I,
    requestCredentials: C,
    requestCache: d,
    requestDuplex: f
  } = ps(), { kEnumerableProperty: w } = a, { kHeaders: m, kSignal: y, kState: R, kGuard: S, kRealm: v } = _r(), { webidl: T } = VA(), { getGlobalOrigin: z } = Ji(), { URLSerializer: K } = Ht(), { kHeadersList: $ } = Ye, ue = AA, { getMaxListeners: Y, setMaxListeners: ee, getEventListeners: te, defaultMaxListeners: ne } = Yi;
  let Z = globalThis.TransformStream;
  const k = Symbol("init"), q = Symbol("abortController"), F = new i(({ signal: x, abort: H }) => {
    x.removeEventListener("abort", H);
  });
  class p {
    // https://fetch.spec.whatwg.org/#dom-request
    constructor(H, G = {}) {
      var UA, ws;
      if (H === k)
        return;
      T.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), H = T.converters.RequestInfo(H), G = T.converters.RequestInit(G), this[v] = {
        settingsObject: {
          baseUrl: z(),
          get origin() {
            var D;
            return (D = this.baseUrl) == null ? void 0 : D.origin;
          },
          policyContainer: E()
        }
      };
      let P = null, ae = null;
      const oe = this[v].settingsObject.baseUrl;
      let he = null;
      if (typeof H == "string") {
        let D;
        try {
          D = new URL(H, oe);
        } catch (W) {
          throw new TypeError("Failed to parse URL from " + H, { cause: W });
        }
        if (D.username || D.password)
          throw new TypeError(
            "Request cannot be constructed from a URL that includes credentials: " + H
          );
        P = M({ urlList: [D] }), ae = "cors";
      } else
        ue(H instanceof p), P = H[R], he = H[y];
      const Se = this[v].settingsObject.origin;
      let xe = "client";
      if (((ws = (UA = P.window) == null ? void 0 : UA.constructor) == null ? void 0 : ws.name) === "EnvironmentSettingsObject" && g(P.window, Se) && (xe = P.window), G.window != null)
        throw new TypeError(`'window' option '${xe}' must be null`);
      if ("window" in G && (xe = "no-window"), P = M({
        // URL request’s URL.
        // undici implementation note: this is set as the first item in request's urlList in makeRequest
        // method request’s method.
        method: P.method,
        // header list A copy of request’s header list.
        // undici implementation note: headersList is cloned in makeRequest
        headersList: P.headersList,
        // unsafe-request flag Set.
        unsafeRequest: P.unsafeRequest,
        // client This’s relevant settings object.
        client: this[v].settingsObject,
        // window window.
        window: xe,
        // priority request’s priority.
        priority: P.priority,
        // origin request’s origin. The propagation of the origin is only significant for navigation requests
        // being handled by a service worker. In this scenario a request can have an origin that is different
        // from the current client.
        origin: P.origin,
        // referrer request’s referrer.
        referrer: P.referrer,
        // referrer policy request’s referrer policy.
        referrerPolicy: P.referrerPolicy,
        // mode request’s mode.
        mode: P.mode,
        // credentials mode request’s credentials mode.
        credentials: P.credentials,
        // cache mode request’s cache mode.
        cache: P.cache,
        // redirect mode request’s redirect mode.
        redirect: P.redirect,
        // integrity metadata request’s integrity metadata.
        integrity: P.integrity,
        // keepalive request’s keepalive.
        keepalive: P.keepalive,
        // reload-navigation flag request’s reload-navigation flag.
        reloadNavigation: P.reloadNavigation,
        // history-navigation flag request’s history-navigation flag.
        historyNavigation: P.historyNavigation,
        // URL list A clone of request’s URL list.
        urlList: [...P.urlList]
      }), Object.keys(G).length > 0 && (P.mode === "navigate" && (P.mode = "same-origin"), P.reloadNavigation = !1, P.historyNavigation = !1, P.origin = "client", P.referrer = "client", P.referrerPolicy = "", P.url = P.urlList[P.urlList.length - 1], P.urlList = [P.url]), G.referrer !== void 0) {
        const D = G.referrer;
        if (D === "")
          P.referrer = "no-referrer";
        else {
          let W;
          try {
            W = new URL(D, oe);
          } catch (re) {
            throw new TypeError(`Referrer "${D}" is not a valid URL.`, { cause: re });
          }
          W.protocol === "about:" && W.hostname === "client" || Se && !g(W, this[v].settingsObject.baseUrl) ? P.referrer = "client" : P.referrer = W;
        }
      }
      G.referrerPolicy !== void 0 && (P.referrerPolicy = G.referrerPolicy);
      let we;
      if (G.mode !== void 0 ? we = G.mode : we = ae, we === "navigate")
        throw T.errors.exception({
          header: "Request constructor",
          message: "invalid request mode navigate."
        });
      if (we != null && (P.mode = we), G.credentials !== void 0 && (P.credentials = G.credentials), G.cache !== void 0 && (P.cache = G.cache), P.cache === "only-if-cached" && P.mode !== "same-origin")
        throw new TypeError(
          "'only-if-cached' can be set only with 'same-origin' mode"
        );
      if (G.redirect !== void 0 && (P.redirect = G.redirect), G.integrity !== void 0 && G.integrity != null && (P.integrity = String(G.integrity)), G.keepalive !== void 0 && (P.keepalive = !!G.keepalive), G.method !== void 0) {
        let D = G.method;
        if (!o(G.method))
          throw new TypeError(`'${G.method}' is not a valid HTTP method.`);
        if (h.has(D.toUpperCase()))
          throw new TypeError(`'${G.method}' HTTP method is unsupported.`);
        D = c(G.method), P.method = D;
      }
      G.signal !== void 0 && (he = G.signal), this[R] = P;
      const De = new AbortController();
      if (this[y] = De.signal, this[y][v] = this[v], he != null) {
        if (!he || typeof he.aborted != "boolean" || typeof he.addEventListener != "function")
          throw new TypeError(
            "Failed to construct 'Request': member signal is not of type AbortSignal."
          );
        if (he.aborted)
          De.abort(he.reason);
        else {
          this[q] = De;
          const D = new WeakRef(De), W = function() {
            const re = D.deref();
            re !== void 0 && re.abort(this.reason);
          };
          try {
            (typeof Y == "function" && Y(he) === ne || te(he, "abort").length >= ne) && ee(100, he);
          } catch {
          }
          a.addAbortListener(he, W), F.register(De, { signal: he, abort: W });
        }
      }
      if (this[m] = new r(), this[m][$] = P.headersList, this[m][S] = "request", this[m][v] = this[v], we === "no-cors") {
        if (!Q.has(P.method))
          throw new TypeError(
            `'${P.method} is unsupported in no-cors mode.`
          );
        this[m][S] = "request-no-cors";
      }
      if (Object.keys(G).length !== 0) {
        let D = new r(this[m]);
        if (G.headers !== void 0 && (D = G.headers), this[m][$].clear(), D.constructor.name === "Headers")
          for (const [W, re] of D)
            this[m].append(W, re);
        else
          s(this[m], D);
      }
      const Ve = H instanceof p ? H[R].body : null;
      if ((G.body != null || Ve != null) && (P.method === "GET" || P.method === "HEAD"))
        throw new TypeError("Request with GET/HEAD method cannot have body.");
      let Ie = null;
      if (G.body != null) {
        const [D, W] = t(
          G.body,
          P.keepalive
        );
        Ie = D, W && !this[m][$].contains("content-type") && this[m].append("content-type", W);
      }
      const fe = Ie ?? Ve;
      if (fe != null && fe.source == null) {
        if (Ie != null && G.duplex == null)
          throw new TypeError("RequestInit: duplex option is required when sending a body.");
        if (P.mode !== "same-origin" && P.mode !== "cors")
          throw new TypeError(
            'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
          );
        P.useCORSPreflightFlag = !0;
      }
      let me = fe;
      if (Ie == null && Ve != null) {
        if (a.isDisturbed(Ve.stream) || Ve.stream.locked)
          throw new TypeError(
            "Cannot construct a Request with a Request object that has already been used."
          );
        Z || (Z = Yr.TransformStream);
        const D = new Z();
        Ve.stream.pipeThrough(D), me = {
          source: Ve.source,
          length: Ve.length,
          stream: D.readable
        };
      }
      this[R].body = me;
    }
    // Returns request’s HTTP method, which is "GET" by default.
    get method() {
      return T.brandCheck(this, p), this[R].method;
    }
    // Returns the URL of request as a string.
    get url() {
      return T.brandCheck(this, p), K(this[R].url);
    }
    // Returns a Headers object consisting of the headers associated with request.
    // Note that headers added in the network layer by the user agent will not
    // be accounted for in this object, e.g., the "Host" header.
    get headers() {
      return T.brandCheck(this, p), this[m];
    }
    // Returns the kind of resource requested by request, e.g., "document"
    // or "script".
    get destination() {
      return T.brandCheck(this, p), this[R].destination;
    }
    // Returns the referrer of request. Its value can be a same-origin URL if
    // explicitly set in init, the empty string to indicate no referrer, and
    // "about:client" when defaulting to the global’s default. This is used
    // during fetching to determine the value of the `Referer` header of the
    // request being made.
    get referrer() {
      return T.brandCheck(this, p), this[R].referrer === "no-referrer" ? "" : this[R].referrer === "client" ? "about:client" : this[R].referrer.toString();
    }
    // Returns the referrer policy associated with request.
    // This is used during fetching to compute the value of the request’s
    // referrer.
    get referrerPolicy() {
      return T.brandCheck(this, p), this[R].referrerPolicy;
    }
    // Returns the mode associated with request, which is a string indicating
    // whether the request will use CORS, or will be restricted to same-origin
    // URLs.
    get mode() {
      return T.brandCheck(this, p), this[R].mode;
    }
    // Returns the credentials mode associated with request,
    // which is a string indicating whether credentials will be sent with the
    // request always, never, or only when sent to a same-origin URL.
    get credentials() {
      return this[R].credentials;
    }
    // Returns the cache mode associated with request,
    // which is a string indicating how the request will
    // interact with the browser’s cache when fetching.
    get cache() {
      return T.brandCheck(this, p), this[R].cache;
    }
    // Returns the redirect mode associated with request,
    // which is a string indicating how redirects for the
    // request will be handled during fetching. A request
    // will follow redirects by default.
    get redirect() {
      return T.brandCheck(this, p), this[R].redirect;
    }
    // Returns request’s subresource integrity metadata, which is a
    // cryptographic hash of the resource being fetched. Its value
    // consists of multiple hashes separated by whitespace. [SRI]
    get integrity() {
      return T.brandCheck(this, p), this[R].integrity;
    }
    // Returns a boolean indicating whether or not request can outlive the
    // global in which it was created.
    get keepalive() {
      return T.brandCheck(this, p), this[R].keepalive;
    }
    // Returns a boolean indicating whether or not request is for a reload
    // navigation.
    get isReloadNavigation() {
      return T.brandCheck(this, p), this[R].reloadNavigation;
    }
    // Returns a boolean indicating whether or not request is for a history
    // navigation (a.k.a. back-foward navigation).
    get isHistoryNavigation() {
      return T.brandCheck(this, p), this[R].historyNavigation;
    }
    // Returns the signal associated with request, which is an AbortSignal
    // object indicating whether or not request has been aborted, and its
    // abort event handler.
    get signal() {
      return T.brandCheck(this, p), this[y];
    }
    get body() {
      return T.brandCheck(this, p), this[R].body ? this[R].body.stream : null;
    }
    get bodyUsed() {
      return T.brandCheck(this, p), !!this[R].body && a.isDisturbed(this[R].body.stream);
    }
    get duplex() {
      return T.brandCheck(this, p), "half";
    }
    // Returns a clone of request.
    clone() {
      var ae;
      if (T.brandCheck(this, p), this.bodyUsed || (ae = this.body) != null && ae.locked)
        throw new TypeError("unusable");
      const H = J(this[R]), G = new p(k);
      G[R] = H, G[v] = this[v], G[m] = new r(), G[m][$] = H.headersList, G[m][S] = this[m][S], G[m][v] = this[m][v];
      const P = new AbortController();
      return this.signal.aborted ? P.abort(this.signal.reason) : a.addAbortListener(
        this.signal,
        () => {
          P.abort(this.signal.reason);
        }
      ), G[y] = P.signal, G;
    }
  }
  e(p);
  function M(x) {
    const H = {
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
      ...x,
      headersList: x.headersList ? new n(x.headersList) : new n()
    };
    return H.url = H.urlList[0], H;
  }
  function J(x) {
    const H = M({ ...x, body: null });
    return x.body != null && (H.body = A(x.body)), H;
  }
  return Object.defineProperties(p.prototype, {
    method: w,
    url: w,
    headers: w,
    redirect: w,
    clone: w,
    signal: w,
    duplex: w,
    destination: w,
    body: w,
    bodyUsed: w,
    isHistoryNavigation: w,
    isReloadNavigation: w,
    keepalive: w,
    integrity: w,
    cache: w,
    credentials: w,
    attribute: w,
    referrerPolicy: w,
    referrer: w,
    mode: w,
    [Symbol.toStringTag]: {
      value: "Request",
      configurable: !0
    }
  }), T.converters.Request = T.interfaceConverter(
    p
  ), T.converters.RequestInfo = function(x) {
    return typeof x == "string" ? T.converters.USVString(x) : x instanceof p ? T.converters.Request(x) : T.converters.USVString(x);
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
      allowedValues: B
    },
    {
      key: "mode",
      converter: T.converters.DOMString,
      // https://fetch.spec.whatwg.org/#concept-request-mode
      allowedValues: I
    },
    {
      key: "credentials",
      converter: T.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcredentials
      allowedValues: C
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
        (x) => T.converters.AbortSignal(
          x,
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
      allowedValues: f
    }
  ]), Kc = { Request: p, makeRequest: M }, Kc;
}
var eg, $E;
function Ul() {
  if ($E)
    return eg;
  $E = 1;
  const {
    Response: t,
    makeNetworkError: e,
    makeAppropriateNetworkError: A,
    filterResponse: r,
    makeResponse: s
  } = Nl(), { Headers: n } = In(), { Request: i, makeRequest: a } = ba(), o = hd, {
    bytesMatch: g,
    makePolicyContainer: c,
    clonePolicyContainer: E,
    requestBadPort: h,
    TAOCheck: Q,
    appendRequestOriginHeader: B,
    responseLocationURL: u,
    requestCurrentURL: I,
    setRequestReferrerPolicyOnRedirect: C,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: d,
    createOpaqueTimingInfo: f,
    appendFetchMetadata: w,
    corsCheck: m,
    crossOriginResourcePolicyCheck: y,
    determineRequestsReferrer: R,
    coarsenedSharedCurrentTime: S,
    createDeferredPromise: v,
    isBlobLike: T,
    sameOrigin: z,
    isCancelled: K,
    isAborted: $,
    isErrorLike: ue,
    fullyReadBody: Y,
    readableStreamClose: ee,
    isomorphicEncode: te,
    urlIsLocal: ne,
    urlIsHttpHttpsScheme: Z,
    urlHasHttpsScheme: k
  } = Dt(), { kState: q, kHeaders: F, kGuard: p, kRealm: M } = _r(), J = AA, { safelyExtractBody: x } = da(), {
    redirectStatusSet: H,
    nullBodyStatus: G,
    safeMethodsSet: P,
    requestBodyHeader: ae,
    subresourceSet: oe,
    DOMException: he
  } = ps(), { kHeadersList: Se } = Ye, xe = Yi, { Readable: we, pipeline: De } = Ot, { addAbortListener: Ve, isErrored: Ie, isReadable: fe, nodeMajor: me, nodeMinor: UA } = de, { dataURLProcessor: ws, serializeAMimeType: D } = Ht(), { TransformStream: W } = Yr, { getGlobalDispatcher: re } = Pi, { webidl: Be } = VA(), { STATUS_CODES: pe } = un, _e = ["GET", "HEAD"];
  let Fe, BA = globalThis.ReadableStream;
  class gt extends xe {
    constructor(X) {
      super(), this.dispatcher = X, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(X) {
      var O;
      this.state === "ongoing" && (this.state = "terminated", (O = this.connection) == null || O.destroy(X), this.emit("terminated", X));
    }
    // https://fetch.spec.whatwg.org/#fetch-controller-abort
    abort(X) {
      var O;
      this.state === "ongoing" && (this.state = "aborted", X || (X = new he("The operation was aborted.", "AbortError")), this.serializedAbortReason = X, (O = this.connection) == null || O.destroy(X), this.emit("terminated", X));
    }
  }
  function lr(U, X = {}) {
    var Ce;
    Be.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
    const O = v();
    let V;
    try {
      V = new i(U, X);
    } catch (ye) {
      return O.reject(ye), O.promise;
    }
    const se = V[q];
    if (V.signal.aborted)
      return Ga(O, se, null, V.signal.reason), O.promise;
    const j = se.client.globalObject;
    ((Ce = j == null ? void 0 : j.constructor) == null ? void 0 : Ce.name) === "ServiceWorkerGlobalScope" && (se.serviceWorkers = "none");
    let Qe = null;
    const Oe = null;
    let WA = !1, We = null;
    return Ve(
      V.signal,
      () => {
        WA = !0, J(We != null), We.abort(V.signal.reason), Ga(O, se, Qe, V.signal.reason);
      }
    ), We = ql({
      request: se,
      processResponseEndOfBody: (ye) => Pt(ye, "fetch"),
      processResponse: (ye) => {
        if (WA)
          return Promise.resolve();
        if (ye.aborted)
          return Ga(O, se, Qe, We.serializedAbortReason), Promise.resolve();
        if (ye.type === "error")
          return O.reject(
            Object.assign(new TypeError("fetch failed"), { cause: ye.error })
          ), Promise.resolve();
        Qe = new t(), Qe[q] = ye, Qe[M] = Oe, Qe[F][Se] = ye.headersList, Qe[F][p] = "immutable", Qe[F][M] = Oe, O.resolve(Qe);
      },
      dispatcher: X.dispatcher ?? re()
      // undici
    }), O.promise;
  }
  function Pt(U, X = "other") {
    var j;
    if (U.type === "error" && U.aborted || !((j = U.urlList) != null && j.length))
      return;
    const O = U.urlList[0];
    let V = U.timingInfo, se = U.cacheState;
    Z(O) && V !== null && (V.timingAllowPassed || (V = f({
      startTime: V.startTime
    }), se = ""), V.endTime = S(), U.timingInfo = V, WI(
      V,
      O,
      X,
      globalThis,
      se
    ));
  }
  function WI(U, X, O, V, se) {
    (me > 18 || me === 18 && UA >= 2) && performance.markResourceTiming(U, X.href, O, V, se);
  }
  function Ga(U, X, O, V) {
    var j, Qe;
    if (V || (V = new he("The operation was aborted.", "AbortError")), U.reject(V), X.body != null && fe((j = X.body) == null ? void 0 : j.stream) && X.body.stream.cancel(V).catch((Oe) => {
      if (Oe.code !== "ERR_INVALID_STATE")
        throw Oe;
    }), O == null)
      return;
    const se = O[q];
    se.body != null && fe((Qe = se.body) == null ? void 0 : Qe.stream) && se.body.stream.cancel(V).catch((Oe) => {
      if (Oe.code !== "ERR_INVALID_STATE")
        throw Oe;
    });
  }
  function ql({
    request: U,
    processRequestBodyChunkLength: X,
    processRequestEndOfBody: O,
    processResponse: V,
    processResponseEndOfBody: se,
    processResponseConsumeBody: j,
    useParallelQueue: Qe = !1,
    dispatcher: Oe
    // undici
  }) {
    var ye, qA, ze, bt;
    let WA = null, We = !1;
    U.client != null && (WA = U.client.globalObject, We = U.client.crossOriginIsolatedCapability);
    const hr = S(We), ji = f({
      startTime: hr
    }), Ce = {
      controller: new gt(Oe),
      request: U,
      timingInfo: ji,
      processRequestBodyChunkLength: X,
      processRequestEndOfBody: O,
      processResponse: V,
      processResponseConsumeBody: j,
      processResponseEndOfBody: se,
      taskDestination: WA,
      crossOriginIsolatedCapability: We
    };
    if (J(!U.body || U.body.stream), U.window === "client" && (U.window = ((ze = (qA = (ye = U.client) == null ? void 0 : ye.globalObject) == null ? void 0 : qA.constructor) == null ? void 0 : ze.name) === "Window" ? U.client : "no-window"), U.origin === "client" && (U.origin = (bt = U.client) == null ? void 0 : bt.origin), U.policyContainer === "client" && (U.client != null ? U.policyContainer = E(
      U.client.policyContainer
    ) : U.policyContainer = c()), !U.headersList.contains("accept")) {
      const Me = "*/*";
      U.headersList.append("accept", Me);
    }
    return U.headersList.contains("accept-language") || U.headersList.append("accept-language", "*"), U.priority, oe.has(U.destination), jl(Ce).catch((Me) => {
      Ce.controller.terminate(Me);
    }), Ce.controller;
  }
  async function jl(U, X = !1) {
    const O = U.request;
    let V = null;
    if (O.localURLsOnly && !ne(I(O)) && (V = e("local URLs only")), d(O), h(O) === "blocked" && (V = e("bad port")), O.referrerPolicy === "" && (O.referrerPolicy = O.policyContainer.referrerPolicy), O.referrer !== "no-referrer" && (O.referrer = R(O)), V === null && (V = await (async () => {
      const j = I(O);
      return (
        // - request’s current URL’s origin is same origin with request’s origin,
        //   and request’s response tainting is "basic"
        z(j, O.url) && O.responseTainting === "basic" || // request’s current URL’s scheme is "data"
        j.protocol === "data:" || // - request’s mode is "navigate" or "websocket"
        O.mode === "navigate" || O.mode === "websocket" ? (O.responseTainting = "basic", await Zl(U)) : O.mode === "same-origin" ? e('request mode cannot be "same-origin"') : O.mode === "no-cors" ? O.redirect !== "follow" ? e(
          'redirect mode cannot be "follow" for "no-cors" request'
        ) : (O.responseTainting = "opaque", await Zl(U)) : Z(I(O)) ? (O.responseTainting = "cors", await $l(U)) : e("URL scheme must be a HTTP(S) scheme")
      );
    })()), X)
      return V;
    V.status !== 0 && !V.internalResponse && (O.responseTainting, O.responseTainting === "basic" ? V = r(V, "basic") : O.responseTainting === "cors" ? V = r(V, "cors") : O.responseTainting === "opaque" ? V = r(V, "opaque") : J(!1));
    let se = V.status === 0 ? V : V.internalResponse;
    if (se.urlList.length === 0 && se.urlList.push(...O.urlList), O.timingAllowFailed || (V.timingAllowPassed = !0), V.type === "opaque" && se.status === 206 && se.rangeRequested && !O.headers.contains("range") && (V = se = e()), V.status !== 0 && (O.method === "HEAD" || O.method === "CONNECT" || G.includes(se.status)) && (se.body = null, U.controller.dump = !0), O.integrity) {
      const j = (Oe) => Ya(U, e(Oe));
      if (O.responseTainting === "opaque" || V.body == null) {
        j(V.error);
        return;
      }
      const Qe = (Oe) => {
        if (!g(Oe, O.integrity)) {
          j("integrity mismatch");
          return;
        }
        V.body = x(Oe)[0], Ya(U, V);
      };
      await Y(V.body, Qe, j);
    } else
      Ya(U, V);
  }
  function Zl(U) {
    if (K(U) && U.request.redirectCount === 0)
      return Promise.resolve(A(U));
    const { request: X } = U, { protocol: O } = I(X);
    switch (O) {
      case "about:":
        return Promise.resolve(e("about scheme is not supported"));
      case "blob:": {
        Fe || (Fe = fs.resolveObjectURL);
        const V = I(X);
        if (V.search.length !== 0)
          return Promise.resolve(e("NetworkError when attempting to fetch resource."));
        const se = Fe(V.toString());
        if (X.method !== "GET" || !T(se))
          return Promise.resolve(e("invalid method"));
        const j = x(se), Qe = j[0], Oe = te(`${Qe.length}`), WA = j[1] ?? "", We = s({
          statusText: "OK",
          headersList: [
            ["content-length", { name: "Content-Length", value: Oe }],
            ["content-type", { name: "Content-Type", value: WA }]
          ]
        });
        return We.body = Qe, Promise.resolve(We);
      }
      case "data:": {
        const V = I(X), se = ws(V);
        if (se === "failure")
          return Promise.resolve(e("failed to fetch the data URL"));
        const j = D(se.mimeType);
        return Promise.resolve(s({
          statusText: "OK",
          headersList: [
            ["content-type", { name: "Content-Type", value: j }]
          ],
          body: x(se.body)[0]
        }));
      }
      case "file:":
        return Promise.resolve(e("not implemented... yet..."));
      case "http:":
      case "https:":
        return $l(U).catch((V) => e(V));
      default:
        return Promise.resolve(e("unknown scheme"));
    }
  }
  function qI(U, X) {
    U.request.done = !0, U.processResponseDone != null && queueMicrotask(() => U.processResponseDone(X));
  }
  function Ya(U, X) {
    X.type === "error" && (X.urlList = [U.request.urlList[0]], X.timingInfo = f({
      startTime: U.timingInfo.startTime
    }));
    const O = () => {
      U.request.done = !0, U.processResponseEndOfBody != null && queueMicrotask(() => U.processResponseEndOfBody(X));
    };
    if (U.processResponse != null && queueMicrotask(() => U.processResponse(X)), X.body == null)
      O();
    else {
      const V = (j, Qe) => {
        Qe.enqueue(j);
      }, se = new W({
        start() {
        },
        transform: V,
        flush: O
      }, {
        size() {
          return 1;
        }
      }, {
        size() {
          return 1;
        }
      });
      X.body = { stream: X.body.stream.pipeThrough(se) };
    }
    if (U.processResponseConsumeBody != null) {
      const V = (j) => U.processResponseConsumeBody(X, j), se = (j) => U.processResponseConsumeBody(X, j);
      if (X.body == null)
        queueMicrotask(() => V(null));
      else
        return Y(X.body, V, se);
      return Promise.resolve();
    }
  }
  async function $l(U) {
    const X = U.request;
    let O = null, V = null;
    const se = U.timingInfo;
    if (X.serviceWorkers, O === null) {
      if (X.redirect === "follow" && (X.serviceWorkers = "none"), V = O = await zl(U), X.responseTainting === "cors" && m(X, O) === "failure")
        return e("cors failure");
      Q(X, O) === "failure" && (X.timingAllowFailed = !0);
    }
    return (X.responseTainting === "opaque" || O.type === "opaque") && y(
      X.origin,
      X.client,
      X.destination,
      V
    ) === "blocked" ? e("blocked") : (H.has(V.status) && (X.redirect !== "manual" && U.controller.connection.destroy(), X.redirect === "error" ? O = e("unexpected redirect") : X.redirect === "manual" ? O = V : X.redirect === "follow" ? O = await jI(U, O) : J(!1)), O.timingInfo = se, O);
  }
  function jI(U, X) {
    const O = U.request, V = X.internalResponse ? X.internalResponse : X;
    let se;
    try {
      if (se = u(
        V,
        I(O).hash
      ), se == null)
        return X;
    } catch (Qe) {
      return Promise.resolve(e(Qe));
    }
    if (!Z(se))
      return Promise.resolve(e("URL scheme must be a HTTP(S) scheme"));
    if (O.redirectCount === 20)
      return Promise.resolve(e("redirect count exceeded"));
    if (O.redirectCount += 1, O.mode === "cors" && (se.username || se.password) && !z(O, se))
      return Promise.resolve(e('cross origin not allowed for request mode "cors"'));
    if (O.responseTainting === "cors" && (se.username || se.password))
      return Promise.resolve(e(
        'URL cannot contain credentials for request mode "cors"'
      ));
    if (V.status !== 303 && O.body != null && O.body.source == null)
      return Promise.resolve(e());
    if ([301, 302].includes(V.status) && O.method === "POST" || V.status === 303 && !_e.includes(O.method)) {
      O.method = "GET", O.body = null;
      for (const Qe of ae)
        O.headersList.delete(Qe);
    }
    z(I(O), se) || (O.headersList.delete("authorization"), O.headersList.delete("cookie"), O.headersList.delete("host")), O.body != null && (J(O.body.source != null), O.body = x(O.body.source)[0]);
    const j = U.timingInfo;
    return j.redirectEndTime = j.postRedirectStartTime = S(U.crossOriginIsolatedCapability), j.redirectStartTime === 0 && (j.redirectStartTime = j.startTime), O.urlList.push(se), C(O, V), jl(U, !0);
  }
  async function zl(U, X = !1, O = !1) {
    const V = U.request;
    let se = null, j = null, Qe = null;
    V.window === "no-window" && V.redirect === "error" ? (se = U, j = V) : (j = a(V), se = { ...U }, se.request = j);
    const Oe = V.credentials === "include" || V.credentials === "same-origin" && V.responseTainting === "basic", WA = j.body ? j.body.length : null;
    let We = null;
    if (j.body == null && ["POST", "PUT"].includes(j.method) && (We = "0"), WA != null && (We = te(`${WA}`)), We != null && j.headersList.append("content-length", We), WA != null && j.keepalive, j.referrer instanceof URL && j.headersList.append("referer", te(j.referrer.href)), B(j), w(j), j.headersList.contains("user-agent") || j.headersList.append("user-agent", typeof esbuildDetection > "u" ? "undici" : "node"), j.cache === "default" && (j.headersList.contains("if-modified-since") || j.headersList.contains("if-none-match") || j.headersList.contains("if-unmodified-since") || j.headersList.contains("if-match") || j.headersList.contains("if-range")) && (j.cache = "no-store"), j.cache === "no-cache" && !j.preventNoCacheCacheControlHeaderModification && !j.headersList.contains("cache-control") && j.headersList.append("cache-control", "max-age=0"), (j.cache === "no-store" || j.cache === "reload") && (j.headersList.contains("pragma") || j.headersList.append("pragma", "no-cache"), j.headersList.contains("cache-control") || j.headersList.append("cache-control", "no-cache")), j.headersList.contains("range") && j.headersList.append("accept-encoding", "identity"), j.headersList.contains("accept-encoding") || (k(I(j)) ? j.headersList.append("accept-encoding", "br, gzip, deflate") : j.headersList.append("accept-encoding", "gzip, deflate")), j.headersList.delete("host"), j.cache = "no-store", j.mode !== "no-store" && j.mode, Qe == null) {
      if (j.mode === "only-if-cached")
        return e("only if cached");
      const hr = await ZI(
        se,
        Oe,
        O
      );
      !P.has(j.method) && hr.status >= 200 && hr.status <= 399, Qe == null && (Qe = hr);
    }
    if (Qe.urlList = [...j.urlList], j.headersList.contains("range") && (Qe.rangeRequested = !0), Qe.requestIncludesCredentials = Oe, Qe.status === 407)
      return V.window === "no-window" ? e() : K(U) ? A(U) : e("proxy authentication required");
    if (
      // response’s status is 421
      Qe.status === 421 && // isNewConnectionFetch is false
      !O && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
      (V.body == null || V.body.source != null)
    ) {
      if (K(U))
        return A(U);
      U.controller.connection.destroy(), Qe = await zl(
        U,
        X,
        !0
      );
    }
    return Qe;
  }
  async function ZI(U, X = !1, O = !1) {
    J(!U.controller.connection || U.controller.connection.destroyed), U.controller.connection = {
      abort: null,
      destroyed: !1,
      destroy(Ce) {
        var ye;
        this.destroyed || (this.destroyed = !0, (ye = this.abort) == null || ye.call(this, Ce ?? new he("The operation was aborted.", "AbortError")));
      }
    };
    const V = U.request;
    let se = null;
    const j = U.timingInfo;
    V.cache = "no-store", V.mode;
    let Qe = null;
    if (V.body == null && U.processRequestEndOfBody)
      queueMicrotask(() => U.processRequestEndOfBody());
    else if (V.body != null) {
      const Ce = async function* (ze) {
        var bt;
        K(U) || (yield ze, (bt = U.processRequestBodyChunkLength) == null || bt.call(U, ze.byteLength));
      }, ye = () => {
        K(U) || U.processRequestEndOfBody && U.processRequestEndOfBody();
      }, qA = (ze) => {
        K(U) || (ze.name === "AbortError" ? U.controller.abort() : U.controller.terminate(ze));
      };
      Qe = async function* () {
        try {
          for await (const ze of V.body.stream)
            yield* Ce(ze);
          ye();
        } catch (ze) {
          qA(ze);
        }
      }();
    }
    try {
      const { body: Ce, status: ye, statusText: qA, headersList: ze, socket: bt } = await ji({ body: Qe });
      if (bt)
        se = s({ status: ye, statusText: qA, headersList: ze, socket: bt });
      else {
        const Me = Ce[Symbol.asyncIterator]();
        U.controller.next = () => Me.next(), se = s({ status: ye, statusText: qA, headersList: ze });
      }
    } catch (Ce) {
      return Ce.name === "AbortError" ? (U.controller.connection.destroy(), A(U, Ce)) : e(Ce);
    }
    const Oe = () => {
      U.controller.resume();
    }, WA = (Ce) => {
      U.controller.abort(Ce);
    };
    BA || (BA = Yr.ReadableStream);
    const We = new BA(
      {
        async start(Ce) {
          U.controller.controller = Ce;
        },
        async pull(Ce) {
          await Oe();
        },
        async cancel(Ce) {
          await WA(Ce);
        }
      },
      {
        highWaterMark: 0,
        size() {
          return 1;
        }
      }
    );
    se.body = { stream: We }, U.controller.on("terminated", hr), U.controller.resume = async () => {
      for (; ; ) {
        let Ce, ye;
        try {
          const { done: qA, value: ze } = await U.controller.next();
          if ($(U))
            break;
          Ce = qA ? void 0 : ze;
        } catch (qA) {
          U.controller.ended && !j.encodedBodySize ? Ce = void 0 : (Ce = qA, ye = !0);
        }
        if (Ce === void 0) {
          ee(U.controller.controller), qI(U, se);
          return;
        }
        if (j.decodedBodySize += (Ce == null ? void 0 : Ce.byteLength) ?? 0, ye) {
          U.controller.terminate(Ce);
          return;
        }
        if (U.controller.controller.enqueue(new Uint8Array(Ce)), Ie(We)) {
          U.controller.terminate();
          return;
        }
        if (!U.controller.controller.desiredSize)
          return;
      }
    };
    function hr(Ce) {
      $(U) ? (se.aborted = !0, fe(We) && U.controller.controller.error(
        U.controller.serializedAbortReason
      )) : fe(We) && U.controller.controller.error(new TypeError("terminated", {
        cause: ue(Ce) ? Ce : void 0
      })), U.controller.connection.destroy();
    }
    return se;
    async function ji({ body: Ce }) {
      const ye = I(V), qA = U.controller.dispatcher;
      return new Promise((ze, bt) => qA.dispatch(
        {
          path: ye.pathname + ye.search,
          origin: ye.origin,
          method: V.method,
          body: U.controller.dispatcher.isMockActive ? V.body && (V.body.source || V.body.stream) : Ce,
          headers: V.headersList.entries,
          maxRedirections: 0,
          upgrade: V.mode === "websocket" ? "websocket" : void 0
        },
        {
          body: null,
          abort: null,
          onConnect(Me) {
            const { connection: tA } = U.controller;
            tA.destroyed ? Me(new he("The operation was aborted.", "AbortError")) : (U.controller.on("terminated", Me), this.abort = tA.abort = Me);
          },
          onHeaders(Me, tA, xa, Zi) {
            if (Me < 200)
              return;
            let Er = [], pn = "";
            const mn = new n();
            if (Array.isArray(tA))
              for (let lt = 0; lt < tA.length; lt += 2) {
                const ur = tA[lt + 0].toString("latin1"), Or = tA[lt + 1].toString("latin1");
                ur.toLowerCase() === "content-encoding" ? Er = Or.toLowerCase().split(",").map((Ja) => Ja.trim()) : ur.toLowerCase() === "location" && (pn = Or), mn[Se].append(ur, Or);
              }
            else {
              const lt = Object.keys(tA);
              for (const ur of lt) {
                const Or = tA[ur];
                ur.toLowerCase() === "content-encoding" ? Er = Or.toLowerCase().split(",").map((Ja) => Ja.trim()).reverse() : ur.toLowerCase() === "location" && (pn = Or), mn[Se].append(ur, Or);
              }
            }
            this.body = new we({ read: xa });
            const ys = [], $I = V.redirect === "follow" && pn && H.has(Me);
            if (V.method !== "HEAD" && V.method !== "CONNECT" && !G.includes(Me) && !$I)
              for (const lt of Er)
                if (lt === "x-gzip" || lt === "gzip")
                  ys.push(o.createGunzip({
                    // Be less strict when decoding compressed responses, since sometimes
                    // servers send slightly invalid responses that are still accepted
                    // by common browsers.
                    // Always using Z_SYNC_FLUSH is what cURL does.
                    flush: o.constants.Z_SYNC_FLUSH,
                    finishFlush: o.constants.Z_SYNC_FLUSH
                  }));
                else if (lt === "deflate")
                  ys.push(o.createInflate());
                else if (lt === "br")
                  ys.push(o.createBrotliDecompress());
                else {
                  ys.length = 0;
                  break;
                }
            return ze({
              status: Me,
              statusText: Zi,
              headersList: mn[Se],
              body: ys.length ? De(this.body, ...ys, () => {
              }) : this.body.on("error", () => {
              })
            }), !0;
          },
          onData(Me) {
            if (U.controller.dump)
              return;
            const tA = Me;
            return j.encodedBodySize += tA.byteLength, this.body.push(tA);
          },
          onComplete() {
            this.abort && U.controller.off("terminated", this.abort), U.controller.ended = !0, this.body.push(null);
          },
          onError(Me) {
            var tA;
            this.abort && U.controller.off("terminated", this.abort), (tA = this.body) == null || tA.destroy(Me), U.controller.terminate(Me), bt(Me);
          },
          onUpgrade(Me, tA, xa) {
            if (Me !== 101)
              return;
            const Zi = new n();
            for (let Er = 0; Er < tA.length; Er += 2) {
              const pn = tA[Er + 0].toString("latin1"), mn = tA[Er + 1].toString("latin1");
              Zi[Se].append(pn, mn);
            }
            return ze({
              status: Me,
              statusText: pe[Me],
              headersList: Zi[Se],
              socket: xa
            }), !0;
          }
        }
      ));
    }
  }
  return eg = {
    fetch: lr,
    Fetch: gt,
    fetching: ql,
    finalizeAndReportTiming: Pt
  }, eg;
}
var Ag, zE;
function UB() {
  return zE || (zE = 1, Ag = {
    kState: Symbol("FileReader state"),
    kResult: Symbol("FileReader result"),
    kError: Symbol("FileReader error"),
    kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
    kEvents: Symbol("FileReader events"),
    kAborted: Symbol("FileReader aborted")
  }), Ag;
}
var tg, XE;
function ER() {
  if (XE)
    return tg;
  XE = 1;
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
var rg, KE;
function uR() {
  if (KE)
    return rg;
  KE = 1;
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
var sg, eu;
function QR() {
  if (eu)
    return sg;
  eu = 1;
  const {
    kState: t,
    kError: e,
    kResult: A,
    kAborted: r,
    kLastProgressEventFired: s
  } = UB(), { ProgressEvent: n } = ER(), { getEncoding: i } = uR(), { DOMException: a } = ps(), { serializeAMimeType: o, parseMIMEType: g } = Ht(), { types: c } = _t, { StringDecoder: E } = Ed, { btoa: h } = fs, Q = {
    enumerable: !0,
    writable: !1,
    configurable: !1
  };
  function B(w, m, y, R) {
    if (w[t] === "loading")
      throw new a("Invalid state", "InvalidStateError");
    w[t] = "loading", w[A] = null, w[e] = null;
    const v = m.stream().getReader(), T = [];
    let z = v.read(), K = !0;
    (async () => {
      for (; !w[r]; )
        try {
          const { done: $, value: ue } = await z;
          if (K && !w[r] && queueMicrotask(() => {
            u("loadstart", w);
          }), K = !1, !$ && c.isUint8Array(ue))
            T.push(ue), (w[s] === void 0 || Date.now() - w[s] >= 50) && !w[r] && (w[s] = Date.now(), queueMicrotask(() => {
              u("progress", w);
            })), z = v.read();
          else if ($) {
            queueMicrotask(() => {
              w[t] = "done";
              try {
                const Y = I(T, y, m.type, R);
                if (w[r])
                  return;
                w[A] = Y, u("load", w);
              } catch (Y) {
                w[e] = Y, u("error", w);
              }
              w[t] !== "loading" && u("loadend", w);
            });
            break;
          }
        } catch ($) {
          if (w[r])
            return;
          queueMicrotask(() => {
            w[t] = "done", w[e] = $, u("error", w), w[t] !== "loading" && u("loadend", w);
          });
          break;
        }
    })();
  }
  function u(w, m) {
    const y = new n(w, {
      bubbles: !1,
      cancelable: !1
    });
    m.dispatchEvent(y);
  }
  function I(w, m, y, R) {
    switch (m) {
      case "DataURL": {
        let S = "data:";
        const v = g(y || "application/octet-stream");
        v !== "failure" && (S += o(v)), S += ";base64,";
        const T = new E("latin1");
        for (const z of w)
          S += h(T.write(z));
        return S += h(T.end()), S;
      }
      case "Text": {
        let S = "failure";
        if (R && (S = i(R)), S === "failure" && y) {
          const v = g(y);
          v !== "failure" && (S = i(v.parameters.get("charset")));
        }
        return S === "failure" && (S = "UTF-8"), C(w, S);
      }
      case "ArrayBuffer":
        return f(w).buffer;
      case "BinaryString": {
        let S = "";
        const v = new E("latin1");
        for (const T of w)
          S += v.write(T);
        return S += v.end(), S;
      }
    }
  }
  function C(w, m) {
    const y = f(w), R = d(y);
    let S = 0;
    R !== null && (m = R, S = R === "UTF-8" ? 3 : 2);
    const v = y.slice(S);
    return new TextDecoder(m).decode(v);
  }
  function d(w) {
    const [m, y, R] = w;
    return m === 239 && y === 187 && R === 191 ? "UTF-8" : m === 254 && y === 255 ? "UTF-16BE" : m === 255 && y === 254 ? "UTF-16LE" : null;
  }
  function f(w) {
    const m = w.reduce((R, S) => R + S.byteLength, 0);
    let y = 0;
    return w.reduce((R, S) => (R.set(S, y), y += S.byteLength, R), new Uint8Array(m));
  }
  return sg = {
    staticPropertyDescriptors: Q,
    readOperation: B,
    fireAProgressEvent: u
  }, sg;
}
var ng, Au;
function CR() {
  if (Au)
    return ng;
  Au = 1;
  const {
    staticPropertyDescriptors: t,
    readOperation: e,
    fireAProgressEvent: A
  } = QR(), {
    kState: r,
    kError: s,
    kResult: n,
    kEvents: i,
    kAborted: a
  } = UB(), { webidl: o } = VA(), { kEnumerableProperty: g } = de;
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
      o.brandCheck(this, c), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), h = o.converters.Blob(h, { strict: !1 }), e(this, h, "ArrayBuffer");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#readAsBinaryString
     * @param {import('buffer').Blob} blob
     */
    readAsBinaryString(h) {
      o.brandCheck(this, c), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), h = o.converters.Blob(h, { strict: !1 }), e(this, h, "BinaryString");
    }
    /**
     * @see https://w3c.github.io/FileAPI/#readAsDataText
     * @param {import('buffer').Blob} blob
     * @param {string?} encoding
     */
    readAsText(h, Q = void 0) {
      o.brandCheck(this, c), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), h = o.converters.Blob(h, { strict: !1 }), Q !== void 0 && (Q = o.converters.DOMString(Q)), e(this, h, "Text", Q);
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dfn-readAsDataURL
     * @param {import('buffer').Blob} blob
     */
    readAsDataURL(h) {
      o.brandCheck(this, c), o.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), h = o.converters.Blob(h, { strict: !1 }), e(this, h, "DataURL");
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
      switch (o.brandCheck(this, c), this[r]) {
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
      return o.brandCheck(this, c), this[n];
    }
    /**
     * @see https://w3c.github.io/FileAPI/#dom-filereader-error
     */
    get error() {
      return o.brandCheck(this, c), this[s];
    }
    get onloadend() {
      return o.brandCheck(this, c), this[i].loadend;
    }
    set onloadend(h) {
      o.brandCheck(this, c), this[i].loadend && this.removeEventListener("loadend", this[i].loadend), typeof h == "function" ? (this[i].loadend = h, this.addEventListener("loadend", h)) : this[i].loadend = null;
    }
    get onerror() {
      return o.brandCheck(this, c), this[i].error;
    }
    set onerror(h) {
      o.brandCheck(this, c), this[i].error && this.removeEventListener("error", this[i].error), typeof h == "function" ? (this[i].error = h, this.addEventListener("error", h)) : this[i].error = null;
    }
    get onloadstart() {
      return o.brandCheck(this, c), this[i].loadstart;
    }
    set onloadstart(h) {
      o.brandCheck(this, c), this[i].loadstart && this.removeEventListener("loadstart", this[i].loadstart), typeof h == "function" ? (this[i].loadstart = h, this.addEventListener("loadstart", h)) : this[i].loadstart = null;
    }
    get onprogress() {
      return o.brandCheck(this, c), this[i].progress;
    }
    set onprogress(h) {
      o.brandCheck(this, c), this[i].progress && this.removeEventListener("progress", this[i].progress), typeof h == "function" ? (this[i].progress = h, this.addEventListener("progress", h)) : this[i].progress = null;
    }
    get onload() {
      return o.brandCheck(this, c), this[i].load;
    }
    set onload(h) {
      o.brandCheck(this, c), this[i].load && this.removeEventListener("load", this[i].load), typeof h == "function" ? (this[i].load = h, this.addEventListener("load", h)) : this[i].load = null;
    }
    get onabort() {
      return o.brandCheck(this, c), this[i].abort;
    }
    set onabort(h) {
      o.brandCheck(this, c), this[i].abort && this.removeEventListener("abort", this[i].abort), typeof h == "function" ? (this[i].abort = h, this.addEventListener("abort", h)) : this[i].abort = null;
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
var ig, tu;
function Tl() {
  return tu || (tu = 1, ig = {
    kConstruct: Symbol("constructable")
  }), ig;
}
var og, ru;
function BR() {
  if (ru)
    return og;
  ru = 1;
  const t = AA, { URLSerializer: e } = Ht(), { isValidHeaderName: A } = Dt();
  function r(n, i, a = !1) {
    const o = e(n, a), g = e(i, a);
    return o === g;
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
  return og = {
    urlEquals: r,
    fieldValues: s
  }, og;
}
var ag, su;
function IR() {
  var y, R, Go, v, Ls, z, TB;
  if (su)
    return ag;
  su = 1;
  const { kConstruct: t } = Tl(), { urlEquals: e, fieldValues: A } = BR(), { kEnumerableProperty: r, isDisturbed: s } = de, { kHeadersList: n } = Ye, { webidl: i } = VA(), { Response: a, cloneResponse: o } = Nl(), { Request: g } = ba(), { kState: c, kHeaders: E, kGuard: h, kRealm: Q } = _r(), { fetching: B } = Ul(), { urlIsHttpHttpsScheme: u, createDeferredPromise: I, readAllBytes: C } = Dt(), d = AA, { getGlobalDispatcher: f } = Pi, $ = class $ {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#batch-cache-operations-algorithm
       * @param {CacheBatchOperation[]} operations
       * @returns {requestResponseList}
       */
      N(this, R);
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
      N(this, z);
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-request-response-list
       * @type {requestResponseList}
       */
      N(this, y, void 0);
      arguments[0] !== t && i.illegalConstructor(), b(this, y, arguments[1]);
    }
    async match(Y, ee = {}) {
      i.brandCheck(this, $), i.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), Y = i.converters.RequestInfo(Y), ee = i.converters.CacheQueryOptions(ee);
      const te = await this.matchAll(Y, ee);
      if (te.length !== 0)
        return te[0];
    }
    async matchAll(Y = void 0, ee = {}) {
      var k;
      i.brandCheck(this, $), Y !== void 0 && (Y = i.converters.RequestInfo(Y)), ee = i.converters.CacheQueryOptions(ee);
      let te = null;
      if (Y !== void 0)
        if (Y instanceof g) {
          if (te = Y[c], te.method !== "GET" && !ee.ignoreMethod)
            return [];
        } else
          typeof Y == "string" && (te = new g(Y)[c]);
      const ne = [];
      if (Y === void 0)
        for (const q of l(this, y))
          ne.push(q[1]);
      else {
        const q = _(this, v, Ls).call(this, te, ee);
        for (const F of q)
          ne.push(F[1]);
      }
      const Z = [];
      for (const q of ne) {
        const F = new a(((k = q.body) == null ? void 0 : k.source) ?? null), p = F[c].body;
        F[c] = q, F[c].body = p, F[E][n] = q.headersList, F[E][h] = "immutable", Z.push(F);
      }
      return Object.freeze(Z);
    }
    async add(Y) {
      i.brandCheck(this, $), i.argumentLengthCheck(arguments, 1, { header: "Cache.add" }), Y = i.converters.RequestInfo(Y);
      const ee = [Y];
      return await this.addAll(ee);
    }
    async addAll(Y) {
      i.brandCheck(this, $), i.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), Y = i.converters["sequence<RequestInfo>"](Y);
      const ee = [], te = [];
      for (const J of Y) {
        if (typeof J == "string")
          continue;
        const x = J[c];
        if (!u(x.url) || x.method !== "GET")
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme when method is not GET."
          });
      }
      const ne = [];
      for (const J of Y) {
        const x = new g(J)[c];
        if (!u(x.url))
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme."
          });
        x.initiator = "fetch", x.destination = "subresource", te.push(x);
        const H = I();
        ne.push(B({
          request: x,
          dispatcher: f(),
          processResponse(G) {
            if (G.type === "error" || G.status === 206 || G.status < 200 || G.status > 299)
              H.reject(i.errors.exception({
                header: "Cache.addAll",
                message: "Received an invalid status code or the request failed."
              }));
            else if (G.headersList.contains("vary")) {
              const P = A(G.headersList.get("vary"));
              for (const ae of P)
                if (ae === "*") {
                  H.reject(i.errors.exception({
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
              H.reject(new DOMException("aborted", "AbortError"));
              return;
            }
            H.resolve(G);
          }
        })), ee.push(H.promise);
      }
      const k = await Promise.all(ee), q = [];
      let F = 0;
      for (const J of k) {
        const x = {
          type: "put",
          // 7.3.2
          request: te[F],
          // 7.3.3
          response: J
          // 7.3.4
        };
        q.push(x), F++;
      }
      const p = I();
      let M = null;
      try {
        _(this, R, Go).call(this, q);
      } catch (J) {
        M = J;
      }
      return queueMicrotask(() => {
        M === null ? p.resolve(void 0) : p.reject(M);
      }), p.promise;
    }
    async put(Y, ee) {
      i.brandCheck(this, $), i.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), Y = i.converters.RequestInfo(Y), ee = i.converters.Response(ee);
      let te = null;
      if (Y instanceof g ? te = Y[c] : te = new g(Y)[c], !u(te.url) || te.method !== "GET")
        throw i.errors.exception({
          header: "Cache.put",
          message: "Expected an http/s scheme when method is not GET"
        });
      const ne = ee[c];
      if (ne.status === 206)
        throw i.errors.exception({
          header: "Cache.put",
          message: "Got 206 status"
        });
      if (ne.headersList.contains("vary")) {
        const x = A(ne.headersList.get("vary"));
        for (const H of x)
          if (H === "*")
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
      const Z = o(ne), k = I();
      if (ne.body != null) {
        const H = ne.body.stream.getReader();
        C(H).then(k.resolve, k.reject);
      } else
        k.resolve(void 0);
      const q = [], F = {
        type: "put",
        // 14.
        request: te,
        // 15.
        response: Z
        // 16.
      };
      q.push(F);
      const p = await k.promise;
      Z.body != null && (Z.body.source = p);
      const M = I();
      let J = null;
      try {
        _(this, R, Go).call(this, q);
      } catch (x) {
        J = x;
      }
      return queueMicrotask(() => {
        J === null ? M.resolve() : M.reject(J);
      }), M.promise;
    }
    async delete(Y, ee = {}) {
      i.brandCheck(this, $), i.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), Y = i.converters.RequestInfo(Y), ee = i.converters.CacheQueryOptions(ee);
      let te = null;
      if (Y instanceof g) {
        if (te = Y[c], te.method !== "GET" && !ee.ignoreMethod)
          return !1;
      } else
        d(typeof Y == "string"), te = new g(Y)[c];
      const ne = [], Z = {
        type: "delete",
        request: te,
        options: ee
      };
      ne.push(Z);
      const k = I();
      let q = null, F;
      try {
        F = _(this, R, Go).call(this, ne);
      } catch (p) {
        q = p;
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
      i.brandCheck(this, $), Y !== void 0 && (Y = i.converters.RequestInfo(Y)), ee = i.converters.CacheQueryOptions(ee);
      let te = null;
      if (Y !== void 0)
        if (Y instanceof g) {
          if (te = Y[c], te.method !== "GET" && !ee.ignoreMethod)
            return [];
        } else
          typeof Y == "string" && (te = new g(Y)[c]);
      const ne = I(), Z = [];
      if (Y === void 0)
        for (const k of l(this, y))
          Z.push(k[0]);
      else {
        const k = _(this, v, Ls).call(this, te, ee);
        for (const q of k)
          Z.push(q[0]);
      }
      return queueMicrotask(() => {
        const k = [];
        for (const q of Z) {
          const F = new g("https://a");
          F[c] = q, F[E][n] = q.headersList, F[E][h] = "immutable", F[Q] = q.client, k.push(F);
        }
        ne.resolve(Object.freeze(k));
      }), ne.promise;
    }
  };
  y = new WeakMap(), R = new WeakSet(), Go = function(Y) {
    const ee = l(this, y), te = [...ee], ne = [], Z = [];
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
        if (_(this, v, Ls).call(this, k.request, k.options, ne).length)
          throw new DOMException("???", "InvalidStateError");
        let q;
        if (k.type === "delete") {
          if (q = _(this, v, Ls).call(this, k.request, k.options), q.length === 0)
            return [];
          for (const F of q) {
            const p = ee.indexOf(F);
            d(p !== -1), ee.splice(p, 1);
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
          q = _(this, v, Ls).call(this, k.request);
          for (const p of q) {
            const M = ee.indexOf(p);
            d(M !== -1), ee.splice(M, 1);
          }
          ee.push([k.request, k.response]), ne.push([k.request, k.response]);
        }
        Z.push([k.request, k.response]);
      }
      return Z;
    } catch (k) {
      throw l(this, y).length = 0, b(this, y, te), k;
    }
  }, v = new WeakSet(), Ls = function(Y, ee, te) {
    const ne = [], Z = te ?? l(this, y);
    for (const k of Z) {
      const [q, F] = k;
      _(this, z, TB).call(this, Y, q, F, ee) && ne.push(k);
    }
    return ne;
  }, z = new WeakSet(), TB = function(Y, ee, te = null, ne) {
    const Z = new URL(Y.url), k = new URL(ee.url);
    if (ne != null && ne.ignoreSearch && (k.search = "", Z.search = ""), !e(Z, k, !0))
      return !1;
    if (te == null || ne != null && ne.ignoreVary || !te.headersList.contains("vary"))
      return !0;
    const q = A(te.headersList.get("vary"));
    for (const F of q) {
      if (F === "*")
        return !1;
      const p = ee.headersList.get(F), M = Y.headersList.get(F);
      if (p !== M)
        return !1;
    }
    return !0;
  };
  let w = $;
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
  const m = [
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
  return i.converters.CacheQueryOptions = i.dictionaryConverter(m), i.converters.MultiCacheQueryOptions = i.dictionaryConverter([
    ...m,
    {
      key: "cacheName",
      converter: i.converters.DOMString
    }
  ]), i.converters.Response = i.interfaceConverter(a), i.converters["sequence<RequestInfo>"] = i.sequenceConverter(
    i.converters.RequestInfo
  ), ag = {
    Cache: w
  }, ag;
}
var cg, nu;
function dR() {
  var n;
  if (nu)
    return cg;
  nu = 1;
  const { kConstruct: t } = Tl(), { Cache: e } = IR(), { webidl: A } = VA(), { kEnumerableProperty: r } = de, i = class i {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-name-to-cache-map
       * @type {Map<string, import('./cache').requestResponseList}
       */
      N(this, n, /* @__PURE__ */ new Map());
      arguments[0] !== t && A.illegalConstructor();
    }
    async match(o, g = {}) {
      if (A.brandCheck(this, i), A.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), o = A.converters.RequestInfo(o), g = A.converters.MultiCacheQueryOptions(g), g.cacheName != null) {
        if (l(this, n).has(g.cacheName)) {
          const c = l(this, n).get(g.cacheName);
          return await new e(t, c).match(o, g);
        }
      } else
        for (const c of l(this, n).values()) {
          const h = await new e(t, c).match(o, g);
          if (h !== void 0)
            return h;
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
        const c = l(this, n).get(o);
        return new e(t, c);
      }
      const g = [];
      return l(this, n).set(o, g), new e(t, g);
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
  }), cg = {
    CacheStorage: s
  }, cg;
}
var gg, iu;
function fR() {
  return iu || (iu = 1, gg = {
    maxAttributeValueSize: 1024,
    maxNameValuePairSize: 4096
  }), gg;
}
var lg, ou;
function vB() {
  if (ou)
    return lg;
  ou = 1;
  const t = AA, { kHeadersList: e } = Ye;
  function A(h) {
    if (h.length === 0)
      return !1;
    for (const Q of h) {
      const B = Q.charCodeAt(0);
      if (B >= 0 || B <= 8 || B >= 10 || B <= 31 || B === 127)
        return !1;
    }
  }
  function r(h) {
    for (const Q of h) {
      const B = Q.charCodeAt(0);
      if (B <= 32 || B > 127 || Q === "(" || Q === ")" || Q === ">" || Q === "<" || Q === "@" || Q === "," || Q === ";" || Q === ":" || Q === "\\" || Q === '"' || Q === "/" || Q === "[" || Q === "]" || Q === "?" || Q === "=" || Q === "{" || Q === "}")
        throw new Error("Invalid cookie name");
    }
  }
  function s(h) {
    for (const Q of h) {
      const B = Q.charCodeAt(0);
      if (B < 33 || // exclude CTLs (0-31)
      B === 34 || B === 44 || B === 59 || B === 92 || B > 126)
        throw new Error("Invalid header value");
    }
  }
  function n(h) {
    for (const Q of h)
      if (Q.charCodeAt(0) < 33 || Q === ";")
        throw new Error("Invalid cookie path");
  }
  function i(h) {
    if (h.startsWith("-") || h.endsWith(".") || h.endsWith("-"))
      throw new Error("Invalid cookie domain");
  }
  function a(h) {
    typeof h == "number" && (h = new Date(h));
    const Q = [
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
    ], u = Q[h.getUTCDay()], I = h.getUTCDate().toString().padStart(2, "0"), C = B[h.getUTCMonth()], d = h.getUTCFullYear(), f = h.getUTCHours().toString().padStart(2, "0"), w = h.getUTCMinutes().toString().padStart(2, "0"), m = h.getUTCSeconds().toString().padStart(2, "0");
    return `${u}, ${I} ${C} ${d} ${f}:${w}:${m} GMT`;
  }
  function o(h) {
    if (h < 0)
      throw new Error("Invalid cookie max-age");
  }
  function g(h) {
    if (h.name.length === 0)
      return null;
    r(h.name), s(h.value);
    const Q = [`${h.name}=${h.value}`];
    h.name.startsWith("__Secure-") && (h.secure = !0), h.name.startsWith("__Host-") && (h.secure = !0, h.domain = null, h.path = "/"), h.secure && Q.push("Secure"), h.httpOnly && Q.push("HttpOnly"), typeof h.maxAge == "number" && (o(h.maxAge), Q.push(`Max-Age=${h.maxAge}`)), h.domain && (i(h.domain), Q.push(`Domain=${h.domain}`)), h.path && (n(h.path), Q.push(`Path=${h.path}`)), h.expires && h.expires.toString() !== "Invalid Date" && Q.push(`Expires=${a(h.expires)}`), h.sameSite && Q.push(`SameSite=${h.sameSite}`);
    for (const B of h.unparsed) {
      if (!B.includes("="))
        throw new Error("Invalid unparsed");
      const [u, ...I] = B.split("=");
      Q.push(`${u.trim()}=${I.join("=")}`);
    }
    return Q.join("; ");
  }
  let c;
  function E(h) {
    if (h[e])
      return h[e];
    c || (c = Object.getOwnPropertySymbols(h).find(
      (B) => B.description === "headers list"
    ), t(c, "Headers cannot be parsed"));
    const Q = h[c];
    return t(Q), Q;
  }
  return lg = {
    isCTLExcludingHtab: A,
    stringify: g,
    getHeadersList: E
  }, lg;
}
var hg, au;
function pR() {
  if (au)
    return hg;
  au = 1;
  const { maxNameValuePairSize: t, maxAttributeValueSize: e } = fR(), { isCTLExcludingHtab: A } = vB(), { collectASequenceOfCodePointsFast: r } = Ht(), s = AA;
  function n(a) {
    if (A(a))
      return null;
    let o = "", g = "", c = "", E = "";
    if (a.includes(";")) {
      const h = { position: 0 };
      o = r(";", a, h), g = a.slice(h.position);
    } else
      o = a;
    if (!o.includes("="))
      E = o;
    else {
      const h = { position: 0 };
      c = r(
        "=",
        o,
        h
      ), E = o.slice(h.position + 1);
    }
    return c = c.trim(), E = E.trim(), c.length + E.length > t ? null : {
      name: c,
      value: E,
      ...i(g)
    };
  }
  function i(a, o = {}) {
    if (a.length === 0)
      return o;
    s(a[0] === ";"), a = a.slice(1);
    let g = "";
    a.includes(";") ? (g = r(
      ";",
      a,
      { position: 0 }
    ), a = a.slice(g.length)) : (g = a, a = "");
    let c = "", E = "";
    if (g.includes("=")) {
      const Q = { position: 0 };
      c = r(
        "=",
        g,
        Q
      ), E = g.slice(Q.position + 1);
    } else
      c = g;
    if (c = c.trim(), E = E.trim(), E.length > e)
      return i(a, o);
    const h = c.toLowerCase();
    if (h === "expires") {
      const Q = new Date(E);
      o.expires = Q;
    } else if (h === "max-age") {
      const Q = E.charCodeAt(0);
      if ((Q < 48 || Q > 57) && E[0] !== "-" || !/^\d+$/.test(E))
        return i(a, o);
      const B = Number(E);
      o.maxAge = B;
    } else if (h === "domain") {
      let Q = E;
      Q[0] === "." && (Q = Q.slice(1)), Q = Q.toLowerCase(), o.domain = Q;
    } else if (h === "path") {
      let Q = "";
      E.length === 0 || E[0] !== "/" ? Q = "/" : Q = E, o.path = Q;
    } else if (h === "secure")
      o.secure = !0;
    else if (h === "httponly")
      o.httpOnly = !0;
    else if (h === "samesite") {
      let Q = "Default";
      const B = E.toLowerCase();
      B.includes("none") && (Q = "None"), B.includes("strict") && (Q = "Strict"), B.includes("lax") && (Q = "Lax"), o.sameSite = Q;
    } else
      o.unparsed ?? (o.unparsed = []), o.unparsed.push(`${c}=${E}`);
    return i(a, o);
  }
  return hg = {
    parseSetCookie: n,
    parseUnparsedAttributes: i
  }, hg;
}
var Eg, cu;
function mR() {
  if (cu)
    return Eg;
  cu = 1;
  const { parseSetCookie: t } = pR(), { stringify: e, getHeadersList: A } = vB(), { webidl: r } = VA(), { Headers: s } = In();
  function n(g) {
    r.argumentLengthCheck(arguments, 1, { header: "getCookies" }), r.brandCheck(g, s, { strict: !1 });
    const c = g.get("cookie"), E = {};
    if (!c)
      return E;
    for (const h of c.split(";")) {
      const [Q, ...B] = h.split("=");
      E[Q.trim()] = B.join("=");
    }
    return E;
  }
  function i(g, c, E) {
    r.argumentLengthCheck(arguments, 2, { header: "deleteCookie" }), r.brandCheck(g, s, { strict: !1 }), c = r.converters.DOMString(c), E = r.converters.DeleteCookieAttributes(E), o(g, {
      name: c,
      value: "",
      expires: /* @__PURE__ */ new Date(0),
      ...E
    });
  }
  function a(g) {
    r.argumentLengthCheck(arguments, 1, { header: "getSetCookies" }), r.brandCheck(g, s, { strict: !1 });
    const c = A(g).cookies;
    return c ? c.map((E) => t(Array.isArray(E) ? E[1] : E)) : [];
  }
  function o(g, c) {
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
    getSetCookies: a,
    setCookie: o
  }, Eg;
}
var ug, gu;
function Vi() {
  if (gu)
    return ug;
  gu = 1;
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
var Qg, lu;
function ka() {
  return lu || (lu = 1, Qg = {
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
var Cg, hu;
function LB() {
  var a, g, E;
  if (hu)
    return Cg;
  hu = 1;
  const { webidl: t } = VA(), { kEnumerableProperty: e } = de, { MessagePort: A } = gQ, o = class o extends Event {
    constructor(u, I = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), u = t.converters.DOMString(u), I = t.converters.MessageEventInit(I);
      super(u, I);
      N(this, a, void 0);
      b(this, a, I);
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
    initMessageEvent(u, I = !1, C = !1, d = null, f = "", w = "", m = null, y = []) {
      return t.brandCheck(this, o), t.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new o(u, {
        bubbles: I,
        cancelable: C,
        data: d,
        origin: f,
        lastEventId: w,
        source: m,
        ports: y
      });
    }
  };
  a = new WeakMap();
  let r = o;
  const c = class c extends Event {
    constructor(u, I = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), u = t.converters.DOMString(u), I = t.converters.CloseEventInit(I);
      super(u, I);
      N(this, g, void 0);
      b(this, g, I);
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
    constructor(u, I) {
      t.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" });
      super(u, I);
      N(this, E, void 0);
      u = t.converters.DOMString(u), I = t.converters.ErrorEventInit(I ?? {}), b(this, E, I);
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
var Bg, Eu;
function vl() {
  if (Eu)
    return Bg;
  Eu = 1;
  const { kReadyState: t, kController: e, kResponse: A, kBinaryType: r, kWebSocketURL: s } = ka(), { states: n, opcodes: i } = Vi(), { MessageEvent: a, ErrorEvent: o } = LB();
  function g(C) {
    return C[t] === n.OPEN;
  }
  function c(C) {
    return C[t] === n.CLOSING;
  }
  function E(C) {
    return C[t] === n.CLOSED;
  }
  function h(C, d, f = Event, w) {
    const m = new f(C, w);
    d.dispatchEvent(m);
  }
  function Q(C, d, f) {
    if (C[t] !== n.OPEN)
      return;
    let w;
    if (d === i.TEXT)
      try {
        w = new TextDecoder("utf-8", { fatal: !0 }).decode(f);
      } catch {
        I(C, "Received invalid UTF-8 in text frame.");
        return;
      }
    else
      d === i.BINARY && (C[r] === "blob" ? w = new Blob([f]) : w = new Uint8Array(f).buffer);
    h("message", C, a, {
      origin: C[s].origin,
      data: w
    });
  }
  function B(C) {
    if (C.length === 0)
      return !1;
    for (const d of C) {
      const f = d.charCodeAt(0);
      if (f < 33 || f > 126 || d === "(" || d === ")" || d === "<" || d === ">" || d === "@" || d === "," || d === ";" || d === ":" || d === "\\" || d === '"' || d === "/" || d === "[" || d === "]" || d === "?" || d === "=" || d === "{" || d === "}" || f === 32 || // SP
      f === 9)
        return !1;
    }
    return !0;
  }
  function u(C) {
    return C >= 1e3 && C < 1015 ? C !== 1004 && // reserved
    C !== 1005 && // "MUST NOT be set as a status code"
    C !== 1006 : C >= 3e3 && C <= 4999;
  }
  function I(C, d) {
    const { [e]: f, [A]: w } = C;
    f.abort(), w != null && w.socket && !w.socket.destroyed && w.socket.destroy(), d && h("error", C, o, {
      error: new Error(d)
    });
  }
  return Bg = {
    isEstablished: g,
    isClosing: c,
    isClosed: E,
    fireEvent: h,
    isValidSubprotocol: B,
    isValidStatusCode: u,
    failWebsocketConnection: I,
    websocketMessageReceived: Q
  }, Bg;
}
var Ig, uu;
function wR() {
  if (uu)
    return Ig;
  uu = 1;
  const t = EQ, { uid: e, states: A } = Vi(), {
    kReadyState: r,
    kSentClose: s,
    kByteParser: n,
    kReceivedClose: i
  } = ka(), { fireEvent: a, failWebsocketConnection: o } = vl(), { CloseEvent: g } = LB(), { makeRequest: c } = ba(), { fetching: E } = Ul(), { Headers: h } = In(), { getGlobalDispatcher: Q } = Pi, { kHeadersList: B } = Ye, u = {};
  u.open = t.channel("undici:websocket:open"), u.close = t.channel("undici:websocket:close"), u.socketError = t.channel("undici:websocket:socket_error");
  let I;
  try {
    I = require("crypto");
  } catch {
  }
  function C(m, y, R, S, v) {
    const T = m;
    T.protocol = m.protocol === "ws:" ? "http:" : "https:";
    const z = c({
      urlList: [T],
      serviceWorkers: "none",
      referrer: "no-referrer",
      mode: "websocket",
      credentials: "include",
      cache: "no-store",
      redirect: "error"
    });
    if (v.headers) {
      const Y = new h(v.headers)[B];
      z.headersList = Y;
    }
    const K = I.randomBytes(16).toString("base64");
    z.headersList.append("sec-websocket-key", K), z.headersList.append("sec-websocket-version", "13");
    for (const Y of y)
      z.headersList.append("sec-websocket-protocol", Y);
    const $ = "";
    return E({
      request: z,
      useParallelQueue: !0,
      dispatcher: v.dispatcher ?? Q(),
      processResponse(Y) {
        var k, q;
        if (Y.type === "error" || Y.status !== 101) {
          o(R, "Received network error or non-101 status code.");
          return;
        }
        if (y.length !== 0 && !Y.headersList.get("Sec-WebSocket-Protocol")) {
          o(R, "Server did not respond with sent protocols.");
          return;
        }
        if (((k = Y.headersList.get("Upgrade")) == null ? void 0 : k.toLowerCase()) !== "websocket") {
          o(R, 'Server did not set Upgrade header to "websocket".');
          return;
        }
        if (((q = Y.headersList.get("Connection")) == null ? void 0 : q.toLowerCase()) !== "upgrade") {
          o(R, 'Server did not set Connection header to "upgrade".');
          return;
        }
        const ee = Y.headersList.get("Sec-WebSocket-Accept"), te = I.createHash("sha1").update(K + e).digest("base64");
        if (ee !== te) {
          o(R, "Incorrect hash received in Sec-WebSocket-Accept header.");
          return;
        }
        const ne = Y.headersList.get("Sec-WebSocket-Extensions");
        if (ne !== null && ne !== $) {
          o(R, "Received different permessage-deflate than the one set.");
          return;
        }
        const Z = Y.headersList.get("Sec-WebSocket-Protocol");
        if (Z !== null && Z !== z.headersList.get("Sec-WebSocket-Protocol")) {
          o(R, "Protocol was not set in the opening handshake.");
          return;
        }
        Y.socket.on("data", d), Y.socket.on("close", f), Y.socket.on("error", w), u.open.hasSubscribers && u.open.publish({
          address: Y.socket.address(),
          protocol: Z,
          extensions: ne
        }), S(Y);
      }
    });
  }
  function d(m) {
    this.ws[n].write(m) || this.pause();
  }
  function f() {
    const { ws: m } = this, y = m[s] && m[i];
    let R = 1005, S = "";
    const v = m[n].closingInfo;
    v ? (R = v.code ?? 1005, S = v.reason) : m[s] || (R = 1006), m[r] = A.CLOSED, a("close", m, g, {
      wasClean: y,
      code: R,
      reason: S
    }), u.close.hasSubscribers && u.close.publish({
      websocket: m,
      code: R,
      reason: S
    });
  }
  function w(m) {
    const { ws: y } = this;
    y[r] = A.CLOSING, u.socketError.hasSubscribers && u.socketError.publish(m), this.destroy();
  }
  return Ig = {
    establishWebSocketConnection: C
  }, Ig;
}
var dg, Qu;
function MB() {
  if (Qu)
    return dg;
  Qu = 1;
  const { maxUnsigned16Bit: t } = Vi();
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
      let i = n, a = 6;
      n > t ? (a += 8, i = 127) : n > 125 && (a += 2, i = 126);
      const o = Buffer.allocUnsafe(n + a);
      o[0] = o[1] = 0, o[0] |= 128, o[0] = (o[0] & 240) + s;
      /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */
      o[a - 4] = this.maskKey[0], o[a - 3] = this.maskKey[1], o[a - 2] = this.maskKey[2], o[a - 1] = this.maskKey[3], o[1] = i, i === 126 ? o.writeUInt16BE(n, 2) : i === 127 && (o[2] = o[3] = 0, o.writeUIntBE(n, 4, 6)), o[1] |= 128;
      for (let c = 0; c < n; c++)
        o[a + c] = this.frameData[c] ^ this.maskKey[c % 4];
      return o;
    }
  }
  return dg = {
    WebsocketFrameSend: A
  }, dg;
}
var fg, Cu;
function yR() {
  var I, C, d, f, w;
  if (Cu)
    return fg;
  Cu = 1;
  const { Writable: t } = Ot, e = EQ, { parserStates: A, opcodes: r, states: s, emptyBuffer: n } = Vi(), { kReadyState: i, kSentClose: a, kResponse: o, kReceivedClose: g } = ka(), { isValidStatusCode: c, failWebsocketConnection: E, websocketMessageReceived: h } = vl(), { WebsocketFrameSend: Q } = MB(), B = {};
  B.ping = e.channel("undici:websocket:ping"), B.pong = e.channel("undici:websocket:pong");
  class u extends t {
    constructor(R) {
      super();
      N(this, I, []);
      N(this, C, 0);
      N(this, d, A.INFO);
      N(this, f, {});
      N(this, w, []);
      this.ws = R;
    }
    /**
     * @param {Buffer} chunk
     * @param {() => void} callback
     */
    _write(R, S, v) {
      l(this, I).push(R), b(this, C, l(this, C) + R.length), this.run(v);
    }
    /**
     * Runs whenever a new chunk is received.
     * Callback is called whenever there are no more chunks buffering,
     * or not enough bytes are buffered to parse.
     */
    run(R) {
      var S;
      for (; ; ) {
        if (l(this, d) === A.INFO) {
          if (l(this, C) < 2)
            return R();
          const v = this.consume(2);
          if (l(this, f).fin = (v[0] & 128) !== 0, l(this, f).opcode = v[0] & 15, (S = l(this, f)).originalOpcode ?? (S.originalOpcode = l(this, f).opcode), l(this, f).fragmented = !l(this, f).fin && l(this, f).opcode !== r.CONTINUATION, l(this, f).fragmented && l(this, f).opcode !== r.BINARY && l(this, f).opcode !== r.TEXT) {
            E(this.ws, "Invalid frame type was fragmented.");
            return;
          }
          const T = v[1] & 127;
          if (T <= 125 ? (l(this, f).payloadLength = T, b(this, d, A.READ_DATA)) : T === 126 ? b(this, d, A.PAYLOADLENGTH_16) : T === 127 && b(this, d, A.PAYLOADLENGTH_64), l(this, f).fragmented && T > 125) {
            E(this.ws, "Fragmented frame exceeded 125 bytes.");
            return;
          } else if ((l(this, f).opcode === r.PING || l(this, f).opcode === r.PONG || l(this, f).opcode === r.CLOSE) && T > 125) {
            E(this.ws, "Payload length for control frame exceeded 125 bytes.");
            return;
          } else if (l(this, f).opcode === r.CLOSE) {
            if (T === 1) {
              E(this.ws, "Received close frame with a 1-byte body.");
              return;
            }
            const z = this.consume(T);
            if (l(this, f).closeInfo = this.parseCloseBody(!1, z), !this.ws[a]) {
              const K = Buffer.allocUnsafe(2);
              K.writeUInt16BE(l(this, f).closeInfo.code, 0);
              const $ = new Q(K);
              this.ws[o].socket.write(
                $.createFrame(r.CLOSE),
                (ue) => {
                  ue || (this.ws[a] = !0);
                }
              );
            }
            this.ws[i] = s.CLOSING, this.ws[g] = !0, this.end();
            return;
          } else if (l(this, f).opcode === r.PING) {
            const z = this.consume(T);
            if (!this.ws[g]) {
              const K = new Q(z);
              this.ws[o].socket.write(K.createFrame(r.PONG)), B.ping.hasSubscribers && B.ping.publish({
                payload: z
              });
            }
            if (b(this, d, A.INFO), l(this, C) > 0)
              continue;
            R();
            return;
          } else if (l(this, f).opcode === r.PONG) {
            const z = this.consume(T);
            if (B.pong.hasSubscribers && B.pong.publish({
              payload: z
            }), l(this, C) > 0)
              continue;
            R();
            return;
          }
        } else if (l(this, d) === A.PAYLOADLENGTH_16) {
          if (l(this, C) < 2)
            return R();
          const v = this.consume(2);
          l(this, f).payloadLength = v.readUInt16BE(0), b(this, d, A.READ_DATA);
        } else if (l(this, d) === A.PAYLOADLENGTH_64) {
          if (l(this, C) < 8)
            return R();
          const v = this.consume(8), T = v.readUInt32BE(0);
          if (T > 2 ** 31 - 1) {
            E(this.ws, "Received payload length > 2^31 bytes.");
            return;
          }
          const z = v.readUInt32BE(4);
          l(this, f).payloadLength = (T << 8) + z, b(this, d, A.READ_DATA);
        } else if (l(this, d) === A.READ_DATA) {
          if (l(this, C) < l(this, f).payloadLength)
            return R();
          if (l(this, C) >= l(this, f).payloadLength) {
            const v = this.consume(l(this, f).payloadLength);
            if (l(this, w).push(v), !l(this, f).fragmented || l(this, f).fin && l(this, f).opcode === r.CONTINUATION) {
              const T = Buffer.concat(l(this, w));
              h(this.ws, l(this, f).originalOpcode, T), b(this, f, {}), l(this, w).length = 0;
            }
            b(this, d, A.INFO);
          }
        }
        if (!(l(this, C) > 0)) {
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
      if (R > l(this, C))
        return null;
      if (R === 0)
        return n;
      if (l(this, I)[0].length === R)
        return b(this, C, l(this, C) - l(this, I)[0].length), l(this, I).shift();
      const S = Buffer.allocUnsafe(R);
      let v = 0;
      for (; v !== R; ) {
        const T = l(this, I)[0], { length: z } = T;
        if (z + v === R) {
          S.set(l(this, I).shift(), v);
          break;
        } else if (z + v > R) {
          S.set(T.subarray(0, R - v), v), l(this, I)[0] = T.subarray(R - v);
          break;
        } else
          S.set(l(this, I).shift(), v), v += T.length;
      }
      return b(this, C, l(this, C) - R), S;
    }
    parseCloseBody(R, S) {
      let v;
      if (S.length >= 2 && (v = S.readUInt16BE(0)), R)
        return c(v) ? { code: v } : null;
      let T = S.subarray(2);
      if (T[0] === 239 && T[1] === 187 && T[2] === 191 && (T = T.subarray(3)), v !== void 0 && !c(v))
        return null;
      try {
        T = new TextDecoder("utf-8", { fatal: !0 }).decode(T);
      } catch {
        return null;
      }
      return { code: v, reason: T };
    }
    get closingInfo() {
      return l(this, f).closeInfo;
    }
  }
  return I = new WeakMap(), C = new WeakMap(), d = new WeakMap(), f = new WeakMap(), w = new WeakMap(), fg = {
    ByteParser: u
  }, fg;
}
var pg, Bu;
function RR() {
  var $, ue, Y, ee, te, GB;
  if (Bu)
    return pg;
  Bu = 1;
  const { webidl: t } = VA(), { DOMException: e } = ps(), { URLSerializer: A } = Ht(), { getGlobalOrigin: r } = Ji(), { staticPropertyDescriptors: s, states: n, opcodes: i, emptyBuffer: a } = Vi(), {
    kWebSocketURL: o,
    kReadyState: g,
    kController: c,
    kBinaryType: E,
    kResponse: h,
    kSentClose: Q,
    kByteParser: B
  } = ka(), { isEstablished: u, isClosing: I, isValidSubprotocol: C, failWebsocketConnection: d, fireEvent: f } = vl(), { establishWebSocketConnection: w } = wR(), { WebsocketFrameSend: m } = MB(), { ByteParser: y } = yR(), { kEnumerableProperty: R, isBlobLike: S } = de, { getGlobalDispatcher: v } = Pi, { types: T } = _t;
  let z = !1;
  const Z = class Z extends EventTarget {
    /**
     * @param {string} url
     * @param {string|string[]} protocols
     */
    constructor(F, p = []) {
      super();
      /**
       * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
       */
      N(this, te);
      N(this, $, {
        open: null,
        error: null,
        close: null,
        message: null
      });
      N(this, ue, 0);
      N(this, Y, "");
      N(this, ee, "");
      t.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), z || (z = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
        code: "UNDICI-WS"
      }));
      const M = t.converters["DOMString or sequence<DOMString> or WebSocketInit"](p);
      F = t.converters.USVString(F), p = M.protocols;
      const J = r();
      let x;
      try {
        x = new URL(F, J);
      } catch (H) {
        throw new e(H, "SyntaxError");
      }
      if (x.protocol === "http:" ? x.protocol = "ws:" : x.protocol === "https:" && (x.protocol = "wss:"), x.protocol !== "ws:" && x.protocol !== "wss:")
        throw new e(
          `Expected a ws: or wss: protocol, got ${x.protocol}`,
          "SyntaxError"
        );
      if (x.hash || x.href.endsWith("#"))
        throw new e("Got fragment", "SyntaxError");
      if (typeof p == "string" && (p = [p]), p.length !== new Set(p.map((H) => H.toLowerCase())).size)
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      if (p.length > 0 && !p.every((H) => C(H)))
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      this[o] = new URL(x.href), this[c] = w(
        x,
        p,
        this,
        (H) => _(this, te, GB).call(this, H),
        M
      ), this[g] = Z.CONNECTING, this[E] = "blob";
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-close
     * @param {number|undefined} code
     * @param {string|undefined} reason
     */
    close(F = void 0, p = void 0) {
      if (t.brandCheck(this, Z), F !== void 0 && (F = t.converters["unsigned short"](F, { clamp: !0 })), p !== void 0 && (p = t.converters.USVString(p)), F !== void 0 && F !== 1e3 && (F < 3e3 || F > 4999))
        throw new e("invalid code", "InvalidAccessError");
      let M = 0;
      if (p !== void 0 && (M = Buffer.byteLength(p), M > 123))
        throw new e(
          `Reason must be less than 123 bytes; received ${M}`,
          "SyntaxError"
        );
      if (!(this[g] === Z.CLOSING || this[g] === Z.CLOSED))
        if (!u(this))
          d(this, "Connection was closed before it was established."), this[g] = Z.CLOSING;
        else if (I(this))
          this[g] = Z.CLOSING;
        else {
          const J = new m();
          F !== void 0 && p === void 0 ? (J.frameData = Buffer.allocUnsafe(2), J.frameData.writeUInt16BE(F, 0)) : F !== void 0 && p !== void 0 ? (J.frameData = Buffer.allocUnsafe(2 + M), J.frameData.writeUInt16BE(F, 0), J.frameData.write(p, 2, "utf-8")) : J.frameData = a, this[h].socket.write(J.createFrame(i.CLOSE), (H) => {
            H || (this[Q] = !0);
          }), this[g] = n.CLOSING;
        }
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-send
     * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
     */
    send(F) {
      if (t.brandCheck(this, Z), t.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), F = t.converters.WebSocketSendData(F), this[g] === Z.CONNECTING)
        throw new e("Sent before connected.", "InvalidStateError");
      if (!u(this) || I(this))
        return;
      const p = this[h].socket;
      if (typeof F == "string") {
        const M = Buffer.from(F), x = new m(M).createFrame(i.TEXT);
        b(this, ue, l(this, ue) + M.byteLength), p.write(x, () => {
          b(this, ue, l(this, ue) - M.byteLength);
        });
      } else if (T.isArrayBuffer(F)) {
        const M = Buffer.from(F), x = new m(M).createFrame(i.BINARY);
        b(this, ue, l(this, ue) + M.byteLength), p.write(x, () => {
          b(this, ue, l(this, ue) - M.byteLength);
        });
      } else if (ArrayBuffer.isView(F)) {
        const M = Buffer.from(F, F.byteOffset, F.byteLength), x = new m(M).createFrame(i.BINARY);
        b(this, ue, l(this, ue) + M.byteLength), p.write(x, () => {
          b(this, ue, l(this, ue) - M.byteLength);
        });
      } else if (S(F)) {
        const M = new m();
        F.arrayBuffer().then((J) => {
          const x = Buffer.from(J);
          M.frameData = x;
          const H = M.createFrame(i.BINARY);
          b(this, ue, l(this, ue) + x.byteLength), p.write(H, () => {
            b(this, ue, l(this, ue) - x.byteLength);
          });
        });
      }
    }
    get readyState() {
      return t.brandCheck(this, Z), this[g];
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
      return t.brandCheck(this, Z), l(this, $).open;
    }
    set onopen(F) {
      t.brandCheck(this, Z), l(this, $).open && this.removeEventListener("open", l(this, $).open), typeof F == "function" ? (l(this, $).open = F, this.addEventListener("open", F)) : l(this, $).open = null;
    }
    get onerror() {
      return t.brandCheck(this, Z), l(this, $).error;
    }
    set onerror(F) {
      t.brandCheck(this, Z), l(this, $).error && this.removeEventListener("error", l(this, $).error), typeof F == "function" ? (l(this, $).error = F, this.addEventListener("error", F)) : l(this, $).error = null;
    }
    get onclose() {
      return t.brandCheck(this, Z), l(this, $).close;
    }
    set onclose(F) {
      t.brandCheck(this, Z), l(this, $).close && this.removeEventListener("close", l(this, $).close), typeof F == "function" ? (l(this, $).close = F, this.addEventListener("close", F)) : l(this, $).close = null;
    }
    get onmessage() {
      return t.brandCheck(this, Z), l(this, $).message;
    }
    set onmessage(F) {
      t.brandCheck(this, Z), l(this, $).message && this.removeEventListener("message", l(this, $).message), typeof F == "function" ? (l(this, $).message = F, this.addEventListener("message", F)) : l(this, $).message = null;
    }
    get binaryType() {
      return t.brandCheck(this, Z), this[E];
    }
    set binaryType(F) {
      t.brandCheck(this, Z), F !== "blob" && F !== "arraybuffer" ? this[E] = "blob" : this[E] = F;
    }
  };
  $ = new WeakMap(), ue = new WeakMap(), Y = new WeakMap(), ee = new WeakMap(), te = new WeakSet(), GB = function(F) {
    this[h] = F;
    const p = new y(this);
    p.on("drain", function() {
      this.ws[h].socket.resume();
    }), F.socket.ws = this, this[B] = p, this[g] = n.OPEN;
    const M = F.headersList.get("sec-websocket-extensions");
    M !== null && b(this, ee, M);
    const J = F.headersList.get("sec-websocket-protocol");
    J !== null && b(this, Y, J), f("open", this);
  };
  let K = Z;
  return K.CONNECTING = K.prototype.CONNECTING = n.CONNECTING, K.OPEN = K.prototype.OPEN = n.OPEN, K.CLOSING = K.prototype.CLOSING = n.CLOSING, K.CLOSED = K.prototype.CLOSED = n.CLOSED, Object.defineProperties(K.prototype, {
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
  }, pg = {
    WebSocket: K
  }, pg;
}
const DR = wa, YB = bl, xB = ke, bR = _i, kR = Fw, SR = ya, Bs = de, { InvalidArgumentError: fo } = xB, dn = Bn, FR = pa, NR = DB, UR = P0, TR = bB, vR = QB, LR = nR, MR = cR, { getGlobalDispatcher: JB, setGlobalDispatcher: GR } = Pi, YR = hR, xR = UC, JR = Sl;
let Zg;
try {
  require("crypto"), Zg = !0;
} catch {
  Zg = !1;
}
Object.assign(YB.prototype, dn);
Ee.Dispatcher = YB;
Ee.Client = DR;
Ee.Pool = bR;
Ee.BalancedPool = kR;
Ee.Agent = SR;
Ee.ProxyAgent = LR;
Ee.RetryHandler = MR;
Ee.DecoratorHandler = YR;
Ee.RedirectHandler = xR;
Ee.createRedirectInterceptor = JR;
Ee.buildConnector = FR;
Ee.errors = xB;
function Wi(t) {
  return (e, A, r) => {
    if (typeof A == "function" && (r = A, A = null), !e || typeof e != "string" && typeof e != "object" && !(e instanceof URL))
      throw new fo("invalid url");
    if (A != null && typeof A != "object")
      throw new fo("invalid opts");
    if (A && A.path != null) {
      if (typeof A.path != "string")
        throw new fo("invalid opts.path");
      let i = A.path;
      A.path.startsWith("/") || (i = `/${i}`), e = new URL(Bs.parseOrigin(e).origin + i);
    } else
      A || (A = typeof e == "object" ? e : {}), e = Bs.parseURL(e);
    const { agent: s, dispatcher: n = JB() } = A;
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
Ee.setGlobalDispatcher = GR;
Ee.getGlobalDispatcher = JB;
if (Bs.nodeMajor > 16 || Bs.nodeMajor === 16 && Bs.nodeMinor >= 8) {
  let t = null;
  Ee.fetch = async function(i) {
    t || (t = Ul().fetch);
    try {
      return await t(...arguments);
    } catch (a) {
      throw typeof a == "object" && Error.captureStackTrace(a, this), a;
    }
  }, Ee.Headers = In().Headers, Ee.Response = Nl().Response, Ee.Request = ba().Request, Ee.FormData = Dl().FormData, Ee.File = Rl().File, Ee.FileReader = CR().FileReader;
  const { setGlobalOrigin: e, getGlobalOrigin: A } = Ji();
  Ee.setGlobalOrigin = e, Ee.getGlobalOrigin = A;
  const { CacheStorage: r } = dR(), { kConstruct: s } = Tl();
  Ee.caches = new r(s);
}
if (Bs.nodeMajor >= 16) {
  const { deleteCookie: t, getCookies: e, getSetCookies: A, setCookie: r } = mR();
  Ee.deleteCookie = t, Ee.getCookies = e, Ee.getSetCookies = A, Ee.setCookie = r;
  const { parseMIMEType: s, serializeAMimeType: n } = Ht();
  Ee.parseMIMEType = s, Ee.serializeAMimeType = n;
}
if (Bs.nodeMajor >= 18 && Zg) {
  const { WebSocket: t } = RR();
  Ee.WebSocket = t;
}
Ee.request = Wi(dn.request);
Ee.stream = Wi(dn.stream);
Ee.pipeline = Wi(dn.pipeline);
Ee.connect = Wi(dn.connect);
Ee.upgrade = Wi(dn.upgrade);
Ee.MockClient = NR;
Ee.MockPool = TR;
Ee.MockAgent = UR;
Ee.mockErrors = vR;
var _R = le && le.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), OR = le && le.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), Sa = le && le.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && _R(e, t, A);
  return OR(e, t), e;
}, Ze = le && le.__awaiter || function(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function a(c) {
      try {
        g(r.next(c));
      } catch (E) {
        i(E);
      }
    }
    function o(c) {
      try {
        g(r.throw(c));
      } catch (E) {
        i(E);
      }
    }
    function g(c) {
      c.done ? n(c.value) : s(c.value).then(a, o);
    }
    g((r = r.apply(t, e || [])).next());
  });
};
Object.defineProperty(CA, "__esModule", { value: !0 });
CA.HttpClient = CA.isHttps = CA.HttpClientResponse = CA.HttpClientError = CA.getProxyUrl = CA.MediaTypes = CA.Headers = CA.HttpCodes = void 0;
const po = Sa(un), mg = Sa(oQ), $g = Sa(an), mo = Sa(yf), HR = Ee;
var ct;
(function(t) {
  t[t.OK = 200] = "OK", t[t.MultipleChoices = 300] = "MultipleChoices", t[t.MovedPermanently = 301] = "MovedPermanently", t[t.ResourceMoved = 302] = "ResourceMoved", t[t.SeeOther = 303] = "SeeOther", t[t.NotModified = 304] = "NotModified", t[t.UseProxy = 305] = "UseProxy", t[t.SwitchProxy = 306] = "SwitchProxy", t[t.TemporaryRedirect = 307] = "TemporaryRedirect", t[t.PermanentRedirect = 308] = "PermanentRedirect", t[t.BadRequest = 400] = "BadRequest", t[t.Unauthorized = 401] = "Unauthorized", t[t.PaymentRequired = 402] = "PaymentRequired", t[t.Forbidden = 403] = "Forbidden", t[t.NotFound = 404] = "NotFound", t[t.MethodNotAllowed = 405] = "MethodNotAllowed", t[t.NotAcceptable = 406] = "NotAcceptable", t[t.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", t[t.RequestTimeout = 408] = "RequestTimeout", t[t.Conflict = 409] = "Conflict", t[t.Gone = 410] = "Gone", t[t.TooManyRequests = 429] = "TooManyRequests", t[t.InternalServerError = 500] = "InternalServerError", t[t.NotImplemented = 501] = "NotImplemented", t[t.BadGateway = 502] = "BadGateway", t[t.ServiceUnavailable = 503] = "ServiceUnavailable", t[t.GatewayTimeout = 504] = "GatewayTimeout";
})(ct || (CA.HttpCodes = ct = {}));
var bA;
(function(t) {
  t.Accept = "accept", t.ContentType = "content-type";
})(bA || (CA.Headers = bA = {}));
var Xt;
(function(t) {
  t.ApplicationJson = "application/json";
})(Xt || (CA.MediaTypes = Xt = {}));
function PR(t) {
  const e = $g.getProxyUrl(new URL(t));
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
], qR = ["OPTIONS", "GET", "DELETE", "HEAD"], jR = 10, ZR = 5;
class Fa extends Error {
  constructor(e, A) {
    super(e), this.name = "HttpClientError", this.statusCode = A, Object.setPrototypeOf(this, Fa.prototype);
  }
}
CA.HttpClientError = Fa;
class _B {
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
CA.HttpClientResponse = _B;
function $R(t) {
  return new URL(t).protocol === "https:";
}
CA.isHttps = $R;
class zR {
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
      A[bA.Accept] = this._getExistingOrDefaultHeader(A, bA.Accept, Xt.ApplicationJson);
      const r = yield this.get(e, A);
      return this._processResponse(r, this.requestOptions);
    });
  }
  postJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[bA.Accept] = this._getExistingOrDefaultHeader(r, bA.Accept, Xt.ApplicationJson), r[bA.ContentType] = this._getExistingOrDefaultHeader(r, bA.ContentType, Xt.ApplicationJson);
      const n = yield this.post(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  putJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[bA.Accept] = this._getExistingOrDefaultHeader(r, bA.Accept, Xt.ApplicationJson), r[bA.ContentType] = this._getExistingOrDefaultHeader(r, bA.ContentType, Xt.ApplicationJson);
      const n = yield this.put(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  patchJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[bA.Accept] = this._getExistingOrDefaultHeader(r, bA.Accept, Xt.ApplicationJson), r[bA.ContentType] = this._getExistingOrDefaultHeader(r, bA.ContentType, Xt.ApplicationJson);
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
      const a = this._allowRetries && qR.includes(e) ? this._maxRetries + 1 : 1;
      let o = 0, g;
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
            for (const Q in s)
              Q.toLowerCase() === "authorization" && delete s[Q];
          i = this._prepareRequest(e, h, s), g = yield this.requestRaw(i, r), c--;
        }
        if (!g.message.statusCode || !WR.includes(g.message.statusCode))
          return g;
        o += 1, o < a && (yield g.readBody(), yield this._performExponentialBackoff(o));
      } while (o < a);
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
    function n(o, g) {
      s || (s = !0, r(o, g));
    }
    const i = e.httpModule.request(e.options, (o) => {
      const g = new _B(o);
      n(void 0, g);
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
    const A = new URL(e), r = $g.getProxyUrl(A);
    if (r && r.hostname)
      return this._getProxyAgentDispatcher(A, r);
  }
  _prepareRequest(e, A, r) {
    const s = {};
    s.parsedUrl = A;
    const n = s.parsedUrl.protocol === "https:";
    s.httpModule = n ? mg : po;
    const i = n ? 443 : 80;
    if (s.options = {}, s.options.host = s.parsedUrl.hostname, s.options.port = s.parsedUrl.port ? parseInt(s.parsedUrl.port) : i, s.options.path = (s.parsedUrl.pathname || "") + (s.parsedUrl.search || ""), s.options.method = e, s.options.headers = this._mergeHeaders(r), this.userAgent != null && (s.options.headers["user-agent"] = this.userAgent), s.options.agent = this._getAgent(s.parsedUrl), this.handlers)
      for (const a of this.handlers)
        a.prepareRequest(s.options);
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
    const r = $g.getProxyUrl(e), s = r && r.hostname;
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
      const g = r.protocol === "https:";
      n ? o = g ? mo.httpsOverHttps : mo.httpsOverHttp : o = g ? mo.httpOverHttps : mo.httpOverHttp, A = o(a), this._proxyAgent = A;
    }
    if (this._keepAlive && !A) {
      const a = { keepAlive: this._keepAlive, maxSockets: i };
      A = n ? new mg.Agent(a) : new po.Agent(a), this._agent = A;
    }
    return A || (A = n ? mg.globalAgent : po.globalAgent), n && this._ignoreSslError && (A.options = Object.assign(A.options || {}, {
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
    return Ze(this, void 0, void 0, function* () {
      e = Math.min(jR, e);
      const A = ZR * Math.pow(2, e);
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
        n === ct.NotFound && r(i);
        function a(c, E) {
          if (typeof E == "string") {
            const h = new Date(E);
            if (!isNaN(h.valueOf()))
              return h;
          }
          return E;
        }
        let o, g;
        try {
          g = yield e.readBody(), g && g.length > 0 && (A && A.deserializeDates ? o = JSON.parse(g, a) : o = JSON.parse(g), i.result = o), i.headers = e.message.headers;
        } catch {
        }
        if (n > 299) {
          let c;
          o && o.message ? c = o.message : g && g.length > 0 ? c = g : c = `Failed request: (${n})`;
          const E = new Fa(c, n);
          E.result = i.result, s(E);
        } else
          r(i);
      }));
    });
  }
}
CA.HttpClient = zR;
const wo = (t) => Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {});
var Gr = {}, Ll = le && le.__awaiter || function(t, e, A, r) {
  function s(n) {
    return n instanceof A ? n : new A(function(i) {
      i(n);
    });
  }
  return new (A || (A = Promise))(function(n, i) {
    function a(c) {
      try {
        g(r.next(c));
      } catch (E) {
        i(E);
      }
    }
    function o(c) {
      try {
        g(r.throw(c));
      } catch (E) {
        i(E);
      }
    }
    function g(c) {
      c.done ? n(c.value) : s(c.value).then(a, o);
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
    return Ll(this, void 0, void 0, function* () {
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
    return Ll(this, void 0, void 0, function* () {
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
    return Ll(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
Gr.PersonalAccessTokenCredentialHandler = eD;
var Iu;
function AD() {
  if (Iu)
    return wn;
  Iu = 1;
  var t = le && le.__awaiter || function(n, i, a, o) {
    function g(c) {
      return c instanceof a ? c : new a(function(E) {
        E(c);
      });
    }
    return new (a || (a = Promise))(function(c, E) {
      function h(u) {
        try {
          B(o.next(u));
        } catch (I) {
          E(I);
        }
      }
      function Q(u) {
        try {
          B(o.throw(u));
        } catch (I) {
          E(I);
        }
      }
      function B(u) {
        u.done ? c(u.value) : g(u.value).then(h, Q);
      }
      B((o = o.apply(n, i || [])).next());
    });
  };
  Object.defineProperty(wn, "__esModule", { value: !0 }), wn.OidcClient = void 0;
  const e = CA, A = Gr, r = OB();
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
        const c = (a = (yield s.createHttpClient().getJson(i).catch((E) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${E.statusCode}
 
        Error Message: ${E.message}`);
        })).result) === null || a === void 0 ? void 0 : a.value;
        if (!c)
          throw new Error("Response json body do not have ID Token field");
        return c;
      });
    }
    static getIDToken(i) {
      return t(this, void 0, void 0, function* () {
        try {
          let a = s.getIDTokenUrl();
          if (i) {
            const g = encodeURIComponent(i);
            a = `${a}&audience=${g}`;
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
  return wn.OidcClient = s, wn;
}
var wg = {}, du;
function fu() {
  return du || (du = 1, function(t) {
    var e = le && le.__awaiter || function(g, c, E, h) {
      function Q(B) {
        return B instanceof E ? B : new E(function(u) {
          u(B);
        });
      }
      return new (E || (E = Promise))(function(B, u) {
        function I(f) {
          try {
            d(h.next(f));
          } catch (w) {
            u(w);
          }
        }
        function C(f) {
          try {
            d(h.throw(f));
          } catch (w) {
            u(w);
          }
        }
        function d(f) {
          f.done ? B(f.value) : Q(f.value).then(I, C);
        }
        d((h = h.apply(g, c || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.summary = t.markdownSummary = t.SUMMARY_DOCS_URL = t.SUMMARY_ENV_VAR = void 0;
    const A = Gi, r = nQ, { access: s, appendFile: n, writeFile: i } = r.promises;
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
        const Q = Object.entries(h).map(([B, u]) => ` ${B}="${u}"`).join("");
        return E ? `<${c}${Q}>${E}</${c}>` : `<${c}${Q}>`;
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
        const h = Object.assign({}, E && { lang: E }), Q = this.wrap("pre", this.wrap("code", c), h);
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
      addList(c, E = !1) {
        const h = E ? "ol" : "ul", Q = c.map((u) => this.wrap("li", u)).join(""), B = this.wrap(h, Q);
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
        const E = c.map((Q) => {
          const B = Q.map((u) => {
            if (typeof u == "string")
              return this.wrap("td", u);
            const { header: I, data: C, colspan: d, rowspan: f } = u, w = I ? "th" : "td", m = Object.assign(Object.assign({}, d && { colspan: d }), f && { rowspan: f });
            return this.wrap(w, C, m);
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
        const { width: Q, height: B } = h || {}, u = Object.assign(Object.assign({}, Q && { width: Q }), B && { height: B }), I = this.wrap("img", null, Object.assign({ src: c, alt: E }, u));
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
        const h = `h${E}`, Q = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(h) ? h : "h1", B = this.wrap(Q, c);
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
        const h = Object.assign({}, E && { cite: E }), Q = this.wrap("blockquote", c, h);
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
      addLink(c, E) {
        const h = this.wrap("a", c, { href: E });
        return this.addRaw(h).addEOL();
      }
    }
    const o = new a();
    t.markdownSummary = o, t.summary = o;
  }(wg)), wg;
}
var Zt = {}, pu;
function tD() {
  if (pu)
    return Zt;
  pu = 1;
  var t = le && le.__createBinding || (Object.create ? function(a, o, g, c) {
    c === void 0 && (c = g), Object.defineProperty(a, c, { enumerable: !0, get: function() {
      return o[g];
    } });
  } : function(a, o, g, c) {
    c === void 0 && (c = g), a[c] = o[g];
  }), e = le && le.__setModuleDefault || (Object.create ? function(a, o) {
    Object.defineProperty(a, "default", { enumerable: !0, value: o });
  } : function(a, o) {
    a.default = o;
  }), A = le && le.__importStar || function(a) {
    if (a && a.__esModule)
      return a;
    var o = {};
    if (a != null)
      for (var g in a)
        g !== "default" && Object.hasOwnProperty.call(a, g) && t(o, a, g);
    return e(o, a), o;
  };
  Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.toPlatformPath = Zt.toWin32Path = Zt.toPosixPath = void 0;
  const r = A(iQ);
  function s(a) {
    return a.replace(/[\\]/g, "/");
  }
  Zt.toPosixPath = s;
  function n(a) {
    return a.replace(/[/]/g, "\\");
  }
  Zt.toWin32Path = n;
  function i(a) {
    return a.replace(/[/\\]/g, r.sep);
  }
  return Zt.toPlatformPath = i, Zt;
}
var mu;
function OB() {
  return mu || (mu = 1, function(t) {
    var e = le && le.__createBinding || (Object.create ? function(k, q, F, p) {
      p === void 0 && (p = F), Object.defineProperty(k, p, { enumerable: !0, get: function() {
        return q[F];
      } });
    } : function(k, q, F, p) {
      p === void 0 && (p = F), k[p] = q[F];
    }), A = le && le.__setModuleDefault || (Object.create ? function(k, q) {
      Object.defineProperty(k, "default", { enumerable: !0, value: q });
    } : function(k, q) {
      k.default = q;
    }), r = le && le.__importStar || function(k) {
      if (k && k.__esModule)
        return k;
      var q = {};
      if (k != null)
        for (var F in k)
          F !== "default" && Object.hasOwnProperty.call(k, F) && e(q, k, F);
      return A(q, k), q;
    }, s = le && le.__awaiter || function(k, q, F, p) {
      function M(J) {
        return J instanceof F ? J : new F(function(x) {
          x(J);
        });
      }
      return new (F || (F = Promise))(function(J, x) {
        function H(ae) {
          try {
            P(p.next(ae));
          } catch (oe) {
            x(oe);
          }
        }
        function G(ae) {
          try {
            P(p.throw(ae));
          } catch (oe) {
            x(oe);
          }
        }
        function P(ae) {
          ae.done ? J(ae.value) : M(ae.value).then(H, G);
        }
        P((p = p.apply(k, q || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getIDToken = t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.notice = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
    const n = nn, i = on, a = xr, o = r(Gi), g = r(iQ), c = AD();
    var E;
    (function(k) {
      k[k.Success = 0] = "Success", k[k.Failure = 1] = "Failure";
    })(E = t.ExitCode || (t.ExitCode = {}));
    function h(k, q) {
      const F = a.toCommandValue(q);
      if (process.env[k] = F, process.env.GITHUB_ENV || "")
        return i.issueFileCommand("ENV", i.prepareKeyValueMessage(k, q));
      n.issueCommand("set-env", { name: k }, F);
    }
    t.exportVariable = h;
    function Q(k) {
      n.issueCommand("add-mask", {}, k);
    }
    t.setSecret = Q;
    function B(k) {
      process.env.GITHUB_PATH || "" ? i.issueFileCommand("PATH", k) : n.issueCommand("add-path", {}, k), process.env.PATH = `${k}${g.delimiter}${process.env.PATH}`;
    }
    t.addPath = B;
    function u(k, q) {
      const F = process.env[`INPUT_${k.replace(/ /g, "_").toUpperCase()}`] || "";
      if (q && q.required && !F)
        throw new Error(`Input required and not supplied: ${k}`);
      return q && q.trimWhitespace === !1 ? F : F.trim();
    }
    t.getInput = u;
    function I(k, q) {
      const F = u(k, q).split(`
`).filter((p) => p !== "");
      return q && q.trimWhitespace === !1 ? F : F.map((p) => p.trim());
    }
    t.getMultilineInput = I;
    function C(k, q) {
      const F = ["true", "True", "TRUE"], p = ["false", "False", "FALSE"], M = u(k, q);
      if (F.includes(M))
        return !0;
      if (p.includes(M))
        return !1;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${k}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    t.getBooleanInput = C;
    function d(k, q) {
      if (process.env.GITHUB_OUTPUT || "")
        return i.issueFileCommand("OUTPUT", i.prepareKeyValueMessage(k, q));
      process.stdout.write(o.EOL), n.issueCommand("set-output", { name: k }, a.toCommandValue(q));
    }
    t.setOutput = d;
    function f(k) {
      n.issue("echo", k ? "on" : "off");
    }
    t.setCommandEcho = f;
    function w(k) {
      process.exitCode = E.Failure, R(k);
    }
    t.setFailed = w;
    function m() {
      return process.env.RUNNER_DEBUG === "1";
    }
    t.isDebug = m;
    function y(k) {
      n.issueCommand("debug", {}, k);
    }
    t.debug = y;
    function R(k, q = {}) {
      n.issueCommand("error", a.toCommandProperties(q), k instanceof Error ? k.toString() : k);
    }
    t.error = R;
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
    function z(k) {
      n.issue("group", k);
    }
    t.startGroup = z;
    function K() {
      n.issue("endgroup");
    }
    t.endGroup = K;
    function $(k, q) {
      return s(this, void 0, void 0, function* () {
        z(k);
        let F;
        try {
          F = yield q();
        } finally {
          K();
        }
        return F;
      });
    }
    t.group = $;
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
        return yield c.OidcClient.getIDToken(k);
      });
    }
    t.getIDToken = ee;
    var te = fu();
    Object.defineProperty(t, "summary", { enumerable: !0, get: function() {
      return te.summary;
    } });
    var ne = fu();
    Object.defineProperty(t, "markdownSummary", { enumerable: !0, get: function() {
      return ne.markdownSummary;
    } });
    var Z = tD();
    Object.defineProperty(t, "toPosixPath", { enumerable: !0, get: function() {
      return Z.toPosixPath;
    } }), Object.defineProperty(t, "toWin32Path", { enumerable: !0, get: function() {
      return Z.toWin32Path;
    } }), Object.defineProperty(t, "toPlatformPath", { enumerable: !0, get: function() {
      return Z.toPlatformPath;
    } });
  }(Wa)), Wa;
}
var HB = OB();
function rD(t) {
  return t === null ? null : t.split(Gi.EOL).map((e) => e.trim()).filter(Boolean);
}
const sD = {
  parseList: rD
}, qi = (t, e) => {
  const A = HB.getInput(t, e);
  return !(e != null && e.required) && A === "" ? null : A;
};
function nD(t, e) {
  const A = qi(t, e);
  return A === "true" ? !0 : A === "false" ? !1 : null;
}
function iD(t, e) {
  const A = qi(t, e);
  return typeof A == "string" ? parseInt(A, 10) : null;
}
function oD(t, e) {
  return qi(t, e);
}
function aD(t, e) {
  return sD.parseList(qi(t, e));
}
const cD = (t) => qi(t) !== null, $e = {
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
}, hD = (t) => uQ(`git ls-files --exclude-standard --others ${t} | wc -l`).toString().trim() === "1", ED = (t) => uQ(`git diff --shortstat ${t} | wc -l`).toString().trim() === "1", wu = {
  isFileUntracked: hD,
  isFileChanged: ED
}, uD = (t, e) => Object.values(t)[0] === e ? {} : t, Te = uD;
var QD = PB;
function PB(t, e, A) {
  t instanceof RegExp && (t = yu(t, A)), e instanceof RegExp && (e = yu(e, A));
  var r = VB(t, e, A);
  return r && {
    start: r[0],
    end: r[1],
    pre: A.slice(0, r[0]),
    body: A.slice(r[0] + t.length, r[1]),
    post: A.slice(r[1] + e.length)
  };
}
function yu(t, e) {
  var A = e.match(t);
  return A ? A[0] : null;
}
PB.range = VB;
function VB(t, e, A) {
  var r, s, n, i, a, o = A.indexOf(t), g = A.indexOf(e, o + 1), c = o;
  if (o >= 0 && g > 0) {
    if (t === e)
      return [o, g];
    for (r = [], n = A.length; c >= 0 && !a; )
      c == o ? (r.push(c), o = A.indexOf(t, c + 1)) : r.length == 1 ? a = [r.pop(), g] : (s = r.pop(), s < n && (n = s, i = g), g = A.indexOf(e, c + 1)), c = o < g && o >= 0 ? o : g;
    r.length && (a = [n, i]);
  }
  return a;
}
var WB = QD, CD = dD, qB = "\0SLASH" + Math.random() + "\0", jB = "\0OPEN" + Math.random() + "\0", Ml = "\0CLOSE" + Math.random() + "\0", ZB = "\0COMMA" + Math.random() + "\0", $B = "\0PERIOD" + Math.random() + "\0";
function yg(t) {
  return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
}
function BD(t) {
  return t.split("\\\\").join(qB).split("\\{").join(jB).split("\\}").join(Ml).split("\\,").join(ZB).split("\\.").join($B);
}
function ID(t) {
  return t.split(qB).join("\\").split(jB).join("{").split(Ml).join("}").split(ZB).join(",").split($B).join(".");
}
function zB(t) {
  if (!t)
    return [""];
  var e = [], A = WB("{", "}", t);
  if (!A)
    return t.split(",");
  var r = A.pre, s = A.body, n = A.post, i = r.split(",");
  i[i.length - 1] += "{" + s + "}";
  var a = zB(n);
  return n.length && (i[i.length - 1] += a.shift(), i.push.apply(i, a)), e.push.apply(e, i), e;
}
function dD(t) {
  return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), Pn(BD(t), !0).map(ID)) : [];
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
function Pn(t, e) {
  var A = [], r = WB("{", "}", t);
  if (!r)
    return [t];
  var s = r.pre, n = r.post.length ? Pn(r.post, !1) : [""];
  if (/\$$/.test(r.pre))
    for (var i = 0; i < n.length; i++) {
      var a = s + "{" + r.body + "}" + n[i];
      A.push(a);
    }
  else {
    var o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body), g = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body), c = o || g, E = r.body.indexOf(",") >= 0;
    if (!c && !E)
      return r.post.match(/,.*\}/) ? (t = r.pre + "{" + r.body + Ml + r.post, Pn(t)) : [t];
    var h;
    if (c)
      h = r.body.split(/\.\./);
    else if (h = zB(r.body), h.length === 1 && (h = Pn(h[0], !1).map(fD), h.length === 1))
      return n.map(function(T) {
        return r.pre + h[0] + T;
      });
    var Q;
    if (c) {
      var B = yg(h[0]), u = yg(h[1]), I = Math.max(h[0].length, h[1].length), C = h.length == 3 ? Math.abs(yg(h[2])) : 1, d = mD, f = u < B;
      f && (C *= -1, d = wD);
      var w = h.some(pD);
      Q = [];
      for (var m = B; d(m, u); m += C) {
        var y;
        if (g)
          y = String.fromCharCode(m), y === "\\" && (y = "");
        else if (y = String(m), w) {
          var R = I - y.length;
          if (R > 0) {
            var S = new Array(R + 1).join("0");
            m < 0 ? y = "-" + S + y.slice(1) : y = S + y;
          }
        }
        Q.push(y);
      }
    } else {
      Q = [];
      for (var v = 0; v < h.length; v++)
        Q.push.apply(Q, Pn(h[v], !1));
    }
    for (var v = 0; v < Q.length; v++)
      for (var i = 0; i < n.length; i++) {
        var a = s + Q[v] + n[i];
        (!e || c || a) && A.push(a);
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
}, Tn = (t) => t.replace(/[[\]\\-]/g, "\\$&"), bD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Ru = (t) => t.join(""), kD = (t, e) => {
  const A = e;
  if (t.charAt(A) !== "[")
    throw new Error("not in a brace expression");
  const r = [], s = [];
  let n = A + 1, i = !1, a = !1, o = !1, g = !1, c = A, E = "";
  e:
    for (; n < t.length; ) {
      const u = t.charAt(n);
      if ((u === "!" || u === "^") && n === A + 1) {
        g = !0, n++;
        continue;
      }
      if (u === "]" && i && !o) {
        c = n + 1;
        break;
      }
      if (i = !0, u === "\\" && !o) {
        o = !0, n++;
        continue;
      }
      if (u === "[" && !o) {
        for (const [I, [C, d, f]] of Object.entries(DD))
          if (t.startsWith(I, n)) {
            if (E)
              return ["$.", !1, t.length - A, !0];
            n += I.length, f ? s.push(C) : r.push(C), a = a || d;
            continue e;
          }
      }
      if (o = !1, E) {
        u > E ? r.push(Tn(E) + "-" + Tn(u)) : u === E && r.push(Tn(u)), E = "", n++;
        continue;
      }
      if (t.startsWith("-]", n + 1)) {
        r.push(Tn(u + "-")), n += 2;
        continue;
      }
      if (t.startsWith("-", n + 1)) {
        E = u, n += 2;
        continue;
      }
      r.push(Tn(u)), n++;
    }
  if (c < n)
    return ["", !1, 0, !1];
  if (!r.length && !s.length)
    return ["$.", !1, t.length - A, !0];
  if (s.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !g) {
    const u = r[0].length === 2 ? r[0].slice(-1) : r[0];
    return [bD(u), !1, c - A, !1];
  }
  const h = "[" + (g ? "^" : "") + Ru(r) + "]", Q = "[" + (g ? "" : "^") + Ru(s) + "]";
  return [r.length && s.length ? "(" + h + "|" + Q + ")" : r.length ? h : Q, a, c - A, !0];
}, Ys = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/\[([^\/\\])\]/g, "$1") : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), SD = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Du = (t) => SD.has(t), FD = "(?!(?:^|/)\\.\\.?(?:$|/))", yo = "(?!\\.)", ND = /* @__PURE__ */ new Set(["[", "."]), UD = /* @__PURE__ */ new Set(["..", "."]), TD = new Set("().*{}+?[]^$\\!"), vD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Gl = "[^/]", bu = Gl + "*?", ku = Gl + "+?";
var sA, hA, Kt, Ge, Xe, br, ss, kr, er, ns, ti, ia, XB, Os, Yo, ri, zg, oa, KB;
const kA = class kA {
  constructor(e, A, r = {}) {
    N(this, ia);
    N(this, ri);
    L(this, "type");
    N(this, sA, void 0);
    N(this, hA, void 0);
    N(this, Kt, !1);
    N(this, Ge, []);
    N(this, Xe, void 0);
    N(this, br, void 0);
    N(this, ss, void 0);
    N(this, kr, !1);
    N(this, er, void 0);
    N(this, ns, void 0);
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    N(this, ti, !1);
    this.type = e, e && b(this, hA, !0), b(this, Xe, A), b(this, sA, l(this, Xe) ? l(l(this, Xe), sA) : this), b(this, er, l(this, sA) === this ? r : l(l(this, sA), er)), b(this, ss, l(this, sA) === this ? [] : l(l(this, sA), ss)), e === "!" && !l(l(this, sA), kr) && l(this, ss).push(this), b(this, br, l(this, Xe) ? l(l(this, Xe), Ge).length : 0);
  }
  get hasMagic() {
    if (l(this, hA) !== void 0)
      return l(this, hA);
    for (const e of l(this, Ge))
      if (typeof e != "string" && (e.type || e.hasMagic))
        return b(this, hA, !0);
    return l(this, hA);
  }
  // reconstructs the pattern
  toString() {
    return l(this, ns) !== void 0 ? l(this, ns) : this.type ? b(this, ns, this.type + "(" + l(this, Ge).map((e) => String(e)).join("|") + ")") : b(this, ns, l(this, Ge).map((e) => String(e)).join(""));
  }
  push(...e) {
    for (const A of e)
      if (A !== "") {
        if (typeof A != "string" && !(A instanceof kA && l(A, Xe) === this))
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
      if (!(s instanceof kA && s.type === "!"))
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
    const A = new kA(this.type, e);
    for (const r of l(this, Ge))
      A.copyIn(r);
    return A;
  }
  static fromGlob(e, A = {}) {
    var s;
    const r = new kA(null, void 0, A);
    return _(s = kA, Os, Yo).call(s, e, r, 0, A), r;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== l(this, sA))
      return l(this, sA).toMMPattern();
    const e = this.toString(), [A, r, s, n] = this.toRegExpSource();
    if (!(s || l(this, hA) || l(this, er).nocase && !l(this, er).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase()))
      return r;
    const a = (l(this, er).nocase ? "i" : "") + (n ? "u" : "");
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
    const A = e ?? !!l(this, er).dot;
    if (l(this, sA) === this && _(this, ia, XB).call(this), !this.type) {
      const g = this.isStart() && this.isEnd(), c = l(this, Ge).map((B) => {
        var f;
        const [u, I, C, d] = typeof B == "string" ? _(f = kA, oa, KB).call(f, B, l(this, hA), g) : B.toRegExpSource(e);
        return b(this, hA, l(this, hA) || C), b(this, Kt, l(this, Kt) || d), u;
      }).join("");
      let E = "";
      if (this.isStart() && typeof l(this, Ge)[0] == "string" && !(l(this, Ge).length === 1 && UD.has(l(this, Ge)[0]))) {
        const u = ND, I = (
          // dots are allowed, and the pattern starts with [ or .
          A && u.has(c.charAt(0)) || // the pattern starts with \., and then [ or .
          c.startsWith("\\.") && u.has(c.charAt(2)) || // the pattern starts with \.\., and then [ or .
          c.startsWith("\\.\\.") && u.has(c.charAt(4))
        ), C = !A && !e && u.has(c.charAt(0));
        E = I ? FD : C ? yo : "";
      }
      let h = "";
      return this.isEnd() && l(l(this, sA), kr) && ((o = l(this, Xe)) == null ? void 0 : o.type) === "!" && (h = "(?:$|\\/)"), [
        E + c + h,
        Ys(c),
        b(this, hA, !!l(this, hA)),
        l(this, Kt)
      ];
    }
    const r = this.type === "*" || this.type === "+", s = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let n = _(this, ri, zg).call(this, A);
    if (this.isStart() && this.isEnd() && !n && this.type !== "!") {
      const g = this.toString();
      return b(this, Ge, [g]), this.type = null, b(this, hA, void 0), [g, Ys(this.toString()), !1, !1];
    }
    let i = !r || e || A || !yo ? "" : _(this, ri, zg).call(this, !0);
    i === n && (i = ""), i && (n = `(?:${n})(?:${i})*?`);
    let a = "";
    if (this.type === "!" && l(this, ti))
      a = (this.isStart() && !A ? yo : "") + ku;
    else {
      const g = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !A && !e ? yo : "") + bu + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && i ? ")" : this.type === "*" && i ? ")?" : `)${this.type}`;
      a = s + n + g;
    }
    return [
      a,
      Ys(n),
      b(this, hA, !!l(this, hA)),
      l(this, Kt)
    ];
  }
};
sA = new WeakMap(), hA = new WeakMap(), Kt = new WeakMap(), Ge = new WeakMap(), Xe = new WeakMap(), br = new WeakMap(), ss = new WeakMap(), kr = new WeakMap(), er = new WeakMap(), ns = new WeakMap(), ti = new WeakMap(), ia = new WeakSet(), XB = function() {
  if (this !== l(this, sA))
    throw new Error("should only call on root");
  if (l(this, kr))
    return this;
  this.toString(), b(this, kr, !0);
  let e;
  for (; e = l(this, ss).pop(); ) {
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
}, Os = new WeakSet(), Yo = function(e, A, r, s) {
  var Q, B;
  let n = !1, i = !1, a = -1, o = !1;
  if (A.type === null) {
    let u = r, I = "";
    for (; u < e.length; ) {
      const C = e.charAt(u++);
      if (n || C === "\\") {
        n = !n, I += C;
        continue;
      }
      if (i) {
        u === a + 1 ? (C === "^" || C === "!") && (o = !0) : C === "]" && !(u === a + 2 && o) && (i = !1), I += C;
        continue;
      } else if (C === "[") {
        i = !0, a = u, o = !1, I += C;
        continue;
      }
      if (!s.noext && Du(C) && e.charAt(u) === "(") {
        A.push(I), I = "";
        const d = new kA(C, A);
        u = _(Q = kA, Os, Yo).call(Q, e, d, u, s), A.push(d);
        continue;
      }
      I += C;
    }
    return A.push(I), u;
  }
  let g = r + 1, c = new kA(null, A);
  const E = [];
  let h = "";
  for (; g < e.length; ) {
    const u = e.charAt(g++);
    if (n || u === "\\") {
      n = !n, h += u;
      continue;
    }
    if (i) {
      g === a + 1 ? (u === "^" || u === "!") && (o = !0) : u === "]" && !(g === a + 2 && o) && (i = !1), h += u;
      continue;
    } else if (u === "[") {
      i = !0, a = g, o = !1, h += u;
      continue;
    }
    if (Du(u) && e.charAt(g) === "(") {
      c.push(h), h = "";
      const I = new kA(u, c);
      c.push(I), g = _(B = kA, Os, Yo).call(B, e, I, g, s);
      continue;
    }
    if (u === "|") {
      c.push(h), h = "", E.push(c), c = new kA(null, A);
      continue;
    }
    if (u === ")")
      return h === "" && l(A, Ge).length === 0 && b(A, ti, !0), c.push(h), h = "", A.push(...E, c), g;
    h += u;
  }
  return A.type = null, b(A, hA, void 0), b(A, Ge, [e.substring(r - 1)]), g;
}, ri = new WeakSet(), zg = function(e) {
  return l(this, Ge).map((A) => {
    if (typeof A == "string")
      throw new Error("string type in extglob ast??");
    const [r, s, n, i] = A.toRegExpSource(e);
    return b(this, Kt, l(this, Kt) || i), r;
  }).filter((A) => !(this.isStart() && this.isEnd()) || !!A).join("|");
}, oa = new WeakSet(), KB = function(e, A, r = !1) {
  let s = !1, n = "", i = !1;
  for (let a = 0; a < e.length; a++) {
    const o = e.charAt(a);
    if (s) {
      s = !1, n += (TD.has(o) ? "\\" : "") + o;
      continue;
    }
    if (o === "\\") {
      a === e.length - 1 ? n += "\\\\" : s = !0;
      continue;
    }
    if (o === "[") {
      const [g, c, E, h] = kD(e, a);
      if (E) {
        n += g, i = i || c, a += E - 1, A = A || h;
        continue;
      }
    }
    if (o === "*") {
      r && e === "*" ? n += ku : n += bu, A = !0;
      continue;
    }
    if (o === "?") {
      n += Gl, A = !0;
      continue;
    }
    n += vD(o);
  }
  return [n, Ys(e), !!A, i];
}, N(kA, Os), N(kA, oa);
let ea = kA;
const eI = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&"), _A = (t, e, A = {}) => (Ko(e), !A.nocomment && e.charAt(0) === "#" ? !1 : new Jr(e, A).match(t)), LD = /^\*+([^+@!?\*\[\(]*)$/, MD = (t) => (e) => !e.startsWith(".") && e.endsWith(t), GD = (t) => (e) => e.endsWith(t), YD = (t) => (t = t.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(t)), xD = (t) => (t = t.toLowerCase(), (e) => e.toLowerCase().endsWith(t)), JD = /^\*+\.\*+$/, _D = (t) => !t.startsWith(".") && t.includes("."), OD = (t) => t !== "." && t !== ".." && t.includes("."), HD = /^\.\*+$/, PD = (t) => t !== "." && t !== ".." && t.startsWith("."), VD = /^\*+$/, WD = (t) => t.length !== 0 && !t.startsWith("."), qD = (t) => t.length !== 0 && t !== "." && t !== "..", jD = /^\?+([^+@!?\*\[\(]*)?$/, ZD = ([t, e = ""]) => {
  const A = AI([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, $D = ([t, e = ""]) => {
  const A = tI([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, zD = ([t, e = ""]) => {
  const A = tI([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, XD = ([t, e = ""]) => {
  const A = AI([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, AI = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && !A.startsWith(".");
}, tI = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && A !== "." && A !== "..";
}, rI = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Su = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, KD = rI === "win32" ? Su.win32.sep : Su.posix.sep;
_A.sep = KD;
const xA = Symbol("globstar **");
_A.GLOBSTAR = xA;
const eb = "[^/]", Ab = eb + "*?", tb = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", rb = "(?:(?!(?:\\/|^)\\.).)*?", sb = (t, e = {}) => (A) => _A(A, t, e);
_A.filter = sb;
const it = (t, e = {}) => Object.assign({}, t, e), nb = (t) => {
  if (!t || typeof t != "object" || !Object.keys(t).length)
    return _A;
  const e = _A;
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
    GLOBSTAR: xA
  });
};
_A.defaults = nb;
const sI = (t, e = {}) => (Ko(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : yD(t));
_A.braceExpand = sI;
const ib = (t, e = {}) => new Jr(t, e).makeRe();
_A.makeRe = ib;
const ob = (t, e, A = {}) => {
  const r = new Jr(e, A);
  return t = t.filter((s) => r.match(s)), r.options.nonull && !t.length && t.push(e), t;
};
_A.match = ob;
const Fu = /[?*]|[+@!]\(.*?\)|\[|\]/, ab = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
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
    Ko(e), A = A || {}, this.options = A, this.pattern = e, this.platform = A.platform || rI, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!A.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!A.nonegate, this.comment = !1, this.empty = !1, this.partial = !!A.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = A.windowsNoMagicRoot !== void 0 ? A.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
        const o = n[0] === "" && n[1] === "" && (n[2] === "?" || !Fu.test(n[2])) && !Fu.test(n[3]), g = /^[a-z]:/i.test(n[0]);
        if (o)
          return [...n.slice(0, 4), ...n.slice(4).map((c) => this.parse(c))];
        if (g)
          return [n[0], ...n.slice(1).map((c) => this.parse(c))];
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
          const o = r[s + 2], g = r[s + 3];
          if (a !== ".." || !o || o === "." || o === ".." || !g || g === "." || g === "..")
            continue;
          A = !0, r.splice(s, 1);
          const c = r.slice(0);
          c[s] = "**", e.push(c), s--;
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
      const u = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), I = !u && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), C = typeof A[0] == "string" && /^[a-z]:$/i.test(A[0]), d = !C && A[0] === "" && A[1] === "" && A[2] === "?" && typeof A[3] == "string" && /^[a-z]:$/i.test(A[3]), f = I ? 3 : u ? 0 : void 0, w = d ? 3 : C ? 0 : void 0;
      if (typeof f == "number" && typeof w == "number") {
        const [m, y] = [e[f], A[w]];
        m.toLowerCase() === y.toLowerCase() && (A[w] = m, w > f ? A = A.slice(w) : f > w && (e = e.slice(f)));
      }
    }
    const { optimizationLevel: n = 1 } = this.options;
    n >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: A }), this.debug("matchOne", e.length, A.length);
    for (var i = 0, a = 0, o = e.length, g = A.length; i < o && a < g; i++, a++) {
      this.debug("matchOne loop");
      var c = A[a], E = e[i];
      if (this.debug(A, c, E), c === !1)
        return !1;
      if (c === xA) {
        this.debug("GLOBSTAR", [A, c, E]);
        var h = i, Q = a + 1;
        if (Q === g) {
          for (this.debug("** at the end"); i < o; i++)
            if (e[i] === "." || e[i] === ".." || !s.dot && e[i].charAt(0) === ".")
              return !1;
          return !0;
        }
        for (; h < o; ) {
          var B = e[h];
          if (this.debug(`
globstar while`, e, h, A, Q, B), this.matchOne(e.slice(h), A.slice(Q), r))
            return this.debug("globstar found match!", h, o, B), !0;
          if (B === "." || B === ".." || !s.dot && B.charAt(0) === ".") {
            this.debug("dot detected!", e, h, A, Q);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), h++;
        }
        return !!(r && (this.debug(`
>>> no match, partial?`, e, h, A, Q), h === o));
      }
      let u;
      if (typeof c == "string" ? (u = E === c, this.debug("string match", c, E, u)) : (u = c.test(E), this.debug("pattern match", c, E, u)), !u)
        return !1;
    }
    if (i === o && a === g)
      return !0;
    if (i === o)
      return r;
    if (a === g)
      return i === o - 1 && e[i] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return sI(this.pattern, this.options);
  }
  parse(e) {
    Ko(e);
    const A = this.options;
    if (e === "**")
      return xA;
    if (e === "")
      return "";
    let r, s = null;
    (r = e.match(VD)) ? s = A.dot ? qD : WD : (r = e.match(LD)) ? s = (A.nocase ? A.dot ? xD : YD : A.dot ? GD : MD)(r[1]) : (r = e.match(jD)) ? s = (A.nocase ? A.dot ? $D : ZD : A.dot ? zD : XD)(r) : (r = e.match(JD)) ? s = A.dot ? OD : _D : (r = e.match(HD)) && (s = PD);
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
    let n = e.map((o) => {
      const g = o.map((c) => {
        if (c instanceof RegExp)
          for (const E of c.flags.split(""))
            s.add(E);
        return typeof c == "string" ? ab(c) : c === xA ? xA : c._src;
      });
      return g.forEach((c, E) => {
        const h = g[E + 1], Q = g[E - 1];
        c !== xA || Q === xA || (Q === void 0 ? h !== void 0 && h !== xA ? g[E + 1] = "(?:\\/|" + r + "\\/)?" + h : g[E] = r : h === void 0 ? g[E - 1] = Q + "(?:\\/|" + r + ")?" : h !== xA && (g[E - 1] = Q + "(?:\\/|\\/" + r + "\\/)" + h, g[E + 1] = xA));
      }), g.filter((c) => c !== xA).join("/");
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
      let g = s;
      if (r.matchBase && o.length === 1 && (g = [i]), this.matchOne(g, o, A))
        return r.flipNegate ? !0 : !this.negate;
    }
    return r.flipNegate ? !1 : this.negate;
  }
  static defaults(e) {
    return _A.defaults(e).Minimatch;
  }
}
_A.AST = ea;
_A.Minimatch = Jr;
_A.escape = eI;
_A.unescape = Ys;
const Us = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, nI = /* @__PURE__ */ new Set(), Xg = typeof process == "object" && process ? process : {}, iI = (t, e, A, r) => {
  typeof Xg.emitWarning == "function" ? Xg.emitWarning(t, e, A, r) : console.error(`[${A}] ${e}: ${t}`);
};
let Aa = globalThis.AbortController, Nu = globalThis.AbortSignal;
var sQ;
if (typeof Aa > "u") {
  Nu = class {
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
      L(this, "signal", new Nu());
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
  let t = ((sQ = Xg.env) == null ? void 0 : sQ.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const e = () => {
    t && (t = !1, iI("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
  };
}
const cb = (t) => !nI.has(t), Ir = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t), oI = (t) => Ir(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? xo : null : null;
class xo extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
var Hs;
const As = class As {
  constructor(e, A) {
    L(this, "heap");
    L(this, "length");
    if (!l(As, Hs))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new A(e), this.length = 0;
  }
  static create(e) {
    const A = oI(e);
    if (!A)
      return [];
    b(As, Hs, !0);
    const r = new As(e, A);
    return b(As, Hs, !1), r;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
Hs = new WeakMap(), // private constructor
N(As, Hs, !1);
let Kg = As;
var Bt, ZA, It, dt, Ps, nA, ft, Ke, Ue, ge, MA, $A, SA, EA, pt, uA, mt, wt, zA, yt, Sr, GA, si, el, is, Ar, ni, XA, aa, aI, os, Vs, ii, Tt, dr, vt, fr, oi, Al, Ws, Jo, qs, _o, Re, Ne, ai, tl, as, Vn;
const Vl = class Vl {
  constructor(e) {
    N(this, si);
    N(this, aa);
    N(this, Tt);
    N(this, vt);
    N(this, oi);
    N(this, Ws);
    N(this, qs);
    N(this, Re);
    N(this, ai);
    N(this, as);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    N(this, Bt, void 0);
    N(this, ZA, void 0);
    N(this, It, void 0);
    N(this, dt, void 0);
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
    N(this, nA, void 0);
    N(this, ft, void 0);
    N(this, Ke, void 0);
    N(this, Ue, void 0);
    N(this, ge, void 0);
    N(this, MA, void 0);
    N(this, $A, void 0);
    N(this, SA, void 0);
    N(this, EA, void 0);
    N(this, pt, void 0);
    N(this, uA, void 0);
    N(this, mt, void 0);
    N(this, wt, void 0);
    N(this, zA, void 0);
    N(this, yt, void 0);
    N(this, Sr, void 0);
    N(this, GA, void 0);
    // conditionally set private methods related to TTL
    N(this, is, () => {
    });
    N(this, Ar, () => {
    });
    N(this, ni, () => {
    });
    /* c8 ignore stop */
    N(this, XA, () => !1);
    N(this, os, (e) => {
    });
    N(this, Vs, (e, A, r) => {
    });
    N(this, ii, (e, A, r, s) => {
      if (r || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    const { max: A = 0, ttl: r, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: i, updateAgeOnHas: a, allowStale: o, dispose: g, disposeAfter: c, noDisposeOnSet: E, noUpdateTTL: h, maxSize: Q = 0, maxEntrySize: B = 0, sizeCalculation: u, fetchMethod: I, noDeleteOnFetchRejection: C, noDeleteOnStaleGet: d, allowStaleOnFetchRejection: f, allowStaleOnFetchAbort: w, ignoreFetchAbort: m } = e;
    if (A !== 0 && !Ir(A))
      throw new TypeError("max option must be a nonnegative integer");
    const y = A ? oI(A) : Array;
    if (!y)
      throw new Error("invalid max value: " + A);
    if (b(this, Bt, A), b(this, ZA, Q), this.maxEntrySize = B || l(this, ZA), this.sizeCalculation = u, this.sizeCalculation) {
      if (!l(this, ZA) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (I !== void 0 && typeof I != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (b(this, Ps, I), b(this, Sr, !!I), b(this, Ke, /* @__PURE__ */ new Map()), b(this, Ue, new Array(A).fill(void 0)), b(this, ge, new Array(A).fill(void 0)), b(this, MA, new y(A)), b(this, $A, new y(A)), b(this, SA, 0), b(this, EA, 0), b(this, pt, Kg.create(A)), b(this, nA, 0), b(this, ft, 0), typeof g == "function" && b(this, It, g), typeof c == "function" ? (b(this, dt, c), b(this, uA, [])) : (b(this, dt, void 0), b(this, uA, void 0)), b(this, yt, !!l(this, It)), b(this, GA, !!l(this, dt)), this.noDisposeOnSet = !!E, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!C, this.allowStaleOnFetchRejection = !!f, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!m, this.maxEntrySize !== 0) {
      if (l(this, ZA) !== 0 && !Ir(l(this, ZA)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!Ir(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      _(this, aa, aI).call(this);
    }
    if (this.allowStale = !!o, this.noDeleteOnStaleGet = !!d, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!a, this.ttlResolution = Ir(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = r || 0, this.ttl) {
      if (!Ir(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      _(this, si, el).call(this);
    }
    if (l(this, Bt) === 0 && this.ttl === 0 && l(this, ZA) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !l(this, Bt) && !l(this, ZA)) {
      const R = "LRU_CACHE_UNBOUNDED";
      cb(R) && (nI.add(R), iI("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", R, Vl));
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
      starts: l(e, wt),
      ttls: l(e, zA),
      sizes: l(e, mt),
      keyMap: l(e, Ke),
      keyList: l(e, Ue),
      valList: l(e, ge),
      next: l(e, MA),
      prev: l(e, $A),
      get head() {
        return l(e, SA);
      },
      get tail() {
        return l(e, EA);
      },
      free: l(e, pt),
      // methods
      isBackgroundFetch: (A) => {
        var r;
        return _(r = e, Re, Ne).call(r, A);
      },
      backgroundFetch: (A, r, s, n) => {
        var i;
        return _(i = e, qs, _o).call(i, A, r, s, n);
      },
      moveToTail: (A) => {
        var r;
        return _(r = e, as, Vn).call(r, A);
      },
      indexes: (A) => {
        var r;
        return _(r = e, Tt, dr).call(r, A);
      },
      rindexes: (A) => {
        var r;
        return _(r = e, vt, fr).call(r, A);
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
    return l(this, Bt);
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
    return l(this, ft);
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
    return l(this, Ps);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return l(this, It);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return l(this, dt);
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
    for (const e of _(this, Tt, dr).call(this))
      l(this, ge)[e] !== void 0 && l(this, Ue)[e] !== void 0 && !_(this, Re, Ne).call(this, l(this, ge)[e]) && (yield [l(this, Ue)[e], l(this, ge)[e]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const e of _(this, vt, fr).call(this))
      l(this, ge)[e] !== void 0 && l(this, Ue)[e] !== void 0 && !_(this, Re, Ne).call(this, l(this, ge)[e]) && (yield [l(this, Ue)[e], l(this, ge)[e]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const e of _(this, Tt, dr).call(this)) {
      const A = l(this, Ue)[e];
      A !== void 0 && !_(this, Re, Ne).call(this, l(this, ge)[e]) && (yield A);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const e of _(this, vt, fr).call(this)) {
      const A = l(this, Ue)[e];
      A !== void 0 && !_(this, Re, Ne).call(this, l(this, ge)[e]) && (yield A);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const e of _(this, Tt, dr).call(this))
      l(this, ge)[e] !== void 0 && !_(this, Re, Ne).call(this, l(this, ge)[e]) && (yield l(this, ge)[e]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const e of _(this, vt, fr).call(this))
      l(this, ge)[e] !== void 0 && !_(this, Re, Ne).call(this, l(this, ge)[e]) && (yield l(this, ge)[e]);
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
    for (const r of _(this, Tt, dr).call(this)) {
      const s = l(this, ge)[r], n = _(this, Re, Ne).call(this, s) ? s.__staleWhileFetching : s;
      if (n !== void 0 && e(n, l(this, Ue)[r], this))
        return this.get(l(this, Ue)[r], A);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */
  forEach(e, A = this) {
    for (const r of _(this, Tt, dr).call(this)) {
      const s = l(this, ge)[r], n = _(this, Re, Ne).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Ue)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(e, A = this) {
    for (const r of _(this, vt, fr).call(this)) {
      const s = l(this, ge)[r], n = _(this, Re, Ne).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Ue)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let e = !1;
    for (const A of _(this, vt, fr).call(this, { allowStale: !0 }))
      l(this, XA).call(this, A) && (this.delete(l(this, Ue)[A]), e = !0);
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
    const r = l(this, ge)[A], s = _(this, Re, Ne).call(this, r) ? r.__staleWhileFetching : r;
    if (s === void 0)
      return;
    const n = { value: s };
    if (l(this, zA) && l(this, wt)) {
      const i = l(this, zA)[A], a = l(this, wt)[A];
      if (i && a) {
        const o = i - (Us.now() - a);
        n.ttl = o, n.start = Date.now();
      }
    }
    return l(this, mt) && (n.size = l(this, mt)[A]), n;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const e = [];
    for (const A of _(this, Tt, dr).call(this, { allowStale: !0 })) {
      const r = l(this, Ue)[A], s = l(this, ge)[A], n = _(this, Re, Ne).call(this, s) ? s.__staleWhileFetching : s;
      if (n === void 0 || r === void 0)
        continue;
      const i = { value: n };
      if (l(this, zA) && l(this, wt)) {
        i.ttl = l(this, zA)[A];
        const a = Us.now() - l(this, wt)[A];
        i.start = Math.floor(Date.now() - a);
      }
      l(this, mt) && (i.size = l(this, mt)[A]), e.unshift([r, i]);
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
        r.start = Us.now() - s;
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
    var h, Q, B, u, I;
    if (A === void 0)
      return this.delete(e), this;
    const { ttl: s = this.ttl, start: n, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: o } = r;
    let { noUpdateTTL: g = this.noUpdateTTL } = r;
    const c = l(this, ii).call(this, e, A, r.size || 0, a);
    if (this.maxEntrySize && c > this.maxEntrySize)
      return o && (o.set = "miss", o.maxEntrySizeExceeded = !0), this.delete(e), this;
    let E = l(this, nA) === 0 ? void 0 : l(this, Ke).get(e);
    if (E === void 0)
      E = l(this, nA) === 0 ? l(this, EA) : l(this, pt).length !== 0 ? l(this, pt).pop() : l(this, nA) === l(this, Bt) ? _(this, Ws, Jo).call(this, !1) : l(this, nA), l(this, Ue)[E] = e, l(this, ge)[E] = A, l(this, Ke).set(e, E), l(this, MA)[l(this, EA)] = E, l(this, $A)[E] = l(this, EA), b(this, EA, E), $i(this, nA)._++, l(this, Vs).call(this, E, c, o), o && (o.set = "add"), g = !1;
    else {
      _(this, as, Vn).call(this, E);
      const C = l(this, ge)[E];
      if (A !== C) {
        if (l(this, Sr) && _(this, Re, Ne).call(this, C)) {
          C.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: d } = C;
          d !== void 0 && !i && (l(this, yt) && ((h = l(this, It)) == null || h.call(this, d, e, "set")), l(this, GA) && ((Q = l(this, uA)) == null || Q.push([d, e, "set"])));
        } else
          i || (l(this, yt) && ((B = l(this, It)) == null || B.call(this, C, e, "set")), l(this, GA) && ((u = l(this, uA)) == null || u.push([C, e, "set"])));
        if (l(this, os).call(this, E), l(this, Vs).call(this, E, c, o), l(this, ge)[E] = A, o) {
          o.set = "replace";
          const d = C && _(this, Re, Ne).call(this, C) ? C.__staleWhileFetching : C;
          d !== void 0 && (o.oldValue = d);
        }
      } else
        o && (o.set = "update");
    }
    if (s !== 0 && !l(this, zA) && _(this, si, el).call(this), l(this, zA) && (g || l(this, ni).call(this, E, s, n), o && l(this, Ar).call(this, o, E)), !i && l(this, GA) && l(this, uA)) {
      const C = l(this, uA);
      let d;
      for (; d = C == null ? void 0 : C.shift(); )
        (I = l(this, dt)) == null || I.call(this, ...d);
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
        const A = l(this, ge)[l(this, SA)];
        if (_(this, Ws, Jo).call(this, !0), _(this, Re, Ne).call(this, A)) {
          if (A.__staleWhileFetching)
            return A.__staleWhileFetching;
        } else if (A !== void 0)
          return A;
      }
    } finally {
      if (l(this, GA) && l(this, uA)) {
        const A = l(this, uA);
        let r;
        for (; r = A == null ? void 0 : A.shift(); )
          (e = l(this, dt)) == null || e.call(this, ...r);
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
      if (_(this, Re, Ne).call(this, i) && i.__staleWhileFetching === void 0)
        return !1;
      if (l(this, XA).call(this, n))
        s && (s.has = "stale", l(this, Ar).call(this, s, n));
      else
        return r && l(this, is).call(this, n), s && (s.has = "hit", l(this, Ar).call(this, s, n)), !0;
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
    return _(this, Re, Ne).call(this, n) ? n.__staleWhileFetching : n;
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
      sizeCalculation: g = this.sizeCalculation,
      noUpdateTTL: c = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection: E = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: h = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: Q = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: B = this.allowStaleOnFetchAbort,
      context: u,
      forceRefresh: I = !1,
      status: C,
      signal: d
    } = A;
    if (!l(this, Sr))
      return C && (C.fetch = "get"), this.get(e, {
        allowStale: r,
        updateAgeOnGet: s,
        noDeleteOnStaleGet: n,
        status: C
      });
    const f = {
      allowStale: r,
      updateAgeOnGet: s,
      noDeleteOnStaleGet: n,
      ttl: i,
      noDisposeOnSet: a,
      size: o,
      sizeCalculation: g,
      noUpdateTTL: c,
      noDeleteOnFetchRejection: E,
      allowStaleOnFetchRejection: h,
      allowStaleOnFetchAbort: B,
      ignoreFetchAbort: Q,
      status: C,
      signal: d
    };
    let w = l(this, Ke).get(e);
    if (w === void 0) {
      C && (C.fetch = "miss");
      const m = _(this, qs, _o).call(this, e, w, f, u);
      return m.__returned = m;
    } else {
      const m = l(this, ge)[w];
      if (_(this, Re, Ne).call(this, m)) {
        const T = r && m.__staleWhileFetching !== void 0;
        return C && (C.fetch = "inflight", T && (C.returnedStale = !0)), T ? m.__staleWhileFetching : m.__returned = m;
      }
      const y = l(this, XA).call(this, w);
      if (!I && !y)
        return C && (C.fetch = "hit"), _(this, as, Vn).call(this, w), s && l(this, is).call(this, w), C && l(this, Ar).call(this, C, w), m;
      const R = _(this, qs, _o).call(this, e, w, f, u), v = R.__staleWhileFetching !== void 0 && r;
      return C && (C.fetch = y ? "stale" : "refresh", v && y && (C.returnedStale = !0)), v ? R.__staleWhileFetching : R.__returned = R;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(e, A = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: i } = A, a = l(this, Ke).get(e);
    if (a !== void 0) {
      const o = l(this, ge)[a], g = _(this, Re, Ne).call(this, o);
      return i && l(this, Ar).call(this, i, a), l(this, XA).call(this, a) ? (i && (i.get = "stale"), g ? (i && r && o.__staleWhileFetching !== void 0 && (i.returnedStale = !0), r ? o.__staleWhileFetching : void 0) : (n || this.delete(e), i && r && (i.returnedStale = !0), r ? o : void 0)) : (i && (i.get = "hit"), g ? o.__staleWhileFetching : (_(this, as, Vn).call(this, a), s && l(this, is).call(this, a), o));
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
      const a = l(this, Ke).get(e);
      if (a !== void 0)
        if (A = !0, l(this, nA) === 1)
          this.clear();
        else {
          l(this, os).call(this, a);
          const o = l(this, ge)[a];
          if (_(this, Re, Ne).call(this, o) ? o.__abortController.abort(new Error("deleted")) : (l(this, yt) || l(this, GA)) && (l(this, yt) && ((r = l(this, It)) == null || r.call(this, o, e, "delete")), l(this, GA) && ((s = l(this, uA)) == null || s.push([o, e, "delete"]))), l(this, Ke).delete(e), l(this, Ue)[a] = void 0, l(this, ge)[a] = void 0, a === l(this, EA))
            b(this, EA, l(this, $A)[a]);
          else if (a === l(this, SA))
            b(this, SA, l(this, MA)[a]);
          else {
            const g = l(this, $A)[a];
            l(this, MA)[g] = l(this, MA)[a];
            const c = l(this, MA)[a];
            l(this, $A)[c] = l(this, $A)[a];
          }
          $i(this, nA)._--, l(this, pt).push(a);
        }
    }
    if (l(this, GA) && ((n = l(this, uA)) != null && n.length)) {
      const a = l(this, uA);
      let o;
      for (; o = a == null ? void 0 : a.shift(); )
        (i = l(this, dt)) == null || i.call(this, ...o);
    }
    return A;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var e, A, r;
    for (const s of _(this, vt, fr).call(this, { allowStale: !0 })) {
      const n = l(this, ge)[s];
      if (_(this, Re, Ne).call(this, n))
        n.__abortController.abort(new Error("deleted"));
      else {
        const i = l(this, Ue)[s];
        l(this, yt) && ((e = l(this, It)) == null || e.call(this, n, i, "delete")), l(this, GA) && ((A = l(this, uA)) == null || A.push([n, i, "delete"]));
      }
    }
    if (l(this, Ke).clear(), l(this, ge).fill(void 0), l(this, Ue).fill(void 0), l(this, zA) && l(this, wt) && (l(this, zA).fill(0), l(this, wt).fill(0)), l(this, mt) && l(this, mt).fill(0), b(this, SA, 0), b(this, EA, 0), l(this, pt).length = 0, b(this, ft, 0), b(this, nA, 0), l(this, GA) && l(this, uA)) {
      const s = l(this, uA);
      let n;
      for (; n = s == null ? void 0 : s.shift(); )
        (r = l(this, dt)) == null || r.call(this, ...n);
    }
  }
};
Bt = new WeakMap(), ZA = new WeakMap(), It = new WeakMap(), dt = new WeakMap(), Ps = new WeakMap(), nA = new WeakMap(), ft = new WeakMap(), Ke = new WeakMap(), Ue = new WeakMap(), ge = new WeakMap(), MA = new WeakMap(), $A = new WeakMap(), SA = new WeakMap(), EA = new WeakMap(), pt = new WeakMap(), uA = new WeakMap(), mt = new WeakMap(), wt = new WeakMap(), zA = new WeakMap(), yt = new WeakMap(), Sr = new WeakMap(), GA = new WeakMap(), si = new WeakSet(), el = function() {
  const e = new xo(l(this, Bt)), A = new xo(l(this, Bt));
  b(this, zA, e), b(this, wt, A), b(this, ni, (n, i, a = Us.now()) => {
    if (A[n] = i !== 0 ? a : 0, e[n] = i, i !== 0 && this.ttlAutopurge) {
      const o = setTimeout(() => {
        l(this, XA).call(this, n) && this.delete(l(this, Ue)[n]);
      }, i + 1);
      o.unref && o.unref();
    }
  }), b(this, is, (n) => {
    A[n] = e[n] !== 0 ? Us.now() : 0;
  }), b(this, Ar, (n, i) => {
    if (e[i]) {
      const a = e[i], o = A[i];
      if (!a || !o)
        return;
      n.ttl = a, n.start = o, n.now = r || s();
      const g = n.now - o;
      n.remainingTTL = a - g;
    }
  });
  let r = 0;
  const s = () => {
    const n = Us.now();
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
    const a = e[i], o = A[i];
    if (!a || !o)
      return 1 / 0;
    const g = (r || s()) - o;
    return a - g;
  }, b(this, XA, (n) => {
    const i = A[n], a = e[n];
    return !!a && !!i && (r || s()) - i > a;
  });
}, is = new WeakMap(), Ar = new WeakMap(), ni = new WeakMap(), XA = new WeakMap(), aa = new WeakSet(), aI = function() {
  const e = new xo(l(this, Bt));
  b(this, ft, 0), b(this, mt, e), b(this, os, (A) => {
    b(this, ft, l(this, ft) - e[A]), e[A] = 0;
  }), b(this, ii, (A, r, s, n) => {
    if (_(this, Re, Ne).call(this, r))
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
      for (; l(this, ft) > n; )
        _(this, Ws, Jo).call(this, !0);
    }
    b(this, ft, l(this, ft) + e[A]), s && (s.entrySize = r, s.totalCalculatedSize = l(this, ft));
  });
}, os = new WeakMap(), Vs = new WeakMap(), ii = new WeakMap(), Tt = new WeakSet(), dr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, nA))
    for (let A = l(this, EA); !(!_(this, oi, Al).call(this, A) || ((e || !l(this, XA).call(this, A)) && (yield A), A === l(this, SA))); )
      A = l(this, $A)[A];
}, vt = new WeakSet(), fr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, nA))
    for (let A = l(this, SA); !(!_(this, oi, Al).call(this, A) || ((e || !l(this, XA).call(this, A)) && (yield A), A === l(this, EA))); )
      A = l(this, MA)[A];
}, oi = new WeakSet(), Al = function(e) {
  return e !== void 0 && l(this, Ke).get(l(this, Ue)[e]) === e;
}, Ws = new WeakSet(), Jo = function(e) {
  var n, i;
  const A = l(this, SA), r = l(this, Ue)[A], s = l(this, ge)[A];
  return l(this, Sr) && _(this, Re, Ne).call(this, s) ? s.__abortController.abort(new Error("evicted")) : (l(this, yt) || l(this, GA)) && (l(this, yt) && ((n = l(this, It)) == null || n.call(this, s, r, "evict")), l(this, GA) && ((i = l(this, uA)) == null || i.push([s, r, "evict"]))), l(this, os).call(this, A), e && (l(this, Ue)[A] = void 0, l(this, ge)[A] = void 0, l(this, pt).push(A)), l(this, nA) === 1 ? (b(this, SA, b(this, EA, 0)), l(this, pt).length = 0) : b(this, SA, l(this, MA)[A]), l(this, Ke).delete(r), $i(this, nA)._--, A;
}, qs = new WeakSet(), _o = function(e, A, r, s) {
  const n = A === void 0 ? void 0 : l(this, ge)[A];
  if (_(this, Re, Ne).call(this, n))
    return n;
  const i = new Aa(), { signal: a } = r;
  a == null || a.addEventListener("abort", () => i.abort(a.reason), {
    signal: i.signal
  });
  const o = {
    signal: i.signal,
    options: r,
    context: s
  }, g = (u, I = !1) => {
    const { aborted: C } = i.signal, d = r.ignoreFetchAbort && u !== void 0;
    if (r.status && (C && !I ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, d && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), C && !d && !I)
      return E(i.signal.reason);
    const f = Q;
    return l(this, ge)[A] === Q && (u === void 0 ? f.__staleWhileFetching ? l(this, ge)[A] = f.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, u, o.options))), u;
  }, c = (u) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = u), E(u)), E = (u) => {
    const { aborted: I } = i.signal, C = I && r.allowStaleOnFetchAbort, d = C || r.allowStaleOnFetchRejection, f = d || r.noDeleteOnFetchRejection, w = Q;
    if (l(this, ge)[A] === Q && (!f || w.__staleWhileFetching === void 0 ? this.delete(e) : C || (l(this, ge)[A] = w.__staleWhileFetching)), d)
      return r.status && w.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), w.__staleWhileFetching;
    if (w.__returned === w)
      throw u;
  }, h = (u, I) => {
    var d;
    const C = (d = l(this, Ps)) == null ? void 0 : d.call(this, e, n, o);
    C && C instanceof Promise && C.then((f) => u(f === void 0 ? void 0 : f), I), i.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (u(void 0), r.allowStaleOnFetchAbort && (u = (f) => g(f, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const Q = new Promise(h).then(g, c), B = Object.assign(Q, {
    __abortController: i,
    __staleWhileFetching: n,
    __returned: void 0
  });
  return A === void 0 ? (this.set(e, B, { ...o.options, status: void 0 }), A = l(this, Ke).get(e)) : l(this, ge)[A] = B, B;
}, Re = new WeakSet(), Ne = function(e) {
  if (!l(this, Sr))
    return !1;
  const A = e;
  return !!A && A instanceof Promise && A.hasOwnProperty("__staleWhileFetching") && A.__abortController instanceof Aa;
}, ai = new WeakSet(), tl = function(e, A) {
  l(this, $A)[A] = e, l(this, MA)[e] = A;
}, as = new WeakSet(), Vn = function(e) {
  e !== l(this, EA) && (e === l(this, SA) ? b(this, SA, l(this, MA)[e]) : _(this, ai, tl).call(this, l(this, $A)[e], l(this, MA)[e]), _(this, ai, tl).call(this, l(this, EA), e), b(this, EA, e));
};
let ta = Vl;
const Uu = typeof process == "object" && process ? process : {
  stdout: null,
  stderr: null
}, gb = (t) => !!t && typeof t == "object" && (t instanceof ra || t instanceof Ot || lb(t) || hb(t)), lb = (t) => !!t && typeof t == "object" && t instanceof ul && typeof t.pipe == "function" && // node core Writable streams have a pipe() method, but it throws
t.pipe !== Ot.Writable.prototype.pipe, hb = (t) => !!t && typeof t == "object" && t instanceof ul && typeof t.write == "function" && typeof t.end == "function", $t = Symbol("EOF"), zt = Symbol("maybeEmitEnd"), Cr = Symbol("emittedEnd"), Ro = Symbol("emittingEnd"), vn = Symbol("emittedError"), Do = Symbol("closed"), Tu = Symbol("read"), bo = Symbol("flush"), vu = Symbol("flushChunk"), ut = Symbol("encoding"), Ts = Symbol("decoder"), cA = Symbol("flowing"), Ln = Symbol("paused"), Ms = Symbol("resume"), gA = Symbol("buffer"), vA = Symbol("pipes"), lA = Symbol("bufferLength"), Rg = Symbol("bufferPush"), ko = Symbol("bufferShift"), DA = Symbol("objectMode"), je = Symbol("destroyed"), Dg = Symbol("error"), bg = Symbol("emitData"), Lu = Symbol("emitEnd"), kg = Symbol("emitEnd2"), Ft = Symbol("async"), Sg = Symbol("abort"), So = Symbol("aborted"), Mn = Symbol("signal"), Xr = Symbol("dataListeners"), jA = Symbol("discarded"), Gn = (t) => Promise.resolve().then(t), Eb = (t) => t(), ub = (t) => t === "end" || t === "finish" || t === "prefinish", Qb = (t) => t instanceof ArrayBuffer || !!t && typeof t == "object" && t.constructor && t.constructor.name === "ArrayBuffer" && t.byteLength >= 0, Cb = (t) => !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
class cI {
  constructor(e, A, r) {
    L(this, "src");
    L(this, "dest");
    L(this, "opts");
    L(this, "ondrain");
    this.src = e, this.dest = A, this.opts = r, this.ondrain = () => e[Ms](), this.dest.on("drain", this.ondrain);
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
class Bb extends cI {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors), super.unpipe();
  }
  constructor(e, A, r) {
    super(e, A, r), this.proxyErrors = (s) => A.emit("error", s), e.on("error", this.proxyErrors);
  }
}
const Ib = (t) => !!t.objectMode, db = (t) => !t.objectMode && !!t.encoding && t.encoding !== "buffer";
var nS, iS, oS, aS, cS, gS, lS, hS, ES, uS, QS, CS, BS, IS, dS, fS, pS, mS, wS;
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
    L(this, nS, !1);
    L(this, iS, !1);
    L(this, oS, []);
    L(this, aS, []);
    L(this, cS);
    L(this, gS);
    L(this, lS);
    L(this, hS);
    L(this, ES, !1);
    L(this, uS, !1);
    L(this, QS, !1);
    L(this, CS, !1);
    L(this, BS, null);
    L(this, IS, 0);
    L(this, dS, !1);
    L(this, fS);
    L(this, pS, !1);
    L(this, mS, 0);
    L(this, wS, !1);
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
    Ib(r) ? (this[DA] = !0, this[ut] = null) : db(r) ? (this[ut] = r.encoding, this[DA] = !1) : (this[DA] = !1, this[ut] = null), this[Ft] = !!r.async, this[Ts] = this[ut] ? new ud(this[ut]) : null, r && r.debugExposeBuffer === !0 && Object.defineProperty(this, "buffer", { get: () => this[gA] }), r && r.debugExposePipes === !0 && Object.defineProperty(this, "pipes", { get: () => this[vA] });
    const { signal: s } = r;
    s && (this[Mn] = s, s.aborted ? this[Sg]() : s.addEventListener("abort", () => this[Sg]()));
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
    return this[ut];
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
  [(nS = cA, iS = Ln, oS = vA, aS = gA, cS = DA, gS = ut, lS = Ft, hS = Ts, ES = $t, uS = Cr, QS = Ro, CS = Do, BS = vn, IS = lA, dS = je, fS = Mn, pS = So, mS = Xr, wS = jA, Sg)]() {
    var A, r;
    this[So] = !0, this.emit("abort", (A = this[Mn]) == null ? void 0 : A.reason), this.destroy((r = this[Mn]) == null ? void 0 : r.reason);
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
    if (this[$t])
      throw new Error("write after end");
    if (this[je])
      return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), !0;
    typeof r == "function" && (s = r, r = "utf8"), r || (r = "utf8");
    const n = this[Ft] ? Gn : Eb;
    if (!this[DA] && !Buffer.isBuffer(A)) {
      if (Cb(A))
        A = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
      else if (Qb(A))
        A = Buffer.from(A);
      else if (typeof A != "string")
        throw new Error("Non-contiguous data written to non-objectMode stream");
    }
    return this[DA] ? (this[cA] && this[lA] !== 0 && this[bo](!0), this[cA] ? this.emit("data", A) : this[Rg](A), this[lA] !== 0 && this.emit("readable"), s && n(s), this[cA]) : A.length ? (typeof A == "string" && // unless it is a string already ready for us to use
    !(r === this[ut] && !((i = this[Ts]) != null && i.lastNeed)) && (A = Buffer.from(A, r)), Buffer.isBuffer(A) && this[ut] && (A = this[Ts].write(A)), this[cA] && this[lA] !== 0 && this[bo](!0), this[cA] ? this.emit("data", A) : this[Rg](A), this[lA] !== 0 && this.emit("readable"), s && n(s), this[cA]) : (this[lA] !== 0 && this.emit("readable"), s && n(s), this[cA]);
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
    if (this[jA] = !1, this[lA] === 0 || A === 0 || A && A > this[lA])
      return this[zt](), null;
    this[DA] && (A = null), this[gA].length > 1 && !this[DA] && (this[gA] = [
      this[ut] ? this[gA].join("") : Buffer.concat(this[gA], this[lA])
    ]);
    const r = this[Tu](A || null, this[gA][0]);
    return this[zt](), r;
  }
  [Tu](A, r) {
    if (this[DA])
      this[ko]();
    else {
      const s = r;
      A === s.length || A === null ? this[ko]() : typeof s == "string" ? (this[gA][0] = s.slice(A), r = s.slice(0, A), this[lA] -= A) : (this[gA][0] = s.subarray(A), r = s.subarray(0, A), this[lA] -= A);
    }
    return this.emit("data", r), !this[gA].length && !this[$t] && this.emit("drain"), r;
  }
  end(A, r, s) {
    return typeof A == "function" && (s = A, A = void 0), typeof r == "function" && (s = r, r = "utf8"), A !== void 0 && this.write(A, r), s && this.once("end", s), this[$t] = !0, this.writable = !1, (this[cA] || !this[Ln]) && this[zt](), this;
  }
  // don't let the internal resume be overwritten
  [Ms]() {
    this[je] || (!this[Xr] && !this[vA].length && (this[jA] = !0), this[Ln] = !1, this[cA] = !0, this.emit("resume"), this[gA].length ? this[bo]() : this[$t] ? this[zt]() : this.emit("drain"));
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
    return this[Ms]();
  }
  /**
   * Pause the stream
   */
  pause() {
    this[cA] = !1, this[Ln] = !0, this[jA] = !1;
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
    return this[cA];
  }
  /**
   * true if the stream is currently in a paused state
   */
  get paused() {
    return this[Ln];
  }
  [Rg](A) {
    this[DA] ? this[lA] += 1 : this[lA] += A.length, this[gA].push(A);
  }
  [ko]() {
    return this[DA] ? this[lA] -= 1 : this[lA] -= this[gA][0].length, this[gA].shift();
  }
  [bo](A = !1) {
    do
      ;
    while (this[vu](this[ko]()) && this[gA].length);
    !A && !this[gA].length && !this[$t] && this.emit("drain");
  }
  [vu](A) {
    return this.emit("data", A), this[cA];
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
    return r = r || {}, A === Uu.stdout || A === Uu.stderr ? r.end = !1 : r.end = r.end !== !1, r.proxyErrors = !!r.proxyErrors, s ? r.end && A.end() : (this[vA].push(r.proxyErrors ? new Bb(this, A, r) : new cI(this, A, r)), this[Ft] ? Gn(() => this[Ms]()) : this[Ms]()), A;
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
    r && (this[vA].length === 1 ? (this[cA] && this[Xr] === 0 && (this[cA] = !1), this[vA] = []) : this[vA].splice(this[vA].indexOf(r), 1), r.unpipe());
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
      this[jA] = !1, this[Xr]++, !this[vA].length && !this[cA] && this[Ms]();
    else if (A === "readable" && this[lA] !== 0)
      super.emit("readable");
    else if (ub(A) && this[Cr])
      super.emit(A), this.removeAllListeners(A);
    else if (A === "error" && this[vn]) {
      const n = r;
      this[Ft] ? Gn(() => n.call(this, this[vn])) : n.call(this, this[vn]);
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
    return A === "data" && (this[Xr] = this.listeners("data").length, this[Xr] === 0 && !this[jA] && !this[vA].length && (this[cA] = !1)), s;
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
    return (A === "data" || A === void 0) && (this[Xr] = 0, !this[jA] && !this[vA].length && (this[cA] = !1)), r;
  }
  /**
   * true if the 'end' event has been emitted
   */
  get emittedEnd() {
    return this[Cr];
  }
  [zt]() {
    !this[Ro] && !this[Cr] && !this[je] && this[gA].length === 0 && this[$t] && (this[Ro] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[Do] && this.emit("close"), this[Ro] = !1);
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
      return !this[DA] && !s ? !1 : this[Ft] ? (Gn(() => this[bg](s)), !0) : this[bg](s);
    if (A === "end")
      return this[Lu]();
    if (A === "close") {
      if (this[Do] = !0, !this[Cr] && !this[je])
        return !1;
      const i = super.emit("close");
      return this.removeAllListeners("close"), i;
    } else if (A === "error") {
      this[vn] = s, super.emit(Dg, s);
      const i = !this[Mn] || this.listeners("error").length ? super.emit("error", s) : !1;
      return this[zt](), i;
    } else if (A === "resume") {
      const i = super.emit("resume");
      return this[zt](), i;
    } else if (A === "finish" || A === "prefinish") {
      const i = super.emit(A);
      return this.removeAllListeners(A), i;
    }
    const n = super.emit(A, ...r);
    return this[zt](), n;
  }
  [bg](A) {
    for (const s of this[vA])
      s.dest.write(A) === !1 && this.pause();
    const r = this[jA] ? !1 : super.emit("data", A);
    return this[zt](), r;
  }
  [Lu]() {
    return this[Cr] ? !1 : (this[Cr] = !0, this.readable = !1, this[Ft] ? (Gn(() => this[kg]()), !0) : this[kg]());
  }
  [kg]() {
    if (this[Ts]) {
      const r = this[Ts].end();
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
    return this[ut] ? A.join("") : Buffer.concat(A, A.dataLength);
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
        if (this[$t])
          return r();
        let i, a;
        const o = (h) => {
          this.off("data", g), this.off("end", c), this.off(je, E), r(), a(h);
        }, g = (h) => {
          this.off("error", o), this.off("end", c), this.off(je, E), this.pause(), i({ value: h, done: !!this[$t] });
        }, c = () => {
          this.off("error", o), this.off("data", g), this.off(je, E), r(), i({ done: !0, value: void 0 });
        }, E = () => o(new Error("stream destroyed"));
        return new Promise((h, Q) => {
          a = Q, i = h, this.once(je, E), this.once("error", o), this.once("end", c), this.once("data", g);
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
    const r = () => (this.pause(), this.off(Dg, r), this.off(je, r), this.off("end", r), A = !0, { done: !0, value: void 0 }), s = () => {
      if (A)
        return r();
      const n = this.read();
      return n === null ? r() : { done: !1, value: n };
    };
    return this.once("end", r), this.once(Dg, r), this.once(je, r), {
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
    this[je] = !0, this[jA] = !0, this[gA].length = 0, this[lA] = 0;
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
    return gb;
  }
}
const fb = ed.native, Wn = {
  lstatSync: Ad,
  readdir: td,
  readdirSync: rd,
  readlinkSync: sd,
  realpathSync: fb,
  promises: {
    lstat: Qd,
    readdir: Cd,
    readlink: Bd,
    realpath: Id
  }
}, gI = (t) => !t || t === Wn || t === KI ? Wn : {
  ...Wn,
  ...t,
  promises: {
    ...Wn.promises,
    ...t.promises || {}
  }
}, lI = /^\\\\\?\\([a-z]:)\\?$/i, pb = (t) => t.replace(/\//g, "\\").replace(lI, "$1\\"), mb = /[\\\/]/, at = 0, hI = 1, EI = 2, Ut = 4, uI = 6, QI = 8, Kr = 10, CI = 12, ot = 15, Yn = ~ot, Fg = 16, Mu = 32, qn = 64, Qt = 128, Fo = 256, Oo = 512, Gu = qn | Qt | Oo, wb = 1023, Ng = (t) => t.isFile() ? QI : t.isDirectory() ? Ut : t.isSymbolicLink() ? Kr : t.isCharacterDevice() ? EI : t.isBlockDevice() ? uI : t.isSocket() ? CI : t.isFIFO() ? hI : at, Yu = /* @__PURE__ */ new Map(), jn = (t) => {
  const e = Yu.get(t);
  if (e)
    return e;
  const A = t.normalize("NFKD");
  return Yu.set(t, A), A;
}, xu = /* @__PURE__ */ new Map(), No = (t) => {
  const e = xu.get(t);
  if (e)
    return e;
  const A = jn(t.toLowerCase());
  return xu.set(t, A), A;
};
class Ju extends ta {
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
const BI = Symbol("PathScurry setAsCwd");
var YA, ci, gi, li, hi, Ei, ui, Qi, Ci, Bi, Ii, di, fi, pi, mi, wi, yi, Ri, Di, Fr, cs, Lt, tr, rr, sr, ce, gs, nr, Mt, bi, rl, js, Ho, ls, Zn, ki, sl, Si, nl, hs, $n, Zs, Po, Fi, il, Ni, ol, $s, Vo, ca, II, ga, dI, la, fI, Ui, al, zs, Xs, ha, pI, Es;
class PA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(e, A = at, r, s, n, i, a) {
    N(this, bi);
    N(this, js);
    N(this, ls);
    N(this, ki);
    N(this, Si);
    // save the information when we know the entry is not a dir
    N(this, hs);
    N(this, Zs);
    N(this, Fi);
    N(this, Ni);
    N(this, $s);
    N(this, ca);
    N(this, ga);
    N(this, la);
    N(this, Ui);
    N(this, ha);
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
    N(this, ci, void 0);
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
    N(this, mi, void 0);
    N(this, wi, void 0);
    N(this, yi, void 0);
    N(this, Ri, void 0);
    N(this, Di, void 0);
    N(this, Fr, void 0);
    N(this, cs, void 0);
    N(this, Lt, void 0);
    N(this, tr, void 0);
    N(this, rr, void 0);
    N(this, sr, void 0);
    N(this, ce, void 0);
    N(this, gs, void 0);
    N(this, nr, void 0);
    N(this, Mt, void 0);
    N(this, zs, []);
    N(this, Xs, !1);
    N(this, Es, void 0);
    this.name = e, b(this, Fr, n ? No(e) : jn(e)), b(this, ce, A & wb), this.nocase = n, this.roots = s, this.root = r || this, b(this, gs, i), b(this, Lt, a.fullpath), b(this, rr, a.relative), b(this, sr, a.relativePosix), this.parent = a.parent, this.parent ? b(this, YA, l(this.parent, YA)) : b(this, YA, gI(a.fs));
  }
  get dev() {
    return l(this, ci);
  }
  get mode() {
    return l(this, gi);
  }
  get nlink() {
    return l(this, li);
  }
  get uid() {
    return l(this, hi);
  }
  get gid() {
    return l(this, Ei);
  }
  get rdev() {
    return l(this, ui);
  }
  get blksize() {
    return l(this, Qi);
  }
  get ino() {
    return l(this, Ci);
  }
  get size() {
    return l(this, Bi);
  }
  get blocks() {
    return l(this, Ii);
  }
  get atimeMs() {
    return l(this, di);
  }
  get mtimeMs() {
    return l(this, fi);
  }
  get ctimeMs() {
    return l(this, pi);
  }
  get birthtimeMs() {
    return l(this, mi);
  }
  get atime() {
    return l(this, wi);
  }
  get mtime() {
    return l(this, yi);
  }
  get ctime() {
    return l(this, Ri);
  }
  get birthtime() {
    return l(this, Di);
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
    return l(this, cs) !== void 0 ? l(this, cs) : this.parent ? b(this, cs, this.parent.depth() + 1) : b(this, cs, 0);
  }
  /**
   * @internal
   */
  childrenCache() {
    return l(this, gs);
  }
  /**
   * Get the Path object referenced by the string path, resolved from this Path
   */
  resolve(e) {
    var i;
    if (!e)
      return this;
    const A = this.getRootString(e), s = e.substring(A.length).split(this.splitSep);
    return A ? _(i = this.getRoot(A), bi, rl).call(i, s) : _(this, bi, rl).call(this, s);
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
    const e = l(this, gs).get(this);
    if (e)
      return e;
    const A = Object.assign([], { provisional: 0 });
    return l(this, gs).set(this, A), b(this, ce, l(this, ce) & ~Fg), A;
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
    const r = this.children(), s = this.nocase ? No(e) : jn(e);
    for (const o of r)
      if (l(o, Fr) === s)
        return o;
    const n = this.parent ? this.sep : "", i = l(this, Lt) ? l(this, Lt) + n + e : void 0, a = this.newChild(e, at, {
      ...A,
      parent: this,
      fullpath: i
    });
    return this.canReaddir() || b(a, ce, l(a, ce) | Qt), r.push(a), a;
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
    if (l(this, Lt) !== void 0)
      return l(this, Lt);
    const e = this.name, A = this.parent;
    if (!A)
      return b(this, Lt, this.name);
    const s = A.fullpath() + (A.parent ? this.sep : "") + e;
    return b(this, Lt, s);
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
    return (l(this, ce) & ot) === QI;
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
    return (l(this, ce) & ot) === EI;
  }
  /**
   * Is the path a block device?
   */
  isBlockDevice() {
    return (l(this, ce) & ot) === uI;
  }
  /**
   * Is the path a FIFO pipe?
   */
  isFIFO() {
    return (l(this, ce) & ot) === hI;
  }
  /**
   * Is the path a socket?
   */
  isSocket() {
    return (l(this, ce) & ot) === CI;
  }
  /**
   * Is the path a symbolic link?
   */
  isSymbolicLink() {
    return (l(this, ce) & Kr) === Kr;
  }
  /**
   * Return the entry if it has been subject of a successful lstat, or
   * undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* simply
   * mean that we haven't called lstat on it.
   */
  lstatCached() {
    return l(this, ce) & Mu ? this : void 0;
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
    return !(e !== at && e !== Kr || l(this, ce) & Fo || l(this, ce) & Qt);
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
    return !!(l(this, ce) & Qt);
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
    return this.nocase ? l(this, Fr) === No(e) : l(this, Fr) === jn(e);
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
        _(this, Ni, ol).call(this, A.code);
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
        _(this, Ni, ol).call(this, A.code);
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
    if (!(l(this, ce) & Qt))
      try {
        return _(this, Ui, al).call(this, await l(this, YA).promises.lstat(this.fullpath())), this;
      } catch (e) {
        _(this, Fi, il).call(this, e.code);
      }
  }
  /**
   * synchronous {@link PathBase.lstat}
   */
  lstatSync() {
    if (!(l(this, ce) & Qt))
      try {
        return _(this, Ui, al).call(this, l(this, YA).lstatSync(this.fullpath())), this;
      } catch (e) {
        _(this, Fi, il).call(this, e.code);
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
        _(this, Zs, Po).call(this, n.code), r.provisional = 0;
      else {
        for (const a of i)
          _(this, $s, Vo).call(this, a, r);
        _(this, js, Ho).call(this, r);
      }
      _(this, ha, pI).call(this, r.slice(0, r.provisional));
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
    if (l(this, Es))
      await l(this, Es);
    else {
      let r = () => {
      };
      b(this, Es, new Promise((s) => r = s));
      try {
        for (const s of await l(this, YA).promises.readdir(A, {
          withFileTypes: !0
        }))
          _(this, $s, Vo).call(this, s, e);
        _(this, js, Ho).call(this, e);
      } catch (s) {
        _(this, Zs, Po).call(this, s.code), e.provisional = 0;
      }
      b(this, Es, void 0), r();
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
        _(this, $s, Vo).call(this, r, e);
      _(this, js, Ho).call(this, e);
    } catch (r) {
      _(this, Zs, Po).call(this, r.code), e.provisional = 0;
    }
    return e.slice(0, e.provisional);
  }
  canReaddir() {
    if (l(this, ce) & Gu)
      return !1;
    const e = ot & l(this, ce);
    return e === at || e === Ut || e === Kr;
  }
  shouldWalk(e, A) {
    return (l(this, ce) & Ut) === Ut && !(l(this, ce) & Gu) && !e.has(this) && (!A || A(this));
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
    if (!((Oo | Fo | Qt) & l(this, ce)))
      try {
        const e = await l(this, YA).promises.realpath(this.fullpath());
        return b(this, Mt, this.resolve(e));
      } catch {
        _(this, Si, nl).call(this);
      }
  }
  /**
   * Synchronous {@link realpath}
   */
  realpathSync() {
    if (l(this, Mt))
      return l(this, Mt);
    if (!((Oo | Fo | Qt) & l(this, ce)))
      try {
        const e = l(this, YA).realpathSync(this.fullpath());
        return b(this, Mt, this.resolve(e));
      } catch {
        _(this, Si, nl).call(this);
      }
  }
  /**
   * Internal method to mark this Path object as the scurry cwd,
   * called by {@link PathScurry#chdir}
   *
   * @internal
   */
  [BI](e) {
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
YA = new WeakMap(), ci = new WeakMap(), gi = new WeakMap(), li = new WeakMap(), hi = new WeakMap(), Ei = new WeakMap(), ui = new WeakMap(), Qi = new WeakMap(), Ci = new WeakMap(), Bi = new WeakMap(), Ii = new WeakMap(), di = new WeakMap(), fi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), Ri = new WeakMap(), Di = new WeakMap(), Fr = new WeakMap(), cs = new WeakMap(), Lt = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), sr = new WeakMap(), ce = new WeakMap(), gs = new WeakMap(), nr = new WeakMap(), Mt = new WeakMap(), bi = new WeakSet(), rl = function(e) {
  let A = this;
  for (const r of e)
    A = A.child(r);
  return A;
}, js = new WeakSet(), Ho = function(e) {
  var A;
  b(this, ce, l(this, ce) | Fg);
  for (let r = e.provisional; r < e.length; r++)
    _(A = e[r], ls, Zn).call(A);
}, ls = new WeakSet(), Zn = function() {
  l(this, ce) & Qt || (b(this, ce, (l(this, ce) | Qt) & Yn), _(this, ki, sl).call(this));
}, ki = new WeakSet(), sl = function() {
  var A;
  const e = this.children();
  e.provisional = 0;
  for (const r of e)
    _(A = r, ls, Zn).call(A);
}, Si = new WeakSet(), nl = function() {
  b(this, ce, l(this, ce) | Oo), _(this, hs, $n).call(this);
}, hs = new WeakSet(), $n = function() {
  if (l(this, ce) & qn)
    return;
  let e = l(this, ce);
  (e & ot) === Ut && (e &= Yn), b(this, ce, e | qn), _(this, ki, sl).call(this);
}, Zs = new WeakSet(), Po = function(e = "") {
  e === "ENOTDIR" || e === "EPERM" ? _(this, hs, $n).call(this) : e === "ENOENT" ? _(this, ls, Zn).call(this) : this.children().provisional = 0;
}, Fi = new WeakSet(), il = function(e = "") {
  var A;
  if (e === "ENOTDIR") {
    const r = this.parent;
    _(A = r, hs, $n).call(A);
  } else
    e === "ENOENT" && _(this, ls, Zn).call(this);
}, Ni = new WeakSet(), ol = function(e = "") {
  var r;
  let A = l(this, ce);
  A |= Fo, e === "ENOENT" && (A |= Qt), (e === "EINVAL" || e === "UNKNOWN") && (A &= Yn), b(this, ce, A), e === "ENOTDIR" && this.parent && _(r = this.parent, hs, $n).call(r);
}, $s = new WeakSet(), Vo = function(e, A) {
  return _(this, ga, dI).call(this, e, A) || _(this, ca, II).call(this, e, A);
}, ca = new WeakSet(), II = function(e, A) {
  const r = Ng(e), s = this.newChild(e.name, r, { parent: this }), n = l(s, ce) & ot;
  return n !== Ut && n !== Kr && n !== at && b(s, ce, l(s, ce) | qn), A.unshift(s), A.provisional++, s;
}, ga = new WeakSet(), dI = function(e, A) {
  for (let r = A.provisional; r < A.length; r++) {
    const s = A[r];
    if ((this.nocase ? No(e.name) : jn(e.name)) === l(s, Fr))
      return _(this, la, fI).call(this, e, s, r, A);
  }
}, la = new WeakSet(), fI = function(e, A, r, s) {
  const n = A.name;
  return b(A, ce, l(A, ce) & Yn | Ng(e)), n !== e.name && (A.name = e.name), r !== s.provisional && (r === s.length - 1 ? s.pop() : s.splice(r, 1), s.unshift(A)), s.provisional++, A;
}, Ui = new WeakSet(), al = function(e) {
  const { atime: A, atimeMs: r, birthtime: s, birthtimeMs: n, blksize: i, blocks: a, ctime: o, ctimeMs: g, dev: c, gid: E, ino: h, mode: Q, mtime: B, mtimeMs: u, nlink: I, rdev: C, size: d, uid: f } = e;
  b(this, wi, A), b(this, di, r), b(this, Di, s), b(this, mi, n), b(this, Qi, i), b(this, Ii, a), b(this, Ri, o), b(this, pi, g), b(this, ci, c), b(this, Ei, E), b(this, Ci, h), b(this, gi, Q), b(this, yi, B), b(this, fi, u), b(this, li, I), b(this, ui, C), b(this, Bi, d), b(this, hi, f);
  const w = Ng(e);
  b(this, ce, l(this, ce) & Yn | w | Mu), w !== at && w !== Ut && w !== Kr && b(this, ce, l(this, ce) | qn);
}, zs = new WeakMap(), Xs = new WeakMap(), ha = new WeakSet(), pI = function(e) {
  b(this, Xs, !1);
  const A = l(this, zs).slice();
  l(this, zs).length = 0, A.forEach((r) => r(null, e));
}, Es = new WeakMap();
class Na extends PA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = at, s, n, i, a, o) {
    super(A, r, s, n, i, a, o);
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
    return vg.parse(A).root;
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
    return this.roots[A] = new Yl(A, this).root;
  }
  /**
   * @internal
   */
  sameRoot(A, r = this.root.name) {
    return A = A.toUpperCase().replace(/\//g, "\\").replace(lI, "$1\\"), A === r;
  }
}
class Ua extends PA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = at, s, n, i, a, o) {
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
  newChild(A, r = at, s = {}) {
    return new Ua(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
}
var Ks, en, Ti, vi;
class mI {
  /**
   * This class should not be instantiated directly.
   *
   * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
   *
   * @internal
   */
  constructor(e = process.cwd(), A, r, { nocase: s, childrenCacheSize: n = 16 * 1024, fs: i = Wn } = {}) {
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
    N(this, Ks, void 0);
    N(this, en, void 0);
    N(this, Ti, void 0);
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    L(this, "nocase");
    N(this, vi, void 0);
    b(this, vi, gI(i)), (e instanceof URL || e.startsWith("file://")) && (e = hQ(e));
    const a = A.resolve(e);
    this.roots = /* @__PURE__ */ Object.create(null), this.rootPath = this.parseRootPath(a), b(this, Ks, new Ju()), b(this, en, new Ju()), b(this, Ti, new yb(n));
    const o = a.substring(this.rootPath.length).split(r);
    if (o.length === 1 && !o[0] && o.pop(), s === void 0)
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    this.nocase = s, this.root = this.newRoot(l(this, vi)), this.roots[this.rootPath] = this.root;
    let g = this.root, c = o.length - 1;
    const E = A.sep;
    let h = this.rootPath, Q = !1;
    for (const B of o) {
      const u = c--;
      g = g.child(B, {
        relative: new Array(u).fill("..").join(E),
        relativePosix: new Array(u).fill("..").join("/"),
        fullpath: h += (Q ? "" : E) + B
      }), Q = !0;
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
    return l(this, Ti);
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
    const r = l(this, Ks).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpath();
    return l(this, Ks).set(A, s), s;
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
    const r = l(this, en).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpathPosix();
    return l(this, en).set(A, s), s;
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
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = [];
    (!n || n(e)) && a.push(r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set(), g = (E, h) => {
      o.add(E), E.readdirCB((Q, B) => {
        if (Q)
          return h(Q);
        let u = B.length;
        if (!u)
          return h();
        const I = () => {
          --u === 0 && h();
        };
        for (const C of B)
          (!n || n(C)) && a.push(r ? C : C.fullpath()), s && C.isSymbolicLink() ? C.realpath().then((d) => d != null && d.isUnknown() ? d.lstat() : d).then((d) => d != null && d.shouldWalk(o, i) ? g(d, I) : I()) : C.shouldWalk(o, i) ? g(C, I) : I();
      }, !0);
    }, c = e;
    return new Promise((E, h) => {
      g(c, (Q) => {
        if (Q)
          return h(Q);
        E(a);
      });
    });
  }
  walkSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = [];
    (!n || n(e)) && a.push(r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set([e]);
    for (const g of o) {
      const c = g.readdirSync();
      for (const E of c) {
        (!n || n(E)) && a.push(r ? E : E.fullpath());
        let h = E;
        if (E.isSymbolicLink()) {
          if (!(s && (h = E.realpathSync())))
            continue;
          h.isUnknown() && h.lstatSync();
        }
        h.shouldWalk(o, i) && o.add(h);
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
    const a = /* @__PURE__ */ new Set([e]);
    for (const o of a) {
      const g = o.readdirSync();
      for (const c of g) {
        (!n || n(c)) && (yield r ? c : c.fullpath());
        let E = c;
        if (c.isSymbolicLink()) {
          if (!(s && (E = c.realpathSync())))
            continue;
          E.isUnknown() && E.lstatSync();
        }
        E.shouldWalk(a, i) && a.add(E);
      }
    }
  }
  stream(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = new ra({ objectMode: !0 });
    (!n || n(e)) && a.write(r ? e : e.fullpath());
    const o = /* @__PURE__ */ new Set(), g = [e];
    let c = 0;
    const E = () => {
      let h = !1;
      for (; !h; ) {
        const Q = g.shift();
        if (!Q) {
          c === 0 && a.end();
          return;
        }
        c++, o.add(Q);
        const B = (I, C, d = !1) => {
          if (I)
            return a.emit("error", I);
          if (s && !d) {
            const f = [];
            for (const w of C)
              w.isSymbolicLink() && f.push(w.realpath().then((m) => m != null && m.isUnknown() ? m.lstat() : m));
            if (f.length) {
              Promise.all(f).then(() => B(null, C, !0));
              return;
            }
          }
          for (const f of C)
            f && (!n || n(f)) && (a.write(r ? f : f.fullpath()) || (h = !0));
          c--;
          for (const f of C) {
            const w = f.realpathCached() || f;
            w.shouldWalk(o, i) && g.push(w);
          }
          h && !a.flowing ? a.once("drain", E) : u || E();
        };
        let u = !0;
        Q.readdirCB(B, !0), u = !1;
      }
    };
    return E(), a;
  }
  streamSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof PA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, a = new ra({ objectMode: !0 }), o = /* @__PURE__ */ new Set();
    (!n || n(e)) && a.write(r ? e : e.fullpath());
    const g = [e];
    let c = 0;
    const E = () => {
      let h = !1;
      for (; !h; ) {
        const Q = g.shift();
        if (!Q) {
          c === 0 && a.end();
          return;
        }
        c++, o.add(Q);
        const B = Q.readdirSync();
        for (const u of B)
          (!n || n(u)) && (a.write(r ? u : u.fullpath()) || (h = !0));
        c--;
        for (const u of B) {
          let I = u;
          if (u.isSymbolicLink()) {
            if (!(s && (I = u.realpathSync())))
              continue;
            I.isUnknown() && I.lstatSync();
          }
          I.shouldWalk(o, i) && g.push(I);
        }
      }
      h && !a.flowing && a.once("drain", E);
    };
    return E(), a;
  }
  chdir(e = this.cwd) {
    const A = this.cwd;
    this.cwd = typeof e == "string" ? this.cwd.resolve(e) : e, this.cwd[BI](A);
  }
}
Ks = new WeakMap(), en = new WeakMap(), Ti = new WeakMap(), vi = new WeakMap();
class Yl extends mI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !0 } = r;
    super(A, vg, "\\", { ...r, nocase: s });
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
    return vg.parse(A).root.toUpperCase();
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
class xl extends mI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !1 } = r;
    super(A, id, "/", { ...r, nocase: s });
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
class wI extends xl {
  constructor(e = process.cwd(), A = {}) {
    const { nocase: r = !0 } = A;
    super(e, { ...A, nocase: r });
  }
}
process.platform;
const Rb = process.platform === "win32" ? Yl : process.platform === "darwin" ? wI : xl, Db = (t) => t.length >= 1, bb = (t) => t.length >= 1;
var iA, KA, QA, us, Rt, Li, Nr, Ur, Tr, An;
const Wl = class Wl {
  constructor(e, A, r, s) {
    N(this, iA, void 0);
    N(this, KA, void 0);
    N(this, QA, void 0);
    L(this, "length");
    N(this, us, void 0);
    N(this, Rt, void 0);
    N(this, Li, void 0);
    N(this, Nr, void 0);
    N(this, Ur, void 0);
    N(this, Tr, void 0);
    N(this, An, !0);
    if (!Db(e))
      throw new TypeError("empty pattern list");
    if (!bb(A))
      throw new TypeError("empty glob list");
    if (A.length !== e.length)
      throw new TypeError("mismatched pattern list and glob list lengths");
    if (this.length = e.length, r < 0 || r >= this.length)
      throw new TypeError("index out of range");
    if (b(this, iA, e), b(this, KA, A), b(this, QA, r), b(this, us, s), l(this, QA) === 0) {
      if (this.isUNC()) {
        const [n, i, a, o, ...g] = l(this, iA), [c, E, h, Q, ...B] = l(this, KA);
        g[0] === "" && (g.shift(), B.shift());
        const u = [n, i, a, o, ""].join("/"), I = [c, E, h, Q, ""].join("/");
        b(this, iA, [u, ...g]), b(this, KA, [I, ...B]), this.length = l(this, iA).length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [n, ...i] = l(this, iA), [a, ...o] = l(this, KA);
        i[0] === "" && (i.shift(), o.shift());
        const g = n + "/", c = a + "/";
        b(this, iA, [g, ...i]), b(this, KA, [c, ...o]), this.length = l(this, iA).length;
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
    return l(this, iA)[l(this, QA)] === xA;
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
    return b(this, Li, l(this, Li) || (l(this, QA) === 0 ? this.isAbsolute() ? l(this, KA)[0] + l(this, KA).slice(1).join("/") : l(this, KA).join("/") : l(this, KA).slice(l(this, QA)).join("/")));
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
    return l(this, Rt) !== void 0 ? l(this, Rt) : this.hasMore() ? (b(this, Rt, new Wl(l(this, iA), l(this, KA), l(this, QA) + 1, l(this, us))), b(l(this, Rt), Tr, l(this, Tr)), b(l(this, Rt), Ur, l(this, Ur)), b(l(this, Rt), Nr, l(this, Nr)), l(this, Rt)) : b(this, Rt, null);
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    const e = l(this, iA);
    return l(this, Ur) !== void 0 ? l(this, Ur) : b(this, Ur, l(this, us) === "win32" && l(this, QA) === 0 && e[0] === "" && e[1] === "" && typeof e[2] == "string" && !!e[2] && typeof e[3] == "string" && !!e[3]);
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
    return l(this, Nr) !== void 0 ? l(this, Nr) : b(this, Nr, l(this, us) === "win32" && l(this, QA) === 0 && this.length > 1 && typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]));
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
    return typeof e == "string" && this.isAbsolute() && l(this, QA) === 0 ? e : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(l(this, QA) === 0 || !this.isGlobstar() || !l(this, An));
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    return l(this, QA) === 0 || !this.isGlobstar() || !l(this, An) ? !1 : (b(this, An, !1), !0);
  }
};
iA = new WeakMap(), KA = new WeakMap(), QA = new WeakMap(), us = new WeakMap(), Rt = new WeakMap(), Li = new WeakMap(), Nr = new WeakMap(), Ur = new WeakMap(), Tr = new WeakMap(), An = new WeakMap();
let sa = Wl;
const kb = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class _u {
  constructor(e, { nobrace: A, nocase: r, noext: s, noglobstar: n, platform: i = kb }) {
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
      const g = new Jr(o, a);
      for (let c = 0; c < g.set.length; c++) {
        const E = g.set[c], h = g.globParts[c];
        if (!E || !h)
          throw new Error("invalid pattern object");
        const Q = new sa(E, h, 0, i), B = new Jr(Q.globString(), a), u = h[h.length - 1] === "**", I = Q.isAbsolute();
        I ? this.absolute.push(B) : this.relative.push(B), u && (I ? this.absoluteChildren.push(B) : this.relativeChildren.push(B));
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
      let o, g, c = !1;
      for (; typeof (o = n.pattern()) == "string" && (g = n.rest()); )
        s = s.resolve(o), n = g, c = !0;
      if (o = n.pattern(), g = n.rest(), c) {
        if (this.hasWalkedCache.hasWalked(s, n))
          continue;
        this.hasWalkedCache.storeWalked(s, n);
      }
      if (typeof o == "string") {
        const E = o === ".." || o === "" || o === ".";
        this.matches.add(s.resolve(o), a, E);
        continue;
      } else if (o === xA) {
        (!s.isSymbolicLink() || this.follow || n.checkFollowGlobstar()) && this.subwalks.add(s, n);
        const E = g == null ? void 0 : g.pattern(), h = g == null ? void 0 : g.rest();
        if (!g || (E === "" || E === ".") && !h)
          this.matches.add(s, a, E === "" || E === ".");
        else if (E === "..") {
          const Q = s.parent || s;
          h ? this.hasWalkedCache.hasWalked(Q, h) || this.subwalks.add(Q, h) : this.matches.add(Q, a, !0);
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
        const a = i.isAbsolute(), o = i.pattern(), g = i.rest();
        o === xA ? s.testGlobstar(n, i, g, a) : o instanceof RegExp ? s.testRegExp(n, o, g, a) : s.testString(n, o, g, a);
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
const Nb = (t, e) => typeof t == "string" ? new _u([t], e) : Array.isArray(t) ? new _u(t, e) : t;
var tn, rn, Qs, ir, es, Mi, cl;
class yI {
  constructor(e, A, r) {
    N(this, ir);
    N(this, Mi);
    L(this, "path");
    L(this, "patterns");
    L(this, "opts");
    L(this, "seen", /* @__PURE__ */ new Set());
    L(this, "paused", !1);
    L(this, "aborted", !1);
    N(this, tn, []);
    N(this, rn, void 0);
    N(this, Qs, void 0);
    L(this, "signal");
    L(this, "maxDepth");
    this.patterns = e, this.path = A, this.opts = r, b(this, Qs, !r.posix && r.platform === "win32" ? "\\" : "/"), r.ignore && b(this, rn, Nb(r.ignore, r)), this.maxDepth = r.maxDepth || 1 / 0, r.signal && (this.signal = r.signal, this.signal.addEventListener("abort", () => {
      l(this, tn).length = 0;
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
    for (; !this.paused && (e = l(this, tn).shift()); )
      e();
  }
  onResume(e) {
    var A;
    (A = this.signal) != null && A.aborted || (this.paused ? l(this, tn).push(e) : e());
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
    return e && (this.maxDepth === 1 / 0 || e.depth() <= this.maxDepth) && (!A || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !_(this, ir, es).call(this, e) ? e : void 0;
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
    if (_(this, ir, es).call(this, e))
      return;
    const r = this.opts.absolute === void 0 ? A : this.opts.absolute;
    this.seen.add(e);
    const s = this.opts.mark && e.isDirectory() ? l(this, Qs) : "";
    if (this.opts.withFileTypes)
      this.matchEmit(e);
    else if (r) {
      const n = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(n + s);
    } else {
      const n = this.opts.posix ? e.relativePosix() : e.relative(), i = this.opts.dotRelative && !n.startsWith(".." + l(this, Qs)) ? "." + l(this, Qs) : "";
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
    var a;
    if (_(this, Mi, cl).call(this, e))
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
    for (const [o, g, c] of r.matches.entries())
      _(this, ir, es).call(this, o) || (n++, this.match(o, g, c).then(() => i()));
    for (const o of r.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && o.depth() >= this.maxDepth)
        continue;
      n++;
      const g = o.readdirCached();
      o.calledReaddir() ? this.walkCB3(o, g, r, i) : o.readdirCB((c, E) => this.walkCB3(o, E, r, i), !0);
    }
    i();
  }
  walkCB3(e, A, r, s) {
    r = r.filterEntries(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [a, o, g] of r.matches.entries())
      _(this, ir, es).call(this, a) || (n++, this.match(a, o, g).then(() => i()));
    for (const [a, o] of r.subwalks.entries())
      n++, this.walkCB2(a, o, r.child(), i);
    i();
  }
  walkCBSync(e, A, r) {
    var s;
    (s = this.signal) != null && s.aborted && r(), this.walkCB2Sync(e, A, new na(this.opts), r);
  }
  walkCB2Sync(e, A, r, s) {
    var a;
    if (_(this, Mi, cl).call(this, e))
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
    for (const [o, g, c] of r.matches.entries())
      _(this, ir, es).call(this, o) || this.matchSync(o, g, c);
    for (const o of r.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && o.depth() >= this.maxDepth)
        continue;
      n++;
      const g = o.readdirSync();
      this.walkCB3Sync(o, g, r, i);
    }
    i();
  }
  walkCB3Sync(e, A, r, s) {
    r = r.filterEntries(e, A);
    let n = 1;
    const i = () => {
      --n === 0 && s();
    };
    for (const [a, o, g] of r.matches.entries())
      _(this, ir, es).call(this, a) || this.matchSync(a, o, g);
    for (const [a, o] of r.subwalks.entries())
      n++, this.walkCB2Sync(a, o, r.child(), i);
    i();
  }
}
tn = new WeakMap(), rn = new WeakMap(), Qs = new WeakMap(), ir = new WeakSet(), es = function(e) {
  var A, r;
  return this.seen.has(e) || !!((r = (A = l(this, rn)) == null ? void 0 : A.ignored) != null && r.call(A, e));
}, Mi = new WeakSet(), cl = function(e) {
  var A, r;
  return !!((r = (A = l(this, rn)) == null ? void 0 : A.childrenIgnored) != null && r.call(A, e));
};
class Ou extends yI {
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
class Hu extends yI {
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
class ms {
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
    if (this.withFileTypes = !!A.withFileTypes, this.signal = A.signal, this.follow = !!A.follow, this.dot = !!A.dot, this.dotRelative = !!A.dotRelative, this.nodir = !!A.nodir, this.mark = !!A.mark, A.cwd ? (A.cwd instanceof URL || A.cwd.startsWith("file://")) && (A.cwd = hQ(A.cwd)) : this.cwd = "", this.cwd = A.cwd || "", this.root = A.root, this.magicalBraces = !!A.magicalBraces, this.nobrace = !!A.nobrace, this.noext = !!A.noext, this.realpath = !!A.realpath, this.absolute = A.absolute, this.noglobstar = !!A.noglobstar, this.matchBase = !!A.matchBase, this.maxDepth = typeof A.maxDepth == "number" ? A.maxDepth : 1 / 0, this.stat = !!A.stat, this.ignore = A.ignore, this.withFileTypes && this.absolute !== void 0)
      throw new Error("cannot set absolute and withFileTypes:true");
    if (typeof e == "string" && (e = [e]), this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (e = e.map((o) => o.replace(/\\/g, "/"))), this.matchBase) {
      if (A.noglobstar)
        throw new TypeError("base matching requires globstar");
      e = e.map((o) => o.includes("/") ? o : `./**/${o}`);
    }
    if (this.pattern = e, this.platform = A.platform || Ub, this.opts = { ...A, platform: this.platform }, A.scurry) {
      if (this.scurry = A.scurry, A.nocase !== void 0 && A.nocase !== A.scurry.nocase)
        throw new Error("nocase option contradicts provided scurry option");
    } else {
      const o = A.platform === "win32" ? Yl : A.platform === "darwin" ? wI : A.platform ? xl : Rb;
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
    }, n = this.pattern.map((o) => new Jr(o, s)), [i, a] = n.reduce((o, g) => (o[0].push(...g.set), o[1].push(...g.globParts), o), [[], []]);
    this.patterns = i.map((o, g) => {
      const c = a[g];
      if (!c)
        throw new Error("invalid pattern object");
      return new sa(o, c, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new Ou(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new Ou(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new Hu(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new Hu(this.patterns, this.scurry.cwd, {
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
  return new ms(t, e).streamSync();
}
function RI(t, e = {}) {
  return new ms(t, e).stream();
}
function _l(t, e = {}) {
  return new ms(t, e).walkSync();
}
async function Pu(t, e = {}) {
  return new ms(t, e).walk();
}
function va(t, e = {}) {
  return new ms(t, e).iterateSync();
}
function DI(t, e = {}) {
  return new ms(t, e).iterate();
}
const vb = Ta, Lb = Object.assign(RI, { sync: Ta }), Mb = va, Gb = Object.assign(DI, {
  sync: va
}), Yb = Object.assign(_l, {
  stream: Ta,
  iterate: va
}), Vu = Object.assign(Pu, {
  glob: Pu,
  globSync: _l,
  sync: Yb,
  globStream: RI,
  stream: Lb,
  globStreamSync: Ta,
  streamSync: vb,
  globIterate: DI,
  iterate: Gb,
  globIterateSync: va,
  iterateSync: Mb,
  Glob: ms,
  hasMagic: Tb,
  escape: eI,
  unescape: Ys
});
Vu.glob = Vu;
function La() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var Ma = { exports: {} }, xb = bI;
function bI(t, e, A, r) {
  if (typeof A != "function")
    throw new Error("method for before hook must be a function");
  return r || (r = {}), Array.isArray(e) ? e.reverse().reduce(function(s, n) {
    return bI.bind(null, t, n, s, r);
  }, A)() : Promise.resolve().then(function() {
    return t.registry[e] ? t.registry[e].reduce(function(s, n) {
      return n.hook.bind(null, s, r);
    }, A)() : A(r);
  });
}
var Jb = _b;
function _b(t, e, A, r) {
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
var Ob = Hb;
function Hb(t, e, A) {
  if (t.registry[e]) {
    var r = t.registry[e].map(function(s) {
      return s.orig;
    }).indexOf(A);
    r !== -1 && t.registry[e].splice(r, 1);
  }
}
var kI = xb, Pb = Jb, Vb = Ob, Wu = Function.bind, qu = Wu.bind(Wu);
function SI(t, e, A) {
  var r = qu(Vb, null).apply(
    null,
    A ? [e, A] : [e]
  );
  t.api = { remove: r }, t.remove = r, ["before", "error", "after", "wrap"].forEach(function(s) {
    var n = A ? [e, s, A] : [e, s];
    t[s] = t.api[s] = qu(Pb, null).apply(null, n);
  });
}
function Wb() {
  var t = "h", e = {
    registry: {}
  }, A = kI.bind(null, e, t);
  return SI(A, e, t), A;
}
function FI() {
  var t = {
    registry: {}
  }, e = kI.bind(null, t);
  return SI(e, t), e;
}
var ju = !1;
function fn() {
  return ju || (console.warn(
    '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
  ), ju = !0), FI();
}
fn.Singular = Wb.bind();
fn.Collection = FI.bind();
Ma.exports = fn;
Ma.exports.Hook = fn;
Ma.exports.Singular = fn.Singular;
var qb = Ma.exports.Collection = fn.Collection, jb = "9.0.3", Zb = `octokit-endpoint.js/${jb} ${La()}`, $b = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": Zb
  },
  mediaType: {
    format: ""
  }
};
function zb(t) {
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
function NI(t, e) {
  const A = Object.assign({}, t);
  return Object.keys(e).forEach((r) => {
    Xb(e[r]) ? r in t ? A[r] = NI(t[r], e[r]) : Object.assign(A, { [r]: e[r] }) : Object.assign(A, { [r]: e[r] });
  }), A;
}
function Zu(t) {
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
  A.headers = zb(A.headers), Zu(A), Zu(A.headers);
  const r = NI(t || {}, A);
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
function $u(t, e) {
  return Object.keys(t).filter((A) => !e.includes(A)).reduce((A, r) => (A[r] = t[r], A), {});
}
function UI(t) {
  return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e;
  }).join("");
}
function xs(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function xn(t, e, A) {
  return e = t === "+" || t === "#" ? UI(e) : xs(e), A ? xs(A) + "=" + e : e;
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
        xn(e, s, Ug(e) ? A : "")
      );
    else if (r === "*")
      Array.isArray(s) ? s.filter(vs).forEach(function(i) {
        n.push(
          xn(e, i, Ug(e) ? A : "")
        );
      }) : Object.keys(s).forEach(function(i) {
        vs(s[i]) && n.push(xn(e, s[i], i));
      });
    else {
      const i = [];
      Array.isArray(s) ? s.filter(vs).forEach(function(a) {
        i.push(xn(e, a));
      }) : Object.keys(s).forEach(function(a) {
        vs(s[a]) && (i.push(xs(a)), i.push(xn(e, s[a].toString())));
      }), Ug(e) ? n.push(xs(A) + "=" + i.join(",")) : i.length !== 0 && n.push(i.join(","));
    }
  else
    e === ";" ? vs(s) && n.push(xs(A)) : s === "" && (e === "&" || e === "?") ? n.push(xs(A) + "=") : s === "" && n.push("");
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
        let a = "";
        const o = [];
        if (A.indexOf(s.charAt(0)) !== -1 && (a = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(g) {
          var c = /([^:\*]*)(?::(\d+)|(\*))?/.exec(g);
          o.push(rk(e, a, c[1], c[2] || c[3]));
        }), a && a !== "+") {
          var i = ",";
          return a === "?" ? i = "&" : a !== "#" && (i = a), (o.length !== 0 ? a : "") + o.join(i);
        } else
          return o.join(",");
      } else
        return UI(n);
    }
  ), t === "/" ? t : t.replace(/\/$/, "");
}
function TI(t) {
  var c;
  let e = t.method.toUpperCase(), A = (t.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), r = Object.assign({}, t.headers), s, n = $u(t, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const i = tk(A);
  A = sk(A).expand(n), /^http/.test(A) || (A = t.baseUrl + A);
  const a = Object.keys(t).filter((E) => i.includes(E)).concat("baseUrl"), o = $u(n, a);
  if (!/application\/octet-stream/i.test(r.accept) && (t.mediaType.format && (r.accept = r.accept.split(/,/).map(
    (E) => E.replace(
      /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
      `application/vnd$1$2.${t.mediaType.format}`
    )
  ).join(",")), A.endsWith("/graphql") && (c = t.mediaType.previews) != null && c.length)) {
    const E = r.accept.match(/[\w-]+(?=-preview)/g) || [];
    r.accept = E.concat(t.mediaType.previews).map((h) => {
      const Q = t.mediaType.format ? `.${t.mediaType.format}` : "+json";
      return `application/vnd.github.${h}-preview${Q}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(e) ? A = Kb(A, o) : "data" in o ? s = o.data : Object.keys(o).length && (s = o), !r["content-type"] && typeof s < "u" && (r["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(e) && typeof s > "u" && (s = ""), Object.assign(
    { method: e, url: A, headers: r },
    typeof s < "u" ? { body: s } : null,
    t.request ? { request: t.request } : null
  );
}
function ik(t, e, A) {
  return TI(gl(t, e, A));
}
function vI(t, e) {
  const A = gl(t, e), r = ik.bind(null, A);
  return Object.assign(r, {
    DEFAULTS: A,
    defaults: vI.bind(null, A),
    merge: gl.bind(null, A),
    parse: TI
  });
}
var ok = vI(null, $b);
class zu extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
  }
}
var Ol = { exports: {} }, ak = LI;
function LI(t, e) {
  if (t && e)
    return LI(t)(e);
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
var MI = ak;
Ol.exports = MI(Wo);
Ol.exports.strict = MI(GI);
Wo.proto = Wo(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return Wo(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return GI(this);
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
function GI(t) {
  var e = function() {
    if (e.called)
      throw new Error(e.onceError);
    return e.called = !0, e.value = t.apply(this, arguments);
  }, A = t.name || "Function wrapped with `once`";
  return e.onceError = A + " shouldn't be called more than once", e.called = !1, e;
}
var ck = Ol.exports;
const YI = /* @__PURE__ */ Ql(ck);
var gk = YI((t) => console.warn(t)), lk = YI((t) => console.warn(t)), Jn = class extends Error {
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
          new zu(
            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
          )
        ), e;
      }
    }), Object.defineProperty(this, "headers", {
      get() {
        return lk(
          new zu(
            "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
          )
        ), r || {};
      }
    });
  }
}, hk = "8.1.6";
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
function Xu(t) {
  var a, o, g;
  const e = t.request && t.request.log ? t.request.log : console, A = ((a = t.request) == null ? void 0 : a.parseSuccessResponseBody) !== !1;
  (Ek(t.body) || Array.isArray(t.body)) && (t.body = JSON.stringify(t.body));
  let r = {}, s, n, { fetch: i } = globalThis;
  if ((o = t.request) != null && o.fetch && (i = t.request.fetch), !i)
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
        throw new Jn(c.statusText, s, {
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
        throw new Jn("Not modified", s, {
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
        throw new Jn(Qk(E), s, {
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
    if (c instanceof Jn)
      throw c;
    if (c.name === "AbortError")
      throw c;
    let E = c.message;
    throw c.name === "TypeError" && "cause" in c && (c.cause instanceof Error ? E = c.cause.message : typeof c.cause == "string" && (E = c.cause)), new Jn(E, 500, {
      request: t
    });
  });
}
async function Tg(t) {
  const e = t.headers.get("content-type");
  return /application\/json/.test(e) ? t.json().catch(() => t.text()).catch(() => "") : !e || /^text\/|charset=utf-8$/.test(e) ? t.text() : uk(t);
}
function Qk(t) {
  return typeof t == "string" ? t : "message" in t ? Array.isArray(t.errors) ? `${t.message}: ${t.errors.map(JSON.stringify).join(", ")}` : t.message : `Unknown error: ${JSON.stringify(t)}`;
}
function ll(t, e) {
  const A = t.defaults(e);
  return Object.assign(function(s, n) {
    const i = A.merge(s, n);
    if (!i.request || !i.request.hook)
      return Xu(A.parse(i));
    const a = (o, g) => Xu(
      A.parse(A.merge(o, g))
    );
    return Object.assign(a, {
      endpoint: A,
      defaults: ll.bind(null, A)
    }), i.request.hook(a, i);
  }, {
    endpoint: A,
    defaults: ll.bind(null, A)
  });
}
var hl = ll(ok, {
  headers: {
    "user-agent": `octokit-request.js/${hk} ${La()}`
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
], fk = ["query", "method", "url"], Ku = /\/api\/v3\/?$/;
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
  ).reduce((i, a) => dk.includes(a) ? (i[a] = r[a], i) : (i.variables || (i.variables = {}), i.variables[a] = r[a], i), {}), n = r.baseUrl || t.endpoint.DEFAULTS.baseUrl;
  return Ku.test(n) && (s.url = n.replace(Ku, "/api/graphql")), t(s).then((i) => {
    if (i.data.errors) {
      const a = {};
      for (const o of Object.keys(i.headers))
        a[o] = i.headers[o];
      throw new Ik(
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
  return Object.assign((s, n) => pk(A, s, n), {
    defaults: Hl.bind(null, A),
    endpoint: A.endpoint
  });
}
Hl(hl, {
  headers: {
    "user-agent": `octokit-graphql.js/${Ck} ${La()}`
  },
  method: "POST",
  url: "/graphql"
});
function mk(t) {
  return Hl(t, {
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
}, xI = "5.0.2", eQ = () => {
}, Fk = console.warn.bind(console), Nk = console.error.bind(console), AQ = `octokit-core.js/${xI} ${La()}`, En, Uk = (En = class {
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
    if (r.headers["user-agent"] = e.userAgent ? `${e.userAgent} ${AQ}` : AQ, e.baseUrl && (r.baseUrl = e.baseUrl), e.previews && (r.mediaType.previews = e.previews), e.timeZone && (r.headers["time-zone"] = e.timeZone), this.request = hl.defaults(r), this.graphql = mk(this.request).defaults(r), this.log = Object.assign(
      {
        debug: eQ,
        info: eQ,
        warn: Fk,
        error: Nk
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
      const n = Sk(e.auth);
      A.wrap("request", n.hook), this.auth = n;
    }
    const s = this.constructor;
    for (let n = 0; n < s.plugins.length; ++n)
      Object.assign(this, s.plugins[n](this, e));
  }
}, En.VERSION = xI, En.plugins = [], En), Tk = "4.0.0";
function JI(t) {
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
JI.VERSION = Tk;
var vk = "9.1.4";
function Lk(t) {
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
          const o = await s({ method: n, url: a, headers: i }), g = Lk(o);
          return a = ((g.headers.link || "").match(
            /<([^>]+)>;\s*rel="next"/
          ) || [])[1], { value: g };
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
function _I(t, e, A, r) {
  return typeof A == "function" && (r = A, A = void 0), OI(
    t,
    [],
    Pl(t, e, A)[Symbol.asyncIterator](),
    r
  );
}
function OI(t, e, A, r) {
  return A.next().then((s) => {
    if (s.done)
      return e;
    let n = !1;
    function i() {
      n = !0;
    }
    return e = e.concat(
      r ? r(s.value, i) : s.value.data
    ), n ? e : OI(t, e, A, r);
  });
}
Object.assign(_I, {
  iterator: Pl
});
function HI(t) {
  return {
    paginate: Object.assign(_I.bind(null, t), {
      iterator: Pl.bind(null, t)
    })
  };
}
HI.VERSION = vk;
var Mk = "10.1.5", Gk = {
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
}, Yk = Gk, Is = /* @__PURE__ */ new Map();
for (const [t, e] of Object.entries(Yk))
  for (const [A, r] of Object.entries(e)) {
    const [s, n, i] = r, [a, o] = s.split(/ /), g = Object.assign(
      {
        method: a,
        url: o
      },
      n
    );
    Is.has(t) || Is.set(t, /* @__PURE__ */ new Map()), Is.get(t).set(A, {
      scope: t,
      methodName: A,
      endpointDefaults: g,
      decorations: i
    });
  }
var xk = {
  has({ scope: t }, e) {
    return Is.get(t).has(e);
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
    return [...Is.get(t).keys()];
  },
  set(t, e, A) {
    return t.cache[e] = A;
  },
  get({ octokit: t, scope: e, cache: A }, r) {
    if (A[r])
      return A[r];
    const s = Is.get(e).get(r);
    if (!s)
      return;
    const { endpointDefaults: n, decorations: i } = s;
    return i ? A[r] = _k(
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
  for (const A of Is.keys())
    e[A] = new Proxy({ octokit: t, scope: A, cache: {} }, xk);
  return e;
}
function _k(t, e, A, r, s) {
  const n = t.request.defaults(r);
  function i(...a) {
    let o = n.endpoint.merge(...a);
    if (s.mapToData)
      return o = Object.assign({}, o, {
        data: o[s.mapToData],
        [s.mapToData]: void 0
      }), n(o);
    if (s.renamed) {
      const [g, c] = s.renamed;
      t.log.warn(
        `octokit.${e}.${A}() has been renamed to octokit.${g}.${c}()`
      );
    }
    if (s.deprecated && t.log.warn(s.deprecated), s.renamedParameters) {
      const g = n.endpoint.merge(...a);
      for (const [c, E] of Object.entries(
        s.renamedParameters
      ))
        c in g && (t.log.warn(
          `"${c}" parameter is deprecated for "octokit.${e}.${A}()". Use "${E}" instead`
        ), E in g || (g[E] = g[c]), delete g[c]);
      return n(g);
    }
    return n(...a);
  }
  return Object.assign(i, n);
}
function PI(t) {
  const e = Jk(t);
  return {
    ...e,
    rest: e
  };
}
PI.VERSION = Mk;
var Ok = "20.0.2", tQ = Uk.plugin(
  JI,
  PI,
  HI
).defaults({
  userAgent: `octokit-rest.js/${Ok}`
}), VI = { exports: {} };
(function() {
  function t(e) {
    var A;
    return e instanceof Buffer ? A = e : A = Buffer.from(e.toString(), "binary"), A.toString("base64");
  }
  VI.exports = t;
})();
var Hk = VI.exports;
const Pk = /* @__PURE__ */ Ql(Hk);
class Vk {
  constructor(e, A, r) {
    L(this, "octokit");
    this.owner = e, this.repositoryName = A, this.octokit = new tQ({ auth: r });
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
        content: Pk(nd(i)),
        encoding: A
      });
      n.push({ type: r, mode: s, path: i, sha: a });
    }
    return n;
  }
  async createCommit({ branchSha: e, treeSha: A, message: r, token: s, amend: n }) {
    const i = s ? new tQ({ auth: s }) : this.octokit;
    if (n) {
      const { data: a } = await this.octokit.rest.git.getCommit({
        ...this.getRepositoryInfo(),
        commit_sha: e
      }), { data: o } = await i.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: a.parents.map(({ sha: g }) => g),
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
    milestone: g,
    draft: c
  }) {
    const { data: E } = await this.octokit.rest.pulls.create({
      ...this.getRepositoryInfo(),
      base: A || await this.getDefaultBranchName(),
      head: e,
      title: r || await this.getBranchCommitMessage(e),
      ...Te({ body: s }),
      ...Te({ draft: c })
    });
    return (a || o) && await this.octokit.rest.pulls.requestReviewers({
      ...this.getRepositoryInfo(),
      pull_number: E.number,
      ...Te({ reviewers: a }),
      ...Te({ team_reviewers: o })
    }), (n || i || g) && await this.octokit.rest.issues.update({
      ...this.getRepositoryInfo(),
      issue_number: E.number,
      ...Te({ labels: n }),
      ...Te({ assignees: i }),
      ...Te({ milestone: g })
    }), E;
  }
}
const rQ = "refs/heads/", Wk = (t) => {
  const A = t.reduce((r, s) => (r.push(..._l(s, { nodir: !0 })), r), []).reduce((r, s) => wu.isFileUntracked(s) ? (console.info(`File "${s}" is created`), r.push(s), r) : (wu.isFileChanged(s) && (console.info(`File "${s}" is changed`), r.push(s)), r), []);
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
  HB.setOutput("commit.sha", s.sha), console.info(`Changed files have been committed to ${s.sha}`);
}, Zk = async (t, e, A) => {
  const r = await t.createPullRequest({
    ...A,
    ...Te({ baseBranchName: A.base }),
    branchName: e
  });
  console.info(`Pull request has been created at ${r.html_url}`);
}, $k = async ({
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
    A.startsWith(rQ) && (A = A.slice(rQ.length));
    const o = s ? Wk(s.paths) : null;
    if ((o == null ? void 0 : o.length) === 0)
      return 0;
    const g = new Vk(i, a, e);
    await qk(g, { name: A, ...r }), s && o && await jk(g, o, A, s), n && await Zk(g, A, {
      ...Te({ title: s == null ? void 0 : s.message }),
      ...n
    });
  } catch (i) {
    return console.error(i), 1;
  }
  return 0;
}, zk = ["paths", "message", "token", "amend"], Xk = [
  "title",
  "body",
  "base",
  "labels",
  "assignees",
  "reviewers",
  "team-reviewers",
  "milestone",
  "draft"
], Kk = () => zk.some((t) => $e.hasInput(`commit.${t}`)), eS = () => Xk.some((t) => $e.hasInput(`pull-request.${t}`)), AS = () => {
  const t = $e.getInputAsString("branch.name", { required: !0 }), e = $e.getInputAsString("branch.base"), A = $e.getInputAsBoolean("branch.recreate");
  return {
    name: t,
    ...Te({ base: e }, null),
    ...Te({ recreate: A }, null)
  };
}, tS = () => {
  if (!($e.getInputAsBoolean("commit") ?? Kk()))
    return null;
  const e = $e.getInputAsStrings("commit.paths", { required: !0 }), A = $e.getInputAsString("commit.message"), r = $e.getInputAsString("commit.token"), s = $e.getInputAsBoolean("commit.amend");
  return {
    paths: e,
    ...Te({ message: A }, null),
    ...Te({ token: r }, null),
    ...Te({ amend: s }, null)
  };
}, rS = () => {
  if (!($e.getInputAsBoolean("pull-request") ?? eS()))
    return null;
  const e = $e.getInputAsString("pull-request.title"), A = $e.getInputAsString("pull-request.body"), r = $e.getInputAsString("pull-request.base"), s = $e.getInputAsStrings("pull-request.labels"), n = $e.getInputAsStrings("pull-request.assignees"), i = $e.getInputAsStrings("pull-request.reviewers"), a = $e.getInputAsStrings("pull-request.team-reviewers"), o = $e.getInputAsInteger("pull-request.milestone"), g = $e.getInputAsBoolean("pull-request.draft");
  return {
    ...Te({ title: e }, null),
    ...Te({ body: A }, null),
    ...Te({ base: r }, null),
    ...Te({ labels: s }, null),
    ...Te({ assignees: n }, null),
    ...Te({ reviewers: i }, null),
    ...Te({ teamReviewers: a }, null),
    ...Te({ milestone: o }, null),
    ...Te({ draft: g }, null)
  };
}, sS = async () => {
  try {
    const t = lD.requireEnv({
      GITHUB_REPOSITORY: Cl.str()
    }), e = $e.getInputAsString("token", { required: !0 }), A = AS(), r = tS(), s = rS(), n = await $k({
      repository: t.GITHUB_REPOSITORY,
      token: e,
      branch: A,
      ...Te({ commit: r }, null),
      ...Te({ pullRequest: s }, null)
    });
    process.exit(n);
  } catch (t) {
    t instanceof Error ? console.error(t.message) : console.error(t), process.exit(1);
  }
};
sS();
