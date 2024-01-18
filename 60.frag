uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void) {
    vec3 c = vec3(0.0);
    float l = 0.0, z = time * 1.0;
    for (int i = 0 ; i < 3 ; i ++) {
        vec2 uv, p = gl_FragCoord.xy / resolution;
        uv = p;
        p -= .5;
        p.x *= (resolution.x / resolution.y) * 0.1;
        z += .8;
        l = length(p);
        uv += p / l * (sin(z) + 48.) * abs(sin(l * 1.0 - z * 0.75));
        c [ i ] = .03 / length(abs(mod(uv, 1.5) - .5));
    }
    vec4 color = vec4(c / l, time);
    fragColor = TDOutputSwizzle(color);
}
