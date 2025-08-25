function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~debt-debt-module~edaatgal-edaatgal-module~ndaatgal-ndaatgal-module~orlogo-orlogo-module~ulsi~53501564"], {
  /***/
  "./src/app/modules/simple-number/simple-number.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/simple-number/simple-number.component.ts ***!
    \******************************************************************/

  /*! exports provided: SimpleNumberComponent */

  /***/
  function _src_app_modules_simpleNumber_simpleNumberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleNumberComponent", function () {
      return SimpleNumberComponent;
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

    function SimpleNumberComponent_span_1_Template(rf, ctx) {
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

    function SimpleNumberComponent_span_3_Template(rf, ctx) {
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

    function SimpleNumberComponent_h4_4_Template(rf, ctx) {
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

    function SimpleNumberComponent_span_5_Template(rf, ctx) {
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

    function SimpleNumberComponent_div_6_ng_container_1_Template(rf, ctx) {
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

    function SimpleNumberComponent_div_6_div_2_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 11);
      }
    }

    function SimpleNumberComponent_div_6_div_2_i_feather_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 12);
      }
    }

    function SimpleNumberComponent_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimpleNumberComponent_div_6_div_2_i_feather_5_Template, 1, 0, "i-feather", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimpleNumberComponent_div_6_div_2_i_feather_6_Template, 1, 0, "i-feather", 10);

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

    function SimpleNumberComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleNumberComponent_div_6_ng_container_1_Template, 10, 10, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleNumberComponent_div_6_div_2_Template, 8, 6, "div", 7);

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

    var SimpleNumberComponent = /*#__PURE__*/function () {
      function SimpleNumberComponent(mainService, route, router) {
        var _this = this;

        _classCallCheck(this, SimpleNumberComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.color = 'red';
        this.width = 200;
        this.labelWidth = 0;
        this.fontSize = "13px";
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

          _this.getWidth();
        });
      }

      return _createClass(SimpleNumberComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWidth();
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
      }, {
        key: "getWidth",
        value: function getWidth() {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 1680 && this.screenWidth > 1440) {
            this.width = 200;
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1366) {
            this.width = 150;
          } else if (this.screenWidth <= 1366 && this.screenWidth > 1280) {
            this.width = 150;
          } else if (this.screenWidth <= 1280 && this.screenWidth > 1200) {
            this.width = 150;
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            this.width = 150;
          } else {
            this.width = 200;
          }
        }
      }]);
    }();

    SimpleNumberComponent.ɵfac = function SimpleNumberComponent_Factory(t) {
      return new (t || SimpleNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SimpleNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleNumberComponent,
      selectors: [["app-simple-number"]],
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
      consts: [[1, "base_number"], ["class", "help", 3, "style", 4, "ngIf"], [4, "ngIf"], [3, "style", 4, "ngIf"], ["class", "process", "style", "width: 100%;", 4, "ngIf"], [1, "help"], [1, "process", 2, "width", "100%"], ["style", "padding-top: 4px;", 4, "ngIf"], [2, "padding-top", "4px"], ["name", "arrow-down", "class", "down-icon", "style", "color: #505054;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #505054;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#505054"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#505054"]],
      template: function SimpleNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleNumberComponent_span_1_Template, 2, 3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleNumberComponent_span_3_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimpleNumberComponent_h4_4_Template, 3, 6, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimpleNumberComponent_span_5_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimpleNumberComponent_div_6_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.width, "px;");

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
      styles: [".orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n  color: #505054;\n  font-weight: bold;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 50px;\n  margin: 0px;\n  line-height: 80%;\n}\n.orlogo[_ngcontent-%COMP%]   .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #505054;\n  padding: 10px;\n  line-height: 110%;\n  margin-top: 20px;\n  text-transform: none;\n  max-width: 200px;\n}\n.base_number[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  color: #505054;\n  font-weight: bold;\n}\n.base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: inline-block;\n}\n.base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 36px;\n  margin: 0px;\n  line-height: 110%;\n}\n.base_number[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 25px;\n  border: 1px solid #505054;\n  padding: 5px;\n  line-height: 110%;\n  margin-top: 15px;\n  text-transform: none;\n  max-width: 180px;\n  position: relative;\n  min-height: 65px;\n}\n.arrow[_ngcontent-%COMP%] {\n  border: solid #333;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 2.5px;\n}\n.arrow-hr[_ngcontent-%COMP%] {\n  position: relative;\n}\n.down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n@media screen and (max-width: 1680px) {\n  .base_number[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 36px;\n    margin: 0px;\n    line-height: 110%;\n  }\n  .base_number[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 5px;\n    line-height: 110%;\n    margin-top: 5px !important;\n    text-transform: none;\n    max-width: 180px;\n    position: relative;\n    min-height: 65px;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .base_number[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    font-size: 12px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0px;\n    line-height: 110%;\n  }\n  .base_number[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 5px;\n    line-height: 110%;\n    margin-top: 5px !important;\n    text-transform: none;\n    max-width: 150px;\n    position: relative;\n    min-height: 48px;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .base_number[_ngcontent-%COMP%] {\n    color: #505054;\n    font-weight: bold;\n    font-size: 12px;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0px;\n    line-height: 80%;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 10px;\n    line-height: 110%;\n    margin-top: 20px;\n    text-transform: none;\n    max-width: 150px;\n    min-height: auto;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .base_number[_ngcontent-%COMP%] {\n    color: #505054;\n    font-weight: bold;\n    font-size: 11px;\n    width: 180px;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0px;\n    line-height: 80%;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 10px;\n    line-height: 110%;\n    margin-top: 20px;\n    text-transform: none;\n    max-width: 150px;\n    min-height: auto;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .base_number[_ngcontent-%COMP%] {\n    color: #505054;\n    font-weight: bold;\n    font-size: 11px;\n    width: 180px;\n  }\n  .base_number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .base_number[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .base_number[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0px;\n    line-height: 80%;\n  }\n  .base_number[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #505054;\n    padding: 5px;\n    line-height: 110%;\n    margin-top: 20px;\n    text-transform: none;\n    max-width: 120px;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9zaW1wbGUtbnVtYmVyL3NpbXBsZS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2ltcGxlLW51bWJlci9zaW1wbGUtbnVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0ksaUJBQUE7QUNBWjtBRENZO0VBQ0kscUJBQUE7QUNDaEI7QURDWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NoQjtBRENZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ2hCO0FEQ1k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7QURJQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNJLGlCQUFBO0FDRFI7QURFUTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNBWjtBREVRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQVo7QURFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FaO0FERVE7RUFDSSxnQkFBQTtBQ0FaO0FERVE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVo7QURHQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVFO0VBQ0ksa0JBQUE7QUNDTjtBRENFO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtBQ0VKO0FEQUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsY0FBQTtJQUNJLGlCQUFBO0VDR1Y7RURGVTtJQUNJLHlCQUFBO0lBQ0EscUJBQUE7RUNJZDtFREZVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDSWQ7RURGVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ0lkO0VERlU7SUFDSSxnQkFBQTtFQ0lkO0VERlU7SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDSWQ7QUFDRjtBREFBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0ksaUJBQUE7RUNFVjtFRERVO0lBQ0kseUJBQUE7SUFDQSxxQkFBQTtFQ0dkO0VERFU7SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNHZDtFRERVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDR2Q7RUREVTtJQUNJLGdCQUFBO0VDR2Q7RUREVTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLDBCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUNHZDtBQUNGO0FEQUE7RUFDSTtJQUNJLGNBQUE7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUNFVjtFRERVO0lBQ0kscUJBQUE7RUNHZDtFRERVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDR2Q7RUREVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ0dkO0VERFU7SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ0dkO0FBQ0Y7QURDQTtFQUNJO0lBQ0ksY0FBQTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUNDVjtFREFVO0lBQ0kscUJBQUE7RUNFZDtFREFVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDRWQ7RURBVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ0VkO0VEQVU7SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ0VkO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksY0FBQTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUNBVjtFRENVO0lBQ0kscUJBQUE7RUNDZDtFRENVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDQ2Q7RURDVTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ0NkO0VEQ1U7SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ0NkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpbXBsZS1udW1iZXIvc2ltcGxlLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmxvZ297XG4gICAgLmJhc2VfbnVtYmVye1xuICAgICAgICBwYWRkaW5nLXRvcDowcHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIH1cbn1cbi5iYXNlX251bWJlcntcbiAgICBwYWRkaW5nLXRvcDozMHB4O1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgfSAgIFxuICAgICAgICBsZWdlbmR7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTgwcHg7ICAgICAgICAgICAgXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2NXB4OyAgICAgICAgICAgIFxuICAgICAgICB9XG59XG4uYXJyb3cge1xuICAgIGJvcmRlcjogc29saWQgIzMzMztcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAyLjVweDtcbiAgfVxuICAuYXJyb3ctaHJ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmRvd24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gICAgLmJhc2VfbnVtYmVye1xuICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGxlZ2VuZHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxODBweDsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjVweDsgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYmFzZV9udW1iZXJ7XG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICBsZWdlbmR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgLmJhc2VfbnVtYmVye1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDphdXRvXG4gICAgICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAuYmFzZV9udW1iZXJ7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODAlO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OmF1dG9cbiAgICAgICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5iYXNlX251bWJlcntcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDphdXRvXG4gICAgICAgICAgICB9XG4gICAgfVxufSIsIi5vcmxvZ28gLmJhc2VfbnVtYmVyIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUwNTA1NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3Jsb2dvIC5iYXNlX251bWJlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm9ybG9nbyAuYmFzZV9udW1iZXIgLmhlbHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9ybG9nbyAuYmFzZV9udW1iZXIgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW46IDBweDtcbiAgbGluZS1oZWlnaHQ6IDgwJTtcbn1cbi5vcmxvZ28gLmJhc2VfbnVtYmVyIC5wcm9jZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5iYXNlX251bWJlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogIzUwNTA1NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmFzZV9udW1iZXIgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5iYXNlX251bWJlciAuaGVscCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmFzZV9udW1iZXIgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW46IDBweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG59XG4uYmFzZV9udW1iZXIgbGVnZW5kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5iYXNlX251bWJlciAucHJvY2VzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjVweDtcbn1cblxuLmFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCAjMzMzO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDIuNXB4O1xufVxuXG4uYXJyb3ctaHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gIC5iYXNlX251bWJlciB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIHNwYW4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iYXNlX251bWJlciAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5iYXNlX251bWJlciBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICB9XG4gIC5iYXNlX251bWJlciBsZWdlbmQge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJhc2VfbnVtYmVyIC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA2NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJhc2VfbnVtYmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIHNwYW4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iYXNlX251bWJlciAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5iYXNlX251bWJlciBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICB9XG4gIC5iYXNlX251bWJlciBsZWdlbmQge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJhc2VfbnVtYmVyIC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmJhc2VfbnVtYmVyIHtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuYmFzZV9udW1iZXIgLmhlbHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYmFzZV9udW1iZXIgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBsaW5lLWhlaWdodDogODAlO1xuICB9XG4gIC5iYXNlX251bWJlciAucHJvY2VzcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1NDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmJhc2VfbnVtYmVyIHtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5iYXNlX251bWJlciBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIC5oZWxwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIGg0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgfVxuICAuYmFzZV9udW1iZXIgLnByb2Nlc3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5iYXNlX251bWJlciB7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAuYmFzZV9udW1iZXIgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5iYXNlX251bWJlciAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5iYXNlX251bWJlciBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gIH1cbiAgLmJhc2VfbnVtYmVyIC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simple-number',
          templateUrl: './simple-number.component.html',
          styleUrls: ['./simple-number.component.scss']
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
  "./src/app/modules/simple-number/simple-number.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/simple-number/simple-number.module.ts ***!
    \***************************************************************/

  /*! exports provided: SimpleNumberModule */

  /***/
  function _src_app_modules_simpleNumber_simpleNumberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleNumberModule", function () {
      return SimpleNumberModule;
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


    var _simple_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./simple-number.component */
    "./src/app/modules/simple-number/simple-number.component.ts");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts");

    var SimpleNumberModule = /*#__PURE__*/_createClass(function SimpleNumberModule() {
      _classCallCheck(this, SimpleNumberModule);
    });

    SimpleNumberModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SimpleNumberModule
    });
    SimpleNumberModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SimpleNumberModule_Factory(t) {
        return new (t || SimpleNumberModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimpleNumberModule, {
        declarations: [_simple_number_component__WEBPACK_IMPORTED_MODULE_2__["SimpleNumberComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]],
        exports: [_simple_number_component__WEBPACK_IMPORTED_MODULE_2__["SimpleNumberComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleNumberModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_simple_number_component__WEBPACK_IMPORTED_MODULE_2__["SimpleNumberComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]],
          exports: [_simple_number_component__WEBPACK_IMPORTED_MODULE_2__["SimpleNumberComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~debt-debt-module~edaatgal-edaatgal-module~ndaatgal-ndaatgal-module~orlogo-orlogo-module~ulsi~53501564-es5.js.map