#version 120

uniform float time;
uniform vec2 resolution;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 8.0; i+=1.0){
        m = vec2(sin(time * 5.0 * i) * 0.9, cos(time * 5.2 + i) * 0.8);
        vec2 pp = vec2(random(m), random(m*2.0)) * 4.0 - 2.0;
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += 0.1 / length(pp - pos);
    }
    vec3 col = vec3 (t) * vec3(0.6, 0.8, 1.5);
    gl_FragColor = vec4(col, 1.0);
}
