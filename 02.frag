uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
	float r = 0.0;
	float g = 0.0;
	float b = 0.0;
	for (float i = 1.0 ; i < 6.0 ; i += 1.0) {
		vec2 m = vec2(sin(time * 0.1 + i * 4.0) * 0.3 + 1.0, (cos(time * 0.2 * i) * 0.3 + 1.0) * (resolution.y / resolution.x));
		vec2 p = gl_FragCoord.xy / resolution.yy;
		r += sin(length(m - p) * 280.0 - time * 10.0) * 0.3;
		g += sin(length(m - p) * 280.5 - time * 10.0) * -0.3;
		b += sin(length(m - p) * 281.0 - time * 10.0) * 0.3;
	}
	vec4 color = vec4(r, g, b, 1.0);
	fragColor = TDOutputSwizzle(color);
}