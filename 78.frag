#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = gl_FragCoord.xy / resolution.x * 0.7;
    for(float i = 1.0; i < 20.0; i++){
        p.x += 0.1 / i * sin(i * 10.0 * p.y + time + cos((time / (12. * i)) * i));
        p.y += 0.1 / i * cos(i * 10.0 * p.x + time + sin((time / (12. * i)) * i));
    }
    float r = pow(abs(p.x + p.y), 1.2);
    gl_FragColor = vec4(r, r, r, 1.);
}