uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main() {
    vec2 p = gl_FragCoord.xy / resolution * 0.75;
    for (float i = 1.0 ; i < 10.0 ; i+=1.0) {
        p.x += 0.3 / i * (i * 1.0 * p.y + time * -0.01 + cos((time / (100. * i)) * i));
        p.y += 0.4 / i * cos(i * 4.0 * p.x + time * 2.0 + sin((time / (200. * i)) * i));
    }
    float r = cos(p.x + p.y + 2.) * .5 + .5;
    float g = sin(p.x + p.y + 1.) * .5 + .5;
    float b = (sin(p.x + p.y + 1.) + cos(p.x + p.y + 1.)) * .5 + 0.5;
    vec3 col = mod(vec3(r, g, b) * 3.0, 1.0) * 1.2;
    vec4 color = vec4(col, 1.0);
    fragColor = TDOutputSwizzle(color);
}
