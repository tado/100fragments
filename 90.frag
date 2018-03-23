#version 120

uniform float time;
uniform vec2 resolution;

vec2 rotate( vec2 matrix, float angle ) {
    return vec2( matrix.x*cos(radians(angle)), matrix.x*sin(radians(angle)) ) + vec2( matrix.y*-sin(radians(angle)), matrix.y*cos(radians(angle)) );
}

void main(){
    vec2 st = gl_FragCoord.xy/resolution.xy;
    st = st * 1. - 0.5;
    st.y *= resolution.y/resolution.x;
    vec2 rr = rotate(st, cos(time * 1.0) * 180.0);
    vec2 rg = rotate(st, cos(time * 1.4) * -180.0);
    vec2 rb = rotate(st, sin(time * 1.6) * 180.0);
    vec3 col = vec3(0.0);
    col.r = length(abs(rr)-sin(time*2.0) * 0.2);
    col.g = length(abs(rg)-cos(time*2.1) * 0.22);
    col.b = length(abs(rb)+sin(time*2.2) * 0.24);
    col = mod(col * 20.0, 1.8);
    gl_FragColor = vec4(col,1.0);
}