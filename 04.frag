uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
    vec2 p = gl_FragCoord.xy / resolution.xy * 3.0;
    for (float i = 1.0 ; i < 10.0 ; i ++) {
        p.x += 0.2 / i * sin(i * 3.5 * p.y + time * 0.6 + cos((time / (300. * i)) * i));
        p.y += 0.4 / i * cos(i * 2.5 * p.x + time * 0.8 + sin((time / (200. * i)) * i));
    }
    float r = mod(cos(p.x + p.y + 2.) * 2.0, 1.0) * 0.75;
    float g = mod(sin(p.x + p.y + 1.) * 2.5, 1.0) * 0.75;
    float b = mod((sin(p.x + p.y + 1.) + cos(p.x + p.y + 1.)) * 5.0, 1.0) * 0.75;
    vec4 color = vec4(r, g, b, 1.0);
    fragColor = TDOutputSwizzle(color);
}
