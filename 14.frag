uniform float time;
uniform vec2 resolution;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 st = vec2(gl_FragCoord.x/resolution.x, gl_FragCoord.y/resolution.x) ;
    st *= 40.0;
    vec2 ipos = floor(st);
    float speed = 60.0;
    vec3 color = vec3(random(ipos + vec2(int(time * speed), 0.0)), random(ipos + vec2(int(time * speed), 1.0)), random(ipos + vec2(int(time * speed), 2.0)));
    gl_FragColor = vec4(color,1.0);
}
