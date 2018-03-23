#version 120

uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 6.0; i+=1.0){
        m = vec2(sin(time * 1.0 * i) * 2.0, cos(time * 4.2 + i) * 1.5 );
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 30.0) * 0.3 + 2.0) / length(m - pos);
    }    
    vec3 col = 1.0 - mod(vec3 (t) * vec3(1.6, 0.8, 2.3), 1.7);
    gl_FragColor = vec4(col, 1.0);
}