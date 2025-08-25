(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~debt-debt-module~orlogo-orlogo-module~ulsiintusuv-ulsiintusuv-module"],{

/***/ "./src/app/modules/charts/charts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/charts/charts.component.ts ***!
  \****************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/constants */ "./src/app/services/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../simple-number/simple-number.component */ "./src/app/modules/simple-number/simple-number.component.ts");









const _c0 = ["chart"];
function ChartsComponent_ng_container_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChartsComponent_ng_container_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChartsComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChartsComponent_ng_container_0_div_1_div_2_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChartsComponent_ng_container_0_div_1_div_3_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-simple-number", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("text-align:center; width: ", ctx_r2.width, "px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isOrlogo ? "orlogo_m" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r2.chartOptions.series)("labels", ctx_r2.chartOptions.labels)("chart", ctx_r2.chartOptions.chart)("xaxis", ctx_r2.chartOptions.xaxis)("title", ctx_r2.chartOptions.title)("legend", ctx_r2.chartOptions.legend)("plotOptions", ctx_r2.chartOptions.plotOptions)("colors", ctx_r2.chartOptions.colors)("stroke", ctx_r2.chartOptions.stroke)("dataLabels", ctx_r2.chartOptions.dataLabels)("tooltip", ctx_r2.chartOptions.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOrlogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isZarlaga);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text1", ctx_r2.title)("text2", "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433")("baseNumber", ctx_r2.getValues())("color", "#28c66f")("percent", ctx_r2.percent)("befPercent", ctx_r2.befPercent)("prefValue", ctx_r2.prefValue);
} }
function ChartsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartsComponent_ng_container_0_div_1_Template, 6, 24, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDataLoaded);
} }
function ChartsComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r5.chartOptions.series)("chart", ctx_r5.chartOptions.chart)("stroke", ctx_r5.chartOptions.stroke)("title", ctx_r5.chartOptions.title)("dataLabels", ctx_r5.chartOptions.dataLabels)("labels", ctx_r5.chartOptions.labels)("xaxis", ctx_r5.chartOptions.xaxis)("yaxis", ctx_r5.chartOptions.yaxis);
} }
function ChartsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChartsComponent_ng_container_1_div_3_Template, 2, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDataLoaded);
} }
class ChartsComponent {
    constructor(mainService, route, router) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.isDataLoaded = false;
        this.chartType = "donut";
        this.series = [];
        this.labels = [];
        this.percent = 0;
        this.prefValue = 0;
        this.width = 0;
        this.labelWidth = 0;
        this.fontSize = "13px";
        this.params = { year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year, category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category };
        this.onResize();
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (val.url.split('?').length > 1) {
                    this.setQueryParam(val.url.split('?')[1]);
                }
            }
        });
    }
    onResize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }
    setQueryParam(param) {
        var query = {};
        var params = param.split("&");
        params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
        }, this);
    }
    ngOnInit() {
        this.getWidth();
        if (this.chartType === "donut") {
            this.getDonut();
        }
        if (this.chartType === "multi") {
            this.getMulti();
        }
        if (this.chartType === "multi-line") {
            this.getMultiLine();
        }
    }
    getDonut() {
        const handleSelect = (event, chartContext, config) => {
            this.mainService.orlogoSub(this.sub, config.dataPointIndex);
        };
        this.chartOptions = {
            series: this.values,
            chart: {
                fontFamily: "Montserrat, sans-serif",
                width: '100%',
                type: "donut",
                startAngle: 55,
                events: {
                    legendClick: function (chartContext, seriesIndex, config) {
                    },
                    dataPointSelection: handleSelect
                },
            },
            labels: this.names,
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '16px'
                },
                dropShadow: {
                    enabled: false
                }
            },
            colors: ['#008ffb', '#28c66f', '#b754ea'],
            stroke: {
                width: 0,
            },
            legend: {
                position: "bottom",
                width: this.labelWidth,
                horizontalAlign: 'left',
                offsetX: 100,
                fontSize: this.fontSize,
                markers: {
                    radius: 0
                },
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value, series) {
                        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    },
                    title: {
                        formatter: (seriesName) => seriesName + ": ",
                    },
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                    },
                    startAngle: 55,
                    rotate: 20,
                    formatter: function (val) {
                        return val + "%";
                    },
                }
            },
            responsive: [
                {
                    breakpoint: 1024,
                    options: {
                        chart: {
                            width: 400
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
        this.isDataLoaded = true;
    }
    getMulti() {
        this.chartType = "multi";
        this.chartOptions = {
            series: this.series,
            chart: {
                height: 350,
                type: 'line',
                fontFamily: "Montserrat, sans-serif",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [0, 4, 4]
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0, 1, 2]
            },
            labels: this.labels,
            xaxis: {
                type: 'year'
            },
            yaxis: [
                {}, {
                    opposite: true,
                }
            ]
        };
        this.isDataLoaded = true;
    }
    getMultiLine() {
        this.chartType = "multi";
        this.chartOptions = {
            series: this.series,
            chart: {
                height: 350,
                type: 'line',
                fontFamily: "Montserrat, sans-serif",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [3, 3, 3]
            },
            dataLabels: {
                enabled: true
            },
            labels: this.labels,
            xaxis: {
                type: 'year'
            }
        };
        this.isDataLoaded = true;
    }
    getWidth() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 1680 && this.screenWidth > 1440) {
            if (!this.legend) {
                this.width = 450;
            }
            else {
                this.labelWidth = 350;
                this.fontSize = "10px";
                this.width = 550;
            }
        }
        else if (this.screenWidth <= 1440 && this.screenWidth > 1200) {
            if (!this.legend) {
                this.width = 350;
            }
            else {
                this.labelWidth = 350;
                this.fontSize = "10px";
                this.width = 480;
            }
        }
        else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            if (!this.legend) {
                this.width = 300;
            }
            else {
                this.labelWidth = 360;
                this.fontSize = "10px";
                this.width = 458;
            }
        }
        else {
            if (!this.legend) {
                this.width = 500;
            }
            else {
                this.width = 580;
            }
        }
    }
    getValues() {
        var sum = 0;
        this.values.forEach(element => {
            sum += element;
        });
        return sum;
    }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["budget-charts"]], viewQuery: function ChartsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, hostBindings: function ChartsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ChartsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { values: "values", names: "names", title: "title", sub: "sub", sum: "sum", process: "process", isZarlaga: "isZarlaga", isOrlogo: "isOrlogo", legend: "legend", chartType: "chartType", series: "series", labels: "labels", percent: "percent", befPercent: "befPercent", prefValue: "prefValue" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "pie_chart center", 3, "style", "ngClass", 4, "ngIf"], [1, "pie_chart", "center", 3, "ngClass"], [3, "series", "labels", "chart", "xaxis", "title", "legend", "plotOptions", "colors", "stroke", "dataLabels", "tooltip"], [1, "chart_text"], [1, "orlogo", 3, "text1", "text2", "baseNumber", "color", "percent", "befPercent", "prefValue"], ["src", "../../../../assets/image/budget/main/orlogo.png", 1, "m_l"], ["src", "../../../../assets/image/budget/main/zarlaga.png", 1, "m_l"], [1, "title"], ["class", "multi_chart", 4, "ngIf"], [1, "multi_chart"], [3, "series", "chart", "stroke", "title", "dataLabels", "labels", "xaxis", "yaxis"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChartsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartsComponent_ng_container_1_Template, 4, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartType === "donut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartType === "multi");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_5__["SimpleNumberComponent"]], styles: [".apexcharts-legend-marker[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n\n.pie_chart[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pie_chart.center[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.pie_chart.orlogo_m[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\n\n.pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0px auto 0px;\n  position: absolute;\n  top: -45px;\n  left: 0px;\n  right: 0px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 50px;\n  width: 200px;\n  color: #505054;\n  font-weight: bold;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-block;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  background-color: #28c66f;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #28c66f;\n  font-weight: bold;\n  font-size: 55px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #999;\n  margin-top: 10px;\n  padding: 5px;\n  text-transform: none;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n  min-height: 40px;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 1440px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2QkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0FDRVI7O0FEQUk7RUFDSSwyQkFBQTtBQ0VSOztBREFJO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFUjs7QURBSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VSOztBRERRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQ0daOztBRERRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNHWjs7QUREUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHWjs7QUREUTtFQUNJLGNBQUE7QUNHWjs7QURDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksa0JBQUE7RUNBTjtFRENNO0lBQ0ksZ0JBQUE7RUNDVjtFRENNO0lBQ0ksMkJBQUE7RUNDVjtFRENNO0lBQ0ksY0FBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNDVjtFRENNO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDQ1Y7RURBVTtJQUNJLGdCQUFBO0lBQ0EscUJBQUE7RUNFZDtFREFVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNFZDtFREFVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ0VkO0VEQVU7SUFDSSxjQUFBO0VDRWQ7RURFTTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDQVY7QUFDRjs7QURLQTtFQUNJO0lBQ0ksa0JBQUE7RUNITjtFRElNO0lBQ0ksZ0JBQUE7RUNGVjtFRElNO0lBQ0ksMkJBQUE7RUNGVjtFRElNO0lBQ0ksY0FBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNGVjtFRElNO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDRlY7RURHVTtJQUNJLGdCQUFBO0lBQ0EscUJBQUE7RUNEZDtFREdVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNEZDtFREdVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ0RkO0VER1U7SUFDSSxjQUFBO0VDRGQ7RURLTTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFwZXhjaGFydHMtbGVnZW5kLW1hcmtlcntcbiAgICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50O1xufVxuLnBpZV9jaGFydHsgICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuY2VudGVye1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvOyAgICAgICAgXG4gICAgfVxuICAgICYub3Jsb2dvX20ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cbiAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVscHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYntcbiAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5wcm9jZXNze1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnBpZV9jaGFydHsgICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5jZW50ZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgJi5vcmxvZ29fbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAucGllX2NoYXJ0eyAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmNlbnRlcntcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAmLm9ybG9nb19tIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHghaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC00NXB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbiIsIi5hcGV4Y2hhcnRzLWxlZ2VuZC1tYXJrZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnBpZV9jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waWVfY2hhcnQuY2VudGVyIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5waWVfY2hhcnQub3Jsb2dvX20ge1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4ucGllX2NoYXJ0IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00NXB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAuaGVscCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgY29sb3I6ICMyOGM2NmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDU1cHg7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IGIge1xuICBjb2xvcjogIzI4YzY2Zjtcbn1cbi5waWVfY2hhcnQgLnByb2Nlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucGllX2NoYXJ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnBpZV9jaGFydC5jZW50ZXIge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLnBpZV9jaGFydC5vcmxvZ29fbSB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5waWVfY2hhcnQgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNDVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBoNCB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgYiB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gIH1cbiAgLnBpZV9jaGFydCAucHJvY2VzcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5waWVfY2hhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucGllX2NoYXJ0LmNlbnRlciB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAucGllX2NoYXJ0Lm9ybG9nb19tIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBpZV9jaGFydCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC00NXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IC5oZWxwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgfVxuICAucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'budget-charts',
                templateUrl: './charts.component.html',
                styleUrls: ['./charts.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], names: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], process: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isZarlaga: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOrlogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chartType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], befPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prefValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/charts/charts.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/charts/charts.module.ts ***!
  \*************************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple/simple.component */ "./src/app/modules/charts/simple/simple.component.ts");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.component */ "./src/app/modules/charts/charts.component.ts");
/* harmony import */ var _simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../simple-number/simple-number.module */ "./src/app/modules/simple-number/simple-number.module.ts");




// import { NgApexchartsModule } from 'ng-apexcharts';


class ChartsModule {
}
ChartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartsModule });
ChartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartsModule_Factory(t) { return new (t || ChartsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // NgApexchartsModule,
            _simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_4__["SimpleNumberModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartsModule, { declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"], _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // NgApexchartsModule,
        _simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_4__["SimpleNumberModule"]], exports: [_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"], _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"], _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // NgApexchartsModule,
                    _simple_number_simple_number_module__WEBPACK_IMPORTED_MODULE_4__["SimpleNumberModule"]
                ],
                exports: [_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"], _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/charts/simple/simple.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/charts/simple/simple.component.ts ***!
  \***********************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/constants */ "./src/app/services/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../simple-number/simple-number.component */ "./src/app/modules/simple-number/simple-number.component.ts");









const _c0 = ["chart"];
function SimpleComponent_ng_container_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimpleComponent_ng_container_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SimpleComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleComponent_ng_container_0_div_1_div_2_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleComponent_ng_container_0_div_1_div_3_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-simple-number", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("text-align:center; width: ", ctx_r2.width, "px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.isOrlogo ? "orlogo_m" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r2.chartOptions.series)("labels", ctx_r2.chartOptions.labels)("chart", ctx_r2.chartOptions.chart)("xaxis", ctx_r2.chartOptions.xaxis)("title", ctx_r2.chartOptions.title)("legend", ctx_r2.chartOptions.legend)("plotOptions", ctx_r2.chartOptions.plotOptions)("colors", ctx_r2.chartOptions.colors)("stroke", ctx_r2.chartOptions.stroke)("dataLabels", ctx_r2.chartOptions.dataLabels)("tooltip", ctx_r2.chartOptions.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOrlogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isZarlaga);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text1", ctx_r2.title)("text2", "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433")("baseNumber", ctx_r2.getValues())("color", "#28c66f")("percent", ctx_r2.percent)("befPercent", ctx_r2.befPercent)("prefValue", ctx_r2.prefValue);
} }
function SimpleComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleComponent_ng_container_0_div_1_Template, 6, 24, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDataLoaded);
} }
function SimpleComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r5.chartOptions.series)("chart", ctx_r5.chartOptions.chart)("stroke", ctx_r5.chartOptions.stroke)("title", ctx_r5.chartOptions.title)("dataLabels", ctx_r5.chartOptions.dataLabels)("labels", ctx_r5.chartOptions.labels)("xaxis", ctx_r5.chartOptions.xaxis)("yaxis", ctx_r5.chartOptions.yaxis);
} }
function SimpleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleComponent_ng_container_1_div_3_Template, 2, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDataLoaded);
} }
class SimpleComponent {
    constructor(mainService, route, router) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.isDataLoaded = false;
        this.chartType = "donut";
        this.series = [];
        this.labels = [];
        this.percent = 0;
        this.prefValue = 0;
        this.width = 0;
        this.labelWidth = 0;
        this.fontSize = "13px";
        this.params = { year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year, category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category };
        this.onResize();
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (val.url.split('?').length > 1) {
                    this.setQueryParam(val.url.split('?')[1]);
                }
            }
        });
    }
    onResize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        // console.log("width" + this.screenHeight, this.screenWidth);
        // console.log("legend" + this.getWidth());
        // if(!this.legend){
        //   this.width = 500;
        // }
        // if(this.screenWidth<=1680 && this.screenWidth>1440){
        //   this.width = 450;
        // }else if( this.screenWidth<=1440 && this.screenWidth>1200){
        //   this.width = 350;
        // }else if( this.screenWidth<=1200 && this.screenWidth>1010){
        //   this.width = 300;
        // }else{
        //   this.width = 500;
        // }
    }
    setQueryParam(param) {
        var query = {};
        var params = param.split("&");
        params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
        }, this);
    }
    ngOnInit() {
        this.getWidth();
        if (this.chartType === "donut") {
            this.getDonut();
        }
        if (this.chartType === "multi") {
            this.getMulti();
        }
        if (this.chartType === "multi-line") {
            this.getMultiLine();
        }
    }
    getDonut() {
        const handleSelect = (event, chartContext, config) => {
            this.mainService.orlogoSub(this.sub, config.dataPointIndex);
        };
        this.chartOptions = {
            series: this.values,
            chart: {
                fontFamily: "Montserrat, sans-serif",
                width: '100%',
                type: "donut",
                startAngle: 55,
                events: {
                    legendClick: function (chartContext, seriesIndex, config) {
                    },
                    dataPointSelection: handleSelect
                },
            },
            labels: this.names,
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '16px'
                },
                dropShadow: {
                    enabled: false
                }
            },
            colors: ['#008ffb', '#28c66f', '#b754ea'],
            stroke: {
                width: 0,
            },
            legend: {
                position: "bottom",
                width: this.labelWidth,
                horizontalAlign: 'left',
                offsetX: 100,
                fontSize: this.fontSize,
                markers: {
                    radius: 0
                },
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function (value, series) {
                        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    },
                    title: {
                        formatter: (seriesName) => seriesName + ": ",
                    },
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                    },
                    startAngle: 55,
                    rotate: 20,
                    formatter: function (val) {
                        return val + "%";
                    },
                }
            },
            responsive: [
                {
                    breakpoint: 1024,
                    options: {
                        chart: {
                            width: 400
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
        this.isDataLoaded = true;
    }
    getMulti() {
        this.chartType = "multi";
        this.chartOptions = {
            // title: {
            //   text: this.title,
            //   align: 'left',
            //   style: {
            //     fontFamily: "Montserrat, sans-serif",
            //   }
            // },
            series: this.series,
            chart: {
                height: 350,
                type: 'line',
                fontFamily: "Montserrat, sans-serif",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [0, 4, 4]
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0, 1, 2]
            },
            labels: this.labels,
            xaxis: {
                type: 'year'
            },
            yaxis: [
                {}, {
                    opposite: true,
                }
            ]
        };
        this.isDataLoaded = true;
    }
    getMultiLine() {
        this.chartType = "multi";
        this.chartOptions = {
            // title: {
            //   text: this.title,
            //   align: 'left',
            //   height: 80,        
            //   style: {
            //     fontFamily: "Montserrat, sans-serif",
            //   }
            // },
            series: this.series,
            chart: {
                height: 350,
                type: 'line',
                fontFamily: "Montserrat, sans-serif",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [3, 3, 3]
            },
            dataLabels: {
                enabled: true
            },
            labels: this.labels,
            xaxis: {
                type: 'year'
            }
        };
        this.isDataLoaded = true;
    }
    getWidth() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 1680 && this.screenWidth > 1440) {
            if (!this.legend) {
                this.width = 450;
            }
            else {
                this.labelWidth = 350;
                this.fontSize = "12px";
                this.width = 500;
            }
        }
        else if (this.screenWidth <= 1440 && this.screenWidth > 1200) {
            if (!this.legend) {
                this.width = 350;
            }
            else {
                this.width = 435;
                this.fontSize = "10px";
            }
        }
        else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            if (!this.legend) {
                this.width = 300;
            }
            else {
                this.width = 420;
                this.fontSize = "10px";
            }
        }
        else {
            this.width = 540;
        }
    }
    getValues() {
        var sum = 0;
        this.values.forEach(element => {
            sum += element;
        });
        return sum;
    }
}
SimpleComponent.ɵfac = function SimpleComponent_Factory(t) { return new (t || SimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleComponent, selectors: [["app-simple"]], viewQuery: function SimpleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, hostBindings: function SimpleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SimpleComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { values: "values", names: "names", title: "title", sub: "sub", sum: "sum", process: "process", isZarlaga: "isZarlaga", isOrlogo: "isOrlogo", legend: "legend", chartType: "chartType", series: "series", labels: "labels", percent: "percent", befPercent: "befPercent", prefValue: "prefValue" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "pie_chart center", 3, "style", "ngClass", 4, "ngIf"], [1, "pie_chart", "center", 3, "ngClass"], [3, "series", "labels", "chart", "xaxis", "title", "legend", "plotOptions", "colors", "stroke", "dataLabels", "tooltip"], [1, "chart_text"], [1, "orlogo", 3, "text1", "text2", "baseNumber", "color", "percent", "befPercent", "prefValue"], ["src", "../../../../assets/image/budget/main/orlogo.png", 1, "m_l"], ["src", "../../../../assets/image/budget/main/zarlaga.png", 1, "m_l"], [1, "title"], ["class", "multi_chart", 4, "ngIf"], [1, "multi_chart"], [3, "series", "chart", "stroke", "title", "dataLabels", "labels", "xaxis", "yaxis"]], template: function SimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleComponent_ng_container_1_Template, 4, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartType === "donut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartType === "multi");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _simple_number_simple_number_component__WEBPACK_IMPORTED_MODULE_5__["SimpleNumberComponent"]], styles: [".apexcharts-legend-marker[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n\n.pie_chart[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.pie_chart.center[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n\n.pie_chart.orlogo_m[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\n\n.pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0px auto 0px;\n  position: absolute;\n  top: -45px;\n  left: 0px;\n  right: 0px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 50px;\n  width: 200px;\n  color: #505054;\n  font-weight: bold;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-block;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  background-color: #28c66f;\n  color: #fff;\n  margin-bottom: 10px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #28c66f;\n  font-weight: bold;\n  font-size: 55px;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n\n.pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #999;\n  margin-top: 10px;\n  padding: 5px;\n  text-transform: none;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n  min-height: 40px;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 1440px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart.orlogo_m[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n  }\n  .pie_chart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: absolute;\n    top: -45px;\n    left: 0px;\n    right: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 10px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9jaGFydHMvc2ltcGxlL3NpbXBsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGFydHMvc2ltcGxlL3NpbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDZCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksZ0JBQUE7QUNFUjs7QURBSTtFQUNJLDJCQUFBO0FDRVI7O0FEQUk7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VSOztBREFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRVI7O0FERFE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FDR1o7O0FERFE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0daOztBRERRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksY0FBQTtBQ0daOztBRENJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNDUjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxrQkFBQTtFQ0FOO0VEQ007SUFDSSxnQkFBQTtFQ0NWO0VEQ007SUFDSSwyQkFBQTtFQ0NWO0VEQ007SUFDSSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0NWO0VEQ007SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNDVjtFREFVO0lBQ0ksZ0JBQUE7SUFDQSxxQkFBQTtFQ0VkO0VEQVU7SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ0VkO0VEQVU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDRWQ7RURBVTtJQUNJLGNBQUE7RUNFZDtFREVNO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7RUNBVjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxrQkFBQTtFQ0pOO0VES007SUFDSSxnQkFBQTtFQ0hWO0VES007SUFDSSwyQkFBQTtFQ0hWO0VES007SUFDSSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0hWO0VES007SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNIVjtFRElVO0lBQ0ksZ0JBQUE7SUFDQSxxQkFBQTtFQ0ZkO0VESVU7SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ0ZkO0VESVU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDRmQ7RURJVTtJQUNJLGNBQUE7RUNGZDtFRE1NO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7RUNKVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jaGFydHMvc2ltcGxlL3NpbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFwZXhjaGFydHMtbGVnZW5kLW1hcmtlcntcbiAgICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50O1xufVxuLnBpZV9jaGFydHsgICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuY2VudGVye1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvOyAgICAgICAgXG4gICAgfVxuICAgICYub3Jsb2dvX20ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgIH1cbiAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVscHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYntcbiAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5wcm9jZXNze1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnBpZV9jaGFydHsgICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5jZW50ZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgJi5vcmxvZ29fbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5wcm9jZXNze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5waWVfY2hhcnR7ICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYuY2VudGVye1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bzsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICYub3Jsb2dvX20ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBie1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuIiwiLmFwZXhjaGFydHMtbGVnZW5kLW1hcmtlciB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGllX2NoYXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBpZV9jaGFydC5jZW50ZXIge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLnBpZV9jaGFydC5vcmxvZ29fbSB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cbi5waWVfY2hhcnQgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQ1cHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogIzUwNTA1NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IHNwYW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucGllX2NoYXJ0IC5jaGFydF90ZXh0IC5oZWxwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaDQge1xuICBjb2xvcjogIzI4YzY2ZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNTVweDtcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgYiB7XG4gIGNvbG9yOiAjMjhjNjZmO1xufVxuLnBpZV9jaGFydCAucHJvY2VzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5waWVfY2hhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucGllX2NoYXJ0LmNlbnRlciB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAucGllX2NoYXJ0Lm9ybG9nb19tIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBpZV9jaGFydCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC00NXB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IC5oZWxwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgfVxuICAucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBpZV9jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5waWVfY2hhcnQuY2VudGVyIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5waWVfY2hhcnQub3Jsb2dvX20ge1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAucGllX2NoYXJ0IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTQ1cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLmhlbHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaDQge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGIge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICB9XG4gIC5waWVfY2hhcnQgLnByb2Nlc3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple',
                templateUrl: './simple.component.html',
                styleUrls: ['./simple.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], names: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], process: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isZarlaga: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOrlogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chartType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], befPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prefValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~debt-debt-module~orlogo-orlogo-module~ulsiintusuv-ulsiintusuv-module-es2015.js.map