uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
    vec2 p = gl_FragCoord.xy / resolution.x * 0.7;
    vec3 col = vec3(0.0);
    for(int j = 0; j < 3; j++) {
        for(int i = 1; i < 10; i++) {
            p.x += 0.1 / (i + j) * sin(i * 10.0 * p.y + time + cos((time / (12. * i)) * i + j));
            p.y += 0.1 / (i + j) * cos(i * 10.0 * p.x + time + sin((time / (12. * i)) * i + j));
        }
        col[j] = abs(p.x + p.y);
    }
    fragColor = TDOutputSwizzle(vec4(col, 1.0));
}