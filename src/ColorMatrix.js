import React from 'react';
import { Node, GLSL, Shaders } from 'gl-react';


const shaders = Shaders.create({
  ColorMatrix: {
    frag: GLSL`precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform mat4 m;

void main () {
  gl_FragColor = m * texture2D(t, uv);
}`
  }
});

const ColorMatrix = ({ children: t, matrix: m }) => (
  <Node
    shader={shaders.ColorMatrix}
    uniforms={{ t, m }}
  />
);

export default ColorMatrix;
