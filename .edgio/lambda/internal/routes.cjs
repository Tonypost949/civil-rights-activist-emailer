var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@edgio/core/constants.js
var require_constants = __commonJS({
  "node_modules/@edgio/core/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EDGIO_READY_MESSAGE = exports2.INVOKE_ACTIONS = exports2.INVOKE_SOURCES = exports2.FAR_FUTURE_TTL = exports2.DEFLATE_ENCODING = exports2.GZIP_ENCODING = exports2.BROTLI_ENCODING = exports2.IS_BROWSER = exports2.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT = exports2.EDGIO_PREFETCH_CDN_SW_PATH = exports2.EDGIO_PREFETCH_CDN_PATH = exports2.EDGIO_PREFETCH_CDN_BASE_PATH = exports2.EDGIO_CACHE_MANIFEST_JS_VAR_NAME = exports2.EDGIO_CACHE_MANIFEST_PATH = exports2.HOSTS_NOINDEX_PERMALINK_REGEX = exports2.ROUTES_NOINDEX_GROUP = exports2.ROUTES_CATCH_GROUP = exports2.ROUTES_FALLBACK = exports2.METHOD_QUERY_PARAM = exports2.POST_BODY_QUERY_PARAM = exports2.HEAD_QUERY_PARAM = exports2.DEVTOOLS_PREFETCH_QUERY_PARAM = exports2.PREFETCH_TTL_PARAM = exports2.PREFETCH_QUERY_PARAM = exports2.THROTTLED_QUERY_PARAM = exports2.CACHING_DEBUG_CACHEABLE = exports2.CACHING_DEBUG_STATUS = exports2.CACHING_DEBUG_HEADERS = exports2.CACHEABLE_METHODS = exports2.CACHING_STATUS = exports2.HTTP_HEADERS = exports2.HTTP_METHODS = exports2.JS_BACKEND_HOSTNAME = exports2.BACKENDS = exports2.ACTIONS = exports2.EDGIO_VIA_HEADER_VALUE = exports2.EDGIO_MAX_NESTED_REQUESTS = exports2.EDGIO_UNCACHED_PREFETCH_STATUS = exports2.EDGIO_TOO_MANY_HEADERS_STATUS_CODE = exports2.EDGIO_MAX_USER_HEADERS_ALLOWED = exports2.EDGIO_CLOUD_FUNCTIONS_HINTS = exports2.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER = exports2.EDGIO_HEADERS_PREFIX = exports2.EDGIO_DEPLOYMENT_TYPE_AWS = exports2.EDGIO_EDGE_FUNCTION_DEFAULT_VERSION = exports2.EDGIO_EDGE_FUNCTION_ENV_VARIABLES = exports2.EDGIO_ENV_VARIABLES = exports2.EDGIO_ASSET_ALIASES_FILE = exports2.EDGIO_CONFIG_FILE = void 0;
    exports2.EDGIO_CONFIG_FILE = "edgio.config.js";
    exports2.EDGIO_ASSET_ALIASES_FILE = "asset-aliases.json";
    exports2.EDGIO_ENV_VARIABLES = {
      config: "EDGIO_CONFIG",
      internalConfig: "EDGIO_INTERNAL_CONFIG",
      deploymentType: "EDGIO_DEPLOYMENT_TYPE",
      versionOverride: "EDGIO_VERSION_OVERRIDE",
      productionBuild: "EDGIO_PRODUCTION_BUILD",
      local: "EDGIO_LOCAL",
      cache: "EDGIO_CACHE",
      permalinkHost: "EDGIO_PERMALINK_HOST",
      imageOptimizerHost: "EDGIO_IMAGE_OPTIMIZER_HOST"
    };
    exports2.EDGIO_EDGE_FUNCTION_ENV_VARIABLES = {
      path: "__EDGE_FUNCTION_PATH__",
      quickjsBytecodeBase64: "__EDGE_FUNCTION_QUICKJS_BYTECODE_BASE64__",
      debug: "debug"
    };
    exports2.EDGIO_EDGE_FUNCTION_DEFAULT_VERSION = 2;
    exports2.EDGIO_DEPLOYMENT_TYPE_AWS = "AWS";
    exports2.EDGIO_HEADERS_PREFIX = "x-edg-";
    exports2.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER = "x-cloud-functions-hint";
    exports2.EDGIO_CLOUD_FUNCTIONS_HINTS = {
      app: "app",
      compute: "compute",
      redirect: "redirect",
      proxy: "proxy"
    };
    exports2.EDGIO_MAX_USER_HEADERS_ALLOWED = 70;
    exports2.EDGIO_TOO_MANY_HEADERS_STATUS_CODE = 542;
    exports2.EDGIO_UNCACHED_PREFETCH_STATUS = 412;
    exports2.EDGIO_MAX_NESTED_REQUESTS = 3;
    exports2.EDGIO_VIA_HEADER_VALUE = "Edgio Core";
    exports2.ACTIONS = {
      setHeader: "set-header",
      updateHeader: "update-header",
      removeHeader: "remove-header",
      syntheticRes: "synthetic-response",
      updatePath: "update-path",
      proxy: "proxy",
      addCookie: "add-cookie",
      updateCookie: "update-cookie",
      removeCookie: "remove-cookie"
    };
    exports2.BACKENDS = {
      js: "__js__",
      static: "__static__",
      permanentStatic: "__permanent_static__",
      imageOptimizer: "__image_optimizer__"
    };
    exports2.JS_BACKEND_HOSTNAME = "127.0.0.1";
    exports2.HTTP_METHODS = {
      head: "head",
      get: "get",
      post: "post",
      delete: "delete",
      put: "put",
      patch: "patch",
      options: "options"
    };
    exports2.HTTP_HEADERS = {
      accept: "accept",
      acceptCh: "accept-CH",
      acceptEncoding: "accept-encoding",
      authorization: "authorization",
      cacheControl: "cache-control",
      contentEncoding: "content-encoding",
      contentLength: "content-length",
      contentType: "content-type",
      cookie: "cookie",
      expires: "expires",
      host: "host",
      location: "location",
      range: "range",
      serverTiming: "server-timing",
      setCookie: "set-cookie",
      userAgent: "user-agent",
      vary: "vary",
      via: "via",
      transferEncoding: "transfer-encoding",
      strictTransportSecurity: "strict-transport-security",
      referrerPolicy: "referrer-policy",
      featurePolicy: "feature-policy",
      xHost: "x-host",
      xEcPop: "x-ec-pop",
      xEcDebug: "x-ec-debug",
      xForwardedFor: "x-forwarded-for",
      xForwardedProto: "x-forwarded-proto",
      xForwardedPort: "x-forwarded-port",
      xFrameOptions: "x-frame-options",
      xXssProtection: "x-xss-protection",
      xContentTypeOptions: "x-content-type-options",
      xRequestId: "x-request-id",
      xSwCacheControl: "x-sw-cache-control",
      xEdgeBrowser: "x-edg-browser",
      xEdgeCacheControl: "x-edg-cache-control",
      xEdgeCachingStatus: "x-edg-caching-status",
      xEdgeClientIp: "x-edg-client-ip",
      xEdgeComponents: "x-edg-components",
      xEdgeDestination: "x-edg-destination",
      xEdgeDevice: "x-edg-device",
      xEdgeDeviceIsBot: "x-edg-device-is-bot",
      xEdgeGeoCity: "x-edg-geo-city",
      xEdgeGeoCountryCode: "x-edg-geo-country-code",
      xEdgeGeoLatitude: "x-edg-geo-latitude",
      xEdgeGeoLongitude: "x-edg-geo-longitude",
      xEdgeGeoPostalCode: "x-edg-geo-postal-code",
      xEdgeMatchedRoutes: "x-edg-matched-routes",
      xEdgeProtocol: "x-edg-protocol",
      xEdgeRoute: "x-edg-route",
      xEdgeStatus: "x-edg-status",
      xEdgeSurrogateKey: "x-edg-surrogate-key",
      xEdgeT: "x-edg-t",
      xEdgeUserT: "x-edg-user-t",
      xEdgeVendor: "x-edg-vendor",
      xEdgeVersion: "x-edg-version",
      xEdgServerlessError: "x-edg-serverless-error",
      xEdgInvokeSource: "x-edg-invoke-source",
      xEdgInvokeAction: "x-edg-invoke-action",
      xEdgErrorMessage: "x-edg-error-message",
      xEdgErrorDetails: "x-edg-error-details",
      xEdgErrorLevel: "x-edg-error-level",
      xEdgRawUrl: "x-edg-raw-url",
      xCloudFunctionsHint: exports2.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER,
      x0ClientIp: "x-0-client-ip",
      x0Protocol: "x-0-protocol",
      x0Version: "x-0-version",
      xEcEdgeIoDebug: "x-ec-edgeio-debug",
      xEcEdgeIoDisable: "x-ec-edgeio-disable",
      xEdgeIoInfo: "x-edgeio-info",
      xEdgeIoStatus: "x-edgeio-status",
      xEdgeIoError: "x-edgeio-error",
      xEcUUID: "x-ec-uuid"
    };
    exports2.CACHING_STATUS = {
      cached: "cached",
      hit: "hit",
      bypassed: "bypassed",
      private: "private",
      method: "method",
      bodyTooBig: "body-too-big",
      code: "code",
      setCookie: "set-cookie",
      noMaxAge: "no-max-age"
    };
    exports2.CACHEABLE_METHODS = /* @__PURE__ */ new Set(["get", "head"]);
    exports2.CACHING_DEBUG_HEADERS = {
      cache: "x-ec-cache",
      checkCacheable: "x-ec-check-cacheable",
      cacheState: "x-ec-cache-state",
      cacheKey: "x-ec-cache-key"
    };
    exports2.CACHING_DEBUG_STATUS = {
      configNoCache: "CONFIG_NOCACHE",
      none: "NONE",
      tcpClientRefreshMiss: "TCP_CLIENT_REFRESH_MISS",
      tcpExpiredHit: "TCP_EXPIRED_HIT",
      tcpExpiredMiss: "TCP_EXPIRED_MISS",
      tcpHit: "TCP_HIT",
      tcpMiss: "TCP_MISS",
      tcpPartialHit: "TCP_PARTIAL_HIT",
      uncacheable: "UNCACHEABLE"
    };
    exports2.CACHING_DEBUG_CACHEABLE = {
      yes: "YES",
      no: "NO"
    };
    exports2.THROTTLED_QUERY_PARAM = "edgio_prefetch";
    exports2.PREFETCH_QUERY_PARAM = exports2.THROTTLED_QUERY_PARAM;
    exports2.PREFETCH_TTL_PARAM = "edgio_prefetch_ttl";
    exports2.DEVTOOLS_PREFETCH_QUERY_PARAM = "edgio_dt_pf";
    exports2.HEAD_QUERY_PARAM = "edgio_head";
    exports2.POST_BODY_QUERY_PARAM = "pref_edgio_body";
    exports2.METHOD_QUERY_PARAM = "pref_edgio_method";
    exports2.ROUTES_FALLBACK = "fallback";
    exports2.ROUTES_CATCH_GROUP = "catch";
    exports2.ROUTES_NOINDEX_GROUP = "noindex";
    exports2.HOSTS_NOINDEX_PERMALINK_REGEX = /\.edgio\.link|\.edgio-perma\.link/;
    exports2.EDGIO_CACHE_MANIFEST_PATH = "/__edgio__/cache-manifest.js";
    exports2.EDGIO_CACHE_MANIFEST_JS_VAR_NAME = "__EDGIO_CACHE_MANIFEST__";
    exports2.EDGIO_PREFETCH_CDN_BASE_PATH = "/__edgio__/prefetch";
    exports2.EDGIO_PREFETCH_CDN_PATH = `${exports2.EDGIO_PREFETCH_CDN_BASE_PATH}/:path*`;
    exports2.EDGIO_PREFETCH_CDN_SW_PATH = "/__edgio__service_worker_:version.js";
    exports2.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT = "cache-manifest-ignore";
    exports2.IS_BROWSER = typeof window !== "undefined";
    exports2.BROTLI_ENCODING = "br";
    exports2.GZIP_ENCODING = "gzip";
    exports2.DEFLATE_ENCODING = "deflate";
    exports2.FAR_FUTURE_TTL = "1y";
    exports2.INVOKE_SOURCES = {
      functionUrl: "function-url",
      console: "console",
      bufferProxy: "buffer-proxy"
    };
    exports2.INVOKE_ACTIONS = {
      getEdgeConfig: "getEdgeConfig",
      getPreloadConfig: "getPreloadConfig",
      serverless: "serverless",
      simulator: "simulator"
    };
    exports2.EDGIO_READY_MESSAGE = "> Edgio ready on ";
  }
});

// node_modules/@edgio/core/source.js
var require_source = __commonJS({
  "node_modules/@edgio/core/source.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setSourceDir = exports2.getSourceDir = void 0;
    function getSourceDir() {
      return process.env.EDGIO_ROOT_SOURCE_DIR || process.cwd();
    }
    exports2.getSourceDir = getSourceDir;
    function setSourceDir(dir) {
      process.env.EDGIO_ROOT_SOURCE_DIR = dir;
    }
    exports2.setSourceDir = setSourceDir;
  }
});

// node_modules/slash/index.js
var require_slash = __commonJS({
  "node_modules/slash/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (path) => {
      const isExtendedLengthPath = /^\\\\\?\\/.test(path);
      const hasNonAscii = /[^\u0000-\u0080]+/.test(path);
      if (isExtendedLengthPath || hasNonAscii) {
        return path;
      }
      return path.replace(/\\/g, "/");
    };
  }
});

// node_modules/@edgio/core/utils/nonWebpackRequire.js
var require_nonWebpackRequire = __commonJS({
  "node_modules/@edgio/core/utils/nonWebpackRequire.js"(exports, module) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var slash_1 = __importDefault(require_slash());
    function nonWebpackRequire(modulePath, { ignoreErrors = false } = {}) {
      try {
        return eval("require")((0, slash_1.default)(modulePath));
      } catch (e) {
        if (ignoreErrors) {
          return void 0;
        } else {
          throw e;
        }
      }
    }
    exports.default = nonWebpackRequire;
  }
});

// node_modules/@edgio/core/utils/index.js
var require_utils = __commonJS({
  "node_modules/@edgio/core/utils/index.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nonWebpackRequire = void 0;
    var nonWebpackRequire_1 = require_nonWebpackRequire();
    Object.defineProperty(exports2, "nonWebpackRequire", { enumerable: true, get: function() {
      return __importDefault2(nonWebpackRequire_1).default;
    } });
  }
});

// node_modules/@edgio/core/utils/requireInternal.js
var require_requireInternal = __commonJS({
  "node_modules/@edgio/core/utils/requireInternal.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var nonWebpackRequire_1 = __importDefault2(require_nonWebpackRequire());
    function requireInternal(packagePath) {
      try {
        const resolved = require.resolve(packagePath, {
          paths: [require.resolve("@edgio/core")]
        });
        return (0, nonWebpackRequire_1.default)(resolved);
      } catch (e) {
        return (0, nonWebpackRequire_1.default)(packagePath);
      }
    }
    exports2.default = requireInternal;
  }
});

// node_modules/@edgio/core/router/RouteCriteria.js
var require_RouteCriteria = __commonJS({
  "node_modules/@edgio/core/router/RouteCriteria.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.not = exports2.or = exports2.and = exports2.OrOperator = exports2.AndOperator = exports2.isNegation = void 0;
    var isNegation = (value) => {
      return !!value && typeof value === "object" && "not" in value;
    };
    exports2.isNegation = isNegation;
    var CriteriaOperator = class {
      constructor(values) {
        this.values = values;
      }
    };
    var AndOperator = class extends CriteriaOperator {
      constructor() {
        super(...arguments);
        this.operator = "and";
      }
    };
    exports2.AndOperator = AndOperator;
    var OrOperator = class extends CriteriaOperator {
      constructor() {
        super(...arguments);
        this.operator = "or";
      }
    };
    exports2.OrOperator = OrOperator;
    function and(...criterias) {
      return new AndOperator(criterias);
    }
    exports2.and = and;
    function or(...criterias) {
      return new OrOperator(criterias);
    }
    exports2.or = or;
    function not(value) {
      return {
        not: value
      };
    }
    exports2.not = not;
  }
});

// node_modules/@edgio/core/router/exact.js
var require_exact = __commonJS({
  "node_modules/@edgio/core/router/exact.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExactPath = void 0;
    var ExactPath = class {
      constructor(value) {
        this.value = value;
      }
      toString() {
        return this.value;
      }
    };
    exports2.ExactPath = ExactPath;
    function exact(path) {
      return new ExactPath(path);
    }
    exports2.default = exact;
  }
});

// node_modules/@edgio/core/utils/regExpEscape.js
var require_regExpEscape = __commonJS({
  "node_modules/@edgio/core/utils/regExpEscape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toRegExp = void 0;
    function regExpEscape(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    exports2.default = regExpEscape;
    function toRegExp(string) {
      return new RegExp(regExpEscape(string));
    }
    exports2.toRegExp = toRegExp;
  }
});

// node_modules/@edgio/core/utils/toEdgeRegex.js
var require_toEdgeRegex = __commonJS({
  "node_modules/@edgio/core/utils/toEdgeRegex.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromEdgeRegex = void 0;
    var regExpEscape_1 = __importDefault2(require_regExpEscape());
    function toEdgeRegex(regex, prefix = "", escapeSlashes) {
      let source = escapeSlashes ? regex.source : regex.source.replace(/\\\//g, "/");
      if (source.startsWith("^")) {
        source = `^${(0, regExpEscape_1.default)(prefix)}${source.slice(1)}`;
      } else {
        source = `${(0, regExpEscape_1.default)(prefix)}${source}`;
      }
      return `${regex.ignoreCase ? "(?i)" : ""}${source}`;
    }
    exports2.default = toEdgeRegex;
    function fromEdgeRegex(edgeRegex) {
      const ignoreCase = edgeRegex.indexOf("(?i)") === 0;
      if (ignoreCase) {
        edgeRegex = edgeRegex.slice("(?i)".length);
      }
      return new RegExp(edgeRegex.replace(/\//g, "/"), ignoreCase ? "i" : "");
    }
    exports2.fromEdgeRegex = fromEdgeRegex;
  }
});

// node_modules/@edgio/core/node_modules/path-to-regexp/dist/index.js
var require_dist = __commonJS({
  "node_modules/@edgio/core/node_modules/path-to-regexp/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pathToRegexp = exports2.tokensToRegexp = exports2.regexpToFunction = exports2.match = exports2.tokensToFunction = exports2.compile = exports2.parse = void 0;
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at ".concat(i));
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at '.concat(j));
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at ".concat(j));
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at ".concat(i));
          if (!pattern)
            throw new TypeError("Missing pattern at ".concat(i));
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      var isSafe = function(value2) {
        for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
          var char2 = delimiter_1[_i];
          if (value2.indexOf(char2) > -1)
            return true;
        }
        return false;
      };
      var safePattern = function(prefix2) {
        var prev = result[result.length - 1];
        var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
        if (prev && !prevText) {
          throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
        }
        if (!prevText || isSafe(prevText))
          return "[^".concat(escapeString(delimiter), "]+?");
        return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || safePattern(prefix),
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports2.parse = parse;
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports2.compile = compile;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path;
      };
    }
    exports2.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports2.match = match;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path, index, params };
      };
    }
    exports2.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path.source);
      while (execResult) {
        keys.push({
          name: execResult[1] || index++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
      });
      return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
      var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
      var delimiterRe = "[".concat(escapeString(delimiter), "]");
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
              } else {
                route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
              }
            } else {
              if (token.modifier === "+" || token.modifier === "*") {
                throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
              }
              route += "(".concat(token.pattern, ")").concat(token.modifier);
            }
          } else {
            route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
          }
        }
      }
      if (end) {
        if (!strict)
          route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
          route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
      }
      return new RegExp(route, flags(options));
    }
    exports2.tokensToRegexp = tokensToRegexp;
    function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports2.pathToRegexp = pathToRegexp;
  }
});

// node_modules/@edgio/core/errors/InvalidRoutePatternError.js
var require_InvalidRoutePatternError = __commonJS({
  "node_modules/@edgio/core/errors/InvalidRoutePatternError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var InvalidRoutePatternError = class extends Error {
      constructor(pattern) {
        super(`Route pattern "${pattern}" contains invalid syntax. To force exact matching, wrap the path in the 'exact' function.
See https://docs.edg.io/guides/performance/cdn_as_code/common_routing_patterns for more information.`);
        this.isUserError = true;
      }
    };
    exports2.default = InvalidRoutePatternError;
  }
});

// node_modules/@edgio/core/utils/toPathRegexp.js
var require_toPathRegexp = __commonJS({
  "node_modules/@edgio/core/utils/toPathRegexp.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var path_to_regexp_1 = require_dist();
    var InvalidRoutePatternError_1 = __importDefault2(require_InvalidRoutePatternError());
    function toPathRegexp(path) {
      if (path) {
        try {
          return (0, path_to_regexp_1.pathToRegexp)(path);
        } catch (e) {
          throw new InvalidRoutePatternError_1.default(path);
        }
      } else {
        return /^.*$/;
      }
    }
    exports2.default = toPathRegexp;
  }
});

// node_modules/@edgio/core/router/converters/toCondition.js
var require_toCondition = __commonJS({
  "node_modules/@edgio/core/router/converters/toCondition.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toCondition = void 0;
    var exact_1 = require_exact();
    var toEdgeRegex_1 = __importDefault2(require_toEdgeRegex());
    var toPathRegexp_1 = __importDefault2(require_toPathRegexp());
    var RouteCriteria_1 = require_RouteCriteria();
    var toCondition = (property, value) => {
      if ((0, RouteCriteria_1.isNegation)(value)) {
        if (typeof value.not === "string") {
          if (property.request === "path" && (0, toPathRegexp_1.default)(value.not)) {
            return { ["!="]: [property, value.not] };
          }
          return { ["!=="]: [property, value.not] };
        } else if (value.not instanceof RegExp) {
          return { ["!~"]: [property, (0, toEdgeRegex_1.default)(value.not)] };
        } else if (value.not instanceof exact_1.ExactPath) {
          return { ["!=="]: [property, value.not.value] };
        } else if (Array.isArray(value.not)) {
          return { not_in: [property, value.not] };
        }
      } else {
        if (typeof value === "string") {
          if (property.request === "path" && (0, toPathRegexp_1.default)(value)) {
            return { ["=="]: [property, value] };
          }
          return { ["==="]: [property, value] };
        } else if (value instanceof RegExp) {
          return { ["=~"]: [property, (0, toEdgeRegex_1.default)(value)] };
        } else if (value instanceof exact_1.ExactPath) {
          return { ["==="]: [property, value.value] };
        } else if (Array.isArray(value)) {
          return { in: [property, value] };
        }
      }
      throw new Error(`Invalid type for match condition: ${typeof value}`);
    };
    exports2.toCondition = toCondition;
  }
});

