#version 120

uniform float time;
uniform vec2 resolution;

vec2 rotate( vec2 matrix, float angle ) {
    return vec2( matrix.x*cos(radians(angle)), matrix.x*sin(radians(angle)) ) + vec2( matrix.y*-sin(radians(angle)), matrix.y*cos(radians(angle)) );
}

void main(void) {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec2 uv = -1. + 2. * st;
    float div = 10.0;
    float speed = 4.0;
    vec2 rr = rotate(uv, time * 20.0);
    vec2 rg = rotate(uv, time * 42.0);
    vec2 rb = rotate(uv, time * -30.0);
    float r = mod(rr.x + mod(time / div * speed, 1.0), 1.0 / div) * div;
    float g = mod(rg.y + mod(time / div * speed * 1.0, 1.0), 1.0 / div) * div;
    float b = mod(rb.x - mod(time / div * speed, 1.0), 1.0 / div) * div;
    gl_FragColor = vec4(r, g, b, 1.0);
}
