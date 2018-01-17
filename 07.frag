uniform float time;
uniform vec2 resolution;
varying vec2 v_texcoord;

void main (void){
    vec2 uv = vec2(0.5, 0.5 * (resolution.y / resolution.x)) - gl_FragCoord.xy / resolution.x;
    float dist = sqrt(dot(uv, uv));
    float radius = cos(time) * 0.05 + 0.2;
    float border = sin(time) * 0.02 + 0.05;
    float t = smoothstep(radius + border, radius - border, dist);
    gl_FragColor = vec4(t * 0.6, t, t * 1.5, 1.0);
}