// node_modules/@edgio/core/router/createMatchers.js
var require_createMatchers = __commonJS({
  "node_modules/@edgio/core/router/createMatchers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMatchers = void 0;
    var RouteCriteria_1 = require_RouteCriteria();
    var toCondition_1 = require_toCondition();
    function createMatchers(criteria) {
      var _a;
      const ecCriteria = criteria;
      if (ecCriteria.edgeControlCriteria) {
        return ecCriteria.edgeControlCriteria;
      }
      const edgeJsCriteria = criteria;
      if (edgeJsCriteria instanceof RouteCriteria_1.AndOperator || edgeJsCriteria instanceof RouteCriteria_1.OrOperator) {
        return {
          [edgeJsCriteria.operator]: edgeJsCriteria.values.map((edgeJsCriteria2) => createMatchers(edgeJsCriteria2)).filter((matchers2) => matchers2)
        };
      }
      const matchers = [];
      const add = (property, value) => {
        const condition = (0, toCondition_1.toCondition)(property, value);
        matchers.push(condition);
      };
      if (edgeJsCriteria.path) {
        add({ request: "path" }, edgeJsCriteria.path);
      }
      if (edgeJsCriteria.origin_path) {
        add({ request: "origin_path" }, edgeJsCriteria.origin_path);
      }
      if (edgeJsCriteria.scheme) {
        add({ request: "scheme" }, edgeJsCriteria.scheme);
      }
      if (edgeJsCriteria.method) {
        add(
          { request: "method" },
          typeof edgeJsCriteria.method === "string" ? edgeJsCriteria.method.toUpperCase() : edgeJsCriteria.method
        );
      }
      if (edgeJsCriteria.headers) {
        Object.entries(edgeJsCriteria.headers).forEach(([name, value]) => {
          add({ "request.header": name.toLowerCase() }, value);
        });
      }
      if (edgeJsCriteria.query) {
        Object.entries(edgeJsCriteria.query).forEach(([name, value]) => {
          add({ "request.origin_query": name }, typeof value === "string" && value.startsWith(":") ? new RegExp(".+") : value);
        });
      }
      if (edgeJsCriteria.cookies) {
        Object.entries(edgeJsCriteria.cookies).forEach(([name, value]) => {
          add({ "request.cookie": name }, value);
        });
      }
      if (edgeJsCriteria.device) {
        Object.entries(edgeJsCriteria.device).forEach(([name, value]) => {
          add({ device: name }, value);
        });
      }
      if (edgeJsCriteria.location) {
        Object.entries(edgeJsCriteria.location).forEach(([name, value]) => {
          add({ location: name }, value);
        });
      }
      if (edgeJsCriteria.variable) {
        Object.entries(edgeJsCriteria.variable).forEach(([name, value]) => {
          add({ variable: name }, value);
        });
      }
      if (edgeJsCriteria.client_ip) {
        add({ request: "client_ip" }, edgeJsCriteria.client_ip);
      }
      if (edgeJsCriteria["referring-domain"]) {
        add({ request: "referring_domain" }, edgeJsCriteria["referring-domain"]);
      }
      if ((_a = edgeJsCriteria.response) === null || _a === void 0 ? void 0 : _a.status_code) {
        add({ response: "status_code" }, edgeJsCriteria.response.status_code);
      }
      if (matchers.length === 0) {
        return null;
      }
      return matchers.length === 1 ? matchers[0] : { and: matchers };
    }
    exports2.createMatchers = createMatchers;
  }
});

// node_modules/@edgio/core/router/converters/toRule.js
var require_toRule = __commonJS({
  "node_modules/@edgio/core/router/converters/toRule.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isRule = exports2.toThen = exports2.toRule = void 0;
    var createMatchers_1 = require_createMatchers();
    var toRule = (criteria, ...featuresOrRouters) => {
      const matchers = (0, createMatchers_1.createMatchers)(criteria);
      const then = (0, exports2.toThen)(featuresOrRouters);
      if (!matchers) {
        return then;
      }
      const rule = {
        if: [matchers, then]
      };
      return rule;
    };
    exports2.toRule = toRule;
    var toThen = (featuresOrRouters = []) => {
      var _a;
      const outputRules = [];
      featuresOrRouters.forEach((featureOrRouter) => {
        const value = featureOrRouter;
        value.rules ? outputRules.push(...value.rules) : Array.isArray(value) ? outputRules.push(...value) : outputRules.push(value);
      });
      if ((_a = outputRules[0]) === null || _a === void 0 ? void 0 : _a.if) {
        return [{}, ...outputRules];
      } else if (outputRules.length === 1) {
        return outputRules[0];
      }
      return outputRules;
    };
    exports2.toThen = toThen;
    var isRule = (value) => !!value.if;
    exports2.isRule = isRule;
  }
});

// node_modules/@edgio/core/utils/regexUtils.js
var require_regexUtils = __commonJS({
  "node_modules/@edgio/core/utils/regexUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bindRegexParams = exports2.substituteParams = void 0;
    function substituteParams(regex, source, destination) {
      return bindRegexParams(destination, regex.exec(source) || []);
    }
    exports2.substituteParams = substituteParams;
    function bindRegexParams(destination, params) {
      var _a;
      return ((_a = destination.match(/(\\?)(\$[0-9]*)/g)) === null || _a === void 0 ? void 0 : _a.reduce((output, substitutionParam) => {
        if (substitutionParam.startsWith("\\"))
          return output;
        const index = parseInt(substitutionParam.substring(1));
        return output.replace(substitutionParam, params[index] || "");
      }, destination)) || destination;
    }
    exports2.bindRegexParams = bindRegexParams;
  }
});

// node_modules/@edgio/core/utils/bindParams.js
var require_bindParams = __commonJS({
  "node_modules/@edgio/core/utils/bindParams.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var regexUtils_1 = require_regexUtils();
    exports2.default = (path, params) => {
      let p = path;
      if (/(^|[^$]){/.test(path)) {
        throw new Error(`{variable} syntax in the path option is no longer supported, use :variable instead (${path})`);
      }
      for (let paramName in params) {
        let value = params[paramName];
        if (Array.isArray(value)) {
          value = value.join("/");
        }
        const pattern = new RegExp(`:${paramName}(\\([^)]*\\))?[?*+]?`, "g");
        const replacement = value === void 0 ? "" : value;
        p = p.replace(pattern, replacement.replace(/\$/g, "$$$"));
      }
      p = p.replace(/:\w+(\*|\+|\?)?/, "");
      p = p.replace("\\?", "?");
      p = p.replace(/\/+/g, "/").replace(/^([^:]+:)\//gi, "$1//");
      p = (params === null || params === void 0 ? void 0 : params.$) ? (0, regexUtils_1.bindRegexParams)(p, params.$) : p;
      return p;
    };
  }
});

// node_modules/@edgio/core/runtime/toRegExp.js
var require_toRegExp = __commonJS({
  "node_modules/@edgio/core/runtime/toRegExp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function toRegExp(pattern, flags = "g") {
      if (pattern.startsWith("(?i)")) {
        pattern = pattern.substring(4);
        flags += "i";
      }
      return new RegExp(pattern, flags);
    }
    exports2.default = toRegExp;
  }
});

// node_modules/@edgio/core/router/path.js
var require_path = __commonJS({
  "node_modules/@edgio/core/router/path.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.nameParamsToIndex = exports2.isAbsoluteUrl = exports2.getBackReferences = exports2.mapURL = exports2.rewritePath = exports2.pathToRegex = void 0;
    var path_to_regexp_1 = require_dist();
    var bindParams_1 = __importDefault2(require_bindParams());
    var toEdgeRegex_1 = __importDefault2(require_toEdgeRegex());
    var toRegExp_1 = __importDefault2(require_toRegExp());
    function pathToRegex(path) {
      let prefix = "";
      const protocolRegex = /^[a-z]+:\/\//i;
      const matches = protocolRegex.exec(path);
      if (matches) {
        prefix = matches[0];
      }
      const pathPart = path.substring(prefix.length);
      return (0, toEdgeRegex_1.default)((0, path_to_regexp_1.pathToRegexp)(pathPart), prefix);
    }
    exports2.pathToRegex = pathToRegex;
    function rewritePath(sourcePath, destPath, options) {
      const { skipQuery = false, skipSlash = false } = options || {};
      if (sourcePath == null)
        return { destination: destPath };
      return {
        source: `${sourcePath}:optionalSlash(\\/?)?:optionalQuery(\\?.*)?`,
        syntax: "path-to-regexp",
        destination: `${destPath}${skipSlash ? "" : ":optionalSlash"}${skipQuery ? "" : ":optionalQuery"}`
      };
    }
    exports2.rewritePath = rewritePath;
    function mapURL(url, source, destination, syntax) {
      let targetSource;
      let targetDest = destination;
      if (!source)
        return targetDest;
      if (syntax === "regexp") {
        targetSource = (0, toRegExp_1.default)(source, "");
      } else {
        targetSource = (0, path_to_regexp_1.pathToRegexp)(source);
        targetDest = (0, bindParams_1.default)(destination, getBackReferences(source));
      }
      if (!url.match(targetSource))
        return null;
      return url.replace(targetSource, targetDest);
    }
    exports2.mapURL = mapURL;
    function getBackReferences(path) {
      const absolutePathMatch = path.match(/https?:\/\/[^/]+(.*)/);
      if (absolutePathMatch) {
        path = `/${absolutePathMatch[1]}`;
      }
      let backReferenceCounter = 1;
      const references = {};
      (0, path_to_regexp_1.parse)(path).forEach((token) => {
        if (typeof token !== "string") {
          references[token.name] = `$${backReferenceCounter++}`;
        }
      });
      return references;
    }
    exports2.getBackReferences = getBackReferences;
    function isAbsoluteUrl(url) {
      return url.startsWith("http://") || url.startsWith("https://");
    }
    exports2.isAbsoluteUrl = isAbsoluteUrl;
    function nameParamsToIndex(source, destination) {
      const backReferences = getBackReferences(source);
      const matches = [
        ...destination.matchAll(/:(.[a-z_-]+)[+|*]/g),
        ...destination.matchAll(/:(.[a-z_-]+)/g)
      ];
      matches.forEach((match) => {
        if (!Object.keys(backReferences).includes(match[1]))
          return;
        const index = Object.keys(backReferences).indexOf(match[1]);
        destination = destination.replace(match[0], `$${index}`);
      });
      return destination;
    }
    exports2.nameParamsToIndex = nameParamsToIndex;
  }
});

// node_modules/@edgio/core/lambda/global.helpers.js
var require_global_helpers = __commonJS({
  "node_modules/@edgio/core/lambda/global.helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioRuntimeGlobal = void 0;
    String.prototype.writeToStream = function(response) {
      response.sendResponse(this.toString());
    };
    var EdgioRuntimeGlobal = class {
      static get runtimeOptions() {
        return global.EDGIO_RUNTIME_OPTIONS;
      }
      static set runtimeOptions(options) {
        global.EDGIO_RUNTIME_OPTIONS = options;
      }
      static get isCacheEnabled() {
        var _a;
        return (_a = global.isCacheEnabled) !== null && _a !== void 0 ? _a : false;
      }
      static set isCacheEnabled(value) {
        global.isCacheEnabled = value;
      }
      static get devOptions() {
        return global.devOptions;
      }
      static set devOptions(options) {
        global.devOptions = options;
      }
    };
    exports2.EdgioRuntimeGlobal = EdgioRuntimeGlobal;
  }
});

// node_modules/@edgio/core/environment.js
var require_environment = __commonJS({
  "node_modules/@edgio/core/environment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isBrowser = exports2.isEdgioRunDev = exports2.isProductionBuild = exports2.isLocal = exports2.isCloud = void 0;
    var constants_1 = require_constants();
    var global_helpers_1 = require_global_helpers();
    function isCloud() {
      if (global_helpers_1.EdgioRuntimeGlobal.runtimeOptions !== void 0)
        return global_helpers_1.EdgioRuntimeGlobal.runtimeOptions.isProductionBuild;
      return process.env[constants_1.EDGIO_ENV_VARIABLES.deploymentType] === constants_1.EDGIO_DEPLOYMENT_TYPE_AWS;
    }
    exports2.isCloud = isCloud;
    function isLocal() {
      var _a;
      return ((_a = global_helpers_1.EdgioRuntimeGlobal.runtimeOptions) === null || _a === void 0 ? void 0 : _a.devMode) || process.env[constants_1.EDGIO_ENV_VARIABLES.local] === "true";
    }
    exports2.isLocal = isLocal;
    function isProductionBuild() {
      if (global_helpers_1.EdgioRuntimeGlobal.runtimeOptions !== void 0)
        return global_helpers_1.EdgioRuntimeGlobal.runtimeOptions.isProductionBuild;
      return process.env["NODE_ENV"] === "production" || process.env[constants_1.EDGIO_ENV_VARIABLES.productionBuild] === "true";
    }
    exports2.isProductionBuild = isProductionBuild;
    function isEdgioRunDev() {
      return !isCloud() && !isProductionBuild();
    }
    exports2.isEdgioRunDev = isEdgioRunDev;
    function isBrowser() {
      return typeof window !== "undefined";
    }
    exports2.isBrowser = isBrowser;
  }
});

// node_modules/@edgio/core/utils/ports.js
var require_ports = __commonJS({
  "node_modules/@edgio/core/utils/ports.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.localhostWithPort = exports2.localhost = exports2.handlerPort = exports2.assetPort = exports2.jsPort = exports2.port = void 0;
    exports2.port = Number(process.env.PORT) || 3e3;
    exports2.jsPort = exports2.port + 1;
    exports2.assetPort = exports2.port + 2;
    exports2.handlerPort = exports2.port + 1e3;
    exports2.localhost = "127.0.0.1";
    exports2.localhostWithPort = `${exports2.localhost}:${exports2.port}`;
  }
});

// node_modules/@edgio/core/origins.js
var require_origins = __commonJS({
  "node_modules/@edgio/core/origins.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createPrefetchOrigin = exports2.createServerlessOrigin = exports2.createSelfOrigin = exports2.createPermanentStaticOrigin = exports2.createStaticOrigin = exports2.getPathPrefix = exports2.getEdgioOrigins = exports2.PREFETCH_ORIGIN_NAME = exports2.SERVERLESS_ORIGIN_NAME = exports2.PERMANENT_STATIC_ORIGIN_NAME = exports2.SELF_ORIGIN_NAME = exports2.STATIC_ORIGIN_NAME = void 0;
    var constants_1 = require_constants();
    var environment_1 = require_environment();
    var ports_1 = require_ports();
    exports2.STATIC_ORIGIN_NAME = "edgio_static";
    exports2.SELF_ORIGIN_NAME = "edgio_self";
    exports2.PERMANENT_STATIC_ORIGIN_NAME = "edgio_permanent_static";
    exports2.SERVERLESS_ORIGIN_NAME = "edgio_serverless";
    exports2.PREFETCH_ORIGIN_NAME = "edgio_prefetch";
    var internalConfig = process.env[constants_1.EDGIO_ENV_VARIABLES.internalConfig] ? JSON.parse(process.env[constants_1.EDGIO_ENV_VARIABLES.internalConfig] || "{}") : {};
    var getOriginFromConfig = (name) => {
      var _a;
      const origin = (_a = internalConfig === null || internalConfig === void 0 ? void 0 : internalConfig.origins) === null || _a === void 0 ? void 0 : _a.find((origin2) => origin2.name === name);
      if (origin) {
        for (let host of origin.hosts) {
          host.scheme = "https";
          delete host.path_prefix;
        }
        return {
          ...origin,
          tls_verify: {
            use_sni: true
          }
        };
      }
      return origin;
    };
    function getEdgioOrigins(forEdgeControl = false) {
      return [
        createStaticOrigin(),
        createPermanentStaticOrigin(),
        createServerlessOrigin(forEdgeControl),
        ...(0, environment_1.isLocal)() ? [createPrefetchOrigin(), createSelfOrigin()] : []
      ];
    }
    exports2.getEdgioOrigins = getEdgioOrigins;
    function getPathPrefix(origin) {
      var _a, _b, _c;
      return ((_c = (_b = (_a = internalConfig === null || internalConfig === void 0 ? void 0 : internalConfig.origins) === null || _a === void 0 ? void 0 : _a.find((o) => o.name === origin)) === null || _b === void 0 ? void 0 : _b.hosts[0]) === null || _c === void 0 ? void 0 : _c.path_prefix) || "";
    }
    exports2.getPathPrefix = getPathPrefix;
    function createStaticOrigin() {
      return getOriginFromConfig(exports2.STATIC_ORIGIN_NAME) || {
        name: exports2.STATIC_ORIGIN_NAME,
        hosts: [{ location: `127.0.0.1:${ports_1.assetPort}` }]
      };
    }
    exports2.createStaticOrigin = createStaticOrigin;
    function createPermanentStaticOrigin() {
      return getOriginFromConfig(exports2.PERMANENT_STATIC_ORIGIN_NAME) || {
        name: exports2.PERMANENT_STATIC_ORIGIN_NAME,
        hosts: [{ location: `127.0.0.1:${ports_1.assetPort}` }]
      };
    }
    exports2.createPermanentStaticOrigin = createPermanentStaticOrigin;
    function createSelfOrigin() {
      return getOriginFromConfig(exports2.SELF_ORIGIN_NAME) || {
        name: exports2.SELF_ORIGIN_NAME,
        override_host_header: `127.0.0.1`,
        hosts: [
          {
            location: [
              {
                hostname: "127.0.0.1",
                port: ports_1.port
              }
            ]
          }
        ]
      };
    }
    exports2.createSelfOrigin = createSelfOrigin;
    function createServerlessOrigin(forEdgeControl = false) {
      const originFromConfig = forEdgeControl ? getOriginFromConfig(exports2.SERVERLESS_ORIGIN_NAME) : null;
      return originFromConfig || {
        name: exports2.SERVERLESS_ORIGIN_NAME,
        hosts: [{ location: `127.0.0.1:${ports_1.jsPort}` }]
      };
    }
    exports2.createServerlessOrigin = createServerlessOrigin;
    function createPrefetchOrigin() {
      return {
        name: exports2.PREFETCH_ORIGIN_NAME,
        override_host_header: "edgio-sites-prefetch-default.edgio.link",
        hosts: [{ location: "edgio-sites-prefetch-default.edgio.link" }]
      };
    }
    exports2.createPrefetchOrigin = createPrefetchOrigin;
  }
});

// node_modules/@edgio/core/router/RedirectOptions.js
var require_RedirectOptions = __commonJS({
  "node_modules/@edgio/core/router/RedirectOptions.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.normalizeRedirectOptions = void 0;
    var url_1 = __importDefault2(require("url"));
    var querystring_1 = __importDefault2(require("querystring"));
    var normalizeRedirectOptions = (to, options) => {
      const { statusCode = 302, query = {} } = typeof options === "number" ? { statusCode: options } : options;
      let toQuery = {};
      const parsedTo = url_1.default.parse(to);
      if (parsedTo === null || parsedTo === void 0 ? void 0 : parsedTo.search) {
        to = to.substr(0, to.length - parsedTo.search.length);
        toQuery = querystring_1.default.parse(parsedTo.query);
      }
      return {
        to,
        statusCode,
        query: {
          ...toQuery,
          ...query
        }
      };
    };
    exports2.normalizeRedirectOptions = normalizeRedirectOptions;
  }
});

// node_modules/@edgio/core/log.js
var require_log = __commonJS({
  "node_modules/@edgio/core/log.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["TRACE"] = 0] = "TRACE";
      LogLevel2[LogLevel2["DEBUG"] = 1] = "DEBUG";
      LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    })(LogLevel || (LogLevel = {}));
    var key = (_a = process.env.LOG_LEVEL) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    var configuredLogLevel = key ? LogLevel[key] : LogLevel.INFO;
    var logger = {
      trace(...params) {
        logger.log(LogLevel.TRACE, ...params);
      },
      debug(...params) {
        logger.log(LogLevel.DEBUG, ...params);
      },
      info(...params) {
        logger.log(LogLevel.INFO, ...params);
      },
      warn(...params) {
        logger.log(LogLevel.WARN, ...params);
      },
      error(...params) {
        logger.log(LogLevel.ERROR, ...params);
      },
      log(level, ...params) {
        if (params.length === 1 && typeof params[0] === "function") {
          params = [params[0]()];
        }
        if (configuredLogLevel != null && configuredLogLevel <= level) {
          console.log(`${LogLevel[level].padEnd(5, " ")}`, ...params);
        }
      }
    };
    exports2.default = logger;
  }
});

// node_modules/@edgio/core/errors/BackendFetchError.js
var require_BackendFetchError = __commonJS({
  "node_modules/@edgio/core/errors/BackendFetchError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var BackendFetchError = class extends Error {
      constructor(cause) {
        super(cause.message);
        this.type = "BackendFetchError";
        this.cause = cause;
      }
    };
    exports2.default = BackendFetchError;
  }
});

// node_modules/@edgio/core/runtime/random.js
var require_random = __commonJS({
  "node_modules/@edgio/core/runtime/random.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRandomInt = exports2.getRandomElement = void 0;
    function getRandomElement(source) {
      const index = getRandomInt(source.length);
      return source[index];
    }
    exports2.getRandomElement = getRandomElement;
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    exports2.getRandomInt = getRandomInt;
  }
});

// node_modules/@edgio/core/utils/mergeQueryString.js
var require_mergeQueryString = __commonJS({
  "node_modules/@edgio/core/utils/mergeQueryString.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var PLACEHOLDER_HOSTNAME = "__";
    function mergeQueryString(requestUrl, targetRedirectOrPath) {
      const requestSearchParams = new URL(requestUrl, `https://${PLACEHOLDER_HOSTNAME}`).searchParams;
      const targetUrl = new URL(targetRedirectOrPath, `https://${PLACEHOLDER_HOSTNAME}`);
      requestSearchParams.forEach((value, key) => {
        if (!targetUrl.searchParams.get(key)) {
          targetUrl.searchParams.set(key, value);
        }
      });
      return targetUrl.hostname === PLACEHOLDER_HOSTNAME ? `${targetUrl.pathname}${targetUrl.search}` : targetUrl.toString();
    }
    exports2.default = mergeQueryString;
  }
});

