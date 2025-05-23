'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var material = require('@mui/material');
var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var reactI18next = require('react-i18next');
var zustand = require('zustand');
var immer = require('immer');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

var _rect$3, _rect2$1, _path$7, _path2$6, _path3$5, _path4$3, _g$9, _path5$3, _path6$1, _path7$1, _path8$1, _g2$3, _defs$9;
function _extends$b() { return _extends$b = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$b.apply(null, arguments); }
var SvgEnUsDark = function SvgEnUsDark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _rect$3 || (_rect$3 = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 30,
    height: 30,
    fill: "#2A2A32",
    rx: 15
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "a",
    width: 26,
    height: 26,
    x: 2,
    y: 2,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _rect2$1 || (_rect2$1 = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    fill: "#D9D9D9",
    stroke: "#fff",
    strokeWidth: 0.8,
    rx: 12
  }))), /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#a)"
  }, _path$7 || (_path$7 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2A2A32",
    d: "M-1 3v25h32V3z"
  })), _path2$6 || (_path2$6 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m-3 7 36 18Zm36 0L-3 25Z"
  })), _path3$5 || (_path3$5 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M10.077 16-8 6.945-6.03 3 15 13.534 36.03 3 38 6.945 19.923 16 38 25.055 36.03 29 15 18.466-6.03 29-8 25.055z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "b",
    width: 38,
    height: 19,
    x: -4,
    y: 6,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _path4$3 || (_path4$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M15 15.884h18.187v9.093zm0 0v9.093H-3.187zm0 0H-3.187V6.79zm0 0V6.79h18.187z"
  }))), _g$9 || (_g$9 = /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#b)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m-3.187 6.79 36.374 18.187Zm36.374 0L-3.187 24.977Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#C8102E",
    fillRule: "evenodd",
    d: "M12.289 15.884-3.73 7.874l1.084-2.168L15 14.528l17.644-8.822 1.085 2.169-16.018 8.009 16.018 8.009-1.085 2.169L15 17.239l-17.645 8.823-1.084-2.17z",
    clipRule: "evenodd"
  }))), _path5$3 || (_path5$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "M15 7v18Zm-18 9h36Z"
  })), _path6$1 || (_path6$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M12 13.225V2h6v11.225h15v6.067H18V29h-6v-9.708H-3v-6.067z",
    clipRule: "evenodd"
  })), _path7$1 || (_path7$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "M15 2v27ZM-3 16.32h36Z"
  })), _path8$1 || (_path8$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#C8102E",
    fillRule: "evenodd",
    d: "M13.2 14.499V2h3.6v12.499H33v3.64H16.8V29h-3.6V18.14H-3v-3.641z",
    clipRule: "evenodd"
  }))), _g2$3 || (_g2$3 = /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#c)"
  }, /*#__PURE__*/React__namespace.createElement("rect", {
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    stroke: "#E9E9E9",
    strokeWidth: 0.8,
    rx: 12
  }))), _defs$9 || (_defs$9 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("filter", {
    id: "c",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32468"
  })))));
};
var Memo$b = /*#__PURE__*/React.memo(SvgEnUsDark);

