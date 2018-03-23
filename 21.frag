#version 120

uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 st = gl_FragCoord.xy / resolution.xy;
    float r = mod(sin(st.x * 50.0 + time * 100.0) * 1.0, 1.9);
    float g = mod(cos(st.y * 50.0 + time * 120.0) * 1.0, 1.2);
    float b = mod(sin(st.x * 50.0 + time * -110.0) * 1.0, 1.2);
    gl_FragColor = vec4(r, g, b, 1.0);
}