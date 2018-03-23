#version 120

uniform float time;
uniform vec2 resolution;

void main (void){
    float radius = cos(time * 10.0) * 0.1 + 0.1;
    float border = sin(time * 10.0) * 0.2 + 0.05;
    float t;
    
    vec2 uv0 = vec2(0.25, 0.5 * (resolution.y / resolution.x)) - gl_FragCoord.xy / resolution.x;
    float dist0 = sqrt(dot(uv0, uv0));
    t += smoothstep(radius + border, radius - border,  dist0);
    
    vec2 uv1 = vec2(0.75, 0.5 * (resolution.y / resolution.x)) - gl_FragCoord.xy / resolution.x;
    float dist1 = sqrt(dot(uv1, uv1));
    t += smoothstep(radius + border, radius - border,  dist1);
    
    gl_FragColor = vec4(t * 0.6, t, t * 1.5, 1.0);
}