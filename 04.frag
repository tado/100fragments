uniform float time;
uniform vec2 resolution;

void main() {
    float r, g, b;
    for(float i = 1.0; i < 6.0; i++){
        vec2 m = vec2(sin(time * 0.1 + i * 4.0 ) * 0.3 + 0.5, (cos(time * 0.2 * i) * 0.3 + 0.5) * (resolution.y / resolution.x));
        vec2 p = gl_FragCoord.xy / resolution.x;
        r += sin(length(m - p) * 180.0 - time * 10.0) * 0.5;
        g += sin(length(m - p) * 181.0 - time * 10.0) * 0.5;
        b += sin(length(m - p) * 182.0 - time * 10.0) * 0.5;
    }
    gl_FragColor = vec4(r, g, b, 1.0);
}