var _rect$2, _rect2, _path$6, _path2$5, _path3$4, _path4$2, _g$8, _path5$2, _path6, _path7, _path8, _g2$2, _defs$8;
function _extends$a() { return _extends$a = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$a.apply(null, arguments); }
var SvgEnUsLight = function SvgEnUsLight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _rect$2 || (_rect$2 = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 30,
    height: 30,
    fill: "#F6F6F6",
    rx: 15
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "a",
    width: 26,
    height: 26,
    x: 2,
    y: 2,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _rect2 || (_rect2 = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    fill: "#D9D9D9",
    stroke: "#fff",
    strokeWidth: 0.8,
    rx: 12
  }))), /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#a)"
  }, _path$6 || (_path$6 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#012169",
    d: "M-1 3v25h32V3z"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m-3 7 36 18Zm36 0L-3 25Z"
  })), _path3$4 || (_path3$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M10.077 16-8 6.945-6.03 3 15 13.534 36.03 3 38 6.945 19.923 16 38 25.055 36.03 29 15 18.466-6.03 29-8 25.055z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "b",
    width: 38,
    height: 19,
    x: -4,
    y: 6,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _path4$2 || (_path4$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M15 15.884h18.187v9.093zm0 0v9.093H-3.187zm0 0H-3.187V6.79zm0 0V6.79h18.187z"
  }))), _g$8 || (_g$8 = /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#b)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m-3.187 6.79 36.374 18.187Zm36.374 0L-3.187 24.977Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#C8102E",
    fillRule: "evenodd",
    d: "M12.289 15.884-3.73 7.874l1.084-2.168L15 14.528l17.644-8.822 1.085 2.169-16.018 8.009 16.018 8.009-1.085 2.169L15 17.239l-17.645 8.823-1.084-2.17z",
    clipRule: "evenodd"
  }))), _path5$2 || (_path5$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "M15 7v18Zm-18 9h36Z"
  })), _path6 || (_path6 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M12 13.225V2h6v11.225h15v6.067H18V29h-6v-9.708H-3v-6.067z",
    clipRule: "evenodd"
  })), _path7 || (_path7 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "M15 2v27ZM-3 16.32h36Z"
  })), _path8 || (_path8 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#C8102E",
    fillRule: "evenodd",
    d: "M13.2 14.499V2h3.6v12.499H33v3.64H16.8V29h-3.6V18.14H-3v-3.641z",
    clipRule: "evenodd"
  }))), _g2$2 || (_g2$2 = /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#c)"
  }, /*#__PURE__*/React__namespace.createElement("rect", {
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    stroke: "#E9E9E9",
    strokeWidth: 0.8,
    rx: 12
  }))), _defs$8 || (_defs$8 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("filter", {
    id: "c",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32448"
  })))));
};
var Memo$a = /*#__PURE__*/React.memo(SvgEnUsLight);

var _g$7, _defs$7;
function _extends$9() { return _extends$9 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$9.apply(null, arguments); }
var SvgKrDark = function SvgKrDark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _g$7 || (_g$7 = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#b)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2B2B33",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }), /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#c)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#EAEAEA",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }))), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m5 11 2.667-4 .666.444-2.666 4zm1 .667 2.667-4 .666.444-2.666 4zm1 .666 2.667-4 .666.445-2.666 4zM19.667 20.778l2.666-4 .667.444-2.667 4zm1 .667 2.666-4 .667.444-2.667 4zm1 .666 2.666-4 .667.445-2.667 4z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "m23.889 20.944-3.334-2.222.223-.333 3.333 2.222z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#CD2E3A",
    d: "M11 12.111a4.808 4.808 0 0 1 8 5.333z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#0047A0",
    d: "M11 12.111a4.808 4.808 0 0 0 8 5.333 2.404 2.404 0 0 0-4-2.666z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#CD2E3A",
    d: "M15 14.778a2.404 2.404 0 1 0-4-2.667 2.404 2.404 0 0 0 4 2.667"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m7.667 22.556-2.667-4 .667-.445 2.666 4zm1-.667-2.667-4 .667-.445 2.666 4zm1-.667-2.667-4 .667-.444 2.666 4zM22.333 12.778l-2.666-4 .666-.445 2.667 4zm1-.667-2.666-4 .666-.444 2.667 4zm1-.667-2.666-4L22.333 7 25 11z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "m8.278 19.5-1 .667-.222-.334 1-.666zm13.667-9.111-1.167.778-.222-.334 1.166-.777zm2-1.333-1 .666-.223-.333 1-.667z",
    clipRule: "evenodd"
  }))), _defs$7 || (_defs$7 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("filter", {
    id: "b",
    width: 30,
    height: 31,
    x: 0,
    y: 0,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32430"
  })), /*#__PURE__*/React__namespace.createElement("filter", {
    id: "c",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32430"
  })), /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$9 = /*#__PURE__*/React.memo(SvgKrDark);

