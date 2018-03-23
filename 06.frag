#version 120

uniform float time;

void main(void) {
    float r = abs(pow(sin(time * 30.0 + sin(time) * 3.0), 3.0));
    float g = abs(pow(sin(time * 32.0 + sin(time) * 3.0), 3.0));
    float b = abs(pow(cos(time * 30.0 + sin(time) * 3.0), 3.0));
    gl_FragColor = vec4(r, g, b, 1.0);
}
