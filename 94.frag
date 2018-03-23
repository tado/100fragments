#version 120

uniform float time;
uniform vec2 resolution;

float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main(void){
    float level = 1.5;
    vec2 rand = vec2(time*0.1, time*0.2);
    vec3 col = vec3(random(rand) * level, random(rand*1.4) * level, random(rand*2.0) * level);
    gl_FragColor = vec4(col, 1.0);
}