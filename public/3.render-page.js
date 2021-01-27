exports.ids = [3];
exports.modules = {

/***/ "./node_modules/mirador/dist/es/src/components/GalleryView.js":
/*!********************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/components/GalleryView.js ***!
  \********************************************************************/
/*! exports provided: GalleryView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryView", function() { return GalleryView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _containers_GalleryViewThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/GalleryViewThumbnail */ "./node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Renders a GalleryView overview of the manifest.
 */

var GalleryView = /*#__PURE__*/function (_Component) {
  _inherits(GalleryView, _Component);

  var _super = _createSuper(GalleryView);

  function GalleryView() {
    _classCallCheck(this, GalleryView);

    return _super.apply(this, arguments);
  }

  _createClass(GalleryView, [{
    key: "render",

    /**
     * Renders things
     */
    value: function render() {
      var _this$props = this.props,
          canvases = _this$props.canvases,
          classes = _this$props.classes,
          viewingDirection = _this$props.viewingDirection,
          windowId = _this$props.windowId;
      var htmlDir = viewingDirection === 'right-to-left' ? 'rtl' : 'ltr';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        component: "section",
        dir: htmlDir,
        square: true,
        elevation: 0,
        className: classes.galleryContainer,
        id: "".concat(windowId, "-gallery")
      }, canvases.map(function (canvas) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_GalleryViewThumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: canvas.id,
          windowId: windowId,
          canvas: canvas
        });
      }));
    }
  }]);

  return GalleryView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
GalleryView.defaultProps = {
  classes: {},
  viewingDirection: ''
};

/***/ }),

/***/ "./node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js ***!
  \*****************************************************************************/
/*! exports provided: GalleryViewThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryViewThumbnail", function() { return GalleryViewThumbnail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_icons_CommentSharp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CommentSharp */ "./node_modules/@material-ui/icons/CommentSharp.js");
/* harmony import */ var _material_ui_icons_CommentSharp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CommentSharp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_SearchSharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/SearchSharp */ "./node_modules/@material-ui/icons/SearchSharp.js");
/* harmony import */ var _material_ui_icons_SearchSharp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchSharp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @researchgate/react-intersection-observer */ "./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
/* harmony import */ var _lib_MiradorCanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/MiradorCanvas */ "./node_modules/mirador/dist/es/src/lib/MiradorCanvas.js");
/* harmony import */ var _containers_IIIFThumbnail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/IIIFThumbnail */ "./node_modules/mirador/dist/es/src/containers/IIIFThumbnail.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







 // polyfill needed for Safari




/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */

var GalleryViewThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(GalleryViewThumbnail, _Component);

  var _super = _createSuper(GalleryViewThumbnail);

  /** */
  function GalleryViewThumbnail(props) {
    var _this;

    _classCallCheck(this, GalleryViewThumbnail);

    _this = _super.call(this, props);
    _this.state = {
      requestedAnnotations: false
    };
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleKey = _this.handleKey.bind(_assertThisInitialized(_this));
    _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** @private */


  _createClass(GalleryViewThumbnail, [{
    key: "handleSelect",
    value: function handleSelect() {
      var _this$props = this.props,
          canvas = _this$props.canvas,
          selected = _this$props.selected,
          setCanvas = _this$props.setCanvas,
          focusOnCanvas = _this$props.focusOnCanvas;

      if (selected) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }
    /** @private */

  }, {
    key: "handleKey",
    value: function handleKey(event) {
      var _this$props2 = this.props,
          canvas = _this$props2.canvas,
          setCanvas = _this$props2.setCanvas,
          focusOnCanvas = _this$props2.focusOnCanvas;
      this.keys = {
        enter: 'Enter',
        space: ' '
      };
      this.chars = {
        enter: 13,
        space: 32
      };
      var enterOrSpace = event.key === this.keys.enter || event.which === this.chars.enter || event.key === this.keys.space || event.which === this.chars.space;

      if (enterOrSpace) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.index, canvas.id);
      }
    }
    /** */

  }, {
    key: "handleIntersection",
    value: function handleIntersection(_ref) {
      var isIntersecting = _ref.isIntersecting;
      var _this$props3 = this.props,
          annotationsCount = _this$props3.annotationsCount,
          requestCanvasAnnotations = _this$props3.requestCanvasAnnotations;
      var requestedAnnotations = this.state.requestedAnnotations;
      if (!isIntersecting || annotationsCount === undefined || annotationsCount > 0 || requestedAnnotations) return;
      this.setState({
        requestedAnnotations: true
      });
      requestCanvasAnnotations();
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          annotationsCount = _this$props4.annotationsCount,
          searchAnnotationsCount = _this$props4.searchAnnotationsCount,
          canvas = _this$props4.canvas,
          classes = _this$props4.classes,
          config = _this$props4.config,
          selected = _this$props4.selected;
      var miradorCanvas = new _lib_MiradorCanvas__WEBPACK_IMPORTED_MODULE_8__["default"](canvas);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onChange: this.handleIntersection
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: canvas.index,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.galleryViewItem, selected ? classes.selected : '', searchAnnotationsCount > 0 ? classes.hasAnnotations : ''),
        onClick: this.handleSelect,
        onKeyUp: this.handleKey,
        role: "button",
        tabIndex: 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_IIIFThumbnail__WEBPACK_IMPORTED_MODULE_9__["default"], {
        resource: canvas,
        labelled: true,
        variant: "outside",
        maxWidth: config.width,
        maxHeight: config.height,
        style: {
          margin: '0 auto',
          maxWidth: "".concat(Math.ceil(config.height * miradorCanvas.aspectRatio), "px")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.chips
      }, searchAnnotationsCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: classes.avatar,
          classes: {
            circle: classes.avatarIcon
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SearchSharp__WEBPACK_IMPORTED_MODULE_4___default.a, {
          fontSize: "small"
        })),
        label: searchAnnotationsCount,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.searchChip),
        size: "small"
      }), (annotationsCount || 0) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: classes.avatar,
          classes: {
            circle: classes.avatarIcon
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CommentSharp__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: classes.annotationIcon
        })),
        label: annotationsCount,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.annotationsChip),
        size: "small"
      })))));
    }
  }]);

  return GalleryViewThumbnail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
GalleryViewThumbnail.defaultProps = {
  annotationsCount: undefined,
  config: {
    height: 100,
    width: null
  },
  requestCanvasAnnotations: function requestCanvasAnnotations() {},
  searchAnnotationsCount: 0,
  selected: false
};

/***/ }),

/***/ "./node_modules/mirador/dist/es/src/containers/GalleryView.js":
/*!********************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/containers/GalleryView.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _extend_withPlugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extend/withPlugins */ "./node_modules/mirador/dist/es/src/extend/withPlugins.js");
/* harmony import */ var _components_GalleryView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GalleryView */ "./node_modules/mirador/dist/es/src/components/GalleryView.js");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/selectors */ "./node_modules/mirador/dist/es/src/state/selectors/index.js");






/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvases: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_5__["getCanvases"])(state, {
      windowId: windowId
    }),
    viewingDirection: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_5__["getSequenceViewingDirection"])(state, {
      windowId: windowId
    })
  };
};
/**
 * Styles to be passed to the withStyles HOC
 */


var styles = function styles(theme) {
  return {
    galleryContainer: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowX: 'hidden',
      overflowY: 'scroll',
      padding: '50px 0 50px 20px',
      width: '100%'
    }
  };
};

var enhance = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps), Object(_extend_withPlugins__WEBPACK_IMPORTED_MODULE_3__["withPlugins"])('GalleryView') // further HOC go here
);
/* harmony default export */ __webpack_exports__["default"] = (enhance(_components_GalleryView__WEBPACK_IMPORTED_MODULE_4__["GalleryView"]));

