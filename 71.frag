#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    vec3 col;
    col.r = sqrt(sin(uv.x * 22.0 + time * 102.0 + cos(uv.y * 2.0 + time * 5.0) * 4.0));
    col.g = sqrt(sin(uv.x * 23.0 + time * -103.0 + sin(uv.y * 2.2 + time * 6.0) * 5.0));
    col.b = sqrt(sin(uv.x * 24.0 + time * 104.0 + cos(uv.y * 2.5 + time * 7.0) * 6.0));
    gl_FragColor=vec4(col, 1.0);
}