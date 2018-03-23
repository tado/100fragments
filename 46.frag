#version 120

uniform float time;
uniform vec2 resolution;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0,
                    .5+b*.5,
                    abs((sin(pos.x*3.1415)+b*2.0))*.5);
}

void main() {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    st.x *= resolution.x/resolution.y;
    vec2 pos = st.xy*vec2(10.,3.0);
    float pattern = 1.0;
    vec2 r = rotate2d( noise(pos + time * 1.0) ) * pos;
    vec2 g = rotate2d( noise(pos + time * 1.2) ) * pos;
    vec2 b = rotate2d( noise(pos + time * 1.3) ) * pos;
    vec3 col = vec3(lines(r,0.5), lines(g,0.5), lines(b,0.5));
    gl_FragColor = vec4(vec3(col),1.0);
}
