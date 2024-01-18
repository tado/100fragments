uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

float rand(float n){return fract(sin(n) * 43758.5453123);}

void main(void){
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 color = vec3(0.0, 0.0, 0.0);
    for(float i = 0.0; i < 10.0; i+=1.0){
        float f1 = 1.0 / (100.0 * abs(mod((time * (i + 2.0) + rand(i*10.0) * 10.0) * -0.10, 1.0) - uv.y));
        float f2 = 1.0 / (400.0 * abs(mod((time * (i + 2.0) + rand(i*20.0) * 10.0) * 0.11, 1.0) - uv.y));
        float f3 = 1.0 / (200.0 * abs(mod((time * (i + 2.0) + rand(i*30.0) * 10.0) * 0.12, 1.0) - uv.x));
        float f4 = 1.0 / (200.0 * abs(mod((time * (i + 2.0) + rand(i*30.0) * 10.0) * -0.15, 1.0) - uv.x));
        color += f1 * vec3(0.1, 0.1, 1.0) 
                + f2 * vec3(0.0, 1.0, 0.5) 
                + f3 * vec3(1.0, 0.1, 0.4)
                + f4 * vec3(1.0, 0.5, 0.0)
                ;
    }
    vec4 fcol = vec4(color, 1.0);
    fragColor = TDOutputSwizzle(fcol);
}