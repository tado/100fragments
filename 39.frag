uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 80.0; i+=1.0){
        m = vec2(sin(time * sin(i)) * 1.5, cos(time * cos(i * 0.9)) * 1.7);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += sin(i * 2.0) / length(m - pos);
    }
    vec3 col = vec3 (t) * vec3(1.0, 1.0, 1.0) / 0.0;
    col = col * vec3(0.1, 0.0, 0.0) + vec3(0.0, 0.0, 0.8);
    gl_FragColor = vec4(col, 1.0);
}
