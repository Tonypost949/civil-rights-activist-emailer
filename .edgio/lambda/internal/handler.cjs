"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lambda/handler.ts
var handler_exports = {};
__export(handler_exports, {
  addMetrics: () => addMetrics,
  clearServer: () => clearServer,
  containsHeaderOverLimit: () => containsHeaderOverLimit,
  getHandlerHeapLimit: () => getHandlerHeapLimit,
  getServerHeapLimit: () => getServerHeapLimit,
  handleError: () => handleError,
  handleServerError: () => handleServerError,
  handleServerResponse: () => handleServerResponse,
  handleTimeoutError: () => handleTimeoutError,
  handler: () => handler,
  shapeResponseForEvent: () => shapeResponseForEvent,
  spawnServer: () => spawnServer
});
module.exports = __toCommonJS(handler_exports);

// src/utils/ports.ts
var port = Number(process.env.PORT) || 3e3;
var jsPort = port + 1;
var assetPort = port + 2;
var handlerPort = port + 1e3;
var localhost = "127.0.0.1";
var localhostWithPort = `${localhost}:${port}`;

// src/lambda/handler.ts
var import_http = __toESM(require("http"));

// src/constants.ts
var EDGIO_ENV_VARIABLES = {
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
var EDGIO_CLOUD_FUNCTIONS_HINT_HEADER = "x-cloud-functions-hint";
var HTTP_HEADERS = {
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
  xCloudFunctionsHint: EDGIO_CLOUD_FUNCTIONS_HINT_HEADER,
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
var EDGIO_PREFETCH_CDN_BASE_PATH = "/__edgio__/prefetch";
var EDGIO_PREFETCH_CDN_PATH = `${EDGIO_PREFETCH_CDN_BASE_PATH}/:path*`;
var INVOKE_SOURCES = {
  functionUrl: "function-url",
  console: "console",
  bufferProxy: "buffer-proxy"
};
var INVOKE_ACTIONS = {
  getEdgeConfig: "getEdgeConfig",
  getPreloadConfig: "getPreloadConfig",
  serverless: "serverless",
  simulator: "simulator"
};
var EDGIO_READY_MESSAGE = "> Edgio ready on ";

// src/lambda/handler.ts
var import_v8 = require("v8");

// src/log.ts
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["TRACE"] = 0] = "TRACE";
  LogLevel2[LogLevel2["DEBUG"] = 1] = "DEBUG";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  return LogLevel2;
})(LogLevel || {});
var key = process.env.LOG_LEVEL?.toUpperCase();
var configuredLogLevel = key ? LogLevel[key] : 2 /* INFO */;
var logger = {
  trace(...params) {
    logger.log(0 /* TRACE */, ...params);
  },
  debug(...params) {
    logger.log(1 /* DEBUG */, ...params);
  },
  info(...params) {
    logger.log(2 /* INFO */, ...params);
  },
  warn(...params) {
    logger.log(3 /* WARN */, ...params);
  },
  error(...params) {
    logger.log(4 /* ERROR */, ...params);
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
var log_default = logger;

// src/errors/EdgioError.ts
var EdgioError = class extends Error {
  constructor({
    title,
    message,
    statusCode,
    statusMessage,
    level,
    details,
    stack
  }) {
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
    let values = {
      title: this.title,
      message: this.message,
      statusCode: this.statusCode,
      statusMessage: this.statusMessage,
      level: this.level,
      details: this.details
    };
    if (options?.requestId)
      values.requestId = options.requestId;
    if (options?.includeStack)
      values.stack = this.stack?.split("\n");
    if (options.type === "json") {
      return JSON.stringify(values, null, 2);
    }
    return getEdgioErrorAsHtml(values);
  }
  getType() {
    return "EdgioError";
  }
};
var isEdgioError = (error) => {
  return error.getType && error.getType() === "EdgioError";
};
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

// src/errors/edgioErrorLinks.ts
var supportLink = '<a href="https://edg.io/contact-support">support</a>';
var serverLogsLink = '<a href="https://docs.edg.io/guides/v7/logs/server_logs">server logs</a>';
var jsPerformanceProfilingLink = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance">JS performance profiling</a>';
var limitsLink = '<a href="https://docs.edg.io/guides/v7/performance/limits">limits</a>';

// src/errors/EdgioHeadersOverflowError.ts
var EdgioHeadersOverflowError = class extends EdgioError {
  constructor(details = "HPE_HEADER_OVERFLOW", stack) {
    super({
      statusCode: 542,
      title: "Edgio Headers Overflow",
      message: `The project's cloud function returned HTTP response headers with an overall size greater than 80KB or single header with value greater than 32KB. If you are the website administrator, please use ${serverLogsLink} to debug and decrease the response headers size. See: ${limitsLink}`,
      level: 1,
      details,
      stack
    });
  }
};

// src/errors/EdgioInternalError.ts
var EdgioInternalError = class extends EdgioError {
  constructor(details, stack, code) {
    super({
      statusCode: 530,
      title: "Edgio Internal Error",
      message: `Unexpected error in one of Edgio's cloud function components. If you are the website administrator, please contact the ${supportLink} immediately.`,
      level: 1,
      details,
      stack
    });
  }
};

// src/errors/EdgioProjectCrashedError.ts
var EdgioProjectCrashedError = class extends EdgioError {
  constructor(details, stack) {
    super({
      statusCode: 549,
      title: "Edgio Project Crashed",
      message: `The project's cloud function crashed unexpectedly because of fatal error in project's code or undesired process.exit call somewhere in the third party code. If you are the website administrator, please use ${serverLogsLink} to debug this issue.`,
      level: 1,
      details,
      stack
    });
  }
};

// src/errors/EdgioOutOfResourcesError.ts
var EdgioOutOfResourcesError = class extends EdgioError {
  constructor(details) {
    super({
      statusCode: 540,
      title: "Edgio Project Out Of Resources",
      message: `The project's cloud function crashed because of an out-of-memory situation. If you are the website administrator, please use ${serverLogsLink} to debug and lower the resources usage.`,
      level: 1,
      details
    });
  }
};

// src/errors/EdgioProjectTimeoutError.ts
var EdgioProjectTimeoutError = class extends EdgioError {
  constructor(details) {
    super({
      statusCode: 539,
      title: "Edgio Project Timeout",
      message: `The project's cloud function did not respond on time, either due to slow upstreams, loops or badly handled asynchronous requests in code (e.g. missing "await" or call to "callback"). If you are the website administrator, please use ${serverLogsLink} and ${jsPerformanceProfilingLink} to debug.`,
      level: 1,
      details
    });
  }
};

// src/errors/EdgioResponseTooLargeError.ts
var EdgioResponseTooLargeError = class extends EdgioError {
  constructor(details) {
    super({
      statusCode: 532,
      title: "Edgio Project Response Too Large",
      message: `The project's cloud function returned a response with body size greater than the allowed 6MB uncompressed. If you are the website administrator, please use ${serverLogsLink} to debug and lower the response size. See: ${limitsLink}`,
      level: 1,
      details
    });
  }
};

// src/lambda/eventUtils.ts
var import_querystring = __toESM(require("querystring"));
function isConsoleEvent(event) {
  return "action" in event;
}
function isApiGatewayV2Event(event) {
  return "version" in event && event.version === "2.0";
}
function isBufferProxyEvent(event) {
  return "multiValueHeaders" in event;
}
function methodFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return event.requestContext.http.method;
  } else {
    return event.httpMethod;
  }
}
function pathFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return encodePath(fixRawPath(event.rawPath));
  } else {
    return event.path ? encodePath(event.path) : void 0;
  }
}
function searchFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    if (!event.rawQueryString)
      return "";
    const parsedQueryString = import_querystring.default.parse(event.rawQueryString);
    return `?${import_querystring.default.stringify(parsedQueryString)}`;
  } else if (isBufferProxyEvent(event)) {
    return normalizeLambdaQuery(event);
  } else {
    return void 0;
  }
}
function singleValueHeadersFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return event.headers;
  } else if (isBufferProxyEvent(event)) {
    return Object.fromEntries(
      Object.entries(event.multiValueHeaders).map(([key2, value]) => [key2, value[0]])
    );
  } else {
    return {};
  }
}
function headerValueFromEvent(event, headerName) {
  const headers = singleValueHeadersFromEvent(event);
  return headers[headerName] || headers[headerName.toLowerCase()];
}
function cookiesFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return event.cookies || [];
  } else if (isBufferProxyEvent(event)) {
    return event.multiValueHeaders.cookie || [];
  } else {
    return [];
  }
}
function urlFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return fixRawPath(event.rawPath) + (event.rawQueryString ? `?${event.rawQueryString}` : "");
  } else if (isBufferProxyEvent(event)) {
    return event.rawUrl || event.path + normalizeLambdaQuery(event);
  } else {
    return void 0;
  }
}
function requestIdFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return event.headers[HTTP_HEADERS.xRequestId] || event.headers[HTTP_HEADERS.xEcUUID];
  } else if (isBufferProxyEvent(event)) {
    return flattenArray(event.multiValueHeaders[HTTP_HEADERS.xRequestId]) || flattenArray(event.multiValueHeaders[HTTP_HEADERS.xEcUUID]);
  } else {
    return void 0;
  }
}
function invokeSourceFromEvent(event) {
  if (isApiGatewayV2Event(event)) {
    return INVOKE_SOURCES.functionUrl;
  } else if (isBufferProxyEvent(event)) {
    return INVOKE_SOURCES.bufferProxy;
  } else if (isConsoleEvent(event)) {
    return INVOKE_SOURCES.console;
  }
  throw new Error("Unknown event type");
}
function invokeActionFromEvent(event) {
  if (isConsoleEvent(event)) {
    return event.action;
  }
  if (isApiGatewayV2Event(event)) {
    const cloudFunctionsHintHeader = event.headers[HTTP_HEADERS.xCloudFunctionsHint];
    return cloudFunctionsHintHeader ? INVOKE_ACTIONS.serverless : INVOKE_ACTIONS.simulator;
  }
  if (isBufferProxyEvent(event)) {
    const cloudFunctionsHintHeader = event.multiValueHeaders[HTTP_HEADERS.xCloudFunctionsHint];
    return cloudFunctionsHintHeader ? INVOKE_ACTIONS.serverless : INVOKE_ACTIONS.simulator;
  }
  throw new Error("Unknown event type");
}
function flattenArray(arr) {
  return Array.isArray(arr) ? arr.join("") : arr;
}
function normalizeLambdaQuery(event) {
  let query;
  if (event.multiValueQueryStringParameters && Object.keys(event.multiValueQueryStringParameters).length) {
    Object.keys(event.multiValueQueryStringParameters).forEach((key2) => {
      const curVal = event.multiValueQueryStringParameters[key2];
      if (Array.isArray(curVal) && curVal.length === 1) {
        event.multiValueQueryStringParameters[key2] = curVal[0];
      }
    });
    query = import_querystring.default.stringify(event.multiValueQueryStringParameters);
  }
  return query ? "?" + query : "";
}
function sanitizeHeaders(headers) {
  const sanitizedHeaders = Object.keys(headers).reduce((normalizedHeaders, key2) => {
    normalizedHeaders[key2.toLowerCase()] = headers[key2];
    return normalizedHeaders;
  }, {});
  Object.keys(sanitizedHeaders).forEach((key2) => {
    if (key2.startsWith("x-amzn-")) {
      delete sanitizedHeaders[key2];
    }
  });
  delete sanitizedHeaders["transfer-encoding"];
  return sanitizedHeaders;
}
function encodePath(path) {
  return path.replace(/[^A-Za-z0-9\-/.*()+$!~'@,;:&=_]/g, (char) => {
    if (char === "%")
      return char;
    return encodeURIComponent(char);
  });
}
function fixRawPath(rawPath) {
  return rawPath.replace(/ /g, "+");
}

