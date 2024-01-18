uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
    vec2 m;
    float t = 0.0;
    for (float i = 0.0f ; i < 10.0f ; i += 1.0f) {
        m = vec2(sin(time * (i + 0.0f) * 1.04f) * 1.5f, cos(time * 1.02f + (i + 0.0f)) * 2.5f);
        vec2 pos = (gl_FragCoord.xy * 2.0f - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 200.0f) * 29.0f) / length(m - pos);
    }
    vec3 col = 1.0f - mod(vec3(t) * vec3(0.2f, 0.2f, 0.2f) * 0.2f, 1.0f);
    fragColor = TDOutputSwizzle(vec4(col, 1.0f));
}
