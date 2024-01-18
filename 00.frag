uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main()
{
	vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
	fragColor = TDOutputSwizzle(color);
}

