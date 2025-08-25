function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ulsiintusuv-ulsiintusuv-module"], {
  /***/
  "./src/app/budget/ulsiintusuv/ulsiintusuv-sub/ulsiintusuv-sub.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/budget/ulsiintusuv/ulsiintusuv-sub/ulsiintusuv-sub.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: UlsiintusuvSubComponent */

  /***/
  function _src_app_budget_ulsiintusuv_ulsiintusuvSub_ulsiintusuvSubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UlsiintusuvSubComponent", function () {
      return UlsiintusuvSubComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UlsiintusuvSubComponent_mat_grid_tile_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", tile_r1.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r1.cols)("rowspan", tile_r1.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r1.text, " ");
      }
    }

    var UlsiintusuvSubComponent = /*#__PURE__*/function () {
      function UlsiintusuvSubComponent() {
        _classCallCheck(this, UlsiintusuvSubComponent);

        this.tiles = [{
          text: 'Орлогын албан татвар',
          cols: 1,
          rows: 3,
          color: 'lightgreen'
        }, {
          text: 'Нийгмийн даатгал',
          cols: 1,
          rows: 2,
          color: 'lightgreen'
        }, {
          text: 'Хөрөнгийн албан татвар',
          cols: 1,
          rows: 1,
          color: 'lightgreen'
        }, {
          text: 'Онцгой албан татвар',
          cols: 1,
          rows: 1,
          color: 'lightgreen'
        }, {
          text: 'Орлогын албан татвар',
          cols: 1,
          rows: 2,
          color: 'lightgreen'
        }, {
          text: 'Тусгай зориулалт',
          cols: 1,
          rows: 1,
          color: 'lightgreen'
        }, {
          text: 'Бусад',
          cols: 1,
          rows: 1,
          color: 'lightgreen'
        }];
      }

      return _createClass(UlsiintusuvSubComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    UlsiintusuvSubComponent.ɵfac = function UlsiintusuvSubComponent_Factory(t) {
      return new (t || UlsiintusuvSubComponent)();
    };

    UlsiintusuvSubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UlsiintusuvSubComponent,
      selectors: [["app-ulsiintusuv-sub"]],
      decls: 3,
      vars: 1,
      consts: [[1, "orlogo-sub"], ["cols", "4", "rowHeight", "100px", "gutterSize", "20px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]],
      template: function UlsiintusuvSubComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UlsiintusuvSubComponent_mat_grid_tile_2_Template, 2, 5, "mat-grid-tile", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"]],
      styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L3Vsc2lpbnR1c3V2L3Vsc2lpbnR1c3V2LXN1Yi91bHNpaW50dXN1di1zdWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1ZGdldC91bHNpaW50dXN1di91bHNpaW50dXN1di1zdWIvdWxzaWludHVzdXYtc3ViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC91bHNpaW50dXN1di91bHNpaW50dXN1di1zdWIvdWxzaWludHVzdXYtc3ViLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSIsIm1hdC1ncmlkLXRpbGUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlsiintusuvSubComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ulsiintusuv-sub',
          templateUrl: './ulsiintusuv-sub.component.html',
          styleUrls: ['./ulsiintusuv-sub.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/budget/ulsiintusuv/ulsiintusuv.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/budget/ulsiintusuv/ulsiintusuv.component.ts ***!
    \*************************************************************/

  /*! exports provided: UlsiintusuvComponent */

  /***/
  function _src_app_budget_ulsiintusuv_ulsiintusuvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UlsiintusuvComponent", function () {
      return UlsiintusuvComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/constants */
    "./src/app/services/constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modules/year-change/year-change.component */
    "./src/app/modules/year-change/year-change.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_description_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modules/description/description.component */
    "./src/app/modules/description/description.component.ts");
    /* harmony import */


    var _modules_ulsiintusuvcharts_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modules/ulsiintusuvcharts/ulsiintusuvcharts.component */
    "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.component.ts");
    /* harmony import */


    var _modules_charts_charts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../modules/charts/charts.component */
    "./src/app/modules/charts/charts.component.ts");
    /* harmony import */


    var _modules_charts_simple_simple_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../modules/charts/simple/simple.component */
    "./src/app/modules/charts/simple/simple.component.ts");
    /* harmony import */


    var _orlogo_orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../orlogo/orlogo-sub/orlogo-sub.component */
    "./src/app/budget/orlogo/orlogo-sub/orlogo-sub.component.ts");

    function UlsiintusuvComponent_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
      }
    }

    function UlsiintusuvComponent_img_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
      }
    }

    function UlsiintusuvComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043E\u0440\u043B\u043E\u0433\u043E \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0430\u043D\u0433\u0438\u043B\u043B\u0430\u0430\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UlsiintusuvComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043E\u0440\u043B\u043E\u0433\u043E \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0430\u043D\u0433\u0438\u043B\u043B\u0430\u0430\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UlsiintusuvComponent_img_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
      }
    }

    var _c0 = function _c0() {
      return ["#28c66f"];
    };

    function UlsiintusuvComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ulsiintusuv-charts", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 0)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("legend", ctx_r16.isLegend)("isOrlogo", ctx_r16.isOrlogo)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r16.sum)("percent", ctx_r16.ulsProcess)("befPercent", ctx_r16.befulsProcess)("values", ctx_r16.ulsValues)("names", ctx_r16.ulsNames)("prefValue", ctx_r16.ulsPrefVal);
      }
    }

    function UlsiintusuvComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UlsiintusuvComponent_div_20_div_1_Template, 2, 12, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isDataLoaded);
      }
    }

    var _c1 = function _c1() {
      return ["#ea5455"];
    };

    function UlsiintusuvComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ulsiintusuv-charts", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 0)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("legend", ctx_r17.isLegend)("isZarlaga", ctx_r17.isZarlaga)("title", "\u041D\u0438\u0439\u0442 \u0417\u0430\u0440\u043B\u0430\u0433\u0430")("sum", ctx_r17.sumZarlaga)("percent", ctx_r17.ulsZarlagaProcess)("befPercent", ctx_r17.befulsZarlagaProcess)("values", ctx_r17.ulsZarlagaValues)("names", ctx_r17.ulsZarlagaNames)("prefValue", ctx_r17.ulsZarlagaPrefVal);
      }
    }

    function UlsiintusuvComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UlsiintusuvComponent_div_21_div_1_Template, 2, 12, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isDataLoaded);
      }
    }

    function UlsiintusuvComponent_img_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function UlsiintusuvComponent_img_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
      }
    }

    function UlsiintusuvComponent_img_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
      }
    }

    function UlsiintusuvComponent_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0437\u0430\u0440\u043B\u0430\u0433\u0430 \u0435\u0440\u04E9\u043D\u0445\u0438\u0439\u043B\u04E9\u043D \u0437\u0430\u0445\u0438\u0440\u0430\u0433\u0447\u0430\u0430\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UlsiintusuvComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0437\u0430\u0440\u043B\u0430\u0433\u0430 \u0435\u0440\u04E9\u043D\u0445\u0438\u0439\u043B\u04E9\u043D \u0437\u0430\u0445\u0438\u0440\u0430\u0433\u0447\u0430\u0430\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UlsiintusuvComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0440\u043B\u043E\u0433\u043E \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0430\u043D\u0433\u0438\u043B\u043B\u0430\u0430\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "budget-charts", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 0)("isOrlogo", ctx_r12.isOrlogo)("legend", true)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E \u0431\u0430 \u0442\u0443\u0441\u043B\u0430\u043C\u0436\u0438\u0439\u043D \u0434\u04AF\u043D")("sum", ctx_r12.sum)("values", ctx_r12.orlogoSub1Values)("names", ctx_r12.orlogoSub1Names)("percent", ctx_r12.ulsProcess)("befPercent", ctx_r12.befulsProcess)("prefValue", ctx_r12.ulsPrefVal);
      }
    }

    function UlsiintusuvComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u044D\u043D\u0446\u0432\u044D\u0440\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-simple", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 1)("isOrlogo", ctx_r13.isOrlogo)("legend", true)("title", "\u0422\u044D\u043D\u0446\u0432\u044D\u0440\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u043E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r13.sum1)("values", ctx_r13.orlogoSub2Values)("names", ctx_r13.orlogoSub2Names)("percent", ctx_r13.ulsProcess2)("befPercent", ctx_r13.beforlogoSub2ValuesPer)("prefValue", ctx_r13.ulsPrefVal2);
      }
    }

    function UlsiintusuvComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-orlogo-sub", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datas", ctx_r14.orlogoDetailList);
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0442\u044D\u0440\u0431\u0443\u043C \u20AE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r19.percent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, detail_r19.perfoValue), "");
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_2_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 64);
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_2_i_feather_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 65);
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UlsiintusuvComponent_div_35_div_60_div_2_i_feather_5_Template, 1, 0, "i-feather", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UlsiintusuvComponent_div_35_div_60_div_2_i_feather_6_Template, 1, 0, "i-feather", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", detail_r19.percent, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.params["category"] == "SUBMITTED" && detail_r19.percent < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.params["category"] == "SUBMITTED" && detail_r19.percent >= 0);
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r20 = ctx_r30.index;
        var detail_r19 = ctx_r30.$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r23.appendValues[i_r20] + ctx_r23.width4Temp * detail_r19.repaymentLoan), "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r19.repaymentLoan);
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r20 = ctx_r31.index;
        var detail_r19 = ctx_r31.$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r24.appendValues[i_r20] + ctx_r24.width3Temp * detail_r19.loan, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, detail_r19.loan));
      }
    }

    function UlsiintusuvComponent_div_35_div_60_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r20 = ctx_r32.index;
        var detail_r19 = ctx_r32.$implicit;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r25.appendValues[i_r20] + ctx_r25.width2Temp * detail_r19.capitalCost), "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r19.capitalCost);
      }
    }

    function UlsiintusuvComponent_div_35_div_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UlsiintusuvComponent_div_35_div_60_div_1_Template, 8, 4, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UlsiintusuvComponent_div_35_div_60_div_2_Template, 7, 3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UlsiintusuvComponent_div_35_div_60_div_6_Template, 3, 6, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UlsiintusuvComponent_div_35_div_60_div_7_Template, 3, 6, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UlsiintusuvComponent_div_35_div_60_div_8_Template, 3, 6, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r19 = ctx.$implicit;
        var i_r20 = ctx.index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r19.percent > 0 && ctx_r18.params["category"] == "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.params["category"] == "SUBMITTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, detail_r19.total));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r19.repaymentLoan > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r19.loan > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r19.capitalCost > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r18.appendValues[i_r20] + ctx_r18.width1Temp * detail_r19.processCost, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, detail_r19.processCost));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r19.name);
      }
    }

    function UlsiintusuvComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0437\u0430\u0440\u043B\u0430\u0433\u0430 \u0435\u0440\u04E9\u043D\u0445\u0438\u0439\u043B\u04E9\u043D \u0437\u0430\u0445\u0438\u0440\u0430\u0433\u0447\u0430\u0430\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0443\u0440\u0441\u0433\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0437\u0430\u0440\u0434\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0445\u04E9\u0440\u04E9\u043D\u0433\u0438\u0439\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0437\u0430\u0440\u0434\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0433\u0430\u0434\u0430\u0430\u0434,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0437\u044D\u044D\u043B \u0442\u0443\u0441\u043B\u0430\u043C\u0436");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u044D\u0440\u0433\u044D\u0436 \u0442\u04E9\u043B\u04E9\u0433\u0434\u04E9\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0446\u044D\u0432\u044D\u0440 \u0437\u044D\u044D\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u043D\u0438\u0439\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0437\u0430\u0440\u0434\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UlsiintusuvComponent_div_35_div_60_Template, 14, 15, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx_r15.ulsiintusuvTEZ_process_cost));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 8, ctx_r15.ulsiintusuvTEZ_capital_cost));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 10, ctx_r15.ulsiintusuvTEZ_loan));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 12, ctx_r15.ulsiintusuvTEZ_repayment_loan));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 14, ctx_r15.ulsiintusuvTEZ_total));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.ulsiintusuvTEZDetail);
      }
    }

    var UlsiintusuvComponent = /*#__PURE__*/function () {
      function UlsiintusuvComponent(mainService, router) {
        var _this = this;

        _classCallCheck(this, UlsiintusuvComponent);

        this.mainService = mainService;
        this.router = router;
        this.isDataLoaded = false;
        this.isSub1 = false;
        this.isSub2 = false;
        this.isSub3 = false;
        this.isSubZarlaga = false;
        this.names = [];
        this.valueszas = [];
        this.orlogoList = [];
        this.orlogoSub1List = [];
        this.orlogoSub2List = [];
        this.orlogoValues = [];
        this.orlogoNames = [];
        this.orlogoSub1Values = [];
        this.orlogoSub1Values1 = 0;
        this.orlogoSub1ValuesBef = 0;
        this.orlogoSub1Names = [];
        this.orlogoSub2Values = [];
        this.orlogoSub2ValuesPer = 0;
        this.beforlogoSub2ValuesPer = 0;
        this.beforlogoSub2ValuesPerPer = 0;
        this.orlogoSub2Names = [];
        this.ulsiintusuvTEZ = [];
        this.ulsiintusuvTEZDetail = [];
        this.valuesUls = [];
        this.ulsList = [];
        this.ulsListPer = [];
        this.ulsSub1List = [];
        this.ulsValues = [];
        this.ulsValuesPer = [];
        this.ulsNames = [];
        this.ulsSub1Values = [];
        this.ulsSub1Names = [];
        this.ulsProcess = 0;
        this.befulsProcess = 0;
        this.befulsProcess1 = 0;
        this.ulsProcess1 = 0;
        this.ulsProcess2 = 0;
        this.percentChart = "";
        this.ulsPerVal = [];
        this.prefValueChart = "";
        this.ulsPrefVal = [];
        this.ulsPrefVal1 = [];
        this.ulsPrefVal2 = 0;
        this.valuesZarlagaUls = [];
        this.ulsZarlagaList = [];
        this.ulsZarlagaSub1List = [];
        this.ulsZarlagaValues = [];
        this.ulsZarlagaNames = [];
        this.ulsZarlagaSub1Values = [];
        this.ulsZarlagaSub1Names = [];
        this.ulsZarlagaProcess = 0;
        this.befulsZarlagaProcess = 0;
        this.percentZarlagaChart = "";
        this.ulsZarlagaPerVal = [];
        this.prefZarlagaValueChart = "";
        this.ulsZarlagaPrefVal = [];
        this.orlogoDetailList = [];
        this.isLegend = false;
        this.isOrlogo = true;
        this.isZarlaga = false;
        this.isChart = false;
        this.sum = 0;
        this.sum1 = 0;
        this.sumZarlaga = 0;
        this.process = 0;
        this.width = 222;
        this.width1Temp = 0;
        this.maxProcess = 0;
        this.widprocessCost = [];
        this.width2Temp = 0;
        this.maxCapital = 0;
        this.widcapitalCost = [];
        this.width3Temp = 0;
        this.maxLoan = 0;
        this.widloan = [];
        this.width4Temp = 0;
        this.maxRepay = 0;
        this.widrepaymentLoan = [];
        this.appendValues = [];
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category
        };
        this.beforeYear = 0;
        this.mainService.budgetOrlogoSub.subscribe(function (data) {
          // this.isSub2 = true;
          _this.sub2Head = _this.orlogoSub1Names[data];

          if (data === 1) {
            _this.orlogoTo();
          }
        });
        this.mainService.budgetOrlogoSub1.subscribe(function (data) {
          _this.sub2Head = _this.orlogoSub2Names[data];

          _this.orlogoDetail(_this.orlogoSub2List[data]["level"]);
        }); // this.orlogoDetail(this.orlogoSub2List[data]["level"]);

        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this.setQueryParam(val.url.split('?')[1]);
            }

            _this.loadData();

            if (_this.isSubZarlaga == true) {
              _this.zarlagaTo();
            }
          }
        });
      }

      return _createClass(UlsiintusuvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getReleaseDate("Sheet2");
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this2 = this;

          this.ulsValues = [];
          this.ulsNames = [];
          this.ulsZarlagaValues = [];
          this.ulsZarlagaNames = [];
          this.ulsPrefVal = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this2.ulsList = result;
            result.forEach(function (item) {
              if (item.type == "IN") {
                _this2.ulsValues.push(item["value"]);

                _this2.ulsPrefVal = item["perfoValue"];
                _this2.ulsProcess = parseFloat((item["perfoValue"] / item["value"] * 100).toFixed(2));

                _this2.ulsNames.push("Нийт орлого");
              }
            });
            _this2.sum = _this2.ulsValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this2.isLegend = false;
            _this2.isDataLoaded = true;

            _this2.beforeOrlogo();
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this2.ulsZarlagaList = result;
            result.forEach(function (item) {
              if (item.type == "OUT") {
                _this2.ulsZarlagaValues.push(item["value"]);

                _this2.ulsZarlagaPrefVal = item["perfoValue"];
                _this2.ulsZarlagaProcess = parseFloat((item["perfoValue"] / item["value"] * 100).toFixed(2));

                _this2.ulsZarlagaNames.push("Нийт зарлага");
              }
            });
            _this2.sumZarlaga = _this2.ulsZarlagaValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this2.isLegend = false;
            _this2.isDataLoaded = true;

            _this2.beforeZar();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "beforeOrlogo",
        value: function beforeOrlogo() {
          var _this3 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then(function (result) {
            _this3.ulsListPer = result;
            result.forEach(function (item) {
              if (item.type == "IN") {
                _this3.ulsPrefValPer = item["value"];
              }
            });
            _this3.befulsProcess = isFinite(Math.floor(parseFloat(((_this3.sum - _this3.ulsPrefValPer) / _this3.sum).toFixed(2)) * 100)) ? Math.floor(parseFloat(((_this3.sum - _this3.ulsPrefValPer) / _this3.sum).toFixed(2)) * 100) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "beforeZar",
        value: function beforeZar() {
          var _this4 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then(function (result) {
            _this4.ulsZarlagaList = result;
            result.forEach(function (item) {
              if (item.type == "OUT") {
                _this4.ulsZarlagaValuesPer = item["value"];
              }
            });
            _this4.befulsZarlagaProcess = isFinite(Math.floor(parseFloat(((_this4.sumZarlaga - _this4.ulsZarlagaValuesPer) / _this4.ulsZarlagaValuesPer).toFixed(2)) * 100)) ? Math.floor(parseFloat(((_this4.sumZarlaga - _this4.ulsZarlagaValuesPer) / _this4.ulsZarlagaValuesPer).toFixed(2)) * 100) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "setQueryParam",
        value: function setQueryParam(param) {
          var query = {};
          var params = param.split("&");
          params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
          }, this);
          this.getChanges(params);
        }
      }, {
        key: "getChanges",
        value: function getChanges(params) {
          var old = this.params["year"];
          this.beforeYear = this.params["year"] - 1;

          if (params != old) {
            this.isSub1 = false;
            this.isSub2 = false;
            this.isSub3 = false;
          }
        }
      }, {
        key: "orlogo",
        value: function orlogo() {
          this.isOrlogo = true;
          this.isZarlaga = false;
        }
      }, {
        key: "zarlaga",
        value: function zarlaga() {
          this.isOrlogo = false;
          this.isZarlaga = true;
        }
      }, {
        key: "orlogoClick",
        value: function orlogoClick() {
          this.orlogoUlsiintusuv();
          this.isSubZarlaga = false;

          if (!this.isSubZarlaga) {
            this.getReleaseDate("Sheet2");
          }

          this.mainService.scroll("description");
        }
      }, {
        key: "zarlagaClick",
        value: function zarlagaClick() {
          this.isSub1 = false;
          this.isSubZarlaga = true;

          if (this.isSubZarlaga) {
            this.getReleaseDate("Sheet3");
          }

          this.zarlagaTo();
          this.mainService.scroll("description");
        }
      }, {
        key: "orlogoUlsiintusuv",
        value: function orlogoUlsiintusuv() {
          var _this5 = this;

          this.orlogoSub1Values = [];
          this.orlogoSub1Names = [];
          this.ulsPrefVal1 = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this5.orlogoSub1List = result;
            result.forEach(function (item) {
              _this5.orlogoSub1Values.push(item["approvedValue"]);

              _this5.orlogoSub1Values1 += item["approvedValue"];
              _this5.ulsPrefVal1 = item["perfoValue"];
              _this5.ulsProcess1 = parseFloat((item["perfoValue"] / item["approvedValue"] * 100).toFixed(2));

              _this5.orlogoSub1Names.push(item["typeName"]);
            });
            _this5.isSub1 = true;
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then(function (result) {
            result.forEach(function (item) {
              _this5.orlogoSub1ValuesBef += item["approvedValue"];
            });
            _this5.befulsProcess1 = Math.floor(parseFloat(((_this5.orlogoSub1Values1 - _this5.orlogoSub1ValuesBef) / _this5.orlogoSub1Values1).toFixed(2)) * 100);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "orlogoTo",
        value: function orlogoTo() {
          var _this6 = this;

          this.orlogoSub2Values = [];
          this.orlogoSub2Names = [];
          this.ulsPrefVal2 = 0;
          this.orlogoSub2ValuesPer = 0;
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_TO + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this6.orlogoSub2List = result; // console.log(result);

            result.forEach(function (item) {
              _this6.orlogoSub2Values.push(item["approvedValue"]);

              _this6.orlogoSub2ValuesPer += item["approvedValue"];
              _this6.ulsPrefVal2 += item["perfoValue"];

              _this6.orlogoSub2Names.push(item["levelName"]);
            });
            _this6.ulsProcess2 = 0;
            _this6.ulsProcess2 = parseFloat((_this6.ulsPrefVal2 / _this6.orlogoSub2ValuesPer * 100).toFixed(2));
            _this6.sum1 = 0;
            _this6.sum1 = _this6.orlogoSub2Values.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this6.isSub2 = true;
            var service = _this6.mainService;
            setTimeout(function () {
              this.isSub2 = true;
              service.scroll("sub-top");
            }, 1000);

            _this6.beforeOrlogoLevel3();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "beforeOrlogoLevel3",
        value: function beforeOrlogoLevel3() {
          var _this7 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_TO + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then(function (result) {
            result.forEach(function (item) {
              _this7.beforlogoSub2ValuesPer += item["approvedValue"];
            });
            _this7.beforlogoSub2ValuesPer = isFinite(parseFloat(((_this7.sum1 - _this7.beforlogoSub2ValuesPer) / _this7.beforlogoSub2ValuesPer * 100).toFixed(2))) ? parseFloat(((_this7.sum1 - _this7.beforlogoSub2ValuesPer) / _this7.beforlogoSub2ValuesPer * 100).toFixed(2)) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "orlogoDetail",
        value: function orlogoDetail(level) {
          var _this8 = this;

          this.orLevel = level;
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_DETAIL + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&level=" + this.orLevel, null, true).then(function (result) {
            _this8.orlogoDetailList = result;
            _this8.isSub3 = true; // this.mainService.scroll("sub-top");
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "zarlagaTo",
        value: function zarlagaTo() {
          var _this9 = this;

          this.isSubZarlaga = true;
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_MAIN + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            result = result[0];
            _this9.ulsiintusuvTEZ_capital_cost = result.capitalCost;
            _this9.ulsiintusuvTEZ_process_cost = result.processCost;
            _this9.ulsiintusuvTEZ_loan = result.loan;
            _this9.ulsiintusuvTEZ_repayment_loan = result.repaymentLoan;
            _this9.ulsiintusuvTEZ_total = result.total;
          })["catch"](function (error) {
            console.log(error);
          });
          this.widcapitalCost = [];
          this.widprocessCost = [];
          this.widloan = [];
          this.widrepaymentLoan = [];
          this.appendValues = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ULSIINTUSUV_ITEM + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this9.ulsiintusuvTEZDetail = result;
            _this9.ulsRow = result.length;
            result.forEach(function (item) {
              var defaultVal = 0;
              defaultVal += item["capitalCost"] > 0 ? 0 : 1;
              defaultVal += item["processCost"] > 0 ? 0 : 1;
              defaultVal += item["loan"] > 0 ? 0 : 1;
              defaultVal += item["repaymentLoan"] > 0 ? 0 : 1;

              _this9.widcapitalCost.push(item["capitalCost"]);

              _this9.widprocessCost.push(item["processCost"]);

              _this9.widloan.push(item["loan"]);

              _this9.widrepaymentLoan.push(item["repaymentLoan"]);

              switch (defaultVal) {
                case 1:
                  _this9.appendValues.push(40);

                  break;

                case 2:
                  _this9.appendValues.push(60);

                  break;

                case 3:
                  _this9.appendValues.push(120);

                  break;

                default:
                  _this9.appendValues.push(0);

              } // console.log(defaultVal);     

            });
            _this9.maxProcess = _this9.widprocessCost.reduce(function (a, b) {
              return Math.max(a, b);
            });
            _this9.maxCapital = _this9.widcapitalCost.reduce(function (a, b) {
              return Math.max(a, b);
            });
            _this9.maxLoan = _this9.widloan.reduce(function (a, b) {
              return Math.max(a, b);
            });
            _this9.maxRepay = _this9.widrepaymentLoan.reduce(function (a, b) {
              return Math.max(a, b);
            });
            var max = _this9.maxProcess;

            if (_this9.maxCapital > max) {
              max = _this9.maxCapital;
            }

            if (_this9.maxLoan > max) {
              max = _this9.maxLoan;
            }

            if (_this9.maxRepay > max) {
              max = _this9.maxRepay;
            }

            _this9.width1Temp = _this9.width / max;
            _this9.width2Temp = _this9.width / max;
            _this9.width3Temp = _this9.width / max;
            _this9.width4Temp = _this9.width / max;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getReleaseDate",
        value: function getReleaseDate(code) {
          var _this0 = this;

          this.updateDate = "";
          this.description = "";
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then(function (result) {
            _this0.releaseDate = result;

            if (result.length > 0) {
              _this0.updateDate = result[0].updateDate;
              _this0.description = result[0].description;
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);
    }();

    UlsiintusuvComponent.ɵfac = function UlsiintusuvComponent_Factory(t) {
      return new (t || UlsiintusuvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UlsiintusuvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UlsiintusuvComponent,
      selectors: [["app-ulsiintusuv"]],
      decls: 36,
      vars: 18,
      consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], [1, "budget-main"], [1, "last_updated"], [1, "title"], [1, "chart-text", "row", "justify-content-md-center"], [1, "orlogo", 3, "click", "mouseover"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BCH_5 - Copy.svg", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BCH_5.svg", "width", "100", 4, "ngIf"], ["style", "font-weight: bold;", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff", 4, "ngIf"], [1, "ndleft"], ["src", "../../../assets/image/icons/right.png", 4, "ngIf"], [4, "ngIf"], [1, "zarlaga", 3, "click", "mouseover"], [1, "ndright"], ["src", "../../../assets/image/icons/left.png", 4, "ngIf"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BOH_3 - Copy.svg", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BOH_3.svg", "width", "100", 4, "ngIf"], [3, "description"], ["class", "budget-block", 4, "ngIf"], ["class", "budget-block ", "id", "sub-top", 4, "ngIf"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BCH_5 - Copy.svg", "width", "100"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BCH_5.svg", "width", "100"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "color", "#0081ff"], ["src", "../../../assets/image/icons/right.png"], ["class", "chart-container", 4, "ngIf"], [1, "chart-container"], [3, "sub", "colors", "legend", "isOrlogo", "title", "sum", "percent", "befPercent", "values", "names", "prefValue"], [3, "sub", "colors", "legend", "isZarlaga", "title", "sum", "percent", "befPercent", "values", "names", "prefValue"], ["src", "../../../assets/image/icons/left.png"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BOH_3 - Copy.svg", "width", "100"], ["src", "../../../assets/image/budget/zeeliintuslamj/tuslamj/BOH_3.svg", "width", "100"], [1, "budget-block"], [1, "block-container"], [3, "sub", "isOrlogo", "legend", "title", "sum", "values", "names", "percent", "befPercent", "prefValue"], ["id", "sub-top", 1, "budget-block"], [3, "datas"], [1, "row"], [1, "col-md-1"], [1, "col-md-2", "zarlaga-item"], [1, "number1"], [1, "number2"], [1, "number3"], [1, "number4"], [1, "number5"], [1, "col-md-12"], [1, "grap"], ["class", "row tusuv-row", 4, "ngFor", "ngForOf"], [1, "row", "tusuv-row"], ["class", "lastRow", 4, "ngIf"], ["class", "lastRow", "style", "position: relative;", 4, "ngIf"], [1, "first6Row"], ["class", "first5Row", 3, "style", 4, "ngIf"], ["class", "first4Row", 3, "style", 4, "ngIf"], ["class", "first3Row", 3, "style", 4, "ngIf"], [1, "first2Row"], [1, "first1Row"], [1, "lastRow"], [1, "lastRow", 2, "position", "relative"], ["name", "arrow-down", "class", "down-icon", "style", "position: absolute;top: 20px;right: 20px;color: #505054;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "position: absolute;top: 20px;right: 20px;color: #505054;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "position", "absolute", "top", "20px", "right", "20px", "color", "#505054"], ["name", "arrow-up", 1, "down-icon", 2, "position", "absolute", "top", "20px", "right", "20px", "color", "#505054"], [1, "first5Row"], [1, "first4Row"], [1, "first3Row"]],
      template: function UlsiintusuvComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0423\u041B\u0421\u042B\u041D \u0422\u04E8\u0421\u04E8\u0412");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UlsiintusuvComponent_Template_div_click_11_listener() {
            return ctx.orlogoClick();
          })("mouseover", function UlsiintusuvComponent_Template_div_mouseover_11_listener() {
            return ctx.orlogo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UlsiintusuvComponent_img_13_Template, 1, 0, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UlsiintusuvComponent_img_14_Template, 1, 0, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UlsiintusuvComponent_span_16_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UlsiintusuvComponent_span_17_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UlsiintusuvComponent_img_19_Template, 1, 0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UlsiintusuvComponent_div_20_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UlsiintusuvComponent_div_21_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UlsiintusuvComponent_Template_div_click_22_listener() {
            return ctx.zarlagaClick();
          })("mouseover", function UlsiintusuvComponent_Template_div_mouseover_22_listener() {
            return ctx.zarlaga();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UlsiintusuvComponent_img_24_Template, 1, 0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UlsiintusuvComponent_img_26_Template, 1, 0, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UlsiintusuvComponent_img_27_Template, 1, 0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UlsiintusuvComponent_span_29_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UlsiintusuvComponent_span_30_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "module-description", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UlsiintusuvComponent_div_32_Template, 5, 10, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UlsiintusuvComponent_div_33_Template, 5, 10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UlsiintusuvComponent_div_34_Template, 3, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UlsiintusuvComponent_div_35_Template, 62, 16, "div", 21);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ", ctx.updateDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlaga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrlogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlaga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrlogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrlogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrlogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlaga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlaga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrlogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlaga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOrlogo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlaga);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSub1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSub1 && ctx.isSub2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSub1 && ctx.isSub3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubZarlaga);
        }
      },
      directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__["YearChangeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionComponent"], _modules_ulsiintusuvcharts_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_7__["UlsiintusuvchartsComponent"], _modules_charts_charts_component__WEBPACK_IMPORTED_MODULE_8__["ChartsComponent"], _modules_charts_simple_simple_component__WEBPACK_IMPORTED_MODULE_9__["SimpleComponent"], _orlogo_orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_10__["OrlogoSubComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".budget-main[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 45px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9a9a9a;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 300px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 300px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  padding-bottom: 30px;\n}\n.chart-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.zarlaga-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #737373;\n  font-weight: 700;\n  font-size: medium;\n  text-transform: uppercase;\n}\n.zarlaga-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #737373;\n  font-weight: 700;\n  font-size: 16px;\n}\n.zarlaga-item[_ngcontent-%COMP%]   .number1[_ngcontent-%COMP%] {\n  color: #f26c52;\n  font-weight: 700;\n  font-size: 35px;\n}\n.zarlaga-item[_ngcontent-%COMP%]   .number2[_ngcontent-%COMP%] {\n  color: #4bc2eb;\n  font-weight: 700;\n  font-size: 35px;\n}\n.zarlaga-item[_ngcontent-%COMP%]   .number3[_ngcontent-%COMP%] {\n  color: #ea87b8;\n  font-weight: 700;\n  font-size: 35px;\n}\n.zarlaga-item[_ngcontent-%COMP%]   .number4[_ngcontent-%COMP%] {\n  color: #f5b945;\n  font-weight: 700;\n  font-size: 35px;\n}\n.zarlaga-item[_ngcontent-%COMP%]   .number5[_ngcontent-%COMP%] {\n  color: #28c66f;\n  font-weight: 700;\n  font-size: 35px;\n}\n.grap[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-bottom: 20px;\n  text-align: right;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .first1Row[_ngcontent-%COMP%] {\n  width: 270px;\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  background-color: #ececec !important;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  text-align: left;\n  color: #505054;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-right: -20px;\n  padding: 10px 15px;\n  flex: auto;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .first2Row[_ngcontent-%COMP%] {\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  background-color: #f26c52;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 10px 10px;\n  z-index: 2;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .first3Row[_ngcontent-%COMP%] {\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  background-color: #4bc2eb;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 10px 10px;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .first4Row[_ngcontent-%COMP%] {\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  background-color: #ea87b8;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 10px 10px;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .first5Row[_ngcontent-%COMP%] {\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  background-color: #f5b945;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 10px 10px;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .first6Row[_ngcontent-%COMP%] {\n  background-color: #28c66f;\n  color: #fff;\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 5px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  padding: 10px 10px;\n  min-width: 150px;\n  text-align: center;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .lastRow[_ngcontent-%COMP%] {\n  color: #505054;\n  text-align: center;\n  font-size: 14px;\n  border: 1px solid #999;\n  border-radius: 30px;\n  padding: 4px 10px 2px 10px;\n  margin-left: 10px;\n  min-width: 150px;\n  text-align: center;\n}\n.grap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .lastRow[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n.grap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 1em;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-bottom: 20px;\n  text-align: right;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  background-color: #ececec !important;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  text-align: left;\n  color: #999;\n  font-size: small;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 150px;\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #f26c52;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 150px;\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  background-color: #4bc2eb;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 150px;\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  background-color: #ea87b8;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 150px;\n  border-top: 3px solid;\n  border-bottom: 3px solid;\n  background-color: #f5b945;\n  color: #fff;\n  font-weight: 500;\n  text-align: center;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  background-color: #28c66f;\n  color: #fff;\n  border-left: 3px solid;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 5px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n  border: 1px solid #999;\n  border-radius: 20px;\n  padding: 0 10px;\n}\n.grap[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n.description[_ngcontent-%COMP%]   .block-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 150px;\n  text-align: left;\n  color: #505054;\n}\n.tusuv-row[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 1680px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 190px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    cursor: pointer;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n}\n@media screen and (max-width: 1680px) {\n  .budget-main[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 130px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -25px;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 130px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -25px;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    padding-bottom: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .budget-main[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -20px;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -20px;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .budget-main[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -15px;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -15px;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .budget-main[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 130px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -15px;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 130px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -15px;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .budget-main[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 60px;\n    width: 130px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: -15px;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 60px;\n    width: 130px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -15px;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L3Vsc2lpbnR1c3V2L3Vsc2lpbnR1c3V2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idWRnZXQvdWxzaWludHVzdXYvdWxzaWludHVzdXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ0RKO0FESVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FESVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNGWjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRGhCO0FERWdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNBcEI7QURDb0I7RUFDSSxXQUFBO0FDQ3hCO0FER1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNEaEI7QURFZ0I7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0FwQjtBRENvQjtFQUNJLFdBQUE7QUNDeEI7QURHWTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ0RoQjtBRGtCQTtFQUNJLGdCQUFBO0FDaEJKO0FEbUJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ2hCUjtBRGtCSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQlI7QURrQkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDaEJSO0FEa0JJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCUjtBRGtCSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQlI7QURrQkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDaEJSO0FEa0JJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCUjtBRHFCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNsQko7QURtQkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2pCUjtBRGtCUTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2hCWjtBRG1CUTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2pCWjtBRG1CUTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Msa0JBQUE7QUNqQmI7QURtQlE7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakJaO0FEbUJRO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQyxrQkFBQTtBQ2pCYjtBRG1CUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqQlo7QURtQlE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBSUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDcEJaO0FEWVk7RUFDRyxjQUFBO0FDVmY7QURvQkk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDbEJSO0FEc0JRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNwQlo7QURzQlE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3BCWjtBRHNCUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDcEJaO0FEc0JRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCWjtBRHNCUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNwQlo7QURzQlE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDcEJaO0FEc0JRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDcEJaO0FEc0JRO0VBQ0ksa0JBQUE7RUFJQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3ZCWjtBRGtCWTtFQUNHLGNBQUE7QUNoQmY7QUQwQkk7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDdkJSO0FEZ0NBO0VBQ0ksMkJBQUE7QUM5Qko7QURnQ0E7RUFDSSxrQkFBQTtBQzdCSjtBRDhCSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUM1QlI7QUQ4Qkk7RUFDSSxXQUFBO0FDNUJSO0FEK0JBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQ0FBQTtFQzVCTjtFRCtCVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQzdCZDtFRCtCVTtJQUNJLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDN0JkO0VEOEJjO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQzVCbEI7RUQ2QmtCO0lBQ0ksZUFBQTtFQzNCdEI7RUQ4QmM7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDNUJsQjtFRDZCa0I7SUFDSSxlQUFBO0VDM0J0QjtFRDhCYztJQUNJLFdBQUE7SUFDQSxvQkFBQTtFQzVCbEI7QUFDRjtBRDhDQTtFQUNJO0lBQ0ksa0JBQUE7SUFFQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQ0FBQTtFQzdDTjtFRG1EVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2pEZDtFRG1EVTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDakRkO0VEa0RjO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDaERsQjtFRGlEa0I7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtFQy9DdEI7RURnRHNCO0lBQ0ksV0FBQTtFQzlDMUI7RURpRGtCO0lBQ0ksZUFBQTtFQy9DdEI7RURtRGM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNqRGxCO0VEa0RrQjtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VDaER0QjtFRGlEc0I7SUFDSSxXQUFBO0VDL0MxQjtFRGtEa0I7SUFDSSxlQUFBO0VDaER0QjtFRG1EYztJQUNJLFdBQUE7SUFDQSxvQkFBQTtFQ2pEbEI7RUQrRE07SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDN0RWO0FBQ0Y7QURrRUE7RUFDSTtJQUNJLGtCQUFBO0lBRUEsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0NBQUE7RUNqRU47RUR1RVU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNyRWQ7RUR1RVU7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQ3JFZDtFRHNFYztJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ3BFbEI7RURxRWtCO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUNuRXRCO0VEb0VzQjtJQUNJLFdBQUE7RUNsRTFCO0VEcUVrQjtJQUNJLGVBQUE7RUNuRXRCO0VEdUVjO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDckVsQjtFRHNFa0I7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtFQ3BFdEI7RURxRXNCO0lBQ0ksV0FBQTtFQ25FMUI7RURzRWtCO0lBQ0ksZUFBQTtFQ3BFdEI7RUR1RWM7SUFDSSxXQUFBO0lBQ0Esb0JBQUE7RUNyRWxCO0VEbUZNO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQ2pGVjtBQUNGO0FEdUZBO0VBQ0k7SUFDSSxrQkFBQTtJQUVBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLG9DQUFBO0VDdEZOO0VENEZVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDMUZkO0VENEZVO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUMxRmQ7RUQyRmM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUN6RmxCO0VEMEZrQjtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VDeEZ0QjtFRHlGc0I7SUFDSSxXQUFBO0VDdkYxQjtFRDBGa0I7SUFDSSxlQUFBO0VDeEZ0QjtFRDRGYztJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQzFGbEI7RUQyRmtCO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUN6RnRCO0VEMEZzQjtJQUNJLFdBQUE7RUN4RjFCO0VEMkZrQjtJQUNJLGVBQUE7RUN6RnRCO0VENEZjO0lBQ0ksV0FBQTtJQUNBLG9CQUFBO0VDMUZsQjtFRHdHTTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUN0R1Y7QUFDRjtBRDZHQTtFQUNJO0lBQ0ksa0JBQUE7SUFFQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQ0FBQTtFQzVHTjtFRGtIVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2hIZDtFRGtIVTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDaEhkO0VEaUhjO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDL0dsQjtFRGdIa0I7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtFQzlHdEI7RUQrR3NCO0lBQ0ksV0FBQTtFQzdHMUI7RURnSGtCO0lBQ0ksZUFBQTtFQzlHdEI7RURrSGM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUNoSGxCO0VEaUhrQjtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDL0d0QjtFRGdIc0I7SUFDSSxXQUFBO0VDOUcxQjtFRGlIa0I7SUFDSSxlQUFBO0VDL0d0QjtFRGtIYztJQUNJLFdBQUE7SUFDQSxvQkFBQTtFQ2hIbEI7RUQ4SE07SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDNUhWO0FBQ0Y7QURvSUE7RUFDSTtJQUNJLGtCQUFBO0lBRUEsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0NBQUE7RUNuSU47RUR5SVU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUN2SWQ7RUR5SVU7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQ3ZJZDtFRHdJYztJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ3RJbEI7RUR1SWtCO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7RUNySXRCO0VEc0lzQjtJQUNJLFdBQUE7RUNwSTFCO0VEdUlrQjtJQUNJLGVBQUE7RUNySXRCO0VEeUljO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDdklsQjtFRHdJa0I7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtFQ3RJdEI7RUR1SXNCO0lBQ0ksV0FBQTtFQ3JJMUI7RUR3SWtCO0lBQ0ksZUFBQTtFQ3RJdEI7RUR5SWM7SUFDSSxXQUFBO0lBQ0Esb0JBQUE7RUN2SWxCO0VEcUpNO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQ25KVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYnVkZ2V0L3Vsc2lpbnR1c3V2L3Vsc2lpbnR1c3V2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgXG4uYnVkZ2V0LW1haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAudGl0bGV7XG4gICAgICAgIFxuICAgICAgICBoM3tcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgLm5kbGVmdHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAucGllX2NoYXJ0e1xuICAgICAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbn1cbi5jaGFydC1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi56YXJsYWdhLWl0ZW17XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLm51bWJlcjF7XG4gICAgICAgIGNvbG9yOiNmMjZjNTI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gICAgLm51bWJlcjJ7XG4gICAgICAgIGNvbG9yOiM0YmMyZWI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gICAgLm51bWJlcjN7XG4gICAgICAgIGNvbG9yOiNlYTg3Yjg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gICAgLm51bWJlcjR7XG4gICAgICAgIGNvbG9yOiNmNWI5NDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gICAgLm51bWJlcjV7XG4gICAgICAgIGNvbG9yOiMyOGM2NmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gICAgXG59XG5cbi5ncmFwe1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIC5yb3d7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxuICAgICAgICAuZmlyc3QxUm93e1xuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MzBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MzBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZmlyc3QyUm93e1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozMHB4OyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjZjNTI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuICAgICAgICAuZmlyc3QzUm93e1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzJlYjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maXJzdDRSb3d7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE4N2I4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlyc3Q1Um93e1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1Yjk0NTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maXJzdDZSb3d7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjMwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4OyBcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxhc3RSb3d7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGIge1xuICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDJweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRhYmxle1xuICAgICAgICBib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7IFxuICAgICAgICBib3JkZXItc3BhY2luZzogMCAxZW07XG4gICAgfVxuICAgIHRyIHtcbiAgICAgICBcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcbiAgICAgICAgfVxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCB7IFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdGQ6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoyMHB4OyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjZjNTI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRkOm50aC1jaGlsZCgzKXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmMyZWI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRkOm50aC1jaGlsZCg0KXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTg3Yjg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRkOm50aC1jaGlsZCg1KXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWI5NDU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRkOm50aC1jaGlsZCg2KXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDsgICBcbiAgICAgICAgfVxuICAgICAgICB0ZDpsYXN0LWNoaWxkIHsgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiIHtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbi5kZXNjcmlwdGlvbntcbiAgICAuYmxvY2stY29udGFpbmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDQwcHggMjBweCAwcHggMjBweDtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udHVzdXYtcm93e1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5tYWluLWRlc2NyaXB0aW9ue1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICBwe1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTkwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICAucGllX2NoYXJ0e1xuICAgICAgICAgICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgICAgICAvLyBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgLnBpZV9jaGFydHtcbiAgICAgICAgICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcjF7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQtdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICAucGllX2NoYXJ0e1xuICAgICAgICAgICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2hhcnQtY29udGFpbmVyMXtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIC5idWRnZXQtbWFpbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxODBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgLnBpZV9jaGFydHtcbiAgICAgICAgICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcjF7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIC5idWRnZXQtbWFpbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIC5waWVfY2hhcnR7XG4gICAgICAgICAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jaGFydC1jb250YWluZXIxe1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5idWRnZXQtbWFpbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIC5waWVfY2hhcnR7XG4gICAgICAgICAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jaGFydC1jb250YWluZXIxe1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn0iLCIuYnVkZ2V0LW1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDgxZmY7XG59XG4uYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlhOWE5YTtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi56YXJsYWdhLWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi56YXJsYWdhLWl0ZW0gcCB7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uemFybGFnYS1pdGVtIC5udW1iZXIxIHtcbiAgY29sb3I6ICNmMjZjNTI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi56YXJsYWdhLWl0ZW0gLm51bWJlcjIge1xuICBjb2xvcjogIzRiYzJlYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuLnphcmxhZ2EtaXRlbSAubnVtYmVyMyB7XG4gIGNvbG9yOiAjZWE4N2I4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4uemFybGFnYS1pdGVtIC5udW1iZXI0IHtcbiAgY29sb3I6ICNmNWI5NDU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi56YXJsYWdhLWl0ZW0gLm51bWJlcjUge1xuICBjb2xvcjogIzI4YzY2ZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uZ3JhcCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5ncmFwIC5yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmdyYXAgLnJvdyAuZmlyc3QxUm93IHtcbiAgd2lkdGg6IDI3MHB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmbGV4OiBhdXRvO1xufVxuLmdyYXAgLnJvdyAuZmlyc3QyUm93IHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjZjNTI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgei1pbmRleDogMjtcbn1cbi5ncmFwIC5yb3cgLmZpcnN0M1JvdyB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJjMmViO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG4uZ3JhcCAucm93IC5maXJzdDRSb3cge1xuICBib3JkZXItdG9wOiAzcHggc29saWQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhODdiODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuLmdyYXAgLnJvdyAuZmlyc3Q1Um93IHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWI5NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cbi5ncmFwIC5yb3cgLmZpcnN0NlJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAzcHggc29saWQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyYXAgLnJvdyAubGFzdFJvdyB7XG4gIGNvbG9yOiAjNTA1MDU0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNHB4IDEwcHggMnB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JhcCAucm93IC5sYXN0Um93IGIge1xuICBjb2xvcjogIzI4YzY2Zjtcbn1cbi5ncmFwIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMWVtO1xufVxuLmdyYXAgdHIgdGQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmdyYXAgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWMgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ncmFwIHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjZjNTI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ncmFwIHRyIHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmMyZWI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ncmFwIHRyIHRkOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTg3Yjg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ncmFwIHRyIHRkOm50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWI5NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ncmFwIHRyIHRkOm50aC1jaGlsZCg2KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmdyYXAgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmdyYXAgdHIgdGQ6bGFzdC1jaGlsZCBiIHtcbiAgY29sb3I6ICMyOGM2NmY7XG59XG5cbi5kZXNjcmlwdGlvbiAuYmxvY2stY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTA1MDU0O1xufVxuLnR1c3V2LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLm1haW4tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG59XG4ubWFpbi1kZXNjcmlwdGlvbiBwIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW4tZGVzY3JpcHRpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YTlhOWE7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Egc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMjVweDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTIwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyBzcGFuIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Egc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lcjEge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQgaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlsiintusuvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ulsiintusuv',
          templateUrl: './ulsiintusuv.component.html',
          styleUrls: ['./ulsiintusuv.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/budget/ulsiintusuv/ulsiintusuv.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/budget/ulsiintusuv/ulsiintusuv.module.ts ***!
    \**********************************************************/

  /*! exports provided: UlsiintusuvModule */

  /***/
  function _src_app_budget_ulsiintusuv_ulsiintusuvModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UlsiintusuvModule", function () {
      return UlsiintusuvModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ulsiintusuv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ulsiintusuv.component */
    "./src/app/budget/ulsiintusuv/ulsiintusuv.component.ts");
    /* harmony import */


    var _ulsiintusuv_sub_ulsiintusuv_sub_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ulsiintusuv-sub/ulsiintusuv-sub.component */
    "./src/app/budget/ulsiintusuv/ulsiintusuv-sub/ulsiintusuv-sub.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/charts/charts.module */
    "./src/app/modules/charts/charts.module.ts");
    /* harmony import */


    var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modules/description/description.module */
    "./src/app/modules/description/description.module.ts");
    /* harmony import */


    var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modules/year-change/year-change.module */
    "./src/app/modules/year-change/year-change.module.ts");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts");
    /* harmony import */


    var _orlogo_orlogo_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../orlogo/orlogo.module */
    "./src/app/budget/orlogo/orlogo.module.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module */
    "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module.ts"); // import { NgApexchartsModule } from 'ng-apexcharts';


    var routes = [{
      path: '',
      component: _ulsiintusuv_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvComponent"]
    }];

    var UlsiintusuvModule = /*#__PURE__*/_createClass(function UlsiintusuvModule() {
      _classCallCheck(this, UlsiintusuvModule);
    });

    UlsiintusuvModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UlsiintusuvModule
    });
    UlsiintusuvModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UlsiintusuvModule_Factory(t) {
        return new (t || UlsiintusuvModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_7__["YearChangeModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _orlogo_orlogo_module__WEBPACK_IMPORTED_MODULE_9__["OrlogoModule"], // NgApexchartsModule,
      _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_11__["UlsiintusuvchartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UlsiintusuvModule, {
        declarations: [_ulsiintusuv_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvComponent"], _ulsiintusuv_sub_ulsiintusuv_sub_component__WEBPACK_IMPORTED_MODULE_3__["UlsiintusuvSubComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_7__["YearChangeModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _orlogo_orlogo_module__WEBPACK_IMPORTED_MODULE_9__["OrlogoModule"], // NgApexchartsModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_11__["UlsiintusuvchartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlsiintusuvModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ulsiintusuv_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvComponent"], _ulsiintusuv_sub_ulsiintusuv_sub_component__WEBPACK_IMPORTED_MODULE_3__["UlsiintusuvSubComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_7__["YearChangeModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _orlogo_orlogo_module__WEBPACK_IMPORTED_MODULE_9__["OrlogoModule"], // NgApexchartsModule,
          _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_11__["UlsiintusuvchartsModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ulsiintusuv-ulsiintusuv-module-es5.js.map