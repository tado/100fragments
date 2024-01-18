uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main(void){
    vec2 st = gl_FragCoord.xy / resolution.xy;
    float r = mod(sin(st.x * 50.0 + time * 100.0) * 1.0, 1.9);
    float g = mod(cos(st.y * 50.0 + time * 120.0) * 1.0, 1.2);
    float b = mod(sin(st.x * 50.0 + time * -110.0) * 1.0, 1.2);
    vec4 color = vec4(r, g, b, 1.0);
    fragColor = TDOutputSwizzle(color);
}