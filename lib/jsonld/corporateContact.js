'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _isArray = _interopRequireDefault(
    require('@babel/runtime-corejs2/core-js/array/is-array'),
  ),
  _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  __jsx = _react['default'].createElement,
  formatIfArray = function(a) {
    return (0, _isArray['default'])(a)
      ? '['.concat(
          a.map(function(a) {
            return '"'.concat(a, '"');
          }),
          ']',
        )
      : '"'.concat(a, '"');
  },
  buildContactPoint = function(a) {
    return a.map(function(a) {
      return '{\n    "@type": "ContactPoint",\n    "telephone": "'
        .concat(a.telephone, '",\n    "contactType": "')
        .concat(a.contactType, '"')
        .concat(
          a.areaServed
            ? ',\n    "areaServed": '.concat(formatIfArray(a.areaServed))
            : '',
        )
        .concat(
          a.availableLanguage
            ? ',\n    "availableLanguage": '.concat(
                formatIfArray(a.availableLanguage),
              )
            : '',
        )
        .concat(
          a.contactOption
            ? ',\n    "contactOption": "'.concat(a.contactOption, '"')
            : '',
          '\n    }',
        );
    });
  },
  CorporateContactJsonLd = function(a) {
    var b = a.url,
      c = a.logo,
      d = a.contactPoint,
      e = '{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'
        .concat(b, '",\n    ')
        .concat(c ? '"logo": "'.concat(c, '",') : '', '\n    "contactPoint": [')
        .concat(buildContactPoint(d), ']\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(e),
        key: 'jsonld-corporate-contact',
      }),
    );
  },
  _default = CorporateContactJsonLd;
exports['default'] = _default;