// node_modules/@edgio/core/errors/EdgioError.js
var require_EdgioError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEdgioErrorAsHtml = exports2.isEdgioError = exports2.EdgioError = void 0;
    var EdgioError = class extends Error {
      constructor({ title, message, statusCode, statusMessage, level, details, stack }) {
        super(`${title}: ${message}`);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage || title;
        this.title = title;
        this.message = message;
        this.level = level || 0;
        this.details = details;
        this.stack = stack || this.details || this.stack;
      }
      render(options = {}) {
        var _a;
        let values = {
          title: this.title,
          message: this.message,
          statusCode: this.statusCode,
          statusMessage: this.statusMessage,
          level: this.level,
          details: this.details
        };
        if (options === null || options === void 0 ? void 0 : options.requestId)
          values.requestId = options.requestId;
        if (options === null || options === void 0 ? void 0 : options.includeStack)
          values.stack = (_a = this.stack) === null || _a === void 0 ? void 0 : _a.split("\n");
        if (options.type === "json") {
          return JSON.stringify(values, null, 2);
        }
        return (0, exports2.getEdgioErrorAsHtml)(values);
      }
      getType() {
        return "EdgioError";
      }
    };
    exports2.EdgioError = EdgioError;
    var isEdgioError = (error) => {
      return error.getType && error.getType() === "EdgioError";
    };
    exports2.isEdgioError = isEdgioError;
    var getEdgioErrorAsHtml = (values) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>${values.title}</title>
  <style>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    :root {
      --primary-bg-color: #fff;
      --primary-fg--color: #000;
      --primary-path-color: rgba(0,0,0,0.15);
      --secondary-path-color: rgba(0,0,0,0.08);
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --primary-bg-color: #202020;
        --primary-fg--color: #fff;
        --primary-path-color: rgba(255,255,255,0.15);
        --secondary-path-color: rgba(255,255,255,0.08);
      }
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: "Inter", sans-serif;
      min-height: 90vh;
      text-align: center;
      font-weight: 300;
      line-height: 1.4;
      font-size: calc(14px + 0.25vw);
      overflow-x: hidden;
      overflow-y: auto;
      background: var(--primary-bg-color);
      color: var(--primary-fg--color);
    }
    h1 {
      font-size: 2em;
      font-weight: 500;
      margin: 0.75em 0;
    }
    p{
      margin: 0.8em 0;
    }
    a {
        color: #37a2e2;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .request-id, .error-details, .details {
        opacity: 0.7;
        margin: 0.25em 0 0 0;
        font-size: 0.9em;
    }
    .container{
      width: 100%;
      max-width: 45em;
      padding: 6em 2em 2em 2em;
      text-align: center;
      background: var(--primary-bg-color);
      box-sizing: border-box;
      position: relative;
      @media (max-width: 45em) {
        overflow: hidden;
      }
    }
    .container::before{
      content:'';
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);
      position: absolute;
      display: block;
      width:100vw;
      height:0.5em;
      background: linear-gradient(to left, rgba(0,0,0,0) 0%, var(--primary-path-color) 10%, var(--primary-path-color) 90%, rgba(0,0,0,0) 100%);
      z-index:-1;
    }
    .logo{
      display: block;
      margin: 2em auto 0 auto;
      height: 4.5em;
    }
    .sites-logo{
      display: block;
      position: sticky;
      margin: 2em auto 0 auto;
      height: 1.5em;
      color: var(--primary-path-color);
    }
    .cable svg{
      width: 6em;
      height: auto;
      position: absolute;
      top:50%;
      transform: translate(0, -50%);
      background: var(--primary-bg-color);
      color: var(--primary-path-color);
    }
    .cable .left-plug{
      left:-6em;
    }
    .cable .right-plug{
      right:-6em;
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap" rel="stylesheet">
</head>
<body>
  <div class="container">
    <!--  
    <svg class="sites-logo" xmlns="http://www.w3.org/2000/svg" width="318" height="96" viewBox="0 0 318 96" fill="none">
      <g clip-path="url(#clip0_842_606)"><path d="M215.333 87.9768L213.268 87.9746C205.172 87.8097 197.92 84.1178 192.96 78.345C192.746 78.0958 192.455 77.6247 192.507 76.9428C192.56 76.261 192.967 75.7465 193.22 75.5461L200.565 69.733C200.81 69.5389 201.334 69.2858 201.86 69.3162C202.416 69.3482 202.974 69.6752 203.175 69.8965C205.824 72.8077 209.568 74.647 213.568 74.647L215.333 74.6435C218.647 74.6435 221.333 71.9572 221.333 68.6435C221.333 65.3298 218.647 62.6435 215.333 62.6435H210.666C200.298 62.2809 192 53.7646 192 43.3102C192 32.6327 200.642 24.0001 211.32 24.0001H211.987C220.083 24.1649 227.464 27.8591 232.424 33.6319C232.638 33.8811 232.929 34.3522 232.876 35.034C232.824 35.7159 232.417 36.2304 232.164 36.4307L224.819 42.2438C224.574 42.4379 224.05 42.691 223.524 42.6607C222.968 42.6287 222.41 42.3017 222.209 42.0804C219.56 39.1691 215.816 37.3299 211.816 37.3299L210.879 37.3272C207.777 37.5593 205.333 40.1493 205.333 43.3102C205.333 46.6239 208.019 49.3102 211.333 49.3102H216C226.369 49.6735 234.666 58.1895 234.666 68.6435C234.666 79.321 226.011 87.9768 215.333 87.9768ZM23.3333 87.9768L21.2686 87.9746C13.1717 87.8097 5.9201 84.1178 0.960054 78.345C0.745895 78.0958 0.455309 77.6247 0.50771 76.9428C0.560111 76.261 0.967351 75.7465 1.22052 75.5461L8.56483 69.733C8.81007 69.5389 9.33408 69.2858 9.86037 69.3162C10.4165 69.3482 10.9743 69.6752 11.1756 69.8965C13.8238 72.8077 17.5682 74.647 21.5681 74.647L23.3333 74.6435C26.647 74.6435 29.3333 71.9572 29.3333 68.6435C29.3333 65.3298 26.647 62.6435 23.3333 62.6435H18.6666C8.2979 62.2809 0 53.7646 0 43.3102C0 32.6327 8.64271 24.0001 19.3202 24.0001H19.9869C28.0837 24.1649 35.4643 27.8591 40.4243 33.6319C40.6385 33.8811 40.929 34.3522 40.8766 35.034C40.8242 35.7159 40.417 36.2304 40.1638 36.4307L32.8195 42.2438C32.5743 42.4379 32.0503 42.691 31.524 42.6607C30.9679 42.6287 30.41 42.3017 30.2087 42.0804C27.5605 39.1691 23.8162 37.3299 19.8162 37.3299L18.879 37.3272C15.7775 37.5593 13.3333 40.1493 13.3333 43.3102C13.3333 46.6239 16.0196 49.3102 19.3333 49.3102H24C34.3694 49.6735 42.6666 58.1895 42.6666 68.6435C42.6666 79.321 34.0108 87.9768 23.3333 87.9768ZM62.1113 21.7501C62.9858 21.0752 64.2417 21.237 64.9166 22.1115C65.1867 22.4615 65.3333 22.8912 65.3333 23.3334V85.3333C65.3333 86.8061 64.1394 88 62.6666 88H54.6666C53.1938 88 51.9999 86.8061 51.9999 85.3333V30.8639C51.9999 30.0375 52.3831 29.2577 53.0374 28.7528L62.1113 21.7501ZM62.6666 2.66676C64.1394 2.66676 65.3333 3.86067 65.3333 5.33342V13.3334C65.3333 14.8062 64.1394 16.0001 62.6666 16.0001H54.6666C53.1938 16.0001 51.9999 14.8062 51.9999 13.3334V5.33342C51.9999 3.86067 53.1938 2.66676 54.6666 2.66676H62.6666ZM152 24.0001C169.673 24.0001 184 38.3269 184 56L183.993 56.6509L184 56.7544V58.935C184 60.2605 182.925 61.335 181.6 61.335L160.442 61.3495L134.384 61.3364C133.6 61.335 133.6 62.135 133.904 62.9684C136.613 70.3853 143.653 74.6667 152 74.6667C153.443 74.6667 154.849 74.5679 156.201 74.3463C160.194 73.5214 163.652 71.4885 166.266 68.6925L166.48 68.457C166.889 68.0624 167.323 67.8534 167.782 67.8299C168.515 67.7923 168.931 68.0926 169.091 68.2077L176.446 73.5072C176.793 73.7574 177.135 74.2112 177.213 74.6667C177.331 75.3496 177.188 75.9277 176.784 76.4009C172.117 82.0583 165.519 86.1355 157.77 87.5019C156.561 87.7149 155.357 87.8565 154.16 87.9296L153.732 87.9539C153.158 87.9845 152.581 88 152 88C134.327 88 120 73.6731 120 56C120 38.3269 134.327 24.0001 152 24.0001ZM91.5832 0.778181C91.8534 1.12823 91.9999 1.55793 91.9999 2.00009V23.9774L119.333 23.9769C119.766 23.9769 120.187 24.1173 120.533 24.3769C121.417 25.0396 121.596 26.2932 120.933 27.1769L115.667 36.6436C115.289 37.1472 114.696 37.4435 114.066 37.4435L91.9999 37.3227V67.9768C91.9999 71.5618 94.8296 74.4859 98.3774 74.6373L98.6666 74.6435H108C109.473 74.6435 110.667 75.8374 110.667 77.3102V85.3102C110.667 86.7829 109.473 87.9768 108 87.9768H98.6666C87.8521 87.9768 79.0424 79.3935 78.6783 68.6677L78.6666 9.5306C78.6666 8.70416 79.0498 7.92442 79.704 7.4195L88.778 0.41677C89.6524 -0.258074 90.9084 -0.096265 91.5832 0.778181ZM152 37.3334C145.383 37.3334 139.588 40.8475 136.377 46.1112L136.158 46.4812C135.315 47.8735 135.885 47.9895 136.572 47.9992H167.427C168.084 47.9899 168.633 47.8837 167.948 46.6626L167.842 46.4805C164.681 41.0125 158.77 37.3334 152 37.3334ZM264 26.6667L264 45.3334C254.732 43.2306 247.437 35.9354 245.333 26.6678L264 26.6667ZM272 26.6667L272 45.3334C281.268 43.2306 288.563 35.9354 290.667 26.6678L272 26.6667ZM264 0.000371257L263.999 18.6667L245.333 18.667C247.436 9.39898 254.732 2.10322 264 0.000371257ZM288 9.72848e-05C289.472 9.72848e-05 290.666 1.194 290.666 2.66676V18.6667H272V9.72848e-05H288Z" fill="currentColor"/></g><defs><clipPath id="clip0_842_606"><rect width="317.091" height="96" fill="currentColor"/></clipPath></defs>
    </svg>
    -->
    <div class="content">
      <h1>${values.title}</h1>
      <p>This website is having some trouble presenting content. Please try again later.</p>
      <p>${values.message}</p>
      ${values.details ? `<div class="details">Details: ${values.details}</div>` : ""}
      ${values.requestId ? `<div class="request-id">Request ID: ${values.requestId}</div>` : ""}
      <div class="error-details">
        Error Code: ${values.statusCode} | Error Level: ${values.level}
      </div>
      <svg class="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1857.6 770.5" xml:space="preserve" height="100" fill="none">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stop-color="#80288e" />
            <stop offset="50%" stop-color="#128fb2" />
            <stop offset="100%" stop-color="#00ac75" />
          </linearGradient>
        </defs>
        <g>
          <path style="fill:url(#gradient)" d="M391.2,122.6l58.5-106.1H0v580.3h384.7l-58.5-106.1H115.6V357.3h202l32.5-106.2H115.6V122.6H391.2z    M670.7,94.8v142.3c-19.8-23.7-45.7-41.4-80.4-48.9c-12.4-2.5-25-3.8-37.7-3.8c-111.1,0-194.4,90.8-194.4,211.4   c0,7.9,0.4,15.7,1.1,23.4c9.9,108.8,89.5,187.9,193.2,187.9c55.1,0,93.7-21.9,120.2-54.7v44.4h105.7V0L670.7,94.8z M572.5,506.5   c-63.4,0-103.6-49.3-103.6-110.7s40.2-110.7,103.6-110.7c61.8,0,103.7,47.3,103.7,110.7S634.3,506.5,572.5,506.5z M1128.5,195.2   v44.8c-27.8-34.4-68-55.5-124.3-55.5c-97.8,0-184.9,81.6-184.9,205.2c0,123.1,87.1,204.7,184.9,204.7c4.1,0,8.1-0.1,12-0.4h13.1   c49.7-2.7,72.7-22.8,98.5-53.8v28.2c0,69.7-47.3,106.5-114.4,106.5c-23,0.1-45.8-3.3-67.8-10.1L871.1,739   c42.5,20.8,95.7,31.5,146.7,31.5c132.6,0,216.8-77.5,216.8-206.8V195.2L1128.5,195.2z M1031.5,494.9   c-61.7,0-101.1-47.3-101.1-105.3c0-58.5,39.4-105.7,101.1-105.7c60.1,0,100.8,45.6,100.8,105.7   C1132.3,449.2,1091.6,494.9,1031.5,494.9L1031.5,494.9z M1280.7,290.4v306.4h108.2V195.2L1280.7,290.4z M1640,184.4   c-124.8,0-216.8,90.4-216.8,211.4s92,211.4,216.8,211.4c125.2,0,217.6-90.4,217.6-211.4S1765.2,184.4,1640,184.4L1640,184.4z    M1640,506.4c-60.9,0-106.6-45.6-106.6-110.7s45.6-110.6,106.6-110.6c61.3,0,106.9,45.6,106.9,110.7S1701.3,506.5,1640,506.4   L1640,506.4z M1388.9,168.6h-108.2V60.5h108.2V168.6z"/>
        </g>
      </svg>
      <div class="cable">
        <svg class="left-plug" width="75" height="50" viewBox="0 0 75 50" xmlns="http://www.w3.org/2000/svg" fill="none">
          <defs>
            <clipPath id="clip0_1_10">
              <rect id="svg_1" fill="white" height="49" width="864"/>
            </clipPath>
          </defs>
          <g>
            <title>Layer 1</title>
            <path id="svg_3" fill="currentColor" d="m15.48622,35.72007l-10.75293,0c-1.23267,0 -2.41468,-0.5752 -3.28684,-1.5991c-0.87131,-1.0239 -1.361,-2.4126 -1.361,-3.8607l0,-9.6756c0,-0.7889 0.14691,-1.5683 0.4289,-2.2843c0.28115,-0.716 0.69232,-1.3515 1.20396,-1.8623l0,0c0.84007,-0.8436 1.90979,-1.3064 3.01498,-1.3049l10.75293,0l0,20.5869z"/>
            <path id="svg_4" fill="currentColor" d="m48.01045,46.48487l-25.437,0c-0.934,0 -1.859,-0.1825 -2.722,-0.5372c-0.863,-0.3548 -1.647,-0.8747 -2.308,-1.5301c-0.66,-0.6554 -1.184,-1.4334 -1.542,-2.2897c-0.357,-0.8562 -0.54,-1.7739 -0.54,-2.7006l0,-28.004c0,-0.92653 0.183,-1.84408 0.541,-2.70018c0.357,-0.85611 0.881,-1.63398 1.541,-2.28916c0.661,-0.65518 1.445,-1.17482 2.308,-1.52923c0.863,-0.35442 1.788,-0.53665 2.722,-0.53629l25.437,0l0,42.11646z"/>
            <path id="svg_5" fill="currentColor" d="m48.01245,2.59915l0,45.63842c0,0.9283 0.759,1.6808 1.695,1.6808l2.213,0c0.936,0 1.694,-0.7525 1.694,-1.6808l0,-45.63842c0,-0.92827 -0.758,-1.68078 -1.694,-1.68078l-2.213,0c-0.936,0 -1.695,0.75251 -1.695,1.68078z"/>
            <path id="svg_6" fill="currentColor" d="m53.61145,19.09747l0,-7.1876l17.313,0c0.961,0 1.882,0.3786 2.562,1.0526c0.679,0.6739 1.061,1.588 1.061,2.5412l0,0c0,0.9531 -0.382,1.8672 -1.061,2.5412c-0.68,0.6739 -1.601,1.0526 -2.562,1.0526l-17.313,0z"/>
            <path id="svg_7" fill="currentColor" d="m74.54445,35.33037c0,0.9531 -0.382,1.8672 -1.061,2.5411c-0.679,0.674 -1.601,1.0526 -2.562,1.0526l-17.298,0l0,-7.1875l17.301,0c0.96,0.0007 1.881,0.3796 2.56,1.0535c0.679,0.6739 1.06,1.5876 1.06,2.5403z"/>
            <path id="svg_8" fill="currentColor" d="m48.01045,46.48487l-25.437,0c-0.934,0 -1.859,-0.1825 -2.722,-0.5372c-0.863,-0.3548 -1.647,-0.8747 -2.308,-1.5301c-0.66,-0.6554 -1.184,-1.4334 -1.542,-2.2897c-0.357,-0.8562 -0.54,-1.7739 -0.54,-2.7006l0,-28.004c0,-0.92653 0.183,-1.84408 0.541,-2.70018c0.357,-0.85611 0.881,-1.63398 1.541,-2.28916c0.661,-0.65518 1.445,-1.17482 2.308,-1.52923c0.863,-0.35442 1.788,-0.53665 2.722,-0.53629c2.118,30.25146 25.437,33.02976 25.437,33.02976l0,9.0867z"/>
            <path id="svg_9" fill="currentColor" d="m37.25845,46.48487l-14.685,0c-0.934,0 -1.859,-0.1825 -2.722,-0.5372c-0.863,-0.3548 -1.647,-0.8747 -2.308,-1.5301c-0.66,-0.6554 -1.184,-1.4334 -1.542,-2.2897c-0.357,-0.8562 -0.54,-1.7739 -0.54,-2.7006l0,-19.6691c0,19.8626 21.797,26.7267 21.797,26.7267z"/>
            <path id="svg_10" fill="currentColor" d="m15.46145,35.72007l-9.871,0c-1.46,0 -2.86,-0.5752 -3.893,-1.5991c-1.032,-1.0239 -1.612,-2.4126 -1.612,-3.8607l0,-9.6756c0,-0.7889 0.174,-1.5683 0.508,-2.2843c0.333,-0.716 0.82,-1.3515 1.426,-1.8623l0,0c-1.867,15.0939 13.442,17.3995 13.442,17.3995l0,1.8825z"/>
          </g>
        </svg>
        <svg class="right-plug" width="75" height="50" viewBox="0 0 75 50" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <clipPath id="clip0_1_10">
            <rect width="864" height="49" fill="white" id="svg_1"/>
          </clipPath>
        </defs>
        <g>
          <title>Layer 2</title>
          <path fill="currentColor" d="m59.50468,35.73201l10.73944,0c0.60975,0.0004 1.21361,-0.1405 1.77697,-0.4148c0.56337,-0.2742 1.07529,-0.6763 1.5071,-1.1833c0.43096,-0.507 0.77337,-1.109 1.00698,-1.7716c0.23277,-0.6626 0.35337,-1.3728 0.35337,-2.0901l0,-9.6756c-0.00084,-0.7888 -0.14675,-1.5681 -0.42843,-2.284c-0.28168,-0.7159 -0.6924,-1.3514 -1.20264,-1.8626l0,0c-0.83915,-0.8444 -1.90685,-1.3074 -3.01082,-1.3049l-10.73944,0l-0.00253,20.5869z" id="svg_3"/>
          <path fill="currentColor" d="m26.96155,46.49681l25.439,0c1.887,-0.0007 3.696,-0.7446 5.029,-2.0681c1.334,-1.3235 2.083,-3.1182 2.083,-4.9895l0,-28.004c0,-1.87104 -0.749,-3.66548 -2.083,-4.98853c-1.334,-1.32305 -3.143,-2.06633 -5.029,-2.06633l-25.439,0l0,42.11646z" id="svg_4"/>
          <path fill="currentColor" d="m21.36255,2.61109l0,45.63842c0,0.9283 0.758,1.6808 1.694,1.6808l2.213,0c0.936,0 1.695,-0.7525 1.695,-1.6808l0,-45.63842c0,-0.92827 -0.759,-1.68077 -1.695,-1.68077l-2.213,0c-0.936,0 -1.694,0.7525 -1.694,1.68077z" id="svg_5"/>
          <path fill="currentColor" d="m37.71355,46.49681l14.687,0c1.887,-0.0007 3.696,-0.7446 5.029,-2.0681c1.334,-1.3235 2.083,-3.1182 2.083,-4.9895l0,-19.6691c0,19.8626 -21.799,26.7267 -21.799,26.7267z" id="svg_6"/>
          <path fill="currentColor" d="m59.51255,35.73201l9.869,0c0.723,0.0004 1.439,-0.1405 2.107,-0.4148c0.668,-0.2742 1.275,-0.6763 1.787,-1.1833c0.511,-0.507 0.917,-1.109 1.194,-1.7716c0.276,-0.6626 0.419,-1.3728 0.419,-2.0901l0,-9.6756c-0.001,-0.7888 -0.174,-1.5681 -0.508,-2.284c-0.334,-0.7159 -0.821,-1.3514 -1.426,-1.8626l0,0c1.867,15.0939 -13.439,17.3995 -13.439,17.3995l-0.003,1.8825z" id="svg_7"/>
        </g>
        </svg>
      </div>
    </div>
  </div>
</body>
</html>`;
    exports2.getEdgioErrorAsHtml = getEdgioErrorAsHtml;
  }
});

// node_modules/@edgio/core/errors/edgioErrorLinks.js
var require_edgioErrorLinks = __commonJS({
  "node_modules/@edgio/core/errors/edgioErrorLinks.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.limitsLink = exports2.jsPerformanceProfilingLink = exports2.serverLogsLink = exports2.supportLink = void 0;
    exports2.supportLink = '<a href="https://edg.io/contact-support">support</a>';
    exports2.serverLogsLink = '<a href="https://docs.edg.io/guides/v7/logs/server_logs">server logs</a>';
    exports2.jsPerformanceProfilingLink = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance">JS performance profiling</a>';
    exports2.limitsLink = '<a href="https://docs.edg.io/guides/v7/performance/limits">limits</a>';
  }
});

// node_modules/@edgio/core/errors/EdgioHeadersOverflowError.js
var require_EdgioHeadersOverflowError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioHeadersOverflowError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioHeadersOverflowError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioHeadersOverflowError = class extends EdgioError_1.EdgioError {
      constructor(details = "HPE_HEADER_OVERFLOW", stack) {
        super({
          statusCode: 542,
          title: "Edgio Headers Overflow",
          message: `The project's cloud function returned HTTP response headers with an overall size greater than 80KB or single header with value greater than 32KB. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug and decrease the response headers size. See: ${edgioErrorLinks_1.limitsLink}`,
          level: 1,
          details,
          stack
        });
      }
    };
    exports2.EdgioHeadersOverflowError = EdgioHeadersOverflowError;
  }
});

// node_modules/@edgio/core/errors/EdgioInternalError.js
var require_EdgioInternalError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioInternalError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioInternalError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioInternalError = class extends EdgioError_1.EdgioError {
      constructor(details, stack, code) {
        super({
          statusCode: 530,
          title: "Edgio Internal Error",
          message: `Unexpected error in one of Edgio's cloud function components. If you are the website administrator, please contact the ${edgioErrorLinks_1.supportLink} immediately.`,
          level: 1,
          details,
          stack
        });
      }
    };
    exports2.EdgioInternalError = EdgioInternalError;
  }
});

// node_modules/@edgio/core/errors/EdgioNoResponseError.js
var require_EdgioNoResponseError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioNoResponseError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioNoResponseError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioNoResponseError = class extends EdgioError_1.EdgioError {
      constructor(details) {
        super({
          statusCode: 536,
          title: "Edgio Project No HTTP Response",
          message: `The project's cloud function returned no response. Common causes are the upstream dropped the connection prematurely, and the upstream took too long to respond. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug.`,
          level: 2,
          details
        });
      }
    };
    exports2.EdgioNoResponseError = EdgioNoResponseError;
  }
});

