#version 120

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = gl_FragCoord.xy / resolution.x * 0.7;
    vec3 col;
    for(float j = 0.0; j < 3.0; j++){
        for(float i = 1.0; i < 10.0; i++){
            p.x += 0.1 / (i + j) * sin(i * 10.0 * p.y + time + cos((time / (12. * i)) * i + j));
            p.y += 0.1 / (i + j)* cos(i * 10.0 * p.x + time + sin((time / (12. * i)) * i + j));
        }
        col[j] = abs(p.x + p.y);
    }
    gl_FragColor = vec4(col, 1.);
}