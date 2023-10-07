var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _patternList, _globList, _index, _platform, _rest, _globString, _isDrive, _isUNC, _isAbsolute, _followGlobstar, _onResume, _ignore, _sep, _ignored, ignored_fn, _childrenIgnored, childrenIgnored_fn;
import require$$0 from "tslib";
import require$$0$1 from "os";
import require$$0$2, { readFileSync } from "fs";
import require$$2 from "uuid";
import require$$0$4 from "path";
import require$$0$3 from "@actions/http-client";
import require$$1 from "@actions/http-client/lib/auth.js";
import { execSync } from "child_process";
import { GLOBSTAR, Minimatch, escape, unescape } from "minimatch";
import { PathScurryWin32, PathScurryDarwin, PathScurryPosix, PathScurry } from "path-scurry";
import { fileURLToPath } from "url";
import { Minipass } from "minipass";
import { Octokit as Octokit$1 } from "@octokit/core";
import { requestLog } from "@octokit/plugin-request-log";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { legacyRestEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dist = {};
var envalid = {};
var core$1 = {};
var errors = {};
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors)
    return errors;
  hasRequiredErrors = 1;
  Object.defineProperty(errors, "__esModule", { value: true });
  errors.EnvMissingError = errors.EnvError = void 0;
  var tslib_1 = require$$0;
  var EnvError = (
    /** @class */
    function(_super) {
      tslib_1.__extends(EnvError2, _super);
      function EnvError2(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        Error.captureStackTrace(_this, EnvError2);
        _this.name = _this.constructor.name;
        return _this;
      }
      return EnvError2;
    }(TypeError)
  );
  errors.EnvError = EnvError;
  var EnvMissingError = (
    /** @class */
    function(_super) {
      tslib_1.__extends(EnvMissingError2, _super);
      function EnvMissingError2(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        Error.captureStackTrace(_this, EnvMissingError2);
        _this.name = _this.constructor.name;
        return _this;
      }
      return EnvMissingError2;
    }(ReferenceError)
  );
  errors.EnvMissingError = EnvMissingError;
  return errors;
}
var reporter = {};
var hasRequiredReporter;
function requireReporter() {
  if (hasRequiredReporter)
    return reporter;
  hasRequiredReporter = 1;
  (function(exports) {
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultReporter = exports.envalidErrorFormatter = void 0;
    var errors_1 = requireErrors();
    var defaultLogger = console.error.bind(console);
    var isNode = !!(typeof process === "object" && ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node));
    var colorWith = function(colorCode) {
      return function(str) {
        return isNode ? "\x1B[".concat(colorCode, "m").concat(str, "\x1B[0m") : str;
      };
    };
    var colors = {
      blue: colorWith("34"),
      white: colorWith("37"),
      yellow: colorWith("33")
    };
    var RULE = colors.white("================================");
    var envalidErrorFormatter = function(errors2, logger) {
      if (logger === void 0) {
        logger = defaultLogger;
      }
      var missingVarsOutput = [];
      var invalidVarsOutput = [];
      for (var _i = 0, _a2 = Object.entries(errors2); _i < _a2.length; _i++) {
        var _b = _a2[_i], k = _b[0], err = _b[1];
        if (err instanceof errors_1.EnvMissingError) {
          missingVarsOutput.push("    ".concat(colors.blue(k), ": ").concat(err.message || "(required)"));
        } else
          invalidVarsOutput.push("    ".concat(colors.blue(k), ": ").concat((err === null || err === void 0 ? void 0 : err.message) || "(invalid format)"));
      }
      if (invalidVarsOutput.length) {
        invalidVarsOutput.unshift(" ".concat(colors.yellow("Invalid"), " environment variables:"));
      }
      if (missingVarsOutput.length) {
        missingVarsOutput.unshift(" ".concat(colors.yellow("Missing"), " environment variables:"));
      }
      var output = [
        RULE,
        invalidVarsOutput.sort().join("\n"),
        missingVarsOutput.sort().join("\n"),
        RULE
      ].filter(function(x) {
        return !!x;
      }).join("\n");
      logger(output);
    };
    exports.envalidErrorFormatter = envalidErrorFormatter;
    var defaultReporter = function(_a2, _b) {
      var _c = _a2.errors, errors2 = _c === void 0 ? {} : _c;
      var _d = _b === void 0 ? { logger: defaultLogger } : _b, onError = _d.onError, logger = _d.logger;
      if (!Object.keys(errors2).length)
        return;
      (0, exports.envalidErrorFormatter)(errors2, logger);
      if (onError) {
        onError(errors2);
      } else if (isNode) {
        logger(colors.yellow("\n Exiting with error code 1"));
        process.exit(1);
      } else {
        throw new TypeError("Environment validation failed");
      }
    };
    exports.defaultReporter = defaultReporter;
  })(reporter);
  return reporter;
}
var hasRequiredCore$1;
function requireCore$1() {
  if (hasRequiredCore$1)
    return core$1;
  hasRequiredCore$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSanitizedEnv = exports.testOnlySymbol = void 0;
    var errors_1 = requireErrors();
    var reporter_1 = requireReporter();
    exports.testOnlySymbol = Symbol("envalid - test only");
    function validateVar(_a) {
      var spec = _a.spec, name = _a.name, rawValue = _a.rawValue;
      if (typeof spec._parse !== "function") {
        throw new errors_1.EnvError('Invalid spec for "'.concat(name, '"'));
      }
      var value = spec._parse(rawValue);
      if (spec.choices) {
        if (!Array.isArray(spec.choices)) {
          throw new TypeError('"choices" must be an array (in spec for "'.concat(name, '")'));
        } else if (!spec.choices.includes(value)) {
          throw new errors_1.EnvError('Value "'.concat(value, '" not in choices [').concat(spec.choices, "]"));
        }
      }
      if (value == null)
        throw new errors_1.EnvError('Invalid value for env var "'.concat(name, '"'));
      return value;
    }
    function formatSpecDescription(spec) {
      var egText = spec.example ? ' (eg. "'.concat(spec.example, '")') : "";
      var docsText = spec.docs ? ". See ".concat(spec.docs) : "";
      return "".concat(spec.desc).concat(egText).concat(docsText);
    }
    var readRawEnvValue = function(env, k) {
      return env[k];
    };
    var isTestOnlySymbol = function(value) {
      return value === exports.testOnlySymbol;
    };
    function getSanitizedEnv(environment, specs, options) {
      if (options === void 0) {
        options = {};
      }
      var cleanedEnv = {};
      var castedSpecs = specs;
      var errors2 = {};
      var varKeys = Object.keys(castedSpecs);
      var rawNodeEnv = readRawEnvValue(environment, "NODE_ENV");
      for (var _i = 0, varKeys_1 = varKeys; _i < varKeys_1.length; _i++) {
        var k = varKeys_1[_i];
        var spec = castedSpecs[k];
        var rawValue = readRawEnvValue(environment, k);
        if (rawValue === void 0) {
          var usingDevDefault = rawNodeEnv && rawNodeEnv !== "production" && spec.hasOwnProperty("devDefault");
          if (usingDevDefault) {
            cleanedEnv[k] = spec.devDefault;
            if (isTestOnlySymbol(spec.devDefault) && rawNodeEnv != "test") {
              throw new errors_1.EnvMissingError(formatSpecDescription(spec));
            }
            continue;
          }
          if ("default" in spec) {
            cleanedEnv[k] = spec.default;
            continue;
          }
        }
        try {
          if (rawValue === void 0) {
            cleanedEnv[k] = void 0;
            throw new errors_1.EnvMissingError(formatSpecDescription(spec));
          } else {
            cleanedEnv[k] = validateVar({ name: k, spec, rawValue });
          }
        } catch (err) {
          if ((options === null || options === void 0 ? void 0 : options.reporter) === null)
            throw err;
          if (err instanceof Error)
            errors2[k] = err;
        }
      }
      var reporter2 = (options === null || options === void 0 ? void 0 : options.reporter) || reporter_1.defaultReporter;
      reporter2({ errors: errors2, env: cleanedEnv });
      return cleanedEnv;
    }
    exports.getSanitizedEnv = getSanitizedEnv;
  })(core$1);
  return core$1;
}
var middleware = {};
var hasRequiredMiddleware;
function requireMiddleware() {
  if (hasRequiredMiddleware)
    return middleware;
  hasRequiredMiddleware = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyDefaultMiddleware = exports.accessorMiddleware = exports.strictProxyMiddleware = void 0;
    var strictProxyMiddleware = function(envObj, rawEnv, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.extraInspectables, extraInspectables = _a === void 0 ? [] : _a;
      var inspectables = [
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
      ];
      var inspectSymbolStrings = ["Symbol(util.inspect.custom)", "Symbol(nodejs.util.inspect.custom)"];
      return new Proxy(envObj, {
        get: function(target, name) {
          var _a2;
          if (inspectables.includes(name) || inspectSymbolStrings.includes(name.toString()) || extraInspectables.includes(name)) {
            return target[name];
          }
          var varExists = target.hasOwnProperty(name);
          if (!varExists) {
            if (typeof rawEnv === "object" && ((_a2 = rawEnv === null || rawEnv === void 0 ? void 0 : rawEnv.hasOwnProperty) === null || _a2 === void 0 ? void 0 : _a2.call(rawEnv, name))) {
              throw new ReferenceError("[envalid] Env var ".concat(name, " was accessed but not validated. This var is set in the environment; please add an envalid validator for it."));
            }
            throw new ReferenceError("[envalid] Env var not found: ".concat(name));
          }
          return target[name];
        },
        set: function(_target, name) {
          throw new TypeError("[envalid] Attempt to mutate environment value: ".concat(name));
        }
      });
    };
    exports.strictProxyMiddleware = strictProxyMiddleware;
    var accessorMiddleware = function(envObj, rawEnv) {
      var computedNodeEnv = envObj.NODE_ENV || rawEnv.NODE_ENV;
      var isProd = !computedNodeEnv || computedNodeEnv === "production";
      Object.defineProperties(envObj, {
        isDevelopment: { value: computedNodeEnv === "development" },
        isDev: { value: computedNodeEnv === "development" },
        isProduction: { value: isProd },
        isProd: { value: isProd },
        isTest: { value: computedNodeEnv === "test" }
      });
      return envObj;
    };
    exports.accessorMiddleware = accessorMiddleware;
    var applyDefaultMiddleware = function(cleanedEnv, rawEnv) {
      return (0, exports.strictProxyMiddleware)((0, exports.accessorMiddleware)(cleanedEnv, rawEnv), rawEnv);
    };
    exports.applyDefaultMiddleware = applyDefaultMiddleware;
  })(middleware);
  return middleware;
}
var hasRequiredEnvalid;
function requireEnvalid() {
  if (hasRequiredEnvalid)
    return envalid;
  hasRequiredEnvalid = 1;
  Object.defineProperty(envalid, "__esModule", { value: true });
  envalid.testOnly = envalid.customCleanEnv = envalid.cleanEnv = void 0;
  var core_1 = requireCore$1();
  var middleware_1 = requireMiddleware();
  function cleanEnv(environment, specs, options) {
    if (options === void 0) {
      options = {};
    }
    var cleaned = (0, core_1.getSanitizedEnv)(environment, specs, options);
    return Object.freeze((0, middleware_1.applyDefaultMiddleware)(cleaned, environment));
  }
  envalid.cleanEnv = cleanEnv;
  function customCleanEnv(environment, specs, applyMiddleware, options) {
    if (options === void 0) {
      options = {};
    }
    var cleaned = (0, core_1.getSanitizedEnv)(environment, specs, options);
    return Object.freeze(applyMiddleware(cleaned, environment));
  }
  envalid.customCleanEnv = customCleanEnv;
  var testOnly = function(defaultValueForTests) {
    return process.env.NODE_ENV === "test" ? defaultValueForTests : core_1.testOnlySymbol;
  };
  envalid.testOnly = testOnly;
  return envalid;
}
var types = {};
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes)
    return types;
  hasRequiredTypes = 1;
  Object.defineProperty(types, "__esModule", { value: true });
  return types;
}
var validators = {};
var makers = {};
var hasRequiredMakers;
function requireMakers() {
  if (hasRequiredMakers)
    return makers;
  hasRequiredMakers = 1;
  Object.defineProperty(makers, "__esModule", { value: true });
  makers.makeStructuredValidator = makers.makeExactValidator = makers.makeValidator = void 0;
  var tslib_1 = require$$0;
  var internalMakeValidator = function(parseFn) {
    return function(spec) {
      return tslib_1.__assign(tslib_1.__assign({}, spec), { _parse: parseFn });
    };
  };
  var makeValidator = function(parseFn) {
    return internalMakeValidator(parseFn);
  };
  makers.makeValidator = makeValidator;
  var makeExactValidator = function(parseFn) {
    return internalMakeValidator(parseFn);
  };
  makers.makeExactValidator = makeExactValidator;
  var makeStructuredValidator = function(parseFn) {
    return internalMakeValidator(parseFn);
  };
  makers.makeStructuredValidator = makeStructuredValidator;
  return makers;
}
var hasRequiredValidators;
function requireValidators() {
  if (hasRequiredValidators)
    return validators;
  hasRequiredValidators = 1;
  Object.defineProperty(validators, "__esModule", { value: true });
  validators.json = validators.url = validators.port = validators.host = validators.email = validators.str = validators.num = validators.bool = void 0;
  var errors_1 = requireErrors();
  var makers_1 = requireMakers();
  var isFQDN = function(input) {
    if (!input.length)
      return false;
    var parts = input.split(".");
    for (var part = void 0, i = 0; i < parts.length; i++) {
      part = parts[i];
      if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part))
        return false;
      if (/[\uff01-\uff5e]/.test(part))
        return false;
      if (part[0] === "-" || part[part.length - 1] === "-")
        return false;
    }
    return true;
  };
  var ipv4Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  var ipv6Regex = /([a-f0-9]+:+)+[a-f0-9]+/;
  var isIP = function(input) {
    if (!input.length)
      return false;
    return ipv4Regex.test(input) || ipv6Regex.test(input);
  };
  var EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  validators.bool = (0, makers_1.makeExactValidator)(function(input) {
    switch (input) {
      case true:
      case "true":
      case "t":
      case "1":
        return true;
      case false:
      case "false":
      case "f":
      case "0":
        return false;
      default:
        throw new errors_1.EnvError('Invalid bool input: "'.concat(input, '"'));
    }
  });
  validators.num = (0, makers_1.makeValidator)(function(input) {
    var coerced = parseFloat(input);
    if (Number.isNaN(coerced))
      throw new errors_1.EnvError('Invalid number input: "'.concat(input, '"'));
    return coerced;
  });
  validators.str = (0, makers_1.makeValidator)(function(input) {
    if (typeof input === "string")
      return input;
    throw new errors_1.EnvError('Not a string: "'.concat(input, '"'));
  });
  validators.email = (0, makers_1.makeValidator)(function(x) {
    if (EMAIL_REGEX.test(x))
      return x;
    throw new errors_1.EnvError('Invalid email address: "'.concat(x, '"'));
  });
  validators.host = (0, makers_1.makeValidator)(function(input) {
    if (!isFQDN(input) && !isIP(input)) {
      throw new errors_1.EnvError('Invalid host (domain or ip): "'.concat(input, '"'));
    }
    return input;
  });
  validators.port = (0, makers_1.makeValidator)(function(input) {
    var coerced = +input;
    if (Number.isNaN(coerced) || "".concat(coerced) !== "".concat(input) || coerced % 1 !== 0 || coerced < 1 || coerced > 65535) {
      throw new errors_1.EnvError('Invalid port input: "'.concat(input, '"'));
    }
    return coerced;
  });
  validators.url = (0, makers_1.makeValidator)(function(x) {
    try {
      new URL(x);
      return x;
    } catch (e) {
      throw new errors_1.EnvError('Invalid url: "'.concat(x, '"'));
    }
  });
  validators.json = (0, makers_1.makeStructuredValidator)(function(x) {
    try {
      return JSON.parse(x);
    } catch (e) {
      throw new errors_1.EnvError('Invalid json: "'.concat(x, '"'));
    }
  });
  return validators;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.makeValidator = exports.makeExactValidator = void 0;
  var tslib_1 = require$$0;
  tslib_1.__exportStar(requireEnvalid(), exports);
  tslib_1.__exportStar(requireErrors(), exports);
  tslib_1.__exportStar(requireMiddleware(), exports);
  tslib_1.__exportStar(requireTypes(), exports);
  tslib_1.__exportStar(requireValidators(), exports);
  tslib_1.__exportStar(requireReporter(), exports);
  var makers_1 = requireMakers();
  Object.defineProperty(exports, "makeExactValidator", { enumerable: true, get: function() {
    return makers_1.makeExactValidator;
  } });
  Object.defineProperty(exports, "makeValidator", { enumerable: true, get: function() {
    return makers_1.makeValidator;
  } });
})(dist);
var core = {};
var command = {};
var utils = {};
Object.defineProperty(utils, "__esModule", { value: true });
utils.toCommandProperties = utils.toCommandValue = void 0;
function toCommandValue(input) {
  if (input === null || input === void 0) {
    return "";
  } else if (typeof input === "string" || input instanceof String) {
    return input;
  }
  return JSON.stringify(input);
}
utils.toCommandValue = toCommandValue;
function toCommandProperties(annotationProperties) {
  if (!Object.keys(annotationProperties).length) {
    return {};
  }
  return {
    title: annotationProperties.title,
    file: annotationProperties.file,
    line: annotationProperties.startLine,
    endLine: annotationProperties.endLine,
    col: annotationProperties.startColumn,
    endColumn: annotationProperties.endColumn
  };
}
utils.toCommandProperties = toCommandProperties;
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.hasOwnProperty.call(mod, k))
        __createBinding$1(result, mod, k);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