var _g$6, _defs$6;
function _extends$8() { return _extends$8 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$8.apply(null, arguments); }
var SvgKrLight = function SvgKrLight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _g$6 || (_g$6 = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#F6F6F6",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#EAEAEA",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m5 11 2.667-4 .666.444-2.666 4zm1 .667 2.667-4 .666.444-2.666 4zm1 .666 2.667-4 .666.445-2.666 4zM19.667 20.778l2.666-4 .667.444-2.667 4zm1 .667 2.666-4 .667.444-2.667 4zm1 .666 2.666-4 .667.445-2.667 4z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "m23.889 20.944-3.334-2.222.223-.333 3.333 2.222z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#CD2E3A",
    d: "M11 12.111a4.808 4.808 0 0 1 8 5.333z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#0047A0",
    d: "M11 12.111a4.808 4.808 0 0 0 8 5.333 2.404 2.404 0 0 0-4-2.666z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#CD2E3A",
    d: "M15 14.778a2.404 2.404 0 1 0-4-2.667 2.404 2.404 0 0 0 4 2.667"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    d: "m7.667 22.556-2.667-4 .667-.445 2.666 4zm1-.667-2.667-4 .667-.445 2.666 4zm1-.667-2.667-4 .667-.444 2.666 4zM22.333 12.778l-2.666-4 .666-.445 2.667 4zm1-.667-2.666-4 .666-.444 2.667 4zm1-.667-2.666-4L22.333 7 25 11z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "m8.278 19.5-1 .667-.222-.334 1-.666zm13.667-9.111-1.167.778-.222-.334 1.166-.777zm2-1.333-1 .666-.223-.333 1-.667z",
    clipRule: "evenodd"
  }))), _defs$6 || (_defs$6 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$8 = /*#__PURE__*/React.memo(SvgKrLight);

var _path$5, _path2$4, _path3$3, _path4$1, _g$5, _path5$1, _defs$5;
function _extends$7() { return _extends$7 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$7.apply(null, arguments); }
var SvgRussianDark = function SvgRussianDark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, _path$5 || (_path$5 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2B2B33",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2B2B33",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  })), _path3$3 || (_path3$3 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#fff",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  })), /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#b)"
  }, /*#__PURE__*/React__namespace.createElement("mask", {
    id: "c",
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _path4$1 || (_path4$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }))), _g$5 || (_g$5 = /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#c)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M35 3H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#22297E",
    d: "M35 11.642H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#DD2726",
    d: "M35 20.284H-3v8.642h38z"
  })))), _path5$1 || (_path5$1 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#fff",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }))), _defs$5 || (_defs$5 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })), /*#__PURE__*/React__namespace.createElement("filter", {
    id: "b",
    width: 24,
    height: 25,
    x: 3,
    y: 3,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32387"
  })))));
};
var Memo$7 = /*#__PURE__*/React.memo(SvgRussianDark);

var _path$4, _path2$3, _path3$2, _g$4, _g2$1, _defs$4;
function _extends$6() { return _extends$6 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$6.apply(null, arguments); }
var SvgRussianLight = function SvgRussianLight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#F6F6F6",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  })), /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#b)"
  }, _path2$3 || (_path2$3 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#fff",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "c",
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _path3$2 || (_path3$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }))), _g$4 || (_g$4 = /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#c)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M35 3H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#22297E",
    d: "M35 11.642H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#DD2726",
    d: "M35 20.284H-3v8.642h38z"
  })))), _g2$1 || (_g2$1 = /*#__PURE__*/React__namespace.createElement("g", {
    stroke: "#F4F4F4",
    strokeWidth: 0.8,
    filter: "url(#d)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  })))), _defs$4 || (_defs$4 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("filter", {
    id: "b",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32375"
  })), /*#__PURE__*/React__namespace.createElement("filter", {
    id: "d",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17855_32375"
  })), /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$6 = /*#__PURE__*/React.memo(SvgRussianLight);

