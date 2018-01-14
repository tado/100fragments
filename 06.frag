uniform float time;
uniform vec2 resolution;
varying vec2 v_texcoord;
void main(void) {
    vec2 uv = v_texcoord;
    float v = pow(sin(time * 40.0 + sin(time) * 4.0), 2);
    gl_FragColor = vec4(v, v, v, 1.0);
}