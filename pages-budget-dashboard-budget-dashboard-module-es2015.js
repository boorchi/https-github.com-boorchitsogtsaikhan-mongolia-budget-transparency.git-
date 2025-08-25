(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-budget-dashboard-budget-dashboard-module"],{

/***/ "./src/app/pages/budget-dashboard/budget-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/budget-dashboard/budget-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: BudgetDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetDashboardComponent", function() { return BudgetDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function BudgetDashboardComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Backend \u0441\u0435\u0440\u0432\u0435\u0440\u0442 \u0430\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u0441\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BudgetDashboardComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Backend \u0441\u0435\u0440\u0432\u0435\u0440\u0442\u044D\u0439 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439. \u0410\u043D\u0445\u043D\u044B \u04E9\u0433\u04E9\u0433\u0434\u043B\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BudgetDashboardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Backend \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0436\u0438\u043B\u043B\u0430\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Backend \u0441\u0435\u0440\u0432\u0435\u0440\u0438\u0439\u0433 \u044D\u0445\u043B\u04AF\u04AF\u043B\u043D\u044D \u04AF\u04AF: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "cd websan-backend && npm start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BudgetDashboardComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u04E8\u0433\u04E9\u0433\u0434\u04E9\u043B \u0430\u0447\u0430\u0430\u043B\u0436 \u0431\u0430\u0439\u043D\u0430...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BudgetDashboardComponent_div_12_div_2_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0421\u04AF\u04AF\u043B\u0438\u0439\u043D \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u043B: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, ctx_r15.dashboardStats.lastUpdate, "yyyy/MM/dd HH:mm"), " ");
} }
function BudgetDashboardComponent_div_12_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041E\u0440\u043B\u043E\u0433\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0417\u0430\u0440\u043B\u0430\u0433\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u041D\u0438\u0439\u0442 \u0442\u04E9\u0441\u04E9\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u0431\u0438\u0447\u043B\u044D\u0433");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, BudgetDashboardComponent_div_12_div_2_div_1_div_34_Template, 4, 4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formatCurrency(ctx_r6.getTotalRevenue()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formatCurrency(ctx_r6.getTotalExpenditure()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formatCurrency(ctx_r6.dashboardStats.totalBudget));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.dashboardStats.totalRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.dashboardStats.lastUpdate);
} }
function BudgetDashboardComponent_div_12_div_2_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r16);
} }
function BudgetDashboardComponent_div_12_div_2_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r17.name, " ");
} }
function BudgetDashboardComponent_div_12_div_2_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ministry_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ministry_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ministry_r18, " ");
} }
function BudgetDashboardComponent_div_12_div_2_div_29_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r22.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r22.name, " ");
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u0438\u0439\u043D \u04E9\u0433\u04E9\u0433\u0434\u04E9\u043B \u043E\u043B\u0434\u0441\u043E\u043D\u0433\u04AF\u0439.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u04E8\u043C\u043D\u04E9\u0445: ", indicator_r25.previousValue, " ", indicator_r25.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", indicator_r25.changePercentage > 0 ? "positive" : "negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", indicator_r25.changePercentage > 0 ? "+" : "", "", indicator_r25.changePercentage, "% ");
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", indicator_r25.description, " ");
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_2_div_14_Template, 5, 5, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_2_div_15_Template, 2, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r25 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r23.getIndicatorStatusClass(indicator_r25.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r23.getIndicatorStatusIcon(indicator_r25.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r23.getIndicatorCategoryDisplayName(indicator_r25.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](indicator_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](indicator_r25.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](indicator_r25.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indicator_r25.previousValue && indicator_r25.changePercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indicator_r25.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", indicator_r25.year, " \u043E\u043D");
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_div_3_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", indicator_r33.changePercentage > 0 ? "positive" : "negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", indicator_r33.changePercentage > 0 ? "\u2197" : "\u2198", " ", ctx_r34.Math.abs(indicator_r33.changePercentage), "% ");
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_div_3_div_7_span_5_Template, 2, 3, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](indicator_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", indicator_r33.value, " ", indicator_r33.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indicator_r33.changePercentage);
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_div_3_div_7_Template, 6, 4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoryGroup_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", categoryGroup_r31.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", categoryGroup_r31.indicators.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", categoryGroup_r31.indicators);
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u043E\u0440 \u0430\u043D\u0433\u0438\u043B\u0441\u0430\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u04AF\u04AF\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_div_3_Template, 8, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r24.getIndicatorsByCategory());
} }
function BudgetDashboardComponent_div_12_div_2_div_29_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_2_Template, 19, 9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BudgetDashboardComponent_div_12_div_2_div_29_div_13_div_3_Template, 4, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.indicatorsData)("ngForTrackBy", ctx_r21.trackIndicatorByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r21.selectedIndicatorCategory);
} }
function BudgetDashboardComponent_div_12_div_2_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u042D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u04AF\u04AF\u0434 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BudgetDashboardComponent_div_12_div_2_div_29_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r36.selectedIndicatorCategory = $event; })("change", function BudgetDashboardComponent_div_12_div_2_div_29_Template_select_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r38.onIndicatorCategoryChange(ctx_r38.selectedIndicatorCategory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0411\u04AF\u0433\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BudgetDashboardComponent_div_12_div_2_div_29_option_11_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BudgetDashboardComponent_div_12_div_2_div_29_div_12_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BudgetDashboardComponent_div_12_div_2_div_29_div_13_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.selectedIndicatorCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.availableIndicatorCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.indicatorsData.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.indicatorsData.length > 0);
} }
function BudgetDashboardComponent_div_12_div_2_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.formatCurrency(item_r39.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r11.getPercentageOfTotal(item_r39.total), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r11.getPercentageOfTotal(item_r39.total), "%");
} }
function BudgetDashboardComponent_div_12_div_2_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.formatCurrency(item_r40.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r12.getPercentageOfTotal(item_r40.total), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r12.getPercentageOfTotal(item_r40.total), "%");
} }
function BudgetDashboardComponent_div_12_div_2_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0428\u04AF\u04AF\u043B\u0442\u044D\u0434 \u0442\u043E\u0445\u0438\u0440\u043E\u0445 \u04E9\u0433\u04E9\u0433\u0434\u04E9\u043B \u043E\u043B\u0434\u0441\u043E\u043D\u0433\u04AF\u0439.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BudgetDashboardComponent_div_12_div_2_div_53_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.ministry);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-category", item_r42.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r41.backendService.getCategoryDisplayName(item_r42.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.formatCurrency(item_r42.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.description || "-");
} }
function BudgetDashboardComponent_div_12_div_2_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u042F\u0430\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0425\u044D\u043B\u0442\u044D\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0422\u04E9\u0440\u04E9\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0414\u04AF\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0422\u0430\u0439\u043B\u0431\u0430\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BudgetDashboardComponent_div_12_div_2_div_53_tr_19_Template, 16, 8, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.budgetData)("ngForTrackBy", ctx_r14.trackByFn);
} }
function BudgetDashboardComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BudgetDashboardComponent_div_12_div_2_div_1_Template, 35, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0428\u04AF\u04AF\u043B\u0442\u04AF\u04AF\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BudgetDashboardComponent_div_12_div_2_Template_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r43.selectedYear = $event; })("change", function BudgetDashboardComponent_div_12_div_2_Template_select_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r45.onYearChange(ctx_r45.selectedYear); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BudgetDashboardComponent_div_12_div_2_option_10_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BudgetDashboardComponent_div_12_div_2_Template_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r46.selectedCategory = $event; })("change", function BudgetDashboardComponent_div_12_div_2_Template_select_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r47.onCategoryChange(ctx_r47.selectedCategory); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0411\u04AF\u0433\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BudgetDashboardComponent_div_12_div_2_option_17_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u042F\u0430\u043C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BudgetDashboardComponent_div_12_div_2_Template_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r48.selectedMinistry = $event; })("change", function BudgetDashboardComponent_div_12_div_2_Template_select_change_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r49.onMinistryChange(ctx_r49.selectedMinistry); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0411\u04AF\u0433\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, BudgetDashboardComponent_div_12_div_2_option_24_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BudgetDashboardComponent_div_12_div_2_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r50.clearFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " \u0426\u044D\u0432\u044D\u0440\u043B\u044D\u0445 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, BudgetDashboardComponent_div_12_div_2_div_29_Template, 14, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u043E\u0439\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u041D\u0438\u0439\u0442 \u0434\u04AF\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u043E\u0440 \u0430\u043D\u0433\u0438\u043B\u0441\u0430\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, BudgetDashboardComponent_div_12_div_2_div_43_Template, 10, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u042F\u0430\u043C\u0430\u0430\u0440 \u0430\u043D\u0433\u0438\u043B\u0441\u0430\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, BudgetDashboardComponent_div_12_div_2_div_48_Template, 10, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, BudgetDashboardComponent_div_12_div_2_div_52_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, BudgetDashboardComponent_div_12_div_2_div_53_Template, 20, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.dashboardStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.selectedYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.availableYears);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.availableCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.selectedMinistry);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.getUniqueMinistries());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.shouldShowIndicators());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.formatCurrency(ctx_r5.getTotalBudget()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.getBudgetByCategory());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.getBudgetByMinistry());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.budgetData.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.budgetData.length > 0);
} }
function BudgetDashboardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BudgetDashboardComponent_div_12_div_1_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BudgetDashboardComponent_div_12_div_2_Template, 54, 13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
} }
class BudgetDashboardComponent {
    constructor(backendService) {
        this.backendService = backendService;
        this.loading = false;
        this.backendConnected = false;
        this.budgetData = [];
        this.revenueData = [];
        this.indicatorsData = [];
        this.dashboardStats = null;
        this.aggregatedData = [];
        this.selectedYear = new Date().getFullYear();
        this.selectedCategory = '';
        this.selectedMinistry = '';
        this.selectedIndicatorCategory = '';
        // Available filter options
        this.availableYears = [2025, 2024, 2023, 2022, 2021];
        this.availableCategories = [
            { key: 'education', name: 'Боловсрол' },
            { key: 'health', name: 'Эрүүл мэнд' },
            { key: 'infrastructure', name: 'Дэд бүтэц' },
            { key: 'defense', name: 'Батлан хамгаалах' },
            { key: 'social', name: 'Нийгмийн хамгаалал' },
            { key: 'environment', name: 'Байгаль орчин' },
            { key: 'agriculture', name: 'Хөдөө аж ахуй' },
            { key: 'tourism', name: 'Аялал жуулчлал' },
            { key: 'culture', name: 'Соёл урлаг' },
            { key: 'transport', name: 'Тээвэр харилцаа' }
        ];
        this.availableIndicatorCategories = [
            { key: 'economic', name: 'Эдийн засаг' },
            { key: 'social', name: 'Нийгэм' },
            { key: 'fiscal', name: 'Төсөв санхүү' },
            { key: 'environmental', name: 'Байгаль орчин' },
            { key: 'governance', name: 'Засаглал' }
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.checkBackendConnection();
            if (this.backendConnected) {
                yield this.loadDashboardData();
            }
        });
    }
    /**
     * Check if backend is available
     */
    checkBackendConnection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.backendConnected = yield this.backendService.checkBackendConnection();
                console.log('Backend connection status:', this.backendConnected);
            }
            catch (error) {
                console.error('Backend connection check failed:', error);
                this.backendConnected = false;
            }
        });
    }
    /**
     * Load all dashboard data
     */
    loadDashboardData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                // Load dashboard statistics
                this.dashboardStats = yield this.backendService.getDashboardStats();
                // Load budget data (expenditure)
                yield this.loadBudgetData();
                // Load revenue data
                yield this.loadRevenueData();
                // Only load indicators if backend is connected
                if (this.backendConnected) {
                    yield this.loadIndicatorsData();
                }
                // Load aggregated data
                this.aggregatedData = yield this.backendService.getBudgetAggregates('category');
            }
            catch (error) {
                console.error('Error loading dashboard data:', error);
            }
            finally {
                this.loading = false;
            }
        });
    }
    /**
     * Load budget data based on current filters
     */
    loadBudgetData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.selectedCategory) {
                    this.budgetData = yield this.backendService.getBudgetDataByCategory(this.selectedCategory);
                }
                else if (this.selectedMinistry) {
                    this.budgetData = yield this.backendService.getBudgetDataByMinistry(this.selectedMinistry);
                }
                else {
                    this.budgetData = yield this.backendService.getBudgetDataByYear(this.selectedYear);
                }
            }
            catch (error) {
                console.error('Error loading budget data:', error);
                this.budgetData = [];
            }
        });
    }
    /**
     * Load revenue data based on current filters
     */
    loadRevenueData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.revenueData = yield this.backendService.getRevenueDataByYear(this.selectedYear);
            }
            catch (error) {
                console.error('Error loading revenue data:', error);
                this.revenueData = [];
            }
        });
    }
    /**
     * Load indicators data based on current filters
     */
    loadIndicatorsData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.selectedIndicatorCategory) {
                    this.indicatorsData = yield this.backendService.getIndicatorsByCategory(this.selectedIndicatorCategory);
                }
                else {
                    this.indicatorsData = yield this.backendService.getIndicatorsByYear(this.selectedYear);
                }
            }
            catch (error) {
                console.error('Error loading indicators data:', error);
                this.indicatorsData = [];
            }
        });
    }
    /**
     * Handle year filter change
     */
    onYearChange(year) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedYear = year;
            this.selectedCategory = '';
            this.selectedMinistry = '';
            this.selectedIndicatorCategory = '';
            this.loading = true;
            yield this.loadBudgetData();
            // Only reload indicators if backend is connected
            if (this.backendConnected) {
                yield this.loadIndicatorsData();
            }
            this.loading = false;
        });
    }
    /**
     * Handle category filter change
     */
    onCategoryChange(category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedCategory = category;
            this.selectedMinistry = '';
            this.loading = true;
            yield this.loadBudgetData();
            this.loading = false;
        });
    }
    /**
     * Handle ministry filter change
     */
    onMinistryChange(ministry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedMinistry = ministry;
            this.selectedCategory = '';
            this.loading = true;
            yield this.loadBudgetData();
            this.loading = false;
        });
    }
    /**
     * Handle indicator category filter change
     */
    onIndicatorCategoryChange(category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedIndicatorCategory = category;
            this.loading = true;
            yield this.loadIndicatorsData();
            this.loading = false;
        });
    }
    /**
     * Clear all filters
     */
    clearFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedCategory = '';
            this.selectedMinistry = '';
            this.selectedIndicatorCategory = '';
            this.selectedYear = new Date().getFullYear();
            this.loading = true;
            yield this.loadBudgetData();
            // Only reload indicators if backend is connected
            if (this.backendConnected) {
                yield this.loadIndicatorsData();
            }
            this.loading = false;
        });
    }
    /**
     * Get unique ministries from budget data
     */
    getUniqueMinistries() {
        const ministries = [...new Set(this.budgetData.map(item => item.ministry))];
        return ministries.filter(ministry => ministry && ministry.length > 0);
    }
    /**
     * Calculate total budget amount
     */
    getTotalBudget() {
        return this.budgetData.reduce((total, item) => total + (item.amount || 0), 0);
    }
    /**
     * Get budget data grouped by category
     */
    getBudgetByCategory() {
        const categoryGroups = {};
        this.budgetData.forEach(item => {
            const categoryKey = item.category || 'other';
            const categoryName = this.backendService.getCategoryDisplayName(categoryKey);
            if (!categoryGroups[categoryKey]) {
                categoryGroups[categoryKey] = { name: categoryName, total: 0, count: 0 };
            }
            categoryGroups[categoryKey].total += item.amount || 0;
            categoryGroups[categoryKey].count += 1;
        });
        return Object.keys(categoryGroups).map(key => (Object.assign({ category: key }, categoryGroups[key]))).sort((a, b) => b.total - a.total);
    }
    /**
     * Get budget data grouped by ministry
     */
    getBudgetByMinistry() {
        const ministryGroups = {};
        this.budgetData.forEach(item => {
            const ministryKey = item.ministry || 'Unknown';
            if (!ministryGroups[ministryKey]) {
                ministryGroups[ministryKey] = { name: ministryKey, total: 0, count: 0 };
            }
            ministryGroups[ministryKey].total += item.amount || 0;
            ministryGroups[ministryKey].count += 1;
        });
        return Object.keys(ministryGroups).map(key => (Object.assign({ ministry: key }, ministryGroups[key]))).sort((a, b) => b.total - a.total);
    }
    /**
     * Get total revenue amount
     */
    getTotalRevenue() {
        return this.revenueData.reduce((sum, item) => sum + (item.amount || 0), 0);
    }
    /**
     * Get total expenditure amount
     */
    getTotalExpenditure() {
        return this.budgetData.reduce((sum, item) => sum + (item.amount || 0), 0);
    }
    /**
     * Format currency for display
     */
    formatCurrency(amount) {
        return this.backendService.formatCurrency(amount);
    }
    /**
     * Get percentage of total budget
     */
    getPercentageOfTotal(amount) {
        const total = this.getTotalBudget();
        if (total === 0)
            return '0';
        return ((amount / total) * 100).toFixed(1);
    }
    /**
     * Get indicators grouped by category
     */
    getIndicatorsByCategory() {
        const categoryGroups = {};
        this.indicatorsData.forEach(indicator => {
            const categoryKey = indicator.category || 'other';
            const categoryName = this.getIndicatorCategoryDisplayName(categoryKey);
            if (!categoryGroups[categoryKey]) {
                categoryGroups[categoryKey] = { name: categoryName, indicators: [] };
            }
            categoryGroups[categoryKey].indicators.push(indicator);
        });
        return Object.keys(categoryGroups).map(key => (Object.assign({ category: key }, categoryGroups[key])));
    }
    /**
     * Get indicator category display name in Mongolian
     */
    getIndicatorCategoryDisplayName(category) {
        const categoryNames = {
            'economic': 'Эдийн засаг',
            'social': 'Нийгэм',
            'fiscal': 'Төсөв санхүү',
            'environmental': 'Байгаль орчин',
            'governance': 'Засаглал',
            'other': 'Бусад'
        };
        return categoryNames[category] || category;
    }
    /**
     * Get indicator status icon
     */
    getIndicatorStatusIcon(status) {
        switch (status) {
            case 'increase':
                return '📈';
            case 'decrease':
                return '📉';
            case 'stable':
                return '➡️';
            default:
                return '📊';
        }
    }
    /**
     * Get indicator status color class
     */
    getIndicatorStatusClass(status) {
        switch (status) {
            case 'increase':
                return 'text-success';
            case 'decrease':
                return 'text-danger';
            case 'stable':
                return 'text-warning';
            default:
                return 'text-info';
        }
    }
    /**
     * Track function for ngFor performance optimization
     */
    trackByFn(index, item) {
        return item.id || index;
    }
    /**
     * Track function for indicators ngFor performance optimization
     */
    trackIndicatorByFn(index, item) {
        return item.id || index;
    }
    /**
     * Math helper for templates
     */
    get Math() {
        return Math;
    }
    /**
     * Check if indicators section should be displayed
     */
    shouldShowIndicators() {
        return this.backendConnected && this.indicatorsData.length > 0;
    }
}
BudgetDashboardComponent.ɵfac = function BudgetDashboardComponent_Factory(t) { return new (t || BudgetDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"])); };
BudgetDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BudgetDashboardComponent, selectors: [["app-budget-dashboard"]], decls: 13, vars: 6, consts: [[1, "budget-dashboard"], [1, "dashboard-header"], [1, "fas", "fa-chart-line"], [1, "subtitle"], [1, "connection-status", 3, "ngClass"], [1, "fas", 3, "ngClass"], [4, "ngIf"], ["class", "no-backend-message", 4, "ngIf"], [1, "no-backend-message"], [1, "alert", "alert-warning"], [1, "fas", "fa-info-circle"], ["class", "loading-container", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], ["class", "stats-container", 4, "ngIf"], [1, "filters-container"], [1, "filters-row"], [1, "filter-group"], ["for", "year-select"], ["id", "year-select", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "category-select"], ["id", "category-select", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["for", "ministry-select"], ["id", "ministry-select", 3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], ["class", "indicators-container", 4, "ngIf"], [1, "budget-overview"], [1, "overview-header"], [1, "total-budget"], [1, "label"], [1, "amount"], [1, "chart-container"], [1, "category-bars"], ["class", "category-bar-item", 4, "ngFor", "ngForOf"], [1, "ministry-bars"], ["class", "ministry-bar-item", 4, "ngFor", "ngForOf"], [1, "budget-table-container"], ["class", "no-data", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "stats-container"], [1, "stats-grid"], [1, "stat-card", "revenue-card"], [1, "stat-icon"], [1, "fas", "fa-arrow-up"], [1, "stat-content"], [1, "stat-card", "expenditure-card"], [1, "fas", "fa-arrow-down"], [1, "stat-card"], [1, "fas", "fa-money-bill-wave"], [1, "fas", "fa-list"], ["class", "last-update", 4, "ngIf"], [1, "last-update"], [1, "fas", "fa-clock"], [3, "value"], [1, "indicators-container"], [1, "section-header"], [1, "indicator-filter"], ["for", "indicator-category-select"], ["id", "indicator-category-select", 3, "ngModel", "ngModelChange", "change"], [1, "no-data"], [1, "fas", "fa-chart-bar"], [1, "indicators-grid"], ["class", "indicator-card", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "indicators-by-category", 4, "ngIf"], [1, "indicator-card", 3, "ngClass"], [1, "indicator-header"], [1, "indicator-icon"], [1, "indicator-category"], [1, "indicator-content"], [1, "indicator-name"], [1, "indicator-value"], [1, "current-value"], [1, "unit"], ["class", "indicator-change", 4, "ngIf"], ["class", "indicator-description", 4, "ngIf"], [1, "indicator-meta"], [1, "indicator-year"], [1, "indicator-change"], [1, "previous-value"], [1, "change-percentage", 3, "ngClass"], [1, "indicator-description"], [1, "indicators-by-category"], ["class", "category-group", 4, "ngFor", "ngForOf"], [1, "category-group"], [1, "category-title"], [1, "fas", "fa-folder"], [1, "count"], [1, "category-indicators"], ["class", "mini-indicator", 4, "ngFor", "ngForOf"], [1, "mini-indicator"], [1, "mini-indicator-name"], [1, "mini-indicator-value"], ["class", "mini-change", 3, "ngClass", 4, "ngIf"], [1, "mini-change", 3, "ngClass"], [1, "category-bar-item"], [1, "category-info"], [1, "category-name"], [1, "category-amount"], [1, "category-percentage"], [1, "progress-bar"], [1, "progress-fill"], [1, "ministry-bar-item"], [1, "ministry-info"], [1, "ministry-name"], [1, "ministry-amount"], [1, "ministry-percentage"], [1, "fas", "fa-inbox"], [1, "table-responsive"], [1, "budget-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "category-tag"], [1, "description"]], template: function BudgetDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "NestJS Backend \u0441\u0438\u0441\u0442\u0435\u043C\u044D\u044D\u0441 \u0430\u0432\u0441\u0430\u043D \u04E9\u0433\u04E9\u0433\u0434\u04E9\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BudgetDashboardComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BudgetDashboardComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BudgetDashboardComponent_div_11_Template, 9, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BudgetDashboardComponent_div_12_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.backendConnected ? "connected" : "disconnected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.backendConnected ? "fa-wifi" : "fa-exclamation-triangle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.backendConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.backendConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.backendConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.backendConnected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".budget-dashboard[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n  font-family: \"Arial\", sans-serif;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #2c3e50;\n  margin-bottom: 10px;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: #3498db;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #7f8c8d;\n  margin-bottom: 0;\n}\n\n.connection-status[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 500;\n}\n\n.connection-status.connected[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n\n.connection-status.connected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n\n.connection-status.disconnected[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f1b2b7;\n}\n\n.connection-status.disconnected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.no-backend-message[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.no-backend-message[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-radius: 8px;\n  border: 1px solid transparent;\n}\n\n.no-backend-message[_ngcontent-%COMP%]   .alert.alert-warning[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-color: #ffeaa7;\n  color: #856404;\n}\n\n.no-backend-message[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.no-backend-message[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background-color: #f1f3f4;\n  padding: 3px 6px;\n  border-radius: 4px;\n  font-family: \"Monaco\", \"Menlo\", monospace;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 1.1rem;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.stats-container[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #3498db, #2980b9);\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #2c3e50;\n  margin: 0 0 5px 0;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  margin: 0;\n  font-size: 0.95rem;\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card.revenue-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #16a085);\n}\n\n.stats-container[_ngcontent-%COMP%]   .stat-card.expenditure-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.stats-container[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #7f8c8d;\n  font-size: 0.9rem;\n}\n\n.stats-container[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.filters-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  margin-bottom: 30px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.filters-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 20px;\n  font-size: 1.4rem;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: end;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n  margin-bottom: 5px;\n  font-size: 0.9rem;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  background: white;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n\n.filters-container[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.budget-overview[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.budget-overview[_ngcontent-%COMP%]   .overview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.budget-overview[_ngcontent-%COMP%]   .overview-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin: 0;\n}\n\n.budget-overview[_ngcontent-%COMP%]   .overview-header[_ngcontent-%COMP%]   .total-budget[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.budget-overview[_ngcontent-%COMP%]   .overview-header[_ngcontent-%COMP%]   .total-budget[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  margin-right: 10px;\n}\n\n.budget-overview[_ngcontent-%COMP%]   .overview-header[_ngcontent-%COMP%]   .total-budget[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #27ae60;\n  font-size: 1.4rem;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  margin-bottom: 25px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.chart-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  flex: 1;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-amount[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #27ae60;\n  margin-right: 10px;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .category-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .ministry-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 0.9rem;\n  min-width: 60px;\n  text-align: right;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background-color: #ecf0f1;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.category-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%], .category-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .category-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%], .ministry-bars[_ngcontent-%COMP%]   .ministry-bar-item[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #3498db, #2980b9);\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n\n.budget-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 25px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.budget-table-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 20px;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #7f8c8d;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 15px;\n  color: #bdc3c7;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  text-align: left;\n  font-weight: 600;\n  color: #2c3e50;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n  transition: background-color 0.2s ease;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  vertical-align: top;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #27ae60;\n  text-align: right;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.description[_ngcontent-%COMP%] {\n  max-width: 200px;\n  word-wrap: break-word;\n  color: #7f8c8d;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   .category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  background-color: #e9ecef;\n  color: #495057;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   .category-tag[data-category=education][_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  color: #0c5460;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   .category-tag[data-category=health][_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   .category-tag[data-category=infrastructure][_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n\n.budget-table-container[_ngcontent-%COMP%]   .budget-table[_ngcontent-%COMP%]   .category-tag[data-category=defense][_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n\n@media (max-width: 768px) {\n  .budget-dashboard[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters-row[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  .overview-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 15px;\n  }\n\n  .category-info[_ngcontent-%COMP%], .ministry-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 5px;\n  }\n  .category-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .category-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%], .ministry-info[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%], .ministry-info[_ngcontent-%COMP%]   .ministry-percentage[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .budget-table[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .budget-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .budget-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n}\n\n.indicators-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  padding: 25px;\n  margin-bottom: 30px;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .indicator-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .indicator-filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #34495e;\n  white-space: nowrap;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .indicator-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  font-size: 14px;\n  min-width: 150px;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #7f8c8d;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 15px;\n  display: block;\n}\n\n.indicators-container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n\n.indicators-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  padding: 20px;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-success[_ngcontent-%COMP%] {\n  border-left: 4px solid #28a745;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-success[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%]   .indicator-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n  background: rgba(40, 167, 69, 0.1);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-danger[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc3545;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-danger[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%]   .indicator-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n  background: rgba(220, 53, 69, 0.1);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #ffc107;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-warning[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%]   .indicator-icon[_ngcontent-%COMP%] {\n  color: #ffc107;\n  background: rgba(255, 193, 7, 0.1);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-info[_ngcontent-%COMP%] {\n  border-left: 4px solid #17a2b8;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card.text-info[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%]   .indicator-icon[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  background: rgba(23, 162, 184, 0.1);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%]   .indicator-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-header[_ngcontent-%COMP%]   .indicator-category[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: 500;\n  padding: 4px 8px;\n  background: #f8f9fa;\n  border-radius: 4px;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 12px;\n  line-height: 1.3;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-value[_ngcontent-%COMP%]   .current-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-change[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  font-size: 0.9rem;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-change[_ngcontent-%COMP%]   .previous-value[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-change[_ngcontent-%COMP%]   .change-percentage[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.85rem;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-change[_ngcontent-%COMP%]   .change-percentage.positive[_ngcontent-%COMP%] {\n  color: #28a745;\n  background: rgba(40, 167, 69, 0.1);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-change[_ngcontent-%COMP%]   .change-percentage.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n  background: rgba(220, 53, 69, 0.1);\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n  margin-bottom: 10px;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-meta[_ngcontent-%COMP%]   .indicator-year[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #868e96;\n  font-style: italic;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  color: #2c3e50;\n  margin-bottom: 15px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e0e0e0;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  font-weight: normal;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 15px;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 15px;\n  transition: all 0.2s ease;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%]:hover {\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%]   .mini-indicator-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #2c3e50;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%]   .mini-indicator-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%]   .mini-indicator-value[_ngcontent-%COMP%]   .mini-change[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%]   .mini-indicator-value[_ngcontent-%COMP%]   .mini-change.positive[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n\n.indicators-by-category[_ngcontent-%COMP%]   .category-group[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%]   .mini-indicator[_ngcontent-%COMP%]   .mini-indicator-value[_ngcontent-%COMP%]   .mini-change.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n@media (max-width: 768px) {\n  .indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 15px;\n  }\n  .indicators-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .indicator-filter[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .indicators-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .indicators-grid[_ngcontent-%COMP%]   .indicator-card[_ngcontent-%COMP%]   .indicator-content[_ngcontent-%COMP%]   .indicator-value[_ngcontent-%COMP%]   .current-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .indicators-by-category[_ngcontent-%COMP%]   .category-indicators[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvcGFnZXMvYnVkZ2V0LWRhc2hib2FyZC9idWRnZXQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9idWRnZXQtZGFzaGJvYXJkL2J1ZGdldC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNBTjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRko7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURNRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDSko7O0FETUk7RUFDRSxjQUFBO0FDSk47O0FEUUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ05KOztBRFFJO0VBQ0UsY0FBQTtBQ05OOztBRFdBO0VBQ0UsbUJBQUE7QUNSRjs7QURVRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ1JKOztBRFVJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNSTjs7QURXSTtFQUNFLGlCQUFBO0FDVE47O0FEWUk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ1ZOOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ2JGOztBRGVFO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtF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IiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnVkZ2V0LWRhc2hib2FyZC9idWRnZXQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1ZGdldC1kYXNoYm9hcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG4vLyBIZWFkZXJcbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgXG4gICAgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBjb2xvcjogIzM0OThkYjtcbiAgICB9XG4gIH1cbiAgXG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4vLyBDb25uZWN0aW9uIFN0YXR1c1xuLmNvbm5lY3Rpb24tc3RhdHVzIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgXG4gICYuY29ubmVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG4gICAgXG4gICAgaSB7XG4gICAgICBjb2xvcjogIzI4YTc0NTtcbiAgICB9XG4gIH1cbiAgXG4gICYuZGlzY29ubmVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWIyYjc7XG4gICAgXG4gICAgaSB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9XG4gIH1cbn1cblxuLm5vLWJhY2tlbmQtbWVzc2FnZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIFxuICAuYWxlcnQge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgJi5hbGVydC13YXJuaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gICAgICBib3JkZXItY29sb3I6ICNmZmVhYTc7XG4gICAgICBjb2xvcjogIzg1NjQwNDtcbiAgICB9XG4gICAgXG4gICAgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgXG4gICAgY29kZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y0O1xuICAgICAgcGFkZGluZzogM3B4IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9uYWNvJywgJ01lbmxvJywgbW9ub3NwYWNlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMb2FkaW5nXG4ubG9hZGluZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIFxuICAuc3Bpbm5lciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vLyBTdGF0aXN0aWNzXG4uc3RhdHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgXG4gIC5zdGF0cy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuc3RhdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbiAgICBcbiAgICAuc3RhdC1pY29uIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zdGF0LWNvbnRlbnQge1xuICAgICAgZmxleDogMTtcbiAgICAgIFxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXZlbnVlIGNhcmQgc3BlY2lmaWMgc3R5bGluZ1xuICAgICYucmV2ZW51ZS1jYXJkIHtcbiAgICAgIC5zdGF0LWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMTZhMDg1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBlbmRpdHVyZSBjYXJkIHNwZWNpZmljIHN0eWxpbmdcbiAgICAmLmV4cGVuZGl0dXJlLWNhcmQge1xuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmxhc3QtdXBkYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgXG4gICAgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmlsdGVyc1xuLmZpbHRlcnMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIFxuICBoMiB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICBcbiAgLmZpbHRlcnMtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgfVxuICBcbiAgLmZpbHRlci1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgXG4gICAgbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICAgIFxuICAgICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjI2ODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEJ1ZGdldCBPdmVydmlld1xuLmJ1ZGdldC1vdmVydmlldyB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIFxuICAub3ZlcnZpZXctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgXG4gICAgaDIge1xuICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIFxuICAgIC50b3RhbC1idWRnZXQge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBcbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5hbW91bnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGFydHNcbi5jaGFydC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgXG4gIGgzIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi5jYXRlZ29yeS1iYXJzLCAubWluaXN0cnktYmFycyB7XG4gIC5jYXRlZ29yeS1iYXItaXRlbSwgLm1pbmlzdHJ5LWJhci1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIFxuICAgIC5jYXRlZ29yeS1pbmZvLCAubWluaXN0cnktaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIFxuICAgICAgLmNhdGVnb3J5LW5hbWUsIC5taW5pc3RyeS1uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jYXRlZ29yeS1hbW91bnQsIC5taW5pc3RyeS1hbW91bnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNhdGVnb3J5LXBlcmNlbnRhZ2UsIC5taW5pc3RyeS1wZXJjZW50YWdlIHtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgLnByb2dyZXNzLWZpbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzM0OThkYiwgIzI5ODBiOSk7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBCdWRnZXQgVGFibGVcbi5idWRnZXQtdGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIFxuICBoMiB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLm5vLWRhdGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgIFxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGNvbG9yOiAjYmRjM2M3O1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgXG4gIC5idWRnZXQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgXG4gICAgdGhlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIFxuICAgICAgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGJvZHkge1xuICAgICAgdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgXG4gICAgICAgICAgJi5hbW91bnQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjdhZTYwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICYuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY2F0ZWdvcnktdGFnIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICBcbiAgICAgICZbZGF0YS1jYXRlZ29yeT1cImVkdWNhdGlvblwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gICAgICAgIGNvbG9yOiAjMGM1NDYwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmW2RhdGEtY2F0ZWdvcnk9XCJoZWFsdGhcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgICAgICBjb2xvcjogIzE1NTcyNDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJltkYXRhLWNhdGVnb3J5PVwiaW5mcmFzdHJ1Y3R1cmVcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICAgICAgICBjb2xvcjogIzg1NjQwNDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJltkYXRhLWNhdGVnb3J5PVwiZGVmZW5zZVwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idWRnZXQtZGFzaGJvYXJkIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIFxuICAuc3RhdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5maWx0ZXJzLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBcbiAgICAuZmlsdGVyLWdyb3VwIHtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC5vdmVydmlldy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAuY2F0ZWdvcnktaW5mbywgLm1pbmlzdHJ5LWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiA1cHg7XG4gICAgXG4gICAgLmNhdGVnb3J5LXBlcmNlbnRhZ2UsIC5taW5pc3RyeS1wZXJjZW50YWdlIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG4gIFxuICAuYnVkZ2V0LXRhYmxlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBcbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi8vIEluZGljYXRvcnMgU2VjdGlvblxuLmluZGljYXRvcnMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICBoMiB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMzNDk4ZGI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZGljYXRvci1maWx0ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMzNDQ5NWU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vLWRhdGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgY29sb3I6ICM3ZjhjOGQ7XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJbmRpY2F0b3JzIEdyaWRcbi5pbmRpY2F0b3JzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIC5pbmRpY2F0b3ItY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cblxuICAgICYudGV4dC1zdWNjZXNzIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzI4YTc0NTtcbiAgICAgIFxuICAgICAgLmluZGljYXRvci1oZWFkZXIgLmluZGljYXRvci1pY29uIHtcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi50ZXh0LWRhbmdlciB7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkYzM1NDU7XG4gICAgICBcbiAgICAgIC5pbmRpY2F0b3ItaGVhZGVyIC5pbmRpY2F0b3ItaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYudGV4dC13YXJuaW5nIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmYzEwNztcbiAgICAgIFxuICAgICAgLmluZGljYXRvci1oZWFkZXIgLmluZGljYXRvci1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmMxMDc7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi50ZXh0LWluZm8ge1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTdhMmI4O1xuICAgICAgXG4gICAgICAuaW5kaWNhdG9yLWhlYWRlciAuaW5kaWNhdG9yLWljb24ge1xuICAgICAgICBjb2xvcjogIzE3YTJiODtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMywgMTYyLCAxODQsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZGljYXRvci1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAuaW5kaWNhdG9yLWljb24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cblxuICAgICAgLmluZGljYXRvci1jYXRlZ29yeSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5kaWNhdG9yLWNvbnRlbnQge1xuICAgICAgLmluZGljYXRvci1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgfVxuXG4gICAgICAuaW5kaWNhdG9yLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAuY3VycmVudC12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICAgIH1cblxuICAgICAgICAudW5pdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmluZGljYXRvci1jaGFuZ2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgICAgIC5wcmV2aW91cy12YWx1ZSB7XG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhbmdlLXBlcmNlbnRhZ2Uge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gICAgICAgICAgJi5wb3NpdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzI4YTc0NTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5uZWdhdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbmRpY2F0b3ItZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5pbmRpY2F0b3ItbWV0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgLmluZGljYXRvci15ZWFyIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogIzg2OGU5NjtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSW5kaWNhdG9ycyBieSBDYXRlZ29yeVxuLmluZGljYXRvcnMtYnktY2F0ZWdvcnkge1xuICAuY2F0ZWdvcnktZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG5cbiAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTBlMGUwO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMzNDk4ZGI7XG4gICAgICB9XG5cbiAgICAgIC5jb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2F0ZWdvcnktaW5kaWNhdG9ycyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgICBnYXA6IDE1cHg7XG5cbiAgICAgIC5taW5pLWluZGljYXRvciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1pbmktaW5kaWNhdG9yLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIH1cblxuICAgICAgICAubWluaS1pbmRpY2F0b3ItdmFsdWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gICAgICAgICAgLm1pbmktY2hhbmdlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcblxuICAgICAgICAgICAgJi5wb3NpdGl2ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjhhNzQ1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5lZ2F0aXZlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmluZGljYXRvcnMtY29udGFpbmVyIHtcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgZ2FwOiAxNXB4O1xuXG4gICAgICAuaW5kaWNhdG9yLWZpbHRlciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5kaWNhdG9ycy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBcbiAgICAuaW5kaWNhdG9yLWNhcmQge1xuICAgICAgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItdmFsdWUge1xuICAgICAgICAuY3VycmVudC12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSB7XG4gICAgLmNhdGVnb3J5LWluZGljYXRvcnMge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG59XG4iLCIuYnVkZ2V0LWRhc2hib2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmRhc2hib2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZGFzaGJvYXJkLWhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyIGgxIGkge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmRhc2hib2FyZC1oZWFkZXIgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29ubmVjdGlvbi1zdGF0dXMge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbm5lY3Rpb24tc3RhdHVzLmNvbm5lY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xufVxuLmNvbm5lY3Rpb24tc3RhdHVzLmNvbm5lY3RlZCBpIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG4uY29ubmVjdGlvbi1zdGF0dXMuZGlzY29ubmVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWIyYjc7XG59XG4uY29ubmVjdGlvbi1zdGF0dXMuZGlzY29ubmVjdGVkIGkge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLm5vLWJhY2tlbmQtbWVzc2FnZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubm8tYmFja2VuZC1tZXNzYWdlIC5hbGVydCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5uby1iYWNrZW5kLW1lc3NhZ2UgLmFsZXJ0LmFsZXJ0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICBib3JkZXItY29sb3I6ICNmZmVhYTc7XG4gIGNvbG9yOiAjODU2NDA0O1xufVxuLm5vLWJhY2tlbmQtbWVzc2FnZSAuYWxlcnQgaSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm5vLWJhY2tlbmQtbWVzc2FnZSAuYWxlcnQgY29kZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9uYWNvXCIsIFwiTWVubG9cIiwgbW9ub3NwYWNlO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG4ubG9hZGluZy1jb250YWluZXIgLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xufVxuLmxvYWRpbmctY29udGFpbmVyIHAge1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uc3RhdHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5zdGF0cy1jb250YWluZXIgLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uc3RhdHMtY29udGFpbmVyIC5zdGF0LWNhcmQgLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkIC5zdGF0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkIC5zdGF0LWNvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkIC5zdGF0LWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cbi5zdGF0cy1jb250YWluZXIgLnN0YXQtY2FyZCAuc3RhdC1jb250ZW50IHAge1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uc3RhdHMtY29udGFpbmVyIC5zdGF0LWNhcmQucmV2ZW51ZS1jYXJkIC5zdGF0LWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMTZhMDg1KTtcbn1cbi5zdGF0cy1jb250YWluZXIgLnN0YXQtY2FyZC5leHBlbmRpdHVyZS1jYXJkIC5zdGF0LWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcbn1cbi5zdGF0cy1jb250YWluZXIgLmxhc3QtdXBkYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uc3RhdHMtY29udGFpbmVyIC5sYXN0LXVwZGF0ZSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5maWx0ZXJzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmZpbHRlcnMtY29udGFpbmVyIGgyIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmZpbHRlcnMtY29udGFpbmVyIC5maWx0ZXJzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuLmZpbHRlcnMtY29udGFpbmVyIC5maWx0ZXItZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLmZpbHRlcnMtY29udGFpbmVyIC5maWx0ZXItZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuZmlsdGVyLWdyb3VwIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZmlsdGVycy1jb250YWluZXIgLmZpbHRlci1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuZmlsdGVyLWdyb3VwIC5idG4ge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuLmZpbHRlcnMtY29udGFpbmVyIC5maWx0ZXItZ3JvdXAgLmJ0bi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZpbHRlcnMtY29udGFpbmVyIC5maWx0ZXItZ3JvdXAgLmJ0bi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjI2ODtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuZmlsdGVyLWdyb3VwIC5idG4gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYnVkZ2V0LW92ZXJ2aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5idWRnZXQtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5idWRnZXQtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciBoMiB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDA7XG59XG4uYnVkZ2V0LW92ZXJ2aWV3IC5vdmVydmlldy1oZWFkZXIgLnRvdGFsLWJ1ZGdldCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmJ1ZGdldC1vdmVydmlldyAub3ZlcnZpZXctaGVhZGVyIC50b3RhbC1idWRnZXQgLmxhYmVsIHtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5idWRnZXQtb3ZlcnZpZXcgLm92ZXJ2aWV3LWhlYWRlciAudG90YWwtYnVkZ2V0IC5hbW91bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyN2FlNjA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uY2hhcnQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY2hhcnQtY29udGFpbmVyIGgzIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY2F0ZWdvcnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0sIC5jYXRlZ29yeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSwgLm1pbmlzdHJ5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtLCAubWluaXN0cnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNhdGVnb3J5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvLCAuY2F0ZWdvcnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8sIC5jYXRlZ29yeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbywgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvLCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8sIC5taW5pc3RyeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAubWluaXN0cnktaW5mbywgLm1pbmlzdHJ5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvLCAubWluaXN0cnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXRlZ29yeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAuY2F0ZWdvcnktbmFtZSwgLmNhdGVnb3J5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5taW5pc3RyeS1uYW1lLCAuY2F0ZWdvcnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LW5hbWUsIC5jYXRlZ29yeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAubWluaXN0cnktbmFtZSwgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5jYXRlZ29yeS1uYW1lLCAuY2F0ZWdvcnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8gLm1pbmlzdHJ5LW5hbWUsIC5jYXRlZ29yeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAuY2F0ZWdvcnktbmFtZSwgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5taW5pc3RyeS1uYW1lLCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8gLmNhdGVnb3J5LW5hbWUsIC5taW5pc3RyeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAubWluaXN0cnktbmFtZSwgLm1pbmlzdHJ5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5jYXRlZ29yeS1uYW1lLCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLm1pbmlzdHJ5LW5hbWUsIC5taW5pc3RyeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAuY2F0ZWdvcnktbmFtZSwgLm1pbmlzdHJ5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5taW5pc3RyeS1uYW1lLCAubWluaXN0cnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LW5hbWUsIC5taW5pc3RyeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAubWluaXN0cnktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmbGV4OiAxO1xufVxuLmNhdGVnb3J5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5jYXRlZ29yeS1hbW91bnQsIC5jYXRlZ29yeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAubWluaXN0cnktYW1vdW50LCAuY2F0ZWdvcnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LWFtb3VudCwgLmNhdGVnb3J5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5taW5pc3RyeS1hbW91bnQsIC5jYXRlZ29yeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAuY2F0ZWdvcnktYW1vdW50LCAuY2F0ZWdvcnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8gLm1pbmlzdHJ5LWFtb3VudCwgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5jYXRlZ29yeS1hbW91bnQsIC5jYXRlZ29yeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAubWluaXN0cnktYW1vdW50LCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8gLmNhdGVnb3J5LWFtb3VudCwgLm1pbmlzdHJ5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5taW5pc3RyeS1hbW91bnQsIC5taW5pc3RyeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAuY2F0ZWdvcnktYW1vdW50LCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLm1pbmlzdHJ5LWFtb3VudCwgLm1pbmlzdHJ5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5jYXRlZ29yeS1hbW91bnQsIC5taW5pc3RyeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAubWluaXN0cnktYW1vdW50LCAubWluaXN0cnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LWFtb3VudCwgLm1pbmlzdHJ5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5taW5pc3RyeS1hbW91bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyN2FlNjA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jYXRlZ29yeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAuY2F0ZWdvcnktcGVyY2VudGFnZSwgLmNhdGVnb3J5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5taW5pc3RyeS1wZXJjZW50YWdlLCAuY2F0ZWdvcnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LXBlcmNlbnRhZ2UsIC5jYXRlZ29yeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAubWluaXN0cnktcGVyY2VudGFnZSwgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5jYXRlZ29yeS1wZXJjZW50YWdlLCAuY2F0ZWdvcnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8gLm1pbmlzdHJ5LXBlcmNlbnRhZ2UsIC5jYXRlZ29yeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAuY2F0ZWdvcnktcGVyY2VudGFnZSwgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5taW5pc3RyeS1wZXJjZW50YWdlLCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLmNhdGVnb3J5LWluZm8gLmNhdGVnb3J5LXBlcmNlbnRhZ2UsIC5taW5pc3RyeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAubWluaXN0cnktcGVyY2VudGFnZSwgLm1pbmlzdHJ5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5taW5pc3RyeS1pbmZvIC5jYXRlZ29yeS1wZXJjZW50YWdlLCAubWluaXN0cnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLm1pbmlzdHJ5LXBlcmNlbnRhZ2UsIC5taW5pc3RyeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAuY2F0ZWdvcnktaW5mbyAuY2F0ZWdvcnktcGVyY2VudGFnZSwgLm1pbmlzdHJ5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5jYXRlZ29yeS1pbmZvIC5taW5pc3RyeS1wZXJjZW50YWdlLCAubWluaXN0cnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LXBlcmNlbnRhZ2UsIC5taW5pc3RyeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAubWluaXN0cnktaW5mbyAubWluaXN0cnktcGVyY2VudGFnZSB7XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXRlZ29yeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAucHJvZ3Jlc3MtYmFyLCAuY2F0ZWdvcnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLnByb2dyZXNzLWJhciwgLm1pbmlzdHJ5LWJhcnMgLmNhdGVnb3J5LWJhci1pdGVtIC5wcm9ncmVzcy1iYXIsIC5taW5pc3RyeS1iYXJzIC5taW5pc3RyeS1iYXItaXRlbSAucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2F0ZWdvcnktYmFycyAuY2F0ZWdvcnktYmFyLWl0ZW0gLnByb2dyZXNzLWJhciAucHJvZ3Jlc3MtZmlsbCwgLmNhdGVnb3J5LWJhcnMgLm1pbmlzdHJ5LWJhci1pdGVtIC5wcm9ncmVzcy1iYXIgLnByb2dyZXNzLWZpbGwsIC5taW5pc3RyeS1iYXJzIC5jYXRlZ29yeS1iYXItaXRlbSAucHJvZ3Jlc3MtYmFyIC5wcm9ncmVzcy1maWxsLCAubWluaXN0cnktYmFycyAubWluaXN0cnktYmFyLWl0ZW0gLnByb2dyZXNzLWJhciAucHJvZ3Jlc3MtZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idWRnZXQtdGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciBoMiB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJ1ZGdldC10YWJsZS1jb250YWluZXIgLm5vLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGNvbG9yOiAjN2Y4YzhkO1xufVxuLmJ1ZGdldC10YWJsZS1jb250YWluZXIgLm5vLWRhdGEgaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICNiZGMzYzc7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAubm8tZGF0YSBwIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmJ1ZGdldC10YWJsZS1jb250YWluZXIgLmJ1ZGdldC10YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuLmJ1ZGdldC10YWJsZS1jb250YWluZXIgLmJ1ZGdldC10YWJsZSB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmJ1ZGdldC10YWJsZS1jb250YWluZXIgLmJ1ZGdldC10YWJsZSB0Ym9keSB0ciB0ZC5hbW91bnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzI3YWU2MDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIHRib2R5IHRyIHRkLmRlc2NyaXB0aW9uIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjogIzdmOGM4ZDtcbn1cbi5idWRnZXQtdGFibGUtY29udGFpbmVyIC5idWRnZXQtdGFibGUgLmNhdGVnb3J5LXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIC5jYXRlZ29yeS10YWdbZGF0YS1jYXRlZ29yeT1lZHVjYXRpb25dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcbiAgY29sb3I6ICMwYzU0NjA7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIC5jYXRlZ29yeS10YWdbZGF0YS1jYXRlZ29yeT1oZWFsdGhdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgY29sb3I6ICMxNTU3MjQ7XG59XG4uYnVkZ2V0LXRhYmxlLWNvbnRhaW5lciAuYnVkZ2V0LXRhYmxlIC5jYXRlZ29yeS10YWdbZGF0YS1jYXRlZ29yeT1pbmZyYXN0cnVjdHVyZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICBjb2xvcjogIzg1NjQwNDtcbn1cbi5idWRnZXQtdGFibGUtY29udGFpbmVyIC5idWRnZXQtdGFibGUgLmNhdGVnb3J5LXRhZ1tkYXRhLWNhdGVnb3J5PWRlZmVuc2VdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgY29sb3I6ICM3MjFjMjQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnVkZ2V0LWRhc2hib2FyZCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAuc3RhdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZmlsdGVycy1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbiAgLmZpbHRlcnMtcm93IC5maWx0ZXItZ3JvdXAge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5vdmVydmlldy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLmNhdGVnb3J5LWluZm8sIC5taW5pc3RyeS1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogNXB4O1xuICB9XG4gIC5jYXRlZ29yeS1pbmZvIC5jYXRlZ29yeS1wZXJjZW50YWdlLCAuY2F0ZWdvcnktaW5mbyAubWluaXN0cnktcGVyY2VudGFnZSwgLm1pbmlzdHJ5LWluZm8gLmNhdGVnb3J5LXBlcmNlbnRhZ2UsIC5taW5pc3RyeS1pbmZvIC5taW5pc3RyeS1wZXJjZW50YWdlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmJ1ZGdldC10YWJsZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLmJ1ZGdldC10YWJsZSB0aCwgLmJ1ZGdldC10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gIH1cbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAuc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxNXB4O1xufVxuLmluZGljYXRvcnMtY29udGFpbmVyIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAuc2VjdGlvbi1oZWFkZXIgaDIgaSB7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmluZGljYXRvcnMtY29udGFpbmVyIC5zZWN0aW9uLWhlYWRlciAuaW5kaWNhdG9yLWZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAuc2VjdGlvbi1oZWFkZXIgLmluZGljYXRvci1maWx0ZXIgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAuc2VjdGlvbi1oZWFkZXIgLmluZGljYXRvci1maWx0ZXIgc2VsZWN0IHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAubm8tZGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBjb2xvcjogIzdmOGM4ZDtcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAubm8tZGF0YSBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pbmRpY2F0b3JzLWNvbnRhaW5lciAubm8tZGF0YSBwIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmluZGljYXRvcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQudGV4dC1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjhhNzQ1O1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQudGV4dC1zdWNjZXNzIC5pbmRpY2F0b3ItaGVhZGVyIC5pbmRpY2F0b3ItaWNvbiB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQudGV4dC1kYW5nZXIge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkYzM1NDU7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZC50ZXh0LWRhbmdlciAuaW5kaWNhdG9yLWhlYWRlciAuaW5kaWNhdG9yLWljb24ge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkLnRleHQtd2FybmluZyB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmYzEwNztcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkLnRleHQtd2FybmluZyAuaW5kaWNhdG9yLWhlYWRlciAuaW5kaWNhdG9yLWljb24ge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywgMC4xKTtcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkLnRleHQtaW5mbyB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzE3YTJiODtcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkLnRleHQtaW5mbyAuaW5kaWNhdG9yLWhlYWRlciAuaW5kaWNhdG9yLWljb24ge1xuICBjb2xvcjogIzE3YTJiODtcbiAgYmFja2dyb3VuZDogcmdiYSgyMywgMTYyLCAxODQsIDAuMSk7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCAuaW5kaWNhdG9yLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkIC5pbmRpY2F0b3ItaGVhZGVyIC5pbmRpY2F0b3ItaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1oZWFkZXIgLmluZGljYXRvci1jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkIC5pbmRpY2F0b3ItY29udGVudCAuaW5kaWNhdG9yLW5hbWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCAuaW5kaWNhdG9yLWNvbnRlbnQgLmluZGljYXRvci12YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCAuaW5kaWNhdG9yLWNvbnRlbnQgLmluZGljYXRvci12YWx1ZSAuY3VycmVudC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCAuaW5kaWNhdG9yLWNvbnRlbnQgLmluZGljYXRvci12YWx1ZSAudW5pdCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCAuaW5kaWNhdG9yLWNvbnRlbnQgLmluZGljYXRvci1jaGFuZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItY2hhbmdlIC5wcmV2aW91cy12YWx1ZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItY2hhbmdlIC5jaGFuZ2UtcGVyY2VudGFnZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItY2hhbmdlIC5jaGFuZ2UtcGVyY2VudGFnZS5wb3NpdGl2ZSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItY2hhbmdlIC5jaGFuZ2UtcGVyY2VudGFnZS5uZWdhdGl2ZSB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xufVxuLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW5kaWNhdG9ycy1ncmlkIC5pbmRpY2F0b3ItY2FyZCAuaW5kaWNhdG9yLWNvbnRlbnQgLmluZGljYXRvci1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5pbmRpY2F0b3JzLWdyaWQgLmluZGljYXRvci1jYXJkIC5pbmRpY2F0b3ItY29udGVudCAuaW5kaWNhdG9yLW1ldGEgLmluZGljYXRvci15ZWFyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjODY4ZTk2O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pbmRpY2F0b3JzLWJ5LWNhdGVnb3J5IC5jYXRlZ29yeS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSAuY2F0ZWdvcnktZ3JvdXAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMGUwZTA7XG59XG4uaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSAuY2F0ZWdvcnktZ3JvdXAgLmNhdGVnb3J5LXRpdGxlIGkge1xuICBjb2xvcjogIzM0OThkYjtcbn1cbi5pbmRpY2F0b3JzLWJ5LWNhdGVnb3J5IC5jYXRlZ29yeS1ncm91cCAuY2F0ZWdvcnktdGl0bGUgLmNvdW50IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmluZGljYXRvcnMtYnktY2F0ZWdvcnkgLmNhdGVnb3J5LWdyb3VwIC5jYXRlZ29yeS1pbmRpY2F0b3JzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMTVweDtcbn1cbi5pbmRpY2F0b3JzLWJ5LWNhdGVnb3J5IC5jYXRlZ29yeS1ncm91cCAuY2F0ZWdvcnktaW5kaWNhdG9ycyAubWluaS1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSAuY2F0ZWdvcnktZ3JvdXAgLmNhdGVnb3J5LWluZGljYXRvcnMgLm1pbmktaW5kaWNhdG9yOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSAuY2F0ZWdvcnktZ3JvdXAgLmNhdGVnb3J5LWluZGljYXRvcnMgLm1pbmktaW5kaWNhdG9yIC5taW5pLWluZGljYXRvci1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSAuY2F0ZWdvcnktZ3JvdXAgLmNhdGVnb3J5LWluZGljYXRvcnMgLm1pbmktaW5kaWNhdG9yIC5taW5pLWluZGljYXRvci12YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuLmluZGljYXRvcnMtYnktY2F0ZWdvcnkgLmNhdGVnb3J5LWdyb3VwIC5jYXRlZ29yeS1pbmRpY2F0b3JzIC5taW5pLWluZGljYXRvciAubWluaS1pbmRpY2F0b3ItdmFsdWUgLm1pbmktY2hhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uaW5kaWNhdG9ycy1ieS1jYXRlZ29yeSAuY2F0ZWdvcnktZ3JvdXAgLmNhdGVnb3J5LWluZGljYXRvcnMgLm1pbmktaW5kaWNhdG9yIC5taW5pLWluZGljYXRvci12YWx1ZSAubWluaS1jaGFuZ2UucG9zaXRpdmUge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cbi5pbmRpY2F0b3JzLWJ5LWNhdGVnb3J5IC5jYXRlZ29yeS1ncm91cCAuY2F0ZWdvcnktaW5kaWNhdG9ycyAubWluaS1pbmRpY2F0b3IgLm1pbmktaW5kaWNhdG9yLXZhbHVlIC5taW5pLWNoYW5nZS5uZWdhdGl2ZSB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmluZGljYXRvcnMtY29udGFpbmVyIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbiAgLmluZGljYXRvcnMtY29udGFpbmVyIC5zZWN0aW9uLWhlYWRlciAuaW5kaWNhdG9yLWZpbHRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmluZGljYXRvcnMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmluZGljYXRvcnMtZ3JpZCAuaW5kaWNhdG9yLWNhcmQgLmluZGljYXRvci1jb250ZW50IC5pbmRpY2F0b3ItdmFsdWUgLmN1cnJlbnQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLmluZGljYXRvcnMtYnktY2F0ZWdvcnkgLmNhdGVnb3J5LWluZGljYXRvcnMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BudgetDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-budget-dashboard',
                templateUrl: './budget-dashboard.component.html',
                styleUrls: ['./budget-dashboard.component.scss']
            }]
    }], function () { return [{ type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/budget-dashboard/budget-dashboard.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/budget-dashboard/budget-dashboard.module.ts ***!
  \*******************************************************************/
/*! exports provided: BudgetDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetDashboardModule", function() { return BudgetDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _budget_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budget-dashboard.component */ "./src/app/pages/budget-dashboard/budget-dashboard.component.ts");







const routes = [
    {
        path: '',
        component: _budget_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["BudgetDashboardComponent"]
    }
];
class BudgetDashboardModule {
}
BudgetDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BudgetDashboardModule });
BudgetDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BudgetDashboardModule_Factory(t) { return new (t || BudgetDashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BudgetDashboardModule, { declarations: [_budget_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["BudgetDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _budget_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["BudgetDashboardComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-budget-dashboard-budget-dashboard-module-es2015.js.map