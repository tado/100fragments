#version 120

uniform float time;
uniform vec2 resolution;

void main(){
    vec3 c;
    float l;
    float z = time;
    for(int i = 0; i < 3; i++) {
        vec2 uv = gl_FragCoord.xy/resolution.xy;
        vec2 p = uv;
        p -= 0.5;
        p.x *= resolution.x/resolution.y;
        z += .004;
        l = sin(length(p));
        uv += p / 1.0 - sin(l * 20.0 - z * 60.0) * 1.0;
        c[i] = l / length(uv);
    }
    gl_FragColor=vec4(c, 1.0);
}
