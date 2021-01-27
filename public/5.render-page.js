exports.ids = [5];
exports.modules = {

/***/ "./node_modules/mirador/dist/es/src/components/AudioViewer.js":
/*!********************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/components/AudioViewer.js ***!
  \********************************************************************/
/*! exports provided: AudioViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioViewer", function() { return AudioViewer; });
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
var AudioViewer = /*#__PURE__*/function (_Component) {
  _inherits(AudioViewer, _Component);

  var _super = _createSuper(AudioViewer);

  function AudioViewer() {
    _classCallCheck(this, AudioViewer);

    return _super.apply(this, arguments);
  }

  _createClass(AudioViewer, [{
    key: "render",

    /* eslint-disable jsx-a11y/media-has-caption */

    /** */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          audioResources = _this$props.audioResources;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        controls: true,
        className: classes.audio
      }, audioResources.map(function (audio) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: audio.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
          src: audio.id,
          type: audio.getFormat()
        }));
      })));
    }
    /* eslint-enable jsx-a11y/media-has-caption */

  }]);

  return AudioViewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
AudioViewer.defaultProps = {
  audioResources: []
};

/***/ }),

/***/ "./node_modules/mirador/dist/es/src/containers/AudioViewer.js":
/*!********************************************************************!*\
  !*** ./node_modules/mirador/dist/es/src/containers/AudioViewer.js ***!
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
/* harmony import */ var _components_AudioViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AudioViewer */ "./node_modules/mirador/dist/es/src/components/AudioViewer.js");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/selectors */ "./node_modules/mirador/dist/es/src/state/selectors/index.js");







/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    audioResources: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["getVisibleCanvasAudioResources"])(state, {
      windowId: windowId
    }) || []
  };
};
/** */


var styles = function styles() {
  return {
    audio: {
      width: '100%'
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      width: '100%'
    }
  };
};

var enhance = Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])(), Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, null), Object(_extend_withPlugins__WEBPACK_IMPORTED_MODULE_4__["withPlugins"])('AudioViewer'));
/* harmony default export */ __webpack_exports__["default"] = (enhance(_components_AudioViewer__WEBPACK_IMPORTED_MODULE_5__["AudioViewer"]));

/***/ })

};;
//# sourceMappingURL=5.render-page.js.map