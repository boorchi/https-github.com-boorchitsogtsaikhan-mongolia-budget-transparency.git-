function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edaatgal-edaatgal-module"], {
  /***/
  "./src/app/budget/edaatgal/echart/echart.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/budget/edaatgal/echart/echart.component.ts ***!
    \************************************************************/

  /*! exports provided: EchartComponent */

  /***/
  function _src_app_budget_edaatgal_echart_echartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EchartComponent", function () {
      return EchartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modules/simple-number/simple-number.component */
    "./src/app/modules/simple-number/simple-number.component.ts");

    var _c0 = ["chart"];

    function EchartComponent_div_0_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text1", ctx_r0.title)("text2", "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433")("baseNumber", ctx_r0.sum)("color", ctx_r0.colors[0])("percent", ctx_r0.percentChart)("befPercent", ctx_r0.befpercentChart)("prefValue", ctx_r0.prefValueChart);
      }
    }

    var EchartComponent = /*#__PURE__*/function () {
      function EchartComponent(mainService) {
        _classCallCheck(this, EchartComponent);

        this.mainService = mainService;
        this.isDataLoaded = false;
        this.colors = [];
        this.width = 0;
        this.labelWidth = 0;
        this.fontSize = "13px";
      }

      return _createClass(EchartComponent, [{
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
              fontFamily: 'Montserrat, sans-serif',
              width: "100%",
              type: "donut",
              events: {
                legendClick: function legendClick(chartContext, seriesIndex, config) {},
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
          this.isDataLoaded = true; // setTimeout(function(){ this.isDataLoaded = true;}, 1000);
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
              this.width = 650;
            }
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1366) {
            if (!this.legend) {
              this.width = 350;
            } else {
              this.labelWidth = 450;
              this.fontSize = "9px";
              this.width = 540;
            }
          } else if (this.screenWidth <= 1366 && this.screenWidth > 1200) {
            if (!this.legend) {
              this.width = 350;
            } else {
              this.labelWidth = 350;
              this.fontSize = "9px";
              this.width = 540;
            }
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            if (!this.legend) {
              this.width = 300;
            } else {
              this.labelWidth = 350;
              this.fontSize = "6px";
              this.width = 440;
            }
          } else {
            if (!this.legend) {
              this.width = 500;
            } else {
              this.labelWidth = 350;
              this.fontSize = "10px";
              this.width = 665;
            }
          }
        }
      }]);
    }();

    EchartComponent.ɵfac = function EchartComponent_Factory(t) {
      return new (t || EchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]));
    };

    EchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EchartComponent,
      selectors: [["app-echart"]],
      viewQuery: function EchartComponent_Query(rf, ctx) {
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
      consts: [["class", "pie_chart center", 3, "style", 4, "ngIf"], [1, "pie_chart", "center"], [3, "series", "labels", "chart", "xaxis", "title", "legend", "plotOptions", "colors", "stroke", "dataLabels", "tooltip"], [1, "chart_text"], ["src", "../../../assets/image/budget/main/small_m.svg", 1, "m_l"], [1, "orlogo", 3, "text1", "text2", "baseNumber", "color", "percent", "befPercent", "prefValue"]],
      template: function EchartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EchartComponent_div_0_Template, 5, 21, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _modules_simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_3__["SimpleNumberComponent"]],
      styles: [".apexcharts-legend-marker[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n\n.pie_chart[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pie_chart.center[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n  margin: 60px auto 0px;\n  text-align: center;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: -15px;\n  width: 200px;\n  color: #999;\n  font-weight: bold;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65px;\n  display: block;\n  margin: 0px auto 30px;\n  opacity: 0;\n  z-index: -1;\n  display: none;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-block;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  background-color: #28c66f;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #28c66f;\n  font-weight: bold;\n  font-size: 55px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #505054;\n  margin-top: 10px;\n  padding: 5px;\n  text-transform: none;\n}\n\n@media screen and (max-width: 1680px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50px;\n    width: 200px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n\n@media screen and (max-width: 1440px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 30px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n\n@media screen and (max-width: 1366px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 30px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 30px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L2VkYWF0Z2FsL2VjaGFydC9lY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1ZGdldC9lZGFhdGdhbC9lY2hhcnQvZWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEREk7RUFDSSxnQkFBQTtBQ0dSOztBRERJO0VBQ0kscUJBQUE7RUFTQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ05SOztBRFZRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1laOztBRERRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQ0daOztBRERRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNHWjs7QUREUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHWjs7QUREUTtFQUNJLGNBQUE7QUNHWjs7QURDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FESUE7RUFDSTtJQUNJLGtCQUFBO0VDRE47RURFTTtJQUNJLGdCQUFBO0VDQVY7RURFTTtJQUNJLDJCQUFBO0VDQVY7RURFTTtJQUNJLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDQVY7RURFTTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ0FWO0VEQ1U7SUFDSSxnQkFBQTtJQUNBLHFCQUFBO0VDQ2Q7RURDVTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDQ2Q7RURDVTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNDZDtFRENVO0lBQ0ksY0FBQTtFQ0NkO0VER007SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ0RWO0FBQ0Y7O0FET0E7RUFDSTtJQUNJLGtCQUFBO0VDTE47RURNTTtJQUNJLGdCQUFBO0VDSlY7RURNTTtJQUNJLDJCQUFBO0VDSlY7RURNTTtJQUNJLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDSlY7RURNTTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ0pWO0VES1U7SUFDSSxnQkFBQTtJQUNBLHFCQUFBO0VDSGQ7RURLVTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDSGQ7RURLVTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNIZDtFREtVO0lBQ0ksY0FBQTtFQ0hkO0VET007SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ0xWO0FBQ0Y7O0FEV0E7RUFDSTtJQUNJLGtCQUFBO0VDVE47RURVTTtJQUNJLGdCQUFBO0VDUlY7RURVTTtJQUNJLDJCQUFBO0VDUlY7RURVTTtJQUNJLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDUlY7RURVTTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ1JWO0VEU1U7SUFDSSxnQkFBQTtJQUNBLHFCQUFBO0VDUGQ7RURTVTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDUGQ7RURTVTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNQZDtFRFNVO0lBQ0ksY0FBQTtFQ1BkO0VEV007SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ1RWO0FBQ0Y7O0FEZUE7RUFDSTtJQUNJLGtCQUFBO0VDYk47RURjTTtJQUNJLGdCQUFBO0VDWlY7RURjTTtJQUNJLDJCQUFBO0VDWlY7RURjTTtJQUNJLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDWlY7RURjTTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ1pWO0VEYVU7SUFDSSxnQkFBQTtJQUNBLHFCQUFBO0VDWGQ7RURhVTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDWGQ7RURhVTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNYZDtFRGFVO0lBQ0ksY0FBQTtFQ1hkO0VEZU07SUFDSSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ2JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idWRnZXQvZWRhYXRnYWwvZWNoYXJ0L2VjaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcGV4Y2hhcnRzLWxlZ2VuZC1tYXJrZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcbn1cbi5waWVfY2hhcnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuY2VudGVye1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIH1cbiAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG8gMHB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVscHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYntcbiAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5wcm9jZXNze1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICAucGllX2NoYXJ0eyAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmNlbnRlcntcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAmLm9ybG9nb19tIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHghaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC00NXB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnBpZV9jaGFydHsgICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5jZW50ZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgJi5vcmxvZ29fbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIC5waWVfY2hhcnR7ICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYuY2VudGVye1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bzsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICYub3Jsb2dvX20ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBie1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAucGllX2NoYXJ0eyAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmNlbnRlcntcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAmLm9ybG9nb19tIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHghaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC00NXB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiLmFwZXhjaGFydHMtbGVnZW5kLW1hcmtlciB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGllX2NoYXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBpZV9jaGFydC5jZW50ZXIge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCB7XG4gIG1hcmdpbjogNjBweCBhdXRvIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAtMTVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IGltZyB7XG4gIHdpZHRoOiA2NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLmhlbHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBoNCB7XG4gIGNvbG9yOiAjMjhjNjZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1NXB4O1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgY29sb3I6ICMyOGM2NmY7XG59XG4ucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDU0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgLnBpZV9jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5waWVfY2hhcnQuY2VudGVyIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5waWVfY2hhcnQub3Jsb2dvX20ge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAucGllX2NoYXJ0IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTQ1cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLmhlbHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaDQge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGIge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICB9XG4gIC5waWVfY2hhcnQgLnByb2Nlc3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucGllX2NoYXJ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnBpZV9jaGFydC5jZW50ZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLnBpZV9jaGFydC5vcmxvZ29fbSB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5waWVfY2hhcnQgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNDVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDMwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBoNCB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgYiB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gIH1cbiAgLnBpZV9jaGFydCAucHJvY2VzcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5waWVfY2hhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucGllX2NoYXJ0LmNlbnRlciB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAucGllX2NoYXJ0Lm9ybG9nb19tIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBpZV9jaGFydCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC00NXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMzBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IC5oZWxwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgfVxuICAucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnBpZV9jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5waWVfY2hhcnQuY2VudGVyIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5waWVfY2hhcnQub3Jsb2dvX20ge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAucGllX2NoYXJ0IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTQ1cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLmhlbHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaDQge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGIge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICB9XG4gIC5waWVfY2hhcnQgLnByb2Nlc3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EchartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-echart',
          templateUrl: './echart.component.html',
          styleUrls: ['./echart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
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
  "./src/app/budget/edaatgal/edaatgal.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/budget/edaatgal/edaatgal.component.ts ***!
    \*******************************************************/

  /*! exports provided: EdaatgalComponent */

  /***/
  function _src_app_budget_edaatgal_edaatgalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EdaatgalComponent", function () {
      return EdaatgalComponent;
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


    var _echart_echart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./echart/echart.component */
    "./src/app/budget/edaatgal/echart/echart.component.ts");

    function EdaatgalComponent_div_4_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
      }
    }

    function EdaatgalComponent_div_4_img_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function EdaatgalComponent_div_4_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdaatgalComponent_div_4_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdaatgalComponent_div_4_img_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
      }
    }

    var _c0 = function _c0() {
      return ["#28c66f"];
    };

    function EdaatgalComponent_div_4_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-echart", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("sub", 0)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E")("legend", false)("sum", ctx_r15.sum)("process", ctx_r15.process)("values", ctx_r15.orlogoValues)("names", ctx_r15.orlogoNames)("percentChart", ctx_r15.percentChart)("befpercentChart", ctx_r15.percentChartOrlogo)("prefValueChart", ctx_r15.prefValueChart);
      }
    }

    function EdaatgalComponent_div_4_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EdaatgalComponent_div_4_div_16_div_1_Template, 3, 12, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isDataLoaded);
      }
    }

    var _c1 = function _c1() {
      return ["#ea5455"];
    };

    function EdaatgalComponent_div_4_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-echart", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("sub", 1)("title", "\u041D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430")("legend", false)("sum", ctx_r16.sumZarlaga)("process", ctx_r16.process)("values", ctx_r16.zarlagaValues)("names", ctx_r16.zarlagaNames)("percentChart", ctx_r16.percentChartZarlaga)("befpercentChart", ctx_r16.percentChartZarlaga1)("prefValueChart", ctx_r16.prefValueChartZarlaga);
      }
    }

    function EdaatgalComponent_div_4_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EdaatgalComponent_div_4_div_17_div_1_Template, 3, 12, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isDataLoaded);
      }
    }

    function EdaatgalComponent_div_4_img_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }
    }

    function EdaatgalComponent_div_4_img_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
      }
    }

    function EdaatgalComponent_div_4_img_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
      }
    }

    function EdaatgalComponent_div_4_span_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdaatgalComponent_div_4_span_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdaatgalComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u042D\u0440\u04AF\u04AF\u043B \u043C\u044D\u043D\u0434\u0438\u0439\u043D \u0434\u0430\u0430\u0442\u0433\u0430\u043B\u044B\u043D \u0441\u0430\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdaatgalComponent_div_4_Template_div_mouseover_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.orlogoHover();
        })("click", function EdaatgalComponent_div_4_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.orlogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EdaatgalComponent_div_4_img_9_Template, 1, 0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EdaatgalComponent_div_4_img_10_Template, 1, 0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EdaatgalComponent_div_4_span_12_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EdaatgalComponent_div_4_span_13_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EdaatgalComponent_div_4_img_15_Template, 1, 0, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EdaatgalComponent_div_4_div_16_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EdaatgalComponent_div_4_div_17_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdaatgalComponent_div_4_Template_div_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.zarlaga();
        })("mouseover", function EdaatgalComponent_div_4_Template_div_mouseover_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.zarlagaHover();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EdaatgalComponent_div_4_img_20_Template, 1, 0, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EdaatgalComponent_div_4_img_22_Template, 1, 0, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EdaatgalComponent_div_4_img_23_Template, 1, 0, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EdaatgalComponent_div_4_span_25_Template, 2, 0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EdaatgalComponent_div_4_span_26_Template, 2, 0, "span", 20);

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

    function EdaatgalComponent_div_5_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
      }
    }

    function EdaatgalComponent_div_5_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function EdaatgalComponent_div_5_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdaatgalComponent_div_5_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EdaatgalComponent_div_5_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
      }
    }

    var _c2 = function _c2() {
      return ["#28c66f", "#ea5455", "#018ffb", "#b755ea", "#6639b6", "#795448"];
    };

    function EdaatgalComponent_div_5_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-echart", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2))("legend", true)("title", "\u041D\u0438\u0439\u0442 \u043E\u0440\u043B\u043E\u0433\u043E")("sum", ctx_r28.sumSub)("process", ctx_r28.process)("values", ctx_r28.orlogoTypeValues)("names", ctx_r28.orlogoTypeNames)("befpercentChart", ctx_r28.percentChartOrlogo)("percentChart", ctx_r28.percentChartSub)("prefValueChart", ctx_r28.prefValueChartSub);
      }
    }

    function EdaatgalComponent_div_5_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EdaatgalComponent_div_5_div_14_div_1_Template, 2, 11, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isInDataLoaded);
      }
    }

    function EdaatgalComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042D\u0440\u04AF\u04AF\u043B \u043C\u044D\u043D\u0434\u0438\u0439\u043D \u0434\u0430\u0430\u0442\u0433\u0430\u043B\u044B\u043D \u0441\u0430\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EdaatgalComponent_div_5_img_7_Template, 1, 0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EdaatgalComponent_div_5_img_8_Template, 1, 0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EdaatgalComponent_div_5_span_10_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EdaatgalComponent_div_5_span_11_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EdaatgalComponent_div_5_img_13_Template, 1, 0, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EdaatgalComponent_div_5_div_14_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdaatgalComponent_div_5_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.zarlaga();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdaatgalComponent_div_5_Template_div_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.orlogoHover();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 46);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMainChart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isTypeOrlogo);
      }
    }

    function EdaatgalComponent_div_6_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.percentChartZarlaga, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r32.prefValueTotal), " \u0442\u044D\u0440\u0431\u0443\u043C ");
      }
    }

    function EdaatgalComponent_div_6_div_13_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 58);
      }
    }

    function EdaatgalComponent_div_6_div_13_i_feather_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 59);
      }
    }

    function EdaatgalComponent_div_6_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EdaatgalComponent_div_6_div_13_i_feather_5_Template, 1, 0, "i-feather", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EdaatgalComponent_div_6_div_13_i_feather_6_Template, 1, 0, "i-feather", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r33.percentChartZarlaga1, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.params["category"] != "APPROVED" && ctx_r33.percentChartZarlaga1 < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.params["category"] != "APPROVED" && ctx_r33.percentChartZarlaga1 >= 0);
      }
    }

    function EdaatgalComponent_div_6_div_17_i_feather_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 66);
      }
    }

    function EdaatgalComponent_div_6_div_17_i_feather_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 67);
      }
    }

    function EdaatgalComponent_div_6_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EdaatgalComponent_div_6_div_17_i_feather_10_Template, 1, 0, "i-feather", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EdaatgalComponent_div_6_div_17_i_feather_11_Template, 1, 0, "i-feather", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var salbar_r37 = ctx.$implicit;
        var i_r38 = ctx.index;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate3"]("background: ", ctx_r34.colors[i_r38], ";", ctx_r34.edaatgalPos[i_r38], "", ctx_r34.widths[i_r38], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/image/budget/edaatgal/nd_", salbar_r37.level, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", salbar_r37.calcPercent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r34.getType(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", salbar_r37.percent, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.params["category"] != "APPROVED" && salbar_r37.percent < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.params["category"] != "APPROVED" && salbar_r37.percent >= 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, salbar_r37.approvedValue), " \u0442\u044D\u0440\u0431\u0443\u043C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", salbar_r37.levelName, " ");
      }
    }

    function EdaatgalComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EdaatgalComponent_div_6_ng_container_12_Template, 7, 4, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EdaatgalComponent_div_6_div_13_Template, 8, 3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u042D\u0440\u04AF\u04AF\u043B \u043C\u044D\u043D\u0434\u0438\u0439\u043D \u0434\u0430\u0430\u0442\u0433\u0430\u043B\u044B\u043D \u0441\u0430\u043D \u043D\u0438\u0439\u0442 \u0437\u0430\u0440\u043B\u0430\u0433\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EdaatgalComponent_div_6_div_17_Template, 18, 15, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdaatgalComponent_div_6_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.orlogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r2.appValueTotal), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.params["category"] == "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.params["category"] != "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.zarlagaSalbar);
      }
    }

    var EdaatgalComponent = /*#__PURE__*/function () {
      function EdaatgalComponent(mainService, route, router) {
        var _this2 = this;

        _classCallCheck(this, EdaatgalComponent);

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
        this.isLegend = true;
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].colors;
        this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos;
        this.widths = [];
        this.isZarlagaDataLoaded = false;
        this.isDataLoaded = false;
        this.isInDataLoaded = false;
        this.isSub1 = false;
        this.isSub2 = false;
        this.isOrlogo = true;
        this.isZarlaga = false;
        this.isZarlagaMain = false;
        this.isMain = true;
        this.isMainChart = true;
        this.isTypeOrlogo = false;
        this.isMainSub = false;
        this.zarlagaList = [];
        this.zarlagaList1 = [];
        this.zarlagaSub1List = [];
        this.zarlagaValues = [];
        this.zarlagaValues1 = 0;
        this.zarlagaNames = [];
        this.orlogoTypeValues = [];
        this.orlogoTypeNames = [];
        this.sumSub = 0;
        this.processSub = 0;
        this.percentChartSub = 0;
        this.prefValueChartSub = 0;
        this.orlogoPerValSub = [];
        this.orlogoPrefValSub = [];
        this.orlogoValues11 = [];
        this.orlogoNames11 = [];
        this.zarlagaSub1Values = [];
        this.zarlagaSub1Names = [];
        this.orlogoList = [];
        this.orlogoSub1List = [];
        this.orlogoValues = [];
        this.orlogoValuesbef = 0;
        this.orlogoValuesbefZ = 0;
        this.orlogoNames = [];
        this.orlogoSub1Values = [];
        this.orlogoSub1Names = [];
        this.sum = 111;
        this.process = 0;
        this.percentChart = 0;
        this.orlogoPerVal = [];
        this.prefValueChart = 0;
        this.orlogoPrefVal = [];
        this.sumZarlaga = 0;
        this.sumZarlaga1 = 0;
        this.processZarlalga = 0;
        this.zarlagePercent = [];
        this.percentChartZarlaga = 0;
        this.percentChartZarlaga1 = 0;
        this.zarlagaPrefValues = [];
        this.percentChartOrlogo = 0;
        this.percentChartZar = 0;
        this.zarlagaPrefValues1 = [];
        this.prefValueChartZarlaga = 0;
        this.prefValueChartZarlaga1 = 0;
        this.beforeYear = 0;
        this.mainWidth = 130;
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this2.setQueryParam(val.url.split('?')[1]);
            }

            _this2.initNds();
          }
        });
        this.mainService.budgetNde.subscribe(function (data) {
          if (data === 0) {
            _this2.orlogo();
          }

          if (data === 1) {
            _this2.zarlaga();
          }
        });
      }

      return _createClass(EdaatgalComponent, [{
        key: "orlogo",
        value: function orlogo() {
          this.isMainChart = true;
          this.isOrlogo = true;
          this.isMain = false;
          this.isZarlaga = false;
          this.isZarlagaMain = false;
          this.isLegend = true;
          this.isTypeOrlogo = true;
          this.isMainSub = true;
        }
      }, {
        key: "orlogoHover",
        value: function orlogoHover() {
          this.isLegend = false;
          this.isTypeOrlogo = false;
          this.isMainChart = true;
          this.isOrlogo = true;
          this.isMain = true;
          this.isMainSub = false;
          this.isZarlaga = false;
        }
      }, {
        key: "zarlagaHover",
        value: function zarlagaHover() {
          this.isMainChart = false;
          this.isLegend = false;
          this.isTypeOrlogo = false;
          this.isMain = true;
          this.isOrlogo = false;
          this.isZarlaga = true;
          this.isZarlagaMain = false;
          this.isMainSub = false;
        }
      }, {
        key: "zarlaga",
        value: function zarlaga() {
          this.isLegend = false;
          this.isTypeOrlogo = false;
          this.isMain = false;
          this.isOrlogo = false;
          this.isMainSub = false;
          this.isZarlaga = true;
          this.isZarlagaMain = true;
          this.isMainSub = false;
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
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_EDAATGAL_INOUT + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
            _this3.orlogoList = result;
            _this3.process = result[0].process;
            result.forEach(function (item) {
              if (item.type == "IN") {
                _this3.orlogoValues.push(parseFloat(item["approvedValue"]));

                _this3.orlogoPrefVal.push(parseFloat(item["perfoValue"]));

                _this3.orlogoPerVal.push(parseFloat(item["percent"]));

                _this3.orlogoNames.push(parseFloat(item["type"]));
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

            _this3.befOrlogo1();
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_EDAATGAL_IN + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
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
            }, 0); // this.percentChartSub = this.orlogoPerValSub.reduce(function(a, b){
            //   return a + b;
            // }, 0); 

            _this3.percentChartSub = isFinite(parseFloat((_this3.prefValueChartSub / _this3.sumSub * 100).toFixed(2))) ? parseFloat((_this3.prefValueChartSub / _this3.sumSub * 100).toFixed(2)) : 0;
            _this3.isInDataLoaded = true; // this.befOrlogo();
          })["catch"](function (error) {
            console.log(error);
          });
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_EDAATGAL_INOUT + "?year=" + this.params["year"] + "&category=" + this.params["category"] + "&type=OUT", null, true).then(function (result) {
            _this3.zarlagaList = result;
            result.forEach(function (item) {
              if (item.type == "OUT") {
                _this3.zarlagaValues.push(item["approvedValue"]);

                _this3.zarlagaPrefValues.push(item["perfoValue"]);

                _this3.zarlagePercent.push(item["percent"]);

                _this3.zarlagaNames.push(item["type"]);
              }
            });
            _this3.sumZarlaga = _this3.zarlagaValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.prefValueChartZarlaga = _this3.zarlagaPrefValues.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this3.percentChartZarlaga = isFinite(parseFloat((_this3.prefValueChartZarlaga / _this3.sumZarlaga * 100).toFixed(2))) ? parseFloat((_this3.prefValueChartZarlaga / _this3.sumZarlaga * 100).toFixed(2)) : 0;
            _this3.isLegend = true;
            _this3.isZarlagaDataLoaded = true;

            _this3.befZar();
          })["catch"](function (error) {
            console.log(error);
          });
          this.getReleaseDate("Sheet12");
        }
      }, {
        key: "befOrlogo1",
        value: function befOrlogo1() {
          var _this4 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_EDAATGAL_INOUT + "?year=" + this.beforeYear + "&category=" + this.params["category"] + "&type=IN", null, true).then(function (result) {
            result.forEach(function (item) {
              if (item.type == "IN") {
                _this4.orlogoValuesbef = item["approvedValue"];
              }
            });
            _this4.percentChartOrlogo = parseFloat(((_this4.sum - _this4.orlogoValuesbef) / _this4.orlogoValuesbef * 100).toFixed(2));
          })["catch"](function (error) {
            console.log(error);
          });
        } // befOrlogo(){
        //   this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_INOUT +"?year=" + this.beforeYear + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
        //     result.forEach(item => {
        //       if(item.type == "OUT"){
        //         this.orlogoValuesbefZ = item["approvedValue"];
        //       }
        //     });
        //     this.percentChartZar = isFinite(parseFloat(((this.sumZarlaga - this.orlogoValuesbefZ) / this.orlogoValuesbefZ * 100).toFixed(2))) ? parseFloat(((this.sumZarlaga - this.orlogoValuesbefZ) / this.orlogoValuesbefZ * 100).toFixed(2)) : 0;
        //   }).catch((error) => {
        //     console.log(error);
        //   }); 
        // }

      }, {
        key: "befZar",
        value: function befZar() {
          var _this5 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_EDAATGAL_INOUT + "?year=" + this.beforeYear + "&category=" + this.params["category"] + "&type=OUT", null, true).then(function (result) {
            result.forEach(function (item) {
              if (item.type == "OUT") {
                _this5.zarlagaValues1 = item["approvedValue"];

                _this5.zarlagaPrefValues1.push(item["perfoValue"]);
              }
            });
            _this5.percentChartZarlaga1 = isFinite(parseFloat(((_this5.sumZarlaga - _this5.zarlagaValues1) / _this5.zarlagaValues1 * 100).toFixed(2))) ? parseFloat(((_this5.sumZarlaga - _this5.zarlagaValues1) / _this5.zarlagaValues1 * 100).toFixed(2)) : 0;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getZarlaga",
        value: function getZarlaga() {
          var _this6 = this;

          this.appValue = [];
          this.prefValue = [];
          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_EDAATGAL + "?type=OUT&year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then(function (result) {
            _this6.zarlagaSalbar = result;
            result.forEach(function (item) {
              _this6.appValue.push(item["approvedValue"]);

              _this6.prefValue.push(item["perfoValue"]);
            });
            _this6.appValueTotal = _this6.appValue.reduce(function (a, b) {
              return a + b;
            }, 0);
            _this6.prefValueTotal = _this6.prefValue.reduce(function (a, b) {
              return a + b;
            }, 0);

            _this6.calcPercent();
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
            this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos1440;
          } else if (this.screenWidth <= 1536 && this.screenWidth > 1280) {
            this.mainWidth = 120;
            this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos1536;
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1280) {
            this.mainWidth = 100;
            this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos1366;
          } else if (this.screenWidth <= 1280 && this.screenWidth > 1200) {
            this.mainWidth = 100;
            this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos1280;
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            this.mainWidth = 80;
            this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos1024;
          } else {
            this.mainWidth = 130;
            this.edaatgalPos = src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].edaatgalPos;
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
        key: "getType",
        value: function getType() {
          return this.mainService.type == "APPROVED" ? "Гүйцэтгэл" : "Өмнөх оноос";
        }
      }, {
        key: "getReleaseDate",
        value: function getReleaseDate(code) {
          var _this7 = this;

          this.mainService.baseGet(src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then(function (result) {
            _this7.updateDate = result[0].updateDate;
            _this7.description = result[0].description;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);
    }();

    EdaatgalComponent.ɵfac = function EdaatgalComponent_Factory(t) {
      return new (t || EdaatgalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EdaatgalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EdaatgalComponent,
      selectors: [["app-edaatgal"]],
      decls: 16,
      vars: 4,
      consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], ["class", "budget-main orlogo", 4, "ngIf"], ["class", "budget-main zarlaga", 4, "ngIf"], [3, "description"], [1, "main-description"], [1, "col-md-12"], [1, "row"], [1, "col-md-9"], [1, "col-md-3"], ["href", "https://www.emd.gov.mn/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "../../../assets/image/desc.PNG", "alt", ""], [1, "budget-main", "orlogo"], [1, "last_updated"], [1, "title"], [1, "chart-text", "row", "justify-content-md-center"], [1, "orlogo", 3, "mouseover", "click"], ["src", "../../../assets/image/icons/ndrightgg.png", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/icons/ndright.png", "width", "100", 4, "ngIf"], ["style", "font-weight: bold;", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff", 4, "ngIf"], [1, "ndleft"], ["src", "../../../assets/image/icons/right.png", 4, "ngIf"], [4, "ngIf"], [1, "zarlaga", 3, "click", "mouseover"], [1, "ndright"], ["src", "../../../assets/image/icons/left.png", 4, "ngIf"], ["src", "../../../assets/image/icons/ndleft.png", "width", "100", 4, "ngIf"], ["src", "../../../assets/image/icons/ndleftgg.png", "width", "100", 4, "ngIf"], ["style", "font-weight: bold; color: #0081ff;", 4, "ngIf"], ["src", "../../../assets/image/icons/ndrightgg.png", "width", "100"], ["src", "../../../assets/image/icons/ndright.png", "width", "100"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "color", "#0081ff"], ["src", "../../../assets/image/icons/right.png"], ["class", "chart-container", 4, "ngIf"], [1, "chart-container"], ["src", "../../../assets/image/EMend.png", 1, "mainImg"], [3, "colors", "sub", "title", "legend", "sum", "process", "values", "names", "percentChart", "befpercentChart", "prefValueChart"], ["src", "../../../assets/image/icons/left.png"], ["src", "../../../assets/image/icons/ndleft.png", "width", "100"], ["src", "../../../assets/image/icons/ndleftgg.png", "width", "100"], [1, "orlogo"], [1, "zarlaga", 3, "click"], [1, "backbtn", 3, "click"], ["src", "../../../assets/image/back.png"], [3, "colors", "legend", "title", "sum", "process", "values", "names", "befpercentChart", "percentChart", "prefValueChart"], [1, "budget-main", "zarlaga"], ["src", "../../../assets/image/banner_pic44.png", 1, "bottom"], ["src", "../../../assets/image/icons/Main/7_eDaatgal_white.svg", 1, "bottom_icon"], [1, "number"], [1, "curr"], [1, "process"], ["class", "zarlaga-item", 3, "style", 4, "ngFor", "ngForOf"], [2, "color", "#fff"], ["name", "arrow-down", "class", "down-icon", "style", "color: #fff;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #fff;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#fff"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#fff"], [1, "zarlaga-item"], [1, "content"], ["_ngcontent-xhr-c151", "", "alt", "", 3, "src"], ["name", "arrow-down", "class", "down-icon", "style", "width: 16px;height: 16px;color: #fff;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "width: 16px;height: 16px;color: #fff;", 4, "ngIf"], [1, "animate-show"], ["name", "arrow-down", 1, "down-icon", 2, "width", "16px", "height", "16px", "color", "#fff"], ["name", "arrow-up", 1, "down-icon", 2, "width", "16px", "height", "16px", "color", "#fff"]],
      template: function EdaatgalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EdaatgalComponent_div_4_Template, 27, 13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EdaatgalComponent_div_5_Template, 23, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EdaatgalComponent_div_6_Template, 21, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "module-description", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx.description);
        }
      },
      directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__["YearChangeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _modules_description_description_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionComponent"], _echart_echart_component__WEBPACK_IMPORTED_MODULE_7__["EchartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".budget-main[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background-size: cover;\n  height: 750px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n  width: 90px;\n  position: absolute;\n  bottom: 40px;\n  left: 0px;\n  right: 470px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 180px;\n  position: absolute;\n  bottom: 10px;\n  left: 0px;\n  right: 0;\n  margin: 0px auto;\n  color: #fff;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 45px !important;\n  font-weight: 700;\n  font-size: large;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 180px;\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: -400px;\n  margin: 0px auto;\n  color: #fff;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 450px;\n  margin: 0px auto;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 15px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n  visibility: visible;\n  left: calc(50% - 100px);\n  z-index: 999;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #505054;\n  width: 240px;\n  font-weight: 600;\n  background: #fff;\n  border-radius: 30px;\n  text-transform: none;\n  border: 2px solid #505054;\n  line-height: 30px;\n  text-align: center;\n  visibility: hidden;\n  top: calc(100% + 20px);\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 40%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #505054;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 120%;\n  vertical-align: middle;\n}\n.budget-main[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 3px 3px 12px 0px #d2d2d2;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  text-align: center;\n  color: #9a9a9a;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-top: 170px;\n  width: 300px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  padding-top: 170px;\n  width: 300px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  padding-bottom: 30px;\n}\n.budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px !important;\n  z-index: 2;\n  left: 40%;\n  top: -20px;\n  position: absolute;\n}\n.main-block[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.range-slider[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0px auto;\n}\n.backbtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  bottom: 20px;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 1680px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 170px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n}\n@media screen and (max-width: 1536px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .mainImg[_ngcontent-%COMP%] {\n    width: 70px !important;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 100px;\n    width: 200px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .mainImg[_ngcontent-%COMP%] {\n    width: 70px !important;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    bottom: 20px;\n    width: 100px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 70px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 40%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 70px;\n    width: 180px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 40%;\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    padding-bottom: 30px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: -5px;\n    bottom: 20px;\n    width: 100px;\n  }\n  .backbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .budget-main[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 12px 0px #d2d2d2;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-top: 100px;\n    text-align: center;\n    color: #9a9a9a;\n    font-size: 14px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    padding-top: 60px;\n    width: 100px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 30%;\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .orlogo[_ngcontent-%COMP%]   .ndleft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    padding-top: 60px;\n    width: 100px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 30%;\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   .zarlaga[_ngcontent-%COMP%]   .ndright[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .chart-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    padding-bottom: 10px;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .budget-main[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px !important;\n    z-index: 2;\n    left: 40%;\n    top: -20px;\n    position: absolute;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: -5px;\n    bottom: 20px;\n    width: 100px;\n  }\n  .backbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 70px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 160px;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    right: -360px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    font-size: 14px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 9px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .budget-main[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n    background-size: cover;\n    height: 750px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px;\n    font-weight: 700;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: -1;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   img.bottom_icon[_ngcontent-%COMP%] {\n    width: 50px;\n    position: absolute;\n    bottom: 40px;\n    left: 0px;\n    right: 290px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 180px;\n    position: absolute;\n    bottom: -10px;\n    left: 0px;\n    right: 0;\n    margin: 0px auto;\n    color: #fff;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .curr[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 45px !important;\n    font-weight: 700;\n    font-size: large;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 120px;\n    position: absolute;\n    bottom: 30px;\n    left: 0px;\n    right: -300px;\n    margin: 0px auto;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 5px;\n    font-size: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0px auto;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    border-radius: 50%;\n    position: absolute;\n    cursor: pointer;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 5px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]:hover   .animate-show[_ngcontent-%COMP%] {\n    visibility: visible;\n    left: calc(50% - 100px);\n    z-index: 999;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #505054;\n    width: 240px;\n    font-weight: 600;\n    background: #fff;\n    border-radius: 30px;\n    text-transform: none;\n    border: 2px solid #505054;\n    line-height: 30px;\n    text-align: center;\n    visibility: hidden;\n    top: calc(100% + 20px);\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 40%;\n    margin-left: -8px;\n    width: 0;\n    height: 0;\n    border-bottom: 8px solid #505054;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .animate-show[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n    margin: auto;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 10px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: bold;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 7px;\n    padding-top: 5px;\n  }\n  .budget-main.zarlaga[_ngcontent-%COMP%]   .zarlaga-item[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 9px;\n    font-weight: 700;\n    line-height: 120%;\n    vertical-align: middle;\n  }\n\n  .backbtn[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: absolute;\n    right: -10px;\n    bottom: 20px;\n    width: 100px;\n  }\n  .backbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L2VkYWF0Z2FsL2VkYWF0Z2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idWRnZXQvZWRhYXRnYWwvZWRhYXRnYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7QURFUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBWjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RaO0FER1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FERVk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FDQWhCO0FERVk7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FoQjtBREVZO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0FoQjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxp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MUZ0QjtFRDRGa0I7SUFFSSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7RUMzRnRCOztFRDZHRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQzFHTjtFRDJHTTtJQUNJLFdBQUE7RUN6R1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1ZGdldC9lZGFhdGdhbC9lZGFhdGdhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ1ZGdldC1tYWlue1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgICAmLnphcmxhZ2F7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbWcubWFpbntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZy5ib3R0b217XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICAgICAgIH1cbiAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogNDcwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwcHggO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXJye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGgze1xuICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuemFybGFnYS1pdGVte1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgIFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7IGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5idWRnZXQtbWFpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgIC50aXRsZXtcbiAgICAgICAgXG4gICAgICAgIGgze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgLm5kbGVmdHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmNoYXJ0LWNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufVxuLm1haW4tYmxvY2t7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yYW5nZS1zbGlkZXJ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDIwcHg7XG59XG4ubWFpbi1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgcHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAgIC5idWRnZXQtbWFpbntcbiAgICBcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iZy9oYXMuSlBHXCIpO1xuICAgICAgICAvLyBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIC5vcmxvZ297XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZHJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDsgICBcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUzNnB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgIFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFpbkltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDsgICBcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAmLnphcmxhZ2F7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLm1haW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9te1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM2MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnphcmxhZ2EtaXRlbXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgIFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2hhcy5KUEdcIik7XG4gICAgICAgIC8vIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0LXRleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XG4gICAgICAgICAgICAgICAgLm9ybG9nb3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5uZGxlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC56YXJsYWdhe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFpbkltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuY2hhcnQtY29udGFpbmVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvdHRvbTogMjBweDsgICBcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAmLnphcmxhZ2F7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLm1haW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9te1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM2MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnphcmxhZ2EtaXRlbXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAuYnVkZ2V0LW1haW57XG4gICAgXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvaGFzLkpQR1wiKTtcbiAgICAgICAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQtdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxODBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICAuYmFja2J0biB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTVweDtcbiAgICAgICAgYm90dG9tOiAyMHB4OyAgIFxuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idWRnZXQtbWFpbntcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGhlaWdodDogNzUwcHg7XG4gICAgICAgICYuemFybGFnYXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcubWFpbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5ib3R0b217XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9tX2ljb257XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI5MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VycntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuemFybGFnYS1pdGVte1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBkaXYuY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUtc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0OyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmJ1ZGdldC1tYWlue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydC10ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWE5YTlhO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAub3Jsb2dve1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmRsZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuemFybGFnYXtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgLm5kcmlnaHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jaGFydC1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAmLnphcmxhZ2F7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLm1haW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9te1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1cnJ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTM2MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnphcmxhZ2EtaXRlbXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZGl2LmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3d7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlLXNob3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzUwNTA1NDsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuYnVkZ2V0LW1haW57XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAmLnphcmxhZ2F7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLm1haW57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm90dG9te1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLmJvdHRvbV9pY29ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jdXJye1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweCA7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMzAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC56YXJsYWdhLWl0ZW17XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGRpdi5jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZS1zaG93e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZS1zaG93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7IGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgIzUwNTA1NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhY2tidG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJ1ZGdldC1tYWluIHtcbiAgcGFkZGluZzogMzBweCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNzUwcHg7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC50aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDA4MWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b21faWNvbiB7XG4gIHdpZHRoOiA5MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDcwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIC5jdXJyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAucHJvY2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogLTQwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSBoMyB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICB6LWluZGV4OiA5OTk7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjNTA1MDU0O1xuICB3aWR0aDogMjQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRvcDogY2FsYygxMDAlICsgMjBweCk7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNDAlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGRpdiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYnVkZ2V0LW1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwODFmZjtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM5YTlhOWE7XG59XG4uYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDE3MHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG4uYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjBweDtcbn1cbi5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4uYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWFpbi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yYW5nZS1zbGlkZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5iYWNrYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDIwcHg7XG59XG5cbi5tYWluLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLm1haW4tZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTcwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgLmJ1ZGdldC1tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIC5uZGxlZnQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC56YXJsYWdhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5tYWluSW1nIHtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC5jaGFydC1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5iYWNrYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIGgzIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMjkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgZGl2IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLnphcmxhZ2EgLm5kcmlnaHQgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IGltZyB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAubWFpbkltZyB7XG4gICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmJ1ZGdldC1tYWluIHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNzUwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2Ege1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC50aXRsZSBoMyB7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLm1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGltZy5ib3R0b21faWNvbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDI5MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgLmN1cnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnByb2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogLTM2MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBoMyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50OmhvdmVyIC5hbmltYXRlLXNob3cge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTA1MDU0O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdG9wOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNTA1MDU0O1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGRpdiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCBwIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSBoMyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YTlhOWE7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNDAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA0MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTVweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5iYWNrYnRuIGltZyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIGgzIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMjkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgZGl2IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IHAge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5idWRnZXQtbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAwcHggI2QyZDJkMjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzlhOWE5YTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAub3Jsb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLnRpdGxlIC5jaGFydC10ZXh0IC5vcmxvZ28gLm5kbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzAlO1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgLm9ybG9nbyAubmRsZWZ0IGltZyB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAzMCU7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluIC50aXRsZSAuY2hhcnQtdGV4dCAuemFybGFnYSAubmRyaWdodCBpbWcge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbiAudGl0bGUgLmNoYXJ0LXRleHQgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4gLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5idWRnZXQtbWFpbiAuY2hhcnQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTVweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5iYWNrYnRuIGltZyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIGgzIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMjkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciAuY3VyciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAucHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAtMzYwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgZGl2IHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYnVkZ2V0LW1haW4ge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnRpdGxlIGgzIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSBpbWcubWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgaW1nLmJvdHRvbV9pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMjkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAubnVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC5udW1iZXIgLmN1cnIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLm51bWJlciBwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnByb2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogLTMwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIGgzIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQ6aG92ZXIgLmFuaW1hdGUtc2hvdyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLnphcmxhZ2EgLnphcmxhZ2EtaXRlbSBkaXYuY29udGVudCAuYW5pbWF0ZS1zaG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDIwcHgpO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgLmFuaW1hdGUtc2hvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM1MDUwNTQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IC5hbmltYXRlLXNob3cgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuYnVkZ2V0LW1haW4uemFybGFnYSAuemFybGFnYS1pdGVtIGRpdi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgZGl2IHtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi56YXJsYWdhIC56YXJsYWdhLWl0ZW0gZGl2LmNvbnRlbnQgcCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuYmFja2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuYmFja2J0biBpbWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EdaatgalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edaatgal',
          templateUrl: './edaatgal.component.html',
          styleUrls: ['./edaatgal.component.scss']
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
  "./src/app/budget/edaatgal/edaatgal.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/budget/edaatgal/edaatgal.module.ts ***!
    \****************************************************/

  /*! exports provided: EdaatgalModule */

  /***/
  function _src_app_budget_edaatgal_edaatgalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EdaatgalModule", function () {
      return EdaatgalModule;
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


    var _edaatgal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edaatgal.component */
    "./src/app/budget/edaatgal/edaatgal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _echart_echart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./echart/echart.component */
    "./src/app/budget/edaatgal/echart/echart.component.ts");
    /* harmony import */


    var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/year-change/year-change.module */
    "./src/app/modules/year-change/year-change.module.ts");
    /* harmony import */


    var src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modules/description/description.module */
    "./src/app/modules/description/description.module.ts");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts");
    /* harmony import */


    var src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modules/simple-number/simple-number.module */
    "./src/app/modules/simple-number/simple-number.module.ts"); // import { NgApexchartsModule } from 'ng-apexcharts';


    var routes = [{
      path: '',
      component: _edaatgal_component__WEBPACK_IMPORTED_MODULE_2__["EdaatgalComponent"]
    }];

    var EdaatgalModule = /*#__PURE__*/_createClass(function EdaatgalModule() {
      _classCallCheck(this, EdaatgalModule);
    });

    EdaatgalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EdaatgalModule
    });
    EdaatgalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EdaatgalModule_Factory(t) {
        return new (t || EdaatgalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], // NgApexchartsModule,
      src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__["IconsModule"], src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__["SimpleNumberModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EdaatgalModule, {
        declarations: [_edaatgal_component__WEBPACK_IMPORTED_MODULE_2__["EdaatgalComponent"], _echart_echart_component__WEBPACK_IMPORTED_MODULE_4__["EchartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], // NgApexchartsModule,
        src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__["IconsModule"], src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__["SimpleNumberModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EdaatgalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_edaatgal_component__WEBPACK_IMPORTED_MODULE_2__["EdaatgalComponent"], _echart_echart_component__WEBPACK_IMPORTED_MODULE_4__["EchartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_5__["YearChangeModule"], src_app_modules_description_description_module__WEBPACK_IMPORTED_MODULE_6__["DescriptionModule"], // NgApexchartsModule,
          src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_7__["IconsModule"], src_app_modules_simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_8__["SimpleNumberModule"]],
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
//# sourceMappingURL=edaatgal-edaatgal-module-es5.js.map