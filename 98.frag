#version 120

uniform float time;
uniform vec2 resolution;

void main( void ) {
    vec2 pos = ( gl_FragCoord.xy / resolution.xy ) - vec2(0.5,0.5); 
    float horizon = 0.0; 
    float fov = 0.5; 
    float scaling = 0.1;
    vec3 p = vec3(pos.y, fov, pos.x - horizon);      
    vec2 sr = vec2(p.x/p.z, p.y/p.z) * scaling + time * 0.5;
    vec2 sg = vec2(p.x/p.z, p.y/p.z) * scaling * 1.2 + time * 0.7;
    vec2 sb = vec2(p.x/p.z, p.y/p.z) * scaling * 1.5 + time * -0.6;
    vec3 color;
    color.r = sign((mod(sr.x, 0.1) - 0.05) * (mod(sr.y, 0.1) - 0.05));
    color.g = sign((mod(sg.x, 0.1) - 0.05) * (mod(sg.y, 0.1) - 0.05));
    color.b = sign((mod(sb.x, 0.1) - 0.05) * (mod(sb.y, 0.1) - 0.05)); 
    gl_FragColor = vec4( vec3(color), 1.0 );
}