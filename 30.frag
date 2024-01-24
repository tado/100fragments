uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
	vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / vec2(resolution.x, resolution.x);
	float len = length(uv);
	float r = sin(len * 120 - time * 80.0);
	float g = sin(len * 120 - time * 80.0 - 1.0);
	float b = sin(len * 120 - time * 80.0 - 2.0);
	vec4 color = vec4(r, g, b, 1.0);
	fragColor = TDOutputSwizzle(color);
}