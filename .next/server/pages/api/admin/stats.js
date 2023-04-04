"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/stats";
exports.ids = ["pages/api/admin/stats"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./config/ncoptions.js":
/*!*****************************!*\
  !*** ./config/ncoptions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ncoptions\": () => (/* binding */ ncoptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//NEXT CONNECT API MIDDLEWARE OPTIONS CONFIGURATION\nconst ncoptions = {\n    onError: (err, req, res, next)=>{\n        console.log(\"Something broke nc middleware!\", err);\n        res.status(500).end(\"Something broke!\");\n    },\n    onNoMatch: (req, res, next)=>{\n        res.status(404).end(\"Page is not found\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ncoptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbmNvcHRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsRUFBbUQ7QUFDNUMsS0FBSyxDQUFDQSxTQUFTLEdBQUcsQ0FBQztJQUN4QkMsT0FBTyxHQUFHQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztRQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0MsaUNBQUVMLEdBQUc7UUFDakRFLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQWtCO0lBQ3hDLENBQUM7SUFDREMsU0FBUyxHQUFHUCxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7UUFDOUJELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQW1CO0lBQ3pDLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVULFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbHVzY29uZXh0anNzdGFydGVyLy4vY29uZmlnL25jb3B0aW9ucy5qcz8wNmM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vTkVYVCBDT05ORUNUIEFQSSBNSURETEVXQVJFIE9QVElPTlMgQ09ORklHVVJBVElPTlxyXG5leHBvcnQgY29uc3QgbmNvcHRpb25zID0ge1xyXG4gIG9uRXJyb3I6IChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyBicm9rZSBuYyBtaWRkbGV3YXJlIVwiLCBlcnIpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIlNvbWV0aGluZyBicm9rZSFcIik7XHJcbiAgfSxcclxuICBvbk5vTWF0Y2g6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZChcIlBhZ2UgaXMgbm90IGZvdW5kXCIpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuY29wdGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJuY29wdGlvbnMiLCJvbkVycm9yIiwiZXJyIiwicmVxIiwicmVzIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlbmQiLCJvbk5vTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/ncoptions.js\n");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVsQixHQUFHLENBQUNDLE1BQU07QUFDVixHQUFHLENBQUNDLGFBQWE7QUFFakIsRUFBRSxHQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLENBQUM7SUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLENBQXlDO0FBQzNELENBQUM7QUFFRCxFQUFFLEVBWkYsSUFZMEMsRUFBRSxDQUFDO0lBQzNDLEVBQStEO0lBQy9ELEVBQTZFO0lBQzdFLEVBQUUsR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hDSixNQUFNLEdBQUcsR0FBRyxDQUFDTixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU87UUFDckNJLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTztJQUM3QyxDQUFDO0lBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBbUI7QUFDNUMsQ0FBQyxNQUFNLEVBSU47QUFFRCxFQUFpRTtBQUNqRSxFQUE4RDtBQUM5RCxpRUFBZUgsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9sdXNjb25leHRqc3N0YXJ0ZXIvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/admin/stats/index.js":
/*!****************************************!*\
  !*** ./pages/api/admin/stats/index.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _config_ncoptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/ncoptions */ \"(api)/./config/ncoptions.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n//Stats API ROUTE for logged in users\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_config_ncoptions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n//MIDDLEWARE\nhandler.use(async (req, res, next)=>{\n    //gets session and connects to DB Client if authenticated\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (session && session.user.roles.includes(\"admin\")) {\n        req.sessionUser = session.user;\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        req.db = client.db();\n        next();\n    } else {\n        res.status(401).end(\"No tienes permiso para esta acci\\xf3n\");\n        return;\n    }\n});\n//GET STATS\nhandler.get(async (req, res)=>{\n    const db = req.db;\n    //returns count of users\n    const users = await db.collection(\"users\").countDocuments();\n    const stats = [\n        {\n            name: \"users\",\n            nameEs: \"usuarios\",\n            stat: users\n        }\n    ];\n    return res.json(stats);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vc3RhdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsRUFBcUM7QUFDUjtBQUNlO0FBQ0g7QUFDQztBQUMxQyxLQUFLLENBQUNJLE9BQU8sR0FBR0osd0RBQUUsQ0FBQ0cseURBQVM7QUFFNUIsRUFBWTtBQUNaQyxPQUFPLENBQUNDLEdBQUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksR0FBSyxDQUFDO0lBQ3JDLEVBQXlEO0lBQ3pELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ1IsMkRBQVUsQ0FBQyxDQUFDO1FBQUNLLEdBQUc7SUFBQyxDQUFDO0lBQ3hDLEVBQUUsRUFBRUcsT0FBTyxJQUFJQSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBTyxTQUFHLENBQUM7UUFDcEROLEdBQUcsQ0FBQ08sV0FBVyxHQUFHSixPQUFPLENBQUNDLElBQUk7UUFDOUIsS0FBSyxDQUFDSSxNQUFNLEdBQUcsS0FBSyxDQUFDWixvREFBYTtRQUNsQ0ksR0FBRyxDQUFDUyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRTtRQUNsQlAsSUFBSTtJQUNOLENBQUMsTUFBTSxDQUFDO1FBQ05ELEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQW9DO1FBQ3hELE1BQU07SUFDUixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQVc7QUFDWGIsT0FBTyxDQUFDYyxHQUFHLFFBQVFaLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDL0IsS0FBSyxDQUFDUSxFQUFFLEdBQUdULEdBQUcsQ0FBQ1MsRUFBRTtJQUNqQixFQUF3QjtJQUN4QixLQUFLLENBQUNJLEtBQUssR0FBRyxLQUFLLENBQUNKLEVBQUUsQ0FBQ0ssVUFBVSxDQUFDLENBQU8sUUFBRUMsY0FBYztJQUV6RCxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQUEsQ0FBQztZQUFDQyxJQUFJLEVBQUUsQ0FBTztZQUFFQyxNQUFNLEVBQUUsQ0FBVTtZQUFFQyxJQUFJLEVBQUVOLEtBQUs7UUFBQyxDQUFDO0lBQUEsQ0FBQztJQUVsRSxNQUFNLENBQUNaLEdBQUcsQ0FBQ21CLElBQUksQ0FBQ0osS0FBSztBQUN2QixDQUFDO0FBRUQsaUVBQWVsQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2x1c2NvbmV4dGpzc3RhcnRlci8uL3BhZ2VzL2FwaS9hZG1pbi9zdGF0cy9pbmRleC5qcz9jODRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vU3RhdHMgQVBJIFJPVVRFIGZvciBsb2dnZWQgaW4gdXNlcnNcclxuaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IG5jb3B0aW9ucyBmcm9tIFwiQC9jb25maWcvbmNvcHRpb25zXCI7XHJcbmNvbnN0IGhhbmRsZXIgPSBuYyhuY29wdGlvbnMpO1xyXG5cclxuLy9NSURETEVXQVJFXHJcbmhhbmRsZXIudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIC8vZ2V0cyBzZXNzaW9uIGFuZCBjb25uZWN0cyB0byBEQiBDbGllbnQgaWYgYXV0aGVudGljYXRlZFxyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlci5yb2xlcy5pbmNsdWRlcyhcImFkbWluXCIpKSB7XHJcbiAgICByZXEuc2Vzc2lvblVzZXIgPSBzZXNzaW9uLnVzZXI7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgcmVxLmRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoXCJObyB0aWVuZXMgcGVybWlzbyBwYXJhIGVzdGEgYWNjacOzblwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9HRVQgU1RBVFNcclxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgZGIgPSByZXEuZGI7XHJcbiAgLy9yZXR1cm5zIGNvdW50IG9mIHVzZXJzXHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuY291bnREb2N1bWVudHMoKTtcclxuXHJcbiAgY29uc3Qgc3RhdHMgPSBbeyBuYW1lOiBcInVzZXJzXCIsIG5hbWVFczogXCJ1c3Vhcmlvc1wiLCBzdGF0OiB1c2VycyB9XTtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKHN0YXRzKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsibmMiLCJnZXRTZXNzaW9uIiwiY2xpZW50UHJvbWlzZSIsIm5jb3B0aW9ucyIsImhhbmRsZXIiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwic2Vzc2lvblVzZXIiLCJjbGllbnQiLCJkYiIsInN0YXR1cyIsImVuZCIsImdldCIsInVzZXJzIiwiY29sbGVjdGlvbiIsImNvdW50RG9jdW1lbnRzIiwic3RhdHMiLCJuYW1lIiwibmFtZUVzIiwic3RhdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/stats/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/stats/index.js"));
module.exports = __webpack_exports__;

})();