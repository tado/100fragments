uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
    vec2 m;
    float t = 0.0;
    for (int i = 1 ; i < 10 ; i ++) {
        m = vec2(sin(time * (i + 0.0) * 1.0) * 2.0, cos(time * 1.02 + (i + 0.0)) * 2.0);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 1.0) * 100.0) / length(m - pos) * 0.5;
    }
    vec4 color = mod(vec4(t, t, t, 1.0) * vec4(0.2, 0.8, 0.6, 1.0) * 0.1, 1.5) * 0.5;
    fragColor = vec4(vec3(color.r, color.g, color.b), 1.0);
}
