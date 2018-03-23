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
    vec2 pos = st.yx*vec2(2.0,3.0);
    float pattern = 1.0;
    pos = rotate2d( noise(pos + time * 1.0) ) * pos;
    pattern = lines(pos,.5);

    vec2 pos2 = st.yx*vec2(2.0,3.0);
    pos2 = rotate2d( noise(pos2 + time + 500.0) ) * pos2;
    float pattern2 = lines(pos2, 0.2);

    vec2 pos3 = st.yx*vec2(2.0, 3.0);
    pos3 = rotate2d( noise(pos3 + time + 1000.0) ) * pos3;
    float pattern3 = lines(pos3, 0.2);
    gl_FragColor = vec4(vec3(pattern, pattern2, pattern3),1.0);
}
