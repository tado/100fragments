uniform float time;
uniform vec2 resolution;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

void main(void){
    vec2 m;
    float rt;
    for(float i = 0.0; i < 2.0; i+=1.0){
        m = vec2(sin(time * 5.0 * i) * 0.9, cos(time * 5.2 + i) * 0.8);
        vec2 pp = vec2(random(m), random(m*2.0)) * 4.0 - 2.0;
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        rt += 0.1 / length(pp - pos);
    }
    vec3 r = vec3 (rt) * vec3(3.0, 0.5, 0.0);

     float gt;
    for(float i = 0.0; i < 2.0; i+=1.0){
        m = vec2(sin(time * 5.0 * i + 500.0) * 0.9, cos(time * 5.2 + i) * 0.8);
        vec2 pp = vec2(random(m * 10.0), random(m * 20.0)) * 4.0 - 2.0;
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        gt += 0.1 / length(pp - pos);
    }
    vec3 g = vec3 (gt) * vec3(0.0, 3.0, 0.5);
    float bt;
    for(float i = 0.0; i < 2.0; i+=1.0){
        m = vec2(sin(time * 5.0 * i + 1000.0) * 0.9, cos(time * 5.2 + i) * 0.8);
        vec2 pp = vec2(random(m), random(m*2.0)) * 4.0 - 2.0;
        vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        bt += 0.1 / length(pp - pos);
    }
    vec3 b = vec3 (bt) * vec3(0.0, 0.5, 3.0);
    gl_FragColor = vec4(vec3(r + g + b), 1.0);
}
