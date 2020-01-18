'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['precision highp float;\nvarying vec2 uv;\nuniform sampler2D t;\nuniform mat4 m;\n\nvoid main () {\n  gl_FragColor = m * texture2D(t, uv);\n}'], ['precision highp float;\nvarying vec2 uv;\nuniform sampler2D t;\nuniform mat4 m;\n\nvoid main () {\n  gl_FragColor = m * texture2D(t, uv);\n}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glReact = require('gl-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  ColorMatrix: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

var ColorMatrix = function ColorMatrix(_ref) {
  var t = _ref.children,
      m = _ref.matrix;
  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.ColorMatrix,
    uniforms: { t: t, m: m }
  });
};

exports.default = ColorMatrix;
//# sourceMappingURL=ColorMatrix.js.map