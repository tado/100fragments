#version 120

uniform float time;
uniform vec2 resolution;

void main(){
  vec2 st = gl_FragCoord.xy/resolution.xy;
  st = st *2.-1.;
  st.y *= resolution.y/resolution.x;
  vec3 col = vec3(0.0);
  col.r = length(abs(st)-sin(time) * 0.2);
  col.g = length(abs(st)-sin(time*1.1) * 0.3);
  col.b = length(abs(st)-sin(time*1.2) * 0.4);
  col = mod(col * 20.0, 1.0);
  gl_FragColor = vec4(col,1.5);
}