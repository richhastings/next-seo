'use strict';
var _interopRequireWildcard = require('@babel/runtime-corejs2/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _classCallCheck2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/classCallCheck'),
  ),
  _createClass2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/createClass'),
  ),
  _possibleConstructorReturn2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/possibleConstructorReturn'),
  ),
  _getPrototypeOf2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/getPrototypeOf'),
  ),
  _inherits2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/inherits'),
  ),
  _head = _interopRequireDefault(require('next/head')),
  _react = _interopRequireWildcard(require('react')),
  _buildTags = _interopRequireDefault(require('./buildTags')),
  __jsx = _react['default'].createElement,
  _default = /*#__PURE__*/ (function(a) {
    function b() {
      return (
        (0, _classCallCheck2['default'])(this, b),
        (0, _possibleConstructorReturn2['default'])(
          this,
          (0, _getPrototypeOf2['default'])(b).apply(this, arguments),
        )
      );
    }
    return (
      (0, _inherits2['default'])(b, a),
      (0, _createClass2['default'])(b, [
        {
          key: 'render',
          value: function render() {
            var a = this.props,
              b = a.title,
              c = a.titleTemplate,
              d = a.dangerouslySetAllPagesToNoIndex,
              e = a.dangerouslySetAllPagesToNoFollow,
              f = a.description,
              g = a.canonical,
              h = a.facebook,
              i = a.openGraph,
              j = a.additionalMetaTags,
              k = a.twitter,
              l = a.defaultOpenGraphImageWidth,
              m = a.defaultOpenGraphImageHeight,
              n = a.defaultOpenGraphVideoWidth,
              o = a.defaultOpenGraphVideoHeight,
              p = a.mobileAlternate,
              q = a.languageAlternates;
            return _react['default'].createElement(
              _head['default'],
              null,
              (0, _buildTags['default'])({
                title: b,
                titleTemplate: c,
                dangerouslySetAllPagesToNoIndex: void 0 !== d && d,
                dangerouslySetAllPagesToNoFollow: void 0 !== e && e,
                description: f,
                canonical: g,
                facebook: h,
                openGraph: i,
                additionalMetaTags: j,
                twitter: k,
                defaultOpenGraphImageWidth: l,
                defaultOpenGraphImageHeight: m,
                defaultOpenGraphVideoWidth: n,
                defaultOpenGraphVideoHeight: o,
                mobileAlternate: p,
                languageAlternates: q,
              }),
            );
          },
        },
      ]),
      b
    );
  })(_react.Component);
exports['default'] = _default;
