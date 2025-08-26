function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ndaatgal-ndaatgal-module"], {
  /***/
  "./src/app/budget/ndaatgal/nchart/nchart.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/budget/ndaatgal/nchart/nchart.component.ts ***!
    \************************************************************/

  /*! exports provided: NchartComponent */

  /***/
  function _src_app_budget_ndaatgal_nchart_nchartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NchartComponent", function () {
      return NchartComponent;
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


    var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../modules/simple-number/simple-number.component */
    "./src/app/modules/simple-number/simple-number.component.ts");

    var _c0 = ["chart"];

    function NchartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-simple-number", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("text-align:center; width: ", ctx_r0.width, "px;");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("labels", ctx_r0.chartOptions.labels)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("title", ctx_r0.chartOptions.title)("legend", ctx_r0.chartOptions.legend)("plotOptions", ctx_r0.chartOptions.plotOptions)("colors", ctx_r0.chartOptions.colors)("stroke", ctx_r0.chartOptions.stroke)("dataLabels", ctx_r0.chartOptions.dataLabels)("tooltip", ctx_r0.chartOptions.tooltip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImagePath("budget/main/small_m.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text1", ctx_r0.title)("text2", "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433")("baseNumber", ctx_r0.sum)("color", ctx_r0.colors[0])("percent", ctx_r0.percentChart)("befPercent", ctx_r0.befpercentChart)("prefValue", ctx_r0.prefValueChart);
      }
    }

    var NchartComponent = /*#__PURE__*/function () {
      function NchartComponent(mainService) {
        _classCallCheck(this, NchartComponent);

        this.mainService = mainService;
        this.isDataLoaded = false;
        this.colors = [];
        this.width = 0;
        this.labelWidth = 0;
        this.fontSize = "13px";
      }

      return _createClass(NchartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getWidth();

          var handleSelect = function handleSelect(event, chartContext, config) {
            _this.mainService.ndeSub(_this.sub);
          };

          this.chartOptions = {
            series: this.values,
            chart: {
              width: "100%",
              type: "donut",
              fontFamily: 'Montserrat, sans-serif',
              events: {
                legendClick: function legendClick(chartContext, seriesIndex, config) {
                  console.log(seriesIndex);
                },
                dataPointSelection: handleSelect
              }
            },
            dataLabels: {
              enabled: true,
              style: {
                fontSize: '16px'
              },
              dropShadow: {
                enabled: false
              }
            },
            labels: this.names,
            colors: this.colors,
            stroke: {
              width: 0
            },
            legend: {
              show: this.legend,
              position: "bottom",
              width: this.labelWidth,
              horizontalAlign: 'left',
              offsetX: 100,
              fontSize: this.fontSize,
              markers: {
                radius: 0
              }
            },
            tooltip: {
              enabled: true,
              y: {
                formatter: function formatter(value, series) {
                  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                },
                title: {
                  formatter: function formatter(seriesName) {
                    return "";
                  }
                }
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  enabled: false,
                  enabledOnSeries: undefined,
                  formatter: function formatter(val, opts) {
                    return val;
                  },
                  textAnchor: 'middle',
                  distributed: false,
                  offsetX: 0,
                  offsetY: 0,
                  style: {
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: undefined
                  },
                  background: {
                    enabled: true,
                    foreColor: '#fff',
                    padding: 4,
                    borderRadius: 2,
                    borderWidth: 1,
                    borderColor: '#fff',
                    opacity: 0.9,
                    dropShadow: {
                      enabled: false,
                      top: 1,
                      left: 1,
                      blur: 1,
                      color: '#fff',
                      opacity: 0.45
                    }
                  },
                  dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#fff',
                    opacity: 0.45
                  }
                },
                donut: {
                  size: '75%'
                }
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: "bottom"
                }
              }
            }]
          };
          this.isDataLoaded = true;
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 1680 && this.screenWidth > 1440) {
            if (!this.legend) {
              this.width = 450;
            } else {
              this.labelWidth = 350;
              this.fontSize = "10px";
              this.width = 600;
            }
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1200) {
            if (!this.legend) {
              this.width = 350;
            } else {
              this.labelWidth = 350;
              this.fontSize = "9px";
              this.width = 480;
            }
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            if (!this.legend) {
              this.width = 300;
            } else {
              this.labelWidth = 350;
              this.fontSize = "9px";
              this.width = 440;
            }
          } else {
            if (!this.legend) {
              this.width = 500;
            } else {
              this.width = 600;
            }
          }
        }
      }, {
        key: "getImagePath",
        value: function getImagePath(imagePath) {
          return src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].getImagePath(imagePath);
        }
      }]);
    }();

    NchartComponent.ɵfac = function NchartComponent_Factory(t) {
      return new (t || NchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]));
    };

    NchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NchartComponent,
      selectors: [["app-nchart"]],
      viewQuery: function NchartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      inputs: {
        values: "values",
        names: "names",
        title: "title",
        sub: "sub",
        sum: "sum",
        process: "process",
        percentChart: "percentChart",
        befpercentChart: "befpercentChart",
        prefValueChart: "prefValueChart",
        colors: "colors",
        legend: "legend"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "pie_chart center", 3, "style", 4, "ngIf"], [1, "pie_chart", "center"], [3, "series", "labels", "chart", "xaxis", "title", "legend", "plotOptions", "colors", "stroke", "dataLabels", "tooltip"], [1, "chart_text"], [1, "m_l", 3, "src"], [1, "orlogo", 3, "text1", "text2", "baseNumber", "color", "percent", "befPercent", "prefValue"]],
      template: function NchartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NchartComponent_div_0_Template, 5, 22, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _modules_simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_4__["SimpleNumberComponent"]],
      styles: [".apexcharts-legend-marker[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n\n.pie_chart[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pie_chart.center[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n  margin: 60px auto 0px;\n  text-align: center;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: -15px;\n  width: 200px;\n  color: #999;\n  font-weight: bold;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65px;\n  display: block;\n  margin: 0px auto 30px;\n  opacity: 0;\n  z-index: -1;\n  display: none;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-block;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  background-color: #28c66f;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #28c66f;\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 80%;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #505054;\n  margin-top: 10px;\n  padding: 5px;\n  text-transform: none;\n}\n\n@media screen and (max-width: 1680px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50px;\n    width: 200px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n\n@media screen and (max-width: 1440px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 30px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L25kYWF0Z2FsL25jaGFydC9uY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1ZGdldC9uZGFhdGdhbC9uY2hhcnQvbmNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUVJLGtCQUFBO0FDQ0o7O0FEQUk7RUFDSSxnQkFBQTtBQ0VSOztBREFJO0VBQ0kscUJBQUE7RUFTQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRFRRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1daOztBREFRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQ0VaOztBREFRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFWjs7QURBUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VaOztBREVRO0VBQ0ksY0FBQTtBQ0FaOztBRElJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNGUjs7QURPQTtFQUNJO0lBQ0ksa0JBQUE7RUNKTjtFREtNO0lBQ0ksZ0JBQUE7RUNIVjtFREtNO0lBQ0ksMkJBQUE7RUNIVjtFREtNO0lBQ0ksY0FBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNIVjtFREtNO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDSFY7RURJVTtJQUNJLGdCQUFBO0lBQ0EscUJBQUE7RUNGZDtFRElVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNGZDtFRElVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ0ZkO0VESVU7SUFDSSxjQUFBO0VDRmQ7RURNTTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDSlY7QUFDRjs7QURVQTtFQUNJO0lBQ0ksa0JBQUE7RUNSTjtFRFNNO0lBQ0ksZ0JBQUE7RUNQVjtFRFNNO0lBQ0ksMkJBQUE7RUNQVjtFRFNNO0lBQ0ksY0FBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNQVjtFRFNNO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDUFY7RURRVTtJQUNJLGdCQUFBO0lBQ0EscUJBQUE7RUNOZDtFRFFVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNOZDtFRFFVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ05kO0VEUVU7SUFDSSxjQUFBO0VDTmQ7RURVTTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDUlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC9uZGFhdGdhbC9uY2hhcnQvbmNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwZXhjaGFydHMtbGVnZW5kLW1hcmtlcntcbiAgICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50O1xufVxuLnBpZV9jaGFydHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLmNlbnRlcntcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICB9XG4gICAgLmNoYXJ0X3RleHR7XG4gICAgICAgIG1hcmdpbjogNjBweCBhdXRvIDBweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMzBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcblxuICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDR7XG4gICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ7XG4gICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICAucHJvY2Vzc3tcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG4gICAgLnBpZV9jaGFydHsgICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5jZW50ZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgJi5vcmxvZ29fbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5waWVfY2hhcnR7ICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYuY2VudGVye1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bzsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICYub3Jsb2dvX20ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBie1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCIuYXBleGNoYXJ0cy1sZWdlbmQtbWFya2VyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5waWVfY2hhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGllX2NoYXJ0LmNlbnRlciB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IHtcbiAgbWFyZ2luOiA2MHB4IGF1dG8gMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IC0xNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaW1nIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvIDMwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAuaGVscCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgY29sb3I6ICMyOGM2NmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MCU7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IGIge1xuICBjb2xvcjogIzI4YzY2Zjtcbn1cbi5waWVfY2hhcnQgLnByb2Nlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAucGllX2NoYXJ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnBpZV9jaGFydC5jZW50ZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLnBpZV9jaGFydC5vcmxvZ29fbSB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5waWVfY2hhcnQgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNDVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBoNCB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgYiB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gIH1cbiAgLnBpZV9jaGFydCAucHJvY2VzcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5waWVfY2hhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucGllX2NoYXJ0LmNlbnRlciB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAucGllX2NoYXJ0Lm9ybG9nb19tIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBpZV9jaGFydCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC00NXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMzBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IC5oZWxwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgfVxuICAucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NchartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nchart',
          templateUrl: './nchart.component.html',
          styleUrls: ['./nchart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
        }];
      }, {
        values: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        names: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sub: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sum: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        process: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        percentChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        befpercentChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prefValueChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        legend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["chart"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/budget/ndaatgal/ndaatgal.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/budget/ndaatgal/ndaatgal.component.ts ***!
    \*******************************************************/

  /*! exports provided: NdaatgalComponent */

  /***/
  function _src_app_budget_ndaatgal_ndaatgalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NdaatgalComponent", function () {
      return NdaatgalComponent;
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


    var _nchart_nchart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nchart/nchart.component */
    "./src/app/budget/ndaatgal/nchart/nchart.component.ts");
    /* harmony import */


    var _modules_grid_img_grid_img_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../modules/grid-img/grid-img.component */
    "./src/app/modules/grid-img/grid-img.component.ts");

    function NdaatgalComponent_div_4_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function NdaatgalComponent_div_4_img_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
      }
    }

    function NdaatgalComponent_div_4_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NdaatgalComponent_div_4_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NdaatgalComponent_div_4_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
      }
    }

    var _c0 = function _c0() {
      return ["#28c66f"];
    };

    function NdaatgalComponent_div_4_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nchart", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("legend", ctx_r16.isLegend)("sub", 0)("legend", false)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r16.sum)("process", ctx_r16.process)("values", ctx_r16.orlogoValues)("names", ctx_r16.orlogoNames)("befpercentChart", ctx_r16.percentChartOrlogo)("percentChart", ctx_r16.percentChart)("prefValueChart", ctx_r16.prefValueChart);
      }
    }

    function NdaatgalComponent_div_4_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NdaatgalComponent_div_4_div_16_div_1_Template, 3, 13, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isDataLoaded);
      }
    }

    var _c1 = function _c1() {
      return ["#ea5455"];
    };

    function NdaatgalComponent_div_4_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nchart", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("legend", ctx_r17.isLegend)("sub", 1)("legend", false)("title", "\u041D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430")("sum", ctx_r17.sumZarlaga)("process", ctx_r17.process)("values", ctx_r17.zarlagaValues)("names", ctx_r17.zarlagaNames)("befpercentChart", ctx_r17.percentChartZar)("percentChart", ctx_r17.percentChartZarlaga)("prefValueChart", ctx_r17.prefValueChartZarlaga);
      }
    }

    function NdaatgalComponent_div_4_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NdaatgalComponent_div_4_div_17_div_1_Template, 3, 13, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isDataLoaded);
      }
    }

    function NdaatgalComponent_div_4_img_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
      }
    }

    function NdaatgalComponent_div_4_img_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
      }
    }

    function NdaatgalComponent_div_4_img_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
      }
    }

    function NdaatgalComponent_div_4_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NdaatgalComponent_div_4_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NdaatgalComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0438\u0439\u0433\u043C\u0438\u0439\u043D \u0434\u0430\u0430\u0442\u0433\u0430\u043B\u044B\u043D \u0441\u0430\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NdaatgalComponent_div_4_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.orlogoClick();
        })("mouseover", function NdaatgalComponent_div_4_Template_div_mouseover_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.orlogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NdaatgalComponent_div_4_img_9_Template, 1, 0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NdaatgalComponent_div_4_img_10_Template, 1, 0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NdaatgalComponent_div_4_span_12_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NdaatgalComponent_div_4_span_13_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NdaatgalComponent_div_4_img_15_Template, 1, 0, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NdaatgalComponent_div_4_div_16_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NdaatgalComponent_div_4_div_17_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NdaatgalComponent_div_4_Template_div_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.zarlagaClick();
        })("mouseover", function NdaatgalComponent_div_4_Template_div_mouseover_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.zarlaga();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NdaatgalComponent_div_4_img_20_Template, 1, 0, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NdaatgalComponent_div_4_img_22_Template, 1, 0, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NdaatgalComponent_div_4_img_23_Template, 1, 0, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NdaatgalComponent_div_4_span_25_Template, 2, 0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NdaatgalComponent_div_4_span_26_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041C\u044D\u0434\u044D\u044D\u043B\u044D\u043B \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0433\u0434\u0441\u044D\u043D: ", ctx_r0.updateDate, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMainChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMainChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMainChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMainChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMainChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMainChart);
      }
    }

    function NdaatgalComponent_div_5_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function NdaatgalComponent_div_5_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
      }
    }

    function NdaatgalComponent_div_5_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NdaatgalComponent_div_5_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NdaatgalComponent_div_5_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
      }
    }

    var _c2 = function _c2() {
      return ["#28c66f", "#ea5455", "#018ffb", "#b755ea", "#6639b6", "#795448"];
    };

    function NdaatgalComponent_div_5_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nchart", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2))("legend", ctx_r29.isLegend)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r29.sumSub)("process", ctx_r29.process)("values", ctx_r29.orlogoTypeValues)("befpercentChart", ctx_r29.percentChartOrlogo)("names", ctx_r29.orlogoTypeNames)("percentChart", ctx_r29.percentChartSub)("prefValueChart", ctx_r29.prefValueChartSub);
      }
    }

    function NdaatgalComponent_div_5_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NdaatgalComponent_div_5_div_14_div_1_Template, 2, 11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.isInDataLoaded);
      }
    }

    function NdaatgalComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0438\u0439\u0433\u043C\u0438\u0439\u043D \u0434\u0430\u0430\u0442\u0433\u0430\u043B\u044B\u043D \u0441\u0430\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NdaatgalComponent_div_5_img_7_Template, 1, 0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NdaatgalComponent_div_5_img_8_Template, 1, 0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NdaatgalComponent_div_5_span_10_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NdaatgalComponent_div_5_span_11_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NdaatgalComponent_div_5_img_13_Template, 1, 0, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NdaatgalComponent_div_5_div_14_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NdaatgalComponent_div_5_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.zarlagaClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NdaatgalComponent_div_5_Template_div_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.orlogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMainSub);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMainSub);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMainSub);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isTypeOrlogo);
      }
    }

    function NdaatgalComponent_div_6_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r33.appValueTotal), " ");
      }
    }

    function NdaatgalComponent_div_6_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0442\u044D\u0440\u0431\u0443\u043C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r34.percentChartZarlaga, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r34.prefValueTotal), " ");
      }
    }

    function NdaatgalComponent_div_6_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.percentChartZar, "% ");
      }
    }

    function NdaatgalComponent_div_6_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NdaatgalComponent_div_6_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var i_r38 = ctx.index;
          var salbar_r37 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r39.showSalbar(i_r38, salbar_r37.level);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var salbar_r37 = ctx.$implicit;
        var i_r38 = ctx.index;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate3"]("background: ", ctx_r36.colors[i_r38], ";", ctx_r36.ndaatgalPos[i_r38], "", ctx_r36.widths[i_r38], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/image/budget/ndaatgal/nd_", salbar_r37.level, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", salbar_r37.calcPercent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](salbar_r37.levelName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, salbar_r37.approvedValue), " \u0442\u044D\u0440\u0431\u0443\u043C \u20AE ");
      }
    }

    function NdaatgalComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0438\u0439\u0433\u043C\u0438\u0439\u043D \u0434\u0430\u0430\u0442\u0433\u0430\u043B\u044B\u043D \u0441\u0430\u043D \u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NdaatgalComponent_div_6_div_9_Template, 3, 3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NdaatgalComponent_div_6_span_12_Template, 8, 4, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NdaatgalComponent_div_6_span_13_Template, 4, 1, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NdaatgalComponent_div_6_div_14_Template, 12, 11, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NdaatgalComponent_div_6_Template_div_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.orlogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.appValueTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.prefValueTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.params["category"] != "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.zarlagaSalbar);
      }
    }

    function NdaatgalComponent_div_7_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "module-grid-img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var salbar_r44 = ctx.$implicit;
        var i_r45 = ctx.index;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("process", salbar_r44.percent)("code", salbar_r44.code)("type", "nd_" + salbar_r44.level)("colorCode", i_r45)("percent", salbar_r44.calcPercent)("name", salbar_r44.codeName)("processBudget", salbar_r44.perfoValue)("process", salbar_r44.percent)("budget", salbar_r44.approvedValue)("toggle", ctx_r43.toggle);
      }
    }

    function NdaatgalComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NdaatgalComponent_div_7_div_4_Template, 2, 10, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.zarlagaSalbarName == null ? null : ctx_r3.zarlagaSalbarName.levelName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.zarlagaBySalbar);
      }
    }

    var NdaatgalComponent = /*#__PURE__*/function () {
      function NdaatgalComponent(mainService, route, router) {
        var _this2 = this;

        _classCallCheck(this, NdaatgalComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.percent = [];
        this.percentTotal = [];
        this.appValue = [];
        this.prefValue = [];
        this.prefValueTotal = [];
        this.appValueTotal = [];
        this.value = 0;
        this.highValue = 18;
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category
        };
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colors;
        this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos;
        this.widths = [];
        this.isZarlagaDataLoaded = false;
        this.isDataLoaded = false;
        this.isInDataLoaded = false;
        this.isSub1 = false;
        this.isSub2 = false;
        this.isOrlogo = true;
        this.isZarlaga = false;
        this.isMain = true;
        this.isMainChart = true;
        this.isTypeOrlogo = false;
        this.isZarlagaMain = false;
        this.isMainSub = false;
        this.isLegend = true;
        this.zarlagaList = [];
        this.zarlagaSub1List = [];
        this.zarlagaValues = [];
        this.zarlagaNames = [];
        this.zarlagaSub1Values = [];
        this.zarlagaSub1Names = [];
        this.orlogoList = [];
        this.orlogoSub1List = [];
        this.orlogoValues = [];
        this.orlogoValuesbef = 0;
        this.orlogoValuesbefZ = 0;
        this.orlogoNames = [];
        this.orlogoTypeValues = [];
        this.orlogoTypeNames = [];
        this.orlogoSub1Values = [];
        this.orlogoSub1Names = [];
        this.sum = 0;
        this.process = 0;
        this.percentChart = 0;
        this.percentChartOrlogo = 0;
        this.percentChartZar = 0;
        this.orlogoPerVal = [];
        this.prefValueChart = 0;
        this.orlogoPrefVal = [];
        this.sumSub = 0;
        this.processSub = 0;
        this.percentChartSub = 0;
        this.orlogoPerValSub = [];
        this.prefValueChartSub = 0;
        this.orlogoPrefValSub = [];
        this.sumZarlaga = 0;
        this.processZarlalga = 0;
        this.zarlagePercent = [];
        this.percentChartZarlaga = 0;
        this.zarlagaPrefValues = [];
        this.prefValueChartZarlaga = 0;
        this.beforeYear = 0;
        this.mainWidth = 130;
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this2.setQueryParam(val.url.split('?')[1]);

              _this2.showSalbar();
            }

            _this2.initNds();
          }
        });
        this.mainService.budgetNde.subscribe(function (data) {
          if (data === 0) {
            _this2.orlogoClick();
          }

          if (data === 1) {
            _this2.zarlagaClick();
          }
        });
      }

      return _createClass(NdaatgalComponent, [{
        key: "orlogo",
        value: function orlogo() {
          this.isLegend = false;
          this.isMainChart = true;
          this.isMain = true;
          this.isMainSub = false;
          this.isZarlaga = false;
          this.isTypeOrlogo = false;
          this.isZarlagaMain = false;
        }
      }, {
        key: "orlogoClick",
        value: function orlogoClick() {
          this.isLegend = true;
          this.isMainSub = true;
          this.isMainChart = false;
          this.isMain = false;
          this.isZarlaga = false;
          this.isTypeOrlogo = true;
        }
      }, {
        key: "zarlaga",
        value: function zarlaga() {
          this.isLegend = false;
          this.isMain = true;
          this.isMainSub = false;
          this.isMainChart = false;
          this.isOrlogo = false;
          this.isTypeOrlogo = false;
          this.isZarlaga = true;
          this.isZarlagaMain = false;
        }
      }, {
        key: "zarlagaClick",
        value: function zarlagaClick() {
          this.isLegend = false;
          this.isMain = false;
          this.isMainSub = false;
          this.isZarlaga = false;
          this.isOrlogo = false;
          this.isZarlagaMain = true;
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
          this.getChanges(param);
        }
      }, {
        key: "getChanges",
        value: function getChanges(param) {
          var old = this.params["year"];
          this.beforeYear = this.params["year"] - 1; // if(params != old){
          // console.log("chang")
          //  this.ezaLevelDatas = []
          // }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initNds",
        value: function initNds() {
          var _this3 = this;

          this.orlogoValues = [];
          this.orlogoPerVal = [];
          this.orlogoPrefVal = [];
          this.orlogoNames = [];
          this.orlogoTypeValues = [];
          this.orlogoPerValSub = [];
          this.orlogoPrefValSub = [];
          this.orlogoTypeNames = [];
          this.zarlagaValues = [];
          this.zarlagaPrefValues = [];
          this.zarlagePercent = [];
          this.zarlagaNames = [];
          this.getZarlaga();
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_INOUT + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
            _this3.orlogoList = result;
            _this3.process = result[0].process;
            result.forEach(function (item) {
              if (item.type == "IN") {
                _this3.orlogoValues.push(item["approvedValue"]);

                _this3.orlogoPerVal.push(item["percent"]);

                _this3.orlogoPrefVal.push(item["perfoValue"]);

                _this3.orlogoNames.push(item["type"]);
              }
            });
            _this3.sum = _this3.orlogoValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.prefValueChart = _this3.orlogoPrefVal.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.percentChart = parseFloat((_this3.prefValueChart / _this3.sum * 100).toFixed(2));
            _this3.isLegend = false;
            _this3.isDataLoaded = true;

            _this3.befOrlogo();
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_IN + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
            result.forEach(function (item) {
              _this3.orlogoTypeValues.push(item["approvedValue"]);

              _this3.orlogoPerValSub.push(item["percent"]);

              _this3.orlogoPrefValSub.push(item["perfoValue"]);

              _this3.orlogoTypeNames.push(item["levelName"]);
            });
            _this3.sumSub = _this3.orlogoTypeValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.prefValueChartSub = _this3.orlogoPrefValSub.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.percentChartSub = parseFloat((_this3.prefValueChartSub / _this3.sumSub * 100).toFixed(2));
            _this3.isInDataLoaded = true;
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_INOUT + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=OUT", null, true).then(function (result) {
            _this3.zarlagaList = result;
            result.forEach(function (item) {
              if (item.type == "OUT") {
                _this3.zarlagaValues.push(item["approvedValue"]);

                _this3.zarlagaPrefValues.push(item["perfoValue"]);

                _this3.zarlagePercent.push(item["percent"]);

                _this3.zarlagaNames.push(" ");
              }
            });
            _this3.sumZarlaga = _this3.zarlagaValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.prefValueChartZarlaga = _this3.zarlagaPrefValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.percentChartZarlaga = parseFloat((_this3.prefValueChartZarlaga / _this3.sumZarlaga * 100).toFixed(2));
            _this3.isLegend = true;
            _this3.isZarlagaDataLoaded = true;
          })["catch"](function (error) {
            console.log(error);
          });
          this.befZar();
          this.getReleaseDate("Sheet11");
        }
      }, {
        key: "befOrlogo",
        value: function befOrlogo() {
          var _this4 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_INOUT + "?year=" + this.beforeYear + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
            result.forEach(function (item) {
              if (item.type == "IN") {
                _this4.orlogoValuesbef = item["approvedValue"];
              }
            });
            _this4.percentChartOrlogo = isFinite(parseFloat(((_this4.sum - _this4.orlogoValuesbef) / _this4.orlogoValuesbef * 100).toFixed(2))) ? parseFloat(((_this4.sum - _this4.orlogoValuesbef) / _this4.orlogoValuesbef * 100).toFixed(2)) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "befZar",
        value: function befZar() {
          var _this5 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_INOUT + "?year=" + this.beforeYear + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
            result.forEach(function (item) {
              if (item.type == "OUT") {
                _this5.orlogoValuesbefZ = item["approvedValue"];
              }
            });
            _this5.percentChartZar = isFinite(parseFloat(((_this5.sumZarlaga - _this5.orlogoValuesbefZ) / _this5.orlogoValuesbefZ * 100).toFixed(2))) ? parseFloat(((_this5.sumZarlaga - _this5.orlogoValuesbefZ) / _this5.orlogoValuesbefZ * 100).toFixed(2)) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "orlogoTo",
        value: function orlogoTo() {
          var _this6 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_INOUT + "?year=2019&category=SUBMITTED", null, true).then(function (result) {
            _this6.orlogoSub1List = result;
            result.forEach(function (item) {
              _this6.orlogoSub1Values.push(item["approvedValue"]);

              _this6.orlogoSub1Names.push(item["levelName"]);
            });
            _this6.isSub1 = true;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getZarlaga",
        value: function getZarlaga() {
          var _this7 = this;

          this.appValue = [];
          this.prefValue = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL + "?type=OUT&year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this7.zarlagaSalbar = result;
            console.log(result);
            result.forEach(function (item) {
              _this7.appValue.push(item["approvedValue"]);

              _this7.prefValue.push(item["perfoValue"]);
            });
            _this7.appValueTotal = _this7.appValue.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this7.prefValueTotal = _this7.prefValue.reduce(function (a, b) {
              return a + b;
            }, 0);

            _this7.calcPercent();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showSalbar",
        value: function showSalbar() {
          var _this8 = this;

          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (index != null) {
            this.zarlagaSalbarName = this.zarlagaSalbar[index];
          }

          if (type) {
            this.params["level"] = type;
          }

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_NDAATGAL_ITEM + "?type=OUT&year=" + this.params["year"] + "&category=" + this.params["category"] + "&level=" + this.params["level"], null, true).then(function (result) {
            _this8.toggle = _this8.params["category"];
            _this8.zarlagaBySalbar = result;

            _this8.mainService.scroll("number");
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "calcPercent",
        value: function calcPercent() {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth <= 1680 && this.screenWidth > 1536) {
            this.mainWidth = 130;
            this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos1440;
          }

          if (this.screenWidth <= 1536 && this.screenWidth > 1440) {
            this.mainWidth = 110;
            this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos1536;
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1280) {
            this.mainWidth = 100;
            this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos1366;
          } else if (this.screenWidth <= 1280 && this.screenWidth > 1200) {
            this.mainWidth = 100;
            this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos1280;
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            this.mainWidth = 80;
            this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos1024;
          } else {
            this.mainWidth = 130;
            this.ndaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ndaatgalPos;
          }

          var s = [];
          var wud = this.mainWidth;
          this.zarlagaSalbar.forEach(function (entry) {
            var size = parseInt(entry.calcPercent / 5 + "");
            var currSize = wud + size * 8;
            s.push("width: " + currSize + "px; height: " + currSize + "px;");
          });
          this.widths = s;
        }
      }, {
        key: "getReleaseDate",
        value: function getReleaseDate(code) {
          var _this9 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then(function (result) {
            _this9.updateDate = result[0].updateDate;
            _this9.description = result[0].description;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);
    }();

    NdaatgalComponent.ɵfac = function NdaatgalComponent_Factory(t) {
      return new (t || NdaatgalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NdaatgalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NdaatgalComponent,
      selectors: [["app-ndaatgal"]],
      decls: 17,
      vars: 5,
      consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], ["class", "budget-main orlogo", 4, "ngIf"], ["class", "budget-main zarlaga", 4, "ngIf"], ["class", "budget-content main-block", 4, "ngIf"], [3, "description"], [1, "main-description"], [1, "col-md-12"], [1, "row"], [1, "col-md-9"], [1, "col-md-3"], ["href", "http://www.ndaatgal.mn/v1/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "../../../assets/image/desc.PNG", "alt", ""], [1, "budget-main", "orlogo"], [1, "last_updated"], [1, "title"], [1, "chart-text", "row", "justify-content-md-center"], [1, "orlogo", 3, "click", "mouseover"], ["src", "../../../assets/image/icons/ndrightgg.png", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/icons/ndright.png", "width", "100", 4, "ngIf"], ["style", "font-weight: bold;", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff", 4, "ngIf"], [1, "ndleft"], ["src", "../../../assets/image/icons/right.png", 4, "ngIf"], [4, "ngIf"], [1, "zarlaga", 3, "click", "mouseover"], [1, "ndright"], ["src", "../../../assets/image/icons/left.png", 4, "ngIf"], ["src", "../../../assets/image/icons/ndleft.png", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/icons/ndleftgg.png", "width", "100", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff;", 4, "ngIf"], ["src", "../../../assets/image/icons/ndrightgg.png", "width", "100"], ["src", "../../../assets/image/icons/ndright.png", "width", "100"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "color", "#0081ff"], ["src", "../../../assets/image/icons/right.png"], ["class", "chart-container", 4, "ngIf"], [1, "chart-container"], ["src", "../../../assets/image/ndaatgal.PNG", 1, "mainImg"], [3, "colors", "legend", "sub", "title", "sum", "process", "values", "names", "befpercentChart", "percentChart", "prefValueChart"], ["src", "../../../assets/image/icons/left.png"], ["src", "../../../assets/image/icons/ndleft.png", "width", "100"], ["src", "../../../assets/image/icons/ndleftgg.png", "width", "100"], [1, "orlogo"], [1, "zarlaga", 3, "click"], [1, "backbtn", 3, "click"], ["src", "../../../assets/image/back.png"], [3, "colors", "legend", "title", "sum", "process", "values", "befpercentChart", "names", "percentChart", "prefValueChart"], [1, "budget-main", "zarlaga"], ["src", "../../../assets/image/budget/ndaatgal/banner_pic1.png", 1, "bottom"], ["src", "../../../assets/image/icons/Main/6_nDaatgal.svg", 1, "bottom_icon"], ["id", "number", 1, "number"], ["class", "curr", 4, "ngIf"], ["class", "process", 4, "ngIf"], ["class", "zarlaga-item", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "curr"], [1, "process"], [2, "color", "#fff"], [1, "zarlaga-item", 3, "click"], [1, "content"], ["_ngcontent-xhr-c151", "", "alt", "", 3, "src"], [1, "animate-show"], [1, "budget-content", "main-block"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "process", "code", "type", "colorCode", "percent", "name", "processBudget", "budget", "toggle"]],
      template: function NdaatgalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NdaatgalComponent_div_4_Template, 27, 13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NdaatgalComponent_div_5_Template, 23, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NdaatgalComponent_div_6_Template, 18, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NdaatgalComponent_div_7_Template, 5, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "module-description", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMain);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMainSub);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlagaMain);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZarlagaMain);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx.description);
        }
      },
      directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__["YearChangeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionComponent"], _nchart_nchart_component__WEBPACK_IMPORTED_MODULE_7__["NchartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modules_grid_img_grid_img_component__WEBPACK_IMPORTED_MODULE_8__["GridImgComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".budget-main[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  text-align: center;\n  background-size: cover;\n  height: 750px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n  text-align: center !important;\n  color: #fff;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  width: 300px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100px !important;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  width: 300px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100px !important;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n  width: 90px;\n  position: absolute;\n  bottom: 40px;\n  left: 0px;\n  right: 470px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 180px;\n  position: absolute;\n  bottom: 10px;\n  left: 0px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 45px !important;\n  font-weight: 700;\n  font-size: large;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 180px;\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: -480px;\n  margin: 0px auto;\n  color: #fff;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 450px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n  visibility: visible;\n  left: calc(50% - 100px);\n  z-index: 999;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #505054;\n  width: 180px;\n  font-weight: 600;\n  background: #fff;\n  border-radius: 30px;\n  text-transform: none;\n  border: 2px solid #505054;\n  line-height: 30px;\n  text-align: center;\n  visibility: hidden;\n  top: calc(100% + 20px);\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #505054;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.orlogo[_ngcontent-%COMP%] {\n  position: relative;\n}\n.budget-main[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  text-align: center;\n  color: #9a9a9a;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 300px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  padding-top: 170px;\n  width: 300px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 30px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  padding-bottom: 30px;\n}\n.budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px !important;\n  z-index: 2;\n  left: 40%;\n  top: -20px;\n  position: absolute;\n}\n.main-block[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.range-slider[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0px auto;\n}\n.backbtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  bottom: 20px;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 1680px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n}\n@media screen and (max-width: 1536px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .mainImg[_ngcontent-%COMP%] {\n    width: 70px !important;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .mainImg[_ngcontent-%COMP%] {\n    width: 70px !important;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 70px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 40%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 70px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 40%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n    font-size: 14px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 60px;\n    width: 100px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 30%;\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 60px;\n    width: 100px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 30%;\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    padding-bottom: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 9px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 50px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: -10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 120px;\n    position: absolute;\n    bottom: 30px;\n    left: 0px;\n    right: -300px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 5px;\n    font-size: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 7px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 9px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: -10px;\n    bottom: 20px;\n    width: 100px;\n  }\n  .backbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L25kYWF0Z2FsL25kYWF0Z2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idWRnZXQvbmRhYXRnYWwvbmRhYXRnYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBRUEsbUJBQUE7QUNDUjtBRENZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NoQjtBRENZO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FDQ2hCO0FEQWdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRXBCO0FERG9CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDR3hCO0FEQWdCO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRXBCO0FERG9CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDR3hCO0FERVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVo7QURFUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNEWjtBREVZO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0FoQjtBREVZO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7QURFWTtF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QkFBQTtFQzNEMUI7RUQ4RGtCO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VDNUR0QjtFRDhEa0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUM1RHRCO0VEOERrQjtJQUNJLGNBQUE7SUFDQSxnQkFBQTtFQzVEdEI7RUQ4RGtCO0lBRUkseUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VDN0R0Qjs7RUQrRUU7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUM1RU47RUQ2RU07SUFDSSxXQUFBO0VDM0VWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idWRnZXQvbmRhYXRnYWwvbmRhYXRnYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVkZ2V0LW1haW57XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgICAmLnphcmxhZ2F7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnphcmxhZ2F7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGltZy5tYWlue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLmJvdHRvbXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogNDcwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogLTQ4MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoM3tcbiAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnphcmxhZ2EtaXRlbXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZS1zaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7ICBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ub3Jsb2dve1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idWRnZXQtbWFpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgIC50aXRsZXtcbiAgICAgICAgXG4gICAgICAgIGgze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgLm5kbGVmdHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufVxuLm1haW4tYmxvY2t7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yYW5nZS1zbGlkZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMjBweDtcbn1cbi5tYWluLWRlc2NyaXB0aW9ue1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICBwe1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUzNnB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1haW5JbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFja2J0biB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5idWRnZXQtbWFpbntcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGhlaWdodDogNzUwcHg7XG4gICAgICAgICYuemFybGFnYXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcubWFpbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5ib3R0b217XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9tX2ljb257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI5MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuemFybGFnYS1pdGVte1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFpbkltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5iYWNrYnRuIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiA3NTBweDtcbiAgICAgICAgJi56YXJsYWdhe1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5tYWlue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5ib3R0b21faWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjkwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jdXJye1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zNjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC56YXJsYWdhLWl0ZW17XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZS1zaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZS1zaG93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7IGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRyaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFja2J0biB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5idWRnZXQtbWFpbntcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGhlaWdodDogNzUwcHg7XG4gICAgICAgICYuemFybGFnYXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcubWFpbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5ib3R0b217XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9tX2ljb257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI5MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuemFybGFnYS1pdGVte1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAmLnphcmxhZ2F7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLm1haW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9te1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM2MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnphcmxhZ2EtaXRlbXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiA3NTBweDtcbiAgICAgICAgJi56YXJsYWdhe1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5tYWlue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5ib3R0b21faWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjkwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHggO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTMwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuemFybGFnYS1pdGVte1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5iYWNrYnRuIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5idWRnZXQtbWFpbiB7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNzUwcHg7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC50aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDA4MWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAudGl0bGUgLmNoYXJ0LXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gaW1nIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSBpbWcge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSBpbWcuYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgd2lkdGg6IDkwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0NzBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgLmN1cnIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5wcm9jZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAtNDgwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudDpob3ZlciAuYW5pbWF0ZS1zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIHdpZHRoOiAxODBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzUwNTA1NDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5vcmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idWRnZXQtbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA4MWZmO1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlhOWE5YTtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMjtcbiAgbGVmdDogNDAlO1xuICB0b3A6IC0yMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tYWluLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJhbmdlLXNsaWRlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmJhY2tidG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLm1haW4tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG59XG4ubWFpbi1kZXNjcmlwdGlvbiBwIHtcbiAgd2lkdGg6IDQwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW4tZGVzY3JpcHRpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YTlhOWE7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MzZweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YTlhOWE7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2Ege1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm1haW5JbWcge1xuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmJhY2tidG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC5idWRnZXQtbWFpbiB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDc1MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAudGl0bGUgaDMge1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcuYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcuYm90dG9tX2ljb24ge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAyOTBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIC5jdXJyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5wcm9jZXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IC0zNjBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaDMge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudDpob3ZlciAuYW5pbWF0ZS1zaG93IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzUwNTA1NDtcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBkaXYge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5tYWluSW1nIHtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIGgzIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMjkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgZGl2IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA0MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDQwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIC5uZHJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIGgzIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMjkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgZGl2IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzAlO1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAzMCU7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmJ1ZGdldC1tYWluIHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNzUwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC50aXRsZSBoMyB7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLm1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b21faWNvbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDI5MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgLmN1cnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnByb2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogLTM2MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBoMyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50OmhvdmVyIC5hbmltYXRlLXNob3cge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGRpdiB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNzUwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC50aXRsZSBoMyB7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLm1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b21faWNvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDI5MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIC5jdXJyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5wcm9jZXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IC0zMDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBoMyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50OmhvdmVyIC5hbmltYXRlLXNob3cge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGRpdiB7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmJhY2tidG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLmJhY2tidG4gaW1nIHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NdaatgalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ndaatgal',
          templateUrl: './ndaatgal.component.html',
          styleUrls: ['./ndaatgal.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/budget/ndaatgal/ndaatgal.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/budget/ndaatgal/ndaatgal.module.ts ***!
    \****************************************************/

  /*! exports provided: NdaatgalModule */

  /***/
  function _src_app_budget_ndaatgal_ndaatgalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NdaatgalModule", function () {
      return NdaatgalModule;
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


    var _ndaatgal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ndaatgal.component */
    "./src/app/budget/ndaatgal/ndaatgal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nchart_nchart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nchart/nchart.component */
    "./src/app/budget/ndaatgal/nchart/nchart.component.ts");
    /* harmony import */


    var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/year-change/year-change.module */
    "./src/app/modules/year-change/year-change.module.ts");
    /* harmony import */


    var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modules/description/description.module */
    "./src/app/modules/description/description.module.ts");
    /* harmony import */


    var src_app_modules_grid_img_grid_img_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modules/grid-img/grid-img.module */
    "./src/app/modules/grid-img/grid-img.module.ts");
    /* harmony import */


    var src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/simple-number/simple-number.module */
    "./src/app/modules/simple-number/simple-number.module.ts"); // import { NgApexchartsModule } from 'ng-apexcharts';


    var routes = [{
      path: '',
      component: _ndaatgal_component__WEBPACK_IMPORTED_MODULE_2__["NdaatgalComponent"]
    }];

    var NdaatgalModule = /*#__PURE__*/_createClass(function NdaatgalModule() {
      _classCallCheck(this, NdaatgalModule);
    });

    NdaatgalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NdaatgalModule
    });
    NdaatgalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NdaatgalModule_Factory(t) {
        return new (t || NdaatgalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_grid_img_grid_img_module__WEBPACK_IMPORTED_MODULE_7__["GridImgModule"], // NgApexchartsModule,
      src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__["SimpleNumberModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NdaatgalModule, {
        declarations: [_ndaatgal_component__WEBPACK_IMPORTED_MODULE_2__["NdaatgalComponent"], _nchart_nchart_component__WEBPACK_IMPORTED_MODULE_4__["NchartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_grid_img_grid_img_module__WEBPACK_IMPORTED_MODULE_7__["GridImgModule"], // NgApexchartsModule,
        src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__["SimpleNumberModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NdaatgalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ndaatgal_component__WEBPACK_IMPORTED_MODULE_2__["NdaatgalComponent"], _nchart_nchart_component__WEBPACK_IMPORTED_MODULE_4__["NchartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], src_app_modules_grid_img_grid_img_module__WEBPACK_IMPORTED_MODULE_7__["GridImgModule"], // NgApexchartsModule,
          src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__["SimpleNumberModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/description/description.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/description/description.component.ts ***!
    \**************************************************************/

  /*! exports provided: DescriptionComponent */

  /***/
  function _src_app_modules_description_descriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function () {
      return DescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DescriptionComponent = /*#__PURE__*/function () {
      function DescriptionComponent() {
        _classCallCheck(this, DescriptionComponent);
      }

      return _createClass(DescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) {
      return new (t || DescriptionComponent)();
    };

    DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescriptionComponent,
      selectors: [["module-description"]],
      inputs: {
        description: "description"
      },
      decls: 6,
      vars: 1,
      consts: [["id", "description", 1, "budget-block", "description"], [1, "block-container"], [1, "image"], ["src", "../../../assets/image/icons/Duruud/Turiin_alban_haagch_2.png"]],
      template: function DescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.description, " ");
        }
      },
      styles: [".description[_ngcontent-%COMP%]   .block-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 150px;\n  text-align: left;\n  color: #505054;\n  display: table;\n  width: 100%;\n}\n.description[_ngcontent-%COMP%]   .block-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  padding: 20px;\n  text-align: center;\n  display: inline-block;\n  background: #28c66f;\n  border-radius: 50%;\n  float: left;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FSO0FER1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9ue1xuICAgIC5ibG9jay1jb250YWluZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBpbWd7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdle1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQwLCAxOTgsIDExMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZGVzY3JpcHRpb24gLmJsb2NrLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzUwNTA1NDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRlc2NyaXB0aW9uIC5ibG9jay1jb250YWluZXIgLmltYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzI4YzY2ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'module-description',
          templateUrl: './description.component.html',
          styleUrls: ['./description.component.scss']
        }]
      }], function () {
        return [];
      }, {
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/description/description.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/description/description.module.ts ***!
    \***********************************************************/

  /*! exports provided: DescriptionModule */

  /***/
  function _src_app_modules_description_descriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionModule", function () {
      return DescriptionModule;
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


    var _description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./description.component */
    "./src/app/modules/description/description.component.ts");

    var DescriptionModule = /*#__PURE__*/_createClass(function DescriptionModule() {
      _classCallCheck(this, DescriptionModule);
    });

    DescriptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DescriptionModule
    });
    DescriptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DescriptionModule_Factory(t) {
        return new (t || DescriptionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DescriptionModule, {
        declarations: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ndaatgal-ndaatgal-module-es5.js.map