var _path$3, _path2$2, _path3$1, _path4, _g$3, _path5, _defs$3;
function _extends$5() { return _extends$5 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$5.apply(null, arguments); }
var SvgUkUaDark = function SvgUkUaDark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2B2B33",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2B2B33",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#fff",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "b",
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _path4 || (_path4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#CCC",
    d: "M27 15c0 6.627-5.373 12-12 12S3 21.627 3 15 8.373 3 15 3s12 5.373 12 12"
  }))), _g$3 || (_g$3 = /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#b)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#005BBB",
    d: "M1.25 15h27.5V1.25H1.25z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#FFD500",
    d: "M1.25 28.75h27.5V15H1.25z"
  }))), _path5 || (_path5 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#fff",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }))), _defs$3 || (_defs$3 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$5 = /*#__PURE__*/React.memo(SvgUkUaDark);

var _path$2, _path2$1, _path3, _g$2, _g2, _defs$2;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgUkUaLight = function SvgUkUaLight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#F6F6F6",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  })), /*#__PURE__*/React__namespace.createElement("g", {
    filter: "url(#b)"
  }, _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#fff",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  })), /*#__PURE__*/React__namespace.createElement("mask", {
    id: "c",
    width: 24,
    height: 24,
    x: 3,
    y: 3,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, _path3 || (_path3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }))), _g$2 || (_g$2 = /*#__PURE__*/React__namespace.createElement("g", {
    mask: "url(#c)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M35 3H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#22297E",
    d: "M35 11.642H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#DD2726",
    d: "M35 20.284H-3v8.642h38z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#005BBB",
    d: "M-3.75 0H37.5v15H-3.75z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#FFD500",
    d: "M-3.75 15.075h41.423V28.9H-3.75z"
  })))), _g2 || (_g2 = /*#__PURE__*/React__namespace.createElement("g", {
    stroke: "#F4F4F4",
    strokeWidth: 0.8,
    filter: "url(#d)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  })))), _defs$2 || (_defs$2 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("filter", {
    id: "b",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17287_32482"
  })), /*#__PURE__*/React__namespace.createElement("filter", {
    id: "d",
    width: 24.8,
    height: 25.8,
    x: 2.6,
    y: 2.6,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/React__namespace.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React__namespace.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React__namespace.createElement("feComposite", {
    in2: "hardAlpha",
    k2: -1,
    k3: 1,
    operator: "arithmetic"
  }), /*#__PURE__*/React__namespace.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React__namespace.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_17287_32482"
  })), /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$4 = /*#__PURE__*/React.memo(SvgUkUaLight);

