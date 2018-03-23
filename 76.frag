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
    xy = rotate( xy, time * 40. );
    float r = (sin(xy.x * 100.0 + time * 120.0)) + (sin(xy.y * 18.0 + time * 40.0));
    float g = (sin(xy.x * 110.0 + time * 120.0)) + (sin(xy.y * 19.0 + time * 40.0));
    float b = (sin(xy.x * 120.0 + time * 120.0)) + (sin(xy.y * 10.0 + time * 40.0));
    vec3 rgb = vec3(r, g, b);
    gl_FragColor = vec4( rgb, 1.0 );
}