// node_modules/@edgio/core/errors/EdgioNotReadyError.js
var require_EdgioNotReadyError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioNotReadyError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioNotReadyError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioNotReadyError = class extends EdgioError_1.EdgioError {
      constructor(details) {
        super({
          statusCode: 545,
          title: "Edgio Not Ready",
          message: `One or more Edgio cloud function components are still not ready to receive traffic. Please try it again after a few seconds. If this problem persists, contact the ${edgioErrorLinks_1.supportLink}.`,
          level: 1,
          details
        });
      }
    };
    exports2.EdgioNotReadyError = EdgioNotReadyError;
  }
});

// node_modules/@edgio/core/errors/EdgioProjectError.js
var require_EdgioProjectError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioProjectError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioProjectError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioProjectError = class extends EdgioError_1.EdgioError {
      constructor(details, stack) {
        super({
          statusCode: 534,
          title: "Edgio Project Error",
          message: `The project's cloud function has failed unexpectedly because of uncaught exception somewhere in the user's code or has issued a malformed response. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug.`,
          level: 2,
          details,
          stack
        });
      }
    };
    exports2.EdgioProjectError = EdgioProjectError;
  }
});

// node_modules/@edgio/core/errors/EdgioProjectCrashedError.js
var require_EdgioProjectCrashedError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioProjectCrashedError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioProjectCrashedError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioProjectCrashedError = class extends EdgioError_1.EdgioError {
      constructor(details, stack) {
        super({
          statusCode: 549,
          title: "Edgio Project Crashed",
          message: `The project's cloud function crashed unexpectedly because of fatal error in project's code or undesired process.exit call somewhere in the third party code. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug this issue.`,
          level: 1,
          details,
          stack
        });
      }
    };
    exports2.EdgioProjectCrashedError = EdgioProjectCrashedError;
  }
});

// node_modules/@edgio/core/errors/EdgioOutOfResourcesError.js
var require_EdgioOutOfResourcesError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioOutOfResourcesError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioOutOfResourcesError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioOutOfResourcesError = class extends EdgioError_1.EdgioError {
      constructor(details) {
        super({
          statusCode: 540,
          title: "Edgio Project Out Of Resources",
          message: `The project's cloud function crashed because of an out-of-memory situation. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug and lower the resources usage.`,
          level: 1,
          details
        });
      }
    };
    exports2.EdgioOutOfResourcesError = EdgioOutOfResourcesError;
  }
});

// node_modules/@edgio/core/errors/EdgioProjectTimeoutError.js
var require_EdgioProjectTimeoutError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioProjectTimeoutError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioProjectTimeoutError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioProjectTimeoutError = class extends EdgioError_1.EdgioError {
      constructor(details) {
        super({
          statusCode: 539,
          title: "Edgio Project Timeout",
          message: `The project's cloud function did not respond on time, either due to slow upstreams, loops or badly handled asynchronous requests in code (e.g. missing "await" or call to "callback"). If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} and ${edgioErrorLinks_1.jsPerformanceProfilingLink} to debug.`,
          level: 1,
          details
        });
      }
    };
    exports2.EdgioProjectTimeoutError = EdgioProjectTimeoutError;
  }
});

// node_modules/@edgio/core/errors/EdgioResponseTooLargeError.js
var require_EdgioResponseTooLargeError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioResponseTooLargeError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioResponseTooLargeError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioResponseTooLargeError = class extends EdgioError_1.EdgioError {
      constructor(details) {
        super({
          statusCode: 532,
          title: "Edgio Project Response Too Large",
          message: `The project's cloud function returned a response with body size greater than the allowed 6MB uncompressed. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug and lower the response size. See: ${edgioErrorLinks_1.limitsLink}`,
          level: 1,
          details
        });
      }
    };
    exports2.EdgioResponseTooLargeError = EdgioResponseTooLargeError;
  }
});

// node_modules/@edgio/core/errors/EdgioUpstreamOriginTimeoutError.js
var require_EdgioUpstreamOriginTimeoutError = __commonJS({
  "node_modules/@edgio/core/errors/EdgioUpstreamOriginTimeoutError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EdgioUpstreamOriginTimeoutError = void 0;
    var EdgioError_1 = require_EdgioError();
    var edgioErrorLinks_1 = require_edgioErrorLinks();
    var EdgioUpstreamOriginTimeoutError = class extends EdgioError_1.EdgioError {
      constructor(details, stack) {
        super({
          statusCode: 531,
          title: "Edgio Upstream Origin Timeout",
          message: `The project's cloud function timed out while establishing connection with your upstream origin server. If you are the website administrator, please use ${edgioErrorLinks_1.serverLogsLink} to debug.`,
          level: 2,
          details,
          stack
        });
      }
    };
    exports2.EdgioUpstreamOriginTimeoutError = EdgioUpstreamOriginTimeoutError;
  }
});

// node_modules/@edgio/core/errors/index.js
var require_errors = __commonJS({
  "node_modules/@edgio/core/errors/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_EdgioError(), exports2);
    __exportStar(require_EdgioHeadersOverflowError(), exports2);
    __exportStar(require_EdgioInternalError(), exports2);
    __exportStar(require_EdgioNoResponseError(), exports2);
    __exportStar(require_EdgioNotReadyError(), exports2);
    __exportStar(require_EdgioProjectError(), exports2);
    __exportStar(require_EdgioProjectCrashedError(), exports2);
    __exportStar(require_EdgioOutOfResourcesError(), exports2);
    __exportStar(require_EdgioProjectTimeoutError(), exports2);
    __exportStar(require_EdgioResponseTooLargeError(), exports2);
    __exportStar(require_EdgioUpstreamOriginTimeoutError(), exports2);
  }
});

// node_modules/@edgio/core/runtime/Backend.js
var require_Backend = __commonJS({
  "node_modules/@edgio/core/runtime/Backend.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var url_1 = require("url");
    var http_1 = __importDefault2(require("http"));
    var https_1 = __importDefault2(require("https"));
    var BackendFetchError_1 = __importDefault2(require_BackendFetchError());
    var constants_1 = require_constants();
    var random_1 = require_random();
    var log_1 = __importDefault2(require_log());
    var bindParams_1 = __importDefault2(require_bindParams());
    var mergeQueryString_1 = __importDefault2(require_mergeQueryString());
    var net_1 = require("net");
    var errors_1 = require_errors();
    var IGNORE_RESPONSE_HEADERS = ["transfer-encoding", "content-length"];
    var Backend = class {
      static setImpl(implementation) {
        impl = implementation;
      }
      static create(config, origin) {
        return new impl(config, origin);
      }
      constructor(config, origin) {
        this.config = config;
        this.origin = origin;
        this.hostHeader = origin.override_host_header;
      }
      async fetch(req, res, options = {}) {
        const url = this.getProxyTarget(req);
        const requestOptions = this.getProxyRequestOptions(url, req, options);
        log_1.default.debug("[Backend]", "fetch", requestOptions);
        return new Promise((resolve, reject) => {
          const lib = url.protocol === "https:" ? https_1.default : http_1.default;
          let metadataApplied = false;
          const upstreamReq = lib.request(requestOptions, (upstreamRes) => {
            const processMetadata = () => {
              if (!metadataApplied) {
                metadataApplied = true;
                Object.entries(upstreamRes.headers).filter(([name]) => !IGNORE_RESPONSE_HEADERS.includes(name.toLowerCase())).forEach(([name, value]) => {
                  try {
                    res.setHeader(name, value);
                  } catch (e) {
                    log_1.default.warn(`Could not relay upstream response header ${name} with value ${value}`, e);
                  }
                });
                res.statusCode = upstreamRes.statusCode;
                res.statusMessage = upstreamRes.statusMessage;
                log_1.default.debug("proxy", `[${res.statusCode} ${res.statusMessage}]`, url);
              }
            };
            upstreamRes.on("data", async (chunk) => {
              try {
                processMetadata();
                await res.write(chunk);
              } catch (e) {
                reject(e);
                upstreamRes.destroy();
              }
            }).on("end", async () => {
              try {
                if (upstreamRes.complete) {
                  processMetadata();
                  await res.end();
                  await res.waitForFlush();
                  resolve();
                }
              } catch (e) {
                reject(e);
                upstreamRes.destroy();
              }
            }).on(
              "error",
              (e) => {
                reject(new BackendFetchError_1.default(e));
              }
            ).on(
              "close",
              () => {
                if (!upstreamRes.complete) {
                  reject(new BackendFetchError_1.default(new Error("The connection was terminated while the message was still being sent")));
                }
              }
            );
          });
          upstreamReq.on("error", (e) => {
            if (e.code === "HPE_HEADER_OVERFLOW") {
              return reject(new errors_1.EdgioHeadersOverflowError(`Upstream origin '${this.origin.name}' headers overflow`));
            }
            reject(new BackendFetchError_1.default(e));
          });
          upstreamReq.end(req.rawBody);
        });
      }
      getProxyTarget(req) {
        let location;
        if (Array.isArray(this.config.location)) {
          location = (0, random_1.getRandomElement)(this.config.location);
        } else {
          location = this.config.location;
        }
        if (typeof location === "string") {
          location = { hostname: location };
        }
        const { hostname, port } = location;
        const protocol = hostname.match(/^(127.0.0.1|localhost)(:\d+)?$/) ? "http" : "https";
        let scheme = this.config.scheme || "match";
        if (!["match", "http", "https"].includes(scheme)) {
          throw new Error(`Fetch failed: request.fetchOrigin.hosts[].scheme must be one of 'match', 'http', 'https'`);
        }
        if (scheme === "match") {
          scheme = protocol === "https" ? "https" : "http";
        }
        const host = `${hostname}${port ? `:${port}` : ""}`;
        const parsed = (0, url_1.parse)(`${scheme}://${host}${req.url}`, true);
        if (req.getHeader(constants_1.HTTP_HEADERS.xEdgeProtocol) === "http") {
          parsed.protocol = "http:";
        }
        return parsed;
      }
      isLocal(url) {
        return url.hostname === constants_1.JS_BACKEND_HOSTNAME;
      }
      getProxyRequestOptions(originUrl, req, options = {}) {
        var _a, _b, _c;
        let agent = null;
        if (((_a = this.origin.tls_verify) === null || _a === void 0 ? void 0 : _a.allow_self_signed_certs) && originUrl.protocol === "https:") {
          agent = new https_1.default.Agent({ rejectUnauthorized: false });
        }
        let pathWithQuery = (_b = originUrl.path) !== null && _b !== void 0 ? _b : "/";
        if (options === null || options === void 0 ? void 0 : options.path) {
          const updatedPathWithQuery = (0, bindParams_1.default)(typeof options.path === "function" ? options.path() || "" : options.path, req.params);
          pathWithQuery = (0, mergeQueryString_1.default)(pathWithQuery !== null && pathWithQuery !== void 0 ? pathWithQuery : "", updatedPathWithQuery);
        }
        if ((options === null || options === void 0 ? void 0 : options.removeEmptySearchParamValues) && originUrl.path) {
          pathWithQuery = pathWithQuery === null || pathWithQuery === void 0 ? void 0 : pathWithQuery.replace(/=(?=&|$)/gm, "");
        }
        const upstreamHeaders = {
          ...req.headers,
          ...(_c = options === null || options === void 0 ? void 0 : options.headers) !== null && _c !== void 0 ? _c : {},
          host: this.hostHeader || (!(0, net_1.isIP)(originUrl.hostname) ? originUrl.host : void 0) || req.headers["host"]
        };
        if (this.isLocal(originUrl)) {
          upstreamHeaders["x-forwarded-proto"] = req.secure ? "https" : "http";
        }
        return {
          ...originUrl,
          path: pathWithQuery,
          method: req.method,
          timeout: this.config.firstByteTimeout || 0,
          agent,
          body: req.rawBody,
          headers: upstreamHeaders
        };
      }
    };
    exports2.default = Backend;
    var impl = Backend;
  }
});

// node_modules/@edgio/core/runtime/Origin.js
var require_Origin = __commonJS({
  "node_modules/@edgio/core/runtime/Origin.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var log_1 = __importDefault2(require_log());
    var Backend_1 = __importDefault2(require_Backend());
    var random_1 = require_random();
    var Origin = class {
      constructor(config) {
        this.config = config;
      }
      async fetch(request, response, options = {}) {
        const hostConfig = this.selectHost();
        const host = Backend_1.default.create(hostConfig, this.config);
        return host.fetch(request, response, options);
      }
      selectHost() {
        const { balancer } = this.config;
        if ("static_weighted" === balancer) {
          return this.config.hosts[0];
        } else if ("round_robin" === balancer) {
          return (0, random_1.getRandomElement)(this.config.hosts);
        } else {
          if (balancer) {
            log_1.default.warn(`balancer type "${balancer}" is not supported during local development, falling back to "static_weighted".`);
          }
          return this.config.hosts[0];
        }
      }
    };
    exports2.default = Origin;
  }
});

// node_modules/@edgio/core/runtime/OriginFetcher.js
var require_OriginFetcher = __commonJS({
  "node_modules/@edgio/core/runtime/OriginFetcher.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Origin_1 = __importDefault2(require_Origin());
    var constants_1 = require_constants();
    var BackendFetchError_1 = __importDefault2(require_BackendFetchError());
    var errors_1 = require_errors();
    var log_1 = __importDefault2(require_log());
    var OriginFetcher = class {
      constructor(propertyContext) {
        this.propertyContext = propertyContext;
      }
      async fetch(req, res, options, providedOriginName) {
        options = options || {};
        const originName = providedOriginName || this.propertyContext.getDefaultOrigin(req);
        const originConfig = this.propertyContext.getOrigin(originName);
        if (!originConfig) {
          throw new errors_1.EdgioProjectError(`Upstream origin '${originName}' doesn't exist.`);
        }
        try {
          await new Origin_1.default(originConfig).fetch(req, res, options);
        } catch (e) {
          if (e instanceof BackendFetchError_1.default) {
            log_1.default.error(`[OriginFetcher] Upstream origin '${originName}' fetch failed: ${e.message}`);
            return convertBackendErrorToResponse(e, res);
          }
          throw e;
        }
        if (res.statusCode === 416 && options.ignoreUnsatisfiableRanges) {
          req.removeHeader(constants_1.HTTP_HEADERS.range);
          res.clear();
          return this.fetch(req, res, options);
        }
      }
      removeSensitiveHeaders(req) {
        req.removeHeader("authorization");
        req.removeHeader("cookie");
      }
    };
    exports2.default = OriginFetcher;
    function convertBackendErrorToResponse(e, res) {
      var _a;
      res.clear();
      res.clearHeaders();
      res.setHeader(constants_1.HTTP_HEADERS.xEdgServerlessError, e.message);
      if (((_a = e.cause) === null || _a === void 0 ? void 0 : _a.code) === "ETIMEDOUT") {
        res.statusCode = 504;
        res.statusMessage = "Gateway Timeout";
        res.body = "504 - Gateway Timeout";
        return;
      }
      res.statusCode = 502;
      res.statusMessage = "Bad Gateway";
      res.body = "502 - Bad Gateway";
    }
  }
});

// node_modules/@edgio/core/utils/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/@edgio/core/utils/isEmpty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function isEmpty(value) {
      if (!value) {
        return true;
      }
      if (typeof value.length === "number") {
        return !value.length;
      }
      if (typeof value === "object" && Object.keys(value).length) {
        return false;
      }
      return true;
    }
    exports2.default = isEmpty;
  }
});

// node_modules/@edgio/core/utils/universalRouteUtils.js
var require_universalRouteUtils = __commonJS({
  "node_modules/@edgio/core/utils/universalRouteUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.paramMatcherToParam = exports2.isParamMatcher = void 0;
    function isParamMatcher(value) {
      return typeof value === "string" && /^:\w+$/.test(value);
    }
    exports2.isParamMatcher = isParamMatcher;
    function paramMatcherToParam(value) {
      return value.slice(1);
    }
    exports2.paramMatcherToParam = paramMatcherToParam;
  }
});

// node_modules/@edgio/core/router/ParamsExtractor.js
var require_ParamsExtractor = __commonJS({
  "node_modules/@edgio/core/router/ParamsExtractor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var RouteCriteria_1 = require_RouteCriteria();
    var path_to_regexp_1 = require_dist();
    var universalRouteUtils_1 = require_universalRouteUtils();
    var ParamsExtractor = class {
      constructor(routeCriteria) {
        this.routeCriteria = {};
        this.updateRouteCriteria(routeCriteria);
      }
      updateRouteCriteria(routeCriteria) {
        this.routeCriteria = {
          path: routeCriteria === null || routeCriteria === void 0 ? void 0 : routeCriteria.path,
          query: routeCriteria === null || routeCriteria === void 0 ? void 0 : routeCriteria.query
        };
      }
      extract(request) {
        var _a, _b;
        return {
          ...((_a = this.routeCriteria) === null || _a === void 0 ? void 0 : _a.path) && !(0, RouteCriteria_1.isNegation)(this.routeCriteria.path) ? ParamsExtractor.getMatchedPathParams(this.routeCriteria.path, request.path) : {},
          ...((_b = this.routeCriteria) === null || _b === void 0 ? void 0 : _b.query) ? ParamsExtractor.getMatchedQueryParams(this.routeCriteria.query, request.query) : {}
        };
      }
      static getMatchedPathParams(criteriaPath, requestPath) {
        if (criteriaPath instanceof RegExp)
          return {
            $: criteriaPath.exec(requestPath) || []
          };
        if (Array.isArray(criteriaPath))
          return void 0;
        const pathMatcher = (0, path_to_regexp_1.match)(criteriaPath.toString(), { decode: decodeURIComponent });
        const result = pathMatcher(requestPath);
        return result ? result.params : void 0;
      }
      static getMatchedQueryParams(criteriaQuery, requestQuery) {
        let extractedParams = {};
        if (typeof requestQuery !== "object")
          return extractedParams;
        for (const criteriaQueryKey in criteriaQuery) {
          const criteriaQueryValue = criteriaQuery[criteriaQueryKey];
          if (typeof criteriaQueryValue !== "string" || !(0, universalRouteUtils_1.isParamMatcher)(criteriaQueryValue))
            continue;
          const paramName = (0, universalRouteUtils_1.paramMatcherToParam)(criteriaQueryValue);
          extractedParams = {
            ...extractedParams,
            [paramName]: requestQuery[paramName]
          };
        }
        return extractedParams;
      }
    };
    exports2.default = ParamsExtractor;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports2, module2) {
    module2.exports = require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports2, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "node_modules/side-channel-list/index.js"(exports2, module2) {
    "use strict";
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = {
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    };
    var listDelete = function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    };
    module2.exports = function getSideChannelList() {
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          var root = $o && $o.next;
          var deletedNode = listDelete($o, key);
          if (deletedNode && root && root === deletedNode) {
            $o = void 0;
          }
          return !!deletedNode;
        },
        get: function(key) {
          return listGet($o, key);
        },
        has: function(key) {
          return listHas($o, key);
        },
        set: function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet($o, key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports2, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports2, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports2, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports2, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports2, module2) {
    "use strict";
    module2.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports2, module2) {
    "use strict";
    var $isNaN = require_isNaN();
    module2.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports2, module2) {
    "use strict";
    module2.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports2, module2) {
    "use strict";
    var $Object = require_es_object_atoms();
    module2.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports2, module2) {
    "use strict";
    module2.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports2, module2) {
    "use strict";
    module2.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module2.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module2.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports2, module2) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__");
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module2.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    } : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports2, module2) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module2.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic([intrinsic]);
      }
      return intrinsic;
    };
  }
});

// node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "node_modules/side-channel-map/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module2.exports = !!$Map && function getSideChannelMap() {
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        },
        get: function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        },
        has: function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        },
        set: function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "node_modules/side-channel-weakmap/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module2.exports = $WeakMap ? function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key);
            }
          }
          return false;
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          }
          return $m && $m.get(key);
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          }
          return !!$m && $m.has(key);
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key, value);
          }
        }
      };
      return channel;
    } : getSideChannelMap;
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports2, module2) {
    "use strict";
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module2.exports = function getSideChannel() {
      var $channelData;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          return !!$channelData && $channelData["delete"](key);
        },
        get: function(key) {
          return $channelData && $channelData.get(key);
        },
        has: function(key) {
          return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports2, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/qs/lib/utils.js"(exports2, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports2, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils2();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports2, module2) {
    "use strict";
    var utils = require_utils2();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports2, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/@edgio/core/utils/cookieUtils.js
var require_cookieUtils = __commonJS({
  "node_modules/@edgio/core/utils/cookieUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.serializeCookie = void 0;
    function serializeCookie(name, value, options = {}) {
      return Object.keys(options).reduce((output, key) => {
        const opt = options[key];
        if (typeof opt === "boolean" && opt)
          return `${output}; ${key}`;
        return `${output}; ${key}=${opt}`;
      }, `${name}=${value}`);
    }
    exports2.serializeCookie = serializeCookie;
  }
});

// node_modules/@edgio/core/router/converters/toTimeInterval.js
var require_toTimeInterval = __commonJS({
  "node_modules/@edgio/core/router/converters/toTimeInterval.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toTimeInterval = void 0;
    var toTimeInterval = (value) => {
      if (typeof value === "string") {
        return value;
      }
      return `${value}s`;
    };
    exports2.toTimeInterval = toTimeInterval;
  }
});

