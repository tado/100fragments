uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main(void) {
    float level = 1.0;
    vec2 rand = vec2(time * 2.0, time * 3.2);
    vec3 col = vec3(random(rand) * level, random(rand * 1.3) * level, random(rand * 1.4) * level);
    fragColor = TDOutputSwizzle(vec4(col, 1.0));
}