var _g$1, _defs$1;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgZhCnDark = function SvgZhCnDark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2B2B33",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "red",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#FF0",
    fillRule: "evenodd",
    d: "m11.534 9.08 1.425 3.037 3.188.488-2.308 2.364.547 3.34-2.852-1.576-2.854 1.576.546-3.34-2.307-2.364 3.188-.488zm11.592 6.982.402.856.9.137-.65.666.153.941-.805-.444-.803.444.154-.941-.651-.666.9-.137zm-3.044-8.065.039.947.776.473-.857.366-.224.927-.569-.722-.914.1.505-.81-.342-.866.883.222zm4.151 3.83-.517.793.356.837-.907-.203-.72.627-.046-.92-.803-.448.884-.366.224-.903.59.69zm-3.117 9.243-.868.376-.166.895-.646-.67-.947.121.468-.788-.417-.82.935.184.688-.63.11.903z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#EAEAEA",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }))), _defs$1 || (_defs$1 = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$3 = /*#__PURE__*/React.memo(SvgZhCnDark);

var _g, _defs;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgZhCnLight = function SvgZhCnLight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#F6F6F6",
    d: "M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15 15-6.716 15-15"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "red",
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#FF0",
    fillRule: "evenodd",
    d: "m11.534 9.08 1.425 3.037 3.188.488-2.308 2.364.547 3.34-2.852-1.576-2.854 1.576.546-3.34-2.307-2.364 3.188-.488zm11.592 6.982.402.856.9.137-.65.666.153.941-.805-.444-.803.444.154-.941-.651-.666.9-.137zm-3.044-8.065.039.947.776.473-.857.366-.224.927-.569-.722-.914.1.505-.81-.342-.866.883.222zm4.151 3.83-.517.793.356.837-.907-.203-.72.627-.046-.92-.803-.448.884-.366.224-.903.59.69zm-3.117 9.243-.868.376-.166.895-.646-.67-.947.121.468-.788-.417-.82.935.184.688-.63.11.903z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#EAEAEA",
    strokeWidth: 0.8,
    d: "M27 15c0-6.627-5.373-12-12-12S3 8.373 3 15s5.373 12 12 12 12-5.373 12-12Z"
  }))), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h30v30H0z"
  })))));
};
var Memo$2 = /*#__PURE__*/React.memo(SvgZhCnLight);

const props$1 = {
    width: 24,
    height: 24,
    viewBox: '0 0 30 30',
};
const language_en_dark = {
    component: Memo$b,
    props: props$1,
};
const language_en_light = {
    component: Memo$a,
    props: props$1,
};
const language_kr_dark = {
    component: Memo$9,
    props: props$1,
};
const language_kr_light = {
    component: Memo$8,
    props: props$1,
};
const language_ru_dark = {
    component: Memo$7,
    props: props$1,
};
const language_ru_light = {
    component: Memo$6,
    props: props$1,
};
const language_uk_dark = {
    component: Memo$5,
    props: props$1,
};
const language_uk_light = {
    component: Memo$4,
    props: props$1,
};
const language_zh_dark = {
    component: Memo$3,
    props: props$1,
};
const language_zh_light = {
    component: Memo$2,
    props: props$1,
};
const icons$2 = {
    language_en_dark,
    language_en_light,
    language_kr_dark,
    language_kr_light,
    language_ru_dark,
    language_ru_light,
    language_uk_dark,
    language_uk_light,
    language_zh_dark,
    language_zh_light,
};

var _rect$1, _path$1, _path2;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgDark = function SvgDark(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _rect$1 || (_rect$1 = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 30,
    height: 30,
    fill: "#2B2B33",
    rx: 15
  })), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#228BE5",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 20.087a5.087 5.087 0 1 0 0-10.174 5.087 5.087 0 0 0 0 10.174Z"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#2997F6",
    d: "M15 7.957A.978.978 0 1 0 15 6a.978.978 0 0 0 0 1.957M20.674 10.304a.978.978 0 1 0 0-1.956.978.978 0 0 0 0 1.956M23.022 15.978a.978.978 0 1 0 0-1.957.978.978 0 0 0 0 1.957M20.674 21.652a.978.978 0 1 0 0-1.957.978.978 0 0 0 0 1.957M15 24a.978.978 0 1 0 0-1.957A.978.978 0 0 0 15 24M9.326 21.652a.978.978 0 1 0 0-1.956.978.978 0 0 0 0 1.956M6.978 15.978a.978.978 0 1 0 0-1.957.978.978 0 0 0 0 1.957M9.326 10.304a.978.978 0 1 0 0-1.956.978.978 0 0 0 0 1.956"
  })));
};
var Memo$1 = /*#__PURE__*/React.memo(SvgDark);

