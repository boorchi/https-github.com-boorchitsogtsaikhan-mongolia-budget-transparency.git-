function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-main-module~oronnutag-oronnutag-module~pages-homepage-homepage-module"], {
  /***/
  "./src/app/modules/base-number/base-number.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/base-number/base-number.component.ts ***!
    \**************************************************************/

  /*! exports provided: BaseNumberComponent */

  /***/
  function _src_app_modules_baseNumber_baseNumberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseNumberComponent", function () {
      return BaseNumberComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BaseNumberComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r0.color, ";");
      }
    }

    function BaseNumberComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.text1);
      }
    }

    function BaseNumberComponent_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r2.color, ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r2.baseNumber));
      }
    }

    function BaseNumberComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.text2);
      }
    }

    function BaseNumberComponent_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0442\u044D\u0440\u0431\u0443\u043C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("display: inline-block; color: ", ctx_r5.color, ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.percent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r5.color, ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx_r5.prefValue));
      }
    }

    function BaseNumberComponent_div_6_div_2_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 11);
      }
    }

    function BaseNumberComponent_div_6_div_2_i_feather_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 12);
      }
    }

    function BaseNumberComponent_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BaseNumberComponent_div_6_div_2_i_feather_5_Template, 1, 0, "i-feather", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaseNumberComponent_div_6_div_2_i_feather_6_Template, 1, 0, "i-feather", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("display: inline-block; color: ", ctx_r6.color, ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.befPercent, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.checkType() && ctx_r6.befPercent < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.checkType() && ctx_r6.befPercent >= 0);
      }
    }

    function BaseNumberComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseNumberComponent_div_6_ng_container_1_Template, 10, 10, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseNumberComponent_div_6_div_2_Template, 8, 6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.checkType());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.checkType());
      }
    }

    var BaseNumberComponent = /*#__PURE__*/function () {
      function BaseNumberComponent(mainService, route, router) {
        var _this = this;

        _classCallCheck(this, BaseNumberComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.color = 'red';
        this.width = '200px';
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category
        };
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this.setQueryParam(val.url.split('?')[1]);
            }
          }
        });
      }

      return _createClass(BaseNumberComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setQueryParam",
        value: function setQueryParam(param) {
          var query = {};
          var params = param.split("&");
          params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
          }, this);
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.mainService.type == "APPROVED" ? "гүйцэтгэл" : "өмнөх оноос";
        }
      }, {
        key: "checkType",
        value: function checkType() {
          return this.mainService.type == "APPROVED";
        }
      }]);
    }();

    BaseNumberComponent.ɵfac = function BaseNumberComponent_Factory(t) {
      return new (t || BaseNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    BaseNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseNumberComponent,
      selectors: [["module-base-number"]],
      inputs: {
        text1: "text1",
        text2: "text2",
        showHelp: "showHelp",
        baseNumber: "baseNumber",
        percent: "percent",
        befPercent: "befPercent",
        prefValue: "prefValue",
        color: "color",
        width: "width"
      },
      decls: 7,
      vars: 8,
      consts: [[1, "base_number"], ["class", "help", 3, "style", 4, "ngIf"], [4, "ngIf"], [3, "style", 4, "ngIf"], ["class", "process", "style", "width: 100%;", 4, "ngIf"], [1, "help"], [1, "process", 2, "width", "100%"], ["style", "padding-top: 8px;", 4, "ngIf"], [2, "padding-top", "8px"], ["name", "arrow-down", "class", "down-icon", "style", "color: #505054;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #505054;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#505054"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#505054"]],
      template: function BaseNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseNumberComponent_span_1_Template, 2, 3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseNumberComponent_span_3_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BaseNumberComponent_h4_4_Template, 3, 6, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BaseNumberComponent_span_5_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaseNumberComponent_div_6_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.width, ";");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHelp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseNumber != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prefValue != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
      styles: [".orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n  color: #505054;\n  font-weight: bold;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 50px;\n  margin: 0px;\n  line-height: 80%;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #505054;\n  padding: 10px;\n  line-height: 110%;\n  margin-top: 20px;\n  text-transform: none;\n  max-width: 200px;\n}\n.base_number[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  color: #505054;\n  font-weight: bold;\n}\n.base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: inline-block;\n}\n.base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 36px;\n  margin: 0px;\n  line-height: 110%;\n}\n.base_number[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 25px;\n  border: 1px solid #505054;\n  padding: 5px;\n  line-height: 110%;\n  margin-top: 20px;\n  text-transform: none;\n  max-width: 180px;\n  position: relative;\n  min-height: 65px;\n}\n.arrow[_ngcontent-%COMP%] {\n  border: solid #333;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 2.5px;\n}\n.arrow-hr[_ngcontent-%COMP%] {\n  position: relative;\n}\n.down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n@media screen and (max-width: 1366px) {\n  .base_number[_ngcontent-%COMP%] {\n    color: #505054;\n    font-weight: bold;\n    font-size: 15px;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 50px;\n    margin: 0px;\n    line-height: 80%;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 10px;\n    line-height: 110%;\n    margin-top: 20px;\n    text-transform: none;\n    max-width: 200px;\n    min-height: auto;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .base_number[_ngcontent-%COMP%] {\n    color: #505054;\n    font-weight: bold;\n    font-size: 11px;\n    width: 140px !important;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0px;\n    line-height: 80%;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 10px;\n    line-height: 110%;\n    margin-top: 20px;\n    text-transform: none;\n    max-width: 170px;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9iYXNlLW51bWJlci9iYXNlLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9iYXNlLW51bWJlci9iYXNlLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNJLGlCQUFBO0FDQVo7QURDWTtFQUNJLHFCQUFBO0FDQ2hCO0FEQ1k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDaEI7QURDWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NoQjtBRENZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ2hCO0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDSSxpQkFBQTtBQ0RSO0FERVE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDQVo7QURFUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FaO0FERVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREVRO0VBQ0ksZ0JBQUE7QUNBWjtBREVRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQUo7QURFRTtFQUNJLGtCQUFBO0FDQ047QURDRTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7QUNFSjtBREFBO0VBQ0k7SUFDSSxjQUFBO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDR1Y7RURGVTtJQUNJLHFCQUFBO0VDSWQ7RURGVTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ0lkO0VERlU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNJZDtFREZVO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNJZDtBQUNGO0FEQUE7RUFDSTtJQUNJLGNBQUE7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtFQ0VWO0VERFU7SUFDSSxxQkFBQTtFQ0dkO0VERFU7SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNHZDtFRERVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDR2Q7RUREVTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDR2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmFzZS1udW1iZXIvYmFzZS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3Jsb2dve1xuICAgIC5iYXNlX251bWJlcntcbiAgICAgICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODAlO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICB9XG59XG4uYmFzZV9udW1iZXJ7XG4gICAgcGFkZGluZy10b3A6MzBweDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgIH0gICBcbiAgICAgICAgbGVnZW5ke1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4OyAgICAgICAgICAgIFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjVweDsgICAgICAgICAgICBcbiAgICAgICAgfVxufVxuLmFycm93IHtcbiAgICBib3JkZXI6IHNvbGlkICMzMzM7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMi41cHg7XG4gIH1cbiAgLmFycm93LWhye1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kb3duIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIC5iYXNlX251bWJlcntcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6YXV0b1xuICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJhc2VfbnVtYmVye1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODAlO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OmF1dG9cbiAgICAgICAgICAgIH1cbiAgICB9XG59XG4iLCIub3Jsb2dvIC5iYXNlX251bWJlciB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9ybG9nbyAuYmFzZV9udW1iZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5vcmxvZ28gLmJhc2VfbnVtYmVyIC5oZWxwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5vcmxvZ28gLmJhc2VfbnVtYmVyIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MCU7XG59XG4ub3Jsb2dvIC5iYXNlX251bWJlciAucHJvY2VzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uYmFzZV9udW1iZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJhc2VfbnVtYmVyIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYmFzZV9udW1iZXIgLmhlbHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJhc2VfbnVtYmVyIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xufVxuLmJhc2VfbnVtYmVyIGxlZ2VuZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYmFzZV9udW1iZXIgLnByb2Nlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG59XG5cbi5hcnJvdyB7XG4gIGJvcmRlcjogc29saWQgIzMzMztcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyLjVweDtcbn1cblxuLmFycm93LWhyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuYmFzZV9udW1iZXIge1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYmFzZV9udW1iZXIgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iYXNlX251bWJlciAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5iYXNlX251bWJlciBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYmFzZV9udW1iZXIge1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3aWR0aDogMTQwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYmFzZV9udW1iZXIgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iYXNlX251bWJlciAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5iYXNlX251bWJlciBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'module-base-number',
          templateUrl: './base-number.component.html',
          styleUrls: ['./base-number.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        text1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showHelp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        baseNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        percent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        befPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prefValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/base-number/base-number.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/base-number/base-number.module.ts ***!
    \***********************************************************/

  /*! exports provided: BaseNumberModule */

  /***/
  function _src_app_modules_baseNumber_baseNumberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseNumberModule", function () {
      return BaseNumberModule;
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


    var _base_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base-number.component */
    "./src/app/modules/base-number/base-number.component.ts");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts");

    var BaseNumberModule = /*#__PURE__*/_createClass(function BaseNumberModule() {
      _classCallCheck(this, BaseNumberModule);
    });

    BaseNumberModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BaseNumberModule
    });
    BaseNumberModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BaseNumberModule_Factory(t) {
        return new (t || BaseNumberModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseNumberModule, {
        declarations: [_base_number_component__WEBPACK_IMPORTED_MODULE_2__["BaseNumberComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]],
        exports: [_base_number_component__WEBPACK_IMPORTED_MODULE_2__["BaseNumberComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseNumberModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_base_number_component__WEBPACK_IMPORTED_MODULE_2__["BaseNumberComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]],
          exports: [_base_number_component__WEBPACK_IMPORTED_MODULE_2__["BaseNumberComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~main-main-module~oronnutag-oronnutag-module~pages-homepage-homepage-module-es5.js.map