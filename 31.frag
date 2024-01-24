uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void) {
    vec3 c = vec3(0.0);
    float l = 0.0;
    float z = time * 10.0;
    for (int i = 0 ; i < 3 ; i ++) {
        vec2 uv = gl_FragCoord.xy / resolution;
        vec2 p = uv;
        p -= .5;
        p.x *= resolution.x / resolution.y;
        z += .05;
        l = length(p);
        uv += p / 1.0 - abs(sin(l * 3.0 - z * 3.0) * 3.0);
        c [ i ] = l / length(uv);
    }
    vec4 color = vec4(c, 1.0);
    fragColor = TDOutputSwizzle(color);
}
