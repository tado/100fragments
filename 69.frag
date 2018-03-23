#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    vec3 col;
    col.r = sin(uv.x * 100.0 + time * 10.0 + cos(uv.y * 10.0 + time * 50.0) * sin(time * 1.0) * 3.0);
    col.g = cos(uv.x * 150.0 + time * 20.0 + sin(uv.y * 15.0 + time * 60.0) * cos(time * 1.2) * 3.0);
    col.b = sin(uv.x * 160.0 + time * 30.0 + cos(uv.y * 16.0 + time * 70.0) * sin(time * 1.8) * 3.0);
    gl_FragColor=vec4(col * 1.5, 1.0);
}