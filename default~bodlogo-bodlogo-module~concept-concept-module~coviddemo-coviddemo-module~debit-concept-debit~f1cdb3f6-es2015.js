(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bodlogo-bodlogo-module~concept-concept-module~coviddemo-coviddemo-module~debit-concept-debit~f1cdb3f6"],{

/***/ "./src/app/modules/year-change/year-change.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/year-change/year-change.component.ts ***!
  \**************************************************************/
/*! exports provided: YearChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearChangeComponent", function() { return YearChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var ng_animate_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate-scroll */ "./node_modules/ng-animate-scroll/__ivy_ngcc__/fesm2015/ng-animate-scroll.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function YearChangeComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2023 \u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearChangeComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2022 \u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearChangeComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2021 \u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearChangeComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2020 \u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearChangeComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2019 \u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearChangeComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0411\u0430\u0442\u043B\u0430\u0433\u0434\u0441\u0430\u043D \u0442\u04E9\u0441\u04E9\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function YearChangeComponent_ng_container_6_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u04E9\u0441\u04E9\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.budgetType);
} }
class YearChangeComponent {
    constructor(mainService, route, router, animateScrollService) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.animateScrollService = animateScrollService;
        this.showSelect = true;
        this.showYear = false;
        this.show = [];
        this.urlName = '';
        this.budgetType = false;
        this.yearSelect = this.mainService.year + " он";
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.urlName = val.url;
                if (val.url.split('?').length > 1) {
                    this.setDatas(val.url.split('?')[1]);
                }
            }
        });
    }
    check(year) {
        if (this.showYear) {
            if (this.show.indexOf(year) == -1) {
                return false;
            }
        }
        return true;
    }
    ngOnInit() {
    }
    changeType() {
        var url_data = this.urlName.split('?');
        var url = url_data[0];
        var param = '';
        var category = '';
        if (url_data.length > 1) {
            param = url_data[1];
        }
        this.budgetType = !this.budgetType;
        if (this.budgetType) {
            category = "SUBMITTED";
        }
        else {
            category = "APPROVED";
        }
        var query = this.setQueryParam(param, "category", category);
        this.mainService.changeType(category);
        this.router.navigate([url], { queryParams: query });
    }
    changeYear() {
        var url_data = this.urlName.split('?');
        var url = url_data[0];
        var param = '';
        if (url_data.length > 1) {
            param = url_data[1];
        }
        var query = this.setQueryParam(param, "year", this.yearSelect.split(" ")[0]);
        this.router.navigate([url], { queryParams: query });
    }
    setDatas(param) {
        var params = param.split("&");
        params.forEach(function (entry) {
            var p = entry.split('=');
            if (p[0] === "year") {
                this.yearSelect = p[1] + " он";
            }
            if (p[0] === "category") {
                this.budgetType = p[1] === "SUBMITTED";
                this.mainService.changeType(p[1]);
            }
        }, this);
    }
    setQueryParam(param, change, value) {
        var query = {};
        var params = param.split("&");
        var find = false;
        params.forEach(function (entry) {
            var p = entry.split('=');
            if (p[0] === change) {
                query[change] = value;
                find = true;
            }
            else {
                query[p[0]] = p[1];
            }
        });
        if (!find) {
            query[change] = value;
        }
        return query;
    }
}
YearChangeComponent.ɵfac = function YearChangeComponent_Factory(t) { return new (t || YearChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_animate_scroll__WEBPACK_IMPORTED_MODULE_3__["NgAnimateScrollService"])); };
YearChangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearChangeComponent, selectors: [["module-year-change"]], inputs: { showSelect: "showSelect", showYear: "showYear", show: "show" }, decls: 7, vars: 7, consts: [[3, "ngModel", "ngModelChange", "change"], [4, "ngIf"], [1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "slider", "round"]], template: function YearChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearChangeComponent_Template_select_ngModelChange_0_listener($event) { return ctx.yearSelect = $event; })("change", function YearChangeComponent_Template_select_change_0_listener() { return ctx.changeYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearChangeComponent_option_1_Template, 2, 0, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, YearChangeComponent_option_2_Template, 2, 0, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, YearChangeComponent_option_3_Template, 2, 0, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, YearChangeComponent_option_4_Template, 2, 0, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, YearChangeComponent_option_5_Template, 2, 0, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, YearChangeComponent_ng_container_6_Template, 8, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yearSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.check(2023));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.check(2022));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.check(2021));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.check(2020));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.check(2019));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelect);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    color: #333;\n}\n@media screen and (max-width: 1366px) {\n    select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n        color: #333;\n        font-size: 14px;\n    }\n    span[_ngcontent-%COMP%]{\n        font-size: 14px;\n    }\n}\n@media screen and (max-width: 1024px) {\n    select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n        color: #333;\n        font-size: 10px;\n    }\n    span[_ngcontent-%COMP%]{\n        font-size: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy95ZWFyLWNoYW5nZS95ZWFyLWNoYW5nZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMveWVhci1jaGFuZ2UveWVhci1jaGFuZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCBvcHRpb24ge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgc2VsZWN0IG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBzZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearChangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'module-year-change',
                templateUrl: './year-change.component.html',
                styleUrls: ['./year-change.component.css']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ng_animate_scroll__WEBPACK_IMPORTED_MODULE_3__["NgAnimateScrollService"] }]; }, { showSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/year-change/year-change.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/year-change/year-change.module.ts ***!
  \***********************************************************/
/*! exports provided: YearChangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearChangeModule", function() { return YearChangeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _year_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./year-change.component */ "./src/app/modules/year-change/year-change.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class YearChangeModule {
}
YearChangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YearChangeModule });
YearChangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YearChangeModule_Factory(t) { return new (t || YearChangeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YearChangeModule, { declarations: [_year_change_component__WEBPACK_IMPORTED_MODULE_2__["YearChangeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_year_change_component__WEBPACK_IMPORTED_MODULE_2__["YearChangeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearChangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_year_change_component__WEBPACK_IMPORTED_MODULE_2__["YearChangeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                exports: [_year_change_component__WEBPACK_IMPORTED_MODULE_2__["YearChangeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~bodlogo-bodlogo-module~concept-concept-module~coviddemo-coviddemo-module~debit-concept-debit~f1cdb3f6-es2015.js.map