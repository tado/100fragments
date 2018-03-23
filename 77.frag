#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = gl_FragCoord.xy / resolution.x;
    for(float i = 1.0; i < 4.0; i++){
        p.x += 1.0 / i * sin(i * 3.0 * p.y + time + cos((time / (100. * i)) * i));
        p.y += 1.0 / i * cos(i * 3.0 * p.x + time + sin((time / (100. * i)) * i));
    }
    float r = cos(p.x + p.y);
    float g = sin(p.x + p.y);
    float b = (sin(p.x + p.y) + cos(p.x + p.y));
    gl_FragColor = vec4(r, g, b, 1.);
}