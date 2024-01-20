uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x), mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float lines(in vec2 pos, float b) {
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0, .5 + b * .5, abs((sin(pos.x * 3.1415) + b * 2.0)) * .5);
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    st.x *= resolution.x / resolution.y;
    vec2 pos = st.xy * vec2(1.0, 1.0);
    float pattern = 0.0;
    pos = rotate2d(noise(pos * 0.5 + time * 2.0) * 3.0) * pos;
    pattern = 1.0 - lines(pos, 0.28) * 4.0;
    vec3 col = vec3(pattern, pattern, pattern) * vec3(0.7, 1.0, 1.5);
    fragColor = TDOutputSwizzle(vec4(vec3(col), 1.0));
}