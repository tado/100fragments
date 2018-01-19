uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 st = gl_FragCoord.xy / resolution.xy;
    float r = abs(sin(st.x + time));
    float g = abs(cos(st.y + time));
    float b = 0.5;
    gl_FragColor = vec4(r, g, b, 1.0);
}
