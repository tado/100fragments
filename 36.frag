uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
    vec2 m;
    float t = 0.0;
    for (int i = 1 ; i < 10 ; i ++) {
        m = vec2(sin(time * (i + 3.0f) * 1.0f) * 1.0f, cos(time * 1.02f + (i + 3.0f)) * 1.0f);
        vec2 pos = (gl_FragCoord.xy * 2.0f - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 1.0f) * 100.0f) / length(m - pos) * 0.5f;
    }
    vec4 color = mod(vec4(t, t, t, 1.0f) * vec4(0.2f, 0.8f, 0.6f, 1.0f) * 0.1f, 2.0f) * 0.5f;
    fragColor = vec4(vec3(color.r, color.g, color.b), 1.0f);
}