// node_modules/@edgio/core/router/RouteHelper.js
var require_RouteHelper = __commonJS({
  "node_modules/@edgio/core/router/RouteHelper.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var constants_1 = require_constants();
    var path_1 = require_path();
    var origins_1 = require_origins();
    var RouteCriteria_1 = require_RouteCriteria();
    var constants_2 = require_constants();
    var RedirectOptions_1 = require_RedirectOptions();
    var OriginFetcher_1 = __importDefault2(require_OriginFetcher());
    var isEmpty_1 = __importDefault2(require_isEmpty());
    var bindParams_1 = __importDefault2(require_bindParams());
    var ParamsExtractor_1 = __importDefault2(require_ParamsExtractor());
    var qs_1 = __importDefault2(require_lib());
    var toEdgeRegex_1 = __importDefault2(require_toEdgeRegex());
    var cookieUtils_1 = require_cookieUtils();
    var exact_1 = require_exact();
    var toTimeInterval_1 = require_toTimeInterval();
    var RouteHelper = class {
      constructor(criteria, router) {
        this.features = {};
        this.addFeatures = (features) => {
          this.features = { ...this.features, ...features };
        };
        this.serviceWorker = (filePath) => {
          this.cache({ edge: { maxAgeSeconds: constants_1.FAR_FUTURE_TTL }, browser: false });
          if (filePath) {
            this.serveStatic(filePath);
          } else {
            this.setOrigin(origins_1.STATIC_ORIGIN_NAME);
            this.rewritePath(void 0, `${(0, origins_1.getPathPrefix)(origins_1.STATIC_ORIGIN_NAME)}/service-worker.js`);
          }
        };
        this.cache = (options) => {
          this.features.caching = this.features.caching || {};
          const { caching } = this.features;
          if (options.edge) {
            if (options.edge.maxAgeSeconds) {
              caching.max_age = (0, toTimeInterval_1.toTimeInterval)(options.edge.maxAgeSeconds);
            }
            if (options.edge.staleWhileRevalidateSeconds) {
              caching.stale_while_revalidate = (0, toTimeInterval_1.toTimeInterval)(options.edge.staleWhileRevalidateSeconds);
            }
            if (options.edge.forcePrivateCaching) {
              caching.ignore_origin_no_cache = [200];
            }
          } else if (options.edge === false) {
            caching.bypass_cache = true;
          }
          if (options && options.cacheableStatusCodes) {
            caching.cacheable_status_codes = options.cacheableStatusCodes;
          }
          if (options && options.enableCachingMethods) {
            caching.enable_caching_for_methods = options.enableCachingMethods;
          }
          if (options && options.ignoreOriginNoCache) {
            caching.ignore_origin_no_cache = options.ignoreOriginNoCache;
          }
          if (options.browser) {
            if (options.browser.serviceWorkerSeconds == null && options.browser.maxAgeSeconds == null) {
              throw new Error("The browser cache setting should specify serviceWorkerSeconds or maxAgeSeconds.");
            }
            if (options.browser.serviceWorkerSeconds) {
              caching.service_worker_max_age = (0, toTimeInterval_1.toTimeInterval)(options.browser.serviceWorkerSeconds);
            }
            if (options.browser.maxAgeSeconds === 0) {
              caching.bypass_client_cache = true;
            } else if (options.browser.maxAgeSeconds) {
              caching.client_max_age = (0, toTimeInterval_1.toTimeInterval)(options.browser.maxAgeSeconds);
            }
          } else if (options.browser === false) {
            caching.bypass_client_cache = true;
          }
          if (options.key) {
            options.key.applyCaching(this.features);
          }
        };
        this.serveStatic = (path, options = {}) => {
          var _a, _b, _c;
          const { edgeMaxAgeSeconds = constants_1.FAR_FUTURE_TTL, permanent } = options;
          this.cache({ edge: { maxAgeSeconds: edgeMaxAgeSeconds } });
          const origin = permanent ? origins_1.PERMANENT_STATIC_ORIGIN_NAME : origins_1.STATIC_ORIGIN_NAME;
          this.setOrigin(origin);
          const pathPrefix = (0, origins_1.getPathPrefix)(origin);
          path = path.replace(/\\+/g, "/").replace(/^\.\//, "").replace(/^\/(.*)/, "$1");
          const sourceFromCriteria = (0, RouteCriteria_1.isNegation)((_a = this.routeCriteria) === null || _a === void 0 ? void 0 : _a.path) || Array.isArray((_b = this.routeCriteria) === null || _b === void 0 ? void 0 : _b.path) ? void 0 : (_c = this.routeCriteria) === null || _c === void 0 ? void 0 : _c.path;
          const source = (options === null || options === void 0 ? void 0 : options.rewritePathSource) || sourceFromCriteria || "/:path*";
          if (options.statusCode) {
            this.setResponseCode(options.statusCode);
          }
          this.rewritePath(source, `${pathPrefix}/${path}`, {
            skipSlash: true,
            skipQuery: false
          });
        };
        this.renderWithApp = () => {
          this.sendToServerless(constants_1.EDGIO_CLOUD_FUNCTIONS_HINTS.app);
        };
        this.compute = (fn) => {
          this.sendToServerless(constants_1.EDGIO_CLOUD_FUNCTIONS_HINTS.compute, fn);
        };
        this.proxy = (backend, options) => {
          this.setOrigin(backend);
          if ((options === null || options === void 0 ? void 0 : options.transformRequest) || (options === null || options === void 0 ? void 0 : options.transformResponse)) {
            this.sendToServerless(constants_1.EDGIO_CLOUD_FUNCTIONS_HINTS.proxy, async (req, res, propertyContext) => {
              const lambdaResponse = res;
              (options === null || options === void 0 ? void 0 : options.transformRequest) && await options.transformRequest(req);
              await new OriginFetcher_1.default(propertyContext).fetch(req, res, {
                headers: options === null || options === void 0 ? void 0 : options.headers,
                removeEmptySearchParamValues: options === null || options === void 0 ? void 0 : options.removeEmptySearchParamValues,
                path: options === null || options === void 0 ? void 0 : options.path
              }, backend);
              lambdaResponse.body = Buffer.concat(lambdaResponse.chunks.slice(0, -1));
              if (options === null || options === void 0 ? void 0 : options.transformResponse) {
                await options.transformResponse(res, req);
                res.setHeader("Content-Length", lambdaResponse.body.length.toString());
              }
            });
          } else if (options) {
            if (options.path) {
              const destination = typeof options.path === "string" ? options.path : options.path();
              const path = Array.isArray(this.routeCriteria.path) || (0, RouteCriteria_1.isNegation)(this.routeCriteria.path) ? "/:path*" : this.routeCriteria.path;
              if (destination) {
                this.rewritePath(path, destination);
              }
            }
            if (options === null || options === void 0 ? void 0 : options.headers) {
              for (const [key, value] of Object.entries(options.headers)) {
                this.setRequestHeader(key, value);
              }
            }
            if ((options === null || options === void 0 ? void 0 : options.followRedirects) != null) {
              if (!this.features.url)
                this.features.url = {};
              this.features.url.follow_redirects = options === null || options === void 0 ? void 0 : options.followRedirects;
            }
          }
        };
        this.setResponseHeader = (name, value) => {
          if (!this.features.headers) {
            this.features.headers = {};
          }
          if (!this.features.headers.set_response_headers) {
            this.features.headers.set_response_headers = {};
          }
          const headers = this.features.headers.set_response_headers;
          headers[name] = value;
        };
        this.addResponseHeader = (name, value) => {
          if (!this.features.headers) {
            this.features.headers = {};
          }
          if (!this.features.headers.add_response_headers) {
            this.features.headers.add_response_headers = {};
          }
          const headers = this.features.headers.add_response_headers;
          headers[name] = value;
        };
        this.updateResponseHeader = (name, match, replace) => {
          this.setResponseHeader(name, `%{resp_${name}/${match.global ? "/" : ""}${(0, toEdgeRegex_1.default)(match, "", true)}/${replace}}`);
        };
        this.removeResponseHeader = (name) => {
          if (!this.features.headers) {
            this.features.headers = {};
          }
          if (!this.features.headers.remove_response_headers) {
            this.features.headers.remove_response_headers = [];
          }
          ;
          this.features.headers.remove_response_headers.push(name);
        };
        this.removeUpstreamResponseHeader = (name) => {
          if (!this.features.headers) {
            this.features.headers = {};
          }
          if (!this.features.headers.remove_origin_response_headers) {
            this.features.headers.remove_origin_response_headers = [];
          }
          this.features.headers.remove_origin_response_headers.push(name);
        };
        this.setRequestHeader = (name, value) => {
          if (!this.features.headers) {
            this.features.headers = {};
          }
          if (!this.features.headers.set_request_headers) {
            this.features.headers.set_request_headers = {};
          }
          const headers = this.features.headers.set_request_headers;
          headers[name] = value;
        };
        this.updateRequestHeader = (name, match, replace) => {
          this.setRequestHeader(name, `%{http_${name}/${match.global ? "/" : ""}${(0, toEdgeRegex_1.default)(match, "", true)}/${replace}}`);
        };
        this.setResponseBody = (body, code, done) => {
          if (!this.features.response) {
            this.features.response = {};
          }
          this.features.response.set_done = !!done;
          this.features.response.set_response_body = body;
          if (code)
            this.features.response.set_status_code = code;
        };
        this.setResponseCode = (code) => {
          if (!this.features.response) {
            this.features.response = {};
          }
          this.features.response.set_status_code = code;
        };
        this.allowCors = (config = {}) => {
          this.setResponseHeader("Access-Control-Allow-Origin", config.origin || "*");
          if (config.methods) {
            this.setResponseHeader("Access-Control-Allow-Methods", config.methods.join(", "));
          }
          if (config.headers) {
            this.setResponseHeader("Access-Control-Allow-Headers", config.headers.join(", "));
          }
          if (config.maxAge) {
            this.setResponseHeader("Access-Control-Max-Age", config.maxAge.toString());
          }
          if (config.credentials != null) {
            this.setResponseHeader("Access-Control-Allow-Credentials", config.credentials.toString());
          }
        };
        this.rewritePath = (source, destination, options) => {
          if (!this.features.url) {
            this.features.url = {};
          }
          if (!this.features.url.url_rewrite) {
            this.features.url.url_rewrite = [];
          }
          if (source instanceof exact_1.ExactPath) {
            source = source.toString();
          }
          if (typeof source === "string") {
            this.features.url.url_rewrite.push((0, path_1.rewritePath)(source, destination, options));
          } else {
            this.features.url.url_rewrite.push({
              syntax: "regexp",
              source: source ? (0, toEdgeRegex_1.default)(source) : void 0,
              destination
            });
          }
        };
        this.updatePath = (destination) => {
          var _a;
          this.paramsExtractor.updateRouteCriteria({
            path: destination
          });
          this.rewritePath((_a = this.routeCriteria.path) !== null && _a !== void 0 ? _a : "/:path*", destination);
        };
        this.send = (content, statusCode) => {
          if (typeof content === "function") {
            this.compute(async (req, res) => {
              res.body = content();
              res.statusCode = statusCode;
            });
            return;
          }
          this.setResponseBody(content, statusCode, true);
        };
        this.removeRequestHeader = (name) => {
          this.features.headers = !this.features.headers ? {} : this.features.headers;
          this.features.headers.set_request_headers = !this.features.headers.set_request_headers ? {} : this.features.headers.set_request_headers;
          const headers = this.features.headers.set_request_headers;
          headers[name] = "";
        };
        this.appShell = (indexHtmlPath) => {
          this.setResponseHeader(constants_2.HTTP_HEADERS.contentType, "text/html");
          this.serveStatic(indexHtmlPath);
        };
        this.redirect = (to, options = {}) => {
          var _a, _b, _c, _d, _e, _f;
          const { to: toPath, statusCode, query } = (0, RedirectOptions_1.normalizeRedirectOptions)(to, options);
          const isMatchOnlyQuery = () => {
            var _a2;
            return !Object.values((_a2 = this.routeCriteria.query) !== null && _a2 !== void 0 ? _a2 : {}).find((value) => typeof value === "string" && value.startsWith(":"));
          };
          this.rewritePath("/:path*", "/:path*");
          if ((0, isEmpty_1.default)(query) && isMatchOnlyQuery()) {
            this.features.url = (_a = this.features.url) !== null && _a !== void 0 ? _a : {};
            this.features.url.url_redirect = (_b = this.features.url.url_redirect) !== null && _b !== void 0 ? _b : {};
            this.features.url.url_redirect.code = statusCode;
            if (((_c = this.routeCriteria) === null || _c === void 0 ? void 0 : _c.path) instanceof RegExp) {
              this.features.url.url_redirect.source = (0, toEdgeRegex_1.default)((_d = this.routeCriteria) === null || _d === void 0 ? void 0 : _d.path);
              this.features.url.url_redirect.destination = toPath;
              this.features.url.url_redirect.syntax = "regexp";
              return;
            }
            this.features.url.url_redirect = {
              ...this.features.url.url_redirect,
              ...(0, path_1.rewritePath)((_f = (_e = this.routeCriteria) === null || _e === void 0 ? void 0 : _e.path) === null || _f === void 0 ? void 0 : _f.toString(), toPath, {
                skipQuery: true
              })
            };
            return;
          }
          this.sendToServerless(constants_1.EDGIO_CLOUD_FUNCTIONS_HINTS.redirect, async (req, res) => {
            let queryWithReplacedParams = {};
            for (const queryKey in query) {
              queryWithReplacedParams = {
                ...queryWithReplacedParams,
                [(0, bindParams_1.default)(queryKey, req.params)]: (0, bindParams_1.default)(query[queryKey], req.params)
              };
            }
            res.setHeader(constants_2.HTTP_HEADERS.location, `${(0, bindParams_1.default)(toPath, req.params)}${Object.keys(queryWithReplacedParams).length > 0 ? "?" + qs_1.default.stringify(queryWithReplacedParams) : ""}`);
            res.statusCode = statusCode;
            res.body = "";
          });
          this.cache({
            cacheableStatusCodes: [301, 302, 305, 307, 308],
            edge: {
              maxAgeSeconds: constants_1.FAR_FUTURE_TTL
            }
          });
        };
        this.addResponseCookie = (name, value, options) => {
          this.addResponseHeader(constants_2.HTTP_HEADERS.setCookie, (0, cookieUtils_1.serializeCookie)(name, value, options));
        };
        this.setOrigin = (name) => {
          if (!this.features.origin)
            this.features.origin = {};
          this.features.origin.set_origin = name;
        };
        this.setComment = (message, append = false) => {
          if (!append)
            this.features.comment = "";
          this.features.comment += message;
        };
        this.optimizeImages = (value = true) => {
          if (!this.features.response)
            this.features.response = {};
          this.features.response.optimize_images = value;
        };
        this.setSecurityHeaders = (options = {}) => {
          var _a, _b, _c, _d;
          options.xFrameOptions = (_a = options.xFrameOptions) !== null && _a !== void 0 ? _a : "SAMEORIGIN";
          options.xXssProtection = (_b = options.xXssProtection) !== null && _b !== void 0 ? _b : "1; mode=block";
          options.xContentTypeOptions = (_c = options.xContentTypeOptions) !== null && _c !== void 0 ? _c : "nosniff";
          options.referrerPolicy = (_d = options.referrerPolicy) !== null && _d !== void 0 ? _d : "same-origin";
          Object.entries(options).forEach(([headerKey, value]) => {
            const header = constants_2.HTTP_HEADERS[headerKey];
            if (!value || !header)
              return;
            this.setResponseHeader(constants_2.HTTP_HEADERS[headerKey], value);
          });
        };
        this.routeCriteria = criteria;
        this.paramsExtractor = new ParamsExtractor_1.default(criteria);
        this.router = router;
      }
      evaluate(creator) {
        creator(this);
        return this.features;
      }
      sendToServerless(hint, fn) {
        const hintIndex = fn ? this.router.addFunction(async (req, res, propertyContext) => {
          req.params = this.paramsExtractor.extract(req);
          await fn(req, res, propertyContext);
          if (!res.getHeader(constants_2.HTTP_HEADERS.contentType)) {
            res.setHeader(constants_2.HTTP_HEADERS.contentType, "text/plain");
          }
        }) : null;
        this.setRequestHeader(`+${constants_1.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER}`, hintIndex !== null ? `${hint}:${hintIndex}` : hint);
        this.setOrigin(origins_1.SERVERLESS_ORIGIN_NAME);
      }
    };
    exports2.default = RouteHelper;
  }
});

// node_modules/@edgio/core/router/converters/toFeature.js
var require_toFeature = __commonJS({
  "node_modules/@edgio/core/router/converters/toFeature.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toFeature = void 0;
    var RouteHelper_1 = __importDefault2(require_RouteHelper());
    var toFeature = (criteria, features, router) => {
      if (typeof features === "function") {
        return new RouteHelper_1.default(criteria, router).evaluate(features);
      } else {
        return features;
      }
    };
    exports2.toFeature = toFeature;
  }
});

// node_modules/@edgio/core/utils/Tasks.js
var require_Tasks = __commonJS({
  "node_modules/@edgio/core/utils/Tasks.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Tasks = class {
      constructor() {
        this._tasks = [];
        this._resolveHandler = Function.prototype;
        this._errorHandler = (err) => {
          throw err;
        };
      }
      add(...tasks) {
        this._tasks.push(...tasks);
        return this;
      }
      onTaskDone(handler) {
        this._resolveHandler = handler;
        return this;
      }
      onTaskError(errorHandler) {
        this._errorHandler = errorHandler;
        return this;
      }
      resolve() {
        const promises = this._convertTasksToPromises().map((task, i) => {
          return task.then((res) => {
            this._resolveHandler(res);
            return res;
          }).catch((err) => {
            return this._errorHandler(err);
          });
        });
        return Promise.all(promises);
      }
      _convertTasksToPromises() {
        return this._tasks.map((task) => {
          if (typeof task !== "function") {
            return Promise.resolve(task);
          }
          try {
            const taskResult = task();
            if (taskResult instanceof Promise) {
              return taskResult;
            }
            return Promise.resolve(taskResult);
          } catch (e) {
            return Promise.reject(e);
          }
        });
      }
    };
    exports2.default = Tasks;
  }
});

// node_modules/@edgio/core/router/PreloadRequests.js
var require_PreloadRequests = __commonJS({
  "node_modules/@edgio/core/router/PreloadRequests.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Tasks_1 = __importDefault2(require_Tasks());
    var PreloadRequests = class {
      constructor() {
        this.options = [];
      }
      push(...options) {
        this.options.push(...options);
      }
      async getPreloadConfig(config) {
        const requests = [];
        await new Tasks_1.default().add(...this.options).onTaskDone((result) => requests.push(...result)).resolve();
        return JSON.stringify({
          requests,
          concurrency: config === null || config === void 0 ? void 0 : config.prerenderConcurrency
        });
      }
    };
    exports2.default = PreloadRequests;
  }
});

// node_modules/path-root-regex/index.js
var require_path_root_regex = __commonJS({
  "node_modules/path-root-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function() {
      return /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?/;
    };
  }
});

// node_modules/path-root/index.js
var require_path_root = __commonJS({
  "node_modules/path-root/index.js"(exports2, module2) {
    "use strict";
    var pathRootRegex = require_path_root_regex();
    module2.exports = function(filepath) {
      if (typeof filepath !== "string") {
        throw new TypeError("expected a string");
      }
      var match = pathRootRegex().exec(filepath);
      if (match) {
        return match[0];
      }
    };
  }
});

// node_modules/resolve-package-path/lib/rethrow-unless-code.js
var require_rethrow_unless_code = __commonJS({
  "node_modules/resolve-package-path/lib/rethrow-unless-code.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function rethrowUnlessCode(maybeError, ...codes) {
      if (maybeError !== null && typeof maybeError === "object") {
        const code = maybeError.code;
        for (const allowed of codes) {
          if (code === allowed) {
            return;
          }
        }
      }
      throw maybeError;
    }
    exports2.default = rethrowUnlessCode;
  }
});

// node_modules/resolve-package-path/lib/should-preserve-symlinks.js
var require_should_preserve_symlinks = __commonJS({
  "node_modules/resolve-package-path/lib/should-preserve-symlinks.js"(exports2, module2) {
    "use strict";
    function includes(array, entry) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === entry) {
          return true;
        }
      }
      return false;
    }
    module2.exports = function(process2) {
      return !!process2.env.NODE_PRESERVE_SYMLINKS || includes(process2.execArgv, "--preserve-symlinks");
    };
  }
});

// node_modules/resolve-package-path/lib/resolve-package-path.js
var require_resolve_package_path = __commonJS({
  "node_modules/resolve-package-path/lib/resolve-package-path.js"(exports2, module2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var fs = require("fs");
    var path = require("path");
    var pathRoot = require_path_root();
    var rethrow_unless_code_1 = __importDefault2(require_rethrow_unless_code());
    var ABSOLUTE_OR_RELATIVE_PATH_REGEX = /^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/;
    var shouldPreserveSymlinks = require_should_preserve_symlinks();
    var PRESERVE_SYMLINKS = shouldPreserveSymlinks(process);
    function _getRealFilePath(realFilePathCache, filePath) {
      if (realFilePathCache.has(filePath)) {
        return realFilePathCache.get(filePath);
      }
      let realPath = null;
      try {
        const stat = fs.statSync(filePath);
        if (stat.isFile() || stat.isFIFO()) {
          if (PRESERVE_SYMLINKS) {
            realPath = filePath;
          } else {
            realPath = fs.realpathSync(filePath);
          }
        }
      } catch (e) {
        (0, rethrow_unless_code_1.default)(e, "ENOENT");
      }
      realFilePathCache.set(filePath, realPath);
      return realPath;
    }
    function _getRealDirectoryPath(realDirectoryPathCache, directoryPath) {
      if (realDirectoryPathCache.has(directoryPath)) {
        return realDirectoryPathCache.get(directoryPath);
      }
      let realPath = null;
      try {
        const stat = fs.statSync(directoryPath);
        if (stat.isDirectory()) {
          if (PRESERVE_SYMLINKS) {
            realPath = directoryPath;
          } else {
            realPath = fs.realpathSync(directoryPath);
          }
        }
      } catch (e) {
        (0, rethrow_unless_code_1.default)(e, "ENOENT", "ENOTDIR");
      }
      realDirectoryPathCache.set(directoryPath, realPath);
      return realPath;
    }
    function _findPackagePath(realFilePathCache, name, dir) {
      const fsRoot = pathRoot(dir);
      let currPath = dir;
      while (currPath !== fsRoot) {
        let endsWithNodeModules = path.basename(currPath).toLowerCase() === "node_modules";
        let filePath = path.join(currPath, endsWithNodeModules ? "" : "node_modules", name);
        let realPath = _getRealFilePath(realFilePathCache, filePath);
        if (realPath) {
          return realPath;
        }
        if (endsWithNodeModules) {
          currPath = path.dirname(currPath);
        }
        currPath = path.dirname(currPath);
      }
      return null;
    }
    function _findUpPackagePath(findUpCache, initialSearchDir) {
      let previous;
      let dir = initialSearchDir;
      let maybePackageJsonPath;
      let result = null;
      do {
        if (findUpCache.has(dir)) {
          result = findUpCache.get(dir);
          break;
        }
        maybePackageJsonPath = path.join(dir, "package.json");
        if (fs.existsSync(maybePackageJsonPath)) {
          result = maybePackageJsonPath;
          break;
        }
        previous = dir;
        dir = path.dirname(dir);
      } while (dir !== previous);
      findUpCache.set(initialSearchDir, result);
      return result;
    }
    function resolvePackagePath(caches, name, dir) {
      if (typeof name !== "string" || name.length === 0) {
        throw new TypeError("resolvePackagePath: 'name' must be a non-zero-length string.");
      }
      let basedir = dir || __dirname;
      let absoluteStart = path.resolve(basedir);
      while (_getRealDirectoryPath(caches.REAL_DIRECTORY_PATH, absoluteStart) === null) {
        absoluteStart = path.dirname(absoluteStart);
      }
      if (!absoluteStart) {
        let error = new TypeError("resolvePackagePath: 'dir' or one of the parent directories in its path must refer to a valid directory.");
        error.code = "MODULE_NOT_FOUND";
        throw error;
      }
      if (ABSOLUTE_OR_RELATIVE_PATH_REGEX.test(name)) {
        let res = path.resolve(absoluteStart, name);
        return _getRealFilePath(caches.REAL_FILE_PATH, path.join(res, "package.json"));
      } else {
        return _findPackagePath(caches.REAL_FILE_PATH, path.join(name, "package.json"), absoluteStart);
      }
    }
    resolvePackagePath._findPackagePath = _findPackagePath;
    resolvePackagePath._findUpPackagePath = _findUpPackagePath;
    resolvePackagePath._getRealFilePath = _getRealFilePath;
    resolvePackagePath._getRealDirectoryPath = _getRealDirectoryPath;
    module2.exports = resolvePackagePath;
  }
});

