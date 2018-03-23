#version 120

uniform float time;
uniform vec2 resolution;

float rand(float n){return fract(sin(n) * 43758.5453123);}

void main(void){
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 color = vec3(0.0, 0.0, 0.0);
    for(float i = 0.0; i < 14.0; i+=1.0){
        float f1 = 1.0 / (200.0 * abs(mod((time * (i + 4.0) + rand(i*10.0) * 10.0) * -0.10, 1.0) - uv.x + sin(uv.y * 2.0 + time * 40.0) * 0.1));
        float f2 = 1.0 / (500.0 * abs(mod((time * (i + 5.0) + rand(i*20.0) * 10.0) * 0.11, 1.0) - uv.x + cos(uv.y * 2.3 + time * 42.0) * 0.1));
        float f3 = 1.0 / (500.0 * abs(mod((time * (i + 6.0) + rand(i*30.0) * 10.0) * 0.12, 1.0) - uv.x + sin(uv.y * -2.5 + time * -44.0) * 0.1));
        color += f1 * vec3(0.1, 0.1, 1.5) + f2 * vec3(0.0, 1.0, 0.5)+ f3 * vec3(1.0, 0.1, 0.1);
    }
    gl_FragColor = vec4(color, 1.0);
}