#version 120

uniform float time;
uniform vec2 resolution;

float rand(float n){return fract(sin(n) * 43758.5453123);}

void main(void) {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec2 uv = st;
    float div = rand(time);
    float speed = 10.0;
    float r = mod(st.x + mod(time / div * speed, 1.0), 1.0 / div) * div;
    float g = mod(st.y + mod(time / div * speed * 1.0, 1.0), 1.0 / div) * div;
    float b = mod(st.x - mod(time / div * speed, 1.0), 1.0 / div) * div;
    gl_FragColor = vec4(r, g, b, 1.0);
}