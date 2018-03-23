#version 120

uniform float time;
uniform vec2 resolution;

void main(void){
    vec2 st = gl_FragCoord.xy / resolution.xy;
    st -= 0.5;
    vec3 color = vec3(0.0, 0.0, 0.0);
    for(float i = 0.0; i < 12.0; i++){
        st.y += sin(st.x * 4.0 + time * 2.0 + i * 40.0) * 0.2 * cos(time + (i + 2.0) * 300.0);
        color += (1.0 - vec3(pow(abs(st.y), 0.03)));
    }
    color = vec3(color.r * 2.0, color.g * 0.9, color.b * 0.0);
    gl_FragColor = vec4(color, 1.0);
}
