'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  __jsx = _react['default'].createElement,
  BlogJsonLd = function(a) {
    var b = a.url,
      c = a.title,
      d = a.images,
      e = void 0 === d ? [] : d,
      f = a.datePublished,
      g = a.dateModified,
      h = void 0 === g ? null : g,
      i = a.authorName,
      j = a.description,
      k = '{\n    "@context": "http://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'
        .concat(b, '"\n    },\n    "headline": "')
        .concat(c, '",\n    "image": [\n      ')
        .concat(
          e.map(function(a) {
            return '"'.concat(a, '"');
          }),
          '\n     ],\n    "datePublished": "',
        )
        .concat(f, '",\n    "dateModified": "')
        .concat(
          h || f,
          '",\n    "author": {\n      "@type": "Person",\n      "name": "',
        )
        .concat(i, '"\n    },\n    "description": "')
        .concat(j, '"\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(k),
        key: 'jsonld-blog',
      }),
    );
  },
  _default = BlogJsonLd;
exports['default'] = _default;
