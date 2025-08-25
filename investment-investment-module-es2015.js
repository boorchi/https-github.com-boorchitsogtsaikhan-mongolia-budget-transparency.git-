(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["investment-investment-module"],{

/***/ "./src/app/budget/investment/investment.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/budget/investment/investment.component.ts ***!
  \***********************************************************/
/*! exports provided: InvestmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentComponent", function() { return InvestmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/constants */ "./src/app/services/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/year-change/year-change.component */ "./src/app/modules/year-change/year-change.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modules_description_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/description/description.component */ "./src/app/modules/description/description.component.ts");
/* harmony import */ var _modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/carousel/carousel.component */ "./src/app/modules/carousel/carousel.component.ts");










function InvestmentComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.zarlagaTotal["perfoValue"] / ctx_r0.zarlagaTotal["approvedValue"] * 100).toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r0.zarlagaTotal["perfoValue"]), " \u0442\u044D\u0440\u0431\u0443\u043C ");
} }
function InvestmentComponent_div_21_i_feather_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 33);
} }
function InvestmentComponent_div_21_i_feather_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 34);
} }
function InvestmentComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvestmentComponent_div_21_i_feather_5_Template, 1, 0, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvestmentComponent_div_21_i_feather_6_Template, 1, 0, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.percentTotal, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.params["category"] != "APPROVED" && ctx_r1.percentTotal < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.params["category"] != "APPROVED" && ctx_r1.percentTotal >= 0);
} }
function InvestmentComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0443\u0445\u0430\u0439\u043D \u043E\u043D\u0434 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445 \u04E9\u0433\u04E9\u0433\u0434\u04E9\u043B \u0431\u0430\u0439\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestmentComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0442\u044D\u0440\u0431\u0443\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background: ", ctx_r3.colors[i_r8], "; left: ", 100 + i_r8 * 250, "px; bottom: 80px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/image/budget/main/", item_r7["code"], ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, item_r7["approvedValue"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7["codeName"]);
} }
function InvestmentComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.codeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r9.eventCount, " \u0442\u04E9\u0441\u04E9\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r9.budget, " \u0442\u044D\u0440\u0431\u0443\u043C");
} }
class InvestmentComponent {
    constructor(mainService, route, router) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.sheet = "Sheet23";
        this.params = { year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year, category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category };
        this.datas = [];
        this.slideData = { type: 4, datas: [] };
        this.loList = [];
        this.def = '';
        this.show = false;
        this.isLoNull = false;
        this.isNull = false;
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colors;
        this.year = this.params["year"];
        this.event = [];
        this.total = "";
        this.ulsiinTusuv = 0;
        this.totalApp = 0;
        this.percentTotal = 0;
        this.perfoValueTotal = 0;
        this.percent = 0;
        this.perfoValue = 0;
        this.beforeYear = 0;
        this.zarlagaTotal = { "approvedValue": 0, "perfoValue": 0, "percent": 0 };
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (val.url.split('?').length > 1) {
                    this.setQueryParam(val.url.split('?')[1]);
                }
                this.getDatas();
                this.getDefault();
                this.getReleaseDate(this.sheet);
            }
        });
    }
    ngOnInit() {
    }
    getDefault() {
        this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_HURUNGU_DETAIL + "?year=" + this.params["year"] + "&category=HO", null, true).then((result) => {
            this.slideData["datas"] = [];
            result.forEach(function (entry, index) {
                this.slideData["datas"].push({ name: entry["codeName"], number: entry["eventCount"] });
            }, this);
            result.forEach(item => {
                this.event.push(item["eventCount"]);
            });
            this.total = this.event.reduce(function (a, b) {
                return a + b;
            }, 0);
            if (result.length == 0) {
                this.slideData["datas"].push({ name: 'Тухайн онд харуулах өгөгдөл байхгүй байна..', number: 1 });
            }
            setTimeout(function () {
                this.show = true;
            }, 500);
        }).catch((error) => {
            console.log(error);
        });
        this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_HURUNGU_DETAIL + "?year=" + this.params["year"] + "&category=LO", null, true).then((result) => {
            this.loList = result;
            if (result.length == 0) {
                this.isLoNull = true;
                this.def = 'Тухайн онд харуулах өгөгдөл байхгүй байна..';
            }
            else {
                this.isLoNull = false;
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    setQueryParam(param) {
        var query = {};
        var params = param.split("&");
        params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
        }, this);
        this.getChanges(params);
    }
    getChanges(params) {
        var old = this.params["year"];
        this.beforeYear = 0;
        this.beforeYear = this.params["year"] - 1;
        // if(params != old){
        // console.log("chang")
        //  this.ezaLevelDatas = []
        // }
    }
    getDatas() {
        this.zarlagaTotal = { "approvedValue": 0, "perfoValue": 0, "percent": 0 };
        this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_HURUNGU + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then((result) => {
            this.datas = result;
            if (result.length == 0) {
                this.isNull = true;
            }
            else {
                this.isNull = false;
            }
            result.forEach(item => {
                this.zarlagaTotal["approvedValue"] += item["approvedValue"];
                this.zarlagaTotal["perfoValue"] += item["perfoValue"];
                this.zarlagaTotal["percent"] = item["percent"];
                if (item["code"] === "HO2") {
                    this.ulsiinTusuv = item["approvedValue"];
                    this.percent = item["percent"];
                    this.perfoValue = item["perfoValue"];
                }
            });
            this.beforePer();
        }).catch((error) => {
            console.log(error);
        });
    }
    beforePer() {
        this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_HURUNGU + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then((result) => {
            this.totalApp = 0;
            result.forEach(item => {
                this.totalApp += item["approvedValue"];
            });
            this.percentTotal = isFinite(Math.floor(((this.zarlagaTotal["approvedValue"] - this.totalApp) / this.totalApp) * 100)) ? Math.floor(((this.zarlagaTotal["approvedValue"] - this.totalApp) / this.totalApp) * 100) : 0;
        }).catch((error) => {
            console.log(error);
        });
    }
    getReleaseDate(code) {
        this.updateDate = "";
        this.description = "";
        this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result) => {
            this.releaseDate = result;
            if (result.length > 0) {
                this.updateDate = result[0].updateDate;
                this.description = result[0].description;
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}
InvestmentComponent.ɵfac = function InvestmentComponent_Factory(t) { return new (t || InvestmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
InvestmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestmentComponent, selectors: [["app-investment"]], decls: 68, vars: 19, consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], [1, "budget-main-invest", "investment"], [1, "last_updated"], [1, "title"], [1, "total"], [1, "number"], [1, "curr"], [1, "process"], [4, "ngIf"], [1, "invest-block"], ["class", "invest-item", 3, "style", 4, "ngFor", "ngForOf"], [3, "description"], [1, "budget-block", 2, "margin-top", "0px"], [1, "title", 2, "margin", "0px"], [1, "block-container"], [1, "row"], [1, "col-md-3"], [1, "invest-main", "sub"], ["src", "../../../../assets/image/Barilgachin1.PNG"], [2, "color", "#fff"], [1, "col-md-9"], [1, "invest-table", "sub"], [2, "padding-top", "30px", "width", "90%", "margin", "auto"], [3, "slideData"], [4, "ngFor", "ngForOf"], [1, "main-description"], [1, "col-md-12"], ["href", "https://publicinvestment.gov.mn/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "../../../assets/image/desc.PNG", "alt", ""], ["name", "arrow-down", "class", "down-icon", "style", "color: #fff;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #fff;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#fff"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#fff"], [1, "invest-item"], [1, "content"], ["alt", "", 3, "src"]], template: function InvestmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0425\u04E8\u0420\u04E8\u041D\u0413\u04E8 \u041E\u0420\u0423\u0423\u041B\u0410\u041B\u0422");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvestmentComponent_ng_container_20_Template, 7, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InvestmentComponent_div_21_Template, 8, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestmentComponent_div_23_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestmentComponent_div_24_Template, 11, 9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "module-description", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0443\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9 \u043E\u0440\u0443\u0443\u043B\u0430\u043B\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "module-carousel", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, InvestmentComponent_tr_59_Template, 7, 3, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, ctx.zarlagaTotal["approvedValue"]), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params["category"] == "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params["category"] != "APPROVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNull);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 15, ctx.ulsiinTusuv), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.percent, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.perfoValue, " \u0442\u044D\u0440\u0431\u0443\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u043D\u0438\u0439\u0442 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 17, ctx.total), " \u0442\u04E9\u0441\u04E9\u043B \u0430\u0440\u0433\u0430 \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u043D\u044D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slideData", ctx.slideData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9\u04E9\u0440 ", ctx.year, " \u043E\u043D\u0434 \u0441\u0430\u043D\u0445\u04AF\u04AF\u0436\u04AF\u04AF\u043B\u044D\u0445 \u0442\u04E9\u0441\u04E9\u043B, \u0430\u0440\u0433\u0430 \u0445\u044D\u043C\u0436\u044D\u044D, \u0431\u0430\u0440\u0438\u043B\u0433\u0430 \u0431\u0430\u0439\u0433\u0443\u0443\u043B\u0430\u043C\u0436");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loList);
    } }, directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__["YearChangeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionComponent"], _modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".budget-main-invest[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n  min-height: 700px;\n  background-image: url('bg13.PNG');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  z-index: 0;\n}\n.budget-main-invest.investment[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: 100%;\n  margin-bottom: 20px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 45px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 480px;\n  top: 250px;\n  height: 160px;\n  border-radius: 15px;\n  position: absolute;\n  left: 0px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n  background-color: #ea5455;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 180px;\n  position: absolute;\n  bottom: 10px;\n  left: 40px;\n  right: 0;\n  color: #fff;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 45px !important;\n  font-weight: 700;\n  font-size: large;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 180px;\n  position: absolute;\n  bottom: 50px;\n  left: 250px;\n  margin: 0px auto;\n  color: #fff;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  bottom: 20px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .invest-block[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 80px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .invest-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  margin: 0px 40px;\n  width: 160px;\n  height: 160px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-block[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n}\n.invest-main[_ngcontent-%COMP%] {\n  background-color: #008ffb;\n}\n.invest-main.sub[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: 100%;\n  margin-bottom: 20px;\n}\n.invest-main.sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 180px;\n  bottom: 10px;\n  left: 40px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n  padding-bottom: 100px;\n}\n.invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 45px !important;\n  font-weight: 700;\n  font-size: large;\n}\n.invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.invest-table.sub[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: 100%;\n  margin-bottom: 20px;\n}\n.invest-table.sub[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-right: 60px;\n  margin: auto;\n  text-align: left;\n  border: 1px solid #c4c4c4;\n}\n.invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  font-weight: 700;\n  color: #505054;\n}\n@media screen and (max-width: 1600px) {\n  .invest-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    margin: 20px !important;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1536px) {\n  .invest-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    margin: 20px !important;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .invest-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    margin: 20px !important;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .invest-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    margin: 10px !important;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .invest-table.sub[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .invest-table.sub[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 40px;\n    margin: auto;\n    font-size: 13px;\n    text-align: left;\n    border: 1px solid #c4c4c4;\n  }\n  .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    font-weight: 700;\n    color: #505054;\n  }\n\n  .invest-main[_ngcontent-%COMP%] {\n    background-color: #008ffb;\n  }\n  .invest-main.sub[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    width: 80%;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    bottom: 10px;\n    left: 40px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    padding-bottom: 100px;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 14px !important;\n    text-transform: uppercase;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 35px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 14px !important;\n    text-transform: uppercase;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .invest-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    margin: 10px !important;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .invest-table.sub[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .invest-table.sub[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 40px;\n    margin: auto;\n    font-size: 13px;\n    text-align: left;\n    border: 1px solid #c4c4c4;\n  }\n  .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    font-weight: 700;\n    color: #505054;\n  }\n\n  .invest-main[_ngcontent-%COMP%] {\n    background-color: #008ffb;\n  }\n  .invest-main.sub[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    width: 80%;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    bottom: 10px;\n    left: 40px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    padding-bottom: 100px;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 14px !important;\n    text-transform: uppercase;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 35px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 14px !important;\n    text-transform: uppercase;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .invest-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    margin: 5px !important;\n    width: 120px !important;\n    height: 120px !important;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    font-weight: bold;\n  }\n  .invest-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 9px !important;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .invest-table.sub[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .invest-table.sub[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 30px;\n    margin: auto;\n    font-size: 11px;\n    text-align: left;\n    border: 1px solid #c4c4c4;\n  }\n  .invest-table.sub[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    font-weight: 700;\n    color: #505054;\n  }\n\n  .invest-main[_ngcontent-%COMP%] {\n    background-color: #008ffb;\n  }\n  .invest-main.sub[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    width: 80%;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 120px;\n    bottom: 10px;\n    left: 40px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    padding-bottom: 100px;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 12px !important;\n    text-transform: uppercase;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 25px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .invest-main.sub[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 12px !important;\n    text-transform: uppercase;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L2ludmVzdG1lbnQvaW52ZXN0bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVkZ2V0L2ludmVzdG1lbnQvaW52ZXN0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0FDRlI7QURHUTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUNEWjtBREdRO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0RaO0FESUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JB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QSx5QkFBQTtFQzFDZDtFRDRDWTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQzFDZDs7RUQ4Q0U7SUFDSSx5QkFBQTtFQzNDTjtFRDRDTTtJQUNJLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQzFDVjtFRDJDVTtJQUNJLGlCQUFBO0lBQ0EsVUFBQTtFQ3pDZDtFRDJDVTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUVBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VDMUNkO0VEMkNjO0lBQ0ksZ0JBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VDekNsQjtFRDJDYztJQUNJLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDekNsQjtFRDJDYztJQUNJLGdCQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQ3pDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC9pbnZlc3RtZW50L2ludmVzdG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVkZ2V0LW1haW4taW52ZXN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnMTMuUE5HXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgJi5pbnZlc3RtZW50e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9ICAgIFxuICAgIC50aXRsZXtcbiAgICAgICAgaDN7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAudG90YWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICAgIH1cbiAgICAubnVtYmVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHggO1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgLy8gbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICAuY3VycntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvY2Vzc3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA1MHB4IDtcbiAgICAgICAgbGVmdDogMjUwcHg7XG4gICAgICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgLml0ZW1ze1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbnZlc3QtYmxvY2t7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmludmVzdC1pdGVte1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwcHggNDBweDtcbiAgICAgICAgd2lkdGg6IDE2MHB4OyBoZWlnaHQ6IDE2MHB4OyBcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBcbiAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1haW4tZGVzY3JpcHRpb257XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICAgIHB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5idWRnZXQtYmxvY2s+aDMge1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlIHtcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxufVxuXG4uaW52ZXN0LW1haW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZmYjtcbiAgICAmLnN1YntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwcHggO1xuICAgICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLmludmVzdC10YWJsZXtcbiAgICAmLnN1YntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHRhYmxlLCB0aCwgdGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgIC5pbnZlc3QtaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFxuICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUzNnB4KSB7XG4gICAgLmludmVzdC1pdGVte1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5pbnZlc3QtaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFxuICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbi5pbnZlc3QtaXRlbXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgICBkaXYuY29udGVudHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgXG59XG4uaW52ZXN0LXRhYmxle1xuICAgICYuc3Vie1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGFibGUsIHRoLCB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgIH1cbiAgICB9XG59XG4uaW52ZXN0LW1haW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZmYjtcbiAgICAmLnN1YntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmludmVzdC1pdGVte1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC5pbnZlc3QtdGFibGV7XG4gICAgICAgICYuc3Vie1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHRhYmxlLCB0aCwgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW52ZXN0LW1haW57XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmZmI7XG4gICAgICAgICYuc3Vie1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHggO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jdXJye1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmludmVzdC1pdGVte1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7IFxuICAgICAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7IFxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFxuICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAuaW52ZXN0LXRhYmxle1xuICAgICAgICAmLnN1YntcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB0YWJsZSwgdGgsIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmludmVzdC1tYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmZiO1xuICAgICAgICAmLnN1YntcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4IDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiLmJ1ZGdldC1tYWluLWludmVzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnMTMuUE5HXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0LmludmVzdG1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGgzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA4MWZmO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAudGl0bGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC50b3RhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQ4MHB4O1xuICB0b3A6IDI1MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA0MHB4O1xuICByaWdodDogMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgLmN1cnIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHAge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAucHJvY2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMjUwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvdHRvbTogMjBweDtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTIwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLmludmVzdC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5pbnZlc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDBweCA0MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYWluLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLm1haW4tZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnVkZ2V0LWJsb2NrID4gaDMge1xuICBjb2xvcjogIzAwODFmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDA4MWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbnZlc3QtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhmZmI7XG59XG4uaW52ZXN0LW1haW4uc3ViIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaW52ZXN0LW1haW4uc3ViIGltZyB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmludmVzdC1tYWluLnN1YiAubnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNDBweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uaW52ZXN0LW1haW4uc3ViIC5udW1iZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaW52ZXN0LW1haW4uc3ViIC5udW1iZXIgLmN1cnIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmludmVzdC1tYWluLnN1YiAubnVtYmVyIHAge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW52ZXN0LXRhYmxlLnN1YiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmludmVzdC10YWJsZS5zdWIgdGFibGUsIC5pbnZlc3QtdGFibGUuc3ViIHRoLCAuaW52ZXN0LXRhYmxlLnN1YiB0ZCB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuLmludmVzdC10YWJsZS5zdWIgdGQ6bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTA1MDU0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmludmVzdC1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUzNnB4KSB7XG4gIC5pbnZlc3QtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuaW52ZXN0LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmludmVzdC1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC5pbnZlc3QtdGFibGUuc3ViIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmludmVzdC10YWJsZS5zdWIgdGFibGUsIC5pbnZlc3QtdGFibGUuc3ViIHRoLCAuaW52ZXN0LXRhYmxlLnN1YiB0ZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIH1cbiAgLmludmVzdC10YWJsZS5zdWIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgfVxuXG4gIC5pbnZlc3QtbWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGZmYjtcbiAgfVxuICAuaW52ZXN0LW1haW4uc3ViIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmludmVzdC1tYWluLnN1YiBpbWcge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmludmVzdC1tYWluLnN1YiAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG4gIC5pbnZlc3QtbWFpbi5zdWIgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmludmVzdC1tYWluLnN1YiAubnVtYmVyIC5jdXJyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC5pbnZlc3QtbWFpbi5zdWIgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuaW52ZXN0LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmludmVzdC10YWJsZS5zdWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuaW52ZXN0LXRhYmxlLnN1YiB0YWJsZSwgLmludmVzdC10YWJsZS5zdWIgdGgsIC5pbnZlc3QtdGFibGUuc3ViIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgfVxuICAuaW52ZXN0LXRhYmxlLnN1YiB0ZDpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICB9XG5cbiAgLmludmVzdC1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ZmZiO1xuICB9XG4gIC5pbnZlc3QtbWFpbi5zdWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuaW52ZXN0LW1haW4uc3ViIGltZyB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAuaW52ZXN0LW1haW4uc3ViIC5udW1iZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIH1cbiAgLmludmVzdC1tYWluLnN1YiAubnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuaW52ZXN0LW1haW4uc3ViIC5udW1iZXIgLmN1cnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgLmludmVzdC1tYWluLnN1YiAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5pbnZlc3QtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuaW52ZXN0LWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmludmVzdC1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5pbnZlc3QtaXRlbSBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuaW52ZXN0LXRhYmxlLnN1YiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5pbnZlc3QtdGFibGUuc3ViIHRhYmxlLCAuaW52ZXN0LXRhYmxlLnN1YiB0aCwgLmludmVzdC10YWJsZS5zdWIgdGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICB9XG4gIC5pbnZlc3QtdGFibGUuc3ViIHRkOmxhc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cblxuICAuaW52ZXN0LW1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmZmI7XG4gIH1cbiAgLmludmVzdC1tYWluLnN1YiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5pbnZlc3QtbWFpbi5zdWIgaW1nIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5pbnZlc3QtbWFpbi5zdWIgLm51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxuICAuaW52ZXN0LW1haW4uc3ViIC5udW1iZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5pbnZlc3QtbWFpbi5zdWIgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuaW52ZXN0LW1haW4uc3ViIC5udW1iZXIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-investment',
                templateUrl: './investment.component.html',
                styleUrls: ['./investment.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/budget/investment/investment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/budget/investment/investment.module.ts ***!
  \********************************************************/
/*! exports provided: InvestmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentModule", function() { return InvestmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _investment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investment.component */ "./src/app/budget/investment/investment.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/year-change/year-change.module */ "./src/app/modules/year-change/year-change.module.ts");
/* harmony import */ var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/icons/icons.module */ "./src/app/icons/icons.module.ts");
/* harmony import */ var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/description/description.module */ "./src/app/modules/description/description.module.ts");
/* harmony import */ var src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/carousel/ng-carousel.module */ "./src/app/modules/carousel/ng-carousel.module.ts");










