function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~concept-concept-module~coviddemo-coviddemo-module~debit-concept-debit-concept-module~debt-de~e34b115a"], {
  /***/
  "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js ***!
    \*************************************************************************************/

  /*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */

  /***/
  function _node_modules_ngxOwlCarouselO___ivy_ngcc___fesm2015_ngxOwlCarouselOJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return CarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function () {
      return CarouselSlideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function () {
      return OwlRouterLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function () {
      return OwlRouterLinkWithHrefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function () {
      return SlidesOutputData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NavigationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CarouselService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return OwlLogger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return AutoplayService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return WINDOW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return BrowserWindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return windowFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return browserWindowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return windowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return WINDOW_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return BrowserDocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return documentFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return browserDocumentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return documentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return DOCUMENT_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return LazyLoadService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return AnimateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return AutoHeightService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return HashService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return ResizeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return StageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/ngx-owl-carousel-o/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * Create a new injection token for injecting the Document into a component.
     */


    var _c0 = function _c0(a0, a1) {
      return {
        "isMouseDragable": a0,
        "isTouchDragable": a1
      };
    };

    function CarouselComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "owl-stage", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDraggable", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "active": a0,
        "owl-dot-text": a1
      };
    };

    function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var dot_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.moveByDot(dot_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dot_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, dot_r4.active, dot_r4.showInnerContent));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", dot_r4.innerContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function CarouselComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx_r2.dotsData == null ? null : ctx_r2.dotsData.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.dotsData == null ? null : ctx_r2.dotsData.dots);
      }
    }

    var _c3 = function _c3(a0, a1, a2, a3, a4) {
      return {
        "owl-rtl": a0,
        "owl-loaded": a1,
        "owl-responsive": a2,
        "owl-drag": a3,
        "owl-grab": a4
      };
    };

    function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

    function StageComponent_ng_container_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", slide_r1.tplRef);
      }
    }

    var _c4 = function _c4(a0, a1, a2, a3) {
      return {
        "width": a0,
        "margin-left": a1,
        "margin-right": a2,
        "left": a3
      };
    };

    function StageComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var slide_r1 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.clear(slide_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StageComponent_ng_container_2_2_Template, 1, 1, undefined, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", slide_r1.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](4, _c4, slide_r1.width + "px", slide_r1.marginL ? slide_r1.marginL + "px" : "", slide_r1.marginR ? slide_r1.marginR + "px" : "", slide_r1.left))("@autoHeight", slide_r1.heightState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", slide_r1.load);
      }
    }

    var _c5 = function _c5(a0, a1, a2, a3, a4) {
      return {
        "width": a0,
        "transform": a1,
        "transition": a2,
        "padding-left": a3,
        "padding-right": a4
      };
    };

    var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DocumentToken');
    /**
     * Define abstract class for obtaining reference to the global Document object.
     */

    var DocumentRef = /*#__PURE__*/function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      return _createClass(DocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);
    }();
    /**
     * Define class that implements the abstract class and returns the native Document object.
     */


    var BrowserDocumentRef = /*#__PURE__*/function (_DocumentRef) {
      function BrowserDocumentRef() {
        _classCallCheck(this, BrowserDocumentRef);

        return _callSuper(this, BrowserDocumentRef);
      }
      /**
       * @returns Document object
       */


      _inherits(BrowserDocumentRef, _DocumentRef);

      return _createClass(BrowserDocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          return document;
        }
      }]);
    }(DocumentRef);

    BrowserDocumentRef.ɵfac = function BrowserDocumentRef_Factory(t) {
      return new (t || BrowserDocumentRef)();
    };

    BrowserDocumentRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowserDocumentRef,
      factory: BrowserDocumentRef.ɵfac
    });
    /**
     * Create an factory function that returns the native Document object.
     * @param browserDocumentRef Native Document object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */

    function documentFactory(browserDocumentRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
      }

      var doc = {
        hidden: false,
        visibilityState: 'visible'
      };
      return doc;
    }
    /**
     * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
     */


    var browserDocumentProvider = {
      provide: DocumentRef,
      useClass: BrowserDocumentRef
    };
    /**
     * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
     */

    var documentProvider = {
      provide: DOCUMENT,
      useFactory: documentFactory,
      deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

    var ResizeService = /*#__PURE__*/function () {
      function ResizeService(eventManager, docRef) {
        _classCallCheck(this, ResizeService);

        this.eventManager = eventManager;
        this.docRef = docRef;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
      }
      /**
       * Makes resizeSubject become Observable
       * @returns Observable of resizeSubject
       */


      return _createClass(ResizeService, [{
        key: "onResize$",
        get: function get() {
          return this.resizeSubject.asObservable();
        }
        /**
         * Handler of 'resize' event. Passes data throw resizeSubject
         * @param event Event Object of 'resize' event
         */

      }, {
        key: "onResize",
        value: function onResize(event) {
          var _a;

          if ((_a = this.docRef) === null || _a === void 0 ? void 0 : _a.fullscreenElement) {
            return;
          }

          this.resizeSubject.next(event.target);
        }
        /**
         * Handler of 'onload' event. Defines the width of window
         * @param event Event Object of 'onload' event
         */

      }, {
        key: "onLoaded",
        value: function onLoaded(event) {
          this.windowWidth = event.target;
        }
      }]);
    }();

    ResizeService.ɵfac = function ResizeService_Factory(t) {
      return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DOCUMENT));
    };

    ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ResizeService,
      factory: ResizeService.ɵfac
    });

    ResizeService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    ResizeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], ResizeService);
    /**
     * Defaults value of options
     */

    var OwlCarouselOConfig = /*#__PURE__*/_createClass(function OwlCarouselOConfig() {
      _classCallCheck(this, OwlCarouselOConfig);

      this.items = 3;
      this.skip_validateItems = false;
      this.loop = false;
      this.center = false;
      this.rewind = false;
      this.mouseDrag = true;
      this.touchDrag = true;
      this.pullDrag = true;
      this.freeDrag = false;
      this.margin = 0;
      this.stagePadding = 0;
      this.merge = false;
      this.mergeFit = true;
      this.autoWidth = false;
      this.startPosition = 0;
      this.rtl = false;
      this.smartSpeed = 250;
      this.fluidSpeed = false;
      this.dragEndSpeed = false;
      this.responsive = {};
      this.responsiveRefreshRate = 200; // defaults to Navigation

      this.nav = false;
      this.navText = ['prev', 'next'];
      this.navSpeed = false;
      this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = true;
      this.dotsEach = false;
      this.dotsData = false;
      this.dotsSpeed = false; // defaults to Autoplay

      this.autoplay = false;
      this.autoplayTimeout = 5000;
      this.autoplayHoverPause = false;
      this.autoplaySpeed = false;
      this.autoplayMouseleaveTimeout = 1; // defaults to LazyLoading

      this.lazyLoad = false;
      this.lazyLoadEager = 0; // defaults to Animate

      this.slideTransition = '';
      this.animateOut = false;
      this.animateIn = false; // defaults to AutoHeight

      this.autoHeight = false; // defaults to Hash

      this.URLhashListener = false;
    });
    /**
     * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
     * class below is copy of OwlOptions but its all props have string value showing certain type;
     * this is class is being used just in method _validateOptions() of CarouselService;
     */


    var OwlOptionsMockedTypes = /*#__PURE__*/_createClass(function OwlOptionsMockedTypes() {
      _classCallCheck(this, OwlOptionsMockedTypes);

      this.items = 'number';
      this.skip_validateItems = 'boolean';
      this.loop = 'boolean';
      this.center = 'boolean';
      this.rewind = 'boolean';
      this.mouseDrag = 'boolean';
      this.touchDrag = 'boolean';
      this.pullDrag = 'boolean';
      this.freeDrag = 'boolean';
      this.margin = 'number';
      this.stagePadding = 'number';
      this.merge = 'boolean';
      this.mergeFit = 'boolean';
      this.autoWidth = 'boolean';
      this.startPosition = 'number|string';
      this.rtl = 'boolean';
      this.smartSpeed = 'number';
      this.fluidSpeed = 'boolean';
      this.dragEndSpeed = 'number|boolean';
      this.responsive = {};
      this.responsiveRefreshRate = 'number'; // defaults to Navigation

      this.nav = 'boolean';
      this.navText = 'string[]';
      this.navSpeed = 'number|boolean';
      this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = 'boolean';
      this.dotsEach = 'number|boolean';
      this.dotsData = 'boolean';
      this.dotsSpeed = 'number|boolean'; // defaults to Autoplay

      this.autoplay = 'boolean';
      this.autoplayTimeout = 'number';
      this.autoplayHoverPause = 'boolean';
      this.autoplaySpeed = 'number|boolean';
      this.autoplayMouseleaveTimeout = 'number'; // defaults to LazyLoading

      this.lazyLoad = 'boolean';
      this.lazyLoadEager = 'number'; // defaults to Animate

      this.slideTransition = 'string';
      this.animateOut = 'string|boolean';
      this.animateIn = 'string|boolean'; // defaults to AutoHeight

      this.autoHeight = 'boolean'; // defaults to Hash

      this.URLhashListener = "boolean";
    });

    var OwlLogger = /*#__PURE__*/function () {
      function OwlLogger(errorHandler) {
        _classCallCheck(this, OwlLogger);

        this.errorHandler = errorHandler;
      }

      return _createClass(OwlLogger, [{
        key: "log",
        value: function log(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            var _console;

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(_console, [value].concat(rest));
          }
        }
      }, {
        key: "error",
        value: function error(_error) {
          this.errorHandler.handleError(_error);
        }
      }, {
        key: "warn",
        value: function warn(value) {
          var _console2;

          for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
          }

          (_console2 = console).warn.apply(_console2, [value].concat(rest));
        }
      }]);
    }();

    OwlLogger.ɵfac = function OwlLogger_Factory(t) {
      return new (t || OwlLogger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]));
    };

    OwlLogger.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OwlLogger,
      factory: OwlLogger.ɵfac
    });

    OwlLogger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
      }];
    };
    /**
     * Current state information and their tags.
     */


    var States = /*#__PURE__*/_createClass(function States() {
      _classCallCheck(this, States);
    });
    /**
     * Enumeration for types.
     * @enum {String}
     */


    var Type;

    (function (Type) {
      Type["Event"] = "event";
      Type["State"] = "state";
    })(Type || (Type = {}));

    ;
    /**
     * Enumeration for width.
     * @enum {String}
     */

    var Width;

    (function (Width) {
      Width["Default"] = "default";
      Width["Inner"] = "inner";
      Width["Outer"] = "outer";
    })(Width || (Width = {}));

    ;
    /**
     * Model for coords of .owl-stage
     */

    var Coords = /*#__PURE__*/_createClass(function Coords() {
      _classCallCheck(this, Coords);
    });
    /**
     * Model for all current data of carousel
     */


    var CarouselCurrentData = /*#__PURE__*/_createClass(function CarouselCurrentData() {
      _classCallCheck(this, CarouselCurrentData);
    });

    var CarouselService = /*#__PURE__*/function () {
      function CarouselService(logger) {
        var _this = this;

        _classCallCheck(this, CarouselService);

        this.logger = logger;
        /**
        * Subject for passing data needed for managing View
        */

        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel got initializes
        */

        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings start changinf
        */

        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings have changed
        */

        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel starts translating or moving
        */

        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel stopped translating or moving
        */

        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
        */

        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
        */

        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel starts
        */

        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel is ended
        */

        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel starts
        */

        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel is ended
        */

        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Current settings for the carousel.
         */

        this.settings = {
          items: 0
        };
        /**
        * Initial data for setting classes to element .owl-carousel
        */

        this.owlDOMData = {
          rtl: false,
          isResponsive: false,
          isRefreshed: false,
          isLoaded: false,
          isLoading: false,
          isMouseDragable: false,
          isGrab: false,
          isTouchDragable: false
        };
        /**
        * Initial data of .owl-stage
        */

        this.stageData = {
          transform: 'translate3d(0px,0px,0px)',
          transition: '0s',
          width: 0,
          paddingL: 0,
          paddingR: 0
        };
        /**
         * All real items.
         */

        this._items = []; // is equal to this.slides

        /**
        * Array with width of every slide.
        */

        this._widths = [];
        /**
        * Currently suppressed events to prevent them from beeing retriggered.
        */

        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */

        this._plugins = {};
        /**
        * Absolute current position.
        */

        this._current = null;
        /**
        * All cloned items.
        */

        this._clones = [];
        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         */

        this._mergers = [];
        /**
        * Animation speed in milliseconds.
        */

        this._speed = null;
        /**
        * Coordinates of all items in pixel.
        * @todo The name of this member is missleading.
        */

        this._coordinates = [];
        /**
        * Current breakpoint.
        * @todo Real media queries would be nice.
        */

        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */

        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */

        this._options = {};
        /**
         * Invalidated parts within the update process.
         */

        this._invalidated = {};
        /**
         * Current state information and their tags.
         */

        this._states = {
          current: {},
          tags: {
            initializing: ['busy'],
            animating: ['busy'],
            dragging: ['interacting']
          }
        };
        /**
         * Ordered list of workers for the update process.
        */

        this._pipe = [// {
        //   filter: ['width', 'settings'],
        //   run: () => {
        //     this._width = this.carouselWindowWidth;
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
          }
        }, // {
        //   filter: ['items', 'settings'],
        //   run: function() {
        //     // this.$stage.children('.cloned').remove();
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var margin = _this.settings.margin || '',
                grid = !_this.settings.autoWidth,
                rtl = _this.settings.rtl,
                css = {
              'margin-left': rtl ? margin : '',
              'margin-right': rtl ? '' : margin
            };

            if (!grid) {
              _this.slidesData.forEach(function (slide) {
                slide.marginL = css['margin-left'];
                slide.marginR = css['margin-right'];
              });
            }

            cache.css = css;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin,
                grid = !_this.settings.autoWidth,
                widths = [];
            var merge = null,
                iterator = _this._items.length;
            cache.items = {
              merge: false,
              width: width
            };

            while (iterator--) {
              merge = _this._mergers[iterator];
              merge = _this.settings.mergeFit && Math.min(merge, _this.settings.items) || merge;
              cache.items.merge = merge > 1 || cache.items.merge;
              widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge;
            }

            _this._widths = widths;

            _this.slidesData.forEach(function (slide, i) {
              slide.width = _this._widths[i];
              slide.marginR = cache.css['margin-right'];
              slide.marginL = cache.css['margin-left'];
            });
          }
        }, {
          filter: ['items', 'settings'],
          run: function run() {
            var clones = [],
                items = _this._items,
                settings = _this.settings,
                // TODO: Should be computed from number of min width items in stage
            view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2;
            var append = [],
                prepend = [],
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
            repeat /= 2;

            while (repeat--) {
              // Switch to only using appended clones
              clones.push(_this.normalize(clones.length / 2, true));
              append.push(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
              clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
              prepend.unshift(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
            }

            _this._clones = clones;
            append = append.map(function (slide) {
              slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            prepend = prepend.map(function (slide) {
              slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            _this.slidesData = prepend.concat(_this.slidesData).concat(append);
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var rtl = _this.settings.rtl ? 1 : -1,
                size = _this._clones.length + _this._items.length,
                coordinates = [];
            var iterator = -1,
                previous = 0,
                current = 0;

            while (++iterator < size) {
              previous = coordinates[iterator - 1] || 0;
              current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
              coordinates.push(previous + current * rtl);
            }

            _this._coordinates = coordinates;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var padding = _this.settings.stagePadding,
                coordinates = _this._coordinates,
                css = {
              'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
              'padding-left': padding || '',
              'padding-right': padding || ''
            };
            _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element

            _this.stageData.paddingL = css['padding-left'];
            _this.stageData.paddingR = css['padding-right'];
          }
        }, {
          //   filter: [ 'width', 'items', 'settings' ],
          //   run: cache => {
          // 		// this method sets the width for every slide, but I set it in different way earlier
          // 		const grid = !this.settings.autoWidth,
          // 		items = this.$stage.children(); // use this.slidesData
          //     let iterator = this._coordinates.length;
          //     if (grid && cache.items.merge) {
          //       while (iterator--) {
          //         cache.css.width = this._widths[this.relative(iterator)];
          //         items.eq(iterator).css(cache.css);
          //       }
          //     } else if (grid) {
          //       cache.css.width = cache.items.width;
          //       items.css(cache.css);
          //     }
          //   }
          // }, {
          //   filter: [ 'items' ],
          //   run: function() {
          //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
          //   }
          // }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var current = cache.current ? _this.slidesData.findIndex(function (slide) {
              return slide.id === cache.current;
            }) : 0;
            current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));

            _this.reset(current);
          }
        }, {
          filter: ['position'],
          run: function run() {
            _this.animate(_this.coordinates(_this._current));
          }
        }, {
          filter: ['width', 'position', 'items', 'settings'],
          run: function run() {
            var rtl = _this.settings.rtl ? 1 : -1,
                padding = _this.settings.stagePadding * 2,
                matches = [];
            var begin, end, inner, outer, i, n;
            begin = _this.coordinates(_this.current());

            if (typeof begin === 'number') {
              begin += padding;
            } else {
              begin = 0;
            }

            end = begin + _this.width() * rtl;

            if (rtl === -1 && _this.settings.center) {
              var result = _this._coordinates.filter(function (element) {
                return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
              });

              begin = result.length ? result[result.length - 1] : begin;
            }

            for (i = 0, n = _this._coordinates.length; i < n; i++) {
              inner = Math.ceil(_this._coordinates[i - 1] || 0);
              outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);

              if (_this._op(inner, '<=', begin) && _this._op(inner, '>', end) || _this._op(outer, '<', begin) && _this._op(outer, '>', end)) {
                matches.push(i);
              }
            }

            _this.slidesData.forEach(function (slide) {
              slide.isActive = false;
              return slide;
            });

            matches.forEach(function (item) {
              _this.slidesData[item].isActive = true;
            });

            if (_this.settings.center) {
              _this.slidesData.forEach(function (slide) {
                slide.isCentered = false;
                return slide;
              });

              _this.slidesData[_this.current()].isCentered = true;
            }
          }
        }];
      } // Is needed for tests


      return _createClass(CarouselService, [{
        key: "invalidated",
        get: function get() {
          return this._invalidated;
        } // is needed for tests

      }, {
        key: "states",
        get: function get() {
          return this._states;
        }
        /**
         * Makes _viewSettingsShipper$ Subject become Observable
         * @returns Observable of _viewSettingsShipper$ Subject
         */

      }, {
        key: "getViewCurSettings",
        value: function getViewCurSettings() {
          return this._viewSettingsShipper$.asObservable();
        }
        /**
         * Makes _initializedCarousel$ Subject become Observable
         * @returns Observable of _initializedCarousel$ Subject
         */

      }, {
        key: "getInitializedState",
        value: function getInitializedState() {
          return this._initializedCarousel$.asObservable();
        }
        /**
         * Makes _changeSettingsCarousel$ Subject become Observable
         * @returns Observable of _changeSettingsCarousel$ Subject
         */

      }, {
        key: "getChangeState",
        value: function getChangeState() {
          return this._changeSettingsCarousel$.asObservable();
        }
        /**
         * Makes _changedSettingsCarousel$ Subject become Observable
         * @returns Observable of _changedSettingsCarousel$ Subject
         */

      }, {
        key: "getChangedState",
        value: function getChangedState() {
          return this._changedSettingsCarousel$.asObservable();
        }
        /**
         * Makes _translateCarousel$ Subject become Observable
         * @returns Observable of _translateCarousel$ Subject
         */

      }, {
        key: "getTranslateState",
        value: function getTranslateState() {
          return this._translateCarousel$.asObservable();
        }
        /**
         * Makes _translatedCarousel$ Subject become Observable
         * @returns Observable of _translatedCarousel$ Subject
         */

      }, {
        key: "getTranslatedState",
        value: function getTranslatedState() {
          return this._translatedCarousel$.asObservable();
        }
        /**
         * Makes _resizeCarousel$ Subject become Observable
         * @returns Observable of _resizeCarousel$ Subject
         */

      }, {
        key: "getResizeState",
        value: function getResizeState() {
          return this._resizeCarousel$.asObservable();
        }
        /**
         * Makes _resizedCarousel$ Subject become Observable
         * @returns Observable of _resizedCarousel$ Subject
         */

      }, {
        key: "getResizedState",
        value: function getResizedState() {
          return this._resizedCarousel$.asObservable();
        }
        /**
         * Makes _refreshCarousel$ Subject become Observable
         * @returns Observable of _refreshCarousel$ Subject
         */

      }, {
        key: "getRefreshState",
        value: function getRefreshState() {
          return this._refreshCarousel$.asObservable();
        }
        /**
         * Makes _refreshedCarousel$ Subject become Observable
         * @returns Observable of _refreshedCarousel$ Subject
         */

      }, {
        key: "getRefreshedState",
        value: function getRefreshedState() {
          return this._refreshedCarousel$.asObservable();
        }
        /**
         * Makes _dragCarousel$ Subject become Observable
         * @returns Observable of _dragCarousel$ Subject
         */

      }, {
        key: "getDragState",
        value: function getDragState() {
          return this._dragCarousel$.asObservable();
        }
        /**
         * Makes _draggedCarousel$ Subject become Observable
         * @returns Observable of _draggedCarousel$ Subject
         */

      }, {
        key: "getDraggedState",
        value: function getDraggedState() {
          return this._draggedCarousel$.asObservable();
        }
        /**
         * Setups custom options expanding default options
         * @param options custom options
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          var configOptions = new OwlCarouselOConfig();

          var checkedOptions = this._validateOptions(options, configOptions);

          this._options = Object.assign(Object.assign({}, configOptions), checkedOptions);
        }
        /**
         * Checks whether user's option are set properly. Cheking is based on typings;
         * @param options options set by user
         * @param configOptions default options
         * @returns checked and modified (if it's needed) user's options
         *
         * Notes:
         * 	- if user set option with wrong type, it'll be written in console
         */

      }, {
        key: "_validateOptions",
        value: function _validateOptions(options, configOptions) {
          var _this2 = this;

          var checkedOptions = Object.assign({}, options);
          var mockedTypes = new OwlOptionsMockedTypes();

          var setRightOption = function setRightOption(type, key) {
            _this2.logger.log("options.".concat(key, " must be type of ").concat(type, "; ").concat(key, "=").concat(options[key], " skipped to defaults: ").concat(key, "=").concat(configOptions[key]));

            return configOptions[key];
          };

          var _loop = function _loop() {
            if (checkedOptions.hasOwnProperty(key)) {
              // condition could be shortened but it gets harder for understanding
              if (mockedTypes[key] === 'number') {
                if (_this2._isNumeric(checkedOptions[key])) {
                  checkedOptions[key] = +checkedOptions[key];
                  checkedOptions[key] = key === 'items' ? _this2._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              } else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|boolean' && !_this2._isNumberOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|string' && !_this2._isNumberOrString(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string|boolean' && !_this2._isStringOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string[]') {
                if (Array.isArray(checkedOptions[key])) {
                  var isString = false;
                  checkedOptions[key].forEach(function (element) {
                    isString = typeof element === 'string' ? true : false;
                  });

                  if (!isString) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                  }

                  ;
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              }
            }
          };

          for (var key in checkedOptions) {
            _loop();
          }

          return checkedOptions;
        }
        /**
         * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
         * @param items option items set by user
         * @param skip_validateItems option `skip_validateItems` set by user
         * @returns right number of items
         */

      }, {
        key: "_validateItems",
        value: function _validateItems(items, skip_validateItems) {
          var result = items;

          if (items > this._items.length) {
            if (skip_validateItems) {
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
            } else {
              result = this._items.length;
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
            }
          } else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
              this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
          }

          return result;
        }
        /**
         * Set current width of carousel
         * @param width width of carousel Window
         */

      }, {
        key: "setCarouselWidth",
        value: function setCarouselWidth(width) {
          this._width = width;
        }
        /**
           * Setups the current settings.
           * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
           * @todo Support for media queries by using `matchMedia` would be nice.
           * @param carouselWidth width of carousel
           * @param slides array of slides
           * @param options options set by user
           */

      }, {
        key: "setup",
        value: function setup(carouselWidth, slides, options) {
          this.setCarouselWidth(carouselWidth);
          this.setItems(slides);

          this._defineSlidesData();

          this.setOptions(options);
          this.settings = Object.assign({}, this._options);
          this.setOptionsForViewport();

          this._trigger('change', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });

          this.invalidate('settings'); // must be call of this function;

          this._trigger('changed', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });
        }
        /**
         * Set options for current viewport
         */

      }, {
        key: "setOptionsForViewport",
        value: function setOptionsForViewport() {
          var _this3 = this;

          var viewport = this._width,
              overwrites = this._options.responsive;
          var match = -1;

          if (!Object.keys(overwrites).length) {
            return;
          }

          if (!viewport) {
            this.settings.items = 1;
            return;
          }

          for (var key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
              if (+key <= viewport && +key > match) {
                match = Number(key);
              }
            }
          }

          this.settings = Object.assign(Object.assign(Object.assign({}, this._options), overwrites[match]), {
            items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
          }); // if (typeof this.settings.stagePadding === 'function') {
          // 	this.settings.stagePadding = this.settings.stagePadding();
          // }

          delete this.settings.responsive;
          this.owlDOMData.isResponsive = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          var mergers = [];

          this._items.forEach(function (item) {
            var mergeN = _this3.settings.merge ? item.dataMerge : 1;
            mergers.push(mergeN);
          });

          this._mergers = mergers;
          this._breakpoint = match;
          this.invalidate('settings');
        }
        /**
         * Initializes the carousel.
         * @param slides array of CarouselSlideDirective
         */

      }, {
        key: "initialize",
        value: function initialize(slides) {
          var _this4 = this;

          this.enter('initializing'); // this.trigger('initialize');

          this.owlDOMData.rtl = this.settings.rtl;

          if (this._mergers.length) {
            this._mergers = [];
          }

          slides.forEach(function (item) {
            var mergeN = _this4.settings.merge ? item.dataMerge : 1;

            _this4._mergers.push(mergeN);
          });
          this._clones = [];
          this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
          this.invalidate('items');
          this.refresh();
          this.owlDOMData.isLoaded = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          this.sendChanges();
          this.leave('initializing');

          this._trigger('initialized');
        }
      }, {
        key: "sendChanges",
        value:
        /**
         * Sends all data needed for View
         */
        function sendChanges() {
          this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
          });
        }
        /**
           * Updates option logic if necessery
           */

      }, {
        key: "_optionsLogic",
        value: function _optionsLogic() {
          if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
          }
        }
        /**
         * Updates the view
         */

      }, {
        key: "update",
        value: function update() {
          var _this5 = this;

          var i = 0;

          var n = this._pipe.length,
              filter = function filter(item) {
            return _this5._invalidated[item];
          },
              cache = {};

          while (i < n) {
            var filteredPipe = this._pipe[i].filter.filter(filter);

            if (this._invalidated.all || filteredPipe.length > 0) {
              this._pipe[i].run(cache);
            }

            i++;
          }

          this.slidesData.forEach(function (slide) {
            return slide.classes = _this5.setCurSlideClasses(slide);
          });
          this.sendChanges();
          this._invalidated = {};

          if (!this.is('valid')) {
            this.enter('valid');
          }
        }
        /**
           * Gets the width of the view.
           * @param [dimension=Width.Default] The dimension to return
           * @returns The width of the view in pixel.
           */

      }, {
        key: "width",
        value: function width(dimension) {
          dimension = dimension || Width.Default;

          switch (dimension) {
            case Width.Inner:
            case Width.Outer:
              return this._width;

            default:
              return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
        }
        /**
           * Refreshes the carousel primarily for adaptive purposes.
           */

      }, {
        key: "refresh",
        value: function refresh() {
          this.enter('refreshing');

          this._trigger('refresh');

          this._defineSlidesData();

          this.setOptionsForViewport();

          this._optionsLogic(); // this.$element.addClass(this.options.refreshClass);


          this.update(); // this.$element.removeClass(this.options.refreshClass);

          this.leave('refreshing');

          this._trigger('refreshed');
        }
        /**
           * Checks window `resize` event.
           * @param curWidth width of .owl-carousel
           */

      }, {
        key: "onResize",
        value: function onResize(curWidth) {
          if (!this._items.length) {
            return false;
          }

          this.setCarouselWidth(curWidth);
          this.enter('resizing'); // if (this.trigger('resize').isDefaultPrevented()) {
          // 	this.leave('resizing');
          // 	return false;
          // }

          this._trigger('resize');

          this.invalidate('width');
          this.refresh();
          this.leave('resizing');

          this._trigger('resized');
        }
        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */

      }, {
        key: "prepareDragging",
        value: function prepareDragging(event) {
          var stage = null,
              transformArr; // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
          // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
          // stage = {
          //   x: stage[stage.length === 16 ? 12 : 4],
          //   y: stage[stage.length === 16 ? 13 : 5]
          // };

          transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
          stage = {
            x: +transformArr[0],
            y: +transformArr[1]
          };

          if (this.is('animating')) {
            this.invalidate('position');
          }

          if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
          }

          this.speed(0);
          return stage;
        }
        /**
         * Enters into a 'dragging' state
         */

      }, {
        key: "enterDragging",
        value: function enterDragging() {
          this.enter('dragging');

          this._trigger('drag');
        }
        /**
           * Defines new coords for .owl-stage while dragging it
           * @todo #261
           * @param event the event arguments.
           * @param dragData initial data got after starting dragging
           * @returns coords or false
           */

      }, {
        key: "defineNewCoordsDrag",
        value: function defineNewCoordsDrag(event, dragData) {
          var minimum = null,
              maximum = null,
              pull = null;
          var delta = this.difference(dragData.pointer, this.pointer(event)),
              stage = this.difference(dragData.stage.start, delta);

          if (!this.is('dragging')) {
            return false;
          }

          if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
          } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }

          return stage;
        }
        /**
           * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
           * @todo #261
           * @todo Threshold for click event
           * @param event the event arguments.
           * @param dragObj the object with dragging settings and states
           * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
           */

      }, {
        key: "finishDragging",
        value: function finishDragging(event, dragObj, clickAttacher) {
          var directions = ['right', 'left'],
              delta = this.difference(dragObj.pointer, this.pointer(event)),
              stage = dragObj.stage.current,
              direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
          var currentSlideI, current, newCurrent;

          if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);

            if (current !== newCurrent) {
              this.invalidate('position');
              this.update();
            }

            dragObj.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
              clickAttacher();
            }
          }

          if (!this.is('dragging')) {
            return;
          }

          this.leave('dragging');

          this._trigger('dragged');
        }
        /**
           * Gets absolute position of the closest item for a coordinate.
           * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
           * @param coordinate The coordinate in pixel.
           * @param direction The direction to check for the closest item. Ether `left` or `right`.
           * @returns The absolute position of the closest item.
           */

      }, {
        key: "closest",
        value: function closest(coordinate, direction) {
          var pull = 30,
              width = this.width();
          var coordinates = this.coordinates(),
              position = -1;

          if (this.settings.center) {
            coordinates = coordinates.map(function (item) {
              if (item === 0) {
                item += 0.000001;
              }

              return item;
            });
          } // option 'freeDrag' doesn't have realization and using it here creates problem:
          // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
          // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
          // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
          // if (!this.settings.freeDrag) {
          // check closest item


          for (var i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i; // on a right pull, check on previous index
              // to do so, subtract width from value and set position = index + 1
            } else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
              position = i + 1;
            } else if (this._op(coordinate, '<', coordinates[i]) && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
              position = direction === 'left' ? i + 1 : i;
            } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i;
            }

            if (position !== -1) {
              break;
            }

            ;
          } // }


          if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
              position = coordinate = this.minimum();
            } else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
              position = coordinate = this.maximum();
            }
          }

          return position;
        }
        /**
           * Animates the stage.
           * @todo #270
           * @param coordinate The coordinate in pixels.
           */

      }, {
        key: "animate",
        value: function animate(coordinate) {
          var animate = this.speed() > 0;

          if (this.is('animating')) {
            this.onTransitionEnd();
          }

          if (animate) {
            this.enter('animating');

            this._trigger('translate');
          }

          this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
          this.stageData.transition = this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''); // also there was transition by means of JQuery.animate or css-changing property left
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param state The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "is",
        value: function is(state) {
          return this._states.current[state] && this._states.current[state] > 0;
        }
      }, {
        key: "current",
        value:
        /**
           * Sets the absolute position of the current item.
           * @param position The new absolute position or nothing to leave it unchanged.
           * @returns The absolute position of the current item.
           */
        function current(position) {
          if (position === undefined) {
            return this._current;
          }

          if (this._items.length === 0) {
            return undefined;
          }

          position = this.normalize(position);

          if (this._current !== position) {
            var event = this._trigger('change', {
              property: {
                name: 'position',
                value: position
              }
            }); // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }


            this._current = position;
            this.invalidate('position');

            this._trigger('changed', {
              property: {
                name: 'position',
                value: this._current
              }
            });
          }

          return this._current;
        }
        /**
           * Invalidates the given part of the update routine.
           * @param part The part to invalidate.
           * @returns The invalidated parts.
           */

      }, {
        key: "invalidate",
        value: function invalidate(part) {
          if (typeof part === 'string') {
            this._invalidated[part] = true;

            if (this.is('valid')) {
              this.leave('valid');
            }
          }

          return Object.keys(this._invalidated);
        }
      }, {
        key: "reset",
        value:
        /**
         * Resets the absolute position of the current item.
         * @param position the absolute position of the new item.
         */
        function reset(position) {
          position = this.normalize(position);

          if (position === undefined) {
            return;
          }

          this._speed = 0;
          this._current = position;

          this._suppress(['translate', 'translated']);

          this.animate(this.coordinates(position));

          this._release(['translate', 'translated']);
        }
        /**
           * Normalizes an absolute or a relative position of an item.
           * @param position The absolute or relative position to normalize.
           * @param relative Whether the given position is relative or not.
           * @returns The normalized position.
           */

      }, {
        key: "normalize",
        value: function normalize(position, relative) {
          var n = this._items.length,
              m = relative ? 0 : this._clones.length;

          if (!this._isNumeric(position) || n < 1) {
            position = undefined;
          } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
          }

          return position;
        }
        /**
           * Converts an absolute position of an item into a relative one.
           * @param position The absolute position to convert.
           * @returns The converted position.
           */

      }, {
        key: "relative",
        value: function relative(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
        }
        /**
           * Gets the maximum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of maximum position
           */

      }, {
        key: "maximum",
        value: function maximum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var settings = this.settings;
          var maximum = this._coordinates.length,
              iterator,
              reciprocalItemsWidth,
              elementWidth;

          if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;

            while (iterator--) {
              // it could be use this._items instead of this.slidesData;
              reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;

              if (reciprocalItemsWidth > elementWidth) {
                break;
              }
            }

            maximum = iterator + 1;
          } else if (settings.center) {
            maximum = this._items.length - 1;
          } else {
            maximum = this._items.length - settings.items;
          }

          if (relative) {
            maximum -= this._clones.length / 2;
          }

          return Math.max(maximum, 0);
        }
        /**
           * Gets the minimum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of minimum position
           */

      }, {
        key: "minimum",
        value: function minimum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return relative ? 0 : this._clones.length / 2;
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "items",
        value: function items(position) {
          if (position === undefined) {
            return this._items.slice();
          }

          position = this.normalize(position, true);
          return [this._items[position]];
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "mergers",
        value: function mergers(position) {
          if (position === undefined) {
            return this._mergers.slice();
          }

          position = this.normalize(position, true);
          return this._mergers[position];
        }
        /**
           * Gets the absolute positions of clones for an item.
           * @param position The relative position of the item.
           * @returns The absolute positions of clones for the item or all if no position was given.
           */

      }, {
        key: "clones",
        value: function clones(position) {
          var odd = this._clones.length / 2,
              even = odd + this._items.length,
              map = function map(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
          };

          if (position === undefined) {
            return this._clones.map(function (v, i) {
              return map(i);
            });
          }

          return this._clones.map(function (v, i) {
            return v === position ? map(i) : null;
          }).filter(function (item) {
            return item;
          });
        }
        /**
           * Sets the current animation speed.
           * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
           * @returns The current animation speed in milliseconds.
           */

      }, {
        key: "speed",
        value: function speed(_speed) {
          if (_speed !== undefined) {
            this._speed = _speed;
          }

          return this._speed;
        }
        /**
           * Gets the coordinate of an item.
           * @todo The name of this method is missleanding.
           * @param position The absolute position of the item within `minimum()` and `maximum()`.
           * @returns The coordinate of the item in pixel or all coordinates.
           */

      }, {
        key: "coordinates",
        value: function coordinates(position) {
          var _this6 = this;

          var multiplier = 1,
              newPosition = position - 1,
              coordinate,
              result;

          if (position === undefined) {
            result = this._coordinates.map(function (item, index) {
              return _this6.coordinates(index);
            });
            return result;
          }

          if (this.settings.center) {
            if (this.settings.rtl) {
              multiplier = -1;
              newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
            coordinate = this._coordinates[newPosition] || 0;
          }

          coordinate = Math.ceil(coordinate);
          return coordinate;
        }
        /**
           * Calculates the speed for a translation.
           * @param from The absolute position of the start item.
           * @param to The absolute position of the target item.
           * @param factor [factor=undefined] - The time factor in milliseconds.
           * @returns The time in milliseconds for the translation.
           */

      }, {
        key: "_duration",
        value: function _duration(from, to, factor) {
          if (factor === 0) {
            return 0;
          }

          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
        }
        /**
           * Slides to the specified item.
           * @param position The position of the item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "to",
        value: function to(position, speed) {
          var _this7 = this;

          var current = this.current(),
              revert = null,
              distance = position - this.relative(current),
              maximum = this.maximum(),
              delayForLoop = 0;
          var direction = +(distance > 0) - +(distance < 0),
              items = this._items.length,
              minimum = this.minimum();

          if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
              distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
              current = revert - distance;
              position = revert;
              delayForLoop = 30;
              this.reset(current);
              this.sendChanges();
            }
          } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
          } else {
            position = Math.max(minimum, Math.min(maximum, position));
          }

          setTimeout(function () {
            _this7.speed(_this7._duration(current, position, speed));

            _this7.current(position);

            _this7.update();
          }, delayForLoop);
        }
        /**
           * Slides to the next item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "next",
        value: function next(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
        }
        /**
           * Slides to the previous item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "prev",
        value: function prev(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
        }
        /**
           * Handles the end of an animation.
           * @param event - The event arguments.
           */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd(event) {
          // if css2 animation then event object is undefined
          if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
          }

          this.leave('animating');

          this._trigger('translated');
        }
        /**
           * Gets viewport width.
           * @returns - The width in pixel.
           */

      }, {
        key: "_viewport",
        value: function _viewport() {
          var width;

          if (this._width) {
            width = this._width;
          } else {
            this.logger.log('Can not detect viewport width.');
          }

          return width;
        }
        /**
           * Sets _items
           * @param content The list of slides put into CarouselSlideDirectives.
           */

      }, {
        key: "setItems",
        value: function setItems(content) {
          this._items = content;
        }
        /**
         * Sets slidesData using this._items
         */

      }, {
        key: "_defineSlidesData",
        value: function _defineSlidesData() {
          // Maybe creating and using loadMap would be better in LazyLoadService.
          // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
          // Thus it would be needed to add that content into DOM again.
          // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
          var loadMap;

          if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(function (item) {
              if (item.load) {
                loadMap.set(item.id, item.load);
              }
            });
          }

          this.slidesData = this._items.map(function (slide) {
            return {
              id: "".concat(slide.id),
              isActive: false,
              tplRef: slide.tplRef,
              dataMerge: slide.dataMerge,
              width: 0,
              isCloned: false,
              load: loadMap ? loadMap.get(slide.id) : false,
              hashFragment: slide.dataHash
            };
          });
        }
        /**
         * Sets current classes for slide
         * @param slide Slide of carousel
         * @returns object with names of css-classes which are keys and true/false values
         */

      }, {
        key: "setCurSlideClasses",
        value: function setCurSlideClasses(slide) {
          // CSS classes: added/removed per current state of component properties
          var currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
          };

          if (this.settings.animateIn) {
            currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
          }

          if (this.settings.animateOut) {
            currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
          }

          return currentClasses;
        }
        /**
           * Operators to calculate right-to-left and left-to-right.
           * @param a - The left side operand.
           * @param o - The operator.
           * @param b - The right side operand.
           * @returns true/false meaning right-to-left or left-to-right
           */

      }, {
        key: "_op",
        value: function _op(a, o, b) {
          var rtl = this.settings.rtl;

          switch (o) {
            case '<':
              return rtl ? a > b : a < b;

            case '>':
              return rtl ? a < b : a > b;

            case '>=':
              return rtl ? a <= b : a >= b;

            case '<=':
              return rtl ? a >= b : a <= b;

            default:
              break;
          }
        }
        /**
           * Triggers a public event.
           * @todo Remove `status`, `relatedTarget` should be used instead.
           * @param name The event name.
           * @param data The event data.
           * @param namespace The event namespace.
           * @param state The state which is associated with the event.
           * @param enter Indicates if the call enters the specified state or not.
           */

      }, {
        key: "_trigger",
        value: function _trigger(name, data, namespace, state, enter) {
          switch (name) {
            case 'initialized':
              this._initializedCarousel$.next(name);

              break;

            case 'change':
              this._changeSettingsCarousel$.next(data);

              break;

            case 'changed':
              this._changedSettingsCarousel$.next(data);

              break;

            case 'drag':
              this._dragCarousel$.next(name);

              break;

            case 'dragged':
              this._draggedCarousel$.next(name);

              break;

            case 'resize':
              this._resizeCarousel$.next(name);

              break;

            case 'resized':
              this._resizedCarousel$.next(name);

              break;

            case 'refresh':
              this._refreshCarousel$.next(name);

              break;

            case 'refreshed':
              this._refreshedCarousel$.next(name);

              break;

            case 'translate':
              this._translateCarousel$.next(name);

              break;

            case 'translated':
              this._translatedCarousel$.next(name);

              break;

            default:
              break;
          }
        }
        /**
         * Enters a state.
         * @param name - The state name.
         */

      }, {
        key: "enter",
        value: function enter(name) {
          var _this8 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this8._states.current[stateName] === undefined) {
              _this8._states.current[stateName] = 0;
            }

            _this8._states.current[stateName]++;
          });
        }
      }, {
        key: "leave",
        value:
        /**
           * Leaves a state.
           * @param name - The state name.
           */
        function leave(name) {
          var _this9 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this9._states.current[stateName] === 0 || !!_this9._states.current[stateName]) {
              _this9._states.current[stateName]--;
            }
          });
        }
      }, {
        key: "register",
        value:
        /**
           * Registers an event or state.
           * @param object - The event or state to register.
           */
        function register(object) {
          var _this0 = this;

          if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
              this._states.tags[object.name] = object.tags;
            } else {
              this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
              return _this0._states.tags[object.name].indexOf(tag) === i;
            });
          }
        }
        /**
           * Suppresses events.
           * @param events The events to suppress.
           */

      }, {
        key: "_suppress",
        value: function _suppress(events) {
          var _this1 = this;

          events.forEach(function (event) {
            _this1._supress[event] = true;
          });
        }
        /**
           * Releases suppressed events.
           * @param events The events to release.
           */

      }, {
        key: "_release",
        value: function _release(events) {
          var _this10 = this;

          events.forEach(function (event) {
            delete _this10._supress[event];
          });
        }
        /**
           * Gets unified pointer coordinates from event.
           * @todo #261
           * @param event The `mousedown` or `touchstart` event.
           * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "pointer",
        value: function pointer(event) {
          var result = {
            x: null,
            y: null
          };
          event = event.originalEvent || event || window.event;
          event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

          if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
          } else {
            result.x = event.clientX;
            result.y = event.clientY;
          }

          return result;
        }
        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param number The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number
           */

      }, {
        key: "_isNumeric",
        value: function _isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
        /**
         * Determines whether value is number or boolean type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
         */

      }, {
        key: "_isNumberOrBoolean",
        value: function _isNumberOrBoolean(value) {
          return this._isNumeric(value) || typeof value === 'boolean';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isNumberOrString",
        value: function _isNumberOrString(value) {
          return this._isNumeric(value) || typeof value === 'string';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isStringOrBoolean",
        value: function _isStringOrBoolean(value) {
          return typeof value === 'string' || typeof value === 'boolean';
        }
        /**
           * Gets the difference of two vectors.
           * @todo #261
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "difference",
        value: function difference(first, second) {
          return {
            x: first.x - second.x,
            y: first.y - second.y
          };
        }
      }]);
    }();

    CarouselService.ɵfac = function CarouselService_Factory(t) {
      return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OwlLogger));
    };

    CarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CarouselService,
      factory: CarouselService.ɵfac
    });

    CarouselService.ctorParameters = function () {
      return [{
        type: OwlLogger
      }];
    };

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(carouselService) {
        _classCallCheck(this, NavigationService);

        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */

        this._initialized = false;
        /**
         * The current paging indexes.
         */

        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */

        this._navData = {
          disabled: false,
          prev: {
            disabled: false,
            htmlText: ''
          },
          next: {
            disabled: false,
            htmlText: ''
          }
        };
        /**
         * Data for dot elements of the user interface.
         */

        this._dotsData = {
          disabled: false,
          dots: []
        };
        this.spyDataStreams();
      }

      return _createClass(NavigationService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this11 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) {
            _this11.initialize();

            _this11._updateNavPages();

            _this11.draw();

            _this11.update();

            _this11.carouselService.sendChanges();
          })); // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
          // Thus this method by calling carouselService.current(position) notifies about changes

          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (data) {
            return data.property.name === 'position';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this11.update(); // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();

          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this11._updateNavPages();

            _this11.draw();

            _this11.update();

            _this11.carouselService.sendChanges();
          }));
          var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.navSubscription = navMerge$.subscribe(function () {});
        }
        /**
           * Initializes the layout of the plugin and extends the carousel.
           */

      }, {
        key: "initialize",
        value: function initialize() {
          this._navData.disabled = true;
          this._navData.prev.htmlText = this.carouselService.settings.navText[0];
          this._navData.next.htmlText = this.carouselService.settings.navText[1];
          this._dotsData.disabled = true;
          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
        /**
         * Calculates internal states and updates prop _pages
         */

      }, {
        key: "_updateNavPages",
        value: function _updateNavPages() {
          var i, j, k;
          var lower = this.carouselService.clones().length / 2,
              upper = lower + this.carouselService.items().length,
              maximum = this.carouselService.maximum(true),
              pages = [],
              settings = this.carouselService.settings;
          var size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
          size = +size;

          if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
          }

          if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
              if (j >= size || j === 0) {
                pages.push({
                  start: Math.min(maximum, i - lower),
                  end: i - lower + size - 1
                });

                if (Math.min(maximum, i - lower) === maximum) {
                  break;
                }

                j = 0, ++k;
              }

              j += this.carouselService.mergers(this.carouselService.relative(i));
            }
          }

          this._pages = pages;
        }
        /**
           * Draws the user interface.
           * @todo The option `dotsData` wont work.
           */

      }, {
        key: "draw",
        value: function draw() {
          var _this12 = this;

          var difference;
          var settings = this.carouselService.settings,
              items = this.carouselService.items(),
              disabled = items.length <= settings.items;
          this._navData.disabled = !settings.nav || disabled;
          this._dotsData.disabled = !settings.dots || disabled;

          if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;

            if (settings.dotsData && difference !== 0) {
              this._dotsData.dots = [];
              items.forEach(function (item) {
                _this12._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(item.id),
                  innerContent: item.dotContent,
                  showInnerContent: true
                });
              });
            } else if (difference > 0) {
              var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;

              for (var i = 0; i < difference; i++) {
                this._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(i + startI),
                  innerContent: '',
                  showInnerContent: false
                });
              }
            } else if (difference < 0) {
              this._dotsData.dots.splice(difference, Math.abs(difference));
            }
          }

          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
      }, {
        key: "update",
        value:
        /**
         * Updates navigation buttons's and dots's states
         */
        function update() {
          this._updateNavButtons();

          this._updateDots();
        }
        /**
         * Changes state of nav buttons (disabled, enabled)
         */

      }, {
        key: "_updateNavButtons",
        value: function _updateNavButtons() {
          var settings = this.carouselService.settings,
              loop = settings.loop || settings.rewind,
              index = this.carouselService.relative(this.carouselService.current());

          if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
          }

          this.carouselService.navData = this._navData;
        }
        /**
         * Changes active dot if page becomes changed
         */

      }, {
        key: "_updateDots",
        value: function _updateDots() {
          var curActiveDotI;

          if (!this.carouselService.settings.dots) {
            return;
          }

          this._dotsData.dots.forEach(function (item) {
            if (item.active === true) {
              item.active = false;
            }
          });

          curActiveDotI = this._current();

          if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
          }

          this.carouselService.dotsData = this._dotsData;
        }
        /**
           * Gets the current page position of the carousel.
           * @returns the current page position of the carousel
           */

      }, {
        key: "_current",
        value: function _current() {
          var current = this.carouselService.relative(this.carouselService.current());
          var finalCurrent;

          var pages = this._pages.filter(function (page, index) {
            return page.start <= current && page.end >= current;
          }).pop();

          finalCurrent = this._pages.findIndex(function (page) {
            return page.start === pages.start && page.end === pages.end;
          });
          return finalCurrent;
        }
      }, {
        key: "_getPosition",
        value:
        /**
           * Gets the current succesor/predecessor position.
         * @param sussessor position of slide
           * @returns the current succesor/predecessor position
           */
        function _getPosition(successor) {
          var position, length;
          var settings = this.carouselService.settings;

          if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
          } else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
          }

          return position;
        }
      }, {
        key: "next",
        value:
        /**
           * Slides to the next item or page.
           * @param speed The time in milliseconds for the transition.
           */
        function next(speed) {
          this.carouselService.to(this._getPosition(true), speed);
        }
      }, {
        key: "prev",
        value:
        /**
         * Slides to the previous item or page.
         * @param speed The time in milliseconds for the transition.
         */
        function prev(speed) {
          this.carouselService.to(this._getPosition(false), speed);
        }
      }, {
        key: "to",
        value:
        /**
         * Slides to the specified item or page.
         * @param position - The position of the item or page.
         * @param speed - The time in milliseconds for the transition.
         * @param standard - Whether to use the standard behaviour or not. Default meaning false
         */
        function to(position, speed, standard) {
          var length;

          if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
          } else {
            this.carouselService.to(position, speed);
          }
        }
      }, {
        key: "moveByDot",
        value:
        /**
         * Moves carousel after user's clicking on any dots
         */
        function moveByDot(dotId) {
          var index = this._dotsData.dots.findIndex(function (dot) {
            return dotId === dot.id;
          });

          this.to(index, this.carouselService.settings.dotsSpeed);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id id of slide
         */

      }, {
        key: "toSlideById",
        value: function toSlideById(id) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.id === id && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
      }]);
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac
    });

    NavigationService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    }; // import { Injectable } from '@angular/core';

    /**
     * Create a new injection token for injecting the window into a component.
     */


    var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
    /**
     * Define abstract class for obtaining reference to the global window object.
     */

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      return _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);
    }();
    /**
     * Define class that implements the abstract class and returns the native window object.
     */


    var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
      function BrowserWindowRef() {
        _classCallCheck(this, BrowserWindowRef);

        return _callSuper(this, BrowserWindowRef);
      }
      /**
       * @returns window object
       */


      _inherits(BrowserWindowRef, _WindowRef);

      return _createClass(BrowserWindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return window;
        }
      }]);
    }(WindowRef);

    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
      return new (t || BrowserWindowRef)();
    };

    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowserWindowRef,
      factory: BrowserWindowRef.ɵfac
    });
    /**
     * Create an factory function that returns the native window object.
     * @param browserWindowRef Native window object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */

    function windowFactory(browserWindowRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
      }

      var obj = {
        setTimeout: function setTimeout(func, time) {},
        clearTimeout: function clearTimeout(a) {}
      };
      return obj;
    }
    /**
     * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
     */


    var browserWindowProvider = {
      provide: WindowRef,
      useClass: BrowserWindowRef
    };
    /**
     * Create an injectable provider that uses the windowFactory function for returning the native window object.
     */

    var windowProvider = {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

    var AutoplayService = /*#__PURE__*/function () {
      function AutoplayService(carouselService, winRef, docRef) {
        _classCallCheck(this, AutoplayService);

        this.carouselService = carouselService;
        /**
         * The autoplay timeout.
         */

        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */

        this._paused = false;
        this.winRef = winRef;
        this.docRef = docRef;
        this.spyDataStreams();
      }

      return _createClass(AutoplayService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoplaySubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this13 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this13.carouselService.settings.autoplay) {
              _this13.play();
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this13._handleChangeObservable(data);
          }));
          var resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this13.carouselService.settings.autoplay) {
              _this13.play();
            } else {
              _this13.stop();
            }
          })); // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
          // They are triggered by Video Plugin

          var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, resized$);
          this.autoplaySubscription = autoplayMerge$.subscribe(function () {});
        }
        /**
           * Starts the autoplay.
           * @param timeout The interval before the next animation starts.
           * @param speed The animation speed for the animations.
           */

      }, {
        key: "play",
        value: function play(timeout, speed) {
          if (this._paused) {
            this._paused = false;

            this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
          }

          if (this.carouselService.is('rotating')) {
            return;
          }

          this.carouselService.enter('rotating');

          this._setAutoPlayInterval();
        }
      }, {
        key: "_getNextTimeout",
        value:
        /**
           * Gets a new timeout
           * @param timeout - The interval before the next animation starts.
           * @param speed - The animation speed for the animations.
           * @return
           */
        function _getNextTimeout(timeout, speed) {
          var _this14 = this;

          if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
          }

          this._isArtificialAutoplayTimeout = timeout ? true : false;
          return this.winRef.setTimeout(function () {
            if (_this14._paused || _this14.carouselService.is('busy') || _this14.carouselService.is('interacting') || _this14.docRef.hidden) {
              return;
            }

            _this14.carouselService.next(speed || _this14.carouselService.settings.autoplaySpeed);
          }, timeout || this.carouselService.settings.autoplayTimeout);
        }
      }, {
        key: "_setAutoPlayInterval",
        value:
        /**
           * Sets autoplay in motion.
           */
        function _setAutoPlayInterval(timeout) {
          this._timeout = this._getNextTimeout(timeout);
        }
      }, {
        key: "stop",
        value:
        /**
         * Stops the autoplay.
         */
        function stop() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
          this.winRef.clearTimeout(this._timeout);
          this.carouselService.leave('rotating');
        }
      }, {
        key: "pause",
        value:
        /**
           * Stops the autoplay.
           */
        function pause() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
        }
      }, {
        key: "_handleChangeObservable",
        value:
        /**
         * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
         * @param data object with current position of carousel and type of change
         */
        function _handleChangeObservable(data) {
          if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
              this.play();
            } else {
              this.stop();
            }
          } else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
              this._setAutoPlayInterval();
            }
          }
        }
        /**
         * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
         */

      }, {
        key: "_playAfterTranslated",
        value: function _playAfterTranslated() {
          var _this15 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this15.carouselService.getTranslatedState();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
            return _this15._isArtificialAutoplayTimeout;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this15._setAutoPlayInterval();
          })).subscribe(function () {});
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
          }
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayingMouseLeave",
        value: function startPlayingMouseLeave() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayingTouchEnd",
        value: function startPlayingTouchEnd() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
      }]);
    }();

    AutoplayService.ɵfac = function AutoplayService_Factory(t) {
      return new (t || AutoplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DOCUMENT));
    };

    AutoplayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutoplayService,
      factory: AutoplayService.ɵfac
    });

    AutoplayService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [WINDOW]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    AutoplayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(WINDOW)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], AutoplayService);

    var LazyLoadService = /*#__PURE__*/function () {
      function LazyLoadService(carouselService) {
        _classCallCheck(this, LazyLoadService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      return _createClass(LazyLoadService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.lazyLoadSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this16 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            var isLazyLoad = _this16.carouselService.settings && !_this16.carouselService.settings.lazyLoad;

            _this16.carouselService.slidesData.forEach(function (item) {
              return item.load = isLazyLoad ? true : false;
            });
          }));
          var changeSettings$ = this.carouselService.getChangeState();
          var resizedCarousel$ = this.carouselService.getResizedState();
          var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this16._defineLazyLoadSlides(data);
          }));
          this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () {});
        }
      }, {
        key: "_defineLazyLoadSlides",
        value: function _defineLazyLoadSlides(data) {
          var _this17 = this;

          if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
          }

          if (data.property && data.property.name === 'position' || data === 'initialized' || data === "resized") {
            var settings = this.carouselService.settings,
                clones = this.carouselService.clones().length;
            var n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                i = settings.center && n * -1 || 0,
                position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i; // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option

            if (settings.lazyLoadEager > 0) {
              n += settings.lazyLoadEager; // If the carousel is looping also preload images that are to the "left"

              if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
            }

            while (i++ < n) {
              this._load(clones / 2 + this.carouselService.relative(position));

              if (clones) {
                this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) {
                  return _this17._load(value);
                });
              }

              position++;
            }
          }
        }
        /**
           * Loads all resources of an item at the specified position.
           * @param position - The absolute position of the item.
           */

      }, {
        key: "_load",
        value: function _load(position) {
          if (this.carouselService.slidesData[position].load) {
            return;
          }

          this.carouselService.slidesData[position].load = true;
        }
      }]);
    }();

    LazyLoadService.ɵfac = function LazyLoadService_Factory(t) {
      return new (t || LazyLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    LazyLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyLoadService,
      factory: LazyLoadService.ɵfac
    });

    LazyLoadService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var AnimateService = /*#__PURE__*/function () {
      function AnimateService(carouselService) {
        _classCallCheck(this, AnimateService);

        this.carouselService = carouselService;
        /**
         * s
         */

        this.swapping = true;
        /**
         * active slide before translating
         */

        this.previous = undefined;
        /**
         * new active slide after translating
         */

        this.next = undefined;
        this.spyDataStreams();
      }

      return _createClass(AnimateService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.animateSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this18 = this;

          var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data.property.name === 'position') {
              _this18.previous = _this18.carouselService.current();
              _this18.next = data.property.value;
            }
          }));
          var dragCarousel$ = this.carouselService.getDragState();
          var draggedCarousel$ = this.carouselService.getDraggedState();
          var translatedCarousel$ = this.carouselService.getTranslatedState();
          var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this18.swapping = data === 'translated';
          }));
          var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this18.swapping && (_this18.carouselService._options.animateOut || _this18.carouselService._options.animateIn)) {
              _this18._swap();
            }
          }));
          var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
          this.animateSubscription = animateMerge$.subscribe(function () {});
        }
        /**
           * Toggles the animation classes whenever an translations starts.
           * @returns
           */

      }, {
        key: "_swap",
        value: function _swap() {
          if (this.carouselService.settings.items !== 1) {
            return;
          } // if (!$.support.animation || !$.support.transition) {
          // 	return;
          // }


          this.carouselService.speed(0);
          var left;
          var previous = this.carouselService.slidesData[this.previous],
              next = this.carouselService.slidesData[this.next],
              incoming = this.carouselService.settings.animateIn,
              outgoing = this.carouselService.settings.animateOut;

          if (this.carouselService.current() === this.previous) {
            return;
          }

          if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === previous.id) {
                slide.left = "".concat(left, "px");
                slide.isAnimated = true;
                slide.isDefAnimatedOut = true;
                slide.isCustomAnimatedOut = true;
              }
            });
          }

          if (incoming) {
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === next.id) {
                slide.isAnimated = true;
                slide.isDefAnimatedIn = true;
                slide.isCustomAnimatedIn = true;
              }
            });
          }
        }
      }, {
        key: "clear",
        value:
        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */
        function clear(id) {
          var _this19 = this;

          this.carouselService.slidesData.forEach(function (slide) {
            if (slide.id === id) {
              slide.left = '';
              slide.isAnimated = false;
              slide.isDefAnimatedOut = false;
              slide.isCustomAnimatedOut = false;
              slide.isDefAnimatedIn = false;
              slide.isCustomAnimatedIn = false;
              slide.classes = _this19.carouselService.setCurSlideClasses(slide);
            }
          });
          this.carouselService.onTransitionEnd();
        }
      }]);
    }();

    AnimateService.ɵfac = function AnimateService_Factory(t) {
      return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnimateService,
      factory: AnimateService.ɵfac
    });

    AnimateService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var AutoHeightService = /*#__PURE__*/function () {
      function AutoHeightService(carouselService) {
        _classCallCheck(this, AutoHeightService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      return _createClass(AutoHeightService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoHeightSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this20 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this20.carouselService.settings.autoHeight) {
              _this20.update();
            } else {
              _this20.carouselService.slidesData.forEach(function (slide) {
                return slide.heightState = 'full';
              });
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this20.carouselService.settings.autoHeight && data.property.name === 'position') {
              _this20.update();
            }
          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this20.carouselService.settings.autoHeight) {
              _this20.update();
            }
          }));
          var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.autoHeightSubscription = autoHeight$.subscribe(function () {});
        }
        /**
         * Updates the prop 'heightState' of slides
         */

      }, {
        key: "update",
        value: function update() {
          var items = this.carouselService.settings.items;
          var start = this.carouselService.current(),
              end = start + items;

          if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
          }

          this.carouselService.slidesData.forEach(function (slide, i) {
            slide.heightState = i >= start && i < end ? 'full' : 'nulled';
          });
        }
      }]);
    }();

    AutoHeightService.ɵfac = function AutoHeightService_Factory(t) {
      return new (t || AutoHeightService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    AutoHeightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutoHeightService,
      factory: AutoHeightService.ɵfac
    });

    AutoHeightService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var HashService = /*#__PURE__*/function () {
      function HashService(carouselService, route, router) {
        _classCallCheck(this, HashService);

        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();

        if (!this.route) {
          this.route = {
            fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
          };
        }

        ;

        if (!this.router) {
          this.router = {
            navigate: function navigate(commands, extras) {
              return;
            }
          };
        }
      }

      return _createClass(HashService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hashSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this21 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this21.listenToRoute();
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this21.carouselService.settings.URLhashListener && data.property.name === 'position') {
              var newCurSlide = _this21.carouselService.current();

              var newCurFragment = _this21.carouselService.slidesData[newCurSlide].hashFragment;

              if (!newCurFragment || newCurFragment === _this21.currentHashFragment) {
                return;
              }

              _this21.router.navigate(['./'], {
                fragment: newCurFragment,
                relativeTo: _this21.route
              });
            }
          }));
          var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$);
          this.hashSubscription = hashFragment$.subscribe(function () {});
        }
        /**
         * rewinds carousel to slide which has the same hashFragment as fragment of current url
         * @param fragment fragment of url
         */

      }, {
        key: "rewind",
        value: function rewind(fragment) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.hashFragment === fragment && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
        /**
         * Initiate listening to ActivatedRoute.fragment
         */

      }, {
        key: "listenToRoute",
        value: function listenToRoute() {
          var _this22 = this;

          var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
          this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(count)).subscribe(function (fragment) {
            _this22.currentHashFragment = fragment;

            _this22.rewind(fragment);
          });
        }
      }]);
    }();

    HashService.ɵfac = function HashService_Factory(t) {
      return new (t || HashService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], 8));
    };

    HashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HashService,
      factory: HashService.ɵfac
    });

    HashService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    HashService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], HashService);
    var nextId = 0;

    var CarouselSlideDirective = /*#__PURE__*/function () {
      function CarouselSlideDirective(tplRef) {
        _classCallCheck(this, CarouselSlideDirective);

        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */

        this.id = "owl-slide-".concat(nextId++);
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */

        this._dataMerge = 1;
        /**
         * Width of slide
         */

        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */

        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */

        this.dataHash = '';
      }

      return _createClass(CarouselSlideDirective, [{
        key: "dataMerge",
        get: function get() {
          return this._dataMerge;
        }
        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param - The input to be tested
           * @returns - An indication if the input is a Number or can be coerced to a Number
           */
        ,
        set: function set(data) {
          this._dataMerge = this.isNumeric(data) ? data : 1;
        }
      }, {
        key: "isNumeric",
        value: function isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
      }]);
    }();

    CarouselSlideDirective.ɵfac = function CarouselSlideDirective_Factory(t) {
      return new (t || CarouselSlideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    CarouselSlideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CarouselSlideDirective,
      selectors: [["ng-template", "carouselSlide", ""]],
      inputs: {
        id: "id",
        width: "width",
        dotContent: "dotContent",
        dataHash: "dataHash",
        dataMerge: "dataMerge"
      }
    });

    CarouselSlideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataMerge", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dotContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataHash", void 0);
    /**
     * Data which will be passed out after ending of transition of carousel
     */

    var SlidesOutputData = /*#__PURE__*/_createClass(function SlidesOutputData() {
      _classCallCheck(this, SlidesOutputData);
    });

    ;

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
        _classCallCheck(this, CarouselComponent);

        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.changeDetectorRef = changeDetectorRef;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           *  Data of every slide
           */

        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */

        this.carouselLoaded = false;
        this.docRef = docRef;
      }

      return _createClass(CarouselComponent, [{
        key: "onVisibilityChange",
        value: function onVisibilityChange(ev) {
          if (!this.carouselService.settings.autoplay) return;

          switch (this.docRef.visibilityState) {
            case 'visible':
              this.autoplayService.play();
              break;

            case 'hidden':
              this.autoplayService.stop();
              break;

            default:
              break;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spyDataStreams();
          this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {} // ngAfterContentChecked() END

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this23 = this;

          if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());

            this._winResizeWatcher();
          } else {
            this.logger.log("There are no slides to show. So the carousel won't be rendered");
          }

          this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slides) {
            if (slides.toArray().length) {
              // this.carouselService.setItems(slides.toArray());
              _this23.carouselService.setup(_this23.carouselWindowWidth, slides.toArray(), _this23.options);

              _this23.carouselService.initialize(slides.toArray());
            } else {
              _this23.carouselLoaded = false;

              _this23.logger.log("There are no slides to show. So the carousel won't be re-rendered");
            }
          })).subscribe(function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
          }

          if (this._slidesChangesSubscription) {
            this._slidesChangesSubscription.unsubscribe();
          }

          if (this._allObservSubscription) {
            this._allObservSubscription.unsubscribe();
          }
        }
        /**
         * Joins the observable login in one place: sets values to some observables, merges this observables and
         * subcribes to merge func
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this24 = this;

          this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this24.owlDOMData = data.owlDOMData;
            _this24.stageData = data.stageData;
            _this24.slidesData = data.slidesData;

            if (!_this24.carouselLoaded) {
              _this24.carouselLoaded = true;
            }

            _this24.navData = data.navData;
            _this24.dotsData = data.dotsData;

            _this24.changeDetectorRef.markForCheck();
          }));
          this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this24.gatherTranslatedData();

            _this24.initialized.emit(_this24.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this24.gatherTranslatedData();

            _this24.translated.emit(_this24.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this24.gatherTranslatedData();

            _this24.change.emit(_this24.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            var changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return value.property.name === 'position';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this24.slidesData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(_this24.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slide) {
              var clonedIdPrefix = _this24.carouselService.clonedIdPrefix;
              var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
              return Object.assign(Object.assign({}, slide), {
                id: id,
                isActive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slides) {
              return {
                slides: slides,
                startPosition: _this24.carouselService.relative(value.property.value)
              };
            })); // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
            //   filter(() => value.property.name === 'settings'),
            //   map(() => {
            //     return {
            //       slides: [],
            //       startPosition: this.carouselService.relative(value.property.value)
            //     }
            //   })
            // )

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changedPosition);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slidesData) {
            _this24.gatherTranslatedData();

            _this24.changed.emit(slidesData.slides.length ? slidesData : _this24.slidesOutputData); // console.log(this.slidesOutputData);
            // this.slidesOutputData = {};

          }));
          this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this24.gatherTranslatedData();

            _this24.dragging.emit({
              dragging: true,
              data: _this24.slidesOutputData
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this24.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return !!_this24.carouselService.is('animating');
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (anim) {
            if (anim) {
              return _this24.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('not animating');
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this24.dragging.emit({
              dragging: false,
              data: _this24.slidesOutputData
            });
          }));
          this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
          this._allObservSubscription = this._carouselMerge$.subscribe(function () {});
        }
        /**
         * Init subscription to resize event and attaches handler for this event
         */

      }, {
        key: "_winResizeWatcher",
        value: function _winResizeWatcher() {
          var _this25 = this;

          if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this25.carouselWindowWidth !== _this25.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(this.carouselService.settings.responsiveRefreshRate)).subscribe(function () {
              _this25.carouselService.onResize(_this25.el.nativeElement.querySelector('.owl-carousel').clientWidth);

              _this25.carouselWindowWidth = _this25.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
          }
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
         * Handler for click event, attached to next button
         */

      }, {
        key: "next",
        value: function next() {
          if (!this.carouselLoaded) return;
          this.navigationService.next(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to prev button
         */

      }, {
        key: "prev",
        value: function prev() {
          if (!this.carouselLoaded) return;
          this.navigationService.prev(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to dots
         */

      }, {
        key: "moveByDot",
        value: function moveByDot(dotId) {
          if (!this.carouselLoaded) return;
          this.navigationService.moveByDot(dotId);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id fragment of url
         */

      }, {
        key: "to",
        value: function to(id) {
          // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
          if (!this.carouselLoaded) return;
          this.navigationService.toSlideById(id);
        }
        /**
         * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
         */

      }, {
        key: "gatherTranslatedData",
        value: function gatherTranslatedData() {
          var startPosition;
          var clonedIdPrefix = this.carouselService.clonedIdPrefix;
          var activeSlides = this.slidesData.filter(function (slide) {
            return slide.isActive === true;
          }).map(function (slide) {
            var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
              id: id,
              width: slide.width,
              marginL: slide.marginL,
              marginR: slide.marginR,
              center: slide.isCentered
            };
          });
          startPosition = this.carouselService.relative(this.carouselService.current());
          this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
          };
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          this.autoplayService.startPausing();
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayML",
        value: function startPlayML() {
          this.autoplayService.startPlayingMouseLeave();
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayTE",
        value: function startPlayTE() {
          this.autoplayService.startPlayingTouchEnd();
        }
      }]);
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutoplayService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LazyLoadService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutoHeightService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](HashService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlLogger), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DOCUMENT));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["owl-carousel-o"]],
      contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CarouselSlideDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slides = _t);
        }
      },
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
            return ctx.onVisibilityChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        options: "options"
      },
      outputs: {
        translated: "translated",
        dragging: "dragging",
        change: "change",
        changed: "changed",
        initialized: "initialized"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService])],
      decls: 4,
      vars: 9,
      consts: [[1, "owl-carousel", "owl-theme", 3, "ngClass", "mouseover", "mouseleave", "touchstart", "touchend"], ["owlCarousel", ""], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "ngClass", "innerHTML", "click"], [1, "owl-next", 3, "ngClass", "innerHTML", "click"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "ngClass", "click"], [3, "innerHTML"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
            return ctx.startPausing();
          })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
            return ctx.startPlayML();
          })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
            return ctx.startPausing();
          })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
            return ctx.startPlayTE();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 2, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carouselLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.toArray().length);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], StageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
      },
      styles: [".owl-theme[_ngcontent-%COMP%] { display: block; }"]
    });

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ResizeService
      }, {
        type: CarouselService
      }, {
        type: NavigationService
      }, {
        type: AutoplayService
      }, {
        type: LazyLoadService
      }, {
        type: AnimateService
      }, {
        type: AutoHeightService
      }, {
        type: HashService
      }, {
        type: OwlLogger
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CarouselSlideDirective)], CarouselComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "translated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "dragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "changed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "initialized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:visibilitychange', ['$event'])], CarouselComponent.prototype, "onVisibilityChange", null);
    CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], CarouselComponent);

    var StageComponent = /*#__PURE__*/function () {
      function StageComponent(zone, el, renderer, carouselService, animateService) {
        var _this26 = this;

        _classCallCheck(this, StageComponent);

        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */

        this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null
          },
          direction: null,
          active: false,
          moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */

        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Passes this to _oneMouseTouchMove();
         */

        this.bindOneMouseTouchMove = function (ev) {
          _this26._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragMove = function (ev) {
          _this26._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragEnd = function (ev) {
          // this.zone.run(() => {
          _this26._onDragEnd(ev); // });

        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */


        this._oneClickHandler = function () {
          _this26.listenerOneClick = _this26.renderer.listen(_this26._drag.target, 'click', function () {
            return false;
          });

          _this26.listenerOneClick();
        };
      }

      return _createClass(StageComponent, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchCancel",
        value: function onTouchCancel(event) {
          this._onDragEnd(event);
        }
      }, {
        key: "onDragStart",
        value: function onDragStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "onSelectStart",
        value: function onSelectStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this._oneMoveSubsription = this._oneDragMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            _this27._sendChanges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._oneMoveSubsription.unsubscribe();
        }
        /**
           * Handles `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragStart",
        value: function _onDragStart(event) {
          var _this28 = this;

          var stage = null;

          if (event.which === 3) {
            return;
          }

          stage = this._prepareDragging(event);
          this._drag.time = new Date().getTime();
          this._drag.target = event.target;
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this._pointer(event);
          this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
          this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
          this.zone.runOutsideAngular(function () {
            _this28.listenerOneMouseMove = _this28.renderer.listen(document, 'mousemove', _this28.bindOneMouseTouchMove);
            _this28.listenerOneTouchMove = _this28.renderer.listen(document, 'touchmove', _this28.bindOneMouseTouchMove);
          });
        }
        /**
         * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
         * @param event event objech of mouse or touch event
         */

      }, {
        key: "_oneMouseTouchMove",
        value: function _oneMouseTouchMove(event) {
          var delta = this._difference(this._drag.pointer, this._pointer(event));

          if (this.listenerATag) {
            this.listenerATag();
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
            return;
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
            return;
          }

          this.listenerOneMouseMove();
          this.listenerOneTouchMove();
          this._drag.moving = true;
          this.blockClickAnchorInDragging(event);
          this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
          this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
          event.preventDefault();

          this._enterDragging();

          this._oneDragMove$.next(event); // this._sendChanges();

        }
        /**
         * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
         * @param event event object
         */

      }, {
        key: "blockClickAnchorInDragging",
        value: function blockClickAnchorInDragging(event) {
          var target = event.target;

          while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
          }

          if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', function () {
              return false;
            });
          }
        }
        /**
         * Handles the `touchmove` and `mousemove` events.
         * @todo #261
         * @param event - The event arguments.
         */

      }, {
        key: "_onDragMove",
        value: function _onDragMove(event) {
          var stage;
          var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);

          if (stageOrExit === false) {
            return;
          }

          stage = stageOrExit;
          event.preventDefault();
          this._drag.stage.current = stage;

          this._animate(stage.x - this._drag.stage.start.x);
        }
      }, {
        key: "_animate",
        value:
        /**
         * Moves .owl-stage left-right
         * @param coordinate coordinate to be set to .owl-stage
         */
        function _animate(coordinate) {
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(".concat(coordinate, "px,0px,0px"));
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
        }
        /**
           * Handles the `touchend` and `mouseup` events.
           * @todo #261
           * @todo Threshold for click event
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragEnd",
        value: function _onDragEnd(event) {
          this.carouselService.owlDOMData.isGrab = false;
          this.listenerOneMouseMove();
          this.listenerOneTouchMove();

          if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');

            this._finishDragging(event);

            this.listenerMouseMove();
            this.listenerTouchMove();
          }

          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null,
            active: false,
            moving: false
          }; // this.carouselService.trigger('dragged');

          this.listenerMouseUp();
          this.listenerTouchEnd();
        }
      }, {
        key: "_prepareDragging",
        value:
        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */
        function _prepareDragging(event) {
          return this.carouselService.prepareDragging(event);
        }
        /**
         * Finishes dragging
         * @param event object event of 'mouseUp' of 'touchend' events
         */

      }, {
        key: "_finishDragging",
        value: function _finishDragging(event) {
          this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
        }
        /**
           * Gets unified pointer coordinates from event.
           * @param event The `mousedown` or `touchstart` event.
           * @returns Contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "_pointer",
        value: function _pointer(event) {
          return this.carouselService.pointer(event);
        }
        /**
           * Gets the difference of two vectors.
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "_difference",
        value: function _difference(firstC, second) {
          return this.carouselService.difference(firstC, second);
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param specificState The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "_is",
        value: function _is(specificState) {
          return this.carouselService.is(specificState);
        }
        /**
        * Enters a state.
        * @param name The state name.
        */

      }, {
        key: "_enter",
        value: function _enter(name) {
          this.carouselService.enter(name);
        }
        /**
           * Sends all data needed for View.
           */

      }, {
        key: "_sendChanges",
        value: function _sendChanges() {
          this.carouselService.sendChanges();
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
           * Enters into a 'dragging' state
           */

      }, {
        key: "_enterDragging",
        value: function _enterDragging() {
          this.carouselService.enterDragging();
        }
        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */

      }, {
        key: "clear",
        value: function clear(id) {
          this.animateService.clear(id);
        }
      }]);
    }();

    StageComponent.ɵfac = function StageComponent_Factory(t) {
      return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AnimateService));
    };

    StageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StageComponent,
      selectors: [["owl-stage"]],
      hostBindings: function StageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
            return ctx.onTouchStart($event);
          })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
            return ctx.onTouchCancel($event);
          })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
            return ctx.onDragStart();
          })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
            return ctx.onSelectStart();
          });
        }
      },
      inputs: {
        owlDraggable: "owlDraggable",
        stageData: "stageData",
        slidesData: "slidesData"
      },
      decls: 3,
      vars: 8,
      consts: [[1, "owl-stage", 3, "ngStyle", "transitionend"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "ngClass", "ngStyle", "animationend"], [4, "ngIf"], [3, "ngTemplateOutlet"]],
      template: function StageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
            return ctx.onTransitionEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c5, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slidesData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          height: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
      }
    });

    StageComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: CarouselService
      }, {
        type: AnimateService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "owlDraggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "stageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "slidesData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], StageComponent.prototype, "onMouseDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event'])], StageComponent.prototype, "onTouchStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchcancel', ['$event'])], StageComponent.prototype, "onTouchCancel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart')], StageComponent.prototype, "onDragStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('selectstart')], StageComponent.prototype, "onSelectStart", null);

    var OwlRouterLinkDirective = /*#__PURE__*/function () {
      function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
        _classCallCheck(this, OwlRouterLinkDirective);

        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];

        if (tabIndex == null) {
          renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
      }

      return _createClass(OwlRouterLinkDirective, [{
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */

      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };

          if (this.stopLink) {
            return false;
          }

          this.router.navigateByUrl(this.urlTree, extras);
          return true;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);
    }();

    OwlRouterLinkDirective.ɵfac = function OwlRouterLinkDirective_Factory(t) {
      return new (t || OwlRouterLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    OwlRouterLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OwlRouterLinkDirective,
      selectors: [["", "owlRouterLink", "", 5, "a"]],
      hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        stopLink: "stopLink",
        owlRouterLink: "owlRouterLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl"
      }
    });

    OwlRouterLinkDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], OwlRouterLinkDirective.prototype, "onClick", null);
    OwlRouterLinkDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabindex'))], OwlRouterLinkDirective);
    /**
     * @description
     *
     * Lets you link to specific routes in your app.
     *
     * See `RouterLink` for more information.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */

    var OwlRouterLinkWithHrefDirective = /*#__PURE__*/function () {
      function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
        var _this29 = this;

        _classCallCheck(this, OwlRouterLinkWithHrefDirective);

        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
          if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
            _this29.updateTargetUrlAndHref();
          }
        });
      }

      return _createClass(OwlRouterLinkWithHrefDirective, [{
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.updateTargetUrlAndHref();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onClick",
        value: function onClick(button, ctrlKey, metaKey, shiftKey) {
          if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
          }

          if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
          }

          if (this.stopLink) {
            return false;
          }

          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };
          this.router.navigateByUrl(this.urlTree, extras);
          return false;
        }
      }, {
        key: "updateTargetUrlAndHref",
        value: function updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);
    }();

    OwlRouterLinkWithHrefDirective.ɵfac = function OwlRouterLinkWithHrefDirective_Factory(t) {
      return new (t || OwlRouterLinkWithHrefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]));
    };

    OwlRouterLinkWithHrefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OwlRouterLinkWithHrefDirective,
      selectors: [["a", "owlRouterLink", ""]],
      hostVars: 2,
      hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("target", ctx.target);
        }
      },
      inputs: {
        stopLink: "stopLink",
        owlRouterLink: "owlRouterLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    OwlRouterLinkWithHrefDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.target'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])()], OwlRouterLinkWithHrefDirective.prototype, "href", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])], OwlRouterLinkWithHrefDirective.prototype, "onClick", null);

    function attrBoolValue(s) {
      return s === '' || !!s;
    }

    var routes = [];

    var CarouselModule = /*#__PURE__*/_createClass(function CarouselModule() {
      _classCallCheck(this, CarouselModule);
    });

    CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CarouselModule
    });
    CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CarouselModule_Factory(t) {
        return new (t || CarouselModule)();
      },
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserDocumentRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlLogger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: OwlLogger
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoplayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [WINDOW]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyLoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoHeightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HashService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselSlideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ng-template[carouselSlide]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dotContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataHash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataMerge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'owl-carousel-o',
          template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
          providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
          styles: [".owl-theme { display: block; }"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ResizeService
        }, {
          type: CarouselService
        }, {
          type: NavigationService
        }, {
          type: AutoplayService
        }, {
          type: LazyLoadService
        }, {
          type: AnimateService
        }, {
          type: AutoHeightService
        }, {
          type: HashService
        }, {
          type: OwlLogger
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, {
        translated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onVisibilityChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:visibilitychange', ['$event']]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [CarouselSlideDirective]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'owl-stage',
          template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            height: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: CarouselService
        }, {
          type: AnimateService
        }];
      }, {
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onTouchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['touchstart', ['$event']]
        }],
        onTouchCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['touchcancel', ['$event']]
        }],
        onDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['dragstart']
        }],
        onSelectStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['selectstart']
        }],
        owlDraggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stageData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slidesData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlRouterLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: ':not(a)[owlRouterLink]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlRouterLinkWithHrefDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'a[owlRouterLink]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
        }];
      }, {
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']]
        }],
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.target']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, {
        declarations: function declarations() {
          return [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
          exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
          providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-owl-carousel-o.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-owl-carousel-o/node_modules/tslib/tslib.es6.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel-o/node_modules/tslib/tslib.es6.js ***!
    \*************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function _node_modules_ngxOwlCarouselO_node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/modules/carousel/carousel.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/carousel/carousel.component.ts ***!
    \********************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function _src_app_modules_carousel_carouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function CarouselComponent_owl_carousel_o_1_1_ng_template_0_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r14);
      }
    }

    function CarouselComponent_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_owl_carousel_o_1_1_ng_template_0_p_6_Template, 2, 1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r11.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r11.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.getDescription(slide_r11.description));
      }
    }

    function CarouselComponent_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_owl_carousel_o_1_1_ng_template_0_Template, 7, 3, "ng-template", 11);
      }
    }

    function CarouselComponent_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.customOptions1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.slideData.datas);
      }
    }

    function CarouselComponent_owl_carousel_o_2_1_ng_template_0_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r20.description);
      }
    }

    function CarouselComponent_owl_carousel_o_2_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_owl_carousel_o_2_1_ng_template_0_li_4_Template, 2, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r17[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", slide_r17[1]);
      }
    }

    function CarouselComponent_owl_carousel_o_2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_owl_carousel_o_2_1_ng_template_0_Template, 5, 2, "ng-template", 11);
      }
    }

    function CarouselComponent_owl_carousel_o_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_owl_carousel_o_2_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.customOptions2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.slideData.datas);
      }
    }

    function CarouselComponent_owl_carousel_o_3_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r23.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r23.text);
      }
    }

    function CarouselComponent_owl_carousel_o_3_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_owl_carousel_o_3_1_ng_template_0_Template, 5, 2, "ng-template", 11);
      }
    }

    function CarouselComponent_owl_carousel_o_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_owl_carousel_o_3_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.customOptions3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.slideData.datas);
      }
    }

    function CarouselComponent_owl_carousel_o_4_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r28 = ctx_r30.index;
        var slide_r27 = ctx_r30.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background: ", ctx_r29.colors[i_r28], "; border-radius: 50%;height: 70px;margin: auto;width: 70px;");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/image/icons/new/", i_r28, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r27.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color: ", ctx_r29.colors[i_r28], ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r27.number);
      }
    }

    function CarouselComponent_owl_carousel_o_4_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_owl_carousel_o_4_1_ng_template_0_Template, 7, 9, "ng-template", 11);
      }
    }

    function CarouselComponent_owl_carousel_o_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_owl_carousel_o_4_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.customOptions4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.slideData.datas);
      }
    }

    function CarouselComponent_div_5_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r33.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r33.name);
      }
    }

    function CarouselComponent_div_5_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_5_owl_carousel_o_1_1_ng_template_0_Template, 5, 2, "ng-template", 11);
      }
    }

    function CarouselComponent_div_5_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_5_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r31.customOptions5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.slideData.datas);
      }
    }

    function CarouselComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_5_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.slideData && ctx_r4.slideData.type == 5);
      }
    }

    function CarouselComponent_div_6_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r39.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r39.name);
      }
    }

    function CarouselComponent_div_6_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_6_owl_carousel_o_1_1_ng_template_0_Template, 5, 2, "ng-template", 11);
      }
    }

    function CarouselComponent_div_6_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r37.customOptions6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.slideData.datas);
      }
    }

    function CarouselComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.slideData && ctx_r5.slideData.type == 6);
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", slide_r45.percent, "% ");
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_13_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 39);
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_13_i_feather_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 40);
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u04E8\u043C\u043D\u04E9\u0445 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_13_i_feather_5_Template, 1, 0, "i-feather", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_13_i_feather_6_Template, 1, 0, "i-feather", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u043E\u043D\u043E\u043E\u0441 ", slide_r45.percent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r45.percent < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r45.percent >= 0);
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0442\u044D\u0440\u0431\u0443\u043C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_12_Template, 5, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_div_13_Template, 7, 3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r45.codeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r45.approvedValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.checkType());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r47.checkType());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r45.name);
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_7_owl_carousel_o_1_1_ng_template_0_Template, 16, 5, "ng-template", 11);
      }
    }

    function CarouselComponent_div_7_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_7_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r43.customOptions7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.slideData.datas);
      }
    }

    function CarouselComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_7_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.slideData && ctx_r6.slideData.type == 7);
      }
    }

    function CarouselComponent_div_8_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r57.number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "../../../assets/image/new/shinechlel/", slide_r57.year, ".", slide_r57.name, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CarouselComponent_div_8_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_8_owl_carousel_o_1_1_ng_template_0_Template, 4, 3, "ng-template", 11);
      }
    }

    function CarouselComponent_div_8_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_8_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r55.customOptions8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.slideData.datas);
      }
    }

    function CarouselComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_8_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.slideData && ctx_r7.slideData.type == 8);
      }
    }

    function CarouselComponent_div_9_owl_carousel_o_1_1_ng_template_0_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var info_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r67, " ");
      }
    }

    function CarouselComponent_div_9_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0425\u04AE\u0420\u042D\u042D\u041B\u042D\u041D \u0411\u0423\u0419 \u041E\u0420\u0427\u0418\u041D \u0425\u0410\u041C\u0413\u0410\u0410\u041B\u0410\u041B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0417\u043E\u0440\u0438\u043B\u0433\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0410\u0432\u0430\u0445 \u0430\u0440\u0433\u0430 \u0445\u044D\u043C\u0436\u044D\u044D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CarouselComponent_div_9_owl_carousel_o_1_1_ng_template_0_li_20_Template, 2, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r65.getNumber(slide_r63.budget)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r63.purpose);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r65.getList(slide_r63.events));
      }
    }

    function CarouselComponent_div_9_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_9_owl_carousel_o_1_1_ng_template_0_Template, 21, 5, "ng-template", 11);
      }
    }

    function CarouselComponent_div_9_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_9_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r61.customOptions9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.slideData.datas);
      }
    }

    function CarouselComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.slideData && ctx_r8.slideData.type == 9);
      }
    }

    function CarouselComponent_div_10_owl_carousel_o_1_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r72.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r72.content, " ");
      }
    }

    function CarouselComponent_div_10_owl_carousel_o_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_10_owl_carousel_o_1_1_ng_template_0_Template, 5, 2, "ng-template", 11);
      }
    }

    function CarouselComponent_div_10_owl_carousel_o_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function CarouselComponent_div_10_owl_carousel_o_1_Template_owl_carousel_o_changed_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r76.changed($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_10_owl_carousel_o_1_1_Template, 1, 0, undefined, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r70.customOptions10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.slideData.datas);
      }
    }

    function CarouselComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_10_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.slideData && ctx_r9.slideData.type == 10);
      }
    }

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(mainService, route, router) {
        var _this30 = this;

        _classCallCheck(this, CarouselComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].year,
          category: src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].category
        }; // slideData: {type:1, datas: [{name: "oyutan", budget: "1000", subs: ["oyutnii too 4000","oyutnii too 4000","oyutnii too 4000"]}]};

        this.customOptions1 = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
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
              items: 4
            }
          },
          nav: true
        };
        this.customOptions2 = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
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
        this.colors = src_app_services_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].colors;
        this.customOptions3 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
          startPosition: 1,
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
        this.customOptions4 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide-invest'></div>", "<div class='nav-btn next-slide-invest'></div>"],
          startPosition: 1,
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
        this.customOptions5 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["", ""],
          // navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
          startPosition: 0,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: false
        };
        this.customOptions6 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["", ""],
          // navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
          startPosition: 0,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: false
        };
        this.customOptions7 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["", ""],
          // navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
          startPosition: 0,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: false
        };
        this.customOptions8 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide-black'></div>", "<div class='nav-btn next-slide-black'></div>"],
          startPosition: 0,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: true
        };
        this.customOptions9 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide-black-1'></div>", "<div class='nav-btn next-slide-black-1'></div>"],
          startPosition: 0,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: true
        };
        this.customOptions10 = {
          center: true,
          loop: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          navText: ["<div class='nav-btn prev-slide-black-1'></div>", "<div class='nav-btn next-slide-black-1'></div>"],
          startPosition: 0,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: true
        };
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this30.setQueryParam(val.url.split('?')[1]);
            }
          }
        });
      }

      return _createClass(CarouselComponent, [{
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
        key: "change",
        value: function change(index) {}
      }, {
        key: "changed",
        value: function changed(event) {
          this.changeEvent.emit(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getDescription",
        value: function getDescription(description) {
          if (description === "0") {
            return [];
          }

          return description.split(",");
        }
      }, {
        key: "getList",
        value: function getList(text) {
          return text.split("|");
        }
      }, {
        key: "getNumber",
        value: function getNumber(text) {
          return text.slice(0, text.indexOf(' '));
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

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["module-carousel"]],
      inputs: {
        slideData: "slideData",
        slideData1: "slideData1"
      },
      outputs: {
        changeEvent: "changeEvent"
      },
      decls: 11,
      vars: 10,
      consts: [[1, "carousel"], [3, "options", 4, "ngIf"], ["class", "owl-main", 3, "options", 4, "ngIf"], ["class", "slide5", 4, "ngIf"], ["class", "slide6", 4, "ngIf"], ["class", "slide7", 4, "ngIf"], ["class", "slide8", 4, "ngIf"], ["class", "slide9", 4, "ngIf"], ["class", "slide10", 4, "ngIf"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "slide"], [1, "budget1"], ["id", "style-1", 1, "scrollbar"], [1, "owl-main", 3, "options"], [1, "slide1"], [2, "color", "#ffc705"], [1, "budget"], [1, "slide4"], [1, "img"], ["alt", "", 3, "src"], [1, "name"], [1, "number"], [1, "slide5"], [1, "slide-concept"], [1, "slide6"], [1, "slide-concept1"], [1, "slide7"], [1, "ded-ded-left"], [1, "ded-ded-right"], [1, "ded-process"], [1, "row"], [1, "col-md-6", "left"], ["class", "col-md-6 right", "style", "padding-right: 30px;", 4, "ngIf"], [1, "ptag"], [1, "col-md-6", "right", 2, "padding-right", "30px"], ["name", "arrow-down", "class", "down-icon-w", "style", "position: absolute;top: 7px;color: #fff;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon-w", "style", "position: absolute;top: 7px;color: #ffffff;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon-w", 2, "position", "absolute", "top", "7px", "color", "#fff"], ["name", "arrow-up", 1, "down-icon-w", 2, "position", "absolute", "top", "7px", "color", "#ffffff"], [1, "slide8"], [1, "slide9"], [1, "col-md-6"], ["src", "../../../assets/image/budget/other.png"], [1, "block-other"], [1, "col-md-6", "purpose"], [1, "slide10"], ["class", "owl-main", 3, "options", "changed", 4, "ngIf"], [1, "owl-main", 3, "options", "changed"], [1, "slide-content"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_owl_carousel_o_2_Template, 2, 2, "owl-carousel-o", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_owl_carousel_o_3_Template, 2, 2, "owl-carousel-o", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_owl_carousel_o_4_Template, 2, 2, "owl-carousel-o", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselComponent_div_8_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselComponent_div_9_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CarouselComponent_div_10_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideData && ctx.slideData.type == 10);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselSlideDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
      styles: [".slide[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-right: 2px solid #fff;\n  min-height: 100px;\n}\n.slide[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.slide[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.slide[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: justify;\n  padding-right: 13px;\n}\n.slide[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffc705;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 18px;\n  min-height: 80px;\n}\n.slide[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: scroll;\n}\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 3px #505054;\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 3px #505054;\n  background-color: #555;\n}\n.slide1[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 300px;\n}\n.slide1[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n}\n.slide1[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.slide1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.slide1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffc705;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-align: center;\n}\n.slide4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.slide4[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin: auto;\n  text-align: center;\n  width: 50px;\n}\n.slide4[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-transform: uppercase;\n  font-size: large;\n  font-weight: 800;\n  color: #505054;\n}\n.slide4[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  color: #505054;\n}\n.slide5[_ngcontent-%COMP%] {\n  transform: skew(20deg);\n  position: relative;\n}\n.slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n  color: #fff;\n}\n.slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  width: 600px;\n  text-align: center;\n  margin: auto;\n  font-size: 18px;\n  line-height: 130%;\n}\n.slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: 600;\n  background-color: #fdbe25;\n  width: 45px;\n  left: 60px;\n  border-radius: 50%;\n  position: absolute;\n}\n.slide6[_ngcontent-%COMP%] {\n  transform: skew(20deg);\n  position: relative;\n}\n.slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  color: #fff;\n}\n.slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  width: 600px;\n  text-align: center;\n  margin: auto;\n  font-size: 18px;\n  line-height: 130%;\n}\n.slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: 600;\n  background-color: #fdbe25;\n  width: 45px;\n  left: 60px;\n  border-radius: 50%;\n  position: absolute;\n}\n.slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #fff;\n}\n.slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  padding-top: 70px;\n  width: 600px;\n  text-align: center;\n  margin: auto;\n}\n.slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: 600;\n  background-color: #fdbe25;\n  width: 45px;\n  left: 60px;\n  border-radius: 50%;\n  position: absolute;\n}\n.slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .ptag[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  font-size: 13px;\n  max-height: 90px;\n  overflow: hidden;\n  padding-top: 0px;\n  padding-left: 10px;\n  word-wrap: break-word;\n  text-align: left;\n}\n.slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #fff;\n}\n.slide7[_ngcontent-%COMP%]   .ded-ded-right[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  width: 270px;\n  bottom: 50px;\n  left: 800px;\n  margin: 0px auto;\n  color: #ffffff;\n  display: inline-block;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  padding: 10px;\n  line-height: 110%;\n  text-transform: none;\n}\n.slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 15px;\n}\n.slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 15px;\n}\n.slide8[_ngcontent-%COMP%] {\n  position: relative;\n}\n.slide8[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: 600;\n  background-color: #fdbe25;\n  width: 45px;\n  left: 60px;\n  border-radius: 50%;\n  position: absolute;\n}\n.slide8[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 80%;\n}\n.slide9[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-bottom: 0px;\n}\n.slide9[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 40px;\n}\n.slide9[_ngcontent-%COMP%]   .purpose[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.slide9[_ngcontent-%COMP%]   .purpose[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #333;\n  margin-top: 10px;\n}\n.slide9[_ngcontent-%COMP%]   .purpose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 180%;\n  margin-bottom: 30px;\n}\n.slide9[_ngcontent-%COMP%]   .purpose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.slide9[_ngcontent-%COMP%]   .purpose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.slide9[_ngcontent-%COMP%]   .block-other[_ngcontent-%COMP%] {\n  background-color: #28c66f;\n  min-height: 220px;\n  width: 100%;\n  border-radius: 20px;\n  padding: 30px;\n  color: #fff;\n}\n.slide9[_ngcontent-%COMP%]   .block-other[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 0px;\n}\n.slide9[_ngcontent-%COMP%]   .block-other[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-weight: bold !important;\n  font-size: 36px !important;\n}\n.budget[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px !important;\n  font-weight: 400 !important;\n  text-align: justify;\n}\n.budget1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.carousel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1450px;\n}\n.slide10[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.slide10[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  margin-bottom: 30px;\n}\n.slide10[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-weight: bold;\n}\n.slide10[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: inherit;\n  text-align: center;\n  font-size: 20px;\n}\n@media screen and (max-width: 1680px) {\n  .slide1[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 180px;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .slide1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #ffc705;\n    font-weight: 700;\n    font-size: 16px;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  .slide5[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 20px;\n    color: #fff;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 550px;\n    text-align: center;\n    margin: auto;\n    font-size: 16px;\n    line-height: 130%;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide6[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    color: #fff;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 550px;\n    text-align: center;\n    margin: auto;\n    font-size: 16px;\n    line-height: 130%;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    width: 600px;\n    text-align: center;\n    margin: auto;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 45px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .ptag[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 740px;\n    font-size: 10px;\n    max-height: 90px;\n    overflow: hidden;\n    padding-top: 0px;\n    padding-left: 10px;\n    word-wrap: break-word;\n    text-align: left;\n    margin-bottom: 0px !important;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-right[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 270px;\n    bottom: 50px;\n    left: 800px;\n    margin: 0px auto;\n    color: #ffffff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 15px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .slide1[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 170px;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .slide1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #ffc705;\n    font-weight: 700;\n    font-size: 16px;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  .slide5[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 20px;\n    color: #fff;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 500px;\n    text-align: center;\n    margin: auto;\n    font-size: 15px;\n    line-height: 130%;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide6[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    color: #fff;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 500px;\n    text-align: center;\n    margin: auto;\n    font-size: 15px;\n    line-height: 130%;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    width: 600px;\n    text-align: center;\n    margin: auto;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 45px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .ptag[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 740px;\n    font-size: 10px;\n    max-height: 90px;\n    overflow: hidden;\n    padding-top: 0px;\n    padding-left: 10px;\n    word-wrap: break-word;\n    text-align: left;\n    margin-bottom: 0px !important;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-right[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 270px;\n    bottom: 50px;\n    left: 800px;\n    margin: 0px auto;\n    color: #ffffff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 15px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .slide1[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 170px;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .slide1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #ffc705;\n    font-weight: 700;\n    font-size: 16px;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  .slide5[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 20px;\n    color: #fff;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 450px;\n    text-align: center;\n    margin: auto;\n    font-size: 13px;\n    line-height: 130%;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide6[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    color: #fff;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 450px;\n    text-align: center;\n    margin: auto;\n    font-size: 13px;\n    line-height: 130%;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    width: 600px;\n    text-align: center;\n    margin: auto;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 45px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .ptag[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 740px;\n    font-size: 10px;\n    max-height: 90px;\n    overflow: hidden;\n    padding-top: 0px;\n    padding-left: 10px;\n    word-wrap: break-word;\n    text-align: left;\n    margin-bottom: 0px !important;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-right[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 270px;\n    bottom: 50px;\n    left: 800px;\n    margin: 0px auto;\n    color: #ffffff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 15px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .slide1[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 160px;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .slide1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #ffc705;\n    font-weight: 700;\n    font-size: 16px;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  .slide5[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 20px;\n    color: #fff;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 450px;\n    text-align: center;\n    margin: auto;\n    font-size: 13px;\n    line-height: 130%;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide6[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    color: #fff;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 450px;\n    text-align: center;\n    margin: auto;\n    font-size: 13px;\n    line-height: 130%;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    width: 600px;\n    text-align: center;\n    margin: auto;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 45px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .ptag[_ngcontent-%COMP%] {\n    overflow-wrap: break-word;\n    width: 100%;\n    max-width: 740px;\n    font-size: 10px;\n    max-height: 90px;\n    overflow: hidden;\n    padding-top: 0px;\n    padding-left: 10px;\n    word-wrap: break-word;\n    text-align: left;\n    margin-bottom: 0px !important;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-right[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 270px;\n    bottom: 50px;\n    left: 800px;\n    margin: 0px auto;\n    color: #ffffff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 15px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .slide1[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 150px;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   .budget1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n  }\n  .slide1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .slide1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #ffc705;\n    font-weight: 700;\n    font-size: 16px;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  .slide5[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 20px;\n    color: #fff;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 350px;\n    text-align: center;\n    margin: auto;\n    font-size: 12px;\n    line-height: 130%;\n  }\n  .slide5[_ngcontent-%COMP%]   .slide-concept[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide6[_ngcontent-%COMP%] {\n    transform: skew(20deg);\n    position: relative;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    color: #fff;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    width: 450px;\n    text-align: center;\n    margin: auto;\n    font-size: 13px;\n    line-height: 130%;\n  }\n  .slide6[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 35px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    width: 600px;\n    text-align: center;\n    margin: auto;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-weight: 600;\n    background-color: #fdbe25;\n    width: 45px;\n    left: 60px;\n    border-radius: 50%;\n    position: absolute;\n  }\n  .slide7[_ngcontent-%COMP%]   .slide-concept1[_ngcontent-%COMP%]   .ptag[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 740px;\n    font-size: 7px;\n    max-height: 90px;\n    overflow: hidden;\n    padding-top: 0px;\n    padding-left: 10px;\n    word-wrap: break-word;\n    text-align: left;\n    margin-bottom: 0px !important;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 8px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #fff;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-ded-right[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 600;\n    width: 220px;\n    bottom: 50px;\n    left: 800px;\n    margin: 0px auto;\n    color: #ffffff;\n    display: inline-block;\n    border-radius: 30px;\n    border: 2px solid #fff;\n    padding: 10px;\n    line-height: 110%;\n    text-transform: none;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 15px;\n  }\n  .slide7[_ngcontent-%COMP%]   .ded-process[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREFJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRENBO0VBRUUseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDQTtFQUVFLFVBQUE7RUFDQSx5QkFBQTtBQ0NGO0FERUE7RUFFRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7QUNBRjtBREVBO0VBQ0ksYUFBQTtFQUVBLGFBQUE7QUNBSjtBRENJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURJQTtFQUNJLGtCQUFBO0FDREo7QURHUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FESUk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ0hSO0FET0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDSko7QURLSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSFI7QURJUTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZYO0FESVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FET0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDSko7QURLSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSFI7QURJUTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZYO0FESVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FEVUk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ1BSO0FEUVE7RUFDRyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOWDtBRFFRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNOWjtBRFFRO0VBQ0ksV0FBQTtFQUFhLGdCQUFBO0VBQWlCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBb0IscUJBQUE7RUFDaEgsZ0JBQUE7QUNDcEI7QURFUTtFQU9JLG9CQUFBO0FDTlo7QURBWTtFQUNJLGVBQUE7RUFDWixnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FER0k7RUFDSSxvQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNEUjtBREVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQVo7QURFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0FaO0FESUE7RUFDSSxrQkFBQTtBQ0RKO0FERUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFFSSxpQkFBQTtFQUNBLFVBQUE7QUNEUjtBRFNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUEo7QURRSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ05SO0FEUUk7RUFDSSxnQkFBQTtBQ05SO0FET1E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTFo7QURPUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNMWjtBRE9PO0VBQ0ksa0JBQUE7QUNMWDtBRE1XO0VBQ0ksbUJBQUE7QUNKZjtBRFFJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDTlI7QURPUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDTFo7QURPUTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ0xaO0FEU0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDTko7QURRQTtFQUNJLGtCQUFBO0FDTEo7QURPQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0pKO0FET0k7RUFDSSxnQkFBQTtBQ0pSO0FES1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0haO0FES1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSFo7QURLUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIWjtBRFNBO0VBRUE7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQ1BGO0VEUUU7SUFDSSwwQkFBQTtJQUNBLGlCQUFBO0VDTk47RURRRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ05OO0VEUUU7SUFDSSxtQkFBQTtFQ05OO0VEUUU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtFQ05OOztFRFVFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtFQ1BOO0VEUU07SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ05WO0VET1U7SUFDRyxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNMYjtFRE9VO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNMZDs7RURVRTtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUNQTjtFRFFNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7RUNOVjtFRE9VO0lBQ0csaUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDTGI7RURPVTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDTGQ7O0VEWU07SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ1RWO0VEVVU7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNSVjtFRFVVO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNSZDtFRFVVO0lBQ0ksV0FBQTtJQUFhLGdCQUFBO0lBQWlCLGVBQUE7SUFBaUIsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBaUIsa0JBQUE7SUFBb0IscUJBQUE7SUFDaEgsZ0JBQUE7SUFDQSw2QkFBQTtFQ0R0QjtFRElVO0lBT0ksb0JBQUE7RUNSZDtFREVjO0lBQ0ksZUFBQTtJQUNaLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VDQU47RURLTTtJQUNJLG9CQUFBO0VDSFY7RURLTTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ0hWO0VESVU7SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNGZDtFRElVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDRmQ7QUFDRjtBRFFBO0VBRUE7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQ1BGO0VEUUU7SUFDSSwwQkFBQTtJQUNBLGlCQUFBO0VDTk47RURRRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ05OO0VEUUU7SUFDSSxtQkFBQTtFQ05OO0VEUUU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtFQ05OOztFRFVFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtFQ1BOO0VEUU07SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ05WO0VET1U7SUFDRyxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNMYjtFRE9VO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNMZDs7RURVRTtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUNQTjtFRFFNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7RUNOVjtFRE9VO0lBQ0csaUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDTGI7RURPVTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDTGQ7O0VEWU07SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ1RWO0VEVVU7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNSVjtFRFVVO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNSZDtFRFVVO0lBQ0ksV0FBQTtJQUFhLGdCQUFBO0lBQWlCLGVBQUE7SUFBaUIsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBaUIsa0JBQUE7SUFBb0IscUJBQUE7SUFDaEgsZ0JBQUE7SUFDQSw2QkFBQTtFQ0R0QjtFRElVO0lBT0ksb0JBQUE7RUNSZDtFREVjO0lBQ0ksZUFBQTtJQUNaLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VDQU47RURLTTtJQUNJLG9CQUFBO0VDSFY7RURLTTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ0hWO0VESVU7SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNGZDtFRElVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDRmQ7QUFDRjtBRFFBO0VBRUE7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQ1BGO0VEUUU7SUFDSSwwQkFBQTtJQUNBLGlCQUFBO0VDTk47RURRRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ05OO0VEUUU7SUFDSSxtQkFBQTtFQ05OO0VEUUU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtFQ05OOztFRFVGO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtFQ1BGO0VEUUU7SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ05OO0VET007SUFDRyxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNMVDtFRE9NO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNMVjs7RURVRjtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUNQRjtFRFFFO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7RUNOTjtFRE9NO0lBQ0csaUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDTFQ7RURPTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDTFY7O0VEWUU7SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ1ROO0VEVU07SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNSTjtFRFVNO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNSVjtFRFVNO0lBQ0ksV0FBQTtJQUFhLGdCQUFBO0lBQWlCLGVBQUE7SUFBaUIsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBaUIsa0JBQUE7SUFBb0IscUJBQUE7SUFDaEgsZ0JBQUE7SUFDQSw2QkFBQTtFQ0RsQjtFRElNO0lBT0ksb0JBQUE7RUNSVjtFREVVO0lBQ0ksZUFBQTtJQUNaLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VDQUY7RURLRTtJQUNJLG9CQUFBO0VDSE47RURLRTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ0hOO0VESU07SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNGVjtFRElNO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDRlY7QUFDRjtBRFNBO0VBRUE7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQ1JGO0VEU0U7SUFDSSwwQkFBQTtJQUNBLGlCQUFBO0VDUE47RURTRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ1BOO0VEU0U7SUFDSSxtQkFBQTtFQ1BOO0VEU0U7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtFQ1BOOztFRFdFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtFQ1JOO0VEU007SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ1BWO0VEUVU7SUFDRyxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNOYjtFRFFVO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNOZDs7RURXRTtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUNSTjtFRFNNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7RUNQVjtFRFFVO0lBQ0csaUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDTmI7RURRVTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDTmQ7O0VEY007SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ1hWO0VEWVU7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNWVjtFRFlVO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNWZDtFRFlVO0lBQ0kseUJBQUE7SUFDQSxXQUFBO0lBQWEsZ0JBQUE7SUFBaUIsZUFBQTtJQUFpQixnQkFBQTtJQUFrQixnQkFBQTtJQUFrQixnQkFBQTtJQUFpQixrQkFBQTtJQUFvQixxQkFBQTtJQUNoSCxnQkFBQTtJQUNBLDZCQUFBO0VDSHRCO0VETVU7SUFPSSxvQkFBQTtFQ1ZkO0VESWM7SUFDSSxlQUFBO0lBQ1osZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7RUNGTjtFRE9NO0lBQ0ksb0JBQUE7RUNMVjtFRE9NO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDTFY7RURNVTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQ0pkO0VETVU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUNKZDtBQUNGO0FEV0E7RUFFQTtJQUNJLGFBQUE7SUFDQSxhQUFBO0VDVkY7RURXRTtJQUNJLDBCQUFBO0lBQ0EsaUJBQUE7RUNUTjtFRFdFO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VDVE47RURXRTtJQUNJLG1CQUFBO0VDVE47RURXRTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0VDVE47O0VEY0U7SUFDSSxzQkFBQTtJQUNBLGtCQUFBO0VDWE47RURZTTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0VDVlY7RURXVTtJQUNHLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ1RiO0VEV1U7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ1RkOztFRGNFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtFQ1hOO0VEWU07SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ1ZWO0VEV1U7SUFDRyxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNUYjtFRFdVO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNUZDs7RURpQk07SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQ2RWO0VEZVU7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNiVjtFRGVVO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNiZDtFRGVVO0lBQ0ksV0FBQTtJQUFhLGdCQUFBO0lBQWlCLGNBQUE7SUFBZ0IsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBaUIsa0JBQUE7SUFBb0IscUJBQUE7SUFDL0csZ0JBQUE7SUFDQSw2QkFBQTtFQ050QjtFRFNVO0lBT0ksb0JBQUE7RUNiZDtFRE9jO0lBQ0ksY0FBQTtJQUNaLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VDTE47RURVTTtJQUNJLG9CQUFBO0VDUlY7RURVTTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ1JWO0VEU1U7SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNQZDtFRFNVO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDUGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGV7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIC5idWRnZXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5idWRnZXQxe1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGNvbG9yOiAjZmZjNzA1O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICB9XG4gICAgdWx7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxufVxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXG57XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjNTA1MDU0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyXG57XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbiNzdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxue1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzUwNTA1NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cbi5zbGlkZTF7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmO1xuICAgIGhlaWdodDogMzAwcHg7ICAgIFxuICAgIC5idWRnZXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5idWRnZXQxe1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGNvbG9yOiAjZmZjNzA1O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbn1cblxuLnNsaWRlNHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmltZ3tcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgfVxuICAgIC5udW1iZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIH1cbn1cblxuLnNsaWRlNXtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuc2xpZGUtY29uY2VwdHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zbGlkZTZ7ICAgXG4gICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnNsaWRlLWNvbmNlcHQxe1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG4uc2xpZGU3e1xuICAgIC8vIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zbGlkZS1jb25jZXB0MXtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgLnB0YWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiA3NDBweDtmb250LXNpemU6IDEzcHg7IG1heC1oZWlnaHQ6IDkwcHg7IG92ZXJmbG93OiBoaWRkZW47IHBhZGRpbmctdG9wOiAwcHg7cGFkZGluZy1sZWZ0OiAxMHB4OyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIC5kZWQtZGVkLWxlZnR7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIC5kZWQtZGVkLXJpZ2h0e1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmRlZC1wcm9jZXNze1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAyNzBweDtcbiAgICAgICAgYm90dG9tOiA1MHB4IDtcbiAgICAgICAgbGVmdDogODAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnNsaWRlOCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5udW1iZXJ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmltZ3tcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDE0MDBweDtcbiAgICAgICAgfVxuICAgIH1cbiBcbn1cbi5zbGlkZTl7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbiAgICAucHVycG9zZXtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgaDR7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxODAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgIHVse1xuICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgICB9XG4gICAgLmJsb2NrLW90aGVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmOyAgICAgICAgXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1ZGdldHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ1ZGdldHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHghaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uYnVkZ2V0MXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2Fyb3VzZWx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNDUwcHg7XG59XG4uc2xpZGUxMHtcbiAgICAuc2xpZGUtY29udGVudHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoNHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBoM3tcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgICAgIFxuLnNsaWRlMXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7ICBcbiAgICAuYnVkZ2V0e1xuICAgICAgICBmb250LXNpemU6IDE0cHggICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYnVkZ2V0MXtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgbGl7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIGg0e1xuICAgICAgICBjb2xvcjogI2ZmYzcwNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbn1cbiAgICAuc2xpZGU1e1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5zbGlkZS1jb25jZXB0e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2xpZGU2eyAgIFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5zbGlkZS1jb25jZXB0MXtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNsaWRlN3tcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2xpZGUtY29uY2VwdDF7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHRhZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiA3NDBweDtmb250LXNpemU6IDEwcHg7IG1heC1oZWlnaHQ6IDkwcHg7IG92ZXJmbG93OiBoaWRkZW47IHBhZGRpbmctdG9wOiAwcHg7cGFkZGluZy1sZWZ0OiAxMHB4OyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIC5kZWQtZGVkLWxlZnR7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGVkLWRlZC1yaWdodHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWQtcHJvY2Vzc3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgICAgICBib3R0b206IDUwcHggO1xuICAgICAgICAgICAgbGVmdDogODAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBcbn1cblxuICAgIFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICBcbi5zbGlkZTF7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDE3MHB4OyAgXG4gICAgLmJ1ZGdldHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1ZGdldDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgY29sb3I6ICNmZmM3MDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgXG59XG4gICAgLnNsaWRlNXtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2xpZGUtY29uY2VwdHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNsaWRlNnsgICBcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2xpZGUtY29uY2VwdDF7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zbGlkZTd7XG4gICAgICAgIC8vIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnNsaWRlLWNvbmNlcHQxe1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnB0YWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNzQwcHg7Zm9udC1zaXplOiAxMHB4OyBtYXgtaGVpZ2h0OiA5MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwYWRkaW5nLXRvcDogMHB4O3BhZGRpbmctbGVmdDogMTBweDsgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICAuZGVkLWRlZC1sZWZ0e1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRlZC1kZWQtcmlnaHR7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGVkLXByb2Nlc3N7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgYm90dG9tOiA1MHB4IDtcbiAgICAgICAgICAgIGxlZnQ6IDgwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIFxuLnNsaWRlMXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogMTcwcHg7ICBcbiAgICAuYnVkZ2V0e1xuICAgICAgICBmb250LXNpemU6IDEzcHggICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYnVkZ2V0MXtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgbGl7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIGg0e1xuICAgICAgICBjb2xvcjogI2ZmYzcwNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbn1cbi5zbGlkZTV7XG4gICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnNsaWRlLWNvbmNlcHR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zbGlkZTZ7ICAgXG4gICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnNsaWRlLWNvbmNlcHQxe1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuLnNsaWRlN3tcbiAgICAvLyB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuc2xpZGUtY29uY2VwdDF7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC5uYW1le1xuICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIC5wdGFne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNzQwcHg7Zm9udC1zaXplOiAxMHB4OyBtYXgtaGVpZ2h0OiA5MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwYWRkaW5nLXRvcDogMHB4O3BhZGRpbmctbGVmdDogMTBweDsgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgLmRlZC1kZWQtbGVmdHtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgLmRlZC1kZWQtcmlnaHR7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuZGVkLXByb2Nlc3N7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICBib3R0b206IDUwcHggO1xuICAgICAgICBsZWZ0OiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAubGVmdHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4gICBcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICBcbi5zbGlkZTF7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4OyAgXG4gICAgLmJ1ZGdldHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1ZGdldDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgY29sb3I6ICNmZmM3MDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgXG59XG4gICAgLnNsaWRlNXtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2xpZGUtY29uY2VwdHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNsaWRlNnsgICBcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2xpZGUtY29uY2VwdDF7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVye1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICAgICAgXG4gICAgLnNsaWRlN3tcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuc2xpZGUtY29uY2VwdDF7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHRhZ3tcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDc0MHB4O2ZvbnQtc2l6ZTogMTBweDsgbWF4LWhlaWdodDogOTBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgcGFkZGluZy10b3A6IDBweDtwYWRkaW5nLWxlZnQ6IDEwcHg7IHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgLmRlZC1kZWQtbGVmdHtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kZWQtZGVkLXJpZ2h0e1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZC1wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiA4MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgXG4uc2xpZGUxe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDsgIFxuICAgIC5idWRnZXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1ZGdldDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGxpe1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgY29sb3I6ICNmZmM3MDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgXG59XG5cbiAgICAuc2xpZGU1e1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5zbGlkZS1jb25jZXB0e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2xpZGU2eyAgIFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5zbGlkZS1jb25jZXB0MXtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuICAgIC5zbGlkZTd7XG4gICAgICAgIC8vIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnNsaWRlLWNvbmNlcHQxe1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnB0YWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNzQwcHg7Zm9udC1zaXplOiA3cHg7IG1heC1oZWlnaHQ6IDkwcHg7IG92ZXJmbG93OiBoaWRkZW47IHBhZGRpbmctdG9wOiAwcHg7cGFkZGluZy1sZWZ0OiAxMHB4OyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIC5kZWQtZGVkLWxlZnR7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kZWQtZGVkLXJpZ2h0e1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZC1wcm9jZXNze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweCA7XG4gICAgICAgICAgICBsZWZ0OiA4MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnNsaWRlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4uc2xpZGUgLmJ1ZGdldCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2xpZGUgLmJ1ZGdldDEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNsaWRlIGxpIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy1yaWdodDogMTNweDtcbn1cbi5zbGlkZSBoNCB7XG4gIGNvbG9yOiAjZmZjNzA1O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWluLWhlaWdodDogODBweDtcbn1cbi5zbGlkZSB1bCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbiNzdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjNTA1MDU0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4jc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4jc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzUwNTA1NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbn1cblxuLnNsaWRlMSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG4uc2xpZGUxIC5idWRnZXQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNsaWRlMSAuYnVkZ2V0MSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2xpZGUxIGxpIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbGlkZTEgaDQge1xuICBjb2xvcjogI2ZmYzcwNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGU0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlNCAuaW1nIGltZyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG59XG4uc2xpZGU0IC5uYW1lIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM1MDUwNTQ7XG59XG4uc2xpZGU0IC5udW1iZXIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjNTA1MDU0O1xufVxuXG4uc2xpZGU1IHtcbiAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlNSAuc2xpZGUtY29uY2VwdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2xpZGU1IC5zbGlkZS1jb25jZXB0IC5uYW1lIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG59XG4uc2xpZGU1IC5zbGlkZS1jb25jZXB0IC5udW1iZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICB3aWR0aDogNDVweDtcbiAgbGVmdDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbGlkZTYge1xuICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGU2IC5zbGlkZS1jb25jZXB0MSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2xpZGU2IC5zbGlkZS1jb25jZXB0MSAubmFtZSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufVxuLnNsaWRlNiAuc2xpZGUtY29uY2VwdDEgLm51bWJlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gIHdpZHRoOiA0NXB4O1xuICBsZWZ0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEgLm5hbWUge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIC5udW1iZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICB3aWR0aDogNDVweDtcbiAgbGVmdDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2xpZGU3IC5zbGlkZS1jb25jZXB0MSAucHRhZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc0MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1heC1oZWlnaHQ6IDkwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNsaWRlNyAuZGVkLWRlZC1sZWZ0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uc2xpZGU3IC5kZWQtZGVkLWxlZnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2xpZGU3IC5kZWQtZGVkLXJpZ2h0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uc2xpZGU3IC5kZWQtcHJvY2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDI3MHB4O1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDgwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uc2xpZGU3IC5kZWQtcHJvY2VzcyAubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zbGlkZTcgLmRlZC1wcm9jZXNzIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zbGlkZTgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGU4IC5udW1iZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICB3aWR0aDogNDVweDtcbiAgbGVmdDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2xpZGU4IC5pbWcge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cbi5zbGlkZTkge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc2xpZGU5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnNsaWRlOSAucHVycG9zZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2xpZGU5IC5wdXJwb3NlIGg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNsaWRlOSAucHVycG9zZSBwIHtcbiAgbGluZS1oZWlnaHQ6IDE4MCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2xpZGU5IC5wdXJwb3NlIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnNsaWRlOSAucHVycG9zZSB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2xpZGU5IC5ibG9jay1vdGhlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2xpZGU5IC5ibG9jay1vdGhlciBoMyB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uc2xpZGU5IC5ibG9jay1vdGhlciAuYnVkZ2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzZweCAhaW1wb3J0YW50O1xufVxuXG4uYnVkZ2V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5idWRnZXQxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2Fyb3VzZWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNDUwcHg7XG59XG5cbi5zbGlkZTEwIC5zbGlkZS1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zbGlkZTEwIC5zbGlkZS1jb250ZW50IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNsaWRlMTAgLnNsaWRlLWNvbnRlbnQgaDQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGlkZTEwIC5zbGlkZS1jb250ZW50IGgzIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgLnNsaWRlMSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIC5zbGlkZTEgLmJ1ZGdldCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNsaWRlMSAuYnVkZ2V0MSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zbGlkZTEgbGkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgLnNsaWRlMSBoNCB7XG4gICAgY29sb3I6ICNmZmM3MDU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2xpZGU1IHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIH1cbiAgLnNsaWRlNSAuc2xpZGUtY29uY2VwdCAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5zbGlkZTYge1xuICAgIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU2IC5zbGlkZS1jb25jZXB0MSAubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIC5udW1iZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgbGVmdDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuc2xpZGU3IC5zbGlkZS1jb25jZXB0MSAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEgLnB0YWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2xpZGU3IC5kZWQtZGVkLWxlZnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1kZWQtbGVmdCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zbGlkZTcgLmRlZC1kZWQtcmlnaHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1wcm9jZXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIGxlZnQ6IDgwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5zbGlkZTcgLmRlZC1wcm9jZXNzIC5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuc2xpZGU3IC5kZWQtcHJvY2VzcyAucmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5zbGlkZTEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxuICAuc2xpZGUxIC5idWRnZXQge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zbGlkZTEgLmJ1ZGdldDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuc2xpZGUxIGxpIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG4gIC5zbGlkZTEgaDQge1xuICAgIGNvbG9yOiAjZmZjNzA1O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNsaWRlNSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNsaWRlNSAuc2xpZGUtY29uY2VwdCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNsaWRlNSAuc2xpZGUtY29uY2VwdCAubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB9XG4gIC5zbGlkZTUgLnNsaWRlLWNvbmNlcHQgLm51bWJlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuc2xpZGU2IHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2xpZGU2IC5zbGlkZS1jb25jZXB0MSB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNsaWRlNiAuc2xpZGUtY29uY2VwdDEgLm5hbWUge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgfVxuICAuc2xpZGU2IC5zbGlkZS1jb25jZXB0MSAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU3IC5zbGlkZS1jb25jZXB0MSAubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEgLm51bWJlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgbGVmdDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIC5wdGFnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA5MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLWRlZC1sZWZ0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuc2xpZGU3IC5kZWQtZGVkLWxlZnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU3IC5kZWQtZGVkLXJpZ2h0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuc2xpZGU3IC5kZWQtcHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBsZWZ0OiA4MDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuc2xpZGU3IC5kZWQtcHJvY2VzcyAubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLXByb2Nlc3MgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuc2xpZGUxIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cbiAgLnNsaWRlMSAuYnVkZ2V0IHtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuc2xpZGUxIC5idWRnZXQxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNsaWRlMSBsaSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAuc2xpZGUxIGg0IHtcbiAgICBjb2xvcjogI2ZmYzcwNTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zbGlkZTUge1xuICAgIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbGlkZTUgLnNsaWRlLWNvbmNlcHQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zbGlkZTUgLnNsaWRlLWNvbmNlcHQgLm5hbWUge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IC5udW1iZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgbGVmdDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnNsaWRlNiB7XG4gICAgdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNsaWRlNiAuc2xpZGUtY29uY2VwdDEge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIH1cbiAgLnNsaWRlNiAuc2xpZGUtY29uY2VwdDEgLm51bWJlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuc2xpZGU3IC5zbGlkZS1jb25jZXB0MSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEgLm5hbWUge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIC5udW1iZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuc2xpZGU3IC5zbGlkZS1jb25jZXB0MSAucHRhZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1kZWQtbGVmdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLWRlZC1sZWZ0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLWRlZC1yaWdodCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLXByb2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogODAwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLXByb2Nlc3MgLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1wcm9jZXNzIC5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnNsaWRlMSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG4gIC5zbGlkZTEgLmJ1ZGdldCB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNsaWRlMSAuYnVkZ2V0MSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zbGlkZTEgbGkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgLnNsaWRlMSBoNCB7XG4gICAgY29sb3I6ICNmZmM3MDU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2xpZGU1IHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIH1cbiAgLnNsaWRlNSAuc2xpZGUtY29uY2VwdCAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5zbGlkZTYge1xuICAgIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU2IC5zbGlkZS1jb25jZXB0MSAubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIC5udW1iZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgbGVmdDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuc2xpZGU3IC5zbGlkZS1jb25jZXB0MSAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEgLnB0YWcge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1kZWQtbGVmdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLWRlZC1sZWZ0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLWRlZC1yaWdodCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLXByb2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogODAwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLXByb2Nlc3MgLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1wcm9jZXNzIC5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNsaWRlMSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC5zbGlkZTEgLmJ1ZGdldCB7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNsaWRlMSAuYnVkZ2V0MSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zbGlkZTEgbGkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgLnNsaWRlMSBoNCB7XG4gICAgY29sb3I6ICNmZmM3MDU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2xpZGU1IHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU1IC5zbGlkZS1jb25jZXB0IC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIH1cbiAgLnNsaWRlNSAuc2xpZGUtY29uY2VwdCAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiZTI1O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5zbGlkZTYge1xuICAgIHRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU2IC5zbGlkZS1jb25jZXB0MSAubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICB9XG4gIC5zbGlkZTYgLnNsaWRlLWNvbmNlcHQxIC5udW1iZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGJlMjU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgbGVmdDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zbGlkZTcgLnNsaWRlLWNvbmNlcHQxIC5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuc2xpZGU3IC5zbGlkZS1jb25jZXB0MSAubnVtYmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmUyNTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnNsaWRlNyAuc2xpZGUtY29uY2VwdDEgLnB0YWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gICAgbWF4LWhlaWdodDogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zbGlkZTcgLmRlZC1kZWQtbGVmdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLWRlZC1sZWZ0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc2xpZGU3IC5kZWQtZGVkLXJpZ2h0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuc2xpZGU3IC5kZWQtcHJvY2VzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJvdHRvbTogNTBweDtcbiAgICBsZWZ0OiA4MDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAuc2xpZGU3IC5kZWQtcHJvY2VzcyAubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLnNsaWRlNyAuZGVkLXByb2Nlc3MgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'module-carousel',
          templateUrl: './carousel.component.html',
          styleUrls: ['./carousel.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        slideData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideData1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/carousel/ng-carousel.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/carousel/ng-carousel.module.ts ***!
    \********************************************************/

  /*! exports provided: NgCarouselModule */

  /***/
  function _src_app_modules_carousel_ngCarouselModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCarouselModule", function () {
      return NgCarouselModule;
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


    var _carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./carousel.component */
    "./src/app/modules/carousel/carousel.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts");

    var NgCarouselModule = /*#__PURE__*/_createClass(function NgCarouselModule() {
      _classCallCheck(this, NgCarouselModule);
    });

    NgCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgCarouselModule
    });
    NgCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgCarouselModule_Factory(t) {
        return new (t || NgCarouselModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgCarouselModule, {
        declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"]],
        exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["IconsModule"]],
          exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~concept-concept-module~coviddemo-coviddemo-module~debit-concept-debit-concept-module~debt-de~e34b115a-es5.js.map