// node_modules/resolve-package-path/lib/cache.js
var require_cache = __commonJS({
  "node_modules/resolve-package-path/lib/cache.js"(exports2, module2) {
    "use strict";
    function makeCache() {
      const cache = /* @__PURE__ */ Object.create(null);
      cache["_cache"] = 1;
      delete cache["_cache"];
      return cache;
    }
    module2.exports = class Cache {
      constructor() {
        this._store = makeCache();
      }
      set(key, value) {
        return this._store[key] = value;
      }
      get(key) {
        return this._store[key];
      }
      has(key) {
        return key in this._store;
      }
      delete(key) {
        delete this._store[key];
      }
      get size() {
        return Object.keys(this._store).length;
      }
    };
  }
});

// node_modules/resolve-package-path/lib/cache-group.js
var require_cache_group = __commonJS({
  "node_modules/resolve-package-path/lib/cache-group.js"(exports2, module2) {
    "use strict";
    var Cache = require_cache();
    module2.exports = class CacheGroup {
      constructor() {
        this.MODULE_ENTRY = new Cache();
        this.PATH = new Cache();
        this.REAL_FILE_PATH = new Cache();
        this.REAL_DIRECTORY_PATH = new Cache();
        Object.freeze(this);
      }
    };
  }
});

// node_modules/resolve-package-path/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/resolve-package-path/lib/index.js"(exports2, module2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var path_1 = __importDefault2(require("path"));
    var resolve_package_path_1 = __importDefault2(require_resolve_package_path());
    var rethrow_unless_code_1 = __importDefault2(require_rethrow_unless_code());
    var ALLOWED_ERROR_CODES = [
      "MODULE_NOT_FOUND",
      "UNDECLARED_DEPENDENCY",
      "MISSING_PEER_DEPENDENCY",
      "MISSING_DEPENDENCY"
    ];
    var CacheGroup = require_cache_group();
    var Cache = require_cache();
    var getRealFilePath = resolve_package_path_1.default._getRealFilePath;
    var getRealDirectoryPath = resolve_package_path_1.default._getRealDirectoryPath;
    var __findUpPackagePath = resolve_package_path_1.default._findUpPackagePath;
    var CACHE = new CacheGroup();
    var FIND_UP_CACHE = new Cache();
    var pnp;
    try {
      pnp = require("pnpapi");
    } catch (error) {
    }
    function _findUpPackagePath(baseDir, _cache) {
      let cache;
      if (_cache === void 0 || _cache === null || _cache === true) {
        cache = FIND_UP_CACHE;
      } else if (_cache === false) {
        cache = new Cache();
      } else {
        cache = _cache;
      }
      let absoluteStart = path_1.default.resolve(baseDir);
      return __findUpPackagePath(cache, absoluteStart);
    }
    function resolvePackagePath(target, baseDir, _cache) {
      let cache;
      if (_cache === void 0 || _cache === null || _cache === true) {
        cache = CACHE;
      } else if (_cache === false) {
        cache = new CacheGroup();
      } else {
        cache = _cache;
      }
      if (baseDir.charAt(baseDir.length - 1) !== path_1.default.sep) {
        baseDir = `${baseDir}${path_1.default.sep}`;
      }
      const key = target + "\0" + baseDir;
      let pkgPath;
      if (cache.PATH.has(key)) {
        pkgPath = cache.PATH.get(key);
      } else {
        try {
          pkgPath = pnp ? pnp.resolveToUnqualified(target + "/package.json", baseDir) : (0, resolve_package_path_1.default)(cache, target, baseDir);
        } catch (e) {
          (0, rethrow_unless_code_1.default)(e, ...ALLOWED_ERROR_CODES);
          pkgPath = null;
        }
        cache.PATH.set(key, pkgPath);
      }
      return pkgPath;
    }
    resolvePackagePath._resetCache = function() {
      CACHE = new CacheGroup();
      FIND_UP_CACHE = new Cache();
    };
    (function(resolvePackagePath2) {
      resolvePackagePath2._FIND_UP_CACHE = FIND_UP_CACHE;
      resolvePackagePath2.findUpPackagePath = _findUpPackagePath;
    })(resolvePackagePath || (resolvePackagePath = {}));
    Object.defineProperty(resolvePackagePath, "_CACHE", {
      get: function() {
        return CACHE;
      }
    });
    Object.defineProperty(resolvePackagePath, "_FIND_UP_CACHE", {
      get: function() {
        return FIND_UP_CACHE;
      }
    });
    resolvePackagePath.getRealFilePath = function(filePath) {
      return getRealFilePath(CACHE.REAL_FILE_PATH, filePath);
    };
    resolvePackagePath.getRealDirectoryPath = function(directoryPath) {
      return getRealDirectoryPath(CACHE.REAL_DIRECTORY_PATH, directoryPath);
    };
    module2.exports = resolvePackagePath;
  }
});

// node_modules/@edgio/core/deploy/resolveInPackage.js
var require_resolveInPackage = __commonJS({
  "node_modules/@edgio/core/deploy/resolveInPackage.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var resolve_package_path_1 = __importDefault2(require_lib2());
    var path_1 = require("path");
    function resolveInPackage(pkg, ...file) {
      let path = (0, resolve_package_path_1.default)(pkg, __dirname) || (0, resolve_package_path_1.default)(pkg, process.cwd());
      if (!path)
        return void 0;
      const packagePath = (0, path_1.dirname)(path);
      return (0, path_1.join)(packagePath, ...file);
    }
    exports2.default = resolveInPackage;
  }
});

// node_modules/@edgio/core/deploy/paths.js
var require_paths = __commonJS({
  "node_modules/@edgio/core/deploy/paths.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getJsInternalPath = exports2.getConfigPath = exports2.getRoutesPath = exports2.getSrcConfigPath = exports2.getSrcRouterPath = exports2.getStaticAssetManifestPath = exports2.getEntryPoint = exports2.pathForBackend = exports2.STATIC_ASSET_EXPIRATION_FILE_NAME = exports2.STATIC_ASSET_MANIFEST_FILE_NAME = exports2.CONFIG_FILE_NAME = exports2.ROUTES_FILE_NAME = exports2.TMP_DIR = exports2.SOURCES_DIR = exports2.PERMANENT_ASSETS_DIR = exports2.ASSETS_DIR = exports2.EDGE_FUNCTIONS_QUICKJS_BYTECODE_PATH = exports2.EDGE_FUNCTIONS_QUICKJS_BYTECODE_FILENAME = exports2.EDGE_FUNCTIONS_INDEX_PATH = exports2.EDGE_FUNCTIONS_BUNDLE_PATH = exports2.EDGE_FUNCTIONS_BUNDLE_FILENAME = exports2.EDGE_FUNCTION_SOURCES_FILENAME = exports2.EDGE_FUNCTIONS_INDEX_FILENAME = exports2.JS_APP_DIR = exports2.JS_APP_DIR_NAME = exports2.JS_INTERNAL_DIR = exports2.JS_INTERNAL_DIR_NAME = exports2.LAMBDA_DIR = exports2.EDGIO_DIR = void 0;
    var fs_1 = require("fs");
    var path_1 = require("path");
    var resolveInPackage_1 = __importDefault2(require_resolveInPackage());
    var global_helpers_1 = require_global_helpers();
    exports2.EDGIO_DIR = ".edgio";
    exports2.LAMBDA_DIR = (0, path_1.join)(exports2.EDGIO_DIR, "lambda");
    exports2.JS_INTERNAL_DIR_NAME = "internal";
    exports2.JS_INTERNAL_DIR = (0, path_1.join)(exports2.LAMBDA_DIR, exports2.JS_INTERNAL_DIR_NAME);
    exports2.JS_APP_DIR_NAME = "app";
    exports2.JS_APP_DIR = (0, path_1.join)(exports2.LAMBDA_DIR, exports2.JS_APP_DIR_NAME);
    exports2.EDGE_FUNCTIONS_INDEX_FILENAME = "__edge-functions-index__.js";
    exports2.EDGE_FUNCTION_SOURCES_FILENAME = "__edge-function-sources__.json";
    exports2.EDGE_FUNCTIONS_BUNDLE_FILENAME = "edge-function.js";
    exports2.EDGE_FUNCTIONS_BUNDLE_PATH = (0, path_1.join)(exports2.JS_INTERNAL_DIR, exports2.EDGE_FUNCTIONS_BUNDLE_FILENAME);
    exports2.EDGE_FUNCTIONS_INDEX_PATH = (0, path_1.join)(exports2.JS_INTERNAL_DIR, exports2.EDGE_FUNCTIONS_INDEX_FILENAME);
    exports2.EDGE_FUNCTIONS_QUICKJS_BYTECODE_FILENAME = "__edge-functions__.qbc";
    exports2.EDGE_FUNCTIONS_QUICKJS_BYTECODE_PATH = (0, path_1.join)(exports2.JS_INTERNAL_DIR, exports2.EDGE_FUNCTIONS_QUICKJS_BYTECODE_FILENAME);
    exports2.ASSETS_DIR = (0, path_1.join)(exports2.EDGIO_DIR, "s3");
    exports2.PERMANENT_ASSETS_DIR = (0, path_1.join)(exports2.EDGIO_DIR, "s3-permanent");
    exports2.SOURCES_DIR = (0, path_1.join)(exports2.EDGIO_DIR, "src");
    exports2.TMP_DIR = (0, path_1.join)(exports2.EDGIO_DIR, "tmp");
    exports2.ROUTES_FILE_NAME = "routes.cjs";
    exports2.CONFIG_FILE_NAME = "edgio.config.cjs";
    exports2.STATIC_ASSET_MANIFEST_FILE_NAME = "static-asset-manifest.json";
    exports2.STATIC_ASSET_EXPIRATION_FILE_NAME = "static-asset-expiration.json";
    function pathForBackend(backend) {
      return (0, path_1.join)("__backends__", `${backend}.cjs`);
    }
    exports2.pathForBackend = pathForBackend;
    var getEntryPoint = (entry, appDir, connector = "@edgio/core") => {
      if (connector === null || connector === void 0 ? void 0 : connector.startsWith(".")) {
        const entryFile = [
          (0, path_1.join)(appDir, connector, `${entry}.cjs`),
          (0, path_1.join)(appDir, connector, `${entry}.mjs`),
          (0, path_1.join)(appDir, connector, `${entry}.js`)
        ].find((file) => (0, fs_1.existsSync)(file)) || "";
        if (entryFile && (0, fs_1.existsSync)(entryFile)) {
          return entryFile;
        }
        return void 0;
      }
      return [
        (0, resolveInPackage_1.default)(connector, `${entry}.js`),
        (0, resolveInPackage_1.default)("@edgio/connectors", `${entry}.js`),
        (0, resolveInPackage_1.default)("@edgio/core", `${entry}.js`)
      ].find((file) => file && (0, fs_1.existsSync)(file)) || "";
    };
    exports2.getEntryPoint = getEntryPoint;
    function getStaticAssetManifestPath() {
      var _a, _b;
      if ((_a = global_helpers_1.EdgioRuntimeGlobal.runtimeOptions) === null || _a === void 0 ? void 0 : _a.fs.edgio.lambda.internal.staticAssetManifest)
        return (_b = global_helpers_1.EdgioRuntimeGlobal.runtimeOptions) === null || _b === void 0 ? void 0 : _b.fs.edgio.lambda.internal.staticAssetManifest.value;
      const filePath = (0, path_1.join)(getJsInternalPath(), exports2.STATIC_ASSET_MANIFEST_FILE_NAME);
      if (!(0, fs_1.existsSync)(filePath)) {
        throw new Error(`The '${filePath}' file was not found. Please try to re-run 'edgio build'.`);
      }
      return filePath;
    }
    exports2.getStaticAssetManifestPath = getStaticAssetManifestPath;
    function getSrcRouterPath(config) {
      const folder = process.cwd();
      const result = ((config === null || config === void 0 ? void 0 : config.routes) ? [(0, path_1.join)(process.cwd(), config.routes)] : [(0, path_1.join)(folder, "routes.js"), (0, path_1.join)(folder, "routes.ts"), (0, path_1.join)(folder, "routes.cjs")]).find(fs_1.existsSync);
      if (result == null) {
        const srcFile = (config === null || config === void 0 ? void 0 : config.routes) || `routes.js, routes.ts, or routes.cjs`;
        throw new Error(`Edgio routes file not found. Please create ${srcFile} in the root directory of your project.`);
      }
      return result;
    }
    exports2.getSrcRouterPath = getSrcRouterPath;
    function getSrcConfigPath() {
      const folder = process.cwd();
      const result = [
        (0, path_1.join)(folder, "edgio.config.js"),
        (0, path_1.join)(folder, "edgio.config.ts"),
        (0, path_1.join)(folder, "edgio.config.cjs")
      ].find(fs_1.existsSync);
      if (result == null) {
        throw new Error("Edgio config file not found. Please create edgio.config.js or edgio.config.cjs in the root directory of your project.");
      }
      return result;
    }
    exports2.getSrcConfigPath = getSrcConfigPath;
    function getRoutesPath() {
      var _a, _b;
      return (_b = (_a = global_helpers_1.EdgioRuntimeGlobal.runtimeOptions) === null || _a === void 0 ? void 0 : _a.fs.edgio.lambda.internal.routes) !== null && _b !== void 0 ? _b : getSrcRouterPath();
    }
    exports2.getRoutesPath = getRoutesPath;
    function getConfigPath() {
      var _a, _b;
      return (_b = (_a = global_helpers_1.EdgioRuntimeGlobal.runtimeOptions) === null || _a === void 0 ? void 0 : _a.fs.edgio.lambda.internal.config.value) !== null && _b !== void 0 ? _b : getSrcConfigPath();
    }
    exports2.getConfigPath = getConfigPath;
    function getJsInternalPath() {
      var _a, _b;
      return (_b = (_a = global_helpers_1.EdgioRuntimeGlobal.runtimeOptions) === null || _a === void 0 ? void 0 : _a.fs.edgio.lambda.internal.value) !== null && _b !== void 0 ? _b : (0, path_1.join)(process.cwd(), exports2.JS_INTERNAL_DIR);
    }
    exports2.getJsInternalPath = getJsInternalPath;
  }
});

// node_modules/@edgio/core/config.js
var require_config = __commonJS({
  "node_modules/@edgio/core/config.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getConfigFromFile = exports2.getConfig = void 0;
    var paths_1 = require_paths();
    var utils_1 = require_utils();
    var log_1 = __importDefault2(require_log());
    var config;
    function getConfig(reload = false) {
      const srcPath = (0, paths_1.getConfigPath)();
      return getConfigFromFile(srcPath, reload);
    }
    exports2.getConfig = getConfig;
    function getConfigFromFile(srcPath, reload = false) {
      if (!config || reload) {
        if (reload) {
          delete require.cache[srcPath];
        }
        try {
          config = (0, utils_1.nonWebpackRequire)(srcPath);
        } catch (e) {
          if (e.code === "ERR_REQUIRE_ESM") {
            log_1.default.error(`Error: The 'edgio.config.js' file cannot be loaded because it uses CommonJS syntax and this project is set to type 'module'. Please rename it to 'edgio.config.cjs'.`);
            process.exit(1);
          }
          throw e;
        }
        const environment = process.env.EDGIO_ENVIRONMENT_NAME;
        if (environment && config.environments && config.environments[environment]) {
          log_1.default.info(`using config overrides for ${environment}`);
          Object.assign(config, config.environments[environment]);
        }
        if (config.nodejsConnector && config.customConnector) {
          config.nodejsConnector = config.customConnector;
        }
      }
      return config;
    }
    exports2.getConfigFromFile = getConfigFromFile;
  }
});

// node_modules/@edgio/core/router/Router.js
var require_Router = __commonJS({
  "node_modules/@edgio/core/router/Router.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var path_1 = require("path");
    var constants_1 = require_constants();
    var source_1 = require_source();
    var utils_1 = require_utils();
    var requireInternal_1 = __importDefault2(require_requireInternal());
    var toRule_1 = require_toRule();
    var toFeature_1 = require_toFeature();
    var PreloadRequests_1 = __importDefault2(require_PreloadRequests());
    var exact_1 = require_exact();
    var environment_1 = require_environment();
    var slash_12 = __importDefault2(require_slash());
    var paths_1 = require_paths();
    var config_1 = require_config();
    var Router2 = class {
      constructor(options = {}) {
        this.rules = [];
        this.routerOptions = {};
        this.functions = {};
        this.preloadRequests = new PreloadRequests_1.default();
        this.isIfActive = false;
        this.configInternal = void 0;
        this.forceHttps = ({
          redirectCode = 301,
          hsts = true,
          hstsMaxAge = 15768e3,
          hstsIncludeSubDomains = false,
          hstsPreload = false
        } = {}) => {
          this.match({ scheme: "HTTP" }, ({ setResponseHeader, setResponseCode, setComment }) => {
            setComment(`Redirect to HTTPS`);
            setResponseHeader(constants_1.HTTP_HEADERS.location, `https://%{host}%{normalized_uri}`);
            setResponseCode(redirectCode);
          });
          if (hsts) {
            this.always(({ setComment, setResponseHeader }) => {
              setComment(`Set HSTS header`);
              setResponseHeader(constants_1.HTTP_HEADERS.strictTransportSecurity, `max-age=${hstsMaxAge}${hstsIncludeSubDomains ? "; includeSubDomains" : ""}${hstsPreload ? "; preload" : ""}`);
            });
          }
          return this;
        };
        this.routerOptions = options;
      }
      get Config() {
        if (!this.configInternal) {
          this.configInternal = (0, config_1.getConfig)(true);
        }
        return this.configInternal;
      }
      addStaticAssetManifestEntry(path, data) {
        if (Router2._staticAssetManifest[path] === void 0) {
          Router2._staticAssetManifest[path] = data;
        } else {
          Router2._staticAssetManifest[path] = Array.from(/* @__PURE__ */ new Set([...Router2._staticAssetManifest[path], ...data]));
        }
      }
      getStaticAssetManifest() {
        return Router2._staticAssetManifest;
      }
      static load(routerPath) {
        const routerModule = (0, utils_1.nonWebpackRequire)(routerPath);
        return routerModule.default || routerModule;
      }
      always(features, options) {
        return this.matchInternal({}, features, options);
      }
      get(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.get, criteria, features, options);
      }
      put(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.put, criteria, features, options);
      }
      patch(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.patch, criteria, features, options);
      }
      post(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.post, criteria, features, options);
      }
      head(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.head, criteria, features, options);
      }
      delete(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.delete, criteria, features, options);
      }
      options(criteria, features, options) {
        return this.matchMethod(constants_1.HTTP_METHODS.options, criteria, features, options);
      }
      match(criteria, features, options) {
        if (typeof criteria === "string" || criteria instanceof RegExp || criteria instanceof exact_1.ExactPath) {
          return this.matchInternal({ path: criteria }, features, options);
        } else {
          return this.matchInternal(criteria, features, options);
        }
      }
      conditional(criteria) {
        this.rules.push(criteria);
        return this;
      }
      if(criteria, featureOrRouter, ...featuresOrRouters) {
        if (Object.keys(criteria).length === 0) {
          throw new Error("If statement mustn't have empty criteria.");
        }
        this.isIfActive = true;
        this.rules.push((0, toRule_1.toRule)(criteria, ...this.createConditionFeatures(criteria, featureOrRouter, featuresOrRouters)));
        this.addNestedFunctions(featureOrRouter, featuresOrRouters);
        return this;
      }
      elseif(criteria, featureOrRouter, ...featuresOrRouters) {
        if (Object.keys(criteria).length === 0) {
          throw new Error("Elseif statement mustn't have empty criteria.");
        }
        if (!this.isIfActive) {
          throw new Error("Call of 'elseif' must follow either 'if', or 'elseif' calls. If you are re-using the parent router, please create a new instance.");
        }
        const lastRule = this.rules[this.rules.length - 1];
        const rule = (0, toRule_1.toRule)(criteria, ...this.createConditionFeatures(criteria, featureOrRouter, featuresOrRouters));
        lastRule.if.push(...rule.if ? rule.if : [rule]);
        this.addNestedFunctions(featureOrRouter, featuresOrRouters);
        return this;
      }
      else(featureOrRouter, ...featuresOrRouters) {
        if (!this.isIfActive) {
          throw new Error("Call of 'else' must follow either 'if', or 'elseif' calls. If you are re-using the parent router, please create a new instance.");
        }
        const lastRule = this.rules[this.rules.length - 1];
        lastRule.if.push((0, toRule_1.toThen)(this.createConditionFeatures({}, featureOrRouter, featuresOrRouters)));
        this.addNestedFunctions(featureOrRouter, featuresOrRouters);
        this.isIfActive = false;
        return this;
      }
      addNestedFunctions(featureOrRouter, featuresOrRouters = []) {
        ;
        [featureOrRouter, ...featuresOrRouters].forEach((featureOrRouter2) => {
          if (featureOrRouter2 === null || featureOrRouter2 === void 0 ? void 0 : featureOrRouter2.functions) {
            Object.entries(featureOrRouter2.functions).forEach(([key, value]) => this.functions[key] = value);
          }
        });
      }
      use(plugin) {
        plugin.onRegister(this);
        return this;
      }
      createConditionFeatures(criteria, featureOrRouter, featuresOrRouters = []) {
        return [featureOrRouter, ...featuresOrRouters].map((featureOrRouter2) => typeof featureOrRouter2 === "function" ? (0, toFeature_1.toFeature)(criteria, featureOrRouter2, this) : featureOrRouter2);
      }
      matchInternal(criteria, featuresParam, options) {
        const features = (0, toFeature_1.toFeature)(criteria, featuresParam, this);
        const rule = (0, toRule_1.toRule)(criteria, features);
        this.rules.push(rule);
        this.isIfActive = false;
        return this;
      }
      matchMethod(method, criteria, features, options) {
        if (typeof criteria === "string" || criteria instanceof RegExp || criteria instanceof exact_1.ExactPath) {
          return this.match({
            method,
            path: criteria
          }, features);
        }
        if (criteria === null || criteria === void 0 ? void 0 : criteria.method) {
          throw new Error(`Invalid criteria property method passed to call to Router#${method}. Specifying a method in the criteria is redundant.`);
        }
        return this.match({ ...criteria, method }, features, options);
      }
      dir(sourcePath, features, options = {}) {
        const createInMatcher = (files) => {
          if (!files || files.length === 0)
            return;
          const paths = files.flatMap((file) => {
            var _a;
            return ((_a = options === null || options === void 0 ? void 0 : options.paths) === null || _a === void 0 ? void 0 : _a.call(options, file)) || [`/${file}`];
          }).map((path) => path.replace(/\\+/g, "/")).flatMap((path) => {
            if (!path.endsWith("/index.html"))
              return [path];
            return Array.from(/* @__PURE__ */ new Set([
              path.toString().replace(/\/index.html$/, "/"),
              path.toString().replace(/\/index.html$/, "")
            ])).filter((path2) => path2.length > 0);
          });
          this.match({ path: paths }, features);
        };
        if ((0, environment_1.isCloud)()) {
          const files = this.staticAssetsForPath(sourcePath);
          createInMatcher(files);
        } else {
          const files = Router2.collectFiles(sourcePath, options);
          this.addStaticAssetManifestEntry((0, slash_12.default)(sourcePath), files);
          createInMatcher(files);
        }
        return this;
      }
      static(sourcePath, options = {}) {
        const features = (helper) => {
          helper.serveStatic(`${sourcePath}/:path*`, {
            rewritePathSource: options === null || options === void 0 ? void 0 : options.rewritePathSource
          });
          if (options === null || options === void 0 ? void 0 : options.handler)
            options.handler(helper);
        };
        return this.dir(sourcePath, features, options);
      }
      staticAssetsForPath(path) {
        return (0, utils_1.nonWebpackRequire)((0, paths_1.getStaticAssetManifestPath)())[path];
      }
      addFunction(fn) {
        this.functions[Router2.functionIndex] = fn;
        return Router2.functionIndex++;
      }
      prerender(...preloadOptions) {
        this.preloadRequests.push(...preloadOptions);
        return this;
      }
      noIndexPermalink() {
        return this;
      }
      static collectFiles(sourcePath, options) {
        var _a;
        const directory = (0, path_1.join)((0, source_1.getSourceDir)(), sourcePath);
        const ignore = typeof options.ignore === "string" ? [options.ignore] : (_a = options.ignore) !== null && _a !== void 0 ? _a : [];
        let files = (0, requireInternal_1.default)("globby").sync(options.glob || "**/*", {
          cwd: directory,
          onlyFiles: true,
          ignore
        });
        if (options.sort) {
          files = options.sort(files);
        }
        return files;
      }
      catch(error, features) {
        let errorRegex;
        if (error instanceof RegExp) {
          errorRegex = error;
        } else {
          errorRegex = new RegExp(`^${error.toString()}$`);
        }
        return this.matchInternal({ response: { status_code: errorRegex } }, features);
      }
    };
    exports2.default = Router2;
    Router2.functionIndex = 0;
    Router2._staticAssetManifest = {};
  }
});

