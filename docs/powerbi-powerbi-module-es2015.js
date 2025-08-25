(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["powerbi-powerbi-module"],{

/***/ "./src/app/budget/powerbi/powerbi.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/budget/powerbi/powerbi.component.ts ***!
  \*****************************************************/
/*! exports provided: PowerbiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerbiComponent", function() { return PowerbiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PowerbiComponent {
    constructor() { }
    ngOnInit() {
    }
}
PowerbiComponent.ɵfac = function PowerbiComponent_Factory(t) { return new (t || PowerbiComponent)(); };
PowerbiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PowerbiComponent, selectors: [["app-powerbi"]], decls: 1, vars: 0, consts: [["src", "https://app.powerbi.com/view?r=eyJrIjoiMzI0Zjg2YzItYjVlYi00OTEwLTgyMDktNmUwMmZlMTFiZGM4IiwidCI6ImZhZTUzMjdiLWI5ZTEtNDU4Yi1hMTkxLWVlOWUzOTgzYTY0MSIsImMiOjEwfQ%3D%3D&pageName=ReportSection&fbclid=IwAR1pPSC4T3oimnLrhgMDnJlcFgOWx_0Al_WGb7iYnO-xAY0NLnaEVg-AJis", "height", "100%", "width", "100%", "title", "Power Bi"]], template: function PowerbiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC9wb3dlcmJpL3Bvd2VyYmkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PowerbiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-powerbi',
                templateUrl: './powerbi.component.html',
                styleUrls: ['./powerbi.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/budget/powerbi/powerbi.module.ts":
/*!**************************************************!*\
  !*** ./src/app/budget/powerbi/powerbi.module.ts ***!
  \**************************************************/
/*! exports provided: PowerbiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerbiModule", function() { return PowerbiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _powerbi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./powerbi.component */ "./src/app/budget/powerbi/powerbi.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _powerbi_component__WEBPACK_IMPORTED_MODULE_2__["PowerbiComponent"]
    },
];
class PowerbiModule {
}
PowerbiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PowerbiModule });
PowerbiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PowerbiModule_Factory(t) { return new (t || PowerbiModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PowerbiModule, { declarations: [_powerbi_component__WEBPACK_IMPORTED_MODULE_2__["PowerbiComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PowerbiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_powerbi_component__WEBPACK_IMPORTED_MODULE_2__["PowerbiComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=powerbi-powerbi-module-es2015.js.map