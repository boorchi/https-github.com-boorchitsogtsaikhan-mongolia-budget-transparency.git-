function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orlogo-orlogo-module~ulsiintusuv-ulsiintusuv-module"], {
  /***/
  "./src/app/budget/orlogo/orlogo-sub/orlogo-sub.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/budget/orlogo/orlogo-sub/orlogo-sub.component.ts ***!
    \******************************************************************/

  /*! exports provided: OrlogoSubComponent */

  /***/
  function _src_app_budget_orlogo_orlogoSub_orlogoSubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrlogoSubComponent", function () {
      return OrlogoSubComponent;
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


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrlogoSubComponent_ng_container_2_mat_grid_tile_1_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0442\u044D\u0440\u0431\u0443\u043C \u20AE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var i_r2 = ctx_r6.index;
        var tile_r1 = ctx_r6.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r4.colors[i_r2], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tile_r1.percent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r4.colors[i_r2], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, tile_r1.perfoValue));
      }
    }

    function OrlogoSubComponent_ng_container_2_mat_grid_tile_1_div_18_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 25);
      }
    }

    function OrlogoSubComponent_ng_container_2_mat_grid_tile_1_div_18_i_feather_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 26);
      }
    }

    function OrlogoSubComponent_ng_container_2_mat_grid_tile_1_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrlogoSubComponent_ng_container_2_mat_grid_tile_1_div_18_i_feather_5_Template, 1, 0, "i-feather", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrlogoSubComponent_ng_container_2_mat_grid_tile_1_div_18_i_feather_6_Template, 1, 0, "i-feather", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tile_r1.percent, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.params["category"] != "APPROVED" && ctx_r5.getPercent3Level(tile_r1) < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.params["category"] != "APPROVED" && ctx_r5.getPercent3Level(tile_r1) >= 0);
      }
    }

    function OrlogoSubComponent_ng_container_2_mat_grid_tile_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrlogoSubComponent_ng_container_2_mat_grid_tile_1_ng_container_17_Template, 11, 10, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrlogoSubComponent_ng_container_2_mat_grid_tile_1_div_18_Template, 8, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r2 = ctx_r10.index;
        var tile_r1 = ctx_r10.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#fff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r3.colors[i_r2], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r1.codeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r3.colors[i_r2], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 22, tile_r1.approvedValue), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border-color: ", ctx_r3.colors[i_r2], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.checkType());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.checkType());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r3.colors[i_r2], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r1.codeName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r1.description);
      }
    }

    function OrlogoSubComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrlogoSubComponent_ng_container_2_mat_grid_tile_1_Template, 24, 24, "mat-grid-tile", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var tile_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tile_r1.approvedValue > 0);
      }
    }

    var OrlogoSubComponent = /*#__PURE__*/function () {
      function OrlogoSubComponent(mainService, route, router) {
        var _this = this;

        _classCallCheck(this, OrlogoSubComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colors;
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category
        };
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
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this.setQueryParam(val.url.split('?')[1]);
            }
          }
        });
      }

      return _createClass(OrlogoSubComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWidth();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth && event.target.innerWidth > 1440) {
            this.breakpoint = 4;
          } else if (event.target.innerWidth <= 1440 && event.target.innerWidth > 1200) {
            this.breakpoint = 3;
          } else if (event.target.innerWidth <= 1200 && event.target.innerWidth > 1010) {
            this.breakpoint = 2;
          } else {
            this.breakpoint = 4;
          }
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 1680 && this.screenWidth > 1440) {
            this.breakpoint = 4;
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1200) {
            this.breakpoint = 3;
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            this.breakpoint = 2;
          } else {
            this.breakpoint = 4;
          }
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
        key: "getPercent3Level",
        value: function getPercent3Level(item) {
          var data = 0; // console.log(item);
          // this.befDatas.forEach(function(entry, index) {  
          //     data = Math.floor(parseFloat(((item.approvedValue - entry.approvedValue) / entry.approvedValue).toFixed(2)) * 100);
          // }); 

          return data;
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.mainService.type == "APPROVED" ? "гүйцэтгэл" : "Өмнөх оноос";
        }
      }, {
        key: "checkType",
        value: function checkType() {
          return this.mainService.type == "APPROVED";
        }
      }]);
    }();

    OrlogoSubComponent.ɵfac = function OrlogoSubComponent_Factory(t) {
      return new (t || OrlogoSubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OrlogoSubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrlogoSubComponent,
      selectors: [["app-orlogo-sub"]],
      inputs: {
        datas: "datas",
        befDatas: "befDatas"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "orlogo-sub"], ["rowHeight", "180px", "gutterSize", "20px", 3, "cols"], [4, "ngFor", "ngForOf"], [3, "colspan", "rowspan", "color", 4, "ngIf"], [3, "colspan", "rowspan"], [1, "item"], [1, "main"], [1, "front"], [1, "row"], [1, "col-5"], [1, "col-7"], [1, "special-text"], [1, "currency"], [1, "cur-text"], [1, "arrow-hr"], [1, "arrow", "down"], [4, "ngIf"], ["class", "process", "style", "width: 100%;", 4, "ngIf"], [1, "back"], [1, "cur-desc"], [1, "cur-desc-text"], [1, "cur-desc-number"], [1, "process", 2, "width", "100%"], ["name", "arrow-down", "class", "down-icon", "style", "color: #333;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #333;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#333"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#333"]],
      template: function OrlogoSubComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrlogoSubComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datas);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n}\n\nh5[_ngcontent-%COMP%] {\n  padding: 0px 30px;\n}\n\n.item[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.item[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n  color: #333;\n}\n\n.item[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n\n.item[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-right: 20px;\n  padding-left: 10px;\n  text-align: left;\n  margin: 0px;\n}\n\n.special-text[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n\n.special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 110%;\n}\n\n.special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n  font-size: 15.7px;\n}\n\n.special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #56c3dc;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  border: solid #333;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 2.5px;\n}\n\n.arrow-hr[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.arrow-hr[_ngcontent-%COMP%]:after {\n  position: absolute;\n  height: 1px;\n  top: 50%;\n  width: 60px;\n  right: -70px;\n  content: \"\";\n  border-top: 1px solid #505054;\n}\n\n.arrow-hr[_ngcontent-%COMP%]:before {\n  position: absolute;\n  height: 1px;\n  top: 50%;\n  width: 60px;\n  left: -70px;\n  content: \"\";\n  border-top: 1px solid #505054;\n}\n\n.down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  perspective: 1000px;\n}\n\n.item[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.item[_ngcontent-%COMP%]:hover   .main[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  overflow: hidden;\n}\n\n.front[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.front[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.back[_ngcontent-%COMP%] {\n  padding: 5px;\n  transform: rotateY(180deg);\n}\n\n.back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n@media screen and (max-width: 1680px) {\n  .back[_ngcontent-%COMP%] {\n    padding: 5px;\n    transform: rotateY(180deg);\n  }\n  .back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 1440px) {\n  .back[_ngcontent-%COMP%] {\n    padding: 5px;\n    transform: rotateY(180deg);\n  }\n  .back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 1366px) {\n  .special-text[_ngcontent-%COMP%] {\n    padding: 20px;\n    text-align: center;\n  }\n  .special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 110%;\n  }\n  .special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 12px;\n    text-transform: uppercase;\n  }\n  .special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n    font-size: 12.7px;\n  }\n  .special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #56c3dc;\n  }\n\n  .back[_ngcontent-%COMP%] {\n    padding: 5px;\n    transform: rotateY(180deg);\n  }\n  .back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  .back[_ngcontent-%COMP%] {\n    padding: 5px;\n    transform: rotateY(180deg);\n  }\n  .back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .back[_ngcontent-%COMP%] {\n    padding: 5px;\n    transform: rotateY(180deg);\n  }\n  .back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L29ybG9nby9vcmxvZ28tc3ViL29ybG9nby1zdWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1ZGdldC9vcmxvZ28vb3Jsb2dvLXN1Yi9vcmxvZ28tc3ViLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBRUksWUFBQTtBQ0VKOztBRERJO0VBQ0ksWUFBQTtBQ0dSOztBRERJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRVI7O0FERFE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNHWjs7QURDQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRERJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksY0FBQTtBQ0dSOztBREFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0ksa0JBQUE7QUNJTjs7QURGRTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0tOOztBREhFO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDTU47O0FESkU7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0FDT0o7O0FESkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0FDT0w7O0FETEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QUNRSjs7QURORTtFQUNFLDBCQUFBO0FDU0o7O0FEUEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSRTtFQUNFLFdBQUE7QUNXSjs7QURWSTtFQUNJLGVBQUE7QUNZUjs7QURWSTtFQUNJLGVBQUE7QUNZUjs7QURURTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ1lKOztBRFhJO0VBQ0ksZUFBQTtBQ2FSOztBRFhJO0VBQ0ksZUFBQTtBQ2FSOztBRFRBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsMEJBQUE7RUNZTjtFRFhNO0lBQ0ksZUFBQTtFQ2FWO0VEWE07SUFDSSxlQUFBO0VDYVY7QUFDRjs7QURUQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLDBCQUFBO0VDV047RURWTTtJQUNJLGVBQUE7RUNZVjtFRFZNO0lBQ0ksZUFBQTtFQ1lWO0FBQ0Y7O0FEUEE7RUFDSTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtFQ1NOO0VEUk07SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQ1VWO0VEUk07SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtFQ1VWO0VEUk07SUFDSSxpQkFBQTtFQ1VWO0VEUk07SUFDSSxjQUFBO0VDVVY7O0VEUEU7SUFDSSxZQUFBO0lBQ0EsMEJBQUE7RUNVTjtFRFRNO0lBQ0ksZUFBQTtFQ1dWO0FBQ0Y7O0FETEE7RUFDSTtJQUNJLFlBQUE7SUFDQSwwQkFBQTtFQ09OO0VETk07SUFDSSxlQUFBO0VDUVY7QUFDRjs7QURGQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLDBCQUFBO0VDSU47RURITTtJQUNJLGVBQUE7RUNLVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYnVkZ2V0L29ybG9nby9vcmxvZ28tc3ViL29ybG9nby1zdWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxle1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmg1e1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xufVxuLml0ZW17XG4gICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLnJvd3tcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuY29sLTd7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICB9XG4gICAgLmNvbC01e1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uc3BlY2lhbC10ZXh0e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5jdXJyZW5jeXtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgfVxuICAgIC5jdXItdGV4dHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAuY3VyLWRlc2N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUuN3B4O1xuICAgIH1cbiAgICBiIHtcbiAgICAgICAgY29sb3I6ICM1NmMzZGM7XG4gICAgfVxufVxuLmFycm93IHtcbiAgICBib3JkZXI6IHNvbGlkICMzMzM7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMi41cHg7XG4gIH1cbiAgLmFycm93LWhye1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5hcnJvdy1ocjphZnRlcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIHJpZ2h0OiAtNzBweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzUwNTA1NDtcbiAgfVxuICAuYXJyb3ctaHI6YmVmb3Jle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgbGVmdDogLTcwcHg7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MDUwNTQ7XG4gIH1cbiAgLmRvd24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICBcbiAgLml0ZW17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICB9XG4gIC5pdGVtIC5tYWlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIC5pdGVtOmhvdmVyIC5tYWluIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAuZnJvbnQsIC5iYWNre1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmZyb250IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG4gIC5iYWNrIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICAuYmFjayB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5iYWNrIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAuc3BlY2lhbC10ZXh0e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5jdXJyZW5jeXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmN1ci10ZXh0e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLmN1ci1kZXNje1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMi43cHhcbiAgICAgICAgfVxuICAgICAgICBiIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTZjM2RjO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iYWNrIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgICAgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAuYmFjayB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJhY2sge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJtYXQtZ3JpZC10aWxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg1IHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59XG5cbi5pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLml0ZW0gLnJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pdGVtIC5jb2wtNyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICMzMzM7XG59XG4uaXRlbSAuY29sLTUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtIC5jb2wtNSBoNSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uc3BlY2lhbC10ZXh0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNwZWNpYWwtdGV4dCAuY3VycmVuY3kge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTEwJTtcbn1cbi5zcGVjaWFsLXRleHQgLmN1ci10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNwZWNpYWwtdGV4dCAuY3VyLWRlc2Mge1xuICBmb250LXNpemU6IDE1LjdweDtcbn1cbi5zcGVjaWFsLXRleHQgYiB7XG4gIGNvbG9yOiAjNTZjM2RjO1xufVxuXG4uYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICMzMzM7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMi41cHg7XG59XG5cbi5hcnJvdy1ociB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFycm93LWhyOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICByaWdodDogLTcwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTA1MDU0O1xufVxuXG4uYXJyb3ctaHI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBsZWZ0OiAtNzBweDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MDUwNTQ7XG59XG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uaXRlbSAubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uaXRlbTpob3ZlciAubWFpbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZnJvbnQsIC5iYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZnJvbnQge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mcm9udCBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5mcm9udCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmFjayB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uYmFjayBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5iYWNrIHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAuYmFjayB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5iYWNrIGgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmJhY2sgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJhY2sge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAuYmFjayBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5iYWNrIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5zcGVjaWFsLXRleHQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zcGVjaWFsLXRleHQgLmN1cnJlbmN5IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gIH1cbiAgLnNwZWNpYWwtdGV4dCAuY3VyLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnNwZWNpYWwtdGV4dCAuY3VyLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTIuN3B4O1xuICB9XG4gIC5zcGVjaWFsLXRleHQgYiB7XG4gICAgY29sb3I6ICM1NmMzZGM7XG4gIH1cblxuICAuYmFjayB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5iYWNrIGgxIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuYmFjayB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5iYWNrIGgxIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYmFjayB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIC5iYWNrIGgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrlogoSubComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orlogo-sub',
          templateUrl: './orlogo-sub.component.html',
          styleUrls: ['./orlogo-sub.component.scss']
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
        datas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        befDatas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/budget/orlogo/orlogo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/budget/orlogo/orlogo.component.ts ***!
    \***************************************************/

  /*! exports provided: OrlogoComponent */

  /***/
  function _src_app_budget_orlogo_orlogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrlogoComponent", function () {
      return OrlogoComponent;
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


    var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/canvasjs.min */
    "./src/assets/canvasjs.min.js");
    /* harmony import */


    var _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modules/year-change/year-change.component */
    "./src/app/modules/year-change/year-change.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_ulsiintusuvcharts_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modules/ulsiintusuvcharts/ulsiintusuvcharts.component */
    "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.component.ts");
    /* harmony import */


    var _modules_description_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../modules/description/description.component */
    "./src/app/modules/description/description.component.ts");
    /* harmony import */


    var _modules_charts_charts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../modules/charts/charts.component */
    "./src/app/modules/charts/charts.component.ts");
    /* harmony import */


    var _modules_charts_simple_simple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../modules/charts/simple/simple.component */
    "./src/app/modules/charts/simple/simple.component.ts");
    /* harmony import */


    var _orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./orlogo-sub/orlogo-sub.component */
    "./src/app/budget/orlogo/orlogo-sub/orlogo-sub.component.ts");

    function OrlogoComponent_ng_container_4_img_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
      }
    }

    function OrlogoComponent_ng_container_4_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
      }
    }

    function OrlogoComponent_ng_container_4_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0430\u043D\u0433\u0438\u043B\u043B\u0430\u0430\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrlogoComponent_ng_container_4_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0430\u043D\u0433\u0438\u043B\u043B\u0430\u0430\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrlogoComponent_ng_container_4_img_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
      }
    }

    var _c0 = function _c0() {
      return ["#28c66f"];
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var _c2 = function _c2() {
      return ["\u041D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430"];
    };

    function OrlogoComponent_ng_container_4_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ulsiintusuv-charts", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 0)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("legend", false)("isOrlogo", ctx_r8.isOrlogo)("title", "\u041D\u0438\u0439\u0442 \u041E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r8.orlogoTotal[ctx_r8.params["category"]]["approvedValue"])("prefValue", ctx_r8.orlogoTotal[ctx_r8.params["category"]]["perfoValue"])("percent", ctx_r8.orlogoTotal[ctx_r8.params["category"]]["percent"])("befPercent", ctx_r8.orlogoTotalPer[ctx_r8.params["category"]]["percentPer"])("values", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r8.orlogoTotal[ctx_r8.params["category"]]["approvedValue"]))("names", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
      }
    }

    function OrlogoComponent_ng_container_4_img_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
      }
    }

    function OrlogoComponent_ng_container_4_img_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
      }
    }

    function OrlogoComponent_ng_container_4_img_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function OrlogoComponent_ng_container_4_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0425\u04AF\u0447\u0438\u043D \u0437\u04AF\u0439\u043B\u0441\u044D\u044D\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrlogoComponent_ng_container_4_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0425\u04AF\u0447\u0438\u043D \u0437\u04AF\u0439\u043B\u0441\u044D\u044D\u0440 \u0445\u0430\u0440\u0430\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrlogoComponent_ng_container_4_module_description_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "module-description", 33);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r14.description);
      }
    }

    function OrlogoComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u044D\u0433\u0434\u0441\u044D\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrlogoComponent_ng_container_4_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.changeType("eza");
        })("mouseover", function OrlogoComponent_ng_container_4_Template_div_mouseover_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.orlogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrlogoComponent_ng_container_4_img_11_Template, 1, 0, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrlogoComponent_ng_container_4_img_12_Template, 1, 0, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrlogoComponent_ng_container_4_span_14_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrlogoComponent_ng_container_4_span_15_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrlogoComponent_ng_container_4_img_17_Template, 1, 0, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrlogoComponent_ng_container_4_div_18_Template, 2, 15, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function OrlogoComponent_ng_container_4_Template_div_mouseover_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.salbar();
        })("click", function OrlogoComponent_ng_container_4_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.changeType("hz");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrlogoComponent_ng_container_4_img_21_Template, 1, 0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OrlogoComponent_ng_container_4_img_23_Template, 1, 0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrlogoComponent_ng_container_4_img_24_Template, 1, 0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrlogoComponent_ng_container_4_span_26_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrlogoComponent_ng_container_4_span_27_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OrlogoComponent_ng_container_4_module_description_28_Template, 1, 1, "module-description", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ", ctx_r0.updateDate, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSalbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEza);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSalbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEza);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEza);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSalbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSalbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEza);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSalbar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEza);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.description);
      }
    }

    function OrlogoComponent_ng_container_5_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "budget-charts", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 0)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E")("legend", true)("isOrlogo", ctx_r20.isOrlogo)("sum", ctx_r20.sum)("process", ctx_r20.process)("values", ctx_r20.orlogoValues)("names", ctx_r20.orlogoNames)("prefValue", ctx_r20.orlogoTotal[ctx_r20.params["category"]]["perfoValue"])("percent", ctx_r20.orlogoTotal[ctx_r20.params["category"]]["percent"])("befPercent", ctx_r20.orlogoTotalPer[ctx_r20.params["category"]]["percentPer"]);
      }
    }

    function OrlogoComponent_ng_container_5_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.chartName);
      }
    }

    function OrlogoComponent_ng_container_5_module_description_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "module-description", 33);
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r22.description);
      }
    }

    function OrlogoComponent_ng_container_5_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u044D\u043D\u0446\u0432\u044D\u0440\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-simple", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sub", 1)("isOrlogo", ctx_r23.isOrlogo)("legend", true)("title", "\u0422\u044D\u043D\u0446\u0432\u044D\u0440\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u043E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r23.sum)("values", ctx_r23.orlogoSub1Values)("names", ctx_r23.orlogoSub1Names)("prefValue", ctx_r23.orlogoSub1pepoPer)("percent", ctx_r23.orlogoSub1Per)("befPercent", ctx_r23.beforlogoSub1Per);
      }
    }

    function OrlogoComponent_ng_container_5_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.sub2Head);
      }
    }

    function OrlogoComponent_ng_container_5_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-orlogo-sub", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datas", ctx_r25.orlogoDetailList)("befDatas", ctx_r25.orlogoDetailListPer);
      }
    }

    function OrlogoComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041E\u0440\u043B\u043E\u0433\u043E \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0430\u043D\u0433\u0438\u043B\u043B\u0430\u0430\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrlogoComponent_ng_container_5_div_10_Template, 2, 11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrlogoComponent_ng_container_5_div_11_Template, 4, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrlogoComponent_ng_container_5_Template_div_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.menuType = "main";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrlogoComponent_ng_container_5_module_description_15_Template, 1, 1, "module-description", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrlogoComponent_ng_container_5_div_16_Template, 5, 10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrlogoComponent_ng_container_5_div_17_Template, 3, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrlogoComponent_ng_container_5_div_18_Template, 3, 2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ", ctx_r1.updateDate, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.isChart ? "col-md-4" : "col-md-12");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDataLoaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSub1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSub2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSub2);
      }
    }

    function OrlogoComponent_ng_container_6_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = ctx.$implicit;
        var i_r34 = ctx.index;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate4"]("background: ", ctx_r28.hzColor[i_r34], "; width: ", ctx_r28.width, "px; height: ", ctx_r28.height, "px; ", ctx_r28.hzPos[i_r34], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/image/budget/main/orlgo/", i_r34, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, item_r33["approvedValue"]), " \u0442\u044D\u0440\u0431\u0443\u043C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r28.getType(), " ", item_r33.percent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33["codeName"]);
      }
    }

    function OrlogoComponent_ng_container_6_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.orlogoTotal[ctx_r29.params["category"]]["percent"], "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r29.orlogoTotal[ctx_r29.params["category"]]["perfoValue"]), " \u0442\u044D\u0440\u0431\u0443\u043C ");
      }
    }

    function OrlogoComponent_ng_container_6_div_21_i_feather_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 75);
      }
    }

    function OrlogoComponent_ng_container_6_div_21_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 76);
      }
    }

    function OrlogoComponent_ng_container_6_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrlogoComponent_ng_container_6_div_21_i_feather_4_Template, 1, 0, "i-feather", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrlogoComponent_ng_container_6_div_21_i_feather_5_Template, 1, 0, "i-feather", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r30.orlogoTotalPer[ctx_r30.params["category"]]["percentPer"], "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.params["category"] != "APPROVED" && ctx_r30.orlogoTotalPer[ctx_r30.params["category"]]["percentPer"] < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.params["category"] != "APPROVED" && ctx_r30.orlogoTotalPer[ctx_r30.params["category"]]["percentPer"] >= 0);
      }
    }

    function OrlogoComponent_ng_container_6_module_description_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "module-description", 33);
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r31.description);
      }
    }

    function OrlogoComponent_ng_container_6_div_30_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r37["percent"], "%");
      }
    }

    function OrlogoComponent_ng_container_6_div_30_div_20_i_feather_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 91);
      }
    }

    function OrlogoComponent_ng_container_6_div_30_div_20_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 92);
      }
    }

    function OrlogoComponent_ng_container_6_div_30_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrlogoComponent_ng_container_6_div_30_div_20_i_feather_4_Template, 1, 0, "i-feather", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrlogoComponent_ng_container_6_div_30_div_20_i_feather_5_Template, 1, 0, "i-feather", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r37["percent"], "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37["percent"] < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37["percent"] >= 0);
      }
    }

    function OrlogoComponent_ng_container_6_div_30_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseout", function OrlogoComponent_ng_container_6_div_30_div_25_Template_div_mouseout_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.miningDatas[i_r38]["changeTest"] = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r38 = ctx_r49.index;
        var item_r37 = ctx_r49.$implicit;

        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:  ", ctx_r41.colors_income_ded[i_r38], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37["description"], " ");
      }
    }

    function OrlogoComponent_ng_container_6_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0425\u044D\u043C\u0436\u044D\u044D: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrlogoComponent_ng_container_6_div_30_div_19_Template, 5, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrlogoComponent_ng_container_6_div_30_div_20_Template, 6, 3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function OrlogoComponent_ng_container_6_div_30_Template_div_mouseover_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var i_r38 = ctx.index;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r50.miningDatas[i_r38]["changeTest"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrlogoComponent_ng_container_6_div_30_div_25_Template, 3, 4, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r37 = ctx.$implicit;
        var i_r38 = ctx.index;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("col-md-", ctx_r32.breakpoint, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r32.colors_income_ded[i_r38], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/image/budget/main/alt/", i_r38, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color:  ", ctx_r32.colors_income_ded[i_r38], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37["codeName"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37["amount"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u04AE\u043D\u044D: ", item_r37["price"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.getNumber(item_r37["total"]), " \u0442\u044D\u0440\u0431\u0443\u043C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.params["category"] == "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.params["category"] != "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r32.colors_income_ded[i_r38], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.miningDatas[i_r38]["changeTest"]);
      }
    }

    function OrlogoComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u043E\u0440\u043B\u043E\u0433\u043E\u0434 \u043D\u04E9\u043B\u04E9\u04E9\u043B\u04E9\u0445 \u0445\u04AF\u0447\u0438\u043D \u0437\u04AF\u0439\u043B\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrlogoComponent_ng_container_6_div_8_Template, 12, 13, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrlogoComponent_ng_container_6_ng_container_20_Template, 7, 4, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrlogoComponent_ng_container_6_div_21_Template, 7, 3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrlogoComponent_ng_container_6_Template_div_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r52.menuType = "main";
          ctx_r52.sheet = "Sheet4";
          return ctx_r52.getReleaseDate("Sheet4");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrlogoComponent_ng_container_6_module_description_25_Template, 1, 1, "module-description", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0423\u0443\u043B \u0443\u0443\u0440\u0445\u0430\u0439\u043D \u0433\u043E\u043B\u043B\u043E\u0445 \u0431\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D\u0438\u0439 \u0442\u04E9\u043B\u04E9\u0432");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OrlogoComponent_ng_container_6_div_30_Template, 26, 20, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.hzDatas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx_r2.orlogoTotal[ctx_r2.params["category"]]["approvedValue"]), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.params["category"] == "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.params["category"] != "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.miningDatas);
      }
    }

    var OrlogoComponent = /*#__PURE__*/function () {
      function OrlogoComponent(mainService, route, router) {
        var _this2 = this;

        _classCallCheck(this, OrlogoComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.isDataLoaded = false;
        this.isSub1 = false;
        this.isSub2 = false;
        this.isChart = false;
        this.chartName = "";
        this.orlogoList = [];
        this.orlogoSub1List = [];
        this.orlogoValues = [];
        this.orlogoNames = [];
        this.orlogoSub1Values = [];
        this.orlogoSub1ValuesPer = 0;
        this.beforlogoSub1ValuesPer = 0;
        this.orlogoSub1pepoPer = 0;
        this.orlogoSub1Per = 0;
        this.beforlogoSub1Per = 0;
        this.orlogoSub1Names = [];
        this.isOrlogo = true;
        this.sum = 0;
        this.sum1 = 0;
        this.process = 0;
        this.prefToValue = 0;
        this.orlogoDetailList = [];
        this.orlogoDetailListPer = [];
        this.beforeYear = 0;
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category
        };
        this.orlogoTotal = {
          "APPROVED": {
            "approvedValue": 0,
            "perfoValue": 0,
            "percent": 0
          },
          "SUBMITTED": {
            "approvedValue": 0,
            "perfoValue": 0,
            "percent": 0
          }
        };
        this.orlogoTotalPer = {
          "APPROVED": {
            "approvedValue": 0,
            "perfoValue": 0,
            "percentPer": 0
          },
          "SUBMITTED": {
            "approvedValue": 0,
            "perfoValue": 0,
            "percentPer": 0
          }
        };
        this.menuType = '';
        this.percent = [];
        this.percentPer = [];
        this.percentPer1 = 0;
        this.percentTotal = [];
        this.appValue = [];
        this.prefValue = [];
        this.prefValueTotal = 0;
        this.appValueTotal = [];
        this.value = 0;
        this.highValue = 18;
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colors;
        this.salbarPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].salbarPos;
        this.widths = []; // slideData : any;

        this.featureData = [];
        this.isZarlaga = true;
        this.isEza = true;
        this.isMain = false;
        this.isSalbar = false;
        this.isMainDe = false;
        this.ezaValues = [];
        this.ezaNames = [];
        this.hzDatas = [];
        this.miningDatas = [];
        this.beFminingDatas = [];
        this.hzColor = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colorsHz;
        this.hzPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].hzPos;
        this.showChart = false;
        this.showEza = false;
        this.colors_income_ded = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colors_income_ded;
        this.slideData = {
          type: 4,
          datas: [{
            name: "Гүүрийн байгууламж",
            text: " 13"
          }, {
            name: "Авто зам",
            text: " 143"
          }, {
            name: "Үер усны хангамж",
            text: " 117"
          }, {
            name: "Цахилгаан",
            text: " 23"
          }, {
            name: "Цахилгаан",
            text: " 23"
          }]
        };
        this.sheet = "Sheet4";
        this.width = 160;
        this.height = 160;
        this.onResize();
        this.changeText1 = false;
        this.changeText2 = false;
        this.changeText3 = false;
        this.changeText4 = false;
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this2.setQueryParam(val.url.split('?')[1]);
            }

            _this2.getOrlogo();

            _this2.getOrlogoHz();

            _this2.getReleaseDate(_this2.sheet);
          }
        });
        this.mainService.budgetOrlogoSub.subscribe(function (data) {
          if (data === 1) {
            _this2.orlogoTo();
          }

          _this2.isChart = true;
          _this2.chartName = _this2.orlogoList[data].typeName;

          _this2.getOrlogoYear(_this2.orlogoList[data].type);

          _this2.mainService.scroll('description');
        });
        this.mainService.budgetOrlogoSub1.subscribe(function (data) {
          _this2.isSub2 = true;
          _this2.sub2Head = _this2.orlogoSub1Names[data];

          _this2.orlogoDetail(_this2.orlogoSub1List[data]["level"]);
        });
      }

      return _createClass(OrlogoComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 1680 && this.screenWidth > 1600) {
            this.hzPos = ['left: 60px; bottom: 320px; ', 'left: 330px; bottom: 450px; ', 'left: 750px; bottom: 450px; ', 'left: 1050px; bottom: 320px; ', 'left: 200px; top: 380px; ', 'right: 150px; top: 380px; ', 'left: 550px; top: 170px; ', 'left: 400px; top: 380px; '];
            this.width = 150;
            this.height = 150;
            this.breakpoint = 3;
          } else if (this.screenWidth <= 1600 && this.screenWidth > 1440) {
            this.hzPos = ['left: 60px; bottom: 320px; ', 'left: 330px; bottom: 450px; ', 'left: 750px; bottom: 450px; ', 'left: 990px; bottom: 320px; ', 'left: 200px; top: 380px; ', 'right: 150px; top: 380px; ', 'left: 550px; top: 170px; ', 'left: 400px; top: 380px; '];
            this.width = 150;
            this.height = 150;
            this.breakpoint = 4;
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1366) {
            this.hzPos = ['left: 30px; bottom: 320px; ', 'left: 260px; bottom: 450px; ', 'left: 600px; bottom: 450px; ', 'left: 850px; bottom: 320px; ', 'left: 200px; top: 380px; ', 'right: 150px; top: 380px; ', 'left: 550px; top: 170px; ', 'left: 400px; top: 380px; '];
            this.width = 140;
            this.height = 140;
            this.breakpoint = 4;
          } else if (this.screenWidth <= 1366 && this.screenWidth > 1200) {
            this.hzPos = ['left: 30px; bottom: 320px; ', 'left: 260px; bottom: 450px; ', 'left: 540px; bottom: 450px; ', 'left: 790px; bottom: 320px; ', 'left: 200px; top: 380px; ', 'right: 150px; top: 380px; ', 'left: 550px; top: 170px; ', 'left: 400px; top: 380px; '];
            this.width = 130;
            this.height = 130;
            this.breakpoint = 4;
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            this.hzPos = ['left: 30px; bottom: 320px; ', 'left: 180px; bottom: 450px; ', 'left: 400px; bottom: 450px; ', 'left: 300px; bottom: 320px; ', 'left: 200px; top: 380px; ', 'right: 150px; top: 380px; ', 'left: 550px; top: 170px; ', 'left: 400px; top: 380px; '];
            this.width = 130;
            this.height = 130;
            this.breakpoint = 6;
          } else {
            this.hzPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].hzPos;
            this.breakpoint = 3;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isMain = true;
          this.isMainDe = true;
          this.menuType = 'main';
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
          this.beforeYear = 0;
          this.beforeYear = this.params["year"] - 1;

          if (params != old) {
            this.orlogoDetailList = [];
            this.orlogoDetailList = null;
            this.orlogoSub1List = [];
            this.isSub1 = false;
          }
        }
      }, {
        key: "getOrlogo",
        value: function getOrlogo() {
          var _this3 = this;

          console.log(this.params["year"]);
          this.orlogoValues = [];
          this.orlogoNames = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this3.orlogoList = result;
            _this3.orlogoTotal = {
              "APPROVED": {
                "approvedValue": 0,
                "perfoValue": 0,
                "percent": 0
              },
              "SUBMITTED": {
                "approvedValue": 0,
                "perfoValue": 0,
                "percent": 0
              }
            };
            result.forEach(function (item) {
              _this3.orlogoValues.push(item["approvedValue"]);

              _this3.orlogoNames.push(item["typeName"]);

              _this3.orlogoTotal[_this3.params["category"]]["approvedValue"] += item["approvedValue"];
              _this3.orlogoTotal[_this3.params["category"]]["perfoValue"] += item["perfoValue"];
            });

            if (result.length == 0) {
              _this3.showChart = false;
            }

            var percent = (_this3.orlogoTotal[_this3.params["category"]]["perfoValue"] / _this3.orlogoTotal[_this3.params["category"]]["approvedValue"] * 100).toFixed(2);
            _this3.orlogoTotal[_this3.params["category"]]["percent"] = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0;
            _this3.isDataLoaded = true;
            _this3.showChart = true;

            _this3.getBeforeYear();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getBeforeYear",
        value: function getBeforeYear() {
          var _this4 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then(function (result) {
            _this4.orlogoTotalPer = {
              "APPROVED": {
                "approvedValue": 0,
                "perfoValue": 0,
                "percentPer": 0
              },
              "SUBMITTED": {
                "approvedValue": 0,
                "perfoValue": 0,
                "percentPer": 0
              }
            };
            result.forEach(function (item) {
              _this4.orlogoTotalPer[_this4.params["category"]]["approvedValue"] += item["approvedValue"];
            });
            var percent = ((_this4.orlogoTotal[_this4.params["category"]]["approvedValue"] - _this4.orlogoTotalPer[_this4.params["category"]]["approvedValue"]) / _this4.orlogoTotalPer[_this4.params["category"]]["approvedValue"] * 100).toFixed(2);
            _this4.orlogoTotalPer[_this4.params["category"]]["percentPer"] = 0;
            _this4.orlogoTotalPer[_this4.params["category"]]["percentPer"] = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getOrlogoHz",
        value: function getOrlogoHz() {
          var _this5 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_HZ + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this5.hzDatas = result;
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_UURHAI + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this5.miningDatas = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getOrlogoYear",
        value: function getOrlogoYear(type) {
          var _this6 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_YEARS + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=" + type, null, true).then(function (result) {
            var datas = [];
            result.forEach(function (element, index, array) {
              var value = {
                name: element.year,
                showInLegend: true,
                color: "#ffc705",
                indexLabel: "{y}",
                indexLabelFontColor: "#fff",
                indexLabelPlacement: "inside",
                dataPoints: [{
                  x: index,
                  y: element.approvedValue,
                  label: element.year
                }]
              };
              datas.push(value);

              if (index === array.length - 1) {
                _this6.render(datas);
              }
            });
            _this6.isDataLoaded = true;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "orlogoTo",
        value: function orlogoTo() {
          var _this7 = this;

          this.orlogoSub1Values = [];
          this.orlogoSub1Names = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_TO + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this7.orlogoSub1List = result;
            _this7.orlogoSub1pepoPer = 0;
            _this7.orlogoSub1ValuesPer = 0;
            result.forEach(function (item) {
              _this7.orlogoSub1Values.push(item["approvedValue"]);

              _this7.orlogoSub1ValuesPer += item["approvedValue"];
              _this7.orlogoSub1pepoPer += item["perfoValue"];

              _this7.orlogoSub1Names.push(item["levelName"]);
            });
            var percent = (_this7.orlogoSub1pepoPer / _this7.orlogoSub1ValuesPer * 100).toFixed(2);
            _this7.orlogoSub1Per = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0;
            _this7.sum1 = _this7.orlogoSub1Values.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this7.isSub1 = true;

            _this7.beforeOrlogoTo();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "beforeOrlogoTo",
        value: function beforeOrlogoTo() {
          var _this8 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_TO + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then(function (result) {
            _this8.beforlogoSub1ValuesPer = 0;
            result.forEach(function (item) {
              _this8.beforlogoSub1ValuesPer += item["approvedValue"];
            });
            var percent = ((_this8.sum1 - _this8.beforlogoSub1ValuesPer) / _this8.beforlogoSub1ValuesPer * 100).toFixed(2);
            _this8.beforlogoSub1Per = 0;
            _this8.beforlogoSub1Per = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "orlogoDetail",
        value: function orlogoDetail(level) {
          var _this9 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_DETAIL + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&level=" + level, null, true).then(function (result) {
            _this9.orlogoDetailList = result;

            _this9.mainService.scroll("orlogo-sub");
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_ORLOGO_DETAIL + "?year=" + this.beforeYear + "&category=" + this.params["category"] + "&level=" + level, null, true).then(function (result) {
            _this9.orlogoDetailListPer = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "render",
        value: function render(datas) {
          var chart = new _assets_canvasjs_min__WEBPACK_IMPORTED_MODULE_2__["Chart"]("chartContainer", {
            backgroundColor: "transparent",
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
            data: datas
          });
          chart.render();
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
      }, {
        key: "orlogo",
        value: function orlogo() {
          this.isEza = true;
          this.isSalbar = false;
        }
      }, {
        key: "ezaClick",
        value: function ezaClick() {
          this.isSalbar = false;
          this.isEza = true;
          this.isMain = false;
          this.isMainDe = false;
          this.getOrlogoEza();
        }
      }, {
        key: "getOrlogoEza",
        value: function getOrlogoEza() {}
      }, {
        key: "salbar",
        value: function salbar() {
          this.isMain = true;
          this.isSalbar = true;
          this.isEza = false;
          this.isMainDe = false;
        }
      }, {
        key: "changeType",
        value: function changeType(type) {
          this.isDataLoaded = type !== 'hz';
          this.showChart = type === 'hz';
          this.showChart = true;
          this.menuType = type;

          if (type === 'hz') {
            this.sheet = "Sheet21";
          } else {
            this.sheet = "Sheet4";
          }

          this.getReleaseDate(this.sheet);
        }
      }, {
        key: "getNumber",
        value: function getNumber(text) {
          return text.slice(0, text.indexOf(' '));
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.mainService.type == "APPROVED" ? "Гүйцэтгэл" : "Өмнөх оноос";
        }
      }, {
        key: "getPercentBef",
        value: function getPercentBef(item) {
          // console.log(item);
          var data = 0; // this.beFminingDatas.forEach(function(entry, index) {    
          // console.log(entry);
          // data = Math.floor(parseFloat(((item.total.slice(0, item.total.indexOf(' ')) - entry.total.slice(0, entry.total.indexOf(' '))) / item.total.slice(0, item.total.indexOf(' '))).toFixed(2)) * 100);
          // }); 

          return data;
        }
      }]);
    }();

    OrlogoComponent.ɵfac = function OrlogoComponent_Factory(t) {
      return new (t || OrlogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    OrlogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrlogoComponent,
      selectors: [["app-orlogo"]],
      hostBindings: function OrlogoComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function OrlogoComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 3,
      consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], [4, "ngIf"], [1, "budget-main-type"], [1, "last_updated"], [1, "title"], [1, "chart-text", "row", "justify-content-md-center"], [1, "orlogo", 3, "click", "mouseover"], ["src", "../../../assets/image/orlogo.PNG", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/orlogo white.PNG", "width", "100", 4, "ngIf"], ["style", "font-weight: bold;", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff", 4, "ngIf"], [1, "ndleft"], ["src", "../../../assets/image/icons/right.png", 4, "ngIf"], ["class", "chart-container1", 4, "ngIf"], [1, "zarlaga", 3, "mouseover", "click"], [1, "ndright"], ["src", "../../../assets/image/icons/left.png", 4, "ngIf"], ["src", "../../../assets/image/zarlaga.PNG", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/zarlaga dark.PNG", "width", "100", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff;", 4, "ngIf"], [3, "description", 4, "ngIf"], ["src", "../../../assets/image/orlogo.PNG", "width", "100"], ["src", "../../../assets/image/orlogo white.PNG", "width", "100"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "color", "#0081ff"], ["src", "../../../assets/image/icons/right.png"], [1, "chart-container1"], [3, "sub", "colors", "legend", "isOrlogo", "title", "sum", "prefValue", "percent", "befPercent", "values", "names"], ["src", "../../../assets/image/icons/left.png"], ["src", "../../../assets/image/zarlaga.PNG", "width", "100"], ["src", "../../../assets/image/zarlaga dark.PNG", "width", "100"], [3, "description"], [1, "budget-main"], [1, "row"], [3, "ngClass"], ["class", "chart-container", 4, "ngIf"], ["class", "col-md-8", 4, "ngIf"], [1, "backbtn", 3, "click"], ["src", "../../../assets/image/back.png"], ["class", "budget-block", 4, "ngIf"], ["class", "budget-block", "id", "orlogo-sub", 4, "ngIf"], [1, "chart-container"], [3, "sub", "title", "legend", "isOrlogo", "sum", "process", "values", "names", "prefValue", "percent", "befPercent"], [1, "col-md-8"], [2, "margin-top", "30px", "margin-bottom", "30px"], ["id", "chartContainer", 2, "height", "370px", "width", "80%"], [1, "budget-block"], [1, "block-container"], [3, "sub", "isOrlogo", "legend", "title", "sum", "values", "names", "prefValue", "percent", "befPercent"], ["id", "orlogo-sub", 1, "budget-block"], [3, "datas", "befDatas"], [1, "budget-main-invest", "investment"], ["class", "income-item", 3, "style", 4, "ngFor", "ngForOf"], [1, "income-img"], ["src", "../../../assets/image/yuluur.PNG", "alt", ""], [1, "number"], [1, "curr"], [1, "process"], [1, "budget-block", 2, "margin-top", "0px"], [1, "title", 2, "margin", "0px"], [3, "class", 4, "ngFor", "ngForOf"], [1, "main-description"], [1, "col-md-12"], [1, "col-md-9"], [1, "col-md-3"], ["href", "https://mof.gov.mn/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "../../../assets/image/desc.PNG", "alt", ""], [1, "income-item"], [1, "content"], ["alt", "", 3, "src"], [2, "color", "#fff"], ["name", "arrow-down", "class", "down-icon", "style", "color: #fff;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #fff;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#fff"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#fff"], [1, "ded-col"], [1, "ded-item"], [1, "ded-img"], [3, "src"], [1, "ded-name"], [1, "ded-detail"], [1, "ded-process"], [1, "col-md-5", "left"], [1, "col-md-7", "right", 2, "padding-right", "30px"], [1, "ded-button", 3, "mouseover"], [1, "arrow", "up"], ["class", "ded-back", 3, "style", "mouseout", 4, "ngIf"], ["name", "arrow-down", "class", "down-icon-w", "style", "position: absolute;top: 7px;color: #505054;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon-w", "style", "position: absolute;top: 7px;color: #505054;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon-w", 2, "position", "absolute", "top", "7px", "color", "#505054"], ["name", "arrow-up", 1, "down-icon-w", 2, "position", "absolute", "top", "7px", "color", "#505054"], [1, "ded-back", 3, "mouseout"]],
      template: function OrlogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrlogoComponent_ng_container_4_Template, 29, 13, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrlogoComponent_ng_container_5_Template, 19, 8, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrlogoComponent_ng_container_6_Template, 39, 8, "ng-container", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuType == "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuType == "eza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuType == "hz");
        }
      },
      directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_5__["YearChangeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _modules_ulsiintusuvcharts_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_7__["UlsiintusuvchartsComponent"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_8__["DescriptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _modules_charts_charts_component__WEBPACK_IMPORTED_MODULE_9__["ChartsComponent"], _modules_charts_simple_simple_component__WEBPACK_IMPORTED_MODULE_10__["SimpleComponent"], _orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_11__["OrlogoSubComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: [".budget-main-type[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 75px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9a9a9a;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 250px;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 250px;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  padding-bottom: 30px;\n}\n.budget-main[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background-size: cover;\n  height: 790px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: 100%;\n  margin-bottom: 20px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 450px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n  visibility: visible;\n  left: calc(50% - 100px);\n  z-index: 999;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #505054;\n  width: 180px;\n  font-weight: 600;\n  background: #fff;\n  border-radius: 30px;\n  text-transform: none;\n  border: 2px solid #505054;\n  line-height: 30px;\n  text-align: center;\n  visibility: hidden;\n  top: calc(100% + 20px);\n  padding: 5px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #505054;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n  width: 90px;\n  position: absolute;\n  bottom: 40px;\n  left: 0px;\n  right: 470px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 180px;\n  position: absolute;\n  bottom: 105px;\n  left: 0px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 56px !important;\n  font-weight: 700;\n  font-size: large;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 180px;\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.budget-main[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n  padding-bottom: 50px;\n}\n.chart-container[_ngcontent-%COMP%] {\n  margin: 30px auto;\n}\n#chartContainer[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-main-invest[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n  min-height: 700px;\n  background-image: url('bluebg1.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100% !important;\n  z-index: 0;\n}\n.budget-main-invest.investment[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: 100%;\n  margin-bottom: 20px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 45px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 480px;\n  top: 250px;\n  height: 160px;\n  border-radius: 15px;\n  position: absolute;\n  left: 0px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n  background-color: #ea5455;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 180px;\n  position: absolute;\n  bottom: 10px;\n  left: 550px;\n  right: 0;\n  color: #fff;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 45px !important;\n  font-weight: 700;\n  font-size: large;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 180px;\n  position: absolute;\n  bottom: 50px;\n  left: 800px;\n  margin: 0px auto;\n  color: #fff;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  bottom: 20px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  position: absolute;\n  padding: 10px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-block[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.ded-col[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px;\n  background-color: #fff;\n  width: 100%;\n  height: 390px;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-img[_ngcontent-%COMP%] {\n  background-color: #795446;\n  padding: 25px;\n  border-radius: 50%;\n  margin: 10px auto;\n  height: 90px;\n  width: 90px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-name[_ngcontent-%COMP%] {\n  color: #5d5d5d;\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-number[_ngcontent-%COMP%] {\n  color: #795446;\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 80%;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-detail[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-detail[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #5d5d5d;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 230px;\n  bottom: 50px;\n  left: 800px;\n  margin: 0px auto;\n  color: #5d5d5d;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #5d5d5d;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 15px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 15px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-button[_ngcontent-%COMP%] {\n  width: 50px;\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  border-top-left-radius: 40%;\n  border-top-right-radius: 40%;\n  height: 50px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-back[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 15px;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .ded-back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 2.5px;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .arrow-hr[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .arrow-hr[_ngcontent-%COMP%]:after {\n  position: absolute;\n  height: 1px;\n  top: 50%;\n  width: 100px;\n  right: -110px;\n  content: \"\";\n  border-top: 1px solid #666;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .arrow-hr[_ngcontent-%COMP%]:before {\n  position: absolute;\n  height: 1px;\n  top: 50%;\n  width: 100px;\n  left: -110px;\n  content: \"\";\n  border-top: 1px solid #666;\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n.ded-col[_ngcontent-%COMP%]   .ded-item[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n  -webkit-transform: rotate(225deg);\n}\n.backbtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 0px;\n  bottom: 50px;\n}\n@media screen and (max-width: 1680px) {\n  .budget-main-type[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 160px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 50px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 480px;\n    top: 250px;\n    height: 160px;\n    border-radius: 15px;\n    position: absolute;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    background-color: #ea5455;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 420px;\n    right: 0;\n    color: #fff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 180px;\n    position: absolute;\n    bottom: 50px;\n    left: 710px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    padding: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n.backbtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 30px;\n  bottom: 50px;\n}\n.budget-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n  visibility: visible;\n  left: calc(50% - 100px);\n  z-index: 999;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #505054;\n  width: 180px;\n  font-weight: 600;\n  background: #fff;\n  border-radius: 30px;\n  text-transform: none;\n  border: 2px solid #505054;\n  line-height: 30px;\n  text-align: center;\n  visibility: hidden;\n  top: calc(100% + 20px);\n  padding: 5px;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #505054;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.budget-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.orlogo[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 300px;\n}\n.orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 20px;\n}\n.orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.childImage[_ngcontent-%COMP%] {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  text-align: center;\n  margin: 20px auto;\n  position: relative;\n}\n.childImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  width: 35px !important;\n  margin: auto;\n}\n.grid[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n.grid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n}\n.grid[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 0px 30px;\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .col-7[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n  color: #333;\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-right: 20px;\n  padding-left: 10px;\n  text-align: left;\n  margin: 0px;\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .main[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.grid[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  overflow: hidden;\n}\n.grid[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  padding: 20px;\n  transform: rotateY(180deg);\n}\n.grid[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.grid[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.grid[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n}\n.grid[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 110%;\n}\n.grid[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.grid[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   .cur-desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.grid[_ngcontent-%COMP%]   .special-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #56c3dc;\n}\n.grid[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  border: solid #333;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 2.5px;\n}\n.grid[_ngcontent-%COMP%]   .arrow-hr[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%]   .arrow-hr[_ngcontent-%COMP%]:after {\n  position: absolute;\n  height: 1px;\n  top: 50%;\n  width: 60px;\n  right: -70px;\n  content: \"\";\n  border-top: 1px solid #505054;\n}\n.grid[_ngcontent-%COMP%]   .arrow-hr[_ngcontent-%COMP%]:before {\n  position: absolute;\n  height: 1px;\n  top: 50%;\n  width: 60px;\n  left: -70px;\n  content: \"\";\n  border-top: 1px solid #505054;\n}\n.grid[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n@media screen and (max-width: 1680px) {\n  .budget-main-type[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 130px;\n    width: 200px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 130px;\n    width: 200px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    padding-bottom: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 50px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 480px;\n    top: 250px;\n    height: 160px;\n    border-radius: 15px;\n    position: absolute;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    background-color: #ea5455;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 380px;\n    right: 0;\n    color: #fff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 180px;\n    position: absolute;\n    bottom: 50px;\n    left: 670px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    padding: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 50px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 480px;\n    top: 250px;\n    height: 160px;\n    border-radius: 15px;\n    position: absolute;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    background-color: #ea5455;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 300px;\n    right: 0;\n    color: #fff;\n    font-size: 15px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 180px;\n    position: absolute;\n    bottom: 50px;\n    left: 590px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    padding: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .budget-main-type[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 50px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 480px;\n    top: 250px;\n    height: 160px;\n    border-radius: 15px;\n    position: absolute;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    background-color: #ea5455;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 260px;\n    right: 0;\n    color: #fff;\n    font-size: 15px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 180px;\n    position: absolute;\n    bottom: 50px;\n    left: 556px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    padding: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .budget-main-type[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 180px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 20px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 50px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 480px;\n    top: 250px;\n    height: 160px;\n    border-radius: 15px;\n    position: absolute;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    background-color: #ea5455;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 260px;\n    right: 0;\n    color: #fff;\n    font-size: 15px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 180px;\n    position: absolute;\n    bottom: 50px;\n    left: 556px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    padding: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .budget-main-type[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 130px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 90px;\n    width: 130px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -15px;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 10px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 50px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .backbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    float: right;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 480px;\n    top: 250px;\n    height: 160px;\n    border-radius: 15px;\n    position: absolute;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n    background-color: #ea5455;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 130px;\n    right: 0;\n    color: #fff;\n    font-size: 14px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 35px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 180px;\n    position: absolute;\n    bottom: 50px;\n    left: 430px;\n    font-size: 13px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    bottom: 0px;\n    right: 0;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    padding: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 15px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-weight: bold;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .income-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .budget-main-type[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 60px;\n    width: 130px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 60px;\n    width: 130px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -15px;\n    top: 50%;\n    width: 0px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    padding-bottom: 10px;\n  }\n  .budget-main-type[_ngcontent-%COMP%]   .chart-container1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L29ybG9nby9vcmxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1ZGdldC9vcmxvZ28vb3Jsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ0ZKO0FEUVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ05aO0FEUVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNOWjtBRE9ZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTGhCO0FETWdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNKcEI7QURLb0I7RUFDSSxXQUFBO0FDSHhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMaEI7QURNZ0I7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0pwQjtBREtvQjtFQUNJLFdBQUE7QUNIeEI7QURPWTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ0xoQjtBRHVCQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDckJKO0FEc0JJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDcEJSO0FEc0JZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCaEI7QUR1QlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDckJaO0FEdUJRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FD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QTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDMU50QjtFRDJOc0I7SUFDSSxXQUFBO0VDek4xQjtFRDROa0I7SUFDSSxlQUFBO0VDMU50QjtFRDZOYztJQUNJLFdBQUE7SUFDQSxvQkFBQTtFQzNObEI7RUR5T007SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDdk9WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idWRnZXQvb3Jsb2dvL29ybG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIFxuLmJ1ZGdldC1tYWluLXR5cGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAvLyBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgIC50aXRsZXtcbiAgICAgICAgXG4gICAgICAgIGgze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnQtdGV4dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnphcmxhZ2F7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgIC5waWVfY2hhcnR7XG4gICAgICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG4uYnVkZ2V0LW1haW57XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDc5MHB4O1xuICAgICYuemFybGFnYXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW1nLm1haW57XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoM3tcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnphcmxhZ2EtaXRlbXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZS1zaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7ICBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7IGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogNDcwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwNXB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NnB4ICAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDUwcHggO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ1ZGdldC1tYWlue1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIC50aXRsZSB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmNoYXJ0LWNvbnRhaW5lcntcbiAgICBcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cbiNjaGFydENvbnRhaW5lcntcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuLm1haW4tZGVzY3JpcHRpb257XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICAgIHB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5idWRnZXQtbWFpbi1pbnZlc3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9zcmMvYXNzZXRzL2ltYWdlL2JnL2JsdWViZzEucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgICYuaW52ZXN0bWVudHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfSAgICBcbiAgICAudGl0bGV7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLnRvdGFse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbiAgICB9XG4gICAgLm51bWJlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4IDtcbiAgICAgICAgbGVmdDogNTUwcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAvLyBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5jdXJye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9jZXNze1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDUwcHggO1xuICAgICAgICBsZWZ0OiA4MDBweDtcbiAgICAgICAgLy8gcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICAuaXRlbXN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmluY29tZS1pbWcge1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIC5pbmNvbWUtaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFpbi1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgcHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmJ1ZGdldC1ibG9jaz5oMyB7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4udGl0bGUge1xuICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG4uZGVkLWNvbHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAuZGVkLWl0ZW17XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzkwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAuZGVkLWltZ3tcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU0NDY7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcblxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGVkLW5hbWV7XG4gICAgICAgICAgICBjb2xvcjogIzVkNWQ1ZDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5kZWQtbnVtYmVye1xuICAgICAgICAgICAgY29sb3I6ICM3OTU0NDY7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZC1kZXRhaWx7XG4gICAgICAgICAgICBie1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZC1wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiA4MDBweDtcbiAgICAgICAgICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICM1ZDVkNWQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzVkNWQ1ZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZWQtYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MCU7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWQtYmFja3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuYXJyb3ctaHJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFycm93LWhyOmFmdGVye1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICByaWdodDogLTExMHB4O1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFycm93LWhyOmJlZm9yZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgbGVmdDogLTExMHB4O1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRvd24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfSAgXG4gICAgICAgICAgLnVwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgfSBcbiAgICB9XG59XG4uYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogNTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWluLXR5cGV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgICAgICAvLyBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICAucGllX2NoYXJ0e1xuICAgICAgICAgICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2hhcnQtY29udGFpbmVyMXtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ1ZGdldC1tYWluLWludmVzdHtcbiAgICAgICAgLmJhY2tidG57XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnRvdGFse1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwcHggO1xuICAgICAgICAgICAgbGVmdDogNDIwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDUwcHggO1xuICAgICAgICAgICAgbGVmdDogNzEwcHg7XG4gICAgICAgICAgICAvLyByaWdodDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbXN7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmluY29tZS1pbWcge1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuaW5jb21lLWl0ZW17XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmJhY2tidG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiA1MHB4O1xufVxuLmJ1ZGdldC1jb250ZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY29udGVudHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmFuaW1hdGUtc2hvd3tcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgIFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgIFxuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxufVxuLm9ybG9nb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICB3aWR0aDozMDBweDtcbiAgICAubmRsZWZ0e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmNoaWxkSW1hZ2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDM1cHghaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuXG4uZ3JpZHtcbiAgICBtYXQtZ3JpZC10aWxle1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XG4gICAgfVxuICAgIC5pdGVte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAucm93e1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb2wtN3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICBcbiAgICAgICAgfVxuICAgICAgICAuY29sLTV7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoNXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pdGVtIC5tYWlue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIH1cbiAgICAgIC5pdGVtOmhvdmVyIC5tYWluIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG4gICAgICAuZnJvbnQsIC5iYWNre1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5iYWNrIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAuc3BlY2lhbC10ZXh0e1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5jdXJyZW5jeXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmN1ci10ZXh0e1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgLmN1ci1kZXNje1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGIge1xuICAgICAgICAgICAgY29sb3I6ICM1NmMzZGM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFycm93IHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjMzMzO1xuICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIuNXB4O1xuICAgICAgfVxuICAgICAgLmFycm93LWhye1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5hcnJvdy1ocjphZnRlcntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgcmlnaHQ6IC03MHB4O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICB9XG4gICAgICAuYXJyb3ctaHI6YmVmb3Jle1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBsZWZ0OiAtNzBweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgfVxuICAgICAgLmRvd24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICAuYnVkZ2V0LW1haW4tdHlwZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kbGVmdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgLnBpZV9jaGFydHtcbiAgICAgICAgICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcjF7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KXtcbiAgICAuYnVkZ2V0LW1haW4taW52ZXN0e1xuICAgICAgICAuYmFja2J0bntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudG90YWx7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNDgwcHg7XG4gICAgICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweCA7XG4gICAgICAgICAgICBsZWZ0OiAzODBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgLy8gbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiA2NzBweDtcbiAgICAgICAgICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5jb21lLWltZyB7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5pbmNvbWUtaXRlbXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5idWRnZXQtbWFpbi1pbnZlc3R7XG4gICAgICAgIC5iYWNrYnRue1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC50b3RhbHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgIHRvcDogMjUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDMwMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAvLyBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXJye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDU5MHB4O1xuICAgICAgICAgICAgLy8gcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbmNvbWUtaW1nIHtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmluY29tZS1pdGVte1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5idWRnZXQtbWFpbi10eXBle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQtdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnphcmxhZ2F7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgLnBpZV9jaGFydHtcbiAgICAgICAgICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcjF7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAuYnVkZ2V0LW1haW4taW52ZXN0e1xuICAgICAgICAuYmFja2J0bntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudG90YWx7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNDgwcHg7XG4gICAgICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweCA7XG4gICAgICAgICAgICBsZWZ0OiAyNjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgLy8gbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiA1NTZweDtcbiAgICAgICAgICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5jb21lLWltZyB7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5pbmNvbWUtaXRlbXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnVkZ2V0LW1haW4tdHlwZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIC5waWVfY2hhcnR7XG4gICAgICAgICAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jaGFydC1jb250YWluZXIxe1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAuYnVkZ2V0LW1haW4taW52ZXN0e1xuICAgICAgICAuYmFja2J0bntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAudG90YWx7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNDgwcHg7XG4gICAgICAgICAgICB0b3A6IDI1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweCA7XG4gICAgICAgICAgICBsZWZ0OiAyNjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgLy8gbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiA1NTZweDtcbiAgICAgICAgICAgIC8vIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5jb21lLWltZyB7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5pbmNvbWUtaXRlbXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnVkZ2V0LW1haW4tdHlwZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEzMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnphcmxhZ2F7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTMwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgLnBpZV9jaGFydHtcbiAgICAgICAgICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcjF7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJ1ZGdldC1tYWluLWludmVzdHtcbiAgICAgICAgLmJhY2tidG57XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnRvdGFse1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAgICAgdG9wOiAyNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwcHggO1xuICAgICAgICAgICAgbGVmdDogMTMwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweCAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDQzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgLy8gcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbmNvbWUtaW1nIHtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmluY29tZS1pdGVte1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5idWRnZXQtbWFpbi10eXBle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQtdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTMwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICAucGllX2NoYXJ0e1xuICAgICAgICAgICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2hhcnQtY29udGFpbmVyMXtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59IiwiLmJ1ZGdldC1tYWluLXR5cGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xufVxuLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIGgzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA4MWZmO1xufVxuLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlhOWE5YTtcbn1cbi5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDE3MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG4uYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uYnVkZ2V0LW1haW4ge1xuICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA3OTBweDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAudGl0bGUgaDMge1xuICBjb2xvcjogIzAwODFmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLm1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudDpob3ZlciAuYW5pbWF0ZS1zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIHdpZHRoOiAxODBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSBpbWcuYm90dG9tX2ljb24ge1xuICB3aWR0aDogOTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQ3MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTA1cHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgLmN1cnIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5wcm9jZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5idWRnZXQtbWFpbiB7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDA4MWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uY2hhcnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbiNjaGFydENvbnRhaW5lciB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5tYWluLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLm1haW4tZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnVkZ2V0LW1haW4taW52ZXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9zcmMvYXNzZXRzL2ltYWdlL2JnL2JsdWViZzEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAwO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdC5pbnZlc3RtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC50aXRsZSBoMyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwODFmZjtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAudG90YWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0ODBweDtcbiAgdG9wOiAyNTBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNTUwcHg7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciAuY3VyciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5wcm9jZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiA4MDBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAyMHB4O1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTIwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1haW4tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG59XG4ubWFpbi1kZXNjcmlwdGlvbiBwIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW4tZGVzY3JpcHRpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idWRnZXQtYmxvY2sgPiBoMyB7XG4gIGNvbG9yOiAjMDA4MWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRpdGxlIGgzIHtcbiAgY29sb3I6ICMwMDgxZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlZC1jb2wge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cbi5kZWQtY29sIC5kZWQtaXRlbSAuZGVkLWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU0NDY7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmRlZC1pbWcgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmRlZC1uYW1lIHtcbiAgY29sb3I6ICM1ZDVkNWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5kZWQtY29sIC5kZWQtaXRlbSAuZGVkLW51bWJlciB7XG4gIGNvbG9yOiAjNzk1NDQ2O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogODAlO1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC5kZWQtZGV0YWlsIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmRlZC1kZXRhaWwgYiB7XG4gIGNvbG9yOiAjNWQ1ZDVkO1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC5kZWQtcHJvY2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDIzMHB4O1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDgwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogIzVkNWQ1ZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWQ1ZDVkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmRlZC1wcm9jZXNzIC5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC5kZWQtcHJvY2VzcyAucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC5kZWQtYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC5kZWQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cbi5kZWQtY29sIC5kZWQtaXRlbSAuZGVkLWJhY2sgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC5hcnJvdyB7XG4gIGJvcmRlcjogc29saWQgI2ZmZjtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyLjVweDtcbn1cbi5kZWQtY29sIC5kZWQtaXRlbSAuYXJyb3ctaHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmFycm93LWhyOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgcmlnaHQ6IC0xMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmFycm93LWhyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGxlZnQ6IC0xMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY7XG59XG4uZGVkLWNvbCAuZGVkLWl0ZW0gLmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmRlZC1jb2wgLmRlZC1pdGVtIC51cCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn1cblxuLmJhY2tidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgLmJ1ZGdldC1tYWluLXR5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAuY2hhcnQtY29udGFpbmVyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC50aXRsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRvdGFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ4MHB4O1xuICAgIHRvcDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDQyMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIC5jdXJyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogNzEwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pbWcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbi5iYWNrYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDUwcHg7XG59XG5cbi5idWRnZXQtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idWRnZXQtY29udGVudCAuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYnVkZ2V0LWNvbnRlbnQgLmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICB6LWluZGV4OiA5OTk7XG59XG4uYnVkZ2V0LWNvbnRlbnQgLmNvbnRlbnQgLmFuaW1hdGUtc2hvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIHdpZHRoOiAxODBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmJ1ZGdldC1jb250ZW50IC5jb250ZW50IC5hbmltYXRlLXNob3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmJ1ZGdldC1jb250ZW50IC5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idWRnZXQtY29udGVudCAuY29udGVudCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1ZGdldC1jb250ZW50IC5jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1ZGdldC1jb250ZW50IC5jb250ZW50IHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ub3Jsb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLm9ybG9nbyAubmRsZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xufVxuLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uY2hpbGRJbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGlsZEltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmdyaWQgbWF0LWdyaWQtdGlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ncmlkIGg0IHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ncmlkIGg1IHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59XG4uZ3JpZCAuaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JpZCAuaXRlbSAucm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmdyaWQgLml0ZW0gLmNvbC03IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzMzMztcbn1cbi5ncmlkIC5pdGVtIC5jb2wtNSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdyaWQgLml0ZW0gLmNvbC01IGg1IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZ3JpZCAuaXRlbSAubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmdyaWQgLml0ZW06aG92ZXIgLm1haW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5ncmlkIC5mcm9udCwgLmdyaWQgLmJhY2sge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZ3JpZCAuYmFjayB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmdyaWQgLmJhY2sgaDEge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZ3JpZCAuYmFjayBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmdyaWQgLnNwZWNpYWwtdGV4dCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmlkIC5zcGVjaWFsLXRleHQgLmN1cnJlbmN5IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG59XG4uZ3JpZCAuc3BlY2lhbC10ZXh0IC5jdXItdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5ncmlkIC5zcGVjaWFsLXRleHQgLmN1ci1kZXNjIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmdyaWQgLnNwZWNpYWwtdGV4dCBiIHtcbiAgY29sb3I6ICM1NmMzZGM7XG59XG4uZ3JpZCAuYXJyb3cge1xuICBib3JkZXI6IHNvbGlkICMzMzM7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMi41cHg7XG59XG4uZ3JpZCAuYXJyb3ctaHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCAuYXJyb3ctaHI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIHJpZ2h0OiAtNzBweDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MDUwNTQ7XG59XG4uZ3JpZCAuYXJyb3ctaHI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBsZWZ0OiAtNzBweDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MDUwNTQ7XG59XG4uZ3JpZCAuZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAuYnVkZ2V0LW1haW4tdHlwZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YTlhOWE7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSBzcGFuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IGltZyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLmNoYXJ0LWNvbnRhaW5lcjEge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmJhY2tidG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudG90YWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDgwcHg7XG4gICAgdG9wOiAyNTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMzgwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgLmN1cnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5wcm9jZXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBsZWZ0OiA2NzBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWltZyBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmJhY2tidG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudG90YWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDgwcHg7XG4gICAgdG9wOiAyNTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMzAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIC5jdXJyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogNTkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pbWcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4tdHlwZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YTlhOWE7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Egc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC5jaGFydC1jb250YWluZXIxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC50aXRsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRvdGFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ4MHB4O1xuICAgIHRvcDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE1NDU1O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDI2MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnByb2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIGxlZnQ6IDU1NnB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaW1nIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmJ1ZGdldC1tYWluLXR5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAuY2hhcnQtY29udGFpbmVyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogNTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudGl0bGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC50b3RhbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0ODBweDtcbiAgICB0b3A6IDI1MHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNTQ1NTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAyNjBweDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5udW1iZXIgLmN1cnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5wcm9jZXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBsZWZ0OiA1NTZweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaXRlbXMgZGl2LmNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWltZyBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuaW5jb21lLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC5idWRnZXQtbWFpbi10eXBlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAuY2hhcnQtY29udGFpbmVyMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ1ZGdldC1tYWluLWludmVzdCAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogNTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5iYWNrYnRuIGltZyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudG90YWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDgwcHg7XG4gICAgdG9wOiAyNTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTU0NTU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTMwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAubnVtYmVyIC5jdXJyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogNDMwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLml0ZW1zIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pdGVtcyBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaW1nIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLmluY29tZS1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4taW52ZXN0IC5pbmNvbWUtaXRlbSBkaXYuY29udGVudCBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmJ1ZGdldC1tYWluLXR5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLXR5cGUgLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQgaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4tdHlwZSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Egc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi10eXBlIC5jaGFydC1jb250YWluZXIxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrlogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orlogo',
          templateUrl: './orlogo.component.html',
          styleUrls: ['./orlogo.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/budget/orlogo/orlogo.module.ts":
  /*!************************************************!*\
    !*** ./src/app/budget/orlogo/orlogo.module.ts ***!
    \************************************************/

  /*! exports provided: OrlogoModule */

  /***/
  function _src_app_budget_orlogo_orlogoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrlogoModule", function () {
      return OrlogoModule;
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


    var _orlogo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orlogo.component */
    "./src/app/budget/orlogo/orlogo.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orlogo-sub/orlogo-sub.component */
    "./src/app/budget/orlogo/orlogo-sub/orlogo-sub.component.ts");
    /* harmony import */


    var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/year-change/year-change.module */
    "./src/app/modules/year-change/year-change.module.ts");
    /* harmony import */


    var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modules/description/description.module */
    "./src/app/modules/description/description.module.ts");
    /* harmony import */


    var src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modules/charts/charts.module */
    "./src/app/modules/charts/charts.module.ts");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module */
    "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module.ts");

    var routes = [{
      path: '',
      component: _orlogo_component__WEBPACK_IMPORTED_MODULE_2__["OrlogoComponent"]
    }];

    var OrlogoModule = /*#__PURE__*/_createClass(function OrlogoModule() {
      _classCallCheck(this, OrlogoModule);
    });

    OrlogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrlogoModule
    });
    OrlogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrlogoModule_Factory(t) {
        return new (t || OrlogoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_10__["UlsiintusuvchartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrlogoModule, {
        declarations: [_orlogo_component__WEBPACK_IMPORTED_MODULE_2__["OrlogoComponent"], _orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_4__["OrlogoSubComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_10__["UlsiintusuvchartsModule"]],
        exports: [_orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_4__["OrlogoSubComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrlogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_orlogo_component__WEBPACK_IMPORTED_MODULE_2__["OrlogoComponent"], _orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_4__["OrlogoSubComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], src_app_modules_ulsiintusuvcharts_ulsiintusuvcharts_module__WEBPACK_IMPORTED_MODULE_10__["UlsiintusuvchartsModule"]],
          exports: [_orlogo_sub_orlogo_sub_component__WEBPACK_IMPORTED_MODULE_4__["OrlogoSubComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~orlogo-orlogo-module~ulsiintusuv-ulsiintusuv-module-es5.js.map