uniform float time;
uniform vec2 resolution;
out vec4 fragColor;

vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);
    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);
    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);
    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));
    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
    return o4.y * d.y + o4.x * (1.0 - d.y);
}

void main(void) {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec2 pos = vec2(st) * vec2(0.1, 120.0);
    float speed = 20.0;
    float brightness = 1.4;
    float r = abs(noise(vec3(pos.x, pos.y, time * speed)) * brightness);
    float g = abs(noise(vec3(pos.x, pos.y + 0.2, time * speed + 10.0)) * brightness);
    float b = abs(noise(vec3(pos.x, pos.y + 0.4, time * speed + 20.0)) * brightness);
    vec4 color = vec4(vec3(r, g, b), 1.0);
    fragColor = TDOutputSwizzle(color);
}