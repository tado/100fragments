uniform float time;
uniform vec2 resolution;
varying vec2 v_texcoord;

void main(void){
  vec2 st = v_texcoord;
  st -= 0.5;
  vec3 color;
  for(float i = 0.0; i < 8.0; i++){
    st.y += sin(st.x *5 + time * 5.0 + i * 40.0) * 0.12 * cos(time * 1.0 + (i + 2.0) * 300.0);
    color += (1.0 - vec3(pow(abs(st.y), 0.04)));
  }
  gl_FragColor = vec4(color.r * 0.2, color.g * 1.0, color.b * 1.2, 1.0);
}
