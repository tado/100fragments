#version 120

uniform float time;
uniform vec2 resolution;

vec2 rotate( vec2 matrix, float angle ) {
    return vec2( matrix.x*cos(radians(angle)), matrix.x*sin(radians(angle)) ) + vec2( matrix.y*-sin(radians(angle)), matrix.y*cos(radians(angle)) );
}

void main() {
    float scale  = min( resolution.x, resolution.y );
    float width  = resolution.x / scale;
    float height = resolution.y / scale;
    vec2 xy = gl_FragCoord.xy / scale - vec2( width/2., height/2. );
    xy = rotate( xy, time * 150. );
    float gx = sin(xy.x * 120.0 + time * 20.0);
    float gy = sin(xy.y * 4.0 + time * 30.0);
    float gr = gx * gy;
    vec3 rgb = vec3(gr * 1.5);
    gl_FragColor = vec4( rgb, 1.0 );
}