// src/lambda/handlerConstants.ts
var RESPONSE_SIZE_LIMIT = 6277476;
var HANDLER_RESERVED_MEMORY = 50;
var HANDLER_RESERVED_TIME = 250;
var HANDLER_REQUEST_TIMEOUT = 5 * 60 * 1e3;
var HANDLER_MAX_HEADER_VALUE_SIZE = 32 * 1e3;

// src/lambda/handler.ts
var import_child_process = require("child_process");
var import_path = require("path");

// src/utils/idUtils.ts
function generateRandomId(length = 10) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// src/lambda/handlerMetrics.ts
var metrics = {
  handlerId: generateRandomId(),
  handlerStartedAt: Date.now(),
  serverStartedAt: void 0,
  serverReadyAt: void 0,
  handlerReqStartedAt: void 0,
  handlerReqFinishedAt: void 0,
  serverReqStartedAt: void 0,
  serverReqFinishedAt: void 0,
  handlerReqCount: 0,
  serverReqCount: 0,
  handlerErrorCount: 0,
  get handlerLifeTime() {
    return Date.now() - this.handlerStartedAt;
  },
  get serverLifeTime() {
    return this.serverStartedAt ? Date.now() - this.serverStartedAt : 0;
  },
  get handlerTime() {
    return this.handlerReqStartedAt && this.handlerReqFinishedAt ? this.handlerReqFinishedAt - this.handlerReqStartedAt : 0;
  },
  get serverTime() {
    return this.serverReqStartedAt && this.serverReqFinishedAt ? this.serverReqFinishedAt - this.serverReqStartedAt : 0;
  },
  get serverReadyTime() {
    return this.serverReadyAt && this.serverStartedAt ? this.serverReadyAt - this.serverStartedAt : 0;
  },
  get handlerColdStart() {
    return this.handlerReqCount === 1;
  },
  get serverColdStart() {
    return this.serverReqCount === 1;
  },
  get handlerRss() {
    const { rss } = process.memoryUsage();
    return Math.round(rss / 1024 / 1024 * 100) / 100;
  },
  _handlerColdStartTime: void 0,
  get handlerColdStartTime() {
    if (this.handlerColdStart)
      this._handlerColdStartTime = this.handlerTime;
    return this._handlerColdStartTime;
  },
  _serverColdStartTime: void 0,
  get serverColdStartTime() {
    if (this.serverColdStart)
      this._serverColdStartTime = this.serverTime;
    return this._serverColdStartTime;
  },
  serialize() {
    const shortcuts = {
      hid: this.handlerId,
      hlt: this.handlerLifeTime,
      slt: this.serverLifeTime,
      hrc: this.handlerReqCount,
      src: this.serverReqCount,
      hec: this.handlerErrorCount,
      hrss: this.handlerRss,
      ht: this.handlerTime,
      st: this.serverTime,
      srt: this.serverReadyTime,
      hcs: this.handlerColdStart,
      scs: this.serverColdStart,
      hcst: this.handlerColdStartTime,
      scst: this.serverColdStartTime
    };
    return Object.entries(shortcuts).map(([key2, value]) => `${key2}=${value}`).join(",");
  }
};

