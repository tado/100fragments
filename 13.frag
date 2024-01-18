uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec2 st = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.x);
    st *= 40.0;
    vec2 ipos = floor(st);
    vec4 color = vec4(random(ipos + time), 
    random(ipos + time*1.2), 
    random(ipos + time*1.3), 1.0);
    fragColor = TDOutputSwizzle(color);
}
