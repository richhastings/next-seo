'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  __jsx = _react['default'].createElement,
  MovieJsonLd = function(a) {
    var b = a.name,
      c = a.images,
      d = void 0 === c ? [] : c,
      e = a.dateCreated,
      f = a.director,
      g = a.ratingValue,
      h = a.reviewCount,
      i = '{\n    "@context": "http://schema.org",\n    "@type": "Movie",\n    "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "'
        .concat(g, '",\n      "reviewCount": "')
        .concat(h, '"\n    },\n    "name": "')
        .concat(b, '",\n    "image": [\n      ')
        .concat(
          d.map(function(a) {
            return '"'.concat(a, '"');
          }),
          '\n     ],\n    "dateCreated": "',
        )
        .concat(
          e,
          '",\n    "director": {\n      "@type": "Person",\n      "name": "',
        )
        .concat(f, '"\n    }\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(i),
        key: 'jsonld-movie',
      }),
    );
  },
  _default = MovieJsonLd;
exports['default'] = _default;
