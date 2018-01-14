uniform float time;
uniform vec2 resolution;
void main() {
    vec2 m = vec2(sin(time * 1.0) * 0.4 + 0.5, (cos(time*1.2) * 0.5 + 0.5) * (resolution.y / resolution.x));
    vec2 p = gl_FragCoord.xy / resolution.x;
    float speed =  2.0;
    float r = pow(sin(length(m - p) * 40.0 - time * 40.0), 2.0);
    float g = pow(sin(length(m - p) * 40.4 - time * 40.0), 2.0);
    float b = pow(sin(length(m - p) * 40.8 - time * 40.0), 2.0);
    gl_FragColor = vec4(r, g, b, 1.0);
}