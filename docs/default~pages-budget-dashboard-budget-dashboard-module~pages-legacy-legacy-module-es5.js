function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-budget-dashboard-budget-dashboard-module~pages-legacy-legacy-module"], {
  /***/
  "./src/app/services/backend.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/backend.service.ts ***!
    \*********************************************/

  /*! exports provided: BackendService */

  /***/
  function _src_app_services_backendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants */
    "./src/app/services/constants.ts");

    var BackendService = /*#__PURE__*/function () {
      function BackendService(http) {
        _classCallCheck(this, BackendService);

        this.http = http;
        this.baseUrl = _constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NEW_BACKEND_URL;
        this.publicUrl = _constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NEW_BACKEND_PUBLIC;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // Health check method


      return _createClass(BackendService, [{
        key: "checkBackendConnection",
        value: function checkBackendConnection() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            var response, _t;

            return _regenerator().w(function (_context) {
              while (1) switch (_context.p = _context.n) {
                case 0:
                  _context.p = 0;
                  _context.n = 1;
                  return this.http.get("".concat(this.publicUrl, "/budget/overview"), Object.assign(Object.assign({}, this.httpOptions), {
                    observe: 'response'
                  })).toPromise();

                case 1:
                  response = _context.v;
                  console.log('Backend connection successful', response);
                  return _context.a(2, true);

                case 2:
                  _context.p = 2;
                  _t = _context.v;
                  console.log('Backend connection error:', _t); // If it's a CORS error, the server is likely running but CORS isn't configured

                  if (!(_t.status === 0 && _t.error instanceof ProgressEvent)) {
                    _context.n = 3;
                    break;
                  }

                  console.log('Backend is running but CORS is not configured properly'); // Return true since backend is running, just CORS issue

                  return _context.a(2, true);

                case 3:
                  return _context.a(2, false);
              }
            }, _callee, this, [[0, 2]]);
          }));
        } // Public API endpoints (no authentication required)

        /**
         * Get public budget data from the new backend
         */

      }, {
        key: "getPublicBudgetData",
        value: function getPublicBudgetData() {
          return this.http.get("".concat(this.publicUrl, "/budget/expenditure"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get revenue data from the backend
         */

      }, {
        key: "getRevenueData",
        value: function getRevenueData() {
          return this.http.get("".concat(this.publicUrl, "/budget/revenue"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get revenue data filtered by year
         */

      }, {
        key: "getRevenueDataByYear",
        value: function getRevenueDataByYear(year) {
          return this.http.get("".concat(this.publicUrl, "/budget/revenue?year=").concat(year), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (!response) return [];
            return response.map(function (item) {
              var _a, _b;

              return {
                id: item.id,
                ministry: ((_a = item.metadata) === null || _a === void 0 ? void 0 : _a.ministry) || item.ministry || 'Unknown Ministry',
                department: ((_b = item.metadata) === null || _b === void 0 ? void 0 : _b.department) || item.department || 'Unknown Department',
                year: item.year,
                amount: item.amount,
                category: item.category,
                type: item.type,
                subcategory: item.subcategory,
                description: item.description,
                metadata: item.metadata,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
              };
            });
          })).toPromise();
        }
        /**
         * Get expenditure data from the backend
         */

      }, {
        key: "getExpenditureData",
        value: function getExpenditureData() {
          return this.http.get("".concat(this.publicUrl, "/budget/expenditure"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get expenditure data filtered by year
         */

      }, {
        key: "getExpenditureDataByYear",
        value: function getExpenditureDataByYear(year) {
          return this.http.get("".concat(this.publicUrl, "/budget/expenditure?year=").concat(year), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (!response) return [];
            return response.map(function (item) {
              var _a, _b;

              return {
                id: item.id,
                ministry: ((_a = item.metadata) === null || _a === void 0 ? void 0 : _a.ministry) || item.ministry || 'Unknown Ministry',
                department: ((_b = item.metadata) === null || _b === void 0 ? void 0 : _b.department) || item.department || 'Unknown Department',
                year: item.year,
                amount: item.amount,
                category: item.category,
                type: item.type,
                subcategory: item.subcategory,
                description: item.description,
                metadata: item.metadata,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
              };
            });
          })).toPromise();
        }
        /**
         * Get budget data filtered by year
         */

      }, {
        key: "getBudgetDataByYear",
        value: function getBudgetDataByYear(year) {
          return this.http.get("".concat(this.publicUrl, "/budget/expenditure?year=").concat(year), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get budget data filtered by category (education, health, etc.)
         */

      }, {
        key: "getBudgetDataByCategory",
        value: function getBudgetDataByCategory(category) {
          return this.http.get("".concat(this.baseUrl, "/public/budget-data?category=").concat(category), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get budget data filtered by ministry
         */

      }, {
        key: "getBudgetDataByMinistry",
        value: function getBudgetDataByMinistry(ministry) {
          return this.http.get("".concat(this.baseUrl, "/public/budget-data?ministry=").concat(encodeURIComponent(ministry)), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get dashboard statistics
         */

      }, {
        key: "getDashboardStats",
        value: function getDashboardStats() {
          return this.http.get("".concat(this.publicUrl, "/budget/overview"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return {
              totalBudget: ((response === null || response === void 0 ? void 0 : response.totalRevenue) || 0) + ((response === null || response === void 0 ? void 0 : response.totalExpenditure) || 0),
              totalRecords: 1,
              totalContent: 0,
              totalReports: 0,
              lastUpdate: response === null || response === void 0 ? void 0 : response.lastUpdated
            };
          })).toPromise();
        }
        /**
         * Get content from backend (news, announcements, etc.)
         */

      }, {
        key: "getPublicContent",
        value: function getPublicContent(type) {
          var url = type ? "".concat(this.baseUrl, "/public/content?type=").concat(type) : "".concat(this.baseUrl, "/public/content");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Search budget data
         */

      }, {
        key: "searchBudgetData",
        value: function searchBudgetData(query) {
          return this.http.get("".concat(this.baseUrl, "/public/budget-data?search=").concat(encodeURIComponent(query)), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get aggregated budget data (totals by category, ministry, etc.)
         */

      }, {
        key: "getBudgetAggregates",
        value: function getBudgetAggregates() {
          var groupBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'category';
          return this.http.get("".concat(this.baseUrl, "/public/budget-data/aggregates?groupBy=").concat(groupBy), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Get budget trends over time
         */

      }, {
        key: "getBudgetTrends",
        value: function getBudgetTrends(ministry, category) {
          var url = "".concat(this.baseUrl, "/public/budget-data/trends");
          var params = [];
          if (ministry) params.push("ministry=".concat(encodeURIComponent(ministry)));
          if (category) params.push("category=".concat(category));

          if (params.length > 0) {
            url += '?' + params.join('&');
          }

          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || [];
          })).toPromise();
        }
        /**
         * Check backend health
         */

      }, {
        key: "checkHealth",
        value: function checkHealth() {
          return this.http.get("".concat(this.baseUrl, "/health"), this.httpOptions).toPromise();
        } // Government data proxy endpoints

        /**
         * Get data from government APIs via backend proxy
         */

      }, {
        key: "getGovernmentData",
        value: function getGovernmentData(endpoint, params) {
          var url = "".concat(this.baseUrl, "/government/proxy");
          var body = {
            endpoint: endpoint,
            params: params || {}
          };
          return this.http.post(url, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response || {};
          })).toPromise();
        }
        /**
         * Sync data from government APIs
         */

      }, {
        key: "syncGovernmentData",
        value: function syncGovernmentData() {
          return this.http.post("".concat(this.baseUrl, "/government/sync"), {}, this.httpOptions).toPromise();
        } // Helper methods

        /**
         * Format currency numbers for display
         */

      }, {
        key: "formatCurrency",
        value: function formatCurrency(amount) {
          if (!amount) return '0';

          if (amount >= 1000000000) {
            return (amount / 1000000000).toFixed(1) + ' тэрбум';
          } else if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1) + ' сая';
          } else if (amount >= 1000) {
            return (amount / 1000).toFixed(1) + ' мянга';
          }

          return amount.toLocaleString('mn-MN');
        }
        /**
         * Get category display name in Mongolian
         */

      }, {
        key: "getCategoryDisplayName",
        value: function getCategoryDisplayName(category) {
          var categoryNames = {
            'education': 'Боловсрол',
            'health': 'Эрүүл мэнд',
            'infrastructure': 'Дэд бүтэц',
            'defense': 'Батлан хамгаалах',
            'social': 'Нийгмийн хамгаалал',
            'environment': 'Байгаль орчин',
            'agriculture': 'Хөдөө аж ахуй',
            'tourism': 'Аялал жуулчлал',
            'culture': 'Соёл урлаг',
            'transport': 'Тээвэр харилцаа',
            'energy': 'Эрчим хүч',
            'mining': 'Уул уурхай',
            'technology': 'Технологи',
            'other': 'Бусад'
          };
          return categoryNames[category] || category;
        }
        /**
         * Get ministry short name
         */

      }, {
        key: "getMinistryShortName",
        value: function getMinistryShortName(ministry) {
          var ministryShortNames = {
            'Ministry of Education and Science': 'БШУ',
            'Ministry of Health': 'ЭМЯ',
            'Ministry of Infrastructure': 'ДБХЯ',
            'Ministry of Defense': 'БХЯ',
            'Ministry of Social Welfare': 'НХНЯ',
            'Ministry of Environment': 'БОЯ'
          };
          return ministryShortNames[ministry] || ministry.split(' ').map(function (word) {
            return word[0];
          }).join('');
        } // Indicators API methods

        /**
         * Get all indicators data
         */

      }, {
        key: "getIndicators",
        value: function getIndicators() {
          return this.http.get("".concat(this.baseUrl, "/indicators"), this.httpOptions).toPromise()["catch"](function () {
            // Return empty array instead of mock data - only show real backend data
            return [];
          });
        }
        /**
         * Get indicators by year
         */

      }, {
        key: "getIndicatorsByYear",
        value: function getIndicatorsByYear(year) {
          return this.http.get("".concat(this.baseUrl, "/indicators/year/").concat(year), this.httpOptions).toPromise()["catch"](function () {
            // Return empty array instead of mock data - only show real backend data
            return [];
          });
        }
        /**
         * Get indicators by category
         */

      }, {
        key: "getIndicatorsByCategory",
        value: function getIndicatorsByCategory(category) {
          return this.http.get("".concat(this.baseUrl, "/indicators/category/").concat(category), this.httpOptions).toPromise()["catch"](function () {
            // Return empty array instead of mock data - only show real backend data
            return [];
          });
        }
      }]);
    }();

    BackendService.ɵfac = function BackendService_Factory(t) {
      return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BackendService,
      factory: BackendService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~pages-budget-dashboard-budget-dashboard-module~pages-legacy-legacy-module-es5.js.map