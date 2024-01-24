uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

float rand(float n) {
    return fract(sin(n) * 43758.5453123);
}

void main(void) {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 color = vec3(0.0, 0.0, 0.0);
    for(float i = 0.0; i < 10.0; i += 1.0) {
        float f1 = 1.0 / (200.0 * abs(mod((time * (i + 4.0) + rand(i * 10.0) * 10.0) * -0.10, 1.0) - uv.x + sin(uv.y * 5.0 + time * 14.0) * 0.05));
        float f2 = 1.0 / (220.0 * abs(mod((time * (i + 5.0) + rand(i * 20.0) * 10.0) * 0.11, 1.0) - uv.x + cos(uv.y * 4.3 + time * 4.2) * 0.07));
        float f3 = 1.0 / (230.0 * abs(mod((time * (i + 6.0) + rand(i * 30.0) * 10.0) * 0.08, 1.0) - uv.x + sin(uv.y * 4.5 + time * -10.4) * 0.1));
        color += f1 * vec3(0.3, 0.3, 0.4) + f2 * vec3(0.3, 0.6, 0.3) + f3 * vec3(0.4, 0.3, 0.3);
    }
    fragColor = TDOutputSwizzle(vec4(color, 1.0));
}