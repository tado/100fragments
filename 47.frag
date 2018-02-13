uniform float time;
uniform vec2 resolution;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 12
float fbm (in vec2 st) {
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

void main() {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    st.x *= resolution.x/resolution.y;
    vec3 color = vec3(0.0);
    color += fbm(st * 2.3 + vec2(time * 0.1, time * 0.3)) * vec3(2.0, 0.5, 0.5);
    color += fbm(st * 2.2 + vec2(time * 0.2, time * 0.2)) * vec3(0.5, 0.5, 2.5);
    color += fbm(st * 2.1 + vec2(time * 0.3, time * 0.1)) * vec3(0.5, 1.5, 0.5);
    color = mod(color * 12.0, 1.0) * 1.5;
    gl_FragColor = vec4(color, 1.0);
}