Object.defineProperty(command, "__esModule", { value: true });
command.issue = command.issueCommand = void 0;
const os$1 = __importStar$1(require$$0$1);
const utils_1$1 = utils;
function issueCommand(command2, properties, message) {
  const cmd = new Command(command2, properties, message);
  process.stdout.write(cmd.toString() + os$1.EOL);
}
command.issueCommand = issueCommand;
function issue(name, message = "") {
  issueCommand(name, {}, message);
}
command.issue = issue;
const CMD_STRING = "::";
class Command {
  constructor(command2, properties, message) {
    if (!command2) {
      command2 = "missing.command";
    }
    this.command = command2;
    this.properties = properties;
    this.message = message;
  }
  toString() {
    let cmdStr = CMD_STRING + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      cmdStr += " ";
      let first = true;
      for (const key in this.properties) {
        if (this.properties.hasOwnProperty(key)) {
          const val = this.properties[key];
          if (val) {
            if (first) {
              first = false;
            } else {
              cmdStr += ",";
            }
            cmdStr += `${key}=${escapeProperty(val)}`;
          }
        }
      }
    }
    cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
    return cmdStr;
  }
}
function escapeData(s) {
  return utils_1$1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function escapeProperty(s) {
  return utils_1$1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var fileCommand = {};
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(fileCommand, "__esModule", { value: true });
fileCommand.prepareKeyValueMessage = fileCommand.issueFileCommand = void 0;
const fs = __importStar(require$$0$2);
const os = __importStar(require$$0$1);
const uuid_1 = require$$2;
const utils_1 = utils;
function issueFileCommand(command2, message) {
  const filePath = process.env[`GITHUB_${command2}`];
  if (!filePath) {
    throw new Error(`Unable to find environment variable for file command ${command2}`);
  }
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file at path: ${filePath}`);
  }
  fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
    encoding: "utf8"
  });
}
fileCommand.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
  const delimiter = `ghadelimiter_${uuid_1.v4()}`;
  const convertedValue = utils_1.toCommandValue(value);
  if (key.includes(delimiter)) {
    throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
  }
  if (convertedValue.includes(delimiter)) {
    throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
  }
  return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
fileCommand.prepareKeyValueMessage = prepareKeyValueMessage;
var oidcUtils = {};
var hasRequiredOidcUtils;
function requireOidcUtils() {
  if (hasRequiredOidcUtils)
    return oidcUtils;
  hasRequiredOidcUtils = 1;
  var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(oidcUtils, "__esModule", { value: true });
  oidcUtils.OidcClient = void 0;
  const http_client_1 = require$$0$3;
  const auth_1 = require$$1;
  const core_1 = requireCore();
  class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
      const requestOptions = {
        allowRetries: allowRetry,
        maxRetries: maxRetry
      };
      return new http_client_1.HttpClient("actions/oidc-client", [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
      const token = process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
      if (!token) {
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
      }
      return token;
    }
    static getIDTokenUrl() {
      const runtimeUrl = process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
      if (!runtimeUrl) {
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
      }
      return runtimeUrl;
    }
    static getCall(id_token_url) {
      var _a;
      return __awaiter(this, void 0, void 0, function* () {
        const httpclient = OidcClient.createHttpClient();
        const res = yield httpclient.getJson(id_token_url).catch((error) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${error.statusCode}
 
        Error Message: ${error.message}`);
        });
        const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
        if (!id_token) {
          throw new Error("Response json body do not have ID Token field");
        }
        return id_token;
      });
    }
    static getIDToken(audience) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          let id_token_url = OidcClient.getIDTokenUrl();
          if (audience) {
            const encodedAudience = encodeURIComponent(audience);
            id_token_url = `${id_token_url}&audience=${encodedAudience}`;
          }
          core_1.debug(`ID token url is ${id_token_url}`);
          const id_token = yield OidcClient.getCall(id_token_url);
          core_1.setSecret(id_token);
          return id_token;
        } catch (error) {
          throw new Error(`Error message: ${error.message}`);
        }
      });
    }
  }
  oidcUtils.OidcClient = OidcClient;
  return oidcUtils;
}
var summary = {};
var hasRequiredSummary;
function requireSummary() {
  if (hasRequiredSummary)
    return summary;
  hasRequiredSummary = 1;
  (function(exports) {
    var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
    const os_1 = require$$0$1;
    const fs_1 = require$$0$2;
    const { access, appendFile, writeFile } = fs_1.promises;
    exports.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
    exports.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
    class Summary {
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
        return __awaiter(this, void 0, void 0, function* () {
          if (this._filePath) {
            return this._filePath;
          }
          const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
          if (!pathFromEnv) {
            throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
          }
          try {
            yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
          } catch (_a) {
            throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
          }
          this._filePath = pathFromEnv;
          return this._filePath;
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
      wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs).map(([key, value]) => ` ${key}="${value}"`).join("");
        if (!content) {
          return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
      }
      /**
       * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
       *
       * @param {SummaryWriteOptions} [options] (optional) options for write operation
       *
       * @returns {Promise<Summary>} summary instance
       */
      write(options) {
        return __awaiter(this, void 0, void 0, function* () {
          const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
          const filePath = yield this.filePath();
          const writeFunc = overwrite ? writeFile : appendFile;
          yield writeFunc(filePath, this._buffer, { encoding: "utf8" });
          return this.emptyBuffer();
        });
      }
      /**
       * Clears the summary buffer and wipes the summary file
       *
       * @returns {Summary} summary instance
       */
      clear() {
        return __awaiter(this, void 0, void 0, function* () {
          return this.emptyBuffer().write({ overwrite: true });
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
        this._buffer = "";
        return this;
      }
      /**
       * Adds raw text to the summary buffer
       *
       * @param {string} text content to add
       * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
       *
       * @returns {Summary} summary instance
       */
      addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
      }
      /**
       * Adds the operating system-specific end-of-line marker to the buffer
       *
       * @returns {Summary} summary instance
       */
      addEOL() {
        return this.addRaw(os_1.EOL);
      }
      /**
       * Adds an HTML codeblock to the summary buffer
       *
       * @param {string} code content to render within fenced code block
       * @param {string} lang (optional) language to syntax highlight code
       *
       * @returns {Summary} summary instance
       */
      addCodeBlock(code, lang) {
        const attrs = Object.assign({}, lang && { lang });
        const element = this.wrap("pre", this.wrap("code", code), attrs);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML list to the summary buffer
       *
       * @param {string[]} items list of items to render
       * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
       *
       * @returns {Summary} summary instance
       */
      addList(items, ordered = false) {
        const tag = ordered ? "ol" : "ul";
        const listItems = items.map((item) => this.wrap("li", item)).join("");
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML table to the summary buffer
       *
       * @param {SummaryTableCell[]} rows table rows
       *
       * @returns {Summary} summary instance
       */
      addTable(rows) {
        const tableBody = rows.map((row) => {
          const cells = row.map((cell) => {
            if (typeof cell === "string") {
              return this.wrap("td", cell);
            }
            const { header, data, colspan, rowspan } = cell;
            const tag = header ? "th" : "td";
            const attrs = Object.assign(Object.assign({}, colspan && { colspan }), rowspan && { rowspan });
            return this.wrap(tag, data, attrs);
          }).join("");
          return this.wrap("tr", cells);
        }).join("");
        const element = this.wrap("table", tableBody);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds a collapsable HTML details element to the summary buffer
       *
       * @param {string} label text for the closed state
       * @param {string} content collapsable content
       *
       * @returns {Summary} summary instance
       */
      addDetails(label, content) {
        const element = this.wrap("details", this.wrap("summary", label) + content);
        return this.addRaw(element).addEOL();
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
      addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, width && { width }), height && { height });
        const element = this.wrap("img", null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML section heading element
       *
       * @param {string} text heading text
       * @param {number | string} [level=1] (optional) the heading level, default: 1
       *
       * @returns {Summary} summary instance
       */
      addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag) ? tag : "h1";
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML thematic break (<hr>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addSeparator() {
        const element = this.wrap("hr", null);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML line break (<br>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addBreak() {
        const element = this.wrap("br", null);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML blockquote to the summary buffer
       *
       * @param {string} text quote text
       * @param {string} cite (optional) citation url
       *
       * @returns {Summary} summary instance
       */
      addQuote(text, cite) {
        const attrs = Object.assign({}, cite && { cite });
        const element = this.wrap("blockquote", text, attrs);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML anchor tag to the summary buffer
       *
       * @param {string} text link text/content
       * @param {string} href hyperlink
       *
       * @returns {Summary} summary instance
       */
      addLink(text, href) {
        const element = this.wrap("a", text, { href });
        return this.addRaw(element).addEOL();
      }
    }
    const _summary = new Summary();
    exports.markdownSummary = _summary;
    exports.summary = _summary;
  })(summary);
  return summary;
}
var pathUtils = {};
var hasRequiredPathUtils;
function requirePathUtils() {
  if (hasRequiredPathUtils)
    return pathUtils;
  hasRequiredPathUtils = 1;
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  Object.defineProperty(pathUtils, "__esModule", { value: true });
  pathUtils.toPlatformPath = pathUtils.toWin32Path = pathUtils.toPosixPath = void 0;
  const path = __importStar2(require$$0$4);
  function toPosixPath(pth) {
    return pth.replace(/[\\]/g, "/");
  }
  pathUtils.toPosixPath = toPosixPath;
  function toWin32Path(pth) {
    return pth.replace(/[/]/g, "\\");
  }
  pathUtils.toWin32Path = toWin32Path;
  function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
  }
  pathUtils.toPlatformPath = toPlatformPath;
  return pathUtils;
}
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore)
    return core;
  hasRequiredCore = 1;
  (function(exports) {
    var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault2(result, mod);
      return result;
    };
    var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
    const command_1 = command;
    const file_command_1 = fileCommand;
    const utils_12 = utils;
    const os2 = __importStar2(require$$0$1);
    const path = __importStar2(require$$0$4);
    const oidc_utils_1 = requireOidcUtils();
    var ExitCode;
    (function(ExitCode2) {
      ExitCode2[ExitCode2["Success"] = 0] = "Success";
      ExitCode2[ExitCode2["Failure"] = 1] = "Failure";
    })(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
    function exportVariable(name, val) {
      const convertedVal = utils_12.toCommandValue(val);
      process.env[name] = convertedVal;
      const filePath = process.env["GITHUB_ENV"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("ENV", file_command_1.prepareKeyValueMessage(name, val));
      }
      command_1.issueCommand("set-env", { name }, convertedVal);
    }
    exports.exportVariable = exportVariable;
    function setSecret(secret) {
      command_1.issueCommand("add-mask", {}, secret);
    }
    exports.setSecret = setSecret;
    function addPath(inputPath) {
      const filePath = process.env["GITHUB_PATH"] || "";
      if (filePath) {
        file_command_1.issueFileCommand("PATH", inputPath);
      } else {
        command_1.issueCommand("add-path", {}, inputPath);
      }
      process.env["PATH"] = `${inputPath}${path.delimiter}${process.env["PATH"]}`;
    }
    exports.addPath = addPath;
    function getInput2(name, options) {
      const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
      if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
      }
      if (options && options.trimWhitespace === false) {
        return val;
      }
      return val.trim();
    }
    exports.getInput = getInput2;
    function getMultilineInput(name, options) {
      const inputs = getInput2(name, options).split("\n").filter((x) => x !== "");
      if (options && options.trimWhitespace === false) {
        return inputs;
      }
      return inputs.map((input) => input.trim());
    }
    exports.getMultilineInput = getMultilineInput;
    function getBooleanInput(name, options) {
      const trueValue = ["true", "True", "TRUE"];
      const falseValue = ["false", "False", "FALSE"];
      const val = getInput2(name, options);
      if (trueValue.includes(val))
        return true;
      if (falseValue.includes(val))
        return false;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    exports.getBooleanInput = getBooleanInput;
    function setOutput(name, value) {
      const filePath = process.env["GITHUB_OUTPUT"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("OUTPUT", file_command_1.prepareKeyValueMessage(name, value));
      }
      process.stdout.write(os2.EOL);
      command_1.issueCommand("set-output", { name }, utils_12.toCommandValue(value));
    }
    exports.setOutput = setOutput;
    function setCommandEcho(enabled) {
      command_1.issue("echo", enabled ? "on" : "off");
    }
    exports.setCommandEcho = setCommandEcho;
    function setFailed(message) {
      process.exitCode = ExitCode.Failure;
      error(message);
    }
    exports.setFailed = setFailed;
    function isDebug() {
      return process.env["RUNNER_DEBUG"] === "1";
    }
    exports.isDebug = isDebug;
    function debug(message) {
      command_1.issueCommand("debug", {}, message);
    }
    exports.debug = debug;
    function error(message, properties = {}) {
      command_1.issueCommand("error", utils_12.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.error = error;
    function warning(message, properties = {}) {
      command_1.issueCommand("warning", utils_12.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.warning = warning;
    function notice(message, properties = {}) {
      command_1.issueCommand("notice", utils_12.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.notice = notice;
    function info(message) {
      process.stdout.write(message + os2.EOL);
    }
    exports.info = info;
    function startGroup(name) {
      command_1.issue("group", name);
    }
    exports.startGroup = startGroup;
    function endGroup() {
      command_1.issue("endgroup");
    }
    exports.endGroup = endGroup;
    function group(name, fn) {
      return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
          result = yield fn();
        } finally {
          endGroup();
        }
        return result;
      });
    }
    exports.group = group;
    function saveState(name, value) {
      const filePath = process.env["GITHUB_STATE"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("STATE", file_command_1.prepareKeyValueMessage(name, value));
      }
      command_1.issueCommand("save-state", { name }, utils_12.toCommandValue(value));
    }
    exports.saveState = saveState;
    function getState(name) {
      return process.env[`STATE_${name}`] || "";
    }
    exports.getState = getState;
    function getIDToken(aud) {
      return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
      });
    }
    exports.getIDToken = getIDToken;
    var summary_1 = requireSummary();
    Object.defineProperty(exports, "summary", { enumerable: true, get: function() {
      return summary_1.summary;
    } });
    var summary_2 = requireSummary();
    Object.defineProperty(exports, "markdownSummary", { enumerable: true, get: function() {
      return summary_2.markdownSummary;
    } });
    var path_utils_1 = requirePathUtils();
    Object.defineProperty(exports, "toPosixPath", { enumerable: true, get: function() {
      return path_utils_1.toPosixPath;
    } });
    Object.defineProperty(exports, "toWin32Path", { enumerable: true, get: function() {
      return path_utils_1.toWin32Path;
    } });
    Object.defineProperty(exports, "toPlatformPath", { enumerable: true, get: function() {
      return path_utils_1.toPlatformPath;
    } });
  })(core);
  return core;
}
var coreExports = requireCore();
function parseList(listString) {
  if (listString === null) {
    return null;
  }
  return listString.split(require$$0$1.EOL).map((item) => item.trim()).filter(Boolean);
}
const StringUtils = {
  parseList
};
const getInput = (name, options) => {
  const input = coreExports.getInput(name, options);
  if (!(options == null ? void 0 : options.required) && input === "") {
    return null;
  }
  return input;
};
function getInputAsBoolean(name, options) {
  const input = getInput(name, options);
  if (input === "true") {
    return true;
  }
  if (input === "false") {
    return false;
  }
  return null;
}
function getInputAsInteger(name, options) {
  const input = getInput(name, options);
  if (typeof input === "string") {
    return parseInt(input, 10);
  }
  return null;
}
function getInputAsString(name, options) {
  return getInput(name, options);
}
function getInputAsStrings(name, options) {
  return StringUtils.parseList(getInput(name, options));
}
const hasInput = (name) => getInput(name) !== null;
const ActionUtils = {
  getInputAsBoolean,
  getInputAsInteger,
  getInputAsString,
  getInputAsStrings,
  hasInput
};
const requireEnv = (specs) => dist.cleanEnv(process.env, specs, {
  reporter: ({ errors: errors2 }) => {
    const missingEnvs = Object.keys(errors2);
    if (missingEnvs.length > 0) {
      throw new Error(`Missing env(s): ${missingEnvs.join(", ")}`);
    }
  }
});
const EnvUtils = {
  requireEnv
};
const isFileUntracked = (path) => {
  return execSync(`git ls-files --exclude-standard --others ${path} | wc -l`).toString().trim() === "1";
};
const isFileChanged = (path) => {
  return execSync(`git diff --shortstat ${path} | wc -l`).toString().trim() === "1";
};
const FileUtils = {
  isFileUntracked,
  isFileChanged
};
const definedProperty = (obj, emptyValue) => Object.values(obj)[0] === emptyValue ? {} : obj;
const dp = definedProperty;
const isPatternList = (pl) => pl.length >= 1;
const isGlobList = (gl) => gl.length >= 1;
const _Pattern = class _Pattern {
  constructor(patternList, globList, index, platform) {
    __privateAdd(this, _patternList, void 0);
    __privateAdd(this, _globList, void 0);
    __privateAdd(this, _index, void 0);
    __publicField(this, "length");
    __privateAdd(this, _platform, void 0);
    __privateAdd(this, _rest, void 0);
    __privateAdd(this, _globString, void 0);
    __privateAdd(this, _isDrive, void 0);
    __privateAdd(this, _isUNC, void 0);
    __privateAdd(this, _isAbsolute, void 0);
    __privateAdd(this, _followGlobstar, true);
    if (!isPatternList(patternList)) {
      throw new TypeError("empty pattern list");
    }
    if (!isGlobList(globList)) {
      throw new TypeError("empty glob list");
    }
    if (globList.length !== patternList.length) {
      throw new TypeError("mismatched pattern list and glob list lengths");
    }
    this.length = patternList.length;
    if (index < 0 || index >= this.length) {
      throw new TypeError("index out of range");
    }
    __privateSet(this, _patternList, patternList);
    __privateSet(this, _globList, globList);
    __privateSet(this, _index, index);
    __privateSet(this, _platform, platform);
    if (__privateGet(this, _index) === 0) {
      if (this.isUNC()) {
        const [p0, p1, p2, p3, ...prest] = __privateGet(this, _patternList);
        const [g0, g1, g2, g3, ...grest] = __privateGet(this, _globList);
        if (prest[0] === "") {
          prest.shift();
          grest.shift();
        }
        const p = [p0, p1, p2, p3, ""].join("/");
        const g = [g0, g1, g2, g3, ""].join("/");
        __privateSet(this, _patternList, [p, ...prest]);
        __privateSet(this, _globList, [g, ...grest]);
        this.length = __privateGet(this, _patternList).length;
      } else if (this.isDrive() || this.isAbsolute()) {
        const [p1, ...prest] = __privateGet(this, _patternList);
        const [g1, ...grest] = __privateGet(this, _globList);
        if (prest[0] === "") {
          prest.shift();
          grest.shift();
        }
        const p = p1 + "/";
        const g = g1 + "/";
        __privateSet(this, _patternList, [p, ...prest]);
        __privateSet(this, _globList, [g, ...grest]);
        this.length = __privateGet(this, _patternList).length;
      }
    }
  }
  /**
   * The first entry in the parsed list of patterns
   */
  pattern() {
    return __privateGet(this, _patternList)[__privateGet(this, _index)];
  }
  /**
   * true of if pattern() returns a string
   */
  isString() {
    return typeof __privateGet(this, _patternList)[__privateGet(this, _index)] === "string";
  }
  /**
   * true of if pattern() returns GLOBSTAR
   */
  isGlobstar() {
    return __privateGet(this, _patternList)[__privateGet(this, _index)] === GLOBSTAR;
  }
  /**
   * true if pattern() returns a regexp
   */
  isRegExp() {
    return __privateGet(this, _patternList)[__privateGet(this, _index)] instanceof RegExp;
  }
  /**
   * The /-joined set of glob parts that make up this pattern
   */
  globString() {
    return __privateSet(this, _globString, __privateGet(this, _globString) || (__privateGet(this, _index) === 0 ? this.isAbsolute() ? __privateGet(this, _globList)[0] + __privateGet(this, _globList).slice(1).join("/") : __privateGet(this, _globList).join("/") : __privateGet(this, _globList).slice(__privateGet(this, _index)).join("/")));
  }
  /**
   * true if there are more pattern parts after this one
   */
  hasMore() {
    return this.length > __privateGet(this, _index) + 1;
  }
  /**
   * The rest of the pattern after this part, or null if this is the end
   */
  rest() {
    if (__privateGet(this, _rest) !== void 0)
      return __privateGet(this, _rest);
    if (!this.hasMore())
      return __privateSet(this, _rest, null);
    __privateSet(this, _rest, new _Pattern(__privateGet(this, _patternList), __privateGet(this, _globList), __privateGet(this, _index) + 1, __privateGet(this, _platform)));
    __privateSet(__privateGet(this, _rest), _isAbsolute, __privateGet(this, _isAbsolute));
    __privateSet(__privateGet(this, _rest), _isUNC, __privateGet(this, _isUNC));
    __privateSet(__privateGet(this, _rest), _isDrive, __privateGet(this, _isDrive));
    return __privateGet(this, _rest);
  }
  /**
   * true if the pattern represents a //unc/path/ on windows
   */
  isUNC() {
    const pl = __privateGet(this, _patternList);
    return __privateGet(this, _isUNC) !== void 0 ? __privateGet(this, _isUNC) : __privateSet(this, _isUNC, __privateGet(this, _platform) === "win32" && __privateGet(this, _index) === 0 && pl[0] === "" && pl[1] === "" && typeof pl[2] === "string" && !!pl[2] && typeof pl[3] === "string" && !!pl[3]);
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
    const pl = __privateGet(this, _patternList);
    return __privateGet(this, _isDrive) !== void 0 ? __privateGet(this, _isDrive) : __privateSet(this, _isDrive, __privateGet(this, _platform) === "win32" && __privateGet(this, _index) === 0 && this.length > 1 && typeof pl[0] === "string" && /^[a-z]:$/i.test(pl[0]));
  }
  // pattern = '/' or '/...' or '/x/...'
  // split = ['', ''] or ['', ...] or ['', 'x', ...]
  // Drive and UNC both considered absolute on windows
  /**
   * True if the pattern is rooted on an absolute path
   */
  isAbsolute() {
    const pl = __privateGet(this, _patternList);
    return __privateGet(this, _isAbsolute) !== void 0 ? __privateGet(this, _isAbsolute) : __privateSet(this, _isAbsolute, pl[0] === "" && pl.length > 1 || this.isDrive() || this.isUNC());
  }
  /**
   * consume the root of the pattern, and return it
   */
  root() {
    const p = __privateGet(this, _patternList)[0];
    return typeof p === "string" && this.isAbsolute() && __privateGet(this, _index) === 0 ? p : "";
  }
  /**
   * Check to see if the current globstar pattern is allowed to follow
   * a symbolic link.
   */
  checkFollowGlobstar() {
    return !(__privateGet(this, _index) === 0 || !this.isGlobstar() || !__privateGet(this, _followGlobstar));
  }
  /**
   * Mark that the current globstar pattern is following a symbolic link
   */
  markFollowGlobstar() {
    if (__privateGet(this, _index) === 0 || !this.isGlobstar() || !__privateGet(this, _followGlobstar))
      return false;
    __privateSet(this, _followGlobstar, false);
    return true;
  }
};
_patternList = new WeakMap();
_globList = new WeakMap();
_index = new WeakMap();
_platform = new WeakMap();
_rest = new WeakMap();
_globString = new WeakMap();
_isDrive = new WeakMap();
_isUNC = new WeakMap();
_isAbsolute = new WeakMap();
_followGlobstar = new WeakMap();
let Pattern = _Pattern;
const defaultPlatform$1 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
class Ignore {
  constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = defaultPlatform$1 }) {
    __publicField(this, "relative");
    __publicField(this, "relativeChildren");
    __publicField(this, "absolute");
    __publicField(this, "absoluteChildren");
    this.relative = [];
    this.absolute = [];
    this.relativeChildren = [];
    this.absoluteChildren = [];
    const mmopts = {
      dot: true,
      nobrace,
      nocase,
      noext,
      noglobstar,
      optimizationLevel: 2,
      platform,
      nocomment: true,
      nonegate: true
    };
    for (const ign of ignored) {
      const mm = new Minimatch(ign, mmopts);
      for (let i = 0; i < mm.set.length; i++) {
        const parsed = mm.set[i];
        const globParts = mm.globParts[i];
        if (!parsed || !globParts) {
          throw new Error("invalid pattern object");
        }
        const p = new Pattern(parsed, globParts, 0, platform);
        const m = new Minimatch(p.globString(), mmopts);
        const children = globParts[globParts.length - 1] === "**";
        const absolute = p.isAbsolute();
        if (absolute)
          this.absolute.push(m);
        else
          this.relative.push(m);
        if (children) {
          if (absolute)
            this.absoluteChildren.push(m);
          else
            this.relativeChildren.push(m);
        }
      }
    }
  }
  ignored(p) {
    const fullpath = p.fullpath();
    const fullpaths = `${fullpath}/`;
    const relative = p.relative() || ".";
    const relatives = `${relative}/`;
    for (const m of this.relative) {
      if (m.match(relative) || m.match(relatives))
        return true;
    }
    for (const m of this.absolute) {
      if (m.match(fullpath) || m.match(fullpaths))
        return true;
    }
    return false;
  }
  childrenIgnored(p) {
    const fullpath = p.fullpath() + "/";
    const relative = (p.relative() || ".") + "/";
    for (const m of this.relativeChildren) {
      if (m.match(relative))
        return true;
    }
    for (const m of this.absoluteChildren) {
      if (m.match(fullpath))
        return true;
    }
    return false;
  }
}
class HasWalkedCache {
  constructor(store = /* @__PURE__ */ new Map()) {
    __publicField(this, "store");
    this.store = store;
  }
  copy() {
    return new HasWalkedCache(new Map(this.store));
  }
  hasWalked(target, pattern) {
    var _a;
    return (_a = this.store.get(target.fullpath())) == null ? void 0 : _a.has(pattern.globString());
  }
  storeWalked(target, pattern) {
    const fullpath = target.fullpath();
    const cached = this.store.get(fullpath);
    if (cached)
      cached.add(pattern.globString());
    else
      this.store.set(fullpath, /* @__PURE__ */ new Set([pattern.globString()]));
  }
}
class MatchRecord {
  constructor() {
    __publicField(this, "store", /* @__PURE__ */ new Map());
  }
  add(target, absolute, ifDir) {
    const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
    const current = this.store.get(target);
    this.store.set(target, current === void 0 ? n : n & current);
  }
  // match, absolute, ifdir
  entries() {
    return [...this.store.entries()].map(([path, n]) => [
      path,
      !!(n & 2),
      !!(n & 1)
    ]);
  }
}
class SubWalks {
  constructor() {
    __publicField(this, "store", /* @__PURE__ */ new Map());
  }
  add(target, pattern) {
    if (!target.canReaddir()) {
      return;
    }
    const subs = this.store.get(target);
    if (subs) {
      if (!subs.find((p) => p.globString() === pattern.globString())) {
        subs.push(pattern);
      }
    } else
      this.store.set(target, [pattern]);
  }
  get(target) {
    const subs = this.store.get(target);
    if (!subs) {
      throw new Error("attempting to walk unknown path");
    }
    return subs;
  }
  entries() {
    return this.keys().map((k) => [k, this.store.get(k)]);
  }
  keys() {
    return [...this.store.keys()].filter((t) => t.canReaddir());
  }
}
class Processor {
  constructor(opts, hasWalkedCache) {
    __publicField(this, "hasWalkedCache");
    __publicField(this, "matches", new MatchRecord());
    __publicField(this, "subwalks", new SubWalks());
    __publicField(this, "patterns");
    __publicField(this, "follow");
    __publicField(this, "dot");
    __publicField(this, "opts");
    this.opts = opts;
    this.follow = !!opts.follow;
    this.dot = !!opts.dot;
    this.hasWalkedCache = hasWalkedCache ? hasWalkedCache.copy() : new HasWalkedCache();
  }
  processPatterns(target, patterns) {
    this.patterns = patterns;
    const processingSet = patterns.map((p) => [target, p]);
    for (let [t, pattern] of processingSet) {
      this.hasWalkedCache.storeWalked(t, pattern);
      const root = pattern.root();
      const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
      if (root) {
        t = t.resolve(root === "/" && this.opts.root !== void 0 ? this.opts.root : root);
        const rest2 = pattern.rest();
        if (!rest2) {
          this.matches.add(t, true, false);
          continue;
        } else {
          pattern = rest2;
        }
      }
      if (t.isENOENT())
        continue;
      let p;
      let rest;
      let changed = false;
      while (typeof (p = pattern.pattern()) === "string" && (rest = pattern.rest())) {
        const c = t.resolve(p);
        t = c;
        pattern = rest;
        changed = true;
      }
      p = pattern.pattern();
      rest = pattern.rest();
      if (changed) {
        if (this.hasWalkedCache.hasWalked(t, pattern))
          continue;
        this.hasWalkedCache.storeWalked(t, pattern);
      }
      if (typeof p === "string") {
        const ifDir = p === ".." || p === "" || p === ".";
        this.matches.add(t.resolve(p), absolute, ifDir);
        continue;
      } else if (p === GLOBSTAR) {
        if (!t.isSymbolicLink() || this.follow || pattern.checkFollowGlobstar()) {
          this.subwalks.add(t, pattern);
        }
        const rp = rest == null ? void 0 : rest.pattern();
        const rrest = rest == null ? void 0 : rest.rest();
        if (!rest || (rp === "" || rp === ".") && !rrest) {
          this.matches.add(t, absolute, rp === "" || rp === ".");
        } else {
          if (rp === "..") {
            const tp = t.parent || t;
            if (!rrest)
              this.matches.add(tp, absolute, true);
            else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
              this.subwalks.add(tp, rrest);
            }
          }
        }
      } else if (p instanceof RegExp) {
        this.subwalks.add(t, pattern);
      }
    }
    return this;
  }
  subwalkTargets() {
    return this.subwalks.keys();
  }
  child() {
    return new Processor(this.opts, this.hasWalkedCache);
  }
  // return a new Processor containing the subwalks for each
  // child entry, and a set of matches, and
  // a hasWalkedCache that's a copy of this one
  // then we're going to call
  filterEntries(parent, entries) {
    const patterns = this.subwalks.get(parent);
    const results = this.child();
    for (const e of entries) {
      for (const pattern of patterns) {
        const absolute = pattern.isAbsolute();
        const p = pattern.pattern();
        const rest = pattern.rest();
        if (p === GLOBSTAR) {
          results.testGlobstar(e, pattern, rest, absolute);
        } else if (p instanceof RegExp) {
          results.testRegExp(e, p, rest, absolute);
        } else {
          results.testString(e, p, rest, absolute);
        }
      }
    }
    return results;
  }
  testGlobstar(e, pattern, rest, absolute) {
    if (this.dot || !e.name.startsWith(".")) {
      if (!pattern.hasMore()) {
        this.matches.add(e, absolute, false);
      }
      if (e.canReaddir()) {
        if (this.follow || !e.isSymbolicLink()) {
          this.subwalks.add(e, pattern);
        } else if (e.isSymbolicLink()) {
          if (rest && pattern.checkFollowGlobstar()) {
            this.subwalks.add(e, rest);
          } else if (pattern.markFollowGlobstar()) {
            this.subwalks.add(e, pattern);
          }
        }
      }
    }
    if (rest) {
      const rp = rest.pattern();
      if (typeof rp === "string" && // dots and empty were handled already
      rp !== ".." && rp !== "" && rp !== ".") {
        this.testString(e, rp, rest.rest(), absolute);
      } else if (rp === "..") {
        const ep = e.parent || e;
        this.subwalks.add(ep, rest);
      } else if (rp instanceof RegExp) {
        this.testRegExp(e, rp, rest.rest(), absolute);
      }
    }
  }
  testRegExp(e, p, rest, absolute) {
    if (!p.test(e.name))
      return;
    if (!rest) {
      this.matches.add(e, absolute, false);
    } else {
      this.subwalks.add(e, rest);
    }
  }
  testString(e, p, rest, absolute) {
    if (!e.isNamed(p))
      return;
    if (!rest) {
      this.matches.add(e, absolute, false);
    } else {
      this.subwalks.add(e, rest);
    }
  }
}
const makeIgnore = (ignore, opts) => typeof ignore === "string" ? new Ignore([ignore], opts) : Array.isArray(ignore) ? new Ignore(ignore, opts) : ignore;
class GlobUtil {
  constructor(patterns, path, opts) {
    __privateAdd(this, _ignored);
    __privateAdd(this, _childrenIgnored);
    __publicField(this, "path");
    __publicField(this, "patterns");
    __publicField(this, "opts");
    __publicField(this, "seen", /* @__PURE__ */ new Set());
    __publicField(this, "paused", false);
    __publicField(this, "aborted", false);
    __privateAdd(this, _onResume, []);
    __privateAdd(this, _ignore, void 0);
    __privateAdd(this, _sep, void 0);
    __publicField(this, "signal");
    __publicField(this, "maxDepth");
    this.patterns = patterns;
    this.path = path;
    this.opts = opts;
    __privateSet(this, _sep, !opts.posix && opts.platform === "win32" ? "\\" : "/");
    if (opts.ignore) {
      __privateSet(this, _ignore, makeIgnore(opts.ignore, opts));
    }
    this.maxDepth = opts.maxDepth || Infinity;
    if (opts.signal) {
      this.signal = opts.signal;
      this.signal.addEventListener("abort", () => {
        __privateGet(this, _onResume).length = 0;
      });
    }
  }
  // backpressure mechanism
  pause() {
    this.paused = true;
  }
  resume() {
    var _a;
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      return;
    this.paused = false;
    let fn = void 0;
    while (!this.paused && (fn = __privateGet(this, _onResume).shift())) {
      fn();
    }
  }
  onResume(fn) {
    var _a;
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      return;
    if (!this.paused) {
      fn();
    } else {
      __privateGet(this, _onResume).push(fn);
    }
  }
  // do the requisite realpath/stat checking, and return the path
  // to add or undefined to filter it out.
  async matchCheck(e, ifDir) {
    if (ifDir && this.opts.nodir)
      return void 0;
    let rpc;
    if (this.opts.realpath) {
      rpc = e.realpathCached() || await e.realpath();
      if (!rpc)
        return void 0;
      e = rpc;
    }
    const needStat = e.isUnknown() || this.opts.stat;
    return this.matchCheckTest(needStat ? await e.lstat() : e, ifDir);
  }
  matchCheckTest(e, ifDir) {
    return e && (this.maxDepth === Infinity || e.depth() <= this.maxDepth) && (!ifDir || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !__privateMethod(this, _ignored, ignored_fn).call(this, e) ? e : void 0;
  }
  matchCheckSync(e, ifDir) {
    if (ifDir && this.opts.nodir)
      return void 0;
    let rpc;
    if (this.opts.realpath) {
      rpc = e.realpathCached() || e.realpathSync();
      if (!rpc)
        return void 0;
      e = rpc;
    }
    const needStat = e.isUnknown() || this.opts.stat;
    return this.matchCheckTest(needStat ? e.lstatSync() : e, ifDir);
  }
  matchFinish(e, absolute) {
    if (__privateMethod(this, _ignored, ignored_fn).call(this, e))
      return;
    const abs = this.opts.absolute === void 0 ? absolute : this.opts.absolute;
    this.seen.add(e);
    const mark = this.opts.mark && e.isDirectory() ? __privateGet(this, _sep) : "";
    if (this.opts.withFileTypes) {
      this.matchEmit(e);
    } else if (abs) {
      const abs2 = this.opts.posix ? e.fullpathPosix() : e.fullpath();
      this.matchEmit(abs2 + mark);
    } else {
      const rel = this.opts.posix ? e.relativePosix() : e.relative();
      const pre = this.opts.dotRelative && !rel.startsWith(".." + __privateGet(this, _sep)) ? "." + __privateGet(this, _sep) : "";
      this.matchEmit(!rel ? "." + mark : pre + rel + mark);
    }
  }
  async match(e, absolute, ifDir) {
    const p = await this.matchCheck(e, ifDir);
    if (p)
      this.matchFinish(p, absolute);
  }
  matchSync(e, absolute, ifDir) {
    const p = this.matchCheckSync(e, ifDir);
    if (p)
      this.matchFinish(p, absolute);
  }
  walkCB(target, patterns, cb) {
    var _a;
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      cb();
    this.walkCB2(target, patterns, new Processor(this.opts), cb);
  }
  walkCB2(target, patterns, processor, cb) {
    var _a;
    if (__privateMethod(this, _childrenIgnored, childrenIgnored_fn).call(this, target))
      return cb();
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      cb();
    if (this.paused) {
      this.onResume(() => this.walkCB2(target, patterns, processor, cb));
      return;
    }
    processor.processPatterns(target, patterns);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (__privateMethod(this, _ignored, ignored_fn).call(this, m))
        continue;
      tasks++;
      this.match(m, absolute, ifDir).then(() => next());
    }
    for (const t of processor.subwalkTargets()) {
      if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
        continue;
      }
      tasks++;
      const childrenCached = t.readdirCached();
      if (t.calledReaddir())
        this.walkCB3(t, childrenCached, processor, next);
      else {
        t.readdirCB((_, entries) => this.walkCB3(t, entries, processor, next), true);
      }
    }
    next();
  }
  walkCB3(target, entries, processor, cb) {
    processor = processor.filterEntries(target, entries);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (__privateMethod(this, _ignored, ignored_fn).call(this, m))
        continue;
      tasks++;
      this.match(m, absolute, ifDir).then(() => next());
    }
    for (const [target2, patterns] of processor.subwalks.entries()) {
      tasks++;
      this.walkCB2(target2, patterns, processor.child(), next);
    }
    next();
  }
  walkCBSync(target, patterns, cb) {
    var _a;
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      cb();
    this.walkCB2Sync(target, patterns, new Processor(this.opts), cb);
  }
  walkCB2Sync(target, patterns, processor, cb) {
    var _a;
    if (__privateMethod(this, _childrenIgnored, childrenIgnored_fn).call(this, target))
      return cb();
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      cb();
    if (this.paused) {
      this.onResume(() => this.walkCB2Sync(target, patterns, processor, cb));
      return;
    }
    processor.processPatterns(target, patterns);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (__privateMethod(this, _ignored, ignored_fn).call(this, m))
        continue;
      this.matchSync(m, absolute, ifDir);
    }
    for (const t of processor.subwalkTargets()) {
      if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
        continue;
      }
      tasks++;
      const children = t.readdirSync();
      this.walkCB3Sync(t, children, processor, next);
    }
    next();
  }
  walkCB3Sync(target, entries, processor, cb) {
    processor = processor.filterEntries(target, entries);
    let tasks = 1;
    const next = () => {
      if (--tasks === 0)
        cb();
    };
    for (const [m, absolute, ifDir] of processor.matches.entries()) {
      if (__privateMethod(this, _ignored, ignored_fn).call(this, m))
        continue;
      this.matchSync(m, absolute, ifDir);
    }
    for (const [target2, patterns] of processor.subwalks.entries()) {
      tasks++;
      this.walkCB2Sync(target2, patterns, processor.child(), next);
    }
    next();
  }
}
_onResume = new WeakMap();
_ignore = new WeakMap();
_sep = new WeakMap();
_ignored = new WeakSet();
ignored_fn = function(path) {
  var _a, _b;
  return this.seen.has(path) || !!((_b = (_a = __privateGet(this, _ignore)) == null ? void 0 : _a.ignored) == null ? void 0 : _b.call(_a, path));
};
_childrenIgnored = new WeakSet();
childrenIgnored_fn = function(path) {
  var _a, _b;
  return !!((_b = (_a = __privateGet(this, _ignore)) == null ? void 0 : _a.childrenIgnored) == null ? void 0 : _b.call(_a, path));
};
class GlobWalker extends GlobUtil {
  constructor(patterns, path, opts) {
    super(patterns, path, opts);
    __publicField(this, "matches");
    this.matches = /* @__PURE__ */ new Set();
  }
  matchEmit(e) {
    this.matches.add(e);
  }
  async walk() {
    var _a;
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      throw this.signal.reason;
    if (this.path.isUnknown()) {
      await this.path.lstat();
    }
    await new Promise((res, rej) => {
      this.walkCB(this.path, this.patterns, () => {
        var _a2;
        if ((_a2 = this.signal) == null ? void 0 : _a2.aborted) {
          rej(this.signal.reason);
        } else {
          res(this.matches);
        }
      });
    });
    return this.matches;
  }
  walkSync() {
    var _a;
    if ((_a = this.signal) == null ? void 0 : _a.aborted)
      throw this.signal.reason;
    if (this.path.isUnknown()) {
      this.path.lstatSync();
    }
    this.walkCBSync(this.path, this.patterns, () => {
      var _a2;
      if ((_a2 = this.signal) == null ? void 0 : _a2.aborted)
        throw this.signal.reason;
    });
    return this.matches;
  }
}
class GlobStream extends GlobUtil {
  constructor(patterns, path, opts) {
    super(patterns, path, opts);
    __publicField(this, "results");
    this.results = new Minipass({
      signal: this.signal,
      objectMode: true
    });
    this.results.on("drain", () => this.resume());
    this.results.on("resume", () => this.resume());
  }
  matchEmit(e) {
    this.results.write(e);
    if (!this.results.flowing)
      this.pause();
  }
  stream() {
    const target = this.path;
    if (target.isUnknown()) {
      target.lstat().then(() => {
        this.walkCB(target, this.patterns, () => this.results.end());
      });
    } else {
      this.walkCB(target, this.patterns, () => this.results.end());
    }
    return this.results;
  }
  streamSync() {
    if (this.path.isUnknown()) {
      this.path.lstatSync();
    }
    this.walkCBSync(this.path, this.patterns, () => this.results.end());
    return this.results;
  }
}
const defaultPlatform = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
class Glob {
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
  constructor(pattern, opts) {
    __publicField(this, "absolute");
    __publicField(this, "cwd");
    __publicField(this, "root");
    __publicField(this, "dot");
    __publicField(this, "dotRelative");
    __publicField(this, "follow");
    __publicField(this, "ignore");
    __publicField(this, "magicalBraces");
    __publicField(this, "mark");
    __publicField(this, "matchBase");
    __publicField(this, "maxDepth");
    __publicField(this, "nobrace");
    __publicField(this, "nocase");
    __publicField(this, "nodir");
    __publicField(this, "noext");
    __publicField(this, "noglobstar");
    __publicField(this, "pattern");
    __publicField(this, "platform");
    __publicField(this, "realpath");
    __publicField(this, "scurry");
    __publicField(this, "stat");
    __publicField(this, "signal");
    __publicField(this, "windowsPathsNoEscape");
    __publicField(this, "withFileTypes");
    /**
     * The options provided to the constructor.
     */
    __publicField(this, "opts");
    /**
     * An array of parsed immutable {@link Pattern} objects.
     */
    __publicField(this, "patterns");
    if (!opts)
      throw new TypeError("glob options required");
    this.withFileTypes = !!opts.withFileTypes;
    this.signal = opts.signal;
    this.follow = !!opts.follow;
    this.dot = !!opts.dot;
    this.dotRelative = !!opts.dotRelative;
    this.nodir = !!opts.nodir;
    this.mark = !!opts.mark;
    if (!opts.cwd) {
      this.cwd = "";
    } else if (opts.cwd instanceof URL || opts.cwd.startsWith("file://")) {
      opts.cwd = fileURLToPath(opts.cwd);
    }
    this.cwd = opts.cwd || "";
    this.root = opts.root;
    this.magicalBraces = !!opts.magicalBraces;
    this.nobrace = !!opts.nobrace;
    this.noext = !!opts.noext;
    this.realpath = !!opts.realpath;
    this.absolute = opts.absolute;
    this.noglobstar = !!opts.noglobstar;
    this.matchBase = !!opts.matchBase;
    this.maxDepth = typeof opts.maxDepth === "number" ? opts.maxDepth : Infinity;
    this.stat = !!opts.stat;
    this.ignore = opts.ignore;
    if (this.withFileTypes && this.absolute !== void 0) {
      throw new Error("cannot set absolute and withFileTypes:true");
    }
    if (typeof pattern === "string") {
      pattern = [pattern];
    }
    this.windowsPathsNoEscape = !!opts.windowsPathsNoEscape || opts.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      pattern = pattern.map((p) => p.replace(/\\/g, "/"));
    }
    if (this.matchBase) {
      if (opts.noglobstar) {
        throw new TypeError("base matching requires globstar");
      }
      pattern = pattern.map((p) => p.includes("/") ? p : `./**/${p}`);
    }
    this.pattern = pattern;
    this.platform = opts.platform || defaultPlatform;
    this.opts = { ...opts, platform: this.platform };
    if (opts.scurry) {
      this.scurry = opts.scurry;
      if (opts.nocase !== void 0 && opts.nocase !== opts.scurry.nocase) {
        throw new Error("nocase option contradicts provided scurry option");
      }
    } else {
      const Scurry = opts.platform === "win32" ? PathScurryWin32 : opts.platform === "darwin" ? PathScurryDarwin : opts.platform ? PathScurryPosix : PathScurry;
      this.scurry = new Scurry(this.cwd, {
        nocase: opts.nocase,
        fs: opts.fs
      });
    }
    this.nocase = this.scurry.nocase;
    const nocaseMagicOnly = this.platform === "darwin" || this.platform === "win32";
    const mmo = {
      // default nocase based on platform
      ...opts,
      dot: this.dot,
      matchBase: this.matchBase,
      nobrace: this.nobrace,
      nocase: this.nocase,
      nocaseMagicOnly,
      nocomment: true,
      noext: this.noext,
      nonegate: true,
      optimizationLevel: 2,
      platform: this.platform,
      windowsPathsNoEscape: this.windowsPathsNoEscape,
      debug: !!this.opts.debug
    };
    const mms = this.pattern.map((p) => new Minimatch(p, mmo));
    const [matchSet, globParts] = mms.reduce((set, m) => {
      set[0].push(...m.set);
      set[1].push(...m.globParts);
      return set;
    }, [[], []]);
    this.patterns = matchSet.map((set, i) => {
      const g = globParts[i];
      if (!g)
        throw new Error("invalid pattern object");
      return new Pattern(set, g, 0, this.platform);
    });
  }
  async walk() {
    return [
      ...await new GlobWalker(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase
      }).walk()
    ];
  }
  walkSync() {
    return [
      ...new GlobWalker(this.patterns, this.scurry.cwd, {
        ...this.opts,
        maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
        platform: this.platform,
        nocase: this.nocase
      }).walkSync()
    ];
  }
  stream() {
    return new GlobStream(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
      platform: this.platform,
      nocase: this.nocase
    }).stream();
  }
  streamSync() {
    return new GlobStream(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
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
const hasMagic = (pattern, options = {}) => {
  if (!Array.isArray(pattern)) {
    pattern = [pattern];
  }
  for (const p of pattern) {
    if (new Minimatch(p, options).hasMagic())
      return true;
  }
  return false;
};
function globStreamSync(pattern, options = {}) {
  return new Glob(pattern, options).streamSync();
}
function globStream(pattern, options = {}) {
  return new Glob(pattern, options).stream();
}
function globSync(pattern, options = {}) {
  return new Glob(pattern, options).walkSync();
}
async function glob_(pattern, options = {}) {
  return new Glob(pattern, options).walk();
}
function globIterateSync(pattern, options = {}) {
  return new Glob(pattern, options).iterateSync();
}
function globIterate(pattern, options = {}) {
  return new Glob(pattern, options).iterate();
}
const streamSync = globStreamSync;
const stream = Object.assign(globStream, { sync: globStreamSync });
const iterateSync = globIterateSync;
const iterate = Object.assign(globIterate, {
  sync: globIterateSync
});
const sync = Object.assign(globSync, {
  stream: globStreamSync,
  iterate: globIterateSync
});
const glob = Object.assign(glob_, {
  glob: glob_,
  globSync,
  sync,
  globStream,
  stream,
  globStreamSync,
  streamSync,
  globIterate,
  iterate,
  globIterateSync,
  iterateSync,
  Glob,
  hasMagic,
  escape,
  unescape
});
glob.glob = glob;
var VERSION = "20.0.2";
var Octokit = Octokit$1.plugin(
  requestLog,
  legacyRestEndpointMethods,
  paginateRest
).defaults({
  userAgent: `octokit-rest.js/${VERSION}`
});
var btoa$1 = { exports: {} };
(function() {
  function btoa2(str) {
    var buffer;
    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), "binary");
    }
    return buffer.toString("base64");
  }
  btoa$1.exports = btoa2;
})();
var btoaExports = btoa$1.exports;
const btoa = /* @__PURE__ */ getDefaultExportFromCjs(btoaExports);
class RepoKit {
  constructor(owner, repositoryName, token) {
    __publicField(this, "octokit");
    this.owner = owner;
    this.repositoryName = repositoryName;
    this.octokit = new Octokit({ auth: token });
  }
  getRepositoryInfo() {
    return {
      owner: this.owner,
      repo: this.repositoryName
    };
  }
  async hasBranch(name) {
    try {
      await this.getBranch(name);
      return true;
    } catch (error) {
      return false;
    }
  }
  async getBranch(name) {
    const { data } = await this.octokit.rest.git.getRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${name}`
    });
    return {
      ...data,
      name
    };
  }
  async createBranch(name, sha) {
    const { data } = await this.octokit.rest.git.createRef({
      ...this.getRepositoryInfo(),
      ref: `refs/heads/${name}`,
      sha
    });
    return data;
  }
  deleteBranch(name) {
    return this.octokit.rest.git.deleteRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${name}`
    });
  }
  async getDefaultBranchName() {
    const response = await this.octokit.rest.repos.get(this.getRepositoryInfo());
    if (response.status !== 200) {
      throw new Error(`Fetch for the default branch failed with the status code ${response.status}`);
    }
    return response.data.default_branch;
  }
  async createBlobs(paths) {
    const encoding = "base64";
    const type = "blob";
    const mode = "100644";
    const blobs = [];
    for (const path of paths) {
      const {
        data: { sha }
      } = await this.octokit.rest.git.createBlob({
        ...this.getRepositoryInfo(),
        content: btoa(readFileSync(path)),
        encoding
      });
      blobs.push({ type, mode, path, sha });
    }
    return blobs;
  }
  async createCommit({ branchSha, treeSha, message, token, amend }) {
    const commitOctokit = token ? new Octokit({ auth: token }) : this.octokit;
    if (amend) {
      const { data: commit } = await this.octokit.rest.git.getCommit({
        ...this.getRepositoryInfo(),
        commit_sha: branchSha
      });
      const { data } = await commitOctokit.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: commit.parents.map(({ sha }) => sha),
        tree: treeSha,
        message: message || commit.message
      });
      return data;
    } else {
      if (!message) {
        throw new Error("Commit message is empty");
      }
      const { data } = await commitOctokit.rest.git.createCommit({
        ...this.getRepositoryInfo(),
        parents: [branchSha],
        tree: treeSha,
        message
      });
      return data;
    }
  }
  async commitFiles({ paths, branchName, amend = false, ...restCommitArgs }) {
    const treeBlobs = await this.createBlobs(paths);
    const {
      object: { sha: branchSha }
    } = await this.getBranch(branchName);
    const {
      data: { sha: treeSha }
    } = await this.octokit.rest.git.createTree({
      ...this.getRepositoryInfo(),
      tree: treeBlobs,
      base_tree: branchSha
    });
    const commit = await this.createCommit({ branchSha, treeSha, amend, ...restCommitArgs });
    await this.octokit.rest.git.updateRef({
      ...this.getRepositoryInfo(),
      ref: `heads/${branchName}`,
      sha: commit.sha,
      force: amend
    });
    return commit;
  }
  async getBranchCommitMessage(branchName) {
    const {
      data: { commit }
    } = await this.octokit.rest.repos.getBranch({
      ...this.getRepositoryInfo(),
      branch: branchName
    });
    return commit.commit.message;
  }
  async createPullRequest({
    branchName,
    baseBranchName,
    title,
    body,
    labels,
    assignees,
    reviewers,
    teamReviewers,
    milestone,
    draft
  }) {
    const { data } = await this.octokit.rest.pulls.create({
      ...this.getRepositoryInfo(),
      base: baseBranchName || await this.getDefaultBranchName(),
      head: branchName,
      title: title || await this.getBranchCommitMessage(branchName),
      ...dp({ body }),
      ...dp({ draft })
    });
    if (reviewers || teamReviewers) {
      await this.octokit.rest.pulls.requestReviewers({
        ...this.getRepositoryInfo(),
        pull_number: data.number,
        ...dp({ reviewers }),
        ...dp({ team_reviewers: teamReviewers })
      });
    }
    if (labels || assignees || milestone) {
      await this.octokit.rest.issues.update({
        ...this.getRepositoryInfo(),
        issue_number: data.number,
        ...dp({ labels }),
        ...dp({ assignees }),
        ...dp({ milestone })
      });
    }
    return data;
  }
}
const branchRefPrefix = "refs/heads/";
const findChangedFiles = (paths) => {
  const filePaths = paths.reduce((acc, path) => {
    acc.push(...globSync(path, { nodir: true }));
    return acc;
  }, []);
  const changedPaths = filePaths.reduce((acc, filePath) => {
    if (FileUtils.isFileUntracked(filePath)) {
      console.info(`File "${filePath}" is created`);
      acc.push(filePath);
      return acc;
    }
    if (FileUtils.isFileChanged(filePath)) {
      console.info(`File "${filePath}" is changed`);
      acc.push(filePath);
      return acc;
    }
    return acc;
  }, []);
  if (changedPaths.length === 0) {
    console.info("No file has been changed");
  }
  return changedPaths;
};
const createBranch = async (repoKit, { name: branchName, base: baseBranchName, recreate = false }) => {
  if (await repoKit.hasBranch(branchName)) {
    console.info(`Branch "${branchName}" already exists`);
    if (recreate) {
      console.info(`Deleting branch "${branchName}"...`);
      await repoKit.deleteBranch(branchName);
      console.info(`Branch "${branchName}" has been deleted`);
    } else {
      return;
    }
  }
  const {
    object: { sha: baseBranchSha }
  } = await repoKit.getBranch(baseBranchName ?? await repoKit.getDefaultBranchName());
  await repoKit.createBranch(branchName, baseBranchSha);
  console.info(`Branch "${branchName}" has been created`);
};
const commitFiles = async (repoKit, paths, branchName, commitArgs) => {
  const commit = await repoKit.commitFiles({
    ...commitArgs,
    paths,
    branchName
  });
  coreExports.setOutput("commit.sha", commit.sha);
  console.info(`Changed files have been committed to ${commit.sha}`);
};
const createPullRequest = async (repoKit, branchName, pullRequestArgs) => {
  const pullRequest = await repoKit.createPullRequest({
    ...pullRequestArgs,
    ...dp({ baseBranchName: pullRequestArgs.base }),
    branchName
  });
  console.info(`Pull request has been created at ${pullRequest.html_url}`);
};
const app = async ({
  repository,
  token,
  branch: { name: branchName, ...restBranch },
  commit,
  pullRequest
}) => {
  try {
    const [owner, repositoryName] = repository.split("/");
    if (!owner || !repositoryName) {
      throw new Error(`Repository "${repository}" does not have the valid format (owner/repositoryName)`);
    }
    if (commit && !commit.message && !commit.amend) {
      throw new Error('Commit message is missing, please specify the "commit.message" input');
    }
    if (branchName.startsWith(branchRefPrefix)) {
      branchName = branchName.slice(branchRefPrefix.length);
    }
    const changedPaths = commit ? findChangedFiles(commit.paths) : null;
    if ((changedPaths == null ? void 0 : changedPaths.length) === 0) {
      return 0;
    }
    const repoKit = new RepoKit(owner, repositoryName, token);
    await createBranch(repoKit, { name: branchName, ...restBranch });
    if (commit && changedPaths) {
      await commitFiles(repoKit, changedPaths, branchName, commit);
    }
    if (pullRequest) {
      await createPullRequest(repoKit, branchName, {
        ...dp({ title: commit == null ? void 0 : commit.message }),
        ...pullRequest
      });
    }
  } catch (error) {
    console.error(error);
    return 1;
  }
  return 0;
};
const commitArgFields = ["paths", "message", "token", "amend"];
const pullRequestArgFields = [
  "title",
  "body",
  "base",
  "labels",
  "assignees",
  "reviewers",
  "team-reviewers",
  "milestone",
  "draft"
];
const hasCommitArgs = () => commitArgFields.some((field) => ActionUtils.hasInput(`commit.${field}`));
const hasPullRequestArgs = () => pullRequestArgFields.some((field) => ActionUtils.hasInput(`pull-request.${field}`));
const getBranchArgs = () => {
  const name = ActionUtils.getInputAsString("branch.name", { required: true });
  const base = ActionUtils.getInputAsString("branch.base");
  const recreate = ActionUtils.getInputAsBoolean("branch.recreate");
  return {
    name,
    ...dp({ base }, null),
    ...dp({ recreate }, null)
  };
};
const getCommitArgs = () => {
  const commit = ActionUtils.getInputAsBoolean("commit") ?? hasCommitArgs();
  if (!commit) {
    return null;
  }
  const paths = ActionUtils.getInputAsStrings("commit.paths", { required: true });
  const message = ActionUtils.getInputAsString("commit.message");
  const token = ActionUtils.getInputAsString("commit.token");
  const amend = ActionUtils.getInputAsBoolean("commit.amend");
  return {
    paths,
    ...dp({ message }, null),
    ...dp({ token }, null),
    ...dp({ amend }, null)
  };
};
const getPullRequestArgs = () => {
  const pullRequest = ActionUtils.getInputAsBoolean("pull-request") ?? hasPullRequestArgs();
  if (!pullRequest) {
    return null;
  }
  const title = ActionUtils.getInputAsString("pull-request.title");
  const body = ActionUtils.getInputAsString("pull-request.body");
  const base = ActionUtils.getInputAsString("pull-request.base");
  const labels = ActionUtils.getInputAsStrings("pull-request.labels");
  const assignees = ActionUtils.getInputAsStrings("pull-request.assignees");
  const reviewers = ActionUtils.getInputAsStrings("pull-request.reviewers");
  const teamReviewers = ActionUtils.getInputAsStrings("pull-request.team-reviewers");
  const milestone = ActionUtils.getInputAsInteger("pull-request.milestone");
  const draft = ActionUtils.getInputAsBoolean("pull-request.draft");
  return {
    ...dp({ title }, null),
    ...dp({ body }, null),
    ...dp({ base }, null),
    ...dp({ labels }, null),
    ...dp({ assignees }, null),
    ...dp({ reviewers }, null),
    ...dp({ teamReviewers }, null),
    ...dp({ milestone }, null),
    ...dp({ draft }, null)
  };
};
const main = async () => {
  try {
    const requiredEnv = EnvUtils.requireEnv({
      GITHUB_REPOSITORY: dist.str()
    });
    const token = ActionUtils.getInputAsString("token", { required: true });
    const branch = getBranchArgs();
    const commit = getCommitArgs();
    const pullRequest = getPullRequestArgs();
    const exitCode = await app({
      repository: requiredEnv.GITHUB_REPOSITORY,
      token,
      branch,
      ...dp({ commit }, null),
      ...dp({ pullRequest }, null)
    });
    process.exit(exitCode);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
};
main();
