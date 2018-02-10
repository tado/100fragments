uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 5.0; i+=1.0){
        m = vec2(sin(time * i * 1.04) * 2.5, cos(time * 2.02 + i) * 2.5);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 100.0) * 8.0) / length(m - pos);
    }
    vec3 col = mod(vec3 (t) * vec3(2.0, 0.8, 1.6) * 0.2, 1.7);
    gl_FragColor = vec4(col, 1.0);
}
