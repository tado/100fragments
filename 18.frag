uniform float time;
varying vec2 v_texcoord;

void main(void){
    vec2 grad = v_texcoord;
    float r = abs(sin(grad.x + time));
    float g = abs(cos(grad.y + time));
    float b = 0.5;
    gl_FragColor = vec4(r, g, b, 1.0);
}
