#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 m = vec2(sin(time * 40.0) * 0.4 + 0.5, (cos(time*45.0) * 0.5 + 0.5) * (resolution.y / resolution.x));
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec2 p = gl_FragCoord.xy / resolution.x;
    float speed =  1.0;
    float r = pow(sin(length(m - p) * 40.0 - time * 40.0), 2.0);
    float g = pow(sin(length(m - p) * 41.0 - time * 40.0), 2.0);
    float b = pow(sin(length(m - p) * 42.0 - time * 40.0), 2.0);
    gl_FragColor = vec4(r, g, b, 1.0);
}