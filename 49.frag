uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void){
    vec2 m;
    float t = 0.0;
    for(float i = 0.0; i < 4.0; i+=1.0){
        m = vec2(sin(time * 5.0 * i) * 0.9, cos(time * 5.2 + i) * 0.8);
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        t += (sin(i * 30.0) * 0.05 + 0.2) / length(m - pos);
    }
    vec3 col = vec3 (t) * vec3(1.5, 1.0, 0.3);
    vec4 color = vec4(col, 1.0);
    fragColor = TDOutputSwizzle(color);
}