// src/lambda/global.helpers.ts
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
    return global.isCacheEnabled ?? false;
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

// src/environment.ts
function isLocal() {
  return EdgioRuntimeGlobal.runtimeOptions?.devMode || process.env[EDGIO_ENV_VARIABLES.local] === "true";
}

// src/lambda/handler.ts
var server;
var timeout;
var handler = async (event, context) => {
  let response;
  metrics.handlerReqStartedAt = Date.now();
  try {
    clearTimeout(timeout);
    context.callbackWaitsForEmptyEventLoop = false;
    server = server || await spawnServer();
    server.removeAllListeners();
    response = await Promise.race([
      handleTimeoutError(context),
      handleServerError(server),
      handleServerResponse(event)
    ]);
    timeout?.unref();
    if (containsHeaderOverLimit(response.headers)) {
      throw new EdgioHeadersOverflowError(
        `Headers contain value over the limit of ${HANDLER_MAX_HEADER_VALUE_SIZE}B`
      );
    }
    response.base64EncodedBody = Buffer.from(response.unencodedBody).toString("base64");
    if (response.base64EncodedBody.length > RESPONSE_SIZE_LIMIT) {
      throw new EdgioResponseTooLargeError(
        `Received base64 encoded body with size ${response.base64EncodedBody.length}B`
      );
    }
  } catch (e) {
    metrics.handlerErrorCount++;
    response = await handleError(e, event);
  }
  metrics.handlerReqCount++;
  metrics.handlerReqFinishedAt = Date.now();
  return shapeResponseForEvent(event, addMetrics(response));
};
function addMetrics(response) {
  const xEdgeT = response.headers[HTTP_HEADERS.xEdgeT] || "";
  const previousXEdgeT = xEdgeT ? `,${xEdgeT}` : "";
  response.headers[HTTP_HEADERS.xEdgeT] = `${metrics.serialize()}${previousXEdgeT}`;
  const xEdgeStatus = response.headers[HTTP_HEADERS.xEdgeStatus] || "";
  const previousXEdgeStatus = xEdgeStatus ? `,${xEdgeStatus}` : "";
  response.headers[HTTP_HEADERS.xEdgeStatus] = `h=${response.statusCode}${previousXEdgeStatus}`;
  return response;
}
function shapeResponseForEvent(event, response) {
  response.headers = sanitizeHeaders(response.headers);
  if (!response.base64EncodedBody) {
    response.base64EncodedBody = Buffer.from(response.unencodedBody).toString("base64");
  }
  if (isConsoleEvent(event) && (response.statusCode ?? 0) >= 500) {
    const errorMessage = JSON.parse(response.unencodedBody);
    return {
      statusCode: response.statusCode,
      errorMessage
    };
  }
  if (isConsoleEvent(event)) {
    return response.unencodedBody.toString();
  }
  if (isApiGatewayV2Event(event)) {
    const lowerCaseHeaders = Object.fromEntries(
      Object.entries(response.headers).map(([key2, value]) => [key2.toLowerCase(), value])
    );
    const cookies = lowerCaseHeaders["set-cookie"] ?? [];
    delete lowerCaseHeaders["set-cookie"];
    return {
      statusCode: response.statusCode,
      headers: lowerCaseHeaders,
      cookies,
      body: response.base64EncodedBody,
      isBase64Encoded: true
    };
  } else {
    return {
      statusCode: response.statusCode,
      multiValueHeaders: Object.entries(response.headers).reduce(
        (accumulatedHeaders, [key2, value]) => ({
          ...accumulatedHeaders,
          [key2]: Array.isArray(value) ? value : [value]
        }),
        {}
      ),
      body: response.base64EncodedBody.toString(),
      isBase64Encoded: true
    };
  }
}
async function handleError(e, event) {
  const error = isEdgioError(e) ? e : new EdgioInternalError(e.message, e.stack);
  const requestId = requestIdFromEvent(event);
  const method = methodFromEvent(event) || "GET";
  const url = urlFromEvent(event);
  const acceptHeader = headerValueFromEvent(event, HTTP_HEADERS.accept);
  const type = acceptHeader?.includes("html") ? "html" : "json";
  const contentType = type === "html" ? "text/html" : "application/json";
  const invokeSource = invokeSourceFromEvent(event);
  log_default.error(`[Edgio Error][Level 1]: ${method} ${url} - ${e?.stack}`);
  if ([539, 540, 549].includes(error.statusCode)) {
    clearServer();
  }
  return {
    statusCode: error.statusCode,
    headers: {
      [HTTP_HEADERS.contentType]: contentType,
      [HTTP_HEADERS.xEdgErrorMessage]: encodeURI(error.message),
      [HTTP_HEADERS.xEdgErrorLevel]: error.level.toString(),
      [HTTP_HEADERS.xEdgErrorDetails]: encodeURI(error.details || "")
    },
    unencodedBody: error.render({
      type,
      requestId,
      includeStack: isLocal() || invokeSource === INVOKE_SOURCES.console
    })
  };
}
async function handleServerResponse(event) {
  const method = methodFromEvent(event) || "GET";
  const path = pathFromEvent(event) || "/";
  const search = searchFromEvent(event) || "";
  const pathWithSearch = path + search;
  const headers = sanitizeHeaders(singleValueHeadersFromEvent(event) || {});
  const cookies = cookiesFromEvent(event);
  headers.cookie = cookies;
  const invokeSource = invokeSourceFromEvent(event);
  const invokeAction = invokeActionFromEvent(event);
  headers[HTTP_HEADERS.xEdgInvokeSource] = invokeSource;
  headers[HTTP_HEADERS.xEdgInvokeAction] = invokeAction;
  headers[HTTP_HEADERS.xEdgRawUrl] = urlFromEvent(event) || "/";
  const body = event.body ? Buffer.from(event.body, event.isBase64Encoded ? "base64" : void 0) : void 0;
  const requestOptions = {
    hostname: localhost,
    port,
    path: pathWithSearch,
    method,
    headers,
    timeout: HANDLER_REQUEST_TIMEOUT
  };
  return new Promise((resolve, reject) => {
    metrics.serverReqCount++;
    metrics.serverReqStartedAt = Date.now();
    metrics.serverReqFinishedAt = void 0;
    const req = import_http.default.request(requestOptions, (res) => {
      let body2 = Buffer.from("");
      res.on("data", (chunk) => {
        body2 = Buffer.concat([body2, chunk]);
        if (body2.length > RESPONSE_SIZE_LIMIT) {
          req.destroy();
          reject(new EdgioResponseTooLargeError(`Received body with size ${body2.length}B`));
        }
      });
      res.on("error", (e) => {
        reject(e);
      });
      res.on("end", () => {
        metrics.serverReqFinishedAt = Date.now();
        resolve({
          statusCode: res.statusCode || 200,
          headers: res.headers,
          unencodedBody: body2
        });
      });
    });
    req.on("timeout", () => {
      req.destroy();
      reject(new EdgioProjectTimeoutError("The req to the server timed out"));
    });
    req.on("error", (e) => {
      if (e.code === "ECONNRESET")
        return;
      if (e.code === "HPE_HEADER_OVERFLOW") {
        reject(
          new EdgioHeadersOverflowError(
            "HPE_HEADER_OVERFLOW - The server response headers are too large"
          )
        );
      }
      return reject(e);
    });
    req.end(body);
  });
}
async function handleTimeoutError(context) {
  return new Promise((_resolve, reject) => {
    const timeoutMilliseconds = context.getRemainingTimeInMillis() - HANDLER_RESERVED_TIME;
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      reject(
        new EdgioProjectTimeoutError(
          `The project's code was terminated after ${timeoutMilliseconds}ms`
        )
      );
    }, timeoutMilliseconds);
  });
}
async function handleServerError(child) {
  return new Promise((_resolve, reject) => {
    child?.on("exit", (code) => {
      if (code === null || code === void 0) {
        const handlerHeapLimit = getHandlerHeapLimit();
        return reject(
          new EdgioOutOfResourcesError(`Total configured memory ${handlerHeapLimit}MB was exceeded`)
        );
      }
      reject(new EdgioProjectCrashedError(`Server exited with code ${code}`));
    });
  });
}
function clearServer() {
  server?.kill("SIGKILL");
  server = void 0;
  metrics.serverStartedAt = void 0;
  metrics.serverReadyAt = void 0;
  metrics.serverReqCount = 0;
}
async function spawnServer() {
  const serverHeapLimit = getServerHeapLimit();
  const serverPath = (0, import_path.join)(__dirname, "server.cjs");
  metrics.serverStartedAt = Date.now();
  metrics.serverReadyAt = void 0;
  const child = (0, import_child_process.fork)(
    serverPath,
    [
      `--max-old-space-size=${serverHeapLimit}`,
      `--handler-id=${metrics.handlerId}`
    ],
    {
      cwd: process.cwd(),
      stdio: "pipe",
      env: process.env
    }
  );
  child.stdout?.pipe(process.stdout);
  child.stderr?.pipe(process.stderr);
  return new Promise(function(resolve, reject) {
    let onData;
    let onError;
    let onExit;
    let addListeners;
    let removeListeners;
    let previousOutput = "";
    let stderr = [];
    onData = (data) => {
      const output = data?.toString() ?? "";
      const total = previousOutput + output;
      previousOutput = output;
      if (total.includes(EDGIO_READY_MESSAGE)) {
        metrics.serverReadyAt = Date.now();
        removeListeners();
        resolve(child);
      }
    };
    onError = (data) => stderr.push(data);
    onExit = async (code) => {
      removeListeners();
      reject(
        new EdgioProjectCrashedError(
          `Server process exited immediately after startup with code ${code}`,
          Buffer.concat(stderr).toString()
        )
      );
    };
    removeListeners = () => {
      child.stdout?.off("data", onData);
      child.stderr?.off("data", onError);
      child.off("exit", onExit);
    };
    addListeners = () => {
      child.stdout?.on("data", onData);
      child.stderr?.on("data", onError);
      child.on("exit", onExit);
    };
    addListeners();
  });
}
function getHandlerHeapLimit() {
  return Math.floor((0, import_v8.getHeapStatistics)().heap_size_limit / 1024 / 1024);
}
function getServerHeapLimit() {
  return getHandlerHeapLimit() - HANDLER_RESERVED_MEMORY;
}
function containsHeaderOverLimit(headers) {
  for (const key2 in headers) {
    if (headers[key2]?.toString().length > HANDLER_MAX_HEADER_VALUE_SIZE) {
      return true;
    }
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addMetrics,
  clearServer,
  containsHeaderOverLimit,
  getHandlerHeapLimit,
  getServerHeapLimit,
  handleError,
  handleServerError,
  handleServerResponse,
  handleTimeoutError,
  handler,
  shapeResponseForEvent,
  spawnServer
});
//# sourceMappingURL=handler.dist.js.map
