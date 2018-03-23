#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    vec3 col;
    col.r = sin(uv.x * 20.0 + time * 80.0 + cos(uv.y * 10.0 + time * 5.0) * 0.5);
    col.g = sin(uv.x * 20.0 + time * -60.0 + cos(uv.y * 12.0 + time * 6.0) * 0.75);
    col.b = sin(uv.x * 20.0 + time * 80.0 + cos(uv.y * 14.0 + time * 7.0));
    gl_FragColor=vec4(col * 1.5, 1.0);
}