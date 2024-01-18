uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void){
    vec2 m;
    float t;
    for(float i = 0.0; i < 10.0; i+=1.0){
        m = vec2(sin(time * 1.0 * i) * 0.8, cos(time * 8.2 + i) * 0.7);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 30.0) * 0.4 + 0.9) / length(m - pos);
    }
    vec3 col = vec3 (t) * vec3(0.3, 0.5, 1.8)*0.02;
    fragColor = TDOutputSwizzle(vec4(col, 1.0));
}