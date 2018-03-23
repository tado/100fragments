#version 120

uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 3.0; i+=1.0){
        m = vec2(sin(time * 5.0 * i) * 0.8, cos(time * 8.2 + i) * 0.7);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 30.0) * 0.4 + 0.9) / length(m - pos);
    }
    vec3 col = vec3 (t) * vec3(1.8, 0.5, 0.3) * 0.5;
    gl_FragColor = vec4(col, 1.0);
}
