#version 120

uniform float time;
uniform vec2 resolution;

void main(void)
{
    vec3 c;
    float l,z=time*1.0;
    for(int i=0;i<3;i++) {
        vec2 uv,p= gl_FragCoord.xy/resolution;
        uv=p;
        p-=.5;
        p.x*=resolution.x/resolution.y;
        z+=.07;
        l=length(p);
        uv+=p/l*(sin(z)+32.)*abs(sin(l*1.0-z*1.5));
        c[i]=.08/length(abs(mod(uv,1.5)-.5));
    }
    gl_FragColor=vec4(c/l,time);
}
