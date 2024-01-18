uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

#define TWO_PI 6.28318530718

vec3 hsb2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(){
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec2 toCenter = vec2(0.5, 0.5)-st;
    float angle = atan(toCenter.y, toCenter.x);
    float radius = length(toCenter) * 2.0;
    vec3 color = hsb2rgb(vec3((angle / TWO_PI)+mod(time * 0.2, 1.0), radius, 1.0));
    fragColor = TDOutputSwizzle(vec4(color.r, color.g, color.b, 1.0));
}