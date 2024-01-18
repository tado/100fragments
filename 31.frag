uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void){
    vec2 m;
    float t = 0.0;
    for(float i = 0.0; i < 20.0; i+=1.0){
        m = vec2(sin(time * 0.3 * i) * 0.8, cos(time * 0.2 + i) * 0.7);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 30.0) * 0.4 + 0.9) / length(m - pos);
    }
    vec3 col = vec3 (t) * vec3(0.3, 0.5, 1.8)*0.05;
    fragColor = TDOutputSwizzle(vec4(col, 1.0));
}