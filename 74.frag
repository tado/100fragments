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
    xy = rotate( xy, time * 200. );
    float r = abs(sin(xy.x * 200.0 + time * 10.0));
    float g = abs(sin(xy.x * 22.0 + time * 20.0));
    float b = abs(sin(xy.x * 100.0 + time * -150.0));
    vec3 rgb = vec3( r, g, b);
    gl_FragColor = vec4( rgb, 1.0 );
}