const routes = [
    {
        path: '',
        component: _investment_component__WEBPACK_IMPORTED_MODULE_2__["InvestmentComponent"]
    },
];
class InvestmentModule {
}
InvestmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvestmentModule });
InvestmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvestmentModule_Factory(t) { return new (t || InvestmentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"],
            src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
            src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"],
            src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_7__["NgCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvestmentModule, { declarations: [_investment_component__WEBPACK_IMPORTED_MODULE_2__["InvestmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"],
        src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
        src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"],
        src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_7__["NgCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_investment_component__WEBPACK_IMPORTED_MODULE_2__["InvestmentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"],
                    src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                    src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"],
                    src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_7__["NgCarouselModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/description/description.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/description/description.component.ts ***!
  \**************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(); };
DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["module-description"]], inputs: { description: "description" }, decls: 6, vars: 1, consts: [["id", "description", 1, "budget-block", "description"], [1, "block-container"], [1, "image"], ["src", "../../../assets/image/icons/Duruud/Turiin_alban_haagch_2.png"]], template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.description, " ");
    } }, styles: [".description[_ngcontent-%COMP%]   .block-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 150px;\n  text-align: left;\n  color: #505054;\n  display: table;\n  width: 100%;\n}\n.description[_ngcontent-%COMP%]   .block-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  padding: 20px;\n  text-align: center;\n  display: inline-block;\n  background: #28c66f;\n  border-radius: 50%;\n  float: left;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FSO0FER1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9ue1xuICAgIC5ibG9jay1jb250YWluZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBpbWd7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxOTgsIDExMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZGVzY3JpcHRpb24gLmJsb2NrLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzUwNTA1NDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRlc2NyaXB0aW9uIC5ibG9jay1jb250YWluZXIgLmltYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzI4YzY2ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'module-description',
                templateUrl: './description.component.html',
                styleUrls: ['./description.component.scss']
            }]
    }], function () { return []; }, { description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/description/description.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/description/description.module.ts ***!
  \***********************************************************/
/*! exports provided: DescriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModule", function() { return DescriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description.component */ "./src/app/modules/description/description.component.ts");




class DescriptionModule {
}
DescriptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DescriptionModule });
DescriptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DescriptionModule_Factory(t) { return new (t || DescriptionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DescriptionModule, { declarations: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=investment-investment-module-es2015.js.map