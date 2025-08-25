function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orlogo-orlogo-module~ulsiintusuv-ulsiintusuv-module~zarlag-zarlag-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
    \***************************************************************************/

  /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

  /***/
  function _node_modules_Angular_material___ivy_ngcc___fesm2015_gridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
      return TileCoordinator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["*"];
    var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
    var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * Base interface for a `MatGridList`.
     * \@docs-private
     * @record
     */

    function MatGridListBase() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-tile.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridTile = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      return _createClass(MatGridTile, [{
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setStyle",
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }]);
    }();

    MatGridTile.ɵfac = function MatGridTile_Factory(t) {
      return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
    };

    MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTile,
      selectors: [["mat-grid-tile"]],
      hostAttrs: [1, "mat-grid-tile"],
      hostVars: 2,
      hostBindings: function MatGridTile_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
        }
      },
      inputs: {
        rowspan: "rowspan",
        colspan: "colspan"
      },
      exportAs: ["matGridTile"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-figure"]],
      template: function MatGridTile_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile',
          exportAs: 'matGridTile',
          host: {
            'class': 'mat-grid-tile',
            // Ensures that the "rowspan" and "colspan" input value is reflected in
            // the DOM. This is needed for the grid-tile harness.
            '[attr.rowspan]': 'rowspan',
            '[attr.colspan]': 'colspan'
          },
          template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      }, {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatGridTileText = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      return _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);
    }();

    MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
      return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTileText,
      selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
      contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-grid-list-text"]],
      template: function MatGridTileText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile-header, mat-grid-tile-footer',
          template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridAvatarCssMatStyler = /*#__PURE__*/_createClass(function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    });

    MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
      return new (t || MatGridAvatarCssMatStyler)();
    };

    MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridAvatarCssMatStyler,
      selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
      hostAttrs: [1, "mat-grid-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-grid-avatar], [matGridAvatar]',
          host: {
            'class': 'mat-grid-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileHeaderCssMatStyler = /*#__PURE__*/_createClass(function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    });

    MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
      return new (t || MatGridTileHeaderCssMatStyler)();
    };

    MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileHeaderCssMatStyler,
      selectors: [["mat-grid-tile-header"]],
      hostAttrs: [1, "mat-grid-tile-header"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-header',
          host: {
            'class': 'mat-grid-tile-header'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileFooterCssMatStyler = /*#__PURE__*/_createClass(function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    });

    MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
      return new (t || MatGridTileFooterCssMatStyler)();
    };

    MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileFooterCssMatStyler,
      selectors: [["mat-grid-tile-footer"]],
      hostAttrs: [1, "mat-grid-tile-footer"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-footer',
          host: {
            'class': 'mat-grid-tile-footer'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-coordinator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface describing a tile.
     * \@docs-private
     * @record
     */


    function Tile() {}

    if (false) {}
    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */


    var TileCoordinator = /*#__PURE__*/function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      return _createClass(TileCoordinator, [{
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles Tiles to be positioned.
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(numColumns, tiles) {
          var _this = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }]);
    }();

    if (false) {}
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition = /*#__PURE__*/_createClass(
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-styler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler = /*#__PURE__*/function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      return _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);
    }();

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this2;

        _classCallCheck(this, FixedTileStyler);

        _this2 = _callSuper(this, FixedTileStyler);
        _this2.fixedRowHeight = fixedRowHeight;
        return _this2;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _inherits(FixedTileStyler, _TileStyler);

      return _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _superPropGet(FixedTileStyler, "init", this, 3)([gutterSize, tracker, cols, direction]);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this3;

        _classCallCheck(this, RatioTileStyler);

        _this3 = _callSuper(this, RatioTileStyler);

        _this3._parseRatio(value);

        return _this3;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _inherits(RatioTileStyler, _TileStyler2);

      return _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _callSuper(this, FitTileStyler, arguments);
      }

      _inherits(FitTileStyler, _TileStyler3);

      return _createClass(FitTileStyler, [{
        key: "setRowStyles",
        value:
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      return _createClass(MatGridList, [{
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this4 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this4;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this4._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }]);
    }();

    MatGridList.ɵfac = function MatGridList_Factory(t) {
      return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridList,
      selectors: [["mat-grid-list"]],
      contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
        }
      },
      hostAttrs: [1, "mat-grid-list"],
      hostVars: 1,
      hostBindings: function MatGridList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
        }
      },
      inputs: {
        cols: "cols",
        gutterSize: "gutterSize",
        rowHeight: "rowHeight"
      },
      exportAs: ["matGridList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function MatGridList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-list',
          exportAs: 'matGridList',
          template: "<div>\n  <ng-content></ng-content>\n</div>",
          host: {
            'class': 'mat-grid-list',
            // Ensures that the "cols" input value is reflected in the DOM. This is
            // needed for the grid-list harness.
            '[attr.cols]': 'cols'
          },
          providers: [{
            provide: MAT_GRID_LIST,
            useExisting: MatGridList
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridListModule = /*#__PURE__*/_createClass(function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    });

    MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatGridListModule
    });
    MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatGridListModule_Factory(t) {
        return new (t || MatGridListModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
        declarations: function declarations() {
          return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
          declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=grid-list.js.map

    /***/

  },

  /***/
  "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.component.ts ***!
    \**************************************************************************/

  /*! exports provided: UlsiintusuvchartsComponent */

  /***/
  function _src_app_modules_ulsiintusuvcharts_ulsiintusuvchartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UlsiintusuvchartsComponent", function () {
      return UlsiintusuvchartsComponent;
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

    var _c0 = ["chart"];

    function UlsiintusuvchartsComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UlsiintusuvchartsComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UlsiintusuvchartsComponent_div_0_div_12_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0413\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0442\u044D\u0440\u0431\u0443\u043C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("display: inline-block; color:", ctx_r4.colors[0], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.percent, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color:", ctx_r4.colors[0], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx_r4.prefValue));
      }
    }

    function UlsiintusuvchartsComponent_div_0_div_12_div_2_i_feather_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 12);
      }
    }

    function UlsiintusuvchartsComponent_div_0_div_12_div_2_i_feather_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 13);
      }
    }

    function UlsiintusuvchartsComponent_div_0_div_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u04E8\u043C\u043D\u04E9\u0445 \u043E\u043D\u043E\u043E\u0441 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UlsiintusuvchartsComponent_div_0_div_12_div_2_i_feather_4_Template, 1, 0, "i-feather", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UlsiintusuvchartsComponent_div_0_div_12_div_2_i_feather_5_Template, 1, 0, "i-feather", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("display: inline-block; color:", ctx_r5.colors[0], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.befPercent, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.params["category"] != "APPROVED" && ctx_r5.befPercent < 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.params["category"] != "APPROVED" && ctx_r5.befPercent >= 0);
      }
    }

    function UlsiintusuvchartsComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UlsiintusuvchartsComponent_div_0_div_12_ng_container_1_Template, 9, 10, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UlsiintusuvchartsComponent_div_0_div_12_div_2_Template, 7, 6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.params["category"] == "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.params["category"] != "APPROVED");
      }
    }

    function UlsiintusuvchartsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UlsiintusuvchartsComponent_div_0_div_3_Template, 2, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UlsiintusuvchartsComponent_div_0_div_4_Template, 2, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0442\u044D\u0440\u0431\u0443\u043C \u0442\u04E9\u0433\u0440\u04E9\u0433");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UlsiintusuvchartsComponent_div_0_div_12_Template, 3, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("text-align:center; width: ", ctx_r0.width, "px;");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("labels", ctx_r0.chartOptions.labels)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("title", ctx_r0.chartOptions.title)("legend", ctx_r0.chartOptions.legend)("plotOptions", ctx_r0.chartOptions.plotOptions)("colors", ctx_r0.chartOptions.colors)("stroke", ctx_r0.chartOptions.stroke)("dataLabels", ctx_r0.chartOptions.dataLabels)("tooltip", ctx_r0.chartOptions.tooltip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isOrlogo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isZarlaga);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color:", ctx_r0.colors[0], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 22, ctx_r0.sum));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.prefValue != null);
      }
    }

    var UlsiintusuvchartsComponent = /*#__PURE__*/function () {
      function UlsiintusuvchartsComponent(mainService, router) {
        var _this5 = this;

        _classCallCheck(this, UlsiintusuvchartsComponent);

        this.mainService = mainService;
        this.router = router;
        this.isDataLoaded = false;
        this.colors = [];
        this.width = 0;
        this.labelWidth = 0;
        this.fontSize = "13px";
        this.params = {
          year: src_app_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: this.mainService.type
        };
        this.onResize();
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (val.url.split('?').length > 1) {
              _this5.setQueryParam(val.url.split('?')[1]);
            }
          }
        });
      }

      return _createClass(UlsiintusuvchartsComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.legend);

          if (!this.legend) {
            this.width = 500;
          } else {
            this.width = 600;
          } // if(this.screenWidth<=1680 && this.screenWidth>1440){
          //   this.width = 450;
          // }else if( this.screenWidth<=1440 && this.screenWidth>1200){
          //   this.width = 350;
          // }else if( this.screenWidth<=1200 && this.screenWidth>1010){
          //   this.width = 300;
          // }else{
          //   this.width = 500;
          // }

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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.innerWidth = window.innerWidth;
          this.getWidth();

          var handleSelect = function handleSelect(event, chartContext, config) {
            _this6.mainService.orlogoSub(_this6.sub, config.dataPointIndex);
          };

          this.chartOptions = {
            fontFamily: "Montserrat, sans-serif",
            series: this.values,
            chart: {
              width: "100%",
              type: "donut",
              events: {
                legendClick: function legendClick(chartContext, seriesIndex, config) {},
                dataPointSelection: handleSelect
              }
            },
            dataLabels: {
              enabled: false,
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
              fontSize: this.fontSize,
              offsetX: 100
            },
            tooltip: {
              enabled: false,
              y: {
                formatter: function formatter(value, series) {
                  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                },
                title: {
                  formatter: function formatter(seriesName) {
                    return seriesName;
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
              this.width = 550;
            }
          } else if (this.screenWidth <= 1440 && this.screenWidth > 1200) {
            if (!this.legend) {
              this.width = 350;
            } else {
              this.width = 450;
            }
          } else if (this.screenWidth <= 1200 && this.screenWidth > 1010) {
            if (!this.legend) {
              this.width = 300;
            } else {
              this.width = 400;
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

    UlsiintusuvchartsComponent.ɵfac = function UlsiintusuvchartsComponent_Factory(t) {
      return new (t || UlsiintusuvchartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UlsiintusuvchartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UlsiintusuvchartsComponent,
      selectors: [["ulsiintusuv-charts"]],
      viewQuery: function UlsiintusuvchartsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      hostBindings: function UlsiintusuvchartsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function UlsiintusuvchartsComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        values: "values",
        names: "names",
        title: "title",
        sub: "sub",
        sum: "sum",
        process: "process",
        colors: "colors",
        legend: "legend",
        isZarlaga: "isZarlaga",
        isOrlogo: "isOrlogo",
        percent: "percent",
        prefValue: "prefValue",
        befPercent: "befPercent"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "pie_chart center", 3, "style", 4, "ngIf"], [1, "pie_chart", "center"], [3, "series", "labels", "chart", "xaxis", "title", "legend", "plotOptions", "colors", "stroke", "dataLabels", "tooltip"], [1, "chart_text"], [4, "ngIf"], [1, "terbum"], ["class", "process", "style", "width: 100%;", 4, "ngIf"], ["src", "../../../../assets/image/budget/main/orlogo.png", 1, "m_l"], ["src", "../../../../assets/image/budget/main/zarlaga.png", 1, "m_l"], [1, "process", 2, "width", "100%"], ["name", "arrow-down", "class", "down-icon", "style", "color: #333;", 4, "ngIf"], ["name", "arrow-up", "class", "down-icon", "style", "color: #333;", 4, "ngIf"], ["name", "arrow-down", 1, "down-icon", 2, "color", "#333"], ["name", "arrow-up", 1, "down-icon", 2, "color", "#333"]],
      template: function UlsiintusuvchartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UlsiintusuvchartsComponent_div_0_Template, 13, 24, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
      styles: [".pie_chart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pie_chart.center[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n  margin: 5px auto 0px;\n  text-align: center;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 5px;\n  width: 200px;\n  color: #505054;\n  font-weight: bold;\n}\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0px auto 0px;\n  position: relative;\n  top: -55px;\n}\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 50%;\n  background-color: #28c66f;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #28c66f;\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 80%;\n}\n.pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #28c66f;\n}\n.pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 30px;\n  border: 1px solid #999;\n  margin-top: 10px;\n  padding: 5px;\n  text-transform: none;\n}\n@media screen and (max-width: 1680px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: 5px auto 0px;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 5px;\n    width: 190px;\n    color: #505054;\n    font-weight: bold;\n    font-size: 16.5px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: relative;\n    width: 90px;\n    top: -55px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    top: -20px;\n    position: relative;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .terbum[_ngcontent-%COMP%] {\n    top: -20px;\n    position: relative;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 45px;\n    top: -20px;\n    position: relative;\n    line-height: 80%;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    top: -20px;\n    position: relative;\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: 5px auto 0px;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 5px;\n    width: 150px;\n    color: #505054;\n    font-weight: bold;\n    font-size: 12px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: relative;\n    width: 70px;\n    top: -45px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    top: -30px;\n    position: relative;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .terbum[_ngcontent-%COMP%] {\n    top: -30px;\n    position: relative;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 30px;\n    top: -30px;\n    position: relative;\n    line-height: 80%;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    top: -30px;\n    position: relative;\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .pie_chart[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .pie_chart.center[_ngcontent-%COMP%] {\n    margin: 0px auto;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%] {\n    margin: 5px auto 0px;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 5px;\n    width: 120px;\n    color: #505054;\n    font-weight: bold;\n    font-size: 11px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0px auto 0px;\n    position: relative;\n    width: 60px;\n    top: -45px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    top: -35px;\n    position: relative;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .terbum[_ngcontent-%COMP%] {\n    top: -35px;\n    position: relative;\n    display: inline-block;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 12px;\n    border-radius: 50%;\n    background-color: #28c66f;\n    color: #fff;\n    margin-bottom: 0px;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #28c66f;\n    font-weight: bold;\n    font-size: 30px;\n    top: -35px;\n    position: relative;\n    line-height: 80%;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .chart_text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #28c66f;\n  }\n  .pie_chart[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%] {\n    top: -35px;\n    position: relative;\n    display: inline-block;\n    border-radius: 30px;\n    border: 1px solid #999;\n    margin-top: 10px;\n    padding: 5px;\n    text-transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvbW9kdWxlcy91bHNpaW50dXN1dmNoYXJ0cy91bHNpaW50dXN1dmNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91bHNpaW50dXN1dmNoYXJ0cy91bHNpaW50dXN1dmNoYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGtCQUFBO0FDREo7QURFSTtFQUNJLGdCQUFBO0FDQVI7QURFSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ1o7QURrQlE7RUFDSSxxQkFBQTtBQ2hCWjtBRGtCUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDaEJaO0FEa0JRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDaEJaO0FEb0JRO0VBQ0ksY0FBQTtBQ2xCWjtBRHNCSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDcEJSO0FEeUJBO0VBQ0k7SUFDSSxrQkFBQTtFQ3RCTjtFRHVCTTtJQUNJLGdCQUFBO0VDckJWO0VEdUJNO0lBQ0ksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDckJWO0VEc0JVO0lBQ0ksY0FBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ3BCZDtFRHVCVTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0VDckJkO0VEdUJVO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUNyQmQ7RUR1QlU7SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ3JCZDtFRHVCVTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQ3JCZDtFRHVCVTtJQUNJLGNBQUE7RUNyQmQ7RUR5Qk07SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ3ZCVjtBQUNGO0FEOEtBO0VBQ0k7SUFDSSxrQkFBQTtFQzVLTjtFRDZLTTtJQUNJLGdCQUFBO0VDM0tWO0VENktNO0lBQ0ksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUMzS1Y7RUQ0S1U7SUFDSSxjQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDMUtkO0VENktVO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7RUMzS2Q7RUQ2S1U7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQzNLZDtFRDZLVTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDM0tkO0VENktVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDM0tkO0VENktVO0lBQ0ksY0FBQTtFQzNLZDtFRCtLTTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDN0tWO0FBQ0Y7QURvTEE7RUFDSTtJQUNJLGtCQUFBO0VDbExOO0VEbUxNO0lBQ0ksZ0JBQUE7RUNqTFY7RURtTE07SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ2pMVjtFRGtMVTtJQUNJLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNoTGQ7RURtTFU7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtFQ2pMZDtFRG1MVTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0VDakxkO0VEbUxVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNqTGQ7RURtTFU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUNqTGQ7RURtTFU7SUFDSSxjQUFBO0VDakxkO0VEcUxNO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7RUNuTFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWxzaWludHVzdXZjaGFydHMvdWxzaWludHVzdXZjaGFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5waWVfY2hhcnR7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5jZW50ZXJ7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgfVxuICAgIC5jaGFydF90ZXh0e1xuICAgICAgICBtYXJnaW46IDVweCBhdXRvIDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAtNTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDE0NXB4O1xuICAgICAgICAvLyBpbWd7XG4gICAgICAgIC8vICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyAgICAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xuICAgICAgICAvLyAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLy8gICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gbGVmdDogMTU1cHg7XG4gICAgICAgIC8vIHRvcDogLTE1cHg7XG4gICAgICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgICAgICAgLy8gY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwe1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBie1xuICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgLnByb2Nlc3N7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xuICAgIC5waWVfY2hhcnR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5jZW50ZXJ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydF90ZXh0e1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0byAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1NDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNi41cHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogLTU1cHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXJidW17XG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge31cblxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbi8vICAgICAucGllX2NoYXJ0e1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICYuY2VudGVye1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuY2hhcnRfdGV4dHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG8gMHB4O1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgbGVmdDogMHB4O1xuLy8gICAgICAgICAgICAgcmlnaHQ6IDBweDtcbi8vICAgICAgICAgICAgIHRvcDogNXB4O1xuLy8gICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuLy8gICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xuLy8gICAgICAgICAgICAgaW1ne1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbi8vICAgICAgICAgICAgICAgICB0b3A6IC01NXB4O1xuLy8gICAgICAgICAgICAgfVxuICAgIFxuLy8gICAgICAgICAgICAgc3Bhbntcbi8vICAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAudGVyYnVte1xuLy8gICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC5oZWxwe1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2Zjtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBoNHtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2Zjtcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4vLyAgICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwJTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGJ7XG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4vLyAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5wcm9jZXNze1xuLy8gICAgICAgICAgICAgdG9wOiAtMjBweDtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICAgICAgICB9XG4gICAgICAgIFxuLy8gICAgIH1cbi8vIH1cblxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbi8vICAgICAucGllX2NoYXJ0e1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICYuY2VudGVye1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuY2hhcnRfdGV4dHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG8gMHB4O1xuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgbGVmdDogMHB4O1xuLy8gICAgICAgICAgICAgcmlnaHQ6IDBweDtcbi8vICAgICAgICAgICAgIHRvcDogNXB4O1xuLy8gICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuLy8gICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xuLy8gICAgICAgICAgICAgaW1ne1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbi8vICAgICAgICAgICAgICAgICB0b3A6IC01NXB4O1xuLy8gICAgICAgICAgICAgfVxuICAgIFxuLy8gICAgICAgICAgICAgc3Bhbntcbi8vICAgICAgICAgICAgICAgICB0b3A6IC0yNXB4O1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAudGVyYnVte1xuLy8gICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC5oZWxwe1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2Zjtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBoNHtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2Zjtcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4vLyAgICAgICAgICAgICAgICAgdG9wOiAtMjVweDtcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwJTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGJ7XG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4vLyAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIFxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5wcm9jZXNze1xuLy8gICAgICAgICAgICAgdG9wOiAtMjVweDtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICAgICAgICB9XG4gICAgICAgIFxuLy8gICAgIH1cbi8vIH1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAucGllX2NoYXJ0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYuY2VudGVye1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRfdGV4dHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG8gMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlcmJ1bXtcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVscHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOGM2NmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBie1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzc3tcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnBpZV9jaGFydHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmLmNlbnRlcntcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0X3RleHR7XG4gICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvIDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXJidW17XG4gICAgICAgICAgICAgICAgdG9wOiAtMzVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlbHB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICB0b3A6IC0zNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnByb2Nlc3N7XG4gICAgICAgICAgICB0b3A6IC0zNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG59IiwiLnBpZV9jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waWVfY2hhcnQuY2VudGVyIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICBtYXJnaW46IDVweCBhdXRvIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTVweDtcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLmhlbHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBoNCB7XG4gIGNvbG9yOiAjMjhjNjZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogODAlO1xufVxuLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgY29sb3I6ICMyOGM2NmY7XG59XG4ucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgLnBpZV9jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5waWVfY2hhcnQuY2VudGVyIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICAgIG1hcmdpbjogNXB4IGF1dG8gMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA1cHg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTYuNXB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgdG9wOiAtNTVweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHNwYW4ge1xuICAgIHRvcDogLTIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IC50ZXJidW0ge1xuICAgIHRvcDogLTIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IC5oZWxwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGM2NmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgaDQge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICB0b3A6IC0yMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogODAlO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgYiB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gIH1cbiAgLnBpZV9jaGFydCAucHJvY2VzcyB7XG4gICAgdG9wOiAtMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5waWVfY2hhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucGllX2NoYXJ0LmNlbnRlciB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IHtcbiAgICBtYXJnaW46IDVweCBhdXRvIDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0b3A6IC00NXB4O1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgc3BhbiB7XG4gICAgdG9wOiAtMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLnRlcmJ1bSB7XG4gICAgdG9wOiAtMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQgLmhlbHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzY2ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBoNCB7XG4gICAgY29sb3I6ICMyOGM2NmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRvcDogLTMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBiIHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgfVxuICAucGllX2NoYXJ0IC5wcm9jZXNzIHtcbiAgICB0b3A6IC0zMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBpZV9jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5waWVfY2hhcnQuY2VudGVyIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5waWVfY2hhcnQgLmNoYXJ0X3RleHQge1xuICAgIG1hcmdpbjogNXB4IGF1dG8gMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHRvcDogLTQ1cHg7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCBzcGFuIHtcbiAgICB0b3A6IC0zNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAudGVyYnVtIHtcbiAgICB0b3A6IC0zNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnBpZV9jaGFydCAuY2hhcnRfdGV4dCAuaGVscCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjNjZmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGg0IHtcbiAgICBjb2xvcjogIzI4YzY2ZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdG9wOiAtMzVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGluZS1oZWlnaHQ6IDgwJTtcbiAgfVxuICAucGllX2NoYXJ0IC5jaGFydF90ZXh0IGIge1xuICAgIGNvbG9yOiAjMjhjNjZmO1xuICB9XG4gIC5waWVfY2hhcnQgLnByb2Nlc3Mge1xuICAgIHRvcDogLTM1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlsiintusuvchartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ulsiintusuv-charts',
          templateUrl: './ulsiintusuvcharts.component.html',
          styleUrls: ['./ulsiintusuvcharts.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        legend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isZarlaga: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOrlogo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        percent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prefValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        befPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["chart"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module.ts ***!
    \***********************************************************************/

  /*! exports provided: UlsiintusuvchartsModule */

  /***/
  function _src_app_modules_ulsiintusuvcharts_ulsiintusuvchartsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UlsiintusuvchartsModule", function () {
      return UlsiintusuvchartsModule;
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


    var _ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ulsiintusuvcharts.component */
    "./src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.component.ts");
    /* harmony import */


    var src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/icons/icons.module */
    "./src/app/icons/icons.module.ts"); // import { NgApexchartsModule } from 'ng-apexcharts';


    var UlsiintusuvchartsModule = /*#__PURE__*/_createClass(function UlsiintusuvchartsModule() {
      _classCallCheck(this, UlsiintusuvchartsModule);
    });

    UlsiintusuvchartsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UlsiintusuvchartsModule
    });
    UlsiintusuvchartsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UlsiintusuvchartsModule_Factory(t) {
        return new (t || UlsiintusuvchartsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UlsiintusuvchartsModule, {
        declarations: [_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvchartsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]],
        exports: [_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvchartsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlsiintusuvchartsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvchartsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_icons_icons_module__WEBPACK_IMPORTED_MODULE_3__["IconsModule"]],
          exports: [_ulsiintusuvcharts_component__WEBPACK_IMPORTED_MODULE_2__["UlsiintusuvchartsComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~orlogo-orlogo-module~ulsiintusuv-ulsiintusuv-module~zarlag-zarlag-module-es5.js.map