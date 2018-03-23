#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    vec3 col;
    col.r = abs(sin(uv.x * 2.0 + time * 32.0 + cos(uv.y * 4.0 + time * 25.0) * 0.5));
    col.g = abs(sin(uv.x * 3.0 + time * -33.0 + cos(uv.y * 4.2 + time * 26.0) * 0.5));
    col.b = abs(sin(uv.x * 4.0 + time * 34.0 + cos(uv.y * 4.5 + time * 27.0) * 0.5));
    gl_FragColor=vec4(col, 1.0);
}