// node_modules/@edgio/core/router/converters/fromTimeUnitAbbrev.js
var require_fromTimeUnitAbbrev = __commonJS({
  "node_modules/@edgio/core/router/converters/fromTimeUnitAbbrev.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromTimeUnitAbbrev = void 0;
    var fromTimeUnitAbbrev = (timeInterval) => {
      var _a;
      const [_, value, unit] = (_a = timeInterval.match(/(\d+)([a-z]+)/i)) !== null && _a !== void 0 ? _a : [];
      const unitsInSec = {
        s: 1,
        h: 60 * 60,
        d: 60 * 60 * 24,
        m: 60 * 60 * 24 * 30.437,
        y: 60 * 60 * 24 * 30.437 * 12
      };
      return Number(value) * unitsInSec[unit];
    };
    exports2.fromTimeUnitAbbrev = fromTimeUnitAbbrev;
  }
});

// node_modules/@edgio/core/runtime/rules/constants.js
var require_constants2 = __commonJS({
  "node_modules/@edgio/core/runtime/rules/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NOT_IN = exports2.IN = exports2.LESS_THAN_OR_EQUALS = exports2.LESS_THAN = exports2.GREATER_THAN_OR_EQUALS = exports2.GREATER_THAN = exports2.NOT_MATCHES = exports2.MATCHES = exports2.NOT_EQUALS = exports2.NOT_EQUALS_EXPRESS = exports2.OR = exports2.AND = exports2.EQUALS = exports2.EQUALS_EXPRESS = void 0;
    exports2.EQUALS_EXPRESS = "==";
    exports2.EQUALS = "===";
    exports2.AND = "and";
    exports2.OR = "or";
    exports2.NOT_EQUALS_EXPRESS = "!=";
    exports2.NOT_EQUALS = "!==";
    exports2.MATCHES = "=~";
    exports2.NOT_MATCHES = "!~";
    exports2.GREATER_THAN = ">";
    exports2.GREATER_THAN_OR_EQUALS = ">=";
    exports2.LESS_THAN = "<";
    exports2.LESS_THAN_OR_EQUALS = "<=";
    exports2.IN = "in";
    exports2.NOT_IN = "not_in";
  }
});

// node_modules/@edgio/core/runtime/rules/RulesVisitor.js
var require_RulesVisitor = __commonJS({
  "node_modules/@edgio/core/runtime/rules/RulesVisitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RulesVisitorStop = void 0;
    var constants_1 = require_constants2();
    var RulesVisitorStop = class extends Error {
    };
    exports2.RulesVisitorStop = RulesVisitorStop;
    var RulesVisitor = class {
      constructor(callbacks = {}) {
        this.callbacks = callbacks;
      }
      onRuleVisit(callback) {
        this.callbacks.onRuleVisit = callback;
      }
      onMatchesVisit(callback) {
        this.callbacks.onMatchesVisit = callback;
      }
      onFeaturesVisit(callback) {
        this.callbacks.onFeaturesVisit = callback;
      }
      onConditionalsVisit(callback) {
        this.callbacks.onConditionalsVisit = callback;
      }
      onBooleanVisit(callback) {
        this.callbacks.onBooleanVisit = callback;
      }
      visit(rules, parentRuleIndex) {
        try {
          rules.forEach((rule, ruleIndex) => this.visitRule(rule, parentRuleIndex !== null && parentRuleIndex !== void 0 ? parentRuleIndex : ruleIndex));
        } catch (e) {
          if (e instanceof RulesVisitorStop)
            return;
          throw e;
        }
      }
      visitRule(rule, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onRuleVisit) === null || _b === void 0 ? void 0 : _b.call(_a, rule, ruleIndex);
        if (this.isMatches(rule)) {
          this.visitMatches(rule, ruleIndex);
        } else {
          this.visitFeaturesOrRules(rule, ruleIndex);
        }
      }
      visitMatches(matches, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onMatchesVisit) === null || _b === void 0 ? void 0 : _b.call(_a, matches, ruleIndex);
        const ifStatements = matches === null || matches === void 0 ? void 0 : matches.if;
        if (!ifStatements)
          return;
        ifStatements.forEach((ifStatement) => {
          if (this.isConditionals(ifStatement)) {
            this.visitConditionals(ifStatement, ruleIndex);
          } else if (this.isBoolean(ifStatement)) {
            this.visitBoolean(ifStatement, ruleIndex);
          } else {
            this.visitFeaturesOrRules(ifStatement, ruleIndex);
          }
        });
      }
      visitFeaturesOrRules(featuresOrRules, ruleIndex) {
        this.isRules(featuresOrRules) ? this.visit(featuresOrRules, ruleIndex) : this.visitFeatures(featuresOrRules, ruleIndex);
      }
      visitFeatures(features, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onFeaturesVisit) === null || _b === void 0 ? void 0 : _b.call(_a, features, ruleIndex);
      }
      visitConditionals(conditionals, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionalsVisit) === null || _b === void 0 ? void 0 : _b.call(_a, conditionals, ruleIndex);
        Object.keys(conditionals).forEach((operator) => {
          const condition = conditionals[operator];
          this.visitCondition(condition, operator, ruleIndex);
        });
      }
      visitCondition(condition, operator, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionVisit) === null || _b === void 0 ? void 0 : _b.call(_a, condition, operator, ruleIndex);
      }
      visitBoolean(boolean, ruleIndex) {
        var _a, _b, _c, _d;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onBooleanVisit) === null || _b === void 0 ? void 0 : _b.call(_a, boolean, ruleIndex);
        const booleanItemHandler = (item) => {
          if (this.isBoolean(item))
            return this.visitBoolean(item, ruleIndex);
          this.visitConditionals(item, ruleIndex);
        };
        (_c = boolean[constants_1.AND]) === null || _c === void 0 ? void 0 : _c.forEach(booleanItemHandler);
        (_d = boolean[constants_1.OR]) === null || _d === void 0 ? void 0 : _d.forEach(booleanItemHandler);
      }
      isMatches(rule) {
        return Object.keys(rule).includes("if");
      }
      isRules(rule) {
        return Array.isArray(rule);
      }
      isBoolean(condition) {
        return [constants_1.AND, constants_1.OR].some((key) => Object.keys(condition).includes(key));
      }
      isConditionals(condition) {
        return [
          constants_1.EQUALS_EXPRESS,
          constants_1.EQUALS,
          constants_1.NOT_EQUALS_EXPRESS,
          constants_1.NOT_EQUALS,
          constants_1.MATCHES,
          constants_1.NOT_MATCHES,
          constants_1.GREATER_THAN,
          constants_1.GREATER_THAN_OR_EQUALS,
          constants_1.LESS_THAN,
          constants_1.LESS_THAN_OR_EQUALS,
          constants_1.IN,
          constants_1.NOT_IN
        ].some((key) => Object.keys(condition).includes(key));
      }
      stop() {
        throw new RulesVisitorStop();
      }
    };
    exports2.default = RulesVisitor;
  }
});

// node_modules/@edgio/core/runtime/rules/RulesConditionalVisitor.js
var require_RulesConditionalVisitor = __commonJS({
  "node_modules/@edgio/core/runtime/rules/RulesConditionalVisitor.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.operatorsMap = void 0;
    var RulesVisitor_1 = __importDefault2(require_RulesVisitor());
    var constants_1 = require_constants2();
    var toRegExp_1 = __importDefault2(require_toRegExp());
    var toPathRegexp_1 = __importDefault2(require_toPathRegexp());
    exports2.operatorsMap = {
      [constants_1.EQUALS]: (l, r) => l === r,
      [constants_1.NOT_EQUALS]: (l, r) => l !== r,
      [constants_1.EQUALS_EXPRESS]: (l, r) => {
        var _a;
        return (0, toPathRegexp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
      },
      [constants_1.NOT_EQUALS_EXPRESS]: (l, r) => {
        var _a;
        return !(0, toPathRegexp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
      },
      [constants_1.LESS_THAN]: (l, r) => Number(l) < Number(r),
      [constants_1.LESS_THAN_OR_EQUALS]: (l, r) => Number(l) <= Number(r),
      [constants_1.GREATER_THAN]: (l, r) => Number(l) > Number(r),
      [constants_1.GREATER_THAN_OR_EQUALS]: (l, r) => Number(l) >= Number(r),
      [constants_1.MATCHES]: (l, r) => {
        var _a;
        return (0, toRegExp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
      },
      [constants_1.NOT_MATCHES]: (l, r) => {
        var _a;
        return !(0, toRegExp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
      },
      [constants_1.IN]: (l, r) => r === null || r === void 0 ? void 0 : r.some((item) => (l === null || l === void 0 ? void 0 : l.toString()) === (item === null || item === void 0 ? void 0 : item.toString())),
      [constants_1.NOT_IN]: (l, r) => !(r === null || r === void 0 ? void 0 : r.some((item) => (l === null || l === void 0 ? void 0 : l.toString()) === (item === null || item === void 0 ? void 0 : item.toString())))
    };
    var RulesConditionalVisitor = class extends RulesVisitor_1.default {
      constructor(evalVariableCallback, callbacks = {}) {
        super(callbacks);
        this.evalVariableCallback = evalVariableCallback;
      }
      visitMatches(matches, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onMatchesVisit) === null || _b === void 0 ? void 0 : _b.call(_a, matches, ruleIndex);
        const ifStatement = matches === null || matches === void 0 ? void 0 : matches.if;
        if (!ifStatement)
          return;
        let conditionIndex = 0;
        while (conditionIndex < matches.if.length) {
          const ifIndex = conditionIndex;
          const thenIndex = conditionIndex + 1;
          const elseIndex = conditionIndex + 2;
          const isLastCondition = elseIndex === matches.if.length - 1;
          const condition = ifStatement[ifIndex];
          let conditionResult = false;
          if (this.isConditionals(condition)) {
            conditionResult = this.evalConditionals(condition, ruleIndex);
          } else if (this.isBoolean(condition)) {
            conditionResult = this.evalBoolean(condition, ruleIndex);
          } else {
            throw new Error(`Unsupported operator "${Object.keys(condition).pop()}".`);
          }
          if (conditionResult) {
            this.visitFeaturesOrRules(ifStatement[thenIndex], ruleIndex);
          } else if (isLastCondition) {
            this.visitFeaturesOrRules(ifStatement[elseIndex], ruleIndex);
          }
          if (isLastCondition) {
            break;
          }
          conditionIndex += 2;
        }
      }
      evalBoolean(boolean, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onBooleanVisit) === null || _b === void 0 ? void 0 : _b.call(_a, boolean, ruleIndex);
        const booleanItemHandler = (item) => {
          if (this.isBoolean(item))
            return this.evalBoolean(item, ruleIndex);
          return this.evalConditionals(item, ruleIndex);
        };
        if (boolean[constants_1.AND]) {
          return boolean[constants_1.AND].every(booleanItemHandler);
        }
        if (boolean[constants_1.OR]) {
          return boolean[constants_1.OR].some(booleanItemHandler);
        }
        return false;
      }
      evalConditionals(conditionals, ruleIndex) {
        var _a, _b;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionalsVisit) === null || _b === void 0 ? void 0 : _b.call(_a, conditionals, ruleIndex);
        const operators = Object.keys(conditionals);
        if (operators.length !== 1) {
          throw new Error(`Conditional statements must contain a single operator. The following operators were found: ${operators.join(", ")}`);
        }
        const [operator, condition] = Object.entries(conditionals)[0];
        return this.evalCondition(condition, operator, ruleIndex);
      }
      evalCondition(condition, operator, ruleIndex) {
        var _a, _b, _c;
        (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionVisit) === null || _b === void 0 ? void 0 : _b.call(_a, condition, operator, ruleIndex);
        const [left, right] = condition.map((operand) => this.evalOperand(operand));
        return (_c = exports2.operatorsMap === null || exports2.operatorsMap === void 0 ? void 0 : exports2.operatorsMap[operator]) === null || _c === void 0 ? void 0 : _c.call(exports2.operatorsMap, left, right);
      }
      evalOperand(operand) {
        if (operand == null || typeof operand === "string" || typeof operand === "boolean" || typeof operand === "number" || Array.isArray(operand)) {
          return operand;
        }
        return this.evalVariableCallback(operand);
      }
    };
    exports2.default = RulesConditionalVisitor;
  }
});

// node_modules/@edgio/core/utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/@edgio/core/utils/deepMerge.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function deepMerge(obj1, obj2, depth = 0) {
      let merged = {
        ...obj1 && typeof obj1 === "object" ? obj1 : {},
        ...obj2 && typeof obj2 === "object" ? obj2 : {}
      };
      if (depth === 0)
        return merged;
      Object.keys(merged).forEach((key) => {
        const obj1DeepValue = obj1 && obj1[key];
        const obj2DeepValue = obj2 && obj2[key];
        if (typeof obj1DeepValue === "object" && typeof obj2DeepValue === "object") {
          merged[key] = deepMerge(obj1DeepValue, obj2DeepValue, depth - 1);
        }
      });
      return merged;
    }
    exports2.default = deepMerge;
  }
});

// node_modules/@edgio/core/router/CacheManifest.js
var require_CacheManifest = __commonJS({
  "node_modules/@edgio/core/router/CacheManifest.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CacheManifest = void 0;
    var constants_1 = require_constants();
    var fromTimeUnitAbbrev_1 = require_fromTimeUnitAbbrev();
    var RulesConditionalVisitor_1 = __importDefault2(require_RulesConditionalVisitor());
    var deepMerge_1 = __importDefault2(require_deepMerge());
    var CacheManifest = class {
      constructor() {
        this.rules = [];
      }
      static from(obj) {
        return Object.assign(new CacheManifest(), obj);
      }
      shouldPrefetch(url) {
        let matchedFeatures = {};
        new RulesConditionalVisitor_1.default(this.getEvalVariableCallback(url), {
          onFeaturesVisit: (features) => {
            var _a;
            if ((_a = features === null || features === void 0 ? void 0 : features.comment) === null || _a === void 0 ? void 0 : _a.includes(constants_1.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT)) {
              return;
            }
            matchedFeatures = (0, deepMerge_1.default)(matchedFeatures, features, 3);
          }
        }).visit(this.rules);
        return this.isCacheable(matchedFeatures);
      }
      getEvalVariableCallback(url) {
        return (variable) => {
          var _a;
          if (variable["request"]) {
            const param = variable["request"];
            if (param === "method")
              return "GET";
            if (param === "origin_path")
              return url.pathname;
            if (param === "path")
              return url.pathname;
            if (param === "origin_query_string")
              return url.search.split("?")[1];
            if (param === "query")
              return url.search.split("?")[1];
            if (param === "querystring")
              return url.search.split("?")[1];
            if (param === "scheme")
              return url.protocol.replace(":", "").toUpperCase();
          }
          if (variable["request.origin_query"]) {
            return url.searchParams.get(variable["request.origin_query"]) || void 0;
          }
          if (variable["request.path"]) {
            const param = variable["request.path"];
            if (param === "filename")
              return url.pathname.split("/").pop();
            if (param === "directory")
              return (_a = url.pathname.match(/(.*)[/\\]/)) === null || _a === void 0 ? void 0 : _a[1];
            if (param === "extension") {
              const extension = url.pathname.split(".").pop();
              return extension ? `.${extension}` : void 0;
            }
          }
          return void 0;
        };
      }
      isCacheable(features) {
        const { caching } = features;
        return Boolean((caching === null || caching === void 0 ? void 0 : caching.max_age) !== void 0 && (caching === null || caching === void 0 ? void 0 : caching.service_worker_max_age) && (0, fromTimeUnitAbbrev_1.fromTimeUnitAbbrev)(caching.service_worker_max_age) > 0 && !(caching === null || caching === void 0 ? void 0 : caching.bypass_cache));
      }
      serialize() {
        return `self.${constants_1.EDGIO_CACHE_MANIFEST_JS_VAR_NAME}=${JSON.stringify(this)}`;
      }
    };
    exports2.CacheManifest = CacheManifest;
  }
});

// node_modules/@edgio/core/router/addBuildInRoutes.js
var require_addBuildInRoutes = __commonJS({
  "node_modules/@edgio/core/router/addBuildInRoutes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var environment_1 = require_environment();
    var constants_1 = require_constants();
    var RouteCriteria_1 = require_RouteCriteria();
    var CacheManifest_1 = require_CacheManifest();
    var origins_1 = require_origins();
    function addBuiltInRoutes(router) {
      try {
        require("@edgio/devtools/addBuiltInRoutes")({
          router,
          local: (0, environment_1.isLocal)()
        });
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND") {
          throw e;
        }
      }
      if (!router.routerOptions.indexPermalink) {
        router.match({
          headers: {
            host: constants_1.HOSTS_NOINDEX_PERMALINK_REGEX
          }
        }, {
          headers: {
            add_response_headers: {
              "x-robots-tag": "nofollow, noindex"
            }
          }
        });
      }
      if (router.routerOptions.compressStaticAssets !== false) {
        router.always({
          response: {
            compress_content_types: [
              "text/html",
              "text/css",
              "text/xml",
              "text/plain",
              "text/javascript",
              "application/javascript",
              "application/x-javascript",
              "application/json",
              "application/xml",
              "image/svg+xml",
              "font/otf",
              "font/ttf",
              "font/woff",
              "font/woff2"
            ]
          },
          comment: "Compress static assets"
        });
      }
      if ((0, environment_1.isLocal)()) {
        router.match(constants_1.EDGIO_CACHE_MANIFEST_PATH, ({ compute }) => {
          compute(async (req, res) => {
            const cacheManifest = CacheManifest_1.CacheManifest.from({
              rules: router.rules
            });
            res.body = cacheManifest.serialize();
            res.setHeader("content-type", "application/javascript");
          });
        });
      }
      if ((0, environment_1.isLocal)()) {
        router.if((0, RouteCriteria_1.or)({
          path: constants_1.EDGIO_PREFETCH_CDN_PATH
        }, {
          path: constants_1.EDGIO_PREFETCH_CDN_SW_PATH
        }), ({ proxy, cache }) => {
          proxy(origins_1.PREFETCH_ORIGIN_NAME);
          cache({
            edge: {
              maxAgeSeconds: 60 * 60
            }
          });
        });
      }
    }
    exports2.default = addBuiltInRoutes;
  }
});

// node_modules/@edgio/core/router/EdgioRoutes.js
var require_EdgioRoutes = __commonJS({
  "node_modules/@edgio/core/router/EdgioRoutes.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var addBuildInRoutes_1 = __importDefault2(require_addBuildInRoutes());
    var EdgioRoutes = class {
      onRegister(router) {
        (0, addBuildInRoutes_1.default)(router);
      }
    };
    exports2.default = EdgioRoutes;
  }
});

