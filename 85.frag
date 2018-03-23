#version 120

uniform float time;
uniform vec2 resolution;

vec2 rotate( vec2 matrix, float angle ) {
    return vec2( matrix.x*cos(radians(angle)), matrix.x*sin(radians(angle)) ) + vec2( matrix.y*-sin(radians(angle)), matrix.y*cos(radians(angle)) );
}

void main(void) {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec2 uv = -1. + 2. * st;
    vec2 rr = rotate(uv, time * 20.0);
    vec2 rg = rotate(uv, time * 42.0);
    vec2 rb = rotate(uv, time * -33.0);
    float r = mod(sin(rr.x * 10.0 + cos(rr.y + time) * 4.0), 1.0);
    float g = mod(sin(rg.x * 12.0 + sin(rg.y + time) * 4.0), 1.0);
    float b = mod(sin(rb.y * 14.0 + sin(rb.x + time) * 4.0), 1.0);
    gl_FragColor = vec4(r, g, b, 1.0);
}