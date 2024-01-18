uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
	vec2 uv = vec2(0.5, 0.5 * (resolution.y / resolution.x)) - gl_FragCoord.xy / resolution.x;
	float dist = sqrt(dot(uv, uv));
	float radius = cos(time * 10.0) * 0.1 + 0.2;
	float border = sin(time * 10.0) * 0.2 + 0.05;
	float t = smoothstep(radius + border, radius - border, dist);
	vec4 color = vec4(t * 0.6, t, t * 1.5, 1.0);
	fragColor = TDOutputSwizzle(color);
}
