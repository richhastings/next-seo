'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  _formatIfArray = _interopRequireDefault(require('../utils/formatIfArray')),
  __jsx = _react['default'].createElement,
  buildGeo = function(a) {
    return '\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "'
      .concat(a.latitude, '",\n    "longitude": "')
      .concat(a.longitude, '"\n  },\n');
  },
  buildAddress = function(a) {
    return '\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "'
      .concat(a.streetAddress, '",\n    "addressLocality": "')
      .concat(a.addressLocality, '",\n    ')
      .concat(
        a.addressRegion
          ? '"addressRegion": "'.concat(a.addressRegion, '",')
          : '',
        '\n    "postalCode": "',
      )
      .concat(a.postalCode, '",\n    "addressCountry": "')
      .concat(a.addressCountry, '"\n  },\n');
  },
  buildRating = function(a) {
    return '\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "'
      .concat(a.ratingValue, '",\n    "ratingCount": "')
      .concat(a.ratingCount, '"\n  },\n');
  },
  LocalBusinessJsonLd = function(a) {
    var b = a.type,
      c = a.id,
      d = a.name,
      e = a.description,
      f = a.url,
      g = a.telephone,
      h = a.address,
      i = a.geo,
      j = a.images,
      k = a.rating,
      l = a.priceRange,
      m = '{\n    "@context": "http://schema.org",\n    "@type": "'
        .concat(b, '",\n    "@id": "')
        .concat(c, '",\n    ')
        .concat(e ? '"description": "'.concat(e, '",') : '', '\n    ')
        .concat(f ? '"url": "'.concat(f, '",') : '', '\n    ')
        .concat(g ? '"telephone": "'.concat(g, '",') : '', '\n    ')
        .concat(buildAddress(h), '\n    ')
        .concat(i ? ''.concat(buildGeo(i)) : '', '\n    ')
        .concat(k ? ''.concat(buildRating(k)) : '', '\n    ')
        .concat(l ? '"priceRange": "'.concat(l, '",') : '', '\n    "image":')
        .concat((0, _formatIfArray['default'])(j), ',\n    "name": "')
        .concat(d, '"\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(m),
        key: 'jsonld-local-business',
      }),
    );
  },
  _default = LocalBusinessJsonLd;
exports['default'] = _default;