var _rect, _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgLight = function SvgLight(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 30"
  }, props), _rect || (_rect = /*#__PURE__*/React__namespace.createElement("rect", {
    width: 30,
    height: 30,
    fill: "#F6F6F6",
    rx: 15
  })), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#006FFF",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16.418 8.144a4.456 4.456 0 0 0 1.127 8.765 4.456 4.456 0 0 0 4.311-3.327Q22 14.27 22 15a7 7 0 1 1-5.582-6.856Z"
  })));
};
var Memo = /*#__PURE__*/React.memo(SvgLight);

const props = {
    width: 24,
    height: 24,
    viewBox: '0 0 30 30',
};
const mode_dark = {
    component: Memo$1,
    props,
};
const mode_light = {
    component: Memo,
    props,
};
const icons$1 = {
    mode_dark,
    mode_light,
};

const icons = {
    ...icons$2,
    ...icons$1,
};

const Index$1 = ({ name, className, component, sx, ...props }) => {
    const c = React.useMemo(() => {
        if (component) {
            return { component: component };
        }
        if (name) {
            return { component: icons[name]?.component };
        }
        return {};
    }, [name, component]);
    const p = React.useMemo(() => {
        const op = { ...props };
        if (name) {
            return { ...icons[name]?.props, ...op };
        }
        return op;
    }, [name, props]);
    return (jsxRuntime.jsx(material.SvgIcon, { fill: "none", ...c, className: `design-svg ${className}`, sx: {
            fill: 'transparent',
            ...sx,
        }, ...p }));
};

const Index = ({ ...props }) => {
    return jsxRuntime.jsx(material.Typography, { fontSize: 16, ...props });
};

const formatday = () => { };

const ispassword = () => { };

const formatmoney = () => { };

/**
 * 将时间单位转换为毫秒
 * @param duration 时间长度
 * @param unit 时间单位
 * @returns 毫秒数
 */
const convertToMilliseconds = (duration, unit) => {
    const conversions = {
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
    };
    return duration * conversions[unit];
};
/**
 * 获取存储实例
 * @param islocal 是否使用 localStorage
 * @returns Storage 实例
 */
const getStorageInstance = (islocal) => {
    return islocal ? window.localStorage : window.sessionStorage;
};
/**
 * 设置存储数据
 * @param key 存储键名
 * @param value 存储值
 * @param expire 过期时间
 * @param unit 过期时间单位，默认为小时
 * @param islocal 是否使用 localStorage，默认为 true
 */
const setStorage = ({ key, value, expire, unit = 'hour', islocal = true, }) => {
    const storage = getStorageInstance(islocal);
    const now = Date.now();
    const expireInMs = expire ? convertToMilliseconds(expire, unit) : 0;
    const data = {
        value,
        timestamp: now,
        expire: expireInMs,
        unit,
    };
    storage.setItem(key, JSON.stringify(data));
};
dayjs.extend(utc);
const getStorage = ({ key, isexpired = false, islocal = true, }) => {
    const storage = getStorageInstance(islocal);
    const data = storage.getItem(key);
    if (!data)
        return null;
    try {
        const parsedData = JSON.parse(data);
        if (isexpired && parsedData.expire > 0) {
            const now = dayjs().utc();
            const expirationTime = dayjs(parsedData.timestamp + parsedData.expire).utc();
            if (now.isAfter(expirationTime)) {
                storage.removeItem(key);
                return null;
            }
        }
        return parsedData;
    }
    catch (error) {
        console.error('Error parsing storage data:', error);
        return null;
    }
};
/**
 * 移除指定的存储数据
 * @param key 存储键名
 * @param islocal 是否使用 localStorage，默认为 true
 */