// node_modules/@edgio/core/router/CustomCacheKey.js
var require_CustomCacheKey = __commonJS({
  "node_modules/@edgio/core/router/CustomCacheKey.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var CustomCacheKey = class {
      constructor() {
        this.excludeAllQueryParametersFlag = false;
        this.excludeQueryParametersFlag = [];
        this.excludeAllQueryParametersExceptFlag = [];
        this.headersFlag = [];
        this.cookiesFlag = [];
        this.removeMethodFlag = false;
        this.isBotFlag = false;
        this.vendorFlag = false;
        this.deviceFlag = false;
        this.browserFlag = false;
      }
      excludeAllQueryParameters() {
        this.excludeAllQueryParametersFlag = true;
        return this;
      }
      excludeQueryParameters(...names) {
        this.excludeQueryParametersFlag = [...this.excludeQueryParametersFlag, ...names];
        return this;
      }
      excludeAllQueryParametersExcept(...names) {
        this.excludeAllQueryParametersExceptFlag = [
          ...this.excludeAllQueryParametersExceptFlag,
          ...names
        ];
        return this;
      }
      addHeader(name) {
        this.headersFlag = [...this.headersFlag, name];
        return this;
      }
      addCookie(name) {
        this.cookiesFlag = [...this.cookiesFlag, name];
        return this;
      }
      removeMethod() {
        this.removeMethodFlag = true;
        return this;
      }
      removeBody() {
        throw new Error("Not supported");
      }
      addDevice() {
        this.deviceFlag = true;
        return this;
      }
      addVendor() {
        this.vendorFlag = true;
        return this;
      }
      addIsBot() {
        this.isBotFlag = true;
        return this;
      }
      addBrowser() {
        this.browserFlag = true;
        return this;
      }
      applyCaching(features) {
        if (features.caching === void 0) {
          features.caching = {};
        }
        const { caching } = features;
        const shouldOverwriteCache = this.excludeQueryParametersFlag.length > 0 || this.excludeAllQueryParametersExceptFlag.length > 0 || this.excludeAllQueryParametersFlag || this.headersFlag.length > 0 || this.cookiesFlag.length > 0 || this.isBotFlag || this.vendorFlag || this.deviceFlag || this.browserFlag;
        if (shouldOverwriteCache && caching.cache_key === void 0) {
          caching.cache_key = {};
        }
        if (this.excludeAllQueryParametersFlag) {
          caching.cache_key.exclude_all_query_params = true;
        }
        if (this.excludeQueryParametersFlag.length > 0) {
          caching.cache_key.include_all_query_params_except = this.excludeQueryParametersFlag;
        }
        if (this.excludeAllQueryParametersExceptFlag.length > 0) {
          caching.cache_key.include_query_params = this.excludeAllQueryParametersExceptFlag;
        }
        if (this.headersFlag.length > 0) {
          caching.cache_key.include_headers = this.headersFlag;
        }
        if (this.cookiesFlag.length > 0) {
          caching.cache_key.include_cookies = this.cookiesFlag;
        }
        let expressions = [];
        if (this.deviceFlag) {
          expressions = [
            ...expressions,
            `/device:smartphone_%{wurfl_vcap_is_smartphone}_tablet_%{wurfl_cap_is_tablet}_desktop_%{wurfl_vcap_is_full_desktop}`
          ];
        }
        if (this.isBotFlag) {
          expressions = [...expressions, `/bot:%{wurfl_vcap_is_robot}`];
        }
        if (this.vendorFlag) {
          expressions = [
            ...expressions,
            `/vendor:ios_%{wurfl_vcap_is_ios}_adndroid_%{wurfl_vcap_is_android}`
          ];
        }
        if (this.browserFlag) {
          expressions = [...expressions, `/browser:%{wurfl_cap_mobile_browser}`];
        }
        if (expressions.length > 0) {
          caching.cache_key.include_expressions = expressions;
        }
        if (this.removeMethodFlag) {
          caching.enable_caching_for_methods = void 0;
        }
      }
    };
    exports2.default = CustomCacheKey;
  }
});

// node_modules/@edgio/core/router/index.js
var require_router = __commonJS({
  "node_modules/@edgio/core/router/index.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.edgioRoutes = exports2.CustomCacheKey = exports2.Router = exports2.RouteHelper = void 0;
    var EdgioRoutes_1 = __importDefault2(require_EdgioRoutes());
    var RouteHelper_1 = require_RouteHelper();
    Object.defineProperty(exports2, "RouteHelper", { enumerable: true, get: function() {
      return __importDefault2(RouteHelper_1).default;
    } });
    var Router_1 = require_Router();
    Object.defineProperty(exports2, "Router", { enumerable: true, get: function() {
      return __importDefault2(Router_1).default;
    } });
    var CustomCacheKey_1 = require_CustomCacheKey();
    Object.defineProperty(exports2, "CustomCacheKey", { enumerable: true, get: function() {
      return __importDefault2(CustomCacheKey_1).default;
    } });
    exports2.edgioRoutes = new EdgioRoutes_1.default();
  }
});

// node_modules/@edgio/core/runtime/LambdaRequest.js
var require_LambdaRequest = __commonJS({
  "node_modules/@edgio/core/runtime/LambdaRequest.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var QueryString = __importStar(require_lib());
    var environment_1 = require_environment();
    var constants_1 = require_constants();
    var LambdaRequest = class {
      constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.url = "/";
        this.path = "/";
        this.rawHeaders = [];
        this.query = {};
        this.method = "GET";
        this.protocol = "http";
        this.secure = true;
        this.socket = { remoteAddress: "127.0.0.1", encrypted: true };
        this.connection = { encrypted: true };
        this.httpVersion = "1.1";
        this.port = "443";
        this.options = options;
        this.invokeAction = options.invokeAction;
        this.invokeSource = options.invokeSource;
        this.url = options.url.pathname + ((_a = options.url.search) !== null && _a !== void 0 ? _a : "");
        this.query = QueryString.parse((_b = options.url.search) !== null && _b !== void 0 ? _b : "", { ignoreQueryPrefix: true });
        this.rawUrl = options.rawUrl;
        this.path = options.url.pathname;
        this.method = (_c = options.method) !== null && _c !== void 0 ? _c : this.method;
        this.headers = normalizeHeaders((_d = options.headers) !== null && _d !== void 0 ? _d : {});
        const host = options.url.host || this.getHeader(constants_1.HTTP_HEADERS.xHost) || this.getHeader(constants_1.HTTP_HEADERS.host);
        this.setHeader("host", host || "localhost");
        for (const key of Object.keys(this.headers)) {
          const header = this.headers[key];
          for (const value of Array.isArray(header) ? header : [header]) {
            this.rawHeaders.push(key);
            this.rawHeaders.push(value);
          }
        }
        this.httpVersion = (_e = options.httpVersion) !== null && _e !== void 0 ? _e : this.httpVersion;
        this.socket.remoteAddress = ((_h = (_g = (_f = this.getHeader(constants_1.HTTP_HEADERS.xForwardedFor)) === null || _f === void 0 ? void 0 : _f.toString()) === null || _g === void 0 ? void 0 : _g.split(",")) === null || _h === void 0 ? void 0 : _h[0]) || this.socket.remoteAddress;
        if (options.url.protocol) {
          this.protocol = (_j = options.url.protocol) === null || _j === void 0 ? void 0 : _j.replace(":", "");
        } else if (!(0, environment_1.isLocal)()) {
          const xbpProtocol = (_k = this.getHeader(constants_1.HTTP_HEADERS.x0Protocol)) === null || _k === void 0 ? void 0 : _k.toString();
          const viaProtocol = (_p = (_o = (_m = (_l = this.getHeader(constants_1.HTTP_HEADERS.via)) === null || _l === void 0 ? void 0 : _l.toString()) === null || _m === void 0 ? void 0 : _m.split("/")) === null || _o === void 0 ? void 0 : _o.shift()) === null || _p === void 0 ? void 0 : _p.toLowerCase();
          const xForwardedProtocol = (_r = (_q = this.getHeader(constants_1.HTTP_HEADERS.xForwardedProto)) === null || _q === void 0 ? void 0 : _q.toString()) === null || _r === void 0 ? void 0 : _r.toLowerCase();
          this.protocol = xbpProtocol || viaProtocol || xForwardedProtocol || "https";
        }
        this.port = options.url.port || this.protocol === "https" ? "443" : "80";
        this.setHeader(constants_1.HTTP_HEADERS.xForwardedProto, this.protocol);
        this.setHeader(constants_1.HTTP_HEADERS.xForwardedPort, this.port);
        this.setHeader(constants_1.HTTP_HEADERS.xForwardedFor, this.socket.remoteAddress);
        this.secure = this.protocol === "https";
        this.socket.encrypted = this.secure;
        this.connection.encrypted = this.secure;
        this._rawBody = options.rawBody || Buffer.from((_s = options.body) !== null && _s !== void 0 ? _s : "");
      }
      static async fromNodeRequest(request) {
        var _a;
        const body = await new Promise((resolve) => {
          const bodyParts = [];
          let body2;
          request.on("data", (chunk) => {
            bodyParts.push(chunk);
          }).on("end", () => {
            body2 = Buffer.concat(bodyParts);
            resolve(body2);
          });
        });
        const url = new URL(request.url, `http://${request.headers.host}`);
        const invokeAction = request.headers[constants_1.HTTP_HEADERS.xEdgInvokeAction];
        const invokeSource = request.headers[constants_1.HTTP_HEADERS.xEdgInvokeSource];
        const rawUrl = ((_a = request.headers[constants_1.HTTP_HEADERS.xEdgRawUrl]) === null || _a === void 0 ? void 0 : _a.toString()) || `${url.pathname}${url.search}`;
        return new LambdaRequest({
          url: {
            pathname: url.pathname.replace(/\/+/g, "/"),
            search: url.search
          },
          rawUrl,
          method: request.method,
          headers: request.headers,
          body,
          invokeAction,
          invokeSource
        });
      }
      cloneOriginal() {
        return new LambdaRequest(this.options);
      }
      setHeader(name, value) {
        this.headers[name.toLowerCase()] = value;
      }
      getHeader(name) {
        return this.headers[name.toLowerCase()];
      }
      getHeaders() {
        return this.headers;
      }
      removeHeader(name) {
        delete this.headers[name.toLowerCase()];
      }
      get body() {
        return this.rawBody.toString("utf8");
      }
      set body(value) {
        this.rawBody = Buffer.from(value || "");
      }
      get rawBody() {
        return this._rawBody;
      }
      set rawBody(value) {
        this._rawBody = value;
        this.setHeader(constants_1.HTTP_HEADERS.contentLength, this.rawBody.length.toString());
      }
    };
    exports2.default = LambdaRequest;
    function normalizeHeaders(headers) {
      let result = {};
      for (let name in headers) {
        const header = headers[name];
        result[name.toLowerCase()] = Array.isArray(header) && header.length === 1 ? header[0] : header;
      }
      return result;
    }
  }
});

// node_modules/@edgio/core/utils/idUtils.js
var require_idUtils = __commonJS({
  "node_modules/@edgio/core/utils/idUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateRandomId = void 0;
    function generateRandomId(length = 10) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    exports2.generateRandomId = generateRandomId;
  }
});

// node_modules/@edgio/core/lambda/serverMetrics.js
var require_serverMetrics = __commonJS({
  "node_modules/@edgio/core/lambda/serverMetrics.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.metrics = void 0;
    var idUtils_1 = require_idUtils();
    var constants_1 = require_constants();
    exports2.metrics = {
      serverId: (0, idUtils_1.generateRandomId)(),
      _handlerId: void 0,
      get handlerId() {
        if (this._handlerId)
          return this._handlerId;
        process.argv.find((arg) => {
          var _a;
          return this._handlerId = (_a = arg.match(/^--handler-id=(.+)$/)) === null || _a === void 0 ? void 0 : _a[1];
        });
        this._handlerId = this._handlerId || "UNKNOWN_HANDLER_ID";
        return this._handlerId;
      },
      appStartedAt: void 0,
      appReadyAt: void 0,
      serverErrorCount: 0,
      via: constants_1.EDGIO_VIA_HEADER_VALUE,
      get appReadyTime() {
        return this.appReadyAt && this.appStartedAt ? this.appReadyAt - this.appStartedAt : 0;
      },
      get serverRss() {
        const { rss } = process.memoryUsage();
        return Math.round(rss / 1024 / 1024 * 100) / 100;
      },
      serialize() {
        const shortcuts = {
          sid: this.serverId,
          art: this.appReadyTime,
          srss: this.serverRss,
          sec: this.serverErrorCount
        };
        return Object.entries(shortcuts).map(([key, value]) => `${key}=${value}`).join(",");
      }
    };
  }
});

// node_modules/@edgio/core/runtime/LambdaResponse.js
var require_LambdaResponse = __commonJS({
  "node_modules/@edgio/core/runtime/LambdaResponse.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var stream_1 = require("stream");
    var serverMetrics_1 = require_serverMetrics();
    var constants_1 = require_constants();
    var log_1 = __importDefault2(require_log());
    var LambdaResponse = class {
      constructor(responseStream, isDirectStream = false, originalStream = void 0) {
        this.isDirectStream = isDirectStream;
        this.originalStream = originalStream;
        this.chunks = [];
        this.encodedChunks = [];
        this.onStream = () => {
        };
        this.onEnd = () => {
        };
        this.onHeaders = () => {
        };
        this.onFlush = () => {
        };
        this.isHeadersStreamed = false;
        this.isEnded = false;
        this.isDownstreamInit = false;
        this.isStreaming = false;
        this.isStreamableCallback = () => false;
        this.statusCode = 200;
        this.statusMessage = "OK";
        this.headers = {};
        this.byteLength = 0;
        this.maxByteLength = 128 * 1e3 * 1e3;
        this.initDownstream();
        this.isDownstreamInit = false;
        this.responseStream = responseStream;
      }
      sendResponse(data) {
        this === null || this === void 0 ? void 0 : this.write(data);
      }
      static fromAwsResponseStream(awsResponseStream) {
        if (!awslambda) {
          throw new Error("StreamingAwsResponse can only be used in an AWS Lambda environment.");
        }
        let awsResponseStreamProxy = awsResponseStream;
        const passThrough = new stream_1.PassThrough().on("data", (chunk) => awsResponseStreamProxy.write(chunk)).on("end", () => awsResponseStreamProxy.end());
        const res = new LambdaResponse(passThrough, false, awsResponseStream);
        res.setOnHeaders(() => {
          const httpResponseMetadata = {
            statusCode: res.statusCode,
            headers: res.headers
          };
          awsResponseStreamProxy = awslambda.HttpResponseStream.from(awsResponseStreamProxy, httpResponseMetadata);
        });
        return res;
      }
      static fromNodeResponse(response) {
        const res = new LambdaResponse(response);
        res.setOnHeaders(() => {
          response.writeHead(res.statusCode, res.statusMessage, res.headers);
        });
        return res;
      }
      setHeader(name, value) {
        this.headers[name.toLowerCase()] = value;
      }
      removeHeader(name) {
        delete this.headers[name.toLowerCase()];
      }
      getHeader(name) {
        return this.headers[name.toLowerCase()];
      }
      getHeaders() {
        return this.headers;
      }
      clear() {
        this.chunks = [];
        this.byteLength = 0;
      }
      clearHeaders() {
        Object.keys(this.headers).forEach((header) => this.removeHeader(header));
      }
      isCachable() {
        return !this.isDirectStream && this.byteLength < this.maxByteLength;
      }
      async write(chunk) {
        if (this.chunks.length === 0)
          this.setIsStreamable(this.isStreamable());
        this.chunks.push(chunk);
        this.isStreamable() && await this.onStream();
      }
      async end() {
        this.addMetrics();
        if (!this.isStreamable() && this.chunks.length > 0 && this.body && this.body.length > 0) {
          this.chunks = [this.body];
          log_1.default.trace("[LambdaResponse] Found both chunks and body. Synced body => chunks");
        }
        if (!this.isStreamable() && this.chunks.length === 0 && this.body) {
          this.chunks = [this.body];
          log_1.default.trace("[LambdaResponse] Found just body. Synced body => chunks");
        }
        if (!this.isStreamable() && this.chunks.length > 0 && !this.body) {
          this.body = Buffer.concat(this.chunks.map((chunk) => Buffer.from(chunk || "")));
          log_1.default.trace("[LambdaResponse] Found just chunks. Synced chunks => body");
        }
        if (this.chunks.length === 0 || this.chunks[this.chunks.length - 1] !== null) {
          this.chunks.push(null);
        }
        if (this.chunks.length === 1) {
          this.isStreamable() && await this.onStream();
        }
      }
      setEncoder(value) {
        this.encoder = value;
      }
      setDecoder(value) {
        this.decoder = value;
      }
      setDirectStream(value) {
        this.isDirectStream = value;
      }
      stream() {
        this.isStreaming = true;
        if (!this.isHeadersStreamed) {
          this.onHeaders();
          this.isHeadersStreamed = true;
        }
        this.chunks.forEach((chunk) => this.downstream.push(chunk));
        this.chunks = [];
      }
      async waitForFlush() {
        return this.isStreaming ? new Promise((resolve) => {
          this.onFlush = resolve;
          this.isEnded && resolve();
        }) : Promise.resolve(true);
      }
      initDownstream() {
        if (!this.isDownstreamInit) {
          this.isDownstreamInit = true;
          this.downstream = new stream_1.Stream.Readable({
            read: () => {
            }
          });
          let curPipe = this.downstream;
          this.decoder && (curPipe = curPipe.pipe(this.decoder));
          this.encoder && (curPipe = curPipe.pipe(this.encoder));
          curPipe.pipe(new stream_1.PassThrough().on("data", (chunk) => {
            var _a;
            (_a = this.responseStream) === null || _a === void 0 ? void 0 : _a.write(chunk);
            if (!this.isDirectStream) {
              this.byteLength += Buffer.byteLength(chunk);
              this.byteLength < this.maxByteLength && this.encodedChunks.push(chunk);
            }
          }).on("end", () => {
            if (this.responseStream) {
              this.responseStream.end();
            } else {
              if (this.encodedChunks.length > 0) {
                if (this.byteLength < this.maxByteLength) {
                  this.body = Buffer.concat(this.encodedChunks);
                } else {
                  this.statusCode = 413;
                  this.statusMessage = "Content Too Large";
                }
              }
            }
            this.encodedChunks.push(null);
            this.isEnded = true;
            this.onFlush();
            this.onEnd();
          }));
        }
      }
      setIsStreamable(callback) {
        if (typeof callback === "boolean") {
          return this.isStreamableCallback = () => callback;
        }
        this.isStreamableCallback = callback;
      }
      isStreamable() {
        return this.isStreamableCallback();
      }
      setOnStream(callback) {
        this.onStream = callback;
      }
      setOnEnd(callback) {
        this.onEnd = callback;
      }
      setOnHeaders(callback) {
        this.onHeaders = callback;
      }
      getData() {
        return {
          body: this.body,
          statusCode: this.statusCode,
          statusMessage: this.statusMessage,
          headers: this.headers
        };
      }
      addMetrics() {
        this.setHeader(constants_1.HTTP_HEADERS.xEdgeT, serverMetrics_1.metrics.serialize());
        this.setHeader(constants_1.HTTP_HEADERS.xEdgeStatus, `s=${this.statusCode}`);
      }
      prefixResponseHeader(headerName, prefixValue) {
        const headerValue = this.headers[headerName];
        if (headerValue) {
          if (Array.isArray(headerValue)) {
            headerValue[0] = `${prefixValue},${headerValue[0]}`;
          } else {
            this.headers[headerName] = `${prefixValue},${headerValue}`;
          }
        } else {
          this.headers[headerName] = `${prefixValue}`;
        }
      }
    };
    exports2.default = LambdaResponse;
  }
});

// node_modules/@edgio/core/index.js
var require_core = __commonJS({
  "node_modules/@edgio/core/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LambdaResponse = exports2.LambdaRequest = exports2.edgioRoutes = exports2.exact = exports2.not = exports2.or = exports2.and = exports2.getConfig = exports2.Router = void 0;
    var Router_1 = require_Router();
    Object.defineProperty(exports2, "Router", { enumerable: true, get: function() {
      return __importDefault2(Router_1).default;
    } });
    __exportStar(require_constants(), exports2);
    var config_1 = require_config();
    Object.defineProperty(exports2, "getConfig", { enumerable: true, get: function() {
      return config_1.getConfig;
    } });
    var RouteCriteria_1 = require_RouteCriteria();
    Object.defineProperty(exports2, "and", { enumerable: true, get: function() {
      return RouteCriteria_1.and;
    } });
    Object.defineProperty(exports2, "or", { enumerable: true, get: function() {
      return RouteCriteria_1.or;
    } });
    Object.defineProperty(exports2, "not", { enumerable: true, get: function() {
      return RouteCriteria_1.not;
    } });
    var exact_1 = require_exact();
    Object.defineProperty(exports2, "exact", { enumerable: true, get: function() {
      return __importDefault2(exact_1).default;
    } });
    var router_1 = require_router();
    Object.defineProperty(exports2, "edgioRoutes", { enumerable: true, get: function() {
      return router_1.edgioRoutes;
    } });
    var LambdaRequest_1 = require_LambdaRequest();
    Object.defineProperty(exports2, "LambdaRequest", { enumerable: true, get: function() {
      return __importDefault2(LambdaRequest_1).default;
    } });
    var LambdaResponse_1 = require_LambdaResponse();
    Object.defineProperty(exports2, "LambdaResponse", { enumerable: true, get: function() {
      return __importDefault2(LambdaResponse_1).default;
    } });
  }
});

// node_modules/@edgio/connectors/utils/ConnectorFactory.js
var require_ConnectorFactory = __commonJS({
  "node_modules/@edgio/connectors/utils/ConnectorFactory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var config_1 = require_config();
    var utils_1 = require_utils();
    var path_1 = require("path");
    var ConnectorFactory = class {
      static get(name) {
        var _a;
        const connectorName = name !== null && name !== void 0 ? name : (_a = (0, config_1.getConfig)().connector) === null || _a === void 0 ? void 0 : _a.split("/")[1];
        if (connectorName === "connectors") {
          throw new Error(`The @edgio/connectors package is not a valid connector. Please specify a connector name such as '@edgio/express', '@edgio/astro', etc...`);
        }
        if (!connectorName) {
          throw new Error(`Connector '${connectorName}' doesn't exist.`);
        }
        return (0, utils_1.nonWebpackRequire)((0, path_1.join)("@edgio/connectors/frameworks", connectorName)).default;
      }
    };
    exports2.default = ConnectorFactory;
  }
});

// node_modules/@edgio/connectors/utils/ConnectorRoutes.js
var require_ConnectorRoutes = __commonJS({
  "node_modules/@edgio/connectors/utils/ConnectorRoutes.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var core_1 = require_core();
    var ConnectorFactory_1 = __importDefault2(require_ConnectorFactory());
    var environment_1 = require_environment();
    var ConnectorRoutes = class {
      onRegister(router) {
        var _a;
        const config = (0, core_1.getConfig)();
        const connector = ConnectorFactory_1.default.get();
        const withServerless = typeof connector.withServerless === "function" ? connector.withServerless(config) : connector.withServerless;
        if (withServerless && router.Config.proxyToServerlessByDefault !== false) {
          router.match("/:path*", ({ renderWithApp }) => {
            renderWithApp();
          });
        }
        if ((0, environment_1.isProductionBuild)()) {
          const staticFolder = typeof connector.staticFolder === "function" ? connector.staticFolder(config) : connector.staticFolder;
          const static404Error = typeof connector.static404Error === "function" ? connector.static404Error(config) : connector.static404Error;
          if (static404Error) {
            router.match("/:path*", ({ serveStatic }) => {
              serveStatic(`${staticFolder ? `${staticFolder}/` : ""}${static404Error}`.replace(/\/+/g, "/"));
            });
          }
          if (staticFolder) {
            router.static(staticFolder);
          }
        }
        (_a = connector.onRegister) === null || _a === void 0 ? void 0 : _a.call(connector, router);
        connector.withServiceWorker && router.match("/service-worker.js", ({ serviceWorker }) => {
          serviceWorker();
        });
        router.use(core_1.edgioRoutes);
      }
    };
    exports2.default = ConnectorRoutes;
  }
});

// node_modules/@edgio/connectors/index.js
var require_connectors = __commonJS({
  "node_modules/@edgio/connectors/index.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.connectorRoutes = void 0;
    var ConnectorRoutes_1 = __importDefault2(require_ConnectorRoutes());
    exports2.connectorRoutes = new ConnectorRoutes_1.default();
  }
});

// routes.js
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_core = __toESM(require_core());
var import_connectors = __toESM(require_connectors());
var routes_default = new import_core.Router().use(import_connectors.connectorRoutes).static("public");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * path-root <https://github.com/jonschlinkert/path-root>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * path-root-regex <https://github.com/jonschlinkert/path-root-regex>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
//# sourceMappingURL=routes.cjs.map
