function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bodlogo-bodlogo-module"], {
  /***/
  "./src/app/budget/bodlogo/bodlogo.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/budget/bodlogo/bodlogo.component.ts ***!
    \*****************************************************/

  /*! exports provided: BodlogoComponent */

  /***/
  function _src_app_budget_bodlogo_bodlogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BodlogoComponent", function () {
      return BodlogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/constants */
    "./src/app/services/constants.ts");
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

    function BodlogoComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bodlogo_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r0.getColor(i_r2), ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bodlogo_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bodlogo_r1.description);
      }
    }

    var BodlogoComponent = /*#__PURE__*/function () {
      function BodlogoComponent(mainService, route, router) {
        var _this = this;

        _classCallCheck(this, BodlogoComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].bodlogo_colors;
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].category
        };
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this.setQueryParam(val.url.split('?')[1]);
            }

            _this.getBodlogo();
          }
        });
      }

      return _createClass(BodlogoComponent, [{
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
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getColor",
        value: function getColor(i) {
          return this.colors[i % 3];
        }
      }, {
        key: "getBodlogo",
        value: function getBodlogo() {
          var _this2 = this;

          this.bodlogoList = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_BOGLOGO + "?year=" + this.params["year"], true).then(function (result) {
            _this2.bodlogoList = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);
    }();

    BodlogoComponent.ɵfac = function BodlogoComponent_Factory(t) {
      return new (t || BodlogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    BodlogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BodlogoComponent,
      selectors: [["app-bodlogo"]],
      decls: 22,
      vars: 2,
      consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], [3, "showSelect"], [1, "budget-main1", "zarlaga"], [1, "title"], [1, "bodlogo"], [1, "row"], [1, "col-md-3"], ["src", "../../../assets/image/Arrow.svg", 1, "arrow"], ["src", "../../../assets/image/tsahim.PNG", 1, "arrow"], ["src", "../../../assets/image/iltod.PNG", 1, "arrow"], ["src", "../../../assets/image/urashig.PNG", 1, "arrow1"], [1, "lines"], ["class", "line", 4, "ngFor", "ngForOf"], [1, "line"], [1, "lcol1"], [1, "lcenter"], [1, "mid-line"], [1, "mid"], [1, "lcol2"]],
      template: function BodlogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u0431\u043E\u0434\u043B\u043E\u0433\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BodlogoComponent_div_21_Template, 12, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSelect", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bodlogoList);
        }
      },
      directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__["YearChangeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".budget-main1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 20px;\n}\n.budget-main1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n}\n.budget-content[_ngcontent-%COMP%]   .budget-top[_ngcontent-%COMP%]   .trapezoid[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.line[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n  min-height: 90px;\n  vertical-align: middle;\n  position: relative;\n}\n.line[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 3px;\n  position: relative;\n}\n.line[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%]:after {\n  height: 100%;\n  width: 3px;\n  background: #444e72;\n  content: \" \";\n}\n.line[_ngcontent-%COMP%]   .mid-line[_ngcontent-%COMP%] {\n  width: 5px;\n  height: calc(100% + 40px);\n  position: absolute;\n  left: 250px;\n  z-index: 100;\n  background: #444e72;\n  bottom: calc(50%);\n  border-left: 1px solid #fff;\n  border-right: 1px solid #fff;\n}\n.line[_ngcontent-%COMP%]:first-child   .mid-line[_ngcontent-%COMP%] {\n  width: 95px;\n  left: 159px;\n  z-index: 1;\n  border-top-right-radius: 50%;\n  background: no-repeat;\n  border-color: #444e72;\n  border-top: 3px solid #444e72;\n  border-right: 3px solid #444e72;\n  border-left: none;\n  bottom: calc(50% + 10px);\n}\n.lcol1[_ngcontent-%COMP%] {\n  float: left;\n  width: 250px;\n  color: #fff;\n  padding: 20px;\n  padding-right: 20px;\n  position: relative;\n  border-bottom-left-radius: 40px;\n  border-top-left-radius: 40px;\n  opacity: 0.9;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: right;\n  z-index: 11;\n}\n.lcol1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.lcol1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.lcol2[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  float: left;\n  background: #e5eaee;\n  padding: 20px;\n  border-bottom-right-radius: 40px;\n  border-top-right-radius: 40px;\n  padding-left: 50px;\n  font-size: 16px;\n}\n.lcol2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.lcol2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.lcenter[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #444e72;\n  position: absolute;\n  left: 243.5px;\n  border: 3px solid #fff;\n  top: calc(50% - 8px);\n  z-index: 101;\n}\n.arrow[_ngcontent-%COMP%] {\n  width: 140px;\n  display: block;\n  margin-bottom: 20px;\n  margin-left: 40px;\n  position: relative;\n}\n.arrow1[_ngcontent-%COMP%] {\n  width: 200px;\n  display: block;\n  margin-bottom: 20px;\n  margin-left: 40px;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 1366px) {\n  .lcenter[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #444e72;\n    position: absolute;\n    left: 219.9px;\n    border: 3px solid #fff;\n    top: calc(50% - 8px);\n    z-index: 101;\n  }\n\n  .line[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n    min-height: 90px;\n    vertical-align: middle;\n    position: relative;\n  }\n  .line[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 3px;\n    position: relative;\n  }\n  .line[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%]:after {\n    height: 100%;\n    width: 3px;\n    background: #444e72;\n    content: \" \";\n  }\n  .line[_ngcontent-%COMP%]   .mid-line[_ngcontent-%COMP%] {\n    width: 5px;\n    height: calc(100%);\n    position: absolute;\n    left: 225px;\n    z-index: 100;\n    background: #444e72;\n    bottom: calc(60%);\n    border-left: 1px solid #fff;\n    border-right: 1px solid #fff;\n  }\n  .line[_ngcontent-%COMP%]:first-child   .mid-line[_ngcontent-%COMP%] {\n    width: 75px;\n    left: 154px;\n    z-index: 1;\n    border-top-right-radius: 50%;\n    background: no-repeat;\n    border-color: #444e72;\n    border-top: 3.2px solid #444e72;\n    border-right: 3.2px solid #444e72;\n    border-left: none;\n    bottom: calc(50% + 10px);\n  }\n\n  .lcol2[_ngcontent-%COMP%] {\n    font-size: 13px;\n    width: calc(100% - 150px);\n    float: left;\n    background: #e5eaee;\n    padding: 20px;\n    border-bottom-right-radius: 40px;\n    border-top-right-radius: 40px;\n    padding-left: 50px;\n  }\n\n  .lcol1[_ngcontent-%COMP%] {\n    float: left;\n    width: 250px;\n    color: #fff;\n    vertical-align: middle;\n    padding: 20px;\n    padding-right: 20px;\n    position: relative;\n    border-bottom-left-radius: 40px;\n    border-top-left-radius: 40px;\n    opacity: 0.9;\n    text-transform: uppercase;\n    font-weight: 700;\n    text-align: right;\n  }\n\n  .arrow1[_ngcontent-%COMP%] {\n    width: 200px;\n    display: block;\n    margin-bottom: 20px;\n    margin-left: 0px;\n  }\n\n  .main-description[_ngcontent-%COMP%] {\n    padding: 30px 30px;\n  }\n  .main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    width: 40%;\n    float: right;\n    text-align: left;\n  }\n  .main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .lcenter[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #444e72;\n    position: absolute;\n    left: 142.9px;\n    border: 3px solid #fff;\n    top: calc(50% - 7px);\n    z-index: 101;\n  }\n\n  .lcol2[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .line[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n    min-height: 90px;\n    vertical-align: middle;\n    position: relative;\n  }\n  .line[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 3px;\n    position: relative;\n  }\n  .line[_ngcontent-%COMP%]   .mid[_ngcontent-%COMP%]:after {\n    height: 100%;\n    width: 3px;\n    background: #444e72;\n    content: \" \";\n  }\n  .line[_ngcontent-%COMP%]   .mid-line[_ngcontent-%COMP%] {\n    width: 5px;\n    height: calc(100%);\n    position: absolute;\n    left: 149px;\n    z-index: 100;\n    background: #444e72;\n    bottom: calc(60%);\n    border-left: 1px solid #fff;\n    border-right: 1px solid #fff;\n  }\n  .line[_ngcontent-%COMP%]:first-child   .mid-line[_ngcontent-%COMP%] {\n    width: 75px;\n    left: 78px;\n    z-index: 1;\n    border-top-right-radius: 50%;\n    background: no-repeat;\n    border-color: #444e72;\n    border-top: 3.2px solid #444e72;\n    border-right: 3.2px solid #444e72;\n    border-left: none;\n    bottom: calc(50% + 10px);\n  }\n\n  .lcol1[_ngcontent-%COMP%] {\n    float: left;\n    font-size: 12px;\n    width: 150px;\n    color: #fff;\n    vertical-align: middle;\n    padding: 20px;\n    padding-right: 20px;\n    position: relative;\n    border-bottom-left-radius: 40px;\n    border-top-left-radius: 40px;\n    opacity: 0.9;\n    text-transform: uppercase;\n    font-weight: 700;\n    text-align: right;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    width: 90px;\n    display: block;\n    margin-bottom: 20px;\n    margin-left: 0px;\n    position: relative;\n  }\n\n  .arrow1[_ngcontent-%COMP%] {\n    width: 130px;\n    display: block;\n    margin-bottom: 20px;\n    margin-left: 0px;\n  }\n\n  .main-description[_ngcontent-%COMP%] {\n    padding: 30px 30px;\n  }\n  .main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    width: 40%;\n    float: right;\n    text-align: left;\n  }\n  .main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L2JvZGxvZ28vYm9kbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVkZ2V0L2JvZGxvZ28vYm9kbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NaO0FESUE7RUFDSSxZQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREVJO0VBT0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ05SO0FERlE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0laO0FERUk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNBUjtBRElRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNGWjtBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNOSjtBRE9JO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTFI7QURNUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNK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O0lBQ0EsVUFBQTtJQUNBLDRCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLCtCQUFBO0lBQ0EsaUNBQUE7SUFDQSxpQkFBQTtJQUNBLHdCQUFBO0VDZmQ7O0VEc0JFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ25CTjs7RURxQkU7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ2xCTjs7RURxQkU7SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNsQk47O0VEcUJFO0lBQ0ksa0JBQUE7RUNsQk47RURtQk07SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ2pCVjtFRG1CTTtJQUNJLFdBQUE7RUNqQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC9ib2Rsb2dvL2JvZGxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVkZ2V0LW1haW4xe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuLmJ1ZGdldC1jb250ZW50IC5idWRnZXQtdG9wIC50cmFwZXpvaWR7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubGluZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAubWlke1xuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLm1pZC1saW5le1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDQwcHgpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDI1MHB4O1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgICAgIGJvdHRvbTpjYWxjKDUwJSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgXG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC5taWQtbGluZXtcbiAgICAgICAgICAgIHdpZHRoOiA5NXB4O1xuICAgICAgICAgICAgbGVmdDogMTU5cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQ0NGU3MjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNDQ0ZTcyO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzQ0NGU3MjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgYm90dG9tOiBjYWxjKDUwJSArIDEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuICAgIFxufVxuLmxjb2wxe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDBweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHotaW5kZXg6IDExO1xuICAgIGRpdntcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5sY29sMntcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNlNWVhZWU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpdntcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbi5sY2VudGVye1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzQ0NGU3MjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjQzLjVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIHRvcDpjYWxjKDUwJSAtIDhweCk7XG4gICAgei1pbmRleDogMTAxO1xuXG4gICBcbn1cbi5hcnJvd3tcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hcnJvdzF7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubWFpbi1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgcHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgLmxjZW50ZXJ7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ0NGU3MjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyMTkuOXB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICB0b3A6Y2FsYyg1MCUgLSA4cHgpO1xuICAgICAgICB6LWluZGV4OiAxMDE7XG4gICAgXG4gICAgICAgXG4gICAgfVxuICAgIC5saW5le1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbWluLWhlaWdodDogOTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAubWlke1xuICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0ZTcyO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAubWlkLWxpbmV7XG4gICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMjI1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0ZTcyO1xuICAgICAgICAgICAgYm90dG9tOmNhbGMoNjAlKTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgLm1pZC1saW5le1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1NHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDQ0ZTcyO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDMuMnB4IHNvbGlkICM0NDRlNzI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzLjJweCBzb2xpZCAjNDQ0ZTcyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYyg1MCUgKyAxMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAubGNvbDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNWVhZWU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIH1cbiBcbiAgICAubGNvbDF7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIC5hcnJvdzF7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuXG4gICAgLm1haW4tZGVzY3JpcHRpb257XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5sY2VudGVye1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTQyLjlweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgdG9wOmNhbGMoNTAlIC0gN3B4KTtcbiAgICAgICAgei1pbmRleDogMTAxO1xuICAgIFxuICAgICAgIFxuICAgIH1cbiAgICAubGNvbDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmxpbmV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5taWR7XG4gICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5taWQtbGluZXtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxNDlweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgICAgICAgICBib3R0b206Y2FsYyg2MCUpO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAubWlkLWxpbmV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNzhweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQ0NGU3MjtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAzLjJweCBzb2xpZCAjNDQ0ZTcyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMy4ycHggc29saWQgIzQ0NGU3MjtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoNTAlICsgMTBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLmxjb2wxe1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5hcnJvd3tcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5hcnJvdzF7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuXG4gICAgLm1haW4tZGVzY3JpcHRpb257XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5idWRnZXQtbWFpbjEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbn1cbi5idWRnZXQtbWFpbjEgLnRpdGxlIGgzIHtcbiAgY29sb3I6ICMwMDgxZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJ1ZGdldC1jb250ZW50IC5idWRnZXQtdG9wIC50cmFwZXpvaWQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saW5lIC5taWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saW5lIC5taWQ6YWZ0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuLmxpbmUgLm1pZC1saW5lIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0MHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNTBweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiAjNDQ0ZTcyO1xuICBib3R0b206IGNhbGMoNTAlKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xufVxuLmxpbmU6Zmlyc3QtY2hpbGQgLm1pZC1saW5lIHtcbiAgd2lkdGg6IDk1cHg7XG4gIGxlZnQ6IDE1OXB4O1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gIGJvcmRlci1jb2xvcjogIzQ0NGU3MjtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM0NDRlNzI7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM0NDRlNzI7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3R0b206IGNhbGMoNTAlICsgMTBweCk7XG59XG5cbi5sY29sMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHotaW5kZXg6IDExO1xufVxuLmxjb2wxIGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxjb2wxIGRpdiBzcGFuIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxjb2wyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNlNWVhZWU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGNvbDIgZGl2IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubGNvbDIgZGl2IHNwYW4ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGNlbnRlciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzQ0NGU3MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNDMuNXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICB0b3A6IGNhbGMoNTAlIC0gOHB4KTtcbiAgei1pbmRleDogMTAxO1xufVxuXG4uYXJyb3cge1xuICB3aWR0aDogMTQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXJyb3cxIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5tYWluLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLm1haW4tZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmxjZW50ZXIge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzQ0NGU3MjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjE5LjlweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIHRvcDogY2FsYyg1MCUgLSA4cHgpO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgfVxuXG4gIC5saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubGluZSAubWlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmxpbmUgLm1pZDphZnRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzQ0NGU3MjtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgfVxuICAubGluZSAubWlkLWxpbmUge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMjVweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogIzQ0NGU3MjtcbiAgICBib3R0b206IGNhbGMoNjAlKTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgfVxuICAubGluZTpmaXJzdC1jaGlsZCAubWlkLWxpbmUge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGxlZnQ6IDE1NHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ0ZTcyO1xuICAgIGJvcmRlci10b3A6IDMuMnB4IHNvbGlkICM0NDRlNzI7XG4gICAgYm9yZGVyLXJpZ2h0OiAzLjJweCBzb2xpZCAjNDQ0ZTcyO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvdHRvbTogY2FsYyg1MCUgKyAxMHB4KTtcbiAgfVxuXG4gIC5sY29sMiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI2U1ZWFlZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgfVxuXG4gIC5sY29sMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5hcnJvdzEge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAubWFpbi1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICB9XG4gIC5tYWluLWRlc2NyaXB0aW9uIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5tYWluLWRlc2NyaXB0aW9uIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubGNlbnRlciB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0ZTcyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNDIuOXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDdweCk7XG4gICAgei1pbmRleDogMTAxO1xuICB9XG5cbiAgLmxjb2wyIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cblxuICAubGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmxpbmUgLm1pZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5saW5lIC5taWQ6YWZ0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgY29udGVudDogXCIgXCI7XG4gIH1cbiAgLmxpbmUgLm1pZC1saW5lIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTQ5cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQ6ICM0NDRlNzI7XG4gICAgYm90dG9tOiBjYWxjKDYwJSk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIH1cbiAgLmxpbmU6Zmlyc3QtY2hpbGQgLm1pZC1saW5lIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBsZWZ0OiA3OHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDQ0ZTcyO1xuICAgIGJvcmRlci10b3A6IDMuMnB4IHNvbGlkICM0NDRlNzI7XG4gICAgYm9yZGVyLXJpZ2h0OiAzLjJweCBzb2xpZCAjNDQ0ZTcyO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvdHRvbTogY2FsYyg1MCUgKyAxMHB4KTtcbiAgfVxuXG4gIC5sY29sMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAuYXJyb3cge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuYXJyb3cxIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLm1haW4tZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgfVxuICAubWFpbi1kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAubWFpbi1kZXNjcmlwdGlvbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodlogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bodlogo',
          templateUrl: './bodlogo.component.html',
          styleUrls: ['./bodlogo.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/budget/bodlogo/bodlogo.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/budget/bodlogo/bodlogo.module.ts ***!
    \**************************************************/

  /*! exports provided: BodlogoModule */

  /***/
  function _src_app_budget_bodlogo_bodlogoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BodlogoModule", function () {
      return BodlogoModule;
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


    var _bodlogo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bodlogo.component */
    "./src/app/budget/bodlogo/bodlogo.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/year-change/year-change.module */
    "./src/app/modules/year-change/year-change.module.ts");

    var routes = [{
      path: '',
      component: _bodlogo_component__WEBPACK_IMPORTED_MODULE_2__["BodlogoComponent"]
    }];

    var BodlogoModule = /*#__PURE__*/_createClass(function BodlogoModule() {
      _classCallCheck(this, BodlogoModule);
    });

    BodlogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BodlogoModule
    });
    BodlogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BodlogoModule_Factory(t) {
        return new (t || BodlogoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BodlogoModule, {
        declarations: [_bodlogo_component__WEBPACK_IMPORTED_MODULE_2__["BodlogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodlogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_bodlogo_component__WEBPACK_IMPORTED_MODULE_2__["BodlogoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=bodlogo-bodlogo-module-es5.js.map