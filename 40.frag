uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void){
    vec2 m;
    float t = 0.0;
    for(float i = 0.0; i < 60.0; i+=1.0){
        m = vec2(sin(time * sin(i+3.0) *4.0) * 1.0, cos(time * cos(i + 3.0) * 4.0) * 1.0);
        vec2 pos = (gl_FragCoord.xy * 1.0 - resolution) / min(resolution.x, resolution.y);
        t += sin(i * 2.0) / length(m - pos);
    }
    vec3 col = vec3 (t) / 0.1;
    col = col * vec3(0.0, 0.5, 1.0);
    vec4 color = vec4(col, 1.0);
    fragColor = TDOutputSwizzle(color);
}
