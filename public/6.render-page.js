exports.ids = [6];
exports.modules = {

/***/ "./node_modules/mirador/dist/es/src/components/VideoViewer.js":
/*!********************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/components/VideoViewer.js ***!
  \********************************************************************/
/*! exports provided: VideoViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoViewer", function() { return VideoViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



/** */
var VideoViewer = /*#__PURE__*/function (_Component) {
  _inherits(VideoViewer, _Component);

  var _super = _createSuper(VideoViewer);

  function VideoViewer() {
    _classCallCheck(this, VideoViewer);

    return _super.apply(this, arguments);
  }

  _createClass(VideoViewer, [{
    key: "render",

    /* eslint-disable jsx-a11y/media-has-caption */

    /** */
    value: function render() {
      var _this$props = this.props,
          captions = _this$props.captions,
          classes = _this$props.classes,
          videoResources = _this$props.videoResources;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        controls: true,
        className: classes.video
      }, videoResources.map(function (video) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: video.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
          src: video.id,
          type: video.getFormat()
        }));
      }), captions.map(function (caption) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: caption.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("track", {
          src: caption.id,
          label: caption.getLabel(),
          srcLang: caption.getProperty('language')
        }));
      })));
    }
    /* eslint-enable jsx-a11y/media-has-caption */

  }]);

  return VideoViewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
VideoViewer.defaultProps = {
  captions: [],
  videoResources: []
};

/***/ }),

/***/ "./node_modules/mirador/dist/es/src/containers/VideoViewer.js":
/*!********************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/containers/VideoViewer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _extend_withPlugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extend/withPlugins */ "./node_modules/mirador/dist/es/src/extend/withPlugins.js");
/* harmony import */ var _components_VideoViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/VideoViewer */ "./node_modules/mirador/dist/es/src/components/VideoViewer.js");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/selectors */ "./node_modules/mirador/dist/es/src/state/selectors/index.js");







/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    captions: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getVisibleCanvasCaptions"])(state, {
      windowId: windowId
    }) || [],
    videoResources: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getVisibleCanvasVideoResources"])(state, {
      windowId: windowId
    }) || []
  };
};
/** */


var styles = function styles() {
  return {
    container: {
      alignItems: 'center',
      display: 'flex',
      width: '100%'
    },
    video: {
      maxHeight: '100%',
      width: '100%'
    }
  };
};

var enhance = Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])(), Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, null), Object(_extend_withPlugins__WEBPACK_IMPORTED_MODULE_4__["withPlugins"])('VideoViewer'));
/* harmony default export */ __webpack_exports__["default"] = (enhance(_components_VideoViewer__WEBPACK_IMPORTED_MODULE_5__["VideoViewer"]));

/***/ })

};;
//# sourceMappingURL=6.render-page.js.map