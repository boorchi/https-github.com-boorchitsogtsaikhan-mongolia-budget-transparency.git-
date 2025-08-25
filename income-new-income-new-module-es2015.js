(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-new-income-new-module"],{

/***/ "./src/app/budget/income-new/income-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/budget/income-new/income-new.component.ts ***!
  \***********************************************************/
/*! exports provided: IncomeNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeNewComponent", function() { return IncomeNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/constants */ "./src/app/services/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/year-change/year-change.component */ "./src/app/modules/year-change/year-change.component.ts");
/* harmony import */ var _modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/carousel/carousel.component */ "./src/app/modules/carousel/carousel.component.ts");








const _c0 = function () { return [2019, 2020, 2021, 2022, 2023]; };
class IncomeNewComponent {
    constructor(mainService, route, router) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.params = { year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year, category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category };
        this.slideData = { type: 8, datas: [{ name: "0", number: " 1", year: "" },
                { name: "1", number: " 2" },
                { name: "2", number: " 3" },
                { name: "3", number: " 4" },
                { name: "4", number: " 5" }
            ] };
        this.show = false;
        this.description = '';
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (val.url.split('?').length > 1) {
                    this.setQueryParam(val.url.split('?')[1]);
                }
                this.setData();
            }
        });
    }
    setQueryParam(param) {
        var query = {};
        var params = param.split("&");
        params.forEach(function (entry) {
            var p = entry.split('=');
            this.params[p[0]] = p[1];
        }, this);
    }
    setData() {
        if (this.params["year"] == 2021) {
            this.slideData = { type: 8, datas: [{ name: "1", number: " 1", year: "2021" },
                    { name: "2", number: " 2", year: "2021" },
                    { name: "3", number: " 3", year: "2021" },
                    { name: "4", number: " 4", year: "2021" },
                    { name: "5", number: " 5", year: "2021" },
                    { name: "6", number: " 6", year: "2021" }
                ] };
        }
        if (this.params["year"] == 2020) {
            this.slideData = { type: 8, datas: [{ name: "1", number: " 1", year: "2020" },
                    { name: "2", number: " 2", year: "2020" },
                    { name: "3", number: " 3", year: "2020" },
                    { name: "4", number: " 4", year: "2020" },
                    { name: "5", number: " 5", year: "2020" }
                ] };
        }
        if (this.params["year"] == 2019) {
            this.slideData = { type: 8, datas: [{ name: "1", number: " 1", year: "2019" },
                    { name: "2", number: " 2", year: "2019" }
                ] };
        }
    }
    ngOnInit() {
    }
}
IncomeNewComponent.ɵfac = function IncomeNewComponent_Factory(t) { return new (t || IncomeNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IncomeNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncomeNewComponent, selectors: [["app-income-new"]], decls: 7, vars: 5, consts: [[1, "budget-content"], [1, "budget-top"], [1, "trapezoid"], [3, "showSelect", "showYear", "show"], [1, "budget-main-invest", "investment"], [1, ""], [3, "slideData"]], template: function IncomeNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "module-year-change", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "module-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSelect", 0)("showYear", true)("show", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slideData", ctx.slideData);
    } }, directives: [_modules_year_change_year_change_component__WEBPACK_IMPORTED_MODULE_4__["YearChangeComponent"], _modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]], styles: [".budget-main-invest[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  min-height: 700px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  z-index: 0;\n}\n.budget-main-invest.investment[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: 100%;\n  margin-bottom: 20px;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 45px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #0081ff;\n  text-transform: uppercase;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 780px;\n  top: 100px;\n  height: 260px;\n  left: 120px;\n  border-radius: 15px;\n  position: relative;\n  color: #fff;\n  background-color: #28c66f;\n  transform: skewX(-20deg);\n}\n.budget-main-invest[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 200px;\n}\n.budget-content[_ngcontent-%COMP%]   .budget-top[_ngcontent-%COMP%]   .trapezoid[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.main-description[_ngcontent-%COMP%] {\n  padding: 30px 30px;\n}\n.main-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 40%;\n  float: right;\n  text-align: left;\n}\n.main-description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.budget-block[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px;\n  font-weight: 700;\n}\n@media screen and (max-width: 1366px) {\n  .budget-content[_ngcontent-%COMP%]   .budget-top[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    z-index: 1;\n  }\n\n  .budget-main-invest[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 5px;\n    min-height: 700px;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    z-index: 0;\n  }\n  .budget-main-invest.investment[_ngcontent-%COMP%] {\n    position: relative;\n    background-size: 100%;\n    margin-bottom: 20px;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 45px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0081ff;\n    text-transform: uppercase;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 780px;\n    top: 100px;\n    height: 260px;\n    left: 120px;\n    border-radius: 15px;\n    position: relative;\n    color: #fff;\n    background-color: #28c66f;\n    transform: skewX(-20deg);\n  }\n  .budget-main-invest[_ngcontent-%COMP%]   .tugrug[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    right: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvYnVkZ2V0L2luY29tZS1uZXcvaW5jb21lLW5ldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVkZ2V0L2luY29tZS1uZXcvaW5jb21lLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBRUEsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUNGSjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURJUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNGWjtBRElRO0VBQ0ksV0FBQTtBQ0ZaO0FETUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNKUjtBRE9RO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0xaO0FEVUE7RUFDSSxZQUFBO0FDUEo7QURVQTtFQUNJLGtCQUFBO0FDUEo7QURRSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFFJO0VBQ0ksV0FBQTtBQ05SO0FEVUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1BKO0FEVUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUFI7QURZQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDVE47O0VEV0U7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFFQSxpQkFBQTtJQUVBLDRCQUFBO0lBQ0EsMEJBQUE7SUFDQSxVQUFBO0VDVk47RURXTTtJQUNJLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ1RWO0VEWVU7SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VDVmQ7RURZVTtJQUNJLFdBQUE7RUNWZDtFRGNNO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0VDWlY7RURlVTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7RUNiZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYnVkZ2V0L2luY29tZS1uZXcvaW5jb21lLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ1ZGdldC1tYWluLWludmVzdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDBweCAjZDJkMmQyO1xuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmcvY29uY2VwdC5QTkdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICAgICYuaW52ZXN0bWVudHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfSAgICBcbiAgICAudGl0bGV7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwODFmZjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC50b3RhbHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNzgwcHg7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICAgIGxlZnQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG4gICAgfVxuICAgIC50dWdydWd7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbi5idWRnZXQtY29udGVudCAuYnVkZ2V0LXRvcCAudHJhcGV6b2lke1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLm1haW4tZGVzY3JpcHRpb257XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICAgIHB7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5idWRnZXQtYmxvY2s+aDMge1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlIHtcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIC5idWRnZXQtY29udGVudCAuYnVkZ2V0LXRvcCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLmJ1ZGdldC1tYWluLWludmVzdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMHB4ICNkMmQyZDI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JnL2NvbmNlcHQuUE5HXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgJi5pbnZlc3RtZW50e1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfSAgICBcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC50b3RhbHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3ODBweDtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgICAgICAgICAgbGVmdDogMTIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIC50dWdydWd7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsIi5idWRnZXQtbWFpbi1pbnZlc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgei1pbmRleDogMDtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QuaW52ZXN0bWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJ1ZGdldC1tYWluLWludmVzdCAudGl0bGUgaDMge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDgxZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC50aXRsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idWRnZXQtbWFpbi1pbnZlc3QgLnRvdGFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzgwcHg7XG4gIHRvcDogMTAwcHg7XG4gIGhlaWdodDogMjYwcHg7XG4gIGxlZnQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG59XG4uYnVkZ2V0LW1haW4taW52ZXN0IC50dWdydWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyMDBweDtcbn1cblxuLmJ1ZGdldC1jb250ZW50IC5idWRnZXQtdG9wIC50cmFwZXpvaWQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5tYWluLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLm1haW4tZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluLWRlc2NyaXB0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnVkZ2V0LWJsb2NrID4gaDMge1xuICBjb2xvcjogIzAwODFmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50aXRsZSBoMyB7XG4gIGNvbG9yOiAjMDA4MWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuYnVkZ2V0LWNvbnRlbnQgLmJ1ZGdldC10b3Age1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuYnVkZ2V0LW1haW4taW52ZXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QuaW52ZXN0bWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGgzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnRpdGxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ1ZGdldC1tYWluLWludmVzdCAudG90YWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzgwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIGxlZnQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpO1xuICB9XG4gIC5idWRnZXQtbWFpbi1pbnZlc3QgLnR1Z3J1ZyBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDIwMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncomeNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-income-new',
                templateUrl: './income-new.component.html',
                styleUrls: ['./income-new.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/budget/income-new/income-new.module.ts":
/*!********************************************************!*\
  !*** ./src/app/budget/income-new/income-new.module.ts ***!
  \********************************************************/
/*! exports provided: IncomeNewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeNewModule", function() { return IncomeNewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _income_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./income-new.component */ "./src/app/budget/income-new/income-new.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/year-change/year-change.module */ "./src/app/modules/year-change/year-change.module.ts");
/* harmony import */ var src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/carousel/ng-carousel.module */ "./src/app/modules/carousel/ng-carousel.module.ts");








const routes = [
    {
        path: '',
        component: _income_new_component__WEBPACK_IMPORTED_MODULE_2__["IncomeNewComponent"]
    },
];
class IncomeNewModule {
}
IncomeNewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IncomeNewModule });
IncomeNewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IncomeNewModule_Factory(t) { return new (t || IncomeNewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"],
            src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_5__["NgCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IncomeNewModule, { declarations: [_income_new_component__WEBPACK_IMPORTED_MODULE_2__["IncomeNewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"],
        src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_5__["NgCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncomeNewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_income_new_component__WEBPACK_IMPORTED_MODULE_2__["IncomeNewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_modules_year_change_year_change_module__WEBPACK_IMPORTED_MODULE_4__["YearChangeModule"],
                    src_app_modules_carousel_ng_carousel_module__WEBPACK_IMPORTED_MODULE_5__["NgCarouselModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=income-new-income-new-module-es2015.js.map