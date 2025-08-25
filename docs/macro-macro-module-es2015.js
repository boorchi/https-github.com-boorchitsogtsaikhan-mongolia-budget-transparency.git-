(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["macro-macro-module"],{

/***/ "./src/app/budget/macro/macro.component.ts":
/*!*************************************************!*\
  !*** ./src/app/budget/macro/macro.component.ts ***!
  \*************************************************/
/*! exports provided: MacroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroComponent", function() { return MacroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/constants */ "./src/app/services/constants.ts");
/* harmony import */ var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/canvasjs.min */ "./src/assets/canvasjs.min.js");
/* harmony import */ var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modules_description_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/description/description.component */ "./src/app/modules/description/description.component.ts");







function MacroComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MacroComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const macro_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showChart(i_r4, macro_r3.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background: ", ctx_r0.colors[i_r4], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", macro_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, macro_r3.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", macro_r3.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](macro_r3.description);
} }
function MacroComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.macroName == null ? null : ctx_r1.macroName.name);
} }
function MacroComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.macroName == null ? null : ctx_r2.macroName.name);
} }
class MacroComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.macroList = [];
        this.macro = [];
        this.show = false;
        this.show1 = false;
        this.params = { year: _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year, category: _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category };
        this.colors = _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colorsMacro;
    }
    ngOnInit() {
        this.getMacro();
        this.getReleaseDate("Sheet16");
    }
    getMacro() {
        this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_MACRO_MAIN, null, true).then((result) => {
            this.macro = result;
            console.log(this.macro);
        }).catch((error) => {
            console.log(error);
        });
    }
    showChart(index, code) {
        if (index == 1 || index == 2) {
            this.show1 = true;
            this.show = false;
            this.macroName = this.macro[index];
            this.params["code"] = code;
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_MACRO_ITEM + "?code=" + this.params["code"], null, true).then((result) => {
                var datas1 = [];
                var value1 = {
                    type: "line",
                    dataPoints: []
                };
                var points = [];
                result.forEach((element, index, array) => {
                    points.push({ y: element.value, label: element.year, color: this.colors[index] });
                    if (index === array.length - 1) {
                        value1.dataPoints = points;
                        datas1.push(value1);
                        this.render1(datas1);
                    }
                });
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            this.show1 = false;
            this.show = true;
            this.macroName = this.macro[index];
            this.params["code"] = code;
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_MACRO_ITEM + "?code=" + this.params["code"], null, true).then((result) => {
                var datas = [];
                var value = {
                    type: "column",
                    // name: element.year,
                    // color: this.colors[index], 
                    indexLabel: "{y}",
                    indexLabelFontColor: "#fff",
                    indexLabelPlacement: "inside",
                    showInLegend: false,
                    legendMarkerColor: "#333",
                    legendText: this.macroName.name,
                    dataPoints: []
                    // {x: index, y: element.value, label:  element.year}
                };
                var points = [];
                result.forEach((element, index, array) => {
                    points.push({ y: element.value, label: element.year, color: this.colors[index] });
                    if (index === array.length - 1) {
                        value.dataPoints = points;
                        datas.push(value);
                        this.render(datas);
                    }
                });
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    render(datas) {
        let chart = new _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__["Chart"]("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: ""
            },
            axisY: {
                title: "",
                gridThickness: 1,
                gridColor: "#eee"
            },
            axisX: {
                interval: 1,
                tickLength: 15
            },
            data: datas
        });
        chart.render();
    }
    render1(datas1) {
        let chart = new _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__["Chart"]("chartContainer1", {
            animationEnabled: true,
            title: {
                text: ""
            },
            axisY: {
                title: "",
                gridThickness: 1,
                gridColor: "#eee"
            },
            axisX: {
                interval: 1,
                tickLength: 15
            },
            data: datas1
        });
        chart.render();
    }
    getReleaseDate(code) {
        this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_RELEASE_DATE + "?code=Sheet16" + "&year=" + 2021, null, true).then((result) => {
            this.updateDate = result[0].updateDate;
            this.description = result[0].description;
        }).catch((error) => {
            console.log(error);
        });
    }
}
MacroComponent.ɵfac = function MacroComponent_Factory(t) { return new (t || MacroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"])); };
MacroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MacroComponent, selectors: [["app-macro"]], decls: 8, vars: 4, consts: [[1, "budget-block"], [1, "row"], ["class", "col-md-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "subdiv", 4, "ngIf"], [3, "description"], [1, "col-md-4", 3, "click"], [1, "special-col"], [1, "special-item"], [1, "special-img"], ["src", "../../../assets/image/icons/Main/4_macro_white.svg", 1, "macro_img"], [1, "title"], [1, "special-text"], [1, "currency"], [1, "cur-text"], [1, "cur-desc"], [1, "cur-desc-text"], [1, "subdiv"], [1, "block-container"], ["id", "chartContainer", 2, "height", "370px", "width", "100%"], ["id", "chartContainer1", 2, "height", "370px", "width", "100%"]], template: function MacroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041C\u0430\u043A\u0440\u043E \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u04AF\u04AF\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MacroComponent_div_4_Template, 17, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MacroComponent_div_5_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MacroComponent_div_6_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "module-description", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.macro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_5__["DescriptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".budget-block[_ngcontent-%COMP%]   .block-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n\n.budget-block[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 0px 30px;\n  margin-bottom: 20px;\n}\n\n.budget-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  text-align: center;\n  color: #505054;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.special-col[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #fff;\n  width: 100%;\n  height: 240px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .macro_img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-bottom: 20px;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 240px;\n  float: left;\n  border-bottom-left-radius: 10px;\n  border-top-left-radius: 10px;\n  vertical-align: bottom;\n  padding-left: 20px;\n  padding-top: 30px;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  width: 50%;\n  color: #fff;\n  font-size: 32px;\n  font-weight: bold;\n  float: left;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  text-transform: uppercase;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  width: 60%;\n  float: right;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  color: #56c3dc;\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n  color: #737373;\n  font-weight: 700;\n  font-size: 17px;\n  text-transform: uppercase;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #56c3dc;\n}\n\n.subdiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #6a37b9;\n}\n\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 1680px) {\n  .special-col[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background-color: #fff;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .macro_img[_ngcontent-%COMP%] {\n    width: 50px;\n    margin-bottom: 20px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 200px;\n    float: left;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    vertical-align: bottom;\n    padding-left: 20px;\n    padding-top: 30px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n    width: 50%;\n    color: #fff;\n    font-size: 32px;\n    font-weight: bold;\n    float: left;\n    padding-top: 5px;\n    padding-left: 5px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 14px;\n    font-weight: 600;\n    text-align: left;\n    text-transform: uppercase;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5px;\n    width: 60%;\n    float: right;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 30px;\n    font-weight: bold;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n    color: #737373;\n    font-weight: 700;\n    font-size: 13px;\n    text-transform: uppercase;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #56c3dc;\n  }\n}\n\n@media screen and (max-width: 1366px) {\n  .special-col[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background-color: #fff;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .macro_img[_ngcontent-%COMP%] {\n    width: 50px;\n    margin-bottom: 20px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 200px;\n    float: left;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    vertical-align: bottom;\n    padding-left: 20px;\n    padding-top: 30px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n    width: 50%;\n    color: #fff;\n    font-size: 32px;\n    font-weight: bold;\n    float: left;\n    padding-top: 5px;\n    padding-left: 5px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 14px;\n    font-weight: 600;\n    text-align: left;\n    text-transform: uppercase;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5px;\n    width: 60%;\n    float: right;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 30px;\n    font-weight: bold;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n    color: #737373;\n    font-weight: 700;\n    font-size: 13px;\n    text-transform: uppercase;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #56c3dc;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  hr[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .special-col[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background-color: #fff;\n    width: 100%;\n    height: 150px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .macro_img[_ngcontent-%COMP%] {\n    width: 40px;\n    margin-bottom: 20px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 150px;\n    float: left;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    vertical-align: bottom;\n    padding-left: 10px;\n    padding-top: 20px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n    width: 50%;\n    color: #fff;\n    font-size: 32px;\n    font-weight: bold;\n    float: left;\n    padding-top: 5px;\n    padding-left: 5px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-img[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 11px;\n    font-weight: 600;\n    text-align: left;\n    text-transform: uppercase;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5px;\n    width: 60%;\n    float: right;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n    color: #737373;\n    font-weight: 700;\n    font-size: 10px;\n    text-transform: uppercase;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .special-col[_ngcontent-%COMP%]   .special-item[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #56c3dc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L21hY3JvL21hY3JvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idWRnZXQvbWFjcm8vbWFjcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREZJO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FDSVI7O0FESFE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNLWjs7QURIUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNLWjs7QURIWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNLaEI7O0FESFk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0toQjs7QURBUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRVo7O0FERFk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR2hCOztBRERZO0VBQ0ksY0FBQTtFQUNBLGdC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QUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQ1ZsQjtFRGVVO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUNiZDtFRGNjO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ1psQjtFRGNjO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0VDWmxCO0VEY2M7SUFDSSxlQUFBO0VDWmxCO0VEY2M7SUFDSSxjQUFBO0VDWmxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idWRnZXQvbWFjcm8vbWFjcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVkZ2V0LWJsb2NrIC5ibG9jay1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cbi5idWRnZXQtYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBoM3tcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59XG4uc3BlY2lhbC1jb2x7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIC5zcGVjaWFsLWl0ZW17XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLm1hY3JvX2ltZ3sgICAgICAgICAgICBcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3BlY2lhbC1pbWd7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIC5wZXJjZW50YWdle1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0gICAgXG4gICAgICAgIC5zcGVjaWFsLXRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIC5jdXJyZW5jeXtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VyLXRleHR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXItZGVzY3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxufVxuXG4uc3ViZGl2e1xuICAgIGgze1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzZhMzdiOTtcbiAgICB9XG59XG4ubWFpbi1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgcHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gICAgLnNwZWNpYWwtY29se1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIC5zcGVjaWFsLWl0ZW17XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgICAgIC5tYWNyb19pbWd7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zcGVjaWFsLWltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgIC5wZXJjZW50YWdle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAuc3BlY2lhbC10ZXh0e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgLmN1cnJlbmN5e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1ci10ZXh0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzczNzM3MztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VyLWRlc2N7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTZjM2RjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgLnNwZWNpYWwtY29se1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIC5zcGVjaWFsLWl0ZW17XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgICAgIC5tYWNyb19pbWd7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zcGVjaWFsLWltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgIC5wZXJjZW50YWdle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAuc3BlY2lhbC10ZXh0e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgLmN1cnJlbmN5e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1ci10ZXh0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzczNzM3MztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VyLWRlc2N7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTZjM2RjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBocntcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICAgIC5zcGVjaWFsLWNvbHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAuc3BlY2lhbC1pdGVte1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgICAgICAubWFjcm9faW1neyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3BlY2lhbC1pbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBcbiAgICAgICAgICAgICAgICAucGVyY2VudGFnZXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgLnNwZWNpYWwtdGV4dHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIC5jdXJyZW5jeXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NmMzZGM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jdXItdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1ci1kZXNje1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuYnVkZ2V0LWJsb2NrIC5ibG9jay1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cblxuLmJ1ZGdldC1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJ1ZGdldC1ibG9jayBoMyB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTA1MDU0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zcGVjaWFsLWNvbCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xufVxuLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLm1hY3JvX2ltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC1pbWcgLnBlcmNlbnRhZ2Uge1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtaW1nIC50aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IC5jdXJyZW5jeSB7XG4gIGNvbG9yOiAjNTZjM2RjO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCAuY3VyLXRleHQge1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCAuY3VyLWRlc2Mge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IGIge1xuICBjb2xvcjogIzU2YzNkYztcbn1cblxuLnN1YmRpdiBoMyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNmEzN2I5O1xufVxuXG4ubWFpbi1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIHAge1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbi1kZXNjcmlwdGlvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gIC5zcGVjaWFsLWNvbCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5tYWNyb19pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLWltZyAucGVyY2VudGFnZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC1pbWcgLnRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IC5jdXJyZW5jeSB7XG4gICAgY29sb3I6ICM1NmMzZGM7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLXRleHQgLmN1ci10ZXh0IHtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLXRleHQgLmN1ci1kZXNjIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCBiIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5zcGVjaWFsLWNvbCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5tYWNyb19pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLWltZyAucGVyY2VudGFnZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC1pbWcgLnRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IC5jdXJyZW5jeSB7XG4gICAgY29sb3I6ICM1NmMzZGM7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLXRleHQgLmN1ci10ZXh0IHtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLXRleHQgLmN1ci1kZXNjIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCBiIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGhyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG5cbiAgLnNwZWNpYWwtY29sIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLm1hY3JvX2ltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC1pbWcge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtaW1nIC5wZXJjZW50YWdlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLWltZyAudGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5zcGVjaWFsLWNvbCAuc3BlY2lhbC1pdGVtIC5zcGVjaWFsLXRleHQgLmN1cnJlbmN5IHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCAuY3VyLXRleHQge1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnNwZWNpYWwtY29sIC5zcGVjaWFsLWl0ZW0gLnNwZWNpYWwtdGV4dCAuY3VyLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuc3BlY2lhbC1jb2wgLnNwZWNpYWwtaXRlbSAuc3BlY2lhbC10ZXh0IGIge1xuICAgIGNvbG9yOiAjNTZjM2RjO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-macro',
                templateUrl: './macro.component.html',
                styleUrls: ['./macro.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/budget/macro/macro.module.ts":
/*!**********************************************!*\
  !*** ./src/app/budget/macro/macro.module.ts ***!
  \**********************************************/
/*! exports provided: MacroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroModule", function() { return MacroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _macro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macro.component */ "./src/app/budget/macro/macro.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/description/description.module */ "./src/app/modules/description/description.module.ts");







const routes = [
    {
        path: '',
        component: _macro_component__WEBPACK_IMPORTED_MODULE_2__["MacroComponent"]
    },
];
class MacroModule {
}
MacroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MacroModule });
MacroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MacroModule_Factory(t) { return new (t || MacroModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_4__["DescriptionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MacroModule, { declarations: [_macro_component__WEBPACK_IMPORTED_MODULE_2__["MacroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_4__["DescriptionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MacroModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_macro_component__WEBPACK_IMPORTED_MODULE_2__["MacroComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_4__["DescriptionModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=macro-macro-module-es2015.js.map