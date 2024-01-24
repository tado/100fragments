uniform float time;
uniform vec2 resolution;

out vec4 fragColor;
void main() {
  vec2 v_texcoord = gl_FragCoord.xy / resolution.xy;
  vec2 p = v_texcoord * (sin(time * 100.0) * 200.0);
  float r = (sin(p.x * 0.3 + time * 90.0) * 1.0 + 0.5);
  float g = (sin(p.x * 0.2 + time * 100.0) * 1.0 + 0.5);
  float b = (sin(p.x * 0.1 + time * 104.0) * 1.0 + 0.5);
  vec4 color = vec4(r, g, b, 1.0);

  fragColor = TDOutputSwizzle(color);
}
