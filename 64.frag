uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void){
    vec2 st = gl_FragCoord.xy/resolution.xy;
    float r = floor(sin(st.y * 12.0 + time * 40.0) * 1.0 + 0.25);
    float g = floor(sin(st.x * 12.0 + time * -52.0) * 1.0 + 0.25);
    float b = floor(sin(st.y * 12.0 + time * 64.0) * 1.0 + 0.25);
    vec3 col = vec3(r, g, b) + vec3(0.0, 0.5, 1.5);
    vec4 color = vec4(col, 1.0);
    fragColor = TDOutputSwizzle(color);
}
