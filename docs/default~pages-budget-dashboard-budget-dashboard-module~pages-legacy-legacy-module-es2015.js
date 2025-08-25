(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-budget-dashboard-budget-dashboard-module~pages-legacy-legacy-module"],{

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/services/constants.ts");







class BackendService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NEW_BACKEND_URL;
        this.publicUrl = _constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NEW_BACKEND_PUBLIC;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Health check method
    checkBackendConnection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Try the public API endpoint to verify connection
                const response = yield this.http.get(`${this.publicUrl}/budget/overview`, Object.assign(Object.assign({}, this.httpOptions), { observe: 'response' })).toPromise();
                console.log('Backend connection successful', response);
                return true;
            }
            catch (error) {
                console.log('Backend connection error:', error);
                // If it's a CORS error, the server is likely running but CORS isn't configured
                if (error.status === 0 && error.error instanceof ProgressEvent) {
                    console.log('Backend is running but CORS is not configured properly');
                    // Return true since backend is running, just CORS issue
                    return true;
                }
                // For other errors, backend is likely not running
                return false;
            }
        });
    }
    // Public API endpoints (no authentication required)
    /**
     * Get public budget data from the new backend
     */
    getPublicBudgetData() {
        return this.http.get(`${this.publicUrl}/budget/expenditure`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get revenue data from the backend
     */
    getRevenueData() {
        return this.http.get(`${this.publicUrl}/budget/revenue`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get revenue data filtered by year
     */
    getRevenueDataByYear(year) {
        return this.http.get(`${this.publicUrl}/budget/revenue?year=${year}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            if (!response)
                return [];
            return response.map(item => {
                var _a, _b;
                return ({
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
                });
            });
        }))
            .toPromise();
    }
    /**
     * Get expenditure data from the backend
     */
    getExpenditureData() {
        return this.http.get(`${this.publicUrl}/budget/expenditure`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get expenditure data filtered by year
     */
    getExpenditureDataByYear(year) {
        return this.http.get(`${this.publicUrl}/budget/expenditure?year=${year}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            if (!response)
                return [];
            return response.map(item => {
                var _a, _b;
                return ({
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
                });
            });
        }))
            .toPromise();
    }
    /**
     * Get budget data filtered by year
     */
    getBudgetDataByYear(year) {
        return this.http.get(`${this.publicUrl}/budget/expenditure?year=${year}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get budget data filtered by category (education, health, etc.)
     */
    getBudgetDataByCategory(category) {
        return this.http.get(`${this.baseUrl}/public/budget-data?category=${category}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get budget data filtered by ministry
     */
    getBudgetDataByMinistry(ministry) {
        return this.http.get(`${this.baseUrl}/public/budget-data?ministry=${encodeURIComponent(ministry)}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get dashboard statistics
     */
    getDashboardStats() {
        return this.http.get(`${this.publicUrl}/budget/overview`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => ({
            totalBudget: ((response === null || response === void 0 ? void 0 : response.totalRevenue) || 0) + ((response === null || response === void 0 ? void 0 : response.totalExpenditure) || 0),
            totalRecords: 1,
            totalContent: 0,
            totalReports: 0,
            lastUpdate: response === null || response === void 0 ? void 0 : response.lastUpdated
        })))
            .toPromise();
    }
    /**
     * Get content from backend (news, announcements, etc.)
     */
    getPublicContent(type) {
        const url = type ?
            `${this.baseUrl}/public/content?type=${type}` :
            `${this.baseUrl}/public/content`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Search budget data
     */
    searchBudgetData(query) {
        return this.http.get(`${this.baseUrl}/public/budget-data?search=${encodeURIComponent(query)}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get aggregated budget data (totals by category, ministry, etc.)
     */
    getBudgetAggregates(groupBy = 'category') {
        return this.http.get(`${this.baseUrl}/public/budget-data/aggregates?groupBy=${groupBy}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Get budget trends over time
     */
    getBudgetTrends(ministry, category) {
        let url = `${this.baseUrl}/public/budget-data/trends`;
        const params = [];
        if (ministry)
            params.push(`ministry=${encodeURIComponent(ministry)}`);
        if (category)
            params.push(`category=${category}`);
        if (params.length > 0) {
            url += '?' + params.join('&');
        }
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || []))
            .toPromise();
    }
    /**
     * Check backend health
     */
    checkHealth() {
        return this.http.get(`${this.baseUrl}/health`, this.httpOptions)
            .toPromise();
    }
    // Government data proxy endpoints
    /**
     * Get data from government APIs via backend proxy
     */
    getGovernmentData(endpoint, params) {
        const url = `${this.baseUrl}/government/proxy`;
        const body = {
            endpoint: endpoint,
            params: params || {}
        };
        return this.http.post(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response || {}))
            .toPromise();
    }
    /**
     * Sync data from government APIs
     */
    syncGovernmentData() {
        return this.http.post(`${this.baseUrl}/government/sync`, {}, this.httpOptions)
            .toPromise();
    }
    // Helper methods
    /**
     * Format currency numbers for display
     */
    formatCurrency(amount) {
        if (!amount)
            return '0';
        if (amount >= 1000000000) {
            return (amount / 1000000000).toFixed(1) + ' тэрбум';
        }
        else if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1) + ' сая';
        }
        else if (amount >= 1000) {
            return (amount / 1000).toFixed(1) + ' мянга';
        }
        return amount.toLocaleString('mn-MN');
    }
    /**
     * Get category display name in Mongolian
     */
    getCategoryDisplayName(category) {
        const categoryNames = {
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
    getMinistryShortName(ministry) {
        const ministryShortNames = {
            'Ministry of Education and Science': 'БШУ',
            'Ministry of Health': 'ЭМЯ',
            'Ministry of Infrastructure': 'ДБХЯ',
            'Ministry of Defense': 'БХЯ',
            'Ministry of Social Welfare': 'НХНЯ',
            'Ministry of Environment': 'БОЯ'
        };
        return ministryShortNames[ministry] || ministry.split(' ').map(word => word[0]).join('');
    }
    // Indicators API methods
    /**
     * Get all indicators data
     */
    getIndicators() {
        return this.http.get(`${this.baseUrl}/indicators`, this.httpOptions)
            .toPromise()
            .catch(() => {
            // Return empty array instead of mock data - only show real backend data
            return [];
        });
    }
    /**
     * Get indicators by year
     */
    getIndicatorsByYear(year) {
        return this.http.get(`${this.baseUrl}/indicators/year/${year}`, this.httpOptions)
            .toPromise()
            .catch(() => {
            // Return empty array instead of mock data - only show real backend data
            return [];
        });
    }
    /**
     * Get indicators by category
     */
    getIndicatorsByCategory(category) {
        return this.http.get(`${this.baseUrl}/indicators/category/${category}`, this.httpOptions)
            .toPromise()
            .catch(() => {
            // Return empty array instead of mock data - only show real backend data
            return [];
        });
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-budget-dashboard-budget-dashboard-module~pages-legacy-legacy-module-es2015.js.map