uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    st.x *= resolution.x / resolution.y;
    vec3 color = vec3(.0);
    st *= 8.;
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);
    float m_dist = 1.;
    for(int y = -1; y <= 1; y++) {
        for(int x = -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = random2(i_st + neighbor);
            point = 0.5 + 0.5 * sin(time * 2.0 + 80.0 * point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);
            m_dist = min(m_dist, dist);
        }
    }
    color += m_dist;
    color += 1.0 - step(.02, m_dist) * vec3(1.5, 1.0, 0.0);
    color += mod(m_dist * 3.0, 0.5);
    fragColor = TDOutputSwizzle(vec4(color, 1.0));
}