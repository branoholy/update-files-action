var Ad = Object.defineProperty;
var td = (t, e, A) => e in t ? Ad(t, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : t[e] = A;
var v = (t, e, A) => (td(t, typeof e != "symbol" ? e + "" : e, A), A), Va = (t, e, A) => {
  if (!e.has(t))
    throw TypeError("Cannot " + A);
};
var l = (t, e, A) => (Va(t, e, "read from private field"), A ? A.call(t) : e.get(t)), T = (t, e, A) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, A);
}, y = (t, e, A, r) => (Va(t, e, "write to private field"), r ? r.call(t, A) : e.set(t, A), A);
var to = (t, e, A, r) => ({
  set _(s) {
    y(t, e, s, A);
  },
  get _() {
    return l(t, e, r);
  }
}), x = (t, e, A) => (Va(t, e, "access private method"), A);
import Oi from "os";
import * as rd from "fs";
import cQ, { realpathSync as sd, lstatSync as nd, readdir as id, readdirSync as od, readlinkSync as ad, readFileSync as cd } from "fs";
import gQ, { win32 as Yg, posix as gd } from "path";
import Bn from "http";
import lQ from "https";
import Il from "net";
import hQ from "tls";
import _i, { EventEmitter as dl } from "events";
import Xe from "assert";
import Vt from "util";
import Wt from "stream";
import ws from "buffer";
import ld from "querystring";
import Jr from "stream/web";
import Ia from "node:stream";
import In from "node:util";
import EQ from "node:events";
import uQ from "worker_threads";
import hd from "perf_hooks";
import QQ from "util/types";
import Pi from "async_hooks";
import Ed from "console";
import ud, { fileURLToPath as CQ } from "url";
import Qd from "zlib";
import Cd, { StringDecoder as Bd } from "string_decoder";
import BQ from "diagnostics_channel";
import { execSync as IQ } from "child_process";
import { lstat as Id, readdir as dd, readlink as fd, realpath as pd } from "fs/promises";
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function dQ(t) {
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
var pl = {}, xg = function(t, e) {
  return xg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(A, r) {
    A.__proto__ = r;
  } || function(A, r) {
    for (var s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (A[s] = r[s]);
  }, xg(t, e);
};
function fQ(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  xg(t, e);
  function A() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (A.prototype = e.prototype, new A());
}
var $o = function() {
  return $o = Object.assign || function(e) {
    for (var A, r = 1, s = arguments.length; r < s; r++) {
      A = arguments[r];
      for (var n in A)
        Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
    }
    return e;
  }, $o.apply(this, arguments);
};
function pQ(t, e) {
  var A = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (A[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (A[r[s]] = t[r[s]]);
  return A;
}
function mQ(t, e, A, r) {
  var s = arguments.length, n = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, A) : r, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(t, e, A, r);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (i = t[o]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, A, n) : i(e, A)) || n);
  return s > 3 && n && Object.defineProperty(e, A, n), n;
}
function wQ(t, e) {
  return function(A, r) {
    e(A, r, t);
  };
}
function md(t, e, A, r, s, n) {
  function i(f) {
    if (f !== void 0 && typeof f != "function")
      throw new TypeError("Function expected");
    return f;
  }
  for (var o = r.kind, a = o === "getter" ? "get" : o === "setter" ? "set" : "value", g = !e && t ? r.static ? t : t.prototype : null, c = e || (g ? Object.getOwnPropertyDescriptor(g, r.name) : {}), E, h = !1, Q = A.length - 1; Q >= 0; Q--) {
    var B = {};
    for (var u in r)
      B[u] = u === "access" ? {} : r[u];
    for (var u in r.access)
      B.access[u] = r.access[u];
    B.addInitializer = function(f) {
      if (h)
        throw new TypeError("Cannot add initializers after decoration has completed");
      n.push(i(f || null));
    };
    var I = (0, A[Q])(o === "accessor" ? { get: c.get, set: c.set } : c[a], B);
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
function wd(t, e, A) {
  for (var r = arguments.length > 2, s = 0; s < e.length; s++)
    A = r ? e[s].call(t, A) : e[s].call(t);
  return r ? A : void 0;
}
function yd(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function Rd(t, e, A) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: A ? "".concat(A, " ", e) : e });
}
function yQ(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function RQ(t, e, A, r) {
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
function DQ(t, e) {
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
var da = Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
};
function bQ(t, e) {
  for (var A in t)
    A !== "default" && !Object.prototype.hasOwnProperty.call(e, A) && da(e, t, A);
}
function Xo(t) {
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
function ml(t, e) {
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
function kQ() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(ml(arguments[e]));
  return t;
}
function SQ() {
  for (var t = 0, e = 0, A = arguments.length; e < A; e++)
    t += arguments[e].length;
  for (var r = Array(t), s = 0, e = 0; e < A; e++)
    for (var n = arguments[e], i = 0, o = n.length; i < o; i++, s++)
      r[s] = n[i];
  return r;
}
function FQ(t, e, A) {
  if (A || arguments.length === 2)
    for (var r = 0, s = e.length, n; r < s; r++)
      (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return t.concat(n || Array.prototype.slice.call(e));
}
function an(t) {
  return this instanceof an ? (this.v = t, this) : new an(t);
}
function NQ(t, e, A) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = A.apply(t, e || []), s, n = [];
  return s = {}, i("next"), i("throw"), i("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function i(h) {
    r[h] && (s[h] = function(Q) {
      return new Promise(function(B, u) {
        n.push([h, Q, B, u]) > 1 || o(h, Q);
      });
    });
  }
  function o(h, Q) {
    try {
      a(r[h](Q));
    } catch (B) {
      E(n[0][3], B);
    }
  }
  function a(h) {
    h.value instanceof an ? Promise.resolve(h.value.v).then(g, c) : E(n[0][2], h);
  }
  function g(h) {
    o("next", h);
  }
  function c(h) {
    o("throw", h);
  }
  function E(h, Q) {
    h(Q), n.shift(), n.length && o(n[0][0], n[0][1]);
  }
}
function TQ(t) {
  var e, A;
  return e = {}, r("next"), r("throw", function(s) {
    throw s;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(s, n) {
    e[s] = t[s] ? function(i) {
      return (A = !A) ? { value: an(t[s](i)), done: !1 } : n ? n(i) : i;
    } : n;
  }
}
function UQ(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], A;
  return e ? e.call(t) : (t = typeof Xo == "function" ? Xo(t) : t[Symbol.iterator](), A = {}, r("next"), r("throw"), r("return"), A[Symbol.asyncIterator] = function() {
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
function vQ(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var Dd = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function LQ(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && da(e, t, A);
  return Dd(e, t), e;
}
function MQ(t) {
  return t && t.__esModule ? t : { default: t };
}
function GQ(t, e, A, r) {
  if (A === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !r : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return A === "m" ? r : A === "a" ? r.call(t) : r ? r.value : e.get(t);
}
function YQ(t, e, A, r, s) {
  if (r === "m")
    throw new TypeError("Private method is not writable");
  if (r === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? s.call(t, A) : s ? s.value = A : e.set(t, A), A;
}
function xQ(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function JQ(t, e, A) {
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
var bd = typeof SuppressedError == "function" ? SuppressedError : function(t, e, A) {
  var r = new Error(A);
  return r.name = "SuppressedError", r.error = t, r.suppressed = e, r;
};
function OQ(t) {
  function e(r) {
    t.error = t.hasError ? new bd(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
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
const kd = {
  __extends: fQ,
  __assign: $o,
  __rest: pQ,
  __decorate: mQ,
  __param: wQ,
  __metadata: yQ,
  __awaiter: RQ,
  __generator: DQ,
  __createBinding: da,
  __exportStar: bQ,
  __values: Xo,
  __read: ml,
  __spread: kQ,
  __spreadArrays: SQ,
  __spreadArray: FQ,
  __await: an,
  __asyncGenerator: NQ,
  __asyncDelegator: TQ,
  __asyncValues: UQ,
  __makeTemplateObject: vQ,
  __importStar: LQ,
  __importDefault: MQ,
  __classPrivateFieldGet: GQ,
  __classPrivateFieldSet: YQ,
  __classPrivateFieldIn: xQ,
  __addDisposableResource: JQ,
  __disposeResources: OQ
}, Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: JQ,
  get __assign() {
    return $o;
  },
  __asyncDelegator: TQ,
  __asyncGenerator: NQ,
  __asyncValues: UQ,
  __await: an,
  __awaiter: RQ,
  __classPrivateFieldGet: GQ,
  __classPrivateFieldIn: xQ,
  __classPrivateFieldSet: YQ,
  __createBinding: da,
  __decorate: mQ,
  __disposeResources: OQ,
  __esDecorate: md,
  __exportStar: bQ,
  __extends: fQ,
  __generator: DQ,
  __importDefault: MQ,
  __importStar: LQ,
  __makeTemplateObject: vQ,
  __metadata: yQ,
  __param: wQ,
  __propKey: yd,
  __read: ml,
  __rest: pQ,
  __runInitializers: wd,
  __setFunctionName: Rd,
  __spread: kQ,
  __spreadArray: FQ,
  __spreadArrays: SQ,
  __values: Xo,
  default: kd
}, Symbol.toStringTag, { value: "Module" })), wl = /* @__PURE__ */ dQ(Sd);
var jt = {}, Wa = {}, Wr = {}, Ah;
function fa() {
  if (Ah)
    return Wr;
  Ah = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.EnvMissingError = Wr.EnvError = void 0;
  var t = wl, e = (
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
  Wr.EnvError = e;
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
  return Wr.EnvMissingError = A, Wr;
}
var qa = {}, th;
function _Q() {
  return th || (th = 1, function(t) {
    var e;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultReporter = t.envalidErrorFormatter = void 0;
    var A = fa(), r = console.error.bind(console), s = !!(typeof process == "object" && (!((e = process == null ? void 0 : process.versions) === null || e === void 0) && e.node)), n = function(c) {
      return function(E) {
        return s ? "\x1B[".concat(c, "m").concat(E, "\x1B[0m") : E;
      };
    }, i = {
      blue: n("34"),
      white: n("37"),
      yellow: n("33")
    }, o = i.white("================================"), a = function(c, E) {
      E === void 0 && (E = r);
      for (var h = [], Q = [], B = 0, u = Object.entries(c); B < u.length; B++) {
        var I = u[B], f = I[0], C = I[1];
        C instanceof A.EnvMissingError ? h.push("    ".concat(i.blue(f), ": ").concat(C.message || "(required)")) : Q.push("    ".concat(i.blue(f), ": ").concat((C == null ? void 0 : C.message) || "(invalid format)"));
      }
      Q.length && Q.unshift(" ".concat(i.yellow("Invalid"), " environment variables:")), h.length && h.unshift(" ".concat(i.yellow("Missing"), " environment variables:"));
      var d = [
        o,
        Q.sort().join(`
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
  }(qa)), qa;
}
var rh;
function Fd() {
  return rh || (rh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getSanitizedEnv = t.testOnlySymbol = void 0;
    var e = fa(), A = _Q();
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
      for (var E = {}, h = g, Q = {}, B = Object.keys(h), u = n(a, "NODE_ENV"), I = 0, f = B; I < f.length; I++) {
        var C = f[I], d = h[C], w = n(a, C);
        if (w === void 0) {
          var p = u && u !== "production" && d.hasOwnProperty("devDefault");
          if (p) {
            if (E[C] = d.devDefault, i(d.devDefault) && u != "test")
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
        } catch (D) {
          if ((c == null ? void 0 : c.reporter) === null)
            throw D;
          D instanceof Error && (Q[C] = D);
        }
      }
      var m = (c == null ? void 0 : c.reporter) || A.defaultReporter;
      return m({ errors: Q, env: E }), E;
    }
    t.getSanitizedEnv = o;
  }(Wa)), Wa;
}
var ja = {}, sh;
function PQ() {
  return sh || (sh = 1, function(t) {
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
          var Q;
          if (g.includes(h) || c.includes(h.toString()) || a.includes(h))
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
  }(ja)), ja;
}
var nh;
function Nd() {
  if (nh)
    return jt;
  nh = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.testOnly = jt.customCleanEnv = jt.cleanEnv = void 0;
  var t = Fd(), e = PQ();
  function A(n, i, o) {
    o === void 0 && (o = {});
    var a = (0, t.getSanitizedEnv)(n, i, o);
    return Object.freeze((0, e.applyDefaultMiddleware)(a, n));
  }
  jt.cleanEnv = A;
  function r(n, i, o, a) {
    a === void 0 && (a = {});
    var g = (0, t.getSanitizedEnv)(n, i, a);
    return Object.freeze(o(g, n));
  }
  jt.customCleanEnv = r;
  var s = function(n) {
    return process.env.NODE_ENV === "test" ? n : t.testOnlySymbol;
  };
  return jt.testOnly = s, jt;
}
var za = {}, ih;
function Td() {
  return ih || (ih = 1, Object.defineProperty(za, "__esModule", { value: !0 })), za;
}
var sA = {}, zt = {}, oh;
function HQ() {
  if (oh)
    return zt;
  oh = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.makeStructuredValidator = zt.makeExactValidator = zt.makeValidator = void 0;
  var t = wl, e = function(n) {
    return function(i) {
      return t.__assign(t.__assign({}, i), { _parse: n });
    };
  }, A = function(n) {
    return e(n);
  };
  zt.makeValidator = A;
  var r = function(n) {
    return e(n);
  };
  zt.makeExactValidator = r;
  var s = function(n) {
    return e(n);
  };
  return zt.makeStructuredValidator = s, zt;
}
var ah;
function Ud() {
  if (ah)
    return sA;
  ah = 1, Object.defineProperty(sA, "__esModule", { value: !0 }), sA.json = sA.url = sA.port = sA.host = sA.email = sA.str = sA.num = sA.bool = void 0;
  var t = fa(), e = HQ(), A = function(o) {
    if (!o.length)
      return !1;
    for (var a = o.split("."), g = void 0, c = 0; c < a.length; c++)
      if (g = a[c], !/^[a-z\u00a1-\uffff0-9-]+$/i.test(g) || /[\uff01-\uff5e]/.test(g) || g[0] === "-" || g[g.length - 1] === "-")
        return !1;
    return !0;
  }, r = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/, s = /([a-f0-9]+:+)+[a-f0-9]+/, n = function(o) {
    return o.length ? r.test(o) || s.test(o) : !1;
  }, i = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return sA.bool = (0, e.makeExactValidator)(function(o) {
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
  }), sA.num = (0, e.makeValidator)(function(o) {
    var a = parseFloat(o);
    if (Number.isNaN(a))
      throw new t.EnvError('Invalid number input: "'.concat(o, '"'));
    return a;
  }), sA.str = (0, e.makeValidator)(function(o) {
    if (typeof o == "string")
      return o;
    throw new t.EnvError('Not a string: "'.concat(o, '"'));
  }), sA.email = (0, e.makeValidator)(function(o) {
    if (i.test(o))
      return o;
    throw new t.EnvError('Invalid email address: "'.concat(o, '"'));
  }), sA.host = (0, e.makeValidator)(function(o) {
    if (!A(o) && !n(o))
      throw new t.EnvError('Invalid host (domain or ip): "'.concat(o, '"'));
    return o;
  }), sA.port = (0, e.makeValidator)(function(o) {
    var a = +o;
    if (Number.isNaN(a) || "".concat(a) !== "".concat(o) || a % 1 !== 0 || a < 1 || a > 65535)
      throw new t.EnvError('Invalid port input: "'.concat(o, '"'));
    return a;
  }), sA.url = (0, e.makeValidator)(function(o) {
    try {
      return new URL(o), o;
    } catch {
      throw new t.EnvError('Invalid url: "'.concat(o, '"'));
    }
  }), sA.json = (0, e.makeStructuredValidator)(function(o) {
    try {
      return JSON.parse(o);
    } catch {
      throw new t.EnvError('Invalid json: "'.concat(o, '"'));
    }
  }), sA;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.makeValidator = t.makeExactValidator = void 0;
  var e = wl;
  e.__exportStar(Nd(), t), e.__exportStar(fa(), t), e.__exportStar(PQ(), t), e.__exportStar(Td(), t), e.__exportStar(Ud(), t), e.__exportStar(_Q(), t);
  var A = HQ();
  Object.defineProperty(t, "makeExactValidator", { enumerable: !0, get: function() {
    return A.makeExactValidator;
  } }), Object.defineProperty(t, "makeValidator", { enumerable: !0, get: function() {
    return A.makeValidator;
  } });
})(pl);
var Za = {}, cn = {}, Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.toCommandProperties = Or.toCommandValue = void 0;
function vd(t) {
  return t == null ? "" : typeof t == "string" || t instanceof String ? t : JSON.stringify(t);
}
Or.toCommandValue = vd;
function Ld(t) {
  return Object.keys(t).length ? {
    title: t.title,
    file: t.file,
    line: t.startLine,
    endLine: t.endLine,
    col: t.startColumn,
    endColumn: t.endColumn
  } : {};
}
Or.toCommandProperties = Ld;
var Md = he && he.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), Gd = he && he.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), Yd = he && he.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && Md(e, t, A);
  return Gd(e, t), e;
};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.issue = cn.issueCommand = void 0;
const xd = Yd(Oi), VQ = Or;
function WQ(t, e, A) {
  const r = new Od(t, e, A);
  process.stdout.write(r.toString() + xd.EOL);
}
cn.issueCommand = WQ;
function Jd(t, e = "") {
  WQ(t, {}, e);
}
cn.issue = Jd;
const ch = "::";
class Od {
  constructor(e, A, r) {
    e || (e = "missing.command"), this.command = e, this.properties = A, this.message = r;
  }
  toString() {
    let e = ch + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      e += " ";
      let A = !0;
      for (const r in this.properties)
        if (this.properties.hasOwnProperty(r)) {
          const s = this.properties[r];
          s && (A ? A = !1 : e += ",", e += `${r}=${Pd(s)}`);
        }
    }
    return e += `${ch}${_d(this.message)}`, e;
  }
}
function _d(t) {
  return VQ.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function Pd(t) {
  return VQ.toCommandValue(t).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var gn = {}, ro, Hd = new Uint8Array(16);
function qQ() {
  if (!ro && (ro = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !ro))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ro(Hd);
}
const Vd = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function pa(t) {
  return typeof t == "string" && Vd.test(t);
}
var IA = [];
for (var $a = 0; $a < 256; ++$a)
  IA.push(($a + 256).toString(16).substr(1));
function ma(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, A = (IA[t[e + 0]] + IA[t[e + 1]] + IA[t[e + 2]] + IA[t[e + 3]] + "-" + IA[t[e + 4]] + IA[t[e + 5]] + "-" + IA[t[e + 6]] + IA[t[e + 7]] + "-" + IA[t[e + 8]] + IA[t[e + 9]] + "-" + IA[t[e + 10]] + IA[t[e + 11]] + IA[t[e + 12]] + IA[t[e + 13]] + IA[t[e + 14]] + IA[t[e + 15]]).toLowerCase();
  if (!pa(A))
    throw TypeError("Stringified UUID is invalid");
  return A;
}
var gh, Xa, Ka = 0, ec = 0;
function Wd(t, e, A) {
  var r = e && A || 0, s = e || new Array(16);
  t = t || {};
  var n = t.node || gh, i = t.clockseq !== void 0 ? t.clockseq : Xa;
  if (n == null || i == null) {
    var o = t.random || (t.rng || qQ)();
    n == null && (n = gh = [o[0] | 1, o[1], o[2], o[3], o[4], o[5]]), i == null && (i = Xa = (o[6] << 8 | o[7]) & 16383);
  }
  var a = t.msecs !== void 0 ? t.msecs : Date.now(), g = t.nsecs !== void 0 ? t.nsecs : ec + 1, c = a - Ka + (g - ec) / 1e4;
  if (c < 0 && t.clockseq === void 0 && (i = i + 1 & 16383), (c < 0 || a > Ka) && t.nsecs === void 0 && (g = 0), g >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Ka = a, ec = g, Xa = i, a += 122192928e5;
  var E = ((a & 268435455) * 1e4 + g) % 4294967296;
  s[r++] = E >>> 24 & 255, s[r++] = E >>> 16 & 255, s[r++] = E >>> 8 & 255, s[r++] = E & 255;
  var h = a / 4294967296 * 1e4 & 268435455;
  s[r++] = h >>> 8 & 255, s[r++] = h & 255, s[r++] = h >>> 24 & 15 | 16, s[r++] = h >>> 16 & 255, s[r++] = i >>> 8 | 128, s[r++] = i & 255;
  for (var Q = 0; Q < 6; ++Q)
    s[r + Q] = n[Q];
  return e || ma(s);
}
function jQ(t) {
  if (!pa(t))
    throw TypeError("Invalid UUID");
  var e, A = new Uint8Array(16);
  return A[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, A[1] = e >>> 16 & 255, A[2] = e >>> 8 & 255, A[3] = e & 255, A[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, A[5] = e & 255, A[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, A[7] = e & 255, A[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, A[9] = e & 255, A[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, A[11] = e / 4294967296 & 255, A[12] = e >>> 24 & 255, A[13] = e >>> 16 & 255, A[14] = e >>> 8 & 255, A[15] = e & 255, A;
}
function qd(t) {
  t = unescape(encodeURIComponent(t));
  for (var e = [], A = 0; A < t.length; ++A)
    e.push(t.charCodeAt(A));
  return e;
}
var jd = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", zd = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function zQ(t, e, A) {
  function r(s, n, i, o) {
    if (typeof s == "string" && (s = qd(s)), typeof n == "string" && (n = jQ(n)), n.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var a = new Uint8Array(16 + s.length);
    if (a.set(n), a.set(s, n.length), a = A(a), a[6] = a[6] & 15 | e, a[8] = a[8] & 63 | 128, i) {
      o = o || 0;
      for (var g = 0; g < 16; ++g)
        i[o + g] = a[g];
      return i;
    }
    return ma(a);
  }
  try {
    r.name = t;
  } catch {
  }
  return r.DNS = jd, r.URL = zd, r;
}
function Zd(t) {
  if (typeof t == "string") {
    var e = unescape(encodeURIComponent(t));
    t = new Uint8Array(e.length);
    for (var A = 0; A < e.length; ++A)
      t[A] = e.charCodeAt(A);
  }
  return $d(Xd(Kd(t), t.length * 8));
}
function $d(t) {
  for (var e = [], A = t.length * 32, r = "0123456789abcdef", s = 0; s < A; s += 8) {
    var n = t[s >> 5] >>> s % 32 & 255, i = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(n & 15), 16);
    e.push(i);
  }
  return e;
}
function ZQ(t) {
  return (t + 64 >>> 9 << 4) + 14 + 1;
}
function Xd(t, e) {
  t[e >> 5] |= 128 << e % 32, t[ZQ(e) - 1] = e;
  for (var A = 1732584193, r = -271733879, s = -1732584194, n = 271733878, i = 0; i < t.length; i += 16) {
    var o = A, a = r, g = s, c = n;
    A = wA(A, r, s, n, t[i], 7, -680876936), n = wA(n, A, r, s, t[i + 1], 12, -389564586), s = wA(s, n, A, r, t[i + 2], 17, 606105819), r = wA(r, s, n, A, t[i + 3], 22, -1044525330), A = wA(A, r, s, n, t[i + 4], 7, -176418897), n = wA(n, A, r, s, t[i + 5], 12, 1200080426), s = wA(s, n, A, r, t[i + 6], 17, -1473231341), r = wA(r, s, n, A, t[i + 7], 22, -45705983), A = wA(A, r, s, n, t[i + 8], 7, 1770035416), n = wA(n, A, r, s, t[i + 9], 12, -1958414417), s = wA(s, n, A, r, t[i + 10], 17, -42063), r = wA(r, s, n, A, t[i + 11], 22, -1990404162), A = wA(A, r, s, n, t[i + 12], 7, 1804603682), n = wA(n, A, r, s, t[i + 13], 12, -40341101), s = wA(s, n, A, r, t[i + 14], 17, -1502002290), r = wA(r, s, n, A, t[i + 15], 22, 1236535329), A = yA(A, r, s, n, t[i + 1], 5, -165796510), n = yA(n, A, r, s, t[i + 6], 9, -1069501632), s = yA(s, n, A, r, t[i + 11], 14, 643717713), r = yA(r, s, n, A, t[i], 20, -373897302), A = yA(A, r, s, n, t[i + 5], 5, -701558691), n = yA(n, A, r, s, t[i + 10], 9, 38016083), s = yA(s, n, A, r, t[i + 15], 14, -660478335), r = yA(r, s, n, A, t[i + 4], 20, -405537848), A = yA(A, r, s, n, t[i + 9], 5, 568446438), n = yA(n, A, r, s, t[i + 14], 9, -1019803690), s = yA(s, n, A, r, t[i + 3], 14, -187363961), r = yA(r, s, n, A, t[i + 8], 20, 1163531501), A = yA(A, r, s, n, t[i + 13], 5, -1444681467), n = yA(n, A, r, s, t[i + 2], 9, -51403784), s = yA(s, n, A, r, t[i + 7], 14, 1735328473), r = yA(r, s, n, A, t[i + 12], 20, -1926607734), A = RA(A, r, s, n, t[i + 5], 4, -378558), n = RA(n, A, r, s, t[i + 8], 11, -2022574463), s = RA(s, n, A, r, t[i + 11], 16, 1839030562), r = RA(r, s, n, A, t[i + 14], 23, -35309556), A = RA(A, r, s, n, t[i + 1], 4, -1530992060), n = RA(n, A, r, s, t[i + 4], 11, 1272893353), s = RA(s, n, A, r, t[i + 7], 16, -155497632), r = RA(r, s, n, A, t[i + 10], 23, -1094730640), A = RA(A, r, s, n, t[i + 13], 4, 681279174), n = RA(n, A, r, s, t[i], 11, -358537222), s = RA(s, n, A, r, t[i + 3], 16, -722521979), r = RA(r, s, n, A, t[i + 6], 23, 76029189), A = RA(A, r, s, n, t[i + 9], 4, -640364487), n = RA(n, A, r, s, t[i + 12], 11, -421815835), s = RA(s, n, A, r, t[i + 15], 16, 530742520), r = RA(r, s, n, A, t[i + 2], 23, -995338651), A = DA(A, r, s, n, t[i], 6, -198630844), n = DA(n, A, r, s, t[i + 7], 10, 1126891415), s = DA(s, n, A, r, t[i + 14], 15, -1416354905), r = DA(r, s, n, A, t[i + 5], 21, -57434055), A = DA(A, r, s, n, t[i + 12], 6, 1700485571), n = DA(n, A, r, s, t[i + 3], 10, -1894986606), s = DA(s, n, A, r, t[i + 10], 15, -1051523), r = DA(r, s, n, A, t[i + 1], 21, -2054922799), A = DA(A, r, s, n, t[i + 8], 6, 1873313359), n = DA(n, A, r, s, t[i + 15], 10, -30611744), s = DA(s, n, A, r, t[i + 6], 15, -1560198380), r = DA(r, s, n, A, t[i + 13], 21, 1309151649), A = DA(A, r, s, n, t[i + 4], 6, -145523070), n = DA(n, A, r, s, t[i + 11], 10, -1120210379), s = DA(s, n, A, r, t[i + 2], 15, 718787259), r = DA(r, s, n, A, t[i + 9], 21, -343485551), A = Mr(A, o), r = Mr(r, a), s = Mr(s, g), n = Mr(n, c);
  }
  return [A, r, s, n];
}
function Kd(t) {
  if (t.length === 0)
    return [];
  for (var e = t.length * 8, A = new Uint32Array(ZQ(e)), r = 0; r < e; r += 8)
    A[r >> 5] |= (t[r / 8] & 255) << r % 32;
  return A;
}
function Mr(t, e) {
  var A = (t & 65535) + (e & 65535), r = (t >> 16) + (e >> 16) + (A >> 16);
  return r << 16 | A & 65535;
}
function ef(t, e) {
  return t << e | t >>> 32 - e;
}
function wa(t, e, A, r, s, n) {
  return Mr(ef(Mr(Mr(e, t), Mr(r, n)), s), A);
}
function wA(t, e, A, r, s, n, i) {
  return wa(e & A | ~e & r, t, e, s, n, i);
}
function yA(t, e, A, r, s, n, i) {
  return wa(e & r | A & ~r, t, e, s, n, i);
}
function RA(t, e, A, r, s, n, i) {
  return wa(e ^ A ^ r, t, e, s, n, i);
}
function DA(t, e, A, r, s, n, i) {
  return wa(A ^ (e | ~r), t, e, s, n, i);
}
var Af = zQ("v3", 48, Zd);
const tf = Af;
function rf(t, e, A) {
  t = t || {};
  var r = t.random || (t.rng || qQ)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    A = A || 0;
    for (var s = 0; s < 16; ++s)
      e[A + s] = r[s];
    return e;
  }
  return ma(r);
}
function sf(t, e, A, r) {
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
function Ac(t, e) {
  return t << e | t >>> 32 - e;
}
function nf(t) {
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
    for (var h = new Uint32Array(80), Q = 0; Q < 16; ++Q)
      h[Q] = o[E][Q];
    for (var B = 16; B < 80; ++B)
      h[B] = Ac(h[B - 3] ^ h[B - 8] ^ h[B - 14] ^ h[B - 16], 1);
    for (var u = A[0], I = A[1], f = A[2], C = A[3], d = A[4], w = 0; w < 80; ++w) {
      var p = Math.floor(w / 20), m = Ac(u, 5) + sf(p, I, f, C) + d + e[p] + h[w] >>> 0;
      d = C, C = f, f = Ac(I, 30) >>> 0, I = u, u = m;
    }
    A[0] = A[0] + u >>> 0, A[1] = A[1] + I >>> 0, A[2] = A[2] + f >>> 0, A[3] = A[3] + C >>> 0, A[4] = A[4] + d >>> 0;
  }
  return [A[0] >> 24 & 255, A[0] >> 16 & 255, A[0] >> 8 & 255, A[0] & 255, A[1] >> 24 & 255, A[1] >> 16 & 255, A[1] >> 8 & 255, A[1] & 255, A[2] >> 24 & 255, A[2] >> 16 & 255, A[2] >> 8 & 255, A[2] & 255, A[3] >> 24 & 255, A[3] >> 16 & 255, A[3] >> 8 & 255, A[3] & 255, A[4] >> 24 & 255, A[4] >> 16 & 255, A[4] >> 8 & 255, A[4] & 255];
}
var of = zQ("v5", 80, nf);
const af = of, cf = "00000000-0000-0000-0000-000000000000";
function gf(t) {
  if (!pa(t))
    throw TypeError("Invalid UUID");
  return parseInt(t.substr(14, 1), 16);
}
const lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: cf,
  parse: jQ,
  stringify: ma,
  v1: Wd,
  v3: tf,
  v4: rf,
  v5: af,
  validate: pa,
  version: gf
}, Symbol.toStringTag, { value: "Module" })), hf = /* @__PURE__ */ dQ(lf);
var Ef = he && he.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A), Object.defineProperty(t, r, { enumerable: !0, get: function() {
    return e[A];
  } });
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), uf = he && he.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), $Q = he && he.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.hasOwnProperty.call(t, A) && Ef(e, t, A);
  return uf(e, t), e;
};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.prepareKeyValueMessage = gn.issueFileCommand = void 0;
const lh = $Q(cQ), Jg = $Q(Oi), Qf = hf, XQ = Or;
function Cf(t, e) {
  const A = process.env[`GITHUB_${t}`];
  if (!A)
    throw new Error(`Unable to find environment variable for file command ${t}`);
  if (!lh.existsSync(A))
    throw new Error(`Missing file at path: ${A}`);
  lh.appendFileSync(A, `${XQ.toCommandValue(e)}${Jg.EOL}`, {
    encoding: "utf8"
  });
}
gn.issueFileCommand = Cf;
function Bf(t, e) {
  const A = `ghadelimiter_${Qf.v4()}`, r = XQ.toCommandValue(e);
  if (t.includes(A))
    throw new Error(`Unexpected input: name should not contain the delimiter "${A}"`);
  if (r.includes(A))
    throw new Error(`Unexpected input: value should not contain the delimiter "${A}"`);
  return `${t}<<${A}${Jg.EOL}${r}${Jg.EOL}${A}`;
}
gn.prepareKeyValueMessage = Bf;
var Dn = {}, BA = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.checkBypass = ln.getProxyUrl = void 0;
function If(t) {
  const e = t.protocol === "https:";
  if (KQ(t))
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
ln.getProxyUrl = If;
function KQ(t) {
  if (!t.hostname)
    return !1;
  const e = t.hostname;
  if (df(e))
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
ln.checkBypass = KQ;
function df(t) {
  const e = t.toLowerCase();
  return e === "localhost" || e.startsWith("127.") || e.startsWith("[::1]") || e.startsWith("[0:0:0:0:0:0:0:1]");
}
var dn = {}, ff = hQ, yl = Bn, eC = lQ, pf = _i, mf = Vt;
dn.httpOverHttp = wf;
dn.httpsOverHttp = yf;
dn.httpOverHttps = Rf;
dn.httpsOverHttps = Df;
function wf(t) {
  var e = new Er(t);
  return e.request = yl.request, e;
}
function yf(t) {
  var e = new Er(t);
  return e.request = yl.request, e.createSocket = AC, e.defaultPort = 443, e;
}
function Rf(t) {
  var e = new Er(t);
  return e.request = eC.request, e;
}
function Df(t) {
  var e = new Er(t);
  return e.request = eC.request, e.createSocket = AC, e.defaultPort = 443, e;
}
function Er(t) {
  var e = this;
  e.options = t || {}, e.proxyOptions = e.options.proxy || {}, e.maxSockets = e.options.maxSockets || yl.Agent.defaultMaxSockets, e.requests = [], e.sockets = [], e.on("free", function(r, s, n, i) {
    for (var o = tC(s, n, i), a = 0, g = e.requests.length; a < g; ++a) {
      var c = e.requests[a];
      if (c.host === o.host && c.port === o.port) {
        e.requests.splice(a, 1), c.request.onSocket(r);
        return;
      }
    }
    r.destroy(), e.removeSocket(r);
  });
}
mf.inherits(Er, pf.EventEmitter);
Er.prototype.addRequest = function(e, A, r, s) {
  var n = this, i = Rl({ request: e }, n.options, tC(A, r, s));
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
Er.prototype.createSocket = function(e, A) {
  var r = this, s = {};
  r.sockets.push(s);
  var n = Rl({}, r.proxyOptions, {
    method: "CONNECT",
    path: e.host + ":" + e.port,
    agent: !1,
    headers: {
      host: e.host + ":" + e.port
    }
  });
  e.localAddress && (n.localAddress = e.localAddress), n.proxyAuth && (n.headers = n.headers || {}, n.headers["Proxy-Authorization"] = "Basic " + new Buffer(n.proxyAuth).toString("base64")), Rr("making CONNECT request");
  var i = r.request(n);
  i.useChunkedEncodingByDefault = !1, i.once("response", o), i.once("upgrade", a), i.once("connect", g), i.once("error", c), i.end();
  function o(E) {
    E.upgrade = !0;
  }
  function a(E, h, Q) {
    process.nextTick(function() {
      g(E, h, Q);
    });
  }
  function g(E, h, Q) {
    if (i.removeAllListeners(), h.removeAllListeners(), E.statusCode !== 200) {
      Rr(
        "tunneling socket could not be established, statusCode=%d",
        E.statusCode
      ), h.destroy();
      var B = new Error("tunneling socket could not be established, statusCode=" + E.statusCode);
      B.code = "ECONNRESET", e.request.emit("error", B), r.removeSocket(s);
      return;
    }
    if (Q.length > 0) {
      Rr("got illegal response body from proxy"), h.destroy();
      var B = new Error("got illegal response body from proxy");
      B.code = "ECONNRESET", e.request.emit("error", B), r.removeSocket(s);
      return;
    }
    return Rr("tunneling connection has established"), r.sockets[r.sockets.indexOf(s)] = h, A(h);
  }
  function c(E) {
    i.removeAllListeners(), Rr(
      `tunneling socket could not be established, cause=%s
`,
      E.message,
      E.stack
    );
    var h = new Error("tunneling socket could not be established, cause=" + E.message);
    h.code = "ECONNRESET", e.request.emit("error", h), r.removeSocket(s);
  }
};
Er.prototype.removeSocket = function(e) {
  var A = this.sockets.indexOf(e);
  if (A !== -1) {
    this.sockets.splice(A, 1);
    var r = this.requests.shift();
    r && this.createSocket(r, function(s) {
      r.request.onSocket(s);
    });
  }
};
function AC(t, e) {
  var A = this;
  Er.prototype.createSocket.call(A, t, function(r) {
    var s = t.request.getHeader("host"), n = Rl({}, A.options, {
      socket: r,
      servername: s ? s.replace(/:.*$/, "") : t.host
    }), i = ff.connect(0, n);
    A.sockets[A.sockets.indexOf(r)] = i, e(i);
  });
}
function tC(t, e, A) {
  return typeof t == "string" ? {
    host: t,
    port: e,
    localAddress: A
  } : t;
}
function Rl(t) {
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
var Rr;
process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? Rr = function() {
  var t = Array.prototype.slice.call(arguments);
  typeof t[0] == "string" ? t[0] = "TUNNEL: " + t[0] : t.unshift("TUNNEL:"), console.error.apply(console, t);
} : Rr = function() {
};
dn.debug = Rr;
var bf = dn, ue = {}, Le = {
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
let cA = class extends Error {
  constructor(e) {
    super(e), this.name = "UndiciError", this.code = "UND_ERR";
  }
}, kf = class rC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, rC), this.name = "ConnectTimeoutError", this.message = e || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
  }
}, Sf = class sC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, sC), this.name = "HeadersTimeoutError", this.message = e || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
  }
}, Ff = class nC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, nC), this.name = "HeadersOverflowError", this.message = e || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
  }
}, Nf = class iC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, iC), this.name = "BodyTimeoutError", this.message = e || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
  }
}, Tf = class oC extends cA {
  constructor(e, A, r, s) {
    super(e), Error.captureStackTrace(this, oC), this.name = "ResponseStatusCodeError", this.message = e || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = s, this.status = A, this.statusCode = A, this.headers = r;
  }
}, Uf = class aC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, aC), this.name = "InvalidArgumentError", this.message = e || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
  }
}, vf = class cC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, cC), this.name = "InvalidReturnValueError", this.message = e || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
  }
}, Lf = class gC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, gC), this.name = "AbortError", this.message = e || "Request aborted", this.code = "UND_ERR_ABORTED";
  }
}, Mf = class lC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, lC), this.name = "InformationalError", this.message = e || "Request information", this.code = "UND_ERR_INFO";
  }
}, Gf = class hC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, hC), this.name = "RequestContentLengthMismatchError", this.message = e || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
  }
}, Yf = class EC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, EC), this.name = "ResponseContentLengthMismatchError", this.message = e || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
  }
}, xf = class uC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, uC), this.name = "ClientDestroyedError", this.message = e || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
  }
}, Jf = class QC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, QC), this.name = "ClientClosedError", this.message = e || "The client is closed", this.code = "UND_ERR_CLOSED";
  }
}, Of = class CC extends cA {
  constructor(e, A) {
    super(e), Error.captureStackTrace(this, CC), this.name = "SocketError", this.message = e || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = A;
  }
}, BC = class IC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, IC), this.name = "NotSupportedError", this.message = e || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
  }
}, _f = class extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, BC), this.name = "MissingUpstreamError", this.message = e || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
  }
}, Pf = class dC extends Error {
  constructor(e, A, r) {
    super(e), Error.captureStackTrace(this, dC), this.name = "HTTPParserError", this.code = A ? `HPE_${A}` : void 0, this.data = r ? r.toString() : void 0;
  }
}, Hf = class fC extends cA {
  constructor(e) {
    super(e), Error.captureStackTrace(this, fC), this.name = "ResponseExceededMaxSizeError", this.message = e || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
  }
}, Vf = class pC extends cA {
  constructor(e, A, { headers: r, data: s }) {
    super(e), Error.captureStackTrace(this, pC), this.name = "RequestRetryError", this.message = e || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = A, this.data = s, this.headers = r;
  }
};
var ke = {
  HTTPParserError: Pf,
  UndiciError: cA,
  HeadersTimeoutError: Sf,
  HeadersOverflowError: Ff,
  BodyTimeoutError: Nf,
  RequestContentLengthMismatchError: Gf,
  ConnectTimeoutError: kf,
  ResponseStatusCodeError: Tf,
  InvalidArgumentError: Uf,
  InvalidReturnValueError: vf,
  RequestAbortedError: Lf,
  ClientDestroyedError: xf,
  ClientClosedError: Jf,
  InformationalError: Mf,
  SocketError: Of,
  NotSupportedError: BC,
  ResponseContentLengthMismatchError: Yf,
  BalancedPoolMissingUpstreamError: _f,
  ResponseExceededMaxSizeError: Hf,
  RequestRetryError: Vf
};
const Ko = {}, Og = [
  "Accept",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Ranges",
  "Access-Control-Allow-Credentials",
  "Access-Control-Allow-Headers",
  "Access-Control-Allow-Methods",
  "Access-Control-Allow-Origin",
  "Access-Control-Expose-Headers",
  "Access-Control-Max-Age",
  "Access-Control-Request-Headers",
  "Access-Control-Request-Method",
  "Age",
  "Allow",
  "Alt-Svc",
  "Alt-Used",
  "Authorization",
  "Cache-Control",
  "Clear-Site-Data",
  "Connection",
  "Content-Disposition",
  "Content-Encoding",
  "Content-Language",
  "Content-Length",
  "Content-Location",
  "Content-Range",
  "Content-Security-Policy",
  "Content-Security-Policy-Report-Only",
  "Content-Type",
  "Cookie",
  "Cross-Origin-Embedder-Policy",
  "Cross-Origin-Opener-Policy",
  "Cross-Origin-Resource-Policy",
  "Date",
  "Device-Memory",
  "Downlink",
  "ECT",
  "ETag",
  "Expect",
  "Expect-CT",
  "Expires",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Keep-Alive",
  "Last-Modified",
  "Link",
  "Location",
  "Max-Forwards",
  "Origin",
  "Permissions-Policy",
  "Pragma",
  "Proxy-Authenticate",
  "Proxy-Authorization",
  "RTT",
  "Range",
  "Referer",
  "Referrer-Policy",
  "Refresh",
  "Retry-After",
  "Sec-WebSocket-Accept",
  "Sec-WebSocket-Extensions",
  "Sec-WebSocket-Key",
  "Sec-WebSocket-Protocol",
  "Sec-WebSocket-Version",
  "Server",
  "Server-Timing",
  "Service-Worker-Allowed",
  "Service-Worker-Navigation-Preload",
  "Set-Cookie",
  "SourceMap",
  "Strict-Transport-Security",
  "Supports-Loading-Mode",
  "TE",
  "Timing-Allow-Origin",
  "Trailer",
  "Transfer-Encoding",
  "Upgrade",
  "Upgrade-Insecure-Requests",
  "User-Agent",
  "Vary",
  "Via",
  "WWW-Authenticate",
  "X-Content-Type-Options",
  "X-DNS-Prefetch-Control",
  "X-Frame-Options",
  "X-Permitted-Cross-Domain-Policies",
  "X-Powered-By",
  "X-Requested-With",
  "X-XSS-Protection"
];
for (let t = 0; t < Og.length; ++t) {
  const e = Og[t], A = e.toLowerCase();
  Ko[e] = Ko[A] = A;
}
Object.setPrototypeOf(Ko, null);
var Wf = {
  wellknownHeaderNames: Og,
  headerNameLowerCasedRecord: Ko
};
const mC = Xe, { kDestroyed: wC, kBodyUsed: hh } = Le, { IncomingMessage: qf } = Bn, hn = Wt, jf = Il, { InvalidArgumentError: dA } = ke, { Blob: Eh } = ws, ea = Vt, { stringify: zf } = ld, { headerNameLowerCasedRecord: Zf } = Wf, [tc, uh] = process.versions.node.split(".").map((t) => Number(t));
function $f() {
}
function Dl(t) {
  return t && typeof t == "object" && typeof t.pipe == "function" && typeof t.on == "function";
}
function yC(t) {
  return Eh && t instanceof Eh || t && typeof t == "object" && (typeof t.stream == "function" || typeof t.arrayBuffer == "function") && /^(Blob|File)$/.test(t[Symbol.toStringTag]);
}
function Xf(t, e) {
  if (t.includes("?") || t.includes("#"))
    throw new Error('Query params cannot be passed when url already contains "?" or "#".');
  const A = zf(e);
  return A && (t += "?" + A), t;
}
function RC(t) {
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
function Kf(t) {
  if (t = RC(t), t.pathname !== "/" || t.search || t.hash)
    throw new dA("invalid url");
  return t;
}
function ep(t) {
  if (t[0] === "[") {
    const A = t.indexOf("]");
    return mC(A !== -1), t.substring(1, A);
  }
  const e = t.indexOf(":");
  return e === -1 ? t : t.substring(0, e);
}
function Ap(t) {
  if (!t)
    return null;
  mC.strictEqual(typeof t, "string");
  const e = ep(t);
  return jf.isIP(e) ? "" : e;
}
function tp(t) {
  return JSON.parse(JSON.stringify(t));
}
function rp(t) {
  return t != null && typeof t[Symbol.asyncIterator] == "function";
}
function sp(t) {
  return t != null && (typeof t[Symbol.iterator] == "function" || typeof t[Symbol.asyncIterator] == "function");
}
function np(t) {
  if (t == null)
    return 0;
  if (Dl(t)) {
    const e = t._readableState;
    return e && e.objectMode === !1 && e.ended === !0 && Number.isFinite(e.length) ? e.length : null;
  } else {
    if (yC(t))
      return t.size != null ? t.size : null;
    if (bC(t))
      return t.byteLength;
  }
  return null;
}
function bl(t) {
  return !t || !!(t.destroyed || t[wC]);
}
function DC(t) {
  const e = t && t._readableState;
  return bl(t) && e && !e.endEmitted;
}
function ip(t, e) {
  t == null || !Dl(t) || bl(t) || (typeof t.destroy == "function" ? (Object.getPrototypeOf(t).constructor === qf && (t.socket = null), t.destroy(e)) : e && process.nextTick((A, r) => {
    A.emit("error", r);
  }, t, e), t.destroyed !== !0 && (t[wC] = !0));
}
const op = /timeout=(\d+)/;
function ap(t) {
  const e = t.toString().match(op);
  return e ? parseInt(e[1], 10) * 1e3 : null;
}
function cp(t) {
  return Zf[t] || t.toLowerCase();
}
function gp(t, e = {}) {
  if (!Array.isArray(t))
    return t;
  for (let A = 0; A < t.length; A += 2) {
    const r = t[A].toString().toLowerCase();
    let s = e[r];
    s ? (Array.isArray(s) || (s = [s], e[r] = s), s.push(t[A + 1].toString("utf8"))) : Array.isArray(t[A + 1]) ? e[r] = t[A + 1].map((n) => n.toString("utf8")) : e[r] = t[A + 1].toString("utf8");
  }
  return "content-length" in e && "content-disposition" in e && (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")), e;
}
function lp(t) {
  const e = [];
  let A = !1, r = -1;
  for (let s = 0; s < t.length; s += 2) {
    const n = t[s + 0].toString(), i = t[s + 1].toString("utf8");
    n.length === 14 && (n === "content-length" || n.toLowerCase() === "content-length") ? (e.push(n, i), A = !0) : n.length === 19 && (n === "content-disposition" || n.toLowerCase() === "content-disposition") ? r = e.push(n, i) - 1 : e.push(n, i);
  }
  return A && r !== -1 && (e[r] = Buffer.from(e[r]).toString("latin1")), e;
}
function bC(t) {
  return t instanceof Uint8Array || Buffer.isBuffer(t);
}
function hp(t, e, A) {
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
function Ep(t) {
  return !!(t && (hn.isDisturbed ? hn.isDisturbed(t) || t[hh] : t[hh] || t.readableDidRead || t._readableState && t._readableState.dataEmitted || DC(t)));
}
function up(t) {
  return !!(t && (hn.isErrored ? hn.isErrored(t) : /state: 'errored'/.test(
    ea.inspect(t)
  )));
}
function Qp(t) {
  return !!(t && (hn.isReadable ? hn.isReadable(t) : /state: 'readable'/.test(
    ea.inspect(t)
  )));
}
function Cp(t) {
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
async function* Bp(t) {
  for await (const e of t)
    yield Buffer.isBuffer(e) ? e : Buffer.from(e);
}
let bn;
function Ip(t) {
  if (bn || (bn = Jr.ReadableStream), bn.from)
    return bn.from(Bp(t));
  let e;
  return new bn(
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
function dp(t) {
  return t && typeof t == "object" && typeof t.append == "function" && typeof t.delete == "function" && typeof t.get == "function" && typeof t.getAll == "function" && typeof t.has == "function" && typeof t.set == "function" && t[Symbol.toStringTag] === "FormData";
}
function fp(t) {
  if (t) {
    if (typeof t.throwIfAborted == "function")
      t.throwIfAborted();
    else if (t.aborted) {
      const e = new Error("The operation was aborted");
      throw e.name = "AbortError", e;
    }
  }
}
function pp(t, e) {
  return "addEventListener" in t ? (t.addEventListener("abort", e, { once: !0 }), () => t.removeEventListener("abort", e)) : (t.addListener("abort", e), () => t.removeListener("abort", e));
}
const mp = !!String.prototype.toWellFormed;
function wp(t) {
  return mp ? `${t}`.toWellFormed() : ea.toUSVString ? ea.toUSVString(t) : `${t}`;
}
function yp(t) {
  if (t == null || t === "")
    return { start: 0, end: null, size: null };
  const e = t ? t.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
  return e ? {
    start: parseInt(e[1]),
    end: e[2] ? parseInt(e[2]) : null,
    size: e[3] ? parseInt(e[3]) : null
  } : null;
}
const kC = /* @__PURE__ */ Object.create(null);
kC.enumerable = !0;
var me = {
  kEnumerableProperty: kC,
  nop: $f,
  isDisturbed: Ep,
  isErrored: up,
  isReadable: Qp,
  toUSVString: wp,
  isReadableAborted: DC,
  isBlobLike: yC,
  parseOrigin: Kf,
  parseURL: RC,
  getServerName: Ap,
  isStream: Dl,
  isIterable: sp,
  isAsyncIterable: rp,
  isDestroyed: bl,
  headerNameToString: cp,
  parseRawHeaders: lp,
  parseHeaders: gp,
  parseKeepAliveTimeout: ap,
  destroy: ip,
  bodyLength: np,
  deepClone: tp,
  ReadableStreamFrom: Ip,
  isBuffer: bC,
  validateHandler: hp,
  getSocketInfo: Cp,
  isFormDataLike: dp,
  buildURL: Xf,
  throwIfAborted: fp,
  addAbortListener: pp,
  parseRangeHeader: yp,
  nodeMajor: tc,
  nodeMinor: uh,
  nodeHasAutoSelectFamily: tc > 18 || tc === 18 && uh >= 13,
  safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"]
};
let rc = Date.now(), dr;
const wr = [];
function Rp() {
  rc = Date.now();
  let t = wr.length, e = 0;
  for (; e < t; ) {
    const A = wr[e];
    A.state === 0 ? A.state = rc + A.delay : A.state > 0 && rc >= A.state && (A.state = -1, A.callback(A.opaque)), A.state === -1 ? (A.state = -2, e !== t - 1 ? wr[e] = wr.pop() : wr.pop(), t -= 1) : e += 1;
  }
  wr.length > 0 && SC();
}
function SC() {
  dr && dr.refresh ? dr.refresh() : (clearTimeout(dr), dr = setTimeout(Rp, 1e3), dr.unref && dr.unref());
}
class Qh {
  constructor(e, A, r) {
    this.callback = e, this.delay = A, this.opaque = r, this.state = -2, this.refresh();
  }
  refresh() {
    this.state === -2 && (wr.push(this), (!dr || wr.length === 1) && SC()), this.state = 0;
  }
  clear() {
    this.state = -1;
  }
}
var Dp = {
  setTimeout(t, e, A) {
    return e < 1e3 ? setTimeout(t, e, A) : new Qh(t, e, A);
  },
  clearTimeout(t) {
    t instanceof Qh ? t.clear() : clearTimeout(t);
  }
}, Ss = { exports: {} }, sc, Ch;
function FC() {
  if (Ch)
    return sc;
  Ch = 1;
  const t = EQ.EventEmitter, e = In.inherits;
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
  }, sc = A, sc;
}
var nc, Bh;
function bp() {
  if (Bh)
    return nc;
  Bh = 1;
  const t = In.inherits, e = Ia.Readable;
  function A(r) {
    e.call(this, r);
  }
  return t(A, e), A.prototype._read = function(r) {
  }, nc = A, nc;
}
var ic, Ih;
function kl() {
  return Ih || (Ih = 1, ic = function(e, A, r) {
    if (!e || e[A] === void 0 || e[A] === null)
      return r;
    if (typeof e[A] != "number" || isNaN(e[A]))
      throw new TypeError("Limit " + A + " is not a valid number");
    return e[A];
  }), ic;
}
var oc, dh;
function kp() {
  if (dh)
    return oc;
  dh = 1;
  const t = EQ.EventEmitter, e = In.inherits, A = kl(), r = FC(), s = Buffer.from(`\r
\r
`), n = /\r\n/g, i = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
  function o(a) {
    t.call(this), a = a || {};
    const g = this;
    this.nread = 0, this.maxed = !1, this.npairs = 0, this.maxHeaderPairs = A(a, "maxHeaderPairs", 2e3), this.maxHeaderSize = A(a, "maxHeaderSize", 80 * 1024), this.buffer = "", this.header = {}, this.finished = !1, this.ss = new r(s), this.ss.on("info", function(c, E, h, Q) {
      E && !g.maxed && (g.nread + Q - h >= g.maxHeaderSize ? (Q = g.maxHeaderSize - g.nread + h, g.nread = g.maxHeaderSize, g.maxed = !0) : g.nread += Q - h, g.buffer += E.toString("binary", h, Q)), c && g._finish();
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
      const Q = a[h].indexOf(":");
      if (Q === -1 || Q === 0)
        return;
      if (c = i.exec(a[h]), E = c[1].toLowerCase(), this.header[E] = this.header[E] || [], this.header[E].push(c[2] || ""), ++this.npairs === this.maxHeaderPairs)
        break;
    }
  }, oc = o, oc;
}
var ac, fh;
function NC() {
  if (fh)
    return ac;
  fh = 1;
  const t = Ia.Writable, e = In.inherits, A = FC(), r = bp(), s = kp(), n = 45, i = Buffer.from("-"), o = Buffer.from(`\r
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
      const Q = this._hparser.push(c);
      if (!this._inHeader && Q !== void 0 && Q < c.length)
        c = c.slice(Q);
      else
        return h();
    }
    this._firstWrite && (this._bparser.push(o), this._firstWrite = !1), this._bparser.push(c), this._pause ? this._cb = h : h();
  }, g.prototype.reset = function() {
    this._part = void 0, this._bparser = void 0, this._hparser = void 0;
  }, g.prototype.setBoundary = function(c) {
    const E = this;
    this._bparser = new A(`\r
--` + c), this._bparser.on("info", function(h, Q, B, u) {
      E._oninfo(h, Q, B, u);
    });
  }, g.prototype._ignore = function() {
    this._part && !this._ignoreData && (this._ignoreData = !0, this._part.on("error", a), this._part.resume());
  }, g.prototype._oninfo = function(c, E, h, Q) {
    let B;
    const u = this;
    let I = 0, f, C = !0;
    if (!this._part && this._justMatched && E) {
      for (; this._dashes < 2 && h + I < Q; )
        if (E[h + I] === n)
          ++I, ++this._dashes;
        else {
          this._dashes && (B = i), this._dashes = 0;
          break;
        }
      if (this._dashes === 2 && (h + I < Q && this.listenerCount("trailer") !== 0 && this.emit("trailer", E.slice(h + I, Q)), this.reset(), this._finished = !0, u._parts === 0 && (u._realFinish = !0, u.emit("finish"), u._realFinish = !1)), this._dashes)
        return;
    }
    this._justMatched && (this._justMatched = !1), this._part || (this._part = new r(this._partOpts), this._part._read = function(d) {
      u._unpause();
    }, this._isPreamble && this.listenerCount("preamble") !== 0 ? this.emit("preamble", this._part) : this._isPreamble !== !0 && this.listenerCount("part") !== 0 ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = !0)), E && h < Q && !this._ignoreData && (this._isPreamble || !this._inHeader ? (B && (C = this._part.push(B)), C = this._part.push(E.slice(h, Q)), C || (this._pause = !0)) : !this._isPreamble && this._inHeader && (B && this._hparser.push(B), f = this._hparser.push(E.slice(h, Q)), !this._inHeader && f !== void 0 && f < Q && this._oninfo(!1, E, h + f, Q))), c && (this._hparser.reset(), this._isPreamble ? this._isPreamble = !1 : h !== Q && (++this._parts, this._part.on("end", function() {
      --u._parts === 0 && (u._finished ? (u._realFinish = !0, u.emit("finish"), u._realFinish = !1) : u._unpause());
    })), this._part.push(null), this._part = void 0, this._ignoreData = !1, this._justMatched = !0, this._dashes = 0);
  }, g.prototype._unpause = function() {
    if (this._pause && (this._pause = !1, this._cb)) {
      const c = this._cb;
      this._cb = void 0, c();
    }
  }, ac = g, ac;
}
var cc, ph;
function Sl() {
  if (ph)
    return cc;
  ph = 1;
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
  return cc = s, cc;
}
var gc, mh;
function TC() {
  if (mh)
    return gc;
  mh = 1;
  const t = Sl(), e = /%[a-fA-F0-9][a-fA-F0-9]/g, A = {
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
    let E = s, h = "", Q = !1, B = !1, u = 0, I = "";
    const f = g.length;
    for (var C = 0; C < f; ++C) {
      const d = g[C];
      if (d === "\\" && Q)
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
          Q ? (Q = !1, E = s) : Q = !0;
          continue;
        }
      else if (B && Q && (I += "\\"), B = !1, (E === i || E === o) && d === "'") {
        E === i ? (E = o, h = I.substring(1)) : E = n, I = "";
        continue;
      } else if (E === s && (d === "*" || d === "=") && c.length) {
        E = d === "*" ? i : n, c[u] = [I, void 0], I = "";
        continue;
      } else if (!Q && d === ";") {
        E = s, h ? (I.length && (I = t(
          I.replace(e, r),
          "binary",
          h
        )), h = "") : I.length && (I = t(I, "binary", "utf8")), c[u] === void 0 ? c[u] = I : c[u][1] = I, I = "", ++u;
        continue;
      } else if (!Q && (d === " " || d === "	"))
        continue;
      I += d;
    }
    return h && I.length ? I = t(
      I.replace(e, r),
      "binary",
      h
    ) : I && (I = t(I, "binary", "utf8")), c[u] === void 0 ? I && (c[u] = I) : c[u][1] = I, c;
  }
  return gc = a, gc;
}
var lc, wh;
function Sp() {
  return wh || (wh = 1, lc = function(e) {
    if (typeof e != "string")
      return "";
    for (var A = e.length - 1; A >= 0; --A)
      switch (e.charCodeAt(A)) {
        case 47:
        case 92:
          return e = e.slice(A + 1), e === ".." || e === "." ? "" : e;
      }
    return e === ".." || e === "." ? "" : e;
  }), lc;
}
var hc, yh;
function Fp() {
  if (yh)
    return hc;
  yh = 1;
  const { Readable: t } = Ia, { inherits: e } = In, A = NC(), r = TC(), s = Sl(), n = Sp(), i = kl(), o = /^boundary$/i, a = /^form-data$/i, g = /^charset$/i, c = /^filename$/i, E = /^name$/i;
  h.detect = /^multipart\/form-data/i;
  function h(u, I) {
    let f, C;
    const d = this;
    let w;
    const p = I.limits, m = I.isPartAFile || ((M, P, j) => P === "application/octet-stream" || j !== void 0), D = I.parsedConType || [], b = I.defCharset || "utf8", G = I.preservePath, _ = { highWaterMark: I.fileHwm };
    for (f = 0, C = D.length; f < C; ++f)
      if (Array.isArray(D[f]) && o.test(D[f][0])) {
        w = D[f][1];
        break;
      }
    function Y() {
      V === 0 && S && !u._done && (S = !1, d.end());
    }
    if (typeof w != "string")
      throw new Error("Multipart: Boundary not found");
    const te = i(p, "fieldSize", 1 * 1024 * 1024), ee = i(p, "fileSize", 1 / 0), Ee = i(p, "files", 1 / 0), q = i(p, "fields", 1 / 0), $ = i(p, "parts", 1 / 0), ne = i(p, "headerPairs", 2e3), se = i(p, "headerSize", 80 * 1024);
    let K = 0, k = 0, V = 0, U, F, S = !1;
    this._needDrain = !1, this._pause = !1, this._cb = void 0, this._nparts = 0, this._boy = u;
    const L = {
      boundary: w,
      maxHeaderPairs: ne,
      maxHeaderSize: se,
      partHwm: _.highWaterMark,
      highWaterMark: I.highWaterMark
    };
    this.parser = new A(L), this.parser.on("drain", function() {
      if (d._needDrain = !1, d._cb && !d._pause) {
        const M = d._cb;
        d._cb = void 0, M();
      }
    }).on("part", function M(P) {
      if (++d._nparts > $)
        return d.parser.removeListener("part", M), d.parser.on("part", Q), u.hitPartsLimit = !0, u.emit("partsLimit"), Q(P);
      if (F) {
        const j = F;
        j.emit("end"), j.removeAllListeners("end");
      }
      P.on("header", function(j) {
        let Z, J, oe, ye, Ie, He, Se = 0;
        if (j["content-type"] && (oe = r(j["content-type"][0]), oe[0])) {
          for (Z = oe[0].toLowerCase(), f = 0, C = oe.length; f < C; ++f)
            if (g.test(oe[f][0])) {
              ye = oe[f][1].toLowerCase();
              break;
            }
        }
        if (Z === void 0 && (Z = "text/plain"), ye === void 0 && (ye = b), j["content-disposition"]) {
          if (oe = r(j["content-disposition"][0]), !a.test(oe[0]))
            return Q(P);
          for (f = 0, C = oe.length; f < C; ++f)
            E.test(oe[f][0]) ? J = oe[f][1] : c.test(oe[f][0]) && (He = oe[f][1], G || (He = n(He)));
        } else
          return Q(P);
        j["content-transfer-encoding"] ? Ie = j["content-transfer-encoding"][0].toLowerCase() : Ie = "7bit";
        let Ge, Ve;
        if (m(J, Z, He)) {
          if (K === Ee)
            return u.hitFilesLimit || (u.hitFilesLimit = !0, u.emit("filesLimit")), Q(P);
          if (++K, u.listenerCount("file") === 0) {
            d.parser._ignore();
            return;
          }
          ++V;
          const fe = new B(_);
          U = fe, fe.on("end", function() {
            if (--V, d._pause = !1, Y(), d._cb && !d._needDrain) {
              const de = d._cb;
              d._cb = void 0, de();
            }
          }), fe._read = function(de) {
            if (d._pause && (d._pause = !1, d._cb && !d._needDrain)) {
              const we = d._cb;
              d._cb = void 0, we();
            }
          }, u.emit("file", J, fe, He, Ie, Z), Ge = function(de) {
            if ((Se += de.length) > ee) {
              const we = ee - Se + de.length;
              we > 0 && fe.push(de.slice(0, we)), fe.truncated = !0, fe.bytesRead = ee, P.removeAllListeners("data"), fe.emit("limit");
              return;
            } else
              fe.push(de) || (d._pause = !0);
            fe.bytesRead = Se;
          }, Ve = function() {
            U = void 0, fe.push(null);
          };
        } else {
          if (k === q)
            return u.hitFieldsLimit || (u.hitFieldsLimit = !0, u.emit("fieldsLimit")), Q(P);
          ++k, ++V;
          let fe = "", de = !1;
          F = P, Ge = function(we) {
            if ((Se += we.length) > te) {
              const TA = te - (Se - we.length);
              fe += we.toString("binary", 0, TA), de = !0, P.removeAllListeners("data");
            } else
              fe += we.toString("binary");
          }, Ve = function() {
            F = void 0, fe.length && (fe = s(fe, "binary", ye)), u.emit("field", J, fe, !1, de, Ie, Z), --V, Y();
          };
        }
        P._readableState.sync = !1, P.on("data", Ge), P.on("end", Ve);
      }).on("error", function(j) {
        U && U.emit("error", j);
      });
    }).on("error", function(M) {
      u.emit("error", M);
    }).on("finish", function() {
      S = !0, Y();
    });
  }
  h.prototype.write = function(u, I) {
    const f = this.parser.write(u);
    f && !this._pause ? I() : (this._needDrain = !f, this._cb = I);
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
  }, hc = h, hc;
}
var Ec, Rh;
function Np() {
  if (Rh)
    return Ec;
  Rh = 1;
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
  }, Ec = A, Ec;
}
var uc, Dh;
function Tp() {
  if (Dh)
    return uc;
  Dh = 1;
  const t = Np(), e = Sl(), A = kl(), r = /^charset$/i;
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
          const Q = this._keyTrunc;
          if (a > c ? h = this._key += this.decoder.write(n.toString("binary", c, a)) : h = this._key, this._hitLimit = !1, this._checkingBytes = !0, this._key = "", this._bytesKey = 0, this._keyTrunc = !1, this.decoder.reset(), h.length && this.boy.emit(
            "field",
            e(h, "binary", this.charset),
            "",
            Q,
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
  }, uc = s, uc;
}
var bh;
function Up() {
  if (bh)
    return Ss.exports;
  bh = 1;
  const t = Ia.Writable, { inherits: e } = In, A = NC(), r = Fp(), s = Tp(), n = TC();
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
  }, Ss.exports = i, Ss.exports.default = i, Ss.exports.Busboy = i, Ss.exports.Dicer = A, Ss.exports;
}
var Qc, kh;
function ys() {
  if (kh)
    return Qc;
  kh = 1;
  const { MessageChannel: t, receiveMessageOnPort: e } = uQ, A = ["GET", "HEAD", "POST"], r = new Set(A), s = [101, 204, 205, 304], n = [301, 302, 303, 307, 308], i = new Set(n), o = [
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
  ], c = new Set(g), E = ["follow", "manual", "error"], h = ["GET", "HEAD", "OPTIONS", "TRACE"], Q = new Set(h), B = ["navigate", "same-origin", "no-cors", "cors"], u = ["omit", "same-origin", "include"], I = [
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
  ], m = new Set(p), D = globalThis.DOMException ?? (() => {
    try {
      atob("~");
    } catch (_) {
      return Object.getPrototypeOf(_).constructor;
    }
  })();
  let b;
  const G = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
  // structuredClone was added in v17.0.0, but fetch supports v16.8
  function(Y, te = void 0) {
    if (arguments.length === 0)
      throw new TypeError("missing argument");
    return b || (b = new t()), b.port1.unref(), b.port2.unref(), b.port1.postMessage(Y, te == null ? void 0 : te.transfer), e(b.port2).message;
  };
  return Qc = {
    DOMException: D,
    structuredClone: G,
    subresource: p,
    forbiddenMethods: d,
    requestBodyHeader: f,
    referrerPolicy: g,
    requestRedirect: E,
    requestMode: B,
    requestCredentials: u,
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
    safeMethodsSet: Q,
    forbiddenMethodsSet: w,
    referrerPolicySet: c
  }, Qc;
}
var Cc, Sh;
function Hi() {
  if (Sh)
    return Cc;
  Sh = 1;
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
  return Cc = {
    getGlobalOrigin: e,
    setGlobalOrigin: A
  }, Cc;
}
var Bc, Fh;
function kt() {
  if (Fh)
    return Bc;
  Fh = 1;
  const { redirectStatusSet: t, referrerPolicySet: e, badPortsSet: A } = ys(), { getGlobalOrigin: r } = Hi(), { performance: s } = hd, { isBlobLike: n, toUSVString: i, ReadableStreamFrom: o } = me, a = Xe, { isUint8Array: g } = QQ;
  let c = [], E;
  try {
    E = require("crypto");
    const R = ["sha256", "sha384", "sha512"];
    c = E.getHashes().filter((H) => R.includes(H));
  } catch {
  }
  function h(R) {
    const H = R.urlList, X = H.length;
    return X === 0 ? null : H[X - 1].toString();
  }
  function Q(R, H) {
    if (!t.has(R.status))
      return null;
    let X = R.headersList.get("location");
    return X !== null && p(X) && (X = new URL(X, h(R))), X && !X.hash && (X.hash = H), X;
  }
  function B(R) {
    return R.urlList[R.urlList.length - 1];
  }
  function u(R) {
    const H = B(R);
    return Ye(H) && A.has(H.port) ? "blocked" : "allowed";
  }
  function I(R) {
    var H, X;
    return R instanceof Error || ((H = R == null ? void 0 : R.constructor) == null ? void 0 : H.name) === "Error" || ((X = R == null ? void 0 : R.constructor) == null ? void 0 : X.name) === "DOMException";
  }
  function f(R) {
    for (let H = 0; H < R.length; ++H) {
      const X = R.charCodeAt(H);
      if (!(X === 9 || // HTAB
      X >= 32 && X <= 126 || // SP / VCHAR
      X >= 128 && X <= 255))
        return !1;
    }
    return !0;
  }
  function C(R) {
    switch (R) {
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
        return R >= 33 && R <= 126;
    }
  }
  function d(R) {
    if (R.length === 0)
      return !1;
    for (let H = 0; H < R.length; ++H)
      if (!C(R.charCodeAt(H)))
        return !1;
    return !0;
  }
  function w(R) {
    return d(R);
  }
  function p(R) {
    return !(R.startsWith("	") || R.startsWith(" ") || R.endsWith("	") || R.endsWith(" ") || R.includes("\0") || R.includes("\r") || R.includes(`
`));
  }
  function m(R, H) {
    const { headersList: X } = H, ge = (X.get("referrer-policy") ?? "").split(",");
    let pe = "";
    if (ge.length > 0)
      for (let We = ge.length; We !== 0; We--) {
        const mA = ge[We - 1].trim();
        if (e.has(mA)) {
          pe = mA;
          break;
        }
      }
    pe !== "" && (R.referrerPolicy = pe);
  }
  function D() {
    return "allowed";
  }
  function b() {
    return "success";
  }
  function G() {
    return "success";
  }
  function _(R) {
    let H = null;
    H = R.mode, R.headersList.set("sec-fetch-mode", H);
  }
  function Y(R) {
    let H = R.origin;
    if (R.responseTainting === "cors" || R.mode === "websocket")
      H && R.headersList.append("origin", H);
    else if (R.method !== "GET" && R.method !== "HEAD") {
      switch (R.referrerPolicy) {
        case "no-referrer":
          H = null;
          break;
        case "no-referrer-when-downgrade":
        case "strict-origin":
        case "strict-origin-when-cross-origin":
          R.origin && Qe(R.origin) && !Qe(B(R)) && (H = null);
          break;
        case "same-origin":
          M(R, B(R)) || (H = null);
          break;
      }
      H && R.headersList.append("origin", H);
    }
  }
  function te(R) {
    return s.now();
  }
  function ee(R) {
    return {
      startTime: R.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: R.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    };
  }
  function Ee() {
    return {
      referrerPolicy: "strict-origin-when-cross-origin"
    };
  }
  function q(R) {
    return {
      referrerPolicy: R.referrerPolicy
    };
  }
  function $(R) {
    const H = R.referrerPolicy;
    a(H);
    let X = null;
    if (R.referrer === "client") {
      const HA = r();
      if (!HA || HA.origin === "null")
        return "no-referrer";
      X = new URL(HA);
    } else
      R.referrer instanceof URL && (X = R.referrer);
    let ge = ne(X);
    const pe = ne(X, !0);
    ge.toString().length > 4096 && (ge = pe);
    const We = M(R, ge), mA = se(ge) && !se(R.url);
    switch (H) {
      case "origin":
        return pe ?? ne(X, !0);
      case "unsafe-url":
        return ge;
      case "same-origin":
        return We ? pe : "no-referrer";
      case "origin-when-cross-origin":
        return We ? ge : pe;
      case "strict-origin-when-cross-origin": {
        const HA = B(R);
        return M(ge, HA) ? ge : se(ge) && !se(HA) ? "no-referrer" : pe;
      }
      case "strict-origin":
      case "no-referrer-when-downgrade":
      default:
        return mA ? "no-referrer" : pe;
    }
  }
  function ne(R, H) {
    return a(R instanceof URL), R.protocol === "file:" || R.protocol === "about:" || R.protocol === "blank:" ? "no-referrer" : (R.username = "", R.password = "", R.hash = "", H && (R.pathname = "", R.search = ""), R);
  }
  function se(R) {
    if (!(R instanceof URL))
      return !1;
    if (R.href === "about:blank" || R.href === "about:srcdoc" || R.protocol === "data:" || R.protocol === "file:")
      return !0;
    return H(R.origin);
    function H(X) {
      if (X == null || X === "null")
        return !1;
      const ge = new URL(X);
      return !!(ge.protocol === "https:" || ge.protocol === "wss:" || /^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(ge.hostname) || ge.hostname === "localhost" || ge.hostname.includes("localhost.") || ge.hostname.endsWith(".localhost"));
    }
  }
  function K(R, H) {
    if (E === void 0)
      return !0;
    const X = V(H);
    if (X === "no metadata" || X.length === 0)
      return !0;
    const ge = U(X), pe = F(X, ge);
    for (const We of pe) {
      const mA = We.algo, HA = We.hash;
      let UA = E.createHash(mA).update(R).digest("base64");
      if (UA[UA.length - 1] === "=" && (UA[UA.length - 2] === "=" ? UA = UA.slice(0, -2) : UA = UA.slice(0, -1)), S(UA, HA))
        return !0;
    }
    return !1;
  }
  const k = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
  function V(R) {
    const H = [];
    let X = !0;
    for (const ge of R.split(" ")) {
      X = !1;
      const pe = k.exec(ge);
      if (pe === null || pe.groups === void 0 || pe.groups.algo === void 0)
        continue;
      const We = pe.groups.algo.toLowerCase();
      c.includes(We) && H.push(pe.groups);
    }
    return X === !0 ? "no metadata" : H;
  }
  function U(R) {
    let H = R[0].algo;
    if (H[3] === "5")
      return H;
    for (let X = 1; X < R.length; ++X) {
      const ge = R[X];
      if (ge.algo[3] === "5") {
        H = "sha512";
        break;
      } else {
        if (H[3] === "3")
          continue;
        ge.algo[3] === "3" && (H = "sha384");
      }
    }
    return H;
  }
  function F(R, H) {
    if (R.length === 1)
      return R;
    let X = 0;
    for (let ge = 0; ge < R.length; ++ge)
      R[ge].algo === H && (R[X++] = R[ge]);
    return R.length = X, R;
  }
  function S(R, H) {
    if (R.length !== H.length)
      return !1;
    for (let X = 0; X < R.length; ++X)
      if (R[X] !== H[X]) {
        if (R[X] === "+" && H[X] === "-" || R[X] === "/" && H[X] === "_")
          continue;
        return !1;
      }
    return !0;
  }
  function L(R) {
  }
  function M(R, H) {
    return R.origin === H.origin && R.origin === "null" || R.protocol === H.protocol && R.hostname === H.hostname && R.port === H.port;
  }
  function P() {
    let R, H;
    return { promise: new Promise((ge, pe) => {
      R = ge, H = pe;
    }), resolve: R, reject: H };
  }
  function j(R) {
    return R.controller.state === "aborted";
  }
  function Z(R) {
    return R.controller.state === "aborted" || R.controller.state === "terminated";
  }
  const J = {
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
  Object.setPrototypeOf(J, null);
  function oe(R) {
    return J[R.toLowerCase()] ?? R;
  }
  function ye(R) {
    const H = JSON.stringify(R);
    if (H === void 0)
      throw new TypeError("Value is not JSON serializable");
    return a(typeof H == "string"), H;
  }
  const Ie = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function He(R, H, X) {
    const ge = {
      index: 0,
      kind: X,
      target: R
    }, pe = {
      next() {
        if (Object.getPrototypeOf(this) !== pe)
          throw new TypeError(
            `'next' called on an object that does not implement interface ${H} Iterator.`
          );
        const { index: We, kind: mA, target: HA } = ge, UA = HA(), Xi = UA.length;
        if (We >= Xi)
          return { value: void 0, done: !0 };
        const Ki = UA[We];
        return ge.index = We + 1, Se(Ki, mA);
      },
      // The class string of an iterator prototype object for a given interface is the
      // result of concatenating the identifier of the interface and the string " Iterator".
      [Symbol.toStringTag]: `${H} Iterator`
    };
    return Object.setPrototypeOf(pe, Ie), Object.setPrototypeOf({}, pe);
  }
  function Se(R, H) {
    let X;
    switch (H) {
      case "key": {
        X = R[0];
        break;
      }
      case "value": {
        X = R[1];
        break;
      }
      case "key+value": {
        X = R;
        break;
      }
    }
    return { value: X, done: !1 };
  }
  async function Ge(R, H, X) {
    const ge = H, pe = X;
    let We;
    try {
      We = R.stream.getReader();
    } catch (mA) {
      pe(mA);
      return;
    }
    try {
      const mA = await Hr(We);
      ge(mA);
    } catch (mA) {
      pe(mA);
    }
  }
  let Ve = globalThis.ReadableStream;
  function fe(R) {
    return Ve || (Ve = Jr.ReadableStream), R instanceof Ve || R[Symbol.toStringTag] === "ReadableStream" && typeof R.tee == "function";
  }
  const de = 65535;
  function we(R) {
    return R.length < de ? String.fromCharCode(...R) : R.reduce((H, X) => H + String.fromCharCode(X), "");
  }
  function TA(R) {
    try {
      R.close();
    } catch (H) {
      if (!H.message.includes("Controller is already closed"))
        throw H;
    }
  }
  function Ds(R) {
    for (let H = 0; H < R.length; H++)
      a(R.charCodeAt(H) <= 255);
    return R;
  }
  async function Hr(R) {
    const H = [];
    let X = 0;
    for (; ; ) {
      const { done: ge, value: pe } = await R.read();
      if (ge)
        return Buffer.concat(H, X);
      if (!g(pe))
        throw new TypeError("Received non-Uint8Array chunk");
      H.push(pe), X += pe.length;
    }
  }
  function bs(R) {
    a("protocol" in R);
    const H = R.protocol;
    return H === "about:" || H === "blob:" || H === "data:";
  }
  function Qe(R) {
    return typeof R == "string" ? R.startsWith("https:") : R.protocol === "https:";
  }
  function Ye(R) {
    a("protocol" in R);
    const H = R.protocol;
    return H === "http:" || H === "https:";
  }
  const St = Object.hasOwn || ((R, H) => Object.prototype.hasOwnProperty.call(R, H));
  return Bc = {
    isAborted: j,
    isCancelled: Z,
    createDeferredPromise: P,
    ReadableStreamFrom: o,
    toUSVString: i,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: L,
    coarsenedSharedCurrentTime: te,
    determineRequestsReferrer: $,
    makePolicyContainer: Ee,
    clonePolicyContainer: q,
    appendFetchMetadata: _,
    appendRequestOriginHeader: Y,
    TAOCheck: G,
    corsCheck: b,
    crossOriginResourcePolicyCheck: D,
    createOpaqueTimingInfo: ee,
    setRequestReferrerPolicyOnRedirect: m,
    isValidHTTPToken: d,
    requestBadPort: u,
    requestCurrentURL: B,
    responseURL: h,
    responseLocationURL: Q,
    isBlobLike: n,
    isURLPotentiallyTrustworthy: se,
    isValidReasonPhrase: f,
    sameOrigin: M,
    normalizeMethod: oe,
    serializeJavascriptValueToJSONString: ye,
    makeIterator: He,
    isValidHeaderName: w,
    isValidHeaderValue: p,
    hasOwn: St,
    isErrorLike: I,
    fullyReadBody: Ge,
    bytesMatch: K,
    isReadableStreamLike: fe,
    readableStreamClose: TA,
    isomorphicEncode: Ds,
    isomorphicDecode: we,
    urlIsLocal: bs,
    urlHasHttpsScheme: Qe,
    urlIsHttpHttpsScheme: Ye,
    readAllBytes: Hr,
    normalizeMethodRecord: J,
    parseMetadata: V
  }, Bc;
}
var Ic, Nh;
function Pr() {
  return Nh || (Nh = 1, Ic = {
    kUrl: Symbol("url"),
    kHeaders: Symbol("headers"),
    kSignal: Symbol("signal"),
    kState: Symbol("state"),
    kGuard: Symbol("guard"),
    kRealm: Symbol("realm")
  }), Ic;
}
var dc, Th;
function jA() {
  if (Th)
    return dc;
  Th = 1;
  const { types: t } = Vt, { hasOwn: e, toUSVString: A } = kt(), r = {};
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
        let Q = n[g];
        const B = e(a, "defaultValue");
        if (B && Q !== null && (Q = Q ?? c), E || B || Q !== void 0) {
          if (Q = h(Q), a.allowedValues && !a.allowedValues.includes(Q))
            throw r.errors.exception({
              header: "Dictionary",
              message: `${Q} is not an accepted type. Expected one of ${a.allowedValues.join(", ")}.`
            });
          o[g] = Q;
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
  ), dc = {
    webidl: r
  }, dc;
}
var fc, Uh;
function qt() {
  if (Uh)
    return fc;
  Uh = 1;
  const t = Xe, { atob: e } = ws, { isomorphicDecode: A } = kt(), r = new TextEncoder(), s = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, n = /(\u000A|\u000D|\u0009|\u0020)/, i = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
  function o(p) {
    t(p.protocol === "data:");
    let m = a(p, !0);
    m = m.slice(5);
    const D = { position: 0 };
    let b = c(
      ",",
      m,
      D
    );
    const G = b.length;
    if (b = w(b, !0, !0), D.position >= m.length)
      return "failure";
    D.position++;
    const _ = m.slice(G + 1);
    let Y = E(_);
    if (/;(\u0020){0,}base64$/i.test(b)) {
      const ee = A(Y);
      if (Y = B(ee), Y === "failure")
        return "failure";
      b = b.slice(0, -6), b = b.replace(/(\u0020)+$/, ""), b = b.slice(0, -1);
    }
    b.startsWith(";") && (b = "text/plain" + b);
    let te = Q(b);
    return te === "failure" && (te = Q("text/plain;charset=US-ASCII")), { mimeType: te, body: Y };
  }
  function a(p, m = !1) {
    if (!m)
      return p.href;
    const D = p.href, b = p.hash.length;
    return b === 0 ? D : D.substring(0, D.length - b);
  }
  function g(p, m, D) {
    let b = "";
    for (; D.position < m.length && p(m[D.position]); )
      b += m[D.position], D.position++;
    return b;
  }
  function c(p, m, D) {
    const b = m.indexOf(p, D.position), G = D.position;
    return b === -1 ? (D.position = m.length, m.slice(G)) : (D.position = b, m.slice(G, D.position));
  }
  function E(p) {
    const m = r.encode(p);
    return h(m);
  }
  function h(p) {
    const m = [];
    for (let D = 0; D < p.length; D++) {
      const b = p[D];
      if (b !== 37)
        m.push(b);
      else if (b === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(p[D + 1], p[D + 2])))
        m.push(37);
      else {
        const G = String.fromCharCode(p[D + 1], p[D + 2]), _ = Number.parseInt(G, 16);
        m.push(_), D += 2;
      }
    }
    return Uint8Array.from(m);
  }
  function Q(p) {
    p = C(p, !0, !0);
    const m = { position: 0 }, D = c(
      "/",
      p,
      m
    );
    if (D.length === 0 || !s.test(D) || m.position > p.length)
      return "failure";
    m.position++;
    let b = c(
      ";",
      p,
      m
    );
    if (b = C(b, !1, !0), b.length === 0 || !s.test(b))
      return "failure";
    const G = D.toLowerCase(), _ = b.toLowerCase(), Y = {
      type: G,
      subtype: _,
      /** @type {Map<string, string>} */
      parameters: /* @__PURE__ */ new Map(),
      // https://mimesniff.spec.whatwg.org/#mime-type-essence
      essence: `${G}/${_}`
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
        ee = u(p, m, !0), c(
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
      te.length !== 0 && s.test(te) && (ee.length === 0 || i.test(ee)) && !Y.parameters.has(te) && Y.parameters.set(te, ee);
    }
    return Y;
  }
  function B(p) {
    if (p = p.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, ""), p.length % 4 === 0 && (p = p.replace(/=?=$/, "")), p.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(p))
      return "failure";
    const m = e(p), D = new Uint8Array(m.length);
    for (let b = 0; b < m.length; b++)
      D[b] = m.charCodeAt(b);
    return D;
  }
  function u(p, m, D) {
    const b = m.position;
    let G = "";
    for (t(p[m.position] === '"'), m.position++; G += g(
      (Y) => Y !== '"' && Y !== "\\",
      p,
      m
    ), !(m.position >= p.length); ) {
      const _ = p[m.position];
      if (m.position++, _ === "\\") {
        if (m.position >= p.length) {
          G += "\\";
          break;
        }
        G += p[m.position], m.position++;
      } else {
        t(_ === '"');
        break;
      }
    }
    return D ? G : p.slice(b, m.position);
  }
  function I(p) {
    t(p !== "failure");
    const { parameters: m, essence: D } = p;
    let b = D;
    for (let [G, _] of m.entries())
      b += ";", b += G, b += "=", s.test(_) || (_ = _.replace(/(\\|")/g, "\\$1"), _ = '"' + _, _ += '"'), b += _;
    return b;
  }
  function f(p) {
    return p === "\r" || p === `
` || p === "	" || p === " ";
  }
  function C(p, m = !0, D = !0) {
    let b = 0, G = p.length - 1;
    if (m)
      for (; b < p.length && f(p[b]); b++)
        ;
    if (D)
      for (; G > 0 && f(p[G]); G--)
        ;
    return p.slice(b, G + 1);
  }
  function d(p) {
    return p === "\r" || p === `
` || p === "	" || p === "\f" || p === " ";
  }
  function w(p, m = !0, D = !0) {
    let b = 0, G = p.length - 1;
    if (m)
      for (; b < p.length && d(p[b]); b++)
        ;
    if (D)
      for (; G > 0 && d(p[G]); G--)
        ;
    return p.slice(b, G + 1);
  }
  return fc = {
    dataURLProcessor: o,
    URLSerializer: a,
    collectASequenceOfCodePoints: g,
    collectASequenceOfCodePointsFast: c,
    stringPercentDecode: E,
    parseMIMEType: Q,
    collectAnHTTPQuotedString: u,
    serializeAMimeType: I
  }, fc;
}
var pc, vh;
function Fl() {
  if (vh)
    return pc;
  vh = 1;
  const { Blob: t, File: e } = ws, { types: A } = Vt, { kState: r } = Pr(), { isBlobLike: s } = kt(), { webidl: n } = jA(), { parseMIMEType: i, serializeAMimeType: o } = qt(), { kEnumerableProperty: a } = me, g = new TextEncoder();
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
    const f = [];
    for (const C of u)
      if (typeof C == "string") {
        let d = C;
        I.endings === "native" && (d = Q(d)), f.push(g.encode(d));
      } else
        A.isAnyArrayBuffer(C) || A.isTypedArray(C) ? C.buffer ? f.push(
          new Uint8Array(C.buffer, C.byteOffset, C.byteLength)
        ) : f.push(new Uint8Array(C)) : s(C) && f.push(C);
    return f;
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
  return pc = { File: c, FileLike: E, isFileLike: B }, pc;
}
var mc, Lh;
function Nl() {
  if (Lh)
    return mc;
  Lh = 1;
  const { isBlobLike: t, toUSVString: e, makeIterator: A } = kt(), { kState: r } = Pr(), { File: s, FileLike: n, isFileLike: i } = Fl(), { webidl: o } = jA(), { Blob: a, File: g } = ws, c = g ?? s;
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
    append(B, u, I = void 0) {
      if (o.brandCheck(this, E), o.argumentLengthCheck(arguments, 2, { header: "FormData.append" }), arguments.length === 3 && !t(u))
        throw new TypeError(
          "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      B = o.converters.USVString(B), u = t(u) ? o.converters.Blob(u, { strict: !1 }) : o.converters.USVString(u), I = arguments.length === 3 ? o.converters.USVString(I) : void 0;
      const f = h(B, u, I);
      this[r].push(f);
    }
    delete(B) {
      o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.delete" }), B = o.converters.USVString(B), this[r] = this[r].filter((u) => u.name !== B);
    }
    get(B) {
      o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.get" }), B = o.converters.USVString(B);
      const u = this[r].findIndex((I) => I.name === B);
      return u === -1 ? null : this[r][u].value;
    }
    getAll(B) {
      return o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" }), B = o.converters.USVString(B), this[r].filter((u) => u.name === B).map((u) => u.value);
    }
    has(B) {
      return o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.has" }), B = o.converters.USVString(B), this[r].findIndex((u) => u.name === B) !== -1;
    }
    set(B, u, I = void 0) {
      if (o.brandCheck(this, E), o.argumentLengthCheck(arguments, 2, { header: "FormData.set" }), arguments.length === 3 && !t(u))
        throw new TypeError(
          "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      B = o.converters.USVString(B), u = t(u) ? o.converters.Blob(u, { strict: !1 }) : o.converters.USVString(u), I = arguments.length === 3 ? e(I) : void 0;
      const f = h(B, u, I), C = this[r].findIndex((d) => d.name === B);
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
    forEach(B, u = globalThis) {
      if (o.brandCheck(this, E), o.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" }), typeof B != "function")
        throw new TypeError(
          "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
        );
      for (const [I, f] of this)
        B.apply(u, [f, I, this]);
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
    else if (i(B) || (B = B instanceof a ? new c([B], "blob", { type: B.type }) : new n(B, "blob", { type: B.type })), u !== void 0) {
      const I = {
        type: B.type,
        lastModified: B.lastModified
      };
      B = g && B instanceof g || B instanceof s ? new c([B], u, I) : new n(B, u, I);
    }
    return { name: Q, value: B };
  }
  return mc = { FormData: E }, mc;
}
var wc, Mh;
function ya() {
  if (Mh)
    return wc;
  Mh = 1;
  const t = Up(), e = me, {
    ReadableStreamFrom: A,
    isBlobLike: r,
    isReadableStreamLike: s,
    readableStreamClose: n,
    createDeferredPromise: i,
    fullyReadBody: o
  } = kt(), { FormData: a } = Nl(), { kState: g } = Pr(), { webidl: c } = jA(), { DOMException: E, structuredClone: h } = ys(), { Blob: Q, File: B } = ws, { kBodyUsed: u } = Le, I = Xe, { isErrored: f } = me, { isUint8Array: C, isArrayBuffer: d } = QQ, { File: w } = Fl(), { parseMIMEType: p, serializeAMimeType: m } = qt();
  let D = globalThis.ReadableStream;
  const b = B ?? w, G = new TextEncoder(), _ = new TextDecoder();
  function Y(F, S = !1) {
    D || (D = Jr.ReadableStream);
    let L = null;
    F instanceof D ? L = F : r(F) ? L = F.stream() : L = new D({
      async pull(oe) {
        oe.enqueue(
          typeof P == "string" ? G.encode(P) : P
        ), queueMicrotask(() => n(oe));
      },
      start() {
      },
      type: void 0
    }), I(s(L));
    let M = null, P = null, j = null, Z = null;
    if (typeof F == "string")
      P = F, Z = "text/plain;charset=UTF-8";
    else if (F instanceof URLSearchParams)
      P = F.toString(), Z = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (d(F))
      P = new Uint8Array(F.slice());
    else if (ArrayBuffer.isView(F))
      P = new Uint8Array(F.buffer.slice(F.byteOffset, F.byteOffset + F.byteLength));
    else if (e.isFormDataLike(F)) {
      const oe = `----formdata-undici-0${`${Math.floor(Math.random() * 1e11)}`.padStart(11, "0")}`, ye = `--${oe}\r
Content-Disposition: form-data`;
      /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
      const Ie = (de) => de.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), He = (de) => de.replace(/\r?\n|\r/g, `\r
`), Se = [], Ge = new Uint8Array([13, 10]);
      j = 0;
      let Ve = !1;
      for (const [de, we] of F)
        if (typeof we == "string") {
          const TA = G.encode(ye + `; name="${Ie(He(de))}"\r
\r
${He(we)}\r
`);
          Se.push(TA), j += TA.byteLength;
        } else {
          const TA = G.encode(`${ye}; name="${Ie(He(de))}"` + (we.name ? `; filename="${Ie(we.name)}"` : "") + `\r
Content-Type: ${we.type || "application/octet-stream"}\r
\r
`);
          Se.push(TA, we, Ge), typeof we.size == "number" ? j += TA.byteLength + we.size + Ge.byteLength : Ve = !0;
        }
      const fe = G.encode(`--${oe}--`);
      Se.push(fe), j += fe.byteLength, Ve && (j = null), P = F, M = async function* () {
        for (const de of Se)
          de.stream ? yield* de.stream() : yield de;
      }, Z = "multipart/form-data; boundary=" + oe;
    } else if (r(F))
      P = F, j = F.size, F.type && (Z = F.type);
    else if (typeof F[Symbol.asyncIterator] == "function") {
      if (S)
        throw new TypeError("keepalive");
      if (e.isDisturbed(F) || F.locked)
        throw new TypeError(
          "Response body object should not be disturbed or locked"
        );
      L = F instanceof D ? F : A(F);
    }
    if ((typeof P == "string" || e.isBuffer(P)) && (j = Buffer.byteLength(P)), M != null) {
      let oe;
      L = new D({
        async start() {
          oe = M(F)[Symbol.asyncIterator]();
        },
        async pull(ye) {
          const { value: Ie, done: He } = await oe.next();
          return He ? queueMicrotask(() => {
            ye.close();
          }) : f(L) || ye.enqueue(new Uint8Array(Ie)), ye.desiredSize > 0;
        },
        async cancel(ye) {
          await oe.return();
        },
        type: void 0
      });
    }
    return [{ stream: L, source: P, length: j }, Z];
  }
  function te(F, S = !1) {
    return D || (D = Jr.ReadableStream), F instanceof D && (I(!e.isDisturbed(F), "The body has already been consumed."), I(!F.locked, "The stream is locked.")), Y(F, S);
  }
  function ee(F) {
    const [S, L] = F.stream.tee(), M = h(L, { transfer: [L] }), [, P] = M.tee();
    return F.stream = S, {
      stream: P,
      length: F.length,
      source: F.source
    };
  }
  async function* Ee(F) {
    if (F)
      if (C(F))
        yield F;
      else {
        const S = F.stream;
        if (e.isDisturbed(S))
          throw new TypeError("The body has already been consumed.");
        if (S.locked)
          throw new TypeError("The stream is locked.");
        S[u] = !0, yield* S;
      }
  }
  function q(F) {
    if (F.aborted)
      throw new E("The operation was aborted.", "AbortError");
  }
  function $(F) {
    return {
      blob() {
        return se(this, (L) => {
          let M = U(this);
          return M === "failure" ? M = "" : M && (M = m(M)), new Q([L], { type: M });
        }, F);
      },
      arrayBuffer() {
        return se(this, (L) => new Uint8Array(L).buffer, F);
      },
      text() {
        return se(this, k, F);
      },
      json() {
        return se(this, V, F);
      },
      async formData() {
        c.brandCheck(this, F), q(this[g]);
        const L = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(L)) {
          const M = {};
          for (const [J, oe] of this.headers)
            M[J.toLowerCase()] = oe;
          const P = new a();
          let j;
          try {
            j = new t({
              headers: M,
              preservePath: !0
            });
          } catch (J) {
            throw new E(`${J}`, "AbortError");
          }
          j.on("field", (J, oe) => {
            P.append(J, oe);
          }), j.on("file", (J, oe, ye, Ie, He) => {
            const Se = [];
            if (Ie === "base64" || Ie.toLowerCase() === "base64") {
              let Ge = "";
              oe.on("data", (Ve) => {
                Ge += Ve.toString().replace(/[\r\n]/gm, "");
                const fe = Ge.length - Ge.length % 4;
                Se.push(Buffer.from(Ge.slice(0, fe), "base64")), Ge = Ge.slice(fe);
              }), oe.on("end", () => {
                Se.push(Buffer.from(Ge, "base64")), P.append(J, new b(Se, ye, { type: He }));
              });
            } else
              oe.on("data", (Ge) => {
                Se.push(Ge);
              }), oe.on("end", () => {
                P.append(J, new b(Se, ye, { type: He }));
              });
          });
          const Z = new Promise((J, oe) => {
            j.on("finish", J), j.on("error", (ye) => oe(new TypeError(ye)));
          });
          if (this.body !== null)
            for await (const J of Ee(this[g].body))
              j.write(J);
          return j.end(), await Z, P;
        } else if (/application\/x-www-form-urlencoded/.test(L)) {
          let M;
          try {
            let j = "";
            const Z = new TextDecoder("utf-8", { ignoreBOM: !0 });
            for await (const J of Ee(this[g].body)) {
              if (!C(J))
                throw new TypeError("Expected Uint8Array chunk");
              j += Z.decode(J, { stream: !0 });
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
            header: `${F.name}.formData`,
            message: "Could not parse content as FormData."
          });
      }
    };
  }
  function ne(F) {
    Object.assign(F.prototype, $(F));
  }
  async function se(F, S, L) {
    if (c.brandCheck(F, L), q(F[g]), K(F[g].body))
      throw new TypeError("Body is unusable");
    const M = i(), P = (Z) => M.reject(Z), j = (Z) => {
      try {
        M.resolve(S(Z));
      } catch (J) {
        P(J);
      }
    };
    return F[g].body == null ? (j(new Uint8Array()), M.promise) : (await o(F[g].body, j, P), M.promise);
  }
  function K(F) {
    return F != null && (F.stream.locked || e.isDisturbed(F.stream));
  }
  function k(F) {
    return F.length === 0 ? "" : (F[0] === 239 && F[1] === 187 && F[2] === 191 && (F = F.subarray(3)), _.decode(F));
  }
  function V(F) {
    return JSON.parse(k(F));
  }
  function U(F) {
    const { headersList: S } = F[g], L = S.get("content-type");
    return L === null ? "failure" : p(L);
  }
  return wc = {
    extractBody: Y,
    safelyExtractBody: te,
    cloneBody: ee,
    mixinBody: ne
  }, wc;
}
const {
  InvalidArgumentError: be,
  NotSupportedError: vp
} = ke, Zt = Xe, { kHTTP2BuildRequest: Lp, kHTTP2CopyHeaders: Mp, kHTTP1BuildRequest: Gp } = Le, VA = me, UC = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/, vC = /[^\t\x20-\x7e\x80-\xff]/, Yp = /[^\u0021-\u00ff]/, ut = Symbol("handler"), tA = {};
let yc;
try {
  const t = require("diagnostics_channel");
  tA.create = t.channel("undici:request:create"), tA.bodySent = t.channel("undici:request:bodySent"), tA.headers = t.channel("undici:request:headers"), tA.trailers = t.channel("undici:request:trailers"), tA.error = t.channel("undici:request:error");
} catch {
  tA.create = { hasSubscribers: !1 }, tA.bodySent = { hasSubscribers: !1 }, tA.headers = { hasSubscribers: !1 }, tA.trailers = { hasSubscribers: !1 }, tA.error = { hasSubscribers: !1 };
}
let xp = class _g {
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
    throwOnError: Q,
    expectContinue: B
  }, u) {
    if (typeof A != "string")
      throw new be("path must be a string");
    if (A[0] !== "/" && !(A.startsWith("http://") || A.startsWith("https://")) && r !== "CONNECT")
      throw new be("path must be an absolute URL or start with a slash");
    if (Yp.exec(A) !== null)
      throw new be("invalid request path");
    if (typeof r != "string")
      throw new be("method must be a string");
    if (UC.exec(r) === null)
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
    else if (VA.isStream(s)) {
      this.body = s;
      const I = this.body._readableState;
      (!I || !I.autoDestroy) && (this.endHandler = function() {
        VA.destroy(this);
      }, this.body.on("end", this.endHandler)), this.errorHandler = (f) => {
        this.abort ? this.abort(f) : this.error = f;
      }, this.body.on("error", this.errorHandler);
    } else if (VA.isBuffer(s))
      this.body = s.byteLength ? s : null;
    else if (ArrayBuffer.isView(s))
      this.body = s.buffer.byteLength ? Buffer.from(s.buffer, s.byteOffset, s.byteLength) : null;
    else if (s instanceof ArrayBuffer)
      this.body = s.byteLength ? Buffer.from(s) : null;
    else if (typeof s == "string")
      this.body = s.length ? Buffer.from(s) : null;
    else if (VA.isFormDataLike(s) || VA.isIterable(s) || VA.isBlobLike(s))
      this.body = s;
    else
      throw new be("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
    if (this.completed = !1, this.aborted = !1, this.upgrade = g || null, this.path = i ? VA.buildURL(A, i) : A, this.origin = e, this.idempotent = o ?? (r === "HEAD" || r === "GET"), this.blocking = a ?? !1, this.reset = h ?? null, this.host = null, this.contentLength = null, this.contentType = null, this.headers = "", this.expectContinue = B ?? !1, Array.isArray(n)) {
      if (n.length % 2 !== 0)
        throw new be("headers array must be even");
      for (let I = 0; I < n.length; I += 2)
        kn(this, n[I], n[I + 1]);
    } else if (n && typeof n == "object") {
      const I = Object.keys(n);
      for (let f = 0; f < I.length; f++) {
        const C = I[f];
        kn(this, C, n[C]);
      }
    } else if (n != null)
      throw new be("headers must be an object or an array");
    if (VA.isFormDataLike(this.body)) {
      if (VA.nodeMajor < 16 || VA.nodeMajor === 16 && VA.nodeMinor < 8)
        throw new be("Form-Data bodies are only supported in node v16.8 and newer.");
      yc || (yc = ya().extractBody);
      const [I, f] = yc(s);
      this.contentType == null && (this.contentType = f, this.headers += `content-type: ${f}\r
`), this.body = I.stream, this.contentLength = I.length;
    } else
      VA.isBlobLike(s) && this.contentType == null && s.type && (this.contentType = s.type, this.headers += `content-type: ${s.type}\r
`);
    VA.validateHandler(u, r, g), this.servername = VA.getServerName(this.host), this[ut] = u, tA.create.hasSubscribers && tA.create.publish({ request: this });
  }
  onBodySent(e) {
    if (this[ut].onBodySent)
      try {
        return this[ut].onBodySent(e);
      } catch (A) {
        this.abort(A);
      }
  }
  onRequestSent() {
    if (tA.bodySent.hasSubscribers && tA.bodySent.publish({ request: this }), this[ut].onRequestSent)
      try {
        return this[ut].onRequestSent();
      } catch (e) {
        this.abort(e);
      }
  }
  onConnect(e) {
    if (Zt(!this.aborted), Zt(!this.completed), this.error)
      e(this.error);
    else
      return this.abort = e, this[ut].onConnect(e);
  }
  onHeaders(e, A, r, s) {
    Zt(!this.aborted), Zt(!this.completed), tA.headers.hasSubscribers && tA.headers.publish({ request: this, response: { statusCode: e, headers: A, statusText: s } });
    try {
      return this[ut].onHeaders(e, A, r, s);
    } catch (n) {
      this.abort(n);
    }
  }
  onData(e) {
    Zt(!this.aborted), Zt(!this.completed);
    try {
      return this[ut].onData(e);
    } catch (A) {
      return this.abort(A), !1;
    }
  }
  onUpgrade(e, A, r) {
    return Zt(!this.aborted), Zt(!this.completed), this[ut].onUpgrade(e, A, r);
  }
  onComplete(e) {
    this.onFinally(), Zt(!this.aborted), this.completed = !0, tA.trailers.hasSubscribers && tA.trailers.publish({ request: this, trailers: e });
    try {
      return this[ut].onComplete(e);
    } catch (A) {
      this.onError(A);
    }
  }
  onError(e) {
    if (this.onFinally(), tA.error.hasSubscribers && tA.error.publish({ request: this, error: e }), !this.aborted)
      return this.aborted = !0, this[ut].onError(e);
  }
  onFinally() {
    this.errorHandler && (this.body.off("error", this.errorHandler), this.errorHandler = null), this.endHandler && (this.body.off("end", this.endHandler), this.endHandler = null);
  }
  // TODO: adjust to support H2
  addHeader(e, A) {
    return kn(this, e, A), this;
  }
  static [Gp](e, A, r) {
    return new _g(e, A, r);
  }
  static [Lp](e, A, r) {
    const s = A.headers;
    A = { ...A, headers: null };
    const n = new _g(e, A, r);
    if (n.headers = {}, Array.isArray(s)) {
      if (s.length % 2 !== 0)
        throw new be("headers array must be even");
      for (let i = 0; i < s.length; i += 2)
        kn(n, s[i], s[i + 1], !0);
    } else if (s && typeof s == "object") {
      const i = Object.keys(s);
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        kn(n, a, s[a], !0);
      }
    } else if (s != null)
      throw new be("headers must be an object or an array");
    return n;
  }
  static [Mp](e) {
    const A = e.split(`\r
`), r = {};
    for (const s of A) {
      const [n, i] = s.split(": ");
      i == null || i.length === 0 || (r[n] ? r[n] += `,${i}` : r[n] = i);
    }
    return r;
  }
};
function qr(t, e, A) {
  if (e && typeof e == "object")
    throw new be(`invalid ${t} header`);
  if (e = e != null ? `${e}` : "", vC.exec(e) !== null)
    throw new be(`invalid ${t} header`);
  return A ? e : `${t}: ${e}\r
`;
}
function kn(t, e, A, r = !1) {
  if (A && typeof A == "object" && !Array.isArray(A))
    throw new be(`invalid ${e} header`);
  if (A === void 0)
    return;
  if (t.host === null && e.length === 4 && e.toLowerCase() === "host") {
    if (vC.exec(A) !== null)
      throw new be(`invalid ${e} header`);
    t.host = A;
  } else if (t.contentLength === null && e.length === 14 && e.toLowerCase() === "content-length") {
    if (t.contentLength = parseInt(A, 10), !Number.isFinite(t.contentLength))
      throw new be("invalid content-length header");
  } else if (t.contentType === null && e.length === 12 && e.toLowerCase() === "content-type")
    t.contentType = A, r ? t.headers[e] = qr(e, A, r) : t.headers += qr(e, A);
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
        throw new vp("expect header not supported");
      if (UC.exec(e) === null)
        throw new be("invalid header key");
      if (Array.isArray(A))
        for (let s = 0; s < A.length; s++)
          r ? t.headers[e] ? t.headers[e] += `,${qr(e, A[s], r)}` : t.headers[e] = qr(e, A[s], r) : t.headers += qr(e, A[s]);
      else
        r ? t.headers[e] = qr(e, A, r) : t.headers += qr(e, A);
    }
  }
}
var Jp = xp;
const Op = _i;
let _p = class extends Op {
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
var Tl = _p;
const Pp = Tl, {
  ClientDestroyedError: Rc,
  ClientClosedError: Hp,
  InvalidArgumentError: Fs
} = ke, { kDestroy: Vp, kClose: Wp, kDispatch: Dc, kInterceptors: jr } = Le, Ns = Symbol("destroyed"), Sn = Symbol("closed"), $t = Symbol("onDestroyed"), Ts = Symbol("onClosed"), so = Symbol("Intercepted Dispatch");
let qp = class extends Pp {
  constructor() {
    super(), this[Ns] = !1, this[$t] = null, this[Sn] = !1, this[Ts] = [];
  }
  get destroyed() {
    return this[Ns];
  }
  get closed() {
    return this[Sn];
  }
  get interceptors() {
    return this[jr];
  }
  set interceptors(e) {
    if (e) {
      for (let A = e.length - 1; A >= 0; A--)
        if (typeof this[jr][A] != "function")
          throw new Fs("interceptor must be an function");
    }
    this[jr] = e;
  }
  close(e) {
    if (e === void 0)
      return new Promise((r, s) => {
        this.close((n, i) => n ? s(n) : r(i));
      });
    if (typeof e != "function")
      throw new Fs("invalid callback");
    if (this[Ns]) {
      queueMicrotask(() => e(new Rc(), null));
      return;
    }
    if (this[Sn]) {
      this[Ts] ? this[Ts].push(e) : queueMicrotask(() => e(null, null));
      return;
    }
    this[Sn] = !0, this[Ts].push(e);
    const A = () => {
      const r = this[Ts];
      this[Ts] = null;
      for (let s = 0; s < r.length; s++)
        r[s](null, null);
    };
    this[Wp]().then(() => this.destroy()).then(() => {
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
      throw new Fs("invalid callback");
    if (this[Ns]) {
      this[$t] ? this[$t].push(A) : queueMicrotask(() => A(null, null));
      return;
    }
    e || (e = new Rc()), this[Ns] = !0, this[$t] = this[$t] || [], this[$t].push(A);
    const r = () => {
      const s = this[$t];
      this[$t] = null;
      for (let n = 0; n < s.length; n++)
        s[n](null, null);
    };
    this[Vp](e).then(() => {
      queueMicrotask(r);
    });
  }
  [so](e, A) {
    if (!this[jr] || this[jr].length === 0)
      return this[so] = this[Dc], this[Dc](e, A);
    let r = this[Dc].bind(this);
    for (let s = this[jr].length - 1; s >= 0; s--)
      r = this[jr][s](r);
    return this[so] = r, r(e, A);
  }
  dispatch(e, A) {
    if (!A || typeof A != "object")
      throw new Fs("handler must be an object");
    try {
      if (!e || typeof e != "object")
        throw new Fs("opts must be an object.");
      if (this[Ns] || this[$t])
        throw new Rc();
      if (this[Sn])
        throw new Hp();
      return this[so](e, A);
    } catch (r) {
      if (typeof A.onError != "function")
        throw new Fs("invalid onError method");
      return A.onError(r), !1;
    }
  }
};
var Ra = qp;
const jp = Il, Gh = Xe, LC = me, { InvalidArgumentError: zp, ConnectTimeoutError: Zp } = ke;
let bc, Pg;
he.FinalizationRegistry && !process.env.NODE_V8_COVERAGE ? Pg = class {
  constructor(e) {
    this._maxCachedSessions = e, this._sessionCache = /* @__PURE__ */ new Map(), this._sessionRegistry = new he.FinalizationRegistry((A) => {
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
} : Pg = class {
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
function $p({ allowH2: t, maxCachedSessions: e, socketPath: A, timeout: r, ...s }) {
  if (e != null && (!Number.isInteger(e) || e < 0))
    throw new zp("maxCachedSessions must be a positive integer or zero");
  const n = { path: A, ...s }, i = new Pg(e ?? 100);
  return r = r ?? 1e4, t = t ?? !1, function({ hostname: a, host: g, protocol: c, port: E, servername: h, localAddress: Q, httpSocket: B }, u) {
    let I;
    if (c === "https:") {
      bc || (bc = hQ), h = h || n.servername || LC.getServerName(g) || null;
      const C = h || a, d = i.get(C) || null;
      Gh(C), I = bc.connect({
        highWaterMark: 16384,
        // TLS in node can't have bigger HWM anyway...
        ...n,
        servername: h,
        session: d,
        localAddress: Q,
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
      Gh(!B, "httpSocket can only be sent on TLS update"), I = jp.connect({
        highWaterMark: 64 * 1024,
        // Same as nodejs fs streams.
        ...n,
        localAddress: Q,
        port: E || 80,
        host: a
      });
    if (n.keepAlive == null || n.keepAlive) {
      const C = n.keepAliveInitialDelay === void 0 ? 6e4 : n.keepAliveInitialDelay;
      I.setKeepAlive(!0, C);
    }
    const f = Xp(() => Kp(I), r);
    return I.setNoDelay(!0).once(c === "https:" ? "secureConnect" : "connect", function() {
      if (f(), u) {
        const C = u;
        u = null, C(null, this);
      }
    }).on("error", function(C) {
      if (f(), u) {
        const d = u;
        u = null, d(C);
      }
    }), I;
  };
}
function Xp(t, e) {
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
function Kp(t) {
  LC.destroy(t, new Zp());
}
var Da = $p, kc = {}, Fn = {}, Yh;
function em() {
  if (Yh)
    return Fn;
  Yh = 1, Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.enumToMap = void 0;
  function t(e) {
    const A = {};
    return Object.keys(e).forEach((r) => {
      const s = e[r];
      typeof s == "number" && (A[r] = s);
    }), A;
  }
  return Fn.enumToMap = t, Fn;
}
var xh;
function Am() {
  return xh || (xh = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SPECIAL_HEADERS = t.HEADER_STATE = t.MINOR = t.MAJOR = t.CONNECTION_TOKEN_CHARS = t.HEADER_CHARS = t.TOKEN = t.STRICT_TOKEN = t.HEX = t.URL_CHAR = t.STRICT_URL_CHAR = t.USERINFO_CHARS = t.MARK = t.ALPHANUM = t.NUM = t.HEX_MAP = t.NUM_MAP = t.ALPHA = t.FINISH = t.H_METHOD_MAP = t.METHOD_MAP = t.METHODS_RTSP = t.METHODS_ICE = t.METHODS_HTTP = t.METHODS = t.LENIENT_FLAGS = t.FLAGS = t.TYPE = t.ERROR = void 0;
    const e = em();
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
  }(kc)), kc;
}
const tr = me, { kBodyUsed: Ai } = Le, Ul = Xe, { InvalidArgumentError: tm } = ke, rm = _i, sm = [300, 301, 302, 303, 307, 308], Jh = Symbol("body");
class Oh {
  constructor(e) {
    this[Jh] = e, this[Ai] = !1;
  }
  async *[Symbol.asyncIterator]() {
    Ul(!this[Ai], "disturbed"), this[Ai] = !0, yield* this[Jh];
  }
}
let nm = class {
  constructor(e, A, r, s) {
    if (A != null && (!Number.isInteger(A) || A < 0))
      throw new tm("maxRedirections must be a positive number");
    tr.validateHandler(s, r.method, r.upgrade), this.dispatch = e, this.location = null, this.abort = null, this.opts = { ...r, maxRedirections: 0 }, this.maxRedirections = A, this.handler = s, this.history = [], tr.isStream(this.opts.body) ? (tr.bodyLength(this.opts.body) === 0 && this.opts.body.on("data", function() {
      Ul(!1);
    }), typeof this.opts.body.readableDidRead != "boolean" && (this.opts.body[Ai] = !1, rm.prototype.on.call(this.opts.body, "data", function() {
      this[Ai] = !0;
    }))) : this.opts.body && typeof this.opts.body.pipeTo == "function" ? this.opts.body = new Oh(this.opts.body) : this.opts.body && typeof this.opts.body != "string" && !ArrayBuffer.isView(this.opts.body) && tr.isIterable(this.opts.body) && (this.opts.body = new Oh(this.opts.body));
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
    if (this.location = this.history.length >= this.maxRedirections || tr.isDisturbed(this.opts.body) ? null : im(e, A), this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)), !this.location)
      return this.handler.onHeaders(e, A, r, s);
    const { origin: n, pathname: i, search: o } = tr.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), a = o ? `${i}${o}` : i;
    this.opts.headers = om(this.opts.headers, e === 303, this.opts.origin !== n), this.opts.path = a, this.opts.origin = n, this.opts.maxRedirections = 0, this.opts.query = null, e === 303 && this.opts.method !== "HEAD" && (this.opts.method = "GET", this.opts.body = null);
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
function im(t, e) {
  if (sm.indexOf(t) === -1)
    return null;
  for (let A = 0; A < e.length; A += 2)
    if (e[A].toString().toLowerCase() === "location")
      return e[A + 1];
}
function _h(t, e, A) {
  if (t.length === 4)
    return tr.headerNameToString(t) === "host";
  if (e && tr.headerNameToString(t).startsWith("content-"))
    return !0;
  if (A && (t.length === 13 || t.length === 6 || t.length === 19)) {
    const r = tr.headerNameToString(t);
    return r === "authorization" || r === "cookie" || r === "proxy-authorization";
  }
  return !1;
}
function om(t, e, A) {
  const r = [];
  if (Array.isArray(t))
    for (let s = 0; s < t.length; s += 2)
      _h(t[s], e, A) || r.push(t[s], t[s + 1]);
  else if (t && typeof t == "object")
    for (const s of Object.keys(t))
      _h(s, e, A) || r.push(s, t[s]);
  else
    Ul(t == null, "headers must be an object or an array");
  return r;
}
var MC = nm;
const am = MC;
function cm({ maxRedirections: t }) {
  return (e) => function(r, s) {
    const { maxRedirections: n = t } = r;
    if (!n)
      return e(r, s);
    const i = new am(e, n, r, s);
    return r = { ...r, maxRedirections: 0 }, e(r, i);
  };
}
var vl = cm, Sc, Ph;
function Hh() {
  return Ph || (Ph = 1, Sc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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ADcDACAAQShqQgA3AwAgAEEgakIANwMAIABBEGpCADcDACAAQQhqQgA3AwAgAEHdATYCHEEAC3sBAX8CQCAAKAIMIgMNAAJAIAAoAgRFDQAgACABNgIECwJAIAAgASACEMSAgIAAIgMNACAAKAIMDwsgACADNgIcQQAhAyAAKAIEIgFFDQAgACABIAIgACgCCBGBgICAAAAiAUUNACAAIAI2AhQgACABNgIMIAEhAwsgAwvk8wEDDn8DfgR/I4CAgIAAQRBrIgMkgICAgAAgASEEIAEhBSABIQYgASEHIAEhCCABIQkgASEKIAEhCyABIQwgASENIAEhDiABIQ8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCHCIQQX9qDt0B2gEB2QECAwQFBgcICQoLDA0O2AEPENcBERLWARMUFRYXGBkaG+AB3wEcHR7VAR8gISIjJCXUASYnKCkqKyzTAdIBLS7RAdABLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVG2wFHSElKzwHOAUvNAUzMAU1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4ABgQGCAYMBhAGFAYYBhwGIAYkB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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FCAAIBA2AgxBACEQDLIBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxNCyAAQdMANgIcIAAgATYCFCAAIBA2AgxBACEQDLEBCyAAKAIEIRAgAEEANgIEAkAgACAQIAEQp4CAgAAiEA0AIAEhAQxRCyAAQeUANgIcIAAgATYCFCAAIBA2AgxBACEQDLABCyAAQQA2AhwgACABNgIUIABBxoqAgAA2AhAgAEEHNgIMQQAhEAyvAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHSADYCHCAAIAE2AhQgACAQNgIMQQAhEAyuAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMSQsgAEHTADYCHCAAIAE2AhQgACAQNgIMQQAhEAytAQsgACgCBCEQIABBADYCBAJAIAAgECABEKeAgIAAIhANACABIQEMTQsgAEHlADYCHCAAIAE2AhQgACAQNgIMQQAhEAysAQsgAEEANgIcIAAgATYCFCAAQdyIgIAANgIQIABBBzYCDEEAIRAMqwELIBBBP0cNASABQQFqIQELQQUhEAyQAQtBACEQIABBADYCHCAAIAE2AhQgAEH9koCAADYCECAAQQc2AgwMqAELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0gA2AhwgACABNgIUIAAgEDYCDEEAIRAMpwELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEILIABB0wA2AhwgACABNgIUIAAgEDYCDEEAIRAMpgELIAAoAgQhECAAQQA2AgQCQCAAIBAgARCngICAACIQDQAgASEBDEYLIABB5QA2AhwgACABNgIUIAAgEDYCDEEAIRAMpQELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0gA2AhwgACAUNgIUIAAgATYCDEEAIRAMpAELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDD8LIABB0wA2AhwgACAUNgIUIAAgATYCDEEAIRAMowELIAAoAgQhASAAQQA2AgQCQCAAIAEgFBCngICAACIBDQAgFCEBDEMLIABB5QA2AhwgACAU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YWdlX2JlZ2luYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlYCBjYWxsYmFjayBlcnJvcgBgb25fc3RhdHVzX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdmVyc2lvbl9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3VybF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21ldGhvZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lYCBjYWxsYmFjayBlcnJvcgBVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNlcnZlcgBJbnZhbGlkIGhlYWRlciB2YWx1ZSBjaGFyAEludmFsaWQgaGVhZGVyIGZpZWxkIGNoYXIAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl92ZXJzaW9uAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBIVFRQIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgdmFsdWUATWlzc2luZyBleHBlY3RlZCBMRiBhZnRlciBoZWFkZXIgdmFsdWUASW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHF1b3RlIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGVkIHZhbHVlAFBhdXNlZCBieSBvbl9oZWFkZXJzX2NvbXBsZXRlAEludmFsaWQgRU9GIHN0YXRlAG9uX3Jlc2V0IHBhdXNlAG9uX2NodW5rX2hlYWRlciBwYXVzZQBvbl9tZXNzYWdlX2JlZ2luIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZSBwYXVzZQBvbl9zdGF0dXNfY29tcGxldGUgcGF1c2UAb25fdmVyc2lvbl9jb21wbGV0ZSBwYXVzZQBvbl91cmxfY29tcGxldGUgcGF1c2UAb25fY2h1bmtfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlIHBhdXNlAG9uX21lc3NhZ2VfY29tcGxldGUgcGF1c2UAb25fbWV0aG9kX2NvbXBsZXRlIHBhdXNlAG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19leHRlbnNpb25fbmFtZSBwYXVzZQBVbmV4cGVjdGVkIHNwYWNlIGFmdGVyIHN0YXJ0IGxpbmUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fbmFtZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIG5hbWUAUGF1c2Ugb24gQ09OTkVDVC9VcGdyYWRlAFBhdXNlIG9uIFBSSS9VcGdyYWRlAEV4cGVjdGVkIEhUVFAvMiBDb25uZWN0aW9uIFByZWZhY2UAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9tZXRob2QARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgbWV0aG9kAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX2ZpZWxkAFBhdXNlZABJbnZhbGlkIHdvcmQgZW5jb3VudGVyZWQASW52YWxpZCBtZXRob2QgZW5jb3VudGVyZWQAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzY2hlbWEAUmVxdWVzdCBoYXMgaW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgAFNXSVRDSF9QUk9YWQBVU0VfUFJPWFkATUtBQ1RJVklUWQBVTlBST0NFU1NBQkxFX0VOVElUWQBDT1BZAE1PVkVEX1BFUk1BTkVOVExZAFRPT19FQVJMWQBOT1RJRlkARkFJTEVEX0RFUEVOREVOQ1kAQkFEX0dBVEVXQVkAUExBWQBQVVQAQ0hFQ0tPVVQAR0FURVdBWV9USU1FT1VUAFJFUVVFU1RfVElNRU9VVABORVRXT1JLX0NPTk5FQ1RfVElNRU9VVABDT05ORUNUSU9OX1RJTUVPVVQATE9HSU5fVElNRU9VVABORVRXT1JLX1JFQURfVElNRU9VVABQT1NUAE1JU0RJUkVDVEVEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9SRVFVRVNUAENMSUVOVF9DTE9TRURfTE9BRF9CQUxBTkNFRF9SRVFVRVNUAEJBRF9SRVFVRVNUAEhUVFBfUkVRVUVTVF9TRU5UX1RPX0hUVFBTX1BPUlQAUkVQT1JUAElNX0FfVEVBUE9UAFJFU0VUX0NPTlRFTlQATk9fQ09OVEVOVABQQVJUSUFMX0NPTlRFTlQASFBFX0lOVkFMSURfQ09OU1RBTlQASFBFX0NCX1JFU0VUAEdFVABIUEVfU1RSSUNUAENPTkZMSUNUAFRFTVBPUkFSWV9SRURJUkVDVABQRVJNQU5FTlRfUkVESVJFQ1QAQ09OTkVDVABNVUxUSV9TVEFUVVMASFBFX0lOVkFMSURfU1RBVFVTAFRPT19NQU5ZX1JFUVVFU1RTAEVBUkxZX0hJTlRTAFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TAE9QVElPTlMAU1dJVENISU5HX1BST1RPQ09MUwBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUwBNVUxUSVBMRV9DSE9JQ0VTAElOVEVSTkFMX1NFUlZFUl9FUlJPUgBXRUJfU0VSVkVSX1VOS05PV05fRVJST1IAUkFJTEdVTl9FUlJPUgBJREVOVElUWV9QUk9WSURFUl9BVVRIRU5USUNBVElPTl9FUlJPUgBTU0xfQ0VSVElGSUNBVEVfRVJST1IASU5WQUxJRF9YX0ZPUldBUkRFRF9GT1IAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAFNFRV9PVEhFUgBIUEVfQ0JfQ0hVTktfSEVBREVSAE1LQ0FMRU5EQVIAU0VUVVAAV0VCX1NFUlZFUl9JU19ET1dOAFRFQVJET1dOAEhQRV9DTE9TRURfQ09OTkVDVElPTgBIRVVSSVNUSUNfRVhQSVJBVElPTgBESVNDT05ORUNURURfT1BFUkFUSU9OAE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OAEhQRV9JTlZBTElEX1ZFUlNJT04ASFBFX0NCX01FU1NBR0VfQkVHSU4AU0lURV9JU19GUk9aRU4ASFBFX0lOVkFMSURfSEVBREVSX1RPS0VOAElOVkFMSURfVE9LRU4ARk9SQklEREVOAEVOSEFOQ0VfWU9VUl9DQUxNAEhQRV9JTlZBTElEX1VSTABCTE9DS0VEX0JZX1BBUkVOVEFMX0NPTlRST0wATUtDT0wAQUNMAEhQRV9JTlRFUk5BTABSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFX1VOT0ZGSUNJQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAFJFVFJZX1dJVEgASFBFX0lOVkFMSURfQ09OVEVOVF9MRU5HVEgASFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgARkxVU0gAUFJPUFBBVENIAE0tU0VBUkNIAFVSSV9UT09fTE9ORwBQUk9DRVNTSU5HAE1JU0NFTExBTkVPVVNfUEVSU0lTVEVOVF9XQVJOSU5HAE1JU0NFTExBTkVPVVNfV0FSTklORwBIUEVfSU5WQUxJRF9UUkFOU0ZFUl9FTkNPRElORwBFeHBlY3RlZCBDUkxGAEhQRV9JTlZBTElEX0NIVU5LX1NJWkUATU9WRQBDT05USU5VRQBIUEVfQ0JfU1RBVFVTX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJTX0NPTVBMRVRFAEhQRV9DQl9WRVJTSU9OX0NPTVBMRVRFAEhQRV9DQl9VUkxfQ09NUExFVEUASFBFX0NCX0NIVU5LX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfVkFMVUVfQ09NUExFVEUASFBFX0NCX0NIVU5LX0VYVEVOU0lPTl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX05BTUVfQ09NUExFVEUASFBFX0NCX01FU1NBR0VfQ09NUExFVEUASFBFX0NCX01FVEhPRF9DT01QTEVURQBIUEVfQ0JfSEVBREVSX0ZJRUxEX0NPTVBMRVRFAERFTEVURQBIUEVfSU5WQUxJRF9FT0ZfU1RBVEUASU5WQUxJRF9TU0xfQ0VSVElGSUNBVEUAUEFVU0UATk9fUkVTUE9OU0UAVU5TVVBQT1JURURfTUVESUFfVFlQRQBHT05FAE5PVF9BQ0NFUFRBQkxFAFNFUlZJQ0VfVU5BVkFJTEFCTEUAUkFOR0VfTk9UX1NBVElTRklBQkxFAE9SSUdJTl9JU19VTlJFQUNIQUJMRQBSRVNQT05TRV9JU19TVEFMRQBQVVJHRQBNRVJHRQBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFAFJFUVVFU1RfSEVBREVSX1RPT19MQVJHRQBQQVlMT0FEX1RPT19MQVJHRQBJTlNVRkZJQ0lFTlRfU1RPUkFHRQBIUEVfUEFVU0VEX1VQR1JBREUASFBFX1BBVVNFRF9IMl9VUEdSQURFAFNPVVJDRQBBTk5PVU5DRQBUUkFDRQBIUEVfVU5FWFBFQ1RFRF9TUEFDRQBERVNDUklCRQBVTlNVQlNDUklCRQBSRUNPUkQASFBFX0lOVkFMSURfTUVUSE9EAE5PVF9GT1VORABQUk9QRklORABVTkJJTkQAUkVCSU5EAFVOQVVUSE9SSVpFRABNRVRIT0RfTk9UX0FMTE9XRUQASFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQAQUxSRUFEWV9SRVBPUlRFRABBQ0NFUFRFRABOT1RfSU1QTEVNRU5URUQATE9PUF9ERVRFQ1RFRABIUEVfQ1JfRVhQRUNURUQASFBFX0xGX0VYUEVDVEVEAENSRUFURUQASU1fVVNFRABIUEVfUEFVU0VEAFRJTUVPVVRfT0NDVVJFRABQQVlNRU5UX1JFUVVJUkVEAFBSRUNPTkRJVElPTl9SRVFVSVJFRABQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRABORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAExFTkdUSF9SRVFVSVJFRABTU0xfQ0VSVElGSUNBVEVfUkVRVUlSRUQAVVBHUkFERV9SRVFVSVJFRABQQUdFX0VYUElSRUQAUFJFQ09ORElUSU9OX0ZBSUxFRABFWFBFQ1RBVElPTl9GQUlMRUQAUkVWQUxJREFUSU9OX0ZBSUxFRABTU0xfSEFORFNIQUtFX0ZBSUxFRABMT0NLRUQAVFJBTlNGT1JNQVRJT05fQVBQTElFRABOT1RfTU9ESUZJRUQATk9UX0VYVEVOREVEAEJBTkRXSURUSF9MSU1JVF9FWENFRURFRABTSVRFX0lTX09WRVJMT0FERUQASEVBRABFeHBlY3RlZCBIVFRQLwAAXhMAACYTAAAwEAAA8BcAAJ0TAAAVEgAAORcAAPASAAAKEAAAdRIAAK0SAACCEwAATxQAAH8QAACgFQAAIxQAAIkSAACLFAAATRUAANQRAADPFAAAEBgAAMkWAADcFgAAwREAAOAXAAC7FAAAdBQAAHwVAADlFAAACBcAAB8QAABlFQAAoxQAACgVAAACFQAAmRUAACwQAACLGQAATw8AANQOAABqEAAAzhAAAAIXAACJDgAAbhMAABwTAABmFAAAVhcAAMETAADNEwAAbBMAAGgXAABmFwAAXxcAACITAADODwAAaQ4AANgOAABjFgAAyxMAAKoOAAAoFwAAJhcAAMUTAABdFgAA6BEAAGcTAABlEwAA8hYAAHMTAAAdFwAA+RYAAPMRAADPDgAAzhUAAAwSAACzEQAApREAAGEQAAAyFwAAuxMAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIDAgICAgIAAAICAAICAAICAgICAgICAgIABAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAICAgICAAACAgACAgACAgICAgICAgICAAMABAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbG9zZWVlcC1hbGl2ZQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBY2h1bmtlZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEAAAEBAAEBAAEBAQEBAQEBAQEAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlY3Rpb25lbnQtbGVuZ3Rob25yb3h5LWNvbm5lY3Rpb24AAAAAAAAAAAAAAAAAAAByYW5zZmVyLWVuY29kaW5ncGdyYWRlDQoNCg0KU00NCg0KVFRQL0NFL1RTUC8AAAAAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEFAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAMEAAAEBAQEBAQEBAQEBAUEBAQEBAQEBAQEBAQABAAGBwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOT1VOQ0VFQ0tPVVRORUNURVRFQ1JJQkVMVVNIRVRFQURTRUFSQ0hSR0VDVElWSVRZTEVOREFSVkVPVElGWVBUSU9OU0NIU0VBWVNUQVRDSEdFT1JESVJFQ1RPUlRSQ0hQQVJBTUVURVJVUkNFQlNDUklCRUFSRE9XTkFDRUlORE5LQ0tVQlNDUklCRUhUVFAvQURUUC8="), Sc;
}
var Fc, Vh;
function gm() {
  return Vh || (Vh = 1, Fc = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAwABBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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IAH9CwMAIABBMGogAf0LAwAgAEEgaiAB/QsDACAAQd0BNgIcQQALewEBfwJAIAAoAgwiAw0AAkAgACgCBEUNACAAIAE2AgQLAkAgACABIAIQxICAgAAiAw0AIAAoAgwPCyAAIAM2AhxBACEDIAAoAgQiAUUNACAAIAEgAiAAKAIIEYGAgIAAACIBRQ0AIAAgAjYCFCAAIAE2AgwgASEDCyADC+TzAQMOfwN+BH8jgICAgABBEGsiAySAgICAACABIQQgASEFIAEhBiABIQcgASEIIAEhCSABIQogASELIAEhDCABIQ0gASEOIAEhDwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIcIhBBf2oO3QHaAQHZAQIDBAUGBwgJCgsMDQ7YAQ8Q1wEREtYBExQVFhcYGRob4AHfARwdHtUBHyAhIiMkJdQBJicoKSorLNMB0gEtLtEB0AEvMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUbbAUdISUrPAc4BS80BTMwBTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEB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QAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBAOxwEAAQID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YWNrIGVycm9yAGBvbl9jaHVua19leHRlbnNpb25fdmFsdWVgIGNhbGxiYWNrIGVycm9yAGBvbl9zdGF0dXNfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl92ZXJzaW9uX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdXJsX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWV0aG9kX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX25hbWVgIGNhbGxiYWNrIGVycm9yAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2VydmVyAEludmFsaWQgaGVhZGVyIHZhbHVlIGNoYXIASW52YWxpZCBoZWFkZXIgZmllbGQgY2hhcgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3ZlcnNpb24ASW52YWxpZCBtaW5vciB2ZXJzaW9uAEludmFsaWQgbWFqb3IgdmVyc2lvbgBFeHBlY3RlZCBzcGFjZSBhZnRlciB2ZXJzaW9uAEV4cGVjdGVkIENSTEYgYWZ0ZXIgdmVyc2lvbgBJbnZhbGlkIEhUVFAgdmVyc2lvbgBJbnZhbGlkIGhlYWRlciB0b2tlbgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3VybABJbnZhbGlkIGNoYXJhY3RlcnMgaW4gdXJsAFVuZXhwZWN0ZWQgc3RhcnQgY2hhciBpbiB1cmwARG91YmxlIEAgaW4gdXJsAEVtcHR5IENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhcmFjdGVyIGluIENvbnRlbnQtTGVuZ3RoAER1cGxpY2F0ZSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXIgaW4gdXJsIHBhdGgAQ29udGVudC1MZW5ndGggY2FuJ3QgYmUgcHJlc2VudCB3aXRoIFRyYW5zZmVyLUVuY29kaW5nAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHNpemUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfdmFsdWUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyB2YWx1ZQBNaXNzaW5nIGV4cGVjdGVkIExGIGFmdGVyIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AgaGVhZGVyIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGUgdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyBxdW90ZWQgdmFsdWUAUGF1c2VkIGJ5IG9uX2hlYWRlcnNfY29tcGxldGUASW52YWxpZCBFT0Ygc3RhdGUAb25fcmVzZXQgcGF1c2UAb25fY2h1bmtfaGVhZGVyIHBhdXNlAG9uX21lc3NhZ2VfYmVnaW4gcGF1c2UAb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlIHBhdXNlAG9uX3N0YXR1c19jb21wbGV0ZSBwYXVzZQBvbl92ZXJzaW9uX2NvbXBsZXRlIHBhdXNlAG9uX3VybF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19jb21wbGV0ZSBwYXVzZQBvbl9oZWFkZXJfdmFsdWVfY29tcGxldGUgcGF1c2UAb25fbWVzc2FnZV9jb21wbGV0ZSBwYXVzZQBvbl9tZXRob2RfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX2ZpZWxkX2NvbXBsZXRlIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lIHBhdXNlAFVuZXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgc3RhcnQgbGluZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgbmFtZQBQYXVzZSBvbiBDT05ORUNUL1VwZ3JhZGUAUGF1c2Ugb24gUFJJL1VwZ3JhZGUARXhwZWN0ZWQgSFRUUC8yIENvbm5lY3Rpb24gUHJlZmFjZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX21ldGhvZABFeHBlY3RlZCBzcGFjZSBhZnRlciBtZXRob2QAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfZmllbGQAUGF1c2VkAEludmFsaWQgd29yZCBlbmNvdW50ZXJlZABJbnZhbGlkIG1ldGhvZCBlbmNvdW50ZXJlZABVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNjaGVtYQBSZXF1ZXN0IGhhcyBpbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AAU1dJVENIX1BST1hZAFVTRV9QUk9YWQBNS0FDVElWSVRZAFVOUFJPQ0VTU0FCTEVfRU5USVRZAENPUFkATU9WRURfUEVSTUFORU5UTFkAVE9PX0VBUkxZAE5PVElGWQBGQUlMRURfREVQRU5ERU5DWQBCQURfR0FURVdBWQBQTEFZAFBVVABDSEVDS09VVABHQVRFV0FZX1RJTUVPVVQAUkVRVUVTVF9USU1FT1VUAE5FVFdPUktfQ09OTkVDVF9USU1FT1VUAENPTk5FQ1RJT05fVElNRU9VVABMT0dJTl9USU1FT1VUAE5FVFdPUktfUkVBRF9USU1FT1VUAFBPU1QATUlTRElSRUNURURfUkVRVUVTVABDTElFTlRfQ0xPU0VEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9MT0FEX0JBTEFOQ0VEX1JFUVVFU1QAQkFEX1JFUVVFU1QASFRUUF9SRVFVRVNUX1NFTlRfVE9fSFRUUFNfUE9SVABSRVBPUlQASU1fQV9URUFQT1QAUkVTRVRfQ09OVEVOVABOT19DT05URU5UAFBBUlRJQUxfQ09OVEVOVABIUEVfSU5WQUxJRF9DT05TVEFOVABIUEVfQ0JfUkVTRVQAR0VUAEhQRV9TVFJJQ1QAQ09ORkxJQ1QAVEVNUE9SQVJZX1JFRElSRUNUAFBFUk1BTkVOVF9SRURJUkVDVABDT05ORUNUAE1VTFRJX1NUQVRVUwBIUEVfSU5WQUxJRF9TVEFUVVMAVE9PX01BTllfUkVRVUVTVFMARUFSTFlfSElOVFMAVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlMAT1BUSU9OUwBTV0lUQ0hJTkdfUFJPVE9DT0xTAFZBUklBTlRfQUxTT19ORUdPVElBVEVTAE1VTFRJUExFX0NIT0lDRVMASU5URVJOQUxfU0VSVkVSX0VSUk9SAFdFQl9TRVJWRVJfVU5LTk9XTl9FUlJPUgBSQUlMR1VOX0VSUk9SAElERU5USVRZX1BST1ZJREVSX0FVVEhFTlRJQ0FUSU9OX0VSUk9SAFNTTF9DRVJUSUZJQ0FURV9FUlJPUgBJTlZBTElEX1hfRk9SV0FSREVEX0ZPUgBTRVRfUEFSQU1FVEVSAEdFVF9QQVJBTUVURVIASFBFX1VTRVIAU0VFX09USEVSAEhQRV9DQl9DSFVOS19IRUFERVIATUtDQUxFTkRBUgBTRVRVUABXRUJfU0VSVkVSX0lTX0RPV04AVEVBUkRPV04ASFBFX0NMT1NFRF9DT05ORUNUSU9OAEhFVVJJU1RJQ19FWFBJUkFUSU9OAERJU0NPTk5FQ1RFRF9PUEVSQVRJT04ATk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT04ASFBFX0lOVkFMSURfVkVSU0lPTgBIUEVfQ0JfTUVTU0FHRV9CRUdJTgBTSVRFX0lTX0ZST1pFTgBIUEVfSU5WQUxJRF9IRUFERVJfVE9LRU4ASU5WQUxJRF9UT0tFTgBGT1JCSURERU4ARU5IQU5DRV9ZT1VSX0NBTE0ASFBFX0lOVkFMSURfVVJMAEJMT0NLRURfQllfUEFSRU5UQUxfQ09OVFJPTABNS0NPTABBQ0wASFBFX0lOVEVSTkFMAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0VfVU5PRkZJQ0lBTABIUEVfT0sAVU5MSU5LAFVOTE9DSwBQUkkAUkVUUllfV0lUSABIUEVfSU5WQUxJRF9DT05URU5UX0xFTkdUSABIUEVfVU5FWFBFQ1RFRF9DT05URU5UX0xFTkdUSABGTFVTSABQUk9QUEFUQ0gATS1TRUFSQ0gAVVJJX1RPT19MT05HAFBST0NFU1NJTkcATUlTQ0VMTEFORU9VU19QRVJTSVNURU5UX1dBUk5JTkcATUlTQ0VMTEFORU9VU19XQVJOSU5HAEhQRV9JTlZBTElEX1RSQU5TRkVSX0VOQ09ESU5HAEV4cGVjdGVkIENSTEYASFBFX0lOVkFMSURfQ0hVTktfU0laRQBNT1ZFAENPTlRJTlVFAEhQRV9DQl9TVEFUVVNfQ09NUExFVEUASFBFX0NCX0hFQURFUlNfQ09NUExFVEUASFBFX0NCX1ZFUlNJT05fQ09NUExFVEUASFBFX0NCX1VSTF9DT01QTEVURQBIUEVfQ0JfQ0hVTktfQ09NUExFVEUASFBFX0NCX0hFQURFUl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX1ZBTFVFX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19FWFRFTlNJT05fTkFNRV9DT01QTEVURQBIUEVfQ0JfTUVTU0FHRV9DT01QTEVURQBIUEVfQ0JfTUVUSE9EX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfRklFTERfQ09NUExFVEUAREVMRVRFAEhQRV9JTlZBTElEX0VPRl9TVEFURQBJTlZBTElEX1NTTF9DRVJUSUZJQ0FURQBQQVVTRQBOT19SRVNQT05TRQBVTlNVUFBPUlRFRF9NRURJQV9UWVBFAEdPTkUATk9UX0FDQ0VQVEFCTEUAU0VSVklDRV9VTkFWQUlMQUJMRQBSQU5HRV9OT1RfU0FUSVNGSUFCTEUAT1JJR0lOX0lTX1VOUkVBQ0hBQkxFAFJFU1BPTlNFX0lTX1NUQUxFAFBVUkdFAE1FUkdFAFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0UAUkVRVUVTVF9IRUFERVJfVE9PX0xBUkdFAFBBWUxPQURfVE9PX0xBUkdFAElOU1VGRklDSUVOVF9TVE9SQUdFAEhQRV9QQVVTRURfVVBHUkFERQBIUEVfUEFVU0VEX0gyX1VQR1JBREUAU09VUkNFAEFOTk9VTkNFAFRSQUNFAEhQRV9VTkVYUEVDVEVEX1NQQUNFAERFU0NSSUJFAFVOU1VCU0NSSUJFAFJFQ09SRABIUEVfSU5WQUxJRF9NRVRIT0QATk9UX0ZPVU5EAFBST1BGSU5EAFVOQklORABSRUJJTkQAVU5BVVRIT1JJWkVEAE1FVEhPRF9OT1RfQUxMT1dFRABIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRABBTFJFQURZX1JFUE9SVEVEAEFDQ0VQVEVEAE5PVF9JTVBMRU1FTlRFRABMT09QX0RFVEVDVEVEAEhQRV9DUl9FWFBFQ1RFRABIUEVfTEZfRVhQRUNURUQAQ1JFQVRFRABJTV9VU0VEAEhQRV9QQVVTRUQAVElNRU9VVF9PQ0NVUkVEAFBBWU1FTlRfUkVRVUlSRUQAUFJFQ09ORElUSU9OX1JFUVVJUkVEAFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQATEVOR1RIX1JFUVVJUkVEAFNTTF9DRVJUSUZJQ0FURV9SRVFVSVJFRABVUEdSQURFX1JFUVVJUkVEAFBBR0VfRVhQSVJFRABQUkVDT05ESVRJT05fRkFJTEVEAEVYUEVDVEFUSU9OX0ZBSUxFRABSRVZBTElEQVRJT05fRkFJTEVEAFNTTF9IQU5EU0hBS0VfRkFJTEVEAExPQ0tFRABUUkFOU0ZPUk1BVElPTl9BUFBMSUVEAE5PVF9NT0RJRklFRABOT1RfRVhURU5ERUQAQkFORFdJRFRIX0xJTUlUX0VYQ0VFREVEAFNJVEVfSVNfT1ZFUkxPQURFRABIRUFEAEV4cGVjdGVkIEhUVFAvAABeEwAAJhMAADAQAADwFwAAnRMAABUSAAA5FwAA8BIAAAoQAAB1EgAArRIAAIITAABPFAAAfxAAAKAVAAAjFAAAiRIAAIsUAABNFQAA1BEAAM8UAAAQGAAAyRYAANwWAADBEQAA4BcAALsUAAB0FAAAfBUAAOUUAAAIFwAAHxAAAGUVAACjFAAAKBUAAAIVAACZFQAALBAAAIsZAABPDwAA1A4AAGoQAADOEAAAAhcAAIkOAABuEwAAHBMAAGYUAABWFwAAwRMAAM0TAABsEwAAaBcAAGYXAABfFwAAIhMAAM4PAABpDgAA2A4AAGMWAADLEwAAqg4AACgXAAAmFwAAxRMAAF0WAADoEQAAZxMAAGUTAADyFgAAcxMAAB0XAAD5FgAA8xEAAM8OAADOFQAADBIAALMRAAClEQAAYRAAADIXAAC7EwAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgMCAgICAgAAAgIAAgIAAgICAgICAgICAgAEAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgICAgIAAAICAAICAAICAgICAgICAgIAAwAEAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsb3NlZWVwLWFsaXZlAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQFjaHVua2VkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQAAAQEAAQEAAQEBAQEBAQEBAQAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGVjdGlvbmVudC1sZW5ndGhvbnJveHktY29ubmVjdGlvbgAAAAAAAAAAAAAAAAAAAHJhbnNmZXItZW5jb2RpbmdwZ3JhZGUNCg0KDQpTTQ0KDQpUVFAvQ0UvVFNQLwAAAAAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAwQAAAQEBAQEBAQEBAQEBQQEBAQEBAQEBAQEBAAEAAYHBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAgAAAAACAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5PVU5DRUVDS09VVE5FQ1RFVEVDUklCRUxVU0hFVEVBRFNFQVJDSFJHRUNUSVZJVFlMRU5EQVJWRU9USUZZUFRJT05TQ0hTRUFZU1RBVENIR0VPUkRJUkVDVE9SVFJDSFBBUkFNRVRFUlVSQ0VCU0NSSUJFQVJET1dOQUNFSU5ETktDS1VCU0NSSUJFSFRUUC9BRFRQLw=="), Fc;
}
const re = Xe, GC = Il, lm = Bn, { pipeline: hm } = Wt, ae = me, Nc = Dp, Hg = Jp, Em = Ra, {
  RequestContentLengthMismatchError: gr,
  ResponseContentLengthMismatchError: um,
  InvalidArgumentError: je,
  RequestAbortedError: Ll,
  HeadersTimeoutError: Qm,
  HeadersOverflowError: Cm,
  SocketError: En,
  InformationalError: _t,
  BodyTimeoutError: Bm,
  HTTPParserError: Im,
  ResponseExceededMaxSizeError: dm,
  ClientDestroyedError: fm
} = ke, pm = Da, {
  kUrl: fA,
  kReset: OA,
  kServerName: Dr,
  kClient: Pt,
  kBusy: Vg,
  kParser: _e,
  kConnect: mm,
  kBlocking: un,
  kResuming: ns,
  kRunning: Je,
  kPending: ms,
  kSize: ds,
  kWriting: lr,
  kQueue: Ue,
  kConnected: wm,
  kConnecting: Js,
  kNeedDrain: Gr,
  kNoRef: Vn,
  kKeepAliveDefaultTimeout: Wg,
  kHostHeader: YC,
  kPendingIdx: st,
  kRunningIdx: ve,
  kError: pA,
  kPipelining: Yr,
  kSocket: Pe,
  kKeepAliveTimeoutValue: ri,
  kMaxHeadersSize: Mo,
  kKeepAliveMaxTimeout: xC,
  kKeepAliveTimeoutThreshold: JC,
  kHeadersTimeout: OC,
  kBodyTimeout: _C,
  kStrictContentLength: si,
  kConnector: Wn,
  kMaxRedirections: ym,
  kMaxRequests: ni,
  kCounter: PC,
  kClose: Rm,
  kDestroy: Dm,
  kDispatch: bm,
  kInterceptors: km,
  kLocalAddress: qn,
  kMaxResponseSize: HC,
  kHTTPConnVersion: Ht,
  // HTTP2
  kHost: VC,
  kHTTP2Session: nt,
  kHTTP2SessionState: Aa,
  kHTTP2BuildRequest: Sm,
  kHTTP2CopyHeaders: Fm,
  kHTTP1BuildRequest: Nm
} = Le;
let ta;
try {
  ta = require("http2");
} catch {
  ta = { constants: {} };
}
const {
  constants: {
    HTTP2_HEADER_AUTHORITY: Tm,
    HTTP2_HEADER_METHOD: Um,
    HTTP2_HEADER_PATH: vm,
    HTTP2_HEADER_SCHEME: Lm,
    HTTP2_HEADER_CONTENT_LENGTH: Mm,
    HTTP2_HEADER_EXPECT: Gm,
    HTTP2_HEADER_STATUS: Ym
  }
} = ta;
let Wh = !1;
const no = Buffer[Symbol.species], br = Symbol("kClosedResolve"), NA = {};
try {
  const t = require("diagnostics_channel");
  NA.sendHeaders = t.channel("undici:client:sendHeaders"), NA.beforeConnect = t.channel("undici:client:beforeConnect"), NA.connectError = t.channel("undici:client:connectError"), NA.connected = t.channel("undici:client:connected");
} catch {
  NA.sendHeaders = { hasSubscribers: !1 }, NA.beforeConnect = { hasSubscribers: !1 }, NA.connectError = { hasSubscribers: !1 }, NA.connected = { hasSubscribers: !1 };
}
let xm = class extends Em {
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
    keepAliveMaxTimeout: Q,
    keepAliveTimeoutThreshold: B,
    socketPath: u,
    pipelining: I,
    tls: f,
    strictContentLength: C,
    maxCachedSessions: d,
    maxRedirections: w,
    connect: p,
    maxRequestsPerClient: m,
    localAddress: D,
    maxResponseSize: b,
    autoSelectFamily: G,
    autoSelectFamilyAttemptTimeout: _,
    // h2
    allowH2: Y,
    maxConcurrentStreams: te
  } = {}) {
    if (super(), c !== void 0)
      throw new je("unsupported keepAlive, use pipelining=0 instead");
    if (n !== void 0)
      throw new je("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
    if (i !== void 0)
      throw new je("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
    if (g !== void 0)
      throw new je("unsupported idleTimeout, use keepAliveTimeout instead");
    if (h !== void 0)
      throw new je("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
    if (r != null && !Number.isFinite(r))
      throw new je("invalid maxHeaderSize");
    if (u != null && typeof u != "string")
      throw new je("invalid socketPath");
    if (o != null && (!Number.isFinite(o) || o < 0))
      throw new je("invalid connectTimeout");
    if (E != null && (!Number.isFinite(E) || E <= 0))
      throw new je("invalid keepAliveTimeout");
    if (Q != null && (!Number.isFinite(Q) || Q <= 0))
      throw new je("invalid keepAliveMaxTimeout");
    if (B != null && !Number.isFinite(B))
      throw new je("invalid keepAliveTimeoutThreshold");
    if (s != null && (!Number.isInteger(s) || s < 0))
      throw new je("headersTimeout must be a positive integer or zero");
    if (a != null && (!Number.isInteger(a) || a < 0))
      throw new je("bodyTimeout must be a positive integer or zero");
    if (p != null && typeof p != "function" && typeof p != "object")
      throw new je("connect must be a function or an object");
    if (w != null && (!Number.isInteger(w) || w < 0))
      throw new je("maxRedirections must be a positive number");
    if (m != null && (!Number.isInteger(m) || m < 0))
      throw new je("maxRequestsPerClient must be a positive number");
    if (D != null && (typeof D != "string" || GC.isIP(D) === 0))
      throw new je("localAddress must be valid string IP address");
    if (b != null && (!Number.isInteger(b) || b < -1))
      throw new je("maxResponseSize must be a positive number");
    if (_ != null && (!Number.isInteger(_) || _ < -1))
      throw new je("autoSelectFamilyAttemptTimeout must be a positive number");
    if (Y != null && typeof Y != "boolean")
      throw new je("allowH2 must be a valid boolean value");
    if (te != null && (typeof te != "number" || te < 1))
      throw new je("maxConcurrentStreams must be a possitive integer, greater than 0");
    typeof p != "function" && (p = pm({
      ...f,
      maxCachedSessions: d,
      allowH2: Y,
      socketPath: u,
      timeout: o,
      ...ae.nodeHasAutoSelectFamily && G ? { autoSelectFamily: G, autoSelectFamilyAttemptTimeout: _ } : void 0,
      ...p
    })), this[km] = A && A.Client && Array.isArray(A.Client) ? A.Client : [Hm({ maxRedirections: w })], this[fA] = ae.parseOrigin(e), this[Wn] = p, this[Pe] = null, this[Yr] = I ?? 1, this[Mo] = r || lm.maxHeaderSize, this[Wg] = E ?? 4e3, this[xC] = Q ?? 6e5, this[JC] = B ?? 1e3, this[ri] = this[Wg], this[Dr] = null, this[qn] = D ?? null, this[ns] = 0, this[Gr] = 0, this[YC] = `host: ${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}\r
`, this[_C] = a ?? 3e5, this[OC] = s ?? 3e5, this[si] = C ?? !0, this[ym] = w, this[ni] = m, this[br] = null, this[HC] = b > -1 ? b : -1, this[Ht] = "h1", this[nt] = null, this[Aa] = Y ? {
      // streams: null, // Fixed queue of streams - For future support of `push`
      openStreams: 0,
      // Keep track of them to decide wether or not unref the session
      maxConcurrentStreams: te ?? 100
      // Max peerConcurrentStreams for a Node h2 server
    } : null, this[VC] = `${this[fA].hostname}${this[fA].port ? `:${this[fA].port}` : ""}`, this[Ue] = [], this[ve] = 0, this[st] = 0;
  }
  get pipelining() {
    return this[Yr];
  }
  set pipelining(e) {
    this[Yr] = e, it(this, !0);
  }
  get [ms]() {
    return this[Ue].length - this[st];
  }
  get [Je]() {
    return this[st] - this[ve];
  }
  get [ds]() {
    return this[Ue].length - this[ve];
  }
  get [wm]() {
    return !!this[Pe] && !this[Js] && !this[Pe].destroyed;
  }
  get [Vg]() {
    const e = this[Pe];
    return e && (e[OA] || e[lr] || e[un]) || this[ds] >= (this[Yr] || 1) || this[ms] > 0;
  }
  /* istanbul ignore: only used for test */
  [mm](e) {
    zC(this), this.once("connect", e);
  }
  [bm](e, A) {
    const r = e.origin || this[fA].origin, s = this[Ht] === "h2" ? Hg[Sm](r, e, A) : Hg[Nm](r, e, A);
    return this[Ue].push(s), this[ns] || (ae.bodyLength(s.body) == null && ae.isIterable(s.body) ? (this[ns] = 1, process.nextTick(it, this)) : it(this, !0)), this[ns] && this[Gr] !== 2 && this[Vg] && (this[Gr] = 2), this[Gr] < 2;
  }
  async [Rm]() {
    return new Promise((e) => {
      this[ds] ? this[br] = e : e(null);
    });
  }
  async [Dm](e) {
    return new Promise((A) => {
      const r = this[Ue].splice(this[st]);
      for (let n = 0; n < r.length; n++) {
        const i = r[n];
        _A(this, i, e);
      }
      const s = () => {
        this[br] && (this[br](), this[br] = null), A();
      };
      this[nt] != null && (ae.destroy(this[nt], e), this[nt] = null, this[Aa] = null), this[Pe] ? ae.destroy(this[Pe].on("close", s), e) : queueMicrotask(s), it(this);
    });
  }
};
function Jm(t) {
  re(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[Pe][pA] = t, ba(this[Pt], t);
}
function Om(t, e, A) {
  const r = new _t(`HTTP/2: "frameError" received - type ${t}, code ${e}`);
  A === 0 && (this[Pe][pA] = r, ba(this[Pt], r));
}
function _m() {
  ae.destroy(this, new En("other side closed")), ae.destroy(this[Pe], new En("other side closed"));
}
function Pm(t) {
  const e = this[Pt], A = new _t(`HTTP/2: "GOAWAY" frame received with code ${t}`);
  if (e[Pe] = null, e[nt] = null, e.destroyed) {
    re(this[ms] === 0);
    const r = e[Ue].splice(e[ve]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      _A(this, n, A);
    }
  } else if (e[Je] > 0) {
    const r = e[Ue][e[ve]];
    e[Ue][e[ve]++] = null, _A(e, r, A);
  }
  e[st] = e[ve], re(e[Je] === 0), e.emit(
    "disconnect",
    e[fA],
    [e],
    A
  ), it(e);
}
const Nt = Am(), Hm = vl, Vm = Buffer.alloc(0);
async function Wm() {
  const t = process.env.JEST_WORKER_ID ? Hh() : void 0;
  let e;
  try {
    e = await WebAssembly.compile(Buffer.from(gm(), "base64"));
  } catch {
    e = await WebAssembly.compile(Buffer.from(t || Hh(), "base64"));
  }
  return await WebAssembly.instantiate(e, {
    env: {
      /* eslint-disable camelcase */
      wasm_on_url: (A, r, s) => 0,
      wasm_on_status: (A, r, s) => {
        re.strictEqual(aA.ptr, A);
        const n = r - Ot + vt.byteOffset;
        return aA.onStatus(new no(vt.buffer, n, s)) || 0;
      },
      wasm_on_message_begin: (A) => (re.strictEqual(aA.ptr, A), aA.onMessageBegin() || 0),
      wasm_on_header_field: (A, r, s) => {
        re.strictEqual(aA.ptr, A);
        const n = r - Ot + vt.byteOffset;
        return aA.onHeaderField(new no(vt.buffer, n, s)) || 0;
      },
      wasm_on_header_value: (A, r, s) => {
        re.strictEqual(aA.ptr, A);
        const n = r - Ot + vt.byteOffset;
        return aA.onHeaderValue(new no(vt.buffer, n, s)) || 0;
      },
      wasm_on_headers_complete: (A, r, s, n) => (re.strictEqual(aA.ptr, A), aA.onHeadersComplete(r, !!s, !!n) || 0),
      wasm_on_body: (A, r, s) => {
        re.strictEqual(aA.ptr, A);
        const n = r - Ot + vt.byteOffset;
        return aA.onBody(new no(vt.buffer, n, s)) || 0;
      },
      wasm_on_message_complete: (A) => (re.strictEqual(aA.ptr, A), aA.onMessageComplete() || 0)
      /* eslint-enable camelcase */
    }
  });
}
let Tc = null, qg = Wm();
qg.catch();
let aA = null, vt = null, io = 0, Ot = null;
const Qn = 1, Go = 2, jg = 3;
class qm {
  constructor(e, A, { exports: r }) {
    re(Number.isFinite(e[Mo]) && e[Mo] > 0), this.llhttp = r, this.ptr = this.llhttp.llhttp_alloc(Nt.TYPE.RESPONSE), this.client = e, this.socket = A, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = e[Mo], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e[HC];
  }
  setTimeout(e, A) {
    this.timeoutType = A, e !== this.timeoutValue ? (Nc.clearTimeout(this.timeout), e ? (this.timeout = Nc.setTimeout(jm, e, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e) : this.timeout && this.timeout.refresh && this.timeout.refresh();
  }
  resume() {
    this.socket.destroyed || !this.paused || (re(this.ptr != null), re(aA == null), this.llhttp.llhttp_resume(this.ptr), re(this.timeoutType === Go), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = !1, this.execute(this.socket.read() || Vm), this.readMore());
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
    re(this.ptr != null), re(aA == null), re(!this.paused);
    const { socket: A, llhttp: r } = this;
    e.length > io && (Ot && r.free(Ot), io = Math.ceil(e.length / 4096) * 4096, Ot = r.malloc(io)), new Uint8Array(r.memory.buffer, Ot, io).set(e);
    try {
      let s;
      try {
        vt = e, aA = this, s = r.llhttp_execute(this.ptr, Ot, e.length);
      } catch (i) {
        throw i;
      } finally {
        aA = null, vt = null;
      }
      const n = r.llhttp_get_error_pos(this.ptr) - Ot;
      if (s === Nt.ERROR.PAUSED_UPGRADE)
        this.onUpgrade(e.slice(n));
      else if (s === Nt.ERROR.PAUSED)
        this.paused = !0, A.unshift(e.slice(n));
      else if (s !== Nt.ERROR.OK) {
        const i = r.llhttp_get_error_reason(this.ptr);
        let o = "";
        if (i) {
          const a = new Uint8Array(r.memory.buffer, i).indexOf(0);
          o = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r.memory.buffer, i, a).toString() + ")";
        }
        throw new Im(o, Nt.ERROR[s], e.slice(n));
      }
    } catch (s) {
      ae.destroy(A, s);
    }
  }
  destroy() {
    re(this.ptr != null), re(aA == null), this.llhttp.llhttp_free(this.ptr), this.ptr = null, Nc.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
  }
  onStatus(e) {
    this.statusText = e.toString();
  }
  onMessageBegin() {
    const { socket: e, client: A } = this;
    if (e.destroyed || !A[Ue][A[ve]])
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
    this.headersSize += e, this.headersSize >= this.headersMaxSize && ae.destroy(this.socket, new Cm());
  }
  onUpgrade(e) {
    const { upgrade: A, client: r, socket: s, headers: n, statusCode: i } = this;
    re(A);
    const o = r[Ue][r[ve]];
    re(o), re(!s.destroyed), re(s === r[Pe]), re(!this.paused), re(o.upgrade || o.method === "CONNECT"), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, re(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, s.unshift(e), s[_e].destroy(), s[_e] = null, s[Pt] = null, s[pA] = null, s.removeListener("error", qC).removeListener("readable", WC).removeListener("end", jC).removeListener("close", zg), r[Pe] = null, r[Ue][r[ve]++] = null, r.emit("disconnect", r[fA], [r], new _t("upgrade"));
    try {
      o.onUpgrade(i, n, s);
    } catch (a) {
      ae.destroy(s, a);
    }
    it(r);
  }
  onHeadersComplete(e, A, r) {
    const { client: s, socket: n, headers: i, statusText: o } = this;
    if (n.destroyed)
      return -1;
    const a = s[Ue][s[ve]];
    if (!a)
      return -1;
    if (re(!this.upgrade), re(this.statusCode < 200), e === 100)
      return ae.destroy(n, new En("bad response", ae.getSocketInfo(n))), -1;
    if (A && !a.upgrade)
      return ae.destroy(n, new En("bad upgrade", ae.getSocketInfo(n))), -1;
    if (re.strictEqual(this.timeoutType, Qn), this.statusCode = e, this.shouldKeepAlive = r || // Override llhttp value which does not allow keepAlive for HEAD.
    a.method === "HEAD" && !n[OA] && this.connection.toLowerCase() === "keep-alive", this.statusCode >= 200) {
      const c = a.bodyTimeout != null ? a.bodyTimeout : s[_C];
      this.setTimeout(c, Go);
    } else
      this.timeout && this.timeout.refresh && this.timeout.refresh();
    if (a.method === "CONNECT")
      return re(s[Je] === 1), this.upgrade = !0, 2;
    if (A)
      return re(s[Je] === 1), this.upgrade = !0, 2;
    if (re(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s[Yr]) {
      const c = this.keepAlive ? ae.parseKeepAliveTimeout(this.keepAlive) : null;
      if (c != null) {
        const E = Math.min(
          c - s[JC],
          s[xC]
        );
        E <= 0 ? n[OA] = !0 : s[ri] = E;
      } else
        s[ri] = s[Wg];
    } else
      n[OA] = !0;
    const g = a.onHeaders(e, i, this.resume, o) === !1;
    return a.aborted ? -1 : a.method === "HEAD" || e < 200 ? 1 : (n[un] && (n[un] = !1, it(s)), g ? Nt.ERROR.PAUSED : 0);
  }
  onBody(e) {
    const { client: A, socket: r, statusCode: s, maxResponseSize: n } = this;
    if (r.destroyed)
      return -1;
    const i = A[Ue][A[ve]];
    if (re(i), re.strictEqual(this.timeoutType, Go), this.timeout && this.timeout.refresh && this.timeout.refresh(), re(s >= 200), n > -1 && this.bytesRead + e.length > n)
      return ae.destroy(r, new dm()), -1;
    if (this.bytesRead += e.length, i.onData(e) === !1)
      return Nt.ERROR.PAUSED;
  }
  onMessageComplete() {
    const { client: e, socket: A, statusCode: r, upgrade: s, headers: n, contentLength: i, bytesRead: o, shouldKeepAlive: a } = this;
    if (A.destroyed && (!r || a))
      return -1;
    if (s)
      return;
    const g = e[Ue][e[ve]];
    if (re(g), re(r >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", re(this.headers.length % 2 === 0), this.headers = [], this.headersSize = 0, !(r < 200)) {
      if (g.method !== "HEAD" && i && o !== parseInt(i, 10))
        return ae.destroy(A, new um()), -1;
      if (g.onComplete(n), e[Ue][e[ve]++] = null, A[lr])
        return re.strictEqual(e[Je], 0), ae.destroy(A, new _t("reset")), Nt.ERROR.PAUSED;
      if (a) {
        if (A[OA] && e[Je] === 0)
          return ae.destroy(A, new _t("reset")), Nt.ERROR.PAUSED;
        e[Yr] === 1 ? setImmediate(it, e) : it(e);
      } else
        return ae.destroy(A, new _t("reset")), Nt.ERROR.PAUSED;
    }
  }
}
function jm(t) {
  const { socket: e, timeoutType: A, client: r } = t;
  A === Qn ? (!e[lr] || e.writableNeedDrain || r[Je] > 1) && (re(!t.paused, "cannot be paused while waiting for headers"), ae.destroy(e, new Qm())) : A === Go ? t.paused || ae.destroy(e, new Bm()) : A === jg && (re(r[Je] === 0 && r[ri]), ae.destroy(e, new _t("socket idle timeout")));
}
function WC() {
  const { [_e]: t } = this;
  t && t.readMore();
}
function qC(t) {
  const { [Pt]: e, [_e]: A } = this;
  if (re(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), e[Ht] !== "h2" && t.code === "ECONNRESET" && A.statusCode && !A.shouldKeepAlive) {
    A.onMessageComplete();
    return;
  }
  this[pA] = t, ba(this[Pt], t);
}
function ba(t, e) {
  if (t[Je] === 0 && e.code !== "UND_ERR_INFO" && e.code !== "UND_ERR_SOCKET") {
    re(t[st] === t[ve]);
    const A = t[Ue].splice(t[ve]);
    for (let r = 0; r < A.length; r++) {
      const s = A[r];
      _A(t, s, e);
    }
    re(t[ds] === 0);
  }
}
function jC() {
  const { [_e]: t, [Pt]: e } = this;
  if (e[Ht] !== "h2" && t.statusCode && !t.shouldKeepAlive) {
    t.onMessageComplete();
    return;
  }
  ae.destroy(this, new En("other side closed", ae.getSocketInfo(this)));
}
function zg() {
  const { [Pt]: t, [_e]: e } = this;
  t[Ht] === "h1" && e && (!this[pA] && e.statusCode && !e.shouldKeepAlive && e.onMessageComplete(), this[_e].destroy(), this[_e] = null);
  const A = this[pA] || new En("closed", ae.getSocketInfo(this));
  if (t[Pe] = null, t.destroyed) {
    re(t[ms] === 0);
    const r = t[Ue].splice(t[ve]);
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      _A(t, n, A);
    }
  } else if (t[Je] > 0 && A.code !== "UND_ERR_INFO") {
    const r = t[Ue][t[ve]];
    t[Ue][t[ve]++] = null, _A(t, r, A);
  }
  t[st] = t[ve], re(t[Je] === 0), t.emit("disconnect", t[fA], [t], A), it(t);
}
async function zC(t) {
  re(!t[Js]), re(!t[Pe]);
  let { host: e, hostname: A, protocol: r, port: s } = t[fA];
  if (A[0] === "[") {
    const n = A.indexOf("]");
    re(n !== -1);
    const i = A.substring(1, n);
    re(GC.isIP(i)), A = i;
  }
  t[Js] = !0, NA.beforeConnect.hasSubscribers && NA.beforeConnect.publish({
    connectParams: {
      host: e,
      hostname: A,
      protocol: r,
      port: s,
      servername: t[Dr],
      localAddress: t[qn]
    },
    connector: t[Wn]
  });
  try {
    const n = await new Promise((o, a) => {
      t[Wn]({
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[Dr],
        localAddress: t[qn]
      }, (g, c) => {
        g ? a(g) : o(c);
      });
    });
    if (t.destroyed) {
      ae.destroy(n.on("error", () => {
      }), new fm());
      return;
    }
    if (t[Js] = !1, re(n), n.alpnProtocol === "h2") {
      Wh || (Wh = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
        code: "UNDICI-H2"
      }));
      const o = ta.connect(t[fA], {
        createConnection: () => n,
        peerMaxConcurrentStreams: t[Aa].maxConcurrentStreams
      });
      t[Ht] = "h2", o[Pt] = t, o[Pe] = n, o.on("error", Jm), o.on("frameError", Om), o.on("end", _m), o.on("goaway", Pm), o.on("close", zg), o.unref(), t[nt] = o, n[nt] = o;
    } else
      Tc || (Tc = await qg, qg = null), n[Vn] = !1, n[lr] = !1, n[OA] = !1, n[un] = !1, n[_e] = new qm(t, n, Tc);
    n[PC] = 0, n[ni] = t[ni], n[Pt] = t, n[pA] = null, n.on("error", qC).on("readable", WC).on("end", jC).on("close", zg), t[Pe] = n, NA.connected.hasSubscribers && NA.connected.publish({
      connectParams: {
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[Dr],
        localAddress: t[qn]
      },
      connector: t[Wn],
      socket: n
    }), t.emit("connect", t[fA], [t]);
  } catch (n) {
    if (t.destroyed)
      return;
    if (t[Js] = !1, NA.connectError.hasSubscribers && NA.connectError.publish({
      connectParams: {
        host: e,
        hostname: A,
        protocol: r,
        port: s,
        servername: t[Dr],
        localAddress: t[qn]
      },
      connector: t[Wn],
      error: n
    }), n.code === "ERR_TLS_CERT_ALTNAME_INVALID")
      for (re(t[Je] === 0); t[ms] > 0 && t[Ue][t[st]].servername === t[Dr]; ) {
        const i = t[Ue][t[st]++];
        _A(t, i, n);
      }
    else
      ba(t, n);
    t.emit("connectionError", t[fA], [t], n);
  }
  it(t);
}
function qh(t) {
  t[Gr] = 0, t.emit("drain", t[fA], [t]);
}
function it(t, e) {
  t[ns] !== 2 && (t[ns] = 2, zm(t, e), t[ns] = 0, t[ve] > 256 && (t[Ue].splice(0, t[ve]), t[st] -= t[ve], t[ve] = 0));
}
function zm(t, e) {
  for (; ; ) {
    if (t.destroyed) {
      re(t[ms] === 0);
      return;
    }
    if (t[br] && !t[ds]) {
      t[br](), t[br] = null;
      return;
    }
    const A = t[Pe];
    if (A && !A.destroyed && A.alpnProtocol !== "h2") {
      if (t[ds] === 0 ? !A[Vn] && A.unref && (A.unref(), A[Vn] = !0) : A[Vn] && A.ref && (A.ref(), A[Vn] = !1), t[ds] === 0)
        A[_e].timeoutType !== jg && A[_e].setTimeout(t[ri], jg);
      else if (t[Je] > 0 && A[_e].statusCode < 200 && A[_e].timeoutType !== Qn) {
        const s = t[Ue][t[ve]], n = s.headersTimeout != null ? s.headersTimeout : t[OC];
        A[_e].setTimeout(n, Qn);
      }
    }
    if (t[Vg])
      t[Gr] = 2;
    else if (t[Gr] === 2) {
      e ? (t[Gr] = 1, process.nextTick(qh, t)) : qh(t);
      continue;
    }
    if (t[ms] === 0 || t[Je] >= (t[Yr] || 1))
      return;
    const r = t[Ue][t[st]];
    if (t[fA].protocol === "https:" && t[Dr] !== r.servername) {
      if (t[Je] > 0)
        return;
      if (t[Dr] = r.servername, A && A.servername !== r.servername) {
        ae.destroy(A, new _t("servername changed"));
        return;
      }
    }
    if (t[Js])
      return;
    if (!A && !t[nt]) {
      zC(t);
      return;
    }
    if (A.destroyed || A[lr] || A[OA] || A[un] || t[Je] > 0 && !r.idempotent || t[Je] > 0 && (r.upgrade || r.method === "CONNECT") || t[Je] > 0 && ae.bodyLength(r.body) !== 0 && (ae.isStream(r.body) || ae.isAsyncIterable(r.body)))
      return;
    !r.aborted && Zm(t, r) ? t[st]++ : t[Ue].splice(t[st], 1);
  }
}
function ZC(t) {
  return t !== "GET" && t !== "HEAD" && t !== "OPTIONS" && t !== "TRACE" && t !== "CONNECT";
}
function Zm(t, e) {
  if (t[Ht] === "h2") {
    $m(t, t[nt], e);
    return;
  }
  const { body: A, method: r, path: s, host: n, upgrade: i, headers: o, blocking: a, reset: g } = e, c = r === "PUT" || r === "POST" || r === "PATCH";
  A && typeof A.read == "function" && A.read(0);
  const E = ae.bodyLength(A);
  let h = E;
  if (h === null && (h = e.contentLength), h === 0 && !c && (h = null), ZC(r) && h > 0 && e.contentLength !== null && e.contentLength !== h) {
    if (t[si])
      return _A(t, e, new gr()), !1;
    process.emitWarning(new gr());
  }
  const Q = t[Pe];
  try {
    e.onConnect((u) => {
      e.aborted || e.completed || (_A(t, e, u || new Ll()), ae.destroy(Q, new _t("aborted")));
    });
  } catch (u) {
    _A(t, e, u);
  }
  if (e.aborted)
    return !1;
  r === "HEAD" && (Q[OA] = !0), (i || r === "CONNECT") && (Q[OA] = !0), g != null && (Q[OA] = g), t[ni] && Q[PC]++ >= t[ni] && (Q[OA] = !0), a && (Q[un] = !0);
  let B = `${r} ${s} HTTP/1.1\r
`;
  return typeof n == "string" ? B += `host: ${n}\r
` : B += t[YC], i ? B += `connection: upgrade\r
upgrade: ${i}\r
` : t[Yr] && !Q[OA] ? B += `connection: keep-alive\r
` : B += `connection: close\r
`, o && (B += o), NA.sendHeaders.hasSubscribers && NA.sendHeaders.publish({ request: e, headers: B, socket: Q }), !A || E === 0 ? (h === 0 ? Q.write(`${B}content-length: 0\r
\r
`, "latin1") : (re(h === null, "no body must not have content length"), Q.write(`${B}\r
`, "latin1")), e.onRequestSent()) : ae.isBuffer(A) ? (re(h === A.byteLength, "buffer body must have content length"), Q.cork(), Q.write(`${B}content-length: ${h}\r
\r
`, "latin1"), Q.write(A), Q.uncork(), e.onBodySent(A), e.onRequestSent(), c || (Q[OA] = !0)) : ae.isBlobLike(A) ? typeof A.stream == "function" ? ra({ body: A.stream(), client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : XC({ body: A, client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : ae.isStream(A) ? $C({ body: A, client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : ae.isIterable(A) ? ra({ body: A, client: t, request: e, socket: Q, contentLength: h, header: B, expectsPayload: c }) : re(!1), !0;
}
function $m(t, e, A) {
  const { body: r, method: s, path: n, host: i, upgrade: o, expectContinue: a, signal: g, headers: c } = A;
  let E;
  if (typeof c == "string" ? E = Hg[Fm](c.trim()) : E = c, o)
    return _A(t, A, new Error("Upgrade not supported for H2")), !1;
  try {
    A.onConnect((C) => {
      A.aborted || A.completed || _A(t, A, C || new Ll());
    });
  } catch (C) {
    _A(t, A, C);
  }
  if (A.aborted)
    return !1;
  let h;
  const Q = t[Aa];
  if (E[Tm] = i || t[VC], E[Um] = s, s === "CONNECT")
    return e.ref(), h = e.request(E, { endStream: !1, signal: g }), h.id && !h.pending ? (A.onUpgrade(null, null, h), ++Q.openStreams) : h.once("ready", () => {
      A.onUpgrade(null, null, h), ++Q.openStreams;
    }), h.once("close", () => {
      Q.openStreams -= 1, Q.openStreams === 0 && e.unref();
    }), !0;
  E[vm] = n, E[Lm] = "https";
  const B = s === "PUT" || s === "POST" || s === "PATCH";
  r && typeof r.read == "function" && r.read(0);
  let u = ae.bodyLength(r);
  if (u == null && (u = A.contentLength), (u === 0 || !B) && (u = null), ZC(s) && u > 0 && A.contentLength != null && A.contentLength !== u) {
    if (t[si])
      return _A(t, A, new gr()), !1;
    process.emitWarning(new gr());
  }
  u != null && (re(r, "no body must not have content length"), E[Mm] = `${u}`), e.ref();
  const I = s === "GET" || s === "HEAD";
  return a ? (E[Gm] = "100-continue", h = e.request(E, { endStream: I, signal: g }), h.once("continue", f)) : (h = e.request(E, {
    endStream: I,
    signal: g
  }), f()), ++Q.openStreams, h.once("response", (C) => {
    const { [Ym]: d, ...w } = C;
    A.onHeaders(Number(d), w, h.resume.bind(h), "") === !1 && h.pause();
  }), h.once("end", () => {
    A.onComplete([]);
  }), h.on("data", (C) => {
    A.onData(C) === !1 && h.pause();
  }), h.once("close", () => {
    Q.openStreams -= 1, Q.openStreams === 0 && e.unref();
  }), h.once("error", function(C) {
    t[nt] && !t[nt].destroyed && !this.closed && !this.destroyed && (Q.streams -= 1, ae.destroy(h, C));
  }), h.once("frameError", (C, d) => {
    const w = new _t(`HTTP/2: "frameError" received - type ${C}, code ${d}`);
    _A(t, A, w), t[nt] && !t[nt].destroyed && !this.closed && !this.destroyed && (Q.streams -= 1, ae.destroy(h, w));
  }), !0;
  function f() {
    r ? ae.isBuffer(r) ? (re(u === r.byteLength, "buffer body must have content length"), h.cork(), h.write(r), h.uncork(), h.end(), A.onBodySent(r), A.onRequestSent()) : ae.isBlobLike(r) ? typeof r.stream == "function" ? ra({
      client: t,
      request: A,
      contentLength: u,
      h2stream: h,
      expectsPayload: B,
      body: r.stream(),
      socket: t[Pe],
      header: ""
    }) : XC({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: B,
      h2stream: h,
      header: "",
      socket: t[Pe]
    }) : ae.isStream(r) ? $C({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: B,
      socket: t[Pe],
      h2stream: h,
      header: ""
    }) : ae.isIterable(r) ? ra({
      body: r,
      client: t,
      request: A,
      contentLength: u,
      expectsPayload: B,
      header: "",
      h2stream: h,
      socket: t[Pe]
    }) : re(!1) : A.onRequestSent();
  }
}
function $C({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: o }) {
  if (re(n !== 0 || A[Je] === 0, "stream body cannot be pipelined"), A[Ht] === "h2") {
    let u = function(I) {
      r.onBodySent(I);
    };
    const B = hm(
      e,
      t,
      (I) => {
        I ? (ae.destroy(e, I), ae.destroy(t, I)) : r.onRequestSent();
      }
    );
    B.on("data", u), B.once("end", () => {
      B.removeListener("data", u), ae.destroy(B);
    });
    return;
  }
  let a = !1;
  const g = new KC({ socket: s, request: r, contentLength: n, client: A, expectsPayload: o, header: i }), c = function(B) {
    if (!a)
      try {
        !g.write(B) && this.pause && this.pause();
      } catch (u) {
        ae.destroy(this, u);
      }
  }, E = function() {
    a || e.resume && e.resume();
  }, h = function() {
    if (a)
      return;
    const B = new Ll();
    queueMicrotask(() => Q(B));
  }, Q = function(B) {
    if (!a) {
      if (a = !0, re(s.destroyed || s[lr] && A[Je] <= 1), s.off("drain", E).off("error", Q), e.removeListener("data", c).removeListener("end", Q).removeListener("error", Q).removeListener("close", h), !B)
        try {
          g.end();
        } catch (u) {
          B = u;
        }
      g.destroy(B), B && (B.code !== "UND_ERR_INFO" || B.message !== "reset") ? ae.destroy(e, B) : ae.destroy(e);
    }
  };
  e.on("data", c).on("end", Q).on("error", Q).on("close", h), e.resume && e.resume(), s.on("drain", E).on("error", Q);
}
async function XC({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: o }) {
  re(n === e.size, "blob body must have content length");
  const a = A[Ht] === "h2";
  try {
    if (n != null && n !== e.size)
      throw new gr();
    const g = Buffer.from(await e.arrayBuffer());
    a ? (t.cork(), t.write(g), t.uncork()) : (s.cork(), s.write(`${i}content-length: ${n}\r
\r
`, "latin1"), s.write(g), s.uncork()), r.onBodySent(g), r.onRequestSent(), o || (s[OA] = !0), it(A);
  } catch (g) {
    ae.destroy(a ? t : s, g);
  }
}
async function ra({ h2stream: t, body: e, client: A, request: r, socket: s, contentLength: n, header: i, expectsPayload: o }) {
  re(n !== 0 || A[Je] === 0, "iterator body cannot be pipelined");
  let a = null;
  function g() {
    if (a) {
      const h = a;
      a = null, h();
    }
  }
  const c = () => new Promise((h, Q) => {
    re(a === null), s[pA] ? Q(s[pA]) : a = h;
  });
  if (A[Ht] === "h2") {
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
  const E = new KC({ socket: s, request: r, contentLength: n, client: A, expectsPayload: o, header: i });
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
class KC {
  constructor({ socket: e, request: A, contentLength: r, client: s, expectsPayload: n, header: i }) {
    this.socket = e, this.request = A, this.contentLength = r, this.client = s, this.bytesWritten = 0, this.expectsPayload = n, this.header = i, e[lr] = !0;
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
      if (n[si])
        throw new gr();
      process.emitWarning(new gr());
    }
    A.cork(), i === 0 && (o || (A[OA] = !0), s === null ? A.write(`${a}transfer-encoding: chunked\r
`, "latin1") : A.write(`${a}content-length: ${s}\r
\r
`, "latin1")), s === null && A.write(`\r
${g.toString(16)}\r
`, "latin1"), this.bytesWritten += g;
    const c = A.write(e);
    return A.uncork(), r.onBodySent(e), c || A[_e].timeout && A[_e].timeoutType === Qn && A[_e].timeout.refresh && A[_e].timeout.refresh(), c;
  }
  end() {
    const { socket: e, contentLength: A, client: r, bytesWritten: s, expectsPayload: n, header: i, request: o } = this;
    if (o.onRequestSent(), e[lr] = !1, e[pA])
      throw e[pA];
    if (!e.destroyed) {
      if (s === 0 ? n ? e.write(`${i}content-length: 0\r
\r
`, "latin1") : e.write(`${i}\r
`, "latin1") : A === null && e.write(`\r
0\r
\r
`, "latin1"), A !== null && s !== A) {
        if (r[si])
          throw new gr();
        process.emitWarning(new gr());
      }
      e[_e].timeout && e[_e].timeoutType === Qn && e[_e].timeout.refresh && e[_e].timeout.refresh(), it(r);
    }
  }
  destroy(e) {
    const { socket: A, client: r } = this;
    A[lr] = !1, e && (re(r[Je] <= 1, "pipeline should only contain this request"), ae.destroy(A, e));
  }
}
function _A(t, e, A) {
  try {
    e.onError(A), re(e.aborted);
  } catch (r) {
    t.emit("error", r);
  }
}
var ka = xm;
const eB = 2048, Uc = eB - 1;
class jh {
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(eB), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & Uc) === this.bottom;
  }
  push(e) {
    this.list[this.top] = e, this.top = this.top + 1 & Uc;
  }
  shift() {
    const e = this.list[this.bottom];
    return e === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & Uc, e);
  }
}
var Xm = class {
  constructor() {
    this.head = this.tail = new jh();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e) {
    this.head.isFull() && (this.head = this.head.next = new jh()), this.head.push(e);
  }
  shift() {
    const e = this.tail, A = e.shift();
    return e.isEmpty() && e.next !== null && (this.tail = e.next), A;
  }
};
const { kFree: Km, kConnected: ew, kPending: Aw, kQueued: tw, kRunning: rw, kSize: sw } = Le, zr = Symbol("pool");
let nw = class {
  constructor(e) {
    this[zr] = e;
  }
  get connected() {
    return this[zr][ew];
  }
  get free() {
    return this[zr][Km];
  }
  get pending() {
    return this[zr][Aw];
  }
  get queued() {
    return this[zr][tw];
  }
  get running() {
    return this[zr][rw];
  }
  get size() {
    return this[zr][sw];
  }
};
var iw = nw;
const ow = Ra, aw = Xm, { kConnected: vc, kSize: zh, kRunning: Zh, kPending: $h, kQueued: Nn, kBusy: cw, kFree: gw, kUrl: lw, kClose: hw, kDestroy: Ew, kDispatch: uw } = Le, Qw = iw, WA = Symbol("clients"), MA = Symbol("needDrain"), Tn = Symbol("queue"), Lc = Symbol("closed resolve"), Mc = Symbol("onDrain"), Xh = Symbol("onConnect"), Kh = Symbol("onDisconnect"), eE = Symbol("onConnectionError"), Zg = Symbol("get dispatcher"), AB = Symbol("add client"), tB = Symbol("remove client"), AE = Symbol("stats");
let Cw = class extends ow {
  constructor() {
    super(), this[Tn] = new aw(), this[WA] = [], this[Nn] = 0;
    const e = this;
    this[Mc] = function(r, s) {
      const n = e[Tn];
      let i = !1;
      for (; !i; ) {
        const o = n.shift();
        if (!o)
          break;
        e[Nn]--, i = !this.dispatch(o.opts, o.handler);
      }
      this[MA] = i, !this[MA] && e[MA] && (e[MA] = !1, e.emit("drain", r, [e, ...s])), e[Lc] && n.isEmpty() && Promise.all(e[WA].map((o) => o.close())).then(e[Lc]);
    }, this[Xh] = (A, r) => {
      e.emit("connect", A, [e, ...r]);
    }, this[Kh] = (A, r, s) => {
      e.emit("disconnect", A, [e, ...r], s);
    }, this[eE] = (A, r, s) => {
      e.emit("connectionError", A, [e, ...r], s);
    }, this[AE] = new Qw(this);
  }
  get [cw]() {
    return this[MA];
  }
  get [vc]() {
    return this[WA].filter((e) => e[vc]).length;
  }
  get [gw]() {
    return this[WA].filter((e) => e[vc] && !e[MA]).length;
  }
  get [$h]() {
    let e = this[Nn];
    for (const { [$h]: A } of this[WA])
      e += A;
    return e;
  }
  get [Zh]() {
    let e = 0;
    for (const { [Zh]: A } of this[WA])
      e += A;
    return e;
  }
  get [zh]() {
    let e = this[Nn];
    for (const { [zh]: A } of this[WA])
      e += A;
    return e;
  }
  get stats() {
    return this[AE];
  }
  async [hw]() {
    return this[Tn].isEmpty() ? Promise.all(this[WA].map((e) => e.close())) : new Promise((e) => {
      this[Lc] = e;
    });
  }
  async [Ew](e) {
    for (; ; ) {
      const A = this[Tn].shift();
      if (!A)
        break;
      A.handler.onError(e);
    }
    return Promise.all(this[WA].map((A) => A.destroy(e)));
  }
  [uw](e, A) {
    const r = this[Zg]();
    return r ? r.dispatch(e, A) || (r[MA] = !0, this[MA] = !this[Zg]()) : (this[MA] = !0, this[Tn].push({ opts: e, handler: A }), this[Nn]++), !this[MA];
  }
  [AB](e) {
    return e.on("drain", this[Mc]).on("connect", this[Xh]).on("disconnect", this[Kh]).on("connectionError", this[eE]), this[WA].push(e), this[MA] && process.nextTick(() => {
      this[MA] && this[Mc](e[lw], [this, e]);
    }), this;
  }
  [tB](e) {
    e.close(() => {
      const A = this[WA].indexOf(e);
      A !== -1 && this[WA].splice(A, 1);
    }), this[MA] = this[WA].some((A) => !A[MA] && A.closed !== !0 && A.destroyed !== !0);
  }
};
var rB = {
  PoolBase: Cw,
  kClients: WA,
  kNeedDrain: MA,
  kAddClient: AB,
  kRemoveClient: tB,
  kGetDispatcher: Zg
};
const {
  PoolBase: Bw,
  kClients: tE,
  kNeedDrain: Iw,
  kAddClient: dw,
  kGetDispatcher: fw
} = rB, pw = ka, {
  InvalidArgumentError: Gc
} = ke, Yc = me, { kUrl: rE, kInterceptors: mw } = Le, ww = Da, xc = Symbol("options"), Jc = Symbol("connections"), sE = Symbol("factory");
function yw(t, e) {
  return new pw(t, e);
}
let Rw = class extends Bw {
  constructor(e, {
    connections: A,
    factory: r = yw,
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
      throw new Gc("invalid connections");
    if (typeof r != "function")
      throw new Gc("factory must be a function.");
    if (s != null && typeof s != "function" && typeof s != "object")
      throw new Gc("connect must be a function or an object");
    typeof s != "function" && (s = ww({
      ...i,
      maxCachedSessions: o,
      allowH2: E,
      socketPath: a,
      timeout: n,
      ...Yc.nodeHasAutoSelectFamily && g ? { autoSelectFamily: g, autoSelectFamilyAttemptTimeout: c } : void 0,
      ...s
    })), this[mw] = h.interceptors && h.interceptors.Pool && Array.isArray(h.interceptors.Pool) ? h.interceptors.Pool : [], this[Jc] = A || null, this[rE] = Yc.parseOrigin(e), this[xc] = { ...Yc.deepClone(h), connect: s, allowH2: E }, this[xc].interceptors = h.interceptors ? { ...h.interceptors } : void 0, this[sE] = r;
  }
  [fw]() {
    let e = this[tE].find((A) => !A[Iw]);
    return e || ((!this[Jc] || this[tE].length < this[Jc]) && (e = this[sE](this[rE], this[xc]), this[dw](e)), e);
  }
};
var Vi = Rw;
const {
  BalancedPoolMissingUpstreamError: Dw,
  InvalidArgumentError: bw
} = ke, {
  PoolBase: kw,
  kClients: vA,
  kNeedDrain: Un,
  kAddClient: Sw,
  kRemoveClient: Fw,
  kGetDispatcher: Nw
} = rB, Tw = Vi, { kUrl: Oc, kInterceptors: Uw } = Le, { parseOrigin: nE } = me, iE = Symbol("factory"), oo = Symbol("options"), oE = Symbol("kGreatestCommonDivisor"), Zr = Symbol("kCurrentWeight"), $r = Symbol("kIndex"), ot = Symbol("kWeight"), ao = Symbol("kMaxWeightPerServer"), co = Symbol("kErrorPenalty");
function sB(t, e) {
  return e === 0 ? t : sB(e, t % e);
}
function vw(t, e) {
  return new Tw(t, e);
}
let Lw = class extends kw {
  constructor(e = [], { factory: A = vw, ...r } = {}) {
    if (super(), this[oo] = r, this[$r] = -1, this[Zr] = 0, this[ao] = this[oo].maxWeightPerServer || 100, this[co] = this[oo].errorPenalty || 15, Array.isArray(e) || (e = [e]), typeof A != "function")
      throw new bw("factory must be a function.");
    this[Uw] = r.interceptors && r.interceptors.BalancedPool && Array.isArray(r.interceptors.BalancedPool) ? r.interceptors.BalancedPool : [], this[iE] = A;
    for (const s of e)
      this.addUpstream(s);
    this._updateBalancedPoolStats();
  }
  addUpstream(e) {
    const A = nE(e).origin;
    if (this[vA].find((s) => s[Oc].origin === A && s.closed !== !0 && s.destroyed !== !0))
      return this;
    const r = this[iE](A, Object.assign({}, this[oo]));
    this[Sw](r), r.on("connect", () => {
      r[ot] = Math.min(this[ao], r[ot] + this[co]);
    }), r.on("connectionError", () => {
      r[ot] = Math.max(1, r[ot] - this[co]), this._updateBalancedPoolStats();
    }), r.on("disconnect", (...s) => {
      const n = s[2];
      n && n.code === "UND_ERR_SOCKET" && (r[ot] = Math.max(1, r[ot] - this[co]), this._updateBalancedPoolStats());
    });
    for (const s of this[vA])
      s[ot] = this[ao];
    return this._updateBalancedPoolStats(), this;
  }
  _updateBalancedPoolStats() {
    this[oE] = this[vA].map((e) => e[ot]).reduce(sB, 0);
  }
  removeUpstream(e) {
    const A = nE(e).origin, r = this[vA].find((s) => s[Oc].origin === A && s.closed !== !0 && s.destroyed !== !0);
    return r && this[Fw](r), this;
  }
  get upstreams() {
    return this[vA].filter((e) => e.closed !== !0 && e.destroyed !== !0).map((e) => e[Oc].origin);
  }
  [Nw]() {
    if (this[vA].length === 0)
      throw new Dw();
    if (!this[vA].find((n) => !n[Un] && n.closed !== !0 && n.destroyed !== !0) || this[vA].map((n) => n[Un]).reduce((n, i) => n && i, !0))
      return;
    let r = 0, s = this[vA].findIndex((n) => !n[Un]);
    for (; r++ < this[vA].length; ) {
      this[$r] = (this[$r] + 1) % this[vA].length;
      const n = this[vA][this[$r]];
      if (n[ot] > this[vA][s][ot] && !n[Un] && (s = this[$r]), this[$r] === 0 && (this[Zr] = this[Zr] - this[oE], this[Zr] <= 0 && (this[Zr] = this[ao])), n[ot] >= this[Zr] && !n[Un])
        return n;
    }
    return this[Zr] = this[vA][s][ot], this[$r] = s, this[vA][s];
  }
};
var Mw = Lw;
const { kConnected: nB, kSize: iB } = Le;
class aE {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value[nB] === 0 && this.value[iB] === 0 ? void 0 : this.value;
  }
}
class cE {
  constructor(e) {
    this.finalizer = e;
  }
  register(e, A) {
    e.on && e.on("disconnect", () => {
      e[nB] === 0 && e[iB] === 0 && this.finalizer(A);
    });
  }
}
var oB = function() {
  return process.env.NODE_V8_COVERAGE ? {
    WeakRef: aE,
    FinalizationRegistry: cE
  } : {
    WeakRef: he.WeakRef || aE,
    FinalizationRegistry: he.FinalizationRegistry || cE
  };
};
const { InvalidArgumentError: go } = ke, { kClients: Br, kRunning: gE, kClose: Gw, kDestroy: Yw, kDispatch: xw, kInterceptors: Jw } = Le, Ow = Ra, _w = Vi, Pw = ka, Hw = me, Vw = vl, { WeakRef: Ww, FinalizationRegistry: qw } = oB(), lE = Symbol("onConnect"), hE = Symbol("onDisconnect"), EE = Symbol("onConnectionError"), jw = Symbol("maxRedirections"), uE = Symbol("onDrain"), QE = Symbol("factory"), CE = Symbol("finalizer"), _c = Symbol("options");
function zw(t, e) {
  return e && e.connections === 1 ? new Pw(t, e) : new _w(t, e);
}
let Zw = class extends Ow {
  constructor({ factory: e = zw, maxRedirections: A = 0, connect: r, ...s } = {}) {
    if (super(), typeof e != "function")
      throw new go("factory must be a function.");
    if (r != null && typeof r != "function" && typeof r != "object")
      throw new go("connect must be a function or an object");
    if (!Number.isInteger(A) || A < 0)
      throw new go("maxRedirections must be a positive number");
    r && typeof r != "function" && (r = { ...r }), this[Jw] = s.interceptors && s.interceptors.Agent && Array.isArray(s.interceptors.Agent) ? s.interceptors.Agent : [Vw({ maxRedirections: A })], this[_c] = { ...Hw.deepClone(s), connect: r }, this[_c].interceptors = s.interceptors ? { ...s.interceptors } : void 0, this[jw] = A, this[QE] = e, this[Br] = /* @__PURE__ */ new Map(), this[CE] = new qw(
      /* istanbul ignore next: gc is undeterministic */
      (i) => {
        const o = this[Br].get(i);
        o !== void 0 && o.deref() === void 0 && this[Br].delete(i);
      }
    );
    const n = this;
    this[uE] = (i, o) => {
      n.emit("drain", i, [n, ...o]);
    }, this[lE] = (i, o) => {
      n.emit("connect", i, [n, ...o]);
    }, this[hE] = (i, o, a) => {
      n.emit("disconnect", i, [n, ...o], a);
    }, this[EE] = (i, o, a) => {
      n.emit("connectionError", i, [n, ...o], a);
    };
  }
  get [gE]() {
    let e = 0;
    for (const A of this[Br].values()) {
      const r = A.deref();
      r && (e += r[gE]);
    }
    return e;
  }
  [xw](e, A) {
    let r;
    if (e.origin && (typeof e.origin == "string" || e.origin instanceof URL))
      r = String(e.origin);
    else
      throw new go("opts.origin must be a non-empty string or URL.");
    const s = this[Br].get(r);
    let n = s ? s.deref() : null;
    return n || (n = this[QE](e.origin, this[_c]).on("drain", this[uE]).on("connect", this[lE]).on("disconnect", this[hE]).on("connectionError", this[EE]), this[Br].set(r, new Ww(n)), this[CE].register(n, r)), n.dispatch(e, A);
  }
  async [Gw]() {
    const e = [];
    for (const A of this[Br].values()) {
      const r = A.deref();
      r && e.push(r.close());
    }
    await Promise.all(e);
  }
  async [Yw](e) {
    const A = [];
    for (const r of this[Br].values()) {
      const s = r.deref();
      s && A.push(s.destroy(e));
    }
    await Promise.all(A);
  }
};
var Sa = Zw, fn = {}, Ml = { exports: {} };
const aB = Xe, { Readable: $w } = Wt, { RequestAbortedError: cB, NotSupportedError: Xw, InvalidArgumentError: Kw } = ke, Yo = me, { ReadableStreamFrom: ey, toUSVString: Ay } = me;
let Pc;
const rt = Symbol("kConsume"), lo = Symbol("kReading"), yr = Symbol("kBody"), BE = Symbol("abort"), gB = Symbol("kContentType"), IE = () => {
};
var ty = class extends $w {
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
    }), this._readableState.dataEmitted = !1, this[BE] = A, this[rt] = null, this[yr] = null, this[gB] = r, this[lo] = !1;
  }
  destroy(e) {
    return this.destroyed ? this : (!e && !this._readableState.endEmitted && (e = new cB()), e && this[BE](), super.destroy(e));
  }
  emit(e, ...A) {
    return e === "data" ? this._readableState.dataEmitted = !0 : e === "error" && (this._readableState.errorEmitted = !0), super.emit(e, ...A);
  }
  on(e, ...A) {
    return (e === "data" || e === "readable") && (this[lo] = !0), super.on(e, ...A);
  }
  addListener(e, ...A) {
    return this.on(e, ...A);
  }
  off(e, ...A) {
    const r = super.off(e, ...A);
    return (e === "data" || e === "readable") && (this[lo] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r;
  }
  removeListener(e, ...A) {
    return this.off(e, ...A);
  }
  push(e) {
    return this[rt] && e !== null && this.readableLength === 0 ? (lB(this[rt], e), this[lo] ? super.push(e) : !0) : super.push(e);
  }
  // https://fetch.spec.whatwg.org/#dom-body-text
  async text() {
    return ho(this, "text");
  }
  // https://fetch.spec.whatwg.org/#dom-body-json
  async json() {
    return ho(this, "json");
  }
  // https://fetch.spec.whatwg.org/#dom-body-blob
  async blob() {
    return ho(this, "blob");
  }
  // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
  async arrayBuffer() {
    return ho(this, "arrayBuffer");
  }
  // https://fetch.spec.whatwg.org/#dom-body-formdata
  async formData() {
    throw new Xw();
  }
  // https://fetch.spec.whatwg.org/#dom-body-bodyused
  get bodyUsed() {
    return Yo.isDisturbed(this);
  }
  // https://fetch.spec.whatwg.org/#dom-body-body
  get body() {
    return this[yr] || (this[yr] = ey(this), this[rt] && (this[yr].getReader(), aB(this[yr].locked))), this[yr];
  }
  dump(e) {
    let A = e && Number.isFinite(e.limit) ? e.limit : 262144;
    const r = e && e.signal;
    if (r)
      try {
        if (typeof r != "object" || !("aborted" in r))
          throw new Kw("signal must be an AbortSignal");
        Yo.throwIfAborted(r);
      } catch (s) {
        return Promise.reject(s);
      }
    return this.closed ? Promise.resolve(null) : new Promise((s, n) => {
      const i = r ? Yo.addAbortListener(r, () => {
        this.destroy();
      }) : IE;
      this.on("close", function() {
        i(), r && r.aborted ? n(r.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : s(null);
      }).on("error", IE).on("data", function(o) {
        A -= o.length, A <= 0 && this.destroy();
      }).resume();
    });
  }
};
function ry(t) {
  return t[yr] && t[yr].locked === !0 || t[rt];
}
function sy(t) {
  return Yo.isDisturbed(t) || ry(t);
}
async function ho(t, e) {
  if (sy(t))
    throw new TypeError("unusable");
  return aB(!t[rt]), new Promise((A, r) => {
    t[rt] = {
      type: e,
      stream: t,
      resolve: A,
      reject: r,
      length: 0,
      body: []
    }, t.on("error", function(s) {
      $g(this[rt], s);
    }).on("close", function() {
      this[rt].body !== null && $g(this[rt], new cB());
    }), process.nextTick(ny, t[rt]);
  });
}
function ny(t) {
  if (t.body === null)
    return;
  const { _readableState: e } = t.stream;
  for (const A of e.buffer)
    lB(t, A);
  for (e.endEmitted ? dE(this[rt]) : t.stream.on("end", function() {
    dE(this[rt]);
  }), t.stream.resume(); t.stream.read() != null; )
    ;
}
function dE(t) {
  const { type: e, body: A, resolve: r, stream: s, length: n } = t;
  try {
    if (e === "text")
      r(Ay(Buffer.concat(A)));
    else if (e === "json")
      r(JSON.parse(Buffer.concat(A)));
    else if (e === "arrayBuffer") {
      const i = new Uint8Array(n);
      let o = 0;
      for (const a of A)
        i.set(a, o), o += a.byteLength;
      r(i.buffer);
    } else
      e === "blob" && (Pc || (Pc = require("buffer").Blob), r(new Pc(A, { type: s[gB] })));
    $g(t);
  } catch (i) {
    s.destroy(i);
  }
}
function lB(t, e) {
  t.length += e.length, t.body.push(e);
}
function $g(t, e) {
  t.body !== null && (e ? t.reject(e) : t.resolve(), t.type = null, t.stream = null, t.resolve = null, t.reject = null, t.length = 0, t.body = null);
}
const iy = Xe, {
  ResponseStatusCodeError: Eo
} = ke, { toUSVString: fE } = me;
async function oy({ callback: t, body: e, contentType: A, statusCode: r, statusMessage: s, headers: n }) {
  iy(e);
  let i = [], o = 0;
  for await (const a of e)
    if (i.push(a), o += a.length, o > 128 * 1024) {
      i = null;
      break;
    }
  if (r === 204 || !A || !i) {
    process.nextTick(t, new Eo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
    return;
  }
  try {
    if (A.startsWith("application/json")) {
      const a = JSON.parse(fE(Buffer.concat(i)));
      process.nextTick(t, new Eo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, a));
      return;
    }
    if (A.startsWith("text/")) {
      const a = fE(Buffer.concat(i));
      process.nextTick(t, new Eo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n, a));
      return;
    }
  } catch {
  }
  process.nextTick(t, new Eo(`Response status code ${r}${s ? `: ${s}` : ""}`, r, n));
}
var hB = { getResolveErrorBodyCallback: oy };
const { addAbortListener: ay } = me, { RequestAbortedError: cy } = ke, Ps = Symbol("kListener"), kr = Symbol("kSignal");
function pE(t) {
  t.abort ? t.abort() : t.onError(new cy());
}
function gy(t, e) {
  if (t[kr] = null, t[Ps] = null, !!e) {
    if (e.aborted) {
      pE(t);
      return;
    }
    t[kr] = e, t[Ps] = () => {
      pE(t);
    }, ay(t[kr], t[Ps]);
  }
}
function ly(t) {
  t[kr] && ("removeEventListener" in t[kr] ? t[kr].removeEventListener("abort", t[Ps]) : t[kr].removeListener("abort", t[Ps]), t[kr] = null, t[Ps] = null);
}
var Wi = {
  addSignal: gy,
  removeSignal: ly
};
const hy = ty, {
  InvalidArgumentError: Us,
  RequestAbortedError: Ey
} = ke, Tt = me, { getResolveErrorBodyCallback: uy } = hB, { AsyncResource: Qy } = Pi, { addSignal: Cy, removeSignal: mE } = Wi;
class EB extends Qy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Us("invalid opts");
    const { signal: r, method: s, opaque: n, body: i, onInfo: o, responseHeaders: a, throwOnError: g, highWaterMark: c } = e;
    try {
      if (typeof A != "function")
        throw new Us("invalid callback");
      if (c && (typeof c != "number" || c < 0))
        throw new Us("invalid highWaterMark");
      if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
        throw new Us("signal must be an EventEmitter or EventTarget");
      if (s === "CONNECT")
        throw new Us("invalid method");
      if (o && typeof o != "function")
        throw new Us("invalid onInfo callback");
      super("UNDICI_REQUEST");
    } catch (E) {
      throw Tt.isStream(i) && Tt.destroy(i.on("error", Tt.nop), E), E;
    }
    this.responseHeaders = a || null, this.opaque = n || null, this.callback = A, this.res = null, this.abort = null, this.body = i, this.trailers = {}, this.context = null, this.onInfo = o || null, this.throwOnError = g, this.highWaterMark = c, Tt.isStream(i) && i.on("error", (E) => {
      this.onError(E);
    }), Cy(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new Ey();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { callback: n, opaque: i, abort: o, context: a, responseHeaders: g, highWaterMark: c } = this, E = g === "raw" ? Tt.parseRawHeaders(A) : Tt.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: E });
      return;
    }
    const Q = (g === "raw" ? Tt.parseHeaders(A) : E)["content-type"], B = new hy({ resume: r, abort: o, contentType: Q, highWaterMark: c });
    this.callback = null, this.res = B, n !== null && (this.throwOnError && e >= 400 ? this.runInAsyncScope(
      uy,
      null,
      { callback: n, body: B, contentType: Q, statusCode: e, statusMessage: s, headers: E }
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
    mE(this), Tt.parseHeaders(e, this.trailers), A.push(null);
  }
  onError(e) {
    const { res: A, callback: r, body: s, opaque: n } = this;
    mE(this), r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: n });
    })), A && (this.res = null, queueMicrotask(() => {
      Tt.destroy(A, e);
    })), s && (this.body = null, Tt.destroy(s, e));
  }
}
function uB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      uB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    this.dispatch(t, new EB(t, e));
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
Ml.exports = uB;
Ml.exports.RequestHandler = EB;
var By = Ml.exports;
const { finished: Iy, PassThrough: dy } = Wt, {
  InvalidArgumentError: vs,
  InvalidReturnValueError: fy,
  RequestAbortedError: py
} = ke, Qt = me, { getResolveErrorBodyCallback: my } = hB, { AsyncResource: wy } = Pi, { addSignal: yy, removeSignal: wE } = Wi;
class Ry extends wy {
  constructor(e, A, r) {
    if (!e || typeof e != "object")
      throw new vs("invalid opts");
    const { signal: s, method: n, opaque: i, body: o, onInfo: a, responseHeaders: g, throwOnError: c } = e;
    try {
      if (typeof r != "function")
        throw new vs("invalid callback");
      if (typeof A != "function")
        throw new vs("invalid factory");
      if (s && typeof s.on != "function" && typeof s.addEventListener != "function")
        throw new vs("signal must be an EventEmitter or EventTarget");
      if (n === "CONNECT")
        throw new vs("invalid method");
      if (a && typeof a != "function")
        throw new vs("invalid onInfo callback");
      super("UNDICI_STREAM");
    } catch (E) {
      throw Qt.isStream(o) && Qt.destroy(o.on("error", Qt.nop), E), E;
    }
    this.responseHeaders = g || null, this.opaque = i || null, this.factory = A, this.callback = r, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = o, this.onInfo = a || null, this.throwOnError = c || !1, Qt.isStream(o) && o.on("error", (E) => {
      this.onError(E);
    }), yy(this, s);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new py();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r, s) {
    const { factory: n, opaque: i, context: o, callback: a, responseHeaders: g } = this, c = g === "raw" ? Qt.parseRawHeaders(A) : Qt.parseHeaders(A);
    if (e < 200) {
      this.onInfo && this.onInfo({ statusCode: e, headers: c });
      return;
    }
    this.factory = null;
    let E;
    if (this.throwOnError && e >= 400) {
      const B = (g === "raw" ? Qt.parseHeaders(A) : c)["content-type"];
      E = new dy(), this.callback = null, this.runInAsyncScope(
        my,
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
        throw new fy("expected Writable");
      Iy(E, { readable: !1 }, (Q) => {
        const { callback: B, res: u, opaque: I, trailers: f, abort: C } = this;
        this.res = null, (Q || !u.readable) && Qt.destroy(u, Q), this.callback = null, this.runInAsyncScope(B, null, Q || null, { opaque: I, trailers: f }), Q && C();
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
    wE(this), A && (this.trailers = Qt.parseHeaders(e), A.end());
  }
  onError(e) {
    const { res: A, callback: r, opaque: s, body: n } = this;
    wE(this), this.factory = null, A ? (this.res = null, Qt.destroy(A, e)) : r && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(r, null, e, { opaque: s });
    })), n && (this.body = null, Qt.destroy(n, e));
  }
}
function QB(t, e, A) {
  if (A === void 0)
    return new Promise((r, s) => {
      QB.call(this, t, e, (n, i) => n ? s(n) : r(i));
    });
  try {
    this.dispatch(t, new Ry(t, e, A));
  } catch (r) {
    if (typeof A != "function")
      throw r;
    const s = t && t.opaque;
    queueMicrotask(() => A(r, { opaque: s }));
  }
}
var Dy = QB;
const {
  Readable: CB,
  Duplex: by,
  PassThrough: ky
} = Wt, {
  InvalidArgumentError: vn,
  InvalidReturnValueError: Sy,
  RequestAbortedError: xo
} = ke, at = me, { AsyncResource: Fy } = Pi, { addSignal: Ny, removeSignal: Ty } = Wi, Uy = Xe, Hs = Symbol("resume");
class vy extends CB {
  constructor() {
    super({ autoDestroy: !0 }), this[Hs] = null;
  }
  _read() {
    const { [Hs]: e } = this;
    e && (this[Hs] = null, e());
  }
  _destroy(e, A) {
    this._read(), A(e);
  }
}
class Ly extends CB {
  constructor(e) {
    super({ autoDestroy: !0 }), this[Hs] = e;
  }
  _read() {
    this[Hs]();
  }
  _destroy(e, A) {
    !e && !this._readableState.endEmitted && (e = new xo()), A(e);
  }
}
class My extends Fy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new vn("invalid opts");
    if (typeof A != "function")
      throw new vn("invalid handler");
    const { signal: r, method: s, opaque: n, onInfo: i, responseHeaders: o } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new vn("signal must be an EventEmitter or EventTarget");
    if (s === "CONNECT")
      throw new vn("invalid method");
    if (i && typeof i != "function")
      throw new vn("invalid onInfo callback");
    super("UNDICI_PIPELINE"), this.opaque = n || null, this.responseHeaders = o || null, this.handler = A, this.abort = null, this.context = null, this.onInfo = i || null, this.req = new vy().on("error", at.nop), this.ret = new by({
      readableObjectMode: e.objectMode,
      autoDestroy: !0,
      read: () => {
        const { body: a } = this;
        a && a.resume && a.resume();
      },
      write: (a, g, c) => {
        const { req: E } = this;
        E.push(a, g) || E._readableState.destroyed ? c() : E[Hs] = c;
      },
      destroy: (a, g) => {
        const { body: c, req: E, res: h, ret: Q, abort: B } = this;
        !a && !Q._readableState.endEmitted && (a = new xo()), B && a && B(), at.destroy(c, a), at.destroy(E, a), at.destroy(h, a), Ty(this), g(a);
      }
    }).on("prefinish", () => {
      const { req: a } = this;
      a.push(null);
    }), this.res = null, Ny(this, r);
  }
  onConnect(e, A) {
    const { ret: r, res: s } = this;
    if (Uy(!s, "pipeline cannot be retried"), r.destroyed)
      throw new xo();
    this.abort = e, this.context = A;
  }
  onHeaders(e, A, r) {
    const { opaque: s, handler: n, context: i } = this;
    if (e < 200) {
      if (this.onInfo) {
        const a = this.responseHeaders === "raw" ? at.parseRawHeaders(A) : at.parseHeaders(A);
        this.onInfo({ statusCode: e, headers: a });
      }
      return;
    }
    this.res = new Ly(r);
    let o;
    try {
      this.handler = null;
      const a = this.responseHeaders === "raw" ? at.parseRawHeaders(A) : at.parseHeaders(A);
      o = this.runInAsyncScope(n, null, {
        statusCode: e,
        headers: a,
        opaque: s,
        body: this.res,
        context: i
      });
    } catch (a) {
      throw this.res.on("error", at.nop), a;
    }
    if (!o || typeof o.on != "function")
      throw new Sy("expected Readable");
    o.on("data", (a) => {
      const { ret: g, body: c } = this;
      !g.push(a) && c.pause && c.pause();
    }).on("error", (a) => {
      const { ret: g } = this;
      at.destroy(g, a);
    }).on("end", () => {
      const { ret: a } = this;
      a.push(null);
    }).on("close", () => {
      const { ret: a } = this;
      a._readableState.ended || at.destroy(a, new xo());
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
    this.handler = null, at.destroy(A, e);
  }
}
function Gy(t, e) {
  try {
    const A = new My(t, e);
    return this.dispatch({ ...t, body: A.req }, A), A.ret;
  } catch (A) {
    return new ky().destroy(A);
  }
}
var Yy = Gy;
const { InvalidArgumentError: Hc, RequestAbortedError: xy, SocketError: Jy } = ke, { AsyncResource: Oy } = Pi, yE = me, { addSignal: _y, removeSignal: RE } = Wi, Py = Xe;
class Hy extends Oy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Hc("invalid opts");
    if (typeof A != "function")
      throw new Hc("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Hc("signal must be an EventEmitter or EventTarget");
    super("UNDICI_UPGRADE"), this.responseHeaders = n || null, this.opaque = s || null, this.callback = A, this.abort = null, this.context = null, _y(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new xy();
    this.abort = e, this.context = null;
  }
  onHeaders() {
    throw new Jy("bad upgrade", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    Py.strictEqual(e, 101), RE(this), this.callback = null;
    const o = this.responseHeaders === "raw" ? yE.parseRawHeaders(A) : yE.parseHeaders(A);
    this.runInAsyncScope(s, null, null, {
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
function BB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      BB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    const A = new Hy(t, e);
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
var Vy = BB;
const { AsyncResource: Wy } = Pi, { InvalidArgumentError: Vc, RequestAbortedError: qy, SocketError: jy } = ke, DE = me, { addSignal: zy, removeSignal: bE } = Wi;
class Zy extends Wy {
  constructor(e, A) {
    if (!e || typeof e != "object")
      throw new Vc("invalid opts");
    if (typeof A != "function")
      throw new Vc("invalid callback");
    const { signal: r, opaque: s, responseHeaders: n } = e;
    if (r && typeof r.on != "function" && typeof r.addEventListener != "function")
      throw new Vc("signal must be an EventEmitter or EventTarget");
    super("UNDICI_CONNECT"), this.opaque = s || null, this.responseHeaders = n || null, this.callback = A, this.abort = null, zy(this, r);
  }
  onConnect(e, A) {
    if (!this.callback)
      throw new qy();
    this.abort = e, this.context = A;
  }
  onHeaders() {
    throw new jy("bad connect", null);
  }
  onUpgrade(e, A, r) {
    const { callback: s, opaque: n, context: i } = this;
    bE(this), this.callback = null;
    let o = A;
    o != null && (o = this.responseHeaders === "raw" ? DE.parseRawHeaders(A) : DE.parseHeaders(A)), this.runInAsyncScope(s, null, null, {
      statusCode: e,
      headers: o,
      socket: r,
      opaque: n,
      context: i
    });
  }
  onError(e) {
    const { callback: A, opaque: r } = this;
    bE(this), A && (this.callback = null, queueMicrotask(() => {
      this.runInAsyncScope(A, null, e, { opaque: r });
    }));
  }
}
function IB(t, e) {
  if (e === void 0)
    return new Promise((A, r) => {
      IB.call(this, t, (s, n) => s ? r(s) : A(n));
    });
  try {
    const A = new Zy(t, e);
    this.dispatch({ ...t, method: "CONNECT" }, A);
  } catch (A) {
    if (typeof e != "function")
      throw A;
    const r = t && t.opaque;
    queueMicrotask(() => e(A, { opaque: r }));
  }
}
var $y = IB;
fn.request = By;
fn.stream = Dy;
fn.pipeline = Yy;
fn.upgrade = Vy;
fn.connect = $y;
const { UndiciError: Xy } = ke;
let Ky = class dB extends Xy {
  constructor(e) {
    super(e), Error.captureStackTrace(this, dB), this.name = "MockNotMatchedError", this.message = e || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
  }
};
var fB = {
  MockNotMatchedError: Ky
}, qi = {
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
const { MockNotMatchedError: is } = fB, {
  kDispatches: uo,
  kMockAgent: e0,
  kOriginalDispatch: A0,
  kOrigin: t0,
  kGetNetConnect: r0
} = qi, { buildURL: s0, nop: n0 } = me, { STATUS_CODES: i0 } = Bn, {
  types: {
    isPromise: o0
  }
} = Vt;
function hr(t, e) {
  return typeof t == "string" ? t === e : t instanceof RegExp ? t.test(e) : typeof t == "function" ? t(e) === !0 : !1;
}
function pB(t) {
  return Object.fromEntries(
    Object.entries(t).map(([e, A]) => [e.toLocaleLowerCase(), A])
  );
}
function mB(t, e) {
  if (Array.isArray(t)) {
    for (let A = 0; A < t.length; A += 2)
      if (t[A].toLocaleLowerCase() === e.toLocaleLowerCase())
        return t[A + 1];
    return;
  } else
    return typeof t.get == "function" ? t.get(e) : pB(t)[e.toLocaleLowerCase()];
}
function wB(t) {
  const e = t.slice(), A = [];
  for (let r = 0; r < e.length; r += 2)
    A.push([e[r], e[r + 1]]);
  return Object.fromEntries(A);
}
function yB(t, e) {
  if (typeof t.headers == "function")
    return Array.isArray(e) && (e = wB(e)), t.headers(e ? pB(e) : {});
  if (typeof t.headers > "u")
    return !0;
  if (typeof e != "object" || typeof t.headers != "object")
    return !1;
  for (const [A, r] of Object.entries(t.headers)) {
    const s = mB(e, A);
    if (!hr(r, s))
      return !1;
  }
  return !0;
}
function kE(t) {
  if (typeof t != "string")
    return t;
  const e = t.split("?");
  if (e.length !== 2)
    return t;
  const A = new URLSearchParams(e.pop());
  return A.sort(), [...e, A.toString()].join("?");
}
function a0(t, { path: e, method: A, body: r, headers: s }) {
  const n = hr(t.path, e), i = hr(t.method, A), o = typeof t.body < "u" ? hr(t.body, r) : !0, a = yB(t, s);
  return n && i && o && a;
}
function RB(t) {
  return Buffer.isBuffer(t) ? t : typeof t == "object" ? JSON.stringify(t) : t.toString();
}
function DB(t, e) {
  const A = e.query ? s0(e.path, e.query) : e.path, r = typeof A == "string" ? kE(A) : A;
  let s = t.filter(({ consumed: n }) => !n).filter(({ path: n }) => hr(kE(n), r));
  if (s.length === 0)
    throw new is(`Mock dispatch not matched for path '${r}'`);
  if (s = s.filter(({ method: n }) => hr(n, e.method)), s.length === 0)
    throw new is(`Mock dispatch not matched for method '${e.method}'`);
  if (s = s.filter(({ body: n }) => typeof n < "u" ? hr(n, e.body) : !0), s.length === 0)
    throw new is(`Mock dispatch not matched for body '${e.body}'`);
  if (s = s.filter((n) => yB(n, e.headers)), s.length === 0)
    throw new is(`Mock dispatch not matched for headers '${typeof e.headers == "object" ? JSON.stringify(e.headers) : e.headers}'`);
  return s[0];
}
function c0(t, e, A) {
  const r = { timesInvoked: 0, times: 1, persist: !1, consumed: !1 }, s = typeof A == "function" ? { callback: A } : { ...A }, n = { ...r, ...e, pending: !0, data: { error: null, ...s } };
  return t.push(n), n;
}
function Xg(t, e) {
  const A = t.findIndex((r) => r.consumed ? a0(r, e) : !1);
  A !== -1 && t.splice(A, 1);
}
function bB(t) {
  const { path: e, method: A, body: r, headers: s, query: n } = t;
  return {
    path: e,
    method: A,
    body: r,
    headers: s,
    query: n
  };
}
function Kg(t) {
  return Object.entries(t).reduce((e, [A, r]) => [
    ...e,
    Buffer.from(`${A}`),
    Array.isArray(r) ? r.map((s) => Buffer.from(`${s}`)) : Buffer.from(`${r}`)
  ], []);
}
function kB(t) {
  return i0[t] || "unknown";
}
async function g0(t) {
  const e = [];
  for await (const A of t)
    e.push(A);
  return Buffer.concat(e).toString("utf8");
}
function SB(t, e) {
  const A = bB(t), r = DB(this[uo], A);
  r.timesInvoked++, r.data.callback && (r.data = { ...r.data, ...r.data.callback(t) });
  const { data: { statusCode: s, data: n, headers: i, trailers: o, error: a }, delay: g, persist: c } = r, { timesInvoked: E, times: h } = r;
  if (r.consumed = !c && E >= h, r.pending = E < h, a !== null)
    return Xg(this[uo], A), e.onError(a), !0;
  typeof g == "number" && g > 0 ? setTimeout(() => {
    Q(this[uo]);
  }, g) : Q(this[uo]);
  function Q(u, I = n) {
    const f = Array.isArray(t.headers) ? wB(t.headers) : t.headers, C = typeof I == "function" ? I({ ...t, headers: f }) : I;
    if (o0(C)) {
      C.then((m) => Q(u, m));
      return;
    }
    const d = RB(C), w = Kg(i), p = Kg(o);
    e.abort = n0, e.onHeaders(s, w, B, kB(s)), e.onData(Buffer.from(d)), e.onComplete(p), Xg(u, A);
  }
  function B() {
  }
  return !0;
}
function l0() {
  const t = this[e0], e = this[t0], A = this[A0];
  return function(s, n) {
    if (t.isMockActive)
      try {
        SB.call(this, s, n);
      } catch (i) {
        if (i instanceof is) {
          const o = t[r0]();
          if (o === !1)
            throw new is(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
          if (FB(o, e))
            A.call(this, s, n);
          else
            throw new is(`${i.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`);
        } else
          throw i;
      }
    else
      A.call(this, s, n);
  };
}
function FB(t, e) {
  const A = new URL(e);
  return t === !0 ? !0 : !!(Array.isArray(t) && t.some((r) => hr(r, A.host)));
}
function h0(t) {
  if (t) {
    const { agent: e, ...A } = t;
    return A;
  }
}
var Fa = {
  getResponseData: RB,
  getMockDispatch: DB,
  addMockDispatch: c0,
  deleteMockDispatch: Xg,
  buildKey: bB,
  generateKeyValues: Kg,
  matchValue: hr,
  getResponse: g0,
  getStatusText: kB,
  mockDispatch: SB,
  buildMockDispatch: l0,
  checkNetConnect: FB,
  buildMockOptions: h0,
  getHeaderByName: mB
}, Na = {};
const { getResponseData: E0, buildKey: u0, addMockDispatch: Wc } = Fa, {
  kDispatches: Qo,
  kDispatchKey: Co,
  kDefaultHeaders: qc,
  kDefaultTrailers: jc,
  kContentLength: zc,
  kMockDispatch: Bo
} = qi, { InvalidArgumentError: It } = ke, { buildURL: Q0 } = me;
class Jo {
  constructor(e) {
    this[Bo] = e;
  }
  /**
   * Delay a reply by a set amount in ms.
   */
  delay(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new It("waitInMs must be a valid integer > 0");
    return this[Bo].delay = e, this;
  }
  /**
   * For a defined reply, never mark as consumed.
   */
  persist() {
    return this[Bo].persist = !0, this;
  }
  /**
   * Allow one to define a reply for a set amount of matching requests.
   */
  times(e) {
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new It("repeatTimes must be a valid integer > 0");
    return this[Bo].times = e, this;
  }
}
let C0 = class {
  constructor(e, A) {
    if (typeof e != "object")
      throw new It("opts must be an object");
    if (typeof e.path > "u")
      throw new It("opts.path must be defined");
    if (typeof e.method > "u" && (e.method = "GET"), typeof e.path == "string")
      if (e.query)
        e.path = Q0(e.path, e.query);
      else {
        const r = new URL(e.path, "data://");
        e.path = r.pathname + r.search;
      }
    typeof e.method == "string" && (e.method = e.method.toUpperCase()), this[Co] = u0(e), this[Qo] = A, this[qc] = {}, this[jc] = {}, this[zc] = !1;
  }
  createMockScopeDispatchData(e, A, r = {}) {
    const s = E0(A), n = this[zc] ? { "content-length": s.length } : {}, i = { ...this[qc], ...n, ...r.headers }, o = { ...this[jc], ...r.trailers };
    return { statusCode: e, data: A, headers: i, trailers: o };
  }
  validateReplyParameters(e, A, r) {
    if (typeof e > "u")
      throw new It("statusCode must be defined");
    if (typeof A > "u")
      throw new It("data must be defined");
    if (typeof r != "object")
      throw new It("responseOptions must be an object");
  }
  /**
   * Mock an undici request with a defined reply.
   */
  reply(e) {
    if (typeof e == "function") {
      const o = (g) => {
        const c = e(g);
        if (typeof c != "object")
          throw new It("reply options callback must return an object");
        const { statusCode: E, data: h = "", responseOptions: Q = {} } = c;
        return this.validateReplyParameters(E, h, Q), {
          ...this.createMockScopeDispatchData(E, h, Q)
        };
      }, a = Wc(this[Qo], this[Co], o);
      return new Jo(a);
    }
    const [A, r = "", s = {}] = [...arguments];
    this.validateReplyParameters(A, r, s);
    const n = this.createMockScopeDispatchData(A, r, s), i = Wc(this[Qo], this[Co], n);
    return new Jo(i);
  }
  /**
   * Mock an undici request with a defined error.
   */
  replyWithError(e) {
    if (typeof e > "u")
      throw new It("error must be defined");
    const A = Wc(this[Qo], this[Co], { error: e });
    return new Jo(A);
  }
  /**
   * Set default reply headers on the interceptor for subsequent replies
   */
  defaultReplyHeaders(e) {
    if (typeof e > "u")
      throw new It("headers must be defined");
    return this[qc] = e, this;
  }
  /**
   * Set default reply trailers on the interceptor for subsequent replies
   */
  defaultReplyTrailers(e) {
    if (typeof e > "u")
      throw new It("trailers must be defined");
    return this[jc] = e, this;
  }
  /**
   * Set reply content length header for replies on the interceptor
   */
  replyContentLength() {
    return this[zc] = !0, this;
  }
};
Na.MockInterceptor = C0;
Na.MockScope = Jo;
const { promisify: B0 } = Vt, I0 = ka, { buildMockDispatch: d0 } = Fa, {
  kDispatches: SE,
  kMockAgent: FE,
  kClose: NE,
  kOriginalClose: TE,
  kOrigin: UE,
  kOriginalDispatch: f0,
  kConnected: Zc
} = qi, { MockInterceptor: p0 } = Na, vE = Le, { InvalidArgumentError: m0 } = ke;
let w0 = class extends I0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new m0("Argument opts.agent must implement Agent");
    this[FE] = A.agent, this[UE] = e, this[SE] = [], this[Zc] = 1, this[f0] = this.dispatch, this[TE] = this.close.bind(this), this.dispatch = d0.call(this), this.close = this[NE];
  }
  get [vE.kConnected]() {
    return this[Zc];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new p0(e, this[SE]);
  }
  async [NE]() {
    await B0(this[TE])(), this[Zc] = 0, this[FE][vE.kClients].delete(this[UE]);
  }
};
var NB = w0;
const { promisify: y0 } = Vt, R0 = Vi, { buildMockDispatch: D0 } = Fa, {
  kDispatches: LE,
  kMockAgent: ME,
  kClose: GE,
  kOriginalClose: YE,
  kOrigin: xE,
  kOriginalDispatch: b0,
  kConnected: $c
} = qi, { MockInterceptor: k0 } = Na, JE = Le, { InvalidArgumentError: S0 } = ke;
let F0 = class extends R0 {
  constructor(e, A) {
    if (super(e, A), !A || !A.agent || typeof A.agent.dispatch != "function")
      throw new S0("Argument opts.agent must implement Agent");
    this[ME] = A.agent, this[xE] = e, this[LE] = [], this[$c] = 1, this[b0] = this.dispatch, this[YE] = this.close.bind(this), this.dispatch = D0.call(this), this.close = this[GE];
  }
  get [JE.kConnected]() {
    return this[$c];
  }
  /**
   * Sets up the base interceptor for mocking replies from undici.
   */
  intercept(e) {
    return new k0(e, this[LE]);
  }
  async [GE]() {
    await y0(this[YE])(), this[$c] = 0, this[ME][JE.kClients].delete(this[xE]);
  }
};
var TB = F0;
const N0 = {
  pronoun: "it",
  is: "is",
  was: "was",
  this: "this"
}, T0 = {
  pronoun: "they",
  is: "are",
  was: "were",
  this: "these"
};
var U0 = class {
  constructor(e, A) {
    this.singular = e, this.plural = A;
  }
  pluralize(e) {
    const A = e === 1, r = A ? N0 : T0, s = A ? this.singular : this.plural;
    return { ...r, count: e, noun: s };
  }
};
const { Transform: v0 } = Wt, { Console: L0 } = Ed;
var M0 = class {
  constructor({ disableColors: e } = {}) {
    this.transform = new v0({
      transform(A, r, s) {
        s(null, A);
      }
    }), this.logger = new L0({
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
const { kClients: Xr } = Le, G0 = Sa, {
  kAgent: Xc,
  kMockAgentSet: Io,
  kMockAgentGet: OE,
  kDispatches: Kc,
  kIsMockActive: fo,
  kNetConnect: Kr,
  kGetNetConnect: Y0,
  kOptions: po,
  kFactory: mo
} = qi, x0 = NB, J0 = TB, { matchValue: O0, buildMockOptions: _0 } = Fa, { InvalidArgumentError: _E, UndiciError: P0 } = ke, H0 = Tl, V0 = U0, W0 = M0;
class q0 {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}
let j0 = class extends H0 {
  constructor(e) {
    if (super(e), this[Kr] = !0, this[fo] = !0, e && e.agent && typeof e.agent.dispatch != "function")
      throw new _E("Argument opts.agent must implement Agent");
    const A = e && e.agent ? e.agent : new G0(e);
    this[Xc] = A, this[Xr] = A[Xr], this[po] = _0(e);
  }
  get(e) {
    let A = this[OE](e);
    return A || (A = this[mo](e), this[Io](e, A)), A;
  }
  dispatch(e, A) {
    return this.get(e.origin), this[Xc].dispatch(e, A);
  }
  async close() {
    await this[Xc].close(), this[Xr].clear();
  }
  deactivate() {
    this[fo] = !1;
  }
  activate() {
    this[fo] = !0;
  }
  enableNetConnect(e) {
    if (typeof e == "string" || typeof e == "function" || e instanceof RegExp)
      Array.isArray(this[Kr]) ? this[Kr].push(e) : this[Kr] = [e];
    else if (typeof e > "u")
      this[Kr] = !0;
    else
      throw new _E("Unsupported matcher. Must be one of String|Function|RegExp.");
  }
  disableNetConnect() {
    this[Kr] = !1;
  }
  // This is required to bypass issues caused by using global symbols - see:
  // https://github.com/nodejs/undici/issues/1447
  get isMockActive() {
    return this[fo];
  }
  [Io](e, A) {
    this[Xr].set(e, new q0(A));
  }
  [mo](e) {
    const A = Object.assign({ agent: this }, this[po]);
    return this[po] && this[po].connections === 1 ? new x0(e, A) : new J0(e, A);
  }
  [OE](e) {
    const A = this[Xr].get(e);
    if (A)
      return A.deref();
    if (typeof e != "string") {
      const r = this[mo]("http://localhost:9999");
      return this[Io](e, r), r;
    }
    for (const [r, s] of Array.from(this[Xr])) {
      const n = s.deref();
      if (n && typeof r != "string" && O0(r, e)) {
        const i = this[mo](e);
        return this[Io](e, i), i[Kc] = n[Kc], i;
      }
    }
  }
  [Y0]() {
    return this[Kr];
  }
  pendingInterceptors() {
    const e = this[Xr];
    return Array.from(e.entries()).flatMap(([A, r]) => r.deref()[Kc].map((s) => ({ ...s, origin: A }))).filter(({ pending: A }) => A);
  }
  assertNoPendingInterceptors({ pendingInterceptorsFormatter: e = new W0() } = {}) {
    const A = this.pendingInterceptors();
    if (A.length === 0)
      return;
    const r = new V0("interceptor", "interceptors").pluralize(A.length);
    throw new P0(`
${r.count} ${r.noun} ${r.is} pending:

${e.format(A)}
`.trim());
  }
};
var z0 = j0;
const { kProxy: Z0, kClose: $0, kDestroy: X0, kInterceptors: K0 } = Le, { URL: PE } = ud, HE = Sa, eR = Vi, AR = Ra, { InvalidArgumentError: ti, RequestAbortedError: tR } = ke, VE = Da, Ln = Symbol("proxy agent"), wo = Symbol("proxy client"), Mn = Symbol("proxy headers"), eg = Symbol("request tls settings"), rR = Symbol("proxy tls settings"), WE = Symbol("connect endpoint function");
function sR(t) {
  return t === "https:" ? 443 : 80;
}
function nR(t) {
  if (typeof t == "string" && (t = { uri: t }), !t || !t.uri)
    throw new ti("Proxy opts.uri is mandatory");
  return {
    uri: t.uri,
    protocol: t.protocol || "https"
  };
}
function iR(t, e) {
  return new eR(t, e);
}
let oR = class extends AR {
  constructor(e) {
    if (super(e), this[Z0] = nR(e), this[Ln] = new HE(e), this[K0] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], typeof e == "string" && (e = { uri: e }), !e || !e.uri)
      throw new ti("Proxy opts.uri is mandatory");
    const { clientFactory: A = iR } = e;
    if (typeof A != "function")
      throw new ti("Proxy opts.clientFactory must be a function.");
    this[eg] = e.requestTls, this[rR] = e.proxyTls, this[Mn] = e.headers || {};
    const r = new PE(e.uri), { origin: s, port: n, host: i, username: o, password: a } = r;
    if (e.auth && e.token)
      throw new ti("opts.auth cannot be used in combination with opts.token");
    e.auth ? this[Mn]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[Mn]["proxy-authorization"] = e.token : o && a && (this[Mn]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(o)}:${decodeURIComponent(a)}`).toString("base64")}`);
    const g = VE({ ...e.proxyTls });
    this[WE] = VE({ ...e.requestTls }), this[wo] = A(r, { connect: g }), this[Ln] = new HE({
      ...e,
      connect: async (c, E) => {
        let h = c.host;
        c.port || (h += `:${sR(c.protocol)}`);
        try {
          const { socket: Q, statusCode: B } = await this[wo].connect({
            origin: s,
            port: n,
            path: h,
            signal: c.signal,
            headers: {
              ...this[Mn],
              host: i
            }
          });
          if (B !== 200 && (Q.on("error", () => {
          }).destroy(), E(new tR(`Proxy response (${B}) !== 200 when HTTP Tunneling`))), c.protocol !== "https:") {
            E(null, Q);
            return;
          }
          let u;
          this[eg] ? u = this[eg].servername : u = c.servername, this[WE]({ ...c, servername: u, httpSocket: Q }, E);
        } catch (Q) {
          E(Q);
        }
      }
    });
  }
  dispatch(e, A) {
    const { host: r } = new PE(e.origin), s = aR(e.headers);
    return cR(s), this[Ln].dispatch(
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
  async [$0]() {
    await this[Ln].close(), await this[wo].close();
  }
  async [X0]() {
    await this[Ln].destroy(), await this[wo].destroy();
  }
};
function aR(t) {
  if (Array.isArray(t)) {
    const e = {};
    for (let A = 0; A < t.length; A += 2)
      e[t[A]] = t[A + 1];
    return e;
  }
  return t;
}
function cR(t) {
  if (t && Object.keys(t).find((A) => A.toLowerCase() === "proxy-authorization"))
    throw new ti("Proxy-Authorization should be sent in ProxyAgent constructor");
}
var gR = oR;
const es = Xe, { kRetryHandlerDefaultRetry: qE } = Le, { RequestRetryError: yo } = ke, { isDisturbed: jE, parseHeaders: lR, parseRangeHeader: zE } = me;
function hR(t) {
  const e = Date.now();
  return new Date(t).getTime() - e;
}
let ER = class UB {
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
      statusCodes: Q
    } = r ?? {};
    this.dispatch = A.dispatch, this.handler = A.handler, this.opts = s, this.abort = null, this.aborted = !1, this.retryOpts = {
      retry: n ?? UB[qE],
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
    if (this.handler.onBodySent)
      return this.handler.onBodySent(e);
  }
  static [qE](e, { state: A, opts: r }, s) {
    const { statusCode: n, code: i, headers: o } = e, { method: a, retryOptions: g } = r, {
      maxRetries: c,
      timeout: E,
      maxTimeout: h,
      timeoutFactor: Q,
      statusCodes: B,
      errorCodes: u,
      methods: I
    } = g;
    let { counter: f, currentTimeout: C } = A;
    if (C = C != null && C > 0 ? C : E, i && i !== "UND_ERR_REQ_RETRY" && i !== "UND_ERR_SOCKET" && !u.includes(i)) {
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
    d && (d = Number(d), d = isNaN(d) ? hR(d) : d * 1e3);
    const w = d > 0 ? Math.min(d, h) : Math.min(C * Q ** f, h);
    A.currentTimeout = w, setTimeout(() => s(null), w);
  }
  onHeaders(e, A, r, s) {
    const n = lR(A);
    if (this.retryCount += 1, e >= 300)
      return this.abort(
        new yo("Request failed", e, {
          headers: n,
          count: this.retryCount
        })
      ), !1;
    if (this.resume != null) {
      if (this.resume = null, e !== 206)
        return !0;
      const o = zE(n["content-range"]);
      if (!o)
        return this.abort(
          new yo("Content-Range mismatch", e, {
            headers: n,
            count: this.retryCount
          })
        ), !1;
      if (this.etag != null && this.etag !== n.etag)
        return this.abort(
          new yo("ETag mismatch", e, {
            headers: n,
            count: this.retryCount
          })
        ), !1;
      const { start: a, size: g, end: c = g } = o;
      return es(this.start === a, "content-range mismatch"), es(this.end == null || this.end === c, "content-range mismatch"), this.resume = r, !0;
    }
    if (this.end == null) {
      if (e === 206) {
        const o = zE(n["content-range"]);
        if (o == null)
          return this.handler.onHeaders(
            e,
            A,
            r,
            s
          );
        const { start: a, size: g, end: c = g } = o;
        es(
          a != null && Number.isFinite(a) && this.start !== a,
          "content-range mismatch"
        ), es(Number.isFinite(a)), es(
          c != null && Number.isFinite(c) && this.end !== c,
          "invalid content-length"
        ), this.start = a, this.end = c;
      }
      if (this.end == null) {
        const o = n["content-length"];
        this.end = o != null ? Number(o) : null;
      }
      return es(Number.isFinite(this.start)), es(
        this.end == null || Number.isFinite(this.end),
        "invalid content-length"
      ), this.resume = r, this.etag = n.etag != null ? n.etag : null, this.handler.onHeaders(
        e,
        A,
        r,
        s
      );
    }
    const i = new yo("Request failed", e, {
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
    if (this.aborted || jE(this.opts.body))
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
      if (r != null || this.aborted || jE(this.opts.body))
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
var uR = ER;
const vB = Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: QR } = ke, CR = Sa;
MB() === void 0 && LB(new CR());
function LB(t) {
  if (!t || typeof t.dispatch != "function")
    throw new QR("Argument agent must implement Agent");
  Object.defineProperty(globalThis, vB, {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !1
  });
}
function MB() {
  return globalThis[vB];
}
var ji = {
  setGlobalDispatcher: LB,
  getGlobalDispatcher: MB
}, BR = class {
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
}, Ag, ZE;
function pn() {
  if (ZE)
    return Ag;
  ZE = 1;
  const { kHeadersList: t, kConstruct: e } = Le, { kGuard: A } = Pr(), { kEnumerableProperty: r } = me, {
    makeIterator: s,
    isValidHeaderName: n,
    isValidHeaderValue: i
  } = kt(), { webidl: o } = jA(), a = Xe, g = Symbol("headers map"), c = Symbol("headers map sorted");
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
  function Q(f, C) {
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
  class u {
    constructor(C) {
      /** @type {[string, string][]|null} */
      v(this, "cookies", null);
      C instanceof u ? (this[g] = new Map(C[g]), this[c] = C[c], this.cookies = C.cookies === null ? null : [...C.cookies]) : (this[g] = new Map(C), this[c] = null);
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
      C !== e && (this[t] = new u(), this[A] = "none", C !== void 0 && (C = o.converters.HeadersInit(C), Q(this, C)));
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
        const [m, D] = d[p];
        if (m === "set-cookie")
          for (let b = 0; b < w.length; ++b)
            C.push([m, w[b]]);
        else
          a(D !== null), C.push([m, D]);
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
  }, Ag = {
    fill: Q,
    Headers: I,
    HeadersList: u
  }, Ag;
}
var tg, $E;
function Gl() {
  if ($E)
    return tg;
  $E = 1;
  const { Headers: t, HeadersList: e, fill: A } = pn(), { extractBody: r, cloneBody: s, mixinBody: n } = ya(), i = me, { kEnumerableProperty: o } = i, {
    isValidReasonPhrase: a,
    isCancelled: g,
    isAborted: c,
    isBlobLike: E,
    serializeJavascriptValueToJSONString: h,
    isErrorLike: Q,
    isomorphicEncode: B
  } = kt(), {
    redirectStatusSet: u,
    nullBodyStatus: I,
    DOMException: f
  } = ys(), { kState: C, kHeaders: d, kGuard: w, kRealm: p } = Pr(), { webidl: m } = jA(), { FormData: D } = Nl(), { getGlobalOrigin: b } = Hi(), { URLSerializer: G } = qt(), { kHeadersList: _, kConstruct: Y } = Le, te = Xe, { types: ee } = Vt, Ee = globalThis.ReadableStream || Jr.ReadableStream, q = new TextEncoder("utf-8");
  class $ {
    // Creates network error Response.
    static error() {
      const L = { settingsObject: {} }, M = new $();
      return M[C] = K(), M[p] = L, M[d][_] = M[C].headersList, M[d][w] = "immutable", M[d][p] = L, M;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(L, M = {}) {
      m.argumentLengthCheck(arguments, 1, { header: "Response.json" }), M !== null && (M = m.converters.ResponseInit(M));
      const P = q.encode(
        h(L)
      ), j = r(P), Z = { settingsObject: {} }, J = new $();
      return J[p] = Z, J[d][w] = "response", J[d][p] = Z, F(J, M, { body: j[0], type: "application/json" }), J;
    }
    // Creates a redirect Response that redirects to url with status status.
    static redirect(L, M = 302) {
      const P = { settingsObject: {} };
      m.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), L = m.converters.USVString(L), M = m.converters["unsigned short"](M);
      let j;
      try {
        j = new URL(L, b());
      } catch (oe) {
        throw Object.assign(new TypeError("Failed to parse URL from " + L), {
          cause: oe
        });
      }
      if (!u.has(M))
        throw new RangeError("Invalid status code " + M);
      const Z = new $();
      Z[p] = P, Z[d][w] = "immutable", Z[d][p] = P, Z[C].status = M;
      const J = B(G(j));
      return Z[C].headersList.append("location", J), Z;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(L = null, M = {}) {
      L !== null && (L = m.converters.BodyInit(L)), M = m.converters.ResponseInit(M), this[p] = { settingsObject: {} }, this[C] = se({}), this[d] = new t(Y), this[d][w] = "response", this[d][_] = this[C].headersList, this[d][p] = this[p];
      let P = null;
      if (L != null) {
        const [j, Z] = r(L);
        P = { body: j, type: Z };
      }
      F(this, M, P);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
      return m.brandCheck(this, $), this[C].type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
      m.brandCheck(this, $);
      const L = this[C].urlList, M = L[L.length - 1] ?? null;
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
      const L = ne(this[C]), M = new $();
      return M[C] = L, M[p] = this[p], M[d][_] = L.headersList, M[d][w] = this[d][w], M[d][p] = this[d][p], M;
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
  function ne(S) {
    if (S.internalResponse)
      return V(
        ne(S.internalResponse),
        S.type
      );
    const L = se({ ...S, body: null });
    return S.body != null && (L.body = s(S.body)), L;
  }
  function se(S) {
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
      ...S,
      headersList: S.headersList ? new e(S.headersList) : new e(),
      urlList: S.urlList ? [...S.urlList] : []
    };
  }
  function K(S) {
    const L = Q(S);
    return se({
      type: "error",
      status: 0,
      error: L ? S : new Error(S && String(S)),
      aborted: S && S.name === "AbortError"
    });
  }
  function k(S, L) {
    return L = {
      internalResponse: S,
      ...L
    }, new Proxy(S, {
      get(M, P) {
        return P in L ? L[P] : M[P];
      },
      set(M, P, j) {
        return te(!(P in L)), M[P] = j, !0;
      }
    });
  }
  function V(S, L) {
    if (L === "basic")
      return k(S, {
        type: "basic",
        headersList: S.headersList
      });
    if (L === "cors")
      return k(S, {
        type: "cors",
        headersList: S.headersList
      });
    if (L === "opaque")
      return k(S, {
        type: "opaque",
        urlList: Object.freeze([]),
        status: 0,
        statusText: "",
        body: null
      });
    if (L === "opaqueredirect")
      return k(S, {
        type: "opaqueredirect",
        status: 0,
        statusText: "",
        headersList: [],
        body: null
      });
    te(!1);
  }
  function U(S, L = null) {
    return te(g(S)), c(S) ? K(Object.assign(new f("The operation was aborted.", "AbortError"), { cause: L })) : K(Object.assign(new f("Request was cancelled."), { cause: L }));
  }
  function F(S, L, M) {
    if (L.status !== null && (L.status < 200 || L.status > 599))
      throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in L && L.statusText != null && !a(String(L.statusText)))
      throw new TypeError("Invalid statusText");
    if ("status" in L && L.status != null && (S[C].status = L.status), "statusText" in L && L.statusText != null && (S[C].statusText = L.statusText), "headers" in L && L.headers != null && A(S[d], L.headers), M) {
      if (I.includes(S.status))
        throw m.errors.exception({
          header: "Response constructor",
          message: "Invalid response status code " + S.status
        });
      S[C].body = M.body, M.type != null && !S[C].headersList.contains("Content-Type") && S[C].headersList.append("content-type", M.type);
    }
  }
  return m.converters.ReadableStream = m.interfaceConverter(
    Ee
  ), m.converters.FormData = m.interfaceConverter(
    D
  ), m.converters.URLSearchParams = m.interfaceConverter(
    URLSearchParams
  ), m.converters.XMLHttpRequestBodyInit = function(S) {
    return typeof S == "string" ? m.converters.USVString(S) : E(S) ? m.converters.Blob(S, { strict: !1 }) : ee.isArrayBuffer(S) || ee.isTypedArray(S) || ee.isDataView(S) ? m.converters.BufferSource(S) : i.isFormDataLike(S) ? m.converters.FormData(S, { strict: !1 }) : S instanceof URLSearchParams ? m.converters.URLSearchParams(S) : m.converters.DOMString(S);
  }, m.converters.BodyInit = function(S) {
    return S instanceof Ee ? m.converters.ReadableStream(S) : S != null && S[Symbol.asyncIterator] ? S : m.converters.XMLHttpRequestBodyInit(S);
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
  ]), tg = {
    makeNetworkError: K,
    makeResponse: se,
    makeAppropriateNetworkError: U,
    filterResponse: V,
    Response: $,
    cloneResponse: ne
  }, tg;
}
var rg, XE;
function Ta() {
  if (XE)
    return rg;
  XE = 1;
  const { extractBody: t, mixinBody: e, cloneBody: A } = ya(), { Headers: r, fill: s, HeadersList: n } = pn(), { FinalizationRegistry: i } = oB(), o = me, {
    isValidHTTPToken: a,
    sameOrigin: g,
    normalizeMethod: c,
    makePolicyContainer: E,
    normalizeMethodRecord: h
  } = kt(), {
    forbiddenMethodsSet: Q,
    corsSafeListedMethodsSet: B,
    referrerPolicy: u,
    requestRedirect: I,
    requestMode: f,
    requestCredentials: C,
    requestCache: d,
    requestDuplex: w
  } = ys(), { kEnumerableProperty: p } = o, { kHeaders: m, kSignal: D, kState: b, kGuard: G, kRealm: _ } = Pr(), { webidl: Y } = jA(), { getGlobalOrigin: te } = Hi(), { URLSerializer: ee } = qt(), { kHeadersList: Ee, kConstruct: q } = Le, $ = Xe, { getMaxListeners: ne, setMaxListeners: se, getEventListeners: K, defaultMaxListeners: k } = _i;
  let V = globalThis.TransformStream;
  const U = Symbol("abortController"), F = new i(({ signal: P, abort: j }) => {
    P.removeEventListener("abort", j);
  });
  class S {
    // https://fetch.spec.whatwg.org/#dom-request
    constructor(j, Z = {}) {
      var Hr, bs;
      if (j === q)
        return;
      Y.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), j = Y.converters.RequestInfo(j), Z = Y.converters.RequestInit(Z), this[_] = {
        settingsObject: {
          baseUrl: te(),
          get origin() {
            var Qe;
            return (Qe = this.baseUrl) == null ? void 0 : Qe.origin;
          },
          policyContainer: E()
        }
      };
      let J = null, oe = null;
      const ye = this[_].settingsObject.baseUrl;
      let Ie = null;
      if (typeof j == "string") {
        let Qe;
        try {
          Qe = new URL(j, ye);
        } catch (Ye) {
          throw new TypeError("Failed to parse URL from " + j, { cause: Ye });
        }
        if (Qe.username || Qe.password)
          throw new TypeError(
            "Request cannot be constructed from a URL that includes credentials: " + j
          );
        J = L({ urlList: [Qe] }), oe = "cors";
      } else
        $(j instanceof S), J = j[b], Ie = j[D];
      const He = this[_].settingsObject.origin;
      let Se = "client";
      if (((bs = (Hr = J.window) == null ? void 0 : Hr.constructor) == null ? void 0 : bs.name) === "EnvironmentSettingsObject" && g(J.window, He) && (Se = J.window), Z.window != null)
        throw new TypeError(`'window' option '${Se}' must be null`);
      "window" in Z && (Se = "no-window"), J = L({
        // URL request’s URL.
        // undici implementation note: this is set as the first item in request's urlList in makeRequest
        // method request’s method.
        method: J.method,
        // header list A copy of request’s header list.
        // undici implementation note: headersList is cloned in makeRequest
        headersList: J.headersList,
        // unsafe-request flag Set.
        unsafeRequest: J.unsafeRequest,
        // client This’s relevant settings object.
        client: this[_].settingsObject,
        // window window.
        window: Se,
        // priority request’s priority.
        priority: J.priority,
        // origin request’s origin. The propagation of the origin is only significant for navigation requests
        // being handled by a service worker. In this scenario a request can have an origin that is different
        // from the current client.
        origin: J.origin,
        // referrer request’s referrer.
        referrer: J.referrer,
        // referrer policy request’s referrer policy.
        referrerPolicy: J.referrerPolicy,
        // mode request’s mode.
        mode: J.mode,
        // credentials mode request’s credentials mode.
        credentials: J.credentials,
        // cache mode request’s cache mode.
        cache: J.cache,
        // redirect mode request’s redirect mode.
        redirect: J.redirect,
        // integrity metadata request’s integrity metadata.
        integrity: J.integrity,
        // keepalive request’s keepalive.
        keepalive: J.keepalive,
        // reload-navigation flag request’s reload-navigation flag.
        reloadNavigation: J.reloadNavigation,
        // history-navigation flag request’s history-navigation flag.
        historyNavigation: J.historyNavigation,
        // URL list A clone of request’s URL list.
        urlList: [...J.urlList]
      });
      const Ge = Object.keys(Z).length !== 0;
      if (Ge && (J.mode === "navigate" && (J.mode = "same-origin"), J.reloadNavigation = !1, J.historyNavigation = !1, J.origin = "client", J.referrer = "client", J.referrerPolicy = "", J.url = J.urlList[J.urlList.length - 1], J.urlList = [J.url]), Z.referrer !== void 0) {
        const Qe = Z.referrer;
        if (Qe === "")
          J.referrer = "no-referrer";
        else {
          let Ye;
          try {
            Ye = new URL(Qe, ye);
          } catch (St) {
            throw new TypeError(`Referrer "${Qe}" is not a valid URL.`, { cause: St });
          }
          Ye.protocol === "about:" && Ye.hostname === "client" || He && !g(Ye, this[_].settingsObject.baseUrl) ? J.referrer = "client" : J.referrer = Ye;
        }
      }
      Z.referrerPolicy !== void 0 && (J.referrerPolicy = Z.referrerPolicy);
      let Ve;
      if (Z.mode !== void 0 ? Ve = Z.mode : Ve = oe, Ve === "navigate")
        throw Y.errors.exception({
          header: "Request constructor",
          message: "invalid request mode navigate."
        });
      if (Ve != null && (J.mode = Ve), Z.credentials !== void 0 && (J.credentials = Z.credentials), Z.cache !== void 0 && (J.cache = Z.cache), J.cache === "only-if-cached" && J.mode !== "same-origin")
        throw new TypeError(
          "'only-if-cached' can be set only with 'same-origin' mode"
        );
      if (Z.redirect !== void 0 && (J.redirect = Z.redirect), Z.integrity != null && (J.integrity = String(Z.integrity)), Z.keepalive !== void 0 && (J.keepalive = !!Z.keepalive), Z.method !== void 0) {
        let Qe = Z.method;
        if (!a(Qe))
          throw new TypeError(`'${Qe}' is not a valid HTTP method.`);
        if (Q.has(Qe.toUpperCase()))
          throw new TypeError(`'${Qe}' HTTP method is unsupported.`);
        Qe = h[Qe] ?? c(Qe), J.method = Qe;
      }
      Z.signal !== void 0 && (Ie = Z.signal), this[b] = J;
      const fe = new AbortController();
      if (this[D] = fe.signal, this[D][_] = this[_], Ie != null) {
        if (!Ie || typeof Ie.aborted != "boolean" || typeof Ie.addEventListener != "function")
          throw new TypeError(
            "Failed to construct 'Request': member signal is not of type AbortSignal."
          );
        if (Ie.aborted)
          fe.abort(Ie.reason);
        else {
          this[U] = fe;
          const Qe = new WeakRef(fe), Ye = function() {
            const St = Qe.deref();
            St !== void 0 && St.abort(this.reason);
          };
          try {
            (typeof ne == "function" && ne(Ie) === k || K(Ie, "abort").length >= k) && se(100, Ie);
          } catch {
          }
          o.addAbortListener(Ie, Ye), F.register(fe, { signal: Ie, abort: Ye });
        }
      }
      if (this[m] = new r(q), this[m][Ee] = J.headersList, this[m][G] = "request", this[m][_] = this[_], Ve === "no-cors") {
        if (!B.has(J.method))
          throw new TypeError(
            `'${J.method} is unsupported in no-cors mode.`
          );
        this[m][G] = "request-no-cors";
      }
      if (Ge) {
        const Qe = this[m][Ee], Ye = Z.headers !== void 0 ? Z.headers : new n(Qe);
        if (Qe.clear(), Ye instanceof n) {
          for (const [St, R] of Ye)
            Qe.append(St, R);
          Qe.cookies = Ye.cookies;
        } else
          s(this[m], Ye);
      }
      const de = j instanceof S ? j[b].body : null;
      if ((Z.body != null || de != null) && (J.method === "GET" || J.method === "HEAD"))
        throw new TypeError("Request with GET/HEAD method cannot have body.");
      let we = null;
      if (Z.body != null) {
        const [Qe, Ye] = t(
          Z.body,
          J.keepalive
        );
        we = Qe, Ye && !this[m][Ee].contains("content-type") && this[m].append("content-type", Ye);
      }
      const TA = we ?? de;
      if (TA != null && TA.source == null) {
        if (we != null && Z.duplex == null)
          throw new TypeError("RequestInit: duplex option is required when sending a body.");
        if (J.mode !== "same-origin" && J.mode !== "cors")
          throw new TypeError(
            'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
          );
        J.useCORSPreflightFlag = !0;
      }
      let Ds = TA;
      if (we == null && de != null) {
        if (o.isDisturbed(de.stream) || de.stream.locked)
          throw new TypeError(
            "Cannot construct a Request with a Request object that has already been used."
          );
        V || (V = Jr.TransformStream);
        const Qe = new V();
        de.stream.pipeThrough(Qe), Ds = {
          source: de.source,
          length: de.length,
          stream: Qe.readable
        };
      }
      this[b].body = Ds;
    }
    // Returns request’s HTTP method, which is "GET" by default.
    get method() {
      return Y.brandCheck(this, S), this[b].method;
    }
    // Returns the URL of request as a string.
    get url() {
      return Y.brandCheck(this, S), ee(this[b].url);
    }
    // Returns a Headers object consisting of the headers associated with request.
    // Note that headers added in the network layer by the user agent will not
    // be accounted for in this object, e.g., the "Host" header.
    get headers() {
      return Y.brandCheck(this, S), this[m];
    }
    // Returns the kind of resource requested by request, e.g., "document"
    // or "script".
    get destination() {
      return Y.brandCheck(this, S), this[b].destination;
    }
    // Returns the referrer of request. Its value can be a same-origin URL if
    // explicitly set in init, the empty string to indicate no referrer, and
    // "about:client" when defaulting to the global’s default. This is used
    // during fetching to determine the value of the `Referer` header of the
    // request being made.
    get referrer() {
      return Y.brandCheck(this, S), this[b].referrer === "no-referrer" ? "" : this[b].referrer === "client" ? "about:client" : this[b].referrer.toString();
    }
    // Returns the referrer policy associated with request.
    // This is used during fetching to compute the value of the request’s
    // referrer.
    get referrerPolicy() {
      return Y.brandCheck(this, S), this[b].referrerPolicy;
    }
    // Returns the mode associated with request, which is a string indicating
    // whether the request will use CORS, or will be restricted to same-origin
    // URLs.
    get mode() {
      return Y.brandCheck(this, S), this[b].mode;
    }
    // Returns the credentials mode associated with request,
    // which is a string indicating whether credentials will be sent with the
    // request always, never, or only when sent to a same-origin URL.
    get credentials() {
      return this[b].credentials;
    }
    // Returns the cache mode associated with request,
    // which is a string indicating how the request will
    // interact with the browser’s cache when fetching.
    get cache() {
      return Y.brandCheck(this, S), this[b].cache;
    }
    // Returns the redirect mode associated with request,
    // which is a string indicating how redirects for the
    // request will be handled during fetching. A request
    // will follow redirects by default.
    get redirect() {
      return Y.brandCheck(this, S), this[b].redirect;
    }
    // Returns request’s subresource integrity metadata, which is a
    // cryptographic hash of the resource being fetched. Its value
    // consists of multiple hashes separated by whitespace. [SRI]
    get integrity() {
      return Y.brandCheck(this, S), this[b].integrity;
    }
    // Returns a boolean indicating whether or not request can outlive the
    // global in which it was created.
    get keepalive() {
      return Y.brandCheck(this, S), this[b].keepalive;
    }
    // Returns a boolean indicating whether or not request is for a reload
    // navigation.
    get isReloadNavigation() {
      return Y.brandCheck(this, S), this[b].reloadNavigation;
    }
    // Returns a boolean indicating whether or not request is for a history
    // navigation (a.k.a. back-foward navigation).
    get isHistoryNavigation() {
      return Y.brandCheck(this, S), this[b].historyNavigation;
    }
    // Returns the signal associated with request, which is an AbortSignal
    // object indicating whether or not request has been aborted, and its
    // abort event handler.
    get signal() {
      return Y.brandCheck(this, S), this[D];
    }
    get body() {
      return Y.brandCheck(this, S), this[b].body ? this[b].body.stream : null;
    }
    get bodyUsed() {
      return Y.brandCheck(this, S), !!this[b].body && o.isDisturbed(this[b].body.stream);
    }
    get duplex() {
      return Y.brandCheck(this, S), "half";
    }
    // Returns a clone of request.
    clone() {
      var oe;
      if (Y.brandCheck(this, S), this.bodyUsed || (oe = this.body) != null && oe.locked)
        throw new TypeError("unusable");
      const j = M(this[b]), Z = new S(q);
      Z[b] = j, Z[_] = this[_], Z[m] = new r(q), Z[m][Ee] = j.headersList, Z[m][G] = this[m][G], Z[m][_] = this[m][_];
      const J = new AbortController();
      return this.signal.aborted ? J.abort(this.signal.reason) : o.addAbortListener(
        this.signal,
        () => {
          J.abort(this.signal.reason);
        }
      ), Z[D] = J.signal, Z;
    }
  }
  e(S);
  function L(P) {
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
    const j = L({ ...P, body: null });
    return P.body != null && (j.body = A(P.body)), j;
  }
  return Object.defineProperties(S.prototype, {
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
  }), Y.converters.Request = Y.interfaceConverter(
    S
  ), Y.converters.RequestInfo = function(P) {
    return typeof P == "string" ? Y.converters.USVString(P) : P instanceof S ? Y.converters.Request(P) : Y.converters.USVString(P);
  }, Y.converters.AbortSignal = Y.interfaceConverter(
    AbortSignal
  ), Y.converters.RequestInit = Y.dictionaryConverter([
    {
      key: "method",
      converter: Y.converters.ByteString
    },
    {
      key: "headers",
      converter: Y.converters.HeadersInit
    },
    {
      key: "body",
      converter: Y.nullableConverter(
        Y.converters.BodyInit
      )
    },
    {
      key: "referrer",
      converter: Y.converters.USVString
    },
    {
      key: "referrerPolicy",
      converter: Y.converters.DOMString,
      // https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
      allowedValues: u
    },
    {
      key: "mode",
      converter: Y.converters.DOMString,
      // https://fetch.spec.whatwg.org/#concept-request-mode
      allowedValues: f
    },
    {
      key: "credentials",
      converter: Y.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcredentials
      allowedValues: C
    },
    {
      key: "cache",
      converter: Y.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestcache
      allowedValues: d
    },
    {
      key: "redirect",
      converter: Y.converters.DOMString,
      // https://fetch.spec.whatwg.org/#requestredirect
      allowedValues: I
    },
    {
      key: "integrity",
      converter: Y.converters.DOMString
    },
    {
      key: "keepalive",
      converter: Y.converters.boolean
    },
    {
      key: "signal",
      converter: Y.nullableConverter(
        (P) => Y.converters.AbortSignal(
          P,
          { strict: !1 }
        )
      )
    },
    {
      key: "window",
      converter: Y.converters.any
    },
    {
      key: "duplex",
      converter: Y.converters.DOMString,
      allowedValues: w
    }
  ]), rg = { Request: S, makeRequest: L }, rg;
}
var sg, KE;
function Yl() {
  if (KE)
    return sg;
  KE = 1;
  const {
    Response: t,
    makeNetworkError: e,
    makeAppropriateNetworkError: A,
    filterResponse: r,
    makeResponse: s
  } = Gl(), { Headers: n } = pn(), { Request: i, makeRequest: o } = Ta(), a = Qd, {
    bytesMatch: g,
    makePolicyContainer: c,
    clonePolicyContainer: E,
    requestBadPort: h,
    TAOCheck: Q,
    appendRequestOriginHeader: B,
    responseLocationURL: u,
    requestCurrentURL: I,
    setRequestReferrerPolicyOnRedirect: f,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: C,
    createOpaqueTimingInfo: d,
    appendFetchMetadata: w,
    corsCheck: p,
    crossOriginResourcePolicyCheck: m,
    determineRequestsReferrer: D,
    coarsenedSharedCurrentTime: b,
    createDeferredPromise: G,
    isBlobLike: _,
    sameOrigin: Y,
    isCancelled: te,
    isAborted: ee,
    isErrorLike: Ee,
    fullyReadBody: q,
    readableStreamClose: $,
    isomorphicEncode: ne,
    urlIsLocal: se,
    urlIsHttpHttpsScheme: K,
    urlHasHttpsScheme: k
  } = kt(), { kState: V, kHeaders: U, kGuard: F, kRealm: S } = Pr(), L = Xe, { safelyExtractBody: M } = ya(), {
    redirectStatusSet: P,
    nullBodyStatus: j,
    safeMethodsSet: Z,
    requestBodyHeader: J,
    subresourceSet: oe,
    DOMException: ye
  } = ys(), { kHeadersList: Ie } = Le, He = _i, { Readable: Se, pipeline: Ge } = Wt, { addAbortListener: Ve, isErrored: fe, isReadable: de, nodeMajor: we, nodeMinor: TA } = me, { dataURLProcessor: Ds, serializeAMimeType: Hr } = qt(), { TransformStream: bs } = Jr, { getGlobalDispatcher: Qe } = ji, { webidl: Ye } = jA(), { STATUS_CODES: St } = Bn, R = ["GET", "HEAD"];
  let H, X = globalThis.ReadableStream;
  class ge extends He {
    constructor(Ae) {
      super(), this.dispatcher = Ae, this.connection = null, this.dump = !1, this.state = "ongoing", this.setMaxListeners(21);
    }
    terminate(Ae) {
      var O;
      this.state === "ongoing" && (this.state = "terminated", (O = this.connection) == null || O.destroy(Ae), this.emit("terminated", Ae));
    }
    // https://fetch.spec.whatwg.org/#fetch-controller-abort
    abort(Ae) {
      var O;
      this.state === "ongoing" && (this.state = "aborted", Ae || (Ae = new ye("The operation was aborted.", "AbortError")), this.serializedAbortReason = Ae, (O = this.connection) == null || O.destroy(Ae), this.emit("terminated", Ae));
    }
  }
  function pe(N, Ae = {}) {
    var Be;
    Ye.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
    const O = G();
    let W;
    try {
      W = new i(N, Ae);
    } catch (Re) {
      return O.reject(Re), O.promise;
    }
    const ie = W[V];
    if (W.signal.aborted)
      return HA(O, ie, null, W.signal.reason), O.promise;
    const z = ie.client.globalObject;
    ((Be = z == null ? void 0 : z.constructor) == null ? void 0 : Be.name) === "ServiceWorkerGlobalScope" && (ie.serviceWorkers = "none");
    let Ce = null;
    const Oe = null;
    let zA = !1, qe = null;
    return Ve(
      W.signal,
      () => {
        zA = !0, L(qe != null), qe.abort(W.signal.reason), HA(O, ie, Ce, W.signal.reason);
      }
    ), qe = UA({
      request: ie,
      processResponseEndOfBody: (Re) => We(Re, "fetch"),
      processResponse: (Re) => {
        if (zA)
          return Promise.resolve();
        if (Re.aborted)
          return HA(O, ie, Ce, qe.serializedAbortReason), Promise.resolve();
        if (Re.type === "error")
          return O.reject(
            Object.assign(new TypeError("fetch failed"), { cause: Re.error })
          ), Promise.resolve();
        Ce = new t(), Ce[V] = Re, Ce[S] = Oe, Ce[U][Ie] = Re.headersList, Ce[U][F] = "immutable", Ce[U][S] = Oe, O.resolve(Ce);
      },
      dispatcher: Ae.dispatcher ?? Qe()
      // undici
    }), O.promise;
  }
  function We(N, Ae = "other") {
    var z;
    if (N.type === "error" && N.aborted || !((z = N.urlList) != null && z.length))
      return;
    const O = N.urlList[0];
    let W = N.timingInfo, ie = N.cacheState;
    K(O) && W !== null && (N.timingAllowPassed || (W = d({
      startTime: W.startTime
    }), ie = ""), W.endTime = b(), N.timingInfo = W, mA(
      W,
      O,
      Ae,
      globalThis,
      ie
    ));
  }
  function mA(N, Ae, O, W, ie) {
    (we > 18 || we === 18 && TA >= 2) && performance.markResourceTiming(N, Ae.href, O, W, ie);
  }
  function HA(N, Ae, O, W) {
    var z, Ce;
    if (W || (W = new ye("The operation was aborted.", "AbortError")), N.reject(W), Ae.body != null && de((z = Ae.body) == null ? void 0 : z.stream) && Ae.body.stream.cancel(W).catch((Oe) => {
      if (Oe.code !== "ERR_INVALID_STATE")
        throw Oe;
    }), O == null)
      return;
    const ie = O[V];
    ie.body != null && de((Ce = ie.body) == null ? void 0 : Ce.stream) && ie.body.stream.cancel(W).catch((Oe) => {
      if (Oe.code !== "ERR_INVALID_STATE")
        throw Oe;
    });
  }
  function UA({
    request: N,
    processRequestBodyChunkLength: Ae,
    processRequestEndOfBody: O,
    processResponse: W,
    processResponseEndOfBody: ie,
    processResponseConsumeBody: z,
    useParallelQueue: Ce = !1,
    dispatcher: Oe
    // undici
  }) {
    var Re, ZA, Ke, Ft;
    let zA = null, qe = !1;
    N.client != null && (zA = N.client.globalObject, qe = N.client.crossOriginIsolatedCapability);
    const ur = b(qe), eo = d({
      startTime: ur
    }), Be = {
      controller: new ge(Oe),
      request: N,
      timingInfo: eo,
      processRequestBodyChunkLength: Ae,
      processRequestEndOfBody: O,
      processResponse: W,
      processResponseConsumeBody: z,
      processResponseEndOfBody: ie,
      taskDestination: zA,
      crossOriginIsolatedCapability: qe
    };
    return L(!N.body || N.body.stream), N.window === "client" && (N.window = ((Ke = (ZA = (Re = N.client) == null ? void 0 : Re.globalObject) == null ? void 0 : ZA.constructor) == null ? void 0 : Ke.name) === "Window" ? N.client : "no-window"), N.origin === "client" && (N.origin = (Ft = N.client) == null ? void 0 : Ft.origin), N.policyContainer === "client" && (N.client != null ? N.policyContainer = E(
      N.client.policyContainer
    ) : N.policyContainer = c()), N.headersList.contains("accept") || N.headersList.append("accept", "*/*"), N.headersList.contains("accept-language") || N.headersList.append("accept-language", "*"), N.priority, oe.has(N.destination), Xi(Be).catch((xe) => {
      Be.controller.terminate(xe);
    }), Be.controller;
  }
  async function Xi(N, Ae = !1) {
    const O = N.request;
    let W = null;
    if (O.localURLsOnly && !se(I(O)) && (W = e("local URLs only")), C(O), h(O) === "blocked" && (W = e("bad port")), O.referrerPolicy === "" && (O.referrerPolicy = O.policyContainer.referrerPolicy), O.referrer !== "no-referrer" && (O.referrer = D(O)), W === null && (W = await (async () => {
      const z = I(O);
      return (
        // - request’s current URL’s origin is same origin with request’s origin,
        //   and request’s response tainting is "basic"
        Y(z, O.url) && O.responseTainting === "basic" || // request’s current URL’s scheme is "data"
        z.protocol === "data:" || // - request’s mode is "navigate" or "websocket"
        O.mode === "navigate" || O.mode === "websocket" ? (O.responseTainting = "basic", await Ki(N)) : O.mode === "same-origin" ? e('request mode cannot be "same-origin"') : O.mode === "no-cors" ? O.redirect !== "follow" ? e(
          'redirect mode cannot be "follow" for "no-cors" request'
        ) : (O.responseTainting = "opaque", await Ki(N)) : K(I(O)) ? (O.responseTainting = "cors", await Kl(N)) : e("URL scheme must be a HTTP(S) scheme")
      );
    })()), Ae)
      return W;
    W.status !== 0 && !W.internalResponse && (O.responseTainting, O.responseTainting === "basic" ? W = r(W, "basic") : O.responseTainting === "cors" ? W = r(W, "cors") : O.responseTainting === "opaque" ? W = r(W, "opaque") : L(!1));
    let ie = W.status === 0 ? W : W.internalResponse;
    if (ie.urlList.length === 0 && ie.urlList.push(...O.urlList), O.timingAllowFailed || (W.timingAllowPassed = !0), W.type === "opaque" && ie.status === 206 && ie.rangeRequested && !O.headers.contains("range") && (W = ie = e()), W.status !== 0 && (O.method === "HEAD" || O.method === "CONNECT" || j.includes(ie.status)) && (ie.body = null, N.controller.dump = !0), O.integrity) {
      const z = (Oe) => _a(N, e(Oe));
      if (O.responseTainting === "opaque" || W.body == null) {
        z(W.error);
        return;
      }
      const Ce = (Oe) => {
        if (!g(Oe, O.integrity)) {
          z("integrity mismatch");
          return;
        }
        W.body = M(Oe)[0], _a(N, W);
      };
      await q(W.body, Ce, z);
    } else
      _a(N, W);
  }
  function Ki(N) {
    if (te(N) && N.request.redirectCount === 0)
      return Promise.resolve(A(N));
    const { request: Ae } = N, { protocol: O } = I(Ae);
    switch (O) {
      case "about:":
        return Promise.resolve(e("about scheme is not supported"));
      case "blob:": {
        H || (H = ws.resolveObjectURL);
        const W = I(Ae);
        if (W.search.length !== 0)
          return Promise.resolve(e("NetworkError when attempting to fetch resource."));
        const ie = H(W.toString());
        if (Ae.method !== "GET" || !_(ie))
          return Promise.resolve(e("invalid method"));
        const z = M(ie), Ce = z[0], Oe = ne(`${Ce.length}`), zA = z[1] ?? "", qe = s({
          statusText: "OK",
          headersList: [
            ["content-length", { name: "Content-Length", value: Oe }],
            ["content-type", { name: "Content-Type", value: zA }]
          ]
        });
        return qe.body = Ce, Promise.resolve(qe);
      }
      case "data:": {
        const W = I(Ae), ie = Ds(W);
        if (ie === "failure")
          return Promise.resolve(e("failed to fetch the data URL"));
        const z = Hr(ie.mimeType);
        return Promise.resolve(s({
          statusText: "OK",
          headersList: [
            ["content-type", { name: "Content-Type", value: z }]
          ],
          body: M(ie.body)[0]
        }));
      }
      case "file:":
        return Promise.resolve(e("not implemented... yet..."));
      case "http:":
      case "https:":
        return Kl(N).catch((W) => e(W));
      default:
        return Promise.resolve(e("unknown scheme"));
    }
  }
  function $I(N, Ae) {
    N.request.done = !0, N.processResponseDone != null && queueMicrotask(() => N.processResponseDone(Ae));
  }
  function _a(N, Ae) {
    Ae.type === "error" && (Ae.urlList = [N.request.urlList[0]], Ae.timingInfo = d({
      startTime: N.timingInfo.startTime
    }));
    const O = () => {
      N.request.done = !0, N.processResponseEndOfBody != null && queueMicrotask(() => N.processResponseEndOfBody(Ae));
    };
    if (N.processResponse != null && queueMicrotask(() => N.processResponse(Ae)), Ae.body == null)
      O();
    else {
      const W = (z, Ce) => {
        Ce.enqueue(z);
      }, ie = new bs({
        start() {
        },
        transform: W,
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
      Ae.body = { stream: Ae.body.stream.pipeThrough(ie) };
    }
    if (N.processResponseConsumeBody != null) {
      const W = (z) => N.processResponseConsumeBody(Ae, z), ie = (z) => N.processResponseConsumeBody(Ae, z);
      if (Ae.body == null)
        queueMicrotask(() => W(null));
      else
        return q(Ae.body, W, ie);
      return Promise.resolve();
    }
  }
  async function Kl(N) {
    const Ae = N.request;
    let O = null, W = null;
    const ie = N.timingInfo;
    if (Ae.serviceWorkers, O === null) {
      if (Ae.redirect === "follow" && (Ae.serviceWorkers = "none"), W = O = await eh(N), Ae.responseTainting === "cors" && p(Ae, O) === "failure")
        return e("cors failure");
      Q(Ae, O) === "failure" && (Ae.timingAllowFailed = !0);
    }
    return (Ae.responseTainting === "opaque" || O.type === "opaque") && m(
      Ae.origin,
      Ae.client,
      Ae.destination,
      W
    ) === "blocked" ? e("blocked") : (P.has(W.status) && (Ae.redirect !== "manual" && N.controller.connection.destroy(), Ae.redirect === "error" ? O = e("unexpected redirect") : Ae.redirect === "manual" ? O = W : Ae.redirect === "follow" ? O = await XI(N, O) : L(!1)), O.timingInfo = ie, O);
  }
  function XI(N, Ae) {
    const O = N.request, W = Ae.internalResponse ? Ae.internalResponse : Ae;
    let ie;
    try {
      if (ie = u(
        W,
        I(O).hash
      ), ie == null)
        return Ae;
    } catch (Ce) {
      return Promise.resolve(e(Ce));
    }
    if (!K(ie))
      return Promise.resolve(e("URL scheme must be a HTTP(S) scheme"));
    if (O.redirectCount === 20)
      return Promise.resolve(e("redirect count exceeded"));
    if (O.redirectCount += 1, O.mode === "cors" && (ie.username || ie.password) && !Y(O, ie))
      return Promise.resolve(e('cross origin not allowed for request mode "cors"'));
    if (O.responseTainting === "cors" && (ie.username || ie.password))
      return Promise.resolve(e(
        'URL cannot contain credentials for request mode "cors"'
      ));
    if (W.status !== 303 && O.body != null && O.body.source == null)
      return Promise.resolve(e());
    if ([301, 302].includes(W.status) && O.method === "POST" || W.status === 303 && !R.includes(O.method)) {
      O.method = "GET", O.body = null;
      for (const Ce of J)
        O.headersList.delete(Ce);
    }
    Y(I(O), ie) || (O.headersList.delete("authorization"), O.headersList.delete("proxy-authorization", !0), O.headersList.delete("cookie"), O.headersList.delete("host")), O.body != null && (L(O.body.source != null), O.body = M(O.body.source)[0]);
    const z = N.timingInfo;
    return z.redirectEndTime = z.postRedirectStartTime = b(N.crossOriginIsolatedCapability), z.redirectStartTime === 0 && (z.redirectStartTime = z.startTime), O.urlList.push(ie), f(O, W), Xi(N, !0);
  }
  async function eh(N, Ae = !1, O = !1) {
    const W = N.request;
    let ie = null, z = null, Ce = null;
    W.window === "no-window" && W.redirect === "error" ? (ie = N, z = W) : (z = o(W), ie = { ...N }, ie.request = z);
    const Oe = W.credentials === "include" || W.credentials === "same-origin" && W.responseTainting === "basic", zA = z.body ? z.body.length : null;
    let qe = null;
    if (z.body == null && ["POST", "PUT"].includes(z.method) && (qe = "0"), zA != null && (qe = ne(`${zA}`)), qe != null && z.headersList.append("content-length", qe), zA != null && z.keepalive, z.referrer instanceof URL && z.headersList.append("referer", ne(z.referrer.href)), B(z), w(z), z.headersList.contains("user-agent") || z.headersList.append("user-agent", typeof esbuildDetection > "u" ? "undici" : "node"), z.cache === "default" && (z.headersList.contains("if-modified-since") || z.headersList.contains("if-none-match") || z.headersList.contains("if-unmodified-since") || z.headersList.contains("if-match") || z.headersList.contains("if-range")) && (z.cache = "no-store"), z.cache === "no-cache" && !z.preventNoCacheCacheControlHeaderModification && !z.headersList.contains("cache-control") && z.headersList.append("cache-control", "max-age=0"), (z.cache === "no-store" || z.cache === "reload") && (z.headersList.contains("pragma") || z.headersList.append("pragma", "no-cache"), z.headersList.contains("cache-control") || z.headersList.append("cache-control", "no-cache")), z.headersList.contains("range") && z.headersList.append("accept-encoding", "identity"), z.headersList.contains("accept-encoding") || (k(I(z)) ? z.headersList.append("accept-encoding", "br, gzip, deflate") : z.headersList.append("accept-encoding", "gzip, deflate")), z.headersList.delete("host"), z.cache = "no-store", z.mode !== "no-store" && z.mode, Ce == null) {
      if (z.mode === "only-if-cached")
        return e("only if cached");
      const ur = await KI(
        ie,
        Oe,
        O
      );
      !Z.has(z.method) && ur.status >= 200 && ur.status <= 399, Ce == null && (Ce = ur);
    }
    if (Ce.urlList = [...z.urlList], z.headersList.contains("range") && (Ce.rangeRequested = !0), Ce.requestIncludesCredentials = Oe, Ce.status === 407)
      return W.window === "no-window" ? e() : te(N) ? A(N) : e("proxy authentication required");
    if (
      // response’s status is 421
      Ce.status === 421 && // isNewConnectionFetch is false
      !O && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
      (W.body == null || W.body.source != null)
    ) {
      if (te(N))
        return A(N);
      N.controller.connection.destroy(), Ce = await eh(
        N,
        Ae,
        !0
      );
    }
    return Ce;
  }
  async function KI(N, Ae = !1, O = !1) {
    L(!N.controller.connection || N.controller.connection.destroyed), N.controller.connection = {
      abort: null,
      destroyed: !1,
      destroy(Be) {
        var Re;
        this.destroyed || (this.destroyed = !0, (Re = this.abort) == null || Re.call(this, Be ?? new ye("The operation was aborted.", "AbortError")));
      }
    };
    const W = N.request;
    let ie = null;
    const z = N.timingInfo;
    W.cache = "no-store", W.mode;
    let Ce = null;
    if (W.body == null && N.processRequestEndOfBody)
      queueMicrotask(() => N.processRequestEndOfBody());
    else if (W.body != null) {
      const Be = async function* (Ke) {
        var Ft;
        te(N) || (yield Ke, (Ft = N.processRequestBodyChunkLength) == null || Ft.call(N, Ke.byteLength));
      }, Re = () => {
        te(N) || N.processRequestEndOfBody && N.processRequestEndOfBody();
      }, ZA = (Ke) => {
        te(N) || (Ke.name === "AbortError" ? N.controller.abort() : N.controller.terminate(Ke));
      };
      Ce = async function* () {
        try {
          for await (const Ke of W.body.stream)
            yield* Be(Ke);
          Re();
        } catch (Ke) {
          ZA(Ke);
        }
      }();
    }
    try {
      const { body: Be, status: Re, statusText: ZA, headersList: Ke, socket: Ft } = await eo({ body: Ce });
      if (Ft)
        ie = s({ status: Re, statusText: ZA, headersList: Ke, socket: Ft });
      else {
        const xe = Be[Symbol.asyncIterator]();
        N.controller.next = () => xe.next(), ie = s({ status: Re, statusText: ZA, headersList: Ke });
      }
    } catch (Be) {
      return Be.name === "AbortError" ? (N.controller.connection.destroy(), A(N, Be)) : e(Be);
    }
    const Oe = () => {
      N.controller.resume();
    }, zA = (Be) => {
      N.controller.abort(Be);
    };
    X || (X = Jr.ReadableStream);
    const qe = new X(
      {
        async start(Be) {
          N.controller.controller = Be;
        },
        async pull(Be) {
          await Oe();
        },
        async cancel(Be) {
          await zA(Be);
        }
      },
      {
        highWaterMark: 0,
        size() {
          return 1;
        }
      }
    );
    ie.body = { stream: qe }, N.controller.on("terminated", ur), N.controller.resume = async () => {
      for (; ; ) {
        let Be, Re;
        try {
          const { done: ZA, value: Ke } = await N.controller.next();
          if (ee(N))
            break;
          Be = ZA ? void 0 : Ke;
        } catch (ZA) {
          N.controller.ended && !z.encodedBodySize ? Be = void 0 : (Be = ZA, Re = !0);
        }
        if (Be === void 0) {
          $(N.controller.controller), $I(N, ie);
          return;
        }
        if (z.decodedBodySize += (Be == null ? void 0 : Be.byteLength) ?? 0, Re) {
          N.controller.terminate(Be);
          return;
        }
        if (N.controller.controller.enqueue(new Uint8Array(Be)), fe(qe)) {
          N.controller.terminate();
          return;
        }
        if (!N.controller.controller.desiredSize)
          return;
      }
    };
    function ur(Be) {
      ee(N) ? (ie.aborted = !0, de(qe) && N.controller.controller.error(
        N.controller.serializedAbortReason
      )) : de(qe) && N.controller.controller.error(new TypeError("terminated", {
        cause: Ee(Be) ? Be : void 0
      })), N.controller.connection.destroy();
    }
    return ie;
    async function eo({ body: Be }) {
      const Re = I(W), ZA = N.controller.dispatcher;
      return new Promise((Ke, Ft) => ZA.dispatch(
        {
          path: Re.pathname + Re.search,
          origin: Re.origin,
          method: W.method,
          body: N.controller.dispatcher.isMockActive ? W.body && (W.body.source || W.body.stream) : Be,
          headers: W.headersList.entries,
          maxRedirections: 0,
          upgrade: W.mode === "websocket" ? "websocket" : void 0
        },
        {
          body: null,
          abort: null,
          onConnect(xe) {
            const { connection: rA } = N.controller;
            rA.destroyed ? xe(new ye("The operation was aborted.", "AbortError")) : (N.controller.on("terminated", xe), this.abort = rA.abort = xe);
          },
          onHeaders(xe, rA, Pa, Ao) {
            if (xe < 200)
              return;
            let Qr = [], yn = "";
            const Rn = new n();
            if (Array.isArray(rA))
              for (let Et = 0; Et < rA.length; Et += 2) {
                const Cr = rA[Et + 0].toString("latin1"), Vr = rA[Et + 1].toString("latin1");
                Cr.toLowerCase() === "content-encoding" ? Qr = Vr.toLowerCase().split(",").map((Ha) => Ha.trim()) : Cr.toLowerCase() === "location" && (yn = Vr), Rn[Ie].append(Cr, Vr);
              }
            else {
              const Et = Object.keys(rA);
              for (const Cr of Et) {
                const Vr = rA[Cr];
                Cr.toLowerCase() === "content-encoding" ? Qr = Vr.toLowerCase().split(",").map((Ha) => Ha.trim()).reverse() : Cr.toLowerCase() === "location" && (yn = Vr), Rn[Ie].append(Cr, Vr);
              }
            }
            this.body = new Se({ read: Pa });
            const ks = [], ed = W.redirect === "follow" && yn && P.has(xe);
            if (W.method !== "HEAD" && W.method !== "CONNECT" && !j.includes(xe) && !ed)
              for (const Et of Qr)
                if (Et === "x-gzip" || Et === "gzip")
                  ks.push(a.createGunzip({
                    // Be less strict when decoding compressed responses, since sometimes
                    // servers send slightly invalid responses that are still accepted
                    // by common browsers.
                    // Always using Z_SYNC_FLUSH is what cURL does.
                    flush: a.constants.Z_SYNC_FLUSH,
                    finishFlush: a.constants.Z_SYNC_FLUSH
                  }));
                else if (Et === "deflate")
                  ks.push(a.createInflate());
                else if (Et === "br")
                  ks.push(a.createBrotliDecompress());
                else {
                  ks.length = 0;
                  break;
                }
            return Ke({
              status: xe,
              statusText: Ao,
              headersList: Rn[Ie],
              body: ks.length ? Ge(this.body, ...ks, () => {
              }) : this.body.on("error", () => {
              })
            }), !0;
          },
          onData(xe) {
            if (N.controller.dump)
              return;
            const rA = xe;
            return z.encodedBodySize += rA.byteLength, this.body.push(rA);
          },
          onComplete() {
            this.abort && N.controller.off("terminated", this.abort), N.controller.ended = !0, this.body.push(null);
          },
          onError(xe) {
            var rA;
            this.abort && N.controller.off("terminated", this.abort), (rA = this.body) == null || rA.destroy(xe), N.controller.terminate(xe), Ft(xe);
          },
          onUpgrade(xe, rA, Pa) {
            if (xe !== 101)
              return;
            const Ao = new n();
            for (let Qr = 0; Qr < rA.length; Qr += 2) {
              const yn = rA[Qr + 0].toString("latin1"), Rn = rA[Qr + 1].toString("latin1");
              Ao[Ie].append(yn, Rn);
            }
            return Ke({
              status: xe,
              statusText: St[xe],
              headersList: Ao[Ie],
              socket: Pa
            }), !0;
          }
        }
      ));
    }
  }
  return sg = {
    fetch: pe,
    Fetch: ge,
    fetching: UA,
    finalizeAndReportTiming: We
  }, sg;
}
var ng, eu;
function GB() {
  return eu || (eu = 1, ng = {
    kState: Symbol("FileReader state"),
    kResult: Symbol("FileReader result"),
    kError: Symbol("FileReader error"),
    kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
    kEvents: Symbol("FileReader events"),
    kAborted: Symbol("FileReader aborted")
  }), ng;
}
var ig, Au;
function IR() {
  if (Au)
    return ig;
  Au = 1;
  const { webidl: t } = jA(), e = Symbol("ProgressEvent state");
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
  ]), ig = {
    ProgressEvent: A
  }, ig;
}
var og, tu;
function dR() {
  if (tu)
    return og;
  tu = 1;
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
  return og = {
    getEncoding: t
  }, og;
}
var ag, ru;
function fR() {
  if (ru)
    return ag;
  ru = 1;
  const {
    kState: t,
    kError: e,
    kResult: A,
    kAborted: r,
    kLastProgressEventFired: s
  } = GB(), { ProgressEvent: n } = IR(), { getEncoding: i } = dR(), { DOMException: o } = ys(), { serializeAMimeType: a, parseMIMEType: g } = qt(), { types: c } = Vt, { StringDecoder: E } = Cd, { btoa: h } = ws, Q = {
    enumerable: !0,
    writable: !1,
    configurable: !1
  };
  function B(w, p, m, D) {
    if (w[t] === "loading")
      throw new o("Invalid state", "InvalidStateError");
    w[t] = "loading", w[A] = null, w[e] = null;
    const G = p.stream().getReader(), _ = [];
    let Y = G.read(), te = !0;
    (async () => {
      for (; !w[r]; )
        try {
          const { done: ee, value: Ee } = await Y;
          if (te && !w[r] && queueMicrotask(() => {
            u("loadstart", w);
          }), te = !1, !ee && c.isUint8Array(Ee))
            _.push(Ee), (w[s] === void 0 || Date.now() - w[s] >= 50) && !w[r] && (w[s] = Date.now(), queueMicrotask(() => {
              u("progress", w);
            })), Y = G.read();
          else if (ee) {
            queueMicrotask(() => {
              w[t] = "done";
              try {
                const q = I(_, m, p.type, D);
                if (w[r])
                  return;
                w[A] = q, u("load", w);
              } catch (q) {
                w[e] = q, u("error", w);
              }
              w[t] !== "loading" && u("loadend", w);
            });
            break;
          }
        } catch (ee) {
          if (w[r])
            return;
          queueMicrotask(() => {
            w[t] = "done", w[e] = ee, u("error", w), w[t] !== "loading" && u("loadend", w);
          });
          break;
        }
    })();
  }
  function u(w, p) {
    const m = new n(w, {
      bubbles: !1,
      cancelable: !1
    });
    p.dispatchEvent(m);
  }
  function I(w, p, m, D) {
    switch (p) {
      case "DataURL": {
        let b = "data:";
        const G = g(m || "application/octet-stream");
        G !== "failure" && (b += a(G)), b += ";base64,";
        const _ = new E("latin1");
        for (const Y of w)
          b += h(_.write(Y));
        return b += h(_.end()), b;
      }
      case "Text": {
        let b = "failure";
        if (D && (b = i(D)), b === "failure" && m) {
          const G = g(m);
          G !== "failure" && (b = i(G.parameters.get("charset")));
        }
        return b === "failure" && (b = "UTF-8"), f(w, b);
      }
      case "ArrayBuffer":
        return d(w).buffer;
      case "BinaryString": {
        let b = "";
        const G = new E("latin1");
        for (const _ of w)
          b += G.write(_);
        return b += G.end(), b;
      }
    }
  }
  function f(w, p) {
    const m = d(w), D = C(m);
    let b = 0;
    D !== null && (p = D, b = D === "UTF-8" ? 3 : 2);
    const G = m.slice(b);
    return new TextDecoder(p).decode(G);
  }
  function C(w) {
    const [p, m, D] = w;
    return p === 239 && m === 187 && D === 191 ? "UTF-8" : p === 254 && m === 255 ? "UTF-16BE" : p === 255 && m === 254 ? "UTF-16LE" : null;
  }
  function d(w) {
    const p = w.reduce((D, b) => D + b.byteLength, 0);
    let m = 0;
    return w.reduce((D, b) => (D.set(b, m), m += b.byteLength, D), new Uint8Array(p));
  }
  return ag = {
    staticPropertyDescriptors: Q,
    readOperation: B,
    fireAProgressEvent: u
  }, ag;
}
var cg, su;
function pR() {
  if (su)
    return cg;
  su = 1;
  const {
    staticPropertyDescriptors: t,
    readOperation: e,
    fireAProgressEvent: A
  } = fR(), {
    kState: r,
    kError: s,
    kResult: n,
    kEvents: i,
    kAborted: o
  } = GB(), { webidl: a } = jA(), { kEnumerableProperty: g } = me;
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
    readAsText(h, Q = void 0) {
      a.brandCheck(this, c), a.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), h = a.converters.Blob(h, { strict: !1 }), Q !== void 0 && (Q = a.converters.DOMString(Q)), e(this, h, "Text", Q);
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
  }), cg = {
    FileReader: c
  }, cg;
}
var gg, nu;
function xl() {
  return nu || (nu = 1, gg = {
    kConstruct: Le.kConstruct
  }), gg;
}
var lg, iu;
function mR() {
  if (iu)
    return lg;
  iu = 1;
  const t = Xe, { URLSerializer: e } = qt(), { isValidHeaderName: A } = kt();
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
  return lg = {
    urlEquals: r,
    fieldValues: s
  }, lg;
}
var hg, ou;
function wR() {
  var m, D, Oo, G, Ys, Y, YB;
  if (ou)
    return hg;
  ou = 1;
  const { kConstruct: t } = xl(), { urlEquals: e, fieldValues: A } = mR(), { kEnumerableProperty: r, isDisturbed: s } = me, { kHeadersList: n } = Le, { webidl: i } = jA(), { Response: o, cloneResponse: a } = Gl(), { Request: g } = Ta(), { kState: c, kHeaders: E, kGuard: h, kRealm: Q } = Pr(), { fetching: B } = Yl(), { urlIsHttpHttpsScheme: u, createDeferredPromise: I, readAllBytes: f } = kt(), C = Xe, { getGlobalDispatcher: d } = ji, ee = class ee {
    constructor() {
      /**
       * @see https://w3c.github.io/ServiceWorker/#batch-cache-operations-algorithm
       * @param {CacheBatchOperation[]} operations
       * @returns {requestResponseList}
       */
      T(this, D);
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
      T(this, Y);
      /**
       * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-request-response-list
       * @type {requestResponseList}
       */
      T(this, m, void 0);
      arguments[0] !== t && i.illegalConstructor(), y(this, m, arguments[1]);
    }
    async match(q, $ = {}) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), q = i.converters.RequestInfo(q), $ = i.converters.CacheQueryOptions($);
      const ne = await this.matchAll(q, $);
      if (ne.length !== 0)
        return ne[0];
    }
    async matchAll(q = void 0, $ = {}) {
      var k;
      i.brandCheck(this, ee), q !== void 0 && (q = i.converters.RequestInfo(q)), $ = i.converters.CacheQueryOptions($);
      let ne = null;
      if (q !== void 0)
        if (q instanceof g) {
          if (ne = q[c], ne.method !== "GET" && !$.ignoreMethod)
            return [];
        } else
          typeof q == "string" && (ne = new g(q)[c]);
      const se = [];
      if (q === void 0)
        for (const V of l(this, m))
          se.push(V[1]);
      else {
        const V = x(this, G, Ys).call(this, ne, $);
        for (const U of V)
          se.push(U[1]);
      }
      const K = [];
      for (const V of se) {
        const U = new o(((k = V.body) == null ? void 0 : k.source) ?? null), F = U[c].body;
        U[c] = V, U[c].body = F, U[E][n] = V.headersList, U[E][h] = "immutable", K.push(U);
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
      const $ = [], ne = [];
      for (const L of q) {
        if (typeof L == "string")
          continue;
        const M = L[c];
        if (!u(M.url) || M.method !== "GET")
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme when method is not GET."
          });
      }
      const se = [];
      for (const L of q) {
        const M = new g(L)[c];
        if (!u(M.url))
          throw i.errors.exception({
            header: "Cache.addAll",
            message: "Expected http/s scheme."
          });
        M.initiator = "fetch", M.destination = "subresource", ne.push(M);
        const P = I();
        se.push(B({
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
              for (const J of Z)
                if (J === "*") {
                  P.reject(i.errors.exception({
                    header: "Cache.addAll",
                    message: "invalid vary field value"
                  }));
                  for (const oe of se)
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
      const k = await Promise.all($), V = [];
      let U = 0;
      for (const L of k) {
        const M = {
          type: "put",
          // 7.3.2
          request: ne[U],
          // 7.3.3
          response: L
          // 7.3.4
        };
        V.push(M), U++;
      }
      const F = I();
      let S = null;
      try {
        x(this, D, Oo).call(this, V);
      } catch (L) {
        S = L;
      }
      return queueMicrotask(() => {
        S === null ? F.resolve(void 0) : F.reject(S);
      }), F.promise;
    }
    async put(q, $) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), q = i.converters.RequestInfo(q), $ = i.converters.Response($);
      let ne = null;
      if (q instanceof g ? ne = q[c] : ne = new g(q)[c], !u(ne.url) || ne.method !== "GET")
        throw i.errors.exception({
          header: "Cache.put",
          message: "Expected an http/s scheme when method is not GET"
        });
      const se = $[c];
      if (se.status === 206)
        throw i.errors.exception({
          header: "Cache.put",
          message: "Got 206 status"
        });
      if (se.headersList.contains("vary")) {
        const M = A(se.headersList.get("vary"));
        for (const P of M)
          if (P === "*")
            throw i.errors.exception({
              header: "Cache.put",
              message: "Got * vary field value"
            });
      }
      if (se.body && (s(se.body.stream) || se.body.stream.locked))
        throw i.errors.exception({
          header: "Cache.put",
          message: "Response body is locked or disturbed"
        });
      const K = a(se), k = I();
      if (se.body != null) {
        const P = se.body.stream.getReader();
        f(P).then(k.resolve, k.reject);
      } else
        k.resolve(void 0);
      const V = [], U = {
        type: "put",
        // 14.
        request: ne,
        // 15.
        response: K
        // 16.
      };
      V.push(U);
      const F = await k.promise;
      K.body != null && (K.body.source = F);
      const S = I();
      let L = null;
      try {
        x(this, D, Oo).call(this, V);
      } catch (M) {
        L = M;
      }
      return queueMicrotask(() => {
        L === null ? S.resolve() : S.reject(L);
      }), S.promise;
    }
    async delete(q, $ = {}) {
      i.brandCheck(this, ee), i.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), q = i.converters.RequestInfo(q), $ = i.converters.CacheQueryOptions($);
      let ne = null;
      if (q instanceof g) {
        if (ne = q[c], ne.method !== "GET" && !$.ignoreMethod)
          return !1;
      } else
        C(typeof q == "string"), ne = new g(q)[c];
      const se = [], K = {
        type: "delete",
        request: ne,
        options: $
      };
      se.push(K);
      const k = I();
      let V = null, U;
      try {
        U = x(this, D, Oo).call(this, se);
      } catch (F) {
        V = F;
      }
      return queueMicrotask(() => {
        V === null ? k.resolve(!!(U != null && U.length)) : k.reject(V);
      }), k.promise;
    }
    /**
     * @see https://w3c.github.io/ServiceWorker/#dom-cache-keys
     * @param {any} request
     * @param {import('../../types/cache').CacheQueryOptions} options
     * @returns {readonly Request[]}
     */
    async keys(q = void 0, $ = {}) {
      i.brandCheck(this, ee), q !== void 0 && (q = i.converters.RequestInfo(q)), $ = i.converters.CacheQueryOptions($);
      let ne = null;
      if (q !== void 0)
        if (q instanceof g) {
          if (ne = q[c], ne.method !== "GET" && !$.ignoreMethod)
            return [];
        } else
          typeof q == "string" && (ne = new g(q)[c]);
      const se = I(), K = [];
      if (q === void 0)
        for (const k of l(this, m))
          K.push(k[0]);
      else {
        const k = x(this, G, Ys).call(this, ne, $);
        for (const V of k)
          K.push(V[0]);
      }
      return queueMicrotask(() => {
        const k = [];
        for (const V of K) {
          const U = new g("https://a");
          U[c] = V, U[E][n] = V.headersList, U[E][h] = "immutable", U[Q] = V.client, k.push(U);
        }
        se.resolve(Object.freeze(k));
      }), se.promise;
    }
  };
  m = new WeakMap(), D = new WeakSet(), Oo = function(q) {
    const $ = l(this, m), ne = [...$], se = [], K = [];
    try {
      for (const k of q) {
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
        if (x(this, G, Ys).call(this, k.request, k.options, se).length)
          throw new DOMException("???", "InvalidStateError");
        let V;
        if (k.type === "delete") {
          if (V = x(this, G, Ys).call(this, k.request, k.options), V.length === 0)
            return [];
          for (const U of V) {
            const F = $.indexOf(U);
            C(F !== -1), $.splice(F, 1);
          }
        } else if (k.type === "put") {
          if (k.response == null)
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "put operation should have an associated response"
            });
          const U = k.request;
          if (!u(U.url))
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "expected http or https scheme"
            });
          if (U.method !== "GET")
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "not get method"
            });
          if (k.options != null)
            throw i.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "options must not be defined"
            });
          V = x(this, G, Ys).call(this, k.request);
          for (const F of V) {
            const S = $.indexOf(F);
            C(S !== -1), $.splice(S, 1);
          }
          $.push([k.request, k.response]), se.push([k.request, k.response]);
        }
        K.push([k.request, k.response]);
      }
      return K;
    } catch (k) {
      throw l(this, m).length = 0, y(this, m, ne), k;
    }
  }, G = new WeakSet(), Ys = function(q, $, ne) {
    const se = [], K = ne ?? l(this, m);
    for (const k of K) {
      const [V, U] = k;
      x(this, Y, YB).call(this, q, V, U, $) && se.push(k);
    }
    return se;
  }, Y = new WeakSet(), YB = function(q, $, ne = null, se) {
    const K = new URL(q.url), k = new URL($.url);
    if (se != null && se.ignoreSearch && (k.search = "", K.search = ""), !e(K, k, !0))
      return !1;
    if (ne == null || se != null && se.ignoreVary || !ne.headersList.contains("vary"))
      return !0;
    const V = A(ne.headersList.get("vary"));
    for (const U of V) {
      if (U === "*")
        return !1;
      const F = $.headersList.get(U), S = q.headersList.get(U);
      if (F !== S)
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
  ), hg = {
    Cache: w
  }, hg;
}
var Eg, au;
function yR() {
  var n;
  if (au)
    return Eg;
  au = 1;
  const { kConstruct: t } = xl(), { Cache: e } = wR(), { webidl: A } = jA(), { kEnumerableProperty: r } = me, i = class i {
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
  }), Eg = {
    CacheStorage: s
  }, Eg;
}
var ug, cu;
function RR() {
  return cu || (cu = 1, ug = {
    maxAttributeValueSize: 1024,
    maxNameValuePairSize: 4096
  }), ug;
}
var Qg, gu;
function xB() {
  if (gu)
    return Qg;
  gu = 1;
  const t = Xe, { kHeadersList: e } = Le;
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
  function o(h) {
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
    ], u = Q[h.getUTCDay()], I = h.getUTCDate().toString().padStart(2, "0"), f = B[h.getUTCMonth()], C = h.getUTCFullYear(), d = h.getUTCHours().toString().padStart(2, "0"), w = h.getUTCMinutes().toString().padStart(2, "0"), p = h.getUTCSeconds().toString().padStart(2, "0");
    return `${u}, ${I} ${f} ${C} ${d}:${w}:${p} GMT`;
  }
  function a(h) {
    if (h < 0)
      throw new Error("Invalid cookie max-age");
  }
  function g(h) {
    if (h.name.length === 0)
      return null;
    r(h.name), s(h.value);
    const Q = [`${h.name}=${h.value}`];
    h.name.startsWith("__Secure-") && (h.secure = !0), h.name.startsWith("__Host-") && (h.secure = !0, h.domain = null, h.path = "/"), h.secure && Q.push("Secure"), h.httpOnly && Q.push("HttpOnly"), typeof h.maxAge == "number" && (a(h.maxAge), Q.push(`Max-Age=${h.maxAge}`)), h.domain && (i(h.domain), Q.push(`Domain=${h.domain}`)), h.path && (n(h.path), Q.push(`Path=${h.path}`)), h.expires && h.expires.toString() !== "Invalid Date" && Q.push(`Expires=${o(h.expires)}`), h.sameSite && Q.push(`SameSite=${h.sameSite}`);
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
  return Qg = {
    isCTLExcludingHtab: A,
    stringify: g,
    getHeadersList: E
  }, Qg;
}
var Cg, lu;
function DR() {
  if (lu)
    return Cg;
  lu = 1;
  const { maxNameValuePairSize: t, maxAttributeValueSize: e } = RR(), { isCTLExcludingHtab: A } = xB(), { collectASequenceOfCodePointsFast: r } = qt(), s = Xe;
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
      const Q = { position: 0 };
      c = r(
        "=",
        g,
        Q
      ), E = g.slice(Q.position + 1);
    } else
      c = g;
    if (c = c.trim(), E = E.trim(), E.length > e)
      return i(o, a);
    const h = c.toLowerCase();
    if (h === "expires") {
      const Q = new Date(E);
      a.expires = Q;
    } else if (h === "max-age") {
      const Q = E.charCodeAt(0);
      if ((Q < 48 || Q > 57) && E[0] !== "-" || !/^\d+$/.test(E))
        return i(o, a);
      const B = Number(E);
      a.maxAge = B;
    } else if (h === "domain") {
      let Q = E;
      Q[0] === "." && (Q = Q.slice(1)), Q = Q.toLowerCase(), a.domain = Q;
    } else if (h === "path") {
      let Q = "";
      E.length === 0 || E[0] !== "/" ? Q = "/" : Q = E, a.path = Q;
    } else if (h === "secure")
      a.secure = !0;
    else if (h === "httponly")
      a.httpOnly = !0;
    else if (h === "samesite") {
      let Q = "Default";
      const B = E.toLowerCase();
      B.includes("none") && (Q = "None"), B.includes("strict") && (Q = "Strict"), B.includes("lax") && (Q = "Lax"), a.sameSite = Q;
    } else
      a.unparsed ?? (a.unparsed = []), a.unparsed.push(`${c}=${E}`);
    return i(o, a);
  }
  return Cg = {
    parseSetCookie: n,
    parseUnparsedAttributes: i
  }, Cg;
}
var Bg, hu;
function bR() {
  if (hu)
    return Bg;
  hu = 1;
  const { parseSetCookie: t } = DR(), { stringify: e, getHeadersList: A } = xB(), { webidl: r } = jA(), { Headers: s } = pn();
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
  ]), Bg = {
    getCookies: n,
    deleteCookie: i,
    getSetCookies: o,
    setCookie: a
  }, Bg;
}
var Ig, Eu;
function zi() {
  if (Eu)
    return Ig;
  Eu = 1;
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
  return Ig = {
    uid: t,
    staticPropertyDescriptors: e,
    states: A,
    opcodes: r,
    maxUnsigned16Bit: s,
    parserStates: n,
    emptyBuffer: i
  }, Ig;
}
var dg, uu;
function Ua() {
  return uu || (uu = 1, dg = {
    kWebSocketURL: Symbol("url"),
    kReadyState: Symbol("ready state"),
    kController: Symbol("controller"),
    kResponse: Symbol("response"),
    kBinaryType: Symbol("binary type"),
    kSentClose: Symbol("sent close"),
    kReceivedClose: Symbol("received close"),
    kByteParser: Symbol("byte parser")
  }), dg;
}
var fg, Qu;
function JB() {
  var o, g, E;
  if (Qu)
    return fg;
  Qu = 1;
  const { webidl: t } = jA(), { kEnumerableProperty: e } = me, { MessagePort: A } = uQ, a = class a extends Event {
    constructor(u, I = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), u = t.converters.DOMString(u), I = t.converters.MessageEventInit(I);
      super(u, I);
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
    initMessageEvent(u, I = !1, f = !1, C = null, d = "", w = "", p = null, m = []) {
      return t.brandCheck(this, a), t.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new a(u, {
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
    constructor(u, I = {}) {
      t.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), u = t.converters.DOMString(u), I = t.converters.CloseEventInit(I);
      super(u, I);
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
    constructor(u, I) {
      t.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" });
      super(u, I);
      T(this, E, void 0);
      u = t.converters.DOMString(u), I = t.converters.ErrorEventInit(I ?? {}), y(this, E, I);
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
  ]), fg = {
    MessageEvent: r,
    CloseEvent: s,
    ErrorEvent: n
  }, fg;
}
var pg, Cu;
function Jl() {
  if (Cu)
    return pg;
  Cu = 1;
  const { kReadyState: t, kController: e, kResponse: A, kBinaryType: r, kWebSocketURL: s } = Ua(), { states: n, opcodes: i } = zi(), { MessageEvent: o, ErrorEvent: a } = JB();
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
  function Q(f, C, d) {
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
  function u(f) {
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
  return pg = {
    isEstablished: g,
    isClosing: c,
    isClosed: E,
    fireEvent: h,
    isValidSubprotocol: B,
    isValidStatusCode: u,
    failWebsocketConnection: I,
    websocketMessageReceived: Q
  }, pg;
}
var mg, Bu;
function kR() {
  if (Bu)
    return mg;
  Bu = 1;
  const t = BQ, { uid: e, states: A } = zi(), {
    kReadyState: r,
    kSentClose: s,
    kByteParser: n,
    kReceivedClose: i
  } = Ua(), { fireEvent: o, failWebsocketConnection: a } = Jl(), { CloseEvent: g } = JB(), { makeRequest: c } = Ta(), { fetching: E } = Yl(), { Headers: h } = pn(), { getGlobalDispatcher: Q } = ji, { kHeadersList: B } = Le, u = {};
  u.open = t.channel("undici:websocket:open"), u.close = t.channel("undici:websocket:close"), u.socketError = t.channel("undici:websocket:socket_error");
  let I;
  try {
    I = require("crypto");
  } catch {
  }
  function f(p, m, D, b, G) {
    const _ = p;
    _.protocol = p.protocol === "ws:" ? "http:" : "https:";
    const Y = c({
      urlList: [_],
      serviceWorkers: "none",
      referrer: "no-referrer",
      mode: "websocket",
      credentials: "include",
      cache: "no-store",
      redirect: "error"
    });
    if (G.headers) {
      const q = new h(G.headers)[B];
      Y.headersList = q;
    }
    const te = I.randomBytes(16).toString("base64");
    Y.headersList.append("sec-websocket-key", te), Y.headersList.append("sec-websocket-version", "13");
    for (const q of m)
      Y.headersList.append("sec-websocket-protocol", q);
    const ee = "";
    return E({
      request: Y,
      useParallelQueue: !0,
      dispatcher: G.dispatcher ?? Q(),
      processResponse(q) {
        var k, V;
        if (q.type === "error" || q.status !== 101) {
          a(D, "Received network error or non-101 status code.");
          return;
        }
        if (m.length !== 0 && !q.headersList.get("Sec-WebSocket-Protocol")) {
          a(D, "Server did not respond with sent protocols.");
          return;
        }
        if (((k = q.headersList.get("Upgrade")) == null ? void 0 : k.toLowerCase()) !== "websocket") {
          a(D, 'Server did not set Upgrade header to "websocket".');
          return;
        }
        if (((V = q.headersList.get("Connection")) == null ? void 0 : V.toLowerCase()) !== "upgrade") {
          a(D, 'Server did not set Connection header to "upgrade".');
          return;
        }
        const $ = q.headersList.get("Sec-WebSocket-Accept"), ne = I.createHash("sha1").update(te + e).digest("base64");
        if ($ !== ne) {
          a(D, "Incorrect hash received in Sec-WebSocket-Accept header.");
          return;
        }
        const se = q.headersList.get("Sec-WebSocket-Extensions");
        if (se !== null && se !== ee) {
          a(D, "Received different permessage-deflate than the one set.");
          return;
        }
        const K = q.headersList.get("Sec-WebSocket-Protocol");
        if (K !== null && K !== Y.headersList.get("Sec-WebSocket-Protocol")) {
          a(D, "Protocol was not set in the opening handshake.");
          return;
        }
        q.socket.on("data", C), q.socket.on("close", d), q.socket.on("error", w), u.open.hasSubscribers && u.open.publish({
          address: q.socket.address(),
          protocol: K,
          extensions: se
        }), b(q);
      }
    });
  }
  function C(p) {
    this.ws[n].write(p) || this.pause();
  }
  function d() {
    const { ws: p } = this, m = p[s] && p[i];
    let D = 1005, b = "";
    const G = p[n].closingInfo;
    G ? (D = G.code ?? 1005, b = G.reason) : p[s] || (D = 1006), p[r] = A.CLOSED, o("close", p, g, {
      wasClean: m,
      code: D,
      reason: b
    }), u.close.hasSubscribers && u.close.publish({
      websocket: p,
      code: D,
      reason: b
    });
  }
  function w(p) {
    const { ws: m } = this;
    m[r] = A.CLOSING, u.socketError.hasSubscribers && u.socketError.publish(p), this.destroy();
  }
  return mg = {
    establishWebSocketConnection: f
  }, mg;
}
var wg, Iu;
function OB() {
  if (Iu)
    return wg;
  Iu = 1;
  const { maxUnsigned16Bit: t } = zi();
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
  return wg = {
    WebsocketFrameSend: A
  }, wg;
}
var yg, du;
function SR() {
  var I, f, C, d, w;
  if (du)
    return yg;
  du = 1;
  const { Writable: t } = Wt, e = BQ, { parserStates: A, opcodes: r, states: s, emptyBuffer: n } = zi(), { kReadyState: i, kSentClose: o, kResponse: a, kReceivedClose: g } = Ua(), { isValidStatusCode: c, failWebsocketConnection: E, websocketMessageReceived: h } = Jl(), { WebsocketFrameSend: Q } = OB(), B = {};
  B.ping = e.channel("undici:websocket:ping"), B.pong = e.channel("undici:websocket:pong");
  class u extends t {
    constructor(D) {
      super();
      T(this, I, []);
      T(this, f, 0);
      T(this, C, A.INFO);
      T(this, d, {});
      T(this, w, []);
      this.ws = D;
    }
    /**
     * @param {Buffer} chunk
     * @param {() => void} callback
     */
    _write(D, b, G) {
      l(this, I).push(D), y(this, f, l(this, f) + D.length), this.run(G);
    }
    /**
     * Runs whenever a new chunk is received.
     * Callback is called whenever there are no more chunks buffering,
     * or not enough bytes are buffered to parse.
     */
    run(D) {
      var b;
      for (; ; ) {
        if (l(this, C) === A.INFO) {
          if (l(this, f) < 2)
            return D();
          const G = this.consume(2);
          if (l(this, d).fin = (G[0] & 128) !== 0, l(this, d).opcode = G[0] & 15, (b = l(this, d)).originalOpcode ?? (b.originalOpcode = l(this, d).opcode), l(this, d).fragmented = !l(this, d).fin && l(this, d).opcode !== r.CONTINUATION, l(this, d).fragmented && l(this, d).opcode !== r.BINARY && l(this, d).opcode !== r.TEXT) {
            E(this.ws, "Invalid frame type was fragmented.");
            return;
          }
          const _ = G[1] & 127;
          if (_ <= 125 ? (l(this, d).payloadLength = _, y(this, C, A.READ_DATA)) : _ === 126 ? y(this, C, A.PAYLOADLENGTH_16) : _ === 127 && y(this, C, A.PAYLOADLENGTH_64), l(this, d).fragmented && _ > 125) {
            E(this.ws, "Fragmented frame exceeded 125 bytes.");
            return;
          } else if ((l(this, d).opcode === r.PING || l(this, d).opcode === r.PONG || l(this, d).opcode === r.CLOSE) && _ > 125) {
            E(this.ws, "Payload length for control frame exceeded 125 bytes.");
            return;
          } else if (l(this, d).opcode === r.CLOSE) {
            if (_ === 1) {
              E(this.ws, "Received close frame with a 1-byte body.");
              return;
            }
            const Y = this.consume(_);
            if (l(this, d).closeInfo = this.parseCloseBody(!1, Y), !this.ws[o]) {
              const te = Buffer.allocUnsafe(2);
              te.writeUInt16BE(l(this, d).closeInfo.code, 0);
              const ee = new Q(te);
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
            const Y = this.consume(_);
            if (!this.ws[g]) {
              const te = new Q(Y);
              this.ws[a].socket.write(te.createFrame(r.PONG)), B.ping.hasSubscribers && B.ping.publish({
                payload: Y
              });
            }
            if (y(this, C, A.INFO), l(this, f) > 0)
              continue;
            D();
            return;
          } else if (l(this, d).opcode === r.PONG) {
            const Y = this.consume(_);
            if (B.pong.hasSubscribers && B.pong.publish({
              payload: Y
            }), l(this, f) > 0)
              continue;
            D();
            return;
          }
        } else if (l(this, C) === A.PAYLOADLENGTH_16) {
          if (l(this, f) < 2)
            return D();
          const G = this.consume(2);
          l(this, d).payloadLength = G.readUInt16BE(0), y(this, C, A.READ_DATA);
        } else if (l(this, C) === A.PAYLOADLENGTH_64) {
          if (l(this, f) < 8)
            return D();
          const G = this.consume(8), _ = G.readUInt32BE(0);
          if (_ > 2 ** 31 - 1) {
            E(this.ws, "Received payload length > 2^31 bytes.");
            return;
          }
          const Y = G.readUInt32BE(4);
          l(this, d).payloadLength = (_ << 8) + Y, y(this, C, A.READ_DATA);
        } else if (l(this, C) === A.READ_DATA) {
          if (l(this, f) < l(this, d).payloadLength)
            return D();
          if (l(this, f) >= l(this, d).payloadLength) {
            const G = this.consume(l(this, d).payloadLength);
            if (l(this, w).push(G), !l(this, d).fragmented || l(this, d).fin && l(this, d).opcode === r.CONTINUATION) {
              const _ = Buffer.concat(l(this, w));
              h(this.ws, l(this, d).originalOpcode, _), y(this, d, {}), l(this, w).length = 0;
            }
            y(this, C, A.INFO);
          }
        }
        if (!(l(this, f) > 0)) {
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
      if (D > l(this, f))
        return null;
      if (D === 0)
        return n;
      if (l(this, I)[0].length === D)
        return y(this, f, l(this, f) - l(this, I)[0].length), l(this, I).shift();
      const b = Buffer.allocUnsafe(D);
      let G = 0;
      for (; G !== D; ) {
        const _ = l(this, I)[0], { length: Y } = _;
        if (Y + G === D) {
          b.set(l(this, I).shift(), G);
          break;
        } else if (Y + G > D) {
          b.set(_.subarray(0, D - G), G), l(this, I)[0] = _.subarray(D - G);
          break;
        } else
          b.set(l(this, I).shift(), G), G += _.length;
      }
      return y(this, f, l(this, f) - D), b;
    }
    parseCloseBody(D, b) {
      let G;
      if (b.length >= 2 && (G = b.readUInt16BE(0)), D)
        return c(G) ? { code: G } : null;
      let _ = b.subarray(2);
      if (_[0] === 239 && _[1] === 187 && _[2] === 191 && (_ = _.subarray(3)), G !== void 0 && !c(G))
        return null;
      try {
        _ = new TextDecoder("utf-8", { fatal: !0 }).decode(_);
      } catch {
        return null;
      }
      return { code: G, reason: _ };
    }
    get closingInfo() {
      return l(this, d).closeInfo;
    }
  }
  return I = new WeakMap(), f = new WeakMap(), C = new WeakMap(), d = new WeakMap(), w = new WeakMap(), yg = {
    ByteParser: u
  }, yg;
}
var Rg, fu;
function FR() {
  var ee, Ee, q, $, ne, _B;
  if (fu)
    return Rg;
  fu = 1;
  const { webidl: t } = jA(), { DOMException: e } = ys(), { URLSerializer: A } = qt(), { getGlobalOrigin: r } = Hi(), { staticPropertyDescriptors: s, states: n, opcodes: i, emptyBuffer: o } = zi(), {
    kWebSocketURL: a,
    kReadyState: g,
    kController: c,
    kBinaryType: E,
    kResponse: h,
    kSentClose: Q,
    kByteParser: B
  } = Ua(), { isEstablished: u, isClosing: I, isValidSubprotocol: f, failWebsocketConnection: C, fireEvent: d } = Jl(), { establishWebSocketConnection: w } = kR(), { WebsocketFrameSend: p } = OB(), { ByteParser: m } = SR(), { kEnumerableProperty: D, isBlobLike: b } = me, { getGlobalDispatcher: G } = ji, { types: _ } = Vt;
  let Y = !1;
  const K = class K extends EventTarget {
    /**
     * @param {string} url
     * @param {string|string[]} protocols
     */
    constructor(U, F = []) {
      super();
      /**
       * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
       */
      T(this, ne);
      T(this, ee, {
        open: null,
        error: null,
        close: null,
        message: null
      });
      T(this, Ee, 0);
      T(this, q, "");
      T(this, $, "");
      t.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), Y || (Y = !0, process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
        code: "UNDICI-WS"
      }));
      const S = t.converters["DOMString or sequence<DOMString> or WebSocketInit"](F);
      U = t.converters.USVString(U), F = S.protocols;
      const L = r();
      let M;
      try {
        M = new URL(U, L);
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
      if (typeof F == "string" && (F = [F]), F.length !== new Set(F.map((P) => P.toLowerCase())).size)
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      if (F.length > 0 && !F.every((P) => f(P)))
        throw new e("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      this[a] = new URL(M.href), this[c] = w(
        M,
        F,
        this,
        (P) => x(this, ne, _B).call(this, P),
        S
      ), this[g] = K.CONNECTING, this[E] = "blob";
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-close
     * @param {number|undefined} code
     * @param {string|undefined} reason
     */
    close(U = void 0, F = void 0) {
      if (t.brandCheck(this, K), U !== void 0 && (U = t.converters["unsigned short"](U, { clamp: !0 })), F !== void 0 && (F = t.converters.USVString(F)), U !== void 0 && U !== 1e3 && (U < 3e3 || U > 4999))
        throw new e("invalid code", "InvalidAccessError");
      let S = 0;
      if (F !== void 0 && (S = Buffer.byteLength(F), S > 123))
        throw new e(
          `Reason must be less than 123 bytes; received ${S}`,
          "SyntaxError"
        );
      if (!(this[g] === K.CLOSING || this[g] === K.CLOSED))
        if (!u(this))
          C(this, "Connection was closed before it was established."), this[g] = K.CLOSING;
        else if (I(this))
          this[g] = K.CLOSING;
        else {
          const L = new p();
          U !== void 0 && F === void 0 ? (L.frameData = Buffer.allocUnsafe(2), L.frameData.writeUInt16BE(U, 0)) : U !== void 0 && F !== void 0 ? (L.frameData = Buffer.allocUnsafe(2 + S), L.frameData.writeUInt16BE(U, 0), L.frameData.write(F, 2, "utf-8")) : L.frameData = o, this[h].socket.write(L.createFrame(i.CLOSE), (P) => {
            P || (this[Q] = !0);
          }), this[g] = n.CLOSING;
        }
    }
    /**
     * @see https://websockets.spec.whatwg.org/#dom-websocket-send
     * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
     */
    send(U) {
      if (t.brandCheck(this, K), t.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), U = t.converters.WebSocketSendData(U), this[g] === K.CONNECTING)
        throw new e("Sent before connected.", "InvalidStateError");
      if (!u(this) || I(this))
        return;
      const F = this[h].socket;
      if (typeof U == "string") {
        const S = Buffer.from(U), M = new p(S).createFrame(i.TEXT);
        y(this, Ee, l(this, Ee) + S.byteLength), F.write(M, () => {
          y(this, Ee, l(this, Ee) - S.byteLength);
        });
      } else if (_.isArrayBuffer(U)) {
        const S = Buffer.from(U), M = new p(S).createFrame(i.BINARY);
        y(this, Ee, l(this, Ee) + S.byteLength), F.write(M, () => {
          y(this, Ee, l(this, Ee) - S.byteLength);
        });
      } else if (ArrayBuffer.isView(U)) {
        const S = Buffer.from(U, U.byteOffset, U.byteLength), M = new p(S).createFrame(i.BINARY);
        y(this, Ee, l(this, Ee) + S.byteLength), F.write(M, () => {
          y(this, Ee, l(this, Ee) - S.byteLength);
        });
      } else if (b(U)) {
        const S = new p();
        U.arrayBuffer().then((L) => {
          const M = Buffer.from(L);
          S.frameData = M;
          const P = S.createFrame(i.BINARY);
          y(this, Ee, l(this, Ee) + M.byteLength), F.write(P, () => {
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
    set onopen(U) {
      t.brandCheck(this, K), l(this, ee).open && this.removeEventListener("open", l(this, ee).open), typeof U == "function" ? (l(this, ee).open = U, this.addEventListener("open", U)) : l(this, ee).open = null;
    }
    get onerror() {
      return t.brandCheck(this, K), l(this, ee).error;
    }
    set onerror(U) {
      t.brandCheck(this, K), l(this, ee).error && this.removeEventListener("error", l(this, ee).error), typeof U == "function" ? (l(this, ee).error = U, this.addEventListener("error", U)) : l(this, ee).error = null;
    }
    get onclose() {
      return t.brandCheck(this, K), l(this, ee).close;
    }
    set onclose(U) {
      t.brandCheck(this, K), l(this, ee).close && this.removeEventListener("close", l(this, ee).close), typeof U == "function" ? (l(this, ee).close = U, this.addEventListener("close", U)) : l(this, ee).close = null;
    }
    get onmessage() {
      return t.brandCheck(this, K), l(this, ee).message;
    }
    set onmessage(U) {
      t.brandCheck(this, K), l(this, ee).message && this.removeEventListener("message", l(this, ee).message), typeof U == "function" ? (l(this, ee).message = U, this.addEventListener("message", U)) : l(this, ee).message = null;
    }
    get binaryType() {
      return t.brandCheck(this, K), this[E];
    }
    set binaryType(U) {
      t.brandCheck(this, K), U !== "blob" && U !== "arraybuffer" ? this[E] = "blob" : this[E] = U;
    }
  };
  ee = new WeakMap(), Ee = new WeakMap(), q = new WeakMap(), $ = new WeakMap(), ne = new WeakSet(), _B = function(U) {
    this[h] = U;
    const F = new m(this);
    F.on("drain", function() {
      this.ws[h].socket.resume();
    }), U.socket.ws = this, this[B] = F, this[g] = n.OPEN;
    const S = U.headersList.get("sec-websocket-extensions");
    S !== null && y(this, $, S);
    const L = U.headersList.get("sec-websocket-protocol");
    L !== null && y(this, q, L), d("open", this);
  };
  let te = K;
  return te.CONNECTING = te.prototype.CONNECTING = n.CONNECTING, te.OPEN = te.prototype.OPEN = n.OPEN, te.CLOSING = te.prototype.CLOSING = n.CLOSING, te.CLOSED = te.prototype.CLOSED = n.CLOSED, Object.defineProperties(te.prototype, {
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
  }), Object.defineProperties(te, {
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
        return G();
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
      if (b(k))
        return t.converters.Blob(k, { strict: !1 });
      if (ArrayBuffer.isView(k) || _.isAnyArrayBuffer(k))
        return t.converters.BufferSource(k);
    }
    return t.converters.USVString(k);
  }, Rg = {
    WebSocket: te
  }, Rg;
}
const NR = ka, PB = Tl, HB = ke, TR = Vi, UR = Mw, vR = Sa, fs = me, { InvalidArgumentError: Ro } = HB, mn = fn, LR = Da, MR = NB, GR = z0, YR = TB, xR = fB, JR = gR, OR = uR, { getGlobalDispatcher: VB, setGlobalDispatcher: _R } = ji, PR = BR, HR = MC, VR = vl;
let el;
try {
  require("crypto"), el = !0;
} catch {
  el = !1;
}
Object.assign(PB.prototype, mn);
ue.Dispatcher = PB;
ue.Client = NR;
ue.Pool = TR;
ue.BalancedPool = UR;
ue.Agent = vR;
ue.ProxyAgent = JR;
ue.RetryHandler = OR;
ue.DecoratorHandler = PR;
ue.RedirectHandler = HR;
ue.createRedirectInterceptor = VR;
ue.buildConnector = LR;
ue.errors = HB;
function Zi(t) {
  return (e, A, r) => {
    if (typeof A == "function" && (r = A, A = null), !e || typeof e != "string" && typeof e != "object" && !(e instanceof URL))
      throw new Ro("invalid url");
    if (A != null && typeof A != "object")
      throw new Ro("invalid opts");
    if (A && A.path != null) {
      if (typeof A.path != "string")
        throw new Ro("invalid opts.path");
      let i = A.path;
      A.path.startsWith("/") || (i = `/${i}`), e = new URL(fs.parseOrigin(e).origin + i);
    } else
      A || (A = typeof e == "object" ? e : {}), e = fs.parseURL(e);
    const { agent: s, dispatcher: n = VB() } = A;
    if (s)
      throw new Ro("unsupported opts.agent. Did you mean opts.client?");
    return t.call(n, {
      ...A,
      origin: e.origin,
      path: e.search ? `${e.pathname}${e.search}` : e.pathname,
      method: A.method || (A.body ? "PUT" : "GET")
    }, r);
  };
}
ue.setGlobalDispatcher = _R;
ue.getGlobalDispatcher = VB;
if (fs.nodeMajor > 16 || fs.nodeMajor === 16 && fs.nodeMinor >= 8) {
  let t = null;
  ue.fetch = async function(i) {
    t || (t = Yl().fetch);
    try {
      return await t(...arguments);
    } catch (o) {
      throw typeof o == "object" && Error.captureStackTrace(o, this), o;
    }
  }, ue.Headers = pn().Headers, ue.Response = Gl().Response, ue.Request = Ta().Request, ue.FormData = Nl().FormData, ue.File = Fl().File, ue.FileReader = pR().FileReader;
  const { setGlobalOrigin: e, getGlobalOrigin: A } = Hi();
  ue.setGlobalOrigin = e, ue.getGlobalOrigin = A;
  const { CacheStorage: r } = yR(), { kConstruct: s } = xl();
  ue.caches = new r(s);
}
if (fs.nodeMajor >= 16) {
  const { deleteCookie: t, getCookies: e, getSetCookies: A, setCookie: r } = bR();
  ue.deleteCookie = t, ue.getCookies = e, ue.getSetCookies = A, ue.setCookie = r;
  const { parseMIMEType: s, serializeAMimeType: n } = qt();
  ue.parseMIMEType = s, ue.serializeAMimeType = n;
}
if (fs.nodeMajor >= 18 && el) {
  const { WebSocket: t } = FR();
  ue.WebSocket = t;
}
ue.request = Zi(mn.request);
ue.stream = Zi(mn.stream);
ue.pipeline = Zi(mn.pipeline);
ue.connect = Zi(mn.connect);
ue.upgrade = Zi(mn.upgrade);
ue.MockClient = MR;
ue.MockPool = YR;
ue.MockAgent = GR;
ue.mockErrors = xR;
var WR = he && he.__createBinding || (Object.create ? function(t, e, A, r) {
  r === void 0 && (r = A);
  var s = Object.getOwnPropertyDescriptor(e, A);
  (!s || ("get" in s ? !e.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return e[A];
  } }), Object.defineProperty(t, r, s);
} : function(t, e, A, r) {
  r === void 0 && (r = A), t[r] = e[A];
}), qR = he && he.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), va = he && he.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var A in t)
      A !== "default" && Object.prototype.hasOwnProperty.call(t, A) && WR(e, t, A);
  return qR(e, t), e;
}, Ze = he && he.__awaiter || function(t, e, A, r) {
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
Object.defineProperty(BA, "__esModule", { value: !0 });
BA.HttpClient = BA.isHttps = BA.HttpClientResponse = BA.HttpClientError = BA.getProxyUrl = BA.MediaTypes = BA.Headers = BA.HttpCodes = void 0;
const Dg = va(Bn), pu = va(lQ), Al = va(ln), Do = va(bf), jR = ue;
var ht;
(function(t) {
  t[t.OK = 200] = "OK", t[t.MultipleChoices = 300] = "MultipleChoices", t[t.MovedPermanently = 301] = "MovedPermanently", t[t.ResourceMoved = 302] = "ResourceMoved", t[t.SeeOther = 303] = "SeeOther", t[t.NotModified = 304] = "NotModified", t[t.UseProxy = 305] = "UseProxy", t[t.SwitchProxy = 306] = "SwitchProxy", t[t.TemporaryRedirect = 307] = "TemporaryRedirect", t[t.PermanentRedirect = 308] = "PermanentRedirect", t[t.BadRequest = 400] = "BadRequest", t[t.Unauthorized = 401] = "Unauthorized", t[t.PaymentRequired = 402] = "PaymentRequired", t[t.Forbidden = 403] = "Forbidden", t[t.NotFound = 404] = "NotFound", t[t.MethodNotAllowed = 405] = "MethodNotAllowed", t[t.NotAcceptable = 406] = "NotAcceptable", t[t.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", t[t.RequestTimeout = 408] = "RequestTimeout", t[t.Conflict = 409] = "Conflict", t[t.Gone = 410] = "Gone", t[t.TooManyRequests = 429] = "TooManyRequests", t[t.InternalServerError = 500] = "InternalServerError", t[t.NotImplemented = 501] = "NotImplemented", t[t.BadGateway = 502] = "BadGateway", t[t.ServiceUnavailable = 503] = "ServiceUnavailable", t[t.GatewayTimeout = 504] = "GatewayTimeout";
})(ht || (BA.HttpCodes = ht = {}));
var kA;
(function(t) {
  t.Accept = "accept", t.ContentType = "content-type";
})(kA || (BA.Headers = kA = {}));
var Ar;
(function(t) {
  t.ApplicationJson = "application/json";
})(Ar || (BA.MediaTypes = Ar = {}));
function zR(t) {
  const e = Al.getProxyUrl(new URL(t));
  return e ? e.href : "";
}
BA.getProxyUrl = zR;
const ZR = [
  ht.MovedPermanently,
  ht.ResourceMoved,
  ht.SeeOther,
  ht.TemporaryRedirect,
  ht.PermanentRedirect
], $R = [
  ht.BadGateway,
  ht.ServiceUnavailable,
  ht.GatewayTimeout
], XR = ["OPTIONS", "GET", "DELETE", "HEAD"], KR = 10, eD = 5;
class La extends Error {
  constructor(e, A) {
    super(e), this.name = "HttpClientError", this.statusCode = A, Object.setPrototypeOf(this, La.prototype);
  }
}
BA.HttpClientError = La;
class WB {
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
BA.HttpClientResponse = WB;
function AD(t) {
  return new URL(t).protocol === "https:";
}
BA.isHttps = AD;
class tD {
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
      A[kA.Accept] = this._getExistingOrDefaultHeader(A, kA.Accept, Ar.ApplicationJson);
      const r = yield this.get(e, A);
      return this._processResponse(r, this.requestOptions);
    });
  }
  postJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[kA.Accept] = this._getExistingOrDefaultHeader(r, kA.Accept, Ar.ApplicationJson), r[kA.ContentType] = this._getExistingOrDefaultHeader(r, kA.ContentType, Ar.ApplicationJson);
      const n = yield this.post(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  putJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[kA.Accept] = this._getExistingOrDefaultHeader(r, kA.Accept, Ar.ApplicationJson), r[kA.ContentType] = this._getExistingOrDefaultHeader(r, kA.ContentType, Ar.ApplicationJson);
      const n = yield this.put(e, s, r);
      return this._processResponse(n, this.requestOptions);
    });
  }
  patchJson(e, A, r = {}) {
    return Ze(this, void 0, void 0, function* () {
      const s = JSON.stringify(A, null, 2);
      r[kA.Accept] = this._getExistingOrDefaultHeader(r, kA.Accept, Ar.ApplicationJson), r[kA.ContentType] = this._getExistingOrDefaultHeader(r, kA.ContentType, Ar.ApplicationJson);
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
      const o = this._allowRetries && XR.includes(e) ? this._maxRetries + 1 : 1;
      let a = 0, g;
      do {
        if (g = yield this.requestRaw(i, r), g && g.message && g.message.statusCode === ht.Unauthorized) {
          let E;
          for (const h of this.handlers)
            if (h.canHandleAuthentication(g)) {
              E = h;
              break;
            }
          return E ? E.handleAuthentication(this, i, r) : g;
        }
        let c = this._maxRedirects;
        for (; g.message.statusCode && ZR.includes(g.message.statusCode) && this._allowRedirects && c > 0; ) {
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
        if (!g.message.statusCode || !$R.includes(g.message.statusCode))
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
    return Ze(this, void 0, void 0, function* () {
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
      const g = new WB(a);
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
    const A = new URL(e), r = Al.getProxyUrl(A);
    if (r && r.hostname)
      return this._getProxyAgentDispatcher(A, r);
  }
  _prepareRequest(e, A, r) {
    const s = {};
    s.parsedUrl = A;
    const n = s.parsedUrl.protocol === "https:";
    s.httpModule = n ? pu : Dg;
    const i = n ? 443 : 80;
    if (s.options = {}, s.options.host = s.parsedUrl.hostname, s.options.port = s.parsedUrl.port ? parseInt(s.parsedUrl.port) : i, s.options.path = (s.parsedUrl.pathname || "") + (s.parsedUrl.search || ""), s.options.method = e, s.options.headers = this._mergeHeaders(r), this.userAgent != null && (s.options.headers["user-agent"] = this.userAgent), s.options.agent = this._getAgent(s.parsedUrl), this.handlers)
      for (const o of this.handlers)
        o.prepareRequest(s.options);
    return s;
  }
  _mergeHeaders(e) {
    return this.requestOptions && this.requestOptions.headers ? Object.assign({}, bo(this.requestOptions.headers), bo(e || {})) : bo(e || {});
  }
  _getExistingOrDefaultHeader(e, A, r) {
    let s;
    return this.requestOptions && this.requestOptions.headers && (s = bo(this.requestOptions.headers)[A]), e[A] || s || r;
  }
  _getAgent(e) {
    let A;
    const r = Al.getProxyUrl(e), s = r && r.hostname;
    if (this._keepAlive && s && (A = this._proxyAgent), s || (A = this._agent), A)
      return A;
    const n = e.protocol === "https:";
    let i = 100;
    if (this.requestOptions && (i = this.requestOptions.maxSockets || Dg.globalAgent.maxSockets), r && r.hostname) {
      const o = {
        maxSockets: i,
        keepAlive: this._keepAlive,
        proxy: Object.assign(Object.assign({}, (r.username || r.password) && {
          proxyAuth: `${r.username}:${r.password}`
        }), { host: r.hostname, port: r.port })
      };
      let a;
      const g = r.protocol === "https:";
      n ? a = g ? Do.httpsOverHttps : Do.httpsOverHttp : a = g ? Do.httpOverHttps : Do.httpOverHttp, A = a(o), this._proxyAgent = A;
    }
    if (!A) {
      const o = { keepAlive: this._keepAlive, maxSockets: i };
      A = n ? new pu.Agent(o) : new Dg.Agent(o), this._agent = A;
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
    return r = new jR.ProxyAgent(Object.assign({ uri: A.href, pipelining: this._keepAlive ? 1 : 0 }, (A.username || A.password) && {
      token: `${A.username}:${A.password}`
    })), this._proxyAgentDispatcher = r, s && this._ignoreSslError && (r.options = Object.assign(r.options.requestTls || {}, {
      rejectUnauthorized: !1
    })), r;
  }
  _performExponentialBackoff(e) {
    return Ze(this, void 0, void 0, function* () {
      e = Math.min(KR, e);
      const A = eD * Math.pow(2, e);
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
        n === ht.NotFound && r(i);
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
          const E = new La(c, n);
          E.result = i.result, s(E);
        } else
          r(i);
      }));
    });
  }
}
BA.HttpClient = tD;
const bo = (t) => Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {});
var xr = {}, Ol = he && he.__awaiter || function(t, e, A, r) {
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
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.PersonalAccessTokenCredentialHandler = xr.BearerCredentialHandler = xr.BasicCredentialHandler = void 0;
class rD {
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
    return Ol(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
xr.BasicCredentialHandler = rD;
class sD {
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
    return Ol(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
xr.BearerCredentialHandler = sD;
class nD {
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
    return Ol(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
xr.PersonalAccessTokenCredentialHandler = nD;
var mu;
function iD() {
  if (mu)
    return Dn;
  mu = 1;
  var t = he && he.__awaiter || function(n, i, o, a) {
    function g(c) {
      return c instanceof o ? c : new o(function(E) {
        E(c);
      });
    }
    return new (o || (o = Promise))(function(c, E) {
      function h(u) {
        try {
          B(a.next(u));
        } catch (I) {
          E(I);
        }
      }
      function Q(u) {
        try {
          B(a.throw(u));
        } catch (I) {
          E(I);
        }
      }
      function B(u) {
        u.done ? c(u.value) : g(u.value).then(h, Q);
      }
      B((a = a.apply(n, i || [])).next());
    });
  };
  Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.OidcClient = void 0;
  const e = BA, A = xr, r = qB();
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
  return Dn.OidcClient = s, Dn;
}
var bg = {}, wu;
function yu() {
  return wu || (wu = 1, function(t) {
    var e = he && he.__awaiter || function(g, c, E, h) {
      function Q(B) {
        return B instanceof E ? B : new E(function(u) {
          u(B);
        });
      }
      return new (E || (E = Promise))(function(B, u) {
        function I(d) {
          try {
            C(h.next(d));
          } catch (w) {
            u(w);
          }
        }
        function f(d) {
          try {
            C(h.throw(d));
          } catch (w) {
            u(w);
          }
        }
        function C(d) {
          d.done ? B(d.value) : Q(d.value).then(I, f);
        }
        C((h = h.apply(g, c || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.summary = t.markdownSummary = t.SUMMARY_DOCS_URL = t.SUMMARY_ENV_VAR = void 0;
    const A = Oi, r = cQ, { access: s, appendFile: n, writeFile: i } = r.promises;
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
            const { header: I, data: f, colspan: C, rowspan: d } = u, w = I ? "th" : "td", p = Object.assign(Object.assign({}, C && { colspan: C }), d && { rowspan: d });
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
    const a = new o();
    t.markdownSummary = a, t.summary = a;
  }(bg)), bg;
}
var Xt = {}, Ru;
function oD() {
  if (Ru)
    return Xt;
  Ru = 1;
  var t = he && he.__createBinding || (Object.create ? function(o, a, g, c) {
    c === void 0 && (c = g), Object.defineProperty(o, c, { enumerable: !0, get: function() {
      return a[g];
    } });
  } : function(o, a, g, c) {
    c === void 0 && (c = g), o[c] = a[g];
  }), e = he && he.__setModuleDefault || (Object.create ? function(o, a) {
    Object.defineProperty(o, "default", { enumerable: !0, value: a });
  } : function(o, a) {
    o.default = a;
  }), A = he && he.__importStar || function(o) {
    if (o && o.__esModule)
      return o;
    var a = {};
    if (o != null)
      for (var g in o)
        g !== "default" && Object.hasOwnProperty.call(o, g) && t(a, o, g);
    return e(a, o), a;
  };
  Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.toPlatformPath = Xt.toWin32Path = Xt.toPosixPath = void 0;
  const r = A(gQ);
  function s(o) {
    return o.replace(/[\\]/g, "/");
  }
  Xt.toPosixPath = s;
  function n(o) {
    return o.replace(/[/]/g, "\\");
  }
  Xt.toWin32Path = n;
  function i(o) {
    return o.replace(/[/\\]/g, r.sep);
  }
  return Xt.toPlatformPath = i, Xt;
}
var Du;
function qB() {
  return Du || (Du = 1, function(t) {
    var e = he && he.__createBinding || (Object.create ? function(k, V, U, F) {
      F === void 0 && (F = U), Object.defineProperty(k, F, { enumerable: !0, get: function() {
        return V[U];
      } });
    } : function(k, V, U, F) {
      F === void 0 && (F = U), k[F] = V[U];
    }), A = he && he.__setModuleDefault || (Object.create ? function(k, V) {
      Object.defineProperty(k, "default", { enumerable: !0, value: V });
    } : function(k, V) {
      k.default = V;
    }), r = he && he.__importStar || function(k) {
      if (k && k.__esModule)
        return k;
      var V = {};
      if (k != null)
        for (var U in k)
          U !== "default" && Object.hasOwnProperty.call(k, U) && e(V, k, U);
      return A(V, k), V;
    }, s = he && he.__awaiter || function(k, V, U, F) {
      function S(L) {
        return L instanceof U ? L : new U(function(M) {
          M(L);
        });
      }
      return new (U || (U = Promise))(function(L, M) {
        function P(J) {
          try {
            Z(F.next(J));
          } catch (oe) {
            M(oe);
          }
        }
        function j(J) {
          try {
            Z(F.throw(J));
          } catch (oe) {
            M(oe);
          }
        }
        function Z(J) {
          J.done ? L(J.value) : S(J.value).then(P, j);
        }
        Z((F = F.apply(k, V || [])).next());
      });
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.getIDToken = t.getState = t.saveState = t.group = t.endGroup = t.startGroup = t.info = t.notice = t.warning = t.error = t.debug = t.isDebug = t.setFailed = t.setCommandEcho = t.setOutput = t.getBooleanInput = t.getMultilineInput = t.getInput = t.addPath = t.setSecret = t.exportVariable = t.ExitCode = void 0;
    const n = cn, i = gn, o = Or, a = r(Oi), g = r(gQ), c = iD();
    var E;
    (function(k) {
      k[k.Success = 0] = "Success", k[k.Failure = 1] = "Failure";
    })(E = t.ExitCode || (t.ExitCode = {}));
    function h(k, V) {
      const U = o.toCommandValue(V);
      if (process.env[k] = U, process.env.GITHUB_ENV || "")
        return i.issueFileCommand("ENV", i.prepareKeyValueMessage(k, V));
      n.issueCommand("set-env", { name: k }, U);
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
    function u(k, V) {
      const U = process.env[`INPUT_${k.replace(/ /g, "_").toUpperCase()}`] || "";
      if (V && V.required && !U)
        throw new Error(`Input required and not supplied: ${k}`);
      return V && V.trimWhitespace === !1 ? U : U.trim();
    }
    t.getInput = u;
    function I(k, V) {
      const U = u(k, V).split(`
`).filter((F) => F !== "");
      return V && V.trimWhitespace === !1 ? U : U.map((F) => F.trim());
    }
    t.getMultilineInput = I;
    function f(k, V) {
      const U = ["true", "True", "TRUE"], F = ["false", "False", "FALSE"], S = u(k, V);
      if (U.includes(S))
        return !0;
      if (F.includes(S))
        return !1;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${k}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    t.getBooleanInput = f;
    function C(k, V) {
      if (process.env.GITHUB_OUTPUT || "")
        return i.issueFileCommand("OUTPUT", i.prepareKeyValueMessage(k, V));
      process.stdout.write(a.EOL), n.issueCommand("set-output", { name: k }, o.toCommandValue(V));
    }
    t.setOutput = C;
    function d(k) {
      n.issue("echo", k ? "on" : "off");
    }
    t.setCommandEcho = d;
    function w(k) {
      process.exitCode = E.Failure, D(k);
    }
    t.setFailed = w;
    function p() {
      return process.env.RUNNER_DEBUG === "1";
    }
    t.isDebug = p;
    function m(k) {
      n.issueCommand("debug", {}, k);
    }
    t.debug = m;
    function D(k, V = {}) {
      n.issueCommand("error", o.toCommandProperties(V), k instanceof Error ? k.toString() : k);
    }
    t.error = D;
    function b(k, V = {}) {
      n.issueCommand("warning", o.toCommandProperties(V), k instanceof Error ? k.toString() : k);
    }
    t.warning = b;
    function G(k, V = {}) {
      n.issueCommand("notice", o.toCommandProperties(V), k instanceof Error ? k.toString() : k);
    }
    t.notice = G;
    function _(k) {
      process.stdout.write(k + a.EOL);
    }
    t.info = _;
    function Y(k) {
      n.issue("group", k);
    }
    t.startGroup = Y;
    function te() {
      n.issue("endgroup");
    }
    t.endGroup = te;
    function ee(k, V) {
      return s(this, void 0, void 0, function* () {
        Y(k);
        let U;
        try {
          U = yield V();
        } finally {
          te();
        }
        return U;
      });
    }
    t.group = ee;
    function Ee(k, V) {
      if (process.env.GITHUB_STATE || "")
        return i.issueFileCommand("STATE", i.prepareKeyValueMessage(k, V));
      n.issueCommand("save-state", { name: k }, o.toCommandValue(V));
    }
    t.saveState = Ee;
    function q(k) {
      return process.env[`STATE_${k}`] || "";
    }
    t.getState = q;
    function $(k) {
      return s(this, void 0, void 0, function* () {
        return yield c.OidcClient.getIDToken(k);
      });
    }
    t.getIDToken = $;
    var ne = yu();
    Object.defineProperty(t, "summary", { enumerable: !0, get: function() {
      return ne.summary;
    } });
    var se = yu();
    Object.defineProperty(t, "markdownSummary", { enumerable: !0, get: function() {
      return se.markdownSummary;
    } });
    var K = oD();
    Object.defineProperty(t, "toPosixPath", { enumerable: !0, get: function() {
      return K.toPosixPath;
    } }), Object.defineProperty(t, "toWin32Path", { enumerable: !0, get: function() {
      return K.toWin32Path;
    } }), Object.defineProperty(t, "toPlatformPath", { enumerable: !0, get: function() {
      return K.toPlatformPath;
    } });
  }(Za)), Za;
}
var jB = qB();
function aD(t) {
  return t === null ? null : t.split(Oi.EOL).map((e) => e.trim()).filter(Boolean);
}
const cD = {
  parseList: aD
}, $i = (t, e) => {
  const A = jB.getInput(t, e);
  return !(e != null && e.required) && A === "" ? null : A;
};
function gD(t, e) {
  const A = $i(t, e);
  return A === "true" ? !0 : A === "false" ? !1 : null;
}
function lD(t, e) {
  const A = $i(t, e);
  return typeof A == "string" ? parseInt(A, 10) : null;
}
function hD(t, e) {
  return $i(t, e);
}
function ED(t, e) {
  return cD.parseList($i(t, e));
}
const uD = (t) => $i(t) !== null, $e = {
  getInputAsBoolean: gD,
  getInputAsInteger: lD,
  getInputAsString: hD,
  getInputAsStrings: ED,
  hasInput: uD
}, QD = (t) => pl.cleanEnv(process.env, t, {
  reporter: ({ errors: e }) => {
    const A = Object.keys(e);
    if (A.length > 0)
      throw new Error(`Missing env(s): ${A.join(", ")}`);
  }
}), CD = {
  requireEnv: QD
}, BD = (t) => IQ(`git ls-files --exclude-standard --others ${t} | wc -l`).toString().trim() === "1", ID = (t) => IQ(`git diff --shortstat ${t} | wc -l`).toString().trim() === "1", bu = {
  isFileUntracked: BD,
  isFileChanged: ID
}, dD = (t, e) => Object.values(t)[0] === e ? {} : t, Te = dD;
var fD = zB;
function zB(t, e, A) {
  t instanceof RegExp && (t = ku(t, A)), e instanceof RegExp && (e = ku(e, A));
  var r = ZB(t, e, A);
  return r && {
    start: r[0],
    end: r[1],
    pre: A.slice(0, r[0]),
    body: A.slice(r[0] + t.length, r[1]),
    post: A.slice(r[1] + e.length)
  };
}
function ku(t, e) {
  var A = e.match(t);
  return A ? A[0] : null;
}
zB.range = ZB;
function ZB(t, e, A) {
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
var $B = fD, pD = yD, XB = "\0SLASH" + Math.random() + "\0", KB = "\0OPEN" + Math.random() + "\0", _l = "\0CLOSE" + Math.random() + "\0", eI = "\0COMMA" + Math.random() + "\0", AI = "\0PERIOD" + Math.random() + "\0";
function kg(t) {
  return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
}
function mD(t) {
  return t.split("\\\\").join(XB).split("\\{").join(KB).split("\\}").join(_l).split("\\,").join(eI).split("\\.").join(AI);
}
function wD(t) {
  return t.split(XB).join("\\").split(KB).join("{").split(_l).join("}").split(eI).join(",").split(AI).join(".");
}
function tI(t) {
  if (!t)
    return [""];
  var e = [], A = $B("{", "}", t);
  if (!A)
    return t.split(",");
  var r = A.pre, s = A.body, n = A.post, i = r.split(",");
  i[i.length - 1] += "{" + s + "}";
  var o = tI(n);
  return n.length && (i[i.length - 1] += o.shift(), i.push.apply(i, o)), e.push.apply(e, i), e;
}
function yD(t) {
  return t ? (t.substr(0, 2) === "{}" && (t = "\\{\\}" + t.substr(2)), jn(mD(t), !0).map(wD)) : [];
}
function RD(t) {
  return "{" + t + "}";
}
function DD(t) {
  return /^-?0\d/.test(t);
}
function bD(t, e) {
  return t <= e;
}
function kD(t, e) {
  return t >= e;
}
function jn(t, e) {
  var A = [], r = $B("{", "}", t);
  if (!r)
    return [t];
  var s = r.pre, n = r.post.length ? jn(r.post, !1) : [""];
  if (/\$$/.test(r.pre))
    for (var i = 0; i < n.length; i++) {
      var o = s + "{" + r.body + "}" + n[i];
      A.push(o);
    }
  else {
    var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body), g = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body), c = a || g, E = r.body.indexOf(",") >= 0;
    if (!c && !E)
      return r.post.match(/,.*\}/) ? (t = r.pre + "{" + r.body + _l + r.post, jn(t)) : [t];
    var h;
    if (c)
      h = r.body.split(/\.\./);
    else if (h = tI(r.body), h.length === 1 && (h = jn(h[0], !1).map(RD), h.length === 1))
      return n.map(function(_) {
        return r.pre + h[0] + _;
      });
    var Q;
    if (c) {
      var B = kg(h[0]), u = kg(h[1]), I = Math.max(h[0].length, h[1].length), f = h.length == 3 ? Math.abs(kg(h[2])) : 1, C = bD, d = u < B;
      d && (f *= -1, C = kD);
      var w = h.some(DD);
      Q = [];
      for (var p = B; C(p, u); p += f) {
        var m;
        if (g)
          m = String.fromCharCode(p), m === "\\" && (m = "");
        else if (m = String(p), w) {
          var D = I - m.length;
          if (D > 0) {
            var b = new Array(D + 1).join("0");
            p < 0 ? m = "-" + b + m.slice(1) : m = b + m;
          }
        }
        Q.push(m);
      }
    } else {
      Q = [];
      for (var G = 0; G < h.length; G++)
        Q.push.apply(Q, jn(h[G], !1));
    }
    for (var G = 0; G < Q.length; G++)
      for (var i = 0; i < n.length; i++) {
        var o = s + Q[G] + n[i];
        (!e || c || o) && A.push(o);
      }
  }
  return A;
}
const SD = /* @__PURE__ */ fl(pD), FD = 1024 * 64, sa = (t) => {
  if (typeof t != "string")
    throw new TypeError("invalid pattern");
  if (t.length > FD)
    throw new TypeError("pattern is too long");
}, ND = {
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
}, Gn = (t) => t.replace(/[[\]\\-]/g, "\\$&"), TD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Su = (t) => t.join(""), UD = (t, e) => {
  const A = e;
  if (t.charAt(A) !== "[")
    throw new Error("not in a brace expression");
  const r = [], s = [];
  let n = A + 1, i = !1, o = !1, a = !1, g = !1, c = A, E = "";
  e:
    for (; n < t.length; ) {
      const u = t.charAt(n);
      if ((u === "!" || u === "^") && n === A + 1) {
        g = !0, n++;
        continue;
      }
      if (u === "]" && i && !a) {
        c = n + 1;
        break;
      }
      if (i = !0, u === "\\" && !a) {
        a = !0, n++;
        continue;
      }
      if (u === "[" && !a) {
        for (const [I, [f, C, d]] of Object.entries(ND))
          if (t.startsWith(I, n)) {
            if (E)
              return ["$.", !1, t.length - A, !0];
            n += I.length, d ? s.push(f) : r.push(f), o = o || C;
            continue e;
          }
      }
      if (a = !1, E) {
        u > E ? r.push(Gn(E) + "-" + Gn(u)) : u === E && r.push(Gn(u)), E = "", n++;
        continue;
      }
      if (t.startsWith("-]", n + 1)) {
        r.push(Gn(u + "-")), n += 2;
        continue;
      }
      if (t.startsWith("-", n + 1)) {
        E = u, n += 2;
        continue;
      }
      r.push(Gn(u)), n++;
    }
  if (c < n)
    return ["", !1, 0, !1];
  if (!r.length && !s.length)
    return ["$.", !1, t.length - A, !0];
  if (s.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !g) {
    const u = r[0].length === 2 ? r[0].slice(-1) : r[0];
    return [TD(u), !1, c - A, !1];
  }
  const h = "[" + (g ? "^" : "") + Su(r) + "]", Q = "[" + (g ? "" : "^") + Su(s) + "]";
  return [r.length && s.length ? "(" + h + "|" + Q + ")" : r.length ? h : Q, o, c - A, !0];
}, Os = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/\[([^\/\\])\]/g, "$1") : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), vD = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Fu = (t) => vD.has(t), LD = "(?!(?:^|/)\\.\\.?(?:$|/))", ko = "(?!\\.)", MD = /* @__PURE__ */ new Set(["[", "."]), GD = /* @__PURE__ */ new Set(["..", "."]), YD = new Set("().*{}+?[]^$\\!"), xD = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Pl = "[^/]", Nu = Pl + "*?", Tu = Pl + "+?";
var nA, EA, rr, Me, eA, Sr, os, Fr, Mt, as, ii, la, rI, Vs, _o, oi, tl, ha, sI;
const SA = class SA {
  constructor(e, A, r = {}) {
    T(this, la);
    T(this, oi);
    v(this, "type");
    T(this, nA, void 0);
    T(this, EA, void 0);
    T(this, rr, !1);
    T(this, Me, []);
    T(this, eA, void 0);
    T(this, Sr, void 0);
    T(this, os, void 0);
    T(this, Fr, !1);
    T(this, Mt, void 0);
    T(this, as, void 0);
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    T(this, ii, !1);
    this.type = e, e && y(this, EA, !0), y(this, eA, A), y(this, nA, l(this, eA) ? l(l(this, eA), nA) : this), y(this, Mt, l(this, nA) === this ? r : l(l(this, nA), Mt)), y(this, os, l(this, nA) === this ? [] : l(l(this, nA), os)), e === "!" && !l(l(this, nA), Fr) && l(this, os).push(this), y(this, Sr, l(this, eA) ? l(l(this, eA), Me).length : 0);
  }
  get hasMagic() {
    if (l(this, EA) !== void 0)
      return l(this, EA);
    for (const e of l(this, Me))
      if (typeof e != "string" && (e.type || e.hasMagic))
        return y(this, EA, !0);
    return l(this, EA);
  }
  // reconstructs the pattern
  toString() {
    return l(this, as) !== void 0 ? l(this, as) : this.type ? y(this, as, this.type + "(" + l(this, Me).map((e) => String(e)).join("|") + ")") : y(this, as, l(this, Me).map((e) => String(e)).join(""));
  }
  push(...e) {
    for (const A of e)
      if (A !== "") {
        if (typeof A != "string" && !(A instanceof SA && l(A, eA) === this))
          throw new Error("invalid part: " + A);
        l(this, Me).push(A);
      }
  }
  toJSON() {
    var A;
    const e = this.type === null ? l(this, Me).slice().map((r) => typeof r == "string" ? r : r.toJSON()) : [this.type, ...l(this, Me).map((r) => r.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === l(this, nA) || l(l(this, nA), Fr) && ((A = l(this, eA)) == null ? void 0 : A.type) === "!") && e.push({}), e;
  }
  isStart() {
    var A;
    if (l(this, nA) === this)
      return !0;
    if (!((A = l(this, eA)) != null && A.isStart()))
      return !1;
    if (l(this, Sr) === 0)
      return !0;
    const e = l(this, eA);
    for (let r = 0; r < l(this, Sr); r++) {
      const s = l(e, Me)[r];
      if (!(s instanceof SA && s.type === "!"))
        return !1;
    }
    return !0;
  }
  isEnd() {
    var A, r, s;
    if (l(this, nA) === this || ((A = l(this, eA)) == null ? void 0 : A.type) === "!")
      return !0;
    if (!((r = l(this, eA)) != null && r.isEnd()))
      return !1;
    if (!this.type)
      return (s = l(this, eA)) == null ? void 0 : s.isEnd();
    const e = l(this, eA) ? l(l(this, eA), Me).length : 0;
    return l(this, Sr) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const A = new SA(this.type, e);
    for (const r of l(this, Me))
      A.copyIn(r);
    return A;
  }
  static fromGlob(e, A = {}) {
    var s;
    const r = new SA(null, void 0, A);
    return x(s = SA, Vs, _o).call(s, e, r, 0, A), r;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== l(this, nA))
      return l(this, nA).toMMPattern();
    const e = this.toString(), [A, r, s, n] = this.toRegExpSource();
    if (!(s || l(this, EA) || l(this, Mt).nocase && !l(this, Mt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase()))
      return r;
    const o = (l(this, Mt).nocase ? "i" : "") + (n ? "u" : "");
    return Object.assign(new RegExp(`^${A}$`, o), {
      _src: A,
      _glob: e
    });
  }
  get options() {
    return l(this, Mt);
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
    const A = e ?? !!l(this, Mt).dot;
    if (l(this, nA) === this && x(this, la, rI).call(this), !this.type) {
      const g = this.isStart() && this.isEnd(), c = l(this, Me).map((B) => {
        var d;
        const [u, I, f, C] = typeof B == "string" ? x(d = SA, ha, sI).call(d, B, l(this, EA), g) : B.toRegExpSource(e);
        return y(this, EA, l(this, EA) || f), y(this, rr, l(this, rr) || C), u;
      }).join("");
      let E = "";
      if (this.isStart() && typeof l(this, Me)[0] == "string" && !(l(this, Me).length === 1 && GD.has(l(this, Me)[0]))) {
        const u = MD, I = (
          // dots are allowed, and the pattern starts with [ or .
          A && u.has(c.charAt(0)) || // the pattern starts with \., and then [ or .
          c.startsWith("\\.") && u.has(c.charAt(2)) || // the pattern starts with \.\., and then [ or .
          c.startsWith("\\.\\.") && u.has(c.charAt(4))
        ), f = !A && !e && u.has(c.charAt(0));
        E = I ? LD : f ? ko : "";
      }
      let h = "";
      return this.isEnd() && l(l(this, nA), Fr) && ((a = l(this, eA)) == null ? void 0 : a.type) === "!" && (h = "(?:$|\\/)"), [
        E + c + h,
        Os(c),
        y(this, EA, !!l(this, EA)),
        l(this, rr)
      ];
    }
    const r = this.type === "*" || this.type === "+", s = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let n = x(this, oi, tl).call(this, A);
    if (this.isStart() && this.isEnd() && !n && this.type !== "!") {
      const g = this.toString();
      return y(this, Me, [g]), this.type = null, y(this, EA, void 0), [g, Os(this.toString()), !1, !1];
    }
    let i = !r || e || A || !ko ? "" : x(this, oi, tl).call(this, !0);
    i === n && (i = ""), i && (n = `(?:${n})(?:${i})*?`);
    let o = "";
    if (this.type === "!" && l(this, ii))
      o = (this.isStart() && !A ? ko : "") + Tu;
    else {
      const g = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !A && !e ? ko : "") + Nu + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && i ? ")" : this.type === "*" && i ? ")?" : `)${this.type}`;
      o = s + n + g;
    }
    return [
      o,
      Os(n),
      y(this, EA, !!l(this, EA)),
      l(this, rr)
    ];
  }
};
nA = new WeakMap(), EA = new WeakMap(), rr = new WeakMap(), Me = new WeakMap(), eA = new WeakMap(), Sr = new WeakMap(), os = new WeakMap(), Fr = new WeakMap(), Mt = new WeakMap(), as = new WeakMap(), ii = new WeakMap(), la = new WeakSet(), rI = function() {
  if (this !== l(this, nA))
    throw new Error("should only call on root");
  if (l(this, Fr))
    return this;
  this.toString(), y(this, Fr, !0);
  let e;
  for (; e = l(this, os).pop(); ) {
    if (e.type !== "!")
      continue;
    let A = e, r = l(A, eA);
    for (; r; ) {
      for (let s = l(A, Sr) + 1; !r.type && s < l(r, Me).length; s++)
        for (const n of l(e, Me)) {
          if (typeof n == "string")
            throw new Error("string part in extglob AST??");
          n.copyIn(l(r, Me)[s]);
        }
      A = r, r = l(A, eA);
    }
  }
  return this;
}, Vs = new WeakSet(), _o = function(e, A, r, s) {
  var Q, B;
  let n = !1, i = !1, o = -1, a = !1;
  if (A.type === null) {
    let u = r, I = "";
    for (; u < e.length; ) {
      const f = e.charAt(u++);
      if (n || f === "\\") {
        n = !n, I += f;
        continue;
      }
      if (i) {
        u === o + 1 ? (f === "^" || f === "!") && (a = !0) : f === "]" && !(u === o + 2 && a) && (i = !1), I += f;
        continue;
      } else if (f === "[") {
        i = !0, o = u, a = !1, I += f;
        continue;
      }
      if (!s.noext && Fu(f) && e.charAt(u) === "(") {
        A.push(I), I = "";
        const C = new SA(f, A);
        u = x(Q = SA, Vs, _o).call(Q, e, C, u, s), A.push(C);
        continue;
      }
      I += f;
    }
    return A.push(I), u;
  }
  let g = r + 1, c = new SA(null, A);
  const E = [];
  let h = "";
  for (; g < e.length; ) {
    const u = e.charAt(g++);
    if (n || u === "\\") {
      n = !n, h += u;
      continue;
    }
    if (i) {
      g === o + 1 ? (u === "^" || u === "!") && (a = !0) : u === "]" && !(g === o + 2 && a) && (i = !1), h += u;
      continue;
    } else if (u === "[") {
      i = !0, o = g, a = !1, h += u;
      continue;
    }
    if (Fu(u) && e.charAt(g) === "(") {
      c.push(h), h = "";
      const I = new SA(u, c);
      c.push(I), g = x(B = SA, Vs, _o).call(B, e, I, g, s);
      continue;
    }
    if (u === "|") {
      c.push(h), h = "", E.push(c), c = new SA(null, A);
      continue;
    }
    if (u === ")")
      return h === "" && l(A, Me).length === 0 && y(A, ii, !0), c.push(h), h = "", A.push(...E, c), g;
    h += u;
  }
  return A.type = null, y(A, EA, void 0), y(A, Me, [e.substring(r - 1)]), g;
}, oi = new WeakSet(), tl = function(e) {
  return l(this, Me).map((A) => {
    if (typeof A == "string")
      throw new Error("string type in extglob ast??");
    const [r, s, n, i] = A.toRegExpSource(e);
    return y(this, rr, l(this, rr) || i), r;
  }).filter((A) => !(this.isStart() && this.isEnd()) || !!A).join("|");
}, ha = new WeakSet(), sI = function(e, A, r = !1) {
  let s = !1, n = "", i = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e.charAt(o);
    if (s) {
      s = !1, n += (YD.has(a) ? "\\" : "") + a;
      continue;
    }
    if (a === "\\") {
      o === e.length - 1 ? n += "\\\\" : s = !0;
      continue;
    }
    if (a === "[") {
      const [g, c, E, h] = UD(e, o);
      if (E) {
        n += g, i = i || c, o += E - 1, A = A || h;
        continue;
      }
    }
    if (a === "*") {
      r && e === "*" ? n += Tu : n += Nu, A = !0;
      continue;
    }
    if (a === "?") {
      n += Pl, A = !0;
      continue;
    }
    n += xD(a);
  }
  return [n, Os(e), !!A, i];
}, T(SA, Vs), T(SA, ha);
let na = SA;
const nI = (t, { windowsPathsNoEscape: e = !1 } = {}) => e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&"), PA = (t, e, A = {}) => (sa(e), !A.nocomment && e.charAt(0) === "#" ? !1 : new _r(e, A).match(t)), JD = /^\*+([^+@!?\*\[\(]*)$/, OD = (t) => (e) => !e.startsWith(".") && e.endsWith(t), _D = (t) => (e) => e.endsWith(t), PD = (t) => (t = t.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(t)), HD = (t) => (t = t.toLowerCase(), (e) => e.toLowerCase().endsWith(t)), VD = /^\*+\.\*+$/, WD = (t) => !t.startsWith(".") && t.includes("."), qD = (t) => t !== "." && t !== ".." && t.includes("."), jD = /^\.\*+$/, zD = (t) => t !== "." && t !== ".." && t.startsWith("."), ZD = /^\*+$/, $D = (t) => t.length !== 0 && !t.startsWith("."), XD = (t) => t.length !== 0 && t !== "." && t !== "..", KD = /^\?+([^+@!?\*\[\(]*)?$/, eb = ([t, e = ""]) => {
  const A = iI([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, Ab = ([t, e = ""]) => {
  const A = oI([t]);
  return e ? (e = e.toLowerCase(), (r) => A(r) && r.toLowerCase().endsWith(e)) : A;
}, tb = ([t, e = ""]) => {
  const A = oI([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, rb = ([t, e = ""]) => {
  const A = iI([t]);
  return e ? (r) => A(r) && r.endsWith(e) : A;
}, iI = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && !A.startsWith(".");
}, oI = ([t]) => {
  const e = t.length;
  return (A) => A.length === e && A !== "." && A !== "..";
}, aI = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Uu = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, sb = aI === "win32" ? Uu.win32.sep : Uu.posix.sep;
PA.sep = sb;
const JA = Symbol("globstar **");
PA.GLOBSTAR = JA;
const nb = "[^/]", ib = nb + "*?", ob = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", ab = "(?:(?!(?:\\/|^)\\.).)*?", cb = (t, e = {}) => (A) => PA(A, t, e);
PA.filter = cb;
const ct = (t, e = {}) => Object.assign({}, t, e), gb = (t) => {
  if (!t || typeof t != "object" || !Object.keys(t).length)
    return PA;
  const e = PA;
  return Object.assign((r, s, n = {}) => e(r, s, ct(t, n)), {
    Minimatch: class extends e.Minimatch {
      constructor(s, n = {}) {
        super(s, ct(t, n));
      }
      static defaults(s) {
        return e.defaults(ct(t, s)).Minimatch;
      }
    },
    AST: class extends e.AST {
      /* c8 ignore start */
      constructor(s, n, i = {}) {
        super(s, n, ct(t, i));
      }
      /* c8 ignore stop */
      static fromGlob(s, n = {}) {
        return e.AST.fromGlob(s, ct(t, n));
      }
    },
    unescape: (r, s = {}) => e.unescape(r, ct(t, s)),
    escape: (r, s = {}) => e.escape(r, ct(t, s)),
    filter: (r, s = {}) => e.filter(r, ct(t, s)),
    defaults: (r) => e.defaults(ct(t, r)),
    makeRe: (r, s = {}) => e.makeRe(r, ct(t, s)),
    braceExpand: (r, s = {}) => e.braceExpand(r, ct(t, s)),
    match: (r, s, n = {}) => e.match(r, s, ct(t, n)),
    sep: e.sep,
    GLOBSTAR: JA
  });
};
PA.defaults = gb;
const cI = (t, e = {}) => (sa(t), e.nobrace || !/\{(?:(?!\{).)*\}/.test(t) ? [t] : SD(t));
PA.braceExpand = cI;
const lb = (t, e = {}) => new _r(t, e).makeRe();
PA.makeRe = lb;
const hb = (t, e, A = {}) => {
  const r = new _r(e, A);
  return t = t.filter((s) => r.match(s)), r.options.nonull && !t.length && t.push(e), t;
};
PA.match = hb;
const vu = /[?*]|[+@!]\(.*?\)|\[|\]/, Eb = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class _r {
  constructor(e, A = {}) {
    v(this, "options");
    v(this, "set");
    v(this, "pattern");
    v(this, "windowsPathsNoEscape");
    v(this, "nonegate");
    v(this, "negate");
    v(this, "comment");
    v(this, "empty");
    v(this, "preserveMultipleSlashes");
    v(this, "partial");
    v(this, "globSet");
    v(this, "globParts");
    v(this, "nocase");
    v(this, "isWindows");
    v(this, "platform");
    v(this, "windowsNoMagicRoot");
    v(this, "regexp");
    sa(e), A = A || {}, this.options = A, this.pattern = e, this.platform = A.platform || aI, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!A.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!A.nonegate, this.comment = !1, this.empty = !1, this.partial = !!A.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = A.windowsNoMagicRoot !== void 0 ? A.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
        const a = n[0] === "" && n[1] === "" && (n[2] === "?" || !vu.test(n[2])) && !vu.test(n[3]), g = /^[a-z]:/i.test(n[0]);
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
      const u = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), I = !u && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), f = typeof A[0] == "string" && /^[a-z]:$/i.test(A[0]), C = !f && A[0] === "" && A[1] === "" && A[2] === "?" && typeof A[3] == "string" && /^[a-z]:$/i.test(A[3]), d = I ? 3 : u ? 0 : void 0, w = C ? 3 : f ? 0 : void 0;
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
      if (c === JA) {
        this.debug("GLOBSTAR", [A, c, E]);
        var h = i, Q = o + 1;
        if (Q === g) {
          for (this.debug("** at the end"); i < a; i++)
            if (e[i] === "." || e[i] === ".." || !s.dot && e[i].charAt(0) === ".")
              return !1;
          return !0;
        }
        for (; h < a; ) {
          var B = e[h];
          if (this.debug(`
globstar while`, e, h, A, Q, B), this.matchOne(e.slice(h), A.slice(Q), r))
            return this.debug("globstar found match!", h, a, B), !0;
          if (B === "." || B === ".." || !s.dot && B.charAt(0) === ".") {
            this.debug("dot detected!", e, h, A, Q);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), h++;
        }
        return !!(r && (this.debug(`
>>> no match, partial?`, e, h, A, Q), h === a));
      }
      let u;
      if (typeof c == "string" ? (u = E === c, this.debug("string match", c, E, u)) : (u = c.test(E), this.debug("pattern match", c, E, u)), !u)
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
    return cI(this.pattern, this.options);
  }
  parse(e) {
    sa(e);
    const A = this.options;
    if (e === "**")
      return JA;
    if (e === "")
      return "";
    let r, s = null;
    (r = e.match(ZD)) ? s = A.dot ? XD : $D : (r = e.match(JD)) ? s = (A.nocase ? A.dot ? HD : PD : A.dot ? _D : OD)(r[1]) : (r = e.match(KD)) ? s = (A.nocase ? A.dot ? Ab : eb : A.dot ? tb : rb)(r) : (r = e.match(VD)) ? s = A.dot ? qD : WD : (r = e.match(jD)) && (s = zD);
    const n = na.fromGlob(e, this.options).toMMPattern();
    return s && typeof n == "object" && Reflect.defineProperty(n, "test", { value: s }), n;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1)
      return this.regexp;
    const e = this.set;
    if (!e.length)
      return this.regexp = !1, this.regexp;
    const A = this.options, r = A.noglobstar ? ib : A.dot ? ob : ab, s = new Set(A.nocase ? ["i"] : []);
    let n = e.map((a) => {
      const g = a.map((c) => {
        if (c instanceof RegExp)
          for (const E of c.flags.split(""))
            s.add(E);
        return typeof c == "string" ? Eb(c) : c === JA ? JA : c._src;
      });
      return g.forEach((c, E) => {
        const h = g[E + 1], Q = g[E - 1];
        c !== JA || Q === JA || (Q === void 0 ? h !== void 0 && h !== JA ? g[E + 1] = "(?:\\/|" + r + "\\/)?" + h : g[E] = r : h === void 0 ? g[E - 1] = Q + "(?:\\/|" + r + ")?" : h !== JA && (g[E - 1] = Q + "(?:\\/|\\/" + r + "\\/)" + h, g[E + 1] = JA));
      }), g.filter((c) => c !== JA).join("/");
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
    return PA.defaults(e).Minimatch;
  }
}
PA.AST = na;
PA.Minimatch = _r;
PA.escape = nI;
PA.unescape = Os;
const Ls = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, gI = /* @__PURE__ */ new Set(), rl = typeof process == "object" && process ? process : {}, lI = (t, e, A, r) => {
  typeof rl.emitWarning == "function" ? rl.emitWarning(t, e, A, r) : console.error(`[${A}] ${e}: ${t}`);
};
let ia = globalThis.AbortController, Lu = globalThis.AbortSignal;
var aQ;
if (typeof ia > "u") {
  Lu = class {
    constructor() {
      v(this, "onabort");
      v(this, "_onabort", []);
      v(this, "reason");
      v(this, "aborted", !1);
    }
    addEventListener(r, s) {
      this._onabort.push(s);
    }
  }, ia = class {
    constructor() {
      v(this, "signal", new Lu());
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
  let t = ((aQ = rl.env) == null ? void 0 : aQ.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const e = () => {
    t && (t = !1, lI("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
  };
}
const ub = (t) => !gI.has(t), fr = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t), hI = (t) => fr(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? Po : null : null;
class Po extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
var Ws;
const ss = class ss {
  constructor(e, A) {
    v(this, "heap");
    v(this, "length");
    if (!l(ss, Ws))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new A(e), this.length = 0;
  }
  static create(e) {
    const A = hI(e);
    if (!A)
      return [];
    y(ss, Ws, !0);
    const r = new ss(e, A);
    return y(ss, Ws, !1), r;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
Ws = new WeakMap(), // private constructor
T(ss, Ws, !1);
let sl = ss;
var dt, XA, ft, pt, qs, iA, mt, AA, Ne, le, GA, KA, FA, uA, wt, QA, yt, Rt, et, Dt, Nr, YA, ai, nl, cs, sr, ci, At, Ea, EI, gs, js, gi, Gt, pr, Yt, mr, li, il, gS, zs, Ho, Zs, Vo, De, Fe, hi, ol, ls, zn;
const $l = class $l {
  constructor(e) {
    T(this, ai);
    T(this, Ea);
    T(this, Gt);
    T(this, Yt);
    T(this, li);
    T(this, zs);
    T(this, Zs);
    T(this, De);
    T(this, hi);
    T(this, ls);
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    T(this, dt, void 0);
    T(this, XA, void 0);
    T(this, ft, void 0);
    T(this, pt, void 0);
    T(this, qs, void 0);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    v(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    v(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    v(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    v(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    v(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    v(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    v(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    v(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    v(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    v(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    v(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    v(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    v(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    v(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    v(this, "ignoreFetchAbort");
    // computed properties
    T(this, iA, void 0);
    T(this, mt, void 0);
    T(this, AA, void 0);
    T(this, Ne, void 0);
    T(this, le, void 0);
    T(this, GA, void 0);
    T(this, KA, void 0);
    T(this, FA, void 0);
    T(this, uA, void 0);
    T(this, wt, void 0);
    T(this, QA, void 0);
    T(this, yt, void 0);
    T(this, Rt, void 0);
    T(this, et, void 0);
    T(this, Dt, void 0);
    T(this, Nr, void 0);
    T(this, YA, void 0);
    // conditionally set private methods related to TTL
    T(this, cs, () => {
    });
    T(this, sr, () => {
    });
    T(this, ci, () => {
    });
    /* c8 ignore stop */
    T(this, At, () => !1);
    T(this, gs, (e) => {
    });
    T(this, js, (e, A, r) => {
    });
    T(this, gi, (e, A, r, s) => {
      if (r || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    /**
     * A String value that is used in the creation of the default string description of an object.
     * Called by the built-in method Object.prototype.toString.
     */
    v(this, gS, "LRUCache");
    const { max: A = 0, ttl: r, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: i, updateAgeOnHas: o, allowStale: a, dispose: g, disposeAfter: c, noDisposeOnSet: E, noUpdateTTL: h, maxSize: Q = 0, maxEntrySize: B = 0, sizeCalculation: u, fetchMethod: I, noDeleteOnFetchRejection: f, noDeleteOnStaleGet: C, allowStaleOnFetchRejection: d, allowStaleOnFetchAbort: w, ignoreFetchAbort: p } = e;
    if (A !== 0 && !fr(A))
      throw new TypeError("max option must be a nonnegative integer");
    const m = A ? hI(A) : Array;
    if (!m)
      throw new Error("invalid max value: " + A);
    if (y(this, dt, A), y(this, XA, Q), this.maxEntrySize = B || l(this, XA), this.sizeCalculation = u, this.sizeCalculation) {
      if (!l(this, XA) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (I !== void 0 && typeof I != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (y(this, qs, I), y(this, Nr, !!I), y(this, AA, /* @__PURE__ */ new Map()), y(this, Ne, new Array(A).fill(void 0)), y(this, le, new Array(A).fill(void 0)), y(this, GA, new m(A)), y(this, KA, new m(A)), y(this, FA, 0), y(this, uA, 0), y(this, wt, sl.create(A)), y(this, iA, 0), y(this, mt, 0), typeof g == "function" && y(this, ft, g), typeof c == "function" ? (y(this, pt, c), y(this, QA, [])) : (y(this, pt, void 0), y(this, QA, void 0)), y(this, Dt, !!l(this, ft)), y(this, YA, !!l(this, pt)), this.noDisposeOnSet = !!E, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!f, this.allowStaleOnFetchRejection = !!d, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!p, this.maxEntrySize !== 0) {
      if (l(this, XA) !== 0 && !fr(l(this, XA)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!fr(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      x(this, Ea, EI).call(this);
    }
    if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!C, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!o, this.ttlResolution = fr(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = r || 0, this.ttl) {
      if (!fr(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      x(this, ai, nl).call(this);
    }
    if (l(this, dt) === 0 && this.ttl === 0 && l(this, XA) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !l(this, dt) && !l(this, XA)) {
      const D = "LRU_CACHE_UNBOUNDED";
      ub(D) && (gI.add(D), lI("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", D, $l));
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
      starts: l(e, Rt),
      ttls: l(e, et),
      sizes: l(e, yt),
      keyMap: l(e, AA),
      keyList: l(e, Ne),
      valList: l(e, le),
      next: l(e, GA),
      prev: l(e, KA),
      get head() {
        return l(e, FA);
      },
      get tail() {
        return l(e, uA);
      },
      free: l(e, wt),
      // methods
      isBackgroundFetch: (A) => {
        var r;
        return x(r = e, De, Fe).call(r, A);
      },
      backgroundFetch: (A, r, s, n) => {
        var i;
        return x(i = e, Zs, Vo).call(i, A, r, s, n);
      },
      moveToTail: (A) => {
        var r;
        return x(r = e, ls, zn).call(r, A);
      },
      indexes: (A) => {
        var r;
        return x(r = e, Gt, pr).call(r, A);
      },
      rindexes: (A) => {
        var r;
        return x(r = e, Yt, mr).call(r, A);
      },
      isStale: (A) => {
        var r;
        return l(r = e, At).call(r, A);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return l(this, dt);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return l(this, XA);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return l(this, mt);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return l(this, iA);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return l(this, qs);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return l(this, ft);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return l(this, pt);
  }
  /**
   * Return the remaining TTL time for a given entry key
   */
  getRemainingTTL(e) {
    return l(this, AA).has(e) ? 1 / 0 : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const e of x(this, Gt, pr).call(this))
      l(this, le)[e] !== void 0 && l(this, Ne)[e] !== void 0 && !x(this, De, Fe).call(this, l(this, le)[e]) && (yield [l(this, Ne)[e], l(this, le)[e]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const e of x(this, Yt, mr).call(this))
      l(this, le)[e] !== void 0 && l(this, Ne)[e] !== void 0 && !x(this, De, Fe).call(this, l(this, le)[e]) && (yield [l(this, Ne)[e], l(this, le)[e]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const e of x(this, Gt, pr).call(this)) {
      const A = l(this, Ne)[e];
      A !== void 0 && !x(this, De, Fe).call(this, l(this, le)[e]) && (yield A);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const e of x(this, Yt, mr).call(this)) {
      const A = l(this, Ne)[e];
      A !== void 0 && !x(this, De, Fe).call(this, l(this, le)[e]) && (yield A);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const e of x(this, Gt, pr).call(this))
      l(this, le)[e] !== void 0 && !x(this, De, Fe).call(this, l(this, le)[e]) && (yield l(this, le)[e]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const e of x(this, Yt, mr).call(this))
      l(this, le)[e] !== void 0 && !x(this, De, Fe).call(this, l(this, le)[e]) && (yield l(this, le)[e]);
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
    for (const r of x(this, Gt, pr).call(this)) {
      const s = l(this, le)[r], n = x(this, De, Fe).call(this, s) ? s.__staleWhileFetching : s;
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
    for (const r of x(this, Gt, pr).call(this)) {
      const s = l(this, le)[r], n = x(this, De, Fe).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Ne)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(e, A = this) {
    for (const r of x(this, Yt, mr).call(this)) {
      const s = l(this, le)[r], n = x(this, De, Fe).call(this, s) ? s.__staleWhileFetching : s;
      n !== void 0 && e.call(A, n, l(this, Ne)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let e = !1;
    for (const A of x(this, Yt, mr).call(this, { allowStale: !0 }))
      l(this, At).call(this, A) && (this.delete(l(this, Ne)[A]), e = !0);
    return e;
  }
  /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Like {@link LRUCache#dump}, but just for a
   * single key. Always returns stale values, if their info is found in the
   * cache, so be sure to check for expired TTLs if relevant.
   */
  info(e) {
    const A = l(this, AA).get(e);
    if (A === void 0)
      return;
    const r = l(this, le)[A], s = x(this, De, Fe).call(this, r) ? r.__staleWhileFetching : r;
    if (s === void 0)
      return;
    const n = { value: s };
    if (l(this, et) && l(this, Rt)) {
      const i = l(this, et)[A], o = l(this, Rt)[A];
      if (i && o) {
        const a = i - (Ls.now() - o);
        n.ttl = a, n.start = Date.now();
      }
    }
    return l(this, yt) && (n.size = l(this, yt)[A]), n;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */
  dump() {
    const e = [];
    for (const A of x(this, Gt, pr).call(this, { allowStale: !0 })) {
      const r = l(this, Ne)[A], s = l(this, le)[A], n = x(this, De, Fe).call(this, s) ? s.__staleWhileFetching : s;
      if (n === void 0 || r === void 0)
        continue;
      const i = { value: n };
      if (l(this, et) && l(this, Rt)) {
        i.ttl = l(this, et)[A];
        const o = Ls.now() - l(this, Rt)[A];
        i.start = Math.floor(Date.now() - o);
      }
      l(this, yt) && (i.size = l(this, yt)[A]), e.unshift([r, i]);
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
        r.start = Ls.now() - s;
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
    const { ttl: s = this.ttl, start: n, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: o = this.sizeCalculation, status: a } = r;
    let { noUpdateTTL: g = this.noUpdateTTL } = r;
    const c = l(this, gi).call(this, e, A, r.size || 0, o);
    if (this.maxEntrySize && c > this.maxEntrySize)
      return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(e), this;
    let E = l(this, iA) === 0 ? void 0 : l(this, AA).get(e);
    if (E === void 0)
      E = l(this, iA) === 0 ? l(this, uA) : l(this, wt).length !== 0 ? l(this, wt).pop() : l(this, iA) === l(this, dt) ? x(this, zs, Ho).call(this, !1) : l(this, iA), l(this, Ne)[E] = e, l(this, le)[E] = A, l(this, AA).set(e, E), l(this, GA)[l(this, uA)] = E, l(this, KA)[E] = l(this, uA), y(this, uA, E), to(this, iA)._++, l(this, js).call(this, E, c, a), a && (a.set = "add"), g = !1;
    else {
      x(this, ls, zn).call(this, E);
      const f = l(this, le)[E];
      if (A !== f) {
        if (l(this, Nr) && x(this, De, Fe).call(this, f)) {
          f.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: C } = f;
          C !== void 0 && !i && (l(this, Dt) && ((h = l(this, ft)) == null || h.call(this, C, e, "set")), l(this, YA) && ((Q = l(this, QA)) == null || Q.push([C, e, "set"])));
        } else
          i || (l(this, Dt) && ((B = l(this, ft)) == null || B.call(this, f, e, "set")), l(this, YA) && ((u = l(this, QA)) == null || u.push([f, e, "set"])));
        if (l(this, gs).call(this, E), l(this, js).call(this, E, c, a), l(this, le)[E] = A, a) {
          a.set = "replace";
          const C = f && x(this, De, Fe).call(this, f) ? f.__staleWhileFetching : f;
          C !== void 0 && (a.oldValue = C);
        }
      } else
        a && (a.set = "update");
    }
    if (s !== 0 && !l(this, et) && x(this, ai, nl).call(this), l(this, et) && (g || l(this, ci).call(this, E, s, n), a && l(this, sr).call(this, a, E)), !i && l(this, YA) && l(this, QA)) {
      const f = l(this, QA);
      let C;
      for (; C = f == null ? void 0 : f.shift(); )
        (I = l(this, pt)) == null || I.call(this, ...C);
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
      for (; l(this, iA); ) {
        const A = l(this, le)[l(this, FA)];
        if (x(this, zs, Ho).call(this, !0), x(this, De, Fe).call(this, A)) {
          if (A.__staleWhileFetching)
            return A.__staleWhileFetching;
        } else if (A !== void 0)
          return A;
      }
    } finally {
      if (l(this, YA) && l(this, QA)) {
        const A = l(this, QA);
        let r;
        for (; r = A == null ? void 0 : A.shift(); )
          (e = l(this, pt)) == null || e.call(this, ...r);
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
    const { updateAgeOnHas: r = this.updateAgeOnHas, status: s } = A, n = l(this, AA).get(e);
    if (n !== void 0) {
      const i = l(this, le)[n];
      if (x(this, De, Fe).call(this, i) && i.__staleWhileFetching === void 0)
        return !1;
      if (l(this, At).call(this, n))
        s && (s.has = "stale", l(this, sr).call(this, s, n));
      else
        return r && l(this, cs).call(this, n), s && (s.has = "hit", l(this, sr).call(this, s, n)), !0;
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
    const { allowStale: r = this.allowStale } = A, s = l(this, AA).get(e);
    if (s === void 0 || !r && l(this, At).call(this, s))
      return;
    const n = l(this, le)[s];
    return x(this, De, Fe).call(this, n) ? n.__staleWhileFetching : n;
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
      ignoreFetchAbort: Q = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: B = this.allowStaleOnFetchAbort,
      context: u,
      forceRefresh: I = !1,
      status: f,
      signal: C
    } = A;
    if (!l(this, Nr))
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
      ignoreFetchAbort: Q,
      status: f,
      signal: C
    };
    let w = l(this, AA).get(e);
    if (w === void 0) {
      f && (f.fetch = "miss");
      const p = x(this, Zs, Vo).call(this, e, w, d, u);
      return p.__returned = p;
    } else {
      const p = l(this, le)[w];
      if (x(this, De, Fe).call(this, p)) {
        const _ = r && p.__staleWhileFetching !== void 0;
        return f && (f.fetch = "inflight", _ && (f.returnedStale = !0)), _ ? p.__staleWhileFetching : p.__returned = p;
      }
      const m = l(this, At).call(this, w);
      if (!I && !m)
        return f && (f.fetch = "hit"), x(this, ls, zn).call(this, w), s && l(this, cs).call(this, w), f && l(this, sr).call(this, f, w), p;
      const D = x(this, Zs, Vo).call(this, e, w, d, u), G = D.__staleWhileFetching !== void 0 && r;
      return f && (f.fetch = m ? "stale" : "refresh", G && m && (f.returnedStale = !0)), G ? D.__staleWhileFetching : D.__returned = D;
    }
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(e, A = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: i } = A, o = l(this, AA).get(e);
    if (o !== void 0) {
      const a = l(this, le)[o], g = x(this, De, Fe).call(this, a);
      return i && l(this, sr).call(this, i, o), l(this, At).call(this, o) ? (i && (i.get = "stale"), g ? (i && r && a.__staleWhileFetching !== void 0 && (i.returnedStale = !0), r ? a.__staleWhileFetching : void 0) : (n || this.delete(e), i && r && (i.returnedStale = !0), r ? a : void 0)) : (i && (i.get = "hit"), g ? a.__staleWhileFetching : (x(this, ls, zn).call(this, o), s && l(this, cs).call(this, o), a));
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
    if (l(this, iA) !== 0) {
      const o = l(this, AA).get(e);
      if (o !== void 0)
        if (A = !0, l(this, iA) === 1)
          this.clear();
        else {
          l(this, gs).call(this, o);
          const a = l(this, le)[o];
          if (x(this, De, Fe).call(this, a) ? a.__abortController.abort(new Error("deleted")) : (l(this, Dt) || l(this, YA)) && (l(this, Dt) && ((r = l(this, ft)) == null || r.call(this, a, e, "delete")), l(this, YA) && ((s = l(this, QA)) == null || s.push([a, e, "delete"]))), l(this, AA).delete(e), l(this, Ne)[o] = void 0, l(this, le)[o] = void 0, o === l(this, uA))
            y(this, uA, l(this, KA)[o]);
          else if (o === l(this, FA))
            y(this, FA, l(this, GA)[o]);
          else {
            const g = l(this, KA)[o];
            l(this, GA)[g] = l(this, GA)[o];
            const c = l(this, GA)[o];
            l(this, KA)[c] = l(this, KA)[o];
          }
          to(this, iA)._--, l(this, wt).push(o);
        }
    }
    if (l(this, YA) && ((n = l(this, QA)) != null && n.length)) {
      const o = l(this, QA);
      let a;
      for (; a = o == null ? void 0 : o.shift(); )
        (i = l(this, pt)) == null || i.call(this, ...a);
    }
    return A;
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    var e, A, r;
    for (const s of x(this, Yt, mr).call(this, { allowStale: !0 })) {
      const n = l(this, le)[s];
      if (x(this, De, Fe).call(this, n))
        n.__abortController.abort(new Error("deleted"));
      else {
        const i = l(this, Ne)[s];
        l(this, Dt) && ((e = l(this, ft)) == null || e.call(this, n, i, "delete")), l(this, YA) && ((A = l(this, QA)) == null || A.push([n, i, "delete"]));
      }
    }
    if (l(this, AA).clear(), l(this, le).fill(void 0), l(this, Ne).fill(void 0), l(this, et) && l(this, Rt) && (l(this, et).fill(0), l(this, Rt).fill(0)), l(this, yt) && l(this, yt).fill(0), y(this, FA, 0), y(this, uA, 0), l(this, wt).length = 0, y(this, mt, 0), y(this, iA, 0), l(this, YA) && l(this, QA)) {
      const s = l(this, QA);
      let n;
      for (; n = s == null ? void 0 : s.shift(); )
        (r = l(this, pt)) == null || r.call(this, ...n);
    }
  }
};
gS = Symbol.toStringTag, dt = new WeakMap(), XA = new WeakMap(), ft = new WeakMap(), pt = new WeakMap(), qs = new WeakMap(), iA = new WeakMap(), mt = new WeakMap(), AA = new WeakMap(), Ne = new WeakMap(), le = new WeakMap(), GA = new WeakMap(), KA = new WeakMap(), FA = new WeakMap(), uA = new WeakMap(), wt = new WeakMap(), QA = new WeakMap(), yt = new WeakMap(), Rt = new WeakMap(), et = new WeakMap(), Dt = new WeakMap(), Nr = new WeakMap(), YA = new WeakMap(), ai = new WeakSet(), nl = function() {
  const e = new Po(l(this, dt)), A = new Po(l(this, dt));
  y(this, et, e), y(this, Rt, A), y(this, ci, (n, i, o = Ls.now()) => {
    if (A[n] = i !== 0 ? o : 0, e[n] = i, i !== 0 && this.ttlAutopurge) {
      const a = setTimeout(() => {
        l(this, At).call(this, n) && this.delete(l(this, Ne)[n]);
      }, i + 1);
      a.unref && a.unref();
    }
  }), y(this, cs, (n) => {
    A[n] = e[n] !== 0 ? Ls.now() : 0;
  }), y(this, sr, (n, i) => {
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
    const n = Ls.now();
    if (this.ttlResolution > 0) {
      r = n;
      const i = setTimeout(() => r = 0, this.ttlResolution);
      i.unref && i.unref();
    }
    return n;
  };
  this.getRemainingTTL = (n) => {
    const i = l(this, AA).get(n);
    if (i === void 0)
      return 0;
    const o = e[i], a = A[i];
    if (!o || !a)
      return 1 / 0;
    const g = (r || s()) - a;
    return o - g;
  }, y(this, At, (n) => {
    const i = A[n], o = e[n];
    return !!o && !!i && (r || s()) - i > o;
  });
}, cs = new WeakMap(), sr = new WeakMap(), ci = new WeakMap(), At = new WeakMap(), Ea = new WeakSet(), EI = function() {
  const e = new Po(l(this, dt));
  y(this, mt, 0), y(this, yt, e), y(this, gs, (A) => {
    y(this, mt, l(this, mt) - e[A]), e[A] = 0;
  }), y(this, gi, (A, r, s, n) => {
    if (x(this, De, Fe).call(this, r))
      return 0;
    if (!fr(s))
      if (n) {
        if (typeof n != "function")
          throw new TypeError("sizeCalculation must be a function");
        if (s = n(r, A), !fr(s))
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      } else
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
    return s;
  }), y(this, js, (A, r, s) => {
    if (e[A] = r, l(this, XA)) {
      const n = l(this, XA) - e[A];
      for (; l(this, mt) > n; )
        x(this, zs, Ho).call(this, !0);
    }
    y(this, mt, l(this, mt) + e[A]), s && (s.entrySize = r, s.totalCalculatedSize = l(this, mt));
  });
}, gs = new WeakMap(), js = new WeakMap(), gi = new WeakMap(), Gt = new WeakSet(), pr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, iA))
    for (let A = l(this, uA); !(!x(this, li, il).call(this, A) || ((e || !l(this, At).call(this, A)) && (yield A), A === l(this, FA))); )
      A = l(this, KA)[A];
}, Yt = new WeakSet(), mr = function* ({ allowStale: e = this.allowStale } = {}) {
  if (l(this, iA))
    for (let A = l(this, FA); !(!x(this, li, il).call(this, A) || ((e || !l(this, At).call(this, A)) && (yield A), A === l(this, uA))); )
      A = l(this, GA)[A];
}, li = new WeakSet(), il = function(e) {
  return e !== void 0 && l(this, AA).get(l(this, Ne)[e]) === e;
}, zs = new WeakSet(), Ho = function(e) {
  var n, i;
  const A = l(this, FA), r = l(this, Ne)[A], s = l(this, le)[A];
  return l(this, Nr) && x(this, De, Fe).call(this, s) ? s.__abortController.abort(new Error("evicted")) : (l(this, Dt) || l(this, YA)) && (l(this, Dt) && ((n = l(this, ft)) == null || n.call(this, s, r, "evict")), l(this, YA) && ((i = l(this, QA)) == null || i.push([s, r, "evict"]))), l(this, gs).call(this, A), e && (l(this, Ne)[A] = void 0, l(this, le)[A] = void 0, l(this, wt).push(A)), l(this, iA) === 1 ? (y(this, FA, y(this, uA, 0)), l(this, wt).length = 0) : y(this, FA, l(this, GA)[A]), l(this, AA).delete(r), to(this, iA)._--, A;
}, Zs = new WeakSet(), Vo = function(e, A, r, s) {
  const n = A === void 0 ? void 0 : l(this, le)[A];
  if (x(this, De, Fe).call(this, n))
    return n;
  const i = new ia(), { signal: o } = r;
  o == null || o.addEventListener("abort", () => i.abort(o.reason), {
    signal: i.signal
  });
  const a = {
    signal: i.signal,
    options: r,
    context: s
  }, g = (u, I = !1) => {
    const { aborted: f } = i.signal, C = r.ignoreFetchAbort && u !== void 0;
    if (r.status && (f && !I ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, C && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), f && !C && !I)
      return E(i.signal.reason);
    const d = Q;
    return l(this, le)[A] === Q && (u === void 0 ? d.__staleWhileFetching ? l(this, le)[A] = d.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, u, a.options))), u;
  }, c = (u) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = u), E(u)), E = (u) => {
    const { aborted: I } = i.signal, f = I && r.allowStaleOnFetchAbort, C = f || r.allowStaleOnFetchRejection, d = C || r.noDeleteOnFetchRejection, w = Q;
    if (l(this, le)[A] === Q && (!d || w.__staleWhileFetching === void 0 ? this.delete(e) : f || (l(this, le)[A] = w.__staleWhileFetching)), C)
      return r.status && w.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), w.__staleWhileFetching;
    if (w.__returned === w)
      throw u;
  }, h = (u, I) => {
    var C;
    const f = (C = l(this, qs)) == null ? void 0 : C.call(this, e, n, a);
    f && f instanceof Promise && f.then((d) => u(d === void 0 ? void 0 : d), I), i.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (u(void 0), r.allowStaleOnFetchAbort && (u = (d) => g(d, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const Q = new Promise(h).then(g, c), B = Object.assign(Q, {
    __abortController: i,
    __staleWhileFetching: n,
    __returned: void 0
  });
  return A === void 0 ? (this.set(e, B, { ...a.options, status: void 0 }), A = l(this, AA).get(e)) : l(this, le)[A] = B, B;
}, De = new WeakSet(), Fe = function(e) {
  if (!l(this, Nr))
    return !1;
  const A = e;
  return !!A && A instanceof Promise && A.hasOwnProperty("__staleWhileFetching") && A.__abortController instanceof ia;
}, hi = new WeakSet(), ol = function(e, A) {
  l(this, KA)[A] = e, l(this, GA)[e] = A;
}, ls = new WeakSet(), zn = function(e) {
  e !== l(this, uA) && (e === l(this, FA) ? y(this, FA, l(this, GA)[e]) : x(this, hi, ol).call(this, l(this, KA)[e], l(this, GA)[e]), x(this, hi, ol).call(this, l(this, uA), e), y(this, uA, e));
};
let oa = $l;
const Mu = typeof process == "object" && process ? process : {
  stdout: null,
  stderr: null
}, Qb = (t) => !!t && typeof t == "object" && (t instanceof aa || t instanceof Wt || Cb(t) || Bb(t)), Cb = (t) => !!t && typeof t == "object" && t instanceof dl && typeof t.pipe == "function" && // node core Writable streams have a pipe() method, but it throws
t.pipe !== Wt.Writable.prototype.pipe, Bb = (t) => !!t && typeof t == "object" && t instanceof dl && typeof t.write == "function" && typeof t.end == "function", Kt = Symbol("EOF"), er = Symbol("maybeEmitEnd"), Ir = Symbol("emittedEnd"), So = Symbol("emittingEnd"), Yn = Symbol("emittedError"), Fo = Symbol("closed"), Gu = Symbol("read"), No = Symbol("flush"), Yu = Symbol("flushChunk"), Ct = Symbol("encoding"), Ms = Symbol("decoder"), gA = Symbol("flowing"), xn = Symbol("paused"), xs = Symbol("resume"), lA = Symbol("buffer"), LA = Symbol("pipes"), hA = Symbol("bufferLength"), Sg = Symbol("bufferPush"), To = Symbol("bufferShift"), bA = Symbol("objectMode"), ze = Symbol("destroyed"), Fg = Symbol("error"), Ng = Symbol("emitData"), xu = Symbol("emitEnd"), Tg = Symbol("emitEnd2"), Ut = Symbol("async"), Ug = Symbol("abort"), Uo = Symbol("aborted"), Jn = Symbol("signal"), As = Symbol("dataListeners"), $A = Symbol("discarded"), On = (t) => Promise.resolve().then(t), Ib = (t) => t(), db = (t) => t === "end" || t === "finish" || t === "prefinish", fb = (t) => t instanceof ArrayBuffer || !!t && typeof t == "object" && t.constructor && t.constructor.name === "ArrayBuffer" && t.byteLength >= 0, pb = (t) => !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
class uI {
  constructor(e, A, r) {
    v(this, "src");
    v(this, "dest");
    v(this, "opts");
    v(this, "ondrain");
    this.src = e, this.dest = A, this.opts = r, this.ondrain = () => e[xs](), this.dest.on("drain", this.ondrain);
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
class mb extends uI {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors), super.unpipe();
  }
  constructor(e, A, r) {
    super(e, A, r), this.proxyErrors = (s) => A.emit("error", s), e.on("error", this.proxyErrors);
  }
}
const wb = (t) => !!t.objectMode, yb = (t) => !t.objectMode && !!t.encoding && t.encoding !== "buffer";
var lS, hS, ES, uS, QS, CS, BS, IS, dS, fS, pS, mS, wS, yS, RS, DS, bS, kS, SS;
class aa extends dl {
  /**
   * If `RType` is Buffer, then options do not need to be provided.
   * Otherwise, an options object must be provided to specify either
   * {@link Minipass.SharedOptions.objectMode} or
   * {@link Minipass.SharedOptions.encoding}, as appropriate.
   */
  constructor(...A) {
    const r = A[0] || {};
    super();
    v(this, lS, !1);
    v(this, hS, !1);
    v(this, ES, []);
    v(this, uS, []);
    v(this, QS);
    v(this, CS);
    v(this, BS);
    v(this, IS);
    v(this, dS, !1);
    v(this, fS, !1);
    v(this, pS, !1);
    v(this, mS, !1);
    v(this, wS, null);
    v(this, yS, 0);
    v(this, RS, !1);
    v(this, DS);
    v(this, bS, !1);
    v(this, kS, 0);
    v(this, SS, !1);
    /**
     * true if the stream can be written
     */
    v(this, "writable", !0);
    /**
     * true if the stream can be read
     */
    v(this, "readable", !0);
    if (r.objectMode && typeof r.encoding == "string")
      throw new TypeError("Encoding and objectMode may not be used together");
    wb(r) ? (this[bA] = !0, this[Ct] = null) : yb(r) ? (this[Ct] = r.encoding, this[bA] = !1) : (this[bA] = !1, this[Ct] = null), this[Ut] = !!r.async, this[Ms] = this[Ct] ? new Bd(this[Ct]) : null, r && r.debugExposeBuffer === !0 && Object.defineProperty(this, "buffer", { get: () => this[lA] }), r && r.debugExposePipes === !0 && Object.defineProperty(this, "pipes", { get: () => this[LA] });
    const { signal: s } = r;
    s && (this[Jn] = s, s.aborted ? this[Ug]() : s.addEventListener("abort", () => this[Ug]()));
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
    return this[hA];
  }
  /**
   * The `BufferEncoding` currently in use, or `null`
   */
  get encoding() {
    return this[Ct];
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
    return this[Ut];
  }
  /**
   * Set to true to make this stream async.
   *
   * Once set, it cannot be unset, as this would potentially cause incorrect
   * behavior.  Ie, a sync stream can be made async, but an async stream
   * cannot be safely made sync.
   */
  set async(A) {
    this[Ut] = this[Ut] || !!A;
  }
  // drop everything and get out of the flow completely
  [(lS = gA, hS = xn, ES = LA, uS = lA, QS = bA, CS = Ct, BS = Ut, IS = Ms, dS = Kt, fS = Ir, pS = So, mS = Fo, wS = Yn, yS = hA, RS = ze, DS = Jn, bS = Uo, kS = As, SS = $A, Ug)]() {
    var A, r;
    this[Uo] = !0, this.emit("abort", (A = this[Jn]) == null ? void 0 : A.reason), this.destroy((r = this[Jn]) == null ? void 0 : r.reason);
  }
  /**
   * True if the stream has been aborted.
   */
  get aborted() {
    return this[Uo];
  }
  /**
   * No-op setter. Stream aborted status is set via the AbortSignal provided
   * in the constructor options.
   */
  set aborted(A) {
  }
  write(A, r, s) {
    var i;
    if (this[Uo])
      return !1;
    if (this[Kt])
      throw new Error("write after end");
    if (this[ze])
      return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), !0;
    typeof r == "function" && (s = r, r = "utf8"), r || (r = "utf8");
    const n = this[Ut] ? On : Ib;
    if (!this[bA] && !Buffer.isBuffer(A)) {
      if (pb(A))
        A = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
      else if (fb(A))
        A = Buffer.from(A);
      else if (typeof A != "string")
        throw new Error("Non-contiguous data written to non-objectMode stream");
    }
    return this[bA] ? (this[gA] && this[hA] !== 0 && this[No](!0), this[gA] ? this.emit("data", A) : this[Sg](A), this[hA] !== 0 && this.emit("readable"), s && n(s), this[gA]) : A.length ? (typeof A == "string" && // unless it is a string already ready for us to use
    !(r === this[Ct] && !((i = this[Ms]) != null && i.lastNeed)) && (A = Buffer.from(A, r)), Buffer.isBuffer(A) && this[Ct] && (A = this[Ms].write(A)), this[gA] && this[hA] !== 0 && this[No](!0), this[gA] ? this.emit("data", A) : this[Sg](A), this[hA] !== 0 && this.emit("readable"), s && n(s), this[gA]) : (this[hA] !== 0 && this.emit("readable"), s && n(s), this[gA]);
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
    if (this[ze])
      return null;
    if (this[$A] = !1, this[hA] === 0 || A === 0 || A && A > this[hA])
      return this[er](), null;
    this[bA] && (A = null), this[lA].length > 1 && !this[bA] && (this[lA] = [
      this[Ct] ? this[lA].join("") : Buffer.concat(this[lA], this[hA])
    ]);
    const r = this[Gu](A || null, this[lA][0]);
    return this[er](), r;
  }
  [Gu](A, r) {
    if (this[bA])
      this[To]();
    else {
      const s = r;
      A === s.length || A === null ? this[To]() : typeof s == "string" ? (this[lA][0] = s.slice(A), r = s.slice(0, A), this[hA] -= A) : (this[lA][0] = s.subarray(A), r = s.subarray(0, A), this[hA] -= A);
    }
    return this.emit("data", r), !this[lA].length && !this[Kt] && this.emit("drain"), r;
  }
  end(A, r, s) {
    return typeof A == "function" && (s = A, A = void 0), typeof r == "function" && (s = r, r = "utf8"), A !== void 0 && this.write(A, r), s && this.once("end", s), this[Kt] = !0, this.writable = !1, (this[gA] || !this[xn]) && this[er](), this;
  }
  // don't let the internal resume be overwritten
  [xs]() {
    this[ze] || (!this[As] && !this[LA].length && (this[$A] = !0), this[xn] = !1, this[gA] = !0, this.emit("resume"), this[lA].length ? this[No]() : this[Kt] ? this[er]() : this.emit("drain"));
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
    return this[xs]();
  }
  /**
   * Pause the stream
   */
  pause() {
    this[gA] = !1, this[xn] = !0, this[$A] = !1;
  }
  /**
   * true if the stream has been forcibly destroyed
   */
  get destroyed() {
    return this[ze];
  }
  /**
   * true if the stream is currently in a flowing state, meaning that
   * any writes will be immediately emitted.
   */
  get flowing() {
    return this[gA];
  }
  /**
   * true if the stream is currently in a paused state
   */
  get paused() {
    return this[xn];
  }
  [Sg](A) {
    this[bA] ? this[hA] += 1 : this[hA] += A.length, this[lA].push(A);
  }
  [To]() {
    return this[bA] ? this[hA] -= 1 : this[hA] -= this[lA][0].length, this[lA].shift();
  }
  [No](A = !1) {
    do
      ;
    while (this[Yu](this[To]()) && this[lA].length);
    !A && !this[lA].length && !this[Kt] && this.emit("drain");
  }
  [Yu](A) {
    return this.emit("data", A), this[gA];
  }
  /**
   * Pipe all data emitted by this stream into the destination provided.
   *
   * Triggers the flow of data.
   */
  pipe(A, r) {
    if (this[ze])
      return A;
    this[$A] = !1;
    const s = this[Ir];
    return r = r || {}, A === Mu.stdout || A === Mu.stderr ? r.end = !1 : r.end = r.end !== !1, r.proxyErrors = !!r.proxyErrors, s ? r.end && A.end() : (this[LA].push(r.proxyErrors ? new mb(this, A, r) : new uI(this, A, r)), this[Ut] ? On(() => this[xs]()) : this[xs]()), A;
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
    const r = this[LA].find((s) => s.dest === A);
    r && (this[LA].length === 1 ? (this[gA] && this[As] === 0 && (this[gA] = !1), this[LA] = []) : this[LA].splice(this[LA].indexOf(r), 1), r.unpipe());
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
      this[$A] = !1, this[As]++, !this[LA].length && !this[gA] && this[xs]();
    else if (A === "readable" && this[hA] !== 0)
      super.emit("readable");
    else if (db(A) && this[Ir])
      super.emit(A), this.removeAllListeners(A);
    else if (A === "error" && this[Yn]) {
      const n = r;
      this[Ut] ? On(() => n.call(this, this[Yn])) : n.call(this, this[Yn]);
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
    return A === "data" && (this[As] = this.listeners("data").length, this[As] === 0 && !this[$A] && !this[LA].length && (this[gA] = !1)), s;
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
    return (A === "data" || A === void 0) && (this[As] = 0, !this[$A] && !this[LA].length && (this[gA] = !1)), r;
  }
  /**
   * true if the 'end' event has been emitted
   */
  get emittedEnd() {
    return this[Ir];
  }
  [er]() {
    !this[So] && !this[Ir] && !this[ze] && this[lA].length === 0 && this[Kt] && (this[So] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[Fo] && this.emit("close"), this[So] = !1);
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
    if (A !== "error" && A !== "close" && A !== ze && this[ze])
      return !1;
    if (A === "data")
      return !this[bA] && !s ? !1 : this[Ut] ? (On(() => this[Ng](s)), !0) : this[Ng](s);
    if (A === "end")
      return this[xu]();
    if (A === "close") {
      if (this[Fo] = !0, !this[Ir] && !this[ze])
        return !1;
      const i = super.emit("close");
      return this.removeAllListeners("close"), i;
    } else if (A === "error") {
      this[Yn] = s, super.emit(Fg, s);
      const i = !this[Jn] || this.listeners("error").length ? super.emit("error", s) : !1;
      return this[er](), i;
    } else if (A === "resume") {
      const i = super.emit("resume");
      return this[er](), i;
    } else if (A === "finish" || A === "prefinish") {
      const i = super.emit(A);
      return this.removeAllListeners(A), i;
    }
    const n = super.emit(A, ...r);
    return this[er](), n;
  }
  [Ng](A) {
    for (const s of this[LA])
      s.dest.write(A) === !1 && this.pause();
    const r = this[$A] ? !1 : super.emit("data", A);
    return this[er](), r;
  }
  [xu]() {
    return this[Ir] ? !1 : (this[Ir] = !0, this.readable = !1, this[Ut] ? (On(() => this[Tg]()), !0) : this[Tg]());
  }
  [Tg]() {
    if (this[Ms]) {
      const r = this[Ms].end();
      if (r) {
        for (const s of this[LA])
          s.dest.write(r);
        this[$A] || super.emit("data", r);
      }
    }
    for (const r of this[LA])
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
    return this[Ct] ? A.join("") : Buffer.concat(A, A.dataLength);
  }
  /**
   * Return a void Promise that resolves once the stream ends.
   */
  async promise() {
    return new Promise((A, r) => {
      this.on(ze, () => r(new Error("stream destroyed"))), this.on("error", (s) => r(s)), this.on("end", () => A());
    });
  }
  /**
   * Asynchronous `for await of` iteration.
   *
   * This will continue emitting all chunks until the stream terminates.
   */
  [Symbol.asyncIterator]() {
    this[$A] = !1;
    let A = !1;
    const r = async () => (this.pause(), A = !0, { value: void 0, done: !0 });
    return {
      next: () => {
        if (A)
          return r();
        const n = this.read();
        if (n !== null)
          return Promise.resolve({ done: !1, value: n });
        if (this[Kt])
          return r();
        let i, o;
        const a = (h) => {
          this.off("data", g), this.off("end", c), this.off(ze, E), r(), o(h);
        }, g = (h) => {
          this.off("error", a), this.off("end", c), this.off(ze, E), this.pause(), i({ value: h, done: !!this[Kt] });
        }, c = () => {
          this.off("error", a), this.off("data", g), this.off(ze, E), r(), i({ done: !0, value: void 0 });
        }, E = () => a(new Error("stream destroyed"));
        return new Promise((h, Q) => {
          o = Q, i = h, this.once(ze, E), this.once("error", a), this.once("end", c), this.once("data", g);
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
    this[$A] = !1;
    let A = !1;
    const r = () => (this.pause(), this.off(Fg, r), this.off(ze, r), this.off("end", r), A = !0, { done: !0, value: void 0 }), s = () => {
      if (A)
        return r();
      const n = this.read();
      return n === null ? r() : { done: !1, value: n };
    };
    return this.once("end", r), this.once(Fg, r), this.once(ze, r), {
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
    if (this[ze])
      return A ? this.emit("error", A) : this.emit(ze), this;
    this[ze] = !0, this[$A] = !0, this[lA].length = 0, this[hA] = 0;
    const r = this;
    return typeof r.close == "function" && !this[Fo] && r.close(), A ? this.emit("error", A) : this.emit(ze), this;
  }
  /**
   * Alias for {@link isStream}
   *
   * Former export location, maintained for backwards compatibility.
   *
   * @deprecated
   */
  static get isStream() {
    return Qb;
  }
}
const Rb = sd.native, Zn = {
  lstatSync: nd,
  readdir: id,
  readdirSync: od,
  readlinkSync: ad,
  realpathSync: Rb,
  promises: {
    lstat: Id,
    readdir: dd,
    readlink: fd,
    realpath: pd
  }
}, QI = (t) => !t || t === Zn || t === rd ? Zn : {
  ...Zn,
  ...t,
  promises: {
    ...Zn.promises,
    ...t.promises || {}
  }
}, CI = /^\\\\\?\\([a-z]:)\\?$/i, Db = (t) => t.replace(/\//g, "\\").replace(CI, "$1\\"), bb = /[\\\/]/, lt = 0, BI = 1, II = 2, Lt = 4, dI = 6, fI = 8, ts = 10, pI = 12, gt = 15, _n = ~gt, vg = 16, Ju = 32, $n = 64, Bt = 128, vo = 256, Wo = 512, Ou = $n | Bt | Wo, kb = 1023, Lg = (t) => t.isFile() ? fI : t.isDirectory() ? Lt : t.isSymbolicLink() ? ts : t.isCharacterDevice() ? II : t.isBlockDevice() ? dI : t.isSocket() ? pI : t.isFIFO() ? BI : lt, _u = /* @__PURE__ */ new Map(), Xn = (t) => {
  const e = _u.get(t);
  if (e)
    return e;
  const A = t.normalize("NFKD");
  return _u.set(t, A), A;
}, Pu = /* @__PURE__ */ new Map(), Lo = (t) => {
  const e = Pu.get(t);
  if (e)
    return e;
  const A = Xn(t.toLowerCase());
  return Pu.set(t, A), A;
};
class Hu extends oa {
  constructor() {
    super({ max: 256 });
  }
}
class Sb extends oa {
  constructor(e = 16 * 1024) {
    super({
      maxSize: e,
      // parent + children
      sizeCalculation: (A) => A.length + 1
    });
  }
}
const mI = Symbol("PathScurry setAsCwd");
var xA, Ei, ui, Qi, Ci, Bi, Ii, di, fi, pi, mi, wi, yi, Ri, Di, bi, ki, Si, Fi, Tr, hs, xt, nr, ir, or, ce, Es, ar, Jt, Ni, al, $s, qo, us, Kn, Ti, cl, Ui, gl, Qs, ei, Xs, jo, vi, ll, Li, hl, Ks, zo, ua, wI, Qa, yI, Ca, RI, Mi, El, en, An, Ba, DI, Cs;
class qA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(e, A = lt, r, s, n, i, o) {
    T(this, Ni);
    T(this, $s);
    T(this, us);
    T(this, Ti);
    T(this, Ui);
    // save the information when we know the entry is not a dir
    T(this, Qs);
    T(this, Xs);
    T(this, vi);
    T(this, Li);
    T(this, Ks);
    T(this, ua);
    T(this, Qa);
    T(this, Ca);
    T(this, Mi);
    T(this, Ba);
    /**
     * the basename of this path
     *
     * **Important**: *always* test the path name against any test string
     * usingthe {@link isNamed} method, and not by directly comparing this
     * string. Otherwise, unicode path strings that the system sees as identical
     * will not be properly treated as the same path, leading to incorrect
     * behavior and possible security issues.
     */
    v(this, "name");
    /**
     * the Path entry corresponding to the path root.
     *
     * @internal
     */
    v(this, "root");
    /**
     * All roots found within the current PathScurry family
     *
     * @internal
     */
    v(this, "roots");
    /**
     * a reference to the parent path, or undefined in the case of root entries
     *
     * @internal
     */
    v(this, "parent");
    /**
     * boolean indicating whether paths are compared case-insensitively
     * @internal
     */
    v(this, "nocase");
    // potential default fs override
    T(this, xA, void 0);
    // Stats fields
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
    T(this, Si, void 0);
    T(this, Fi, void 0);
    T(this, Tr, void 0);
    T(this, hs, void 0);
    T(this, xt, void 0);
    T(this, nr, void 0);
    T(this, ir, void 0);
    T(this, or, void 0);
    T(this, ce, void 0);
    T(this, Es, void 0);
    T(this, ar, void 0);
    T(this, Jt, void 0);
    T(this, en, []);
    T(this, An, !1);
    T(this, Cs, void 0);
    this.name = e, y(this, Tr, n ? Lo(e) : Xn(e)), y(this, ce, A & kb), this.nocase = n, this.roots = s, this.root = r || this, y(this, Es, i), y(this, xt, o.fullpath), y(this, ir, o.relative), y(this, or, o.relativePosix), this.parent = o.parent, this.parent ? y(this, xA, l(this.parent, xA)) : y(this, xA, QI(o.fs));
  }
  get dev() {
    return l(this, Ei);
  }
  get mode() {
    return l(this, ui);
  }
  get nlink() {
    return l(this, Qi);
  }
  get uid() {
    return l(this, Ci);
  }
  get gid() {
    return l(this, Bi);
  }
  get rdev() {
    return l(this, Ii);
  }
  get blksize() {
    return l(this, di);
  }
  get ino() {
    return l(this, fi);
  }
  get size() {
    return l(this, pi);
  }
  get blocks() {
    return l(this, mi);
  }
  get atimeMs() {
    return l(this, wi);
  }
  get mtimeMs() {
    return l(this, yi);
  }
  get ctimeMs() {
    return l(this, Ri);
  }
  get birthtimeMs() {
    return l(this, Di);
  }
  get atime() {
    return l(this, bi);
  }
  get mtime() {
    return l(this, ki);
  }
  get ctime() {
    return l(this, Si);
  }
  get birthtime() {
    return l(this, Fi);
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
    return l(this, hs) !== void 0 ? l(this, hs) : this.parent ? y(this, hs, this.parent.depth() + 1) : y(this, hs, 0);
  }
  /**
   * @internal
   */
  childrenCache() {
    return l(this, Es);
  }
  /**
   * Get the Path object referenced by the string path, resolved from this Path
   */
  resolve(e) {
    var i;
    if (!e)
      return this;
    const A = this.getRootString(e), s = e.substring(A.length).split(this.splitSep);
    return A ? x(i = this.getRoot(A), Ni, al).call(i, s) : x(this, Ni, al).call(this, s);
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
    const e = l(this, Es).get(this);
    if (e)
      return e;
    const A = Object.assign([], { provisional: 0 });
    return l(this, Es).set(this, A), y(this, ce, l(this, ce) & ~vg), A;
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
    const r = this.children(), s = this.nocase ? Lo(e) : Xn(e);
    for (const a of r)
      if (l(a, Tr) === s)
        return a;
    const n = this.parent ? this.sep : "", i = l(this, xt) ? l(this, xt) + n + e : void 0, o = this.newChild(e, lt, {
      ...A,
      parent: this,
      fullpath: i
    });
    return this.canReaddir() || y(o, ce, l(o, ce) | Bt), r.push(o), o;
  }
  /**
   * The relative path from the cwd. If it does not share an ancestor with
   * the cwd, then this ends up being equivalent to the fullpath()
   */
  relative() {
    if (l(this, ir) !== void 0)
      return l(this, ir);
    const e = this.name, A = this.parent;
    if (!A)
      return y(this, ir, this.name);
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
    if (l(this, or) !== void 0)
      return l(this, or);
    const e = this.name, A = this.parent;
    if (!A)
      return y(this, or, this.fullpathPosix());
    const r = A.relativePosix();
    return r + (!r || !A.parent ? "" : "/") + e;
  }
  /**
   * The fully resolved path string for this Path entry
   */
  fullpath() {
    if (l(this, xt) !== void 0)
      return l(this, xt);
    const e = this.name, A = this.parent;
    if (!A)
      return y(this, xt, this.name);
    const s = A.fullpath() + (A.parent ? this.sep : "") + e;
    return y(this, xt, s);
  }
  /**
   * On platforms other than windows, this is identical to fullpath.
   *
   * On windows, this is overridden to return the forward-slash form of the
   * full UNC path.
   */
  fullpathPosix() {
    if (l(this, nr) !== void 0)
      return l(this, nr);
    if (this.sep === "/")
      return y(this, nr, this.fullpath());
    if (!this.parent) {
      const s = this.fullpath().replace(/\\/g, "/");
      return /^[a-z]:\//i.test(s) ? y(this, nr, `//?/${s}`) : y(this, nr, s);
    }
    const e = this.parent, A = e.fullpathPosix(), r = A + (!A || !e.parent ? "" : "/") + this.name;
    return y(this, nr, r);
  }
  /**
   * Is the Path of an unknown type?
   *
   * Note that we might know *something* about it if there has been a previous
   * filesystem operation, for example that it does not exist, or is not a
   * link, or whether it has child entries.
   */
  isUnknown() {
    return (l(this, ce) & gt) === lt;
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
    return (l(this, ce) & gt) === fI;
  }
  /**
   * Is the Path a directory?
   */
  isDirectory() {
    return (l(this, ce) & gt) === Lt;
  }
  /**
   * Is the path a character device?
   */
  isCharacterDevice() {
    return (l(this, ce) & gt) === II;
  }
  /**
   * Is the path a block device?
   */
  isBlockDevice() {
    return (l(this, ce) & gt) === dI;
  }
  /**
   * Is the path a FIFO pipe?
   */
  isFIFO() {
    return (l(this, ce) & gt) === BI;
  }
  /**
   * Is the path a socket?
   */
  isSocket() {
    return (l(this, ce) & gt) === pI;
  }
  /**
   * Is the path a symbolic link?
   */
  isSymbolicLink() {
    return (l(this, ce) & ts) === ts;
  }
  /**
   * Return the entry if it has been subject of a successful lstat, or
   * undefined otherwise.
   *
   * Does not read the filesystem, so an undefined result *could* simply
   * mean that we haven't called lstat on it.
   */
  lstatCached() {
    return l(this, ce) & Ju ? this : void 0;
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
    return l(this, ar);
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
    return l(this, Jt);
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
    if (l(this, ar))
      return !0;
    if (!this.parent)
      return !1;
    const e = l(this, ce) & gt;
    return !(e !== lt && e !== ts || l(this, ce) & vo || l(this, ce) & Bt);
  }
  /**
   * Return true if readdir has previously been successfully called on this
   * path, indicating that cachedReaddir() is likely valid.
   */
  calledReaddir() {
    return !!(l(this, ce) & vg);
  }
  /**
   * Returns true if the path is known to not exist. That is, a previous lstat
   * or readdir failed to verify its existence when that would have been
   * expected, or a parent entry was marked either enoent or enotdir.
   */
  isENOENT() {
    return !!(l(this, ce) & Bt);
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
    return this.nocase ? l(this, Tr) === Lo(e) : l(this, Tr) === Xn(e);
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
    var A;
    const e = l(this, ar);
    if (e)
      return e;
    if (this.canReadlink() && this.parent)
      try {
        const r = await l(this, xA).promises.readlink(this.fullpath()), s = (A = await this.parent.realpath()) == null ? void 0 : A.resolve(r);
        if (s)
          return y(this, ar, s);
      } catch (r) {
        x(this, Li, hl).call(this, r.code);
        return;
      }
  }
  /**
   * Synchronous {@link PathBase.readlink}
   */
  readlinkSync() {
    var A;
    const e = l(this, ar);
    if (e)
      return e;
    if (this.canReadlink() && this.parent)
      try {
        const r = l(this, xA).readlinkSync(this.fullpath()), s = (A = this.parent.realpathSync()) == null ? void 0 : A.resolve(r);
        if (s)
          return y(this, ar, s);
      } catch (r) {
        x(this, Li, hl).call(this, r.code);
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
    if (!(l(this, ce) & Bt))
      try {
        return x(this, Mi, El).call(this, await l(this, xA).promises.lstat(this.fullpath())), this;
      } catch (e) {
        x(this, vi, ll).call(this, e.code);
      }
  }
  /**
   * synchronous {@link PathBase.lstat}
   */
  lstatSync() {
    if (!(l(this, ce) & Bt))
      try {
        return x(this, Mi, El).call(this, l(this, xA).lstatSync(this.fullpath())), this;
      } catch (e) {
        x(this, vi, ll).call(this, e.code);
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
    if (l(this, en).push(e), l(this, An))
      return;
    y(this, An, !0);
    const s = this.fullpath();
    l(this, xA).readdir(s, { withFileTypes: !0 }, (n, i) => {
      if (n)
        x(this, Xs, jo).call(this, n.code), r.provisional = 0;
      else {
        for (const o of i)
          x(this, Ks, zo).call(this, o, r);
        x(this, $s, qo).call(this, r);
      }
      x(this, Ba, DI).call(this, r.slice(0, r.provisional));
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
    if (l(this, Cs))
      await l(this, Cs);
    else {
      let r = () => {
      };
      y(this, Cs, new Promise((s) => r = s));
      try {
        for (const s of await l(this, xA).promises.readdir(A, {
          withFileTypes: !0
        }))
          x(this, Ks, zo).call(this, s, e);
        x(this, $s, qo).call(this, e);
      } catch (s) {
        x(this, Xs, jo).call(this, s.code), e.provisional = 0;
      }
      y(this, Cs, void 0), r();
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
      for (const r of l(this, xA).readdirSync(A, {
        withFileTypes: !0
      }))
        x(this, Ks, zo).call(this, r, e);
      x(this, $s, qo).call(this, e);
    } catch (r) {
      x(this, Xs, jo).call(this, r.code), e.provisional = 0;
    }
    return e.slice(0, e.provisional);
  }
  canReaddir() {
    if (l(this, ce) & Ou)
      return !1;
    const e = gt & l(this, ce);
    return e === lt || e === Lt || e === ts;
  }
  shouldWalk(e, A) {
    return (l(this, ce) & Lt) === Lt && !(l(this, ce) & Ou) && !e.has(this) && (!A || A(this));
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
    if (l(this, Jt))
      return l(this, Jt);
    if (!((Wo | vo | Bt) & l(this, ce)))
      try {
        const e = await l(this, xA).promises.realpath(this.fullpath());
        return y(this, Jt, this.resolve(e));
      } catch {
        x(this, Ui, gl).call(this);
      }
  }
  /**
   * Synchronous {@link realpath}
   */
  realpathSync() {
    if (l(this, Jt))
      return l(this, Jt);
    if (!((Wo | vo | Bt) & l(this, ce)))
      try {
        const e = l(this, xA).realpathSync(this.fullpath());
        return y(this, Jt, this.resolve(e));
      } catch {
        x(this, Ui, gl).call(this);
      }
  }
  /**
   * Internal method to mark this Path object as the scurry cwd,
   * called by {@link PathScurry#chdir}
   *
   * @internal
   */
  [mI](e) {
    if (e === this)
      return;
    const A = /* @__PURE__ */ new Set([]);
    let r = [], s = this;
    for (; s && s.parent; )
      A.add(s), y(s, ir, r.join(this.sep)), y(s, or, r.join("/")), s = s.parent, r.push("..");
    for (s = e; s && s.parent && !A.has(s); )
      y(s, ir, void 0), y(s, or, void 0), s = s.parent;
  }
}
xA = new WeakMap(), Ei = new WeakMap(), ui = new WeakMap(), Qi = new WeakMap(), Ci = new WeakMap(), Bi = new WeakMap(), Ii = new WeakMap(), di = new WeakMap(), fi = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), wi = new WeakMap(), yi = new WeakMap(), Ri = new WeakMap(), Di = new WeakMap(), bi = new WeakMap(), ki = new WeakMap(), Si = new WeakMap(), Fi = new WeakMap(), Tr = new WeakMap(), hs = new WeakMap(), xt = new WeakMap(), nr = new WeakMap(), ir = new WeakMap(), or = new WeakMap(), ce = new WeakMap(), Es = new WeakMap(), ar = new WeakMap(), Jt = new WeakMap(), Ni = new WeakSet(), al = function(e) {
  let A = this;
  for (const r of e)
    A = A.child(r);
  return A;
}, $s = new WeakSet(), qo = function(e) {
  var A;
  y(this, ce, l(this, ce) | vg);
  for (let r = e.provisional; r < e.length; r++) {
    const s = e[r];
    s && x(A = s, us, Kn).call(A);
  }
}, us = new WeakSet(), Kn = function() {
  l(this, ce) & Bt || (y(this, ce, (l(this, ce) | Bt) & _n), x(this, Ti, cl).call(this));
}, Ti = new WeakSet(), cl = function() {
  var A;
  const e = this.children();
  e.provisional = 0;
  for (const r of e)
    x(A = r, us, Kn).call(A);
}, Ui = new WeakSet(), gl = function() {
  y(this, ce, l(this, ce) | Wo), x(this, Qs, ei).call(this);
}, Qs = new WeakSet(), ei = function() {
  if (l(this, ce) & $n)
    return;
  let e = l(this, ce);
  (e & gt) === Lt && (e &= _n), y(this, ce, e | $n), x(this, Ti, cl).call(this);
}, Xs = new WeakSet(), jo = function(e = "") {
  e === "ENOTDIR" || e === "EPERM" ? x(this, Qs, ei).call(this) : e === "ENOENT" ? x(this, us, Kn).call(this) : this.children().provisional = 0;
}, vi = new WeakSet(), ll = function(e = "") {
  var A;
  if (e === "ENOTDIR") {
    const r = this.parent;
    x(A = r, Qs, ei).call(A);
  } else
    e === "ENOENT" && x(this, us, Kn).call(this);
}, Li = new WeakSet(), hl = function(e = "") {
  var r;
  let A = l(this, ce);
  A |= vo, e === "ENOENT" && (A |= Bt), (e === "EINVAL" || e === "UNKNOWN") && (A &= _n), y(this, ce, A), e === "ENOTDIR" && this.parent && x(r = this.parent, Qs, ei).call(r);
}, Ks = new WeakSet(), zo = function(e, A) {
  return x(this, Qa, yI).call(this, e, A) || x(this, ua, wI).call(this, e, A);
}, ua = new WeakSet(), wI = function(e, A) {
  const r = Lg(e), s = this.newChild(e.name, r, { parent: this }), n = l(s, ce) & gt;
  return n !== Lt && n !== ts && n !== lt && y(s, ce, l(s, ce) | $n), A.unshift(s), A.provisional++, s;
}, Qa = new WeakSet(), yI = function(e, A) {
  for (let r = A.provisional; r < A.length; r++) {
    const s = A[r];
    if ((this.nocase ? Lo(e.name) : Xn(e.name)) === l(s, Tr))
      return x(this, Ca, RI).call(this, e, s, r, A);
  }
}, Ca = new WeakSet(), RI = function(e, A, r, s) {
  const n = A.name;
  return y(A, ce, l(A, ce) & _n | Lg(e)), n !== e.name && (A.name = e.name), r !== s.provisional && (r === s.length - 1 ? s.pop() : s.splice(r, 1), s.unshift(A)), s.provisional++, A;
}, Mi = new WeakSet(), El = function(e) {
  const { atime: A, atimeMs: r, birthtime: s, birthtimeMs: n, blksize: i, blocks: o, ctime: a, ctimeMs: g, dev: c, gid: E, ino: h, mode: Q, mtime: B, mtimeMs: u, nlink: I, rdev: f, size: C, uid: d } = e;
  y(this, bi, A), y(this, wi, r), y(this, Fi, s), y(this, Di, n), y(this, di, i), y(this, mi, o), y(this, Si, a), y(this, Ri, g), y(this, Ei, c), y(this, Bi, E), y(this, fi, h), y(this, ui, Q), y(this, ki, B), y(this, yi, u), y(this, Qi, I), y(this, Ii, f), y(this, pi, C), y(this, Ci, d);
  const w = Lg(e);
  y(this, ce, l(this, ce) & _n | w | Ju), w !== lt && w !== Lt && w !== ts && y(this, ce, l(this, ce) | $n);
}, en = new WeakMap(), An = new WeakMap(), Ba = new WeakSet(), DI = function(e) {
  y(this, An, !1);
  const A = l(this, en).slice();
  l(this, en).length = 0, A.forEach((r) => r(null, e));
}, Cs = new WeakMap();
class Ma extends qA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = lt, s, n, i, o, a) {
    super(A, r, s, n, i, o, a);
    /**
     * Separator for generating path strings.
     */
    v(this, "sep", "\\");
    /**
     * Separator for parsing path strings.
     */
    v(this, "splitSep", bb);
  }
  /**
   * @internal
   */
  newChild(A, r = lt, s = {}) {
    return new Ma(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
  /**
   * @internal
   */
  getRootString(A) {
    return Yg.parse(A).root;
  }
  /**
   * @internal
   */
  getRoot(A) {
    if (A = Db(A.toUpperCase()), A === this.root.name)
      return this.root;
    for (const [r, s] of Object.entries(this.roots))
      if (this.sameRoot(A, r))
        return this.roots[A] = s;
    return this.roots[A] = new Hl(A, this).root;
  }
  /**
   * @internal
   */
  sameRoot(A, r = this.root.name) {
    return A = A.toUpperCase().replace(/\//g, "\\").replace(CI, "$1\\"), A === r;
  }
}
class Ga extends qA {
  /**
   * Do not create new Path objects directly.  They should always be accessed
   * via the PathScurry class or other methods on the Path class.
   *
   * @internal
   */
  constructor(A, r = lt, s, n, i, o, a) {
    super(A, r, s, n, i, o, a);
    /**
     * separator for parsing path strings
     */
    v(this, "splitSep", "/");
    /**
     * separator for generating path strings
     */
    v(this, "sep", "/");
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
  newChild(A, r = lt, s = {}) {
    return new Ga(A, r, this.root, this.roots, this.nocase, this.childrenCache(), s);
  }
}
var tn, rn, Gi, Yi;
class bI {
  /**
   * This class should not be instantiated directly.
   *
   * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
   *
   * @internal
   */
  constructor(e = process.cwd(), A, r, { nocase: s, childrenCacheSize: n = 16 * 1024, fs: i = Zn } = {}) {
    /**
     * The root Path entry for the current working directory of this Scurry
     */
    v(this, "root");
    /**
     * The string path for the root of this Scurry's current working directory
     */
    v(this, "rootPath");
    /**
     * A collection of all roots encountered, referenced by rootPath
     */
    v(this, "roots");
    /**
     * The Path entry corresponding to this PathScurry's current working directory.
     */
    v(this, "cwd");
    T(this, tn, void 0);
    T(this, rn, void 0);
    T(this, Gi, void 0);
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    v(this, "nocase");
    T(this, Yi, void 0);
    y(this, Yi, QI(i)), (e instanceof URL || e.startsWith("file://")) && (e = CQ(e));
    const o = A.resolve(e);
    this.roots = /* @__PURE__ */ Object.create(null), this.rootPath = this.parseRootPath(o), y(this, tn, new Hu()), y(this, rn, new Hu()), y(this, Gi, new Sb(n));
    const a = o.substring(this.rootPath.length).split(r);
    if (a.length === 1 && !a[0] && a.pop(), s === void 0)
      throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    this.nocase = s, this.root = this.newRoot(l(this, Yi)), this.roots[this.rootPath] = this.root;
    let g = this.root, c = a.length - 1;
    const E = A.sep;
    let h = this.rootPath, Q = !1;
    for (const B of a) {
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
    return l(this, Gi);
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
    const r = l(this, tn).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpath();
    return l(this, tn).set(A, s), s;
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
    const r = l(this, rn).get(A);
    if (r !== void 0)
      return r;
    const s = this.cwd.resolve(A).fullpathPosix();
    return l(this, rn).set(A, s), s;
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e.withFileTypes, e = this.cwd);
    const r = await e.readlink();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  readlinkSync(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e.withFileTypes, e = this.cwd);
    const r = e.readlinkSync();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  async realpath(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e.withFileTypes, e = this.cwd);
    const r = await e.realpath();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  realpathSync(e = this.cwd, { withFileTypes: A } = {
    withFileTypes: !1
  }) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e.withFileTypes, e = this.cwd);
    const r = e.realpathSync();
    return A ? r : r == null ? void 0 : r.fullpath();
  }
  async walk(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = [];
    (!n || n(e)) && o.push(r ? e : e.fullpath());
    const a = /* @__PURE__ */ new Set(), g = (E, h) => {
      a.add(E), E.readdirCB((Q, B) => {
        if (Q)
          return h(Q);
        let u = B.length;
        if (!u)
          return h();
        const I = () => {
          --u === 0 && h();
        };
        for (const f of B)
          (!n || n(f)) && o.push(r ? f : f.fullpath()), s && f.isSymbolicLink() ? f.realpath().then((C) => C != null && C.isUnknown() ? C.lstat() : C).then((C) => C != null && C.shouldWalk(a, i) ? g(C, I) : I()) : f.shouldWalk(a, i) ? g(f, I) : I();
      }, !0);
    }, c = e;
    return new Promise((E, h) => {
      g(c, (Q) => {
        if (Q)
          return h(Q);
        E(o);
      });
    });
  }
  walkSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
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
    return typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd), this.stream(e, A)[Symbol.asyncIterator]();
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
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
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = new aa({ objectMode: !0 });
    (!n || n(e)) && o.write(r ? e : e.fullpath());
    const a = /* @__PURE__ */ new Set(), g = [e];
    let c = 0;
    const E = () => {
      let h = !1;
      for (; !h; ) {
        const Q = g.shift();
        if (!Q) {
          c === 0 && o.end();
          return;
        }
        c++, a.add(Q);
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
          h && !o.flowing ? o.once("drain", E) : u || E();
        };
        let u = !0;
        Q.readdirCB(B, !0), u = !1;
      }
    };
    return E(), o;
  }
  streamSync(e = this.cwd, A = {}) {
    typeof e == "string" ? e = this.cwd.resolve(e) : e instanceof qA || (A = e, e = this.cwd);
    const { withFileTypes: r = !0, follow: s = !1, filter: n, walkFilter: i } = A, o = new aa({ objectMode: !0 }), a = /* @__PURE__ */ new Set();
    (!n || n(e)) && o.write(r ? e : e.fullpath());
    const g = [e];
    let c = 0;
    const E = () => {
      let h = !1;
      for (; !h; ) {
        const Q = g.shift();
        if (!Q) {
          c === 0 && o.end();
          return;
        }
        c++, a.add(Q);
        const B = Q.readdirSync();
        for (const u of B)
          (!n || n(u)) && (o.write(r ? u : u.fullpath()) || (h = !0));
        c--;
        for (const u of B) {
          let I = u;
          if (u.isSymbolicLink()) {
            if (!(s && (I = u.realpathSync())))
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
    this.cwd = typeof e == "string" ? this.cwd.resolve(e) : e, this.cwd[mI](A);
  }
}
tn = new WeakMap(), rn = new WeakMap(), Gi = new WeakMap(), Yi = new WeakMap();
class Hl extends bI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !0 } = r;
    super(A, Yg, "\\", { ...r, nocase: s });
    /**
     * separator for generating path strings
     */
    v(this, "sep", "\\");
    this.nocase = s;
    for (let n = this.cwd; n; n = n.parent)
      n.nocase = this.nocase;
  }
  /**
   * @internal
   */
  parseRootPath(A) {
    return Yg.parse(A).root.toUpperCase();
  }
  /**
   * @internal
   */
  newRoot(A) {
    return new Ma(this.rootPath, Lt, void 0, this.roots, this.nocase, this.childrenCache(), { fs: A });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(A) {
    return A.startsWith("/") || A.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(A);
  }
}
class Vl extends bI {
  constructor(A = process.cwd(), r = {}) {
    const { nocase: s = !1 } = r;
    super(A, gd, "/", { ...r, nocase: s });
    /**
     * separator for generating path strings
     */
    v(this, "sep", "/");
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
    return new Ga(this.rootPath, Lt, void 0, this.roots, this.nocase, this.childrenCache(), { fs: A });
  }
  /**
   * Return true if the provided path string is an absolute path
   */
  isAbsolute(A) {
    return A.startsWith("/");
  }
}
class kI extends Vl {
  constructor(e = process.cwd(), A = {}) {
    const { nocase: r = !0 } = A;
    super(e, { ...A, nocase: r });
  }
}
process.platform;
const Fb = process.platform === "win32" ? Hl : process.platform === "darwin" ? kI : Vl, Nb = (t) => t.length >= 1, Tb = (t) => t.length >= 1;
var oA, tt, CA, Bs, bt, xi, Ur, vr, Lr, sn;
const Xl = class Xl {
  constructor(e, A, r, s) {
    T(this, oA, void 0);
    T(this, tt, void 0);
    T(this, CA, void 0);
    v(this, "length");
    T(this, Bs, void 0);
    T(this, bt, void 0);
    T(this, xi, void 0);
    T(this, Ur, void 0);
    T(this, vr, void 0);
    T(this, Lr, void 0);
    T(this, sn, !0);
    if (!Nb(e))
      throw new TypeError("empty pattern list");
    if (!Tb(A))
      throw new TypeError("empty glob list");
    if (A.length !== e.length)
      throw new TypeError("mismatched pattern list and glob list lengths");
    if (this.length = e.length, r < 0 || r >= this.length)
      throw new TypeError("index out of range");
    if (y(this, oA, e), y(this, tt, A), y(this, CA, r), y(this, Bs, s), l(this, CA) === 0) {
      if (this.isUNC()) {
        const [n, i, o, a, ...g] = l(this, oA), [c, E, h, Q, ...B] = l(this, tt);
        g[0] === "" && (g.shift(), B.shift());
        const u = [n, i, o, a, ""].join("/"), I = [c, E, h, Q, ""].join("/");
        y(this, oA, [u, ...g]), y(this, tt, [I, ...B]), this.length = l(this, oA).length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [n, ...i] = l(this, oA), [o, ...a] = l(this, tt);
        i[0] === "" && (i.shift(), a.shift());
        const g = n + "/", c = o + "/";
        y(this, oA, [g, ...i]), y(this, tt, [c, ...a]), this.length = l(this, oA).length;
      }
    }
  }
  /**
   * The first entry in the parsed list of patterns
   */
  pattern() {
    return l(this, oA)[l(this, CA)];
  }
  /**
   * true of if pattern() returns a string
   */
  isString() {
    return typeof l(this, oA)[l(this, CA)] == "string";
  }
  /**
   * true of if pattern() returns GLOBSTAR
   */
  isGlobstar() {
    return l(this, oA)[l(this, CA)] === JA;
  }
  /**
   * true if pattern() returns a regexp
   */
  isRegExp() {
    return l(this, oA)[l(this, CA)] instanceof RegExp;
  }
  /**
   * The /-joined set of glob parts that make up this pattern
   */
  globString() {
    return y(this, xi, l(this, xi) || (l(this, CA) === 0 ? this.isAbsolute() ? l(this, tt)[0] + l(this, tt).slice(1).join("/") : l(this, tt).join("/") : l(this, tt).slice(l(this, CA)).join("/")));
  }
  /**
   * true if there are more pattern parts after this one
   */
  hasMore() {
    return this.length > l(this, CA) + 1;
  }
  /**
   * The rest of the pattern after this part, or null if this is the end
   */
  rest() {
    return l(this, bt) !== void 0 ? l(this, bt) : this.hasMore() ? (y(this, bt, new Xl(l(this, oA), l(this, tt), l(this, CA) + 1, l(this, Bs))), y(l(this, bt), Lr, l(this, Lr)), y(l(this, bt), vr, l(this, vr)), y(l(this, bt), Ur, l(this, Ur)), l(this, bt)) : y(this, bt, null);
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    const e = l(this, oA);
    return l(this, vr) !== void 0 ? l(this, vr) : y(this, vr, l(this, Bs) === "win32" && l(this, CA) === 0 && e[0] === "" && e[1] === "" && typeof e[2] == "string" && !!e[2] && typeof e[3] == "string" && !!e[3]);
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
    const e = l(this, oA);
    return l(this, Ur) !== void 0 ? l(this, Ur) : y(this, Ur, l(this, Bs) === "win32" && l(this, CA) === 0 && this.length > 1 && typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]));
  }
  // pattern = '/' or '/...' or '/x/...'
  // split = ['', ''] or ['', ...] or ['', 'x', ...]
  // Drive and UNC both considered absolute on windows
  /**
   * True if the pattern is rooted on an absolute path
   */
  isAbsolute() {
    const e = l(this, oA);
    return l(this, Lr) !== void 0 ? l(this, Lr) : y(this, Lr, e[0] === "" && e.length > 1 || this.isDrive() || this.isUNC());
  }
  /**
   * consume the root of the pattern, and return it
   */
  root() {
    const e = l(this, oA)[0];
    return typeof e == "string" && this.isAbsolute() && l(this, CA) === 0 ? e : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(l(this, CA) === 0 || !this.isGlobstar() || !l(this, sn));
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    return l(this, CA) === 0 || !this.isGlobstar() || !l(this, sn) ? !1 : (y(this, sn, !1), !0);
  }
};
oA = new WeakMap(), tt = new WeakMap(), CA = new WeakMap(), Bs = new WeakMap(), bt = new WeakMap(), xi = new WeakMap(), Ur = new WeakMap(), vr = new WeakMap(), Lr = new WeakMap(), sn = new WeakMap();
let ca = Xl;
const Ub = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class Vu {
  constructor(e, { nobrace: A, nocase: r, noext: s, noglobstar: n, platform: i = Ub }) {
    v(this, "relative");
    v(this, "relativeChildren");
    v(this, "absolute");
    v(this, "absoluteChildren");
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
      const g = new _r(a, o);
      for (let c = 0; c < g.set.length; c++) {
        const E = g.set[c], h = g.globParts[c];
        if (!E || !h)
          throw new Error("invalid pattern object");
        const Q = new ca(E, h, 0, i), B = new _r(Q.globString(), o), u = h[h.length - 1] === "**", I = Q.isAbsolute();
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
class Wl {
  constructor(e = /* @__PURE__ */ new Map()) {
    v(this, "store");
    this.store = e;
  }
  copy() {
    return new Wl(new Map(this.store));
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
class vb {
  constructor() {
    v(this, "store", /* @__PURE__ */ new Map());
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
class Lb {
  constructor() {
    v(this, "store", /* @__PURE__ */ new Map());
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
class ga {
  constructor(e, A) {
    v(this, "hasWalkedCache");
    v(this, "matches", new vb());
    v(this, "subwalks", new Lb());
    v(this, "patterns");
    v(this, "follow");
    v(this, "dot");
    v(this, "opts");
    this.opts = e, this.follow = !!e.follow, this.dot = !!e.dot, this.hasWalkedCache = A ? A.copy() : new Wl();
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
      } else if (a === JA) {
        (!s.isSymbolicLink() || this.follow || n.checkFollowGlobstar()) && this.subwalks.add(s, n);
        const E = g == null ? void 0 : g.pattern(), h = g == null ? void 0 : g.rest();
        if (!g || (E === "" || E === ".") && !h)
          this.matches.add(s, o, E === "" || E === ".");
        else if (E === "..") {
          const Q = s.parent || s;
          h ? this.hasWalkedCache.hasWalked(Q, h) || this.subwalks.add(Q, h) : this.matches.add(Q, o, !0);
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
    return new ga(this.opts, this.hasWalkedCache);
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
        a === JA ? s.testGlobstar(n, i, g, o) : a instanceof RegExp ? s.testRegExp(n, a, g, o) : s.testString(n, a, g, o);
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
const Mb = (t, e) => typeof t == "string" ? new Vu([t], e) : Array.isArray(t) ? new Vu(t, e) : t;
var nn, on, Is, cr, rs, Ji, ul;
class SI {
  constructor(e, A, r) {
    T(this, cr);
    T(this, Ji);
    v(this, "path");
    v(this, "patterns");
    v(this, "opts");
    v(this, "seen", /* @__PURE__ */ new Set());
    v(this, "paused", !1);
    v(this, "aborted", !1);
    T(this, nn, []);
    T(this, on, void 0);
    T(this, Is, void 0);
    v(this, "signal");
    v(this, "maxDepth");
    this.patterns = e, this.path = A, this.opts = r, y(this, Is, !r.posix && r.platform === "win32" ? "\\" : "/"), r.ignore && y(this, on, Mb(r.ignore, r)), this.maxDepth = r.maxDepth || 1 / 0, r.signal && (this.signal = r.signal, this.signal.addEventListener("abort", () => {
      l(this, nn).length = 0;
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
    for (; !this.paused && (e = l(this, nn).shift()); )
      e();
  }
  onResume(e) {
    var A;
    (A = this.signal) != null && A.aborted || (this.paused ? l(this, nn).push(e) : e());
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
    return e && (this.maxDepth === 1 / 0 || e.depth() <= this.maxDepth) && (!A || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !x(this, cr, rs).call(this, e) ? e : void 0;
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
    if (x(this, cr, rs).call(this, e))
      return;
    const r = this.opts.absolute === void 0 ? A : this.opts.absolute;
    this.seen.add(e);
    const s = this.opts.mark && e.isDirectory() ? l(this, Is) : "";
    if (this.opts.withFileTypes)
      this.matchEmit(e);
    else if (r) {
      const n = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(n + s);
    } else {
      const n = this.opts.posix ? e.relativePosix() : e.relative(), i = this.opts.dotRelative && !n.startsWith(".." + l(this, Is)) ? "." + l(this, Is) : "";
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
    (s = this.signal) != null && s.aborted && r(), this.walkCB2(e, A, new ga(this.opts), r);
  }
  walkCB2(e, A, r, s) {
    var o;
    if (x(this, Ji, ul).call(this, e))
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
      x(this, cr, rs).call(this, a) || (n++, this.match(a, g, c).then(() => i()));
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
      x(this, cr, rs).call(this, o) || (n++, this.match(o, a, g).then(() => i()));
    for (const [o, a] of r.subwalks.entries())
      n++, this.walkCB2(o, a, r.child(), i);
    i();
  }
  walkCBSync(e, A, r) {
    var s;
    (s = this.signal) != null && s.aborted && r(), this.walkCB2Sync(e, A, new ga(this.opts), r);
  }
  walkCB2Sync(e, A, r, s) {
    var o;
    if (x(this, Ji, ul).call(this, e))
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
      x(this, cr, rs).call(this, a) || this.matchSync(a, g, c);
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
      x(this, cr, rs).call(this, o) || this.matchSync(o, a, g);
    for (const [o, a] of r.subwalks.entries())
      n++, this.walkCB2Sync(o, a, r.child(), i);
    i();
  }
}
nn = new WeakMap(), on = new WeakMap(), Is = new WeakMap(), cr = new WeakSet(), rs = function(e) {
  var A, r;
  return this.seen.has(e) || !!((r = (A = l(this, on)) == null ? void 0 : A.ignored) != null && r.call(A, e));
}, Ji = new WeakSet(), ul = function(e) {
  var A, r;
  return !!((r = (A = l(this, on)) == null ? void 0 : A.childrenIgnored) != null && r.call(A, e));
};
class Wu extends SI {
  constructor(A, r, s) {
    super(A, r, s);
    v(this, "matches");
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
class qu extends SI {
  constructor(A, r, s) {
    super(A, r, s);
    v(this, "results");
    this.results = new aa({
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
const Gb = typeof process == "object" && process && typeof process.platform == "string" ? process.platform : "linux";
class Rs {
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
    v(this, "absolute");
    v(this, "cwd");
    v(this, "root");
    v(this, "dot");
    v(this, "dotRelative");
    v(this, "follow");
    v(this, "ignore");
    v(this, "magicalBraces");
    v(this, "mark");
    v(this, "matchBase");
    v(this, "maxDepth");
    v(this, "nobrace");
    v(this, "nocase");
    v(this, "nodir");
    v(this, "noext");
    v(this, "noglobstar");
    v(this, "pattern");
    v(this, "platform");
    v(this, "realpath");
    v(this, "scurry");
    v(this, "stat");
    v(this, "signal");
    v(this, "windowsPathsNoEscape");
    v(this, "withFileTypes");
    /**
     * The options provided to the constructor.
     */
    v(this, "opts");
    /**
     * An array of parsed immutable {@link Pattern} objects.
     */
    v(this, "patterns");
    if (!A)
      throw new TypeError("glob options required");
    if (this.withFileTypes = !!A.withFileTypes, this.signal = A.signal, this.follow = !!A.follow, this.dot = !!A.dot, this.dotRelative = !!A.dotRelative, this.nodir = !!A.nodir, this.mark = !!A.mark, A.cwd ? (A.cwd instanceof URL || A.cwd.startsWith("file://")) && (A.cwd = CQ(A.cwd)) : this.cwd = "", this.cwd = A.cwd || "", this.root = A.root, this.magicalBraces = !!A.magicalBraces, this.nobrace = !!A.nobrace, this.noext = !!A.noext, this.realpath = !!A.realpath, this.absolute = A.absolute, this.noglobstar = !!A.noglobstar, this.matchBase = !!A.matchBase, this.maxDepth = typeof A.maxDepth == "number" ? A.maxDepth : 1 / 0, this.stat = !!A.stat, this.ignore = A.ignore, this.withFileTypes && this.absolute !== void 0)
      throw new Error("cannot set absolute and withFileTypes:true");
    if (typeof e == "string" && (e = [e]), this.windowsPathsNoEscape = !!A.windowsPathsNoEscape || A.allowWindowsEscape === !1, this.windowsPathsNoEscape && (e = e.map((a) => a.replace(/\\/g, "/"))), this.matchBase) {
      if (A.noglobstar)
        throw new TypeError("base matching requires globstar");
      e = e.map((a) => a.includes("/") ? a : `./**/${a}`);
    }
    if (this.pattern = e, this.platform = A.platform || Gb, this.opts = { ...A, platform: this.platform }, A.scurry) {
      if (this.scurry = A.scurry, A.nocase !== void 0 && A.nocase !== A.scurry.nocase)
        throw new Error("nocase option contradicts provided scurry option");
    } else {
      const a = A.platform === "win32" ? Hl : A.platform === "darwin" ? kI : A.platform ? Vl : Fb;
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
    }, n = this.pattern.map((a) => new _r(a, s)), [i, o] = n.reduce((a, g) => (a[0].push(...g.set), a[1].push(...g.globParts), a), [[], []]);
    this.patterns = i.map((a, g) => {
      const c = o[g];
      if (!c)
        throw new Error("invalid pattern object");
      return new ca(a, c, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new Wu(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new Wu(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new qu(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new qu(this.patterns, this.scurry.cwd, {
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
const Yb = (t, e = {}) => {
  Array.isArray(t) || (t = [t]);
  for (const A of t)
    if (new _r(A, e).hasMagic())
      return !0;
  return !1;
};
function Ya(t, e = {}) {
  return new Rs(t, e).streamSync();
}
function FI(t, e = {}) {
  return new Rs(t, e).stream();
}
function ql(t, e = {}) {
  return new Rs(t, e).walkSync();
}
async function ju(t, e = {}) {
  return new Rs(t, e).walk();
}
function xa(t, e = {}) {
  return new Rs(t, e).iterateSync();
}
function NI(t, e = {}) {
  return new Rs(t, e).iterate();
}
const xb = Ya, Jb = Object.assign(FI, { sync: Ya }), Ob = xa, _b = Object.assign(NI, {
  sync: xa
}), Pb = Object.assign(ql, {
  stream: Ya,
  iterate: xa
}), zu = Object.assign(ju, {
  glob: ju,
  globSync: ql,
  sync: Pb,
  globStream: FI,
  stream: Jb,
  globStreamSync: Ya,
  streamSync: xb,
  globIterate: NI,
  iterate: _b,
  globIterateSync: xa,
  iterateSync: Ob,
  Glob: Rs,
  hasMagic: Yb,
  escape: nI,
  unescape: Os
});
zu.glob = zu;
function Ja() {
  return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof process == "object" && process.version !== void 0 ? `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})` : "<environment undetectable>";
}
var Oa = { exports: {} }, Hb = TI;
function TI(t, e, A, r) {
  if (typeof A != "function")
    throw new Error("method for before hook must be a function");
  return r || (r = {}), Array.isArray(e) ? e.reverse().reduce(function(s, n) {
    return TI.bind(null, t, n, s, r);
  }, A)() : Promise.resolve().then(function() {
    return t.registry[e] ? t.registry[e].reduce(function(s, n) {
      return n.hook.bind(null, s, r);
    }, A)() : A(r);
  });
}
var Vb = Wb;
function Wb(t, e, A, r) {
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
var qb = jb;
function jb(t, e, A) {
  if (t.registry[e]) {
    var r = t.registry[e].map(function(s) {
      return s.orig;
    }).indexOf(A);
    r !== -1 && t.registry[e].splice(r, 1);
  }
}
var UI = Hb, zb = Vb, Zb = qb, Zu = Function.bind, $u = Zu.bind(Zu);
function vI(t, e, A) {
  var r = $u(Zb, null).apply(
    null,
    A ? [e, A] : [e]
  );
  t.api = { remove: r }, t.remove = r, ["before", "error", "after", "wrap"].forEach(function(s) {
    var n = A ? [e, s, A] : [e, s];
    t[s] = t.api[s] = $u(zb, null).apply(null, n);
  });
}
function $b() {
  var t = "h", e = {
    registry: {}
  }, A = UI.bind(null, e, t);
  return vI(A, e, t), A;
}
function LI() {
  var t = {
    registry: {}
  }, e = UI.bind(null, t);
  return vI(e, t), e;
}
var Xu = !1;
function wn() {
  return Xu || (console.warn(
    '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
  ), Xu = !0), LI();
}
wn.Singular = $b.bind();
wn.Collection = LI.bind();
Oa.exports = wn;
Oa.exports.Hook = wn;
Oa.exports.Singular = wn.Singular;
var Xb = Oa.exports.Collection = wn.Collection, Kb = "9.0.5", ek = `octokit-endpoint.js/${Kb} ${Ja()}`, Ak = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": ek
  },
  mediaType: {
    format: ""
  }
};
function tk(t) {
  return t ? Object.keys(t).reduce((e, A) => (e[A.toLowerCase()] = t[A], e), {}) : {};
}
function rk(t) {
  if (typeof t != "object" || t === null || Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  if (e === null)
    return !0;
  const A = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof A == "function" && A instanceof A && Function.prototype.call(A) === Function.prototype.call(t);
}
function MI(t, e) {
  const A = Object.assign({}, t);
  return Object.keys(e).forEach((r) => {
    rk(e[r]) ? r in t ? A[r] = MI(t[r], e[r]) : Object.assign(A, { [r]: e[r] }) : Object.assign(A, { [r]: e[r] });
  }), A;
}
function Ku(t) {
  for (const e in t)
    t[e] === void 0 && delete t[e];
  return t;
}
function Ql(t, e, A) {
  var s;
  if (typeof e == "string") {
    let [n, i] = e.split(" ");
    A = Object.assign(i ? { method: n, url: i } : { url: n }, A);
  } else
    A = Object.assign({}, e);
  A.headers = tk(A.headers), Ku(A), Ku(A.headers);
  const r = MI(t || {}, A);
  return A.url === "/graphql" && (t && ((s = t.mediaType.previews) != null && s.length) && (r.mediaType.previews = t.mediaType.previews.filter(
    (n) => !r.mediaType.previews.includes(n)
  ).concat(r.mediaType.previews)), r.mediaType.previews = (r.mediaType.previews || []).map((n) => n.replace(/-preview/, ""))), r;
}
function sk(t, e) {
  const A = /\?/.test(t) ? "&" : "?", r = Object.keys(e);
  return r.length === 0 ? t : t + A + r.map((s) => s === "q" ? "q=" + e.q.split("+").map(encodeURIComponent).join("+") : `${s}=${encodeURIComponent(e[s])}`).join("&");
}
var nk = /\{[^}]+\}/g;
function ik(t) {
  return t.replace(/^\W+|\W+$/g, "").split(/,/);
}
function ok(t) {
  const e = t.match(nk);
  return e ? e.map(ik).reduce((A, r) => A.concat(r), []) : [];
}
function eQ(t, e) {
  const A = { __proto__: null };
  for (const r of Object.keys(t))
    e.indexOf(r) === -1 && (A[r] = t[r]);
  return A;
}
function GI(t) {
  return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(e) {
    return /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")), e;
  }).join("");
}
function _s(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Pn(t, e, A) {
  return e = t === "+" || t === "#" ? GI(e) : _s(e), A ? _s(A) + "=" + e : e;
}
function Gs(t) {
  return t != null;
}
function Mg(t) {
  return t === ";" || t === "&" || t === "?";
}
function ak(t, e, A, r) {
  var s = t[A], n = [];
  if (Gs(s) && s !== "")
    if (typeof s == "string" || typeof s == "number" || typeof s == "boolean")
      s = s.toString(), r && r !== "*" && (s = s.substring(0, parseInt(r, 10))), n.push(
        Pn(e, s, Mg(e) ? A : "")
      );
    else if (r === "*")
      Array.isArray(s) ? s.filter(Gs).forEach(function(i) {
        n.push(
          Pn(e, i, Mg(e) ? A : "")
        );
      }) : Object.keys(s).forEach(function(i) {
        Gs(s[i]) && n.push(Pn(e, s[i], i));
      });
    else {
      const i = [];
      Array.isArray(s) ? s.filter(Gs).forEach(function(o) {
        i.push(Pn(e, o));
      }) : Object.keys(s).forEach(function(o) {
        Gs(s[o]) && (i.push(_s(o)), i.push(Pn(e, s[o].toString())));
      }), Mg(e) ? n.push(_s(A) + "=" + i.join(",")) : i.length !== 0 && n.push(i.join(","));
    }
  else
    e === ";" ? Gs(s) && n.push(_s(A)) : s === "" && (e === "&" || e === "?") ? n.push(_s(A) + "=") : s === "" && n.push("");
  return n;
}
function ck(t) {
  return {
    expand: gk.bind(null, t)
  };
}
function gk(t, e) {
  var A = ["+", "#", ".", "/", ";", "?", "&"];
  return t = t.replace(
    /\{([^\{\}]+)\}|([^\{\}]+)/g,
    function(r, s, n) {
      if (s) {
        let o = "";
        const a = [];
        if (A.indexOf(s.charAt(0)) !== -1 && (o = s.charAt(0), s = s.substr(1)), s.split(/,/g).forEach(function(g) {
          var c = /([^:\*]*)(?::(\d+)|(\*))?/.exec(g);
          a.push(ak(e, o, c[1], c[2] || c[3]));
        }), o && o !== "+") {
          var i = ",";
          return o === "?" ? i = "&" : o !== "#" && (i = o), (a.length !== 0 ? o : "") + a.join(i);
        } else
          return a.join(",");
      } else
        return GI(n);
    }
  ), t === "/" ? t : t.replace(/\/$/, "");
}
function YI(t) {
  var c;
  let e = t.method.toUpperCase(), A = (t.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), r = Object.assign({}, t.headers), s, n = eQ(t, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const i = ok(A);
  A = ck(A).expand(n), /^http/.test(A) || (A = t.baseUrl + A);
  const o = Object.keys(t).filter((E) => i.includes(E)).concat("baseUrl"), a = eQ(n, o);
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
  return ["GET", "HEAD"].includes(e) ? A = sk(A, a) : "data" in a ? s = a.data : Object.keys(a).length && (s = a), !r["content-type"] && typeof s < "u" && (r["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(e) && typeof s > "u" && (s = ""), Object.assign(
    { method: e, url: A, headers: r },
    typeof s < "u" ? { body: s } : null,
    t.request ? { request: t.request } : null
  );
}
function lk(t, e, A) {
  return YI(Ql(t, e, A));
}
function xI(t, e) {
  const A = Ql(t, e), r = lk.bind(null, A);
  return Object.assign(r, {
    DEFAULTS: A,
    defaults: xI.bind(null, A),
    merge: Ql.bind(null, A),
    parse: YI
  });
}
var hk = xI(null, Ak);
class AQ extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
  }
}
var jl = { exports: {} }, Ek = JI;
function JI(t, e) {
  if (t && e)
    return JI(t)(e);
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
var OI = Ek;
jl.exports = OI(Zo);
jl.exports.strict = OI(_I);
Zo.proto = Zo(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return Zo(this);
    },
    configurable: !0
  }), Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return _I(this);
    },
    configurable: !0
  });
});
function Zo(t) {
  var e = function() {
    return e.called ? e.value : (e.called = !0, e.value = t.apply(this, arguments));
  };
  return e.called = !1, e;
}
function _I(t) {
  var e = function() {
    if (e.called)
      throw new Error(e.onceError);
    return e.called = !0, e.value = t.apply(this, arguments);
  }, A = t.name || "Function wrapped with `once`";
  return e.onceError = A + " shouldn't be called more than once", e.called = !1, e;
}
var uk = jl.exports;
const PI = /* @__PURE__ */ fl(uk);
var Qk = PI((t) => console.warn(t)), Ck = PI((t) => console.warn(t)), Hn = class extends Error {
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
        return Qk(
          new AQ(
            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
          )
        ), e;
      }
    }), Object.defineProperty(this, "headers", {
      get() {
        return Ck(
          new AQ(
            "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
          )
        ), r || {};
      }
    });
  }
}, Bk = "8.3.1";
function Ik(t) {
  if (typeof t != "object" || t === null || Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  if (e === null)
    return !0;
  const A = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof A == "function" && A instanceof A && Function.prototype.call(A) === Function.prototype.call(t);
}
function dk(t) {
  return t.arrayBuffer();
}
function tQ(t) {
  var o, a, g;
  const e = t.request && t.request.log ? t.request.log : console, A = ((o = t.request) == null ? void 0 : o.parseSuccessResponseBody) !== !1;
  (Ik(t.body) || Array.isArray(t.body)) && (t.body = JSON.stringify(t.body));
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
        throw new Hn(c.statusText, s, {
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
        throw new Hn("Not modified", s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: await Gg(c)
          },
          request: t
        });
      if (s >= 400) {
        const E = await Gg(c);
        throw new Hn(fk(E), s, {
          response: {
            url: n,
            status: s,
            headers: r,
            data: E
          },
          request: t
        });
      }
      return A ? await Gg(c) : c.body;
    }
  }).then((c) => ({
    status: s,
    url: n,
    headers: r,
    data: c
  })).catch((c) => {
    if (c instanceof Hn)
      throw c;
    if (c.name === "AbortError")
      throw c;
    let E = c.message;
    throw c.name === "TypeError" && "cause" in c && (c.cause instanceof Error ? E = c.cause.message : typeof c.cause == "string" && (E = c.cause)), new Hn(E, 500, {
      request: t
    });
  });
}
async function Gg(t) {
  const e = t.headers.get("content-type");
  return /application\/json/.test(e) ? t.json().catch(() => t.text()).catch(() => "") : !e || /^text\/|charset=utf-8$/.test(e) ? t.text() : dk(t);
}
function fk(t) {
  if (typeof t == "string")
    return t;
  let e;
  return "documentation_url" in t ? e = ` - ${t.documentation_url}` : e = "", "message" in t ? Array.isArray(t.errors) ? `${t.message}: ${t.errors.map(JSON.stringify).join(", ")}${e}` : `${t.message}${e}` : `Unknown error: ${JSON.stringify(t)}`;
}
function Cl(t, e) {
  const A = t.defaults(e);
  return Object.assign(function(s, n) {
    const i = A.merge(s, n);
    if (!i.request || !i.request.hook)
      return tQ(A.parse(i));
    const o = (a, g) => tQ(
      A.parse(A.merge(a, g))
    );
    return Object.assign(o, {
      endpoint: A,
      defaults: Cl.bind(null, A)
    }), i.request.hook(o, i);
  }, {
    endpoint: A,
    defaults: Cl.bind(null, A)
  });
}
var Bl = Cl(hk, {
  headers: {
    "user-agent": `octokit-request.js/${Bk} ${Ja()}`
  }
}), pk = "7.1.0";
function mk(t) {
  return `Request failed due to following response errors:
` + t.errors.map((e) => ` - ${e.message}`).join(`
`);
}
var wk = class extends Error {
  constructor(t, e, A) {
    super(mk(A)), this.request = t, this.headers = e, this.response = A, this.name = "GraphqlResponseError", this.errors = A.errors, this.data = A.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, yk = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
], Rk = ["query", "method", "url"], rQ = /\/api\/v3\/?$/;
function Dk(t, e, A) {
  if (A) {
    if (typeof e == "string" && "query" in A)
      return Promise.reject(
        new Error('[@octokit/graphql] "query" cannot be used as variable name')
      );
    for (const i in A)
      if (Rk.includes(i))
        return Promise.reject(
          new Error(
            `[@octokit/graphql] "${i}" cannot be used as variable name`
          )
        );
  }
  const r = typeof e == "string" ? Object.assign({ query: e }, A) : e, s = Object.keys(
    r
  ).reduce((i, o) => yk.includes(o) ? (i[o] = r[o], i) : (i.variables || (i.variables = {}), i.variables[o] = r[o], i), {}), n = r.baseUrl || t.endpoint.DEFAULTS.baseUrl;
  return rQ.test(n) && (s.url = n.replace(rQ, "/api/graphql")), t(s).then((i) => {
    if (i.data.errors) {
      const o = {};
      for (const a of Object.keys(i.headers))
        o[a] = i.headers[a];
      throw new wk(
        s,
        o,
        i.data
      );
    }
    return i.data.data;
  });
}
function zl(t, e) {
  const A = t.defaults(e);
  return Object.assign((s, n) => Dk(A, s, n), {
    defaults: zl.bind(null, A),
    endpoint: A.endpoint
  });
}
zl(Bl, {
  headers: {
    "user-agent": `octokit-graphql.js/${pk} ${Ja()}`
  },
  method: "POST",
  url: "/graphql"
});
function bk(t) {
  return zl(t, {
    method: "POST",
    url: "/graphql"
  });
}
var kk = /^v1\./, Sk = /^ghs_/, Fk = /^ghu_/;
async function Nk(t) {
  const e = t.split(/\./).length === 3, A = kk.test(t) || Sk.test(t), r = Fk.test(t);
  return {
    type: "token",
    token: t,
    tokenType: e ? "app" : A ? "installation" : r ? "user-to-server" : "oauth"
  };
}
function Tk(t) {
  return t.split(/\./).length === 3 ? `bearer ${t}` : `token ${t}`;
}
async function Uk(t, e, A, r) {
  const s = e.endpoint.merge(
    A,
    r
  );
  return s.headers.authorization = Tk(t), e(s);
}
var vk = function(e) {
  if (!e)
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  if (typeof e != "string")
    throw new Error(
      "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
    );
  return e = e.replace(/^(token|bearer) +/i, ""), Object.assign(Nk.bind(null, e), {
    hook: Uk.bind(null, e)
  });
}, HI = "5.2.0", sQ = () => {
}, Lk = console.warn.bind(console), Mk = console.error.bind(console), nQ = `octokit-core.js/${HI} ${Ja()}`, Cn, Gk = (Cn = class {
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
    const A = new Xb(), r = {
      baseUrl: Bl.endpoint.DEFAULTS.baseUrl,
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
    if (r.headers["user-agent"] = e.userAgent ? `${e.userAgent} ${nQ}` : nQ, e.baseUrl && (r.baseUrl = e.baseUrl), e.previews && (r.mediaType.previews = e.previews), e.timeZone && (r.headers["time-zone"] = e.timeZone), this.request = Bl.defaults(r), this.graphql = bk(this.request).defaults(r), this.log = Object.assign(
      {
        debug: sQ,
        info: sQ,
        warn: Lk,
        error: Mk
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
      const n = vk(e.auth);
      A.wrap("request", n.hook), this.auth = n;
    }
    const s = this.constructor;
    for (let n = 0; n < s.plugins.length; ++n)
      Object.assign(this, s.plugins[n](this, e));
  }
}, Cn.VERSION = HI, Cn.plugins = [], Cn), Yk = "4.0.1";
function VI(t) {
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
VI.VERSION = Yk;
var xk = "9.2.1";
function Jk(t) {
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
function Zl(t, e, A) {
  const r = typeof e == "function" ? e.endpoint(A) : t.request.endpoint(e, A), s = typeof e == "function" ? e : t.request, n = r.method, i = r.headers;
  let o = r.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!o)
          return { done: !0 };
        try {
          const a = await s({ method: n, url: o, headers: i }), g = Jk(a);
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
function WI(t, e, A, r) {
  return typeof A == "function" && (r = A, A = void 0), qI(
    t,
    [],
    Zl(t, e, A)[Symbol.asyncIterator](),
    r
  );
}
function qI(t, e, A, r) {
  return A.next().then((s) => {
    if (s.done)
      return e;
    let n = !1;
    function i() {
      n = !0;
    }
    return e = e.concat(
      r ? r(s.value, i) : s.value.data
    ), n ? e : qI(t, e, A, r);
  });
}
Object.assign(WI, {
  iterator: Zl
});
function jI(t) {
  return {
    paginate: Object.assign(WI.bind(null, t), {
      iterator: Zl.bind(null, t)
    })
  };
}
jI.VERSION = xk;
var Ok = "10.4.1", _k = {
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
}, Pk = _k, ps = /* @__PURE__ */ new Map();
for (const [t, e] of Object.entries(Pk))
  for (const [A, r] of Object.entries(e)) {
    const [s, n, i] = r, [o, a] = s.split(/ /), g = Object.assign(
      {
        method: o,
        url: a
      },
      n
    );
    ps.has(t) || ps.set(t, /* @__PURE__ */ new Map()), ps.get(t).set(A, {
      scope: t,
      methodName: A,
      endpointDefaults: g,
      decorations: i
    });
  }
var Hk = {
  has({ scope: t }, e) {
    return ps.get(t).has(e);
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
    return [...ps.get(t).keys()];
  },
  set(t, e, A) {
    return t.cache[e] = A;
  },
  get({ octokit: t, scope: e, cache: A }, r) {
    if (A[r])
      return A[r];
    const s = ps.get(e).get(r);
    if (!s)
      return;
    const { endpointDefaults: n, decorations: i } = s;
    return i ? A[r] = Wk(
      t,
      e,
      r,
      n,
      i
    ) : A[r] = t.request.defaults(n), A[r];
  }
};
function Vk(t) {
  const e = {};
  for (const A of ps.keys())
    e[A] = new Proxy({ octokit: t, scope: A, cache: {} }, Hk);
  return e;
}
function Wk(t, e, A, r, s) {
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
function zI(t) {
  const e = Vk(t);
  return {
    ...e,
    rest: e
  };
}
zI.VERSION = Ok;
var qk = "20.0.2", iQ = Gk.plugin(
  VI,
  zI,
  jI
).defaults({
  userAgent: `octokit-rest.js/${qk}`
}), ZI = { exports: {} };
(function() {
  function t(e) {
    var A;
    return e instanceof Buffer ? A = e : A = Buffer.from(e.toString(), "binary"), A.toString("base64");
  }
  ZI.exports = t;
})();
var jk = ZI.exports;
const zk = /* @__PURE__ */ fl(jk);
class Zk {
  constructor(e, A, r) {
    v(this, "octokit");
    this.owner = e, this.repositoryName = A, this.octokit = new iQ({ auth: r });
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
        content: zk(cd(i)),
        encoding: A
      });
      n.push({ type: r, mode: s, path: i, sha: o });
    }
    return n;
  }
  async createCommit({ branchSha: e, treeSha: A, message: r, token: s, amend: n }) {
    const i = s ? new iQ({ auth: s }) : this.octokit;
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
      ...Te({ body: s }),
      ...Te({ draft: c })
    });
    return (o || a) && await this.octokit.rest.pulls.requestReviewers({
      ...this.getRepositoryInfo(),
      pull_number: E.number,
      ...Te({ reviewers: o }),
      ...Te({ team_reviewers: a })
    }), (n || i || g) && await this.octokit.rest.issues.update({
      ...this.getRepositoryInfo(),
      issue_number: E.number,
      ...Te({ labels: n }),
      ...Te({ assignees: i }),
      ...Te({ milestone: g })
    }), E;
  }
}
const oQ = "refs/heads/", $k = (t) => {
  const A = t.reduce((r, s) => (r.push(...ql(s, { nodir: !0 })), r), []).reduce((r, s) => bu.isFileUntracked(s) ? (console.info(`File "${s}" is created`), r.push(s), r) : (bu.isFileChanged(s) && (console.info(`File "${s}" is changed`), r.push(s)), r), []);
  return A.length === 0 && console.info("No file has been changed"), A;
}, Xk = async (t, { name: e, base: A, recreate: r = !1 }) => {
  if (await t.hasBranch(e))
    if (console.info(`Branch "${e}" already exists`), r)
      console.info(`Deleting branch "${e}"...`), await t.deleteBranch(e), console.info(`Branch "${e}" has been deleted`);
    else
      return;
  const {
    object: { sha: s }
  } = await t.getBranch(A ?? await t.getDefaultBranchName());
  await t.createBranch(e, s), console.info(`Branch "${e}" has been created`);
}, Kk = async (t, e, A, r) => {
  const s = await t.commitFiles({
    ...r,
    paths: e,
    branchName: A
  });
  jB.setOutput("commit.sha", s.sha), console.info(`Changed files have been committed to ${s.sha}`);
}, eS = async (t, e, A) => {
  const r = await t.createPullRequest({
    ...A,
    ...Te({ baseBranchName: A.base }),
    branchName: e
  });
  console.info(`Pull request has been created at ${r.html_url}`);
}, AS = async ({
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
    A.startsWith(oQ) && (A = A.slice(oQ.length));
    const a = s ? $k(s.paths) : null;
    if ((a == null ? void 0 : a.length) === 0)
      return 0;
    const g = new Zk(i, o, e);
    await Xk(g, { name: A, ...r }), s && a && await Kk(g, a, A, s), n && await eS(g, A, {
      ...Te({ title: s == null ? void 0 : s.message }),
      ...n
    });
  } catch (i) {
    return console.error(i), 1;
  }
  return 0;
}, tS = ["paths", "message", "token", "amend"], rS = [
  "title",
  "body",
  "base",
  "labels",
  "assignees",
  "reviewers",
  "team-reviewers",
  "milestone",
  "draft"
], sS = () => tS.some((t) => $e.hasInput(`commit.${t}`)), nS = () => rS.some((t) => $e.hasInput(`pull-request.${t}`)), iS = () => {
  const t = $e.getInputAsString("branch.name", { required: !0 }), e = $e.getInputAsString("branch.base"), A = $e.getInputAsBoolean("branch.recreate");
  return {
    name: t,
    ...Te({ base: e }, null),
    ...Te({ recreate: A }, null)
  };
}, oS = () => {
  if (!($e.getInputAsBoolean("commit") ?? sS()))
    return null;
  const e = $e.getInputAsStrings("commit.paths", { required: !0 }), A = $e.getInputAsString("commit.message"), r = $e.getInputAsString("commit.token"), s = $e.getInputAsBoolean("commit.amend");
  return {
    paths: e,
    ...Te({ message: A }, null),
    ...Te({ token: r }, null),
    ...Te({ amend: s }, null)
  };
}, aS = () => {
  if (!($e.getInputAsBoolean("pull-request") ?? nS()))
    return null;
  const e = $e.getInputAsString("pull-request.title"), A = $e.getInputAsString("pull-request.body"), r = $e.getInputAsString("pull-request.base"), s = $e.getInputAsStrings("pull-request.labels"), n = $e.getInputAsStrings("pull-request.assignees"), i = $e.getInputAsStrings("pull-request.reviewers"), o = $e.getInputAsStrings("pull-request.team-reviewers"), a = $e.getInputAsInteger("pull-request.milestone"), g = $e.getInputAsBoolean("pull-request.draft");
  return {
    ...Te({ title: e }, null),
    ...Te({ body: A }, null),
    ...Te({ base: r }, null),
    ...Te({ labels: s }, null),
    ...Te({ assignees: n }, null),
    ...Te({ reviewers: i }, null),
    ...Te({ teamReviewers: o }, null),
    ...Te({ milestone: a }, null),
    ...Te({ draft: g }, null)
  };
}, cS = async () => {
  try {
    const t = CD.requireEnv({
      GITHUB_REPOSITORY: pl.str()
    }), e = $e.getInputAsString("token", { required: !0 }), A = iS(), r = oS(), s = aS(), n = await AS({
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
cS();
