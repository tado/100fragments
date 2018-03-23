#version 120

uniform float time;
uniform vec2 resolution;

void main( void ) {
    vec2 pos = ( gl_FragCoord.xy / resolution.xy ) - vec2(0.5,0.5); 
    float horizon = 0.0; 
    float fov = 0.5; 
    float scaling = 0.2;
    vec3 p = vec3(pos.y, fov, pos.x - horizon);      
    vec2 s = vec2(p.x/p.z, p.y/p.z) * scaling + time * 0.7;
    float color = sign((mod(s.x, 0.1) - 0.05) * (mod(s.y, 0.1) - 0.05));    
    color *= p.z*p.z * 15.0;
    gl_FragColor = vec4( vec3(color), 1.0 );
}