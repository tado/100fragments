#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = gl_FragCoord.xy / resolution.xy *  0.75;
    for(float i = 1.0; i < 10.0; i++){
        p.x += 0.3 / i * (i * 1.0 * p.y + time * 4.0 + cos((time / (100. * i)) * i));
        p.y += 0.4 / i * cos(i * 4.0 * p.x + time * 5.0 + sin((time / (200. * i)) * i));
    }
    float r = cos(p.x + p.y + 2.)*.5+.5;
    float g = sin(p.x + p.y + 1.)*.5+.5;
    float b = (sin(p.x + p.y + 1.) + cos(p.x + p.y + 1.))*.5+ 0.5;
    vec3 col = mod(vec3(r, g, b) * 3.0, 1.0) * 1.2;
    gl_FragColor = vec4(col, 1.0);
}
