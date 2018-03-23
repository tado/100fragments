#version 120

uniform float time;
uniform vec2 resolution;

void main(){
  vec2 st = gl_FragCoord.xy/resolution.xy;
  st = st * 1. - 0.5;
  st.y *= resolution.y/resolution.x;
  vec3 col = vec3(0.0);
  col.r = length(abs(st)-sin(time*2.0) * 0.2);
  col.g = length(abs(st)-cos(time*2.1) * 0.16);
  col.b = length(abs(st)+sin(time*2.2) * 0.12);
  col = mod(col * 15.0, 1.8);
  gl_FragColor = vec4(col,1.0);
}