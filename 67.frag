uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
	vec2 st = gl_FragCoord.xy / resolution.xy;
	vec2 uv = -1. + 2. * st;
	float div = 12.0;
	float speed = 2.0;
	float r = mod(st.x + mod(time / div * speed, 1.0), 1.0 / div) * div;
	float g = mod(st.y + mod(time / div * speed * 4.0, 1.0), 1.0 / div) * div;
	float b = mod(st.x - mod(time / div * speed, 1.0), 1.0 / div) * div;
	vec4 color = vec4(r, g, b, 1.0);
	fragColor = TDOutputSwizzle(color);
}
