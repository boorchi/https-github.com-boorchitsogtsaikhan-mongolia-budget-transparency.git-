function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["debt-debt-module"], {
  /***/
  "./src/app/budget/debt/debt.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/budget/debt/debt.component.ts ***!
    \***********************************************/

  /*! exports provided: DebtComponent */

  /***/
  function _src_app_budget_debt_debtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DebtComponent", function () {
      return DebtComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../assets/canvasjs.min */
    "./src/assets/canvasjs.min.js");
    /* harmony import */


    var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/constants */
    "./src/app/services/constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modules/year-change/year-change.component */
    "./src/app/modules/year-change/year-change.component.ts");
    /* harmony import */


    var _modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modules/carousel/carousel.component */
    "./src/app/modules/carousel/carousel.component.ts");
    /* harmony import */


    var _modules_description_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modules/description/description.component */
    "./src/app/modules/description/description.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_charts_charts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../modules/charts/charts.component */
    "./src/app/modules/charts/charts.component.ts");

    function DebtComponent_h3_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.selectedyear, " \u043E\u043D\u044B ", ctx_r0.selectedname, "");
      }
    }

    function DebtComponent_h3_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0418\u0419\u0422 \u0422\u04E8\u041B\u0411\u04E8\u0420\u0418\u0419\u041D \u0414\u042D\u041B\u0413\u042D\u0420\u042D\u041D\u0413\u04AE\u0419\u0413 \u0433\u0440\u0430\u0444\u0438\u043A \u0414\u042D\u042D\u0420 \u0434\u0430\u0440\u0436 \u0445\u0430\u0440\u043D\u0430 \u0423\u0423");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DebtComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r6.codeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r2.colors[i_r7], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r6.perfoValue);
      }
    }

    function DebtComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "budget-charts", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "multi")("series", ctx_r3.paymentIndex1)("labels", ctx_r3.paymentIndex1Years)("title", "\u0425\u04AF\u04AF\u0433\u0438\u0439\u043D \u0437\u0430\u0440\u0434\u043B\u044B\u043D \u0442\u04E9\u0441\u04E9\u0432\u0442 \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0434\u0430\u0440\u0430\u043C\u0442");
      }
    }

    function DebtComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "budget-charts", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "multi-line")("series", ctx_r4.paymentIndex2)("labels", ctx_r4.paymentIndex2Years)("title", "\u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0440\u044B\u043D \u04E9\u0440\u0438\u0439\u043D \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0430\u0433\u0442 \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0434\u0430\u0440\u0430\u043C\u0442:\n                    \u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0440\u044B\u043D \u04E9\u0440\u0438\u0439\u043D \u04E9\u043D\u04E9\u04E9\u0433\u0438\u0439\u043D \u04AF\u043D\u044D \u0446\u044D\u043D\u044D\u044D\u0440\u0445 \u04AF\u043B\u0434\u044D\u0433\u0434\u043B\u0438\u0439\u043D \u0414\u041D\u0411-\u0434 \u044D\u0437\u043B\u044D\u0445 \u0445\u0443\u0432\u044C \n                    ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "revert": a0
      };
    };

    function DebtComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0441\u0430\u044F \u0430\u043C.\u0434\u043E\u043B\u043B\u0430\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041A\u0443\u043F\u043E\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u042D\u0440\u0433\u044D\u043D \u0442\u04E9\u043B\u04E9\u0433\u0434\u04E9\u0445 \u043E\u0433\u043D\u043E\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bnd_r8 = ctx.$implicit;
        var i_r9 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, (i_r9 + 1) % 4 == 0 || (i_r9 + 4) % 4 == 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bnd_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, bnd_r8.bondValue));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bnd_r8.coupon, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bnd_r8.date, "");
      }
    }

    var DebtComponent = /*#__PURE__*/function () {
      function DebtComponent(mainService, route, router) {
        var _this = this;

        _classCallCheck(this, DebtComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.slideData = {
          type: 3,
          datas: [{
            name: "Зорилт 1",
            text: " Засгийн газрын гадаад,	дотоод үнэт цаас, зээлийн төлбөрүүдийг эдийн засаг, төсөвт дарамт учруулахгүйгээр төлж дахин санхүүжилтийн эрсдэлийг бууруулна."
          }, {
            name: "Зорилт 2",
            text: " Гадаад зээллэгээр хэрэгжүүлэх төсөл хөтөлбөрүүдэд зардал, үр өгөөжийн тооцооллыг хийж, зөвхөн үр ашигтай төслүүдийг санхүүжүүлэх зарчмыг баримталж, тэдгээрийн зарцуулалтад тавих хяналтыг сайжруулна."
          }, {
            name: "Зорилт 3",
            text: " Болзошгүй өр төлбөрийн төсөвт үзүүлэх нөлөөллийг үнэлэх, болзошгүй эрсдэлээс сэргийлэх тогтолцоог хөгжүүлнэ."
          }, {
            name: "Зорилт 4",
            text: " Орчин үеийн технологийн дэвшлийг ашигласан Засгийн газрын үнэт цаасны арилжааны дэд бүтцийг бүрдүүлнэ. Гадаад, дотоодын хөрөнгө оруулагчдын арилжаанд оролцох боломжийг нэмэгдүүлж, зах зээлийн нээлттэй, өрсөлдөөнт, хүртээмжтэй байдлыг хангаж, Засгийн газрын үнэт цаасны хөрвөх чадварыг сайжруулна."
          }, {
            name: "Зорилт 5",
            text: " Засгийн газрын өрийн удирдлагын тогтолцоог сайжруулж, орчин үеийн чиг хандлагад нийцүүлэх."
          }]
        };
        this.debtList = [];
        this.debtDeitalList = [];
        this.debt = [];
        this.bond = [];
        this.params = {
          year: _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].year,
          category: _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].category
        };
        this.colors = _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].colorsDebit;
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: false,
          navSpeed: 700,
          navText: ['', ''],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 3
            }
          },
          nav: true
        };
        this.paymentIndex1 = [];
        this.paymentIndex1Years = [];
        this.paymentIndex2 = [];
        this.paymentIndex2Years = [];
        this.isIndex1Loaded = false;
        this.isIndex2Loaded = false;
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this.setQueryParam(val.url.split('?')[1]);
            }

            _this.getBond();

            _this.getDebt();

            _this.showChart();

            _this.showChart2();

            _this.getDebtPaymentIndex();
          }
        });
      }

      return _createClass(DebtComponent, [{
        key: "setQueryParam",
        value: function setQueryParam(param) {
          var query = {};
          var params = param.split("&");
          params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
          }, this);
          this.getChanges(param);
        }
      }, {
        key: "getChanges",
        value: function getChanges(param) {
          var old = this.params["year"];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getReleaseDate("Sheet13");
        }
      }, {
        key: "getBond",
        value: function getBond() {
          var _this2 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_BOND, null, true).then(function (result) {
            _this2.bond = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getDebt",
        value: function getDebt() {
          var _this3 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_MAIN + "?year=" + this.params["year"], null, true).then(function (result) {
            _this3.debt = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showChart",
        value: function showChart() {
          var _this4 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_MAIN + "?year=" + this.params["year"], null, true).then(function (result) {
            var datas = [];
            var types = {};
            result.forEach(function (element, index, array) {
              if (element.typeName in types) {
                types[element.typeName].push({
                  y: element.approvedValue,
                  label: element.year
                });
              } else {
                types[element.typeName] = [];
                types[element.typeName].push({
                  y: element.approvedValue,
                  label: element.year
                });
              }
            });
            console.log(types);
            var i = 0;

            for (var _i = 0, _Object$entries = Object.entries(types); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              var val = {
                type: "stackedColumn",
                indexLabelFontColor: "#fff",
                showInLegend: true,
                indexLabel: "{y}",
                name: key,
                color: _this4.colors[i],
                dataPoints: value,
                dataPoints1: value
              };
              datas.push(val);
              i++;

              if (i === Object.entries(types).length) {
                _this4.render(datas);
              }
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showChart2",
        value: function showChart2() {
          var _this5 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_ITEM, null, true).then(function (result) {
            var datas2 = [];
            var debts = _this5;
            var types = {};
            result.forEach(function (element, index, array) {
              // var value = {    
              //   type: "stackedColumn",   
              //   indexLabelFontColor: "#fff",
              //   indexLabel: "{y}",
              //   elementType: element.type,
              //   name: element.typeName,
              //   color: this.colors[index], 
              //   dataPoints: [{ y: element.perfoValue, label: element.year, click: onClick }]
              // }  
              if (element.typeName in types) {
                types[element.typeName].push({
                  y: element.perfoValue,
                  label: element.year,
                  index: index,
                  type: element.type
                });
              } else {
                types[element.typeName] = [];
                types[element.typeName].push({
                  y: element.perfoValue,
                  label: element.year,
                  index: index,
                  type: element.type
                });
              }
            });
            var i = 0;

            for (var _i2 = 0, _Object$entries2 = Object.entries(types); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                  key = _Object$entries2$_i[0],
                  value = _Object$entries2$_i[1];

              var val = {
                type: "stackedColumn",
                indexLabelFontColor: "#fff",
                indexLabel: "{y}",
                name: key,
                color: _this5.colors[i],
                dataPoints: value,
                click: onClick
              };
              datas2.push(val);
              i++;

              if (i === Object.entries(types).length) {
                _this5.render2(datas2);
              }
            }

            function onClick(e) {
              this.type = e.dataPoint.type;
              this.year = e.dataPoint.label;
              this.name = e.dataSeries.name;
              debts.getDebtItemDetail(this.type, this.year, this.name);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getDebtItemDetail",
        value: function getDebtItemDetail(type, year, name) {
          var _this6 = this;

          this.selectedtype = type;
          this.selectedname = name;
          this.selectedyear = year;
          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_DETAIL + "?year=" + year + "&type=" + type, null, true).then(function (result) {
            _this6.debtDeitalList = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getDebtPaymentIndex",
        value: function getDebtPaymentIndex() {
          var _this7 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_PAYMENT_INDEX + "?type=HZ10", null, true).then(function (result) {
            var datas = Object.keys(result).map(function (key) {
              return [key, result[key]];
            });
            datas.forEach(function (element, index, array) {
              if (_this7.paymentIndex1Years.length == 0) {
                _this7.paymentIndex1.push({
                  name: element[1][0]["codeName"],
                  type: "column",
                  data: []
                });

                _this7.paymentIndex1.push({
                  name: element[1][1]["codeName"] + " %",
                  type: "line",
                  data: []
                });

                _this7.paymentIndex1.push({
                  name: element[1][2]["codeName"] + " %",
                  type: "line",
                  data: []
                });
              }

              _this7.paymentIndex1[0]["data"].push(element[1][0]["perfoValue"]);

              _this7.paymentIndex1[1]["data"].push(element[1][1]["perfoValue"]);

              _this7.paymentIndex1[2]["data"].push(element[1][2]["perfoValue"]);

              _this7.paymentIndex1Years.push(parseInt(element[0]));
            });
            _this7.isIndex1Loaded = true;
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_DEBT_PAYMENT_INDEX + "?type=UD10", null, true).then(function (result) {
            var datas = Object.keys(result).map(function (key) {
              return [key, result[key]];
            });
            datas.forEach(function (element, index, array) {
              if (_this7.paymentIndex2Years.length == 0) {
                _this7.paymentIndex2.push({
                  name: element[1][0]["codeName"],
                  type: "line",
                  data: []
                });

                _this7.paymentIndex2.push({
                  name: element[1][1]["codeName"],
                  type: "line",
                  data: []
                });

                _this7.paymentIndex2.push({
                  name: element[1][2]["codeName"],
                  type: "line",
                  data: []
                });
              }

              _this7.paymentIndex2[0]["data"].push(element[1][0]["perfoValue"]);

              _this7.paymentIndex2[1]["data"].push(element[1][1]["perfoValue"]);

              _this7.paymentIndex2[2]["data"].push(element[1][2]["perfoValue"]);

              _this7.paymentIndex2Years.push(parseInt(element[0]));
            });
            _this7.isIndex2Loaded = true;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "render",
        value: function render(datas) {
          console.log(datas);
          var tooltip = this;
          var chart = new _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_1__["Chart"]("chartContainer", {
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
              interval: 1
            },
            toolTip: {
              shared: true,
              content: tooltip.toolTipContent
            },
            dataPointMinHeight: 450,
            data: datas
          });
          var minValue = 3000;
          var data = chart.options.data;

          for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].dataPoints.length; j++) {
              data[i].dataPoints[j]["tLabel"] = data[i].dataPoints[j].y;

              if (data[i].dataPoints[j].y < 2000) {
                var p = data[i].dataPoints[j].y;
                data[i].dataPoints[j].y = minValue;
                data[i].dataPoints[j].indexLabel = p + ""; // data[i].dataPoints[j].toolTipContent = "{name}: " + p;        
              }
            }
          }

          chart.render();
        }
      }, {
        key: "toolTipContent",
        value: function toolTipContent(e) {
          var str = "";
          var total = 0;
          var str2, str3;

          for (var i = 0; i < e.entries.length; i++) {
            var str1 = "<span style= \"color:" + e.entries[i].dataSeries.color + "\"> " + e.entries[i].dataSeries.name + "</span>: <strong>" + e.entries[i].dataPoint.tLabel + "</strong><br/>";
            total = e.entries[i].dataPoint.tLabel + total;
            str = str.concat(str1);
          }

          str2 = "";
          total = Math.round(total * 100) / 100;
          str3 = "<span>Нийт:</span><strong> " + total + "</strong><br/>";
          return str2.concat(str).concat(str3);
        }
      }, {
        key: "render2",
        value: function render2(datas2) {
          var chart = new _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_1__["Chart"]("chartContainer2", {
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
            toolTip: {
              content: "{name}: {y}"
            },
            data: datas2
          });
          chart.render();
        }
      }, {
        key: "getReleaseDate",
        value: function getReleaseDate(code) {
          var _this8 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then(function (result) {
            // this.releaseDate = result;
            _this8.updateDate = result[0].updateDate;
            _this8.description = result[0].description;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);
    }();

    DebtComponent.ɵfac = function DebtComponent_Factory(t) {
      return new (t || DebtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    DebtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DebtComponent,
      selectors: [["app-debt"]],
      inputs: {
        options: "options"
      },
      decls: 56,
      vars: 9,
      consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], [1, "budget-main"], [1, "last_updated"], [1, "title"], [1, "row"], [1, "col-md-3"], [1, "debt-img"], ["src", "../../assets/image/suld.png"], [1, "col-md-6", 2, "vertical-align", "middle", "display", "table-cell"], [1, "debt-text", "center"], ["src", "../../assets/image/man.PNG"], [1, "slod1"], [3, "slideData"], [3, "description"], [1, "budget-block"], [1, "block-container"], ["id", "chartContainer", 2, "height", "370px"], [1, "col-md-8"], ["id", "chartContainer2", 2, "height", "370px"], [1, "col-md-4"], [1, "item-debts"], [4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "col-md-6", 4, "ngIf"], [1, "header"], [1, "row", "bond-outer"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "item-debt"], [1, "item-debt-text"], [1, "item-debt-number"], [1, "tugrug"], [1, "col-md-6"], [3, "chartType", "series", "labels", "title"], [1, "debt-bond", 3, "ngClass"], [1, "debt-bond-item"], [1, "col-md-4", "left"], [1, "amdol"], [1, "col-md-3", "left"], ["src", "../../assets/image/date.png", "width", "40", 1, "reverse"], [1, "col-md-5", "left"], ["src", "../../assets/image/coupon.PNG", "width", "25"]],
      template: function DebtComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0440\u044B\u043D \u04E9\u0440\u0438\u0439\u043D \u0443\u0434\u0438\u0440\u0434\u043B\u0430\u0433\u044B\u043D 2019-2020 \u043E\u043D\u044B \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041C\u043E\u043D\u0433\u043E\u043B \u0423\u043B\u0441\u044B\u043D 2020 \u043E\u043D\u044B \u043D\u044D\u0433\u0434\u0441\u044D\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u044D\u043D\u0446\u0432\u044D\u0440\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u0442\u044D\u043D\u0446\u044D\u043B \u043D\u044C -2,074.7 \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 \u0431\u0430\u0439\u0433\u0430\u0430\u0433\u0430\u0430\u0441 \u0433\u0430\u0434\u0430\u0430\u0434 \u0437\u044D\u044D\u043B\u0438\u0439\u043D \u0430\u0448\u0438\u0433\u043B\u0430\u043B\u0442\u044B\u043D 1,196.3 \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 \u043D\u044C \u044D\u0445 \u04AF\u04AF\u0441\u0432\u044D\u0440\u0442\u044D\u0439 \u0430\u043B\u0434\u0430\u0433\u0434\u0430\u043B \u044E\u043C. \u041C\u04E9\u043D \u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0440\u044B\u043D \u0442\u0443\u0441\u0433\u0430\u0439 \u0441\u0430\u043D\u0433\u0438\u0439\u043D \u0442\u0443\u0445\u0430\u0439 \u0445\u0443\u0443\u043B\u0438\u0439\u043D \u0434\u0430\u0433\u0443\u0443 \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0436\u0443\u0443\u043B\u0430\u043B\u0442\u044B\u043D \u0441\u0430\u043D\u0433\u0430\u0430\u0441 \u043D\u0438\u0439\u0442 478.8 \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433\u0438\u0439\u0433 \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0430\u043B\u0434\u0430\u0433\u0434\u043B\u044B\u0433 \u043D\u04E9\u0445\u04E9\u0445\u04E9\u0434 \u0430\u0448\u0438\u0433\u043B\u0430\u0445\u0430\u0430\u0440 \u0442\u0443\u0441\u0433\u0430\u0441\u0430\u043D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "module-carousel", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "module-description", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041D\u0438\u0439\u0442 \u04E9\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041D\u0438\u0439\u0442 \u0442\u04E9\u043B\u0431\u04E9\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DebtComponent_h3_38_Template, 2, 2, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DebtComponent_h3_39_Template, 2, 0, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DebtComponent_div_40_Template, 10, 5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u04E8\u0440\u0438\u0439\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DebtComponent_div_46_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DebtComponent_div_47_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0418\u0440\u044D\u0445 \u043E\u043D\u0443\u0443\u0434\u0430\u0434 \u0442\u04E9\u043B\u04E9\u0433\u0434\u04E9\u0445 \u0430\u0440\u0438\u043B\u0436\u0430\u0430\u043D\u044B \u043D\u04E9\u0445\u0446\u04E9\u043B\u0442\u044D\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u0442\u043E\u043C\u043E\u043E\u0445\u043E\u043D \u0433\u0430\u0434\u0430\u0430\u0434 \u0442\u04E9\u043B\u0431\u04E9\u0440\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DebtComponent_div_55_Template, 28, 9, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ", ctx.updateDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slideData", ctx.slideData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedyear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedyear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.debtDeitalList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIndex1Loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIndex2Loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bond);
        }
      },
      directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_5__["YearChangeComponent"], _modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _modules_charts_charts_component__WEBPACK_IMPORTED_MODULE_9__["ChartsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]],
      styles: [".budget-main[_ngcontent-%COMP%] {\n  background-image: url('has.JPG');\n  padding: 30px 20px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 700;\n}\n.slod1[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  width: 90%;\n  margin: auto;\n}\n.title[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 50px;\n}\n.debt-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 160px;\n}\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 10px;\n}\n.debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.debt-item[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 5px;\n  color: #fff;\n  border-right: 1px solid #fff;\n  margin-bottom: 30px;\n  text-align: left;\n}\n.debt-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffcd08;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n#chartContainer[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.item-debts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ff9f43;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #eee;\n  border-radius: 40px;\n  display: flex;\n  margin-bottom: 30px;\n  width: 480px;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%] {\n  width: 40%;\n  float: left;\n  text-align: right;\n  display: table-cell;\n  padding-left: 50px;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 15px;\n  color: #737373;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%] {\n  width: 60%;\n  text-align: center;\n  float: left;\n  display: table-cell;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%] {\n  color: #ffcd08;\n  font-size: 30px;\n  font-weight: 800;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug1[_ngcontent-%COMP%] {\n  color: #56c3dc;\n  font-size: 30px;\n  font-weight: 800;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug2[_ngcontent-%COMP%] {\n  color: #795446;\n  font-size: 30px;\n  font-weight: 800;\n}\n.item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #737373;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\nth[_ngcontent-%COMP%] {\n  font-weight: 400;\n  width: 150px;\n}\n.tg-0lax[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ea5455;\n}\n.debt-bond.revert[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.debt-bond[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  width: 100%;\n  height: 200px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  height: 93px;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  height: 93px;\n  padding-left: 40px;\n  position: relative;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .amdol[_ngcontent-%COMP%] {\n  color: #ea5455;\n  font-size: 32px;\n  display: block;\n  font-weight: 700;\n  text-align: center;\n  float: left;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img.reverse[_ngcontent-%COMP%] {\n  left: -5px;\n  transform: rotate(45deg);\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  display: table-cell;\n  vertical-align: bottom;\n  height: 100%;\n  padding-bottom: 1em;\n}\n.debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: none;\n  font-size: 14px;\n}\n.debt-bond-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 40px;\n  padding-right: 20px;\n  text-align: left;\n  font-weight: 700;\n  color: #505054;\n  font-size: 24px;\n  margin: 0px;\n}\n.debt-bond-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #505054;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 1680px) {\n  .budget-main[_ngcontent-%COMP%] {\n    background-image: url('has.JPG');\n    background-repeat: repeat-y;\n    padding: 30px 20px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n}\n@media screen and (max-width: 1536px) {\n  .budget-main[_ngcontent-%COMP%] {\n    background-image: url('has.JPG');\n    background-repeat: repeat-y;\n    padding: 30px 20px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .slod1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    width: 90%;\n    margin: auto;\n  }\n\n  .debt-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width: 100px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 10px;\n    font-size: 12px;\n  }\n\n  .item-debts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #ff9f43;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #eee;\n    border-radius: 40px;\n    display: flex;\n    margin-bottom: 30px;\n    width: 480px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%] {\n    width: 40%;\n    float: left;\n    text-align: right;\n    display: table-cell;\n    padding-left: 10px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 10px;\n    color: #737373;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: center;\n    float: left;\n    display: table-cell;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%] {\n    color: #ffcd08;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug1[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug2[_ngcontent-%COMP%] {\n    color: #795446;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: #737373;\n  }\n\n  .debt-bond[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    height: 93px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: bottom;\n    height: 93px;\n    padding-left: 10px;\n    position: relative;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .amdol[_ngcontent-%COMP%] {\n    color: #ea5455;\n    font-size: 28px;\n    display: block;\n    font-weight: 700;\n    text-align: center;\n    float: left;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -20px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img.reverse[_ngcontent-%COMP%] {\n    left: -35px;\n    transform: rotate(45deg);\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: bottom;\n    height: 100%;\n    padding-bottom: 1em;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 500;\n    text-transform: none;\n    font-size: 14px;\n  }\n\n  .debt-bond-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: left;\n    font-weight: 700;\n    color: #505054;\n    font-size: 22px;\n    margin: 0px;\n  }\n  .debt-bond-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #505054;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .budget-main[_ngcontent-%COMP%] {\n    background-image: url('has.JPG');\n    background-repeat: repeat-y;\n    padding: 30px 20px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .slod1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    width: 90%;\n    margin: auto;\n  }\n\n  .debt-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width: 100px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 10px;\n    font-size: 12px;\n  }\n\n  .item-debts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #ff9f43;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #eee;\n    border-radius: 40px;\n    display: flex;\n    margin-bottom: 30px;\n    width: 480px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%] {\n    width: 40%;\n    float: left;\n    text-align: right;\n    display: table-cell;\n    padding-left: 10px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 10px;\n    color: #737373;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: center;\n    float: left;\n    display: table-cell;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%] {\n    color: #ffcd08;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug1[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug2[_ngcontent-%COMP%] {\n    color: #795446;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: #737373;\n  }\n\n  .debt-bond[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    height: 93px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: bottom;\n    height: 93px;\n    padding-left: 10px;\n    position: relative;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .amdol[_ngcontent-%COMP%] {\n    color: #ea5455;\n    font-size: 28px;\n    display: block;\n    font-weight: 700;\n    text-align: center;\n    float: left;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -20px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img.reverse[_ngcontent-%COMP%] {\n    left: -35px;\n    transform: rotate(45deg);\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: bottom;\n    height: 100%;\n    padding-bottom: 1em;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 500;\n    text-transform: none;\n    font-size: 14px;\n  }\n\n  .debt-bond-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: left;\n    font-weight: 700;\n    color: #505054;\n    font-size: 22px;\n    margin: 0px;\n  }\n  .debt-bond-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #505054;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .budget-main[_ngcontent-%COMP%] {\n    background-image: url('has.JPG');\n    background-repeat: repeat-y;\n    padding: 30px 20px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .slod1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    width: 90%;\n    margin: auto;\n  }\n\n  .debt-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width: 100px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 10px;\n    font-size: 12px;\n  }\n\n  .item-debts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #ff9f43;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #eee;\n    border-radius: 40px;\n    display: flex;\n    margin-bottom: 30px;\n    width: 480px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%] {\n    width: 40%;\n    float: left;\n    text-align: right;\n    display: table-cell;\n    padding-left: 10px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 10px;\n    color: #737373;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: center;\n    float: left;\n    display: table-cell;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%] {\n    color: #ffcd08;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug1[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug2[_ngcontent-%COMP%] {\n    color: #795446;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: #737373;\n  }\n\n  .debt-bond[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    height: 93px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: bottom;\n    height: 93px;\n    padding-left: 10px;\n    position: relative;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .amdol[_ngcontent-%COMP%] {\n    color: #ea5455;\n    font-size: 28px;\n    display: block;\n    font-weight: 700;\n    text-align: center;\n    float: left;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -20px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img.reverse[_ngcontent-%COMP%] {\n    left: -35px;\n    transform: rotate(45deg);\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: bottom;\n    height: 100%;\n    padding-bottom: 1em;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 500;\n    text-transform: none;\n    font-size: 14px;\n  }\n\n  .debt-bond-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: left;\n    font-weight: 700;\n    color: #505054;\n    font-size: 22px;\n    margin: 0px;\n  }\n  .debt-bond-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #505054;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .budget-main[_ngcontent-%COMP%] {\n    background-image: url('has.JPG');\n    background-repeat: repeat-y;\n    padding: 30px 20px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .slod1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    width: 90%;\n    margin: auto;\n  }\n\n  .debt-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width: 100px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 10px;\n    font-size: 12px;\n  }\n\n  .item-debts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #ff9f43;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #eee;\n    border-radius: 40px;\n    display: flex;\n    margin-bottom: 30px;\n    width: 480px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%] {\n    width: 40%;\n    float: left;\n    text-align: right;\n    display: table-cell;\n    padding-left: 10px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 10px;\n    color: #737373;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: center;\n    float: left;\n    display: table-cell;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%] {\n    color: #ffcd08;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug1[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug2[_ngcontent-%COMP%] {\n    color: #795446;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: #737373;\n  }\n\n  .debt-bond[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    height: 93px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: bottom;\n    height: 93px;\n    padding-left: 10px;\n    position: relative;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .amdol[_ngcontent-%COMP%] {\n    color: #ea5455;\n    font-size: 28px;\n    display: block;\n    font-weight: 700;\n    text-align: center;\n    float: left;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -20px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img.reverse[_ngcontent-%COMP%] {\n    left: -35px;\n    transform: rotate(45deg);\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: bottom;\n    height: 100%;\n    padding-bottom: 1em;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 500;\n    text-transform: none;\n    font-size: 14px;\n  }\n\n  .debt-bond-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: left;\n    font-weight: 700;\n    color: #505054;\n    font-size: 22px;\n    margin: 0px;\n  }\n  .debt-bond-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #505054;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .budget-main[_ngcontent-%COMP%] {\n    background-image: url('has.JPG');\n    background-repeat: repeat-y;\n    padding: 30px 20px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  .slod1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    width: 90%;\n    margin: auto;\n  }\n\n  .debt-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width: 100px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 10px;\n    font-size: 10px;\n  }\n\n  .item-debts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #ff9f43;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #eee;\n    border-radius: 40px;\n    display: flex;\n    margin-bottom: 30px;\n    width: 480px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%] {\n    width: 40%;\n    float: left;\n    text-align: right;\n    display: table-cell;\n    padding-left: 10px;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-weight: 800;\n    font-size: 10px;\n    color: #737373;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: center;\n    float: left;\n    display: table-cell;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%] {\n    color: #ffcd08;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug1[_ngcontent-%COMP%] {\n    color: #56c3dc;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   .tugrug2[_ngcontent-%COMP%] {\n    color: #795446;\n    font-size: 20px;\n    font-weight: 800;\n  }\n  .item-debts[_ngcontent-%COMP%]   .item-debt[_ngcontent-%COMP%]   .item-debt-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: #737373;\n  }\n\n  .debt-bond[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    width: 100%;\n    height: 200px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    height: 93px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: bottom;\n    height: 93px;\n    padding-left: 10px;\n    position: relative;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .amdol[_ngcontent-%COMP%] {\n    color: #ea5455;\n    font-size: 22px;\n    display: block;\n    font-weight: 700;\n    text-align: center;\n    float: left;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -20px;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img.reverse[_ngcontent-%COMP%] {\n    left: -35px;\n    transform: rotate(45deg);\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    text-align: left;\n    display: table-cell;\n    vertical-align: bottom;\n    height: 100%;\n    padding-bottom: 1em;\n  }\n  .debt-bond[_ngcontent-%COMP%]   .debt-bond-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 500;\n    text-transform: none;\n    font-size: 14px;\n  }\n\n  .debt-bond-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: left;\n    font-weight: 700;\n    color: #505054;\n    font-size: 20px;\n    margin: 0px;\n  }\n  .debt-bond-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n    color: #505054;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L2RlYnQvZGVidC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVkZ2V0L2RlYnQvZGVidC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ0NKO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ1o7QURJQTtFQUNJLGlCQUFBO0VBQW1CLFVBQUE7RUFBWSxZQUFBO0FDQ25DO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURDSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VKO0FERUk7RUFDSSxZQUFBO0FDQ1I7QURFQTtFQUNJLGdCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFBRyxrQkFBQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRVI7QURFQTtFQUNJLGdCQUFBO0FDQ0o7QURHSTtFQUNJLGNBQUE7QUNBUjtBREVJO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRWhCO0FEQ1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDWjtBREFZO0VBQ0ks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LGlCQUFBO0lBQ0Esa0JBQUE7RUMxQkY7RUQyQkU7SUFDSSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQ0FBQTtFQ3pCTjtFRDJCTTtJQUNJLFlBQUE7RUN6QlY7RUQyQlU7SUFLSSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUM3QmQ7RURxQmM7SUFDSSxjQUFBO0lBQWdCLGVBQUE7SUFBaUIsY0FBQTtJQUFnQixnQkFBQTtJQUFrQixrQkFBQTtJQUNuRSxXQUFBO0VDZmxCO0VEc0JjO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0VDcEJsQjtFRHFCa0I7SUFDSSxXQUFBO0lBQ0Esd0JBQUE7RUNuQnRCO0VEdUJVO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQ3JCZDtFRHNCYztJQUNJLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0VDcEJsQjs7RUQyQkU7SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUN4Qk47RUQwQkU7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUN4Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC9kZWJ0L2RlYnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVkZ2V0LW1haW57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAudGl0bGUge1xuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbn1cbi5zbG9kMXtcbiAgICBwYWRkaW5nLXRvcDogODBweDsgd2lkdGg6IDkwJTsgbWFyZ2luOiBhdXRvO1xufVxuLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDMwcHg7ICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uZGVidC1pbWd7XG4gICAgaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICB9XG59XG4uY2VudGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuLmRlYnQtdGV4dHtcbiAgXG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9ICBcblxuLmRlYnQtaXRlbXtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgaDR7dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmY2QwODtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5cbiNjaGFydENvbnRhaW5lcntcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuLml0ZW0tZGVidHN7XG4gICAgXG4gICAgaDMge1xuICAgICAgICBjb2xvcjogI2ZmOWY0MztcbiAgICB9XG4gICAgLml0ZW0tZGVidHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgLml0ZW0tZGVidC10ZXh0e1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzczNzM3MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1kZWJ0LW51bWJlcntcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAudHVncnVne1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZjZDA4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnR1Z3J1ZzF7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NmMzZGM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHVncnVnMntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc5NTQ0NjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzczNzM3MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgfVxuICB0aHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gIH1cbi50Zy0wbGF4e1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLmhlYWRlcntcbiAgICBoM3tjb2xvcjogI2VhNTQ1NTt9XG59XG4vLyAuYm9uZC1vdXRlcntcbi8vICAgICAuY29sLW1kLTY6bnRoLWNoaWxkKG4gKyAxKXtcbi8vICAgICAgICAgLmRlYnQtYm9uZHtcbi8vICAgICAgICAgLmRlYnQtYm9uZC1pdGVte1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbiAgICAgICAgXG4vLyAgICAgfVxuLy8gfVxuICAgIC5kZWJ0LWJvbmQucmV2ZXJ0e1xuICAgICAgICAuZGVidC1ib25kLWl0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgfVxuLmRlYnQtYm9uZHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgLmRlYnQtYm9uZC1pdGVte1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICBcbiAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICBoZWlnaHQ6IDkzcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAuYW1kb2x7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWE1NDU1OyBmb250LXNpemU6IDMycHg7IGRpc3BsYXk6IGJsb2NrOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5M3B4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgJi5yZXZlcnNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uZGVidC1ib25kLWl0ZW17XG4gICAgaDR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICB9XG59XG4ubWFpbi1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgcHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIC5zbG9kMXtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDsgd2lkdGg6IDkwJTsgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuZGVidC1pbWd7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNlbnRlciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICBcbi5pdGVtLWRlYnRze1xuICAgIFxuICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICNmZjlmNDM7XG4gICAgfVxuICAgIC5pdGVtLWRlYnR7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB3aWR0aDogNDgwcHg7XG4gICAgICAgIC5pdGVtLWRlYnQtdGV4dHtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0tZGVidC1udW1iZXJ7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgLnR1Z3J1Z3tcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmY2QwODtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50dWdydWcxe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTZjM2RjO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnR1Z3J1ZzJ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTU0NDY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kZWJ0LWJvbmR7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIC5kZWJ0LWJvbmQtaXRlbXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICBcbiAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICBoZWlnaHQ6IDkzcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAuYW1kb2x7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWE1NDU1OyBmb250LXNpemU6IDI4cHg7IGRpc3BsYXk6IGJsb2NrOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5M3B4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgICAmLnJldmVyc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmRlYnQtYm9uZC1pdGVte1xuICAgIGg0e1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgfVxufVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICAuc2xvZDF7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IHdpZHRoOiA5MCU7IG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmRlYnQtaW1ne1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jZW50ZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4uaXRlbS1kZWJ0c3tcbiAgICBcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjZmY5ZjQzO1xuICAgIH1cbiAgICAuaXRlbS1kZWJ0e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAuaXRlbS1kZWJ0LXRleHR7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWRlYnQtbnVtYmVye1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIC50dWdydWd7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmNkMDg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHVncnVnMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50dWdydWcye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk1NDQ2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVidC1ib25ke1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAuZGVidC1ib25kLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgaGVpZ2h0OiA5M3B4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgLmFtZG9se1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VhNTQ1NTsgZm9udC1zaXplOiAyOHB4OyBkaXNwbGF5OiBibG9jazsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgJi5yZXZlcnNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kZWJ0LWJvbmQtaXRlbXtcbiAgICBoNHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIH1cbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICAuc2xvZDF7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IHdpZHRoOiA5MCU7IG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmRlYnQtaW1ne1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jZW50ZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4uaXRlbS1kZWJ0c3tcbiAgICBcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjZmY5ZjQzO1xuICAgIH1cbiAgICAuaXRlbS1kZWJ0e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAuaXRlbS1kZWJ0LXRleHR7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWRlYnQtbnVtYmVye1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIC50dWdydWd7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmNkMDg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHVncnVnMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50dWdydWcye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk1NDQ2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVidC1ib25ke1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAuZGVidC1ib25kLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgaGVpZ2h0OiA5M3B4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgLmFtZG9se1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VhNTQ1NTsgZm9udC1zaXplOiAyOHB4OyBkaXNwbGF5OiBibG9jazsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgJi5yZXZlcnNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kZWJ0LWJvbmQtaXRlbXtcbiAgICBoNHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIH1cbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICAuc2xvZDF7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IHdpZHRoOiA5MCU7IG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmRlYnQtaW1ne1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jZW50ZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4uaXRlbS1kZWJ0c3tcbiAgICBcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjZmY5ZjQzO1xuICAgIH1cbiAgICAuaXRlbS1kZWJ0e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAuaXRlbS1kZWJ0LXRleHR7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWRlYnQtbnVtYmVye1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIC50dWdydWd7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmNkMDg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHVncnVnMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50dWdydWcye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk1NDQ2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVidC1ib25ke1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAuZGVidC1ib25kLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgaGVpZ2h0OiA5M3B4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgLmFtZG9se1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VhNTQ1NTsgZm9udC1zaXplOiAyOHB4OyBkaXNwbGF5OiBibG9jazsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgJi5yZXZlcnNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kZWJ0LWJvbmQtaXRlbXtcbiAgICBoNHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIH1cbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICAuc2xvZDF7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IHdpZHRoOiA5MCU7IG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmRlYnQtaW1ne1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jZW50ZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgXG4uaXRlbS1kZWJ0c3tcbiAgICBcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjZmY5ZjQzO1xuICAgIH1cbiAgICAuaXRlbS1kZWJ0e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAuaXRlbS1kZWJ0LXRleHR7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWRlYnQtbnVtYmVye1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIC50dWdydWd7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmNkMDg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHVncnVnMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU2YzNkYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50dWdydWcye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk1NDQ2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVidC1ib25ke1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAuZGVidC1ib25kLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgaGVpZ2h0OiA5M3B4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgLmFtZG9se1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VhNTQ1NTsgZm9udC1zaXplOiAyMnB4OyBkaXNwbGF5OiBibG9jazsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgJi5yZXZlcnNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kZWJ0LWJvbmQtaXRlbXtcbiAgICBoNHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIH1cbn1cblxufSIsIi5idWRnZXQtbWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2xvZDEge1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZGVidC1pbWcgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZWJ0LXRleHQgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZGVidC1pdGVtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRlYnQtaXRlbSBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmNkMDg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNjaGFydENvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5pdGVtLWRlYnRzIGgzIHtcbiAgY29sb3I6ICNmZjlmNDM7XG59XG4uaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiA0ODBweDtcbn1cbi5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC10ZXh0IHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG4uaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtdGV4dCBzcGFuIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzczNzM3Mztcbn1cbi5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIge1xuICB3aWR0aDogNjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnIHtcbiAgY29sb3I6ICNmZmNkMDg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIgLnR1Z3J1ZzEge1xuICBjb2xvcjogIzU2YzNkYztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnMiB7XG4gIGNvbG9yOiAjNzk1NDQ2O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxudGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi50Zy0wbGF4IHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaGVhZGVyIGgzIHtcbiAgY29sb3I6ICNlYTU0NTU7XG59XG5cbi5kZWJ0LWJvbmQucmV2ZXJ0IC5kZWJ0LWJvbmQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5kZWJ0LWJvbmQge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG59XG4uZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCB7XG4gIGhlaWdodDogOTNweDtcbn1cbi5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGhlaWdodDogOTNweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgLmFtZG9sIHtcbiAgY29sb3I6ICNlYTU0NTU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG59XG4uZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nLnJldmVyc2Uge1xuICBsZWZ0OiAtNXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgcCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlYnQtYm9uZC1pdGVtIGg0IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTA1MDU0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmRlYnQtYm9uZC1pdGVtIHAge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNTA1MDU0O1xufVxuXG4ubWFpbi1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHggMzBweDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIHAge1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbi1kZXNjcmlwdGlvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MzZweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnNsb2QxIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRlYnQtaW1nIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLml0ZW0tZGVidHMgaDMge1xuICAgIGNvbG9yOiAjZmY5ZjQzO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNDgwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnIHtcbiAgICBjb2xvcjogI2ZmY2QwODtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcxIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcyIHtcbiAgICBjb2xvcjogIzc5NTQ0NjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gIH1cblxuICAuZGVidC1ib25kIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogOTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiAuYW1kb2wge1xuICAgIGNvbG9yOiAjZWE1NDU1O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgZGl2IGltZy5yZXZlcnNlIHtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IHAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGVidC1ib25kLWl0ZW0gaDQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZC1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnNsb2QxIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRlYnQtaW1nIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLml0ZW0tZGVidHMgaDMge1xuICAgIGNvbG9yOiAjZmY5ZjQzO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNDgwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnIHtcbiAgICBjb2xvcjogI2ZmY2QwODtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcxIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcyIHtcbiAgICBjb2xvcjogIzc5NTQ0NjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gIH1cblxuICAuZGVidC1ib25kIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogOTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiAuYW1kb2wge1xuICAgIGNvbG9yOiAjZWE1NDU1O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgZGl2IGltZy5yZXZlcnNlIHtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IHAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGVidC1ib25kLWl0ZW0gaDQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZC1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnNsb2QxIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRlYnQtaW1nIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLml0ZW0tZGVidHMgaDMge1xuICAgIGNvbG9yOiAjZmY5ZjQzO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNDgwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnIHtcbiAgICBjb2xvcjogI2ZmY2QwODtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcxIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcyIHtcbiAgICBjb2xvcjogIzc5NTQ0NjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gIH1cblxuICAuZGVidC1ib25kIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogOTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiAuYW1kb2wge1xuICAgIGNvbG9yOiAjZWE1NDU1O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgZGl2IGltZy5yZXZlcnNlIHtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IHAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGVidC1ib25kLWl0ZW0gaDQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZC1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnNsb2QxIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRlYnQtaW1nIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLml0ZW0tZGVidHMgaDMge1xuICAgIGNvbG9yOiAjZmY5ZjQzO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNDgwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnIHtcbiAgICBjb2xvcjogI2ZmY2QwODtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcxIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcyIHtcbiAgICBjb2xvcjogIzc5NTQ0NjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gIH1cblxuICAuZGVidC1ib25kIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogOTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiAuYW1kb2wge1xuICAgIGNvbG9yOiAjZWE1NDU1O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgZGl2IGltZy5yZXZlcnNlIHtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IHAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGVidC1ib25kLWl0ZW0gaDQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZC1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLnNsb2QxIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRlYnQtaW1nIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLml0ZW0tZGVidHMgaDMge1xuICAgIGNvbG9yOiAjZmY5ZjQzO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNDgwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LXRleHQgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICB9XG4gIC5pdGVtLWRlYnRzIC5pdGVtLWRlYnQgLml0ZW0tZGVidC1udW1iZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cbiAgLml0ZW0tZGVidHMgLml0ZW0tZGVidCAuaXRlbS1kZWJ0LW51bWJlciAudHVncnVnIHtcbiAgICBjb2xvcjogI2ZmY2QwODtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcxIHtcbiAgICBjb2xvcjogIzU2YzNkYztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIC50dWdydWcyIHtcbiAgICBjb2xvcjogIzc5NTQ0NjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuaXRlbS1kZWJ0cyAuaXRlbS1kZWJ0IC5pdGVtLWRlYnQtbnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gIH1cblxuICAuZGVidC1ib25kIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCB7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogOTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IGRpdiAuYW1kb2wge1xuICAgIGNvbG9yOiAjZWE1NDU1O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuZGVidC1ib25kIC5kZWJ0LWJvbmQtaXRlbSAubGVmdCBkaXYgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgZGl2IGltZy5yZXZlcnNlIHtcbiAgICBsZWZ0OiAtMzVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLmRlYnQtYm9uZCAuZGVidC1ib25kLWl0ZW0gLmxlZnQgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5kZWJ0LWJvbmQgLmRlYnQtYm9uZC1pdGVtIC5sZWZ0IHAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGVidC1ib25kLWl0ZW0gaDQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRlYnQtYm9uZC1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-debt',
          templateUrl: './debt.component.html',
          styleUrls: ['./debt.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/budget/debt/debt.module.ts":
  /*!********************************************!*\
    !*** ./src/app/budget/debt/debt.module.ts ***!
    \********************************************/

  /*! exports provided: DebtModule */

  /***/
  function _src_app_budget_debt_debtModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DebtModule", function () {
      return DebtModule;
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


    var _debt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./debt.component */
    "./src/app/budget/debt/debt.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/year-change/year-change.module */
    "./src/app/modules/year-change/year-change.module.ts");
    /* harmony import */


    var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/description/description.module */
    "./src/app/modules/description/description.module.ts");
    /* harmony import */


    var src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modules/carousel/ng-carousel.module */
    "./src/app/modules/carousel/ng-carousel.module.ts");
    /* harmony import */


    var src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modules/charts/charts.module */
    "./src/app/modules/charts/charts.module.ts");

    var routes = [{
      path: '',
      component: _debt_component__WEBPACK_IMPORTED_MODULE_2__["DebtComponent"]
    }];

    var DebtModule = /*#__PURE__*/_createClass(function DebtModule() {
      _classCallCheck(this, DebtModule);
    });

    DebtModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DebtModule
    });
    DebtModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DebtModule_Factory(t) {
        return new (t || DebtModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_5__["DescriptionModule"], src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_6__["NgCarouselModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DebtModule, {
        declarations: [_debt_component__WEBPACK_IMPORTED_MODULE_2__["DebtComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_5__["DescriptionModule"], src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_6__["NgCarouselModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_debt_component__WEBPACK_IMPORTED_MODULE_2__["DebtComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_5__["DescriptionModule"], src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_6__["NgCarouselModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=debt-debt-module-es5.js.map