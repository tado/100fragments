uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
	float r = abs(pow(sin(time * 30.0 + sin(time) * 3.0), 3.0));
	float g = abs(pow(sin(time * 32.0 + sin(time) * 3.0), 3.0));
	float b = abs(pow(cos(time * 30.0 + sin(time) * 3.0), 3.0));
	vec4 color = vec4(r, g, b, 1.0);
	fragColor = TDOutputSwizzle(color);
}