const removeStorage = (key, islocal = true) => {
    const storage = getStorageInstance(islocal);
    storage.removeItem(key);
};
/**
 * 清除所有存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
const clearStorage = (islocal = true) => {
    const storage = getStorageInstance(islocal);
    storage.clear();
};
/**
 * 获取存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
const getItem = ({ key, islocal = true }) => {
    const storage = getStorageInstance(islocal);
    return storage.getItem(key);
};
/**
 * 获取存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
const setItem = ({ key, value, islocal = true, }) => {
    const storage = getStorageInstance(islocal);
    return storage.setItem(key, value);
};
const storage = {
    set: setStorage,
    get: getStorage,
    remove: removeStorage,
    clear: clearStorage,
    getItem,
    setItem,
};

const useBreakpoints = () => {
    const theme = material.useTheme();
    const isdesktop = material.useMediaQuery(theme.breakpoints.up('md'));
    const downmd = material.useMediaQuery(theme.breakpoints.down('md'));
    const upsm = material.useMediaQuery(theme.breakpoints.up('sm'));
    const ismobile = material.useMediaQuery(theme.breakpoints.down('sm'));
    return {
        theme,
        isdesktop,
        downmd,
        ismobile,
        upsm,
    };
};

const LANGUAGE_STORAGE_KEY = 'i18nextLng';
const MODE_STORAGE_KEY = 'MODE_STORAGE_KEY';

const enus = {
    value: 'en'};

const useStore$1 = zustand.create(set => ({
    current: enus.value,
    open: false,
    show: (params) => set(immer.produce(state => {
        state.open = params;
    })),
    change: (params) => set(immer.produce(state => {
        state.current = params;
    })),
}));

const useLanguage = () => {
    const { i18n } = reactI18next.useTranslation();
    const { current, open, ...actions } = useStore$1();
    // 修改语言的方法
    const modify = ({ isi18, nlanguage }) => {
        actions.change(nlanguage);
        storage.setItem({ key: LANGUAGE_STORAGE_KEY, value: nlanguage });
        if (isi18) {
            i18n.changeLanguage(nlanguage);
        }
    };
    // 切换语言的方法
    const change = (params, isi18) => {
        if (params.value === current)
            return;
        modify({ isi18: isi18, nlanguage: params.value });
    };
    /// 初始化语言
    const setup = ({ data, isi18 }) => {
        if (typeof window !== 'undefined') {
            const res = storage.getItem({ key: LANGUAGE_STORAGE_KEY });
            const lang = data.find(o => o.value === res) || data[0];
            modify({ isi18: isi18, nlanguage: lang?.value });
        }
    };
    return {
        language: current,
        open,
        show: actions.show,
        change,
        modify,
        setup,
    };
};

const useStore = zustand.create(set => ({
    mode: 'light',
    open: false,
    show: (params) => set(immer.produce(state => {
        state.open = params;
    })),
    change: (params) => set(immer.produce(state => {
        state.mode = params;
    })),
}));

const useMode = () => {
    const { mode, open, ...actions } = useStore();
    const modify = (params) => {
        if (params === mode)
            return;
        actions.change(params);
        storage.setItem({ key: MODE_STORAGE_KEY, value: params });
    };
    // 切换语言的方法
    const change = (params) => {
        if (params === mode)
            return;
        modify(params);
    };
    // 初始化语言
    const setup = () => {
        if (typeof window !== 'undefined') {
            const res = storage.getItem({ key: MODE_STORAGE_KEY });
            if (res) {
                modify(res);
            }
        }
    };
    return {
        mode,
        open,
        show: actions.show,
        change,
        modify,
        setup,
    };
};

exports.SvgIcon = Index$1;
exports.Typography = Index;
exports.clearStorage = clearStorage;
exports.formatday = formatday;
exports.formatmoney = formatmoney;
exports.getItem = getItem;
exports.getStorage = getStorage;
exports.ispassword = ispassword;
exports.removeStorage = removeStorage;
exports.setItem = setItem;
exports.setStorage = setStorage;
exports.useBreakpoints = useBreakpoints;
exports.useLanguage = useLanguage;
exports.useMode = useMode;
//# sourceMappingURL=index.js.map
