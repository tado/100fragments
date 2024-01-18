uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

void main (void){
    vec2 uv1 = vec2(0.25, 0.5 * (resolution.y / resolution.x)) - gl_FragCoord.xy / resolution.x;
    float dist1 = sqrt(dot(uv1, uv1));
    float radius = cos(time * 10.0) * 0.1 + 0.2;
    float border = sin(time * 10.0) * 0.2 + 0.05;
    float t1 = smoothstep(radius + border, radius - border, dist1);
    vec4 color1 = vec4(t1 * 2.0, t1 * 0.5, t1 * 0.2, 1.0);

    vec2 uv2 = vec2(0.75, 0.5 * (resolution.y / resolution.x)) - gl_FragCoord.xy / resolution.x;
    float dist2 = sqrt(dot(uv2, uv2));
    float t2 = smoothstep(radius + border, radius - border, dist2);
    vec4 color2 = vec4(t2 * 2.0, t2 * 0.5, t2 * 0.2, 1.0);

    vec4 color = color1 + color2;
    fragColor = TDOutputSwizzle(color);
}