uniform float time;
uniform vec2 resolution;
varying vec2 v_texcoord;

void main(void) {
    vec2 uv = -1. + 2. * v_texcoord;
    float div = 12.0;
    float speed = 2.0;
    float r = mod(v_texcoord.x + mod(time / div * speed, 1.0), 1.0 / div) * div;
    float g = mod(v_texcoord.y + mod(time / div * speed * 4.0, 1.0), 1.0 / div) * div;
    float b = mod(v_texcoord.x - mod(time / div * speed, 1.0), 1.0 / div) * div;
    gl_FragColor = vec4(r, g, b, 1.0);
}