/***/ }),

/***/ "./node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatten */ "lodash/flatten");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/actions */ "./node_modules/mirador/dist/es/src/state/actions/index.js");
/* harmony import */ var _components_GalleryViewThumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GalleryViewThumbnail */ "./node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/selectors */ "./node_modules/mirador/dist/es/src/state/selectors/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Styles to be passed to the withStyles HOC
 */

var styles = function styles(theme) {
  return {
    annotationIcon: {
      height: '1rem',
      width: '1rem'
    },
    annotationsChip: _objectSpread({}, theme.typography.caption),
    avatar: {
      backgroundColor: 'transparent'
    },
    chips: {
      opacity: 0.875,
      position: 'absolute',
      right: 0,
      textAlign: 'right',
      top: 0
    },
    galleryViewItem: {
      '&$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.action.selected)
      },
      '&$selected,&$selected$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.primary.main)
      },
      '&:focus': {
        outline: 'none'
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      border: '2px solid transparent',
      cursor: 'pointer',
      display: 'inline-block',
      margin: "".concat(theme.spacing(1), "px ").concat(theme.spacing(0.5), "px"),
      maxHeight: function maxHeight(props) {
        return props.config.height + 45;
      },
      minWidth: '60px',
      overflow: 'hidden',
      padding: theme.spacing(0.5),
      position: 'relative',
      width: 'min-content'
    },
    hasAnnotations: {},
    searchChip: _objectSpread(_objectSpread({}, theme.typography.caption), {}, {
      '&$selected $avatar': {
        backgroundColor: theme.palette.highlights.primary
      },
      marginTop: 2
    }),
    selected: {}
  };
};
/** */


var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvas = _ref.canvas,
      windowId = _ref.windowId;
  var currentCanvas = Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getCurrentCanvas"])(state, {
    windowId: windowId
  });
  var searchAnnotations = Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getSearchAnnotationsForWindow"])(state, {
    windowId: windowId
  });
  var canvasAnnotations = lodash_flatten__WEBPACK_IMPORTED_MODULE_2___default()(searchAnnotations.map(function (a) {
    return a.resources;
  })).filter(function (a) {
    return a.targetId === canvas.id;
  });
  var hasOpenAnnotationsWindow = Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompanionWindowsForContent"])(state, {
    content: 'annotations',
    windowId: windowId
  }).length > 0;
  return {
    annotationsCount: function () {
      if (!hasOpenAnnotationsWindow) return undefined;
      var annotations = Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getPresentAnnotationsOnSelectedCanvases"])(state, {
        canvasId: canvas.id
      });
      return annotations.reduce(function (v, a) {
        return v + a.resources.filter(function (r) {
          return r.targetId === canvas.id;
        }).length;
      }, 0);
    }(),
    config: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getConfig"])(state).galleryView,
    searchAnnotationsCount: canvasAnnotations.length,
    selected: currentCanvas && currentCanvas.id === canvas.id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var canvas = _ref2.canvas,
      id = _ref2.id,
      windowId = _ref2.windowId;
  return {
    focusOnCanvas: function focusOnCanvas() {
      return dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__["setWindowViewType"](windowId, 'single'));
    },
    requestCanvasAnnotations: function requestCanvasAnnotations() {
      return dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__["requestCanvasAnnotations"](windowId, canvas.id));
    },
    setCanvas: function setCanvas() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__["setCanvas"].apply(_state_actions__WEBPACK_IMPORTED_MODULE_4__, [windowId].concat(args)));
    }
  };
};

var enhance = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps), Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles) // further HOC go here
);
/* harmony default export */ __webpack_exports__["default"] = (enhance(_components_GalleryViewThumbnail__WEBPACK_IMPORTED_MODULE_5__["GalleryViewThumbnail"]));

/***/ })

};;
//# sourceMappingURL=3.render-page.js.map