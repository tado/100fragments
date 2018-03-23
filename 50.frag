#version 120

uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 3.0; i+=1.0){
        m = vec2(sin(time * 2.0 * (i + 1.0)) * 1.0, cos(time * 5.2 + (i + 3.0)) * 0.2);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += 0.8 / length(m - pos);
    }
    vec3 col = vec3 (t) * vec3(0.3, 0.1, 1.0) * 1.0;
    gl_FragColor = vec4(col, 1.0);
}
