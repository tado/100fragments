uniform float time;
uniform vec2 resolution;
varying vec2 v_texcoord;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 st = vec2(gl_FragCoord.x/resolution.x, gl_FragCoord.y/resolution.x) ;
    st *= 40.0;
    vec2 ipos = floor(st);
    int speed = 60;
    vec3 color = vec3(random(ipos + vec2(int(time * speed), 0)), random(ipos + vec2(int(time * speed), 1)), random(ipos + vec2(int(time * speed), 2)));
    gl_FragColor = vec4(color,1.0);
}