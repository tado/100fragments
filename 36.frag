uniform float time;
uniform vec2 resolution;

void main() {
    vec2 m;
    float t;
    for(float i = 0.0; i < 10.0; i+=1.0){
        m = vec2(sin(time * (i + 3.0) * 1.04) * 2.5, cos(time * 1.02 + (i + 3.0)) * 2.5);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 200.0) * 29.0) / length(m - pos);
    }
    vec3 col = 1.0 - mod(vec3 (t) * vec3(0.2, 0.8, 0.6) * 0.13, 1.0);
    gl_FragColor = vec4(col, 1.0);
}
